# backend/tests/diagnose_peec_visibility.py
import os
from google.cloud import bigquery

project_id = os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
dataset_id = os.getenv("BQ_DATASET_ID", "media_impact_data")
client = bigquery.Client(project=project_id)

query = f"""
SELECT 
    date,
    domain,
    engine,
    visibility_score,
    sentiment_score,
    share_of_voice
FROM `{project_id}.{dataset_id}.fact_ai_visibility`
WHERE tenant_id = 'vidal-vidal'
  AND (LOWER(domain) LIKE '%vidal%' OR LOWER(domain) LIKE '%vidalvidal%')
ORDER BY date DESC
LIMIT 10

"""

rows = list(client.query(query).result())
print(f"Total rows in fact_ai_visibility for vidal-vidal: {len(rows)}")
for r in rows:
    print(f"Date: {r.date} | Domain: {r.domain} | Engine: {r.engine} | Vis: {r.visibility_score} | Sent: {r.sentiment_score} | SOV: {r.share_of_voice}")
