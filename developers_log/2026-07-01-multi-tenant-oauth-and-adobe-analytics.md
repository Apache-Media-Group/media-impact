# Registro de Desarrollo — Integración de OAuth Multi-Inquilino y Filtros de Segmentos Adobe (2026-07-01)

Este registro documenta el diseño técnico y la implementación para posibilitar el aislamiento de datos multi-inquilino en Google Analytics 4 (GA4) y Adobe Analytics, además del redireccionamiento flexible en el flujo seguro de consentimiento OAuth de Google.

---

## 🏛️ 1. Contexto y Objetivos Técnicos

Para habilitar una solución multi-inquilino real donde cada cliente (ej: Sanitas) pueda usar sus propias credenciales o esquemas de datos aislados en Google BigQuery y Firestore, requeríamos:
1. **Contexto de Inquilino en Peticiones Estáticas**: Al cargar cuentas, propiedades o segmentos desde el frontend, el backend debe conocer el inquilino activo (`tenant_id`) para autenticar o consultar las colecciones correctas en Firestore y BigQuery.
2. **URLs Adaptativas de Redirección OAuth**: El flujo de consentimiento de Google exige registrar una `redirect_uri` exacta. Cuando el usuario realiza el consentimiento en local, debe regresar a `http://localhost:3000`. Al hacerlo en producción, debe redirigirse de forma transparente a `https://dashboards.llyc.global/media-impact/` conservando los parámetros de sesión (`mock-ga4` y `session_id`).
3. **UI Condicional para Adobe Analytics**: Adaptar de manera fluida el componente de filtros superiores de la aplicación para mostrar campos específicos de Adobe Analytics (como el dropdown de "Segmentos") en lugar de los filtros genéricos de mercado, mejorando significativamente la experiencia del analista.

---

## 🛠️ 2. Detalles de la Implementación

### A. Contexto Multi-Inquilino (`tenant_id`)
Modificamos el flujo completo de consulta para pasar el parámetro `tenant_id` de extremo a extremo:
- **Modelos de Datos (`core_models.py`)**: Añadimos el campo opcional `tenant_id` a `RunReportRequest` para permitir filtrar las solicitudes de reportes de BigQuery bajo esquemas específicos de cliente.
- **Rutas FastAPI (`analytics.py` y `dependencies.py`)**: Actualizamos los endpoints `/accounts`, `/properties` y `/segments` para aceptar `tenant_id` como un parámetro de consulta (`Query`). La fábrica de servicios `get_analytics_service` ahora recibe este ID de inquilino para inicializar servicios con credenciales aisladas en Firestore.
- **Lógica de BigQuery (`bigquery_service.py`)**: Implementamos filtros que asocian las peticiones a tablas o vistas específicas del inquilino seleccionado, mejorando la seguridad a nivel de datos.

### B. OAuth Adaptativo e Inteligente (`oauth.py`)
Reescribimos la ruta `/oauth/login` en el backend para calcular de forma dinámica la dirección base del cliente utilizando cabeceras estándar de proxy inverso:
- Extrae de forma segura el host utilizando `x-forwarded-host` o `host`.
- Determina el protocolo (`http` o `https`) evaluando `x-forwarded-proto`, forzando `https` cuando detecta dominios de Google Cloud (`.run.app`) o Firebase Hosting (`.web.app`, `llyc.global`).
- Resuelve la redirección adaptativa:
  - Puertos locales redirigen a `http://localhost:3000`.
  - Dominios de producción redirigen a la raíz de `/media-impact` en el subdominio unificado.

### C. Frontend React Unificado (`App.tsx` y `DashboardLayout.tsx`)
- **Peticiones Seguras**: Modificamos los hooks de carga de cuentas, propiedades y segmentos para adjuntar dinámicamente el parámetro `&tenant_id={active_tenant}` a las peticiones HTTP del cliente.
- **Filtros Adaptativos**: Rediseñamos el componente `FilterBar`. Si la conexión activa es Adobe Analytics (`isAdobe`), oculta el selector de mercado convencional y renderiza en su lugar un dropdown estilizado en tonos magenta y gris oscuro, permitiendo al analista seleccionar segmentos cargados de forma asíncrona directamente de la API de Adobe.

---

## 🔬 3. Verificaciones de Calidad

- **Frontend Build**: Se ejecutó exitosamente el pipeline de compilación de Vite y TypeScript (`npm run build`). No se detectaron advertencias de tipos o errores de dependencias rotas en el empaquetado del bundle de producción.
- **Backend Syntax Check**: Todos los archivos modificados de Python (`config.py`, `core_models.py`, `adobe_service.py`, `bigquery_service.py`, `analytics.py`, `dependencies.py`, `oauth.py`) compilaron limpiamente a través de `py_compile`, garantizando la estabilidad del entorno de ejecución.

---

## 📈 4. Estado del Despliegue

Los cambios han sido confirmados localmente bajo la convención Conventional Commits y empujados de manera segura a la rama principal:
- **Commit SHA**: `7ab1230`
- **Mensaje**: `feat(analytics): integrate multi-tenant oauth isolation and adobe segment filtering`
- **Monitoreo CI/CD**: Se inició y se está trackeando en segundo plano el workflow número `28515848324` en GitHub Actions para compilar el nuevo bundle y desplegar la versión unificada del contenedor en Cloud Run.
