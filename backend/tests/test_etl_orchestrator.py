import pytest
import time
import asyncio
from unittest.mock import MagicMock, patch, AsyncMock
from datetime import datetime, timedelta, timezone

from app.services.mcp_analytics.etl_orchestrator import (
    ETLOrchestrator,
    MAX_BUDGET_SECONDS,
    LOCK_TTL_SECONDS
)


@pytest.fixture
def mock_orchestrator():
    """Crea una instancia de ETLOrchestrator con Firestore y SecretManager mockeados."""
    with patch("app.services.mcp_analytics.etl_orchestrator.TokenManager") as mock_tm_cls, \
         patch("app.services.mcp_analytics.etl_orchestrator.SecretManagerService") as mock_sms_cls:
        
        mock_db = MagicMock()
        mock_tm = MagicMock()
        mock_tm.db = mock_db
        mock_tm_cls.return_value = mock_tm
        
        mock_sms = MagicMock()
        mock_sms_cls.return_value = mock_sms
        
        orc = ETLOrchestrator(project_id="test-project")
        orc._mock_db = mock_db
        orc._mock_sms = mock_sms
        return orc


def test_normalize_and_retrofit_legacy_tenant(mock_orchestrator):
    """
    Certifica la retrocompatibilidad: un inquilino creado con el esquema previo
    (sin campos de orquestador) adopta automáticamente valores por defecto seguros.
    """
    legacy_tenant = {
        "tenant_id": "legacy-client",
        "tenant_name": "Legacy Client S.A.",
        "authorized_emails": ["admin@example.com"]
    }
    
    retrofitted = mock_orchestrator.normalize_and_retrofit_tenant(legacy_tenant, auto_persist=False)
    
    assert retrofitted["enabled"] is True
    assert retrofitted["sync_cadence"] == "daily"
    assert retrofitted["preferred_hour_utc"] == 3
    assert retrofitted["consecutive_failures"] == 0
    assert retrofitted["is_running_now"] is False
    assert retrofitted["last_execution_status"] == "IDLE"
    assert retrofitted["last_attempt_at"] is None
    assert retrofitted["last_successful_execution"] is None


def test_is_tenant_due_for_sync_daily(mock_orchestrator):
    """Verifica el cálculo de vencimiento de cadencia diaria."""
    now_utc = datetime(2026, 9, 9, 4, 0, 0, tzinfo=timezone.utc)  # 04:00 UTC
    
    # 1. Sin ejecución previa -> Debe ejecutar
    t_new = {"sync_cadence": "daily", "last_successful_execution": None}
    assert mock_orchestrator.is_tenant_due_for_sync(t_new, now_utc) is True
    
    # 2. Ejecutado hace 2 horas hoy mismo -> No debe ejecutar
    recent_run = (now_utc - timedelta(hours=2)).isoformat()
    t_recent = {"sync_cadence": "daily", "preferred_hour_utc": 3, "last_successful_execution": recent_run}
    assert mock_orchestrator.is_tenant_due_for_sync(t_recent, now_utc) is False
    
    # 3. Ejecutado ayer a las 03:00 UTC y son las 04:00 UTC de hoy -> Debe ejecutar
    yesterday_run = (now_utc - timedelta(days=1, hours=1)).isoformat()
    t_yesterday = {"sync_cadence": "daily", "preferred_hour_utc": 3, "last_successful_execution": yesterday_run}
    assert mock_orchestrator.is_tenant_due_for_sync(t_yesterday, now_utc) is True


