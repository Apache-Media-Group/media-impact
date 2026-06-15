# LLYC Intelligence Dashboard — Manual de Superadministrador (LLYC)

Este manual de operaciones está destinado exclusivamente a los consultores y administradores de **LLYC** autorizados para gestionar la plataforma multi-tenant **LLYC Intelligence Dashboard 2026**. 

Desde esta consola administrativa, centralizarás el alta de clientes, la personalización de marca blanca (colores/logotipos), la administración encriptada de credenciales en GCP Secret Manager y el monitoreo operacional de los procesos de ingesta ETL.

---

## 🔐 1. Cómo Acceder al Panel de Superadministración

El acceso a la consola de administración está estrictamente blindado mediante **Google OAuth corporativo** y un **Guardia de Ruta (Route Guard) criptográfico** en el frontend:

1. Ve a la URL de producción:  
   👉 **`https://media-impact-llyc.web.app/`**
2. Haz clic en el botón: **`Admin`** (Acceso exclusivo para consultores de LLYC).
3. Se abrirá la ventana emergente de autenticación de Google de Firebase. **Selecciona tu cuenta corporativa de LLYC (`@llyc.global` o `@llyc.ai`)**.
4. **Verificación de Seguridad**:
   - Si inicias sesión con una cuenta que no pertenece al dominio corporativo, el sistema **cerrará automáticamente tu sesión en Firebase, te expulsará a la landing page** e impedirá el renderizado.
   - Si tu cuenta es válida, accederás de inmediato a la consola en: **`https://media-impact-llyc.web.app/#admin`**.

> 🛡️ *Nota de Ciberseguridad: Si un usuario intenta saltarse la seguridad e ingresar escribiendo directamente la URL `/#admin` en su navegador, el Route Guard del frontend interceptará la petición, borrará el hash de la URL, lo expulsará de inmediato a la raíz y desplegará una alerta de acceso denegado.*

---

## 📂 2. Módulo de Gestión de Clientes (Tab: 'Gestión de Clientes')

Esta es la sección principal donde darás de alta y configurarás el portal para tus clientes de LLYC.

### A. Dar de alta un Nuevo Cliente (Tenant)
1. En la parte superior derecha, haz clic en **`Crear Nuevo Cliente`**.
2. Rellena los campos del formulario de marca:
   * **ID del Cliente (Tenant ID)**: Identificador único en minúsculas y sin espacios (ej: `sanitas`, `cocacola`). **Este ID es el Workspace que el cliente escribirá para ingresar.**
   * **Nombre Comercial**: Nombre visible en las pantallas de login y reportes (ej: `Sanitas España`).
   * **Color Primario y Secundario**: Introduce los códigos hexadecimales oficiales de tu cliente (ej: `#0070B0`) o haz clic en el **selector de color interactivo** para elegirlo visualmente en caliente.
   * **Email de Soporte**: Email de contacto de TI para ese cliente específico (ej: `soporte.sanitas@llyc.global`).
3. Haz clic en **`Guardar Marca`**.
4. El backend en Cloud Run recibirá los datos y los guardará directamente en la colección `tenants` de **Google Firestore** de producción de forma transparente.

### B. Subir el Logotipo Oficial a Google Cloud Storage (GCS)
Para que el logotipo del cliente se cargue a la velocidad del rayo y esté resguardado de forma profesional:
1. En el mismo formulario de creación/edición de cliente, ubica el campo **`Logotipo del Cliente`**.
2. Escribe una URL directa si ya la tienes, o haz clic en **`Subir Archivo`**.
3. Selecciona el archivo de logotipo (admite formatos vectoriales `.svg` de alta calidad o imágenes `.png`).
4. Al seleccionarlo, el backend subirá el archivo directamente a un bucket público seguro de **Google Cloud Storage (`gs://llyc-mcp-public-assets/logos/...`)**, renombrándolo con el ID del cliente.
5. El sistema te devolverá la URL CDN pública de Google de forma inmediata (ej: `https://storage.googleapis.com/.../sanitas.svg`) y la guardará en Firestore, mostrándote una **vista previa en miniatura de cómo se renderiza el logotipo** dentro del propio formulario.

### C. Configurar API Keys y Tokens (GCP Secret Manager)
Para cumplir con las más estrictas políticas de ciberseguridad corporativas, **nunca guardamos credenciales analíticas sensibles en bases de datos relacionales estándar en texto plano**. Todas las llaves se encriptan y se resguardan de forma aislada en **GCP Secret Manager**:
1. En el listado de clientes activos, busca al cliente que deseas configurar y haz clic en el botón amarillo **`Claves API (GCP)`**.
2. Se abrirá la consola de ciberseguridad. Selecciona el tipo de servicio que deseas configurar para el cliente:
   - **`Brandlight BI API Key`**: API Key para informes de visibilidad y Share of Voice.
   - **`Peec.ai API Token`**: Token para métricas de comportamiento de IA.
   - **`GA4 OAuth Token JSON`**: JSON con las credenciales de reportes de Google Analytics 4.
   - **`Adobe Analytics API Client Secret`**: Claves para Adobe.
3. Pega el valor sensible en el cuadro de texto.
4. Haz clic en **`Encriptar y Guardar`**.
5. El backend enviará la clave por canales HTTPS encriptados a la API de GCP y creará de forma automatizada una versión segura del secreto bajo el nombre unificado:  
   `llyc-mcp-[tenant_id]-[secret_type]`
