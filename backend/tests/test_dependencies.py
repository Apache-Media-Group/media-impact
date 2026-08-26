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
