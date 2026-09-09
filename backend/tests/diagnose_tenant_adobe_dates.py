# backend/tests/diagnose_sanitas_adobe_dates.py
import os
import asyncio
from app.services.mcp_analytics.secret_manager_service import SecretManagerService
import app.services.mcp_analytics.adobe_service as adobe_mod
import aiohttp
adobe_mod.DEFAULT_HTTP_TIMEOUT = aiohttp.ClientTimeout(total=40.0, connect=10.0)
from app.services.mcp_analytics.adobe_service import AdobeAnalyticsService
from app.models.mcp_analytics.core_models import RunReportRequest

async def test_adobe():
    sms = SecretManagerService()
    creds_raw = sms.get_tenant_secret("sanitas", "adobe-creds")
    if not creds_raw:
        print("No adobe-creds found for sanitas")
        return

    import json
    parsed_creds = json.loads(creds_raw) if isinstance(creds_raw, str) and creds_raw.strip().startswith("{") else {"client_id": "adobe-temp"}
    parsed_creds["tenant_id"] = "sanitas"
    adobe = AdobeAnalyticsService(credentials=parsed_creds)

    print(f"Client ID: {adobe.client_id}")
    print(f"Company ID: {adobe.company_id}")

    try:
        token = await adobe._get_access_token()
        print(f"Token obtained: {token[:10]}...")
        accounts = await adobe.list_accounts()
        print(f"Accounts: {accounts}")
        company_id = await adobe._get_company_id()
        print(f"Company ID: {company_id}")

        report_suite = parsed_creds.get("report_suite_id") or "sanita2"
        suites = await adobe.list_properties(company_id)
        print(f"Report Suites found: {[s.property_id for s in suites]}")

        # Test request with real report suite
        req = RunReportRequest(
            property_id=suites[0].property_id,
            date_ranges=[{"start_date": "2026-09-01", "end_date": "2026-09-09"}],
            dimensions=["date"],
            metrics=["activeUsers", "sessions", "conversions"]
        )
        res = await adobe.run_report(req)
        print(f"Report returned {len(res.rows)} rows:")
        for r in res.rows:
            print(f"  {r}")
    except Exception as e:
        print(f"Adobe error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_adobe())
