# Registro de Avances de Ingeniería (Developers Log)

**Fecha de Registro:** Jueves, 18 de Junio de 2026  
**Proyecto:** LLYC MCP Intelligence Dashboard  
**Entorno de Producción:** Google Cloud Platform (Cloud Run, Firebase Hosting, Firestore)  
**Autor:** Antigravity (AI Coding Assistant) & Santi

---

## 📋 Resumen del Sprint: API Unificada con TanStack React Query v5 y secureFetch

En este ciclo de desarrollo, se llevó a cabo una reestructuración profunda de la capa de comunicación cliente-servidor del frontend y de la gestión de estados asíncronos. Se implementó una solución robusta y unificada que sustituye todas las llamadas `fetch` directas por un cliente HTTP personalizado con soporte de inyección dinámica de Firebase Auth, gestionando el estado con **TanStack React Query v5** y solucionando bloqueos de seguridad de recursos externos (CORB).

---

## 🛠️ 1. Hitos Técnicos y Arquitectura Implementada

### A. Cliente HTTP Seguro Unificado (`secureFetch`)
Se implementó un cliente centralizado en [apiClient.ts](file:///Users/santiagorovira/media_impact/frontend/src/services/apiClient.ts) que actúa como la única puerta de enlace de red para la aplicación analítica.
* **Resolución Dinámica:** Resuelve automáticamente las URLs relativas del frontend hacia la API local de desarrollo (`http://localhost:8080`) o la API de producción en GCP de forma transparente.
* **Inyección de Cabeceras:** Detecta cargas útiles de tipo JSON para inyectar automáticamente la cabecera `Content-Type: application/json`.
* **Seguridad Reactiva:** Extrae dinámicamente y de forma confiable el token JWT activo del usuario desde el SDK de Firebase Auth (`auth.currentUser.getIdToken()`), inyectándolo en la cabecera `Authorization: Bearer <JWT>` únicamente en peticiones autenticadas.

### B. Gestión del Estado Global con TanStack React Query v5
Para erradicar variables de estado dispersas, manejadores de recarga manuales y efectos colaterales de `useEffect`:
* **Query Provider Central:** Se configuró el `<QueryClientProvider>` envolviendo la aplicación en [main.tsx](file:///Users/santiagorovira/media_impact/frontend/src/main.tsx).
* **Migración de Servicios:** Se refactorizaron por completo los componentes críticos (`App.tsx`, `WelcomeScreen.tsx`, `AdminPanel.tsx`, `AuditModal.tsx`, `CredentialModal.tsx`, `EtlMonitorTab.tsx`, `TenantModal.tsx` y el hook `useAnalytics.ts`), migrando toda la interacción asíncrona a consultas (`useQuery`) y mutaciones organizadas.

### C. Polling Inteligente de Despliegue ETL
Anteriormente, el panel realizaba un polling constante utilizando `setInterval` en React, lo que generaba fugas de memoria y peticiones innecesarias.
* **Refactorización Eficiente:** Aprovechando las capacidades reactivas de React Query, implementamos un parámetro dinámico en `refetchInterval` en [AdminPanel.tsx](file:///Users/santiagorovira/media_impact/frontend/src/components/AdminPanel.tsx).
* **Apagado Dinámico:** El panel consulta el estado de los tenants cada **4 segundos** en segundo plano *únicamente* si detecta al menos un cliente en estado `'deploying'`. En cuanto el estado de todos los despliegues se resuelve a `'success'` o `'failed'`, el polling se desactiva de forma automática en caliente, reduciendo drásticamente la carga sobre los servicios de Cloud Run.

### D. Resolución de Bloqueo de Consola por Directivas CORB
Las auditorías en caliente con el navegador de pruebas identificaron un error de Chrome debido a políticas de seguridad en la carga de logotipos externos:
`net::ERR_BLOCKED_BY_ORB on https://upload.wikimedia.org/wikipedia/commons/e/e5/LLYC_logo.svg`
* **SVG Vectorial Integrado:** Se diseñó un logotipo SVG local optimizado de alta fidelidad para LLYC Intelligence en [logo_llyc.svg](file:///Users/santiagorovira/media_impact/frontend/public/logo_llyc.svg).
* **Normalización de Base de Datos:** Se ajustó el valor por defecto tanto en el estado de inicio del frontend (`App.tsx`) como en el fallback de base de datos del backend (`tenant.py`) para consumir la ruta estática segura de origen común `/logo_llyc.svg`.

### E. Verificación Automatizada del Flujo de Administración
Se ejecutó un protocolo de inspección y test de interfaz completo a través del subagente `browser` en producción, validando con éxito:
1. **Acceso superadmin:** Autenticación por Google OAuth con cuenta `@llyc.global`.
2. **Impersonación ("Ver Dashboard"):** Carga impecable de variables de CSS de marca personalizada, banners de vista previa y restauración fluida del panel al salir del modo impersonación.
3. **Consola limpia:** Erradicación total de errores o advertencias de bloqueo de recursos de origen cruzado en DevTools.

---

## 🚀 2. Estado de Despliegue y CI/CD
El protocolo mandatorio de confirmación de cambios (`GEMINI.md`) fue cumplido al 100%:
1. **Compilación local frontend:** Éxito absoluto mediante `npm run build`.
2. **Compilación local backend:** Saneamiento de sintaxis de Python validada con `py_compile`.
3. **Control de Versiones:** Commit convencional local y subida autorizada explícitamente por el usuario.
4. **Pipeline en Producción:** Monitoreado a través de GitHub CLI (`gh run watch`). Despliegue en GCP Cloud Run y Firebase Hosting completado y activo en la rama principal `main`.

---

**Santi**  
AdTech & Analytics Senior Consultant — LLYC
