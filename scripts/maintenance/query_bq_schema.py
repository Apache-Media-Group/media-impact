import os
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"

client = bigquery.Client(project="llyc-ai-first-core")

table_id = "llyc-ai-first-core.media_impact_data.fact_content_affinity"
table = client.get_table(table_id)

print(f"Schema for {table_id}:")
for schema_field in table.schema:
    print(f"- {schema_field.name}: {schema_field.field_type}")
