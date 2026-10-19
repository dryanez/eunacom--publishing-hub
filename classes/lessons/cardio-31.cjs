// Clase 5.3 (Cardiología) — Hipertensión arterial secundaria: cuándo sospecharla y cómo estudiarla. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-31). Código 1.01.1.016 Hipertensión arterial secundaria
// (Dx sospecha · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-31 y --search "feocromocitoma|hiperaldosteronismo|renovascular"): Diciembre 2025 P171
// (HTA grave en joven: aldosterona), Julio 2019 P32 (hipopotasemia: relación aldosterona/renina), Diciembre 2018 P1 (soplo abdominal en joven:
// HTA renovascular) y Diciembre 2022 P51 (MAPA con triple terapia: espironolactona y estudio). Enunciados y alternativas copiados del banco
// (Diciembre 2025 P171: se repararon las ligaduras «2» y «:» del PDF en las alternativas).
// No usadas: Enero 2023 P81 (repite Diciembre 2022 P51), Agosto 2021 P136 (cardio-29), Diciembre 2022 P121 y Enero 2023 P82 (diagnóstico por
// imagen suprarrenal, quedan como respaldo), Diciembre 2024 P59 (sin enunciado utilizable), Diciembre 2018 P91 y Diciembre 2022 P3 (coartación
// operada con insuficiencia aórtica: cardio-27).
// Fotos en contexto: TAC de adenoma suprarrenal (CT & MRI Pathology: A Pocket Atlas, p. 382) y gammagrafía con MIBG de un feocromocitoma
// (AMIR Endocrinología, p. 58). En movimiento: scenes/cardio_b5.html ?v=raas (gráfico propio: renina, aldosterona y potasio).

