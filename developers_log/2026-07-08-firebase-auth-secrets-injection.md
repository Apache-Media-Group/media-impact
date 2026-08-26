# DevLog: 2026-07-08 - Resolución de Inyección de Secretos CI/CD para Firebase

## Contexto y Problema

Tras resolver el problema del `auth/unauthorized-domain`, el usuario seguía sin poder iniciar sesión en el entorno de producción (`https://llyc-media-impact.web.app/`). El error persistía a pesar de que el dominio ya estaba en la lista blanca.

Al revisar los archivos compilados JS del frontend en producción, se descubrió que el pipeline de GitHub Actions estaba inyectando una `VITE_FIREBASE_API_KEY` incorrecta (`AIzaSyA2-o1pcwp...`) en lugar de la clave válida (`AIzaSyCHIluDUA...`).

## Diagnóstico Técnico

El repositorio tenía configurados **Environments** en GitHub (específicamente el entorno `prod`). En el archivo `.github/workflows/deploy.yml`, los jobs de despliegue estaban asociados a este entorno (`environment: prod`).

El problema radicaba en que los **Environment Secrets** (secretos a nivel de entorno) tienen precedencia sobre los **Repository Secrets** (secretos a nivel de repositorio). Aunque se habían actualizado las claves a nivel de repositorio, el entorno `prod` conservaba una clave de Firebase obsoleta desde el 15 de junio.

## Solución Aplicada

1.  **Actualización de Secretos de Entorno:** Se utilizó la CLI de GitHub (`gh`) para sobrescribir explícitamente el secreto dentro del entorno `prod`:
    ```bash
    gh secret set VITE_FIREBASE_API_KEY -b "<CLAVE_CORRECTA>" -e prod
    ```

2.  **Trigger Manual (workflow_dispatch):** Se modificó el archivo `deploy.yml` para añadir soporte para ejecución manual (`workflow_dispatch:`). Esto permitió redesplegar sin necesidad de realizar "commits vacíos".

3.  **Redespliegue y Verificación:** Se ejecutó el pipeline manualmente. Tras el despliegue exitoso y un *Hard Refresh* en el navegador del cliente para limpiar la caché, la aplicación frontend recibió la configuración de Firebase correcta y la autenticación funcionó como se esperaba.
