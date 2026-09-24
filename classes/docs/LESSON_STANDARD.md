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
- La pregunta real EUNACOM se toma del banco del libro (`questions`), sin inventar fecha ni número.

## Archivos por clase

1. `classes/lessons/<id>.cjs`: el guion (formato abajo).
2. Una entrada `<id>` en `classes/pathways/<especialidad>_pathways.cjs`: el árbol de decisión
   que usa la diapositiva `pathway` (mismo formato que `gastro_pathways.cjs`).

## Estructura dinámica (el tamaño lo decide el tema)

La clase no tiene un número fijo de diapositivas: crece o se achica según lo grande que es el tema en el libro.
Gastro 1.1 y 1.2 son el ejemplo de un tema **tier 2** con 11 diapositivas.

### Tamaño según el tier del libro (`tier` en el dataset)

| Tier del libro | Tipo | Diapositivas | Duración | Palabras habladas |
|---|---|---|---|---|
| 1 | Focalizado (tema acotado) | 6–8 | 5–7 min | ~800–1.100 |
| 2 | Estándar (como gastro 1.1 / 1.2) | 9–12 | 9–12 min | ~1.400–1.800 |
| 3 | Denso / urgencia (4 páginas en el libro) | 13–18 | 14–20 min | ~2.100–3.000 |

Si el tema no trae `tier` (p. ej. cardiología), se estima por la cantidad de `contentSections`
(2–3 → tier 1 · 4–5 → tier 2 · 6 o más, o urgencia vital → tier 3).

### Cómo se arma

**Marco fijo (siempre va):**
1. `cover`
2. … cuerpo …
3. `pathway` (si el tema tiene una decisión clínica; casi siempre la tiene)
4. `table` de trampas EUNACOM (si el libro trae tabla o hay contrastes que se preguntan)
5. `quiz` de caso clínico escrito para la clase
6. `quiz` de pregunta real EUNACOM (una por tier: tier 1 → 1, tier 2 → 1–2, tier 3 → 2–3, según el banco)
7. `points` de cierre con las reglas de oro; el último `say` termina con "Si te llevas una sola idea de hoy: …" y "Nos vemos en la próxima clase."

**Cuerpo (lo que varía):** cada `contentSection` del libro se convierte en **una** diapositiva didáctica,
o en dos si la sección es larga o mezcla mecanismo y conducta.
- `flow` cuando hay una cadena causal o una decisión (causa → mecanismo → consecuencia, o "si A → X, si B → Y").
- `points` cuando son criterios, listas, fármacos o hallazgos.
- Orden sugerido: mecanismo → clínica → diagnóstico → la diferencia que más se pregunta → tratamiento → urgencias o complicaciones.
- Un tema tier 1 puede no tener fisiopatología en flujo; un tema tier 3 puede tener varios `flow` y dos `points` de tratamiento.

Nunca se rellena para llegar a un número ni se recorta contenido que el libro pide: manda el libro.

## Campos

- `flow`: `nodes` con `id, col (0–3), row (0–2), k, t, s`; `edges` `{from, to, label?}`;
  `steps` `{show: [ids], note, say}`: cada paso revela 1–2 nodos. Valores de `k`: `cause | mech | effect | risk | good | alert | start | q | refer | trap`.
- `points`: `cards` `{title, tag, kind, items: [{t, d, say}]}`, con 2–3 tarjetas. Valores de `kind`: `key | alert | pharma | criteria | normal`.
- `table`: `head` (3 columnas), `rows` `{cells, say}`.
- `quiz`: `stem, question, options[{letter,text}], correct, explanation`, y `say: {stem, question, options, answer}`.
  En `say.options` se leen las alternativas resumidas y se termina con "Piénsalo." En `answer` se explica por qué la correcta es correcta y por qué cae el distractor más tentador.
- Pathway: nodos `start | q | do | ok | refer | alert`, con 5–9 nodos y 2–4 niveles.

## Reglas para que suene bien (TTS)

- Los números se escriben en palabras en `say` ("cuarenta años", "quinientos miligramos", "dos mil veinticinco").
  En pantalla (`t`, `d`, `stem`) sí van con cifras.
- Las siglas: en la primera mención se dicen completas ("inhibidor de la bomba de protones"). Después se usa la sigla solo si se pronuncia natural (IBP, AINE, TAC, GES).
- Nada de símbolos en `say`: ni ≥, %, /, →, paréntesis ni abreviaturas como "mg" o "lpm".
- Nunca se leen números de diapositiva ni "en esta lámina".

## Largo

- El largo total lo fija la tabla de tiers de arriba.
- Cada `say` tiene entre 1 y 4 frases. Si pasa de ~70 palabras, se divide en dos pasos.

## Verificación antes de entregar

```bash
node -e "require('./classes/lessons/<id>.cjs')"
node classes/scripts/build_swiss_player.cjs   # debe listar la clase sin errores
```
