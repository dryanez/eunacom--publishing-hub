# CLASE neuro-21 · Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente

Escribe `classes/lessons/neuro-21.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-21" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-18: Neurologia 10.18: Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento
- neuro-20: Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS
- neuro-22: Neurologia 10.22: Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)
- neuro-23: Neurologia 10.23: Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES
- neuro-24: Neurologia 10.24: Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-21",
  "classId": "neuro-21",
  "tier": 3,
  "blockNum": 5,
  "blockName": "Geriatría Clínica y Grandes Síndromes Geriátricos",
  "topicLabel": "10.21",
  "title": "Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente",
  "perfilCode": "1.07.2.005",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Hospitalario / Ambulatorio",
  "ges": "Sin garantía GES directa · Emergencia neuropsiquiátrica transversal de máxima prevalencia en servicios médico-quirúrgicos, UPC y urgencias. Marcador independiente de morbimortalidad, institucionalización y declive cognitivo acelerado.",
  "reconstrucciones": "EUNACOM 2023 (Q#112) · EUNACOM 2021 (Q#45) · EUNACOM Julio 2019 (Q#104) · EUNACOM Diciembre 2017 (Q#88) · EUNACOM Julio 2015 (Q#51)",
  "frecuencia": "Máxima rentabilidad geriátrica · Pregunta obligada en urgencias, medicina interna y geriatría",
  "algoTitle": "Algoritmo de Abordaje Diagnóstico Etiológico y Terapéutico del Síndrome Confusional Agudo (Delirium)",
  "diagram": {
    "title": "Algoritmo de Abordaje del Síndrome Confusional Agudo (Delirium)",
    "svg": "<svg viewBox=\"0 0 620 433\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Deterioro Agudo y Fluctuante de Cognición o Nivel de Alerta</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Sospecha clínica en adulto mayor hospitalizado o institucionalizado</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Evaluar en ≤ 10 minutos</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Aplicación de Criterios Diagnósticos CAM (Confusion Assessment Method)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">1. Inicio agudo y fluctuante + 2. Inatención + [3.</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Pensamiento desorganizado Ó 4. Nivel alterado]</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Cumple Criterios CAM Positivo (1 + 2 + [3 ó 4])?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Sensibilidad &gt; 94%, Especificidad &gt; 89% para Delirium</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">CAM Positivo (Delirium Confirmado)</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">CAM Negativo (Atención Preservada)</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Pesquisa Sistemática Etiológica (I WATCH DEATH)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">Infección (ITU/NAC), Retención urinaria, Fecaloma,</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Fármacos (anticolinérgicos/BZD), Metabólico</text>\n  <rect class=\"dec\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Explorar Diagnóstico Diferencial Crónico</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Demencia primaria (Alzheimer/Lewy), Depresión</text>\n  <text class=\"sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">mayor (Pseudodemencia), Afasia aguda aislada</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Intervención No Farmacológica Multicomponente Inmediata (1ª Línea)</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Reorientación continua, retiro de sujeciones, hidratación oral,</text>\n  <text class=\"accS\" x=\"310\" y=\"341\" text-anchor=\"middle\">corrección sensorial (lentes/audífonos), sueño fisiológico</text>\n  <path class=\"ln\" d=\"M310,353 V375\"/>\n  <rect class=\"acc\" x=\"100\" y=\"375\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"390\" text-anchor=\"middle\" font-weight=\"700\">Farmacoterapia de Rescate (Exclusivo en Agitación Severa o Riesgo Vital)</text>\n  <text class=\"accS\" x=\"310\" y=\"402\" text-anchor=\"middle\">Haloperidol 0.5 – 1 mg VO/IM c/8-12 h</text>\n  <text class=\"accS\" x=\"310\" y=\"413\" text-anchor=\"middle\">Quetiapina 12.5 – 25 mg si Parkinson o Lewy · PROSCRIBIR Benzodiacepinas</text>\n</svg>"
  },
  "contexto": "El síndrome confusional agudo (delirium) es una disfunción cerebral difusa, aguda y fluctuante que afecta hasta al 30-50% de los pacientes adultos mayores hospitalizados en servicios de medicina, cirugía y cuidados intensivos. No constituye una patología psiquiátrica primaria, sino un síntoma cardinal de descompensación sistémica severa. Su reconocimiento inmediato mediante los criterios estandarizados CAM, la búsqueda meticulosa y resolución del factor precipitante subyacente y la instauración de medidas ambientales no farmacológicas multicomponentes son conductas obligatorias para reducir la mortalidad intrahospitalaria, que duplica a la de pacientes comparables no delirantes.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología Neurobiológica y Modelo Interactivo de Vulnerabilidad",
      "paragraphs": [
        "La neurobiología del delirium responde a una claudicación aguda de la neurotransmisión cerebral ante estresores orgánicos. El modelo fisiopatológico universalmente aceptado postula una <strong>hipoactividad colinérgica cerebral</strong> combinada con una <strong>hiperactividad dopaminérgica</strong> central, a la que se suman disfunciones noradrenérgicas, serotoninérgicas y GABAérgicas. De forma paralela, la activación de la cascada inflamatoria sistémica (inducida por infecciones, sepsis, cirugía mayor o daño tisular) libera citoquinas proinflamatorias circulantes (TNF-α, IL-1β, IL-6, IL-8), las cuales aumentan la permeabilidad de la barrera hematoencefálica, activan la microglía residente, promueven neuroinflamación y alteran la fosforilación oxidativa mitocondrial neuronal.",
        "Clínicamente, el delirium se estructura bajo un <strong>modelo interactivo de vulnerabilidad</strong>: el cuadro resulta de la compleja interacción entre factores <em>predisponentes</em> basales y factores <em>precipitantes</em> agudos. A mayor vulnerabilidad previa del huésped (edad &gt; 75 años, deterioro cognitivo o demencia subyacente, fragilidad, polifarmacia, déficit sensorial auditivo o visual no corregido, dependencia funcional), menor es la intensidad del estímulo precipitante necesario para desencadenar el delirium. Así, en un paciente con demencia avanzada, un simple cambio de habitación, un fecaloma o una retención urinaria asintomática bastan para desatar un cuadro confusional severo; por el contrario, en un adulto mayor cognitivamente sano y robusto se requiere una noxa de gran magnitud (shock séptico, cirugía cardíaca con bypass, hipoxia crítica o intoxicación medicamentosa masiva) (véase Algoritmo 10.21)."
      ]
    },
    {
      "subhead": "2. Criterios Diagnósticos CAM y Subtipos Motores de Delirium",
      "paragraphs": [
        "El diagnóstico del delirium es estrictamente <strong>clínico</strong> y no depende de exámenes de laboratorio ni de neuroimagen. El instrumento estandarizado de mayor sensibilidad (&gt; 94%) y especificidad (&gt; 89%) validado internacionalmente y por el Ministerio de Salud es el <strong>Confusion Assessment Method (CAM)</strong>. Para establecer el diagnóstico formal de delirium se exige el cumplimiento mandatorio de los <strong>criterios 1 y 2</strong>, más al menos <strong>uno de los criterios 3 o 4</strong> (véase Tabla 10.21: Criterios Diagnósticos CAM):",
        "• <strong>Criterio 1: Inicio agudo y curso fluctuante:</strong> Evidencia por anamnesis con familiares o registro de enfermería de un cambio brusco en el estado mental basal del paciente (instaurado en horas o días), que fluctúa en gravedad a lo largo del día con exacerbación vespertina o nocturna (fenómeno de <em>sundowning</em>).",
        "• <strong>Criterio 2: Inatención cardinal:</strong> El paciente presenta dificultad evidente para fijar, mantener o desviar la atención. Se pesquisa solicitando deletrear la palabra \"MUNDO\" al revés, recitar los meses del año en orden inverso (diciembre a enero) o contar del 20 al 1. Es el rasgo patognomónico y diferenciador clave frente a la demencia.",
        "• <strong>Criterio 3: Pensamiento desorganizado:</strong> Conversación incoherente, divagatoria, fuga de ideas, respuestas ilógicas o inconsistentes.",
        "• <strong>Criterio 4: Alteración del nivel de conciencia:</strong> Cualquier estado que no sea la alerta normal, abarcando desde la hipervigilancia extrema hasta la letargia, estupor o coma.",
        "Desde el punto de vista psicomotor, el delirium se clasifica en tres subtipos: <strong>1) Hipoactivo (50% de los casos):</strong> Caracterizado por somnolencia, letargia, bradipsiquia, pasividad motora y reducción del lenguaje espontáneo; es el subtipo más frecuente en adultos mayores, el más subdiagnosticado (confundido con depresión o senilidad) y el que asocia <strong>mayor tasa de complicaciones y mortalidad intrahospitalaria</strong> por inmovilidad, atelectasias, úlceras por presión y aspiración; <strong>2) Hiperactivo (25%):</strong> Con agitación psicomotora, inquietud, taquipsiquia, alucinaciones visuales floridas, hostilidad e hiperreactividad simpática autonómica; y <strong>3) Mixto (25%):</strong> Alternancia rápida e impredecible entre periodos hipoactivos e hiperactivos."
      ]
    },
    {
      "subhead": "3. Diagnóstico Diferencial Riguroso: Delirium vs Demencia vs Depresión",
      "paragraphs": [
        "La distinción diferencial entre el delirium, la demencia y el trastorno depresivo mayor en el adulto mayor es una de las competencias más evaluadas en el EUNACOM (véase Tabla de Gravedad 10.21: Diagnóstico Diferencial Delirium vs Demencia vs Depresión).",
        "A diferencia de la <strong>demencia</strong>, cuyo inicio es insidioso (meses a años), con curso progresivo y donde la atención permanece relativamente preservada hasta estadios muy avanzados de la enfermedad, el <strong>delirium</strong> irrumpe súbitamente en horas o días, su curso es marcadamente fluctuante y la inatención es inmediata y prominente. Sin embargo, debe recordarse que la demencia preexistente es el <em>principal factor predisponente</em> para desarrollar delirium, conformando el frecuente cuadro de \"delirium sobreimpuesto a demencia\".",
        "Frente a la <strong>depresión</strong> (pseudodemencia depresiva), el paciente anciano deprimido mantiene la atención intacta en pruebas estructuradas, presenta respuestas características de \"no sé\" o falta de esfuerzo ante preguntas de memoria, conserva el ciclo vigilia-sueño sin fluctuaciones rápidas de conciencia y no manifiesta el pensamiento desorganizado agudo ni las alucinaciones visuales del delirium."
      ]
    },
    {
      "subhead": "4. Pesquisa Sistemática Etiológica: Mnemotecnia I WATCH DEATH",
      "paragraphs": [
        "Identificado el delirium mediante CAM, el objetivo clínico urgente es identificar y corregir el gatillante orgánico. Ningún delirium debe catalogarse como \"idiopático\". La mnemotecnia clínica clásica <strong>I WATCH DEATH</strong> orienta el estudio etiológico escalonado:",
        "• <strong>I (Infección):</strong> Infección del tracto urinario (ITU aguda, piuria, bacteriuria sintomática) y neumonía adquirida en la comunidad (NAC) son los dos focos más comunes; también sepsis abdominal y bacteriemia.",
        "• <strong>W (Withdrawal / Abstinencia):</strong> Supresión brusca de alcohol (<em>Delirium Tremens</em>) o deprivación aguda de benzodiacepinas u opioides.",
        "• <strong>A (Agudo metabólico / Hidroelectrolítico):</strong> Hipoglicemia, deshidratación hiperosmolar, hiponatremia o hipernatremia, hipo/hiperkalemia, hipercalcemia, uremia o falla hepática aguda.",
        "• <strong>T (Trauma):</strong> Fractura ósea no desplazada (cadera/costal) o hematoma subdural subagudo/crónico tras traumatismo craneano menor no reportado.",
        "• <strong>C (SNC / Intracraneal):</strong> ACV isquémico agudo, hematoma intraparenquimatoso, meningitis/encefalitis o estado epiléptico no convulsivo.",
        "• <strong>H (Hipoxia / Hipercapnia):</strong> Insuficiencia cardíaca congestiva descompensada, edema pulmonar agudo, EPOC exacerbado, tromboembolismo pulmonar (TEP) o infarto agudo al miocardio (IAM silente o atípico en geriatría).",
        "• <strong>D (Deficiencias vitamínicas):</strong> Déficit agudo de tiamina (Encefalopatía de Wernicke) o déficit de vitamina B12.",
        "• <strong>E (Endocrinopatías):</strong> Tormenta tiroidea, coma mixedematoso, crisis tiotóxica o insuficiencia suprarrenal aguda.",
        "• <strong>A (Agentes farmacológicos / Tóxicos):</strong> La causa médica iatrogénica más prevenible. Destacan fármacos con actividad anticolinérgica (antihistamínicos de 1ª generación como clorfenamina, antidepresivos tricíclicos, antiespasmódicos como pargeverina), benzodiacepinas, opioides, corticoesteroides sistémicos, digoxina y anticonvulsivantes.",
        "• <strong>T (Trombosis / Isquemia sistémica):</strong> Isquemia mesentérica o síndrome coronario agudo sin supradesnivel ST.",
        "• <strong>H (Heces y Orina - Retención mecánica):</strong> <em>Regla de Oro del EUNACOM:</em> Dos causas no infecciosas sumamente prevalentes que pasan desapercibidas en el examen físico son el <strong>globo vesical (retención aguda de orina)</strong> y la <strong>impactación fecal (fecaloma)</strong>. La colocación de una sonda vesical descompresiva o la evacuación rectal de un fecaloma resuelven el delirium de manera inmediata sin requerir psicofármacos."
      ]
    },
    {
      "subhead": "5. Abordaje Terapéutico Multicomponente y Manejo Farmacológico de Rescate",
      "paragraphs": [
        "El tratamiento del delirium se fundamenta en dos ejes complementarios e indisolubles (véase Tabla de Tratamiento 10.21: Protocolo Multicomponente y Farmacoterapia):",
        "<strong>1. Medidas Ambientales y No Farmacológicas Multicomponentes (Primera Línea Mandatoria):</strong> Inspiradas en el modelo HELP (<em>Hospital Elder Life Program</em>), constituyen la única intervención con sólida evidencia en reducir la duración y severidad del delirium. Incluyen: reorientación verbal frecuente y tranquila por parte del personal y familiares (relojes visibles, calendarios, ventanas con luz natural); reposición inmediata de ayudas sensoriales (colocar lentes ópticos y audífonos basales del paciente); favorecer la arquitectura fisiológica del sueño (minimizar ruidos y toma de signos vitales nocturnos, apagar luces artificiales de noche, mantener iluminación diurna); hidratación oral y movilización precoz fuera de la cama; retiro sistemático de sondas y vías venosas innecesarias; y acompañamiento familiar continuo en sala.",
        "<em>Proscripción absoluta de sujeciones mecánicas:</em> Las contenciones físicas no previenen caídas ni extubaciones, sino que agravan exponencialmente la agitación psicomotora, causan isquemia de extremidades, asfixia posicional, rabdomiolisis y perpetúan el delirium.",
        "<strong>2. Farmacoterapia de Rescate (Indicación Restrictiva y Excepcional):</strong> Los fármacos antipsicóticos NO previenen ni curan el delirium, ni reducen la mortalidad; su uso se restringe con rigor a pacientes con <strong>agitación psicomotora severa que pone en peligro inminente la integridad física del paciente o de terceros</strong>, o cuando la agitación impide la realización de tratamientos de soporte vital indispensables (ej. intento reiterado de retiro de tubo endotraqueal o accesos vasculares mayores), siempre a las dosis más bajas posibles y por el menor tiempo necesario.",
        "• <strong>Fármaco de elección estándar: Haloperidol</strong>. Dosis geriátrica de inicio: <strong>0.5 a 1 mg vía oral o intramuscular</strong> cada 8 a 12 horas (máximo 2 a 3 mg/día). Presenta mínimo efecto anticolinérgico y no induce depresión respiratoria ni hipotensión. Monitorear electrocardiograma basal por riesgo de prolongación del intervalo QTc y taquicardia ventricular en <em>torsades de pointes</em>.",
        "• <strong>Antipsicóticos atípicos (alternativas):</strong> Quetiapina (12.5 a 25 mg VO cada 12-24 h), Risperidona (0.25 a 0.5 mg VO cada 12 h) u Olanzapina (2.5 a 5 mg VO al acostarse). Tienen menor incidencia de efectos extrapiramidales.",
        "• <em>Regla de Oro en Parkinson y Demencia por Cuerpos de Lewy:</em> El Haloperidol está <strong>formalmente CONTRAINDICADO</strong> por desencadenar parkinsonismo severo irreversible, catatonía y síndrome neuroléptico maligno letal. El fármaco de elección absoluta es la <strong>Quetiapina</strong> (a dosis de 12.5 a 25 mg VO) o Clozapina.",
        "• <em>Regla de Oro sobre Benzodiacepinas:</em> Las benzodiacepinas (Diazepam, Lorazepam, Midazolam) están <strong>estrictamente CONTRAINDICADAS</strong> en el delirium geriátrico común, dado que generan sedación excesiva, depresión respiratoria, ataxia, desinhibición paradójica y perpetúan el cuadro confusional. La <strong>ÚNICA excepción médica</strong> en que las benzodiacepinas son el tratamiento de primera línea de elección es el <strong>Delirium Tremens (abstinencia alcohólica)</strong> o el síndrome de abstinencia a benzodiacepinas/sedantes, donde actúan compensando la hiperexcitabilidad GABAérgica de rebote."
      ]
    }
  ],
  "table": {
    "title": "Criterios Diagnósticos CAM (Confusion Assessment Method) y Pesquisa Clínica",
    "headers": [
      "Criterio CAM",
      "Descripción Clínica Operativa",
      "Método de Evaluación al Lado de la Cama",
      "Interpretación y Rendimiento"
    ],
    "rows": [
      [
        "1. Inicio Agudo y Curso Fluctuante",
        "Cambio súbito respecto al estado cognitivo basal previo (horas o días) con fluctuación diurna y acentuación vespertina/nocturna (sundowning)",
        "Anamnesis rigurosa con familiares y registro de cambios conductuales turno a turno por el personal de enfermería",
        "Requisito OBLIGATORIO (debe estar presente siempre para diagnóstico positivo)"
      ],
      [
        "2. Inatención Cardinal",
        "Dificultad marcada para enfocar, sostener o cambiar la atención; el paciente se distrae con estímulos irrelevantes o no sigue el hilo",
        "Pruebas de atención activa: deletrear M-U-N-D-O al revés, meses del año en orden inverso (diciembre a enero) o restar de 7 en 7",
        "Requisito OBLIGATORIO (marca la diferencia biológica con demencias puras)"
      ],
      [
        "3. Pensamiento Desorganizado",
        "Discurso incoherente, divagatorio, saltos ilógicos de tema a tema, ideas delirantes transitorias o desorientación temporoespacial franca",
        "Evaluación durante el diálogo clínico espontáneo; preguntas directas de orientación personal, temporal y geográfica",
        "Requisito VARIABLE (debe cumplirse Criterio 3 O Criterio 4 para confirmar)"
      ],
      [
        "4. Alteración del Nivel de Conciencia",
        "Cualquier estado distinto a la alerta lúcida normal: hiperalerta/hipervigilancia, somnolencia, letargia, estupor o coma reactivo",
        "Observación del contacto visual, respuesta al llamado verbal suave, al tacto o a estímulos auditivos ambientales",
        "Requisito VARIABLE (CAM Positivo = Criterio 1 + Criterio 2 + [Criterio 3 ó 4])"
      ]
    ]
  },
  "severityTable": {
    "title": "Diagnóstico Diferencial Clínico: Delirium vs Demencia vs Depresión en la Persona Mayor",
    "headers": [
      "Parámetro Clínico",
      "Delirium (Síndrome Confusional)",
      "Demencia (Trastorno Neurocognitivo Mayor)",
      "Depresión Mayor (Pseudodemencia)"
    ],
    "rows": [
      [
        "Instalación / Inicio",
        "Agudo (horas a días), súbito y perfectamente fechable por familiares",
        "Insidioso, crónico, lento y progresivo (meses a años)",
        "Subagudo (semanas a meses), frecuentemente asociado a duelo o pérdida"
      ],
      [
        "Curso Diario",
        "Fluctuante, con lucidez intermitente y empeoramiento nocturno (sundowning)",
        "Estable y lentamente progresivo; empeora sutilmente al fatigarse",
        "Constante; frecuentemente peor en las mañanas al despertar"
      ],
      [
        "Nivel de Alerta / Conciencia",
        "Alterado (hipervigilante, letárgico, estuporoso o fluctuante)",
        "Preservado y lúcido hasta etapas muy avanzadas terminales",
        "Intacto; el paciente está alerta aunque con psicomotricidad lenta"
      ],
      [
        "Atención y Concentración",
        "Gravemente alterada e inatenta desde el inicio (eje cardinal)",
        "Conservada en fases leves y moderadas; se pierde tardíamente",
        "Conservada en pruebas dirigidas; aparente falta de esfuerzo motivacional"
      ],
      [
        "Memoria y Respuestas",
        "Amnesia anterógrada y retrógrada inmediata por falla atencional severa",
        "Pérdida de memoria episódica reciente; confabulaciones compensatorias",
        "Respuestas frecuentes de \"no sé\" o abandono rápido; mejora con insistencia"
      ],
      [
        "Fenómenos Perceptuales",
        "Alucinaciones visuales vívidas y terrores nocturnos muy comunes",
        "Ausentes en etapas iniciales (salvo alucinaciones visuales precoces en Lewy)",
        "Raras; ideas delusivas de culpa, ruina o hipocondría en depresión psicótica"
      ],
      [
        "Actividad Psicomotora",
        "Hiperactiva (agitación/temblor), hipoactiva (letargia) o mixta",
        "Normal; puede haber apraxia motora o vagabundeo en fases intermedias",
        "Inhibición psicomotora marcada o inquietud ansiosa"
      ],
      [
        "Reversibilidad y Pronóstico",
        "Potencialmente 100% reversible si se resuelve la causa médica precozmente",
        "Irreversible y progresiva (salvo hidrocefalia normotensiva o déficit B12)",
        "Reversible con tratamiento antidepresivo y psicoterapia orientada"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo Terapéutico Multicomponente y Farmacoterapia de Rescate en Delirium Geriátrico",
    "headers": [
      "Línea de Manejo",
      "Intervención / Fármaco",
      "Dosis / Esquema Terapéutico",
      "Objetivos Clínicos y Reglas de Oro EUNACOM"
    ],
    "rows": [
      [
        "1ª Línea No Farmacológica (HELP)",
        "Medidas Ambientales y Neurocognitivas",
        "Reorientación verbal continua · Relojes/calendarios · Acompañamiento familiar en sala · Luz natural diurna y silencio nocturno",
        "Intervención universal obligatoria; reduce duración del delirium en > 40%. NO usar sujeciones físicas mecánicas"
      ],
      [
        "1ª Línea No Farmacológica",
        "Soporte Fisiológico y Corrección Sensorial",
        "Reposición de lentes ópticos y audífonos · Hidratación guiada · Retiro de sondas vesicales y vías venosas · Kinesioterapia motora precoz",
        "Restaura la aferencia sensorial y previene complicaciones de inmovilidad (escaras, trombosis y neumonía aspirativa)"
      ],
      [
        "Resolución de Gatillantes Mecánicos",
        "Descompresión Vesical y Evacuación Rectal",
        "Sondaje vesical transitorio si globo vesical · Tacto rectal y enema evacuante si impacto fecal (fecaloma)",
        "Regla de Oro: resuelve el delirium en minutos en pacientes con agitación inexplicada post-quirúrgica o postrada"
      ],
      [
        "2ª Línea Farmacológica de Rescate",
        "Haloperidol (VO / IM)",
        "0.5 a 1 mg VO o IM c/8-12 h (máx 2-3 mg/día) · Titular a la dosis mínima eficaz y suspender en 24-48 h",
        "Elección estándar ante agitación severa con riesgo vital. Evaluar QTc basal. PROSCRITO en Enfermedad de Parkinson"
      ],
      [
        "Alternativa en Parkinson / Lewy",
        "Quetiapina oral",
        "12.5 a 25 mg VO al acostarse o c/12 h (titulable hasta 50 mg/día)",
        "Elección obligatoria en Parkinson o Demencia por Cuerpos de Lewy. Menor efecto extrapiramidal"
      ],
      [
        "Alternativa Atípica General",
        "Risperidona oral",
        "0.25 a 0.5 mg VO cada 12 horas (máximo 1.5 mg/día)",
        "Alternativa en pacientes con delirium hiperactivo sin patología extrapiramidal subyacente"
      ],
      [
        "Excepción: Delirium Tremens",
        "Benzodiacepinas (Diazepam / Lorazepam)",
        "Diazepam 5 a 10 mg EV lento o Lorazepam 1 a 2 mg EV/VO c/4-6 h según escala CIWA-Ar",
        "ÚNICA indicación de benzodiacepinas en delirium (abstinencia alcohólica). En todo otro delirium están CONTRAINDICADAS"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 79 años, autovalente con antecedente de hipertensión arterial y artrosis de rodilla en tratamiento con enalapril y paracetamol, cursa el segundo día postoperatorio de una artroplastia total de cadera programada. Durante la madrugada comienza bruscamente con inquietud extrema, habla incoherencias diciendo que \"hay animales debajo de la cama\", intenta retirarse la vía venosa periférica y no reconoce a su hija. Al examen físico: PA 145/85 mmHg, FC 98 lpm, afebril (T° 36.8 °C), satO₂ 95% ambiental. Se encuentra vigil pero desorientado en tiempo y espacio, incapaz de deletrear la palabra MUNDO al revés ni de seguir una orden simple sin distraerse. El abdomen es blando, depresible, pero se palpa una masa hipogástrica dolorosa mate a la percusión. La herida quirúrgica se encuentra limpia y sin eritema.",
    "conducta": "El cuadro corresponde a un Síndrome Confusional Agudo (Delirium) de tipo hiperactivo, confirmado por Criterios CAM: 1) inicio agudo (segundo día postoperatorio) y fluctuante; 2) inatención cardinal (falla al deletrear al revés y seguir instrucciones); 3) pensamiento desorganizado (habla incoherencias y alucinaciones visuales zoópsicas); y 4) alteración psicomotora/alerta. El hallazgo físico cardinal de una masa hipogástrica mate y dolorosa confirma una Retención Aguda de Orina (globo vesical), complicación postoperatoria sumamente frecuente tras anestesia neuroaxial y analgesia con opioides. La conducta inmediata y resolutiva es instalar una sonda Foley descompresiva, lo cual habitualmente revierte la agitación confusional en minutos, junto con implementar medidas ambientales no farmacológicas (acompañamiento de la hija, reorientación y luz natural). La administración de antipsicóticos o la contención física sin haber drenado el globo vesical constituye una mala práctica médica."
  },
  "explicacion": "El cuadro corresponde a un Síndrome Confusional Agudo (Delirium) de tipo hiperactivo, confirmado por Criterios CAM: 1) inicio agudo (segundo día postoperatorio) y fluctuante; 2) inatención cardinal (falla al deletrear al revés y seguir instrucciones); 3) pensamiento desorganizado (habla incoherencias y alucinaciones visuales zoópsicas); y 4) alteración psicomotora/alerta. El hallazgo físico cardinal de una masa hipogástrica mate y dolorosa confirma una Retención Aguda de Orina (globo vesical), complicación postoperatoria sumamente frecuente tras anestesia neuroaxial y analgesia con opioides. La conducta inmediata y resolutiva es instalar una sonda Foley descompresiva, lo cual habitualmente revierte la agitación confusional en minutos, junto con implementar medidas ambientales no farmacológicas (acompañamiento de la hija, reorientación y luz natural). La administración de antipsicóticos o la contención física sin haber drenado el globo vesical constituye una mala práctica médica.",
  "keyPoints": [
    "El delirium es una urgencia médica y un marcador pronóstico independiente de mortalidad intrahospitalaria; su diagnóstico es 100% clínico mediante los criterios CAM.",
    "Los criterios CAM exigen obligatoriamente inicio agudo y fluctuante (1) + inatención cardinal (2) + pensamiento desorganizado (3) O alteración del nivel de conciencia (4).",
    "El subtipo hipoactivo (letargia, bradipsiquia, pasividad) es el más frecuente (50%), el más inadvertido y el de peor pronóstico vital intrahospitalario.",
    "Dos causas mecánicas clásicas en EUNACOM que deben descartarse siempre antes de indicar psicofármacos son el globo vesical (retención aguda de orina) y el fecaloma.",
    "El abordaje no farmacológico multicomponente (HELP: reorientación, audífonos/lentes, sueño natural, presencia familiar) es la primera línea obligatoria; las sujeciones físicas están proscritas.",
    "La farmacoterapia de rescate (Haloperidol 0.5-1 mg) se reserva para agitación severa con riesgo vital; en Parkinson y Lewy se usa Quetiapina (Haloperidol está contraindicado); las benzodiacepinas se evitan siempre salvo en Delirium Tremens."
  ],
  "questions": [
    {
      "stem": "El síndrome confusional agudo se manifiesta clínicamente como:",
      "options": [
        {
          "id": "A",
          "text": "Compromiso de conciencia cualitativo, asociado a signos focales, de inicio agudo yy­geriatria/ 5/10 curso fluctuante"
        },
        {
          "id": "B",
          "text": "Pérdida de la memoria de corto y largo plazo, asociado a compromiso de consciencia de inicio agudo"
        },
        {
          "id": "C",
          "text": "Desorientación, imposibilidad de mantener la atención, compromiso de conciencia y alucinaciones, de inicio agudo"
        },
        {
          "id": "D",
          "text": "Agitación psicomotora y alucinaciones visuales, sin compromiso de consciencia, de inicio agudo"
        },
        {
          "id": "E",
          "text": "Ideas paranoides, fallas en la memoria de largo plazo y compromiso de consciencia de inicio agudo"
        }
      ],
      "correcta": "C",
      "explicacion": "La opción C describe de manera precisa y completa las características clínicas cardinales del síndrome confusional agudo, también conocido como delirium. Este trastorno neurocognitivo agudo se define por una alteración en la atención y la conciencia que se desarrolla en un período corto (horas a días), representa un cambio con respecto a la atención y conciencia basales del individuo, y tiende a fluctuar en severidad a lo largo del día.\n\nLos elementos clave que lo caracterizan son la desorientación (temporal, espacial, e incluso personal), la imposibilidad de mantener o dirigir la atención (siendo este el rasgo distintivo), y un compromiso de la conciencia o del nivel de alerta. Además, las alucinaciones (frecuentemente visuales), los delirios y la agitación psicomotora son manifestaciones comunes de las alteraciones perceptivas y cognitivas asociadas. El inicio agudo es fundamental para diferenciarlo de trastornos crónicos como las demencias.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.2.005"
    },
    {
      "stem": "El síndrome delirium se manifiesta clínicamente como:",
      "options": [
        {
          "id": "A",
          "text": "Inatención y compromiso de conciencia cualitativo o cuantitativo de inicio agudo"
        },
        {
          "id": "B",
          "text": "Pérdida de la memoria de corto plazo y alucinaciones auditivas de inicio agudo"
        },
        {
          "id": "C",
          "text": "Desorientación y asterixis de instalación progresiva"
        },
        {
          "id": "D",
          "text": "Agitación psicomotora y convulsiones de inicio agudo"
        },
        {
          "id": "E",
          "text": "Ideas paranoides y fallas en la memoria de instalación progresiva"
        }
      ],
      "correcta": "A",
      "explicacion": "La opción a) describe con precisión las características cardinales del síndrome delirium, también conocido como síndrome confusional agudo. El delirium es un trastorno neurocognitivo agudo caracterizado por una alteración de la atención y la conciencia que se desarrolla en un corto período de tiempo (horas a días), representa un cambio agudo respecto al nivel basal de atención y conciencia del paciente, y tiende a fluctuar en severidad a lo largo del día.\n\nLa \"inatención\" es la característica más distintiva, manifestándose como una dificultad para dirigir, enfocar, mantener o desviar la atención. El \"compromiso de conciencia cualitativo o cuantitativo\" se refiere a una alteración en el nivel de alerta (desde somnolencia o estupor hasta hipervigilancia o agitación) y en la claridad del pensamiento y la percepción del entorno. El \"inicio agudo\" es fundamental para diferenciarlo de trastornos crónicos como las demencias. Estas características son los criterios diagnósticos centrales para el delirium según el DSM-5.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.2.005"
    },
    {
      "stem": "El tratamiento de elección del delirium tremens es:",
      "options": [
        {
          "id": "A",
          "text": "Haldol"
        },
        {
          "id": "B",
          "text": "Diazepam"
        },
        {
          "id": "C",
          "text": "Etanol"
        },
        {
          "id": "D",
          "text": "Risperidona"
        },
        {
          "id": "E",
          "text": "Clorpromazina"
        }
      ],
      "correcta": "B",
      "explicacion": "La alternativa correcta es **B (Diazepam)**.\n\nEl *delirium tremens* es una emergencia médica causada por la abstinencia alcohólica, caracterizada por hiperactividad autonómica (taquicardia, hipertensión, sudoración), temblor, alucinaciones (típicamente visuales), y riesgo de convulsiones. El tratamiento de elección se basa en **benzodiazepinas** (Diazepam, Lorazepam, Clordiazepóxido) debido a su efecto GABAérgico que contrarresta la hiperexcitabilidad neuronal resultante de la abstinencia. Diazepam es una opción comúnmente utilizada, especialmente si se busca una benzodiazepina de acción prolongada, aunque la elección específica depende de la disponibilidad y las características del paciente (función hepática, edad, etc.). El objetivo es la sedación suave y control de los síntomas de abstinencia, titular la dosis de manera cuidadosa.\n\nSi bien no existe una guía clínica del MINSAL específicamente sobre *delirium tremens*, el manejo de la abstinencia alcohólica severa se basa en las recomendaciones internacionales respaldadas por la evidencia y adaptadas a la realidad local.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.2.005"
    },
    {
      "stem": "Paciente hombre de 75 años, autovalente, con antecedentes de hipertensión\narterial, diabetes tipo 2 y pérdida leve de memoria desde hace 3 a 4 años. Hace\nuna semana lo notan apático y con comportamiento extraño. Hace tres días,\nsalió de compras y un vecino debió traerlo a casa pues no recordaba el camino.\nDesde hace dos días habla incoherencias, se agita y presenta insomnio. El\ndiagnóstico más probable es::",
      "options": [
        {
          "id": "A",
          "text": "Enfermedad de Alzheimer"
        },
        {
          "id": "B",
          "text": "Demencia por cuerpos de Lewy"
        },
        {
          "id": "C",
          "text": "Trastorno psicótico"
        },
        {
          "id": "D",
          "text": "Demencia frontotemporal"
        },
        {
          "id": "E",
          "text": "Delirium"
        }
      ],
      "correcta": "E",
      "explicacion": "La alternativa correcta es **E: Delirium**. El cuadro clínico describe una alteración aguda y fluctuante de la cognición, con inicio reciente (días), alteración del nivel de conciencia (apatía, agitación, insomnio) y alteraciones del pensamiento (incoherencias, desorientación). Estos son los criterios cardinales para el diagnóstico de Delirium. El antecedente de hipertensión arterial y diabetes mellitus tipo 2, aunque no causan directamente el delirium, pueden aumentar el riesgo de desarrollarlo, especialmente en un contexto de estrés fisiológico o metabólico. La pérdida leve de memoria previa podría ser un factor predisponente, pero la rapidez de la instalación del cuadro actual apunta fuertemente al delirium.\n\nSegún la Guía Clínica del MINSAL para el manejo del Delirium, este se define como un síndrome neuropsiquiátrico agudo caracterizado por alteración de la atención, conciencia y cognición, que se desarrolla en un corto período de tiempo (horas a días) y tiende a fluctuar a lo largo del día. En este caso, la evolución en días, la fluctuación del estado mental (apatía seguida de agitación) y la alteración de la cognición (incoherencias, desorientación) son consistentes con Delirium.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.2.005"
    }
  ],
  "vignetteText": "Hombre de 79 años, autovalente con antecedente de hipertensión arterial y artrosis de rodilla en tratamiento con enalapril y paracetamol, cursa el segundo día postoperatorio de una artroplastia total de cadera programada. Durante la madrugada comienza bruscamente con inquietud extrema, habla incoherencias diciendo que \"hay animales debajo de la cama\", intenta retirarse la vía venosa periférica y no reconoce a su hija. Al examen físico: PA 145/85 mmHg, FC 98 lpm, afebril (T° 36.8 °C), satO₂ 95% ambiental. Se encuentra vigil pero desorientado en tiempo y espacio, incapaz de deletrear la palabra MUNDO al revés ni de seguir una orden simple sin distraerse. El abdomen es blando, depresible, pero se palpa una masa hipogástrica dolorosa mate a la percusión. La herida quirúrgica se encuentra limpia y sin eritema."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "confusional, delirium, criterios, factores, precipitantes")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2013 · Pregunta 68 · confianza 0.9
Un paciente de 80 años, autovalente, inicia cuadro de compromiso del estado general, tos y expectoración mucopurulenta, se realiza radiografía de tórax en donde se comprueba diagnóstico de neumonía basal derecha por lo que se hospitaliza para el tratamiento. Durante la hospitalización en la noche el paciente se agita, se saca sonda foley y vías venosas, durante la mañana está tranquilo. El diagnóstico más probable es:
- A) Síndrome confusional agudo
- B) Delirio
- C) Alzheimer
- D) Meningitis bacteriana
- E) Demencia frontotemporal
**Correcta: A**
Explicación del banco: De libro. También se llama delirium. Si bien delirio es la traducción al español de la palabra en latín "delirium", en Chile se suele usar "delirio" para la pérdida de juicio de realidad de los pacientes psicóticos (delirio paranoide, megalomaniaco, erotomaniaco, etc) y delirium para el síndrome confusional agudo.

### [2] EUNACOM Enero 2023 · Pregunta 172 · confianza 0.85
Adulto mayor hospitalizado por infección, comienza con desorientación temporoespacial, inatención e ideas deliriosas. ¿Diagnóstico más probable?
- A) Demencia de inicio agudo
- B) Trastorno psicótico breve
- C) Delirium
- D) Encefalopatía hepática
- E) Trastorno disociativo agudo
**Correcta: C**
Explicación del banco: Diagnóstico: **Delirium** (opción **C**). Delirium. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [3] EUNACOM Julio 2019 · Pregunta 139 · confianza 0.85
Un paciente de 84 años presenta desgarro mucopurulento, desde hace 4 días, por lo que se hospitaliza y se inicia tratamiento antibiótico. Evoluciona con dificultades para reconocer a sus hijos y esposa, a quienes confunde con su mamá y hermanos ya fallecidos. Se molesta cuando lo contrarían e incluso llegó a agredir físicamente a uno de sus hijos. El diagnóstico más probable es:
- A) Enfermedad de Alzheimer
- B) Trastorno delirante
- C) Depresión psicótica
- D) Esquizofrenia
- E) Delírium
**Correcta: E**
Explicación del banco: Tiene un delirium o síndrome confusional agudo clásico (desorientación y compromiso de conciencia de inicio agudo), patología frecuente en el adulto mayor y que, en este caso, es secundario a la infección bacteriana. Las alucinaciones y el delirio son frecuentes y no por ello se trata de una esquizofrenia (cuadro crónico, que inicia en la adolescencia) o un trastorno delirante (delirio sistematizado de más de un mes, que, si dura más de 3 meses, se llama trastorno delirante crónico).

### [4] EUNACOM Julio 2016 · Pregunta 8 · confianza 0.85
Mujer de 81 años, hospitalizada por neumonía, presenta agitación psicomotora en las noches, agrediendo al personal hospitalario y no reconoce a sus familiares. En el día, por el contrario, está en buenas condiciones, tranquila y no recuerda lo sucedido. ¿Cuál es el diagnostico más probable?
- A) Esquizofrenia
- B) Accidente vascular encefálico
- C) Delirium
- D) Demencia
- E) Trastorno delirante
**Correcta: C**
Explicación del banco: Es un delirium clásico (alteración de la atención, compromiso de conciencia de inicio agudo, desorientación y agitación; suele tener un curso fluctuante y empeorar al atardecer y en la noche). También se llama síndrome confusional agudo.

### [5] EUNACOM Julio 2016 · Pregunta 138 · confianza 0.8
Una paciente de 78 años, diabética e hipertensa, es hospitalizada por una pielonefritis aguda. Estaba en tratamiento con enalapril, hidroclorotiazida y metformina. Durante el día está tranquila, pero en la noche se agita y dice que la tienen secuestrada. ¿Cuál es la conducta más adecuada?
- A) Indicar benzodiacepinas en la noche
- B) Indicar haloperidol oral
- C) Agregar glibenclamida al tratamiento
- D) Disminuir la dosis de metformina
- E) Administrar suero fisiológico
**Correcta: B**
Explicación del banco: Es un delirium. Se trata, tratando la causa, pero sirve dar haldol en bajas dosis (también sirve la risperidona en bajas dosis, aunque no ha demostrado ser mejor que el Haldol). Para el manejo de la diabetes, está indicada la insulina, en este caso. Las BDZ están contraindicadas.

### [6] EUNACOM Julio 2013 · Pregunta 168 · confianza 0.8
Paciente de 76 años, con antecedentes de HTA en tratamiento, es hospitalizado por neumonía requiriendo antibíoticos endovenosos. Estando hospitalizado comienza con desorientación temporoespacial, inatención y pensamiento desorganizado, de curso fluctuante durante el día. El diagnóstico más probable es:
- A) Demencia senil
- B) Demencia frontotemporal
- C) Esquizofrenia
- D) Trastorno delirante crónico
- E) Delirium
**Correcta: E**
Explicación del banco: Diagnóstico: **Delirium** (opción **E**). Delirium de libro. Siempre preguntan varios delirium o síndrome confusional agudo.. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [7] EUNACOM Diciembre 2018 · Pregunta 119 · confianza 0.75
Una paciente de 74 años hospitalizada, desde hace una semana, por una fractura de cadera. Ha presentado cambios en su conducta, ya que al inicio era amable y cooperadora, pero en el último tiempo se ha agitado y mostrado confusa, e incluso ha llegado a agredir a otros pacientes. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Alzheimer
- B) Trastorno delirante
- C) Esquizofrenia
- D) Demencia vascular
- E) Delírium
**Correcta: E**
Explicación del banco: Diagnóstico: **Delírium** (opción **E**). Es un síndrome confusional agudo o delirium clásico.. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [8] EUNACOM Julio 2013 · Pregunta 130 · confianza 0.72
Una mujer de 75 años, sufre caída a nivel presentando fractura de cuello femoral, por lo que se realiza prótesis total de cadera. Luego de la cirugía comienza a hablar incoherencias, se agita, se vuelve agresiva y además presenta desorientación temporoespacial. ¿Cuál de los siguientes fármacos es el más adecuado para el manejo de esta paciente?
- A) Risperidona v.o
- B) Haloperidol e.v
- C) Diazepam i.m
- D) Lorazepam e.v
- E) Midazolam e.v
**Correcta: B**
Explicación del banco: Tiene un delirium. Lo más importante es tratar la causa. La agitación, se puede tratar con haloperidol, intramuscular en la dosis más baja posible y luego, se mantiene con la mitad de la dosis, por vía oral. Idealmente no darlo ev, aunque el uptodate pone Haldol ev, como tratamiento de elección, ya que la dosis es muy bajita: 0,5 a 1 mg. La risperidona oral sirve mucho también, pero si está agitado, puede ser difícil de entregarlo. Es pregunta muy discutible, ya que ambos medicamentos han demostrado ser iguales en efectividad, aunque faltan estudios más concluyentes, por lo que el haldol sigue siendo de elección. Yo marcaría Haloperidol, como primera opción, pero al salir risperidona vo y haldol ev, no estoy seguro. Habría que revisar cómo estaba redactada la pregunta. [Respuesta oficial: B-A]

### [9] EUNACOM Agosto 2021 · Pregunta 131 · confianza 0.68
Una paciente de 75 años, con historia de enfermedad de Alzheimer de 3 años de evolución, con buena funcionalidad presenta un cuadro en que agrede a otras personas y se muestra muy angustiada. Al examen físico le cuesta nombrar algunos objetos, no puede decir los días de la semana de manera invertida y se muestra poco atenta. Además, refiere que su padre ya fallecido está presente en la sala. Se hospitaliza para estudio y manejo y, al inicio, se muestra cooperadora y amable, pero luego exige que la dejen ir e intenta escapar del hospital y agredir al personal de salud. ¿Cuál es el fármaco inicial para el manejo de esta paciente?
- A) Clorpromazina
- B) Diazepam
- C) Mirtazapina
- D) Alprazolam
- E) Haloperidol
**Correcta: E**
Explicación del banco: Tiene un delírium o síndrome confusional agudo clásico. Se trata con el manejo de la patología de base (ej. infecciones, infartos, etc.) y con antipsicóticos, de preferencia haloperidol en dosis bajas (0,5 mg IM) o bien, risperidona 0,5 a 1 mg VO.

### [10] EUNACOM Enero 2023 · Pregunta 127 · confianza 0.65
Adulta mayor con Parkinson hospitalizada por ITU, presenta desorientación e ideas deliriosas. ¿Cuál es el tratamiento más adecuado (además de tratar la ITU)?
- A) Haloperidol IM
- B) Lorazepam oral
- C) Risperidona a bajas dosis
- D) Quetiapina oral
- E) Contención física y ambiental
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Risperidona a bajas dosis** (opción **C**). Risperidona a bajas dosis. Tratamiento general: observación + AINEs para dolor leve De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [11] EUNACOM Diciembre 2022 · Pregunta 96 · confianza 0.6
Un paciente de 84 años es traído a urgencia por familiares. Refieren que sus síntomas iniciaron hace 7 días, consistentes en tos con expectoración purulenta, sensación febril y disnea de esfuerzos. En las últimas noches se ha levantado algo agitado y anoche estuvo muy agitado, gritando que habían entrado extraterrestres en su casa y que lo querían matar. Al examen físico, tiene T°: 37,9°C, PA: 154/100, FC: 88x’, FR: 25x’, satura: 93% a FiO2 ambienta, tiene examen pulmonar con crepitaciones en la base derecha y examen cardíaco con ritmo regular en dos tiempos sin soplos. ¿Cuál es el diagnóstico más probable?
- A) Accidente vascular encefálico
- B) Delirium
- C) Epilepsia del lóbulo temporal
- D) Demencia tipo Alzheimer
- E) Esquizofrenia paranoide
**Correcta: C**
Explicación del banco: Diagnóstico: **Epilepsia del lóbulo temporal** (opción **C**). Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Diciembre 2022 · Pregunta 65 · confianza 0.58
Una paciente de 70 años, con antecedente de enfermedad de Parkinson, presenta un cuadro de 4 días de evolución de disuria e incontinencia urinaria, a lo que se ha agregado malestar general y, desde ayer, ha presentado agitación y desorientación, creyendo que la quieren atacar. Su examen físico muestra T°:38,3°C, FC: 80x’, PA: 122/82 mmHg, desorientación en el tiempo y espacio, asociada a angustia, examen cardiopulmonar normal, examen abdominal con abdomen blando, depresible, sin signos de irritación peritoneal. Dolor a la percusión de la fosa lumbar izquierda. Se solicitan exámenes, que muestran hemograma con leucocitosis de 14.000 por mm3 y VHS: 50 mm/h, sedimento de orina con abundantes bacterias, 20 glóbulos blancos por campo y 12 glóbulos rojos por campo y urocultivo que está pendiente. Se inicia ceftriaxona endovenosa, aunque intenta escaparse, ya que permanece agitada. ¿Qué medicamento es más adecuado para el manejo del cuadro actual?
- A) Risperidona
- B) Alprazolam
- C) Quetiapina
- D) Haloperidol
- E) Clorpomazina
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Alprazolam** (opción **B**). Tratamiento general: observación + AINEs para dolor leve De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [13] EUNACOM Diciembre 2024 · Pregunta 64 · confianza 0.5
Persona hospitalizada operada hace unos días clinica sugiere: a.​ Delirium
- A) Ninguna de las anteriores es correcta
- B) Todas las anteriores son correctas
- C) No se dispone de información suficiente
- D) Otra alternativa no descrita
- E) Otra alternativa no descrita
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Ninguna de las anteriores es correcta). Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [14] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Julio 2018 · Pregunta 71 · confianza 0.97
Pregunta 71 Sin contestar Puntúa como 1,00 Marcar pregunta Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:
- A) Insuficiencia tricuspídea
- B) Estenosis aórtica
- C) Insuficiencia aórtica
- D) Estenosis mitral
- E) Insuficiencia mitral
**Correcta: C**
Explicación del banco: Diagnóstico: **Insuficiencia aórtica** (opción **C**). Es una insuficiencia aórtica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [16] EUNACOM Julio 2013 · Pregunta 40 · confianza 0.97
Se realiza un estudio donde se comparan dos grupos de personas mayores de 60 años, uno de ellos corresponde a hipertensos y el otro de características similares pero sin hipertensos, se siguen por 5 años y se evalúa la aparición de infarto agudo al miocardio o accidente cerebrovascular. Este enunciado corresponde a un estudio de:
- A) Corte transversal
- B) Caso control
- C) Estudio clínico randomizado
- D) Cohorte
- E) Ensayo de campo
**Correcta: D**
Explicación del banco: Diagnóstico: **Cohorte** (opción **D**). Se siguen al futuro dos grupos: expuestos y no expuestos a un FR (HTA en este caso). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [17] EUNACOM Diciembre 2017 · Pregunta 174 · confianza 0.96
Una paciente de 37 años, puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, asociada a fiebre hasta 38,5 grados Celsius y dolor abdominal bajo. ¿Cuál es el diagnóstico más probable?
- A) Inercia uterina
- B) Neoplasia trofoblástica gestacional
- C) Endometritis
- D) Restos ovulares
- E) Miometritis
**Correcta: C**
Explicación del banco: Diagnóstico: **Endometritis** (opción **C**). Es una endometritis puerperal clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [18] EUNACOM Julio 2013 · Pregunta 137 · confianza 0.96
Un paciente de 26 años, estudiante universitario con regular rendimiento, es traído por sus padres porque desde hace tres meses no ha asistido a clases, ya que prefiere quedarse en su habitación. Ellos refieren que siempre fue solitario y que no buscaba tener amistades. Al entrevistarlo de forma dirigida se ríe sin motivo y refiere que no quiere salir de su habitación porque la voz del diablo lo amenaza. El diagnóstico más probable es:
- A) Trastorno delirante crónico
- B) Trastorno de la personalidad esquizoide
- C) Delirium
- D) Esquizofrenia hebefrénica
- E) Trastorno Bipolar
**Correcta: D**
Explicación del banco: Diagnóstico: **Esquizofrenia hebefrénica** (opción **D**). La risa sin motivo orienta a Hebefrenia. El cuadro clínico es sugerente de EQZ.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [19] EUNACOM Diciembre 2024 · Pregunta 158 · confianza 0.95
Clínica de taponamiento, hipotensión, pulsos disminuidos como realizo el diagnóstico:
- A) Ecocardiograma
- B) Hemograma y VHS
- C) Ecografía
- D) Radiografía
- E) TAC con contraste
**Correcta: A**
Explicación del banco: Diagnóstico: **Ecocardiograma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Hemograma y VHS, Ecografía) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [20] EUNACOM Enero 2023 · Pregunta 94 · confianza 0.95
Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?
- A) Factor reumatoide (IgM)
- B) ANA y anti-DNA doble cadena
- C) Ácido úrico sérico
- D) Anticuerpos anti-CCP
- E) HLA-B27
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Anticuerpos anti-CCP). Anticuerpos anti-CCP. Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Factor reumatoide (IgM), ANA y anti-DNA doble cadena) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [21] EUNACOM Enero 2023 · Pregunta 41 · confianza 0.95
Embarazada con antecedente de cesárea previa, durante el parto presenta cese de contracciones, sangrado y bradicardia fetal. ¿Diagnóstico más probable?
- A) Desprendimiento prematuro de placenta
- B) Placenta previa sangrante
- C) Prolapso de cordón umbilical
- D) Embolia de líquido amniótico
- E) Rotura uterina
**Correcta: E**
Explicación del banco: Diagnóstico: **Rotura uterina** (opción **E**). Rotura uterina. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [22] EUNACOM Enero 2023 · Pregunta 62 · confianza 0.95
Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas. ¿Diagnóstico más probable?
- A) Apendicitis aguda complicada
- B) Quiste ovárico torcido
- C) Embarazo ectópico roto
- D) Salpingitis aguda con absceso tubo-ovárico
- E) Rotura folicular hemorrágica
**Correcta: C**
Explicación del banco: Diagnóstico: **Embarazo ectópico roto** (opción **C**). Embarazo ectópico roto. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [23] EUNACOM Diciembre 2022 · Pregunta 20 · confianza 0.95
¿A qué indicador corresponde la siguiente ecuación? (Muertes en menores de 28 días / nacidos vivos) x 1.000
- A) Tasa de mortalidad infantil
- B) Tasa de mortalidad perinatal
- C) Tasa de mortalidad neonatal
- D) Tasa de mortalidad neonatal precoz
- E) Tasa de mortalidad postneonatal
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Tasa de mortalidad perinatal). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Tasa de mortalidad infantil, Tasa de mortalidad neonatal) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [24] EUNACOM Diciembre 2022 · Pregunta 156 · confianza 0.95
Una niña de 2 años comienza con estrabismo, con desviación hacia lateral del ojo izquierdo. A la inspección ocular, se observa leucocoria izquierda. ¿Cuál es el diagnóstico más probable?
- A) Retinoblastoma
- B) Glaucoma congénito
- C) Catarata congénita
- D) Retinopatía del prematuro
- E) Tumor de órbita
**Correcta: A**
Explicación del banco: Diagnóstico: **Retinoblastoma** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Glaucoma congénito, Catarata congénita) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [25] EUNACOM Diciembre 2022 · Pregunta 110 · confianza 0.95
Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información. ¿Cuál es el examen inicial para evaluar a este paciente?
- A) Impedanciometría
- B) TAC de oído
- C) TAC de cerebro
- D) Prueba calórica
- E) Audiometría
**Correcta: E**
Explicación del banco: La alternativa correcta es la **E** (Audiometría). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Impedanciometría, TAC de oído) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.
