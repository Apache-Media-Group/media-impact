import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from app.services.mcp_analytics.secret_manager_service import SecretManagerService
from app.services.mcp_analytics.etl_service import MCPETLService

def main():
    sms = SecretManagerService()
    tenant_id = "vidal-vidal"
    
    val = sms.get_tenant_secret(tenant_id, "ga4-creds")
    print("Type of secret:", type(val))
    if val:
        # Don't print the whole secret, just keys if it's JSON
        import json
        try:
            parsed = json.loads(val)
            print("Keys in JSON:", list(parsed.keys()))
            print("Type field:", parsed.get("type"))
        except:
            print("Not valid JSON. Length of string:", len(val))
            
        etl = MCPETLService(tenant_id)
        creds = etl._parse_credentials("ga4-creds", val)
        print("Parsed credentials object:", type(creds))
        if hasattr(creds, "refresh_token"):
            print("Has refresh_token:", bool(creds.refresh_token))

if __name__ == "__main__":
    main()
