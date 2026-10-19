// Clase 5.9 (Cardiología) — Tromboembolismo pulmonar. Guion escrito a mano (estándar Módulo 1, modelo cardio-14; tier 3).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-37). Códigos (books/data/v3_codemap.json): 1.01.1.006 Embolia pulmonar
// (Dx sospecha · Tx inicial · Seguimiento derivar), 1.05.2.005 Embolia pulmonar masiva (sospecha · inicial · derivar) y 1.01.4.002 AngioTAC de tórax y aorta (emplea informe).
// Preguntas reales (class_questions.cjs cardio-37 y --search "embolia pulmonar|tromboembolismo pulmonar|dímero|wells"): Julio 2016 P140 (puérpera con hemoptisis),
// Julio 2024 P134 (anticonceptivos y viaje: angioTAC), Diciembre 2018 P99 (TEP masivo: ecocardiograma) y Diciembre 2025 P8 (TEP masivo: trombólisis).
// Enunciados y alternativas copiados del banco. Coherente con resp-19 (dataset_neumologia): Wells ≤ 4 con dímero D, Wells > 4 con angioTAC, alteplasa 100 mg en 2 h, DOAC.
// No usadas: Julio 2025 P86 (angioTAC; repite Julio 2024 P134), Julio 2013 P83 (diagnóstico posquirúrgico: respaldo), Agosto 2021 P147 (cáncer de pulmón con derrame:
// enunciado depende de una radiografía), Enero 2023 P4 y Diciembre 2022 P145 (certificado de defunción: medicina legal), Diciembre 2018 P97 (diagnóstico, repite
// Julio 2016 P140).
// Foto en contexto: angioTAC pulmonar con defectos de llenado (MedSchoolBro Pulmonology, p. 15). En movimiento: scenes/cardio_b5.html ?v=tep
// (gráfico propio: obstrucción, presión pulmonar y shock obstructivo).

