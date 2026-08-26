import sys
from app.services.mcp_analytics.gcs_service import GCSService

gcs = GCSService()
# Dummy file content
file_content = b"<svg xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></svg>"
url = gcs.upload_logo("vidal-test", file_content, "image/svg+xml")
print(f"URL: {url}")
