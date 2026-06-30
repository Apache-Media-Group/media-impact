# Bitácora de Desarrollo — 2026-06-30 — Despliegue Exitoso y Resolución de Permisos IAM de GCP

## 🎯 Objetivo y Contexto del Sprint
Tras completar las modificaciones de configuración del frontend y backend para la ruta `/media-impact/` y la migración al proyecto consolidado `llyc-ai-first-core`, el objetivo de hoy fue ejecutar y certificar el despliegue automático del pipeline de CI/CD (GitHub Actions).

Durante este proceso, identificamos y resolvimos de manera ágil restricciones de seguridad y permisos IAM en GCP para la cuenta de servicio del deployment, garantizando un entorno final robusto, seguro y plenamente operativo.

---

## 🛠️ Hitos Técnicos Logrados

### 1. Diagnóstico y Resolución de Permisos en Cloud Run (IAM)
- **Bloqueo Inicial**: El deployment de backend (`deploy-backend`) fallaba debido a que la cuenta de servicio de Firebase `firebase-adminsdk-fbsvc@llyc-ai-first-core.iam.gserviceaccount.com` no contaba con permisos de administración de Cloud Run:
  `PERMISSION_DENIED: Permission 'run.services.get' denied on resource 'namespaces/llyc-ai-first-core/services/llyc-intelligence-api'`.
- **Solución**: Se actualizaron las políticas IAM del proyecto `llyc-ai-first-core` para otorgar los roles necesarios a la cuenta de servicio:
  - **Administrador de Cloud Run** (`roles/run.admin`): Permite crear, actualizar y gestionar servicios de Cloud Run.
  - **Usuario de Cuenta de Servicio** (`roles/iam.serviceAccountUser`): Requerido para enlazar la cuenta de servicio runtime por defecto durante el deployment.

### 2. Creación Manual del Repositorio de Artifact Registry
- **Segundo Bloqueo**: Al implementar con la bandera `--source backend`, `gcloud` intenta empaquetar el código fuente y crear de manera dinámica un repositorio de almacenamiento en Artifact Registry llamado `cloud-run-source-deploy` en la región `us-central1`. La cuenta de servicio no disponía de los privilegios administrativos generales a nivel de proyecto para crear repositorios en Artifact Registry:
  `PERMISSION_DENIED: Permission 'artifactregistry.repositories.create' denied on resource 'projects/llyc-ai-first-core/locations/us-central1'`.
- **Solución**: 
  - Añadimos de forma preventiva el rol **Administrador de Artifact Registry** (`roles/artifactregistry.admin`) y **Editor de Cloud Build** (`roles/cloudbuild.builds.editor`) a la cuenta de servicio.
  - Con el fin de simplificar el flujo y evitar fallos por creación dinámica, **creamos manualmente el repositorio de Docker `cloud-run-source-deploy` en la ubicación `us-central1`** usando la terminal local autorizada. Esto evita que el pipeline intente crearlo en cada ejecución, limitándolo a consultar e inyectar las imágenes compiladas de forma segura.

### 3. Pipeline de GitHub Actions 100% Verde
- **Resultado del Rerun**: Tras aplicar la configuración de seguridad y la creación del repositorio, el re-run del workflow **`#28425041087`** completó todos los jobs de manera impecable:
  - `🔍 Detect Changes`: Exitoso.
  - `🚀 Deploy Backend to Cloud Run`: Exitoso (tiempo de ejecución: 4m 16s).
  - `🎨 Deploy Frontend to Firebase Hosting`: Exitoso (tiempo de ejecución: 41s).

---

## 📡 Estado de los Servicios Desplegados

### A. Backend API (Cloud Run)
- **URL de Producción**: [https://llyc-intelligence-api-46249705777.us-central1.run.app](https://llyc-intelligence-api-46249705777.us-central1.run.app)
- **Proyecto GCP**: `llyc-ai-first-core`
- **Configuración de Seguridad**: Variables de entorno de producción (`GEMINI_API_KEY`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, etc.) inyectadas de forma segura desde las llaves en GitHub Secrets.

### B. Frontend SPA (Firebase Hosting)
- **Site ID**: **`llyc-media-impact`**
- **Hosting URL por defecto**: [https://llyc-media-impact.web.app](https://llyc-media-impact.web.app) (lista para mapeo).
- **Ruta Base**: La SPA está configurada con `base: '/media-impact/'`, resolviendo todos sus assets bajo esa misma sub-ruta de forma nativa.

---

## 🤝 Datos para Coordinación con Sergio Alonso

Para unificar las herramientas bajo el dominio principal `dashboard.llyc.global`, Sergio Alonso solo necesita añadir la siguiente regla de ruteo/multisite en su `firebase.json` maestro:

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "/media-impact/**",
        "site": "llyc-media-impact"
      }
    ]
  }
}
```

Esto ruteará de manera transparente todas las peticiones que entren por `dashboard.llyc.global/media-impact/` hacia nuestro Hosting de Firebase (`llyc-media-impact`), logrando un aislamiento absoluto del código de ambos dashboards, pero compartiendo el mismo dominio corporativo unificado.
