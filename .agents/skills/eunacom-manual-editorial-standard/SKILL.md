---
name: eunacom-manual-editorial-standard
description: Comprehensive editorial and maquetation standard for compiling high-density EUNACOM 2026 study manuals (CTO / First Aid style) with full-width figures, in-text citations, and end-of-book answer keys.
---

# EUNACOM Manual Editorial Standard (CTO / First Aid Style)

Use this skill whenever generating, editing, or automating manual chapters and modules for the EUNACOM 2026 preparation books.

## Core Directives

1. **Full-Width Graphical Elements (100% Side-to-Side)**:
   - Clinical figure cards (`.clinical-fig-card-fullwidth`) must always span 100% width across the page.
   - Internal images within figure cards must have controlled scaling (`max-height: 120-140px`, `object-fit: contain`, centered, with clear sub-labels).
   - Content tables (`.cto-table-wrapper-fullwidth`) and algorithm SVG containers (`.cto-diagram-container`) must also occupy 100% full width.

2. **Mandatory In-Text Cross-Referencing**:
   - Every single table, figure, clinical image, and algorithm must be explicitly referenced within the topic's prose paragraphs (e.g. `(véase Figura 2.1A: Angiografía de Arterias Coronarias)`, `(véase Tabla 2.1)`, `(véase Figura 2.1)`).

3. **No Inline Question Spoilers + End-of-Book Solucionario**:
   - Topic pages display only the question stems and options (A-E).
   - All answers and detailed justifications are compiled in the dedicated **Solucionario General & Respuestas Razonadas EUNACOM** at the end of the manual.

4. **Perfil V3 Master Table Strictly Sorted Numerically**:
   - Numerical order by Perfil V3 code (`1.01.1.001`, `1.01.1.002`, ...), with direct class buttons and clean text for GES warranties (no broken links).

5. **Full-Width Stacked Chapter Opener (Portadilla)**:
   - 4 full-width stacked cards: Orientación, Matriz Perfil V3, Historial de Preguntas (2-col grid), Conceptos Clave & Trampas (red alerts).

6. **Side-to-Side Running Header**:
   - Colored bar (`var(--acc)`) with manual title on the left and `BLOQUE XX • TEMA X.X` on the right.

7. **Dynamic Editorial Pacing & Variable Topic Archetypes (Tiers)**:
   - Topics must NOT be forced into a rigid uniform template. Depth and visual components are determined by clinical nature and Perfil V3:
   - **🔴 Tier 3 (Emergencias / Falla Orgánica: Sepsis, Meningitis, TBC grave, Shock):** 2 a 3 páginas completas. Requiere tanto árbol algorítmico (`diagram`) como tabla de parámetros/metas (`table`). La prosa incluye fisiopatología profunda (p. ej. óxido nítrico, barrera hematoencefálica, glicólisis anaerobia) que fundamenta el escalamiento de drogas y evita errores conceptuales.
   - **🟡 Tier 2 (Clínica Prevalente / Diagnóstico Diferencial: Mononucleosis, TORCH, Sífilis, Celulitis):** 1.5 a 2 páginas. Foco en discriminación de entidades similares. Lleva **un solo elemento visual principal** (el que mejor resuelva el reto clínico: tabla o algoritmo, no ambos a la fuerza).
   - **🟢 Tier 1 (Protocolos Directos / Profilaxis: Contactos TBC/VIH, Rabia, Tétanos, Cólera):** 1 a 1.5 páginas. Estilo directo y sin rellenos teóricos. Su protagonista visual es una **tabla estructurada de profilaxis y puntos de corte**. NO forzar diagramas de flujo artificiales cuando una matriz tabular es superior y más legible.

8. **Reglas de Selección Visual (Diagrama vs Tabla)**:
   - **Diagrama de flujo (`diagram: flow(...)`)**: Usar cuando la decisión clínica es un árbol temporal o una secuencia de bifurcaciones condicionales ("¿Responde a fluidos? Sí: continuar | No: noradrenalina").
   - **Tabla comparativa (`table`)**: Usar cuando se comparan diagnósticos diferenciales (patrones de LCR), valores analíticos o matrices de profilaxis por edad y patógeno.
   - **Principio de no-redundancia**: Si la tabla ya resuelve la duda médica de forma completa, `diagram: null`.

9. **Banco de Preguntas Oficial del Tema**:
   - Las preguntas al final del tema provienen de la **evaluación conceptual oficial de la clase**, rotuladas con la pastilla verde: `Banco de Preguntas Oficial · [Nombre del Tema]`.
   - Cero spoilers en la página del tema: el desglose distractor por distractor y la clave oficial se consultan en el Solucionario Final.

10. **Lógica Mandatoria de Reconstrucciones Reales (`reconstruction_matcher.cjs`)**:
   - **Cero alucinaciones o números inventados**: Queda terminantemente prohibido redactar años o números de preguntas simulados (como `EUNACOM 2024 (Q#12)`).
   - **Fuente única de la verdad**: Todo tema debe vincular su código Perfil V3 (`perfilCode`) con el banco de 2.708 preguntas oficiales clasificadas (`real_questions_by_code.json`) utilizando el motor `reconstruction_matcher.cjs`.
   - **Citas verificables**:
     - Si el tema tiene preguntas reales en exámenes anteriores, `reconstrucciones` debe listar los exámenes y números exactos (ej. `EUNACOM Julio 2017 (Q#81) · EUNACOM Diciembre 2017 (Q#61)`).
     - Si el tema no tiene preguntas directas en los 16 exámenes históricos (2013-2025), debe indicar textualmente con rigor: `Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026`.
   - **Portadilla de Bloque**: El "Historial de Preguntas Reales EUNACOM" de la portadilla solo debe poblarse con preguntas verificadas del clasificador oficial, indicando al lector exactamente dónde encontrar la pregunta en la plataforma.

## Dataset Structure (`dataset_[specialty].cjs`)
Each block dataset exports topic objects with:
- `topicLabel`: e.g. "3.1"
- `title`: Topic title
- `tier`: 1, 2, or 3
- `diagram`: `flow('...', [ ... ])` or `null`
- `table`: `{ title, headers, rows }` or `null`
- `contexto`: High-yield clinical why box
- `contentSections`: Sections with deep medical rationale and core pathophysiology
- `vignette`, `explicacion`, `keyPoints`: Case scenario and high-yield pearls
- `questions`: 2 multiple-choice questions from the official topic bank with detailed rationales for the final answer key

