# LLYC Intelligence Dashboard — Git & GitHub Standards (GEMINI.md)

Este documento establece el protocolo estándar de desarrollo, control de versiones, flujos de trabajo en GitHub y políticas de seguridad que todo colaborador y agente de IA debe cumplir estrictamente en este repositorio.

---

## 🌿 1. Estrategia de Ramas (Branching Policy)

Manejamos una versión simplificada de **GitHub Flow** para asegurar agilidad y estabilidad:

* **`main`**: Rama de producción y producción continua. Debe estar **siempre compilable, estable y probada**. Nadie realiza commits directos a `main` en producción excepto por hotfixes críticos aprobados.
* **Ramas de Feature/Fix**: Se crean a partir de `main` con la nomenclatura:
  - `feature/<tema>`: Para nuevas características o integraciones (ej. `feature/brandlight-service`).
  - `fix/<bug>`: Para corrección de errores (ej. `fix/auth-jwt-validation`).
  - `devops/<infra>`: Para tareas de infraestructura y CI/CD (ej. `devops/github-actions`).
  - `docs/<doc>`: Para actualizaciones de documentación o guías (ej. `docs/dns-guide`).

---

## 💬 2. Estándares de Mensajes de Commit (Conventional Commits)

Los mensajes de commit deben seguir la especificación de **Conventional Commits** para mantener un historial limpio, estructurado y permitir la generación automática de changelogs:

Formato: `<tipo>(<ámbito opcional>): <descripción corta en minúsculas y presente>`

### Tipos Soportados:
* **`feat`**: Nueva funcionalidad (ej. `feat(backend): add brandlight api connector class`).
* **`fix`**: Corrección de un error (ej. `fix(frontend): repair user session refresh logic`).
* **`ci`**: Cambios en configuraciones de CI/CD (ej. `ci(github): configure cloud run and firebase deployment workflow`).
* **`docs`**: Cambios en documentación (ej. `docs: update roadmap and developer readmes`).
* **`style`**: Formateo de código, estilos, etc. (sin cambios funcionales).
* **`refactor`**: Reorganización de código que no añade features ni corrige bugs.
* **`chore`**: Tareas de mantenimiento, actualización de dependencias menores, etc.

> [!CAUTION]
> **POLÍTICA DE PRIVACIDAD CRÍTICA**: Queda estrictamente prohibido mencionar o incluir nombres reales de clientes o marcas (ej. `sanitas`, `cocacola`, etc.) en los mensajes de commit. Los commits deben ser 100% genéricos (ej. usar `tenant` o `client` en su lugar) para resguardar la confidencialidad de la cartera de clientes de LLYC en el historial público de Git.

---

## 🚨 3. Protocolo de Git y Pre-Push Mandatorio

**REGLA DE ORO DE CONTROL DE VERSIONES**: Está estrictamente prohibido realizar commits locales o pushes remotos de forma proactiva. **NUNCA se iniciará la fase de commit o push hasta que el usuario lo solicite de manera explícita.**

Queda estrictamente prohibido realizar `git add .` o `git add -A`. Todo archivo debe ser agregado de manera individual y selectiva (`git add <archivo_específico>`). 
Bajo ninguna circunstancia se realizará un `git push` sin autorización previa y explícita del usuario.

El proceso de desarrollo, confirmación y empuje de cambios debe seguir estrictamente este orden paso a paso:

### Paso 1: Lanzamiento del Entorno Local y Aprobación Visual
* Ejecutar el entorno local para certificar que todos los servicios levantan sin errores de inicialización:
  ```bash
  ./test_local.sh
  ```
* Solicitar al usuario que ingrese a la interfaz gráfica (`localhost:3000`), inspeccione los últimos cambios de manera visual, y proporcione una confirmación explícita (visto bueno). **NO PROSEGUIR AL SIGUIENTE PASO HASTA RECIBIR CONFIRMACIÓN.**

### Paso 2: Inspección de Estado y Diferencias
* Ejecutar y analizar el estado actual del repositorio:
  ```bash
  git status
  ```
* Analizar detalladamente las diferencias de los archivos modificados línea por línea para certificar que solo se tocan las áreas pretendidas:
  ```bash
  git diff HEAD
  ```

### Paso 3: Pruebas de Compilación (Filtro de Calidad)
* **Frontend**: Compilar y validar que no existan errores de TypeScript ni fallos en el empaquetado:
  ```bash
  cd frontend && npm run build
  ```
