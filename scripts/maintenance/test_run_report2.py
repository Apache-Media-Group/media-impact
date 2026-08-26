import asyncio
import json
import os
import sys

from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"

# Add the backend app folder to the path
sys.path.append("/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.bigquery_service import BigQueryService

def main():
    bq = BigQueryService()
    # Let's get the metrics for the last 30 days
    metrics = bq.query_dashboard_metrics("vidal-vidal", "2026-06-22", "2026-07-22")
    
    print("--- VISIBILITY BY ENGINE ---")
    print(json.dumps(metrics.get("visibility_by_engine", []), indent=2))
    
    print("\n--- TOPICS PR ---")
    print(json.dumps(metrics.get("topics_pr", []), indent=2))
    
    print("\n--- TOPICS DIGITAL ---")
    print(json.dumps(metrics.get("topics_digital", []), indent=2))
    
    print("\n--- DOMAINS (TOP 5) ---")
    print(json.dumps(metrics.get("domains", [])[:5], indent=2))

if __name__ == "__main__":
    main()
