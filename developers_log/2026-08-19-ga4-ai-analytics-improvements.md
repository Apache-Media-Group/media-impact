# Log de Desarrollo: Mejoras en Analítica de IA (GA4)

## Fecha
2026-08-19

## Resumen
Se implementaron mejoras clave en el dashboard para mostrar métricas más granulares y útiles sobre el tráfico referenciado y deducido proveniente de motores de Inteligencia Artificial, utilizando datos de Google Analytics 4 (GA4). Todo el desarrollo se adhirió a la política estricta de CERO MOCKS, asegurando que todos los datos presentados provengan de cálculos reales en el backend o del Data Warehouse (BigQuery).

## Cambios Implementados

### 1. Configuración Dinámica de Eventos de Conversión por Tenant
- Se actualizó el panel de administración (`TenantModal.tsx`, `TenantTable.tsx` y `types.ts`) para permitir a los administradores definir eventos de conversión GA4 específicos (ej. `generate_lead`, `purchase`) para cada cliente/inquilino.
- El backend (`analytics.py`) fue ajustado para extraer estos eventos dinámicos desde Firestore y utilizarlos en la lógica de procesamiento.

### 2. Tabla de URLs de Aterrizaje Recomendadas por IA (`UrlsTable.tsx`)
- Se creó un nuevo componente (`UrlsTable.tsx`) para desglosar el tráfico por URL de destino (Landing Page).
- Esta vista agrupa las sesiones por motor de IA específico (ChatGPT, Gemini, Perplexity, Claude, Copilot) proporcionando información como la duración media y el clúster de comportamiento (Transaccional, Investigación, etc.).
- Se implementó renderizado condicional en `App.tsx` para mostrar esta tabla solo cuando el backend provea los datos en el objeto `content_affinity`.

### 3. Desglose de Conversiones Dinámicas
- Se modificó la tabla "Rendimiento por motor IA" en el dashboard principal (`App.tsx`) para mostrar dinámicamente columnas separadas para cada evento de conversión configurado por el inquilino, en lugar de una columna genérica de "Conversiones".

### 4. Implementación del "Confidence Index" (Validación Estadística)
- Se añadió un indicador de alerta en la UI (`KpiCard.tsx` y `App.tsx`) para notificar al usuario cuando el volumen de "IA Inferida" no es estadísticamente significativo.
- Esta advertencia se basa en un cálculo matemático implementado previamente en `calculation_service.py` (aplicando la regla $n \ge 30$, $np \ge 5$, $n(1-p) \ge 5$), protegiendo así la integridad analítica de LLYC al prevenir conclusiones sobre muestras pequeñas.

## Verificación
- Backend: Los archivos Python modificados compilaron correctamente (`python3 -m py_compile`).
- Frontend: La build de React/Vite (`npm run build`) se completó con éxito.
- Visual: Se corroboró en el entorno local (usando `test_local.sh`) que la UI carga correctamente las métricas reales y oculta los componentes cuando no hay datos disponibles en el Data Warehouse.

## Próximos Pasos
Realizar commit de los cambios y desplegar a Firebase / Cloud Run para disponibilizar las nuevas métricas en el entorno de producción que será evaluado por Alberto González y el equipo directivo.

### 5. Resolución de BigQuery ETL (Fechas cortadas y Urls)
- Se solucionó el problema del corte de datos al 23/07 recreando la configuración del Cloud Scheduler (`admin_etl.py`).
- Se amplió el esquema de BigQuery (`bigquery_service.py`) creando la tabla `fact_content_affinity` para soportar la granularidad de las URLs (Landing Pages).
- Se actualizó el pipeline ETL (`etl_service.py`) para extraer los datos granulares de GA4, empaquetarlos en la nueva tabla, y servirlos dinámicamente en el dashboard sin incurrir en llamadas costosas a la Live API en cada carga, respetando así la estrategia de optimización de costos.
- Se lanzó un proceso de Backfill Histórico asíncrono para poblar los últimos 90 días con la nueva estructura de datos.
