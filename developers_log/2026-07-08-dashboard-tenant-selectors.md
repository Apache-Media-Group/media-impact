# Corrección de Selectores de Servicios IA y Analytics (2026-07-08)

## 📌 Contexto
Durante la validación de la interfaz de usuario en producción, se observó que la lista desplegable de **AI Analytics** y **General Analytics** incluía elementos genéricos de prueba ("Test Sandbox") a pesar de no estar configurados por el tenant actual. Adicionalmente, el servicio de "Brandlight" estaba ausente de las opciones.
El requerimiento establecía que únicamente deben mostrarse los servicios que el tenant en curso tiene activados (basado en sus credenciales en `tenant.configured_secrets`).

## 🛠️ Modificaciones Realizadas

### Limpieza de Selectores en Tiempo de Ejecución (Frontend)
- **Archivo:** `frontend/src/App.tsx`
- **Cambio:** Se eliminaron del estado inicial de `connections` los valores por defecto de "Test Sandbox", manteniendo únicamente `GA4` (como fallo seguro predeterminado o fallback).
- **Cambio:** Se actualizó el hook dinámico `useEffect` que monitorea el cambio de `tenant`. 
  - Se eliminaron las sentencias `else` que incluían forzosamente opciones de "Test Sandbox" a nivel interfaz.
  - Se incluyó condicionalmente la integración de Brandlight mapeando la llave `brandlight-key` presente en los secretos del tenant, permitiendo que la interfaz finalmente le ofrezca dicha opción de visibilidad bajo la categoría AI Analytics.

## ✅ Verificación y Pruebas (Pre-Push)
- [x] Ejecución y análisis de diferencias con `git diff HEAD`.
- [x] Compilación limpia del frontend (`npm run build`) en `dist/media-impact/`.
- [x] Registro y confirmación en log de desarrollo en formato `.md`.

## 📦 Plan de Despliegue
Tras el commit de estos archivos, se iniciará el despliegue automático del frontend a Firebase Hosting.
