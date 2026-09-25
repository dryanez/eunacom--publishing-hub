# Traspaso · guiones docentes EUNACOM (para la próxima sesión de Claude)

Rama de trabajo: `claude/loving-ramanujan-0cwrvg` (hacer `git pull` al empezar y antes de cada push).

## Estado al 25-09-2026
- **Módulo 1: 216/216 clases con guion docente** en `classes/lessons/<id>.cjs` (Cardiología excluida a pedido del usuario).
  Reumatología la escribió Antigravity; el resto, agentes Claude.
- Reproductor compilado: `classes/decks/Reproductor_Suiza_Oficial.html` (artifact privado del usuario: claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R).
- Guion hablado exportado para la GPU: `classes/narration/` (~2,6 M caracteres, ~48 h de audio).
- Revisión médica pendiente: `classes/docs/REVISION_CONTENIDO.md` (notas A/B/C/D por libro).

## Cómo se trabaja (reglas del usuario)
- Estándar: `classes/docs/LESSON_STANDARD.md` (modelo gastro-01/02; tamaño dinámico, sin mínimo ni máximo de diapositivas).
- Instrucciones de cada agente: `classes/docs/AGENT_BRIEF.md`. Preguntas reales: `classes/scripts/class_questions.cjs` (por id y `--search`).
  Nunca usar fechas de preguntas que da el libro; nunca reconstruir alternativas de una pregunta corrupta; descartar preguntas cuya clave contradice el libro.
- **Un solo agente a la vez, modelo Sonnet** (`model: "sonnet"`), 3–4 clases por agente, en background.
  Sonnet quedó probado en gastro-03..05 con calidad igual a Opus.
- Validar con `node classes/scripts/check_lesson.cjs <id>`. Progreso: `node classes/scripts/progress.cjs`.
- Autosave: `bash classes/scripts/autosave_lessons.sh 300` en background (commit + push de clases que pasan el checker).
- Al terminar cada agente: pasar sus notas A/B/C/D a `REVISION_CONTENIDO.md` (sección del libro), commit + push, lanzar el siguiente.
- Hablarle al usuario en español simple; respuestas cortas.

## Tarea 1 · revisión de Gastro — TERMINADA (25-09-2026)
Gastro fue el primer libro y quedó con preguntas "Caso representativo" o con fechas inventadas del libro, y algunas clases
recortadas por un límite de diapositivas que ya no existe.
- **gastro-01..26: todas revisadas y pasan el checker.** (01, 02 son el modelo, no se tocaron; 03..26 revisadas por agentes Sonnet.)
- Quedan algunos "Caso representativo" sin fecha donde no existe pregunta real en el banco para ese tema exacto (documentado,
  no es un pendiente — ver `REVISION_CONTENIDO.md` sección Gastroenterología para el detalle por clase).
- Reproductor y narración reconstruidos con las 26 clases: `node classes/scripts/build_swiss_player.cjs` y
  `node classes/scripts/export_narration.cjs` ya corridos, commit + push hecho. Falta republicar el Artifact (misma URL,
  claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R) si el usuario lo pide.

## Tarea 2 · los otros módulos (2, 3 y Salud Pública)
Hay libros listos en `books/scripts/dataset_*.cjs` para: cirugía, dermatología, oftalmología, otorrino, psiquiatría, traumatología,
urología, ginecología, obstetricia, pediatría y salud pública. Antes de lanzar agentes:
1. Confirmar con el usuario qué módulo va primero.
2. Generar los mazos: `node books/scripts/dataset_to_deck_data.cjs <libro> --all --save` (revisar prefijos de id y tier de cada dataset;
   algunos datasets son un solo archivo grande y otros por bloques).
3. Agregar el libro a `SPECIALTIES` en `classes/scripts/build_swiss_player.cjs` y a `BOOKS` en `classes/scripts/progress.cjs`.
4. Actualizar `classes/docs/COLA_AGENTES.md` con los grupos nuevos y seguir la misma mecánica (un agente Sonnet a la vez).

## Programación automática
Existe un Routine "Guiones Módulo 1 · cada 5 h desde 6:00 Polonia" (trigger `trig_012D12TwgLtZAc2RFx7TkpyD`) que despierta a la
**sesión anterior**. Si esta sesión nueva toma el trabajo, desactivarlo (`update_trigger` enabled=false) y crear uno propio si hace falta,
para que no trabajen dos sesiones a la vez.
