# Cola de reescritura por calidad · Pediatría, Ginecología, Obstetricia, Cirugía

El usuario detectó que las clases escritas por Antigravity (Pediatría, Obstetricia, Cirugía, y Ginecología
gin-05..16) no cumplen el estándar en dos puntos, aunque pasan `check_lesson.cjs` (el checker no valida esto):

1. **Voz impersonal en vez de "tú":** casi sin `tienes/tú/fíjate/recuerda`, dominado por `debe/se debe/deben`
   (registro de protocolo clínico, no de profesor hablándole al alumno).
2. **Texto en pantalla demasiado largo:** el campo `d` de `points`/`flow` debería tener ≤10 palabras
   (regla "la pantalla muestra poco" de `LESSON_STANDARD.md`); en Pediatría el 92% de los `d` la superan,
   66% en Ginecología, 47% en Obstetricia, 19% en Cirugía.

Decisión del usuario: **reescribir las 72 clases desde cero**, sin que el agente lea el archivo viejo
(para no heredar su estructura o voz), usando `books/scripts/dataset_<libro>.cjs` como única fuente,
igual que si la clase no existiera. El archivo se sobreescribe con `Write`, no se lee antes.

**No tocar:** `reuma-*.cjs` (Antigravity, no auditado, no se cuestionó) y `gin-01..04.cjs` (las escribió Claude).

## Orden
1. Pediatría (22 clases, `ped-XX`): ped-01..04 · 05..08 · 09..12 · 13..16 · 17..19 · 20..22
2. Ginecología (12 clases, `gin-05..16`): gin-05..08 · 09..12 · 13..16
3. Obstetricia (20 clases, `ob-XX`): ob-01..04 · 05..08 · 09..12 · 13..16 · 17..20
4. Cirugía (18 clases, `cirugia-XX`): cirugia-01..04 · 05..08 · 09..12 · 13..15 · 16..18

## Instrucciones especiales para cada agente (además de AGENT_BRIEF.md)
- **NO leer el archivo `classes/lessons/<id>.cjs` existente.** Sobreescribirlo directo con `Write`, como si
  la clase no existiera. El objetivo es que la reescritura no herede nada del guion anterior.
- **`t` ≤ 6 palabras, `d` ≤ 10 palabras** en `points`/`flow` — contar las palabras antes de dar por terminada
  cada tarjeta. Si una idea no entra en ese largo, se recorta a lo esencial y el resto va en `say`.
- **Voz "tú" constante:** nada de "debe/se debe/deben" como sujeto impersonal del texto. Reescribir en segundo
  persona ("tienes que", "vas a ver", "acuérdate de") o con el profesor como sujeto ("te explico", "fíjate").
  Evitar plural "ustedes/recuerden/fijen" — el estándar es "tú", no "ustedes".
- Seguir el resto de `LESSON_STANDARD.md` normalmente (marco fijo, TTS, preguntas reales, etc.)

## Progreso
- Pediatría: ped-01..04 **hecho** (verificado: 0 violaciones t/d en 86 campos, 0 "debe" impersonal en say) · 05..08 **hecho** (verificado: 0/103) · 09..12 · 13..16 · 17..19 · 20..22
- Ginecología (05-16): pendiente
- Obstetricia: pendiente
- Cirugía: pendiente
