import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from app.services.auth_utils import TokenManager
from app.services.mcp_analytics.bigquery_service import BigQueryService

def main():
    tm = TokenManager()
    bqs = BigQueryService()
    
    if not tm.db:
        print("Firestore not available.")
        return
        
    tenants_ref = tm.db.collection("tenants")
    docs = tenants_ref.stream()
    
    results = {}
    for doc in docs:
        tdata = doc.to_dict()
        tenant_id = tdata.get("tenant_id")
        if not tenant_id:
            continue
            
        print(f"Checking gaps for: {tenant_id}")
        gaps = bqs.get_data_gaps(tenant_id)
        
        results[tenant_id] = {
            "gap_count": gaps.get("gap_count", 0),
            "first_date": gaps.get("first_date")
        }
        
    print("--- SUMMARY ---")
    for t_id, data in results.items():
        print(f"Tenant: {t_id} | Gap Count: {data['gap_count']} | First Date: {data['first_date']}")

if __name__ == "__main__":
    main()
