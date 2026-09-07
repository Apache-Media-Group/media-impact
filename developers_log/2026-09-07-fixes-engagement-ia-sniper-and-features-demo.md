# Bitácora de Desarrollo — 2026-09-07: Fixes Críticos de Datos y Features Demo en Media Impact

**Fecha:** 7 de septiembre de 2026  
**Autor:** Tech Lead & Senior Fullstack Engineer  
**Objetivo:** Resolver incidencias de datos reportadas para Adobe Analytics (Sanitas) y GA4 (Vidal & Vidal), e implementar las nuevas funcionalidades de desglose de URLs y tipo de conversión para la demo comercial.

---

## 1. Resumen Ejecutivo de Incidencias y Mejoras

### 1.1. Incidencia: Engagement IA en 0 (Adobe Analytics / Sanitas)
* **Causa Raíz Identificada:**
  1. En `etl_service.py` (línea 572), la ingesta diaria de Adobe ejecutaba `"engagement_score": float(r.get("conversions", 0))`. Debido a que para Sanitas las conversiones son de tipo lead/cita (y no compras directas en ecommerce con variable order), este valor se guardaba como `0.0` en BigQuery para todos los registros históricos.
  2. En `adobe_service.py`, ante ausencia de conversiones en el reporte de la API en vivo, el fallback caía en `0.0`.
* **Solución Implementada:**
  - Se implementó el cálculo formal del **Sniper Score** canónico en `etl_service.py` utilizando `CalculationService.calculate_sniper_score(daily_conv, daily_dur, daily_pages)`.
  - En `bigquery_service.py`, se implementó recálculo dinámico preventivo: si el registro histórico en BigQuery contiene `0.0` pero existen sesiones de motores de IA y duración acumulada, se autocalcula en memoria el Sniper Score a partir de las duraciones reales y visitas, evitando que el dashboard muestre `0`.
  - Se eliminó cualquier fallback nulo o a 0 en `adobe_service.py` y `ga_traffic_ia_service.py`.

### 1.2. Incidencia: Tabla "Rendimiento por Motor IA" (Desfase de Sesiones y Score en 0)
* **Causa Raíz Identificada:**
  1. En `frontend/src/App.tsx:getMotorRows`, el cálculo del score ejecutaba:
     `sc: motors[m].count > 0 ? Math.round(motors[m].conversions / motors[m].count) : 0`
     Dividiendo conversiones entre días del periodo (ej. 2 conv / 30 días = 0), ignorando por completo el Sniper Score.
  2. En `App.tsx`, una condición filtraba `'Otros'` si tenía `<= 50` sesiones y `0` conversiones, provocando que la suma de sesiones en la tabla no coincidiera con el KPI de "IA referida" de la cabecera.
  3. En `etl_service.py`, la condición `"chat" in source_val` clasificaba chats de atención al cliente (Zendesk, LiveChat, Crisp) dentro de "Otros AI", inflando artificialmente el conteo.
* **Solución Implementada:**
  - Armonización total: `getMotorRows` consume directamente el objeto `battle_of_ais` consolidado por el backend (con Sniper Scores precalculados por motor).
  - En el fallback local de cálculo en frontend, se implementó la función canónica `calculateSniperScore` y se eliminó el filtro arbitrario de exclusión de 'Otros', garantizando consistencia absoluta (suma de la tabla = tarjeta KPI).
  - En `etl_service.py`, se refinaron las expresiones regulares de detección de motores AI, descartando tokens genéricos de soporte web.

### 1.3. Feature 2.1: Landing Pages Recomendadas por Motor de IA
* **Solución Implementada:**
  - En el backend (`ga_traffic_ia_service.py` y `adobe_service.py`), se asoció el reporte de landing pages a cada motor dentro de `battle_of_ais`, estructurado con: `url`, `sessions`, `share`, y `avg_duration`.
  - En `bigquery_service.py`, se vinculó `fact_content_affinity` al objeto `battle_of_ais` agrupado por motor.
  - En el frontend (`MotorPerformanceTable.tsx`), se agregó un acordeón interactivo expandible por cada fila de motor que despliega la subtabla detallada con las Top Landing Pages donde impacta cada modelo (ChatGPT, Gemini, Perplexity, Copilot, etc.), con links externos funcionales.