def test_parse_utc_datetime_handles_all_formats(mock_orchestrator):
    """
    Certifica que _parse_utc_datetime normaliza a timezone-aware UTC cualquier formato,
    impidiendo 'TypeError: can't subtract offset-naive and offset-aware datetimes'.
    """
    # 1. None
    assert mock_orchestrator._parse_utc_datetime(None) is None
    
    # 2. Naive datetime
    naive_dt = datetime(2026, 9, 9, 12, 0, 0)
    aware_res = mock_orchestrator._parse_utc_datetime(naive_dt)
    assert aware_res is not None
    assert aware_res.tzinfo == timezone.utc
    
    # 3. String naive ISO (sin Z ni offset)
    str_naive = "2026-09-09T10:15:00"
    res_str = mock_orchestrator._parse_utc_datetime(str_naive)
    assert res_str is not None
    assert res_str.tzinfo == timezone.utc
    
    # 4. String con espacio (formato SQL / Firestore string)
    str_sql = "2026-09-09 10:15:00"
    res_sql = mock_orchestrator._parse_utc_datetime(str_sql)
    assert res_sql is not None
    assert res_sql.tzinfo == timezone.utc
    
    # 5. String con Z
    str_z = "2026-09-09T10:15:00Z"
    res_z = mock_orchestrator._parse_utc_datetime(str_z)
    assert res_z is not None
    assert res_z.tzinfo == timezone.utc


def test_is_tenant_due_for_sync_with_naive_datetime_never_crashes(mock_orchestrator):
    """
    Prueba de regresión: Simula un tenant en Firestore con timestamp offset-naive.
    Comprueba que el cálculo de sustracción se ejecuta limpiamente sin error de offset.
    """
    now_utc = datetime.now(timezone.utc)
    t_naive = {
        "sync_cadence": "daily",
        "preferred_hour_utc": 3,
        "last_successful_execution": "2026-09-08 02:00:00"  # Naive string
    }
    # No debe levantar TypeError
    result = mock_orchestrator.is_tenant_due_for_sync(t_naive, now_utc)
    assert isinstance(result, bool)



def test_is_tenant_due_for_sync_hourly_and_6h(mock_orchestrator):
    """Verifica cadencias horaria y cada 6 horas."""
    now_utc = datetime.now(timezone.utc)
    
    # Hourly: 30 minutos desde el último éxito -> NO vencido (< 50 min)
    t_hourly_recent = {
        "sync_cadence": "hourly",
        "last_successful_execution": (now_utc - timedelta(minutes=30)).isoformat()
    }
    assert mock_orchestrator.is_tenant_due_for_sync(t_hourly_recent, now_utc) is False
    
    # Hourly: 55 minutos desde el último éxito -> Vencido (>= 50 min)
    t_hourly_due = {
        "sync_cadence": "hourly",
        "last_successful_execution": (now_utc - timedelta(minutes=55)).isoformat()
    }
    assert mock_orchestrator.is_tenant_due_for_sync(t_hourly_due, now_utc) is True
    
    # Every 6h: 4 horas -> NO vencido
    t_6h_recent = {
        "sync_cadence": "every_6h",
        "last_successful_execution": (now_utc - timedelta(hours=4)).isoformat()
    }
    assert mock_orchestrator.is_tenant_due_for_sync(t_6h_recent, now_utc) is False
    
    # Every 6h: 7 horas -> Vencido
    t_6h_due = {
        "sync_cadence": "every_6h",
        "last_successful_execution": (now_utc - timedelta(hours=7)).isoformat()
    }
    assert mock_orchestrator.is_tenant_due_for_sync(t_6h_due, now_utc) is True


def test_acquire_and_release_lease_lock(mock_orchestrator):
    """Verifica la adquisición y liberación del Lease Lock."""
    mock_doc = MagicMock()
    mock_doc.exists = False
    
    mock_lock_ref = MagicMock()
    mock_lock_ref.get.return_value = mock_doc
    mock_orchestrator._mock_db.collection.return_value.document.return_value = mock_lock_ref
    
    # 1. Adquirir lock libre
    acquired = mock_orchestrator.acquire_lease_lock("cycle-123")
    assert acquired is True
    mock_lock_ref.set.assert_called()
    
    # 2. Liberar lock
    mock_orchestrator.release_lease_lock("cycle-123")
    mock_lock_ref.set.assert_called()


