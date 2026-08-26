import pytest
from app.services.auth_utils import RBACManager, TokenManager


class TestRBACManager:
    def test_can_edit_admin(self):
        perms = {'admin@example.com': 'admin', 'user@example.com': 'viewer'}
        assert RBACManager.can_edit(perms, 'admin@example.com') is True
        assert RBACManager.can_edit(perms, 'ADMIN@EXAMPLE.COM') is True

    def test_can_edit_viewer_denied(self):
        perms = {'user@example.com': 'viewer'}
        assert RBACManager.can_edit(perms, 'user@example.com') is False

    def test_can_edit_unlisted_user(self):
        perms = {'admin@example.com': 'admin'}
        assert RBACManager.can_edit(perms, 'other@example.com') is False
        assert RBACManager.can_edit({}, 'admin@example.com') is False
        assert RBACManager.can_edit(None, 'admin@example.com') is False

    def test_can_view(self):
        perms = {'admin@example.com': 'admin', 'viewer@example.com': 'viewer'}
        assert RBACManager.can_view(perms, 'admin@example.com') is True
        assert RBACManager.can_view(perms, 'viewer@example.com') is True
        assert RBACManager.can_view(perms, 'VIEWER@EXAMPLE.COM') is True
        assert RBACManager.can_view(perms, 'nobody@example.com') is False
        assert RBACManager.can_view({}, 'viewer@example.com') is False


class TestTokenManagerEncryption:
    def test_encrypt_and_decrypt_sensitive_tokens(self):
        tm = TokenManager(project_id='test-project')
        tokens = {
            'client_id': 'test-client-id-12345',
            'client_secret': 'test-client-secret-99999',
            'property_id': 'properties/12345678'  # non-sensitive
        }

        encrypted = tm._encrypt_tokens(tokens)
        assert encrypted['client_id'] != 'test-client-id-12345'
        assert encrypted['client_secret'] != 'test-client-secret-99999'
        assert encrypted['property_id'] == 'properties/12345678'

        decrypted = tm._decrypt_tokens(encrypted)
        assert decrypted['client_id'] == 'test-client-id-12345'
        assert decrypted['client_secret'] == 'test-client-secret-99999'
        assert decrypted['property_id'] == 'properties/12345678'
