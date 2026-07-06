# Registro de Desarrollo — Corrección de Enrutamiento en Firebase Hosting (2026-07-05)

Este registro documenta el diagnóstico técnico y la resolución implementada para habilitar el correcto enrutamiento del frontend y proxy inverso en Firebase hacia la aplicación React desplegada en Cloud Run (`llyc-intelligence-api`) bajo el path `/media-impact`.

## 1. Hito Arquitectónico Logrado
El objetivo fue resolver un conflicto de enrutamiento estático en la integración con el dashboard unificado centralizado (`llyc-ai-first-core`), el cual impedía que el servicio de React desplegado en el Cloud Run backend pudiese exponerse como micro-frontend a través de un proxy inverso.

Con la corrección realizada en el PR [#65](https://github.com/Apache-Media-Group/llyc-ai-first-core/pull/65), se ha habilitado un mecanismo para servir dinámicamente un servicio contenedor externo transparente y sin dependencias directas en los empaquetados del repositorio maestro.

## 2. Descripción del Problema y Diagnóstico

Durante las pruebas de integración en vivo sobre la URL de producción (`https://dashboard.llyc.global/media-impact/`), se detectó la presencia de una página "dura" y estática, ajena a nuestra arquitectura de React.

**Análisis de Causa Raíz (Root Cause Analysis):**
Se determinó que el problema se derivaba de un comportamiento predeterminado (default) en Firebase Hosting:
* **Precedencia de Archivos Estáticos:** Firebase Hosting **siempre** asigna prioridad absoluta a los archivos estáticos físicos en el directorio de compilación sobre las reglas dinámicas de redireccionamiento (rewrites).
* **Conflicto Físico:** El repositorio `llyc-ai-first-core` contenía físicamente una carpeta `/media-impact` con un archivo `index.html` estático en el frontend compilado.
* **Bloqueo del Proxy:** En consecuencia, al recibir peticiones HTTP hacia el path `/media-impact`, Firebase sirvió directamente este HTML estático, ignorando por completo la regla existente de proxy que debía derivar la carga hacia la API externa de Cloud Run (`llyc-intelligence-api`).

## 3. Trabajo Técnico Realizado y Errores Resueltos

Para remediar el incidente e implementar correctamente el enrutamiento API-Gateway (BFF - Backend for Frontend) hacia el Cloud Run, se ejecutaron las siguientes acciones en el repositorio central `llyc-ai-first-core`:

1.  **Limpieza del Sistema de Archivos (Filesystem Cleanup):**
    *   Se eliminó por completo el directorio bloqueador y su contenido estático: `dashboards/campaign-intelligence/frontend/media-impact/index.html`.
    *   Con esto, Firebase ya no encuentra archivos en dicha ruta, y por consiguiente se ve obligado a utilizar el mecanismo de resolución de reglas dinámicas (`rewrites`).
2.  **Configuración de Reglas de Enrutamiento Inverso (`firebase.json`):**
    *   Se procedió a sobreescribir la resolución nativa de React Router/Vite SPA (`destination: "/dashboard-final.html"`) a favor de una redirección proxy a servicio.
    *   Se reemplazó la directiva `destination` por el nodo `run`, apuntando al ServiceId `llyc-intelligence-api` desplegado en la región de GCP `us-central1`.

**Estructura del Diff (Cambio en `firebase.json`):**
```json
      {
        "source": "/media-impact/**",
        "run": {
          "serviceId": "llyc-intelligence-api",
          "region": "us-central1"
        }
      },
      {
        "source": "/media-impact",
        "run": {
          "serviceId": "llyc-intelligence-api",
          "region": "us-central1"
        }
      }
```

## 4. Resultados de Verificación y Workflow

Las modificaciones fueron consolidadas y encapsuladas de forma segura dentro de la rama propia `fix/media-impact-hosting-rewrite` bifurcada de la rama de trabajo principal de Sergio (`feature/dashboard-campaign-intelligence`).

*   **Integración de Control de Versiones:** Los cambios han sido formalmente propuestos mediante la apertura del **Pull Request (PR) #65** contra la rama feature remota original, resguardando así las ramas base del entorno.
*   **Resultados Esperados:** Inmediatamente después de que el PR sea revisado, fusionado, y que se haya superado el pipeline CI/CD en GitHub Actions correspondiente al entorno `llyc-ai-first-core`, las URL asociadas a `/media-impact` redirigirán exitosamente sin fricción a la interfaz unificada provista por nuestro backend principal.