* **Backend**: Validar que todos los archivos de Python modificados o creados compilen perfectamente sin errores de sintaxis:
  ```bash
  python3 -m py_compile <archivos_modificados>
  ```
* *Nota: Si alguna de las compilaciones falla, se debe detener inmediatamente el proceso, depurar el error, resolverlo y reiniciar el protocolo obligatoriamente desde el Paso 1.*

### Paso 4: Actualización de Documentación y Dependencias (Mandatorio)
* Registrar y documentar detalladamente todo el trabajo técnico, los hitos arquitectónicos logrados, los errores resueltos y los resultados de las verificaciones en un archivo markdown estructurado dentro del directorio `developers_log/` siguiendo la convención de nomenclatura `YYYY-MM-DD-<tema-sprint>.md`.
* Certificar que los `README.md`, Devlogs, diagramas o bitácoras de cambios del repositorio estén actualizados con los cambios del commit actual.
* Si se agregaron librerías, asegurar que los archivos de dependencias (`package.json`, `requirements.txt`) estén modificados y agregados al commit de forma consistente.

### Paso 5: Confirmación del Commit y Mensaje (Commit Stage)
* Proponer al usuario una propuesta clara de mensaje de commit siguiendo el formato de **Conventional Commits**.
* Solicitar confirmación del mensaje de commit.
* Una vez confirmado, realizar la confirmación local agregando únicamente los archivos específicos:
  ```bash
  git add <archivo1> <archivo2>
  git commit -m "<mensaje_confirmado>"
  ```

### Paso 6: Solicitud de Autorización de Push (Push Stage)
* Preguntar de manera directa y clara al usuario la confirmación para realizar el push a la rama remota.
* **Solo tras recibir el "OK" o confirmación afirmativa del usuario**, proceder a ejecutar:
  ```bash
  git push origin <rama_actual>
  ```
* **Monitoreo Posterior al Push (Mandatorio)**: Inmediatamente después de realizar el push, se debe utilizar la CLI de GitHub (`gh`) para monitorear y trackear en tiempo real el progreso de la ejecución del workflow de GitHub Actions:
  ```bash
  gh run watch
  ```

---

## 🛠️ 5. Protocolo de gcloud y Diagnóstico de Despliegues

Cuando se trabaje con herramientas de **Google Cloud Platform (gcloud CLI)** o se investiguen fallos de despliegue, todo colaborador o agente de IA debe cumplir obligatoriamente con el siguiente protocolo:

### Paso 1: Verificación de Proyecto Activo (Always Check Project)
* Nunca asumir o asumir por defecto qué proyecto de GCP está activo en el entorno.
* Antes de ejecutar cualquier comando de IAM, servicios, despliegue o habilitación de APIs, se debe verificar explícitamente el proyecto seleccionado ejecutando:
  ```bash
  gcloud config get-value project
  ```
* Confirmar o cambiar el proyecto activamente si no coincide con el proyecto objetivo:
  ```bash
  gcloud config set project <proyecto_objetivo>
  ```

### Paso 2: Diagnóstico Profundo de Fallos de Compilación (Cloud Build Logs)
* Si el despliegue de Cloud Run o Cloud Functions falla durante la fase de empaquetado/construcción, **está prohibido limitarse únicamente a la información superficial provista por GitHub Actions**.
* El desarrollador o agente debe ir directamente al motor de compilación remota de GCP para inspeccionar el historial y logs completos:
  * **Listar las últimas compilaciones** para identificar el `BUILD_ID` que ha fallado:
    ```bash
    gcloud builds list --limit=5
    ```
  * **Obtener los logs detallados** de la compilación utilizando el ID respectivo para ver trazas completas de Docker, sintaxis o dependencias:
    ```bash
    gcloud builds log <BUILD_ID>
    ```

### Paso 3: Monitoreo en Tiempo Real del CI/CD (GitHub CLI - gh)
* Se establece como excelente práctica el monitoreo del progreso del pipeline de integración y despliegue continuo directamente desde la terminal utilizando GitHub CLI.
* Para vigilar y seguir en tiempo real una corrida de Actions activa hasta su finalización:
  ```bash
  gh run watch
  ```
* Para listar el historial reciente de ejecuciones de GitHub Actions:
  ```bash
  gh run list --limit=5
  ```
* Para inspeccionar los logs de un job específico fallido en GitHub:
  ```bash
  gh run view <run-id> --log --job=<job-id>
  ```

