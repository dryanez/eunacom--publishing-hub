# EUNACOM 2026 Books Editorial Publishing Engine

Motor editorial automatizado de alta fidelidad para la compilación de los **Manuales Oficiales EUNACOM 2026** (estilo Maqueta 1b: alta densidad codificada tipo CTO / First Aid en A4).

El motor toma datasets clínicos modulares en JavaScript, resuelve de manera procedural diagramas de flujo SVG, inyecta tablas comparativas, aplica un estricto presupuesto vertical de **2 páginas por tema**, y genera PDFs listos para imprenta o distribución digital mediante Puppeteer.

---

## 📚 Tomos Disponibles y Compilados

| Tomo | Código | Especialidad | Clases / Temas | Preguntas | Páginas | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **04** | `infectologia` | Infectología | 24 temas (5 bloques) | 48 preguntas | **71 páginas** | **100% Calibrado** |
| **08** | `gastroenterologia` | Gastroenterología | 8 temas (Muestra canónica) | 16 preguntas | **27 páginas** | **100% Calibrado** |
| **01** | `cardiologia` | Cardiología | 23 temas (5 bloques) | 46 preguntas | **71 páginas** | **100% Calibrado** |

Los PDFs compilados de referencia se encuentran listos para lectura en `books/dist/`.

---

## 🚀 Inicio Rápido

### 1. Requisitos Previos
- Node.js versión 18 o superior.
- Puppeteer (`npm install` dentro del directorio `books/`).

```bash
cd books
npm install
```

### 2. Compilar un Manual Específico

```bash
# Compilar Infectología (24 temas, 5 bloques)
npm run build:infectologia

# Compilar Gastroenterología (Muestra canónica)
npm run build:gastro

# Compilar Cardiología (23 temas con figuras clínicas)
npm run build:cardio

# O ejecutar directamente el script CLI:
node scripts/build_book.cjs infectologia
```

El PDF resultante se generará en `books/dist/` en aproximadamente **12 a 18 segundos**.

---

## 📐 El Estándar Editorial Gastro de 2 Páginas

Para garantizar que el manual sea un instrumento de estudio ágil y visualmente ordenado, cada tema clínico se adhiere estrictamente a la **Ley de las 2 Páginas**:

1. **Página 1 (Impar / Izquierda) — Anatomía del Fundamento Clínico:**
   - **Header de Tomo & Banda a Sangre:** Identificación cromática superior.
   - **Título y Badge de Código Perfil V3:** Diagnóstico específico según ASOFAMECh.
   - **Link a Plataforma Online:** Acceso directo a la lección interactiva.
   - **Contexto EUNACOM:** Párrafo clínico de alto rendimiento sobre relevancia de examen.
   - **Prosa a Doble Columna (~300 palabras):** Definición, etiología, fisiopatología y sospecha clínica.
   - **Algoritmo Vectorial SVG de 3 Filas (`flow`):** Árbol de decisión visual (~165px).
   - **Tabla Comparativa de Fármacos/Criterios:** 4 filas con dosificaciones y criterios diagnósticos.

2. **Página 2 (Par / Derecha) — Anatomía de la Aplicación y Autoevaluación:**
   - **Salto Forzado de Página:** `page-break-before: always; break-before: page;` en `.case-row`.
   - **Caso Clínico Real EUNACOM:** Viñeta clínica típica con explicación razonada (~120 palabras).
   - **5 a 6 Reglas de Oro:** Perlas mnemotécnicas y trampas frecuentes de examen.
   - **Banco de Autoevaluación (2 Preguntas):** Enunciado y opciones A–E (sin respuestas a la vista).

3. **Solucionario al Final del Libro:**
   - Las respuestas correctas y sus explicaciones exhaustivas se compilan en un apéndice final para fomentar el recuerdo activo (*active recall*).

*Para más detalles técnicos sobre presupuestos verticales en píxeles y márgenes, consultar [`docs/GASTRO_2PAGE_EDITORIAL_STANDARD.md`](./docs/GASTRO_2PAGE_EDITORIAL_STANDARD.md).*

---

## 🎨 Sistema Cromático

