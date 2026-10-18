/**
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA · BLOQUE 3
 * Infecciones, Exantemas & Digestivo Pediátrico (18.9 a 18.14)
 */

const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ped-09",
    "classId": "ped-09",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.9",
    "title": "Síndrome Febril Agudo sin Foco en el Lactante: Estratificación según Edad, Criterios de Rochester y Manejo",
    "perfilCode": "2.01.1.017",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Urgencia pediátrica con riesgo de Infección Bacteriana Grave (IBG: bacteriemia oculta, meningitis, ITU, neumonía).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#15) · EUNACOM Julio 2023 (Q#8) · EUNACOM Diciembre 2022 (Q#77)",
    "frecuencia": "Máxima rentabilidad · Pregunta obligada sobre conducta en menores de 28 días vs 29-90 días (Criterios de Rochester)",
    "svg": null,
    "algoTitle": "Algoritmo de Estratificación y Abordaje Diagnóstico del Lactante con Fiebre sin Foco Evidente",
    "diagramRows": [
      {
        "t": "Lactante Febril (T° axilar ≥ 38.0°C) sin Foco Clínico Evidente",
        "s": "Anamnesis y examen físico minucioso (fontanela, orofaringe, otoscopía, piel, articulaciones)",
        "type": "acc"
      },
      {
        "t": "Estratificación de Riesgo Etario Inmediata",
        "s": "Grupo 1: Neonato (< 28 días) · Grupo 2: Lactante 29 a 90 días · Grupo 3: Lactante > 3 meses",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Conducta en Menores de 90 Días según Edad y Rochester",
        "al": "Estratificación Menor de 3 Meses",
        "ll": "Neonato (< 28 días)",
        "left": {
          "t": "Hospitalización Obligatoria + Estudio Completo",
          "s": "Punción Lumbar + Hemocultivos + Urocultivo + Rx · Ampicilina + Cefotaxima EV",
          "type": "crit"
        },
        "rl": "29 a 90 días con Criterios de Rochester",
        "right": {
          "t": "Criterios de Bajo Riesgo de Rochester",
          "s": "Si cumple TODOS los criterios: Manejo ambulatorio con control en 24h · Si falla uno: Hospitalizar",
          "type": "warn"
        }
      },
      {
        "t": "Lactante > 3 Meses con Buen Estado General",
        "s": "Examen de orina / urocultivo por sondeo es la prueba de mayor rendimiento (descartar ITU oculta)",
        "type": "acc"
      }
    ],
    "contexto": "El síndrome febril agudo sin foco (FOSF) en lactantes menores de 3 meses es uno de los mayores desafíos diagnósticos en urgencias. La inmadurez del sistema inmune, la ausencia de signos meníngeos clásicos y el riesgo de infección bacteriana grave (IBG, 10-15% en neonatos) exigen un protocolo riguroso. El médico general debe saber que todo recién nacido febril menor de 28 días se hospitaliza y se estudia completamente (incluyendo punción lumbar), mientras que entre los 29 y 90 días se aplican los Criterios de Rochester para definir la seguridad del manejo ambulatorio.",
    "contentSections": [
      {
        "subhead": "1. Definiciones y Riesgo de Infección Bacteriana Grave (IBG)",
        "paragraphs": [
          "Se define <strong>Fiebre sin Foco (FOSF)</strong> como la temperatura axilar ≥ 38.0°C (o rectal ≥ 38.3°C) de menos de 7 días de duración en un niño en quien la anamnesis y el examen físico minucioso no revelan la causa.",
          "La preocupación central es descartar una <strong>Infección Bacteriana Grave (IBG)</strong>: Infección del Tracto Urinario (la más frecuente, >80% de las IBG), Bacteriemia Oculta, Meningitis Bacteriana, Neumonía o Artritis/Osteomielitis.",
          "Los patógenos varían críticamente según la edad: en el neonato (< 28 días) predominan <em>Streptococcus agalactiae (EGB)</em>, <em>Escherichia coli</em> y <em>Listeria monocytogenes</em>; entre 1 y 3 meses se suman <em>Streptococcus pneumoniae</em> y <em>Neisseria meningitidis</em>."
        ]
      },
      {
        "subhead": "2. Abordaje según Grupo Etario",
        "paragraphs": [
          "• <strong>Grupo 1: Neonato menor de 28 días (Riesgo Máximo):</strong>",
          "  - <strong>Conducta absoluta:</strong> <strong>HOSPITALIZACIÓN INMEDIATA OBLIGATORIA</strong> en todos los casos, independientemente de su aspecto clínico.",
          "  - <strong>Estudio Séptico Completo (Sepsis Workup):</strong> Hemograma, PCR/Procalcitonina, 2 hemocultivos, Orina completa y Urocultivo obtenido por cateterismo vesical (sondeo estéril), <strong>Punción Lumbar (PL) para citoquímico, Gram y cultivo de LCR</strong>, y Radiografía de tórax si hay síntomas respiratorios.",
          "  - <strong>Antibioticoterapia empírica endovenosa inmediata:</strong> <strong>Ampicilina (200 mg/kg/día EV) + Cefotaxima (150-200 mg/kg/día EV)</strong> o Ampicilina + Gentamicina.",
          "• <strong>Grupo 2: Lactante de 29 a 90 días (1 a 3 meses):</strong>",
          "  - Se aplican los <strong>Criterios de Bajo Riesgo de Rochester</strong>. Si cumple con la totalidad de los criterios clínicos y de laboratorio, puede plantearse manejo ambulatorio vigilado con control obligatorio en 24 horas. Si falla un solo criterio, se hospitaliza.",
          "• <strong>Grupo 3: Lactante de 3 a 36 meses con Buen Estado General:</strong>",
          "  - La inmensa mayoría corresponde a virosis autolimitadas. La causa bacteriana oculta más frecuente es la <strong>Infección Urinaria (ITU)</strong>. Se debe solicitar <strong>orina completa y urocultivo por sondeo</strong> en niñas < 24 meses y niños no circuncidados < 12 meses con fiebre > 39°C de > 24-48 horas de evolución sin foco."
        ]
      },
      {
        "subhead": "3. Criterios de Bajo Riesgo de Rochester (29 a 90 días)",
        "paragraphs": [
          "Para considerar a un lactante de 29 a 90 días como de 'Bajo Riesgo' debe cumplir <strong>TODOS</strong> los siguientes parámetros:",
          "1) <strong>Criterios Clínicos:</strong>",
          "  - Buen estado general, alerta, reactivo, consolable.",
          "  - Nacido de término (≥ 37 semanas) sin patología perinatal.",
          "  - Previamente sano, sin hospitalizaciones previas ni antibióticos recientes.",
          "  - Sin foco infeccioso evidente al examen físico (sin signos de infección osteoarticular, cutánea ni ótica).",
          "2) <strong>Criterios de Laboratorio:</strong>",
          "  - Recuento de leucocitos en sangre periférica entre <strong>5.000 y 15.000/mm³</strong>.",
          "  - Recuento de baciliformes (formas inmaduras) < 1.500/mm³ (o relación inmaduros/totales < 0.2).",
          "  - Sedimento de orina con <strong>< 10 leucocitos por campo</strong> de gran aumento (y prueba de esterasa leucocitaria/nitritos negativa).",
          "  - Si hay diarrea: frotis de deposiciones con < 5 leucocitos por campo.",
          "<em>Conducta si cumple TODOS:</em> Observación ambulatoria segura, antipiréticos (Paracetamol 15 mg/kg/dosis oral) y control presencial estricto a las 24 horas."
        ]
      },
      {
        "subhead": "4. Proteína C Reactiva y Procalcitonina: Valores de Corte e Interpretación",
        "paragraphs": [
          "La <strong>proteína C reactiva (PCR) cuantitativa</strong> es un reactante de fase aguda hepático (inducido por IL-6): comienza a subir a las 4 a 6 horas, tiene su pico a las 36 a 50 horas y su vida media es de 19 horas. Valor normal: < 5 a 10 mg/L (< 1 mg/dL). Una PCR tomada en las primeras horas de fiebre puede ser falsamente baja y debe repetirse.",
          "• <strong>PCR < 20 mg/L (2 mg/dL):</strong> bajo riesgo de infección bacteriana invasiva (forma parte de los criterios de bajo riesgo en el lactante febril). • <strong>PCR ≥ 40 mg/L (4 mg/dL):</strong> aumenta claramente la probabilidad de infección bacteriana grave. • <strong>PCR ≥ 80 a 100 mg/L (8 a 10 mg/dL):</strong> alta probabilidad de bacteriemia, neumonía o pielonefritis. La <strong>procalcitonina</strong> (≥ 0,5 ng/mL sugiere infección bacteriana invasiva; ≥ 2 ng/mL, alto riesgo) se eleva más precozmente (a las 3 a 6 horas) y es más específica que la PCR en las primeras 12 horas de fiebre.",
          "<em>Limitaciones:</em> las infecciones virales (adenovirus, influenza) pueden dar PCR de 50 a 100 mg/L, y se eleva también en trauma, cirugía, <strong>enfermedad de Kawasaki</strong> y enfermedades autoinmunes. En el seguimiento, una caída de más del 50% a las 48 a 72 horas indica buena respuesta al tratamiento. No debe usarse sola para decidir antibióticos: se interpreta junto al aspecto clínico, el hemograma y la edad."
        ]
      }
    ],
    "table": {
      "title": "Estratificación de Conducta en Lactante Febril sin Foco según Edad",
      "headers": [
        "Edad del Lactante",
        "Riesgo de IBG",
        "Exámenes Requeridos",
        "Conducta Médica Inmediata"
      ],
      "rows": [
        [
          "< 28 días (Neonato)",
          "10 - 15% (Muy Alto)",
          "Hemograma, PCR, Hemocultivos, Orina sondeo, Punción Lumbar (LCR), Rx",
          "Hospitalización obligatoria + Ampicilina + Cefotaxima EV"
        ],
        [
          "29 a 90 días (Rochester (+))",
          "< 1% (Bajo Riesgo)",
          "Hemograma, Sedimento urinario/Urocultivo",
          "Manejo ambulatorio + Control presencial a las 24 horas"
        ],
        [
          "29 a 90 días (Rochester (-))",
          "> 10% (Alto Riesgo)",
          "Punción Lumbar, Hemocultivos, Orina sondeo, Laboratorio",
          "Hospitalización + Antibióticos EV empíricos"
        ],
        [
          "> 3 meses (Buen estado)",
          "< 2% (Riesgo Menor)",
          "Orina completa y Urocultivo si T° > 39°C o persistente",
          "Ambulatorio con signos de alarma y control SOS"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Bajo Riesgo de Rochester para Lactantes de 29 a 90 Días",
      "headers": [
        "Parámetro Evaluado",
        "Criterio de Normalidad (Bajo Riesgo)",
        "Interpretación de Falla"
      ],
      "rows": [
        [
          "Aspecto Clínico",
          "Buen estado general, reactivo, sin signos de toxicidad",
          "Toxicidad o letargia = Punción Lumbar + Hospitalizar"
        ],
        [
          "Antecedentes Médicos",
          "Nacido a término (≥37 sem), sin antibióticos previos",
          "Prematuro o internación previa = Alto riesgo"
        ],
        [
          "Leucocitos Totales",
          "Entre 5.000 y 15.000 células/mm³",
          "< 5.000 o > 15.000 = Criterio de laboratorio alterado"
        ],
        [
          "Baciliformes (Inmaduros)",
          "< 1.500/mm³ (I/T < 0.20)",
          "Desviación a la izquierda = Sospecha bacteriana oculta"
        ],
        [
          "Sedimento Urinario",
          "< 10 leucocitos por campo y nitritos negativos",
          "Leucocituria = ITU probable, iniciar antibióticos"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Esquemas Antibióticos Empíricos en Fiebre sin Foco de Alto Riesgo",
      "headers": [
        "Grupo Clínico",
        "Patógenos Clave",
        "Antimicrobianos de Elección",
        "Duración y Ajuste"
      ],
      "rows": [
        [
          "Neonato < 28 días",
          "S. agalactiae, E. coli, Listeria",
          "Ampicilina 200 mg/kg/d EV + Cefotaxima 150 mg/kg/d EV",
          "Revaluar a las 48h con urocultivo y LCR"
        ],
        [
          "Lactante 1-3 meses tóxico",
          "S. pneumoniae, N. meningitidis, E. coli",
          "Cefotaxima 200 mg/kg/d EV (o Ceftriaxona 100 mg/kg/d)",
          "Ajustar según antibiograma"
        ],
        [
          "Sospecha ITU ambulatoria",
          "Escherichia coli sensible",
          "Cefadroxilo 30-50 mg/kg/d VO c/12h",
          "7 a 10 días tras toma de urocultivo"
        ],
        [
          "Antipirético de Elección",
          "Fiebre y malestar general",
          "Paracetamol 15 mg/kg/dosis VO cada 6 a 8 horas",
          "Máximo 60 mg/kg/día (evitar Ibuprofeno < 6 meses)"
        ]
      ]
    },
    "vignette": "Lactante de 18 días de vida, nacido de término con peso adecuado y sin complicaciones perinatales. La madre consulta en el Servicio de Urgencia porque nota al niño caliente desde hace 4 horas. En el triage se registra temperatura axilar de 38.3°C. Al examen físico el recién nacido se encuentra despierto, reactivo al estímulo, con llanto vigoroso, fontanela anterior normotensa, llene capilar de 2 segundos, examen cardiopulmonar y abdominal normales, y piel sin lesiones.",
    "explicacion": "En un recién nacido menor de 28 días con fiebre sin foco (incluso con aspecto clínico conservado), la conducta médica obligatoria es la HOSPITALIZACIÓN INMEDIATA para realización de estudio séptico completo (hemograma, hemocultivos, orina por sondeo y punción lumbar para examen de LCR) e inicio precoz de antibioticoterapia empírica endovenosa con Ampicilina más Cefotaxima. Ningún score clínico ni examen aislado permite el manejo ambulatorio seguro en menores de 28 días debido al riesgo elevado de bacteriemia o meningitis asintomática precoz.",
    "keyPoints": [
      "Todo recién nacido < 28 días con fiebre (≥ 38.0°C) se hospitaliza y se estudia completamente con punción lumbar.",
      "El esquema antibiótico neonatal empírico es Ampicilina + Cefotaxima (o Gentamicina) endovenosa.",
      "Entre los 29 y 90 días se utilizan los Criterios de Rochester para seleccionar pacientes de bajo riesgo.",
      "Criterios de Rochester de laboratorio: Leucocitos 5.000-15.000, baciliformes < 1.500, orina < 10 leucocitos/campo.",
      "Si cumple TODOS los criterios de Rochester, puede manejarse ambulatorio con control obligatorio en 24 horas.",
      "En lactantes de 3 a 36 meses, la infección bacteriana grave más frecuente es la ITU (orina por cateterismo).",
      "El Ibuprofeno no debe administrarse en menores de 6 meses (usar Paracetamol a 15 mg/kg/dosis)."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 14 días de vida es llevado al Servicio de Urgencia por presentar fiebre axilar de 38.4°C constatada en el hogar y en el box. Al examen físico se observa activo, reactivo, se alimenta bien al pecho materno y no se encuentra ningún foco clínico evidente de infección. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Indicar Paracetamol oral en gotas y control ambulatorio en el CESFAM si la fiebre persiste por más de 48 horas"
          },
          {
            "id": "B",
            "text": "Hospitalizar de inmediato, realizar estudio séptico completo que incluya punción lumbar e iniciar Ampicilina más Cefotaxima endovenosa"
          },
          {
            "id": "C",
            "text": "Solicitar hemograma y sedimento de orina; si son normales, dar el alta ambulatoria sin antibióticos"
          },
          {
            "id": "D",
            "text": "Administrar una dosis de Ceftriaxona intramuscular y control en 24 horas"
          },
          {
            "id": "E",
            "text": "Indicar enfriamiento con compresas tibias y suspender temporalmente la lactancia materna"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El manejo ambulatorio expectante en un menor de 28 días febril es negligente por alto riesgo de mortalidad por sepsis.\nB) Correcta. Todo neonato (< 28 días de vida) con fiebre sin foco se considera de alto riesgo independientemente de su buen estado general aparente. La conducta mandataria es la hospitalización inmediata, realización de estudio séptico completo (hemograma, hemocultivos x 2, sedimento urinario y urocultivo por cateterismo vesical, y punción lumbar para estudio citoquímico y microbiológico de LCR) e inicio empírico de Ampicilina + Cefotaxima EV.\nC) Incorrecta. Los exámenes normales no descartan bacteriemia precoz ni permiten el alta en un neonato.\nD) Incorrecta. La Ceftriaxona está contraindicada en neonatos por desplazamiento de bilirrubina (kernicterus) y riesgo de precipitación con calcio (cefotaxima es de elección).\nE) Incorrecta. No corresponde.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.017"
      },
      {
        "stem": "Un lactante de 45 días de vida presenta fiebre de 38.2°C de 6 horas de evolución sin síntomas respiratorios ni digestivos. Al examen físico se encuentra en excelentes condiciones generales, activo y sonriente. Se aplican los criterios de Rochester: leucocitos 9.200/mm³, baciliformes 3%, orina completa con 2 leucocitos por campo y sin bacterias. Cumple con la totalidad de los criterios de bajo riesgo. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Hospitalización inmediata y punción lumbar para LCR"
          },
          {
            "id": "B",
            "text": "Manejo ambulatorio con Paracetamol oral según dolor/fiebre y control médico presencial obligatorio a las 24 horas"
          },
          {
            "id": "C",
            "text": "Iniciar Amoxicilina oral ambulatoria por 7 días de forma empírica"
          },
          {
            "id": "D",
            "text": "Realizar ecografía cerebral y tomografía de tórax ambulatoria"
          },
          {
            "id": "E",
            "text": "Dar de alta definitiva sin necesidad de nuevo control si no presenta fiebre"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En lactantes de 29 a 90 días que cumplen estrictamente todos los criterios de bajo riesgo de Rochester, la punción lumbar y la hospitalización no son obligatorias.\nB) Correcta. En el grupo etario de 29 a 90 días, la presencia de buen estado general y cumplimiento estricto de todos los criterios de Rochester (leucocitos entre 5.000 y 15.000, baciliformes bajos, orina normal y sin foco) confiere un valor predictivo negativo para infección bacteriana grave superior al 98-99%. La conducta aceptada es el manejo ambulatorio con antipiréticos (Paracetamol oral 15 mg/kg/dosis), pautas de alarma a los padres y control presencial obligatorio a las 24 horas.\nC) Incorrecta. No se indican antibióticos empíricos ambulatorios sin foco ya que enmascaran bacteriemias.\nD) Incorrecta. Innecesario.\nE) Incorrecta. El control a las 24h es mandatorio.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.017"
      },
      {
        "stem": "¿Cuál es la infección bacteriana grave oculta más frecuente en un lactante de 6 meses con síndrome febril agudo sin foco evidente al examen físico?",
        "options": [
          {
            "id": "A",
            "text": "Meningitis bacteriana aguda"
          },
          {
            "id": "B",
            "text": "Infección del Tracto Urinario (ITU)"
          },
          {
            "id": "C",
            "text": "Osteomielitis aguda de fémur"
          },
          {
            "id": "D",
            "text": "Bacteriemia oculta por Salmonella"
          },
          {
            "id": "E",
            "text": "Absceso retrofaríngeo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Es mucho menos frecuente (< 0.5%).\nB) Correcta. La Infección del Tracto Urinario (ITU) es, por lejos, la infección bacteriana grave más prevalente en lactantes mayores de 3 meses con fiebre sin foco evidente (representa más del 80% de las infecciones bacterianas en este grupo). Por esta razón, el sedimento de orina y urocultivo por sondeo es el examen de primera línea en todo lactante con fiebre inexplicable.\nC) Incorrecta. Rara y suele presentar dolor/impotencia funcional.\nD) Incorrecta. La bacteriemia oculta por neumococo o salmonella ha disminuido drásticamente tras la vacuna conjugada.\nE) Incorrecta. Presenta disfagia, estridor y limitación cervical.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.017"
      },
      {
        "stem": "Un lactante de 2 meses consulta por fiebre de 38.6°C. El hemograma muestra 18.500 leucocitos/mm³ con 12% de baciliformes (2.220 baciliformes/mm³). El sedimento de orina muestra 35 leucocitos por campo y bacterias abundantes. ¿Cuál es la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar Cefadroxilo oral y control en 72 horas"
          },
          {
            "id": "B",
            "text": "Hospitalizar para tratamiento antibiótico endovenoso (Cefotaxima EV) y estudio complementario"
          },
          {
            "id": "C",
            "text": "Enviar a domicilio con paracetamol a la espera del urocultivo"
          },
          {
            "id": "D",
            "text": "Realizar punción suprapúbica sin iniciar antibióticos"
          },
          {
            "id": "E",
            "text": "Indicar nitrofurantoína oral ambulatoria"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Lactante menor de 3 meses con ITU febril y leucocitosis con desviación a la izquierda tiene alto riesgo de pielonefritis y bacteriemia (no se maneja oral ambulatorio).\nB) Correcta. El paciente tiene 2 meses (lactante pequeño), no cumple los criterios de bajo riesgo de Rochester (leucocitos > 15.000, baciliformes > 1.500) y presenta sedimento compatible con ITU (pielonefritis probable). Debe hospitalizarse para tratamiento antibiótico parenteral (Cefotaxima o Ceftriaxona EV), urocultivo y ecografía renal precoz.\nC) Incorrecta. Retrasar antibióticos en un lactante febril con sedimento patológico aumenta el riesgo de cicatriz renal y sepsis.\nD) Incorrecta. El urocultivo por sondeo es suficiente.\nE) Incorrecta. La nitrofurantoína no alcanza niveles parenquimatosos renales ni séricos (contraindicada en pielonefritis e ITU febril).",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.017"
      }
    ]
  },
  {
    "id": "ped-10",
    "classId": "ped-10",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.10",
    "title": "Exantemas Infantiles: Diagnóstico Diferencial (Eritema Infeccioso, Exantema Súbito, Escarlatina, Varicela y Kawasaki)",
    "perfilCode": "2.01.1.018",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. La Enfermedad de Kawasaki requiere sospecha precoz para prevenir aneurismas coronarios.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#28) · EUNACOM Julio 2023 (Q#4) · EUNACOM Diciembre 2021 (Q#12)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico morfológico de exantemas y criterios clínicos de Kawasaki",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Diferencial Morfológico y Cronológico de los Exantemas Infantiles",
    "diagramRows": [
      {
        "t": "Paciente Pediátrico con Fiebre y Exantema Cutáneo Agudo",
        "s": "Evaluar morfología lesional: Maculopapular, Vesicular, Eritematoso difuso (micropapular)",
        "type": "acc"
      },
      {
        "t": "Descarte Inmediato de Emergencia: Púrpura Petequial o Kawasaki",
        "s": "Petequias/Púrpura no blanquea -> Meningococcemia/Sepsis · Fiebre ≥ 5 días -> Kawasaki",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Patrón Clínico y Cronológico del Exantema",
        "al": "Diferenciación según Morfología y Fiebre",
        "ll": "Maculopapular o Reticular",
        "left": {
          "t": "Exantema Súbito (HHV-6) o Eritema Infeccioso (B19)",
          "s": "Exantema Súbito: Fiebre alta 3 días que cae y aparece exantema · Eritema Infeccioso: 'Mejilla abofeteada'",
          "type": "acc"
        },
        "rl": "Vesicular o Micropapular Áspero",
        "right": {
          "t": "Varicela (Cielo Estrellado) o Escarlatina (S. pyogenes)",
          "s": "Varicela: Vesículas en gotas de rocío polimorfas · Escarlatina: Piel de lija, lengua aframbuesada (Penicilina)",
          "type": "warn"
        }
      },
      {
        "t": "Enfermedad de Kawasaki: Criterios Diagnósticos",
        "s": "Fiebre ≥ 5 días + 4 de 5 criterios: Inyección conjuntival no exudativa, labios fisurados, adenopatía cervical >1.5cm, exantema polimorfo, cambios en extremidades -> IgEV + Aspirina",
        "type": "crit"
      }
    ],
    "contexto": "Las enfermedades exantemáticas infantiles constituyen un motivo de consulta diario en pediatría ambulatoria y de urgencias. La gran mayoría son etiologías virales benignas y autolimitadas. Sin embargo, el médico debe reconocer de inmediato las dos grandes urgencias: la sepsis meningocócica (exantema purpúrico petequial) y la Enfermedad de Kawasaki (vasculitis febril con riesgo de aneurismas coronarios en el 25% si no se trata precozmente con Inmunoglobulina EV).",
    "contentSections": [
      {
        "subhead": "1. Exantema Súbito (Roséola Infantil) y Eritema Infeccioso (Megaloeritema)",
        "paragraphs": [
          "• <strong>Exantema Súbito (Sexta Enfermedad):</strong>",
          "  - <strong>Etiología:</strong> <strong>Herpesvirus Humano tipo 6 (HHV-6)</strong> (y tipo 7). Afecta predominantemente a lactantes de 6 a 18 meses.",
          "  - <strong>Cronología Patognomónica:</strong> Fiebre alta (39-40°C) de 3 a 4 días de duración en un lactante con buen estado general que juega. <strong>La fiebre cede bruscamente (en crisis), y en ese preciso momento APARECE el exantema</strong> maculopapular rosado en tronco que respeta la cara.",
          "  - Es la causa más frecuente de <em>convulsión febril</em> en este grupo etario.",
          "• <strong>Eritema Infeccioso (Quinta Enfermedad):</strong>",
          "  - <strong>Etiología:</strong> <strong>Parvovirus B19</strong>. Afecta a escolares de 5 a 15 años.",
          "  - <strong>Tres Fases Clínicas:</strong> 1) Fase inicial: <strong>Signo de la bofetada</strong> (eritema facial rojo intenso en mejillas respetando el área perioral); 2) Fase intermedia: Exantema maculopapular eritematoso en encaje o reticular en extremidades y tronco; 3) Fase tardía: Recidivas fluctuantes durante semanas desencadenadas por calor, sol o ejercicio.",
          "  - <em>Complicaciones:</em> Crisis aplásica transitoria en pacientes con anemia hemolítica (esferocitosis, drepanocitosis) e hidrops fetal severo en embarazadas infectadas."
        ]
      },
      {
        "subhead": "2. Escarlatina y Varicela",
        "paragraphs": [
          "• <strong>Escarlatina:</strong>",
          "  - <strong>Etiología:</strong> <strong>Streptococcus pyogenes (Streptococcus betahemolítico grupo A)</strong> productor de toxinas eritrogénicas (exotoxinas pirogénicas A, B, C).",
          "  - <strong>Clínica:</strong> Faringoamigdalitis exudativa con fiebre alta y odinofagia. Exantema eritematoso micropapular difuso que da sensación de <strong>'piel de lija' o 'papel de lija'</strong> al tacto. Signo de Pastia (hiperpigmentación en pliegues flexores que no palidece) y Triángulo de Filatow (palidez perioral con mejillas rojas). Lengua en fresa blanca que luego pasa a lengua aframbuesada (roja brillante con papilas hipertróficas). Descamación laminar tardía en manos y pies.",
          "  - <strong>Tratamiento:</strong> <strong>Penicilina V oral (o Amoxicilina) por 10 días</strong> completos (o Penicilina Benzatina IM dosis única) para prevenir la fiebre reumática aguda.",
          "• <strong>Varicela:</strong>",
          "  - <strong>Etiología:</strong> <strong>Virus Varicela Zóster (VVZ)</strong>. Altamente contagioso por vía respiratoria y gotitas.",
          "  - <strong>Clínica:</strong> Exantema pruriginoso con evolución centrífuga que pasa rápidamente por mácula, pápula, vesícula transparente ('gota de rocío sobre pétalo de rosa'), pústula y costra. La coexistencia simultánea de lesiones en todos los estadios se denomina <strong>patrón en 'cielo estrellado'</strong>. Compromete cuero cabelludo y mucosas.",
          "  - <em>Complicación más frecuente:</em> Sobreinfección bacteriana de la piel (impétigo, celulitis por S. aureus o S. pyogenes). Ataxia cerebelosa aguda autolimitada."
        ]
      },
      {
        "subhead": "3. Enfermedad de Kawasaki: Criterios Diagnósticos y Prevención de Aneurismas",
        "paragraphs": [
          "Es una vasculitis sistémica aguda necrotizante que afecta a arterias de mediano calibre, con predilección por las <strong>arterias coronarias</strong>. Afecta principalmente a niños menores de 5 años.",
          "<strong>Criterios Diagnósticos Clásicos (AHA):</strong>",
          "• <strong>Fiebre persistente durante ≥ 5 días</strong> (criterio obligatorio) + al menos <strong>4 de los siguientes 5 criterios clínicos</strong>:",
          "  1) <strong>Inyección conjuntival bilateral no exudativa</strong> (bulbar, sin secreción purulenta).",
          "  2) <strong>Alteraciones en la mucosa orofaríngea:</strong> Labios eritematosos, secos, fisurados o sangrantes; lengua aframbuesada; eritema faríngeo difuso.",
          "  3) <strong>Cambios en extremidades:</strong> Eritema de palmas y plantas, edema indurado doloroso de manos/pies (fase aguda) y descamación periungueal en dedos (fase convaleciente).",
          "  4) <strong>Exantema polimorfo:</strong> Generalizado, no vesicular ni petequial.",
          "  5) <strong>Linfadenopatía cervical aguda:</strong> Típicamente unilateral, no supurativa, con al menos un ganglio > 1.5 cm de diámetro.",
          "• <strong>Tratamiento Urgente de Elección:</strong>",
          "  1) <strong>Inmunoglobulina Endovenosa (IgEV): 2 g/kg en infusión continua única durante 10-12 horas</strong>. Reduce la incidencia de aneurismas coronarios del 25% a menos del 3-5%. Debe administrarse antes del día 10 de enfermedad.",
          "  2) <strong>Ácido Acetilsalicílico (Aspirina):</strong> Dosis antiinflamatoria alta (30 a 50 mg/kg/día) en fase febril, bajando luego a dosis antiagregante (3 a 5 mg/kg/día) por 6 a 8 semanas.",
          "  3) Ecocardiograma transtorácico obligatorio al diagnóstico y a las 6-8 semanas."
        ]
      },
      {
        "subhead": "4. Sarampión y Rubéola: Diagnóstico, Manejo y Prevención",
        "paragraphs": [
          "<strong>Sarampión</strong> (paramixovirus; enfermedad de <strong>notificación inmediata</strong>, con aislamiento aéreo desde 4 días antes hasta 4 días después del exantema). <em>Pródromo</em> de 3 a 4 días con fiebre alta y las «tres C» (<strong>tos, coriza, conjuntivitis</strong>) y <strong>manchas de Koplik</strong> (puntos blanco-azulados sobre base eritematosa en la mucosa yugal, patognomónicas). Luego aparece un <strong>exantema maculopapular morbiliforme confluente de progresión céfalo-caudal</strong> (cara y región retroauricular primero), que dura 3 a 4 días y deja descamación furfurácea.",
          "<em>Complicaciones del sarampión:</em> otitis media (la más frecuente), <strong>neumonía (primera causa de muerte)</strong>, diarrea, laringitis, encefalitis aguda y, años después, <strong>panencefalitis esclerosante subaguda</strong>; la deficiencia de vitamina A causa ceguera. <em>Diagnóstico:</em> IgM específica en suero y PCR en secreción faríngea u orina. <em>Tratamiento:</em> soporte y <strong>vitamina A</strong> por 2 días (200.000 UI en mayores de 12 meses, 100.000 UI entre 6 y 11 meses y 50.000 UI en menores de 6 meses). <em>Profilaxis post-exposición:</em> vacuna dentro de 72 horas o inmunoglobulina hasta el 6.° día (embarazadas, inmunodeprimidos y menores de 6 meses).",
          "<strong>Rubéola</strong> (togavirus): enfermedad leve con fiebre baja, <strong>exantema maculopapular rosado fino de 3 días</strong> que también progresa de cara a tronco, y <strong>adenopatías retroauriculares, occipitales y cervicales posteriores</strong> características; en adolescentes y mujeres puede haber artralgias. Su gravedad está en la <strong>infección de la embarazada en el primer trimestre</strong>, que causa el <strong>síndrome de rubéola congénita</strong> (sordera, cataratas, cardiopatía como ductus arterioso y estenosis pulmonar, microcefalia y lesiones cutáneas «en muffin de arándano»). El diagnóstico es por IgM; el tratamiento es sintomático.",
          "<em>Prevención:</em> vacuna <strong>tresvírica (sarampión, rubéola, parotiditis) a los 12 meses y en 1.° básico</strong>; es de virus vivos y está contraindicada en el embarazo y la inmunosupresión grave (se evita embarazo por 1 mes tras vacunarse). Regla de diferenciación: el sarampión es un cuadro <strong>febril y grave con tos y conjuntivitis</strong>; la rubéola es <strong>leve con adenopatías retroauriculares</strong>."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de los Principales Exantemas Infantiles",
      "headers": [
        "Enfermedad",
        "Agente Etiológico",
        "Relación Fiebre - Exantema",
        "Morfología del Exantema",
        "Signo / Clave Diagnóstica"
      ],
      "rows": [
        [
          "Exantema Súbito",
          "Herpesvirus Humano 6 (HHV-6)",
          "Fiebre cae bruscamente y aparece exantema",
          "Maculopapular rosado en tronco",
          "Lactante 6-18 meses · Buen estado general"
        ],
        [
          "Eritema Infeccioso",
          "Parvovirus B19",
          "Afebril o febrícula leve",
          "Bofetada facial + encaje reticular",
          "Exacerbación con sol/calor · Escolar"
        ],
        [
          "Escarlatina",
          "Streptococcus pyogenes (SGA)",
          "Fiebre alta simultánea al exantema",
          "Micropapular difuso 'piel de lija'",
          "Signo de Pastia · Lengua aframbuesada"
        ],
        [
          "Varicela",
          "Virus Varicela Zóster (VVZ)",
          "Fiebre moderada simultánea",
          "Vesículas ('gota de rocío') polimorfas",
          "Patrón en cielo estrellado · Prurito intenso"
        ],
        [
          "Enfermedad de Kawasaki",
          "Idiopática / Vasculitis",
          "Fiebre ≥ 5 días obligatoria",
          "Exantema polimorfo no vesicular",
          "Inyección conjuntival, labios fisurados, IgEV"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios Diagnósticos y Riesgo Coronario en Enfermedad de Kawasaki",
      "headers": [
        "Criterio AHA",
        "Manifestación Clínica",
        "Momento de Aparición",
        "Complicación Mayor"
      ],
      "rows": [
        [
          "Fiebre Obligatoria",
          "≥ 5 días de duración resistente a antipiréticos",
          "Día 1 a 10",
          "Condición sine qua non"
        ],
        [
          "Criterio 1: Ocular",
          "Inyección conjuntival bilateral no purulenta",
          "Aguda temprana",
          "Uveítis anterior"
        ],
        [
          "Criterio 2: Bucal",
          "Labios rojos, fisurados y sangrantes, lengua fresa",
          "Aguda",
          "Faringitis no exudativa"
        ],
        [
          "Criterio 3: Extremidades",
          "Edema y eritema palmoplantar doloroso",
          "Aguda (descamación a las 2-3 sem)",
          "Limitación funcional"
        ],
        [
          "Criterio 4: Exantema",
          "Exantema polimorfo truncal (no vesicular)",
          "Aguda",
          "Dermatitis perineal descamativa"
        ],
        [
          "Criterio 5: Ganglio",
          "Adenopatía cervical > 1.5 cm unilateral",
          "Aguda",
          "El criterio menos frecuente"
        ],
        [
          "Complicación Cardíaca",
          "Aneurismas de arterias coronarias (25% sin tto)",
          "Subaguda (días 10 a 28)",
          "Infarto agudo de miocardio / Muerte súbita"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Manejo Terapéutico Específico según Enfermedad Exantemática",
      "headers": [
        "Patología",
        "Tratamiento de Elección",
        "Dosis y Vía",
        "Objetivo / Prevención"
      ],
      "rows": [
        [
          "Escarlatina",
          "Amoxicilina o Penicilina V oral",
          "Amoxi 50 mg/kg/d c/12h x 10 días",
          "Prevención de Fiebre Reumática"
        ],
        [
          "Kawasaki Agudo",
          "Inmunoglobulina Humana EV + Aspirina",
          "IgEV 2 g/kg en 12h + AAS 30-50 mg/kg/d",
          "Prevención de aneurismas coronarios"
        ],
        [
          "Varicela No Complicada",
          "Sintomático (Paracetamol + Antihistamínico)",
          "Paracetamol 15 mg/kg c/6h · ¡No Aspirina!",
          "Evitar sobreinfección y Síndrome de Reye"
        ],
        [
          "Varicela de Alto Riesgo",
          "Aciclovir oral / endovenoso",
          "Oral: 80 mg/kg/d c/6h (iniciar < 24h exantema)",
          "Inmunosuprimidos, neumonía o >12 años"
        ],
        [
          "Exantema Súbito / B19",
          "Manejo de soporte e hidratación",
          "Antipiréticos habituales",
          "Enfermedad viral autolimitada benigna"
        ]
      ]
    },
    "vignette": "Lactante de 9 meses, traído a urgencias. Presentó fiebre alta de hasta 39.8°C axilar durante los últimos tres días, recibiendo paracetamol con respuesta transitoria, manteniéndose activo entre los episodios febriles. Esta mañana la madre constata con alivio que la temperatura se normalizó por completo (36.7°C), pero simultáneamente nota la aparición súbita de un exantema eritematoso maculopapular no pruriginoso en el tórax y abdomen, que se extiende levemente al cuello. Al examen físico el lactante está afebril, sonriente, con lesiones maculares rosadas de 2-3 mm que palidecen a la presión en tronco, sin adenopatías significativas.",
    "explicacion": "El cuadro clínico de un lactante previamente sano de 9 meses con fiebre muy alta durante 3 días que desaparece bruscamente (en lisis), coincidiendo de forma inmediata con la eclosión de un exantema maculopapular rosado en tronco con buen estado general, es patognomónico del Exantema Súbito (Roséola Infantil o Sexta Enfermedad), causado por el Herpesvirus Humano tipo 6 (HHV-6). El manejo es exclusivamente de soporte y observación ambulatoria.",
    "keyPoints": [
      "Exantema súbito (HHV-6): Fiebre alta 3 días que desaparece bruscamente y aparece el exantema en tronco.",
      "Eritema infeccioso (Parvovirus B19): Signo de la bofetada en mejillas seguido de exantema reticular en encaje.",
      "Escarlatina (S. pyogenes): Exantema en 'piel de lija', signo de Pastia, lengua en fresa; requiere Penicilina x 10 días.",
      "Varicela (VVZ): Exantema vesicular polimorfo pruriginoso con lesiones en todos los estadios ('cielo estrellado').",
      "Kawasaki: Fiebre ≥ 5 días + 4/5 criterios (conjuntivitis no purulenta, labios rojos fisurados, adenopatía >1.5cm, exantema, edema manos/pies).",
      "El tratamiento de Kawasaki con Inmunoglobulina EV (2 g/kg) antes del día 10 previene los aneurismas coronarios.",
      "¡El uso de Aspirina en varicela o influenza está estrictamente contraindicado por riesgo de Síndrome de Reye!"
    ],
    "questions": [
      {
        "stem": "Un lactante de 10 meses presentó fiebre de hasta 39.5°C durante 3 días con buen estado general. Al cuarto día la fiebre desaparece por completo y simultáneamente aparece un exantema maculopapular rosado localizado en el tronco y cuello, que no compromete la cara. El niño se observa activo y alimentándose normalmente. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Sarampión clásico"
          },
          {
            "id": "B",
            "text": "Escarlatina bacteriana"
          },
          {
            "id": "C",
            "text": "Exantema súbito (Roséola infantil por HHV-6)"
          },
          {
            "id": "D",
            "text": "Enfermedad de Kawasaki"
          },
          {
            "id": "E",
            "text": "Eritema infeccioso por Parvovirus B19"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. En el sarampión la fiebre persiste y es máxima al aparecer el exantema morbiliforme, con tos, coriza y conjuntivitis intensa.\nB) Incorrecta. En la escarlatina la fiebre coincide con el exantema en piel de lija y faringitis exudativa.\nC) Correcta. La secuencia cronológica clásica del Exantema Súbito (Sexta Enfermedad, producida por HHV-6) consiste en 3 a 4 días de fiebre alta aislada con buen estado general, la cual remite bruscamente en lisis e inmediatamente brota el exantema maculopapular no confluente en tronco.\nD) Incorrecta. Kawasaki requiere al menos 5 días de fiebre continua persistente.\nE) Incorrecta. El eritema infeccioso se caracteriza por eritema en mejillas ('bofetada') y afecta a niños mayores escolares con poca o nula fiebre.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.018"
      },
      {
        "stem": "Un niño de 3 años es traído a consulta por presentar fiebre de 39°C desde hace 6 días. Al examen físico destaca inyección conjuntival bilateral sin secreción purulenta, labios intensamente eritematosos, secos y con fisuras sangrantes, lengua aframbuesada, edema indurado y eritema en palmas y plantas, y un ganglio linfático cervical anterior derecho de 2 cm de diámetro, doloroso. No presenta foco infeccioso evidente. ¿Cuál es el tratamiento de elección inmediato?",
        "options": [
          {
            "id": "A",
            "text": "Amoxicilina con ácido clavulánico oral por 10 días"
          },
          {
            "id": "B",
            "text": "Ceftriaxona endovenosa más Vancomicina por sospecha de shock séptico"
          },
          {
            "id": "C",
            "text": "Inmunoglobulina endovenosa (2 g/kg en infusión única) más Ácido Acetilsalicílico a dosis antiinflamatorias"
          },
          {
            "id": "D",
            "text": "Corticoides sistémicos a dosis altas en pulsos como monoterapia"
          },
          {
            "id": "E",
            "text": "Paracetamol oral exclusivo y control con hemograma en 48 horas"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Los antibióticos no tienen ningún efecto sobre la vasculitis de Kawasaki.\nB) Incorrecta. Aunque el paciente está febril, no presenta signos de shock ni bacteriemia y cumple los criterios de Kawasaki.\nC) Correcta. El cuadro cumple con los criterios de Enfermedad de Kawasaki: fiebre ≥ 5 días + 4 criterios cardinales (inyección conjuntival no purulenta, labios rojos/fisurados, edema palmoplantar y adenopatía cervical > 1.5 cm). El tratamiento estándar de oro para yugular la inflamación sistémica y reducir drásticamente el riesgo de aneurismas de las arterias coronarias (del 25% a < 5%) es la Inmunoglobulina Endovenosa (IgEV) a 2 g/kg en infusión única administrada en las primeras 12 horas, combinada con Ácido Acetilsalicílico (Aspirina) a dosis altas (30-50 mg/kg/día).\nD) Incorrecta. Los corticoides no son el tratamiento inicial de primera línea en monoterapia en Kawasaki.\nE) Incorrecta. Retrasar la IgEV más allá del décimo día incrementa severamente el daño coronario irreversible.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.018"
      },
      {
        "stem": "Un preescolar de 4 años presenta fiebre de 38.5°C, odinofagia y un exantema eritematoso micropapular difuso que 'raspa al tacto como lija'. En los pliegues del codo se observan líneas hiperpigmentadas transversales que no desaparecen a la digitopresión (Signo de Pastia). La lengua tiene aspecto de frutilla roja. ¿Cuál es el tratamiento de elección y su objetivo principal?",
        "options": [
          {
            "id": "A",
            "text": "Paracetamol exclusivo; el cuadro es viral autolimitado"
          },
          {
            "id": "B",
            "text": "Amoxicilina oral por 10 días para prevenir la Fiebre Reumática Aguda"
          },
          {
            "id": "C",
            "text": "Aciclovir oral por 5 días para acortar la excreción viral"
          },
          {
            "id": "D",
            "text": "Ciprofloxacino oral por 7 días para erradicar el estado de portador"
          },
          {
            "id": "E",
            "text": "Inmunoglobulina endovenosa para prevenir la glomerulonefritis postestreptocócica"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La escarlatina es una infección bacteriana por Streptococcus pyogenes y requiere antibióticos.\nB) Correcta. La tríada de exantema en papel de lija, signo de Pastia y lengua aframbuesada en un niño con faringitis febril es diagnóstica de Escarlatina producida por cepas de Streptococcus pyogenes productoras de exotoxina pirogénica. El tratamiento de elección es Amoxicilina (o Penicilina V) oral durante 10 días completos (o Penicilina Benzatina IM única). El objetivo primordial del tratamiento antibiótico es erradicar el germen de la orofaringe para prevenir la Fiebre Reumática Aguda (no previene la glomerulonefritis postestreptocócica).\nC) Incorrecta. Es bacteriana, no viral herpética.\nD) Incorrecta. Las fluoroquinolonas están contraindicadas en niños y no son de elección para SGA.\nE) Incorrecta. No indicada en escarlatina.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.018"
      },
      {
        "stem": "Un niño de 5 años con varicela activa presenta fiebre y prurito intenso. La madre consulta qué medicamento puede administrarle para la fiebre. ¿Cuál de los siguientes fármacos antipiréticos está FORMALMENTE CONTRAINDICADO en este paciente por riesgo de complicaciones neurológicas y hepáticas potencialmente mortales?",
        "options": [
          {
            "id": "A",
            "text": "Paracetamol"
          },
          {
            "id": "B",
            "text": "Ácido Acetilsalicílico (Aspirina)"
          },
          {
            "id": "C",
            "text": "Ibuprofeno"
          },
          {
            "id": "D",
            "text": "Clorfenamina"
          },
          {
            "id": "E",
            "text": "Metamizol (Dipirona)"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El paracetamol es el antipirético de elección seguro en varicela.\nB) Correcta. El Ácido Acetilsalicílico (Aspirina) está estrictamente contraindicado en niños con infecciones virales activas (especialmente Varicela e Influenza) debido a su asociación etiológica con el Síndrome de Reye, caracterizado por degeneración grasa hepática aguda y encefalopatía fulminante no inflamatoria con alta mortalidad.\nC) Incorrecta. Aunque el ibuprofeno se ha asociado a un aumento teórico de infecciones cutáneas invasivas por estreptococo (fascitis necrotizante) en varicela, el fármaco con contraindicación absoluta toxicológica y letal por Síndrome de Reye es la Aspirina.\nD) Incorrecta. La clorfenamina es un antihistamínico sedante que se utiliza para el prurito.\nE) Incorrecta. Puede usarse en urgencias.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.018"
      }
    ]
  },
  {
    "id": "ped-11",
    "classId": "ped-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.11",
    "title": "Diarrea Aguda Infantil y Planes de Rehidratación Oral OMS (Plan A, B, C) y Síndrome Hemolítico Urémico",
    "perfilCode": "2.01.1.039",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por guías clínicas MINSAL de deshidratación y enfermedades diarreicas agudas.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#30) · EUNACOM Julio 2023 (Q#72) · EUNACOM Diciembre 2021 (Q#104)",
    "frecuencia": "Máxima rentabilidad · Pregunta clásica de cálculo de SRO en Plan B (50-100 mL/kg en 4 horas) y shock en Plan C",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación del Grado de Deshidratación y Planes de Rehidratación OMS (A, B, C)",
    "diagramRows": [
      {
        "t": "Lactante o Niño con Diarrea Aguda y Vómitos",
        "s": "Evaluar estado de hidratación: Conciencia, ojos, lágrimas, boca, sed, signo del pliegue",
        "type": "acc"
      },
      {
        "t": "Estratificación Clínica del Grado de Deshidratación (OMS)",
        "s": "Sin deshidratación (<3-5%) · Algún grado / Moderada (5-10%) · Deshidratación Severa (>10%)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Selección del Plan de Rehidratación OMS",
        "al": "Planes de Rehidratación OMS",
        "ll": "Sin Deshidratación / Leve",
        "left": {
          "t": "PLAN A: Manejo Domiciliario",
          "s": "Ofrecer 10 mL/kg de SRO por cada deposición líquida o 5 mL/kg por vómito · Alimentación continua",
          "type": "acc"
        },
        "rl": "Deshidratación Moderada o Severa",
        "right": {
          "t": "PLAN B o PLAN C de Rehidratación",
          "s": "Plan B (Moderada): SRO 50-100 mL/kg en 4 horas en box · Plan C (Severa/Shock): Ringer Lactato EV 100 mL/kg",
          "type": "crit"
        }
      },
      {
        "t": "Descarte de Síndrome Hemolítico Urémico (SHU)",
        "s": "Diarrea disentérica por E. coli enterohemorrágica (STEC O157:H7) -> Anemia microangiopática + Trombocitopenia + IRA. ¡Prohibido antibióticos!",
        "type": "warn"
      }
    ],
    "contexto": "La enfermedad diarreica aguda (EDA) y la deshidratación aguda secundaria constituyen una de las principales causas de morbimortalidad infantil a nivel mundial y motivo de consulta frecuente en APS y SAPU en Chile. El médico general debe saber evaluar clínicamente el grado de deshidratación sin necesidad de laboratorio, aplicar con destreza los Planes A, B y C de la OMS con Sales de Rehidratación Oral (SRO de baja osmolaridad), contraindicar antidiarreicos y reconocer el Síndrome Hemolítico Urémico (SHU), donde los antibióticos están estrictamente contraindicados.",
    "contentSections": [
      {
        "subhead": "1. Etiología y Diagnóstico Clínico del Grado de Deshidratación",
        "paragraphs": [
          "La causa más frecuente en lactantes es el <strong>Rotavirus</strong> (en niños no vacunados), seguido por Norovirus, Adenovirus entéricos, Astrovirus y bacterias como <em>Campylobacter jejuni</em>, <em>Salmonella</em> no tifoidea, <em>Shigella</em> y <em>Escherichia coli</em>.",
          "La evaluación del estado de hidratación se realiza mediante cuatro signos cardinales estandarizados por la OMS:",
          "• <strong>Sin Deshidratación (Pérdida < 5% del peso corporal):</strong> Niño alerta, reactivo, ojos normales, lágrimas presentes, boca y lengua húmedas, sed normal, signo del pliegue cutáneo se deshace de inmediato.",
          "• <strong>Deshidratación con 'Algún Grado' / Moderada (Pérdida del 5% al 10% del peso):</strong> Presenta al menos dos de los siguientes signos: 1) Inquieto, irritable; 2) Ojos hundidos; 3) Bebe con avidez, sediento; 4) Signo del pliegue cutáneo desaparece lentamente (< 2 segundos). Mucosa oral pastosa y llanto con escasas lágrimas.",
          "• <strong>Deshidratación Grave / Severa (Pérdida > 10% del peso o Shock):</strong> Presenta al menos dos signos: 1) Letárgico, comatoso o inconsciente; 2) Ojos muy hundidos y secos; 3) No puede beber o bebe con dificultad; 4) Signo del pliegue desaparece muy lentamente (> 2 segundos). Llene capilar > 2-3 segundos, pulsos débiles y frialdad distal."
        ]
      },
      {
        "subhead": "2. Planes de Rehidratación OMS (A, B y C)",
        "paragraphs": [
          "• <strong>PLAN A (Prevención de Deshidratación en el Hogar):</strong>",
          "  - <strong>3 Reglas de Oro:</strong> 1) Dar más líquidos de lo habitual: <strong>Sales de Rehidratación Oral (SRO)</strong> de osmolaridad reducida (75 mEq/L de Na+), a razón de <strong>10 mL/kg (o 50-100 mL en < 2 años; 100-200 mL en > 2 años) tras cada deposición líquida</strong> y 5 mL/kg tras cada vómito; 2) <strong>Continuar la alimentación habitual</strong> (no ayunar, mantener lactancia materna ininterrumpida); 3) Signos de alarma para reconsultar (fiebre alta, sangre en heces, vómitos repetidos, sed intensa).",
          "• <strong>PLAN B (Tratamiento de Deshidratación Moderada en Box / Sala IRA):</strong>",
          "  - Se administra <strong>SRO por vía oral a dosis de 50 a 100 mL/kg durante un período de 4 horas</strong>.",
          "  - Técnica: Fraccionar a cucharaditas o con jeringa cada 1 a 2 minutos. Si el niño vomita, esperar 10 minutos y reiniciar más lentamente.",
          "  - Si hay vómitos incoercibles (> 3 vómitos en 1 hora que impiden SRO) o rechazo oral: instalar <strong>Sonda Nasogástrica (Gastroclisis)</strong> para infundir la SRO a 20 mL/kg/hora.",
          "  - Reevaluar al cabo de 4 horas: Si se hidrató -> Pasar a Plan A y alta. Si persiste moderada -> Repetir Plan B por 2-4 horas. Si empeora a severa -> Pasar a Plan C.",
          "• <strong>PLAN C (Tratamiento de Deshidratación Grave o Shock Hipovolémico):</strong>",
          "  - Urgencia médica vital con rehidratación <strong>Endovenosa Inmediata</strong>.",
          "  - Solución de elección: <strong>Ringer Lactato o Solución Fisiológica (NaCl 0.9%)</strong> a <strong>100 mL/kg</strong> en infusión dividida:",
          "    • <em>En Lactantes (< 1 año):</em> 30 mL/kg en la 1.ª hora, seguido de 70 mL/kg en las siguientes 5 horas (total 6 horas).",
          "    • <em>En Niños Mayores (≥ 1 año):</em> 30 mL/kg en los primeros 30 minutos, seguido de 70 mL/kg en las siguientes 2.5 horas (total 3 horas).",
          "    • Si hay shock descompensado: <strong>Bolo inicial de 20 mL/kg en 10-15 minutos</strong> y reevaluar pulsos y llene capilar."
        ]
      },
      {
        "subhead": "3. Síndrome Hemolítico Urémico (SHU) y Manejo Antibiótico",
        "paragraphs": [
          "• <strong>Contraindicaciones Absolutas en Diarrea Aguda Infantil:</strong>",
          "  - <strong>Antidiarreicos / Loperamida:</strong> ¡PROHIBIDOS! Producen íleo paralítico, megacolon tóxico y aumentan la absorción de toxinas.",
          "  - <strong>Antieméticos habituales (Metoclopramida):</strong> Desaconsejados por extrapiramidalismo agudo. Ondansetrón oral en dosis única puede considerarse en vómitos para facilitar la rehidratación oral en urgencias.",
          "• <strong>Síndrome Hemolítico Urémico (SHU):</strong>",
          "  - Primera causa de Injuria Renal Aguda intrínseca en lactantes y niños pequeños en Chile.",
          "  - Fisiopatología: Infección entérica por <strong>Escherichia coli productora de toxina Shiga (STEC / EHEC O157:H7)</strong> o <em>Shigella dysenteriae</em> tras consumo de carne molida mal cocida o leche no pasteurizada.",
          "  - <strong>Tríada Cardinal Clásica:</strong> 1) <strong>Anemia Hemolítica Microangiopática</strong> (Coombs negativo, esquistocitos en frotis); 2) <strong>Trombocitopenia por consumo</strong>; 3) <strong>Injuria Renal Aguda (Oligoanuria con hematuria y proteinuria)</strong>, precedida típicamente por diarrea con sangre (disentería) 3 a 7 días antes.",
          "  - <strong>REGLA DE ORO VITAL:</strong> <strong>¡ESTÁ ESTRICTAMENTE CONTRAINDICADO EL USO DE ANTIBIÓTICOS EN DIARREA DISENTÉRICA POR SOSPECHA DE STEC!</strong> Los antibióticos inducen la lisis bacteriana masiva de E. coli liberando grandes cantidades de toxina Shiga a la circulación y <strong>multiplican por 5 a 10 el riesgo de desarrollar SHU</strong> y falla renal. Tampoco se indican transfusiones de plaquetas salvo hemorragia con riesgo vital (alimentan los microtrombos)."
        ]
      },
      {
        "subhead": "4. Osteoclisis (Acceso Intraóseo): Indicaciones y Técnica",
        "paragraphs": [
          "<strong>Indicación:</strong> necesidad inmediata de fluidos o fármacos en un niño con <strong>shock descompensado, paro cardiorrespiratorio, deshidratación grave o convulsión</strong> en quien no se logra una vía venosa periférica tras 2 intentos o 90 segundos. Es válida a cualquier edad y permite infundir cristaloides, sangre, adrenalina, atropina, glucosa, anticonvulsivantes y antibióticos.",
          "<strong>Sitio:</strong> <strong>tibia proximal</strong> (1 a 3 cm bajo la tuberosidad tibial, en la cara anteromedial plana; el de elección), tibia distal (sobre el maléolo medial), fémur distal (3 cm sobre los cóndilos, en la línea media) o húmero proximal en niños mayores. <strong>Técnica:</strong> asepsia, aguja intraósea (manual o con dispositivo de taladro) en dirección perpendicular o levemente caudal (lejos del cartílago de crecimiento), con movimiento rotatorio hasta sentir la <strong>pérdida brusca de resistencia</strong> al entrar en la médula. Se confirma porque la aguja queda firme, se puede aspirar médula y el suero fluye sin extravasación ni edema.",
          "Los líquidos se infunden <strong>a presión</strong> con jeringa (bolos de 20 mL) o bolsa presurizada, porque no fluyen por gravedad. <em>Contraindicaciones:</em> fractura del hueso a puncionar, infección local, punción intraósea reciente en el mismo hueso y enfermedades óseas (osteogénesis imperfecta, osteopetrosis). <em>Complicaciones:</em> extravasación con síndrome compartimental, osteomielitis, lesión del cartílago de crecimiento y embolia grasa. Es una vía <strong>transitoria</strong>: se retira en cuanto se logra un acceso venoso (idealmente antes de 24 horas)."
        ]
      },
      {
        "subhead": "5. Síndrome Disentérico y Shigelosis: Manejo Antibiótico",
        "paragraphs": [
          "La <strong>disentería</strong> es la diarrea con <strong>sangre visible</strong> (con moco, fiebre, pujo y tenesmo). En el niño la causa más importante es <strong><em>Shigella</em></strong>; otros agentes son <em>Campylobacter jejuni</em>, <em>Salmonella</em> no tifoídica, <em>E. coli</em> enteroinvasora y <em>Entamoeba histolytica</em>. La shigelosis causa fiebre alta, <strong>convulsiones febriles</strong> y puede complicarse con bacteriemia, megacolon tóxico, artritis reactiva y, con <em>S. dysenteriae</em> tipo 1, SHU. Se solicita <strong>coprocultivo</strong>; el tratamiento de la deshidratación (SRO, plan A, B o C) y el <strong>zinc</strong> son siempre la base.",
          "<em>Antibióticos:</em> se tratan los cuadros de <strong>disentería con fiebre y sospecha de <em>Shigella</em></strong>: <strong>azitromicina 10 mg/kg/día por 3 días</strong> (primera línea actual por la resistencia a cotrimoxazol); alternativa: <strong>ceftriaxona</strong> 50 a 75 mg/kg/día por 3 a 5 días en casos graves, o ciprofloxacino 15 mg/kg cada 12 horas por 3 días en infecciones graves. Cotrimoxazol solo si el antibiograma es sensible. La amebiasis se trata con metronidazol 30 a 50 mg/kg/día por 7 a 10 días.",
          "<strong>Excepciones:</strong> ante sospecha de <strong>STEC / <em>E. coli</em> O157</strong> (diarrea sanguinolenta <em>sin fiebre</em> alta, antecedente de carne molida mal cocida, brote) <strong>no se dan antibióticos</strong>, porque aumentan la liberación de toxina Shiga y el riesgo de SHU. Tampoco se tratan las salmonelosis no tifoídicas no invasoras, salvo en menores de 3 meses, inmunodeprimidos o bacteriemia. Están contraindicados los antidiarreicos y antiperistálticos."
        ]
      },
      {
        "subhead": "6. Manejo de Soporte del Síndrome Hemolítico Urémico",
        "paragraphs": [
          "No existe tratamiento específico; el manejo es de <strong>soporte en unidad con nefrología pediátrica</strong>. (1) <strong>Balance hídrico estricto</strong>: en la fase prodrómica la rehidratación isotónica precoz protege el riñón; una vez instalada la oligoanuria se restringe a pérdidas insensibles más diuresis. (2) <strong>Presión arterial:</strong> hipertensión por sobrecarga y renina, tratada con calcioantagonistas (nifedipino, amlodipino) y diuréticos de asa. (3) <strong>Transfusión</strong> de glóbulos rojos (lavados) solo con Hb < 6 a 7 g/dL; <strong>se evitan las plaquetas</strong> salvo sangrado activo o procedimiento, porque pueden agravar la microtrombosis. (4) Corrección de la hiperkalemia, acidosis y nutrición con restricción de potasio y fósforo.",
          "<strong>Indicaciones de diálisis</strong> (peritoneal o hemodiálisis): anuria prolongada (> 24 horas), sobrecarga hídrica con edema pulmonar o hipertensión refractaria, hiperkalemia refractaria, acidosis grave y uremia sintomática o encefalopatía. No se usan antibióticos ni AINE. En el SHU atípico o con compromiso neurológico grave, el especialista considera <strong>eculizumab</strong>. La mortalidad aguda es de 3 a 5%; hasta 10 a 30% queda con secuelas renales (hipertensión, proteinuria, ERC), por lo que se mantiene <strong>seguimiento de años</strong>."
        ]
      }
    ],
    "table": {
      "title": "Evaluación Clínica del Grado de Deshidratación según la OMS",
      "headers": [
        "Signo Clínico",
        "Sin Deshidratación (< 5%)",
        "Algún Grado / Moderada (5-10%)",
        "Grave / Severa (> 10%)"
      ],
      "rows": [
        [
          "Estado de Conciencia",
          "Alerta, despierto, reactivo",
          "Inquieto, irritable",
          "Letárgico, comatoso, inconsciente"
        ],
        [
          "Ojos",
          "Normales",
          "Hundidos",
          "Muy hundidos y secos"
        ],
        [
          "Lágrimas",
          "Presentes",
          "Escasas o ausentes",
          "Totalmente ausentes"
        ],
        [
          "Boca y Lengua",
          "Húmedas",
          "Secas / Pastosas",
          "Muy secas, saliva filante"
        ],
        [
          "Sed",
          "Bebe normal, sin sed excesiva",
          "Sediento, bebe con avidez",
          "Bebe mal o incapaz de beber"
        ],
        [
          "Pliegue Cutáneo",
          "Se recupera de inmediato",
          "Desaparece lentamente (< 2 seg)",
          "Desaparece muy lentamente (> 2 seg)"
        ],
        [
          "Plan de Manejo OMS",
          "PLAN A (Domicilio)",
          "PLAN B (SRO 50-100 mL/kg en 4h)",
          "PLAN C (Ringer Lactato EV 100 mL/kg)"
        ]
      ]
    },
    "severityTable": {
      "title": "Protocolo de Planes de Rehidratación Oral y Endovenosa OMS",
      "headers": [
        "Plan OMS",
        "Volumen / Fármaco",
        "Vía y Tiempo",
        "Conducta ante Falla"
      ],
      "rows": [
        [
          "Plan A",
          "10 mL/kg post deposición líquida de SRO",
          "Vía oral en domicilio",
          "Si vomita o deshidrata -> Plan B"
        ],
        [
          "Plan B",
          "50 a 100 mL/kg de SRO baja osmolaridad",
          "Vía oral fraccionada en 4 horas en box",
          "Si vómitos incoercibles -> Sonda nasogástrica (Gastroclisis)"
        ],
        [
          "Plan C (Shock)",
          "Bolo 20 mL/kg de SF 0.9% o Ringer Lactato",
          "Endovenoso rápido en 10-15 min",
          "Repetir hasta 3 bolos si persiste shock"
        ],
        [
          "Plan C (Mantenimiento)",
          "100 mL/kg Ringer Lactato total",
          "EV en 3h (>1 año) o en 6h (<1 año)",
          "Pasar a Plan B tan pronto pueda beber"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Composición de las Sales de Rehidratación Oral (SRO) de Osmolaridad Reducida OMS",
      "headers": [
        "Componente",
        "Concentración (mmol/L)",
        "Rol Fisiopatológico",
        "Importancia Clínica"
      ],
      "rows": [
        [
          "Sodio (Na+)",
          "75 mmol/L",
          "Cotransporte activo con glucosa",
          "Equilibrio osmolar óptimo"
        ],
        [
          "Glucosa",
          "75 mmol/L",
          "Activa el cotransportador SGLT-1",
          "Arrastra agua pasivamente al enterocito"
        ],
        [
          "Potasio (K+)",
          "20 mmol/L",
          "Reposición de pérdidas fecales",
          "Previene hipopotasemia e íleo"
        ],
        [
          "Cloruro (Cl-)",
          "65 mmol/L",
          "Acompaña al sodio",
          "Mantenimiento de electroneutralidad"
        ],
        [
          "Citrato",
          "10 mmol/L",
          "Corrección de acidosis metabólica",
          "Previene acidosis láctica"
        ],
        [
          "Osmolaridad Total",
          "245 mOsm/L",
          "Baja osmolaridad (frente a 311 previa)",
          "Reduce el volumen fecal en un 30%"
        ]
      ]
    },
    "vignette": "Lactante de 11 meses es traído al SAPU por presentar 8 deposiciones líquidas abundantes y 3 vómitos en las últimas 12 horas. Al examen físico: reactivo pero marcadamente irritable y lloroso, ojos hundidos, mucosas orales secas, llanto sin lágrimas y signo del pliegue cutáneo que desaparece en 1.5 segundos. Al ofrecerle una mamadera con agua, el niño la toma con extrema avidez y bebe con desesperación. Peso actual: 9.0 kg.",
    "explicacion": "El paciente presenta al menos tres signos cardinales de Deshidratación Moderada ('Algún grado de deshidratación' según OMS): irritabilidad, ojos hundidos, sed intensa (bebe con avidez) y pliegue cutáneo lento (< 2 segundos). La conducta médica protocolizada es ingresar al paciente a PLAN B de Rehidratación Oral: administrar Sales de Rehidratación Oral (SRO) a dosis de 50 a 100 mL/kg en 4 horas (en este niño de 9 kg corresponden entre 450 y 900 mL en 4 horas), administrados a cucharaditas o jeringa fraccionadamente en el box de observación.",
    "keyPoints": [
      "Deshidratación moderada (Plan B): Niño irritable, ojos hundidos, bebe con avidez y signo del pliegue < 2 segundos.",
      "Plan B OMS: SRO a 50-100 mL/kg en 4 horas por vía oral fraccionada.",
      "Si hay vómitos incoercibles en Plan B, se instala Sonda Nasogástrica para gastroclisis (20 mL/kg/hora).",
      "Deshidratación severa / shock (Plan C): Ringer Lactato o SF 0.9% endovenoso a 100 mL/kg (o bolo 20 mL/kg en shock).",
      "Plan A ambulatorio: Continuar alimentación habitual + SRO 10 mL/kg post cada deposición líquida.",
      "La loperamida y los antidiarreicos están ESTRICTAMENTE PROHIBIDOS en niños (riesgo de íleo y megacolon).",
      "En diarrea disentérica con sospecha de E. coli O157:H7 están PROHIBIDOS los antibióticos por riesgo de SHU."
    ],
    "questions": [
      {
        "stem": "Un lactante de 10 meses que pesa 8 kg consulta por diarrea aguda acuosa y vómitos. Al examen físico se encuentra irritable, con ojos hundidos, saliva espesa y sed intensa (bebe agua con desesperación). El signo del pliegue cutáneo se resuelve en 1 segundo. ¿Cuál es el diagnóstico de hidratación y el volumen de Sales de Rehidratación Oral (SRO) a administrar en la primera etapa?",
        "options": [
          {
            "id": "A",
            "text": "Sin deshidratación; Plan A con 80 mL de agua tras cada deposición en el hogar"
          },
          {
            "id": "B",
            "text": "Deshidratación moderada; Plan B con 400 a 800 mL de SRO por vía oral fraccionados en 4 horas en la sala de observación"
          },
          {
            "id": "C",
            "text": "Deshidratación severa; Plan C con bolo endovenoso de 160 mL de Ringer Lactato en 10 minutos"
          },
          {
            "id": "D",
            "text": "Deshidratación moderada; prescribir Loperamida oral y suero glucosado al 5% por vía oral"
          },
          {
            "id": "E",
            "text": "Deshidratación leve; régimen cero estricto por 12 horas para reposo digestivo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El paciente tiene signos claros de deshidratación moderada (irritabilidad, ojos hundidos, sed intensa).\nB) Correcta. El lactante presenta criterios de Deshidratación Moderada (Algún grado de deshidratación según OMS). Corresponde iniciar PLAN B de Rehidratación Oral, cuya dosis es de 50 a 100 mL/kg de SRO durante un período de 4 horas. Para un lactante de 8 kg: 8 x 50 = 400 mL; 8 x 100 = 800 mL. Por lo tanto, el volumen a administrar en 4 horas es de 400 a 800 mL de SRO administrados con cuchara o jeringa de forma supervisada.\nC) Incorrecta. No tiene criterios de shock ni deshidratación grave (está consciente, bebe activamente).\nD) Incorrecta. La loperamida está formalmente contraindicada en niños.\nE) Incorrecta. El ayuno o régimen cero empeora la atrofia vellositaria y la desnutrición.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.039"
      },
      {
        "stem": "Un lactante de 14 meses con diarrea aguda y deshidratación moderada está recibiendo Plan B con SRO. A pesar de fraccionar las tomas cada 5 minutos, el niño presenta 4 vómitos copiosos en 30 minutos y rechaza la cuchara con llanto vigoroso. ¿Cuál es la conducta recomendada por la OMS antes de pasar a la vía endovenosa?",
        "options": [
          {
            "id": "A",
            "text": "Administrar Metoclopramida endovenosa a 1 mg/kg"
          },
          {
            "id": "B",
            "text": "Instalar una Sonda Nasogástrica e infundir la SRO mediante Gastroclisis a 20 mL/kg/hora"
          },
          {
            "id": "C",
            "text": "Suspender todo líquido por 8 horas y reintentar"
          },
          {
            "id": "D",
            "text": "Dar de alta con bebidas isotónicas comerciales para deportistas"
          },
          {
            "id": "E",
            "text": "Realizar punción lumbar de urgencia"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La metoclopramida está desaconsejada en lactantes por alto riesgo de reacciones extrapiramidales agudas distónicas.\nB) Correcta. La guía oficial de la OMS y del MINSAL establece que ante el fracaso de la rehidratación oral por vómitos persistentes o rechazo activo en un paciente con deshidratación moderada sin shock, la alternativa inmediata de elección es la Gastroclisis: colocación de una sonda nasogástrica e infusión continua y lenta de Sales de Rehidratación Oral (a 15-20 mL/kg/hora). Esto permite mantener la mucosa intestinal nutrida y rehidratar al paciente evitando invasión venosa innecesaria.\nC) Incorrecta. Provocaría mayor deshidratación.\nD) Incorrecta. Las bebidas para deportistas tienen exceso de carbohidratos y muy poco sodio, produciendo diarrea osmótica e hiponatremia.\nE) Incorrecta. No tiene relación.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.039"
      },
      {
        "stem": "Un niño de 2 años presenta diarrea disentérica (con sangre y mucus) desde hace 4 días tras consumir una hamburguesa casera. Hoy la madre lo nota pálido, muy decaído y con disminución marcada de la diuresis (no orina desde hace 10 horas). Los exámenes muestran: Hemoglobina 6.5 g/dL, Plaquetas 42.000/mm³, Creatinina 2.8 mg/dL y frotis sanguíneo con abundantes esquistocitos. ¿Cuál es la sospecha diagnóstica y qué tratamiento farmacológico está CONTRAINDICADO?",
        "options": [
          {
            "id": "A",
            "text": "Invaginación intestinal; contraindicada la ecografía"
          },
          {
            "id": "B",
            "text": "Síndrome Hemolítico Urémico (SHU); están contraindicados los antibióticos"
          },
          {
            "id": "C",
            "text": "Púrpura Trombocitopénico Inmune; contraindicados los corticoides"
          },
          {
            "id": "D",
            "text": "Apendicitis perforada; contraindicada la laparotomía"
          },
          {
            "id": "E",
            "text": "Sepsis bacteriana; contraindicada la hidratación endovenosa"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La clínica analítica describe anemia microangiopática, no invaginación.\nB) Correcta. La combinación de diarrea sanguinolenta previa, anemia hemolítica microangiopática (esquistocitos), trombocitopenia severa e insuficiencia renal aguda oligúrica configura el diagnóstico inequívoco de Síndrome Hemolítico Urémico (SHU), típicamente mediado por toxina Shiga de E. coli O157:H7. En este cuadro están FORMALMENTE CONTRAINDICADOS los antibióticos, ya que lisan las bacterias liberando masivamente toxinas a la circulación, agravando la lesión endotelial glomerular y cerebral.\nC) Incorrecta. En PTI la hemoglobina y la función renal son rigurosamente normales.\nD) Incorrecta. No corresponde.\nE) Incorrecta. La hidratación y el soporte renal son la base del manejo.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.039"
      },
      {
        "stem": "¿Cuál es la principal ventaja de las Sales de Rehidratación Oral (SRO) de Osmolaridad Reducida recomendadas actualmente por la OMS (osmolaridad 245 mOsm/L y sodio 75 mEq/L) en comparación con la fórmula clásica anterior (311 mOsm/L)?",
        "options": [
          {
            "id": "A",
            "text": "Erradican las bacterias intestinales en menos de 24 horas"
          },
          {
            "id": "B",
            "text": "Reducen el volumen de las deposiciones diarreicas en aproximadamente un 30% y disminuyen los vómitos"
          },
          {
            "id": "C",
            "text": "Permiten suspender la lactancia materna de forma inmediata"
          },
          {
            "id": "D",
            "text": "Tienen un sabor dulce que permite añadirles azúcar refinada"
          },
          {
            "id": "E",
            "text": "Eliminan la necesidad de suplementar zinc en países en desarrollo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Las sales no son antibióticos y no tienen efecto bactericida.\nB) Correcta. Los ensayos clínicos demostraron que las SRO de baja osmolaridad (245 mOsm/L) reducen el volumen fecal en un 30-33%, acortan la duración de la diarrea y reducen la incidencia de vómitos y la necesidad de infusión endovenosa en comparación con la fórmula antigua de 311 mOsm/L.\nC) Incorrecta. La lactancia nunca debe suspenderse.\nD) Incorrecta. Añadir azúcar aumentaría la osmolaridad luminal causando diarrea osmótica.\nE) Incorrecta. El sulfato de zinc oral sigue recomendado por la OMS.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.039"
      }
    ]
  },
  {
    "id": "ped-12",
    "classId": "ped-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.12",
    "title": "Vómitos en el Lactante: RGE Fisiológico vs Estenosis Hipertrófica del Píloro (EHP) vs Invaginación Intestinal",
    "perfilCode": "2.01.1.046",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Urgencias quirúrgicas pediátricas de resolución oportuna.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#11) · EUNACOM Julio 2022 (Q#39)",
    "frecuencia": "Alta rentabilidad · Alcalosis metabólica hipoclorémica en EHP y heces en jalea de grosella en invaginación",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Diferencial de Vómitos en el Lactante según Edad y Características",
    "diagramRows": [
      {
        "t": "Lactante con Vómitos Frecuentes o Recurrentes",
        "s": "Evaluar: ¿Bilioso o no bilioso? ¿Proyectil? ¿Dolor cólico episódico? ¿Estado nutricional?",
        "type": "acc"
      },
      {
        "t": "Descarte de Urgencia Quirúrgica según Edad",
        "s": "Vómito bilioso (verde) = Malrotación / Vólvulo de intestino medio hasta demostrar lo contrario",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Diferenciación entre EHP e Invaginación",
        "al": "EHP vs Invaginación Intestinal",
        "ll": "Lactante 2 a 8 Semanas de Vida",
        "left": {
          "t": "Estenosis Hipertrófica del Píloro (EHP)",
          "s": "Vómitos postprandiales en proyectil no biliosos · Hambre continua · Alcalosis hipoclorémica · Eco pilórica",
          "type": "warn"
        },
        "rl": "Lactante 3 a 12 Meses de Vida",
        "right": {
          "t": "Invaginación Intestinal (Intususcepción)",
          "s": "Crisis de dolor cólico intenso con llanto y encogimiento · Masa en 'morcilla' · Deposiciones en jalea de grosella",
          "type": "crit"
        }
      },
      {
        "t": "Reflujo Gastroesofágico Fisiológico (Regurgitador Feliz)",
        "s": "Lactante que regurgita leche sin dolor, con ganancia de peso normal y buen desarrollo: Medidas posturales, NO fármacos",
        "type": "acc"
      }
    ],
    "contexto": "El vómito es un síntoma frecuente en pediatría con un espectro que va desde la regurgitación fisiológica del lactante ('vomitador feliz') hasta emergencias quirúrgicas mayores. El médico general debe diferenciar con rapidez la Estenosis Hipertrófica del Píloro (EHP, con vómitos no biliosos en proyectil y alteración hidroelectrolítica clásica) y la Invaginación Intestinal (primera causa de obstrucción intestinal entre los 3 y 12 meses), recordando que todo vómito bilioso es una urgencia quirúrgica hasta demostrar lo contrario.",
    "contentSections": [
      {
        "subhead": "1. Reflujo Gastroesofágico Fisiológico (RGE) vs Enfermedad por Reflujo (ERGE)",
        "paragraphs": [
          "• <strong>Reflujo Fisiológico ('Regurgitador Feliz'):</strong> Inmadurez del esfínter esofágico inferior que afecta a más del 50% de los menores de 6 meses. Consiste en regurgitaciones postprandiales de leche no digerida, <strong>sin dolor, con excelente ganancia de peso y desarrollo normal</strong>. Manejo: Tranquilizar a los padres, medidas posturales (posición erguida 20-30 min post tomas), fraccionar tomas. <strong>¡Están contraindicados los inhibidores de bomba de protones (IBP) y procinéticos!</strong> Remite espontáneamente al año.",
          "• <strong>Enfermedad por RGE (ERGE):</strong> El reflujo produce complicaciones: esofagitis, llanto irritable con las tomas, rechazo alimentario, escasa ganancia ponderal (faltering growth), síntomas respiratorios recurrentes (broncoespasmo, neumonía por aspiración) o Síndrome de Sandifer (posturas distónicas paroxísticas de cuello). Requiere estudio y prueba con Omeprazol/Esomeprazol."
        ]
      },
      {
        "subhead": "2. Estenosis Hipertrófica del Píloro (EHP)",
        "paragraphs": [
          "• <strong>Epidemiología y Clínica:</strong> Afecta predominantemente a varones primogénitos (4:1) entre las <strong>2 y 8 semanas de vida</strong> (pico a las 3-5 semanas).",
          "• <strong>Manifestaciones Cardinales:</strong>",
          "  - <strong>Vómitos postprandiales en proyectil (a chorro)</strong>, de contenido alimentario (leche cortada), <strong>ESTRICTAMENTE NO BILIOSOS</strong> (la obstrucción es pre-ampular).",
          "  - <strong>'Lactante hambriento':</strong> Tras vomitar con fuerza, el niño pide de inmediato volver a mamar con desesperación.",
          "  - Pérdida de peso o detención del incremento ponderal y deshidratación progresiva.",
          "  - Al examen: Onda peristáltica gástrica visible de izquierda a derecha y palpación de la <strong>'oliva pilórica'</strong> (masa móvil de 1-2 cm en hipocondrio derecho/epigastrio).",
          "• <strong>Trastorno Hidroelectrolítico Clásico Patognomónico:</strong>",
          "  - <strong>Alcalosis metabólica hipoclorémica e hipopotasémica</strong> (por pérdida masiva de ácido clorhídrico y potasio en los vómitos gástricos, con conservación de bicarbonato).",
          "• <strong>Diagnóstico y Tratamiento:</strong>",
          "  - Examen de elección: <strong>Ecografía abdominal</strong> (grosor del músculo pilórico ≥ 3 mm y longitud del canal pilórico ≥ 14-15 mm).",
          "  - Tratamiento: La cirugía (<strong>Piloromiotomía de Ramstedt</strong>) es electiva pero urgente. <strong>REGLA DE ORO: ¡Nunca operar antes de corregir completamente la deshidratación y la alcalosis hipoclorémica!</strong> (La anestesia en un niño con alcalosis severa produce apnea central y arritmias)."
        ]
      },
      {
        "subhead": "3. Invaginación Intestinal (Intususcepción)",
        "paragraphs": [
          "• <strong>Epidemiología y Causa:</strong> Causa más frecuente de obstrucción intestinal en niños de <strong>3 meses a 2 años</strong> (pico 6-9 meses). La más común es la <strong>ileocólica</strong> (90%). En lactantes suele ser idiopática secundaria a hipertrofia de placas de Peyer (tras infección viral por rotavirus o adenovirus). En mayores de 2 años se asocia a punto guía anatómico (divertículo de Meckel, pólipo, linfoma).",
          "• <strong>Tríada Clínica Clásica:</strong>",
          "  1) <strong>Dolor abdominal cólico súbito paroxístico:</strong> El niño llora intensamente, flexiona las piernas sobre el abdomen, palidece, y tras 10-15 minutos se calma y queda letárgico o dormido, repitiéndose en crisis periódicas.",
          "  2) <strong>Vómitos:</strong> Inicialmente alimentarios y luego <strong>biliosos</strong> por obstrucción mecánica distal.",
          "  3) <strong>Deposiciones en 'Jalea de Grosella'</strong> (sangre oscura mezclada con moco por isquemia y descamación mucosa, signo tardío).",
          "  - Al examen: Fosa ilíaca derecha vacía (signo de Dance) y masa tubular alargada palpable en hipocondrio derecho ('morcilla').",
          "• <strong>Diagnóstico y Reducción:</strong>",
          "  - <strong>Ecografía abdominal (Estándar de oro):</strong> Imagen en 'diana', 'donut' o 'pseudoriñón'.",
          "  - <strong>Tratamiento:</strong> Si no hay peritonitis ni neumoperitoneo: <strong>Reducción hidrostática o neumática guiada por ecografía/fluoroscopía</strong> (enema neumático/baritado). Si hay peritonitis, perforación o falla del enema: Laparotomía urgente."
        ]
      },
      {
        "subhead": "4. Abdomen Agudo Pediátrico: Enfoque Inicial por Edad",
        "paragraphs": [
          "El <strong>abdomen agudo</strong> es el dolor abdominal de instalación reciente con signos de irritación peritoneal u obstrucción que puede requerir cirugía urgente. Las causas dependen de la edad: <strong>recién nacido</strong> (enterocolitis necrotizante, atresias, malrotación con vólvulo, enfermedad de Hirschsprung, íleo meconial); <strong>lactante</strong> (invaginación intestinal, hernia inguinal estrangulada, vólvulo); <strong>preescolar y escolar</strong> (<strong>apendicitis aguda</strong>, la causa quirúrgica más frecuente, adenitis mesentérica, divertículo de Meckel, peritonitis primaria del síndrome nefrótico, trauma); <strong>adolescente</strong> (apendicitis, torsión testicular u ovárica, enfermedad inflamatoria pélvica, embarazo ectópico).",
          "<strong>Claves de la evaluación:</strong> el <strong>vómito bilioso</strong> es obstrucción intestinal (malrotación con vólvulo) hasta demostrar lo contrario y exige derivación urgente; en la apendicitis el dolor precede a los vómitos (migra desde el epigastrio o periumbilical a la fosa ilíaca derecha) y en la gastroenteritis ocurre lo contrario. Se busca defensa, rebote, signos de Rovsing, psoas y obturador; en el niño pequeño se observa la marcha y el dolor al saltar o toser. <strong>Siempre se examinan los genitales y las regiones inguinales</strong> (torsión, hernia).",
          "<em>Exámenes:</em> hemograma y PCR, orina completa, <strong>ecografía abdominal</strong> (apendicitis: apéndice no compresible > 6 mm con grasa periapendicular hiperecogénica; invaginación: signo de la diana), radiografía de abdomen (niveles hidroaéreos, neumoperitoneo, <strong>doble burbuja</strong> de la atresia duodenal) y TAC solo si hay duda o trauma. <em>Manejo inicial (Inicial/Derivar):</em> ayuno, vía venosa e hidratación, analgesia (no enmascara el cuadro), antibióticos (ceftriaxona más metronidazol) si hay sospecha de apendicitis complicada o peritonitis, y <strong>derivación a cirugía infantil</strong>."
        ]
      },
      {
        "subhead": "5. Nota sobre el Código 2.01.1.046: Displasia Broncopulmonar",
        "paragraphs": [
          "El código 2.01.1.046 del Perfil figura repetido: reflujo gastroesofágico y vómitos del lactante (tratado en este tema) y <strong>displasia broncopulmonar</strong> (DBP). La DBP es la dependencia de oxígeno a los 28 días de vida y a las 36 semanas de edad postmenstrual en el prematuro < 32 semanas; se sospecha en todo prematuro que sigue con requerimiento de oxígeno, taquipnea y retracciones, y se <strong>deriva</strong> a neonatología o broncopulmonar. Su desarrollo completo está en el tema 18.18 (Dificultad Respiratoria Neonatal)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de los Vómitos Quirúrgicos y Médicos en el Lactante",
      "headers": [
        "Patología",
        "Edad Típica",
        "Características del Vómito",
        "Laboratorio / Imágenes",
        "Tratamiento de Elección"
      ],
      "rows": [
        [
          "RGE Fisiológico",
          "< 6 meses",
          "Regurgitación no biliosa, sin dolor",
          "Normal · Buen peso",
          "Medidas posturales · Tranquilizar"
        ],
        [
          "Estenosis Hipertrófica del Píloro",
          "3 a 5 semanas",
          "En proyectil, no bilioso, hambre voraz",
          "Alcalosis hipoclorémica · Eco pilórica",
          "Corrección hidroelectrolítica + Piloromiotomía"
        ],
        [
          "Invaginación Intestinal",
          "6 a 12 meses",
          "Bilioso tardío, dolor cólico intermitente",
          "Eco en 'diana' · Jalea de grosella",
          "Reducción con enema neumático / Cirugía"
        ],
        [
          "Vólvulo por Malrotación",
          "Primer mes",
          "Bilioso precoz y súbito, shock",
          "Rx: escaso gas distal · Tránsito baritado",
          "Cirugía de Ladd inmediata de urgencia"
        ],
        [
          "Alergia a Proteína de Leche (APLV)",
          "Primeros meses",
          "Regurgitaciones, irritabilidad, estrías de sangre",
          "Prueba de exclusión materna",
          "Fórmula extensamente hidrolizada"
        ]
      ]
    },
    "vignette": "Lactante masculino de 4 semanas de vida, primogénito. La madre consulta porque desde hace 5 días presenta vómitos después de casi todas las tomas de pecho, los cuales han ido aumentando de intensidad hasta salir 'con mucha fuerza y a chorro' al suelo. El vómito contiene leche cortada blanca, sin contenido verde ni amarillo. Tras vomitar, el niño llora desconsoladamente buscando mamar de nuevo. Al examen: peso estancado respecto al nacimiento, mucosas secas, signo del pliegue leve y distensión epigástrica. Gases venosos: pH 7.52, HCO3 34 mEq/L, Cloro 84 mEq/L, Potasio 3.1 mEq/L.",
    "explicacion": "Lactante varón de 4 semanas con vómitos postprandiales en proyectil no biliosos, avidez por alimentarse y gasometría con Alcalosis Metabólica Hipoclorémica e Hipopotasémica. El diagnóstico inequívoco es Estenosis Hipertrófica del Píloro (EHP). El examen confirmatorio de elección es la ecografía pilórica. La conducta médica prioritaria antes de cualquier resolución quirúrgica (piloromiotomía de Ramstedt) es la corrección hidroelectrolítica parenteral con suero fisiológico y cloruro de potasio, ya que operar a un paciente en alcalosis severa conlleva alto riesgo de apnea perioperatoria.",
    "keyPoints": [
      "EHP: Vómitos en proyectil no biliosos en varones de 3 a 5 semanas, con avidez por alimentarse.",
      "Trastorno electrolítico de EHP: Alcalosis metabólica hipoclorémica e hipopotasémica.",
      "Confirmación de EHP: Ecografía pilórica (músculo ≥ 3 mm, longitud ≥ 14 mm).",
      "Tratamiento de EHP: Piloromiotomía de Ramstedt, previa corrección obligatoria de la deshidratación y alcalosis.",
      "Invaginación intestinal: Crisis paroxísticas de dolor cólico con encogimiento de piernas, masa en 'morcilla' y heces en 'jalea de grosella'.",
      "La ecografía muestra imagen patognomónica en 'diana' o 'donut'; se trata con enema neumático hidrostático.",
      "Todo vómito bilioso (verde) en el recién nacido es un vólvulo de intestino medio hasta demostrar lo contrario."
    ],
    "questions": [
      {
        "stem": "Un lactante varón de 4 semanas es evaluado por vómitos frecuentes desde hace 4 días. La madre relata que vomita violentamente a chorro después de alimentarse, la leche sale sin color verdoso y luego pide mamar inmediatamente con desesperación. En los exámenes de laboratorio se constata: pH 7.50, Bicarbonato 32 mEq/L, Cloro 86 mEq/L y Sodio 134 mEq/L. ¿Cuál es el diagnóstico más probable y el examen de primera línea para confirmarlo?",
        "options": [
          {
            "id": "A",
            "text": "Enfermedad por reflujo gastroesofágico; pH-metría esofágica de 24 horas"
          },
          {
            "id": "B",
            "text": "Estenosis hipertrófica del píloro; Ecografía abdominal dirigida a píloro"
          },
          {
            "id": "C",
            "text": "Invaginación intestinal; Enema baritado con fluoroscopía"
          },
          {
            "id": "D",
            "text": "Atresia duodenal; Radiografía de abdomen simple de pie"
          },
          {
            "id": "E",
            "text": "Alergia a la proteína de leche de vaca; Colonoscopía con biopsia"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El RGE no produce vómitos en proyectil con alcalosis metabólica severa.\nB) Correcta. La tríada de lactante varón de 4 semanas con vómitos postprandiales en proyectil no biliosos, avidez por alimentarse y alcalosis metabólica hipoclorémica es patognomónica de Estenosis Hipertrófica del Píloro (EHP). El examen de imagen de primera línea y estándar de oro por su alta sensibilidad (>98%) e inocuidad es la Ecografía Abdominal, que evidencia hipertrofia del músculo pilórico (espesor ≥ 3 mm y longitud ≥ 14 mm).\nC) Incorrecta. La invaginación ocurre en lactantes mayores (6-9 meses) y presenta heces con sangre y dolor cólico.\nD) Incorrecta. La atresia duodenal se manifiesta en las primeras 24-48h de vida con vómitos biliosos y signo de la doble burbuja.\nE) Incorrecta. La APLV produce deposiciones con estrías de sangre sin alcalosis hipoclorémica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.046"
      },
      {
        "stem": "Un lactante de 7 meses, previamente sano, presenta desde hace 6 horas episodios súbitos de llanto inconsolable en los que flexiona las piernas sobre el abdomen y palidece intensamente. Entre las crisis el niño se observa somnoliento y decaído. Hace una hora presentó un vómito bilioso y eliminó una deposición mucosa de color rojo oscuro similar a 'jalea de grosella'. Al palpar el abdomen se percibe una masa alargada en el hipocondrio derecho. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Diarrea bacteriana por Shigella"
          },
          {
            "id": "B",
            "text": "Estenosis hipertrófica del píloro"
          },
          {
            "id": "C",
            "text": "Invaginación intestinal (Intususcepción)"
          },
          {
            "id": "D",
            "text": "Divertículo de Meckel sangrante indoloro"
          },
          {
            "id": "E",
            "text": "Alergia a la proteína de la leche de vaca"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La disentería infecciosa produce fiebre alta, tenesmo y no cursa con dolor cólico paroxístico periódico ni masa palpable.\nB) Incorrecta. La EHP afecta a menores de 2 meses y los vómitos son estrictamente no biliosos.\nC) Correcta. La combinación de dolor abdominal cólico paroxístico súbito con encogimiento de piernas y palidez, intercalado con letargia, vómito bilioso, masa palpable alargada ('morcilla') y deposición en 'jalea de grosella' (sangre con moco por compromiso vascular mesentérico) es el cuadro típico de Invaginación Intestinal en el lactante.\nD) Incorrecta. El divertículo de Meckel produce rectorragia masiva indolora, sin crisis cólicas de dolor.\nE) Incorrecta. La APLV no produce abdomen agudo ni vómitos biliosos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.046"
      }
    ]
  },
  {
    "id": "ped-13",
    "classId": "ped-13",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.13",
    "title": "Infección del Tracto Urinario (ITU) en Pediatría: ITU Febril, Estudio por Imágenes & Profilaxis",
    "perfilCode": "2.01.1.049",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por guías clínicas de Nefrología Infantil (SOCHIPE / MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#10) · EUNACOM Julio 2023 (Q#22) · EUNACOM Diciembre 2022 (Q#110)",
    "frecuencia": "Alta rentabilidad · Técnica de recolección de orina según continencia de esfínteres y criterios de imágenes",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico, Tratamiento Antibiótico y Estudio por Imágenes en ITU Pediátrica",
    "diagramRows": [
      {
        "t": "Sospecha de ITU: Lactante con Fiebre sin Foco o Síntomas Urinarios",
        "s": "Lactante: Fiebre, vómitos, irritabilidad · Preescolar: Disuria, polaquiuria, enuresis",
        "type": "acc"
      },
      {
        "t": "Recolección de Orina Estéril según Control de Esfínteres",
        "s": "Sin control: Cateterismo vesical (sondeo) o Punción suprapúbica (¡Prohibido recolector para urocultivo!) · Con control: Segundo chorro limpio",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Estratificación Clínica: ITU Baja vs Pielonefritis (ITU Febril)",
        "al": "Estratificación Clínica de ITU",
        "ll": "Cistitis / ITU Afebril",
        "left": {
          "t": "Manejo Ambulatorio Oral",
          "s": "Cefadroxilo (30-50 mg/kg/d) o Nitrofurantoína oral x 3-5 días (solo en vejiga)",
          "type": "acc"
        },
        "rl": "Pielonefritis Aguda (ITU Febril / T° ≥ 38°C)",
        "right": {
          "t": "Tratamiento Oral o EV x 7 a 10 Días",
          "s": "Ambulatorio: Cefadroxilo oral 50 mg/kg/d · Hospitalizar (<3m, vómitos, tóxico): Cefotaxima o Ceftriaxona EV",
          "type": "crit"
        }
      },
      {
        "t": "Estudio por Imágenes Post-Primer Episodio de ITU Febril",
        "s": "1) Ecografía Renal y Vesical a todos · 2) Uretrocistografía (UCG) si eco alterada o ITU atípica/recurrente · 3) Cintigrama DMSA a los 6 meses (cicatriz renal)",
        "type": "warn"
      }
    ],
    "contexto": "La Infección del Tracto Urinario (ITU) es una de las infecciones bacterianas más frecuentes en la infancia y un marcador clínico de malformaciones nefro-urológicas subyacentes, principalmente el Reflujo Vésico-Ureteral (RVU). La pielonefritis aguda puede generar cicatrices corticales renales con riesgo futuro de hipertensión arterial y enfermedad renal crónica. El médico general debe saber que la bolsa recolectora NO sirve para confirmar urocultivo (solo descarta si es negativa), conocer los antibióticos empíricos según nivel de atención e indicar el algoritmo de imágenes normado.",
    "contentSections": [
      {
        "subhead": "1. Etiología y Métodos de Recolección de Orina",
        "paragraphs": [
          "El patógeno uropatógeno indiscutido es <strong>Escherichia coli</strong> (>80-85% de los casos), seguido por <em>Klebsiella pneumoniae</em>, <em>Proteus mirabilis</em> (asociado a orina alcalina y litiasis de estruvita), <em>Enterobacter</em> y <em>Enterococcus faecalis</em>.",
          "<strong>Métodos de Toma de Muestra de Orina (Pregunta Clásica EUNACOM):</strong>",
          "• <strong>Niños que NO controlan esfínteres (Lactantes):</strong>",
          "  - <strong>Cateterismo vesical estéril (Sondeo):</strong> Método estándar de elección en la práctica clínica. Es estéril y seguro.",
          "  - <strong>Punción Suprapúbica:</strong> Estándar de oro microbiológico absoluto, de elección en neonatos o fimosis severa.",
          "  - <strong>Bolsa Recolectora de Orina:</strong> Tiene una tasa de falsos positivos por contaminación perineal de hasta 85%. <strong>REGLA DE ORO: La bolsa recolectora SOLO sirve si el sedimento de orina resulta TOTALMENTE NORMAL (alto valor predictivo negativo para descartar ITU). NUNCA se debe diagnosticar ITU ni iniciar tratamiento con urocultivo tomado de bolsa recolectora.</strong>",
          "• <strong>Niños que controlan esfínteres:</strong> Muestra obtenida por <strong>segundo chorro miccional limpio</strong>, previo aseo genital con agua."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos Microbiológicos de Urocultivo",
        "paragraphs": [
          "El diagnóstico definitivo requiere aislamiento de un único microorganismo en urocultivo:",
          "• Punción Suprapúbica: <strong>≥ 1 UFC/mL</strong> de cualquier bacteria gramnegativa (o ≥ 1.000 de grampositivos).",
          "• Cateterismo Vesical (Sondeo): <strong>≥ 10.000 a 50.000 UFC/mL</strong> (≥ 10⁴ UFC/mL con sedimento patológico).",
          "• Segundo Chorro Limpio: <strong>≥ 100.000 UFC/mL (≥ 10⁵ UFC/mL)</strong>."
        ]
      },
      {
        "subhead": "3. Tratamiento Antibiótico Estandarizado",
        "paragraphs": [
          "• <strong>ITU Baja / Cistitis (Afebril, niños mayores):</strong>",
          "  - <strong>Cefadroxilo oral:</strong> 30 a 50 mg/kg/día dividido cada 12 horas por 3 a 5 días.",
          "  - <strong>Nitrofurantoína oral:</strong> 3 a 5 mg/kg/día dividido cada 6 a 8 horas por 5 días. <em>Advertencia estricta:</em> <strong>La nitrofurantoína está CONTRAINDICADA en ITU febril / Pielonefritis</strong>, ya que no alcanza concentraciones terapéuticas en el parénquima renal ni en la sangre.",
          "• <strong>Pielonefritis Aguda / ITU Febril:</strong>",
          "  - <em>Tratamiento Ambulatorio (Niño > 3 meses, buen estado general, tolera vía oral):</em> <strong>Cefadroxilo oral a 50 mg/kg/día</strong> por <strong>7 a 10 días</strong>.",
          "  - <em>Tratamiento Hospitalario (Menor de 3 meses, vómitos, aspecto séptico, deshidratación):</em> <strong>Cefotaxima EV (150 mg/kg/día)</strong> o Ceftriaxona EV/IM (50-75 mg/kg/día) o Ampicilina + Gentamicina, pasando a vía oral tras 48h afebril para completar 10 a 14 días."
        ]
      },
      {
        "subhead": "4. Algoritmo de Estudio por Imágenes Post-ITU",
        "paragraphs": [
          "• <strong>1) Ecografía Renal y Vesical:</strong> Indicada a <strong>TODOS los niños tras el primer episodio de ITU febril comprobada</strong>. Evalúa tamaño renal, dilatación de la vía urinaria (hidronefrosis), engrosamiento de pared vesical y anomalías anatómicas. En ITU no complicada se realiza ambulatoria una vez resuelto el cuadro agudo; en ITU grave o mala respuesta a las 48h se realiza de urgencia.",
          "• <strong>2) Uretrocistografía Miccional (UCG):</strong> Es el estándar de oro para diagnosticar y etapificar el <strong>Reflujo Vésico-Ureteral (RVU grados I a V)</strong> y descartar valvas de uretra posterior en varones. <em>Indicaciones actuales:</em> Ecografía renal alterada (dilatación o displasia), ITU recurrente, o ITU febril por germen distinto a E. coli (ITU atípica). Se realiza tras 2-4 semanas de resuelta la infección.",
          "• <strong>3) Cintigrama Renal con DMSA (Ácido Dimercaptosuccínico):</strong> Evalúa daño cortical y presencia de <strong>cicatrices renales permanentes</strong>. Se solicita a los <strong>6 meses</strong> del episodio agudo."
        ]
      },
      {
        "subhead": "5. Orina Completa: Interpretación en el Niño",
        "paragraphs": [
          "<strong>Tira reactiva:</strong> la <strong>esterasa leucocitaria</strong> (leucocituria) y los <strong>nitritos</strong> (bacterias que reducen nitratos; muy específicos, pero con baja sensibilidad en lactantes porque la orina permanece poco tiempo en la vejiga) orientan a infección urinaria; una tira con ambos negativos hace improbable la ITU. Proteínas, sangre, glucosa, cetonas, pH y densidad completan el examen.",
          "<strong>Sedimento urinario:</strong> leucocituria significativa si hay > 5 leucocitos por campo de 40× (o > 10/µL); la presencia de <strong>bacterias</strong> aumenta la probabilidad de ITU; los <strong>cilindros leucocitarios</strong> sugieren pielonefritis. <em>Hematuria</em> (> 5 hematíes por campo): <strong>glomerular</strong> si hay hematíes dismórficos, <strong>cilindros hemáticos</strong>, orina «color té» y proteinuria (glomerulonefritis postestreptocócica, nefropatía IgA); <strong>no glomerular</strong> si los hematíes son normales (litiasis, hipercalciuria, infección, malformaciones).",
          "<em>Proteinuria:</em> se cuantifica con la relación proteína/creatinina en muestra aislada (normal < 0,2 mg/mg; > 2 mg/mg es rango nefrótico); la proteinuria ortostática es benigna. Una densidad < 1.010 sugiere orina diluida o defecto de concentración. <strong>Limitaciones:</strong> en una muestra de bolsa solo es útil un examen normal (descarta); la hidratación, el uso previo de antibióticos y la contaminación modifican los resultados. El diagnóstico de ITU requiere siempre <strong>urocultivo</strong>."
        ]
      },
      {
        "subhead": "6. Malformaciones Nefrourológicas: Sospecha, Estudio y Derivación",
        "paragraphs": [
          "Las malformaciones nefrourológicas ocurren en 3 a 4 de cada 1.000 recién nacidos y muchas se pesquisan en la <strong>ecografía prenatal</strong> (hidronefrosis, oligohidramnios). Las más frecuentes son: <strong>estenosis de la unión pieloureteral</strong> (primera causa de hidronefrosis neonatal), <strong>reflujo vésico-ureteral</strong>, megauréter, <strong>duplicidad pieloureteral</strong> (con ureterocele), <strong>riñón multiquístico displásico</strong>, agenesia renal unilateral, riñón en herradura, poliquistosis renal y <strong>válvulas de uretra posterior</strong> (varones: chorro débil, vejiga engrosada, hidronefrosis bilateral, riesgo de insuficiencia renal e hipoplasia pulmonar).",
          "<em>Sospecha postnatal:</em> hidronefrosis prenatal, <strong>arteria umbilical única</strong>, malformaciones asociadas (ano imperforado, cardiopatías, oídos displásicos), masa abdominal, <strong>primera ITU febril</strong>, chorro urinario débil, hipertensión o falla de medro. <em>Estudio:</em> <strong>ecografía renal y vesical</strong> (la postnatal se hace después de los 5 a 7 días de vida, por la oliguria fisiológica inicial), <strong>uretrocistografía miccional</strong> (reflujo, válvulas), <strong>cintigrama renal</strong> (DMSA para cicatrices y función; MAG3 con furosemida para obstrucción) y, según el caso, uro-resonancia.",
          "<em>Conducta (Sospecha/Inicial/Derivar):</em> con hidronefrosis significativa se inicia <strong>profilaxis antibiótica</strong> mientras se completa el estudio y se <strong>deriva a nefrología o urología infantil</strong>; las válvulas de uretra posterior y la hidronefrosis bilateral grave son una derivación urgente."
        ]
      },
      {
        "subhead": "7. Reflujo Vésico-Ureteral: Grados, Profilaxis y Seguimiento",
        "paragraphs": [
          "El <strong>reflujo vésico-ureteral (RVU)</strong> es el paso retrógrado de orina de la vejiga al uréter; se diagnostica con la <strong>uretrocistografía miccional</strong> y se clasifica en cinco grados: <strong>I</strong> (solo uréter), <strong>II</strong> (llega a la pelvis sin dilatación), <strong>III</strong> (dilatación leve a moderada con cálices algo deformados), <strong>IV</strong> (dilatación moderada con tortuosidad ureteral) y <strong>V</strong> (dilatación severa, pérdida de las impresiones papilares). Los grados I a III suelen resolverse espontáneamente (alrededor del 80% en 5 años); los IV y V rara vez.",
          "<em>Manejo:</em> corregir la disfunción vesical y el estreñimiento y mantener micción regular. Se indica <strong>profilaxis antibiótica continua en dosis bajas</strong> (cefadroxilo 10 mg/kg/día o nitrofurantoína 1 a 2 mg/kg nocturna; en menores de 2 meses, amoxicilina) en los grados III a V y en los grados menores con ITU recurrentes, hasta la resolución o el control de esfínteres. El tratamiento <strong>endoscópico</strong> (inyección subureteral) o el <strong>reimplante ureteral</strong> se reservan para grados IV-V, ITU recurrentes pese a profilaxis, cicatrices progresivas o intolerancia a la profilaxis. Se controla con urocultivo ante fiebre, ecografía anual, DMSA y presión arterial y proteinuria por el riesgo de <strong>nefropatía por reflujo</strong>."
        ]
      },
      {
        "subhead": "8. Interpretación del Urocultivo y del Antibiograma",
        "paragraphs": [
          "El antibiograma informa cada antibiótico como <strong>sensible (S), intermedio (I) o resistente (R)</strong> según la concentración inhibitoria mínima. Se elige el antibiótico <strong>sensible, de menor espectro y con buena concentración urinaria o tisular</strong>, y se ajusta el esquema empírico a las 48 a 72 horas. Un cultivo con ≥ 2 gérmenes sugiere contaminación y se repite. No se trata la bacteriuria asintomática.",
          "En Chile la <em>E. coli</em> urinaria tiene alta resistencia a ampicilina (~50 a 60%) y cotrimoxazol (30 a 40%), por lo que no se usan de primera línea; la resistencia a cefalosporinas de primera generación es menor, pero crece la producción de <strong>betalactamasas de espectro extendido (BLEE)</strong>, que obliga a usar aminoglucósidos o carbapenémicos. La <strong>nitrofurantoína</strong> no sirve en pielonefritis (no alcanza niveles tisulares) ni frente a <em>Proteus</em>. Si no hay respuesta clínica a las 48 a 72 horas con antibiótico sensible, se busca obstrucción o absceso con ecografía."
        ]
      },
      {
        "subhead": "9. Técnica del Cateterismo Vesical en el Niño",
        "paragraphs": [
          "<strong>Indicaciones:</strong> obtener urocultivo en el lactante que no controla esfínteres, medir diuresis, retención aguda y estudios como la uretrocistografía. Se usa sonda de Nelaton de <strong>6 a 8 Fr</strong> (5 Fr en el recién nacido), material y guantes estériles. <strong>Técnica:</strong> lavado de manos; antisepsia genital con suero o clorhexidina acuosa; lubricante estéril. <em>Niña:</em> en decúbito con piernas en «rana», se separan los labios menores, se identifica el meato (sobre el introito vaginal) y se avanza 2 a 3 cm hasta que salga orina. <em>Varón:</em> se retrae suavemente el prepucio, se sostiene el pene perpendicular al cuerpo con tracción suave para enderezar la uretra y se avanza hasta la salida de orina; ante resistencia en el esfínter externo se mantiene presión suave y no se fuerza.",
          "Se descartan las primeras gotas y se recoge el resto en frasco estéril, que se procesa antes de 1 hora (o se refrigera). <em>Complicaciones:</em> infección, trauma uretral y falsa vía. No debe realizarse si hay sangre en el meato tras un trauma (antes, uretrografía)."
        ]
      },
      {
        "subhead": "10. Cintigrama Renal (DMSA y MAG3): Indicaciones e Informe",
        "paragraphs": [
          "El <strong>DMSA</strong> (ácido dimercaptosuccínico marcado con Tc-99m) es un estudio estático que evalúa la <strong>corteza renal funcionante</strong>: muestra <strong>cicatrices corticales</strong> (defectos fijos con pérdida de volumen) y la <strong>función relativa</strong> de cada riñón (normal 45 a 55%). Para diagnosticar cicatrices se realiza al menos 6 meses después de la pielonefritis, porque en la fase aguda los defectos pueden ser reversibles. Se indica en ITU febril atípica o recurrente, RVU de alto grado y sospecha de displasia o ectopia.",
          "El <strong>MAG3 con furosemida</strong> (renograma diurético) es dinámico y evalúa perfusión, función y drenaje: ante una hidronefrosis, una curva de eliminación que no desciende tras el diurético con <strong>T½ > 20 minutos</strong> indica obstrucción (T½ < 10 minutos es normal; entre 10 y 20, indeterminado). El médico general debe <strong>emplear el informe</strong>: función diferencial, presencia y localización de cicatrices y curva de drenaje; la radiación es baja y se requiere buena hidratación."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos de Urocultivo según Técnica de Recolección (SOCHIPE / AAP)",
      "headers": [
        "Método de Recolección",
        "Recuento Significativo (UFC/mL)",
        "Indicación Principal",
        "Riesgo de Falso Positivo"
      ],
      "rows": [
        [
          "Punción Suprapúbica",
          "≥ 1 UFC/mL (gramnegativos)",
          "Neonato / Fimosis extrema / Duda",
          "Nulo (Estándar de Oro)"
        ],
        [
          "Cateterismo Vesical (Sondeo)",
          "≥ 10.000 a 50.000 UFC/mL",
          "Lactantes sin control de esfínteres",
          "Bajo (< 5%)"
        ],
        [
          "Segundo Chorro Limpio",
          "≥ 100.000 UFC/mL (10⁵)",
          "Niños con control de esfínteres",
          "Moderado si mala técnica"
        ],
        [
          "Bolsa Recolectora",
          "¡NO VÁLIDA para urocultivo!",
          "Solo útil si sedimento es negativo",
          "Extremadamente alto (hasta 85%)"
        ]
      ]
    },
    "vignette": "Lactante femenina de 7 meses, sin antecedentes mórbidos. Consulta en SAPU por fiebre de hasta 39.0°C de 48 horas de evolución, decaimiento e inapetencia, sin síntomas respiratorios ni digestivos. Al examen físico: reactiva, faringe y oídos sanos, abdomen blando no doloroso y examen cardiopulmonar normal. Se instala bolsa recolectora perineal: el sedimento muestra leucocitos abundantes, piocitos y bacterias abundantes.",
    "explicacion": "En un lactante sin control de esfínteres con síndrome febril sin foco y sedimento de orina alterado en bolsa recolectora, el resultado de la bolsa es presuntivo pero NO diagnóstico debido a la alta tasa de falsos positivos por arrastre bacteriano cutáneo. La conducta médica correcta e ineludible es realizar inmediatamente un cateterismo vesical (sondeo estéril) para recolectar una muestra fidedigna para orina completa y urocultivo formal, iniciando posteriormente antibioticoterapia empírica con Cefadroxilo oral a 50 mg/kg/día si tolera la vía oral y programando una ecografía renal ambulatoria.",
    "keyPoints": [
      "La bolsa recolectora de orina solo sirve para descartar ITU si el sedimento es 100% normal.",
      "Para confirmar ITU e iniciar tratamiento en lactantes, la muestra debe ser por sondeo vesical o punción suprapúbica.",
      "Urocultivo significativo por sondeo: ≥ 10.000 a 50.000 UFC/mL; por chorro medio: ≥ 100.000 UFC/mL.",
      "Escherichia coli es el patógeno causal en más del 80% de los casos.",
      "En ITU febril ambulatoria se usa Cefadroxilo oral por 7 a 10 días; en hospitalizados, Cefotaxima EV.",
      "La Nitrofurantoína está contraindicada en ITU febril / pielonefritis (no alcanza concentraciones tisulares).",
      "La ecografía renal y vesical está indicada a todo niño tras el primer episodio de ITU febril."
    ],
    "questions": [
      {
        "stem": "Una lactante de 8 meses presenta fiebre de 39°C sin foco clínico evidente. Se realiza toma de muestra de orina mediante bolsa recolectora perineal, cuyo sedimento informa: leucocitos 30 por campo, nitritos positivos y bacterias abundantes. ¿Cuál es la conducta médica correcta antes de iniciar el tratamiento antibiótico definitivo?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar de inmediato Nitrofurantoína oral ambulatoria basada en el resultado de la bolsa recolectora"
          },
          {
            "id": "B",
            "text": "Realizar cateterismo vesical estéril (sondeo) para confirmar el sedimento y sembrar urocultivo fidedigno"
          },
          {
            "id": "C",
            "text": "Esperar 48 horas sin tratamiento para que el urocultivo de la bolsa recolectora confirme el diagnóstico"
          },
          {
            "id": "D",
            "text": "Indicar Ciprofloxacino oral y solicitar cintigrama DMSA urgente"
          },
          {
            "id": "E",
            "text": "Dar el alta con paracetamol considerando que la bolsa recolectora siempre es contaminante y descartar ITU"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La nitrofurantoína está contraindicada en ITU febril y la bolsa recolectora no es apta para confirmar urocultivo.\nB) Correcta. La bolsa recolectora perineal presenta una tasa inaceptable de contaminación (>80% falsos positivos). Si el sedimento de la bolsa es patológico, la norma de la Academia Americana de Pediatría y de la SOCHIPE exige confirmar la muestra mediante cateterismo vesical estéril (sondeo) o punción suprapúbica para orina completa y urocultivo cuantitativo antes de iniciar antibióticos, evitando diagnósticos erróneos y estudios invasivos innecesarios.\nC) Incorrecta. El urocultivo de bolsa no tiene valor confirmatorio.\nD) Incorrecta. Ciprofloxacino no es de primera línea y el DMSA se pide a los 6 meses.\nE) Incorrecta. Un sedimento alterado en un lactante febril no puede ignorarse.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.049"
      },
      {
        "stem": "¿Cuál de los siguientes antibióticos está FORMALMENTE CONTRAINDICADO como tratamiento de primera línea en una Pielonefritis Aguda (ITU febril) pediátrica debido a que no alcanza concentraciones terapéuticas en el parénquima renal?",
        "options": [
          {
            "id": "A",
            "text": "Cefadroxilo"
          },
          {
            "id": "B",
            "text": "Cefotaxima"
          },
          {
            "id": "C",
            "text": "Nitrofurantoína"
          },
          {
            "id": "D",
            "text": "Ceftriaxona"
          },
          {
            "id": "E",
            "text": "Gentamicina"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Las cefalosporinas de primera y tercera generación alcanzan excelentes niveles en parénquima renal y vía urinaria.\nB) Incorrecta. Es el betalactámico parenteral de elección en pielonefritis hospitalizada.\nC) Correcta. La Nitrofurantoína se absorbe rápidamente pero se excreta de forma casi exclusiva en la orina vesical, sin alcanzar concentraciones tisulares activas en el parénquima renal ni en sangre. Por ello, está formalmente contraindicada en pielonefritis aguda, ITU febril y sepsis urinaria, reservándose exclusivamente para cistitis afebril de vía urinaria baja o profilaxis.\nD) Incorrecta. Excelente fármaco parenteral para pielonefritis.\nE) Incorrecta. Es un aminoglucósido activo en parénquima renal.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.049"
      }
    ]
  },
  {
    "id": "ped-14",
    "classId": "ped-14",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.14",
    "title": "Convulsiones Febriles: Crisis Simple vs Compleja, Punción Lumbar & Pronóstico",
    "perfilCode": "2.01.2.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por guía clínica de Urgencias Neurológicas Pediátricas.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#24) · EUNACOM Julio 2023 (Q#92) · EUNACOM Diciembre 2022 (Q#14)",
    "frecuencia": "Alta rentabilidad · Diferencias críticas entre convulsión febril simple y compleja, y riesgo de epilepsia",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación, Clasificación y Manejo de la Convulsión Asociada a Fiebre",
    "diagramRows": [
      {
        "t": "Niño de 6 meses a 5 años con Crisis Convulsiva + Fiebre (≥ 38.0°C)",
        "s": "Descartar infección del SNC (meningitis/encefalitis) y alteración metabólica previa",
        "type": "acc"
      },
      {
        "t": "Clasificación Inmediata: Crisis Febril Simple vs Compleja",
        "s": "Evaluar: Duración, Semiología motora (focal vs generalizada), Recurrencia en 24h",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Diferenciación Clínica de la Convulsión Febril",
        "al": "Clasificación de Convulsión Febril",
        "ll": "Convulsión Febril Simple (Típica)",
        "left": {
          "t": "Crisis Febril Simple (70-80%)",
          "s": "Generalizada (tónico-clónica) · Duración < 15 min · Única en 24h · Recuperación rápida · Excelente pronóstico",
          "type": "acc"
        },
        "rl": "Convulsión Febril Compleja (Atípica)",
        "right": {
          "t": "Crisis Febril Compleja (20-30%)",
          "s": "Focal · Duración > 15 min · Recurre en < 24h o déficit postictal (paresia de Todd) · Requiere estudio",
          "type": "warn"
        }
      },
      {
        "t": "Punción Lumbar: Criterios Estrictos de Indicación",
        "s": "Obligatoria si: Signos meníngeos, letargia persistente, lactante < 12 meses sin vacunas (Hib/Neumococo) o antibióticos previos",
        "type": "crit"
      }
    ],
    "contexto": "Las convulsiones febriles son el trastorno neurológico convulsivo más frecuente de la infancia, afectando al 2-5% de los niños entre los 6 meses y 5 años (pico a los 18 meses). Se producen por una respuesta cerebral inmadura ante el ascenso rápido de la temperatura corporal, con base poligénica. El médico general debe calmar la angustia familiar extrema, distinguir con certeza una crisis simple (benigna, no requiere fármacos anticonvulsivantes continuos) de una crisis compleja, saber cuándo indicar punción lumbar para descartar meningitis y manejar el status febril.",
    "contentSections": [
      {
        "subhead": "1. Definición y Criterios de Exclusión",
        "paragraphs": [
          "Una <strong>convulsión febril</strong> se define como una crisis convulsiva que ocurre en un niño entre los <strong>6 meses y 5 años (60 meses)</strong> de edad, asociada a fiebre (T° axilar ≥ 38.0°C), en ausencia de:",
          "• Infección intracraneal del sistema nervioso central (meningitis, encefalitis).",
          "• Trastorno hidroelectrolítico o metabólico agudo (hipoglicemia, hipocalcemia, hiponatremia).",
          "• Antecedente de crisis convulsivas afebriles previas o epilepsia diagnosticada."
        ]
      },
      {
        "subhead": "2. Clasificación: Convulsión Febril Simple vs Compleja",
        "paragraphs": [
          "• <strong>Convulsión Febril Simple (Típica, 70-80% de los casos):</strong>",
          "  - <strong>Semiología:</strong> Generalizada (tónico-clónica bilateral, tónica o atónica).",
          "  - <strong>Duración:</strong> Breve, <strong>menor a 15 minutos</strong> (la gran mayoría dura < 3-5 minutos).",
          "  - <strong>Frecuencia:</strong> Episodio <strong>único en 24 horas</strong> (o en el curso del mismo cuadro febril).",
          "  - <strong>Período Postictal:</strong> Breve, con recuperación neurológica ad integrum sin focalidad neurológica posterior.",
          "  - <strong>Conducta:</strong> <strong>NO requiere electroencefalograma (EEG), NO requiere neuroimagen (TAC/RMN) y NO requiere fármacos anticonvulsivantes profilácticos continuos</strong>.",
          "• <strong>Convulsión Febril Compleja (Atípica, 20-30% de los casos):</strong>",
          "  - Presenta al menos <strong>UNO</strong> de los siguientes criterios:",
          "    1) <strong>Focalidad motora:</strong> Inicio focal o compromiso asimétrico de una extremidad o hemicuerpo.",
          "    2) <strong>Duración prolongada:</strong> Dura <strong>más de 15 minutos</strong> continuos (o status epiléptico febril si supera los 30 min).",
          "    3) <strong>Recurrencia:</strong> Se repite <strong>dos o más veces dentro de las mismas 24 horas</strong>.",
          "    4) <strong>Déficit neurológico postictal:</strong> Presencia de paresia focal transitoria (<strong>Parálisis de Todd</strong>)."
        ]
      },
      {
        "subhead": "3. Indicaciones de Punción Lumbar y Pronóstico a Largo Plazo",
        "paragraphs": [
          "• <strong>Indicaciones Formales de Punción Lumbar (PL) para descartar Meningitis:</strong>",
          "  1) Signos meníngeos presentes al examen físico (rigidez de nuca, signos de Kernig o Brudzinski) o fontanela abombada.",
          "  2) Letargia persistente, somnolencia profunda o irritabilidad extrema no atribuible al postictal tras 1-2 horas.",
          "  3) Lactante entre 6 y 12 meses con inmunizaciones incompletas contra <em>Haemophilus influenzae tipo b</em> o <em>Streptococcus pneumoniae</em>.",
          "  4) Lactante que estaba recibiendo tratamiento antibiótico previo (puede enmascarar signos de meningitis decapitada).",
          "• <strong>Pronóstico y Consejería a Padres:</strong>",
          "  - <strong>Riesgo de Recurrencia:</strong> Aproximadamente un 30% de los niños presentará una nueva crisis febril en futuros episodios infecciosos (el riesgo se eleva al 50% si el debut fue antes del año de vida).",
          "  - <strong>Riesgo de Epilepsia Futura:</strong> En crisis febril simple es idéntico o mínimamente superior al de la población general (1-2%). En crisis complejas, con antecedentes familiares de epilepsia o daño neurológico previo, el riesgo sube al 5-10%."
        ]
      },
      {
        "subhead": "4. Crisis Convulsiva Aguda y Estado Epiléptico: Manejo Inicial y Derivación",
        "paragraphs": [
          "El <strong>estado epiléptico</strong> es la crisis que dura más de <strong>5 minutos</strong> o dos crisis sin recuperación de conciencia entre ellas. <strong>Manejo inmediato:</strong> posición lateral de seguridad, vía aérea y oxígeno, monitorización, <strong>glicemia capilar</strong> (si < 60 mg/dL: suero glucosado 10%, 2 mL/kg) y acceso venoso. Primera línea: <strong>benzodiacepina</strong>: diazepam EV 0,2 a 0,5 mg/kg (máx. 10 mg) o rectal 0,5 mg/kg si no hay vía; <strong>midazolam IM</strong> 0,2 mg/kg (máx. 10 mg) o intranasal/bucal; lorazepam EV 0,1 mg/kg. Se puede repetir una vez a los 5 a 10 minutos, vigilando la depresión respiratoria.",
          "Segunda línea (si persiste a los 10 a 20 minutos): <strong>fenitoína 20 mg/kg EV</strong> en 20 minutos (con monitorización de ECG y sin mezclar con glucosa), fenobarbital 20 mg/kg o levetiracetam 40 a 60 mg/kg; el estado refractario se traslada a UCI. La convulsión febril simple que cede en minutos no requiere anticonvulsivante crónico. En el recién nacido, la primera línea es fenobarbital.",
          "<strong>Epilepsia:</strong> dos o más crisis no provocadas separadas por más de 24 horas. Tras una primera crisis afebril se solicitan glicemia, electrolitos con calcio y magnesio, EEG y resonancia (si es focal, menor de 1 año o hay déficit). Diagnósticos diferenciales: síncope, espasmos del sollozo, tics, terrores nocturnos y reflujo (síndrome de Sandifer). Síndromes clásicos: <strong>espasmos infantiles (West)</strong> con hipsarritmia y retraso; <strong>epilepsia de ausencia</strong> (punta-onda a 3 Hz con hiperventilación; etosuximida o valproato); epilepsia rolándica benigna (nocturna). Todo niño con epilepsia o crisis afebril se <strong>deriva a neurología infantil</strong> y la familia recibe consejería de seguridad (baño, bicicleta, agua)."
        ]
      },
      {
        "subhead": "5. Punción Lumbar: Técnica e Interpretación del Líquido Cefalorraquídeo",
        "paragraphs": [
          "<strong>Contraindicaciones:</strong> signos de hipertensión endocraneana con riesgo de herniación (se hace TAC antes), inestabilidad hemodinámica o respiratoria (primero se estabiliza e inicia el antibiótico), infección en el sitio de punción y trastorno de coagulación o plaquetas < 50.000/mm³. <strong>Técnica:</strong> decúbito lateral con flexión de rodillas (en el neonato no se flecta excesivamente el cuello, por riesgo de obstruir la vía aérea) o sentado; espacio <strong>L3-L4 o L4-L5</strong> (la línea que une las crestas ilíacas pasa por L4; en el neonato la médula llega hasta L3); asepsia y anestesia local; aguja con mandril con el bisel paralelo a las fibras, dirigida hacia el ombligo; se siente una «pérdida de resistencia» al atravesar la duramadre; se retira el mandril, se mide la presión de apertura y se recolectan <strong>3 tubos</strong> (bioquímica, cultivo y tinción de Gram, recuento celular). La glicemia se toma simultáneamente. Complicaciones: cefalea post-punción, infección, hematoma y herniación.",
          "<strong>Interpretación del LCR:</strong> • <em>Normal:</em> aspecto cristal de roca, 0 a 5 células/mm³ (hasta 20-30 mononucleares en el neonato), proteínas 20 a 40 mg/dL (hasta 100 a 150 en el recién nacido) y glucosa ≥ 60% de la glicemia. • <strong>Meningitis bacteriana:</strong> turbio, cientos a miles de células <strong>polimorfonucleares</strong>, proteínas elevadas (> 100 mg/dL), <strong>glucosa baja</strong> (< 40 mg/dL o relación LCR/sangre < 0,4), Gram o cultivo positivo. • <strong>Meningitis viral:</strong> claro, 10 a 500 células mononucleares, proteínas normales o levemente altas y glucosa normal. • <strong>Meningitis tuberculosa:</strong> mononucleares, proteínas muy altas y glucosa muy baja. Una punción traumática se reconoce porque el líquido se aclara entre el primer y el último tubo."
        ]
      }
    ],
    "table": {
      "title": "Diferencias Clave entre Convulsión Febril Simple y Compleja",
      "headers": [
        "Característica",
        "Crisis Febril Simple (Típica)",
        "Crisis Febril Compleja (Atípica)"
      ],
      "rows": [
        [
          "Frecuencia Poblacional",
          "70 a 80% de los casos",
          "20 a 30% de los casos"
        ],
        [
          "Semiología Motora",
          "Generalizada tónico-clónica bilateral",
          "Focal o con inicio asimétrico"
        ],
        [
          "Duración de la Crisis",
          "< 15 minutos (habitualmente < 5 min)",
          "> 15 minutos (o status si > 30 min)"
        ],
        [
          "Episodios en 24 Horas",
          "Único en 24 horas",
          "≥ 2 episodios en 24 horas"
        ],
        [
          "Examen Postictal",
          "Normal sin déficit focal",
          "Parálisis de Todd (paresia transitoria)"
        ],
        [
          "Estudio (EEG / TAC)",
          "NO indicado de rutina",
          "Indicado según evolución clínica"
        ],
        [
          "Riesgo Epilepsia Futura",
          "Bajo (~ 1-2%, similar a basal)",
          "Moderado (5 a 10%)"
        ]
      ]
    },
    "vignette": "Lactante de 18 meses, previamente sano y con vacunas al día. Mientras presentaba fiebre de 39.2°C por una faringoamigdalitis aguda, inicia bruscamente pérdida de conciencia, supraversión de la mirada y sacudidas clónicas generalizadas bilaterales y simétricas en las 4 extremidades. El episodio duró 3 minutos y cedió espontáneamente. Al llegar al Servicio de Urgencia 20 minutos después: el niño está afebril tras paracetamol rectal, activo, reactivo, se conecta con sus padres, sonríe y no presenta rigidez de nuca ni déficit motor focal.",
    "explicacion": "El cuadro corresponde a una Convulsión Febril Simple (edad 18 meses, crisis generalizada bilateral, duración < 15 minutos, episodio único en 24 horas y recuperación neurológica completa ad integrum sin signos meníngeos). La conducta médica consiste en identificar y tratar el foco infeccioso extracraneal causante de la fiebre, educar y tranquilizar a los padres sobre la naturaleza benigna del cuadro y las medidas de primeros auxilios (posición de seguridad de lado, no introducir objetos en la boca). No requiere punción lumbar, electroencefalograma ni fármacos anticonvulsivantes profilácticos continuos.",
    "keyPoints": [
      "La convulsión febril ocurre entre los 6 meses y 5 años asociada a fiebre sin infección del SNC.",
      "Crisis Simple: Generalizada, < 15 minutos, única en 24h, sin focalidad neurológica (excelente pronóstico).",
      "Crisis Compleja: Focal, > 15 minutos, repetida en 24h o con parálisis de Todd postictal.",
      "La crisis simple NO requiere EEG, TAC de cerebro ni tratamiento antiepiléptico de mantención.",
      "La punción lumbar está indicada si hay signos meníngeos, letargia prolongada o lactante < 12 meses no vacunado.",
      "Los antipiréticos alivian el malestar del niño pero NO han demostrado prevenir la recurrencia de crisis febriles.",
      "El riesgo de desarrollar epilepsia futura tras una crisis simple es muy bajo (1-2%)."
    ],
    "questions": [
      {
        "stem": "Un niño de 20 meses presenta en su domicilio una crisis convulsiva tónico-clónica generalizada de 3 minutos de duración en el contexto de fiebre de 39.3°C. Al evaluarlo en el box de urgencia 30 minutos después, el niño se encuentra despierto, activo, afebril, con examen neurológico normal y signos meníngeos negativos. Se constata una otitis media aguda derecha. Calendario de vacunas completo. ¿Cuál es la conducta diagnóstica y terapéutica más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Realizar punción lumbar inmediata y TAC de cerebro con contraste"
          },
          {
            "id": "B",
            "text": "Iniciar tratamiento anticonvulsivante profiláctico con Ácido Valproico oral por 2 años"
          },
          {
            "id": "C",
            "text": "Diagnosticar convulsión febril simple, tratar la otitis media con amoxicilina oral, educar a los padres y dar de alta"
          },
          {
            "id": "D",
            "text": "Hospitalizar en UCI pediátrica para infusión continua de Fenitoína"
          },
          {
            "id": "E",
            "text": "Solicitar Electroencefalograma de urgencia previo al alta"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. En una crisis febril simple con examen neurológico normal, vacunas al día y foco evidente en niño mayor de 12 meses, la PL y el TAC son totalmente innecesarios e invasivos.\nB) Incorrecta. Los fármacos antiepilépticos continuos (valproato, carbamazepina) no están indicados en convulsiones febriles simples debido a sus potenciales efectos adversos que superan ampliamente el riesgo de una crisis benigna.\nC) Correcta. El paciente presenta una Convulsión Febril Simple típica. La conducta correcta es tratar el foco infeccioso primario (Otitis Media Aguda con Amoxicilina), explicar detalladamente a los padres la naturaleza benigna y autolimitada del cuadro, enseñar las medidas básicas de seguridad ante una eventual nueva crisis y otorgar el alta médica sin estudios complementarios invasivos.\nD) Incorrecta. No está en status convulsivo.\nE) Incorrecta. El EEG no predice la recurrencia ni la epilepsia en crisis simples y no debe solicitarse de urgencia.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.006"
      },
      {
        "stem": "¿Cuál de las siguientes características clínicas clasifica a una crisis convulsiva asociada a fiebre como una CONVULSIÓN FEBRIL COMPLEJA?",
        "options": [
          {
            "id": "A",
            "text": "Duración de 4 minutos con movimientos clónicos en las cuatro extremidades"
          },
          {
            "id": "B",
            "text": "Ocurrencia de sacudidas clónicas limitadas exclusivamente al hemicuerpo derecho y duración de 18 minutos"
          },
          {
            "id": "C",
            "text": "Presencia de fiebre de 40.2°C al momento de la convulsión"
          },
          {
            "id": "D",
            "text": "Edad del paciente de 18 meses al momento del debut"
          },
          {
            "id": "E",
            "text": "Recuperación completa del estado de alerta en 15 minutos sin déficit motor"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Es generalizada y < 15 minutos, criterios de crisis simple.\nB) Correcta. La convulsión febril compleja (o atípica) se define por la presencia de al menos uno de los siguientes criterios: semiología focal (en este caso hemicuerpo derecho), duración prolongada mayor a 15 minutos (en este caso 18 min), recurrencia en menos de 24 horas, o déficit motor residual postictal (paresia de Todd).\nC) Incorrecta. La magnitud de la temperatura no define si es simple o compleja.\nD) Incorrecta. Los 18 meses están en pleno rango típico (6m a 5 años).\nE) Incorrecta. La recuperación rápida sin déficit es propia de la crisis simple.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.006"
      }
    ]
  },
  {
    "id": "ped-25",
    "classId": "ped-25",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.25",
    "title": "Inmunodeficiencias Primarias, Infecciones Recurrentes, Hepatomegalia e Interpretación del Hemograma Pediátrico",
    "perfilCode": "2.01.1.056, 2.01.1.014, 2.01.1.044, 2.01.4.015",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica · VIH/SIDA (GES N° 19) y leucemia aguda en menores de 15 años (GES N° 3) se derivan por hemograma alterado",
    "reconstrucciones": "EUNACOM Enero 2023 (Q#12) · EUNACOM Diciembre 2022 (Q#136)",
    "frecuencia": "Alta rentabilidad · inmunodeficiencia humoral (agammaglobulinemia) desde los 6 meses con infecciones piógenas, signos de alarma de inmunodeficiencia y hemograma normal del lactante (linfocitosis fisiológica)",
    "svg": null,
    "algoTitle": "Algoritmo de Sospecha de Inmunodeficiencia en el Niño con Infecciones Recurrentes",
    "diagramRows": [
      {
        "t": "Niño con infecciones frecuentes",
        "s": "Contar episodios, gravedad, germen, localización, respuesta al tratamiento, crecimiento y antecedentes familiares",
        "type": "acc"
      },
      {
        "t": "¿Es un patrón normal para la edad?",
        "s": "6-10 infecciones respiratorias virales al año, leves y con recuperación completa, asistiendo a sala cuna, con crecimiento normal",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Presencia de signos de alarma",
        "al": "Sin signos de alarma",
        "ll": "No",
        "left": {
          "t": "Patrón esperable o causa no inmunológica",
          "s": "Atopia, sala cuna, reflujo, asma, adenoides, cuerpo extraño · Tranquilizar y controlar",
          "type": "acc"
        },
        "rl": "Sí",
        "right": {
          "t": "Sospecha de inmunodeficiencia",
          "s": "Infecciones graves, por gérmenes inusuales, ≥ 2 neumonías, antibióticos EV, falla de medro, candidiasis persistente, antecedente familiar",
          "type": "crit"
        }
      },
      {
        "t": "Estudio inicial y derivación a inmunología",
        "s": "Hemograma con recuento linfocitario · IgG, IgA, IgM · VIH · Rx tórax · test del sudor si hay patología respiratoria · evitar vacunas vivas si se sospecha defecto celular",
        "type": "warn"
      }
    ],
    "contexto": "Las infecciones recurrentes son un motivo de consulta habitual en pediatría, y casi siempre son un patrón normal en niños que asisten a sala cuna. El desafío del médico general es distinguir al niño sano con muchas infecciones de aquel con una inmunodeficiencia primaria, reconociendo los signos de alarma y solicitando el estudio básico antes de derivar. Este tema integra además el enfoque de la hepatomegalia y la interpretación del hemograma pediátrico, cuyos valores normales cambian con la edad y suelen generar errores diagnósticos.",
    "contentSections": [
      {
        "subhead": "1. Infecciones Recurrentes: Patrón Normal vs Signos de Alarma",
        "paragraphs": [
          "Un niño sano menor de 5 años presenta <strong>6 a 10 infecciones respiratorias virales por año</strong> (más si asiste a sala cuna), de curso leve y con recuperación completa. Las infecciones recurrentes más frecuentes tienen causa <strong>no inmunológica</strong>: atopia y asma, sala cuna o hermanos mayores, hipertrofia adenoidea, reflujo gastroesofágico, tabaquismo pasivo, cuerpo extraño y malformaciones anatómicas. Otras causas a descartar: fibrosis quística, discinesia ciliar, VIH y desnutrición.",
          "<strong>Signos de alarma de inmunodeficiencia primaria</strong> (Fundación Jeffrey Modell): 8 o más otitis medias en un año; 2 o más sinusitis graves en un año; 2 o más neumonías en un año; 2 o más infecciones profundas (meningitis, sepsis, osteomielitis, celulitis); abscesos cutáneos u orgánicos profundos recurrentes; candidiasis oral o cutánea persistente después del año; infección que requiere antibióticos endovenosos; antibióticos por 2 meses o más con poco efecto; <strong>falla de medro</strong>; infecciones por gérmenes oportunistas; <strong>antecedente familiar</strong> de inmunodeficiencia o de muertes tempranas por infección.",
          "<em>Estudio inicial (Inicial/Derivar):</em> <strong>hemograma con recuento absoluto de linfocitos y neutrófilos</strong>, VHS/PCR, <strong>inmunoglobulinas séricas (IgG, IgA, IgM)</strong>, test de VIH, radiografía de tórax y, según el cuadro, test del sudor. Un niño con signos de alarma se deriva a inmunología; mientras tanto se tratan las infecciones precozmente y no se indican vacunas vivas si se sospecha un defecto celular."
        ]
      },
      {
        "subhead": "2. Inmunodeficiencias Primarias: Clasificación y Sospecha según el Tipo de Infección",
        "paragraphs": [
          "El <strong>tipo de infección</strong> orienta al compartimento afectado. • <strong>Defectos humorales (linfocitos B), 50-60% de los casos:</strong> infecciones bacterianas piógenas sinopulmonares (otitis, sinusitis, neumonías por <em>S. pneumoniae</em> y <em>H. influenzae</em>), que comienzan <strong>después de los 6 meses</strong>, cuando desaparece la IgG materna. <strong>Agammaglobulinemia ligada al X (Bruton)</strong>: varón, amígdalas ausentes, IgG, IgA e IgM muy bajas, linfocitos B (CD19) ausentes. <strong>Déficit selectivo de IgA</strong>: el más frecuente, a menudo asintomático, con riesgo de anafilaxia frente a transfusiones y asociación con celiaquía y atopia. <strong>Inmunodeficiencia común variable</strong>: en adolescentes y adultos.",
          "• <strong>Defectos celulares (linfocitos T):</strong> infecciones virales graves, candidiasis, <em>Pneumocystis jirovecii</em> y diarrea crónica desde los primeros meses, con falla de medro y <strong>linfopenia</strong>. <strong>Inmunodeficiencia combinada grave (SCID)</strong>: aparece antes de los 6 meses, sin timo en la radiografía; es una urgencia (trasplante de médula) y contraindica las vacunas vivas (BCG, rotavirus). <strong>Síndrome de DiGeorge (microdeleción 22q11)</strong>: cardiopatía conotruncal, hipocalcemia por hipoparatiroidismo, timo hipoplásico y dismorfia facial; los hemoderivados deben ser irradiados. • <strong>Wiskott-Aldrich:</strong> trombocitopenia con plaquetas pequeñas, eccema e infecciones.",
          "• <strong>Defectos de la fagocitosis:</strong> <strong>enfermedad granulomatosa crónica</strong> (abscesos y adenitis por gérmenes catalasa positivos: <em>S. aureus</em>, <em>Serratia</em>, <em>Aspergillus</em>; diagnóstico con prueba de dihidrorrodamina o NBT) y déficit de adhesión leucocitaria (caída tardía del cordón, onfalitis y leucocitosis marcada sin pus). • <strong>Defectos del complemento:</strong> déficit de C5-C9 (infecciones recurrentes por <em>Neisseria</em>), déficit de C3 (infecciones piógenas graves) y de C1-inhibidor (angioedema hereditario, sin infecciones).",
          "<em>Conducta (Sospecha/Inicial/Derivar):</em> las <strong>inmunodeficiencias secundarias</strong> (VIH, desnutrición, síndrome nefrótico, asplenia, quimioterapia y corticoides) son más frecuentes y deben descartarse primero. La sospecha se confirma con inmunología (cuantificación de inmunoglobulinas, subpoblaciones linfocitarias, función de fagocitos y complemento). El tratamiento depende del defecto: <strong>inmunoglobulina intravenosa o subcutánea</strong> en los defectos humorales, profilaxis con cotrimoxazol y trasplante de células madre en las formas combinadas graves."
        ]
      },
      {
        "subhead": "3. Hepatomegalia en el Niño: Enfoque Diagnóstico",
        "paragraphs": [
          "El hígado se palpa normalmente 1 a 2 cm bajo el reborde costal en el lactante y hasta 1 cm en el escolar. Debe distinguirse de la <strong>ptosis hepática</strong> por hiperinsuflación (asma, bronquiolitis): se mide el <strong>espacio hepático por percusión</strong> (el borde superior desciende y el tamaño total es normal). La hepatomegalia verdadera se acompaña de un tamaño aumentado a la percusión y orienta según los hallazgos asociados.",
          "• <strong>Con esplenomegalia (hepatoesplenomegalia):</strong> infecciones congénitas (TORCH), mononucleosis, hemólisis, leucemias y linfomas, enfermedades de depósito (Gaucher, Niemann-Pick), hipertensión portal. • <strong>Con ictericia o colestasia:</strong> atresia de vías biliares, hepatitis. • <strong>Con insuficiencia cardíaca:</strong> congestión hepática (hepatomegalia dolorosa, ingurgitación yugular). • <strong>Hepatomegalia aislada con hipoglicemia de ayuno corto:</strong> <strong>glucogenosis tipo I</strong> (déficit de glucosa-6-fosfatasa): facies «de muñeca», abdomen prominente, hipoglicemia, acidosis láctica, hipertrigliceridemia e hiperuricemia. • Obesidad (hígado graso), fibrosis quística, enfermedad de Wilson (después de los 3 años), galactosemia y tirosinemia.",
          "<em>Estudio inicial (Inicial/Derivar):</em> hemograma y frotis, transaminasas, bilirrubina fraccionada, glicemia en ayuno, perfil lipídico, ácido úrico y lactato, y <strong>ecografía abdominal</strong>. Según la sospecha, el especialista solicita serologías, estudio metabólico o biopsia. Se deriva si la hepatomegalia es persistente, de consistencia aumentada, asociada a otros síntomas o hay hipoglicemia."
        ]
      },
      {
        "subhead": "4. Hemograma Pediátrico: Valores por Edad e Interpretación",
        "paragraphs": [
          "<strong>Hemoglobina:</strong> recién nacido 14 a 20 g/dL; nadir fisiológico a los 2 a 3 meses (~10-11 g/dL); desde los 6 meses a los 5 años el límite inferior es <strong>11 g/dL</strong> (anemia si es menor), 11,5 g/dL entre los 5 y 11 años y 12 g/dL en adolescentes. El VCM es alto en el recién nacido, desciende en el lactante (límite inferior ~70 fL al año) y sube gradualmente. <strong>Plaquetas:</strong> 150.000 a 450.000/mm³ a cualquier edad.",
          "<strong>Leucocitos y fórmula:</strong> recién nacido 9.000 a 30.000/mm³ con predominio de neutrófilos; en el lactante 6.000 a 17.500; en el preescolar 5.500 a 15.500; en el escolar 4.500 a 13.500. Hay dos «cruces» fisiológicos de la fórmula: a los 5 a 7 días predominan los linfocitos, y <strong>los linfocitos se mantienen como la población predominante hasta los 4 a 6 años</strong>, cuando se invierte a neutrófilos. Por ello un lactante con 60% de linfocitos es normal y <em>no</em> sugiere leucemia ni infección viral.",
          "<strong>Interpretación:</strong> • <strong>Infección bacteriana:</strong> leucocitosis > 15.000, neutrofilia, desviación a izquierda (baciliformes > 10% o relación inmaduros/totales > 0,2) y granulaciones tóxicas; leucopenia < 5.000 con neutropenia también puede indicar sepsis grave. • <strong>Neutropenia:</strong> recuento absoluto < 1.500/mm³ (grave < 500): causas virales, fármacos y neutropenia étnica benigna; el riesgo de infección grave depende de su magnitud. • <strong>Linfocitosis marcada:</strong> coqueluche, mononucleosis (linfocitos atípicos) y virosis. • <strong>Eosinofilia</strong> (> 500/mm³): atopia y parasitosis.",
          "• <strong>Anemia microcítica:</strong> ferropenia (RDW alto) o talasemia (RDW normal, índice de Mentzer < 13). • <strong>Trombocitopenia aislada</strong> en un niño sano tras una virosis: púrpura trombocitopénica inmune. • <strong>Pancitopenia, blastos o citopenias asociadas a hepatoesplenomegalia o dolor óseo:</strong> sospecha de leucemia (GES), derivación urgente a hematología. El hemograma siempre se interpreta con la edad, la clínica y el frotis."
        ]
      }
    ],
    "table": {
      "title": "Inmunodeficiencias Primarias: Compartimento, Infecciones Típicas y Examen de Sospecha",
      "headers": [
        "Compartimento",
        "Infecciones Típicas",
        "Ejemplos",
        "Examen Orientador"
      ],
      "rows": [
        [
          "Humoral (B)",
          "Otitis, sinusitis y neumonías piógenas desde los 6 meses",
          "Bruton, déficit de IgA, inmunodeficiencia común variable",
          "Inmunoglobulinas IgG, IgA, IgM · linfocitos B CD19"
        ],
        [
          "Celular (T) y combinada",
          "Virales graves, hongos, Pneumocystis; diarrea crónica; falla de medro",
          "SCID, DiGeorge, Wiskott-Aldrich",
          "Recuento de linfocitos · Rx de tórax (timo) · subpoblaciones"
        ],
        [
          "Fagocitos",
          "Abscesos, adenitis, gérmenes catalasa positivos; caída tardía del cordón",
          "Enfermedad granulomatosa crónica, adhesión leucocitaria",
          "Hemograma · prueba de dihidrorrodamina o NBT"
        ],
        [
          "Complemento",
          "Neisseria recurrente, infecciones piógenas",
          "Déficit de C5-C9, C3",
          "CH50 y fracciones C3, C4"
        ],
        [
          "Secundarias",
          "Variables",
          "VIH, desnutrición, nefrótico, asplenia, fármacos",
          "Test de VIH · albúmina · hemograma"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Valores Normales del Hemograma Pediátrico según Edad",
      "headers": [
        "Edad",
        "Hemoglobina (g/dL)",
        "Leucocitos (/mm³)",
        "Fórmula predominante"
      ],
      "rows": [
        [
          "Recién nacido",
          "14 a 20",
          "9.000 a 30.000",
          "Neutrófilos"
        ],
        [
          "2 a 3 meses",
          "9,5 a 12 (nadir fisiológico)",
          "6.000 a 17.500",
          "Linfocitos"
        ],
        [
          "6 meses a 2 años",
          "≥ 11",
          "6.000 a 17.500",
          "Linfocitos (50-70%)"
        ],
        [
          "2 a 5 años",
          "≥ 11",
          "5.500 a 15.500",
          "Linfocitos hasta los 4-6 años"
        ],
        [
          "6 a 12 años",
          "≥ 11,5",
          "4.500 a 13.500",
          "Neutrófilos"
        ],
        [
          "Adolescentes",
          "≥ 12",
          "4.500 a 13.000",
          "Neutrófilos"
        ]
      ]
    },
    "vignette": "Lactante de 15 meses, previamente sano hasta los 6 meses, que desde entonces ha tenido candidiasis oral a repetición, cuatro otitis medias agudas y dos neumonías que requirieron hospitalización. Su peso y talla están en el percentil 25. Al examen no se observan amígdalas ni ganglios palpables. Un hermano varón por línea materna falleció de neumonía a los 3 años. El hemograma muestra leucocitos 9.800/mm³ y linfocitos T normales.",
    "explicacion": "La edad de inicio (después de los 6 meses, cuando cae la IgG materna), las infecciones piógenas sinopulmonares y óticas recurrentes, la ausencia de tejido linfoide y el antecedente de un varón fallecido por línea materna sugieren una inmunodeficiencia humoral (agammaglobulinemia ligada al X de Bruton). La candidiasis sola no basta para sospechar un defecto celular. Se solicitan IgG, IgA e IgM y recuento de linfocitos B, y se deriva a inmunología; el tratamiento es inmunoglobulina de reemplazo.",
    "keyPoints": [
      "Un niño sano de sala cuna presenta 6 a 10 infecciones respiratorias virales al año; si son leves y el crecimiento es normal no se estudia.",
      "Son signos de alarma de inmunodeficiencia: ≥ 2 neumonías o infecciones profundas, antibióticos EV, gérmenes inusuales, falla de medro, candidiasis persistente y antecedente familiar.",
      "Las inmunodeficiencias humorales (Bruton) se manifiestan después de los 6 meses con infecciones sinopulmonares piógenas; el tratamiento es inmunoglobulina de reemplazo.",
      "Las inmunodeficiencias secundarias (VIH, desnutrición, síndrome nefrótico) son más frecuentes que las primarias; el estudio inicial incluye hemograma, inmunoglobulinas y VIH.",
      "La hepatomegalia con hipoglicemia de ayuno corto, acidosis láctica e hipertrigliceridemia sugiere glucogenosis tipo I; hay que distinguirla de la ptosis hepática por hiperinsuflación.",
      "En el hemograma del lactante y preescolar predominan los linfocitos hasta los 4 a 6 años; el límite inferior de hemoglobina entre los 6 meses y los 5 años es 11 g/dL."
    ],
    "questions": [
      {
        "stem": "Niño que después de los 6 meses presenta candidiasis bucal, otitis media recurrente y 2 neumonías hospitalizadas. ¿Cuál es la inmunodeficiencia más probable?",
        "options": [
          {
            "id": "A",
            "text": "Inmunodeficiencia celular (DiGeorge)"
          },
          {
            "id": "B",
            "text": "Déficit de complemento"
          },
          {
            "id": "C",
            "text": "Inmunodeficiencia humoral (agammaglobulinemia)"
          },
          {
            "id": "D",
            "text": "Inmunodeficiencia combinada severa (SCID)"
          },
          {
            "id": "E",
            "text": "Enfermedad granulomatosa crónica"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. DiGeorge se presenta desde el período neonatal con hipocalcemia y cardiopatía.\nB) Incorrecta. El déficit de complemento predispone a infecciones por Neisseria.\nC) Correcta. El inicio después de los 6 meses (cuando cae la IgG materna) con otitis y neumonías piógenas recurrentes es característico de un defecto humoral como la agammaglobulinemia de Bruton.\nD) Incorrecta. El SCID se manifiesta antes de los 6 meses con infecciones oportunistas graves y falla de medro.\nE) Incorrecta. La enfermedad granulomatosa crónica produce abscesos por gérmenes catalasa positivos.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 12"
      },
      {
        "stem": "Un lactante de 15 meses fue sano hasta los 6 meses de edad, pero, después de ello, ha presentado candidiasis oral a repetición, cuatro otitis medias aguda y dos neumonías que han requerido hospitalización. ¿Cuál es la causa más probable de su inmunodepresión?",
        "options": [
          {
            "id": "A",
            "text": "Inmunodeficiencia humoral"
          },
          {
            "id": "B",
            "text": "Inmunodeficiencia combinada severa"
          },
          {
            "id": "C",
            "text": "Alteración de la fagocitosis"
          },
          {
            "id": "D",
            "text": "Déficit de complemento"
          },
          {
            "id": "E",
            "text": "Inmunodeficiencia celular"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Las infecciones bacterianas sinopulmonares y óticas recurrentes que comienzan después de los 6 meses corresponden a un defecto de producción de anticuerpos.\nB) Incorrecta. La inmunodeficiencia combinada grave se presenta antes de los 6 meses y con infecciones oportunistas.\nC) Incorrecta. Los defectos de fagocitos dan abscesos y adenitis, no este patrón.\nD) Incorrecta. El déficit de complemento da infecciones por Neisseria.\nE) Incorrecta. Un defecto celular puro se acompaña de infecciones virales y oportunistas graves, y de falla de medro.",
        "recTag": "EUNACOM Diciembre 2022 · Pregunta 136"
      },
      {
        "stem": "Un niño de 2 años asiste a sala cuna desde los 12 meses. En el último año ha tenido 8 resfríos, 2 otitis medias agudas y 1 episodio de gastroenteritis, todos de evolución favorable y manejo ambulatorio. Su peso y talla progresan en percentil 50 y el examen físico es normal. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Solicitar inmunoglobulinas séricas"
          },
          {
            "id": "B",
            "text": "Solicitar test de VIH y subpoblaciones linfocitarias"
          },
          {
            "id": "C",
            "text": "Tranquilizar a los padres: es un patrón esperable para su edad"
          },
          {
            "id": "D",
            "text": "Indicar profilaxis antibiótica"
          },
          {
            "id": "E",
            "text": "Derivar a inmunología"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. No hay signos de alarma que justifiquen estudiar inmunoglobulinas.\nB) Incorrecta. No hay sospecha de VIH ni de defecto celular.\nC) Correcta. Los niños que asisten a sala cuna pueden tener 6 a 10 infecciones respiratorias virales al año. Infecciones leves, de buena evolución, con crecimiento normal, no sugieren inmunodeficiencia. Las señales de alarma son infecciones graves, por gérmenes oportunistas, 2 o más neumonías al año, antibióticos endovenosos, falla de crecimiento o antecedentes familiares.\nD) Incorrecta. La profilaxis antibiótica no está indicada y favorece la resistencia.\nE) Incorrecta. No cumple criterios de derivación.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.014"
      },
      {
        "stem": "Un lactante de 6 meses es traído por irritabilidad, sudoración y temblor cuando pasa más de 3 a 4 horas sin alimentarse. Al examen tiene facies de muñeca, abdomen prominente y hepatomegalia de 6 cm bajo el reborde costal, sin esplenomegalia. Exámenes en ayuno corto: glicemia 35 mg/dL, lactato elevado, triglicéridos y ácido úrico elevados. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Atresia de vías biliares"
          },
          {
            "id": "B",
            "text": "Enfermedad de Gaucher"
          },
          {
            "id": "C",
            "text": "Hepatitis viral aguda"
          },
          {
            "id": "D",
            "text": "Glucogenosis tipo I"
          },
          {
            "id": "E",
            "text": "Hiperinsulinismo congénito"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. La atresia biliar cursa con ictericia, acolia y coluria.\nB) Incorrecta. Gaucher da esplenomegalia marcada, no hipoglicemia de ayuno corto con acidosis láctica.\nC) Incorrecta. La hepatitis aguda tiene transaminasas muy altas e ictericia.\nD) Correcta. Hepatomegalia aislada sin esplenomegalia, hipoglicemia de ayuno corto, acidosis láctica, hipertrigliceridemia e hiperuricemia es la glucogenosis tipo I (déficit de glucosa-6-fosfatasa): el hígado no puede liberar glucosa.\nE) Incorrecta. El hiperinsulinismo causa hipoglicemia sin hepatomegalia ni acidosis láctica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.044"
      },
      {
        "stem": "Un lactante de 14 meses, sano, tiene un hemograma solicitado en su control: hemoglobina 11,8 g/dL, leucocitos 10.500/mm3 con 30% de neutrófilos y 62% de linfocitos, y plaquetas 320.000/mm3. El frotis no muestra células anormales. ¿Cuál es la interpretación más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Sugiere leucemia linfática; derivar a hematología"
          },
          {
            "id": "B",
            "text": "Hemograma normal para la edad"
          },
          {
            "id": "C",
            "text": "Neutropenia grave que requiere estudio"
          },
          {
            "id": "D",
            "text": "Infección viral que requiere tratamiento"
          },
          {
            "id": "E",
            "text": "Anemia que requiere suplementar hierro"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La linfocitosis relativa es fisiológica a esta edad y no hay blastos.\nB) Correcta. En lactantes y preescolares predominan normalmente los linfocitos en la fórmula leucocitaria; esta inversión fisiológica se mantiene hasta los 4 a 6 años. Con 30% de neutrófilos de 10.500 leucocitos, el recuento absoluto (3.150/mm³) es normal. La hemoglobina (> 11 g/dL) y las plaquetas son normales.\nC) Incorrecta. La neutropenia grave es < 500/mm³; aquí el recuento es normal.\nD) Incorrecta. No hay datos clínicos ni hematológicos de infección.\nE) Incorrecta. Con 11,8 g/dL no hay anemia a esta edad.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.4.015"
      }
    ]
  },
  {
    "id": "ped-27",
    "classId": "ped-27",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones, Exantemas & Digestivo Pediátrico",
    "topicLabel": "18.27",
    "title": "Uroginecología Pediátrica: Fimosis, Sinequias Vulvares y Enuresis",
    "perfilCode": "2.01.1.089, 2.01.1.131, 2.01.1.059",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · La derivación por ITU recurrente o malformaciones sigue el flujo del tema 18.13",
    "reconstrucciones": "EUNACOM Enero 2023 (Q#21) · EUNACOM Julio 2017 (Q#109) · EUNACOM Julio 2024 (Q#179)",
    "frecuencia": "Alta rentabilidad · fimosis fisiológica que se controla, sinequias vulvares que se tratan con lubricación o corticoide tópico y nunca con separación manual, y enuresis primaria monosintomática con medidas conductuales",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de las Sinequias Vulvares y la Fimosis en el Niño",
    "diagramRows": [
      {
        "t": "Niña o niño con alteración de genitales externos en el control de salud",
        "s": "Examen físico de genitales, registro de síntomas urinarios, ITU previas y desarrollo puberal",
        "type": "acc"
      },
      {
        "t": "¿Asintomático y de aspecto benigno?",
        "s": "Fimosis fisiológica del preescolar · sinequia parcial o completa sin repercusión",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Sinequia vulvar",
        "al": "Sinequia asintomática o parcial",
        "ll": "Sin síntomas",
        "left": {
          "t": "Observar y lubricar",
          "s": "Higiene suave y vaselina o emoliente · resuelve espontáneamente con la pubertad · NO separar a la fuerza",
          "type": "acc"
        },
        "rl": "Completa o con síntomas",
        "right": {
          "t": "Corticoide tópico",
          "s": "Betametasona 0,05% 2 veces al día por 2-4 semanas (o estrógenos tópicos) · luego emoliente · ITU recurrente o retención: derivar",
          "type": "warn"
        }
      },
      {
        "t": "Fimosis: criterios para tratar",
        "s": "Fisiológica: control · Sintomática, cicatricial o con balanopostitis/ITU recurrente: corticoide tópico 4-8 semanas · circuncisión si falla o liquen escleroso",
        "type": "acc"
      }
    ],
    "contexto": "Los genitales externos del niño y de la niña son motivo frecuente de consulta y de preocupación parental. La mayoría de las alteraciones del prepucio y de los labios menores son variantes fisiológicas que se resuelven solas y que no deben ser tratadas con maniobras agresivas. La enuresis, por su parte, es un trastorno frecuente y benigno que mejora con un manejo escalonado. Este tema enseña a distinguir lo fisiológico de lo que requiere tratamiento, a elegir el manejo médico adecuado y a derivar cuando corresponde.",
    "contentSections": [
      {
        "subhead": "1. Fimosis en el Niño: Fisiológica vs Patológica",
        "paragraphs": [
          "Al nacer el prepucio no es retráctil por <strong>adherencias balanoprepuciales fisiológicas</strong>. Se vuelve retráctil en la mayoría con el tiempo: aproximadamente 50% al año, <strong>90% a los 3 años</strong> y 99% a los 16-17 años. Mientras el niño esté asintomático, el prepucio estrecho es una <strong>fimosis fisiológica</strong> que no se trata: se enseña un aseo suave con agua, <strong>sin retraer a la fuerza</strong> (produce fisuras y cicatrices que originan una fimosis secundaria). Las «perlas» de esmegma bajo el prepucio son benignas, y el abombamiento del prepucio al orinar es normal en lactantes.",
          "<strong>Fimosis patológica:</strong> prepucio con anillo fibroso blanquecino y cicatricial, de tipo secundario a retracción forzada, balanopostitis recurrente o <strong>balanitis xerótica obliterante (liquen escleroso)</strong>, que se ve sobre todo después de los 5 años. Constituyen indicaciones de tratamiento: fimosis sintomática (dolor, chorro deformado con abombamiento), <strong>balanopostitis o infecciones urinarias recurrentes</strong> y fimosis cicatricial. <em>Tratamiento (Inicial/Derivar):</em> <strong>corticoide tópico</strong> (betametasona 0,05-0,1% dos veces al día por 4 a 8 semanas con retracción suave), con éxito en 70 a 90%; si falla, es cicatricial o hay liquen escleroso, <strong>circuncisión</strong> por urología pediátrica. No se opera si hay hipospadias o megameato (el prepucio puede ser necesario para la reparación).",
          "La <strong>parafimosis</strong> (prepucio retraído atrapado detrás del glande, con edema y dolor) es una urgencia que se reduce manualmente tras analgesia y compresión del glande (ver tema 13.16 de Urología). El niño de 3 años con prepucio estrecho, asintomático y sin infecciones solo requiere educación y control."
        ]
      },
      {
        "subhead": "2. Sinequias Vulvares (Adherencia de los Labios Menores)",
        "paragraphs": [
          "Las <strong>sinequias vulvares</strong> son la fusión parcial o completa de los labios menores en la línea media, que forma una línea translúcida y avascular («rafe»). Afectan a 1 a 2% de las niñas prepuberales, con un pico entre los 3 meses y los 6 años, por el <strong>estado hipoestrogénico</strong> fisiológico y la inflamación local (dermatitis del pañal, irritantes). La mayoría es <strong>asintomática</strong> y es un hallazgo del control de salud; las complicaciones son goteo post-miccional, disuria, vulvovaginitis e <strong>ITU recurrente</strong>, y excepcionalmente retención urinaria.",
          "<strong>Manejo (nivel Completo):</strong> • Sinequia <strong>parcial o asintomática:</strong> tranquilizar, higiene suave, evitar irritantes y <strong>lubricación diaria con vaselina o emoliente</strong>; resuelve espontáneamente, a más tardar con la pubertad por el aumento de estrógenos. • Sinequia <strong>completa que impide ver el meato</strong>, o sintomática: <strong>betametasona 0,05% tópica dos veces al día por 2 a 4 semanas</strong> (alternativa: crema de estrógenos conjugados por 2-6 semanas), luego emoliente para evitar recidivas (10-15%). Efectos adversos del estrógeno: irritación, hiperpigmentación y telarquia.",
          "<strong>Contraindicadas:</strong> la <strong>separación manual forzada</strong> y la cirugía (dolor, trauma, recurrencia y daño psicológico); solo se justifica la separación bajo sedación en la retención urinaria aguda. Diagnósticos diferenciales: himen imperforado, agenesia vaginal y cicatriz por trauma o abuso sexual; una cicatriz con lesiones asociadas obliga a considerar maltrato. Se deriva si hay ITU recurrente, retención urinaria, falla del tratamiento tópico o sospecha de otra malformación."
        ]
      },
      {
        "subhead": "3. Enuresis: Clasificación, Evaluación y Tratamiento Escalonado",
        "paragraphs": [
          "La <strong>enuresis</strong> es la micción involuntaria durante el sueño en un niño de <strong>5 años o más</strong>, con al menos 2 episodios al mes durante 3 meses. Es <strong>primaria</strong> si nunca ha logrado un período continuo de 6 meses seco (80%), y <strong>secundaria</strong> si reaparece tras 6 meses de continencia (buscar ITU, diabetes mellitus, constipación, apnea del sueño, epilepsia o estrés psicosocial, incluido el abuso). Es <strong>monosintomática</strong> si solo hay síntomas nocturnos, y <strong>no monosintomática</strong> si hay urgencia, polaquiuria o incontinencia diurna (disfunción vesical, anomalías anatómicas, vejiga neurogénica). Afecta al 15% de los niños a los 5 años y al 5% a los 10; es más frecuente en varones y con antecedente familiar.",
          "<strong>Fisiopatología:</strong> poliuria nocturna (menor secreción nocturna de vasopresina), vejiga hiperactiva con baja capacidad y sueño muy profundo que no despierta ante la necesidad de orinar. <strong>Evaluación:</strong> historia miccional y de ingesta de líquidos (diario por 1-2 semanas), hábitos intestinales (constipación), ronquidos, examen de genitales, abdomen, columna lumbosacra (fosita o mechón de pelos) y examen neurológico de extremidades inferiores. <strong>Orina completa</strong> y glicemia si hay poliuria; la ecografía renal y vesical se reserva para la forma no monosintomática, ITU o hallazgos anormales. En la enuresis monosintomática con examen y orina normales no se piden imágenes.",
          "<strong>Tratamiento (nivel Completo):</strong> (1) <strong>Desculpabilizar</strong> al niño y a los padres, sin castigos; explicar que es frecuente y benigna. (2) <strong>Medidas conductuales:</strong> micción antes de dormir, restringir líquidos 1-2 horas antes de acostarse, tratar la constipación y reforzar positivamente los días secos con un calendario. (3) <strong>Alarma de enuresis</strong> en niños motivados de 7 años o más: es el tratamiento de mayor eficacia a largo plazo (~70%). (4) <strong>Desmopresina</strong> (0,2-0,4 mg VO en la noche o liofilizado oral) para situaciones puntuales o si falla la alarma; se limita la ingesta de agua para evitar hiponatremia. (5) Anticolinérgicos (oxibutinina) si hay vejiga hiperactiva. La imipramina está en desuso por su toxicidad. Se <strong>deriva</strong> a nefrología o urología la enuresis no monosintomática refractaria, la secundaria con causa orgánica o la que no responde a dos tratamientos."
        ]
      }
    ],
    "table": {
      "title": "Alteraciones Genitales Pediátricas Frecuentes: Conducta del Médico General",
      "headers": [
        "Entidad",
        "Dato Clave",
        "Manejo",
        "Cuándo Derivar"
      ],
      "rows": [
        [
          "Fimosis fisiológica",
          "Preescolar asintomático, prepucio sano y flexible",
          "Aseo suave · NO retraer a la fuerza · control",
          "Si persiste con síntomas o cicatriz"
        ],
        [
          "Fimosis sintomática o cicatricial",
          "Anillo fibroso, balanopostitis o ITU recurrente",
          "Betametasona tópica 4-8 semanas",
          "Falla del corticoide o liquen escleroso: circuncisión"
        ],
        [
          "Sinequia vulvar parcial",
          "Línea translúcida avascular, asintomática",
          "Higiene + vaselina · observar",
          "ITU recurrente o retención urinaria"
        ],
        [
          "Sinequia completa o sintomática",
          "Impide ver el meato o hay goteo / ITU",
          "Betametasona 0,05% 2-4 semanas · luego emoliente",
          "Falla del tratamiento tópico"
        ],
        [
          "Enuresis primaria monosintomática",
          "≥ 5 años, solo nocturna, examen y orina normales",
          "Educación, medidas conductuales, alarma o desmopresina",
          "No monosintomática refractaria o secundaria orgánica"
        ]
      ]
    },
    "vignette": "Niña de 3 años, traída a control de salud. La madre nota que «no se le ve la vagina». No refiere disuria, goteo post-miccional ni infecciones urinarias previas. Al examen, desarrollo puberal Tanner 1, labios menores fusionados en la línea media por una membrana delgada y translúcida que cubre parcialmente el introito; el meato urinario es visible y el flujo miccional es normal.",
    "explicacion": "Es una sinequia vulvar parcial asintomática, hallazgo benigno por el estado hipoestrogénico de la edad. Se tranquiliza a la madre, se indica higiene suave y lubricación con vaselina, y se controla; se resuelve espontáneamente con la pubertad. No se debe separar manualmente ni operar. Si la sinequia fuera completa o sintomática, se usaría betametasona tópica 0,05% por 2 a 4 semanas.",
    "keyPoints": [
      "La fimosis fisiológica del preescolar asintomático no se trata: aseo suave, sin retracción forzada, y control (el 90% de los prepucios es retráctil a los 3 años).",
      "Constituyen indicación de tratamiento la fimosis sintomática, cicatricial o asociada a balanopostitis o ITU recurrentes: corticoide tópico 4-8 semanas y circuncisión si falla.",
      "Las sinequias vulvares asintomáticas o parciales se observan con higiene y lubricación; las completas o sintomáticas usan betametasona tópica 0,05% por 2-4 semanas.",
      "Nunca se separan manualmente ni se operan las sinequias vulvares de rutina.",
      "La enuresis primaria monosintomática (≥ 5 años) se maneja con educación, medidas conductuales, alarma de enuresis o desmopresina; no requiere imágenes si el examen y la orina son normales.",
      "Se deriva la enuresis no monosintomática refractaria, la secundaria con causa orgánica o la que no responde a dos tratamientos."
    ],
    "questions": [
      {
        "stem": "Niño de 3 años con prepucio estrecho, con control de esfínteres hace 6 meses. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Circuncisión inmediata"
          },
          {
            "id": "B",
            "text": "Aplicar corticoide tópico"
          },
          {
            "id": "C",
            "text": "Control en un año"
          },
          {
            "id": "D",
            "text": "Dilatación manual bajo anestesia"
          },
          {
            "id": "E",
            "text": "Derivar a urología pediátrica urgente"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La circuncisión no está indicada en una fimosis fisiológica asintomática.\nB) Incorrecta. El corticoide tópico se reserva para la fimosis sintomática o persistente.\nC) Correcta. A los 3 años la mayoría de los prepucios aún no es completamente retráctil por adherencias balanoprepuciales fisiológicas; sin síntomas ni infecciones, se educa en el aseo suave y se controla.\nD) Incorrecta. La dilatación forzada produce fisuras y cicatrices que originan una fimosis patológica.\nE) Incorrecta. No es una urgencia ni requiere derivación inmediata.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 21"
      },
      {
        "stem": "Una niña de 4 años presenta sinequia vulvar parcial, de los labios menores. No tiene desarrollo puberal, ni antecedentes de infecciones urinarias, ni genitales. El resto de su examen físico es normal. La conducta más adecuada es:",
        "options": [
          {
            "id": "A",
            "text": "Realizar lavados con ácido acéticos"
          },
          {
            "id": "B",
            "text": "Aplicar corticoides tópicos"
          },
          {
            "id": "C",
            "text": "Remover las sinequias de manera quirúrgica"
          },
          {
            "id": "D",
            "text": "Indicar antibióticos"
          },
          {
            "id": "E",
            "text": "Realizar aseo y masajes en la zona"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. Los lavados con ácido acético no tienen utilidad.\nB) Incorrecta. En la sinequia parcial asintomática basta la observación; el corticoide se reserva para la completa o sintomática.\nC) Incorrecta. La cirugía no está indicada.\nD) Incorrecta. No hay infección que tratar.\nE) Correcta. La sinequia parcial asintomática se maneja con higiene suave y lubricación (aseo y masajes) y se resuelve espontáneamente, a más tardar con la pubertad.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 109"
      },
      {
        "stem": "Una niña de 2 años de edad es traída por su madre a control de niño sano. Al examen físico se objetivan genitales con labios menores completamente adheridos entre sí en la línea media, lo que impide la visualización de la vagina y el meato urinario. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Resección quirúrgica de las adherencias"
          },
          {
            "id": "B",
            "text": "Realizar avulsión digital, bajo anestesia local con lidocaína"
          },
          {
            "id": "C",
            "text": "Indicar aseo genital diario con vaselina líquida"
          },
          {
            "id": "D",
            "text": "Aplicar pantenol tópico en la zona perineal por 15 días"
          },
          {
            "id": "E",
            "text": "Aplicar betametasona tópica en la zona afectada por 10 días"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. No se opera una sinequia vulvar.\nB) Incorrecta. La separación manual (avulsión digital) es dolorosa, traumática y recurre.\nC) Incorrecta. Con adherencia completa que impide ver el meato, la lubricación sola es insuficiente.\nD) Incorrecta. El pantenol no actúa sobre las adherencias.\nE) Correcta. En la sinequia completa que impide visualizar el meato se indica corticoide tópico (betametasona 0,05%) por 2 a 4 semanas, seguido de un emoliente de mantención.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 179"
      },
      {
        "stem": "Un niño de 7 años moja la cama casi todas las noches desde siempre. Durante el día controla la micción sin urgencia ni incontinencia, no tiene constipación y el examen físico, incluido el examen de orina, es normal. Nunca ha recibido tratamiento. ¿Cuál es la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Ecografía renal y vesical y uretrocistografía"
          },
          {
            "id": "B",
            "text": "Educación y medidas conductuales (micción antes de dormir, reducir líquidos nocturnos, calendario)"
          },
          {
            "id": "C",
            "text": "Imipramina oral"
          },
          {
            "id": "D",
            "text": "Derivar a urología pediátrica"
          },
          {
            "id": "E",
            "text": "Indicar pañales hasta la adolescencia"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Con examen y orina normales no se requieren imágenes.\nB) Correcta. Es una enuresis primaria monosintomática: incontinencia nocturna en mayores de 5 años que nunca han logrado control, sin síntomas diurnos. Es frecuente y benigna; el manejo inicial es desculpabilizar, educar y aplicar medidas conductuales. Si fracasan, alarma de enuresis o desmopresina.\nC) Incorrecta. La imipramina está en desuso por su toxicidad.\nD) Incorrecta. No cumple criterios de derivación inicial.\nE) Incorrecta. Los pañales no tratan y perpetúan el problema.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.059"
      }
    ]
  }
];

const bloque3Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque3Classes };
