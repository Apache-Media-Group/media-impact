# Resolución de Bug: Fallback a Mocks y Permisos de Secret Manager en Cloud Run

## Fecha: 21 de Julio de 2026

## Problema Detectado
Al lanzar el dashboard en producción (Cloud Run), se reportaban las fuentes de datos (GA4, Adobe, Brandlight, Peec) como "skipped" en el historial de ingesta, y el frontend continuaba mostrando datos mockeados en la interfaz de "Vidal & Vidal" a pesar de que el entorno local funcionaba perfectamente.

## Diagnóstico
1. **Permisos de Infraestructura**: El backend alojado en Cloud Run operaba con la cuenta de servicio por defecto de Compute Engine (`46249705777-compute@developer.gserviceaccount.com`). Esta cuenta carecía del rol `roles/secretmanager.secretAccessor`.
2. **Impacto en ETL**: Al no poder desencriptar las llaves guardadas en Secret Manager, el `MCPETLService` asumía que no había credenciales y marcaba todas las fuentes como "skipped", omitiendo la carga de datos en BigQuery.
3. **Fallback a Datos Simulados**: La ruta `/run-report` en `analytics.py` contaba con un bloque tradicional de "Live API fallback". Si BigQuery retornaba vacío o fallaba, el backend dirigía la consulta a las clases de servicio instanciadas localmente o al mock de desarrollo, generando gráficas con datos irreales en vez de mostrar un panel vacío con ceros o un mensaje de error.

## Solución Implementada
- **GCP IAM**: Se otorgó el rol `roles/secretmanager.secretAccessor` a la cuenta de servicio de Cloud Run mediante la CLI `gcloud`. Esto solucionó permanentemente los errores de lectura de llaves maestras en producción.
- **Backend Refactor**: En el controlador `analytics.py`, se removió la lógica de "fallback tradicional". A partir de este momento, si la consulta a BigQuery falla o no existen datos procesados (`has_data = False`) para un tenant autenticado, la API devuelve explícitamente una estructura `RunReportResponse` de métricas llenas de "0". La Live API ahora solo es accesible cuando el parámetro `live_api` es `True`.
- **Frontend Validation**: Se certificó la compilación íntegra de los archivos frontend modificados (modificaciones de descripciones estáticas y el componente de tabla de dominios) usando `npm run build`.

## Resultados de Verificación
- El pre-push protocol de compilación en Backend (`python3 -m py_compile`) y Frontend (`tsc -b && vite build`) retornó éxito.
- Las trazas locales muestran que la lectura de secretos en vivo ahora devuelve objetos de `RunReportResponse` estrictamente ceros ante consultas vacías, deshabilitando cualquier data "falsa" en el sistema.