Cada especialidad cuenta con su propio color primario y 6 tonos calculados matemáticamente:
- **Infectología:** `#4d7c0f` (Oliva Clínico)
- **Gastroenterología:** `#15803d` (Verde Bosque)
- **Cardiología:** `#ea580c` (Naranja Fuego)

*Ver la guía completa de colores y tokens en [`docs/COLOR_SYSTEM_AND_TOKENS.md`](./docs/COLOR_SYSTEM_AND_TOKENS.md).*

---

## 📂 Estructura del Directorio

```text
books/
├── package.json               # Configuración y comandos npm
├── README.md                  # Este documento
├── dist/                      # PDFs oficiales compilados
│   ├── Manual_EUNACOM_Infectologia_Completo_2026.pdf
│   ├── Manual_EUNACOM_Gastroenterologia_Completo_2026.pdf
│   └── Manual_EUNACOM_Cardiologia_Completo_2026.pdf
├── docs/                      # Especificaciones editoriales y diseño
│   ├── GASTRO_2PAGE_EDITORIAL_STANDARD.md
│   └── COLOR_SYSTEM_AND_TOKENS.md
├── figuras/                   # Láminas clínicas y trazados de ECG (para Cardiología)
├── scripts/                   # Datasets y compilador principal
│   ├── build_book.cjs         # Compilador Puppeteer multi-especialidad
│   ├── dataset_infectologia.cjs
│   ├── dataset_infectologia_bloque_1.cjs
│   ├── dataset_infectologia_bloque_2.cjs
│   ├── dataset_infectologia_bloque_3.cjs
│   ├── dataset_infectologia_bloque_4.cjs
│   ├── dataset_infectologia_bloque_5.cjs
│   ├── dataset_gastroenterologia.cjs
│   ├── master_cardiology_23_full_dataset.cjs
│   ├── dataset_bloque_1.cjs … 5.cjs
│   └── figspec_cardiologia.cjs
└── svg_diagrams/              # 36 diagramas vectoriales SVG reutilizables
```

---

## ✍️ Cómo Crear una Nueva Especialidad

1. Crear el dataset modular en `scripts/dataset_<especialidad>.cjs` siguiendo la estructura de bloques (`bloque1`, `bloque2`...).
2. Cada tema debe exportar:
   ```javascript
   {
     id: 'esp-01',
     topicLabel: 'X.Y',
     title: 'Nombre del Tema',
     perfilCode: '1.XX.X.XXX',
     contexto: '...',
     contentSections: [ { title: '...', text: '...' } ],
     flowRows: [ ... ], // 3 filas para el árbol de decisión
     table: { title: '...', headers: [ ... ], rows: [ ... ] },
     vignette: '...',
     explicacion: '...',
     keyPoints: [ '...', '...' ],
     questions: [
       { stem: '...', options: ['A...', 'B...', 'C...', 'D...', 'E...'], correcta: 0, explicacion: '...' }
     ]
   }
   ```
3. Registrar la especialidad en el array `SPECIALTIES` en `scripts/build_book.cjs` con su clave y color de acento.
4. Ejecutar `node scripts/build_book.cjs <especialidad>`.

---

## 🔍 Vinculación Oficial de Reconstrucciones (`reconstruction_matcher.cjs`)

Para asegurar rigor académico absoluto y cero alucinaciones en los manuales:
- **Base de Datos Real:** Todas las referencias provienen de `books/data/real_questions_by_code.json` (2.708 preguntas clasificadas de los 16 exámenes históricos EUNACOM 2013–2025).
- **Motor de Matching:** `books/scripts/reconstruction_matcher.cjs` resuelve automáticamente las citas históricas a partir del código Perfil V3 (`perfilCode`).
- **Comportamiento Editorial:**
  - Si el tema tiene preguntas reales históricas: Cita exámenes y números reales (ej: `EUNACOM Julio 2024 (Q#62) · EUNACOM Diciembre 2024 (Q#99)`).
  - Si el tema no tiene antecedentes directos en 2013-2025: Declara con honestidad médica `Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026`.
  - El compilador `build_book.cjs` sincroniza automáticamente este campo para todas las fichas y la portadilla en tiempo de compilación.
