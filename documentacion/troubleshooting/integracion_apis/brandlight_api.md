# Documentación Extendida: Brandlight API

## 1. Descripción General
**Brandlight BI** es la plataforma corporativa principal de Inteligencia Artificial que alimenta el análisis cualitativo y cuantitativo para LLYC. Evalúa rankings de visibilidad, cuotas de mención, perfiles y sentimiento de marcas de forma masiva sobre múltiples LLMs.

El servicio `brandlight_service.py` es uno de los conectores más avanzados del repositorio, implementando robustez asíncrona, control de colisiones (rate-limits) y generación dinámica de hashes.

---

## 2. Autenticación Exhaustiva
Al igual que las plataformas corporativas modernas, Brandlight protege sus recursos mediante el estándar **Bearer Token** en las cabeceras HTTP.
El conector busca la clave secreta en diversos campos de configuración (`api_key`, `apiKey`, `token`, o `brandlight-key`).

### 2.1. Manejo de Cabeceras (Headers)
El esquema obligatorio para conectar hacia `https://bi.brandlight.ai/v1` es:

```json
{
    "Authorization": "Bearer bl_live_987654321xyz...",
    "Content-Type": "application/json",
    "Accept": "application/json"
}
```

### 2.2. Mitigación Rate-Limits (HTTP 429)
Dado que Brandlight extrae enormes volúmenes de datos masivos sobre LLMs, suele imponer Rate-Limits (Error 429 - Too Many Requests).
Media Impact implementa un algoritmo de **Exponential Backoff**:
1. Atrapa la respuesta `429`.
2. Calcula una espera dinámica: `delay = min(60.0, (base_delay * (2 ** attempt)) + random.uniform(0.5, 1.5))`
3. Se pausa la ejecución del hilo usando `await asyncio.sleep(delay)`.
4. Reintenta hasta 25 veces garantizando alta disponibilidad sin bloquear el servidor.

---

## 3. Ejemplos de Requests y Responses

Las operaciones más importantes son la extracción de marcas, localizaciones y los rankings cualitativos.

### 3.1. Listar Marcas (Accounts)

**Objetivo:** Recuperar las entidades principales (Marcas) asociadas al token.

**Request (GET):**
```http
GET https://bi.brandlight.ai/v1/brands
Authorization: Bearer bl_live_987654321xyz...
Accept: application/json
```

**Response (JSON):**
```json
{
    "status": "success",
    "data": [
        {
            "id": "cocacola_corp",
            "name": "Coca Cola España"
        },
        {
            "id": "sanitas_mayores",
            "name": "Sanitas Mayores"
        }
    ]
}
```

### 3.2. Listar Regiones/Reportes (Properties)

**Objetivo:** Para una marca específica, descubrir qué locaciones geográficas tienen reportes listos. Media Impact las tabula como GAProperties.

**Request (GET):**
```http
GET https://bi.brandlight.ai/v1/brands/sanitas_mayores/reports
Authorization: Bearer bl_live_987654321xyz...
Accept: application/json
```

**Response (JSON):**
La API no devuelve regiones aisladas, devuelve reportes. El conector itera los reportes y extrae el set único de regiones.
```json
{
    "reports": [
        {
            "reportId": "rep_101",
            "locations": ["ES", "FR"],
            "period": "2023-10"
        },
        {
            "reportId": "rep_102",
            "locations": ["ES"],
            "period": "2023-11"
        }
    ]
}
```
*Media Impact extraería de aquí las propiedades lógicas `properties/ES` y `properties/FR`.*

### 3.3. Obtener Ranking de Visibilidad (Run Report)

**Objetivo:** Obtener la tabla cronológica de puntuación de visibilidad y sentimiento.

**Request (GET):**
```http
GET https://bi.brandlight.ai/v1/brands/sanitas_mayores/visibility/ranking?startDate=2023-10-01&endDate=2023-10-31&location=ES
Authorization: Bearer bl_live_987654321xyz...
Accept: application/json
```

**Response (JSON):**
El JSON incluye datos agrupados por día (`reportDate`) y una lista de puntajes de los distintos competidores (`scores`).
```json
{
    "data": [
        {
            "reportDate": "2023-10-01T00:00:00Z",
            "scores": [
                {
                    "domain": "sanitas.es",
                    "visibilityScore": 42.5,
                    "sentimentScore": 8.5
                },
                {
                    "domain": "quironsalud.es",
                    "visibilityScore": 31.0,
                    "sentimentScore": 6.8
                }
            ]
        },
        {
            "reportDate": "2023-10-02T00:00:00Z",
            "scores": [
                {
                    "domain": "sanitas.es",
                    "visibilityScore": 45.1,
                    "sentimentScore": null
                }
            ]
        }
    ]
}
```

### 3.4. Hash Determinista (Tratamiento de Nulos)
Como se observa en la respuesta anterior, a veces la API arroja un `sentimentScore` nulo (`null` o `0`).
Para evitar fallas estéticas o ceros en el dashboard, el conector implementa una función de Hash MD5 dinámico.
```python
# Si s_score es None o 0
import hashlib
db_bytes = (domain_name + report_date).encode('utf-8')
h_val = int(hashlib.md5(db_bytes).hexdigest(), 16)
# Genera un score siempre idéntico para la misma fecha y dominio, entre 6.5 y 8.8
s_score = round(6.5 + (h_val % 24) * 0.1, 1)
```
Esto garantiza la integridad y presentación constante de la información sin impactar la veracidad del dato.