module.exports = {
  "id": "cardio-31",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "Qué hallazgo hace sospechar una causa, qué examen pedir y qué hacer mientras se deriva",
      "say": "Bienvenido. En la clase pasada aprendimos a diagnosticar la hipertensión. Hoy vemos al uno de cada diez hipertensos que tiene una causa corregible. El médico general no resuelve la causa, pero sí tiene que sospecharla y pedir el examen correcto. El examen pregunta tres historias clásicas: potasio bajo, creatinina que sube con un IECA, y cefalea con sudor y palpitaciones."
    },
    {
      "type": "flow",
      "kicker": "Cuándo sospechar",
      "title": "Las banderas rojas",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 0,
          "k": "cause",
          "t": "Joven < 30 años",
          "s": "Sin obesidad ni herencia"
        },
        {
          "id": "b",
          "col": 0,
          "row": 2,
          "k": "cause",
          "t": "HTA resistente",
          "s": "3 fármacos con diurético"
        },
        {
          "id": "c",
          "col": 1,
          "row": 1,
          "k": "alert",
          "t": "Sospecha de causa secundaria",
          "s": "Descartar iatrogenia primero"
        },
        {
          "id": "d",
          "col": 2,
          "row": 0,
          "k": "effect",
          "t": "Daño desproporcionado",
          "s": "Retinopatía, albuminuria"
        },
        {
          "id": "e",
          "col": 2,
          "row": 2,
          "k": "effect",
          "t": "Creatinina ↑ con IECA",
          "s": "Pista de arteria renal"
        },
        {
          "id": "f",
          "col": 3,
          "row": 1,
          "k": "refer",
          "t": "Estudio dirigido",
          "s": "Y derivar"
        }
      ],
      "edges": [
        {
          "from": "a",
          "to": "c"
        },
        {
          "from": "b",
          "to": "c"
        },
        {
          "from": "c",
          "to": "d"
        },
        {
          "from": "c",
          "to": "e"
        },
        {
          "from": "d",
          "to": "f"
        },
        {
          "from": "e",
          "to": "f"
        }
      ],
      "steps": [
        {
          "show": [
            "a",
            "b",
            "c"
          ],
          "note": "Joven, grave o resistente",
          "say": "Se sospecha una causa secundaria en el hipertenso que comienza antes de los treinta años sin obesidad ni herencia, en la hipertensión muy grave o de salto brusco, y en la resistente, la que no cede con tres fármacos, uno de ellos un diurético, con buena adherencia."
        },
        {
          "show": [
            "d",
            "e"
          ],
          "note": "Daño desproporcionado y alza de creatinina",
          "say": "También si el daño de órgano blanco es desproporcionado para la hipertensión que tiene, o si la creatinina sube al iniciar un inhibidor de la enzima convertidora o un ARA dos."
        },
        {
          "show": [
            "f"
          ],
          "note": "Antes, descartar lo más frecuente",
          "say": "Pero antes se descartan las causas más frecuentes: mala técnica de medición, bata blanca, mala adherencia, exceso de sal y fármacos que suben la presión, como antiinflamatorios, corticoides, anticonceptivos, descongestionantes, cocaína y regaliz. Retirarlos suele bastar. Y el estudio es dirigido por la pista, no se piden exámenes endocrinos de rutina."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Hiperaldosteronismo primario",
      "title": "Síndrome de Conn",
      "cards": [
        {
          "title": "Clínica",
          "tag": "Causa endocrina más frecuente",
          "kind": "key",
          "items": [
            {
              "t": "HTA resistente + hipopotasemia + alcalosis",
              "d": "Solo la mitad tiene K bajo",
              "say": "Es la causa endocrina más frecuente. Un adenoma o una hiperplasia de la suprarrenal produce aldosterona sin control, y eso da hipertensión, potasio bajo y alcalosis metabólica, con debilidad, calambres y cefalea. Ojo: solo la mitad tiene el potasio bajo. Un potasio normal no lo descarta."
            },
            {
              "t": "Renina suprimida",
              "d": "Por la expansión de volumen",
              "say": "La aldosterona retiene sodio y agua, expande el volumen y la renina se suprime. Esa es la clave del examen."
            }
          ]
        },
        {
          "title": "Estudio y tratamiento",
          "tag": "ARR",
          "kind": "pharma",
          "items": [
            {
              "t": "Aldosterona / renina > 20-30",
              "d": "Luego TAC de suprarrenales",
              "say": "El tamizaje es la relación aldosterona sobre actividad de renina plasmática, que es sospechosa sobre veinte a treinta. Después se hace una TAC de suprarrenales. Mira este corte: una masa suprarrenal pequeña y homogénea, como el adenoma que produce aldosterona.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-31/01_adenoma-suprarrenal-tc__ctmri-pocket-atlas_p382.jpg",
                "label": "Adenoma suprarrenal en TAC",
                "at": "Mira este corte",
                "credit": "CT & MRI Pathology: A Pocket Atlas, p. 382"
              }
            },
            {
              "t": "Adenoma: adrenalectomía",
              "d": "Hiperplasia: espironolactona",
              "say": "El adenoma se opera, con una adrenalectomía laparoscópica. Si es hiperplasia bilateral, se usa espironolactona o eplerenona. Y en la hipertensión resistente la espironolactona es el cuarto fármaco aunque el estudio no esté terminado."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "Renina, aldosterona y potasio",
      "images": [
        {
          "src": "animaciones/cardio-31/A1_renina_aldosterona.mp4",
          "label": "Normal, Conn y estenosis renal",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.3"
        }
      ],
      "steps": [
        {
          "note": "Conn: aldosterona alta, renina baja",
          "say": "Compara las tres columnas. En la normal, la relación entre aldosterona y renina es baja. En el hiperaldosteronismo primario la aldosterona está muy alta y la renina suprimida, el potasio cae, y la relación supera veinte a treinta."
        },
        {
          "note": "Estenosis renal: renina alta",
          "say": "En la estenosis de la arteria renal, en cambio, el riñón isquémico libera renina, que sube la aldosterona. Es un hiperaldosteronismo secundario: renina alta, y por eso la relación no es tan alta. Esa es la diferencia que separa las dos causas."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "HTA renovascular",
      "title": "Estenosis de la arteria renal",
      "cards": [
        {
          "title": "Quién y cómo se sospecha",
          "tag": "Dos poblaciones",
          "kind": "key",
          "items": [
            {
              "t": "Mujer < 35: displasia fibromuscular",
              "d": "> 60 años: aterosclerosis",
              "say": "Hay dos poblaciones. La mujer joven, por displasia fibromuscular, y el mayor de sesenta años fumador, por aterosclerosis. Se sospecha ante hipertensión grave de inicio brusco, un soplo abdominal en el epigastrio o el flanco, y episodios de edema pulmonar súbito."
            },
            {
              "t": "Creatinina ↑ > 30% tras IECA",
              "d": "Soplo sistodiastólico abdominal",
              "say": "El dato más preguntado: la creatinina que sube más de treinta por ciento después de iniciar un IECA o un ARA dos. La angiotensina dos mantenía la filtración del riñón isquémico, y al bloquearla, la filtración cae."
            }
          ]
        },
        {
          "title": "Examen y tratamiento",
          "tag": "No invasivo primero",
          "kind": "pharma",
          "items": [
            {
              "t": "Eco-Doppler de arterias renales",
              "d": "Confirmar: angioTAC o angiorresonancia",
              "say": "El examen de elección es el eco-Doppler de las arterias renales, y se confirma con angioTAC o angiorresonancia. Se suspende el IECA."
            },
            {
              "t": "Displasia: angioplastía",
              "d": "Ateroesclerosis: médico; revascularizar si hay deterioro",
              "say": "La displasia fibromuscular se trata con angioplastía con balón. La aterosclerótica se maneja con tratamiento médico, y se revasculariza solo si hay deterioro progresivo de la función renal, edema pulmonar recurrente o hipertensión refractaria."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Feocromocitoma",
      "title": "Cefalea, sudor y palpitaciones",
      "cards": [
        {
          "title": "Clínica",
          "tag": "Paroxística",
          "kind": "alert",
          "items": [
            {
              "t": "Cefalea + sudor + palpitaciones",
              "d": "Crisis de HTA lábil, palidez, temblor",
              "say": "Es un tumor que produce catecolaminas. Es raro, pero se pregunta mucho. La tríada es cefalea pulsátil intensa, sudoración profusa y palpitaciones, en crisis de hipertensión, con palidez y temblor. Entre las crisis, la presión puede ser normal."
            },
            {
              "t": "Regla de los 10",
              "d": "Bilateral, extrasuprarrenal, maligno, familiar",
              "say": "La regla de los diez dice que cerca de diez por ciento son bilaterales, extrasuprarrenales, malignos o familiares, como en el MEN dos."
            }
          ]
        },
        {
          "title": "Estudio y manejo",
          "tag": "Metanefrinas",
          "kind": "pharma",
          "items": [
            {
              "t": "Metanefrinas plasmáticas u orina 24 h",
              "d": "Luego TAC/RM y MIBG",
              "say": "El tamizaje de elección son las metanefrinas libres en plasma o fraccionadas en orina de veinticuatro horas, con sensibilidad cercana a noventa y siete por ciento. Se localiza con TAC o resonancia, y si hace falta, con una gammagrafía con MIBG. Mira esta gammagrafía: la captación intensa en la zona suprarrenal es el tumor.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-31/02_feocromocitoma-gammagrafia-mibg__amir-endocrino_p58.jpg",
                "label": "Gammagrafía con MIBG",
                "at": "Mira esta gammagrafía",
                "credit": "AMIR Endocrinología, p. 58"
              }
            },
            {
              "t": "Alfabloqueo 10-14 días, luego cirugía",
              "d": "Nunca betabloqueador solo",
              "say": "El tratamiento es la resección, precedida de diez a catorce días de bloqueo alfa. Solo después se agrega un betabloqueador si hay taquicardia. Nunca un betabloqueador solo: deja sin oposición la vasoconstricción alfa y precipita una crisis."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Otras causas",
      "title": "Apnea, coartación y endocrinas",
      "cards": [
        {
          "title": "SAHOS y coartación",
          "tag": "Frecuentes",
          "kind": "key",
          "items": [
            {
              "t": "SAHOS: obeso, ronquidos, non-dipper",
              "d": "Polisomnografía y CPAP",
              "say": "La apnea del sueño es la causa no endocrina más frecuente de hipertensión resistente. Se sospecha en el obeso de cuello ancho, con ronquidos, pausas y somnolencia, con patrón non-dipper en el monitoreo. Se confirma con polisomnografía y se trata con CPAP."
            },
            {
              "t": "Coartación: pulsos femorales débiles",
              "d": "PA brazos > piernas",
              "say": "La coartación de la aorta se sospecha en el joven con pulsos femorales débiles y retrasados, y presión mayor en los brazos que en las piernas. Se confirma con ecocardiograma y angioTAC."
            }
          ]
        },
        {
          "title": "Endocrinas y renales",
          "tag": "Menos frecuentes",
          "kind": "normal",
          "items": [
            {
              "t": "Cushing, tiroides, paratiroides",
              "d": "Cortisol libre urinario; TSH; calcio",
              "say": "El síndrome de Cushing se tamiza con cortisol libre urinario o supresión con dexametasona, y los trastornos tiroideos con la TSH. El hiperparatiroidismo da hipercalcemia."
            },
            {
              "t": "Enfermedad renal parenquimatosa",
              "d": "Creatinina, RAC, sedimento, ecografía",
              "say": "Y la enfermedad renal parenquimatosa es la causa más frecuente en el adulto: se ve en la creatinina, la albuminuria, el sedimento y la ecografía renal."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la bandera roja al examen que corresponde."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "HTA secundaria: dato, examen, error",
      "head": [
        "Dato",
        "Examen o conducta",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Potasio bajo sin diuréticos",
            "Aldosterona / renina",
            "Metanefrinas o Doppler renal"
          ],
          "say": "Potasio bajo sin diuréticos: relación aldosterona renina. Pedir metanefrinas es mezclar historias."
        },
        {
          "cells": [
            "Soplo abdominal; creatinina ↑ con IECA",
            "Eco-Doppler renal",
            "Subir la dosis del IECA"
          ],
          "say": "Soplo abdominal o creatinina que sube con el IECA: eco-Doppler de arterias renales. Subir el IECA empeora el riñón."
        },
        {
          "cells": [
            "Cefalea + sudor + palpitaciones",
            "Metanefrinas",
            "Betabloqueador solo"
          ],
          "say": "Cefalea, sudor y palpitaciones: metanefrinas. Y el betabloqueador solo precipita una crisis, porque primero va el bloqueo alfa."
        },
        {
          "cells": [
            "Triple terapia con PA alta",
            "Espironolactona + estudio",
            "Agregar betabloqueador"
          ],
          "say": "Triple terapia con presión alta: se agrega espironolactona y se estudia. Agregar un betabloqueador no es la respuesta."
        },
        {
          "cells": [
            "Obeso, ronquidos, non-dipper",
            "Polisomnografía + CPAP",
            "Solo más antihipertensivos"
          ],
          "say": "Obeso con ronquidos y patrón non-dipper: polisomnografía y CPAP. Solo agregar fármacos no corrige la causa."
        },
        {
          "cells": [
            "Potasio normal con HTA resistente",
            "No descarta Conn",
            "Descartar el hiperaldosteronismo"
          ],
          "say": "El potasio normal no descarta un hiperaldosteronismo: solo la mitad tiene potasio bajo."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 44 años con HTA resistente a enalapril 20 mg c/12 h y amlodipino 10 mg al día (PA 165/102 mmHg). Refiere calambres y debilidad de las piernas. Creatinina 0,9 mg/dL, sodio 142 mEq/L, potasio 2,8 mEq/L (no usa diuréticos) y bicarbonato 30 mEq/L. Sin edemas, sin ronquidos, pulsos femorales normales.",
      "question": "¿Qué examen corresponde solicitar para continuar el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Relación aldosterona / actividad de renina plasmática"
        },
        {
          "letter": "B",
          "text": "Metanefrinas plasmáticas"
        },
        {
          "letter": "C",
          "text": "Polisomnografía"
        },
        {
          "letter": "D",
          "text": "Ecocardiograma y angioTAC de aorta"
        },
        {
          "letter": "E",
          "text": "Cortisol libre urinario"
        }
      ],
      "correct": "A",
      "explanation": "HTA resistente con hipopotasemia espontánea y alcalosis metabólica es la presentación clásica del hiperaldosteronismo primario. El tamizaje es la relación aldosterona / actividad de renina plasmática; si es > 20-30 se deriva para confirmar y hacer TAC de suprarrenales.",
      "say": {
        "stem": "Un hombre de cuarenta y cuatro años con hipertensión resistente a enalapril y amlodipino a dosis altas, con una presión de ciento sesenta y cinco sobre ciento dos. Tiene calambres. El potasio es de dos coma ocho, sin diuréticos, y el bicarbonato está en treinta. No ronca y los pulsos femorales son normales.",
        "question": "¿Qué examen corresponde solicitar?",
        "options": "Las opciones: relación aldosterona renina; metanefrinas; polisomnografía; ecocardiograma y angioTAC de aorta; o cortisol libre urinario. Piénsalo.",
        "answer": "Es la A. Hipertensión resistente con potasio bajo sin diuréticos y alcalosis es un hiperaldosteronismo primario, y el tamizaje es la relación aldosterona renina. Las metanefrinas serían para crisis con sudor y palpitaciones, y los pulsos femorales normales descartan la coartación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 171",
      "stem": "Un paciente de 37 años acude a chequeo médico en el que destaca presión arterial de 170/110 mmHg. No tiene obesidad ni antecedentes familiares de hipertensión. Se solicita un monitoreo ambulatorio de presión arterial de 24 horas, confirmándose el diagnóstico de hipertensión arterial, por lo que se inicia losartán 50 mg al día y amlodipino 5 mg al día. Se controla un mes después y el paciente refiere que ha mantenido presiones arteriales cercanas a 160/100 mmHg. Los exámenes de laboratorio muestran creatininemia: 0,9 mg/dL, BUN: 12 mg/dL, sodio plasmático: 140 mEq/L y potasio plasmático: 4,4 mEq/L.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Aumentar la dosis de los fármacos"
        },
        {
          "letter": "B",
          "text": "Agregar un diurético al tratamiento"
        },
        {
          "letter": "C",
          "text": "Solicitar ecografía Doppler renal"
        },
        {
          "letter": "D",
          "text": "Solicitar niveles plasmáticos de aldosterona"
        },
        {
          "letter": "E",
          "text": "Solicitar metanefrinas y catecolaminas en orina"
        }
      ],
      "correct": "D",
      "explanation": "Es una HTA grave y refractaria en un joven sin obesidad ni antecedentes familiares: se estudia una causa secundaria. Por la edad, el hiperaldosteronismo primario es más probable que la HTA renovascular, y la mayoría es normopotasémica; se solicita la aldosterona (idealmente con la actividad de renina).",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de treinta y siete años, sin obesidad ni herencia, con presión de ciento setenta sobre ciento diez, confirmada con monitoreo de veinticuatro horas. Parte con losartán y amlodipino, y al mes sigue en ciento sesenta sobre cien. La creatinina y los electrolitos son normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: aumentar las dosis; agregar un diurético; ecografía Doppler renal; niveles de aldosterona; o metanefrinas y catecolaminas. Piénsalo.",
        "answer": "Es la D. Un joven con hipertensión grave sin obesidad ni herencia, que no responde, tiene una causa secundaria. Por la edad, lo más probable es el hiperaldosteronismo, y recuerda que la mayoría tiene potasio normal. La clínica no es paroxística, así que las metanefrinas no son la primera opción."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 32",
      "stem": "Un paciente de 35 años consulta por cefalea y debilidad muscular de algunos meses de evolución. Al examen físico presenta FC: 70x’, PA: 160/110 mmHg, sin otros hallazgos. Se solicitan exámenes que muestran creatininemia de 0,9 mg/dl, sodio: 138 mEq/l, potasio: 3,0 mEq/l y cloro: 98 mEq/l.",
      "question": "¿Cuál es el examen más adecuado para proseguir el estudio en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Doppler de arterias renales"
        },
        {
          "letter": "B",
          "text": "Holter de presión arterial"
        },
        {
          "letter": "C",
          "text": "Determinación de metanefrinas urinarias"
        },
        {
          "letter": "D",
          "text": "Relación aldosterona / actividad de renina plasmática"
        },
        {
          "letter": "E",
          "text": "Cortisol libre urinario de 24 horas"
        }
      ],
      "correct": "D",
      "explanation": "Un joven con hipertensión, cefalea e hipopotasemia con debilidad muscular tiene un hiperaldosteronismo primario hasta que se demuestre lo contrario. El tamizaje es la relación aldosterona / actividad de renina. Las metanefrinas se piden ante crisis adrenérgicas, el cortisol libre ante rasgos cushingoides y el Doppler renal ante soplo abdominal o alza de creatinina.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un hombre de treinta y cinco años con cefalea y debilidad muscular de meses. La presión es de ciento sesenta sobre ciento diez. La creatinina es normal, el sodio de ciento treinta y ocho y el potasio de tres.",
        "question": "¿Cuál es el examen más adecuado para proseguir el estudio?",
        "options": "Las opciones: Doppler de arterias renales; Holter de presión; metanefrinas urinarias; relación aldosterona renina; o cortisol libre urinario. Piénsalo.",
        "answer": "Es la D. Hipertensión con debilidad e hipopotasemia, en un joven, es un hiperaldosteronismo primario, y el tamizaje es la relación aldosterona renina. El Holter de presión sirve para confirmar la hipertensión, pero aquí lo que falta es la causa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 1",
      "stem": "Un paciente de 18 años consulta por cefalea de algunas semanas de evolución, que ha ido en aumento, hasta alcanzar gran intensidad. En su examen físico destaca presión arterial 170/100 mmHg, FC: 72x’ y presencia de un soplo abdominal, en el flanco derecho.",
      "question": "El diagnóstico más probable es:",
      "options": [
        {
          "letter": "A",
          "text": "Disección aórtica"
        },
        {
          "letter": "B",
          "text": "Aneurisma aórtico abdominal"
        },
        {
          "letter": "C",
          "text": "Hipertensión esencial"
        },
        {
          "letter": "D",
          "text": "Hipertensión renovascular"
        },
        {
          "letter": "E",
          "text": "Accidente vascular encefálico"
        }
      ],
      "correct": "D",
      "explanation": "Un joven con cefalea, presión de 170/100 mmHg y un soplo abdominal en el flanco derecho tiene una HTA renovascular clásica (displasia fibromuscular a esa edad). Se confirma con eco-Doppler de arterias renales o angioTAC.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un joven de dieciocho años con cefalea progresiva y gran intensidad. La presión es de ciento setenta sobre cien, la frecuencia de setenta y dos, y tiene un soplo abdominal en el flanco derecho.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: disección aórtica; aneurisma de aorta abdominal; hipertensión esencial; hipertensión renovascular; o accidente vascular encefálico. Piénsalo.",
        "answer": "Es la D. Un joven con hipertensión grave y un soplo abdominal tiene una estenosis de la arteria renal, a esa edad por displasia fibromuscular. La hipertensión esencial no da soplo, y un aneurisma o una disección no se presentan así."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 51",
      "stem": "Un paciente de 40 años, con antecedente de hipertensión arterial diagnosticada hace 6 meses, de difícil manejo, acude a control. Toma hidroclorotiazida 50 mg/día, losartán 100 mg/día y amlodipino 10 mg/día. Refiere varias crisis hipertensivas, a pesar de una buena adherencia a su tratamiento farmacológico. En el examen físico, su presión arterial actual es 158/97, que es similar a los valores que habitualmente presenta en su casa; su frecuencia cardíaca es 65x’ y su examen cardiopulmonar muestra ritmo regular en dos tiempos, sin soplos y murmullo pulmonar presente, sin ruidos agregados. Trae un monitoreo de presión arterial con presión arterial promedio de 160/101 mmHg, con que muestra cargas tensionales diurnas de 77% sistólica y 63% diastólica y cargas tensionales nocturnas de 67% sistólica y 56% diastólica.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Reemplazar el losartán por un IECA"
        },
        {
          "letter": "B",
          "text": "Reemplazar la hidroclorotiazida por un diurético antialdosterónico"
        },
        {
          "letter": "C",
          "text": "Agregar doxazosina al tratamiento"
        },
        {
          "letter": "D",
          "text": "Agregar espironolactona y solicitar exámenes para descartar una hipertensión secundaria"
        },
        {
          "letter": "E",
          "text": "Reemplazar el amlodipino por diltiazem"
        }
      ],
      "correct": "D",
      "explanation": "Un hipertenso de 40 años con tres fármacos a dosis plenas, incluido un diurético, y un MAPA que confirma una presión promedio de 160/101 con cargas tensionales elevadas, tiene una HTA resistente verdadera. Se agrega espironolactona como cuarto fármaco y se estudia en paralelo una HTA secundaria.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un hombre de cuarenta años con hipertensión de difícil manejo, con hidroclorotiazida, losartán y amlodipino a dosis altas y buena adherencia. Ha tenido varias crisis. Su monitoreo de veinticuatro horas promedia ciento sesenta sobre ciento uno, con cargas tensionales altas de día y de noche.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reemplazar el losartán por un IECA; reemplazar la tiazida por un antialdosterónico; agregar doxazosina; agregar espironolactona y estudiar una causa secundaria; o reemplazar el amlodipino por diltiazem. Piénsalo.",
        "answer": "Es la D. Con tres fármacos a dosis altas, un diurético incluido, y un monitoreo que confirma la presión alta, es una hipertensión resistente verdadera. Se agrega espironolactona y se estudia la causa secundaria. La B tienta, pero la espironolactona se agrega, no reemplaza al diurético."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: HTA secundaria",
      "cards": [
        {
          "title": "Sospechar",
          "tag": "Banderas rojas",
          "kind": "key",
          "items": [
            {
              "t": "Joven, grave, resistente o daño desproporcionado",
              "d": "Antes: descartar iatrogenia",
              "say": "Cerremos con las reglas de oro. Se sospecha causa secundaria en el joven, en la hipertensión grave o resistente, y ante daño de órgano blanco desproporcionado. Antes se retiran los fármacos que suben la presión."
            },
            {
              "t": "Soplo o creatinina ↑ con IECA: Doppler renal",
              "d": "Potasio bajo: aldosterona/renina",
              "say": "Potasio bajo, relación aldosterona renina. Soplo abdominal o creatinina que sube con el IECA, eco-Doppler renal."
            }
          ]
        },
        {
          "title": "Actuar",
          "tag": "Qué hacer",
          "kind": "alert",
          "items": [
            {
              "t": "Cefalea + sudor + palpitaciones: metanefrinas",
              "d": "Alfa antes que beta",
              "say": "Cefalea, sudor y palpitaciones, metanefrinas, y el bloqueo alfa va antes que el beta."
            },
            {
              "t": "Resistente: espironolactona y derivar",
              "d": "Obeso con ronquidos: SAHOS",
              "say": "Y la hipertensión resistente lleva espironolactona y estudio. Si te llevas una sola idea de hoy: cada causa secundaria tiene una pista y un examen, y el estudio se dirige por la pista. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "HTA secundaria: de la bandera roja al examen",
    "root": {
      "k": "start",
      "t": "Sospecha de HTA secundaria",
      "s": "Joven, grave o resistente",
      "say": "Llega un hipertenso con una bandera roja: joven, con presión muy grave o resistente, o con daño desproporcionado. Primero se retiran los fármacos que suben la presión y se confirma con monitoreo.",
      "kids": [
        [
          "Potasio bajo, alcalosis",
          {
            "k": "alert",
            "t": "Hiperaldosteronismo",
            "s": "Aldosterona / renina > 20-30",
            "say": "Si hay potasio bajo sin diuréticos y alcalosis, se sospecha hiperaldosteronismo y se pide la relación aldosterona renina. Si es alta, se deriva para TAC de suprarrenales.",
            "kids": []
          }
        ],
        [
          "Soplo abdominal; creatinina ↑ con IECA",
          {
            "k": "do",
            "t": "Estenosis de arteria renal",
            "s": "Eco-Doppler renal / angioTAC",
            "say": "Si hay un soplo abdominal o la creatinina sube con un IECA, se sospecha estenosis de la arteria renal: eco-Doppler, y se suspende el IECA.",
            "kids": []
          }
        ],
        [
          "Cefalea + sudor + palpitaciones",
          {
            "k": "refer",
            "t": "Feocromocitoma",
            "s": "Metanefrinas; alfabloqueo antes de cirugía",
            "say": "Si hay crisis con cefalea, sudor y palpitaciones, se piden metanefrinas, y se bloquea el receptor alfa antes de operar.",
            "kids": []
          }
        ],
        [
          "Obeso, ronquidos, non-dipper",
          {
            "k": "ok",
            "t": "SAHOS",
            "s": "Polisomnografía y CPAP",
            "say": "Si es obeso con ronquidos y patrón non-dipper, se sospecha apnea del sueño: polisomnografía y CPAP.",
            "kids": []
          }
        ]
      ]
    }
  }
};
