from google.cloud import bigquery
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/.config/gcloud/application_default_credentials.json"
client = bigquery.Client(project="llyc-ai-first-core")

queries = [
    "DELETE FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution` WHERE tenant_id = 'vidal-vidal'",
    "DELETE FROM `llyc-ai-first-core.media_impact_data.fact_ai_visibility` WHERE tenant_id = 'vidal-vidal'",
    "DELETE FROM `llyc-ai-first-core.media_impact_data.dim_content_recommendations` WHERE tenant_id = 'vidal-vidal'"
]

for query in queries:
    try:
        print(f"Executing: {query}")
        client.query(query).result()
        print("Success.")
    except Exception as e:
        print(f"Error: {e}")
