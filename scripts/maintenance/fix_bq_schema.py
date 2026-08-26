import os
import sys

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

try:
    sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")
    from app.services.mcp_analytics.bigquery_service import BigQueryService
    from google.cloud import bigquery
    
    bq = BigQueryService()
    table_id = f"{bq.project_id}.{bq.dataset_id}.fact_traffic_evolution"
    
    # Columns to add
    new_columns = [
        bigquery.SchemaField("chatgpt_conversions", "FLOAT", mode="NULLABLE"),
        bigquery.SchemaField("gemini_conversions", "FLOAT", mode="NULLABLE"),
        bigquery.SchemaField("perplexity_conversions", "FLOAT", mode="NULLABLE"),
        bigquery.SchemaField("claude_conversions", "FLOAT", mode="NULLABLE"),
        bigquery.SchemaField("copilot_conversions", "FLOAT", mode="NULLABLE"),
        bigquery.SchemaField("other_ai_conversions", "FLOAT", mode="NULLABLE"),
    ]
    
    table = bq.client.get_table(table_id)
    original_schema = table.schema
    
    # Check if they already exist
    existing_field_names = [field.name for field in original_schema]
    cols_to_add = [c for c in new_columns if c.name not in existing_field_names]
    
    if not cols_to_add:
        print("All conversion columns already exist.")
    else:
        new_schema = original_schema[:]
        for c in cols_to_add:
            new_schema.append(c)
        
        table.schema = new_schema
        table = bq.client.update_table(table, ["schema"])
        
        print(f"Added {len(cols_to_add)} columns to {table_id}:")
        for c in cols_to_add:
            print(f"- {c.name}")
            
except Exception as e:
    print(f"Error: {e}")
