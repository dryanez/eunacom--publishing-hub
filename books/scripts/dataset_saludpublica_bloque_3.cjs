/**
 * TOMO 21: SALUD PÚBLICA, EPIDEMIOLOGÍA & BIOÉTICA · BLOQUE 3
 * Bioética Clínica, Medicina Legal & Marco Regulatorio (21.11 a 21.14)
 */

const { flowSaludPublica } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "sp-11",
    "classId": "sp-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Bioética Clínica, Medicina Legal & Marco Regulatorio",
    "topicLabel": "21.11",
    "title": "Principios de la Bioética Clínica, Consentimiento Informado y Rechazo de Tratamiento",
    "perfilCode": "7.01.3.052",
    "dx": "Deliberación Ética",
    "tx": "Límites de la Terapia",
    "seg": "Comité de Ética Asistencial",
    "ges": "Marco Bioético de Beauchamp y Childress y Legislación Clínica Nacional",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#98) · EUNACOM Julio 2024 (Q#20) · EUNACOM Diciembre 2023 (Q#70)",
    "frecuencia": "Máxima Rentabilidad · Preguntas ético-clínicas garantizadas sobre rechazo de transfusión en Testigos de Jehová, menores de edad vs adultos y doble efecto",
    "svg": null,
    "algoTitle": "Algoritmo de Deliberación Bioética ante Conflicto de Principios y Rechazo de Tratamiento",
    "diagramRows": [
      {
        "t": "Conflicto Ético-Clínico: Paciente o Representante Rechaza una Intervención Médica Vital",
        "s": "Evaluación del estado cognitivo, voluntariedad y estatus jurídico de la persona",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿El Paciente es un Adulto Legalmente Competente o un Menor de Edad?",
        "al": "Adulto Competente vs Menor de Edad",
        "ll": "ADULTO LÚCIDO Y COMPETENTE",
        "left": {
          "t": "Prevalencia de la AUTONOMÍA",
          "s": "Tiene derecho ético y legal a rechazar cualquier terapia médica · Dejar constancia escrita firmada",
          "type": "warn"
        },
        "rl": "MENOR DE EDAD CON RIESGO VITAL",
        "right": {
          "t": "Prevalencia de NO MALEFICENCIA / VIDA",
          "s": "Los padres NO pueden disponer de la vida del hijo · Transfundir/operar y deducir Recurso de Protección",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "En Paciente Adulto Inconsciente en Urgencia Vital Sin Voluntad Anticipada Conocida",
        "al": "¿Excepción de Urgencia?",
        "ll": "Intervención de Urgencia Vital Inmediata",
        "left": {
          "t": "Presunción de Consentimiento / Deber de Actuar",
          "s": "El médico actúa inmediatamente bajo el principio de Beneficencia para salvar la vida y evitar secuelas",
          "type": "acc"
        },
        "rl": "Cuidados Paliativos Terminales",
        "right": {
          "t": "Principio del Doble Efecto",
          "s": "Legítimo titular opioides a dosis plena para calmar dolor agónico aunque deprima secundariamente el sensorio",
          "type": "acc"
        }
      },
      {
        "t": "En Situaciones de Duda o Desacuerdo Moral Insuperable: Solicitar Consulta al Comité de Ética Asistencial (Función Consultiva)",
        "s": "El CEA delibera y emite recomendaciones no vinculantes; la decisión final es del médico y el paciente",
        "type": "acc"
      }
    ],
    "contexto": "La bioética médica clínica es un componente esencial del ejercicio profesional evaluado en el EUNACOM. Se fundamenta en el modelo principialista de Beauchamp y Childress (Autonomía, Beneficencia, No Maleficencia y Justicia). Las preguntas del examen enfrentan al médico a dilemas éticos concretos: el paciente adulto testigo de Jehová que rechaza hemoderivados en uso de su autonomía, el conflicto moral y legal cuando los padres niegan transfusiones a un menor de edad con hemorragia crítica, las excepciones legales al consentimiento informado en urgencias vitales y la legitimidad del principio del doble efecto en sedación paliativa.",
    "contentSections": [
      {
        "subhead": "1. Los Cuatro Principios de la Bioética (Beauchamp y Childress)",
        "paragraphs": [
          "• Autonomía: Obligación moral y jurídica de respetar la capacidad de autodeterminación de las personas competentes para tomar decisiones sobre su propio cuerpo, salud y vida de acuerdo con sus valores, creencias y proyectos personales. Se operacionaliza a través del Consentimiento Informado y el derecho al rechazo de tratamiento.",
          "• No Maleficencia (Primum non nocere): Obligación de no infligir daño intencional, negligente ni innecesario al paciente. Es un principio de orden público y jerárquicamente prioritario frente a la beneficencia.",
          "• Beneficencia: Deber moral del equipo de salud de procurar el mayor bien posible y promover el bienestar del paciente, balanceando siempre los beneficios esperados frente a los riesgos o cargas de la intervención médica.",
          "• Justicia (Distributiva): Obligación de distribuir equitativamente los beneficios, riesgos, costos y recursos sanitarios escasos en la sociedad, sin discriminaciones arbitrarias por motivos económicos, sociales, raciales o de género."
        ]
      },
      {
        "subhead": "2. Consentimiento Informado: Requisitos de Validez y Excepciones",
        "paragraphs": [
          "El consentimiento informado es un proceso dialógico continuo entre el médico y el paciente, y no un mero trámite administrativo o firma de un papel:\n• Elementos Constitutivos de Validez:\n  1. Información adecuada: Explicación comprensible del diagnóstico, pronóstico, objetivo del procedimiento, riesgos típicos y graves, beneficios esperados y alternativas disponibles.\n  2. Comprensión: Verificación de que el paciente entendió la naturaleza de la intervención.\n  3. Voluntariedad: Decisión libre de coacción, manipulación o presiones indebidas.\n  4. Capacidad o Competencia: Aptitud mental del sujeto para ponderar la información y prever las consecuencias de su decisión.",
          "• Excepciones Legales al Consentimiento Informado en Chile (Ley 20.584):\n  1. Urgencia Médica Vital: Cuando la falta de intervención médica inmediata implica riesgo inminente de muerte o de secuela funcional grave en un paciente inconsciente, en coma o incapaz, y no es posible obtener el consentimiento de su representante legal en el tiempo disponible.\n  2. Razones de Salud Pública: Cuando la no intervención pone en peligro la salud colectiva de la población (ej: aislamiento forzoso de paciente con cólera o ántrax respiratorio, medidas sanitarias de cuarentena obligatoria)."
        ]
      },
      {
        "subhead": "3. Rechazo de Tratamiento y Dilema en Testigos de Jehová",
        "paragraphs": [
          "• Paciente Adulto Competente: Si un adulto legalmente capaz, lúcido y debidamente informado decide rechazar un tratamiento médico o quirúrgico (por ejemplo, transfusión de hemoderivados por convicción religiosa como Testigo de Jehová), el médico DEBE RESPETAR su decisión en virtud del principio de Autonomía y la Ley 20.584. Se debe dejar constancia escrita y firmada en la ficha clínica (o acta de rechazo de tratamiento con testigos), ofreciendo todas las terapias alternativas disponibles (expansores de volumen, recuperadores intraoperatorios, ácido tranexámico).",
          "• Menor de Edad o Incapaz con Riesgo Vital Inminente: Los padres o tutores legales NO tienen un derecho absoluto de disposición sobre la vida de sus hijos. Si los padres de un niño testigo de Jehová rechazan una transfusión sanguínea de emergencia indispensable para salvar su vida (politraumatizado, hemorragia digestiva masiva), el principio de Autonomía de los padres se subordina al principio de NO MALEFICENCIA y al DERECHO A LA VIDA del menor (Interés Superior del Niño).",
          "• Conducta Médico-Legal Obligatoria ante el Niño: El médico tratante DEBE TRANSFUNDIR Y ADMINISTRAR EL TRATAMIENTO VITAL DE FORMA INMEDIATA para preservar la vida del niño, y simultáneamente (o inmediatamente posterior a la estabilización) interponer una Medida de Protección de Urgencia ante el Tribunal de Familia de turno (o recurso de protección ante la Corte de Apelaciones) para respaldo jurisdiccional del procedimiento."
        ]
      },
      {
        "subhead": "4. Principio del Doble Efecto y Sedación Paliativa",
        "paragraphs": [
          "El Principio del Doble Efecto justifica moral y jurídicamente la administración de analgésicos opioides potentes (morfina, fentanilo) o sedantes en dosis crecientes en pacientes con patologías terminales en fase de agonía, aun cuando dicha terapia pueda conllevar secundariamente un riesgo previsible de depresión respiratoria o acortamiento de la vida.",
          "• Condiciones de Validez Ética:\n  1. El acto médico en sí mismo debe ser bueno o moralmente neutro (aliviar el sufrimiento intratable).\n  2. La intención directa y exclusiva del médico debe ser el alivio del dolor intolerable, y NUNCA provocar la muerte.\n  3. El efecto positivo (alivio) no debe obtenerse a través del efecto negativo (muerte).\n  4. Existe una proporción grave entre la gravedad del síntoma refractario y el riesgo de efectos adversos secundarios.\n*Diferencia cardinal: En la eutanasia activa o auxilio al suicidio la intención deliberada es provocar la muerte; en el doble efecto de los cuidados paliativos la intención es exclusivamente mitigar el dolor.*"
        ]
      }
    ],
    "table": {
      "title": "Los 4 Principios de la Bioética Clínica de Beauchamp y Childress",
      "headers": [
        "Principio Bioético",
        "Definición Conceptual",
        "Aplicación Clínica en la Práctica",
        "Límites o Conflictos Éticos"
      ],
      "rows": [
        [
          "Autonomía",
          "Capacidad de autogobernarse y decidir libremente",
          "Consentimiento informado y rechazo de terapias en adultos",
          "Incapacidad mental, coma o daño a terceros"
        ],
        [
          "No Maleficencia",
          "Primum non nocere: no infligir daño activo ni omisivo",
          "Evitar futilidad terapéutica y procedimientos dañinos",
          "Prioridad jerárquica en menores con riesgo vital"
        ],
        [
          "Beneficencia",
          "Actuar en pro del mayor beneficio para el paciente",
          "Indicación de tratamientos médicos con respaldo clínico",
          "No caer en el paternalismo médico autoritario"
        ],
        [
          "Justicia Distributiva",
          "Distribución equitativa y solidaria de recursos de salud",
          "Acceso universal GES y priorización transparente de camas",
          "Triage en desastres y racionamiento de camas críticas"
        ]
      ]
    },
    "severityTable": {
      "title": "Conducta Médico-Legal ante Rechazo de Transfusión Sanguínea en Chile",
      "headers": [
        "Escenario Clínico",
        "Estatus del Paciente",
        "Conducta Médica Obligatoria",
        "Fundamento Jurídico-Ético"
      ],
      "rows": [
        [
          "Adulto Lúcido y Capaz",
          "Mayor de 18 años lúcido",
          "RESPETAR EL RECHAZO; no transfundir; constancia firmada",
          "Prevalece la Autonomía del paciente (Ley 20.584)"
        ],
        [
          "Menor de Edad en Riesgo Vital",
          "Lactante, niño o adolescente",
          "TRANSFUNDIR DE INMEDIATO y Recurso de Protección",
          "Interés Superior del Niño y Derecho a la Vida"
        ],
        [
          "Adulto Inconsciente en Urgencia",
          "Coma o shock sin familiar ni documento",
          "TRANSFUNDIR DE INMEDIATO para salvar la vida",
          "Excepción de Urgencia Vital (Consentimiento presunto)"
        ],
        [
          "Adulto con Voluntad Anticipada",
          "Documento notarial auténtico válido",
          "Respetar la directriz formalizada previa",
          "Expresión autónoma previa de voluntad válida"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Comités de Ética Asistencial (CEA): Funciones y Naturaleza Legal",
      "headers": [
        "Dimensión del CEA",
        "Características Legales (Ley 20.584)",
        "Implicancia para el Médico Tratante"
      ],
      "rows": [
        [
          "Naturaleza del Dictamen",
          "Estrictamente CONSULTIVO y NO VINCULANTE",
          "El médico tratante mantiene la responsabilidad legal final"
        ],
        [
          "Composición",
          "Multidisciplinaria: médicos, enfermería, abogados y miembros legos",
          "Asegura deliberación plural y sin sesgos corporativos"
        ],
        [
          "Cuándo Solicitarlo",
          "Casos de discrepancia moral grave, futilidad o desacuerdo familiar",
          "Brinda orientación bioética fundada en derecho"
        ],
        [
          "Situaciones de Urgencia Vital",
          "NO debe demorarse una urgencia vital por esperar al CEA",
          "La reanimación urgente prima sobre cualquier trámite"
        ]
      ]
    },
    "vignette": {
      "text": "Un niño de 7 años politraumatizado ingresa a la urgencia con shock hipovolémico grado IV por rotura esplénica masiva y hemoperitoneo crítico (hemoglobina de 4,2 g/dL). El cirujano de turno indica laparotomía exploradora urgente y transfusión inmediata de 2 unidades de glóbulos rojos. Ambos padres, de religión Testigos de Jehová, se interponen en el pasillo del pabellón quirúrgico prohibiendo taxativamente la transfusión de sangre de su hijo por motivos de fe religiosa. ¿Cuál es la conducta médica y médico-legal correcta?",
      "conducta": "El médico debe ingresar al menor a pabellón, transfundir los hemoderivados e intervenir quirúrgicamente de inmediato para salvar la vida del niño. Los padres no tienen facultad legal ni ética para rechazar tratamientos vitales en menores de edad. De manera simultánea o inmediatamente posterior a la cirugía, el equipo médico debe notificar al Tribunal de Familia o Corte de Apelaciones interponiendo una Medida de Protección de Urgencia."
    },
    "explicacion": "En el caso de menores de edad con riesgo vital inminente, el principio de Autonomía de los padres (patria potestad) encuentra un límite absoluto en el Derecho a la Vida y el principio de No Maleficencia del niño (doctrina del Interés Superior del Niño protegida por la Constitución y tratados internacionales). El médico tiene la obligación ética y jurídica ineludible de otorgar el tratamiento indispensable para la preservación de la vida, recurriendo con posterioridad a la justicia de familia para regularizar el amparo jurisdiccional.",
    "keyPoints": [
      "Principios de Beauchamp y Childress: Autonomía, Beneficencia, No Maleficencia y Justicia.",
      "Adulto Competente: Tiene derecho legal a rechazar cualquier terapia o transfusión; el médico DEBE respetar su autonomía.",
      "Menor de Edad en Riesgo Vital: Se DEBE transfundir y operar de inmediato; los padres no pueden disponer de la vida del hijo; interponer Medida de Protección.",
      "Excepciones al Consentimiento: Urgencia médica vital con riesgo de muerte/secuela grave en incapaz, y razones de Salud Pública (epidemias).",
      "Principio del Doble Efecto: Permite aumentar opioides en fase terminal para aliviar dolor refractario aunque deprima el sensorio o acorte la vida, si la intención exclusiva es calmar el sufrimiento.",
      "Comités de Ética Asistencial (CEA): Órganos asesores multidisciplinarios de carácter estrictamente consultivo y NO vinculante."
    ],
    "questions": [
      {
        "stem": "Un paciente de 45 años, previamente sano, ingresa lúcido y orientado al servicio de urgencias con una hemorragia digestiva alta grave por úlcera péptica sangrante. Presenta presión arterial de 85/50 mmHg y hemoglobina de 5,8 g/dL. El paciente manifiesta de forma clara, reiterada y tranquila que es Testigo de Jehová y que por sus convicciones religiosas rechaza categóricamente recibir cualquier transfusión de sangre o hemoderivados, aceptando los riesgos vitales de su decisión. ¿Cuál es la conducta correcta que debe adoptar el médico tratante?",
        "options": [
          {
            "id": "A",
            "text": "Respetar la voluntad del paciente de no transfundirse, dejar constancia escrita y firmada en la ficha clínica, e iniciar alternativas médicas como cristaloides y expansores plasmáticos."
          },
          {
            "id": "B",
            "text": "Sedarlo farmacológicamente para transfundirlo de emergencia bajo el principio de beneficencia médica."
          },
          {
            "id": "C",
            "text": "Solicitar la intervención de la fuerza pública para obligar al paciente a aceptar la transfusión."
          },
          {
            "id": "D",
            "text": "Declarar al paciente en estado de incompetencia mental transitoria por hipotensión para transfundirlo de inmediato."
          },
          {
            "id": "E",
            "text": "Rechazar la atención médica del paciente y solicitar su alta disciplinaria inmediata del hospital."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Ley 20.584 sobre Deberes y Derechos de los Pacientes y la doctrina bioética consagran el principio de Autonomía de las personas adultas competentes. Todo paciente lúcido, informado y capaz tiene el derecho legal y ético a rechazar cualquier tratamiento o procedimiento médico, incluso si dicha negativa conlleva el riesgo de muerte. El médico debe respetar la decisión del paciente, documentar detalladamente el rechazo en la ficha clínica con firma de testigos y del usuario, y ofrecer el máximo esfuerzo terapéutico con alternativas médicas no objetadas (sueroterapia, hierro EV, hemostasia endoscópica).\nB) Incorrecta. Sedar a un paciente lúcido para forzar un tratamiento rechazado constituye una agresión física y una vulneración legal severa a los derechos del paciente.\nC) Incorrecta. La fuerza pública no interviene para vulnerar la autonomía de adultos lúcidos.\nD) Incorrecta. La hipotensión compensada no implica incompetencia mental si el paciente razona y comprende adecuadamente.\nE) Incorrecta. El médico no puede abandonar al paciente; debe tratarlo respetando los límites consentidos.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.052"
      },
      {
        "stem": "Un médico paliativista atiende a una paciente de 78 años con cáncer de páncreas metastásico en fase de agonía, quien presenta dolor irruptivo refractario de intensidad 10/10 y agitación terminal severa. El médico decide titular una infusión continua de morfina y midazolam a dosis analgésicas plenas para controlar el sufrimiento intolerable de la paciente, a sabiendas de que dicha medicación podría secundariamente acelerar una depresión respiratoria terminal. ¿Bajo qué principio bioético se justifica esta conducta médica?",
        "options": [
          {
            "id": "A",
            "text": "Principio del Doble Efecto"
          },
          {
            "id": "B",
            "text": "Principio de Autonomía Paternalista"
          },
          {
            "id": "C",
            "text": "Principio de Eutanasia Pasiva Voluntaria"
          },
          {
            "id": "D",
            "text": "Principio de Justicia Conmutativa"
          },
          {
            "id": "E",
            "text": "Principio de No Maleficencia Inversa"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El Principio del Doble Efecto establece que una acción médica que tiene dos efectos (uno bueno y deseado: aliviar el sufrimiento refractario en agonía; y otro malo o perjudicial pero no deseado: potencial depresión respiratoria o acortamiento del tiempo de agonía) es ética y legalmente lícita siempre que la acción sea buena en sí misma, la intención exclusiva sea el alivio paliativo del paciente, y el efecto positivo no se consiga a través del efecto negativo.\nB, D, E) Son conceptos inventados o no aplicables a la sedación paliativa.\nC) Incorrecta. La sedación paliativa no es eutanasia, ya que la intención del médico no es provocar la muerte sino suprimir el dolor refractario.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.052"
      }
    ]
  },
  {
    "id": "sp-12",
    "classId": "sp-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Bioética Clínica, Medicina Legal & Marco Regulatorio",
    "topicLabel": "21.12",
    "title": "Ley de Deberes y Derechos de los Pacientes (Ley 20.584): Ficha Clínica y Confidencialidad",
    "perfilCode": "7.01.3.056",
    "dx": "Marco Legal Sanitario",
    "tx": "Custodia Documental",
    "seg": "Superintendencia de Salud",
    "ges": "Ley 20.584 sobre Derechos y Deberes que Tienen las Personas en su Atención en Salud",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#99) · EUNACOM Julio 2024 (Q#21) · EUNACOM Diciembre 2023 (Q#72)",
    "frecuencia": "Muy Alta · Pregunta garantizada sobre propiedad y acceso a la Ficha Clínica, confidencialidad médica y secreto profesional",
    "svg": null,
    "algoTitle": "Algoritmo de Titularidad y Acceso Legal a la Ficha Clínica (Ley 20.584)",
    "diagramRows": [
      {
        "t": "Solicitud de Acceso o Copia de Ficha Clínica en Institución de Salud (Pública o Privada)",
        "s": "La Ficha Clínica es PROPIEDAD DEL PACIENTE; el establecimiento es el CUSTODIO legal (mínimo 15 años)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Quién es el Solicitante que Requiere la Información Médica?",
        "al": "¿Tiene Legitimación Legal de Acceso?",
        "ll": "ACCESO AUTORIZADO POR LEY",
        "left": {
          "t": "Sujetos con Derecho Legal Directo",
          "s": "1) Paciente; 2) Representante legal; 3) Herederos (fallecido); 4) Tribunales / Fiscalía; 5) Superintendencia",
          "type": "acc"
        },
        "rl": "ACCESO PROHIBIDO POR LEY",
        "right": {
          "t": "Sujetos SIN Derecho de Acceso",
          "s": "Empleadores, Compañías de Seguros, Policías sin orden judicial, Cónyuge sin poder notarial",
          "type": "crit"
        }
      },
      {
        "t": "Obligación de Secreto Médico y Confidencialidad: La vulneración del secreto profesional acarrea sanciones administrativas, civiles y penales",
        "s": "Toda entrega indebida de datos sensibles de salud viola la Ley 20.584 y la Ley 19.628 de Protección de Datos",
        "type": "acc"
      }
    ],
    "contexto": "La Ley 20.584 regula minuciosamente los derechos y deberes que tienen las personas en relación con las acciones vinculadas a su atención en salud. Entre sus disposiciones más evaluadas en el EUNACOM se encuentran el régimen legal de la Ficha Clínica (su definición, propiedad inalienable del paciente, deber de custodia del prestador por un mínimo legal de 15 años) y las excepciones taxativas que permiten levantar el secreto profesional para entregar información clínica a terceros.",
    "contentSections": [
      {
        "subhead": "1. Naturaleza Jurídica y Propiedad de la Ficha Clínica",
        "paragraphs": [
          "• Definición Legal: La ficha clínica es el instrumento obligatorio en el que se registra el conjunto de antecedentes relativos a los diferentes eventos y procesos asistenciales de salud de una persona, ya sea en soporte de papel o digital/electrónico.",
          "• Propiedad vs Custodia:\n  - La información contenida en la ficha clínica es de PROPIEDAD EXCLUSIVA E INALIENABLE DEL PACIENTE.\n  - El establecimiento de salud (hospital, clínica, CESFAM o consulta privada) es el mero CUSTODIO Y DEPOSITARIO LEGAL de la ficha clínica, estando legalmente obligado a resguardar su integridad, autenticidad y estricta confidencialidad.",
          "• Plazo Legal de Conservación: El prestador debe conservar la ficha clínica por un período MÍNIMO DE 15 AÑOS contados desde el último registro de atención médica, asegurando su disponibilidad continua."
        ]
      },
      {
        "subhead": "2. Sujetos Legalmente Habilitados para Acceder a la Ficha Clínica",
        "paragraphs": [
          "La información de la ficha clínica tiene carácter de dato sensible reservado bajo secreto profesional. La Ley 20.584 establece de manera taxativa quiénes son las ÚNICAS personas e instituciones que pueden acceder a ella o solicitar una copia:\n1. El propio paciente titular.\n2. El representante legal del paciente (padres de menores de edad o tutores legales de incapaces declarados judicialmente), o un tercero expresamente apoderado mediante mandato otorgado ante Notario Público.",
          "3. Los herederos legítimos del paciente fallecido, acreditando el vínculo sucesorio mediante certificado de posesión efectiva o de parentesco.\n4. Los Tribunales de Justicia ordinarios y el Ministerio Público (Fiscales), mediante requerimiento formal en causas judiciales o investigaciones penales en curso.\n5. La Superintendencia de Salud y el Instituto de Salud Pública (ISP), exclusivamente en el ejercicio de sus funciones legales de fiscalización sanitaria.",
          "• Quiénes NO pueden acceder a la ficha clínica (¡Pregunta EUNACOM!):\n  - Empleadores o jefaturas laborales del paciente.\n  - Compañías de seguros privados sin autorización notarial expresa del paciente.\n  - Carabineros o PDI sin orden judicial previa o instrucción formal de la Fiscalía.\n  - El cónyuge o familiares de un adulto competente sin un poder notarial específico."
        ]
      },
      {
        "subhead": "3. Otros Derechos Cardinales Consagrados en la Ley 20.584",
        "paragraphs": [
          "• Derecho a un Trato Digno y Respetuoso: Respeto a la intimidad, pudor e identidad de género. Derecho a contar con facilitadores lingüísticos o intérpretes en caso de población indígena o migrante que no hable español.\n• Derecho a no ser grabado ni fotografiado: Prohibición absoluta de tomar fotografías, videos o grabaciones de audio a los pacientes con fines docentes, de difusión o redes sociales sin su consentimiento informado expreso y por escrito.",
          "• Derecho a la Información Financiera y Alta Médica: Recibir información clara sobre costos de insumos y cuenta hospitalaria detallada, y entrega obligatoria del informe de epicrisis al alta hospitalaria.\n• Deberes de los Pacientes: Entregar información veraz sobre su salud e identidad, cuidar las instalaciones del centro asistencial y tratar con respeto al personal de salud (Ley de 'Consultorio Seguro' que agrava las penas por agresiones a funcionarios de la salud)."
        ]
      }
    ],
    "table": {
      "title": "Legitimación de Acceso a la Ficha Clínica según la Ley 20.584",
      "headers": [
        "Solicitante",
        "¿Tiene Acceso Legal Directo?",
        "Requisito Exigido por Ley",
        "Explicación Jurídica"
      ],
      "rows": [
        [
          "El propio Paciente",
          "SÍ",
          "Acreditar identidad con cédula de identidad",
          "Es el dueño legal de su información clínica"
        ],
        [
          "Representante Legal",
          "SÍ",
          "Certificado de nacimiento o poder notarial",
          "Actúa en nombre de menor o incapaz"
        ],
        [
          "Herederos de Fallecido",
          "SÍ",
          "Certificado de defunción y parentesco / posesión",
          "Continuadores legales de los derechos"
        ],
        [
          "Fiscalía / Tribunales",
          "SÍ",
          "Oficio judicial en causa formal en trámite",
          "Requerimiento de la justicia ordinaria"
        ],
        [
          "Empleador Laboral",
          "NO",
          "Prohibido absolutamente",
          "Vulneración de datos personales sensibles"
        ],
        [
          "Compañía de Seguros",
          "NO (salvo autorización)",
          "Exige poder notarial expreso del paciente",
          "El contrato privado no levanta el secreto médico"
        ],
        [
          "Policía (Carabineros/PDI)",
          "NO (sin orden)",
          "Requiere orden del Fiscal o Tribunal",
          "La policía no puede revisar fichas autónomamente"
        ]
      ]
    },
    "vignette": {
      "text": "Un trabajador de 35 años sufre una crisis de pánico en su horario laboral y acude al servicio de urgencias de una clínica privada. Al día siguiente, el jefe de recursos humanos de la empresa se presenta en la dirección médica de la clínica con una carta formal timbrada por la compañía, solicitando una copia íntegra de la ficha clínica de urgencia del empleado para verificar si su cuadro clínico ameritaba reposo o si existía consumo de sustancias. ¿Cuál es la respuesta y conducta que debe asumir la dirección del establecimiento de salud?",
      "conducta": "La clínica debe denegar categóricamente la entrega de la ficha clínica al empleador. La Ley 20.584 establece que la información médica es confidencial y propiedad exclusiva del paciente; los empleadores no forman parte de los sujetos legitimados por ley para acceder a los antecedentes clínicos de un trabajador sin su autorización previa otorgada ante notario."
    },
    "explicacion": "Bajo la legislación chilena (Ley 20.584 y Ley 19.628 de Protección de la Vida Privada), los datos de salud son considerados 'datos sensibles'. El empleador carece de todo derecho legal para acceder a la ficha médica de sus trabajadores. La entrega indebida de una ficha médica a la empresa constituye una gravísima vulneración al secreto médico profesional y a la ley de derechos del paciente, sancionable administrativamente por la Superintendencia de Salud e indemnizable en sede civil por daño moral.",
    "keyPoints": [
      "La Ficha Clínica es de PROPIEDAD DEL PACIENTE; el centro asistencial es el CUSTODIO legal.",
      "Custodia de la Ficha: El prestador debe conservarla por un plazo MÍNIMO DE 15 AÑOS desde la última atención.",
      "Acceso Autorizado: Paciente, representante legal, herederos del fallecido, tribunales/fiscalía y Superintendencia de Salud.",
      "Acceso Prohibido: Empleadores, aseguradoras sin poder notarial expreso, policías sin orden judicial y familiares de adultos competentes.",
      "Trato Digno: Prohibido fotografiar, grabar en video o exponer al paciente sin consentimiento escrito.",
      "Ley de Consultorio Seguro: Agrava sustancialmente las sanciones penales para quienes agredan verbal o físicamente a los funcionarios de la salud."
    ],
    "questions": [
      {
        "stem": "El gerente de una empresa acude a un hospital público solicitando copia de la ficha médica de uno de sus empleados que estuvo hospitalizado durante dos semanas, argumentando que necesita conocer el diagnóstico exacto para justificar el pago de un bono de productividad laboral interno. ¿Cuál es la respuesta legalmente procedente según la Ley 20.584?",
        "options": [
          {
            "id": "A",
            "text": "Rechazar la solicitud, ya que los empleadores no tienen acceso legal a la ficha médica de sus trabajadores por ser un dato de salud sensible y confidencial."
          },
          {
            "id": "B",
            "text": "Entregar una copia de la epicrisis omitiendo los resultados de exámenes de laboratorio."
          },
          {
            "id": "C",
            "text": "Acceder a la entrega de la ficha siempre que la empresa presente una carta timbrada de recursos humanos."
          },
          {
            "id": "D",
            "text": "Solicitar la autorización verbal del jefe de servicio del hospital para entregar los antecedentes."
          },
          {
            "id": "E",
            "text": "Entregar únicamente los diagnósticos de ingreso y egreso sin los registros de enfermería."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Ley 20.584 prohíbe de manera taxativa la divulgación o entrega de la ficha clínica a terceras personas no contempladas en la ley. Los empleadores están legalmente excluidos de acceder a la ficha médica de sus subordinados, independientemente de cualquier justificación administrativa laboral. La información sólo puede ser entregada al propio paciente o a quien cuente con un poder notarial expreso.\nB, C, D, E) Son conductas ilegales que violan el secreto profesional y la confidencialidad de la ficha clínica.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.056"
      },
      {
        "stem": "¿Por cuánto tiempo mínimo está legalmente obligado un establecimiento hospitalario en Chile a conservar y custodiar los registros de la ficha clínica de un paciente, contados desde la fecha de su última atención?",
        "options": [
          {
            "id": "A",
            "text": "15 años"
          },
          {
            "id": "B",
            "text": "5 años"
          },
          {
            "id": "C",
            "text": "10 años"
          },
          {
            "id": "D",
            "text": "20 años"
          },
          {
            "id": "E",
            "text": "De forma vitalicia e indefinida"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El artículo 13 de la Ley 20.584 y su respectivo reglamento (Decreto Supremo N.° 41 del MINSAL) señalan expresamente que los prestadores institucionales de salud deberán conservar y resguardar las fichas clínicas por un período mínimo de 15 años, contados desde la última vez que el paciente recibió una atención de salud en el establecimiento.\nB, C, D, E) Son plazos erróneos que no concuerdan con el mandato de la ley chilena.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.056"
      }
    ]
  },
  {
    "id": "sp-13",
    "classId": "sp-13",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Bioética Clínica, Medicina Legal & Marco Regulatorio",
    "topicLabel": "21.13",
    "title": "Certificación Médica de Defunción, Autopsias y Deber de Denuncia",
    "perfilCode": "7.01.3.051",
    "dx": "Certificación de Muerte",
    "tx": "Llenado Normativo CMD",
    "seg": "Servicio Médico Legal / Fiscalía",
    "ges": "Código Sanitario y Código Procesal Penal de Chile",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#100) · EUNACOM Julio 2024 (Q#22) · EUNACOM Diciembre 2023 (Q#74)",
    "frecuencia": "Máxima Rentabilidad · Pregunta fija: llenado correcto de causa básica vs inmediata (¡prohibido paro cardiorrespiratorio!), cuándo derivar al SML y plazo del deber de denuncia (24 horas)",
    "svg": null,
    "algoTitle": "Algoritmo de Certificación de Defunción: Muerte Natural vs Médico-Legal (SML)",
    "diagramRows": [
      {
        "t": "Constatación de Muerte de una Persona: Evaluación del Escenario y Causa del Deceso",
        "s": "¿La muerte se debió a causas naturales conocidas o existe sospecha de violencia / delito?",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Tipo y Circunstancia del Fallecimiento?",
        "al": "Natural vs Violenta / Dudosa",
        "ll": "MUERTE NATURAL CONOCIDA",
        "left": {
          "t": "MÉDICO CLÍNICO FIRMA CMD",
          "s": "Llenar Certificado Médico de Defunción oficial: Causa Inmediata, Intermedia y Causa Básica",
          "type": "acc"
        },
        "rl": "MUERTE VIOLENTA / SOSPECHA DELITO",
        "right": {
          "t": "¡PROHIBIDO FIRMAR CERTIFICADO!",
          "s": "Homicidio, suicidio, trauma, accidente, envenenamiento, muerte dudosa ➔ Notificar Fiscalía / SML",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "En el Llenado de la Causa Básica de Defunción (Parte I, renglón inferior):",
        "al": "¿Causa Válida vs Síntoma Prohibido?",
        "ll": "Causa Básica Válida (Etiológica)",
        "left": {
          "t": "Causa Inicial de la Cadena",
          "s": "Infarto agudo al miocardio, Adenocarcinoma gástrico, Cirrosis hepática, Neumonía bacteriana",
          "type": "acc"
        },
        "rl": "Término Inespecífico / Mecanismo",
        "right": {
          "t": "¡ERROR GRAVE EN EUNACOM!",
          "s": "PROHIBIDO escribir: 'Paro cardiorrespiratorio', 'Falla multiorgánica' o 'Paro cardíaco' solos",
          "type": "crit"
        }
      },
      {
        "t": "Deber de Denuncia Penal (Art. 175 Código Procesal Penal): Obligación estricta de denunciar delitos de acción pública en un plazo fatal de 24 HORAS",
        "s": "Aplica a heridas de bala, arma blanca, agresión sexual y maltrato infantil",
        "type": "acc"
      }
    ],
    "contexto": "El llenado del Certificado Médico de Defunción (CMD) y la diferenciación tajante entre una muerte natural (certificable por el médico tratante) y una muerte médico-legal (donde está legalmente prohibido firmar el certificado y se debe remitir al Servicio Médico Legal) es una de las materias de mayor relevancia práctica y médico-legal en el ejercicio profesional en Chile y en el EUNACOM. Asimismo, el plazo legal fatal de 24 horas para el Deber de Denuncia de delitos es un concepto clásico evaluado en el examen.",
    "contentSections": [
      {
        "subhead": "1. Estructura Normativa del Certificado Médico de Defunción (CMD)",
        "paragraphs": [
          "El CMD es un instrumento legal emitido por el Instituto Nacional de Estadísticas (INE) y el Registro Civil, codificado bajo normas de la OMS (CIE-10). Su objetivo primordial es registrar la causa de defunción para las estadísticas epidemiológicas nacionales.\n• Parte I: Cadena de acontecimientos patológicos que condujeron directamente a la muerte:\n  - (a) Causa Inmediata: La enfermedad, complicación o condición terminal que causó directamente la muerte (ej: Shock séptico o Hemorragia subaracnoidea).\n  - (b) Causa Intermedia: Enfermedad previa que originó o facilitó la causa inmediata (ej: Peritonitis aguda por perforación).\n  - (c) Causa Básica de Defunción: La enfermedad o lesión inicial fundamental que inició la cadena patológica que condujo a la muerte (ej: Adenocarcinoma de colon o Infarto agudo al miocardio).\n  *La Causa Básica es la que el INE tabula en las estadísticas sanitarias.*",
          "• ¡REGLAS DE ORO DEL LLENADO (EUNACOM)!:\n  1. NUNCA consignar como causa de defunción única o básica mecanismos de muerte inespecíficos o modos de morir (tales como: 'Paro cardiorrespiratorio', 'Falla multiorgánica', 'Colapso vascular', 'Paro respiratorio'). Todas las personas fallecen por paro cardiorrespiratorio, por lo que este término carece por completo de utilidad diagnóstica o epidemiológica.\n  2. Debe existir una relación fisiopatológica y lógica directa de causalidad descendente desde la causa básica (c) hasta la causa inmediata (a).\n• Parte II: Otros estados morbosos significativos que contribuyeron a la muerte pero que no formaban parte de la cadena causal directa (ej: Diabetes mellitus tipo 2, Hipertensión arterial)."
        ]
      },
      {
        "subhead": "2. ¿Cuándo un Médico Clínico NO DEBE Firmar el Certificado de Defunción?",
        "paragraphs": [
          "En los siguientes casos, el médico clínico TIENE LA PROHIBICIÓN LEGAL FORMAL de extender y firmar el Certificado Médico de Defunción, debiendo preservar el cuerpo, no modificar el sitio y notificar de inmediato a la Autoridad Policial (Carabineros/PDI) o Ministerio Público (Fiscalía) para remisión al Servicio Médico Legal (SML):\n1. Muertes Violentas: Todo deceso secundario a homicidio, suicidio, sospecha de delito, agresiones físicas, asfixias mecánicas, traumatismos, accidentes de tránsito, caídas de altura o quemaduras de cualquier tipo (incluso si la muerte por complicaciones sépticas ocurre semanas después del trauma inicial en la UCI).\n2. Muerte por Intoxicación o Envenenamiento (químico, medicamentoso o por drogas ilícitas).\n3. Muerte en Custodia Policial o Penitenciaria.\n4. Muerte Intraoperatoria o Postoperatoria Inmediata Inexplicable (con sospecha de mala praxis médica).\n5. Cadáver Hallado en Vía Pública o Domicilio sin atención médica previa y con causa de muerte indeterminada o sospechosa."
        ]
      },
      {
        "subhead": "3. Tipos de Autopsia: Clínica vs Médico-Legal (Judicial)",
        "paragraphs": [
          "• Autopsia Clínica (Hospitalaria): Se realiza en el departamento de Anatomía Patológica de un hospital en fallecidos por causas naturales conocidas. Su propósito es confirmar diagnósticos clínicos y fines docentes. Requiere autorización firmada de los familiares directos.\n• Autopsia Médico-Legal (Judicial): Se efectúa exclusivamente en el Servicio Médico Legal (SML) por mandato imperativo de un Fiscal del Ministerio Público. Es obligatoria en todas las muertes violentas o sospechosas de delito. La familia NO puede oponerse a su realización."
        ]
      },
      {
        "subhead": "4. Deber de Denuncia Penal (Art. 175 y 176 Código Procesal Penal)",
        "paragraphs": [
          "Todo médico cirujano, enfermera u odontólogo que ejerza en establecimientos públicos o privados que atienda a personas con lesiones derivadas de hechos que revistan caracteres de delito de acción pública está obligado por ley a denunciar el hecho al Ministerio Público, Carabineros o PDI.\n• Delitos Sujetos a Denuncia: Lesiones graves por arma de fuego o arma blanca, sospecha de abuso o agresión sexual, señales evidentes de maltrato infantil o violencia intrafamiliar grave, e intoxicaciones dolosas.\n• Plazo Legal Fatal: La denuncia debe realizarse dentro de un plazo perentorio de VEINTICUATRO HORAS (24 horas) desde que se tomó conocimiento del hecho. El incumplimiento de este deber legal constituye un delito de omisión sancionado en el Código Penal."
        ]
      }
    ],
    "table": {
      "title": "Muerte Natural vs Muerte Médico-Legal (SML)",
      "headers": [
        "Criterio Diferencial",
        "Muerte Natural (Certificable)",
        "Muerte Médico-Legal / Violenta (SML)"
      ],
      "rows": [
        [
          "Causa Originaria",
          "Enfermedades médicas internas conocidas",
          "Trauma, violencia, accidente, suicidio, tóxicos"
        ],
        [
          "Quién Firma el CMD",
          "Médico tratante o de cabecera que constata",
          "Exclusivamente el Médico Legista del SML"
        ],
        [
          "Lugar de la Autopsia",
          "Hospital (Anatomía Patológica) si se solicita",
          "Servicio Médico Legal (SML) por orden fiscal"
        ],
        [
          "Consentimiento Familiar",
          "Exigible para autopsia clínica",
          "NO aplica; la autopsia médico-legal es obligatoria"
        ],
        [
          "Rol del Médico Clínico",
          "Completar correctamente el CMD en el INE",
          "NO firmar certificado; llamar a Fiscalía / Carabineros"
        ]
      ]
    },
    "severityTable": {
      "title": "Ejemplo Correcto e Incorrecto de Llenado del Certificado de Defunción",
      "headers": [
        "Línea de la Parte I",
        "Ejemplo INCORRECTO (Error EUNACOM)",
        "Ejemplo CORRECTO (Causalidad Válida)"
      ],
      "rows": [
        [
          "I (a) Causa Inmediata",
          "Paro cardiorrespiratorio",
          "Shock séptico a foco abdominal"
        ],
        [
          "I (b) Causa Intermedia",
          "Falla multiorgánica",
          "Peritonitis aguda difusa purulenta"
        ],
        [
          "I (c) Causa Básica",
          "Insuficiencia respiratoria",
          "Diverticulitis aguda de colon sigmoides perforada"
        ],
        [
          "Parte II (Contribuyentes)",
          "Senilidad",
          "Diabetes mellitus tipo 2, Hipertensión arterial"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Deber de Denuncia según el Código Procesal Penal de Chile",
      "headers": [
        "Aspecto Legal",
        "Mandato Legal (Art. 175 y 176 CPP)",
        "Consecuencia del Incumplimiento"
      ],
      "rows": [
        [
          "Sujetos Obligados",
          "Médicos, enfermeras, parteras y jefes de establecimientos",
          "Sanción penal por omisión de denuncia"
        ],
        [
          "Hechos a Denunciar",
          "Lesiones por arma blanca/fuego, agresión sexual, maltrato infantil",
          "Investigación judicial por encubrimiento"
        ],
        [
          "Plazo Fatal",
          "Dentro de las 24 HORAS siguientes a la atención",
          "Multa y falta penal gravísima"
        ],
        [
          "Autoridades Receptoras",
          "Ministerio Público (Fiscalía), Carabineros de Chile o PDI",
          "Se deja constancia en la ficha clínica"
        ]
      ]
    },
    "vignette": {
      "text": "Un anciano de 82 años con antecedente de diabetes e hipertensión sufre un asalto en la vía pública, recibiendo un golpe contuso severo en el cráneo que le produce un hematoma subdural traumático. Es intervenido quirúrgicamente y derivado a la UCI, donde fallece a los 25 días del ingreso debido a una neumonía aspirativa y shock séptico. El médico residente de la UCI evalúa si debe firmar el certificado de defunción por tratarse de una muerte hospitalaria tardía.",
      "conducta": "El médico NO DEBE firmar el Certificado Médico de Defunción. Aunque el paciente falleció semanas después de shock séptico intrahospitalario, la causa básica original fue un traumatismo encéfalo-craneano violento secundario a un asalto (delito). Se trata de una muerte médico-legal, por lo que el cuerpo debe ser derivado al Servicio Médico Legal (SML) y se debe notificar inmediatamente a la Fiscalía."
    },
    "explicacion": "En medicina legal, si el evento causal básico inicial que desencadenó la cadena morbosa de acontecimientos fue de origen violento, accidental o delictual (trauma craneano en asalto), la muerte se clasifica indefectiblemente como Médico-Legal, independientemente del tiempo que haya transcurrido internado en el hospital (días o meses) o de que la causa inmediata sea médica (shock séptico o neumonía). El médico clínico tiene estrictamente prohibido emitir el certificado de defunción en estos casos.",
    "keyPoints": [
      "Causa Básica de Defunción: Enfermedad o lesión inicial fundamental que inició la cadena mortal; es la que tabula el INE.",
      "¡PROHIBIDO!: Nunca escribir 'Paro cardiorrespiratorio', 'Falla multiorgánica' o modos inespecíficos como causa única o básica.",
      "Muerte Médico-Legal: Homicidios, suicidios, accidentes, traumas, sospecha de delito e intoxicaciones; el médico NO firma el CMD.",
      "Autopsia del SML: Ordenada obligatoriamente por el Fiscal; la familia no puede oponerse; el médico legista firma el certificado.",
      "Autopsia Clínica: En muertes naturales hospitalarias con fines científicos; exige consentimiento firmado de la familia.",
      "Deber de Denuncia (Art. 175 CPP): Obligación de denunciar delitos de acción pública (arma blanca, de fuego, abuso sexual) en un plazo fatal de 24 HORAS."
    ],
    "questions": [
      {
        "stem": "Un médico clínico hospitalario certifica el fallecimiento de un paciente de 70 años con cirrosis hepática descompensada que sufrió una hemorragia digestiva masiva por rotura de várices esofágicas. ¿Cuál de las siguientes opciones describe el llenado correcto de la Causa Básica de Defunción en el Certificado Médico de Defunción oficial?",
        "options": [
          {
            "id": "A",
            "text": "Cirrosis hepática"
          },
          {
            "id": "B",
            "text": "Paro cardiorrespiratorio"
          },
          {
            "id": "C",
            "text": "Shock hipovolémico hemorrágico"
          },
          {
            "id": "D",
            "text": "Rotura de várices esofágicas"
          },
          {
            "id": "E",
            "text": "Falla hepática fulminante aguda"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Causa Básica de Defunción se define como la enfermedad o lesión inicial fundamental que desencadenó la secuencia patológica que condujo directamente a la muerte. En este caso, la cirrosis hepática fue la patología etiológica subyacente que generó la hipertensión portal, la formación de várices esofágicas (causa intermedia) y finalmente la rotura hemorrágica masiva con shock (causa inmediata). Por lo tanto, 'Cirrosis hepática' es la causa básica que debe consignarse en el renglón inferior de la Parte I.\nB) Incorrecta. El paro cardiorrespiratorio es un mecanismo inespecífico terminal formalmente prohibido como causa básica.\nC) Incorrecta. El shock hipovolémico corresponde a la causa inmediata terminal.\nD) Incorrecta. La rotura varicosa es la causa intermedia de la cadena.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.051"
      },
      {
        "stem": "Un médico de urgencias atiende a una paciente de 22 años que presenta múltiples hematomas equimóticos recientes en rostro, tórax y extremidades, además de una fractura mandibular, refiriendo espontáneamente haber sido golpeada violentamente por su cónyuge. ¿Cuál es la obligación médico-legal y el plazo máximo perentorio para realizar la denuncia según el Código Procesal Penal chileno?",
        "options": [
          {
            "id": "A",
            "text": "Realizar la denuncia formal ante el Ministerio Público, Carabineros o PDI en un plazo máximo de 24 horas."
          },
          {
            "id": "B",
            "text": "La denuncia es facultativa y sólo procede si la paciente firma un consentimiento autorizando la notificación."
          },
          {
            "id": "C",
            "text": "Realizar la denuncia en un plazo de hasta 72 horas hábiles ante el Juzgado de Familia."
          },
          {
            "id": "D",
            "text": "Derivar a la paciente a mediación vecinal comunitaria antes de dar aviso policial."
          },
          {
            "id": "E",
            "text": "Citar al cónyuge al box de atención para verificar la versión de los hechos antes de denunciar."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El artículo 175 letra b) del Código Procesal Penal establece que los médicos, cirujanos, enfermeros y demás profesionales de la salud tienen el deber ineludible de denunciar los delitos de acción pública (entre los cuales se encuentran las lesiones corporales graves en el contexto de violencia intrafamiliar) que tomaren conocimiento con ocasión del ejercicio de su profesión. El artículo 176 fija un plazo fatal estricto de VEINTICUATRO HORAS (24 horas) para efectuar la denuncia ante la Fiscalía, Carabineros o PDI.\nB) Incorrecta. El deber de denuncia es una obligación legal imperativa del médico, no supeditada a la voluntad o autorización de la víctima.\nC) Incorrecta. El plazo perentorio legal es de 24 horas, no 72 horas.\nD, E) Son conductas imprudentes que exponen a la víctima a mayor peligro y constituyen omisión de denuncia.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.052"
      }
    ]
  },
  {
    "id": "sp-14",
    "classId": "sp-14",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Bioética Clínica, Medicina Legal & Marco Regulatorio",
    "topicLabel": "21.14",
    "title": "Legislación Sanitaria Especial: Ley IVE 21.030, Código Sanitario y Licencias Médicas",
    "perfilCode": "7.01.3.054",
    "dx": "Marco Normativo Especial",
    "tx": "Procedimiento Legal",
    "seg": "COMPIN / SUSESO / MINSAL",
    "ges": "Ley 21.030 (IVE), Código Sanitario (Art. 112/113) y Ley 20.585 (Licencias Médicas)",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#101) · EUNACOM Julio 2024 (Q#23) · EUNACOM Diciembre 2023 (Q#75)",
    "frecuencia": "Muy Alta · Pregunta garantizada sobre las 3 causales de la Ley IVE, límites de la objeción de conciencia en urgencia y sanciones por licencias médicas fraudulentas",
    "svg": null,
    "algoTitle": "Algoritmo de Aplicación de la Ley IVE 21.030 y Regulación de Licencias Médicas",
    "diagramRows": [
      {
        "t": "Solicitud o Sospecha de Situación Sanitaria Regulada por Leyes Especiales",
        "s": "Ley IVE 21.030, Código Sanitario (Art. 112/113) y Régimen de Licencias Médicas (Ley 20.585)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "En Caso de Interrupción Voluntaria del Embarazo (Ley 21.030): ¿Qué Causal Aplica?",
        "al": "Las 3 Causales Legales",
        "ll": "Causal 1 y Causal 2 (Sin Límite EG)",
        "left": {
          "t": "Causal 1: Riesgo Vital Materno / Causal 2: Inviabilidad Fetal",
          "s": "C1: Riesgo vital inminente materno · C2: Inviabilidad letal extrauterina (anencefalia) · Sin límite de semanas",
          "type": "acc"
        },
        "rl": "Causal 3: Violación (Con Límite EG)",
        "right": {
          "t": "Causal 3: Violación",
          "s": "Hasta 12 semanas de gestación (ampliable hasta 14 semanas si la víctima es niña menor de 14 años)",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "¿El Médico Tratante es Objetor de Conciencia?",
        "al": "Objetor vs No Objetor",
        "ll": "Objetor de Conciencia Declarado",
        "left": {
          "t": "Deber de Derivación Inmediata",
          "s": "Manifestación previa por escrito · Obligación ineludible de reasignar y derivar INMEDIATAMENTE a médico no objetor",
          "type": "warn"
        },
        "rl": "EXCEPCIÓN: Urgencia Vital Causal 1",
        "right": {
          "t": "¡OBLIGACIÓN DE INTERVENIR!",
          "s": "Si la madre está en riesgo vital inminente y no hay otro médico disponible: NO rige objeción; DEBE operar",
          "type": "crit"
        }
      },
      {
        "t": "Licencias Médicas (Ley 20.585): El otorgamiento fraudulento o sin fundamento clínico es DELITO PENAL sancionado con presidio, multas e inhabilitación médica",
        "s": "Fiscalización estricta por COMPIN, SUSESO y Consejo de Defensa del Estado",
        "type": "acc"
      }
    ],
    "contexto": "La legislación sanitaria especial en Chile comprende marcos regulatorios de altísima trascendencia ética, clínica y penal. La Ley 21.030 despenalizó la Interrupción Voluntaria del Embarazo (IVE) en tres causales específicas, estableciendo protocolos estrictos para la objeción de conciencia y su excepción forzosa en urgencias vitales. Por su parte, la Ley 20.585 y el Código Sanitario regulan el ejercicio ético de la medicina y penalizan drásticamente el fraude en el otorgamiento de licencias médicas.",
    "contentSections": [
      {
        "subhead": "1. Ley 21.030: Interrupción Voluntaria del Embarazo en 3 Causales",
        "paragraphs": [
          "La Ley 21.030 regula la interrupción médica del embarazo exclusivamente bajo tres causales legales taxativas:\n• Causal 1: La mujer se encuentra en riesgo vital actual o inminente, de modo que la interrupción del embarazo evite un peligro para su vida.\n  - Plazo gestacional: NO tiene límite de edad gestacional.\n  - Requisitos: Diagnóstico médico del tratante y ratificación de un segundo especialista (en situaciones de extrema urgencia vital no es necesaria la ratificación previa del segundo médico).\n• Causal 2: El embrión o feto padece una patología congénita adquirida o genética, de carácter estructural o cromosómico, incompatible con la vida extrauterina independiente (ej: anencefalia, acranea, trisomía 13 severa con malformaciones letales).\n  - Plazo gestacional: NO tiene límite de edad gestacional.\n  - Requisitos: Diagnósticos concordantes y por escrito de dos médicos especialistas.",
          "• Causal 3: El embarazo es resultado de una violación, siempre que no hayan transcurrido más de doce semanas de gestación (12 semanas).\n  - Excepción etaria: Tratándose de niñas menores de catorce años de edad (< 14 años), la interrupción puede realizarse válidamente hasta las catorce semanas de gestación (14 semanas).\n  - Requisitos: Evaluación previa de un equipo de salud que constate la concurrencia de los hechos concordantes con la edad gestacional."
        ]
      },
      {
        "subhead": "2. Objeción de Conciencia y sus Límites Legales Estrictos",
        "paragraphs": [
          "• Definición: Es el derecho personalísimo de los médicos cirujanos requeridos para realizar la interrupción y del resto del personal de pabellón a abstenerse de ejecutar el procedimiento por razones éticas, morales o religiosas.\n• Requisitos de Forma: Debe manifestarse previamente, por escrito y firmada ante el director del establecimiento de salud asistencial.\n• Deber Ineludible del Objetor: El médico objetor tiene la obligación legal inmediata e inexcusable de informar a la dirección del establecimiento para la reasignación inmediata de la paciente a un médico no objetor dentro del mismo centro o derivación a otro establecimiento de la red.",
          "• ¡EXCEPCIÓN CRÍTICA DE URGENCIA (Pregunta EUNACOM)!:\n  Tratándose de la Causal 1 (riesgo vital materno), si la mujer requiere atención médica inmediata e impostergable y no existe otro médico cirujano alternativo disponible en el establecimiento, el médico objetor de conciencia TIENE LA OBLIGACIÓN LEGAL Y ÉTICA FORZOSA de intervenir y realizar la interrupción para evitar la muerte de la madre. La objeción de conciencia queda suspendida por ley ante el peligro vital inminente de la paciente."
        ]
      },
      {
        "subhead": "3. Código Sanitario: Ejercicio Profesional (Art. 112 y 113)",
        "paragraphs": [
          "• Art. 112: Exige el título oficial de médico cirujano legalmente habilitado (y revalidado / EUNACOM aprobado en caso de extranjeros) para ejercer la profesión médica en el territorio de la República.\n• Art. 113: Define el ejercicio médico legal como el diagnóstico, pronóstico y tratamiento de las enfermedades del ser humano. Consagra la exclusividad de la prescripción de fármacos éticos a médicos cirujanos, odontólogos y matronas (estas últimas exclusivamente en su ámbito gineco-obstétrico y de planificación familiar según normativa).\n• Penalización del Intrusismo: El ejercicio de la medicina por personas sin título habilitante constituye delito penal de ejercicio ilegal de la profesión."
        ]
      },
      {
        "subhead": "4. Licencias Médicas y Ley 20.585 contra el Fraude",
        "paragraphs": [
          "• Naturaleza Jurídica: La licencia médica es un acto médico y a la vez un documento legal oficial que certifica una incapacidad laboral transitoria y justifica la ausencia laboral del trabajador, dando origen al pago del Subsidio por Incapacidad Laboral (SIL).\n• Entidades Reguladoras: La COMPIN (Comisión de Medicina Preventiva e Invalidez) autoriza, reduce o rechaza las licencias; la SUSESO (Superintendencia de Seguridad Social) es la máxima instancia técnica de apelación.",
          "• Sanciones Penales por Emisión Fraudulenta (Ley 20.585):\n  - El otorgamiento de licencias médicas falsas, ideológicamente falsas o sin que medie una evaluación clínica real o patología justificada constituye un delito penal severamente castigado.\n  - Sanciones aplicables a médicos: Penas de presidio menor (cárcel efectiva), multas económicas gravosas a beneficio fiscal (de 50 a 500 UTM) e inhabilitación temporal o perpetua para emitir licencias médicas y ejercer cargos en el sistema público de salud."
        ]
      }
    ],
    "table": {
      "title": "Las Tres Causales de la Ley IVE 21.030 en Chile",
      "headers": [
        "Causal Legal",
        "Definición Médica",
        "Límite de Edad Gestacional",
        "Requisitos de Acreditación"
      ],
      "rows": [
        [
          "Causal 1: Riesgo Vital",
          "Riesgo vital materno actual o inminente",
          "SIN límite de edad gestacional",
          "Médico tratante + 1 especialista (salvo urgencia vital)"
        ],
        [
          "Causal 2: Inviabilidad Fetal",
          "Patología congénita incompatible con la vida extrauterina",
          "SIN límite de edad gestacional",
          "Diagnóstico concordante de 2 médicos especialistas"
        ],
        [
          "Causal 3: Violación",
          "Embarazo resultante de agresión sexual",
          "Hasta 12 semanas (14 semanas en < 14 años)",
          "Evaluación de equipo psicosocial de salud"
        ]
      ]
    },
    "vignette": {
      "text": "En un hospital provincial de baja complejidad, una gestante de 16 semanas ingresa a la urgencia obstétrica con un shock hipovolémico severo por rotura uterina espontánea y hemoperitoneo masivo con riesgo de muerte inminente (Causal 1 de la Ley IVE). El único médico gineco-obstetra de turno en el hospital está inscrito en el registro oficial como Objetor de Conciencia para la Ley IVE. El médico manifiesta que por sus convicciones no realizará la intervención y solicita el traslado de la paciente a un hospital regional ubicado a 3 horas de distancia.",
      "conducta": "La conducta del médico es legalmente improcedente y negligente. La Ley 21.030 establece expresamente que, en la Causal 1, si la paciente requiere atención médica inmediata por riesgo vital inminente y no hay otro médico disponible en el centro asistencial, el médico objetor tiene la obligación legal y ética forzosa de intervenir y realizar la interrupción para salvar la vida de la madre."
    },
    "explicacion": "La Ley 21.030 consagra que el derecho a la objeción de conciencia no es absoluto y cesa de manera obligatoria cuando se trata de la Causal 1 (riesgo vital materno actual o inminente) y no existe un colega no objetor disponible para asumir la atención en el momento. En este escenario extremo, el deber de preservar la vida de la mujer prima por mandato de la ley sobre la objeción personal del profesional.",
    "keyPoints": [
      "Ley IVE 21.030: 3 Causales taxativas (Riesgo vital, Inviabilidad fetal y Violación).",
      "Límites gestacionales IVE: Causal 1 y 2 NO tienen límite gestacional; Causal 3 tiene tope de 12 semanas (ampliable a 14 semanas en menores de 14 años).",
      "Objeción de Conciencia: Debe formularse previamente por escrito; obliga a la derivación inmediata a médico no objetor.",
      "Excepción de Urgencia Vital: En Causal 1 con riesgo de muerte materna inmediata y sin médico de reemplazo, el médico objetor DEBE intervenir forzosamente.",
      "Código Sanitario (Art. 112/113): Reserva la prescripción diagnóstica y terapéutica exclusiva a médicos cirujanos (y odontólogos/matronas en su campo).",
      "Ley 20.585 (Licencias Médicas): Penaliza la emisión fraudulenta de licencias médicas con penas de cárcel (presidio), multas millonarias e inhabilitación perpetua."
    ],
    "questions": [
      {
        "stem": "Una niña de 13 años cursa un embarazo de 13 semanas y 4 días como resultado de una agresión sexual por parte de un familiar. La menor y su representante legal solicitan acogerse a la Ley 21.030 para la interrupción voluntaria del embarazo bajo la Causal 3 (violación). ¿Es legalmente procedente acceder a la interrupción médica en este caso?",
        "options": [
          {
            "id": "A",
            "text": "Sí, porque en niñas menores de 14 años el límite gestacional legal para la causal de violación se extiende hasta las 14 semanas de gestación."
          },
          {
            "id": "B",
            "text": "No, porque el límite máximo absoluto e improrrogable para la causal de violación es de 12 semanas en todos los casos."
          },
          {
            "id": "C",
            "text": "No, porque la causal de violación requiere sentencia judicial condenatoria previa del agresor."
          },
          {
            "id": "D",
            "text": "Sí, siempre que se obtenga una autorización expresa del Tribunal de Familia antes de las 16 semanas."
          },
          {
            "id": "E",
            "text": "No, porque en menores de edad sólo aplican las causales de riesgo vital e inviabilidad fetal."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Ley 21.030 establece que, para la Causal 3 (embarazo por violación), el plazo máximo de gestación para realizar la interrupción médica es de hasta 12 semanas; sin embargo, la propia ley establece una excepción explícita que amplía el plazo hasta las catorce semanas de gestación (14 semanas) tratándose de niñas menores de catorce años de edad. Al tener la paciente 13 años y cursar 13 semanas y 4 días, se encuentra dentro del marco legalmente permitido.\nB) Incorrecta. La regla general es 12 semanas, pero la ley contempla la prórroga a 14 semanas en menores de 14 años.\nC) Incorrecta. No se exige denuncia penal ni sentencia judicial previa para la atención de salud bajo causal 3.\nD, E) No concuerdan con los preceptos de la Ley 21.030.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.054"
      },
      {
        "stem": "¿Cuál de las siguientes afirmaciones describe con precisión las consecuencias legales contempladas en la Ley 20.585 para un médico cirujano que es condenado judicialmente por emitir reiteradamente licencias médicas falsas sin fundamento clínico a cambio de remuneración económica?",
        "options": [
          {
            "id": "A",
            "text": "Sanciones penales que incluyen penas de presidio menor, multas a beneficio fiscal de hasta 500 UTM e inhabilitación temporal o perpetua para emitir licencias médicas."
          },
          {
            "id": "B",
            "text": "Únicamente una amonestación ética por parte del Colegio Médico de Chile sin consecuencias judiciales."
          },
          {
            "id": "C",
            "text": "Reembolso del 10% del subsidio pagado por FONASA sin registro en los antecedentes penales."
          },
          {
            "id": "D",
            "text": "Suspensión de la colegiatura médica por un período máximo de 30 días continuos."
          },
          {
            "id": "E",
            "text": "Obligación de realizar turnos de urgencia no remunerados en un hospital público durante 6 meses."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Ley 20.585 otorga facultades fiscalizadoras estrictas a la COMPIN y SUSESO, y tipifica penalmente la emisión fraudulenta de licencias médicas. Las sanciones judiciales contemplan penas de presidio menor en sus grados medio a máximo (cárcel efectiva), multas económicas gravosas a beneficio fiscal (de 50 a 500 UTM) e inhabilitación para otorgar licencias médicas y ejercer cargos públicos por hasta 3 a 5 años, pudiendo llegar a la inhabilitación perpetua en casos de reincidencia o crimen organizado.\nB, C, D, E) Subestiman drásticamente la gravedad punitiva de la ley, la cual tipifica el hecho como delito penal de estafa y falsedad ideológica contra el fisco.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.054"
      }
    ]
  }
];

const bloque3Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowSaludPublica(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque3Classes };
