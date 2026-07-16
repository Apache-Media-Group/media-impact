# Developer Log: Fix 404 Error on Tenant Logo Upload & GCS Image Visibility

**Fecha:** 2026-07-16
**Autor:** Antigravity (LLYC Intelligence Dashboard)
**Tema:** Resolución de error 404 al crear tenant con logo y error 403 (imagen rota) en el frontend.

## 1. Descripción del Problema
Durante la creación de un *Nuevo Cliente* en el panel de administración, si el usuario adjuntaba y subía un logotipo antes de haber guardado el perfil por primera vez, el sistema arrojaba un error `404 Not Found`.

Adicionalmente, se detectó que aunque los logotipos de los clientes existentes y los nuevos se subían de manera exitosa al bucket de Google Cloud Storage (`llyc-mcp-public-assets`), estos no se visualizaban en la tabla de clientes del administrador (apareciendo con el ícono de imagen rota). Al inspeccionar las peticiones, se comprobó que GCS devolvía un error HTTP `403 Forbidden`.

## 2. Causas Raíz
*   **Error 404:** El endpoint `POST /admin/tenants/{tenant_id}/logo` de FastAPI estaba programado para actualizar el campo `logo_url` utilizando el método `.update()` de Firestore. Dado que durante la fase inicial de "Crear Nuevo Cliente" el documento del tenant aún no existe en la base de datos, Firestore retornaba un error ya que `update()` requiere que el documento exista previamente.
*   **Error 403 (Imágenes Rotas):** Por defecto, los objetos subidos al bucket de Google Cloud Storage se crean con permisos privados. La interfaz frontend requería renderizar la imagen directamente vía un tag `<img src="...">`, lo que resultaba en accesos denegados porque los blobs carecían del permiso público de lectura.

## 3. Soluciones Implementadas

### A. Modificación de la Operación en Firestore
Se modificó el endpoint de subida en `backend/app/services/mcp_analytics/routes/admin_etl.py`:
- Se reemplazó el método `update({"logo_url": public_url})` por `set({"logo_url": public_url}, merge=True)`.
- **Efecto:** Si el documento del tenant no existe, se crea con el atributo `logo_url`. Posteriormente, cuando se hace clic en "Guardar Marca", los demás datos de configuración se fusionan de manera limpia sobre el documento recién creado gracias al `merge=True`.

### B. Aplicación de Permisos de Visibilidad en GCS
Se modificó el servicio `GCSService` en `backend/app/services/mcp_analytics/gcs_service.py`:
- Se añadió la instrucción `blob.make_public()` tras la finalización de `upload_from_string`.
- Se estructuró dentro de un bloque `try-except` para evitar bloqueos del flujo en caso de que el bucket de producción tenga habilitado estrictamente el *Uniform Bucket-Level Access*.
- **Efecto:** Cada nuevo archivo subido adquiere inmediatamente visibilidad pública, permitiendo su renderización correcta vía URL CDN en el frontend.

### C. Remediación del Histórico
- Se ejecutó un script de parchado programático a través del entorno virtual (`venv`) que iteró sobre los logotipos existentes en el prefijo `logos/` del bucket en producción y les aplicó el método `.make_public()`. Los logotipos de `sanitas`, `test` y `vidal-vidal` ahora son plenamente funcionales sin necesidad de subirlos de nuevo.

## 4. Verificaciones Realizadas (Pre-Push Protocol)
1.  **Frontend Build:** `npm run build` en el frontend compiló con éxito (Vite v8.0.16).
2.  **Backend Build:** `python3 -m py_compile` validó la correcta sintaxis de las rutas y servicios alterados de Python.
3.  **Visual:** El error 404 ha desaparecido al crear nuevos clientes. Las imágenes ahora cargan exitosamente con código `HTTP 200` en la tabla de resumen del Tenant.
