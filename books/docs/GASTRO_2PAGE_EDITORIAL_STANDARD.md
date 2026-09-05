# Gastro 2-Page Editorial Standard (EUNACOM 2026)

Este documento especifica la norma editorial y técnica definitiva para la maquetación de los **Manuales de Alta Densidad EUNACOM 2026** (estilo Maqueta 1b).

---

## 1. El Principio Fundamental: 2 Páginas Estrictas por Tema

Cada tema clínico en el manual debe ocupar **exactamente 2 páginas**. 
- **Página 1 (Impar / Izquierda)**: Fundamentos Clínicos, Algoritmo Vectorial de Decisión y Tabla Comparativa de Fármacos/Criterios.
- **Página 2 (Par / Derecha)**: Caso Clínico Real con Resolución Comentada, Reglas de Oro EUNACOM y Banco de Autoevaluación (2 preguntas tipo examen sin respuestas visibles).

> [!CAUTION]
> **Tolerancia Cero al Desborde (3 Páginas):**
> Un tema jamás puede desbordarse a una 3ª página. Si un tema genera 3 páginas, rompe la simetría visual de doble página abierta, desplaza los temas subsiguientes y destruye la paginación del índice.

---

## 2. Presupuesto Vertical (Vertical Height Budget en A4)

El viewport imprimible de una página A4 a 96 DPI en Puppeteer es de **1123px de alto** con márgenes estándar, dejando un **presupuesto útil de ~1040px**.

### Desglose de Página 1 (Presupuesto: 1040px)
| Elemento | Altura Estimada | Restricción / Límite |
| :--- | :--- | :--- |
| **Banda Superior + Header de Módulo** | 24px | Altura fija con nombre de especialidad |
| **Título del Tema + Badge de Código V3** | 42px | Título conciso (máx 2 líneas) |
| **Link a Plataforma Online** | 20px | Enlace canónico a clase online |
| **Contexto EUNACOM** | 50px | Párrafo introductorio de alta frecuencia |
| **Prosa Clínica a Doble Columna** | 220–250px | **300–320 palabras máximo** en 2 columnas |
| **Árbol de Decisión Vectorial (`flow`)** | 160–175px | **Máximo 3 filas** en el SVG |
| **Tabla Comparativa de Fármacos/Criterios** | 110–130px | **Máximo 4 filas** de contenido |
| **Espaciado y Gaps** | ~60px | Margins controlados (10–12px entre cajas) |
| **TOTAL PÁGINA 1** | **~670–730px** | **Margen de seguridad: >300px libres** |

### Desglose de Página 2 (Presupuesto: 1040px)
| Elemento | Altura Estimada | Restricción / Límite |
| :--- | :--- | :--- |
| **Salto de Página Obligatorio** | — | `page-break-before: always; break-before: page;` |
| **Fila Superior (`.case-row`)** | 260–280px | Grid de 2 columnas: |
| — Caso Clínico EUNACOM (Col 1) | 260px | Viñeta típica + Explicación concisa (~120 palabras) |
| — Reglas de Oro EUNACOM (Col 2) | 260px | 5 a 6 pearls de examen con viñetas coloreadas |
| **Banco de Autoevaluación (`.qbank`)** | 230–260px | 2 Preguntas EUNACOM con opciones A–E |
| **TOTAL PÁGINA 2** | **~520–550px** | **Margen de seguridad: >450px libres** |

---

## 3. Estándar de Diagramas de Decisión: Árbol Vectorial de 3 Filas

El generador procedural `flow(title, rows)` construye diagramas vectoriales SVG nítidos y compactos. Para asegurar el cumplimiento de la maqueta:

1. **Estructura en 3 Filas**:
   - **Fila 1 (Nivel Diagnóstico Inicial)**: Sospecha clínica / Clasificación de entrada.
   - **Fila 2 (Estratificación / Estudio de Elección)**: Criterios de severidad, examen de primera línea.
   - **Fila 3 (Conducta Terapéutica)**: Conducta en APS vs. Criterio de derivación urgente.
2. **Textos Breves**:
   - Cada nodo debe tener un rótulo superior (en mayúsculas pequeñas) y una descripción clara de máximo 2 líneas.
3. **Alto Total del SVG**:
   - `height="165"` o `height="170"` máximo.
   - Ancho 100% responsive con `viewBox="0 0 760 170"`.

---

## 4. Síntesis de Bloque en 1 Sola Página

Los bloques clínicos organizan la especialidad. Cada bloque cuenta con:
1. **Portada de Bloque (Página Doble Inicial)**:
   - Página Izquierda: Carátula de impacto con título, descripción y número de bloque.
   - Página Derecha: Matriz de Códigos Oficiales V3 del bloque + Matriz de Reconstrucciones Históricas.
2. **Síntesis de Cierre de Bloque**:
   - **Estrictamente 1 sola página**.
   - No repetir tablas de reconstrucción que ya aparecieron en la portada.
   - Incluir la tabla comparativa de síntesis del bloque y la tarjeta de métricas de autoevaluación.

---

## 5. El Solucionario al Final del Manual

- Las preguntas en la Página 2 de cada tema muestran **únicamente el enunciado y las 5 alternativas (A–E)**.
- **No se imprime la respuesta correcta ni la explicación en el cuerpo del tema** para permitir la autoevaluación activa del médico.
- Al final de todo el libro se compila la sección **Solucionario y Respuestas Razonadas**, donde se listan todas las preguntas con su clave correcta, justificación clínica detallada y tag de reconstrucción histórica.
