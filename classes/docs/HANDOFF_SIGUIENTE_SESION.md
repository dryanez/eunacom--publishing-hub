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

## Tarea 1 · terminar la revisión de Gastro
Gastro fue el primer libro y quedó con preguntas "Caso representativo" o con fechas inventadas del libro, y algunas clases
recortadas por un límite de diapositivas que ya no existe.
- Hecho: gastro-01, 02 (modelo, no tocar), 03, 04, 05.
- En curso al cerrar la sesión anterior: gastro-06..09 (revisar con `git log` si quedó guardado; si no, rehacer).
- Pendiente: gastro-10..13 · 14..17 · 18..21 · 22..26.
  Casos conocidos: gastro-10 descartó la pregunta real Diciembre 2017 · Pregunta 26; gastro-12 juntó 4 secciones en 2 diapositivas;
  gastro-16 juntó lesiones benignas y malignas y no tiene tabla de trampas; gastro-18: buscar Q#66 y Q#101 que el libro menciona;
  gastro-25 no tiene código Perfil (buscar por tema).
- Prompt de revisión: igual al de AGENT_BRIEF, pero "REVISE existing lessons, not rewrite them": reemplazar quizzes "Caso representativo"
  o con fecha del libro por preguntas reales, restaurar contenido recortado, mantener el resto.
- Al terminar: `node classes/scripts/build_swiss_player.cjs`, `node classes/scripts/export_narration.cjs`, commit + push,
  y republicar el reproductor (Artifact, misma URL) si el usuario lo pide.

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
