from google.cloud import bigquery
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/.config/gcloud/application_default_credentials.json"
client = bigquery.Client(project="llyc-ai-first-core")
query = "SELECT COUNT(*) as c FROM `llyc-ai-first-core.media_impact_data.fact_traffic_evolution` WHERE tenant_id = 'vidal-vidal'"
results = client.query(query).result()
for r in results:
    print(f"Traffic rows: {r.c}")

query = "SELECT COUNT(*) as c FROM `llyc-ai-first-core.media_impact_data.fact_ai_visibility` WHERE tenant_id = 'vidal-vidal'"
results = client.query(query).result()
for r in results:
    print(f"Visibility rows: {r.c}")

query = "SELECT COUNT(*) as c FROM `llyc-ai-first-core.media_impact_data.dim_content_recommendations` WHERE tenant_id = 'vidal-vidal'"
results = client.query(query).result()
for r in results:
    print(f"Topics rows: {r.c}")
