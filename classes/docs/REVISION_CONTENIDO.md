# Revisión médica pendiente · guiones docentes

Solo lo que un médico tiene que decidir. Se corrige en el libro (`books/scripts/dataset_*.cjs`) y en el guion
(`classes/lessons/<id>.cjs`). Explicar con otras palabras lo mismo que dice el libro no es una discrepancia y no se anota.

- **A · Posible error del libro:** un dato que parece médicamente incorrecto.
- **B · El libro se contradice:** dos partes del libro dicen cosas distintas.
- **C · Falta información en el libro.**

## ⚠️ Problema general: fechas de preguntas en el libro

Las preguntas que trae cada tema del libro (`questions`) y la lista `reconstrucciones` citan exámenes con fecha y número
(p. ej. "EUNACOM Julio 2017 · Reconstrucción oficial", "Dic 2019 Q#82"). Al compararlas con el banco real
(`books/data/real_questions_by_code.json`), esos números corresponden a preguntas de otros temas (neumonía pediátrica,
estrabismo, criterios de Bradford-Hill) o no existen (Julio 2022 Q18, Dic 2021 Q77, Julio 2018 Q12, Dic 2020 Q95).
**Las fechas y números del libro parecen inventados.** Detectado en nefro-01 a nefro-04; probablemente afecta a todos los libros
(y a los PDF publicados). En las clases solo se usan fechas del banco real; las preguntas del libro van como "Caso representativo" sin fecha.

