# Documentación Extendida: Peec.ai API

## 1. Descripción General
**Peec.ai** provee inteligencia sobre visibilidad algorítmica de marcas en LLMs (Modelos de Lenguaje Grande como ChatGPT, Claude, Perplexity).
El conector de Media Impact consulta sus APIs de SOV (Share of Voice) y Sentimiento para añadir capas cualitativas avanzadas a los reportes de tráfico.

---

## 2. Autenticación Exhaustiva
La API de Peec.ai protege sus endpoints mediante una autenticación sencilla pero estricta, basada en una **API Key (x-api-key)**. No emplea tokens JWT dinámicos ni flujos OAuth complejos.

### 2.1. Tipos de API Keys en Peec
Peec emite dos tipos de credenciales:
- **Company-scoped:** Tienen acceso de descubrimiento a `/projects`.
- **Project-scoped:** Tienen alcance restringido. Cuando se invoca `/projects`, devuelven un error HTTP 403 (Forbidden) con el mensaje *"Not a Company API Key"*.

### 2.2. Manejo de Cabeceras (Headers)
El token se inyecta directamente en las cabeceras HTTP de cada petición:
```json
{
    "x-api-key": "pc_live_abc123def456ghi789...",
    "Content-Type": "application/json"
}
```

---

## 3. Ejemplos de Requests y Responses

Todas las llamadas se envían hacia el endpoint base: `https://api.peec.ai/customer/v1`

### 3.1. Listar Proyectos (Properties)

**Objetivo:** Recuperar todos los proyectos registrados bajo la cuenta de Peec.

**Request (GET):**
```http
GET https://api.peec.ai/customer/v1/projects
x-api-key: pc_live_abc123def456ghi789...
```

**Response (JSON - Caso Exitoso - Company Key):**
```json
{
    "status": "success",
    "data": [
        {
            "id": "proj_a1b2c3d4",
            "name": "Proyecto LLYC Salud",
            "createdAt": "2023-08-12T10:00:00Z"
        },
        {
            "id": "proj_z9y8x7w6",
            "name": "Proyecto Retail Latam",
            "createdAt": "2023-09-01T15:30:00Z"
        }
    ]
}
```

**Response (JSON - Caso Fallido - Project Key):**
```json
{
    "status": "error",
    "message": "Not a Company API Key"
}
```
*En este último caso, el código de `peec_service.py` intercepta el 403, atrapa el error y retorna una Propiedad virtual ("Fallback") permitiendo que el reporte se ejecute sobre el único proyecto permitido por la clave.*

### 3.2. Extraer Métricas (Generación de Reporte de Dominio)

**Objetivo:** Evaluar el Share of Voice, la Visibilidad y el Sentimiento de un dominio a lo largo de un periodo de tiempo.

**Request (POST):**
```http
POST https://api.peec.ai/customer/v1/reports/domains
x-api-key: pc_live_abc123def456ghi789...
Content-Type: application/json

{
    "projectId": "proj_a1b2c3d4",
    "limit": 100
}
```

**Response (JSON):**
La respuesta condensa la información temporal u organizativa solicitada. (Ejemplo ideal de respuesta estructurada por la plataforma).
```json
{
    "status": "success",
    "data": [
        {
            "date": "2023-10-01",
            "domain": "sanitas.es",
            "visibility_score": 35.4,
            "sentiment_score": 88.2,
            "mention_count": 140,
            "share_of_voice": 12.5,
            "country": "España",
            "model_id": "gpt-4"
        },
        {
            "date": "2023-10-02",
            "domain": "sanitas.es",
            "visibility_score": 38.1,
            "sentiment_score": 89.5,
            "mention_count": 165,
            "share_of_voice": 14.1,
            "country": "España",
            "model_id": "gpt-4"
        }
    ]
}
```

### 3.3. Sistema de Mocks Inteligentes (Smart Fallback Generator)
Si la cuenta es de prueba (`api_key == "peec-temp"`) o si la API real rechaza la conexión, el servicio de Media Impact `peec_service.py` no colapsa.
En su lugar, **simula respuestas orgánicas** adaptadas al rango de fechas solicitado:

```python
# Ejemplo de lógica interna de simulación de filas de respuesta
row_data = {
    "date": "2023-10-01",
    "country": random.choice(["España", "México"]),
    "source": random.choice(["ChatGPT", "Perplexity", "Claude"]),
    "visibility_score": str(round(random.uniform(22.5, 38.0), 2)),
    "sentiment_score": str(round(random.uniform(72.0, 89.5), 2)),
    "sessions": str(random.randint(200, 1500))
}
rows.append(row_data)
```
Esto certifica que el dashboard de Traffic IA en LLYC siempre renderice correctamente, facilitando el desarrollo y las demostraciones.
