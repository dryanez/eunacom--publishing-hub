# Estándar de clase · Módulo 1 (modelo gastro 1.1 y 1.2)

**Referencia oficial:** `classes/lessons/gastro-01.cjs` y `classes/lessons/gastro-02.cjs`.
Toda clase nueva o reescrita de Módulo 1 se escribe así. Si algo no está en este documento,
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

## Estructura (11 diapositivas, en este orden)

| # | type | Contenido |
|--:|---|---|
| 1 | `cover` | `subtitle` = la pregunta clínica de la clase; `say` = bienvenida, cuántas preguntas tiene en el banco y la idea que lo resuelve todo |
| 2 | `flow` | Fisiopatología: causa → mecanismo → consecuencia/riesgo (5–8 nodos) |
| 3 | `points` | Clínica o diagnóstico: ¿cómo llega el paciente? / ¿a quién se estudia? |
| 4 | `flow` | La diferencia o decisión que más se pregunta |
| 5 | `points` | Tratamiento (`kicker: 'Tratamiento'`) |
| 6 | `flow` | Urgencias o complicaciones |
| 7 | `pathway` | `intro` de una frase; el árbol va en el archivo de pathways |
| 8 | `table` | Trampas EUNACOM: 4–6 filas, cada una con su `say` |
| 9 | `quiz` | Caso clínico escrito para la clase (5 alternativas A–E) |
| 10 | `quiz` | Pregunta real EUNACOM del banco del libro |
| 11 | `points` | Cierre: reglas de oro; el último `say` termina con "Si te llevas una sola idea de hoy: …" y "Nos vemos en la próxima clase." |

Las diapositivas 4 y 6 se pueden adaptar al tema (p. ej. una segunda `points`), pero se mantienen
11 diapositivas y el orden cover → mecanismo → clínica → decisión → tratamiento → urgencia → árbol → tabla → caso → pregunta real → cierre.

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

- Unas 1.500–1.800 palabras habladas (≈ 9–11 min, ≈ 9.000–11.000 caracteres).
- Cada `say` tiene entre 1 y 4 frases. Si pasa de ~70 palabras, se divide en dos pasos.

## Verificación antes de entregar

```bash
node -e "require('./classes/lessons/<id>.cjs')"
node classes/scripts/build_swiss_player.cjs   # debe listar la clase sin errores
```
