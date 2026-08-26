from google.cloud import bigquery
import os

project_id = "llyc-ai-first-core"
dataset_id = "media_impact"
tenant_id = "vidal-vidal"

client = bigquery.Client(project=project_id)

query_traffic = f"""
    SELECT 
        date,
        SUM(total_sessions) as total_sessions,
        SUM(ai_referred_sessions) as ai_referred,
        SUM(ai_inferred_sessions) as ai_inferred,
        AVG(engagement_score) as engagement_score
    FROM `{project_id}.{dataset_id}.fact_traffic_evolution`
    WHERE tenant_id = '{tenant_id}'
    GROUP BY date
    ORDER BY date ASC
"""

print("Running traffic query...")
results = client.query(query_traffic).result()

for row in results:
    print(f"Date: {row.date}, Total: {row.total_sessions}, Referred: {row.ai_referred}, Inferred: {row.ai_inferred}")

