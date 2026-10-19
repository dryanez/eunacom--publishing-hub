// Clase 5.8 (Cardiología) — Aneurisma de aorta abdominal. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-36). Código 4.01.2.022 Aneurisma de aorta abdominal
// (Dx específico · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-36): Julio 2017 P65 (tumor pulsátil umbilical de 4-5 cm) y Diciembre 2025 P86 (AAA roto en riñón poliquístico:
// ecografía abdominal). Enunciados y alternativas copiados del banco (Diciembre 2025 P86: se repararon las ligaduras del PDF en «Ecografía»,
// «Ecocardiografía transesofágica» y «Resonancia magnética»; clave dudosa en un paciente hipotenso, que probablemente iría directo a eco FAST/TAC: anotada).
// El caso del libro (AAA de 5,8 cm) se usa como caso clínico de la clase.
// Fotos: sin foto clínica con crédito (FALTANTES_cardio_bloque_5.md). En movimiento: scenes/cardio_b5.html ?v=aaa (gráfico propio: diámetro,
// riesgo anual de rotura y umbrales).

module.exports = {
  "id": "cardio-36",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "La bomba de tiempo silenciosa del hombre mayor fumador: cuándo medir, cuándo vigilar y cuándo operar",
      "say": "Bienvenido. Vimos la disección de la aorta torácica. Hoy vamos a la aorta abdominal, donde el problema es otro: una dilatación silenciosa que casi nunca da síntomas hasta que se rompe, y la rotura mata a más de la mitad de los pacientes. El examen pregunta tres cosas: cómo se diagnostica, a qué tamaño se opera y cómo se reconoce la rotura."
    },
    {
      "type": "flow",
      "kicker": "Mecanismo",
      "title": "Una pared que se dilata y se tensa más",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "Aterosclerosis y tabaco",
          "s": "Degeneración de la media"
        },
        {
          "id": "b",
          "col": 1,
          "row": 1,
          "k": "mech",
          "t": "Dilatación ≥ 3 cm",
          "s": "Aorta infrarrenal"
        },
        {
          "id": "c",
          "col": 2,
          "row": 1,
          "k": "mech",
          "t": "Ley de Laplace",
          "s": "Más radio, más tensión"
        },
        {
          "id": "d",
          "col": 3,
          "row": 0,
          "k": "alert",
          "t": "Rotura",
          "s": "Shock hemorrágico"
        },
        {
          "id": "e",
          "col": 3,
          "row": 2,
          "k": "effect",
          "t": "Silencioso",
          "s": "Masa pulsátil indolora"
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
          "from": "b",
          "to": "e"
        }
      ],
      "steps": [
        {
          "show": [
            "a",
            "b"
          ],
          "note": "Infrarrenal, varón fumador",
          "say": "Un aneurisma de aorta abdominal es una dilatación permanente de tres centímetros o más, o más de la mitad del diámetro normal. En nueve de cada diez casos está bajo las arterias renales. Predomina en el hombre mayor de sesenta y cinco años, hipertenso y, sobre todo, fumador: el tabaco multiplica el riesgo por cinco. También se asocia al riñón poliquístico del adulto."
        },
        {
          "show": [
            "c",
            "d",
            "e"
          ],
          "note": "El tamaño decide el riesgo",
          "say": "Según la ley de Laplace, la tensión de la pared aumenta con el radio. Por eso, a mayor diámetro, más rápido crece y más riesgo de rotura. Casi siempre es asintomático, y se descubre como una masa pulsátil, expansiva e indolora, o por una ecografía hecha por otro motivo."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diagnóstico",
      "title": "Masa pulsátil y ecografía",
      "cards": [
        {
          "title": "Clínica",
          "tag": "Silencioso",
          "kind": "key",
          "items": [
            {
              "t": "Masa pulsátil, expansiva, indolora",
              "d": "Epigastrio o mesogastrio",
              "say": "En el examen, una masa pulsátil, expansiva e indolora en el epigastrio o el mesogastrio. Un ejemplo clásico: un hombre de setenta y siete años, diabético e hipertenso, con dolor abdominal inespecífico de meses y un tumor pulsátil de cuatro a cinco centímetros, sin signos peritoneales."
            },
            {
              "t": "Dolor lumbar o abdominal continuo",
              "d": "Alarma: expansión",
              "say": "Si aparece dolor lumbar o abdominal continuo, es un signo de alarma, porque indica expansión o rotura inminente."
            }
          ]
        },
        {
          "title": "Examen",
          "tag": "Eco primero",
          "kind": "criteria",
          "items": [
            {
              "t": "Ecografía abdominal",
              "d": "Tamizaje, diagnóstico y seguimiento; sens. > 95%",
              "say": "El examen de elección para el tamizaje, el diagnóstico y el seguimiento es la ecografía abdominal, rápida y sin radiación. Se recomienda una ecografía única en los hombres de sesenta y cinco a setenta y cinco años con antecedente de tabaquismo."
            },
            {
              "t": "AngioTAC para planificar",
              "d": "O ante sospecha de rotura estable",
              "say": "El angioTAC se pide para planificar la reparación, o ante una sospecha de rotura en un paciente estable."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "Diámetro, riesgo y umbrales",
      "images": [
        {
          "src": "animaciones/cardio-36/A1_diametro_riesgo_rotura.mp4",
          "label": "Diámetro y riesgo anual de rotura",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.8"
        }
      ],
      "steps": [
        {
          "note": "Hasta 5 cm el riesgo es bajo",
          "say": "El punto sigue el diámetro del aneurisma. Bajo tres centímetros la aorta es normal. Entre tres y cuatro y medio, el riesgo de rotura es muy bajo y se vigila con ecografía cada tres años, cada año o cada seis meses, según el tamaño."
        },
        {
          "note": "Desde 5,5 cm el riesgo se dispara",
          "say": "Al cruzar los cinco y medio centímetros, la curva se empina: el riesgo anual de rotura pasa a ser mayor que el riesgo de la cirugía, y el aneurisma se repara. Con siete centímetros, uno de cada cinco se rompe en un año."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Qué hacer",
      "title": "Vigilar o reparar",
      "cards": [
        {
          "title": "Se repara si",
          "tag": "Los umbrales",
          "kind": "alert",
          "items": [
            {
              "t": "≥ 5,5 cm en hombres (≥ 5,0 en mujeres)",
              "d": "EVAR o cirugía abierta",
              "say": "Se repara con un diámetro de cinco y medio centímetros o más en el hombre, o cinco en la mujer, que se rompe con menos tamaño."
            },
            {
              "t": "Crece > 0,5 cm en 6 meses",
              "d": "O > 1 cm al año",
              "say": "También si crece más de medio centímetro en seis meses, o más de uno en un año."
            },
            {
              "t": "Sintomático, sacular o infeccioso",
              "d": "Aunque sea más chico",
              "say": "Y si da síntomas, o si es sacular o infeccioso, aunque sea más pequeño."
            }
          ]
        },
        {
          "title": "Mientras no se repara",
          "tag": "Seguimiento",
          "kind": "key",
          "items": [
            {
              "t": "Eco: 3-3,9 cada 3 años; 4-4,9 cada año",
              "d": "5-5,4 cada 6 meses",
              "say": "La vigilancia es con ecografía: de tres a tres coma nueve centímetros, cada tres años; de cuatro a cuatro coma nueve, cada año; y de cinco a cinco coma cuatro, cada seis meses."
            },
            {
              "t": "Dejar de fumar, PA, estatina, aspirina",
              "d": "Evitar fluoroquinolonas",
              "say": "Lo más importante es dejar de fumar. Además, control de la presión, estatina y aspirina por el riesgo cardiovascular. Se evitan las fluoroquinolonas. El EVAR, con endoprótesis desde la femoral, tiene menos mortalidad inicial, pero exige vigilancia de por vida por las endofugas."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Rotura",
      "title": "La emergencia quirúrgica",
      "cards": [
        {
          "title": "Cuadro clínico",
          "tag": "Tríada",
          "kind": "alert",
          "items": [
            {
              "t": "Dolor súbito + masa pulsátil + shock",
              "d": "Abdomen o lumbar; irradia a ingle",
              "say": "La rotura se presenta con la tríada de dolor abdominal o lumbar súbito e intenso, masa pulsátil e hipotensión. A veces se confunde con un cólico renal, una pancreatitis o una diverticulitis. Un paciente con riñón poliquístico, dolor epigástrico intenso, hipotensión y masas palpables debe hacer pensar en un aneurisma roto, y el primer examen es la ecografía abdominal."
            }
          ]
        },
        {
          "title": "Conducta",
          "tag": "Pabellón",
          "kind": "pharma",
          "items": [
            {
              "t": "Laparotomía o EVAR de urgencia",
              "d": "Mortalidad 80-90% total",
              "say": "El manejo es quirúrgico de emergencia: laparotomía con control de la aorta, o EVAR de urgencia. La mortalidad es de ochenta a noventa por ciento, y la mitad muere antes de llegar."
            },
            {
              "t": "Hipotensión permisiva, poco cristaloide",
              "d": "Transfusión 1:1:1; avisar a cirugía vascular",
              "say": "Mientras tanto, hipotensión permisiva, con sistólica entre setenta y noventa, sin sobrecargar de líquidos, que aumentan el sangrado, y con hemoderivados. Se avisa de inmediato al cirujano vascular."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la masa pulsátil a vigilar, reparar o operar de urgencia."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Aneurisma de aorta abdominal: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Masa pulsátil indolora en un fumador mayor",
            "Ecografía abdominal",
            "TAC sin ecografía o cirugía directa"
          ],
          "say": "Masa pulsátil indolora en un fumador mayor: ecografía abdominal."
        },
        {
          "cells": [
            "AAA de 5,8 cm asintomático",
            "Reparar: derivar a cirugía vascular",
            "Control anual o anticoagular"
          ],
          "say": "Aneurisma de cinco coma ocho centímetros: se repara. Control anual o anticoagulación son errores."
        },
        {
          "cells": [
            "AAA de 4,5 cm estable",
            "Eco cada año",
            "Operar"
          ],
          "say": "Con cuatro y medio centímetros y estable, ecografía cada año. Operar es prematuro."
        },
        {
          "cells": [
            "Crece > 0,5 cm en 6 meses",
            "Reparar",
            "Esperar a 5,5 cm"
          ],
          "say": "Si crece más de medio centímetro en seis meses, se repara aunque no llegue a cinco y medio."
        },
        {
          "cells": [
            "Dolor + masa pulsátil + hipotensión",
            "Cirugía de emergencia",
            "Cristaloides en grandes volúmenes"
          ],
          "say": "Dolor, masa pulsátil e hipotensión: cirugía de emergencia, con hipotensión permisiva. Los grandes volúmenes aumentan el sangrado."
        },
        {
          "cells": [
            "Dolor desgarrante torácico + asimetría",
            "Disección",
            "Pensar en AAA"
          ],
          "say": "Un dolor desgarrante en el tórax con asimetría de pulsos es una disección, no un aneurisma abdominal."
        },
        {
          "cells": [
            "Mujer",
            "Umbral 5,0 cm",
            "Usar 5,5 cm"
          ],
          "say": "En la mujer el umbral es de cinco centímetros, porque se rompe con menos tamaño."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 68 años, fumador de 40 paquetes-año e hipertenso, asintomático. En un control se palpa una masa pulsátil, expansiva e indolora en el mesogastrio. La ecografía abdominal muestra un aneurisma infrarrenal de 5,8 cm de diámetro anteroposterior, con trombo mural, sin signos de rotura. PA 150/90 mmHg.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Derivar a cirugía vascular para reparación (EVAR o abierta), con angioTAC y control de factores de riesgo"
        },
        {
          "letter": "B",
          "text": "Control ecográfico anual"
        },
        {
          "letter": "C",
          "text": "Anticoagulación con warfarina"
        },
        {
          "letter": "D",
          "text": "Betabloqueador y control en 6 meses"
        },
        {
          "letter": "E",
          "text": "Alta sin controles porque está asintomático"
        }
      ],
      "correct": "A",
      "explanation": "El diámetro de 5,8 cm supera el umbral de reparación en el hombre (≥ 5,5 cm): se deriva a cirugía vascular para reparación electiva, con angioTAC para planificar. El control anual, la warfarina o las estatinas solas no corresponden a un aneurisma de este tamaño.",
      "say": {
        "stem": "Un hombre de sesenta y ocho años, fumador e hipertenso, sin síntomas. Se le palpa una masa pulsátil e indolora en el mesogastrio, y la ecografía muestra un aneurisma infrarrenal de cinco coma ocho centímetros, con trombo mural, sin signos de rotura.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: derivar a cirugía vascular para reparar; control ecográfico anual; warfarina; betabloqueador con control en seis meses; o alta sin controles. Piénsalo.",
        "answer": "Es la A. Cinco coma ocho supera el umbral de cinco y medio en el hombre, y se repara de manera electiva. La B tienta porque está asintomático, pero el síntoma no es el criterio: lo es el diámetro. La C es un error: el trombo mural no se anticoagula."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 65",
      "stem": "Un paciente de 77 años, con antecedente de diabetes mellitus tipo 2 e hipertesión arterial, consulta por dolor abdominal de tipo inespecífico, de 2 meses de evolución, sin otros síntomas. En su examen físico se palpa un tumor abdominal de 4 a 5 cm de diámetro, en la zona umbilical, pulsátil, sin signos peritoneales.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Trombosis mesentérica"
        },
        {
          "letter": "B",
          "text": "Tumor de colon"
        },
        {
          "letter": "C",
          "text": "Tumor de páncreas"
        },
        {
          "letter": "D",
          "text": "Disección aórtica"
        },
        {
          "letter": "E",
          "text": "Aneurisma aórtico abdominal"
        }
      ],
      "correct": "E",
      "explanation": "Un tumor pulsátil de 4 a 5 cm en la zona umbilical en un anciano hipertenso y diabético, con dolor abdominal inespecífico de meses, es un aneurisma aórtico abdominal. La disección aórtica es un cuadro agudo, y los tumores de colon o páncreas no son pulsátiles.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de setenta y siete años, diabético e hipertenso, con dolor abdominal inespecífico de dos meses. En el examen se palpa un tumor de cuatro a cinco centímetros en la zona umbilical, pulsátil y sin signos peritoneales.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: trombosis mesentérica; tumor de colon; tumor de páncreas; disección aórtica; o aneurisma aórtico abdominal. Piénsalo.",
        "answer": "Es la E. Un tumor pulsátil en la zona umbilical de un anciano hipertenso es un aneurisma de aorta abdominal. La D tienta por el compromiso aórtico, pero la disección es un cuadro agudo y desgarrante, y esto lleva dos meses."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 86",
      "stem": "Un paciente de 41 años, con antecedente de riñón poliquístico del adulto, acude al servicio de urgencia por dolor epigástrico intenso asociado a malestar general. Al examen físico presenta frecuencia cardíaca 105 por minuto, presión arterial 90/60 mmHg, temperatura 36,2 °C y examen abdominal con abdomen depresible, con presencia de signos peritoneales esbozados en abdomen superior. Se palpan masas en ambos flancos y en el epigastrio. Se solicitan exámenes de laboratorio que muestran amilasa 160 U/L (valor normal 60 - 140 U/L), glicemia 110 mg/dL, GOT 50 U/L, creatinina: 2,5 mg/dL, BUN: 48 mg/dL y troponinas negativas.",
      "question": "¿Cuál es el examen imagenológico de elección para iniciar el estudio en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Ecografía abdominal"
        },
        {
          "letter": "B",
          "text": "PieloTAC"
        },
        {
          "letter": "C",
          "text": "UroTAC"
        },
        {
          "letter": "D",
          "text": "Ecocardiografía transesofágica"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética nuclear de abdomen"
        }
      ],
      "correct": "A",
      "explanation": "Dolor epigástrico intenso con hipotensión, taquicardia, signos peritoneales y masas palpables en un paciente con riñón poliquístico del adulto (que se asocia a aneurismas aórticos) sugiere un aneurisma de aorta abdominal complicado. El examen para iniciar el estudio, rápido y a la cabecera, es la ecografía abdominal.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de cuarenta y un años con riñón poliquístico del adulto, con dolor epigástrico intenso y malestar. La frecuencia es de ciento cinco, la presión de noventa sobre sesenta, y hay signos peritoneales esbozados. Se palpan masas en ambos flancos y en el epigastrio. Las troponinas son negativas.",
        "question": "¿Cuál es el examen imagenológico de elección para iniciar el estudio?",
        "options": "Las opciones: ecografía abdominal; pieloTAC; uroTAC; ecocardiografía transesofágica; o resonancia magnética de abdomen. Piénsalo.",
        "answer": "Es la A. Un paciente con poliquistosis renal, hipotenso, con dolor epigástrico y una masa en el epigastrio tiene un aneurisma de aorta abdominal complicado, y el examen para empezar es la ecografía abdominal. Las masas de los flancos son los riñones poliquísticos. La D se refiere a la disección, que da dolor torácico."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: aneurisma de aorta abdominal",
      "cards": [
        {
          "title": "Diagnosticar",
          "tag": "Silencioso",
          "kind": "key",
          "items": [
            {
              "t": "Dilatación ≥ 3 cm, infrarrenal",
              "d": "Varón > 65 años, fumador",
              "say": "Cerremos con las reglas de oro. Aneurisma de aorta abdominal es una dilatación de tres centímetros o más, infrarrenal, en el hombre mayor fumador. Casi siempre es asintomático, con una masa pulsátil indolora."
            },
            {
              "t": "Ecografía abdominal",
              "d": "Tamizaje y seguimiento",
              "say": "El examen es la ecografía abdominal, tanto para el tamizaje como para el seguimiento."
            }
          ]
        },
        {
          "title": "Decidir",
          "tag": "Umbrales",
          "kind": "alert",
          "items": [
            {
              "t": "Reparar si ≥ 5,5 cm (mujer ≥ 5,0)",
              "d": "O crece > 0,5 cm en 6 meses, o duele",
              "say": "Se repara con cinco y medio centímetros o más, cinco en la mujer, si crece más de medio centímetro en seis meses, o si da síntomas."
            },
            {
              "t": "Rotura: dolor + masa pulsátil + shock",
              "d": "Cirugía de emergencia",
              "say": "La rotura es una emergencia quirúrgica, con hipotensión permisiva. Si te llevas una sola idea de hoy: el tamaño decide, y dejar de fumar es lo más importante. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Aneurisma de aorta abdominal: medir, vigilar, reparar",
    "root": {
      "k": "start",
      "t": "Masa pulsátil o hallazgo",
      "s": "Varón > 65 años fumador",
      "say": "Se palpa una masa pulsátil indolora en el abdomen de un hombre mayor fumador, o se encuentra un aneurisma en un examen por otra razón. Se confirma con una ecografía abdominal.",
      "kids": [
        [
          "Dolor + masa + hipotensión",
          {
            "k": "alert",
            "t": "Rotura",
            "s": "Cirugía de emergencia",
            "say": "Si hay dolor abdominal o lumbar súbito, masa pulsátil e hipotensión, es una rotura: cirugía de emergencia, con hipotensión permisiva, sin sobrecargar de líquidos, y aviso inmediato a cirugía vascular.",
            "kids": []
          }
        ],
        [
          "Estable",
          {
            "k": "q",
            "t": "¿Diámetro ≥ 5,5 cm, crece o duele?",
            "s": "Mujer ≥ 5,0 cm",
            "say": "Si está estable, se mide el diámetro. Se repara si es de cinco y medio centímetros o más, cinco en la mujer, si crece más de medio centímetro en seis meses, o si da síntomas.",
            "kids": [
              [
                "Sí",
                {
                  "k": "do",
                  "t": "Reparación electiva",
                  "s": "EVAR o cirugía abierta",
                  "say": "Se deriva a cirugía vascular para reparación con EVAR o cirugía abierta, con angioTAC para planificar.",
                  "kids": []
                }
              ],
              [
                "No",
                {
                  "k": "ok",
                  "t": "Vigilancia ecográfica",
                  "s": "3 años · 1 año · 6 meses",
                  "say": "Si no cumple criterios, se vigila con ecografía: cada tres años si mide de tres a tres coma nueve, cada año de cuatro a cuatro coma nueve, y cada seis meses de cinco a cinco coma cuatro. Se deja de fumar y se controla la presión.",
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
