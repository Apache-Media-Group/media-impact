# Integración de Paginación GA4 y Desglose de Tráfico IA

## Objetivo del Sprint
Resolver el límite de 10,000 filas (paginación) en la extracción de Google Analytics 4 y reemplazar los porcentajes "mockeados" en la UI con datos de tráfico reales extraídos directamente de la API (`sessionSource`). Además, se agregó el soporte para capturar y mostrar la duración promedio por motor de IA.

## Cambios Implementados

### 1. Backend: Esquema y Consulta (BigQuery)
- **Modificación:** Se expandió la tabla `fact_traffic_evolution` en `backend/app/services/mcp_analytics/bigquery_service.py`.
- **Nuevas Columnas:** Se agregaron 12 nuevas columnas específicas para almacenar tanto las sesiones como la duración total (`chatgpt_sessions`, `chatgpt_duration`, `gemini_sessions`, `gemini_duration`, etc.).
- **Filtro de Segmento:** Se ajustó la consulta SQL de `query_dashboard_metrics` para utilizar siempre `all-users` como fallback por defecto cuando no hay segmento, eliminando el problema de las sesiones duplicadas.

### 2. Backend: Lógica de Extracción ETL (GA4)
- **Modificación:** Se actualizó `backend/app/services/mcp_analytics/etl_service.py`.
- **Paginación (while loop):** Se sustituyó la consulta estática por un bloque `while True` que incrementa un `offset` en bloques de 10,000 hasta descargar todas las filas.
- **Mapeo de Motores:** Se incluyó el campo `sessionSource` y `averageSessionDuration` a las dimensiones de GA4. Durante la inserción, se evalúa el origen y se incrementa el contador del modelo IA correspondiente.

### 3. Backend: API Analytics (FastAPI)
- **Modificación:** En `backend/app/services/mcp_analytics/routes/analytics.py` se expusieron las nuevas columnas en la respuesta JSON del endpoint `/run-report`.
- **Headers:** Se actualizaron los `metric_headers` para que el frontend pueda procesarlos dinámicamente.

### 4. Frontend: Visualización de Datos Reales (React)
- **Modificación:** En `frontend/src/App.tsx`, el método `getMotorRows()` fue refactorizado.
- **Eliminación de Mocks:** Se borró la lógica condicional que inyectaba distribuciones de tráfico (ej. 45% ChatGPT, 25% Gemini, etc.).
- **Cálculo de Duración:** Se añadió la función que divide la duración total acumulada entre las sesiones para generar el promedio visualizado (ej. `1m 24s`) y se eliminó el "N/A" por defecto.

## Validaciones y Testeo Local
- [x] Ejecución del entorno con `./test_local.sh`.
- [x] Frontend compilado sin errores de TypeScript (`npm run build`).
- [x] Backend Python validado mediante `python3 -m py_compile`.
- [x] La interfaz gráfica ha sido revisada por el usuario, validando la estabilidad visual de los componentes, la desaparición de los mocks y la solución al error del total de sesiones.
