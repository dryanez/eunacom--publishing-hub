---
name: eunacom-book-pipeline
description: Complete pipeline for creating, authoring, and compiling EUNACOM 2026 study manuals (Gastro 2-Page editorial standard PDFs). When called, immediately asks the user which specialty/manual they want to create or compile now, then guides and executes the production process.
---

# EUNACOM Book Pipeline — Complete Guide & Creator Standard

Read this BEFORE creating or updating any book chapter or specialty manual.

---

## 🎯 1. Interactive Step 1: ALWAYS Ask What Specialty to Make Now

When this skill is invoked or called (e.g. `/eunacom-book-pipeline` or *"make a book"*, *"create manual"*), you **MUST IMMEDIATELY ASK THE USER** which specialty they want to work on:

> **"¿Qué manual o especialidad deseas crear o compilar ahora?"**

Present the options clearly:
1. **Infectología** (Tomo 04 · Oliva `#4d7c0f`) — 5 bloques, 24 clases (**71 páginas · 100% Calibrado**)
2. **Gastroenterología** (Tomo 08 · Verde `#15803d`) — Muestra canónica y expansión a 4 bloques
3. **Cardiología** (Tomo 01 · Naranja `#ea580c`) — 5 bloques, 23 clases (**71 páginas con figuras**)
4. **Neurología y Geriatría** (Tomo 12 · Púrpura `#6d28d9`)
5. **Respiratorio / Neumología** (Tomo 13 · Teal `#0f766e`)
6. **Nefrología** (Tomo 11 · Ámbar `#a16207`)
7. **Hematología** (Tomo 09 · Carmesí `#be123c`)
8. **Diabetes y Dislipidemias** (Tomo 06 · Cian `#0891b2`)
9. **Endocrinología** (Tomo 07 · Violeta `#7c3aed`)
10. **Reumatología** (Tomo 14 · Granate `#9f1239`)
11. **Cirugía General / Pediatría / Ginecología y Obstetricia**

---

## 🏛️ 2. Principio Fundamental: Perfil V3 de ASOFAMECh

- **Estándar Oficial:** Es el **Perfil de Conocimientos V3 de ASOFAMECh (2026)** en sí mismo. Desarrollo editorial riguroso, independiente y de nivel de postgrado / Step 2 CK.
- **Arquitectura en Bloques:** Cada especialidad se organiza en 4 a 6 Bloques Clínicos Temáticos diseñados específicamente para dar **cobertura al 100% de los códigos legales del Perfil V3** (situaciones clínicas, urgencias, exámenes, procedimientos y patología GES).
- Cada bloque inicia con su **Portadilla Oscura con la Matriz Legal Perfil V3**, asegurando que ningún código quede sin responder.

---

## 📐 3. La Ley Editorial de las 2 Páginas (Estándar Gastro)

Cada tema clínico debe medir **exactamente 2 páginas**. 

> [!CAUTION]
> **Tolerancia Cero al Desborde (3 Páginas):**
> Un tema jamás puede desbordarse a una 3ª página. Si un tema genera 3 páginas, rompe la simetría de doble página abierta, desplaza los temas subsiguientes y destruye el índice.

### A. Página 1 (Impar / Izquierda — Fundamento Clínico):
- **Banda Superior + Header de Módulo:** Altura fija con nombre de especialidad en color `--acc`.
- **Título del Tema + Badge de Código V3:** Conciso (máx 2 líneas).
- **Link a Plataforma:** Acceso directo a la clase interactiva.
- **Contexto EUNACOM:** Párrafo de 4-5 líneas de alta relevancia para el examen.
- **Prosa Clínica a Doble Columna:** **300 a 320 palabras máximo** en 2 columnas (definición, etiología, clínica).
- **Árbol de Decisión Vectorial (`flow`):** **Máximo 3 filas** en el SVG (~165px de alto).
- **Tabla Comparativa de Fármacos/Criterios:** **Máximo 4 filas** de contenido (~110px).
- **Margen de seguridad:** >300px libres en A4.

### B. Página 2 (Par / Derecha — Aplicación y Autoevaluación):
- **Salto Forzado de Página:** `.case-row { page-break-before: always; break-before: page; }`.
- **Fila Superior (`.case-row`):** Grid de 2 columnas:
  - *Columna 1:* **Caso Clínico EUNACOM** (viñeta de 70 palabras + explicación razonada de 50 palabras).
  - *Columna 2:* **5 a 6 Reglas de Oro EUNACOM** (perlas mnemotécnicas y trampas de examen).
