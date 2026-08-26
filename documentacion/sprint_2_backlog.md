# Sprint 2 Backlog: Technical Debt & Security Improvements

Este documento contiene el backlog de tareas identificadas tras la revisión técnica (MVP) para ser abordadas en el Sprint 2, agrupadas por área de impacto.

## 🔴 Seguridad y Autenticación

- [ ] **1. Vulnerabilidad Crítica de Criptografía (Placeholder Base64)**: Refactorizar `encryption_utils.py` para usar Google Cloud KMS o Tink en lugar del placeholder Base64 actual para almacenar tokens de OAuth y secretos en producción.
- [ ] **2. Lista Hardcodeada de Secretos Ciegos (`SENSITIVE_TOKEN_KEYS`)**: Modificar `TokenManager` para que no dependa de una lista estática de claves a encriptar, previniendo la exposición de tokens si se integran nuevos proveedores con nombres de tokens diferentes.
- [ ] **3. Riesgo por Bypass de Autenticación**: Evaluar y restringir la lógica de bypass temporal (`BYPASS_AUTH_LOCAL`) en `auth_middleware.py` para asegurar que bajo ninguna circunstancia de error de despliegue se active en producción.
- [ ] **4. Exposición a Inyección de Cabecera Host**: Refactorizar la función `get_effective_redirect_uri` (en `auth_utils.py`) para no reconstruir las URLs de OAuth confiando ciegamente en `x-forwarded-host`, mitigando el riesgo de Host Header Injection.
- [ ] **5. Configuración CORS Demasiado Permisiva**: Ajustar CORS en `main.py` aplicando el principio de menor privilegio, restringiendo `allow_methods` y `allow_headers` a los estrictamente necesarios en lugar de permitir todo (`["*"]`).
- [ ] **6. Ausencia de Rate Limiting**: Implementar un limitador de tasa (Rate Limiting) en los endpoints de FastAPI, especialmente en los analíticos y de login, para mitigar ataques de fuerza bruta y control de facturación en GCP.

## 🟠 Arquitectura y Estructura de Código (Deuda Técnica)

- [ ] **7. Componente Frontend Monolítico (God Component)**: Refactorizar `App.tsx` (actualmente de ~60 KB y >1,200 líneas) separando la lógica de enrutamiento, autenticación, paneles de cliente y administrador en componentes más pequeños y mantenibles.
- [ ] **8. Servicios Backend Masivos (God Objects)**: Desacoplar y modularizar los archivos del core analítico como `adobe_service.py`, `etl_service.py` y `bigquery_service.py` en sub-módulos más granulares.
- [ ] **9. Detección Frágil del "Tenant" en Frontend**: Robustecer la función `getTenantFromUrl` en el frontend, que actualmente depende de búsquedas manuales frágiles (subdominios, query params, splits de URL).
- [ ] **10. Servidor de Assets Estáticos Ineficiente**: Delegar el servicio del `index.html` y assets de la SPA desde FastAPI (`main.py`) a una infraestructura especializada (Nginx, Cloud CDN o Firebase Hosting).
- [ ] **11. Ruteo API Duplicado**: Limpiar la inyección duplicada del router principal `mcp_router` en el backend (actualmente bajo `/api/v1/...` y `/media-impact/api/v1/...`) para no duplicar la superficie de mantenimiento.
- [ ] **12. Deficiente Manejo del Error 404 para SPAs**: Mejorar el manejo de errores 404 en el catchall del backend para evitar servir HTML en peticiones fallidas que apunten a `/media-impact/api/...`.

## 🟡 Calidad, Pydantic y Testing

- [ ] **13. Ausencia Total de Unit Testing en Frontend**: Configurar un framework de pruebas (`Vitest`, `Jest`, `RTL`) en el repositorio `frontend` y comenzar a añadir tests unitarios y de componentes.
- [ ] **14. Desorden de Scripts en el Root del Backend**: Mover y organizar los scripts de pruebas o backfills sueltos (`test_flow.py`, `check_firestore.py`, `trigger_etl.py`, etc.) dentro de una carpeta específica (`/tests` o `/scripts`).
- [ ] **15. Infrautilización de Modelos Pydantic**: Refactorizar la validación de inputs/outputs en el backend reemplazando validaciones manuales (if/else, dicts) por esquemas estrictos de Pydantic.
- [ ] **16. Falta de Inyección de Dependencias (DI)**: Refactorizar los servicios del backend para utilizar inyección de dependencias (`Depends()` de FastAPI) en la inicialización de clientes (ej. GCP), facilitando el testing y el mocking.
- [ ] **17. Gestor de Estado FrontEnd Infrautilizado**: Refactorizar la gestión de estado en el frontend para aprovechar plenamente `@tanstack/react-query` y reducir la dependencia de Contexts complejos y prop-drilling.

## 🟢 Estandarización y Operaciones (DevOps)

- [ ] **18. Ausencia de Git Hooks (Pre-commit)**: Configurar e integrar herramientas como `husky` y `lint-staged` para ejecutar validaciones locales (como `tsc` o formateo) antes de cada commit.
- [ ] **19. Gestión Contaminante de Logs Locales**: Configurar el archivo `.gitignore` para ignorar archivos `.log` sueltos y organizar la salida de logs en el entorno local (hacia stdout o carpeta `/logs`).
- [ ] **20. Dispersión de Variables de Entorno (.env)**: Consolidar y estructurar la gestión de los archivos `.env` dispersos para evitar riesgos de deriva configuracional y asimetrías.