def test_lease_lock_auto_recovers_when_ttl_expired(mock_orchestrator):
    """
    Certifica la auto-recuperación ante caídas de servidor: si el lock previo
    tiene más de 25 minutos, la nueva ejecución lo reclama sin bloqueo permanente.
    """
    now_utc = datetime.now(timezone.utc)
    expired_lock_time = (now_utc - timedelta(minutes=30)).isoformat()
    
    mock_doc = MagicMock()
    mock_doc.exists = True
    mock_doc.to_dict.return_value = {
        "locked": True,
        "cycle_id": "old-crashed-cycle",
        "lock_expires_at": expired_lock_time
    }
    
    mock_lock_ref = MagicMock()
    mock_lock_ref.get.return_value = mock_doc
    mock_orchestrator._mock_db.collection.return_value.document.return_value = mock_lock_ref
    
    # Adquirir lock expirado -> Debe tener éxito
    acquired = mock_orchestrator.acquire_lease_lock("new-cycle-456")
    assert acquired is True


def test_lease_lock_rejects_when_currently_active(mock_orchestrator):
    """Si el lock está activo y no ha expirado, rechaza una nueva ejecución solapada."""
    now_utc = datetime.now(timezone.utc)
    active_lock_expiry = (now_utc + timedelta(minutes=15)).isoformat()
    
    mock_doc = MagicMock()
    mock_doc.exists = True
    mock_doc.to_dict.return_value = {
        "locked": True,
        "cycle_id": "running-cycle",
        "lock_expires_at": active_lock_expiry
    }
    
    mock_lock_ref = MagicMock()
    mock_lock_ref.get.return_value = mock_doc
    mock_orchestrator._mock_db.collection.return_value.document.return_value = mock_lock_ref
    
    acquired = mock_orchestrator.acquire_lease_lock("overlapping-cycle")
    assert acquired is False


def test_poison_pill_suspension_after_3_failures(mock_orchestrator):
    """
    Certifica la protección contra Poison Pills: al 3er fallo consecutivo,
    el inquilino pasa a estado ERROR_SUSPENDED y se genera una alerta operativa.
    """
    tenant_ref = MagicMock()
    doc_snap = MagicMock()
    doc_snap.exists = True
    doc_snap.to_dict.return_value = {"consecutive_failures": 2}  # Ya tenía 2 fallos previos
    tenant_ref.get.return_value = doc_snap
    
    alerts_col = MagicMock()
    
    def mock_collection(col_name):
        if col_name == "tenants":
            mock_c = MagicMock()
            mock_c.document.return_value = tenant_ref
            return mock_c
        elif col_name == "etl_alerts":
            return alerts_col
        return MagicMock()
        
    mock_orchestrator._mock_db.collection.side_effect = mock_collection
    
    # Simular fallo en ETL
    with patch("app.services.mcp_analytics.etl_orchestrator.MCPETLService") as mock_etl_cls:
        mock_etl = MagicMock()
        mock_etl.run_full_sync = AsyncMock(side_effect=RuntimeError("Credenciales de API de Terceros Expiradas"))
        mock_etl_cls.return_value = mock_etl
        
        result = asyncio.run(mock_orchestrator._execute_single_tenant("broken-tenant", is_backfill=False, triggered_by="test"))
        
        assert result["status"] == "suspended"
        assert result["consecutive_failures"] == 3
        
        # Verificar que se actualizó a ERROR_SUSPENDED
        tenant_ref.update.assert_any_call({
            "is_running_now": False,
            "last_execution_status": "ERROR_SUSPENDED",
            "consecutive_failures": 3,
            "last_error": "Credenciales de API de Terceros Expiradas"
        })
        
        # Verificar que se creó alerta en etl_alerts
        alerts_col.add.assert_called()