### 1.4. Feature 2.2: Tipo de Conversión Desagregado por Motor (Compras en Vidal & Vidal)
* **Solución Implementada:**
  - En `core_models.py`, se enriqueció `TrafficIABattleItem` con campos específicos para ecommerce y leads: `raw_avg_duration_sec`, `landing_pages`, `conversion_breakdown`, `purchase_count`, `purchase_revenue`, y `purchase_rate`.
  - En `ga_traffic_ia_service.py`, se incluyó la métrica `purchaseRevenue` de la API de GA4 y el conteo de eventos de compra (`purchase`) y leads (`generate_lead`, `lead`, `cita`).
  - En `MotorPerformanceTable.tsx`, se habilitó la visualización de pedidos comerciales confirmados, tasas de compra y facturación atribuida (€).

---

## 2. Archivos Modificados y Creados

1. `backend/app/models/mcp_analytics/core_models.py`
2. `backend/app/services/mcp_analytics/ga_traffic_ia_service.py`
3. `backend/app/services/mcp_analytics/adobe_service.py`
4. `backend/app/services/mcp_analytics/etl_service.py`
5. `backend/app/services/mcp_analytics/bigquery_service.py`
6. `backend/app/services/mcp_analytics/routes/analytics.py`
7. `backend/tests/test_ai_engines_and_sniper.py` *(Nuevo archivo de tests para trazabilidad según directriz GEMINI.md)*
8. `frontend/src/types/index.ts`
9. `frontend/src/hooks/useAnalytics.ts`
10. `frontend/src/App.tsx`
11. `frontend/src/components/dashboard/MotorPerformanceTable.tsx`
12. `GEMINI.md` *(Sección 10 añadida para política de trazabilidad de pruebas Python)*

---

## 3. Pruebas y Verificaciones Ejecutadas

* **Compilación Frontend:**
  - Comando: `cd frontend && npm run build` (`tsc -b && vite build`)
  - Resultado: Exitoso (exit code 0, 2032 módulos transformados sin errores de TypeScript).
* **Compilación Backend:**
  - Comando: `python3 -m py_compile backend/app/models/mcp_analytics/core_models.py backend/app/services/mcp_analytics/ga_traffic_ia_service.py backend/app/services/mcp_analytics/adobe_service.py backend/app/services/mcp_analytics/etl_service.py backend/app/services/mcp_analytics/bigquery_service.py backend/app/services/mcp_analytics/routes/analytics.py backend/tests/test_ai_engines_and_sniper.py`
  - Resultado: Exitoso (exit code 0).
* **Tests Automatizados:**
  - Comando: `./backend/venv/bin/pytest backend/tests/test_ai_engines_and_sniper.py`
  - Resultado: 4 tests pasados en 0.40s (100% de éxito en cobertura de Sniper Score, patrones regex de normalización y modelos Pydantic).
* **Verificación Automatizada en Navegador (Playwright Headless):**
  - Script: `frontend/tests/browser_check.cjs`
  - Resultado: Exitoso. Capturas y validaciones en vivo del dashboard local (`http://localhost:3000/media-impact/` contra API en `127.0.0.1:8080`):
    - Engagement IA calculado dinámicamente en Sanitas (14/100) y Vidal & Vidal (77/100).
    - Desglose de motores consistente al 100% con KPI superior de IA Referida (3.059 sesiones).
    - Sniper Scores visuales no cero para todos los motores activos.
    - Acordeón de Top Landing Pages por motor desplegando subtabla interactiva con URLs reales y métricas de cuota y duración.
    - Columna de Compras e-commerce activa con 5 transacciones registradas.
* **Política de Cero Mocks:**
  - Verificada la ausencia total de datos sintéticos o valores fijos; todos los cálculos son derivados matemáticamente de las fuentes de datos reales.
