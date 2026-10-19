// Clase 5.10 (Cardiología) — Trombosis venosa profunda. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-38). Código 4.01.1.049 Trombosis venosa profunda y tromboflebitis
// (Dx específico · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs --search "trombosis venosa|TVP|flegmasia|enoxaparina"): Diciembre 2019 P54 (TVP + TTPA prolongado + VDRL: síndrome
// antifosfolípido) y Diciembre 2018 P42 (valor predictivo negativo del dímero D). Enunciados y alternativas copiados del banco.
// No usadas: Diciembre 2017 P51 (repite Diciembre 2019 P54), Diciembre 2024 P149 y P150 (enunciados rotos: «Estudio TVP??» y preguntas pegadas), Julio 2019 P30
// (embarazo con TVP previa: ginecología; la clave HBPM es razonable pero el enunciado admite vigilancia), Julio 2013 P83 (TEP posquirúrgico: cardio-37).
// Se agregó una pregunta del libro (eco-Doppler con compresión como examen confirmatorio) con la etiqueta «Banco EUNACOM · Caso representativo».
// Foto en contexto: TVP de la pierna derecha (Wikimedia Commons, CC BY-SA 3.0). En movimiento: scenes/cardio_b5.html ?v=tvp (gráfico propio: eco-Doppler con compresión).

