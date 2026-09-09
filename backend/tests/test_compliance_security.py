# backend/tests/test_compliance_security.py
"""
Compliance and Security Test Suite for LLYC Media Impact.
Validates:
- GDPR / LOPDGDD: EU data residency, partition retention expiration (Art. 5.1.e), and access logging (Art. 30).
- HIPAA: De-identification and sanitization of PII/PHI query strings from analytics URLs.
- SOC 2 Type II: CC6.1 (Fail-closed cryptographic key management) and CC6.3 (Least privilege RBAC).
"""
import os
import json
import pytest
from unittest.mock import MagicMock, patch

from app.services.encryption_utils import EncryptionUtil
from app.services.sanitizer_utils import sanitize_analytics_url
from app.services.auth_middleware import log_tenant_audit_event
from app.services.auth_utils import RBACManager
from app.services.mcp_analytics.bigquery_service import BigQueryService


# --- 1. SOC 2 CC6.1 / ISO 27001: Fail-Closed Cryptographic Key Management ---

def test_encryption_fails_closed_in_production(monkeypatch):
    """
    In production environments (Cloud Run K_SERVICE set or ENVIRONMENT=production),
    the system must abort with RuntimeError if ENCRYPTION_KEY/SECRET_KEY is missing.
    """
    monkeypatch.setenv("K_SERVICE", "llyc-intelligence-api")
    monkeypatch.delenv("ENCRYPTION_KEY", raising=False)
    monkeypatch.delenv("SECRET_KEY", raising=False)
    
    with pytest.raises(RuntimeError) as exc_info:
        EncryptionUtil(project_id="prod-project")
    
    assert "CRITICAL SECURITY COMPLIANCE ERROR" in str(exc_info.value)
    assert "GCP Secret Manager" in str(exc_info.value)


def test_encryption_succeeds_in_production_with_secret_key(monkeypatch):
    """
    In production, if ENCRYPTION_KEY is provided via Secret Manager / environment,
    EncryptionUtil initializes and performs encryption safely.
    """
    monkeypatch.setenv("K_SERVICE", "llyc-intelligence-api")
    monkeypatch.setenv("ENCRYPTION_KEY", "ultra-secure-vault-key-from-secret-manager-32chars!")
    
    util = EncryptionUtil(project_id="prod-project")
    encrypted = util.encrypt("test-secret-token")
    assert encrypted != "test-secret-token"
    assert util.decrypt(encrypted) == "test-secret-token"


def test_encryption_loads_from_secret_manager_in_production(monkeypatch):
    """
    In production, if ENCRYPTION_KEY is missing from environment, EncryptionUtil
    retrieves it from GCP Secret Manager and initializes safely.
    """
    monkeypatch.setenv("K_SERVICE", "llyc-intelligence-api")
    monkeypatch.delenv("ENCRYPTION_KEY", raising=False)
    monkeypatch.delenv("SECRET_KEY", raising=False)
    
    mock_sm_client = MagicMock()
    mock_resp = MagicMock()
    mock_resp.payload.data = b"secret-from-vault-key-32bytes-ok!"
    mock_sm_client.access_secret_version.return_value = mock_resp
    
    with patch("google.cloud.secretmanager.SecretManagerServiceClient", return_value=mock_sm_client):
        util = EncryptionUtil(project_id="prod-project")
        assert util.decrypt(util.encrypt("hello")) == "hello"



# --- 2. HIPAA & GDPR: PII/PHI URL Sanitization ---

def test_url_sanitizer_strips_phi_query_params():
    """Validates that medical and patient-related query parameters are scrubbed (HIPAA Privacy Rule)."""
    raw_url = "https://clinica.ejemplo.es/citas?paciente_id=12345&diagnostico=oncologia&medico=dr_garcia"
    sanitized = sanitize_analytics_url(raw_url)
    assert "paciente_id" not in sanitized
    assert "diagnostico" not in sanitized
    assert "medico" not in sanitized
    assert "/citas" in sanitized


def test_url_sanitizer_strips_pii_and_auth_tokens():
    """Validates that user credentials, emails, and tokens are scrubbed (GDPR / SOC 2)."""
    raw_url = "/cuenta/perfil?email=usuario@empresa.com&token=secret_jwt_xyz&dni=12345678Z"
    sanitized = sanitize_analytics_url(raw_url)
    assert "email" not in sanitized
    assert "token" not in sanitized
    assert "dni" not in sanitized
    assert sanitized == "/cuenta/perfil"


