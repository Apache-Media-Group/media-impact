# backend/tests/verify_bq_remediation_results.py
import os
from app.services.mcp_analytics.bigquery_service import BigQueryService

def main():
    bqs = BigQueryService()
    client = bqs.client
    project_id = bqs.project_id
    dataset_id = bqs.dataset_id

    print("==================================================")
    print(" 🏥 SANITAS: fact_traffic_evolution (Sep 1 - Sep 9)")
    print("==================================================")
    q_sanitas = f"""
    SELECT date, segment_id, total_sessions, engagement_score, company_id, property_id
    FROM `{project_id}.{dataset_id}.fact_traffic_evolution`
    WHERE tenant_id = 'sanitas'
      AND date >= '2026-09-01'
    ORDER BY date ASC, segment_id ASC
    """
    rows_s = list(client.query(q_sanitas).result())
    for r in rows_s:
        print(f"Date: {r.date} | Seg: {r.segment_id:12} | Sessions: {r.total_sessions:6} | Score: {r.engagement_score:6.2f} | RSID: {r.property_id}")

    print("\n==================================================")
    print(" 💎 VIDAL & VIDAL: fact_traffic_evolution (Sep 1 - Sep 9)")
    print("==================================================")
    q_vidal = f"""
    SELECT date, total_sessions, ai_referred_sessions, ai_inferred_sessions,
           chatgpt_sessions, gemini_sessions, perplexity_sessions, other_ai_sessions
    FROM `{project_id}.{dataset_id}.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal'
      AND date >= '2026-09-01'
    ORDER BY date ASC
    """
    rows_v = list(client.query(q_vidal).result())
    for r in rows_v:
        tot_ai = (r.ai_referred_sessions or 0) + (r.ai_inferred_sessions or 0)
        print(f"Date: {r.date} | Total: {r.total_sessions:5} | AI Ref: {r.ai_referred_sessions:3} | AI Inf: {r.ai_inferred_sessions:3} | Sum AI: {tot_ai:4} | GPT: {r.chatgpt_sessions:3} | Gemini: {r.gemini_sessions:3} | Perplexity: {r.perplexity_sessions:3}")

if __name__ == "__main__":
    main()
