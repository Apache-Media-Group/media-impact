# LLYC Intelligence Dashboard — Brandlight BI & Multi-Tenant Roadmap

Este documento detalla los objetivos, arquitectura, fases de implementación y preguntas estratégicas para integrar la API de **Brandlight BI** como un proveedor de datos de primer nivel dentro de nuestro ecosistema analítico, alineado con las especificaciones del Product Owner para una **infraestructura multi-tenant escalable y altamente segura**.

---

## 🎯 Objetivo del Proyecto

El objetivo principal es enriquecer el **LLYC Intelligence Dashboard** incorporando métricas avanzadas de **visibilidad orgánica, Share of Voice (SoV) y recomendaciones de contenido basadas en IA** provistas por la plataforma **Brandlight**. 

Al integrar Brandlight, el dashboard de LLYC ofrecerá a los consultores y clientes un panorama holístico:
1. **Tráfico y Conversión (GA4 / Adobe Analytics)**: Cuántos usuarios entran y cómo se comportan.
2. **Análisis de Comportamiento de IA (Peec.ai)**: Interacción de los usuarios con agentes de IA.
3. **Visibilidad y Recomendaciones de Contenido (Brandlight)**: Posicionamiento frente a la competencia en motores de respuesta de IA y sugerencias de creación de contenido.

Como **servicio consultor multi-tenant**, cada cliente de LLYC accederá a su propio espacio personalizado y seguro mediante un subdominio único, administrado con un sistema centralizado de superadministración.

---

## 🏛️ Arquitectura Corporativa y de Seguridad (Multi-Tenant)

De acuerdo con las especificaciones del Product Owner, la arquitectura general del sistema se diseñará bajo los siguientes estándares de seguridad y multi-tenancy:

### 1. Gestión de Subdominios y Personalización (Tenant Detection)
* **Subdominios dedicados por cliente** (ej. `clienteA.analytics.llyc.ai`, `clienteB.analytics.llyc.ai`).
* El DNS es gestionado mediante **Firebase**, garantizando propagación rápida y certificados SSL automatizados.
* El Frontend SPA detecta dinámicamente el subdominio (`window.location.hostname`) para determinar el identificador del cliente (`tenant_id`), aplicando de forma dinámica:
  * Logotipo corporativo del cliente.
  * Paleta de colores primarios y secundarios.
  * Fuentes y estilos tipográficos.
  * Filtrado estricto de llamadas al backend restringidas a sus conexiones autorizadas.

### 2. Autenticación Centralizada (Firebase Auth)
* Registro, inicio de sesión y gestión de sesiones delegados en **Firebase Auth**.
* El frontend captura el token JWT (JSON Web Token) y lo envía en la cabecera `Authorization: Bearer <JWT>` de todas las peticiones al backend.
* El backend FastAPI valida la firma del JWT, extrae los claims del usuario (ID, email, tenant asignado, rol) y valida que el usuario pertenezca al subdominio desde el cual se está consultando.

### 3. Almacenamiento Seguro de Credenciales (GCP Secret Manager)
* Las claves privadas, API keys de Brandlight/Peec.ai, y tokens de OAuth de GA4/Adobe son **activos de alta sensibilidad**.
* Para garantizar el cumplimiento normativo de ciberseguridad corporativa, estas credenciales **nunca se guardarán en bases de datos relacionales estándar en texto plano**.
* Se guardarán encriptadas en **GCP Secret Manager** con nombres estructurados jerárquicamente:
  `projects/<gcp-project>/secrets/llyc-mcp-<tenant_id>-<platform>-creds`
* El backend se conectará de manera directa al Secret Manager de GCP utilizando roles mínimos de IAM asociados a su cuenta de servicio de Google Cloud Function / Cloud Run.

### 4. Perfiles de Acceso (Self-Service vs. Superadmin)
* **Cliente / Self-Service**: Cada cliente puede dar de alta y actualizar sus propias credenciales de GA4, Adobe, Brandlight y Peec.ai de forma autónoma en una sección dedicada de configuración en su portal.
* **Superadmin (LLYC)**: Vista global exclusiva para consultores de LLYC que les permite:
  * Ver el estado de salud de todas las conexiones activas de todos los inquilinos.
  * Depurar errores de API o llamadas fallidas.
  * Gestionar y aprovisionar nuevos clientes (creando nuevos tenants, asignando subdominios y guardando sus secretos iniciales en GCP).

---

## 🏗️ Arquitectura de la Integración de Brandlight

Para mantener el diseño simétrico del backend FastAPI, adaptaremos la API de Brandlight al patrón de abstracción unificado (`AnalyticsService`).

### 1. Mapeo de Conceptos