def test_on_demand_prevents_overlap_when_running(mock_orchestrator):
    """Certifica que dos peticiones on-demand simultáneas para el mismo cliente no colisionan."""
    tenant_ref = MagicMock()
    doc_snap = MagicMock()
    doc_snap.exists = True
    doc_snap.to_dict.return_value = {
        "tenant_id": "busy-tenant",
        "is_running_now": True,
        "last_attempt_at": datetime.now(timezone.utc).isoformat()
    }
    tenant_ref.get.return_value = doc_snap
    mock_orchestrator._mock_db.collection.return_value.document.return_value = tenant_ref
    
    with pytest.raises(RuntimeError) as exc_info:
        asyncio.run(mock_orchestrator.run_tenant_on_demand("busy-tenant", is_backfill=False))
        
    assert "ya tiene una ejecución ETL activa" in str(exc_info.value)


def test_resume_suspended_tenant(mock_orchestrator):
    """Verifica que reactivar un inquilino suspendido resetea sus fallos a 0."""
    tenant_ref = MagicMock()
    doc_snap = MagicMock()
    doc_snap.exists = True
    doc_snap.to_dict.return_value = {
        "tenant_id": "suspended-client",
        "last_execution_status": "ERROR_SUSPENDED",
        "consecutive_failures": 3
    }
    tenant_ref.get.return_value = doc_snap
    mock_orchestrator._mock_db.collection.return_value.document.return_value = tenant_ref
    
    res = mock_orchestrator.resume_suspended_tenant("suspended-client")
    assert res["status"] == "success"
    
    tenant_ref.update.assert_called_with({
        "consecutive_failures": 0,
        "last_execution_status": "RESUMED",
        "last_error": None,
        "enabled": True
    })


def test_determine_gap_fill_dates_detects_gap(mock_orchestrator):
    """Verifica que el orquestador detecta brechas temporales en BigQuery y amplía la fecha inicial."""
    from datetime import date
    now_dt = datetime(2026, 9, 9, 12, 0, 0, tzinfo=timezone.utc)
    
    # Mock BigQueryService
    with patch("app.services.mcp_analytics.bigquery_service.BigQueryService") as mock_bqs_cls:
        mock_bqs = MagicMock()
        mock_bqs.project_id = "test-proj"
        mock_bqs.dataset_id = "test-ds"
        
        # Simular registros con brecha del 2 al 6 de sept
        mock_dates = [
            date(2026, 8, 26), date(2026, 8, 27), date(2026, 8, 28),
            date(2026, 8, 29), date(2026, 8, 30), date(2026, 8, 31),
            date(2026, 9, 1),  date(2026, 9, 7),  date(2026, 9, 8), date(2026, 9, 9)
        ]
        mock_rows = [MagicMock(date=d) for d in mock_dates]
        mock_bqs.client.query.return_value.result.return_value = mock_rows
        mock_bqs_cls.return_value = mock_bqs
        
        d_from, d_to = mock_orchestrator._determine_gap_fill_dates("vidal-vidal", now_dt)
        assert d_from == "2026-09-02"
        assert d_to == "2026-09-09"


def test_determine_gap_fill_dates_no_gaps(mock_orchestrator):
    """Verifica que si no hay brechas, utiliza la ventana deslizante estándar de 2 días."""
    from datetime import date
    now_dt = datetime(2026, 9, 9, 12, 0, 0, tzinfo=timezone.utc)
    
    with patch("app.services.mcp_analytics.bigquery_service.BigQueryService") as mock_bqs_cls:
        mock_bqs = MagicMock()
        mock_bqs.project_id = "test-proj"
        mock_bqs.dataset_id = "test-ds"
        
        # Todos los días presentes de forma continua
        mock_dates = [date(2026, 9, 9) - timedelta(days=i) for i in range(15)]
        mock_rows = [MagicMock(date=d) for d in mock_dates]
        mock_bqs.client.query.return_value.result.return_value = mock_rows
        mock_bqs_cls.return_value = mock_bqs
        
        d_from, d_to = mock_orchestrator._determine_gap_fill_dates("tenant-ok", now_dt)
        assert d_from == "2026-09-07"
        assert d_to == "2026-09-09"

