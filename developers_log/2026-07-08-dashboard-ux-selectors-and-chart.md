# Dashboard UX Improvements (2026-07-08)

## 📌 Contexto
Durante la revisión de usabilidad del dashboard, se identificaron varios requerimientos relacionados con la forma de seleccionar y visualizar el origen de los datos de tráfico y el rendimiento de los motores IA.

## 🛠️ Modificaciones Realizadas

### 1. Separación de Selectores de Origen (General Analytics vs AI Analytics)
- **Archivo:** `frontend/src/components/DashboardLayout.tsx`
- **Cambio:** Se separó el selector único de "Origen" en dos selectores distintos: "General Analytics" (GA4, Adobe Analytics) y "AI Analytics" (Peec.ai, Brandlight). Ambos alimentan el estado global pero ofrecen una mejor organización visual al usuario.

### 2. Responsividad de las Etiquetas de Origen
- **Archivo:** `frontend/src/App.tsx`
- **Cambio:** La etiqueta de "Rendimiento por motor IA" que antes tenía "GA4" quemado en código duro (hardcoded), ahora es dinámica basándose en la variable `trafficSource`. Si se selecciona Adobe, mostrará el tag en colores Navy, en lugar de los colores Teal para GA4, emparejándose con el resto de las tarjetas KPI.

### 3. Doble Eje para Gráfico de Evolución de Tráfico IA
- **Archivo:** `frontend/src/App.tsx`
- **Cambio:** Se configuró Chart.js para renderizar un eje `y` (izquierdo, sesiones totales) y un eje `y1` (derecho, sesiones IA) en el gráfico "Evolución tráfico IA". Esto permite visualizar de manera independiente ambas métricas a pesar de su inmensa diferencia de escala numérica, garantizando que el tráfico IA no se vea como una línea completamente plana.

## ✅ Verificación y Pruebas (Pre-Push)
- [x] Modificación exitosa del componente `DashboardLayout.tsx` para agregar selectores.
- [x] Refactorización en `App.tsx` para habilitar tags dinámicos y gráfico `line` de doble eje.
- [x] Ejecución y análisis de diferencias con `git diff HEAD`.
- [x] Compilación exitosa del frontend (`npm run build`) en `dist/media-impact/`.
- [x] (Backend no tocado en este commit).

## 📦 Plan de Despliegue
Tras el commit de estos archivos, se iniciará el despliegue automático del frontend a Firebase Hosting a través de GitHub Actions.
