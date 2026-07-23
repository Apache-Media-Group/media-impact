# Developer Log: Refactorización de PEEC API, Temáticas y Visibilidad Unbranded

**Fecha:** 2026-07-23
**Autor:** Antigravity (IA)
**Contexto:** Se detectaron tres incidencias principales al visualizar los datos de "Vidal & Vidal": 
1. Los datos obtenidos de Peec.ai pertenecían a otro cliente (Avianca) debido a una selección hardcodeada del primer índice de proyectos.
2. Los dominios "Unbranded" (Visibilidad Orgánica) estaban incluyendo sitios propiedad de la marca ("Owned").
3. Las métricas de "Temáticas clave" se mostraban en cero, estaban divididas arbitrariamente en dos tarjetas, y carecían de impacto visual.

## Modificaciones Implementadas

### 1. Corrección en Ingesta de Peec.ai (Backend)
- **Archivo modificado:** `backend/app/services/mcp_analytics/etl_service.py`
- **Cambio:** Se reemplazó la lógica que seleccionaba `peec_props[0].name` por defecto. Se implementó un algoritmo heurístico que recorre todos los proyectos (ej. 103 proyectos) y realiza un emparejamiento (match) parcial utilizando el `tenant_id` ("vidal") contra el `display_name` del proyecto de PEEC.

### 2. Extracción de Métricas Reales de Temas (Backend)
- **Archivo modificado:** `backend/app/services/mcp_analytics/peec_service.py`
- **Cambio:** Cumpliendo estrictamente con la política de **Cero Mocks**, se investigó la documentación de Peec.ai y se actualizó `fetch_topics` para que, tras obtener el listado de IDs, consulte el endpoint analítico `/reports/brands` usando la dimensión `topic_id`. Esto nos permite obtener el `mention_count` volumétrico real y asignarlo como `priority_score`.

### 3. Filtrado "Unbranded" Estricto (Frontend)
- **Archivo modificado:** `frontend/src/App.tsx`
- **Cambio:** Se actualizó la lógica de la gráfica "Visibilidad unbranded — top 5" para aplicar el filtro `.filter((c: any) => c.classification?.toLowerCase() !== 'owned')`. Así garantizamos que solo se exponga en esta tabla el Share of Voice ganado (Earned/UGC).

### 4. Rediseño Premium y Unificación de Temáticas (Frontend)
- **Archivos modificados:** `frontend/src/App.tsx`, `frontend/src/components/TopicsCard.tsx`
- **Cambio:** Se combinaron los arrays de `topics_pr` y `topics_digital` en un módulo único llamado **"Temáticas clave — Impacto en IA"**. Se rediseñó por completo `TopicsCard.tsx` aplicando principios de UI modernos: fondos *glassmorphism*, barras proporcionales dinámicas relativas al score máximo obtenido, y micro-animaciones (shimmer y pulse) para realzar el aspecto técnico y premium de la plataforma.

## Validaciones
- Compilación de Frontend y Backend superadas (`npm run build`, `py_compile`).
- Despliegue CI/CD en Google Cloud Run y Firebase Hosting ejecutado exitosamente sin errores de dependencias.