## Gastroenterología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| gastro-09 | "Linfoma T asociado a enteropatía, también llamado linfoma MALT intestinal" (y la alternativa de la pregunta). | Son dos linfomas distintos: el EATL es de células T y el MALT es de células B. | Sigue el libro. **Corregir en ambos.** |
| gastro-07 | La explicación de la pregunta Dic 2018 #41 cuenta "edad mayor de 50" como signo de alarma. | El paciente de esa pregunta tiene 48 años. | Solo cuenta los cuatro signos que sí aplican. |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| gastro-14 | keyPoint: contacto intradomiciliario de hepatitis A → inmunoglobulina | Texto: convivientes → inmunoglobulina **más vacuna** | El texto |
| gastro-22 | `contexto`: radiografía de control "cada dos semanas" | Resto del tema: "cada 1 a 2 semanas" | 1 a 2 semanas |
| gastro-21 | "Regla del 10 %" como cifra exacta | "Cerca del 10 %" | "Cerca del diez por ciento" |
| gastro-11 | keyPoint: el CEA no sirve "ni para el pronóstico" | El texto solo dice que es para seguimiento postoperatorio | Seguimiento postoperatorio, no diagnóstico ni tamizaje |
| gastro-03 | Texto: los bloqueadores de calcio relajan el esfínter (y causan reflujo) | keyPoint: "útiles en acalasia inicial" | Ambas cosas |
| gastro-25 | Viñeta: signo de la "diana" | Texto: signo de la "dona" | Ambos nombres (son el mismo signo ecográfico) |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| gastro-18 | `reconstrucciones` nombra 4 preguntas (Q#66, Q#121, Q#54, Q#101) pero `questions` trae solo 2. |
| gastro-15 | Dosis de albúmina en la peritonitis bacteriana espontánea (solo dice "día 1 y día 3"). |
| gastro-21 | "Ligadura en las primeras 12 horas" solo aparece en la explicación de la viñeta, no en el texto. |
| gastro-06, gastro-12, gastro-25 | El tema no tiene código Perfil V3 en el libro, así que no se le pueden asignar preguntas reales del banco. |

## Nefrología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| nefro-20 | La angioplastía en displasia fibromuscular "cura por completo la HTA en más del 70 %". | Las cifras de curación completa citadas suelen ser menores; el 70 % parece curación o mejoría. | Atribuye la cifra al libro. |
| nefro-21 | Los cilindros leucocitarios son "patognomónicos" de pielonefritis. | Indican origen renal, pero también aparecen en la nefritis intersticial. | Los presenta como prueba de origen renal. |
| nefro-22 | TFG < 30 equivale a creatinina "> 2,0 en mujeres o > 2,5 en hombres". | No coincide con los cortes clásicos de creatinina para metformina (~1,4 y 1,5). | Atribuye el dato al libro. |
| nefro-22 | Suspender IECA/ARA-II 48 h antes del contraste como prevención. | Evidencia discutida. | Sigue el libro. |
| nefro-01 | La explicación del caso dice FeNa = 0,52 %. | Con los datos del caso da 0,33 % (sigue siendo < 1 %, prerrenal). | Caso propio con FeNa 0,3 %. |
| nefro-08 | Las tiazidas "pierden su eficacia con TFG bajo 30". | Enseñanza clásica (sirve para el examen), pero el estudio CLICK (2021) mostró que la clortalidona sí baja la presión en ERC etapa 4. | Sigue el libro. Prioridad baja. |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| nefro-20 | Doppler: velocidad sistólica "> 180–200 cm/s" (texto) | "> 200" (keyPoints y diagrama) | El texto |
| nefro-20 | Displasia fibromuscular: "15 a 35 años", "dos tercios distales" (texto y tabla) | "< 30 años", "tercio medio y distal" (keyPoints y diagrama) | El texto |
| nefro-20 | Ateroesclerosis: "> 60 años" (texto) | "> 55–60" (tabla) | El texto |
| nefro-21 | Sin respuesta al tratamiento: "ecografía o TAC" (keyPoints) | "TAC con contraste de elección" (explicación de pregunta) | TAC preferido, ecografía alternativa |
| nefro-18 | Metformina: "suspender si TFG < 30" (keyPoints) | "Suspender o ajustar si TFG < 45" (tabla de tratamiento) | Ajustar bajo 45, suspender bajo 30 |
| nefro-05 | Déficit por mielinolisis: "cuadriplejía flácida" (contexto, keyPoints) | "Tetraparesia espástica" (explicación de pregunta 3) | "Cuadriparesia" |
| nefro-05 | Ascenso inicial de 4–6 mEq/L "en 1–2 horas" (tabla) | "En las primeras 2 a 4 horas" (keyPoint 3) | No da ventana (el texto no la da) |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| nefro-20 | El título es "Hipertensión secundaria" pero no cubre hiperaldosteronismo ni feocromocitoma, que el examen contrasta. |
| nefro-21 | No dice qué drenaje usar en la pielonefritis obstructiva (doble J o nefrostomía). |
| nefro-22 | El caso (TFG 22, potasio 5,2, con losartán e hidroclorotiazida) no dice qué hacer con el ARA-II ni la tiazida. |
| nefro-19 | El título incluye "Acidosis" pero ninguna sección la cubre; no da tratamiento de la acidosis metabólica crónica (bicarbonato oral, meta). Se usó lo que dice nefro-11. |
| nefro-19 | El banco real no tiene preguntas de anemia renal ni de cuándo usar eritropoyetina (se enseña solo con el caso clínico). |
| nefro-04 | El banco real no tiene preguntas de síndrome hepatorrenal ni de tipos de síndrome cardiorrenal. |
| nefro-07 | Recomienda hidroclorotiazida más amilorida en la DI nefrogénica por litio, sin advertir que las tiazidas suben el litio (hay que monitorizarlo). |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Julio 2015 · Pregunta 18 | Su respuesta suspende hipoglicemiantes orales con clearance de 50; el libro mantiene metformina con TFG 45–59. |
| EUNACOM Julio 2013 · Pregunta 78 | Indica insulina "por creatinina 1,5", bajo el corte del libro. |
| EUNACOM Enero 2023 · Pregunta 84 | Prefiere enalapril sobre losartán; el libro los trata como equivalentes. |
| EUNACOM Julio 2019 · Pregunta 150 | Clave: gluconato de calcio con K 5,8 sin cambios en ECG; contra el libro (calcio si K > 6,5 con cambios) y la práctica actual. |
| EUNACOM Diciembre 2022 · Pregunta 120 | Clave: suero fisiológico y no hemodiálisis con litio 2,2 y compromiso de conciencia; los criterios actuales favorecen diálisis. |
| EUNACOM Diciembre 2022 · Pregunta 94 | Litio, poliuria de 12 L/día, Na 154: la clave dice SIADH; es DI nefrogénica (la respuesta debería ser C). |
| EUNACOM Diciembre 2024 · Preguntas 41, 80 y 164 | Entradas corruptas (alternativas que no corresponden al tema). |

| EUNACOM Diciembre 2022 · Pregunta 54 | Su clave da hidroclorotiazida como fármaco de elección en diabético con albuminuria; el libro indica IECA o ARA-II. |

## Neumología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| resp-24 | Llama "efecto Haldane negativo" a la desviación de la curva a la izquierda por CO. | El efecto Haldane se refiere al transporte de CO2; la etiqueta es incorrecta. | Solo menciona la desviación a la izquierda. |
| resp-22 | Bloqueo neuromuscular precoz con cisatracurio en las primeras 48 h en todo SDRA severo. | El estudio ROSE (2019) no confirmó beneficio; ya no es rutina. | Se mantuvo, atribuido al libro. |
| resp-21 | Gradiente alvéolo-arterial: la viñeta (PaCO2 68, PaO2 52) da 11 y la pregunta 1 (PaCO2 65, PaO2 55) da 12. | Los cálculos dan 13 y ~14 (siguen siendo normales). | Caso propio con números correctos. |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| resp-22 | Prono: "SDRA moderado a severo con PaFi < 150" (texto) | "SDRA severo (PaFi < 150)" (diagrama) y solo en fila Severo (tabla); severo "< 100" vs "≤ 100" | El texto |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| resp-24 | El título incluye "Inhalación de humo" pero no trata cianuro, quemadura de vía aérea ni cuándo intubar. |
| resp-22 | El banco real no tiene preguntas de SDRA (se usaron los casos representativos del libro). |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2022 · Pregunta 13 | EPOC con pH 7,26 y PaCO2 62: la clave dice O2 por mascarilla al 50 %; el libro indica VMNI. |
| EUNACOM Julio 2015 · Pregunta 140 | NAC con IR tipo 1: la clave dice ventilación invasiva; el libro dice O2 titulado y luego CNAF. |
| EUNACOM Diciembre 2022 · Pregunta 99 | Intoxicación por CO: la clave dice TAC de cerebro; el libro dice carboxihemoglobina. |

## Diabetes

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| diab-17 | Cortes de potasio en CAD: no insulina bajo 3,3; no potasio sobre 5,2 (ADA 2009). | El consenso ADA/EASD 2024 los movió a 3,5 y 5,0. | Sigue el libro (3,3 / 5,2). |
| diab-17 | La tabla de potasio dice "prevenir paro cardíaco en diástole" para la hipokalemia. | El paro en diástole es típico de la hiperkalemia. | No usa esa frase. |
| diab-18 | Criterios de resolución de CAD mezclan versiones (glucosa < 200 + 2 de 3 con bicarbonato ≥ 18); la tabla pide pH > 7,30 y bicarbonato > 18 para resolver el SHH, que no tiene acidosis. | Mezcla de guías; criterio sin sentido para SHH. | Sigue el libro. |
| diab-19 | "Osmolitos idiopáticos". | Debería ser "idiogénicos". | Dice "osmoles endógenos". |
| diab-19 | En coma por edema cerebral: intubar "con hiperventilación leve protectora". | La guía pediátrica actual (ISPAD) aconseja evitar la hiperventilación. | Solo menciona asegurar la vía aérea. |
| diab-01 | La tabla llama "patognomónico" de LADA al anti-GAD. | El anti-GAD también es positivo en la DM1 clásica. | No usa esa palabra. |
| diab-02 | "Notificación oficial GES N° 2" para la DM2. | En la lista GES la DM2 es el problema N° 7 (el N° 2 es cardiopatías congénitas operables). | No dice el número. |
| diab-03 | Glibenclamida "contraindicada" en el embarazo. | MINSAL y guías internacionales aceptan metformina (y en algunas, glibenclamida) como alternativas a la insulina; "contraindicada" es demasiado fuerte. | Sigue el libro. |
| diab-04 | ACCORD mostró que el exceso de muertes se debió a "arritmias secundarias a hipoglicemias". | ACCORD no demostró esa causa. | Dice "que el libro atribuye". |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| diab-20 | Confirmación de albuminuria: 2 de 3 muestras en 3 a 6 meses (texto) | La viñeta confirma a las 6 semanas y una pregunta a los 2 meses | El texto |
| diab-01 | Edad de inicio del LADA: 25–45 años (texto) | 25–50 años (tabla) | El texto |
| diab-02 | Sección 1: los criterios 1–3 (incluida la PTGO ≥ 200) necesitan confirmación | Sección 3 y tabla: PTGO ≥ 200 confirma sin repetir | La sección 3 |
| diab-04 | Meta de HbA1c en adulto mayor frágil: "< 8,0–8,5 %" (sección 2 y tabla) | "7,5–8,5 %" (viñeta) y "7,5–8,0 % óptima" (contexto) | La sección 2 |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| diab-20 | No dice si los agonistas GLP-1 se pueden usar con clearance de 12 ni si la vildagliptina se contraindica o solo se ajusta (necesario para explicar EUNACOM Dic 2025 P37). |
| diab-18, diab-19 | El banco real no tiene preguntas de resolución de CAD/SHH ni de edema cerebral o hipofosfemia. |
| diab-02 | No da edad de inicio ni frecuencia del tamizaje en personas con factores de riesgo (solo "cada 3 años" si es normal). |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2022 · Pregunta 105 | Diabético con albuminuria e HTA: la clave dice atenolol; el libro dice IECA/ARA-II. |
| EUNACOM Diciembre 2024 · Pregunta 101 | Entrada corrupta: el enunciado no calza con las alternativas. |
| EUNACOM Diciembre 2022 · Pregunta 95 | Hospitalizado con hidrocortisona y adrenalina: la clave dice PTGO; el libro (y Dic 2025 P93, Ene 2023 P169) dice HbA1c. |
| EUNACOM Julio 2025 · Pregunta 166 | Diabetes gestacional con metformina sin metas: la clave dice pioglitazona; el libro dice insulina y la pioglitazona no se usa en el embarazo. |
| EUNACOM Diciembre 2024 · Pregunta 108 | PTGO 200 a las 24 semanas: la clave dice iniciar insulina de inmediato; el libro parte con dieta 1–2 semanas. |
