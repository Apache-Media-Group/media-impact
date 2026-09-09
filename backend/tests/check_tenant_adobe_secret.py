# backend/tests/check_sanitas_secret.py
import json
from app.services.mcp_analytics.secret_manager_service import SecretManagerService

sms = SecretManagerService()
raw = sms.get_tenant_secret("sanitas", "adobe-creds")
if raw:
    parsed = json.loads(raw) if isinstance(raw, str) and raw.strip().startswith("{") else {}
    print("Sanitas adobe-creds keys:")
    for k in parsed.keys():
        val = parsed[k]
        if k in ["client_secret", "clientSecret"]:
            print(f"  {k}: ***")
        else:
            print(f"  {k}: {val}")
else:
    print("No adobe-creds secret found for sanitas")
