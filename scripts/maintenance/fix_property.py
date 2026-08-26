import json

data = {
    "tenant_id": "vidal-vidal",
    "date_range": "30d"
}

from app.models.mcp_analytics.core_models import RunReportRequest

try:
    req = RunReportRequest(**data)
    print("Success:", req)
except Exception as e:
    print("Error:", e)
