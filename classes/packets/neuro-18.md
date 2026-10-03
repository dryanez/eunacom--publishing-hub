# CLASE neuro-18 · Neurologia 10.18: Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad

Escribe `classes/lessons/neuro-18.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-18" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-15: Neurologia 10.15: Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal
- neuro-16: Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo
- neuro-17: Neurologia 10.17: Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento
- neuro-20: Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS
- neuro-21: Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-18",
  "classId": "neuro-18",
  "tier": 3,
  "blockNum": 4,
  "blockName": "Patología Neuromuscular, Desmielinizante y Nervio Periférico",
  "topicLabel": "10.18",
  "title": "Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad",
  "perfilCode": "1.10.1.008",
  "dx": "Sospecha",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES N° 69): Esclerosis Múltiple Remitente Recurrente (EMRR) · Garantiza acceso a diagnóstico confirmatorio por Resonancia Magnética y punción lumbar en ≤ 60 días, tratamiento del brote agudo y terapia modificadora de la enfermedad (FME) de primera y segunda línea. Cobertura complementaria de fármacos biológicos de alta eficacia por Ley Ricarte Soto.",
  "reconstrucciones": "EUNACOM Julio 2019 (Q#104) · EUNACOM Julio 2019 (Q#17)",
  "frecuencia": "Alta rentabilidad · Enfermedad desmielinizante prototípica del SNC en adultos jóvenes",
  "algoTitle": "Algoritmo Diagnóstico y Terapéutico en Esclerosis Múltiple (Criterios McDonald 2017)",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Terapéutico en Esclerosis Múltiple (Criterios McDonald 2017)",
    "svg": "<svg viewBox=\"0 0 620 512\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Síndrome Clínicamente Aislado (SCA / CIS) en Adulto Joven</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Mujer 20-45 años</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Neuritis óptica unilateral dolorosa, mielitis transversa parcial o síndrome de troncoencefálico</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"acc\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">RMN de Encéfalo y Médula Espinal con Contraste (Gadolinio)</text>\n  <text class=\"accS\" x=\"310\" y=\"107\" text-anchor=\"middle\">Lesiones hiperintensas en T2/FLAIR en territorios típicos:</text>\n  <text class=\"accS\" x=\"310\" y=\"118\" text-anchor=\"middle\">periventricular, yuxtacortical/cortical, infratentorial, médula</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Criterios de McDonald 2017: Diseminación en Espacio (DIS) y Tiempo (DIT)</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">¿Cumple DIS (≥ 1 lesión T2 en ≥ 2 de las 4 áreas típicas del SNC)?</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">DIS presente + DIT ausente en RMN</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">DIS y DIT confirmadas en RMN inicial</text>\n  <rect class=\"dec\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Punción Lumbar: Bandas Oligoclonales (BOC)</text>\n  <text class=\"sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">BOC IgG en LCR positivas SUSTITUYEN la DIT</text>\n  <text class=\"sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Confirma diagnóstico de EM en el 1° brote</text>\n  <rect class=\"acc\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Diagnóstico Confirmado de Esclerosis Múltiple</text>\n  <text class=\"accS\" x=\"462\" y=\"258\" text-anchor=\"middle\">Simultaneidad de lesiones que captan y no</text>\n  <text class=\"accS\" x=\"462\" y=\"269\" text-anchor=\"middle\">captan gadolinio o nueva lesión en RMN control</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"dec\" x=\"70\" y=\"303\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Escenario Clínico Inmediato: ¿Brote Agudo Incapacitante vs Terapia de Mantención?</text>\n  <text class=\"sub\" x=\"310\" y=\"330\" text-anchor=\"middle\">Déficit neurológico focal &gt; 24 horas en ausencia de fiebre o infección concurrente</text>\n  <path class=\"ln\" d=\"M310,342 V372 H158 V382\"/>\n  <path class=\"ln\" d=\"M310,372 H462 V382\"/>\n  <text class=\"lbl\" x=\"158\" y=\"367\" text-anchor=\"middle\">Brote Agudo Discapacitante</text>\n  <text class=\"lbl\" x=\"462\" y=\"367\" text-anchor=\"middle\">Terapia Modificadora de Enfermedad (GES 69)</text>\n  <rect class=\"crit\" x=\"12\" y=\"382\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"397\" text-anchor=\"middle\" font-weight=\"700\">Pulsos de Metilprednisolona EV</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"409\" text-anchor=\"middle\">1 g/día EV por 3 a 5 días</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"420\" text-anchor=\"middle\">Si refractario grave: Plasmaféresis terapéutica (5-7 sesiones)</text>\n  <rect class=\"acc\" x=\"316\" y=\"382\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"462\" y=\"397\" text-anchor=\"middle\" font-weight=\"700\">Fármacos Modificadores de la Enfermedad (FME)</text>\n  <text class=\"accS\" x=\"462\" y=\"409\" text-anchor=\"middle\">Plataforma (Fumarato de dimetilo, Teriflunomida)</text>\n  <text class=\"accS\" x=\"462\" y=\"420\" text-anchor=\"middle\">vs Alta Eficacia (Natalizumab, Ocrelizumab)</text>\n  <path class=\"ln\" d=\"M158,432 V442 H310 V454\"/>\n  <path class=\"ln\" d=\"M462,432 V442 H310 V454\"/>\n  <rect class=\"acc\" x=\"100\" y=\"454\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"469\" text-anchor=\"middle\" font-weight=\"700\">Seguimiento Integral y Monitorización de Seguridad</text>\n  <text class=\"accS\" x=\"310\" y=\"481\" text-anchor=\"middle\">Evaluación seriada con escala EDSS</text>\n  <text class=\"accS\" x=\"310\" y=\"492\" text-anchor=\"middle\">Serología virus JC semestral en natalizumab (riesgo LMP) · RMN de control</text>\n</svg>"
  },
  "contexto": "La Esclerosis Múltiple (EM) es una enfermedad autoinmune crónica, inflamatoria y desmielinizante del Sistema Nervioso Central (SNC), caracterizada por daño axonal progresivo, pérdida de oligodendrocitos y gliosis reactiva (placas de desmielinización). Representa la primera causa de discapacidad neurológica no traumática en adultos jóvenes, con clara predilección por mujeres (proporción 3:1) entre los 20 y 45 años. Su curso evolutivo clásico es la forma Remitente-Recurrente (EMRR, 85% de los casos), definida por la aparición recurrente de \"brotes\" neurológicos agudos (neuritis óptica dolorosa unilateral con defecto pupilar aferente relativo, mielitis transversa incompleta, síndrome de tronco con oftalmoplejía internuclear) separados por remisiones clínicas. El diagnóstico se basa en los Criterios de McDonald (revisión 2017), que exigen demostrar Diseminación en Espacio (DIS) y Diseminación en Tiempo (DIT) en la Resonancia Magnética o mediante la presencia de Bandas Oligoclonales IgG en el líquido cefalorraquídeo. El brote agudo se trata con megadosis de Metilprednisolona EV (1 g/día por 3 a 5 días) y la prevención de progresión con terapias modificadoras de la enfermedad garantizadas por el GES N° 69.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Inmunopatogenia y Fenómenos Clínicos Singulares",
      "paragraphs": [
        "La esclerosis múltiple se origina por la pérdida de autotolerancia frente a antígenos de la vaina de mielina del SNC (proteína básica de mielina MBP, glicoproteína de mielina del oligodendrocito MOG, proteína proteolipídica PLP). Linfocitos T CD4+ (subpoblaciones Th1 y Th17) autorreactivos cruzan la barrera hematoencefálica (BHE) mediante moléculas de adhesión endotelial (como la integrina α4β1 o VLA-4). Una vez en el parénquima cerebral, secretan citoquinas proinflamatorias (IFN-γ, TNF-α, IL-17) que activan a la microglía local, reclutan macrófagos e inducen a linfocitos B y células plasmáticas a producir inmunoglobulinas intratecales.",
        "La desmielinización perivenular focal daña selectivamente la mielina y los oligodendrocitos, respetando inicialmente los axones; no obstante, la inflamación crónica desprovista de soporte trófico glial induce <strong>transectomía axonal irreversible</strong>, responsable de la atrofia cerebral progresiva y la discapacidad acumulativa irreversible (evaluada mediante la escala EDSS) (véase Algoritmo 10.18).",
        "<strong>Fenómenos semiológicos cardinales muy preguntados en el examen:</strong>",
        "• <strong>Fenómeno de Uhthoff:</strong> Empeoramiento transitorio y reversible de los síntomas neurológicos previos (como visión borrosa o paresia) desencadenado por el <strong>aumento de la temperatura corporal</strong> (baños calientes, fiebre, ejercicio físico intenso o días de mucho calor). Ocurre porque los axones desmielinizados tienen un factor de seguridad de conducción muy reducido y son exquisitamente sensibles al calor, el cual bloquea transitoriamente los canales de sodio nodales sin implicar un nuevo brote inflamatorio.",
        "• <strong>Signo de Lhermitte:</strong> Sensación brusca de descarga eléctrica u hormigueo que desciende por la espalda hacia los brazos y piernas provocada por la <strong>flexión activa o pasiva del cuello</strong>. Es un signo de hiperexcitabilidad mecanoeléctrica de los axones desmielinizados de los cordones posteriores de la médula espinal cervical.",
        "• <strong>Defecto Pupilar Aferente Relativo (DPAR / Pupila de Marcus Gunn):</strong> Al iluminar el ojo afectado en una neuritis óptica, ambas pupilas paradójicamente se dilatan en lugar de contraerse, debido a la conducción visual aferente enlentecida del nervio óptico dañado."
      ]
    },
    {
      "subhead": "2. Formas Clínicas y Síndromes de Presentación Clásicos",
      "paragraphs": [
        "El debut típico corresponde a un <strong>Síndrome Clínicamente Aislado (SCA o CIS)</strong>, definido como un primer episodio de déficit neurológico monofocal o multifocal de curso agudo o subagudo con duración mayor a 24 horas:",
        "• <strong>Neuritis Óptica Típica:</strong> Pérdida visual monocular subaguda (en horas a días), acompañada de <strong>dolor retroorbitario que se intensifica con los movimientos oculares</strong> (90%), discromatopsia (pérdida de visión de los colores, especialmente rojo) y DPAR. El fondo de ojo es normal en las 2/3 partes de los casos (<em>neuritis óptica retrobulbar</em>: \"ni el paciente ve ni el médico ve nada\") o muestra edema de papila leve en 1/3.",
        "• <strong>Mielitis Transversa Parcial / Incompleta:</strong> Parestesias asimétricas, nivel sensitivo en tronco, signo de Lhermitte, urgencia o incontinencia urinaria y paraparesia espástica.",
        "• <strong>Síndromes de Troncoencefálico y Cerebelo:</strong> <strong>Oftalmoplejía internuclear (OIN)</strong> secundaria a lesión desmielinizante del fascículo longitudinal medial (FLM): en la mirada lateral hacia el lado opuesto, el ojo ipsilateral a la lesión no aduce (paresia del recto interno) y el ojo contralateral presenta nistagmo horizontal abductor. Una OIN bilateral en un adulto joven es virtualmente diagnóstica de esclerosis múltiple.",
        "<strong>Clasificación Evolutiva de la Esclerosis Múltiple (véase Tabla 10.18.2: Formas Clínicas y Escala de Discapacidad EDSS):</strong>",
        "1) <strong>Esclerosis Múltiple Remitente-Recurrente (EMRR):</strong> 85% de los casos al inicio. Cursa con brotes agudos seguidos de remisión completa o con secuelas mínimas estables;",
        "2) <strong>Esclerosis Múltiple Secundaria Progresiva (EMSP):</strong> Evolución natural a los 10-20 años de más del 50% de las EMRR no tratadas; progresión gradual de la discapacidad independiente de los brotes;",
        "3) <strong>Esclerosis Múltiple Primaria Progresiva (EMPP):</strong> 10-15% de los casos. Progresión neurológica continua insidiosa desde el comienzo sin brotes definidos (habitualmente paraparesia espástica progresiva del adulto maduro)."
      ]
    },
    {
      "subhead": "3. Criterios Diagnósticos de McDonald (Revisión 2017) y Neuroimagen",
      "paragraphs": [
        "Los <strong>Criterios de McDonald (revisión 2017)</strong> permiten establecer el diagnóstico de Esclerosis Múltiple demostrando la <strong>Diseminación en Espacio (DIS)</strong> y la <strong>Diseminación en Tiempo (DIT)</strong>, descartando minuciosamente etiologías alternativas (véase Tabla 10.18.1: Criterios de McDonald y Hallazgos en RMN):",
        "• <strong>Diseminación en Espacio (DIS):</strong> Se cumple con la presencia de al menos <strong>1 lesión hiperintensa en T2 en ≥ 2 de las 4 localizaciones típicas del SNC</strong>:",
        "  1. <strong>Periventriculares:</strong> Lesiones ovoideas perpendiculares a los ventrículos laterales siguiendo las venas medulares profundas (conocidas clásicamente como <em>Dedos de Dawson</em>);",
        "  2. <strong>Corticales o Yuxtacorticales:</strong> En contacto estrecho con la corteza cerebral o afectando fibras en U;",
        "  3. <strong>Infratentoriales:</strong> En protuberancia, pedúnculos cerebelosos o bulbo;",
        "  4. <strong>Médula Espinal:</strong> Lesiones periféricas, posteriores/laterales, que ocupan menos de 2 segmentos vertebrales de longitud.",
        "• <strong>Diseminación en Tiempo (DIT):</strong> Se cumple demostrando cualquiera de las siguientes opciones:",
        "  1. Presencia simultánea de <strong>lesiones asintomáticas que captan gadolinio (activas/agudas) y lesiones que no captan gadolinio (crónicas)</strong> en cualquier RMN basal;",
        "  2. Aparición de una <strong>nueva lesión T2 o captante de gadolinio en una RMN de seguimiento</strong> comparada con una previa;",
        "  3. <strong>¡REVOLUCIÓN DE LOS CRITERIOS McDONALD 2017!:</strong> La presencia de <strong>Bandas Oligoclonales (BOC) IgG en el líquido cefalorraquídeo SUSTITUYE al criterio de Diseminación en Tiempo</strong>. Si un paciente presenta un primer brote típico (CIS) y cumple criterios de DIS en la RMN, la demostración de BOC positivas en LCR confirma de inmediato el diagnóstico de Esclerosis Múltiple sin necesidad de esperar un segundo brote ni una segunda resonancia."
      ]
    },
    {
      "subhead": "4. Estudio de Líquido Cefalorraquídeo y Diagnósticos Diferenciales",
      "paragraphs": [
        "El análisis del LCR obtenido por punción lumbar es fundamental para el diagnóstico y exclusión de patologías imitadoras:",
        "• <strong>Bandas Oligoclonales (BOC):</strong> Se determinan mediante <strong>isoelectroenfoque e inmunofijación de IgG comparando simultáneamente suero y LCR</strong>. El patrón típico es el <strong>Patrón Tipo 2</strong>: presencia de dos o más bandas oligoclonales de IgG en el LCR que están completamente ausentes en el suero materno/sanguíneo, reflejando <strong>síntesis intratecal autónoma de anticuerpos</strong>. Es positivo en más del 85-95% de los pacientes con EM confirmada. El índice de IgG (cociente IgG LCR/albúmina LCR dividido por IgG suero/albúmina suero) suele estar elevado (> 0.7).",
        "• <strong>Diagnósticos Diferenciales Mandatorios:</strong>",
        "  - <strong>Trastorno del Espectro de Neuromielitis Óptica (NMOSD):</strong> Caracterizado por neuritis óptica bilateral severa y <strong>mielitis transversa longitudinalmente extensa (LETM)</strong> que compromete 3 o más cuerpos vertebrales contiguos. Se asocia a <strong>anticuerpos anti-Aquaporina 4 (anti-AQP4 / NMO-IgG)</strong> dirigidos contra astrocitos. <em>Advertencia EUNACOM:</em> Terapias de EM como Interferón-beta, Natalizumab y Fingolimod agravan catastróficamente la NMOSD.",
        "  - <strong>Enfermedad asociada a anticuerpos anti-MOG (MOGAD):</strong> Lesiones inflamatorias con predilección por cono medular y neuritis bilateral con edema de papila prominente; responden muy bien a corticoides.",
        "  - <strong>Otras patologías:</strong> Déficit de vitamina B12 (degeneración combinada subaguda), neurosífilis, infección por VIH, vasculitis sistémicas (Lupus, Behçet) y neurosarcoidosis."
      ]
    },
    {
      "subhead": "5. Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad (GES N° 69)",
      "paragraphs": [
        "El abordaje terapéutico de la Esclerosis Múltiple se divide estrictamente en el manejo del brote agudo y la prevención de recaídas a largo plazo (véase Tabla 10.18.3: Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad GES 69):",
        "• <strong>Tratamiento del Brote Agudo:</strong> Un brote se define como un déficit neurológico nuevo o agravado que dura &gt; 24 horas sin fiebre ni infección. El pilar es <strong>Metilprednisolona Endovenosa 1 g (1000 mg) al día diluido en suero fisiológico en infusión continua de 2 horas, administrado durante 3 a 5 días consecutivos</strong>. No requiere reducción gradual oral de corticoides. Si el brote es grave, incapacitante y no responde adecuadamente a los esteroides a las 2 semanas, el tratamiento de rescate de segunda línea es la <strong>Plasmaféresis terapéutica (5 a 7 sesiones en días alternos)</strong>.",
        "• <strong>Terapias Modificadoras de la Enfermedad (TME / FME - Garantía GES N° 69):</strong> Reducen la tasa anualizada de brotes (ARR) y la acumulación de lesiones en la RMN:",
        "  - <strong>Fármacos de Primera Línea / Moderada Eficacia:</strong> <strong>Fumarato de Dimetilo</strong> (oral 240 mg c/12 h; activa la vía antioxidante Nrf2; causa rubefacción y linfopenia), <strong>Teriflunomida</strong> (oral 14 mg/día; inhibe pirimidinas; teratogénico y hepatotóxico), <strong>Interferón beta-1a y 1b</strong> (inyecciones SC/IM; producen síndrome pseudogripal y depresión), y <strong>Acetato de Glatiramero</strong> (seguro durante el embarazo).",
        "  - <strong>Fármacos de Alta Eficacia / Segunda Línea (GES 69 / Ley Ricarte Soto):</strong>",
        "    * <strong>Natalizumab:</strong> Anticuerpo monoclonal recombinante humanizado dirigido contra la <strong>integrina α4 (VLA-4)</strong>. Bloquea el anclaje y la diapédesis de linfocitos activados a través del endotelio de la BHE hacia el parénquima cerebral. Eficacia clínica monumental (reduce brotes en > 68%). <em>Riesgo Crítico Muy Preguntado:</em> Reactivación del <strong>Virus JC</strong> en el cerebro causando <strong>Leucoencefalopatía Multifocal Progresiva (LMP)</strong>, una infección desmielinizante letal de oligodendrocitos. Exige monitorización semestral estricta de anticuerpos séricos anti-virus JC.",
        "    * <strong>Ocrelizumab / Ofatumumab:</strong> Anticuerpos monoclonales anti-CD20 que degranulan selectivamente linfocitos B circulantes. Ocrelizumab es la <strong>primera y única terapia modificadora con eficacia probada en frenar la progresión en la Esclerosis Múltiple Primaria Progresiva (EMPP)</strong>, además de su alta efectividad en EMRR.",
        "    * <strong>Fingolimod:</strong> Modulador de receptores de esfingosina-1-fosfato (S1P) que secuestra linfocitos vírgenes dentro de los ganglios linfáticos; requiere monitorización electrocardiográfica en primera dosis por riesgo de bradicardia transitoria y fondo de ojo para vigilar edema macular."
      ]
    }
  ],
  "table": {
    "title": "Criterios Diagnósticos de McDonald (Revisión 2017) y Hallazgos en Resonancia Magnética",
    "headers": [
      "Criterio / Territorio",
      "Definición Radiológica / Biomarcador",
      "Regiones Cardinales del SNC",
      "Implicancia Clínica en EUNACOM"
    ],
    "rows": [
      [
        "Diseminación en Espacio (DIS)",
        "Presencia de ≥ 1 lesión hiperintensa en T2 en ≥ 2 de las 4 localizaciones típicas del SNC",
        "1) Periventricular (Dedos de Dawson), 2) Cortical / Yuxtacortical, 3) Infratentorial (tronco/cerebelo), 4) Médula espinal",
        "Demuestra que el proceso inflamatorio desmielinizante afecta múltiples áreas no contiguas del neuroeje"
      ],
      [
        "Diseminación en Tiempo (DIT - RMN)",
        "Coexistencia de lesiones captantes y no captantes de gadolinio en RMN basal, o nueva lesión T2/Gd+ en control",
        "Cualquier territorio típico cerebral o médula espinal",
        "Evidencia que la actividad patológica se genera en momentos cronológicos temporalmente separados"
      ],
      [
        "Bandas Oligoclonales (BOC en LCR)",
        "Presencia de ≥ 2 bandas oligoclonales de IgG en LCR ausentes en suero (Patrón Tipo 2 de isoelectroenfoque)",
        "Síntesis intratecal de inmunoglobulinas por clones de células plasmáticas en el SNC",
        "APORTE CLAVE McDONALD 2017: En un paciente con un primer brote (CIS) y DIS en RMN, las BOC positivas SUSTITUYEN la DIT"
      ],
      [
        "Lesiones Periventriculares",
        "Lesiones ovoideas con eje mayor perpendicular a los ventrículos laterales (Dedos de Dawson)",
        "Cuerpo calloso, sustancia blanca periventricular y comisuras",
        "Reflejan inflamación venulocéntrica profunda; altamente sugestivas de esclerosis múltiple"
      ],
      [
        "Lesiones Medulares Típicas",
        "Lesiones asimétricas, periféricas (posterolaterales), de menos de 2 cuerpos vertebrales de extensión",
        "Médula cervical (frecuente) o torácica",
        "Permiten diferenciar de Neuromielitis Óptica (NMOSD), cuyas lesiones son centrales y continuas ≥ 3 vértebras (LETM)"
      ]
    ]
  },
  "severityTable": {
    "title": "Formas Clínicas Evolutivas y Escala Expandida del Estado de Discapacidad (EDSS)",
    "headers": [
      "Subtipo / Nivel EDSS",
      "Definición y Proporción Epidemiológica",
      "Curso Clínico y Hallazgos Típicos",
      "Pronóstico y Enfoque de Manejo"
    ],
    "rows": [
      [
        "EM Remitente-Recurrente (EMRR)",
        "85% de los debuts; predominio femenino 3:1 entre 20 y 45 años",
        "Brotes agudos con déficit focal claro seguidos de remisión completa o con secuelas estables; sin progresión entre brotes",
        "Respuesta excelente a corticoides y a Fármacos Modificadores de la Enfermedad (FME) bajo GES N° 69"
      ],
      [
        "EM Secundaria Progresiva (EMSP)",
        "Fase tardía de la EMRR (50% de las EMRR no tratadas tras 10-20 años)",
        "Deterioro funcional continuo insidioso con aumento paulatino de discapacidad, independiente de la ocurrencia de brotes",
        "Refleja atrofia cerebral y daño neurodegenerativo axonal irreversible; menor respuesta a inmunoterapias antiinflamatorias"
      ],
      [
        "EM Primaria Progresiva (EMPP)",
        "10-15% de los casos; relación mujer:hombre 1:1, inicio más tardío (~40-50 años)",
        "Progresión motora continua desde el debut sin brotes ni remisiones clínicas definidas; frecuente paraparesia espástica",
        "Ocrelizumab (anti-CD20) es la única terapia aprobada con beneficio comprobado para enlentecer la discapacidad"
      ],
      [
        "EDSS 0 – 4.5 puntos",
        "Discapacidad leve a moderada",
        "Examen neurológico alterado pero marcha totalmente autónoma e independiente sin asistencia ni descanso ≥ 500 m",
        "Objetivo terapéutico: NEDA (No Evidence of Disease Activity: sin brotes, sin progresión EDSS y sin nuevas lesiones RMN)"
      ],
      [
        "EDSS 6.0 puntos",
        "Hito clínico mayor de discapacidad de la marcha",
        "Requiere ayuda unilateral intermitente o constante (bastón, muleta) para caminar una distancia de 100 metros",
        "Pérdida de independencia comunitaria plena; alto impacto socioeconómico y laboral"
      ],
      [
        "EDSS 6.5 puntos",
        "Discapacidad severa bilateral",
        "Requiere ayuda bilateral constante (dos bastones, andador) para caminar 20 metros sin descansar",
        "Candidato a rehabilitación motora intensiva y terapias biológicas de rescate"
      ],
      [
        "EDSS 7.0 – 8.0 puntos",
        "Confinamiento a silla de ruedas o cama",
        "Incapaz de caminar más de 5 metros; 7.0 se moviliza en silla de ruedas; 8.0 confinado a cama con movilidad de brazos",
        "Riesgo de úlceras por presión, infecciones urinarias a repetición y trombosis venosa profunda"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad GES 69",
    "headers": [
      "Categoría / Fármaco",
      "Mecanismo de Acción Principal",
      "Pauta Posológica y Administración",
      "Efectos Adversos y Alertas EUNACOM"
    ],
    "rows": [
      [
        "Metilprednisolona EV (Brote)",
        "Potente inmunosupresor y antiinflamatorio; sella la barrera hematoencefálica",
        "1 g (1000 mg)/día EV diluido en SF en infusión de 2 h por 3 a 5 días consecutivos",
        "Insomnio, sabor metálico, hiperglicemia, gastritis aguda (asociar Omeprazol); no requiere descenso oral"
      ],
      [
        "Plasmaféresis de Rescate",
        "Remoción física de inmunoglobulinas, complemento y citoquinas circulantes",
        "5 a 7 recambios plasmáticos en días alternos",
        "Indicada en brotes graves discapacitantes (hemiparesia severa, ceguera por NO) refractarios a esteroides"
      ],
      [
        "Fumarato de Dimetilo (1ª línea)",
        "Activación de vía antioxidante Nrf2 y modulación de citoquinas hacia perfil Th2",
        "240 mg vía oral cada 12 horas (cápsulas con recubrimiento entérico)",
        "Flushing (rubefacción facial), diarrea y náuseas; requiere hemograma por riesgo de linfopenia sostenida"
      ],
      [
        "Teriflunomida (1ª línea)",
        "Inhibición de enzima dihidroorotato deshidrogenasa (DHODH); frena proliferación T y B",
        "14 mg vía oral una vez al día",
        "Hepatotoxicidad (controlar transaminasas); ALTA TERATOGENICIDAD: lavado con colestiramina si embarazo"
      ],
      [
        "Natalizumab (Alta eficacia)",
        "Anticuerpo monoclonal anti-integrina α4 (VLA-4); bloquea migración leucocitaria al SNC",
        "300 mg en infusión endovenosa cada 4 semanas",
        "¡RIESGO MAYOR!: Leucoencefalopatía Multifocal Progresiva (LMP) por reactivación de Virus JC; titular anti-JCV"
      ],
      [
        "Ocrelizumab (Alta eficacia)",
        "Anticuerpo monoclonal anti-CD20; induce citólisis y degranulación de linfocitos B",
        "600 mg EV cada 6 meses (dosis inicial: dos infusiones de 300 mg separadas por 14 días)",
        "Aprobado para EMRR y EMPP; reacciones a la infusión, infecciones del tracto respiratorio, reactivación de Hepatitis B"
      ],
      [
        "Fingolimod (Alta eficacia)",
        "Modulador de receptor S1P; secuestra linfocitos vírgenes dentro de ganglios linfáticos",
        "0.5 mg vía oral una vez al día",
        "Bradicardia y bloqueo AV en primera dosis (monitoreo ECG 6 h); edema macular (fondo de ojo pre y post)"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 26 años, profesora de educación básica, consulta en el servicio de urgencia por disminución progresiva de la agudeza visual del ojo derecho de 3 días de evolución, que se acompaña de dolor sordo y punzante retroorbitario que empeora francamente al mover los ojos. Además refiere que los colores (en particular los tonos rojos) se ven pálidos y deslavados. No refiere antecedentes mórbidos, salvo un episodio de parestesias transitorias en la pierna izquierda hace un año que duró dos semanas y resolvió espontáneamente. Al examen físico: agudeza visual ojo derecho 20/100, ojo izquierdo 20/20. El examen pupilar revela que al iluminar el ojo derecho ambas pupilas se dilatan paradójicamente (Defecto Pupilar Aferente Relativo / Pupila de Marcus Gunn derecha). El fondo de ojo no muestra edema de papila. La Resonancia Magnética de encéfalo con gadolinio revela múltiples lesiones hiperintensas en T2/FLAIR ovoideas perpendiculares a los ventrículos laterales (Dedos de Dawson) y una lesión yuxtacortical frontal izquierda; dos de las lesiones periventriculares captan intensamente gadolinio. La punción lumbar evidencia 3 células mononucleares/μL y el isoelectroenfoque detecta 4 bandas oligoclonales IgG presentes exclusivamente en el LCR.",
    "conducta": "El cuadro de pérdida visual dolorosa monocular con discromatopsia y defecto pupilar aferente relativo en una mujer joven es el prototipo de Neuritis Óptica Retrobulbar (Síndrome Clínicamente Aislado). La neuroimagen demuestra Diseminación en Espacio (DIS, con lesiones periventriculares y yuxtacorticales) y simultáneamente Diseminación en Tiempo (DIT, por la presencia concomitante de lesiones captantes de gadolinio activas y no captantes crónicas, reforzada de manera incontrovertible por las Bandas Oligoclonales IgG positivas en LCR según los Criterios de McDonald 2017). Se confirma el diagnóstico de Esclerosis Múltiple Remitente-Recurrente (Garantía GES N° 69). La conducta terapéutica inmediata para el brote agudo es administrar pulsos de Metilprednisolona endovenosa (1 g/día por 3 a 5 días) bajo protección gástrica con omeprazol, derivando de urgencia a neurología para enrolamiento GES e inicio precoz de terapia modificadora de la enfermedad."
  },
  "explicacion": "El cuadro de pérdida visual dolorosa monocular con discromatopsia y defecto pupilar aferente relativo en una mujer joven es el prototipo de Neuritis Óptica Retrobulbar (Síndrome Clínicamente Aislado). La neuroimagen demuestra Diseminación en Espacio (DIS, con lesiones periventriculares y yuxtacorticales) y simultáneamente Diseminación en Tiempo (DIT, por la presencia concomitante de lesiones captantes de gadolinio activas y no captantes crónicas, reforzada de manera incontrovertible por las Bandas Oligoclonales IgG positivas en LCR según los Criterios de McDonald 2017). Se confirma el diagnóstico de Esclerosis Múltiple Remitente-Recurrente (Garantía GES N° 69). La conducta terapéutica inmediata para el brote agudo es administrar pulsos de Metilprednisolona endovenosa (1 g/día por 3 a 5 días) bajo protección gástrica con omeprazol, derivando de urgencia a neurología para enrolamiento GES e inicio precoz de terapia modificadora de la enfermedad.",
  "keyPoints": [
    "La Esclerosis Múltiple es una afección autoinmune crónica desmielinizante del SNC típica de mujeres de 20-45 años; la forma Remitente-Recurrente (EMRR) representa el 85% de los debuts.",
    "Presentaciones clínicas clásicas: neuritis óptica monocular dolorosa con Marcus Gunn (DPAR), mielitis transversa parcial y oftalmoplejía internuclear bilateral (lesión del FLM).",
    "El fenómeno de Uhthoff (empeoramiento transitorio de síntomas con el calor/fiebre) y el signo de Lhermitte (descarga eléctrica al flectar el cuello) son sellos semiológicos cardinales.",
    "Criterios de McDonald (2017): exigen Diseminación en Espacio (DIS en ≥ 2 de 4 territorios: periventricular, yuxtacortical, infratentorial, médula) y Diseminación en Tiempo (DIT).",
    "Las Bandas Oligoclonales IgG en LCR (patrón 2) reflejan síntesis intratecal autónoma de anticuerpos y según McDonald 2017 SUSTITUYEN el criterio de DIT ante un primer brote con DIS.",
    "El tratamiento del brote agudo consiste en Metilprednisolona EV 1 g/día por 3 a 5 días; la mantención se efectúa con FME (GES 69): dimetilfumarato, natalizumab (riesgo LMP por virus JC) u ocrelizumab."
  ],
  "questions": [
    {
      "stem": "La esclerosis múltiple puede presentar todos los síntomas siguientes,\nEXCEPTO:",
      "options": [
        {
          "id": "A",
          "text": "Hemiparesia"
        },
        {
          "id": "B",
          "text": "Ataxia"
        },
        {
          "id": "C",
          "text": "Hemihipoestesia"
        },
        {
          "id": "D",
          "text": "Incontinencia urinaria"
        },
        {
          "id": "E",
          "text": "Afasia de comprensión"
        }
      ],
      "correcta": "E",
      "explicacion": "La esclerosis múltiple (EM) es una enfermedad crónica inflamatoria y desmielinizante del sistema nervioso central (SNC), caracterizada por la aparición de lesiones (placas) en el cerebro, la médula espinal y los nervios ópticos, diseminadas en el tiempo y en el espacio. La naturaleza y localización de estas lesiones determinan la amplia variedad de síntomas neurológicos que pueden presentarse. Entre los síntomas más comunes se encuentran las alteraciones motoras (paresias, espasticidad), sensitivas (parestesias, hipoestesia), visuales (neuritis óptica, diplopía), cerebelosas (ataxia, disartria), disfunción vesical e intestinal, fatiga y alteraciones cognitivas.\n\nSin embargo, la afasia de comprensión, un trastorno del lenguaje caracterizado por la incapacidad de entender el lenguaje hablado o escrito (como la afasia de Wernicke), es un síntoma extremadamente raro como manifestación inicial o principal de la esclerosis múltiple. Si bien la EM puede causar disfunción cognitiva, que incluye dificultades en la velocidad de procesamiento, memoria y funciones ejecutivas, estas generalmente no se manifiestan como una afasia clásica y severa. Los síndromes afásicos suelen ser el resultado de lesiones focales extensas en áreas corticales específicas del hemisferio dominante (como el lóbulo temporal o frontal perisilviano), las cuales no son los sitios de predilección más comunes para las lesiones desmielinizantes iniciales de la EM.\n\nAunque teóricamente una lesión tumefactiva o una placa extensa en una región elocuente del lenguaje podría causar afasia, esto es atípico en el espectro de la EM y se consideraría una presentación inusual. Por lo tanto, mientras que la EM puede afectar casi cualquier función neurológica, las afasias corticales severas, especialmente de comprensión, son las menos esperadas entre las opciones presentadas.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.008"
    },
    {
      "stem": "Paciente de 65 años sin antecedentes mórbidos. Hace 4 meses con conducta\nmás apática y fallas reiteradas en la memoria. Los familiares se muestran muy\npreocupados y refieren que además ha presentado caídas en múltiples\nocasiones y también incontinencia urinaria. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Enfermedad de Alzheimer inicial"
        },
        {
          "id": "B",
          "text": "AVE a repetición"
        },
        {
          "id": "C",
          "text": "Demencia por cuerpos de Lewy"
        },
        {
          "id": "D",
          "text": "Demencia frontotemporal"
        },
        {
          "id": "E",
          "text": "Hidrocefalia normotensiva"
        }
      ],
      "correcta": "E",
      "explicacion": "La alternativa correcta es la **E (Hidrocefalia normotensiva)**. Este diagnóstico se basa en la tríada clásica de Hakim-Adams:\n\n*   **Deterioro cognitivo:** El paciente presenta \"conducta más apática y fallas reiteradas en la memoria\".\n*   **Alteración de la marcha:** Se manifiesta como \"caídas en múltiples ocasiones\".\n*   **Incontinencia urinaria:** Tal como se describe en el caso.\n\nSi bien cada uno de estos síntomas puede ser causado por otras condiciones, la presencia de los tres juntos en un paciente de edad avanzada debe levantar la sospecha de hidrocefalia normotensiva. Es importante destacar que la presión del LCR puede estar dentro de rangos normales en la medición lumbar, de ahí el término \"normotensiva\". La fisiopatología no está completamente elucidada, pero se cree que hay una alteración en la absorción del LCR a nivel de las vellosidades aracnoideas.\n\nNo existe una guía clínica MINSAL específica para Hidrocefalia Normotensiva, pero el manejo de la incontinencia urinaria (síntoma asociado) se puede encontrar en las guías de atención primaria.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.008"
    },
    {
      "stem": "Enfermo de 76 años que acude a la consulta por pérdida de fuerza,\nfundamentalmente proximal, en miembros superiores. La exploración\nneurológica evidencia pérdida de fuerza, atrofia y fasciculaciones en varios\ngrupos musculares de miembros superiores, así como discreta pérdida de\nfuerza en los músculos tibiales anteriores. Los reflejos osteotendinosos son\nvivos y simétricos y la sensibilidad es normal. El estudio electrofisiológico\ndemuestra signos de denervación en múltiples músculos con conducción\nnerviosa sensitiva normal. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Esclerosis lateral amiotrófica.salud­publica/ 1/7"
        },
        {
          "id": "B",
          "text": "Síndrome miasténico tipo Eaton-Lambert."
        },
        {
          "id": "C",
          "text": "Miopatía tirotóxica con fasciculaciones."
        },
        {
          "id": "D",
          "text": "Espondilosis cervical."
        },
        {
          "id": "E",
          "text": "Atrofia muscular espinal de comienzo tardío."
        }
      ],
      "correcta": "A",
      "explicacion": "La respuesta correcta es la Esclerosis Lateral Amiotrófica (ELA). Este diagnóstico se fundamenta en la combinación de hallazgos clínicos y electrofisiológicos que son altamente característicos de la enfermedad. El paciente presenta debilidad progresiva, atrofia y fasciculaciones en múltiples grupos musculares (miembros superiores y tibiales anteriores), lo que son signos claros de afectación de la segunda motoneurona (neurona motora inferior). La electrofisiología confirma esta denervación, con conducción nerviosa sensitiva normal, lo que excluye una neuropatía sensitiva o mixta y mantiene el foco en el sistema motor.\n\nEl hallazgo más crucial que direcciona hacia ELA es la presencia de reflejos osteotendinosos \"vivos y simétricos\" a pesar de la debilidad, atrofia y fasciculaciones. La hiperreflexia (reflejos vivos) en el contexto de signos de segunda motoneurona (debilidad, atrofia, fasciculaciones) es la manifestación clásica de la coexistencia de afectación de primera motoneurona (neurona motora superior) y segunda motoneurona. La ELA es la enfermedad neurodegenerativa que se caracteriza precisamente por la degeneración progresiva de ambas motoneuronas, tanto las de la corteza cerebral como las del tronco encefálico y la médula espinal, mientras respeta la sensibilidad.\n\nLa edad del paciente (76 años) también es compatible con la edad de inicio más común de la ELA. La distribución de la debilidad (proximal en miembros superiores, con afectación discreta en tibiales anteriores) es consistente con una enfermedad sistémica de la motoneurona. Todos estos elementos en conjunto forman un cuadro clínico patognomónico de la Esclerosis Lateral Amiotrófica.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.008"
    },
    {
      "stem": "¿Cuál de las siguientes alteraciones es MENOS probable de encontrar en un\npaciente con esclerosis lateral amiotrófica?",
      "options": [
        {
          "id": "A",
          "text": "Fasciculaciones"
        },
        {
          "id": "B",
          "text": "Atrofia muscular"
        },
        {
          "id": "C",
          "text": "Hiperreflexia"
        },
        {
          "id": "D",
          "text": "Hipoestesia"
        },
        {
          "id": "E",
          "text": "Disfagia"
        }
      ],
      "correcta": "D",
      "explicacion": "La esclerosis lateral amiotrófica (ELA) es una enfermedad neurodegenerativa progresiva que afecta selectivamente a las motoneuronas superiores (UMN) en la corteza cerebral y a las motoneuronas inferiores (LMN) en el tronco encefálico y la médula espinal. Esta degeneración conduce a una debilidad muscular progresiva, atrofia y parálisis. Es fundamental comprender que la ELA es primariamente una enfermedad *motora*, lo que significa que su patología principal se centra en las vías motoras.\n\nEn contraste, las vías sensoriales (responsables de la percepción del tacto, dolor, temperatura, vibración y propiocepción) se encuentran generalmente preservadas en la ELA. Aunque algunos pacientes pueden referir parestesias o calambres, la presencia de déficits sensoriales objetivos y significativos, como la hipoestesia (disminución de la sensibilidad), no es una característica típica de la enfermedad y, de hecho, su presencia prominente puede sugerir un diagnóstico alternativo o una enfermedad coexistente. Por lo tanto, la hipoestesia es la alteración *menos probable* de encontrar de manera significativa en un paciente con ELA.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.008"
    }
  ],
  "vignetteText": "Mujer de 26 años, profesora de educación básica, consulta en el servicio de urgencia por disminución progresiva de la agudeza visual del ojo derecho de 3 días de evolución, que se acompaña de dolor sordo y punzante retroorbitario que empeora francamente al mover los ojos. Además refiere que los colores (en particular los tonos rojos) se ven pálidos y deslavados. No refiere antecedentes mórbidos, salvo un episodio de parestesias transitorias en la pierna izquierda hace un año que duró dos semanas y resolvió espontáneamente. Al examen físico: agudeza visual ojo derecho 20/100, ojo izquierdo 20/20. El examen pupilar revela que al iluminar el ojo derecho ambas pupilas se dilatan paradójicamente (Defecto Pupilar Aferente Relativo / Pupila de Marcus Gunn derecha). El fondo de ojo no muestra edema de papila. La Resonancia Magnética de encéfalo con gadolinio revela múltiples lesiones hiperintensas en T2/FLAIR ovoideas perpendiculares a los ventrículos laterales (Dedos de Dawson) y una lesión yuxtacortical frontal izquierda; dos de las lesiones periventriculares captan intensamente gadolinio. La punción lumbar evidencia 3 células mononucleares/μL y el isoelectroenfoque detecta 4 bandas oligoclonales IgG presentes exclusivamente en el LCR."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "esclerosis, multiple, criterios, mcdonald, oligoclonales")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2019 · Pregunta 104 · confianza 0.9
Una paciente de 30 años presenta un cuadro de un mes de evolución de neuralgia de la primera rama del trigémino. Hace una semana se agrega disminución de la sensibilidad del muslo derecho, con dificultades para caminar. Como antecedente, refiere que hace un año tuvo un trastorno del equilibrio, que resolvió espontáneamente. El diagnóstico más probable es:
- A) Polineuropatía por déficit de vitamina B12
- B) Síndrome de Guillain Barré de presentación atípica
- C) Infarto talámico
- D) Esclerosis múltiple
- E) Neurinoma con compresión del troncoencéfalo
**Correcta: D**
Explicación del banco: Es una pregunta difícil, pero el cuadro solo es compatible con una esclerosis múltiple ya que ha tenido múltiples signos focales, de inicio subagudo, que pueden recuperarse (como el trastorno del equilibrio). Revisar el resumen de semiología neurológica.

### [2] EUNACOM Julio 2019 · Pregunta 17 · confianza 0.5
Una paciente de 14 años presenta disminución de la visión del izquierdo, de dos días de evolución. Su agudeza visual es 20/200 en el ojo izquierdo y 20/20 en el derecho. Tiene antecedente de hemiparesia braquial. Al fondo de ojo se observa papilitis izquierda. Su resonancia magnética nuclear muestra lesiones desmielinizantes cerebrales. El diagnóstico más probable es:
- A) Desprendimiento de retina
- B) Neuritis óptica
- C) Neuropatía óptica isquémica
- D) Degeneración macular
- E) Hipertensión endocraneana
**Correcta: B**
Explicación del banco: Es una neuritis óptica clásica, en contexto de una esclerosis múltiple. El edema de papila bilateral es clásico de la HTEC, pero la NO también tiene edema de papila, ya que ahí es donde nace el nervio óptico.

### [3] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [4] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [5] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [6] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [7] EUNACOM Julio 2013 · Pregunta 137 · confianza 0.96
Un paciente de 26 años, estudiante universitario con regular rendimiento, es traído por sus padres porque desde hace tres meses no ha asistido a clases, ya que prefiere quedarse en su habitación. Ellos refieren que siempre fue solitario y que no buscaba tener amistades. Al entrevistarlo de forma dirigida se ríe sin motivo y refiere que no quiere salir de su habitación porque la voz del diablo lo amenaza. El diagnóstico más probable es:
- A) Trastorno delirante crónico
- B) Trastorno de la personalidad esquizoide
- C) Delirium
- D) Esquizofrenia hebefrénica
- E) Trastorno Bipolar
**Correcta: D**
Explicación del banco: Diagnóstico: **Esquizofrenia hebefrénica** (opción **D**). La risa sin motivo orienta a Hebefrenia. El cuadro clínico es sugerente de EQZ.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [8] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [9] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [10] EUNACOM Enero 2023 · Pregunta 41 · confianza 0.95
Embarazada con antecedente de cesárea previa, durante el parto presenta cese de contracciones, sangrado y bradicardia fetal. ¿Diagnóstico más probable?
- A) Desprendimiento prematuro de placenta
- B) Placenta previa sangrante
- C) Prolapso de cordón umbilical
- D) Embolia de líquido amniótico
- E) Rotura uterina
**Correcta: E**
Explicación del banco: Diagnóstico: **Rotura uterina** (opción **E**). Rotura uterina. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [11] EUNACOM Enero 2023 · Pregunta 62 · confianza 0.95
Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas. ¿Diagnóstico más probable?
- A) Apendicitis aguda complicada
- B) Quiste ovárico torcido
- C) Embarazo ectópico roto
- D) Salpingitis aguda con absceso tubo-ovárico
- E) Rotura folicular hemorrágica
**Correcta: C**
Explicación del banco: Diagnóstico: **Embarazo ectópico roto** (opción **C**). Embarazo ectópico roto. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [12] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [13] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [14] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [15] EUNACOM Agosto 2021 · Pregunta 96 · confianza 0.95
Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular, hipolacrimia y xerostomía. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, ENA (-), AntiDNA 2h (-) y anticuerpos anti- CCP mayores a 200 UI/ml. La radiografía de manos muestra edema de partes blandas y osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es:
- A) Lupus eritematoso sistémico
- B) Artritis reumatoide
- C) Artritis psoriática
- D) Esclerosis sistémica
- E) Síndrome de Sjörgren primario
**Correcta: B**
Explicación del banco: Diagnóstico: **Artritis reumatoide** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [16] EUNACOM Diciembre 2019 · Pregunta 59 · confianza 0.95
Una mujer de 18 años sufrió un rapto al salir de la oficina, por dos desconocidos. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente, sin lesiones físicas. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de lo sucedido, recordando solo cuando fue abordada por los desconocidos y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [17] EUNACOM Diciembre 2019 · Pregunta 68 · confianza 0.95
Un hombre de 42 años presenta dolor en el hombro derecho, de dos semanas de evolución, que inició en relación a un partido de tenis y que limita sus actividades, en especial, los movimientos de abducción y elevación. Al examen físico tiene dolor a la palpación subacromial, con dolor a la abducción y elevación del hombro, que dificulta estos movimientos, por sobre 80°. Se solicitan radiografías de hombro, que muestran esclerosis del acromion y leve ascenso de la cabeza humeral. El diagnóstico más probable es:
- A) Tendinitis cálcica
- B) Pinzamiento subacromial
- C) Rotura completa del tendón del supraespinoso
- D) Capsulitis adhesiva
- E) Tendinitis bicipital
**Correcta: C**
Explicación del banco: Pregunta muy rara, ya que parece un síndrome de manguito rotador. Sin embargo, el ascenso de la cabeza humeral orienta a la rotura del tendón supraespinoso. La tendinitis cálcica tendría calcificación del tendón del bíceps, lo que se vería. La capsulitis adhesiva limitaría totalmente los movimientos.

### [18] EUNACOM Julio 2019 · Pregunta 168 · confianza 0.95
Una niña de 15 años presenta disconformidad con su cuerpo, por lo que lo oculta, utilizando ropa 2 o 3 tallas más grandes. Además, tiene retraimiento social y gran preocupación por las calorías que ingiere. Los padres refieren que anda con náuseas en el último tiempo, por lo que come poco y ha bajado de peso. Sin embargo ella se había negado a acudir al médico. El diagnóstico más probable es:
- A) Trastorno distímico
- B) Trastorno alimentario mixto
- C) Anorexia nervosa
- D) Trastorno depresivo mayor
- E) Bulimia nervosa
**Correcta: C**
Explicación del banco: Es una forma clásica de presentación de la anorexia, aunque no muestren todos los criterios (bajo peso, preocupación por el peso, alteración de la percepción corporal y amenorrea). Es frecuente que la paciente lo oculte, mienta o manipule a la familia, para que no la obliguen a subir de peso.

### [19] EUNACOM Diciembre 2019 · Pregunta 72 · confianza 0.95
Un lactante de 5 meses presenta un cuadro de tos y coriza, asociada a fiebre hasta 38,5°C. Al día siguiente evoluciona con dificultad respiratoria, taquipnea, retracción subcostal y subcostal. Al examen físico tiene FR: 70x’, uso de musculatura accesoria, sibilancias inspiratorias y espiratorias difusas e intensas, más cianosis perioral. ¿Cuál es el agente etiológico más probable?
- A) Virus respiratorio sincicial
- B) Bordetella pertusis
- C) Virus influenza
- D) Virus parainfluenza
- E) Neumococo
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Virus respiratorio sincicial). Es una bronquiolitis clásica, por VRS.. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh.

### [20] EUNACOM Julio 2019 · Pregunta 126 · confianza 0.95
Una paciente de 43 años presenta sequedad bucal, asociada a ardor y sensación de arenilla ocular y a artralgias. Al examen físico tiene sequedad de piel y de mucosas, se observa aumento de volumen de ambas parótidas y se palpan adenopatías submandibulares de consistencia aumentada. Se solicitan exámenes, que muestra FR: 40 UI/nl, ANA positivos 1/16, ENA negativo, antiDNA negativo. ¿Cuál es el examen de elección para proseguir el estudio diagnóstico?
- A) Punción parotidea
- B) Biopsia ganglionar
- C) Anticuerpos anti-CCP
- D) Biopsia de glándula salival accesoria
- E) Anticuerpos anti-Sm
**Correcta: D**
Explicación del banco: La historia es compatible con un síndrome de Sjögren (tiene el síndrome de Sicca: xeroftalmia y xerostomía). El 90% tiene FR positivo. Además, es frecuente que tengan positivos los ANA, con un perfil ENA que muestra anticuerpos anti-Ro o anti-La positivos. Se confirma la biopsia de glándula salival menor o con los anticuerpos anti-Ro o anti-La, aunque actualmente el diagnóstico se realiza en base a una serie de criterios clínicos y de laboratorio, que no vale la pena aprenderse.

### [21] EUNACOM Diciembre 2018 · Pregunta 132 · confianza 0.95
Una paciente de 32 años, madre de 4 hijos, de distintos padres, de los cuales no se hace cargo, tiene relaciones inestables y problemas frecuentes con sus compañeros de trabajo. Pelea frecuentemente con su familia y como antecedente, ha tenido varios episodios de autoagresión e intentos suicidas. ¿Cuál es el diagnóstico más probable?
- A) Esquizofrenia
- B) Trastorno límite de la personalidad
- C) Trastorno bipolar
- D) Trastorno delirante
- E) Trastorno depresivo mayor
**Correcta: B**
Explicación del banco: Diagnóstico: **Trastorno límite de la personalidad** (opción **B**). Es un TP limítrofe clásico.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [22] EUNACOM Diciembre 2017 · Pregunta 116 · confianza 0.95
Un paciente de 21 años, abandonó a los 18 años su hogar, viviendo solo en la calle. Tiene la idea de ser un enviado de Dios, con la misión de salvar al mundo y dice que los ángeles le susurran al oído diciéndole cómo hacerlo. Los familiares refieren que empezó hace 3 años con esto y que no ha cambiado mucho desde entonces. ¿Cuál es el diagnóstico más probable?
- A) Trastorno delirante crónico
- B) Esquizofrenia
- C) Trastorno bipolar
- D) Trastorno de personalidad esquizoide
- E) Trastorno de conducta
**Correcta: B**
Explicación del banco: Diagnóstico: **Esquizofrenia** (opción **B**). Es una EQZ clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [23] EUNACOM Julio 2017 · Pregunta 129 · confianza 0.95
Un hombre de 18 años tiene la idea de que algunas personas quieren dañarlo. Pre- viamente a esto presentaba retraimiento social. En el último tiempo el cuadro empeora, agregándose alucinaciones de voces, que lo insultan y ha descuidado significativamente su higiene personal. El diagnóstico más probable es:
- A) Esquizofrenia
- B) Personalidad esquizotípica
- C) Trastorno delirante crónico
- D) Trastorno esquizoafectivo
- E) Depresión psicótica
**Correcta: A**
Explicación del banco: Diagnóstico: **Esquizofrenia** (opción **A**). Es una esquizofrenia clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [24] EUNACOM Diciembre 2017 · Pregunta 114 · confianza 0.95
Una mujer de 18 años subió a un taxi, en el que el taxista se desvió del camino que debía tomar, siendo luego agredida por él. Es encontrada por terceras personas en un sitio eriazo, con evidentes signos de haber sido abusada sexualmente. Fue trasladada al Servicio Médico Legal, donde se constató la violación. Sin embargo, ella no recuerda nada de los sucedido, recordando solo cuando estaba en el taxi y luego cuando estaba en el Servicio Médico Legal. Ella se muestra muy preocupada, pero no logra recordar nada de lo que aconteció entremedio. ¿Cuál es el diagnóstico más probable?
- A) Trastorno conversivo
- B) Trastorno de estrés postraumático
- C) Trastorno facticio
- D) Trastorno adaptativo
- E) Trastorno disociativo
**Correcta: E**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **E**). Es una amnesia disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [25] EUNACOM Julio 2017 · Pregunta 12 · confianza 0.95
Una paciente de 59 años, luego de una pelea con su marido, se va de su casa y es en- contrada varias horas después sin recordar lo sucedido. ¿Cuál es el diagnóstico más probable?
- A) Trastorno facticio
- B) Trastorno disociativo
- C) Trastorno somatomorfo
- D) Trastorno conversivo
- E) Trastorno adaptativo
**Correcta: B**
Explicación del banco: Diagnóstico: **Trastorno disociativo** (opción **B**). Es una fuga disociativa clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).
