# Auditoría de imágenes — Psiquiatría (psiq-01 a psiq-12)

Fecha: 2026-10-12. Método: script de volcado de `classes/lessons/psiq-*.cjs` (títulos, kickers, tarjetas, nodos de flujo, filas de tabla, diapositivas `image`), búsqueda en `classes/media/` (biblioteca y animaciones) de cualquier imagen afín (distonía, discinesia, parkinsonismo, litio, clozapina, catatonía…) y revisión del libro `books/dist/Modulo_2_Cirugia/Tomo_17_Psiquiatria_Completo_2026.pdf` (`pdfimages -list`: solo trae la imagen de portada).

Criterio estricto: psiquiatría se evalúa por criterios diagnósticos, plazos, escalas y fármacos. Una foto solo se pide si existe un signo **visible y reconocible** que el EUNACOM describa o muestre. Ninguna clase tiene diapositivas de imagen ni animaciones, y **no existe carpeta** `classes/media/biblioteca/20_psiquiatria/` (no se creó, porque no se agregó nada).

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| psiq-01 | Depresión mayor | 6 (EDM y 4 subtipos, ISRS/duales) | 0 | 0 | 0 | baja |
| psiq-02 | Trastorno bipolar | 6 (BP I, BP II, ciclotimia, manía, hipomanía, intoxicación por litio) | 0 | 0 | 0 | baja |
| psiq-03 | Riesgo suicida | 4 (factores, SAD PERSONS, hospitalización, intento reciente) | 0 | 0 | 0 | baja |
| psiq-04 | Ánimo perinatal | 3 (tristeza materna, depresión posparto, psicosis puerperal) | 0 | 0 | 0 | baja |
| psiq-05 | Adaptativo y distimia | 4 (adaptativo, distimia, depresión doble, duelo) | 0 | 0 | 0 | baja |
| psiq-06 | Pánico y agorafobia | 3 (+ diferencial somático) | 0 | 0 | 0 | baja |
| psiq-07 | TAG y fobia social | 4 (TAG, fobia social, de actuación, específica) | 0 | 0 | 0 | baja |
| psiq-08 | TOC | 2 (TOC, personalidad obsesiva) | 0 | 0 | 0 | baja |
| psiq-09 | Estrés agudo y TEPT | 3 (estrés agudo, TEPT, adaptativo) | 0 | 0 | 0 | baja |
| psiq-10 | Esquizofrenia | 9 (síntomas, vías dopaminérgicas, atípicos, 4 extrapiramidales, SNM) | 0 | 0 | 0 necesarias (3 opcionales) | baja |
| psiq-11 | Clozapina | 4 (refractaria, hemogramas, agranulocitosis, miocarditis/íleo) | 0 | 0 | 0 | baja |
| psiq-12 | Psicosis no esquizofrénicas | 4 (breve, esquizofreniforme, delirante, subtipos) | 0 | 0 | 0 | baja |

## Detalle por clase

- **psiq-01 a psiq-09, psiq-11, psiq-12**: todo lo enseñado es criterio (cinco de nueve, cuatro de trece, seis meses), plazo, escala (PHQ-9, Edimburgo, SAD PERSONS), cronología o fármaco/dosis. Las líneas de tiempo (puerperio, adaptativo, estrés agudo y TEPT, cronología de las psicosis) ya están resueltas como diapositivas `flow`. **No necesitan imagen.** La tabla de RAN de clozapina tampoco (cifras).
- **psiq-10 — Esquizofrenia**: único lugar con algo visible.
  - Distonía aguda (tortícolis, crisis oculógira, trismus): signo reconocible, pero el examen lo **describe** en el caso; foto opcional (baja).
  - Discinesia tardía (movimientos orofaciales y de lengua): se entiende mejor en video que en foto; opcional (baja).
  - Las cuatro vías dopaminérgicas: hoy es una tabla; un esquema sagital del encéfalo con las cuatro vías ayudaría a fijar vía → efecto (gráfico, baja).
  - Candidata en repo revisada: `09_neurologia/neuro-11/01_postura-parkinsoniana__cto-neuro_p54.jpg` (postura parkinsoniana). No aporta a una pregunta de parkinsonismo por antipsicóticos (se diagnostica por el fármaco y la clínica) → no se usa.

## Fotos incorrectas, mal rotuladas o duplicadas

Ninguna (la especialidad no tiene fotos).
