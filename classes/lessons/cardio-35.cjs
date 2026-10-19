// Clase 5.7 (Cardiología) — Disección aórtica aguda. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-35). Códigos (books/data/v3_codemap.json): 1.01.2.002 Disección aórtica
// (Dx sospecha · Tx inicial · Seguimiento derivar) y 1.01.4.002 AngioTAC de tórax y aorta (emplea informe).
// Preguntas reales (class_questions.cjs cardio-35): Julio 2025 P22 (tipo B: manejo médico), Diciembre 2019 P12 (soplo diastólico: tipo A), Diciembre 2022 P180
// (dolor que migra al abdomen: angioTAC de tórax y abdomen) y Diciembre 2022 P98 (brazo con pulso disminuido: disección). Enunciados y alternativas copiados del banco.
// No usadas: Julio 2013 P16, Julio 2015 P37, Julio 2019 P143, Agosto 2021 P144, Diciembre 2017 P12 y Enero 2023 P157 (diagnóstico clínico: repiten Diciembre 2019 P12
// y Diciembre 2022 P98), Enero 2023 P163 (examen de elección: repite Diciembre 2022 P180).
// Foto en contexto: clasificación de Stanford y DeBakey (Schwartz's Principles of Surgery ABSITE and Board Review, 11.ª ed., Fig. 22-1; rótulos en inglés).
// En movimiento: scenes/cardio_b5.html ?v=diseccion (gráfico propio: onda de presión arterial antes y después del betabloqueo).

