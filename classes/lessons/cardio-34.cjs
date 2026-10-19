// Clase 5.6 (Cardiología) — Taponamiento cardíaco y pericardiocentesis. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-34). Códigos (books/data/v3_codemap.json): 1.01.2.008 Taponamiento
// pericárdico (Dx específico · Tx inicial · Seguimiento derivar) y 1.01.5.007 Punción pericárdica (derivar a especialista).
// Preguntas reales (class_questions.cjs cardio-34): Diciembre 2017 P3 (disnea, hipotensión, yugulares, ruidos apagados, bajo voltaje) y Julio 2024 P136
// (cáncer de pulmón con síncopes: taponamiento y no TEP). Enunciados y alternativas copiados del banco.
// No usadas: Diciembre 2024 P158 (enunciado roto: «Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico»; clave A
// ecocardiograma, coincide con el libro). Se agregó una pregunta del libro (cáncer de pulmón, Beck + pulso paradojal) con la etiqueta «Banco EUNACOM · Caso representativo».
// Fotos en contexto: ecografía con derrame pericárdico (Pocket Atlas of Emergency Ultrasound, Reardon y Ma, p. 146) y registro de pulso paradójico
// (Bates, Guide to Physical Examination and History Taking, 2017).
// En movimiento: scenes/cardio_b5.html ?v=tapon (gráfico propio: curva presión-volumen del pericardio y pulso paradojal).

