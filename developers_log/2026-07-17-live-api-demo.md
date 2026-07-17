# 2026-07-17: LIVE API (DEMO) y Corrección de Manejo de Propiedades

## Hitos Logrados
- Implementación de la funcionalidad "LIVE API (DEMO)" en el Panel de Administración Global.
- Esta opción permite a los administradores visualizar el Dashboard cargando los datos directamente de las APIs originales (Google Analytics, Adobe, Peec.ai, Brandlight) bypasseando completamente BigQuery.
- Se agregó el botón con estado "live_api" en el frontend para comunicar esta solicitud al backend.

## Errores Resueltos (Troubleshooting)
- **Error 500 "Algo ha salido mal" en Live API**: El frontend experimentaba un crash total al desmontarse el DOM tras un error 500 originado en el backend y agravado por la inyección de etiquetas `<font>` de herramientas de traducción en el cliente.
- Se resolvió un error de Pydantic al no estar definido `live_api` en `RunReportRequest` (`core_models.py`).
- Se corrigieron excepciones de tipo `AttributeError` (`'NoneType' object has no attribute 'split'`) en `ga_service.py`, `peec_service.py` y `brandlight_service.py`. Estas ocurrían debido a que las cuentas "temporales" de prueba iniciaban sin el string `property_id` asignado.
- Se refactorizaron los reportes en el backend para suministrar strings fallback explícitos a `RunReportResponse` garantizando estabilidad.

## Verificaciones
- El frontend compila exitosamente (`npm run build`).
- Los conectores modificados superan el chequeo de sintaxis de Python sin arrojar errores.
- Los logs de compilación locales han sido validados.