def test_url_sanitizer_preserves_safe_marketing_params():
    """Validates that legitimate marketing tags (UTMs) and innocent path structures are preserved."""
    raw_url = "/collections/anillos?utm_source=chatgpt&utm_medium=referral&lang=es"
    sanitized = sanitize_analytics_url(raw_url)
    assert "utm_source=chatgpt" in sanitized
    assert "utm_medium=referral" in sanitized
    assert "lang=es" in sanitized
    assert "/collections/anillos" in sanitized


def test_url_sanitizer_edge_cases():
    """Validates edge cases: empty strings, None, query-free URLs."""
    assert sanitize_analytics_url("") == "/"
    assert sanitize_analytics_url(None) == "/"
    assert sanitize_analytics_url("/sobre-nosotros") == "/sobre-nosotros"


# --- 3. GDPR Data Sovereignty & Storage Limitation in BigQuery ---

def test_bigquery_eu_residency_configuration(monkeypatch):
    """
    Validates that BigQuery dataset location defaults to European Union (EU)
    to prevent unauthorized cross-border transfers under GDPR Chapter V.
    """
    monkeypatch.delenv("BQ_DATASET_LOCATION", raising=False)
    bq_service = BigQueryService(project_id="test-compliance-proj")
    
    # Mock client and check dataset creation default
    mock_client = MagicMock()
    mock_client.get_dataset.side_effect = Exception("Not found")
    bq_service._client = mock_client
    
    bq_service.create_dataset_and_tables()
    
    # Check that create_dataset was called with location = "EU"
    assert mock_client.create_dataset.called
    created_dataset = mock_client.create_dataset.call_args[0][0]
    assert created_dataset.location == "EU"


def test_bigquery_partition_expiration_configured():
    """
    Validates that analytics tables are created with a 730-day (2 years)
    partition expiration TTL satisfying GDPR Art. 5(1)(e) Storage Limitation.
    """
    bq_service = BigQueryService(project_id="test-compliance-proj")
    mock_client = MagicMock()
    mock_client.get_dataset.return_value = MagicMock()
    mock_client.get_table.side_effect = Exception("Not found")
    bq_service._client = mock_client
    
    bq_service.create_dataset_and_tables()
    
    assert mock_client.create_table.called
    # Check the created table partitioning
    created_table = mock_client.create_table.call_args[0][0]
    assert created_table.time_partitioning is not None
    # 730 days in ms = 730 * 86,400,000 = 63,072,000,000 ms
    expected_ms = 730 * 24 * 60 * 60 * 1000
    assert created_table.time_partitioning.expiration_ms == expected_ms


# --- 4. SOC 2 CC7.2 / GDPR Art. 30: Audit Logging & RBAC ---

def test_audit_event_logging_structure(caplog):
    """Validates that log_tenant_audit_event outputs structured JSON with required compliance fields."""
    import logging
    with caplog.at_level(logging.INFO):
        log_tenant_audit_event(
            event_type="TENANT_ACCESS_GRANTED",
            tenant_id="tenant_sanitas",
            user_email="auditor@llyc.global",
            success=True,
            reason="LLYC_SUPERADMIN"
        )
    
    found_log = False
    for record in caplog.records:
        if "[AUDIT_LOG]" in record.message:
            found_log = True
            json_part = record.message.replace("[AUDIT_LOG] ", "")
            entry = json.loads(json_part)
            assert entry["log_type"] == "AUDIT_TRAIL"
            assert entry["event"] == "TENANT_ACCESS_GRANTED"
            assert entry["tenant_id"] == "tenant_sanitas"
            assert entry["user_email"] == "auditor@llyc.global"
            assert entry["success"] is True
            assert "timestamp_utc" in entry
    
    assert found_log, "Structured audit log was not found in emitted logs"


def test_rbac_least_privilege_default_deny():
    """Validates that RBACManager denies access by default to unmapped users."""
    empty_permissions = {}
    assert RBACManager.can_view(empty_permissions, "intruder@external.com") is False
    assert RBACManager.can_edit(empty_permissions, "intruder@external.com") is False
    assert RBACManager.can_view(None, "intruder@external.com") is False
