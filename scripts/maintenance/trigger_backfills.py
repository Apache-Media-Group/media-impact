import asyncio
import os
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from datetime import datetime, timedelta
from app.services.auth_utils import TokenManager
from app.services.mcp_analytics.bigquery_service import BigQueryService
from app.services.mcp_analytics.etl_service import MCPETLService
from app.services.mcp_analytics.secret_manager_service import SecretManagerService

async def process_tenant(tenant_id: str, action: str):
    print(f"\n[{tenant_id.upper()}] Starting action: {action}")
    sms = SecretManagerService()
    
    credentials = {}
    secret_types = ["brandlight-key", "peec-key", "ga4-creds", "adobe-creds"]
    for st in secret_types:
        val = sms.get_tenant_secret(tenant_id, st)
        if val:
            credentials[st] = val
    
    etl = MCPETLService(tenant_id=tenant_id)
    
    if action == "patch_gaps":
        bqs = BigQueryService()
        gaps_result = bqs.get_data_gaps(tenant_id)
        gaps = gaps_result.get("gaps", [])
        print(f"[{tenant_id.upper()}] Found {len(gaps)} gap ranges to patch.")
        
        for gap in gaps:
            start_date = gap.get("start")
            end_date = gap.get("end")
            if not start_date or not end_date:
                continue
                
            print(f"[{tenant_id.upper()}] Patching gap: {start_date} to {end_date}...")
            sync_res = await etl.run_full_sync(
                credentials=credentials,
                date_from=start_date,
                date_to=end_date
            )
            print(f"[{tenant_id.upper()}] Result: {sync_res.get('status')} | Records processed: {sync_res.get('records_processed', 0)}")
            
    elif action == "historical_backfill":
        date_from = (datetime.utcnow() - timedelta(days=90)).strftime("%Y-%m-%d")
        date_to = datetime.utcnow().strftime("%Y-%m-%d")
        print(f"[{tenant_id.upper()}] Running backfill from {date_from} to {date_to}...")
        
        sync_res = await etl.run_full_sync(
            credentials=credentials,
            date_from=date_from,
            date_to=date_to
        )
        print(f"[{tenant_id.upper()}] Result: {sync_res.get('status')} | Records processed: {sync_res.get('records_processed', 0)}")

async def main():
    await process_tenant("sanitas", "patch_gaps")
    await process_tenant("vidal-vidal", "historical_backfill")

if __name__ == "__main__":
    asyncio.run(main())
