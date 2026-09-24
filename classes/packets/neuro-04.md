# CLASE neuro-04 · Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino

Escribe `classes/lessons/neuro-04.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-04" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-01: Neurologia 10.1: Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES
- neuro-02: Neurologia 10.2: Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria
- neuro-03: Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos
- neuro-05: Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena
- neuro-06: Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional
- neuro-07: Neurologia 10.7: Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-04",
  "classId": "neuro-04",
  "tier": 3,
  "blockNum": 1,
  "blockName": "Enfermedad Cerebrovascular y Urgencias Neurovasculares",
  "topicLabel": "10.4",
  "title": "Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino",
  "perfilCode": "1.10.2.004, 1.10.2.008",
  "dx": "Sospecha",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES N° 37 / Urgencias Neuroquirúrgicas): Hemorragia Subaracnoidea por Rotura de Aneurisma Cerebral · Confirmación con angioTAC o panangiografía y exclusión aneurismática (coils vs clip) urgente.",
  "reconstrucciones": "EUNACOM Diciembre 2024 (Q#139) · EUNACOM Agosto 2021 (Q#178) · EUNACOM Diciembre 2019 (Q#139) · EUNACOM Julio 2013 (Q#136)",
  "frecuencia": "Máxima rentabilidad · Pregunta clásica de cefalea en trueno, análisis de LCR y manejo de complicaciones en UTI",
  "algoTitle": "Algoritmo Diagnóstico de Cefalea en Trueno y Manejo Agudo de la HSA",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Terapéutico en Hemorragia Subaracnoidea",
    "svg": "<svg viewBox=\"0 0 620 422\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Cefalea en Trueno (Acmé en &lt; 1 min, \"la peor de la vida\")</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Frecuentemente durante esfuerzo físico / coito</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Signos meníngeos tardíos · Compromiso de conciencia</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Paso Diagnóstico 1: TAC de Encéfalo sin Contraste Ultraprecoz</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Sensibilidad &gt; 98-100% en las primeras 6 horas</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Sangre en cisternas basales y valles silvianos</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Resultado del TAC de Encéfalo sin Contraste?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Decisión diagnóstica de certeza en el servicio de urgencia</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">TAC Positivo para HSA</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">TAC Rigurosamente Normal</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Confirmación Diagnóstica Inmediata</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">AngioTAC / Panangiografía digital</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Ingreso a UPC + Nimodipino 60 mg c/4h VO</text>\n  <rect class=\"dec\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Paso 2 OBLIGATORIO: Punción Lumbar</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Realizar idealmente a las 6-12 h del inicio</text>\n  <text class=\"sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Buscar Xantocromía y prueba de los 3 tubos</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Exclusión Precoz del Aneurisma Roto (≤ 24 a 72 horas)</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Embolización endovascular con coils vs Clipaje microquirúrgico · Prevenir resangrado precoz</text>\n  <path class=\"ln\" d=\"M310,342 V364\"/>\n  <rect class=\"acc\" x=\"100\" y=\"364\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"379\" text-anchor=\"middle\" font-weight=\"700\">Prevención de Vasoespasmo e Isquemia Cerebral Tardía (Día 4 a 14)</text>\n  <text class=\"accS\" x=\"310\" y=\"391\" text-anchor=\"middle\">Nimodipino oral por 21 días continuos</text>\n  <text class=\"accS\" x=\"310\" y=\"402\" text-anchor=\"middle\">Mantenimiento estricto de euvolemia con suero fisiológico</text>\n</svg>"
  },
  "contexto": "La hemorragia subaracnoidea aneurismática (HSA) es una de las emergencias médicas más temidas y evaluadas en el EUNACOM. El 85% se debe a la rotura de aneurismas saculares en las bifurcaciones del polígono de Willis. La regla diagnóstica de oro es inviolable: ante toda cefalea en trueno (\"la peor de mi vida\"), el primer paso es un TAC de encéfalo sin contraste inmediato; si el TAC es normal, es mandatorio realizar una punción lumbar para confirmar o descartar xantocromía. El pronóstico depende del aseguramiento precoz del aneurisma y de la prevención del vasoespasmo con Nimodipino.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Factores de Riesgo y Distribución Aneurismática",
      "paragraphs": [
        "La hemorragia subaracnoidea (HSA) consiste en la irrupción súbita de sangre arterial en el espacio subaracnoideo (entre la aracnoides y la piamadre), provocando una brusca elevación de la presión intracraneana que puede igualar la presión de perfusión cerebral, ocasionando síncope o paro circulatorio transitorio.",
        "La causa no traumática más frecuente (85% de los casos) es la <strong>rotura de un aneurisma sacular o \"en baya\"</strong> ubicado en los puntos de ramificación del <strong>Polígono de Willis</strong>. La distribución anatómica clásica es: 1) <strong>Arteria Comunicante Anterior (30-35%)</strong>; 2) <strong>Arteria Comunicante Posterior</strong> en su unión con la carótida interna (25-30%); 3) <strong>Bifurcación de la Arteria Cerebral Media (20%)</strong>; y 4) <strong>Circulación posterior / bifurcación de la arteria basilar (10%)</strong>.",
        "<em>Factores de riesgo mayores:</em> Tabaquismo activo (el principal factor modificable), hipertensión arterial crónica, consumo de cocaína o anfetaminas, alcoholismo severo y antecedentes familiares de HSA en familiares de primer grado. Se asocia a patologías del tejido conectivo como <strong>Enfermedad Renal Poliquística Autosómica Dominante (ERPAD)</strong>, Síndrome de Marfan y Ehlers-Danlos tipo IV."
      ]
    },
    {
      "subhead": "2. Semiología Clásica: Cefalea en Trueno y Banderas Rojas",
      "paragraphs": [
        "La manifestación cardinal patognomónica es la <strong>cefalea en trueno (thunderclap headache)</strong>: cefalea de intensidad máxima hiperaguda (EVA 10/10) que alcanza su acmé en <strong>menos de 1 minuto</strong> (\"el dolor de cabeza más insoportable de toda mi vida\"), iniciada frecuentemente durante maniobras de Valsalva, esfuerzo físico intenso, coito o defecación.",
        "Síntomas acompañantes: Pérdida transitoria de conciencia al inicio del cuadro (50% de los pacientes), vómitos explosivos, fotofobia, dolor y rigidez cervical. <em>Perla EUNACOM:</em> Los signos meníngeos (rigidez de nuca, signos de Kernig y Brudzinski) pueden <strong>tardar entre 6 y 12 horas</strong> en manifestarse, ya que la sangre debe degradarse e irritar las raíces espinales; su ausencia en la primera hora NO descarta jamás una HSA.",
        "<strong>Signos focales de valor localizador:</strong>",
        "• <strong>Parálisis del III par craneal (Nervio Oculomotor):</strong> Midriasis ipsilateral fija arreactiva a la luz, ptosis palpebral y desviación ocular \"hacia abajo y afuera\". Es patognomónica de compresión por un aneurisma de la <strong>arteria comunicante posterior</strong> en expansión o rotura.",
        "• <strong>Hemorragias prerretinianas subhialoideas (Síndrome de Terson):</strong> Visibles en el fondo de ojo en el 15-20% de las HSA severas, asociadas a mal pronóstico funcional.",
        "• <em>Cefalea centinela:</em> Cefalea previa moderada de alarma que ocurre en las 2-4 semanas anteriores a la rotura masiva por microfugas o distensión parietal del aneurisma (frecuentemente mal diagnosticada como cefalea tensional o sinusitis)."
      ]
    },
    {
      "subhead": "3. Algoritmo Diagnóstico Secuencial: TAC sin Contraste vs Punción Lumbar",
      "paragraphs": [
        "Ante la sospecha clínica de cefalea en trueno, existe una secuencia diagnóstica inviolable de dos pasos:",
        "<strong>Paso 1: TAC de encéfalo sin contraste precoz:</strong> Es el examen inicial obligatorio. Su sensibilidad supera el <strong>98-100% si se realiza dentro de las primeras 6 horas</strong> del inicio del dolor. Visualiza sangre hiperdensa en cisternas basales, cisura de Silvio, espacio interhemisférico o sistema ventricular.",
        "<strong>Paso 2: Punción Lumbar (PL) diagnóstica obligatoria:</strong>",
        "• Si el TAC de encéfalo es rigurosamente normal pero la clínica de cefalea en trueno es sugerente, <strong>la PL es mandatoria e insoslayable</strong>. Despachar a un paciente a su domicilio con TAC normal sin punción lumbar es uno de los errores más graves evaluados en el examen.",
        "• <em>Momento ideal:</em> Debe efectuarse preferentemente después de <strong>6 a 12 horas del inicio de los síntomas</strong> para otorgar tiempo suficiente a la lisis eritrocitaria y formación de <strong>Xantocromía</strong> (pigmento amarillo o rosado del sobrenadante por bilirrubina y oxihemoglobina).",
        "• <em>Diferenciación de punción traumática:</em> En la <strong>prueba de los 3 tubos</strong>, la HSA muestra un recuento eritrocitario homogéneo en los 3 frascos (sin aclaramiento) y el sobrenadante centrifugado es francamente <strong>xantocrómico</strong>. En la punción traumática (iatrogénica), el número de glóbulos rojos disminuye ostensiblemente del tubo 1 al tubo 3 y el sobrenadante post-centrifugación inmediata es transparente e incoloro.",
        "<strong>Paso 3: Estudio Vascular (AngioTAC cerebral o Panangiografía por sustracción digital - DSA):</strong> Confirma la presencia del aneurisma, su cuello, dimensiones y relaciones espaciales, pesquisando además aneurismas múltiples (presentes en el 15-20% de los pacientes)."
      ]
    },
    {
      "subhead": "4. Escalas Pronósticas: Hunt & Hess (Clínica) y Fisher Modificada (Tomográfica)",
      "paragraphs": [
        "La estratificación de la HSA se realiza mediante dos escalas complementarias:",
        "• <strong>Escala de Hunt y Hess (Estratificación Clínica Preoperatoria):</strong> Grado I: Asintomático o cefalea leve con rigidez mínima (mortalidad ~2%); Grado II: Cefalea moderada a severa con rigidez de nuca, sin déficit focal salvo paresia de par craneal (mortalidad ~5%); Grado III: Somnolencia, confusión, déficit focal leve; Grado IV: Estupor, hemiparesia moderada a severa; Grado V: Coma profundo, postura de descerebración y aspecto moribundo (mortalidad &gt; 70%).",
        "• <strong>Escala de Fisher Modificada (Estratificación Tomográfica):</strong> Diseñada específicamente para predecir el <strong>riesgo de desarrollar Vasoespasmo cerebral e Isquemia Cerebral Tardía (DCI)</strong>. Grado 1: HSA fina sin hemorragia intraventricular (HIV); Grado 2: HSA fina con HIV; Grado 3: Coágulo grueso de HSA subaracnoidea sin HIV; Grado 4: Coágulo grueso subaracnoideo CON hemorragia intraventricular bilateral (riesgo máximo de vasoespasmo e infartos tardíos)."
      ]
    },
    {
      "subhead": "5. Manejo Médico en UPC, Prevención del Resangrado, Vasoespasmo y Nimodipino",
      "paragraphs": [
        "El tratamiento de la HSA aneurismática en la Unidad de Paciente Crítico contempla cuatro objetivos prioritarios:",
        "1. <strong>Prevención del Resangrado Aneurismático:</strong> El resangrado tiene una mortalidad superior al 70-80% y su mayor incidencia ocurre en las primeras 24 horas. La única medida definitiva es la <strong>exclusión precoz del aneurisma en las primeras 24 a 72 horas</strong> mediante <strong>embolización endovascular con coils (coiling)</strong> (método de elección por menor invasividad) o <strong>clipaje microquirúrgico</strong> (preferido en aneurismas de cuello ancho de la ACM o hematomas parenquimatosos compresivos concomitantes). Previo al aseguramiento, la PAS debe mantenerse &lt; 160 mmHg.",
        "2. <strong>Prevención del Vasoespasmo e Isquemia Cerebral Tardía (DCI):</strong> Ocurre típicamente entre el <strong>día 4 y el día 14 post-sangrado (pico en días 7 a 10)</strong> por liberación de endotelina y degradación de oxihemoglobina espasmógena.",
        "• <strong>Nimodipino oral (60 mg cada 4 horas vía oral o por sonda nasogástrica durante 21 días continuos):</strong> Es el único fármaco que ha demostrado con alto nivel de evidencia reducir la mortalidad y la isquemia cerebral tardía en la HSA aneurismática. Debe iniciarse de inmediato.",
        "• <em>Euvolemia estricta:</em> Se infunden soluciones cristaloides isotónicas (Suero Fisiológico 0.9%) para mantener la normovolemia. La antigua terapia \"triple H\" (hipervolemia agresiva) está proscrita; solo se induce <strong>hipertensión controlada</strong> si se demuestra vasoespasmo clínico o angiográfico.",
        "3. <strong>Manejo de la Hidrocefalia Aguda:</strong> Ocurre en el 20-30% de las HSA por bloqueo de las granulaciones de Pacchioni; si produce deterioro del sensorio, requiere instalación urgente de un <strong>Drenaje Ventricular Externo (DVE)</strong>.",
        "4. <strong>Manejo de Hiponatremia:</strong> Se debe a Síndrome de Pérdida de Sal Cerebral (o SIADH). Está estrictamente <strong>contraindicada la restricción hídrica</strong> (la hipovolemia desencadena vasoespasmo e infarto cerebral); se trata con suero salino al 0.9% o hipertónico al 3%."
      ]
    }
  ],
  "table": {
    "title": "Escalas Pronósticas en HSA: Escala Clínica de Hunt & Hess vs Escala Tomográfica de Fisher",
    "headers": [
      "Grado / Escala",
      "Hunt & Hess (Estado Clínico Basal)",
      "Fisher Modificada (Hallazgos en TAC)",
      "Riesgo / Implicancia Clínica"
    ],
    "rows": [
      [
        "Grado I",
        "Asintomático o cefalea leve con rigidez de nuca mínima",
        "HSA focal o difusa fina < 1 mm de espesor, sin HIV",
        "Excelente pronóstico quirúrgico; mortalidad < 5%"
      ],
      [
        "Grado II",
        "Cefalea moderada a severa, rigidez marcada, sin focalidad (salvo par craneal)",
        "HSA fina < 1 mm con hemorragia intraventricular bilateral (HIV)",
        "Bajo riesgo de vasoespasmo en Fisher 1; moderado en Fisher 2"
      ],
      [
        "Grado III",
        "Somnolencia, confusión o leve déficit focal motor/sensitivo",
        "Coágulo grueso subaracnoideo > 1 mm de espesor, sin HIV",
        "Riesgo elevado de vasoespasmo sintomático en Fisher 3"
      ],
      [
        "Grado IV",
        "Estupor, hemiparesia moderada a severa, signos de rigidez vegetativa",
        "Coágulo grueso subaracnoideo > 1 mm CON hemorragia intraventricular (HIV)",
        "Riesgo MÁXIMO de vasoespasmo e isquemia tardía; mortalidad > 40%"
      ],
      [
        "Grado V",
        "Coma profundo, rigidez de descerebración, apariencia moribunda",
        "—",
        "Mortalidad superior al 70-80%; rescate neuroquirúrgico urgente"
      ]
    ]
  },
  "severityTable": {
    "title": "Complicaciones Mayores de la HSA Aneurismática: Cronología, Fisiopatología y Manejo",
    "headers": [
      "Complicación Mayor",
      "Ventana Temporal Crítica",
      "Mecanismo Fisiopatológico",
      "Diagnóstico y Manejo de Elección"
    ],
    "rows": [
      [
        "Resangrado Aneurismático",
        "Primeras 24 horas (máximo riesgo en primeras 6 h)",
        "Lisis del coágulo hemostático perianeurismático antes de la exclusión",
        "Mortalidad > 70% · Prevención: exclusión precoz con coils o clipaje en < 24-72 h + PAS < 160 mmHg previa"
      ],
      [
        "Vasoespasmo / Isquemia Tardía (DCI)",
        "Días 4 a 14 post-sangrado (pico entre días 7 y 10)",
        "Constricción arterial difusa mediada por productos de lisis de hemoglobina",
        "Nimodipino 60 mg c/4h VO x 21 días obligatorios · Euvolemia estricta · Doppler transcraneal / AngioTAC"
      ],
      [
        "Hidrocefalia Aguda",
        "Primeras 24 a 48 horas (o tardía comunicante)",
        "Obstrucción del flujo de LCR por sangre intraventricular o aracnoiditis química",
        "Deterioro precoz del sensorio · Manejo: Drenaje Ventricular Externo (DVE) o válvula de derivación VP"
      ],
      [
        "Hiponatremia (Pérdida de Sal Cerebral)",
        "Primera semana post-HSA",
        "Liberación masiva de péptido natriurético cerebral que causa hipovolemia natriurética",
        "Tratar con suero salino al 0.9% o hipertónico al 3% · PROSCRITA la restricción hídrica por riesgo de vasoespasmo"
      ],
      [
        "Arritmias Cardíacas / IAM Neurogénico",
        "Primeras 48 horas",
        "Descarga simpática masiva y liberación masiva de catecolaminas (Takotsubo)",
        "Monitoreo ECG continuo en UPC · Elevación de troponinas e inversión de ondas T en cara anterior"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo Escalonado de Manejo en HSA: Medidas Iniciales, Neuroprotección y Exclusión Aneurismática",
    "headers": [
      "Fase Asistencial",
      "Intervención / Fármaco",
      "Pauta Posológica y Objetivo",
      "Reglas de Oro y Advertencias"
    ],
    "rows": [
      [
        "Urgencia Inmediata",
        "TAC de Encéfalo sin Contraste",
        "Realizar en < 30 min desde sospecha; si es normal: Punción Lumbar a las 6-12 h",
        "La normalidad del TAC NO descarta HSA: la PL con xantocromía es obligatoria"
      ],
      [
        "Neuroprotección Vascular",
        "Nimodipino oral",
        "60 mg cada 4 horas vía oral o sonda nasogástrica durante 21 días continuos",
        "Único fármaco con evidencia nivel A en reducir isquemia tardía y mortalidad en HSA aneurismática"
      ],
      [
        "Control Hemodinámico Pre-Exclusión",
        "Labetalol o Nicardipino EV",
        "Mantener PAS < 160 mmHg (o PAM < 110 mmHg) evitando caídas bruscas",
        "Previene el resangrado sin comprometer la presión de perfusión cerebral"
      ],
      [
        "Aseguramiento Aneurismático",
        "Embolización con Coils (Endovascular) o Clipaje",
        "Realizar dentro de las primeras 24 a 72 horas desde el ingreso hospitalario",
        "El coiling endovascular es de primera elección en la mayoría; clipaje si hematoma lobar o cuello ancho"
      ],
      [
        "Manejo de Fluidos",
        "Solución Salina 0.9% (Cristaloides)",
        "Mantener EUVOLEMIA estricta (diuresis > 0.5-1 mL/kg/h; balance neutro a levemente positivo)",
        "Proscritas la hipervolemia profiláctica y la restricción de agua libre; usar suero salino normal"
      ],
      [
        "Analgesia y Sedación",
        "Opioides titulables (Fentanilo / Morfina)",
        "Control estricto del dolor y antieméticos (Ondansetrón) para evitar Valsalva",
        "Evitar maniobras de esfuerzo, tos o vómitos que eleven la PIC y desencadenen resangrado"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 48 años, fumadora de 15 cigarrillos al día y sin otros antecedentes mórbidos, consulta en el servicio de urgencia por presentar cefalea occipital explosiva de máxima intensidad (EVA 10/10) mientras sostenía relaciones sexuales hace 4 horas. Refiere que el dolor alcanzó su máxima intensidad en menos de 10 segundos, asociándose a dos vómitos explosivos y rigidez cervical marcada. Al examen físico: PA 160/95 mmHg, FC 76 lpm, vigil pero intensamente adolorida con fotofobia severa (Hunt y Hess II), signos de Kernig y Brudzinski positivos. Al examen ocular destaca ptosis en el párpado derecho y midriasis derecha fija arreactiva con ojo desviado hacia abajo y afuera. Se realiza un TAC de encéfalo sin contraste a los 30 minutos del ingreso, el cual evidencia hiperdensidad compatible con sangre distribuida en las cisternas basales, cisura interhemisférica y valle silviano derecho, sin hematoma parenquimatoso.",
    "conducta": "El cuadro corresponde a una Hemorragia Subaracnoidea (HSA) de causa aneurismática confirmada por TAC de encéfalo en una paciente con cefalea en trueno clásica. La presencia de parálisis completa del tercer par craneal ipsilateral (midriasis arreactiva, ptosis palpebral y estrabismo divergente hacia abajo y afuera) es patognomónica de compresión por un aneurisma de la arteria comunicante posterior derecha en su unión con la carótida interna. Las conductas de urgencia impostergables son: hospitalización en Unidad de Paciente Crítico (UPC), inicio inmediato de Nimodipino oral 60 mg cada 4 horas por 21 días continuos para prevenir vasoespasmo, control de la presión arterial (PAS < 160 mmHg), analgesia endovenosa, solicitud urgente de AngioTAC cerebral o panangiografía digital para caracterización anatómica y coordinación de la exclusión precoz del aneurisma mediante embolización endovascular con coils o clipaje microquirúrgico dentro de las primeras 24 a 72 horas."
  },
  "explicacion": "El cuadro corresponde a una Hemorragia Subaracnoidea (HSA) de causa aneurismática confirmada por TAC de encéfalo en una paciente con cefalea en trueno clásica. La presencia de parálisis completa del tercer par craneal ipsilateral (midriasis arreactiva, ptosis palpebral y estrabismo divergente hacia abajo y afuera) es patognomónica de compresión por un aneurisma de la arteria comunicante posterior derecha en su unión con la carótida interna. Las conductas de urgencia impostergables son: hospitalización en Unidad de Paciente Crítico (UPC), inicio inmediato de Nimodipino oral 60 mg cada 4 horas por 21 días continuos para prevenir vasoespasmo, control de la presión arterial (PAS < 160 mmHg), analgesia endovenosa, solicitud urgente de AngioTAC cerebral o panangiografía digital para caracterización anatómica y coordinación de la exclusión precoz del aneurisma mediante embolización endovascular con coils o clipaje microquirúrgico dentro de las primeras 24 a 72 horas.",
  "keyPoints": [
    "Toda cefalea en trueno (\"la peor de mi vida\", con acmé en < 1 minuto) es una sospecha formal de hemorragia subaracnoidea hasta demostrar lo contrario.",
    "El estudio inicial mandatario es un TAC de encéfalo sin contraste inmediato (sensibilidad > 98% en las primeras 6 horas).",
    "Si el TAC de cerebro es normal pero la sospecha de HSA persiste, la Punción Lumbar diagnóstica es OBLIGATORIA (buscar xantocromía tras 6-12 horas).",
    "La parálisis aislada del III par craneal (midriasis + ptosis + oftalmoplejia) sugiere compresión por aneurisma de la arteria comunicante posterior.",
    "El resangrado aneurismático es la complicación más letal de las primeras 24 horas; se previene con la exclusión precoz del aneurisma (coils o clipaje) en ≤ 24-72 horas.",
    "El vasoespasmo e isquemia cerebral tardía ocurren típicamente entre los días 4 y 14 post-HSA; se previenen con Nimodipino oral (60 mg c/4h x 21 días) y euvolemia estricta.",
    "La escala de Fisher modificada predice el riesgo de vasoespasmo según la cantidad de sangre subaracnoidea e intraventricular en el TAC.",
    "La hiponatremia en la HSA se maneja con suero fisiológico al 0.9% o hipertónico al 3%; la restricción de líquidos está terminantemente proscrita por gatillar vasoespasmo."
  ],
  "questions": [
    {
      "stem": "¿Cuál de los siguientes cuadros clínicos es más sugerente de una\nhemorragia subaracnoídea por rotura de un aneurisma?",
      "options": [
        {
          "id": "A",
          "text": "Cefalea opresiva occipital, con dolor a la palpación de los músculos cervicales posteriores"
        },
        {
          "id": "B",
          "text": "Cefalea de inicio súbito, con intensidad 10/10, asociada a vómitos"
        },
        {
          "id": "C",
          "text": "Cefalea intensa, pulsátil, frontal, asociada a fotopsias"
        },
        {
          "id": "D",
          "text": "Cefalea de rápida instalación, asociada a hemiparesia derecha y abolición de los reflejos osteotendíneos derechos"
        },
        {
          "id": "E",
          "text": "Cefalea progresiva, mayor con el decúbito, asociado a vómitos y edema de papila"
        }
      ],
      "correcta": "B",
      "explicacion": "La opción (b), \"Cefalea de inicio súbito, con intensidad 10/10, asociada a vómitos\", es la descripción más clásica y sugerente de una hemorragia subaracnoídea (HSA) por rotura de un aneurisma. La característica cardinal de la HSA es el \"inicio súbito\" de la cefalea, a menudo descrita como un \"thunderclap headache\" (cefalea en trueno), que alcanza su máxima intensidad en segundos o minutos. Esta aparición abrupta se debe a la extravasación repentina de sangre en el espacio subaracnoídeo, lo que provoca una irritación meníngea masiva y un rápido aumento de la presión intracraneal.\n\nLa intensidad \"10/10\" o \"la peor cefalea de mi vida\" es prácticamente patognomónica de una HSA, reflejando el dolor extremo causado por la irritación de las meninges y el aumento agudo de la presión. Los vómitos son un síntoma acompañante muy común, resultado de la estimulación de los centros eméticos en el tronco encefálico debido al incremento de la presión intracraneal. Esta combinación de inicio explosivo, dolor insoportable y síntomas vegetativos como los vómitos, convierte a la opción (b) en la presentación clínica que con mayor precisión apunta a una emergencia neuroquirúrgica como la HSA por aneurisma roto.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.008"
    },
    {
      "stem": "Ante la sospecha de una hemorragia subaracnoidea se debe solicitar como\nprimer examen:",
      "options": [
        {
          "id": "A",
          "text": "Un TAC de cerebro"
        },
        {
          "id": "B",
          "text": "Una RMN de cerebro"
        },
        {
          "id": "C",
          "text": "Una punción lumbar"
        },
        {
          "id": "D",
          "text": "Un fondo de ojo"
        },
        {
          "id": "E",
          "text": "Una angiografía carotídea"
        }
      ],
      "correcta": "A",
      "explicacion": "La Tomografía Axial Computarizada (TAC) de cerebro sin contraste es el examen de elección y el primer paso en el algoritmo diagnóstico ante la sospecha de una hemorragia subaracnoidea (HSA).\n\nLas razones para esta elección son:\n1.  **Alta Sensibilidad y Especificidad:** En las primeras 6-12 horas tras el inicio de los síntomas, la TAC sin contraste tiene una sensibilidad superior al 95% para detectar sangre en el espacio subaracnoideo. La sangre aguda se visualiza como una imagen hiperdensa (blanca) en las cisternas basales, surcos corticales o fisuras.\n2.  **Rapidez y Disponibilidad:** La TAC es un examen rápido (dura pocos minutos) y está ampliamente disponible en la mayoría de los servicios de urgencia. Esto es crucial en una patología tiempo-dependiente como la HSA, donde un diagnóstico y tratamiento precoz son vitales para prevenir el resangrado y otras complicaciones.\n3.  **Seguridad:** Permite descartar otras causas de cefalea súbita y, fundamentalmente, identifica la presencia de hidrocefalia o efecto de masa, lo cual es una contraindicación para realizar una punción lumbar de forma inmediata por el riesgo de herniación cerebral.\n\nEl algoritmo diagnóstico estándar para la HSA es:\n1.  **Sospecha clínica alta** (cefalea en trueno, signos meníngeos, etc.).\n2.  **TAC de cerebro sin contraste**.\n3.  Si la TAC es positiva, se confirma el diagnóstico y se procede a buscar la etiología (generalmente con una AngioTAC o Angiografía).\n4.  Si la TAC es negativa pero la sospecha clínica persiste, se debe realizar una **punción lumbar** (pasadas al menos 6-12 horas del inicio del cuadro) para buscar xantocromía (coloración amarillenta del LCR por la degradación de la hemoglobina), lo que confirmaría una HSA.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.008"
    },
    {
      "stem": "La hemorragia subaracnoidea suele producirse en primer lugar por\ntraumatismos craneoencefálicos y en segundo lugar por rotura de aneurismas.\nEstas últimas suelen presentarse como cefalea de inicio súbito, muy intensa,\nque habitualmente se describe como “la más intensa de la vida”. ¿Qué examen\ndebe solicitarse en primer lugar ante un paciente en el que se sospecha una\nhemorragia subaracnoidea por rotura de un aneurisma cerebral?",
      "options": [
        {
          "id": "A",
          "text": "Ecodoppler carotídeo"
        },
        {
          "id": "B",
          "text": "Punción lumbar"
        },
        {
          "id": "C",
          "text": "TAC de cerebro sin contraste"
        },
        {
          "id": "D",
          "text": "Angiografía carotídea"
        },
        {
          "id": "E",
          "text": "Resonancia magnética nuclear con medio de contraste"
        }
      ],
      "correcta": "C",
      "explicacion": "La alternativa correcta es la C (TAC de cerebro sin contraste). Ante la sospecha de hemorragia subaracnoidea (HSA) por rotura de aneurisma, el primer examen a solicitar es un TAC de cerebro sin contraste. El TAC es rápido, ampliamente disponible y tiene una alta sensibilidad para detectar sangre en el espacio subaracnoideo en las primeras 6-12 horas después del inicio de la cefalea. La Guía Clínica MINSAL de Accidente Cerebrovascular Isquémico (si bien no es específicamente de HSA, aplica los principios de neuroimagen inicial en sospecha de evento vascular agudo) destaca la importancia de la neuroimagen precoz para el diagnóstico.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.008"
    },
    {
      "stem": "Un paciente de 34 años presenta cefalea holocránea muy intensa, de inicio\nsúbito, hace 60 minutos. Refiere que es muy raro que presente cefalea y su\nexamen físico, incluyendo un adecuado examen neurológico, es normal. La\nconducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Administrar AINEs y corticoides endovenosos"
        },
        {
          "id": "B",
          "text": "Administrar sumatriptán subcutáneo"
        },
        {
          "id": "C",
          "text": "Enviar a domicilio con analgésicos orales, indicando control en caso de aparición de signos de alarma"
        },
        {
          "id": "D",
          "text": "Solicitar resonancia magnética nuclear de cerebro"
        },
        {
          "id": "E",
          "text": "Solicitar TAC de cerebro, sin contraste"
        }
      ],
      "correcta": "E",
      "explicacion": "La alternativa correcta es solicitar una TAC de cerebro sin contraste (E). La presentación clínica del paciente, con cefalea holocránea de inicio súbito e intensa (cefalea \"en trueno\"), es altamente sospechosa de hemorragia subaracnoidea (HSA). La cefalea \"en trueno\" se define como una cefalea severa que alcanza su máxima intensidad en menos de un minuto. La principal causa de HSA es la ruptura de un aneurisma. Aunque el examen neurológico sea normal, la posibilidad de HSA debe ser descartada de manera urgente. La TAC de cerebro sin contraste es el estudio de elección inicial debido a su rapidez y alta sensibilidad para detectar sangre en el espacio subaracnoideo dentro de las primeras 6-12 horas del inicio de los síntomas. Una TAC negativa no descarta por completo la HSA, y en esos casos se debe realizar una punción lumbar para buscar xantocromía. El manejo inicial de la cefalea en trueno está bien descrito en la guía GES ACV isquémico. Aunque se refiere específicamente a ACV isquémico, la sospecha y el descarte de hemorragia es un paso fundamental.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.008"
    }
  ],
  "vignetteText": "Mujer de 48 años, fumadora de 15 cigarrillos al día y sin otros antecedentes mórbidos, consulta en el servicio de urgencia por presentar cefalea occipital explosiva de máxima intensidad (EVA 10/10) mientras sostenía relaciones sexuales hace 4 horas. Refiere que el dolor alcanzó su máxima intensidad en menos de 10 segundos, asociándose a dos vómitos explosivos y rigidez cervical marcada. Al examen físico: PA 160/95 mmHg, FC 76 lpm, vigil pero intensamente adolorida con fotofobia severa (Hunt y Hess II), signos de Kernig y Brudzinski positivos. Al examen ocular destaca ptosis en el párpado derecho y midriasis derecha fija arreactiva con ojo desviado hacia abajo y afuera. Se realiza un TAC de encéfalo sin contraste a los 30 minutos del ingreso, el cual evidencia hiperdensidad compatible con sangre distribuida en las cisternas basales, cisura interhemisférica y valle silviano derecho, sin hematoma parenquimatoso."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "hemorragia, subaracnoidea, aneurismatica, cefalea, puncion")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Agosto 2021 · Pregunta 178 · confianza 0.92
Una paciente de 42 años, hipertensa, presenta cefalea intensa, que inició súbitamente hace 6 horas, mientras realizaba ejercicio y se ha acompañado de vómitos alimentarios. Al examen físico está vigil y orientada, adolorida, con FC: 70x’, PA: 140/90 mmHg, en el examen neurológico tiene signos meníngeos presentes, sin alteraciones motoras ni sensitivas. Se solicita TAC de cerebro sin contraste, que muestra hiperdensidad del espacio intercomisural frontal y del espacio subaracnoideo basal. ¿Cuál es el examen de elección para proseguir el estudio?
- A) Resonancia magnética nuclear de cerebro
- B) Punción lumbar
- C) TAC de cerebro con contraste
- D) Angiografía cerebral
- E) Ecocardiograma
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Angiografía cerebral). Tiene una angina crónica estable, por lo que se debe estudiar con un test de La.... Esta clase aborda el enfrentamiento general de las cefaleas, enfatizando la identificación de signos de alarma para diferenciar causas graves de benignas. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [2] EUNACOM Julio 2013 · Pregunta 136 · confianza 0.88
Un paciente de 50 años, sin antecedentes, presenta cefalea de inicio súbito mientras hacía deporte, asociado a dolor en la zona cervical posterior y dorsal. Al examen físico presenta reflejo fotomotor conservado, signos meníngeos presentes, fuerza y sensibilidad disminuidas en hemicuerpo izquierdo. El diagnóstico más probable es:
- A) Hemorragia subaracnoídea
- B) Hematoma epidural
- C) Hematoma subdural
- D) Hemorragia cerebral intraparenquimatosa
- E) Accidente vascular isquémico
**Correcta: A**
Explicación del banco: Cefalea súbita. La relación con el ejercicio puede orientar. Los signos meníngeos orientan mucho y los signos focales no son característicos, pero pueden aparecer. Si solo fuera cefalea más signos focales, tendería a marcar hematoma intracerebral, pero como está planteada la pregunta, seguro es una HSA. Clave Eplicación

### [3] EUNACOM Diciembre 2019 · Pregunta 139 · confianza 0.85
Un paciente de 54 años, alcohólico e hipertenso, hace una semana suspende todos los antihipertensivos. Es traído a la urgencia por cefalea muy intensa, de inicio agudo, asociado a desorientación y compromiso de conciencia. Al examen físico está soporoso, no habla ni sigue indicaciones, aunque mantiene movilidad espontánea de las 4 extremidades. Sus reflejos osteotendíneos y tono muscular son normales y tiene signo de Babinski bilateral. El diagnóstico más probable es:
- A) Hemorragia subaracnoidea
- B) Meningitis bacteriana
- C) Edema cerebral
- D) Intoxicación etílica
- E) Accidente vascular isquémico extenso
**Correcta: A**
Explicación del banco: Pregunta difícil, pero la cefalea ictal muy intensa sugiere HSA. El compromiso de conciencia también. Ver resumen de semiología neurológica.

### [4] EUNACOM Diciembre 2024 · Pregunta 139 · confianza 0.5
Mujer con cefalea súbita e intensa + signos meníngeos esbozados, con antecedente de pansinusitis cronica y migraña, al control de signos vitales con PA 170/100 ¿Cual es la conducta inicial mas importante? a.​ TAC de cerebro
- B) Control de crisis hipertensiva
- B) Accidente cerebrovascular
- C) Epilepsia
- D) Esclerosis múltiple
- E) Enfermedad de Parkinson
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **** (opción **A**). Tratamiento hemorragia subaracnoidea: manejo igual a AVE hemorrágico + neurocirugía para cerrar aneurisma + nimodipino (previene vasoespasmo) por 3 semanas. De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [5] EUNACOM Diciembre 2019 · Pregunta 3 · confianza 0.97
Un paciente de 30 años, hipermétrope, consulta por cefalea intensa, en el lado derecho, asociado a náuseas, de intensidad 10/10. Al examen físico se observa ojo rojo profundo en el lado derecho, con pupila en midriasis fija y arreactiva. ¿Cuál es el diagnóstico más probable?
- A) Glaucoma agudo
- B) Trombosis de la vena central de la retina
- C) Cefalea cluster
- D) Celulitis orbitaria
- E) Accidente vascular encefálico
**Correcta: A**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **A**). Es un glaucoma agudo clásico.. El ojo rojo es uno de los motivos de consulta más frecuentes en la práctica clínica del médico general. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [6] EUNACOM Diciembre 2018 · Pregunta 150 · confianza 0.97
Un paciente de 77 años, con antecedente de hipertensión arterial crónica, presenta visión distorsionada de las letras y refiere que las líneas se ven onduladas. Actualmente tiene un escotoma central. Se hace un fondo de ojo, que se muestra a continuación: Foto 14 (https://www.elmundo.es/elmundosalud/2007/01/25/medicina/1169733276.html). El diagnóstico más probable es:
- A) Desprendimiento de retina
- B) Retinopatía hipertensiva
- C) Trombosis de la vena central de la retina
- D) Catarata
- E) Degeneración macular relacionada con la edad
**Correcta: E**
Explicación del banco: Es un DMRE clásica, tanto por la clínica (metamorfopsias y escotoma central), como por el fondo de ojo (aunque se veían exudados y hemorragias maculares y no solo drusas).

### [7] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [8] EUNACOM Julio 2025 · Pregunta 115 · confianza 0.95
Embarazada de 36 semanas con presión arterial 170/110 y cefalea frontal intensa que no cede con analgesia. Sin convulsiones. ¿Cuál es el manejo más adecuado?
- A) Hospitalizar, labetalol EV para control de PA, sulfato de magnesio profiláctico e interrupción del embarazo
- B) Nifedipino oral y control ambulatorio
- C) Sulfato de magnesio solo
- D) Inducción con oxitocina inmediata sin otro manejo
- E) Hidralazina oral y observar
**Correcta: A**
Explicación del banco: Preeclampsia severa a ≥34 semanas: hospitalización + control de PA (labetalol o hidralazina EV) + sulfato de magnesio para prevenir eclampsia + interrupción del embarazo una vez estabilizada.

### [9] EUNACOM Diciembre 2025 · Pregunta 48 · confianza 0.95
Una paciente de 25 años, primigesta con 32 semanas de gestación, presenta cefalea intensa y malestar general. Al examen Fsico destaca una presión arterial de 170/110 mmHg, por lo que se administra labetalol endovenoso, logrando cifras tensionales de 140/90 mmHg. Sin embargo, dos horas después presenta una convulsión tónico-clónica de 2 minutos de duración. ¿Cuál es la conducta más adecuada?
- A) Administrar lorazepam endovenoso
- B) Administrar labetalol endovenoso
- C) Administrar sulfato de magnesio endovenoso
- D) Administrar tocolí2cos endovenosos
- E) Realizar maduración pulmonar
**Correcta: C**
Explicación del banco: Tiene una eclamsia, en contexto de una preclamsia severa. El manejo sigue el siguiente orden: 1. Estabilizar a la paciente y 2. Interrumpir el embarazo. La estabilización también Gene un orden: ABC, luego MgSO4 EV y luego labetalol EV si PA >160/110 (en la práctica se hace todo junto). Aunque en la práctica se hace una cesárea, lo correcto académicamente es que la interrupción del embarazo debe privilegiar la vía vaginal (menos sangrado y estrés quirúrgico), a menos que haya signos de sufrimiento fetal, no se pueda estabilizar a la madre o tenga un cuello cerrado y largo (Bishop < 6-7), ya que demoraría mucho el parto, el que idealmente debe ocurrir antes de que pasen 24 horas desde la eclamsia. La maduración pulmonar puede estar indicada en este caso, por tener menos de 34 semanas, pero no alcanzará a hacer efecto (demora 48 horas).

### [10] EUNACOM Julio 2025 · Pregunta 7 · confianza 0.95
Paciente de 28 años llega a urgencias con fiebre alta, cefalea intensa, mialgias, compromiso respiratorio progresivo y antecedente de trabajo en zona rural del sur de Chile. Hemograma con leucopenia y trombocitopenia. ¿Cuál es el agente causal más probable?
- A) Hantavirus (Sin Nombre)
- B) Leptospira interrogans
- C) Rickettsia conorii
- D) Yersinia pestis
- E) Francisella tularensis
**Correcta: A**
Explicación del banco: Hantavirus pulmonar en Chile es transmitido por ratón colilargo. Fase cardiopulmonar: edema pulmonar no cardiogénico + leucopenia + trombocitopenia. Es la causa más probable en zona rural del sur.

### [11] EUNACOM Julio 2019 · Pregunta 80 · confianza 0.95
Una paciente de 54 años, con antecedente de jaqueca, que trata profilácticamente con topiramato. Refiere estar con más estrés del habitual. Hace dos horas comienza con cefalea intensa, de localización periocular derecha, asociada a náuseas y vómitos. Al examen físico se aprecia el ojo izquierdo enrojecido, con la pupila fija, en semimidriasis. La conducta inicial más adecuada es:
- A) Manitol endovenoso
- B) Clorpromazina endovenosa
- C) Ketorolaco endovenoso
- D) Oxígeno al 100% más eletriptán subcutáneo
- E) Carbamazepina oral
**Correcta: A**
Explicación del banco: Tiene un glaucoma agudo clásico, cuyo tratamiento incluye el manitol ev, gotas mióticas (ej. pilocarpina) y la iridotomía láser.

### [12] EUNACOM Julio 2013 · Pregunta 128 · confianza 0.95
Una paciente de 23 años, sin antecedentes, consulta muy preocupada porque desde hace un mes ha presentado en cuatro oportunidades cuadros de inicio agudo caracterizados por dolor torácico intenso, asociados a cefalea, mareos, parestesias y disnea, los cuales tienen una duración aproximada de una hora y ceden espontáneamente. Al preguntarle de forma dirigida, desconoce que puede desencadenar estas crisis. Trae electrocardiograma que le habrían tomado en el servicio de urgencias cuando consultó por una crisis el cual se aprecia normal. Los fármacos de elección para el tratamiento de esta paciente son:
- A) Fluoxetina y carbamazepina
- B) Amitriptilina y clonazepam
- C) Citalopram y risperidona
- D) Sertralina y diazepam
- E) Paroxetina y lamotrigina
**Correcta: D**
Explicación del banco: Hay que darle un ISRS y al inicio una BDZ. La única opción que cumple con eso es la D. Los anticnovulsivantes y antipsicóticos no están indicados en el T. de angustia. Lo ideal sería empezar con ﬂuoxetina 10 mg al día más alprazolam (no diazepam) 0,5 mg cada 8-12 horas y terminar con ﬂuoxetina 20 mg al día, sin BDZ en un par de semanas.

### [13] EUNACOM Julio 2015 · Pregunta 179 · confianza 0.94
Un paciente de 60 años, diabético e hipertenso, mal controlado, consulta por pérdida súbita e indolora de la visión del ojo izquierda. Con el ojo izquierdo solo puede contar dedos. Al examen físico no se ven alteraciones externas, pero el rojo pupilar del ojo izquierdo está muy disminuido. El diagnóstico más probable es:
- A) Trombosis de la vena central de la retina
- B) Desprendimiento de retina
- C) Neuritis óptica
- D) Embolia de arteria central de la retina
- E) Hemorragia vítrea
**Correcta: E**
Explicación del banco: Diagnóstico: **Hemorragia vítrea** (opción **E**). La pérdida del rojo pupilar orienta mucho a hemorragia vítrea. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [14] EUNACOM Diciembre 2018 · Pregunta 131 · confianza 0.93
Un paciente de 46 años presenta múltiples síntomas, como cefalea, molestias abdominales, calambres, astenia, entre otros, desde hace un año. Se han realizado múltiples exámenes, sin encontrar una causa orgánica. Llama la atención que ha tenido proteinuria persistente, que no se correlaciona con el cuadro clínico, ni con los demás exámenes, por lo que se tienen fuertes sospechas de que ha manipulado las muestras de orina. ¿Cuál es el diagnóstico más probable?
- A) Trastorno somatomorfo
- B) Trastorno conversivo
- C) Trastorno facticio
- D) Trastorno disociativo
- E) Trastorno hipocondriaco
**Correcta: C**
Explicación del banco: Diagnóstico: **Trastorno facticio** (opción **C**). La sospecha de manipulación de los exámenes, hace que sea facticio.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Diciembre 2017 · Pregunta 59 · confianza 0.93
Un paciente de 40 años consulta por cefalea holocránea, mayor en la zona occipital, que se irradia al cuello. Suele iniciarse a medio día y alcanza su máxima intensidad al llegar a su casa, después del trabajo. Su examen neurológico no tiene signos focales ni meníngeos. ¿Cuál es el diagnóstico más probable?
- A) Cefalea tensional
- B) Migraña
- C) Cefalea en racimo o cluster
- D) Cefalea por hipertensión endocraneana
- E) Neuralgia de Arnold
**Correcta: A**
Explicación del banco: Diagnóstico: **Cefalea tensional** (opción **A**). Es una cefalea tensional clásica (como la que da al salir del Eunacom).. El tratamiento de la artritis reumatoide se basa en las drogas modificadoras de la artritis reumatoide (DMARs). Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [16] EUNACOM Agosto 2021 · Pregunta 129 · confianza 0.92
Un paciente de 35 años refiere sensación de angustia e inquietud, de un mes de evolución, asociado a insomnio de conciliación y cefalea diaria, de localización occipital, que se irradia hacia los hombros. Refiere que los síntomas iniciaron en relación a la necesidad de cambiarse de casa, ya que fue asignado a nuevo cargo en su trabajo, en una ciudad distinta. ¿Cuál es el diagnóstico más probable?
- A) Trastorno por somatización
- B) Depresión mayor
- C) Trastorno conversivo
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: D**
Explicación del banco: Tiene un trastorno adaptativo clásico de tipo ansioso (gatillante claro y síntomas ansiosos). Si bien tiene síntomas somáticos (cefalea tensional) no es un trastorno de somatización (múltiples síntomas de todo tipo).

### [17] EUNACOM Diciembre 2018 · Pregunta 147 · confianza 0.92
Un paciente de 61 años, con antecedente de haberse realizado una colonoscopía, hace un mes, la que estaba normal, consulta por una hemorragia digestiva baja abundante, con compromiso hemodinámico. Su frecuencia cardiaca es 120x’ y su presión arterial, 90/60 mmHg. Se realiza endoscopía digestiva alta, que resulta normal y su hemograma muestra hematocrito de 19%, con hemoglobina: 6,3 g/dl. ¿Cuál es el examen de elección para continuar el estudio?
- A) Ecografía abdominal
- B) TAC de abdomen y pelvis
- C) Cintigrafía con glóbulos rojos marcados
- D) Colonoscopía
- E) Angiografía mesentérica
**Correcta: D**
Explicación del banco: La colonoscopía es el examen de elección para enfrentar la HDB. La EDA se hizo, porque tenía hemodinamia inestable (siempre se debe hacer en ese caso). No importa que hace un mes tuviese una colonoscopía normal. Si no localiza, se procede a la cintigrafía con GR marcados o a la angiografía mesentérica.

### [18] EUNACOM Diciembre 2017 · Pregunta 43 · confianza 0.92
Un paciente de 75 añosconsulta por cefalea de 2 semanas de evolución, holocránea, intensa, que ha ido en aumento. En el último tiempo refiere además dolor al tocarse el cuero cabelludo y dolor en la rodilla derecha. Al examen físico se constatan signos de derrame articular de la rodilla derecha. Se realiza exámenes, entre los que figura un hemograma, con hemoglobina: 12,0 g/dl, blancos: 9.600 por mm3 y VHS: 76 mm/h. ¿Cuál es el diagnóstico más probable?
- A) Artritis seronegativa
- B) Arteritis de células gigantes
- C) Artritis reactiva
- D) Lupus
- E) Endocarditis aguda
**Correcta: B**
Explicación del banco: Diagnóstico: **Arteritis de células gigantes** (opción **B**). Es una arteritis de la temporal o de células gigantes clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [19] EUNACOM Julio 2024 · Pregunta 109 · confianza 0.9
Una paciente de 31 años con 28 semanas de gestación y antecedente de asma severo, presenta un cuadro de cefalea intensa asociada a tinitus. Al examen físico se constata presión arterial de 160/110 mmHg. El registro fetal muestra una frecuencia cardíaca de 135 latidos por minuto. No tiene focalidad neurológica. ¿Cuál es la conducta inicial más adecuada para esta paciente?
- A) Administrar labetalol endovenoso
- B) Administrar nifedipino oral
- C) Administrar sulfato de magnesio endovenoso
- D) Solicitar TAC de cerebro
- E) Administrar misoprostol intrarrectal
**Correcta: B**
Explicación del banco: Manejo de Crisis Hipertensiva en el Embarazo: La paciente presenta una crisis hipertensiva del embarazo. El tratamiento habitual en estos casos es con labetalol intravenoso. Sin embargo, en esta paciente en particular, el uso de betabloqueadores está absolutamente contraindicado debido a su historial de asma severo. La alternativa de tratamiento en este caso es el nifedipino, que generalmente se administra por vía oral.

### [20] EUNACOM Diciembre 2022 · Pregunta 108 · confianza 0.9
Un hombre de 43 años consulta porque, desde hace 15 días, ha presentado angustia, desasosiego, insomnio y malestar general. Refiere, además, cefalea occipital, irradiada al cuello que es peor en las tardes. Refiere que los síntomas iniciaron después de que le comunicaron en su trabajo que sería trasladado a otra cuidad, por lo que deberá cambiarse de casa. ¿Cuál es el diagnóstico más probable?
- A) Trastorno de somatización
- B) Trastorno de ansiedad generalizada
- C) Trastorno de adaptación
- D) Trastorno de angustia
- E) Episodio depresivo mayor
**Correcta: C**
Explicación del banco: Diagnóstico: **Trastorno de adaptación** (opción **C**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [21] EUNACOM Diciembre 2022 · Pregunta 132 · confianza 0.9
Un paciente de 70 años ha presentado 3 episodios de dolor y aumento de volumen de la rodilla derecha, que le impide o dificulta la marcha, pero que ha respondido a analgésicos. Acude nuevamente por los mismos síntomas, objetivándose artritis de rodilla derecha, con signos de derrame articular, por lo que se punciona, dando salida a un líquido articular inflamatorio, con abundantes cristales de pirofosfato de calcio, sin bacterias. ¿Qué fármaco es más adecuado para evitar recurrencias?
- A) Colchicina
- B) Naproxeno
- C) Alopurinol
- D) Hidroclorotiazida
- E) Metotrexato
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (Colchicina). En este escenario clínico, colchicina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [22] EUNACOM Agosto 2021 · Pregunta 76 · confianza 0.9
Un paciente de 32 años presenta dolor cervical intenso, mientras realizaba deporte, que se irradia hacia la cara, zona temporal y se asocia a cefalea intensa. Al examen físico se observa ptosis y miosis derechas. El diagnóstico más probable es:
- A) Parálisis del tercer nervio craneal
- B) Aneurisma cerebral anterior, con compromiso del tercer nervio craneal
- C) Infarto vertebrobasilar
- D) Migraña hemipléjica
- E) Disección carotidea
**Correcta: E**
Explicación del banco: La disección carotídea suele darse en contexto de deportes de contacto o ejercicios de elongación y su clínica es dolor cervical y cefalea. Además, en este caso, se produjo un síndrome de Horner, por compresión del ganglio estrellado, a nivel de la bifurcación carotídea.

### [23] EUNACOM Agosto 2021 · Pregunta 157 · confianza 0.9
Una paciente de 56 años, diabética de larga data, mal controlada, con nefropatía diabética en etapa IV, presenta pérdida súbita e indolora de la visión del ojo izquierdo. ¿Cuál es el diagnóstico más probable?
- A) Glaucoma
- B) Edema macular
- C) Uveítis
- D) Trombosis de la vena central de la retina
- E) Hemorragia vítrea
**Correcta: E**
Explicación del banco: El antecedente de DM2 con daño renal sugiere una retinopatía diabética proliferativa, que ahora se complicó con hemorragia vítrea. Se debe evaluar el rojo pupilar (que se pierde) para confirmar el diagnóstico.

### [24] EUNACOM Julio 2019 · Pregunta 163 · confianza 0.9
Una paciente de 40 años, con antecedente de artritis reumatoide, tratada con naproxeno oral, presenta un episodio de hemorragia digestiva alta, con melena. Se realiza una endoscopía digestiva alta, que muestra una úlcera duodenal activa; no se realizó el test de ureasa. La conducta más adecuada es:
- A) Cambiar el naproxeno por otro AINE
- B) Solicitar serología para Helicobacter pylori
- C) Solicitar nueva endoscopía con test de ureasa
- D) Realizar erradicación de Helicobacter pylori
- E) Iniciar inhibidores de la bomba de protones
**Correcta: D**
Explicación del banco: Las úlceras gástricas se erradican solo si tienen HP positivo (a menos que no haya consumo de AINEs y exista algo que genere falsos positivos, como el uso de antibióticos o de omeprazol) y se controlan con una EDA, de modo de descartar que haya un cáncer debajo. Las úlceras duodenales (este caso) se erradican siempre, ya sea con HP positivo o negativo y se controlan con pruebas no invasivas, como la detección de antígenos en heces. Por ello, la respuesta es erradicar.

### [25] EUNACOM Diciembre 2019 · Pregunta 159 · confianza 0.9
Un niño de 2 años presenta tendencia a las hemorragias, ya que sangra con facilidad y presenta múltiples equimosis. En el examen físico, se observan extremidades inferiores con equimosis en distinto grado de resolución, algunas de gran tamaño. Se solicitan exámenes, entre los que destacan hemograma con recuento de plaquetas normal, TP normal y TTPA alargado. ¿Cuál es el diagnóstico más probable?
- A) Púrpura trombocitopénica inmune
- B) Hemofilia
- C) Enfermedad de von Willebrand
- D) Enfermedad de Glanzmann
- E) Púrpura trombocitopénica trombótica
**Correcta: B**
Explicación del banco: El alargamiento del TTPA sugiere fuertemente hemofilia. Que tenga una clínica tan florida, en un niño (sexo masculino) pequeño, la sugiere también. Suele evolucionar a hemartrosis y hematomas musculares y de otras partes del cuerpo. PTI y PTT tienen plaquetopenia. EvW y Glanzmann tienen alteración de la hemostasia primaria, con petequias y clínicas generalmente más leves que la hemofilia, aunque sí pueden tener una clínica similar, en las formas más graves. Eso sí, el TTPA suele estar normal, salvo en algunas variantes de la EvW en que sí se puede alargar.
