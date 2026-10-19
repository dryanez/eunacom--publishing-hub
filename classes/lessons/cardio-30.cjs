// Clase 5.2 (Cardiología) — Hipertensión arterial: tratamiento farmacológico, metas y GES. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-30, tier 3). Código 1.01.1.015 Hipertensión arterial esencial
// (Dx específico · Tx completo · Seguimiento completo), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-30): Diciembre 2017 P65 (85 años, 145/75: mantener), Diciembre 2017 P9 (diabético con proteinuria:
// enalapril), Julio 2025 P32 (tos por enalapril: cambiar a ARA II) y Julio 2019 P51 (edema con amlodipino: suspenderlo). Enunciados y alternativas
// copiados del banco (Diciembre 2017 P65: se corrigió «tratamienti» del PDF en la alternativa E).
// No usadas: Diciembre 2025 P177 (cardio-29); Diciembre 2019 P122 y Enero 2023 P85 (edema por amlodipino, repiten Julio 2019 P51); Julio 2016 P14
// (enalapril en diabética, repite Diciembre 2017 P9); Enero 2023 P86 y Enero 2023 P180 (enunciados sin datos suficientes); Diciembre 2024 P78
// (alternativas rotas); Diciembre 2022 P105 (clave dudosa: atenolol en diabético) y Diciembre 2022 P36 (clave dudosa: doxazosina con IC).
// Fotos: sin foto clínica pertinente (tema de fármacos; ver FALTANTES_cardio_bloque_5.md). En movimiento: scenes/cardio_b5.html ?v=escalera
// (gráfico propio: presión que baja con cada paso del tratamiento).

