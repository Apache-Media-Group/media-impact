# Diccionario de Datos Legacy (AIMA 2.0)

Este documento detalla el diccionario de datos de las variables que se extraen de las distintas APIs (Google Analytics 4, Adobe Analytics, Peec.ai, Brandlight) en el repositorio **AIMA 2.0**. Muestra cómo las dimensiones y métricas estándar de MCP (basadas en GA4) se mapean a los sistemas correspondientes.

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

## 4. Brandlight

En la arquitectura de AIMA 2.0, el servicio de Brandlight (`brandlight_service.py`) funciona con un conector estructurado bajo la misma interfaz `AnalyticsService`, preparado para recibir o simular dimensiones y métricas alineadas al estándar del MCP, principalmente utilizando las métricas base del mercado o placeholders de su propia API.

*Nota:* En la versión de AIMA, el diccionario explícito de Brandlight se adapta dinámicamente según la consulta o expone arreglos genéricos para propósitos de demostración/placeholder, esperando inyección de campos propios en versiones productivas.
