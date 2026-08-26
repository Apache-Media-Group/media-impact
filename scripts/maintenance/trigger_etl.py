import os
import sys
import asyncio
from datetime import datetime

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.routes.admin_etl import run_historical_backfill_task
import logging

logging.basicConfig(level=logging.INFO)

async def main():
    print("Starting backfill for vidal-vidal...")
    await run_historical_backfill_task("vidal-vidal")
    print("Done!")

if __name__ == "__main__":
    asyncio.run(main())
