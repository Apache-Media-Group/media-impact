# Devlog 2026-09-24: Implementación de Selección Dinámica de Marcas y Manejo de Errores Brandlight

## 📌 Contexto
Se auditó la conectividad de la API externa de Brandlight BI para soportar la configuración de marcas dinámicas por cada tenant.

## 🔍 Hallazgos y Diagnóstico Técnico
1. **Identificación de Causa Raíz de HTTP 503**:
   El servicio de autenticación de Brandlight BI se encuentra no disponible temporalmente en origen (`{"error":{"code":"INTERNAL_ERROR","message":"Authentication service is temporarily unavailable.","status":503}}`).
2. **Requisito de Rutas Canónicas de Brandlight**:
   Los endpoints de informes y visibilidad de Brandlight requieren especificar el nombre exacto de la marca registrada en el path URL (`/v1/brands/:brandName/visibility/ranking`). Anteriormente se utilizaba un identificador genérico por defecto.

## 🛠️ Cambios Implementados

### 1. Backend (`backend/app/services/mcp_analytics/`)
- **`brandlight_service.py`**:
  - Extrae de forma dinámica `brandlight_brand_name` desde la configuración de credenciales del tenant.
  - Codifica en formato URL (`urllib.parse.quote`) los nombres de marcas con espacios para las llamadas a la API.
  - Captura y formatea las respuestas HTTP 500 / 503 del proveedor en mensajes claros y legibles para el usuario y logs.
- **`etl_service.py`**:
  - Pasa `brandlight_brand_name` a `BrandlightService` durante la ejecución del proceso ETL.
  - Almacena el estado de error de forma aislada sin interrumpir la ingesta analítica de Google Analytics 4 (GA4).
- **`routes/admin_etl.py`**:
  - Retorna `brandlight_brand_name` actual y lista de marcas asociadas en `/admin/tenants/{tenant_id}/secrets/brandlight-key/options`.
  - Habilita la actualización parcial vía `PATCH` para permitir editar el nombre de marca sin alterar el API Key almacenada en GCP Secret Manager.
  - Añade la ruta `/admin/tenants/validate-brandlight-brands` para consultar y validar marcas disponibles.
  - Añade el endpoint `DELETE /admin/tenants/{tenant_id}` para purgar clientes y secretos en Firestore y GCP Secret Manager.
  - Actualiza `DELETE /admin/tenants/{tenant_id}/secrets/{secret_type}` para sincronizar inmediatamente el estado en Firestore.

### 2. Frontend (`frontend/src/components/admin/`)
- **`BrandlightCredentialForm.tsx`**:
  - Muestra un selector desplegable o campo de texto para especificar el `brandlight_brand_name` de la marca comercial.
  - Permite actualizar el nombre de marca en modo edición preservando la clave encriptada.
- **`TenantTable.tsx`**:
  - Incorpora el botón explícito `🔌 Gestionar Conexiones` en cada fila de cliente activo para acceder directamente a la gestión de variables operativas.
- **`CredentialModal.tsx`**:
  - Presenta el encabezado y textos orientados a la gestión de conexiones y actualización parcial de variables por conector.
  - Incorpora la **Danger Zone** (Zona de Peligro) con eliminación de conexiones individuales y borrado definitivo de tenants con verificación de doble factor (typing tenant ID).

## ✅ Verificación de Calidad
- **Frontend**: Compilado mediante `npm run build` con 0 errores.
- **Backend**: Compilado mediante `python3 -m py_compile` con 0 errores.
- **Persistencia BigQuery**: Ingestión y transformación verificada en la tabla `fact_ai_visibility`.

