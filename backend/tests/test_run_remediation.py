# backend/tests/test_run_remediation.py
import asyncio
import os
from datetime import datetime, timezone
from app.services.mcp_analytics.etl_orchestrator import ETLOrchestrator

async def main():
    orchestrator = ETLOrchestrator()
    now_dt = datetime.now(timezone.utc)
    
    print("=== TEST 1: Determinar fechas para Vidal & Vidal ===")
    d_from_v, d_to_v = orchestrator._determine_gap_fill_dates("vidal-vidal", now_dt)
    print(f"Vidal & Vidal gap dates: {d_from_v} -> {d_to_v}")

    print("\n=== TEST 2: Determinar fechas para Sanitas ===")
    d_from_s, d_to_s = orchestrator._determine_gap_fill_dates("sanitas", now_dt)
    print(f"Sanitas gap dates: {d_from_s} -> {d_to_s}")

    print("\n=== TEST 3: Ejecutando Ingesta de Sanitas (Adobe Analytics) ===")
    res_s = await orchestrator.run_tenant_on_demand("sanitas", is_backfill=False, admin_email="admin-remediation")
    print(f"Resultado Sanitas: {res_s.get('status')}")
    print(f"Detalles Sanitas: {res_s.get('details')}")

    print("\n=== TEST 4: Ejecutando Ingesta de Vidal & Vidal (GA4 + Peec sin contaminación) ===")
    res_v = await orchestrator.run_tenant_on_demand("vidal-vidal", is_backfill=False, admin_email="admin-remediation")
    print(f"Resultado Vidal & Vidal: {res_v.get('status')}")
    print(f"Detalles Vidal & Vidal: {res_v.get('details')}")

if __name__ == "__main__":
    asyncio.run(main())
