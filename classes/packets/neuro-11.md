# CLASE neuro-11 · Neurologia 10.11: Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras

Escribe `classes/lessons/neuro-11.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-11" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-08: Neurologia 10.8: Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES
- neuro-09: Neurologia 10.9: Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo
- neuro-10: Neurologia 10.10: Primera Crisis Convulsiva del Adulto y Diagnóstico Diferencial con Síncope: Enfrentamiento, Criterios de Inicio de FAE y Banderas Rojas
- neuro-12: Neurologia 10.12: Parkinsonismos Secundarios, Farmacológicos y Síndromes Parkinson-Plus
- neuro-13: Neurologia 10.13: Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos
- neuro-14: Neurologia 10.14: Enfermedad de Alzheimer y Deterioro Cognitivo Leve

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-11",
  "classId": "neuro-11",
  "tier": 3,
  "blockNum": 3,
  "blockName": "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
  "topicLabel": "10.11",
  "title": "Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras",
  "perfilCode": "1.10.1.006",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES N° 67): Enfermedad de Parkinson en personas de todas las edades · Diagnóstico integral por especialista (neurólogo) dentro de 60 días desde la sospecha clínica, confirmación diagnóstica, acceso garantizado a tratamiento farmacológico (Levodopa/Carbidopa, agonistas dopaminérgicos, inhibidores COMT y MAO-B) dentro de 20 días desde confirmación, rehabilitación motora multidisciplinaria y acceso a Cirugía de Estimulación Cerebral Profunda (DBS) en centros terciarios de referencia.",
  "reconstrucciones": "EUNACOM Julio 2024 (Q#82) · EUNACOM Diciembre 2023 (Q#45) · EUNACOM Enero 2021 (Q#109)",
  "frecuencia": "Máxima rentabilidad · Pregunta angular de trastornos del movimiento y neurología ambulatoria",
  "algoTitle": "Algoritmo Diagnóstico MDS y Escalonamiento Terapéutico en Enfermedad de Parkinson",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Manejo Escalonado en Enfermedad de Parkinson",
    "svg": "<svg viewBox=\"0 0 620 411\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha Clínica de Síndrome Parkinsoniano</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Bradicinesia obligatoria + Temblor de reposo (4-6 Hz) y/o Rigidez en rueda dentada</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Descarte Activo de Banderas Rojas (Red Flags MDS)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Caídas en primer año · Parálisis de la mirada vertical</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Disautonomía grave precoz · Fármacos bloqueadores D2</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">¿Diagnóstico Clínico Establecido de Enfermedad de Parkinson?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Estratificación etaria, comorbilidades y nivel de demanda funcional del paciente</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Adulto Mayor (≥ 65-70 años) o Fragilidad</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Paciente Joven (&lt; 65 años) Activo</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Inicio con Levodopa / Carbidopa</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Mayor eficacia motora sintomática</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Menor riesgo de psicosis y trastornos de control de impulsos</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Agonistas Dopaminérgicos o IMAO-B</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Pramipexol / Rasagilina</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Busca retrasar aparición de fluctuaciones y disquinesias</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"warn\" x=\"100\" y=\"292\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Aparición de Complicaciones Motoras Tardías (3-5 años)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Wearing-off (acortamiento de dosis) · Disquinesias pico de dosis · Fenómeno On-Off</text>\n  <path class=\"ln\" d=\"M310,331 V353\"/>\n  <rect class=\"acc\" x=\"100\" y=\"353\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"368\" text-anchor=\"middle\" font-weight=\"700\">Optimización y Terapias Avanzadas GES</text>\n  <text class=\"accS\" x=\"310\" y=\"380\" text-anchor=\"middle\">Fraccionar L-Dopa + Asociar Entacapona (ICOMT) o Rasagilina</text>\n  <text class=\"accS\" x=\"310\" y=\"391\" text-anchor=\"middle\">Amantadina para disquinesias · Considerar DBS</text>\n</svg>"
  },
  "contexto": "La Enfermedad de Parkinson (EP) es la segunda patología neurodegenerativa más frecuente en el adulto mayor tras el Alzheimer y una patología priorizada en Chile mediante la Garantía GES N° 67. El diagnóstico es estrictamente clínico y exige la presencia obligatoria de bradicinesia acompañada de temblor de reposo o rigidez en rueda dentada con asimetría al debut. Reconocer precozmente los síntomas no motores prodrómicos (hiposmia, trastorno conductual del sueño REM y constipación pertinaz), diferenciarla de los parkinsonismos atípicos y dominar el ajuste escalonado de Levodopa frente al desarrollo de fluctuaciones motoras (wearing-off y disquinesias) constituyen competencias médicas esenciales evaluadas de manera constante en el EUNACOM.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Vías de Ganglios Basales y Fases de Progresión de Braak",
      "paragraphs": [
        "La Enfermedad de Parkinson se caracteriza por la pérdida neuronal progresiva y selectiva en la <strong>pars compacta de la sustancia negra mesencefálica</strong> (proyecciones dopaminérgicas nigroestriatales hacia el putamen y núcleo caudado). La manifestación de los síntomas motores clásicos requiere la pérdida de al menos el <strong>50% al 70% de las neuronas dopaminérgicas</strong> y una reducción superior al 80% del contenido de dopamina estriatal.",
        "A nivel histopatológico, el sello distintivo es el acúmulo intracitoplasmático de inclusiones proteicas eosinofílicas denominadas <strong>Cuerpos de Lewy</strong>, cuyo componente estructural primario es la proteína <strong>alfa-sinucleína mal plegada y fosforilada</strong>. En el modelo fisiopatológico de los ganglios basales, la depleción de dopamina rompe el equilibrio entre las dos vías estriatales: disminuye la activación de la <strong>vía directa</strong> (receptores D1, promotora del movimiento) e hiperactiva la <strong>vía indirecta</strong> (receptores D2, mediada por el núcleo subtalámico de Luys), traduciéndose en una inhibición excesiva del tálamo motor y la corteza cerebral, lo que genera bradicinesia y rigidez (véase Figura 10.11: Algoritmo Diagnóstico y Manejo Escalonado en Enfermedad de Parkinson).",
        "La hipótesis de <strong>estadificación de Heiko Braak</strong> postula que el proceso neurodegenerativo comienza años o décadas antes de las manifestaciones motoras, iniciándose en el <strong>plexo entérico y el núcleo motor dorsal del vago (estadios 1-2)</strong>, así como en el <strong>bulbo olfatorio</strong>, ascendiendo por el tronco encefálico hacia el mesencéfalo (estadios 3-4, donde debutan los síntomas motores) y finalmente extendiéndose a áreas límbicas y neocorticales (estadios 5-6, donde sobreviene el deterioro cognitivo y las alucinaciones)."
      ]
    },
    {
      "subhead": "2. Criterios Diagnósticos Clínicos de la Movement Disorder Society (MDS 2026)",
      "paragraphs": [
        "El diagnóstico de la Enfermedad de Parkinson es <strong>fundamentalmente clínico</strong>; ningún examen de laboratorio o neuroimagen convencional (TAC o RM) confirma la enfermedad por sí solo (si bien la RM cerebral es obligatoria para descartar parkinsonismo vascular, hidrocefalia o lesiones estructurales).",
        "Según los criterios oficiales de la <strong>Movement Disorder Society (MDS)</strong>, el diagnóstico requiere tres pasos consecutivos:",
        "• <strong>Paso 1: Diagnóstico de Síndrome Parkinsoniano (Parkinsonismo):</strong> Presencia obligatoria de <strong>BRADICINESIA</strong> (lentitud de movimiento y decremento progresivo en velocidad o amplitud durante movimientos repetitivos alternantes: finger tapping, pronosupinación o apertura-cierre de manos), asociada a AL MENOS UNO de los siguientes: <strong>Rigidez muscular</strong> (resistencia plástica al movimiento pasivo, signo de la \"rueda dentada\" al combinarse con temblor) O <strong>Temblor de reposo</strong> (4 a 6 Hz, característicamente asimétrico, que cede con el movimiento voluntario) (véase Tabla 10.11A: Criterios Diagnósticos Cardinales y Banderas Rojas MDS).",
        "• <strong>Paso 2: Criterios de Exclusión Absoluta:</strong> Ausencia de signos cerebelosos manifiestos, parálisis de la mirada vertical supranuclear hacia abajo, diagnóstico de demencia frontotemporal en los primeros 5 años, uso reciente de fármacos antagonistas dopaminérgicos (metoclopramida, neurolépticos) y ausencia total de respuesta a dosis altas de Levodopa (> 600-1000 mg/día).",
        "• <strong>Paso 3: Banderas Rojas (Red Flags):</strong> Caídas recurrentes tempranas (< 3 años), progresión acelerada de la marcha que obliga al uso de silla de ruedas en los primeros 5 años, disautonomía severa precoz (hipotensión ortostática sintomática grave o incontinencia urinaria en el primer año) o ausencia de progresión motora durante más de 5 años salvo por tratamiento."
      ]
    },
    {
      "subhead": "3. Sintomatología No Motora: El Iceberg de la Enfermedad de Parkinson",
      "paragraphs": [
        "Los síntomas motores representan únicamente la porción visible de la enfermedad. La patología no motora impone una gran merma en la calidad de vida y comprende:",
        "• <strong>Síntomas Prodrómicos Premotores:</strong> 1) <em>Hiposmia o anosmia neurosensorial</em> (presente en más del 80-90% de los pacientes, años antes del temblor); 2) <em>Trastorno conductual del sueño REM (RBD)</em>: pérdida de la atonía muscular fisiológica durante la fase REM del sueño, provocando que los pacientes \"actúen violentamente sus sueños\" con gritos, puñetazos y patadas (altísimo valor predictivo positivo para sinucleinopatías); 3) <em>Constipación pertinaz</em> por disfunción mioentérica colónica.",
        "• <strong>Disfunción Autonómica (Disautonomía):</strong> Hipotensión ortostática sintomática (caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg al ponerse de pie), sialorrea (por enlentecimiento de la deglución automática), urgencia o incontinencia urinaria, disfunción eréctil y sudoración paroxística.",
        "• <strong>Manifestaciones Neuropsiquiátricas y Cognitivas:</strong> Depresión mayor reactiva o endógena (hasta en el 40-50%), ansiedad, apatía profunda, trastornos del control de impulsos (hipersexualidad, ludopatía, compras compulsivas ligadas al uso de agonistas dopaminérgicos) y <em>Deterioro Cognitivo / Demencia en la EP</em> de perfil fronto-subcortical (disfunción ejecutiva, bradipsiquia, alteraciones visuoespaciales) de aparición típicamente tardía (véase Tabla 10.11B: Fluctuaciones Motoras y Síntomas No Motores)."
      ]
    },
    {
      "subhead": "4. Abordaje Terapéutico Inicial: Levodopa vs Agonistas Dopaminérgicos e Inhibidores Enzimáticos",
      "paragraphs": [
        "El tratamiento de la EP es <strong>estrictamente sintomático</strong>; ningún fármaco ha demostrado efecto neuroprotector o modificador definitivo de la enfermedad en ensayos clínicos fase III.",
        "• <strong>Levodopa (asociada a Carbidopa o Benserazida):</strong> Es el <strong>estándar de oro</strong> de máxima eficacia motora. La L-Dopa atraviesa la barrera hematoencefálica mediante el transportador de aminoácidos neutros grandes (LAT1) y se descarboxila a dopamina en el estriado. La coadministración obligatoria de un inhibidor periférico de la dopa-descarboxilasa (Carbidopa 25 mg o Benserazida 50 mg por cada 100-200 mg de L-Dopa) previene la conversión periférica, minimizando náuseas, vómitos e hipotensión arterial. <em>Regla de administración:</em> Tomar alejada de las comidas ricas en proteínas (al menos 30-60 min antes o 2 h después) porque los aminoácidos dietéticos compiten por el transportador duodenal e intracerebral.",
        "• <strong>Estrategia de inicio según edad y comorbilidad:</strong>",
        "- <em>Adultos mayores (≥ 65-70 años) o con comorbilidades/deterioro cognitivo:</em> Iniciar directamente con <strong>Levodopa/Carbidopa</strong> (dosis inicial baja: 50/12.5 mg a 100/25 mg dos a tres veces al día, titulando semanalmente). Presenta el perfil de tolerancia neuropsiquiátrica más seguro (menor riesgo de alucinaciones, somnolencia diurna y psicosis que los agonistas).",
        "- <em>Pacientes jóvenes (< 65 años) con alta demanda laboral y bajo riesgo neuropsiquiátrico:</em> Se puede iniciar con <strong>Agonistas Dopaminérgicos no ergolínicos</strong> (Pramipexol, Ropinirol) o <strong>Inhibidores de la MAO-B</strong> (Rasagilina, Selegilina) para postergar el uso de Levodopa y retrasar la génesis de fluctuaciones motoras y disquinesias.",
        "• <strong>Inhibidores de la MAO-B:</strong> <em>Rasagilina</em> (0.5 a 1 mg/día) o <em>Selegilina</em> (5 mg c/12h). Bloquean la degradación de dopamina sináptica; útiles como monoterapia en fases muy tempranas o coadyuvantes para atenuar fluctuaciones (véase Tabla 10.11C: Protocolo Farmacológico Escalonado en Enfermedad de Parkinson)."
      ]
    },
    {
      "subhead": "5. Complicaciones Motoras Crónicas (Fluctuaciones y Disquinesias) y Terapias Avanzadas GES",
      "paragraphs": [
        "Tras un período inicial de excelente respuesta clínica sin altibajos (\"luna de miel\", que dura 3 a 5 años), la progresiva pérdida de terminales dopaminérgicas estriatales y la vida media corta de la L-Dopa plasmática (90 minutos) conducen al desarrollo de <strong>complicaciones motoras crónicas</strong> en más del 50-70% de los pacientes a los 5 años:",
        "• <strong>Fluctuación de final de dosis (\"Wearing-Off\"):</strong> El efecto de cada dosis se acorta progresivamente (dura 2-3 horas en lugar de 4-5 horas), reapareciendo la rigidez y el temblor antes de la siguiente toma. <em>Manejo:</em> 1) Fraccionar las tomas de Levodopa (administrar con mayor frecuencia e intervalos menores); 2) Asociar un <strong>Inhibidor de la COMT (Entacapona 200 mg</strong> con cada toma de L-Dopa), que bloquea la degradación periférica de L-Dopa y prolonga su biodisponibilidad cerebral; 3) Asociar Rasagilina o agonistas dopaminérgicos.",
        "• <strong>Disquinesias de Pico de Dosis:</strong> Movimientos involuntarios coreiformes o distónicos que aparecen cuando la concentración plasmática y cerebral de Levodopa alcanza su cénit. <em>Manejo:</em> Reducir ligeramente la dosis unitaria de L-Dopa y aumentar la frecuencia de tomas; asociar <strong>Amantadina</strong> (antagonista NMDA antiglutamatérgico que reduce directamente las disquinesias coreicas).",
        "• <strong>Fenómeno On-Off Impredecible y Congelamiento de la Marcha (Freezing):</strong> Transiciones bruscas e impredecibles entre períodos de buena movilidad (\"On\") e inmovilidad severa (\"Off\").",
        "• <strong>Terapias Avanzadas GES:</strong> En pacientes con fluctuaciones motoras severas y disquinesias refractarias que conservan indemnidad cognitiva y psiquiátrica, está garantizada la evaluación de <strong>Estimulación Cerebral Profunda (DBS: Deep Brain Stimulation)</strong> bilateral del <em>núcleo subtalámico (STN)</em> o del <em>globo pálido interno (GPi)</em>, o la infusión enteral continua de gel de Levodopa/Carbidopa (Duodopa) mediante gastrostomía percutánea."
      ]
    }
  ],
  "table": {
    "title": "Tabla 10.11A: Criterios Diagnósticos Cardinales y Banderas Rojas MDS",
    "headers": [
      "Categoría Diagnóstica MDS",
      "Manifestaciones Clínicas Específicas",
      "Hallazgo Semiológico Clave",
      "Interpretación y Conducta"
    ],
    "rows": [
      [
        "Bradicinesia (Signo Obligatorio)",
        "Lentitud motora para iniciar y ejecutar movimientos + decremento progresivo",
        "Fatiga y disminución de amplitud en golpeteo de dedos (finger tapping) y pronosupinación",
        "Condición sine qua non para definir síndrome parkinsoniano; si falta, no es Parkinson"
      ],
      [
        "Temblor de Reposo Cardinal",
        "Frecuencia de 4 a 6 Hz, característicamente asimétrico al debut",
        "Movimiento en \"cuenta monedas\" (pill-rolling) en manos; disminuye con la acción voluntaria",
        "Presente en 70-80% de los pacientes; respeta típicamente la cabeza (a diferencia del esencial)"
      ],
      [
        "Rigidez en Rueda Dentada",
        "Resistencia plástica involuntaria constante en todo el rango pasivo",
        "Fenómeno de Negro (resaltes sucesivos al combinar rigidez con temblor subclínico)",
        "Afecta flexores y extensores; se incrementa al mover la extremidad contralateral (Froment)"
      ],
      [
        "Inestabilidad Postural Tardía",
        "Falla de reflejos posturales con tendencia a la retropulsión / propulsión",
        "Prueba del tirón (pull test) anormal con retropulsión > 2 pasos o caída al suelo",
        "Signo de etapa avanzada en EP; si ocurre en el primer año de evolución, es bandera roja"
      ],
      [
        "Criterios de Apoyo (MDS)",
        "Respuesta dramática y sostenida a Levodopa, disquinesias inducidas por L-Dopa",
        "Pérdida asimétrica de braceo, hiposmia objetivada por test olfatorio, trastorno REM (RBD)",
        "Confirman el diagnóstico de Enfermedad de Parkinson Clínicamente Establecida"
      ],
      [
        "Banderas Rojas y Exclusión",
        "Caídas tempranas (< 3 años), parálisis de mirada vertical, disautonomía severa precoz",
        "Marcha en silla de ruedas en < 5 años, nula respuesta motora a dosis altas de L-Dopa",
        "Obligan a descartar síndromes Parkinson-Plus (PSP, AMS) o causas secundarias"
      ]
    ]
  },
  "severityTable": {
    "title": "Tabla 10.11B: Fluctuaciones Motoras y Síntomas No Motores",
    "headers": [
      "Fenómeno Clínico",
      "Mecanismo Fisiopatológico",
      "Presentación Clínica Típica",
      "Estrategia Terapéutica Recomendada"
    ],
    "rows": [
      [
        "Deterioro de Fin de Dosis (\"Wearing-off\")",
        "Pérdida de terminales dopaminérgicas estriatales; acortamiento de vida media cerebral",
        "Reaparición de rigidez, temblor y acinesia 2-3 h post-dosis antes de la siguiente toma",
        "Fraccionar tomas de L-Dopa (acortar intervalo) · Asociar Entacapona 200 mg o Rasagilina"
      ],
      [
        "Disquinesias de Pico de Dosis",
        "Hipersensibilidad de receptores estriatales por estimulación dopaminérgica pulsátil",
        "Movimientos coreicos o balísticos involuntarios en cabeza, tronco y extremidades en cénit",
        "Reducir dosis individual de L-Dopa manteniendo frecuencia · Indicar Amantadina 100 mg c/12h"
      ],
      [
        "Fenómeno On-Off Impredecible",
        "Falla de amortiguación central y fluctuaciones impredecibles de niveles plasmáticos",
        "Cambios bruscos en minutos entre movilidad normal y acinesia severa sin relación a toma",
        "Optimizar intervalos · Apomorfina subcutánea de rescate · Considerar bomba de infusión o DBS"
      ],
      [
        "Trastorno del Sueño REM (RBD)",
        "Degeneración de núcleos pontinos subcoerúleos que median la atonía fisiológica REM",
        "Pesadillas vívidas, gritos, puñetazos y patadas durmiendo; autolesiones o al cónyuge",
        "Clonazepam 0.5-1 mg/noche o Melatonina 3-10 mg/noche · Medidas de protección en cama"
      ],
      [
        "Disfunción Autonómica",
        "Depósito de alfa-sinucleína en plexo entérico, ganglios simpáticos y vago",
        "Hipotensión ortostática sintomática, constipación pertinaz, vejiga hiperactiva, disfunción eréctil",
        "Fludrocortisona / Midodrina para ortostatismo · Polietilenglicol para constipación · Evitar anticolinérgicos"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Tabla 10.11C: Protocolo Farmacológico Escalonado en Enfermedad de Parkinson",
    "headers": [
      "Fármaco / Intervención",
      "Mecanismo de Acción",
      "Dosis Estándar y Vía",
      "Consideraciones Clínicas y Advertencias EUNACOM"
    ],
    "rows": [
      [
        "Levodopa / Carbidopa",
        "Precursor directo de dopamina + inhibidor dopa-descarboxilasa periférica",
        "Inicio: 100/25 mg c/8h vía oral; titular gradualmente hasta 200/50 mg c/6-8h",
        "Gold standard sintomático. Tomar alejado de comidas proteicas. Fármaco de elección en > 65 años"
      ],
      [
        "Pramipexol",
        "Agonista dopaminérgico no ergolínico selective D2/D3",
        "Inicio: 0.125 mg c/8h; titular semanal hasta 0.5-1.5 mg c/8h (o formulación LP 1 vez/día)",
        "De elección en < 65 años. Alerta: Trastornos de control de impulsos (ludopatía, compras) y somnolencia"
      ],
      [
        "Rasagilina",
        "Inhibidor irreversible selectivo de Monoaminooxidasa B (MAO-B)",
        "0.5 a 1 mg una vez al día por la mañana",
        "Monoterapia en etapas iniciales o coadyuvante en wearing-off. No requiere dieta sin tiramina estricta"
      ],
      [
        "Entacapona",
        "Inhibidor periférico reversible de Catecol-O-Metiltransferasa (COMT)",
        "200 mg por vía oral administrados conjuntamente con CADA dosis de Levodopa (máx 1600-2000 mg/día)",
        "Prolonga vida media plasmática de L-Dopa. Trata el wearing-off. Advierte tinción naranja de orina"
      ],
      [
        "Amantadina",
        "Antagonista no competitivo NMDA / estimula liberación dopamina",
        "100 mg c/12-8h vía oral",
        "Fármaco específico de elección para reducir disquinesias inducidas por Levodopa. Causa livedo reticularis"
      ],
      [
        "Estimulación Cerebral Profunda (DBS)",
        "Neuroestimulación eléctrica continua de alta frecuencia en STN o GPi",
        "Implante quirúrgico estereotáxico bilateral de electrodos profundos + generador subclavio",
        "Garantía GES N° 67 en pacientes con fluctuaciones motoras refractarias, sin demencia ni depresión severa"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 68 años, jubilado, sin antecedentes mórbidos relevantes, consulta por un cuadro de 14 meses de evolución caracterizado por temblor involuntario en su extremidad superior derecha que aparece principalmente cuando tiene el brazo apoyado en reposo mirando televisión, cediendo cuando toma una taza o escribe. Su esposa refiere que camina más lento, arrastra levemente el pie derecho y ha perdido la expresividad de su rostro. Al examen físico: alerta, orientado, facies inexpresiva (hipomimia facial), habla con volumen bajo (hipofonía). En la marcha se evidencia postura ligeramente encorvada, reducción marcada del braceo derecho y pasos cortos. Al examen segmentario presenta rigidez plástica en rueda dentada en muñeca y codo derechos, acompañada de temblor rítmico de reposo a 5 Hz (\"cuenta monedas\") en mano derecha. El golpeteo repetitivo de dedos (finger tapping) muestra clara lentitud con disminución progresiva de la amplitud en mano derecha. No presenta caídas, parálisis oculomotora ni disautonomía.",
    "conducta": "El cuadro clínico corresponde al clásico debut asimétrico de una Enfermedad de Parkinson idiopática, cumpliendo plenamente los criterios diagnósticos de la Movement Disorder Society (MDS): Bradicinesia obligatoria (demostrada por decremento progresivo en velocidad y amplitud del finger tapping) + Temblor de reposo típico (4-5 Hz, que cede con el movimiento voluntario) + Rigidez en rueda dentada, con notable asimetría al debut (compromiso predominante del hemicuerpo derecho). La ausencia de banderas rojas (caídas tempranas, parálisis de mirada vertical, disautonomía severa o síntomas piramidales/cerebelosos) y la edad del paciente (68 años) orientan al diagnóstico de certeza. En un paciente mayor de 65 años, la conducta farmacológica de elección es iniciar Levodopa/Carbidopa (100/25 mg tres veces al día alejado de comidas ricas en proteínas), titulando la dosis según respuesta clínica, garantizado por el programa GES N° 67. Diferir el tratamiento o iniciar antipsicóticos está formalmente proscrito."
  },
  "explicacion": "El cuadro clínico corresponde al clásico debut asimétrico de una Enfermedad de Parkinson idiopática, cumpliendo plenamente los criterios diagnósticos de la Movement Disorder Society (MDS): Bradicinesia obligatoria (demostrada por decremento progresivo en velocidad y amplitud del finger tapping) + Temblor de reposo típico (4-5 Hz, que cede con el movimiento voluntario) + Rigidez en rueda dentada, con notable asimetría al debut (compromiso predominante del hemicuerpo derecho). La ausencia de banderas rojas (caídas tempranas, parálisis de mirada vertical, disautonomía severa o síntomas piramidales/cerebelosos) y la edad del paciente (68 años) orientan al diagnóstico de certeza. En un paciente mayor de 65 años, la conducta farmacológica de elección es iniciar Levodopa/Carbidopa (100/25 mg tres veces al día alejado de comidas ricas en proteínas), titulando la dosis según respuesta clínica, garantizado por el programa GES N° 67. Diferir el tratamiento o iniciar antipsicóticos está formalmente proscrito.",
  "keyPoints": [
    "El diagnóstico de la Enfermedad de Parkinson es estrictamente clínico: requiere la presencia obligatoria de Bradicinesia sumada a Temblor de Reposo (4-6 Hz) y/o Rigidez en rueda dentada.",
    "El temblor parkinsoniano característico es de reposo, asimétrico al inicio (\"cuenta monedas\") y disminuye o desaparece transitoriamente con el movimiento voluntario.",
    "Los síntomas no motores premotores (hiposmia, trastorno conductual del sueño REM y constipación severa) preceden por años o décadas al inicio de las manifestaciones motoras.",
    "La presencia de caídas tempranas (< 3 años), parálisis de la mirada vertical hacia abajo o disautonomía severa precoz son banderas rojas que obligan a sospechar síndromes Parkinson-Plus.",
    "En pacientes mayores de 65-70 años, el tratamiento de inicio de elección es Levodopa/Carbidopa; en menores de 65 años se pueden considerar agonistas dopaminérgicos para retrasar fluctuaciones motoras.",
    "El fenómeno de fin de dosis (\"wearing-off\") se maneja fraccionando las tomas de Levodopa o asociando un inhibidor de la COMT como Entacapona (200 mg con cada toma)."
  ],
  "questions": [
    {
      "stem": "El temblor de la enfermedad de Parkinson se caracteriza por:",
      "options": [
        {
          "id": "A",
          "text": "Ser postural"
        },
        {
          "id": "B",
          "text": "Asociarse a aumento del pestañeo"
        },
        {
          "id": "C",
          "text": "Ser de intención"
        },
        {
          "id": "D",
          "text": "Presentarse en reposo y ceder con realizar movimientos"
        },
        {
          "id": "E",
          "text": "Asociarse a una marcha con aumento de la base de sustentación y pasos largos"
        }
      ],
      "correcta": "D",
      "explicacion": "La respuesta correcta, D) \"Presentarse en reposo y ceder con realizar movimientos\", describe de manera precisa el temblor característico de la enfermedad de Parkinson. Este es el síntoma motor cardinal más distintivo y a menudo el primero en manifestarse. Se conoce como temblor de reposo porque aparece cuando la extremidad (brazo, pierna o mano) está completamente relajada y apoyada, es decir, sin ninguna actividad muscular voluntaria ni sosteniéndose contra la gravedad. Típicamente, tiene una frecuencia de 4 a 6 Hz y se describe comúnmente como un \"signo de contar monedas\" o \"pill-rolling\" por el movimiento repetitivo del pulgar y el índice.\n\nUna característica fundamental de este temblor es que disminuye o incluso desaparece por completo durante el movimiento voluntario o intencional de la extremidad afectada, y reaparece cuando la extremidad vuelve al reposo. También suele desaparecer durante el sueño. Aunque algunos pacientes pueden desarrollar un componente postural o cinético leve con el avance de la enfermedad, el temblor de reposo es el rasgo distintivo y el principal criterio semiológico para su diagnóstico diferencial con otros trastornos del movimiento. Su intensidad puede variar, exacerbándose con el estrés emocional o la fatiga.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
    },
    {
      "stem": "¿Cuál de los siguientes hallazgos es muy frecuente en la enfermedada de\nParkinson idiopática?:",
      "options": [
        {
          "id": "A",
          "text": "Demencia al inicio"
        },
        {
          "id": "B",
          "text": "Mioclonías."
        },
        {
          "id": "C",
          "text": "Blefaroespasmo."
        },
        {
          "id": "D",
          "text": "Retrocollis."
        },
        {
          "id": "E",
          "text": "Pérdida de movimientos asociados en la marcha."
        }
      ],
      "correcta": "E",
      "explicacion": "La pérdida de movimientos asociados en la marcha, como la reducción o ausencia del braceo de los brazos, es uno de los signos motores cardinales y tempranos de la Enfermedad de Parkinson idiopática. Este fenómeno es una manifestación de la bradicinesia/acinesia, que es la lentitud o dificultad para iniciar y ejecutar el movimiento, y la pérdida de movimientos automáticos. En la marcha parkinsoniana típica, además de la postura encorvada y el arrastre de pies, es característico observar cómo los brazos no se balancean de forma rítmica y simétrica como lo harían en una persona sana, o incluso permanecen rígidamente pegados al cuerpo.\n\nEste hallazgo es muy frecuente porque se relaciona directamente con el déficit dopaminérgico en los ganglios basales que subyace a la patogenia de la enfermedad. La alteración en el circuito motor provoca una dificultad para la ejecución fluida y coordinada de movimientos automáticos y semi-automáticos, de los cuales el braceo es un excelente ejemplo. La asimetría en el braceo es, de hecho, uno de los signos tempranos que a menudo son notados por familiares o el propio paciente, incluso antes de que se establezca un diagnóstico formal.\n\nPor lo tanto, la pérdida de movimientos asociados en la marcha, especialmente el braceo, es un criterio diagnóstico clave y un hallazgo motor muy prevalente y característico en la Enfermedad de Parkinson idiopática, presente desde las etapas iniciales de la enfermedad en la mayoría de los pacientes.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
    },
    {
      "stem": "¿Cuál de los siguientes medicamentos produce parkinsonismo por drogas\ncon más frecuencia?",
      "options": [
        {
          "id": "A",
          "text": "Clozapina"
        },
        {
          "id": "B",
          "text": "Risperidona"
        },
        {
          "id": "C",
          "text": "Carbamacepina"
        },
        {
          "id": "D",
          "text": "Ergotamina"
        },
        {
          "id": "E",
          "text": "Amitriptilina"
        }
      ],
      "correcta": "B",
      "explicacion": "La respuesta correcta es la Risperidona. La Risperidona es un antipsicótico atípico que ejerce su efecto bloqueando los receptores de dopamina D2 en el sistema nervioso central, particularmente en los ganglios basales. Este bloqueo dopaminérgico, similar al que ocurre en la enfermedad de Parkinson idiopática, puede manifestarse clínicamente como parkinsonismo inducido por fármacos. Los síntomas suelen incluir bradicinesia (lentitud de movimiento), rigidez muscular, temblor en reposo y, en algunos casos, inestabilidad postural. La incidencia de parkinsonismo con la Risperidona es relativamente alta en comparación con otros antipsicóticos atípicos, aunque generalmente menor que con los antipsicóticos típicos de alta potencia.\n\nEl riesgo de desarrollar parkinsonismo inducido por fármacos con Risperidona está relacionado con la dosis y la duración del tratamiento, así como con factores individuales del paciente como la edad y la presencia de otros trastornos neurológicos. Es importante destacar que, si bien la Clozapina (opción a) también es un antipsicótico atípico, tiene un riesgo significativamente menor de parkinsonismo, e incluso puede ser beneficiosa en algunos pacientes con Parkinson.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
    },
    {
      "stem": "Una paciente de 22 años consulta por presentar desde una semana antes\nptosis palpebral izquierda, sin dolor, con diplopía en al mirada lateral\nizquierda. En la exploración física se comla existencia de una ptosis\nizquierda, una paresia de la abducción del ojo izquierdo, con unas pupilas\nisocóricas y normorreactivas de la luz. ¿Qué enfermedad es más probable que\npadezca la paciente?:",
      "options": [
        {
          "id": "A",
          "text": "Una neuritis óptica izquierda en relación con Esclerosis Múltiple."
        },
        {
          "id": "B",
          "text": "Un síndrome de Horner."
        },
        {
          "id": "C",
          "text": "Una Miastenia gravis."
        },
        {
          "id": "D",
          "text": "Una parálisis del III par izquierdo."
        },
        {
          "id": "E",
          "text": "Una miopatía hipertiroidea con afectación de la musculatura extraocular."
        }
      ],
      "correcta": "C",
      "explicacion": "La presentación clínica de la paciente es altamente sugestiva de Miastenia gravis (MG), específicamente de la forma ocular. La Miastenia gravis es una enfermedad autoinmune que afecta la unión neuromuscular, resultando en debilidad muscular fluctuante. Los síntomas oculares son la manifestación inicial en la mayoría de los casos y se caracterizan por ptosis (caída del párpado) y diplopía (visión doble), que empeoran con la fatiga y mejoran con el reposo. En este caso, la paciente presenta ptosis palpebral izquierda y diplopía en la mirada lateral izquierda debido a paresia de la abducción del ojo izquierdo, lo que indica debilidad del músculo recto lateral izquierdo (inervado por el VI par craneal).\n\nUn hallazgo crucial que orienta fuertemente hacia la Miastenia gravis y permite descartar otras causas de oftalmoplejía es la normalidad de las pupilas (isocóricas y normorreactivas a la luz). La Miastenia gravis afecta únicamente la musculatura estriada voluntaria y nunca las fibras autonómicas que controlan la pupila, ya que estas últimas poseen receptores muscarínicos de acetilcolina que no son el blanco de los autoanticuerpos miasténicos. La edad joven de la paciente (22 años) y el curso subagudo de los síntomas (\"desde una semana antes\") también son consistentes con el perfil de la Miastenia gravis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
    }
  ],
  "vignetteText": "Hombre de 68 años, jubilado, sin antecedentes mórbidos relevantes, consulta por un cuadro de 14 meses de evolución caracterizado por temblor involuntario en su extremidad superior derecha que aparece principalmente cuando tiene el brazo apoyado en reposo mirando televisión, cediendo cuando toma una taza o escribe. Su esposa refiere que camina más lento, arrastra levemente el pie derecho y ha perdido la expresividad de su rostro. Al examen físico: alerta, orientado, facies inexpresiva (hipomimia facial), habla con volumen bajo (hipofonía). En la marcha se evidencia postura ligeramente encorvada, reducción marcada del braceo derecho y pasos cortos. Al examen segmentario presenta rigidez plástica en rueda dentada en muñeca y codo derechos, acompañada de temblor rítmico de reposo a 5 Hz (\"cuenta monedas\") en mano derecha. El golpeteo repetitivo de dedos (finger tapping) muestra clara lentitud con disminución progresiva de la amplitud en mano derecha. No presenta caídas, parálisis oculomotora ni disautonomía."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "parkinson, criterios, terapia, levodopa, fluctuaciones")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2018 · Pregunta 22 · confianza 0.96
Un hombre de 55 años, diabético de larga data, presenta temblor de reposo y lentitud al realizar actividades, como vestirse, lo que se ha asociado a dificultades para iniciar la marcha. Relata que se había caído hacia adelante, en dos oportunidades, al empezar a caminar. Al inicio de la marcha es lento e inseguro, pero luego alcanza una velocidad normal, la que se mantiene por el resto del tiempo. No presenta disminución de las fuerzas de las extremidades y sus reflejos osteotendíneos son normales, al igual que la sensibilidad. El diagnóstico más probable es:
- A) Enfermedad de Parkinson
- B) Enfermedad de Alzheimer
- C) Polineuropatía diabética
- D) Polimialgia reumática
- E) Miopatía por cuerpos de inclusión
**Correcta: A**
Explicación del banco: Es una anfermedad de Parkinson clásico: temblor de reposo, bradicinesia y problemas de inicio de marcha.

### [2] EUNACOM Julio 2015 · Pregunta 26 · confianza 0.95
Un paciente de 70 años presenta un cuadro de dificultad para girarse y para meterse a la tina, asociado a múltiples caídas. Además presenta cambios en la escritura y temblor de reposo. No presenta deterioro cognitivo evidente. El diagnóstico más probable es:
- A) Atrofia generalizada
- B) Hidrocefalia normotensiva
- C) Temblor senil
- D) Demencia por cuerpos de Lewy
- E) Enfermedad de Parkinson
**Correcta: E**
Explicación del banco: Diagnóstico: **Enfermedad de Parkinson** (opción **E**). Cuadro clásico. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [3] EUNACOM Diciembre 2024 · Pregunta 40 · confianza 0.85
Paciente en tratamiento anti hipertensivo + sd vertiginoso en tto con Cinarizina, metformina, inicia temblor de reposo, simétrico, bilateral, rigidez y asociado a caídas frecuentes. ¿Cuál es el diagnóstico más probable?
- A) Parkinson POR QUÉ NO PODÍA SER PÁRKINSON ? Porque describía un temblor bilateral simétrico, Parkinson inicia como unilateral y no simétrico
- B) Parkinsonismo por fármacos
- C) Accidente cerebrovascular
- D) Epilepsia
- E) Esclerosis múltiple
**Correcta: A**
Explicación del banco: Diagnóstico: **Parkinson POR QUÉ NO PODÍA SER PÁRKINSON ? Porque describía un temblor bilateral simétrico, Parkinson inicia como unilateral y no simétrico** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [4] EUNACOM Diciembre 2025 · Pregunta 99 · confianza 0.8
Un paciente de 62 años, con antecedente de hipertensión arterial en tratamiento con doxazosina, hiperplasia prostá8ca benigna en tratamiento con tamsulosina y trastorno afec8vo bipolar en tratamiento con carbonato de li8o, consulta por temblor de manos mayor a derecha que aparece con el reposo y se asocia a len8tud en los movimientos. El cuadro inició hace 4 meses. Se miden los niveles plasmá8cos de los fármacos que u8liza, los que son informados dentro de rango terapéu8co. ¿Cuál es la conducta más adecuada?
- A) Suspender la doxazosina
- B) Disminuir la dosis de carbonato de li2o
- C) Suspender la tamsulosina
- D) Realizar prueba con levodopa
- E) Iniciar propranolol vía oral
**Correcta: D**
Explicación del banco: La bradicinesia (lentitud de movimientos) más temblor obliga a pensar en enfermedad de Parkinson, cuyo diagnóstico es clínico, pudiendo hacer una prueba con levodopa para ver si mejoran los síntomas. La intoxicación por liGo sí puede producir temblor, pero suele ser aguda y, además, explícitamente se reportan niveles dentro de rango terapéutico.

### [5] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [6] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [7] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [8] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [9] EUNACOM Julio 2013 · Pregunta 137 · confianza 0.96
Un paciente de 26 años, estudiante universitario con regular rendimiento, es traído por sus padres porque desde hace tres meses no ha asistido a clases, ya que prefiere quedarse en su habitación. Ellos refieren que siempre fue solitario y que no buscaba tener amistades. Al entrevistarlo de forma dirigida se ríe sin motivo y refiere que no quiere salir de su habitación porque la voz del diablo lo amenaza. El diagnóstico más probable es:
- A) Trastorno delirante crónico
- B) Trastorno de la personalidad esquizoide
- C) Delirium
- D) Esquizofrenia hebefrénica
- E) Trastorno Bipolar
**Correcta: D**
Explicación del banco: Diagnóstico: **Esquizofrenia hebefrénica** (opción **D**). La risa sin motivo orienta a Hebefrenia. El cuadro clínico es sugerente de EQZ.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [10] EUNACOM Diciembre 2025 · Pregunta 143 · confianza 0.95
¿A qué concepto corresponde la siguiente deﬁnición: “Conjunto de medidas des8nadas a evitar que una enfermedad ocurra, actuando antes de que exista la enfermedad o el daño causado por esta”?
- A) Prevención primaria
- B) Prevención secundaria
- C) Prevención terciaria
- D) Prevención cuaternaria
- E) Promoción de la salud
**Correcta: A**
Explicación del banco: Prevención primaria actúa antes de que exista la enfermedad (ej. vacunas con papiloma). Prevención secundaria actúa cuando ya existe la enfermedad, pero todavía no hay síntomas, permiGendo un diagnóstico oportuno (ej. PAP). Prevención terciaria actúa cuando la enfermedad ya Gene síntomas, para recuperar la salud y evitar complicaciones y recidivas (ej. histerectomía radical). Prevención cuaternaria enfrenta los síntomas, en ausencia de una patología orgánica (ej. psicoterapia de trastorno somatomorfo). Promoción de la salud consiste en enseñar hábitos de vida saludables, por lo que se enmarca dentro de la prevención primaria, pero su deﬁnición es especíﬁca.

### [11] EUNACOM Julio 2024 · Pregunta 127 · confianza 0.95
Un paciente de 32 años consulta por la idea recurrente de que debe limpiar sus utensilios de alimentación para evitar adquirir una infección intestinal. Refiere que se cepilla los dientes durante 15 minutos y luego se enjuaga la boca por 10 minutos más. Reconoce que a veces quiere dejar de hacerlo, pero no puede evitarlo. Como antecedente, sufrió de leucemia aguda a los 7 años, siendo manejado con quimioterapia y logrando la curación de la enfermedad. ¿Cuál es el diagnóstico más probable?
- A) Manía aguda
- B) Trastorno por descontrol de impulsos
- C) Trastorno de personalidad
- D) Esquizofrenia
- E) Trastorno obsesivo compulsivo
**Correcta: E**
Explicación del banco: Trastorno Obsesivo-Compulsivo: El cuadro clínico describe un trastorno obsesivo-compulsivo clásico, con obsesión por la contaminación y compulsión por la limpieza.

### [12] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [13] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [14] EUNACOM Enero 2023 · Pregunta 41 · confianza 0.95
Embarazada con antecedente de cesárea previa, durante el parto presenta cese de contracciones, sangrado y bradicardia fetal. ¿Diagnóstico más probable?
- A) Desprendimiento prematuro de placenta
- B) Placenta previa sangrante
- C) Prolapso de cordón umbilical
- D) Embolia de líquido amniótico
- E) Rotura uterina
**Correcta: E**
Explicación del banco: Diagnóstico: **Rotura uterina** (opción **E**). Rotura uterina. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Enero 2023 · Pregunta 62 · confianza 0.95
Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas. ¿Diagnóstico más probable?
- A) Apendicitis aguda complicada
- B) Quiste ovárico torcido
- C) Embarazo ectópico roto
- D) Salpingitis aguda con absceso tubo-ovárico
- E) Rotura folicular hemorrágica
**Correcta: C**
Explicación del banco: Diagnóstico: **Embarazo ectópico roto** (opción **C**). Embarazo ectópico roto. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [16] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [17] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [18] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [19] EUNACOM Agosto 2021 · Pregunta 96 · confianza 0.95
Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular, hipolacrimia y xerostomía. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, ENA (-), AntiDNA 2h (-) y anticuerpos anti- CCP mayores a 200 UI/ml. La radiografía de manos muestra edema de partes blandas y osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es:
- A) Lupus eritematoso sistémico
- B) Artritis reumatoide
- C) Artritis psoriática
- D) Esclerosis sistémica
- E) Síndrome de Sjörgren primario
**Correcta: B**
Explicación del banco: Diagnóstico: **Artritis reumatoide** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [20] EUNACOM Diciembre 2019 · Pregunta 59 · confianza 0.95
Una mujer de 18 años sufrió un rapto al salir de la oficina, por dos desconocidos. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente, sin lesiones físicas. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de lo sucedido, recordando solo cuando fue abordada por los desconocidos y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [21] EUNACOM Julio 2019 · Pregunta 168 · confianza 0.95
Una niña de 15 años presenta disconformidad con su cuerpo, por lo que lo oculta, utilizando ropa 2 o 3 tallas más grandes. Además, tiene retraimiento social y gran preocupación por las calorías que ingiere. Los padres refieren que anda con náuseas en el último tiempo, por lo que come poco y ha bajado de peso. Sin embargo ella se había negado a acudir al médico. El diagnóstico más probable es:
- A) Trastorno distímico
- B) Trastorno alimentario mixto
- C) Anorexia nervosa
- D) Trastorno depresivo mayor
- E) Bulimia nervosa
**Correcta: C**
Explicación del banco: Es una forma clásica de presentación de la anorexia, aunque no muestren todos los criterios (bajo peso, preocupación por el peso, alteración de la percepción corporal y amenorrea). Es frecuente que la paciente lo oculte, mienta o manipule a la familia, para que no la obliguen a subir de peso.

### [22] EUNACOM Diciembre 2019 · Pregunta 72 · confianza 0.95
Un lactante de 5 meses presenta un cuadro de tos y coriza, asociada a fiebre hasta 38,5°C. Al día siguiente evoluciona con dificultad respiratoria, taquipnea, retracción subcostal y subcostal. Al examen físico tiene FR: 70x’, uso de musculatura accesoria, sibilancias inspiratorias y espiratorias difusas e intensas, más cianosis perioral. ¿Cuál es el agente etiológico más probable?
- A) Virus respiratorio sincicial
- B) Bordetella pertusis
- C) Virus influenza
- D) Virus parainfluenza
- E) Neumococo
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Virus respiratorio sincicial). Es una bronquiolitis clásica, por VRS.. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh.

### [23] EUNACOM Julio 2019 · Pregunta 126 · confianza 0.95
Una paciente de 43 años presenta sequedad bucal, asociada a ardor y sensación de arenilla ocular y a artralgias. Al examen físico tiene sequedad de piel y de mucosas, se observa aumento de volumen de ambas parótidas y se palpan adenopatías submandibulares de consistencia aumentada. Se solicitan exámenes, que muestra FR: 40 UI/nl, ANA positivos 1/16, ENA negativo, antiDNA negativo. ¿Cuál es el examen de elección para proseguir el estudio diagnóstico?
- A) Punción parotidea
- B) Biopsia ganglionar
- C) Anticuerpos anti-CCP
- D) Biopsia de glándula salival accesoria
- E) Anticuerpos anti-Sm
**Correcta: D**
Explicación del banco: La historia es compatible con un síndrome de Sjögren (tiene el síndrome de Sicca: xeroftalmia y xerostomía). El 90% tiene FR positivo. Además, es frecuente que tengan positivos los ANA, con un perfil ENA que muestra anticuerpos anti-Ro o anti-La positivos. Se confirma la biopsia de glándula salival menor o con los anticuerpos anti-Ro o anti-La, aunque actualmente el diagnóstico se realiza en base a una serie de criterios clínicos y de laboratorio, que no vale la pena aprenderse.

### [24] EUNACOM Diciembre 2018 · Pregunta 132 · confianza 0.95
Una paciente de 32 años, madre de 4 hijos, de distintos padres, de los cuales no se hace cargo, tiene relaciones inestables y problemas frecuentes con sus compañeros de trabajo. Pelea frecuentemente con su familia y como antecedente, ha tenido varios episodios de autoagresión e intentos suicidas. ¿Cuál es el diagnóstico más probable?
- A) Esquizofrenia
- B) Trastorno límite de la personalidad
- C) Trastorno bipolar
- D) Trastorno delirante
- E) Trastorno depresivo mayor
**Correcta: B**
Explicación del banco: Diagnóstico: **Trastorno límite de la personalidad** (opción **B**). Es un TP limítrofe clásico.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [25] EUNACOM Diciembre 2017 · Pregunta 116 · confianza 0.95
Un paciente de 21 años, abandonó a los 18 años su hogar, viviendo solo en la calle. Tiene la idea de ser un enviado de Dios, con la misión de salvar al mundo y dice que los ángeles le susurran al oído diciéndole cómo hacerlo. Los familiares refieren que empezó hace 3 años con esto y que no ha cambiado mucho desde entonces. ¿Cuál es el diagnóstico más probable?
- A) Trastorno delirante crónico
- B) Esquizofrenia
- C) Trastorno bipolar
- D) Trastorno de personalidad esquizoide
- E) Trastorno de conducta
**Correcta: B**
Explicación del banco: Diagnóstico: **Esquizofrenia** (opción **B**). Es una EQZ clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).
