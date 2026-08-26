# Metodología Actual: Cálculos de KPIs de Tráfico de Alta Intención (High Intent Traffic)

Este documento detalla la metodología actual en uso en el repositorio `media_impact`, la cual hereda y mantiene la robusta lógica de su predecesor para calcular los KPIs fundamentales que determinan la calidad, intención y grado de confianza del tráfico referido por Inteligencia Artificial.

---

## 1. Precisión de Cálculo Base
La herramienta fundamenta su fiabilidad evitando los errores de precisión clásicos de coma flotante (`float`) inherentes a lenguajes como Python. Para todos los ratios, promedios y porcentajes subyacentes a las métricas de alta intención, el servicio (`CalculationService`) emplea conversiones estrictas a `Decimal` (`decimal.Decimal` de Python).

Todos los cálculos están respaldados por una regla de cuantización y redondeo `ROUND_HALF_UP` estándar en la analítica, usualmente limitados a una representación de 2 a 4 decimales.

---

## 2. KPI Principal: Sniper Score v3+ (High Intent AI Score)

El **Sniper Score v3+** es la métrica insignia (de 0 a 100) que califica qué tan alta es la intención y fricción superada de un usuario dentro del sitio web. Evalúa no sólo si el usuario completó un objetivo (conversión), sino el esfuerzo temporal y de navegación invertido.

### Fórmula Matemática
\[ S(c, d, p) = B(c) + \frac{30}{\log_{10}((d \times p) + 10)} \]

Donde el componente de conversión base \(B(c)\) se define como:
*   **B(c) = 70** si \(c > 0\) (si el usuario realizó al menos una conversión).
*   **B(c) = 0** si \(c \le 0\) (ninguna conversión).

### Variables de Entrada
*   **\(c\)** (Conversions): Número total de conversiones registradas en la sesión.
*   **\(d\)** (Average Duration): Duración media de la sesión en segundos.
*   **\(p\)** (Pages per Session): Cantidad de páginas vistas por sesión (profundidad).

### Interpretación del Cálculo
1.  **Bonus de Conversión (\(B(c)\)):** Se otorga automáticamente un peso del 70% de la nota final a las sesiones que convierten. El 30% restante se dirime a través del esfuerzo (o *fricción*) de navegación.
2.  **Métrica de Fricción:** El componente temporal y de profundidad se multiplica (\(d \times p\)) sumándosele una constante de suavizado (+10). 
3.  **Logaritmo (\(\log_{10}\)):** Se aplica para amortiguar el crecimiento de duraciones extremas o sesiones atascadas, de modo que el incremento en puntuación sea progresivo y se estabilice rápidamente. A mayor tiempo/páginas, el denominador crece, lo cual de hecho *reduce* el remanente sobre 30 puntos asignados. (Este decaimiento premia la conversión rápida/eficaz frente a usuarios perdidos).
4.  **Límite de Score:** El sistema aplica un tope máximo final garantizando que la nota no exceda jamás los `100.0` puntos.

---

## 3. Índice de Confianza Dinámico

Debido a que el rastreo de plataformas basadas en Inteligencia Artificial tiene lagunas de atribución nativa, el modelo complementa la puntuación de intención con un **Índice de Confianza** (Confidence Index). Este índice mide qué tan representativa y confiable es la muestra de tráfico de IA detectada respecto del tráfico global del dominio.

### Fórmula Matemática
\[ \text{Confianza} = (F_v \times 0.70) + (F_r \times 0.30) \]

Donde intervienen dos factores principales:
1.  **Factor Volumen (\(F_v\)):** Penaliza muestras minúsculas. Alcanza el óptimo (1.0) si existen al menos 1000 sesiones reconocidas de IA.
    \[ F_v = \min\left(\frac{\text{Sesiones IA Conocidas}}{1000.0}, 1.0\right) \]
2.  **Factor Ratio (\(F_r\)):** Compara el peso de la IA en todo el sitio web. Se considera óptimo que el tráfico IA represente al menos el 5% del tráfico total del sitio.
    \[ F_r = \min\left(\frac{(\text{Sesiones IA Conocidas} / \text{Total Sesiones del Sitio})}{0.05}, 1.0\right) \]

