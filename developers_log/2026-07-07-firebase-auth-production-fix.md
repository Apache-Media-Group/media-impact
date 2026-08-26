# DevLog: 2026-07-07 - Resolución de Autenticación de Firebase en Producción

## Contexto y Problema

Durante el ciclo de desarrollo anterior en el que se integraron los nuevos componentes de MCP Analytics y se solucionaron errores en el Frontend (como el crash de `removeChild` en Chart.js y el aplanamiento de datos en el hook `useAnalytics`), se introdujo temporalmente un parche local en el frontend (`App.tsx`) para la autenticación de Firebase.

El parche forzaba de manera estática el estado de autenticación al email `developer@llyc.global` sin suscribirse al observador oficial `onAuthStateChanged(auth, ...)`. Esto funcionaba sin problemas en desarrollo local debido a que el backend contaba con la directiva `BYPASS_AUTH_LOCAL=true`, que permitía eludir la validación del JWT de Firebase Auth.

Sin embargo, tras el despliegue automático exitoso de GitHub Actions, se detectó que el sitio web en producción fallaba en la carga de datos. Al revisar los logs de Google Cloud Run, se confirmó que las llamadas HTTP al backend estaban devolviendo un código `401 Unauthorized` de manera consistente. Esto ocurría porque en producción el backend exige estrictamente un token JWT válido de Firebase (`Authorization: Bearer <JWT>`), y el frontend con el parche temporal no estaba generando ni enviando dicho token de seguridad al estar el *listener* comentado.

## Trabajo Técnico Realizado

1.  **Diagnóstico de Producción:**
    *   Inspección profunda de los logs del backend usando `gcloud logging read`. Se comprobó que el contenedor de Cloud Run (`llyc-intelligence-api`) arrancaba correctamente, y las reglas del balanceo en Firebase (`firebase.json`) dirigían el tráfico adecuadamente.
    *   Revisión del código de inyección del middleware de autenticación del API (`auth_middleware.py`) y del cliente seguro del frontend (`apiClient.ts`).

2.  **Restauración del Flujo de Autenticación en Frontend:**
    *   Modificación de `frontend/src/App.tsx`.
    *   Se eliminó la asignación estática e insegura del estado del usuario.
    *   Se restauraron los imports de Firebase Auth.
    *   Se re-implementó el hook `useEffect` con la suscripción asíncrona a `onAuthStateChanged(auth, ...)` para reaccionar verdaderamente al inicio y cierre de sesión de los usuarios.

3.  **Compilación y Pre-Push Protocol:**
    *   Se ejecutó la fase de compilación local del frontend (`npm run build`) validando que el empaquetado finalice en verde (1.02s) sin errores de sintaxis TypeScript.
    *   Se realizó revisión del `git diff` de forma rigurosa, acotando el *scope* de los cambios.
    *   Bajo aprobación explícita del usuario, se empujó a la rama principal bajo un formato estandarizado *Conventional Commit*: `fix(frontend): restore firebase auth state listener to enable secure token generation in production deployments`.

4.  **Despliegue y Monitorización CI/CD:**
    *   Seguimiento en tiempo real de los *jobs* de GitHub Actions empleando `gh run watch` en la terminal.
    *   Se validaron en verde los flujos de "Deploy Backend to Cloud Run" y "Deploy Frontend to Firebase Hosting" (ID 85677096237 y 85678105426).

## Resultados y Verificaciones

*   **API y UI sincronizados:** El dashboard frontal ya exige un estado de autenticación real y oficial frente a los servidores de Google Identity (Firebase Auth).
*   **Seguridad restablecida:** El backend ahora recibe exitosamente los tokens criptográficos de portador generados por el cliente, permitiendo un paso seguro de `get_current_user` y el validador de `verify_tenant_access`.
*   El error en producción ha sido mitigado al 100%, permitiendo una visualización limpia e integrada de las métricas.