### Paso 4: Definición de Logs del Sistema (Mandatorio)
* **Definición de Logs del Sistema**: Cuando el usuario mencione "logs" o "bitácoras", se asume obligatoriamente que se refiere a los logs de **Google Cloud Platform (GCP)** (Cloud Logging o revisiones de Cloud Run) y nunca a archivos locales de texto `.log`.
* Para consultar los logs remotos en vivo del backend desplegado en Cloud Run, se debe utilizar:
  ```bash
  gcloud logging read "resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"llyc-intelligence-api\"" --limit=30 --format="value(textPayload)"
  ```

---

## 🔒 6. Políticas de Seguridad y Secretos

* **Protección de Credenciales**: Está estrictamente prohibido comprometer archivos `.env`, tokens OAuth, API Keys (GA4, Adobe, Brandlight, Peec.ai) o claves JSON de GCP en el repositorio.
* **GCP Secret Manager**: Toda credencial sensible en entornos remotos debe leerse directamente desde GCP Secret Manager en tiempo de ejecución.
* **Validación de Commits**: No se añadirán al commit archivos temporales, logs (`*.log`), bases de datos locales (`*.db`), ni directorios de dependencias (`node_modules/`, `venv/`). Asegurar que estén cubiertos en el `.gitignore`.

---

## 📚 7. Documentación y Resolución de Dudas

* **Directorio Obligatorio de Consulta**: Ante cualquier duda relacionada con la arquitectura, uso de la plataforma, integración de APIs, o resolución de problemas, se debe consultar **obligatoriamente** el contenido de la supracarpeta `/documentacion/` antes de ejecutar cambios en el código.
* **Estructura Documental**: Esta carpeta contiene las metodologías, manuales de uso, guías de troubleshooting (incluyendo ejemplos de *requests*, *responses* y flujos de autenticación), documentación de arquitectura y objetivos del proyecto.

---

## 🏗️ 8. Protocolo de Integración con `llyc-ai-first-core`

Este repositorio (`media_impact`) se utiliza como entorno de desarrollo iterativo. Sin embargo, el objetivo final es integrar este código dentro del monorepo principal `llyc-ai-first-core`.

Para realizar esta integración de manera segura y alineada con los estándares del equipo, se debe ejecutar el siguiente protocolo estricto:

### Paso 1: Preparación del Código (Limpieza)
*   **Separación de Capas**: Asegurar una separación estricta entre la "Capa de Producto" (código genérico) y la "Capa de Cliente" (assets, configuraciones, logos de Sanitas). La capa de cliente **NO** debe migrarse al repositorio core.
*   **Higiene**: Eliminar del código a portar los scripts *one-shot* o pruebas ad-hoc locales.

### Paso 2: Brancheo en el Repositorio Core
*   Clonar o actualizar localmente el repositorio `llyc-ai-first-core`.
*   Crear una nueva rama a partir de `main` siguiendo la nomenclatura estándar (ej. `feature/media-impact-dashboard` o `fix/media-impact-auth`).

### Paso 3: Transferencia y Adaptación (Porting)
*   Copiar los archivos validados desde `media_impact` al directorio correspondiente dentro de `llyc-ai-first-core`.
*   **Alineación de Infraestructura**: Respetar los invariantes del proyecto core:
    *   Región de despliegue de GCP configurada a `europe-west1` (ej. en `cloudbuild.yaml`).
    *   Inyección de secretos siempre desde Secret Manager (eliminar fallbacks *hardcodeados* como `SECRET_KEY`).
    *   Políticas estrictas de CORS apuntando a los dominios de producción correctos (ej. `https://dashboard.llyc.global`).
*   **Aislamiento**: Asegurar que las rutas (ej. routers de FastAPI) no colisionen con otros módulos como `campaign` o `sentiment`.

### Paso 4: Testeo y Compilación en el Core
*   Dentro del entorno de `llyc-ai-first-core`, ejecutar las pruebas de compilación mandatadas en el **Protocolo Pre-Push** (Frontend: `npm run build`, Backend: `python3 -m py_compile`).
*   Verificar que no existan errores de dependencias o rutas superpuestas.

### Paso 5: Commit, Push y Pull Request (PR)
*   Realizar el commit en el repo core siguiendo las reglas de **Conventional Commits** y manteniendo la privacidad (sin nombrar clientes reales).
*   Solicitar autorización al usuario para hacer el `git push` de la rama remota en el repo core.
*   Una vez subida la rama, abrir un **Pull Request (PR)** en GitHub apuntando a `main` y solicitar la revisión formal del equipo.
