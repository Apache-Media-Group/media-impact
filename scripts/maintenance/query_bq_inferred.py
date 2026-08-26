import os
import sys
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

client = bigquery.Client()
query = """
    SELECT 
        SUM(ai_inferred_sessions) as ai_inferred_sessions,
        SUM(ai_referred_sessions) as ai_referred_sessions,
        SUM(total_sessions) as total_sessions
    FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal' AND source = 'ai-engines'
"""
query_job = client.query(query)
results = query_job.result()
for row in results:
    print("AI Engines source:", dict(row))

query_all = """
    SELECT 
        SUM(ai_inferred_sessions) as ai_inferred_sessions,
        SUM(ai_referred_sessions) as ai_referred_sessions,
        SUM(total_sessions) as total_sessions
    FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal' AND source = 'all'
"""
query_job_all = client.query(query_all)
results_all = query_job_all.result()
for row in results_all:
    print("All source (GA4):", dict(row))
