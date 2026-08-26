import os
import sys
import asyncio
from datetime import datetime

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.etl_service import MCPETLService
from app.services.mcp_analytics.bigquery_service import BigQueryService
import logging
from google.cloud import firestore

logging.basicConfig(level=logging.INFO)

async def run_backfill():
    date_from = "2026-04-22"
    date_to = "2026-07-23"
    tenant_id = "vidal-vidal" 
    
    db = firestore.Client()
    creds_ref = db.collection('credentials').document(tenant_id)
    doc = creds_ref.get()
    
    if not doc.exists:
        print(f"No credentials found for {tenant_id}")
        return
        
    creds = doc.to_dict()
    
    etl = MCPETLService(tenant_id)
    print(f"Starting ETL for {tenant_id} from {date_from} to {date_to}...")
    res = await etl.run_full_sync(creds, date_from, date_to)
    print("ETL Result:", res)

if __name__ == "__main__":
    asyncio.run(run_backfill())
