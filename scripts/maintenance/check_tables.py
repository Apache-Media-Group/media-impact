import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from app.services.mcp_analytics.bigquery_service import BigQueryService

def main():
    tenant_id = "sanitas"
    bqs = BigQueryService()
    print("Checking gaps for:", tenant_id)
    gaps = bqs.get_data_gaps(tenant_id)
    print("Gaps:", gaps)

if __name__ == "__main__":
    main()
