import base64
import pytest
from app.services.encryption_utils import EncryptionUtil


def test_encryption_roundtrip():
    util = EncryptionUtil(project_id='test-project')
    secret = 'super-secret-api-token-xyz-12345'
    
    encrypted = util.encrypt(secret)
    assert encrypted != secret
    assert isinstance(encrypted, str)
    
    decrypted = util.decrypt(encrypted)
    assert decrypted == secret


def test_encryption_empty_and_none():
    util = EncryptionUtil(project_id='test-project')
    assert util.encrypt('') == ''
    assert util.decrypt('') == ''
    assert util.encrypt(None) == ''
    assert util.decrypt(None) == ''


def test_legacy_base64_fallback():
    util = EncryptionUtil(project_id='test-project')
    legacy_plain = 'legacy-plain-secret-value'
    legacy_b64 = base64.b64encode(legacy_plain.encode('utf-8')).decode('utf-8')
    
    decrypted = util.decrypt(legacy_b64)
    assert decrypted == legacy_plain


def test_unencrypted_raw_string_fallback():
    util = EncryptionUtil(project_id='test-project')
    raw_secret = 'already-unencrypted-raw-token'
    
    decrypted = util.decrypt(raw_secret)
    assert decrypted == raw_secret
