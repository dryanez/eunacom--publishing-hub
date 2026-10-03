# CLASE neuro-14 · Neurologia 10.14: Enfermedad de Alzheimer y Deterioro Cognitivo Leve

Escribe `classes/lessons/neuro-14.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-14" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-11: Neurologia 10.11: Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras
- neuro-12: Neurologia 10.12: Parkinsonismos Secundarios, Farmacológicos y Síndromes Parkinson-Plus
- neuro-13: Neurologia 10.13: Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos
- neuro-15: Neurologia 10.15: Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal
- neuro-16: Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo
- neuro-17: Neurologia 10.17: Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-14",
  "classId": "neuro-14",
  "tier": 3,
  "blockNum": 3,
  "blockName": "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
  "topicLabel": "10.14",
  "title": "Enfermedad de Alzheimer y Deterioro Cognitivo Leve",
  "perfilCode": "1.10.1.005",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Control",
  "ges": "Garantía Explícita en Salud (GES N° 85): Enfermedad de Alzheimer y otras demencias · Evaluación diagnóstica médica integral dentro de 60 días desde la sospecha, test cognitivos estandarizados (MMSE, MoCA, Pfeffer), acceso garantizado a fármacos específicos (Donepezilo, Memantina), plan de cuidados multidisciplinario y apoyo psicosocial al cuidador para prevenir el síndrome de sobrecarga.",
  "reconstrucciones": "EUNACOM Julio 2025 (Q#39) · EUNACOM Julio 2024 (Q#15) · EUNACOM Diciembre 2023 (Q#112) · EUNACOM Enero 2021 (Q#77)",
  "frecuencia": "Máxima rentabilidad · Pregunta obligatoria de neurología, medicina interna y geriatría",
  "algoTitle": "Algoritmo Diagnóstico del Deterioro Cognitivo y Abordaje Terapéutico de la Enfermedad de Alzheimer",
  "diagram": {
    "title": "Algoritmo Diagnóstico del Deterioro Cognitivo y Manejo de Alzheimer",
    "svg": "<svg viewBox=\"0 0 620 411\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Queja Cognitiva y Pérdida de Memoria</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Aplicación de MMSE / MoCA y evaluación de actividades de la vida diaria (Índice de Pfeffer)</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Descarte Obligatorio de Causas Potencialmente Reversibles</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">TSH · Vitamina B12 · VDRL · Pruebas metabólicas · TAC o RM cerebral sin contraste</text>\n  <path class=\"ln\" d=\"M310,108 V130\"/>\n  <rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">¿Existe Pérdida de Autonomía en Actividades de la Vida Diaria?</text>\n  <text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Diferenciación clínica cardinal entre DCL y Trastorno Neurocognitivo Mayor (Demencia)</text>\n  <path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n  <path class=\"ln\" d=\"M310,199 H462 V209\"/>\n  <text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Autonomía Preservada (Pfeffer &lt; 6)</text>\n  <text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Dependencia en AVD (Pfeffer ≥ 6)</text>\n  <rect class=\"dec\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Deterioro Cognitivo Leve (DCL)</text>\n  <text class=\"sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">MoCA &lt; 26 · Memoria amnésica · Control periódico cada 6-12 meses</text>\n  <text class=\"sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Estimulación cognitiva · No usar IAChE</text>\n  <rect class=\"crit\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Demencia Tipo Alzheimer Confirmada</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Amnesia episódica progresiva · Test del reloj alterado</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Atrofia hipocámpica bilateral en neuroimagen</text>\n  <path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n  <path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n  <rect class=\"acc\" x=\"100\" y=\"281\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Terapia Farmacológica Escalonada (Garantía GES N° 85)</text>\n  <text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Leve a Moderada: Inhibidores Acetilcolinesterasa</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">(Donepezilo 5-10 mg o Rivastigmina en parche)</text>\n  <path class=\"ln\" d=\"M310,331 V353\"/>\n  <rect class=\"acc\" x=\"100\" y=\"353\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"368\" text-anchor=\"middle\" font-weight=\"700\">Fase Moderada a Severa y Apoyo al Cuidador</text>\n  <text class=\"accS\" x=\"310\" y=\"380\" text-anchor=\"middle\">Adicionar Memantina 10-20 mg/día (antagonista NMDA)</text>\n  <text class=\"accS\" x=\"310\" y=\"391\" text-anchor=\"middle\">Educación familiar y prevención del colapso del cuidador</text>\n</svg>"
  },
  "contexto": "La Enfermedad de Alzheimer (EA) es la principal causa de demencia en Chile y el mundo, representando entre el 60% y el 70% de los casos de trastorno neurocognitivo mayor. Con la promulgación de la Garantía GES N° 85, el diagnóstico y abordaje integral de las demencias se consolidó como una prioridad sanitaria nacional. El sello distintivo de la enfermedad es el deterioro insidioso, progresivo e irreversible de la memoria episódica reciente (amnesia anterógrada), conservando durante etapas prolongadas la memoria remota y el nivel de vigilia. La frontera diagnóstica crucial frente al Deterioro Cognitivo Leve (DCL) radica en la pérdida de la independencia funcional para las actividades de la vida diaria. El rol del médico general comprende la aplicación de escalas diagnósticas breves (MMSE, MoCA, Test del Reloj), el descarte sistemático de causas potencialmente reversibles (B12, TSH, VDRL, hidrocefalia) y la titulación oportuna de inhibidores de la acetilcolinesterasa y memantina.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología Molecular: Péptido Beta-Amiloide, Ovillos Neurofibrilares Tau y Déficit Colinérgico",
      "paragraphs": [
        "La fisiopatología de la Enfermedad de Alzheimer se sustenta en dos cascadas neurodegenerativas interconectadas:",
        "• <strong>Hipótesis de la Cascada Amiloide:</strong> Procesamiento anómalo de la Proteína Precursora de Amiloide (APP) a través de la vía amiloidogénica mediada por las enzimas <strong>beta y gamma-secretasas</strong> (complejo presenilina 1 y 2). Esto genera el fragmento insoluble neurotóxico <strong>péptido beta-amiloide 42 (Aβ42)</strong>, que se polimeriza formando oligómeros solubles y finalmente <strong>placas seniles o placas neuríticas extracelulares</strong>. Los oligómeros de Aβ dañan directamente la transmisión sináptica e inducen estrés oxidativo.",
        "• <strong>Hiperfosforilación de Proteína Tau y Ovillos Neurofibrilares:</strong> La proteína Tau, normalmente encargada de ensamblar y estabilizar los microtúbulos del citoesqueleto axonal, sufre hiperfosforilación patológica, desprendiéndose de los túbulos y agregándose en <strong>ovillos neurofibrilares intracelulares (NFT)</strong>. Esto bloquea el transporte axoplásmico retrógrado y anterógrado, produciendo la muerte celular retrógrada.",
        "• <strong>Secuencia Anatómica y Déficit Colinérgico:</strong> El daño histológico se inicia invariablemente en la <strong>corteza entorrinal y el hipocampo</strong> (lóbulo temporal medial), explicando por qué el primer síntoma es la falla en consolidar nueva información (amnesia anterógrada). Posteriormente se expande a las cortezas asociativas parieto-temporales y finalmente a la corteza frontal. Se produce una depleción masiva de acetilcolina por degeneración de las neuronas colinérgicas del <strong>núcleo basal de Meynert</strong>, fundamento del tratamiento con inhibidores de la acetilcolinesterasa (véase Figura 10.14: Algoritmo Diagnóstico del Deterioro Cognitivo y Manejo de Alzheimer)."
      ]
    },
    {
      "subhead": "2. Deterioro Cognitivo Leve (DCL) vs Trastorno Neurocognitivo Mayor (Demencia)",
      "paragraphs": [
        "La distinción clínica entre el envejecimiento fisiológico, el Deterioro Cognitivo Leve y la Demencia constituye el eje central de la evaluación geroneurológica:",
        "• <strong>Envejecimiento Normal (\"Olvidos Benignos del Anciano\"):</strong> Dificultad ocasional para evocar nombres o palabras (fenómeno de la punta de la lengua) o recordar dónde se dejaron las llaves, pero la información se recuerda espontáneamente más tarde o con pistas (falla de recuperación, no de consolidación). Rendimiento psicométrico normal para edad y escolaridad.",
        "• <strong>Deterioro Cognitivo Leve (DCL / Trastorno Neurocognitivo Menor):</strong>",
        "- <em>Criterios de Petersen / NIA-AA:</em> 1) Queja cognitiva reportada por el paciente o familiar; 2) Deterioro objetivo en uno o más dominios cognitivos (típicamente memoria en el DCL amnésico, con MoCA alterado < 26); 3) <strong>PRESERVACIÓN DE LA AUTONOMÍA FUNCIONAL:</strong> El paciente mantiene intacta su independencia para las actividades instrumentales de la vida diaria (manejo de dinero, compras, medicación, transporte), aunque pueda requerir mayor esfuerzo, tiempo o estrategias compensatorias (Pfeffer < 6 puntos). Tasa de progresión a demencia: <strong>10% a 15% por año</strong> (frente al 1-2% en la población sana). <em>Conducta:</em> Estimulación cognitiva, control de factores de riesgo vascular y seguimiento semestral. NO están indicados los inhibidores de acetilcolinesterasa en DCL.",
        "• <strong>Demencia (Trastorno Neurocognitivo Mayor):</strong>",
        "- Deterioro significativo en al menos dos dominios cognitivos que <strong>INTERFIERE CLARAMENTE CON LA INDEPENDENCIA</strong> en las actividades de la vida diaria (el paciente requiere asistencia de terceros para administrar sus finanzas, tomar sus remedios o preparar alimentos; Pfeffer ≥ 6 puntos). Ocurre en ausencia de delirium o trastorno psiquiátrico mayor (véase Tabla 10.14A: Criterios NIA-AA de Deterioro Cognitivo Leve vs Demencia tipo Alzheimer)."
      ]
    },
    {
      "subhead": "3. Batería Diagnóstica: Escalas Cognitivas y Descarte Obligatorio de Causas Potencialmente Reversibles",
      "paragraphs": [
        "El protocolo diagnóstico inicial normado por la guía GES N° 85 del MINSAL comprende tres elementos obligatorios:",
        "• <strong>1) Evaluación Cognitiva y Funcional Breve:</strong>",
        "- <em>Mini-Mental State Examination (MMSE) de Folstein:</em> Escala de 0 a 30 puntos (orientación, memoria inmediata, atención/cálculo, recuerdo diferido y lenguaje). El punto de corte tradicional en Chile es <strong>< 24 puntos</strong> ajustado por escolaridad. Tiene baja sensibilidad para detectar DCL en personas con alta escolaridad.",
        "- <em>Montreal Cognitive Assessment (MoCA):</em> Escala de 30 puntos con mayor sensibilidad para detectar DCL y afectación de funciones ejecutivas frontales (corte < 26).",
        "- <em>Test del Reloj (Clock Drawing Test):</em> Prueba extremadamente sensible y rápida para evaluar funciones ejecutivas, memoria de trabajo y habilidades visuoespaciales. En la EA se altera precozmente (el paciente coloca los números en un solo hemisferio o ubica las manecillas de forma grotescamente errónea).",
        "- <em>Evaluación Funcional:</em> <strong>Índice de Pfeffer</strong> (actividades instrumentales en adultos mayores; ≥ 6 puntos define dependencia funcional) y <strong>Escala de Barthel</strong> (actividades básicas de la vida diaria: aseo, vestimenta, continencia).",
        "• <strong>2) Batería de Laboratorio para Descartar Causas Reversibles (Regla de Oro EUNACOM):</strong>",
        "Todo paciente con sospecha de demencia DEBE ser estudiado con exámenes de sangre basales para descartar patologías tratables: 1) <strong>TSH</strong> (hipotiroidismo como causa de bradipsiquia y pseudodemencia); 2) <strong>Niveles séricos de Vitamina B12</strong> (su déficit genera demencia reversible, neuropatía periférica y mielopatía subaguda); 3) <strong>VDRL / RPR</strong> (neurosífilis terciaria / paresia general); 4) Hemograma, electrolitos plasmáticos, función renal y hepática.",
        "• <strong>3) Neuroimagen Estructural (TAC o RM Cerebral sin Contraste):</strong>",
        "Obligatoria para descartar lesiones estructurales expansivas o potencialmente quirúrgicas: <strong>Hematoma subdural crónico</strong> (frecuente en ancianos tras traumas menores), <strong>tumores cerebrales</strong> (meningiomas frontales), <strong>infartos cerebrales silentes</strong> e <strong>Hidrocefalia Normotensiva (Síndrome de Hakim-Adams)</strong>, cuya tríada diagnóstica patognomónica es: <em>Apraxia de la marcha (\"marcha magnética a pasos cortos pegados al piso\") + Incontinencia urinaria precoz + Deterioro cognitivo</em>, reversible tras derivación ventrículo-peritoneal (véase Tabla 10.14B: Escalas Cognitivas y Batería de Causas Potencialmente Reversibles)."
      ]
    },
    {
      "subhead": "4. Estrategia Farmacológica: Inhibidores de Acetilcolinesterasa y Memantina",
      "paragraphs": [
        "El tratamiento farmacológico de la Enfermedad de Alzheimer está cubierto por la <strong>Garantía GES N° 85</strong> y se orienta a frenar transitoriamente la declinación cognitiva y funcional:",
        "• <strong>Inhibidores de la Acetilcolinesterasa (IAChE):</strong> Fármacos de primera línea en <strong>Enfermedad de Alzheimer Leve a Moderada</strong> (MMSE entre 10 y 24 puntos):",
        "- <strong>Donepezilo:</strong> 5 mg una vez al día por la noche, titulando tras 4-6 semanas a 10 mg/día. Es el más utilizado.",
        "- <strong>Rivastigmina:</strong> Disponible en parches transdérmicos diarios de 4.6 mg y 9.5 mg/24 horas. La vía transdérmica reduce drásticamente los efectos secundarios gastrointestinales y asegura adherencia.",
        "- <strong>Galantamina:</strong> 8 a 24 mg/día en formulación de liberación prolongada.",
        "- <em>Efectos adversos colinérgicos:</em> Náuseas, vómitos, diarrea, anorexia, pérdida de peso, calambres musculares y, con relevancia clínica crítica, <strong>bradicardia sinusal y síncope por bloqueo AV</strong> (es mandatorio solicitar un electrocardiograma basal antes de iniciar IAChE).",
        "• <strong>Memantina:</strong> Antagonista no competitivo de afinidad moderada por los <strong>receptores NMDA del glutamato</strong>. Protege a las neuronas de la excitotoxicidad glutamatérgica crónica. Indicada en <strong>Enfermedad de Alzheimer Moderada a Severa</strong> (MMSE < 15 puntos), ya sea en monoterapia o combinada con un IAChE (terapia dual sinérgica). Dosis: inicio 5 mg/día, titulando semanalmente 5 mg hasta alcanzar la dosis meta de <strong>20 mg/día</strong> (10 mg cada 12 horas o 20 mg LP). Posee un excelente perfil de seguridad (véase Tabla 10.14C: Protocolo Farmacológico con Inhibidores de Acetilcolinesterasa y Memantina)."
      ]
    },
    {
      "subhead": "5. Síntomas Conductuales y Psicológicos de la Demencia (BPSD) y Soporte Integral al Cuidador",
      "paragraphs": [
        "Los Síntomas Conductuales y Psicológicos de la Demencia (BPSD: agitación psicomotora, agresividad, delirios paranoides de robo o infidelidad, vagabundeo nocturno e insomnio) generan un enorme desgaste en el entorno familiar.",
        "• <strong>Abordaje de primera línea:</strong> Siempre <strong>no farmacológico</strong>: descartar dolor físico oculto (retención urinaria, fecaloma, infección del tracto urinario), mantener rutinas estables, buena iluminación diurna y evitar confrontar directamente las falsas creencias del paciente.",
        "• <strong>Farmacoterapia de segunda línea en crisis severas:</strong> Si existe riesgo inminente para sí mismo o terceros y fracasan las medidas ambientales, se pueden emplear antipsicóticos atípicos en dosis mínimas y por el tiempo más breve posible (<strong>Quetiapina 12.5 a 25 mg/noche</strong> o Risperidona 0.25 a 0.5 mg/día). <em>Advertencia regulatoria:</em> Los antipsicóticos conllevan una advertencia de caja negra (black-box warning) por incremento del riesgo de ACV y mortalidad cardiovascular en ancianos con demencia. Están formalmente contraindicadas las benzodiacepinas (empeoran la cognición, causan agitación paradójica y provocan caídas con fractura de cadera).",
        "• <strong>Prevención del Colapso del Cuidador (Garantía GES N° 85):</strong> El síndrome de sobrecarga del cuidador (evaluado con la <em>Escala de Zarit</em>) debe ser pesquisado activamente por el equipo de salud primaria, otorgando talleres de psicoeducación, redes de respiro y apoyo psicológico."
      ]
    }
  ],
  "table": {
    "title": "Tabla 10.14A: Criterios NIA-AA de Deterioro Cognitivo Leve vs Demencia tipo Alzheimer",
    "headers": [
      "Criterio / Característica",
      "Envejecimiento Normal",
      "Deterioro Cognitivo Leve (DCL)",
      "Enfermedad de Alzheimer (Demencia)"
    ],
    "rows": [
      [
        "Queja Subjetiva de Memoria",
        "Olvidos ocasionales de nombres; recupera información con pistas o tiempo",
        "Queja constante referida por el paciente y confirmada por informante clave",
        "Frecuentemente el paciente tiene anosognosia (no es consciente del déficit); la familia consulta"
      ],
      [
        "Rendimiento en Test Cognitivos",
        "Normal para edad y nivel de escolaridad (MMSE ≥ 27, MoCA ≥ 26)",
        "Déficit objetivo demostrado en pruebas neuropsicológicas (MoCA < 26, MMSE 24-27)",
        "Déficit multidominio significativo en test cognitivos (MMSE < 24, Test del Reloj alterado)"
      ],
      [
        "Autonomía en Actividades de la Vida Diaria",
        "Completamente preservada e independiente en todas las esferas",
        "PRESERVADA: Realiza actividades instrumentales (dinero, compras, medicación; Pfeffer < 6)",
        "PERDIDA: Dependencia progresiva de terceros para AVD instrumentales y básicas (Pfeffer ≥ 6)"
      ],
      [
        "Perfil de Memoria Afectado",
        "Dificultad leve en recuperación; almacenamiento y consolidación intactos",
        "Afectación selectiva de consolidación episódica reciente (DCL amnésico)",
        "Amnesia episódica anterógrada severa (olvida conversaciones recientes, citas y eventos del día)"
      ],
      [
        "Tasa de Progresión Anual a Demencia",
        "1% a 2% por año (riesgo basal de la población general)",
        "10% a 15% por año evolucionan hacia demencia franca tipo Alzheimer",
        "Enfermedad neurodegenerativa progresiva irreversible; sobrevida media 8-10 años"
      ],
      [
        "Conducta Terapéutica Normada",
        "Tranquilizar al paciente; fomentar actividad física e intelectual",
        "Control cognitivo semestral, ejercicio aeróbico, dieta mediterránea; NO usar fármacos IAChE",
        "Tratamiento específico con Donepezilo / Rivastigmina + Memantina (Garantía GES N° 85)"
      ]
    ]
  },
  "severityTable": {
    "title": "Tabla 10.14B: Escalas Cognitivas y Batería de Causas Potencialmente Reversibles",
    "headers": [
      "Herramienta / Examen",
      "Parámetro Evaluado / Hallazgo",
      "Puntos de Corte Clínicos",
      "Relevancia EUNACOM / Conducta"
    ],
    "rows": [
      [
        "Mini-Mental State Exam (MMSE)",
        "Orientación temporal/espacial, fijación, cálculo, recuerdo diferido, lenguaje",
        "Normal: 27-30 · Leve: 20-23 · Moderado: 10-19 · Grave: < 10 puntos",
        "Corte patológico < 24 puntos (Chile); útil para clasificar gravedad e indicar fármacos GES"
      ],
      [
        "Montreal Cognitive Assessment (MoCA)",
        "Visoespacial, ejecutiva, memoria, atención, concentración, lenguaje, abstracción",
        "Puntuación máxima 30 puntos · Patológico: < 26 puntos (+1 si escolaridad ≤ 12 a)",
        "Muy superior al MMSE para detectar Deterioro Cognitivo Leve y disfunción ejecutiva"
      ],
      [
        "Test del Reloj (Clock Drawing Test)",
        "Praxias constructivas, funciones ejecutivas de planificación, memoria de trabajo",
        "Puntuación cuantitativa (Clox 1/2 o Shulman); dibujo circular, números y hora (11:10)",
        "Se altera precozmente en la enfermedad de Alzheimer; excelente screening en atención primaria"
      ],
      [
        "Perfil Tiroideo (TSH)",
        "Función tiroidea (descarte de hipotiroidismo primario severo descompensado)",
        "TSH elevada con T4 libre baja; mixedema, bradipsiquia, letargia",
        "Causa reversible clásica de pseudodemencia; revierte tras reposición con Levotiroxina"
      ],
      [
        "Vitamina B12 Plasmática",
        "Niveles séricos de cobalamina (descarte de degeneración combinada subaguda)",
        "Nivel sérico < 200 pg/mL (confirmar con ácido metilmalónico si borderline)",
        "Demencia reversible con anemia megaloblástica y neuropatía sensitiva; reponer B12 IM"
      ],
      [
        "VDRL / RPR en Suero",
        "Tamizaje de Neurosífilis terciaria (paresia general del demente)",
        "Reactivo en suero; obliga a punción lumbar para confirmar VDRL en LCR",
        "Infección tratable del SNC; tratamiento curativo con Penicilina G Sódica endovenosa"
      ],
      [
        "TAC / RM Cerebral sin Contraste",
        "Descarte de lesiones estructurales quirúrgicas y cuantificación de atrofia",
        "Atrofia hipocámpica bilateral en EA · Descartar hematoma subdural e hidrocefalia",
        "Obligatorio en todo estudio inicial; detecta Hidrocefalia Normotensiva (Hakim-Adams)"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Tabla 10.14C: Protocolo Farmacológico con Inhibidores de Acetilcolinesterasa y Memantina",
    "headers": [
      "Fármaco",
      "Mecanismo de Acción",
      "Indicación / Etapa Clínica",
      "Dosis Estándar y Titulación",
      "Efectos Adversos y Precauciones Críticas"
    ],
    "rows": [
      [
        "Donepezilo",
        "Inhibidor reversible y selectivo de la Acetilcolinesterasa central",
        "EA Leve a Moderada (MMSE 10 a 24 puntos)",
        "Inicio: 5 mg/día oral nocturno por 4-6 semanas; titular a 10 mg/día",
        "Náuseas, diarrea, insomnio, calambres. Solicitar ECG basal por riesgo de bradicardia"
      ],
      [
        "Rivastigmina",
        "Inhibidor pseudo-irreversible de Acetilcolinesterasa y Butirilcolinesterasa",
        "EA Leve a Moderada (de elección si intolerancia gastrointestinal a orales)",
        "Parche transdérmico: 4.6 mg/24h por 4 semanas; titular a 9.5 mg/24h (máximo 13.3 mg/24h)",
        "Eritema cutáneo en sitio de aplicación (rotar sitio diario). Excelente adherencia"
      ],
      [
        "Galantamina",
        "Inhibidor de AChE + modulador alostérico de receptores nicotínicos",
        "EA Leve a Moderada",
        "Cápsulas LP: inicio 8 mg/día por 4 semanas; titular a 16 mg/día; máx 24 mg/día",
        "Perfil colinérgico similar; administrar con desayuno para minimizar náuseas"
      ],
      [
        "Memantina",
        "Antagonista no competitivo de receptores NMDA de glutamato",
        "EA Moderada a Severa (MMSE < 15 puntos) monoterapia o combinada",
        "Inicio: 5 mg/día; aumentar 5 mg por semana hasta 20 mg/día (10 mg c/12h o 20 mg LP)",
        "Excelente tolerancia; mareos leves, cefalea, constipación. Ajustar dosis en insuficiencia renal"
      ],
      [
        "Quetiapina",
        "Antipsicótico atípico (antagonista 5-HT2A y débil antagonista D2)",
        "Manejo de BPSD refractario grave (alucinaciones angustiantes, agresividad)",
        "12.5 a 25 mg por la noche (dosis máxima habitual: 50-100 mg/día)",
        "Aumenta riesgo de ACV y mortalidad en demencia. Usar tiempo mínimo indispensable"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 71 años, profesor de historia jubilado, es traído a la consulta de medicina general por su hija debido a un cuadro de aproximadamente 16 meses de evolución de olvidos frecuentes y progresivos. La hija refiere que el paciente repite insistentemente las mismas preguntas que acaban de ser respondidas, olvida citas médicas y ha dejado la estufa encendida en dos ocasiones. Hace un mes se desorientó mientras conducía hacia el supermercado habitual del barrio, requiriendo auxilio telefónico. El paciente minimiza la situación, afirmando que \"a su edad es normal tener mala memoria\". Al examen mental: lúcido, colaborador, sin alteraciones en el nivel de conciencia ni en la inversión de series (atención y memoria de trabajo normales). En el Mini-Mental State Examination obtiene 21/30 puntos (falla 3/3 en memoria diferida y 4 puntos en orientación temporal y espacial). El Test del Reloj se encuentra marcadamente alterado (ubica todos los números amontonados en la mitad derecha de la esfera y dibuja las manecillas sin conexión al centro). El Índice de Pfeffer es de 8 puntos (dependencia para finanzas y uso de electrodomésticos). El examen neurológico físico no revela focalidad motora, sensitiva ni cerebelosa.",
    "conducta": "El paciente presenta un cuadro clínico prototípico de Trastorno Neurocognitivo Mayor tipo Enfermedad de Alzheimer en etapa leve a moderada. Los elementos diagnósticos de certeza son: 1) Deterioro insidioso y progresivo de más de un año de evolución; 2) Patrón amnésico anterógrado típico (falla severa en la consolidación de la memoria reciente, con conservación de la memoria remota y atención); 3) Compromiso ejecutivo y visoespacial objetivado por el Test del Reloj patológico; 4) Impacto funcional indiscutible en actividades instrumentales de la vida diaria (Pfeffer 8 puntos, lo que define demencia y descarta DCL); y 5) Examen neurológico físico sin signos focales piramidales o extrapiramidales. La conducta normada por la Garantía GES N° 85 consiste en: solicitar batería de laboratorio para descartar causas tratables (TSH, Vitamina B12, VDRL, perfil bioquímico), TAC de cerebro sin contraste para descartar hematoma subdural, tumores o hidrocefalia normotensiva, e iniciar precozmente tratamiento farmacológico sintomático con un inhibidor de la acetilcolinesterasa (Donepezilo 5 mg/día oral) junto con apoyo psicosocial al cuidador."
  },
  "explicacion": "El paciente presenta un cuadro clínico prototípico de Trastorno Neurocognitivo Mayor tipo Enfermedad de Alzheimer en etapa leve a moderada. Los elementos diagnósticos de certeza son: 1) Deterioro insidioso y progresivo de más de un año de evolución; 2) Patrón amnésico anterógrado típico (falla severa en la consolidación de la memoria reciente, con conservación de la memoria remota y atención); 3) Compromiso ejecutivo y visoespacial objetivado por el Test del Reloj patológico; 4) Impacto funcional indiscutible en actividades instrumentales de la vida diaria (Pfeffer 8 puntos, lo que define demencia y descarta DCL); y 5) Examen neurológico físico sin signos focales piramidales o extrapiramidales. La conducta normada por la Garantía GES N° 85 consiste en: solicitar batería de laboratorio para descartar causas tratables (TSH, Vitamina B12, VDRL, perfil bioquímico), TAC de cerebro sin contraste para descartar hematoma subdural, tumores o hidrocefalia normotensiva, e iniciar precozmente tratamiento farmacológico sintomático con un inhibidor de la acetilcolinesterasa (Donepezilo 5 mg/día oral) junto con apoyo psicosocial al cuidador.",
  "keyPoints": [
    "La Enfermedad de Alzheimer es la causa más prevalente de demencia (> 60-70%) y su manifestación inicial cardinal es la amnesia anterógrada (pérdida de memoria episódica reciente).",
    "La frontera clínica cardinal entre el Deterioro Cognitivo Leve (DCL) y la Demencia es la pérdida de autonomía funcional en las actividades de la vida diaria (Índice de Pfeffer ≥ 6).",
    "El estudio diagnóstico inicial de toda demencia exige descartar causas potencialmente reversibles mediante TSH (hipotiroidismo), Vitamina B12, VDRL y TAC o RM cerebral sin contraste.",
    "La Hidrocefalia Normotensiva (Hakim-Adams) es una causa reversible que se presenta con la tríada clásica de apraxia de la marcha magnética, incontinencia urinaria y demencia.",
    "El tratamiento farmacológico de elección en la EA leve a moderada (Garantía GES N° 85) son los Inhibidores de la Acetilcolinesterasa (Donepezilo, Rivastigmina, Galantamina).",
    "En la fase moderada a severa (MMSE < 15) se debe incorporar Memantina (antagonista NMDA), fármaco que también puede asociarse en terapia dual combinada con IAChE."
  ],
  "questions": [
    {
      "stem": "¿Qué medicamento se utiliza para el manejo inicial del paciente con\nenfermedad de Alzheimer leve a moderada?",
      "options": [
        {
          "id": "A",
          "text": "Benzodiacepinas."
        },
        {
          "id": "B",
          "text": "Neurolépticos atípicos."
        },
        {
          "id": "C",
          "text": "Inhibidores de la monoaminooxidasa."
        },
        {
          "id": "D",
          "text": "Antidepresivos tipo ISRS."
        },
        {
          "id": "E",
          "text": "Inhibidores de la acetilcolinesterasa."
        }
      ],
      "correcta": "E",
      "explicacion": "La alternativa correcta es la E (Inhibidores de la acetilcolinesterasa). En el manejo inicial del paciente con enfermedad de Alzheimer leve a moderada, los inhibidores de la acetilcolinesterasa (IAChE) como donepezilo, rivastigmina y galantamina son los fármacos de primera línea. Estos medicamentos actúan inhibiendo la enzima acetilcolinesterasa, que degrada la acetilcolina en la sinapsis neuronal. Al aumentar la disponibilidad de acetilcolina, mejoran la neurotransmisión colinérgica, lo que puede resultar en una leve mejoría en la función cognitiva, el comportamiento y las actividades de la vida diaria en algunos pacientes. Las guías clínicas del MINSAL (Programa Nacional de Salud Mental) recomiendan el uso de IAChE en las etapas iniciales de la enfermedad de Alzheimer, considerando la relación riesgo-beneficio y la respuesta individual de cada paciente. Es fundamental el monitoreo regular y la evaluación de la eficacia y los efectos secundarios del tratamiento.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
    },
    {
      "stem": "Un paciente de 78 años, con antecedente de hipertensión, diabetes y\ndemencia inicial por enfermedad de Alzheimer, sufre una caída a nivel,\nresultando con imposibilidad para caminar e intenso dolor. Al examen se\naprecia extremidad inferior derecha en posición impúdica, con imposibilidad\nde flectar la cadera. Se solicitan radiografías de caderas que demuestra una\nfractura de la región intertrocantérica, con importante desplazamiento\n(Tronzo IV). Una vez estabilizado el paciente, la conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Inmovilizar con yeso pelvipedio"
        },
        {
          "id": "B",
          "text": "Realizar osteosíntesis con placa y tornillos"
        },
        {
          "id": "C",
          "text": "Realizar osteosíntesis con DHS (dinamic hip screw)"
        },
        {
          "id": "D",
          "text": "Instalar prótesis parcial de cadera"
        },
        {
          "id": "E",
          "text": "Instalar prótesis total de cadera"
        }
      ],
      "correcta": "C",
      "explicacion": "El paciente presenta una fractura intertrocantérica desplazada (Tronzo IV) de cadera. Las fracturas intertrocantéricas son fracturas extracapsulares del fémur proximal, comunes en pacientes ancianos, a menudo asociadas a osteoporosis y caídas. El objetivo principal del tratamiento en estos pacientes, especialmente aquellos con comorbilidades como diabetes, hipertensión y demencia, es lograr una fijación estable que permita la movilización temprana. Esto es crucial para prevenir las graves complicaciones asociadas al reposo prolongado en cama, como la trombosis venosa profunda, embolia pulmonar, neumonía, úlceras por presión, atrofia muscular y el empeoramiento del deterioro cognitivo o el desarrollo de delirium.\n\nLa osteosíntesis con DHS (Dynamic Hip Screw o Tornillo Deslizante de Cadera) es considerada el estándar de oro para el tratamiento de la mayoría de las fracturas intertrocantéricas estables y muchas inestables. Este sistema consiste en un tornillo de gran diámetro que se inserta en el cuello y la cabeza femoral, y que se desliza dentro de un barril fijado a una placa atornillada a la diáfisis femoral. Este diseño permite una compresión controlada y un impacto progresivo en el sitio de la fractura durante la carga, lo que promueve la consolidación y proporciona una excelente estabilidad. La ventaja clave del DHS es que preserva la articulación nativa de la cadera, lo que es preferible en este tipo de fracturas donde la irrigación de la cabeza femoral no suele estar comprometida. La estabilidad que ofrece el DHS permite una movilización precoz y el inicio de la rehabilitación, lo cual es fundamental para el pronóstico funcional y la reducción de la morbimortalidad en pacientes ancianos frágiles como el descrito.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
    },
    {
      "stem": "¿Qué alternativa es MÁS compatible con una demencia por enfermedad de\nAlzheimer?",
      "options": [
        {
          "id": "A",
          "text": "Test del reloj alterado"
        },
        {
          "id": "B",
          "text": "Alucinaciones visuales"
        },
        {
          "id": "C",
          "text": "Minimental de 24/25 puntos"
        },
        {
          "id": "D",
          "text": "Sopor y desorientación"
        },
        {
          "id": "E",
          "text": "Síntomas extrapiramidales"
        }
      ],
      "correcta": "A",
      "explicacion": "La enfermedad de Alzheimer se caracteriza por un deterioro cognitivo progresivo. El Test del Reloj es una herramienta sencilla pero sensible para evaluar la función visuoespacial, la planificación y la memoria operativa, todas afectadas en la enfermedad de Alzheimer. Los pacientes con EA suelen mostrar dificultades significativas para dibujar el reloj correctamente, como colocar los números en el lugar incorrecto, omitir números, dibujar las manecillas incorrectamente o no entender la consigna. Este test es útil para detectar disfunción cognitiva temprana. La guía clínica de MINSAL \"Enfermedad de Alzheimer y otras Demencias\" (2018) recomienda el uso de tests neuropsicológicos breves, como el Test del Reloj, en la evaluación inicial de pacientes con sospecha de demencia.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
    },
    {
      "stem": "Un paciente de 65 años presenta olvidos frecuentes y repetición de algunas\nideas, asociados a dificultad para realizar sus tareas habituales. En el examen\nmental invierte series con normalidad, y mantiene la memoria a largo plazo,\nsin embargo presenta varias fallas en lass de memoria reciente. El\nexamen neurológico no presenta signos focales y sólo destaca cierta torpeza\nmotora, sin signos cerebelosos. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Envejecimiento normal"
        },
        {
          "id": "B",
          "text": "Depresión"
        },
        {
          "id": "C",
          "text": "Enfermedad de Alzheimer"
        },
        {
          "id": "D",
          "text": "Delirium"
        },
        {
          "id": "E",
          "text": "Demencia por cuerpos de Lewy"
        }
      ],
      "correcta": "C",
      "explicacion": "El cuadro clínico descrito es altamente sugerente de una **Enfermedad de Alzheimer (EA)** en su etapa inicial. La EA es la causa más común de demencia y se caracteriza por un inicio insidioso y una progresión gradual del deterioro cognitivo.\n\nLos elementos clave en el caso que apoyan este diagnóstico son:\n1.  **Perfil del paciente:** 65 años, una edad típica para el inicio de la EA de inicio tardío.\n2.  **Déficit cognitivo principal:** El síntoma cardinal es la **pérdida de memoria reciente** (amnesia anterógrada), manifestada como \"olvidos frecuentes\", \"repetición de ideas\" y \"fallas en las pruebas de memoria reciente\". Es característico que la memoria a largo plazo (\"mantiene la memoria a largo plazo\") y la atención (\"invierte series con normalidad\") estén relativamente preservadas en las fases iniciales.\n3.  **Impacto funcional:** El paciente presenta \"dificultad para realizar sus tareas habituales\". Este es un criterio fundamental para el diagnóstico de demencia (Trastorno Neurocognitivo Mayor), ya que distingue el deterioro patológico del envejecimiento normal.\n4.  **Examen neurológico:** La ausencia de \"signos focales\" (como hemiparesia, afasia motora marcada o defectos campimétricos) y de \"signos cerebelosos\" va en contra de otras etiologías como la demencia vascular o ataxias espinocerebelosas. La \"cierta torpeza motora\" es un hallazgo inespecífico que puede observarse en la EA.\n\nEn conjunto, un deterioro de predominio amnésico, con impacto funcional y un examen neurológico no focal, es el patrón clásico de la Enfermedad de Alzheimer.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
    }
  ],
  "vignetteText": "Hombre de 71 años, profesor de historia jubilado, es traído a la consulta de medicina general por su hija debido a un cuadro de aproximadamente 16 meses de evolución de olvidos frecuentes y progresivos. La hija refiere que el paciente repite insistentemente las mismas preguntas que acaban de ser respondidas, olvida citas médicas y ha dejado la estufa encendida en dos ocasiones. Hace un mes se desorientó mientras conducía hacia el supermercado habitual del barrio, requiriendo auxilio telefónico. El paciente minimiza la situación, afirmando que \"a su edad es normal tener mala memoria\". Al examen mental: lúcido, colaborador, sin alteraciones en el nivel de conciencia ni en la inversión de series (atención y memoria de trabajo normales). En el Mini-Mental State Examination obtiene 21/30 puntos (falla 3/3 en memoria diferida y 4 puntos en orientación temporal y espacial). El Test del Reloj se encuentra marcadamente alterado (ubica todos los números amontonados en la mitad derecha de la esfera y dibuja las manecillas sin conexión al centro). El Índice de Pfeffer es de 8 puntos (dependencia para finanzas y uso de electrodomésticos). El examen neurológico físico no revela focalidad motora, sensitiva ni cerebelosa."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "alzheimer, deterioro, cognitivo")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Enero 2023 · Pregunta 129 · confianza 0.9
Paciente con 1 año de alucinaciones visuales, pérdida de memoria progresiva, rigidez, hipocinesia y alteración de la marcha. ¿Diagnóstico más probable?
- A) Enfermedad de Parkinson con demencia
- B) Enfermedad de Alzheimer
- C) Demencia frontotemporal
- D) Demencia por cuerpos de Lewy
- E) Parálisis supranuclear progresiva
**Correcta: D**
Explicación del banco: Diagnóstico: **Demencia por cuerpos de Lewy** (opción **D**). Demencia por cuerpos de Lewy. Esta clase aborda el compromiso de conciencia, las apraxias, agnosias y los trastornos del lenguaje. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [2] EUNACOM Julio 2019 · Pregunta 35 · confianza 0.6
Un paciente de 82 años, hace 2 años sufrió un accedente vascular encefálico, sin secuelas. Hace 2 meses presenta un cuadro de labilidad emocional, desinhibición social y dificultades para realizar algunas de sus actividades habituales. El diagnóstico más probable es:
- A) Depresión
- B) Enfermedad de Alzheimer
- C) Demencia vascular
- D) Demencia por cuerpos de Lewy
- E) Hidrocéfalo normotensivo
**Correcta: C**
Explicación del banco: Es una clásica demencia vascular de tipo subcortical. Es una pregunta muy difícil, pero el antecedente de AVE es algo muy sugerente y la labilidad emocional y desinhibición son sugerentes de la localización subcortical. Si no hubiese estado en las opciones, sería una depresión.

### [3] EUNACOM Julio 2015 · Pregunta 85 · confianza 0.55
Un paciente de 55 años ha presentado varios cambios congnitivos conductuales, como tendencia a la apatía, lenguaje coprolálico o andar desnudo. No ha tenido alteraciones en la conciencia ni en la memoria. ¿Cuál es el diagnóstico más probable?
- A) Demencia por cuerpos de Lewy
- B) Hidrocefalia normotensiva
- C) Enfermedad de Alzheimer
- D) Demencia frontotemporal
- E) Delirium
**Correcta: D**
Explicación del banco: Diagnóstico: **Demencia frontotemporal** (opción **D**). Cuadro clásico. Esta clase aborda el compromiso de conciencia, las apraxias, agnosias y los trastornos del lenguaje. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [4] EUNACOM Julio 2015 · Pregunta 26 · confianza 0.95
Un paciente de 70 años presenta un cuadro de dificultad para girarse y para meterse a la tina, asociado a múltiples caídas. Además presenta cambios en la escritura y temblor de reposo. No presenta deterioro cognitivo evidente. El diagnóstico más probable es:
- A) Atrofia generalizada
- B) Hidrocefalia normotensiva
- C) Temblor senil
- D) Demencia por cuerpos de Lewy
- E) Enfermedad de Parkinson
**Correcta: E**
Explicación del banco: Diagnóstico: **Enfermedad de Parkinson** (opción **E**). Cuadro clásico. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [5] EUNACOM Diciembre 2019 · Pregunta 125 · confianza 0.92
Un paciente está hospitalizado por un infarto agudo al miocardio, con supradesnivel del segmento ST, de dos días de evolución. Presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión arterial. En su examen físico tiene FC: 115x’, PA: 80/50 mmHg, examen pulmonar con crepitaciones bilaterales intensos y examen cardíaco con ritmo regular en 2 tonos, con soplo sistólico intenso, de localización precordial. El diagnóstico más probable es:
- A) Taponamiento cardíaco por rotura de la pared libre
- B) Disfunción valvular aórtica isquémica
- C) Rotura del músculo papilar
- D) Shock cardiogénico por infarto masivo
- E) Disección de la raíz aórtica
**Correcta: C**
Explicación del banco: Es una rotura clásica del músculo papilar con la insuficiencia mitral secundaria. Insisto, lean el resumen de semiología cardíaca.

### [6] EUNACOM Diciembre 2018 · Pregunta 20 · confianza 0.9
Un paciente tiene diarrea de 3 días de evolución, asociada a malestar general marcado y vómitos alimentarios, con deterioro del estado general. Al examen físico se observa deshidratado, con FC: 110 x’, PA: 70/40 mmHg, abdomen doloroso, sin irritación peritoneal. Se solicitan exámenes, entre los que destacan Na+: 126 mEq/L, K+: 4,7 mEq/L, glicemia: 58 mg/dl, PCR: 4,0, blancos: 12.000 por mm3, creatinina 2,3 mg/dl. Se administran 3 litros de suero fisiológico, sin lograr estabilizar al paciente. ¿Cuál es el diagnóstico más probable?
- A) Insuficiencia renal aguda
- B) Shigelosis
- C) Peritonitis aguda
- D) Insuficiencia suprarrenal aguda
- E) Accidente vascular hemorrágico
**Correcta: D**
Explicación del banco: Tiene una crisis suprarrenal clásica: shock refractario, hiponatremia, hipoglicemia e hiperkalemia (el K+ está normal en este caso, pero en el límite alto). Sin embargo, también tiene una insuﬁciencia renal aguda (creatinina elevada), pero el diagnóstico más importante es la insuﬁciencia suprarrenal.

### [7] EUNACOM Julio 2016 · Pregunta 81 · confianza 0.9
Un Paciente de 52 años con historia de ronquidos frecuentes, de larga data, que desde hace 5 años, se asocia a somnolencia diurna excesiva y deterioro cognitivo. Al examen físico tiene frecuencia cardiaca de 75x' y presión arterial de 140/100 mmHg. Su IMC es de 35. Se realiza polisomnografía que evidencia índice de apenas de 50 eventos de apnea / hipopnea por hora, con predominio de los eventos obstructivos. ¿Cuál es la conducta más adecuada?
- A) Oxígeno nocturno
- B) C-PAP nocturno
- C) Cirugía bariátrica
- D) Uvulopalatoplastía
- E) Dispositivo orofaríngeo
**Correcta: B**
Explicación del banco: Tiene un síndrome de apnea-hipopnea obstructiva del sueño severa (>30 eventos por hora; moderada es entre 20 y 30; leve es <20), por lo que requiere C- PAP (se indica en la severa y en la que no responde al tratamiento médico de baja de peso y cambios de posición al dormir). La cirugía podría servir, pero requiere de obstrucción anatómica y además, dada la severidad, el C-PAP igual es de elección.

### [8] EUNACOM Julio 2025 · Pregunta 129 · confianza 0.85
Paciente cirrótico hospitalizado con ascitis en tratamiento con cefotaxima por PBE. A las 72h persiste fiebre y deterioro. Cultivo del líquido ascítico: Escherichia coli. ¿Cuál es el significado clínico?
- A) E. coli es el agente más frecuente en PBE; el tratamiento es correcto si hay sensibilidad
- B) Cambiar a ceftriaxona
- C) Agregar metronidazol
- D) Cambiar a vancomicina
- E) Realizar paracentesis evacuadora urgente
**Correcta: A**
Explicación del banco: coli es el microorganismo más frecuente en PBE (40-50% de los casos). Si el antibiograma confirma sensibilidad a cefotaxima, el tratamiento es correcto. La falta de respuesta obliga a revisar antibiograma y buscar complicaciones.

### [9] EUNACOM Julio 2025 · Pregunta 155 · confianza 0.85
Hombre de 30 años que presenció un accidente de tránsito grave en que su mejor amigo resultó herido de gravedad. Desde entonces, hace 2 semanas, presenta insomnio, tristeza, dificultad de concentración en el trabajo y anhedonia. Sin ideación suicida. ¿Cuál es el diagnóstico más probable?
- A) Trastorno de pánico
- B) Trastorno de ansiedad generalizada
- C) Trastorno adaptativo
- D) Depresión mayor
- E) Trastorno de estrés agudo
**Correcta: C**
Explicación del banco: Trastorno adaptativo: síntomas emocionales/conductuales dentro de los 3 meses de un estresor identificable (accidente del amigo), con deterioro funcional pero sin cumplir criterios de depresión mayor (necesita ≥5 síntomas por ≥2 semanas con humor depresivo o anhedonia). Resolución espontánea esperada.

### [10] EUNACOM Diciembre 2022 · Pregunta 159 · confianza 0.85
Un paciente de 67 años, cirrótico por consumo de alcohol, es traído por sus familiares, ya que ha presentado deterioro de su estado general y compromiso de conciencia. Al examen físico está en sopor superficial, tiene fétor hepático, y sus signos vitales muestran T°: 38,3°C, FC: 85x’. PA: 130/85 mmHg. El examen abdominal muestra ascitis a tensión. Presenta asterixis, sin focalidad neurológica. ¿Cuál es el examen de elección para iniciar su estudio?
- A) Hemocultivos
- B) Hemograma
- C) Estudio de líquido ascítico
- D) Tomografía axial computarizada de abdomen
- E) Ecografía abdominal
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (Estudio de líquido ascítico). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Hemocultivos, Hemograma) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [11] EUNACOM Diciembre 2022 · Pregunta 145 · confianza 0.85
Un paciente de 80 años, con antecedente de cáncer de próstata avanzado, en tratamiento con hormonoterapia, presenta deterioro súbito del estado respiratorio, evolucionando con taquicardia y desaturación arterial. Se solicita angioTAC, que demuestra un tromboembolismo pulmonar derecho, por lo que se inicia terapia anticoagulante, sin embargo, evoluciona en malas condiciones generales, cayendo en insuficiencia respiratoria, colapso circulatorio y, finalmente, ausencia de pulso y respiración, por lo que se realiza reanimación avanzada, con múltiples desfibrilaciones y adrenalina, sin respuesta, por lo que se declara la muerte. ¿Cuál de las siguientes debe ser la causa de muerte inmediata en el certificado de defunción?
- A) Cáncer de próstata
- B) Insuficiencia respiratoria aguda
- C) Tromboembolismo pulmonar
- D) Falla multiorgánica
- E) Fibrilación ventricular
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Tromboembolismo pulmonar** (opción **C**). El TEP masivo con compromiso hemodinámico tiene estudio y tratamiento completamente diferentes De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [12] EUNACOM Julio 2017 · Pregunta 143 · confianza 0.85
Una mujer de 87 años, es institucionalizada por una demencia tipo Alzheimer. Al examen físico del ingreso se aprecia lo siguiente: INSERTAR FOTO ¿Cuál es la conducta más adecuada?
- A) Realizar cirugía de urgencia
- B) Realizar PAP y colposcopía
- C) Indicar pesario
- D) Realizar biopsia
- E) Cuidados paliativos
**Correcta: C**
Explicación del banco: Era un prolapso uterino completo. Si fuera una mujer sana, se haría cirugía electi- va (no de urgencia), pero dado que era una paciente con alzheimer avanzado, se puede dejar pesario.

### [13] EUNACOM Julio 2025 · Pregunta 12 · confianza 0.8
Mujer de 78 años con diagnóstico de Alzheimer moderado. Presenta agitación nocturna severa, intentos de golpear a cuidadores y deambulación sin propósito, que no cede con medidas no farmacológicas. ¿Cuál es el fármaco más apropiado?
- A) Donepezilo
- B) Haloperidol en dosis alta
- C) Risperidona 0.5 mg nocturno
- D) Memantina
- E) Quetiapina 25 mg nocturno
**Correcta: E**
Explicación del banco: Trastorno conductual en Alzheimer: quetiapina a dosis bajas (12.5-25 mg) es preferida por su mejor perfil de seguridad en el adulto mayor (menos efectos extrapiramidales que haloperidol/risperidona). Usar solo si medidas no farmacológicas fallan.

### [14] EUNACOM Diciembre 2022 · Pregunta 69 · confianza 0.8
Un hombre de 78 años, acude a control, ya que su esposa refiere que, desde hace algunos meses ha presentado movimientos involuntarios mientras se está quedando dormido, presentando también problemas de memoria que han ido en aumento y se han asociado a algunas ideas paranoides. Además, ha estado más apático y desmotivado, aunque sus dificultades han tenido un curso fluctuante, pero con tendencia a empeorar. En el examen físico se aprecia colaborador y amable, con cierto grado de rigidez en extremidades superiores e inferiores, sin focalidad neurológica. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Parkinson
- B) Enfermedad de Alzheimer
- C) Hidrocefalia normotensiva
- D) Síndrome confusional agudo
- E) Demencia por cuerpos de Lewy
**Correcta: B**
Explicación del banco: Diagnóstico: **Enfermedad de Alzheimer** (opción **B**). Esta clase cubre la anemia ferropénica, la anemia más frecuente. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [15] EUNACOM Diciembre 2018 · Pregunta 121 · confianza 0.8
Un paciente de 80 años, con antecedente de enfermedad de Alzheimer, hipotiroidismo y artrosis, en tratamiento con donepecilo, levotiroxina y paracetamol, presenta escapes frecuentes de orina y diarrea. ¿Cuál es la conducta más adecuada?
- A) Agregar memantina
- B) Disminuir la dosis de levotiroxina
- C) Agregar oxibutinina
- D) Disminuir la dosis de donepecilo
- E) Aumentar la dosis de levotiroxina
**Correcta: D**
Explicación del banco: El síndrome colinérgico: diarrea e incontinencia urinaria es una complicación frecuente del donepecilo. La metformina solo produce diarrea.

### [16] EUNACOM Diciembre 2024 · Pregunta 33 · confianza 0.75
Hombre politrauma se hace TAC hematoma epidural + neumotórax con desviación de tráquea + derrame pericardico extenso, que vuelve del TAC con deterioro hemodinamico. Conducta inicial: a.​ Pleurostomía
- B) Reanimación
- C) Pericardiocentesis yo puse pericardiocentesis, porque si es un NT a tensión necesita la punción con aguja antes q una pleurostomía
- C) Laparotomía exploratoria
- D) Cirugía laparoscópica
- E) Manejo conservador
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Pericardiocentesis yo puse pericardiocentesis, porque si es un NT a tensión necesita la punción con aguja antes q una pleurostomía** (opción **C**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención.

### [17] EUNACOM Agosto 2021 · Pregunta 118 · confianza 0.75
Un paciente de 85 años, con antecedente de deterioro funcional y cognitivo inicial y diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850 mg dos veces al día y glibenclamida 5 mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglobina glicosilada de 6,9%. Su examen físico no muestra alteraciones. ¿Cuál es la conducta más adecuada?
- A) Suspender la glibenclamida
- B) Disminuir la dosis de glibenclamida a 5 mg una vez al día
- C) Suspender metformina
- D) Disminuir dosis de metformina
- E) Mantener el tratamiento sin cambios
**Correcta: A**
Explicación del banco: Diagnóstico: **Suspender la glibenclamida** (opción **A**). La glicemia de las 3 am está determinada por la insulina nocturna, cuyo peak de acción es a las 5. El tratamiento de la diabetes mellitus tipo 2 se basa en un enfoque escalonado que comienza siempre con cambios en el estilo de vida (dieta y ejercicio) más metformina como fármaco de primera línea. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [18] EUNACOM Julio 2015 · Pregunta 117 · confianza 0.75
Un paciente de 55 años, alcohólico, con daño hepático crónico, es traído al servicio de urgencia por deterioro del estado general, dolor abdominal y fiebre de 38,5 grados Celsius. Al examen físico está quejumbroso, en sopor, con dolor a la palpación abdominal y ascitis severa. Se solicita un hemograma que muestra hemoglobina 15 mg/dl, blancos de 15.000 por mm3 y plaquetas de 190.000 por mm3 y sus pruebas hepáticas muestran un daño hepático crónico en etapa C de Child Pugh . ¿Cuál es el examen más adecuado para continuar el estudio de este paciente?
- A) Ecografía abdominal
- B) TAC de abdomen y pelvis
- C) Colangioresonancia
- D) Estudio de líquido ascítico
- E) Endoscopía digestiva alta
**Correcta: D**
Explicación del banco: Probablemente tiene una PBE, que lo descompensa. De todos modos, todo cirrótico descompensado, con ascitis, debe estudiarse para descartar la PBE (peritonitis bacteriana espontánea).

### [19] EUNACOM Enero 2023 · Pregunta 110 · confianza 0.72
Paciente con tiroidectomía total e hipoparatiroidismo, presenta debilidad, parestesias y signo de Chvostek positivo. ¿Cuál es el tratamiento inicial?
- A) Calcitriol oral más calcio oral
- B) Gluconato de calcio endovenoso
- C) Carbonato de calcio 1 g oral
- D) PTH recombinante subcutáneo
- E) Terlipresina endovenosa
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Gluconato de calcio endovenoso** (opción **B**). Gluconato de calcio endovenoso. Sin tratamiento evoluciona a cretinismo (déficit cognitivo irreversible). De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [20] EUNACOM Diciembre 2025 · Pregunta 61 · confianza 0.7
Un niño de 5 años es hospitalizado por una neumonía con hemocul8vos posi8vos para Streptococcus pneumoniae. Está en tratamiento con cejriaxona endovenosa. Al tercer día evoluciona con deterioro del estado general y oliguria, por lo que se solicitan exámenes que muestran crea8nina: 3,1 mg/dL, BUN: 68 mg/dL, hemograma con hematocrito: 27%, hemoglobina: 9 g/dL, glóbulos blancos: 13.000/mm³, 70% de neutróﬁlos y plaquetas 70.000/mm³, el 8empo de protrombina resulta 16,2 segundos y los niveles de complemento muestran C3: 81 mg/dL (normal: 90–180 mg/dL) y C4: 8,5 mg/dL (normal: 11–40 mg/dL). El sedimento de orina muestra hematuria con 15% de dismorﬁa. ¿Cuál es el diagnós8co más probable?
- A) Coagulación intravascular diseminada
- B) Glomerulonefri2s aguda posinfecciosa
- C) Síndrome hemolí2co urémico
- D) Sepsis por neumococo
- E) Insuﬁciencia renal aguda prerrenal
**Correcta: C**
Explicación del banco: Es un síndrome hemolítico urémico (SHU) clásico, cuyas causas más frecuentes son infecciones por 1. Escherichia coli enterohemorrágica, 2. Shigella, 3. Streptococcus pneumoniae y 4. otras bacterias como Campylobacter, Salmonella y Mycoplasma. El SHU se caracteriza por una insuﬁciencia renal aguda con anemia hemolítica y plaquetopenia. Puede tener hematuria dismórﬁca e incluso hipocomplementemia, como en este caso. A pesar de que Gene varios elementos de la glomerulonefriGs posGnfecciosa (falla renal, hipocomplementemia, hematuria dismórﬁca), esta suele ocurrir varios días después de la infección y no en agudo y generalmente es por Streptococcus pyogenes y no Gene plaquetopenia (sí puede tener algo de anemia dilucional).

### [21] EUNACOM Diciembre 2018 · Pregunta 25 · confianza 0.7
Un paciente, con antecedente de tiroidectomía total e hipoparatiroidismo, en tratamiento con levotiroxina, calcio y vitamina D, por vía oral, presenta diarrea aguda, de 2 días de evolución, abundante. Evoluciona con astenia, marcada debilidad, dolor en las extremidades inferiores y calambres. Al examen físico tiene reflejos osteotendíneos vivos y signo de Chvostek positivo. ¿Cuál es la conducta inicial más adecuada?
- A) Suero fisiológico endovenoso
- B) Gluconato de calcio endovenoso
- C) Suero glucosado con potasio endovenoso
- D) Suero Ringer endovenoso
- E) Hidrocortisona endovenosa
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Gluconato de calcio endovenoso** (opción **B**). Tiene una hipocalcemia aguda grave clínica. Se debe tratar con gluconato de calcio urgente.. Sin tratamiento evoluciona a cretinismo (déficit cognitivo irreversible). De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [22] EUNACOM Julio 2017 · Pregunta 1 · confianza 0.7
Una paciente de 92 años, con antecedente de enfermedad de Alzheimer por lo que está institucionalizada, presenta un cuadro de astenia, debilidad, baja de peso de 6 kilos en los últimos dos meses, asociado a hematoquesia intermitente en algunas oportunida- des, que los familiares atribuyen a hemorroides externos. Al examen físico presenta un abdomen blando, depresible, con ruidos hidroaéreos presentes. Su piel se aprecia algo pálida y sus signos vitales son normales. ¿Con que examen debe iniciarse el estudio en esta paciente?
- A) Ecografía abdominal
- B) TAC de abdomen y pelvis
- C) Resonancia magnética de abdomen y pelvis
- D) Colonoscopía corta
- E) Colonoscopía completa
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Colonoscopía completa). Se sospecha un cáncer de colon, que se estudia con colonoscopía completa. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh.

### [23] EUNACOM Julio 2017 · Pregunta 34 · confianza 0.7
Un paciente de 65 años, es traído por su señora, dado que presenta dificultades en sus actividades de la vida diaria. Ella refiere que ha estado repetitivo con errores en el manejo del dinero, así como dificultad para realizar actividades que normalmente rea- lizaba sin problemas. El niega estos síntomas. Al examen físico presenta frecuencia car- diaca 68 latidos por minutos, con presión arterial de 130/85 mmHg, sin alteraciones en el examen segmentario, ni signos de focalidad neurológica. El diagnóstico más probable es:
- A) Delirium
- B) Demencia vascular
- C) Depresión del adulto mayor
- D) Demencia tipo Alzheimer
- E) Demencia por cuerpos de Lewi
**Correcta: D**
Explicación del banco: Parece una demencia inicial y dado que no tiene indicadores de otra patología, lo más probable es que sea una demencia tipo Alzheimer.

### [24] EUNACOM Agosto 2021 · Pregunta 131 · confianza 0.68
Una paciente de 75 años, con historia de enfermedad de Alzheimer de 3 años de evolución, con buena funcionalidad presenta un cuadro en que agrede a otras personas y se muestra muy angustiada. Al examen físico le cuesta nombrar algunos objetos, no puede decir los días de la semana de manera invertida y se muestra poco atenta. Además, refiere que su padre ya fallecido está presente en la sala. Se hospitaliza para estudio y manejo y, al inicio, se muestra cooperadora y amable, pero luego exige que la dejen ir e intenta escapar del hospital y agredir al personal de salud. ¿Cuál es el fármaco inicial para el manejo de esta paciente?
- A) Clorpromazina
- B) Diazepam
- C) Mirtazapina
- D) Alprazolam
- E) Haloperidol
**Correcta: E**
Explicación del banco: Tiene un delírium o síndrome confusional agudo clásico. Se trata con el manejo de la patología de base (ej. infecciones, infartos, etc.) y con antipsicóticos, de preferencia haloperidol en dosis bajas (0,5 mg IM) o bien, risperidona 0,5 a 1 mg VO.

### [25] EUNACOM Diciembre 2025 · Pregunta 24 · confianza 0.65
Un paciente de 77 años con enfermedad de Alzheimer inicial, en tratamiento con donepezilo 10 mg durante el día y trazodona 50 mg por la noche, presenta dos semanas de agitación nocturna asociada a la idea de que le están robando. Esto ha generado conﬂictos con sus cuidadores y, además, no ha permi8do que lo bañen. Desde hace dos días presenta alucinaciones visuales. El resto de su examen Fsico es normal y su examen neurológico no 8ene signos focales. Además de realizar exámenes, en busca de un foco infeccioso, ¿qué fármaco es de elección para su manejo actual?
- A) Diazepam
- B) Haloperidol
- C) Lorazepam
- D) Risperidona
- E) Amitrip2lina
**Correcta: B**
Explicación del banco: Pregunta difícil y discuGble. Claramente Gene un delirium y hay que darle un antipsicótico. El clásico que se ha usado siempre es el haloperidol, pero los antipsicóticos aVpicos, como la risperidona, cuentan con buena evidencia y seguridad. En Parkinson y demencia por cuerpos de Lewy, se contraindica el haloperidol e incluso la risperidona por el riesgo de síntomas extrapiramidales y la respuesta suele ser queGapina. En otras demencias, como la enfermedad de Alzheimer, es discuGble, pero muchas guías más modernas se inclinan más a los antipsicóticos aVpicos, como la risperidona (por eso la dejaremos como correcta), a menos que sea un cuadro de agitación muy severo, en que se sigue usando el haloperidol.
