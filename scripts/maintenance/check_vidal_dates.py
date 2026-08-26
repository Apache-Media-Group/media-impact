import asyncio
from dotenv import load_dotenv
load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

from google.cloud import bigquery

def main():
    client = bigquery.Client()
    query = """
        SELECT 
            company_id,
            MIN(date) as min_date,
            MAX(date) as max_date,
            SUM(total_sessions) as sum_total_sessions,
            SUM(ai_referred_sessions) as sum_ai_referred,
            SUM(ai_inferred_sessions) as sum_ai_inferred
        FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
        WHERE tenant_id = 'vidal-vidal'
        GROUP BY company_id
    """
    query_job = client.query(query)
    results = query_job.result()
    
    print("--- VIDAL-VIDAL DATES ---")
    for row in results:
        print(f"Company ID: {row.company_id} | Min Date: {row.min_date} | Max Date: {row.max_date} | Total: {row.sum_total_sessions}")

if __name__ == "__main__":
    main()
