# backend/tests/diagnose_peec_report.py
import os
import asyncio
from app.services.mcp_analytics.secret_manager_service import SecretManagerService
from app.services.mcp_analytics.peec_service import PeecService
from app.models.mcp_analytics.core_models import RunReportRequest

async def main():
    sms = SecretManagerService()
    creds_raw = sms.get_tenant_secret("vidal-vidal", "peec-key")
    if not creds_raw:
        print("No peec-key found for vidal-vidal")
        return
    
    import json
    parsed_creds = json.loads(creds_raw) if isinstance(creds_raw, str) and creds_raw.strip().startswith("{") else {"api_key": creds_raw}
    parsed_creds["tenant_id"] = "vidal-vidal"
    peec_service = PeecService(credentials=parsed_creds)
    
    req = RunReportRequest(
        property_id="or_592a64bf-010a-4be7-a71c-53dbc491d2bb",
        date_ranges=[{"start_date": "2026-09-07", "end_date": "2026-09-09"}],
        dimensions=["date"],
        metrics=["ai_referred", "ai_inferred", "sentiment_score"]
    )
    
    res = await peec_service.run_report(req)
    print(f"Peec Rows returned: {len(res.rows)}")
    for r in res.rows:
        print(f"  Row: {r}")

if __name__ == "__main__":
    asyncio.run(main())
