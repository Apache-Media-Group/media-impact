# Developer Log — Tenant Preview Fix & Whitelist Ingestion Sprint

**Fecha**: 2026-07-01  
**Tema**: Resolución de Renderizado en Modo Vista Previa y Alta de Usuarios de Inquilino  
**Autor**: Antigravity AI (Google DeepMind Team)  

---

## 🚀 1. Hitos Técnicos Logrados

Este sprint solucionó de forma definitiva los errores de visualización de tableros de control vacíos durante el modo de suplantación/vista previa por parte del Superadministrador, y estableció las directrices seguras de acceso para los usuarios finales de inquilinos de marca blanca.

1. **Simulación de Conexión Local Segura (`GAService`)**:
   - Implementación del parámetro opcional `is_local` en `GAService` para simular llamadas administrativas OAuth sin realizar peticiones de red reales ni requerir credenciales de Google API.
2. **Orquestación de Simulación en el Frontend**:
   - Integración de la actualización de estado del hook `useAnalytics` al iniciar el modo vista previa en el panel de administrador.
   - Forzado de la conexión simulada `'local'` y la propiedad `'bigquery-fact'` para activar de manera segura el flujo de lectura de datos unificados desde BigQuery en el endpoint `/run-report`.
3. **Restauración Automática de Entorno**:
   - Configuración de dependencias reactivas y Route Guards para limpiar de forma segura el modo vista previa al regresar al panel administrativo, restableciendo automáticamente la visualización y las propiedades originales por defecto.
4. **Registro de Usuarios de Inquilino en Firestore**:
   - Whitelisteo automatizado del dominio corporativo `@sanitas.es` y `@sanitas.com` y correos directos de prueba en el documento de configuración de Firestore, permitiendo el login seguro y la validación de 2FA para el personal del cliente.

---

## 🛠️ 2. Detalles de Implementación y Solución de Errores

### Inicialización Forzada de Orígenes de Datos en Vista Previa
Al saltarse la pantalla de bienvenida (`WelcomeScreen`) durante la suplantación de inquilino, el hook `useAnalytics` carecía de estados de origen de datos, abortando la consulta por defecto. Se inyectaron los parámetros simulados de forma transparente durante el salto:

```typescript
// App.tsx -> handlePreviewTenant
updateState({
  tenant_id: data.tenant_id,
  connection_id: 'local',
  property_id: 'bigquery-fact'
});
```

Y en el backend, la fábrica de dependencias intercepta la conexión `'local'` y retorna el cliente simulado:

```python
# dependencies.py -> get_analytics_service
elif connection_id == "local":
    from app.services.mcp_analytics.ga_service import GAService
    return GAService(credentials=None, is_local=True)
```

---

## 📊 3. Resultados de Verificación de Integración Continua (CI/CD)

El pipeline de despliegue unificado de GitHub Actions (`Deploy LLYC Intelligence Dashboard`) finalizó en un **éxito total (verde)** con las siguientes ejecuciones:

* **🔍 Detect Changes**: Completado con éxito en **7s** (ID `84485529357`).
* **🚀 Deploy Backend to Cloud Run**: Compilación de Docker remota y despliegue exitoso en GCP en **4m 13s** (ID `84485560345`).
* **🎨 Deploy Frontend to Firebase Hosting**: Compilación en caliente e inyección CDN de producción en **31s** (ID `84486326136`).
* **Verificación de Firestore**: Registros actualizados con éxito en el proyecto `llyc-ai-first-core` para autorizar accesos.
