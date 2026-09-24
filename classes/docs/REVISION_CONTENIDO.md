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
(y a los PDF publicados). Confirmado también en Neumología (resp-02, resp-14): p. ej. "Dic 2018 Q#42" es una pregunta de dímero D, y el banco no tiene exámenes de Julio 2021 ni Diciembre 2023.

Además, los códigos Perfil V3 de varios temas del libro (Diabetes, algunos de Neumología) apuntan a preguntas de otros temas en el banco; los agentes encontraron las preguntas reales buscando por tema. En las clases solo se usan fechas del banco real; las preguntas del libro van como "Caso representativo" sin fecha.

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
| nefro-16 | Plasmaféresis "primera línea obligatoria" en vasculitis ANCA con creatinina > 5,7. | El estudio PEXIVAS (2020) no mostró beneficio; KDIGO actual la considera caso a caso. | La voz dice "el libro la indica". |
| nefro-16 | El campo GES dice "Garantía Explícita en Salud de Urgencia Vital (Ley de Urgencias)". | La Ley de Urgencia no es una garantía GES. | No se menciona. |
| nefro-09 | Patrón prearresto "morfología bifásica sinusal (sine-wave)". | Es "sinusoidal"; "sinusal" es ritmo sinusal. | — |
| nefro-12 | Síndrome pilórico con "vómitos alimentarios y biliosos". | La bilis no sube si la obstrucción es pilórica. | Omite "biliosos". |
| nefro-12 | "Estenosis de arteria renal" como exceso autónomo de mineralocorticoides. | Es hiperaldosteronismo secundario, dependiente de renina. | Solo como causa de Clu > 20 con HTA. |
| nefro-11 | Pregunta 2 del libro: pH 7,10 con HCO3 7 y pCO2 18. | Esos gases dan pH ~7,21; no calzan. | No usa la pregunta. |

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
| nefro-13 | Síndrome nefrótico: proteinuria > 3,5 g y albúmina < 3,0 (edema acompaña) (texto) | Tríada que incluye edema (keyPoints y diagrama) | El texto |
| nefro-14 | Membranosa: depósitos granulares "gruesos" (texto) | "Finos" (viñeta) | "Granular" |
| nefro-16 | Metilprednisolona 500–1.000 mg/día (texto) | 1.000 mg/día (tabla) | Ambos |
| nefro-09 | El desplazamiento baja el K 0,5–1,2 mEq/L (texto) | 0,5–1,0 (tabla) | El texto |

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
| nefro-10 | No da dosis de sulfato de magnesio EV ni de KCl o gluconato de potasio oral. |
| nefro-11 | Promete "cuatro pasos lógicos" y lista tres. |
| nefro-12 | El título incluye "Trastornos mixtos" pero no da método para detectarlos (solo la fórmula de compensación). |

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
| EUNACOM Diciembre 2022 · Pregunta 104 | K 8,2, FC 30, PA 70/36: la clave dice suero fisiológico; el libro pone gluconato de calcio primero. |
| EUNACOM Diciembre 2017 · Pregunta 50 | K 3,5 (no es hipokalemia); clave "restringir sal", discutible. |

| EUNACOM Diciembre 2022 · Pregunta 54 | Su clave da hidroclorotiazida como fármaco de elección en diabético con albuminuria; el libro indica IECA o ARA-II. |