- **Fila Inferior (`.qbank`):** **Banco de Autoevaluación** con **2 preguntas tipo examen** (enunciado + opciones A–E).
- **REGLA DE ORO:** Las respuestas correctas y explicaciones NO se muestran en la página 2; van al **Solucionario** al final del tomo.

### C. Síntesis de Bloque en 1 Sola Página:
- La síntesis de cierre de cada bloque debe medir **estrictamente 1 página**.
- No duplicar la tabla de reconstrucciones que ya apareció en la portadilla del bloque.

---

## 📂 4. Ubicación Canónica de Archivos

Todo el sistema editorial vive en el repositorio desacoplado:
`d:\Anti\eunacom-publishing-hub\books\`

- **Compilador Principal:** `scripts/build_book.cjs`
- **Datasets de Especialidades:** `scripts/dataset_<especialidad>.cjs`
- **Láminas y Figuras:** `figuras/`
- **Diagramas SVG:** `svg_diagrams/`
- **PDFs Finales Compilados:** `dist/Manual_EUNACOM_<Especialidad>_Completo_2026.pdf`

---

## 🚀 5. Comandos de Compilación Rápida

```bash
# Desde la raíz de eunacom-publishing-hub:
node run_local.cjs infecto   # Compila Infectología (71 págs)
node run_local.cjs gastro    # Compila Gastroenterología
node run_local.cjs cardio    # Compila Cardiología (71 págs)
node run_local.cjs all       # Compila todos los tomos oficiales

# O desde books/:
cd books
node scripts/build_book.cjs infectologia
```

Compila en **9 a 14 segundos** con carga garantizada de tipografías web (`<link rel="stylesheet">` + `networkidle0` + `document.fonts.ready`).

---

## 🔍 6. Lógica de Matching de Reconstrucciones Reales (`reconstruction_matcher.cjs`)

- **Cero citas simuladas o inventadas**: Queda estrictamente prohibido redactar años o números de pregunta ficticios (como `EUNACOM 2024 (Q#12)`).
- **Fuente de la Verdad Única**: Todo tema clínico se vincula obligatoriamente mediante `reconstruction_matcher.cjs` con la base consolidada `real_questions_by_code.json` (2.708 preguntas clasificadas de los 16 exámenes históricos oficiales 2013–2025).
- **Citas Verificables y Honestidad Médica**:
  - **Temas con preguntas históricas**: La cabecera del tema y la portadilla del bloque listan los exámenes y preguntas reales (ej. `EUNACOM Julio 2024 (Q#62) · EUNACOM Diciembre 2024 (Q#99)`), de modo que el lector pueda localizar la pregunta exacta en la plataforma.
  - **Temas sin preguntas históricas** (como Sepsis o Ántrax): Se rotulan con rigor académico como `Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026`.
- **Sincronización Automática**: El compilador `build_book.cjs` ejecuta la vinculación de `matcher.getReconstruccionesString(c.perfilCode)` durante la fase de preparación (`prepare()`), asegurando que todos los tomos mantengan coherencia absoluta con el banco de datos.

---

## 🎨 7. Reglas de Portadillas de Bloque y Tipografía Editorial

- **Cero Duplicación de Contenidos**: Bajo el título de bloque `<h1>${b.name}</h1>`, jamás incluir una enumeración en texto plano de las clases (`.bcov-desc`). El título enlaza directamente con las tarjetas de estadísticas (`.bcov-stats`) y la tabla estructurada con paginación *"El contenido de este bloque"* (`.bcov-toc`).
- **Garantía Tipográfica**:
  - **Display / Portadas / Títulos de Bloque**: `Barlow Condensed Bold` (700, mayúsculas).
  - **Lectura Clínica y Tablas**: `IBM Plex Sans` (400, 600, 700).
  - **Índices**: `Spectral` (serif).
  - **Códigos V3 y Badges**: `JetBrains Mono`.
- **Sangrado Completo (Full-Bleed Zero Margin)**: `margin: 0` absoluto en Puppeteer y CSS, con `.cover` y `.bcov` en `height: 1101px; min-height: calc(297mm - 22px)` para garantizar 0px de borde blanco.