module.exports = {
  "id": "cardio-30",
  "tier": 3,
  "slides": [
    {
      "type": "cover",
      "subtitle": "Qué fármaco, para quién, con qué meta y qué hacer cuando aparece un efecto adverso",
      "say": "Bienvenido. En la clase anterior hicimos el diagnóstico de la hipertensión. Hoy tratamos: cuándo se parte con remedios, cuál es la primera elección según el paciente, qué meta se busca y, lo que más se pregunta, qué hacer con la tos del enalapril o con el edema del amlodipino. Es una clase de decisiones prácticas, y el examen la repite casi igual en cada aplicación."
    },
    {
      "type": "flow",
      "kicker": "Principios",
      "title": "Del grado y el riesgo a la decisión",
      "nodes": [
        {
          "id": "a",
          "col": 0,
          "row": 1,
          "k": "start",
          "t": "HTA confirmada",
          "s": "Grado y riesgo"
        },
        {
          "id": "b",
          "col": 1,
          "row": 0,
          "k": "good",
          "t": "Estilo de vida",
          "s": "A todos, siempre"
        },
        {
          "id": "c",
          "col": 2,
          "row": 0,
          "k": "q",
          "t": "Grado 1, riesgo bajo",
          "s": "Prueba de 3-6 meses"
        },
        {
          "id": "d",
          "col": 2,
          "row": 2,
          "k": "alert",
          "t": "Grado ≥ 2, diabetes, ERC",
          "s": "Fármaco desde el inicio"
        },
        {
          "id": "e",
          "col": 3,
          "row": 1,
          "k": "refer",
          "t": "Meta y control",
          "s": "Cada 2-4 semanas"
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
          "from": "a",
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
          "note": "Todos reciben medidas de estilo de vida",
          "say": "Todo hipertenso recibe medidas de estilo de vida: menos de cinco gramos de sal al día, bajar de peso, dieta DASH, ejercicio, poco alcohol y no fumar. Juntas pueden bajar entre diez y veinte milímetros de mercurio."
        },
        {
          "show": [
            "c"
          ],
          "note": "Grado uno de bajo riesgo: se espera",
          "say": "En el hipertenso grado uno, de riesgo bajo y sin daño de órgano blanco, se ensayan solas durante tres a seis meses. Si no se llega a la meta, se agrega el fármaco."
        },
        {
          "show": [
            "d",
            "e"
          ],
          "note": "Los demás parten con fármaco",
          "say": "Se parte con fármacos de inmediato si la hipertensión es grado dos o tres, si el riesgo es alto, o si hay diabetes, enfermedad renal crónica, daño de órgano blanco o enfermedad cardiovascular. Y se controla cada dos a cuatro semanas hasta llegar a la meta."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clases de fármacos",
      "title": "Inhibidores del eje renina-angiotensina",
      "cards": [
        {
          "title": "IECA",
          "tag": "Enalapril",
          "kind": "pharma",
          "items": [
            {
              "t": "Tos seca en 10-15%",
              "d": "Bradicinina; rara vez angioedema",
              "say": "Los inhibidores de la enzima convertidora, como el enalapril, protegen al riñón y al corazón. Su efecto adverso clásico es la tos seca en diez a quince por ciento de los pacientes, por acumulación de bradicinina. Rara vez producen angioedema, y en ese caso se suspenden para siempre."
            },
            {
              "t": "Hiperpotasemia, creatinina ↑",
              "d": "Hasta 30% es esperable; más: sospechar estenosis renal",
              "say": "Pueden dar hiperpotasemia y un alza de la creatinina de hasta treinta por ciento al inicio, que es esperable. Si sube más, se sospecha estenosis de la arteria renal."
            }
          ]
        },
        {
          "title": "ARA II",
          "tag": "Losartán",
          "kind": "pharma",
          "items": [
            {
              "t": "No dan tos",
              "d": "Reemplazo del IECA",
              "say": "Los antagonistas del receptor de angiotensina, como el losartán, tienen el mismo beneficio y no dan tos. Son el reemplazo cuando el enalapril produce tos."
            },
            {
              "t": "No se combinan con IECA",
              "d": "Prohibidos en el embarazo",
              "say": "Dos reglas que se preguntan: nunca se combinan entre sí, y están prohibidos en el embarazo, porque son teratogénicos."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Clases de fármacos",
      "title": "Calcioantagonistas, tiazidas y el resto",
      "cards": [
        {
          "title": "Calcioantagonista DHP",
          "tag": "Amlodipino",
          "kind": "pharma",
          "items": [
            {
              "t": "Edema maleolar bilateral",
              "d": "Dosis-dependiente; no es insuficiencia cardíaca",
              "say": "El amlodipino dilata las arteriolas pero no las venas, y por eso produce edema de los tobillos, bilateral, que depende de la dosis. No es insuficiencia cardíaca ni retención de sal, y el diurético no lo corrige."
            },
            {
              "t": "Verapamilo y diltiazem frenan el nodo AV",
              "d": "No combinar con betabloqueador",
              "say": "Los calcioantagonistas no dihidropiridínicos, verapamilo y diltiazem, frenan el nodo aurículo-ventricular y no se combinan con betabloqueadores."
            }
          ]
        },
        {
          "title": "Tiazidas y otros",
          "tag": "Efectos adversos",
          "kind": "pharma",
          "items": [
            {
              "t": "Hipopotasemia, hiperuricemia",
              "d": "Gota: evitarlas; VFG < 30: ineficaces",
              "say": "Las tiazidas dan hipopotasemia, hiponatremia, hiperuricemia, y se evitan en la gota. Con filtración glomerular bajo treinta pierden efecto, salvo la clortalidona."
            },
            {
              "t": "Espironolactona: hiperpotasemia",
              "d": "Betabloqueador: solo con indicación propia",
              "say": "La espironolactona da hiperpotasemia y ginecomastia, y es el cuarto fármaco. El betabloqueador ya no es de primera línea para la hipertensión sola: se reserva para coronarios, insuficiencia cardíaca y taquiarritmias."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Estrategia",
      "title": "Monoterapia, combinación y triple",
      "cards": [
        {
          "title": "Primera línea",
          "tag": "Dosis fija",
          "kind": "key",
          "items": [
            {
              "t": "IECA o ARA II + CCB o tiazida",
              "d": "Si PA ≥ 160/100 o riesgo alto",
              "say": "Cuando la presión está claramente elevada, o el riesgo es alto, se parte con dos fármacos en una sola pastilla: un inhibidor del eje renina angiotensina más un calcioantagonista o una tiazida. Se alcanza antes la meta y se mejora la adherencia."
            },
            {
              "t": "Monoterapia: grado 1, frágiles, ≥ 80 años",
              "d": "Dosis baja y subir",
              "say": "La monoterapia sigue siendo razonable en el grado uno de riesgo bajo, en el frágil y en el mayor de ochenta años. Por ejemplo, un hombre de cuarenta y cinco años con hipertensión confirmada y sin otra enfermedad puede partir con un ARA dos."
            }
          ]
        },
        {
          "title": "Si no llega a la meta",
          "tag": "Escalar",
          "kind": "alert",
          "items": [
            {
              "t": "Triple: IECA/ARA II + CCB + tiazida",
              "d": "A dosis plenas",
              "say": "Si la dupla no alcanza la meta, se pasa a la terapia triple, a dosis plenas. Pero antes se verifica la adherencia, la técnica de medición, la sal y los fármacos que suben la presión, como antiinflamatorios y corticoides."
            },
            {
              "t": "Resistente: espironolactona 25-50 mg",
              "d": "Estudiar causa secundaria",
              "say": "La hipertensión resistente es la que sigue sin control con tres fármacos, uno de ellos un diurético, y buena adherencia. El cuarto fármaco es la espironolactona, y se estudia una causa secundaria."
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "kicker": "En movimiento",
      "title": "La presión baja con cada paso",
      "images": [
        {
          "src": "animaciones/cardio-30/A1_tratamiento_escalonado.mp4",
          "label": "Tratamiento escalonado y meta",
          "credit": "Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.2"
        }
      ],
      "steps": [
        {
          "note": "De 168/104 a la meta en cuatro pasos",
          "say": "Sigue la línea roja, la sistólica, y la azul, la diastólica. Parten en ciento sesenta y ocho sobre ciento cuatro. El estilo de vida baja unos diez milímetros. La combinación de dos fármacos acerca la presión a la meta, y la triple terapia la deja cerca de ciento treinta."
        },
        {
          "note": "Si no llega, la espironolactona",
          "say": "Si con tres fármacos todavía falta, es hipertensión resistente. Antes de escalar, mira el recuadro amarillo: adherencia, técnica y fármacos que suben la presión. Después se agrega la espironolactona, y la presión cruza por fin la franja verde de la meta."
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Primera elección",
      "title": "El fármaco según el paciente",
      "cards": [
        {
          "title": "Indicaciones obligadas",
          "tag": "Se preguntan",
          "kind": "key",
          "items": [
            {
              "t": "Diabético o proteinuria: IECA o ARA II",
              "d": "Protegen al riñón",
              "say": "La clase se elige por la comorbilidad. En el diabético, en el paciente con proteinuria y en la enfermedad renal crónica, la primera elección es un IECA o un ARA dos, porque frenan la progresión de la nefropatía."
            },
            {
              "t": "IC, posinfarto, coronario",
              "d": "IECA/ARA II + betabloqueador (+ espironolactona)",
              "say": "En la insuficiencia cardíaca con fracción reducida y en el posinfarto, el inhibidor del eje, el betabloqueador y, en la insuficiencia cardíaca, la espironolactona, son parte del tratamiento."
            },
            {
              "t": "Adulto mayor: CCB o tiazida",
              "d": "HTA sistólica aislada",
              "say": "En el adulto mayor con hipertensión sistólica aislada se prefieren un calcioantagonista o una tiazida."
            }
          ]
        },
        {
          "title": "Evitar",
          "tag": "Contraindicaciones",
          "kind": "alert",
          "items": [
            {
              "t": "Embarazo: metildopa, labetalol, nifedipino",
              "d": "Nunca IECA ni ARA II",
              "say": "En la embarazada, los fármacos seguros son la metildopa, el labetalol y el nifedipino de liberación prolongada. Los IECA y los ARA dos están prohibidos."
            },
            {
              "t": "Gota: sin tiazidas",
              "d": "Asma: sin betabloqueador; K alto: sin IECA",
              "say": "Con gota se evitan las tiazidas, con asma los betabloqueadores, y con hiperpotasemia o estenosis renal bilateral, los IECA y los ARA dos."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Metas",
      "title": "Cuánto bajar según la edad",
      "cards": [
        {
          "title": "Menores de 65 años",
          "tag": "Meta",
          "kind": "key",
          "items": [
            {
              "t": "< 130/80 en diabéticos, coronarios, ERC, ACV",
              "d": "No bajar de 120/70",
              "say": "En el adulto menor de sesenta y cinco años, y en los diabéticos, coronarios, con enfermedad renal o accidente cerebrovascular previo, la meta es menos de ciento treinta sobre ochenta, sin bajar de ciento veinte sobre setenta. La norma GES general mantiene menos de ciento cuarenta sobre noventa."
            }
          ]
        },
        {
          "title": "Adulto mayor",
          "tag": "Menos exigente",
          "kind": "alert",
          "items": [
            {
              "t": "65-79 años: PAS 130-139",
              "d": "PAD < 80 si lo tolera",
              "say": "Entre sesenta y cinco y setenta y nueve años, la sistólica se busca entre ciento treinta y ciento treinta y nueve. Se evita bajar demasiado, por la hipotensión ortostática y las caídas."
            },
            {
              "t": "≥ 80 años o frágil: < 150/90",
              "d": "85 años con 145/75: mantener",
              "say": "En mayores de ochenta años y en frágiles, la meta es menos de ciento cincuenta sobre noventa. Por eso un paciente de ochenta y cinco años con un promedio de ciento cuarenta y cinco sobre setenta y cinco está bien controlado, y se mantiene el tratamiento."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "Efectos adversos",
      "title": "Suspender y reemplazar el culpable",
      "cards": [
        {
          "title": "La regla",
          "tag": "Se pregunta siempre",
          "kind": "alert",
          "items": [
            {
              "t": "Tos con enalapril → ARA II",
              "d": "No agregar otro fármaco",
              "say": "La regla es que se suspende y se reemplaza el fármaco que produce el efecto adverso antes de agregar otras medidas. Tos con enalapril: se cambia a un ARA dos como el losartán."
            },
            {
              "t": "Edema con amlodipino → suspender",
              "d": "No subir el diurético",
              "say": "Edema bimaleolar con amlodipino, con presión controlada y sin signos de insuficiencia cardíaca: se suspende el amlodipino. Subir el diurético o pedir exámenes de insuficiencia cardíaca no corrige la causa."
            }
          ]
        },
        {
          "title": "Controles",
          "tag": "Seguimiento",
          "kind": "criteria",
          "items": [
            {
              "t": "Creatinina y K a 1-2 semanas",
              "d": "VFG ↓ > 30% o K > 5,5: revisar",
              "say": "Con IECA o ARA dos se mide la creatinina y el potasio a la una o dos semanas. Una caída de la filtración mayor de treinta por ciento, o un potasio sobre cinco y medio, obliga a revisar."
            },
            {
              "t": "Angioedema: suspender para siempre",
              "d": "Hipopotasemia con tiazida: reponer o cambiar",
              "say": "El angioedema por IECA se suspende de forma definitiva. Y la hipopotasemia por tiazida se repone, o se cambia el fármaco."
            }
          ]
        }
      ]
    },
    {
      "type": "points",
      "kicker": "GES y derivación",
      "title": "Garantías y cuándo derivar",
      "cards": [
        {
          "title": "GES número 21",
          "tag": "Garantía",
          "kind": "criteria",
          "items": [
            {
              "t": "Fármacos y controles garantizados",
              "d": "Indicador: PA < 140/90",
              "say": "La hipertensión primaria es el problema GES número veintiuno. El tratamiento y los controles están garantizados, y el indicador de calidad del programa es el porcentaje de pacientes con presión menor de ciento cuarenta sobre noventa."
            }
          ]
        },
        {
          "title": "Derivar",
          "tag": "Especialista",
          "kind": "alert",
          "items": [
            {
              "t": "< 40 años, resistente, sospecha secundaria",
              "d": "Daño grave o crisis recurrentes",
              "say": "Se deriva al hipertenso menor de cuarenta años, al resistente o refractario, a quien tiene sospecha de causa secundaria o daño de órgano blanco grave, y a la embarazada hipertensa."
            }
          ]
        }
      ]
    },
    {
      "type": "pathway",
      "intro": "Armemos el árbol: de la hipertensión confirmada a la meta, escalón por escalón."
    },
    {
      "type": "table",
      "kicker": "Trampas EUNACOM",
      "title": "Tratamiento de la HTA: dato, decisión, error",
      "head": [
        "Dato",
        "Decisión",
        "Error típico"
      ],
      "rows": [
        {
          "cells": [
            "Diabético con proteinuria",
            "IECA (enalapril)",
            "Amlodipino o atenolol de partida"
          ],
          "say": "Diabético con proteinuria: se parte con un IECA. Amlodipino o atenolol no protegen al riñón."
        },
        {
          "cells": [
            "Tos seca con enalapril",
            "Cambiar a ARA II",
            "Agregar otro fármaco o suspender sin reemplazo"
          ],
          "say": "Tos con enalapril: se cambia a un ARA dos. Agregar otro fármaco o suspender sin reemplazo es el error."
        },
        {
          "cells": [
            "Edema bimaleolar con amlodipino",
            "Suspender el amlodipino",
            "Subir el diurético"
          ],
          "say": "Edema bimaleolar con amlodipino: se suspende. Subir el diurético no trata la causa."
        },
        {
          "cells": [
            "85 años, PA 145/75 con 2 fármacos",
            "Mantener (meta < 150/90)",
            "Escalar el tratamiento"
          ],
          "say": "Ochenta y cinco años con ciento cuarenta y cinco sobre setenta y cinco: está en meta, y se mantiene. Escalar causa hipotensión y caídas."
        },
        {
          "cells": [
            "Triple terapia sin meta",
            "Espironolactona + estudio secundario",
            "Subir el IECA o agregar atenolol"
          ],
          "say": "Triple terapia sin meta: espironolactona y estudio de causa secundaria. Subir el IECA o agregar un betabloqueador no es la respuesta."
        },
        {
          "cells": [
            "Mujer en edad fértil",
            "Evitar IECA y ARA II",
            "Indicarlos sin advertir"
          ],
          "say": "La mujer en edad fértil no debería recibir IECA ni ARA dos sin anticoncepción, porque son teratogénicos."
        },
        {
          "cells": [
            "IECA + ARA II",
            "No se combinan",
            "Doble bloqueo para más efecto"
          ],
          "say": "IECA y ARA dos nunca se combinan: aumentan la hiperpotasemia y el daño renal."
        }
      ]
    },
    {
      "type": "quiz",
      "kicker": "Caso clínico",
      "title": "Caso clínico",
      "stem": "Mujer de 66 años, hipertensa y diabética tipo 2 con proteinuria, en tratamiento con enalapril 20 mg c/12 h, hidroclorotiazida 25 mg y amlodipino 10 mg al día. Consulta por hinchazón progresiva de ambos tobillos, sin disnea ni ortopnea. PA 128/76 mmHg, FC 70 lpm, pulmones limpios, yugulares planas, edema bimaleolar simétrico con fóvea. Creatinina 0,9 mg/dL, potasio 4,3 mEq/L.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Suspender el amlodipino y reemplazarlo si hace falta, manteniendo el IECA"
        },
        {
          "letter": "B",
          "text": "Aumentar la hidroclorotiazida a 50 mg"
        },
        {
          "letter": "C",
          "text": "Suspender el enalapril por insuficiencia cardíaca"
        },
        {
          "letter": "D",
          "text": "Solicitar ecodoppler venoso y anticoagular"
        },
        {
          "letter": "E",
          "text": "Agregar furosemida y reposo con piernas en alto"
        }
      ],
      "correct": "A",
      "explanation": "El edema maleolar bilateral con presión controlada, yugulares planas y pulmones limpios es un efecto adverso del amlodipino a dosis alta, no una insuficiencia cardíaca. Se suspende el amlodipino (y se reemplaza si la presión lo requiere) y se mantiene el IECA, que es la clase de elección en la diabética con proteinuria.",
      "say": {
        "stem": "Una mujer de sesenta y seis años, hipertensa y diabética con proteinuria, toma enalapril, hidroclorotiazida y amlodipino a dosis alta. Consulta por hinchazón de los dos tobillos, sin disnea. La presión está en ciento veintiocho sobre setenta y seis, los pulmones limpios, las yugulares planas, y el edema es simétrico. La creatinina y el potasio son normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: suspender el amlodipino manteniendo el IECA; subir la hidroclorotiazida; suspender el enalapril por insuficiencia cardíaca; pedir un ecodoppler y anticoagular; o agregar furosemida. Piénsalo.",
        "answer": "Es la A. Un edema bimaleolar simétrico con yugulares planas y presión controlada es el efecto adverso clásico del amlodipino. Se suspende ese fármaco y no el enalapril, que protege el riñón de la diabética. La E es la trampa: el diurético no corrige el edema por calcioantagonista."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 65",
      "stem": "Un paciente de 85 años, hipertenso, está en tratamiento con losartan 50 mg/12 horas y amlodipino 2,5 mg/día. Acude a control y refiere múltiples tomas de presión arterial, las que promedian 145/75 mmHg",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Aumentar la dosis de losartán a 100 mg/12 horas"
        },
        {
          "letter": "B",
          "text": "Aumentar el amlodipino a 5 mg/día"
        },
        {
          "letter": "C",
          "text": "Agregar atenolol 12,5 mg/día"
        },
        {
          "letter": "D",
          "text": "Agregar hidroclorotiazida 25 mg/día"
        },
        {
          "letter": "E",
          "text": "Mantener el tratamiento"
        }
      ],
      "correct": "E",
      "explanation": "Por su edad (85 años), la meta de presión es < 150/90 mmHg y un promedio de 145/75 con losartán y amlodipino ya está en rango. Escalar el tratamiento en un anciano expone a hipotensión ortostática y caídas: se mantiene el tratamiento.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de ochenta y cinco años, hipertenso, con losartán y amlodipino a dosis baja. En varios controles, la presión promedia ciento cuarenta y cinco sobre setenta y cinco.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: subir el losartán; subir el amlodipino; agregar atenolol; agregar hidroclorotiazida; o mantener el tratamiento. Piénsalo.",
        "answer": "Es la E. En un paciente de ochenta y cinco años, la meta es menos de ciento cincuenta sobre noventa, y ya está en ella. Cualquier escalamiento arriesga hipotensión y caídas. La tentación de las otras opciones es la de tratar un número y no al paciente."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 9",
      "stem": "Un paciente de 63 años, diabético y dislipidémico, en tratamiento con metformina, atorvastatina y aspirina, se realiza varias tomas de presión arterial, que resultan 170/100 mmHg en promedio. Se realiza exámenes que muestran creatinina: 1,1 mg/dl, proteinuria (+), glucosuria (++), potasemia: 4,0 mEq/L, natremia: 142 mEq/L, glicemia: 115 mg/dl.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar amlodipino"
        },
        {
          "letter": "B",
          "text": "Iniciar hidroclorotiazida"
        },
        {
          "letter": "C",
          "text": "Iniciar enalapril"
        },
        {
          "letter": "D",
          "text": "Iniciar hidralazina"
        },
        {
          "letter": "E",
          "text": "Iniciar atenolol"
        }
      ],
      "correct": "C",
      "explanation": "Un diabético hipertenso con proteinuria tiene indicación obligada de IECA (enalapril): baja la presión y frena la progresión de la nefropatía. Amlodipino, tiazidas, hidralazina y atenolol no tienen ese efecto renal protector.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de sesenta y tres años, diabético y dislipidémico, con metformina, atorvastatina y aspirina. Varias tomas dan un promedio de ciento setenta sobre cien. Tiene creatinina normal, proteinuria positiva y potasio normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: iniciar amlodipino; hidroclorotiazida; enalapril; hidralazina; o atenolol. Piénsalo.",
        "answer": "Es la C. Diabético con proteinuria: el fármaco de elección es el IECA, que además de bajar la presión protege el riñón. La A tienta, porque el amlodipino baja bien la presión, pero no tiene ese efecto sobre la nefropatía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 32",
      "stem": "Hombre de 55 años hipertenso en tratamiento con enalapril, bien controlado. Consulta por tos seca persistente desde que inició el tratamiento hace 3 meses.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Amlodipino (mantener enalapril y agregar calcioantagonista)"
        },
        {
          "letter": "B",
          "text": "Hidroclorotiazida (agregar diurético)"
        },
        {
          "letter": "C",
          "text": "Losartán (cambiar enalapril por ARA II)"
        },
        {
          "letter": "D",
          "text": "Atenolol (agregar betabloqueador)"
        },
        {
          "letter": "E",
          "text": "Suspender enalapril sin reemplazar"
        }
      ],
      "correct": "C",
      "explanation": "La tos seca persistente es un efecto de clase de los IECA (acumulación de bradicinina). Se cambia el enalapril por un ARA II (losartán), que mantiene el control de la presión sin producir tos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta y cinco años, hipertenso, en tratamiento con enalapril y bien controlado. Consulta por tos seca persistente desde que inició el tratamiento, hace tres meses.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: agregar amlodipino; agregar hidroclorotiazida; cambiar el enalapril por losartán; agregar atenolol; o suspender el enalapril sin reemplazo. Piénsalo.",
        "answer": "Es la C. La tos seca es un efecto de clase de los IECA, por bradicinina. Se cambia a un ARA dos, que da el mismo control sin tos. Suspender sin reemplazo deja al paciente sin protección, y agregar otro fármaco no resuelve la tos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 51",
      "stem": "Una paciente de 67 años, hipertensa, en tratamiento con losartán 50 mg, hidroclorotiazida 25 mg, amlodipino 5 mg, carvedilol 12,5 mg. Presenta edema de las extremidades inferiores, que ha ido en aumento. En su examen físico tiene FC: 57x’ regular, con PA: 130/90 mmHg, RR2T, examen pulmonar sin alteraciones y examen abdominal con hígado palpable 1 cm bajo el reborde costal y extremidades inferiores con edema bimaleolar con signo de la fóvea.",
      "question": "La conducta más adecuada es:",
      "options": [
        {
          "letter": "A",
          "text": "Reforzar la dieta hiposódica e indicar reposo con las extremidades en alto"
        },
        {
          "letter": "B",
          "text": "Suspender el amlodipino"
        },
        {
          "letter": "C",
          "text": "Subir la dosis del diurético"
        },
        {
          "letter": "D",
          "text": "Suspender el losartán y agregar doxazosina"
        },
        {
          "letter": "E",
          "text": "Solicitar ecodoppler de extremidades inferiores"
        }
      ],
      "correct": "B",
      "explanation": "El edema bimaleolar con fóvea en una paciente que toma amlodipino, con yugulares planas y sin otros signos de insuficiencia cardíaca, es un efecto adverso del calcioantagonista. Se suspende el amlodipino; subir el diurético o hacer reposo no trata la causa.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una mujer de sesenta y siete años, hipertensa, con losartán, hidroclorotiazida, amlodipino y carvedilol. Tiene un edema de las piernas que ha ido en aumento. La frecuencia cardíaca es de cincuenta y siete, la presión de ciento treinta sobre noventa, el examen pulmonar es normal y hay edema bimaleolar con fóvea.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reforzar la dieta sin sal y elevar las piernas; suspender el amlodipino; subir el diurético; cambiar el losartán por doxazosina; o pedir un ecodoppler. Piénsalo.",
        "answer": "Es la B. El edema bimaleolar con amlodipino es un efecto adverso, y la regla es suspender y reemplazar el fármaco culpable antes de otras medidas. La C es la trampa: el diurético no corrige un edema por vasodilatación arteriolar."
      }
    },
    {
      "type": "points",
      "kicker": "Cierre",
      "title": "Reglas de oro: tratamiento de la HTA",
      "cards": [
        {
          "title": "Elegir",
          "tag": "Primera línea",
          "kind": "key",
          "items": [
            {
              "t": "IECA o ARA II + CCB o tiazida",
              "d": "Diabético o proteinuria: IECA",
              "say": "Cerremos con las reglas de oro. Primera línea: un inhibidor del eje renina angiotensina con un calcioantagonista o una tiazida. En el diabético y con proteinuria, el IECA. Nunca IECA con ARA dos, y nunca en el embarazo."
            },
            {
              "t": "Meta < 130/80; ≥ 80 años < 150/90",
              "d": "PAS 130-139 entre 65 y 79 años",
              "say": "La meta es menos de ciento treinta sobre ochenta en el diabético y el coronario, y menos de ciento cincuenta sobre noventa en el mayor de ochenta años."
            }
          ]
        },
        {
          "title": "Reaccionar",
          "tag": "Efectos adversos",
          "kind": "alert",
          "items": [
            {
              "t": "Tos: ARA II · Edema: suspender amlodipino",
              "d": "Suspender y reemplazar al culpable",
              "say": "Tos con enalapril, se cambia a un ARA dos. Edema con amlodipino, se suspende el amlodipino."
            },
            {
              "t": "Tres fármacos sin meta: espironolactona",
              "d": "Y estudiar causa secundaria",
              "say": "Con tres fármacos y sin meta, se agrega espironolactona y se estudia una causa secundaria. Si te llevas una sola idea de hoy: ante un efecto adverso, se reemplaza el fármaco que lo causa, no se agrega otro para taparlo. Nos vemos en la próxima clase."
            }
          ]
        }
      ]
    }
  ],
  "pathway": {
    "title": "Tratamiento de la HTA: del diagnóstico a la meta",
    "root": {
      "k": "start",
      "t": "HTA confirmada",
      "s": "Estilo de vida a todos",
      "say": "Con la hipertensión confirmada, todos reciben medidas de estilo de vida. Luego se decide el fármaco según el grado, el riesgo y las comorbilidades.",
      "kids": [
        [
          "Grado 1, riesgo bajo",
          {
            "k": "q",
            "t": "Prueba de 3 a 6 meses",
            "s": "Si no llega a la meta, monoterapia",
            "say": "En el hipertenso grado uno de riesgo bajo, se espera de tres a seis meses solo con estilo de vida. Si no se llega a la meta, se parte con un fármaco.",
            "kids": []
          }
        ],
        [
          "Grado ≥ 2, diabetes, ERC, riesgo alto",
          {
            "k": "alert",
            "t": "Fármaco desde el inicio",
            "s": "IECA o ARA II + CCB o tiazida",
            "say": "Si el grado es dos o tres, o hay diabetes, enfermedad renal o riesgo alto, se parte con fármacos: un IECA o ARA dos más un calcioantagonista o una tiazida, en dosis fija.",
            "kids": [
              [
                "Sin meta a las 4 semanas",
                {
                  "k": "do",
                  "t": "Triple terapia",
                  "s": "IECA/ARA II + CCB + tiazida",
                  "say": "Si no llega a la meta, se verifica adherencia y técnica, y se pasa a la terapia triple a dosis plenas.",
                  "kids": [
                    [
                      "Sigue sin meta",
                      {
                        "k": "refer",
                        "t": "HTA resistente",
                        "s": "Espironolactona + causa secundaria",
                        "say": "Si con tres fármacos, uno un diurético, sigue sin controlarse, es hipertensión resistente: se agrega espironolactona, se estudia una causa secundaria y se deriva.",
                        "kids": []
                      }
                    ]
                  ]
                }
              ],
              [
                "Efecto adverso",
                {
                  "k": "ok",
                  "t": "Suspender y reemplazar",
                  "s": "Tos: ARA II · Edema: sin amlodipino",
                  "say": "Si aparece un efecto adverso, se suspende y se reemplaza el fármaco culpable: tos con enalapril, se cambia a un ARA dos; edema con amlodipino, se suspende el amlodipino.",
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
