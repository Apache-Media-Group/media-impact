import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

from app.services.mcp_analytics.secret_manager_service import SecretManagerService

sms = SecretManagerService()
print(f"Project ID in SMS: {sms.project_id}")
val = sms.get_tenant_secret("vidal-vidal", "ga4-creds")
if val:
    print("Successfully retrieved ga4-creds. Length:", len(val))
else:
    print("Failed to retrieve ga4-creds")
