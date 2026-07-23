# LLYC Intelligence Dashboard - Devlog 2026-07-23 (IA Referida & KpiCard UX)

## 🐛 Bug Fix: Duplicidad masiva en "IA Referida" (PEEC + GA4)
Se identificó que el total de "IA Referida" en el Dashboard estaba sumamente inflado (~11.600 sesiones) a pesar de haber filtrado los motores anti-spam (que en GA4 reportaban solo ~2.700).

**Causa Raíz:** 
El script `etl_service.py` estaba sumando las sesiones `ai_referred` reportadas por Peec.ai directamente al total ya calculado de GA4. Como Peec.ai es más laxo en su clasificación de referidos (incluyendo bots de scraping y crawlers como IA Referida), esta suma estaba reinyectando la basura algorítmica y duplicando métricas.

**Solución Implementada:**
- Se eliminó la línea en `etl_service.py` (`merged_traffic[key]["ai_referred_sessions"] += int(float(r.get("ai_referred", 0)))`) que agregaba el tráfico referido de Peec.
- Ahora, la métrica de **IA Referida** proviene estricta y puramente de Google Analytics 4, garantizando que solo se cuenten interacciones humanas reales validadas por los filtros anti-bot previos.
- El recálculo histórico en BigQuery refleja ahora ~2.700 sesiones referidas reales vs ~7.000 sesiones inferidas.

## ✨ Feature: Interactividad Ampliada en KpiCards (Explicación de Métricas)
Dado que la "IA Inferida" ahora supera drásticamente a la "IA Referida" (un comportamiento esperado pero potencialmente alarmante para el cliente), se implementó un sistema de justificación técnica accesible.

**Implementación:**
- Se refactorizó el componente base `KpiCard.tsx` para aceptar un nuevo prop `longTooltip` (tipo ReactNode).
- Si se proporciona este prop, el ícono de "Info" (hover) indica explícitamente "Click para ver más detalle".
- Al hacer clic, se despliega un Modal (`isModalOpen`) oscuro que renderiza el contenido enriquecido (con párrafos, negritas y estilos) proporcionando un contexto detallado sobre cómo funciona el modelo algorítmico y por qué una métrica supera a la otra.
- Se implementaron estas explicaciones extendidas en las tarjetas de **"IA referida"** e **"IA inferida"** dentro de `App.tsx`.
