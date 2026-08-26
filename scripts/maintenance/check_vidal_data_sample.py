import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from google.cloud import bigquery

def main():
    client = bigquery.Client()
    query = """
        SELECT *
        FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
        WHERE tenant_id = 'vidal-vidal' AND company_id = 'ga4-account'
        ORDER BY total_sessions DESC
        LIMIT 5
    """
    query_job = client.query(query)
    print("--- TOP GA4 ROWS ---")
    for row in query_job.result():
        print(f"Date: {row.date} | Source: {row.source} | Medium: {row.medium} | Total: {row.total_sessions}")

    query = """
        SELECT *
        FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
        WHERE tenant_id = 'vidal-vidal' AND company_id = 'peec-account'
        ORDER BY ai_inferred_sessions DESC
        LIMIT 5
    """
    query_job = client.query(query)
    print("\n--- TOP PEEC ROWS ---")
    for row in query_job.result():
        print(f"Date: {row.date} | Source: {row.source} | Medium: {row.medium} | Ref: {row.ai_referred_sessions} | Inf: {row.ai_inferred_sessions}")

if __name__ == "__main__":
    main()
