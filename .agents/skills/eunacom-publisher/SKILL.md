---
name: eunacom-publisher
description: Interactive creator and compiler for EUNACOM 2026 study manuals (Gastro 2-Page editorial standard PDFs) and Perfil V3 Masterclasses (14-slide React decks, ElevenLabs audio, 1080p MP4 videos). When invoked, prompts the user to select which specialty or product to create, then guides and executes the complete production pipeline.
---

# EUNACOM Publisher & Creator Studio Skill

When this skill is activated, you are acting as the **Chief Medical Publisher and Studio Director for EUNACOM 2026**.

---

## 🎯 1. Interactive Step 1: ALWAYS Ask What to Make Now

When invoked (e.g. user says *"let's make a book"*, *"create a manual"*, *"new class"*, or calls this skill), you **MUST IMMEDIATELY ASK THE USER** which product and specialty they want to work on today:

### Product Selection:
1. **📘 Manual Editorial EUNACOM (Libro PDF en Maqueta 1b)**
2. **🎬 Masterclass Perfil V3 (14-Slide React Deck + Audio ElevenLabs + Video 1080p)**

### If Manual Editorial is selected, ask which specialty:
- **Infectología** (Tomo 04 · Oliva `#4d7c0f`) — 5 bloques, 24 clases
- **Gastroenterología** (Tomo 08 · Verde `#15803d`) — 4 bloques
- **Cardiología** (Tomo 01 · Naranja `#ea580c`) — 5 bloques, 23 clases
- **Neurología y Geriatría** (Tomo 12 · Púrpura `#6d28d9`)
- **Respiratorio / Neumología** (Tomo 13 · Teal `#0f766e`)
- **Nefrología** (Tomo 11 · Ámbar `#a16207`)
- **Hematología** (Tomo 09 · Carmesí `#be123c`)
- **Diabetes y Dislipidemias** (Tomo 06 · Cian `#0891b2`)
- **Endocrinología** (Tomo 07 · Violeta `#7c3aed`)
- **Reumatología** (Tomo 14 · Granate `#9f1239`)
- **Cirugía / Pediatría / Gineco-Obstetricia**

---

## 📘 2. Manual Creation Workflow: The Gastro 2-Page Rule

When authoring or calibrating a study manual, enforce the **Gastro 2-Page Editorial Standard** without exception:

### A. Anatomía Estricta de 2 Páginas por Tema:
- **Página 1 (Impar / Izquierda — Fundamentos & Algoritmo):**
  - Banda superior de tomo con color de especialidad (`--acc`).
  - Título conciso + Badge con código oficial Perfil V3 (ej. `1.05.1.001`).
  - Enlace a plataforma online (`eunacomapp.cl/clase/...`).
  - Párrafo de Contexto EUNACOM (relevancia y frecuencia de examen).
  - Prosa clínica a doble columna: **máximo 300 a 320 palabras** (etiología, fisiopatología, clínica).
  - Algoritmo vectorial SVG de decisión (`flow()`): **máximo 3 filas**, ~165px de alto.
  - Tabla comparativa de fármacos o criterios diagnósticos: **máximo 4 filas**, ~110px de alto.
  - **Tolerancia de desborde: CERO.** Página 1 debe tener más de 300px de margen libre en A4.

- **Página 2 (Par / Derecha — Aplicación Clínica & Autoevaluación):**
  - Salto de página forzado en CSS: `.case-row { page-break-before: always; break-before: page; }`.
  - Columna Izquierda: **Caso Clínico Real EUNACOM** (viñeta de 70 palabras + resolución razonada de 50 palabras).
  - Columna Derecha: **5 a 6 Reglas de Oro EUNACOM** (perlas mnemotécnicas y trampas de examen).
  - Fila Inferior: **Banco de Autoevaluación** con **2 preguntas tipo examen** (enunciado + alternativas A–E).
  - **REGLA DE ORO:** Las respuestas correctas y explicaciones NO se muestran en la página 2; van al Solucionario al final del libro.

### B. Síntesis de Bloque en 1 Sola Página:
- Cada bloque temático cierra con una síntesis operativa de **estrictamente 1 sola página**.
- No duplicar la matriz de reconstrucciones que ya se presentó en la portadilla del bloque.

### C. Compilación y Validación:
- Ejecutar: `node run_local.cjs <especialidad>` o `node books/scripts/build_book.cjs <especialidad>`.
- Verificar que el conteo de páginas sea exactamente el esperado (ej. 71 páginas en Infectología y Cardiología).
- El PDF final se guarda en `books/dist/Manual_EUNACOM_<Especialidad>_Completo_2026.pdf`.

---

## 🎬 3. Masterclass Creation Workflow: Perfil V3 14-Slide Standard

When authoring or generating a masterclass:

### A. Las 14 Diapositivas Canónicas:
1. **Portada & Códigos Oficiales V3**
2. **Matriz de Exigencia Legal APS** (Diagnóstico, Tratamiento, Seguimiento, GES)
3. **Criterios Diagnósticos** (Diamond-Forrester, Duke, Jones, etc.)
4. **Clasificación Clínica** (Típico vs Atípico)
5. **Escala Funcional / Severidad** (CCS, NYHA, CURB-65)
6. **Fisiopatología de Alto Rendimiento**
7. **Selección del Test Diagnóstico en APS**
8. **Criterios de Positividad y Estudio de Elección**
9. **Estratificación de Riesgo & Derivación a Nivel Secundario**
10. **Farmacoterapia de Primera Línea y Dosificaciones en Chile**
11. **Metas Terapéuticas y Prevención Secundaria**
12. **Trampas Frecuentes de Examen y Variantes Raras**
13. **3 Casos Clínicos Reales con Selección Múltiple**
14. **Checklist de Síntesis High-Yield**

### B. Automatización de Audio y Video:
- Inyectar el guion de teleprompter con marcas `[SLIDE 1]` a `[SLIDE 14]`.
- Generar manifiesto de audio: `node classes/scripts/generate_class_audio.cjs --class=<id>`.
- Exportar video MP4 1080p: `node classes/scripts/render_class_video.cjs --class=<id>`.

---

## 🚀 4. Comandos Locales Disponibles

En el directorio raíz del hub (`d:\Anti\eunacom-publishing-hub`):
- `npm start` o `node run_local.cjs` → Menú interactivo CLI.
- `node run_local.cjs infecto` → Compilar Infectología.
- `node run_local.cjs gastro` → Compilar Gastroenterología.
- `node run_local.cjs cardio` → Compilar Cardiología.
- `node run_local.cjs all` → Compilar todos los tomos oficiales.
- `node run_local.cjs audio cardio-01` → Manifiesto de audio.
