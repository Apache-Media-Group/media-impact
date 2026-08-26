import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from app.services.auth_utils import TokenManager
from app.services.mcp_analytics.secret_manager_service import SecretManagerService

def main():
    tm = TokenManager()
    sms = SecretManagerService()
    
    tenant_id = "vidal-vidal"
    print(f"Checking configured secrets for: {tenant_id}")
    
    if not tm.db:
        print("Firestore not available.")
        return
        
    doc = tm.db.collection("tenants").document(tenant_id).get()
    if doc.exists:
        tdata = doc.to_dict()
        print("Configured secrets in Firestore metadata:")
        print(tdata.get("configured_secrets", {}))
    else:
        print("Tenant not found in Firestore.")
        
    print("\nActually checking GCP Secret Manager:")
    for st in ["brandlight-key", "peec-key", "ga4-creds", "adobe-creds"]:
        val = sms.get_tenant_secret(tenant_id, st)
        if val:
            print(f"✅ Found secret for: {st}")
        else:
            print(f"❌ Missing secret for: {st}")

if __name__ == "__main__":
    main()
