# Documentación Extendida: Adobe Analytics API (2.0)

## 1. Descripción General
La integración de Adobe Analytics actúa como un conector de traducción. Puesto que Media Impact está diseñado en torno al esquema conceptual de dimensiones de GA4, el archivo `adobe_service.py` convierte estas dimensiones genéricas a los identificadores nativos de Adobe (los `variables/` y `metrics/`). La API empleada es la **Adobe Analytics API 2.0**.

---

## 2. Autenticación Exhaustiva
La arquitectura de autenticación de Adobe es estricta. Utiliza el ecosistema **Adobe Developer Console (IMS)**.

Para hacer una solicitud a la API de reportes en `https://analytics.adobe.io/api`, el conector requiere inyectar tres componentes obligatorios en las cabeceras HTTP:

### 2.1. Requisitos de Cabecera (Headers)
1. **Authorization (Bearer Token):** Token temporal JWT o generado vía OAuth Server-to-Server.
2. **x-api-key (Client ID):** Identificador público del proyecto en Adobe Console.
3. **x-gw-ims-org-id (Organization ID):** El identificador del tenant principal.

### 2.2. Implementación en Media Impact
```python
def _get_headers(self, token: str, content_type: Optional[str] = None) -> Dict[str, str]:
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/json"
    }
    if self.client_id:
        headers["x-api-key"] = str(self.client_id)
    if self.org_id:
        headers["x-gw-ims-org-id"] = str(self.org_id)
    if content_type:
        headers["Content-Type"] = content_type
    return headers
```

---

## 3. Ejemplos de Requests y Responses

Dado que Adobe API 2.0 es puramente REST sobre HTTP/JSON, las interacciones directas lucen de la siguiente manera.

### 3.1. Discovery de Compañías (Listar Cuentas)

**Objetivo:** Averiguar los IDs internos (`globalCompanyId`) que corresponden a las distintas compañías bajo la organización IMS.

**Request (GET):**
```http
GET https://analytics.adobe.io/api/discovery/me
Authorization: Bearer <token_valido>
x-api-key: <client_id>
```

**Response (JSON):**
```json
{
    "imsOrgs": [
        {
            "imsOrgId": "1A2B3C4D5E6F@AdobeOrg",
            "orgName": "LLYC Corporate",
            "companies": [
                {
                    "globalCompanyId": "llyccorp1",
                    "companyName": "LLYC - Global Analytics",
                    "id": "llyccorp1"
                }
            ]
        }
    ]
}
```

### 3.2. Listar Suites de Reportes (Listar Propiedades)

**Objetivo:** Extraer los **RSID (Report Suite IDs)**, equivalentes a las propiedades de GA4.

**Request (GET):**
```http
GET https://analytics.adobe.io/api/llyccorp1/collections/suites
Authorization: Bearer <token_valido>
x-api-key: <client_id>
x-gw-ims-org-id: 1A2B3C4D5E6F@AdobeOrg
```

**Response (JSON):**
```json
{
    "content": [
        {
            "rsid": "llyc_global_prod",
            "name": "LLYC Global - Producción",
            "currency": "EUR",
            "timezone": "Europe/Madrid"
        },
        {
            "rsid": "llyc_latam_prod",
            "name": "LLYC LatAm - Producción",
            "currency": "USD",
            "timezone": "America/Mexico_City"
        }
    ]
}
```

### 3.3. Generación de Reportes (Run Report)

**Objetivo:** Solicitar las métricas de visitas y tiempo empleado para los distintos canales de adquisición.

**Request (POST):**
Adobe 2.0 utiliza un Payload complejo en JSON para definir el reporte. Note cómo Media Impact ya ha convertido la solicitud ("source", "sessions") a "variables/referrer" y "metrics/visits".

```http
POST https://analytics.adobe.io/api/llyccorp1/reports
Authorization: Bearer <token_valido>
x-api-key: <client_id>
x-gw-ims-org-id: 1A2B3C4D5E6F@AdobeOrg
Content-Type: application/json

{
    "rsid": "llyc_global_prod",
    "globalFilters": [
        {
            "type": "dateRange",
            "dateRange": "2023-10-01T00:00:00.000/2023-10-31T23:59:59.999"
        }
    ],
    "metricContainer": {
        "metrics": [
            { "id": "metrics/visits" },
            { "id": "metrics/orders" },
            { "id": "metrics/averagetimespentonsite" }
        ]
    },
    "dimensions": [
        "variables/referrer"
    ],
    "settings": {
        "limit": 1000
    }
}
```

**Response (JSON):**
La respuesta en Adobe anida los datos iterativamente por dimensión.

```json
{
    "totalPages": 1,
    "firstPage": true,
    "lastPage": true,
    "numberOfElements": 2,
    "number": 0,
    "totalElements": 2,
    "summaryData": {
        "filteredTotals": [ 12050, 450, 185 ],
        "totals": [ 12050, 450, 185 ]
    },
    "rows": [
        {
            "itemId": "chatgpt.com",
            "value": "chatgpt.com",
            "data": [ 4500, 200, 240 ]
        },
        {
            "itemId": "perplexity.ai",
            "value": "perplexity.ai",
            "data": [ 2100, 85, 310 ]
        }
    ]
}
```

### 3.4. Parseo y Aplanado
En `adobe_service.py`, la respuesta jerárquica anterior se itera. `value` corresponde a la dimensión solicitada, y los elementos del array `data` corresponden a las métricas solicitadas (`metrics/visits`, `metrics/orders`, `metrics/averagetimespentonsite`) en estricto orden posicional, estandarizándolos para el motor de cálculos de LLYC.
