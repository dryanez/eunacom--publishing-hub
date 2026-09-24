# CLASE neuro-03 · Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos

Escribe `classes/lessons/neuro-03.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-03" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-01: Neurologia 10.1: Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES
- neuro-02: Neurologia 10.2: Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria
- neuro-04: Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino
- neuro-05: Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena
- neuro-06: Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-03",
  "classId": "neuro-03",
  "tier": 3,
  "blockNum": 1,
  "blockName": "Enfermedad Cerebrovascular y Urgencias Neurovasculares",
  "topicLabel": "10.3",
  "title": "Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos",
  "perfilCode": "1.10.2.003",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES): Manejo de Emergencias Neuroquirúrgicas y Cuidados Intensivos en Accidente Cerebrovascular Hemorrágico · Derivación inmediata a UCI/Neurocirugía.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Muy Alta · Emergencia neurovascular crítica con toma de decisiones terapéuticas de minutos",
  "algoTitle": "Algoritmo de Manejo Integral en Hemorragia Intracerebral Aguda",
  "diagram": {
    "title": "Manejo Inicial de la Hemorragia Intracerebral Aguda",
    "svg": "<svg viewBox=\"0 0 620 339\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de ACV Hemorrágico (Cefalea + Vómitos + HTA severa + Focalidad)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Deterioro rápido del estado de conciencia · TAC de Encéfalo sin Contraste inmediato</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Confirmación Tomográfica: Hiperdensidad Parenquimatosa Aguda (HIE)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Calcular volumen del hematoma (fórmula ABC/2) · Evaluar invasión ventricular e ICH Score</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Pilares Simultáneos de Emergencia en las Primeras Horas</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Detener la expansión precoz del hematoma (ocurre en el 35% de los casos en &lt; 6 h)</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Manejo Tensional Activo (PAS 150 - 220 mmHg)</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Uso Previo de Anticoagulantes Orales</text>\n  <rect class=\"crit\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Descenso Rápido de PAS (Meta: 130 - 140 mmHg)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Labetalol o Nicardipino EV en infusión continua</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Evitar PAS &lt; 130 mmHg</text>\n  <rect class=\"dec\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Reversión Inmediata de Coagulación</text>\n  <text class=\"sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">AVK: Complejo Protrombínico (CCP) + Vit K</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">DOAC: Idarucizumab / Andexanet / CCP</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Quirúrgica por Neurocirugía de Urgencia</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Hemorragia cerebelosa ≥ 3 cm o compresión tronco: CIRUGÍA INMEDIATA</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Drenaje ventricular si hidrocefalia</text>\n</svg>"
  },
  "contexto": "La hemorragia intracerebral espontánea (HIE) representa el 15-20% de todos los ictus, pero concentra más del 50% de la mortalidad neurovascular. A diferencia del infarto isquémico, en la hemorragia el hematoma tiende a expandirse activamente en las primeras 3 a 6 horas. El éxito terapéutico descansa en dos medidas médicas impostergables de minutos: el control intensivo y seguro de la presión arterial (meta PAS 130-140 mmHg) y la reversión ultraprecoz de la anticoagulación previa, sumado a la identificación de hematomas cerebelosos tributarios de evacuación quirúrgica urgente.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Etiologías Cardinales y Fenómeno de Expansión",
      "paragraphs": [
        "La hemorragia intracerebral no traumática consiste en la extravasación hemática hacia el parénquima encefálico debida a la rotura transmural de arteriolas o vasos de pequeño calibre previamente debilitados por patología vascular subyacente.",
        "<strong>Dos etiologías principales:</strong>",
        "1. <strong>Arteriolopatía Hipertensiva (80%):</strong> Se asocia a hipertensión arterial crónica no controlada, que provoca lipohialinosis, degeneración fibrinoide y formación de microaneurismas de Charcot-Bouchard en arterias perforantes profundas. Afecta típicamente a núcleos profundos: <strong>ganglios basales (putamen 50%)</strong>, <strong>tálamo (15-20%)</strong>, <strong>puente / protuberancia (10-15%)</strong> y <strong>hemisferios cerebelosos (10%)</strong>.",
        "2. <strong>Angiopatía Amiloide Cerebral (AAC) (15-20%):</strong> Predomina en adultos mayores de 65-70 años no necesariamente hipertensos. Se debe al depósito de péptido beta-amiloide en la túnica media y adventicia de arterias de pequeño/mediano calibre corticales y leptomeníngeas. Origina de forma característica <strong>hemorragias lobares (subcorticales/corticales)</strong>, frecuentemente recurrentes y asociadas a microsangrados corticales asintomáticos visibles en secuencias de gradiente de eco o SWI de la resonancia magnética.",
        "<em>Otras causas:</em> Malformaciones arteriovenosas (MAV), aneurismas micóticos, cavernomas, trombosis venosa cerebral con infarto hemorrágico, coagulopatías, consumo de drogas simpaticomiméticas (cocaína, anfetaminas en pacientes jóvenes) y tumores cerebrales hipervascularizados con sangrado intratumoral (metástasis de coriocarcinoma, melanoma, cáncer de tiroides o renal)."
      ]
    },
    {
      "subhead": "2. Síndromes Clínicos Topográficos y Neuroimagen de Urgencia",
      "paragraphs": [
        "La presentación clínica típica consiste en la instauración aguda o hiperaguda (minutos a pocas horas) de cefalea intensa, náuseas, vómitos explosivos, cifras tensionales marcadamente elevadas (frecuentemente PAS &gt; 180-220 mmHg), déficit motor/sensitivo focal progresivo y compromiso de conciencia que puede fluctuar desde el letargo hasta el coma profundo.",
        "<strong>Correlación anatomo-clínica según topografía:</strong>",
        "• <strong>Hemorragia Putaminal:</strong> Hemiplejia faciobraquiocrural contralateral densa y armónica, hemihipoestesia contralateral, afasia (si lesiona hemisferio dominante) y desviación oculocefálica conjugada hacia el lado de la lesión (el paciente \"mira su lesión\").",
        "• <strong>Hemorragia Talámica:</strong> Hemihipoestesia contralateral severa (a menudo mayor que el déficit motor), parálisis de la mirada vertical superior (<em>síndrome de Parinaud</em>), desviación ocular hacia abajo y adentro (\"ojos que miran la nariz\"), pupilas mióticas arreactivas y somnolencia precoz.",
        "• <strong>Hemorragia Protuberancial (Pontina):</strong> Coma fulminante, <strong>pupilas puntiformes (miosis extrema pero reactiva a la luz con lupa)</strong>, tetraparesia flácida o postura de descerebración temprana, ausencia de reflejos oculocefálicos, hipertermia maligna y paro respiratorio central por destrucción de los centros respiratorios del tronco.",
        "• <strong>Hemorragia Cerebelosa:</strong> Cefalea occipital súbita, vértigo intenso, vómitos incoercibles, ataxia de la marcha con incapacidad total para la bipedestación y dismetría ipsilateral, <em>inicialmente SIN debilidad en las extremidades</em>. ¡Urgencia quirúrgica máxima por riesgo inminente de compresión de troncoencefálico, hidrocefalia obstructiva y herniación amigdalina!",
        "El <strong>TAC de encéfalo sin contraste</strong> es el examen diagnóstico de elección (gold standard en agudo): muestra una colección hiperdensa homogénea (40-80 Unidades Hounsfield) intraparenquimatosa. El volumen se estima mediante la fórmula ABC/2. La AngioTAC con fase de contraste detecta el <strong>signo del spot (spot sign)</strong>, fuga activa de contraste intralesional que predice expansión inminente del hematoma."
      ]
    },
    {
      "subhead": "3. Manejo Hemodinámico Inmediato: Control Estricto de la Presión Arterial",
      "paragraphs": [
        "La elevación extrema de la presión arterial en la HIE se asocia directamente a la <strong>expansión precoz del hematoma</strong>, aumento del edema perihematomal y mayor mortalidad.",
        "<strong>Protocolo tensional actual (Guías AHA/ASA y ESO 2022-2024):</strong>",
        "• En pacientes que ingresan con PAS entre 150 y 220 mmHg, la recomendación formal es lograr una <strong>reducción rápida, suave y sostenida de la PAS con meta objetivo de 130 a 140 mmHg</strong>, idealmente dentro de las primeras 1 a 2 horas desde el diagnóstico.",
        "• <em>Límite de seguridad:</em> Debe evitarse categóricamente que la PAS caiga por debajo de 130 mmHg o sufra descensos abruptos (&gt; 60 mmHg en pocos minutos), ya que ello compromete la perfusión cerebral global e induce daño renal agudo.",
        "• <strong>Fármacos de elección:</strong> Deben usarse vasodilatadores arteriales de vida media corta y administración endovenosa en infusión continua: <strong>Labetalol EV</strong> (bolos de 10-20 mg cada 10-15 min o infusión a 2-8 mg/min) o <strong>Nicardipino EV</strong> (infusión continua de 5-15 mg/h). Están contraindicados fármacos como nitroprusiato de sodio o hidralazina por producir vasodilatación venosa cerebral con elevación de la presión intracraneana."
      ]
    },
    {
      "subhead": "4. Reversión Rápida de la Coagulopatía y Anticoagulación Previa",
      "paragraphs": [
        "La hemorragia intracerebral asociada a fármacos anticoagulantes presenta tasas de expansión del 50% y una mortalidad que supera el 60%. La reversión de la hemostasia debe iniciarse de forma inmediata, en cuestión de minutos:",
        "• <strong>Antagonistas de la Vitamina K (Acenocumarol / Warfarina con INR &gt; 1.4):</strong>",
        "  1. <strong>Complejo Protrombínico Concentrado no activado de 4 factores (CCP 4F):</strong> Es la <strong>terapia de primera línea indiscutida</strong> (dosis de 25 a 50 UI/kg EV según INR basal). Normaliza el INR en menos de 15 a 30 minutos sin sobrecarga de volumen.",
        "  2. <strong>Vitamina K1 (Fitomenadiona) 10 mg EV lenta:</strong> Debe administrarse <em>siempre en conjunto con el CCP</em> para mantener la síntesis hepática de nuevos factores a partir de las 4-6 horas, impidiendo el rebote del INR al agotarse la vida media del concentrado.",
        "  3. <em>Plasma Fresco Congelado (PFC 15-20 mL/kg):</em> Solo debe utilizarse si el CCP no está disponible; es netamente inferior por demoras de varias horas en descongelar, infusión de grandes volúmenes y riesgo de edema pulmonar.",
        "• <strong>Inhibidores Directos de la Trombina (Dabigatrán):</strong> Antídoto específico de elección: <strong>Idarucizumab 5 g EV</strong> (administrado en dos dosis de 2.5 g en bolo rápido). Revierte el efecto anticoagulante en minutos.",
        "• <strong>Inhibidores Directos del Factor Xa (Rivaroxabán, Apixabán):</strong> Antídoto específico: <strong>Andexanet alfa</strong> (si está disponible en el centro asistencial). Si no se dispone de él, administrar <strong>CCP 4 factores a dosis alta (50 UI/kg EV)</strong>.",
        "• <strong>Heparinas (HNF / HBPM):</strong> Sulfato de Protamina EV (1 mg neutraliza 100 UI de HNF administrada en las últimas 2-3 horas; neutralización parcial en HBPM)."
      ]
    },
    {
      "subhead": "5. Criterios Neuroquirúrgicos, Manejo de PIC y Escala Pronóstica ICH",
      "paragraphs": [
        "El manejo quirúrgico de la HIE supratentorial e infratentorial responde a principios diametralmente distintos:",
        "• <strong>Hemorragia Cerebelosa (Regla de Oro Quirúrgica):</strong> Todo hematoma cerebeloso con <strong>diámetro ≥ 3 cm</strong>, o asociado a compresión del tronco encefálico, distorsión del 4° ventrículo o hidrocefalia obstructiva aguda, constituye una <strong>indicación quirúrgica urgente obligatoria</strong> de evacuación mediante craneotomía o craniectomía suboccipital descompresiva. Adoptar una conducta médica conservadora en un hematoma cerebeloso ≥ 3 cm conlleva muerte por enclavamiento en horas.",
        "• <strong>Hemorragia Supratentorial (STICH Trials):</strong> La evacuación quirúrgica abierta rutinaria de hematomas profundos (ganglios basales o tálamo) NO demostró beneficio funcional frente al manejo médico. Solo se indica cirugía en casos seleccionados: hematomas lobares superficiales grandes (&gt; 30 mL) a menos de 1 cm de la superficie cortical en pacientes con deterioro neurológico progresivo, o craniectomía descompresiva en edema masivo intratable.",
        "• <strong>Hidrocefalia e Invasión Ventricular:</strong> Indicación formal de instalación urgente de un <strong>Drenaje Ventricular Externo (DVE)</strong> para descompresión y monitorización continua de PIC.",
        "• <strong>ICH Score (Hemphill):</strong> Escala pronóstica de 0 a 6 puntos para predecir mortalidad a 30 días: Glasgow 3-4 (2 pts), 5-12 (1 pt); Volumen ≥ 30 mL (1 pt); Invasión intraventricular (1 pt); Origen infratentorial (1 pt); Edad ≥ 80 años (1 pt). Mortalidad: 0 pts = 0%, 1 pt = 13%, 2 pts = 26%, 3 pts = 72%, 4 pts = 97%, 5-6 pts = 100%."
      ]
    }
  ],
  "table": {
    "title": "Síndromes Clínicos Topográficos en Hemorragia Intracerebral Espontánea",
    "headers": [
      "Topografía de la HIE",
      "Vasos Sangrantes",
      "Manifestaciones Neurológicas Cardinales",
      "Signos Pupilar / Oculares Patognomónicos"
    ],
    "rows": [
      [
        "Putaminal (Ganglios Basales, 50%)",
        "Ramas lenticuloestriadas profundas de la ACM",
        "Hemiplejia faciobraquiocrural contralateral armónica · Hemihipoestesia contralateral · Afasia o hemiinatención",
        "Desviación oculocefálica conjugada hacia la lesión (\"mira la lesión\") · Pupilas normales reactivas"
      ],
      [
        "Talámica (15 – 20%)",
        "Ramas tálamo-perforantes y lenticuloópticas de la ACP",
        "Hemihipoestesia profunda contralateral (predomina sobre déficit motor) · Dolor talámico crónico secundario",
        "Ojos desviados hacia abajo y adentro (\"miran la nariz\") · Parálisis de la mirada vertical (Parinaud) · Pupilas mióticas arreactivas"
      ],
      [
        "Protuberancial / Pontina (10 – 15%)",
        "Ramas perforantes mediales de la arteria basilar",
        "Coma súbito precoz · Tetraparesia flácida o descerebración temprana · Paro respiratorio · Hipertermia maligna",
        "Pupilas puntiformes (miosis extrema pero reactiva a la luz) · Ausencia de reflejos oculocefálicos/vestibulares"
      ],
      [
        "Cerebelosa (10%)",
        "Arterias cerebelosas (PICA, AICA o cerebelosa superior)",
        "Cefalea occipital súbita · Vértigo severo, vómitos explosivos · Ataxia ipsilateral e incapacidad para bipedestación",
        "Nistagmo horizontal · Inicialmente SIN hemiparesia de extremidades · Pupilas normales hasta herniación"
      ],
      [
        "Lobar (Cortical/Subcortical, 15-20%)",
        "Vasos corticales debilitados por Angiopatía Amiloide Cerebral (AAC)",
        "Déficit focal restringido al lóbulo afectado (afasia en lóbulo temporal/frontal; hemianopsia en occipital)",
        "Crisis epilépticas focales o generalizadas de inicio temprano · Cefalea localizada ipsilateral"
      ]
    ]
  },
  "severityTable": {
    "title": "Score ICH de Hemphill: Parámetros, Puntuación y Estimación de Mortalidad a 30 Días",
    "headers": [
      "Componente Evaluado",
      "Criterio Clínico / Radiológico",
      "Puntos Asignados",
      "Puntaje Total ICH",
      "Mortalidad a 30 Días"
    ],
    "rows": [
      [
        "Escala de Glasgow (GCS)",
        "Glasgow 3 – 4 / Glasgow 5 – 12 / Glasgow 13 – 15",
        "2 puntos / 1 punto / 0 puntos",
        "0 puntos",
        "0% (excelente pronóstico funcional)"
      ],
      [
        "Volumen del Hematoma",
        "Volumen ≥ 30 mL (fórmula ABC/2) / < 30 mL",
        "1 punto / 0 puntos",
        "1 punto",
        "13%"
      ],
      [
        "Invasión Intraventricular",
        "Presente (sangre en ventrículos) / Ausente",
        "1 punto / 0 puntos",
        "2 puntos",
        "26%"
      ],
      [
        "Localización Infratentorial",
        "Origen en cerebelo o tronco / Supratentorial",
        "1 punto / 0 puntos",
        "3 puntos",
        "72% (compromiso crítico)"
      ],
      [
        "Edad del Paciente",
        "Edad ≥ 80 años / < 80 años",
        "1 punto / 0 puntos",
        "4 puntos",
        "97% (mortalidad extrema)"
      ],
      [
        "—",
        "—",
        "—",
        "5 – 6 puntos",
        "100% (pronóstico ominoso)"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo de Reversión Rápida de Anticoagulantes y Metas de Presión Arterial en HIE",
    "headers": [
      "Condición Clínica",
      "Fármaco de Elección",
      "Dosis y Vía de Administración",
      "Objetivo Terapéutico y Reglas Críticas"
    ],
    "rows": [
      [
        "Hipertensión Arterial Aguda",
        "Labetalol EV o Nicardipino EV",
        "Labetalol 10-20 mg bolo EV en 2 min o infusión 2-8 mg/min; Nicardipino 5-15 mg/h EV",
        "Meta estricta: PAS 130 a 140 mmHg en < 1-2 horas · NUNCA permitir caídas por debajo de PAS < 130 mmHg"
      ],
      [
        "Anticoagulación con AVK (Acenocumarol)",
        "Complejo Protrombínico Concentrado 4F + Vitamina K1",
        "CCP 4F: 25 a 50 UI/kg EV infusión rápida + Vitamina K1 10 mg EV lenta en 20 min",
        "Normalización de INR < 1.4 en < 30 min · El CCP es mandatorio; el plasma fresco es solo alternativa de rescate"
      ],
      [
        "Anticoagulación con Dabigatrán",
        "Idarucizumab",
        "5 g EV en dos dosis separadas de 2.5 g en bolo rápido (con minutos de diferencia)",
        "Neutralización específica inmediata de la molécula de dabigatrán en sangre circulante"
      ],
      [
        "Anticoagulación con Anti-Xa (Rivaroxabán/Apixabán)",
        "Andexanet alfa o Complejo Protrombínico 4F",
        "Andexanet alfa bolo + infusión (si disponible) o CCP 4 factores a dosis alta: 50 UI/kg EV",
        "Restablecimiento de la generación de trombina para detener la expansión del hematoma"
      ],
      [
        "Hematoma Cerebeloso ≥ 3 cm",
        "Evacuación Quirúrgica Descompresiva",
        "Craneotomía / Craniectomía suboccipital evacuadora de urgencia neuroquirúrgica",
        "Indicación quirúrgica absoluta; la observación médica en hematomas cerebelosos ≥ 3 cm es error fatal"
      ],
      [
        "Hidrocefalia Aguda por IVH",
        "Drenaje Ventricular Externo (DVE)",
        "Trepanación e instalación de catéter ventricular con monitorización continua de PIC",
        "Descompresión ventricular y control de hipertensión endocraneana refractaria"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 62 años con antecedente de fibrilación auricular no valvular en tratamiento con acenocumarol e hipertensión arterial mal controlada. Es traído de urgencia al hospital tras presentar cefalea súbita holocránea mientras tomaba café, seguida rápidamente de vómitos explosivos, debilidad completa del hemicuerpo izquierdo y deterioro del estado de conciencia. Al examen físico: PA 205/115 mmHg, FC 88 lpm arrítmico, Glasgow 11 (somnoliento, desorientado, localiza estímulos dolorosos), hemiplejia faciobraquiocrural izquierda con fuerza M0 en extremidad superior y M1 en inferior, y desviación conjugada de la mirada hacia la derecha. El TAC de encéfalo sin contraste revela una hiperdensidad intraparenquimatosa de 32 mL en el putamen derecho con invasión del asta frontal del ventrículo lateral ipsilateral y desviación de línea media de 3 mm. El laboratorio de urgencias reporta un INR de 3.4 y plaquetas de 220.000/mm³.",
    "conducta": "El paciente presenta una hemorragia intracerebral espontánea putaminal derecha de volumen considerable (32 mL) con volcado ventricular y desviación de línea media, agravada por anticoagulación supraterapéutica con acenocumarol (INR 3.4) y crisis hipertensiva severa. El riesgo de expansión del hematoma y mortalidad es crítico en las primeras horas. Las conductas médicas de urgencia simultáneas, obligatorias e inmediatas son: 1) Reversión inmediata de la anticoagulación mediante Complejo Protrombínico Concentrado (CCP de 4 factores a 25-50 UI/kg EV) asociado a Vitamina K1 (Fitomenadiona 10 mg EV lenta); 2) Control activo y continuo de la presión arterial con Labetalol o Nicardipino EV para alcanzar una meta de PAS de 130 a 140 mmHg sin provocar caídas bajo 130 mmHg; e 3) Ingreso a Unidad de Cuidados Intensivos (UCI) con evaluación neuroquirúrgica para valorar monitorización de PIC o instalación de drenaje ventricular externo si la hidrocefalia progresa. La evacuación quirúrgica abierta del hematoma putaminal no está indicada de rutina según la evidencia de los ensayos STICH."
  },
  "explicacion": "El paciente presenta una hemorragia intracerebral espontánea putaminal derecha de volumen considerable (32 mL) con volcado ventricular y desviación de línea media, agravada por anticoagulación supraterapéutica con acenocumarol (INR 3.4) y crisis hipertensiva severa. El riesgo de expansión del hematoma y mortalidad es crítico en las primeras horas. Las conductas médicas de urgencia simultáneas, obligatorias e inmediatas son: 1) Reversión inmediata de la anticoagulación mediante Complejo Protrombínico Concentrado (CCP de 4 factores a 25-50 UI/kg EV) asociado a Vitamina K1 (Fitomenadiona 10 mg EV lenta); 2) Control activo y continuo de la presión arterial con Labetalol o Nicardipino EV para alcanzar una meta de PAS de 130 a 140 mmHg sin provocar caídas bajo 130 mmHg; e 3) Ingreso a Unidad de Cuidados Intensivos (UCI) con evaluación neuroquirúrgica para valorar monitorización de PIC o instalación de drenaje ventricular externo si la hidrocefalia progresa. La evacuación quirúrgica abierta del hematoma putaminal no está indicada de rutina según la evidencia de los ensayos STICH.",
  "keyPoints": [
    "La hemorragia intracerebral hipertensiva compromete predominantemente ganglios basales (putamen), tálamo, protuberancia y cerebelo.",
    "La angiopatía amiloide cerebral afecta a ancianos y produce hemorragias lobares (corticales/subcorticales) recidivantes.",
    "En la fase hiperaguda con PAS entre 150 y 220 mmHg, la meta es reducir la PAS de forma suave pero rápida a 130-140 mmHg; caídas < 130 mmHg aumentan el daño renal y la isquemia cerebral.",
    "Ante una HIE bajo antagonistas de la vitamina K (acenocumarol), la reversión de primera línea es Complejo Protrombínico Concentrado (CCP 4F) + Vitamina K1 EV.",
    "El plasma fresco congelado es muy inferior al CCP: demora horas en infundirse, no normaliza rápidamente el INR y produce sobrecarga de volumen.",
    "Todo hematoma cerebeloso de diámetro ≥ 3 cm o con compresión de troncoencefálico/hidrocefalia requiere evacuación quirúrgica suboccipital urgente obligatoria.",
    "La cirugía abierta de hematomas profundos (putaminales/talámicos) no demostró mejoría funcional frente al manejo médico intensivo en UCI.",
    "El Score ICH de Hemphill (Glasgow, volumen, invasión ventricular, infratentorial, edad ≥ 80) estratifica la mortalidad a 30 días."
  ],
  "questions": [
    {
      "stem": "Un niño de 4 años presenta un cuadro de cefalea y fiebre, asociado a rigidez\nde nuca en el examen físico. Se decide realizar punción lumbar, luego de\ndescartar la presencia de hipertensión endocraneana con un TAC de cerebro, y\nse obtiene un líquido cefalorraquídeo claro, con 60 células por mm3, con 99%\nde mononucleares (linfocitos), proteínas: 50 mg/dl y glucosa: 60 mg/dl. El\ndiagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Meningitis tuberculosa"
        },
        {
          "id": "B",
          "text": "Meningitis bacteriana"
        },
        {
          "id": "C",
          "text": "Meningitis herpética"
        },
        {
          "id": "D",
          "text": "Meningitis viral"
        },
        {
          "id": "E",
          "text": "Sano"
        }
      ],
      "correcta": "D",
      "explicacion": "El caso clínico describe un paciente pediátrico con un síndrome meníngeo clásico (cefalea, fiebre, rigidez de nuca). La clave para el diagnóstico diferencial se encuentra en el análisis del líquido cefalorraquídeo (LCR).\n\nLas características del LCR del paciente son:\n1.  **Aspecto**: Claro, lo que sugiere una meningitis no purulenta.\n2.  **Celularidad**: 60 células/mm³, lo que indica una pleocitosis leve a moderada (lo normal es < 5 células).\n3.  **Predominio celular**: 99% de mononucleares (linfocitos). Este es el dato más importante, ya que una **pleocitosis a predominio linfocitario** es característica de meningitis virales, tuberculosas o fúngicas, y descarta una meningitis bacteriana típica.\n4.  **Proteínas**: 50 mg/dl. Ligeramente elevadas o en el límite alto de la normalidad (normal < 45 mg/dl), lo cual es compatible con una inflamación meníngea leve.\n5.  **Glucosa**: 60 mg/dl. Este valor se considera normal (**normoglucorraquia**), especialmente si se asume una glicemia sérica normal (aprox. 80-100 mg/dl), manteniendo una relación LCR/plasma > 0.6.\n\nLa combinación de pleocitosis leve a predominio linfocitario, con proteínas levemente elevadas y glucosa normal, es el patrón clásico y más frecuente de una **meningitis viral** (también llamada meningitis aséptica). Los enterovirus son la causa más común en este grupo de edad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Paciente de 45 años, diabético mal controlado, consulta por fiebre, tos\nproductiva, disnea de reposo y finalmente compromiso de conciencia. Al\nexamen se aprecia paciente en malas condiciones generales, con pulso: 140 lpm,\nregular, presión arterial: 80/40 mmHg, frecuencia respiratoria: 38 rpm,\nGlasgow: 10. En el examen segmentario destacan crépitos en base derecha y\ncampo pulmonar izquierdo. Se inicia resucitación con suro fisiológico y\noxígenos, logrando saturación arterial de 88% a FiO2: 50% y presión arterial:\n100/58 mmHg. El tratamiento antibiótico para este paciente debe ser:",
      "options": [
        {
          "id": "A",
          "text": "Ceftriaxona + Amicacina"
        },
        {
          "id": "B",
          "text": "Ceftriaxona + Vancomicina"
        },
        {
          "id": "C",
          "text": "Cefotaximo + Ampicilina"
        },
        {
          "id": "D",
          "text": "Ceftriaxona + Claritromicina"
        },
        {
          "id": "E",
          "text": "Cefotaximo + Metronidazol"
        }
      ],
      "correcta": "D",
      "explicacion": "Este caso presenta a un paciente diabético mal controlado con un cuadro de neumonía grave que evoluciona a shock séptico (hipotensión, taquicardia, taquipnea, compromiso de conciencia).  La probabilidad de una neumonía adquirida en la comunidad (NAC) complicada, con factores de riesgo para patógenos resistentes, es alta. El paciente cumple criterios de gravedad que obligan a hospitalización en UCI. El tratamiento empírico debe cubrir los patógenos más frecuentes, incluyendo *Streptococcus pneumoniae*, *Haemophilus influenzae*, *Staphylococcus aureus* (incluyendo considerar SARM en paciente con factores de riesgo), y *Legionella pneumophila*. Además, el paciente tiene diabetes, lo que lo hace más susceptible a infecciones por organismos atípicos.\n\nLa guía GES Neumonía Adquirida en la Comunidad del MINSAL (2013, aunque está pendiente una actualización) recomienda para pacientes hospitalizados con neumonía grave,  una combinación de un betalactámico de amplio espectro (como ceftriaxona o cefotaxima) más un macrólido (como claritromicina o azitromicina) o una fluoroquinolona respiratoria (levofloxacino o moxifloxacino).  El macrólido cubre *Legionella* y otros atípicos.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Mujer de 64 años, ingresa por un accidente de tránsito. Inicialmente presenta\nhipotensión y oliguria. En sus exámenes destaca Crea:3,9 y BUN:80. Se\nadministra volumen con suero fisiológico y se realiza tratamiento endoscópico\nde la úlcera, con buen resultado. Se mantiene con presión arterial cercana a\n110/70. Al 3er día reinicia diuresis, cercanas a 1.000cc/día, sin embargo persiste\ncon crea: 3,5. El sodio urinario es de 5mEq/l, el sodio plasmático es de 140mEq/l\ny la creatinina urinaria es de 25 mg/dl. La causa más probable de su alteración\nde la función renal es:",
      "options": [
        {
          "id": "A",
          "text": "Hipovolemia con compromiso prerrenal"
        },
        {
          "id": "B",
          "text": "Necrosis tubular aguda"
        },
        {
          "id": "C",
          "text": "Nefropatía diabética"
        },
        {
          "id": "D",
          "text": "Nefritis intersticial"
        },
        {
          "id": "E",
          "text": "Rabdomiolisis"
        }
      ],
      "correcta": "A",
      "explicacion": "La respuesta correcta es **Hipovolemia con compromiso prerrenal**. El cuadro clínico se presenta en el contexto de un trauma con hipotensión, una causa clásica de hipoperfusión renal que lleva a una Insuficiencia Renal Aguda (IRA) de tipo prerrenal. En este estado, los riñones están estructuralmente sanos, pero el flujo sanguíneo que reciben es insuficiente para mantener una tasa de filtración glomerular (TFG) normal. La clave para confirmar el diagnóstico y diferenciarlo de un daño intrínseco (como la necrosis tubular aguda) son los índices urinarios.\n\nEn este caso, el riñón, al detectar la hipovolemia, activa intensamente el sistema renina-angiotensina-aldosterona para retener sodio y agua, en un intento por restaurar el volumen circulante. Esto se traduce en una orina muy concentrada con una excreción de sodio extremadamente baja. Los valores del paciente son categóricos: un sodio urinario de 5mEq/l (típicamente <20 en prerrenal) y una Fracción Excretada de Sodio (FeNa) calculada de 0.5% ([(UNa x PCrea) / (PNa x UCrea)] x 100 = [(5 x 3.5) / (140 x 25)] x 100 = 0.5%). Un FeNa <1% es el sello distintivo de una causa prerrenal, ya que indica que la función tubular de reabsorción de sodio está intacta y ávida. Aunque la paciente ha comenzado a orinar y su presión ha mejorado, la creatinina sigue elevada porque la recuperación de la TFG puede ser más lenta que la restauración de la volemia y la diuresis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Un hombre de 75 años consulta por fiebre, cefalea y compromiso del estado\ngeneral de 1 días de evolución, a lo que se le agregó una convulsión tónico-\nclónica. Se solicita un TAC de cerebro que no muestra lesiones focales ni signos\nde hipertensión endocraneana y se realiza una punción lumbar que da salida a\nun líquido turbio, con 2.500 células por mm3, con 87% de polimorfonucleares y\nglucosa baja. La tinción de Gram no visualiza bacterias y el cultivo está\npendiente. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Indicar tratamiento sintomático"
        },
        {
          "id": "B",
          "text": "Iniciar aciclovir endovenoso"
        },
        {
          "id": "C",
          "text": "Iniciar tratamiento antituberculoso, asociado a corticoides endovenosos"
        },
        {
          "id": "D",
          "text": "Iniciar ceftriaxona + vancomicina + corticoides endovenosos"
        },
        {
          "id": "E",
          "text": "Iniciar ceftriaxona + ampicilina + corticoides endovenosos"
        }
      ],
      "correcta": "E",
      "explicacion": "La pregunta describe un cuadro de instalación aguda (1 día) en un paciente de 75 años, caracterizado por fiebre, cefalea, compromiso del estado general y una convulsión tónico-clónica. Estos síntomas son altamente sugestivos de una infección del sistema nervioso central (SNC). El TAC cerebral es normal, lo que permite realizar una punción lumbar sin riesgo inmediato de herniación cerebral.\n\nLos hallazgos de la punción lumbar son clave:\n1.  **Líquido turbio**: Indica una alta concentración celular.\n2.  **2.500 células/mm3**: Es un recuento extremadamente elevado, muy sugestivo de infección bacteriana.\n3.  **87% polimorfonucleares (PMN)**: La predominancia de neutrófilos es un signo clásico de meningitis bacteriana aguda.\n4.  **Glucosa baja**: La hipoglucorraquia es un marcador bioquímico fuerte de consumo de glucosa por bacterias, también indicativo de meningitis bacteriana.\n5.  **Tinción de Gram negativa y cultivo pendiente**: Aunque la tinción de Gram sea negativa, los demás parámetros del LCR son tan contundentes que se debe iniciar tratamiento empírico para meningitis bacteriana de inmediato, sin esperar el cultivo.\n\nDada la edad del paciente (75 años), los patógenos más comunes de meningitis bacteriana a considerar incluyen *Streptococcus pneumoniae*, *Neisseria meningitidis* y, crucialmente en pacientes mayores de 50-60 años, *Listeria monocytogenes*. Los esquemas de tratamiento empírico deben cubrir estos patógenos. La opción (e) \"Iniciar ceftriaxona + ampicilina + corticoides endovenosos\" es la más adecuada:\n*   **Ceftriaxona**: Es una cefalosporina de tercera generación que cubre eficazmente *S. pneumoniae* y *N. meningitidis*.\n*   **Ampicilina**: Es fundamental añadirla para cubrir *Listeria monocytogenes*, un patógeno importante en el paciente de edad avanzada.\n*   **Corticoides endovenosos (Dexametasona)**: Están recomendados como adyuvantes en la meningitis bacteriana, especialmente antes o junto con la primera dosis de antibióticos, para reducir la inflamación y mejorar los resultados neurológicos, particularmente en la meningitis por *S. pneumoniae*.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    }
  ],
  "vignetteText": "Hombre de 62 años con antecedente de fibrilación auricular no valvular en tratamiento con acenocumarol e hipertensión arterial mal controlada. Es traído de urgencia al hospital tras presentar cefalea súbita holocránea mientras tomaba café, seguida rápidamente de vómitos explosivos, debilidad completa del hemicuerpo izquierdo y deterioro del estado de conciencia. Al examen físico: PA 205/115 mmHg, FC 88 lpm arrítmico, Glasgow 11 (somnoliento, desorientado, localiza estímulos dolorosos), hemiplejia faciobraquiocrural izquierda con fuerza M0 en extremidad superior y M1 en inferior, y desviación conjugada de la mirada hacia la derecha. El TAC de encéfalo sin contraste revela una hiperdensidad intraparenquimatosa de 32 mL en el putamen derecho con invasión del asta frontal del ventrículo lateral ipsilateral y desviación de línea media de 3 mm. El laboratorio de urgencias reporta un INR de 3.4 y plaquetas de 220.000/mm³."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "hemorragia, intracerebral, espontanea, presion, arterial")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2022 · Pregunta 166 · confianza 0.9
Una mujer de 17 años, presenta súbitamente desviación de la cabeza hacia la derecha, cayendo al suelo. Su madre presenció el hecho y observó que mantuvo mirada conjugada hacia derecha, tras lo cual presentó hipertonía de todo el cuerpo, seguido de movimientos rítmicos de las 4 extremidades. Se recupera somnolienta y adolorida, con signos de haberse mordido la lengua, con impresión de la arcada dentaria en zona lateral de la lengua. ¿Cuál es el diagnóstico más probable?
- A) Crisis convulsiva primariamente generalizada
- B) Crisis focal secundariamente generalizado
- C) Síncope vasovagal
- D) Trastorno conversivo
- E) Trastorno facticio
**Correcta: B**
Explicación del banco: Diagnóstico: **Crisis focal secundariamente generalizado** (opción **B**). Esta clase aborda el manejo del traumatismo encéfalo craneano (TEC), diferenciando entre TEC simple y severo según la presencia de signos de alarma. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [2] EUNACOM Agosto 2021 · Pregunta 62 · confianza 0.98
Un hombre de 34 años presenta erección dolorosa, desde hace 8 horas. Al examen se corrobora que tiene erección completa, pero turgencia solo de los cuerpos cavernosos, con glande y cuerpos esponjosos blandos. ¿Cuál es la conducta inicial más adecuada?
- A) Aplicar hielo en la zona genital
- B) Realizar derivación cavernoesponjosa de urgencia
- C) Administrar atropina intracavernosa
- D) Administrar analgésicos endovenosos
- E) Administrar fenilefrina intracavernosa
**Correcta: E**
Explicación del banco: El priapismo isquémico (erección dolorosa y mayor a 4 horas, que suele perder la turgencia del glande y cuerpo esponjoso) es una urgencia y se maneja en primer lugar con fenilefrina intracavernosa, seguido luego de manejo invasivo con drenaje y lavado con SF de los cuerpos cavernosos y, si falla, con derivación cavernoesponjosa. También se deben buscar causas secundarias (ej. drepanocitosis o leucemia) y, además, distinguirlo del priapismo de alto flujo o no isquémico (que es por hiperflujo arterial y generalmente no duele ni tiene riesgo de complicarse con disfunción eréctil permanente, por lo que se observa o maneja con compresas de hielo para acelerar su desaparición).

### [3] EUNACOM Diciembre 2018 · Pregunta 150 · confianza 0.97
Un paciente de 77 años, con antecedente de hipertensión arterial crónica, presenta visión distorsionada de las letras y refiere que las líneas se ven onduladas. Actualmente tiene un escotoma central. Se hace un fondo de ojo, que se muestra a continuación: Foto 14 (https://www.elmundo.es/elmundosalud/2007/01/25/medicina/1169733276.html). El diagnóstico más probable es:
- A) Desprendimiento de retina
- B) Retinopatía hipertensiva
- C) Trombosis de la vena central de la retina
- D) Catarata
- E) Degeneración macular relacionada con la edad
**Correcta: E**
Explicación del banco: Es un DMRE clásica, tanto por la clínica (metamorfopsias y escotoma central), como por el fondo de ojo (aunque se veían exudados y hemorragias maculares y no solo drusas).

### [4] EUNACOM Diciembre 2018 · Pregunta 4 · confianza 0.97
Un paciente ingresa al servicio de urgencia, por un cuadro de disnea marcada y síncopes. Al examen físico está confuso, con pulso de 200 latidos por minuto, regular y presión arterial de 70/40 mmHg. Además, tiene frialdad de extremidades y piel sudorosa. ¿Cuál es el tratamiento inicial más adecuado en este momento?
- A) Maniobras vagales
- B) Amiodarona endovenosa
- C) Adenosina endovenosa
- D) Desfibrilación
- E) Cardioversión eléctrica
**Correcta: E**
Explicación del banco: Por tener compromiso hemodinámico, da igual de qué taquiarritmia se trate y se debe cardiovertir eléctricamente (no confundir con la desﬁbrilación, que se usa en el paro con FV o TVSP).

### [5] EUNACOM Julio 2017 · Pregunta 46 · confianza 0.97
Un paciente de 62 años, con antecedentes de dislipidemia y diabetes en tratamiento con dieta e hipoglicemiantes orales, consulta por dolor toráxico opresivo irradiado a ambos hombros intenso EVA 9/10, asociado a disnea y sudoración. Al examen físico, su presión arterial es 140/70 mmHg con frecuencia cardiaca de 80 latidos por minuto. Pre- senta RR3T con presencia de R3, murmullo pulmonar presente con crépitos bibasales. Electrocardiagrama: SDST en V1-V4. La conducta más adecuada es:
- A) Tratamiento anticoagulante
- B) Tratamiento antiplaquetario
- C) Solicitar AngioTAC de tórax
- D) Ecocardiograma bidimensional
- E) Coronariografía de urgencia
**Correcta: E**
Explicación del banco: Es un SCA con SDST, por lo que requiere angioplastía de urgencia (o trombolisis, que no aparecía en las opciones).

### [6] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [7] EUNACOM Diciembre 2025 · Pregunta 3 · confianza 0.95
Un paciente de 28 años consulta por dolor torácico y disnea de 2 horas de evolución. Al examen Fsico presenta taquicardia a 170 lpm, presión arterial 120/80 mmHg y un examen cardiopulmonar con ritmo regular en dos tonos, sin soplos, en la auscultación cardíaca y murmullo pulmonar presente, sin ruidos agregados, en la auscultación pulmonar. Se solicita un electrocardiograma que se muestra a con8nuación: ¿Cuál es la conducta más adecuada?
- A) Verapamilo endovenoso
- B) Amiodarona endovenosa
- C) Adrenalina endovenosa
- D) Adenosina endovenosa
- E) Cardioversión eléctrica
**Correcta: D**
Explicación del banco: Tiene una TPSV clásica. El tratamiento de primera línea son las maniobras vagales (ej. Valsalva modiﬁcado es la más recomendada en adultos y niños que cooperan; en niños pequeño se preﬁere la inmersión facial en agua fría. El masaje caroVdeo se puede usar en adultos, pero no se recomienda en niños ni en adultos mayores con riesgo de ateroma caroVdeo que se pueda soltar). De segunda línea se uGlizan fármacos, siendo de elección la adenosina en bolo EV de 6 mg. Si falla, se dan hasta dos nuevas dosis de 12 mg. Si vuelve a fallar, se usa el verapamilo (contraindicado en falla cardíaca e hipotensión). Como toda taquiarritmia, si está hemodinámicamente inestable, de primera línea se maneja con cardioversión eléctrica.

### [8] EUNACOM Julio 2025 · Pregunta 115 · confianza 0.95
Embarazada de 36 semanas con presión arterial 170/110 y cefalea frontal intensa que no cede con analgesia. Sin convulsiones. ¿Cuál es el manejo más adecuado?
- A) Hospitalizar, labetalol EV para control de PA, sulfato de magnesio profiláctico e interrupción del embarazo
- B) Nifedipino oral y control ambulatorio
- C) Sulfato de magnesio solo
- D) Inducción con oxitocina inmediata sin otro manejo
- E) Hidralazina oral y observar
**Correcta: A**
Explicación del banco: Preeclampsia severa a ≥34 semanas: hospitalización + control de PA (labetalol o hidralazina EV) + sulfato de magnesio para prevenir eclampsia + interrupción del embarazo una vez estabilizada.

### [9] EUNACOM Diciembre 2025 · Pregunta 1 · confianza 0.95
Una paciente de 45 años, con antecedente de enfermedad reumá8ca en la infancia, consulta por un cuadro de 3 meses de evolución de disnea de esfuerzos en capacidad funcional II, que actualmente ha progresado a disnea de mínimos esfuerzos. Al examen Fsico, su presión arterial es de 120/78 mmHg, su frecuencia cardíaca es de 92 la8dos por minuto y su saturación de oxígeno es de 93% a aire ambiental. Se ausculta un soplo holosistólico en el ápex, irradiado a la axila y se palpa el choque de la punta hiperdinámico a la altura del quinto espacio intercostal. El examen pulmonar muestra crepitaciones basales bilaterales. ¿Cuál es el diagnós8co más probable?
- A) Insuﬁciencia mitral
- B) Insuﬁciencia aór2ca
- C) Estenosis mitral
- D) Estenosis aór2ca
- E) Ductus arterioso persistente
**Correcta: A**
Explicación del banco: Es una insuﬁciencia mitral clásica, con clínica de insuﬁciencia cardiaca izquierda (disnea y crépitos), soplo holosistólico y desplazamiento del choque de la punta, que sugiere cardiomegalia. Revisar resumen de semiología cardiaca.

### [10] EUNACOM Diciembre 2025 · Pregunta 174 · confianza 0.95
Una paciente de 41 años presenta disnea de grandes esfuerzos de larga data, a lo que en el úl8mo 8empo se ha agregado opresión precordial en relación a la ac8vidad Fsica, que cede con el reposo. Tiene antecedente de un soplo en la infancia no estudiado. En el examen Fsico presenta frecuencia cardíaca: 68 por minuto, presión arterial: 120/85 mmHg, pulso regular de ascenso lento y baja amplitud en ambas extremidades superiores, y se ausculta un ritmo cardíaco regular en dos 8empos con presencia de un soplo sistólico en foco aór8co III/VI y un soplo diastólico en el mismo foco II/VI. ¿Cuál es el diagnós8co más probable?
- A) Estenosis mitral
- B) Estenosis aór2ca
- C) Insuﬁciencia mitral
- D) Insuﬁciencia aór2ca
- E) Comunicación interauricular
**Correcta: B**
Explicación del banco: Tiene una estenosis aórtica clásica (revisar resumen de semiología cardíaca), caracterizada por soplo sistólico eyectivo (foco aórtico), pulso parvus et tardus, síncopes, angina de pecho y arritmias. Aunque la presión está normal en este caso, lo clásico es que la presión de pulso (distólica - diastólica) esté disminuida, haciendo que el pulso se palpe débil (parvus = pequeño). El soplo diastólico concomitante, probablemente se deba a que Gene algún grado de insuﬁciencia aórtica asociada, primando el componente de estenosis. La asociación de estenosis e insuﬁciencia valvular se conoce como “enfermedad valvular”.

### [11] EUNACOM Diciembre 2025 · Pregunta 97 · confianza 0.95
Una paciente de 21 años consulta por ﬁebre hasta 38,9 °C asociada a dolor hipogástrico intenso y sangrado vaginal de mal olor, que inició hace 48 horas. Al examen Fsico 8ene frecuencia cardíaca 120 la8dos por minuto, presión arterial 90/60 mmHg y temperatura 38,7 °C. En el examen ginecológico se observa en la especuloscopía sangre y restos ovulares de mal olor en el canal vaginal. Además, se aprecia útero muy doloroso a la palpación y dolor a la palpación hipogástrica por vía abdominal. Se solicita ecograFa transvaginal que muestra contenido uterino irregular de 18 mm de diámetro. ¿Cuál es la conducta más adecuada?
- A) Realizar histerectomía
- B) Realizar laparoscopía exploradora
- C) Administrar an2bió2cos endovenosos y realizar curetaje de la cavidad uterina
- D) Administrar metotrexato
- E) Administrar misoprostol y conducir el trabajo de aborto
**Correcta: C**
Explicación del banco: Tiene un aborto séptico e incompleto, con restos ovulares retenidos. Se maneja con antibióticos endovenosos de amplio espectro y evacuación uterina mediante curetaje o AMEU.

### [12] EUNACOM Diciembre 2025 · Pregunta 48 · confianza 0.95
Una paciente de 25 años, primigesta con 32 semanas de gestación, presenta cefalea intensa y malestar general. Al examen Fsico destaca una presión arterial de 170/110 mmHg, por lo que se administra labetalol endovenoso, logrando cifras tensionales de 140/90 mmHg. Sin embargo, dos horas después presenta una convulsión tónico-clónica de 2 minutos de duración. ¿Cuál es la conducta más adecuada?
- A) Administrar lorazepam endovenoso
- B) Administrar labetalol endovenoso
- C) Administrar sulfato de magnesio endovenoso
- D) Administrar tocolí2cos endovenosos
- E) Realizar maduración pulmonar
**Correcta: C**
Explicación del banco: Tiene una eclamsia, en contexto de una preclamsia severa. El manejo sigue el siguiente orden: 1. Estabilizar a la paciente y 2. Interrumpir el embarazo. La estabilización también Gene un orden: ABC, luego MgSO4 EV y luego labetalol EV si PA >160/110 (en la práctica se hace todo junto). Aunque en la práctica se hace una cesárea, lo correcto académicamente es que la interrupción del embarazo debe privilegiar la vía vaginal (menos sangrado y estrés quirúrgico), a menos que haya signos de sufrimiento fetal, no se pueda estabilizar a la madre o tenga un cuello cerrado y largo (Bishop < 6-7), ya que demoraría mucho el parto, el que idealmente debe ocurrir antes de que pasen 24 horas desde la eclamsia. La maduración pulmonar puede estar indicada en este caso, por tener menos de 34 semanas, pero no alcanzará a hacer efecto (demora 48 horas).

### [13] EUNACOM Julio 2024 · Pregunta 153 · confianza 0.95
Un paciente de 68 años con antecedentes de infarto de miocardio, hipertensión arterial y tabaquismo se encuentra en tratamiento con aspirina, atorvastatina, enalapril 20 mg cada 12 horas, carvedilol 12,5 mg al día, furosemida 40 mg cada 12 horas. Actualmente presenta disnea de pequeños esfuerzos. Al examen físico, tiene frecuencia cardíaca: 65x’, presión arterial: 110/70 mmHg, saturación de oxígeno del 96%; en el examen cardiopulmonar se auscultan crépitos pulmonares bibasales y ritmo cardíaco regular en dos tiempos, con un soplo sistólico III/VI. El choque de la punta es palpable en la línea axilar media y presenta edema en los miembros inferiores. ¿Cuál de las siguientes medidas es la más adecuada para este paciente?
- A) Agregar losartán
- B) Agregar hidralazina
- C) Agregar isosorbide
- D) Agregar espironolactona
- E) Agregar amiodarona
**Correcta: D**
Explicación del banco: Insuficiencia Cardíaca Congestiva: Los medicamentos que aumentan la supervivencia en la insuficiencia cardíaca congestiva son los IECA o ARA II, betabloqueantes (idealmente carvedilol) y espironolactona. El manejo de la patología de base también es fundamental. El losartán no se usa en este caso porque el paciente ya toma enalapril, que cumple la misma función.

### [14] EUNACOM Julio 2024 · Pregunta 128 · confianza 0.95
Un paciente de 70 años consulta por disnea de medianos esfuerzos progresiva, asociada a ortopnea. Al examen físico tiene frecuencia cardíaca: 78 lpm, presión arterial: 130/80 mmHg, examen pulmonar con murmullo vesicular conservado y presencia de crépitos bibasales, examen cardíaco con ritmo irregular en dos tiempos, con presencia de soplo diastólico. Se palpa el choque de la punta en el quinto espacio intercostal línea medioclavicular y se observa edema en extremidades inferiores con signo de la fóvea. Su electrocardiograma muestra fibrilación auricular con respuesta ventricular controlada. ¿Cuál es el diagnóstico más probable?
- A) Estenosis aórtica
- B) Estenosis pulmonar
- C) Estenosis mitral
- D) Insuficiencia aórtica
- E) Insuficiencia pulmonar
**Correcta: C**
Explicación del banco: Estenosis Mitral: El cuadro clínico es compatible con estenosis mitral. Se recomienda repasar la semiología cardíaca.

### [15] EUNACOM Agosto 2021 · Pregunta 135 · confianza 0.95
Un paciente de 71 años, con antecedente de hipertensión arterial, diabetes e insuficiencia cardíaca, en tratamiento con losartán, metformina, aspirina, nifedipino e hidroclorotiazida consulta por progresión de su disnea de esfuerzos, que aparece al caminar 1 cuadra. Al examen físico, tiene edema de extremidades inferiores, se palpa el choque de la punta en la línea axilar media y se ausculta ritmo cardíaco regular, sin soplos, con crépitos bilaterales en la auscultación pulmonar. Se realiza ecocardiografía que muestra disfunción ventricular, con fracción de eyección de 23%. ¿Qué fármaco debe suspenderse?
- A) Losartán
- B) Metformina
- C) Aspirina
- D) Nifedipino
- E) Hidroclorotiazida
**Correcta: D**
Explicación del banco: El nifedipino puede agravar una insuficiencia cardíaca, por sus efectos inotrópicos negativos, por lo que en este caso, en que el paciente está descompensado, se debe suspender. Se debería agregar betabloqueo (con cuidado, iniciando dosis bajas) y, por la baja fracción de eyección (menor a 35%), probablemente se agregará espironolactona también, para aumentar la sobrevida (también el betabloqueo).

### [16] EUNACOM Diciembre 2019 · Pregunta 30 · confianza 0.95
Una paciente de 23 años, consulta por malestar general y sensación febril de una semana de evolución, asociado a artralgias y palpitaciones. Al examen físico destaca glándula tiroides del doble del tamaño normal, muy dolorosa a la palpación, frecuencia cardiaca de 90 latidos por minuto y presión arterial de 120/80 mm Hg. Se solicitan exámenes que muestran TSH: 0,01 UI/L (valor normal: 0,3-4,5 UI/L), T4L: 1,9 ng/mL (valor normal: 0,6-1,7 ng/mL), captación de yodo radioactivo de 2% (valor normal: 20% a 30%). ¿Cuál es el tratamiento de elección en esta paciente?
- A) Tiamazol
- B) AINEs
- C) Propiltiouracilo
- D) Bloqueadores beta
- E) Yodo radioactiivo en dosis terapéutica
**Correcta: B**
Explicación del banco: Tiene una tiroiditis subaguda de Quervain, cuyo tratamiento son los AINEs. No se usan las drogas antitiroideas y no sirve el yodo radiactivo (de hecho, no capta). El betabloqueo sí se usa cuando hay síntomas de hiperT4, pero lo más importante son los AINEs.

### [17] EUNACOM Diciembre 2018 · Pregunta 29 · confianza 0.95
Una paciente de 42 años presenta artritis de las articulaciones interfalángicas distales y proximales de ambas manos, con afectaciónreciente de una articulación metatarsofalángica. Al examen físico, además de las artritis descritas, presenta múltiples depresiones en las uñas de las manos y engrosamiento de las uñas de los pies. ¿A qué tipo de artritis corresponde este cuadro?
- A) Reumatoide
- B) Reactiva
- C) Psoriática
- D) Gotosa
- E) Lúpica
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (Psoriática). Es una artritis psoriática clásica (con los picotazos ungueales).. La artritis psoriásica es una pelvispondiloartropatía asociada a psoriasis. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [18] EUNACOM Diciembre 2017 · Pregunta 4 · confianza 0.95
Un paciente con antecedente de hipertensión arterial, dislipidemia y diabetes, usuario de aspirina, metformina, hidroclorotiazida y atorvastatina, presenta dolor torácico opresivo, que aparece al caminar 2 cuadras y alcanza un EVA de 5/10. Se solicita un test de esfuerzo que demuestra aparición de un infradesnivel del segmento ST, de 2 mm en las derivadas anteriores. El examen más adecuado para proseguir el estudio es:
- A) Ecocardiograma
- B) TAC de tórax
- C) Ecocardiografía de esfuerzo
- D) Coronariografía
- E) Cintigrafía de perfesión miocárdica
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Coronariografía). La angina estable con test de esfuerzo alterado, se estudia con coronariografía.. Las enfermedades intersticiales pulmonares difusas tienen múltiples causas, siendo la fibrosis pulmonar idiopática (FPI/UIP) la más frecuente y de peor pronóstico, sin tratamiento específico más allá del sintomático (oxígeno, salbutamol). Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [19] EUNACOM Julio 2013 · Pregunta 114 · confianza 0.95
Una paciente de 30 años, usuaria de anticonceptivos orales, consulta por cuadro de 8 días de sudoración, palpitaciones e insomnio, que durante los últimos días se ha asociado a dolor en región cervical anterior. Al examen físico se aprecia con frecuencia cardiaca de 100 por minuto, presión arterial 140/90, dolor a la palpación cervical. Se solicitan exámenes donde destaca T4 y T4L aumentadas y TSH suprimida, electrocardiograma normal. El tratamiento de elección en este caso es:
- A) Propiltiouracilo
- B) Paracetamol
- C) Metimazol
- D) Ketoprofeno
- E) Enalapril
**Correcta: D**
Explicación del banco: Tiene una tiroiditis subaguda de Quervain, que se trata con AINEs. No se deben indicar drogas antitiroideas (PTU, metimazol) y sí se puede dar propanolol si hay muchos síntomas de hipertiroidismo. El paracetamol no es suﬁciente.

### [20] EUNACOM Julio 2015 · Pregunta 179 · confianza 0.94
Un paciente de 60 años, diabético e hipertenso, mal controlado, consulta por pérdida súbita e indolora de la visión del ojo izquierda. Con el ojo izquierdo solo puede contar dedos. Al examen físico no se ven alteraciones externas, pero el rojo pupilar del ojo izquierdo está muy disminuido. El diagnóstico más probable es:
- A) Trombosis de la vena central de la retina
- B) Desprendimiento de retina
- C) Neuritis óptica
- D) Embolia de arteria central de la retina
- E) Hemorragia vítrea
**Correcta: E**
Explicación del banco: Diagnóstico: **Hemorragia vítrea** (opción **E**). La pérdida del rojo pupilar orienta mucho a hemorragia vítrea. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [21] EUNACOM Julio 2017 · Pregunta 151 · confianza 0.93
Paciente de 58 años, con antecedente de diabetes mellitus, hipertensión y fumador de 40 paquetes año, consulta por un cuadro de tres semanas de evolución de dolor epi- gástrico opresivo, asociado a disnea y palpitaciones regulares, que lo obligan a detener- se cada 100 metros de caminata y ceden con el reposo. En el examen físico, su presión arterial es 140/90 mmHg, frecuencia cardiaca de 80 latidos por minuto regular. El diag-
- A) Angina crónica de reciente comienzo
- B) Fibrilación auricular paroxística
- C) Isquemia cardiaca con arritmia supraventricular
- D) Tromboembolismo pulmonar
- E) Cardiopatía hipertensiva
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Angina crónica de reciente comienzo). La única opción aceptable era la angina de reciente comienzo.. Las enfermedades intersticiales pulmonares difusas tienen múltiples causas, siendo la fibrosis pulmonar idiopática (FPI/UIP) la más frecuente y de peor pronóstico, sin tratamiento específico más allá del sintomático (oxígeno, salbutamol). Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [22] EUNACOM Diciembre 2025 · Pregunta 16 · confianza 0.92
Un paciente de 35 años consulta por un cuadro de dolor abdominal y diarrea de 3 meses de evolución, con 8 a 10 deposiciones líquidas al día, tanto diurnas como nocturnas. Presenta dolor abdominal 8po cólico con exacerbación en el hemiabdomen derecho. Además, al interrogatorio, reﬁere visión borrosa con enrojecimiento del ojo derecho y ajas orales recurrentes. También, relata baja de peso y presencia ocasional de sangre en las deposiciones. Al examen Fsico se observa pálido, con frecuencia cardíaca 90 lpm, presión arterial 125/72 mmHg y temperatura 37,2 °C. El abdomen está blando y sensible de forma difusa, con dolor más intenso en la fosa ilíaca derecha, sin signos peritoneales. ¿Cuál es el diagnós8co más probable?
- A) Coli2s ulcerosa
- B) Coli2s infecciosa
- C) Cáncer de colon
- D) Enfermedad de Crohn
- E) Síndrome de intes2no irritable con predominio de diarrea Mortalidad Mortalidad proporcional Mortalidad Mortalidad proporcional Patología cardiovascular 60/1000 50% 150/1000 71,4% Cáncer 30/1000 25% 30/1000 14,3% Otras causas de muerte 30/1000 25% 30/1000 14,3% Total 120/1000 100% 210/1000 100% Periodo inicial Periodo tardío
**Correcta: D**
Explicación del banco: Tiene clínica de una enfermedad inﬂamatoria intestinal (EII). Entre ellas, parece más enfermedad de Crohn, por el dolor en el lado derecho (la zona ileocecal es lo más frecuentemente afectado), las amas (el compromiso oral también se puede ver en la coliGs ulcerosa, pero orienta a Crohn) y el compromiso ocular (más frecuente en enfermedad de Crohn que en coliGs ulcerosa).

### [23] EUNACOM Diciembre 2025 · Pregunta 9 · confianza 0.92
Un paciente de 40 años, con antecedente de neumonías a repe8ción y consumo de tabaco de 5 paquetes-año, consulta por tos frecuente y produc8va, mayor durante las mañanas, con expectoración mucosa y, en ocasiones, hemoptoica. Al examen Fsico presenta dedos en palillo de tambor (acropaquias), frecuencia cardíaca 75 lpm y presión arterial 110/70 mmHg. La auscultación cardiopulmonar revela ritmo regular en dos tonos sin soplos, murmullo pulmonar presente y simétrico, con auscultación de crepitaciones y estertores bilaterales. ¿Cuál es el diagnós8co más probable?
- A) Bronqui2s crónica
- B) Bronquiectasias
- C) Carcinoma broncogénico
- D) Tuberculosis pulmonar
- E) Insuﬁciencia cardíaca conges2va
**Correcta: B**
Explicación del banco: Tiene un cuadro compaGble con bronquiectasias. Se debe revisar el resumen de semiología respiratoria. El diagnóstico se conﬁrma con TAC de tórax de alta resolución.

### [24] EUNACOM Diciembre 2022 · Pregunta 3 · confianza 0.92
Un paciente de 28 años, con antecedente de haber sido operado de coartación aórtica cuando niño, consulta por un cuadro progresivo de disnea de esfuerzos y ortopnea, que ha deteriorado significativamente su capacidad funcional. En el examen físico tiene pulso palpable con frecuencia cardíaca de 72 latidos por minuto, presión arterial de 155/75 mmHg y frecuencia respiratoria de 15 respiraciones por minuto, saturando 92% a FiO2 ambiental. Al examen cardiopulmonar, tiene ritmo regular en dos tonos, con soplo sistólico eyectivo II/VI en la zona paraesternal, más un soplo diastólico, que se escucha hasta la final de la diástole en el mismo foco. Su padre falleció a los 50 años, de manera súbita. ¿Cuál es el diagnóstico más importante?
- A) Recoartación aórtica
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Insuficiencia tricuspídea
- E) Disección aórtica
**Correcta: A**
Explicación del banco: Diagnóstico: **Recoartación aórtica** (opción **A**). El manejo crónico del asma tiene como objetivos principales eliminar los síntomas, prevenir hospitalizaciones y descompensaciones, prevenir complicaciones (especialmente sobreinfección bacteriana) y mantener la función pulmonar a largo plazo. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [25] EUNACOM Agosto 2021 · Pregunta 123 · confianza 0.92
Un paciente de 17 años, apendictomizado hace 6 horas, evoluciona con malestar general y dolor abdominal intenso. Su pulso es regular a 120 latidos por minuto, su presión arterial es 90/50 mmHg y su temperatura es 37,7ºC. En el examen abdominal presenta dolor a la palpación profunda y superficial, con signos peritoneales difusos, mayores en el hemiabdomen inferior. El diagnóstico más probable es:
- A) Hemoperitoneo
- B) Evisceración
- C) Trombosis de la vena porta
- D) Dehiscencia de la base apendicular
- E) Tromboembolismo pulmonar masivo
**Correcta: D**
Explicación del banco: El hemoperitoneo es muy raro y se presenta con compromiso hemodinámico y palidez y luego, más tarde presenta dolor abdominal e incluso signos peritoneales difusos. Sin embargo, la dehiscencia presenta una clara peritonitis, con dolor, signos peritoneales localizados y luego difusos, fiebre y luego shock hipovolémico y séptico; es mucho más frecuente.
