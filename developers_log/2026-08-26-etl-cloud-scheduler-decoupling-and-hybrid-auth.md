# DevLog — 2026-08-26: ETL Cloud Scheduler Decoupling & Hybrid Auth Hardening

---

## 1. Contexto y Diagnóstico del Pipeline ETL

Durante la auditoría técnica de ingeniería de datos (`/data-engineer`), se identificó la causa por la cual las sincronizaciones automáticas de ETL programadas a través de Google Cloud Scheduler no se ejecutaban con éxito tras su configuración inicial:

1. **Rechazo por Autenticación (HTTP 401 Unauthorized):**
   - El endpoint `/admin/etl/trigger` requería obligatoriamente un token JWT Bearer de Firebase emitido para un usuario corporativo de LLYC.
   - Las llamadas máquina-a-máquina emitidas automáticamente por **Google Cloud Scheduler** carecían de token de usuario, siendo rechazadas inmediatamente con error `401`.

2. **URI de Destino Obsoleta y Región Incorrecta:**
   - La función `create_or_update_tenant_scheduler` generaba el target HTTP apuntando a un host `-uc.a.run.app` (us-central1) desactualizado, mientras que los despliegues productivos residen en la región `europe-west1` y responden bajo el dominio canónico `https://dashboard.llyc.global`.

3. **Bloqueo Síncrono y Timeouts HTTP (HTTP Deadline):**
   - Las ejecuciones de ETL se ejecutaban de forma síncrona en el hilo principal de la petición HTTP, excediendo el deadline por defecto de Cloud Scheduler (3 minutos) en sincronizaciones extensas.

4. **Estados Huérfanos por Interrupción o Timeouts en APIs Externas:**
   - Si una llamada a una API externa (ej. Brandlight BI) sufría demoras prolongadas con 25 reintentos sin timeout de sesión o el contenedor de Cloud Run se reiniciaba, el documento `tenants/{tenant_id}` quedaba congelado permanentemente en Firestore con `status: "deploying"`.
   - En el frontend, el botón "Re-desplegar" quedaba inhabilitado sin opción de cancelar o reiniciar.

---

## 2. Solución e Implementación Técnica

### A. Autenticación Híbrida (`get_admin_or_scheduler`)
En [`dependencies.py`](backend/app/services/mcp_analytics/routes/dependencies.py), se implementó la dependencia de seguridad `get_admin_or_scheduler`:
- **Disparo Manual (UI Admin):** Valida la cabecera `Authorization: Bearer <JWT>` contra Firebase Auth asegurando pertenencia a `@llyc.global` o `@llyc.ai`.
- **Disparo Programado (Google Cloud Scheduler):** Reconoce y valida las cabeceras de infraestructura de Google (`X-CloudScheduler: true`, User-Agent `Google-Cloud-Scheduler`) y la clave de sincronización (`X-Cron-Secret`).

### B. Desacoplamiento Asíncrono con `BackgroundTasks`
En [`admin_etl.py`](backend/app/services/mcp_analytics/routes/admin_etl.py):
- El endpoint `/admin/etl/trigger` despacha la ejecución a través de `BackgroundTasks` (`run_etl_sync_background`) y devuelve de forma instantánea una respuesta `HTTP 200/202 (Accepted)`.
- El resultado completo de cada sincronización se persiste de forma estructurada en la colección `etl_runs` de Firestore (`status`, `triggered_by`, `date_from`, `date_to`, `historical_backfill`, `completed_at`, `details`).

### C. Normalización Dinámica del Job de Cloud Scheduler
- Construcción dinámica de la URI usando `API_BASE_URL` o `CLOUD_RUN_SERVICE_URL` con fallback canónico a `https://dashboard.llyc.global/api/v1/mcp-analytics/admin/etl/trigger`.
- Configuración de `attempt_deadline` extendido (540s / 9 minutos) y cabeceras `X-CloudScheduler` y `X-Cron-Secret`.

### D. Resiliencia de APIs Externas y Cancelación Manual / Auto-cleanup
- **Brandlight Service Hardening:** Configuración de `ClientTimeout` estricto (40s), reducción de reintentos máximos a 3 y reducción de pausas de respiro de 30s a 5s para evitar bloqueos del hilo.
- **Auto-limpieza de Estados Huérfanos:** En `list_tenants_admin`, cualquier estado `deploying` con más de 15 minutos de antigüedad se marca automáticamente como expirado/interrumpido.
- **Endpoint y Botón de Cancelación / Reset:** Agregado endpoint `/admin/tenants/{tenant_id}/reset-status` y botón "⏹️ Cancelar" en el frontend para forzar el desbloqueo inmediato.

---

## 3. Verificación y Resultados de Pruebas

- **Backend Pytest:** 32 pruebas unitarias ejecutadas y superadas al 100% (incluyendo cobertura para `get_admin_or_scheduler` y validación de cabeceras).
- **Backend Compilation:** `py_compile` ejecutado exitosamente sin errores de sintaxis.
- **Frontend Vitest:** 10 pruebas unitarias superadas al 100%.
- **Frontend Build:** `npm run build` ejecutado limpiamente (0 errores).
