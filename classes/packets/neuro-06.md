# CLASE neuro-06 · Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional

Escribe `classes/lessons/neuro-06.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-06" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-03: Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos
- neuro-04: Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino
- neuro-05: Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena
- neuro-07: Neurologia 10.7: Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo
- neuro-08: Neurologia 10.8: Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES
- neuro-09: Neurologia 10.9: Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-06",
  "classId": "neuro-06",
  "tier": 3,
  "blockNum": 2,
  "blockName": "Cefaleas, Síndromes Convulsivos y Epilepsia",
  "topicLabel": "10.6",
  "title": "Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional",
  "perfilCode": "1.10.1.012",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Realizar",
  "ges": "Atención Primaria y Derivación Oportuna · Diagnóstico diferencial ambulatorio de cefaleas primarias vs secundarias potencialmente letales y manejo preventivo para evitar cefalea por abuso de medicación.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Máxima rentabilidad · Motivo de consulta neurológica ambulatoria N° 1 en población joven y mujeres en edad fértil",
  "algoTitle": "Algoritmo de Diagnóstico y Manejo Escalonado de Migraña y Cefaleas Primarias",
  "diagram": {
    "title": "Algoritmo de Manejo Escalonado de la Migraña",
    "svg": "<svg viewBox=\"0 0 620 573\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Cefalea Aguda / Recurrente en Adultos</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Anamnesis cronometrada · Examen físico general y neurológico completo · Fondo de ojo</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Paso 1: Descarte Inmediato de Banderas Rojas (SNOOP10)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Inicio súbito en trueno, fiebre, foco motor/sensitivo,</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">inicio &gt; 50 años, neoplasia o papiledema</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Banderas Rojas o Sospecha de Cefalea Secundaria Grave?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Estratificación inmediata entre urgencia neuroquirúrgica/infecciosa vs cefalea primaria benigna</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Bandera Roja (+) o Cefalea en Trueno</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Examen Normal · Criterios IHS de Cefalea Primaria</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Neuroimagen Urgente (TAC / RM) + PL</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Descartar hemorragia subaracnoidea,</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">meningitis, tumor o trombosis venosa dural</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Diagnóstico Clínico: Migraña vs Tensional</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Migraña: pulsátil, hemicránea, náuseas, foto/fonofobia</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Tensional: opresiva en banda, leve</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"dec\" x=\"70\" y=\"292\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">¿Manejo Agudo Escalonado de la Crisis de Migraña?</text>\n  <text class=\"sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Selección según intensidad y grado de discapacidad funcional (escala MIDAS)</text>\n  <path class=\"ln\" d=\"M310,331 V361 H158 V371\"/>\n  <path class=\"ln\" d=\"M310,361 H462 V371\"/>\n  <text class=\"lbl\" x=\"158\" y=\"356\" text-anchor=\"middle\">Crisis Leve a Moderada</text>\n  <text class=\"lbl\" x=\"462\" y=\"356\" text-anchor=\"middle\">Crisis Moderada a Severa / Falla AINEs</text>\n  <rect class=\"acc\" x=\"12\" y=\"371\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">AINEs Orales + Antiemético</text>\n  <text class=\"accS\" x=\"158\" y=\"398\" text-anchor=\"middle\">Ibuprofeno 400-800 mg o Naproxeno 550 mg</text>\n  <text class=\"accS\" x=\"158\" y=\"409\" text-anchor=\"middle\">+ Metoclopramida 10 mg al inicio precoz</text>\n  <rect class=\"crit\" x=\"316\" y=\"371\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">Triptán Específico (Sumatriptán / Zolmitriptán)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"398\" text-anchor=\"middle\">Sumatriptán 50-100 mg VO o 6 mg SC</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"409\" text-anchor=\"middle\">Contraindicado en cardiopatía coronaria o ACV</text>\n  <path class=\"ln\" d=\"M158,421 V431 H310 V443\"/>\n  <path class=\"ln\" d=\"M462,421 V431 H310 V443\"/>\n  <rect class=\"warn\" x=\"100\" y=\"443\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"458\" text-anchor=\"middle\" font-weight=\"700\">Paso 3: Evaluación de Criterios de Profilaxis Farmacológica</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"470\" text-anchor=\"middle\">Indicada si ≥ 3-4 crisis al mes, crisis discapacitantes</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"481\" text-anchor=\"middle\">prolongadas o riesgo de abuso analgésico</text>\n  <path class=\"ln\" d=\"M310,493 V515\"/>\n  <rect class=\"acc\" x=\"100\" y=\"515\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"530\" text-anchor=\"middle\" font-weight=\"700\">Selección de Profilaxis según Comorbilidad del Paciente</text>\n  <text class=\"accS\" x=\"310\" y=\"542\" text-anchor=\"middle\">Propranolol (joven/hipertenso) · Flunarizina (vértigo)</text>\n  <text class=\"accS\" x=\"310\" y=\"553\" text-anchor=\"middle\">Topiramato (obesidad) · Amitriptilina (insomnio/depresión)</text>\n</svg>"
  },
  "contexto": "La migraña y la cefalea tensional representan más del 90% de las consultas ambulatorias por dolor de cabeza en atención primaria. La migraña es una enfermedad neurovascular compleja caracterizada por hiperexcitabilidad cortical y activación del sistema trigéminovascular, con liberación del neuropéptido CGRP. La regla de oro en el EUNACOM radica en saber descartar con rigor las banderas rojas de cefaleas secundarias potencialmente letales mediante la regla SNOOP10 (como la hemorragia subaracnoidea en cefaleas en trueno), seleccionar el tratamiento abortivo escalonado precoz (AINEs vs Triptanes) y prescribir profilaxis oportuna para evitar la cefalea por abuso de medicación.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología del Sistema Trigéminovascular, Depresión Cortical Propagada y Péptido CGRP",
      "paragraphs": [
        "La migraña no es un simple trastorno vascular espástico, sino una disfunción neurovascular primaria que involucra una predisposición genética a la hiperexcitabilidad neuronal cortical y del tronco encefálico. El fenómeno biológico fundamental del aura migrañosa es la <strong>depresión cortical propagada (cortical spreading depression de Leão)</strong>: una onda de despolarización neuronal y glial que avanza lentamente (2 a 6 mm/minuto) a través de la corteza cerebral (típicamente desde el lóbulo occipital hacia adelante), seguida de una inhibición transitoria y prolongada de la actividad eléctrica neuronal. Esta onda induce alteraciones focales transitorias del flujo sanguíneo cerebral y genera los síntomas positivos y negativos del aura visual (escotomas centellantes, espectro de fortificación).",
        "La fase de dolor de la migraña se origina por la activación retrógrada y anterógrada del <strong>sistema trigéminovascular</strong> (véase Algoritmo 10.6). Las neuronas sensitivas primarias del ganglio de Gasser que inervan las meninges y los grandes vasos durales liberan neuropéptidos vasoactivos y proinflamatorios, principalmente el <strong>péptido relacionado con el gen de la calcitonina (CGRP, Calcitonin Gene-Related Peptide)</strong>, la sustancia P y la neurocinina A. El CGRP produce una intensa vasodilatación de las arterias meníngeas, extravasación plasmática de proteínas y una inflamación neurógena estéril perivascular.",
        "Estos estímulos aferentes viajan a través del núcleo del tracto espinal del trigémino (complejo trigeminocervical en C1-C2) hacia el tálamo y la corteza sensitiva, generando sensibilización periférica (dolor pulsátil que se agrava con el esfuerzo físico o la tos) y posteriormente sensibilización central (alodinia cutánea al tacto suave, cepillado de pelo o uso de anteojos). Los fármacos de la familia de los <strong>triptanes</strong> actúan como agonistas selectivos de los receptores serotonérgicos <strong>5-HT 1B</strong> (induciendo vasoconstricción directa de los vasos meníngeos dilatados) y <strong>5-HT 1D/1F</strong> (bloqueando presinápticamente la liberación de CGRP e inhibiendo la transmisión nociceptiva en el tronco encefálico)."
      ]
    },
    {
      "subhead": "2. Criterios Diagnósticos IHS (ICHD-3): Diferenciación entre Migraña y Cefalea Tensional",
      "paragraphs": [
        "La Clasificación Internacional de Cefaleas (ICHD-3) de la International Headache Society define criterios diagnósticos operacionales precisos para diferenciar las cefaleas primarias más prevalentes (véase Tabla 10.6).",
        "• <strong>Criterios de Migraña sin Aura (ICHD-3 1.1):</strong> Al menos 5 ataques que cumplan: 1) Duración del episodio entre <strong>4 y 72 horas</strong> (sin tratamiento o tratada sin éxito); 2) Cefalea que cumple al menos dos de las siguientes 4 características: a) Localización <em>unilateral (hemicránea)</em>; b) Cualidad <em>pulsátil</em> (como un martilleo o latido); c) Intensidad <em>moderada a severa</em> (interrumpe o prohíbe las actividades cotidianas); d) <em>Empeora o causa el cese de la actividad física rutinaria</em> (como caminar o subir escaleras); 3) Durante la cefalea presenta al menos uno de los siguientes: a) <em>Náuseas y/o vómitos</em>; b) <em>Fotofobia Y fonofobia</em> simultáneas.",
        "• <strong>Criterios de Migraña con Aura (ICHD-3 1.2):</strong> Al menos 2 ataques que presentan síntomas focales neurológicos completamente reversibles: visuales (escotomas centellantes, líneas en zigzag, pérdida visual parcial; representan > 90% de las auras), sensitivos (parestesias con marcha cheiro-oral: mano a brazo y boca) o del lenguaje/disfasia. Cada síntoma individual de aura se propaga gradualmente durante ≥ 5 minutos, dura entre <strong>5 y 60 minutos</strong>, y es seguido por la cefalea dentro de los siguientes 60 minutos.",
        "• <strong>Criterios de Cefalea Tensional (ICHD-3 2.1):</strong> Es la cefalea más frecuente a nivel poblacional. Dolor de cualidad <strong>opresiva o sorda (\"como un casco, banda o peso apretado sobre la cabeza\")</strong>, localización <strong>bilateral holocraneana u occipitofrontal</strong>, intensidad <strong>leve a moderada</strong> (permite continuar con las labores diarias aunque con molestia), <strong>NO empeora con la actividad física rutinaria</strong>. <em>Diferenciador EUNACOM crítico:</em> <strong>NO presenta náuseas ni vómitos</strong>, y puede asociar a lo sumo fotofobia O fonofobia de manera aislada, pero <em>jamás ambas juntas</em>."
      ]
    },
    {
      "subhead": "3. Enfrentamiento en Urgencias: Banderas Rojas y Regla Mnemotécnica SNOOP10",
      "paragraphs": [
        "El error diagnóstico más grave en el servicio de urgencia es asumir erróneamente que una cefalea intensa es primaria sin antes descartar activamente una causa secundaria potencialmente mortal. La herramienta clínica universal para pesquisar banderas rojas es la regla mnemotécnica <strong>SNOOP10</strong> (véase Tabla de Banderas Rojas 10.6):",
        "• <strong>S (Systemic symptoms / Secondary risk factors):</strong> Fiebre, baja de peso, sudoración nocturna; o paciente con antecedente oncológico conocido o inmunosupresión (infección por VIH/SIDA, trasplante, terapia inmunosupresora biológica). Obliga a descartar meningitis bacteriana, encefalitis viral, absceso cerebral, metástasis del SNC o toxoplasmosis mediante neuroimagen contrastada urgente seguida de punción lumbar.",
        "• <strong>N (Neurologic symptoms or signs):</strong> Déficit neurológico focal objetivable al examen (paresia motora, asimetría facial, afasia, diplopía, edema papilar, reflejo plantar extensor) o compromiso del nivel de conciencia o crisis convulsiva. Requiere TAC de encéfalo sin contraste de urgencia inmediata.",
        "• <strong>O (Onset sudden / Thunderclap):</strong> Cefalea en trueno o \"estallido\", definida como un dolor que alcanza su <strong>intensidad máxima (10/10) en menos de 1 minuto</strong> desde su inicio brusco. Es la manifestación cardinal de la <strong>hemorragia subaracnoidea (HSA)</strong> secundaria a rotura aneurismática, aunque también ocurre en disección arterial vertebral/carotídea y síndrome de vasoconstricción cerebral reversible (RCVS). <em>Conducta obligatoria EUNACOM:</em> TAC de encéfalo sin contraste inmediato; si el TAC es normal y se tomó dentro de las primeras horas, es <strong>estrictamente mandatorio realizar una punción lumbar</strong> para buscar eritrocitos y xantocromía mediante espectrofotometría.",
        "• <strong>O (Older age / Inicio > 50 años):</strong> Cefalea de nueva aparición en un paciente mayor de 50 años sin historia previa de migraña. Debe descartarse en primer lugar la <strong>arteritis de células gigantes (arteritis de la temporal)</strong> solicitando de inmediato Velocidad de Eritrosedimentación (VHS) y PCR, además de lesiones ocupantes de espacio (neoplasias, hematoma subdural crónico).",
        "• <strong>P (Pattern change, Progressive, Positional, Precipitated by Valsalva, Papilledema):</strong> Cambio reciente en el patrón habitual de crisis; cefalea progresiva que despierta al paciente de noche; dolor que empeora al acostarse o toser (sugiere hipertensión endocraneana); dolor ortostático que alivia al decúbito supino (hipotensión licuoral por fístula); o presencia de papiledema en el fondo de ojo."
      ]
    },
    {
      "subhead": "4. Tratamiento Abortivo de la Crisis Aguda y Prevención del Abuso de Medicación (MOH)",
      "paragraphs": [
        "El tratamiento sintomático de la crisis de migraña debe iniciarse de forma <strong>precoz</strong>, idealmente en la primera hora tras el inicio del dolor de cabeza (y no durante el aura, donde los vasoconstrictores no son efectivos y podrían teóricamente agravar la isquemia focal) (véase Protocolo Terapéutico 10.6).",
        "• <strong>Crisis leves a moderadas:</strong> Fármacos de primera línea son los Antiinflamatorios No Esteroideos (AINEs): <strong>Ibuprofeno 400 a 800 mg VO</strong>, <strong>Naproxeno sódico 500 a 550 mg VO</strong>, o Ácido Acetilsalicílico 1.000 mg VO. Dado que la crisis migrañosa cursa invariablemente con gastroparesia y estasis gástrica inducida por disfunción dopaminérgica central, se recomienda asociar un agente procinético como <strong>Metoclopramida 10 mg VO/EV</strong> o Domperidona 10 mg VO, lo cual acelera la absorción intestinal del analgésico y yugula las náuseas.",
        "• <strong>Crisis moderadas a severas o falla de AINEs:</strong> La terapia específica de elección son los <strong>Triptanes</strong>. El <strong>Sumatriptán oral (50 a 100 mg)</strong> o subcutáneo (6 mg SC, con inicio de acción en 10-15 minutos) constituye el fármaco de referencia. Otras opciones orales incluyen <em>Zolmitriptán 2.5-5 mg</em> y <em>Eletriptán 40-80 mg</em>. Si el dolor recurre tras una mejoría inicial, puede repetirse una segunda dosis separada por al menos 2 horas (dosis máxima de sumatriptán: 200 mg/día VO o 12 mg/día SC).",
        "• <strong>Contraindicaciones absolutas mayores de los triptanes:</strong> Por su efecto vasoconstrictor coronario y cerebral mediado por receptores 5-HT 1B, los triptanes están <strong>formalmente contraindicados</strong> en: antecedentes de infarto agudo al miocardio, cardiopatía coronaria demostrada, angina de Prinzmetal, ataque cerebrovascular (ACV) previo o AIT, hipertensión arterial severa o no controlada, enfermedad arterial periférica, y en subtipos raros como la migraña hemipléjica o migraña basilar.",
        "• <strong>Cefalea por Abuso de Medicación (Medication Overuse Headache - MOH):</strong> Ocurre cuando el paciente consume analgésicos de manera crónica durante más de 10 a 15 días al mes por más de 3 meses, perpetuando un círculo vicioso de cefalea diaria de rebote. Para prevenirla, el médico debe instruir con rigor que los AINEs se limiten a <strong>menos de 15 días/mes</strong> y los triptanes o fármacos combinados con ergotamínicos o cafeína a <strong>menos de 10 días/mes</strong>."
      ]
    },
    {
      "subhead": "5. Profilaxis Farmacológica de la Migraña: Indicaciones y Selección según Comorbilidad",
      "paragraphs": [
        "El tratamiento preventivo no busca eliminar por completo las crisis, sino reducir su frecuencia, intensidad y duración en al menos un 50%, mejorar la respuesta a la terapia abortiva y evitar la progresión a migraña crónica y cefalea por sobreuso de analgésicos.",
        "<strong>Criterios de indicación formal de tratamiento profiláctico:</strong>",
        "1) <strong>Frecuencia elevada:</strong> 3 o más crisis de migraña al mes, o más de 6 a 8 días de cefalea al mes;",
        "2) <strong>Discapacidad severa:</strong> Crisis que interfieren profundamente con la vida laboral o académica del paciente a pesar de la terapia aguda correcta;",
        "3) <strong>Contraindicación o fracaso</strong> de los tratamientos sintomáticos de rescate;",
        "4) <strong>Riesgo inminente de cefalea por abuso analgésico</strong>;",
        "5) Subtipos de migraña con riesgo neurológico (migraña hemipléjica, migraña con aura de troncoencéfalo).",
        "<strong>Fármacos de Primera Línea y Selección Personalizada:</strong>",
        "• <strong>Betabloqueadores (Propranolol 40 a 160 mg/día VO):</strong> Es el profiláctico de elección en pacientes jóvenes, ansiosos, con temblor esencial o hipertensión arterial concomitante. <em>Contraindicaciones:</em> Asma bronquial, EPOC severa, bradicardia sinusal y bloqueos auriculoventriculares.",
        "• <strong>Calcioantagonistas (Flunarizina 5 a 10 mg/día nocturno):</strong> Bloqueador de canales de calcio con gran eficacia en migraña común y en pacientes con síntomas vestibulares o vértigo migrañoso. <em>Efectos adversos y precauciones:</em> Somnolencia, marcado aumento de peso y apetito, y riesgo de inducir síntomas extrapiramidales (parkinsonismo secundario) o depresión mayor en adultos mayores.",
        "• <strong>Neuromoduladores / Anticonvulsivantes:</strong> 1) <strong>Topiramato (25 a 100 mg/día VO):</strong> Excelente indicación en pacientes con <em>sobrepeso u obesidad</em> (frecuentemente induce descenso ponderal). Efectos adversos: parestesias distales, lentitud cognitiva o anomia, litiasis renal y glaucoma de ángulo cerrado; <strong>teratogénico</strong> (labio leporino). 2) <strong>Ácido Valproico (500 a 1.000 mg/día VO):</strong> Muy eficaz, pero <strong>formalmente proscrito en mujeres en edad fértil</strong> por alto riesgo de teratogenicidad (defectos del tubo neural) y síndrome de ovario poliquístico.",
        "• <strong>Antidepresivos Tricíclicos (Amitriptilina 10 a 50 mg/noche VO):</strong> Fármaco de primera línea cuando la migraña coexiste con <em>insomnio de conciliación, depresión, ansiedad, fibromialgia o cefalea mixta con componente tensional</em>. Efectos anticolinérgicos: sequedad bucal, constipación, retención urinaria y prolongación del intervalo QT."
      ]
    }
  ],
  "table": {
    "title": "Criterios Diagnósticos IHS (ICHD-3): Migraña vs Cefalea Tensional",
    "headers": [
      "Característica Clínica",
      "Migraña sin Aura (ICHD-3 1.1)",
      "Migraña con Aura (ICHD-3 1.2)",
      "Cefalea Tensional Episódica (ICHD-3 2.1)"
    ],
    "rows": [
      [
        "Duración del dolor",
        "4 a 72 horas (sin tratamiento o tratada sin éxito)",
        "Aura de 5 a 60 minutos; cefalea sigue en < 60 min y dura 4-72 h",
        "30 minutos a 7 días continuos"
      ],
      [
        "Localización anatómica",
        "Unilateral / Hemicránea en 60-70% (puede ser bilateral)",
        "Unilateral, típicamente contralateral al lado del aura",
        "Bilateral estricta, en banda u holocraneana en casco"
      ],
      [
        "Cualidad del dolor",
        "Pulsátil, martillante, latiente",
        "Pulsátil tras resolución del fenómeno focal",
        "Opresiva, pesadez, \"como un casco o cinta apretada\" (no pulsátil)"
      ],
      [
        "Intensidad del dolor",
        "Moderada a severa (impide actividades habituales)",
        "Moderada a severa (incapacitante)",
        "Leve a moderada (permite mantener actividad habitual)"
      ],
      [
        "Efecto de la actividad física",
        "Se agrava francamente con caminar o subir escaleras; busca reposo a oscuras",
        "Se intensifica con esfuerzo; paciente encamado inmóvil",
        "NO empeora con la actividad física rutinaria ni el ejercicio leve"
      ],
      [
        "Síntomas asociados",
        "Náuseas y/o vómitos frecuentes; fotofobia Y fonofobia simultáneas",
        "Náuseas, fotofobia y fonofobia tras el cese del aura",
        "Sin náuseas ni vómitos; puede haber fotofobia O fonofobia (nunca ambas)"
      ],
      [
        "Fenómeno de Aura",
        "Ausente por definición",
        "Presente: escotoma centellante, espectro fortificación, parestesias cheiro-orales",
        "Ausente por definición"
      ]
    ]
  },
  "severityTable": {
    "title": "Banderas Rojas en Cefalea Aguda: Criterios Mnemotécnicos SNOOP10 y Conducta Urgente",
    "headers": [
      "Criterio / Letra SNOOP",
      "Hallazgo Clínico de Alerta",
      "Principales Sospechas Diagnósticas",
      "Conducta Médica e Imagenológica Obligatoria"
    ],
    "rows": [
      [
        "S - Systemic symptoms / Secondary risk",
        "Fiebre, baja de peso, sudoración nocturna; o antecedente de cáncer o infección por VIH",
        "Meningitis bacteriana/viral, encefalitis, absceso cerebral, metástasis del SNC, toxoplasmosis",
        "TAC con contraste o Resonancia Magnética urgente; punción lumbar inmediata tras neuroimagen"
      ],
      [
        "N - Neurologic symptoms or signs",
        "Déficit neurológico focal (paresia, afasia, ataxia, asimetría pupilar), alteración de conciencia o crisis",
        "ACV isquémico/hemorrágico, hematoma subdural agudo, masa expansiva, trombosis venosa dural",
        "TAC de encéfalo sin contraste inmediato; evaluación por neurología / neurocirugía de urgencia"
      ],
      [
        "O - Onset sudden (Thunderclap)",
        "Cefalea en trueno o estallido: intensidad máxima instantánea (alcanza 10/10 en menos de 1 minuto)",
        "Hemorragia subaracnoidea (HSA) por rotura aneurismática, disección arterial cervicocraneana, SVCR",
        "TAC cerebral urgente; si TAC es normal y se tomó en < 6-12 h, Punción Lumbar OBLIGATORIA para xantocromía"
      ],
      [
        "O - Older age (Inicio > 50 años)",
        "Cefalea de nuevo inicio en paciente mayor de 50 años sin historia migrañosa previa",
        "Arteritis de la Temporal (Células Gigantes), neoplasia intracraneal, hematoma subdural crónico",
        "Solicitar VHS y PCR urgentes (sospecha arteritis); TAC/RM cerebral; ecografía/biopsia arteria temporal"
      ],
      [
        "P - Pattern change / Progressive",
        "Aumento progresivo de frecuencia, intensidad o pérdida de respuesta al tratamiento habitual",
        "Lesión ocupante de espacio en crecimiento, hematoma subdural progresivo, hidrocefalia",
        "Neuroimagen programada prioritaria o de urgencia según velocidad de progresión"
      ],
      [
        "P - Positional / Valsalva / Papilledema",
        "Dolor que empeora al acostarse/Valsalva (hipertensión endocraneana) o de pie (hipotensión licuoral); papiledema",
        "Hipertensión endocraneana idiopática, fístula de LCR, malformación de Chiari I, trombosis de senos",
        "Fondo de ojo obligado; RM cerebral con secuencias venosas; punción lumbar con manometría"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Tratamiento Farmacológico Escalonado de Migraña: Crisis Aguda y Profilaxis de Primera Línea",
    "headers": [
      "Categoría Terapéutica",
      "Fármaco y Vía de Administración",
      "Dosis Estándar y Posología",
      "Indicaciones Clínicas, Metas y Advertencias / Contraindicaciones"
    ],
    "rows": [
      [
        "Terapia Aguda: AINEs de 1ª Línea",
        "Ibuprofeno / Naproxeno oral",
        "Ibuprofeno 400 - 800 mg VO; Naproxeno 500 - 550 mg VO al inicio",
        "Indicado en crisis leves a moderadas. Asociar a Metoclopramida 10 mg por gastroparesia. Limitar a < 15 días/mes para evitar MOH."
      ],
      [
        "Terapia Aguda: Triptanes Específicos",
        "Sumatriptán / Zolmitriptán / Eletriptán",
        "Sumatriptán 50 - 100 mg VO (repetir a las 2 h si recurre, máx 200 mg/día) o 6 mg SC",
        "Agonistas 5-HT 1B/1D. Indicados en crisis moderadas-severas. Contraindicados en cardiopatía coronaria, ACV previo, HTA severa o migraña hemipléjica."
      ],
      [
        "Profilaxis: Betabloqueadores",
        "Propranolol oral",
        "40 a 160 mg/día (fraccionado cada 8 a 12 horas)",
        "1ª elección en adultos jóvenes, ansiosos, con temblor esencial o hipertensión. Contraindicado en asma, EPOC y bloqueos AV."
      ],
      [
        "Profilaxis: Calcioantagonistas",
        "Flunarizina oral",
        "5 a 10 mg/día en dosis nocturna única",
        "Bloqueador Ca2+ tipo L. Muy eficaz si coexiste vértigo migrañoso. Efectos adversos: aumento de peso, somnolencia, parkinsonismo y depresión."
      ],
      [
        "Profilaxis: Anticonvulsivantes",
        "Topiramato / Ácido Valproico",
        "Topiramato 25 a 100 mg/día VO; Valproato 500 a 1000 mg/día VO",
        "Topiramato: de elección en sobrepeso u obesidad (produce pérdida ponderal); teratogénico. Valproato: proscrito en mujeres en edad fértil."
      ],
      [
        "Profilaxis: Antidepresivos Tricíclicos",
        "Amitriptilina oral",
        "10 a 50 mg/noche (titulación progresiva desde 10 mg)",
        "Elección si coexiste insomnio, depresión, dolor miofascial o cefalea mixta tensional. Efectos anticolinérgicos: boca seca, constipación, sedación."
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 28 años, abogada, sin antecedentes mórbidos, consulta por cuadro de 3 años de evolución de cefaleas episódicas que se presentan 4 a 5 veces al mes. Describe el dolor como hemicráneo derecho, intensamente pulsátil, que se agrava al caminar y la obliga a encerrarse a oscuras en su habitación por intolerancia a la luz y a los ruidos, acompañado de náuseas constantes y vómitos biliosos ocasionales. Cada episodio dura entre 24 y 36 horas si no toma medicamentos. Ha usado paracetamol y ketorolaco con alivio parcial y transitorio, lo que le ha generado ausentismo laboral reiterado. El examen neurológico completo y el fondo de ojo resultan rigurosamente normales.",
    "conducta": "El cuadro cumple estrictamente los criterios diagnósticos IHS (ICHD-3) para Migraña sin aura: dolor hemicráneo pulsátil, de intensidad moderada a severa, agravado por la actividad física rutinaria, con fotofobia, fonofobia y náuseas, de más de 4 horas de duración, con examen físico normal y sin banderas rojas (regla SNOOP10). Al presentar 4 a 5 crisis mensuales discapacitantes con falla a analgésicos comunes, la paciente tiene dos indicaciones terapéuticas formales simultáneas: 1) Tratamiento de rescate agudo escalonado con un triptán oral específico (Sumatriptán 50 a 100 mg VO o Zolmitriptán) asociado a un antiemético al inicio del dolor; y 2) Inicio perentorio de tratamiento profiláctico de primera línea (como Propranolol 40-80 mg/día si no tiene asma, o Amitriptilina si asocia insomnio) para disminuir la frecuencia e intensidad de los ataques y prevenir la cefalea por sobreuso de analgésicos."
  },
  "explicacion": "El cuadro cumple estrictamente los criterios diagnósticos IHS (ICHD-3) para Migraña sin aura: dolor hemicráneo pulsátil, de intensidad moderada a severa, agravado por la actividad física rutinaria, con fotofobia, fonofobia y náuseas, de más de 4 horas de duración, con examen físico normal y sin banderas rojas (regla SNOOP10). Al presentar 4 a 5 crisis mensuales discapacitantes con falla a analgésicos comunes, la paciente tiene dos indicaciones terapéuticas formales simultáneas: 1) Tratamiento de rescate agudo escalonado con un triptán oral específico (Sumatriptán 50 a 100 mg VO o Zolmitriptán) asociado a un antiemético al inicio del dolor; y 2) Inicio perentorio de tratamiento profiláctico de primera línea (como Propranolol 40-80 mg/día si no tiene asma, o Amitriptilina si asocia insomnio) para disminuir la frecuencia e intensidad de los ataques y prevenir la cefalea por sobreuso de analgésicos.",
  "keyPoints": [
    "El diagnóstico de migraña y cefalea tensional es eminentemente clínico; en ausencia de banderas rojas (regla SNOOP10), la neuroimagen de rutina no está indicada.",
    "La migraña sin aura requiere al menos 5 crisis de 4 a 72 horas de dolor pulsátil unilateral moderado-severo que empeora con el ejercicio y asocia náuseas o foto/fonofobia.",
    "La cefalea tensional es bilateral, opresiva (\"en banda o casco\"), leve-moderada, no empeora con la actividad rutinaria y NUNCA cursa con náuseas ni vómitos.",
    "Los triptanes (agonistas 5-HT 1B/1D) son el tratamiento abortivo de elección en crisis moderadas a severas, pero están estrictamente contraindicados en cardiopatía coronaria, ACV previo e HTA descontrolada.",
    "La profilaxis farmacológica está indicada con ≥ 3-4 crisis mensuales o dolor discapacitante: Propranolol (primera línea general), Flunarizina (vértigo), Topiramato (obesidad) o Amitriptilina (insomnio/dolor miofascial).",
    "Para evitar la cefalea por sobreuso de medicamentos (MOH), el uso de AINEs debe limitarse a menos de 15 días al mes y el de triptanes o combinados a menos de 10 días al mes."
  ],
  "questions": [
    {
      "stem": "Existen tratamientos profilácticos para la migraña, que disminuyen la\nfrecuencia y la intensidad de los episodios de jaqueca. Todos los medicamentos\nenumerados a continuación pueden ser usados como tratamiento profiláctico,\nEXCEPTO:",
      "options": [
        {
          "id": "A",
          "text": "Sumatriptán"
        },
        {
          "id": "B",
          "text": "Propanolol"
        },
        {
          "id": "C",
          "text": "Ácido valproico6"
        },
        {
          "id": "D",
          "text": "Flunarizina"
        },
        {
          "id": "E",
          "text": "Amitriptilina"
        }
      ],
      "correcta": "A",
      "explicacion": "La pregunta aborda el tratamiento profiláctico de la migraña, es decir, medicamentos que se usan de forma regular para disminuir la frecuencia, intensidad y duración de los episodios de jaqueca. La respuesta correcta, Sumatriptán, es la excepción porque no se utiliza para este propósito.\n\nEl Sumatriptán pertenece a la clase de los triptanos, que son agonistas selectivos de los receptores 5-HT1B/1D de serotonina. Su mecanismo de acción implica la vasoconstricción de los vasos sanguíneos craneales dilatados y la inhibición de la liberación de neuropéptidos proinflamatorios, lo que resulta en un alivio rápido del dolor y los síntomas asociados a un ataque agudo de migraña. Por lo tanto, el Sumatriptán es un tratamiento abortivo o agudo, diseñado para ser tomado al inicio de una crisis de migraña para detenerla, no para prevenir futuras crisis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
    },
    {
      "stem": "Existen numerosos medicamentos que sirven para prevenir la ocurrencia de\nataques de migraña. Uno de estos medicamentos es:",
      "options": [
        {
          "id": "A",
          "text": "Indometacina"
        },
        {
          "id": "B",
          "text": "Propanolol"
        },
        {
          "id": "C",
          "text": "Ergotamina"
        },
        {
          "id": "D",
          "text": "Verapamilo"
        },
        {
          "id": "E",
          "text": "Tramadol"
        }
      ],
      "correcta": "B",
      "explicacion": "La respuesta correcta es Propranolol (b) porque es un betabloqueante no selectivo, ampliamente reconocido como uno de los medicamentos de primera línea para la profilaxis de la migraña. Su mecanismo de acción exacto en la prevención de la migraña no se comprende completamente, pero se cree que involucra la modulación de la actividad adrenérgica central, la reducción de la excitabilidad neuronal y la estabilización del tono vascular. Al reducir la frecuencia y la intensidad de los ataques, mejora significativamente la calidad de vida de los pacientes.\n\nEl Propranolol se administra de forma regular, no durante un ataque agudo, para disminuir la probabilidad de que ocurran los episodios migrañosos. Es una opción terapéutica efectiva y bien establecida, junto con otros betabloqueantes como el metoprolol y el timolol, ciertos anticonvulsivantes (ej. topiramato, divalproato) y antidepresivos tricíclicos (ej. amitriptilina). Sin embargo, debe usarse con precaución en pacientes con asma o enfermedad pulmonar obstructiva crónica (EPOC) debido a su potencial para causar broncoespasmo, y en aquellos con bradicardia o hipotensión.\n\nSu inclusión en la pregunta de EUNACOM resalta la importancia de conocer los tratamientos preventivos de la migraña, una condición neurológica prevalente que afecta significativamente la vida de los individuos. El manejo adecuado de la migraña abarca tanto el tratamiento agudo de los ataques como la profilaxis para reducir su incidencia.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
    },
    {
      "stem": "¿Cuál de los siguientes fármacos es útil como tratamiento profiláctico de la\nmigraña?",
      "options": [
        {
          "id": "A",
          "text": "Flunarizina"
        },
        {
          "id": "B",
          "text": "Ergotamina"
        },
        {
          "id": "C",
          "text": "Sumatriptán"
        },
        {
          "id": "D",
          "text": "Clozapina"
        },
        {
          "id": "E",
          "text": "Fluoxetina"
        }
      ],
      "correcta": "A",
      "explicacion": "La Flunarizina es un bloqueador de los canales de calcio de tipo L, y es el fármaco correcto en este contexto debido a su consolidado uso como tratamiento profiláctico de la migraña. Su mecanismo de acción exacto en la profilaxis migrañosa no está completamente dilucidado, pero se cree que actúa estabilizando las membranas neuronales, reduciendo la excitabilidad cerebral y previniendo la isquemia o hipoxia celular al mejorar el flujo sanguíneo cerebral y prevenir el vasoespasmo. Esto lo hace efectivo para disminuir la frecuencia, intensidad y duración de los ataques de migraña.\n\nLa Flunarizina se administra diariamente para prevenir los episodios, no para tratar un ataque agudo ya iniciado. Es considerada una opción de primera línea en la profilaxis de la migraña en varias guías clínicas, especialmente en pacientes con migraña de alta frecuencia o con contraindicaciones a otros tratamientos. Sus efectos secundarios incluyen somnolencia, aumento de peso y, en raras ocasiones, síntomas extrapiramidales o depresión, lo que requiere un seguimiento adecuado.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
    },
    {
      "stem": "Un paciente de 34 años consulta por cefaleas recurrentes, de varios años de\nevolución de carácter pulsátil, de localización frontoparietal y que suele ser\nmuy intensa, agravándose con los ruidos y con la luz. Las crisis se presentan 3 a\n4 veces al mes. El examen físico es normal. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Indicar AINES durante las crisis y ergotamina entre ellas, como tratamiento profiláctico"
        },
        {
          "id": "B",
          "text": "Indicar flunarizina durante las crisis y amitriptilina entre ellas, como tratamiento profiláctico"
        },
        {
          "id": "C",
          "text": "Indicar AINES durante las crisis y ácido valproico entre ellas, como tratamiento profiláctico"
        },
        {
          "id": "D",
          "text": "Indicar ergotamínicos durante las crisis y ácido propanolol entre ellas, como tratamiento profiláctico"
        },
        {
          "id": "E",
          "text": "Solicitar TAC de cerebro"
        }
      ],
      "correcta": "C",
      "explicacion": "El caso clínico describe a un paciente de 34 años con cefaleas recurrentes de larga evolución, de carácter pulsátil, localización frontoparietal, muy intensas, que se agravan con ruidos (fonofobia) y luz (fotofobia). La frecuencia es de 3 a 4 crisis al mes y el examen físico es normal. Esta constelación de síntomas es altamente sugestiva de Migraña sin aura, un tipo de cefalea primaria. La frecuencia de las crisis (3-4 veces al mes) es una indicación clara para iniciar tanto un tratamiento abortivo (para las crisis agudas) como un tratamiento profiláctico (para reducir la frecuencia e intensidad de las crisis).\n\nLa opción C propone indicar AINES (Antiinflamatorios No Esteroideos) durante las crisis. Los AINES son una opción de tratamiento abortivo de primera línea para las crisis de migraña, especialmente para las de intensidad leve a moderada, o como primera elección antes de triptanes si los síntomas son menos severos. Además, sugiere el uso de ácido valproico como tratamiento profiláctico. El ácido valproico es un anticonvulsivante que ha demostrado ser efectivo y es considerado una opción de primera línea en la profilaxis de la migraña, junto con los betabloqueadores (como propanolol) y los antidepresivos tricíclicos (como amitriptilina). Esta combinación ofrece un abordaje completo y basado en la evidencia para el manejo de la migraña.\n\nDado que la cefalea es una migraña típica sin signos de alarma (como inicio súbito, cambios en el patrón de la cefalea, signos neurológicos focales, etc.) y con un examen físico normal, la conducta más adecuada es iniciar el tratamiento farmacológico específico. La combinación de AINES para las crisis agudas y ácido valproico para la profilaxis es una estrategia terapéutica sólida y respaldada por las guías clínicas para pacientes con migraña de frecuencia moderada a alta.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.012"
    }
  ],
  "vignetteText": "Mujer de 28 años, abogada, sin antecedentes mórbidos, consulta por cuadro de 3 años de evolución de cefaleas episódicas que se presentan 4 a 5 veces al mes. Describe el dolor como hemicráneo derecho, intensamente pulsátil, que se agrava al caminar y la obliga a encerrarse a oscuras en su habitación por intolerancia a la luz y a los ruidos, acompañado de náuseas constantes y vómitos biliosos ocasionales. Cada episodio dura entre 24 y 36 horas si no toma medicamentos. Ha usado paracetamol y ketorolaco con alivio parcial y transitorio, lo que le ha generado ausentismo laboral reiterado. El examen neurológico completo y el fondo de ojo resultan rigurosamente normales."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "migrana, fisiopatologia, criterios, triptanes, profilaxis")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [2] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [3] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [4] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [5] EUNACOM Julio 2013 · Pregunta 137 · confianza 0.96
Un paciente de 26 años, estudiante universitario con regular rendimiento, es traído por sus padres porque desde hace tres meses no ha asistido a clases, ya que prefiere quedarse en su habitación. Ellos refieren que siempre fue solitario y que no buscaba tener amistades. Al entrevistarlo de forma dirigida se ríe sin motivo y refiere que no quiere salir de su habitación porque la voz del diablo lo amenaza. El diagnóstico más probable es:
- A) Trastorno delirante crónico
- B) Trastorno de la personalidad esquizoide
- C) Delirium
- D) Esquizofrenia hebefrénica
- E) Trastorno Bipolar
**Correcta: D**
Explicación del banco: Diagnóstico: **Esquizofrenia hebefrénica** (opción **D**). La risa sin motivo orienta a Hebefrenia. El cuadro clínico es sugerente de EQZ.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [6] EUNACOM Julio 2024 · Pregunta 73 · confianza 0.95
Una paciente de 27 años, cursando un embarazo de 32 semanas consulta en el servicio de urgencias, debido a que presenta contracciones uterinas dolorosas en su domicilio. Al examen físico se constatan contracciones uterinas de 3 en 10 minutos y se palpa el cuello uterino borrado en 50%, con dilatación de 1 cm. El registro fetal muestra frecuencia cardíaca fetal basal de 130 latidos por minutos, con buena variabilidad. ¿Cuál de los siguientes fármacos es el más adecuado para el manejo inicial de esta paciente?
- A) Ampicilina
- B) Indometacina
- C) Nifedipino
- D) Sulfato de magnesio
- E) Atosibán
**Correcta: C**
Explicación del banco: Manejo del Trabajo de Parto Prematuro: En un trabajo de parto prematuro menor a 34 semanas, se usan corticoides y tocolíticos. La indometacina se recomienda en menores de 32 semanas y el nifedipino desde las 32 semanas en adelante. El atosibán es un tocolítico de segunda línea, mientras que la ampicilina sí está indicada cuando avance el trabajo de parto, ya que se usa como profilaxis para el estreptococo del grupo B.

### [7] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [8] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [9] EUNACOM Enero 2023 · Pregunta 41 · confianza 0.95
Embarazada con antecedente de cesárea previa, durante el parto presenta cese de contracciones, sangrado y bradicardia fetal. ¿Diagnóstico más probable?
- A) Desprendimiento prematuro de placenta
- B) Placenta previa sangrante
- C) Prolapso de cordón umbilical
- D) Embolia de líquido amniótico
- E) Rotura uterina
**Correcta: E**
Explicación del banco: Diagnóstico: **Rotura uterina** (opción **E**). Rotura uterina. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [10] EUNACOM Enero 2023 · Pregunta 62 · confianza 0.95
Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas. ¿Diagnóstico más probable?
- A) Apendicitis aguda complicada
- B) Quiste ovárico torcido
- C) Embarazo ectópico roto
- D) Salpingitis aguda con absceso tubo-ovárico
- E) Rotura folicular hemorrágica
**Correcta: C**
Explicación del banco: Diagnóstico: **Embarazo ectópico roto** (opción **C**). Embarazo ectópico roto. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [11] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [12] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [13] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [14] EUNACOM Agosto 2021 · Pregunta 96 · confianza 0.95
Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular, hipolacrimia y xerostomía. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, ENA (-), AntiDNA 2h (-) y anticuerpos anti- CCP mayores a 200 UI/ml. La radiografía de manos muestra edema de partes blandas y osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es:
- A) Lupus eritematoso sistémico
- B) Artritis reumatoide
- C) Artritis psoriática
- D) Esclerosis sistémica
- E) Síndrome de Sjörgren primario
**Correcta: B**
Explicación del banco: Diagnóstico: **Artritis reumatoide** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Diciembre 2019 · Pregunta 59 · confianza 0.95
Una mujer de 18 años sufrió un rapto al salir de la oficina, por dos desconocidos. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente, sin lesiones físicas. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de lo sucedido, recordando solo cuando fue abordada por los desconocidos y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [16] EUNACOM Julio 2019 · Pregunta 168 · confianza 0.95
Una niña de 15 años presenta disconformidad con su cuerpo, por lo que lo oculta, utilizando ropa 2 o 3 tallas más grandes. Además, tiene retraimiento social y gran preocupación por las calorías que ingiere. Los padres refieren que anda con náuseas en el último tiempo, por lo que come poco y ha bajado de peso. Sin embargo ella se había negado a acudir al médico. El diagnóstico más probable es:
- A) Trastorno distímico
- B) Trastorno alimentario mixto
- C) Anorexia nervosa
- D) Trastorno depresivo mayor
- E) Bulimia nervosa
**Correcta: C**
Explicación del banco: Es una forma clásica de presentación de la anorexia, aunque no muestren todos los criterios (bajo peso, preocupación por el peso, alteración de la percepción corporal y amenorrea). Es frecuente que la paciente lo oculte, mienta o manipule a la familia, para que no la obliguen a subir de peso.

### [17] EUNACOM Diciembre 2019 · Pregunta 72 · confianza 0.95
Un lactante de 5 meses presenta un cuadro de tos y coriza, asociada a fiebre hasta 38,5°C. Al día siguiente evoluciona con dificultad respiratoria, taquipnea, retracción subcostal y subcostal. Al examen físico tiene FR: 70x’, uso de musculatura accesoria, sibilancias inspiratorias y espiratorias difusas e intensas, más cianosis perioral. ¿Cuál es el agente etiológico más probable?
- A) Virus respiratorio sincicial
- B) Bordetella pertusis
- C) Virus influenza
- D) Virus parainfluenza
- E) Neumococo
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Virus respiratorio sincicial). Es una bronquiolitis clásica, por VRS.. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh.

### [18] EUNACOM Julio 2019 · Pregunta 126 · confianza 0.95
Una paciente de 43 años presenta sequedad bucal, asociada a ardor y sensación de arenilla ocular y a artralgias. Al examen físico tiene sequedad de piel y de mucosas, se observa aumento de volumen de ambas parótidas y se palpan adenopatías submandibulares de consistencia aumentada. Se solicitan exámenes, que muestra FR: 40 UI/nl, ANA positivos 1/16, ENA negativo, antiDNA negativo. ¿Cuál es el examen de elección para proseguir el estudio diagnóstico?
- A) Punción parotidea
- B) Biopsia ganglionar
- C) Anticuerpos anti-CCP
- D) Biopsia de glándula salival accesoria
- E) Anticuerpos anti-Sm
**Correcta: D**
Explicación del banco: La historia es compatible con un síndrome de Sjögren (tiene el síndrome de Sicca: xeroftalmia y xerostomía). El 90% tiene FR positivo. Además, es frecuente que tengan positivos los ANA, con un perfil ENA que muestra anticuerpos anti-Ro o anti-La positivos. Se confirma la biopsia de glándula salival menor o con los anticuerpos anti-Ro o anti-La, aunque actualmente el diagnóstico se realiza en base a una serie de criterios clínicos y de laboratorio, que no vale la pena aprenderse.

### [19] EUNACOM Diciembre 2018 · Pregunta 132 · confianza 0.95
Una paciente de 32 años, madre de 4 hijos, de distintos padres, de los cuales no se hace cargo, tiene relaciones inestables y problemas frecuentes con sus compañeros de trabajo. Pelea frecuentemente con su familia y como antecedente, ha tenido varios episodios de autoagresión e intentos suicidas. ¿Cuál es el diagnóstico más probable?
- A) Esquizofrenia
- B) Trastorno límite de la personalidad
- C) Trastorno bipolar
- D) Trastorno delirante
- E) Trastorno depresivo mayor
**Correcta: B**
Explicación del banco: Diagnóstico: **Trastorno límite de la personalidad** (opción **B**). Es un TP limítrofe clásico.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [20] EUNACOM Diciembre 2017 · Pregunta 116 · confianza 0.95
Un paciente de 21 años, abandonó a los 18 años su hogar, viviendo solo en la calle. Tiene la idea de ser un enviado de Dios, con la misión de salvar al mundo y dice que los ángeles le susurran al oído diciéndole cómo hacerlo. Los familiares refieren que empezó hace 3 años con esto y que no ha cambiado mucho desde entonces. ¿Cuál es el diagnóstico más probable?
- A) Trastorno delirante crónico
- B) Esquizofrenia
- C) Trastorno bipolar
- D) Trastorno de personalidad esquizoide
- E) Trastorno de conducta
**Correcta: B**
Explicación del banco: Diagnóstico: **Esquizofrenia** (opción **B**). Es una EQZ clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [21] EUNACOM Julio 2017 · Pregunta 129 · confianza 0.95
Un hombre de 18 años tiene la idea de que algunas personas quieren dañarlo. Pre- viamente a esto presentaba retraimiento social. En el último tiempo el cuadro empeora, agregándose alucinaciones de voces, que lo insultan y ha descuidado significativamente su higiene personal. El diagnóstico más probable es:
- A) Esquizofrenia
- B) Personalidad esquizotípica
- C) Trastorno delirante crónico
- D) Trastorno esquizoafectivo
- E) Depresión psicótica
**Correcta: A**
Explicación del banco: Diagnóstico: **Esquizofrenia** (opción **A**). Es una esquizofrenia clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [22] EUNACOM Diciembre 2017 · Pregunta 114 · confianza 0.95
Una mujer de 18 años subió a un taxi, en el que el taxista se desvió del camino que debía tomar, siendo luego agredida por él. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de los sucedido, recordando solo cuando estaba en el taxi y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [23] EUNACOM Julio 2017 · Pregunta 12 · confianza 0.95
Una paciente de 59 años, luego de una pelea con su marido, se va de su casa y es en- contrada varias horas después sin recordar lo sucedido. ¿Cuál es el diagnóstico más probable?
- A) Trastorno facticio
- B) Trastorno disociativo
- C) Trastorno somatomorfo
- D) Trastorno conversivo
- E) Trastorno adaptativo
**Correcta: B**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **B**). Es una fuga disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [24] EUNACOM Diciembre 2017 · Pregunta 71 · confianza 0.95
Se busca la asociación entre distintos parámetros con el cáncer de tiroides, en un estudio de caso – control, con el Odds Ratio (OR), más un intervalo de confianza (IC) al 95%. ¿Qué factor es más importante en esta asociación?
- A) Antecedentes familiares: OR: 1,88 ; IC [0,56 – 4,01]
- B) Edad: OR: 2,6 ; IC [0,95 – 3,17]
- C) Sexo masculino: OR: 0,56 ; IC [0,33 – 0,87]
- D) Exposición a radiación: OR: 1,52 ; IC [0,91 – 2,01]
- E) Tiroiditis de Hashimoto: OR: 4,6 ; IC [0,7 – 6,2]
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (Sexo masculino: OR: 0,56 ; IC [0,33 – 0,87]). La opción C era la única estadísticamente significativa, ya que el OR no pasaba por el 1.. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh.

### [25] EUNACOM Diciembre 2017 · Pregunta 45 · confianza 0.95
Una paciente de 50 años, con antecedente de fenómeno de Raynaud frecuente, desde hace 5 años consulta por edema de los dedos y artritis de algunas articulaciones interfalángicas. Se solicitan exámenes inmunológicos que resultan ANA: positivos 1/320, en patrón anticentrómero; antiDNA: negativos; Anti Sm: negativos; Anti Ro negativo; Anti La: negativo; Factor reumatoide: negativo. ¿Cuál es el diagnóstico más probable?
- A) Artritis psoriática
- B) Esclerosis sistémica
- C) Lupus
- D) Enfermedad mixta del tejido conectivo
- E) Artritis reumatoide
**Correcta: B**
Explicación del banco: Diagnóstico: **Esclerosis sistémica** (opción **B**). Es un CREST clásico.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).
