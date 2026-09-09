# backend/tests/diagnose_peec_impact.py
import os
from google.cloud import bigquery

project_id = os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
dataset_id = os.getenv("BQ_DATASET_ID", "media_impact_data")
client = bigquery.Client(project=project_id)

query = f"""
SELECT 
    date,
    source,
    medium,
    total_sessions,
    ai_referred_sessions,
    ai_inferred_sessions
FROM `{project_id}.{dataset_id}.fact_traffic_evolution`
WHERE tenant_id = 'vidal-vidal'
ORDER BY date DESC
LIMIT 15
"""

rows = list(client.query(query).result())
for r in rows:
    print(f"Date: {r.date} | Source: {r.source} | Med: {r.medium} | Total: {r.total_sessions} | Ref: {r.ai_referred_sessions} | Inf: {r.ai_inferred_sessions}")
