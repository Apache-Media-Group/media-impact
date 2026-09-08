# backend/app/services/sanitizer_utils.py
"""
Sanitizer utility for URLs and query strings to ensure compliance with:
- GDPR / LOPDGDD (EU): Prohibits ingestion of personal identifiable information (PII).
- HIPAA: Prohibits ingestion of electronic Protected Health Information (ePHI) in query strings.
- SOC 2 & ISO 27001: Data minimization and confidentiality controls.
"""
import re
import logging
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse

logger = logging.getLogger(__name__)

# Exact sensitive keywords in lowercase
SENSITIVE_KEYWORDS = {
    "user", "usuario", "email", "mail", "correo", "token", "session", "auth", "jwt", "bearer",
    "pass", "password", "pwd", "credential", "secret", "key",
    "dni", "nif", "nie", "ssn", "id_card", "passport", "document",
    "patient", "paciente", "historia", "clinical", "diag", "diagnostico", "med", "medicamento",
    "receta", "tratamiento", "sintoma", "doctor", "medico", "especialidad", "cita", "consulta",
    "card", "tarjeta", "cvv", "pan", "account", "cuenta", "iban",
    "phone", "telefono", "tel", "mobile", "celular",
    "address", "direccion", "firstname", "lastname", "apellido"
}

# Regex to split camelCase or snake_case or hyphenated keys into atomic word tokens
TOKEN_SPLIT_REGEX = re.compile(r"[_\-\s]+|(?<=[a-z])(?=[A-Z])")

# High-entropy / token-like value patterns (e.g. hex tokens >= 24 chars, JWT prefixes)
SENSITIVE_VALUE_REGEX = re.compile(
    r"(^eyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}|^([a-fA-F0-9]{32,})$)",
    re.IGNORECASE
)

def is_sensitive_param_name(param_name: str) -> bool:
    """Checks if a query parameter key contains sensitive PII or PHI tokens."""
    if not param_name:
        return False
    tokens = [t.lower() for t in TOKEN_SPLIT_REGEX.split(param_name) if t]
    return any(t in SENSITIVE_KEYWORDS for t in tokens)

def sanitize_analytics_url(raw_url: str) -> str:
    """
    Sanitizes an incoming landing page URL by stripping any query parameters that could
    contain personal data (PII) or protected health information (PHI).
    
    Preserves clean URL paths (e.g., '/tratamientos/implantes') and safe marketing query
    parameters (e.g., 'utm_source', 'utm_medium', 'lang', 'category').
    """
    if not raw_url or not isinstance(raw_url, str):
        return "/"
    
    clean_raw = raw_url.strip()
    if not clean_raw:
        return "/"

    # If there are no query strings, return the path intact
    if "?" not in clean_raw:
        return clean_raw

    try:
        parsed = urlparse(clean_raw)
        if not parsed.query:
            return parsed.path or "/"

        query_tuples = parse_qsl(parsed.query, keep_blank_values=False)
        safe_params = []

        for key, val in query_tuples:
            key_clean = key.strip()
            val_clean = val.strip()

            # Check if key matches sensitive PII/PHI patterns
            if is_sensitive_param_name(key_clean):
                continue

            # Check if value matches high-entropy token/JWT patterns
            if SENSITIVE_VALUE_REGEX.match(val_clean):
                continue

            safe_params.append((key_clean, val_clean))

        clean_query = urlencode(safe_params)
        
        # Reconstruct sanitized URL
        if clean_query:
            sanitized = urlunparse((parsed.scheme, parsed.netloc, parsed.path, parsed.params, clean_query, parsed.fragment))
        else:
            sanitized = parsed.path or "/"

        return sanitized

    except Exception as e:
        logger.warning(f"Error sanitizing URL '{clean_raw}': {e}. Falling back to URL path without query params.")
        return clean_raw.split("?")[0] or "/"
