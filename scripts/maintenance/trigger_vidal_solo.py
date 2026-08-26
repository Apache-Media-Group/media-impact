import asyncio
import os
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/.env")

from datetime import datetime, timedelta
from app.services.mcp_analytics.etl_service import MCPETLService
from app.services.mcp_analytics.secret_manager_service import SecretManagerService

async def main():
    tenant_id = "vidal-vidal"
    print(f"[{tenant_id.upper()}] Starting independent backfill...")
    sms = SecretManagerService()
    
    credentials = {}
    secret_types = ["ga4-creds"] 
    for st in secret_types:
        val = sms.get_tenant_secret(tenant_id, st)
        if val:
            credentials[st] = val
            print(f"Loaded {st}")
    
    # Load peec-key from .env directly!
    peec_temp = os.getenv("PEEC_API_KEY_TEMP")
    if peec_temp:
        credentials["peec-key"] = peec_temp
        print("Loaded peec-key from PEEC_API_KEY_TEMP")
            
    etl = MCPETLService(tenant_id=tenant_id)
    
    date_from = (datetime.utcnow() - timedelta(days=90)).strftime("%Y-%m-%d")
    date_to = datetime.utcnow().strftime("%Y-%m-%d")
    
    def on_progress(step, msg):
        print(f"[{step}] {msg}")
        
    print(f"[{tenant_id.upper()}] Running backfill from {date_from} to {date_to}...")
    
    sync_res = await etl.run_full_sync(
        credentials=credentials,
        date_from=date_from,
        date_to=date_to,
        on_progress=on_progress
    )
    print(f"[{tenant_id.upper()}] Result: {sync_res}")

if __name__ == "__main__":
    asyncio.run(main())
