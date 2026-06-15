# LLYC Intelligence Dashboard — Plataforma Analítica Multi-Tenant

El **LLYC Intelligence Dashboard** es una plataforma analítica empresarial diseñada para que consultores y clientes de **LLYC** visualicen de manera unificada y securizada el impacto del tráfico orgánico, la presencia en motores de respuesta de Inteligencia Artificial (IA), y reciban recomendaciones SEO accionables.

Este repositorio alberga tanto el **Frontend (SPA en React + TypeScript + Vite)** como el **Backend (FastAPI en Python)**.

---

## 🏛️ Arquitectura de la Plataforma (Multi-Tenant & Cloud)

De acuerdo con los requisitos del Product Owner, la plataforma está estructurada bajo estándares corporativos y de ciberseguridad estrictos:

```
                      [ *.llyc.ai ]  (DNS administrado en Firebase)
                            │
                            ▼
                  [ Firebase Auth (JWT) ]
                            │ (Valida inquilino y rol del usuario)
                            ▼
              ┌───────────────────────────┐
              │    Google Cloud Run       │  (O Cloud Functions distintas)
              │ ┌───────────────────────┐ │
              │ │ Frontend (React SPA)  │ │
              │ └───────────────────────┘ │
              │ ┌───────────────────────┐ │
              │ │   Backend (FastAPI)   │ │
              │ └───────────────────────┘ │
              └─────────────┬─────────────┘
                            │
                            ▼
              [ GCP Secret Manager (Encr.)] <── (Guarda API Keys, OAuth tokens)
```

### 1. Gestión de Subdominios (Multi-Tenancy)
* **Un subdominio por cliente** (ej. `clienteA.analytics.llyc.ai`, `clienteB.analytics.llyc.ai`).
* El DNS se configura y propaga mediante **Firebase**.
* El frontend detecta dinámicamente el inquilino (tenant) mediante el subdominio (`window.location.hostname`) para aplicar la personalización de marca (logos, colores, tipografías) y scopear las consultas.

### 2. Autenticación y Autorización (Auth)
* **Firebase Auth** maneja el registro, inicio de sesión y la validación de tokens JWT.
* El frontend envía el token de Firebase en la cabecera `Authorization: Bearer <JWT>` al backend.
* El backend valida el JWT y comprueba que el usuario pertenezca al tenant del subdominio actual y posea los permisos correctos.

### 3. Almacenamiento Seguro de Credenciales (GCP Secret Manager)
* Las credenciales de clientes (tokens de GA4, Adobe Client Secrets, Brandlight API Keys, Peec.ai keys) **nunca** se exponen en bases de datos inseguras ni archivos `.env` de producción.
* Se almacenan de forma encriptada en **GCP Secret Manager** bajo una nomenclatura jerárquica estandarizada para cumplir con normativas de ciberseguridad corporativas.

### 4. Roles: Superadmin vs. Cliente (Self-Service)
* **Cliente**: Puede dar de alta, actualizar o probar sus propias conexiones (GA4, Adobe, Brandlight, Peec.ai) a través de una sección de configuración autoservicio en su subdominio.
* **Superadmin (LLYC)**: Un panel exclusivo para consultores de LLYC que permite monitorizar el estado de todas las conexiones activas de todos los clientes, depurar problemas de sincronización, y configurar parámetros globales.

---

## 🚀 Despliegue & CI/CD (GitHub Actions)

La plataforma se despliega automáticamente en **Google Cloud Platform (GCP)** utilizando **GitHub Actions**:

* **CI/CD Pipeline** (`.github/workflows/deploy.yml`):
  * **Frontend**: Se compila y despliega como un servicio independiente en GCP (o hosting estático).
  * **Backend**: Se empaqueta y despliega como un servicio/función independiente en GCP.
  * Durante el despliegue se configuran los accesos de IAM para que el backend pueda comunicarse de forma segura con GCP Secret Manager mediante una cuenta de servicio dedicada.

---

## 🛠️ Estructura del Proyecto

* **`frontend/`**: SPA en React 19 + TypeScript + Vite. Utiliza TailwindCSS para estilos, Lucide-React para iconos, y Chart.js para visualización de métricas.
* **`backend/`**: API REST robusta construida con FastAPI y Python 3.11.
  * `backend/app/services/mcp_analytics/`: Contiene los conectores de analítica (GA4, Adobe, Peec.ai y próximamente Brandlight).
* **`legacy/`**: Scripts de pruebas iniciales y referencias de desarrollo (incluyendo los test de la API de Brandlight).

---

## 💻 Desarrollo Local

### Requisitos Previos
* Python 3.11+
* Node.js 18+

### Levantar el Backend
1. Entrar al directorio `backend/`:
   ```bash
   cd backend
   ```
2. Crear un entorno virtual e instalar dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   python main.py
   ```

### Levantar el Frontend
1. Entrar al directorio `frontend/`:
   ```bash
   cd frontend
   ```
2. Instalar dependencias npm:
   ```bash
   npm install
   ```
3. Levantar el servidor de desarrollo Vite:
   ```bash
   npm run dev
   ```
