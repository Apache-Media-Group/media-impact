import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-test-keys.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"
sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

try:
    from app.services.mcp_analytics.bigquery_service import BigQueryService
    
    bq = BigQueryService()
    
    query = """
    SELECT 
        property_id,
        MIN(date) as min_date,
        MAX(date) as max_date,
        SUM(total_sessions) as total_sessions,
        SUM(ai_referred_sessions) as ai_referred,
        SUM(ai_inferred_sessions) as ai_inferred
    FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal'
    GROUP BY property_id
    """
    
    query_job = bq.client.query(query)
    results = query_job.result()
    
    print("Traffic Data in BigQuery for vidal-vidal:")
    for row in results:
        print(dict(row))
        
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