module.exports = {
  "id": "cardio-37",
  "tier": 3,
  "slides": [
    {
      "type": "cover",
      "subtitle": "Sospechar, ordenar el estudio con Wells, reconocer el TEP masivo y anticoagular con DOAC",
      "say": "Bienvenido. Vimos la disección aórtica y el aneurisma, y cerramos el bloque con la enfermedad tromboembólica venosa. El tromboembolismo pulmonar es la tercera causa de muerte cardiovascular y la que más se diagnostica tarde, porque sus síntomas se parecen a los de muchas enfermedades. Desde la cardiología lo miramos como la falla aguda de un ventrículo derecho que se enfrenta a una arteria obstruida. El examen pregunta el algoritmo diagnóstico, el TEP masivo y el tratamiento."
    },
    {
      "type": "flow",
      "kicker": "Mecanismo",
      "title": "Del trombo en la pierna al shock obstructivo",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "Tríada de Virchow",
          "s": "Estasis, lesión, hipercoagulabilidad"
        },
        {
          "id": "b",
          "col": 1,
          "row": 1,
          "k": "mech",
          "t": "TVP proximal",
          "s": "> 90% de los émbolos"
        },
        {
          "id": "c",
          "col": 2,
          "row": 1,
          "k": "mech",
          "t": "Obstrucción pulmonar",
          "s": "Poscarga del VD ↑"
        },
        {
          "id": "d",
          "col": 3,
          "row": 0,
          "k": "effect",
          "t": "VD dilatado",
          "s": "Troponina, BNP ↑"
        },
        {
          "id": "e",
          "col": 3,
          "row": 2,
          "k": "alert",
          "t": "Shock obstructivo",
          "s": "PAS < 90: TEP masivo"
        }
      ],
      "edges": [
        {
          "from": "a",
          "to": "b"
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
        }
      ],
      "steps": [
        {
          "show": [
            "a",
            "b"
          ],
          "note": "Más del 90% viene de las piernas",
          "say": "Los factores de riesgo son los de la tríada de Virchow: estasis, como la inmovilización, la cirugía de cadera o rodilla y los viajes largos; lesión del endotelio; e hipercoagulabilidad, como el cáncer, el embarazo, el puerperio, los anticonceptivos y las trombofilias. Más del noventa por ciento de los émbolos nace en las venas proximales de las piernas."
        },
        {
          "show": [
            "c",
            "d",
            "e"
          ],
          "note": "Lo grave es la falla del ventrículo derecho",
          "say": "El émbolo obstruye el lecho pulmonar y sube bruscamente la poscarga del ventrículo derecho. Ese ventrículo no está hecho para presiones altas: se dilata, empuja el tabique hacia la izquierda y el ventrículo izquierdo se llena menos. Si la falla es grande, cae el gasto y aparece el shock obstructivo del TEP masivo."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clínica",
      "title": "Qué sospechar y qué muestran los exámenes",
      "cards": [
        {
          "title": "Presentación",
          "tag": "Inespecífica",
          "kind": "key",
          "items": [
            {
              "t": "Disnea súbita + dolor pleurítico",
              "d": "Taquicardia, hemoptisis, síncope",
              "say": "La presentación típica es disnea de inicio súbito, dolor pleurítico, taquicardia y, a veces, hemoptisis o síncope. Una puérpera con disnea, tos hemoptoica y baja saturación tiene un tromboembolismo hasta que se demuestre lo contrario. Lo característico es la desproporción: mucha disnea o hipoxemia con un examen pulmonar casi normal."
            },
            {
              "t": "Signos de TVP en la mitad",
              "d": "Pantorrilla asimétrica y dolorosa",
              "say": "Y casi la mitad tiene signos de trombosis venosa en las piernas."
            }
          ]
        },
        {
          "title": "Exámenes",
          "tag": "Apoyo",
          "kind": "criteria",
          "items": [
            {
              "t": "ECG: taquicardia; S1Q3T3, BCRD",
              "d": "T negativas en V1-V4",
              "say": "El electrocardiograma suele mostrar solo taquicardia sinusal. El patrón de S uno, Q tres, T tres, el bloqueo completo de rama derecha y las ondas T negativas de V uno a V cuatro son específicos, pero poco frecuentes."
            },
            {
              "t": "Eco: VD dilatado, signo de McConnell",
              "d": "Troponina y BNP elevados",
              "say": "El ecocardiograma muestra un ventrículo derecho dilatado y con movimiento anormal de su pared libre, y la troponina y el BNP se elevan. Los gases muestran hipoxemia con hipocapnia, y la radiografía suele ser normal."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diagnóstico",
      "title": "Wells, dímero D y angioTAC",
      "cards": [
        {
          "title": "Score de Wells",
          "tag": "Probabilidad pretest",
          "kind": "criteria",
          "items": [
            {
              "t": "TVP +3 · Dx alternativo menos probable +3",
              "d": "FC > 100, cirugía, antecedente: +1,5 c/u",
              "say": "El score de Wells suma tres puntos por signos de trombosis venosa, tres si el tromboembolismo es más probable que otro diagnóstico, uno y medio por cada uno de estos: frecuencia mayor de cien, cirugía o inmovilización reciente y antecedente de trombosis o embolia, y un punto por hemoptisis y otro por cáncer activo."
            },
            {
              "t": "Wells ≤ 4: improbable · > 4: probable",
              "d": "Decide el primer examen",
              "say": "Con cuatro puntos o menos, el tromboembolismo es improbable. Con más de cuatro, es probable."
            }
          ]
        },
        {
          "title": "Conducta",
          "tag": "Se pregunta",
          "kind": "key",
          "items": [
            {
              "t": "Wells ≤ 4: dímero D",
              "d": "Negativo descarta; positivo: angioTAC",
              "say": "Si es improbable, se pide el dímero D. Si es negativo, se descarta, con valor predictivo negativo sobre noventa y nueve por ciento. Si es positivo, angioTAC. Ojo: el dímero D es poco específico y se eleva en el embarazo, el cáncer y la cirugía."
            },
            {
              "t": "Wells > 4: angioTAC directo",
              "d": "Sin dímero D",
              "say": "Si es probable, no se pide dímero D, porque un negativo no alcanzaría para descartar. Se pide directamente el angioTAC de arterias pulmonares. Mira este corte: los defectos de llenado en las arterias pulmonares son los émbolos.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-37/01_angiotac-tep-defectos-de-llenado__medschoolbro-pulm_p15.jpg",
                "label": "AngioTAC: émbolos",
                "at": "Mira este corte",
                "credit": "MedSchoolBro Pulmonology, p. 15"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Casos especiales",
      "title": "Cuando el angioTAC no es la primera opción",
      "cards": [
        {
          "title": "Inestable",
          "tag": "Masivo",
          "kind": "alert",
          "items": [
            {
              "t": "Ecocardiograma a la cabecera",
              "d": "VD dilatado y shock = TEP masivo",
              "say": "En el paciente inestable, con shock, el examen para continuar el estudio es el ecocardiograma a la cabecera, que muestra la sobrecarga del ventrículo derecho y descarta otras causas de shock. No se espera un angioTAC si el paciente no puede trasladarse."
            }
          ]
        },
        {
          "title": "Contraindicación del contraste",
          "tag": "Alternativa",
          "kind": "criteria",
          "items": [
            {
              "t": "Cintigrama V/Q",
              "d": "Alergia, VFG < 30, embarazo",
              "say": "Si hay alergia grave al contraste, insuficiencia renal con filtración bajo treinta o embarazo, se hace un cintigrama de ventilación y perfusión. Y una trombosis en el eco-Doppler de las piernas basta para tratar."
            },
            {
              "t": "PERC: descarta sin dímero D",
              "d": "Solo con probabilidad muy baja",
              "say": "Con probabilidad muy baja y todos los criterios PERC negativos, se descarta sin dímero D."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "De la obstrucción al shock",
      "images": [
        {
          "src": "animaciones/cardio-37/A1_obstruccion_shock.mp4",
          "label": "Obstrucción, presión pulmonar y shock",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.9"
        }
      ],
      "steps": [
        {
          "note": "La presión pulmonar sube y luego cae",
          "say": "El eje horizontal es cuánto del lecho pulmonar está obstruido. La línea violeta es la presión de la arteria pulmonar: sube al principio, porque el ventrículo derecho compensa. La línea azul es la función de ese ventrículo, y la roja, la presión arterial sistémica."
        },
        {
          "note": "Al claudicar el VD, la PAS cae",
          "say": "Pasado cierto punto, el ventrículo derecho claudica: su función se desploma, la presión pulmonar ya no puede subir, y la presión sistémica cae bajo noventa. Es el TEP masivo, y se define por la hemodinamia y no por el tamaño del émbolo."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Estratificación",
      "title": "Masivo, intermedio y bajo riesgo",
      "cards": [
        {
          "title": "Alto riesgo",
          "tag": "Masivo",
          "kind": "alert",
          "items": [
            {
              "t": "PAS < 90 o shock",
              "d": "Mortalidad > 15-30%",
              "say": "El TEP de alto riesgo o masivo es el que tiene inestabilidad hemodinámica: presión sistólica bajo noventa, o caída de cuarenta o más durante quince minutos, vasopresores o paro. Su mortalidad es de más de quince a treinta por ciento."
            }
          ]
        },
        {
          "title": "Estable",
          "tag": "sPESI y VD",
          "kind": "key",
          "items": [
            {
              "t": "sPESI = 0: bajo riesgo",
              "d": "Alta precoz o ambulatorio con DOAC",
              "say": "En el paciente estable se usa el sPESI: edad sobre ochenta, cáncer, insuficiencia cardíaca o EPOC, frecuencia de ciento diez o más, presión sistólica bajo cien y saturación bajo noventa. Con cero puntos, el riesgo es bajo y puede ir a la casa con un anticoagulante oral."
            },
            {
              "t": "sPESI ≥ 1 + VD y troponina: intermedio-alto",
              "d": "Uno solo: intermedio-bajo",
              "say": "Con uno o más puntos se evalúa el ventrículo derecho y la troponina. Si ambos están alterados, es riesgo intermedio-alto, y se hospitaliza con monitorización. Si solo uno, intermedio-bajo."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Tratamiento",
      "title": "Fibrinólisis y anticoagulación",
      "cards": [
        {
          "title": "TEP masivo",
          "tag": "Reperfundir",
          "kind": "pharma",
          "items": [
            {
              "t": "Heparina no fraccionada + alteplasa",
              "d": "100 mg en 2 h; 0,6 mg/kg en paro",
              "say": "En el TEP masivo se da heparina no fraccionada y fibrinólisis sistémica: alteplasa cien miligramos en dos horas, o un bolo de cero coma seis miligramos por kilo en quince minutos si hay paro inminente. El tenecteplase es una alternativa aceptada."
            },
            {
              "t": "Contraindicación: embolectomía",
              "d": "O trombectomía por catéter",
              "say": "Las contraindicaciones son las mismas del infarto: hemorragia intracraneal previa, accidente isquémico en los últimos seis meses, cirugía mayor o sangrado activo. En ese caso, embolectomía quirúrgica o trombectomía por catéter."
            },
            {
              "t": "Poco volumen, noradrenalina",
              "d": "Evitar la intubación",
              "say": "Se da poco volumen, hasta quinientos mililitros, noradrenalina para sostener la presión, y se evita la intubación, que reduce el retorno venoso."
            }
          ]
        },
        {
          "title": "TEP estable",
          "tag": "Anticoagular",
          "kind": "pharma",
          "items": [
            {
              "t": "Apixabán 10 mg c/12 h por 7 días, luego 5 mg",
              "d": "Rivaroxabán 15 mg c/12 h por 21 días, luego 20 mg",
              "say": "En el paciente estable, la primera línea son los anticoagulantes orales directos, sin heparina previa: apixabán diez miligramos cada doce horas por siete días y luego cinco, o rivaroxabán quince miligramos cada doce horas por veintiún días y luego veinte miligramos al día. Mientras se completa el estudio, enoxaparina uno por kilo cada doce horas."
            },
            {
              "t": "HBPM en cáncer y embarazo",
              "d": "Warfarina en SAF e IRC grave",
              "say": "En el cáncer y en el embarazo se prefiere la heparina de bajo peso molecular. La warfarina es la elección en el síndrome antifosfolípido y la insuficiencia renal grave. No se fibrinoliza al paciente estable."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Duración y prevención",
      "title": "Cuánto tiempo anticoagular",
      "cards": [
        {
          "title": "Duración",
          "tag": "Según la causa",
          "kind": "criteria",
          "items": [
            {
              "t": "3 meses si fue provocado",
              "d": "Cirugía, yeso, inmovilización",
              "say": "La duración es de tres meses si el tromboembolismo fue provocado por un factor transitorio, como una cirugía o una inmovilización. Se suspende el anticonceptivo hormonal."
            },
            {
              "t": "6 meses a indefinida si no fue provocado",
              "d": "Recurrente, cáncer activo o SAF",
              "say": "Y de seis meses a indefinida si fue no provocado, recurrente, asociado a cáncer activo o a síndrome antifosfolípido, evaluando siempre el riesgo de sangrado."
            }
          ]
        },
        {
          "title": "Seguimiento y prevención",
          "tag": "A largo plazo",
          "kind": "key",
          "items": [
            {
              "t": "Disnea persistente: HP tromboembólica crónica",
              "d": "Eco y cintigrama V/Q a los 3-6 meses",
              "say": "A los tres a seis meses, si persiste la disnea, se descarta la hipertensión pulmonar tromboembólica crónica con un ecocardiograma y un cintigrama."
            },
            {
              "t": "Tromboprofilaxis hospitalaria",
              "d": "Movilización, compresión, enoxaparina 40 mg",
              "say": "Y la mejor medida es prevenir: movilización precoz, compresión neumática y enoxaparina cuarenta miligramos al día en el paciente quirúrgico o médico de riesgo."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la sospecha de tromboembolismo al tratamiento según el riesgo."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "TEP: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Wells ≤ 4",
            "Dímero D",
            "AngioTAC directo"
          ],
          "say": "Wells de cuatro o menos: se pide dímero D."
        },
        {
          "cells": [
            "Wells > 4",
            "AngioTAC directo",
            "Dímero D"
          ],
          "say": "Wells de más de cuatro: angioTAC directo. Pedir dímero D es el error."
        },
        {
          "cells": [
            "Shock + disnea + ingurgitación yugular",
            "Ecocardiograma; alteplasa si VD dilatado",
            "Esperar el angioTAC"
          ],
          "say": "Shock con yugulares: ecocardiograma y fibrinólisis. No se espera un escáner."
        },
        {
          "cells": [
            "Estable, sPESI = 0",
            "DOAC; alta precoz",
            "Fibrinolizar"
          ],
          "say": "Paciente estable con sPESI cero: anticoagulante oral y alta precoz. Fibrinolizar es el error."
        },
        {
          "cells": [
            "TEP provocado por cirugía",
            "Anticoagular 3 meses",
            "Indefinida"
          ],
          "say": "Provocado por una cirugía: tres meses. La anticoagulación indefinida es para el no provocado."
        },
        {
          "cells": [
            "Contraindicación de contraste o embarazo",
            "Cintigrama V/Q",
            "AngioTAC igual"
          ],
          "say": "Con contraindicación del contraste o en el embarazo, cintigrama de ventilación y perfusión."
        },
        {
          "cells": [
            "Cáncer o embarazo",
            "HBPM",
            "DOAC o warfarina"
          ],
          "say": "En el cáncer y el embarazo, heparina de bajo peso molecular. En el embarazo, los anticoagulantes orales están prohibidos."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Mujer de 34 años, usuaria de anticonceptivos orales combinados, que hace 4 días viajó 12 horas en avión. Consulta por dolor torácico pleurítico derecho de inicio súbito, tos con estrías de sangre y disnea. PA 120/80 mmHg, FC 108 lpm, SatO₂ 93%. La pantorrilla derecha tiene 4 cm más de diámetro que la izquierda, con calor y dolor.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "AngioTAC de arterias pulmonares, y anticoagulación con un DOAC (suspender el anticonceptivo)"
        },
        {
          "letter": "B",
          "text": "Dímero D y alta si es negativo"
        },
        {
          "letter": "C",
          "text": "Fibrinólisis con alteplasa 100 mg"
        },
        {
          "letter": "D",
          "text": "Radiografía de tórax y control en 48 horas"
        },
        {
          "letter": "E",
          "text": "Cintigrama V/Q como primer examen"
        }
      ],
      "correct": "A",
      "explanation": "Wells = 3 (signos de TVP) + 3 (TEP más probable) + 1,5 (FC > 100) + 1 (hemoptisis) = 8,5: probabilidad alta. No se pide dímero D: angioTAC directo. Está estable (PAS 120), por lo que no corresponde fibrinólisis: anticoagulación (DOAC), suspensión del anticonceptivo y duración de al menos 3 meses por ser provocado.",
      "say": {
        "stem": "Una mujer de treinta y cuatro años que toma anticonceptivos y viajó doce horas en avión hace cuatro días. Tiene dolor pleurítico, tos con sangre y disnea. La presión es normal, la frecuencia de ciento ocho y la saturación de noventa y tres. La pantorrilla derecha está hinchada, caliente y dolorosa.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: angioTAC y anticoagulación con un DOAC; dímero D con alta si es negativo; fibrinólisis; radiografía y control; o cintigrama como primer examen. Piénsalo.",
        "answer": "Es la A. Los puntos de Wells suman ocho y medio: probabilidad alta, así que se salta el dímero D y se pide el angioTAC. Como está estable, se anticoagula y no se fibrinoliza. La B es la trampa: con probabilidad alta, el dímero D no sirve."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 140",
      "stem": "Puérpera de 15 días, inicia disnea y tos, asociada a expectoración, hemoptoica. Al examen pulmonar tiene murmullo pulmonar presente, con escasos crépitos y satura 90% a FiO2 ambiental.",
      "question": "El diagnóstico más probable es:",
      "options": [
        {
          "letter": "A",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "B",
          "text": "Neumonía adquirida en la comunidad"
        },
        {
          "letter": "C",
          "text": "Neumonía intrahospitalaria"
        },
        {
          "letter": "D",
          "text": "Tuberculosis pulmonar"
        },
        {
          "letter": "E",
          "text": "VIH"
        }
      ],
      "correct": "A",
      "explanation": "Una puérpera con disnea, tos hemoptoica y saturación de 90% tiene el puerperio como factor de riesgo de enfermedad tromboembólica: el diagnóstico más probable es el TEP. La neumonía y la tuberculosis no se explican por un puerperio sin fiebre ni exposición, y el murmullo pulmonar casi normal con hipoxemia es la desproporción característica del TEP.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una puérpera de quince días comienza con disnea y tos con expectoración hemoptoica. El murmullo pulmonar está presente, con escasos crépitos, y satura noventa por ciento con aire ambiental.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: tromboembolismo pulmonar; neumonía de la comunidad; neumonía intrahospitalaria; tuberculosis pulmonar; o VIH. Piénsalo.",
        "answer": "Es la A. El puerperio es un estado de hipercoagulabilidad, y la desproporción entre la hipoxemia y un examen pulmonar casi normal orienta al tromboembolismo. La B tienta por la expectoración, pero no hay fiebre ni foco."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 134",
      "stem": "Una paciente consulta al servicio de urgencias por disnea y malestar de 2 horas de evolución. Refiere un viaje reciente en avión desde Europa hace 12 horas y es usuaria de anticonceptivos orales. Al examen físico, tiene presión arterial: 110/70 mmHg, frecuencia cardíaca: 100x’ y saturación arterial de oxígeno: 90%, su auscultación cardiopulmonar es normal, al igual que el resto de su examen físico. Se solicita un electrocardiograma que muestra taquicardia sinusal a 120 latidos por minuto.",
      "question": "¿Cuál es el examen de elección para continuar con el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Dímero D"
        },
        {
          "letter": "B",
          "text": "Ecocardiograma"
        },
        {
          "letter": "C",
          "text": "AngioTAC de tórax"
        },
        {
          "letter": "D",
          "text": "Péptido natriurético cerebral"
        },
        {
          "letter": "E",
          "text": "Electrocardiograma Holter de 24 horas"
        }
      ],
      "correct": "C",
      "explanation": "Una paciente con anticonceptivos orales y un viaje reciente en avión, taquicardia y SatO₂ de 90%, sin otro diagnóstico más probable, cumple al menos dos criterios de Wells: la probabilidad no es baja y obliga a confirmar con imágenes. El examen de elección en un paciente estable es el angioTAC de tórax; el dímero D no sirve para descartar con esta probabilidad.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente con disnea y malestar de dos horas. Viajó en avión desde Europa hace doce horas y usa anticonceptivos. La presión es de ciento diez sobre setenta, la frecuencia de cien y la saturación de noventa. El electrocardiograma muestra una taquicardia sinusal de ciento veinte.",
        "question": "¿Cuál es el examen de elección para continuar el estudio?",
        "options": "Las opciones: dímero D; ecocardiograma; angioTAC de tórax; péptido natriurético; o Holter de veinticuatro horas. Piénsalo.",
        "answer": "Es la C. Con taquicardia y sin otro diagnóstico más probable, la probabilidad no es baja, y el examen de elección en una paciente estable es el angioTAC. La A es la trampa: el dímero D se pide solo con probabilidad baja o intermedia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 99",
      "stem": "Un paciente masculino de 60 años, con antecedente de hipertensión arterial crónica, diabetes y dislipidemia, de larga data, en tratamiento oral. Desde hace 2 meses está en quimioterapia por cáncer de colon. Hoy presenta un síncope luego de levantarse de la cama y se asocia a disnea y dolor torácico. Su FC: 120x’, PA: 90/50 mmHg, FR: 32x’ y saturación de oxígeno: 93%. Su examen pulmonar es inespecífico. Se solicita electrocardiograma que muestra un bloqueo completo de rama derecha, con alteraciones inespecíficas de la repolarización.",
      "question": "¿Cuál es el examen de elección para continuar el estudio en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de tórax"
        },
        {
          "letter": "B",
          "text": "TAC de tórax"
        },
        {
          "letter": "C",
          "text": "Dímero D"
        },
        {
          "letter": "D",
          "text": "Ecocardiograma"
        },
        {
          "letter": "E",
          "text": "AngioTAC de tórax"
        }
      ],
      "correct": "D",
      "explanation": "Síncope, disnea y dolor torácico en un paciente con cáncer en quimioterapia, con taquicardia, hipotensión (90/50), taquipnea y bloqueo de rama derecha, es un TEP masivo con compromiso hemodinámico. En el paciente inestable se estudia con ecocardiograma, que muestra la sobrecarga del ventrículo derecho, y no con el angioTAC (de elección en el TEP no masivo).",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un hombre de sesenta años, hipertenso y diabético, en quimioterapia por un cáncer de colon desde hace dos meses. Tiene un síncope al levantarse de la cama, con disnea y dolor torácico. La frecuencia es de ciento veinte, la presión de noventa sobre cincuenta, la frecuencia respiratoria de treinta y dos y la saturación de noventa y tres. El electrocardiograma muestra un bloqueo completo de rama derecha.",
        "question": "¿Cuál es el examen de elección para continuar el estudio?",
        "options": "Las opciones: radiografía de tórax; TAC de tórax; dímero D; ecocardiograma; o angioTAC de tórax. Piénsalo.",
        "answer": "Es la D. Es un TEP masivo, por la hipotensión, el síncope y el bloqueo de rama derecha. En el paciente inestable se hace un ecocardiograma, que muestra la sobrecarga del ventrículo derecho, y no se traslada al escáner. La E es la trampa clásica: el angioTAC es de elección en el TEP no masivo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 8",
      "stem": "Un paciente de 60 años, fumador de 20 paquetes-año y con antecedente de trombosis venosa profunda hace 10 años, presenta un cuadro de disnea y malestar general de 7 días de evolución, que empeoró súbitamente hace unas horas, presentando un síncope con recuperación posterior. Al examen físico destaca presión arterial 70/40 mmHg, frecuencia cardíaca 150 lpm, frecuencia respiratoria 40 rpm y saturación de oxígeno de 86%. Se observa ingurgitación yugular y se constata que está desorientado. Se solicita un electrocardiograma, que muestra una taquicardia sinusal y se realiza un AngioTAC, que muestra defectos de llenado en ambas arterias pulmonares.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Trombólisis con tenecteplase"
        },
        {
          "letter": "B",
          "text": "Trombólisis con estreptoquinasa"
        },
        {
          "letter": "C",
          "text": "Heparina endovenosa"
        },
        {
          "letter": "D",
          "text": "Trombectomía abierta quirúrgica"
        },
        {
          "letter": "E",
          "text": "Trombectomía intraarterial con catéter"
        }
      ],
      "correct": "A",
      "explanation": "Síncope, hipotensión (70/40), taquicardia, hipoxemia, ingurgitación yugular y desorientación, con defectos de llenado en ambas arterias pulmonares: TEP masivo. El tratamiento de elección es la trombólisis sistémica (se prefieren los trombolíticos modernos, como el tenecteplase, sobre la estreptoquinasa). La heparina sola es insuficiente, y la trombectomía queda para quien tiene contraindicación de trombólisis.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de sesenta años, fumador, con antecedente de trombosis venosa profunda, con una semana de disnea que empeoró bruscamente, con un síncope. La presión es de setenta sobre cuarenta, la frecuencia de ciento cincuenta, la saturación de ochenta y seis, con ingurgitación yugular y desorientación. El angioTAC muestra defectos de llenado en ambas arterias pulmonares.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: trombólisis con tenecteplase; trombólisis con estreptoquinasa; heparina endovenosa; trombectomía abierta quirúrgica; o trombectomía con catéter. Piénsalo.",
        "answer": "Es la A. Hipotensión severa, hipoxemia y compromiso de conciencia con defectos de llenado bilaterales: TEP masivo, y se fibrinoliza. Se prefiere un trombolítico moderno, como el tenecteplase, y no la estreptoquinasa. La C tienta, pero la heparina sola no reperfunde."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: tromboembolismo pulmonar",
      "cards": [
        {
          "title": "Diagnóstico",
          "tag": "Probabilidad primero",
          "kind": "key",
          "items": [
            {
              "t": "Wells ≤ 4: dímero D · Wells > 4: angioTAC",
              "d": "Contraste contraindicado: V/Q",
              "say": "Cerremos con las reglas de oro. Con Wells de cuatro o menos, dímero D; si es negativo, se descarta. Con más de cuatro, angioTAC directo, sin dímero D."
            },
            {
              "t": "Inestable: ecocardiograma",
              "d": "VD dilatado = TEP masivo",
              "say": "Si el paciente está inestable, ecocardiograma a la cabecera."
            }
          ]
        },
        {
          "title": "Tratamiento",
          "tag": "Según el riesgo",
          "kind": "alert",
          "items": [
            {
              "t": "Masivo: HNF + alteplasa 100 mg en 2 h",
              "d": "Contraindicación: embolectomía",
              "say": "El TEP masivo se trata con heparina y alteplasa cien miligramos en dos horas, o con embolectomía si hay contraindicación."
            },
            {
              "t": "Estable: DOAC 3 meses a indefinida",
              "d": "HBPM en cáncer y embarazo",
              "say": "El paciente estable recibe un anticoagulante oral directo, tres meses si fue provocado y más tiempo si no. Si te llevas una sola idea de hoy: el tromboembolismo masivo se define por el shock y no por el tamaño del émbolo, y el paciente estable no se fibrinoliza. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Tromboembolismo pulmonar: del diagnóstico a la terapia según el riesgo",
    "root": {
      "k": "start",
      "t": "Sospecha de TEP",
      "s": "Disnea, dolor pleurítico, factor de riesgo",
      "say": "Llega un paciente con disnea súbita, dolor pleurítico, taquicardia y un factor de riesgo. Se da oxígeno si hay hipoxemia y se anticoagula de inmediato si la sospecha es alta.",
      "kids": [
        [
          "PAS < 90 o shock",
          {
            "k": "alert",
            "t": "TEP de alto riesgo",
            "s": "Ecocardiograma a la cabecera",
            "say": "Si hay shock, se hace un ecocardiograma a la cabecera. Un ventrículo derecho dilatado confirma el TEP masivo.",
            "kids": [
              [
                "Sin contraindicación",
                {
                  "k": "refer",
                  "t": "HNF + alteplasa",
                  "s": "100 mg en 2 horas",
                  "say": "Se da heparina no fraccionada y alteplasa, cien miligramos en dos horas.",
                  "kids": []
                }
              ],
              [
                "Con contraindicación",
                {
                  "k": "do",
                  "t": "Embolectomía o trombectomía",
                  "s": "Cirugía o catéter",
                  "say": "Si la fibrinólisis está contraindicada, se hace una embolectomía quirúrgica o una trombectomía con catéter.",
                  "kids": []
                }
              ]
            ]
          }
        ],
        [
          "Estable",
          {
            "k": "q",
            "t": "Probabilidad pretest (Wells)",
            "s": "≤ 4 o > 4",
            "say": "Si está estable, se calcula la probabilidad con el score de Wells.",
            "kids": [
              [
                "Wells ≤ 4",
                {
                  "k": "do",
                  "t": "Dímero D",
                  "s": "Negativo descarta; positivo angioTAC",
                  "say": "Con Wells de cuatro o menos, dímero D: si es negativo, se descarta; si es positivo, se pide el angioTAC.",
                  "kids": []
                }
              ],
              [
                "Wells > 4",
                {
                  "k": "ok",
                  "t": "AngioTAC directo",
                  "s": "Anticoagular, sPESI y troponina",
                  "say": "Con Wells mayor de cuatro, angioTAC directo. Confirmado, se estratifica con el sPESI, la troponina y el ventrículo derecho, y se anticoagula con un DOAC: apixabán o rivaroxabán.",
                  "kids": []
                }
              ]
            ]
          }
        ]
      ]
    }
  }
};
