# Estándar de clase · Módulo 1 (modelo gastro 1.1 y 1.2)

**Referencia oficial:** `classes/lessons/gastro-01.cjs` y `classes/lessons/gastro-02.cjs`.
Toda clase nueva o reescrita de Módulo 1 se escribe con este estilo; el número de diapositivas depende del tamaño del tema. Si algo no está en este documento,
se copia lo que hacen esas dos clases.

## Idea central

- **La pantalla muestra poco:** puntos cortos (`t` ≤ ~6 palabras, `d` ≤ ~10 palabras).
- **La voz explica, no lee.** Cada `say` es un profesor hablando: explica el porqué,
  conecta con lo anterior y avisa qué es lo que se pregunta en el examen ("Esa diferencia se pregunta", "Ojo", "Fíjate").
- **Un hilo:** se parte del mecanismo, el mecanismo explica la clínica, la clínica decide el examen
  y el examen decide la conducta. Se conecta con clases anteriores cuando corresponde.
- Tono: español de Chile, se trata al estudiante de "tú", sin muletillas, con frases cortas.

## Fuente clínica (no se inventa contenido)

- El contenido sale del libro: `books/scripts/dataset_<especialidad>.cjs` (cardiología:
  `master_cardiology_23_full_dataset.cjs`), el tema con el mismo `id`.
- Las cifras, dosis, cortes GES y criterios deben coincidir con el libro.
- Las preguntas reales EUNACOM salen del **banco real** (`books/data/real_questions_by_code.json`, 2.708 preguntas con examen y fecha):
  `node classes/scripts/class_questions.cjs <id>` lista las del código de la clase, y
  `node classes/scripts/class_questions.cjs --search "término1|término2"` busca por tema en todo el banco
  (la clase cubre más temas que su código). Se copian tal cual (enunciado, alternativas, correcta) y el título es su `recTag`
  (p. ej. "EUNACOM Julio 2013 · Pregunta 12"). Se prefieren las de mayor confianza y las más recientes.
- Solo si el banco real no tiene ninguna pregunta del tema se usa una de `questions` del libro con la etiqueta
  "Banco EUNACOM · Caso representativo" (kicker "Pregunta del banco EUNACOM"), y la voz no inventa fecha.
- Si el libro se contradice a sí mismo o parece tener un error, se sigue el texto principal (`contentSections`)
  y se anota en `classes/docs/REVISION_CONTENIDO.md` (ver "Revisión médica" abajo). Explicar con palabras simples
  lo mismo que dice el libro **no** es una discrepancia y no se anota.

## Archivos por clase

Un solo archivo: `classes/lessons/<id>.cjs`, con `id`, `tier` (1, 2 o 3, el del libro), `slides` y `pathway`
(el árbol de decisión de la diapositiva `pathway`, con el formato de `classes/pathways/gastro_pathways.cjs`:
`{ title, root: N(k, t, s, say, ...kids) }`, y `N` definido al inicio del archivo).
Gastro 1.1 y 1.2 tienen su árbol en `gastro_pathways.cjs`; las clases nuevas lo traen dentro del guion.

## Estructura dinámica (el tamaño lo decide el tema)

La clase no tiene un número fijo de diapositivas: crece o se achica según lo grande que es el tema en el libro.
Gastro 1.1 y 1.2 son el ejemplo de un tema **tier 2** con 11 diapositivas.

### Tamaño: lo decide el contenido, no un número

**No hay mínimo ni máximo de diapositivas.** El tier del libro solo da una idea de lo esperable:

| Tier del libro | Tipo | Referencia (no es límite) |
|---|---|---|
| 1 | Focalizado | ~6–10 diapositivas, ~5–8 min |
| 2 | Estándar (como gastro 1.1 / 1.2) | ~9–14 diapositivas, ~9–12 min |
| 3 | Denso / urgencia | ~13–20 diapositivas, ~14–20 min |

**Regla de oro: si el contenido necesita más diapositivas, se usan más.** Nunca se fusionan secciones, se quita la tabla
o se descartan preguntas reales solo para caber en un número. Tampoco se rellena para llegar a un número.

### Cómo se arma

