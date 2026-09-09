# backend/tests/test_bq_max_date.py
import time
from app.services.mcp_analytics.bigquery_service import BigQueryService

bqs = BigQueryService()
start = time.time()
query = f"""
SELECT MAX(date) as max_date
FROM `{bqs.project_id}.{bqs.dataset_id}.fact_traffic_evolution`
WHERE tenant_id = 'vidal-vidal'
"""
res = list(bqs.client.query(query).result())
elapsed = time.time() - start
max_d = res[0].max_date if res else None
print(f"Max date for vidal-vidal: {max_d} in {elapsed:.2f}s")
