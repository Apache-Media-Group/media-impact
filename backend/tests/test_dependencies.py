import pytest
from app.services.mcp_analytics.routes.dependencies import (
    get_token_manager,
    get_secret_manager_service,
    get_inspector_service
)
from app.services.auth_utils import TokenManager
from app.services.mcp_analytics.secret_manager_service import SecretManagerService
from app.services.mcp_analytics.data_inspector import DataInspectorService


def test_get_token_manager():
    tm = get_token_manager()
    assert isinstance(tm, TokenManager)


def test_get_secret_manager_service():
    sms = get_secret_manager_service()
    assert isinstance(sms, SecretManagerService)


def test_get_inspector_service():
    inspector = get_inspector_service()
    assert isinstance(inspector, DataInspectorService)


def test_get_current_admin():
    from app.services.mcp_analytics.routes.dependencies import get_current_admin
    from fastapi import HTTPException
    
    assert get_current_admin("user@llyc.global") == "user@llyc.global"
    assert get_current_admin("user@llyc.ai") == "user@llyc.ai"
    
    with pytest.raises(HTTPException) as exc_info:
        get_current_admin("external@client.com")
    assert exc_info.value.status_code == 403


def test_get_admin_or_scheduler_with_cloud_scheduler_header():
    import asyncio
    from app.services.mcp_analytics.routes.dependencies import get_admin_or_scheduler
    from unittest.mock import MagicMock
    
    request = MagicMock()
    request.headers = {"X-CloudScheduler": "true"}
    
    caller = asyncio.run(get_admin_or_scheduler(request=request, credentials=None))
    assert caller == "cloud-scheduler@gcp.internal"


def test_get_admin_or_scheduler_with_cron_secret(monkeypatch):
    import asyncio
    from app.services.mcp_analytics.routes.dependencies import get_admin_or_scheduler
    from unittest.mock import MagicMock
    
    monkeypatch.setenv("CRON_SECRET", "super-secret-cron-key")
    request = MagicMock()
    request.headers = {"X-Cron-Secret": "super-secret-cron-key"}
    
    caller = asyncio.run(get_admin_or_scheduler(request=request, credentials=None))
    assert caller == "cloud-scheduler@gcp.internal"
