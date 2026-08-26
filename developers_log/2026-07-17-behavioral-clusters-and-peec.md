# Dev Log: Adaptación de Behavioral Clusters e Integración de Peec.ai

## Fecha: 2026-07-17

### Hitos Arquitectónicos y Funcionales
1. **Clusters de Comportamiento (Behavioral Clusters)**:
   - Se eliminaron las reglas experimentales de `bigquery_service.py` y `adobe_service.py` para alinear estrictamente con la lógica original del repositorio `AIMA_2-0` (Cero Mocks).
   - Ahora, el `etl_service.py` procesa y asigna clusters (Investigador, Transaccional, Respuesta Rápida, Casual) basándose en conversiones, páginas por sesión y duración de la sesión.
   - El esquema en BigQuery (`fact_traffic_evolution`) fue actualizado para persistir permanentemente los `researcher_sessions`, `quick_answer_sessions`, `transactional_sessions`, y `casual_sessions`.

2. **Peec.ai**:
   - Se eliminaron rutinas que generaban métricas aleatorias, reafirmando la política de "Cero Mocks".
   - Se preparó `etl_service.py` para extraer explícitamente dominios (competidores), tópicos de PR y tópicos Digitales y persistirlos en `fact_ai_visibility` y `dim_content_recommendations`.
   - Actualmente, estos datos no se visualizan con la clave temporal `PEEC_API_KEY_TEMP` debido a respuestas 403 (falta de privilegios "Company API Key"), pero la arquitectura ya está preparada para procesar los datos una vez la clave live esté configurada en producción.

3. **Frontend**:
   - Se mapeó correctamente el nodo `metadata.behavioral_clusters` en el `RunReportResponse` dentro del hook `useAnalytics.ts`.
   - En `App.tsx`, las gráficas de *Clusters de comportamiento IA*, *Top dominios* y *Temáticas clave* están programadas para renderizarse limpiamente cuando existen datos.

### Errores resueltos
- Duplicación y adivinanza de clusters.
- Gráfica de clusters que no se mostraba por un desajuste de keys (`behavior_clusters` vs `behavioral_clusters`).

### Resultado de Verificaciones (Pre-Push Protocol)
- `cd frontend && npm run build` -> Éxito (0 Errores Typescript).
- `python3 -m py_compile` en los servicios de backend -> Éxito.
- `git diff` inspeccionado línea a línea.
