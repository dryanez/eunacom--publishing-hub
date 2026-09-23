---
name: masterclass-studio-creator
description: >-
  Guide and pipeline for creating, scripting, and rendering EUNACOM 2026 Perfil V3 Masterclasses (14-slide interactive decks, ElevenLabs audio synthesis, and 1080p Full HD MP4 videos).
---

# Masterclass Studio Creator Skill (EUNACOM 2026 Perfil V3)

Use this skill whenever creating new Masterclasses, developing slide decks in `src/slides/`, writing clinical scripts in `perfil_v3_catalog.json`, synthesizing audio with ElevenLabs, or rendering 1080p videos with Puppeteer + FFmpeg.

---

## 1. 14-Slide Anatomical Standard

Every Masterclass MUST adhere strictly to the 14-slide pedagogy:

| Slide | Component | Clinical Purpose |
|---|---|---|
| **1** | `<Cover>` | Official title, historical frequency (2013-2025), and high-yield badges |
| **2** | `<Bento>` / `<Steps>` | Definition, cardinal pathophysiology, and core clinical presentation (Audit matrices are strictly excluded) |
| **3** | `<Steps>` | Diagnostic criteria, differential diagnosis, and staging |
| **4** | `<Steps>` / `<Bento>` | Resuscitation & Emergency Algorithm (ABCDE, access, fluid therapy, targets) |
| **5** | `<Table>` / `<Bento>` | Detailed Pharmacotherapy with exact dosing, routes, and duration |
| **6** | `<Table>` | Prognostic classification / Gold Standard score (Forrest, Killip, TIMI, etc.) |
| **7** | `<Steps>` | Diagnostic / Therapeutic procedures (Technique, indications, salvage) |
| **8** | `<Contrast>` / `<Table>` | Differential diagnosis & subtype management |
| **9** | `<Bento>` | Risk stratification & clinical scores (Glasgow-Blatchford, Rockall, etc.) |
| **10** | `<Steps>` | The 4 classic pitfalls in the EUNACOM question bank |
| **11** | `<QuestionSlide>` | **Clinical Case #1**: Diagnosis and initial resuscitation |
| **12** | `<QuestionSlide>` | **Clinical Case #2**: Pharmacological management / procedure |
| **13** | `<QuestionSlide>` | **Clinical Case #3**: Emergency decision making / differential |
| **14** | `<Steps>` | Summary decision algorithm (High-fidelity checklist) |

---

## 2. Production Workflow

### Step 1: Create the Slide Deck Component
- Create `src/slides/<Specialty><Number>Deck.jsx` (e.g., `Gastro02Deck.jsx`, `Cardio02Deck.jsx`) matching the 14-slide structure from `Gastro01Deck.jsx` and `Cardio01Deck.jsx`.
- Use the visual deck components: `<Cover>`, `<Table>`, `<Steps>`, `<Bento>`, `<Contrast>`, `<QuestionSlide>`.

### Step 2: Register in `DeckRunner.jsx`
- Import the new deck and map the conditional route for `classId` in `src/slides/DeckRunner.jsx`.

### Step 3: Write Clinical Script & Teleprompter
- Add the class entry and write the `teleprompterScript` in `src/data/studio/perfil_v3_catalog.json` with explicit `[SLIDE 1]` through `[SLIDE 14]` markers.

### Step 4: Synthesize Audio (ElevenLabs)
- Run `node scripts/generate_class_audio.cjs --class=<classId>` (uses `eleven_multilingual_v2` model).
- Generates `public/audio/<classId>/slide_*.mp3` and `manifest.json`.

### Step 5: Render 1080p Full HD MP4 Video
- Run `node scripts/render_class_video.cjs --class=<classId>`.
- Generates final video in `public/videos/<classId>.mp4` and `dist/videos/<classId>.mp4`.

---

## 3. Guevara Flow & Concise Anchors Standard

1. **Puntos Ancla vs. Bloques de Texto**: Prohibido el uso de párrafos apiñados en tarjetas. Cada tarjeta se estructura en viñetas concisas con palabras clave en negrita y cajas clínicas destacadas (tipografía 16.5–18px) llenando verticalmente el lienzo sin dejar espacios muertos.
2. **Correlación Estricta Audio-Visual**: Todo fármaco, dosis o concepto mencionado en el audio debe estar estrictamente anclado en la diapositiva en pantalla. Prohibido hablar de fármacos o conductas que no pertenezcan al slide activo.
3. **Diagramas de Flujo SVG Integradores ("Guevara Flow")**: Toda clase médica debe consolidar la toma de decisiones con un árbol de decisión clínico interactivo en SVG con bifurcaciones claras ("Si es esto → se va a esto") antes de abordar los casos clínicos oficiales.