module.exports = {
  "id": "cardio-34",
  "tier": 2,
  "slides": [
    {
      "type": "cover",
      "subtitle": "Un shock obstructivo que se cura con una aguja: reconocerlo y drenarlo a tiempo",
      "say": "Bienvenido. En la clase anterior vimos la pericarditis y dijimos que el derrame puede crecer. Hoy vemos lo que pasa cuando crece demasiado o muy rápido: el taponamiento cardíaco. Es un shock obstructivo que se corrige con un procedimiento de minutos si lo reconoces, y que mata si lo confundes con insuficiencia cardíaca. El examen pregunta la tríada de Beck, el pulso paradojal y el tratamiento."
    },
    {
      "type": "flow",
      "kicker": "Fisiopatología",
      "title": "El pericardio no se estira rápido",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "cause",
          "t": "Líquido a presión",
          "s": "En el saco pericárdico"
        },
        {
          "id": "b",
          "col": 1,
          "row": 1,
          "k": "mech",
          "t": "Colapso diastólico",
          "s": "AD y VD"
        },
        {
          "id": "c",
          "col": 2,
          "row": 0,
          "k": "effect",
          "t": "Llenado ↓, gasto ↓",
          "s": "Hipotensión, shock"
        },
        {
          "id": "d",
          "col": 2,
          "row": 2,
          "k": "effect",
          "t": "Venas del cuello llenas",
          "s": "Pulmones limpios"
        },
        {
          "id": "e",
          "col": 3,
          "row": 1,
          "k": "alert",
          "t": "Pericardiocentesis",
          "s": "Es la solución"
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
          "note": "Cuenta la velocidad, no solo el volumen",
          "say": "El pericardio fibroso se estira poco. Si el líquido se acumula en semanas, como en un tumor o un hipotiroidismo, puede llegar a uno o dos litros sin problema. Pero si llega en horas, por un trauma, una rotura o un procedimiento, con cien a doscientos mililitros ya hay taponamiento. La presión en el saco comprime primero las cavidades derechas en la diástole."
        },
        {
          "show": [
            "c",
            "d"
          ],
          "note": "Shock con pulmones limpios",
          "say": "El ventrículo no se llena, el volumen sistólico cae y el cuerpo compensa con taquicardia y vasoconstricción. Cuando eso se agota, aparece el shock. Como las cavidades están comprimidas y no congestionadas, los pulmones están limpios y las venas del cuello están llenas."
        },
        {
          "show": [
            "e"
          ],
          "note": "Se resuelve drenando",
          "say": "Y la solución no es un diurético ni un vasodilatador, que empeoran el cuadro porque bajan la precarga. La solución es sacar el líquido."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Causas",
      "title": "Cuándo pensar en taponamiento",
      "cards": [
        {
          "title": "Frecuentes",
          "tag": "Antecedente clave",
          "kind": "key",
          "items": [
            {
              "t": "Cáncer: pulmón, mama, linfoma",
              "d": "Derrame hemorrágico",
              "say": "La causa más preguntada es la neoplasia, sobre todo de pulmón y de mama, con derrame hemorrágico. Un paciente con cáncer, disnea, síncope e hipotensión tiene un taponamiento hasta que se demuestre lo contrario, aunque el tromboembolismo pulmonar sea tentador."
            },
            {
              "t": "Pericarditis viral, urémica, tuberculosa",
              "d": "Anticoagulación excesiva",
              "say": "Otras causas son las pericarditis virales, urémicas y tuberculosas, y la anticoagulación excesiva."
            }
          ]
        },
        {
          "title": "Agudas y graves",
          "tag": "Cirugía",
          "kind": "alert",
          "items": [
            {
              "t": "Trauma penetrante o iatrogenia",
              "d": "Catéter, marcapaso, cirugía cardíaca",
              "say": "Las causas agudas son el trauma torácico penetrante y la perforación por un catéter, un marcapaso o una cirugía cardíaca."
            },
            {
              "t": "Rotura post-IAM y disección tipo A",
              "d": "Se resuelven en pabellón",
              "say": "Y la rotura de la pared libre después de un infarto, y la disección aórtica tipo A, que rompe hacia el pericardio. En esos casos el drenaje no basta y el paciente va a pabellón."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clínica",
      "title": "Tríada de Beck y pulso paradojal",
      "cards": [
        {
          "title": "Tríada de Beck",
          "tag": "Se pregunta siempre",
          "kind": "key",
          "items": [
            {
              "t": "Hipotensión",
              "d": "Con shock en los casos graves",
              "say": "La tríada de Beck son tres hallazgos. Hipotensión arterial, que puede llegar al shock."
            },
            {
              "t": "Ingurgitación yugular marcada",
              "d": "Onda x prominente, sin onda y",
              "say": "Ingurgitación yugular marcada, con onda x prominente y sin onda y, porque el ventrículo solo se llena durante la sístole."
            },
            {
              "t": "Ruidos cardíacos apagados",
              "d": "Más pulmones limpios y taquicardia",
              "say": "Y ruidos cardíacos apagados o alejados, porque el líquido amortigua los ruidos. Se suma taquicardia y pulmones limpios."
            }
          ]
        },
        {
          "title": "Pulso paradojal",
          "tag": "No es Kussmaul",
          "kind": "alert",
          "items": [
            {
              "t": "PAS cae > 10 mmHg al inspirar",
              "d": "Interdependencia ventricular",
              "say": "El pulso paradojal es una caída de la presión sistólica de más de diez milímetros de mercurio al inspirar. En la inspiración el ventrículo derecho se llena más y empuja el tabique hacia la izquierda, y el ventrículo izquierdo se llena menos. Mira este registro: la amplitud del pulso baja con cada inspiración.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-34/02_pulso-paradojal-trazado__bates_p432.jpg",
                "label": "Pulso paradojal",
                "at": "Mira este registro",
                "credit": "Bates, Guide to Physical Examination and History Taking (2017), pulso paradójico"
              }
            },
            {
              "t": "No confundir con signo de Kussmaul",
              "d": "Kussmaul: la yugular sube al inspirar (constricción)",
              "say": "No lo confundas con el signo de Kussmaul, que es el aumento de la presión yugular en la inspiración y se ve en la pericarditis constrictiva, no en el taponamiento."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "Presión, volumen y pulso paradojal",
      "images": [
        {
          "src": "animaciones/cardio-34/A1_presion_volumen_pulso_paradojal.mp4",
          "label": "Curva presión-volumen y pulso paradojal",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.6"
        }
      ],
      "steps": [
        {
          "note": "Rápido: pocos mililitros bastan",
          "say": "A la izquierda, la curva roja es un derrame que llega rápido: con apenas ciento cincuenta o doscientos mililitros la presión sube sobre la línea amarilla, la del taponamiento. La curva azul es un derrame lento: el pericardio se acomoda y tolera uno o dos litros."
        },
        {
          "note": "La PAS cae al inspirar",
          "say": "A la derecha, la presión arterial latido a latido. En las zonas sombreadas, la inspiración, la amplitud cae. Esa caída de más de diez milímetros de mercurio es el pulso paradojal, y la causa es la interdependencia entre los dos ventrículos."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Diagnóstico",
      "title": "Ecocardiograma, ECG y radiografía",
      "cards": [
        {
          "title": "Ecocardiograma",
          "tag": "El que diagnostica",
          "kind": "key",
          "items": [
            {
              "t": "Colapso diastólico de AD y VD",
              "d": "VCI dilatada sin colapso inspiratorio",
              "say": "El examen que hace el diagnóstico es el ecocardiograma, y se hace a la cabecera. Mira esta ecografía: el derrame aparece como un halo oscuro alrededor de las cavidades. En el taponamiento se ve el colapso diastólico de la aurícula y el ventrículo derechos, y una vena cava inferior dilatada que no colapsa al inspirar.",
              "photo": {
                "src": "biblioteca/20_cardiologia/cardio-34/01_derrame-pericardico-eco__pocket-atlas-us_p146.jpg",
                "label": "Derrame pericárdico en eco",
                "at": "Mira esta ecografía",
                "credit": "Pocket Atlas of Emergency Ultrasound (Reardon y Ma), p. 146"
              }
            },
            {
              "t": "Ventana subxifoidea en el trauma",
              "d": "FAST; no esperar TAC",
              "say": "En el trauma, la ventana subxifoidea de la ecografía FAST lo detecta. No se espera una TAC en un paciente inestable."
            }
          ]
        },
        {
          "title": "ECG y radiografía",
          "tag": "Apoyo",
          "kind": "criteria",
          "items": [
            {
              "t": "Bajo voltaje y alternancia eléctrica",
              "d": "QRS que alterna de amplitud",
              "say": "El electrocardiograma muestra bajo voltaje y alternancia eléctrica: los complejos QRS alternan de amplitud latido a latido, porque el corazón oscila dentro del líquido."
            },
            {
              "t": "Silueta en botella de agua",
              "d": "Pulmones limpios; puede ser normal",
              "say": "La radiografía puede mostrar una silueta cardíaca en botella de agua con campos pulmonares limpios, pero en un derrame agudo pequeño puede ser normal. Un tórax normal no descarta el taponamiento."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Tratamiento",
      "title": "Pericardiocentesis y sostén",
      "cards": [
        {
          "title": "El procedimiento",
          "tag": "Derivar o actuar",
          "kind": "pharma",
          "items": [
            {
              "t": "Pericardiocentesis guiada por eco",
              "d": "Subxifoidea; catéter pigtail 24-72 h",
              "say": "El tratamiento de emergencia es la pericardiocentesis, preferentemente guiada por ecocardiografía. La punción es subxifoidea, uno a dos centímetros bajo el apéndice xifoides, con la aguja dirigida al hombro izquierdo, y se deja un catéter de drenaje. El líquido se envía a citología, cultivo y adenosina desaminasa."
            },
            {
              "t": "Médico general: reconocer y derivar",
              "d": "A ciegas solo si hay paro inminente",
              "say": "En el nivel del médico general se reconoce, se estabiliza y se deriva de inmediato. La punción a ciegas se reserva para el paro inminente. En el trauma, la disección y la rotura cardíaca, el paciente va a pabellón."
            }
          ]
        },
        {
          "title": "Mientras tanto",
          "tag": "Sostén",
          "kind": "alert",
          "items": [
            {
              "t": "Volumen EV y vasopresor",
              "d": "Aumenta la presión de llenado",
              "say": "Mientras se prepara el procedimiento se da volumen endovenoso, que aumenta transitoriamente la presión de llenado, y vasopresores si hace falta."
            },
            {
              "t": "Evitar diuréticos, nitratos y VPP",
              "d": "Bajan la precarga",
              "say": "Se evitan los diuréticos, los vasodilatadores como la nitroglicerina, y la ventilación con presión positiva, que reducen la precarga y pueden precipitar el paro."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: del paciente hipotenso con yugulares ingurgitadas al drenaje."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Taponamiento: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Hipotensión + yugulares + ruidos apagados",
            "Taponamiento: pericardiocentesis",
            "Furosemida o nitroglicerina"
          ],
          "say": "Hipotensión, yugulares ingurgitadas y ruidos apagados: taponamiento, y se drena. Furosemida o nitroglicerina empeoran el cuadro."
        },
        {
          "cells": [
            "Cáncer de pulmón, síncope, ruidos apagados",
            "Taponamiento",
            "Tromboembolismo pulmonar"
          ],
          "say": "Paciente con cáncer de pulmón, síncope y ruidos apagados: taponamiento. El tromboembolismo es la tentación, pero no apaga los ruidos."
        },
        {
          "cells": [
            "Bajo voltaje y alternancia eléctrica",
            "Derrame con taponamiento",
            "Infarto"
          ],
          "say": "Bajo voltaje con alternancia eléctrica apunta a derrame pericárdico grande."
        },
        {
          "cells": [
            "PAS cae > 10 mmHg al inspirar",
            "Pulso paradojal",
            "Llamarlo signo de Kussmaul"
          ],
          "say": "Caída de la sistólica mayor de diez al inspirar: pulso paradojal. El signo de Kussmaul es otra cosa, de la constricción."
        },
        {
          "cells": [
            "Sospecha: examen de elección",
            "Ecocardiograma",
            "TAC con contraste primero"
          ],
          "say": "Para hacer el diagnóstico, el ecocardiograma. La TAC con contraste no es lo primero en un paciente inestable."
        },
        {
          "cells": [
            "Taponamiento por disección o rotura",
            "Pabellón",
            "Solo puncionar"
          ],
          "say": "Si el taponamiento viene de una disección o una rotura cardíaca, el paciente va a pabellón. Solo puncionar puede soltar el sangrado."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Mujer de 55 años con cáncer de pulmón consulta por disnea intensa y decaimiento de 3 días. PA 85/50 mmHg, FC 118 lpm, SatO₂ 94%. Ingurgitación yugular hasta el ángulo mandibular, ruidos cardíacos muy apagados y campos pulmonares limpios. La PAS cae 18 mmHg al inspirar. ECG con bajo voltaje y QRS que alterna de amplitud.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Pericardiocentesis guiada por ecocardiografía y bolo de suero fisiológico mientras se prepara"
        },
        {
          "letter": "B",
          "text": "Furosemida 80 mg EV"
        },
        {
          "letter": "C",
          "text": "Nitroglicerina en infusión"
        },
        {
          "letter": "D",
          "text": "Anticoagulación con heparina y angioTAC pulmonar"
        },
        {
          "letter": "E",
          "text": "Intubación con ventilación mecánica y sedación profunda"
        }
      ],
      "correct": "A",
      "explanation": "Taponamiento neoplásico con tríada de Beck, pulso paradojal y alternancia eléctrica. El tratamiento es la pericardiocentesis inmediata guiada por eco, con volumen EV mientras se prepara. Los diuréticos, los vasodilatadores y la ventilación con presión positiva reducen la precarga y empeoran el cuadro.",
      "say": {
        "stem": "Una mujer de cincuenta y cinco años con cáncer de pulmón, con disnea intensa. La presión es ochenta y cinco sobre cincuenta, y la frecuencia ciento dieciocho. Tiene las yugulares ingurgitadas, los ruidos cardíacos muy apagados y los pulmones limpios. La presión sistólica cae dieciocho al inspirar, y el electrocardiograma muestra bajo voltaje con alternancia.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: pericardiocentesis con bolo de suero; furosemida; nitroglicerina; heparina y angioTAC; o intubación con ventilación mecánica. Piénsalo.",
        "answer": "Es la A. Es un taponamiento con tríada de Beck, y el tratamiento es drenar. Mientras tanto, volumen. La B y la C son las trampas: bajan la precarga, que es justo lo que este corazón necesita. Y la E es peligrosa, porque la presión positiva reduce el retorno venoso."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 3",
      "stem": "Un paciente con antecedente de ser fumador de 30 paquetes año, suspendido hace 5 años, consulta por un cuadro de 24 horas de disnea de mínimos esfuerzos, asociada a intolerancia al ejercicio y malestar general. Al examen físico su PA: 90/60 y su FC: 110x’. Además destacan yugulares ingurgitadas a 45 grados y ruidos cardíacos apagados a la auscultación. Su electrocardiograma muestra disminución difusa del voltaje.",
      "question": "El diagnóstico más probable es:",
      "options": [
        {
          "letter": "A",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "B",
          "text": "Neumotórax"
        },
        {
          "letter": "C",
          "text": "Derrame pleural"
        },
        {
          "letter": "D",
          "text": "Infarto agudo al miocardio"
        },
        {
          "letter": "E",
          "text": "Taponamiento cardíaco"
        }
      ],
      "correct": "E",
      "explanation": "Disnea con hipotensión (90/60), taquicardia, yugulares ingurgitadas, ruidos apagados y bajo voltaje en el ECG es la tríada de Beck con bajo voltaje: taponamiento cardíaco. El tromboembolismo pulmonar no atenúa los ruidos ni baja el voltaje; el neumotórax y el derrame pleural alteran el murmullo pulmonar.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente ex fumador, con veinticuatro horas de disnea de mínimos esfuerzos e intolerancia al ejercicio. La presión es de noventa sobre sesenta y la frecuencia de ciento diez. Tiene las yugulares ingurgitadas a cuarenta y cinco grados, los ruidos cardíacos apagados y el electrocardiograma con disminución difusa del voltaje.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: tromboembolismo pulmonar; neumotórax; derrame pleural; infarto agudo del miocardio; o taponamiento cardíaco. Piénsalo.",
        "answer": "Es la E. Hipotensión, yugulares ingurgitadas y ruidos apagados son la tríada de Beck, y el bajo voltaje del electrocardiograma lo confirma. La A tienta por la disnea, pero el tromboembolismo no apaga los ruidos cardíacos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 136",
      "stem": "Un paciente de 79 años, con antecedente de cáncer de pulmón en espera de tratamiento, presenta un cuadro de 5 días de malestar general, disnea y episodios de pérdida de conocimiento de pocos segundos de duración, con recuperación completa. El examen físico muestra presión arterial: 80/60 mmHg, frecuencia cardíaca: 110x’ regular, cuello con ingurgitación yugular a 50 grados. El examen pulmonar muestra murmullo pulmonar presente, sin otros ruidos agregados y la auscultación cardíaca es difícil de realizar, ya que los ruidos cardíacos se encuentran apagados.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "B",
          "text": "Taponamiento cardíaco"
        },
        {
          "letter": "C",
          "text": "Derrame pleural"
        },
        {
          "letter": "D",
          "text": "Síndrome de la vena cava superior"
        },
        {
          "letter": "E",
          "text": "Insuficiencia tricuspídea"
        }
      ],
      "correct": "B",
      "explanation": "La hipotensión, la ingurgitación yugular y los síncopes en un paciente con cáncer de pulmón sugieren un tromboembolismo pulmonar, pero la disminución de la intensidad de los ruidos cardíacos orienta a un derrame pericárdico con taponamiento. El derrame pleural y el síndrome de vena cava superior no explican los ruidos apagados.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de setenta y nueve años con cáncer de pulmón en espera de tratamiento, con cinco días de malestar, disnea y pérdidas de conocimiento breves. La presión es de ochenta sobre sesenta, la frecuencia de ciento diez, y tiene ingurgitación yugular a cincuenta grados. Los ruidos cardíacos están apagados.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: tromboembolismo pulmonar; taponamiento cardíaco; derrame pleural; síndrome de vena cava superior; o insuficiencia tricuspídea. Piénsalo.",
        "answer": "Es la B. La hipotensión, las yugulares y los síncopes con cáncer sugieren un tromboembolismo, pero los ruidos apagados orientan al taponamiento. Esa es la pista que decide la pregunta."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: taponamiento cardíaco",
      "cards": [
        {
          "title": "Reconocer",
          "tag": "Shock con pulmones limpios",
          "kind": "key",
          "items": [
            {
              "t": "Tríada de Beck",
              "d": "Hipotensión, yugulares, ruidos apagados",
              "say": "Cerremos con las reglas de oro. Taponamiento es hipotensión, ingurgitación yugular y ruidos apagados, con pulmones limpios. El pulso paradojal es una caída de más de diez en la sistólica al inspirar, y no es el signo de Kussmaul."
            },
            {
              "t": "Ecocardiograma: diagnostica",
              "d": "Bajo voltaje y alternancia eléctrica",
              "say": "El ecocardiograma hace el diagnóstico. El electrocardiograma muestra bajo voltaje y alternancia eléctrica."
            }
          ]
        },
        {
          "title": "Tratar",
          "tag": "Drenar",
          "kind": "alert",
          "items": [
            {
              "t": "Pericardiocentesis inmediata",
              "d": "Volumen EV mientras se prepara",
              "say": "El tratamiento es la pericardiocentesis inmediata, con volumen mientras se prepara."
            },
            {
              "t": "Sin diuréticos, nitratos ni VPP",
              "d": "Trauma o disección: pabellón",
              "say": "No se dan diuréticos, nitratos ni presión positiva. Si te llevas una sola idea de hoy: en un paciente hipotenso con yugulares llenas y pulmones limpios, el problema es de presión del lado derecho y la solución es drenar. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Taponamiento cardíaco: del shock al drenaje",
    "root": {
      "k": "start",
      "t": "Hipotensión + yugulares + ruidos apagados",
      "s": "Cáncer, pericarditis, trauma, cirugía",
      "say": "Llega un paciente con hipotensión, yugulares ingurgitadas y ruidos cardíacos apagados, con pulmones limpios y antecedente de cáncer, pericarditis, trauma o procedimiento cardíaco.",
      "kids": [
        [
          "Sospecha",
          {
            "k": "q",
            "t": "Ecocardiograma a la cabecera",
            "s": "Derrame, colapso de AD/VD, VCI plétora",
            "say": "Se hace un ecocardiograma a la cabecera: derrame con colapso diastólico de la aurícula y el ventrículo derechos y vena cava inferior dilatada confirman el taponamiento.",
            "kids": [
              [
                "Taponamiento",
                {
                  "k": "alert",
                  "t": "Pericardiocentesis",
                  "s": "Guiada por eco; catéter de drenaje",
                  "say": "Confirmado el taponamiento, pericardiocentesis inmediata guiada por ecocardiografía, con volumen endovenoso mientras se prepara. Se evitan los diuréticos, los nitratos y la ventilación con presión positiva.",
                  "kids": []
                }
              ],
              [
                "Trauma, disección o rotura",
                {
                  "k": "refer",
                  "t": "Pabellón",
                  "s": "Ventana pericárdica o cirugía",
                  "say": "Si el origen es un trauma, una disección tipo A o una rotura cardíaca, el paciente va a pabellón.",
                  "kids": []
                }
              ],
              [
                "Derrame sin taponamiento",
                {
                  "k": "ok",
                  "t": "Tratar la causa",
                  "s": "Eco seriado",
                  "say": "Si hay derrame sin taponamiento, se trata la causa y se controla con ecocardiograma seriado.",
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
