# CLASE neuro-05 · Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena

Escribe `classes/lessons/neuro-05.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-05" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-02: Neurologia 10.2: Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria
- neuro-03: Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos
- neuro-04: Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino
- neuro-06: Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional
- neuro-07: Neurologia 10.7: Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo
- neuro-08: Neurologia 10.8: Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-05",
  "classId": "neuro-05",
  "tier": 2,
  "blockNum": 1,
  "blockName": "Enfermedad Cerebrovascular y Urgencias Neurovasculares",
  "topicLabel": "10.5",
  "title": "Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena",
  "perfilCode": "1.10.2.005",
  "dx": "Sospecha",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Derivación Inmediata de Urgencia a Neurología y Unidad de Pacientes Críticos (UPC) para confirmación por Angio-RM/Angio-TAC y tratamiento anticoagulante parenteral monitorizado.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Alta · Caso clásico de mujer joven en edad fértil con cefalea progresiva, convulsiones e infarto hemorrágico parasagital atípico",
  "algoTitle": "Algoritmo Diagnóstico y Decisión de Anticoagulación Plena en Trombosis Venosa Cerebral",
  "diagram": {
    "title": "Sospecha, Neuroimagen y Manejo de la Trombosis Venosa Cerebral",
    "svg": "<svg viewBox=\"0 0 620 361\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de TVC (Mujer joven + Anticonceptivos / Puerperio / Trombofilia)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Cefalea progresiva que empeora en decúbito</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Papiledema · Convulsiones · Déficit focal fluctuante</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Estudio de Neuroimagen Vascular Urgente</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">TAC sin contraste: normal en 30% o signo de la cuerda</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Examen de Elección: Angio-RM venosa o AngioTAC</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Confirmación de Oclusión de Seno Venoso o Infarto Venoso?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Signo del delta vacío (empty delta sign) o ausencia de señal de flujo venoso en secuencias TOF</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">Infarto Venoso sin Hemorragia</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">Infarto Venoso con Transformación Hemorrágica</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Anticoagulación Parenteral Plena Inmediata</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg c/12h SC)</text>\n  <rect class=\"crit\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Anticoagulación Parenteral Plena Inmediata (REGLA DE ORO)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">NO contraindica la heparina</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Tratar la hipertensión venosa retrograda subyacente</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Manejo de Complicaciones y Transición a Anticoagulación Oral</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Anticonvulsivantes si crisis · Control de hipertensión endocraneana</text>\n  <text class=\"accS\" x=\"310\" y=\"341\" text-anchor=\"middle\">Transición a Warfarina/DOAC por 3-12 meses</text>\n</svg>"
  },
  "contexto": "La trombosis venosa cerebral (TVC) es un subtipo infrecuente pero grave de enfermedad cerebrovascular que afecta predominantemente a mujeres jóvenes en edad fértil bajo factores protrombóticos transitorios (anticonceptivos orales, embarazo, puerperio). Su presentación clínica es engañosa: cefalea progresiva, signos de hipertensión endocraneana y convulsiones. La regla de oro del EUNACOM es categórica: el tratamiento de elección es la anticoagulación plena inmediata con heparina, la cual está formalmente indicada incluso cuando el infarto venoso presenta transformación hemorrágica petequial o lobar.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología y Anatomía Venosa Cerebral",
      "paragraphs": [
        "La trombosis oclusión de los senos venosos durales intracraneales (seno sagital superior 60%, seno transverso/sigmoideo 40%, seno recto, venas corticales o venas cerebrales profundas) desencadena dos mecanismos fisiopatológicos simultáneos:",
        "1. <strong>Hipertensión venosa y capilar retrógrada:</strong> Al ocluirse el drenaje venoso cerebral, la presión retrógrada en los lechos capilares aumenta exponencialmente, provocando reducción de la presión de perfusión tisular, edema cerebral vasogénico y citotóxico, e <strong>infarto venoso</strong>. La elevada presión capilar genera ruptura de vénulas postcapilares, resultando en una <strong>frecuente transformación hemorrágica</strong> característica con hematomas bilaterales parasagitales o lesiones que no respetan territorios arteriales anatómicos.",
        "2. <strong>Alteración de la reabsorción de LCR:</strong> La oclusión del seno sagital superior obstruye directamente las vellosidades aracnoideas de Pacchioni encargadas de reabsorber el LCR hacia el sistema venoso, produciendo un <strong>síndrome de hipertensión endocraneana aislada</strong> sin dilatación ventricular evidente (pseudotumor-like)."
      ]
    },
    {
      "subhead": "2. Factores Protrombóticos y Etiologías EUNACOM",
      "paragraphs": [
        "A diferencia del ictus arterial aterotrombótico, más del 75-80% de los pacientes con TVC son <strong>mujeres entre los 20 y 45 años</strong>.",
        "<strong>Factores de riesgo reconocidos:</strong>",
        "• <strong>Estados hormonales protrombóticos:</strong> Consumo de <strong>anticonceptivos orales combinados (ACO)</strong> o terapia de reemplazo hormonal (riesgo relativo multiplicado por 6 a 10), <strong>embarazo</strong> y de forma especialmente crítica el <strong>puerperio inmediato</strong> (máximo riesgo en las primeras 6 semanas postparto).",
        "• <strong>Trombofilias congénitas y adquiridas:</strong> Mutación del Factor V Leiden, mutación G20210A de la protrombina, déficit congénito de proteína C, proteína S o antitrombina III, hiperhomocisteinemia y <strong>Síndrome Antifosfolípidos (SAF)</strong>.",
        "• <strong>Enfermedades inflamatorias y hematológicas:</strong> Lupus eritematoso sistémico, enfermedad de Behçet, neoplasias hematológicas, hemoglobinuria paroxística nocturna, anemia de células falciformes y policitemia vera.",
        "• <strong>Causas infecciosas locales (Trombosis séptica):</strong> Extensión directa por contigüidad desde focos parameníngeos: mastoiditis u otitis media supurada complicada (trombosis del seno transverso y sigmoideo) o celulitis facial, forúnculo nasal y sinusitis etmoidal/esfenoidal complicada (trombosis séptica del <strong>seno cavernoso</strong>)."
      ]
    },
    {
      "subhead": "3. Presentación Clínica, Banderas Rojas y Neuroimagen de Elección",
      "paragraphs": [
        "La clínica de la TVC es marcadamente pleomórfica y subaguda, desarrollándose frecuentemente a lo largo de varios días:",
        "• <strong>Cefalea (síntoma presente en &gt; 90%):</strong> Cefalea holocránea opresiva o gravativa, progresiva, de intensidad creciente y rebelde a analgésicos convencionales, que <em>empeora con el decúbito supino, en la madrugada y con maniobras de Valsalva</em>. Puede ser hiperaguda en trueno en un 10% de casos.",
        "• <strong>Síndrome de Hipertensión Endocraneana:</strong> Cefalea, náuseas, vómitos explosivos matinales, oscurecimientos visuales transitorios y <strong>papiledema bilateral en el fondo de ojo</strong>.",
        "• <strong>Crisis convulsivas (35-40%):</strong> Focales motoras (con o sin marcha jacksoniana) o crisis generalizadas secundarias. Su frecuencia es muy superior a la observada en los infartos arteriales debido a la irritación cortical por estasis venosa y microhemorragias.",
        "• <strong>Déficit focal neurológico fluctuante:</strong> Paresias unilaterales o paraparesia (en trombosis parasagital bilateral del seno sagital superior), afasia o compromiso fluctuante de conciencia.",
        "• <em>Trombosis del Seno Cavernoso:</em> Oftalmoplejia dolorosa (parálisis de pares III, IV y VI), quemosis conjuntival marcada, proptosis ocular pulsátil, dolor periorbitario y parestesias en territorio de las ramas V1 y V2 del trigémino.",
        "<strong>Neuroimagen diagnóstica:</strong>",
        "• <em>TAC de encéfalo sin contraste:</em> Puede ser <strong>normal en el 25-30% de los casos</strong>. Puede evidenciar el <em>signo de la cuerda o cordón hiperdenso</em> (trombo fresco hiperdenso en una vena cortical o en el seno sagital) o infartos venosos con edema vasogénico y hemorragias petequiales.",
        "• <em>TAC con contraste venoso:</em> Clásico <strong>signo del delta vacío (empty delta sign)</strong> en el tercio posterior del seno sagital superior: defecto de llenado triangular central hipodenso correspondiente al trombo, rodeado por el realce de contraste de las paredes durales.",
        "• <strong>Examen de Elección (Gold Standard no invasivo): Angio-Resonancia Magnética venosa (Angio-RM con secuencia de tiempo de vuelo venoso TOF)</strong> o AngioTAC en fase venosa. Demuestra la falta de señal de flujo en el seno trombosado y visualiza directamente el trombo intravascular."
      ]
    },
    {
      "subhead": "4. Tratamiento: La Regla de Oro de la Anticoagulación Plena",
      "paragraphs": [
        "<strong>Regla de Oro Inviolable EUNACOM:</strong> El pilar terapéutico fundamental y mandatorio de la TVC es la <strong>Anticoagulación Parenteral Plena Inmediata</strong>, independientemente de la presencia de infartos hemorrágicos cerebrales preexistentes.",
        "<strong>Fármaco de primera línea: Heparina de Bajo Peso Molecular (HBPM: Enoxaparina 1 mg/kg cada 12 horas vía subcutánea)</strong> en dosis terapéuticas completas. Ha demostrado ser superior a la Heparina no Fraccionada (HNF) en eficacia, menor tasa de mortalidad y menor riesgo de sangrado mayor (la HNF se reserva si se anticipa una cirugía descompresiva urgente o falla renal severa con ClCr &lt; 30 mL/min).",
        "<em>Justificación biológica de la regla de oro:</em> El sangrado cerebral en la TVC no es producido por fragilidad vascular intrínseca sino por la hipertensión venosa retrógrada debida al obstáculo mecánico del trombo. Anticoagular recanaliza el seno venoso, desobstruye el flujo, disminuye la presión retrógrada y previene activamente la extensión de la isquemia y de la propia hemorragia. Suspender o diferir la heparina por miedo a la hemorragia es un grave error de práctica médica.",
        "<strong>Manejo de mantención y duración de la anticoagulación oral:</strong>",
        "• Tras la fase aguda con heparina se realiza transición a anticoagulación oral con Antagonistas de Vitamina K (Acenocumarol o Warfarina con meta de INR 2.0 a 3.0) o DOACs (Dabigatrán, Rivaroxabán).",
        "• <em>Duración:</em> <strong>3 a 6 meses</strong> si el evento fue provocado por un factor transitorio reversible (ACOs, embarazo, puerperio); <strong>6 a 12 meses</strong> en trombosis idiopáticas o trombofilias leves; e <strong>indefinida</strong> ante trombofilias mayores severas (SAF, déficit homocigoto de proteína C/S o eventos trombóticos recurrentes).",
        "• Manejo de crisis convulsivas: Fármacos anticonvulsivantes (Levetiracetam) indicados si el paciente presentó al menos una convulsión. No se recomienda profilaxis en pacientes sin crisis.",
        "• En hipertensión endocraneana severa refractaria: Acetazolamida, punción lumbar evacuadora o craniectomía descompresiva de rescate en infartos venosos masivos."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Diferencial: Trombosis Venosa Cerebral vs ACV Isquémico Arterial vs Hipertensión Intracraneal Idiopática",
    "headers": [
      "Característica Clínica / Diagnóstica",
      "Trombosis Venosa Cerebral (TVC)",
      "ACV Isquémico Arterial Clásico",
      "Hipertensión Intracraneal Idiopática (Pseudotumor)"
    ],
    "rows": [
      [
        "Perfil Epidemiológico Típico",
        "Mujer joven (20 – 45 años) con ACO, puerperio, embarazo o SAF",
        "Adulto mayor (> 60 años) con factores aterotrombóticos (HTA, DM, FA, tabaquismo)",
        "Mujer joven con obesidad o sobrepeso, sin factores trombóticos específicos"
      ],
      [
        "Forma de Instalación Temporal",
        "Progresiva y subaguda (días a semanas); cefalea insidiosa en crescendo",
        "Súbita e hiperaguda (segundos a minutos); déficit máximo desde el inicio",
        "Crónica y progresiva (semanas a meses); cefalea matinal continua"
      ],
      [
        "Síntomas Cardinales Asociados",
        "Cefalea gravativa que empeora en decúbito supino + Papiledema + Convulsiones (40%)",
        "Déficit focal motor/sensitivo estricto a un territorio arterial · Convulsiones infrecuentes (< 5%)",
        "Cefalea + Papiledema bilateral + Tinnitus pulsátil · SIN déficit focal (salvo paresia del VI par)"
      ],
      [
        "Hallazgos en Neuroimagen",
        "Signo del delta vacío en AngioTAC venoso · Ausencia de flujo en Angio-RM · Infartos hemorrágicos atípicos",
        "Hipodensidad delimitada estrictamente a territorio vascular arterial (ACM, ACA, ACP)",
        "Ventrículos pequeños, silla turca vacía, distensión de vainas del nervio óptico · Senos venosos permeables"
      ],
      [
        "Tratamiento de Elección Inmediato",
        "Anticoagulación parenteral plena (HBPM Enoxaparina 1 mg/kg c/12h SC) obligatoria",
        "Reperfusión (Trombolisis IV si ≤ 4.5 h / Trombectomía si ≤ 24 h) o Antiagregación",
        "Punción lumbar evacuadora diagnóstica/terapéutica · Acetazolamida · Pérdida ponderal"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 29 años, en su cuarto día de puerperio tras un parto eutócico sin incidentes, con antecedente de uso prolongado de anticonceptivos orales combinados hasta el embarazo. Consulta en urgencias por cuadro de 4 días de evolución caracterizado por cefalea holocránea intensa de curso progresivo, que empeora al acostarse boca arriba y al toser, asociada a náuseas y dos episodios de vómitos matinales. En las últimas 12 horas su familia nota que ha presentado tres crisis convulsivas focales motoras en el brazo derecho con posterior generalización tónico-clónica. Al examen neurológico de ingreso: somnolienta, orientada parcialmente en persona pero desorientada en tiempo, fondo de ojo con borramiento de los márgenes papilares bilateral compatible con papiledema agudo y leve hemiparesia braquial derecha con hiperreflexia. El TAC de encéfalo sin contraste muestra una lesión hipodensa temporoparietal izquierda con focos hiperdensos petequiales intralesionales que no respeta un territorio vascular arterial clásico.",
    "conducta": "El cuadro clínico corresponde a una Trombosis Venosa Cerebral (específicamente del seno sagital superior y venas corticales asociadas) complicada con un infarto venoso con transformación hemorrágica secundaria. La paciente presenta múltiples factores protrombóticos concomitantes (puerperio inmediato, historia de anticonceptivos orales), cefalea progresiva con signos de hipertensión endocraneana (empeoramiento en decúbito, vómitos matinales, papiledema) y crisis epilépticas focales de reciente inicio. La presencia de sangre o hemorragia en la neuroimagen representa la ruptura de vénulas por hipertensión capilar retrógrada debida al bloqueo del drenaje venoso. La conducta terapéutica obligatoria, inmediata e inaplazable es iniciar anticoagulación parenteral plena con Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg cada 12 horas vía subcutánea), asociar un fármaco anticonvulsivante de acción rápida (Levetiracetam EV) e ingresar a una Unidad de Pacientes Críticos (UPC) con monitorización neurológica continua. Suspender o demorar la anticoagulación por temor a la hemorragia petequial agrava el estasis venoso y desencadena daño cerebral masivo irreversible."
  },
  "explicacion": "El cuadro clínico corresponde a una Trombosis Venosa Cerebral (específicamente del seno sagital superior y venas corticales asociadas) complicada con un infarto venoso con transformación hemorrágica secundaria. La paciente presenta múltiples factores protrombóticos concomitantes (puerperio inmediato, historia de anticonceptivos orales), cefalea progresiva con signos de hipertensión endocraneana (empeoramiento en decúbito, vómitos matinales, papiledema) y crisis epilépticas focales de reciente inicio. La presencia de sangre o hemorragia en la neuroimagen representa la ruptura de vénulas por hipertensión capilar retrógrada debida al bloqueo del drenaje venoso. La conducta terapéutica obligatoria, inmediata e inaplazable es iniciar anticoagulación parenteral plena con Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg cada 12 horas vía subcutánea), asociar un fármaco anticonvulsivante de acción rápida (Levetiracetam EV) e ingresar a una Unidad de Pacientes Críticos (UPC) con monitorización neurológica continua. Suspender o demorar la anticoagulación por temor a la hemorragia petequial agrava el estasis venoso y desencadena daño cerebral masivo irreversible.",
  "keyPoints": [
    "La trombosis venosa cerebral afecta con mayor frecuencia a mujeres jóvenes en edad fértil con factores protrombóticos (ACO, puerperio, embarazo, SAF).",
    "La cefalea es el síntoma cardinal en más del 90% de los casos: típicamente progresiva, rebelde a analgésicos y empeora en decúbito supino.",
    "Las crisis convulsivas (focales o generalizadas) ocurren en el 35-40% de los pacientes, una frecuencia sustancialmente mayor que en el ACV isquémico arterial.",
    "El examen diagnóstico de elección no invasivo es la Angio-Resonancia Magnética venosa (secuencia TOF venosa) o la AngioTAC en fase venosa.",
    "El signo del delta vacío en el TAC contrastado corresponde al trombo intraluminal rodeado de realce dural en el seno sagital superior.",
    "Regla de Oro EUNACOM: El tratamiento de elección es la Anticoagulación Plena Inmediata con Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg c/12h SC).",
    "La transformación hemorrágica de un infarto venoso NO contraindica la heparina: alivia la hipertensión venosa capilar y frena el sangrado.",
    "La anticoagulación oral de mantención se mantiene por 3 a 6 meses en causas provocadas por factores reversibles y de forma indefinida en SAF o trombofilias mayores."
  ],
  "questions": [
    {
      "stem": "Un paciente con antecedente de un factor V de Leyden presenta\nsúbitamente disnea y dolor torácico, con tope inspiratorio a derecha. No\npresenta compromisos hemdinámico ni desaturación importante. Se solicita un\nangioTAC que es compatible con un tromboembolismo pulmonar derecho. Se\ndecide iniciar anticoagulación con heparina no fraccionada (heparina de alto\npeso molecular) por vía endovenosa. ¿Qué examen debe realizar para controlar\nun adecuado nivel de anticoagulación?",
      "options": [
        {
          "id": "A",
          "text": "Tiempo de protrombina (TP) e INR"
        },
        {
          "id": "B",
          "text": "Tiempo de trombina (TT)"
        },
        {
          "id": "C",
          "text": "Tiempo de tromboplastina parcial activada (TTPA)"
        },
        {
          "id": "D",
          "text": "Tiempo de sangría"
        },
        {
          "id": "E",
          "text": "No requiere control con exámenes"
        }
      ],
      "correcta": "C",
      "explicacion": "La respuesta correcta es la c) Tiempo de tromboplastina parcial activada (TTPA). La heparina no fraccionada (HNF) ejerce su efecto anticoagulante potenciando la acción de la antitrombina III, que inhibe principalmente la trombina y el factor Xa. El TTPA es el examen de laboratorio que evalúa la vía intrínseca y común de la coagulación, las cuales se ven afectadas por la acción de la HNF. El objetivo del control del TTPA es mantenerlo en un rango terapéutico, generalmente entre 1.5 y 2.5 veces el valor control, para asegurar una anticoagulación adecuada y minimizar el riesgo de complicaciones hemorrágicas.\n\nEl TTPA permite monitorizar la respuesta individual del paciente a la HNF, ya que esta respuesta puede variar debido a factores como la edad, la función renal, el peso corporal y la presencia de otras enfermedades. La titulación de la dosis de HNF se realiza en base a los resultados del TTPA, buscando alcanzar el rango terapéutico definido.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "La anticoagulación con heparina no fraccionada y con heparina fraccionada\nse controla respectivamente con:",
      "options": [
        {
          "id": "A",
          "text": "TTPA y TP"
        },
        {
          "id": "B",
          "text": "TP y TTPA"
        },
        {
          "id": "C",
          "text": "TTPA y tiempo de sangría"
        },
        {
          "id": "D",
          "text": "Tiempo de sangría y TTPA"
        },
        {
          "id": "E",
          "text": "TTPA y no necesita control"
        }
      ],
      "correcta": "E",
      "explicacion": "La respuesta correcta es la E: TTPA y no necesita control.\n\n*   **Heparina no fraccionada (HNF):** Su efecto anticoagulante se monitoriza mediante el Tiempo de Tromboplastina Parcial Activado (TTPA). El objetivo es mantener el TTPA en un rango terapéutico que generalmente se establece entre 1.5 y 2.5 veces el valor control del laboratorio. El TTPA refleja la actividad de los factores de coagulación en la vía intrínseca y común, que son los afectados por la HNF.\n\n*   **Heparina de bajo peso molecular (HBPM):** A diferencia de la HNF, la HBPM tiene una farmacocinética más predecible y una respuesta anticoagulante más consistente. Esto hace que la monitorización rutinaria con TTPA no sea necesaria en la mayoría de los pacientes. Sin embargo, en ciertas situaciones específicas (insuficiencia renal grave, obesidad mórbida, embarazo, neonatos o en situaciones de riesgo de sangrado o tromboembolismo), se puede considerar la monitorización de la actividad anti-Xa (una medida más directa de la actividad de la HBPM), pero esto no es el control habitual. Por lo tanto, para fines del EUNACOM y en la práctica clínica general, se considera que *no necesita control*.\n\nEn la práctica clínica chilena, el protocolo de anticoagulación con HNF debe seguir las indicaciones de la guía clínica institucional y, a nivel general, las recomendaciones internacionales, que enfatizan la necesidad de monitorizar el TTPA para ajustar la dosis y evitar tanto la subanticoagulación (riesgo de trombosis) como la sobreanticoagulación (riesgo de sangrado). Respecto a la HBPM, la *Guía Clínica GES Enfermedad Tromboembólica Venosa* del MINSAL no indica la necesidad de control en la mayoría de los casos.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    }
  ],
  "vignetteText": "Mujer de 29 años, en su cuarto día de puerperio tras un parto eutócico sin incidentes, con antecedente de uso prolongado de anticonceptivos orales combinados hasta el embarazo. Consulta en urgencias por cuadro de 4 días de evolución caracterizado por cefalea holocránea intensa de curso progresivo, que empeora al acostarse boca arriba y al toser, asociada a náuseas y dos episodios de vómitos matinales. En las últimas 12 horas su familia nota que ha presentado tres crisis convulsivas focales motoras en el brazo derecho con posterior generalización tónico-clónica. Al examen neurológico de ingreso: somnolienta, orientada parcialmente en persona pero desorientada en tiempo, fondo de ojo con borramiento de los márgenes papilares bilateral compatible con papiledema agudo y leve hemiparesia braquial derecha con hiperreflexia. El TAC de encéfalo sin contraste muestra una lesión hipodensa temporoparietal izquierda con focos hiperdensos petequiales intralesionales que no respeta un territorio vascular arterial clásico."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "trombosis, cerebral, factores, protromboticos, sospecha")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [2] EUNACOM Diciembre 2018 · Pregunta 18 · confianza 0.95
Una paciente de 28 años aumento de peso de 5 meses de evolución, asociado a malestar general. Refiere importante astenia, que ha progresado y debilidad muscular. Al examen físico presenta PA: 150/100 mmHg, atrofia de las masas musculares de las extremidades, obesidad abdominal y piel con estrías vinosas en la pared abdominal e hirsutismo en cara, abdomen y pecho. ¿Cuál es el examen de elección para iniciar el estudio en este paciente?
- A) Niveles de ACTH plasmático matinal y vespertino
- B) 17 hidroxiprogesterona
- C) TAC de silla turca
- D) Cortisol libre urinario de 24 horas
- E) Prueba de estimulación con ACTH
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Cortisol libre urinario de 24 horas). El síndrome de Cushing se estudia de elección con el cortisol libre urinario de 24 horas.. El hipotiroidismo en el embarazo es importante porque se asocia a daño en el desarrollo cerebral del feto. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [3] EUNACOM Julio 2013 · Pregunta 12 · confianza 0.95
Paciente de 27 años, sin antecedentes mórbidos, consulta por cuadro de 3 meses de dolor epigástrico tipo urente que aumenta durante los periodos de ayuno y estrés, asociado ocasionalmente a pirosis. Se realiza endoscopía digestiva alta que objetiva úlcera duodenal activa y se realiza test de ureasa que resulta (-). La conducta más adecuada en este caso es:
- A) Iniciar omeprazol, amoxicilina y claritromicina
- B) Indicar omeprazol y controlar con nueva endoscopía en 6 semanas
- C) Solicitar nueva endoscopía digestiva alta con test de ureasa
- D) Iniciar omeprazol, bismuto y metronidazol
- E) Iniciar medidas anti reflujo y omeprazol a permanencia.
**Correcta: A**
Explicación del banco: Es una úlcera duodenal Activa. Aunque el test de ureasa esté negativo, si no usa AINES, se asume que es por H. pylori, porque el 90% de las úlceras duodenales son por esa causa y el test de ureasa no es un examen tan bueno. Es una pregunta difícil. En el caso de la úlcera gástrica, es más probable que pueda ser por otra causa (solo 70% es por HP) y se tendría que estudiar. También se estudiaría si hubiese algo más que hiciera sospechar otra enfermedad, como un Cröhn o un Zollinger Ellison.

### [4] EUNACOM Diciembre 2018 · Pregunta 131 · confianza 0.93
Un paciente de 46 años presenta múltiples síntomas, como cefalea, molestias abdominales, calambres, astenia, entre otros, desde hace un año. Se han realizado múltiples exámenes, sin encontrar una causa orgánica. Llama la atención que ha tenido proteinuria persistente, que no se correlaciona con el cuadro clínico, ni con los demás exámenes, por lo que se tienen fuertes sospechas de que ha manipulado las muestras de orina. ¿Cuál es el diagnóstico más probable?
- A) Trastorno somatomorfo
- B) Trastorno conversivo
- C) Trastorno facticio
- D) Trastorno disociativo
- E) Trastorno hipocondriaco
**Correcta: C**
Explicación del banco: Diagnóstico: **Trastorno facticio** (opción **C**). La sospecha de manipulación de los exámenes, hace que sea facticio.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [5] EUNACOM Diciembre 2025 · Pregunta 156 · confianza 0.92
Una paciente de 42 años consulta por dolor ocular derecho, asociado a ojo rojo que inició hace 5 horas y se ha vuelto muy intenso. Al examen Fsico, presenta epífora y ojo rojo derecho de 8po central. Como antecedente, 8ene as8gma8smo y es usuaria de lentes de contacto. ¿Cuál de los siguientes exámenes es más adecuado para conﬁrmar la sospecha diagnós8ca?
- A) Fondo de ojo
- B) Tonometría ocular
- C) TAC de órbitas
- D) Tinción con ﬂuoresceína
- E) Gonioscopía
**Correcta: D**
Explicación del banco: La sospecha clínica es una queraGGs o una erosión corneal. El uso de lentes de contacto podría ser la causa. Con la Gnción con ﬂuoresceína se pueden ver mejor las úlceras y erosiones corneales. La genioscopía es úGl en la evaluación del glaucoma agudo.

### [6] EUNACOM Agosto 2021 · Pregunta 178 · confianza 0.92
Una paciente de 42 años, hipertensa, presenta cefalea intensa, que inició súbitamente hace 6 horas, mientras realizaba ejercicio y se ha acompañado de vómitos alimentarios. Al examen físico está vigil y orientada, adolorida, con FC: 70x’, PA: 140/90 mmHg, en el examen neurológico tiene signos meníngeos presentes, sin alteraciones motoras ni sensitivas. Se solicita TAC de cerebro sin contraste, que muestra hiperdensidad del espacio intercomisural frontal y del espacio subaracnoideo basal. ¿Cuál es el examen de elección para proseguir el estudio?
- A) Resonancia magnética nuclear de cerebro
- B) Punción lumbar
- C) TAC de cerebro con contraste
- D) Angiografía cerebral
- E) Ecocardiograma
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Angiografía cerebral). Tiene una angina crónica estable, por lo que se debe estudiar con un test de La.... Esta clase aborda el enfrentamiento general de las cefaleas, enfatizando la identificación de signos de alarma para diferenciar causas graves de benignas. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [7] EUNACOM Diciembre 2019 · Pregunta 14 · confianza 0.92
Una paciente de 34 años, diabética con control metabólico irregular, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2% y proteinuria cuantitativa de 9 g en 24 horas. ¿Cuál es la conducta de elección para proseguir el manejo de esta paciente?
- A) Electroforesis de proteínas en sangre
- B) Biopsia renal
- C) Inmunofijación de proteínas en orina
- D) Prednisona oral
- E) ANCA, C3 y C4
**Correcta: B**
Explicación del banco: Pregunta muy difícil, pero tiene un claro síndrome nefrótico, que, por estar en contexto de una diabetes, se sospecha sea por nefropatía membranosa. Por ser una mujer joven, también podría ser un lupus, con nefropatía membranosa. De las opciones, solo la biopsia renal serviría para avanzar en el diagnóstico. Sí hay que solicitar ANA y complemento (no ANCA, ya que las vasculitis son nefríticas).

### [8] EUNACOM Julio 2016 · Pregunta 33 · confianza 0.92
Un paciente de 32 años presenta un cuadro de cólico renal, asociado a microhematuria en el sedimento de orina. ¿Cuál es el examen de elección para el estudio de este paciente?
- A) UroTAC
- B) PieloTAC
- C) Pielografía de eliminación intravenosa
- D) Ecografía
- E) Radiografía simple
**Correcta: B**
Explicación del banco: El cólico renal se estudia con PieloTAC (TAC sin contraste). El UroTAC se utiliza como estudio de la hematuria, después de descartar TU, cuando se sospecha cáncer, ya que dibuja bien la vía urinaria.

### [9] EUNACOM Julio 2016 · Pregunta 45 · confianza 0.92
Paciente de 23 años, que desde hace 6 meses experimenta desánimo, que ella dice que es causado por estar muy disconforme con su figura. Refiere que experimenta momentos en que come muchas galletas, sin parar, hasta ser imposible seguir comiendo, en especial cuando está ansiosa. Además, tiene miedo de reprobar en la universidad. Refiere que 3 veces por semana, puede trotar 5 horas y comer menos de 200 Calorías al día. Niega provocarse vómitos, ya que refiere que no puede inducírselos, aunque ha intentado. ¿Cuál es el diagnóstico de sospecha?
- A) Anorexia nervosa
- B) Trastorno por atracones
- C) Depresión mayor
- D) Bulimia nervosa
- E) Trastorno de ansiedad generalizada
**Correcta: D**
Explicación del banco: Es una bulimia, con los atracones característicos y además con la purga, por medio de ejercicios y ayuna (no solo se purga con vómitos o laxantes).

### [10] EUNACOM Julio 2015 · Pregunta 178 · confianza 0.92
Una mujer de 65 años, nulípara, con IMC de 33, sin síntomas, se realiza un PAP que muestra abundantes células endometriales. ¿Cuál es la conducta más adecuada?
- A) Controlar con nuevo PAP en un año
- B) Indicar estrógenos tópicos
- C) Solicitar colposcopía y biopsia
- D) Realizar curejate endocervical
- E) Solicitar ecografía transvaginal
**Correcta: E**
Explicación del banco: Tiene factores de riesgo de cáncer de endometrio (obesidad y nuliparidad) y además células endometriales. Se debe descartar una hiperplasia endometrial o cáncer de endometrio, partiendo por la Eco.

### [11] EUNACOM Diciembre 2025 · Pregunta 180 · confianza 0.9
Una paciente de 23 años no llega a su domicilio luego de un conﬂicto familiar grave, siendo encontrada dos días después en una ciudad diferente, en buenas condiciones generales. Ella no recuerda nada de lo sucedido en ese intervalo de 8empo y no parece estar preocupada por ello. Su examen neurológico es normal. ¿Cuál es el diagnós8co más probable?
- A) Amnesia global transitoria
- B) Episodio psicó2co breve
- C) Trastorno conversivo
- D) Trastorno de estrés agudo
- E) Trastorno disocia2vo
**Correcta: E**
Explicación del banco: Tiene una fuga disociativa clásica, que es un Gpo de amnesia disociativa, en la que, además, se produce una “fuga” desde su lugar habitual. No se debe confundir con la amnesia global transitoria, que es un Gpo de accidente isquémico transitorio cerebral (se debe buscar fuente embólica), que se caracteriza por desorientación y amnesia (repiGendo las mismas preguntas), autolimitado, de pocas horas de evolución.

### [12] EUNACOM Julio 2025 · Pregunta 51 · confianza 0.9
Según la Comisión sobre Determinantes Sociales de la Salud de la OMS, ¿cuál de los siguientes factores tiene mayor impacto en la salud de la población?
- A) Nivel educacional
- B) Vivienda
- C) Alimentación
- D) Ingreso económico
- E) Acceso a servicios de salud
**Correcta: A**
Explicación del banco: La educación es el determinante social de la salud más potente y consistente: mayor educación → mejor comprensión de la salud, acceso a empleo estable, mayor ingreso y mejores hábitos. Actúa como determinante de otros determinantes. Reduce mortalidad de todas las causas.

### [13] EUNACOM Diciembre 2025 · Pregunta 170 · confianza 0.9
Un paciente de 70 años, con antecedentes de hipertensión arterial, diabetes mellitus 8po 2 y revascularización coronaria hace 3 años, consulta porque hace pocas horas notó que, de forma súbita, dejó de ver su pierna derecha con el ojo derecho. Al examen Fsico presenta inspección ocular normal, agudeza visual 20/30 en el ojo derecho y 20/20 en el ojo izquierdo, pupilas isocóricas con defecto pupilar aferente rela8vo, y en la campimetría por confrontación se observa hemianopsia inferior del ojo derecho. El diagnós8co más probable es:
- A) Neuri2s óp2ca isquémica
- B) Infarto del lóbulo occipital
- C) Desprendimiento de re2na
- D) Glaucoma
- E) Degeneración macular relacionada con la edad
**Correcta: A**
Explicación del banco: Tanto por el inicio súbito, con factores de riesgo cardiovascular, como por el defecto pupilar aferente relativo (DPAR), es una neuropaVa óptica isquémica, con afectación de la zona superior del nervio óptico derecho (inerva la zona superior de la reGna y corresponde a la zona inferior del campo visual). El DPAR se ve también en la neuriGs óptica desmielinizante y en el desprendimiento de reGna extenso o en la oclusión de la arteria central de la reGna.

### [14] EUNACOM Julio 2025 · Pregunta 30 · confianza 0.9
Hombre de 48 años con glicemia de ayuno de 115 mg/dL en dos ocasiones. IMC 28. Sin otros factores de riesgo. ¿Cuál es la intervención más importante para reducir la progresión a diabetes?
- A) Dieta estricta baja en carbohidratos
- B) Metformina 500 mg dos veces al día
- C) Ejercicio aeróbico 150 minutos por semana
- D) Orlistat
- E) Insulina basal
**Correcta: C**
Explicación del banco: Prediabetes (glucosa ayuno 100-125 mg/dL): la intervención más efectiva para prevenir progresión es el cambio de estilo de vida: ejercicio ≥150 min/semana de intensidad moderada + dieta saludable. Reduce riesgo de DM en 58% (estudio DPP). Metformina es segunda línea en pacientes de alto riesgo.

### [15] EUNACOM Julio 2024 · Pregunta 135 · confianza 0.9
Una paciente de 17 años consulta por un cuadro de 6 meses de evolución de dolor abdominal tipo cólico, que se ha exacerbado en las últimas 3 semanas y que está asociado a deposiciones diarreicas intermitentes, las que dice haber tenido desde los 15 años, con aumento de la frecuencia en el último mes. Al examen físico presenta inyección ciliar bilateral, sus signos vitales se encuentran dentro de los parámetros normales; al examen abdominal presenta dolor leve a la palpación abdominal sin signos peritoneales y se detecta una masa palpable en el flanco derecho. Se solicita un hemograma que muestra hematocrito: 31%, hemoglobina: 10.2 g/dL, VCM: 76 fL, HCM: 27 pg, glóbulos blancos: 10.000 por mm3, plaquetas: 320.000 por mm3. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Crohn
- B) Enfermedad celíaca
- C) Colitis parasitaria
- D) Colitis ulcerosa
- E) Cáncer de colon
**Correcta: A**
Explicación del banco: Enfermedad de Cröhn: El cuadro clínico es compatible con enfermedad inflamatoria intestinal con síntomas extraintestinales (oculares). La presencia de una masa sugiere fuertemente enfermedad de Cröhn. Si hubiese sido un adulto mayor, se hubiese sospechado un cáncer de colon.

### [16] EUNACOM Julio 2024 · Pregunta 55 · confianza 0.9
Una paciente de 27 años presenta amenorrea de 7 semanas, por lo que se realiza un test de embarazo en orina, el que resulta positivo. Acude a control, solicitándose subunidad beta-HCG, que resulta 970 U/L y ecografía transvaginal, que muestra útero con endometrio de características normales, sin presencia de saco gestacional y visualización de un tumor anexial de 2,5 cm. ¿Cuál es la conducta más adecuada?
- A) Realizar laparoscopía
- B) Repetir la subunidad beta en 48 horas
- C) Iniciar metotrexato
- D) Repetir la ecografía en 48 horas
- E) Repetir la ecografía en 7 a 10 días
**Correcta: B**
Explicación del banco: Embarazo ectópico vs. Embarazo normal: Se sospecha de un embarazo ectópico cuando una prueba de embarazo es positiva pero no se visualiza el saco gestacional en la ecografía. Para confirmar el diagnóstico, se debe analizar la subunidad beta de la gonadotropina coriónica humana (hCG). Si la concentración es mayor a 3500 U/L, se confirma el embarazo ectópico. Si es menor a 3500 U/L, se debe repetir la prueba en 48 horas. Es importante tener en cuenta que un tumor anexial detectado en la ecografía podría ser el cuerpo lúteo, que es una estructura normal durante la primera etapa del embarazo.

### [17] EUNACOM Julio 2024 · Pregunta 60 · confianza 0.9
Usted atiende a 5 pacientes que consultan por vómitos y diarrea de inicio agudo en el mismo servicio de urgencia. Todos ellos son compañeros de trabajo, que almuerzan en el mismo comedor, por lo que se sospecha una intoxicación alimentaria. Además del manejo específico de los síntomas y patología de cada uno de ellos, la medida más adecuada es:
- A) Notificar al encargado de epidemiología del Hospital
- B) Realizar un interrogatorio detallado a cada uno de los pacientes, para identificar el agente causal
- C) Notificar a la Seremi de Salud
- D) Notificar al Director del Hospital
- E) Notificar a la Superintendencia de Salud
**Correcta: C**
Explicación del banco: Notificación obligatoria de enfermedades: Los tres tipos de vigilancia epidemiológica son activa, centinela y pasiva. La notificación obligatoria es una estrategia de vigilancia activa. En Chile, existen dos tipos de notificación: inmediata y diaria. La notificación inmediata se utiliza para las enfermedades más virulentas y poco frecuentes. La notificación diaria se utiliza para enfermedades menos virulentas. En ambos casos, la notificación se realiza a la Secretaría Regional Ministerial (Seremi) de Salud ante la sola sospecha de la enfermedad. Esta notificación permite a las autoridades sanitarias tomar medidas urgentes para contener el contagio.

### [18] EUNACOM Agosto 2021 · Pregunta 155 · confianza 0.9
Una paciente de 67 años, con antecedente de artritis reumatoide, en tratamiento con metotrexato y prednisona, consulta por dificultades para ver. Tiene historia de cirugía de cataratas hace dos años. Al examen oftalmológico se constata agudeza vidual 20/25 a derecha y 20/30 a izquierda y, en la campimetría visual, se observa afectación de la zona medial del campo visual derecho y de la zona superior del campo visual izquierdo. El diagnóstico más probable es:
- A) Desprendimiento de retina
- B) Lesión del quiasma óptico
- C) Glaucoma crónico
- D) Neuritis óptica
- E) Degeneración macular relacionada con la edad
**Correcta: C**
Explicación del banco: Tiene agudeza visual normal, pero afectación del campo visual, lo que sugiere un glaucoma crónico. Se asocia al uso de corticoides y alos factores de riesgo cardiovascular.

### [19] EUNACOM Julio 2019 · Pregunta 20 · confianza 0.9
¿Cuál es el examen de elección para el enfrentamiento inicial de un paciente de 22 años, en su primer cuadro de cólico renal, con microhematuria?
- A) Pielografía de eliminación
- B) UroTAC
- C) PieloTAC
- D) Ecografía renal y vesical
- E) Radiografía simple
**Correcta: C**
Explicación del banco: El diagnóstico de cólico renal es clínico. El pieloTAC es el examen de elección para identificar la ubicación y tamaño del cálculo renal, de modo de determinar si se observa (menor a 1 cm) o si se saca mediante LEC u otra intervención. El UroTAC, en cambio, se usa para estudiar el trauma renal y la hematuria, en que se sospecha cáncer, antes de la cistoscopía.

### [20] EUNACOM Julio 2019 · Pregunta 128 · confianza 0.9
¿Cuál es la conducta más adecuada para una paciente de 22 años, primigesta, cursando un embarazo de 35 semanas, que sufre una rotura de membranas, sin trabajo de parto?
- A) Inducir el parto
- B) Administrar antibióticos terapéuticos
- C) Administrar corticoides
- D) Adminitrar tocolíticos
- E) Administrar sulfato de magnesio
**Correcta: A**
Explicación del banco: Toda RPM mayor a 34 semanas se debe interrumpir. Si no tiene contraindicación del parto vaginal, se induce; si tiene contraindicación, se hace una cesárea. En cambio, las menores a 34 semanas se maduran con corticoides, se les da antibióticos y se interrumpen al cumplir 34 semanas, desarrollar una corioamnionitis clínica o comprobarse madurez fetal en la amniocentesis (la que se hace si hay sospecha de infección, sin cumplir criterios de corioamnionitis).

### [21] EUNACOM Julio 2019 · Pregunta 94 · confianza 0.9
Un hombre de 16 años presenta dolor testicular intenso, que inició hace 8 horas. Tiene EVA 8/10 y al examen testicular se constata testículo derecho muy doloroso, que no mejora con la suspensión testicular. ¿Cuál es la conducta más adecuada?
- A) Antibióticos orales
- B) Doppler testicular
- C) Analgésicos orales
- D) Antibióticos endovenosos
- E) Exploración quirúrgica
**Correcta: E**
Explicación del banco: Todo testículo agudo se explora. En este caso, por la edad (adolescente o adulto) y por la clínica, se sospecha una torsión testicular.

### [22] EUNACOM Diciembre 2019 · Pregunta 172 · confianza 0.9
Un paciente de 57 años presenta múltiples síntomas difíciles de precisar. Se ha realiza múltiples exámenes y evaluaciones médicas, sin poder llegar a un diagnóstico. Sin embargo, él insiste en que está muy enfermo y no puede realizar actividades básicas, como asearse. Hace 2 años fue pensionado por esto, sin cambiar su conducta. Su esposa lo cuida y lo asiste abnegadamente. ¿Cuál es el diagnóstico más probable?
- A) Trastorno por simulación
- B) Trastorno hipocondríaco
- C) Trastorno de somatizaicón
- D) Trastorno facticio
- E) Trastorno de personalidad dependiente
**Correcta: D**
Explicación del banco: Que se haya pensionado hace sospechar un T. por simulación, pero que no cambie su conducta y que su vida esté tan afectada, hace sospechar más un T. facticio. También el hecho de que su mujer lo cuide abnegadamente (fin ganancial de afecto, atención y cuidados).

### [23] EUNACOM Julio 2017 · Pregunta 119 · confianza 0.9
Una paciente de 24 refiere que luego de realizar ejercicios de elongación, presenta dolor súbito en el cuello y en la cabeza, con cefalea en trueno (thunderclap). ¿Cuál es el diagnóstico más probable?
- A) Cefalea cluster o en racimo
- B) Accidente isquémico transitorio
- C) Disección de la arteria cerebral o carótida
- D) Migraña sin aura desencadenada por el ejercicio.
- E) Hernia traumática del núcleo pulposo
**Correcta: C**
Explicación del banco: Diagnóstico: **Disección de la arteria cerebral o carótida** (opción **C**). La disección era la única opción posible. Sigue siendo un cuadro raro.. La combinación cardinal de dolor torácico súbito desgarrador (EVA 10/10) irradiado a región interescapular o dorso, cifras tensionales severas y asimetría de pulsos periféricos en extremidades superiores es patognomónica de disección aórtica aguda. Requiere angio-TAC de tórax inmediato y estabilización hemodinámica con betabloqueadores EV para reducir la fuerza de eyección ventricular (dP/dt).

### [24] EUNACOM Diciembre 2017 · Pregunta 166 · confianza 0.9
Una paciente de 28 años, cursa un embarazo de 32 semanas por amenorrea, sin controles obstétricos previos. Consulta por pérdida de líquido . Al examen físico presenta temperatura 38,5 grados Celsius, PA: 120/80 mmHg, FC: 100x’. Su tacto vaginal tiene un cuello cerrado, duro y posterior. Se solicita un hemograma muestra glóbulos blancos: 11.000 por mm3. La ecografía obstétricia, que muestra oligoamnios y peso fetal de 1.100 gramos, equivalente a un embarazo de 29 semanas. ¿Cuál es la conducta más adecuada?
- A) Inducir el parto con misoprostol
- B) Administrar corticoides y antibióticos y mantener una conducta expectante
- C) Realizae cesárea
- D) Realizar amniocentesis
- E) Realizar amnioinfusión, con surfactante intramniótico
**Correcta: D**
Explicación del banco: Es una pregunta difícil, con mucha información. Era una RPO de 32 semanas, con edad gestacional incierta (puede ser aún menor) y con sospecha de infección ovular. Según recuerdo, no cumplía criterios de corioamnionitis clínica, por lo que la respuesta era la amniocentesis, en mi opinión. Sin embargo no recuerdo 100% bien esta pregunta y si hubiese tenido taquicardia materna y fetal, sí estaría indicada la interrupción por cesárea (alguien me dijo que tenía más criterios, pero según recuerdo, no los tenía).

### [25] EUNACOM Julio 2017 · Pregunta 72 · confianza 0.9
Un recién nacido de 2 semanas es hospitalizado por presentar apneas. La madre re- fiere tos de 3 semanas de evolución, en crisis, que en ocasiones la hacen vomitar. ¿Cuál es el tratamiento farmacológico más adecuado?
- A) Amoxicicilina
- B) Azitromicina
- C) Ceftriaxona
- D) Oseltamivir
- E) Aciclovir
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Azitromicina** (opción **B**). La sospecha es un coqueluche, que se trata con macrólidos.. Diagnóstico de elección: PCR para Bordetella pertussis; cultivo es poco sensible (bacteria fastidiosa) De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.
