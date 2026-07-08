# Dashboard Date Filter & Adobe Analytics API Fixes (2026-07-08)

## 📌 Contexto
Se reportaron dos problemas durante las pruebas de estrés del dashboard con un cliente específico, comparándolo con la herramienta legacy:
1. El filtro de fecha no modificaba los KPIs en la parte superior del dashboard (problema de usabilidad/frontend).
2. Los segmentos mostrados no coincidían con los arrojados por la API de Adobe (problema del ETL/backend).

## 🛠️ Modificaciones Realizadas

### 1. Corrección del Filtro de Fecha (Frontend)
- **Archivo:** `frontend/src/hooks/useAnalytics.ts`
- **Problema:** El request enviaba `start_date` y `end_date` planos en el cuerpo JSON, los cuales no hacían *match* con el modelo pydantic `RunReportRequest` del backend que espera explícitamente un listado `date_ranges`.
- **Solución:** Se actualizó el *payload* de la petición POST `/api/v1/mcp-analytics/run-report`. Ahora las fechas del estado `currentState.from` y `currentState.to` se estructuran correctamente dentro del atributo `date_ranges: [{ start_date, end_date }]`.

### 2. Corrección del Filtro de Segmentos en Adobe Analytics (Backend)
- **Archivo:** `backend/app/services/mcp_analytics/adobe_service.py`
- **Problema:** El método `list_segments` enviaba el query parameter `rsid` (en singular), por lo cual la API 2.0 de Adobe lo ignoraba y retornaba todos los segmentos sin el filtro del *Report Suite* específico de Sanitas.
- **Solución:** Se corrigió el nombre del parámetro a `rsids` de acuerdo a la documentación de la API 2.0 de Adobe Analytics.

## ✅ Verificación y Pruebas (Pre-Push)
- [x] Ejecución y análisis de diferencias con `git diff HEAD`.
- [x] Compilación exitosa del frontend (`npm run build`) en `dist/media-impact/`.
- [x] Compilación exitosa del backend (`python3 -m py_compile`) de los archivos modificados.
- [x] Protocolo y estándares de documentación actualizados en `GEMINI.md`.

## 📦 Plan de Despliegue
Tras el commit de estos archivos, se iniciará un pipeline en GitHub Actions para el despliegue automático hacia Google Cloud Run y Firebase Hosting.
