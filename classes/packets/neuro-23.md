# CLASE neuro-23 · Neurologia 10.23: Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES

Escribe `classes/lessons/neuro-23.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-23" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-20: Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS
- neuro-21: Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente
- neuro-22: Neurologia 10.22: Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)
- neuro-24: Neurologia 10.24: Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-23",
  "classId": "neuro-23",
  "tier": 2,
  "blockNum": 5,
  "blockName": "Geriatría Clínica y Grandes Síndromes Geriátricos",
  "topicLabel": "10.23",
  "title": "Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES",
  "perfilCode": "1.07.1.001",
  "dx": "Específico",
  "tx": "Inicial / Derivación",
  "seg": "Urgencia traumatológica / Ortogeriatría",
  "ges": "Garantía Explícita en Salud (GES N° 45): Tratamiento Quirúrgico de la Fractura de Cadera en personas de 65 años y más · Confirmación diagnóstica y resolución quirúrgica dentro de 48 horas desde el ingreso hospitalario, profilaxis tromboembólica obligatoria y rehabilitación precoz.",
  "reconstrucciones": "EUNACOM Diciembre 2024 (Q#82) · EUNACOM Julio 2023 (Q#109) · EUNACOM 2020 (Q#77) · EUNACOM 2018 (Q#121) · EUNACOM 2016 (Q#64)",
  "frecuencia": "Máxima prioridad clínica · Patología GES angular evaluada con alta frecuencia en traumatología, urgencias y geriatría",
  "algoTitle": "Algoritmo de Manejo Integral del Síndrome de Caídas y Co-Manejo Ortogeriátrico de Fractura de Cadera GES N° 45",
  "diagram": {
    "title": "Algoritmo de Abordaje de Caídas y Fractura de Cadera GES",
    "svg": "<svg viewBox=\"0 0 620 422\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Adulto Mayor que Sufre Caída a Nivel o Presenta Trastorno de la Marcha</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Descartar síncope, evento neurovascular agudo y compromiso hemodinámico · Evaluar cadera</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Examen Físico: Búsqueda de la Deformidad Clásica de Fractura de Cadera</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Extremidad acortada + Rotación externa + Leve</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">abducción del muslo + Impotencia funcional total</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Deformidad Clásica o Dolor Inguinal Agudo con Impotencia Funcional?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Radiografía de pelvis AP y cadera afectada axial inmediata</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Fractura Confirmada (Garantía GES N° 45)</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Sin Fractura (Caída sin Deformidad Ósea)</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Protocolo de Co-Manejo Ortogeriátrico Urgente</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Cirugía meta &lt; 48 h · Tromboprofilaxis con HBPM por 28-35 d</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Analgesia multimodal · Carga precoz &lt; 24-48 h</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Biomecánica del Riesgo de Recaída</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Timed Up and Go (TUG &gt; 12 s) · Estación unipodal &lt; 5 s</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Corregir factores extrínsecos e fármacos</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Selección del Procedimiento Quirúrgico según Localización Anatómica</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Intracapsular (cuello femoral desplazada): Hemiartroplastia o Prótesis Total</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Extracapsular (pertrocantérica): Osteosíntesis (clavo endomedular/DHS)</text>\n  <path class=\"ln\" d=\"M310,342 V364\"/>\n  <rect class=\"acc\" x=\"100\" y=\"364\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"379\" text-anchor=\"middle\" font-weight=\"700\">Prevención Secundaria Integral y Tratamiento de Osteoporosis Subyacente</text>\n  <text class=\"accS\" x=\"310\" y=\"391\" text-anchor=\"middle\">Calcio 1000-1200 mg/d + Vitamina D 800-2000 UI/d</text>\n  <text class=\"accS\" x=\"310\" y=\"402\" text-anchor=\"middle\">Antirreabsortivo (Ácido Zoledrónico EV o Denosumab SC) · Taller prevención caídas</text>\n</svg>"
  },
  "contexto": "Las caídas constituyen uno de los grandes síndromes geriátricos y la principal causa de traumatismo mayor e institucionalización en el adulto mayor. Aproximadamente el 30% de las personas mayores de 65 años que viven en la comunidad sufre al menos una caída al año, cifra que se eleva al 50% en mayores de 80 años e institucionalizados. El 90% de las fracturas de cadera se origina por una caída a nivel desde la propia altura sobre hueso osteoporótico. En Chile, la Fractura de Cadera en mayores de 65 años está protegida por la Garantía GES N° 45, cuya exigencia legal de intervención quirúrgica dentro de 48 horas y manejo ortogeriátrico integral reduce sustantivamente la mortalidad a un año, que de lo contrario alcanza un alarmante 25-30%.",
  "contentSections": [
    {
      "subhead": "1. Epidemiología, Mecanismo Biomecánico y Consecuencias de las Caídas",
      "paragraphs": [
        "Una caída se define como la consecuencia de cualquier acontecimiento que precipita al paciente al suelo contra su voluntad. En la población geriátrica, más del <strong>90% de las caídas corresponden a caídas a nivel</strong> (producidas desde la propia altura durante la deambulación o cambios posturales), y no a caídas de altura ni accidentes vehiculares.",
        "Las consecuencias abarcan: 1) Consecuencias físicas agudas: contusiones, desgarros, hematoma subdural y fracturas (cadera, muñeca [Colles], húmero proximal y pelvis); 2) Permanencia prolongada en el suelo (incapacidad para levantarse por más de 1 hora): gatilla rabdomiolisis, deshidratación, hipotermia, úlceras por presión e infección respiratoria; y 3) <strong>Síndrome post-caída (Ptophobia)</strong>: trastorno psicológico caracterizado por un miedo intenso a volver a caer, lo que induce una restricción voluntaria severa de la deambulación, pérdida acelerada de masa muscular, dependencia funcional y aislamiento social (véase Algoritmo 10.23)."
      ]
    },
    {
      "subhead": "2. Factores Etiológicos Intrínsecos y Extrínsecos Determinantes",
      "paragraphs": [
        "La etiología de las caídas es multifactorial, resultante de la interacción entre factores intrínsecos del paciente y factores extrínsecos de su entorno (véase Tabla 10.23: Evaluación del Riesgo de Caídas y Protocolo GES):",
        "• <strong>Factores Intrínsecos:</strong> Declive biológico sensorial (disminución de agudeza visual por cataratas o degeneración macular, hipoacusia, pérdida de la sensibilidad propioceptiva vibratoria por neuropatía); patologías musculoesqueléticas (sarcopenia, artrosis de rodilla/cadera, deformidades podálicas); patologías neurológicas (secuela de ACV, Enfermedad de Parkinson, hidrocefalia normotensiva, demencia); y desbalances cardiovasculares (arritmias, estenosis aórtica severa e <strong>hipotensión ortostática</strong>, definida como la caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg dentro de los 3 minutos posteriores a la bipedestación).",
        "• <strong>Factores Farmacológicos (Polifarmacia):</strong> Constituyen el factor de riesgo modificable más potente. Los fármacos inductores de sedación, ataxia, confusión o hipotensión duplican el riesgo de caídas: psicofármacos (benzodiacepinas, antidepresivos, antipsicóticos, inductores Z), antihipertensivos (betabloqueadores como atenolol por producir bradicardia e hipoperfusión, diuréticos por depleción de volumen, vasodilatadores) e hipoglicemiantes (sulfonilureas por hipoglicemia).",
        "• <strong>Factores Extrínsecos Ambientales (30-50% de las causas):</strong> Obstáculos en el hogar: alfombras no fijadas al suelo, iluminación deficiente o deslumbrante, cables sueltos, suelos resbaladizos, ausencia de barras de sujeción en baños y duchas, tazas de baño demasiado bajas, escalones sin pasamanos y calzado inapropiado (chancletas, pantuflas sin talón, zapatos de suela resbaladiza o tacones)."
      ]
    },
    {
      "subhead": "3. Evaluación Funcional de la Marcha y Equilibrio: Test TUG y Estación Unipodal",
      "paragraphs": [
        "Todo adulto mayor que consulte por caídas o presente factores de riesgo debe ser evaluado con pruebas biomecánicas estandarizadas validadas en el EMPAM:",
        "• <strong>Test Timed Up and Go (TUG):</strong> Cuantifica la movilidad funcional, el equilibrio dinámico y la velocidad de reacción. El paciente se sienta en una silla estándar con apoyabrazos, se le indica levantarse (sin usar los brazos si es posible), caminar 3 metros a paso cómodo y seguro, girar 180°, regresar a la silla y sentarse de nuevo. Interpretación: <strong>&lt; 10 segundos:</strong> Movilidad normal e independiente; <strong>10 a 12 segundos:</strong> Límite de normalidad para adultos mayores; <strong>&gt; 12 a 14 segundos:</strong> <em>Alto riesgo de caídas</em> (requiere intervención kinesiológica y revisión ambiental); <strong>&gt; 20 segundos:</strong> Fragilidad física marcada y dependencia motora.",
        "• <strong>Test de Estación Unipodal:</strong> El paciente intenta mantenerse sobre una sola pierna con los ojos abiertos y brazos cruzados sobre el pecho. La incapacidad para sostener la postura unipodal durante <strong>al menos 5 segundos</strong> identifica un déficit severo de equilibrio estático y un riesgo triplicado de fracturas por caída."
      ]
    },
    {
      "subhead": "4. Fractura de Cadera: Presentación Clínica Clásica y Clasificación Anatómica",
      "paragraphs": [
        "La fractura del extremo proximal del fémur es la complicación más devastadora del síndrome de caídas. Su sospecha clínica se fundamenta en una presentación semiológica clásica que constituye una de las preguntas de mayor reiteración histórica en el EUNACOM:",
        "<em>Semiología Cardinal EUNACOM:</em> Tras una caída a nivel, el paciente se presenta con <strong>imposibilidad absoluta para ponerse de pie o caminar</strong> (impotencia funcional), dolor intenso en la región inguinal irradiado al muslo y rodilla, y una postura patognomónica de la extremidad inferior afectada caracterizada por: <strong>1) Acortamiento evidente del miembro</strong> (por tracción cefálica de los músculos glúteos e iliopsoas); <strong>2) Rotación externa marcada</strong> (el borde lateral del pie contacta con la camilla por la acción de la gravedad y de los músculos rotadores externos); y <strong>3) Leve abducción del muslo</strong>.",
        "<strong>Clasificación Anatómica y Decisión Quirúrgica</strong> (véase Tabla de Gravedad 10.23: Clasificación Anatómica de Fracturas de Cadera):",
        "• <strong>1. Fracturas Intracapsulares (Del Cuello Femoral):</strong> Abarcan las fracturas subcapitales, transcervicales y basicervicales. La cápsula articular envuelve los vasos retinaculares nutricios derivados de la arteria circunfleja femoral medial que ascienden hacia la cabeza femoral. El desplazamiento óseo desgarra estos vasos terminales, condicionando un riesgo extremadamente alto de <strong>necrosis avascular de la cabeza femoral (NAV)</strong> y de pseudoartrosis. En el adulto mayor frágil con fractura desplazada (Garden III y IV), la osteosíntesis fracasa; el tratamiento de elección es la <strong>artroplastia de cadera</strong> (Hemiartroplastia bipolar en pacientes con baja demanda funcional o Prótesis Total de Cadera en pacientes activos sin deterioro cognitivo).",
        "• <strong>2. Fracturas Extracapsulares (Pertrocantéricas y Subtrocantéricas):</strong> Ocurren en la región metafisaria entre el trocánter mayor y menor. Es una zona de hueso esponjoso profusamente vascularizada por ramas musculares extracapsulares; el riesgo de necrosis avascular es prácticamente nulo y la consolidación ósea es excelente. El tratamiento de elección es la <strong>osteosíntesis biológica</strong> mediante implantes de fijación interna: Clavo Cefalomedular endomedular (clavo Gamma / PFN) o tornillo-placa deslizante (DHS - Dynamic Hip Screw)."
      ]
    },
    {
      "subhead": "5. Garantía GES N° 45 y Protocolo de Co-Manejo Ortogeriátrico",
      "paragraphs": [
        "El tratamiento de la fractura de cadera en personas de 65 años y más está normado por la <strong>Garantía Explícita en Salud (GES N° 45)</strong> en Chile. Sus pilares clínicos obligatorios son:",
        "• <strong>Meta Quirúrgica &lt; 48 Horas:</strong> Todo paciente debe ser operado dentro de las primeras 48 horas desde su ingreso al hospital. La cirugía precoz reduce drásticamente la tasa de complicaciones médicas intrahospitalarias (neumonía intrahospitalaria, delirium, atelectasias, trombosis venosa profunda y úlceras por presión) y disminuye a la mitad la mortalidad perioperatoria.",
        "• <strong>Analgesia Multimodal Precoz:</strong> Bloqueo nervioso periférico de fascia ilíaca o femoral ecoguiado en el servicio de urgencia, complementado con Paracetamol reglado EV; minimiza el requerimiento de opioides sistémicos y previene el delirium postoperatorio.",
        "• <strong>Profilaxis Tromboembólica Obligatoria:</strong> Administrar <strong>Heparina de Bajo Peso Molecular (Enoxaparina 40 mg SC al día)</strong> o Fondaparinux iniciada al ingreso, suspendiéndola 12 horas antes de la anestesia raquídea y reiniciándola 12 horas después de la cirugía. La tromboprofilaxis DEBE extenderse estrictamente por <strong>28 a 35 días</strong> en el postoperatorio.",
        "• <strong>Rehabilitación y Bipedestación Precoz:</strong> Movilización fuera de la cama y bipedestación con carga tutelada dentro de las primeras <strong>24 a 48 horas postoperatorias</strong> coordinada por kinesiología.",
        "• <strong>Prevención Secundaria de Nuevas Fracturas:</strong> Evaluación de osteoporosis subyacente mediante densitometría ósea post-alta, inicio de Calcio (1000-1200 mg/día), Vitamina D (800-2000 UI/día) y terapia antirreabsortiva parenteral (Ácido Zoledrónico 5 mg EV anual o Denosumab 60 mg SC semestral)."
      ]
    }
  ],
  "table": {
    "title": "Evaluación Clínica del Riesgo de Caídas, Factores Determinantes y Protocolo Ortogeriátrico de Fractura de Cadera GES N° 45",
    "headers": [
      "Componente / Test",
      "Criterios Operativos y Valores de Corte",
      "Mecanismo / Hallazgo Clínico",
      "Conducta Médica Inmediata"
    ],
    "rows": [
      [
        "Test Timed Up and Go (TUG)",
        "Tiempo para levantarse, caminar 3 m, girar y sentarse: > 12-14 s (anormal)",
        "Refleja inestabilidad dinámica, debilidad de cuádriceps y lentitud neuromuscular",
        "Derivar a taller de equilibrio/marcha (Vivifrail) y kinesiología motora"
      ],
      [
        "Test Estación Unipodal",
        "Tiempo sosteniéndose en una sola extremidad sin apoyo: < 5 segundos (anormal)",
        "Pérdida de equilibrio estático y respuesta propioceptiva protectora ante tropiezos",
        "Alto riesgo de caída; evaluar uso de bastón o ayuda técnica de marcha"
      ],
      [
        "Factores Intrínsecos",
        "Déficit visual, neuropatía periférica, sarcopenia, hipotensión ortostática",
        "Caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg a los 3 min de bipedestación",
        "Ajustar dosis antihipertensivas, hidratación, medias de compresión gradual"
      ],
      [
        "Factores Fármacos de Riesgo",
        "Benzodiacepinas, antidepresivos, antipsicóticos, betabloqueadores (atenolol)",
        "Causan sedación, ataxia, bradicardia, retardo de reflejos posturales e hipotensión",
        "Conciliación farmacológica y desprescripción gradual de psicotrópicos"
      ],
      [
        "Factores Extrínsecos",
        "Alfombras sueltas, baños sin barras de apoyo, cables en el suelo, calzado sin talón",
        "Desencadenan tropiezos y resbalones mecánicos en el 40% de las caídas",
        "Intervención de terapia ocupacional para adaptación ambiental domiciliaria"
      ],
      [
        "Semiología Fractura Cadera",
        "Extremidad ACORTADA + ROTACIÓN EXTERNA + LEVE ABDUCCIÓN + Impotencia total",
        "Acción muscular desbalanceada de iliopsoas, glúteos y rotadores sobre fémur fracturado",
        "Inmovilización suave, analgesia multimodal y radiografía de pelvis/cadera AP"
      ],
      [
        "Garantía Oportunidad GES N° 45",
        "Resolución quirúrgica dentro de 48 horas desde el ingreso hospitalario",
        "Evita claudicación hemodinámica, escaras, trombosis y neumonía intrahospitalaria",
        "Pabellón prioritario con anestesia regional y profilaxis antibiótica precoz"
      ],
      [
        "Tromboprofilaxis GES N° 45",
        "Enoxaparina 40 mg SC cada 24 horas iniciada al ingreso y postoperatorio",
        "Riesgo masivo de TVP/TEP por inmovilidad y daño tisular traumatológico",
        "Mantener estrictamente durante 28 a 35 días posteriores a la cirugía"
      ]
    ]
  },
  "severityTable": {
    "title": "Clasificación Anatómica de las Fracturas de Cadera en el Adulto Mayor: Implicancias Vasculares y Decisión Quirúrgica",
    "headers": [
      "Tipo Anatómico",
      "Localización y Compromiso Capsular",
      "Irrigación Sanguínea y Riesgo Vascular",
      "Conducta Quirúrgica de Elección en el Adulto Mayor"
    ],
    "rows": [
      [
        "Intracapsular No Desplazada (Garden I - II)",
        "Subcapital o transcervical sin desplazamiento ni angulación de trabéculas",
        "Vasos retinaculares preservados; riesgo moderado de necrosis avascular (NAV)",
        "Osteosíntesis percutánea con tornillos canulados o artroplastia según reserva funcional"
      ],
      [
        "Intracapsular Desplazada (Garden III - IV)",
        "Subcapital o transcervical con desplazamiento completo y disrupción trabecular",
        "Ruptura completa de vasos retinaculares; ALTO riesgo de necrosis avascular y pseudoartrosis",
        "Hemiartroplastia de cadera (bipolar) en anciano frágil Ó Prótesis Total en autovalente activo"
      ],
      [
        "Extracapsular Pertrocantérica",
        "Línea intertrocantérica entre trocánter mayor y menor (zona metafisaria)",
        "Excelente vascularización por ramas musculares; riesgo de NAV prácticamente nulo",
        "Osteosíntesis con Clavo Cefalomedular (Gamma/PFN) o Tornillo Placa Deslizante (DHS)"
      ],
      [
        "Extracapsular Subtrocantérica",
        "Por debajo del trocánter menor (hasta 5 cm distal a la cortical femoral)",
        "Zona cortical diafisaria sometida a grandes fuerzas biomecánicas de cizallamiento",
        "Osteosíntesis con Clavo Endomedular largo bloqueado para estabilidad axial"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 82 años, con antecedente de hipertensión arterial y fibrilación auricular crónica tratada con atenolol y apixabán, tropieza con una alfombra en el pasillo de su casa y cae desde su propia altura golpeándose la región glútea derecha. Inmediatamente experimenta dolor inguinal intolerable que le impide ponerse de pie. Es traída en ambulancia a la urgencia. Al examen físico: la extremidad inferior derecha se encuentra notablemente acortada, con rotación externa marcada del muslo y pie apoyado sobre su borde lateral, y dolor exquisito a la palpación anterior de la ingle y movilización suave. No presenta déficit neurovascular distal. La radiografía de pelvis AP y cadera derecha muestra una fractura subcapital de cuello femoral desplazada (Garden IV).",
    "conducta": "El cuadro clínico corresponde a la presentación clásica e inequívoca de una fractura de cadera intracapsular desplazada: antecedente de caída a nivel en una mujer mayor con factores de riesgo intrínsecos (uso de betabloqueadores como atenolol que aumentan el riesgo de caídas por bradicardia/hipotensión) y extrínsecos (alfombra suelta), asociada a la tríada semiológica patognomónica de acortamiento de la extremidad, rotación externa y leve abducción con impotencia funcional total para la marcha. Al ser una fractura intracapsular desplazada (Garden IV), los vasos retinaculares nutricios de la cabeza femoral están desgarrados, con un riesgo prohibitivo de necrosis avascular y falla de osteosíntesis, por lo que la indicación quirúrgica de elección es el reemplazo protésico (hemiartroplastia o prótesis total). La paciente ingresa bajo la Garantía GES N° 45, que exige resolución quirúrgica antes de 48 horas, analgesia multimodal con bloqueo regional, tromboprofilaxis con HBPM por 28-35 días y rehabilitación precoz."
  },
  "explicacion": "El cuadro clínico corresponde a la presentación clásica e inequívoca de una fractura de cadera intracapsular desplazada: antecedente de caída a nivel en una mujer mayor con factores de riesgo intrínsecos (uso de betabloqueadores como atenolol que aumentan el riesgo de caídas por bradicardia/hipotensión) y extrínsecos (alfombra suelta), asociada a la tríada semiológica patognomónica de acortamiento de la extremidad, rotación externa y leve abducción con impotencia funcional total para la marcha. Al ser una fractura intracapsular desplazada (Garden IV), los vasos retinaculares nutricios de la cabeza femoral están desgarrados, con un riesgo prohibitivo de necrosis avascular y falla de osteosíntesis, por lo que la indicación quirúrgica de elección es el reemplazo protésico (hemiartroplastia o prótesis total). La paciente ingresa bajo la Garantía GES N° 45, que exige resolución quirúrgica antes de 48 horas, analgesia multimodal con bloqueo regional, tromboprofilaxis con HBPM por 28-35 días y rehabilitación precoz.",
  "keyPoints": [
    "Más del 90% de las fracturas de cadera en el adulto mayor son secundarias a caídas a nivel desde su propia altura sobre hueso osteoporótico.",
    "La tríada semiológica patognomónica de fractura de cadera es: extremidad inferior acortada, en rotación externa y con impotencia funcional total para la marcha.",
    "En fracturas intracapsulares desplazadas (cuello femoral), la ruptura de los vasos retinaculares impone artroplastia protésica (hemiartroplastia/total) por alto riesgo de necrosis avascular.",
    "En fracturas extracapsulares (pertrocantéricas), la rica vascularización metafisaria permite la consolidación ósea mediante osteosíntesis (clavo cefalomedular o DHS).",
    "La Garantía GES N° 45 exige tratamiento quirúrgico antes de 48 horas desde el ingreso, tromboprofilaxis obligatoria con HBPM durante 28 a 35 días y movilización precoz en 24-48 horas."
  ],
  "questions": [
    {
      "stem": "¿Cuál es la presentación clínica más habitual de las fracturas de cadera?",
      "options": [
        {
          "id": "A",
          "text": "Acortamiento, rotación interna y aducción del muslo, con imposibilidad de caminar"
        },
        {
          "id": "B",
          "text": "Acortamiento, rotación externa y abducción del muslo, con imposibilidad de caminar"
        },
        {
          "id": "C",
          "text": "Acortamiento, rotación interna y abducción del muslo, con imposibilidad de caminar"
        },
        {
          "id": "D",
          "text": "Posición púdica, equimosis, crujido articular y dolor intenso durante la marcha"
        },
        {
          "id": "E",
          "text": "Posición impúdica, aumento de volumen y dolor intenso durante la marcha"
        }
      ],
      "correcta": "B",
      "explicacion": "La alternativa correcta es la B porque la presentación clínica clásica de una fractura de cadera en el adulto mayor (grupo etario donde son más frecuentes) se caracteriza por:\n\n*   **Acortamiento del miembro afectado:** Esto se debe a la tracción de los músculos de la cadera y el muslo sobre el fragmento distal de la fractura.\n*   **Rotación externa del muslo:** La rotación externa es causada por la pérdida de la integridad ósea y la influencia de la gravedad y la tensión muscular, especialmente los rotadores externos de la cadera.\n*   **Abducción del muslo:** Puede presentarse levemente debido a la posición antiálgica que adopta el paciente.\n*   **Imposibilidad de caminar:** La fractura impide la carga de peso y el movimiento normal de la articulación de la cadera, generando dolor intenso e incapacidad funcional.\n\nEn las guías clínicas chilenas del MINSAL no hay una específica sobre fractura de cadera, pero sí se enfatiza la importancia de la evaluación geriátrica integral en pacientes adultos mayores, donde la detección y manejo de fracturas de cadera es fundamental para disminuir la morbimortalidad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.001"
    },
    {
      "stem": "¿Cuál de los siguientes fármacos se asocian a un mayor riesgo de caídas en el paciente anciano?:",
      "options": [
        {
          "id": "A",
          "text": "Atenolol"
        },
        {
          "id": "B",
          "text": "Aspirina"
        },
        {
          "id": "C",
          "text": "Atorvastatina"
        },
        {
          "id": "D",
          "text": "Amoxicilina"
        },
        {
          "id": "E",
          "text": "Metformina"
        }
      ],
      "correcta": "A",
      "explicacion": "El Atenolol, al ser un betabloqueante selectivo beta-1, es un fármaco que se asocia con un mayor riesgo de caídas en el paciente anciano debido a sus efectos cardiovasculares y, en menor medida, potenciales efectos en el sistema nervioso central. En la población geriátrica, la fisiología cardiovascular está alterada, con una respuesta barorrefleja más lenta y una menor reserva funcional. Los betabloqueantes reducen la frecuencia cardíaca y la contractilidad miocárdica, lo que puede precipitar o exacerbar la hipotensión ortostática (una caída significativa de la presión arterial al ponerse de pie), causando mareos, aturdimiento y síncope.\n\nEstos síntomas de hipotensión ortostática o bradicardia son directamente predisponentes a la pérdida de equilibrio y, consecuentemente, a las caídas. Además, aunque el Atenolol es hidrofílico y tiene una menor penetración en el sistema nervioso central en comparación con otros betabloqueantes más lipofílicos, aún puede causar efectos como fatiga, debilidad o ligera sedación en algunos individuos, lo que también contribuye a una marcha inestable y un mayor riesgo de caídas. La polifarmacia, común en el adulto mayor, incrementa este riesgo al interactuar con otros fármacos que también pueden afectar el equilibrio o la presión arterial.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.001"
    }
  ],
  "vignetteText": "Mujer de 82 años, con antecedente de hipertensión arterial y fibrilación auricular crónica tratada con atenolol y apixabán, tropieza con una alfombra en el pasillo de su casa y cae desde su propia altura golpeándose la región glútea derecha. Inmediatamente experimenta dolor inguinal intolerable que le impide ponerse de pie. Es traída en ambulancia a la urgencia. Al examen físico: la extremidad inferior derecha se encuentra notablemente acortada, con rotación externa marcada del muslo y pie apoyado sobre su borde lateral, y dolor exquisito a la palpación anterior de la ingle y movilización suave. No presenta déficit neurovascular distal. La radiografía de pelvis AP y cadera derecha muestra una fractura subcapital de cuello femoral desplazada (Garden IV)."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "trastornos, fractura")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2024 · Pregunta 63 · confianza 0.9
Viejito q consulta x miedo a caídas, caída hace 10 meses sin lesiones actualmente. Se constata atrofia leve de cuádriceps. Test tiempo en pararse y caminar en 14 (VN: <14 seg) test de cuanto dura parado en 1 pie de 3 seg. Conducta:
- A) Ejercicios multicomponente
- B) Fortalecimiento cuadriceps c.​ Caminata diaria
- D) Bastón
- E) Ejercicio aeróbico
- E) Observación clínica
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Ejercicios multicomponente** (opción **A**). El estudio de la hematuria sigue un orden secuencial: anamnesis y examen físico, sedimento más urocultivo, imagen, y cistoscopía De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [2] EUNACOM Julio 2019 · Pregunta 155 · confianza 0.97
Una paciente de 39 años es despedida de su trabajo y, a las pocas horas, presenta imposibilidad de realizar movimientos con ambas manos. Al examen físico tiene tono muscular y reflejos normales. Además, llama la atención la falta de concordancia entre el relato de los síntomas y la actitud de la paciente, que se ve muy tranquila con lo que sucede. El diagnóstico más probable es:
- A) Trastorno dismórfico corporal
- B) Trastorno conversivo
- C) Trastorno facticio
- D) Trastorno somatomorfo
- E) Trastorno disociativo
**Correcta: B**
Explicación del banco: Es un trastorno conversivo típico: síntomas neurológicos de inicio rápido y sin una causa orgánica que los explique. En estricto rigor sí es un trastorno somatomorfo (D), ya que los trastornos conversivos son un tipo de trastornos somatomorfos, pero la B es más específica.

### [3] EUNACOM Julio 2025 · Pregunta 70 · confianza 0.95
Paciente de 35 años sufre traumatismo en la región posterior del húmero. Al examen: no puede extender la muñeca ni los dedos (caída de muñeca). ¿Qué nervio fue lesionado?
- A) Nervio radial (en canal de torsión)
- B) Nervio cubital
- C) Nervio mediano
- D) Nervio musculocutáneo
- E) Nervio axilar
**Correcta: A**
Explicación del banco: Fractura de húmero + caída de muñeca (wrist drop) = lesión del nervio radial en el canal de torsión (surco espiral). Inerva extensores de muñeca y dedos (ECC, ECD, ELP).

### [4] EUNACOM Diciembre 2025 · Pregunta 35 · confianza 0.95
Un paciente de 23 años sufre una caída mientras jugaba fútbol, cayendo con el hombro derecho contra el piso y resultando en una luxación anterior de hombro derecho, la cual es conﬁrmada con radiograFas de hombro, las cuales descartan la presencia de fracturas. ¿Qué evaluación debe realizarse obligatoriamente en el examen Fsico antes de proceder con las maniobras de reducción?
- A) Buscar presencia de equimosis
- B) Buscar deformación en “charretera”
- C) Explorar la sensibilidad de la zona deltoidea
- D) Evaluar la impotencia funcional
- E) Evaluar crépito óseo
**Correcta: C**
Explicación del banco: La luxación anterior se asocia a lesión del nervio axilar o circunﬂejo, que inerva al deltoides (abducción del hombro) y la sensibilidad en la zona deltoidea. Se debe consignar su alteración antes de la reducción, para que no se culpe luego al médico de haberla causado durante la reducción. Las demás opciones ya han sido evaluadas mediante la clínica (la luxación Gene hombro “en charretera”, impotencia funcional) y la radiografía.

### [5] EUNACOM Agosto 2021 · Pregunta 99 · confianza 0.95
Un paciente de 26 años, sufre un accidente automovilístico de alta energía, como conductor. Llega a la urgencia entablillado y con hemodinamia estable. Destaca la extremidad inferior derecha en flexión y aducción, dolorosa, con imposibilidad de caminar. Se realiza radiografía anteroposterior de pelvis, que se muestra a continuación (fuente: radiopaedia): ¿Cuál es el diagnóstico más probable?
- A) Fractura de la cabeza femoral derecha
- B) Fractura de zona posterior del cotilo derecho
- C) Luxofractura posterior de cadera derecha
- D) Fractura de pelvis inestable
- E) Fractura extracapsular de cadera derecha
**Correcta: C**
Explicación del banco: Está en posición púdica, clásica de la luxación posterior de cadera; y la radiografía muestra la luxación posterior derecha. No queda claro el rasgo de fractura.

### [6] EUNACOM Agosto 2021 · Pregunta 12 · confianza 0.95
Una paciente de 28 años presenta un episodio de rápida instalación de marcada angustia y variados síntomas como disnea con “imposibilidad de sacar el aire”, vértigo, parestesias en las extremidades, imposibilidad de tragar, opresión en el pecho, náuseas, visión borrosa y miedo a morir. En las últimas 4 semanas ha presentado varios episodios similares, por lo que teme salir de su casa. Su examen físico es normal y los exámenes generales descartan patología orgánica. ¿Cuál es el tratamiento más adecuado para esta paciente?
- A) Amitriptilina 25 mg/día
- B) Sertralina 50 mg/día
- C) Risperidona 3 mg/día
- D) Clonazepam 2 mg/día
- E) Clorpromazina 300 mg/día
**Correcta: B**
Explicación del banco: Tiene crisis de pánico recurrentes, por lo que es un trastorno de angustia o trastorno de pánico. El miedo a salir de su casa probablemente sea porque es "con agorafobia". El tratamiento de los trastornos ansiosos suele ser con antidepresivos IRS. Las benzodiacepinas sirven como tratamiento sintomático, pero el IRS es el tratamiento principal.

### [7] EUNACOM Julio 2019 · Pregunta 13 · confianza 0.95
Un paciente de 32 años se lava las manos repetidamente durante el día. Al examen está lúcido, cooperador, pero angustiado. Refiere que una voz interior le ordena lavarse las manos y no puede desobedecerle. ¿Cuál es el fármaco de elección para iniciar el tratamiento?
- A) Litio
- B) Fluoxetina
- C) Olanzapina
- D) Carbamazepina
- E) Alprazolam
**Correcta: B**
Explicación del banco: Tiene un TOC, que, al igual que todos los trastornos ansiosos crónicos (TA, TAG, TEPT), se trata con antidepresivos (lo más importante), si bien también se dejan benzodiacepinas en dosis bajas. La "voz interior" no es una alucinación, mientras no la escuche directamente o la considere algo ajeno o externo a él.

### [8] EUNACOM Diciembre 2017 · Pregunta 100 · confianza 0.95
Un paciente sufre una caída a nivel, con golpe en el hombro derecho, evolucionando con dolor e impotencia funcional. Se realizan radiografías de hombro, una de las que se muestra a continuación: FOTO (Radiografía AP de hombro, con fractura del tercio medio de la clavícula derecha, con ligero desplazamiento, sin conminución) ¿Qué tipo de inmovilización es la más adecuada?
- A) Vendaje axial de hombro
- B) Vendaje en ocho
- C) Yeso Velpeau
- D) Yeso toracobraquial
- E) Cabestrillo
**Correcta: E**
Explicación del banco: , ¿B?. El cabestrillo y el vendaje en 8 son los más usados en las fracturas del tercio medio de clavícula. Sin embargo, también se pueden usar otros tipos de inmovilización, según la valoración por el especialista. El vendaje en 8 se asocia a mayores molestias, por compresión cutánea y del complejo neurovascular axilar, así que el cabestrillo suele ser lo más recomendado. De todos, modos, es una pregunta de especialista.

### [9] EUNACOM Diciembre 2018 · Pregunta 141 · confianza 0.92
Un paciente de 70 años, sufre una caída a nivel, con apoyo de la extremidad superior en extensión, contra el suelo. Evoluciona con dolor en la muñeca, que le impide realizar movimientos. Consulta al día siguiente, con la muñeca deformada en “dorso de tenedor” y presencia de equimosis en la zona palmar y en la zona dorsal. Presenta dolor a la compresión de la zona distal del radio. EL diagnóstico más probable es:
- A) Esguince de muñeca
- B) Fractura de la epífisis distal del radio
- C) Disyunción del extremo distal del radio
- D) Luxofractura de Monteggia
- E) Fractura de escafoides carpiano
**Correcta: B**
Explicación del banco: Diagnóstico: **Fractura de la epífisis distal del radio** (opción **B**). Es una fractura de muñeca clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [10] EUNACOM Diciembre 2025 · Pregunta 138 · confianza 0.9
Un paciente de 21 años sufre accidente en esquí con caída y torsión del tobillo derecho, evolucionando con dolor e impotencia funcional. Se solicita radiograFa de tobillo que se muestra a con8nuación: ¿Cuál es la conducta inicial más adecuada?
- A) Reposo con extremidad en elevación
- B) Reducción cerrada e inmovilización con valva de yeso
- C) Analgésicos y apoyo progresivo con mínima carga
- D) Vendaje compresivo
- E) Tracción e inmovilización con yeso de la extremidad
**Correcta: B**
Explicación del banco: Tiene una luxofractura de tobillo, cuyo manejo es quirúrgico. Sin embargo, el manejo inicial consiste en analgesia, reducción cerrada (bajo anestesia o sedación) e inmovilización transitoria, con valva de yeso abierta, para evitar un síndrome compartimental. Este mismo manejo aplica a otras fracturas desplazadas, mientras se espera la cirugía. Fuente imagen: Radiopaedia.

### [11] EUNACOM Enero 2023 · Pregunta 129 · confianza 0.9
Paciente con 1 año de alucinaciones visuales, pérdida de memoria progresiva, rigidez, hipocinesia y alteración de la marcha. ¿Diagnóstico más probable?
- A) Enfermedad de Parkinson con demencia
- B) Enfermedad de Alzheimer
- C) Demencia frontotemporal
- D) Demencia por cuerpos de Lewy
- E) Parálisis supranuclear progresiva
**Correcta: D**
Explicación del banco: Diagnóstico: **Demencia por cuerpos de Lewy** (opción **D**). Demencia por cuerpos de Lewy. Esta clase aborda el compromiso de conciencia, las apraxias, agnosias y los trastornos del lenguaje. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Julio 2019 · Pregunta 88 · confianza 0.9
Un paciente de 50 años presenta cefalea, náuseas, mareos y epigastralgia, de dos años de evolución. Cuenta con múltiples exámenes que descartan causa orgánica, sin embargo, él insiste en exigir más estudios. No se identifica ánimo de obtener alguna ganancia. El diagnóstico más probable es un trastorno:
- A) Depresivo mayo
- B) Delirante
- C) Obsesivo compulsivo
- D) De somatización
- E) Facticio
**Correcta: D**
Explicación del banco: Diagnóstico: **De somatización** (opción **D**). Tiene un T. de somatización clásico. Por no tener ánimo ganancial, no es facticio.. Los trastornos somatomorfos se caracterizan por síntomas físicos (somáticos) sin causa orgánica que los explique completamente, de causa psíquica (generalmente estrés). Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [13] EUNACOM Diciembre 2018 · Pregunta 50 · confianza 0.9
Una paciente de 80 años sufrió una caída a nivel, luego de la cual no pudo levantarse, presentando mucho dolor. Al examen físico presenta acortamiento de la extremidad inferior derecha, con ligera abducción y rotación externa, sin equimosis. ¿Cuál es el diagnóstico más probable?
- A) Esguince de cadera
- B) Fractura de cadera
- C) Luxación posterior de cadera
- D) Fractura de pelvis
- E) Fractura vertebral con lesión del plexo lumbar
**Correcta: B**
Explicación del banco: Diagnóstico: **Fractura de cadera** (opción **B**). Es una fractura de cadera clásica, con la posición impúdica.. La fractura de cadera es una fractura osteoporótica frecuente en adultos mayores con una mortalidad a dos años cercana al cincuenta por ciento. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [14] EUNACOM Julio 2015 · Pregunta 43 · confianza 0.9
Un paciente de 46 años presenta un accidente, resultando con una fractura de pelvis. Presenta dolor y salida de sangre fresca por la uretra. Además se palpa la próstata ascendida en el tacto rectal y no ha podido orinar. ¿Cuál es la conducta más adecuada?
- A) Pedir un TAC de abdomen y pelvis
- B) Solicitar resonancia magnética
- C) Realizar cistoscopía
- D) Instalar sonda Foley
- E) Instalar cistostomía
**Correcta: E**
Explicación del banco: Es una sección uretral. Está contraindicada la Sonda Foley y Nelaton. Se instala cistostomía. Se estudia con uretrocistografía retrógrada y no con los exámens que ahí aparecían. Se resuelve luego con cirugía.

### [15] EUNACOM Diciembre 2022 · Pregunta 131 · confianza 0.85
Una paciente de 62 años sufre una caída a nivel, sufriendo una fractura del extremo distal del radio izquierdo, la que es manejada ortopédicamente, con un yeso braquiopalmar. A las 5 horas, evoluciona con intenso dolor, EVA 10/10, que no responde a la analgesia y se asocia a dificultades para mover los dedos. Al examen físico, se objetivan dedos con llene capilar enlentecido. ¿Cuál es el diagnóstico más probable?
- A) Síndrome de dolor locorregional complejo
- B) Lesión de la arteria radial
- C) Trombosis venosa profunda
- D) Compresión del nervio mediano
- E) Síndrome compartimental
**Correcta: E**
Explicación del banco: Diagnóstico: **Síndrome compartimental** (opción **E**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [16] EUNACOM Agosto 2021 · Pregunta 61 · confianza 0.85
Un paciente de 24 años sufre un accidente de tránsito a alta velocidad. Ingresa adolorido, con sangre fresca por uretra. Está en buenas condiciones, con estabilidad hemodinámica y sin signos de fracturas en el examen físico. La tomografía axial computada de tórax abdomen y pelvis muestra fractura de pelvis no desplazada, vejiga distendida, sin líquido libre peritoneal. ¿Cuál es el examen más adecuado para proseguir el estudio?
- A) Pielografía de eliminación
- B) UroTAC
- C) Uretrocistografía retrógrada
- D) Ecotomografía pélvica
- E) Resonancia magnética nuclear de pelvis
**Correcta: C**
Explicación del banco: La sospecha es una sección uretral, por lo que se contraindica la sonda Foley, se estudia con UCG retrógrada, se maneja con cistostomía suprapúbica y, además, con cirugía de reparación uretral.

### [17] EUNACOM Julio 2019 · Pregunta 103 · confianza 0.85
Una paciente de 31 años, embarazada de 3 meses, presenta angustia y temor, que aparece al estar en presencia de aglomeraciones de personas, especialmente en la calle, sintiéndose atrapada y ahogada en esas situaciones. Refiere síntomas similares al ir al supermercado y al tener que cruzar puentes muy largos, por lo que evita exponerse a esto y ha salido menos de su casa. ¿Cuál es el tratamiento de elección?
- A) Diazepam
- B) Citalopram
- C) Clorpromazina
- D) Risperidona
- E) Mirtazapina
**Correcta: B**
Explicación del banco: El diagnóstico es una agorafobia. Se trata con antidepresivos IRS, al igual que todos los trastornos ansiosos crónicos de importancia. En el embarazo se pueden usar la sertralina, la fluoxetina y el citalopram. Las benzodiacepinas se intentan evitar en el embarazo, pero si tuviese síntomas demasiado intensos, se podría dejar una dosis bajas de alprazolam.

### [18] EUNACOM Diciembre 2019 · Pregunta 90 · confianza 0.85
Un paciente de 42 años sufre un accidente automovilístico, resultado con múltiples traumatismos. Al examen físico tiene movilidad de las extremidades inferiores, sin signos de fractura y examen genital con uretrorragia. Las radiografías confirman una fractura de pelvis estable. ¿Cuál es el examen más adecuado para proseguir el estudio?
- A) Pielografía de eliminación endovenosa
- B) Uretrocistografía retrógrada
- C) Cistoscopía
- D) TAC de pelvis
- E) Resonancia magnética nuclear de pelvis RECONSTRUCCIÓN EUNACOM DICIEMBRE 2019 Dr. Guillermo Guevara Aliaga SEGUNDA PARTE Pregunta 181) ¿Cuáles de las siguientes afirmaciones son verdadera?
**Correcta: B**
Explicación del banco: Tiene una sección uretral, la que se estudia con UCG y se trata con cirugía. Recordar que está contraindicada la sonda (también la cistoscopía) y si hay globo vesical se maneja con cistostomía suprapúbica. Segunda parte

### [19] EUNACOM Diciembre 2018 · Pregunta 51 · confianza 0.85
Un paciente de 28 años sufre un accidente de tránsito de alta intensidad, por lo que es trasladado al servicio de urgencia. En la evaluación inicial tiene presión arterial de 90/50 mmHg, frecuencia cardíaca 115x’ y se aprecia adolorido. Al examen, además, tiene dolor intenso al comprimir la zona iliaca y púbica y al realizar movimientos de rotación de la pelvis. ¿Cuál es la conducta inicial más adecuada?
- A) Instalar sonda Foley
- B) Realizar laparotomía exploradora
- C) Realizar radiografía AP de pelvis
- D) Instalar sábana pélvica
- E) Solicitar TAC de pelvis
**Correcta: D**
Explicación del banco: Tiene una probable fractura de pelvis, pero por tener compromiso hemodinámico, lo más urgente es poner una vía venosa, administrar ﬂuidos y estabilizar la pelvis (por ejemplo con una sábana pélvica).

### [20] EUNACOM Julio 2016 · Pregunta 26 · confianza 0.85
Un paciente de 30 años sufre una caída de altura, desde 15 metros, golpéandose contra el suelo. Al examen físico está orientado, con FC: 80x' y PA: 120/80 mmHg, con mucho dolor a la compresión de la pelvis, mayor a izquierda. Se solicita una radiografía de pelvis AP, que se muestra a continuación: ¿Cuál es la conducta inicial más adecuada?
- A) Pasar una sonda Foley
- B) Indicar reposo en hamaca
- C) Administrar antibióticos
- D) Realizar cirugía
- E) Solicitar ecografía de abdomen y pelvis
**Correcta: B**
Explicación del banco: Lo primero frente a una fractura de pelvis, y frente a un politraumatizado en general, es hacer el ABC y en este caso, instalar vías venosas periféricas y aportar volumen. Luego, lo principal es reducir de manera externa la pelvis, de modo de evitar o al menos limitar las hemorragias pélvicas, lo que se puede hacer con un tutor externo y si no se tiene, son una férula neumática o por último con una sábana o hamaca pélvica (por eso elegimos esta respuesta, aunque la redacción no es la mejor). Una opción razonable era la cirugía de reducción, pero al preguntar la conducta inicial, parecería que la respuesta es otra. Respecto a la sonda Foley, es posible ponerla, pero la indicación es la retención urinaria y en la fractura de pelvis, hay riesgo de rotura uretral, lo que contraindica la Sonda Foley, hasta no haberla descartado con una uretrocistografía.

### [21] EUNACOM Julio 2016 · Pregunta 65 · confianza 0.85
Una paciente de 65 años sufre caída a nivel, apoyando la mano derecha contra el suelo, en extensión de la extremidad. Evoluciona con dolor intenso en la muñeca, que le impide realizar movimientos. Al examen físico se aprecia deformidad de la muñeca y dolor epicrítico a la presión del radio distal. El diagnóstico más probable es:
- A) Fractura de escafoides
- B) Fractura de epifisis distal del radio
- C) Disyunción-fractura de radio distal
- D) Luxofractura de Monteggia
- E) Luxación de cúpula radial
**Correcta: B**
Explicación del banco: Es una mala pregunta: no hay duda de que es una fractura de radio distal, pero la clínica es insuficiente para distinguir entre la fractura de epífisis y la disyunción fractura. Sin embargo, “disyunción fractura” o “luxofractura” se usa más para las fracturas de Monteggia y Galeazzi, que no corresponden a este cuadro, por lo que dejaremos la B como correcta. Sin embargo, la fractura no necesariamente es de la epífisis y puede ser de la metáfisis por ejemplo, así que definitivamente es una mala pregunta. Dolor epicrítico es sinónimo de dolor somático o superficial, en contraposición a dolor profundo o visceral.

### [22] EUNACOM Julio 2015 · Pregunta 52 · confianza 0.85
Un paciente de 27 años sufre una fractura cerrada de antebrazo, que es manejada con un valva de yeso braquiopalmar. A las 5 horas presenta aumento del dolor y edema de la extremidad. El diagnóstico más probable es:
- A) Trombosis venosa profunda
- B) Síndrome compartimental
- C) Distrofia simpático refleja
- D) Alergia al yeso
- E) Síndrome de túne carpiano agudo
**Correcta: B**
Explicación del banco: Por el corto tiempo de evolución y el dolor es síndrome compartimental. Además es clásico de las Fx de antebrazo. Falta información

### [23] EUNACOM Julio 2015 · Pregunta 70 · confianza 0.85
Un paciente sufre una fractura de muñeca, en relación a un accidente laboral. Presenta con mucho dolor, a pesar de haber evolucionado bien y de llevar mucho tiempo desde el accidente. Tiene antecedente de cuadros previos similares, con dolores crónicos y difíciles de tratar. El diagnóstico más probable es:
- A) Trastorno somatomorfo
- B) Trastorno conversico
- C) Trastorno de estrés postraumático
- D) Depresión reactiva
- E) Trastorno facticio
**Correcta: A**
Explicación del banco: Es un trastorno somatomorfo por dolor (no por somatización, ni hipocondriaco). No hay información para pensar que sea facticio (intencional para ganar cuidados y afecto) ni simulación (intencional, para ganar dinero o pensiones).

### [24] EUNACOM Julio 2015 · Pregunta 150 · confianza 0.85
Un lactante de 6 meses es traído por la madre, porque presenta epistaxis. La madre, de 17 años, refiere que se cayó de la cama. Al examen está poco reactivo y presenta múltiples equimosis, algunas de color morado y otras de color verde. Además tiene dos fracturas costales posteriores. Su TAC de cerebro muestra un hematoma subdural. ¿Qué examen es más adecuado para proseguir con el estudio de este paciente?
- A) PTH y calcio
- B) Tiempos de coagulación
- C) Exáenes para descartar osteogénesis imperfecta
- D) Fondo de ojo
- E) Ecografía abdominal
**Correcta: D**
Explicación del banco: Sospechar maltrato infantil. El fondo de ojo muestra las microhemorragias en el síndrome del niño sacudido (Shaking baby). Pero en realidad el diagnóstico ya está hecho y lo más urgente es operar el hematoma subdural. Pregunta mala.

### [25] EUNACOM Diciembre 2024 · Pregunta 36 · confianza 0.8
Paciente masculino con consumo OH crónico, pierde su trabajo, se fractura tobillo y se hospitaliza, pide alta voluntaria para ir a tomar cerveza, qué conducta define mejor la “adicción” x OH:
- A) La conducta durante la hospitalización
- B) Pérdida de trabajo
- C) Embriaguez
- D) La frecuencia del consumo
- E) Laparotomía exploratoria
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **La conducta durante la hospitalización** (opción **A**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención.
