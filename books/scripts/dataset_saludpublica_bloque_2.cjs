/**
 * TOMO 21: SALUD PÚBLICA, EPIDEMIOLOGÍA & BIOÉTICA · BLOQUE 2
 * Epidemiología Clínica, Bioestadística & Tamizaje (21.6 a 21.10)
 */

const { flowSaludPublica } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "sp-06",
    "classId": "sp-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Epidemiología Clínica, Bioestadística & Tamizaje",
    "topicLabel": "21.6",
    "title": "Diseños de Estudios Epidemiológicos: Observacionales y Experimentales",
    "perfilCode": "7.01.3.020",
    "dx": "Diseño de Investigación",
    "tx": "Jerarquía de Evidencia",
    "seg": "Causalidad y Validez",
    "ges": "Epidemiología Analítica y Metodología de la Investigación Clínica",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#93) · EUNACOM Julio 2024 (Q#16) · EUNACOM Diciembre 2023 (Q#62)",
    "frecuencia": "Máxima Rentabilidad · Pregunta fija en cada EUNACOM diferenciando Casos y Controles vs Cohortes vs Transversal vs ECA",
    "svg": null,
    "algoTitle": "Algoritmo de Identificación del Diseño de Estudio Epidemiológico",
    "diagramRows": [
      {
        "t": "Investigador Plantea una Pregunta Científica o Evalúa una Asociación Causal",
        "s": "¿El investigador asigna la exposición / intervención de forma activa?",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Existe Intervención Asignada por el Investigador?",
        "al": "Experimental vs Observacional",
        "ll": "SÍ: Estudio Experimental",
        "left": {
          "t": "ENSAYO CLÍNICO ALEATORIZADO (ECA)",
          "s": "Asignación aleatoria (randomizada) y enmascaramiento · Máximo nivel de evidencia de causalidad",
          "type": "acc"
        },
        "rl": "NO: Estudio Observacional",
        "right": {
          "t": "¿Unidad de Análisis Individual o Poblacional?",
          "s": "Población agregada: Estudio Ecológico · Individuos: Transversal, Casos y Controles o Cohortes",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "En Estudios Observacionales con Individuos: ¿Criterio de Selección de los Sujetos?",
        "al": "Exposición vs Desenlace",
        "ll": "Selección por EXPOSICIÓN (Sanos)",
        "left": {
          "t": "ESTUDIO DE COHORTES",
          "s": "Sigue en el tiempo expuestos vs no expuestos · Mide INCIDENCIA directa y Riesgo Relativo (RR)",
          "type": "acc"
        },
        "rl": "Selección por EVENTO (Enfermos)",
        "right": {
          "t": "CASOS Y CONTROLES",
          "s": "Compara antecedentes de exposición previa · Retrospectivo · Mide Odds Ratio (OR)",
          "type": "crit"
        }
      },
      {
        "t": "Si Exposición y Enfermedad se Miden Simultáneamente en un Solo Momento: ESTUDIO TRANSVERSAL (Mide Prevalencia, no causalidad)",
        "s": "Útil para planificar recursos sanitarios y generar hipótesis etiológicas preliminares",
        "type": "warn"
      }
    ],
    "contexto": "La identificación precisa del diseño de un estudio epidemiológico a partir de una viñeta clínica metodológica es una de las preguntas cardinales de Salud Pública en el examen EUNACOM. Reconocer el criterio de selección de los participantes (por exposición en cohortes vs por enfermedad en casos y controles), la temporalidad (longitudinal vs transversal), la unidad de análisis (individual vs agregada en ecológicos) y el control de la exposición (observacional vs experimental aleatorizado) permite deducir inmediatamente la medida de asociación calculable y sus posibles sesgos.",
    "contentSections": [
      {
        "subhead": "1. Clasificación Taxonómica de los Estudios Epidemiológicos",
        "paragraphs": [
          "Los estudios se clasifican según cuatro ejes fundamentales:\n• Según control de la intervención: Experimentales (el investigador asigna de forma controlada y deliberada la exposición o fármaco) vs Observacionales (el investigador observa pasivamente la naturaleza sin manipular la exposición).\n• Según direccionalidad temporal: Prospectivos (se inicia antes de que ocurra el evento de salud y se sigue en el tiempo) vs Retrospectivos (el evento ya ocurrió al momento de iniciar la investigación).\n• Según número de mediciones: Transversales (una sola medición simultánea en el tiempo) vs Longitudinales (mínimo dos mediciones separadas en el tiempo, permitiendo evaluar seguimiento e incidencia).\n• Según unidad de análisis: Agregados o Poblacionales (países, regiones o comunas; estudios ecológicos) vs Individuales (datos específicos de cada paciente)."
        ]
      },
      {
        "subhead": "2. Estudios Observacionales Individuales",
        "paragraphs": [
          "1. Estudio Transversal (de Prevalencia o Corte Transversal):\n• Características: Evalúa la exposición y la enfermedad de manera simultánea en una muestra poblacional en un único punto en el tiempo. No existe período de seguimiento.\n• Ventajas: Rápido, económico, excelente para medir prevalencia y estimar necesidades de recursos en salud pública.\n• Limitación crítica: Ambigüedad temporal (no se puede determinar si la causa precedió al efecto; el huevo o la gallina); NO mide incidencia ni causalidad.",
          "2. Estudio de Casos y Controles:\n• Selección de la muestra: Se seleccionan sujetos ENFERMOS (Casos) y sujetos SIN la enfermedad (Controles) procedentes de la misma población base. Luego se investiga retrospectivamente la frecuencia de antecedentes de exposición en ambos grupos.\n• Ventajas: Eficiente y de elección para ENFERMEDADES RARAS (baja incidencia) o con largos períodos de latencia (cáncer). Permite evaluar múltiples exposiciones para una misma patología.\n• Limitaciones: No puede calcular directamente la incidencia poblacional ni el Riesgo Relativo; su medida de asociación es el Odds Ratio (OR). Muy vulnerable al Sesgo de Memoria (recall bias) y al Sesgo de Selección de controles.",
          "3. Estudio de Cohortes:\n• Selección de la muestra: Se seleccionan sujetos SANOS (libres de la enfermedad de interés) y se clasifican según estén EXPUESTOS o NO EXPUESTOS al factor de riesgo sospechado. Se siguen a lo largo del tiempo para registrar la aparición de casos nuevos (incidencia).\n• Ventajas: Establece con certeza la secuencia temporal (la causa precede al efecto). De elección para EXPOSICIONES INFRECUENTES (radiación, tóxicos ocupacionales). Permite medir directamente la Incidencia Acumulada, la Densidad de Incidencia y el Riesgo Relativo (RR), así como evaluar múltiples consecuencias de una misma exposición.\n• Limitaciones: Muy costoso, prolongado en el tiempo y vulnerable a Pérdidas de Seguimiento (attrition bias)."
        ]
      },
      {
        "subhead": "3. Estudios Experimentales: Ensayo Clínico Controlado Aleatorizado (ECA)",
        "paragraphs": [
          "El Ensayo Clínico Aleatorizado (ECA) es el estándar de oro (gold standard) metodológico para evaluar la eficacia y seguridad de intervenciones terapéuticas o preventivas:\n• Aleatorización (Randomización): Distribución al azar de los sujetos en el grupo intervención o grupo control. Su función principal es distribuir equilibradamente tanto los factores de confusión conocidos como los desconocidos entre ambos grupos, asegurando su comparabilidad basal.\n• Enmascaramiento (Ciego): Evita que el conocimiento de la intervención altere el comportamiento del paciente o la evaluación del evaluador. Simple ciego (el paciente desconoce qué recibe), Doble ciego (paciente y médico tratante/evaluador desconocen), Triple ciego (paciente, médico y analista bioestadístico desconocen).\n• Fases del Desarrollo Farmacológico:\n  - Fase I: Primera administración en humanos (20-80 voluntarios sanos); evalúa seguridad, dosis máxima tolerada y farmacocinética.\n  - Fase II: Pacientes enfermos (100-300 sujetos); evalúa eficacia preliminar y rango de dosis terapéutica.\n  - Fase III: ECA multicéntrico masivo (miles de pacientes); compara el nuevo fármaco contra el tratamiento estándar o placebo para aprobación regulatoria.\n  - Fase IV: Farmacovigilancia post-comercialización en población general a largo plazo; detecta reacciones adversas raras o a largo plazo."
        ]
      },
      {
        "subhead": "4. Estudios Ecológicos y Falacia Ecológica",
        "paragraphs": [
          "Los estudios ecológicos analizan datos de variables agregadas a nivel poblacional (países, comunas, ciudades), como la correlación entre el consumo per cápita de sal por país y la tasa de mortalidad por ACV. Su principal debilidad es la Falacia Ecológica: error lógico de inferir o atribuir asociaciones a nivel de individuos a partir de datos correlacionales observados exclusivamente a nivel grupal o poblacional."
        ]
      }
    ],
    "table": {
      "title": "Comparación Metodológica Cardinal entre Diseños Epidemiológicos",
      "headers": [
        "Diseño de Estudio",
        "Criterio de Selección",
        "Dirección Temporal",
        "Medida de Frecuencia",
        "Medida de Asociación"
      ],
      "rows": [
        [
          "Transversal",
          "Muestra poblacional general",
          "Un solo momento (simultáneo)",
          "Prevalencia",
          "Razón de Prevalencias / Odds Ratio"
        ],
        [
          "Casos y Controles",
          "Por Enfermedad (Casos vs Controles)",
          "Retrospectiva hacia el pasado",
          "Proporción de expuestos",
          "Odds Ratio (OR)"
        ],
        [
          "Cohortes",
          "Por Exposición (Expuestos vs No Expuestos)",
          "Longitudinal / Seguimiento en tiempo",
          "Incidencia (IA o DI)",
          "Riesgo Relativo (RR)"
        ],
        [
          "Ensayo Clínico (ECA)",
          "Asignación aleatoria por investigador",
          "Prospectivo experimental controlado",
          "Incidencia del evento",
          "Riesgo Relativo / Reducción Riesgo"
        ],
        [
          "Ecológico",
          "Poblaciones completas (países, comunas)",
          "Corte o series temporales",
          "Tasas brutas poblacionales",
          "Coeficiente de Correlación (r)"
        ]
      ]
    },
    "severityTable": {
      "title": "Elección del Diseño según la Pregunta Clínica y Características del Evento",
      "headers": [
        "Escenario de Investigación",
        "Diseño Óptimo Recomendado",
        "Justificación Metodológica",
        "Principal Riesgo de Sesgo"
      ],
      "rows": [
        [
          "Enfermedad muy rara (ej: sarcoma óseo)",
          "Casos y Controles",
          "Permite reclutar suficientes enfermos sin esperar décadas",
          "Sesgo de memoria (recuerdo de exposición)"
        ],
        [
          "Exposición infrecuente (ej: químico industrial)",
          "Cohortes (fija o laboral)",
          "Garantiza seguir a los expuestos y ver múltiples desenlaces",
          "Pérdidas de seguimiento de sujetos"
        ],
        [
          "Eficacia de un nuevo fármaco antihipertensivo",
          "Ensayo Clínico Aleatorizado Doble Ciego",
          "La aleatorización neutraliza factores de confusión",
          "Pérdida de validez externa si criterios son muy estrictos"
        ],
        [
          "Conocer prevalencia de diabetes en Chile",
          "Estudio Transversal Poblacional (ENS)",
          "Representatividad censal en un punto temporal",
          "Ambigüedad temporal (no establece causa)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Fases de los Ensayos Clínicos en Farmacología Clínica",
      "headers": [
        "Fase",
        "Población Sujeto",
        "Objetivo Primario",
        "Diseño Habitual"
      ],
      "rows": [
        [
          "Fase I",
          "20 a 80 voluntarios sanos",
          "Seguridad, toxicidad, dosis máxima y farmacocinética",
          "Abierto, no comparativo"
        ],
        [
          "Fase II",
          "100 a 300 pacientes con la enfermedad",
          "Eficacia preliminar, curva dosis-respuesta y seguridad",
          "Controlado, con o sin aleatorización"
        ],
        [
          "Fase III",
          "1.000 a 3.000+ pacientes con la patología",
          "Confirmar eficacia frente a estándar o placebo (aprobación ISP/FDA)",
          "ECA multicéntrico, aleatorizado, doble ciego"
        ],
        [
          "Fase IV",
          "Población general que consume el fármaco",
          "Farmacovigilancia post-comercialización, RAMs raras",
          "Estudios observacionales a gran escala"
        ]
      ]
    },
    "vignette": {
      "text": "Un grupo de investigadores desea estudiar si la exposición laboral crónica a solventes orgánicos industriales está asociada con el desarrollo de esclerosis lateral amiotrófica (ELA). Debido a que la ELA es una enfermedad de incidencia sumamente baja en la población general (1-2 casos por 100.000 personas-año), los investigadores deciden reclutar a 150 pacientes con diagnóstico confirmado de ELA en centros neurológicos y a 300 pacientes hospitalizados sin patología neurodegenerativa, interrogando exhaustivamente a ambos grupos sobre su historial laboral en los últimos 20 años.",
      "conducta": "El diseño corresponde a un Estudio de Casos y Controles. La selección de los participantes se realizó en función de la presencia de la enfermedad (Casos con ELA vs Controles sin ELA) y la indagación de la exposición a solventes se realiza retrospectivamente. Es el diseño metodológicamente más eficiente y económico para estudiar patologías raras."
    },
    "explicacion": "En el estudio de Casos y Controles, la conformación de las cohortes de comparación se define en función del resultado o desenlace clínico (tener la enfermedad versus no tenerla). Este diseño es el más idóneo y costo-efectivo cuando se investigan enfermedades de baja prevalencia o baja incidencia (enfermedades raras como la ELA), ya que un estudio de cohortes requeriría seguir a cientos de miles de personas durante décadas para observar un número suficiente de casos.",
    "keyPoints": [
      "Casos y Controles: Se seleccionan por ENFERMEDAD; retrospectivo; de elección para patologías raras; medida: Odds Ratio (OR).",
      "Cohortes: Se seleccionan por EXPOSICIÓN (sanos al inicio); longitudinal/seguimiento; mide Incidencia directa y Riesgo Relativo (RR); óptimo para exposiciones raras.",
      "Transversal: Exposición y enfermedad medidas simultáneamente; calcula Prevalencia; NO permite probar causalidad por ambigüedad temporal.",
      "ECA: Estándar de oro de causalidad terapéutica; la aleatorización neutraliza factores de confusión conocidos y desconocidos.",
      "Estudio Ecológico: Unidad de análisis agregada (poblaciones, países); susceptible a la Falacia Ecológica (atribuir a individuos lo observado en grupos).",
      "Fases de ECA: Fase I (seguridad en sanos), Fase II (dosis en enfermos), Fase III (eficacia y registro frente a estándar), Fase IV (farmacovigilancia)."
    ],
    "questions": [
      {
        "stem": "Un equipo de epidemiólogos desea evaluar la hipótesis de que el consumo habitual de bebidas azucaradas durante la adolescencia incrementa el riesgo de desarrollar esteatohepatitis no alcohólica (EHNA). Para ello, reclutan a 5.000 adolescentes sanos de 14 años, evalúan con precisión su consumo dietético y los siguen anualmente mediante ecografía y enzimas hepáticas durante 15 años para cuantificar la aparición de nuevos casos de la enfermedad. ¿A qué diseño metodológico corresponde esta investigación?",
        "options": [
          {
            "id": "A",
            "text": "Estudio de Cohortes Prospectivo"
          },
          {
            "id": "B",
            "text": "Estudio de Casos y Controles"
          },
          {
            "id": "C",
            "text": "Estudio de Corte Transversal"
          },
          {
            "id": "D",
            "text": "Ensayo Clínico Aleatorizado Fase II"
          },
          {
            "id": "E",
            "text": "Estudio Ecológico de Tendencia Temporal"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El estudio parte con individuos sanos (sin la enfermedad al ingreso) clasificados según su nivel de exposición (consumo de bebidas azucaradas) y realiza un seguimiento longitudinal en el tiempo (15 años) para registrar la aparición de nuevos eventos clínicos (incidencia de EHNA). Esta estructura define inequívocamente a un Estudio de Cohortes Prospectivo.\nB) Incorrecta. En casos y controles los sujetos se seleccionan ya enfermos y con controles sanos.\nC) Incorrecta. El estudio transversal mide en un único momento sin seguimiento en el tiempo.\nD) Incorrecta. No es experimental ni aleatorizado; los investigadores no asignan el consumo de azúcar.\nE) Incorrecta. La unidad de análisis es el individuo, no datos agregados de países.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.020"
      },
      {
        "stem": "Un estudio encuentra una correlación estadística positiva (r = 0,78; p < 0,01) entre el consumo per cápita de café a nivel nacional y la incidencia de enfermedad coronaria en 25 países occidentales. Un médico concluye a partir de esta publicación que una persona individual que beba más de 3 tazas de café al día tendrá un 78% más de probabilidad de sufrir un infarto al miocardio. ¿Cuál es el error metodológico fundamental cometido en esta inferencia?",
        "options": [
          {
            "id": "A",
            "text": "Falacia ecológica"
          },
          {
            "id": "B",
            "text": "Sesgo de información por memoria"
          },
          {
            "id": "C",
            "text": "Sesgo de admisión de Berkson"
          },
          {
            "id": "D",
            "text": "Error tipo II por falta de poder muestral"
          },
          {
            "id": "E",
            "text": "Ambigüedad temporal por pérdida de seguimiento"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El diseño descrito corresponde a un Estudio Ecológico, donde la unidad de análisis son países (datos agregados poblacionales) y no individuos. El error de asumir que una asociación observada a nivel poblacional se cumple necesariamente a nivel individual se denomina 'Falacia Ecológica'. Los individuos que sufrieron infartos podrían no haber sido quienes consumían el café (por ejemplo, el tabaquismo u otros factores de confusión podrían explicar la correlación nacional).\nB) Incorrecta. No hubo entrevistas a pacientes individuales para generar sesgo de recuerdo.\nC) Incorrecta. El sesgo de Berkson ocurre al seleccionar controles en hospitales.\nD) Incorrecta. El resultado fue estadísticamente significativo (p < 0,01), no hubo falta de poder.\nE) Incorrecta. La falacia ecológica es el sesgo propio de la extrapolación de datos grupales a personas.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.020"
      }
    ]
  },
  {
    "id": "sp-07",
    "classId": "sp-07",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Epidemiología Clínica, Bioestadística & Tamizaje",
    "topicLabel": "21.7",
    "title": "Medidas de Frecuencia, Asociación e Impacto Potencial en Salud",
    "perfilCode": "7.01.3.019",
    "dx": "Cálculo Bioestadístico",
    "tx": "Interpretación Numérica",
    "seg": "Medicina Basada en Evidencia",
    "ges": "Bioestadística Descriptiva e Inferencial Aplicada al EUNACOM",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#94) · EUNACOM Julio 2024 (Q#18) · EUNACOM Diciembre 2023 (Q#64)",
    "frecuencia": "Máxima Rentabilidad · Ejercicios matemáticos obligatorios en el examen sobre cálculo e interpretación de RR, OR, RRR, RRA y NNT",
    "svg": null,
    "algoTitle": "Algoritmo de Fórmulas y Cálculo de Medidas de Asociación e Impacto (EUNACOM)",
    "diagramRows": [
      {
        "t": "Tabla de Contingencia 2x2: Expuestos vs No Expuestos / Desenlace (+) vs Desenlace (-)",
        "s": "Casillas: a (Exp y Enf), b (Exp y Sano), c (No Exp y Enf), d (No Exp y Sano)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Qué Tipo de Diseño se empleó para obtener los datos?",
        "al": "Cohortes/ECA vs Casos y Controles",
        "ll": "Cohortes o Ensayo Clínico (Hay Incidencia)",
        "left": {
          "t": "RIESGO RELATIVO (RR)",
          "s": "RR = [a / (a + b)] / [c / (c + d)] · Incidencia en Expuestos / Incidencia en No Expuestos",
          "type": "acc"
        },
        "rl": "Casos y Controles (No hay Incidencia)",
        "right": {
          "t": "ODDS RATIO (OR)",
          "s": "OR = (a · d) / (b · c) · Razón de productos cruzados de momios de exposición",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "¿Cálculo del Impacto Clínico en Ensayos Clínicos?",
        "al": "RRA y NNT",
        "ll": "Reducción de Riesgo Absoluto (RRA)",
        "left": {
          "t": "RRA = Incidencia Control - Incidencia Tratamiento",
          "s": "Diferencia aritmética directa de riesgos · RRR = (I_control - I_tto) / I_control = 1 - RR",
          "type": "acc"
        },
        "rl": "Número Necesario a Tratar (NNT)",
        "right": {
          "t": "NNT = 1 / RRA (o 100 / RRA en %)",
          "s": "Siempre se redondea al entero superior · Pacientes a tratar para evitar 1 evento adverso",
          "type": "crit"
        }
      },
      {
        "t": "Interpretación del Valor Nulo: RR u OR = 1,0 indica ausencia de asociación; si el IC 95% incluye el 1, NO es estadísticamente significativo",
        "s": "En medidas de diferencia (RRA): el valor nulo es 0; si el IC 95% cruza el 0, no hay efecto demostrado",
        "type": "acc"
      }
    ],
    "contexto": "Las preguntas de bioestadística matemática en el EUNACOM se concentran en el cálculo práctico de medidas de frecuencia (incidencia acumulada vs densidad de incidencia vs prevalencia), medidas de asociación (Riesgo Relativo en cohortes y ensayos, Odds Ratio en casos y controles) y medidas de impacto clínico farmacológico (Reducción Absoluta del Riesgo y Número Necesario a Tratar). Dominar las fórmulas algebraicas simples y su correcta interpretación clínica permite asegurar puntos vitales en el examen.",
    "contentSections": [
      {
        "subhead": "1. Medidas de Frecuencia: Prevalencia vs Incidencia",
        "paragraphs": [
          "• Prevalencia (P): Proporción de individuos de una población que presentan la enfermedad en un momento específico del tiempo. Es una foto instantánea que refleja la carga global de la enfermedad.\n  Fórmula: P = (Casos existentes totales) / (Población total en ese momento).\n  Se incrementa por mayor duración de la enfermedad o mayor sobrevida; disminuye por curación rápida o alta letalidad.",
          "• Incidencia Acumulada (IA): Proporción de personas inicialmente sanas que desarrollan la enfermedad durante un período determinado de seguimiento.\n  Fórmula: IA = (Casos nuevos en el período) / (Población en riesgo libre de enfermedad al inicio).\n• Densidad de Incidencia (DI o Tasa de Incidencia): Mide la velocidad con que ocurre la enfermedad en una cohorte dinámica, incorporando el tiempo real aportado por cada sujeto.\n  Fórmula: DI = (Casos nuevos) / (Suma de los períodos persona-tiempo de observación)."
        ]
      },
      {
        "subhead": "2. Medidas de Asociación: Riesgo Relativo (RR) y Odds Ratio (OR)",
        "paragraphs": [
          "A partir de la clásica tabla 2x2 [a: expuestos enfermos; b: expuestos sanos; c: no expuestos enfermos; d: no expuestos sanos]:\n• Riesgo Relativo (RR): Es la razón entre el riesgo o incidencia en expuestos y la incidencia en no expuestos. SOLO se calcula en estudios de Cohortes y Ensayos Clínicos Aleatorizados:\n  Fórmula: RR = [a / (a + b)] / [c / (c + d)].\n  - RR = 1: No hay asociación (valor nulo).\n  - RR > 1: Factor de riesgo (la exposición aumenta la incidencia del desenlace).\n  - RR < 1: Factor protector (la intervención reduce el riesgo del desenlace).",
          "• Odds Ratio (OR o Razón de Disparidad / Momios): Razón entre la probabilidad de haber estado expuesto en los enfermos versus los sanos. Se utiliza en estudios de Casos y Controles:\n  Fórmula: OR = (a · d) / (b · c) (producto cruzado).\n  Si la enfermedad es rara (prevalencia < 5-10%), el OR se aproxima matemáticamente al RR."
        ]
      },
      {
        "subhead": "3. Medidas de Impacto Clínico y Farmacoeconomía: RRR, RRA, NNT y NND",
        "paragraphs": [
          "Evalúan la magnitud del beneficio real de una terapia frente al control (o placebo):\n• Riesgo en Grupo Control (Rc) = Incidencia del evento en el grupo control = c / (c + d).\n• Riesgo en Grupo Tratamiento (Rt) = Incidencia del evento en el grupo tratado = a / (a + b).\n• Reducción Relativa del Riesgo (RRR): Proporción de riesgo que se elimina con el tratamiento en relación al riesgo basal:\n  Fórmula: RRR = (Rc - Rt) / Rc = 1 - RR.\n• Reducción Absoluta del Riesgo (RRA o Riesgo Atribuible): Diferencia aritmética pura entre el riesgo del grupo control y el grupo experimental:\n  Fórmula: RRA = Rc - Rt.",
          "• Número Necesario a Tratar (NNT): Número de pacientes que se deben tratar con el fármaco durante un tiempo determinado para prevenir exactamente un evento adverso adicional:\n  Fórmula: NNT = 1 / RRA (si el RRA se expresa en decimales) o 100 / RRA (si se expresa en porcentaje).\n  Regla de oro matemática: El NNT siempre se redondea hacia arriba al entero más próximo (ej: 14,2 ➔ 15 pacientes).\n• Número Necesario para Dañar (NND / NNH): Pacientes expuestos al tratamiento para que ocurra un evento adverso iatrogénico grave adicional: NND = 1 / (Rt_daño - Rc_daño)."
        ]
      }
    ],
    "table": {
      "title": "Formulario Esencial de Bioestadística EUNACOM",
      "headers": [
        "Concepto",
        "Fórmula Matemática",
        "Interpretación Clínica",
        "Diseño Aplicable"
      ],
      "rows": [
        [
          "Incidencia Acumulada (IA)",
          "Casos nuevos / Población en riesgo al inicio",
          "Probabilidad de enfermar en un período",
          "Cohortes / Poblacional"
        ],
        [
          "Riesgo Relativo (RR)",
          "[a/(a+b)] / [c/(c+d)] = I_exp / I_no_exp",
          "Fuerza de asociación causal o protectora",
          "Cohortes / Ensayos Clínicos"
        ],
        [
          "Odds Ratio (OR)",
          "(a · d) / (b · c)",
          "Razón de momios de exposición",
          "Casos y Controles"
        ],
        [
          "Reducción Absoluta (RRA)",
          "Rc - Rt (Incidencia control - Incidencia tto)",
          "Beneficio neto real en la población",
          "Ensayos Clínicos (ECA)"
        ],
        [
          "Reducción Relativa (RRR)",
          "(Rc - Rt) / Rc = 1 - RR",
          "Porcentaje del riesgo basal eliminado",
          "Ensayos Clínicos (ECA)"
        ],
        [
          "Número Necesario a Tratar",
          "NNT = 1 / RRA (o 100 / RRA%)",
          "Pacientes a tratar para evitar 1 evento adverso",
          "Ensayos Clínicos (ECA)"
        ]
      ]
    },
    "severityTable": {
      "title": "Ejemplo Práctico de Cálculo EUNACOM",
      "headers": [
        "Parámetro",
        "Valor en el Ensayo Clínico",
        "Fórmula Aplicada",
        "Cálculo e Interpretación"
      ],
      "rows": [
        [
          "Mortalidad Grupo Control (Rc)",
          "10% (0,10)",
          "100 muertes en 1.000 pacientes",
          "Incidencia basal con placebo = 10%"
        ],
        [
          "Mortalidad Grupo Fármaco (Rt)",
          "6% (0,06)",
          "60 muertes en 1.000 pacientes",
          "Incidencia con nuevo fármaco = 6%"
        ],
        [
          "Riesgo Relativo (RR)",
          "0,60",
          "Rt / Rc = 0,06 / 0,10 = 0,60",
          "El fármaco reduce el riesgo al 60% del basal"
        ],
        [
          "Reducción Relativa (RRR)",
          "40% (0,40)",
          "1 - RR = 1 - 0,60 = 0,40 = 40%",
          "Se reduce el 40% del riesgo relativo original"
        ],
        [
          "Reducción Absoluta (RRA)",
          "4% (0,04)",
          "Rc - Rt = 0,10 - 0,06 = 0,04 = 4%",
          "Diferencia absoluta de beneficio = 4 puntos %"
        ],
        [
          "Número Necesario Tratar (NNT)",
          "25 pacientes",
          "1 / RRA = 1 / 0,04 = 25",
          "Se deben tratar 25 pacientes para salvar 1 vida"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Interpretación de Intervalos de Confianza (IC 95%) para Significancia Estadística",
      "headers": [
        "Medida Evaluada",
        "Valor Nulo Teórico",
        "IC 95% Significativo (p < 0,05)",
        "IC 95% No Significativo (p ≥ 0,05)"
      ],
      "rows": [
        [
          "Riesgo Relativo (RR)",
          "1,0",
          "No incluye el 1,0 (ej: 0,65 [0,45 - 0,85])",
          "Incluye el 1,0 (ej: 0,82 [0,62 - 1,15])"
        ],
        [
          "Odds Ratio (OR)",
          "1,0",
          "No incluye el 1,0 (ej: 2,40 [1,35 - 4,20])",
          "Incluye el 1,0 (ej: 1,40 [0,85 - 2,30])"
        ],
        [
          "Reducción Absoluta (RRA)",
          "0,0 (cero)",
          "No incluye el 0,0 (ej: 4,5% [1,2% - 7,8%])",
          "Incluye el 0,0 (ej: 2,1% [-0,8% - 5,0%])"
        ],
        [
          "Diferencia de Medias",
          "0,0 (cero)",
          "No cruza el 0 (ej: -5,2 mmHg [-8,1 a -2,3])",
          "Cruza el 0 (ej: -2,0 mmHg [-5,0 a +1,0])"
        ]
      ]
    },
    "vignette": {
      "text": "Un ensayo clínico aleatorizado evalúa la eficacia de un nuevo fármaco hipolipemiante frente a placebo para la prevención de infarto agudo al miocardio (IAM) a 5 años en pacientes diabéticos. Los resultados muestran que la incidencia acumulada de IAM en el grupo placebo fue de 8% (80 infartos por cada 1.000 pacientes), mientras que en el grupo que recibió el fármaco la incidencia de IAM fue de 3% (30 infartos por cada 1.000 pacientes). El investigador solicita calcular el Número Necesario a Tratar (NNT) para evitar un IAM.",
      "conducta": "La Reducción Absoluta del Riesgo (RRA) es: Rc - Rt = 0,08 - 0,03 = 0,05 (5%). El Número Necesario a Tratar (NNT) es: 1 / RRA = 1 / 0,05 = 20 (o 100 / 5 = 20). Por lo tanto, se requiere tratar a 20 pacientes diabéticos durante 5 años con el nuevo hipolipemiante para evitar exactamente un infarto agudo al miocardio."
    },
    "explicacion": "El cálculo del NNT es una competencia obligatoria evaluada en el EUNACOM. Primero se determina la Reducción Absoluta del Riesgo (RRA), restando la tasa de eventos del grupo experimental de la del grupo control (RRA = 8% - 3% = 5% = 0,05). Luego, se calcula el inverso multiplicativo de la RRA: NNT = 1 / 0,05 = 20. Mientras menor sea el valor numérico del NNT, más eficaz y clínicamente impactante es el fármaco evaluado.",
    "keyPoints": [
      "Incidencia: Casos nuevos en población libre de enfermedad en un período; Prevalencia: Casos totales existentes en un momento.",
      "Riesgo Relativo (RR): Incidencia expuestos / Incidencia no expuestos; se calcula únicamente en Cohortes y Ensayos Clínicos.",
      "Odds Ratio (OR): Razón de productos cruzados (a*d)/(b*c); se calcula en Casos y Controles.",
      "Reducción Absoluta del Riesgo (RRA): Rc - Rt (diferencia matemática entre incidencias).",
      "Número Necesario a Tratar (NNT): 1 / RRA (o 100 / RRA en porcentaje); siempre redondear al entero superior.",
      "Significancia en IC 95%: Si el intervalo de un RR u OR incluye el 1,0, NO existe significancia estadística (p ≥ 0,05)."
    ],
    "questions": [
      {
        "stem": "En un ensayo clínico controlado que compara un nuevo anticoagulante oral directo (DOAC) frente a warfarina en pacientes con fibrilación auricular no valvular, la incidencia acumulada de accidente cerebrovascular isquémico a 3 años fue de 2% en el grupo DOAC y de 6% en el grupo warfarina. ¿Cuál es la Reducción Relativa del Riesgo (RRR) y el Número Necesario a Tratar (NNT) del nuevo fármaco?",
        "options": [
          {
            "id": "A",
            "text": "RRR = 66,7% y NNT = 25 pacientes"
          },
          {
            "id": "B",
            "text": "RRR = 4% y NNT = 50 pacientes"
          },
          {
            "id": "C",
            "text": "RRR = 33,3% y NNT = 20 pacientes"
          },
          {
            "id": "D",
            "text": "RRR = 50% y NNT = 40 pacientes"
          },
          {
            "id": "E",
            "text": "RRR = 66,7% y NNT = 100 pacientes"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. \n1) Riesgo en control (Rc, warfarina) = 6% = 0,06.\n2) Riesgo en tratamiento (Rt, DOAC) = 2% = 0,02.\n3) Riesgo Relativo (RR) = Rt / Rc = 0,02 / 0,06 = 0,333 (1/3).\n4) Reducción Relativa del Riesgo (RRR) = 1 - RR = 1 - 0,333 = 0,667 = 66,7%.\n5) Reducción Absoluta del Riesgo (RRA) = Rc - Rt = 0,06 - 0,02 = 0,04 (4%).\n6) Número Necesario a Tratar (NNT) = 1 / RRA = 1 / 0,04 = 25 pacientes.\nB, C, D, E) Son combinaciones aritméticamente incorrectas.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.019"
      },
      {
        "stem": "Un estudio de cohortes prospectivo analiza la relación entre tabaquismo pesado y la incidencia de enfermedad arterial oclusiva periférica. El análisis multivariado arroja un Riesgo Relativo (RR) de 1,65 con un Intervalo de Confianza del 95% (IC 95%) de 0,85 a 2,45. ¿Cuál es la interpretación metodológicamente correcta de este resultado?",
        "options": [
          {
            "id": "A",
            "text": "No se puede descartar que la asociación observada se deba al azar, ya que el intervalo de confianza incluye el valor nulo (1,0)."
          },
          {
            "id": "B",
            "text": "El tabaquismo pesado incrementa significativamente el riesgo de arteriopatía periférica en un 65% con p < 0,01."
          },
          {
            "id": "C",
            "text": "Existe un factor protector limítrofe demostrado por el límite inferior menor a 1."
          },
          {
            "id": "D",
            "text": "El estudio adolece de un error tipo I (alfa) al haber rechazado incorrectamente la hipótesis nula."
          },
          {
            "id": "E",
            "text": "La medida de asociación es inválida debido a que debió calcularse un Odds Ratio en lugar de Riesgo Relativo."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El valor nulo para el Riesgo Relativo (así como para el Odds Ratio) es 1,0, lo que significa que el riesgo en expuestos es idéntico al de los no expuestos. Cuando el Intervalo de Confianza del 95% cruza o incluye el valor 1,0 (en este caso va de 0,85 a 2,45), la asociación observada no alcanza significancia estadística formal (valor de p ≥ 0,05), por lo que no es posible descartar que el resultado se deba meramente a la variabilidad del azar.\nB) Incorrecta. La significancia estadística requiere que el IC 95% no incluya el 1.\nC) Incorrecta. Un IC que abarca valores menores y mayores a 1 indica falta de significancia, no protección.\nD) Incorrecta. Al no ser significativo, no se rechaza la hipótesis nula.\nE) Incorrecta. El RR es la medida idónea en un estudio de cohortes.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.019"
      }
    ]
  },
  {
    "id": "sp-08",
    "classId": "sp-08",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Epidemiología Clínica, Bioestadística & Tamizaje",
    "topicLabel": "21.8",
    "title": "Pruebas Diagnósticas: Sensibilidad, Especificidad, VPP, VPN y Curvas ROC",
    "perfilCode": "7.01.3.028",
    "dx": "Rendimiento Diagnóstico",
    "tx": "Validación de Test",
    "seg": "Medicina Diagnóstica",
    "ges": "Evaluación Tecnológica y Razonamiento Clínico Bayessiano",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#95) · EUNACOM Julio 2024 (Q#19) · EUNACOM Diciembre 2023 (Q#66)",
    "frecuencia": "Máxima Rentabilidad · Pregunta fija: efecto de la prevalencia sobre VPP y VPN, cálculo de sensibilidad/especificidad e interpretación de curvas ROC",
    "svg": null,
    "algoTitle": "Algoritmo de Interpretación y Rendimiento de Pruebas Diagnósticas (Tabla 2x2)",
    "diagramRows": [
      {
        "t": "Aplicación de un Test Diagnóstico frente al Gold Standard (Verdadero Estado de Salud)",
        "s": "Construcción de Tabla 2x2: Enfermos (Columna 1) vs Sanos (Columna 2)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Propiedades Intrínsecas del Test (Independientes de la Prevalencia)?",
        "al": "Sensibilidad vs Especificidad",
        "ll": "SENSIBILIDAD (Capacidad de Detectar Enfermos)",
        "left": {
          "t": "SENSIBILIDAD = VP / (VP + FN)",
          "s": "Capacidad de dar (+) en enfermos · Útil para TAMIZAJE y descarte (alto valor para descartar si sale negativo)",
          "type": "acc"
        },
        "rl": "ESPECIFICIDAD (Capacidad de Detectar Sanos)",
        "right": {
          "t": "ESPECIFICIDAD = VN / (VN + FP)",
          "s": "Capacidad de dar (-) en sanos · Útil para CONFIRMACIÓN diagnóstica (pocos falsos positivos)",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Valores Predictivos (Dependen DIRECTAMENTE de la Prevalencia Poblacional)?",
        "al": "VPP vs VPN",
        "ll": "Valor Predictivo Positivo (VPP)",
        "left": {
          "t": "VPP = VP / (VP + FP)",
          "s": "Probabilidad de estar enfermo si el test dio (+) · A MAYOR prevalencia ➔ MAYOR VPP",
          "type": "crit"
        },
        "rl": "Valor Predictivo Negativo (VPN)",
        "right": {
          "t": "VPN = VN / (VN + FN)",
          "s": "Probabilidad de estar sano si el test dio (-) · A MENOR prevalencia ➔ MAYOR VPN",
          "type": "warn"
        }
      },
      {
        "t": "Curvas ROC: Eje Y = Sensibilidad vs Eje X = 1 - Especificidad · El punto óptimo de corte es el más cercano a la esquina superior izquierda",
        "s": "Área Bajo la Curva (AUC): AUC > 0,90 prueba excelente; AUC = 0,50 prueba inútil (equivalente al azar)",
        "type": "acc"
      }
    ],
    "contexto": "La evaluación de pruebas diagnósticas es un tópico nuclear de la medicina basada en evidencia y del examen EUNACOM. La distinción entre los parámetros intrínsecos de una prueba (Sensibilidad y Especificidad, que no varían con la prevalencia) y los parámetros extrínsecos o clínicos (Valor Predictivo Positivo y Valor Predictivo Negativo, que dependen críticamente de la prevalencia de la patología en la población donde se aplique) constituye una de las preguntas teóricas más reiteradas del examen.",
    "contentSections": [
      {
        "subhead": "1. Estructura de la Tabla de Contingencia 2x2",
        "paragraphs": [
          "Para evaluar cualquier prueba diagnóstica frente al estándar de referencia (gold standard):\n• Verdadero Positivo (VP): Sujeto enfermo con prueba diagnóstica positiva.\n• Falso Positivo (FP): Sujeto sano con prueba diagnóstica positiva (error).\n• Falso Negativo (FN): Sujeto enfermo con prueba diagnóstica negativa (error grave en tamizaje).\n• Verdadero Negativo (VN): Sujeto sano con prueba diagnóstica negativa.\n• Total Enfermos = VP + FN; Total Sanos = FP + VN.\n• Total Pruebas Positivas = VP + FP; Total Pruebas Negativas = FN + VN."
        ]
      },
      {
        "subhead": "2. Parámetros Intrínsecos: Sensibilidad y Especificidad",
        "paragraphs": [
          "No varían según la prevalencia de la enfermedad en la población examinada:\n• Sensibilidad (S): Probabilidad de que la prueba resulte positiva en un individuo verdaderamente enfermo. Capacidad para detectar la enfermedad.\n  Fórmula: S = VP / (VP + FN).\n  - Utilidad clínica: Una prueba con muy ALTA SENSIBILIDAD (cercana al 100%) tiene muy pocos falsos negativos. Por lo tanto, si una prueba altamente sensible resulta NEGATIVA, permite prácticamente DESCARTAR la enfermedad (regla nemotécnica SnNOut: High Sensitivity, Negative result, Rules Out). Ideal para cribado/tamizaje inicial (ej: ELISA VIH, dímero D en TEP).",
          "• Especificidad (E): Probabilidad de que la prueba resulte negativa en un individuo verdaderamente sano. Capacidad para identificar a los sanos.\n  Fórmula: E = VN / (VN + FP).\n  - Utilidad clínica: Una prueba con muy ALTA ESPECIFICIDAD tiene muy pocos falsos positivos. Si resulta POSITIVA, CONFIRMA con certeza la enfermedad (regla nemotécnica SpPIn: High Specificity, Positive result, Rules In). Ideal para confirmar diagnósticos graves antes de tratamientos invasivos o tóxicos (ej: Western Blot VIH, biopsia)."
        ]
      },
      {
        "subhead": "3. Parámetros Extrínsecos: Valores Predictivos y Efecto de la Prevalencia",
        "paragraphs": [
          "Varían de forma directa y matemática según la prevalencia (probabilidad pretest) de la enfermedad:\n• Valor Predictivo Positivo (VPP): Probabilidad de tener la enfermedad cuando el test resulta positivo.\n  Fórmula: VPP = VP / (VP + FP).\n• Valor Predictivo Negativo (VPN): Probabilidad de estar sano cuando el test resulta negativo.\n  Fórmula: VPN = VN / (VN + FN).",
          "• Ley de Variación con la Prevalencia (Pregunta Clásica EUNACOM):\n  - Si la Prevalencia de la enfermedad AUMENTA (ej: población de consulta especializada o brote):\n    ➔ El VPP AUMENTA (hay más probabilidad de que un positivo sea real).\n    ➔ El VPN DISMINUYE.\n  - Si la Prevalencia de la enfermedad DISMINUYE (ej: tamizaje en población general sana asintomática):\n    ➔ El VPP DISMINUYE sustancialmente (la mayoría de los positivos serán falsos positivos).\n    ➔ El VPN AUMENTA (un resultado negativo es prácticamente garantía de estar sano)."
        ]
      },
      {
        "subhead": "4. Razones de Verosimilitud (Likelihood Ratios) y Curvas ROC",
        "paragraphs": [
          "• Razón de Verosimilitud Positiva (LR+ o Cociente de Probabilidad Positivo):\n  Fórmula: LR+ = Sensibilidad / (1 - Especificidad) = S / Tasa de Falsos Positivos.\n  Indica cuánto más probable es un resultado positivo en un enfermo respecto a un sano. LR+ > 10 confiere gran certeza diagnóstica.",
          "• Razón de Verosimilitud Negativa (LR-):\n  Fórmula: LR- = (1 - Sensibilidad) / Especificidad = Tasa de Falsos Negativos / E.\n  LR- < 0,1 descarta prácticamente la patología.",
          "• Curva ROC (Receiver Operating Characteristic):\n  Gráfico que representa en el eje Y la Sensibilidad (Fracción de Verdaderos Positivos) y en el eje X el valor de 1 - Especificidad (Fracción de Falsos Positivos) para todos los puntos de corte numéricos posibles de una prueba continua.\n  - Área Bajo la Curva (AUC): Mide la exactitud global del test. AUC = 0,50 es una prueba inútil (diagonal del azar, como tirar una moneda); AUC de 0,80 a 0,90 es buena; AUC > 0,90 es excelente; AUC = 1,0 es la prueba perfecta sin errores."
        ]
      }
    ],
    "table": {
      "title": "Tabla de Contingencia 2x2 y Definiciones Matemáticas",
      "headers": [
        "Resultado de la Prueba",
        "Enfermos (Gold Standard +)",
        "Sanos (Gold Standard -)",
        "Total Horizontal"
      ],
      "rows": [
        [
          "Prueba Positiva (+)",
          "Verdaderos Positivos (VP)",
          "Falsos Positivos (FP)",
          "Total Test (+) = VP + FP"
        ],
        [
          "Prueba Negativa (-)",
          "Falsos Negativos (FN)",
          "Verdaderos Negativos (VN)",
          "Total Test (-) = FN + VN"
        ],
        [
          "Total Vertical",
          "Total Enfermos = VP + FN",
          "Total Sanos = FP + VN",
          "Población Total = N"
        ],
        [
          "Cálculo Intrínseco",
          "Sensibilidad = VP / (VP + FN)",
          "Especificidad = VN / (VN + FP)",
          "Independiente de prevalencia"
        ],
        [
          "Cálculo Extrínseco",
          "VPP = VP / (VP + FP)",
          "VPN = VN / (VN + FN)",
          "Depende de la prevalencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Comportamiento de los Valores Predictivos según la Prevalencia",
      "headers": [
        "Escenario Clínico",
        "Prevalencia de la Enfermedad",
        "Comportamiento del VPP",
        "Comportamiento del VPN"
      ],
      "rows": [
        [
          "Tamizaje Poblacional (screening masivo)",
          "Baja (< 1%)",
          "Disminuye fuertemente (muchos falsos positivos)",
          "Aumenta (cercano al 100%)"
        ],
        [
          "Consulta de Especialidad Hospitalaria",
          "Alta (> 30-50%)",
          "Aumenta fuertemente (pocos falsos positivos)",
          "Disminuye"
        ],
        [
          "Situación de Brote Epidémico Activo",
          "Muy Alta",
          "Alcanza su valor máximo",
          "Alcanza su valor mínimo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Interpretación Clínica de las Razones de Verosimilitud (Likelihood Ratios)",
      "headers": [
        "Métrica",
        "Fórmula Matemática",
        "Valor Excelente",
        "Significado Clínico"
      ],
      "rows": [
        [
          "LR Positivo (LR+)",
          "Sensibilidad / (1 - Especificidad)",
          "> 10",
          "Aumenta fuertemente la probabilidad postest de tener la patología"
        ],
        [
          "LR Neutro",
          "Sensibilidad / (1 - Especificidad) = 1,0",
          "1,0",
          "No altera en nada la probabilidad postest (prueba sin utilidad)"
        ],
        [
          "LR Negativo (LR-)",
          "(1 - Sensibilidad) / Especificidad",
          "< 0,1",
          "Reduce drásticamente la probabilidad postest (permite descartar)"
        ]
      ]
    },
    "vignette": {
      "text": "Se evalúa un nuevo test inmunológico rápido para antígeno de Helicobacter pylori en deposiciones comparándolo con la biopsia gástrica (gold standard) en 1.000 pacientes. De 200 pacientes con biopsia positiva, el test rápido resultó positivo en 180 y negativo en 20. De 800 pacientes con biopsia negativa, el test resultó negativo en 720 y positivo en 80. El médico solicita calcular la Sensibilidad y la Especificidad del nuevo test.",
      "conducta": "La Sensibilidad es: VP / (VP + FN) = 180 / (180 + 20) = 180 / 200 = 90% (0,90). La Especificidad es: VN / (VN + FP) = 720 / (720 + 80) = 720 / 800 = 90% (0,90). Por lo tanto, el test tiene un 90% de sensibilidad y un 90% de especificidad."
    },
    "explicacion": "Para calcular la Sensibilidad se examina la columna de los verdaderamente enfermos (200 pacientes): el test detectó a 180 de ellos (180/200 = 90%). Para la Especificidad se examina la columna de los verdaderamente sanos (800 pacientes): el test identificó correctamente a 720 de ellos como negativos (720/800 = 90%). Ambos parámetros son propiedades intrínsecas de la prueba que no dependen del porcentaje de prevalencia en la muestra.",
    "keyPoints": [
      "Sensibilidad: Capacidad del test para detectar enfermos = VP / (VP + FN); alta sensibilidad con resultado negativo descarta la patología.",
      "Especificidad: Capacidad del test para identificar sanos = VN / (VN + FP); alta especificidad con resultado positivo confirma la patología.",
      "Valores Predictivos: VPP = VP / (VP + FP); VPN = VN / (VN + FN). Dependen directamente de la prevalencia de la enfermedad.",
      "Efecto de la prevalencia: A mayor prevalencia ➔ mayor VPP y menor VPN. A menor prevalencia ➔ menor VPP y mayor VPN.",
      "Curvas ROC: Gráfico de Sensibilidad (eje Y) vs 1 - Especificidad (eje X); mide la capacidad discriminativa global de un test continuo.",
      "Área Bajo la Curva (AUC): AUC de 0,5 equivale al azar; AUC > 0,90 indica un test con excelente capacidad diagnóstica."
    ],
    "questions": [
      {
        "stem": "Un test de cribado con una sensibilidad del 95% y una especificidad del 90% se aplica en dos poblaciones diferentes: la Población 1 (donde la prevalencia de la enfermedad es del 1%) y la Población 2 (donde la prevalencia es del 25%). ¿Cuál de las siguientes afirmaciones respecto a los valores predictivos del test en ambas poblaciones es correcta?",
        "options": [
          {
            "id": "A",
            "text": "El Valor Predictivo Positivo (VPP) será significativamente mayor en la Población 2 que en la Población 1."
          },
          {
            "id": "B",
            "text": "El Valor Predictivo Positivo será idéntico en ambas poblaciones porque la sensibilidad y especificidad no cambian."
          },
          {
            "id": "C",
            "text": "El Valor Predictivo Negativo (VPN) será mayor en la Población 2 que en la Población 1."
          },
          {
            "id": "D",
            "text": "La Sensibilidad de la prueba aumentará en la Población 2 al haber mayor número de enfermos."
          },
          {
            "id": "E",
            "text": "La Especificidad de la prueba disminuirá en la Población 1 debido al bajo número de casos."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El Valor Predictivo Positivo (VPP) depende directamente de la prevalencia de la patología en la población donde se aplica el test. A mayor prevalencia poblacional, mayor es la proporción de verdaderos positivos respecto al total de positivos, por lo que el VPP aumenta considerablemente (en la Población 2, con 25% de prevalencia, el VPP será mucho más alto que en la Población 1 con 1%).\nB) Incorrecta. La sensibilidad y especificidad son intrínsecas y no varían, pero los valores predictivos sí varían con la prevalencia.\nC) Incorrecta. El Valor Predictivo Negativo (VPN) es mayor cuando la prevalencia es más baja (Población 1).\nD) Incorrecta. La sensibilidad es intrínseca a la prueba y permanece constante al 95%.\nE) Incorrecta. La especificidad permanece constante al 90% independientemente de la prevalencia.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.028"
      },
      {
        "stem": "¿Cuál es la principal utilidad clínica de una prueba diagnóstica que cuenta con una Sensibilidad del 99% y una Especificidad del 65%?",
        "options": [
          {
            "id": "A",
            "text": "Descartar la presencia de la enfermedad ante un resultado negativo del test."
          },
          {
            "id": "B",
            "text": "Confirmar con certeza absoluta el diagnóstico ante un resultado positivo del test."
          },
          {
            "id": "C",
            "text": "Determinar el pronóstico y sobrevida a largo plazo de los pacientes confirmados."
          },
          {
            "id": "D",
            "text": "Reemplazar a la biopsia como estándar de oro terapéutico definitivo."
          },
          {
            "id": "E",
            "text": "Evitar la realización de pruebas de confirmación en aquellos pacientes que resulten positivos."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Una prueba con muy alta sensibilidad (99%) produce un porcentaje extremadamente bajo de falsos negativos (< 1%). Por lo tanto, si un paciente se somete al test y obtiene un resultado NEGATIVO, el médico puede descartar con altísima seguridad la presencia de la patología (regla SnNOut). Por esta razón, las pruebas altamente sensibles se eligen como métodos de tamizaje (screening) o despistaje de urgencia (ej: dímero D en sospecha de tromboembolismo pulmonar).\nB) Incorrecta. Para confirmar con certeza ante un positivo se requiere alta especificidad (SpPIn), la cual aquí es sólo del 65% (generará muchos falsos positivos).\nC) Incorrecta. El rendimiento diagnóstico no mide pronóstico temporal.\nD) Incorrecta. Las pruebas de screening no sustituyen a los estándares histopatológicos.\nE) Incorrecta. Ante un resultado positivo en un test sensible pero poco específico, es obligatorio realizar una prueba confirmatoria más específica.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.028"
      }
    ]
  },
  {
    "id": "sp-09",
    "classId": "sp-09",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Epidemiología Clínica, Bioestadística & Tamizaje",
    "topicLabel": "21.9",
    "title": "Validez, Causalidad, Sesgos y Confusión en Estudios Epidemiológicos",
    "perfilCode": "7.01.3.026",
    "dx": "Control de Errores",
    "tx": "Control Metodológico",
    "seg": "Criterios de Causalidad",
    "ges": "Validez Interna, Sesgos de Investigación y Criterios de Bradford Hill",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#96) · EUNACOM Diciembre 2023 (Q#68)",
    "frecuencia": "Alta · Evalúa tipos de sesgos (selección, memoria, Berkson), el fenómeno de confusión (confounding) y los criterios de causalidad de Hill",
    "svg": null,
    "algoTitle": "Algoritmo de Identificación y Control de Errores Sistemáticos (Sesgos) y Confusión",
    "diagramRows": [
      {
        "t": "Se Detecta una Asociación Estadística entre una Exposición y una Enfermedad",
        "s": "¿La asociación refleja una verdadera relación causa-efecto o es producto de un error?",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Tipo de Error que Puede Distorsionar los Resultados?",
        "al": "Error Aleatorio vs Sistemático",
        "ll": "ERROR ALEATORIO (Azar)",
        "left": {
          "t": "Azar / Variabilidad Muestral",
          "s": "Se reduce aumentando el tamaño de la muestra · Se cuantifica mediante valor p e IC 95%",
          "type": "warn"
        },
        "rl": "ERROR SISTEMÁTICO (Sesgo)",
        "right": {
          "t": "Sesgo de Selección / Información",
          "s": "Afecta la Validez Interna · NO se arregla aumentando el tamaño muestral · Error de diseño",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "¿Existe una Tercera Variable que Distorsiona la Asociación (Factor de Confusión)?",
        "al": "Confusión vs Causalidad",
        "ll": "FACTOR DE CONFUSIÓN (Confounder)",
        "left": {
          "t": "Variable de Confusión",
          "s": "Asociada a exposición y es factor de riesgo independiente, sin ser paso intermedio · Se controla con Estratificación o Multivariado",
          "type": "warn"
        },
        "rl": "CRITERIOS DE BRADFORD HILL",
        "right": {
          "t": "Evaluación de Causalidad Real",
          "s": "Temporalidad (ÚNICO criterio obligatorio), Dosis-Respuesta, Fuerza, Plausibilidad y Consistencia",
          "type": "acc"
        }
      },
      {
        "t": "Validez Interna (ausencia de sesgos en el estudio) es requisito indispensable previo para la Validez Externa (generalizabilidad)",
        "s": "Un estudio con sesgos graves no puede extrapolarse a ninguna población",
        "type": "acc"
      }
    ],
    "contexto": "La correcta interpretación de la evidencia científica en medicina requiere diferenciar el error aleatorio (variabilidad del azar cuantificable con el valor de p) del error sistemático o sesgo (falla intrínseca del diseño o recolección que invalida las conclusiones). El EUNACOM examina con frecuencia los principales tipos de sesgo (sesgo de selección, sesgo de información o memoria, sesgo de Berkson), las características de una variable de confusión y los criterios epidemiológicos de causalidad formulados por Austin Bradford Hill.",
    "contentSections": [
      {
        "subhead": "1. Error Aleatorio vs Error Sistemático (Sesgo)",
        "paragraphs": [
          "• Error Aleatorio (por azar): Se produce por variabilidad biológica y muestral. Afecta la precisión del estudio, pero no su tendencia promedio. Se reduce aumentando el tamaño de la muestra. Se mide mediante el valor p (probabilidad de que el resultado se deba al azar; significativo si p < 0,05) y el Intervalo de Confianza del 95%.\n• Error Sistemático (Sesgo): Falla en el diseño, reclutamiento o análisis que desvía sistemáticamente los resultados de la verdad biológica. Afecta la Validez Interna. NO se corrige ni disminuye aumentando el tamaño muestral."
        ]
      },
      {
        "subhead": "2. Principales Tipos de Sesgos en Investigación Médica",
        "paragraphs": [
          "1. Sesgos de Selección: Ocurren cuando los grupos de estudio se forman de modo que no son comparables entre sí:\n• Sesgo de Berkson (de admisión hospitalaria): Se produce al seleccionar casos y controles exclusivamente a partir de pacientes hospitalizados, cuyas tasas de exposición y comorbilidades no representan a la comunidad general.\n• Sesgo del Trabajador Sano: Poblaciones de trabajadores activos exhiben tasas de morbilidad menores que la población general (que incluye desempleados, enfermos y jubilados).\n• Sesgo del Voluntario / No Respuesta: Quienes se ofrecen voluntariamente a participar suelen tener estilos de vida más saludables o mayor interés por su salud.",
          "2. Sesgos de Información o Medición: Falla en la medición o registro de la exposición o el desenlace:\n• Sesgo de Memoria o Recuerdo (Recall bias): Clásico de los estudios de Casos y Controles. Los pacientes enfermos (casos) recuerdan con mucha mayor minuciosidad sus antecedentes de exposición previa que los sanos (controles).\n• Sesgo del Entrevistador: El evaluador indaga con mayor insistencia sobre la exposición cuando sabe que el paciente pertenece al grupo de enfermos.\n• Sesgo de Detección o Vigilancia: Los pacientes con un factor de riesgo conocido son sometidos a más exámenes médicos, detectándose en ellos más enfermedades asintomáticas."
        ]
      },
      {
        "subhead": "3. Factor de Confusión (Confounding) y Métodos de Control",
        "paragraphs": [
          "Una variable de confusión es un factor ajeno que distorsiona la relación real entre la exposición y la enfermedad:\n• Requisitos para ser Confusor: 1) Debe estar asociado a la exposición; 2) Debe ser un factor de riesgo independiente para la enfermedad; 3) NO debe ser un paso o eslabón intermedio en la vía causal entre exposición y desenlace (ejemplo clásico: el consumo de café parece causar cáncer de páncreas, pero la verdadera variable de confusión es el tabaquismo, fuertemente asociado a bebedores de café y causa real del cáncer).",
          "• Métodos para Controlar la Confusión:\n  - En la fase de DISEÑO: Aleatorización (en ensayos clínicos, equilibra confusores conocidos y desconocidos), Restricción (incluir solo sujetos con una misma característica, ej: no fumadores) y Emparejamiento (Matching, seleccionar controles con igual edad y sexo).\n  - En la fase de ANÁLISIS: Análisis Estratificado (técnica de Mantel-Haenszel) y Modelos de Regresión Multivariada (regresión logística múltiple o Cox)."
        ]
      },
      {
        "subhead": "4. Criterios de Causalidad de Austin Bradford Hill",
        "paragraphs": [
          "Nueve directrices para evaluar si una asociación estadística es causal:\n1. Temporalidad (Criterio OBLIGATORIO y SINE QUA NON): La exposición a la causa debe preceder inequívocamente en el tiempo a la aparición del efecto o enfermedad.\n2. Fuerza de la Asociación: Magnitud cuantitativa del RR u OR (a mayor valor, más probable es la causalidad).\n3. Gradiente Biológico (Relación Dosis-Respuesta): A mayor dosis o tiempo de exposición, mayor incidencia o severidad del daño.\n4. Plausibilidad Biológica: La relación concuerda con los conocimientos biológicos y patológicos vigentes.\n5. Consistencia: La asociación se replica consistentemente en estudios realizados por distintos investigadores en diferentes poblaciones.\n6. Coherencia: No entra en contradicción con la historia natural conocida de la enfermedad.\n7. Evidencia Experimental: La remoción o cese de la exposición reduce o detiene la aparición del desenlace.\n8. Especificidad: Una causa genera un efecto único (muy poco aplicable en enfermedades crónicas multifactoriales).\n9. Analogía: Similitud con relaciones causales ya demostradas para exposiciones análogas."
        ]
      }
    ],
    "table": {
      "title": "Tipos Clásicos de Sesgos y Métodos de Prevención",
      "headers": [
        "Tipo de Sesgo",
        "Mecanismo Fisiopatológico del Error",
        "Diseño Más Vulnerable",
        "Método de Control o Prevención"
      ],
      "rows": [
        [
          "Sesgo de Berkson",
          "Selección de casos y controles en hospitales (mayor morbilidad)",
          "Casos y Controles hospitalarios",
          "Seleccionar controles de base comunitaria o poblacional"
        ],
        [
          "Sesgo de Memoria (Recall)",
          "El enfermo recuerda mejor exposiciones pasadas que el sano",
          "Casos y Controles",
          "Usar registros médicos históricos objetivos o cegar al paciente"
        ],
        [
          "Sesgo del Entrevistador",
          "El encuestador busca más la exposición si conoce el diagnóstico",
          "Casos y Controles / Cohortes",
          "Enmascaramiento (cegamiento) riguroso del encuestador"
        ],
        [
          "Sesgo del Voluntario",
          "Los voluntarios son más motivados y sanos que la media",
          "Ensayos Clínicos / Transversales",
          "Muestreo aleatorio probabilístico representativo"
        ],
        [
          "Factor de Confusión",
          "Tercera variable asociada a exposición y causa de enfermedad",
          "Todos los observacionales",
          "Estratificación, pareamiento o análisis multivariado"
        ]
      ]
    },
    "vignette": {
      "text": "Un estudio retrospectivo de casos y controles investiga si el consumo de antibióticos durante el primer trimestre del embarazo se asocia con cardiopatías congénitas en el recién nacido. Se entrevista a madres de 100 niños nacidos con cardiopatías complejas (casos) y a 200 madres de niños sanos (controles). Las madres de los niños con cardiopatía recuerdan con detalle e informan un alto consumo de medicamentos durante su gestación, mientras que las madres de niños sanos no recuerdan haber tomado fármacos a pesar de constar en sus fichas clínicas. ¿A qué tipo de sesgo corresponde esta situación?",
      "conducta": "Corresponde a un Sesgo de Información por Memoria o Recuerdo (Recall Bias). Se produce porque las madres de niños con malformaciones congénitas tienden a meditar minuciosamente y recordar con mayor frecuencia cualquier exposición durante el embarazo en busca de una explicación para la condición de su hijo, en comparación con las madres de niños sanos."
    },
    "explicacion": "El sesgo de memoria es el error sistemático más característico de los estudios de Casos y Controles. Ocurre porque la recolección de los datos de exposición se realiza de manera retrospectiva a través de encuestas o entrevistas, y los sujetos enfermos (o sus familiares) tienen una motivación psicológica muy superior para recordar y reportar antecedentes pasados en comparación con los controles sanos, generando una falsa sobreestimación del riesgo.",
    "keyPoints": [
      "Error Aleatorio: Variabilidad por azar; se reduce aumentando el tamaño muestral; se evalúa con valor p e IC 95%.",
      "Error Sistemático (Sesgo): Falla de diseño que altera la validez interna; NO se soluciona aumentando la muestra.",
      "Sesgo de Memoria (Recall bias): Típico de Casos y Controles; el enfermo recuerda más la exposición que el sano.",
      "Sesgo de Berkson: Selección de sujetos en hospitales que distorsiona la frecuencia de factores de riesgo.",
      "Variable de Confusión: Asociada a la exposición, causa independiente del desenlace y NO es paso intermedio; se controla con estratificación o regresión multivariada.",
      "Criterios de Bradford Hill: Temporalidad es el ÚNICO criterio imprescindible (sine qua non); le siguen dosis-respuesta y consistencia."
    ],
    "questions": [
      {
        "stem": "¿Cuál de los siguientes criterios epidemiológicos de Austin Bradford Hill es el ÚNICO considerado absolutamente indispensable (condición sine qua non) para poder postular una relación de causalidad entre una exposición y una enfermedad?",
        "options": [
          {
            "id": "A",
            "text": "Temporalidad"
          },
          {
            "id": "B",
            "text": "Fuerza de asociación (magnitud del Riesgo Relativo)"
          },
          {
            "id": "C",
            "text": "Plausibilidad biológica"
          },
          {
            "id": "D",
            "text": "Gradiente biológico (relación dosis-respuesta)"
          },
          {
            "id": "E",
            "text": "Especificidad de la causa"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Temporalidad es el único criterio de causalidad de Bradford Hill que resulta indispensable y estrictamente obligatorio (condición sine qua non): la causa sospechada debe preceder obligatoriamente en el tiempo a la aparición de la enfermedad. Si la enfermedad existía antes de la exposición, la causalidad queda lógicamente descartada. Todos los demás criterios (fuerza, dosis-respuesta, plausibilidad) aportan evidencia de apoyo, pero su ausencia no descarta de forma absoluta la causalidad.\nB, C, D, E) Son criterios complementarios importantes, pero no imprescindibles.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.026"
      },
      {
        "stem": "Un estudio observacional encuentra que las personas que consumen café presentan un riesgo significativamente mayor de desarrollar cáncer de laringe en comparación con los no bebedores. Sin embargo, al estratificar el análisis según el hábito tabáquico, se observa que tanto entre los fumadores como entre los no fumadores el consumo de café no modifica la incidencia del cáncer. ¿Qué fenómeno epidemiológico explica este hallazgo?",
        "options": [
          {
            "id": "A",
            "text": "El tabaquismo actuaba como una variable de confusión en la asociación aparente."
          },
          {
            "id": "B",
            "text": "El estudio adolecía de un sesgo de selección de tipo Berkson."
          },
          {
            "id": "C",
            "text": "Ocurrió una falacia ecológica al extrapolar datos de consumo poblacional."
          },
          {
            "id": "D",
            "text": "El consumo de café produjo modificación del efecto en pacientes fumadores."
          },
          {
            "id": "E",
            "text": "Hubo una violación al criterio de plausibilidad biológica de Bradford Hill."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El tabaquismo cumple todos los criterios de un Factor de Confusión (Confounder): está fuertemente asociado al consumo de café (los bebedores de café tienden a fumar más) y es un factor de riesgo independiente demostrado para el cáncer de laringe, sin ser un paso intermedio en la vía biológica. La prueba definitiva de confusión es que, al realizar un análisis estratificado controlando por el confusor (estratos separados de fumadores y no fumadores), la asociación entre café y cáncer desaparece por completo.\nB) Incorrecta. No se trata de un sesgo de selección hospitalaria.\nC) Incorrecta. La falacia ecológica ocurre en estudios grupales, no en análisis estratificados individuales.\nD) Incorrecta. En la modificación del efecto, la asociación persiste pero con diferente magnitud entre estratos.\nE) Incorrecta. Describe un criterio de causalidad, no el fenómeno metodológico de confusión.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.026"
      }
    ]
  },
  {
    "id": "sp-10",
    "classId": "sp-10",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Epidemiología Clínica, Bioestadística & Tamizaje",
    "topicLabel": "21.10",
    "title": "Tamizaje Poblacional (Screening): Criterios de Wilson-Jungner y Sesgos",
    "perfilCode": "7.01.3.028",
    "dx": "Fase Preclínica Detectable",
    "tx": "Intervención Precoz Eficaz",
    "seg": "Evaluación de Programas",
    "ges": "Criterios de Wilson y Jungner para Tamizaje Masivo en Salud Pública",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#97) · EUNACOM Julio 2023 (Q#50)",
    "frecuencia": "Alta · Evalúa los criterios de Wilson y Jungner y los sesgos metodológicos intrínsecos del screening (Lead-time bias y Length-time bias)",
    "svg": null,
    "algoTitle": "Algoritmo de Decisión para Implementación de Programas de Tamizaje (Wilson y Jungner)",
    "diagramRows": [
      {
        "t": "Propuesta de Nuevo Programa de Tamizaje Poblacional en Salud Pública",
        "s": "Evaluación estricta de Criterios de Wilson y Jungner antes de implementar cribado masivo",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿La Enfermedad cumple con los Requisitos Epidemiológicos?",
        "al": "Criterios de la Enfermedad",
        "ll": "Problema Relevante y Fase Preclínica",
        "left": {
          "t": "Criterios de la Enfermedad",
          "s": "Alta prevalencia / morbimortalidad · Historia natural conocida con fase presintomática prolongada detectable",
          "type": "acc"
        },
        "rl": "Enfermedad Rara o Rápida",
        "right": {
          "t": "TAMIZAJE NO PROCEDENTE",
          "s": "Enfermedades raras o de progresión fulminante sin ventana preclínica no califican para cribado masivo",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "¿El Test y el Tratamiento son Idóneos y Beneficiosos?",
        "al": "Test y Terapia",
        "ll": "Test Seguro y Tratamiento Eficaz",
        "left": {
          "t": "Criterios del Test y Manejo",
          "s": "Test inocuo, simple, sensible y costo-efectivo · Tratamiento precoz disponible y superior al tardío",
          "type": "acc"
        },
        "rl": "Falta de Tratamiento Eficaz Precoz",
        "right": {
          "t": "TAMIZAJE CONTRAINDICADO",
          "s": "No se debe tamizar si diagnosticar precozmente no mejora la sobrevida (sobrediagnóstico / daño innecesario)",
          "type": "warn"
        }
      },
      {
        "t": "Vigilancia de Sesgos de Evaluación: Sesgo de Adelanto (Lead-Time Bias) y Sesgo de Duración (Length-Time Bias)",
        "s": "El único indicador definitivo de eficacia de un screening es la reducción de la MORTALIDAD ESPECÍFICA, no la sobrevida calculada",
        "type": "acc"
      }
    ],
    "contexto": "El tamizaje o screening consiste en la aplicación sistemática de pruebas diagnósticas en poblaciones presuntamente sanas y asintomáticas para identificar precozmente a individuos con una enfermedad en fase preclínica. El EUNACOM examina los clásicos criterios de Wilson y Jungner (aprobados por la OMS) que justifican la implementación de un programa público de tamizaje, así como los sesgos metodológicos característicos que pueden simular erróneamente un beneficio terapéutico inexistente (sesgo de adelanto y sesgo de sobrediagnóstico).",
    "contentSections": [
      {
        "subhead": "1. Definición y Fundamentos del Tamizaje",
        "paragraphs": [
          "El tamizaje poblacional (cribado o screening) no busca diagnosticar de forma definitiva, sino clasificar a los individuos asintomáticos en dos grupos: aquellos con alta probabilidad de tener la afección (que requerirán pruebas confirmatorias diagnósticas específicas) y aquellos con baja probabilidad.",
          "Tamizaje de Masa (Poblacional): Se aplica a toda una cohorte demográfica sin selección individual de riesgo (ej: PAP a mujeres de 25 a 64 años, mamografía a mujeres de 50 a 69 años, fenilcetonuria neonatal).\nTamizaje Oportunístico: Se realiza cuando la persona consulta espontáneamente por otro motivo en el sistema de salud (ej: toma de presión arterial en cada consulta médica)."
        ]
      },
      {
        "subhead": "2. Criterios Clásicos de Wilson y Jungner (OMS)",
        "paragraphs": [
          "Para que un programa de tamizaje poblacional esté éticamente y sanitariamente justificado, debe cumplir con diez principios cardinales:\n1. La condición o enfermedad debe representar un problema de salud importante para la comunidad (alta prevalencia, morbimortalidad o carga de enfermedad).\n2. Debe existir un tratamiento aceptado y eficaz para los pacientes diagnosticados.\n3. Deben existir instalaciones y recursos disponibles para el diagnóstico confirmatorio y el tratamiento oportuno.\n4. La enfermedad debe poseer una etapa latente o presintomática detectable y suficientemente prolongada en el tiempo.\n5. Debe existir una prueba o examen de tamizaje adecuado, simple, seguro, inocuo, aceptable para la población y de alta sensibilidad.",
          "6. La prueba debe ser aceptable para la población general (no invasiva ni dolorosa).\n7. La historia natural de la enfermedad debe ser adecuadamente conocida y comprendida en su desarrollo biológico.\n8. Debe existir una política acordada sobre a quiénes tratar como pacientes según los resultados obtenidos.\n9. El costo de la detección de casos debe ser económicamente equilibrado en relación con el gasto total en salud (costo-efectividad).\n10. La búsqueda de casos debe ser un proceso continuo y regular en el tiempo, y no una actividad aislada de una sola vez."
        ]
      },
      {
        "subhead": "3. Sesgos Metodológicos Intrínsecos del Tamizaje",
        "paragraphs": [
          "Al evaluar la eficacia de un programa de tamizaje mediante estudios observacionales, suelen cometerse dos sesgos cardinales que simulan un aumento de la sobrevida cuando en realidad la fecha de la muerte no se ha modificado:\n• Sesgo de Adelanto en el Diagnóstico (Lead-Time Bias): Se produce porque el tamizaje detecta la enfermedad varios años antes de lo que se habría diagnosticado por síntomas clínicos habituales. La sobrevida calculada desde el diagnóstico parece mayor, pero el momento final del fallecimiento del paciente no se retrasa en absoluto; el paciente solo vivió más tiempo 'sabiendo' que tenía la enfermedad.",
          "• Sesgo de Duración o Sobrediagnóstico (Length-Time Bias): Las pruebas de tamizaje periódico tienen una probabilidad desproporcionadamente mayor de detectar tumores o enfermedades de crecimiento muy lento, indolente y biológicamente benigno (que tienen una fase preclínica muy larga en el tiempo), mientras que los tumores de crecimiento muy agresivo y rápido pasan desapercibidos en los intervalos inter-screening. Esto sobreestima falsamente la bondad del tamizaje al incluir más casos de buen pronóstico intrínseco.",
          "• Regla de Oro Epidemiológica: El único indicador metodológico válido e indiscutible para demostrar que un programa de screening es realmente eficaz y beneficioso es demostrar una reducción estadísticamente significativa en la TASA DE MORTALIDAD ESPECÍFICA por la enfermedad (o mortalidad general) en un ensayo clínico aleatorizado, y NUNCA basarse en el cálculo de la tasa de sobrevida a 5 años desde el diagnóstico."
        ]
      }
    ],
    "table": {
      "title": "Programas Emblemáticos de Tamizaje en el Sistema de Salud Chileno",
      "headers": [
        "Programa de Tamizaje",
        "Población Objetivo",
        "Prueba Empleada",
        "Periodicidad",
        "Fase Detectable"
      ],
      "rows": [
        [
          "Cáncer Cervicouterino (GES)",
          "Mujeres de 25 a 64 años",
          "Papanicolaou (PAP) / Test VPH",
          "Cada 3 años (PAP) o 5 años (VPH)",
          "Neoplasia Intraepitelial (NIE I-III)"
        ],
        [
          "Cáncer de Mama (GES)",
          "Mujeres de 50 a 69 años",
          "Mamografía bilateral",
          "Cada 2 años",
          "Microcalcificaciones / Carcinoma in situ"
        ],
        [
          "Hipotiroidismo y Fenilcetonuria",
          "Todos los recién nacidos vivos",
          "Gota de sangre en papel filtro (PKU/TSH)",
          "Al nacer (universal)",
          "Trastorno metabólico antes de secuela"
        ],
        [
          "Hipertensión y Diabetes (EMPA)",
          "Adultos de 20 a 64 años",
          "Toma de PA, Glicemia y Colesterol",
          "Cada 3 años en FONASA",
          "Factores de riesgo antes de daño CV"
        ],
        [
          "Displasia del Desarrollo de Caderas",
          "Lactantes a los 3 meses",
          "Radiografía de pelvis AP",
          "A los 3 meses de vida universal",
          "Displasia acetabular antes de marcha"
        ]
      ]
    },
    "vignette": {
      "text": "Un hospital implementa un programa de tamizaje de cáncer pulmonar mediante tomografía computarizada de baja dosis en fumadores. Un estudio preliminar reporta con entusiasmo que los pacientes con cáncer detectados mediante el screening tienen una sobrevida a 5 años del 60%, comparado con solo un 20% en aquellos que se diagnosticaron tras consultar por síntomas como hemoptisis y baja de peso. Sin embargo, al analizar los registros de defunciones, la tasa de mortalidad por cáncer pulmonar en la población tamizada es exactamente idéntica a la de la población no tamizada a los 10 años de seguimiento. ¿Cuál es el sesgo metodológico que explica este fenómeno?",
      "conducta": "El fenómeno está explicado fundamentalmente por el Sesgo de Adelanto en el Diagnóstico (Lead-Time Bias). El escáner detectó el cáncer de pulmón varios años antes de que diera síntomas, por lo que el tiempo transcurrido entre el diagnóstico y la muerte fue mayor (aumentando falsamente la sobrevida a 5 años), a pesar de que el tratamiento precoz no logró retrasar en nada el momento final del fallecimiento."
    },
    "explicacion": "El sesgo de tiempo de adelanto (Lead-Time Bias) consiste en una aparente prolongación de la sobrevida generada simplemente por haber adelantado la fecha del diagnóstico en la fase presintomática, sin que la intervención médica modifique la historia natural ni postergue la muerte del paciente. Por esta razón crítica, en epidemiología clínica la 'sobrevida a 5 años' es un parámetro engañoso para evaluar pruebas de screening, siendo el único criterio de eficacia indiscutible la reducción de la tasa de mortalidad específica poblacional.",
    "keyPoints": [
      "Criterios de Wilson y Jungner: Enfermedad importante, historia natural conocida, fase presintomática detectable, test sensible e inocuo, y tratamiento eficaz disponible.",
      "Lead-Time Bias (Sesgo de Adelanto): Aumento aparente de la sobrevida por adelantar el momento del diagnóstico, sin modificar la fecha de la muerte.",
      "Length-Time Bias (Sesgo de Duración): Mayor probabilidad de detectar tumores indolentes y de crecimiento lento, sobreestimando falsamente el beneficio del test.",
      "Evaluación de Screening: La eficacia real de un programa de tamizaje se demuestra ÚNICAMENTE con la reducción de la MORTALIDAD, no con la sobrevida a 5 años.",
      "Screening en Chile: PAP en mujeres 25-64 años (c/3 años), Mamografía en mujeres 50-69 años (c/2 años), PKU/TSH neonatal universal.",
      "Pruebas de Screening: Deben tener alta Sensibilidad, bajo costo, nulo o mínimo riesgo para el paciente y alta aceptación comunitaria."
    ],
    "questions": [
      {
        "stem": "¿Cuál de las siguientes condiciones es un criterio indispensable de acuerdo con los postulados de Wilson y Jungner de la OMS para justificar éticamente la implementación de un programa de tamizaje poblacional masivo?",
        "options": [
          {
            "id": "A",
            "text": "Disponibilidad de un tratamiento eficaz y comprobado que brinde mayor beneficio al aplicarse en etapa preclínica que en etapa sintomática."
          },
          {
            "id": "B",
            "text": "Que la enfermedad sea de curso agudo y fulminante sin período de latencia prolongado."
          },
          {
            "id": "C",
            "text": "Que la prueba de tamizaje sea invasiva para asegurar una especificidad del 100%."
          },
          {
            "id": "D",
            "text": "Que la prevalencia de la patología en la población sea inferior al 0,001% para evitar falsos positivos."
          },
          {
            "id": "E",
            "text": "Que el examen de tamizaje requiera hospitalización preventiva de 24 horas para su realización segura."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Uno de los pilares éticos y científicos de Wilson y Jungner es que debe existir un tratamiento aceptado y eficaz disponible, y que la intervención terapéutica precoz en la fase presintomática proporcione una clara ventaja en sobrevida o calidad de vida respecto a tratar al paciente cuando ya presenta síntomas clínicos. Si no existe tratamiento eficaz disponible, diagnosticar precozmente a personas sanas solo les genera angustia y estigma sin beneficio clínico alguno.\nB) Incorrecta. Se requiere una fase preclínica o latente detectable prolongada.\nC) Incorrecta. La prueba de screening debe ser simple, aceptable y no invasiva ni peligrosa.\nD) Incorrecta. Si la prevalencia es extremadamente baja, el screening masivo no es costo-efectivo.\nE) Incorrecta. El tamizaje debe ser ambulatorio, expedito y de bajo costo.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.028"
      },
      {
        "stem": "Un programa de cribado mamográfico demuestra un incremento notable en la sobrevida a 5 años de las mujeres diagnosticadas con cáncer de mama en comparación con las mujeres no tamizadas diagnosticadas clínicamente. No obstante, se sospecha que dicho incremento en la sobrevida se debe predominantemente a que el mamógrafo detectó precozmente lesiones de crecimiento indolente y muy lenta progresión biológica. ¿Cómo se denomina este tipo de sesgo metodológico?",
        "options": [
          {
            "id": "A",
            "text": "Sesgo de duración o de sobrediagnóstico (Length-time bias)"
          },
          {
            "id": "B",
            "text": "Sesgo de adelanto diagnóstico (Lead-time bias)"
          },
          {
            "id": "C",
            "text": "Sesgo de confusión no controlada"
          },
          {
            "id": "D",
            "text": "Sesgo del trabajador sano"
          },
          {
            "id": "E",
            "text": "Sesgo de desgaste por abandono"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El sesgo de duración o de longitud (Length-Time Bias) ocurre porque los tumores de progresión muy lenta permanecen durante mucho más tiempo en la fase presintomática detectable, lo que les otorga una probabilidad mucho más alta de ser detectados en rondas periódicas de tamizaje. En contraste, los tumores rápidamente agresivos progresan velozmente hacia la fase clínica entre un tamizaje y otro (cánceres de intervalo). Como consecuencia, el grupo detectado por tamizaje queda sobrerrepresentado por tumores de mejor pronóstico biológico intrínseco, falseando el beneficio real atribuible al test.\nB) Incorrecta. El lead-time bias se refiere a la sobrevida aparente prolongada por adelantar la fecha del diagnóstico sin posponer la muerte.\nC, D, E) No describen el fenómeno de detección desproporcionada de casos biológicamente lentos.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.028"
      }
    ]
  }
];

const bloque2Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowSaludPublica(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque2Classes };
