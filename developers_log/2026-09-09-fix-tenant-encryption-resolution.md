# Developers Log: 2026-09-09 — Corrección de Resolución de Cifrado y Restauración de Inquilinos

**Fecha:** 9 de Septiembre de 2026  
**Autor:** Antigravity / Equipo de Ingeniería de Inteligencia LLYC  
**Objetivo:** Restaurar la visibilidad de inquilinos en el panel de administración y el acceso multi-inquilino resolviendo la inicialización de claves de cifrado en Cloud Run.

---

## 1. Contexto y Diagnóstico del Incidente

Tras el despliegue de los controles de seguridad y cumplimiento normativo (SOC 2 / ISO 27001), se detectó que el panel de administración no mostraba la lista de inquilinos y que usuarios no corporativos eran rechazados en el servicio:

1. **Error HTTP 500 en `/api/v1/mcp-analytics/admin/tenants`:**
   - La clase `EncryptionUtil` lanzaba un `RuntimeError` en entornos con `K_SERVICE` (Cloud Run) al no encontrar `ENCRYPTION_KEY` o `SECRET_KEY` configuradas en las variables de entorno.
   - La inicialización de `TokenManager` instanciaba de forma ansiosa (`eager`) a `EncryptionUtil`, bloqueando consultas de solo lectura en Firestore (como listar inquilinos o validar listas blancas).
2. **Disparidad de Acceso:**
   - Los superadministradores con dominio `@llyc.global` o `@llyc.ai` saltaban la verificación de Firestore por el bypass de superadmin temprano en `auth_middleware.py`.
   - Los usuarios de clientes o con otros correos activaban el paso de validación en Firestore, disparando la inicialización de `TokenManager` y cayendo en el `RuntimeError` (HTTP 500).

---

## 2. Acciones y Cambios Técnicos

### A. Resolución Dinámica desde GCP Secret Manager
- **Archivo:** `backend/app/services/encryption_utils.py`
- Se agregó resolución automática para consultar GCP Secret Manager (`ENCRYPTION_KEY` y `SECRET_KEY`) cuando la aplicación corre en producción (`K_SERVICE` activo) y las variables de entorno no están presentes en el contenedor.
- Se crearon y versionaron los secretos criptográficos `SECRET_KEY` y `ENCRYPTION_KEY` en el proyecto activo de Google Cloud Secret Manager (`llyc-ai-first-core`).

### B. Inicialización Perezosa (Lazy) en Gestores de Autenticación
- **Archivo:** `backend/app/services/auth_utils.py`
- Se convirtió `self.enc_util` en una propiedad `@property` con carga perezosa (`lazy loading`) tanto en `TokenManager` como en `OAuthStateManager`.
- Las operaciones de consulta de Firestore (como obtener configuraciones o verificar acceso de inquilinos) ya no requieren ni disparan la inicialización del motor de cifrado a menos que se deba cifrar o descifrar un token.

### C. Configuración de CI/CD para Cloud Run
- **Archivo:** `.github/workflows/deploy.yml`
- Se configuró el montaje directo del secreto `ENCRYPTION_KEY=ENCRYPTION_KEY:latest` en la tarea de despliegue a Cloud Run.

---

## 3. Pruebas y Verificación

1. **Suite de Pruebas Automatizadas (Pytest):**
   - Se añadió la prueba unitaria `test_encryption_loads_from_secret_manager_in_production` en `backend/tests/test_compliance_security.py`.
   - Se ejecutó la suite completa del backend: **50/50 tests pasaron exitosamente (100%)**.
2. **Compilación:**
   - Frontend: `cd frontend && npm run build` compilado sin errores con Vite / TypeScript.
   - Backend: `python3 -m py_compile` ejecutado exitosamente en todos los módulos modificados.
3. **Verificación en Cloud Run:**
   - Servicio actualizado con la variable y secreto criptográfico.
   - Endpoint de salud (`/health`) respondiendo `200 OK`.
   - Endpoint `/media-impact/api/v1/mcp-analytics/admin/tenants` verificado: ya no arroja `500 Internal Server Error`, retornando `401 Unauthorized` ante peticiones anónimas como corresponde en el stack de seguridad.