| Concepto de Abstracción | Equivalente en Brandlight | Endpoint de la API | Descripción |
| :--- | :--- | :--- | :--- |
| **Cuenta (Account)** | **Marca (Brand)** | `GET /v1/brands` | Cada marca configurada en la cuenta de Brandlight (ej. "Acme Corp"). |
| **Propiedad (Property)** | **Localización (Location)** | `GET /v1/brands/:brand/reports` | Las regiones geográficas soportadas en los reportes (ej. `US`, `GB`, `global`). |
| **Rango de Fechas** | **Rango de Reportes** | Filtro de consulta | Rango de tiempo para consolidar las métricas de visibilidad y SoV. |

### 2. Estructura de Clases en el Backend

Crearemos la clase `BrandlightService` en `backend/app/services/mcp_analytics/brandlight_service.py` heredando de `AnalyticsService` e implementando:

* `list_accounts() -> List[GAAccount]`
* `list_properties(account_id) -> List[GAProperty]`
* `run_report(request: RunReportRequest) -> RunReportResponse`
  * Mapeará consultas de métricas de visibilidad (`visibilityScore`) o cuota de voz (`shareOfVoice`) a formato tabular estructurado.
* `get_metadata(property_id) -> Dict[str, Any]`

---

## 📅 Fases de Implementación (MVP Roadmap)

### Fase 1: Backend Core, GCP Secret Manager & CI/CD Setup
* Configurar workflows de **GitHub Actions** (`.github/workflows/deploy.yml`) para automatizar el build y deployment en GCP de los servicios de frontend y backend como funciones/run-services separadas.
* Crear las bases para la comunicación del backend con **GCP Secret Manager** para obtener y guardar secretos cifrados.
* Implementar `BrandlightService` en Python heredando de `AnalyticsService` con rate limit de seguridad (`time.sleep(1.5)`).
* Implementar tests unitarios robustos con mocks para asegurar estabilidad del servicio.

### Fase 2: Configuración Multitenant en Frontend & Backend
* **Frontend Subdomain Router**: Configurar detección de subdominios en React y carga dinámica de assets del inquilino (branding, logo).
* **Firebase Auth Integration**: Implementar verificación de tokens JWT en el middleware del backend FastAPI (`backend/app/services/auth_middleware.py`).
* **Self-Service Connection UI**: Diseñar la sección de configuración para que el cliente introduzca de forma segura sus credenciales de GA4, Adobe, Brandlight y Peec.ai.
* **Superadmin View**: Diseñar el panel general de LLYC para gestionar los inquilinos.

### Fase 3: Endpoints de Negocio y KPIs de Brandlight
* Implementar mapeos de KPIs para el dashboard a partir de los reportes periódicos de Brandlight.
* Crear endpoints FastAPI dedicados para recomendaciones:
  * `GET /api/v1/mcp-analytics/brandlight/new-content-opportunities`
  * `GET /api/v1/mcp-analytics/brandlight/my-content-recommendations`

### Fase 4: Integración UI, Pruebas y QA
* Conectar las llamadas de `useAnalytics.ts` para renderizar datos dinámicos de Brandlight.
* Pintar comparativas de marcas y competidores de visibilidad en el gráfico de línea.
* Llenar el widget de Share of Voice (SoV) de tipo dona con competidores reales.
* Validar el flujo extremo a extremo en local y entornos staging en GCP.

---

## 🗣️ Preguntas para Discusión (Back-and-Forth)

En base a los requerimientos corporativos del Product Owner, ampliamos la discusión a los siguientes puntos clave:

### ❓ Pregunta 1: Arquitectura de Secretos e Inscripción de Clientes
Dado que el cliente podrá añadir sus API keys (GA4, Adobe, Brandlight, Peec.ai) de forma autoservicio:
* *¿Queremos que el backend escriba de forma directa las API keys añadidas por el cliente en el GCP Secret Manager en caliente, o el backend notificará al Superadmin para que apruebe y cree la conexión tras verificar la validez de las credenciales?*

### ❓ Pregunta 2: Gestión de Sesión e Inquilinos (Tenants) en el JWT
Para asegurar que el tráfico de un subdominio no pueda acceder a datos de otro:
* *¿Cómo se mapeará la asignación de inquilinos? ¿Manejaremos claims personalizados en el JWT de Firebase (ej. `customClaims.tenantId`) para que el backend valide el acceso de forma inmediata sin consultar la base de datos en cada petición, o haremos una validación en tiempo real contra una base de datos de inquilinos?*

### ❓ Pregunta 3: Diseño de la Comparativa de Competidores en la UI
Para el gráfico de líneas del Share of Voice o Visibilidad frente a competidores devuelto por Brandlight:
* *¿Deberíamos permitir al cliente seleccionar dinámicamente qué competidores (de la lista retornada por Brandlight) desea visualizar en el gráfico, o mostramos por defecto los 3 competidores principales basándonos en su puntuación media?*

### ❓ Pregunta 4: Visualización de Recomendaciones en la UI
Brandlight provee sugerencias detalladas estructuradas con estrategias e instrucciones.
* *¿Cómo imaginas la experiencia de usuario para leer estas sugerencias? ¿Un modal desplegable en cada fila de tópicos recomendados, o una pestaña dedicada de "Plan de Contenidos IA" en el Dashboard?*
