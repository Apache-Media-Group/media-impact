import sys
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"

sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.bigquery_service import BigQueryService

bq = BigQueryService()
bq.create_dataset_and_tables()
print("Tables ensured!")
