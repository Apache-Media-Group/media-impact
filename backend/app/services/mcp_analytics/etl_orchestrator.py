import os
import time
import uuid
import logging
from datetime import datetime, date, timedelta, timezone
from typing import Dict, Any, List, Optional, Tuple

from google.cloud import firestore
from app.services.auth_utils import TokenManager
from app.services.mcp_analytics.secret_manager_service import SecretManagerService
from app.services.mcp_analytics.etl_service import MCPETLService

logger = logging.getLogger(__name__)

# Presupuesto estricto de tiempo para el bucle horario (20 minutos)
MAX_BUDGET_SECONDS = 20 * 60  # 1200s (permite completar dentro de los 25m de Cloud Scheduler)
# TTL del candado distribuido (25 minutos)
LOCK_TTL_SECONDS = 25 * 60    # 1500s


class ETLOrchestrator:
    """
    Orquestador Centralizado de ETL multi-inquilino.
    Implementa el patrón Single Heartbeat Scheduler con control de presupuesto de tiempo,
    cola priorizada por antigüedad, prevención de poison pills y auto-migración/retrofitting
    de inquilinos existentes.
    """

    def __init__(self, project_id: Optional[str] = None):
        self.project_id = project_id or os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
        self._tm = TokenManager(project_id=self.project_id)
        self.sms = SecretManagerService(project_id=self.project_id)

    @property
    def db(self) -> firestore.Client:
        return self._tm.db

    @staticmethod
    def _parse_utc_datetime(val: Any) -> Optional[datetime]:
        """
        Convierte de forma segura cualquier representación de fecha/hora (ISO string,
        timestamp Firestore, epoch, datetime con o sin timezone) a un datetime UTC offset-aware.
        Evita categóricamente el error: "can't subtract offset-naive and offset-aware datetimes".
        """
        if not val:
            return None
        try:
            if isinstance(val, datetime):
                if val.tzinfo is None:
                    return val.replace(tzinfo=timezone.utc)
                return val.astimezone(timezone.utc)
            
            if hasattr(val, "to_datetime"):  # google.cloud.firestore_v1.types.Timestamp
                dt = val.to_datetime()
                if dt.tzinfo is None:
                    return dt.replace(tzinfo=timezone.utc)
                return dt.astimezone(timezone.utc)
            
            if isinstance(val, (int, float)):
                return datetime.fromtimestamp(val, tz=timezone.utc)
            
            if isinstance(val, str):
                s = val.strip().replace("Z", "+00:00")
                try:
                    dt = datetime.fromisoformat(s)
                    if dt.tzinfo is None:
                        return dt.replace(tzinfo=timezone.utc)
                    return dt.astimezone(timezone.utc)
                except Exception:
                    for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%d"):
                        try:
                            dt = datetime.strptime(s, fmt)
                            return dt.replace(tzinfo=timezone.utc)
                        except Exception:
                            pass
        except Exception:
            pass
        return None

    # -------------------------------------------------------------------------
    # 1. Retrofitting & Auto-Migración de Inquilinos Existentes
    # -------------------------------------------------------------------------
    def normalize_and_retrofit_tenant(self, tdata: Dict[str, Any], auto_persist: bool = True) -> Dict[str, Any]:
        """
        Garantiza que cualquier inquilino existente (creado bajo esquemas previos)
        adopte automáticamente los campos necesarios para la nueva orquestación
        sin romper compatibilidad ni requerir scripts manuales de migración.
        """
        tenant_id = tdata.get("tenant_id", "").strip().lower()
        if not tenant_id:
            return tdata

        modified = False
        updates: Dict[str, Any] = {}

        # 1. Estado activo
        if "enabled" not in tdata:
            tdata["enabled"] = True
            updates["enabled"] = True
            modified = True

        # 2. Cadencia de sincronización predeterminada (diario @ 03:00 UTC)
        if "sync_cadence" not in tdata or tdata["sync_cadence"] not in ["daily", "every_6h", "hourly"]:
            tdata["sync_cadence"] = "daily"
            updates["sync_cadence"] = "daily"
            modified = True

        if "preferred_hour_utc" not in tdata or not isinstance(tdata.get("preferred_hour_utc"), int):
            tdata["preferred_hour_utc"] = 3  # 03:00 UTC estándar
            updates["preferred_hour_utc"] = 3
            modified = True

        # 3. Control de fallos consecutivos y poison pills
        if "consecutive_failures" not in tdata:
            tdata["consecutive_failures"] = 0
            updates["consecutive_failures"] = 0
            modified = True

        if "is_running_now" not in tdata:
            tdata["is_running_now"] = False
            updates["is_running_now"] = False
            modified = True

        if "last_execution_status" not in tdata:
            tdata["last_execution_status"] = "IDLE"
            updates["last_execution_status"] = "IDLE"
            modified = True

        # 4. Timestamps de ejecución: si no existen, buscar última corrida exitosa histórica en etl_runs
        if "last_successful_execution" not in tdata or not tdata.get("last_successful_execution"):
            latest_run = self._lookup_latest_successful_run(tenant_id)
            tdata["last_successful_execution"] = latest_run
            updates["last_successful_execution"] = latest_run
            modified = True
        else:
            # Normalizar timestamp existente a formato UTC ISO offset-aware
            parsed_success = self._parse_utc_datetime(tdata["last_successful_execution"])
            if parsed_success:
                norm_str = parsed_success.isoformat()
                if norm_str != tdata["last_successful_execution"]:
                    tdata["last_successful_execution"] = norm_str
                    updates["last_successful_execution"] = norm_str
                    modified = True

        if "last_attempt_at" not in tdata or not tdata.get("last_attempt_at"):
            tdata["last_attempt_at"] = tdata.get("last_successful_execution")
            updates["last_attempt_at"] = tdata.get("last_successful_execution")
            modified = True
        else:
            parsed_attempt = self._parse_utc_datetime(tdata["last_attempt_at"])
            if parsed_attempt:
                norm_str = parsed_attempt.isoformat()
                if norm_str != tdata["last_attempt_at"]:
                    tdata["last_attempt_at"] = norm_str
                    updates["last_attempt_at"] = norm_str
                    modified = True

        # Auto-persistencia transparente en Firestore
        if auto_persist and modified and self.db:
            try:
                self.db.collection("tenants").document(tenant_id).set(updates, merge=True)
                logger.info(f"🔄 Inquilino '{tenant_id}' migrado y retrofiteado con éxito a la nueva orquestación.")
            except Exception as e:
                logger.warning(f"No se pudo auto-persistir retrofitting para '{tenant_id}': {e}")

        return tdata

    def _lookup_latest_successful_run(self, tenant_id: str) -> Optional[str]:
        """Busca en etl_runs la última ejecución exitosa previa para inicializar la fecha."""
        if not self.db:
            return None
        try:
            runs = (
                self.db.collection("etl_runs")
                .where("tenant_id", "==", tenant_id)
                .where("status", "==", "success")
                .limit(5)
                .stream()
            )
            dates = []
            for r in runs:
                rdata = r.to_dict()
                completed = rdata.get("completed_at") or rdata.get("timestamp")
                if completed:
                    dt = self._parse_utc_datetime(completed)
                    if dt:
                        dates.append(dt.isoformat())
            if dates:
                dates.sort(reverse=True)
                return dates[0]
        except Exception as e:
            logger.debug(f"Búsqueda histórica de corridas para '{tenant_id}' omitida: {e}")
        return None

    # -------------------------------------------------------------------------
    # 2. Candado Distribuido con Lease TTL (Prevención de Deadlocks)
    # -------------------------------------------------------------------------
    def acquire_lease_lock(self, cycle_id: str) -> bool:
        """
        Adquiere el Lease Lock en Firestore si está libre o si el anterior ha expirado.
        TTL estricto de 25 minutos para garantizar recuperación automática ante caídas.
        """
        if not self.db:
            return True  # Modo local/mock sin BD

        now = datetime.now(timezone.utc)
        expires_at = now + timedelta(seconds=LOCK_TTL_SECONDS)
        lock_ref = self.db.collection("_orchestrator_locks").document("hourly_lock")

        try:
            doc = lock_ref.get()
            if doc.exists:
                ldata = doc.to_dict() or {}
                is_locked = ldata.get("locked", False)
                raw_expires = ldata.get("lock_expires_at")
                
                if is_locked and raw_expires:
                    try:
                        exp_dt = self._parse_utc_datetime(raw_expires)
                        if exp_dt:
                            if now < exp_dt:
                                logger.warning(
                                    f"⏳ Lease Lock ocupado por el ciclo '{ldata.get('cycle_id')}' "
                                    f"hasta {exp_dt.isoformat()}. Omitiendo nuevo tick."
                                )
                                return False
                            else:
                                logger.info(f"🔓 Lease Lock previo expiró a las {exp_dt.isoformat()}. Reclamando lock.")
                    except Exception:
                        pass  # Formato de fecha inválido, sobreescribir

            # Adquirir lock
            lock_ref.set({
                "locked": True,
                "cycle_id": cycle_id,
                "locked_at": now.isoformat(),
                "lock_expires_at": expires_at.isoformat(),
                "hostname": os.getenv("HOSTNAME", "cloud-run-instance")
            })
            logger.info(f"🔐 Lease Lock adquirido exitosamente para el ciclo '{cycle_id}' (TTL: 25 min).")
            return True
        except Exception as e:
            logger.error(f"Error al verificar/adquirir Lease Lock en Firestore: {e}")
            return False

    def release_lease_lock(self, cycle_id: str):
        """Libera el Lease Lock una vez finalizado el ciclo."""
        if not self.db:
            return
        try:
            now = datetime.now(timezone.utc).isoformat()
            lock_ref = self.db.collection("_orchestrator_locks").document("hourly_lock")
            lock_ref.set({
                "locked": False,
                "last_cycle_id": cycle_id,
                "released_at": now
            }, merge=True)
            logger.info(f"🔓 Lease Lock liberado para el ciclo '{cycle_id}'.")
        except Exception as e:
            logger.error(f"Error al liberar Lease Lock: {e}")

    def reset_lease_lock_emergency(self) -> Dict[str, Any]:
        """Liberación forzada del lock por parte de un Superadministrador."""
        if not self.db:
            return {"status": "ok", "message": "No database attached"}
        now = datetime.now(timezone.utc).isoformat()
        self.db.collection("_orchestrator_locks").document("hourly_lock").set({
            "locked": False,
            "force_unlocked_at": now
        }, merge=True)
        return {"status": "success", "message": "Lease Lock reseteado forzosamente por superadmin."}

    # -------------------------------------------------------------------------
    # 3. Lógica de Elegibilidad y Ordenación de Cola
    # -------------------------------------------------------------------------
    def is_tenant_due_for_sync(self, tenant: Dict[str, Any], current_utc: datetime) -> bool:
        """
        Determina si a un inquilino le corresponde sincronizarse en la hora actual
        según su cadencia configurada y su última ejecución exitosa.
        """
        cadence = tenant.get("sync_cadence", "daily")
        last_success_val = tenant.get("last_successful_execution")

        if not last_success_val:
            return True  # Nunca se ha ejecutado -> Ejecutar de inmediato

        last_dt = self._parse_utc_datetime(last_success_val)
        if not last_dt:
            return True

        curr_dt = self._parse_utc_datetime(current_utc) or datetime.now(timezone.utc)
        elapsed_seconds = (curr_dt - last_dt).total_seconds()

        if cadence == "hourly":
            # Si pasaron al menos 50 minutos desde el último éxito
            return elapsed_seconds >= 50 * 60

        elif cadence == "every_6h":
            # Si pasaron al menos 5.8 horas
            return elapsed_seconds >= 5.8 * 3600

        else:  # daily
            # Si pasaron más de 23 horas, o si ya es otro día UTC y estamos en o tras su hora preferida
            preferred_hour = tenant.get("preferred_hour_utc", 3)
            is_different_day = curr_dt.date() > last_dt.date()
            hour_reached = curr_dt.hour >= preferred_hour
            return elapsed_seconds >= 23 * 3600 or (is_different_day and hour_reached)

    # -------------------------------------------------------------------------
    # 4. Ejecución del Bucle Horario (Presupuesto de 20 minutos)
    # -------------------------------------------------------------------------
    async def run_hourly_orchestration(self, triggered_by: str = "cloud-scheduler") -> Dict[str, Any]:
        """
        Ejecuta el ciclo horario del orquestador:
        1. Adquiere el Lease Lock de 25 min.
        2. Lee y retrofitea automáticamente todos los clientes de Firestore.
        3. Filtra los clientes candidatos (descarta suspendidos y no vencidos).
        4. Ordena la cola por 'last_attempt_at' ASC (máxima justicia y prevención de poison pills).
        5. Ejecuta secuencialmente hasta agotar el presupuesto de 20 minutos.
        6. Persiste bitácora en 'etl_orchestration_logs' y libera el candado.
        """
        cycle_id = f"cycle-{int(time.time())}-{uuid.uuid4().hex[:6]}"
        start_ts = time.time()
        start_dt = datetime.now(timezone.utc)

        if not self.acquire_lease_lock(cycle_id):
            return {
                "status": "skipped",
                "reason": "lock_active",
                "message": "Un ciclo previo del orquestador está activo o dentro de su ventana de TTL."
            }

        summary: Dict[str, Any] = {
            "cycle_id": cycle_id,
            "triggered_by": triggered_by,
            "started_at": start_dt.isoformat(),
            "tenants_inspected": 0,
            "candidates_due": 0,
            "succeeded": [],
            "failed": [],
            "deferred": [],
            "suspended": [],
            "duration_seconds": 0.0,
            "status": "completed"
        }

        try:
            if not self.db:
                summary["status"] = "no_database"
                return summary

            # 1. Cargar todos los inquilinos
            tenants_docs = self.db.collection("tenants").stream()
            all_tenants: List[Dict[str, Any]] = []

            for doc in tenants_docs:
                tdata = doc.to_dict()
                tdata["tenant_id"] = doc.id
                # Retrofitting automático y transparente
                norm_data = self.normalize_and_retrofit_tenant(tdata, auto_persist=True)
                all_tenants.append(norm_data)

            summary["tenants_inspected"] = len(all_tenants)

            # 2. Filtrar candidatos
            candidate_queue: List[Dict[str, Any]] = []
            for t in all_tenants:
                tenant_id = t["tenant_id"]

                # Si está explícitamente deshabilitado
                if not t.get("enabled", True):
                    continue

                # Si está suspendido por 3 o más fallos consecutivos
                if t.get("consecutive_failures", 0) >= 3 or t.get("last_execution_status") == "ERROR_SUSPENDED":
                    summary["suspended"].append(tenant_id)
                    continue

                # Verificar si su cadencia está vencida
                if self.is_tenant_due_for_sync(t, start_dt):
                    candidate_queue.append(t)

            summary["candidates_due"] = len(candidate_queue)

            # 3. Ordenar la cola por last_attempt_at ASC (Los que llevan más tiempo sin intento van primero)
            def get_sort_key(t: Dict[str, Any]) -> str:
                # Retornar string ISO o string vacío si es None para que vaya al inicio
                return t.get("last_attempt_at") or "0000-00-00T00:00:00"

            candidate_queue.sort(key=get_sort_key)

            # 4. Bucle secuencial con control de presupuesto de 20 minutos
            for idx, tenant in enumerate(candidate_queue):
                elapsed = time.time() - start_ts
                if elapsed >= MAX_BUDGET_SECONDS:
                    # Presupuesto agotado: cortar y diferir los restantes
                    remaining_tenants = [cand["tenant_id"] for cand in candidate_queue[idx:]]
                    summary["deferred"].extend(remaining_tenants)
                    logger.warning(
                        f"⏰ Presupuesto de 20 min alcanzado ({elapsed:.1f}s). "
                        f"Diferidos para la siguiente hora: {remaining_tenants}"
                    )
                    break

                tenant_id = tenant["tenant_id"]
                tenant_result = await self._execute_single_tenant(tenant_id, is_backfill=False, triggered_by=f"orchestrator:{cycle_id}")
                
                if tenant_result["status"] == "success":
                    summary["succeeded"].append(tenant_id)
                elif tenant_result["status"] == "suspended":
                    summary["suspended"].append(tenant_id)
                    summary["failed"].append(tenant_id)
                else:
                    summary["failed"].append(tenant_id)

            summary["duration_seconds"] = round(time.time() - start_ts, 2)
            summary["completed_at"] = datetime.now(timezone.utc).isoformat()

            # 5. Persistir resumen de auditoría en Firestore
            try:
                self.db.collection("etl_orchestration_logs").document(cycle_id).set(summary)
            except Exception as le:
                logger.warning(f"No se pudo guardar etl_orchestration_logs: {le}")

            return summary

        finally:
            self.release_lease_lock(cycle_id)

    def _determine_gap_fill_dates(self, tenant_id: str, now_dt: datetime, max_lookback_days: int = 14) -> Tuple[str, str]:
        """
        Calcula dinámicamente el rango de fechas para la sincronización incremental.
        Inspecciona BigQuery en los últimos max_lookback_days días para detectar posibles
        huecos temporales y autosanar brechas pendientes (gap-filling).
        Si no hay huecos, utiliza la ventana deslizante estándar de los últimos 2 días.
        """
        today_date = now_dt.date()
        date_to = now_dt.strftime("%Y-%m-%d")
        default_from = (now_dt - timedelta(days=2)).strftime("%Y-%m-%d")

        try:
            from app.services.mcp_analytics.bigquery_service import BigQueryService
            from google.cloud import bigquery
            bqs = BigQueryService()
            query = f"""
            SELECT DISTINCT date
            FROM `{bqs.project_id}.{bqs.dataset_id}.fact_traffic_evolution`
            WHERE tenant_id = @tenant_id
              AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL {max_lookback_days} DAY)
            ORDER BY date ASC
            """
            job_config = bigquery.QueryJobConfig(
                query_parameters=[
                    bigquery.ScalarQueryParameter("tenant_id", "STRING", tenant_id)
                ]
            )
            rows = list(bqs.client.query(query, job_config=job_config).result())
            
            if not rows:
                logger.info(f"🔍 [Gap-Fill] Sin registros recientes para '{tenant_id}'. Sincronizando ventana de {max_lookback_days} días.")
                date_from = (now_dt - timedelta(days=max_lookback_days)).strftime("%Y-%m-%d")
                return date_from, date_to

            existing_dates = set()
            for r in rows:
                if r.date:
                    existing_dates.add(r.date if isinstance(r.date, date) else datetime.strptime(str(r.date)[:10], "%Y-%m-%d").date())

            min_existing = min(existing_dates)
            window_start = max(min_existing, today_date - timedelta(days=max_lookback_days))
            target_end = today_date - timedelta(days=1)

            curr = window_start
            earliest_missing = None
            while curr <= target_end:
                if curr not in existing_dates:
                    earliest_missing = curr
                    break
                curr += timedelta(days=1)

            if earliest_missing:
                date_from = earliest_missing.strftime("%Y-%m-%d")
                logger.info(f"🔍 [Gap-Fill] Brecha detectada para '{tenant_id}'. Sincronizando desde {date_from} hasta {date_to}.")
                return date_from, date_to
            else:
                return default_from, date_to

        except Exception as bqe:
            logger.warning(f"⚠️ [Gap-Fill] Error consultando BigQuery para brechas de '{tenant_id}': {bqe}. Usando ventana default 2d.")
            return default_from, date_to

    # -------------------------------------------------------------------------
    # 5. Ejecución Individual Segura por Inquilino (Aislamiento de Fallos)
    # -------------------------------------------------------------------------
    async def _execute_single_tenant(
        self, 
        tenant_id: str, 
        is_backfill: bool, 
        triggered_by: str,
        custom_date_from: Optional[str] = None,
        custom_date_to: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Ejecuta el ETL de un cliente de forma aislada, actualizando Firestore con
        precisión quirúrgica (intentos, éxitos, fallos consecutivos y poison pill circuit breaker).
        """
        now_dt = datetime.now(timezone.utc)
        now_iso = now_dt.isoformat()
        t_ref = self.db.collection("tenants").document(tenant_id)

        # Marcar ejecución en curso y registrar intento
        t_ref.update({
            "is_running_now": True,
            "last_attempt_at": now_iso
        })

        try:
            logger.info(f"▶️ [Orchestrator] Iniciando ETL para '{tenant_id}' (Backfill: {is_backfill})...")

            # 1. Recuperar credenciales
            credentials = {}
            for st in ["brandlight-key", "peec-key", "ga4-creds", "adobe-creds"]:
                val = self.sms.get_tenant_secret(tenant_id, st)
                if val:
                    credentials[st] = val

            # 2. Fechas
            if custom_date_from and custom_date_to:
                date_from = custom_date_from
                date_to = custom_date_to
            elif is_backfill:
                date_from = (now_dt - timedelta(days=90)).strftime("%Y-%m-%d")
                date_to = now_dt.strftime("%Y-%m-%d")
            else:
                date_from, date_to = self._determine_gap_fill_dates(tenant_id, now_dt)

            # 3. Disparo del ETL real
            etl_svc = MCPETLService(tenant_id=tenant_id)
            sync_res = await etl_svc.run_full_sync(
                credentials=credentials,
                date_from=date_from,
                date_to=date_to
            )

            # 4. Actualizar Firestore en Éxito
            t_ref.update({
                "is_running_now": False,
                "last_successful_execution": now_iso,
                "last_execution_status": "SUCCESS",
                "consecutive_failures": 0,
                "last_error": None
            })

            # Registrar en etl_runs histórico
            self.db.collection("etl_runs").add({
                "tenant_id": tenant_id,
                "triggered_by": triggered_by,
                "status": "success",
                "date_from": date_from,
                "date_to": date_to,
                "historical_backfill": is_backfill,
                "completed_at": now_iso,
                "details": sync_res
            })

            logger.info(f"✅ [Orchestrator] ETL exitoso para '{tenant_id}'.")
            return {"status": "success", "tenant_id": tenant_id, "details": sync_res}

        except Exception as e:
            err_msg = str(e)
            logger.error(f"❌ [Orchestrator] Falló ETL de '{tenant_id}': {err_msg}")

            # Incrementar contador de fallos
            doc_snap = t_ref.get()
            prev_failures = doc_snap.to_dict().get("consecutive_failures", 0) if doc_snap.exists else 0
            new_failures = prev_failures + 1

            new_status = "FAILED"
            if new_failures >= 3:
                new_status = "ERROR_SUSPENDED"
                logger.error(
                    f"🚨 [POISON PILL] El cliente '{tenant_id}' ha fallado {new_failures} veces consecutivas. "
                    f"Suspendiendo automáticamente para proteger el tiempo de los demás clientes."
                )
                # Crear alerta visible en Admin Panel
                try:
                    self.db.collection("etl_alerts").add({
                        "tenant_id": tenant_id,
                        "severity": "critical",
                        "alert_type": "POISON_PILL_SUSPENSION",
                        "message": f"Cliente suspendido tras 3 fallos consecutivos: {err_msg}",
                        "created_at": now_iso,
                        "dismissed": False
                    })
                except Exception:
                    pass

            t_ref.update({
                "is_running_now": False,
                "last_execution_status": new_status,
                "consecutive_failures": new_failures,
                "last_error": err_msg
            })

            # Registrar fallo en etl_runs
            try:
                self.db.collection("etl_runs").add({
                    "tenant_id": tenant_id,
                    "triggered_by": triggered_by,
                    "status": "failed",
                    "error": err_msg,
                    "completed_at": now_iso
                })
            except Exception:
                pass

            return {
                "status": "suspended" if new_status == "ERROR_SUSPENDED" else "failed",
                "tenant_id": tenant_id,
                "error": err_msg,
                "consecutive_failures": new_failures
            }

    # -------------------------------------------------------------------------
    # 6. Disparo Manual On-Demand (Admin UI) y Reactivación de Clientes
    # -------------------------------------------------------------------------
    async def run_tenant_on_demand(
        self, 
        tenant_id: str, 
        is_backfill: bool = False, 
        admin_email: str = "admin",
        custom_date_from: Optional[str] = None,
        custom_date_to: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Ejecuta de manera inmediata y aislada el ETL de un cliente específico,
        verificando que no esté ejecutándose en ese mismo instante.
        """
        clean_id = tenant_id.strip().lower()
        t_ref = self.db.collection("tenants").document(clean_id)
        doc = t_ref.get()

        if not doc.exists:
            raise ValueError(f"Inquilino '{clean_id}' no encontrado.")

        tdata = self.normalize_and_retrofit_tenant(doc.to_dict(), auto_persist=True)

        if tdata.get("is_running_now", False):
            # Verificar si lleva más de 20 min en ejecución para limpiar estado zombie
            last_attempt = tdata.get("last_attempt_at")
            if last_attempt:
                try:
                    att_dt = self._parse_utc_datetime(last_attempt)
                    if att_dt and (datetime.now(timezone.utc) - att_dt).total_seconds() < 20 * 60:
                        raise RuntimeError(f"El cliente '{clean_id}' ya tiene una ejecución ETL activa en este momento.")
                except ValueError:
                    raise

        # Si estaba suspendido, resetear fallos por ser disparo manual deliberado de admin
        if tdata.get("consecutive_failures", 0) >= 3 or tdata.get("last_execution_status") == "ERROR_SUSPENDED":
            t_ref.update({"consecutive_failures": 0, "last_execution_status": "MANUAL_RECOVERY"})

        return await self._execute_single_tenant(
            tenant_id=clean_id,
            is_backfill=is_backfill,
            triggered_by=f"manual:{admin_email}",
            custom_date_from=custom_date_from,
            custom_date_to=custom_date_to
        )

    def resume_suspended_tenant(self, tenant_id: str) -> Dict[str, Any]:
        """Reactiva un cliente que fue puesto en estado ERROR_SUSPENDED."""
        clean_id = tenant_id.strip().lower()
        t_ref = self.db.collection("tenants").document(clean_id)
        doc = t_ref.get()
        if not doc.exists:
            raise ValueError(f"Inquilino '{clean_id}' no encontrado.")

        t_ref.update({
            "consecutive_failures": 0,
            "last_execution_status": "RESUMED",
            "last_error": None,
            "enabled": True
        })
        return {
            "status": "success",
            "message": f"Cliente '{clean_id}' reactivado con éxito. Volverá a entrar en la cola horaria."
        }

    def get_orchestrator_status(self) -> Dict[str, Any]:
        """Obtiene el estado general del orquestador para la interfaz de administración."""
        if not self.db:
            return {"status": "no_db"}

        now = datetime.now(timezone.utc)
        # 1. Estado del Lock
        lock_doc = self.db.collection("_orchestrator_locks").document("hourly_lock").get()
        lock_info = {"is_locked": False}
        if lock_doc.exists:
            ldata = lock_doc.to_dict() or {}
            raw_exp = ldata.get("lock_expires_at")
            if ldata.get("locked") and raw_exp:
                try:
                    exp_dt = self._parse_utc_datetime(raw_exp)
                    if exp_dt:
                        lock_info = {
                            "is_locked": now < exp_dt,
                            "cycle_id": ldata.get("cycle_id"),
                            "locked_at": ldata.get("locked_at"),
                            "lock_expires_at": raw_exp
                        }
                except Exception:
                    pass

        # 2. Último log de ciclo
        logs_stream = (
            self.db.collection("etl_orchestration_logs")
            .order_by("started_at", direction="DESCENDING")
            .limit(1)
            .stream()
        )
        last_log = None
        for ldoc in logs_stream:
            last_log = ldoc.to_dict()

        # 3. Lista de inquilinos con estado de orquestación
        tenants_stream = self.db.collection("tenants").stream()
        tenants_summary = []
        for tdoc in tenants_stream:
            t = self.normalize_and_retrofit_tenant(tdoc.to_dict(), auto_persist=False)
            tenants_summary.append({
                "tenant_id": t.get("tenant_id", tdoc.id),
                "tenant_name": t.get("tenant_name", tdoc.id),
                "enabled": t.get("enabled", True),
                "sync_cadence": t.get("sync_cadence", "daily"),
                "preferred_hour_utc": t.get("preferred_hour_utc", 3),
                "last_successful_execution": t.get("last_successful_execution"),
                "last_attempt_at": t.get("last_attempt_at"),
                "last_execution_status": t.get("last_execution_status", "IDLE"),
                "consecutive_failures": t.get("consecutive_failures", 0),
                "is_running_now": t.get("is_running_now", False),
                "is_due_now": self.is_tenant_due_for_sync(t, now)
            })

        return {
            "lock": lock_info,
            "last_cycle": last_log,
            "tenants": tenants_summary,
            "server_time_utc": now.isoformat()
        }
