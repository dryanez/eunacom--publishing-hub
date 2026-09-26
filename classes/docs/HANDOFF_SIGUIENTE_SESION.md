# Traspaso · guiones docentes EUNACOM (para la próxima sesión de Claude)

Rama de trabajo: `claude/loving-ramanujan-0cwrvg` (hacer `git pull` al empezar y antes de cada push).

## Estado al 26-09-2026: CURRÍCULO COMPLETO (340/340) + reescritura de calidad terminada (72/72)

**Lo más importante de esta actualización:** el usuario detectó que las 4 libros que escribió Antigravity en paralelo
(Pediatría 22, Ginecología gin-05..16 = 12, Obstetricia 20, Cirugía 18 — total 72 clases) no cumplían el estándar:
- Voz impersonal ("debe/se debe/deben") en vez de "tú" directo al estudiante.
- Texto en pantalla (`d` de `points`/`flow`) demasiado largo: 47-92% de los campos superaban las ~10 palabras
  del estándar ("la pantalla muestra poco"), en vez de frases cortas.
- Cirugía además tenía el ratio de preguntas invertido: 30 "Caso representativo" vs 19 reales (al revés que
  cualquier otro libro del currículo).

**Se reescribieron las 72 clases desde cero** (sin que el agente leyera la versión anterior, para no heredar
nada), usando solo `books/scripts/dataset_<libro>.cjs` como fuente. Verificado con un script propio (el checker
NO valida esto) después de cada grupo:

| Libro | t>6 palabras (antes → después) | d>10 palabras (antes → después) | Reales vs Caso-repr |
|---|---|---|---|
| Pediatría | 56% → 0.7% | 92% → 0% | 71 vs 3 |
| Ginecología (05-16) | 22% → 1.5% | 66% → 0% | 62 vs 1 |
| Obstetricia | 11% → 0.9% | 47% → 0% | 71 vs 3 |
| Cirugía | 15% → 0% | 19% → 0% | 51 vs 4 (antes 19 vs 30, invertido) |

Detalles de instrucciones y progreso grupo por grupo: `classes/docs/COLA_REESCRITURA_CALIDAD.md` (ya completo,
puede archivarse o dejarse de referencia). Notas médicas/de banco encontradas durante la reescritura (preguntas
corruptas nuevas, discrepancias libro-vs-banco) están en `classes/docs/REVISION_CONTENIDO.md`, secciones
Pediatría/Ginecología/Obstetricia/Cirugía General.

Reproductor y narración ya reconstruidos con el contenido reescrito (`build_swiss_player.cjs` y
`export_narration.cjs` corridos, commit + push hecho). **Falta republicar el Artifact público si el usuario lo
pide** — mismo URL: claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R.

## Estado al 25-09-2026: CURRÍCULO COMPLETO — 340/340 clases

Todos los libros planeados están escritos y pasan `check_lesson.cjs`. Entre esta sesión (Claude) y una sesión
paralela de Antigravity (mismo branch), se terminaron los 4 módulos:

| Módulo | Libro | Clases | Quién |
|---|---|---|---|
| 1 | Gastroenterología | 26/26 (revisada con preguntas reales) | Claude |
| 1 | Neumología, Nefrología, Diabetes, Endocrinología, Hematología, Infectología, Neurología y Geriatría | 190/190 | Claude |
| 1 | Reumatología | 24/24 | Antigravity |
| 2 | Dermatología, Oftalmología | 34/34 | Claude |
| 2 | Cirugía General | 18/18 | Antigravity |
| 3 | Ginecología, Pediatría | 38/38 | Antigravity |
| 3 | Obstetricia | 20/20 | Antigravity (agregada a `SPECIALTIES`/`BOOKS` por Claude — Antigravity no lo hizo) |
| 4 | Salud Pública | 14/14 | Claude |
| — | Cardiología | 0/21 | **Excluida a pedido del usuario, no tocar** |

- Reproductor compilado: `classes/decks/Reproductor_Suiza_Oficial.html` (341 clases incl. inducción; artifact privado
  del usuario: claude.ai/artifact/3UF2UENnyJG4s6rbXWd84R). **Falta republicar el Artifact si el usuario lo pide** —
  el archivo local ya está actualizado, pero el Artifact público no se republica solo.
- Guion hablado exportado para la GPU: `classes/narration/` (340 clases, ~4 M caracteres, ~74 h de audio).
- Todos los libros están en `SPECIALTIES` (`build_swiss_player.cjs`) y `BOOKS` (`progress.cjs`) — verificar con
  `node classes/scripts/progress.cjs` (debe decir 340/340) antes de asumir que falta algo.