## Neumología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| resp-24 | Llama "efecto Haldane negativo" a la desviación de la curva a la izquierda por CO. | El efecto Haldane se refiere al transporte de CO2; la etiqueta es incorrecta. | Solo menciona la desviación a la izquierda. |
| resp-22 | Bloqueo neuromuscular precoz con cisatracurio en las primeras 48 h en todo SDRA severo. | El estudio ROSE (2019) no confirmó beneficio; ya no es rutina. | Se mantuvo, atribuido al libro. |
| resp-21 | Gradiente alvéolo-arterial: la viñeta (PaCO2 68, PaO2 52) da 11 y la pregunta 1 (PaCO2 65, PaO2 55) da 12. | Los cálculos dan 13 y ~14 (siguen siendo normales). | Caso propio con números correctos. |
| resp-01 | La explicación de la pregunta 1 dice que el VEF1 subió "16 % absoluto" (de 68 % a 84 %). | Son 16 puntos porcentuales, ~23,5 % relativo al basal. | No usa esa pregunta. |
| resp-14 | La tabla de gravedad llama al taponamiento "shock cardiogénico por restricción diastólica". | Se clasifica como shock obstructivo. | Evita la etiqueta. |
| resp-14 | Tórax volante = "segmento de ≥ 2 costillas rotas". | Incompleto: son ≥ 2 costillas adyacentes rotas en ≥ 2 puntos cada una. | — |
| resp-14 | Sitio alternativo de punción: 5° espacio, línea axilar anterior. | ATLS 10 usa 4°–5° espacio, línea axilar media (igual que la explicación de Dic 2025 P134). | Sigue el libro. |
| resp-16 | "TAC de tórax de cortes finos con contraste" para caracterizar el nódulo. | La evaluación del nódulo (Fleischner) es con cortes finos sin contraste. | Omite "con contraste". |
| resp-19 | Llama a su Wells "versión original / simplificada de 3 niveles". | El corte que usa (≤ 4 vs > 4) es el de la versión de 2 niveles. | Usa el corte ≤ 4 / > 4. |
| resp-18 | Corticoides contraindicados en la FPI sin excepción. | Las guías aún los permiten en la exacerbación aguda de FPI. | — |
| resp-18 | La NIU "afecta la pleura visceral inmediata". | Afecta el pulmón subpleural, no la pleura. | — |
| resp-08 | NIH por Klebsiella BLEE con esquema piperacilina/tazobactam o cefepime. | Esos esquemas no cubren BLEE de forma confiable; suele requerir carbapenémico. | — |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| resp-22 | Prono: "SDRA moderado a severo con PaFi < 150" (texto) | "SDRA severo (PaFi < 150)" (diagrama) y solo en fila Severo (tabla); severo "< 100" vs "≤ 100" | El texto |
| resp-02 | FC en crisis leve-moderada "100–120 lpm" (texto) | "< 100–110" (tabla) y "100–110" (tabla de gravedad) | El texto |
| resp-03 | La explicación de la pregunta 1 cuenta 2 criterios ("parcialmente controlada") | El enunciado cumple 3 criterios ("no controlada" según el texto) | El texto (0 / 1–2 / 3–4) |
| resp-04 | Tres medidas mejoran la sobrevida (tabaco, O2 domiciliario, cirugía de reducción o trasplante) | keyPoints dice solo dos | El texto |
| resp-04 | Corticoide inhalado: eosinófilos ≥ 300 o ≥ 100 con asma o ≥ 2 exacerbaciones (texto) | Solo ≥ 300 (keyPoints y tabla) | El texto |
| resp-13 | Neumotórax primario: 15–34 años (texto) | 20–30 años (tabla) | El texto |
| resp-18 | Antifibróticos frenan la caída de la "CVF" (texto) | "VEF1" (diagrama) | El texto |
| resp-19 | Bajo riesgo = sPESI 0 (texto) | Eco y troponinas negativas (tabla) | El texto |
| resp-20 | Tubo endotraqueal "8,0–8,5 mm" (texto) | "≥ 8,0 Fr" (diagrama) | El texto |
| resp-10 | Fase de continuación diaria, 4 meses / 100 dosis (texto) | "Bisemanal o trisemanal" (diagrama) | El texto |
| resp-12 | Tubo si glucosa pleural < 40 (sección 3) | Complicado < 40–60 (secciones 1–2, tabla); tubo obligatorio en categoría 3 con 40–60 (tabla de gravedad) | < 40 |
| resp-09 | "Ampicilina/sulbactam oral/EV 4–6 sem" (tabla) | Ampicilina/sulbactam EV y luego amoxicilina/clavulánico oral (texto) | El texto |
| resp-05 | Broncodilatador cada 2–4 h tras las primeras 2 h; prednisona "exactamente 5 días" (texto) | "c/4–6 h" (tabla); "no más de 5 a 7 días" (keyPoint) | El texto |
| resp-06 | GES: atención integral de la NAC en ≥ 65 años, Rx y antibiótico en < 24 h (texto) | "NAC de manejo ambulatorio en ≥ 65" (campo GES) | El texto |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| resp-24 | El título incluye "Inhalación de humo" pero no trata cianuro, quemadura de vía aérea ni cuándo intubar. |
| resp-22 | El banco real no tiene preguntas de SDRA (se usaron los casos representativos del libro). |
| resp-15 | No menciona el asbesto como causa de mesotelioma (Dic 2017 P20) ni el criterio de colesterol en líquido pleural para exudado (Jul 2019 P116). |
| resp-16 | La regla "estable 2 años = benigno" es solo para nódulos sólidos; no da seguimiento de nódulos subsólidos. |
| resp-17 | No trata el síndrome de vena cava superior (Jul 2024 P66 y P67) ni dice que el estudio parte con TAC de tórax (Jul 2024 P165). |
| resp-19 | No describe el puntaje de Ginebra (está en el título); no cubre síndrome nefrótico con derrame hemorrágico como TEP (Jul 2015 P63, Dic 2019 P121) ni el tenecteplase (Dic 2025 P8). |
| resp-20 | No dice cómo estudiar la causa de las bronquiectasias (test del sudor: Jul 2019 P57, Dic 2019 P143). No hay preguntas reales de hemoptisis masiva. |
| resp-14 | No hay preguntas reales de hemotórax masivo. |
| resp-10 | Quimioprofilaxis solo obligatoria en menores de 5 y VIH; el banco pregunta adultos y embarazadas con PPD (+) (Jul 2017 P21, Dic 2017 P16). Falta seguimiento mensual con BK y fracaso vs recaída (Jul 2024 P140, Jul 2016 P118). El corte de transaminasas para suspender solo está en una explicación. |
| resp-12 | No tiene el criterio de lactato pleural (Jul 2024 P156: drenaje por lactato > 5 con pH 7,26). |
| resp-05 | La tabla de gravedad deja el pH 7,25–7,29 sin categoría; no dice que el antibiótico se indica en toda exacerbación con soporte ventilatorio (GOLD). |
| resp-08 | No cubre Pneumocystis jirovecii (Dic 2019 P38) y nombra la NAV sin contenido. |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2022 · Pregunta 13 | EPOC con pH 7,26 y PaCO2 62: la clave dice O2 por mascarilla al 50 %; el libro indica VMNI. |
| EUNACOM Julio 2015 · Pregunta 140 | NAC con IR tipo 1: la clave dice ventilación invasiva; el libro dice O2 titulado y luego CNAF. |
| EUNACOM Diciembre 2022 · Pregunta 99 | Intoxicación por CO: la clave dice TAC de cerebro; el libro dice carboxihemoglobina. |
| EUNACOM Julio 2017 · Pregunta 17 | Clave: salbutamol solo como tratamiento inicial del asma; el libro lo prohíbe. |
| EUNACOM Diciembre 2025 · Pregunta 127 | Clave: subir la fluticasona; el libro sube a CI+LABA o MART (la propia explicación la llama discutible). |
| EUNACOM Julio 2024 · Preguntas 66 y 67 | Síndrome de vena cava superior: clave "radioterapia de urgencia", que su propia explicación dice que ya no se recomienda. |
| EUNACOM Diciembre 2022 · Pregunta 109 | Clave "fibrosis pulmonar" con espirometría obstructiva (VEF1/CVF 52 %). |
| EUNACOM Diciembre 2024 · Pregunta 33 | Entrada corrupta (dos alternativas C; la clave es un comentario de alumno). |
| EUNACOM Diciembre 2022 · Pregunta 81 | VIH con cultivo MGIT positivo: clave "profilaxis"; un cultivo positivo es TBC activa y se trata. |
| EUNACOM Julio 2024 · Pregunta 156 | Drenaje por lactato > 5, criterio que el libro no tiene. |
| EUNACOM Diciembre 2024 · Pregunta 132 | Entrada corrupta (alternativas de otra pregunta). |

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
| diab-11 | Glargina U300 y degludec "> 24 a 42 horas" (tabla); "24 hasta 42 h" para glargina U100/U300 y degludec (texto). | Las 42 horas son solo de la degludec. | "Veinticuatro horas o más; la degludec llega a cuarenta y dos". |
| diab-06 | GES N° 2 para la DM2 y rango "15 años y más". | La DM2 es el problema GES N° 7; la edad no se pudo confirmar. | Omite número y edad. |
| diab-07 | Suspender metformina "48 horas antes" del contraste yodado EV. | La guía actual suele suspenderla al momento del examen y reiniciar a las 48 h, según TFG. | Sigue el libro. |
| diab-24 | Llama "lipemia retinalis" al suero lechoso. | Ese término es un hallazgo de la retina, no del suero. | No usa el término. |
| diab-21, diab-22 | El campo GES dice "GES N° 2" para retinopatía y pie diabético. | La retinopatía diabética tiene su propio problema GES y la DM2 es otro número. | — |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| diab-20 | Confirmación de albuminuria: 2 de 3 muestras en 3 a 6 meses (texto) | La viñeta confirma a las 6 semanas y una pregunta a los 2 meses | El texto |
| diab-01 | Edad de inicio del LADA: 25–45 años (texto) | 25–50 años (tabla) | El texto |
| diab-02 | Sección 1: los criterios 1–3 (incluida la PTGO ≥ 200) necesitan confirmación | Sección 3 y tabla: PTGO ≥ 200 confirma sin repetir | La sección 3 |
| diab-04 | Meta de HbA1c en adulto mayor frágil: "< 8,0–8,5 %" (sección 2 y tabla) | "7,5–8,5 %" (viñeta) y "7,5–8,0 % óptima" (contexto) | La sección 2 |
| diab-09 | Insulina si CA fetal ≥ p75–90 (texto, keyPoints) | "Sobre p90" (contexto) | El texto |
| diab-10 | Biterapia si PA "> 20/10 sobre la meta (≥ 140/90)"; con meta 130/80 eso da 150/90 | ≥ 140/90 (keyPoints y diagrama) | ≥ 140/90 |
| diab-11 | Peak de análogos ultrarrápidos "a la hora" (texto) | "1–2 horas" (tabla) | ~1 h en la voz, rango en pantalla |
| diab-12 | Meta de ayuno 80–130 (sección 3) | 70–130 (tabla de titulación) | 70–130 |
| diab-06 | HbA1c ≥ 9 % asintomático → biterapia oral (tabla) | HbA1c 9–10 % al debut → insulina inmediata (sección 4) | La sección 4 (y Ene 2023 P151) |
| diab-07 | Glibenclamida "contraindicada en adultos mayores" (keyPoints) | "Desaconsejada / evitar (Beers)" (tabla) | La tabla |
| diab-08 | GLP-1 baja "5 a 15 % del peso" (texto) | "Baja 5 a 15 kg" (tabla) | El texto |
| diab-23 | Meta LDL muy alto riesgo < 55 (o < 70 MINSAL), alto < 70 (o < 100) (texto) | Al revés en keyPoints y explicación | El texto |
| diab-23 | Miositis: CK 3–10 veces lo normal (texto) | "5 a 10 veces" (explicación de pregunta) | El texto |
| diab-22 | Test de sonda a hueso: VPP > 90 % (texto) | "Especificidad > 90 %" (keyPoints) y "sensibilidad y especificidad > 90 %" (pregunta) | El texto |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| diab-20 | No dice si los agonistas GLP-1 se pueden usar con clearance de 12 ni si la vildagliptina se contraindica o solo se ajusta (necesario para explicar EUNACOM Dic 2025 P37). |
| diab-18, diab-19 | El banco real no tiene preguntas de resolución de CAD/SHH ni de edema cerebral o hipofosfemia. |
| diab-02 | No da edad de inicio ni frecuencia del tamizaje en personas con factores de riesgo (solo "cada 3 años" si es normal). |
| diab-09 | No menciona la metformina en el embarazo, que el banco pregunta (Jul 2025 P166, Jul 2016 P133). |
| diab-05 | El título promete "Prevención cardiovascular" y ninguna sección la trata. |
| diab-08 | No da corte de TFG para iniciar iSGLT2 (solo "VFG 20–60" en una tabla de diab-06). |
| diab-23 | El título promete la clasificación de Fredrickson y no hay contenido; tampoco efectos hepáticos de estatinas; la categoría "riesgo bajo" solo está en la tabla. |
| diab-21 | El plazo GES de derivación "30–60 días" solo está en la tabla, sin decir a qué garantía corresponde. |
| diab-24 | Gemfibrozilo 600 mg cada 12 h; las preguntas reales usan 900 mg/día. |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2022 · Pregunta 105 | Diabético con albuminuria e HTA: la clave dice atenolol; el libro dice IECA/ARA-II. |
| EUNACOM Diciembre 2024 · Pregunta 101 | Entrada corrupta: el enunciado no calza con las alternativas. |
| EUNACOM Diciembre 2022 · Pregunta 95 | Hospitalizado con hidrocortisona y adrenalina: la clave dice PTGO; el libro (y Dic 2025 P93, Ene 2023 P169) dice HbA1c. |
| EUNACOM Julio 2025 · Pregunta 166 | Diabetes gestacional con metformina sin metas: la clave dice pioglitazona; el libro dice insulina y la pioglitazona no se usa en el embarazo. |
| EUNACOM Diciembre 2024 · Pregunta 108 | PTGO 200 a las 24 semanas: la clave dice iniciar insulina de inmediato; el libro parte con dieta 1–2 semanas. |
| EUNACOM Diciembre 2022 · Pregunta 162 | Debut catabólico con glicemia 318: clave "dieta y metformina"; contradice los criterios de insulina del libro y Dic 2018 P17. |
| EUNACOM Julio 2013 · Pregunta 143 | Úlcera hasta tendones con pus sin hueso (Wagner 2, ambulatorio según el libro): la clave dice antibiótico EV y aseo quirúrgico. |
| EUNACOM Julio 2024 · Pregunta 77 | Triglicéridos 1.000: la clave dice "dieta estricta" y marca el fibrato como incorrecto; el libro indica fibrato inmediato. |