**Marco fijo (siempre va):**
1. `cover`
2. … cuerpo …
3. `pathway` (si el tema tiene una decisión clínica; casi siempre la tiene)
4. `table` de trampas EUNACOM (siempre que el libro traiga tabla o haya contrastes que se preguntan; las columnas se adaptan si hace falta)
5. `quiz` de caso clínico escrito para la clase
6. `quiz` de preguntas reales EUNACOM del banco real: todas las que aporten algo distinto (normalmente 1 a 4; más si el tema es muy preguntado y cada una enseña algo nuevo)
7. `points` de cierre con las reglas de oro; el último `say` termina con "Si te llevas una sola idea de hoy: …" y "Nos vemos en la próxima clase."

**Cuerpo (lo que varía):** cada `contentSection` del libro se convierte en **una** diapositiva didáctica,
o en dos si la sección es larga o mezcla mecanismo y conducta.
- `flow` cuando hay una cadena causal o una decisión (causa → mecanismo → consecuencia, o "si A → X, si B → Y").
- `points` cuando son criterios, listas, fármacos o hallazgos.
- Orden sugerido: mecanismo → clínica → diagnóstico → la diferencia que más se pregunta → tratamiento → urgencias o complicaciones.
- Un tema tier 1 puede no tener fisiopatología en flujo; un tema tier 3 puede tener varios `flow` y dos `points` de tratamiento.

Nunca se rellena para llegar a un número ni se recorta contenido que el libro pide: manda el libro.

## Campos

- `flow`: `nodes` con `id, col (0–4), row (0–4), k, t, s`; `edges` `{from, to, label?}`;
  `steps` `{show: [ids], note, say}`: cada paso revela 1–2 nodos. Valores de `k`: `cause | mech | effect | risk | good | alert | start | q | refer | trap`.
- `points`: `cards` `{title, tag, kind, items: [{t, d, say}]}`, con 2–3 tarjetas. Valores de `kind`: `key | alert | pharma | criteria | normal`.
- `table`: `head` (2 a 4 columnas), `rows` `{cells, say}`.
- `quiz`: `stem, question, options[{letter,text}], correct, explanation`, y `say: {stem, question, options, answer}`.
  En `say.options` se leen las alternativas resumidas y se termina con "Piénsalo." En `answer` se explica por qué la correcta es correcta y por qué cae el distractor más tentador.
- Pathway: nodos `start | q | do | ok | refer | alert`, con 5–12 nodos y 2–4 niveles.

## Reglas para que suene bien (TTS)

- Los números se escriben en palabras en `say` ("cuarenta años", "quinientos miligramos", "dos mil veinticinco").
  En pantalla (`t`, `d`, `stem`) sí van con cifras.
- Las siglas: en la primera mención se dicen completas ("inhibidor de la bomba de protones"). Después se usa la sigla solo si se pronuncia natural (IBP, AINE, TAC, GES).
- Nada de símbolos en `say`: ni ≥, %, /, →, paréntesis ni abreviaturas como "mg" o "lpm".
- Nunca se leen números de diapositiva ni "en esta lámina".

## Largo

- El largo total lo fija el contenido (la tabla de tiers es solo referencia).
- Cada `say` tiene entre 1 y 4 frases. Si pasa de ~70 palabras, se divide en dos pasos.

## Verificación antes de entregar

```bash
node classes/scripts/check_lesson.cjs <id>    # sin ERROR; los avisos se corrigen salvo que haya motivo
```
El reproductor (`build_swiss_player.cjs`) lo compila después quien integra; no se corre en paralelo.

## Revisión médica (`classes/docs/REVISION_CONTENIDO.md`)

Se anota solo lo que un médico tiene que decidir, en la sección de la especialidad y en la categoría que corresponde:
- **A · Posible error del libro:** un dato que parece médicamente incorrecto.
- **B · El libro se contradice:** dos partes del libro dicen cosas distintas (se indica cuál se usó).
- **C · Falta información en el libro:** dosis, preguntas mencionadas que no están, etc.
No se anotan decisiones de formato ni explicaciones con otras palabras de lo mismo que dice el libro.
Cada agente devuelve sus notas en el informe final; quien integra las agrega al archivo.
