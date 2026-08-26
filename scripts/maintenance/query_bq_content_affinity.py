import os
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"

client = bigquery.Client(project="llyc-ai-first-core")

query = """
SELECT landing_page, sessions, date, chatgpt_sessions, gemini_sessions, perplexity_sessions
FROM `llyc-ai-first-core.media_impact_data.fact_content_affinity`
WHERE tenant_id = 'vidal-vidal'
ORDER BY sessions DESC
LIMIT 10
"""

print(f"Running query: {query}")
try:
    query_job = client.query(query)
    results = query_job.result()
    rows = list(results)
    
    if not rows:
        print("NO DATA FOUND IN fact_content_affinity for vidal-vidal.")
    else:
        print("Data found!")
        for row in rows:
            print(f"URL: {row.landing_page} | Total Sessions: {row.sessions} | Date: {row.date} | ChatGPT: {row.chatgpt_sessions}")
except Exception as e:
    print(f"Error querying BQ: {e}")
