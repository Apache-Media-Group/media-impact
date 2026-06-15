# LLYC Intelligence Dashboard — Manual de Usuario (Cliente)

¡Bienvenido al **LLYC Intelligence Dashboard 2026**! Este portal analítico de marca blanca ha sido diseñado por **LLYC** para proporcionarte una visión unificada, dinámica e inteligente del impacto del tráfico de tu marca, su posicionamiento en motores de respuesta de Inteligencia Artificial (IA) y recomendaciones estratégicas accionables.

Este manual te guiará paso a paso sobre cómo acceder a tu portal personalizado y cómo sacar el máximo provecho de todas las herramientas y métricas interactivas disponibles.

---

## 🚪 1. Cómo Acceder a tu Portal Personalizado

Existen dos métodos sumamente sencillos y seguros para ingresar a tu Dashboard, dependiendo de cómo lo haya configurado el equipo de TI de tu organización:

### Método A: Acceso Directo por Subdominio Corporativo (Recomendado)
Si el equipo de TI ya ha propagado el dominio corporativo, podrás ingresar de forma directa escribiendo la URL oficial asignada a tu organización en tu navegador web:
👉 **`https://[nombre-de-tu-empresa].analytics.llyc.global`** (ej: `https://sanitas.analytics.llyc.global`)
* Al acceder, el sistema te identificará automáticamente, vestirá el portal con tus logotipos y colores corporativos, y te llevará directamente a tu panel.

### Método B: Acceso desde el Portal General de LLYC
Si accedes a la URL general de LLYC (`https://media-impact-llyc.web.app/`):
1. Verás la pantalla principal agnóstica de bienvenida.
2. Haz clic en el botón **`Portal del Cliente`**.
3. Se abrirá una tarjeta donde deberás ingresar el **Identificador de tu Organización (Workspace ID)** asignado por LLYC (ej: `sanitas`).
4. Haz clic en la flecha de continuar (`→`).
5. El portal validará de forma instantánea tu identificador en la base de datos y te proyectará de forma directa dentro de tu Dashboard personalizado.

> 🛡️ *Nota de Seguridad: El sistema cuenta con un sistema de seguridad que bloqueará el acceso y mostrará un mensaje de advertencia en rojo si intentas ingresar un identificador de organización que no esté registrado de forma física en la plataforma.*

---

## 📊 2. Entendiendo tu Dashboard Analítico

Una vez dentro, aterrizarás en tu Dashboard de producto de marca blanca. Toda la interfaz se adaptará de forma dinámica a la paleta de colores y logotipo oficial de tu empresa.

El Dashboard está estructurado en 4 secciones clave:

### A. Tarjetas de KPIs (Indicadores Clave de Rendimiento)
En la parte superior verás las tarjetas analíticas con tus números consolidados de forma clara:
* **Sesiones Totales**: El tráfico total registrado en tu sitio web procedente de canales orgánicos.
* **IA Referida**: Visitas y sesiones que han entrado a tu web a través de clics en enlaces recomendados por motores de IA (ej: ChatGPT, Claude, Gemini, Perplexity).
* **IA Inferida**: Sesiones de usuarios donde se infiere que la intención de búsqueda y el tráfico orgánico se han visto influenciados por interacciones previas con agentes de IA.
* **Engagement Score (Sniper Score)**: Una métrica inteligente unificada de LLYC que evalúa el nivel de interacción, tasa de conversión y calidad de la visita.
* **Visibilidad Unbranded**: Tu porcentaje de presencia orgánica en consultas donde los usuarios buscan servicios/productos pero no mencionan el nombre de tu marca.
* **Score de Sentimiento**: El análisis semántico automatizado de la reputación de tu marca en las respuestas de los motores de IA (en una escala de 0 a 10).

### B. Gráficos de Evolución y Composición (Visualización Interactiva)
* **Evolución Temporal de Tráfico**: Un gráfico de líneas interactivo que muestra las curvas y tendencias diarias de tu Tráfico de IA frente al Tráfico Orgánico Tradicional. Puedes pasar el cursor sobre cualquier punto del gráfico para ver los valores exactos.
* **Composición de Audiencia**: Gráficos de dona que ilustran el porcentaje de cuota de mercado analítico que capturas frente a los competidores del sector.

### C. Secciones de Datos Estructurados (Tablas)
* **Tópicos y Oportunidades**: Una tarjeta avanzada que lista los temas y palabras clave de alto impacto que están buscando tus usuarios en IA y donde tu marca tiene oportunidad de capturar tráfico si genera contenido.
* **Dominios y Fuentes Citadas**: Una tabla que despliega qué portales y dominios web están indexando y citando los motores de IA para responder consultas de tu sector, permitiéndote auditar a tu competencia.

---

## 📥 3. Funcionalidades de Usuario Avanzadas

### 📁 Importar Datos Locales (CSV) en Caliente
Si necesitas cruzar tus reportes históricos del Data Lake de BigQuery con una planilla de datos local o de campaña reciente:
1. En la esquina superior derecha del Dashboard, haz clic en el botón con el icono de subida: **`Importar CSV`**.
2. Selecciona el archivo de tu computadora (admite formatos `.csv`, `.xlsx` o `.xls`).
3. El frontend de React procesará y cargará de forma asíncrona los datos dentro de la sesión activa de tu navegador para que los visualices en caliente sin alterar la base de datos de producción.

### 📄 Exportar Reportes Corporativos (PDF)
Para descargar un reporte ejecutivo en alta definición con el branding oficial de tu empresa y el formato estandarizado de LLYC:
1. En la barra superior, haz clic en el botón: **`Exportar PDF`**.
2. El sistema compilará todos los gráficos, tarjetas de KPIs y tablas de datos activos en la vista.
3. Generará y descargará automáticamente un archivo PDF limpio, maquetado y con diseño premium listo para compartir con el equipo directivo.

---

## 🙋‍♂️ 4. Soporte y Ayuda
Si tienes problemas para acceder a tu Workspace ID, detectas inconsistencias en la visualización, o requieres soporte técnico adicional:
* En la parte inferior del portal verás el email de soporte asignado exclusivamente a tu organización (ej: `soporte.sanitas@llyc.global`).
* Escríbenos detallando tu caso y el equipo de consultores de LLYC te atenderá de forma inmediata.
