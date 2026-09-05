# EUNACOM 2026 Masterclasses & New Curriculum Engine

Sistema integral para la creación, impartición y renderizado de **Masterclasses Interactivas EUNACOM 2026** alineadas al 100% con el **Perfil V3 de ASOFAMECh** (547 clases clínicas y 314 diagnósticos reglamentarios).

El subsistema incluye un motor de diapositivas en React con soporte para pizarra táctil y puntero en vivo, un pipeline de síntesis de voz con **ElevenLabs** y un exportador de video **Full HD 1080p MP4** automatizado con Puppeteer y FFmpeg.

---

## 🏛️ El Currículum Oficial Perfil V3

Todo el contenido académico se organiza en torno a los estándares oficiales del Ministerio de Salud (MINSAL) y la Asociación de Facultades de Medicina de Chile (ASOFAMECh):
- **Catálogo Maestro**: `classes/curriculum/MASTER_CURRICULUM_547_CATALOG.json`
- **Mapeo Perfil V3**: `classes/curriculum/perfil_v3_full.json` y `perfil_v3_catalog.json`
- **Bloques Clínicos Jerárquicos**: `classes/curriculum/BLOQUES_CLINICOS_JERARQUICOS_EUNACOM_2026.md`

Cada clase cuenta con sus códigos oficiales, nivel de competencia legal exigido (Diagnóstico, Tratamiento, Seguimiento) y enlaces a garantías GES.

---

## 🚀 Inicio Rápido

### 1. Instalación de Dependencias
```bash
cd classes
npm install
```

### 2. Generar Guion de Audio y Manifiesto de Sincronización
Para procesar el catálogo y generar los textos de teleprompter por diapositiva:
```bash
# Modo manifiesto (no requiere API key)
npm run audio:cardio-01

# Modo síntesis de voz real con ElevenLabs
export ELEVENLABS_API_KEY="tu_api_key_aqui"
export ELEVENLABS_VOICE_ID="pNInz6obpgDQGcFmaJgB"
node scripts/generate_class_audio.cjs --class=cardio-01
```
Los archivos de audio `.mp3` y el archivo `manifest.json` se escribirán en `classes/dist/audio/<clase>/`.

### 3. Renderizar Video 1080p Full HD MP4
Para exportar la clase como un archivo de video MP4 listo para YouTube o streaming:
```bash
node scripts/render_class_video.cjs --class=cardio-01 --url=http://localhost:5173
```
El renderizador:
1. Abre un navegador Chrome sin cabeza (*headless*) en resolución `1920x1080`.
2. Recorre las diapositivas sincronizando transiciones con la duración del audio.
3. Captura los fotogramas y los une mediante **FFmpeg** en un contenedor MP4 codificado en H.264.
4. Guarda el video final en `classes/dist/videos/cardio-01.mp4`.

---

## 💻 El Motor de Diapositivas React (`decks/engine`)

El reproductor de clases es completamente modular y desacoplado:

- **`<Deck>`**: Contenedor principal que maneja el ciclo de vida de la clase, atajos de teclado (flechas, espacio, tecla 'b' para pantalla negra) y la navegación.
- **`<DeckContext>`**: Proveedor de estado global que sincroniza el audio con el número de slide activo y los marcadores de animación.
- **`<Annotator>`**: Capa de dibujo sobre lienzo en tiempo real que permite al docente trazar círculos, flechas o subrayar trazados de ECG durante la exposición.
- **`<Slide>`**: Contenedor de diapositiva con gestión de notas de orador (`notes`) y títulos de navegación (`nav`).
- **`icons.jsx`**: Catálogo de iconos médicos vectoriales optimizados para alta visibilidad.

---

## 📚 Estructura de las Diapositivas (Estándar de 14 Slides)

Cada masterclass sigue una rigurosa arquitectura pedagógica de 14 pasos diseñada para maximizar el recuerdo en el examen:

1. **Portada & Códigos Oficiales**
2. **Matriz de Exigencia Legal Perfil V3**
3. **Criterios Diagnósticos Principales**
4. **Clasificación Clínica de la Enfermedad**
5. **Escala de Severidad / Clase Funcional**
6. **Fisiopatología Orientada al Examen**
7. **Selección del Test Diagnóstico**
8. **Criterios de Positividad y Examen de Elección**
9. **Estratificación de Riesgo y Derivación**
10. **Farmacoterapia de Primera Línea y Dosificaciones**
11. **Metas de Tratamiento y Prevención Secundaria**
12. **Trampas de Examen y Variantes Raras**
13. **3 Casos Clínicos Reales con Selección Múltiple**
14. **Checklist de Síntesis High-Yield**

*Consultar [`docs/PERFIL_V3_PEDAGOGICAL_SPEC.md`](./docs/PERFIL_V3_PEDAGOGICAL_SPEC.md) para el desglose detallado de cada diapositiva.*

---

## 📂 Estructura del Directorio

```text
classes/
├── package.json               # Dependencias del estudio
├── README.md                  # Este documento
├── curriculum/                # Catálogos maestros y mapeos Perfil V3
│   ├── MASTER_CURRICULUM_547_CATALOG.json
│   ├── perfil_v3_full.json
│   ├── perfil_v3_catalog.json
│   ├── cardio_catalog.json
│   ├── gastro_catalog.json
│   ├── TEMARIO_MAESTRO_BLOQUES_PERFIL_V3.md
│   ├── TEMARIO_OFICIAL_MODULO_1.md
│   ├── BLOQUES_CLINICOS_JERARQUICOS_EUNACOM_2026.md
│   └── AI_MASTERCLASS_GENERATOR_SOP.md
├── decks/                     # Diapositivas interactivas en React
│   ├── engine/
│   │   ├── Deck.jsx           # Reproductor maestro
│   │   ├── DeckContext.jsx    # Estado y sincronización de audio
│   │   ├── Annotator.jsx      # Pizarra y anotaciones en vivo
│   │   ├── Slide.jsx          # Diapositiva individual
│   │   ├── Build.jsx          # Animaciones paso a paso
│   │   └── icons.jsx          # Iconografía médica
│   ├── Cardio01Deck.jsx       # Masterclass Angina Estable & Cardiopatía Isquémica
│   ├── Cardio08Deck.jsx       # Masterclass Insuficiencia Cardíaca
│   ├── Gastro01Deck.jsx       # Masterclass ERGE & Esófago de Barrett
│   └── DeckRunner.jsx         # Router dinámico de clases
├── dist/                      # Salidas generadas
│   ├── audio/                 # Manifiestos y audios MP3 generados
│   └── videos/                # Videos MP4 1080p renderizados
├── docs/                      # Especificación pedagógica
│   └── PERFIL_V3_PEDAGOGICAL_SPEC.md
└── scripts/                   # Automatización CLI
    ├── generate_class_audio.cjs  # Síntesis ElevenLabs
    ├── render_class_video.cjs    # Renderizador de video Puppeteer + FFmpeg
    └── inject_cardio01_script.cjs# Inyector de guiones de teleprompter
```
