# Cola de agentes · guiones docentes Módulo 1

Regla: **un solo agente Claude a la vez, con modelo Sonnet** (prueba desde la revisión de Gastro), 3 clases por agente. **Reumatología: terminada por Antigravity (24/24)**; Claude no la toca.
Cada agente lee `classes/docs/AGENT_BRIEF.md`. Antes de escribir una clase revisa si ya existe y pasa
`check_lesson.cjs`; si es así, la salta. El estado real lo da `node classes/scripts/progress.cjs`.

## Orden
1. Hematología: hem-11..13 · hem-14..16 · hem-17..19 · hem-20..22 · hem-23..24 — **hecho**
2. Infectología (el dataset usa ids `inf-XX`): infecto-01..03 · 04..06 · 07..09 · 10..12 · 13..15 · 16..18 · 19..21 · 22..24 — **hecho**
3. Neurología y Geriatría: neuro-01..03 · 04..06 · 07..09 · 10..12 · 13..15 · 16..18 · 19..21 · 22..24 — **hecho**
4. Revisión de Gastro (reemplazar preguntas con fecha del libro o "Caso representativo" por preguntas reales;
   restaurar contenido recortado por el antiguo límite de diapositivas): gastro-01..05 · 06..09 · 10..13 · 14..17 · 18..21 · 22..26 — **hecho**
5. Módulo 2 (esta sesión — clases nuevas, no revisión):
   - Dermatología (16 clases, ids `derma-XX`): derma-01..04 **hecho** · 05..08 **hecho** · 09..12 **hecho** · 13..16 **hecho** — **LIBRO COMPLETO 16/16**
   - Oftalmología (18 clases, ids `oftal-XX`): oftal-01..04 · 05..08 · 09..12 · 13..15 · 16..18
   - (Antigravity sigue con el resto de Cirugía y otros libros del Módulo 3 por su cuenta)

## Prompt de cada agente
> Read /home/user/eunacom--publishing-hub/classes/docs/AGENT_BRIEF.md and follow it exactly. Book: <libro>
> (books/scripts/dataset_<libro>.cjs). Your classes: <a>, <b>, <c>. Before writing a class, check whether
> classes/lessons/<id>.cjs already exists and passes `node classes/scripts/check_lesson.cjs <id>`; if so, skip it.
> Write and validate each class file completely before starting the next one.

## Al terminar cada agente
Agregar sus notas A/B/C/D a `REVISION_CONTENIDO.md`, guardar (commit + push, con `git pull` antes) y lanzar el siguiente grupo.
