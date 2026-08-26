# DevLog: UX Audit Enhancements & React DOM Reconciliation Fix

- **Fecha**: 2026-08-26
- **Autor/Agente**: Antigravity Assistant
- **Sprint/Contexto**: Auditoría UX/UI, optimizaciones táctiles/responsivas y resolución de fallo de reconciliación DOM en transiciones de vista de inquilino.

---

## 1. Objetivos del Sprint

1. Ejecutar mejoras de diseño y accesibilidad identificadas en la auditoría UX:
   - Dimensionamiento de targets táctiles a un mínimo de 36px–44px en selectores y botones de tooltip.
   - Restricciones y validaciones de rango de fechas (`min`/`max`) en el selector de periodo.
   - Incorporación de pantallas esqueleto (Skeleton Screens) responsivas durante la carga inicial en el dashboard y panel de administración.
   - Ajustes de `viewport-fit=cover` para dispositivos móviles con notch y estilización de barras de scroll horizontal (`height: 6px`).
2. Diagnosticar y resolver el fallo crítico de reconciliación de React (`Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node`) al navegar a un dashboard de inquilino específico.

---

## 2. Diagnóstico y Causa Raíz (DOM Reconciliation Crash)

- **Causa Raíz**:
  1. Durante la transición entre la pantalla de carga de verificación de credenciales (`authLoading` / `verifyingAccess`) y la pantalla de login de cliente (`ClientLoginScreen`) o el dashboard (`DashboardLayout`), React 18/19 encontraba el mismo tipo de elemento raíz (`<div className="fixed inset-0 bg-[#060c18] ...">`) sin una propiedad `key` explícita y única.
  2. Al no poseer `key`, el reconciliador de React intentaba reutilizar y mutar en sitio los nodos DOM hijos (un spinner y un párrafo de texto) para convertirlos en la estructura de formulario o dashboard.
  3. En entornos con extensiones de navegador o ciclos de reconciliación rápida, la manipulación de nodos de texto provocaba un desajuste en el árbol de Fiber de React, disparando el error `removeChild` al intentar desacoplar elementos huérfanos.
  4. Adicionalmente, el contenedor de gráficos en `ChartWidget.tsx` alternaba entre un mensaje de texto plano y el elemento canvas de Chart.js dentro del mismo nodo padre sin separación de ciclo de vida.

---

## 3. Soluciones Implementadas

1. **Claves de Reconciliación Explícitas (`App.tsx` & `ClientLoginScreen.tsx`):**
   - Se asignaron propiedades `key` únicas a cada vista condicional del árbol principal:
     - `key="auth-verifying-screen"`
     - `key="client-login-view"`
     - `key="welcome-screen-view"`
     - `key="admin-panel-view"`
     - `key="dashboard-main-view"`
   - En `ClientLoginScreen.tsx`, se asignaron `key="client-access-denied-view"`, `key="client-2fa-verify-view"` y `key="client-login-form-view"`.
2. **Estabilización de Componente de Gráficos (`ChartWidget.tsx`):**
   - Se reestructuró el contenedor del canvas para mantener un anclaje DOM constante y desacoplar el estado de "sin datos" sin alterar el árbol del canvas de Chart.js.
3. **Protección de Nodos DOM (`index.html`):**
   - Se incorporó `class="notranslate"` y metadatos de protección contra traductores automáticos de navegadores para evitar alteraciones de texto directas sobre el DOM gestionado por React.
4. **Mejoras UX/UI:**
   - Skeleton screen loaders implementados en `AnalyticsDashboardView.tsx` y `TenantTable.tsx`.
   - Restricción de selección de fechas a la fecha actual (`max={todayStr}`) y coherencia `min`/`max` entre fechas de inicio y fin en `DashboardLayout.tsx`.
   - Limpieza de estilos inline en `TopicsCard.tsx` migrando `@keyframes shimmer` a `frontend/src/index.css`.
   - Barras de scroll táctiles responsivas con `custom-scrollbar` y padding optimizado en tablas (`MotorPerformanceTable.tsx`, `UrlsTable.tsx`).

---

## 4. Verificaciones de Calidad

- **Frontend Build (`npm run build`):** Compilación exitosa sin errores de TypeScript ni empaquetado.
- **Frontend Test Suite (Vitest):** 10/10 tests pasados exitosamente.
- **Backend Syntax Check (`python3 -m py_compile`):** 0 errores de sintaxis en todos los módulos Python.
- **Backend Test Suite (Pytest):** 29/29 tests pasados exitosamente.
- **Validación Visual Local:** Verificada por el usuario en `http://localhost:3000/media-impact/?tenant=<tenant-slug>` confirmando navegación fluida y sin fallos en el DOM.