## Endocrinología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| endo-04 | La hCG "comparte la subunidad beta con la TSH". | Comparten la subunidad alfa; las beta solo se parecen. | Dice que la hCG "se parece a la TSH". |
| endo-04 | En el embarazo "todo hipotiroidismo con TSH > 2,5 debe ser tratado". | Más estricto que la guía ATA actual (depende de anti-TPO y rangos del embarazo). | Sigue el libro. |
| endo-03 | Carga de levotiroxina EV 300–500 mcg en el coma mixedematoso. | Las guías actuales usan 200–400 mcg y menos en ancianos o cardiópatas. | Sigue el libro. |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| endo-01 | Límite superior de TSH 4,0 (viñeta); TSH "inapropiadamente normal" 1,0–3,5 (endo-01) | "4,0–4,5" (texto); 1,0–3,0 (tabla de endo-02) | El texto de endo-01 |
| endo-02 | Dosis baja desde "> 60–65 años"; coronarios 25–50 mcg (12,5 en graves); TSH ≥ 10 se trata en "todo paciente" (texto) | "> 65 años"; 12,5–25 mcg; "no anciano" (tablas) | El texto |
| endo-03 | Tríada: hipotermia + compromiso de conciencia + compromiso cardiovascular/respiratorio (texto) | Hipotermia + hiponatremia + sopor (keyPoints) | El texto |
| endo-04 | Aumento de dosis al confirmar embarazo 20–30 % (texto); ectopia 50–60 % | 25–30 % (tabla) y 20–50 % (explicación); ectopia 60 % | El texto |
| endo-22 | Macroadenoma en > 75 % (texto y tabla) | "Macroadenoma en 98 %" (contexto y keyPoints) | El texto: 98 % es adenoma secretor de GH y > 75 % de ellos son macro |
| endo-24 | Osmolalidad urinaria en DI "< 200–300" (texto) | "< 300" (dx y keyPoints) | Ambos |
| endo-19 | Mantención de vitamina D 1.000–2.000 UI/día; calcio 1.000 mg/día (texto) | 800–1.200 UI/día en adultos mayores (algoritmo); calcio 1.000–1.200 (preguntas) | El texto |
| endo-20 | Resonancia urgente en la apoplejía (texto) | TAC (pregunta del libro) | El texto |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2018 · Pregunta 105 | 84 años con TSH 8,4 y 9,2: clave "iniciar levotiroxina"; el libro observa en mayores de 70–80 asintomáticos con TSH 4,5–9,9. |
| EUNACOM Diciembre 2022 · Pregunta 6 | Clave "cetoacidosis diabética" en un cuadro de coma mixedematoso sin datos de acidosis (TSH 100, T4L 0,1, hipotermia, bradicardia). La clave parece errónea. |
| EUNACOM Diciembre 2022 · Pregunta 48 | Hipogonadismo con defecto de campo temporal: clave "TSH"; el libro dice que la TSH no sirve en falla central (y Dic 2018 P111 responde resonancia de silla turca). |
| EUNACOM Julio 2024 · Pregunta 121 | Clave "denosumab endovenoso" (es subcutáneo) y recomienda anabólicos antes que bifosfonatos con fractura, contra el libro. |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| endo-22 | El título incluye gigantismo pero solo hay un keyPoint. |
| endo-24 | El tratamiento de la DI solo está en el campo tx, sin dosis. El banco real no tiene preguntas de NEM. |
| endo-18 | El campo GES cita "GES 16 (adulto mayor con artrosis / fracturas)" sin decir la garantía (número dudoso). No da conducta para la osteopenia bajo el umbral FRAX. |
| endo-19 | "Raquitismo" está en el título sin contenido (clínica, profilaxis en lactantes). La contraindicación de bifosfonatos en osteomalacia solo está en una explicación. |
