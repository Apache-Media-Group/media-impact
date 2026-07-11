# Mejoras en entorno de testeo local

**Fecha**: 2026-07-08
**Tema**: test-local-improvements

## Contexto y Problema
El entorno local levantado por `test_local.sh` presentaba dos problemas importantes al probar nuevas implementaciones en React + FastAPI:
1. El backend devolvía errores `403 Missing or insufficient permissions` a la hora de consultar Firestore con las cuentas corporativas `@llyc.global` porque el usuario per-se no tiene permisos directos sobre `llyc-ai-first-core`, sino que el servicio requiere la Service Account para la base de datos.
2. Procesos residuales (zombies) en los puertos 3000 y 8080 no permitían ver los cambios actuales si el script se interrumpía bruscamente, mostrando versiones cacheadas o antiguas.
3. No había visibilidad de los logs del backend y frontend simultáneamente en tiempo real.

## Solución e Implementación
- Se introdujo un paso previo de "limpieza" (`lsof` + `kill -9`) de los puertos 3000 y 8080.
- Se implementó la auto-verificación y validación de `gcloud auth application-default login` para asegurar que las peticiones se firman en base a la identidad corporativa.
- Se restauró la exportación temporal de `GOOGLE_APPLICATION_CREDENTIALS` hacia la Service Account de pruebas (`media-impact-test-keys.json`) durante la ejecución local para dotar al backend de acceso de lectura a Firestore.
- Se añadió un seguimiento en tiempo real (`tail -f`) de los logs de ambos servicios (`backend.log`, `frontend.log`) al final del script, capturando señales de interrupción (`SIGINT`, `SIGTERM`) para apagar limpiamente todos los servicios generados por el bash.

## Verificación
- El comando `npm run build` en el frontend finaliza con éxito.
- El servidor backend y frontend levantan en entornos limpios mostrando los logs en tiempo real.
- El Dashboard Admin es capaz de leer la lista de tenants en Firestore.
