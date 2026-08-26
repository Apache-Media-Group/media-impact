import sys
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.routes.admin_etl import create_or_update_tenant_scheduler

print("Creating scheduler for vidal-vidal...")
create_or_update_tenant_scheduler("vidal-vidal")
print("Done!")
