# Traspaso · guiones docentes EUNACOM (para la próxima sesión de Claude)

Rama de trabajo: `claude/loving-ramanujan-0cwrvg` (hacer `git pull` al empezar y antes de cada push).

## Estado al 25-09-2026
- **Módulo 1: 216/216 clases con guion docente** en `classes/lessons/<id>.cjs` (Cardiología excluida a pedido del usuario).
  Reumatología la escribió Antigravity; el resto, agentes Claude.
- **Módulo 2 (esta sesión): Dermatología 16/16 y Oftalmología 18/18 — AMBAS TERMINADAS.**
  Cirugía (18 clases) la está escribiendo Antigravity por su cuenta en la misma rama (iba en cirugia-07 al momento de escribir esto).
- **Total: 250/250 clases con guion docente** (216 Módulo 1 + 34 Módulo 2 de esta sesión; Cirugía de Antigravity no cuenta en `progress.cjs` porque ese libro no está en `BOOKS`).
- Ambos libros nuevos ya están agregados a `SPECIALTIES` en `build_swiss_player.cjs` y a `BOOKS` en `progress.cjs` — no falta ese paso para ellos.
- Reproductor compilado: `classes/decks/Reproductor_Suiza_Oficial.html` (artifact privado del usuario: claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R). Reconstruido con las 251 clases (incluye la de inducción).
- Guion hablado exportado para la GPU: `classes/narration/` (~3 M caracteres, ~55 h de audio).
- Revisión médica pendiente: `classes/docs/REVISION_CONTENIDO.md` (notas A/B/C/D por libro). Nota nueva en Dermatología/Oftalmología: varios códigos Perfil V3 devuelven preguntas reales de un tema vecino distinto (no del tema de la clase) — patrón confirmado muchas veces, los agentes ya lo resuelven buscando por tema en vez de confiar en el código. También hay 4 preguntas puntuales del banco real con datos corruptos, ya anotadas para que no se reusen (ver la nota general en Oftalmología).

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

## Tarea 2 · Dermatología y Oftalmología — TERMINADA (25-09-2026)
- **derma-01..16: todas escritas y pasan el checker.** Fuente: `books/scripts/dataset_dermatologia.cjs`.
- **oftal-01..18: todas escritas y pasan el checker.** Fuente: `books/scripts/dataset_oftalmologia.cjs`.
- Reproductor y narración reconstruidos con las 250 clases, commit + push hecho. Falta republicar el Artifact
  (misma URL, claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R) si el usuario lo pide.

## Tarea 3 · los módulos restantes (Cirugía resto, Módulo 3 y Salud Pública)
Antigravity sigue de forma independiente con Cirugía (18 clases, cirugia-01..18) en la misma rama — no tocar esas clases.
Faltan por completo (dataset y mazo ya existen en `books/scripts/dataset_*.cjs`, pero sin mazo generado en `classes/curriculum/`
para ginecología, obstetricia, pediatría, psiquiatría y salud pública — sí existe para otorrino, traumatología, urología):
otorrino, traumatología, urología, ginecología, obstetricia, pediatría, psiquiatría, salud pública.
1. Confirmar con el usuario qué libro va primero (y coordinar con lo que esté haciendo Antigravity para no pisarse).
2. Si el libro no tiene mazo en `classes/curriculum/<libro>_decks_data.json`: generarlo con
   `node books/scripts/dataset_to_deck_data.cjs <libro> --all --save` (revisar prefijos de id y tier de cada dataset;
   algunos datasets son un solo archivo grande y otros por bloques). Este mazo es solo referencia (ver AGENT_BRIEF.md),
   no el contenido final de la clase.
3. Agregar el libro a `SPECIALTIES` en `classes/scripts/build_swiss_player.cjs` y a `BOOKS` en `classes/scripts/progress.cjs`
   (ya está hecho para Dermatología y Oftalmología, sirven de ejemplo).
4. Actualizar `classes/docs/COLA_AGENTES.md` con los grupos nuevos y seguir la misma mecánica (un agente Sonnet a la vez,
   3-4 clases por agente, en background; ver los prompts usados para derma/oftal en el historial de esta sesión como modelo).
5. Ojo con el patrón ya confirmado en Gastro/Diabetes/Neumología/Dermatología/Oftalmología: los códigos Perfil V3 del libro
   a veces devuelven preguntas reales de un tema vecino distinto — buscar por tema (`--search`) y verificar el enunciado
   completo antes de usar una pregunta, no confiar solo en el código.

## Programación automática
Existe un Routine "Guiones Módulo 2 (Derma/Oftal) · cada 5 h desde 22:00 UTC" (trigger `trig_01KpAxai5Pkqao3v2njSA4hD`) que
despertaba a **esta sesión** para terminar Dermatología/Oftalmología — ya cumplió su tarea y debe desactivarse (o reescribirse
para el próximo libro) apenas se retome el trabajo. Si esta sesión nueva toma el trabajo, desactivarlo
(`update_trigger` enabled=false) y crear uno propio apuntando al libro que sigue, para que no trabajen dos sesiones a la vez.
El Routine viejo de Módulo 1 ("Guiones Módulo 1 · cada 5 h desde 6:00 Polonia", `trig_012D12TwgLtZAc2RFx7TkpyD`) ya estaba
desactivado desde el traspaso anterior.
