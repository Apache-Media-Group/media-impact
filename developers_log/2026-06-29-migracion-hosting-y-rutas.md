# Bitácora de Desarrollo — 2026-06-29 — Migración a llyc-ai-first-core y Enrutamiento /media-impact/

## 🎯 Objetivo y Contexto del Sprint
El objetivo principal de este desarrollo ha sido la alineación de la infraestructura del frontend y del backend con los nuevos estándares acordados por el equipo para el dominio unificado `dashboard.llyc.global`. 
Esto ha implicado migrar el sitio de Firebase Hosting del proyecto de pruebas (`llyc-intelligence-mcp`) al proyecto corporativo consolidado (`llyc-ai-first-core`), y dar soporte técnico para que la SPA se renderice y cargue sus recursos correctamente desde la sub-ruta `/media-impact/`, procesando de manera retrocompatible el parámetro `tenant_id` de la URL.

---

## 🛠️ Hitos Técnicos Logrados

### 1. Creación de Sitio Hosting Independiente
- Conectados mediante gcloud CLI, verificamos el proyecto `llyc-ai-first-core`.
- Creamos con éxito el nuevo Site ID de Firebase Hosting: **`llyc-media-impact`**. Esto permite una arquitectura Multisite bajo el mismo dominio de producción compartiendo balanceador de carga.

### 2. Configuración y Ruteo de Ruta Base `/media-impact/`
- **Vite Config (`frontend/vite.config.ts`)**: Se añadió `base: '/media-impact/'` a la configuración de Vite, de forma que el proceso de construcción de producción inyecte de manera absoluta el path de la sub-ruta a todos los imports y referencias de recursos (`/media-impact/assets/...`, `/media-impact/favicon.svg`).
- **React SPA (`frontend/src/App.tsx`)**: Se corrigió el valor por defecto de `logo_url` para que use `${import.meta.env.BASE_URL}logo_llyc.svg` en lugar de la ruta absoluta del dominio `/logo_llyc.svg`, previniendo que intente resolverse contra el hub selector raíz de Sergio Alonso.

### 3. Lectura de Parámetro `tenant_id` de URL Retrocompatible
- **React SPA (`frontend/src/App.tsx`)**: Se actualizó la lógica de detección de marca para comprobar prioritariamente el nuevo parámetro unificado de URL `tenant_id` acordado con Casillas, manteniendo de forma segura y transparente el fallback hacia el parámetro previo `tenant`:
  ```typescript
  const tenantParam = urlParams.get('tenant_id') || urlParams.get('tenant');
  ```

### 4. Soporte y Fallback del Backend
- **Configuración del Programador de Tareas (`backend/.../routes/admin_etl.py`)**: Se modificó el valor de respaldo por defecto de `GCP_PROJECT_ID` de `llyc-adtech-pruebas` a `llyc-ai-first-core` para garantizar que la creación de Cloud Scheduler para las ETLs diarias de clientes apunten al proyecto unificado de producción.

---

## 🧪 Pruebas y Certificación de Calidad

### A. Compilación del Frontend (TypeScript & Vite Build)
Se ejecutó la prueba de empaquetado en limpio de Vite en la SPA:
```bash
cd frontend && npm run build
```
- **Resultado**: Compilación 100% libre de errores.
- El archivo `dist/index.html` fue verificado con éxito y cuenta con todos los enlaces de scripts y estilos pre-fijados con `/media-impact/`.

### B. Validation del Backend
Se validaron los cambios del archivo Python afectado para certificar la ausencia de errores sintácticos:
```bash
python3 -m py_compile backend/app/services/mcp_analytics/routes/admin_etl.py
```
- **Resultado**: Compilación exitosa.

---

## 🔒 Control de Versiones y Seguridad
- **Agregado Selectivo de Archivos**: Se agregaron uno a uno y de forma selectiva (`git add`) únicamente los archivos configurados, previniendo el uso del comando masivo `git add .`.
- **Exclusión de Secretos**: Confirmamos que los archivos de credenciales y JSON de claves locales (`media-impact-test-keys.json`) se mantienen excluidos en el control de versiones local y remoto de forma estricta gracias a las directrices de seguridad del `.gitignore`.
- **Mensaje de Commit**: Cumple con la especificación internacional de Conventional Commits:
  `feat(devops): migrate firebase to llyc-ai-first-core and enable media-impact subpath with tenant_id support`
