// Clase 5.4 (Cardiología) — Crisis hipertensivas: urgencia versus emergencia hipertensiva. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-32). Código 1.09.2.002 Crisis hipertensivas, emergencias hipertensivas
// (Dx específico · Tx inicial · Seguimiento completo), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs --search "crisis hipertensiva|emergencia hipertensiva|nitroprusiato|labetalol"): Diciembre 2018 P7
// (urgencia hipertensiva: captopril oral) y Julio 2024 P28 (SCA con crisis hipertensiva: nitroglicerina EV). Enunciados y alternativas copiados del banco.
// No usadas: Julio 2017 P83 (glomerulonefritis con crisis: es de nefrología y la clave admite captopril), Diciembre 2025 P48, Julio 2025 P115,
// Julio 2024 P109 y Julio 2024 P141 (preeclampsia/eclampsia: ginecología), Agosto 2021 P144, Diciembre 2019 P12 y Julio 2025 P22 (disección: cardio-35).
// Foto en contexto: fondo de ojo con retinopatía hipertensiva grave (Harrison, Principios de Medicina Interna, 21.ª ed., p. 263).
// En movimiento: scenes/cardio_b5.html ?v=autorreg (gráfico propio: autorregulación del flujo cerebral en el hipertenso crónico).

module.exports = {
  "id": "cardio-32",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "La cifra asusta, pero lo que decide es si hay un órgano sufriendo ahora mismo",
      "say": "Bienvenido. Un paciente con la presión en doscientos veinte sobre ciento treinta asusta a cualquiera, y la reacción instintiva, bajarla rápido, puede hacerle daño. En esta clase aprendemos a separar la urgencia de la emergencia hipertensiva, a bajar la presión a la velocidad correcta, y a elegir el fármaco según el órgano en riesgo. Y recordamos el error que no se perdona en el examen: el nifedipino sublingual."
    },
    {
      "type": "points",
      "kicker": "Definiciones",
      "title": "Urgencia y emergencia",
      "cards": [
        {
          "title": "Emergencia hipertensiva",
          "tag": "Riesgo vital",
          "kind": "alert",
          "items": [
            {
              "t": "PA ≥ 180/120 + daño agudo de órgano",
              "d": "Cerebro, corazón, riñón, ojo, embarazo",
              "say": "Una crisis hipertensiva es una elevación aguda y severa de la presión, de ciento ochenta o más de sistólica, o ciento veinte o más de diastólica. Es una emergencia cuando hay daño agudo y en evolución de un órgano blanco: el cerebro, con encefalopatía o accidente cerebrovascular; el corazón, con edema agudo de pulmón, síndrome coronario o disección; el riñón, con injuria renal rápida; el ojo, con retinopatía grado cuatro; o la embarazada con eclampsia."
            },
            {
              "t": "UCI y fármaco EV titulable",
              "d": "Hospitalización inmediata",
              "say": "Requiere hospitalización inmediata en cuidados intensivos y fármacos endovenosos que se pueden titular."
            }
          ]
        },
        {
          "title": "Urgencia hipertensiva",
          "tag": "Sin daño agudo",
          "kind": "key",
          "items": [
            {
              "t": "Misma cifra, sin daño de órgano",
              "d": "Asintomático o cefalea leve",
              "say": "La urgencia tiene la misma presión, pero sin daño agudo de órgano blanco. El paciente está asintomático o con cefalea occipital leve, mareo o ansiedad."
            },
            {
              "t": "Fármaco oral y control en 24-48 h",
              "d": "Sin UCI, sin EV",
              "say": "No requiere cuidados intensivos ni fármacos endovenosos: se maneja con un fármaco oral y control en atención primaria a las veinticuatro o cuarenta y ocho horas. La frase que se pregunta: la cifra no define la urgencia vital, sino el daño de órgano blanco."
            }
          ]
        }
      ]
    },
    {
      "type": "flow",
      "kicker": "Fisiopatología",
      "title": "Por qué no se baja de golpe",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "HTA crónica",
          "s": "Curva desplazada a la derecha"
        },
        {
          "id": "b",
          "col": 1,
          "row": 0,
          "k": "effect",
          "t": "PAM sube sobre el límite",
          "s": "Emergencia: daño agudo"
        },
        {
          "id": "c",
          "col": 1,
          "row": 2,
          "k": "mech",
          "t": "Bajar 20-25% en 1 hora",
          "s": "Dentro de la meseta"
        },
        {
          "id": "d",
          "col": 2,
          "row": 2,
          "k": "trap",
          "t": "Bajar > 25% o muy rápido",
          "s": "Cae bajo el límite"
        },
        {
          "id": "e",
          "col": 3,
          "row": 1,
          "k": "alert",
          "t": "Infarto cerebral o miocárdico",
          "s": "Iatrogénico"
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
          "from": "c",
          "to": "d"
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
          "note": "En el hipertenso, la autorregulación está corrida",
          "say": "Los órganos mantienen un flujo constante mientras la presión media está en una meseta. En el hipertenso crónico esa meseta está corrida hacia la derecha: el límite inferior sube de sesenta a cerca de cien. En la emergencia, la presión supera el límite superior y la pared sufre daño."
        },
        {
          "show": [
            "c",
            "d",
            "e"
          ],
          "note": "Bajar demasiado es peligroso",
          "say": "Por eso se baja la presión media, pero no más de veinte a veinticinco por ciento en la primera hora. Un descenso mayor o más rápido deja a los órganos bajo el límite y produce infartos cerebrales, de miocardio e injuria renal causados por el propio tratamiento."
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "La curva de autorregulación",
      "images": [
        {
          "src": "animaciones/cardio-32/A1_autorregulacion_cerebral.mp4",
          "label": "Autorregulación del flujo cerebral",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.4"
        }
      ],
      "steps": [
        {
          "note": "Un descenso de 22% se tolera",
          "say": "La curva azul es la del normotenso. La roja es la del hipertenso crónico, corrida a la derecha. El punto verde parte con una presión media de ciento sesenta y cinco. Si baja veintidós por ciento, sigue sobre la meseta y el flujo se mantiene."
        },
        {
          "note": "Un descenso de 40% produce isquemia",
          "say": "Pero si baja cuarenta por ciento, el punto cae bajo el límite inferior y el flujo se desploma: isquemia cerebral y miocárdica. Las excepciones son la disección, el edema agudo de pulmón y la eclampsia. Y el nifedipino sublingual está prohibido siempre."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Evaluación",
      "title": "Qué buscar en urgencias",
      "cards": [
        {
          "title": "Historia y examen",
          "tag": "Daño de órgano",
          "kind": "key",
          "items": [
            {
              "t": "Síntomas neurológicos, torácicos, visuales",
              "d": "Embarazo, cocaína, clonidina",
              "say": "Se pregunta por cefalea, confusión, convulsiones, déficit focal, dolor torácico, disnea, dolor de espalda, orina y embarazo. Se pregunta por la adherencia, por antiinflamatorios y descongestionantes, por cocaína y anfetaminas, y por la suspensión brusca de clonidina o de betabloqueadores, que da hipertensión de rebote."
            },
            {
              "t": "Fondo de ojo: grado III-IV",
              "d": "Hemorragias, exudados, edema de papila",
              "say": "El fondo de ojo define una emergencia. Mira esta retina: hay hemorragias, exudados algodonosos y borramiento del disco óptico. El edema de papila es el grado cuatro, y por sí solo hace de la crisis una emergencia.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-32/01_retinopatia-hipertensiva-grave__harrison_p263.jpg",
                "label": "Retinopatía hipertensiva",
                "at": "Mira esta retina",
                "credit": "Harrison, Principios de Medicina Interna, 21.ª ed., p. 263 (Fig. 32-7)"
              }
            }
          ]
        },
        {
          "title": "Exámenes",
          "tag": "Mínimos",
          "kind": "criteria",
          "items": [
            {
              "t": "ECG, troponina, creatinina, orina",
              "d": "Rx de tórax, TAC, angioTAC según la clínica",
              "say": "Los exámenes mínimos son electrocardiograma, troponina, creatinina, electrolitos y orina completa. Después, según la clínica: radiografía de tórax para el edema pulmonar, TAC de cerebro si hay síntomas neurológicos, y angioTAC si hay dolor torácico o dorsal con asimetría de pulsos."
            },
            {
              "t": "Pseudocrisis: dolor y ansiedad",
              "d": "Repetir la medición en reposo",
              "say": "Ojo con la pseudocrisis: la presión alta del paciente con dolor, ansiedad o retención de orina, que cede al tratar la causa. Por eso se repite la medición en reposo antes de decidir."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Emergencia: fármacos",
      "title": "Qué usar según el órgano",
      "cards": [
        {
          "title": "Corazón",
          "tag": "Los más preguntados",
          "kind": "pharma",
          "items": [
            {
              "t": "SCA: nitroglicerina EV",
              "d": "En infusión continua",
              "say": "En el síndrome coronario agudo con crisis hipertensiva, el fármaco de elección es la nitroglicerina endovenosa en infusión continua, junto con betabloqueador si no hay contraindicación."
            },
            {
              "t": "EAP: nitroglicerina + furosemida",
              "d": "Baja precarga y poscarga",
              "say": "En el edema agudo de pulmón hipertensivo, nitroglicerina más furosemida endovenosas, que bajan la precarga y la poscarga."
            },
            {
              "t": "Disección: labetalol o esmolol",
              "d": "PAS < 120 y FC < 60 en < 20 min",
              "say": "En la disección aórtica, un betabloqueador endovenoso, labetalol o esmolol, hasta presión sistólica bajo ciento veinte y frecuencia bajo sesenta en menos de veinte minutos. Es la excepción a la regla general."
            }
          ]
        },
        {
          "title": "Cerebro, embarazo y otros",
          "tag": "Casos",
          "kind": "pharma",
          "items": [
            {
              "t": "Encefalopatía: labetalol, nicardipino",
              "d": "ACV isquémico: no bajar salvo > 220/120",
              "say": "En la encefalopatía hipertensiva se usan labetalol, nicardipino o nitroprusiato. En el accidente cerebrovascular isquémico no se baja la presión de rutina, salvo sobre doscientos veinte sobre ciento veinte o antes de una trombólisis."
            },
            {
              "t": "Eclampsia: magnesio + labetalol",
              "d": "Feocromocitoma: fentolamina",
              "say": "En la eclampsia, sulfato de magnesio para las convulsiones y labetalol o hidralazina, con resolución obstétrica. En el feocromocitoma, fentolamina. Y con cocaína, benzodiacepinas y nitratos, nunca betabloqueador solo."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Meta y urgencia",
      "title": "A qué velocidad bajar, y qué evitar",
      "cards": [
        {
          "title": "Emergencia",
          "tag": "Regla general",
          "kind": "key",
          "items": [
            {
              "t": "PAM ↓ 20-25% en la 1.ª hora",
              "d": "Luego 160/100 en 2-6 h; normalizar en 24-48 h",
              "say": "En la emergencia, la presión arterial media baja como máximo veinte a veinticinco por ciento en la primera hora, luego se busca ciento sesenta sobre cien en las siguientes dos a seis horas, y se normaliza en las veinticuatro a cuarenta y ocho horas, con monitorización continua."
            }
          ]
        },
        {
          "title": "Urgencia y errores",
          "tag": "Se castigan",
          "kind": "alert",
          "items": [
            {
              "t": "Reposo 30-60 min + captopril 25 mg VO",
              "d": "Control en 24-48 h en APS",
              "say": "En la urgencia, reposo en un ambiente tranquilo por treinta a sesenta minutos y un fármaco oral, como captopril veinticinco miligramos o amlodipino. Se da el alta con tratamiento de mantención y control en atención primaria en uno o dos días."
            },
            {
              "t": "Nunca nifedipino sublingual",
              "d": "Ni UCI ni nitroprusiato en una urgencia",
              "say": "El nifedipino sublingual está contraindicado en toda crisis, porque produce un descenso brusco e impredecible, con accidente cerebrovascular, infarto y muerte. Tampoco se hospitaliza en cuidados intensivos ni se usa nitroprusiato en una urgencia asintomática."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la presión muy alta a urgencia o emergencia."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Crisis hipertensiva: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "210/115 con cefalea leve y examen normal",
            "Urgencia: reposo, VO, control 24-48 h",
            "UCI y nitroprusiato"
          ],
          "say": "Doscientos diez sobre ciento quince con cefalea leve y examen normal: es una urgencia. Reposo, fármaco oral y control. Mandarlo a cuidados intensivos es el error."
        },
        {
          "cells": [
            "Infarto con 220/120",
            "Nitroglicerina EV",
            "Nifedipino sublingual"
          ],
          "say": "Infarto con crisis hipertensiva: nitroglicerina endovenosa. El nifedipino sublingual no."
        },
        {
          "cells": [
            "Disección con 220/120 y FC 110",
            "Labetalol: PAS < 120, FC < 60 en 20 min",
            "Hidralazina o enalapril oral"
          ],
          "say": "Disección con presión alta y frecuencia de ciento diez: labetalol endovenoso, sistólica bajo ciento veinte y frecuencia bajo sesenta en veinte minutos."
        },
        {
          "cells": [
            "Edema agudo de pulmón hipertensivo",
            "Nitroglicerina + furosemida",
            "Solo antihipertensivo oral"
          ],
          "say": "Edema agudo de pulmón hipertensivo: nitroglicerina y furosemida endovenosas."
        },
        {
          "cells": [
            "ACV isquémico sin trombólisis",
            "No bajar salvo > 220/120",
            "Normalizar la presión"
          ],
          "say": "En el accidente cerebrovascular isquémico sin trombólisis, no se baja la presión de rutina, salvo sobre doscientos veinte sobre ciento veinte."
        },
        {
          "cells": [
            "Descenso de PAM > 25% en 1 h",
            "Riesgo de isquemia",
            "Bajar a 120/80 rápido"
          ],
          "say": "Bajar más de veinticinco por ciento en una hora es el error: la autorregulación se sobrepasa."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Hombre de 58 años, sin antecedentes, consulta por cefalea global de 6 horas. Vigil, orientado, sin déficit focal; fondo de ojo sin edema de papila ni hemorragias, examen cardíaco y pulmonar normales. PA 205/115 mmHg en ambos brazos, FC 78 lpm. Creatinina, orina y ECG normales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Reposo, antihipertensivo oral (captopril) y control en APS en 24-48 horas"
        },
        {
          "letter": "B",
          "text": "Hospitalizar en UCI e iniciar nitroprusiato de sodio EV"
        },
        {
          "letter": "C",
          "text": "Nifedipino sublingual"
        },
        {
          "letter": "D",
          "text": "TAC de cerebro y punción lumbar de urgencia"
        },
        {
          "letter": "E",
          "text": "Furosemida 80 mg EV en bolo y observación"
        }
      ],
      "correct": "A",
      "explanation": "La presión es severa (≥ 180/120) sin ningún signo de daño agudo de órgano blanco: es una urgencia hipertensiva. Se maneja con reposo, antihipertensivo oral, comprobar un descenso moderado y control en atención primaria en 24-48 horas. No requiere UCI ni fármacos EV; el nifedipino sublingual está contraindicado.",
      "say": {
        "stem": "Un hombre de cincuenta y ocho años consulta por cefalea global de seis horas. Está vigil, sin déficit neurológico, el fondo de ojo es normal y el examen cardíaco y pulmonar también. La presión es de doscientos cinco sobre ciento quince en ambos brazos. La creatinina, la orina y el electrocardiograma son normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reposo, antihipertensivo oral y control en uno a dos días; cuidados intensivos con nitroprusiato; nifedipino sublingual; TAC y punción lumbar; o furosemida en bolo. Piénsalo.",
        "answer": "Es la A. La presión es muy alta, pero no hay daño agudo de órgano blanco: es una urgencia, no una emergencia. Se baja con calma y por vía oral. La B es la trampa por la cifra, y la C es la más peligrosa: el nifedipino sublingual está contraindicado."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 7",
      "stem": "Una paciente de 75 años, con antecedente de hipertensión arterial y diabetes, en tratamiento con metforminal, glibenclamida, hidroclorotiazida y enalapril consulta por un cuadro de cefalea y malestar general. Refiere que sus presiones arteriales habituales son cercanas a 150/90 mmHg. Al examen físico presenta PA: 200/105 mmHg, FC: 73 x’, con examen pulmonar normal.",
      "question": "¿Cuál es el tratamiento del cuadro actual?",
      "options": [
        {
          "letter": "A",
          "text": "Nifedipino sublingual"
        },
        {
          "letter": "B",
          "text": "Nitroglicerina sublingual"
        },
        {
          "letter": "C",
          "text": "Nitroprusiato endovenoso"
        },
        {
          "letter": "D",
          "text": "Captopril oral"
        },
        {
          "letter": "E",
          "text": "Labetalol endovenoso"
        }
      ],
      "correct": "D",
      "explanation": "Es una crisis hipertensiva sin compromiso de órgano blanco (cefalea inespecífica, examen pulmonar normal): una urgencia hipertensiva. El tratamiento es un antihipertensivo oral como el captopril, con descenso gradual. El nifedipino sublingual está contraindicado, y los fármacos endovenosos son para las emergencias.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Una paciente de setenta y cinco años, hipertensa y diabética, con enalapril, hidroclorotiazida y metformina, consulta por cefalea y malestar. Sus presiones habituales son de ciento cincuenta sobre noventa. Hoy tiene doscientos sobre ciento cinco, con examen pulmonar normal.",
        "question": "¿Cuál es el tratamiento del cuadro actual?",
        "options": "Las opciones: nifedipino sublingual; nitroglicerina sublingual; nitroprusiato endovenoso; captopril oral; o labetalol endovenoso. Piénsalo.",
        "answer": "Es la D. No hay daño de órgano blanco, así que es una urgencia: un antihipertensivo oral, como el captopril. Las opciones endovenosas son para las emergencias, y el nifedipino sublingual, la A, está prohibido."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 28",
      "stem": "Un paciente de 68 años, con antecedente de diabetes e hipertensión de larga data, mal controlado, consulta por un cuadro de disnea, opresión precordial y malestar general que comenzó hace dos horas. Al examen físico tiene FC: 88 lpm, PA: 220/120 mmHg y se ausculta ritmo regular en dos tiempos sin soplos y murmullo pulmonar presente bilateral, con escasos crépitos basales. Se solicita electrocardiograma que muestra desnivel de 2 milímetros en las derivaciones precordiales izquierdas.",
      "question": "¿Cuál es el fármaco de elección para el control de su presión arterial?",
      "options": [
        {
          "letter": "A",
          "text": "Nitroprusiato endovenoso en infusión continua"
        },
        {
          "letter": "B",
          "text": "Nitroglicerina endovenosa en infusión continua"
        },
        {
          "letter": "C",
          "text": "Captopril vía oral"
        },
        {
          "letter": "D",
          "text": "Hidralazina endovenosa"
        },
        {
          "letter": "E",
          "text": "Nifedipino sublingual"
        }
      ],
      "correct": "B",
      "explanation": "Es una emergencia hipertensiva con síndrome coronario agudo (opresión precordial, desnivel del ST, presión 220/120 y crépitos basales). En el infarto con crisis hipertensiva el fármaco de elección es la nitroglicerina endovenosa en infusión continua; el labetalol o el nitroprusiato se prefieren en la disección aórtica, y el nifedipino sublingual está contraindicado.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de sesenta y ocho años, diabético e hipertenso mal controlado, con disnea y opresión precordial desde hace dos horas. La presión es de doscientos veinte sobre ciento veinte, hay escasos crépitos basales y el electrocardiograma muestra desnivel del ST de dos milímetros en las precordiales izquierdas.",
        "question": "¿Cuál es el fármaco de elección para controlar su presión?",
        "options": "Las opciones: nitroprusiato en infusión; nitroglicerina en infusión; captopril oral; hidralazina endovenosa; o nifedipino sublingual. Piénsalo.",
        "answer": "Es la B. Es una emergencia hipertensiva con un síndrome coronario agudo, y el fármaco de elección es la nitroglicerina endovenosa en infusión continua. El nitroprusiato y el labetalol son para la disección, y la E, el nifedipino sublingual, es la que nunca se usa."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: crisis hipertensivas",
      "cards": [
        {
          "title": "Clasificar",
          "tag": "El órgano manda",
          "kind": "key",
          "items": [
            {
              "t": "Daño agudo de órgano: emergencia",
              "d": "Sin daño: urgencia",
              "say": "Cerremos con las reglas de oro. La cifra no define la gravedad: la define el daño agudo de órgano blanco. Con daño, emergencia, con cuidados intensivos y fármacos endovenosos. Sin daño, urgencia, con fármaco oral y control en veinticuatro a cuarenta y ocho horas."
            },
            {
              "t": "PAM ↓ máximo 25% en 1 hora",
              "d": "Luego 160/100 en 2-6 h",
              "say": "Se baja la presión media como máximo veinticinco por ciento en la primera hora, porque un descenso mayor cae bajo la autorregulación."
            }
          ]
        },
        {
          "title": "Elegir",
          "tag": "Fármaco y errores",
          "kind": "alert",
          "items": [
            {
              "t": "SCA y EAP: nitroglicerina · Disección: labetalol",
              "d": "Eclampsia: magnesio",
              "say": "Infarto y edema pulmonar, nitroglicerina. Disección, labetalol con meta de sistólica bajo ciento veinte y frecuencia bajo sesenta. Eclampsia, magnesio."
            },
            {
              "t": "Nunca nifedipino sublingual",
              "d": "Ni UCI para una urgencia",
              "say": "Y nunca nifedipino sublingual. Si te llevas una sola idea de hoy: ante una presión muy alta, la pregunta no es cuánto sube, sino qué órgano está sufriendo. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Crisis hipertensiva: urgencia o emergencia",
    "root": {
      "k": "start",
      "t": "PA ≥ 180 o ≥ 120",
      "s": "Repetir en reposo y buscar daño de órgano",
      "say": "Llega un paciente con presión muy alta. Primero se repite la medición en reposo y se busca daño agudo de órgano blanco: neurológico, torácico, visual, renal, embarazo.",
      "kids": [
        [
          "Sin daño agudo",
          {
            "k": "ok",
            "t": "Urgencia hipertensiva",
            "s": "Reposo + fármaco oral",
            "say": "Si no hay daño agudo, es una urgencia: reposo de treinta a sesenta minutos y un antihipertensivo oral, como captopril. Alta con control en atención primaria en veinticuatro a cuarenta y ocho horas.",
            "kids": []
          }
        ],
        [
          "Daño agudo de órgano",
          {
            "k": "alert",
            "t": "Emergencia hipertensiva",
            "s": "UCI + fármaco EV titulable",
            "say": "Si hay daño agudo, es una emergencia: cuidados intensivos y fármaco endovenoso. La presión media baja veinte a veinticinco por ciento en la primera hora.",
            "kids": [
              [
                "SCA o edema pulmonar",
                {
                  "k": "do",
                  "t": "Nitroglicerina EV",
                  "s": "± furosemida en EAP",
                  "say": "En el síndrome coronario agudo, nitroglicerina endovenosa. En el edema pulmonar, nitroglicerina más furosemida.",
                  "kids": []
                }
              ],
              [
                "Disección aórtica",
                {
                  "k": "refer",
                  "t": "Labetalol o esmolol EV",
                  "s": "PAS < 120 y FC < 60 en 20 min",
                  "say": "En la disección, un betabloqueador endovenoso hasta sistólica bajo ciento veinte y frecuencia bajo sesenta en veinte minutos.",
                  "kids": []
                }
              ],
              [
                "Eclampsia",
                {
                  "k": "do",
                  "t": "Sulfato de magnesio + labetalol",
                  "s": "Resolución obstétrica",
                  "say": "En la eclampsia, sulfato de magnesio y labetalol o hidralazina, con resolución obstétrica.",
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
