# backend/tests/diagnose_anomalies.py
"""
Script de diagnóstico para examinar la presencia y anomalías de datos de tráfico e IA
en BigQuery para los inquilinos 'vidal-vidal' y 'sanitas'.
"""
import os
import sys
from datetime import datetime
from google.cloud import bigquery

project_id = os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
dataset_id = os.getenv("BQ_DATASET_ID", "media_impact_data")

def run_diagnostics():
    client = bigquery.Client(project=project_id)
    
    print("=" * 60)
    print("DIAGNÓSTICO 1: VIDAL-VIDAL - FECHAS Y SESIONES IA EN BIGQUERY")
    print("=" * 60)
    
    query_vidal = f"""
    SELECT 
        date,
        total_sessions,
        ai_referred_sessions,
        ai_inferred_sessions,
        chatgpt_sessions,
        gemini_sessions,
        perplexity_sessions,
        claude_sessions,
        copilot_sessions,
        other_ai_sessions
    FROM `{project_id}.{dataset_id}.fact_traffic_evolution`
    WHERE tenant_id = 'vidal-vidal'
    ORDER BY date DESC
    LIMIT 40
    """
    try:
        rows_vidal = list(client.query(query_vidal).result())
        print(f"Total registros encontrados para vidal-vidal: {len(rows_vidal)}")
        for r in rows_vidal:
            print(
                f"Fecha: {r.date} | Total: {r.total_sessions} | "
                f"Referred: {r.ai_referred_sessions} | Inferred: {r.ai_inferred_sessions} | "
                f"ChatGPT: {r.chatgpt_sessions} | Gemini: {r.gemini_sessions} | "
                f"Perplexity: {r.perplexity_sessions} | Claude: {r.claude_sessions} | "
                f"Copilot: {r.copilot_sessions} | Other: {r.other_ai_sessions}"
            )
    except Exception as e:
        print(f"Error consultando vidal-vidal: {e}")

if __name__ == "__main__":
    run_diagnostics()
