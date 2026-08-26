import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-test-keys.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"
sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

try:
    from app.services.mcp_analytics.secret_manager_service import SecretManagerService
    from app.services.mcp_analytics.ga_service import GAService
    from app.models.mcp_analytics.core_models import RunReportRequest
    import json
    
    sms = SecretManagerService()
    tenant_id = "vidal-vidal"
    ga4_creds = sms.get_tenant_secret(tenant_id, "ga4-creds")
    parsed_creds = json.loads(ga4_creds)
    ga4_property_id = parsed_creds['properties'][0]
    
    # ensure it doesn't have properties/ prefix for the local model (or it strips it or adds it as needed)
    ga_service = GAService(credentials=parsed_creds)
    
    # Request total sessions without dimensions
    req_total = RunReportRequest(
        property_id=ga4_property_id,
        date_ranges=[{"start_date": "90daysAgo", "end_date": "today"}],
        dimensions=[],
        metrics=["sessions"],
        limit=10000
    )
    import asyncio
    
    async def run():
        res_total = await ga_service.run_report(req_total)
        print(f"Total sessions without dimensions: {res_total.rows[0]['sessions'] if res_total.rows else 0}")
        
        req_dim = RunReportRequest(
            property_id=ga4_property_id,
            date_ranges=[{"start_date": "90daysAgo", "end_date": "today"}],
            dimensions=["date", "source", "medium"],
            metrics=["sessions", "conversions", "activeUsers"],
            limit=100000
        )
        res_dim = await ga_service.run_report(req_dim)
        print(f"Row count with dimensions: {len(res_dim.rows)}")
        total_dim = sum(int(float(r.get('sessions', 0))) for r in res_dim.rows)
        print(f"Total sessions summing dimensions: {total_dim}")
        
    asyncio.run(run())
    
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
