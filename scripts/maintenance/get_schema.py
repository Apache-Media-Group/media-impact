import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

try:
    sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")
    from app.services.mcp_analytics.bigquery_service import BigQueryService
    
    bq = BigQueryService()
    table = bq.client.get_table("llyc-ai-first-core.media_impact_data.fact_traffic_evolution")
    for f in table.schema:
        print(f"{f.name}: {f.field_type}")
except Exception as e:
    print(f"Error: {e}")
