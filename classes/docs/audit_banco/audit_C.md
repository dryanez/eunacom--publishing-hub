# Audit banco reconstrucciones — GRUPO C (Pediatría 2.01, Dermatología 6.01, Oftalmología 6.02, Otorrino 6.03)

Preguntas únicas auditadas: 589 (dedup por recTag). CSV: audit_C.csv

## Conteos por estado

- OK: 404
- TEXTO_DANADO: 67
- CLAVE_DISCUTIBLE: 38
- FALTA_IMAGEN: 28
- EXPLICACION_AJENA: 26
- CLAVE_ERRONEA: 20
- DUPLICADA: 3
- EXPLICACION_CONTRADICE: 2
- MAL_VINCULADA: 1

## Por especialidad

- Pediatría: 379
- Pediatría/Oftalmología: 7
- Pediatría/Otorrino: 1
- Pediatría/Dermatología: 18
- Oftalmología: 14
- Dermatología: 15
- dermatología: 42
- oftalmología: 44
- Otorrinolaringología: 69

## Las 20 más graves

- **EUNACOM Diciembre 2022 · Pregunta 8** (2.01.1.024) CLAVE_ERRONEA: banco B -> propuesta E (alta). Conjuntivitis neonatal a los 15 días + neumonía afebril-subaguda con crepitaciones a los 2 meses = Chlamydia trachomatis (pregunta 2023 equivalente con clave Chlamydia), SGB es de inicio precoz. Además la explicación es ajena (parto vaginal con tamizaje SGB)
- **EUNACOM Diciembre 2022 · Pregunta 77** (2.01.1.037) CLAVE_ERRONEA: banco C -> propuesta D (alta). Masa de flanco con hematuria macroscópica a los 4 años es tumor de Wilms, hepatoblastoma es tumor hepático (sin hematuria, masa derecha). Preguntas hermanas (#112,#114) tienen Wilms
- **EUNACOM Julio 2025 · Pregunta 72** (2.01.1.046) CLAVE_ERRONEA: banco A -> propuesta B (alta). Con vómitos sin relación con la alimentación y 'oliva pilórica' el diagnóstico es estenosis hipertrófica del píloro (B), la explicación de la propia pregunta lo dice. Enunciado además muy resumido
- **EUNACOM Diciembre 2022 · Pregunta 79** (2.01.1.054) CLAVE_ERRONEA: banco E -> propuesta B (alta). Lactante de 4 meses con soplo holosistólico III-IV/VI, mala ganancia ponderal, crepitaciones y hepatomegalia: CIV con insuficiencia cardíaca, no es soplo funcional
- **EUNACOM Diciembre 2022 · Pregunta 41** (2.01.1.111) CLAVE_ERRONEA: banco C -> propuesta A (alta). Seis hemangiomas: corresponde ecografía abdominal (libro derma-17 y otras 3 preguntas), RM espinal no es el estudio
- **EUNACOM Diciembre 2022 · Pregunta 35** (2.01.1.141) CLAVE_ERRONEA: banco A -> propuesta B (alta). Cuadro típico de TEA (aislamiento, rigidez a cambios, hipersensibilidad a ruidos, orden de juguetes), discapacidad cognitiva no explica
- **EUNACOM Diciembre 2018 · Pregunta 40** (2.01.2.014) CLAVE_ERRONEA: banco A -> propuesta E (alta). Explicación describe intoxicación por tricíclicos (conciencia, taquicardia, pupilas arreactivas) pero la clave es AINES, la correcta es E.
- **EUNACOM Enero 2023 · Pregunta 11** (2.01.4.003) CLAVE_ERRONEA: banco B -> propuesta D (alta). Metamorfopsia con exploración normal en mujer de 77 años = DMRE, la clave A (glaucoma) no tiene sustento y la explicación es plantilla.
- **EUNACOM Agosto 2021 · Pregunta 31** (6.01.1.012) CLAVE_ERRONEA: banco B -> propuesta A (alta). Artritis psoriática, ojo rojo con fotofobia marcada y AV 20/40 = uveítis aguda, glaucoma agudo daría dolor intenso, midriasis y PIO alta. Explicación incluye texto de celulitis orbitaria.
- **EUNACOM Diciembre 2022 · Pregunta 58** (6.02.1.010) CLAVE_ERRONEA: banco A -> propuesta D (alta). Metamorfopsia y lectura difícil es DMRE (D), la clave A glaucoma no produce deformación y la explicación es genérica
- **EUNACOM Diciembre 2022 · Pregunta 75** (6.03.1.015) CLAVE_ERRONEA: banco D -> propuesta C (alta). Masa de línea media entre mentón y cartílago tiroides, blanda, de crecimiento lento = quiste del conducto tirogloso, adenoma submandibular es lateral
- **EUNACOM Diciembre 2022 · Pregunta 44** (6.03.2.016) CLAVE_ERRONEA: banco A -> propuesta D (alta). Perforación timpánica traumática por hisopo no se lava (riesgo de infección de oído medio), manejo es observación y control (como en la pregunta del 2023 #580)
- **EUNACOM Diciembre 2022 · Pregunta 43** (2.01.1.009) CLAVE_ERRONEA: banco E -> propuesta A (media). Lactante de 11 meses con fiebre 3 días y luego exantema papular generalizado: cuadro de exantema súbito (VHH-6), la explicación no justifica EBV
- **EUNACOM Diciembre 2022 · Pregunta 60** (2.01.1.011) CLAVE_ERRONEA: banco B -> propuesta D (media). Lesiones en zona del pañal en lactante de 3 meses: agente más probable Candida albicans, herpes zóster es improbable. Además depende de imagen ausente
- **EUNACOM Diciembre 2022 · Pregunta 53** (2.01.1.018) CLAVE_ERRONEA: banco A -> propuesta B (media). Granulomas hepatoesplénicos con fiebre prolongada y adenopatías es enfermedad por arañazo de gato (Bartonella), igual que la pregunta 2025 con clave Bartonella, VIH no es el diagnóstico
- **EUNACOM Diciembre 2022 · Pregunta 85** (2.01.1.032) CLAVE_ERRONEA: banco D -> propuesta A (media). Pancitopenia con letargia, regresión del desarrollo y madre vegana con lactancia exclusiva es déficit de vitamina B12, la clave leucemia no se sustenta. La explicación es ajena (dopamina/prolactina)
- **EUNACOM Julio 2025 · Pregunta 25** (2.01.1.078) CLAVE_ERRONEA: banco A -> propuesta B (media). RN con parto distócico y reanimación con hipotonía: encefalopatía hipóxico-isquémica, la propia explicación nombra HIE aunque la clave es sepsis. Explicación con texto ajeno (PIP/leucorrea), enunciado incompleto
- **EUNACOM Diciembre 2022 · Pregunta 73** (2.01.1.128) CLAVE_ERRONEA: banco B -> propuesta E (media). RN PEG vigoroso: lactancia precoz y control de glicemia a las 2 h (misma conducta que Ene 2023 P8), suero glucosado oral no es lo indicado, ya listada como dudosa
- **EUNACOM Diciembre 2022 · Pregunta 45** (6.01.1.021) CLAVE_ERRONEA: banco D -> propuesta A (media). Lesión de 10 cm con centro oscuro y dolor escapular de 1 día es loxoscelismo (ver Ene 2023 P149 con el mismo caso y clave Loxosceles), Pseudomonas no calza, foto ausente y explicación genérica
- **EUNACOM Diciembre 2022 · Pregunta 46** (6.02.1.030) CLAVE_ERRONEA: banco C -> propuesta A (media). Artritis psoriásica con ojo rojo bilateral, fotofobia marcada y baja de AV: uveítis aguda (A), la clave glaucoma agudo no encaja y la explicación habla de celulitis orbitaria
