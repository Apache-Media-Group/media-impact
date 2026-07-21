# LLYC Intelligence Dashboard - Developer Log
**Fecha:** 2026-07-21
**Tema:** Corrección de ingesta ETL de Peec.ai y Refactorización del UI de Gestión de Credenciales

## 1. Contexto y Problema
El sistema presentaba dos problemas principales:
1. **Datos en 0 en la ETL de Peec.ai:** Al lanzar el proceso de extracción para el tenant `vidal-vidal`, la ingesta retornaba `success (0 filas)` en métricas vitales como tráfico referido e inferido. 
2. **Deficiencias en CredentialModal:** La experiencia de usuario para añadir o editar llaves permitía re-insertar múltiples llaves para la misma plataforma, no había forma de borrarlas, ni de simplemente renovarlas.

## 2. Investigación
Tras examinar la documentación actualizada de Peec.ai (descargada exhaustivamente en `documentacion/peec_ai_api_docs.md`), se descubrió que:
- El endpoint que se estaba consultando (`reports/domains`) no entrega la volumetría real de la marca (`ai_inferred`, `ai_referred`), sino una comparativa global de dominios.
- Los campos esperados (`ai_referred`, `ai_inferred`) ya no existen como tal en la respuesta de la API. Ahora se manejan mediante `mention_count` y `visibility_count`.
- No se estaban propagando los rangos de fechas (start_date, end_date) a las consultas secundarias de dominios y tópicos.

## 3. Resoluciones Aplicadas (Git Diff Overview)

### Backend
1. **`backend/app/services/mcp_analytics/peec_service.py`**
   - **`run_report`**: Cambiado el endpoint hacia `reports/brands`. Ahora se consulta `start_date` y `end_date` usando formato dinámico extraído de la solicitud.
   - Se añadió un paso previo de consulta a `/projects` para extraer dinámicamente el nombre real de la marca y poder filtrar la respuesta del endpoint `brands`.
   - **Mapeo de Métricas:** Refactorizados los mapeos: 
     - `ai_referred` ➔ `mention_count`
     - `ai_inferred` ➔ `visibility_count`
     - `sentiment_score` ➔ `sentiment`
   - **`fetch_domains` y `fetch_topics`**: Se añadieron los parámetros opcionales `start_date` y `end_date` a sus payloads para asegurar la precisión temporal en la ingesta paralela.

2. **`backend/app/services/mcp_analytics/etl_service.py`**
   - Ajustadas las llamadas asíncronas a `fetch_domains` y `fetch_topics` dentro de la etapa de extracción de Peec.ai para propagar `date_from` y `date_to`.

3. **`backend/app/services/mcp_analytics/secret_manager_service.py`**
   - Creado el nuevo método `delete_tenant_secret` para eliminar de forma segura el registro de credencial tanto de GCP Secret Manager (haciéndole "destroy") como de la base de datos de Firestore.

4. **`backend/app/services/mcp_analytics/routes/admin_etl.py`**
   - Añadido un nuevo endpoint HTTP DELETE `/api/v1/mcp-analytics/admin/tenants/{tenant_id}/secrets/{secret_type}` que invoca `delete_tenant_secret`.

### Frontend
5. **`frontend/src/components/admin/CredentialModal.tsx`**
   - **Candados de Unicidad**: Alterada la lógica del dropdown de selección de llaves para ocultar las opciones (GA4, Peec, Adobe, Brandlight) si la plataforma ya cuenta con un secreto registrado en el tenant.
   - **Flujo de Renovación y Borrado**: En el modo de "Editar Credenciales", se implementaron los botones "Borrar Llave" (llama al nuevo endpoint DELETE) y "Renovar Llave" (desbloquea el formulario para sobreescribir la llave).

## 4. Pruebas de Calidad (Pre-Push Protocol)
- **Frontend Compilación:** Exitosa (`npm run build`). No hay errores en TypeScript.
- **Backend Compilación:** Exitosa (`python3 -m py_compile`). Sintaxis correcta en todos los archivos tocados.
- **Flujo de Trabajo CI/CD:** Listo para su fase de Commit local.
