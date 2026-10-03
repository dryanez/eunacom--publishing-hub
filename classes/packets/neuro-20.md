# CLASE neuro-20 · Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS

Escribe `classes/lessons/neuro-20.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-20" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-17: Neurologia 10.17: Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma
- neuro-18: Neurologia 10.18: Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento
- neuro-21: Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente
- neuro-22: Neurologia 10.22: Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)
- neuro-23: Neurologia 10.23: Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-20",
  "classId": "neuro-20",
  "tier": 2,
  "blockNum": 4,
  "blockName": "Patología Neuromuscular, Desmielinizante y Nervio Periférico",
  "topicLabel": "10.20",
  "title": "Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS",
  "perfilCode": "1.10.1.025",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Atención en Servicio de Urgencia y APS · En caso de confirmación de Vértigo Central o ACV de fosa posterior (troncoencéfalo / cerebelo) ingresa de inmediato a Garantía GES N° 37.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Alta rentabilidad · Diagnóstico diferencial crítico de urgencias neurológicas y otoneurología",
  "algoTitle": "Algoritmo de Decisión en Vértigo Agudo: VPPB vs Protocolo HINTS para Descarte de ACV",
  "diagram": {
    "title": "Algoritmo de Decisión en Vértigo Agudo: VPPB vs Protocolo HINTS para Descarte de ACV",
    "svg": "<svg viewBox=\"0 0 620 440\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Paciente que Consulta por Síndrome Vertiginoso Agudo / Mareo</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Diferenciar vértigo verdadero (ilusión de giro) de presíncope</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">cardiovascular, desequilibrio motor o mareo inespecífico</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"dec\" x=\"70\" y=\"80\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Patrón Temporal y Desencadenante del Vértigo</text>\n  <text class=\"sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">¿Episódico paroxístico breve provocado por giros posturales vs continuo prolongado espontáneo?</text>\n  <path class=\"ln\" d=\"M310,119 V149 H158 V159\"/>\n  <path class=\"ln\" d=\"M310,149 H462 V159\"/>\n  <text class=\"lbl\" x=\"158\" y=\"144\" text-anchor=\"middle\">Episódico breve (&lt; 1 min) posicional</text>\n  <text class=\"lbl\" x=\"462\" y=\"144\" text-anchor=\"middle\">Vértigo Continuo Prolongado (&gt; 24 h) + Náuseas</text>\n  <rect class=\"dec\" x=\"12\" y=\"159\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"158\" y=\"174\" text-anchor=\"middle\" font-weight=\"700\">Maniobra Diagnóstica de Dix-Hallpike</text>\n  <text class=\"sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Nistagmo torsional geotrópico con latencia (2-10 s) y fatigabilidad</text>\n  <text class=\"sub\" x=\"158\" y=\"197\" text-anchor=\"middle\">Confirma VPPB canal posterior</text>\n  <rect class=\"warn\" x=\"316\" y=\"159\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"174\" text-anchor=\"middle\" font-weight=\"700\">Síndrome Vestibular Agudo: Protocolo HINTS</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Head Impulse + Nystagmus + Test of Skew</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"197\" text-anchor=\"middle\">Discrimina Neuronitis Vestibular de ACV de fosa posterior</text>\n  <path class=\"ln\" d=\"M158,209 V219 H310 V231\"/>\n  <path class=\"ln\" d=\"M462,209 V219 H310 V231\"/>\n  <rect class=\"dec\" x=\"70\" y=\"231\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Resultado del Examen y Protocolo HINTS</text>\n  <text class=\"sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">Evaluación del reflejo vestíbulo-ocular, nistagmo dinámico de mirada y alineamiento ocular vertical</text>\n  <path class=\"ln\" d=\"M310,270 V300 H158 V310\"/>\n  <path class=\"ln\" d=\"M310,300 H462 V310\"/>\n  <text class=\"lbl\" x=\"158\" y=\"295\" text-anchor=\"middle\">Dix-Hallpike (+) en VPPB</text>\n  <text class=\"lbl\" x=\"462\" y=\"295\" text-anchor=\"middle\">HINTS Central (INFARCT) o Focalidad</text>\n  <rect class=\"acc\" x=\"12\" y=\"310\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"325\" text-anchor=\"middle\" font-weight=\"700\">Maniobra Terapéutica de Epley Inmediata</text>\n  <text class=\"accS\" x=\"158\" y=\"337\" text-anchor=\"middle\">Reposición de otolitos hacia el utrículo</text>\n  <text class=\"accS\" x=\"158\" y=\"348\" text-anchor=\"middle\">No requiere TAC de cerebro ni fármacos sedantes</text>\n  <rect class=\"crit\" x=\"316\" y=\"310\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"325\" text-anchor=\"middle\" font-weight=\"700\">Alerta Roja: ACV Isquémico Fosa Posterior</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"337\" text-anchor=\"middle\">Impulso cefálico normal, nistagmo bidireccional o Skew (+)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"348\" text-anchor=\"middle\">RMN difusión urgente + UTAC (GES 37)</text>\n  <path class=\"ln\" d=\"M158,360 V370 H310 V382\"/>\n  <path class=\"ln\" d=\"M462,360 V370 H310 V382\"/>\n  <rect class=\"acc\" x=\"100\" y=\"382\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"397\" text-anchor=\"middle\" font-weight=\"700\">HINTS Periférico Puro (Impulso anormal + Nistagmo unidireccional + Skew negativo)</text>\n  <text class=\"accS\" x=\"310\" y=\"409\" text-anchor=\"middle\">Diagnóstico: Neuronitis Vestibular</text>\n  <text class=\"accS\" x=\"310\" y=\"420\" text-anchor=\"middle\">Manejo sintomático con dimenhidrinato/conarizina ≤ 48-72 h + rehabilitación precoz</text>\n</svg>"
  },
  "contexto": "El enfrentamiento del paciente con vértigo y mareo es uno de los mayores desafíos clínicos en los servicios de urgencia y atención primaria. La primera obligación del médico es distinguir el vértigo verdadero (sensación ilusoria subjetiva u objetiva de movimiento rotatorio) de otros cuadros como presíncope, ataxia sensorial o mareo psicógeno. Desde el punto de vista etiológico, la decisión crítica radica en diferenciar los cuadros periféricos benignos (Vértigo Postural Paroxístico Benigno, Neuronitis Vestibular, Enfermedad de Menière) de las emergencias vasculares centrales potencialmente mortales, en especial el Accidente Cerebrovascular Isquémico de Fosa Posterior (infarto cerebeloso o de tronco encefálico en el territorio de la arteria PICA o AICA). En pacientes con síndrome vestibular agudo continuo, el examen semiológico a pie de cama mediante el Protocolo HINTS (Head Impulse, Nystagmus, Test of Skew) posee una sensibilidad diagnóstica superior a la Resonancia Magnética con difusión en las primeras 24 a 48 horas para pesquisar un ACV de fosa posterior. En contrapartida, el VPPB es el vértigo más prevalente del mundo, caracterizado por crisis breves de segundos desencadenadas por cambios posicionales cefálicos, diagnosticado con la Maniobra de Dix-Hallpike y curado definitivamente en la misma consulta mediante la Maniobra de Reposición de Epley.",
  "contentSections": [
    {
      "subhead": "1. Clasificación Fisiopatológica: Vértigo Periférico vs Vértigo Central",
      "paragraphs": [
        "El sistema vestibular integra información de los conductos semicirculares y órganos otolíticos (utrículo y sáculo), transmitida por el nervio vestibular (VIII par) hacia los núcleos vestibulares del troncoencefálico, el cerebelo y la corteza cerebral. Las lesiones se dividen anatómicamente en dos grandes categorías (véase Algoritmo 10.20):",
        "• <strong>Vértigo Periférico (Laberinto o Nervio Vestibular):</strong> Representa más del 85-90% de los casos. Se caracteriza clínicamente por un inicio brusco e intenso de la sensación rotatoria, cortejo vegetativo severo (náuseas intensas, vómitos profusos, diaforesis, palidez), inestabilidad postural leve a moderada con marcha posible (el paciente lateropulsa hacia el lado de la lesión pero no cae desplomado) y frecuente asociación con síntomas auditivos (tinnitus, hipoacusia neurosensorial, plenitud aural) si hay afectación coclear. El nistagmo espontáneo es típicamente <strong>unidireccional, horizontal-rotatorio, con fase lenta hacia el oído lesionado y fase rápida que bate hacia el oído sano; no cambia de dirección con la mirada y se INHIBE significativamente con la fijación de la mirada</strong>.",
        "• <strong>Vértigo Central (Troncoencefálico o Cerebelo):</strong> Representa el 10-15% de los cuadros agudos y constituye una urgencia vital. Producido por infarto vertebrobasilar (PICA, AICA, basilar), hemorragia cerebelosa, esclerosis múltiple o tumores de fosa posterior. La sensación de giro suele ser insidiosa, sorda o mal definida, pero la <strong>inestabilidad y ataxia de la marcha son desproporcionadamente severas</strong> (el paciente no puede mantenerse en pie ni dar un paso sin apoyo). A menudo se acompaña de signos de focalidad neurológica del tronco o cerebelo (disartria, disfagia, diplopía, dismetría, síndrome de Horner). El nistagmo central es <strong>puramente vertical (upbeat o downbeat), torsional puro o bidireccional que cambia de sentido al mirar a derecha o izquierda (\"gaze-evoked\"), y NO se inhibe con la fijación visual</strong>."
      ]
    },
    {
      "subhead": "2. Síndrome Vestibular Agudo y Protocolo HINTS (Descarte de ACV)",
      "paragraphs": [
        "En el paciente que se presenta con un <strong>Síndrome Vestibular Agudo</strong> (vértigo continuo de inicio súbito, nistagmo espontáneo, náuseas e inestabilidad que dura días), el TAC de encéfalo sin contraste tiene una sensibilidad bajísima (&lt; 15-20%) para detectar infartos en la fosa posterior, e incluso la RMN con difusión puede arrojar hasta un 12-20% de falsos negativos en las primeras 24 a 48 horas. El <strong>Protocolo HINTS (Head Impulse, Nystagmus, Test of Skew)</strong> realizado a pie de cama por un médico entrenado alcanza una <strong>sensibilidad del 100% y especificidad del 96% para detectar ACV</strong>, superando a la resonancia hiperaguda (véase Tabla 10.20.1: Protocolo HINTS y Diagnóstico Diferencial de Síndromes Vertiginosos).",
        "El protocolo consta de 3 maniobras oculomotoras clave (regla mnemotécnica del infarto: <strong>INFARCT</strong>: <em>Impulse Normal, Fast-phase Alternating, Refixation on Cover Test</em>):",
        "• <strong>1. HI (Head Impulse Test / Maniobra de Halmagyi):</strong> Evalúa la integridad del Reflejo Vestíbulo-Ocular (RVO). Se rota la cabeza del paciente rápida y pasivamente 10-20° hacia un lado mientras fija la vista en la nariz del examinador. En una patología periférica unilateral (Neuronitis vestibular), el RVO está lesionado: los ojos se desvían con la cabeza y se observa una <strong>sacada correctiva rápida de refijación hacia el centro (test anormal / positivo)</strong>. Por el contrario, en un infarto cerebeloso o de tronco el RVO periférico está indemne: <strong>los ojos permanecen clavados en la nariz sin ninguna sacada correctiva (test NORMAL / NEGATIVO)</strong>. <em>¡Paradoja EUNACOM!:</em> Un Head Impulse TEST NORMAL en un paciente con vértigo continuo agudo es una BANDERA ROJA de ACV central.",
        "• <strong>2. N (Nystagmus):</strong> En patología periférica es unidireccional (fase rápida siempre en el mismo sentido, independientemente de la dirección de la mirada). La presencia de un <strong>nistagmo bidireccional que cambia de dirección según hacia dónde mira el paciente (gaze-evoked)</strong> o un nistagmo vertical puro es categóricamente CENTRAL.",
        "• <strong>3. TS (Test of Skew):</strong> Prueba de oclusión ocular alternante. Se ocluye un ojo y luego se desocluye rápidamente observando el alineamiento vertical. En personas sanas o vértigo periférico los ojos están alineados en el plano vertical (test normal). En lesiones centrales de tronco se produce un desalineamiento vertical oblicuo (<em>Skew deviation</em>), observándose una <strong>sacada de refijación vertical compensatoria (sube o baja) al desocluir el ojo (test anormal / positivo)</strong>.",
        "<em>Resumen de conducta:</em> Si el paciente presenta <strong>CUALQUIERA</strong> de los 3 signos de alarma centrales (Head impulse normal, nistagmo que cambia de dirección o skew deviation presente), o imposibilidad para mantenerse en bipedestación sin apoyo (Grado 3 de ataxia de tronco), se debe activar el código ACV, hospitalizar en UTAC (GES 37) y solicitar Angio-RMN cerebral urgente."
      ]
    },
    {
      "subhead": "3. Patología Periférica: VPPB, Neuronitis Vestibular y Menière",
      "paragraphs": [
        "Las tres entidades periféricas más evaluadas en el EUNACOM presentan cursos clínicos nítidamente diferenciables:",
        "• <strong>Vértigo Postural Paroxístico Benigno (VPPB):</strong> Es la causa más frecuente de vértigo en todas las edades. Se produce por <strong>canalitiasis</strong> (desprendimiento de otoconias de carbonato de calcio desde la mácula del utrículo hacia los conductos semicirculares, siendo el <strong>conducto semicircular posterior el afectado en el 85-90% de los casos</strong>).",
        "  - <em>Cuadro Clínico:</em> Crisis de <strong>vértigo rotatorio muy intenso de duración extraordinariamente breve (menos de 60 segundos, típicamente 10 a 30 segundos)</strong>, desencadenado exclusivamente por <strong>cambios de posición de la cabeza respecto a la gravedad</strong>: al acostarse en la cama, girar hacia un lado al dormir, levantarse o mirar hacia el techo. NO cursa con síntomas auditivos (sin hipoacusia ni tinnitus) ni focalidad neurológica.",
        "  - <em>Diagnóstico Definitivo:</em> <strong>Maniobra de Dix-Hallpike positiva</strong>. Al llevar rápidamente al paciente desde posición sentada a decúbito supino con la cabeza girada 45° y colgando 20° bajo la camilla, se reproduce el vértigo y se observa un <strong>nistagmo torsional y vertical hacia arriba (upbeat-geotrópico), con una latencia de inicio de 2 a 10 segundos, duración &lt; 60 segundos y fatigabilidad manifiesta tras maniobras repetidas</strong>.",
        "  - <em>Tratamiento Curativo:</em> <strong>Maniobra de Reposición de Epley</strong>. Consiste en una secuencia de giros cefálicos guiados en 90° que desplazan las partículas otolíticas por gravedad desde el canal posterior de regreso al utrículo, donde son reabsorbidas. Cura más del 80-90% de los casos en la primera sesión. <em>Regla de Oro:</em> <strong>En el VPPB NO se solicitan neuroimágenes (TAC ni RMN) y NO se indican sedantes vestibulares de mantenimiento (conarizina, betahistina ni dimenhidrinato)</strong>, ya que los fármacos son completamente ineficaces contra los cristales físicos y retrasan la compensación fisiológica.",
        "• <strong>Neuronitis Vestibular:</strong> Inflamación del nervio vestibular (habitualmente de origen viral post-infeccioso). Produce una <strong>crisis aguda única de vértigo rotatorio severo continuo de varios días de duración (2 a 3 días intensos, con recuperación paulatina en 2 a 4 semanas)</strong>, náuseas, vómitos y marcha con lateropulsión hacia el lado de la lesión. <strong>NO presenta síntomas auditivos</strong> (lo que la diferencia de la laberintitis aguda). Protocolo HINTS periférico típico (Head Impulse positivo con sacada correctiva hacia el lado enfermo). Tratamiento sintomático inicial: reposo y <strong>sedantes vestibulares (dimenhidrinato 50 mg c/8 h o conarizina) restringidos estrictamente a las primeras 48 a 72 horas</strong>; su uso prolongado está proscrito porque impide la neuroplasticidad y compensación vestibular central.",
        "• <strong>Enfermedad de Menière:</strong> Producida por <strong>hidropesía endolinfática</strong> (acumulación y aumento de presión de la endolinfa en el laberinto membranoso). Cursa con la tétrada clásica recurrente: 1) <strong>Crisis de vértigo rotatorio episódico espontáneo de 20 minutos a 12 horas de duración</strong>; 2) <strong>Hipoacusia neurosensorial fluctuante de frecuencias graves</strong>; 3) <strong>Tinnitus ipsilateral continuo o acentuado en las crisis</strong>; y 4) <strong>Sensación de plenitud u ocupación aural</strong>. Manejo: restricción estricta de sal (&lt; 2 g/día), cafeína y tabaco; diuréticos orales (hidroclorotiazida / triamtereno) y Betahistina (24 mg c/12 h)."
      ]
    }
  ],
  "table": {
    "title": "Protocolo HINTS y Diagnóstico Diferencial de Síndromes Vertiginosos Periféricos vs Centrales",
    "headers": [
      "Entidad / Hallazgo",
      "Duración del Vértigo",
      "Gatillante / Relación Postural",
      "Síntomas Auditivos / Focalidad",
      "Examen Físico y Conducta EUNACOM"
    ],
    "rows": [
      [
        "VPPB (Canalitiasis Posterior)",
        "Segundos (< 60 s; típicamente 10-30 s)",
        "SÍ: desencadenado por giros en cama, acostarse o mirar arriba",
        "Ausencia estricta de hipoacusia, tinnitus o focalidad neurológica",
        "Dix-Hallpike (+) con nistagmo torsional y latencia · Curación con Maniobra de Epley · CERO fármacos"
      ],
      [
        "Neuronitis Vestibular",
        "Días continuos (2-3 d intensos; cede en 3 sem)",
        "Continuo espontáneo; se intensifica con movimientos cefálicos",
        "SIN hipoacusia ni tinnitus; solo cortejo vegetativo severo",
        "HINTS periférico: Head Impulse (+) con sacada · Sedantes vestibulares solo 48-72 h + rehabilitación"
      ],
      [
        "Enfermedad de Menière",
        "Horas (20 min a 12-24 h)",
        "Episódico espontáneo recurrente",
        "Hipoacusia fluctuante tonos graves + Tinnitus + Plenitud ótica",
        "Audiometría confirma hipoacusia sensorial · Restricción de sal (< 2 g/d) + Hidroclorotiazida + Betahistina"
      ],
      [
        "ACV Fosa Posterior (PICA/AICA)",
        "Horas a días continuo",
        "Continuo agudo espontáneo; inicio súbito en paciente vascular",
        "Frecuente diplopía, disartria, disfagia, dismetría, ataxia de tronco",
        "HINTS CENTRAL (INFARCT): Head Impulse NORMAL, nistagmo bidireccional o Skew (+) · RMN y UTAC inmediata (GES 37)"
      ],
      [
        "H: Head Impulse Test (Halmagyi)",
        "Prueba del reflejo vestíbulo-ocular (RVO) al rotar rápidamente la cabeza",
        "Periférico: ANORMAL (sacada correctiva hacia el centro)",
        "Central: NORMAL (ojos permanecen en la nariz sin sacada)",
        "¡PARADOJA!: Un impulso cefálico NORMAL en vértigo continuo orienta a ACV isquémico de tronco/cerebelo"
      ],
      [
        "N: Nystagmus Dinámico",
        "Evaluación del nistagmo en mirada primaria y lateral",
        "Periférico: Unidireccional horizontal-rotatorio que se inhibe al fijar",
        "Central: Bidireccional (cambia de sentido al mirar a los lados) o vertical",
        "Nistagmo vertical o que cambia de dirección es patognomónico de lesión central de fosa posterior"
      ],
      [
        "TS: Test of Skew (Oclusión ocular)",
        "Alineación vertical de globos oculares al desocluir alternadamente",
        "Periférico: NORMAL (ojos siempre alineados en plano vertical)",
        "Central: ANORMAL (Skew deviation: sacada de refijación vertical)",
        "La presencia de skew deviation es altamente específica de infarto de troncoencefálico"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 59 años, con antecedentes de dislipidemia en tratamiento con atorvastatina, consulta en el servicio de urgencia por vértigo severo. Refiere que hoy a las 06:30 de la mañana, al sonar el despertador y girar su cabeza hacia la derecha para incorporarse de la cama, la habitación comenzó a dar vueltas de forma violenta, lo que le provocó intensas náuseas y dos episodios de vómitos alimentarios. El episodio más intenso duró aproximadamente 25 a 30 segundos y luego disminuyó al quedarse quieta boca arriba, pero al volver a intentar sentarse o girar la cabeza hacia la derecha el mareo rotatorio reapareció con igual intensidad. No ha presentado dolor de cabeza, pérdida de audición, zumbido de oídos, debilidad motora ni dificultad para hablar. Al examen físico: PA 138/82 mmHg, FC 76 lpm regular, examen neurológico con pares craneales, fuerza, sensibilidad y pruebas cerebelosas (índice-nariz y diadococinesia) rigurosamente normales. Al realizar la maniobra de Dix-Hallpike hacia la derecha, tras una latencia de 4 segundos, la paciente presenta una crisis de vértigo rotatorio intenso y se observa un nistagmo geotrópico torsional y vertical hacia arriba de 20 segundos de duración que se agota espontáneamente.",
    "conducta": "El cuadro clínico descrito es el ejemplo canónico de Vértigo Postural Paroxístico Benigno (VPPB) del conducto semicircular posterior derecho. Sus claves clínicas diagnósticas son: 1) Episodios de vértigo rotatorio intenso de corta duración (segundos, < 1 minuto); 2) Desencadenado de forma reproducible por cambios en la posición cefálica con respecto a la gravedad (incorporarse o girar en cama); 3) Ausencia total de síntomas auditivos (sin hipoacusia ni tinnitus) y de signos de focalidad neurológica; y 4) Maniobra de Dix-Hallpike diagnóstica positiva, que reproduce el vértigo y evidencia el nistagmo torsional geotrópico con latencia, corta duración y fatigabilidad. La conducta médica inmediata e indiscutible es realizar la Maniobra Terapéutica de Reposición de Epley en la camilla de atención, la cual reposiciona mecánicamente las otoconias hacia el utrículo. No está justificado solicitar un TAC de encéfalo ni indicar sedantes vestibulares (conarizina o betahistina), los cuales están contraindicados para el manejo de mantenimiento del VPPB."
  },
  "explicacion": "El cuadro clínico descrito es el ejemplo canónico de Vértigo Postural Paroxístico Benigno (VPPB) del conducto semicircular posterior derecho. Sus claves clínicas diagnósticas son: 1) Episodios de vértigo rotatorio intenso de corta duración (segundos, < 1 minuto); 2) Desencadenado de forma reproducible por cambios en la posición cefálica con respecto a la gravedad (incorporarse o girar en cama); 3) Ausencia total de síntomas auditivos (sin hipoacusia ni tinnitus) y de signos de focalidad neurológica; y 4) Maniobra de Dix-Hallpike diagnóstica positiva, que reproduce el vértigo y evidencia el nistagmo torsional geotrópico con latencia, corta duración y fatigabilidad. La conducta médica inmediata e indiscutible es realizar la Maniobra Terapéutica de Reposición de Epley en la camilla de atención, la cual reposiciona mecánicamente las otoconias hacia el utrículo. No está justificado solicitar un TAC de encéfalo ni indicar sedantes vestibulares (conarizina o betahistina), los cuales están contraindicados para el manejo de mantenimiento del VPPB.",
  "keyPoints": [
    "El vértigo periférico se caracteriza por inicio brusco, gran cortejo vegetativo (náuseas/vómitos) y nistagmo unidireccional que se inhibe al fijar la mirada y no cambia de sentido.",
    "El VPPB es el vértigo más prevalente: dura segundos (< 1 minuto), es gatillado por cambios posturales cefálicos, no tiene hipoacusia y se confirma con Dix-Hallpike (+).",
    "El tratamiento del VPPB es mecánico mediante la Maniobra de Reposición de Epley en la misma consulta; los fármacos antivertiginosos y neuroimágenes NO están indicados.",
    "El Protocolo HINTS a pie de cama supera a la RMN en las primeras 24-48 h del síndrome vestibular agudo para descartar ACV de fosa posterior (tronco/cerebelo).",
    "Regla del ACV en Protocolo HINTS (INFARCT): Impulso cefálico NORMAL, Nistagmo bidireccional (cambia de dirección al mirar a los lados) o Skew deviation presente orientan a ACV central."
  ],
  "questions": [
    {
      "stem": "Un paciente consulta porque hoy al despertar presentó vértigo muy intenso,\nque inició en el momento en que se levantó de la cama. El vértigo dura algunos\nsegundos y se desencadena con los movimientos de la cabeza. No ha presentado\nsíntomas auditivos. Al examen destaca nistagmo horizontal, con fase rápida a\nderecha. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Enfermedad de Meniere"
        },
        {
          "id": "B",
          "text": "Vértigo postural paroxístico benigno"
        },
        {
          "id": "C",
          "text": "Neuronitis vestibular"
        },
        {
          "id": "D",
          "text": "Laberintitis aguda"
        },
        {
          "id": "E",
          "text": "Infarto de cerebelo"
        }
      ],
      "correcta": "B",
      "explicacion": "El diagnóstico más probable es **Vértigo Postural Paroxístico Benigno (VPPB)**. El cuadro clínico descrito es la presentación clásica de esta patología. Analicemos las claves del caso:\n\n1.  **Desencadenante postural:** El vértigo \"inició en el momento en que se levantó de la cama\" y \"se desencadena con los movimientos de la cabeza\". Esta es la característica principal del VPPB, donde el vértigo es provocado por cambios específicos en la posición de la cabeza con respecto a la gravedad.\n2.  **Duración paroxística y breve:** Los episodios duran \"algunos segundos\". Esto es patognomónico del VPPB, cuyos episodios de vértigo rotatorio intenso suelen durar menos de un minuto.\n3.  **Ausencia de síntomas auditivos:** El paciente \"no ha presentado síntomas auditivos\" (como hipoacusia o tinnitus). El VPPB es una alteración puramente vestibular, causada por el desplazamiento de otoconias (cristales de carbonato de calcio) hacia los canales semicirculares, sin afectar la porción coclear (auditiva) del oído interno.\n4.  **Examen físico:** El \"nistagmo horizontal\" (que en el VPPB es más precisamente horizonto-rotatorio) es el signo objetivo que confirma la disfunción vestibular. Este nistagmo, al ser provocado por maniobras como la de Dix-Hallpike, típicamente tiene latencia, es de corta duración y se fatiga con la repetición de la maniobra, coincidiendo con el vértigo referido por el paciente.\n\nLa combinación de vértigo rotatorio intenso, de corta duración, desencadenado por cambios posturales y sin síntomas auditivos asociados es el sello distintivo del Vértigo Postural Paroxístico Benigno.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.025"
    },
    {
      "stem": "Un paciente de 65 años, consulta por vértigo, asociado a vómitos y\ndificultades para caminar, ya que se cae hacia la derecha. No presenta síntomas\nauditivos. Al examen físico se aprecia nistagmo horizontal hacia izquierda y\nlateropulsiones a derecha. No presenta adiadococinesia ni dismetría. Los\nsíntomas se instalaron relativamente rápida y perduraron cerca de 3 semanas,\ndisminuyendo progresivamente hasta desaparecer. Respondían parcialmente\nal tratamiento con conarizina oral. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "AVE cerebeloso"
        },
        {
          "id": "B",
          "text": "Vértigo postural paroxístico benigno"
        },
        {
          "id": "C",
          "text": "Neurinoma del acústico"
        },
        {
          "id": "D",
          "text": "Parálisis vestibular"
        },
        {
          "id": "E",
          "text": "Enfermedad de Meniere"
        }
      ],
      "correcta": "D",
      "explicacion": "La alternativa correcta es **D (Parálisis vestibular)** porque la presentación clínica es altamente sugestiva de una neuronitis vestibular, una forma de parálisis vestibular.  La característica principal es un inicio agudo de vértigo severo, acompañado de náuseas y vómitos, y desequilibrio (lateropulsión), pero sin síntomas auditivos (hipoacusia, tinnitus, plenitud aural).  El nistagmo horizontal, en este caso hacia la izquierda, indica una disfunción del sistema vestibular derecho. La mejoría gradual en el tiempo (3 semanas) es también característica de una neuronitis vestibular, ya que el sistema nervioso central compensa la pérdida de función vestibular unilateral. La conarizina (antihistamínico con propiedades antivertiginosas) suele tener un efecto parcial en la fase aguda, lo cual es consistente con la descripción del caso. La ausencia de signos cerebelosos (adiadococinesia, dismetría) ayuda a descartar patología cerebelosa. No hay una guía clínica específica del MINSAL para neuronitis vestibular, pero el manejo general del vértigo agudo sí está contemplado en la atención primaria.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.025"
    }
  ],
  "vignetteText": "Mujer de 59 años, con antecedentes de dislipidemia en tratamiento con atorvastatina, consulta en el servicio de urgencia por vértigo severo. Refiere que hoy a las 06:30 de la mañana, al sonar el despertador y girar su cabeza hacia la derecha para incorporarse de la cama, la habitación comenzó a dar vueltas de forma violenta, lo que le provocó intensas náuseas y dos episodios de vómitos alimentarios. El episodio más intenso duró aproximadamente 25 a 30 segundos y luego disminuyó al quedarse quieta boca arriba, pero al volver a intentar sentarse o girar la cabeza hacia la derecha el mareo rotatorio reapareció con igual intensidad. No ha presentado dolor de cabeza, pérdida de audición, zumbido de oídos, debilidad motora ni dificultad para hablar. Al examen físico: PA 138/82 mmHg, FC 76 lpm regular, examen neurológico con pares craneales, fuerza, sensibilidad y pruebas cerebelosas (índice-nariz y diadococinesia) rigurosamente normales. Al realizar la maniobra de Dix-Hallpike hacia la derecha, tras una latencia de 4 segundos, la paciente presenta una crisis de vértigo rotatorio intenso y se observa un nistagmo geotrópico torsional y vertical hacia arriba de 20 segundos de duración que se agota espontáneamente."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "vertiginoso, periferico, central, maniobras, protocolo")
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

### [2] EUNACOM Diciembre 2018 · Pregunta 150 · confianza 0.97
Un paciente de 77 años, con antecedente de hipertensión arterial crónica, presenta visión distorsionada de las letras y refiere que las líneas se ven onduladas. Actualmente tiene un escotoma central. Se hace un fondo de ojo, que se muestra a continuación: Foto 14 (https://www.elmundo.es/elmundosalud/2007/01/25/medicina/1169733276.html). El diagnóstico más probable es:
- A) Desprendimiento de retina
- B) Retinopatía hipertensiva
- C) Trombosis de la vena central de la retina
- D) Catarata
- E) Degeneración macular relacionada con la edad
**Correcta: E**
Explicación del banco: Es un DMRE clásica, tanto por la clínica (metamorfopsias y escotoma central), como por el fondo de ojo (aunque se veían exudados y hemorragias maculares y no solo drusas).

### [3] EUNACOM Julio 2013 · Pregunta 155 · confianza 0.97
Una paciente de 55 años, se lava las manos recurrentemente porque siente que se encuentran sucias, el hecho de no hacerlo rápidamente le provoca gran angustia. Esto le ha provocado dermatitis en sus manos, por lo cual está preocupada. Sabe que esta conducta no tiene sentido, pero no puede evitarlo. El diagnóstico más probable es:
- A) Trastorno de ansiedad
- B) Ansiedad específica
- C) Trastorno dismórfico corporal
- D) Trastorno disociativo
- E) Trastorno obsesivo compulsivo
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Trastorno obsesivo compulsivo). En este escenario clínico, trastorno obsesivo compulsivo se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [4] EUNACOM Diciembre 2025 · Pregunta 3 · confianza 0.95
Un paciente de 28 años consulta por dolor torácico y disnea de 2 horas de evolución. Al examen Fsico presenta taquicardia a 170 lpm, presión arterial 120/80 mmHg y un examen cardiopulmonar con ritmo regular en dos tonos, sin soplos, en la auscultación cardíaca y murmullo pulmonar presente, sin ruidos agregados, en la auscultación pulmonar. Se solicita un electrocardiograma que se muestra a con8nuación: ¿Cuál es la conducta más adecuada?
- A) Verapamilo endovenoso
- B) Amiodarona endovenosa
- C) Adrenalina endovenosa
- D) Adenosina endovenosa
- E) Cardioversión eléctrica
**Correcta: D**
Explicación del banco: Tiene una TPSV clásica. El tratamiento de primera línea son las maniobras vagales (ej. Valsalva modiﬁcado es la más recomendada en adultos y niños que cooperan; en niños pequeño se preﬁere la inmersión facial en agua fría. El masaje caroVdeo se puede usar en adultos, pero no se recomienda en niños ni en adultos mayores con riesgo de ateroma caroVdeo que se pueda soltar). De segunda línea se uGlizan fármacos, siendo de elección la adenosina en bolo EV de 6 mg. Si falla, se dan hasta dos nuevas dosis de 12 mg. Si vuelve a fallar, se usa el verapamilo (contraindicado en falla cardíaca e hipotensión). Como toda taquiarritmia, si está hemodinámicamente inestable, de primera línea se maneja con cardioversión eléctrica.

### [5] EUNACOM Diciembre 2025 · Pregunta 35 · confianza 0.95
Un paciente de 23 años sufre una caída mientras jugaba fútbol, cayendo con el hombro derecho contra el piso y resultando en una luxación anterior de hombro derecho, la cual es conﬁrmada con radiograFas de hombro, las cuales descartan la presencia de fracturas. ¿Qué evaluación debe realizarse obligatoriamente en el examen Fsico antes de proceder con las maniobras de reducción?
- A) Buscar presencia de equimosis
- B) Buscar deformación en “charretera”
- C) Explorar la sensibilidad de la zona deltoidea
- D) Evaluar la impotencia funcional
- E) Evaluar crépito óseo
**Correcta: C**
Explicación del banco: La luxación anterior se asocia a lesión del nervio axilar o circunﬂejo, que inerva al deltoides (abducción del hombro) y la sensibilidad en la zona deltoidea. Se debe consignar su alteración antes de la reducción, para que no se culpe luego al médico de haberla causado durante la reducción. Las demás opciones ya han sido evaluadas mediante la clínica (la luxación Gene hombro “en charretera”, impotencia funcional) y la radiografía.

### [6] EUNACOM Diciembre 2022 · Pregunta 87 · confianza 0.95
Un paciente de 22 años consulta por palpitaciones de inicio súbito, rápidas y molestas, que duraron cerca de 30 minutos y desaparecieron con maniobras vagales. Refiere que había presentado episodios previos, pero de menor duración y autolimitados. Actualmente está en buenas condiciones y al examen físico, no presenta alteraciones. Trae un electrocardiograma, que se muestra a continuación (fuente: cardioteca.com): ¿Cuál es el diagnóstico más probable?
- A) Fibrilación auricular
- B) Síndrome de Wolff Parkinson White
- C) Bloqueo completo de rama izquierda
- D) Flutter auricular
- E) Síndrome de Brugada
**Correcta: C**
Explicación del banco: Diagnóstico: **Bloqueo completo de rama izquierda** (opción **C**). La taquicardia paroxística supraventricular (TPSV) es una taquicardia regular de complejos angostos con inicio y término súbitos. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [7] EUNACOM Agosto 2021 · Pregunta 137 · confianza 0.95
Un paciente de 71 años, con antecedente de reemplazo valvular tricuspídeo, secundario a una endocarditis bacteriana, con prótesis biológica in situ consulta por consulta por palpitaciones muy intensas, asociadas a disnea. Al examen físico tiene un pulso a 140 latidos por minutos, regular. Se realizan maniobras vagales (masaje carotídeo) y se observa el siguiente electrocardiograma (fuente: slideshare): El diagnóstico más probable es:
- A) Taquicardia paroxística supraventricular
- B) Fibrilación auricular
- C) Flutter auricular
- D) Síndrome de Wolff Parkinson White
- E) Taquicardia auricular
**Correcta: C**
Explicación del banco: En las últimas dos derivaciones se ven claramente las ondas de serrucho (que aparecen con la maniobra vagal, ya que bradicardiza y aumenta el bloqueo AV), características del flutter.

### [8] EUNACOM Julio 2019 · Pregunta 177 · confianza 0.95
Un paciente de 65 años, con antecedente de un infarto agudo al miocardio, hace 2 años, presenta un síncope, con compromiso de conciencia que requirió maniobras de reanimación para recuperarse. ¿Qué arritmia es la que debe descartarse en primer lugar?
- A) Taquicardia paroxística supraventricular
- B) Bloqueo auriculoventricular completo
- C) Síndrome de Wolff Parkinson White
- D) Taquicardia ventricular
- E) Fibrilación auricular
**Correcta: D**
Explicación del banco: Si bien cualquier arritmia se puede presentar así, el antecedente de un IAM previo orienta mucho a TV. Además, la TV suele ser más grave y letal que las demás, por lo que la necesidad de maniobras de reanimación orienta también a TV.

### [9] EUNACOM Diciembre 2019 · Pregunta 33 · confianza 0.95
Un paciente de 68 años, con antecedente de diabetes mellitus tipo 2, consulta por disminución progresiva de la agudeza visual del ojo derecho. En su evaluación, tiene agudeza visual 20/20 en el ojo izquierdo y 15/20 en el ojo derecho. Su rojo pupilar demuestra una opacidad central con forma de estrella. ¿Cuál es el diagnóstico más probable?
- A) Retinopatía diabética
- B) Edema macular
- C) Catarata
- D) Glaucoma
- E) Hemorragia vítrea
**Correcta: C**
Explicación del banco: Es una catarata clásica por la disminución de la AV y por la alteración del rojo pupilar (la opacidad como estrella es la catarata misma). La RD no tiene síntomas; el edema macular tiene disminución de la AV en pocos días y no altera el rojo pupilar. El glaucoma no afecta la AV, sino el campo visual y no afecta el rojo pupilar. La HV tiene aparición súbita y se pierde el rojo pupilar.

### [10] EUNACOM Julio 2017 · Pregunta 16 · confianza 0.95
Un paciente de 68 años, con antecedente de diabetes mellitus tipo 2, consulta por disminución progresiva de la agudeza visual del ojo derecho. En su evaluación, tiene agudeza visual 20/20 en el ojo izquierdo y 10/20 en el ojo derecho. Su rojo pupilar de- muestra una opacidad con forma de estrella, en la zona central. ¿Cuál es el diagnóstico más probable?
- A) Desprendimiento de retina
- B) Edema macular
- C) Catarata
- D) Glaucoma
- E) Retinopatía diabética proliferativa
**Correcta: C**
Explicación del banco: Diagnóstico: **Catarata** (opción **C**). Es una catarata inicial.. La pérdida súbita de visión es una emergencia oftalmológica que puede tener múltiples etiologías, cada una con características clínicas y hallazgos específicos que permiten orientar el diagnóstico. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [11] EUNACOM Julio 2025 · Pregunta 44 · confianza 0.92
Joven de 22 años con palpitaciones súbitas de inicio y término brusco. ECG en crisis: taquicardia regular de QRS estrecho a 180 lpm. Cede con maniobra de Valsalva. ¿Cuál es el tratamiento farmacológico de elección si reaparece?
- A) Adenosina IV en bolo rápido
- B) Amiodarona EV
- C) Metoprolol oral
- D) Digoxina IV
- E) Cardioversión eléctrica sincronizada
**Correcta: A**
Explicación del banco: TPSV (taquicardia paroxística supraventricular) estable: si maniobras vagales fallan, adenosina IV 6 mg en bolo rápido es el tratamiento de elección por su efecto ultrabreve sobre el nodo AV.

### [12] EUNACOM Diciembre 2025 · Pregunta 156 · confianza 0.92
Una paciente de 42 años consulta por dolor ocular derecho, asociado a ojo rojo que inició hace 5 horas y se ha vuelto muy intenso. Al examen Fsico, presenta epífora y ojo rojo derecho de 8po central. Como antecedente, 8ene as8gma8smo y es usuaria de lentes de contacto. ¿Cuál de los siguientes exámenes es más adecuado para conﬁrmar la sospecha diagnós8ca?
- A) Fondo de ojo
- B) Tonometría ocular
- C) TAC de órbitas
- D) Tinción con ﬂuoresceína
- E) Gonioscopía
**Correcta: D**
Explicación del banco: La sospecha clínica es una queraGGs o una erosión corneal. El uso de lentes de contacto podría ser la causa. Con la Gnción con ﬂuoresceína se pueden ver mejor las úlceras y erosiones corneales. La genioscopía es úGl en la evaluación del glaucoma agudo.

### [13] EUNACOM Diciembre 2018 · Pregunta 95 · confianza 0.92
Un paciente de 40 años, con antecedente de reemplazo valvular, secundario a una endocarditis bacteriana, consulta por consulta por palpitaciones muy intensas, asociadas a disnea. Al examen físico tiene un pulso a 140 latidos por minutos, regular. Se realizan maniobras vagales (masaje carotídeo) y se observa el siguiente electrocardiograma: Foto 9 (https://www.slideshare.net/XXXXchandrabarik/svtalogarythm). El diagnóstico más probable es:
- A) Taquicardia paroxística supraventricular
- B) Fibrilación auricular
- C) Flutter auricular
- D) Síndrome de Wolff Parkinson White
- E) Taquicardia auricular
**Correcta: C**
Explicación del banco: Con las maniobras vagales baja la frecuencia, se ven las ondas de serrucho y luego vuelve a aumentar la frecuencia. Es lo clásico del ﬂutter auricular.

### [14] EUNACOM Diciembre 2025 · Pregunta 170 · confianza 0.9
Un paciente de 70 años, con antecedentes de hipertensión arterial, diabetes mellitus 8po 2 y revascularización coronaria hace 3 años, consulta porque hace pocas horas notó que, de forma súbita, dejó de ver su pierna derecha con el ojo derecho. Al examen Fsico presenta inspección ocular normal, agudeza visual 20/30 en el ojo derecho y 20/20 en el ojo izquierdo, pupilas isocóricas con defecto pupilar aferente rela8vo, y en la campimetría por confrontación se observa hemianopsia inferior del ojo derecho. El diagnós8co más probable es:
- A) Neuri2s óp2ca isquémica
- B) Infarto del lóbulo occipital
- C) Desprendimiento de re2na
- D) Glaucoma
- E) Degeneración macular relacionada con la edad
**Correcta: A**
Explicación del banco: Tanto por el inicio súbito, con factores de riesgo cardiovascular, como por el defecto pupilar aferente relativo (DPAR), es una neuropaVa óptica isquémica, con afectación de la zona superior del nervio óptico derecho (inerva la zona superior de la reGna y corresponde a la zona inferior del campo visual). El DPAR se ve también en la neuriGs óptica desmielinizante y en el desprendimiento de reGna extenso o en la oclusión de la arteria central de la reGna.

### [15] EUNACOM Diciembre 2024 · Pregunta 67 · confianza 0.9
Psicofármaco contraindicado en trastorno de estrés post traumático
- A) benzodiazepinas
- B) ISRS
- C) Triciclicos
- D) Antipsicoticos tipicos
- E) Antipsicóticos atípicos
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (benzodiazepinas). En este escenario clínico, benzodiazepinas se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [16] EUNACOM Diciembre 2024 · Pregunta 2 · confianza 0.9
Mujer 30 años con aparición de Placa eritematodescamativa de 2 meses de evolución en pómulo derecho de 3 cm de diámetro y otra similar en cuero cabelludo (zona parietal izquierda) con alopecia central.
- A) Lupus cutáneo crónico
- B) Dermatitis seborreica
- C) Psoriasis
- D) Liquen plano
- E) Rosácea
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Lupus cutáneo crónico). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Dermatitis seborreica, Psoriasis) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [17] EUNACOM Enero 2023 · Pregunta 141 · confianza 0.9
Paciente con palpitaciones regulares y taquicardia supraventricular en el ECG. ¿Cuál es el tratamiento más adecuado?
- A) Verapamilo 5 mg EV lento
- B) Amiodarona 300 mg EV
- C) Cardioversión eléctrica sincronizada
- D) Metoprolol 5 mg EV
- E) Adenosina 6 mg IV en bolo rápido
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Adenosina 6 mg IV en bolo rápido** (opción **E**). Adenosina 6 mg IV en bolo rápido. Las maniobras vagales son el primer paso en el manejo agudo de la TPSV De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [18] EUNACOM Diciembre 2022 · Pregunta 59 · confianza 0.9
Un paciente de 28 años consulta por un cuadro de 3 horas de evolución de palpitaciones intensas, asociadas a disnea. Al examen físico, tiene FC: 160 por minuto, regular, PA: 110/70 mmHg, examen cardíaco con ritmo regular en dos tiempos, sin soplos y murmullo pulmonar presente, sin ruidos agregados. Se realiza un electrocardiograma, que se muestra a continuación: ¿Cuál es el tratamiento más adecuado?
- A) Amiodarona 150 mg endovenosa
- B) Lidocaína 100 mg endovenosa
- C) Adenosina 6mg intravenosa
- D) Diltiazem 25 mg endovenoso
- E) cardioversión eléctrica
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Adenosina 6mg intravenosa** (opción **C**). Las maniobras vagales son el primer paso en el manejo agudo de la TPSV De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [19] EUNACOM Diciembre 2022 · Pregunta 132 · confianza 0.9
Un paciente de 70 años ha presentado 3 episodios de dolor y aumento de volumen de la rodilla derecha, que le impide o dificulta la marcha, pero que ha respondido a analgésicos. Acude nuevamente por los mismos síntomas, objetivándose artritis de rodilla derecha, con signos de derrame articular, por lo que se punciona, dando salida a un líquido articular inflamatorio, con abundantes cristales de pirofosfato de calcio, sin bacterias. ¿Qué fármaco es más adecuado para evitar recurrencias?
- A) Colchicina
- B) Naproxeno
- C) Alopurinol
- D) Hidroclorotiazida
- E) Metotrexato
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (Colchicina). En este escenario clínico, colchicina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [20] EUNACOM Agosto 2021 · Pregunta 82 · confianza 0.9
Una paciente de 43 años, secretaria, consulta porque, desde hace dos semanas, presenta dolor en el hombro derecho, que es más intenso durante la noche y que empeora con los movimientos del mismo, por lo que ha ido limitando sus actividades normales. El dolor aumenta con la abducción y con la elevación del brazo derecho, por sobre el hombro. Al examen físico tiene movilidad completa del hombro, con dolor en las maniobras descritas. ¿Cuál es el diagnóstico más probable?
- A) Capsulitis adhesiva de hombro
- B) Tendinopatía del manguito rotador
- C) Disyunción acromioclavicular
- D) Tendinopatía de la cabeza larga del bíceps braquial
- E) Hernia cervical con compresión radicular
**Correcta: B**
Explicación del banco: Es una tendinopatía del manguito rotador clásica. La capsulitis adhesiva suele tener más dolor con clara limitación a los movimientos, por el dolor y, en la última fase, por fibrosis del hombro (por eso se le llama "hombro congelado"). La tendinitis de la cabeza larga del bíceps o simplemente "tendinitis bicipital" suele presentar dolor en la cara anterior del hombro, irradiado a la zona proximal del brazo y asociarse a dolor al comprimir la corredera bicipital (si se rompe el tendón, además, se presenta un chasquido, dolor súbito y equimosis de la zona).

### [21] EUNACOM Agosto 2021 · Pregunta 145 · confianza 0.9
Un paciente de 67 años, usuario de sildenafil, que se automedica como tratamiento de impotencia sexual, presenta dolor torácico intenso, que inició una hora después de haber consumido dicho medicamento. Se solicita un electrocardiograma, que muestra suprdesnivel del segmento ST en las derivaciones inferiores. ¿Qué fármaco está contraindicado en el manejo de este paciente?
- A) Clopidogrel
- B) Aspirina
- C) Atenolol
- D) Nitroglicerina
- E) Estreptoquinasa
**Correcta: D**
Explicación del banco: La opción correcta es la **D** (Nitroglicerina). En este escenario clínico, nitroglicerina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [22] EUNACOM Julio 2016 · Pregunta 153 · confianza 0.9
Un paciente de 64 años, con antecedente de hipertensión arterial, dislipidemia y tabaquismo, presenta pérdida de la visión del ojo izquierdo, con instalación súbita. Al examen, es capaz de distinguir la luz de la sombra y contar dedos y destaca defecto pupilar aferente relativo. El diagnóstico más probable es:
- A) Glaucoma agudo
- B) Glaucoma crónico terminal
- C) Neuritis óptica
- D) Neuropatía óptica isquémica
- E) Desprendimiento de retina
**Correcta: D**
Explicación del banco: Parecía una trombosis de la vena central, pero no aparece en las opciones. Por tener DPAR (defecto pupilar aferente relativo) sugiere un desprendimiento de retina, pero le falta tener fotopsias o entopsias que antecedan. Así, dados los antecedentes, lo más probable es la neuropatía óptica isquémica. No puede ser una neuritis óptica, porque esta no es súbita, sino que aparece en varias horas.

### [23] EUNACOM Julio 2015 · Pregunta 82 · confianza 0.9
Una paciente de 20 años presenta mucha ansiedad ante las situaciones en que debe hacer exposiciones o presentaciones ante los demás. Presenta sudoración y palpitaciones antes de las presentaciones, con opresión cordial y disnea y esta dispuesta incluso a aumentar su carga de trabajo, con tal de evitar ese tipo de situaciones. ¿Cuál es el diagnóstico más probable?
- A) Trastorno de ansiedad generalizada
- B) Trastorno de personalidad evitativo
- C) Trastorno de personalidad dependiente
- D) Trastorno de angustia
- E) Trastorno de ansiedad social
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Trastorno de ansiedad social). En este escenario clínico, trastorno de ansiedad social se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [24] EUNACOM Julio 2015 · Pregunta 137 · confianza 0.9
Un paciente de 67 años, fumador de 15 paquetes-año, pero que dejó de fumar hace 10 años, jubilado de la minería, consulta por disnea de esfuerzos, progresiva, de 6 meses de evolución, asociada a tos. Al examen físico presenta murmullo pulmonar globalmente disminuido, sibilancias y roncus bilaterales, asociados a crepitaciones difusas. Se solicita una radiografía de tórax que se muestra a continuación: NOTA: la radiografía inicial mostraba infiltrados bilaterales, mayores en las zonas centrales, con imágenes verticales, onduladas de 1-2 cm en ambos campos pulmonares. ¿Cuál es el diagnóstico más probable?
- A) Bronquitis crónica
- B) Neumoconiosis
- C) Cáncer de pulmón
- D) Limitación crónica del flujo aéreo
- E) Fibrosis pulmonar idiopática
**Correcta: B**
Explicación del banco: Diagnóstico: **Neumoconiosis** (opción **B**). Antecedente de minería orienta a neumoconiosis. La Rx era distinta a la que ahí se muestra.. Las enfermedades intersticiales pulmonares difusas tienen múltiples causas, siendo la fibrosis pulmonar idiopática (FPI/UIP) la más frecuente y de peor pronóstico, sin tratamiento específico más allá del sintomático (oxígeno, salbutamol). Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [25] EUNACOM Julio 2013 · Pregunta 69 · confianza 0.9
Un paciente de 10 años, es traído por cuadro de inicio agudo de dos horas de evolución caracterizados por palpitaciones y dolor torácico. Al ingreso se conecta a monitor que muestra frecuencia cardiaca de 200 latidos por minutos, regular y QRS angosto. La primera medida para el manejo en este caso es:
- A) Realizar presión orcular
- B) Realizar cardioversión eléctrica
- C) Administrar adenosina endovenosa
- D) Realizar masaje carotídeo
- E) Administrar verapamilo endovenoso
**Correcta: D**
Explicación del banco: Conducta / Tratamiento indicado: **Realizar masaje carotídeo** (opción **D**). Tiene una TPSV y lo primero son las maniobras vagales, luego la adenosina.. Las maniobras vagales son el primer paso en el manejo agudo de la TPSV De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.
