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
   - **Página Izquierda (Carátula de impacto)**: Número de bloque en gran formato, título oficial (`.bcov-inner h1`), cajas estadísticas consolidadas (`.bcov-stats`), sección estructurada *"El contenido de este bloque"* (`.bcov-toc`) con código, nombre y página de inicio, y tabla de competencias legales Perfil V3.
   - **Regla de Cero Duplicación de Contenidos**: Jamás escribir una lista de temas en texto corrido debajo del título `<h1>`. El título fluye directamente hacia las cajas estadísticas sin enumerar las clases dos veces, ya que la sección estructurada ya las detalla con paginación.
   - **Página Derecha (Continuación de Bloque)**: Conceptos clave y trampas de examen (`.bcov-concept-list`) + Matriz de Reconstrucciones Históricas reales mapeadas.
2. **Síntesis de Cierre de Bloque**:
   - **Estrictamente 1 sola página**.
   - No repetir tablas de reconstrucción que ya aparecieron en la portada.
   - Incluir la tabla comparativa de síntesis del bloque y la tarjeta de métricas de autoevaluación.

---

## 5. El Solucionario al Final del Manual

- Las preguntas en la Página 2 de cada tema muestran **únicamente el enunciado y las 5 alternativas (A–E)**.
- **No se imprime la respuesta correcta ni la explicación en el cuerpo del tema** para permitir la autoevaluación activa del médico.
- Al final de todo el libro se compila la sección **Solucionario y Respuestas Razonadas**, donde se listan todas las preguntas con su clave correcta, justificación clínica detallada y tag de reconstrucción histórica.

---

## 6. Sangrado Completo en Portadas y Bloques Oscuros (Full-Bleed Zero Margin)

Para asegurar un acabado profesional sin franjas ni bordes blancos en el borde inferior de las portadas principales y separadores oscuros de bloque (`#0f172a`):
1. **Configuración de Puppeteer**:
   - `page.pdf` debe usar obligatoriamente `margin: { top: '0', bottom: '0', left: '0', right: '0' }`.
   - Si se define cualquier `margin.bottom > 0`, el motor Chromium inserta un margen físico blanco que corta el fondo oscuro.
2. **Estilos CSS de Portada y Bloque (`.cover` y `.bcov`)**:
   - `@page { size: A4; margin: 0; }`.
   - Altura exacta de `.cover` y `.bcov`: `height: 1101px; min-height: calc(297mm - 22px); overflow: hidden;`. Al sumar la barra superior `.gbar` de 22px, llena exactamente los 1.123px (297mm) de la hoja A4 sin dejar 1 solo píxel vacío.
   - El contenedor `sec()` para la portada debe recibir `{ flush: true, dark: true }` para que el `<td>` padre tenga `background: #0f172a; padding: 0;`.
   - Resultado: **0 píxeles de borde blanco** en todas las portadas oficiales y portadillas de bloque.

---

## 7. Garantía Tipográfica y Renderizado Web (Barlow Condensed, IBM Plex Sans, Spectral)

Para asegurar que los manuales mantengan una identidad visual homogénea y no degraden a fuentes genéricas de sistema (Arial o Times New Roman):
1. **Inyección de Fuentes en el `<head>`**:
   - Todo HTML generado debe incluir etiquetas explícitas `<link rel="preconnect">` y `<link rel="stylesheet">` apuntando a las familias tipográficas oficiales:
     - `Barlow Condensed:wght@500;600;700`
     - `IBM Plex Sans:ital,wght@0,400;0,500;0,600;0,700;1,400`
     - `JetBrains Mono:wght@400;500;700`
     - `Spectral:wght@400;600;700`
2. **Sincronización de Puppeteer con Fuentes Web**:
   - `page.setContent(html, { waitUntil: 'networkidle0', timeout: 90000 })`.
   - `await page.evaluateHandle('document.fonts.ready')` antes de invocar `page.pdf()`.
3. **Jerarquía Visual de Fuentes**:
   - **Portadas y Títulos de Bloque (`.cover h1`, `.bcov-inner h1`, `.bignum`)**: **`Barlow Condensed Bold`** (700, mayúsculas). Tipografía condensada de display de alto impacto.
   - **Texto Clínico y Temas (`.prose`, `.topic-title h2`, `.card`, `.dtbl`)**: **`IBM Plex Sans`** (400 regular, 600 semibold, 700 bold). Tipografía humanista de máxima legibilidad técnica.
   - **Encabezados Editoriales e Índices (`.pg-lead h2`)**: **`Spectral`** (serif elegante).
   - **Códigos Perfil V3, Dosis y Cifras (`.mono`, `.q-tag`, `.dtbl td.mono`)**: **`JetBrains Mono`**.
