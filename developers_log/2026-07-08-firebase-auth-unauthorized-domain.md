# DevLog: 2026-07-08 - Resolución de Error auth/unauthorized-domain en Producción

## Contexto y Problema

Tras desplegar exitosamente los últimos cambios (restauración del *listener* de autenticación de Firebase en `App.tsx`) y validar que el pipeline de CI/CD subió el frontend al Firebase Hosting en la URL correcta (`https://llyc-media-impact.web.app`), nos topamos con un nuevo error de Firebase en el entorno de producción.

Al intentar iniciar sesión utilizando el botón de "Admin", la plataforma arrojó un error visible en la UI:
`Error de autenticación: Firebase: Error (auth/unauthorized-domain).`

## Diagnóstico Técnico

Este es un mecanismo de seguridad estándar de **Firebase Authentication**. Para prevenir ataques de *phishing* o que sitios maliciosos intenten usar las credenciales de OAuth de nuestra aplicación, Firebase requiere que todo dominio desde donde se ejecute el SDK de autenticación (el pop-up o redirección de Google Sign-In) esté explícitamente añadido a una **lista blanca de "Dominios Autorizados"**.

En nuestro caso, el proyecto de Firebase (`llyc-ai-first-core`) probablemente tiene en su lista blanca los dominios por defecto (como `localhost` y el dominio base `llyc-ai-first-core.firebaseapp.com`), pero no tiene registrado explícitamente el alias de Hosting que estamos utilizando activamente en este repositorio: `llyc-media-impact.web.app`.

Al no estar el dominio autorizado, Firebase bloquea proactivamente el intento de autenticación y lanza el código `auth/unauthorized-domain`.

## Solución Requerida

Dado que esta es una configuración de seguridad perimetral a nivel de proyecto de Google Cloud / Firebase (Identity Platform), la resolución no se hace a nivel de código fuente en este repositorio, sino a través de la consola de administración de Firebase.

**Pasos a seguir por el Administrador:**

1. Acceder a la [Consola de Firebase](https://console.firebase.google.com/).
2. Entrar al proyecto `llyc-ai-first-core`.
3. Navegar en el menú lateral a **Authentication** -> pestaña **Settings** (Configuración) -> **Authorized domains** (Dominios autorizados).
4. Hacer clic en **Add domain** (Añadir dominio).
5. Introducir exactamente: `llyc-media-impact.web.app`
6. Guardar los cambios.

Una vez el dominio esté listado en Firebase, el login en producción funcionará de inmediato y generará el JWT requerido por nuestro backend en Google Cloud Run.
