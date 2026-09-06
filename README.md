# EUNACOM 2026 Publishing & Masterclass Studio Hub

Ecosistema unificado y autónomo para la autoría, maquetación editorial y producción multimedia de la preparación médica **EUNACOM 2026** en Chile, alineado al 100% con el **Perfil V3 de ASOFAMECh** (314 códigos y 547 clases clínicas).

Este repositorio es completamente **autocontenido**: cualquier desarrollador o docente médico puede clonarlo, instalar dependencias y compilar tanto los manuales de alta densidad en PDF como ejecutar o renderizar las clases interactivas sin depender de aplicaciones externas.

> [!TIP]
> **Acceso Rápido al Hub Editorial**:
> * **Ruta Local en Disco:** `D:\Anti\eunacom-publishing-hub`
> * **Repositorio GitHub:** [`https://github.com/dryanez/eunacom--publishing-hub`](https://github.com/dryanez/eunacom--publishing-hub)
> * **Manuales Compilados (PDFs):** [`D:\Anti\eunacom-publishing-hub\books\dist`](file:///d:/Anti/eunacom-publishing-hub/books/dist)
> * **Abrir en VS Code / Terminal:** `code D:\Anti\eunacom-publishing-hub` o `cd D:\Anti\eunacom-publishing-hub`

---

## 🏛️ Arquitectura del Repositorio

El proyecto se divide en dos grandes subsistemas independientes y complementarios:

```text
eunacom-publishing-hub/
│
├── books/                        # SUBSISTEMA 1: Motor Editorial de Libros y Manuales
│   ├── dist/                     # Manuales oficiales compilados en PDF (Infecto, Gastro, Cardio)
│   ├── docs/                     # Estándar editorial Gastro 2-Page y Sistema de Colores
│   ├── figuras/                  # Láminas y trazados clínicos de alta resolución
│   ├── scripts/                  # Compilador Puppeteer y Datasets de especialidades
│   ├── svg_diagrams/             # Diagramas vectoriales de decisión médica
│   ├── package.json              # Dependencias y comandos de compilación de libros
│   └── README.md                 # Documentación técnica completa del motor de libros
│
└── classes/                      # SUBSISTEMA 2: Estudio de Masterclasses y Nuevo Currículum
    ├── curriculum/               # Catálogos oficiales Perfil V3 y matrices de bloques
    ├── decks/                    # Motor de diapositivas interactivas en React (14 slides)
    ├── dist/                     # Salidas de audio ElevenLabs y videos MP4 Full HD
    ├── docs/                     # Especificación pedagógica de masterclasses
    ├── scripts/                  # Generación de audio TTS y renderizador de video
    ├── package.json              # Dependencias del estudio de clases
    └── README.md                 # Documentación técnica completa del motor de clases
```

---

## 📖 1. Subsistema de Libros (`books/`)

El motor de publicación editorial compila manuales de alta densidad clínica estilo CTO / First Aid en formato A4 con estricta adherencia al **Estándar Editorial de 2 Páginas**:

- **Página Izquierda**: Identificación oficial, contexto EUNACOM, prosa clínica a doble columna (~300 palabras), árbol de decisión vectorial SVG de 3 filas y tabla comparativa de 4 filas con dosis y criterios.
- **Página Derecha**: Caso clínico real comentado, 5 a 6 reglas de oro de examen y banco de autoevaluación con 2 preguntas tipo EUNACOM (sin respuestas visibles en la página).
- **Cierre del Manual**: Síntesis de bloque en 1 sola página y Solucionario razonado al final del tomo.

### Compilación Rápida:
```bash
cd books
npm install
npm run build:infectologia   # Compila el manual completo de Infectología (71 páginas)
npm run build:gastro         # Compila el manual de Gastroenterología
npm run build:cardio         # Compila el manual completo de Cardiología
npm run build:neumo          # Compila el manual completo de Respiratorio (71 páginas)
```

*Detalles completos en [`books/README.md`](./books/README.md) y [`books/docs/GASTRO_2PAGE_EDITORIAL_STANDARD.md`](./books/docs/GASTRO_2PAGE_EDITORIAL_STANDARD.md).*

---

## 🎓 2. Subsistema de Clases (`classes/`)

El estudio de masterclasses permite dictar lecciones interactivas, generar locución con inteligencia artificial y renderizar videos educativos de alta calidad:

- **Currículum Oficial Perfil V3**: Jerarquizado en 5 módulos y bloques clínicos según el temario de ASOFAMECh.
- **Motor React de Diapositivas**: Navegación por teclado, sincronización de audio y pizarra táctil (`Annotator`) para dibujar sobre trazados y figuras.
- **Arquitectura de 14 Diapositivas**: Portada, Matriz legal APS, Fisiopatología, Algoritmo de urgencia, Farmacoterapia y dosificación, Trampas de examen, 3 Casos clínicos reales y Resumen de alta retención.
- **Síntesis de Voz (ElevenLabs)**: Guiones de teleprompter estructurados con marcas `[SLIDE X]` que generan audio MP3 y manifiestos de tiempo automáticos.
- **Renderizador de Video MP4**: Exportación automatizada a 1080p 60fps usando Puppeteer y FFmpeg.

### Ejecución Rápida:
```bash
cd classes
npm install
npm run audio:cardio-01      # Genera manifiesto de guiones de teleprompter
npm run video:export         # Exporta la clase a video MP4 Full HD 1080p
```

*Detalles completos en [`classes/README.md`](./classes/README.md) y [`classes/docs/PERFIL_V3_PEDAGOGICAL_SPEC.md`](./classes/docs/PERFIL_V3_PEDAGOGICAL_SPEC.md).*

---

## 🛠️ Requisitos del Sistema

- **Node.js**: Versión 18.0 o superior recomendada.
- **FFmpeg**: Opcional (requerido únicamente para la exportación de video MP4 en `classes/`).
- **Navegador**: Chrome / Chromium (descargado automáticamente por Puppeteer).

---

## 📜 Licencia y Autoría

Desarrollado para el ecosistema docente de preparación médica **EUNACOM 2026**. Contenido médico y algoritmos calibrados conforme a las Guías Clínicas GES / MINSAL vigentes en Chile.
