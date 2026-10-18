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
| gastro-18 | `reconstrucciones` nombra 4 preguntas (Q#66, Q#121, Q#54, Q#101) pero `questions` trae solo 2. Q#66 sí es real (Julio 2013 · Pregunta 66) y ya se agregó al guion. Q#101 (Dic 2019) no se encontró en el banco real — sigue sin resolver. El Q#54 que cita el libro ("Julio 2016") no es real para este tema (la pregunta real de esa fecha/número es sobre cetoacidosis diabética); el guion usa esa pregunta como "Caso representativo" sin fecha. |
| gastro-15 | Dosis de albúmina en la peritonitis bacteriana espontánea (solo dice "día 1 y día 3"). |
| gastro-21 | "Ligadura en las primeras 12 horas" solo aparece en la explicación de la viñeta, no en el texto. |
| gastro-06, gastro-12, gastro-25 | El tema no tiene código Perfil V3 en el libro, así que no se le pueden asignar preguntas reales del banco. |
| gastro-12 | `reconstrucciones` dice "Sin preguntas en exámenes 2013-2025" para patología perianal, pero sí existen preguntas reales del banco (Julio 2025 #27, Julio 2017 #54); no aparecen buscando por código Perfil porque el tema no tiene `perfilCode` asignado, solo por texto. Se agregaron ambas al guion. |

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
| endo-16 | La PTH causa "hipofosfaturia/hipofosfatemia". | La PTH causa hiperfosfaturia (bloquea la reabsorción de fósforo). | "El fósforo se va por la orina". |
| endo-14 | La adrenalectomía "normaliza la kalemia en el 100 %". | Exagerado. | Solo dice que normaliza el potasio. |
| endo-10 | "GES N° 33" para el cáncer de tiroides. | El número parece incorrecto (el problema es "Cáncer de tiroides diferenciado y medular en personas de 15 años y más"). | Omite el número. |
| endo-12 | Campo GES menciona "Ley Ricarte Soto para bombas o fármacos especializados". | No aplica a la insuficiencia suprarrenal. | Se omite. |

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
| endo-15 | Betabloqueo tras 2–4 días de alfabloqueo adecuado (texto) | Solo tras los 10–14 días de alfabloqueo (campo tx) | El texto |
| endo-10 | Carcinoma medular 3–5 % (texto y tabla) | 5–7 % (diagrama) | 3–5 % |
| endo-11 | Enfermedad de Cushing = 70–75 % del Cushing endógeno (texto y tabla) | 80 % (contexto) y 70–80 % (keyPoints) | 70–75 % |
| endo-12 | ACTH en Addison "> 60 a 100 pg/mL" (texto) | "> 100 pg/mL" (tabla) | El texto |

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
| endo-14 | No dice que la mayoría de los hiperaldosteronismos tienen potasio normal (Dic 2025 P171) ni que se agrega espironolactona como 4° fármaco en HTA resistente mientras se estudia (Dic 2022 P51, Ago 2021 P136, Ene 2023 P81). |
| endo-15 | No diferencia feocromocitoma de adenoma de Conn u otras masas suprarrenales (Ene 2023 P82). |
| endo-10 | No cubre las complicaciones de la tiroidectomía (hipoparatiroidismo, hipocalcemia), que el banco pregunta (Jul 2024 P82, Ene 2023 P110, Dic 2018 P25). |

## Hematología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| hem-03 | Campo GES: "GES: prevención y tratamiento integral en niños y gestantes" para anemia ferropriva. | No existe una garantía GES para la anemia ferropriva. | No menciona GES. |
| hem-08 | CHCM > 36 "patognomónica" de esferocitosis. | También sube en la AHAI con esferocitos (Dic 2025 P21); es característica, no patognomónica. | "La pista más sugerente", atribuyendo el término al libro. |
| hem-06 | El ácido fólico solo "agota los residuos de cobalamina en la vía de la metilmalonil-CoA". | Mecanismo no establecido; lo aceptado es que corrige la anemia y enmascara el déficit mientras progresa el daño neurológico. | Explica ambas ideas sin profundizar. |
| hem-07 | Frotis en crioaglutininas: hematíes "en pilas (rouleaux)". | Las crioaglutininas producen aglutinación irregular; el rouleaux es típico del mieloma. | "Glóbulos aglutinados". |
| hem-13 | Llama "GES N° 32" a la hemofilia. | El número parece incorrecto (no se pudo confirmar). | "Cubierta por el GES", sin número. |
| hem-12 | La tabla de gravedad asocia los grados OMS de sangrado a rangos de plaquetas; el grado 1 es incoherente (rango 20.000–30.000, conducta "si > 30.000 observar"). | La escala OMS se basa en el sangrado, no en el recuento. | No usa la tabla; sigue el texto. |
| hem-16 | "GES N° 37" para leucemia en personas de 15 años y más. | El GES 37 sería el ACV isquémico; la leucemia del adulto sería el GES 45 (confirmar). | "Cubiertas por el GES", sin número. |
| hem-18 | Llama "transformación de Richter" a la del linfoma folicular a linfoma agresivo. | El síndrome de Richter es la transformación de la LLC. | "Transformación a linfoma difuso agresivo". |
| hem-17, hem-18 | Sombras de Gümprecht y signo de Hoster "patognomónicos". | Son característicos, no patognomónicos. | "Clásicas" / "orientan a Hodgkin". |
| hem-20 | "Anomalía de Pelger-Huët" en la mielodisplasia. | En la mielodisplasia es adquirida: pseudo-Pelger-Huët. | — |
| hem-21 | La mortalidad sube 10 % por cada hora de retraso del antibiótico. | Cifra exagerada o sin fuente. | Solo dice que cada hora de retraso aumenta la mortalidad. |
| hem-21 | Campo GES: "GES: urgencia vital en paciente oncológico". | No existe un GES con ese nombre. | No se menciona. |
| hem-22 | Ventana de Cairo-Bishop "24 h previas o 7 días posteriores"; lisis clínica con creatinina 1,5 veces la basal. | La definición estándar es 3 días antes a 7 después, y creatinina 1,5 veces el límite superior normal. | No da la ventana; sigue el libro en la creatinina. |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| hem-03 | Hb sube "1 a 2 g/dL cada 2 a 3 semanas" (texto) | "Al menos 1,5 a 2,0 g/dL" a las 3–4 semanas (tabla) | La tabla |
| hem-02 | Anemia de enfermedad crónica con saturación "15–25 %" (tabla) | La viñeta tiene saturación 14 % con el mismo diagnóstico | "Baja o normal", con corte de ferritina 100 |
| hem-08 | Medir G6PD 2–3 meses después de la crisis (texto) | "Varias semanas" (keyPoints) | El texto |
| hem-10 | TP/TTPK "estrictamente normales" en el SHU (libro) | Dic 2025 P61: SHU neumocócico con TP 16,2 s | El libro |
| hem-05 | Más del 75 % de las aplasias son idiopáticas (texto) | 50–75 % (explicación de pregunta 2) | El texto |
| hem-12 | Viñeta con 9.000 plaquetas y sangrado mucoso: corticoides e inmunoglobulina solo si no cede (explicación) | Sección 4 y tabla: < 10.000 → inmunoglobulina EV | Caso propio sin ambigüedad |
| hem-14 | Vitamina K oral con INR > 10: 2,5–5 mg (texto, tabla, keyPoints) | 1–2,5 mg (diagrama) | El texto |
| hem-14 | Complejo protrombínico 25–50 UI/kg (texto y tabla) | 50 UI/kg en bolo (explicación) | El texto |
| hem-18 | Primer peak de Hodgkin 15–35 años (texto) | 20–30 años (tabla y keyPoints) | El texto |
| hem-21 | Monoterapia sin aminoglucósido de rutina (texto) | "Doble cobertura" ceftazidima + amikacina (pregunta 2 del libro) | El texto |
| hem-21 | Vancomicina cada 8–12 h (texto) | Cada 12 h (tabla) | No da dosis |
| hem-23 | ACOD "formalmente contraindicados" solo en SAF triple positivo (sección 3) | Contraindicados en todo SAF trombótico (contexto y keyPoints) | La sección 3 |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| hem-01 a hem-03 | Las preguntas del libro son "Banco oficial AEE" sin fecha; la primera de hem-01 tiene el enunciado cortado y la alternativa E corrupta. |
| hem-10 | Solo nombra E. coli O157:H7 y Shigella como causas de SHU (no el neumocócico, Dic 2025 P61) y no dice si evitar antibióticos o antidiarreicos en la diarrea por STEC. |
| hem-06 | Solo da el esquema de B12 intramuscular para malabsorción; no da tratamiento del déficit dietario (vegano), que según Dic 2025 P133 es oral. |
| hem-05, hem-07 | Preguntas del libro con texto corrupto ("Radioterapiay­oncologia/ 1/8", "Haptoglobina bajay­oncologia/ 1/6"). El banco real no tiene preguntas de aplasia medular. |
| hem-11 | El fibrinógeno está en el título sin rango normal ni interpretación. |
| hem-12 | No trata la trombocitopenia inducida por heparina (Jul 2025 P131). El título dice "Terapia GES" pero el campo GES dice "No GES directo". |
| hem-13 | La pregunta 2 del libro tiene el campo de respuesta correcta vacío. |
| hem-14 | No dice que los anticoagulantes orales directos están contraindicados con válvulas mecánicas (Dic 2025 P150). |
| hem-15 | No dice qué dar primero con TP y TTPK prolongados y fibrinógeno < 100 (Dic 2017 P54: plasma); no menciona el feto muerto retenido como causa de CID ni que el dímero D sube en el embarazo (Jul 2019 P54). |
| hem-19 | No explica el corte de 60 % de plasmocitos ni los biomarcadores de mieloma activo sin CRAB (≥ 60 % plasmocitos, razón de cadenas livianas ≥ 100, > 1 lesión focal en RM). |
| hem-22 | Las preguntas del libro son de tratamiento de LLA, no del tema; no dice qué hipouricemiante usar con déficit de G6PD; no dice que la PTH está suprimida en la hipercalcemia maligna. |
| hem-23 | No dice que los anticuerpos antifosfolípidos dan VDRL falso positivo (Dic 2019 P54) ni el manejo del SAF obstétrico. |
| hem-24 | No cubre la compatibilidad Rh ni el uso de sangre Rh+ en Rh− en emergencia (Jul 2024 P14); nombra el shock anafiláctico sin contenido; la compatibilidad ABO solo está en las preguntas. |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2019 · Pregunta 18 | Clave: transfundir a un paciente estable con Hb 7,8; el libro decide por clínica, no por cifra (la propia explicación la llama muy discutible). |
| EUNACOM Julio 2025 · Pregunta 53 | Clave: hierro elemental 200 mg/día; el libro da 40–100 mg/día o en días alternos. |
| EUNACOM Julio 2017 · Pregunta 5 | Embarazada con clave "HELLP"; la propia explicación duda y el caso calza igual o mejor con PTT. |
| EUNACOM Julio 2013 · Pregunta 87 | Clave: hemograma con reticulocitos para el diagnóstico etiológico de la hemólisis; el libro dice Coombs directo. |
| EUNACOM Diciembre 2025 · Pregunta 22 | Adulto con 15.000 plaquetas sin sangrado grave: clave dexametasona EV + inmunoglobulina EV; el libro indica corticoide oral (la propia explicación lo admite). |
| EUNACOM Julio 2025 · Pregunta 142 | INR 7,8 sin sangrado: clave vitamina K oral; el libro solo suspende 1–2 dosis. |
| EUNACOM Diciembre 2022 · Pregunta 67 | Clave LMA en un cuadro típico de anemia megaloblástica (VCM 126, LDH 1.012). |
| EUNACOM Diciembre 2022 · Pregunta 85 | Clave leucemia aguda en lactante de madre vegana estricta con pancitopenia y regresión (déficit de B12). |
| EUNACOM Diciembre 2022 · Pregunta 134 | Clave quimioterapia con lisis tumoral establecida (K 6,3, ácido úrico 12,2, fósforo 7,1), que se trata primero. |
| EUNACOM Diciembre 2022 · Pregunta 7 | Fiebre post quimioterapia: clave urocultivo como primer examen; el libro pide hemograma con RAN y luego hemocultivos. |
| EUNACOM Julio 2024 · Pregunta 164 | Neutropenia febril: clave ceftriaxona, que no cubre Pseudomonas; el libro exige monoterapia antipseudomónica. |
| EUNACOM Julio 2013 · Pregunta 109 | Clave ceftazidima + amikacina; el libro ya no agrega aminoglucósido de rutina. |
| EUNACOM Enero 2023 · Pregunta 106 | LLA con hiperuricemia: clave suero + alopurinol; el libro indica rasburicasa en alto riesgo. |
| EUNACOM Diciembre 2017 · Pregunta 54 | Hemorragia postparto con fibrinógeno 90: clave plasma; el libro indica crioprecipitado con fibrinógeno < 100–150. **Ojo: hem-15 sí la usa (con la clave del banco); revisar esa clase.** |

## Reumatología

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2017 · Pregunta 47 | Su explicación sugiere suspender la colchicina (solo en crisis); el libro indica colchicina profiláctica 0,5 mg/día por 3–6 meses al iniciar o titular alopurinol. |

## Infectología

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| infecto-01, infecto-02 | Campos GES: "Manejo integral del paciente crítico en UCI" e "Infecciones del SNC en adultos y pediatría". | No parecen ser problemas GES reales. | No se menciona GES. |
| infecto-03 | VHS-1 causa "> 90 % de los casos" de encefalitis viral esporádica. | El > 90 % es la proporción de encefalitis herpética del adulto por tipo 1, no de todas las encefalitis. | "Causa más frecuente", sin cifra. |
| infecto-04 | Campo GES: "Infecciones graves de cabeza, cuello y partes blandas". | No parece un problema GES real. | No se menciona. |
| infecto-06 | Rabia: vacunar de inmediato si el animal es "desconocido, vagabundo o provocado". | "Provocado" parece invertido: la mordedura no provocada es la de mayor riesgo. | Omite la palabra. |
| infecto-06 | Inmunoglobulina antirrábica solo en contacto con murciélago. | Las exposiciones graves por otros animales suelen recibirla también. | Sigue el libro. **Revisar.** |
| infecto-08 | Cólera: "azitromicina 1 g dosis única en niños y embarazadas". | 1 g es la dosis de adulto; en niños es por peso (~20 mg/kg, máx. 1 g). | "Azitromicina en dosis única", sin cifra. |
| infecto-11 | La TBC ganglionar (escrófula) es la forma extrapulmonar más frecuente. | Según datos del programa chileno la pleural sería la primera (no verificado). | Sigue el libro. **Revisar.** |
| infecto-19 | Ántrax cutáneo: ciprofloxacino o doxiciclina por 60 días. | Los 60 días son para exposición inhalatoria o bioterrorismo; el ántrax cutáneo localizado se trata ~7–10 días. | Sigue el libro ("según el libro"). |

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| infecto-02 | Tríada: fiebre, cefalea y rigidez de nuca (texto) | Fiebre, rigidez de nuca y compromiso de conciencia (keyPoints) | El texto |
| infecto-02 | Ampicilina en > 50 años, embarazadas e inmunosuprimidos (texto) | > 50 años, alcohólicos y embarazadas (keyPoints) | El texto |
| infecto-03 | Absceso post otitis con neurocirugía previa: ceftriaxona + metronidazol (pregunta 2 del libro) | Agregar vancomicina si hubo trauma o cirugía (texto) | El texto; no usa la pregunta |
| infecto-05 | Coqueluche: azitromicina a toda embarazada (texto) | Solo en tercer trimestre (keyPoints) | El texto |
| infecto-05 | Profilaxis post exposición VIH 28 días (texto) | "28 días a 6 semanas" (alternativa de pregunta) | 28 días |
| infecto-10 | Cotrimoxazol con CD4 < 200 protege de Pneumocystis y Toxoplasma (keyPoint) | Toxoplasma: CD4 < 100 con IgG positiva (tabla) | La tabla |
| infecto-14 | Plaquetas < 100.000 y hematocrito > 45–50 % (texto) | Plaquetas < 50.000 (explicación); hematocrito > 50 % (tabla y explicación) | El texto |
| infecto-20 | Erisipela: cefadroxilo, cefalexina o flucloxacilina (texto) | Además penicilina oral, V y G sódica EV (tabla y explicación) | El texto, con penicilina oral como alternativa |
| infecto-21 | Exantema post amoxicilina pruriginoso, 90–100 % (texto) | No pruriginoso (viñeta); 95 % (tabla), > 90 % (keyPoints) | El texto (90–100 %), sin afirmar prurito |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| infecto-01 | No da esquema antibiótico empírico según foco en la sepsis ni dosis inicial de noradrenalina. El banco real no tiene preguntas de sepsis del adulto. |
| infecto-04 | Cita el "score LRINEC > 8" sin dar sus criterios; solo explica por qué va clindamicina, no meropenem ni vancomicina. |
| infecto-05 | No dice cómo estudiar al contacto de TBC antes de la quimioprofilaxis (radiografía y baciloscopías). No hay preguntas reales de accidente cortopunzante. |
| infecto-06 | No hay preguntas reales de contacto con murciélago ni de profilaxis antitetánica. |
| infecto-07 | No menciona el departamento de control de infecciones (Jul 2025 P107). No hay preguntas reales de aislamiento ni infección de catéter. |
| infecto-08 | No dice dónde se notifican los brotes (Seremi) ni el tipo de vigilancia (activa); no da tratamiento de Campylobacter (azitromicina). No hay preguntas reales de botulismo. |
| infecto-09 | No cubre VIH y embarazo (transmisión vertical: TARV inmediata, zidovudina al RN, no amamantar), muy preguntado en el banco. |
| infecto-10 | No cubre mucormicosis, aspergilosis ni vacunas en VIH (vacunas vivas), que el banco pregunta. No hay preguntas reales de toxoplasmosis cerebral. |
| infecto-11 | El título promete "manejo MDR" sin contenido; falta TBC resistente, fracaso, seguimiento con baciloscopías (Jul 2016 P118) e imagen en el mal de Pott (RM). |
| infecto-12 | Menciona la neurosífilis sin tratamiento; nombra el GES 35 sin el calendario de VDRL prenatal (28–30 semanas). |
| infecto-14 | No da el recuento de leucocitos (la viñeta tiene leucocitosis; Jul 2025 P7 dice leucopenia y nombra el virus "Sin Nombre", cuando en Chile es el virus Andes). |
| infecto-15 | "Se trata a la madre post-parto y lactancia" es ambiguo. El banco real no tiene preguntas de Chagas (solo como distractor). |
| infecto-13 | La sección de VPH no incluye la vacuna. Contactos a tratar: "recientes" (texto) y "últimos 60 días" (explicación). |
| infecto-18 | No describe el hemograma de la fiebre tifoidea (leucopenia, aneosinofilia; Dic 2025 P57) ni dosis de doxiciclina en leptospirosis leve o de penicilina G en el síndrome de Weil. |
| infecto-19 | Sin duración para la doxiciclina ni dosis de la triple terapia EV. No hay preguntas reales de ántrax. |
| infecto-20 | Solo da tratamiento tópico para la foliculitis; no dice cuándo requiere antibiótico oral (Dic 2025 P55 espera flucloxacilina). |
| infecto-21 | No dice cómo confirmar la infección aguda por VIH con anticuerpos negativos (carga viral / PCR; Jul 2024 P62). |
| infecto-22 | **No cubre el exantema súbito (roséola, herpes 6), con al menos 5 preguntas reales** (Dic 2018 P70, Jul 2025 P13, Jul 2024 P52, Ago 2021 P35, Jul 2013 P131), ni la enfermedad mano-pie-boca. No menciona la GN post estreptocócica tras escarlatina; sarampión solo clínica y notificación. |
| infecto-23 | No cubre el tratamiento sintomático de la varicela ni a quién dar aciclovir (> 13 años, segundo caso intradomiciliario, grave o inmunosuprimido); no cubre la embarazada expuesta (serología, inmunoglobulina hiperinmune; Dic 2018 P89, Dic 2022 P119). Corticoides en Ramsay-Hunt solo en la tabla. |
| infecto-24 | El título incluye "Fiebre sin foco" sin contenido (ni fiebre de origen desconocido); no trae los ítems del score MASCC. |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Diciembre 2022 · Pregunta 55 | Diarrea febril por Campylobacter de 7 días: clave "probióticos"; contra la práctica actual y Ene 2023 P76 (azitromicina). |
| EUNACOM Agosto 2021 · Pregunta 27 y Julio 2016 · Pregunta 37 | Embarazada alérgica a penicilina con sífilis: clave eritromicina; el libro exige desensibilización y penicilina (el macrólido no cruza bien la placenta). |
| EUNACOM Diciembre 2022 · Pregunta 86 | Clave coprocultivo en un cuadro de mononucleosis (debería ser anticuerpos heterófilos). |
| **EUNACOM Diciembre 2024 · Pregunta 6 (usada en infecto-18)** | **Texto del banco corrupto: el agente conservó el enunciado y la respuesta (A, brucelosis) pero reconstruyó las alternativas. Revisar o quitar esa diapositiva.** |
| EUNACOM Diciembre 2022 · Pregunta 43 | Lactante de 11 meses con 3 días de fiebre y luego exantema: clave Epstein-Barr; es roséola (herpes 6). |
| EUNACOM Enero 2023 · Pregunta 116 | Famciclovir 500 mg c/8 h por 7 días también es correcto: dos respuestas válidas. |
| **EUNACOM Julio 2013 · Pregunta 109 (usada en infecto-24)** | **Clave ceftazidima + amikacina; el libro hoy indica cefepime solo (en hem-21 se descartó). La voz lo aclara; revisar si se deja.** |

## Neurología y Geriatría

### B · El libro se contradice
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| neuro-02 | Endarterectomía con estenosis 70–99 %, o 50–69 % en hombres (texto) | ≥ 70 % (keyPoints); > 50 % (criterios de hospitalización directa) | El texto |
| neuro-08 | Valproato es el más eficaz en crisis generalizadas idiopáticas, incluidas ausencias (texto) | Etosuximida de elección en ausencias puras (tabla) | Ambos |
| neuro-06 | Profilaxis con "3 o más crisis al mes" (texto) | "≥ 3–4 crisis mensuales" (keyPoints) | 3 o más |
| neuro-07 | Fenitoína EV en crisis trigeminal refractaria y predominio femenino 2:1 (tabla) | No aparecen en el texto | Usa el predominio; omite fenitoína |
| neuro-11 | Discinesias: bajar dosis unitaria y aumentar la frecuencia (texto) | Bajar dosis unitaria y mantener la frecuencia (tabla de gravedad) | El texto |
| neuro-14 | MMSE patológico < 24 (texto) | Normal ≥ 27 y DCL 24–27 (tabla A); normal 27–30, leve 20–23, sin categoría para 24–26 (tabla B) | El texto (MoCA < 26) |
| neuro-17 | Rocuronio o vecuronio a un décimo de la dosis (texto y tabla) | Curarizantes "contraindicados absolutos" (keyPoints) | El texto |
| neuro-17 | Anti-MuSK en 30–40 % de los seronegativos (texto) | 35–40 % (tabla) | 30–40 % |
| neuro-19 | Prednisona 60 mg/día por 7 días y descenso en 3–5 días (texto y tabla) | "7 a 10 días" (keyPoints); descenso de 5 días (viñeta) | El texto |
| neuro-20 | Crisis de Ménière 20 min a 12 h; neuronitis recupera en 2–4 semanas (texto) | 20 min a 12–24 h; cede en 3 semanas (tabla) | El texto |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| neuro-01 | La clasificación TOAST solo nombra trombosis venosa cerebral y disección arterial, sin clínica; el banco las pregunta (Dic 2019 P1; Ago 2021 P76, síndrome de Horner). |
| neuro-03, neuro-05 | Las preguntas del libro son de otros temas (meningitis, neumonía, falla prerrenal, TEP con factor V Leiden, monitoreo de heparina). |
| neuro-06 | No da tratamiento agudo de la cefalea tensional. No hay preguntas reales de cefalea en racimos. |
| neuro-09 | No cubre las convulsiones en el embarazo ni la eclampsia (sulfato de magnesio; Jul 2025 P40). |
| neuro-10 | No menciona la neurocisticercosis como causa de primera crisis (Dic 2019 P144, única pregunta real del código). |
| neuro-13 | No da alternativa a biperideno/difenhidramina en la distonía aguda (el banco usa lorazepam, Dic 2019 P8); no cubre acatisia ni discinesia tardía (Dic 2018 P36, Ago 2021 P13). Preguntas del libro de otros temas o corruptas en neuro-12 y neuro-13. |

### Preguntas del banco real descartadas
| Pregunta | Motivo |
|---|---|
| EUNACOM Julio 2025 · Pregunta 66 | Clave aspirina a las 5 h; el libro da ventana de trombectomía de 0–6 h en oclusión de gran vaso (alternativa C). |
| EUNACOM Diciembre 2022 · Pregunta 97 | Hemiparesia pura sin afasia: clave arteria cerebral media; el libro la clasifica como lacunar. |
| EUNACOM Diciembre 2022 · Pregunta 93 | Ptosis y miosis tras dolor cervical súbito: clave "parálisis del III par"; es un síndrome de Horner por disección carotídea. |
| EUNACOM Julio 2016 · Pregunta 94 | Neuralgia del trigémino típica: clave "paracetamol y AINE"; el libro (y la propia explicación) dicen carbamazepina. |
| EUNACOM Diciembre 2018 · Pregunta 173 | Migraña menstrual con aura: clave anticonceptivos combinados; los estrógenos están contraindicados en migraña con aura. |
| EUNACOM Enero 2023 · Pregunta 127 y Diciembre 2022 · Pregunta 65 | Delirium en Parkinson: claves risperidona y alprazolam; se prefiere quetiapina y el libro proscribe antipsicóticos bloqueadores. |
| EUNACOM Diciembre 2024 · Pregunta 40 | Corrupta (comentario del transcriptor en la alternativa A) y la clave no calza con el caso (parkinsonismo por cinarizina). |
| EUNACOM Diciembre 2022 · Pregunta 78 | Flufenazina con fiebre y rigidez generalizada: clave "distonía aguda"; es síndrome neuroléptico maligno. |
| EUNACOM Diciembre 2022 · Pregunta 9 | Alzheimer con agitación: clave diazepam; el libro contraindica benzodiacepinas en demencia. |
| EUNACOM Diciembre 2025 · Pregunta 24 | La clave (haloperidol) no coincide con su propia explicación (risperidona). |
| **EUNACOM Diciembre 2025 · Pregunta 29 (usada en neuro-03)** | **Vértigo central: clave "TAC de cerebro"; el libro dice que el TAC detecta < 15–20 % de los infartos de fosa posterior y pide angio-RM urgente. neuro-20 la descartó; revisar neuro-03.** |
| EUNACOM Diciembre 2017 · Pregunta 58 y Agosto 2021 · Pregunta 102 | Casi el mismo caso con claves distintas (atrapamiento cubital vs túnel carpiano); el propio banco las califica de malas. |

### A · Posible error del libro
| Clase | Qué dice el libro | Por qué parece un error | Qué dice hoy el guion |
|---|---|---|---|
| neuro-03 | "Hipertermia maligna" en la hemorragia pontina. | Ese término es la reacción anestésica; aquí es hipertermia central. | "Hipertermia". |
| neuro-03 | Nitroprusiato e hidralazina "contraindicados". | Las guías aconsejan evitarlos, no los contraindican formalmente (confirmar). | "No se usa / evitar". |
| neuro-05 | "Proptosis ocular pulsátil" en la trombosis del seno cavernoso. | La proptosis pulsátil es típica de la fístula carótido-cavernosa. | "Proptosis". |
| neuro-08 | Las crisis de inicio generalizado "cursan siempre con compromiso de conciencia desde el inicio". | Las mioclonías (p. ej. epilepsia mioclónica juvenil) suelen conservar la conciencia. | No lo afirma para las mioclonías. |
| neuro-08 | Plazo GES "EEG y confirmación en ≤ 30 días" (epilepsia no refractaria ≥ 15 años). | Verificar contra el decreto GES vigente. | Sigue el libro. |
| neuro-09 | "Hipertermia maligna secundaria" en el status. | Ese término es la reacción a anestésicos. | "Hipertermia". |
| neuro-11 | Criterios "MDS 2026"; GES de Parkinson "N° 67"; plazos GES de 60 y 20 días y DBS cubierta por GES. | Los criterios MDS son de 2015; Parkinson sería el GES N° 62 (el 67 es esclerosis múltiple); verificar plazos y cobertura. | Omite el número GES. |
| neuro-10 | "Crisis durante el sueño" y "déficit focal permanente" dan por sí solos riesgo de recurrencia > 60 %. | En la definición ILAE 2014 aumentan el riesgo, pero no se definen como > 60 % por sí solos. | "El libro agrega". |
| neuro-12 | Flunarizina y cinarizina: "bloqueadores de canales de calcio con acción dopaminérgica". | Causan parkinsonismo por bloqueo D2: son antidopaminérgicas. | "Bloquean los receptores de dopamina". |
| neuro-12 | Respuesta a levodopa en parkinsonismo por fármacos "nula / contraindicada". | "Contraindicada" no tiene sustento; la conducta es suspender el fármaco causal. | No dar levodopa y suspender el fármaco. |
| neuro-15 | "Trazodona o sertralina" como ISRS en la demencia frontotemporal. | La trazodona no es un ISRS. | "Serotoninérgicos". |
| neuro-16 | "PImáx < −30 cmH2O (o más positiva que −20)" como criterio de riesgo. | El signo está mal: el riesgo es no alcanzar −30. keyPoints además dice "< 30". | "No alcanza menos treinta". |
| neuro-16 | Arreflexia "patognomónica"; corticoides "formalmente contraindicados". | La arreflexia es necesaria, no patognomónica; los corticoides no sirven, pero no hay contraindicación formal. | Sigue el libro en corticoides. |
| neuro-17 | Respuesta a succinilcolina "errática". | En la miastenia hay resistencia a la succinilcolina. | Se omite. |
| neuro-18 | Los anti-CD20 "degranulan" linfocitos B; bandas oligoclonales ausentes en "suero materno/sanguíneo". | Los anti-CD20 depletan linfocitos B; "materno" no corresponde en el adulto. | Términos corregidos. |
| neuro-20 | "Conarizina" como sedante vestibular. | Es cinarizina. | "Cinarizina". |

## Dermatología

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| derma-03, derma-06, derma-07, derma-08, derma-10 | El código Perfil V3 del tema, buscado en `class_questions.cjs <id>`, devuelve preguntas reales de un tema vecino distinto (no del tema de la clase): derma-03 (rosácea, código 6.01.1.003) recibe preguntas de cáncer de piel; derma-08 (urticaria, código 6.01.1.002) recibe una pregunta de alopecia areata (la misma que sí es correcta para derma-04, que comparte ese código); derma-10 (DRESS, código 6.01.2.003) recibe una pregunta de celulitis/erisipela. Mismo patrón ya documentado en otros libros (Diabetes, Neumología — ver nota general arriba). Los agentes buscaron por tema (`--search`) en vez de por código y usaron solo las preguntas que de verdad corresponden; las mal asignadas no se usaron. |
| derma-12 | Ni el código ni la búsqueda por tema ("eritema multiforme", "lesión en diana", "escarapela") encontraron una pregunta real que sea realmente de eritema multiforme: todos los resultados son en realidad casos de Stevens-Johnson (diana de 2 anillos + compromiso mucoso, respuesta correcta explícitamente "Steven Johnson"). Se usó "Caso representativo" del libro en su lugar. |
| derma-13, derma-15 | El banco real sí tiene preguntas reales de melanoma y queratosis actínica, pero todas dependen de una foto ("se observa lo siguiente en la imagen") que no está disponible en el guion — no es un error de tema, es que la pregunta no se puede usar sin la imagen. Se usó "Caso representativo" del libro en ambas clases. |
| derma-16 | Búsqueda por "pitiriasis" en el banco real devuelve preguntas de pitiriasis rosada (Julio 2019 #121) y pitiriasis alba (Julio 2016 #82) — ninguna es pitiriasis versicolor, el tema real de esta clase. No se usaron. |

## Oftalmología

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| oftal-03, oftal-04 | Mismo patrón de código/tema mal asignado: `class_questions.cjs oftal-04` (código 6.02.1.006, queratitis herpética) devuelve una pregunta real que en realidad es de conjuntivitis bacteriana crónica/blefaritis (tema de oftal-03); a la inversa, el código de oftal-03 devuelve "EUNACOM Julio 2017 · Pregunta 163", cuyo contenido real (aciclovir para úlcera dendrítica) es el tema de oftal-04. Ninguna se usó en la clase equivocada. Esa misma pregunta #163 además depende de una foto ("se muestra en la siguiente foto: INSERTAR FOTO") sin hallazgos en el texto, así que tampoco es usable en oftal-04. |
| — (banco, no libro) | Preguntas del banco real con datos corruptos, no un problema de tema: "EUNACOM Diciembre 2022 · Pregunta 46" (glaucoma agudo) tiene una explicación incoherente con su propio enunciado; "EUNACOM Diciembre 2024 · Pregunta 114" (glaucoma crónico) da como respuesta correcta "Midriasis arrefléctica", que contradice el contenido de la clase, y su lista de alternativas trae un ítem con signo de interrogación ("Reflejo ?/"); "EUNACOM Julio 2025 · Pregunta 124" (código 1.02.1.015, diabetes) tiene enunciado informal/abreviado y explicación incoherente ("subir metformina??"); "EUNACOM Diciembre 2024 · Pregunta 1" (código 6.02.2.007) trae la justificación de la respuesta dentro del propio enunciado y a la alternativa A le falta texto mientras la letra C está duplicada. Ninguna se usó; anotado para que otros agentes no las reutilicen si vuelven a aparecer en una búsqueda. |
| oftal-10, oftal-11 | El banco real no tiene ninguna pregunta donde desprendimiento de retina u oclusión vascular retinal (OACR/OVCR) sea la respuesta correcta — solo aparecen como distractores descartados en preguntas de otro diagnóstico. Se usaron "Caso representativo" del libro en ambas clases. |

## Ginecología

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| gin-04 | El título del libro dice "Miomatosis Uterina y Adenomiosis", pero ninguna sección de contenido, tabla, viñeta ni pregunta de esta clase desarrolla adenomiosis — el tema completo está en gin-05 ("Endometriosis y Adenomiosis"). El guion agrega una tarjeta breve con la única frase descriptiva que sí trae el libro y remite a gin-05 para el resto, en vez de inventar criterios diagnósticos que el libro no da. |
| gin-05 | El título de esta clase es "Endometriosis y Adenomiosis", pero `contentSections` solo desarrolla endometriosis — la adenomiosis solo aparece en la tabla comparativa y en la explicación de una pregunta del propio libro. Se armó con eso una tarjeta completa (epidemiología, clínica, examen, ecografía, tratamiento), pero es contenido más delgado que el resto de la clase. |
| gin-08 | "EUNACOM Enero 2023 · Pregunta 44" (PAE a las 96 horas) marca correcta un esquema de levonorgestrel en dos tomas de 0,75 mg, que contradice el esquema único de 1,5 mg que indica el libro y el MINSAL actual. No se usó. |
| — (banco, no libro) | Durante la búsqueda por tema para gin-05..08 aparecieron 4 preguntas reales con la explicación pegada a un tema totalmente distinto (ginecología en el enunciado, pero la `explicacion` y/o alternativa correcta habla de amoxicilina, alprazolam/diazepam o plasmaféresis): "EUNACOM Diciembre 2024 · Pregunta 136", "Pregunta 112", "EUNACOM Diciembre 2022 · Pregunta 65" y "Pregunta 9". No pertenecen a ninguna clase de gin-05..08; no se usaron. |
| — (banco, no libro) | Dos más, encontradas en gin-09..12: "EUNACOM Diciembre 2025 · Pregunta 95" (EIP) tiene el enunciado y las alternativas con errores de OCR ("8vidad", "u8liza", "Pelviperitoni8s"); "EUNACOM Diciembre 2024 · Pregunta 9" (TRH) tiene alternativas incoherentes ("Resto opciones tenian estradiol", etiquetas sin sentido). Ninguna se usó. |
| — (banco, no libro) | Dos preguntas más del banco real con datos corruptos: "EUNACOM Diciembre 2025 · Pregunta 113" (amenorrea primaria/agenesia vaginal) tiene texto con errores de OCR ("Fsico", "8ene", "magné2ca", "an2concep2vos"); "EUNACOM Diciembre 2024 · Pregunta 124" (SUA) trae comentarios de reconstrucción metidos dentro de una alternativa ("(segun yo tmbn x4, obs pólipo endometrial)"). Ninguna se usó. |

## Salud Pública

### B · El libro se contradice (o discrepa del banco real)
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| sp-10 | Libro: el único indicador válido de efectividad de un tamizaje es la reducción de la **tasa de mortalidad**, nunca la sobrevida/letalidad. | "EUNACOM Julio 2017 · Pregunta 141" (banco real) da como respuesta correcta "disminución de la **letalidad**"; su propia explicación está autodudada ("C? El tamizaje no baja la incidencia..."). | El libro — no se usó esa pregunta; se usó "EUNACOM Agosto 2021 · Pregunta 6" (misma pregunta conceptual, responde "tasa de mortalidad", coincide con el libro). Queda para que un humano arbitre si el banco tiene ambos enfoques en años distintos. |

### C · Falta información en el libro
| Clase | Qué falta |
|---|---|
| — (banco, no libro) | "EUNACOM Enero 2023 · Pregunta 166" (estructura del sistema de salud) tiene una explicación genérica de tipo "cuadro clínico" que no corresponde a la pregunta (no es un caso clínico). "EUNACOM Diciembre 2017 · Pregunta 66" da como respuesta correcta que la Subsecretaría de Redes Asistenciales delega en la SEREMI, lo que contradice la estructura que trae el libro (SEREMI depende de la Subsecretaría de Salud Pública, no de la de Redes). "EUNACOM Diciembre 2018 · Pregunta 47" (diseños de estudios) está marcada por el propio banco como "[Pregunta disputada]" (enunciado ambiguo, sin un diseño correcto único). "EUNACOM Diciembre 2024 · Pregunta 75" (sesgos) trae un comentario de evaluador filtrado dentro del texto de la alternativa B. Ninguna de las cuatro se usó. |
| sp-11 | El código Perfil V3 de la clase (bioética clínica) solo tiene 2 preguntas reales en el banco y ninguna es del tema (Código Sanitario, imprudencia médica en pabellón). Búsquedas por tema (Jehová, rechazo de tratamiento, autonomía, doble efecto, comité de ética, sedación paliativa, voluntad anticipada) no encontraron ninguna pregunta real de bioética/consentimiento. Se usaron las 2 preguntas del libro como "Caso representativo". |
| sp-12, sp-14 | sp-12: no hay ninguna otra pregunta real sobre acceso/confidencialidad de la ficha clínica más allá de la única que usa la clase; el caso clínico (empleador pidiendo la ficha) sale de la viñeta del libro. sp-14: no existe pregunta real sobre "objeción de conciencia" (IVE); el caso clínico también sale de la viñeta del libro. |

### B · El libro se contradice (o discrepa del banco real)
| Clase | Parte 1 | Parte 2 | Qué usa el guion |
|---|---|---|---|
| sp-13 | Libro: la causa inmediata en el certificado de defunción debe ser la última enfermedad diagnosticable real antes de morir (no una descripción fisiológica). | "EUNACOM Diciembre 2022 · Pregunta 145" (TEP con insuficiencia respiratoria y colapso circulatorio) marca "Tromboembolismo pulmonar" como causa inmediata — inconsistente con ese criterio (debería ser la insuficiencia respiratoria o el colapso, con el TEP como causa intermedia), y su explicación en el banco es genérica. | No se usó; se usó "EUNACOM Enero 2023 · Pregunta 4" (limpia, consistente con el libro) en su lugar. Queda para que un humano revise si la Pregunta 145 es corrupta. |

## Pediatría

Nota: esta sección es de la reescritura por calidad (voz "tú" + largo en pantalla), no de una revisión de contenido médico —
las notas A/B/C que aparezcan acá son las que fueron surgiendo durante esa reescritura.

### C · Falta información en el libro / banco
| Clase | Qué falta |
|---|---|
| ped-17 | "EUNACOM Julio 2018 · Pregunta 176" da como correcta una respuesta que contradice el propio criterio del libro para colestasis (corte de 20% de bilirrubina directa; el caso de la pregunta lo supera y aun así la respuesta no la clasifica como colestasis). No se usó. |
| ped-18 | El banco real no tiene ninguna pregunta que sea genuinamente de membrana hialina (EMH) ni de síndrome aspirativo meconial (SAM) como diagnóstico — solo de TTRN. Se usó "Caso representativo" del libro para EMH. |
| ped-19 | "EUNACOM Julio 2025 · Pregunta 25" (sepsis neonatal) tiene una explicación que se contradice con su propia respuesta y menciona "PIP" sin relación con el enunciado — parece corrupta, no se usó. |

## Obstetricia

Nota: esta sección es de la reescritura por calidad (voz "tú" + largo en pantalla), no de una revisión de contenido médico.

### C · Falta información en el libro / banco
| Clase | Qué falta |
|---|---|
| — (banco, no libro) | "EUNACOM Diciembre 2024 · Pregunta 95" (código 3.01.3.001): el enunciado es de ácido fólico pero la explicación/respuesta correcta es "Interrupción del embarazo" — completamente descalzado. "EUNACOM Diciembre 2024 · Pregunta 17" (glucosuria) y "Pregunta 58" (movimientos fetales) tienen explicaciones con texto de plantilla genérico ("Según los consensos... Perfil V3 ASOFAMECh", una con "****" literal). "EUNACOM Diciembre 2025 · Pregunta 50" (translucencia nucal/hueso nasal) tiene errores de OCR ("Gene" por "tiene", "uGliza" por "utiliza"). Ninguna se usó. |
| — (banco, no libro) | Más encontradas en ob-05..08: "EUNACOM Diciembre 2018 · Pregunta 85" (colestasia) marca "Fosfatasas alcalinas" como examen de elección, contradiciendo al libro (ácidos biliares totales es el estándar de oro) y su propia explicación es inconsistente; "EUNACOM Diciembre 2024 · Pregunta 153" tiene el enunciado mezclado con un fragmento de otra pregunta (lupus/síndrome nefrótico); "EUNACOM Julio 2025 · Pregunta 23" (diabetes gestacional) usa el corte OMS/ADA (2h≥153) en vez del corte MINSAL que enseña el libro (2h≥140) — usarla enseñaría lo contrario de la clase; "EUNACOM Julio 2025 · Pregunta 28" reconoce en su propia explicación que la respuesta está "en discusión" entre HELLP e hígado graso agudo. Ninguna se usó. |
| ob-05 | El libro no menciona la aspirina profiláctica para prevenir preeclampsia recurrente; se incluyó igual porque es práctica estándar y hay una pregunta real del banco sobre el tema (Diciembre 2017 · Pregunta 155). |
| — (banco, no libro) | "EUNACOM Julio 2018 · Pregunta 61" (código 3.01.1.001, aborto): el enunciado está truncado/mezclado y su explicación habla de fracturas de fémur/pierna/tobillo, sin relación con el tema. No se usó. |
| — (banco, no libro) | Más encontradas en ob-17..20: "EUNACOM Diciembre 2024 · Pregunta 97" (código 3.01.1.009) tiene enunciado truncado y una explicación de plantilla sin relación con sus alternativas; "EUNACOM Diciembre 2024 · Pregunta 73" (código 3.01.2.020, mastitis/absceso) tiene letras de alternativa duplicadas y distractores de otro tema (psoriasis, dermatitis atópica). Ninguna se usó. |
| ob-17, ob-18, ob-20 | El código Perfil V3 propio de estas tres clases apunta en el banco real a un diagnóstico completamente distinto: ob-17 (distocia de hombros, código 3.01.1.008) devuelve preguntas de mola hidatiforme; ob-18 (hemorragia posparto, código 3.01.1.009) devuelve preguntas de macrosomía/vía de parto; ob-20 (aloinmunización Rh, código 3.01.1.012) devuelve preguntas de amenorrea. Se ignoraron esos resultados por código y se armó cada set buscando por tema (`--search`). Vale la pena que alguien revise si esos códigos están mal asignados en el dataset del libro. |
| ob-20 | El libro no menciona la variante D-u (weak D); se incluyó igual porque hay una pregunta real EUNACOM sobre el tema (Agosto 2021 · Pregunta 74) y es un hecho médicamente correcto, explicado solo dentro de esa pregunta. |

## Cirugía General

Nota: esta sección es de la reescritura por calidad (voz "tú" + largo en pantalla + preguntas reales), no de una revisión de contenido médico.

### C · Falta información en el libro / banco
| Clase | Qué falta |
|---|---|
| — (banco, no libro) | "EUNACOM Diciembre 2025 · Pregunta 110" (diverticulitis) tiene errores de OCR ("diagnós8co", "diver2culi2s"). No se usó. |
| — (banco, no libro) | "EUNACOM Diciembre 2025 · Pregunta 87" (perfil 4.01.2.024, hernias): las alternativas marcan correcta la D (cuerpo extraño), pero la explicación describe un hematoma inguinal posoperatorio (opción B) — inconsistente consigo misma. No se usó. |
| cirugia-15 | La cuarta pregunta propia del libro (LAST + modificación ACLS, dosis de adrenalina) no trae `correcta` ni `explicacion` en el dataset — dato incompleto. Se usaron las otras 3 preguntas del libro en su lugar. |
| — (banco, no libro) | "EUNACOM Julio 2017 · Pregunta 68" (seroma) y "EUNACOM Enero 2023 · Pregunta 77" (quemadura pediátrica) tienen la explicación completamente desligada del enunciado (texto de plantilla o de otro tema). "EUNACOM Julio 2016 · Pregunta 11" y "EUNACOM Diciembre 2018 · Pregunta 148" están autoetiquetadas por el banco como "capciosa"/"[Pregunta disputada]". Ninguna se usó. |

## Otorrinolaringología

**A · Posible error del libro**
- orl-03: los estadios de la otitis externa maligna (I local, II ósea, III base de cráneo) con mortalidad 15–20 % y 30–50 % no parecen una clasificación publicada estándar. Se usaron tal como los da el libro ("el libro propone"). Revisar.

**B · El libro se contradice / choca con el banco real**
- orl-02: EUNACOM Julio 2025 · P153 dice "perforación timpánica central con colesteatoma"; el libro define el colesteatoma como marginal o ático. Se siguió el libro; la respuesta (cirugía) coincide con ambos.
- orl-02: EUNACOM Julio 2025 · P35 (otorrea crónica serosa, perforación central → audiometría y derivación); el libro sugeriría aseo y ciprofloxacino ante otorrea activa. Se usó la clave del examen (escenario de oído seco con hipoacusia).
- orl-03: EUNACOM Julio 2019 · P46 (ciprofloxacino vs neomicina tópica): su propia explicación dice que ambas sirven con tímpano íntegro. Se siguió el libro y la clave (ciprofloxacino).

**C · Falta información en el libro**
- orl-03: el libro no trata otomicosis ni forunculosis, pero el banco real las pregunta (Julio 2024 · P157, Diciembre 2025 · P160). Se tomó de las explicaciones de las preguntas.
- orl-04: el libro no trata laberintitis aguda (Julio 2015 · P104, Julio 2013 · P84), petrositis, meningitis ni absceso cerebral por separado.
- orl-04: la sección 4 enumera "(1) antibióticos… (2) miringotomía…" sin "(3)": parece faltar una medida. El dataset repite el código 4.02.4.017 (otitis externa) en esta clase, posible error de copia.
- orl-04: sin dosis de clindamicina ni vancomicina; solo ceftriaxona 100 mg/kg/día.
- orl-05 (C): el libro da gap ≥ 15 dB para conductiva y < 10 dB para sensorioneural (10–15 dB sin definir); menciona "reflejo estapedial / reclutamiento" sin explicarlo; no trata emisiones otoacústicas ni potenciales evocados, que el banco real pregunta.
- orl-06 (B): el "contexto" dice iniciar corticoides en 7–14 días; los keyPoints dicen 48–72 h y el pronóstico, malo > 14 días. Se siguió contentSections/keyPoints (de inmediato), igual que el banco real (< 72 h).
- orl-06 (B): prednisona 1 mg/kg por 10–14 días (texto) vs "x 14 días" (tabla) vs "x 10 días" (banco real). Se usó 10–14 días.
- orl-06 (C): el libro no se pronuncia sobre antivirales (el banco usa aciclovir como distractor). Sin preguntas reales de presbiacusia, trauma acústico ni RM por neurinoma.
- orl-07 (A/B): el libro dice que la RM descarta lo central y que HINTS supera a la RM precoz; EUNACOM Diciembre 2025 · P29 marca TAC de cerebro (más rápido, ventana de trombólisis) en un vértigo central agudo. Se siguió el banco real en esa pregunta y se explicó en la voz.
- orl-07 (B): betahistina "16 a 24 mg cada 12 horas" (texto) vs "24 mg c/12 h" (tabla). Se usó 16–24 mg.
- orl-07 (C): el libro no trata la laberintitis aguda secundaria a otitis crónica o colesteatoma (Julio 2015 · P104, Julio 2013 · P84) ni difenidol/tietilperazina (distractores del banco).
- orl-08 (C): el libro no dice cuándo estudiar con imágenes o derivar un Bell que no mejora a los 3–4 meses, recurrente o progresivo, ni cuándo pedir glicemia. No hay preguntas reales de parálisis facial; se usaron 2 casos del libro.
- orl-09 (B): corticoide nasal de primera línea en formas moderadas-severas o persistentes, pero antihistamínicos en intermitente leve. EUNACOM Julio 2013 · P146 es de confianza baja (0,55) y mezcla "mucopurulenta" y "epistaxis" con un cuadro alérgico; se mantuvo porque su clave coincide con el libro.
- orl-09 (C): sin dosis de ipratropio nasal ni de antihistamínicos fuera de cetirizina y desloratadina; no menciona el escalonamiento ARIA (corticoide + antihistamínico).
- orl-10 (B): Chandler II "ceftriaxona EV" (tabla) vs "ceftriaxona EV + vancomicina" (texto) vs "+ clindamicina o vancomicina" (viñeta). Se siguió el texto. Chandler I: texto "oral o EV", tabla "amoxicilina-clavulánico oral o cefazolina EV en lactantes"; se usó oral, EV en lactantes.
- orl-10 (B): las explicaciones del banco (Enero 2023 · P14, Diciembre 2018 · P59) usan umbral de 7 días; el libro usa ≥ 10 días, doble empeoramiento o inicio grave. Se siguió el libro; las respuestas (amoxicilina) coinciden.
- orl-10 (C): sin duración de tratamiento en niños con sinusitis persistente ni dosis de ceftriaxona/clindamicina para complicaciones orbitarias.
- orl-10: preguntas descartadas: Julio 2016 · P143 (5 días con radiografía → amoxicilina; contradice el criterio del libro, y el banco lo admite) y Diciembre 2018 · P66 (marcada como disputada en el propio banco; su clave no calza con el cuadro).
- orl-11 (C): el banco real no tiene preguntas de manejo otorrino de epistaxis; se usaron 2 casos del libro. El libro no menciona el ácido tranexámico (aparece solo como distractor).
- orl-12 (C): el libro trata la poliposis con corticoide nasal más ciclos breves de prednisona; EUNACOM Diciembre 2019 · P58 (obstrucción completa) exige prednisona primero. Compatible, pero el libro no dice cuándo partir con prednisona.
- orl-13 (B): McIsaac: el texto dice 15–30 % con 2–3 puntos; la tabla da 10–17 % (2) y 25–35 % (3). Se siguió la tabla.
- orl-13 (B): el libro pone la penicilina benzatina como primera opción, pero en todas las preguntas reales de tratamiento la correcta es amoxicilina (Diciembre 2017 · P143, Agosto 2021 · P28, Diciembre 2025 · P107). Se enseñaron ambos esquemas y la voz avisa que en el banco la respuesta es amoxicilina.
- orl-13 (C): el libro no trae absceso periamigdalino (trismus, úvula desviada) ni escarlatina, que el banco pregunta. Diciembre 2025 · P107 trata un niño de 2 años con test positivo; el libro dice que en menores de 3 años el estreptococo es casi inexistente y no da conducta. No se usó.
- orl-14 (B): penicilina sódica "2 a 4 millones UI c/4 h" (texto) vs "4 millones c/4 h" (tabla). Se siguió el texto; la voz no da la cifra.
- orl-14 (B): el esquema del periamigdalino cambia: texto y tabla dan amoxicilina-clavulánico o penicilina + metronidazol; el diagrama agrega ceftriaxona + clindamicina. Se incluyeron las tres opciones.
- orl-14 (C): dosis de ceftriaxona y clindamicina solo en la tabla, no en el texto.
- orl-15 (C): el libro no cubre el manejo de la hipertrofia adenoidea sin SAHOS ni infecciones (observación o corticoide nasal), el estudio inicial con Rx de cavum y nasofibroscopía, ni la polisomnografía; el banco lo pregunta (Julio 2017 · P48, discutida; Diciembre 2025 · P23).
- orl-16 (C): el libro no cubre la disfonía matinal por reflujo con prueba terapéutica con IBP, que el banco pregunta (Diciembre 2018 · P65, Diciembre 2019 · P145).
- orl-17 (A): el libro dice que reducir 1 mm el diámetro subglótico del lactante baja el área 75 % y multiplica por 16 la resistencia: esas cifras corresponden a reducir el radio a la mitad, no 1 mm. La clase lo dice cualitativamente.
- orl-20 (A): el campo `ges` dice "Garantía GES Colecistectomía / Alivio del dolor por cáncer avanzado…": la colecistectomía no corresponde a cáncer de cabeza y cuello. No se usó.
- orl-17 (B): observación tras adrenalina "2 horas" (tablas, contexto) vs "mínimo estricto de 2 a 4 horas" (keyPoints, sección 3). Se usó 2–4 h. Dexametasona 0,6 mg/kg (viñeta) vs rango 0,15–0,6 mg/kg. Se dio el rango.
- orl-19 (B): la viñeta tiene un cálculo de 4 mm en Wharton y elige sialolitotomía transoral; la sección 1 dice que solo los > 5 mm van a cirugía. Se siguió la sección.
- orl-20 (B): la tabla dice PAAF si se sospecha linfoma en adulto joven; el banco real (Julio 2024 · P37, Diciembre 2025 · P102) dice biopsia excisional del ganglio. No se usaron esas preguntas; la clase enseña PAAF solo en el fumador > 40 años con sospecha de metástasis.
- orl-17 (C): sin signos radiológicos (signo de la aguja, signo del pulgar) ni score de croup aparte de Taussig.
- orl-18 (C): primeros auxilios del atoramiento del lactante (golpes en la espalda y compresiones torácicas < 1 año, Heimlich desde 1 año) no están en el libro; vienen de Julio 2013 · P35. Pila de botón ingerida en esófago mencionada pero sin manejo.
- orl-19 (C): no trata parotiditis viral (paperas) ni parotiditis recurrente juvenil, aunque las usa como distractores. No explica PAAF vs biopsia por punción.
- orl-20 (C): sin TNM ni modalidades de tratamiento; hipofaringe vs laringe en una sola línea, y el banco la pregunta.

## Traumatología

- trauma-02 (A): el libro da cefazolina + gentamicina para Gustilo II; la práctica actual (p. ej. ATLS) agrega cobertura gram negativa recién en grado III.
- trauma-03 (A): el manejo inicial "leve" del síndrome compartimental dice "elevar la extremidad"; elevar baja la perfusión y se desaconseja, y EUNACOM Julio 2024 · P4 marca "elevar la extremidad" como incorrecta. **La clase NO enseña elevar**: dice que es una trampa y que lo que resuelve es retirar el yeso (corregido por quien integra).
- trauma-02 (B): el texto usa gentamicina para grados II y III; las tres preguntas del libro usan amikacina. Se siguió el texto; la voz explica la equivalencia.
- trauma-03 (B): la pregunta del libro "yeso circular a las 4 h" responde fasciotomía amplia; el texto dice retirar el yeso primero y operar si no mejora. Se siguió el texto (igual que Julio 2024 · P4); no se usó esa pregunta.
- trauma-01 (C): el libro no da las fases de consolidación (hematoma, callo blando y duro, remodelación), aunque `frecuencia` dice que se preguntan.
- trauma-02: sin preguntas reales de fractura expuesta; se usaron 3 casos del libro. Clase de tier 3 con 1580 palabras: el texto del libro es corto y está todo cubierto.
- trauma-03 (C): el título promete "5P" y "presión intracompartimental", pero el texto no da las 5P completas ni umbrales en mmHg. Sin tratamiento de la distrofia simpático refleja. La sección "mano en garra / fractura supracondílea" no tiene título (se llamó Volkmann). TEP y embolia grasa parecen corresponder a trauma-04 o Neumología.

**⚠️ Libro de Traumatología desalineado (corregido el 2026-10-05).** Desde el tema 12.4, el texto de cada tema no correspondía a su título (los textos estaban corridos) y las preguntas del libro seguían a los títulos. Se retitularon 12.4 y 12.6–12.15 según su texto real, y se movieron las preguntas al tema que corresponden (`dataset_traumatologia.cjs` y `traumatologia_decks_data.json`). Se quitaron 2 preguntas de plantilla que hablaban de otros temas (ASIA, Ortolani). **Quedan sin texto en el libro:** trauma raquimedular (ASIA, shock neurogénico), lesiones de hombro/clavícula/miembro superior (luxación glenohumeral, escafoides, Monteggia), embolia grasa y osteomielitis postraumática. 12.11 y 12.15 se solapan (lumbago y hombro doloroso en ambos).

- trauma-04 (A): el libro desaconseja el torniquete; ATLS 10.ª ed. lo acepta en hemorragia de riesgo vital. La clase: compresión directa, torniquete si es exanguinante y no cede, ligadura como último recurso.
- trauma-05 (A): el libro lista el pantalón antichoque (en desuso; no se enseñó); solo menciona cristaloides (en hemorragia pelviana masiva se necesita sangre, Julio 2024 · P14); la "trilogía" con Rx lateral cervical sola no descarta lesión cervical (se agregó TC si hay sospecha y mantener el collar).
- trauma-06 (A): la pregunta 2 del libro da "cirugía para remover partes blandas" en la pseudoartrosis hipertrófica; incompleto: la cirugía debe dar estabilidad firme. La voz lo explica.
- trauma-05 (B): pide evaluar la estabilidad pélvica con compresión-distracción y a la vez evitar repetir la maniobra. Se enseñó una maniobra, sin repetirla. Las tablas genéricas (`table`, `severityTable`, `treatmentTable`) son de plantilla y no corresponden al tema; se ignoraron.
- trauma-04 (C): "Clasificación de Seddon" y "Disección de la arteria poplítea" solo tienen el encabezado. trauma-05 (C): no trae Tile / Young-Burgess, faja pélvica comercial, embolización ni packing preperitoneal. trauma-06 (C): sin tiempos que definan retardo y pseudoartrosis ni tratamiento detallado.
- trauma-08 (A): la explicación de una pregunta del libro dice que el LCA "siempre se opera artroscópicamente"; el texto dice quirúrgico "habitual en jóvenes o deportistas". Se siguió el texto.
- trauma-09 (A): el libro da "cirugía urgente" para la rotura del Aquiles; Bailey & Love (p. 550) dice que hoy el manejo agudo es más a menudo no quirúrgico si la ecografía muestra cierre del gap. La clase enseña derivar al traumatólogo. Decidir qué espera el examen.
- trauma-09 (A): la explicación de la pregunta del libro sobre esguince grado I dice que no hay equimosis (dudoso). Se usó tal cual.
- trauma-07/08/09 (B): los campos `reconstrucciones`, `ges`, `frecuencia`, `keyPoints` y tablas de plantilla siguen hablando de otros temas (hombro, Colles, escafoides, cadera GES); se ignoraron.
- trauma-07 (C): el libro solo nombra las reglas de Ottawa (faltan los 6 cm posteriores de los maléolos, el navicular, los cuatro pasos). Sin preguntas reales de fracturas de pierna o tobillo aparte de Julio 2024 · P7.
- trauma-08 (C): la sección de ligamentos colaterales está vacía; Lachman, McMurray y hemartros no están en el libro (vienen del banco real y de Bailey). Diciembre 2024 · P133 tiene el enunciado corrupto; Diciembre 2024 · P57 trae anotaciones del recopilador en las alternativas.
- trauma-09 (C): la tabla de grados de esguince está vacía (se armó con las explicaciones de las preguntas); sin tratamiento por grado salvo el III; sin preguntas reales de partes blandas.
- trauma-12 (A): metas de ácido úrico "< 6 mg/dL en mujeres y < 7 en hombres" son dudosas (lo usual es < 6 para todos); no se enseñaron. La crisis de gota dice "AINE endovenosos o colchicina"; se enseñó AINE, colchicina o corticoides. El banco es inconsistente: Julio 2024 · P34 marca prednisona, Diciembre 2018 · P30 marca diclofenaco.
- trauma-11 (A): el libro trata la capsulitis adhesiva con corticoides; Julio 2015 · P126 marca AINE + kinesioterapia (no se usó). El libro dice no hacer kinesioterapia en la fase aguda del lumbago; Julio 2025 · P95 dice "analgesia + kinesioterapia activa, no reposo en cama" (no se usó). La clase enseña reposo relativo, sin reposo en cama, actividad según tolerancia.
- trauma-10/12 (B): los keyPoints dicen que la cirugía de cadera en 24–48 h "es garantía GES", el campo `ges` dice "Sin garantía GES específica". Se enseñó la meta de 48 h sin mencionar GES. Posición de la fractura: "rotación externa" (texto) vs "abducción, rotación externa y acortamiento" (pregunta); se enseñaron ambas.
- trauma-10 (C): las secciones de examen clínico y de clasificación están vacías: sin Garden, sin tratamiento intertrocantéreo en el texto, sin tromboprofilaxis ni rehabilitación. Tornillo dinámico y tornillos canulados vienen de las explicaciones de las preguntas del libro.
- trauma-12 (C): análisis de líquido sinovial, clínica de la gota y artritis séptica son encabezados vacíos; se completaron solo con explicaciones del banco real y pies de figura de Harrison y Bailey.
- trauma-11 (C): sin dosis de AINE, infiltración ni epicondilera.
- trauma-13 (A): el libro llama al sarcoma de Ewing "de Yubin"; no se enseñó ese nombre.
- trauma-15 (A): capsulitis adhesiva con corticoides (libro, igual que trauma-11) vs Julio 2015 · P126 (AINE + kinesioterapia, movilización precoz). Se enseñó el libro y se descartó P126.
- trauma-14 (B): edad límite del arnés de Pavlik: libro < 10 meses, ped-22 < 6 meses, explicación del banco (Julio 2017 · P137) < 9 meses. La clase dice "lactante menor" y avisa que la fuente varía. Unificar con ped-22.
- trauma-14: Julio 2025 · P130 (Perthes) y P76 (pie bot, Ponseti) tienen baja confianza de código en el banco (0,25 y 0,28); los enunciados son del tema y las respuestas correctas, pero conviene confirmar que son reales.
- trauma-13 (C): sin condrosarcoma, metástasis óseas (la causa más común de tumor óseo maligno) ni triángulo de Codman. trauma-14 (C): sin sección propia de Perthes ni epifisiólisis; tratamiento de Perthes solo "reposo o cirugía"; sin datos de escoliosis. trauma-15 (C): faltan Neer, Hawkins, Jobe, Spurling, cauda equina, la lista de signos de alarma del lumbago y fibromialgia.

## Urología

- uro-03 (A): el libro dice "GES N° 10" para HPB; ese número parece corresponder a otra patología. La clase dice solo "tiene garantía GES". Verificar.
- uro-01 (A): tamsulosina como terapia expulsiva para cálculos de 5–10 mm (libro y Julio 2024 · P150); la evidencia reciente es discutida. Decidir si se mantiene.
- Banco (A): Diciembre 2022 · P11 tiene la clave en Campylobacter jejuni para estruvita coraliforme (es Proteus) — descartada. Diciembre 2022 · P66 (ecografía pélvica) y Enero 2023 · P142 (uretrografía retrógrada) tienen el mismo escenario con claves distintas — P66 descartada. Julio 2013 · P104 marca RTUP sin indicación absoluta — descartada.
- uro-03 (B, menor): tamsulosina "en 48 h" (contexto) vs "48–72 h" (sección y tabla); se usó 48–72. Terapia combinada "precoz" con IPSS 20–35 vs "preferir si la próstata > 40 cc"; se enseñaron ambas.
- uro-01 (C): sin estudio metabólico tras el primer episodio, sin relación litiasis recurrente–hiperparatiroidismo (Julio 2019 · P175, Diciembre 2017 · P33), sin pH ni hipercalciuria (Julio 2015 · P49).
- uro-02 (C): sin volumen de residuo ni cuándo retirar la sonda tras la retención; sin número de intentos de sondaje antes de la cistostomía.
- uro-03 (C): sin residuo postmiccional como indicación relativa (el banco usa 150 mL) ni valores de APE para biopsia (> 4 o velocidad > 0,75 según el banco).
- uro-06 (A): la tabla da ceftriaxona + ciprofloxacino para hombres que tienen sexo con hombres; la propia explicación del libro dice que el ciprofloxacino no cubre bien Chlamydia. No se enseñó ese esquema; la clase dice cubrir gérmenes entéricos y de transmisión sexual.
- uro-05 (A): el campo `ges` dice "Garantía de Urgencia Quirúrgica en sospecha de Torsión Testicular"; no se pudo verificar esa garantía GES y no se enseñó. La clase agrega que la detorsión manual es solo un puente y nunca retrasa la cirugía.
- uro-04 (B): residuo postmiccional patológico > 100–200 mL (texto), > 200–400 (tabla), > 300–500 (viñeta), > 200 (keyPoints). Se enseñó > 200 mL y normal < 50 mL.
- uro-06 (B): la tabla dice "coito anal receptivo" y los keyPoints "insertivo" para HSH; la clase no nombra la posición.
- uro-04 (C): no menciona la contraindicación de tricíclicos en el adulto mayor, la preferencia por tolterodina o trospio, ni el riesgo de demencia de los anticolinérgicos; tampoco el cateterismo limpio intermitente. Se tomaron del banco real. Julio 2015 · P48 se repite en uro-04 y neuro-24 (única pregunta real de rebalse).
- uro-05 (C): sin edad explícita del pico neonatal ni corte de edad hidátide vs torsión. uro-06 (C): sin dosis de ceftriaxona para HSH fuera de la tabla.
- Banco: varias explicaciones de códigos de urología traen texto ajeno (p. ej. vejiga neurogénica pegado a preguntas de leucemia).
- uro-08 (A): el libro tamiza con APE + tacto "desde los 50 años (45 con riesgo)" y "todo APE > 4 se biopsia", sin tope de edad. El banco real tamiza entre 50 y 70 años (desde 40 si hay antecedente familiar, BRCA o Lynch) y en el muy mayor responde observar (Diciembre 2022 · P82, Enero 2023 · P103). La clase enseña el tope de 70 años. Decidir si corregir el libro (y 45 vs 40 en riesgo alto). Julio 2017 · P41 descartada (APE a los 85 años; su explicación dice que es mala pregunta).
- uro-08 (A): "GES N° 19" para cáncer de próstata, número dudoso; la clase dice solo "tiene garantía GES" y los plazos del libro (biopsia 30 días, tratamiento 60, deprivación 30).
- uro-09 (B): secuelas de prostatectomía: disfunción eréctil 30–80 % e incontinencia 5–15 % (texto) vs 30–70 % y 5–10 % (tabla); se siguió el texto. Un keyPoint dice "bajo riesgo con expectativa de vida limitada: vigilancia activa"; lo correcto ahí es observación. La clase enseña vigilancia activa en bajo riesgo y observación en el adulto mayor con tumor mínimo.
- uro-07 (C): sin tamaño que distinga quiste de epidídimo de espermatocele (el banco dice > 2 cm); sin manejo del varicocele adolescente con atrofia.
- uro-09 (C): sin duración de la deprivación en riesgo intermedio fuera de la tabla, ni manejo de compresión medular por metástasis (esa pregunta real ya está en hem-22).
- uro-10 (A): el libro dice que el clampeo precoz del cordón evita la diseminación hematógena; lo que sustenta la vía inguinal es el drenaje linfático. La clase enseña la razón linfática.
- Banco (A): Julio 2024 · P122 (autoexamen como mejor estrategia; usada en sp-10) contradice Diciembre 2025 · P124 (el autoexamen no tiene evidencia).
- uro-11 (A): nefrectomía parcial en T1 ≤ 4 cm "idealmente hasta 7 cm" (libro) vs < 7 cm (Julio 2015 · P46, "antes era 4"). La clase: T1 hasta 7 cm, parcial si es posible.
- uro-11 (B): células claras 80–85 % (texto) vs 75–80 % (tabla); se dijo "alrededor de 80 %".
- uro-10 (C): sin corte de alto riesgo IGCCCG ni criterios de vigilancia en estadio I. uro-11 (C): no dice cuándo sí biopsiar una masa renal. uro-12 (C): sin criterios de alto riesgo, seguimiento cistoscópico ni dosis de BCG (solo "6 semanas y mantención 1–3 años").
- uro-13 (A): la explicación del caso dice "suspender el tacto rectal" y el enunciado habla de tacto suave. La clase: tacto suave y breve permitido; masaje y palpación enérgica contraindicados. uro-13 (B): antibiótico 2–4 vs 3–4 semanas; se usó 3–4. (C): sin advertencias de seguridad de las fluoroquinolonas.
- uro-14 (B): llama "Bosniak I" a un quiste definido por ecografía, pero Bosniak es por TC. (C): sin manejo de la poliquistosis más allá de la presión (tolvaptán, tamizaje familiar) ni Bosniak 2019. Sin preguntas reales de quistes ni poliquistosis.
- uro-15 (C): las reconstrucciones que cita el libro (Julio 2016 Q#10, Diciembre 2019 Q#58) no existen en el banco real. No dice que el uro-TC es el examen de la hematuria (vs pielo-TC del cólico; lo dice el banco en Julio 2016 · P33). Julio 2017 · P50 (IgA con 9 % de dismorfia) contradice el corte de 80 % del libro; no se usó.

## Psiquiatría

- psiq-03 (A): el libro llama a SAD PERSONS "la herramienta más validada internacionalmente" (validez predictiva limitada); la clase la presenta como orientación que no reemplaza el juicio clínico. "Más del 75 %" de los suicidios con señales previas no es verificable; la voz dice "la mayoría".
- psiq-02 (A): "episodio mixto" ya no existe en DSM-5 (solo "con características mixtas"); se omitió de la tabla. El libro dice que el litio es el "único" estabilizador antisuicida; psiq-03 dice litio y clozapina; se enseñó litio en ánimo y clozapina en esquizofrenia. Julio 2015 · P72 marca haloperidol como lo primero en la manía agitada; el libro pone atípico + estabilizador; se siguió el libro (no se usó P72).
- Banco (A): Diciembre 2022 · P94 marca "SIADH" para poliuria de 12 L con litio (es diabetes insípida nefrogénica); Diciembre 2024 · P35 con alternativas desordenadas; Julio 2018 · P166 con texto de interfaz en el enunciado. No se usaron.
- psiq-02 (B): litemia de mantención 0,6–1,0 (texto) vs 0,6–0,8 (tabla); se usó 0,6–1,0. psiq-03 (B): SAD PERSONS en 3 niveles (texto) vs 5 (tabla) vs "9/10" (viñeta); se usó la tabla. Las "reconstrucciones" de psiq-03 copian las de psiq-01, y psiq-02 dice "sin preguntas 2013–2025" aunque el banco tiene varias.
- psiq-01 (C): sin puntos de corte de Hamilton; sin manejo de la depresión perinatal con riesgo de autodaño; sin síndrome serotoninérgico ni de discontinuación (el banco los pregunta). psiq-02 (C): sin litio y embarazo; hipotiroidismo y QT del litio sin detalle.
- psiq-04 (A): el libro dice "TEC es el tratamiento de elección" en la psicosis puerperal junto a antipsicótico + estabilizador; la clase enseña hospitalización urgente, antipsicótico + estabilizador y TEC como opción rápida en casos graves o sin respuesta. Confirmar. "> 70 % de las psicosis puerperales son bipolares no diagnosticados" se suavizó a "muchas veces". En Julio 2025 · P99 (pensamientos de hacerse daño → sertralina) la voz agrega evaluar primero el riesgo suicida.
- psiq-05 (A): el libro permite benzodiacepinas 1–2 semanas en el adaptativo con insomnio grave; el banco responde solo psicoterapia. La clase: evitarlas, solo 1–2 semanas si el insomnio incapacita.
- psiq-06 (A): el libro elige clonazepam como primer fármaco en la crisis; el banco (Julio 2013 · P67, Julio 2015 · P83) responde lorazepam sublingual. Se siguió el banco.
- psiq-04 (B): el ítem 10 de la EPDS (ideación suicida) no se evalúa en la viñeta ni en las preguntas del libro; la clase enseña evaluación del riesgo en el día. psiq-05 (B): distimia "subumbral a TDM" (tabla) vs depresión doble (texto). psiq-06 (B): puente de benzodiacepina 2–4 (texto) vs 3–4 semanas (tabla); la tabla repite "Saturación O2 y Hemoglucotest" en una fila mal rotulada.
- psiq-04 (C): sin depresión antenatal, factores de riesgo, tamizaje de bipolaridad antes del antidepresivo, litio/valproato en lactancia ni paroxetina en el embarazo. psiq-05 (C): sin diferencia con trastorno de estrés agudo (Julio 2025 · P155 no se usó). psiq-06 (C): sin la duración DSM-5 de 6 meses para agorafobia ni pánico en el embarazo.
- psiq-09 (A): Diciembre 2022 · P28 (asalto hace 2 semanas, síntomas de 10 días) tiene clave TEPT, contra el corte de 1 mes del libro y de Enero 2023 · P132; no se usó. La prazosina aparece como "muy eficaz" para las pesadillas (evidencia variable, sin pregunta real); se enseñó como asociación para pesadillas persistentes con dosis baja inicial. El campo GES cita la Ley 21.057 (entrevistas a menores víctimas), no un GES de TEPT; no se enseñó.
- psiq-08 (A): la explicación de Julio 2019 · P13 dice "también benzodiacepinas en dosis bajas"; no se enseñó (no tratan el TOC). psiq-07 (A): Diciembre 2024 · P156 tiene enunciado de fobia social y clave TAG; descartada.
- Seguridad aplicada en psiq-07..09: sin benzodiacepinas de mantención, sin debriefing obligatorio como prevención; propranolol solo como rescate puntual; ISRS de primera línea.
- psiq-07 (B): sertralina 50–150 mg (texto) vs 50–100 mg (explicación). (C): sin contraindicaciones del propranolol (asma, bradicardia; se agregaron en la voz). psiq-08 (C): sin conducta ante la ideación de muerte de Agosto 2021 · P11 (se agregó evaluar el riesgo suicida). psiq-09 (C): no trata el trastorno adaptativo (distractor de Julio 2025 · P155); sin preguntas de prazosina ni EMDR.
- Banco (A): Diciembre 2022 · P78 (flufenazina de depósito, fiebre 38,7, rigidez, obnubilación) tiene clave "distonía aguda"; el cuadro es un SNM. Diciembre 2017 · P110 y Diciembre 2019 · P95 son la misma viñeta con claves distintas (esquizofrenia vs esquizoafectivo). Diciembre 2022 · P83 tiene clave "depresión con síntomas psicóticos" que no calza con el enunciado. Todas descartadas.
- psiq-10 (A): distonía aguda: el libro da biperideno; Diciembre 2019 · P8 da lorazepam (sin biperideno entre las opciones). La clase: biperideno primero, benzodiacepina como alternativa. Confirmar. Discinesia tardía: "rotar a clozapina" (valbenazina solo en la tabla).
- psiq-11 (A): cortes de RAN más estrictos que la práctica actual (suspender con 1.000–1.499; iniciar con ≥ 2.000 vs ≥ 1.500 de FDA; reexposición prohibida de por vida tras < 1.000). Se enseñó el libro y la norma MINSAL, y se agregó tratar la neutropenia febril sin demora. Un médico debe validar los cortes. Sin preguntas reales de clozapina.
- psiq-12 (A): la tabla dice "crónico refractario a psicofármacos" y el texto indica atípicos; se enseñó "respuesta variable".
- psiq-12 (B): la explicación de Diciembre 2025 · P71 pide delirio > 3 meses; libro y DSM-5 piden ≥ 1 mes. Se siguió el libro. Julio 2017 · P69 (84 años, 4 semanas) descartada. psiq-10 (B): Diciembre 2017 · P113 (marihuana en adolescentes) tiene clave "menor motivación escolar"; el libro dice que el cannabis multiplica 2–4 veces el riesgo de esquizofrenia; no se usó.
- psiq-11 (C): sin dosis de inicio ni titulación de clozapina; sin interacción con mielosupresores (carbamazepina); la viñeta dice "la paciente" describiendo a un hombre. psiq-10 (C): sin antipsicóticos de depósito; sin preguntas reales de GES, síndrome metabólico ni duración de la mantención. psiq-12 (C): sin preguntas reales de psicosis breve ni esquizofreniforme.
- psiq-13 (B): el libro dice «sin preguntas en exámenes 2013-2025» pero el banco trae tres de SNM (Julio 2016 · P141, Enero 2023 · P109, más Diciembre 2022 · P78 ya anotada). Julio 2016 · P141 tiene CPK 1.200, bajo el «habitualmente > 1.000, a menudo > 10.000»: se enseñó que basta sobre 1.000 en contexto. (C): sin criterios diagnósticos formales, sin benzodiacepinas ni TEC en los casos refractarios; Diciembre 2019 · P9 (clave serotoninérgico sin hiperreflexia ni clonus) no se usó.
- psiq-14 (B): orden de la contención: el texto pone la sujeción mecánica como último recurso tras fracasar lo verbal y lo farmacológico, pero la viñeta y la fila RASS +4 la combinan con fármacos IM; se enseñó sujeción transitoria con equipo para poder administrar el IM. (A) Banco: Diciembre 2022 · P30 (solo agresión verbal) tiene clave «contención física», contra el escalamiento del libro y Enero 2023 · P130; Diciembre 2025 · P24 tiene clave haloperidol pero la explicación defiende risperidona; Julio 2013 · P130 pide haloperidol EV (el libro da VO o IM). No se usaron. (C): sin dosis para el anciano de olanzapina VO ni de risperidona, ni manejo de la agitación en Alzheimer o Parkinson (Lewy).
- psiq-15 (B): mortalidad del delirium tremens «hasta 5 %» (contexto) vs «5 a 15 % sin tratamiento» (texto y puntos clave): se dijo hasta quince por ciento sin tratamiento. Tiamina: 500 mg c/8 h por 2-3 días (texto, Wernicke) vs 100-300 mg/día (tabla y viñeta, profilaxis) y 100-250 mg (texto): se enseñó cada dosis según su indicación. CIWA-Ar «≥ 20 severa» (texto) vs «20-30 severa y > 30 o DT» (tabla): se usó la tabla. (A) AUDIT: «> 16» deja el 16 sin categoría; la OMS usa 8-15, 16-19 y ≥ 20 para dependencia probable. Banco: Diciembre 2022 · P148 (clave tiamina para delirium tremens, con explicación de demencia) y Diciembre 2024 · P22 (Wernicke con alternativas D y E de otra pregunta) descartadas. (C): sin fenobarbital ni gabapentina, sin cuándo derivar a UPC con criterios distintos del CIWA, sin deshabituación en hepatopatía avanzada.
- psiq-16 (A): el libro enseña la contraindicación de los betabloqueadores en la cocaína como absoluta; algunas guías aceptan labetalol o carvedilol en casos seleccionados. Se enseñó el libro y el banco (Agosto 2021 · P44). (B): la tabla de toxíndromes no incluye el colinérgico ni el serotoninérgico, que el banco sí pregunta; el anticolinérgico no trae antídoto en el libro (se enseñó solo soporte). (C): sin pasta base (psicosis, manejo de la abstinencia), sin éxtasis más allá de una línea, sin síndrome serotoninérgico. Banco: Diciembre 2024 · P43 (una línea) y Julio 2025 · P139 (cocaína más carbamazepina) no usadas.
- psiq-17 (C): sin criterios de duración o de diagnóstico formal de los 10 trastornos, sin tratamiento del paranoide, esquizoide, evitativo ni obsesivo de la personalidad, y sin mencionar otras psicoterapias del límite. Banco (A): Diciembre 2024 · P143 con las alternativas A y B fusionadas con un comentario del autor.
- psiq-18 (B): hospitalización por anorexia: «PAS < 80» (texto) vs «hipotensión < 80/50» (puntos clave). Trastorno por atracones: «TCC con ISRS de apoyo» (texto) vs «lisdexanfetamina o topiramato» (tabla); se citaron ambos. (C): sin manejo ambulatorio de la anorexia (terapia basada en la familia, criterios de alta), sin dosis de metilfenidato ni alternativas (atomoxetina), sin pruebas para la discapacidad intelectual ni manejo del TEA en el adolescente. Sin preguntas reales de enuresis infantil, discapacidad intelectual, ansiedad por separación, pica ni realimentación; Julio 2016 · P78 (ausencias) y Diciembre 2025 · P7 (enuresis a los 95 años) son de otras clases.
- psiq-19 (C): sin criterios CIE-10 del insomnio no orgánico, sin detalle de la Ley 20.584 ni de la capacidad de consentir en menores, sin conducta ante la sospecha de simulación en una licencia médica. Sin preguntas reales de clasificaciones ni de forense: se usaron dos «Pregunta de práctica» del libro. Banco: Diciembre 2024 · P85 (enunciado de facticio con alternativas de exámenes) y Julio 2015 · P108 (insomnio del anciano; el propio banco la llama mala) no usadas.
- psiq-20 (C): el libro recomienda dapoxetina y no dice si está comercializada en Chile; sin tratamiento del deseo hipoactivo femenino ni de la disforia en niños prepúberes; sin conducta ante una orientación que genera angustia. Sin preguntas reales de parafilias, disforia ni orientación: se usaron tres «Pregunta de práctica» del libro. Banco (A): Diciembre 2024 · P107 (sildenafil con alternativas que son un comentario del autor) descartada.

## Revisión de preguntas por código V3 (oct 2026)

Notas de los agentes que agregaron preguntas reales y de práctica para cubrir cada código Perfil V3. Las preguntas nuevas están en `books/dist/Preguntas_de_Practica_Perfil_V3.pdf` (respaldo) y en `books/data/preguntas_practica_v3.json`.

### B2 (oftal-14..uro-15)
- uro-08 diap. 16: plazo GES de 30 días para confirmar cáncer de próstata con biopsia; el agente recuerda 60 días. Revisar decreto GES vigente.
- trauma-10 diap. 12: cirugía de Girdlestone como «más adecuada» en paciente postrado de 88 años con fractura de cuello femoral desplazada es discutible (procedimiento de rescate; muchos optarían por hemiartroplastía o manejo paliativo).
- trauma-02 diap. 9: herida por bala de baja velocidad de 1 cm clasificada grado III con cefazolina + gentamicina + clindamicina; suele tratarse como grado I–II y el tercer antibiótico es discutible.
- uro-13 diap. 7: prostatitis aguda con calofríos y 39,3 °C tratada ambulatoria con ciprofloxacino oral; muchas guías hospitalizan con antibiótico EV si hay compromiso sistémico.
### D2 (ob-05..sp-14)
- ped-05 diap. 11: según el score de Tal MINSAL, la retracción solo subcostal suma 1 punto → total 5 (leve), no 6 (moderado); la respuesta «hospitalización abreviada» podría estar mal.
- ob-16 diap. 9: dice iniciar oxitocina «con Bishop mayor a 6»; la formulación habitual es Bishop ≥ 7.
- sp-14 diap. 7: rotura uterina espontánea a las 16 semanas como «Causal 1 IVE» es inusual (el punto que enseña sobre objeción de conciencia es correcto).
- ped-04 diap. 9: dosis e inicio de hierro en prematuro de 33 semanas: verificar con norma MINSAL vigente (32–36 semanas).
- Banco real: Dic 2022 P31 (Posta de Salud Rural como nivel secundario) y Dic 2022 P64 (mastitis abscedada → «suspender lactancia») tienen la clave equivocada; no se usaron.
### A2 (gin-07..reuma-24)
- reuma-07 a reuma-24: varias diapositivas dicen «Pregunta real EUNACOM» con títulos sin mes («EUNACOM 2017 · Pregunta 21») o «EUNACOM · <tema>»; no están en el banco real y podrían ser inventadas. Revisar procedencia.
- reuma-08 diap. 13: presenta ANA ≥ 1:80 como lo que «confirma» el lupus; el ANA es criterio de entrada, lo específico es anti-DNA / anti-Sm.
- reuma-22 diap. 15: plasmaféresis de rescate en GPA con hemorragia alveolar; PEXIVAS no mostró beneficio claro, es discutible.
- reuma-22 diap. 16: el caso de Schönlein-Henoch dice «erupción cutánea purulenta violácea»; debería ser púrpura palpable.
- reuma-23 diap. 11: corticoides y opioides potentes «FORMALMENTE CONTRAINDICADOS» en fibromialgia; más preciso «no recomendados».
- gin-09 (real Jul 2024 P69 agregada): VDRL no reactivo con treponémica reactiva = «sífilis tratada» asume tratamiento previo documentado que el enunciado no menciona.
- orl-17 (real Dic 2024 P86 agregada): «control sano habitual» solo vale en laringomalacia leve sin signos de alarma; la explicación lo aclara.
### C2 (infecto-23..resp-24)
- resp-14: enseña descompresión con aguja en 2.º espacio intercostal línea medioclavicular como primera opción; ATLS 10.ª edición prefiere 4.º–5.º espacio línea axilar media/anterior en adultos.
- resp-13 diap. 10: neumotórax secundario de 1,5 cm («pequeño») con respuesta de tubo pleural; se justifica por síntomas y EPOC, pero la viñeta debería decirlo.
- Preguntas casi duplicadas dentro de la misma clase: nefro-04 #7/#9 (síndrome hepatorrenal), resp-22 #9/#10 (SDRA grave), nefro-22 #7/#9 (ajuste de metformina), resp-20 #11/#12 (decúbito en hemoptisis masiva).
- resp-04: la única pregunta real para tabaquismo (Jul 2015 P142, solo terapia conductual en fumador leve) es discutible; se escribió una nueva.
### B1 (cirugia-01..oftal-13)
- oftal-13 diap. 7: llama «urgencia» (no emergencia) a una retinopatía grado III de Keith-Wagener-Barker con PA 190/115; ESH 2018 considera grado III–IV como hipertensión maligna = emergencia.
- oftal-12 diap. 10: cita «GES número veintitrés» para tamizaje de retinopatía diabética; el agente cree que es el problema GES 31. Verificar.
- Banco real: Julio 2016 P11 marca «infección urinaria» como respuesta aunque su explicación argumenta atelectasia/TEP; Julio 2025 P31 dice operar catarata congénita «antes de las 10 semanas» en un lactante de 7 meses. No usar sin revisar.
- cirugia-02 (Ago 2021 P125) y derma-12 (Jul 2017 P86): preguntas reales que dependían de una imagen; se reemplazó la imagen por una descripción escrita del hallazgo.
### C1 (gastro-01..infecto-22)
- gastro-09 diap. 12: «Linfoma T asociado a enteropatía (linfoma MALT)» es incorrecto (EATL es de células T, MALT de células B); además, la causa más frecuente de celíaco que no mejora es la transgresión al gluten aun con anticuerpos negativos.
- gastro-18 diap. 15: Ringer lactato «agresivo» contradice WATERFALL 2022 (fluidos moderados guiados por objetivos en pancreatitis aguda).
- gastro-15 diap. 17: en várices medianas la ligadura es alternativa aceptada al betabloqueo en profilaxis primaria; la explicación lo presenta como única opción.
- infecto-18 diap. 12: espondilitis/sacroileítis brucelar: guías prefieren doxiciclina + aminoglucósido (o rifampicina) ≥ 12 semanas; 6 semanas de doxi + rifampicina es para enfermedad no complicada.
- infecto-05 diap. 12: profilaxis post-exposición VIH «28 días a 6 semanas»; el estándar es 28 días.
- infecto-19 diap. 10: el ántrax no se transmite de persona a persona; bastan precauciones estándar.
- gastro-04 diap. 15 (gastritis / erradicación de H. pylori) quedó etiquetada como perforación esofágica (4.01.2.019): esa etiqueta es errónea y perforación esofágica queda sin pregunta propia.
### D1 (hem-01..ob-04)
- hem-05: el caso de metimazol se explica como «aplasia medular medicamentosa»; el metimazol suele causar agranulocitosis, la aplasia verdadera es rara.
- Banco real: muchas explicaciones del banco no corresponden a su pregunta (texto de TEC en una de convulsiones, de hematuria en una de caídas); en las 17 reales agregadas se reescribieron desde el contenido clínico.
- Banco real con errores corregidos al usarlas: Dic 2025 P21 (CHCM en «pg» → g/dL), Jul 2017 P28 («plaquetas 2.5000» → 250.000), Dic 2024 P63 (seis alternativas, se dejó en cinco), Dic 2018 P90 (ciclos irregulares con «FUR segura», contradicción del original).
### A1 (diab-01..gin-06)
- diab-02: enseña HbA1c ≥ 6,5 % como criterio diagnóstico; la guía MINSAL no la incluye (el banco también lo señala). Agregar el matiz.
- diab-24 vs pregunta real Jul 2024 P77: para triglicéridos > 1.000 el examen respondió «dieta estricta» y la clase enseña fibrato de inmediato. Considerar mencionar la respuesta del examen.
- diab-05 y diab-23: no dicen que MINSAL clasifica la diabetes directamente como riesgo cardiovascular alto (la pregunta nueva de diab-05 se apoya en eso).
- diab-03 diap. 10: diagnóstico con dos glicemias de ayuno 100–125 a las 10 semanas (corte MINSAL actual); la pregunta real antigua Jul 2013 P60 usaba 105. Mencionar el cambio de corte.
- Banco real corrupto (opciones y explicación no corresponden al enunciado): Dic 2024 P101 (cetoacidosis), Dic 2024 P145 (hipertiroidismo), Jul 2025 P124 (retinopatía). Dic 2018 P106 (HbA1c) está marcada como discutida en el propio banco.

### E5 (códigos sin clase: Psiquiatría, Salud Pública, Obstetricia/Ginecología)
- Banco real con clave discutible o errónea (no usadas): Dic 2018 P78 (repetir PAP a los 22 años), Dic 2024 P38 (alternativas rotas), Dic 2017 P113 (cannabis: «baja motivación escolar»), Jul 2016 P125 (fumador que no quiere dejar: «tratar la ansiedad»), Dic 2022 P20 (fórmula de mortalidad neonatal marcada como perinatal), Dic 2022 P122 (contradice a Dic 2017 P69), Dic 2018 P33 (solo condón en mujer VIH con carga indetectable), Jul 2019 P54 (coagulación de rutina tras muerte fetal de un gemelo), Dic 2022 P68 (esperar 28 días para amamantar con COVID).
- Jul 2025 P53: 200 mg/día de hierro elemental está en el límite alto; MINSAL suele usar rangos menores.
- Nueva 3.01.1.031: asume que la norma chilena aún contraindica la lactancia en madre con VIH aun con carga viral indetectable. Confirmar vigencia.
- Nueva 7.01.3.053 (GES agresión sexual): no se fijó ventana exacta de elegibilidad; verificar el decreto.
- psiq-13 a psiq-18 no tienen guion de clase todavía: sus preguntas quedaron en el banco.
### E2 (códigos sin clase: Cirugía)
- Banco real con clave errónea (no usadas): Dic 2018 P178 (biopsia estereotáxica en nódulo BI-RADS 4 palpable), Dic 2017 P124 (sutura intradérmica en herida contusa de ceja en niño), Dic 2025 P87 («cuerpo extraño» tras hernioplastía; es hematoma), Dic 2022 P25 (enema baritado en sospecha de apendicitis/diverticulitis).
- 4.01.3.013: «el cáncer gástrico es la primera causa de muerte por cáncer en hombres chilenos»: verificar con DEIS actual.
- 4.01.4.014: pCO2 26 en el borde superior del rango de Winter (23 ± 2) calificada como compensación adecuada: discutible.
### E1 (códigos sin clase: Pediatría)
- Banco real con clave errónea (no usadas): Dic 2022 P53 (VIH en caso de Bartonella), Dic 2022 P85 (leucemia en déficit de B12 por madre vegana), Dic 2022 P77 (hepatoblastoma en masa de flanco con hematuria = Wilms), Dic 2025 P165 (cintigrafía de Meckel en invaginación), Dic 2022 P79 (soplo funcional en CIV con insuficiencia cardíaca), Jul 2025 P25 (sepsis en encefalopatía hipóxico-isquémica), Dic 2018 P40 (AINE vs tricíclicos, contradice su explicación). Varias con alternativas rotas (Dic 2024 P5, P15, P26, P29, P65).
- Dic 2018 P115: Hb 9 con Hto 36 % es incoherente; se corrigió el hematocrito a 28 %.
- Dic 2022 P136: candidiasis oral recurrente sugiere defecto celular, pero la clave oficial es humoral; se mantuvo.
- 2.01.1.088: la clave «cariotipo» (testículos no palpables + pene de 2 cm) contrasta con «control en un mes» de la versión 2023 de la misma viñeta.
- 2.01.4.011: corte de urocultivo por sondeo varía entre 10.000 y 50.000 UFC/mL según la fuente.
- 2.01.3.015: edad GES de salud oral (6 años) y tasa de mortalidad infantil (~6 por 1.000): verificar con MINSAL vigente.
### E41 (códigos sin clase: Medicina interna 1)
- Banco real con clave errónea o discutible (no usadas): Dic 2024 P22 (alternativas de otra pregunta), Dic 2022 P18 (cambiar sonda y urocultivo en bacteriuria asintomática con sonda), Dic 2022 P160 (antihistamínicos; sugiere asma), Jul 2016 P126 (control de histamina 0 mm invalida el test).
- Jul 2017 P4: 300 kcal ≈ 10 kcal/kg en realimentación; algunas guías parten con 5–10 kcal/kg (el propio banco la llama mala pregunta).
- Dic 2018 P123: endocarditis estreptocócica de válvula protésica: además de penicilina se suele agregar gentamicina.
- 1.04.1.009: la respuesta del banco 2013 (metronidazol para C. difficile) está desactualizada; hoy vancomicina oral o fidaxomicina.
- 1.05.4.011: en persona con VIH la terapia preventiva de TBC se indica independiente del PPD; la pregunta solo evalúa el corte ≥ 5 mm.
### E42 (códigos sin clase: Medicina interna 2)
- Preguntas reales reconstruidas (faltaba texto en el banco; revisar): Dic 2017 P57 (se agregó la alternativa D «Miastenia gravis» y la E pasó a ELA, la correcta; la imagen de espirometría se describió como patrón restrictivo), 1.06.4.014 (alternativa E completada: toxinas A y B de C. difficile), 1.09.3.011 (enunciado reescrito con niveles de tacrolimus normales).
- Banco real con clave discutible (no usadas): Dic 2019 P96 / Jul 2017 P73 (colangioRM vs eco vs CPRE), Jul 2024 P66/P67 (radioterapia de urgencia en síndrome de vena cava superior; hoy biopsia primero y stent), Dic 2025 P89 (paraneoplásico vs degeneración cerebelosa alcohólica), Dic 2022 P99 (intoxicación por CO con clave «TAC»), Jul 2025 P12 (quetiapina y risperidona a la vez).
- 1.07.2.004: risperidona en demencia es aceptable pero los antipsicóticos tienen advertencia de mortalidad.
- 1.07.3.012: lista de ayudas técnicas GES: verificar decreto vigente. 1.07.3.006: tipo de vacuna antineumocócica de adultos cambió recientemente.
- 1.09.3.002: meta LDL < 70 en alto riesgo según MINSAL 2018 (verificar). 1.09.4.007: momento del DMSA 4–6 meses vs 6 meses en la guía MINSAL.
- 1.08.3.007: la diapositiva no dice suspender tramadol al iniciar morfina.
### E3 (códigos sin clase: ORL, Derma, Oftalmo, Trauma, Urología)
- Banco real con clave errónea (no usadas): Dic 2018 P49 (papaverina intracavernosa como primera línea, desactualizado), Dic 2022 P114 (corticoide tópico en niño asintomático de 3 años), Jul 2018 P66 (enunciado roto, clave contradice el texto), Jul 2019 P108 (potenciales evocados en niño de 4 años), Dic 2022 P44 (lavado de oído en perforación timpánica traumática: contraindicado).
- Jul 2019 P74: nefrectomía con función diferencial de exactamente 10 % es un corte limítrofe; algunos intentarían pieloplastía.
- Ago 2021 P62 (priapismo): la clave es fenilefrina intracavernosa, pero la aspiración va primero y no está entre las opciones.
- Dic 2018 P60: aumento de volumen del canto medial con reflujo de secreción podría ser dacriocistitis o dacriocele; se mantuvo la clave (obstrucción lagrimal congénita).
- 6.01.2.002 (Ántrax): escrito como carbunco estafilocócico (uso habitual en dermatología chilena), distinto del Bacillus anthracis de infecto-19.
- 6.03.3.001: meta 1-3-6 del tamizaje auditivo neonatal: verificar redacción vigente del programa / GES.
- Corrección de datos: en el banco de preguntas reales, las de TEC (1.10.2.021→020), herpes zóster (6.01.2.009→007), loxocelismo (6.01.2.011→008) y necrólisis (6.01.2.013→009) estaban archivadas bajo códigos corridos; se movieron al código correcto.

## Claves dudosas del banco real (revisión de explicaciones, 18-oct-2026)
CORREGIDAS las 7 (aprobado por el usuario 18-oct): campo `correcta_original` guarda la anterior; también en neuro-07 (neurologia_decks_data.json) y atlas_392_enriched.json. Menos seguras: 1.10.1.014 (el comentario original dudaba entre A y C) y 5.01.1.036 (el comentario original decía TAG).

- 1.06.1.024 · EUNACOM Julio 2013 · Pregunta 89: marcada C (Adenoma). Posible clave dudosa: en un paciente de 55 años con esteatohepatitis, una lesión hipoecogénica sólida sugiere más hepatocarcinoma (B) que adenoma (típico de mujer joven con anticonceptivos).
- 1.03.1.021 · EUNACOM Diciembre 2019 · Pregunta 51: marcada E (Captación de yodo radiactivo). La clave marcada (captación de yodo) parece errónea: con TSH normal el examen de elección es la ecografía cervical (A).
- 2.01.1.121 · EUNACOM Julio 2018 · Pregunta 176: marcada A (Solicitar hemograma, grupo‐Rh y prueba de Coombs directo al ). La clave marcada (estudio de hemólisis) parece errónea: la bilirrubina directa elevada sugiere colestasis y corresponde solicitar pruebas hepáticas (C).
- 1.10.1.014 · EUNACOM Diciembre 2017 · Pregunta 58: marcada D (Síndrome de atrapamiento cubital). La clave marcada (atrapamiento cubital) es dudosa: el cuadro nocturno y bilateral en un diabético corresponde mejor a síndrome de túnel carpiano (C).
- 1.10.1.013 · EUNACOM Julio 2016 · Pregunta 94: marcada D (Paracetamol y AINEs). La clave marcada (paracetamol y AINEs) parece errónea: el tratamiento es con anticonvulsivantes, y la única opción de ese tipo es pregabalina (A).
- 4.01.3.005 · EUNACOM Julio 2016 · Pregunta 11: marcada A (Infección urinaria). Creo que la correcta es E (atelectasia): la hipoventilación basal y la fiebre precoz posoperatoria la sugieren; la infección urinaria no tiene respaldo en el cuadro.
- 5.01.1.036 · EUNACOM Diciembre 2025 · Pregunta 109: marcada B (Trastorno de ansiedad generalizada). Creo que la correcta es A (trastorno adaptativo): hay un estresante identificable y solo 2 meses de evolución, mientras el TAG exige al menos 6 meses.

## Tema nuevo uro-16 · Patología peneana (hueco Perfil V3, 18-oct-2026)
Escrito desde cero (libro y clase) con guías internacionales y estándar EUNACOM: no hay guía MINSAL/GES de estos cuatro códigos. Revisar:
- uro-16 (B, banco): fimosis asintomática con claves distintas según la edad: Diciembre 2022 · P114 (3 años → corticoide tópico; ya descartada en E3), Enero 2023 · P21 (3 años → control en un año) y Julio 2025 · P62 (5 años → observar, "normal hasta los 6-7 años"). El libro enseña: fisiológica sin síntomas se observa, sin edad de corte; corticoide si da síntomas. Decidir si se quiere una edad de corte para el corticoide.
- uro-16 (C, verificar cifras): betametasona 0,05 % por 4–8 semanas (éxito ~80 %); clotrimazol 1 % cada 12 h por 7–14 días; fluconazol 150 mg dosis única; cefadroxilo o amoxicilina-clavulánico en la balanopostitis infantil con celulitis; fenilefrina 200 µg cada 3–5 min hasta 1 mg en 1 h (EAU); gasometría isquémica PO2 < 30, PCO2 > 60, pH < 7,25; testosterona baja < 300 ng/dL; sin nitratos 24 h tras sildenafil y 48 h tras tadalafil.
- Banco (A): Diciembre 2018 · P32 marca atenolol como causa de disfunción eréctil, pero la hidroclorotiazida (alternativa C) también la causa — no usada. Julio 2018 · P66 (clave C, vaciamiento quirúrgico) confirma la nota de E3 — no usada.

## Endocrinología: códigos V3 completados en el libro (muestra, 18-oct-2026)
Párrafos nuevos escritos con guías internacionales (EUGOGO 2021, ESE 2023 de incidentaloma, Endocrine Society, ACR 2022 de corticoides) y estándar EUNACOM; no hay guía MINSAL/GES específica para estos códigos. Revisar:
- 7.6 Orbitopatía (6.02.3.006): selenio 100 µg c/12 h por 6 meses en la leve; metilprednisolona EV 4,5 g acumulados en 12 semanas; CAS ≥ 3/7 = activa.
- 7.13 HSC (2.01.1.074): hidrocortisona 50-100 mg/m² EV en la crisis perdedora de sal (≈ 25 mg en lactante); mantención 10-15 mg/m²/día + fludrocortisona 0,05-0,2 mg/día. No se dijo si Chile incluye la 17-OHP en el tamizaje neonatal (verificar y, si se hace, agregarlo).
- 7.13 Corticoides (1.03.3.003): supresión del eje con ≥ 20 mg/día de prednisona por > 3 semanas; riesgo óseo desde 2,5-7,5 mg/día por > 3 meses (coherente con reuma-23, que dice 2,5; reuma-24 dice 5); profilaxis de Pneumocystis con ≥ 20 mg/día por > 4 semanas más otro inmunosupresor.
- 7.15 Incidentaloma (1.03.1.022): cortisol post 1 mg de dexametasona > 1,8 µg/dL; adenoma < 4 cm y ≤ 10 UH no funcionante sin seguimiento (ESE 2023).
- 7.18 Prevención (1.03.3.002): densitometría a toda mujer ≥ 65 años; calcio 1000/1200 mg y vitamina D 600-800 UI (verificar contra la guía MINSAL de osteoporosis vigente).
- 7.23 Hipogonadismo (1.03.1.012): testosterona < 300 ng/dL; no iniciar con hematocrito > 50% y suspender o reducir si > 54%; APE > 4 ng/mL sin estudio como contraindicación.
- 7.25 Ginecomastia (tema nuevo, 1.03.1.023): tamoxifeno 10-20 mg/día por 3 meses (uso fuera de ficha, por especialista); cambio de espironolactona por eplerenona.
- Asignaciones sobrantes a quitar (anotadas en `v3_section_codes.json`, campo `sobrante`; no se tocó `v3_topic_codes.json`): 1.03.1.007 en endo-13 (se enseña en endo-12), 1.09.2.006 en endo-14 (nefro-10), 1.03.4.010 en endo-17 (endo-16), 1.03.1.020 en endo-19 (endo-16/17), 1.03.1.014 en endo-20 (endo-23).
- Numeración: los temas 1-5 del libro salen como 1.1-1.5 y el resto como 7.6-7.25 (topicLabel de `dataset_endocrinologia_bloque_1.cjs`); unificar.

## Reumatología: dudas al completar el libro (18-oct-2026)

# Dudas médicas — Reumatología (completar libro, 18-oct-2026)

Párrafos nuevos escritos desde conocimiento clínico general y guías internacionales; revisar contra la pauta MINSAL vigente antes de imprimir.

1. **Ceftriaxona en uretritis/cervicitis gonocócica (reuma-19, 4.º párrafo nuevo, ETS):** puse «ceftriaxona IM dosis única» sin cifra porque no pude confirmar si la Guía/Norma ITS vigente del MINSAL usa 250 o 500 mg; completar. Lo mismo con el esquema de enfermedad inflamatoria pélvica (solo dicho de forma general) y el tiempo de búsqueda de contactos (2-3 meses; para sífilis depende de la etapa).
2. **Umbral de dosis para osteoporosis por corticoides (reuma-23 nuevo vs reuma-24 1.8):** reuma-24 dice ≥ 5 mg/día por > 3 meses; ACR 2022 usa ≥ 2,5 mg/día por ≥ 3 meses. En reuma-23 dejé 5 mg con la nota de 2,5; unificar criterio en ambos temas (ya figuraba como contradicción en ESTADO_CODIGOS_V3.md).
3. **Código 1.11.3.002 (prevención de complicaciones de la terapia esteroidal):** el audit sugería que se enseñaba en reuma-21 (4.5) y reuma-24, pero esos párrafos no estaban etiquetados con el código; escribí un párrafo propio en reuma-23 (PMR = tratamiento esteroidal de 1-2 años). Si se prefiere, se puede en cambio quitar la asignación sobrante de reuma-23 y etiquetar reuma-21 4.5.
4. **Osteomielitis (reuma-02):** antibiótico empírico solo si sepsis, duración «alrededor de 6 semanas»; en pie diabético y osteomielitis vertebral hay pautas distintas. Código asignado a un tema de artritis séptica; podría pertenecer mejor a Infectología/Traumatología (sugerencia original del audit).
5. **Metotrexato en APS (reuma-06, sección 6 nueva):** escribí que el FARME de inicio es metotrexato previa verificación de exámenes; en el GES de AR el inicio y la confirmación los hace el especialista. Confirmar si el texto debe decir «el especialista inicia» y limitar APS a puente + derivación.
6. **Trombofilias (reuma-11, sección 6 nueva):** el código 1.08.1.019 también está asignado a hem-23, donde probablemente es tema principal (posible asignación sobrante en reuma-11). Duración de anticoagulación (3-6 meses en evento provocado) acorde a guías generales; unificar con Hematología.
7. **Kawasaki (reuma-22):** AAS «dosis antiinflamatoria al inicio y luego 3-5 mg/kg/día» (la dosis inicial varía entre 30-50 y 80-100 mg/kg/día según guía); vacunas vivas diferidas ~11 meses tras IGEV; ecocardiograma a las 2 y 6 semanas. Verificar contra la guía de la Sociedad Chilena de Pediatría.
8. **Síndrome seco (reuma-15):** mencioné lifitegrast (puede no estar disponible en Chile) y pilocarpina 5 mg c/8 h; ajustar a lo disponible en el país.
9. **Uveítis (reuma-17):** prednisolona acetato 1 % horaria al inicio y adalimumab en no infecciosas: pauta de oftalmología, revisar con el especialista.
10. **Criterios ACR/EULAR 2013 de esclerosis sistémica (reuma-14):** puntajes citados de memoria (engrosamiento proximal a MCF = 9; Raynaud 3; telangiectasias 2; capilaroscopía 2; HTP/EPI 2; úlceras 2 o cicatrices 3; anticuerpos 3; dedos hinchados 2 / esclerodactilia 4). Verificar.
11. **Lumbago (reuma-16):** no cité una guía MINSAL específica de lumbago agudo (no es GES); revisar si existe orientación técnica vigente. Dosis de AINEs y relajantes según uso habitual.
12. **Gram (reuma-01):** sensibilidades citadas (60-75 % S. aureus; 25-30 % gonococo) son cifras de referencia de la literatura.
13. **Código 1.11.1.014 (LES) en reuma-10 y 1.11.1.019 en reuma-05:** agregué párrafos propios; si se prefiere, el audit permite considerarlos asignaciones sobrantes porque el LES completo está en reuma-08/09 y la poliartritis en reuma-06.

## otorrino: dudas al completar el libro (18-oct-2026)

## Dudas médicas, libro ORL (completar, 18-oct)
- orl-13 fiebre reumática: profilaxis secundaria con penicilina benzatina «cada 3 semanas» (21 días) y duración (hasta 21 años mínimo). Confirmar contra la norma MINSAL vigente; algunas guías indican cada 4 semanas.
- orl-13 test rápido de estreptococo: se indicó cultivo de confirmación en niños con test negativo y sospecha alta; verificar si la guía MINSAL lo exige también en adultos.
- orl-06 trauma acústico: límite 85 dB(A)/8 h (DS 594) y PREXOR citados de memoria; confirmar cifras y nombre vigente del protocolo.
- orl-03 pie diabético: antibióticos orales sugeridos para infección leve (amoxicilina-clavulánico/cefalosporina); revisar con la guía GES/MINSAL de pie diabético y con diab.
- orl-15 índice de Fujioka: umbral >0,8 (ya era duda previa del agente ORL).
- orl-08 zóster: vacuna recombinante «recomendada desde los 50 años»; en Chile no está en el programa nacional, solo privada/grupos de riesgo.
- orl-03 otohematoma: ciprofloxacino como cobertura antipseudomonas y plazo de drenaje (24–48 h, hasta 7 días) según literatura general.


## oftalmologia: dudas al completar el libro (18-oct-2026)

# Dudas médicas — Oftalmología (completar libro, 18-oct-2026)

Párrafos nuevos escritos desde conocimiento clínico general y guías internacionales; revisar contra pauta MINSAL vigente.

1. **Examen visual preventivo en niños (oftal-09, 6.02.3.004):** la secuencia por edades (reflejo rojo, Hirschberg desde los 6 meses, agudeza visual con optotipos desde los 3-4 años, pesquisa en 1.º básico) y el umbral «menor a 20/30» son de práctica general; confirmar con la norma de supervisión de salud infantil y el programa escolar (JUNAEB).
2. **Examen visual en el adulto (6.02.3.003):** frecuencias (40-45 años, ≥60 cada 1-2 años; fondo de ojo diabético al diagnóstico en DM2 y a los 5 años en DM1) son orientativas; verificar con la guía MINSAL de diabetes/RD.
3. **GES N° 40 (vicios de refracción ≥65 años):** no se citan cifras de agudeza ni frecuencia de recambio de lentes; completar con la canasta vigente.
4. **Retinoblastoma:** «GES cáncer en menores de 15 años» y sobrevida >95% (países desarrollados); en Chile revisar cifras locales.
5. **Esclerosis múltiple (oftal-18):** riesgo a 15 años de ONTT (72% con RM lesiones vs 25%); en el libro se escribió «supera el 70%» y «cercano al 25%». GES N° 68 se cita tal como figura en el tema.
6. **Propranolol en hemangioma infantil:** 1-3 mg/kg/día con inicio supervisado; confirmar con dermatología pediátrica.
7. **Glaucoma agudo (oftal-01):** acetazolamida 500 mg oral/EV; el tema oftal-06 ya describe el manejo completo.
8. **Eritromicina ungüento** en blefaroconjuntivitis crónica y ceftriaxona sistémica para sospecha gonocócica (dosis no escrita; ver Norma ITS MINSAL).
9. **Ley 16.744 / DIAT (oftal-15):** descripción general de la obligación de denuncia; verificar el procedimiento vigente (Superintendencia de Seguridad Social).
10. **Tropicamida 1%** para dilatar y contraindicaciones (ángulo estrecho); en HTE/traumatismo se prefiere no dilatar.
11. Los textos de «sugerencia» del audit decían que eversión palpebral (oftal-16), reflejo rojo (oftal-08) y ungüentos (oftal-03) ya se enseñaban en otros temas; se revisó y era falso, por lo que se escribieron en el tema asignado.

- oftalmologia: 5 pies de foto (pterigión, Hirschberg, hemangioma, desprendimiento, glaucoma congénito) redactados por el agente a partir de la imagen; confirmar con Kanski.

## psiquiatria: dudas al completar el libro (18-oct-2026)

# Dudas médicas — Psiquiatría (completar)

- **EBBA (psiq-15)**: no encontré el contenido de la Escala Breve de Beber Anormal en el repo; el párrafo la describe de forma general (cuestionario breve sí/no, tamizaje, no diagnóstico) sin número de ítems ni punto de corte. Revisar con la fuente oficial y completar.
- **Ley 21.331 (psiq-19)**: se describe la hospitalización involuntaria (psiquiatra, riesgo cierto e inminente, informe a la autoridad sanitaria, revisión por comisión regional) sin plazos exactos; confirmar plazos de notificación.
- **Depresión en menores (psiq-01)**: se escribió que el GES de depresión parte a los 15 años y que <15 se maneja en el programa de salud mental de APS; fluoxetina desde los 8 años (indicación de fichas internacionales; en Chile verificar ficha técnica).
- **TEA (psiq-18)**: prevalencia 1/36 (CDC 2023), no cifra chilena; Ley 21.545.
- **Tiamina (psiq-15)**: 500 mg IV c/8 h por 2-3 días, luego 250 mg/día 3-5 días (esquema de guías europeas); algunos protocolos locales usan 200-300 mg c/8 h.
- **Rango de valproato 50-125 µg/mL y litio 0,6-1,2 mEq/L (psiq-02)**: cifras estándar; confirmar con la norma local de manía.
- **Preguntas reales psiq-20**: las dos preguntas EUNACOM Jul-2024 (161 y 162) son casi idénticas; se usó solo una y se reescribió su explicación (la original decía que dispareunia superficial es «también conocida como vaginismo»).
- **Sobrantes propuestos**: 5.01.1.010 en psiq-04 y psiq-11 (se enseña en psiq-10); 5.01.1.008 en psiq-05 (psiq-01); 5.01.1.016 en psiq-08 (psiq-17); 5.01.5.003 en psiq-09 (psiq-03); 5.01.5.002 en psiq-13 (psiq-10); 1.08.4.008 en psiq-11 (hem-01).


## infectologia: dudas al completar el libro (18-oct-2026)

## Infectología: dudas médicas de los párrafos nuevos (revisar contra norma MINSAL vigente)
- Fracaso de TBC (infecto-11): definí «baciloscopía/cultivo positivo desde el 5.º mes» (OMS); la norma chilena puede fijar el 4.º mes. Esquema MDR de 6 meses (BPaLM) según OMS 2022; confirmar si el PROCET lo usa.
- PPD (infecto-05): umbral ≥10 mm general y ≥5 mm en VIH/inmunosuprimidos/contacto reciente; contrastar con la norma TBC (2014).
- VIH y embarazo (infecto-09): repetir test en 3.er trimestre «en mujeres de riesgo», cesárea electiva a las 38 sem si CV >1.000 y AZT EV intraparto, AZT neonatal 4 sem; verificar con la Norma de Prevención de Transmisión Vertical vigente.
- Vacunas especiales (infecto-06): edades de influenza (6 meses a 5.º básico), VPH (4.º-5.º básico), indicaciones de meningococo/varicela/hepatitis A son resumidas; confirmar con el PNI actual.
- Influenza/COVID (infecto-25): oseltamivir en grupos de riesgo (≥65 años; la reconstrucción 2013 hablaba de >60), duración de aislamiento COVID, nirmatrelvir/ritonavir (dosis, ajuste renal) y uso de remdesivir/baricitinib/tocilizumab, según norma MINSAL 2025-26.
- Sífilis congénita (infecto-12): criterio de «caso» neonatal y penicilina G sódica 10 días; confirmar con la norma ITS/GES 35.
- Prevención entérica (infecto-08): se citó vacuna anticolérica oral y antitifoídica Vi como indicaciones de viajero/brote; no están en el PNI.
- Mordeduras (infecto-06): amoxicilina-clavulánico 875/125 c/12 h por 3-5 días (alternativas en alérgicos) sin referencia a norma chilena.


## cirugia: dudas al completar el libro (18-oct-2026)

# Dudas médicas — libro Cirugía (completar, 18-oct-2026)

Revisar con un médico antes de dar por cerrado el libro (párrafos escritos desde guías generales, sin contrastar con las clases):

1. **Profilaxis antirrábica (cirugia-18, 4.01.3.018):** escribí cuatro dosis IM de vacuna de cultivo celular (días 0, 3, 7 y 14) e inmunoglobulina humana 20 UI/kg en exposiciones graves. Verificar contra la norma técnica MINSAL vigente (esquemas anteriores usaban 5 dosis, 0-3-7-14-28) y la lista de exposiciones graves.
2. **Erradicación de H. pylori (cirugia-05, 1.06.1.030):** IBP + amoxicilina 1 g + claritromicina 500 mg cada 12 h por 14 días. Revisar contra la guía MINSAL (duración y esquema de segunda línea; resistencia local a claritromicina).
3. **Umbrales de cirugía de aneurismas (cirugia-19):** torácico 5,5 cm; poplíteo 2 cm o con trombo/síntomas; femoral 2,5 cm (este último es el menos firme).
4. **GES:** no cité número de problema GES; solo «colecistectomía preventiva del cáncer de vesícula en 35-49 años sintomáticos» (cirugia-02). Confirmar que el texto vigente del GES sigue igual.
5. **Mamografía** (no tocada): sigue la inconsistencia 2 vs 3 años entre libros.
6. **PAM > 85 mmHg en trauma raquimedular (cirugia-09):** recomendación de guías AANS/CNS (7 días); revisar si se quiere incluir esa cifra en un libro EUNACOM.
7. **Clase cirugia-01:** el código 4.01.2.024 (hemorragia aguda postoperatoria) está asignado a Apendicitis y ahora se enseña en cirugia-16 (Fiebre postoperatoria, sección 3). Reasignar en v3_topic_codes.json (quitar de cirugia-01, agregar a cirugia-16).
8. **Texto previo con símbolos perdidos:** el volcado de texto plano muestra cifras sin su signo < o > en algunos párrafos de cirugia-09, 13, 15 y 17; es mi volcado el que borra los trozos entre « < » y « > »; en el HTML están bien (ver pág. del PDF).


## neumologia: dudas al completar el libro (18-oct-2026)

# Dudas médicas - Respiratorio (completar libro)
- resp-01: umbral de caída del VEF1 de 20% en metacolina y VPN alto: guía general (ATS), no MINSAL.
- resp-02: umbrales de PEF (leve >70%, moderada 40-69%, grave <40-50%) y dosis de nebulización (salbutamol 2,5-5 mg): confirmar con GINA/MINSAL; el texto del tema usa PEF <50% para grave.
- resp-03: definición de asma grave y de tos crónica (>8 semanas) según guías internacionales; orden de tratamiento empírico de tos por goteo/asma/reflujo.
- resp-04: meta SatO2 >=90% y flebotomía con Hto >55-60% en cor pulmonale; fármacos de cesación (bupropión, vareniclina) y su disponibilidad en APS en Chile.
- resp-10: esquema de neumococo (conjugada + polisacárida 23) y edad según calendario MINSAL vigente; BCG con peso >= 2.000 g.
- resp-11/12: volúmenes máximos de toracocentesis evacuadora (1.000-1.500 mL) y lugar de punción (7.º-8.º espacio) quedan como referencia general.
- resp-21: parámetros iniciales del ventilador y profundidad del tubo (21 cm mujer, 23 cm hombre) son valores de referencia.
- resp-22: COVID grave: dexametasona 6 mg por 10 días; tratamiento antiviral cambia según versión de guía.
- resp-24: COHb del 10-30% como "leve" es aproximación; hidroxocobalamina para cianuro en humo.
- resp-25 (nuevo): pregunta 3 y las del tema son de práctica; la RCP en ahogamiento (5 ventilaciones iniciales) sigue guías AHA/ERC; criterio de observación 6-8 h.
- Pies de foto: traducidos del pie de Harrison 21.ª (p. 2209, 2210, 2216) y ajustados a lo que se ve; en asbestosis el panel usado es la TACAR (B), no la radiografía.
- Contradicción previa: TBC fase de continuación 80 vs 100 dosis (ya anotada en el estado).


## gastroenterologia: dudas al completar el libro (18-oct-2026)

# Dudas médicas — Gastroenterología (completar libro, 18-oct-2026)

- gastro-05 (epidemiología): el texto existente dice que el cáncer gástrico es la primera causa de muerte por cáncer en hombres y la segunda en mujeres, tras mama; verificar con DEIS/MINSAL (en mujeres la vesícula también ocupa los primeros lugares). El párrafo nuevo usa solo afirmaciones cualitativas (tasas de las más altas del mundo para gástrico y vesícula; sobrevida del páncreas < 10 %).
- gastro-05 (imagen): la figura de Bailey p. 1150 se rotuló «Tumor de músculo liso del estómago con ulceración» por el pie de la página; el pie de la fuente parece pertenecer a esa imagen (tránsito baritado), pero confirmar a ojo médico.
- gastro-16: «colecistectomía preventiva a los 35–49 años con colelitiasis sintomática, garantizada por el GES» — confirmar vigencia y edades en la canasta GES actual.
- gastro-15: sitio de la paracentesis (fosa ilíaca izquierda) y albúmina 6–8 g por litro con volúmenes > 5 L; no se corrige INR/plaquetas de rutina (consenso AASLD/EASL).
- gastro-14: criterio de derivación de VHA «INR ≥ 1,5 + encefalopatía» (definición de insuficiencia hepática aguda) y edad > 40 años como factor de riesgo.
- gastro-08: esquemas antiparasitarios para el adulto (tinidazol 2 g única, metronidazol 250 mg c/8 h por 5 días para Giardia; metronidazol 500–750 mg c/8 h por 7–10 días en amebiasis; albendazol 3 días en tricocéfalo; praziquantel en teniasis; ivermectina en Strongyloides). Confirmar con la norma MINSAL de enteroparasitosis.
- gastro-23: oxiuros: repetir dosis a las 2 semanas y tratar al grupo familiar (norma habitual; la dosis exacta por peso no se escribió).
- gastro-23: umbral del test del sudor (cloro > 60 mmol/L) y rol del tamizaje neonatal en Chile.
- gastro-24: enema evacuador: 10 mL/kg de suero fisiológico tibio; evitar fosfatos < 2 años (criterio general; confirmar volumen máximo por edad con pediatría).
- gastro-26: neumotórax hipertensivo: se enseña el 5.º espacio intercostal anterior a la línea axilar media (ATLS 10.ª ed.), con el 2.º espacio medioclavicular como alternativa; la clase/libro de cirugía podría decir solo 2.º espacio. Unificar.
- gastro-25: se escribió que el megacolon tóxico lleva colon transverso > 6 cm; algunos textos usan > 5,5 cm.
- Los pies de foto son los del libro fuente traducidos y ajustados a lo que se ve (ninguno redactado desde cero); el de la enema baritada en Hirschsprung (Nelson Fig. 378.4) acorta el original.


## saludpublica: dudas al completar el libro (18-oct-2026)

## Salud Pública (saludpublica) — dudas médicas y de redacción

- sp-15 (tema nuevo): las 2 preguntas son redactadas por mí (marcadas «Pregunta de práctica redactada para este manual»), no del banco AEE; sin reconstrucciones oficiales.
- sp-01: objetivos sanitarios 2011-2020 (4 objetivos) y ejes de la Estrategia Nacional de Salud 2021-2030 citados de memoria; verificar con el documento MINSAL.
- sp-02: agresión sexual aguda (GES): ventanas de anticoncepción de emergencia (72 h, hasta 120 h) y profilaxis VIH (72 h, 28 días) según norma MINSAL; verificar garantía de oportunidad exacta. Grupos de salud oral GES (6 años, 12 años, embarazadas, 60 años) a confirmar con el decreto GES vigente.
- sp-05: ciclo vital de Duvall (8 etapas); MINSAL podría usar otra clasificación (formación, extensión, contracción, disolución).
- sp-07: valores de Chile (TMI ~6 por 1.000, esperanza de vida ~80) son aproximados.
- sp-12: art. 362 Código Penal y Ley 20.418 sobre menores de 14 años: confirmar el texto con el equipo jurídico.
- sp-14: tipos de licencia 5 y 6 (accidente del trabajo y enfermedad profesional), tamaños de empresa para comité paritario (25) y departamento de prevención (100).
- Texto existente (no tocado): sp-13 dice que el CMD lo «emite el INE»; en rigor lo emite el médico y se inscribe en el Registro Civil, y el INE/DEIS tabula.


## pediatria: dudas al completar el libro (18-oct-2026)

# Dudas médicas · Pediatría (completar libro)

- Controles de salud infantil (ped-01, 18.1 sección 9): calendario aproximado de controles del Programa Nacional de Salud de la Infancia; verificar contra la norma MINSAL vigente.
- PNI adultos (ped-03, sección 6): neumocócica polisacárida 23-valente a los 65 años y dTpa de la embarazada desde las 28 semanas; confirmar con el PNI 2026.
- Hepatitis B/A (ped-03, sección 5): inmunoglobulina antihepatitis B 0,06 mL/kg y ventana de 12 h a 7 días; confirmar norma chilena.
- Hipoacusia neonatal (ped-21): se evitó afirmar el GES de hipoacusia del prematuro por la duda ya registrada (<4 años vs <2).
- Mastitis (ped-04): antibiótico cloxacilina o cefalosporina de 1.ª generación; confirmar esquema local.
- Sinequias vulvares (ped-27): las claves reales se contradicen. Jul 2017 P109 (parcial: aseo y masajes), Ago 2021 P154 (une gran parte: vaselina; no usada) y Jul 2024 P179 (completa: betametasona 10 días). El libro: parcial/asintomática vaselina; completa o sintomática betametasona 2-4 semanas.
- Preguntas reales con clave dudosa (no usadas): Dic 2022 P79 (soplo holosistólico + IC: clave «soplo funcional», debería ser CIV), Dic 2018 P40 (intoxicación, clave AINES), Dic 2024 P28 (organofosforado, clave «control sano») y Dic 2024 P29 (opciones corruptas). Jul 2025 P81 no usada porque su clave incluye lavado gástrico.
- Pregunta de práctica nueva en ped-26 (translocación robertsoniana) escrita por mí, rotulada «Pregunta de práctica».
- Edad de inicio de IEFR/otras cifras de recurrencia de translocación (10-15 % madre, 2-5 % padre) son cifras de manual; revisar.

- pediatria: revisar con criterio editorial las fotos sensibles de menores agregadas desde Nelson (sinequia vulvar en ped-27; quemaduras por inmersión y hemorragias retinianas por maltrato en ped-28).

## urologia: dudas al completar el libro (18-oct-2026)

## Urología: dudas médicas del completado (18-oct-2026)

Dosis y esquemas que redacté desde guías generales (verificar contra norma MINSAL vigente):
- uro-06, ITS: uretritis con ceftriaxona 500 mg IM + azitromicina 1 g VO (o doxiciclina 100 mg c/12 h por 7 días). Revisar la Norma de ITS MINSAL (dosis de ceftriaxona 250 vs 500 mg y esquema de clamidia). El texto previo del mismo tema usa doxiciclina 10 a 14 días para epididimitis; son esquemas distintos.
- uro-06: herpes genital con aciclovir 400 mg c/8 h por 7 a 10 días (primoinfección) y 5 días (recurrencia); penicilina benzatina 2,4 millones UI en sífilis primaria; linfogranuloma venéreo con doxiciclina por 21 días; metronidazol 2 g en tricomoniasis. Verificar con la norma chilena.
- uro-06: afirmé que gonorrea y sífilis son de notificación obligatoria (ENO). Confirmar si clamidia también.
- uro-01: umbral de hipercalciuria 250 mg/24 h en mujeres y 300 mg/24 h en varones (criterio clásico; otros usan 4 mg/kg/día o 250 para ambos sexos).
- uro-03: prevalencia histológica de HPB (50% a los 60 años, 80-90% a los 80) y Qmax 15 y 10 mL/s; volumen prostático alterado desde 30-40 cc (el tema usa 40 cc para finasteride).
- uro-07/uro-10: ventana de orquidopexia 6 a 12 meses (máx 18). Algunas guías chilenas dicen 6 a 18 meses o antes de los 2 años; confirmar la del curso.
- uro-10: riesgo relativo de cáncer en criptorquidia 2 a 8 veces; el tema ya decía 4 a 10 veces (uro-10 0.0) y yo puse 4 a 10 en uro-07. Unificar.
- uro-15: transfusión con Hb bajo 7 g/dL y sonda de 3 vías 20-24 Fr en hematuria masiva (práctica habitual, no cita MINSAL). Síndrome nefrítico: se menciona penicilina si hay infección activa.
- uro-11: «cerca de 20% de las masas menores de 4 cm son benignas»; «5 a 10% con tríada clásica».
- uro-02: técnica de cistostomía por punción desde texto general; no hay cifras de calibre del Cystofix.

Pies de foto (todos tomados del libro de origen, traducidos y ajustados a lo que se ve):
- uro-02 «Uretrografía retrógrada tras fracturas pélvicas: extravasación de contraste por lesión extensa de la uretra (flecha)»: pie de Bailey Fig. 14.28 resumido; lo redacté yo en parte.
- uro-02 «Uretrografía ascendente con estenosis de la uretra bulbar»: Bailey Fig. 79.9. La imagen extraída (187x286 px) es baja resolución.
- uro-06 «Secreción uretral purulenta en la uretritis gonocócica»: Nelson Fig. 163.4 dice solo «Gonococcal urethral discharge»; agregué «purulenta». Esa foto de Nelson viene de capítulo de adolescentes.
- uro-02 «Ecografía con gran residuo postmiccional»: Bailey Fig. 78.9, textual traducido.

Otros:
- Código «sobrante» 4.03.2.003 y 4.03.5.006 (parafimosis) en uro-02: se enseñan en uro-16, pero uro-16 no los tiene en v3_topic_codes.json (solo 4.03.1.009/001/2.004/1.005). Recomiendo agregarlos a uro-16 y quitarlos de uro-02; no toqué uro-16.
- 4.03.5.001 (biopsia prostática), 4.03.5.002 y 1.09.5.001 (cistoscopía) y 4.03.1.010 en uro-12: parcial vaciado porque el nivel «derivar» ya está cubierto y el enfoque general de hematuria está en uro-15; no escribí párrafos.


## traumatologia: dudas al completar el libro (18-oct-2026)

## Traumatología (libro traumatologia) — dudas médicas / de contenido

- Pies de foto (20 fotos en atlas_add/traumatologia.json): tomados del pie del atlas Sherman traducido y ajustado a lo que se ve; si alguno se redactó distinto, conviene que un médico confirme que coincide con la imagen (especialmente trauma-01 almohadilla grasa, trauma-08 lipohemartrosis, trauma-14 líneas de Klein y sinovitis transitoria).
- trauma-03/trauma-09: 4.01.1.049 (TVP) se enseña en trauma-03; trauma-09 queda como asignación sobrante (solo se nombra de pasada).
- trauma-12 también enseña 4.02.1.004 (infecciones osteoarticulares: artritis séptica) además de trauma-11; se agregó al topics_traumatologia.json.
- trauma-14: 2.01.1.094 (patología de columna en el niño) integrado en Ortopedia infantil; sin código específico para cadera dolorosa pediátrica (Perthes/epifisiolisis).
- trauma-04: luxación de hombro (4.02.2.012) y reducción de luxaciones (4.02.5.003): redactadas a nivel Derivar/Realizar; revisar que la técnica descrita sea apropiada para médico general.
- Formato: el dataset de Traumatología trae marcas markdown (## y **) que el compilador no convierte; ya aparecen en el PDF versionado (425 ocurrencias) y siguen visibles. Es un problema previo de render, no de contenido.


## ginecologia: dudas al completar el libro (18-oct-2026)

## Ginecología (completar códigos V3, 18-oct-2026)
Párrafos nuevos redactados por mí (sin fuente bibliográfica citada); revisar con un ginecólogo:
- gin-01: PRL > 100 ng/mL «sugiere» prolactinoma y > 200 ng/mL macroadenoma (umbrales orientativos). Edad de telarquia 8-13 años y menarquia media ~12,5 años en Chile.
- gin-02: umbral de testosterona total > 150-200 ng/dL y DHEA-S > 700 µg/dL para sospechar tumor; 17-OHP basal > 2 ng/mL para HSC no clásica.
- gin-03: riesgo de cáncer concomitante en hiperplasia atípica (25-40%); esquema de MPA 10 mg 12-14 d/mes; DIU-LNG 52 mg como primera línea.
- gin-07: normas OMS 2021 del espermiograma se dejaron como las del texto previo (abstinencia 3-5 días).
- gin-08: fórmula de Ogino (ciclo más corto -18, más largo -11) e índices de Pearl aproximados.
- gin-09: esquema de sífilis (benzatina 2,4 MU; 3 dosis en latente tardía) y herpes (aciclovir 400 mg c/8 h): verificar contra la norma MINSAL de ITS vigente.
- gin-13: la norma MINSAL de tamizaje (PAP vs test VPH) está en transición; se mantuvo lo ya escrito (25-64 años cada 3 años). Duración del taponaje 24-48 h es práctica habitual, no norma.
- gin-15: carboplatino + paclitaxel en endometrio avanzado y cisplatino concomitante en cuello (conceptos generales).
- Pies de foto: no se agregaron fotos nuevas, por lo tanto no hay pies redactados por mí.


## nefrologia: dudas al completar el libro (18-oct-2026)

## Nefrología (completar V3, 18-oct-2026)
Párrafos nuevos escritos desde conocimiento general y guías internacionales; contrastar con MINSAL/clases:
- **nefro-20 (HTA)**: clasificación por etapas (1: 140-159/90-99; 2: 160-179/100-109; 3: ≥180/110) y metas (<140/90 general; <130/80 en diabetes, ERC albuminúrica y riesgo alto): confirmar con la Guía MINSAL/GES vigente. Umbrales de MAPA (24 h ≥130/80, vigilia ≥135/85, sueño ≥120/70) son de ESC/ACC-AHA. HTA infantil: definición ≥P95 y umbral 130/80 desde 13 años (AAP 2017).
- **nefro-21 (cistitis/BA)**: esquemas (nitrofurantoína 100 mg c/6 h x5 d, fosfomicina 3 g, cotrimoxazol 3 d si resistencia <20%) y pauta en embarazo (cefadroxilo/amoxicilina 7 d) deben validarse con la Guía MINSAL de ITU; la clase puede usar otra duración. Tamizaje de BA en embarazo: urocultivo en primer control prenatal.
- **nefro-19**: umbral para tratar la acidosis de la ERC (<22 mEq/L con meta 22-26; KDIGO 2024 sugiere considerar tratar si <18). Captadores de potasio (patiromer, ciclosilicato) pueden no estar disponibles en Chile.
- **nefro-13**: uso de albúmina 20-25% + furosemida en anasarca nefrótica es controvertido (efecto transitorio); se dejó restringido a edema refractario con hipovolemia o albúmina muy baja.
- **nefro-15**: manejo de emergencia hipertensiva (metas PAM -25 % en 1 h, 160/100 en 2-6 h; excepciones) según guías ACC/AHA; clase/Cardiología pueden diferir.
- **nefro-18**: umbrales de peritonitis en PD (>100 leucocitos/µL, >50 % PMN) y esquema empírico intraperitoneal según ISPD; indicaciones/contraindicaciones de trasplante en términos generales (no norma chilena específica).
- **nefro-04**: BNP/NT-proBNP con puntos de corte agudos (100/300); en ERC se elevan, interpretar con cautela.
- **Pie de foto** (nefro-20, retinopatía hipertensiva): traducción literal del pie de Harrison 21.ª ed. Fig. 32-7. Imagen pequeña (426x376 px).
- Sin asignaciones sobrantes: todos los códigos pendientes se enseñaron en su propio tema. 1.09.1.020 (anasarca) se enseña en nefro-08; 1.09.2.003 en nefro-13.


## hematologia: dudas al completar el libro (18-oct-2026)

## Hematología (completar libro)
- Pie de foto de la RM de degeneración combinada (Nelson, fig. 67.9): traducido del libro fuente; en la imagen publicada la señal de cordones posteriores es sutil (RM sagital con contraste invertido). Confirmar que sirve para el libro.
- hem-04: umbral de transfusión «Hb < 7 g/dL» en anemia de la inflamación (cifra habitual, no del Manual MINSAL); revisar.
- hem-10: «sin plaquetas salvo sangrado grave o procedimiento invasivo» y evitar antibióticos en diarrea por STEC; el texto previo del tema contraindica plaquetas salvo hemorragia intracraneal. Unificar criterio.
- hem-16: punción lumbar en leucemia (corrección de plaquetopenia y coagulopatía): no se indicó cifra de plaquetas.
- hem-20: «cerca de un tercio de los SMD evoluciona a LMA» es cifra aproximada.
- hem-22: dexametasona EV en compresión medular tumoral y plazo 24-48 h para pronóstico motor: revisar dosis/plazo con guía local.
- Asignaciones: 1.08.4.007, 1.08.1.014, 1.08.4.001 y 6.01.1.014 (audit sugería que se enseñaban en otro tema/libro): no se enseñaban en ningún lugar del libro, se escribieron en hem-11, hem-17 y hem-18. 6.01.1.014 (linfomas cutáneos) puede repetirse en el libro de Dermatología.
- Pies redactados por mí: ninguno; ambos pies son traducción del pie original (resumidos).


## diabetes: dudas al completar el libro (18-oct-2026)

## Diabetes (completar_prompt, 18-oct-2026): dudas médicas a revisar

Párrafos nuevos en diab-05, 07, 09, 12, 13, 14, 15, 17, 21, 22, 23, 24 y tema nuevo diab-25.

- **diab-25 · cortes de IMC y cintura**: adulto IMC 18.5/25/30/35/40; adulto mayor (MINSAL) 23/28/32; cintura ≥ 102 cm hombres y ≥ 88 cm mujeres (ATP III). El IDF para Latinoamérica usa ≥ 90 / ≥ 80 cm. Verificar cuál es el corte vigente en la norma MINSAL; en el niño se dejó solo «puntaje z o percentil» sin cifras.
- **diab-25 · prevalencia Chile**: «cerca de 3 de cada 4 con exceso de peso y 3 de cada 10 con obesidad (ENS 2016–17)». Cifras de memoria (aprox. 74% y 31%), verificar.
- **diab-25 · pregunta de anorexia (Jul 2017 Q4)**: la clave oficial es 300 kcal (10–15 kcal/kg/día × 29 kg). Las guías difieren (NICE 5–10; ASPEN 10–20 kcal/kg/día; antes 30–40 kcal/kg). Se enseñó 10–15 por coherencia con la clave; el banco la marca de confianza baja.
- **diab-25 · cirugía bariátrica**: criterios (18–65 años, IMC ≥ 40 o ≥ 35 con comorbilidad, fracaso médico ≥ 6 meses) y «remisión de DM2 60–80%» son de guías internacionales; no se verificó norma MINSAL.
- **diab-25 · fármacos para obesidad** (orlistat, liraglutida 3 mg, semaglutida 2.4 mg): confirmar disponibilidad y lo que espera el examen en Chile. Programa «Elige Vida Sana» citado en términos generales.
- **diab-25 · fluoxetina 60 mg/día en bulimia y criterios de hospitalización de TCA** (IMC < 15, FC < 40–50, PA < 90/60, K < 3): de guías APA/NICE; revisar con psiquiatría.
- **diab-25 · balance nitrogenado**: fórmula con «NUU + 4 g» y grados de estrés (< 5, 5–10, > 10 g/día); es la versión clásica de soporte nutricional, no de norma chilena.
- **diab-05 · test de esfuerzo previo al ejercicio**: la ADA no recomienda tamizaje rutinario en asintomáticos; se redactó como «solo si ejercicio vigoroso + factores de riesgo/síntomas». Revisar el criterio de edad (> 40 años) y DM > 10 años.
- **diab-05 · PSCV/EMPA**: Papanicolaou cada 3 años (25–64) y mamografía cada 2 años (50–69) citados de memoria; verificar la norma vigente.
- **diab-13 · corticoides**: dosis de NPH matinal 0.1 UI/kg por cada 10 mg de prednisona (máx. 0.4 UI/kg) proviene de protocolos hospitalarios, no de norma MINSAL.
- **diab-22 · ITB**: normal 0.9–1.3; isquemia severa < 0.4–0.5. La foto del ITB (Bailey p. 966) no tiene pie de figura propio en el libro: el pie «Medición del índice tobillo-brazo con Doppler manual» **lo redactó el agente** (describe el texto de la misma página).
- **diab-14 · compromiso de conciencia**: código pediátrico (2.01.2.004); se agregó solo la dosis pediátrica de glucosa (suero glucosado 10% 2 ml/kg). Revisar si el libro necesita más contenido pediátrico.
- **diab-17 · gluconato de calcio** 10% 10 ml EV en hiperkalemia con cambios de ECG: estándar, pero no figura en el resto del libro.
- **diab-07 · acidosis láctica**: umbral de bicarbonato (pH < 7.1) y de diálisis (pH < 7.0) son orientativos y con evidencia limitada.
- **diab-24**: el código 1.06.2.010 (pancreatitis aguda) queda como sobrante porque lo enseña gastro-18; si se prefiere, se puede agregar un párrafo breve de diagnóstico y manejo de la pancreatitis por hipertrigliceridemia (plasmaféresis, insulina EV).


## neurologia: dudas al completar el libro (18-oct-2026)

## Neurología y Geriatría (completar_prompt, LIBRO=neurologia)

Contenido nuevo: neurologia_extra/a1.cjs (agente anterior, temas 10.1-10.11), a2.cjs (10.14-10.23) y c.cjs (10.25 y 10.26). Revisar:

**Pies de foto**
- «Úlcera por presión sacra con escara necrótica» (neuro-22): lo redacté yo; el pie de Bailey dice solo «Pressure ulcer». Ajustado a lo que se ve (sacro, necrosis negra).
- «Atrofia de los músculos intrínsecos de la mano por neuropatía cubital» (neuro-19): traducción del pie de Bailey (Fig. 34.40); se omitió «izquierda».
- «RM sagital con atrofia cerebelosa en una ataxia espinocerebelosa tipo 1 (SCA1)» (neuro-20): traducción resumida del pie de Harrison (Fig. 439-1, hombre de 60 años).
- «Sitios frecuentes de desarrollo de úlceras por presión» (neuro-22): traducción de Fitzpatrick (Fig. 99-4).
- «Retinopatía hipertensiva con borramiento del disco óptico, hemorragias, exudados algodonosos y exudado foveal» (neuro-25): traducción resumida de Harrison (Fig. 32-7; se omitió que era un hombre de 62 años con IRC). Las imágenes fuente son pequeñas (325 a 430 px).

**Cifras y normas a validar**
- MMSE: cortes por escolaridad en Chile (usé ~21-22 con baja escolaridad y ~24 en escolaridad media/alta); MoCA <26 con +1 punto si ≤12 años de escolaridad; Mini-Cog <3.
- HTA del adulto mayor (neuro-25): meta <140/90; 130-139 en 65-79 años si lo tolera; PAS 140-150 en >80 años o frágiles (ESC/guías internacionales; la guía MINSAL puede ser menos específica). Evitar PAS <120.
- IAM con SDST en >75 años: tenecteplasa a mitad de dosis y enoxaparina 0,75 mg/kg c/12 h sin bolo (estudio STREAM; en Chile el GES usa estreptoquinasa y tenecteplasa según centro). ACTP <90 min y trombólisis si hemodinamia >120 min. Verificar con la norma GES N° 5 vigente.
- Desnutrición del adulto mayor: IMC <23 (EMPAM), pérdida ≥5% en 1 mes o 10% en 6 meses, perímetro de pantorrilla <31 cm, MNA <17.
- Denuncia obligatoria del maltrato: art. 175 y 176 del Código Procesal Penal, plazo de 24 horas; confirmar con el servicio jurídico.
- Cuidados paliativos: Ley 21.375 (cuidados paliativos universales), GES N° 4 y Ley 20.584; el libro afirma que la eutanasia y el suicidio asistido no forman parte de los cuidados paliativos (la regulación legal puede haber cambiado).
- Morfina: dosis de inicio 5 mg c/4 h (2,5 mg en el anciano), rescate = 1/6 de la dosis diaria, SC = 1/2 de la oral; hioscina/escopolamina SC para estertores; midazolam para agitación terminal y sedación paliativa.
- Hipotensión postural: fludrocortisona 0,05-0,1 mg/día, midodrina 2,5-10 mg hasta 3 veces/día con la última dosis antes de las 18 h.
- Programas citados: Más Adultos Mayores Autovalentes, PACAM y EMPAM (nombres y alcance vigentes a 2026).

**Asignaciones**
- 2.01.2.027 (status epiléptico pediátrico, neuro-09) y 2.01.2.017 (ALTE/BRUE, neuro-10) están enseñados en este libro con párrafos nuevos, porque la asignación sigue en neuro-09/10; si el libro de Pediatría ya los cubre, se podría quitar de aquí (hoy no se quitó ninguna asignación).
- 1.07.3.005 (envejecimiento saludable) se enseña en neuro-14 (donde está asignado) y no en neuro-22.
- Escaras: 1.07.1.007 y 4.01.1.052 están en neuro-22 y ambas se enseñan en el mismo párrafo.


## dermatologia: dudas al completar el libro (18-oct-2026)

# Dudas médicas · completar derma (derma-01 a derma-18)

1. **Loxoscelismo (derma-18).** Los esquemas chilenos varían: corticoide sistémico en las primeras 24 a 48 horas (dosis y vía no fijadas en el texto), suero antiloxosceles (ISP) en las primeras 24 a 48 horas y solo por indicación del toxicólogo/CITUC, y rechazo de la dapsona y la escisión precoz. Confirmar con la guía MINSAL/CITUC vigente. No se escribió dosis del suero ni del corticoide. La estimación 80-90% cutáneo y 1-15% cutáneo-visceral viene de series nacionales; confirmar.
2. **Pregunta de práctica derma-18 (3.ª) y derma-17 (ninguna propia):** la 3.ª pregunta de derma-18 la redacté yo (marcada «Banco Oficial AEE · Perfil V3» según la convención de applyV3); validar el enunciado y la conducta (control de laboratorio 48-72 h). Las otras preguntas son reales del banco; en la de Dic 2017 P89 reemplacé el «FOTO» por la descripción de la placa livedoide.
3. **Propranolol en hemangioma (derma-17):** 2-3 mg/kg/día, inicio supervisado con 1 mg/kg/día, 6-12 meses; confirmar con dermatología pediátrica (ya anotado en REVISION_CONTENIDO punto 6). Umbral «5 o más hemangiomas → ecografía abdominal» según la pregunta real Jul-2024; otras preguntas del banco (Dic 2022 «6 hemangiomas → RNM espinal», clave C) parecen erróneas y no se usaron.
4. **Cloxacilina en SSSS (derma-09):** no se escribió dosis; revisar si se prefiere agregar clindamicina y la vancomicina según prevalencia de SARM.
5. **Herpes zóster/simple (derma-12):** dosis de aciclovir 400 mg c/8 h 7-10 días (primoinfección) y 5 días (recurrencia), 800 mg 5 veces/día en zóster. Verificar contra guía MINSAL/ETS.
6. **6.01.1.023 prúrigo infantil agudo (derma-16):** el audit sugería revisar si pertenece a pediatría; lo escribí en derma-16 (nivel Específico/Completo/Completo) como párrafo propio.
7. **Codes sobrantes:** 6.01.1.025 (toxidermia fija/rash) se enseña ahora en derma-10; se sacó de derma-09. 2.01.1.108 se enseña en derma-07 (pañal y contacto) y se agregó a derma-07 en topics; derma-16 lo conserva asignado pero ya no lo enseña (quitar asignación).
8. **Pies de foto redactados por mí (no son el pie literal del libro):** derma-17 hemangioma segmentario (Fitzpatrick p. 1203, pie original cortado en la extracción), derma-17 queratosis seborreicas (p. 1093; el pie original no identifica la imagen exacta), derma-05 dactilitis (p. 233), derma-12 verruga vulgar (p. 1955, pie «Common wart… lower lip» traducido), derma-07 fototoxicidad (p. 869, pie traducido y recortado: la imagen solo muestra la cara). El resto son traducciones del pie del libro (Fitzpatrick p. 401, 1694, 2300; Harrison p. 1225, 1522). Verificar cada una contra el libro.
9. **Notas de contenido sin cifra firme:** índice UV «muy alto» en Chile, mancha salmón «40-70% de recién nacidos», «arsénico en aguas del norte» como causa de Bowen múltiple: son datos clásicos pero sin cita puntual.


## cardiologia: dudas al completar el libro (18-oct-2026)

## Cardiología (completar V3)
- Pie de la mancha de Roth (Harrison p. 262): la figura no traía pie extraído; lo redacté yo a partir del texto de la página («manchas de Roth, white-centered retinal hemorrhages... endocarditis bacteriana subaguda»). Verificar contra el libro.
- Pies de vegetación mitral (Harrison p. 1064) e IAo Doppler color (p. 1889): traducción del pie original.
- GES de endocarditis: no afirmé número de GES; revisar si el recambio valvular corresponde a algún problema GES.
- IAo (4.2): umbral de FEVI para cirugía asintomática ≤55% (AHA) vs ≤50% (ESC); DFSVI >50 mm; raíz ≥55 mm (≥45–50 Marfan/bicúspide). Confirmar la cifra que prefiere el EUNACOM.
- Endocarditis empírica: ampicilina+cloxacilina+gentamicina (nativa comunitaria) y vancomicina+gentamicina(+rifampicina) en prótesis/sanitaria; ajustar a la guía local chilena. Duración de S. viridans 4 sem (nativa) / 6 sem (prótesis) y cirugía por vegetación >10 mm con embolia (ESC).
- Profilaxis: alérgicos a penicilina con azitromicina/claritromicina/doxiciclina (ESC 2023, sin clindamicina); la pregunta del banco dice «macrólido». Alto riesgo incluye trasplante cardíaco con valvulopatía (AHA).
- Pregunta de 4.5: la de Jul 2025 Q136 define precoz como <2 meses; el texto usa «postcirugía».
- Preguntas de 1.6 (Banco Oficial AEE): 2 de las 4 las redacté yo (Holter con carga 22% y FEVI 40%; flecainida en cardiopatía estructural); revisar claves.
- 1.2 sección 5: «hasta 3 descargas consecutivas» en postoperatorio de cirugía cardíaca (ERC/STS), temperatura post-paro 32–37,5 °C, SpO2 92–98%: confirmar con la guía local.
- Los códigos 1.05.2.012, 1.05.5.010, 4.01.2.030 y 4.01.5.028 quedan también en 1.2; ver si siguen asignados a otros libros (neumología, cirugía) y quitar duplicados si se prefiere.
- Cambio de compilador: books/scripts/figspec_clases.cjs mergeAtlas ahora usa c.classId || c.id (cardiología no tiene classId); el atlas usa ids cardio-NN.


## obstetricia: dudas al completar el libro (18-oct-2026)

## Obstetricia: completar libro (oct-2026)
- ob-01 anemia: ferritina menor de 30 ng/mL y hierro terapéutico 100-200 mg/día de hierro elemental; confirmar contra la Guía Perinatal MINSAL (la norma de suplementación universal usa 40 mg).
- ob-02 redatación por ecografía: umbrales según ACOG (5/7/7/10/14/21 días); la guía MINSAL puede usar un umbral único de 7 días.
- ob-05 función renal: se repite creatinina mayor de 1,1 mg/dL como criterio de severidad (igual que el tema).
- ob-07 macrosomía: umbrales de cesárea electiva (4.500 g con diabetes, 5.000 g sin diabetes) son ACOG; norma chilena no los fija.
- ob-10 aborto provocado: no se redactó la obligación de denuncia (art. 175 Código Procesal Penal) frente al secreto profesional; requiere revisión jurídica. Solo se dice que se atiende sin juicio y con confidencialidad.
- ob-13 cesárea: cefazolina 2 g (3 g si 120 kg o más) y programación a las 39 semanas, de ACOG/FIGO; verificar con el protocolo local.
- ob-17 podálica: versión externa a las 36-37 semanas y cesárea electiva a las 39; prueba de trabajo de parto con criterios ACOG 2014 (4 h/6 h con oxitocina).
- ob-18 hemorragia genital aguda: dosis de ácido tranexámico 1 g c/8 h y esquema de anticonceptivo combinado c/8 h son de guías ginecológicas generales, no de norma MINSAL.
- ob-21 doxilamina más piridoxina: es primera línea en las preguntas EUNACOM (2017, 2022, 2023), pero conviene confirmar su disponibilidad comercial en Chile.
- ob-21 gemelar: bicorial a las 38 semanas y monocorial biamniótico a las 36 según la explicación de la pregunta EUNACOM Julio 2024; guías internacionales dicen 37 y 34-36.
- ob-21 cardiopatía: mortalidad de 30-50% en Eisenmenger y manejo de warfarina/HBPM resumidos; deben validarlos cardiología y obstetricia. Se citó «interrupción en las causales Ley 21.030» para la clase IV: la causal 1 exige riesgo vital presente o inminente, no todo riesgo alto.
- Pies de foto: no se agregó ninguna foto.


## Posibles claves erróneas del banco (detectadas al crear clases nuevas, 19-oct-2026)
- A · Dic 2022 P41: seis hemangiomas → clave RM espinal; libro y otras 3 preguntas piden ecografía abdominal.
- A · Dic 2022 P45: mordedura de araña (mismo caso que Ene 2023 P149) → clave Pseudomonas.
- A · Dic 2022 P38: edema bimaleolar por amlodipino en octogenario → clave «cambiar enalapril por losartán».
- A · Jul 2025 P96: IAM con angioplastia a 60 min → clave «trombolisis inmediata» (la explicación la condiciona a traslado >120 min).
- A · Ene 2023 (ob-11): dolor súbito FID + hipotensión → clave salpingitis/absceso tubo-ovárico; el cuadro parece ectópico roto.
- B · Dic 2017 P90: quiste epidérmico abscedado → clave antibiótico + drenaje; libro: drenaje, antibiótico solo si celulitis.
- B · Jul 2024 P47 (ped-11): clave cotrimoxazol; el libro nuevo indica azitromicina en disentería.

## Clases nuevas cirugia-19, 20, 21, resp-25, infecto-25, sp-15 (19-oct-2026)
- **infecto-25 · B (banco contra libro):** Julio 2013 P156 (adulto de 66 años con influenza) tiene como clave acetaminofeno; el libro indica oseltamivir en ≥ 65 años (grupo de riesgo). Descartada. Igual Julio 2017 P130 (niño de 4 años, influenza B, clave acetaminofeno; el libro incluye a los < 5 años entre los grupos de riesgo).
- **sp-15 · B (banco):** "demografía dinámica": Diciembre 2022 P153 da como clave la tasa de fecundidad (con mortalidad infantil de distractor) y Enero 2023 P1 da como clave la mortalidad infantil. Se contradicen; no se usaron. Dic 2022 P124 y Ago 2021 P4 ("la siguiente pirámide") no traen la figura.
- **cirugia-19 · C:** el libro da ITB < 0,9 como arterial y contraindica comprimir con ITB < 0,8; no dice qué hacer entre 0,8 y 0,9.
- **cirugia-20 · C:** el banco (Dic 2018 P53, Jul 2024 P117) responde "bridas" en obstrucción de operados bariátricos; el libro destaca la hernia interna de Petersen. No usadas.
- **resp-25 · C:** el libro no tiene preguntas reales (código sin banco); se usaron las 3 de práctica. Dice que los gases se corrigen por la temperatura del paciente "según el laboratorio": práctica discutida, no se enseña.
- **cirugia-21 · C:** una sola pregunta real (Dic 2019 P6, confianza 0,3); el resto de los códigos no tiene banco.

## Clases nuevas ped-23 a ped-28 (19-oct-2026)
- **ped-23 · A (banco):** Dic 2022 P79 (lactante de 4 meses con soplo holosistólico III-IV, hepatomegalia y crepitaciones) tiene clave «soplo funcional»; el cuadro es una CIV con insuficiencia cardíaca. Descartada. Dic 2024 P29 (FC 280, cardioversión) tiene la alternativa C y la explicación contaminadas con texto de otra pregunta; descartada.
- **ped-24 · A (banco):** Dic 2018 P40 (niña de 2 años, inconsciente, pupilas arreactivas) tiene clave «AINES», pero su propia explicación describe una intoxicación por tricíclicos. Dic 2024 P28 (organofosforado) tiene clave «Control sano habitual», incoherente con la explicación. Julio 2025 P81 (organofosforado): la clave A incluye lavado gástrico, que el libro no indica de rutina. Descartadas las tres.
- **ped-25 · A (banco):** Dic 2019 P167 (niño de 4 años con ronquido, obstrucción nasal y respiración bucal, e infecciones recurrentes): clave «rinitis alérgica»; la hipertrofia adenoidea explica mejor el cuadro y la explicación del banco lo reconoce. Descartada. Jul 2025 P55 (SCID): una alternativa describe la BCG como «inactivada»; la BCG es una vacuna viva. Se usó con aclaración en la voz.
- **ped-26 · C:** el libro no da cifras de recurrencia del mosaicismo ni de la translocación 21;21. Aparte, Ago 2021 P75 (translucencia nucal en embarazo de 41 años) trata la interrupción por causales y no se usó.
- **ped-27 · B (banco contra libro):** Dic 2022 P114 (niño de 3 años con prepucio irreductible): clave «corticoide tópico»; el libro y Ene 2023 P21 dicen que la fimosis fisiológica asintomática no se trata. No usada. Julio 2025 P62: la explicación del banco dice que el 90% es retráctil a los 5 años (el libro: a los 3 años); la clave (observar) coincide. Ago 2021 P154 explica que una sinequia complicada se libera «por separación manual con anestesia local»; el libro contraindica la separación manual salvo retención urinaria aguda.
- **ped-27 · C:** el banco real no tiene preguntas pediátricas de enuresis; se usó el caso del libro («Banco EUNACOM · Caso representativo»). La foto de sinequia vulvar de la biblioteca (ped-27/01, Nelson 580.5A) no se incluyó por mostrar genitales de una menor.
- **ped-28 · B (banco):** Jul 2015 P150 (subdural, fracturas costales posteriores, equimosis): clave «fondo de ojo»; la propia explicación del banco dice que lo urgente es operar el hematoma y que es una pregunta mala. Se usó con la clave del libro y la voz aclara que la neurocirugía se resuelve en paralelo.
- **ped-28 · C:** no hay preguntas reales pediátricas de entrevista (SPIKES), conductas de riesgo (CRAFFT) ni psiquiatría de enlace; se usaron los tres casos del libro con la etiqueta «Caso representativo». El libro indica examen físico completo «con el niño desnudo»; la voz dice «desvestido y con delicadeza».
