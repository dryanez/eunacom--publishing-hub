# CLASE neuro-02 · Neurologia 10.2: Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria

Escribe `classes/lessons/neuro-02.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-02" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-01: Neurologia 10.1: Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES
- neuro-03: Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos
- neuro-04: Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino
- neuro-05: Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-02",
  "classId": "neuro-02",
  "tier": 2,
  "blockNum": 1,
  "blockName": "Enfermedad Cerebrovascular y Urgencias Neurovasculares",
  "topicLabel": "10.2",
  "title": "Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria",
  "perfilCode": "1.10.2.002",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES N° 37): Accidente Isquémico Transitorio · Hospitalización inmediata de pacientes con riesgo moderado a alto (ABCD² ≥ 4) para neuroimagen urgente, ecocardiograma, dúplex carotídeo y prevención secundaria precoz.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Alta · Diagnóstico diferencial crítico de déficit neurológico transitorio y prevención de ACV mayor",
  "algoTitle": "Algoritmo de Estratificación de Riesgo ABCD2 y Manejo Urgente del AIT",
  "diagram": {
    "title": "Estratificación y Manejo Precoz del AIT",
    "svg": "<svg viewBox=\"0 0 620 361\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Ataque Isquémico Transitorio (Déficit Focal Revertido)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Síntomas motores, del habla o amaurosis fugaz autolimitados</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">TAC de encéfalo sin infarto agudo</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Cálculo Obligatorio del Score ABCD² (0 a 7 puntos)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Edad ≥ 60 · PA ≥ 140/90 · Paresia unilateral / Habla</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Duración (&lt; 10 / 10-59 / ≥ 60 min) · Diabetes</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Puntaje Score ABCD² y Criterios de Riesgo Precoz?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Estratificación del riesgo de desarrollar un ACV isquémico discapacitante en las siguientes 48 horas</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">ABCD² ≥ 4 puntos o AIT en crescendo</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">ABCD² 0 a 3 puntos (Bajo Riesgo)</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Hospitalización Inmediata de Urgencia</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Doble antiagregación (AAS + Clopidogrel x 21 días)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Dúplex carotídeo + ECG/Holter + RM cerebral</text>\n  <rect class=\"dec\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Estudio Ambulatorio Acelerado (&lt; 48 h)</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Monoterapia antiagregante (AAS 100 mg) · Atorvastatina 80 mg</text>\n  <text class=\"sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Control estricto de factores de riesgo</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Detección de Fuente Embolígena o Estenosis Carotídea</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Si Estenosis carotídea 70-99%: Endarterectomía precoz (&lt; 14 días)</text>\n  <text class=\"accS\" x=\"310\" y=\"341\" text-anchor=\"middle\">Si Fibrilación Auricular: Anticoagulación oral DOAC</text>\n</svg>"
  },
  "contexto": "El ataque isquémico transitorio (AIT) no es un episodio benigno: es la mayor señal de alarma biológica en neurovasculares. Hasta el 10-15% de los pacientes que sufren un AIT desarrollarán un ACV isquémico mayor dentro de los siguientes 90 días, concentrándose la mitad de ese riesgo en las primeras 48 horas. El uso estricto del Score ABCD² identifica a los pacientes que requieren hospitalización inmediata para doble antiagregación y revascularización carotídea precoz.",
  "contentSections": [
    {
      "subhead": "1. Definición Tisular Moderna de AIT y Diagnóstico Diferencial",
      "paragraphs": [
        "La definición clásica basada en el tiempo (déficit neurológico focal que resuelve espontáneamente en menos de 24 horas) ha sido reemplazada por la <strong>definición basada en el tejido (AHA/ASA)</strong>: un AIT es un <em>episodio transitorio de disfunción neurológica causado por isquemia focal encefálica, medular o retiniana, SIN evidencia de infarto agudo en las técnicas de neuroimagen (RM-DWI o TAC)</em>.",
        "La gran mayoría de los verdaderos AIT duran menos de 60 minutos (típicamente entre 5 y 20 minutos). Si un paciente con resolución clínica completa de los síntomas presenta una restricción en la secuencia de difusión (DWI) de la resonancia magnética, el cuadro se reclasifica formalmente como <strong>infarto cerebral agudo con resolución clínica transitoria</strong>, asociándose a un riesgo sustancialmente mayor de recurrencia.",
        "La <strong>amaurosis fugaz (ceguera monocular transitoria)</strong> es un equivalente de AIT retiniano de alto valor localizador, caracterizado por una pérdida visual unilateral indolora descrita típicamente como un \"telón o cortina negra que desciende y asciende\", debida a microembolias hacia la arteria oftálmica o arteria central de la retina provenientes de una placa carotídea ipsilateral.",
        "<em>Diagnóstico diferencial (AIT mimics):</em> Migraña con aura típica (progresión lenta de síntomas visuales positivos en minutos, cefalea pulsátil posterior), crisis epilépticas focales con parálisis de Todd poscrítica, síncope o lipotimia, hipoglicemia aguda, vértigo periférico posicional y episodios de amnesia global transitoria."
      ]
    },
    {
      "subhead": "2. Score ABCD²: Estratificación del Riesgo de ACV a Corto Plazo",
      "paragraphs": [
        "El <strong>Score ABCD²</strong> es la herramienta pronóstica estándar de validación internacional para predecir la probabilidad de que un paciente sufra un ACV isquémico completo en las 48 horas y 7 días posteriores al AIT:",
        "• <strong>A (Age / Edad):</strong> ≥ 60 años = <strong>1 punto</strong>.",
        "• <strong>B (Blood Pressure / Presión arterial):</strong> PAS ≥ 140 mmHg o PAD ≥ 90 mmHg en la primera evaluación = <strong>1 punto</strong>.",
        "• <strong>C (Clinical features / Clínica):</strong> Hemiparesia o debilidad unilateral = <strong>2 puntos</strong>; Alteración del habla aislada sin paresia motora = <strong>1 punto</strong>; Otros síntomas = 0 puntos.",
        "• <strong>D (Duration / Duración de los síntomas):</strong> ≥ 60 minutos = <strong>2 puntos</strong>; 10 a 59 minutos = <strong>1 punto</strong>; &lt; 10 minutos = 0 puntos.",
        "• <strong>D (Diabetes):</strong> Antecedente de diabetes mellitus = <strong>1 punto</strong>.",
        "<strong>Categorías de Riesgo y Conducta:</strong>",
        "• <strong>Riesgo Alto (6 – 7 puntos):</strong> Riesgo de ACV a las 48 horas de 8.1% y a los 7 días de 11.7%. Requiere <strong>hospitalización inmediata obligatoria</strong>.",
        "• <strong>Riesgo Moderado (4 – 5 puntos):</strong> Riesgo de ACV a las 48 horas de 4.1% y a los 7 días de 5.9%. Requiere <strong>hospitalización en observación o unidad de ACV</strong>.",
        "• <strong>Riesgo Bajo (0 – 3 puntos):</strong> Riesgo a 48 horas de 1.0%. Puede estudiarse de forma ambulatoria expedita (&lt; 48 h) si no presenta criterios de alto riesgo asociados.",
        "<em>Criterios de hospitalización directa independiente del puntaje:</em> AIT en crescendo (≥ 2 episodios en 7 días), sospecha de etiología cardioembólica (FA conocida), estenosis carotídea sintomática significativa (&gt; 50%) o presencia de lesión aguda en la neuroimagen."
      ]
    },
    {
      "subhead": "3. Estudio Etiológico Rápido y Prevención Secundaria Precoz",
      "paragraphs": [
        "Todo paciente con AIT debe completar un estudio diagnóstico urgente dentro de las primeras 24 a 48 horas: 1) <strong>Neuroimagen</strong> (preferentemente Resonancia Magnética con DWI para descartar infarto tisular silente; si no está disponible, TAC de encéfalo sin contraste); 2) <strong>Evaluación vascular carotídea y vertebral</strong> mediante Eco-Doppler carotídeo/vertebral o AngioTAC; 3) <strong>Evaluación cardiológica</strong> con ECG de 12 derivaciones y monitorización continua (telemetría/Holter) para pesquisar fibrilación auricular paroxística, sumado a Ecocardiograma transtorácico/transesofágico.",
        "<strong>Prevención Secundaria Antiplaquetaria Inmediata:</strong>",
        "• En AIT no cardioembólico de alto riesgo (ABCD² ≥ 4 puntos), los ensayos clínicos <strong>CHANCE</strong> y <strong>POINT</strong> demostraron que la <strong>doble antiagregación plaquetaria (DAPT)</strong> iniciada precozmente (&lt; 24 horas) con <strong>Ácido Acetilsalicílico (AAS 100 mg/día) más Clopidogrel (dosis de carga 300 mg, luego 75 mg/día)</strong> reduce significativamente el riesgo de infarto recurrente frente a la monoterapia.",
        "• <em>Duración estricta de la DAPT:</em> <strong>Exactamente 21 días</strong>. Prolongar la terapia combinada más allá de 3 semanas no confiere beneficio adicional y duplica el riesgo de hemorragia digestiva e intracraneal mayor. Al día 22 se prosigue con monoterapia indefinida (AAS o clopidogrel).",
        "• <strong>Etiología Cardioembólica (Fibrilación Auricular):</strong> En AIT confirmado de origen cardioembólico, se inicia <strong>anticoagulación oral con DOACs (Apixabán, Rivaroxabán, Dabigatrán, Edoxabán)</strong> de manera precoz (al día 1 post-evento, al no haber masa necrótica cerebral susceptible de transformación hemorrágica).",
        "• <strong>Estenosis Carotídea Significativa:</strong> Si el dúplex o angioTAC confirma estenosis carotídea ipsilateral severa (70-99%) o moderada (50-69% en hombres), está indicada la <strong>Endarterectomía Carotídea</strong> dentro de las primeras <strong>2 semanas (idealmente en los primeros 7 días)</strong> tras el AIT."
      ]
    }
  ],
  "table": {
    "title": "Score ABCD²: Puntuación, Estimación de Riesgo de ACV a 48 h y Conducta Clínica",
    "headers": [
      "Factor de Riesgo",
      "Criterio Clínico Evaluado",
      "Puntaje Asignado",
      "Riesgo ACV a 48 h",
      "Conducta Asistencial Obligatoria"
    ],
    "rows": [
      [
        "Age (Edad)",
        "Edad ≥ 60 años",
        "1 punto",
        "Bajo (0 – 3 pts): 1.0%",
        "Estudio ambulatorio monitorizado en < 48 h (si no hay AIT en crescendo)"
      ],
      [
        "Blood Pressure",
        "Presión arterial ≥ 140/90 mmHg",
        "1 punto",
        "Moderado (4 – 5 pts): 4.1%",
        "Hospitalización inmediata en UTAC / camas de observación médica"
      ],
      [
        "Clinical Features",
        "Hemiparesia o debilidad unilateral",
        "2 puntos",
        "Alto (6 – 7 pts): 8.1%",
        "Hospitalización en UTAC + DAPT inmediata (AAS + Clopidogrel x 21 días)"
      ],
      [
        "Clinical Features",
        "Alteración del habla sin debilidad motora",
        "1 punto",
        "Alto (con estenosis carotídea): > 15%",
        "Hospitalización prioritaria + AngioTAC / Dúplex carotídeo de urgencia"
      ],
      [
        "Duration",
        "Duración del déficit ≥ 60 minutos",
        "2 puntos",
        "Alto (con FA asociada): > 10%",
        "Hospitalización inmediata + ECG continuo / Telemetría por 24-48 horas"
      ],
      [
        "Duration",
        "Duración del déficit entre 10 y 59 minutos",
        "1 punto",
        "—",
        "—"
      ],
      [
        "Diabetes",
        "Diagnóstico previo de Diabetes Mellitus",
        "1 punto",
        "—",
        "Iniciar Atorvastatina 80 mg/día de alta intensidad a permanencia"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 64 años, fumador activo e hipertenso tratado irregularmente con amlodipino, consulta en urgencias 2 horas después de haber presentado debilidad marcada en la mano y pierna derechas asociada a dificultad para articular palabras mientras trabajaba en el jardín. Los síntomas comenzaron súbitamente y desaparecieron por completo en aproximadamente 45 minutos. Al examen físico actual: PA 155/95 mmHg, FC 80 lpm regular, examen neurológico rigurosamente normal sin déficit focal motor ni sensitivo, lenguaje fluido y comprensión conservada. El TAC de encéfalo sin contraste descarta sangrado y no evidencia lesiones isquémicas recientes.",
    "conducta": "El paciente presentó un Ataque Isquémico Transitorio (AIT) de territorio carotídeo izquierdo. El cálculo del Score ABCD² arroja 5 puntos: Edad ≥ 60 años (1 pt), PA ≥ 140/90 mmHg (1 pt), hemiparesia unilateral (2 pts) y duración entre 10 y 59 minutos (1 pt), lo que lo clasifica como riesgo moderado-alto de desarrollar un ACV isquémico completo en las siguientes 48 horas (riesgo > 4-5%). La conducta obligatoria es la hospitalización inmediata de urgencia para completar el estudio etiológico (dúplex carotídeo, ECG/monitorización cardíaca para descartar fibrilación auricular y RM cerebral), iniciar doble antiagregación plaquetaria precoz con Ácido Acetilsalicílico más Clopidogrel durante exactamente 21 días y prescribir Atorvastatina 80 mg/día."
  },
  "explicacion": "El paciente presentó un Ataque Isquémico Transitorio (AIT) de territorio carotídeo izquierdo. El cálculo del Score ABCD² arroja 5 puntos: Edad ≥ 60 años (1 pt), PA ≥ 140/90 mmHg (1 pt), hemiparesia unilateral (2 pts) y duración entre 10 y 59 minutos (1 pt), lo que lo clasifica como riesgo moderado-alto de desarrollar un ACV isquémico completo en las siguientes 48 horas (riesgo > 4-5%). La conducta obligatoria es la hospitalización inmediata de urgencia para completar el estudio etiológico (dúplex carotídeo, ECG/monitorización cardíaca para descartar fibrilación auricular y RM cerebral), iniciar doble antiagregación plaquetaria precoz con Ácido Acetilsalicílico más Clopidogrel durante exactamente 21 días y prescribir Atorvastatina 80 mg/día.",
  "keyPoints": [
    "Un AIT se define actualmente por la ausencia de infarto en la neuroimagen (definición tisular); la persistencia de lesión en la RM reclasifica el caso como infarto cerebral.",
    "La mitad de los infartos que siguen a un AIT ocurren dentro de las primeras 48 horas: el AIT es una urgencia médica absoluta.",
    "El Score ABCD² estratifica el riesgo a corto plazo: A (edad ≥ 60: 1), B (PA ≥ 140/90: 1), C (paresia unilateral: 2; habla sola: 1), D (duración ≥ 60 min: 2; 10-59 min: 1), D (diabetes: 1).",
    "Puntaje ABCD² ≥ 4 puntos indica hospitalización inmediata obligatoria en una unidad de observación o UTAC.",
    "En AIT de alto riesgo no cardioembólico, la indicación de elección es doble antiagregación con AAS + Clopidogrel iniciada precozmente y mantenida por exactamente 21 días.",
    "La amaurosis fugaz representa una isquemia retiniana transitoria monocular secundaria a microembolias procedentes de la carótida ipsilateral.",
    "Si se identifica una estenosis carotídea sintomática ≥ 70%, la endarterectomía carotídea debe realizarse dentro de los primeros 14 días para prevenir un ACV mayor.",
    "En caso de confirmarse fibrilación auricular, la anticoagulación oral con DOACs debe iniciarse precozmente tras el AIT sin requerir semanas de espera."
  ],
  "questions": [
    {
      "stem": "Una mujer de 68 años con antecedentes de AC-VA isquémico derecho,\ncardiopatía isquémica (angina crónica estable), hipertensión arterial bien\ncontrolada y diabetes mellitus tipo 2, consulta por un episodio de AIT (ataque\nisquémico transitorio). En la tomografía axial computarizada no se observan\ncambios en la imagen cerebral previa y en el electrocardiograma se confirma la\nexistencia de una fibrilación auricular, con respuesta ventricular normal, cuya\nreversión a ritmo sinusal, tanto eléctrica como farmacológica, había fracasado\npreviamente. En la ecografía se observa la existencia de una aurícula izquierda\naumentada de tamaño. Los días antes del último episodio seguía tratamiento\ncon aspirina (150 mg diarios). ¿Cuál sería su consejo terapéutico?:",
      "options": [
        {
          "id": "A",
          "text": "Iniciaría tratamiento con acenocumarol como terapia inicial o tras el empleo de heparina de bajo peso molecular."
        },
        {
          "id": "B",
          "text": "Sustituiría la aspirina por clopidogrel."
        },
        {
          "id": "C",
          "text": "Añadiría clopidogrel a la aspirina"
        },
        {
          "id": "D",
          "text": "Duplicaría la dosis de aspirina."
        },
        {
          "id": "E",
          "text": "Antes de retirar la aspirina intentaría una nueva reversión farmacológica"
        }
      ],
      "correcta": "A",
      "explicacion": "La paciente presenta una fibrilación auricular (FA) con múltiples factores de riesgo tromboembólico, evidenciados por su antecedente de ACV isquémico, diabetes mellitus tipo 2, hipertensión arterial, cardiopatía isquémica, edad (68 años) y sexo femenino. Esto le confiere un puntaje CHA2DS2-VASc muy elevado (7 puntos: 1 por HTA, 1 por DM2, 2 por ACV previo, 1 por enfermedad vascular, 1 por edad 65-74, 1 por sexo femenino), lo que indica un riesgo muy alto de eventos cerebrovasculares isquémicos. El hecho de haber sufrido un ataque isquémico transitorio (AIT) mientras recibía aspirina, sumado a la FA crónica y una aurícula izquierda aumentada de tamaño, refuerza la insuficiencia de la terapia antiplaquetaria para la prevención de tromboembolismos de origen cardioembólico.\n\nLa guía actual para pacientes con FA de alto riesgo como esta, recomienda encarecidamente la anticoagulación oral para la prevención de eventos tromboembólicos. Los antagonistas de la vitamina K, como el acenocumarol, o los anticoagulantes orales directos (DOACs), son significativamente más efectivos que la aspirina o la terapia antiplaquetaria dual en la prevención de eventos cardioembólicos. La opción A propone iniciar acenocumarol, un anticoagulante oral, lo cual es la estrategia más apropiada y basada en la evidencia para esta paciente. La mención de \"terapia inicial o tras el empleo de heparina de bajo peso molecular\" es consistente con la práctica clínica, donde a menudo se utiliza heparina como puente para lograr una anticoagulación rápida mientras el acenocumarol alcanza su nivel terapéutico, especialmente en un contexto de un evento agudo como un AIT.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Un paciente de 46 años, portador de una ACxFA crónica, en tratamiento con\naspirina, presenta bruscamente imposibilidad para hablar y entender el\nlenguaje, asociado a hemiparesia derecha, de 30 minutos de duración, que\nceden espontáneamente. Al examen físico está completamente normal, excepto\npor el pulso irregular a 80x’. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Enviar a domicilio, indicando anticoagulación con cumarínicos"
        },
        {
          "id": "B",
          "text": "Administrar heparina de bajo peso molecular y enviar a domicilio, con nuevas dosis subcutáneas, cada 12 horas"
        },
        {
          "id": "C",
          "text": "Solicitar TAC de cerebro y mantener aspirina"
        },
        {
          "id": "D",
          "text": "Enviar a domicilio, indicando control ambulatorio con el neurólogo"
        },
        {
          "id": "E",
          "text": "Hospitalizar, iniciar anticoagulación con heparina, solicitar resonancia magnética nuclear de cerebro e iniciar medidas de neuroprotección"
        }
      ],
      "correcta": "E",
      "explicacion": "La respuesta correcta es (e) debido a que el paciente presenta un Ataque Isquémico Transitorio (AIT) de alto riesgo. Un AIT se define como un episodio transitorio de disfunción neurológica causado por isquemia focal cerebral, medular o retiniana, sin infarto agudo. En este caso, la sintomatología (afasia y hemiparesia derecha) es altamente sugestiva de isquemia cerebral en el territorio de la arteria cerebral media izquierda, y la resolución espontánea en 30 minutos cumple con la definición de AIT. El factor de riesgo crucial es la Fibrilación Auricular Crónica (ACxFA), la causa más frecuente de accidente cerebrovascular cardioembólico. A pesar de estar en tratamiento con aspirina, la aparición de un AIT con ACxFA indica un fracaso de la profilaxis antiplaquetaria y una necesidad urgente de cambiar a anticoagulación.\n\nLa hospitalización es imperativa en pacientes con AIT de alto riesgo, como aquellos con fibrilación auricular, para una evaluación rápida y exhaustiva y para iniciar la prevención secundaria de forma inmediata. El riesgo de un accidente cerebrovascular (ACV) después de un AIT es máximo en las primeras horas a días. La resonancia magnética nuclear (RMN) de cerebro con secuencia de difusión (DWI) es el estudio de imagen más sensible para detectar isquemia aguda, incluso en casos donde la TAC cerebral puede ser normal. Iniciar anticoagulación con heparina (ya sea no fraccionada o de bajo peso molecular) es la medida más adecuada para prevenir un evento isquémico recurrente en un paciente con AIT de origen cardioembólico por ACxFA, proporcionando un efecto anticoagulante rápido mientras se espera la estratificación y el inicio de la anticoagulación oral a largo plazo. Las \"medidas de neuroprotección\" en este contexto se refieren a un manejo integral para optimizar el pronóstico, incluyendo el control estricto de factores de riesgo como la presión arterial, la glucemia y el manejo de lípidos, además de la anticoagulación efectiva para prevenir un ACV establecido.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    }
  ],
  "vignetteText": "Hombre de 64 años, fumador activo e hipertenso tratado irregularmente con amlodipino, consulta en urgencias 2 horas después de haber presentado debilidad marcada en la mano y pierna derechas asociada a dificultad para articular palabras mientras trabajaba en el jardín. Los síntomas comenzaron súbitamente y desaparecieron por completo en aproximadamente 45 minutos. Al examen físico actual: PA 155/95 mmHg, FC 80 lpm regular, examen neurológico rigurosamente normal sin déficit focal motor ni sensitivo, lenguaje fluido y comprensión conservada. El TAC de encéfalo sin contraste descarta sangrado y no evidencia lesiones isquémicas recientes."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "isquemico, transitorio, estratificacion, prevencion, secundaria")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Agosto 2021 · Pregunta 62 · confianza 0.98
Un hombre de 34 años presenta erección dolorosa, desde hace 8 horas. Al examen se corrobora que tiene erección completa, pero turgencia solo de los cuerpos cavernosos, con glande y cuerpos esponjosos blandos. ¿Cuál es la conducta inicial más adecuada?
- A) Aplicar hielo en la zona genital
- B) Realizar derivación cavernoesponjosa de urgencia
- C) Administrar atropina intracavernosa
- D) Administrar analgésicos endovenosos
- E) Administrar fenilefrina intracavernosa
**Correcta: E**
Explicación del banco: El priapismo isquémico (erección dolorosa y mayor a 4 horas, que suele perder la turgencia del glande y cuerpo esponjoso) es una urgencia y se maneja en primer lugar con fenilefrina intracavernosa, seguido luego de manejo invasivo con drenaje y lavado con SF de los cuerpos cavernosos y, si falla, con derivación cavernoesponjosa. También se deben buscar causas secundarias (ej. drepanocitosis o leucemia) y, además, distinguirlo del priapismo de alto flujo o no isquémico (que es por hiperflujo arterial y generalmente no duele ni tiene riesgo de complicarse con disfunción eréctil permanente, por lo que se observa o maneja con compresas de hielo para acelerar su desaparición).

### [2] EUNACOM Julio 2025 · Pregunta 10 · confianza 0.95
Hombre de 35 años sin antecedentes previos consulta por edema facial al despertar, orina espumosa y aumento de peso de 5 kg en 2 semanas. Proteinuria 24h: 8 g. Albúmina 2.0 g/dL. Sin hematuria. ¿Cuál es el diagnóstico más probable?
- A) Síndrome nefrótico puro
- B) Síndrome nefrítico agudo
- C) Glomerulonefritis membranoproliferativa
- D) Nefropatía IgA
- E) Pielonefritis crónica
**Correcta: A**
Explicación del banco: Proteinuria masiva (>3.5 g/24h) + hipoalbuminemia + edema + sin hematuria = síndrome nefrótico puro. En adulto joven sin causa secundaria, la causa más frecuente es nefropatía por cambios mínimos.

### [3] EUNACOM Diciembre 2025 · Pregunta 143 · confianza 0.95
¿A qué concepto corresponde la siguiente deﬁnición: “Conjunto de medidas des8nadas a evitar que una enfermedad ocurra, actuando antes de que exista la enfermedad o el daño causado por esta”?
- A) Prevención primaria
- B) Prevención secundaria
- C) Prevención terciaria
- D) Prevención cuaternaria
- E) Promoción de la salud
**Correcta: A**
Explicación del banco: Prevención primaria actúa antes de que exista la enfermedad (ej. vacunas con papiloma). Prevención secundaria actúa cuando ya existe la enfermedad, pero todavía no hay síntomas, permiGendo un diagnóstico oportuno (ej. PAP). Prevención terciaria actúa cuando la enfermedad ya Gene síntomas, para recuperar la salud y evitar complicaciones y recidivas (ej. histerectomía radical). Prevención cuaternaria enfrenta los síntomas, en ausencia de una patología orgánica (ej. psicoterapia de trastorno somatomorfo). Promoción de la salud consiste en enseñar hábitos de vida saludables, por lo que se enmarca dentro de la prevención primaria, pero su deﬁnición es especíﬁca.

### [4] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [5] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [6] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [7] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [8] EUNACOM Diciembre 2022 · Pregunta 44 · confianza 0.95
Una mujer de 32 años, consulta por dolor intenso en el oído izquierdo, que inició después de haberse limpiado con un cotonito (hisopo). No tiene síntomas vestibulares, aunque refiere hipoacusia moderada en dicho oído. Se realiza otoscopía, que muestra presencia de una perforación timpática triangular, con sangre en el conducto auditivo externo. ¿Cuál es la conducta más adecuada?
- A) Lavado de oídos
- B) Ciprofloxacino tópico
- C) Derivar a timpanoplastía
- D) Control en un mes
- E) TAC de oídos
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Lavado de oídos** (opción **A**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Ciprofloxacino tópico, Derivar a timpanoplastía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [9] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [10] EUNACOM Diciembre 2022 · Pregunta 5 · confianza 0.94
Una paciente de 48 años consulta por sangrado uterino, que no ha cesado desde su última menstruación, que inició hace dos semanas. Se solicita una ecografía transvaginal que muestra útero de tamaño normal, con endometrio de 19 mm de grosor y sin alteraciones anexiales. Su PAP, realizado hace poco es normal y su test de embarazo en orina es negativo. ¿Cuál es la conducta más adecuada?
- A) Histerectomía
- B) Ácido tranexámico endovenoso
- C) Estrógenos inyectables
- D) Anticonceptivos orales combinados
- E) Biopsia de endometrio
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Biopsia de endometrio** (opción **E**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Histerectomía, Ácido tranexámico endovenoso) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [11] EUNACOM Agosto 2021 · Pregunta 1 · confianza 0.93
Un paciente de 20 años presenta episodios de descontrol y agresividad, en los que rompe objetos, grita, amenaza con agredir y con autoagredirse. Se molesta mucho cuando le cambian sus cosas de lugar y tiene rutinas muy marcadas, las que le cuesta mucho modificar. Abandonó la secundaria, ya que reprobó dos veces primero medio. Además, tiene muy buena memoria, al punto que puede memorizar los códigos de barras de distintos productos. Desde niño que fue considerado como raro, no entablaba amistades y jugaba solo siempre con el mismo juguete, además de ver repetidamente sus dos películas favoritas. Saluda a las personas de una manera extraña, con aleteo de sus extremidades superiores. ¿Cuál es el diagnóstico más probable?
- A) Esquizofrenia
- B) Trastorno bipolar
- C) Trastorno de personalidad limítrofe
- D) Trastorno del especto autista
- E) Trastorno estereotipado del movimiento
**Correcta: D**
Explicación del banco: Es un TEA clásico del adulto, con rigidez cognitiva, intereses restringidos, alteraciones sociales, estereotipias más escasa autorregulación, seguramente por estar mal manejado.

### [12] EUNACOM Diciembre 2022 · Pregunta 179 · confianza 0.92
Una paciente de 24 años, primigesta de 12 semanas, consulta porque presenta náuseas y vómitos que afectan significativamente su calidad vida. ¿Cuál de los siguientes tratamientos es más adecuado para el manejo inicial de esta paciente?
- A) Corticoides orales
- B) Omeprazol oral
- C) Doxilamina más piridoxina oral
- D) metoclopramida oral
- E) Ondasentrón oral
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Doxilamina más piridoxina oral** (opción **C**). Tratamiento Escalonado De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad. Las opciones alternativas (Corticoides orales, Omeprazol oral) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [13] EUNACOM Diciembre 2019 · Pregunta 125 · confianza 0.92
Un paciente está hospitalizado por un infarto agudo al miocardio, con supradesnivel del segmento ST, de dos días de evolución. Presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión arterial. En su examen físico tiene FC: 115x’, PA: 80/50 mmHg, examen pulmonar con crepitaciones bilaterales intensos y examen cardíaco con ritmo regular en 2 tonos, con soplo sistólico intenso, de localización precordial. El diagnóstico más probable es:
- A) Taponamiento cardíaco por rotura de la pared libre
- B) Disfunción valvular aórtica isquémica
- C) Rotura del músculo papilar
- D) Shock cardiogénico por infarto masivo
- E) Disección de la raíz aórtica
**Correcta: C**
Explicación del banco: Es una rotura clásica del músculo papilar con la insuficiencia mitral secundaria. Insisto, lean el resumen de semiología cardíaca.

### [14] EUNACOM Julio 2018 · Pregunta 121 · confianza 0.92
Una paciente de 28 años, multípara de 2, con un parto nacido por cesárea y el segundo nacido por vía vaginal. Consulta por pérdida de líquido claro por genitales. La especuloscopía no muestra alteraciones, por lo que se realiza un test de nitrazina, con pH: 5,5. La ecografía obstétrica muestra feto en cefálica, con peso acorde para la edad gestacional, con índice de líquido amniótico de 2,2 y 128 latidos cardiofetales por minuto. ¿Cuál es la conducta más adecuada?
- A) Inducir el parto
- B) Realizar amniocentesis
- C) Solicitar Doppler fetal
- D) Realizar operación cesárea
- E) Mantener una conducta expectante
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Mantener una conducta expectante** (opción **E**). Manejo De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad. Las opciones alternativas (Inducir el parto, Realizar amniocentesis) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [15] EUNACOM Diciembre 2025 · Pregunta 180 · confianza 0.9
Una paciente de 23 años no llega a su domicilio luego de un conﬂicto familiar grave, siendo encontrada dos días después en una ciudad diferente, en buenas condiciones generales. Ella no recuerda nada de lo sucedido en ese intervalo de 8empo y no parece estar preocupada por ello. Su examen neurológico es normal. ¿Cuál es el diagnós8co más probable?
- A) Amnesia global transitoria
- B) Episodio psicó2co breve
- C) Trastorno conversivo
- D) Trastorno de estrés agudo
- E) Trastorno disocia2vo
**Correcta: E**
Explicación del banco: Tiene una fuga disociativa clásica, que es un Gpo de amnesia disociativa, en la que, además, se produce una “fuga” desde su lugar habitual. No se debe confundir con la amnesia global transitoria, que es un Gpo de accidente isquémico transitorio cerebral (se debe buscar fuente embólica), que se caracteriza por desorientación y amnesia (repiGendo las mismas preguntas), autolimitado, de pocas horas de evolución.

### [16] EUNACOM Julio 2025 · Pregunta 166 · confianza 0.9
paciente con diabetes gestacional 28 semanas, con tto metformina pero con cifras elevadas de glicemia, se preguntaba cómo continuar tto
- A) Pioglitazona
- B) agregar insulina
- C) Glibenclamida
- D) Sitagliptina
- E) Metformina
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Pioglitazona). agregar insulina. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (agregar insulina, Glibenclamida) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [17] EUNACOM Diciembre 2024 · Pregunta 49 · confianza 0.9
Se hace estudio de FRCV y alimentación en estudiantes medicina en el año 2000. En el 2022 se reevalúa a los mismos para ver aparición de enfermedades cv. Qué tipo de estudio es: a.​ Cohortes prospectivo.
- B) Cohorte retrospectivo
- C) Caso control
- D) Transversal
- D) Hemograma y VHS
- E) Ecografía
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Cohorte retrospectivo, Caso control) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [18] EUNACOM Diciembre 2024 · Pregunta 90 · confianza 0.9
Mujer de 40 y tantos con aborto y a la especuloscopía se ve salida de vesículas: a.​ Enfermedad trofoblastica
- A) Ninguna de las anteriores es correcta
- B) Todas las anteriores son correctas
- C) No se dispone de información suficiente
- D) Otra alternativa no descrita
- E) Otra alternativa no descrita
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Ninguna de las anteriores es correcta). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Todas las anteriores son correctas, No se dispone de información suficiente) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [19] EUNACOM Diciembre 2024 · Pregunta 131 · confianza 0.9
Valvulopatía en paciente joven con síncope a.​ Estenosis aórtica
- A) Ninguna de las anteriores es correcta
- B) Todas las anteriores son correctas
- C) No se dispone de información suficiente
- D) Otra alternativa no descrita
- E) Otra alternativa no descrita
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Ninguna de las anteriores es correcta). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Todas las anteriores son correctas, No se dispone de información suficiente) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [20] EUNACOM Diciembre 2024 · Pregunta 147 · confianza 0.9
Adulto mayor con temblor al escribir, un temblor esencial ¿Con que se trata? a.​ Propanolol
- A) Accidente cerebrovascular
- B) Epilepsia
- C) Esclerosis múltiple
- D) Enfermedad de Parkinson
- E) Migraña
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Accidente cerebrovascular). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Epilepsia, Esclerosis múltiple) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [21] EUNACOM Diciembre 2024 · Pregunta 75 · confianza 0.9
El uso del enmascaramiento (doble ciego controlado) como medida en estudios epidemiológicos tiene como objetivo:
- A) Disminuir el sesgo de información
- B) Disminuir sesgo de selección (es de información, en específico los subtipos del evaluador y el evaluado, sesgo de selección sería realizar un estudio excluyendo de la muestra de estudio una población especifica y relevante)
- C) Darle mayor valor al estudio
- D) Disminuir el error aleatorio
- E) Hemograma y VHS
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Disminuir el sesgo de información). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Disminuir sesgo de selección (es de informaci, Darle mayor valor al estudio) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [22] EUNACOM Diciembre 2024 · Pregunta 114 · confianza 0.9
Paciente con glaucoma crónico, con ojo izquierdo con visión en túnel y ojo derecho con el signo de humo de chimenea, al evaluar el ojo con glaucoma crónico, ¿qué hallazgo tendría?:
- A) Midriasis arreflectica
- B) Reflejo ?/
- C) Miosis
- D) Defecto pupilar aferente (esta porque la principal complicación del glaucoma crónico es el daño del nervio óptico que se vería con un DPA)
- E) Ninguna de las anteriores es correcta
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Midriasis arreflectica). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Reflejo ?/, Miosis) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [23] EUNACOM Diciembre 2024 · Pregunta 2 · confianza 0.9
Mujer 30 años con aparición de Placa eritematodescamativa de 2 meses de evolución en pómulo derecho de 3 cm de diámetro y otra similar en cuero cabelludo (zona parietal izquierda) con alopecia central.
- A) Lupus cutáneo crónico
- B) Dermatitis seborreica
- C) Psoriasis
- D) Liquen plano
- E) Rosácea
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Lupus cutáneo crónico). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Dermatitis seborreica, Psoriasis) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [24] EUNACOM Diciembre 2024 · Pregunta 71 · confianza 0.9
Pérdida de agudeza visual en días, que alcanzaba a contar dedos y tenía defecto pupilar aferente, Entopsias y fotopsias: a.​ Desprendimiento de retina
- A) Ninguna de las anteriores es correcta
- B) Todas las anteriores son correctas
- C) No se dispone de información suficiente
- D) Otra alternativa no descrita
- E) Otra alternativa no descrita
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Ninguna de las anteriores es correcta). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Todas las anteriores son correctas, No se dispone de información suficiente) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [25] EUNACOM Enero 2023 · Pregunta 136 · confianza 0.9
Paciente con hipoacusia y tinnitus, examen otoneurológico normal. ¿Cuál es el examen a solicitar?
- A) Potenciales evocados auditivos del tronco cerebral
- B) Impedanciometría
- C) RNM de ángulo pontocerebeloso
- D) TAC de peñascos
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Audiometría. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Potenciales evocados auditivos del tronco cer, Impedanciometría) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.
