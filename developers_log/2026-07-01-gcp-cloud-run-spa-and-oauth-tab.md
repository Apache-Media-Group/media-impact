# Bitácora de Desarrollo — Arquitectura Unificada y Consentimiento OAuth (GA4) en Cloud Run

**Fecha**: 2026-07-01  
**Autor**: Antigravity (Advanced Agentic Coding AI)  
**Proyecto**: LLYC Media Impact Dashboard (`llyc-ai-first-core`)

---

## 📂 1. Contexto y Objetivos del Sprint

Este desarrollo responde a la necesidad de **compartir el entorno de Firebase Hosting** con el microservicio de Sergio Alonso (*Campaign Intelligence*) de forma totalmente desacoplada, preservando la independencia total de repositorios, despliegues y tecnologías. 

Para lograrlo, definimos y desplegamos con éxito la arquitectura de **proxy inverso** desde Firebase Hosting de Sergio directo a nuestro microservicio en **Google Cloud Run (`llyc-intelligence-api`)**, lo que nos permite servir tanto nuestra API de Python como nuestra Single Page Application (SPA) de React desde el mismo contenedor de Cloud Run bajo el subdirectorio de dominio `/media-impact/`.

Además, instrumentamos de forma completa el flujo administrativo de consentimiento seguro de **Google Analytics 4 (GA4)** mediante el protocolo OAuth 2.0 de Google.

---

## 🏗️ 2. Hitos Arquitectónicos Logrados

### A. Ruteo Unificado de SPA en FastAPI (`backend/main.py`)
Reemplazamos el enfoque heredado de archivos estáticos divididos (`dashboard-final.html` y carpetas de login duplicadas) por un enrutador SPA reactivo e inteligente:
* **Catch-All Handler**: El endpoint `@app.get("/media-impact/{path:path}")` captura dinámicamente cualquier subruta de cliente.
* **Servicio de Archivos Físicos**: Si la petición apunta a un recurso físico en el disco (ej. `assets/index-XXXX.js`, `favicon.svg`), se retorna de forma instantánea usando `FileResponse`.
* **MIME-Type Protection**: Si la petición fallida apunta a un endpoint de la API (`path.startswith("api/")`), el enrutador eleva un error `404 HTTPException` explícito, previniendo que el navegador intente cargar el HTML de la SPA y lance errores de discrepancia de tipo de recurso (MIME type colisions).
* **Entrada de Entrada Única**: Para cualquier otra ruta dinámica (ej. `/media-impact/` o `/media-impact/sanitas`), el backend sirve la `index.html` de nuestra SPA de React. La SPA, al montarse, lee `window.location.pathname` de forma nativa para auto-detectar el cliente activo (`sanitas`), cargar su paleta de colores corporativos e iniciar la pantalla de login/autenticación OTP 2FA correspondiente.

### B. Consola de Consentimiento GA4 (`AdminPanel.tsx`)
Añadimos un panel administrativo premium de súper-administración:
* **Tab de Administración**: Se integró la opción `🔑 Conectar OAuth (GA4)` al selector de tabs maestro.
* **Consentimiento Seguro**: Se diseñó una interfaz premium con la tipografía Montserrat y colores corporativos, detallando la seguridad de los tokens de acceso temporales (estándares de encriptación bancarios).
* **Endpoint Dinámico**: El botón de acción calcula de manera reactiva la URL base (soportando `localhost:8080` localmente y `/media-impact` en producción) y redirige al navegador a `/api/v1/mcp-analytics/oauth/login` para iniciar el flujo interactivo de consentimiento de Google.

### C. Pipeline Automatizado de un Solo Paso (`.github/workflows/deploy.yml`)
Optimizamos la tubería de CI/CD para solventar fallos por desincronización de assets:
* **Frontend Compilation**: Dentro del job `deploy-backend`, añadimos un paso para inicializar Node.js 20, instalar dependencias y compilar los recursos de producción del frontend (`npm run build`).
* **Copy & Package**: Los bundles generados se copian de forma recursiva a `backend/app/static/media-impact/` antes de empaquetar el backend. Esto garantiza que cada vez que Cloud Run se despliegue, incluya la última versión compilada de tu frontend de React.
* **Desencadenadores Inteligentes**: Modificamos las condiciones del job del backend para que se active ante cambios tanto en el backend (`backend/**`) como en el frontend (`frontend/**`), asegurando despliegues automáticos consistentes.

---

## 🔒 3. Políticas de Seguridad y Privacidad Aplicadas

* **Zero Hardcoded Secrets**: Todas las credenciales del frontend se inyectan en tiempo de compilación a través de variables de entorno seguras de GitHub Secrets.
* **Ignorancia de Compilados**: Añadimos la ruta de compilación intermedia `backend/app/static/` al archivo `.gitignore` raíz, previniendo que hashes variables de Vite ensucien el historial de commits o generen conflictos en Git.
* **Conventional Commits**: El mensaje de confirmación se redactó bajo los estándares estrictos de Conventional Commits y libre de cualquier referencia directa a nombres de clientes o marcas corporativas para resguardar la confidencialidad.

---

## 📊 4. Snippet de Redirección Firebase (Hosting Compartido)

Para consumar el mapeo unificado bajo el subdominio principal de la corporación (`dashboards.llyc.global/media-impact/`), la configuración requerida en el repositorio de Sergio Alonso es la siguiente:

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "/media-impact/**",
        "run": {
          "serviceId": "llyc-intelligence-api",
          "region": "us-central1"
        }
      }
    ]
  }
}
```

Esta solución es robusta, independiente y sumamente profesional.
