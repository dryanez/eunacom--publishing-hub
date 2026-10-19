# Preguntas por examen reconstruido (objetivo: 180)

Generado tras completar el banco `books/data/real_questions_by_code.json` (n.º distintos de pregunta por examen, 1-180).

| Examen | N.º distintos | Faltan | Marcadas excluir (falta imagen/texto) |
|---|---|---|---|
| EUNACOM Agosto 2021 | 180 | 0 | 10 |
| EUNACOM Diciembre 2017 | 180 | 0 | 4 |
| EUNACOM Diciembre 2018 | 180 | 0 | 5 |
| EUNACOM Diciembre 2019 | 180 | 0 | 6 |
| EUNACOM Diciembre 2022 | 180 | 0 | 9 |
| EUNACOM Diciembre 2024 | 174 | 6 (55, 176, 177, 178, 179, 180) | 70 |
| EUNACOM Diciembre 2025 | 180 | 0 | 8 |
| EUNACOM Enero 2023 | 180 | 0 | 1 |
| EUNACOM Julio 2013 | 180 | 0 | 5 |
| EUNACOM Julio 2015 | 179 | 1 (180) | 3 |
| EUNACOM Julio 2016 | 180 | 0 | 8 |
| EUNACOM Julio 2017 | 180 | 0 | 10 |
| EUNACOM Julio 2018 | 54 | 126 | 7 |
| EUNACOM Julio 2019 | 180 | 0 | 8 |
| EUNACOM Julio 2024 | 180 | 0 | 9 |
| EUNACOM Julio 2025 | 167 | 13 (168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180) | 3 |

## Qué falta y por qué

- **Julio 2018 (54/180)**: los PDF «EXAMEN 2018 PREGUNTAS.pdf» y «EXAMEN 2018 RESUELTO_pdf.pdf» están cifrados con contraseña de usuario (pdftotext y PyMuPDF piden clave); no se intentó saltarla. Con la clave se pueden extraer las 126 restantes. Se agregaron 22 desde la sección «EUNACOM JULIO 2018» de «RECONSTRUCCION EUNACOM 2013 - 2023.pdf» (n.º 1, 7, 18, 20, 23, 24, 26, 29, 38, 48, 49, 50, 56, 68, 69, 75, 97, 104, 135, 140, 154, 172), más reparación de las n.º 54 y 81. La n.º 163 de esa fuente tiene el enunciado duplicado de la 154 (la pauta dice colangitis aguda): no se agregó. Las n.º 24, 48 y 50 dependen de imagen/ECG: `FALTA_IMAGEN`, `excluir`. (Las 4 pautas confirman que las claves de la compilación coinciden con las de este examen.)
- **Julio 2015, n.º 180**: en la fuente es una pregunta de broma («¿Cuál es el mejor curso de preparación para el Eunacom?»); no es clínica y no se incluyó. La n.º 93 (aleatorización) se agregó.
- **Julio 2025, n.º 168-180**: la reconstrucción (EUNACOM_Reconstruccion_Julio_2025.pdf, 5 págs.) termina en la n.º 167; no hay datos de las 13 restantes en ninguna fuente.
- **Diciembre 2024**: se agregaron la 104 (miel > 12 meses) y la 174 (forúnculo: drenaje; alternativas 3-5 inferidas, confianza 0.5/0.7). Faltan la 55 («Funciones de la SIS», sin alternativas ni clave) y 176-180 (la reconstrucción termina en la 175).
- **Julio 2019**: se agregó la n.º 4 (diagnóstico nutricional del prematuro, con la tabla) y se reparó la n.º 3 (el enunciado era un comentario del autor; clave C = reperfusión).

## Verificación con pautas

- **Agosto 2021 (xlsx oficial)**: las 180 claves coinciden con la pauta oficial tras corregir la n.º 31 (granuloma piógeno, B): una auditoría previa la había cambiado a A con motivo/explicación de otra pregunta (otro proceso ya había revertido la clave a B; se dejó `audit.fuente="pauta oficial"`, `clave_original="A"` y se reescribió la explicación).
- **Pauta.pdf** = pauta de Diciembre 2025 (Guevara): 1 diferencia (n.º 109, banco A vs pauta B), ya documentada con `correcta_original` y TEXTO_DANADO: no se tocó.
- **Pautas de la compilación 2013-2023** (no oficiales, de los reconstructores): Julio 2015, Julio 2017 y Julio 2019 sin diferencias; Diciembre 2018 difiere en 40, 85 y 173 y Diciembre 2019 en la 51 (todas ya corregidas a propósito por auditorías previas contra el libro, con la clave original guardada): no se revirtieron, para decisión del usuario.