6. Un mensaje verde de éxito te confirmará que el cliente ha quedado integrado de forma 100% segura y lista para operar.

---

## 👁️ 3. Modo Vista Previa (Impersonation & Preview Mode)

Como Superadmin, querrás auditar o validar cómo ven tus clientes sus Dashboards personalizados en tiempo real. Para ello, implementamos una herramienta de **Suplantación de Marca en un Clic**:

1. En el listado de clientes de administración, haz clic en el botón: **`👁️ Ver Dashboard`** al lado del cliente que deseas auditar (ej: `Sanitas`).
2. El sistema cerrará el panel de administración, descargará en caliente el branding de ese cliente, **recolorará toda la aplicación web en React al azul oficial del cliente, cambiará todos los logotipos** y te proyectará dentro del Dashboard real de producto de ese inquilino.
3. **El Banner de Control de Admin**:
   - Para evitar que olvides quién eres y qué datos estás auditando, **se desplegará un banner permanente de color ámbar en la parte superior del Dashboard**:  
     👉 **`👁️ MODO VISTA PREVIA DE ADMINISTRADOR · VISUALIZANDO: SANITAS`**
   - Una vez que termines de auditar los datos, simplemente haz clic en el enlace del banner que dice: **`"Volver a la Administración →"`**. El sistema te regresará a la consola de Superadmin de inmediato sin requerir que vuelvas a loguearte.

---

## ❤️ 4. Monitor de Salud y Alertas de Ingesta (Tab: 'Monitor de Salud ETL')

Nuestra plataforma analítica no consume las APIs de origen en tiempo real en cada carga de página (lo que causaría lentitud y caídas de API por cuotas). En su lugar, ejecuta procesos diarios programados (ETL) que ingestan y consolidan la información de tus 4 proveedores (**GA4, Adobe, Peec y Brandlight**) en Google BigQuery.

En la pestaña **`Monitor de Salud ETL`** del panel de Admin, podrás auditar el estado y salud de estos pipelines de datos de forma proactiva:

### A. Alertas Operacionales Activas (Módulo Rojo de Control)
Si alguna API de un cliente falla de forma diaria (por ejemplo, si expira una API Key de Brandlight o un token OAuth de GA4):
* El orquestador del backend creará automáticamente una alerta detallada en este panel rojo, especificando el nombre del cliente, la plataforma afectada, el error que reportó el servidor externo, y la fecha/hora exacta de la caída.
* **Acción de Resolución (Dismiss)**: Una vez que vayas al panel de "Gestión de Clientes" y actualices la API Key dañada en GCP Secret Manager, regresa a este módulo y haz clic en el botón **`"Atendido / Borrar"`** (icono de check verde). La alerta se eliminará de Firestore de forma asíncrona y desaparecerá de la consola visual con una animación fluida.

### B. Historial de Ingesta Diaria (Módulo Azul de Auditoría)
Aquí verás la bitácora de todas las ejecuciones de sincronización diarias del ecosistema:
* **Tenant**: Qué organización se sincronizó.
* **Fecha Sincronización**: Cuándo corrió el proceso.
* **Estado de Carga**: Pintado en verde (**`success`**) si todas las APIs cargaron limpio, en amarillo (**`partial_success`**) si falló alguna pero las demás ingresaron, o en rojo (**`error`**) si el proceso colapsó por completo.
* **Registros Traídos (BigQuery)**: El número exacto de filas físicas insertadas ese día de forma limpia en el Data Warehouse de GCP de tus clientes.
* **Detalles**: Un JSON compacto descriptivo con el estado individual de cada proveedor para auditorías detalladas.

---

## 🛠️ 5. El Data Auditor & Patcher (Auditoría de Data Lake)

Cuando creas un cliente nuevo, o cuando pasa mucho tiempo sin sincronizar datos por una API Key dañada, la línea temporal del cliente en BigQuery contendrá "huecos" o días vacíos. Para solucionar esto sin requerir que abras consolas SQL o bases de datos de GCP, diseñamos el **Data Auditor & Patcher**:

1. En la pestaña de *Gestión de Clientes*, haz clic en el botón: **`Auditoría / Patcher`** al lado del cliente (ej: `Sanitas`).
2. Se abrirá la consola avanzada del Patcher, la cual ejecutará una query analítica en tu BigQuery de GCP en tiempo real y desplegará:
   - **Primera Fecha**: Cuál es el primer registro de datos históricos que el cliente tiene en el Data Lake.
   - **Huecos Detectados**: Una lista detallada con iconos de advertencia que desglosa **todos los días específicos o rangos de días en los que no existen registros analíticos en BigQuery** (ej: `Faltante: 2026-06-01 a 2026-06-05`).
3. **Parchar la Base de Datos**:
   - Para rellenar estos huecos históricos, haz clic en el botón principal: **`Parchar Huecos de Datos`**.
   - El backend tomará las llaves del cliente de Secret Manager, **lanzará el proceso de ETL únicamente para ese periodo de días faltantes, limpiará los datos de duplicados de forma idempotente e insertará las nuevas filas en BigQuery.**
   - Al finalizar, el Patcher re-auditará de forma automática la base de datos de GCP y te mostrará un hermoso mensaje en verde: **`¡Línea de tiempo 100% íntegra! No se detectan huecos en la base de datos`**, confirmándote que el cliente tiene sus datos impecables y listos.
