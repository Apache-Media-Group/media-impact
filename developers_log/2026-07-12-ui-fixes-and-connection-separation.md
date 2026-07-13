# 2026-07-12: UI Fixes and Connection State Separation

## Resumen de la Tarea
Se reportaron dos problemas principales en el dashboard:
1. Al seleccionar "Brandlight" en el selector de orígenes, desaparecían las opciones de la compañía, suite y segmentos, y los segmentos que quedaban (mercados) aparecían vacíos.
2. Los números grandes en las tarjetas (KpiCards) se truncaban con puntos suspensivos en lugar de mostrarse completos o reducir su tamaño.

## Cambios Implementados

### 1. Desacoplamiento de Selectores de Conexión (Frontend)
- **Problema:** Tanto el selector de Analítica General (Adobe/GA4) como el de Analítica de IA (Brandlight/Peec) compartían el mismo estado `state.connection_id` en `AnalyticsState`. Al cambiar la fuente de IA, se sobreescribía la conexión general, lo que provocaba que la aplicación intentara cargar datos (como segmentos) para un origen que no era Adobe, vaciando los dropdowns y mostrando selectores de mercado por defecto.
- **Solución:** 
  - Se modificó `src/types/index.ts` para introducir un nuevo estado `ai_connection_id` en `AnalyticsState`.
  - Se actualizó `src/components/DashboardLayout.tsx` (`FilterBar`) para que el selector de *AI Analytics* lea y actualice `ai_connection_id` en lugar de `connection_id`.
  - En `src/App.tsx`, se refactorizó la lógica de autoselección inicial (`useEffect`) para que asigne independientemente la primera conexión general válida a `connection_id` y la primera conexión de IA válida a `ai_connection_id`.

### 2. Ajuste Visual en Tarjetas KPI (Frontend)
- **Problema:** En `src/components/KpiCard.tsx`, los valores numéricos largos (ej. 2.042.786) usaban la clase `truncate` de Tailwind, lo que resultaba en la aparición de puntos suspensivos ("2.042.7...") cuando el texto superaba el ancho del contenedor.
- **Solución:**
  - Se eliminó la clase `truncate` del contenedor del valor numérico.
  - Se añadieron las clases `break-all` y `leading-none` al `span` que envuelve el valor. Esto asegura que si el número es excesivamente largo, incluso después de que las clases dinámicas de tamaño de texto (`valueSizeClass`) lo reduzcan, el número hará un salto de línea en lugar de ocultarse con elipsis.
  - Se mejoró el contenedor del `label` y `source` añadiéndole `flex-wrap` y `break-words` para permitir que los títulos largos también se ajusten al ancho de la tarjeta sin desbordarse.

### 3. Corrección de Error 500 en Mock de Brandlight (Backend)
- **Problema:** El backend lanzaba un error 500 al intentar obtener la configuración de Brandlight desde `dependencies.py` si se usaba el connection ID `brandlight-temp`, lo que causaba un fallo en cascada al cargar los dropdowns.
- **Solución:** Se añadió explícitamente el soporte para el mock de `brandlight-temp` en el factory `get_analytics_service` dentro de `backend/app/services/mcp_analytics/routes/dependencies.py`, importando correctamente la clase `BrandlightService`.

## Resultados y Validación
- El servidor local compila correctamente el frontend y el backend.
- La selección de un origen de IA ya no interfiere con los filtros específicos de la plataforma general subyacente (por ejemplo, los segmentos específicos de Adobe Analytics persisten).
- Los números de alta longitud se muestran en su totalidad dentro de las KpiCards ajustando el tamaño y permitiendo el quiebre de línea si es necesario.
