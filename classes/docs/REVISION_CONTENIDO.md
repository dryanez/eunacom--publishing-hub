# Revisión médica pendiente · guiones docentes

Dudas sobre el contenido del libro que aparecieron al escribir las clases. Cada una necesita la revisión de un médico
antes de publicar, y se corrige en el libro (`books/scripts/dataset_*.cjs`) y en el guion (`classes/lessons/<id>.cjs`).

## Gastroenterología

| Clase | Duda | Qué se hizo en el guion |
|---|---|---|
| gastro-09 | El libro trata el "linfoma T asociado a enteropatía" (EATL, de células T) como si fuera el "linfoma MALT intestinal" (de células B). La alternativa de la pregunta del banco hace lo mismo. Son linfomas distintos. | Se siguió el libro. **Revisar.** |
| gastro-14 | Contactos de hepatitis A: un keyPoint dice "intradomiciliario → inmunoglobulina" y el texto dice "convivientes → inmunoglobulina más vacuna". | Se usó el texto (inmunoglobulina más vacuna). |
| gastro-14 | La tabla de serología de hepatitis B tiene 4 columnas en el libro. | Se condensó a 3 columnas: marcadores, interpretación y trampa. |
| gastro-08 | La viñeta y la segunda pregunta del banco son pediátricas (lactante, niño de 2 años) en una clase de adultos. Encajan mejor en gastro-23. | Se escribió un caso de adulto y solo se usó la pregunta de *C. difficile*. |
| gastro-07 | La explicación de la pregunta Dic 2018 #41 cuenta "edad mayor de 50" como signo de alarma, pero el paciente tiene 48 años. | La voz solo cuenta los cuatro signos que sí aplican. |
| gastro-06 | `reconstrucciones` dice "Sin preguntas en exámenes 2013-2025", así que las preguntas del banco son casos representativos, no ítems reales. | La diapositiva usa la etiqueta del banco y no afirma que sea una pregunta real con fecha. |
| gastro-03 | Los bloqueadores de calcio: el texto solo dice que relajan el esfínter y causan reflujo; los keyPoints agregan "útiles en acalasia inicial". | Se siguieron los keyPoints. |
| gastro-18 | `frecuencia` dice "18 de 21 preguntas del banco" y `reconstrucciones` nombra cuatro exámenes (Q#66, Q#121, Q#54, Q#101), pero `questions` solo trae dos (Q#121 y Q#54). | Se usaron las dos que hay. Faltan Q#66 y Q#101 en el libro. |
| gastro-23 | `reconstrucciones` dice "Sin preguntas en exámenes 2013-2025", pero `questions` trae dos casos representativos del banco. | Se usaron con la etiqueta del banco. |
| gastro-23 | El árbol de decisión anterior usaba un corte de "menos o más de 4 semanas" entre diarrea aguda y crónica que no está en el libro. | Se quitó del árbol nuevo. |
| gastro-11 | Un keyPoint dice que el CEA no sirve "ni para el pronóstico"; el texto no lo dice. | Solo se dice que el CEA es para el seguimiento postoperatorio, no para diagnóstico ni tamizaje. |
| gastro-15 | Dosis de albúmina en la peritonitis bacteriana espontánea: el libro solo dice "día 1 y día 3", sin dosis. | No se dio dosis. |
| gastro-17 | El árbol antiguo en `gastro_pathways.cjs` dice que el cólico "cede en menos de seis horas"; el libro dice 30 a 60 minutos (más de 6 horas es el corte de colecistitis). | El árbol nuevo usa 30 a 60 minutos. |
| gastro-21 | "Ligadura en las primeras 12 horas" solo aparece en la explicación de la viñeta, no en el texto. La "regla del 10 %" aparece como cifra exacta y como "cerca del 10 %". | Se usó; se dice "cerca del diez por ciento". |
| gastro-22 | El `contexto` dice radiografía "cada dos semanas"; el resto dice "cada 1 a 2 semanas". | Se usó 1 a 2 semanas. |
| gastro-24 | El libro dice que el fecaloma produce "encopresis y pseudoincontinencia". | La voz lo describe como escurrimiento por rebosamiento, como la explicación de la pregunta del banco. |
| gastro-25 | La viñeta dice "diana" y el texto dice "dona" (signo ecográfico de la invaginación). | Se mencionan ambos nombres. |

## Notas generales

- En muchas clases, las preguntas del banco solo traen la etiqueta "Caso representativo · banco EUNACOM", sin fecha ni número. En esas, la diapositiva dice "Banco EUNACOM · Caso representativo" y la voz dice "una pregunta del banco EUNACOM", sin inventar una fecha.
- Algunas clases tier 1 no tienen tabla de trampas (gastro-07, gastro-08, gastro-16) para no pasar de 8 diapositivas; esas diferencias quedaron en los flujos o en el árbol.
- gastro-10 usa una sola pregunta real (Agosto 2021 #21) para no pasar de 12 diapositivas; la otra (Diciembre 2017 #26) evalúa lo mismo que el caso clínico.
