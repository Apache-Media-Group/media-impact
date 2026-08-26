import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

try:
    sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")
    from app.services.mcp_analytics.bigquery_service import BigQueryService
    
    bq = BigQueryService()
    
    query = """
    SELECT 
        tenant_id, source, medium, SUM(total_sessions) as sessions
    FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
    WHERE total_sessions > 0
      AND (source LIKE '%ai%' OR source LIKE '%bot%' OR source LIKE '%chatgpt%' OR source LIKE '%openai%' OR source LIKE '%gemini%' OR source LIKE '%claude%' OR source LIKE '%perplexity%' OR source LIKE '%copilot%')
    GROUP BY tenant_id, source, medium
    ORDER BY sessions DESC
    LIMIT 20
    """
    
    query_job = bq.client.query(query)
    results = query_job.result()
    
    for row in results:
        print(dict(row))
except Exception as e:
    print(f"Error: {e}")