- Revisión médica: `classes/docs/REVISION_CONTENIDO.md` tiene notas A/B/C por libro. Patrones recurrentes documentados
  ahí (léelos antes de escribir preguntas reales en cualquier libro nuevo):
  1. Los códigos Perfil V3 del libro a veces apuntan a preguntas reales de un tema vecino distinto — buscar por tema
     (`--search`) y leer el enunciado completo, no confiar solo en el código.
  2. Varias preguntas puntuales del banco real están corruptas o son "disputadas" (texto con errores de OCR,
     comentarios de evaluador filtrados en una alternativa, respuesta que contradice su propia explicación) — cada
     una queda anotada por libro para no reusarlas.
  3. Alguna vez el banco real contradice lo que enseña el libro en un punto sustantivo (ej. sp-10, letalidad vs.
     mortalidad) — en ese caso se sigue el libro y se anota como nota B para que un humano arbitre.

## Cómo se trabaja (reglas del usuario)
- Estándar: `classes/docs/LESSON_STANDARD.md` (modelo gastro-01/02; tamaño dinámico, sin mínimo ni máximo de diapositivas).
- Instrucciones de cada agente: `classes/docs/AGENT_BRIEF.md`. Preguntas reales: `classes/scripts/class_questions.cjs` (por id y `--search`).
  Nunca usar fechas de preguntas que da el libro; nunca reconstruir alternativas de una pregunta corrupta; descartar preguntas cuya clave contradice el libro.
- **Un solo agente a la vez, modelo Sonnet** (`model: "sonnet"`), 3–4 clases por agente, en background.
- Validar con `node classes/scripts/check_lesson.cjs <id>`. Progreso: `node classes/scripts/progress.cjs`.
- Autosave: `bash classes/scripts/autosave_lessons.sh 300` en background (commit + push de clases que pasan el checker).
  No sobrevive a un reinicio del contenedor/sesión — revisar si está corriendo (`ps aux | grep autosave`) y relanzarlo si no.
- Al terminar cada agente: pasar sus notas A/B/C/D a `REVISION_CONTENIDO.md` (sección del libro), commit + push, lanzar el siguiente.
- Hablarle al usuario en español simple; respuestas cortas.
- Cuando se genera un mazo nuevo (`dataset_to_deck_data.cjs <libro> --all --save`): **no es solo referencia como dice
  AGENT_BRIEF.md** — el `build_swiss_player.cjs` lo necesita para el cover/badges de cada clase en el reproductor.
  Sin ese archivo en `classes/curriculum/<libro>_decks_data.json`, el libro no aparece en el reproductor aunque
  las clases estén escritas (esto pasó con Obstetricia — quedó invisible hasta que se generó el mazo a mano).

## Qué falta / posibles próximos pasos
1. **Cardiología** (21 clases) sigue excluida por pedido explícito del usuario — no lanzar agentes ahí sin que el
   usuario lo pida.
2. **Otorrinolaringología, Traumatología, Urología, Psiquiatría** (Módulo 2) nunca se empezaron. Otorrino, Traumatología
   y Urología ya tienen mazo generado en `classes/curriculum/`; Psiquiatría no. Nadie las está escribiendo.
3. Republicar el reproductor como Artifact (mismo URL) si el usuario lo pide — el HTML local ya tiene las 341 clases.
4. Revisar con un humano las notas B de `REVISION_CONTENIDO.md` (conflictos libro vs. banco real) y las preguntas
   corruptas/disputadas anotadas, por si conviene reportarlas o limpiarlas en la fuente.
5. Confirmar con el usuario si quiere seguir con algún libro nuevo, o si el proyecto de guiones docentes está
   terminado por ahora.

## Programación automática
Existe un Routine "Reescritura calidad Ped/Gin/Ob/Cirugía · cada 5 h" (trigger `trig_013k6hvbStGdKTUNzUdZgf1V`) bound
a esta sesión. **Ya cumplió su tarea (las 72 clases están reescritas y verificadas) y debe desactivarse** apenas se
retome el trabajo, o reescribirse para lo que siga si el usuario pide continuar. Los Routines anteriores
("Guiones Módulo 1" `trig_012D12TwgLtZAc2RFx7TkpyD`, "Guiones Módulo 2 (Derma/Oftal)" `trig_01KpAxai5Pkqao3v2njSA4hD`,
"Guiones Módulo 3/4 (Gine/Pedia/SaludPub)" `trig_016jfQXiWLsXwGd8PfkVTAdN`) ya están desactivados.

## Antes de escribir más clases nuevas
Si se retoma con otorrino/traumatología/urología/psiquiatría u otro libro nuevo, aplicar desde el principio el
estándar de voz "tú" + `d`≤10 palabras que costó una reescritura completa corregir acá — no asumir que "pasa el
checker" implica que cumple el estilo; el checker no valida ni el tono ni el largo del texto en pantalla. Correr
manualmente el conteo de palabras en `t`/`d` y buscar "debe/deben/se debe/ustedes" en los campos `say` antes de
dar por buena una clase nueva.
