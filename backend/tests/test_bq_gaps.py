# backend/tests/test_bq_gaps.py
import time
from app.services.mcp_analytics.bigquery_service import BigQueryService

bqs = BigQueryService()
query = f"""
SELECT DISTINCT date
FROM `{bqs.project_id}.{bqs.dataset_id}.fact_traffic_evolution`
WHERE tenant_id = 'vidal-vidal'
  AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)
ORDER BY date ASC
"""
rows = [str(r.date) for r in bqs.client.query(query).result()]
print(f"Dates in BQ in last 14 days for vidal-vidal: {rows}")

# Same for sanitas
query_sanitas = f"""
SELECT DISTINCT date
FROM `{bqs.project_id}.{bqs.dataset_id}.fact_traffic_evolution`
WHERE tenant_id = 'sanitas'
  AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)
ORDER BY date ASC
"""
rows_sanitas = [str(r.date) for r in bqs.client.query(query_sanitas).result()]
print(f"Dates in BQ in last 14 days for sanitas: {rows_sanitas}")
