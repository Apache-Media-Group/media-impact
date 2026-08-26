import asyncio
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from app.services.mcp_analytics.etl_service import MCPETLService
from app.services.mcp_analytics.secret_manager_service import SecretManagerService
from datetime import datetime, timedelta

async def main():
    tenant_id = "sanitas"
    print(f"Testing ETL for tenant: {tenant_id}")
    sms = SecretManagerService()
    
    credentials = {}
    secret_types = ["brandlight-key", "peec-key", "ga4-creds", "adobe-creds"]
    for st in secret_types:
        val = sms.get_tenant_secret(tenant_id, st)
        if val:
            credentials[st] = val
            print(f"Loaded secret for {st}")
    
    date_from = (datetime.utcnow() - timedelta(days=2)).strftime("%Y-%m-%d")
    date_to = datetime.utcnow().strftime("%Y-%m-%d")
    
    print(f"Running ETL from {date_from} to {date_to}")
    
    def progress(step, message):
        print(f"[PROGRESS] {step}: {message}")

    etl = MCPETLService(tenant_id=tenant_id)
    result = await etl.run_full_sync(
        credentials=credentials,
        date_from=date_from,
        date_to=date_to,
        on_progress=progress
    )
    print("RESULT:", result)

if __name__ == "__main__":
    asyncio.run(main())
