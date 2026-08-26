# Documentación Extendida: Google Analytics 4 (GA4) API

## 1. Descripción General
Google Analytics 4 es el motor analítico principal de **Media Impact**. La herramienta utiliza dos APIs complementarias de Google Cloud:
- **Google Analytics Admin API (v1beta):** Para descubrir la topología de la cuenta (Cuentas y Propiedades).
- **Google Analytics Data API (v1beta):** Para la extracción de datos tabulares, métricas y dimensiones.

La integración se maneja a través de la librería oficial de Python de Google (`google-analytics-data` y `google-analytics-admin`).

---

## 2. Autenticación Exhaustiva
Las APIs de Google Cloud utilizan el protocolo **OAuth 2.0** y requieren autenticación mediante **Service Accounts** (Cuentas de Servicio) o **ADC** (Application Default Credentials).

### 2.1. Credenciales de Service Account (JSON)
Para conexiones server-to-server, la herramienta requiere un archivo de clave JSON (usualmente cargado desde Secret Manager o variables de entorno) que contiene las credenciales.

**Estructura esperada del JSON:**
```json
{
  "type": "service_account",
  "project_id": "media-impact-project",
  "private_key_id": "ab123456789...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n",
  "client_email": "ga-service@media-impact-project.iam.gserviceaccount.com",
  "client_id": "10123456789...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ga-service..."
}
```

### 2.2. Flujo en el Código
La herramienta instancia las credenciales y las pasa a los clientes:
```python
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient

# Creación de credenciales desde diccionario o archivo
credentials = service_account.Credentials.from_service_account_info(json_dict)

# Inicialización de clientes
data_client = BetaAnalyticsDataClient(credentials=credentials)
admin_client = AnalyticsAdminServiceClient(credentials=credentials)
```
*Si no se pasan credenciales explícitas, el SDK buscará automáticamente la variable de entorno `GOOGLE_APPLICATION_CREDENTIALS`.*

---

## 3. Ejemplos de Requests y Responses

A continuación se detallan las operaciones que ejecuta la herramienta contra GA4 y la estructura exacta de la comunicación.

### 3.1. Listar Cuentas (Admin API)

**Objetivo:** Descubrir a qué cuentas tiene acceso el Service Account.

**Request (Python SDK):**
```python
response = admin_client.list_accounts()
```

**Response (Mock Protobuf convertido a JSON):**
```json
{
  "accounts": [
    {
      "name": "accounts/123456789",
      "createTime": "2021-05-12T10:00:00Z",
      "updateTime": "2023-01-15T08:30:00Z",
      "displayName": "LLYC Global Account",
      "regionCode": "ES",
      "deleted": false
    }
  ],
  "nextPageToken": ""
}
```

### 3.2. Listar Propiedades (Admin API)

**Objetivo:** Obtener el listado de propiedades (Properties) asociadas a una cuenta específica.

**Request:**
```python
response = admin_client.list_properties(filter="parent:accounts/123456789")
```

**Response:**
```json
{
  "properties": [
    {
      "name": "properties/987654321",
      "parent": "accounts/123456789",
      "createTime": "2022-03-01T14:20:00Z",
      "updateTime": "2023-11-10T09:15:00Z",
      "displayName": "LLYC Corporate Web GA4",
      "industryCategory": "BUSINESS_AND_INDUSTRIAL_MARKETS",
      "timeZone": "Europe/Madrid",
      "currencyCode": "EUR",
      "serviceLevel": "GOOGLE_ANALYTICS_360"
    }
  ]
}
```

### 3.3. Generación de Reportes (Data API)

**Objetivo:** Obtener sesiones, conversiones y tiempos promedios para detectar tráfico de Inteligencia Artificial (Traffic IA).

**Request (Generando un Reporte de Sesiones por Fuente):**
```python
from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Dimension, Metric

request = RunReportRequest(
    property="properties/987654321",
    dimensions=[
        Dimension(name="sessionSource"),
        Dimension(name="deviceCategory")
    ],
    metrics=[
        Metric(name="sessions"),
        Metric(name="userEngagementDuration"),
        Metric(name="conversions")
    ],
    date_ranges=[DateRange(start_date="30daysAgo", end_date="today")],
    limit=1000
)

# Ejecución
response = data_client.run_report(request)
```

**Response (Estructura de la respuesta):**
```json
{
  "dimensionHeaders": [
    { "name": "sessionSource" },
    { "name": "deviceCategory" }
  ],
  "metricHeaders": [
    { "name": "sessions", "type": "TYPE_INTEGER" },
    { "name": "userEngagementDuration", "type": "TYPE_SECONDS" },
    { "name": "conversions", "type": "TYPE_INTEGER" }
  ],
  "rows": [
    {
      "dimensionValues": [
        { "value": "chatgpt.com" },
        { "value": "desktop" }
      ],
      "metricValues": [
        { "value": "1540" },
        { "value": "84500" },
        { "value": "12" }
      ]
    },
    {
      "dimensionValues": [
        { "value": "perplexity.ai" },
        { "value": "mobile" }
      ],
      "metricValues": [
        { "value": "890" },
        { "value": "35600" },
        { "value": "5" }
      ]
    }
  ],
  "rowCount": 2
}
```

### 3.4. Parseo en Media Impact
Media Impact itera sobre el array `rows` de la respuesta, extrae los `dimensionValues` y `metricValues` y los convierte en listas planas, calculando luego el promedio de duración (`userEngagementDuration` dividido por `sessions`) y el **Sniper Score** utilizando la matemática estricta explicada en la metodología.
