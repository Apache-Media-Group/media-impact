import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from google.cloud import bigquery

def main():
    client = bigquery.Client()
    query = """
        SELECT 
            tenant_id,
            company_id,
            SUM(total_sessions) as sum_total_sessions,
            SUM(ai_referred_sessions) as sum_ai_referred,
            SUM(ai_inferred_sessions) as sum_ai_inferred,
            COUNT(*) as row_count
        FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
        WHERE tenant_id = 'vidal-vidal'
        GROUP BY tenant_id, company_id
    """
    query_job = client.query(query)
    results = query_job.result()
    
    print("--- VIDAL-VIDAL BIGQUERY DATA ---")
    for row in results:
        print(f"Company ID: {row.company_id} | Total: {row.sum_total_sessions} | Referred: {row.sum_ai_referred} | Inferred: {row.sum_ai_inferred} | Rows: {row.row_count}")

if __name__ == "__main__":
    main()