module.exports = {
  "id": "cardio-38",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "Probabilidad clínica, dímero D, eco-Doppler con compresión y anticoagulación inmediata",
      "say": "Bienvenido. Cerramos el bloque con la otra mitad del tromboembolismo: la trombosis venosa profunda. La mayoría de los émbolos nacen en una vena de la pierna, así que tratar bien una trombosis es prevenir un tromboembolismo pulmonar. El problema es que el diagnóstico clínico es poco confiable, y por eso el examen pregunta el orden del estudio, el examen confirmatorio y la conducta."
    },
    {
      "type": "points",
      "kicker": "Clínica",
      "title": "La pierna dolorosa y edematosa",
      "cards": [
        {
          "title": "Cuadro típico",
          "tag": "Unilateral",
          "kind": "key",
          "items": [
            {
              "t": "Pantorrilla > 3 cm más gruesa",
              "d": "Medida 10 cm bajo la tuberosidad tibial",
              "say": "El cuadro típico es dolor en la pantorrilla con aumento de volumen asimétrico y unilateral: una diferencia de más de tres centímetros con la otra pierna, medida diez centímetros bajo la tuberosidad tibial. Hay empastamiento muscular, calor, edema con fóvea y venas superficiales dilatadas. Mira esta pierna derecha: está edematosa y enrojecida, comparada con la izquierda.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-38/01_tvp-pierna-derecha-edematosa__commons.jpg",
                "label": "TVP de la pierna derecha",
                "at": "Mira esta pierna derecha",
                "credit": "Wikimedia Commons, CC BY-SA 3.0"
              }
            },
            {
              "t": "Homans: poco sensible y específico",
              "d": "No sirve para decidir",
              "say": "El signo de Homans, dolor al flectar el pie, es poco sensible y poco específico. Su ausencia no descarta, y su presencia no confirma."
            }
          ]
        },
        {
          "title": "Diferenciales",
          "tag": "Imitan",
          "kind": "criteria",
          "items": [
            {
              "t": "Quiste de Baker, celulitis, hematoma",
              "d": "Linfedema, IVC, edema bilateral",
              "say": "La pierna hinchada puede ser un quiste de Baker roto, una celulitis con fiebre y borde definido, un hematoma o desgarro muscular, un linfedema o una insuficiencia venosa. El edema bilateral orienta a insuficiencia cardíaca o hipoalbuminemia. Por eso se necesita una prueba objetiva."
            }
          ]
        }
      ]
    },
    {
      "type": "flow",
      "kicker": "Algoritmo",
      "title": "Wells, dímero D y eco-Doppler",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 2,
          "k": "start",
          "t": "Pierna sospechosa",
          "s": "Calcular Wells para TVP"
        },
        {
          "id": "b",
          "col": 1,
          "row": 0,
          "k": "q",
          "t": "TVP improbable (< 2)",
          "s": "Dímero D"
        },
        {
          "id": "c",
          "col": 1,
          "row": 4,
          "k": "alert",
          "t": "TVP probable (≥ 2)",
          "s": "Eco-Doppler directo"
        },
        {
          "id": "d",
          "col": 2,
          "row": 0,
          "k": "good",
          "t": "Dímero D negativo",
          "s": "Se descarta la TVP"
        },
        {
          "id": "e",
          "col": 3,
          "row": 2,
          "k": "refer",
          "t": "Eco-Doppler con compresión",
          "s": "Vena no colapsable = TVP"
        }
      ],
      "edges": [
        {
          "from": "a",
          "to": "b"
        },
        {
          "from": "a",
          "to": "c"
        },
        {
          "from": "b",
          "to": "d",
          "label": "Neg"
        },
        {
          "from": "b",
          "to": "e",
          "label": "Pos"
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
            "b",
            "c"
          ],
          "note": "Primero, la probabilidad",
          "say": "Se parte con el score de Wells para trombosis. Suma un punto por cada uno de estos: cáncer activo, parálisis o yeso, postración o cirugía reciente, dolor a lo largo de las venas, edema de toda la pierna, pantorrilla más gruesa en tres centímetros, edema con fóvea, y venas colaterales. Y resta dos si hay un diagnóstico alternativo igual de probable. Dos o más puntos es una trombosis probable."
        },
        {
          "show": [
            "d",
            "e"
          ],
          "note": "Dímero D si es improbable; eco si es probable",
          "say": "Si es improbable, se pide dímero D. Su valor predictivo negativo es alto: un resultado negativo descarta. Pero es poco específico, así que uno positivo no confirma y requiere un eco-Doppler. Si es probable, no se pide dímero D: se va directo al eco-Doppler."
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "La maniobra de compresión",
      "images": [
        {
          "src": "animaciones/cardio-38/A1_ecodoppler_compresion.mp4",
          "label": "Vena normal frente a TVP",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.10"
        }
      ],
      "steps": [
        {
          "note": "La vena normal se colapsa",
          "say": "Este es un esquema del corte transversal. A la izquierda, una vena normal junto a su arteria. Al presionar con el transductor, la vena, de pared delgada, se colapsa y desaparece, mientras que la arteria, más rígida, se mantiene."
        },
        {
          "note": "Con trombo, no se colapsa",
          "say": "A la derecha, una vena con trombosis: se llena de material ecogénico y, aunque se comprima, no se colapsa. Esa falta de compresibilidad es el criterio diagnóstico del eco-Doppler. Si el examen es negativo y la sospecha persiste, se repite en una semana."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Tratamiento",
      "title": "Anticoagular de inmediato",
      "cards": [
        {
          "title": "Fármacos",
          "tag": "Primera línea",
          "kind": "pharma",
          "items": [
            {
              "t": "Enoxaparina 1 mg/kg c/12 h",
              "d": "HNF si IRC grave",
              "say": "Se anticoagula en cuanto se sospecha con probabilidad alta, sin esperar el examen si se va a demorar. Las opciones son la heparina de bajo peso molecular, enoxaparina uno por kilo cada doce horas, o la heparina no fraccionada, preferible en la insuficiencia renal grave."
            },
            {
              "t": "Rivaroxabán 15 mg c/12 h × 21 días; apixabán 10 mg c/12 h × 7 días",
              "d": "Sin heparina previa; luego dosis de mantención",
              "say": "Los anticoagulantes orales directos son de primera línea: rivaroxabán quince miligramos cada doce horas por veintiún días y luego veinte al día, o apixabán diez miligramos cada doce horas por siete días y luego cinco. La warfarina requiere traslape con heparina por cinco días y se usa en el síndrome antifosfolípido."
            }
          ]
        },
        {
          "title": "Medidas y duración",
          "tag": "Manejo",
          "kind": "key",
          "items": [
            {
              "t": "3 meses si provocada",
              "d": "3-6 meses o más si no provocada; indefinida si cáncer, SAF o recurrente",
              "say": "La duración es de tres meses si fue provocada por una cirugía o una inmovilización, de tres a seis meses o más si no tuvo causa, e indefinida en la recurrente, en el cáncer activo y en el síndrome antifosfolípido."
            },
            {
              "t": "Deambulación, no reposo",
              "d": "Manejo ambulatorio habitual",
              "say": "El reposo no es necesario y no previene el tromboembolismo. Muchos pacientes se tratan en la casa, con deambulación precoz. Las medias alivian el edema, pero no previenen el síndrome postrombótico."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Complicaciones y causas",
      "title": "Flegmasia, trombofilia y tromboflebitis",
      "cards": [
        {
          "title": "Flegmasia cerulea dolens",
          "tag": "Emergencia",
          "kind": "alert",
          "items": [
            {
              "t": "Trombosis ileofemoral masiva",
              "d": "Pierna cianótica, edema a tensión, pulsos ausentes",
              "say": "La flegmasia cerulea dolens es una trombosis ileofemoral masiva que ocluye todo el drenaje venoso: edema a tensión, muy doloroso, pierna cianótica, pérdida de pulsos y riesgo de gangrena y amputación."
            },
            {
              "t": "Heparina + trombólisis por catéter o trombectomía",
              "d": "Urgente",
              "say": "Es una emergencia vascular: se anticoagula con heparina y se hace una trombólisis dirigida por catéter o una trombectomía quirúrgica urgente."
            }
          ]
        },
        {
          "title": "Trombofilia y superficiales",
          "tag": "Se pregunta",
          "kind": "key",
          "items": [
            {
              "t": "Joven + TTPA prolongado + VDRL (+): SAF",
              "d": "Anticoagulante lúpico, anticardiolipina",
              "say": "En el adulto joven con trombosis y un TTPA prolongado, junto con un VDRL falsamente positivo, el diagnóstico es el síndrome antifosfolípido. Se trata con warfarina y el estudio de trombofilia se hace al terminar el tratamiento."
            },
            {
              "t": "Tromboflebitis superficial",
              "d": "Anticoagular si ≥ 5 cm o cerca de la safeno-femoral",
              "say": "La trombosis superficial, un cordón doloroso en una vena superficial, se trata con antiinflamatorios, y se anticoagula si mide cinco centímetros o más, o está a menos de tres de la unión safeno-femoral."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la pierna hinchada al tratamiento."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "TVP: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Pierna hinchada con alta probabilidad",
            "Eco-Doppler con compresión",
            "Dímero D"
          ],
          "say": "Pierna hinchada con alta probabilidad: eco-Doppler. El dímero D no sirve para descartar."
        },
        {
          "cells": [
            "Probabilidad baja y dímero D negativo",
            "Descarta TVP",
            "Pedir eco igual"
          ],
          "say": "Probabilidad baja y dímero D negativo: se descarta la trombosis."
        },
        {
          "cells": [
            "Dímero D positivo",
            "Eco-Doppler",
            "Diagnosticar TVP"
          ],
          "say": "Dímero D positivo no confirma: se hace un eco-Doppler."
        },
        {
          "cells": [
            "TVP confirmada",
            "HBPM o DOAC + deambulación",
            "Reposo absoluto"
          ],
          "say": "Trombosis confirmada: heparina o anticoagulante oral y deambulación. El reposo absoluto es un error."
        },
        {
          "cells": [
            "Joven + TTPA prolongado + VDRL (+)",
            "Síndrome antifosfolípido: warfarina",
            "DOAC o déficit de factor VIII"
          ],
          "say": "Joven con TTPA largo y VDRL positivo: síndrome antifosfolípido. El déficit de factor ocho produce sangrado."
        },
        {
          "cells": [
            "Pierna azul, edema a tensión",
            "Flegmasia: lisis o trombectomía",
            "Solo HBPM"
          ],
          "say": "Pierna cianótica, con edema a tensión: flegmasia, y se necesita lisis o trombectomía, no solo heparina."
        },
        {
          "cells": [
            "Operado, disnea e hipotensión",
            "TEP masivo",
            "Atelectasia"
          ],
          "say": "Un operado con disnea e hipotensión tiene un tromboembolismo masivo hasta que se demuestre lo contrario."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 47 años, operado de una prótesis total de rodilla hace 8 días, consulta por dolor y aumento de volumen de la pantorrilla derecha de 2 días. La pantorrilla derecha mide 4 cm más que la izquierda, con empastamiento, calor local, edema con fóvea y venas superficiales dilatadas. Sin disnea ni dolor torácico. FC 88 lpm, SatO₂ 97%.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Eco-Doppler venoso con compresión y, si hay demora, iniciar anticoagulación; luego DOAC por 3 meses"
        },
        {
          "letter": "B",
          "text": "Dímero D y alta si es positivo"
        },
        {
          "letter": "C",
          "text": "Reposo absoluto y medias, sin anticoagular"
        },
        {
          "letter": "D",
          "text": "Signo de Homans para decidir"
        },
        {
          "letter": "E",
          "text": "Fibrinólisis sistémica con alteplasa"
        }
      ],
      "correct": "A",
      "explanation": "Cirugía mayor reciente, pantorrilla asimétrica de más de 3 cm, edema con fóvea y venas colaterales: probabilidad alta (Wells ≥ 2). Se hace un eco-Doppler con compresión (vena no colapsable) y se anticoagula de inmediato si se demora; luego un DOAC por 3 meses, por ser provocada.",
      "say": {
        "stem": "Un hombre de cuarenta y siete años, operado de una prótesis de rodilla hace ocho días, con dolor e hinchazón de la pantorrilla derecha. Mide cuatro centímetros más que la izquierda, con empastamiento, calor, edema con fóvea y venas superficiales dilatadas. No tiene disnea. La saturación es de noventa y siete.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: eco-Doppler con compresión y anticoagulación; dímero D; reposo con medias sin anticoagular; el signo de Homans; o fibrinólisis. Piénsalo.",
        "answer": "Es la A. Con cirugía reciente y todos esos signos, la probabilidad es alta, y se va directo al eco-Doppler, anticoagulando de inmediato. La B es la trampa: con probabilidad alta no se usa el dímero D. La E es excesiva: la fibrinólisis es para la flegmasia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 54",
      "stem": "Un paciente de 32 años, presenta una trombosis venosa profunda femoropoplítea. Como antecedente, su abuelo falleció a los 85 años, por un accidente vascular encefálico y su padre tuvo un infarto agudo al miocardio a los 60 años. En sus exámenes destacan plaquetas: 140.000 por mm3, TTPA prolongado y VDRL (+).",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Déficit de antitrombina III"
        },
        {
          "letter": "B",
          "text": "Déficit de factor VIII"
        },
        {
          "letter": "C",
          "text": "Síndrome antifosfolípidos"
        },
        {
          "letter": "D",
          "text": "Púrpura trombocitopénica trombótica"
        },
        {
          "letter": "E",
          "text": "Enfermedad de Von Willebrand"
        }
      ],
      "correct": "C",
      "explanation": "Una TVP femoropoplítea en un adulto joven, con TTPA prolongado y VDRL positivo, es un síndrome antifosfolípido: el anticoagulante lúpico prolonga el TTPA in vitro y los anticuerpos anticardiolipina dan un VDRL falsamente positivo. El déficit de antitrombina III es una trombofilia posible, pero no explica la prolongación del TTPA ni el VDRL; el déficit de factor VIII y la enfermedad de von Willebrand producen sangrado.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de treinta y dos años con una trombosis venosa profunda femoropoplítea. Su abuelo murió por un accidente vascular a los ochenta y cinco, y su padre tuvo un infarto a los sesenta. Tiene plaquetas de ciento cuarenta mil, TTPA prolongado y VDRL positivo.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: déficit de antitrombina tres; déficit de factor ocho; síndrome antifosfolípido; púrpura trombocitopénica trombótica; o enfermedad de von Willebrand. Piénsalo.",
        "answer": "Es la C. Una trombosis en un joven con TTPA prolongado y VDRL falsamente positivo es un síndrome antifosfolípido. La A también es una trombofilia, pero no explica ni el TTPA ni el VDRL. El factor ocho bajo y von Willebrand producen sangrado, no trombosis."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 42",
      "stem": "Un paciente consulta por dolor y aumento de volumen en la pierna derecha.",
      "question": "¿Qué característica del dímero D es aquella que permite descartar una trombosis venosa profunda cuando resulta negativo?",
      "options": [
        {
          "letter": "A",
          "text": "Alta especificidad"
        },
        {
          "letter": "B",
          "text": "Alta sensibilidad"
        },
        {
          "letter": "C",
          "text": "Elevado valor predictivo negativo"
        },
        {
          "letter": "D",
          "text": "Elevado valor predictivo positivo"
        },
        {
          "letter": "E",
          "text": "Baja especificidad"
        }
      ],
      "correct": "C",
      "explanation": "Un dímero D negativo permite descartar una TVP porque tiene un elevado valor predictivo negativo (que se relaciona con su alta sensibilidad): un resultado negativo hace muy improbable la enfermedad. Su especificidad es baja, por lo que un resultado positivo no confirma la TVP y exige un eco-Doppler.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente consulta por dolor y aumento de volumen en la pierna derecha.",
        "question": "¿Qué característica del dímero D permite descartar una trombosis venosa profunda cuando resulta negativo?",
        "options": "Las opciones: alta especificidad; alta sensibilidad; elevado valor predictivo negativo; elevado valor predictivo positivo; o baja especificidad. Piénsalo.",
        "answer": "Es la C. Lo que permite descartar con un resultado negativo es el alto valor predictivo negativo. La B, la alta sensibilidad, está muy relacionada, y por eso es la tentación, pero en estricto rigor, el valor predictivo negativo es lo que se usa para descartar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta del banco EUNACOM",
      "title": "Banco EUNACOM · Caso representativo",
      "stem": "Hombre de 47 años, operado de una prótesis total de rodilla hace 8 días, consulta por dolor y aumento de volumen de la pantorrilla derecha, que mide 4 cm más que la izquierda, con empastamiento y calor.",
      "question": "¿Cuál es el examen confirmatorio de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Dímero D plasmático"
        },
        {
          "letter": "B",
          "text": "Eco-Doppler venoso de las extremidades inferiores con maniobra de compresión"
        },
        {
          "letter": "C",
          "text": "Radiografía de la pierna"
        },
        {
          "letter": "D",
          "text": "Angiografía pulmonar"
        },
        {
          "letter": "E",
          "text": "Ecocardiograma transtorácico"
        }
      ],
      "correct": "B",
      "explanation": "Con alta probabilidad clínica de TVP (cirugía reciente, pantorrilla asimétrica, edema con fóvea) el dímero D no sirve para descartar y se solicita el eco-Doppler venoso con compresión: la vena que no se colapsa al comprimirla con el transductor confirma la trombosis.",
      "say": {
        "stem": "Un caso representativo del banco de preguntas. Un hombre operado de una prótesis de rodilla, con la pantorrilla derecha cuatro centímetros más gruesa, con empastamiento y calor.",
        "question": "¿Cuál es el examen confirmatorio de elección?",
        "options": "Las opciones: dímero D; eco-Doppler venoso con compresión; radiografía de la pierna; angiografía pulmonar; o ecocardiograma. Piénsalo.",
        "answer": "Es la B. El eco-Doppler con compresión confirma la trombosis cuando la vena no se colapsa. La A es la trampa: con probabilidad alta, el dímero D no descarta."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: trombosis venosa profunda",
      "cards": [
        {
          "title": "Diagnosticar",
          "tag": "Objetivo",
          "kind": "key",
          "items": [
            {
              "t": "Wells: ≥ 2 eco-Doppler · < 2 dímero D",
              "d": "Dímero D negativo descarta",
              "say": "Cerremos con las reglas de oro. Con Wells de dos o más, eco-Doppler directo. Con menos de dos, dímero D, y si es negativo, se descarta."
            },
            {
              "t": "Eco-Doppler con compresión",
              "d": "Vena no colapsable",
              "say": "El examen confirmatorio es el eco-Doppler con compresión: la vena que no se colapsa tiene un trombo. El signo de Homans no sirve."
            }
          ]
        },
        {
          "title": "Tratar",
          "tag": "Y reconocer",
          "kind": "alert",
          "items": [
            {
              "t": "HBPM o DOAC de inmediato",
              "d": "3 meses si provocada; deambular",
              "say": "Se anticoagula de inmediato con heparina o un anticoagulante oral directo, tres meses si fue provocada, y se deambula."
            },
            {
              "t": "Flegmasia: lisis o trombectomía",
              "d": "Joven con TTPA largo y VDRL (+): SAF",
              "say": "La flegmasia cerulea dolens se trata con trombólisis o trombectomía. Y el joven con trombosis, TTPA largo y VDRL positivo tiene un síndrome antifosfolípido. Si te llevas una sola idea de hoy: la trombosis venosa se diagnostica con eco-Doppler, y se trata de inmediato para prevenir el tromboembolismo pulmonar. Con esto cerramos el bloque. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Trombosis venosa profunda: del diagnóstico al tratamiento",
    "root": {
      "k": "start",
      "t": "Pierna dolorosa y edematosa",
      "s": "Calcular Wells para TVP",
      "say": "Llega un paciente con una pierna dolorosa y edematosa, de forma unilateral. Se calcula la probabilidad clínica con el score de Wells.",
      "kids": [
        [
          "Improbable (< 2)",
          {
            "k": "q",
            "t": "Dímero D",
            "s": "Alta sensibilidad",
            "say": "Si la trombosis es improbable, se pide dímero D.",
            "kids": [
              [
                "Negativo",
                {
                  "k": "ok",
                  "t": "Se descarta la TVP",
                  "s": "Buscar otra causa",
                  "say": "Con dímero D negativo se descarta la trombosis, y se busca otra causa, como un quiste de Baker o una celulitis.",
                  "kids": []
                }
              ],
              [
                "Positivo",
                {
                  "k": "do",
                  "t": "Eco-Doppler",
                  "s": "Con compresión",
                  "say": "Con dímero D positivo, se hace un eco-Doppler venoso con compresión.",
                  "kids": []
                }
              ]
            ]
          }
        ],
        [
          "Probable (≥ 2)",
          {
            "k": "alert",
            "t": "Eco-Doppler con compresión",
            "s": "Vena no colapsable = TVP",
            "say": "Si es probable, se va directo al eco-Doppler con compresión, sin dímero D. Si el examen demora, se inicia la anticoagulación.",
            "kids": [
              [
                "TVP confirmada",
                {
                  "k": "refer",
                  "t": "Anticoagular",
                  "s": "HBPM o DOAC; deambular",
                  "say": "Si la vena no se colapsa, se anticoagula con heparina o un anticoagulante oral directo: rivaroxabán o apixabán. Duración de tres meses si fue provocada y más si no tuvo causa.",
                  "kids": []
                }
              ],
              [
                "Pierna cianótica",
                {
                  "k": "do",
                  "t": "Flegmasia cerulea dolens",
                  "s": "Lisis por catéter o trombectomía",
                  "say": "Si la pierna está cianótica y con edema a tensión, es una flegmasia: heparina y trombólisis dirigida por catéter o trombectomía urgente.",
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
