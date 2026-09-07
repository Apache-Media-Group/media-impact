# Diccionario de Datos Actual (Media Impact)

Este documento detalla el diccionario de datos de las variables que se extraen de las distintas APIs (Google Analytics 4, Adobe Analytics, Peec.ai, Brandlight) en el repositorio actual **Media Impact**. Muestra cómo las dimensiones y métricas estándar de MCP (basadas en GA4) se mapean a los sistemas correspondientes.

---

## 1. Google Analytics 4 (GA4)

GA4 actúa como el estándar base de la herramienta. Los nombres de las variables se envían tal cual a la API oficial (`BetaAnalyticsDataClient`).

### Dimensiones (Dimensions)
*   **`date`**: Fecha de la sesión/evento.
*   **`pagePath`**: Ruta de la página vista.
*   **`landingPagePlusQueryString`**: URL de destino (Landing Page) con parámetros.
*   **`city`**, **`country`**, **`region`**: Ubicación geográfica del usuario.
*   **`deviceCategory`**: Tipo de dispositivo (Desktop, Mobile, Tablet).
*   **`sessionSource`**: Fuente de tráfico (e.g., chatgpt.com, google, direct).
*   **`sessionMedium`**: Medio de adquisición (e.g., referral, organic).
*   **`sessionCampaignName`**: Nombre de la campaña.
*   **`customEvent:<nombre>`**: Dimensiones personalizadas configuradas en GA4.

### Métricas (Metrics)
*   **`sessions`**: Número total de sesiones.
*   **`activeUsers`** / **`totalUsers`**: Usuarios activos/totales únicos.
*   **`screenPageViews`**: Número de páginas/pantallas vistas.
*   **`eventCount`**: Conteo total de eventos.
*   **`conversions`**: Eventos marcados como conversiones.
*   **`totalRevenue`**: Ingresos totales registrados.
*   **`userEngagementDuration`**: Tiempo en segundos con la web en primer plano.
*   **`bounceRate`**: Tasa de rebote (0.0 a 1.0).
*   **`engagementRate`**: Tasa de interacción (0.0 a 1.0).

---

## 2. Adobe Analytics

Para Adobe Analytics, la herramienta realiza un "traductor" (mapping) interno para convertir el estándar de variables de GA4 a los elementos nativos de Adobe (`variables/` y `metrics/`).

### Mapeo de Dimensiones
*   `date` $\rightarrow$ **`variables/daterangeday`**
*   `pagePath` / `pageTitle` $\rightarrow$ **`variables/page`**
*   `landingPagePlusQueryString` $\rightarrow$ **`variables/entrypage`**
*   `city` $\rightarrow$ **`variables/geocity`**
*   `country` $\rightarrow$ **`variables/geocountry`**
*   `region` $\rightarrow$ **`variables/georegion`**
*   `deviceCategory` $\rightarrow$ **`variables/mobiledevicetype`**
*   `sessionSource` $\rightarrow$ **`variables/referrer`**
*   `sessionMedium` $\rightarrow$ **`variables/referringdomain`**
*   `sessionCampaignName` $\rightarrow$ **`variables/campaign`**
*   `channel` $\rightarrow$ **`variables/lasttouchchannel`**
*   `language` $\rightarrow$ **`variables/language`**

### Mapeo de Métricas
*   `screenPageViews` / `screenPageViewsPerSession` $\rightarrow$ **`metrics/pageviews`**
*   `activeUsers` / `sessions` / `totalUsers` $\rightarrow$ **`metrics/visits`**
*   `eventCount` $\rightarrow$ **`metrics/occurrences`**
*   `conversions` / `sessionConversionRate` $\rightarrow$ **`metrics/orders`** *(O métrica personalizada si se pasa `adobe_conversion_metric` en credenciales)*.
*   `totalRevenue` / `revenue` / `averagePurchaseRevenue` $\rightarrow$ **`metrics/revenue`**
*   `bounceRate` $\rightarrow$ **`metrics/bouncerate`**
*   `engagementRate` $\rightarrow$ **`metrics/entries`**
*   `userEngagementDuration` $\rightarrow$ **`metrics/averagetimespentonsite`**

---

## 3. Peec.ai

Peec.ai es una herramienta enfocada en SOV (Share of Voice) y posicionamiento en LLMs (Modelos de Lenguaje Grande). 

### Dimensiones Principales
*   **`date`**: Fecha de la medición.
*   **`model_id`**: Identificador del LLM (ej. gpt-4, claude-3).
*   **`tag_id`**: Etiqueta o categoría de búsqueda.
*   **`country_code`**: Código de país analizado.
*   **`brand`**: Nombre de la marca analizada.

### Métricas Principales
*   **`mention_count`**: Cantidad de veces que el modelo menciona la marca.
*   **`visibility`**: Índice general de visibilidad algorítmica.
*   **`share_of_voice`**: Porcentaje de presencia de la marca vs competidores.
*   **`sentiment`**: Calificación de sentimiento del texto generado.
*   **`position`**: Puesto/Ranking en las recomendaciones o respuestas del LLM.

---

## 4. Brandlight BI
 
El servicio de Brandlight en `media_impact` funciona como un conector estructurado bajo la interfaz `AnalyticsService`, preparado para ingerir dimensiones y métricas alineadas al estándar de visibilidad y sentimiento de marca en motores de IA (LLMs) directamente desde su API oficial y Google BigQuery.

### Dimensiones Principales
* **`date`**: Fecha de análisis.
* **`domain`**: Dominio de la marca o competidor monitorizado.
* **`engine`**: Motor de IA evaluado (ChatGPT, Gemini, Perplexity, Copilot, Claude).
* **`topic`**: Temática clave o categoría analizada.

### Métricas Principales
* **`visibility_score`**: Índice cuantitativo de presencia de la marca en respuestas generadas (0-100).
* **`sentiment_score`**: Calificación semántica y reputacional (0-10).
* **`share_of_voice`**: Porcentaje de impacto relativo frente al grupo competitivo.

---

## 5. Esquema de Tráfico IA de Alta Intención (Battle of AIs & E-commerce)

Mapeo estructurado expuesto en `/analytics/run-report` y `/analytics/traffic-ia` (`battle_of_ais`):

| Campo | Tipo | Fuente | Descripción |
| :--- | :--- | :--- | :--- |
| **`platform`** | `string` | Regex unificado | Nombre normalizado del motor de IA (`ChatGPT`, `Gemini`, `Perplexity`, `Copilot`, `Claude`). |
| **`sessions`** | `integer` | GA4 / Adobe | Volumen de visitas referidas directamente por el motor. |
| **`avg_duration`** | `string` | GA4 / Adobe | Duración media formateada (`MM:SS` o `Xs`). |
| **`raw_avg_duration_sec`** | `float` | GA4 / Adobe | Duración media en segundos en punto flotante para cálculo de fricción. |
| **`engagement_score`** | `float` | Cálculo canónico | Puntuación Sniper Score de 0 a 100 basada en conversión y fricción logarítmica. |
| **`landing_pages`** | `array` | GA4 / Adobe | Top 5 URLs de aterrizaje recomendadas (`url`, `sessions`, `share`, `avg_duration`). |
| **`purchase_count`** | `integer` | GA4 (`purchase`) / Adobe (`orders`) | Pedidos o transacciones comerciales confirmadas procedentes del motor. |
| **`purchase_revenue`** | `float` | GA4 (`purchaseRevenue`) / Adobe (`revenue`) | Facturación total generada por el tráfico del motor. |
| **`purchase_rate`** | `string` | Ratio calculado | Tasa de conversión de compras (`(purchase_count / sessions) * 100`). |

