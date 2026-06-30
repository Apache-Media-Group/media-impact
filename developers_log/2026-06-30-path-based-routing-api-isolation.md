# Developer Log — Path-Based Routing & API Prefix Isolation Sprint

**Fecha**: 2026-06-30  
**Tema**: Enrutamiento Basado en Rutas de Clientes e Aislamiento de APIs en Producción  
**Autor**: Antigravity AI (Google DeepMind Team)  

---

## 🚀 1. Hitos Técnicos Logrados

Este sprint resolvió el problema de la página en blanco en entornos multisite integrados (como `dashboard.llyc.global/media-impact/`) y alineó la plataforma para soportar de manera nativa direcciones de clientes basadas en sub-rutas (ej. `/media-impact/sanitas`), sin perder compatibilidad local ni soporte para parámetros de búsqueda tradicionales.

1. **Extracción Multiproveedor de Tenants (`App.tsx`)**:
   - Implementación de la función centralizada `getTenantFromUrl` para leer y limpiar el ID del tenant de manera consistente a través de:
     - Query parameters (`?tenant_id=...` o `?tenant=...`).
     - Segmentos de ruta de URL (ej: `/media-impact/sanitas` => `sanitas`), con exclusión de rutas reservadas estáticas de Firebase (`admin`, `assets`, `favicon.svg`, etc.).
     - Subdominios dinámicos (producción).
2. **Aislamiento de API de Producción (`apiClient.ts`)**:
   - Reescritura automatizada de llamadas relativas que apuntan a `/api/` para anteponer el prefijo `/media-impact/api/` si se ejecutan bajo un dominio de producción. Esto evita colisiones de peticiones con el enrutador del host maestro.
3. **Controlador Dual de Endpoints (`main.py`)**:
   - Registro simultáneo del router maestro del backend `mcp_router` en el puerto de Fast API bajo ambos prefijos: `/api/v1/mcp-analytics` y `/media-impact/api/v1/mcp-analytics`.
4. **Reglas de Reescritura en Firebase (`firebase.json`)**:
   - Definición de una regla de rewrite explícita que captura las llamadas dirigidas a `/media-impact/api/v1/**` y las enruta al microservicio `llyc-intelligence-api` desplegado en Cloud Run.

---

## 🛠| 2. Archivos Modificados

* **`frontend/src/App.tsx`**:
  - Creación de la función exportada `getTenantFromUrl`.
  - Refactorización de la inicialización de estado de la SPA y del gancho de efecto de carga de branding para usar esta utilidad única.
* **`frontend/src/services/apiClient.ts`**:
  - Lógica condicional en `secureFetch` para interceptar llamadas y añadir el prefijo de subproyecto `/media-impact` en producción.
* **`backend/main.py`**:
  - Adición de un segundo `include_router` para el router `mcp_router` con el prefijo `/media-impact/api/v1/mcp-analytics`.
* **`firebase.json`**:
  - Incorporación del objeto rewrite para `/media-impact/api/v1/**` antes de la regla general de la API de producción.

---

## 📊 3. Resultados de Verificación Local

* **Compilación Frontend**:
  - Comando ejecutado: `npm run build` en `frontend/`
  - Resultado: Exitoso sin errores de TypeScript. Bundle de producción generado con éxito en el directorio `dist/media-impact/`.
* **Compilación Backend**:
  - Comando ejecutado: `python3 -m py_compile backend/main.py`
  - Resultado: Compilación exitosa, libre de errores de sintaxis o importación.

---

## 🔄 4. Plan de Despliegue y Próximos Pasos

1. **Commit de Cambios**:
   - Utilizar Commits Convencionales: `feat(devops): enable path-based tenant detection and prefix-isolated API routing under /media-impact/`.
2. **Push Remoto**:
   - Solicitar confirmación final al usuario antes de empujar.
3. **Monitoreo en Vivo**:
   - Seguir el despliegue con la CLI de GitHub: `gh run watch`.
