import os
import sys
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

client = bigquery.Client()
query = """
    SELECT 
        SUM(total_sessions) as total_sessions,
        SUM(other_ai_sessions) as other_ai_sessions,
        SUM(chatgpt_sessions) as chatgpt_sessions,
        SUM(chatgpt_conversions) as chatgpt_conversions
    FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal'
"""
query_job = client.query(query)
results = query_job.result()
for row in results:
    print(dict(row))
