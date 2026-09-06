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

### If Manual Editorial is selected, choose the canonical tomo:
#### 🫀 Módulo 1: Medicina Interna (Tomos 01 al 10)
- **Tomo 01: Cardiología & Sistema Cardiovascular** (`cardiologia` · Naranja `#ea580c`) — 5 bloques, 23 clases (71 págs) · *Completado*
- **Tomo 02: Enfermedades Infecciosas & Microbiología** (`infectologia` · Oliva `#4d7c0f`) — 5 bloques, 24 clases (71 págs) · *Completado*
- **Tomo 03: Gastroenterología & Hepatología** (`gastroenterologia` · Verde Bosque `#15803d`) — 4 bloques, 26 clases (27 págs) · *Muestra canónica*
- **Tomo 04: Enfermedades Respiratorias & Neumología** (`neumologia` · Teal `#0f766e`) — Asma, EPOC, NAC, Derrame, TBC, TEP
- **Tomo 05: Nefrología & Medio Interno** (`nefrologia` · Ámbar `#a16207`) — AKI KDIGO, ERC, Trastornos Hidroelectrolíticos
- **Tomo 06: Diabetes Mellitus & Dislipidemias** (`diabetes` · Cian `#0891b2`) — DM2 GES, Insulinas, Cetoacidosis, EHH
- **Tomo 07: Endocrinología & Metabolismo** (`endocrinologia` · Violeta `#7c3aed`) — Tiroides, Suprarrenal, Calcio, Hipófisis
- **Tomo 08: Hematología & Oncología Médica** (`hematologia` · Carmesí `#be123c`) — Anemias, Leucemias, Linfomas, Coagulación
- **Tomo 09: Reumatología & Inmunología Clínica** (`reumatologia` · Granate `#9f1239`) — AR, LES, Espondiloartritis, Vasculitis
- **Tomo 10: Neurología & Geriatría** (`neurologia` · Púrpura `#6d28d9`) — ACV Isquémico/Hemorrágico GES, Cefaleas, Epilepsia

#### 🔪 Módulo 2: Cirugía y Especialidades Quirúrgicas (Tomos 11 al 17)
- **Tomo 11: Cirugía General, Abdomen Agudo & Anestesia** (`cirugia` · Pizarra `#334155`)
- **Tomo 12: Traumatología & Ortopedia** (`traumatologia` · Ámbar Cálido `#b45309`)
- **Tomo 13: Urología** (`urologia` · Azul Zafiro `#0369a1`)
- **Tomo 14: Otorrinolaringología (ORL)** (`otorrino` · Índigo `#4338ca`)
- **Tomo 15: Oftalmología** (`oftalmologia` · Cian Petróleo `#0e7490`)
- **Tomo 16: Dermatología** (`dermatologia` · Magenta `#a21caf`)
- **Tomo 17: Psiquiatría General & Salud Mental** (`psiquiatria` · Púrpura Real `#7e22ce`)

#### 👶 Módulo 3: Materno - Infantil (Tomos 18 al 20)
- **Tomo 18: Pediatría General & Neonatología** (`pediatria` · Bermellón `#c2410c`)
- **Tomo 19: Obstetricia & Medicina Materno-Fetal** (`obstetricia` · Borgoña `#9d174d`)
- **Tomo 20: Ginecología & Oncología Ginecológica** (`ginecologia` · Frambuesa `#be185d`)

#### ⚖️ Módulo 4: Salud Pública & Gestión (Tomo 21)
- **Tomo 21: Salud Pública, Epidemiología & Bioética** (`saludpublica` · Verde Esmeralda `#166534`)

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
