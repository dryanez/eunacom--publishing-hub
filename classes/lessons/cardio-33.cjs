// Clase 5.5 (Cardiología) — Pericarditis aguda. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-33). Código 1.01.1.022 Pericarditis aguda
// (Dx sospecha · Tx inicial · Seguimiento no requiere), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-33): Enero 2023 P139 (ST en «silla de montar»: pericarditis). Enunciado y alternativas copiados del banco.
// No usadas: Diciembre 2018 P94, Julio 2019 P81, Julio 2015 P59 y Diciembre 2022 P29 (dependen de un ECG que el banco no trae: «se muestra a continuación»).
// Se agregó una pregunta del libro de la pericarditis (AINE + colchicina) con la etiqueta «Banco Oficial AEE» porque el banco real solo trae
// una pregunta utilizable de este tema.
// Foto en contexto: ECG con repolarización precoz, el imitador de la pericarditis (Stroobandt, Barold y Sinnaeve, ECG from Basics to Essentials,
// Wiley, 2016, p. 191). No hay ECG de pericarditis con crédito en las bibliotecas disponibles (FALTANTES_cardio_bloque_5.md).
// En movimiento: scenes/cardio_b5.html ?v=pericarditis (gráfico propio: ECG de pericarditis frente al del infarto).

module.exports = {
  "id": "cardio-33",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "El dolor que mejora al inclinarse, el ECG difuso y el tratamiento que evita las recidivas",
      "say": "Bienvenido. Vimos la hipertensión, y entramos ahora al pericardio. La pericarditis aguda es una de las causas más comunes de dolor torácico en el joven, y la gran imitadora del infarto: ambos levantan el segmento ST. La diferencia entre fibrinolizar a un paciente o mandarlo a su casa con ibuprofeno depende de reconocer cuatro cosas, y esas cuatro cosas son lo que el examen pregunta."
    },
    {
      "type": "flow",
      "kicker": "Qué es",
      "title": "Inflamación del saco pericárdico",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "Viral o idiopática",
          "s": "> 80% de los casos"
        },
        {
          "id": "b",
          "col": 1,
          "row": 1,
          "k": "mech",
          "t": "Inflamación del pericardio",
          "s": "Con o sin derrame"
        },
        {
          "id": "c",
          "col": 2,
          "row": 0,
          "k": "effect",
          "t": "Dolor pleurítico",
          "s": "Posicional; nervio frénico"
        },
        {
          "id": "d",
          "col": 2,
          "row": 2,
          "k": "effect",
          "t": "Frote y ECG difuso",
          "s": "Roce de las hojas"
        },
        {
          "id": "e",
          "col": 3,
          "row": 1,
          "k": "risk",
          "t": "Recidiva, derrame",
          "s": "Taponamiento, constricción"
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
          "from": "b",
          "to": "d"
        },
        {
          "from": "c",
          "to": "e"
        },
        {
          "from": "d",
          "to": "e"
        }
      ],
      "steps": [
        {
          "show": [
            "a",
            "b"
          ],
          "note": "Casi siempre viral",
          "say": "La pericarditis es la inflamación del saco que rodea al corazón. En más de ocho de cada diez casos es viral o idiopática: coxsackie, adenovirus, y hoy también el coronavirus. Otras causas son el infarto, con la pericarditis precoz y el síndrome de Dressler a las dos a ocho semanas, la uremia, la tuberculosis, las neoplasias, el lupus, la cirugía cardíaca y algunos fármacos."
        },
        {
          "show": [
            "c",
            "d"
          ],
          "note": "Dolor, frote y ECG",
          "say": "La inflamación roza la pleura y el diafragma, y el nervio frénico lleva el dolor al borde del trapecio. Las dos hojas inflamadas se rozan y producen el frote, y la irritación del epicardio produce los cambios del segmento ST y del PR."
        },
        {
          "show": [
            "e"
          ],
          "note": "Evolución",
          "say": "La mayoría evoluciona bien, pero hasta uno de cada cuatro tiene una recidiva, y el derrame puede crecer hasta un taponamiento, o con los años dar una constricción."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diagnóstico",
      "title": "Los cuatro criterios: bastan dos",
      "cards": [
        {
          "title": "Clínica",
          "tag": "Dolor y frote",
          "kind": "key",
          "items": [
            {
              "t": "Dolor pleurítico y posicional",
              "d": "↑ al inspirar, toser y acostarse; ↓ al inclinarse",
              "say": "Primer criterio, el dolor típico: punzante, que aumenta con la inspiración, la tos y al acostarse, y que alivia al sentarse e inclinarse hacia adelante. Se irradia al borde del trapecio, y no se alivia con nitroglicerina. Casi siempre hay un resfrío o un cuadro viral previo."
            },
            {
              "t": "Frote pericárdico",
              "d": "Signo más específico, inestable",
              "say": "Segundo criterio, el frote: un ruido áspero, como cuero nuevo, en el borde esternal izquierdo, que se ausculta con el paciente inclinado hacia adelante y en espiración. Es el signo más específico, pero transitorio."
            }
          ]
        },
        {
          "title": "Pruebas",
          "tag": "ECG y eco",
          "kind": "criteria",
          "items": [
            {
              "t": "ECG típico",
              "d": "ST cóncavo difuso + PR descendido",
              "say": "Tercer criterio, el electrocardiograma típico, que vemos enseguida. Y el cuarto, un derrame pericárdico nuevo o más grande en el ecocardiograma, que aparece en seis de cada diez pacientes y suele ser pequeño."
            },
            {
              "t": "Miopericarditis: troponina ↑",
              "d": "Restringir el ejercicio",
              "say": "Si además la troponina está elevada, se habla de miopericarditis, y se restringe estrictamente el ejercicio."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "ECG de la pericarditis",
      "images": [
        {
          "src": "animaciones/cardio-33/A1_ecg_pericarditis.mp4",
          "label": "Pericarditis frente a infarto",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.5"
        }
      ],
      "steps": [
        {
          "note": "ST cóncavo, difuso y con PR descendido",
          "say": "Mira el primer trazado. El segmento ST se eleva con concavidad hacia arriba, como una batea, y el PR baja por debajo de la línea de base. Eso se ve en casi todas las derivaciones. La excepción es aVR, la derivación de abajo, que muestra lo opuesto: el ST descendido y el PR elevado."
        },
        {
          "note": "En el infarto es convexo y con imagen especular",
          "say": "Ahora el infarto. El supradesnivel es convexo, parece una lápida, es territorial y tiene una imagen especular en la derivación opuesta. Eso es lo que diferencia las dos: la pericarditis no tiene imagen especular, ni ondas Q, y el PR está descendido."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diferenciales",
      "title": "Lo que imita a la pericarditis",
      "cards": [
        {
          "title": "Repolarización precoz",
          "tag": "Joven y deportista",
          "kind": "key",
          "items": [
            {
              "t": "ST cóncavo con muesca en J",
              "d": "Estable en el tiempo; PR no desciende",
              "say": "La repolarización precoz es la principal imitadora: joven, deportista, ST cóncavo con una muesca en el punto J y ondas T grandes. Mira este electrocardiograma: el ST está levantado, pero no cambia en el tiempo y el PR no desciende.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-33/01_repolarizacion-precoz-st-concavo__stroobandt-ecg_p191.jpg",
                "label": "Repolarización precoz",
                "at": "Mira este electrocardiograma",
                "credit": "Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. 191"
              }
            },
            {
              "t": "Infarto, miocarditis, aneurisma",
              "d": "Con duda: ECG seriado, troponina y eco",
              "say": "Los otros imitadores son el infarto, la miocarditis y el aneurisma ventricular. Si hay duda, se repite el electrocardiograma, se pide troponina y un ecocardiograma que busque alteración segmentaria de la motilidad."
            }
          ]
        },
        {
          "title": "Dolor torácico",
          "tag": "Otras causas",
          "kind": "alert",
          "items": [
            {
              "t": "TEP, neumotórax, costocondritis",
              "d": "Disnea e hipoxemia, o dolor reproducible",
              "say": "Y en el dolor torácico recuerda al tromboembolismo pulmonar, con disnea e hipoxemia, al neumotórax, al espasmo esofágico y a la costocondritis, donde el dolor se reproduce al palpar y el electrocardiograma es normal."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Tratamiento",
      "title": "Antiinflamatorio más colchicina",
      "cards": [
        {
          "title": "Primera línea",
          "tag": "Todos",
          "kind": "pharma",
          "items": [
            {
              "t": "Aspirina 750-1000 mg o ibuprofeno 600 mg c/8 h",
              "d": "1-2 semanas, con IBP",
              "say": "El tratamiento de primera línea es un antiinflamatorio en dosis plenas: aspirina setecientos cincuenta a mil miligramos cada ocho horas, o ibuprofeno seiscientos cada ocho horas, durante una a dos semanas, con un inhibidor de la bomba de protones. En la pericarditis posinfarto se prefiere la aspirina."
            },
            {
              "t": "Colchicina 3 meses",
              "d": "0,5 mg/día si < 70 kg; 0,5 mg c/12 h si ≥ 70 kg",
              "say": "Y se agrega colchicina durante tres meses, medio miligramo al día si pesa menos de setenta kilos, o medio miligramo cada doce horas si pesa setenta o más. La colchicina reduce a la mitad las recidivas, y por eso es parte de la primera línea."
            }
          ]
        },
        {
          "title": "Qué evitar",
          "tag": "Trampas",
          "kind": "alert",
          "items": [
            {
              "t": "Corticoides: no de primera línea",
              "d": "Aumentan la recurrencia",
              "say": "Los corticoides no son de primera línea, porque aumentan el riesgo de recurrencia. Se reservan para causas autoinmunes o urémicas, o si no se toleran los antiinflamatorios."
            },
            {
              "t": "Sin anticoagulantes ni antibióticos",
              "d": "Reposo y restricción del ejercicio",
              "say": "Se evitan los anticoagulantes, que aumentan el riesgo de hemopericardio, y no hay lugar para los antibióticos en la pericarditis viral. Se indica reposo y restricción del ejercicio, hasta tres meses en el deportista de competencia."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Hospitalizar y complicaciones",
      "title": "Signos de alarma y evolución",
      "cards": [
        {
          "title": "Se hospitaliza si hay",
          "tag": "Alto riesgo",
          "kind": "alert",
          "items": [
            {
              "t": "Fiebre > 38 °C, curso subagudo",
              "d": "Derrame grande o taponamiento",
              "say": "Se hospitaliza al paciente con fiebre mayor de treinta y ocho grados, curso subagudo, derrame grande o signos de taponamiento, traumatismo, uso de anticoagulantes, inmunosupresión, troponina elevada, o que no responde a los antiinflamatorios en una semana."
            },
            {
              "t": "Los demás: manejo ambulatorio",
              "d": "Control a la semana",
              "say": "El resto, que es la mayoría, se maneja en forma ambulatoria, con control a la semana. En ellos no se estudia la causa."
            }
          ]
        },
        {
          "title": "Complicaciones",
          "tag": "Evolución",
          "kind": "criteria",
          "items": [
            {
              "t": "Recurrencia 15-30%",
              "d": "Taponamiento: Tema 5.6",
              "say": "La recurrencia aparece en quince a treinta por ciento. Y el derrame puede llegar al taponamiento, que es la próxima clase."
            },
            {
              "t": "Constricción: Kussmaul, knock",
              "d": "Pericardiectomía",
              "say": "La pericarditis constrictiva es una complicación tardía, sobre todo de la tuberculosa y la posquirúrgica: falla derecha con signo de Kussmaul, un ruido protodiastólico llamado knock pericárdico y calcificación. Su tratamiento es la pericardiectomía."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: del dolor torácico posicional al manejo."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Pericarditis: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Dolor que mejora al inclinarse + ST cóncavo difuso",
            "Pericarditis: AINE + colchicina",
            "Fibrinolizar como SCACEST"
          ],
          "say": "Dolor que mejora al inclinarse y ST cóncavo y difuso: pericarditis. Se trata con antiinflamatorio y colchicina. Fibrinolizar es el error."
        },
        {
          "cells": [
            "PR descendido, sin imagen especular",
            "Pericarditis",
            "Pensar en infarto"
          ],
          "say": "PR descendido y sin imagen especular: pericarditis. El infarto tiene imagen especular y ondas Q."
        },
        {
          "cells": [
            "Joven deportista con ST cóncavo estable",
            "Repolarización precoz",
            "Tratar como pericarditis"
          ],
          "say": "Un deportista joven con ST cóncavo que no cambia en el tiempo y sin descenso del PR es repolarización precoz."
        },
        {
          "cells": [
            "Pericarditis + colchicina 3 meses",
            "Previene la recidiva",
            "Solo AINE"
          ],
          "say": "La colchicina durante tres meses reduce las recidivas a la mitad. Dar solo antiinflamatorio es incompleto."
        },
        {
          "cells": [
            "Pericarditis posinfarto",
            "Aspirina",
            "Otros AINE"
          ],
          "say": "En la pericarditis posinfarto, aspirina. Los otros antiinflamatorios interfieren con la cicatrización."
        },
        {
          "cells": [
            "Fiebre alta, derrame grande, troponina ↑",
            "Hospitalizar",
            "Alta ambulatoria"
          ],
          "say": "Fiebre alta, derrame grande o troponina elevada: se hospitaliza."
        },
        {
          "cells": [
            "Hipotensión + yugulares + ruidos apagados",
            "Taponamiento: pericardiocentesis",
            "Más AINE"
          ],
          "say": "Hipotensión con yugulares y ruidos apagados es un taponamiento, y se drena. Más antiinflamatorios no lo resuelven."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 32 años, deportista, consulta por dolor torácico precordial punzante de 24 horas, con un resfrío la semana previa. El dolor aumenta al toser y al acostarse, y se alivia al sentarse e inclinarse hacia adelante. PA 125/80 mmHg, FC 92 lpm, T° 37,6 °C. Frote rudo en el borde esternal izquierdo. ECG: supradesnivel del ST de concavidad superior en DI, DII, aVF y V2 a V6 con infradesnivel del PR.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Ibuprofeno con protector gástrico, colchicina por 3 meses y ecocardiograma; manejo ambulatorio"
        },
        {
          "letter": "B",
          "text": "Fibrinólisis con tenecteplase"
        },
        {
          "letter": "C",
          "text": "Anticoagulación con heparina"
        },
        {
          "letter": "D",
          "text": "Prednisona en dosis altas como monoterapia"
        },
        {
          "letter": "E",
          "text": "Pericardiocentesis de urgencia"
        }
      ],
      "correct": "A",
      "explanation": "Cumple 3 de los 4 criterios (dolor posicional típico, frote y ECG con ST cóncavo difuso y PR descendido), sin factores de alto riesgo. Se trata en forma ambulatoria con AINE en dosis plenas más IBP, colchicina por 3 meses y ecocardiograma para descartar derrame.",
      "say": {
        "stem": "Un deportista de treinta y dos años, con un resfrío la semana anterior, tiene un dolor precordial punzante de un día, que aumenta al toser y al acostarse, y se alivia al inclinarse hacia adelante. La presión es normal, la frecuencia de noventa y dos y la temperatura de treinta y siete coma seis. Hay un frote en el borde esternal izquierdo, y el electrocardiograma muestra supradesnivel cóncavo del ST en casi todas las derivaciones con descenso del PR.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: ibuprofeno con colchicina y ecocardiograma, ambulatorio; fibrinólisis; heparina; prednisona en monoterapia; o pericardiocentesis. Piénsalo.",
        "answer": "Es la A. Tiene tres de los cuatro criterios y ningún factor de alto riesgo: se trata en la casa con antiinflamatorio, inhibidor de la bomba de protones y colchicina por tres meses. La B es la trampa: el supradesnivel es difuso y cóncavo, y no hay imagen especular."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 139",
      "stem": "Paciente con dolor torácico retroesternal, antecedente de RGE, en buenas condiciones. ECG con elevación difusa del ST en silla de montar.",
      "question": "¿Diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "SCA con elevación del ST (SCACEST)"
        },
        {
          "letter": "B",
          "text": "Angina inestable"
        },
        {
          "letter": "C",
          "text": "Miocarditis aguda viral"
        },
        {
          "letter": "D",
          "text": "Pericarditis aguda"
        },
        {
          "letter": "E",
          "text": "Espasmo coronario (angina de Prinzmetal)"
        }
      ],
      "correct": "D",
      "explanation": "Dolor retroesternal con buen estado general y elevación difusa del ST «en silla de montar» (cóncava, no territorial) es una pericarditis aguda. El SCACEST daría supradesnivel convexo y territorial con imagen especular; la angina inestable no eleva el ST; en la angina de Prinzmetal la elevación es transitoria y territorial.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente con dolor torácico retroesternal, antecedente de reflujo y en buenas condiciones. El electrocardiograma muestra elevación difusa del ST en silla de montar.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: infarto con supradesnivel; angina inestable; miocarditis viral; pericarditis aguda; o angina de Prinzmetal. Piénsalo.",
        "answer": "Es la D. Una elevación difusa y cóncava del ST, que no respeta territorios, con el paciente en buenas condiciones, es una pericarditis. La A tienta, pero el infarto da un supradesnivel convexo y territorial, con imagen especular."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta del banco EUNACOM",
      "title": "Banco EUNACOM · Caso representativo",
      "stem": "Hombre de 26 años con pericarditis aguda viral.",
      "question": "¿Cuál es la terapia farmacológica de primera línea para tratar el episodio actual y reducir significativamente la tasa de recidiva?",
      "options": [
        {
          "letter": "A",
          "text": "Antiinflamatorios no esteroidales (AINE) asociados a colchicina durante 3 meses"
        },
        {
          "letter": "B",
          "text": "Prednisona en dosis altas en monoterapia"
        },
        {
          "letter": "C",
          "text": "Antibioticoterapia empírica con ceftriaxona endovenosa"
        },
        {
          "letter": "D",
          "text": "Anticoagulación con heparina de bajo peso molecular"
        },
        {
          "letter": "E",
          "text": "Paracetamol 500 mg cada 12 horas SOS"
        }
      ],
      "correct": "A",
      "explanation": "El tratamiento estándar de la pericarditis aguda es un AINE en dosis altas más colchicina durante 3 meses, que reduce a la mitad las recurrencias. Los corticoides no son de primera línea; la anticoagulación y los antibióticos no tienen indicación en la pericarditis viral.",
      "say": {
        "stem": "Un caso representativo del banco de preguntas. Un hombre de veintiséis años con una pericarditis aguda viral.",
        "question": "¿Cuál es la terapia de primera línea para tratar el episodio y reducir la recidiva?",
        "options": "Las opciones: antiinflamatorios con colchicina por tres meses; prednisona sola; ceftriaxona; heparina; o paracetamol. Piénsalo.",
        "answer": "Es la A. La colchicina asociada al antiinflamatorio reduce a la mitad las recidivas. La B es la trampa clásica: los corticoides aumentan la recurrencia y no son de primera línea."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: pericarditis aguda",
      "cards": [
        {
          "title": "Reconocer",
          "tag": "Dos de cuatro",
          "kind": "key",
          "items": [
            {
              "t": "Dolor posicional, frote, ECG, derrame",
              "d": "Bastan 2 de 4",
              "say": "Cerremos con las reglas de oro. La pericarditis se diagnostica con dos de cuatro criterios: dolor que mejora al inclinarse, frote, electrocardiograma típico y derrame."
            },
            {
              "t": "ST cóncavo difuso + PR descendido",
              "d": "Sin imagen especular ni Q",
              "say": "El electrocardiograma tiene supradesnivel cóncavo y difuso con el PR descendido, sin imagen especular ni ondas Q. Eso la separa del infarto."
            }
          ]
        },
        {
          "title": "Tratar",
          "tag": "Y vigilar",
          "kind": "pharma",
          "items": [
            {
              "t": "AINE + colchicina 3 meses + IBP",
              "d": "Corticoides y anticoagulantes, no",
              "say": "Se trata con antiinflamatorio en dosis plenas, colchicina por tres meses y un protector gástrico. Los corticoides y los anticoagulantes se evitan."
            },
            {
              "t": "Hospitalizar si hay alto riesgo",
              "d": "Fiebre, derrame grande, troponina",
              "say": "Y se hospitaliza ante fiebre alta, derrame grande, troponina elevada o falla del tratamiento. Si te llevas una sola idea de hoy: el dolor que mejora al inclinarse hacia adelante y el ST cóncavo sin imagen especular son una pericarditis, no un infarto. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Pericarditis aguda: del dolor posicional al manejo",
    "root": {
      "k": "start",
      "t": "Dolor torácico pleurítico",
      "s": "Mejora al inclinarse; ECG",
      "say": "Llega un paciente, a menudo joven, con dolor torácico que empeora al toser y al acostarse y mejora al inclinarse hacia adelante. Se toma un electrocardiograma y se ausculta buscando el frote.",
      "kids": [
        [
          "< 2 criterios o ECG dudoso",
          {
            "k": "q",
            "t": "Descartar otra causa",
            "s": "ECG seriado, troponina, eco",
            "say": "Si no se cumplen dos criterios, o si el electrocardiograma es dudoso, se repite el electrocardiograma, se pide troponina y ecocardiograma, y se descartan infarto, tromboembolismo y repolarización precoz.",
            "kids": []
          }
        ],
        [
          "≥ 2 de 4 criterios",
          {
            "k": "alert",
            "t": "Pericarditis aguda",
            "s": "PCR, troponina, ecocardiograma",
            "say": "Con dos o más de los cuatro criterios, es una pericarditis aguda. Se piden proteína C reactiva, troponina, ecocardiograma y radiografía de tórax.",
            "kids": [
              [
                "Alto riesgo",
                {
                  "k": "refer",
                  "t": "Hospitalizar",
                  "s": "Fiebre, derrame grande, troponina ↑",
                  "say": "Con fiebre mayor de treinta y ocho grados, curso subagudo, derrame grande o taponamiento, troponina elevada, anticoagulantes o falla de los antiinflamatorios, se hospitaliza y se estudia la causa. Si hay taponamiento, pericardiocentesis.",
                  "kids": []
                }
              ],
              [
                "Sin alto riesgo",
                {
                  "k": "ok",
                  "t": "Manejo ambulatorio",
                  "s": "AINE + colchicina 3 meses + IBP",
                  "say": "Sin factores de alto riesgo, se trata en forma ambulatoria con aspirina o ibuprofeno en dosis plenas, colchicina por tres meses y un inhibidor de la bomba de protones. Reposo y control a la semana.",
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
