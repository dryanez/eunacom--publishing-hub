# Audit banco de preguntas reales · Grupo A (1.01–1.05)

Total de preguntas únicas auditadas: 580 (dedup por recTag).

## Conteos por estado

- OK: 345
- TEXTO_DANADO: 72
- EXPLICACION_AJENA: 71
- CLAVE_DISCUTIBLE: 53
- CLAVE_ERRONEA: 19
- FALTA_IMAGEN: 15
- DUPLICADA: 2
- MAL_VINCULADA: 2
- EXPLICACION_CONTRADICE: 1

## Por especialidad

- Cardiología: OK 100, TEXTO_DANADO 24, EXPLICACION_AJENA 20, FALTA_IMAGEN 12, CLAVE_DISCUTIBLE 11, CLAVE_ERRONEA 6, MAL_VINCULADA 2, DUPLICADA 1
- Diabetes: OK 45, TEXTO_DANADO 10, EXPLICACION_AJENA 9, CLAVE_DISCUTIBLE 7, CLAVE_ERRONEA 1, DUPLICADA 1
- Endocrinología: OK 64, EXPLICACION_AJENA 10, TEXTO_DANADO 9, CLAVE_DISCUTIBLE 8, CLAVE_ERRONEA 3
- Infectología: OK 67, TEXTO_DANADO 15, EXPLICACION_AJENA 11, CLAVE_DISCUTIBLE 10, CLAVE_ERRONEA 5, FALTA_IMAGEN 2
- Respiratorio: OK 69, EXPLICACION_AJENA 21, CLAVE_DISCUTIBLE 17, TEXTO_DANADO 14, CLAVE_ERRONEA 4, FALTA_IMAGEN 1, EXPLICACION_CONTRADICE 1

## Las 20 más graves

| # | recTag | estado | banco→propuesta | conf. | motivo |
|---|---|---|---|---|---|
| 1 | EUNACOM Diciembre 2022 · Pregunta 17 | CLAVE_ERRONEA | E→B | alta | Cuadro de CIA clasica (soplo infantil, desdoblamiento fijo, crepitaciones), la clave E coartacion parece desplazada, explicacion con parrafo ajeno de asma |
| 2 | EUNACOM Diciembre 2022 · Pregunta 105 | CLAVE_ERRONEA | D→E | alta | Diabético con HTA nueva: de elección IECA/ARA2 (valsartán E), atenolol no es de elección. Además RAC 2,6 no tiene unidad |
| 3 | EUNACOM Diciembre 2022 · Pregunta 36 | CLAVE_ERRONEA | E→A | alta | Clínica de insuficiencia cardíaca (ortopnea, crepitos) con HTA mal controlada: agregar IECA/ARA2 (losartán A), doxazosina está contraindicada/no recomendada en IC (ALLHAT) |
| 4 | EUNACOM Diciembre 2022 · Pregunta 38 | CLAVE_ERRONEA | B→C | alta | Edema bajo amlodipino con PA controlada: suspender amlodipino (igual que Ene-2023 P85, Dic-2019 P122, Jul-2019 P51), cambiar enalapril por losartán no resuelve el edema |
| 5 | EUNACOM Julio 2025 · Pregunta 96 | CLAVE_ERRONEA | A→B | alta | Con ICP primaria disponible a 60 min (<120 min) corresponde traslado para angioplastia primaria, no trombolisis, la propia explicación pone el umbral en >120 min |
| 6 | EUNACOM Julio 2025 · Pregunta 166 | CLAVE_ERRONEA | A→B | alta | DMG con mala respuesta a metformina: se agrega insulina, pioglitazona está contraindicada en embarazo y la propia explicación dice 'agregar insulina' |
| 7 | EUNACOM Julio 2018 · Pregunta 132 | CLAVE_ERRONEA | C→D | alta | Clave C (parasitológico) contradice la explicación, alternativas pegadas con texto de chat, correcta toxinas A y B |
| 8 | EUNACOM Diciembre 2022 · Pregunta 81 | CLAVE_ERRONEA | A→B | alta | VIH con cultivo MGIT positivo, clínica y Rx: TBC activa, se trata y no es profilaxis (REVISION_CONTENIDO lo marca) |
| 9 | EUNACOM Diciembre 2022 · Pregunta 56 | CLAVE_ERRONEA | B→E | alta | Membranas como hollejos de uva en trabajador agricola = hidatidosis, no aspergiloma, explicacion ajena |
| 10 | EUNACOM Diciembre 2022 · Pregunta 109 | CLAVE_ERRONEA | E→A | alta | Espirometria obstructiva no reversible con aumento del diametro AP y sibilancias = EPOC, no fibrosis (restrictiva) |
| 11 | EUNACOM Diciembre 2022 · Pregunta 13 | CLAVE_ERRONEA | A→C | alta | pH 7,26 y PaCO2 62 tras tratamiento: VMNI, oxigeno al 50% empeora la hipercapnia, explicacion generica sin contenido |
| 12 | EUNACOM Diciembre 2022 · Pregunta 87 | CLAVE_ERRONEA | C→B | media | Palpitaciones paroxísticas con cese por maniobras vagales en joven: el diagnóstico propuesto sería WPW (preexcitación) y no BCRI, que no explica el cuadro, ECG no disponible |
| 13 | EUNACOM Diciembre 2022 · Pregunta 48 | CLAVE_ERRONEA | A→E | media | Hombre con déficit hormonal y defecto campimétrico temporal: examen de elección es RM de silla turca (igual que Dic-2018 P111, clave RM), TSH sola no estudia la lesión |
| 14 | EUNACOM Diciembre 2022 · Pregunta 6 | CLAVE_ERRONEA | A→D | media | Facies edematosa, hipotermia, bradicardia, arreflexia y suspensión de levotiroxina describen coma mixedematoso, la clave A (CAD) contradice la propia explicación sobre hipotiroidismo (glicemia truncad |
| 15 | EUNACOM Diciembre 2022 · Pregunta 102 | CLAVE_ERRONEA | C→A | media | Hipoparatiroidismo con diarrea, debilidad y Chvostek es hipocalcemia sintomática: calcio EV (igual que Dic-2018 P25 con clave gluconato EV), suero fisiológico no corrige la hipocalcemia |
| 16 | EUNACOM Agosto 2021 · Pregunta 27 | CLAVE_ERRONEA | D→A | media | Embarazada con sífilis alérgica solo a amoxicilina: el libro exige penicilina (con desensibilización si alergia real), eritromicina no trata al feto |
| 17 | EUNACOM Diciembre 2022 · Pregunta 55 | CLAVE_ERRONEA | E→C | media | Diarrea febril de 7 días por Campylobacter: clave probióticos contradice la práctica actual y Ene 2023 P76 (azitromicina) |
| 18 | EUNACOM Diciembre 2022 · Pregunta 18 | CLAVE_ERRONEA | A→E | media | Mismo caso de bacteriuria asintomática con sonda que recTag Diciembre 2018 P122 (clave observar), aquí la clave A (cambiar sonda) contradice la norma, la opción E equivale a observar |
| 19 | EUNACOM Julio 2015 · Pregunta 140 | CLAVE_ERRONEA | E→D | media | NAC con insuficiencia respiratoria tipo 1: el libro indica O2 titulado (Venturi 40%) y luego escalar, VMI no es primera medida, duda ya conocida |
| 20 | EUNACOM Julio 2024 · Pregunta 165 | EXPLICACION_CONTRADICE | D→D | alta | Explicacion argumenta Rx como examen inicial (no esta entre las opciones) y no sustenta TAC, clave TAC correcta |
