# CLASE neuro-24 · Neurologia 10.24: Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor

Escribe `classes/lessons/neuro-24.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-24" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-21: Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente
- neuro-22: Neurologia 10.22: Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)
- neuro-23: Neurologia 10.23: Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-24",
  "classId": "neuro-24",
  "tier": 2,
  "blockNum": 5,
  "blockName": "Geriatría Clínica y Grandes Síndromes Geriátricos",
  "topicLabel": "10.24",
  "title": "Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor",
  "perfilCode": "1.07.3.007",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Control ambulatorio",
  "ges": "Sin garantía GES directa · Evaluación integral en APS, control de multimorbilidad en el Programa del Adulto Mayor y cribado preventivo en el EMPAM.",
  "reconstrucciones": "EUNACOM Julio 2019 (Q#127) · EUNACOM Diciembre 2018 (Q#121) · EUNACOM Julio 2016 (Q#9 y Q#160) · EUNACOM Julio 2015 (Q#108)",
  "frecuencia": "Alta rentabilidad · Prescripción prudente en geriatría, uroginecología geriátrica y farmacovigilancia",
  "algoTitle": "Algoritmo de Revisión Sistemática de Polifarmacia y Manejo Escalonado de la Incontinencia Urinaria Geriátrica",
  "diagram": {
    "title": "Algoritmo de Conciliación Farmacológica e Incontinencia Urinaria",
    "svg": "<svg viewBox=\"0 0 620 433\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Adulto Mayor con Polifarmacia (≥ 5 Fármacos) o Incontinencia Urinaria</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Revisión periódica de la bolsa de medicamentos en</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">cada control de salud o transición asistencial</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Pesquisa de Prescripción Potencialmente Inapropiada (Criterios Beers / STOPP)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Identificar benzodiacepinas, anticolinérgicos,</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">AINEs crónicos y sulfonilureas de acción prolongada</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Fármacos Inapropiados o Sospecha de Cascada Terapéutica?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Aplicación de criterios Beers 2023 / STOPP-START v3</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">Fármacos Inapropiados Detectados</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">Tratamiento Médico Optimizado</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Desprescripción Estructurada y Segura</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Retiro gradual de BZD · Suspender glibenclamida si HbA1c &lt; 8%</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Suspender AINEs en HTA/IC · Ajustar donepecilo si diarrea</text>\n  <rect class=\"dec\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Dirigida de Incontinencia Urinaria</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Descartar causas transitorias (DIAPPERS)</text>\n  <text class=\"sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Orina completa + Urocultivo · Medir residuo postmiccional</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Clasificación de Incontinencia Urinaria Crónica</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Urgencia (vejiga hiperactiva): escapes imperiosos</text>\n  <text class=\"accS\" x=\"310\" y=\"341\" text-anchor=\"middle\">Esfuerzo: maniobras Valsalva · Rebose: goteo con RPM &gt; 200 mL</text>\n  <path class=\"ln\" d=\"M310,353 V375\"/>\n  <rect class=\"acc\" x=\"100\" y=\"375\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"390\" text-anchor=\"middle\" font-weight=\"700\">Manejo Terapéutico Escalonado Racional</text>\n  <text class=\"accS\" x=\"310\" y=\"402\" text-anchor=\"middle\">1ª Línea: Medidas conductuales y ejercicios de Kegel</text>\n  <text class=\"accS\" x=\"310\" y=\"413\" text-anchor=\"middle\">2ª Línea Urgencia: Anticolinérgicos (Oxibutinina) o Mirabegrón (agonista β3)</text>\n</svg>"
  },
  "contexto": "La polifarmacia (consumo habitual de ≥ 5 medicamentos) y la prescripción potencialmente inapropiada representan una de las mayores amenazas para la salud del adulto mayor. Los cambios farmacocinéticos y farmacodinámicos del envejecimiento aumentan drásticamente la susceptibilidad a reacciones adversas medicamentosas (RAM), interacciones farmacológicas y cascadas de prescripción. Los Criterios de Beers (AGS 2023) y STOPP/START proporcionan directrices explícitas para desprescribir fármacos de alto riesgo como benzodiacepinas, AINEs, anticolinérgicos y sulfonilureas prolongadas. Paralelamente, la incontinencia urinaria afecta a un tercio de las personas mayores, deteriorando la calidad de vida y precipitando institucionalización; su manejo escalonado exige descartar causas transitorias y fármacos desencadenantes antes de iniciar terapias específicas.",
  "contentSections": [
    {
      "subhead": "1. Farmacocinética, Farmacodinámica del Envejecimiento y Cascada de Prescripción",
      "paragraphs": [
        "El envejecimiento fisiológico altera profundamente los parámetros que rigen la biodisponibilidad y acción de los medicamentos:",
        "• <strong>Cambios Farmacocinéticos:</strong> 1) <em>Composición corporal:</em> Disminuye el agua corporal total (menor volumen de distribución para fármacos hidrosolubles como digoxina, litio o alcohol, aumentando su concentración plasmática máxima) y aumenta la proporción de grasa corporal (mayor volumen de distribución para fármacos liposolubles como diazepam y benzodiacepinas, prolongando sustantivamente su vida media de eliminación de 24 a más de 72 horas con efecto sedante acumulativo); 2) <em>Metabolismo hepático:</em> Disminución de la masa hepática y del flujo sanguíneo esplácnico con declive de las reacciones oxidativas del citocromo P450 (fase I), lo que prolonga la vida media de fármacos con aclaramiento hepático de primer paso; y 3) <em>Eliminación renal:</em> Reducción progresiva del filtrado glomerular (declive de ~1 mL/min/año a partir de los 40 años). <em>Regla de Oro:</em> Una creatinina sérica en rango normal (0.8-1.0 mg/dL) NO descarta insuficiencia renal en un anciano sarcopénico; siempre debe calcularse el Clearance de Creatinina estimado mediante la fórmula de Cockcroft-Gault para ajustar fármacos de eliminación renal estrecha.",
        "• <strong>Cambios Farmacodinámicos:</strong> Aumento de la sensibilidad de los receptores cerebrales a sedantes y opioides (mayor depresión del SNC a dosis convencionales) y disminución de la sensibilidad barorrefleja y de los receptores beta-adrenérgicos (mayor propensión a hipotensión ortostática ante antihipertensivos).",
        "• <strong>Cascada de Prescripción:</strong> Fenómeno iatrogénico en el cual el efecto adverso de un medicamento se interpreta erróneamente como una nueva condición patológica, lo que lleva a la prescripción de un segundo fármaco para tratar el síntoma provocado por el primero. Ejemplos clásicos de examen: amlodipino produce edema maleolar -&gt; se indica furosemida; AINEs elevan la presión arterial -&gt; se agrega un segundo antihipertensivo; donepecilo causa diarrea e incontinencia de urgencia colinérgica -&gt; se indica oxibutinina anticolinérgica (véase Algoritmo 10.24)."
      ]
    },
    {
      "subhead": "2. Criterios de Beers (AGS 2023) y STOPP/START: Fármacos de Alto Riesgo",
      "paragraphs": [
        "Los <strong>Criterios de Beers de la American Geriatrics Society (AGS 2023)</strong> y los criterios europeos <strong>STOPP/START (Screening Tool of Older Persons' Prescriptions / Screening Tool to Alert to Right Treatment, versión 3)</strong> identifican medicamentos cuyos riesgos superan sus beneficios en adultos mayores (véase Tabla 10.24: Fármacos de Alto Riesgo e Incontinencia Urinaria):",
        "• <strong>Benzodiacepinas y Sedantes Z (Zolpidem, Zopiclona):</strong> Deben evitarse siempre. Multiplican por cuatro el riesgo de caídas, fracturas de cadera, deterioro cognitivo, delirium y accidentes de tránsito. En el insomnio geriátrico, la primera línea son las medidas no farmacológicas de higiene del sueño.",
        "• <strong>Anticolinérgicos y Antihistamínicos de 1ª Generación:</strong> Clorfenamina, hidroxicina, amitriptilina, pargeverina, ciclobenzaprina. Bloquean los receptores muscarínicos periféricos y centrales, provocando boca seca, estreñimiento severo, retención urinaria aguda, visión borrosa, confusión y agravamiento del deterioro cognitivo.",
        "• <strong>Antiinflamatorios No Esteroidales (AINEs):</strong> Ibuprofeno, ketorolaco, diclofenaco, naproxeno. Su uso crónico está formalmente contraindicado por inducir hemorragia digestiva alta, falla renal aguda por vasoconstricción de la arteriola aferente, empeoramiento de hipertensión arterial y descompensación de insuficiencia cardíaca por retención hidrosalina. El analgésico de primera línea es el Paracetamol; en dolor osteoarticular refractario con HTA o falla cardíaca, se prefiere titular opioides débiles (Tramadol) antes que AINEs orales.",
        "• <strong>Sulfonilureas de Acción Prolongada (Glibenclamida):</strong> <em>Regla de Oro en Diabetes Geriátrica:</em> Presenta un riesgo inaceptable de hipoglicemia severa y prolongada por acumulación de metabolitos activos. En mayores de 75 años, las metas de hemoglobina glicosilada son más laxas (HbA1c &lt; 8.0-8.5%). Si un adulto mayor en tratamiento con glibenclamida presenta una HbA1c &lt; 7.0-7.5% o normal, <strong>la conducta mandatoria e inmediata es suspender la glibenclamida</strong> para erradicar el riesgo de hipoglicemias potencialmente fatales."
      ]
    },
    {
      "subhead": "3. Incontinencia Urinaria en la Persona Mayor: Fisiopatología y Clasificación",
      "paragraphs": [
        "La incontinencia urinaria es la pérdida involuntaria de orina demostrable objetivamente que condiciona un problema social e higiénico. Afecta al 30-50% de las mujeres mayores y a más del 50% de los pacientes institucionalizados.",
        "<strong>Incontinencia Urinaria Transitoria (Causas Reversibles - Mnemotecnia DIAPPERS):</strong>",
        "• <strong>D:</strong> Delirium / estado confusional agudo.",
        "• <strong>I:</strong> Infección del tracto urinario (ITU sintomática).",
        "• <strong>A:</strong> Atrofia urogenital (vaginitis/uretritis atrófica por hipoestrogenismo).",
        "• <strong>P:</strong> Psicológica (depresión severa con abandono del autocuidado).",
        "• <strong>P:</strong> Farmacológica (diuréticos potentes, anticolinérgicos, sedantes, calcioantagonistas).",
        "• <strong>E:</strong> Exceso de diuresis (hiperglicemia descompensada, hipercalcemia, sobrecarga hídrica).",
        "• <strong>R:</strong> Restricción de la movilidad (artrosis severa, postración).",
        "• <strong>S:</strong> Retención fecal (impactación fecal / fecaloma que comprime la base vesical).",
        "<strong>Incontinencia Urinaria Crónica o Establecida</strong> (véase Tabla de Gravedad 10.24: Diagnóstico Diferencial de Incontinencia Urinaria):",
        "• <strong>1. Incontinencia de Urgencia (Vejiga Hiperactiva \"Húmeda\"):</strong> Pérdida involuntaria de orina precedida inmediatamente por un deseo miccional imperioso, súbito e incontrolable (\"no alcanzo a llegar al baño\"). Fisiopatología: contracciones involuntarias no inhibidas del músculo detrusor durante la fase de llenado vesical. Es el tipo más frecuente en personas mayores de ambos sexos.",
        "• <strong>2. Incontinencia de Esfuerzo (Estrés):</strong> Pérdida involuntaria de pequeñas cantidades de orina sincronizada con maniobras que aumentan la presión intraabdominal (toser, estornudar, reírse, levantar peso o agacharse). Fisiopatología: debilidad del piso pélvico e hipermovilidad uretral (por multiparidad y déficit estrogénico) o incompetencia del esfínter uretral interno.",
        "• <strong>3. Incontinencia por Rebose (Overflow):</strong> Pérdida involuntaria por goteo continuo o intermitente asociada a una vejiga sobredistendida crónicamente con incapacidad de vaciamiento completo. Fisiopatología: obstrucción mecánica del tracto de salida (hiperplasia prostática benigna severa, estenosis uretral) o vejiga acontráctil hipoactiva (neuropatía diabética, lesión medular sacra, fármacos anticolinérgicos). Se confirma por un <strong>Residuo Postmiccional (RPM) elevado &gt; 150-200 mL</strong> cuantificado por ecografía vesical o cateterismo.",
        "• <strong>4. Incontinencia Funcional:</strong> Pérdida de orina debida exclusivamente a limitaciones físicas (inmovilidad severa, dolor osteoarticular) o cognitivas (demencia avanzada) que impiden al paciente acceder a tiempo al inodoro, con tracto urinario fisiológicamente intacto."
      ]
    },
    {
      "subhead": "4. Abordaje Diagnóstico y Tratamiento Escalonado de la Incontinencia",
      "paragraphs": [
        "El estudio diagnóstico inicial incluye: anamnesis dirigida (diario miccional de 3 días), examen físico ginecológico y rectal (evaluar prolapsos genitales, atrofia de mucosa, tono del esfínter anal y volumen prostático), sedimento de orina y urocultivo (para descartar infección urinaria activa) y <strong>medición ecográfica del residuo postmiccional (RPM)</strong>.",
        "El tratamiento sigue un esquema escalonado riguroso:",
        "• <strong>Primera Línea Universal (No Farmacológica):</strong> Modificaciones del estilo de vida (control de peso, evitar irritantes vesicales como café, mate, té y alcohol; restringir ingesta hídrica nocturna), entrenamiento vesical con micciones programadas cada 2 a 3 horas y <strong>ejercicios de fortalecimiento muscular del suelo pélvico (ejercicios de Kegel)</strong> con kinesioterapeuta especializado.",
        "• <strong>Segunda Línea en Incontinencia de Urgencia:</strong> Farmacoterapia relajante del detrusor:",
        "  - <em>Fármacos Antimuscarínicos / Anticolinérgicos:</em> <strong>Oxibutinina</strong> (2.5 a 5 mg c/8-12 h), Tolterodina o Solifenacina. Bloquean los receptores muscarínicos M2 y M3 de la vejiga, inhibiendo las contracciones involuntarias. <em>Precaución crítica en geriatría:</em> sus efectos anticolinérgicos sistémicos pueden desencadenar boca seca, constipación, retención urinaria aguda y deterioro cognitivo o delirium en pacientes frágiles.",
        "  - <em>Agonistas Adrenérgicos Beta-3:</em> <strong>Mirabegrón</strong> (25 a 50 mg VO al día). Estimula los receptores β3 del detrusor promoviendo su relajación durante el llenado vesical. Presenta la inmensa ventaja de <strong>carecer de efectos adversos anticolinérgicos centrales</strong>, siendo el fármaco de elección en pacientes mayores con deterioro cognitivo o riesgo de delirium. Monitorear presión arterial (puede inducir hipertensión).",
        "• <strong>Manejo de la Incontinencia de Esfuerzo:</strong> Ejercicios de Kegel; en mujeres postmenopáusicas con atrofia urogenital se asocia <em>estrógeno tópico vaginal</em> (promueve engrosamiento epitelial y tono vascular periuretral). Si fracasa la terapia médica, la opción definitiva es la cirugía uroginecológica con cabestrillos mediouretrales libres de tensión (mallas TVT o TOT).",
        "• <strong>Manejo de la Incontinencia por Rebose:</strong> Si es obstructiva por HPB, desobstrucción médica con alfa-bloqueadores (Tamsulosina) o resección transuretral de próstata (RTU); si la vejiga es acontráctil, cateterismo vesical limpio intermitente. <em>Regla de Oro:</em> Los fármacos anticolinérgicos están formalmente CONTRAINDICADOS en la incontinencia por rebose, pues abolen la escasa contractilidad del detrusor y precipitan un globo vesical masivo."
      ]
    }
  ],
  "table": {
    "title": "Medicamentos de Alto Riesgo según Criterios de Beers / STOPP y Diagnóstico Diferencial de la Incontinencia Urinaria Geriátrica",
    "headers": [
      "Fármaco / Síndrome",
      "Riesgo Geriátrico Principal (Beers/STOPP)",
      "Mecanismo Fisiopatológico Adverso",
      "Recomendación Clínica y Alternativa Segura"
    ],
    "rows": [
      [
        "Benzodiacepinas (Diazepam, Lorazepam, Clonazepam)",
        "Aumento de caídas, fracturas de cadera, delirium y sedación residual diurna",
        "Semivida prolongada por aumento de grasa corporal y sensibilidad GABAérgica aumentada",
        "EVITAR siempre · Retiro gradual y pautado; higiene del sueño no farmacológica"
      ],
      [
        "AINEs (Ibuprofeno, Diclofenaco, Ketorolaco, Naproxeno)",
        "Hemorragia digestiva alta, falla renal aguda, hipertensión arterial y descompensación IC",
        "Inhibición de COX-1 gástrica y de prostaglandinas vasodilatadoras renales",
        "EVITAR uso crónico · Analgesia de 1ª línea: Paracetamol (hasta 3 g/d); 2ª línea: Tramadol"
      ],
      [
        "Sulfonilureas Prolongadas (Glibenclamida)",
        "Hipoglicemia severa, prolongada e inadvertida con daño neurológico",
        "Aclaramiento renal disminuido y acumulación de metabolitos activos hipoglicemiantes",
        "EVITAR en ancianos · Suspender si HbA1c < 8%; preferir Metformina o iDPP-4"
      ],
      [
        "Anticolinérgicos (Clorfenamina, Pargeverina, Amitriptilina)",
        "Constipación, retención urinaria aguda, boca seca, glaucoma agudo y delirium",
        "Bloqueo competitivo no selectivo de receptores muscarínicos centrales y periféricos",
        "EVITAR · En alergias usar antihistamínicos de 2ª generación (Loratadina/Cetirizina)"
      ],
      [
        "Donepecilo / Anticolinesterásicos",
        "Diarrea motora, incontinencia de urgencia, bradicardia sinusal y síncope",
        "Exceso de estimulación colinérgica sobre receptores muscarínicos digestivos y vesicales",
        "Reconocer como efecto adverso colinérgico; reducir dosis o retirar en vez de agregar oxibutinina"
      ],
      [
        "Incontinencia de Urgencia",
        "Pérdida involuntaria precedida de deseo imperioso súbito (\"no llego al baño\")",
        "Hiperactividad no inhibida del músculo detrusor durante el llenado vesical",
        "1ª línea: Ejercicios de Kegel y micción programada; 2ª línea: Oxibutinina o Mirabegrón"
      ],
      [
        "Incontinencia de Esfuerzo",
        "Pérdida en gotas sincronizada con tos, risa, estornudos o carga de peso",
        "Debilidad de la musculatura del suelo pélvico e hipermovilidad de la uretra",
        "Ejercicios de Kegel y kinesioterapia de piso pélvico; estrógenos tópicos; mallas TVT/TOT"
      ],
      [
        "Incontinencia por Rebose",
        "Pérdida por goteo continuo asociada a residuo postmiccional elevado (> 200 mL)",
        "Obstrucción mecánica uretral (HPB) o vejiga hipoactiva acontráctil (neuropatía)",
        "Descompresión o alfa-bloqueadores; CONTRAINDICADOS los anticolinérgicos"
      ]
    ]
  },
  "severityTable": {
    "title": "Diagnóstico Diferencial y Abordaje Terapéutico de los Tipos de Incontinencia Urinaria Crónica en la Persona Mayor",
    "headers": [
      "Tipo de Incontinencia",
      "Mecanismo Fisiopatológico",
      "Síntomas Clínicos Cardinales",
      "Residuo Postmiccional (RPM)",
      "Tratamiento de 1ª y 2ª Línea"
    ],
    "rows": [
      [
        "Incontinencia de Urgencia (Vejiga Hiperactiva)",
        "Contracciones involuntarias del músculo detrusor mediadas por receptores M2/M3",
        "Deseo súbito incontrolable de orinar con escape abundante antes de llegar al baño; nicturia",
        "Normal (< 50-100 mL)",
        "1ª Línea: Reentrenamiento vesical + Kegel · 2ª Línea: Mirabegrón (50 mg/d) u Oxibutinina"
      ],
      [
        "Incontinencia de Esfuerzo (Estrés)",
        "Incompetencia del soporte uretral y debilidad del suelo pélvico ante presión intraabdominal",
        "Escapes de pequeño volumen coincidentes con tos, estornudo, risa o esfuerzos físicos",
        "Normal (< 50 mL)",
        "1ª Línea: Ejercicios de suelo pélvico (Kegel) + estrógenos tópicos · 2ª Línea: Cirugía TVT/TOT"
      ],
      [
        "Incontinencia por Rebose (Overflow)",
        "Sobredistensión vesical crónica por obstrucción de salida o detrusor acontráctil",
        "Goteo continuo o intermitente diurno y nocturno; chorro débil; sensación de vaciado incompleto",
        "Significativamente ELEVADO (> 150 - 200 mL)",
        "Desobstrucción (Tamsulosina / RTU) o cateterismo limpio intermitente · PROSCRITOS antimuscarínicos"
      ],
      [
        "Incontinencia Funcional",
        "Tracto genitourinario anatómicamente normal; barrera física o cognitiva para llegar al inodoro",
        "Pérdida de orina en volumen normal asociada a retraso locomotor o desorientación",
        "Normal",
        "Adaptaciones arquitectónicas del hogar (orinal/silla comodo cerca), micciones regladas c/2-3 h"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 82 años, con antecedente de hipertensión arterial, artrosis de rodilla bilateral e insomnio crónico, acude a la consulta médica ambulatoria. Su lista de medicamentos habituales incluye: losartán 50 mg c/12 h, clonazepam 1 mg en la noche, paracetamol 1 g c/8 h, ibuprofeno 400 mg c/8 h (agregado por dolor articular hace 3 semanas) y clorfenamina 4 mg en la noche \"para dormir mejor\". Trae exámenes recientes solicitados por su consultorio: creatinina 1.6 mg/dL (basal 0.9 mg/dL hace 4 meses), BUN 38 mg/dL, potasio 5.2 mEq/L, PA 165/95 mmHg. Además, su hija refiere que la paciente ha presentado dos episodios de caídas nocturnas al levantarse al baño y se le escapan gotas de orina cuando tose o se ríe.",
    "conducta": "Este caso clínico representa el ejemplo prototípico de polifarmacia y prescripción de fármacos de alto riesgo según los Criterios de Beers: 1) El uso de AINEs (ibuprofeno) en una paciente hipertensa mayor gatilló un deterioro agudo de la función renal (falla renal aguda prerrenal/hemodinámica por vasoconstricción de la arteriola aferente con alza de creatinina de 0.9 a 1.6 mg/dL, hiperkalemia y descompensación hipertensiva); 2) El uso concomitante de una benzodiacepina (clonazepam) y un antihistamínico anticolinérgico de 1ª generación (clorfenamina) genera una carga sedante y anticolinérgica extrema, responsable directa de las caídas nocturnas y de riesgo inminente de delirium; 3) La incontinencia urinaria que presenta coincide con maniobras de Valsalva (tos y risa), diagnosticando una Incontinencia de Esfuerzo. La conducta prioritaria es suspender de inmediato el ibuprofeno y la clorfenamina, planificar un retiro gradual supervisado del clonazepam, optimizar el paracetamol como analgésico de base y enseñar ejercicios de Kegel para el suelo pélvico."
  },
  "explicacion": "Este caso clínico representa el ejemplo prototípico de polifarmacia y prescripción de fármacos de alto riesgo según los Criterios de Beers: 1) El uso de AINEs (ibuprofeno) en una paciente hipertensa mayor gatilló un deterioro agudo de la función renal (falla renal aguda prerrenal/hemodinámica por vasoconstricción de la arteriola aferente con alza de creatinina de 0.9 a 1.6 mg/dL, hiperkalemia y descompensación hipertensiva); 2) El uso concomitante de una benzodiacepina (clonazepam) y un antihistamínico anticolinérgico de 1ª generación (clorfenamina) genera una carga sedante y anticolinérgica extrema, responsable directa de las caídas nocturnas y de riesgo inminente de delirium; 3) La incontinencia urinaria que presenta coincide con maniobras de Valsalva (tos y risa), diagnosticando una Incontinencia de Esfuerzo. La conducta prioritaria es suspender de inmediato el ibuprofeno y la clorfenamina, planificar un retiro gradual supervisado del clonazepam, optimizar el paracetamol como analgésico de base y enseñar ejercicios de Kegel para el suelo pélvico.",
  "keyPoints": [
    "La polifarmacia (≥ 5 fármacos) y los cambios farmacocinéticos (aumento de grasa corporal, declive renal) multiplican el riesgo de RAM y caídas.",
    "Los Criterios de Beers y STOPP contraindican benzodiacepinas, anticolinérgicos potentes y AINEs crónicos en la persona mayor.",
    "En adultos mayores diabéticos (> 75 años), la glibenclamida debe suspenderse de inmediato ante valores de HbA1c < 8% por riesgo de hipoglicemia severa.",
    "La incontinencia de urgencia (vejiga hiperactiva) se maneja con ejercicios vesicales y antimuscarínicos (Oxibutinina) o Mirabegrón (preferido si hay riesgo cognitivo).",
    "La incontinencia por rebose se diagnostica por un residuo postmiccional elevado (> 150-200 mL); los anticolinérgicos están formalmente contraindicados en este subtipo."
  ],
  "questions": [
    {
      "stem": "¿Cuál de las siguientes lesiones oculares no requieren manejo estricto por\nespecialista?",
      "options": [
        {
          "id": "A",
          "text": "Trauma ocular con discoria"
        },
        {
          "id": "B",
          "text": "Trauma ocular con hemorragia subconjuntival"
        },
        {
          "id": "C",
          "text": "Trauma ocular con herida palpebral, que compromete el borde libre"
        },
        {
          "id": "D",
          "text": "Trauma ocular con herida palpebral transfixiante"
        },
        {
          "id": "E",
          "text": "Trauma ocular con amaurosis"
        }
      ],
      "correcta": "B",
      "explicacion": "La hemorragia subconjuntival post-traumática, en ausencia de otros signos de alarma, generalmente es autolimitada y no requiere intervención urgente por un especialista. Se produce por la rotura de pequeños vasos sanguíneos bajo la conjuntiva, generalmente por un traumatismo leve, un esfuerzo (tos, vómito) o, a veces, sin causa aparente. El manejo suele ser expectante, con lubricación ocular si hay molestias. Si es recurrente o asociada a alteraciones de la coagulación o uso de anticoagulantes, se debe investigar la causa.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.3.007"
    },
    {
      "stem": "Una paciente de 40 años, consulta por incontinencia urinaria, caracterizada\npor deseos incontrolables de orinar, que no le permiten llegar al baño,\norinándose completamente. Se solicita urocultivo y sedimento de orina que\nresultan normales y se indican ejercicios y medidas conductuales, las que no\nmuestran mayores beneficios. El tratamiento más adecuado es:",
      "options": [
        {
          "id": "A",
          "text": "Quirúrgico"
        },
        {
          "id": "B",
          "text": "Iniciar bloqueadores alfa-adrenérgicos"
        },
        {
          "id": "C",
          "text": "Iniciar anticolinérgicos"
        },
        {
          "id": "D",
          "text": "Iniciar betabloqueo"
        },
        {
          "id": "E",
          "text": "Iniciar agonistas dopaminérgicos"
        }
      ],
      "correcta": "C",
      "explicacion": "El caso clínico describe a una paciente con **Incontinencia Urinaria de Urgencia (IUU)**, también conocida como síndrome de vejiga hiperactiva \"húmeda\". El diagnóstico se basa en la sintomatología clave: \"deseos incontrolables de orinar\" (urgencia miccional) que provocan una pérdida involuntaria de orina antes de llegar al baño.\n\nEl manejo de la IUU sigue un enfoque escalonado:\n1.  **Descartar causas reversibles:** Se realizó un urocultivo y sedimento de orina para descartar una infección del tracto urinario (ITU), que puede causar síntomas similares. Los resultados normales confirman que no hay una ITU.\n2.  **Tratamiento de primera línea:** Consiste en terapia conductual (ajuste de ingesta de líquidos, micciones programadas) y entrenamiento de los músculos del piso pélvico (ejercicios de Kegel). En el caso, estas medidas ya se indicaron y resultaron ineficaces.\n3.  **Tratamiento de segunda línea:** Cuando la primera línea falla, se inicia el tratamiento farmacológico. La fisiopatología de la IUU implica contracciones involuntarias del músculo detrusor de la vejiga, que está mediado principalmente por la estimulación colinérgica a través de receptores muscarínicos. Por lo tanto, los fármacos **anticolinérgicos (o antimuscarínicos)** son el tratamiento de elección. Estos medicamentos (como la oxibutinina, tolterodina o solifenacina) bloquean dichos receptores, relajando el músculo detrusor, aumentando la capacidad de la vejiga y disminuyendo la sensación de urgencia.\n\nDado que la paciente ya falló al tratamiento de primera línea, el siguiente paso correcto y más adecuado es iniciar la farmacoterapia con anticolinérgicos.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.3.007"
    }
  ],
  "vignetteText": "Mujer de 82 años, con antecedente de hipertensión arterial, artrosis de rodilla bilateral e insomnio crónico, acude a la consulta médica ambulatoria. Su lista de medicamentos habituales incluye: losartán 50 mg c/12 h, clonazepam 1 mg en la noche, paracetamol 1 g c/8 h, ibuprofeno 400 mg c/8 h (agregado por dolor articular hace 3 semanas) y clorfenamina 4 mg en la noche \"para dormir mejor\". Trae exámenes recientes solicitados por su consultorio: creatinina 1.6 mg/dL (basal 0.9 mg/dL hace 4 meses), BUN 38 mg/dL, potasio 5.2 mEq/L, PA 165/95 mmHg. Además, su hija refiere que la paciente ha presentado dos episodios de caídas nocturnas al levantarse al baño y se le escapan gotas de orina cuando tose o se ríe."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "polifarmacia, criterios, incontinencia, urinaria, persona")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2019 · Pregunta 127 · confianza 0.8
Un paciente de 82 años, con múltiples patologías con tratamiento farmacológico, presenta TSH: 3,8 UI/L y hemoglobina glicosilada de 5,2%. ¿Qué fármaco debe suspender?
- A) Vitamina D
- B) Glibenclamida
- C) Enalapril
- D) Levotiroxina
- E) Calcio
**Correcta: B**
Explicación del banco: En los mayores de 75 años, el objetivo de la TSH es 3 a 6 UI/L, por lo que está bien y el objetivo de la HbA1c es menor a 8%, por lo que está sobretratado y no hay problema en suspender la glibenclamida, en especial, tomando en cuenta el riesgo de hipoglicemia. Los demás fármacos no están especialmente contraindicados.

### [2] EUNACOM Diciembre 2018 · Pregunta 121 · confianza 0.8
Un paciente de 80 años, con antecedente de enfermedad de Alzheimer, hipotiroidismo y artrosis, en tratamiento con donepecilo, levotiroxina y paracetamol, presenta escapes frecuentes de orina y diarrea. ¿Cuál es la conducta más adecuada?
- A) Agregar memantina
- B) Disminuir la dosis de levotiroxina
- C) Agregar oxibutinina
- D) Disminuir la dosis de donepecilo
- E) Aumentar la dosis de levotiroxina
**Correcta: D**
Explicación del banco: El síndrome colinérgico: diarrea e incontinencia urinaria es una complicación frecuente del donepecilo. La metformina solo produce diarrea.

### [3] EUNACOM Julio 2016 · Pregunta 9 · confianza 0.72
Paciente 80 años con antecedente de artrosis en tratamiento con paracetamol 1 gr c/8 horas, con control parcial del dolor. Realiza adecuadamente sus actividades de la vida diaria, usa bastón y sale acompañada. Tiene antecedente de HTA e Insuficiencia cardíaca congestiva en capacidad funcional III. ¿Cuál es el mejor fármaco a agregar para continuar el manejo del dolor?
- A) Ibuprofeno v.o.
- B) Pregabalina v.o.
- C) Ketorolaco v.o.
- D) Lidocaína en parches
- E) Tramadol v.o.
**Correcta: E**
Explicación del banco: Si bien los AINES son el tratamiento de segunda línea (paracetamol es de primera), en los pacientes hipertensos (mal controlados) y con insuficiencia cardiaca suelen estar contraindicados (por el riesgo de insuficiencia renal aguda), por lo que creo que la respuesta es tramadol (aunque habitualmente es de tercera línea). Aun así es una pregunta difícil, ya que no se es tan explícito en la contraindicación (otras contraindicaciones son úlcera por AINES y la IRC).

### [4] EUNACOM Julio 2015 · Pregunta 108 · confianza 0.72
Un paciente de 81 años presenta insomnio de conciliación y de mantención, que afecta sus actividades y lo tiene angustiado. Refiere que no duerme siesta. ¿Cuál de los siguientes fármacos es el más adecuado para el manejo de su insomnio?
- A) Clonazepam
- B) Diazepam
- C) Midazolam
- D) Alprazolam
- E) Zolpidem
**Correcta: E**
Explicación del banco: La verdad es que todos los hipnóticos se deben evitar en el adulto mayor, por el riesgo de dependencia y lo más importante es indicar medidas generales de higiene del sueño. Si hay que elegir un hipnótico en el adulto mayor, debe ser el zolpidem, sin embargo sirve más para el insomnio de concialición y el paciente también tiene de mantención. Esta pregunta está mala, ya que sí se le pueden dejar benzodiacepinas a los adultos mayores y la evidencia no es concluyente. Igualmente creo que zolpidem será la respuesta correcta.

### [5] EUNACOM Julio 2016 · Pregunta 160 · confianza 0.6
Una mujer de 86 años, con múltiples patologías crónicas, en tratamiento farmacológico, acude a control, constatándose IMC: 23,frecuencia cardíaca: 76 lpm, presión arterial: 110/70 mmHg. Además trae exámenes, que muestran TSH: 2,65 UI/L, LDH: 152 UI/L, hemoglobina glicosilada: 5,2%, colesterol HDL: 35 mg/dl, colesterol total: 205 mg/dl. ¿Qué fármaco debería suspenderse?
- A) Losartán
- B) Atorvastatina
- C) Levotiroxina
- D) Carvedilol
- E) Glibenclamida
**Correcta: E**
Explicación del banco: Tiene una HbA1c menor a 7%, de hecho, menor a 6%, que es lo normal. En el adulto mayor el objetivo es de 8%, por lo que no hay problema en suspender la glibenclamida y más aún, se puede disminuir el riesgo de hipoglicemias. Ninguno de los demás fármacos está contraindicado.

### [6] EUNACOM Agosto 2021 · Pregunta 8 · confianza 0.97
En un estudio se realiza medición de los niveles plasmáticos de pesticidas a personas de distintos países, obteniéndose los niveles promedios para la población de cada país. Luego, se correlaciona con las tasas de mortalidad por cáncer de cada país. ¿A qué tipo de estudio corresponde?
- A) Observacional
- B) Cohortes
- C) Experimental
- D) Ecológico
- E) De contraste de hipótesis
**Correcta: D**
Explicación del banco: Es un estudio ecológico clásico, que usa variables agregadas (ej. promedio de niveles plasmáticos y tasas de mortalidad) comparando distintas poblaciones.

### [7] EUNACOM Julio 2019 · Pregunta 170 · confianza 0.97
Un problema de los estudios de casos y controles es que, al ser retrospectivo, las personas evaluadas olvidan las situaciones a las que estuvieron expuestos. Aquello produce un tipo de error sistemático, que corresponde a un:
- A) Error de clasificación diferencial
- B) Sesgo de selección
- C) Sesgo de confusión
- D) Sesgo de información
- E) Error de clasificación no diferencial
**Correcta: D**
Explicación del banco: El sesgo de memoria es un tipo de sesgo de información o medida, que afecta al evaluado. Los errores de clasificación son aquellos…

### [8] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [9] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [10] EUNACOM Julio 2016 · Pregunta 102 · confianza 0.97
Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos. El diagnóstico más probable es:
- A) Artritris psoriática
- B) Artriris reumatoide
- C) Artritis reactiva
- D) Condrocalcinosis
- E) Artrosis
**Correcta: E**
Explicación del banco: Tanto la clínica (compromiso de IFD, IFP y primera CMC), como la radiografía son clásicas de artrosis. No importa la positividad de marcadores, ya que están positivos en un 5% de las personas sanas y solo tienen importancia cuando la clínica es de Lupus o Artritis reumatoide, que no es el caso.

### [11] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [12] EUNACOM Julio 2025 · Pregunta 19 · confianza 0.96
Hombre de 70 años con HPB conocida llega a urgencias con incapacidad de orinar desde hace 8 horas, vejiga palpable en hipogastrio y dolor intenso. ¿Cuál es el manejo inicial de elección?
- A) Sonda Foley vesical
- B) Diurético EV
- C) Alfa-bloqueador oral y esperar
- D) Cistostomía suprapúbica inmediata
- E) Cateterismo intermitente
**Correcta: A**
Explicación del banco: Retención urinaria aguda: manejo inmediato = sonda Foley para drenaje vesical. Alivia el dolor y previene daño renal. Cistostomía solo si falla la sonda. Alfa-bloqueador se agrega DESPUÉS del episodio agudo para prevención de recurrencia.

### [13] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [14] EUNACOM Julio 2013 · Pregunta 137 · confianza 0.96
Un paciente de 26 años, estudiante universitario con regular rendimiento, es traído por sus padres porque desde hace tres meses no ha asistido a clases, ya que prefiere quedarse en su habitación. Ellos refieren que siempre fue solitario y que no buscaba tener amistades. Al entrevistarlo de forma dirigida se ríe sin motivo y refiere que no quiere salir de su habitación porque la voz del diablo lo amenaza. El diagnóstico más probable es:
- A) Trastorno delirante crónico
- B) Trastorno de la personalidad esquizoide
- C) Delirium
- D) Esquizofrenia hebefrénica
- E) Trastorno Bipolar
**Correcta: D**
Explicación del banco: Diagnóstico: **Esquizofrenia hebefrénica** (opción **D**). La risa sin motivo orienta a Hebefrenia. El cuadro clínico es sugerente de EQZ.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [16] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [17] EUNACOM Enero 2023 · Pregunta 41 · confianza 0.95
Embarazada con antecedente de cesárea previa, durante el parto presenta cese de contracciones, sangrado y bradicardia fetal. ¿Diagnóstico más probable?
- A) Desprendimiento prematuro de placenta
- B) Placenta previa sangrante
- C) Prolapso de cordón umbilical
- D) Embolia de líquido amniótico
- E) Rotura uterina
**Correcta: E**
Explicación del banco: Diagnóstico: **Rotura uterina** (opción **E**). Rotura uterina. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [18] EUNACOM Enero 2023 · Pregunta 62 · confianza 0.95
Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas. ¿Diagnóstico más probable?
- A) Apendicitis aguda complicada
- B) Quiste ovárico torcido
- C) Embarazo ectópico roto
- D) Salpingitis aguda con absceso tubo-ovárico
- E) Rotura folicular hemorrágica
**Correcta: C**
Explicación del banco: Diagnóstico: **Embarazo ectópico roto** (opción **C**). Embarazo ectópico roto. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [19] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [20] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [21] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [22] EUNACOM Agosto 2021 · Pregunta 90 · confianza 0.95
Un paciente de 35 años está convencido que las vacunas contra la Covid-19 contienen un chip para rastrear a las personas y que hay un acuerdo entre Bill Gates y muchos de los gobiernos para controlar las mentes de la población, tal como lo ha hecho con muchas personas, a las que califica de “borregos”. Cree que la mayoría de los médicos son parte de este complot, porque están financiados por las farmacéuticas y el Gobierno. Si bien se desenvuelve normalmente en su trabajo, ha tenido varios problemas con compañeros de trabajo y con sus familiares, cuando se toca el tema de las vacunas, en el que habla con gran vehemencia y certeza, criticando duramente a quienes le recomiendan vacunarse. También pierde mucho tiempo discutiendo sobre el tema en redes sociales. ¿Cuál es el diagnóstico más probable?
- A) Esquizofrenia
- B) Trastorno delirante
- C) Trastorno del espectro autista en el adulto
- D) Trastorno bipolar
- E) Trastorno de personalidad paranoide (Nota: pregunta añadida a la reconstrucción) RECONSTRUCCIÓN EUNACOM AGOSTO 2021 Dr. Guillermo Guevara Aliaga SEGUNDA PARTE Instrucciones:
**Correcta: B**
Explicación del banco: Tiene un TDC clásico, con un delirio sistematizado y afectación únicamente en esa área. Si bien es relativamente joven, no tiene alucinaciones ni síntomas negativos o primarios de esquizofrenia.

### [23] EUNACOM Agosto 2021 · Pregunta 96 · confianza 0.95
Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular, hipolacrimia y xerostomía. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, ENA (-), AntiDNA 2h (-) y anticuerpos anti- CCP mayores a 200 UI/ml. La radiografía de manos muestra edema de partes blandas y osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es:
- A) Lupus eritematoso sistémico
- B) Artritis reumatoide
- C) Artritis psoriática
- D) Esclerosis sistémica
- E) Síndrome de Sjörgren primario
**Correcta: B**
Explicación del banco: Diagnóstico: **Artritis reumatoide** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [24] EUNACOM Diciembre 2019 · Pregunta 59 · confianza 0.95
Una mujer de 18 años sufrió un rapto al salir de la oficina, por dos desconocidos. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente, sin lesiones físicas. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de lo sucedido, recordando solo cuando fue abordada por los desconocidos y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [25] EUNACOM Diciembre 2019 · Pregunta 15 · confianza 0.95
Un hombre de 34 años, que fue padre hace 2 meses, presenta imágenes recurrentes y desagradables, en las que él se ve asfixiando a su bebé con una almohada. Se siente muy angustiado y evita el contacto con su hijo, por miedo a hacerle daño. No ha querido contarle a su cónyuge, ya que se siente avergonzado y cree que se puede estar volviendo loco. El diagnóstico más probable es:
- A) Depresión psicótica
- B) Trastorno de estrés postraumático
- C) Trastorno adaptativo
- D) Trastorno obsesivo compulsivo
- E) Trastorno delirante
**Correcta: D**
Explicación del banco: Es un TOC clásico de con obsesión de acción negativa y compulsión de evitación. Otros ejemplos preguntados han sido la obsesión de ser pedófilo, ser infiel, agredir a las personas de la calle, empujarlas al metro.