module.exports = {
  "id": "cardio-35",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "El dolor desgarrante que no es un infarto: sospecharla, bajar el dP/dt y decidir entre cirugía y manejo médico",
      "say": "Bienvenido. Vimos el taponamiento, que puede venir de la disección que estudiamos hoy. La disección aórtica aguda mata a uno de cada cuatro pacientes en las primeras veinticuatro horas si no se reconoce, y se confunde con el infarto: ambos son dolor torácico intenso con sudor en un hipertenso. El error clásico es darle aspirina, heparina o un fibrinolítico a una aorta abierta. Veamos cómo evitarlo."
    },
    {
      "type": "flow",
      "kicker": "Mecanismo",
      "title": "Un desgarro de la íntima y una falsa luz",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "HTA mal controlada",
          "s": "> 70% de los casos"
        },
        {
          "id": "b",
          "col": 1,
          "row": 1,
          "k": "mech",
          "t": "Desgarro de la íntima",
          "s": "Sangre a alta presión"
        },
        {
          "id": "c",
          "col": 2,
          "row": 1,
          "k": "mech",
          "t": "Falsa luz en la media",
          "s": "Se propaga"
        },
        {
          "id": "d",
          "col": 3,
          "row": 0,
          "k": "effect",
          "t": "Rotura, taponamiento",
          "s": "Insuficiencia aórtica"
        },
        {
          "id": "e",
          "col": 3,
          "row": 2,
          "k": "effect",
          "t": "Malperfusión",
          "s": "Coronaria, cerebro, riñón, piernas"
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
          "note": "La presión y el estrés de cizallamiento",
          "say": "La pared de la aorta tiene tres capas: íntima, media y adventicia. La disección empieza con un desgarro de la íntima, por donde la sangre a alta presión entra a la media y la separa. El factor principal es la hipertensión mal controlada, presente en más de siete de cada diez casos. Otros factores: el síndrome de Marfan, la válvula aórtica bicúspide, la coartación, el embarazo, la cocaína y las aortitis."
        },
        {
          "show": [
            "c",
            "d",
            "e"
          ],
          "note": "Qué complica",
          "say": "La falsa luz se propaga y puede obstruir las ramas de la aorta, lo que da isquemia de coronaria, cerebro, riñón, intestino o piernas. También puede destruir el soporte de la válvula aórtica, con insuficiencia aguda, o romperse hacia el pericardio, con taponamiento."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clasificación",
      "title": "Stanford A y B: lo que decide la conducta",
      "cards": [
        {
          "title": "Stanford",
          "tag": "La que se pregunta",
          "kind": "key",
          "items": [
            {
              "t": "Tipo A (65%): aorta ascendente",
              "d": "Con o sin arco y descendente",
              "say": "La clasificación de Stanford es la que decide la conducta. El tipo A compromete la aorta ascendente, con o sin extensión. Mira esta ilustración: a la izquierda y a la derecha, la ascendente está disecada. Es el tipo A, que equivale a los tipos uno y dos de DeBakey. Es la más frecuente y la más grave.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-35/01_diseccion-aortica-stanford-debakey__schwartz-absite_f22-1.jpg",
                "label": "Disección: Stanford A y B",
                "at": "Mira esta ilustración",
                "credit": "Schwartz's Principles of Surgery ABSITE and Board Review, 11.ª ed., Fig. 22-1"
              }
            },
            {
              "t": "Tipo B (35%): distal a la subclavia",
              "d": "Solo la aorta descendente",
              "say": "El tipo B nace después de la subclavia izquierda y compromete solo la aorta descendente, como en la figura del centro. Una regla útil: si compromete la ascendente, es tipo A, venga de donde venga el desgarro."
            }
          ]
        },
        {
          "title": "Por qué importa",
          "tag": "Riesgo",
          "kind": "alert",
          "items": [
            {
              "t": "Tipo A: 1-2% de mortalidad por hora",
              "d": "Taponamiento, IAo masiva, infarto",
              "say": "El tipo A puede romperse al pericardio, producir una insuficiencia aórtica masiva o disecar una coronaria, casi siempre la derecha, con un infarto inferior. Sin cirugía, la mortalidad sube uno a dos por ciento por cada hora."
            },
            {
              "t": "Tipo B: mejor pronóstico",
              "d": "Si no se complica",
              "say": "El tipo B tiene mejor pronóstico con tratamiento médico, a menos que se complique."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clínica",
      "title": "El dolor y los signos de órgano",
      "cards": [
        {
          "title": "Dolor y asimetría",
          "tag": "Cardinal",
          "kind": "key",
          "items": [
            {
              "t": "Desgarrante, máximo desde el inicio",
              "d": "Migra: tórax, dorso, abdomen",
              "say": "El síntoma cardinal es un dolor torácico o interescapular de inicio súbito, desgarrante, de máxima intensidad desde el primer segundo, a diferencia del infarto, que va aumentando. Puede migrar siguiendo la disección, del tórax al dorso y al abdomen."
            },
            {
              "t": "Diferencia de PA entre brazos > 20 mmHg",
              "d": "Déficit de pulso; soplo diastólico nuevo",
              "say": "La clave del examen: una diferencia de presión o de pulso entre ambos brazos mayor de veinte milímetros de mercurio, un déficit de pulso, o un soplo diastólico nuevo de insuficiencia aórtica. Ante eso, piensa en disección."
            }
          ]
        },
        {
          "title": "Por territorio",
          "tag": "Complicaciones",
          "kind": "alert",
          "items": [
            {
              "t": "ACV, síncope, IAM inferior",
              "d": "Carótidas, taponamiento, coronaria derecha",
              "say": "Según el territorio, hay síncope, accidente cerebrovascular, o infarto inferior por la coronaria derecha. Un electrocardiograma normal y una troponina negativa en un dolor intenso orientan más a disección que a infarto."
            },
            {
              "t": "Isquemia mesentérica, renal, paraplejia",
              "d": "Brazo o pierna fríos",
              "say": "También hay dolor abdominal con lactato alto, injuria renal, paraplejia, o un brazo o una pierna fríos con pulso débil. La presión suele estar elevada, y la hipotensión indica una complicación grave: taponamiento, rotura o insuficiencia aórtica aguda."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diagnóstico",
      "title": "Qué examen y cuándo",
      "cards": [
        {
          "title": "Examen de elección",
          "tag": "AngioTAC",
          "kind": "key",
          "items": [
            {
              "t": "AngioTAC de tórax, abdomen y pelvis",
              "d": "Sensibilidad y especificidad > 98%",
              "say": "El examen de elección es el angioTAC de tórax, abdomen y pelvis con contraste. Muestra el flap que separa la luz verdadera de la falsa, la extensión y las ramas comprometidas. Por eso un dolor que migra al abdomen, con pulsos femorales disminuidos, se estudia con angioTAC de tórax y abdomen."
            },
            {
              "t": "Inestable: ecocardiograma transesofágico",
              "d": "En pabellón o a la cabecera",
              "say": "Si el paciente está inestable y no puede ir al escáner, se hace un ecocardiograma transesofágico, que ve la válvula y el pericardio."
            }
          ]
        },
        {
          "title": "Lo que no descarta",
          "tag": "Cuidado",
          "kind": "alert",
          "items": [
            {
              "t": "Rx de tórax: mediastino > 8 cm",
              "d": "Normal no descarta",
              "say": "La radiografía puede mostrar un mediastino ensanchado, pero una radiografía normal no la descarta. El electrocardiograma es normal en un tercio, y puede mostrar un infarto inferior."
            },
            {
              "t": "Score ADD-RS y dímero D",
              "d": "0 puntos y dímero D negativo: se descarta",
              "say": "Con el puntaje de riesgo de disección en cero y un dímero D negativo, se puede descartar. Con uno o más puntos, se pide una imagen. El ecocardiograma transtorácico no la descarta."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "Bajar el dP/dt: primero el betabloqueador",
      "images": [
        {
          "src": "animaciones/cardio-35/A1_presion_dpdt_betabloqueo.mp4",
          "label": "Onda de presión antes y después del betabloqueo",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.7"
        }
      ],
      "steps": [
        {
          "note": "Pendiente empinada: más cizallamiento",
          "say": "Mira la onda de presión arterial. Al inicio, la presión sistólica es de ciento noventa y la frecuencia, de ciento doce. La pendiente de subida es muy empinada: ese es el dP dt, la fuerza con que el corazón empuja la sangre sobre la pared dañada, y es lo que propaga la disección."
        },
        {
          "note": "Con labetalol: PAS 112, FC 58",
          "say": "Con un betabloqueador endovenoso, la frecuencia baja, la pendiente se suaviza y la sistólica entra en la franja verde, entre cien y ciento veinte, en menos de veinte minutos. Solo después se agrega un vasodilatador, porque si se da solo, la taquicardia refleja aumenta el dP dt."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Tratamiento",
      "title": "Estabilizar y luego definir",
      "cards": [
        {
          "title": "Inicial",
          "tag": "Antes de confirmar",
          "kind": "pharma",
          "items": [
            {
              "t": "Analgesia + labetalol o esmolol EV",
              "d": "FC < 60 y PAS 100-120 en < 20 min",
              "say": "Se monitoriza, se da analgesia endovenosa y un betabloqueador, labetalol o esmolol, hasta frecuencia bajo sesenta y sistólica entre cien y ciento veinte. Después, si la presión sigue alta, nitroprusiato o nicardipino."
            },
            {
              "t": "NO aspirina, heparina ni fibrinolíticos",
              "d": "La sospecha de disección los contraindica",
              "say": "Y nada de aspirina, heparina ni fibrinolíticos: producen hemorragia y aumentan la disección. Si hay hipotensión, se busca la causa, sea taponamiento, rotura o insuficiencia aórtica, y se va a cirugía."
            }
          ]
        },
        {
          "title": "Definitivo",
          "tag": "Según Stanford",
          "kind": "key",
          "items": [
            {
              "t": "Tipo A: cirugía de emergencia",
              "d": "Reemplazo de aorta ascendente",
              "say": "La disección tipo A es una emergencia quirúrgica absoluta: se reemplaza la aorta ascendente, con o sin válvula, y se deriva de inmediato a un centro con cirugía cardiovascular."
            },
            {
              "t": "Tipo B: manejo médico en UCI",
              "d": "TEVAR si hay complicaciones",
              "say": "La tipo B se maneja con tratamiento médico en cuidados intensivos. La endoprótesis, o TEVAR, se reserva para las complicaciones: malperfusión, rotura, dolor refractario o hipertensión incontrolable. Después del alta, el betabloqueador es de por vida, con presión menor de ciento treinta sobre ochenta y angioTAC de control al mes, a los seis y a los doce meses."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: del dolor desgarrante a la cirugía o al manejo médico."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Disección aórtica: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Dolor desgarrante + diferencia de PA entre brazos",
            "Disección: angioTAC",
            "Tratar como infarto"
          ],
          "say": "Dolor desgarrante con diferencia de presión entre los brazos: disección, y se pide angioTAC. Tratarlo como infarto es el error."
        },
        {
          "cells": [
            "Soplo diastólico nuevo con dolor torácico",
            "Disección tipo A",
            "Rotura de papilar"
          ],
          "say": "Soplo diastólico nuevo con dolor torácico: disección tipo A, porque compromete la válvula. La rotura de papilar da un soplo sistólico."
        },
        {
          "cells": [
            "Tipo A (aorta ascendente)",
            "Cirugía de emergencia",
            "Manejo médico solo"
          ],
          "say": "Tipo A: cirugía de emergencia. El manejo médico solo es el error."
        },
        {
          "cells": [
            "Tipo B no complicada",
            "Manejo médico en UCI",
            "Cirugía de emergencia"
          ],
          "say": "Tipo B sin complicaciones: manejo médico en cuidados intensivos. La cirugía es para las complicaciones."
        },
        {
          "cells": [
            "Presión alta en disección",
            "Labetalol o esmolol primero",
            "Solo nitroprusiato o hidralazina"
          ],
          "say": "En la disección con presión alta, primero el betabloqueador. El nitroprusiato solo da taquicardia refleja."
        },
        {
          "cells": [
            "Dolor + sospecha de disección",
            "Sin antiagregantes ni fibrinolíticos",
            "Aspirina, heparina o tenecteplase"
          ],
          "say": "Ante la sospecha de disección, nada de aspirina, heparina ni fibrinolíticos."
        },
        {
          "cells": [
            "Dolor migra al abdomen, pulsos femorales ↓",
            "AngioTAC de tórax y abdomen",
            "Ecocardiograma transtorácico"
          ],
          "say": "Si el dolor migra al abdomen y bajan los pulsos femorales, angioTAC de tórax y abdomen. El ecocardiograma transtorácico no alcanza."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 64 años, hipertenso mal controlado, con dolor torácico anterior desgarrante de inicio brusco hace 45 minutos, irradiado entre las escápulas. Sudoroso y pálido. PA brazo derecho 195/105 mmHg y brazo izquierdo 140/80 mmHg; FC 112 lpm. Soplo diastólico aspirativo nuevo en el borde esternal izquierdo. ECG con taquicardia sinusal sin supradesnivel; troponina negativa.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Labetalol EV y analgesia; angioTAC y derivar a cirugía cardiovascular de urgencia"
        },
        {
          "letter": "B",
          "text": "Aspirina 250 mg masticada y tenecteplase"
        },
        {
          "letter": "C",
          "text": "Heparina en infusión y coronariografía"
        },
        {
          "letter": "D",
          "text": "Nitroprusiato en monoterapia y alta si baja la presión"
        },
        {
          "letter": "E",
          "text": "Ecocardiograma transtorácico y control en 24 horas"
        }
      ],
      "correct": "A",
      "explanation": "Dolor desgarrante con diferencia de presión entre brazos y soplo de insuficiencia aórtica nuevo: disección aórtica aguda Stanford A. Se inicia betabloqueo EV (FC < 60, PAS 100-120), analgesia, angioTAC y traslado inmediato a cirugía cardiovascular. No se dan antiagregantes, heparina ni fibrinolíticos.",
      "say": {
        "stem": "Un hombre de sesenta y cuatro años, hipertenso mal controlado, con un dolor torácico desgarrante de inicio brusco, que va hacia la espalda. La presión en el brazo derecho es de ciento noventa y cinco sobre ciento cinco, y en el izquierdo de ciento cuarenta sobre ochenta. Tiene un soplo diastólico nuevo en el borde esternal izquierdo. El electrocardiograma no muestra supradesnivel y la troponina es negativa.",
        "question": "¿Cuál es la conducta inicial más adecuada?",
        "options": "Las opciones: labetalol, analgesia, angioTAC y cirugía; aspirina y tenecteplase; heparina y coronariografía; nitroprusiato solo con alta; o ecocardiograma y control al día siguiente. Piénsalo.",
        "answer": "Es la A. Dolor desgarrante, asimetría de presión y un soplo de insuficiencia aórtica nuevo: disección tipo A. Se baja el dP dt con betabloqueo y se va a cirugía. La B y la C son la trampa clásica: tratar como infarto una aorta abierta."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 22",
      "stem": "Paciente masculino de 55 años con dolor torácico desgarrador de inicio súbito, irradiado a la espalda. TA en brazo derecho 185/100 y en brazo izquierdo 140/80. TC: disección de aorta tipo B de Stanford.",
      "question": "¿Cuál es el manejo inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Manejo médico: control de frecuencia cardíaca y presión arterial"
        },
        {
          "letter": "B",
          "text": "Cirugía de emergencia"
        },
        {
          "letter": "C",
          "text": "Trombólisis sistémica"
        },
        {
          "letter": "D",
          "text": "Endoprótesis aórtica de urgencia"
        },
        {
          "letter": "E",
          "text": "Anticoagulación con heparina EV"
        }
      ],
      "correct": "A",
      "explanation": "La disección tipo B de Stanford no compromete la aorta ascendente: el manejo inicial es médico, con control de la frecuencia cardíaca (< 60 lpm) y de la presión sistólica (100-120 mmHg), con un betabloqueador endovenoso. La cirugía y la endoprótesis se reservan para las complicaciones; la trombólisis y la heparina están contraindicadas.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta y cinco años con dolor torácico desgarrador de inicio súbito, que se irradia a la espalda. La presión es de ciento ochenta y cinco sobre cien en el brazo derecho y de ciento cuarenta sobre ochenta en el izquierdo. La TAC muestra una disección aórtica tipo B de Stanford.",
        "question": "¿Cuál es el manejo inicial?",
        "options": "Las opciones: manejo médico con control de la frecuencia y la presión; cirugía de emergencia; trombólisis sistémica; endoprótesis de urgencia; o heparina. Piénsalo.",
        "answer": "Es la A. El tipo B no compromete la aorta ascendente, y su manejo inicial es médico, con betabloqueo. La cirugía de emergencia, la B, es para el tipo A. Y la trombólisis y la heparina están contraindicadas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 12",
      "stem": "Un paciente de 70 años, con antecedente de hipertensión, en tratamiento con losartán e hidroclorotiazida, consulta por dolor torácico, EVA 9/10, irradiado a dorso, asociado a malestar general y sudoración. Al examen físico tiene FC: 110x’, PA: 170/110 mmHg, examen pulmonar con crépitos escasos bibasales y examen cardíaco con choque de la punta no desplazado y auscultación con ritmo regular, en dos tiempos, con presencia de un soplo cardíaco diastólico aspirativo, de intensidad IV/VI, de ubicación paraesternal derecho.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Neumotórax"
        },
        {
          "letter": "B",
          "text": "Aneurisma de la aorta ascendente"
        },
        {
          "letter": "C",
          "text": "Infarto miocárdico con rotura del músculo papilar"
        },
        {
          "letter": "D",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "E",
          "text": "Disección aórtica tipo A"
        }
      ],
      "correct": "E",
      "explanation": "Dolor torácico irradiado al dorso en un hipertenso, con un soplo diastólico aspirativo (insuficiencia aórtica), es una disección aórtica; como la válvula aórtica está comprometida, la disección involucra la aorta ascendente: es tipo A (cirugía de urgencia). La rotura de un músculo papilar produce un soplo sistólico, no diastólico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de setenta años, hipertenso, con losartán e hidroclorotiazida, con dolor torácico intenso irradiado al dorso, malestar y sudoración. La presión es de ciento setenta sobre ciento diez. Tiene crépitos escasos bibasales y un soplo diastólico aspirativo de intensidad cuatro sobre seis en el borde paraesternal derecho.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: neumotórax; aneurisma de la aorta ascendente; infarto con rotura del músculo papilar; tromboembolismo pulmonar; o disección aórtica tipo A. Piénsalo.",
        "answer": "Es la E. El soplo diastólico aspirativo es una insuficiencia aórtica, y en una disección significa que la válvula está comprometida: tipo A. La C es la trampa: la rotura del papilar da un soplo sistólico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 180",
      "stem": "Un paciente de 60 años, con antecedente de hipertensión arterial e hipotiroidismo, en tratamiento con enalapril y levotiroxina, consulta por dolor torácico intenso, que inició hace 22 horas, inicialmente con EVA 9/10, que se irradiaba al dorso y posteriormente al abdomen. Tomó analgésicos y el dolor disminuyó de intensidad, sin embargo, persiste 5/10, por lo que decidió consultar. Al examen físico, tiene FC: 98x’, PA: 170/112 mmHg, pulsos de extremidades superiores conservados y disminución de los pulsos de las extremidades inferiores; examen cardíaco muestra ritmo regular en dos tiempos, sin soplos y examen pulmonar con murmullo vesicular presenta y simétrico, sin ruidos agregados. Se solicita electrocardiograma que muestra una taquicardia sinusal.",
      "question": "¿Cuál es el examen más adecuado para proseguir el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Ecocardiograma transtorácico"
        },
        {
          "letter": "B",
          "text": "Angiografía coronaria"
        },
        {
          "letter": "C",
          "text": "AngioTAC de tórax y abdomen"
        },
        {
          "letter": "D",
          "text": "Radiografía de tórax"
        },
        {
          "letter": "E",
          "text": "Troponinas plasmáticas"
        }
      ],
      "correct": "C",
      "explanation": "Dolor intenso que migra del tórax al abdomen, presión elevada y pulsos disminuidos de las extremidades inferiores indican una disección que se extiende hacia la aorta abdominal; el examen de elección es el angioTAC de tórax y abdomen, que define la extensión y las ramas comprometidas. El ecocardiograma transtorácico, la coronariografía y la troponina no hacen el diagnóstico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un hombre de sesenta años, hipertenso, con un dolor torácico intenso de veintidós horas, que se irradiaba al dorso y luego al abdomen, y que disminuyó con analgésicos. La presión es de ciento setenta sobre ciento doce, tiene pulsos conservados en los brazos y disminuidos en las piernas. El electrocardiograma muestra solo taquicardia sinusal.",
        "question": "¿Cuál es el examen más adecuado para proseguir el estudio?",
        "options": "Las opciones: ecocardiograma transtorácico; angiografía coronaria; angioTAC de tórax y abdomen; radiografía de tórax; o troponinas. Piénsalo.",
        "answer": "Es la C. El dolor que migra al abdomen y los pulsos disminuidos en las piernas muestran que la disección llega a la aorta abdominal, y el angioTAC de tórax y abdomen la define. Ojo con la trampa de la E: la troponina no descarta una disección."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 98",
      "stem": "Un paciente de 69 años, con antecedente de hipertensión y diabetes, consulta por dolor torácico intenso EVA 10/10, de carácter lancinante y que se irradia a cuello y dorso. A lo anterior se agregó dolor intenso en la extremidad superior izquierda. Al examen físico tiene FC: 120x’, PA: 200/140 mmHg, ritmo regular en dos tiempos, sin soplos, murmullo pulmonar bilateral conservado, sin otros ruidos, extremidad superior izquierda con disminución del pulso radial y frialdad de la mano.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Pericarditis aguda"
        },
        {
          "letter": "B",
          "text": "Disección aórtica"
        },
        {
          "letter": "C",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "D",
          "text": "Infarto agudo al miocardio"
        },
        {
          "letter": "E",
          "text": "Embolias cardíacas"
        }
      ],
      "correct": "B",
      "explanation": "Dolor lancinante irradiado a cuello y dorso, presión de 200/140 y un brazo con pulso radial disminuido y frialdad es una disección aórtica. El infarto no produce déficit de pulso ni asimetría, la pericarditis cursa con dolor posicional y el tromboembolismo pulmonar con disnea e hipoxemia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un paciente de sesenta y nueve años, hipertenso y diabético, con dolor torácico intenso, lancinante, irradiado a cuello y dorso, y luego dolor intenso en el brazo izquierdo. La presión es de doscientos sobre ciento cuarenta, y la extremidad superior izquierda tiene el pulso radial disminuido y la mano fría.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: pericarditis aguda; disección aórtica; tromboembolismo pulmonar; infarto agudo del miocardio; o embolias cardíacas. Piénsalo.",
        "answer": "Es la B. Un dolor lancinante hacia el cuello y el dorso, con presión muy alta y un brazo con pulso disminuido y mano fría, es una disección que compromete una rama del arco. El infarto no da déficit de pulso."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: disección aórtica",
      "cards": [
        {
          "title": "Sospechar",
          "tag": "Clínica y examen",
          "kind": "key",
          "items": [
            {
              "t": "Dolor desgarrante, máximo al inicio",
              "d": "Asimetría de PA > 20 mmHg o soplo diastólico",
              "say": "Cerremos con las reglas de oro. Dolor desgarrante, máximo desde el inicio, en un hipertenso, con asimetría de presión entre los brazos o un soplo diastólico nuevo: es una disección hasta que se demuestre lo contrario."
            },
            {
              "t": "AngioTAC de tórax, abdomen y pelvis",
              "d": "ETE si hay inestabilidad",
              "say": "El examen de elección es el angioTAC de tórax, abdomen y pelvis, y el ecocardiograma transesofágico si el paciente está inestable."
            }
          ]
        },
        {
          "title": "Actuar",
          "tag": "Stanford",
          "kind": "alert",
          "items": [
            {
              "t": "Betabloqueo EV: FC < 60, PAS 100-120",
              "d": "Sin aspirina, heparina ni fibrinolíticos",
              "say": "Se baja primero el dP dt con un betabloqueador endovenoso, hasta frecuencia bajo sesenta y sistólica entre cien y ciento veinte. Sin aspirina, sin heparina y sin fibrinolíticos."
            },
            {
              "t": "Tipo A: cirugía · Tipo B: médico",
              "d": "TEVAR si se complica",
              "say": "El tipo A se opera de emergencia, y el tipo B se maneja con tratamiento médico. Si te llevas una sola idea de hoy: ante un dolor torácico desgarrante, antes de dar un antiagregante o un anticoagulante, descarta una disección. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Disección aórtica: de la sospecha al tratamiento",
    "root": {
      "k": "start",
      "t": "Dolor torácico o dorsal desgarrante",
      "s": "HTA, asimetría de pulsos, soplo diastólico",
      "say": "Llega un paciente, habitualmente hipertenso, con dolor torácico o dorsal desgarrante, máximo desde el inicio, con asimetría de pulsos o de presión entre los brazos, o un soplo diastólico nuevo.",
      "kids": [
        [
          "Sospecha alta",
          {
            "k": "alert",
            "t": "Estabilizar ya",
            "s": "Analgesia + labetalol o esmolol EV",
            "say": "Se monitoriza, se da analgesia y un betabloqueador endovenoso hasta frecuencia bajo sesenta y sistólica entre cien y ciento veinte. No se da aspirina, heparina ni fibrinolíticos.",
            "kids": [
              [
                "Estable",
                {
                  "k": "q",
                  "t": "AngioTAC de tórax, abdomen y pelvis",
                  "s": "Clasificar con Stanford",
                  "say": "Si está estable, se confirma con angioTAC de tórax, abdomen y pelvis. Si no puede ir al escáner, ecocardiograma transesofágico.",
                  "kids": [
                    [
                      "Tipo A",
                      {
                        "k": "refer",
                        "t": "Cirugía de emergencia",
                        "s": "Reemplazo de aorta ascendente",
                        "say": "Si compromete la aorta ascendente, es tipo A: cirugía de emergencia, con traslado inmediato a un centro con cirugía cardiovascular.",
                        "kids": []
                      }
                    ],
                    [
                      "Tipo B",
                      {
                        "k": "ok",
                        "t": "Manejo médico en UCI",
                        "s": "TEVAR si hay complicaciones",
                        "say": "Si es tipo B, manejo médico en cuidados intensivos. La endoprótesis se reserva para malperfusión, rotura, dolor refractario o hipertensión incontrolable.",
                        "kids": []
                      }
                    ]
                  ]
                }
              ],
              [
                "Inestable",
                {
                  "k": "do",
                  "t": "Ecocardiograma transesofágico y pabellón",
                  "s": "Taponamiento, IAo aguda, rotura",
                  "say": "Si está inestable, con hipotensión, se busca taponamiento, insuficiencia aórtica aguda o rotura con ecocardiograma, y el paciente va directo a pabellón.",
                  "kids": []
                }
              ]
            ]
          }
        ],
        [
          "Sospecha baja",
          {
            "k": "ok",
            "t": "ADD-RS y dímero D",
            "s": "Descartar con 0 puntos y D negativo",
            "say": "Si la sospecha es baja, se usa el puntaje de riesgo de disección y el dímero D. Con cero puntos y dímero D negativo se descarta; con uno o más puntos, se pide una imagen.",
            "kids": []
          }
        ]
      ]
    }
  }
};
