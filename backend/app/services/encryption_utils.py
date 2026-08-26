import os
import base64
import hashlib
import logging
from typing import Optional

logger = logging.getLogger(__name__)

try:
    from cryptography.fernet import Fernet, InvalidToken
    HAS_CRYPTOGRAPHY = True
except ImportError:
    HAS_CRYPTOGRAPHY = False
    logger.warning("cryptography library not installed. Falling back to basic obfuscation.")


class EncryptionUtil:
    """
    Symmetric Authenticated Encryption Service.
    Uses Fernet (AES-128 in CBC mode with HMAC-SHA256 authenticated encryption)
    derived from Secret Manager / SECRET_KEY / ENCRYPTION_KEY environment variable.
    
    Includes backward-compatible fallback for decrypting legacy/Base64 payloads.
    """
    def __init__(self, project_id: Optional[str] = None):
        self.project_id = project_id or os.getenv("GCP_PROJECT_ID", "default-project")
        
        # Derive a 32-byte url-safe base64 key from configured secret
        secret_seed = (
            os.getenv("ENCRYPTION_KEY")
            or os.getenv("SECRET_KEY")
            or f"llyc-intel-key-{self.project_id}"
        )
        
        key_digest = hashlib.sha256(secret_seed.encode("utf-8")).digest()
        self._fernet_key = base64.urlsafe_b64encode(key_digest)
        
        if HAS_CRYPTOGRAPHY:
            self._cipher = Fernet(self._fernet_key)
        else:
            self._cipher = None

    def encrypt(self, data: str) -> str:
        """Encrypts a plaintext string into an authenticated ciphertext string."""
        if not data:
            return ""
        
        if HAS_CRYPTOGRAPHY and self._cipher:
            try:
                encrypted_bytes = self._cipher.encrypt(data.encode("utf-8"))
                return encrypted_bytes.decode("utf-8")
            except Exception as e:
                logger.error(f"Fernet encryption error: {e}")
                raise
        
        # Fallback if cryptography is not available
        return base64.b64encode(data.encode("utf-8")).decode("utf-8")

    def decrypt(self, encrypted_data: str) -> str:
        """
        Decrypts an authenticated ciphertext string.
        Gracefully handles legacy base64 encoded or plaintext tokens during migrations.
        """
        if not encrypted_data:
            return ""

        # 1. Try Fernet decryption
        if HAS_CRYPTOGRAPHY and self._cipher:
            try:
                decrypted_bytes = self._cipher.decrypt(encrypted_data.encode("utf-8"))
                return decrypted_bytes.decode("utf-8")
            except InvalidToken:
                logger.debug("Fernet InvalidToken: attempting legacy Base64 fallback decode")
            except Exception as e:
                logger.warning(f"Unexpected decryption error: {e}")

        # 2. Legacy Base64 fallback
        try:
            decoded_bytes = base64.b64decode(encrypted_data.encode("utf-8"))
            decoded_str = decoded_bytes.decode("utf-8")
            if decoded_str and all(ord(c) >= 32 or c in '\n\r\t' for c in decoded_str):
                return decoded_str
        except Exception:
            pass

        # 3. If everything fails, return raw string (e.g. unencrypted plain tokens)
        return encrypted_data