### Niveles de Atribución y Etiquetas
El resultado es un Score decimal entre 0 y 1, el cual mapea directamente a un porcentaje (%) de confianza y emite una etiqueta de fiabilidad:
*   **Alta (> 0.60):** El volumen y porcentaje son robustos.
*   **Media (0.30 - 0.60):** Tráfico representativo en crecimiento.
*   **Baja (< 0.30):** La muestra de usuarios referidos por IA es muy residual; conclusiones con alto margen de error (incluye todos los casos donde el tráfico total de la web sea 0).

---

## 4. Métricas de Abandono (Drop Rate)
Finalmente, en los embudos, el sistema mide de manera controlada el impacto negativo (Drop Rate). Asegura un valor mínimo de 0, evitando tasas negativas si el flujo posterior tiene anomalías (ej: `current_count` mayor a `previous_count` debido a cachés o direct loops en GA4):
\[ \text{Drop Rate} = \frac{\max(\text{Previo} - \text{Actual}, 0)}{\text{Previo}} \times 100 \]

---

## 5. Estructura y Apartados del Dashboard (Traffic IA Report)

El dashboard o reporte generado por la herramienta organiza los cálculos y métricas en apartados visuales clave para presentar los hallazgos al usuario. La estructura es la siguiente:

1. **Resumen Ejecutivo:**
   - Detalla el periodo analizado y el volumen total de sesiones del sitio.
   - Presenta la cantidad de sesiones de IA directas (referidas/conocidas) frente a las inferidas (ocultas, detectadas por clustering).
   - Incluye un insight cualitativo conversacional generado por el modelo sobre los hallazgos principales.

2. **KPIs Principales:**
   - **Sesiones Totales:** Tráfico base del sitio web.
   - **IA Referida (Conocida):** Porcentaje del total que es inequívocamente IA debido a los metadatos de la fuente.
   - **IA Inferida (Oculta):** Porcentaje del total que exhibe patrones idénticos a los agentes IA.
   - **Engagement Score IA:** Evaluación general de retención y la etiqueta del índice de confianza subyacente.

3. **Composición de Audiencia:**
   - Un desglose proporcional mostrando qué parte del volumen web se divide entre "IA Directa", "IA Inferida" y el "Resto Tráfico".

4. **Rendimiento por Fuente (Battle of AIs):**
   - Tabla comparativa de los distintos motores detectados (e.g., ChatGPT, Perplexity, Claude).
   - Muestra visualmente quién tiene el mayor puntaje cualitativo y detalla para cada uno: sesiones, duración promedio y tasa de conversión.

5. **Perfilado de Audiencia (Behavioral Clusters):**
   - Segmentación del tráfico aplicando metodología conductual multicapa. Categoriza a los usuarios en 4 perfiles principales y muestra su peso porcentual:
     - **Investigadores** (Researcher)
     - **Resumen** (Quick Answer)
     - **Transaccional** (Transactional)
     - **Casual** (Casual)

6. **Detalle de Tráfico IA Inferido:**
   - Desglose de los canales (Canales de adquisición) con mayor probabilidad o concentración de tráfico simulado por IA.

7. **Top Landing Pages (Afinidad IA):**
   - Clasificación de las páginas principales ("Content Affinity") donde aterrizan los usuarios IA.
   - Evalúa y asocia la página al perfil predominante de audiencia (Transaccional, Investigador o Casual).

8. **Evolutivo Semanal y Picos:**
   - Tarjetas de impacto visual que consolidan el volumen total durante el periodo.
   - Porcentaje de "Penetración IA Total" reflejando la cuota real de la inteligencia artificial sobre la marca.

9. **Conclusiones del Analista IA:**
   - Una valoración o síntesis en texto libre, escrita por la IA basándose en todos los datos expuestos, detallando recomendaciones y observaciones ejecutivas.

10. **Metadatos del Análisis:**
    - Huella técnica de la ejecución. Indica el número total de filas procesadas para garantizar la transparencia y peso de la muestra analizada.
