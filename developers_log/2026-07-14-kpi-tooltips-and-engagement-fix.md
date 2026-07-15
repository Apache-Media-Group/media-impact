# 2026-07-14 - Fix Engagement IA Averaging & KPI Tooltips

## Resumen de Cambios

En respuesta al reporte de QA (Olga García):
1. **Engagement IA a 0:** Se detectó un problema en el frontend (`useAnalytics.ts`) donde el `engagement_score` promedio se estaba diluyendo significativamente al promediarse usando la longitud total de los días reportados (`count`), incluyendo aquellos días en los que no había tráfico IA (`engagement_score = 0`). Se modificó la lógica para que el promedio se calcule únicamente sobre los días válidos que reportan un score mayor a 0 (`valid_engagement_days`). Esto soluciona el issue de que el Engagement Score apareciera como "0".
2. **Leyenda de KPIs:** Se introdujo la funcionalidad de tooltips nativos (`title`) en el componente `KpiCard` para proporcionar contexto adicional al pasar el cursor. En `App.tsx` se documentó extensamente cada KPI para resolver confusiones, como la diferencia conceptual de "Sesiones totales" frente al tráfico de IA.

## Archivos Modificados
- `frontend/src/components/KpiCard.tsx` (agregada prop `tooltip` y su renderizado).
- `frontend/src/App.tsx` (se pasaron los textos explicativos para cada tarjeta de KPI).
- `frontend/src/hooks/useAnalytics.ts` (se reescribió la lógica de agregación de `engagement_sum` y `valid_engagement_days`).

## Resultados de Pruebas
- Compilación del frontend exitosa (`npm run build`).
- Se validaron los tooltips en inspección de código.
