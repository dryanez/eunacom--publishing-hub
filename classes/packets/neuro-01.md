# CLASE neuro-01 · Neurologia 10.1: Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES

Escribe `classes/lessons/neuro-01.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-01" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-02: Neurologia 10.2: Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria
- neuro-03: Neurologia 10.3: Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos
- neuro-04: Neurologia 10.4: Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-01",
  "classId": "neuro-01",
  "tier": 3,
  "blockNum": 1,
  "blockName": "Enfermedad Cerebrovascular y Urgencias Neurovasculares",
  "topicLabel": "10.1",
  "title": "Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES",
  "perfilCode": "1.10.2.001, 1.10.2.007",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES N° 37): Ataque Cerebrovascular Isquémico en personas de 15 años y más · Sospecha con atención de urgencia inmediata, confirmación diagnóstica con neuroimagen en ≤ 30 minutos desde el ingreso, trombolisis endovenosa dentro de 4.5 horas y trombectomía mecánica en centros terciarios de referencia.",
  "reconstrucciones": "EUNACOM Julio 2025 (Q#66) · EUNACOM Diciembre 2025 (Q#26) · EUNACOM Enero 2023 (Q#121) · EUNACOM Julio 2019 (Q#93)",
  "frecuencia": "Máxima rentabilidad · Pregunta angular de urgencias neurológicas y medicina interna",
  "algoTitle": "Algoritmo de Reperfusión Aguda en ACV Isquémico: Ventanas y Criterios Hemodinámicos",
  "diagram": {
    "title": "Algoritmo de Reperfusión Aguda en ACV Isquémico",
    "svg": "<svg viewBox=\"0 0 620 411\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de ACV Isquémico Agudo (Cincinnati / FAST (+))</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Tiempo desde inicio o última vez visto sano · Traslado inmediato con preaviso hospitalario</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Urgencia Inmediata: TAC de Encéfalo sin Contraste (Meta puerta-TAC ≤ 20-30 min)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Descartar hemorragia intracerebral</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Glicemia capilar para descartar hipoglicemia simulación</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">¿TAC sin Hemorragia y Tiempo de Evolución desde el Inicio?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Evaluación simultánea de escala NIHSS y presión arterial de ingreso</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Ventana ≤ 4.5 horas (Sin contraindicaciones)</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Ventana 4.5 a 24 h o Oclusión de Gran Vaso</text>\n  <rect class=\"crit\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Trombolisis Intravenosa (IVT)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Alteplase 0.9 mg/kg o Tenecteplase 0.25 mg/kg</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">PA DEBE ser &lt; 185/110 mmHg</text>\n  <rect class=\"dec\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">AngioTAC / TAC Perfusión Urgente</text>\n  <text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Descartar oclusión carotídea / ACM M1</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Evaluar criterios de Trombectomía Mecánica</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Trombectomía Mecánica Endovascular (TME)</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Ventana hasta 6 h (o hasta 24 h según criterios DAWN/DEFUSE-3)</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Terapia puente post-trombolisis</text>\n  <path class=\"ln\" d=\"M310,342 V364\"/>\n  <rect class=\"acc\" x=\"100\" y=\"364\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"379\" text-anchor=\"middle\" font-weight=\"700\">Ingreso a UTAC y Prevención Secundaria Precoz</text>\n  <text class=\"accS\" x=\"310\" y=\"391\" text-anchor=\"middle\">AAS 250 mg a las 24 h post-trombolisis · Atorvastatina 80 mg · Manejo tensional controlado</text>\n</svg>"
  },
  "contexto": "El ataque cerebrovascular (ACV) isquémico es la principal causa de discapacidad adquirida en el adulto y una de las mayores urgencias médicas en Chile (Garantía GES N° 37). En el cerebro isquémico, \"tiempo es cerebro\": se destruyen 1.9 millones de neuronas por minuto. La prioridad absoluta del médico de urgencia es descartar hemorragia mediante TAC sin contraste inmediato, estabilizar la presión arterial bajo 185/110 mmHg e iniciar trombolisis intravenosa dentro de 4.5 horas o derivar a trombectomía mecánica en oclusiones de gran vaso.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Penumbra Isquémica y Clasificación Etiológica TOAST",
      "paragraphs": [
        "La oclusión arterial cerebral aguda genera dos zonas tisulares biológicamente diferenciadas: el <strong>núcleo isquémico (core)</strong>, donde el flujo sanguíneo cerebral cae por debajo de 10 mL/100 g/min, produciendo depleción inmediata de ATP, falla de la bomba Na+/K+ ATPasa, despolarización anóxica y necrosis irreversible en minutos; y la <strong>penumbra isquémica</strong>, área circundante donde el flujo se mantiene entre 10 y 20 mL/100 g/min gracias a colaterales leptomeníngeas. Las neuronas de la penumbra están silentes pero metabólicamente viables; si la reperfusión no se restablece con rapidez, el núcleo se expande inexorablemente a expensas de la penumbra.",
        "La clasificación etiológica de <strong>TOAST</strong> divide el ACV isquémico en cinco categorías cardinales: <strong>1) Aterosclerosis de grandes vasos</strong> (estenosis ≥ 50% u oclusión de carótida interna extracraneana o troncos intracraneales); <strong>2) Cardioembolia</strong> (asociada a fibrilación auricular, trombo mural ventricular post-IAM, miocardiopatía dilatada o prótesis valvulares mecánicas); <strong>3) Oclusión de pequeño vaso / infarto lacunar</strong> (infartos &lt; 15 mm en ganglios basales, cápsula interna o troncoencefálico, causados por lipohialinosis o microateromatosis ligada a hipertensión arterial y diabetes); <strong>4) Otra etiología determinada</strong> (disección arterial carotídea o vertebral en adultos jóvenes tras trauma cervical o elongación brusca, vasculitis del SNC, trombosis venosa cerebral, síndrome antifosfolípidos); y <strong>5) Etiología indeterminada / criptogénico</strong>."
      ]
    },
    {
      "subhead": "2. Diagnóstico Clínico, Escalas Prehospitalarias y Neuroimagen de Urgencia",
      "paragraphs": [
        "El reconocimiento extrahospitalario precoz se basa en la <strong>Escala de Cincinnati (FAST)</strong>: 1) Asimetría facial (paresia facial central); 2) Caída o debilidad de un brazo al elevarlos; 3) Habla anormal (disartria o afasia). La presencia de un solo parámetro confiere una probabilidad de ACV del 72%, elevándose al 85% con los tres.",
        "En el servicio de urgencia es mandatorio cuantificar el déficit mediante la <strong>Escala NIHSS (National Institutes of Health Stroke Scale)</strong> (0 a 42 puntos): evalúa nivel de conciencia, mirada conjugada, campos visuales, paresia facial, fuerza motora braquial y crural, ataxia, sensibilidad, lenguaje, disartria e inatención/extinción. Una puntuación &lt; 5 define un ACV menor; ≥ 16 indica compromiso moderado-severo con alta sospecha de oclusión de gran vaso arterial.",
        "<strong>Examen de elección inicial e inaplazable: TAC de encéfalo sin contraste</strong>. Su objetivo primario en la fase hiperaguda (&lt; 4.5 horas) es <em>descartar sangrado intracraneal</em>. En las primeras horas, el TAC es frecuentemente <strong>normal (hasta en el 60-70% de los casos)</strong> o muestra signos precoces sutiles de isquemia: borramiento del núcleo lenticular, pérdida de diferenciación sustancia gris-blanca en la corteza insular (<em>signo del ribete insular</em>), borramiento de surcos corticales y el <em>signo de la arteria cerebral media hiperdensa</em> (trombo endoluminal agudo). El <strong>Score ASPECTS</strong> (0 a 10 puntos) cuantifica la extensión isquémica precoz en el territorio de la ACM; un ASPECTS &gt; 6 predice buen pronóstico funcional tras la reperfusión.",
        "La <strong>AngioTAC cerebral y de vasos de cuello</strong> debe realizarse de inmediato en pacientes con NIHSS ≥ 6 para identificar la oclusión de grandes vasos arteriales accesibles a trombectomía mecánica (carótida interna terminal, segmento M1 de la arteria cerebral media o arteria basilar)."
      ]
    },
    {
      "subhead": "3. Reperfusión Farmacológica Aguda: Trombolisis Intravenosa (IVT)",
      "paragraphs": [
        "La <strong>trombolisis intravenosa</strong> está indicada en todo paciente con ACV isquémico con déficit neurológico discapacitante dentro de una <strong>ventana terapéutica estricta de hasta 4.5 horas</strong> desde el inicio de los síntomas (o última vez que fue visto asintomático).",
        "<strong>Agentes trombolíticos oficiales:</strong>",
        "• <strong>Alteplase (rt-PA):</strong> Dosis de <strong>0.9 mg/kg</strong> (dosis máxima 90 mg). Se administra el <strong>10% de la dosis en bolo endovenoso durante 1 minuto</strong> y el <strong>90% restante en infusión continua durante 60 minutos</strong>.",
        "• <strong>Tenecteplase (TNK):</strong> Variante modificada genéticamente con mayor afinidad por la fibrina y vida media más prolongada. Dosis: <strong>0.25 mg/kg en bolo único EV</strong> durante 5 a 10 segundos (máximo 25 mg). Guías clínicas internacionales y GES 2024-2026 lo posicionan como alternativa preferencial por rapidez de infusión y mayor tasa de recanalización precoz en oclusión de gran vaso.",
        "<strong>Requisito hemodinámico crítico:</strong> La presión arterial DEBE ser <strong>&lt; 185 mmHg de sistólica y &lt; 110 mmHg de diastólica ANTES</strong> de iniciar la infusión trombolítica, y mantenerse <strong>&lt; 180/105 mmHg durante las primeras 24 horas</strong> para minimizar el riesgo de hemorragia cerebral sintomática. Los fármacos de elección son <strong>Labetalol EV</strong> (bolos de 10-20 mg repetibles o infusión 2-8 mg/min) o <strong>Nicardipino EV</strong>.",
        "<strong>Contraindicaciones absolutas mayores:</strong> Antecedente de hemorragia intracraneal en cualquier momento de la vida; traumatismo encéfalo-craneano severo o cirugía craneoespinal en los últimos 3 meses; hemorragia interna activa; diátesis hemorrágica conocida (recuento plaquetario &lt; 100.000/mm³, INR &gt; 1.7 o TTPA prolongado); uso de anticoagulantes orales directos (DOACs) en las últimas 48 horas con pruebas de coagulación alteradas; e infarto isquémico extenso establecido (&gt; 1/3 del territorio de la ACM o ASPECTS &lt; 6)."
      ]
    },
    {
      "subhead": "4. Trombectomía Mecánica Endovascular (TME) y Ventanas Extendidas",
      "paragraphs": [
        "La <strong>trombectomía mecánica</strong> consiste en la extracción directa del trombo endoluminal mediante cateterismo femoral o radial utilizando dispositivos stent-retriever o aspiración por catéter de gran calibre.",
        "<strong>Indicaciones estándar (ventana de 0 a 6 horas):</strong> Oclusión demostrada por AngioTAC de carótida interna terminal o ACM segmento M1, edad ≥ 18 años, NIHSS basal ≥ 6, ASPECTS ≥ 6 y modified Rankin Scale (mRS) previo de 0-1.",
        "<strong>Ventana extendida (de 6 a 24 horas):</strong> Pacientes seleccionados rigurosamente mediante neuroimagen avanzada (AngioTAC con TAC perfusión o RM con difusión/perfusion) según los criterios de los ensayos <strong>DAWN</strong> y <strong>DEFUSE-3</strong>. Se busca demostrar un <strong>mismatch clínico-radiológico o de perfusión</strong> significativo: un núcleo isquémico irreversible pequeño (&lt; 50-70 mL) contrastado con un gran volumen de tejido en penumbra recuperable.",
        "<em>Principio EUNACOM fundamental:</em> Si el paciente es candidato a trombolisis IV y además tiene oclusión de gran vaso, se debe administrar la trombolisis de inmediato y coordinar en paralelo el traslado a angiografía para trombectomía (<em>terapia puente</em>). Jamás debe demorarse el trombolítico esperando ver si se traslada a hemodinamia."
      ]
    },
    {
      "subhead": "5. Manejo Médico en UTAC, Hemodinamia Permisiva y Prevención Secundaria",
      "paragraphs": [
        "El ingreso precoz a una <strong>Unidad de Tratamiento del Ataque Cerebral (UTAC)</strong> reduce la morbimortalidad y secuelas funcionales en más de un 25%. Sus pilares son:",
        "• <strong>Manejo de Presión Arterial en pacientes NO trombolizados:</strong> Se adopta una estrategia de <strong>hipertensión permisiva</strong>. NO se debe reducir la presión arterial a menos que supere <strong>PAS &gt; 220 mmHg o PAD &gt; 120 mmHg</strong> (o coexista falla cardíaca aguda, disección aórtica o infarto agudo al miocardio). Si se sobrepasan dichos límites, la reducción debe ser prudente (máximo 15% en las primeras 24 horas) para preservar la presión de perfusión en la penumbra isquémica.",
        "• <strong>Homeostasis metabólica:</strong> Mantener normoglicemia (evitar hipoglicemia &lt; 70 mg/dL e hiperglicemia &gt; 180 mg/dL, administrando insulina cristalina SC/EV según protocolo), normotermia (paracetamol EV/VO si T° &gt; 37.5 °C; la fiebre duplica el daño neuronal) y oxigenación adecuada (satO₂ &gt; 94%).",
        "• <strong>Antiagregación plaquetaria:</strong> <strong>Ácido Acetilsalicílico (AAS) 250 mg vía oral</strong> administrado precozmente (dentro de las primeras 24 a 48 horas). <em>Regla de Oro:</em> Si el paciente recibió trombolisis IV, el AAS se <strong>suspende estrictamente durante las primeras 24 horas post-trombolisis</strong> y solo se inicia tras constatar ausencia de hemorragia en el TAC de control.",
        "• <strong>Doble Antiagregación Plaquetaria (DAPT):</strong> En infartos isquémicos menores (NIHSS ≤ 3) no cardioembólicos o AIT de alto riesgo, los estudios CHANCE y POINT avalan el uso de <strong>AAS 100 mg + Clopidogrel 75 mg/día (carga 300 mg) durante los primeros 21 días</strong>, continuando luego con monoterapia para evitar exceso de sangrado.",
        "• <strong>Estatinas de alta potencia:</strong> Atorvastatina 80 mg/día iniciada precozmente, independiente del nivel basal de colesterol, por su efecto pleiotrópico estabilizador endotelial y antiinflamatorio."
      ]
    }
  ],
  "table": {
    "title": "Clasificación Etiológica TOAST y Territorios Vasculares en ACV Isquémico",
    "headers": [
      "Subtipo / Territorio",
      "Mecanismo Fisiopatológico",
      "Presentación Clínica Cardinal",
      "Hallazgos Clave de Examen"
    ],
    "rows": [
      [
        "Arteria Cerebral Media (ACM)",
        "Embolia arteria-arteria o cardioembolia a tronco principal (M1) o ramas (M2)",
        "Hemiparesia y hemihipoestesia faciobraquial contralateral predominante + Desviación oculocefálica ipsilateral",
        "Afasia de Broca/Wernicke/Global (hemisferio dominante) · Negligencia hemiespacial / Asomatognosia (no dominante)"
      ],
      [
        "Arteria Cerebral Anterior (ACA)",
        "Oclusión embólica o trombótica de ramas prefrontales y parasagitales",
        "Hemiparesia y hemihipoestesia crural contralateral (pierna > brazo) · Abulia, mutismo acinético, reflejos arcaicos",
        "Incontinencia urinaria de origen frontal · Apraxia de la marcha · Pérdida de inhibición social"
      ],
      [
        "Arteria Cerebral Posterior (ACP)",
        "Oclusión de ramas occipitales y temporomediales (frecuentemente cardioembólica)",
        "Hemianopsia homónima contralateral con preservación macular · Alexia sin agrafia (lesión esplenio del cuerpo calloso)",
        "Agnosia visual · Desorientación topográfica · Amnesia anterógrada si compromiso hipocámpico"
      ],
      [
        "Circulación Vertebrobasilar",
        "Oclusión de arteria basilar, vertebrales o arterias cerebelosas (PICA, AICA, SUCA)",
        "Síndrome cruzado (déficit de par craneal ipsilateral + hemiparesia/hemihipoestesia contralateral)",
        "Vértigo central, ataxia severa, diplopía, disfagia, disartria, compromiso fluctuante de conciencia hasta coma"
      ],
      [
        "Infarto Lacunar (Pequeño Vaso)",
        "Lipohialinosis y microateromatosis hipertensiva en arterias perforantes lenticuloestriadas",
        "Síndromes lacunares puros: Hemiparesia motora pura (brazo posterior cápsula interna) o Sensitivo puro (núcleo VPL tálamo)",
        "Ataxia-hemiparesia · Disartria-mano torpe · Ausencia característica de afasia, hemianopsia o negligencia"
      ]
    ]
  },
  "severityTable": {
    "title": "Estratificación de Gravedad, Escala NIHSS y Selección para Reperfusión Aguda",
    "headers": [
      "Puntuación NIHSS",
      "Nivel de Gravedad",
      "Pronóstico Clínico Basal",
      "Estrategia Terapéutica Inmediata"
    ],
    "rows": [
      [
        "0 – 4 puntos",
        "ACV Isquémico Leve / Menor",
        "Riesgo bajo de mortalidad; excelente recuperación funcional espontánea",
        "Evaluar si déficit es incapacitante (afasia, hemianopsia); si no discapacita, DAPT (AAS + Clopidogrel) x 21 días"
      ],
      [
        "5 – 15 puntos",
        "ACV Moderado",
        "Déficit significativo pero con amplia área de penumbra salvable",
        "Candidato prioritario a Trombolisis IV (Alteplase / Tenecteplase) si ventana ≤ 4.5 h · Solicitar AngioTAC"
      ],
      [
        "16 – 20 puntos",
        "ACV Moderado a Severo",
        "Alta sospecha de oclusión de gran vaso proximal (carótida terminal o ACM M1)",
        "Trombolisis IV inmediata + Trombectomía Mecánica (\"terapia puente\") en centro terciario"
      ],
      [
        "21 – 42 puntos",
        "ACV Grave / Masivo",
        "Mortalidad elevada (> 40%); alto riesgo de transformación hemorrágica y edema cerebral masivo",
        "Trombectomía mecánica de rescate; vigilancia en UPC por riesgo de herniación transtentorial y craniectomía descompresiva"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo de Trombolisis Endovenosa, Trombectomía y Metas de Cuidado en UTAC",
    "headers": [
      "Intervención",
      "Fármaco / Procedimiento",
      "Dosis / Ventana Terapéutica",
      "Metas Clínicas y Advertencias Críticas"
    ],
    "rows": [
      [
        "Trombolisis IV (Alteplase)",
        "Alteplase (rt-PA) recombinante",
        "0.9 mg/kg (máximo 90 mg): 10% bolo EV en 1 min + 90% infusión en 60 min · Ventana ≤ 4.5 h",
        "PA DEBE ser < 185/110 mmHg previa a infusión · Suspender infusión si cefalea severa, náuseas o deterioro de Glasgow"
      ],
      [
        "Trombolisis IV (Tenecteplase)",
        "Tenecteplase (TNK)",
        "0.25 mg/kg bolo único EV en 5-10 s (máximo 25 mg) · Ventana ≤ 4.5 h",
        "Mayor afinidad por fibrina; alternativa preferida para agilizar trombectomía mecánica puente"
      ],
      [
        "Trombectomía Mecánica",
        "Stent retriever / Tromboaspiración",
        "0 a 6 h (estándar) · 6 a 24 h (según criterios DAWN / DEFUSE-3 con mismatch)",
        "Indicada en oclusión carotídea interna terminal o ACM segmento M1 con NIHSS ≥ 6 y ASPECTS ≥ 6"
      ],
      [
        "Manejo de Presión Arterial Pre-Trombolisis",
        "Labetalol EV o Nicardipino EV",
        "Labetalol 10-20 mg bolo EV en 2 min; repetir c/10-20 min (máx 300 mg) o infusión continua 2-8 mg/min",
        "Meta estricta: PAS < 185 mmHg y PAD < 110 mmHg pre-trombolisis; mantener < 180/105 mmHg las primeras 24 h"
      ],
      [
        "Manejo de PA sin Trombolisis",
        "Hipertensión permisiva",
        "Solo tratar si PAS > 220 mmHg o PAD > 120 mmHg (salvo disección aórtica o IAM concomitante)",
        "Reducción cautelosa (15% en 24 h); caídas bruscas causan infarto irreversible de la penumbra"
      ],
      [
        "Antiagregación Plaquetaria",
        "AAS oral (asociado a Clopidogrel en ACV menor)",
        "AAS 250 mg/día iniciado en 24-48 h · Si recibió trombolisis: DIFERIR 24 h hasta TAC de control",
        "Doble antiagregación (AAS + Clopidogrel 75 mg) por 21 días si NIHSS ≤ 3 o AIT de alto riesgo"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 67 años, con antecedente de hipertensión arterial crónica en tratamiento con enalapril, es traído al servicio de urgencia por sus familiares debido a que hace 90 minutos presentó súbitamente dificultad para hablar y debilidad en el hemicuerpo derecho mientras almorzaba. Al examen físico: PA 175/98 mmHg, FC 84 lpm regular, Glasgow 14 (obedece órdenes parcialmente), presenta afasia motora mixta con disartria severa, asimetría facial derecha y hemiparesia braquiocrural derecha con fuerza M2 en brazo y M3 en pierna (NIHSS estimado: 13 puntos). La glicemia capilar es de 118 mg/dL. El TAC de encéfalo sin contraste efectuado a los 25 minutos del ingreso resulta rigurosamente normal, sin evidencias de colecciones hemáticas ni signos de edema expansivo.",
    "conducta": "El paciente presenta un ataque cerebrovascular isquémico agudo de territorio carotídeo izquierdo (ACM izquierda) en período de ventana terapéutica precoz (< 4.5 horas). La normalidad tomográfica descarta hemorragia intracerebral (el TAC es habitualmente normal en las primeras horas de un infarto) y confirma que no existen contraindicaciones radiológicas. Las cifras tensionales se encuentran dentro del rango seguro pre-trombolisis (< 185/110 mmHg). La conducta obligatoria e inmediata es iniciar trombolisis intravenosa con Alteplase (0.9 mg/kg) o Tenecteplase (0.25 mg/kg en bolo), solicitar AngioTAC cerebral de urgencia para evaluar oclusión de gran vaso arterial susceptible a trombectomía mecánica coordinada e ingresar a la Unidad de Tratamiento del Ataque Cerebral (UTAC). Está formalmente contraindicado diferir la trombolisis esperando una resonancia magnética o administrar antiagregantes plaquetarios antes de cumplir 24 horas post-trombolítico."
  },
  "explicacion": "El paciente presenta un ataque cerebrovascular isquémico agudo de territorio carotídeo izquierdo (ACM izquierda) en período de ventana terapéutica precoz (< 4.5 horas). La normalidad tomográfica descarta hemorragia intracerebral (el TAC es habitualmente normal en las primeras horas de un infarto) y confirma que no existen contraindicaciones radiológicas. Las cifras tensionales se encuentran dentro del rango seguro pre-trombolisis (< 185/110 mmHg). La conducta obligatoria e inmediata es iniciar trombolisis intravenosa con Alteplase (0.9 mg/kg) o Tenecteplase (0.25 mg/kg en bolo), solicitar AngioTAC cerebral de urgencia para evaluar oclusión de gran vaso arterial susceptible a trombectomía mecánica coordinada e ingresar a la Unidad de Tratamiento del Ataque Cerebral (UTAC). Está formalmente contraindicado diferir la trombolisis esperando una resonancia magnética o administrar antiagregantes plaquetarios antes de cumplir 24 horas post-trombolítico.",
  "keyPoints": [
    "Todo déficit neurológico focal agudo es una emergencia médica tiempo-dependiente: el TAC de encéfalo sin contraste debe realizarse e informarse en ≤ 30 minutos desde el ingreso.",
    "El rol principal del TAC sin contraste en las primeras 4.5 horas es descartar hemorragia intracerebral; un TAC normal confirma la sospecha de ACV isquémico y NO contraindica la trombolisis.",
    "La ventana para trombolisis endovenosa con Alteplase (0.9 mg/kg) o Tenecteplase (0.25 mg/kg) es de hasta 4.5 horas desde el inicio de los síntomas o la última vez visto asintomático.",
    "Criterio tensional pre-trombolisis estricto: la PA debe reducirse a < 185/110 mmHg antes de iniciar el trombolítico con Labetalol o Nicardipino EV.",
    "Si el paciente NO es candidato a reperfusión, se adopta hipertensión permisiva: NO reducir la PA a menos que supere 220/120 mmHg para no hipoperfundir la penumbra isquémica.",
    "La trombectomía mecánica endovascular está indicada en oclusión de gran vaso (carótida terminal, ACM M1) hasta las 6 horas de forma estándar, y hasta las 24 horas en centros especializados con mismatch por perfusión (ensayos DAWN y DEFUSE-3).",
    "El Ácido Acetilsalicílico (AAS 250 mg) se administra precozmente en pacientes no trombolizados, pero DEBE postergarse estrictamente 24 horas si el paciente recibió trombolisis IV.",
    "En ACV isquémico menor (NIHSS ≤ 3) no cardioembólico o AIT de alto riesgo, la doble antiagregación con AAS + Clopidogrel se mantiene por 21 días para prevenir recurrencias precoces."
  ],
  "questions": [
    {
      "stem": "Un paciente de 55 años sufre un AVE isquémico de arteria cerebral media, el\nque es manejado oportunamente con trombolisis endovenosa, permaneciendo\nsólo con una leve hemiparesia izquierda. Se realiza ECG que resulta normal,\necocardiografía sin alteraciones y ecografía-doppler carotídea con estenosis\ncarotídea derecha de 60% y estenosis carotídea izquierda de 40%. La conducta\nmás adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Iniciar anticoagulación oral y controlar los factores de riesgo cardiovascular"
        },
        {
          "id": "B",
          "text": "Iniciar aspirina y controlar los factores de riesgo cardiovascular"
        },
        {
          "id": "C",
          "text": "Realizar endarterectomía derecha"
        },
        {
          "id": "D",
          "text": "Realizar endarterectomía bilateral"
        },
        {
          "id": "E",
          "text": "Solicitar angiografía carotídea"
        }
      ],
      "correcta": "C",
      "explicacion": "La alternativa correcta es la C (Realizar endarterectomía derecha). La razón principal radica en la presencia de una estenosis carotídea significativa (60%) en el lado derecho, en un paciente que ha sufrido un AVE isquémico reciente.\n\n*   **Estenosis Carotídea Sintomática:** La estenosis carotídea se considera sintomática porque el paciente ya tuvo un evento isquémico (AVE). Las guías internacionales y la evidencia disponible indican que la endarterectomía carotídea (o en algunos casos, la angioplastia con stent) es beneficiosa en pacientes sintomáticos con estenosis entre 50-99% (según algunas guías, el umbral puede ser 70% en otras). El objetivo es reducir el riesgo de un nuevo evento isquémico.\n*   **Oportunidad:** El paciente fue manejado oportunamente con trombólisis, lo cual sugiere que se encuentra en una ventana de tiempo en la que la intervención quirúrgica carotídea puede ser realizada de forma segura y efectiva para prevenir futuros eventos.\n*   **Lado Afectado:** La estenosis del 60% en el lado derecho es la más significativa y, por lo tanto, la que requiere intervención. Aunque existe una estenosis del 40% en el lado izquierdo, esta no alcanza el umbral para la intervención quirúrgica en un paciente sintomático, al menos no de forma inmediata.\n\n**Importante:** Si bien no contamos con una guía clínica MINSAL específica para el manejo de la estenosis carotídea sintomática post-AVE, la evidencia internacional (como las guías de la American Heart Association/American Stroke Association) son consistentes en recomendar la intervención en estenosis significativas en pacientes sintomáticos. El juicio clínico y la discusión del caso con un equipo multidisciplinario (neurólogo, cirujano vascular) son fundamentales.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Un paciente de 67 años, hipertenso y diabético presenta de forma súbita una\nhemiparesia derecha, asociada a afasia, de 30 minutos de duración. Se solicita\nTAC de cerebro que descarta hemorragias. Es manejado adecuadamente, con\nmedidas de neuroprotección y afortunadamente, los síntomas inician una\nrecuperación espontánea antes de comenzar el protocolo de trombolisis. Al\nsegundo día está en excelentes condiciones, sin déficit neurológico ni otras\nalteraciones del examen físico. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Solicitar TAC de cerebro control"
        },
        {
          "id": "B",
          "text": "Solicitar electroencefalograma"
        },
        {
          "id": "C",
          "text": "Solicitar Holter de arritmias, ecocardiograma y eco-doppler carotideo"
        },
        {
          "id": "D",
          "text": "Iniciar aspirina"
        },
        {
          "id": "E",
          "text": "Iniciar anticoagulación oral a permanencia"
        }
      ],
      "correcta": "C",
      "explicacion": "El paciente presenta un cuadro compatible con un accidente isquémico transitorio (AIT) o un infarto cerebral menor con recuperación espontánea temprana. La aparición súbita de déficit neurológico focal (hemiparesia derecha y afasia), la duración breve (30 minutos) y la recuperación completa antes de las 48 horas (en este caso, al segundo día), sin evidencia de hemorragia en la TAC inicial, son características clave. Un AIT es un evento isquémico cerebral que causa síntomas neurológicos transitorios sin evidencia de infarto agudo en las pruebas de imagen. Sin embargo, clínicamente, el abordaje diagnóstico y la urgencia son idénticos a los de un ACV isquémico, ya que un AIT es un fuerte predictor de un ACV inminente.\n\nLa conducta más adecuada es buscar la etiología subyacente de este evento isquémico para implementar medidas de prevención secundaria específicas y efectivas. Las causas más comunes de AIT/ACV isquémico incluyen: enfermedad aterosclerótica de grandes vasos (especialmente carotídea), fuentes cardioembólicas (como fibrilación auricular, enfermedad valvular, foramen oval permeable, trombos intracavitarios) y enfermedad de pequeños vasos. La solicitud de un Holter de arritmias busca detectar fibrilación auricular paroxística; el ecocardiograma evalúa el corazón como posible fuente de émbolos (válvulas, función ventricular, trombos, foramen oval); y el eco-doppler carotídeo evalúa la presencia de estenosis carotídea significativa, una causa tratable de ACV. Identificar la causa permitirá instaurar el tratamiento más adecuado (por ejemplo, anticoagulación para fibrilación auricular, endarterectomía o stenting para estenosis carotídea severa).",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Un paciente de 60 años, portador de una ACxFA tratada con atenolol y\nanticoagulación oral, consulta por hemiparesia izquierda, de inicio súbito hace\n1 hora, asociada a hemihipoestesia ipsilateral. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Solicitar TAC de cerebro sin contraste"
        },
        {
          "id": "B",
          "text": "Solicitar electroencefalograma"
        },
        {
          "id": "C",
          "text": "Iniciar anticoagulación con heparina"
        },
        {
          "id": "D",
          "text": "Realizar trombolisis endovenosa"
        },
        {
          "id": "E",
          "text": "Solicitar angiografía carotidea"
        }
      ],
      "correcta": "A",
      "explicacion": "La alternativa correcta es solicitar un TAC de cerebro sin contraste debido a la sospecha clínica de un accidente cerebrovascular (ACV) agudo. El paciente presenta una hemiparesia izquierda de inicio súbito, acompañada de hemihipoestesia ipsilateral, lo cual sugiere fuertemente un evento isquémico o hemorrágico en el hemisferio derecho. El TAC de cerebro sin contraste es el estudio de neuroimagen de primera línea para diferenciar entre un ACV isquémico y uno hemorrágico. Esta diferenciación es crucial porque el tratamiento para cada uno es completamente distinto. En el ACV isquémico, se considera la trombolisis o trombectomía mecánica, mientras que en el ACV hemorrágico, estos tratamientos están contraindicados. La rapidez en la obtención del TAC es fundamental para determinar la elegibilidad del paciente para terapias de reperfusión en caso de ACV isquémico. Las Guías Clínicas MINSAL para el manejo del ACV isquémico establecen que la neuroimagen debe obtenerse idealmente dentro de los primeros 25 minutos desde el arribo del paciente al servicio de urgencias.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    },
    {
      "stem": "Ingresa a SU hombre de 72 años, HTA, DM2, dislipidemia, con 1 hora de\nevolución de afasia asociada a hemiparesia derecha. Se solicita TAC de cerebro\nque no muestra alteraciones. Su conducta siguiente sería:",
      "options": [
        {
          "id": "A",
          "text": "Inicio de AAS asociado a Acenocumarol (Neosintrom) e ingreso a intermedio."
        },
        {
          "id": "B",
          "text": "Inicio de AAS 250 mg al día, heparina estandar por BIC e ingreso a UCI."
        },
        {
          "id": "C",
          "text": "Inicio de trombolisis por SK asociado a heparina no fraccionada."
        },
        {
          "id": "D",
          "text": "Dejar en evolución espontánea, se encuentra fuera de alcance terapéutico."
        },
        {
          "id": "E",
          "text": "Inicio de trombolisis con tPA."
        }
      ],
      "correcta": "E",
      "explicacion": "Estamos ante un paciente con un accidente cerebrovascular isquémico (ACV isquémico) agudo. Los síntomas (afasia y hemiparesia) comenzaron hace solo 1 hora, y la TAC inicial no muestra hemorragia. Esto es crucial, ya que la ausencia de hemorragia en la TAC es un criterio de inclusión para la trombolisis con activador tisular del plasminógeno (tPA). El tiempo es cerebro, y cada minuto cuenta en estos casos. La trombolisis es el tratamiento de elección en la fase aguda del ACV isquémico, dentro de las primeras 4.5 horas desde el inicio de los síntomas (y hasta 3 horas en algunos centros, aunque la ventana se está expandiendo). El objetivo es restaurar el flujo sanguíneo al área cerebral afectada y minimizar el daño. La guía clínica del MINSAL para el manejo del ACV isquémico enfatiza la importancia del reconocimiento temprano de los síntomas y la rápida administración de tPA en pacientes elegibles. El paciente cumple con los criterios de inclusión para la trombolisis: déficit neurológico agudo, inicio de los síntomas dentro de la ventana terapéutica y ausencia de hemorragia en la TAC.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.007"
    }
  ],
  "vignetteText": "Hombre de 67 años, con antecedente de hipertensión arterial crónica en tratamiento con enalapril, es traído al servicio de urgencia por sus familiares debido a que hace 90 minutos presentó súbitamente dificultad para hablar y debilidad en el hemicuerpo derecho mientras almorzaba. Al examen físico: PA 175/98 mmHg, FC 84 lpm regular, Glasgow 14 (obedece órdenes parcialmente), presenta afasia motora mixta con disartria severa, asimetría facial derecha y hemiparesia braquiocrural derecha con fuerza M2 en brazo y M3 en pierna (NIHSS estimado: 13 puntos). La glicemia capilar es de 118 mg/dL. El TAC de encéfalo sin contraste efectuado a los 25 minutos del ingreso resulta rigurosamente normal, sin evidencias de colecciones hemáticas ni signos de edema expansivo."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "accidente, cerebrovascular, isquemico, ventana, terapeutica")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2019 · Pregunta 93 · confianza 0.95
Un paciente de 67 años presenta hemiparesia derecha de dos horas de evolución, que inició de manera súbita y se asocia a dificultades para hablar. Al examen físico tiene hemiparesia faciobraquiocrural derecha y afasia. Su TAC de cerebro es normal. La conducta más adecuada es:
- A) Anticoagular con heparina
- B) Administrar antiagregantes plaquetarios
- C) Solicitar resonancia magnética nuclear
- D) Realizar embolectomía
- E) Realizar trombólisis
**Correcta: E**
Explicación del banco: Tiene un AVE diagnosticado (se diagnostica con la clínica de signos focales de inicio súbito). La TAC se pide solo para diferenciar los AVE hemorrágicos, de los isquémicos y, en este caso, por estar normal la TAC se confirma que no es hemorrágico, sino isquémico. Por tener menos de 4,5 horas de evolución, está dentro de la ventana de trombolíticos, que es lo más urgente (rTPA ev).

### [2] EUNACOM Julio 2025 · Pregunta 66 · confianza 0.9
Paciente de 72 años llega a urgencias con hemiparesia derecha y afasia de inicio súbito hace 5 horas. TAC de cerebro sin contraste: normal. ¿Cuál es la conducta más adecuada?
- A) Antiagregación plaquetaria (aspirina 250 mg) e hospitalización
- B) Trombolizar con rtPA (ya pasaron >4.5h, fuera de ventana)
- C) Trombectomía mecánica (evaluar si hay oclusión de gran vaso)
- D) Observación domiciliaria
- E) Anticoagulación con heparina inmediata
**Correcta: A**
Explicación del banco: ACV isquémico a las 5 horas: fuera de ventana para trombolisis (>4.5h). Si no hay oclusión de gran vaso, el tratamiento es antiagregación (aspirina) + hospitalización para monitoreo y estudios etiológicos. Anticoagulación no está indicada en ACV isquémico agudo de forma rutinaria.

### [3] EUNACOM Agosto 2021 · Pregunta 76 · confianza 0.9
Un paciente de 32 años presenta dolor cervical intenso, mientras realizaba deporte, que se irradia hacia la cara, zona temporal y se asocia a cefalea intensa. Al examen físico se observa ptosis y miosis derechas. El diagnóstico más probable es:
- A) Parálisis del tercer nervio craneal
- B) Aneurisma cerebral anterior, con compromiso del tercer nervio craneal
- C) Infarto vertebrobasilar
- D) Migraña hemipléjica
- E) Disección carotidea
**Correcta: E**
Explicación del banco: La disección carotídea suele darse en contexto de deportes de contacto o ejercicios de elongación y su clínica es dolor cervical y cefalea. Además, en este caso, se produjo un síndrome de Horner, por compresión del ganglio estrellado, a nivel de la bifurcación carotídea.

### [4] EUNACOM Julio 2017 · Pregunta 119 · confianza 0.9
Una paciente de 24 refiere que luego de realizar ejercicios de elongación, presenta dolor súbito en el cuello y en la cabeza, con cefalea en trueno (thunderclap). ¿Cuál es el diagnóstico más probable?
- A) Cefalea cluster o en racimo
- B) Accidente isquémico transitorio
- C) Disección de la arteria cerebral o carótida
- D) Migraña sin aura desencadenada por el ejercicio.
- E) Hernia traumática del núcleo pulposo
**Correcta: C**
Explicación del banco: Diagnóstico: **Disección de la arteria cerebral o carótida** (opción **C**). La disección era la única opción posible. Sigue siendo un cuadro raro.. La combinación cardinal de dolor torácico súbito desgarrador (EVA 10/10) irradiado a región interescapular o dorso, cifras tensionales severas y asimetría de pulsos periféricos en extremidades superiores es patognomónica de disección aórtica aguda. Requiere angio-TAC de tórax inmediato y estabilización hemodinámica con betabloqueadores EV para reducir la fuerza de eyección ventricular (dP/dt).

### [5] EUNACOM Diciembre 2025 · Pregunta 26 · confianza 0.8
Un paciente de 60 años, con hipertensión arterial de larga data mal controlada, consulta por cefalea intensa que ha aumentado en intensidad hasta EVA 9/10, asociada a vómitos y mareos de 2 horas de evolución, por lo que acude al servicio de urgencias. Al examen Fsico presenta presión arterial 170/105 mmHg y frecuencia cardíaca 62 lpm, sin signos focales en el examen neurológico. Se solicita una TAC de cerebro que se muestra a con8nuación: ¿Cuál es el diagnós8co más probable?
- A) Hematoma subdural
- B) Hemorragia subaracnoidea
- C) Infarto de arteria cerebral media con transformación hemorrágica
- D) Hematoma talámico derecho
- E) Hemorragia intraparenquimatosa secundaria a malformación arteriovenosa
**Correcta: D**
Explicación del banco: La sangre se ve blanca en la TAC. Es un hematoma intraparenquimatoso de localización talámica. El diagnóstico, por tanto, es un ACV hemorrágico, que contraindica la aspirina, anticoagulación y trombólisis y se debe manejar con medidas de neuroprotección con objetivo de PA sistólica cercana a 140 mmHg (si está sobre 220 mmHg, se debe bajar rápido, pero no tanto); en el isquémico, en cambio, se baja la PA para que sea menor a 220/120 mmHg. Fuente imagen: Revista Seram 34.

### [6] EUNACOM Diciembre 2022 · Pregunta 97 · confianza 0.8
Una paciente de 65 años, hipertenso y diabético de larga data, consulta por cefalea intensa de inicio súbito, asociado a dificultades para moverse. Al examen físico tiene una hemiparesia derecha, armónica, sin compromiso de conciencia y con conservación del lenguaje y la sensibilidad. No tiene alteraciones visuales. Como antecedente, ha sufrido golpes por caídas a repetición. ¿Cuál es el diagnóstico más probable?
- A) Accidente vascular encefálico por compromiso de la arteria cerebral media
- B) Accidente vascular encefálico por compromiso de la arteria cerebral anterior
- C) Hemorragia de la protuberancia anular o puente de Varolio
- D) Accidente vascular encefálico hemorrágico
- E) Accidente vascular de tipo lacunar
**Correcta: A**
Explicación del banco: Diagnóstico: **Accidente vascular encefálico por compromiso de la arteria cerebral media** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [7] EUNACOM Enero 2023 · Pregunta 121 · confianza 0.75
Paciente con cefalea súbita y hemiplejia del hemicuerpo izquierdo, sin alteraciones sensitivas ni del habla. ¿Diagnóstico más probable?
- A) Hemorragia intracerebral en cápsula interna
- B) AVE isquémico de territorio carotídeo
- C) Hematoma subdural agudo
- D) AVE isquémico de territorio basilar
- E) Infarto lacunar
**Correcta: E**
Explicación del banco: Diagnóstico: **Infarto lacunar** (opción **E**). Infarto lacunar. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [8] EUNACOM Diciembre 2019 · Pregunta 1 · confianza 0.65
Una paciente de 40 años, usuaria de anticonceptivos orales, consulta por cefalea holocránea, muy intensa, de 5 días de evolución, que se ha asociado a náuseas y vómitos alimentarios, mayores en la mañana, y que no ha respondido al uso de analgésicos orales. Hoy presentó una convulsión tónico-clónica. En su examen físico tiene sopor superficial paresia de las extremidades derechas. ¿Cuál es el diagnóstico más probable?
- A) Migraña por anticonceptivos
- B) Infarto cerebral extenso
- C) Accidente vascular lacunar
- D) Epilepsia con parálisis de Todd
- E) Trombosis venosa cerebral
**Correcta: E**
Explicación del banco: Pregunta difícil, pero tiene una cefalea con signos de HTEC y signos focales, más convulsiones. Orienta a trombosis de seno cavernoso el antecedente de ACO. También podría haber sido un tumor cerebral, aunque con una evolución más lenta. La migraña sería crónica.

### [9] EUNACOM Enero 2023 · Pregunta 144 · confianza 0.55
Paciente con dolor cervical súbito derecho con irradiación a hemicráneo ipsilateral tras ejercicio, más ptosis y miosis. ¿Diagnóstico más probable?
- A) Neuralgia del trigémino (rama V1)
- B) Migraña con aura
- C) Cefalea en racimos (cluster)
- D) Disección de arteria carótida interna derecha
- E) Síndrome de Horner idiopático
**Correcta: D**
Explicación del banco: Diagnóstico: **Disección de arteria carótida interna derecha** (opción **D**). Disección de arteria carótida interna derecha. La combinación cardinal de dolor torácico súbito desgarrador (EVA 10/10) irradiado a región interescapular o dorso, cifras tensionales severas y asimetría de pulsos periféricos en extremidades superiores es patognomónica de disección aórtica aguda. Requiere angio-TAC de tórax inmediato y estabilización hemodinámica con betabloqueadores EV para reducir la fuerza de eyección ventricular (dP/dt).

### [10] EUNACOM Diciembre 2018 · Pregunta 24 · confianza 0.55
Un paciente de, con antecedente de hipertensión arterial crónica y caídas, consulta por cefalea de instalación brusca, hace algunas horas, asociado a imposibilidad de mover las extremidades derechas. Al examen neurológico presenta hemiplejia armónica derecha, sin alteraciones sensitivas, del habla ni del estado de conciencia. El diagnóstico más probable es:
- A) Hematoma subdural
- B) Accidente vascular encefálico lacunar
- C) Accidente de la arteria cerebral media izquierda
- D) Accidente vascular hemorrágico del puente
- E) Hemorragia subaracnoidea
**Correcta: B**
Explicación del banco: En la práctica no es fácil diferenciar los distitos tipos de AVE con la sola clínica. La cefalea orienta más a hemorrágico, pero en el puente, habría tenido compromiso de conciencia y afectación de pares craneanos. El de arteria cerebral media tendría alteraciones del habla y sensitivas. Una AVE lacunar clásico es el con hemiparesia pura, sin afectación del habla ni conciencia. Suelen no tener cefalea, pero el 10% sí tiene.

### [11] EUNACOM Julio 2017 · Pregunta 84 · confianza 0.55
Un paciente de 62 años presenta tendencia a la somnolencia, asociado a dificultad para realizar movimientos con la mitad derecha del cuerpo, que inició hace 2 horas. Al examen físico se aprecia un paciente confuso con una hemiparesia braquicrural dere- cha, parálisis del tercer par izquierdo y signo de Babinski bilateral. ¿Cuál es el diagnós- tico más probable?
- A) Infarto de arteria cerebral media derecha
- B) Infarto de arteria cerebral media izquierda
- C) Infarto de tronco-encéfalo
- D) Síndrome de enclavamiento
- E) Infarto vertebro-basilar
**Correcta: C**
Explicación del banco: C, D? Si bien parece un síndrome alterno clásico (compromiso de un par craneal, más hemiparesia contralateral), es probable que se trate de un infarto de troncoencéfa- lo. Sin embargo, la clínica del enclavamiento transtentorial es casi idéntica. No es posi- ble hacer la distinción con el enunciado. Es una mala pregunta.

### [12] EUNACOM Julio 2013 · Pregunta 28 · confianza 0.55
Un paciente de 51 años, con antecedentes de diabetes mellitus e hipertensión en tratamiento, es traído por presentar cuadro de hemiparesia faciobraquiocrural izquierda de inicio súbito desde hace 2 horas, asociado a dificultad para articular palabras. Al examen físico se corrobora dicha paresia asociada a disminución de reflejos en lado izquierdo. El examen de elección para el diagnóstico en este caso es:
- A) Punción lumbar
- B) Resonancia magnética
- C) TAC de cerebro con contraste
- D) TAC de cerebro sin contraste e) Angiografía de arteria cerebral media
- E) Hemograma y VHS
**Correcta: D**
Explicación del banco: Si bien la RMN es el mejor examen (da más información), el TAC sin contraste es el de elección, ya que es más rápido (la RMN demora 45 min o más y cada minuto es vital en el AVE) y permite diferenciar el AVE isquémico del hemorrágico, que es lo que importa para determinar el manejo en este momento, ya que al llevar 2 horas, está en la ventana para trombolisis intravenosa con rTPA (hasta 4,5 horas, aunque su efectividad mayor es durante las primeras 3 horas). Sigue siendo una pregunta discutible, pero yo marcaría TAC. Eso sí, hay que ver cómo está redactada la pregunta en el examen original.

### [13] EUNACOM Diciembre 2022 · Pregunta 93 · confianza 0.5
Un paciente de 35 años presenta dolor cervical súbito, mayor en el lado derecho, que inició mientras hacía deporte. El dolor es intenso y se irradia a la cara. Al examen neurológico, destaca ptosis y miosis del ojo derecho, sin alteraciones de la sensibilidad ni motilidad. ¿Cuál es el diagnóstico más probable?
- A) Cefalea en racimo (cluster headache)
- B) Parálisis del tercer par
- C) Disección carotídea
- D) Malformación vascular cerebral con compresión del tercer nervio craneal
- E) Infarto vertebro basilar
**Correcta: B**
Explicación del banco: Diagnóstico: **Parálisis del tercer par** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [14] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Agosto 2021 · Pregunta 99 · confianza 0.95
Un paciente de 26 años, sufre un accidente automovilístico de alta energía, como conductor. Llega a la urgencia entablillado y con hemodinamia estable. Destaca la extremidad inferior derecha en flexión y aducción, dolorosa, con imposibilidad de caminar. Se realiza radiografía anteroposterior de pelvis, que se muestra a continuación (fuente: radiopaedia): ¿Cuál es el diagnóstico más probable?
- A) Fractura de la cabeza femoral derecha
- B) Fractura de zona posterior del cotilo derecho
- C) Luxofractura posterior de cadera derecha
- D) Fractura de pelvis inestable
- E) Fractura extracapsular de cadera derecha
**Correcta: C**
Explicación del banco: Está en posición púdica, clásica de la luxación posterior de cadera; y la radiografía muestra la luxación posterior derecha. No queda claro el rasgo de fractura.

### [16] EUNACOM Agosto 2021 · Pregunta 156 · confianza 0.95
Un paciente de 65 años, con antecedente de revascularización miocárdica hace un año y cirugía de cataratas, consulta porque hace algunas horas dejó de ver su pie derecho. No ha presentado otros síntomas. Al examen físico se aprecia oculomotilidad normal, inspección normal y defecto pupilar aferente relativo en el ojo derecho. La campimetría muestra pérdida del campo visual inferior del ojo derecho. ¿Cuál es el diagnóstico más probable?
- A) Neuritis óptica
- B) Degeneración macular relacionada con la edad
- C) Accidente vascular encefálico occipital
- D) Edema macular
- E) Neuropatía óptica isquémica
**Correcta: E**
Explicación del banco: Tiene una amaurosis parcial súbita, lo que sugiere fuertemente una neuropatía óptica isquémica. Por ser la parte inferior del campo visual izquierdo lo afectado, probablemente la lesión se produjo en la parte superior del nervio óptico izquierdo. La neuritis óptica se instala en horas o días, la DMRE demora meses o años, el edema macular demora días y el accidente vascular occipital tiene una hemianopsia contralateral, afectado ambos campos visuales. Finalmente, también podría haber sido un desprendimiento de retina, aunque suele estar precedido por entopsias o fotopsias y avanzar lentamente, como una "caída de telón", "cierre de cortina" o "levantamiento de un muro".

### [17] EUNACOM Julio 2013 · Pregunta 86 · confianza 0.95
Un paciente de 24 años, sin antecedentes, consulta porque hace ocho meses mientras esperaba transporte colectivo, presenció un accidente automovilístico con resultados fatales, desde entonces intenta no acercarse mucho a la calle y cada vez que está en un paradero se encuentra muy inquieto, además refiere que le cuesta conciliar el sueño ya que presenta pesadillas frecuentemente. El diagnóstico más probable es:
- A) Trastorno por estrés post traumático
- B) Trastorno de ansiedad
- C) Trastorno evitativo
- D) Trastorno por estrés agudo
- E) Trastorno adaptativo
**Correcta: A**
Explicación del banco: Diagnóstico: **Trastorno por estrés post traumático** (opción **A**). De libro y lleva más de 4 semanas.. El manejo de los contactos de pacientes con coqueluche se basa en la administración de azitromicina por cinco días, con la misma dosis que se utiliza en el tratamiento. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [18] EUNACOM Diciembre 2025 · Pregunta 180 · confianza 0.9
Una paciente de 23 años no llega a su domicilio luego de un conﬂicto familiar grave, siendo encontrada dos días después en una ciudad diferente, en buenas condiciones generales. Ella no recuerda nada de lo sucedido en ese intervalo de 8empo y no parece estar preocupada por ello. Su examen neurológico es normal. ¿Cuál es el diagnós8co más probable?
- A) Amnesia global transitoria
- B) Episodio psicó2co breve
- C) Trastorno conversivo
- D) Trastorno de estrés agudo
- E) Trastorno disocia2vo
**Correcta: E**
Explicación del banco: Tiene una fuga disociativa clásica, que es un Gpo de amnesia disociativa, en la que, además, se produce una “fuga” desde su lugar habitual. No se debe confundir con la amnesia global transitoria, que es un Gpo de accidente isquémico transitorio cerebral (se debe buscar fuente embólica), que se caracteriza por desorientación y amnesia (repiGendo las mismas preguntas), autolimitado, de pocas horas de evolución.

### [19] EUNACOM Julio 2025 · Pregunta 133 · confianza 0.9
Embarazada de 12 semanas con translucencia nucal aumentada en ecografía. ¿Cuál es el examen definitivo para confirmar trisomía 21?
- A) Biopsia de vellosidades coriales (11-14 semanas)
- B) Amniocentesis (15-20 semanas)
- C) ADN fetal en sangre materna (NIPT)
- D) Fetoscopia
- E) Marcadores séricos maternos (triple marcador)
**Correcta: A**
Explicación del banco: A las 12 semanas: biopsia de vellosidades coriales (BVC) es el examen invasivo de elección para cariotipo fetal (ventana 10-14 semanas). La amniocentesis se hace después de las 15 semanas.

### [20] EUNACOM Diciembre 2025 · Pregunta 138 · confianza 0.9
Un paciente de 21 años sufre accidente en esquí con caída y torsión del tobillo derecho, evolucionando con dolor e impotencia funcional. Se solicita radiograFa de tobillo que se muestra a con8nuación: ¿Cuál es la conducta inicial más adecuada?
- A) Reposo con extremidad en elevación
- B) Reducción cerrada e inmovilización con valva de yeso
- C) Analgésicos y apoyo progresivo con mínima carga
- D) Vendaje compresivo
- E) Tracción e inmovilización con yeso de la extremidad
**Correcta: B**
Explicación del banco: Tiene una luxofractura de tobillo, cuyo manejo es quirúrgico. Sin embargo, el manejo inicial consiste en analgesia, reducción cerrada (bajo anestesia o sedación) e inmovilización transitoria, con valva de yeso abierta, para evitar un síndrome compartimental. Este mismo manejo aplica a otras fracturas desplazadas, mientras se espera la cirugía. Fuente imagen: Radiopaedia.

### [21] EUNACOM Diciembre 2024 · Pregunta 147 · confianza 0.9
Adulto mayor con temblor al escribir, un temblor esencial ¿Con que se trata? a.​ Propanolol
- A) Accidente cerebrovascular
- B) Epilepsia
- C) Esclerosis múltiple
- D) Enfermedad de Parkinson
- E) Migraña
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Accidente cerebrovascular). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Epilepsia, Esclerosis múltiple) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [22] EUNACOM Julio 2024 · Pregunta 138 · confianza 0.9
Un paciente de 60 años, gran fumador y con antecedentes de consumo excesivo de alcohol, hasta hace 6 meses en que suspendió el cigarrillo y la ingesta de alcohol, consulta por episodios de dolor abdominal epigástrico intenso, asociado a vómitos alimentarios. Refiere también episodios de diarrea abundante, que han ido en aumento. Se solicitan exámenes, entre los que muestra hemograma con hematocrito: 39%, blancos: 9.000 por mm3, plaquetas: 250.000 por mm3; glicemia de ayuno: 122 mg/dL, lipasa plasmática: 210 UI/L, amilasa plasmática: 90 UI/L, fosfatasa alcalina: 210 UI/L, GOT: 32 UI/L, GPT: 40 U/L y GGT: 70 UI/L. Se realiza ecografía abdominal, que se describe como “ventana ecográfica insuficiente por meteorismo”. ¿Cuál es el diagnóstico más probable?
- A) Pancreatitis aguda
- B) Colecistitis aguda
- C) Cáncer de páncreas
- D) Coledocolitiasis
- E) Pancreatitis crónica
**Correcta: E**
Explicación del banco: Pancreatitis Crónica: El caso describe una pancreatitis crónica con complicaciones típicas como diabetes (tien glicemia de ayuno alterada y no aún diabetes) y síndrome de mala absorción. Se caracteriza por dolor abdominal, generalmente después de ingerir alimentos o alcohol. La causa más frecuente es el alcoholismo.

### [23] EUNACOM Julio 2015 · Pregunta 43 · confianza 0.9
Un paciente de 46 años presenta un accidente, resultando con una fractura de pelvis. Presenta dolor y salida de sangre fresca por la uretra. Además se palpa la próstata ascendida en el tacto rectal y no ha podido orinar. ¿Cuál es la conducta más adecuada?
- A) Pedir un TAC de abdomen y pelvis
- B) Solicitar resonancia magnética
- C) Realizar cistoscopía
- D) Instalar sonda Foley
- E) Instalar cistostomía
**Correcta: E**
Explicación del banco: Es una sección uretral. Está contraindicada la Sonda Foley y Nelaton. Se instala cistostomía. Se estudia con uretrocistografía retrógrada y no con los exámens que ahí aparecían. Se resuelve luego con cirugía.

### [24] EUNACOM Julio 2013 · Pregunta 170 · confianza 0.9
Desde el año 2005 existe la ley que obliga a los automovilistas a utilizar el cinturón de seguridad con el objetivo de disminuir traumatismos asociados a accidentes. Con respecto a esta ley, en términos de prevención, corresponde a:
- A) Prevención primaria
- B) Promoción de salud
- C) Prevención secundaria
- D) Prevención tercearia
- E) Control sanitario
**Correcta: A**
Explicación del banco: Diagnóstico: **Prevención primaria** (opción **A**). Previene traumatismos.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [25] EUNACOM Julio 2025 · Pregunta 155 · confianza 0.85
Hombre de 30 años que presenció un accidente de tránsito grave en que su mejor amigo resultó herido de gravedad. Desde entonces, hace 2 semanas, presenta insomnio, tristeza, dificultad de concentración en el trabajo y anhedonia. Sin ideación suicida. ¿Cuál es el diagnóstico más probable?
- A) Trastorno de pánico
- B) Trastorno de ansiedad generalizada
- C) Trastorno adaptativo
- D) Depresión mayor
- E) Trastorno de estrés agudo
**Correcta: C**
Explicación del banco: Trastorno adaptativo: síntomas emocionales/conductuales dentro de los 3 meses de un estresor identificable (accidente del amigo), con deterioro funcional pero sin cumplir criterios de depresión mayor (necesita ≥5 síntomas por ≥2 semanas con humor depresivo o anhedonia). Resolución espontánea esperada.
