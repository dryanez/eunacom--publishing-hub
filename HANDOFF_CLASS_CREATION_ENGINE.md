# EUNACOM 2026 Masterclass & Publishing Engine — Comprehensive AI Handoff

> **Document Version:** 1.0.0  
> **Target Audience:** Next AI Agent / Autonomous Engineering Team  
> **Workspace:** `d:\Anti\eunacom-publishing-hub`  
> **Scope:** Full-cycle production of EUNACOM 2026 study manuals, Swiss Masterclass Decks, interactive players, Remotion animated video presentations, and Perfil V3 clinical decision pathways.

---

## 1. Executive Summary & Project Purpose

This repository is the central engine for **EUNACOM 2026** (Chile's National Medical Licensure Examination) preparation products:
1. **Official Study Manuals (Book Engine):** High-density, 2-page-per-topic A4 editorial standard (CTO / First Aid style in Puppeteer PDF).
2. **Masterclasses (Deck & Studio Engine):** 12 to 14-slide interactive presentations with neural audio (`es-CL-LorenzoNeural` / ElevenLabs), interactive question banks, decision algorithms, and 1080p Full HD video exports.
3. **Core Philosophy:** Strictly aligned with **Perfil V3 ASOFAMECh** (competencies of a Chilean General Practitioner in Primary Care / APS and Emergency). Sub-specialty trivia (e.g., Seattle 4-quadrant centimeter protocols, endoscopic submucosal dissections) is **strictly eliminated** in favor of practical clinical conduct, red flags, first-line pharmacotherapy, and referral rules.

---

## 2. Directory Architecture & Key Files

```text
eunacom-publishing-hub/
├── books/                                     # Book Publishing Engine
│   ├── docs/
│   │   ├── GASTRO_2PAGE_EDITORIAL_STANDARD.md # 2-page vertical budget standard
│   │   └── COLOR_SYSTEM_AND_TOKENS.md         # Specialty color palettes
│   ├── scripts/
│   │   ├── dataset_gastroenterologia.cjs      # CANONICAL SOURCE OF TRUTH (26 classes)
│   │   ├── dataset_*.cjs                      # Datasets for Nefro, Cardio, Diab, etc.
│   │   └── flow_builder.cjs                   # Vector SVG flowchart generator
│   ├── svg_diagrams/                          # Clinical decision flowcharts (SVGs)
│   │   ├── algo_erge_barrett.svg              # ERGE & Barrett flowchart
│   │   ├── algo_dispepsia_ulcera.svg          # Dyspepsia & Peptic Ulcer flowchart
│   │   ├── algo_hda.svg, algo_dm2_dx.svg...   # 38+ existing book flowcharts
│   └── dist/                                  # Compiled book PDFs
│
├── classes/                                   # Masterclass Studio & Interactive Player
│   ├── curriculum/
│   │   ├── gastroenterologia_decks_data.json  # Deck definitions for gastro-01 to gastro-26
│   │   ├── nefrologia_decks_data.json         # Deck definitions for nefro-01 to nefro-22
│   │   ├── eunacom_intro_deck.json            # Class 00: Official EUNACOM 101 Induction
│   │   └── perfil_v3_gastro_exact.json        # Exact ASOFAMECh codes & competencies
│   ├── decks/
│   │   └── Reproductor_Suiza_Oficial.html     # COMPILED INTERACTIVE PLAYER (All classes)
│   ├── scripts/
│   │   ├── player_template.html               # Master Swiss UI Player template (HTML/CSS/JS)
│   │   ├── build_swiss_player.cjs             # Compiler: injects decks & SVGs into player
│   │   ├── update_gastro_curriculum.py        # Updates slide cards & voiceovers in JSON
│   │   ├── generate_audio_neural.py           # Neural TTS synthesis (es-CL-LorenzoNeural)
│   │   ├── generate_class_audio.cjs           # ElevenLabs audio synthesis pipeline
│   │   ├── render_class_video.cjs             # Video renderer (Puppeteer + FFmpeg)
│   │   └── take_screenshots.cjs               # Automated visual QA & zero-emoji auditor
│   └── dist/                                  # Exported MP4 videos & assets
│
└── .agents/skills/
    ├── eunacom-manual-editorial-standard/     # 2-Page book standard skill
    ├── masterclass-studio-creator/            # 14-slide masterclass studio skill
    └── eunacom-publisher/                     # Production compiler skill
```

---

## 3. The Canonical Source of Truth (`dataset_*.cjs`)

**CRITICAL RULE:** Never invent medical facts, clinical vignettes, tables, or questions.  
Every class is extracted directly from the canonical book dataset:
- Example: [`books/scripts/dataset_gastroenterologia.cjs`](file:///d:/Anti/eunacom-publishing-hub/books/scripts/dataset_gastroenterologia.cjs)

### Structure of each class entry:
```javascript
{
  id: 'gastro-01', classId: 'gastro-01', tier: 2,
  blockNum: 1, blockName: 'Esófago y Estómago',
  topicLabel: '1.1', title: 'Enfermedad por Reflujo Gastroesofágico y Esófago de Barrett',
  perfilCode: '1.06.1.027', dx: 'Específico', tx: 'Completo', seg: 'Completo',
  ges: 'Norma MINSAL de dispepsia y uso racional de IBP',
  reconstrucciones: 'EUNACOM 2013 (Q#12) · EUNACOM Julio 2015 (Q#124)...',
  frecuencia: 'Alta rentabilidad · tema de tratamiento farmacológico',
  contexto: 'High yield clinical explanation of pathophysiology and exam rationale...',
  contentSections: [
    { subhead: '1. Definición y presentación clínica', paragraphs: [...] },
    { subhead: '2. Diagnóstico: cuándo basta la clínica y cuándo se endoscopia', paragraphs: [...] },
    { subhead: '3. Tratamiento', paragraphs: [...] },
    { subhead: '4. Esófago de Barrett', paragraphs: [...] }
  ],
  table: {
    title: 'ERGE — decisiones clave que se preguntan en el EUNACOM',
    headers: ['Escenario', 'Conducta correcta', 'Error frecuente'],
    rows: [...]
  },
  vignette: 'Mujer de 44 años consulta por pirosis retroesternal...',
  explicacion: 'Detailed clinical reasoning...',
  keyPoints: [
    'Pirosis + regurgitación típicas, sin alarma y < 50 años: diagnóstico clínico y prueba con IBP...',
    'Signos de alarma (disfagia, baja de peso, anemia, vómitos, > 50 años) obligan a endoscopía...',
    'Barrett sin displasia = IBP continuo; CIRUGÍA CONTRAINDICADA...'
  ],
  questions: [
    {
      stem: 'Authentic clinical vignette...',
      options: [{ id: 'A', text: '...' }, ...],
      correcta: 'A',
      explicacion: 'Step-by-step reasoning...',
      recTag: 'Reconstrucción EUNACOM 2013 · Pregunta #12'
    }
  ]
}
```

---

## 4. Masterclass Slide Layout & Editorial Standards

Each class deck has 12 to 14 slides adhering to the Swiss Editorial Standard (Clean, minimal, 100% emoji-free):

| Slide | Type | Visual Content | Audio / Teleprompter Script Focus |
|:---:|:---:|:---|:---|
| **01** | `cover` | Official Title, ASOFAMECh Code, Frequency Badges | Concise opening: "Bienvenidos a la clase de [Tema], código [X]..." Fast intro without repeating syllabus rules. |
| **02** | `bento` | **Fisiopatología & Mecanismos** (2 Cards, 3 chips each) | Explains the "why" and physiological mechanism. |
| **03** | `bento` | **Cuadro Clínico & Diagnóstico** (Típico vs Atípico) | Explains symptoms, red flags, and diagnostic thresholds. |
| **04** | `bento` | **Banderas Rojas & Criterios de EDA** | Highlights danger signs (dysphagia, weight loss, age $\ge 50$). |
| **05** | `bento` | **Formas Especiales / Farmacoterapia** | Dosing, treatment duration, and contraindications. |
| **06** | `figure` | **Algoritmo Clínico de Decisión (Vector Flowchart)** | Step-by-step walkthrough of the clinical decision tree. |
| **07** | `table` | **Matriz de Decisiones Clave EUNACOM** | Direct contrast: Scenario $\to$ Correct Conduct $\to$ Classic Trap. |
| **08–10** | `question` | **Banco Oficial de Casos EUNACOM** (Active Recall) | Reads the vignette, analyzes distractors, reveals correct answer. |
| **Final** | `bento` | **Reglas de Oro del Examen EUNACOM** | Final high-yield takeaways and mnemonics. |

---

## 5. Decision Tree Flowchart Standards (What the User Demands)

The user specifically clarified how algorithms must look:
> *"No entiendo por qué tienes todo sin flechas... tienes que tener un algoritmo... no dos cajas grandes con párrafos."*

### Flowchart Architecture Rules:
1. **Entry Node (Top Center)**: The presenting clinical complaint (e.g., `PACIENTE CON SOSPECHA DE ERGE`).
2. **Connector Arrow $\downarrow$ to Decision Node**: Triage question with criteria (e.g., `¿Banderas Rojas o Edad ≥ 50 años?`).
3. **Bifurcation Arrows (SÍ / NO)**:
   - **Branch SÍ (Red)** $\longrightarrow$ Target: **EDA Inmediata con Biopsias**.
     - Sub-branches: Pathological findings $\to$ Barrett with dysplasia (Urgent referral) vs Barrett without dysplasia (Medical PPI + surveillance, surgery contraindicated) vs Normal.
   - **Branch NO (Blue)** $\longrightarrow$ Target: **Manejo Clínico en APS**.
     - Sub-branches: Typical symptoms $\to$ Empirical PPI trial (4–8w) $\to$ Response $>75\%$ confirms ERGE vs Atypical symptoms $\to$ Cardiac workup (ECG + troponins) $\to$ Double PPI + 24h pH-impedance.
4. **Bottom Box**: High-yield exam pearls & critical emergencies in 2 columns (clean lines $<60$ chars to prevent overflow).
5. **No Font Bloating**: Ensure `build_swiss_player.cjs` never replaces SVG `font-size` with larger values.

---

## 6. Voiceover & Audio Engine Standards

- **Locutor**: Chilean Spanish neural voice (`es-CL-LorenzoNeural` via EdgeTTS/Azure) or ElevenLabs (`eleven_multilingual_v2`).
- **Tone**: Engaging, authoritative senior clinician explaining the medical reasoning to residents.
- **NO Robotic Phrases**:
  - ❌ NEVER say: *"Punto 1"*, *"Punto 2"*, *"mira cómo conecta con la siguiente slide"*, *"alerta 1"*, *"criterio G"*.
  - ❌ NEVER recite the bullet text verbatim like a teleprompter reader.
  - ❌ NEVER talk about future drugs (e.g., Omeprazol dosing) on early pathophysiology slides.
- **Natural Engagement**: The speaker takes the core idea of each chip and explains the clinical *rationale* ("por qué ocurre y qué conducta salva al paciente").

---

## 7. Next Upgrades Specifically Requested by User

When taking over, focus on these three user requirements:

### A. Full-Width Layout for Questions & Answers
- **User Request:** *"preguntas the answers each one should take the whole width"*
- **Implementation:** In `player_template.html`, ensure the QBank options `.q-opt` take `width: 100%;` across the entire container, with ample horizontal padding, clear typography, and responsive alignment.

### B. Remotion-Based Animated Presentation Engine
- **User Request:** *"please use remotion... to make nice presentation.. where there is nice transition! where if we talking about one thing for example the incompetencia de la barrera antirreflujo this becomes in the middle expands .. then each punto mecanismo primario pop in the middle nice boxes idk something nicer.."*
- **Action Plan for Next Agent:**
  1. Initialize or integrate a Remotion project in `classes/remotion_studio/` (or update `render_class_video.cjs`).
  2. Implement Spring / Interpolation animations:
     - When a topic begins (e.g., *Incompetencia de la barrera antirreflujo*), the card enters smoothly, centers, and scales up (`transform: scale(...)`).
     - Sub-chips (*Mecanismo primario*, *Relajaciones transitorias*, *Tono basal*) pop in sequentially with staggered delays (`frame > delay ? spring(...) : 0`).
     - Camera/pan effect focusing on the active talking point in sync with the audio duration.
  3. Export compositions to 1080p Full HD MP4 (`1920x1080` at 30fps).

### C. Step-by-Step Graphical Pathway Visualization
- **User Request:** *"i dont see them in the html you gave us ..i just see two things 50 year old or not then a lot of just words i dont see a nice pathway that we should have for all our classes"*
- **Action Plan:**
  - Create a dedicated interactive graph component (or animated SVG path) where the pathway highlights node-by-node as the user steps through:
    `[Sospecha]` $\longrightarrow$ `[¿Alarma?]` $\overset{SÍ}{\longrightarrow}$ `[EDA]` $\longrightarrow$ `[Biopsia]` $\longrightarrow$ `[Conducta]`.
  - Ensure the student sees an actual graphical flowchart trail rather than static rectangular text cards.

### D. Automated Batch Loop Across All Classes (`gastro-03` to `gastro-26`)
- Write a looping script (or invoke subagents in parallel) that reads each class from `dataset_gastroenterologia.cjs`, generates its SVG decision tree flowchart, formats its bento cards and QBank, synthesizes neural audio, and compiles the master deck.

---

## 8. Essential Commands Cheat Sheet

```bash
# 1. Compile the master Swiss Player (all 49 classes):
node classes/scripts/build_swiss_player.cjs

# 2. Run automated visual audit & screenshots (Puppeteer headless):
node classes/scripts/take_screenshots.cjs

# 3. Synthesize neural audio for a specific class (e.g. gastro-01):
python classes/scripts/generate_audio_neural.py gastro-01

# 4. View compiled player in browser:
# Open file:///d:/Anti/eunacom-publishing-hub/classes/decks/Reproductor_Suiza_Oficial.html

# 5. Compile Gastro book PDF:
cd books && npm run build:gastro
```

---

## 9. Key Bugfixes Already Solved (Do Not Re-Introduce!)

1. **SVG Typography Bloat (SOLVED):**  
   In `build_swiss_player.cjs`, there was a regex forcibly multiplying `font-size` by 1.5x (`8.5` $\to$ `13`). This was removed. Do not re-add font size overrides to raw SVGs.
2. **Chip Box Prefix Parsing (SOLVED):**  
   In `player_template.html`, the parser was attempting to match `^([^:]{3,35}):` *after* injecting `<strong class="clinical-keyword">` tags, causing regex failure. It now extracts `colonMatch` on the raw string *first*, then formats the tag and body.
3. **Card Bullet Centering (SOLVED):**  
   In `player_template.html`, replaced `justify-content: space-around;` with `justify-content: center; gap: 12px;`, keeping cards vertically centered with zero awkward dead space.
4. **Zero-Emoji Compliance (CERTIFIED):**  
   All decks, labels, and SVGs are certified 100% emoji-free for a high-end Swiss medical editorial aesthetic.
