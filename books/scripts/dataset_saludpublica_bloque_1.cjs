/**
 * TOMO 21: SALUD PÚBLICA, EPIDEMIOLOGÍA & BIOÉTICA · BLOQUE 1
 * Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica (21.1 a 21.5)
 */

const { flowSaludPublica } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "sp-01",
    "classId": "sp-01",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica",
    "topicLabel": "21.1",
    "title": "Sistema de Salud Chileno: FONASA, ISAPRES y Organización de la Red Asistencial",
    "perfilCode": "7.01.3.036",
    "dx": "Estructura Sanitaria",
    "tx": "Gestión Asistencial",
    "seg": "Red Pública / Privada",
    "ges": "Marco Regulador Sanitario · Ley 19.937 de Autoridad Sanitaria y Gestión",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#88) · EUNACOM Julio 2024 (Q#12) · EUNACOM Diciembre 2023 (Q#56)",
    "frecuencia": "Muy Alta · Pregunta garantizada en 100% de los exámenes EUNACOM sobre Tramos FONASA, Copago Cero y Niveles de Atención",
    "svg": null,
    "algoTitle": "Algoritmo de Clasificación de Beneficiarios FONASA y Derivación en la Red Asistencial",
    "diagramRows": [
      {
        "t": "Usuario Consulta en el Sistema de Salud Chileno (FONASA vs ISAPRE / Fuerzas Armadas)",
        "s": "Determinación del Seguro de Salud y Vía de Entrada a la Red Asistencial",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Tipo de Cobertura y Afiliación del Paciente?",
        "al": "FONASA vs ISAPRE",
        "ll": "FONASA (Fondo Nacional de Salud)",
        "left": {
          "t": "FONASA: Red Pública y Copago Cero",
          "s": "7% de cotización obligatoria · Clasificación en Tramos A, B, C o D según ingreso",
          "type": "acc"
        },
        "rl": "ISAPRE (Instituciones de Salud Previsional)",
        "right": {
          "t": "ISAPRE: Seguros Privados",
          "s": "Contrato individual con planes de salud · Prestadores en convenio · Libre elección",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Para Usuarios FONASA: ¿Elección de Modalidad de Atención?",
        "al": "MAI vs MLE",
        "ll": "Modalidad de Atención Institucional (MAI)",
        "left": {
          "t": "MAI: 100% Gratuidad (Copago Cero)",
          "s": "Tramos A, B, C y D en Red Pública (CESFAM, Hospital) tienen gratuidad total desde 2022",
          "type": "acc"
        },
        "rl": "Modalidad Libre Elección (MLE)",
        "right": {
          "t": "MLE: Bonos de Atención",
          "s": "Solo Tramos B, C y D pueden comprar bonos en clínicas y consultas privadas en convenio",
          "type": "warn"
        }
      },
      {
        "t": "Niveles de Atención de la Red Asistencial: Atención Primaria (Puerta de Entrada Obligatoria MAI) ➔ Hospitales de Referencia",
        "s": "Atención Primaria resuelve el 85-90% de la demanda · Red Secundaria y Terciaria mediante Interconsulta oficial",
        "type": "acc"
      }
    ],
    "contexto": "El sistema de salud chileno es un sistema mixto y dual, compuesto por un subsistema público (FONASA, que cubre al ~80% de la población) y un subsistema privado (ISAPRES, ~15%, además de las FFAA y de Orden). El EUNACOM evalúa con alta frecuencia la clasificación de tramos de FONASA, el beneficio de Copago Cero en la Modalidad de Atención Institucional (MAI), las restricciones de la Modalidad Libre Elección (MLE), y la organización funcional de la red asistencial desde la Atención Primaria (CESFAM) hasta los hospitales de alta complejidad.",
    "contentSections": [
      {
        "subhead": "1. Estructura y Financiamiento del Sistema de Salud Chileno",
        "paragraphs": [
          "El Ministerio de Salud (MINSAL) ejerce el rol rector, normativo y regulador a través de dos subsecretarías: la Subsecretaría de Salud Pública (vigilancia epidemiológica, regulación ambiental y SEREMI de Salud) y la Subsecretaría de Redes Asistenciales (gestión y articulación de los 29 Servicios de Salud del país). La fiscalización técnica y financiera de FONASA, ISAPRES y prestadores acreditados corresponde a la Superintendencia de Salud.",
          "El financiamiento del sistema se basa en la cotización legal obligatoria para salud (7% de la remuneración imponible de los trabajadores dependientes, independientes y pensionados), complementado por aportes fiscales generales del Estado (especialmente para subsidiar a los tramos A y B de FONASA y la infraestructura pública)."
        ]
      },
      {
        "subhead": "2. Tramos de FONASA y Modalidades de Atención",
        "paragraphs": [
          "FONASA clasifica a sus asegurados en cuatro tramos según ingreso económico mensual del grupo familiar:\n• Tramo A: Personas carentes de recursos, indigentes y causantes de subsidio familiar. Tienen cobertura 100% gratuita en la Red Pública (MAI). No pueden acceder a la Modalidad Libre Elección (MLE) mediante bonos.\n• Tramo B: Personas con ingresos imponibles menores o iguales al ingreso mínimo mensual. Cobertura 100% gratuita en MAI. Pueden acceder a MLE.\n• Tramo C: Ingresos superiores a 1 ingreso mínimo y hasta 1,46 ingresos mínimos (o más si tienen 3 o más cargas familiares). Cobertura en MAI con gratuidad total (Copago Cero). Tienen acceso a MLE.\n• Tramo D: Ingresos superiores a 1,46 ingresos mínimos. Cobertura en MAI con gratuidad total (Copago Cero). Tienen acceso a MLE.",
          "Modalidad de Atención Institucional (MAI): Se otorga en los establecimientos de la Red Pública de Salud (CESFAM, SAPU, Hospitales Públicos). Desde septiembre de 2022, el programa 'Copago Cero' eliminó los copagos del 10% (Tramo C) y 20% (Tramo D), consagrando la gratuidad universal (100%) para todos los tramos de FONASA (A, B, C y D) dentro de la red pública.",
          "Modalidad Libre Elección (MLE): Permite atenderse con médicos o prestadores privados en convenio con FONASA mediante el pago de un bono (nivel 1, 2 o 3 según arancel). Solo está disponible para los tramos B, C y D. El Tramo A no tiene derecho a MLE."
        ]
      },
      {
        "subhead": "3. Niveles de Atención y Articulación de la Red Asistencial",
        "paragraphs": [
          "La Red Asistencial se organiza en tres niveles de atención complementarios basados en el principio de referencia y contrarreferencia:\n• Nivel Primario (APS): Centros de Salud Familiar (CESFAM), Centros Comunitarios de Salud Familiar (CECOSF), Postas de Salud Rural (PSR), Servicios de Atención Primaria de Urgencia (SAPU) y Servicios de Alta Resolutividad (SAR). Resuelve entre el 80% y 90% de los problemas de salud de la población, con énfasis en promoción, prevención, control de crónicos y tamizaje poblacional.\n• Nivel Secundario: Centros de Referencia de Salud (CRS), Centros de Diagnóstico y Tratamiento (CDT) y Consultorios Adosados de Especialidades (CAE). Brinda atención médica especializada ambulatoria y procedimientos diagnósticos complejos de derivación.\n• Nivel Terciario: Hospitales de Alta Complejidad e Institutos Especializados (p. ej., Instituto Nacional del Cáncer, Instituto de Neurocirugía). Provee hospitalización, camas críticas (UPC: UCI/UTI), cirugía mayor y subespecialidades complejas."
        ]
      }
    ],
    "table": {
      "title": "Tramos de FONASA: Clasificación, Ingresos y Derechos de Modalidad",
      "headers": [
        "Tramo",
        "Nivel de Ingresos Mensuales",
        "Copago Red Pública (MAI)",
        "Derecho a Libre Elección (MLE)"
      ],
      "rows": [
        [
          "Tramo A",
          "Carentes de recursos, indigentes, PRAIS",
          "0% (Gratuito)",
          "NO tiene derecho a MLE"
        ],
        [
          "Tramo B",
          "≤ 1 Ingreso Mínimo Mensual",
          "0% (Gratuito)",
          "SÍ (Bonos niveles 1, 2 y 3)"
        ],
        [
          "Tramo C",
          "> 1 y ≤ 1,46 Ingresos Mínimos (o >3 cargas)",
          "0% (Copago Cero vigente)",
          "SÍ (Bonos niveles 1, 2 y 3)"
        ],
        [
          "Tramo D",
          "> 1,46 Ingresos Mínimos",
          "0% (Copago Cero vigente)",
          "SÍ (Bonos niveles 1, 2 y 3)"
        ]
      ]
    },
    "severityTable": {
      "title": "Niveles de Atención en la Red Asistencial Pública Chilena",
      "headers": [
        "Nivel",
        "Dispositivos Asistenciales",
        "Complejidad y Capacidad Resolutiva",
        "Vía de Ingreso / Acceso"
      ],
      "rows": [
        [
          "Primario (APS)",
          "CESFAM, CECOSF, PSR, SAPU, SAR",
          "Baja complejidad, alta cobertura (85-90% resolución); biopsicosocial",
          "Inscripción per cápita territorial; puerta de entrada"
        ],
        [
          "Secundario",
          "CDT, CRS, CAE en hospitales medianos",
          "Ambulatorio especializado; procedimientos y apoyo diagnóstico",
          "Interconsulta oficial desde APS con pertinencia"
        ],
        [
          "Terciario",
          "Hospitales Tipo 1, Institutos de Especialidad",
          "Alta complejidad médica y quirúrgica; camas críticas, trasplantes",
          "Derivación desde nivel secundario o urgencias hospitalarias"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Dispositivos de Urgencia en Atención Primaria: SAPU vs SAR",
      "headers": [
        "Dispositivo",
        "Horario y Complejidad",
        "Capacidad Diagnóstica",
        "Resolutividad y Criterio de Uso"
      ],
      "rows": [
        [
          "SAPU",
          "Adosado a CESFAM; tardes, noches y festivos",
          "Clínica básica, ECG, laboratorio rápido básico",
          "Urgencias C3, C4 y C5; estabilización inicial de C1/C2 para SAMU"
        ],
        [
          "SAR",
          "24/7 o extendido; mayor resolutividad",
          "Radiografía digital osteopulmonar, laboratorio in situ (troponina, dímero D)",
          "Resuelve patología aguda que evita hospitalización; telemedicina"
        ]
      ]
    },
    "vignette": {
      "text": "Un hombre de 62 años, jubilado, con una pensión de $680.000 mensuales (Tramo D de FONASA), consulta en el CESFAM de su comuna por lumbago mecánico. El médico general le indica reposo, tratamiento farmacológico y le solicita una radiografía de columna lumbosacra en el hospital del área. El paciente manifiesta preocupación económica, preguntando cuánto deberá pagar por la atención médica y por los exámenes solicitados en la red pública.",
      "conducta": "Se le informa al paciente que, en virtud del programa Copago Cero vigente en FONASA, todas las atenciones médicas, exámenes de laboratorio, procedimientos radiológicos y hospitalizaciones que se realicen en los establecimientos de la Red Pública de Salud (Modalidad de Atención Institucional - MAI) son 100% gratuitos para todos los usuarios de FONASA (Tramos A, B, C y D), por lo que su costo final es $0."
    },
    "explicacion": "Desde el 1 de septiembre de 2022, el Estado chileno implementó la gratuidad universal en la Modalidad de Atención Institucional (MAI) de FONASA mediante la política de 'Copago Cero'. Anteriormente, los afiliados a FONASA en Tramo C debían pagar un 10% de copago y los de Tramo D un 20% del arancel en hospitales y centros secundarios. Actualmente, los cuatro tramos (A, B, C y D) tienen 0% de copago en toda la Red Pública Asistencial. La única instancia en la que los afiliados B, C y D deben copagar es si deciden voluntariamente atenderse en el sector privado a través de la Modalidad Libre Elección (MLE) comprando bonos.",
    "keyPoints": [
      "FONASA Tramo A: Personas indigentes o sin ingresos; atención 100% gratuita en MAI; NO tienen acceso a Modalidad Libre Elección (MLE).",
      "Copago Cero (desde 2022): Los usuarios FONASA de todos los tramos (A, B, C y D) tienen gratuidad total (0% de copago) en toda la Red Pública (MAI).",
      "Modalidad Libre Elección (MLE): Solo disponible para Tramos B, C y D mediante la compra de bonos en prestadores privados con convenio.",
      "Atención Primaria en Salud (APS): Puerta de entrada regular obligatoria a la red pública; resuelve entre el 85% y 90% de las consultas.",
      "SAPU vs SAR: El SAR dispone de radiología digital osteopulmonar y laboratorio de respuesta rápida (troponinas, hemograma), permitiendo mayor resolutividad ambulatoria que el SAPU.",
      "Superintendencia de Salud: Ente autónomo que supervigila y fiscaliza a FONASA, ISAPRES y prestadores institucionales acreditados."
    ],
    "questions": [
      {
        "stem": "Un paciente de 54 años, afiliado a FONASA Tramo A, consulta en un Centro de Salud Familiar (CESFAM) solicitando que se le extienda una orden para comprar un bono de atención de consulta médica para traumatología en una clínica privada. ¿Cuál es la respuesta correcta de acuerdo con la legislación sanitaria vigente?",
        "options": [
          {
            "id": "A",
            "text": "Los afiliados a FONASA Tramo A no tienen derecho a la Modalidad Libre Elección mediante bonos, por lo que debe ser derivado por interconsulta en la Red Pública Asistencial."
          },
          {
            "id": "B",
            "text": "Puede comprar bonos MLE siempre que cuente con una orden emitida por un médico de atención primaria con vigencia máxima de 30 días."
          },
          {
            "id": "C",
            "text": "El paciente puede acceder a la Modalidad Libre Elección pagando el arancel de Nivel 3 de FONASA con subsidio del 50%."
          },
          {
            "id": "D",
            "text": "Debe solicitar un certificado de indigencia en la municipalidad para que FONASA autorice el bono en la clínica privada."
          },
          {
            "id": "E",
            "text": "El Tramo A puede atenderse libremente en cualquier prestador privado y solicitar posteriormente el reembolso total en las sucursales de FONASA."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La legislación del Fondo Nacional de Salud establece taxativamente que los afiliados clasificados en el Tramo A (personas carentes de recursos, indigentes y beneficiarios de subsidios asistenciales) sólo tienen acceso a la Modalidad de Atención Institucional (MAI) en los establecimientos de la Red Pública, sin costo alguno. No tienen derecho a utilizar la Modalidad Libre Elección (MLE) mediante bonos en el sector privado. Toda derivación especializada debe tramitarse por la red pública vía interconsulta.\nB) Incorrecta. La orden médica no habilita a los usuarios de Tramo A para adquirir bonos MLE.\nC) Incorrecta. El tramo A carece por completo de acceso a aranceles MLE.\nD) Incorrecta. El certificado de indigencia acredita su condición para Tramo A, lo que confirma su exclusión de la libre elección privada.\nE) Incorrecta. No existe mecanismo de reembolso para atenciones privadas en el Tramo A.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.036"
      },
      {
        "stem": "Una paciente de 48 años con empleo formal e ingresos imponibles equivalentes a 2,5 ingresos mínimos mensuales (FONASA Tramo D) requiere ser hospitalizada para una colecistectomía laparoscópica electiva en el hospital público de su red asistencial. Pregunta en admisión sobre el porcentaje de copago que le corresponderá abonar al alta. ¿Cuál es la respuesta correcta?",
        "options": [
          {
            "id": "A",
            "text": "0%, debido a la implementación del programa Copago Cero en la Modalidad de Atención Institucional para todos los tramos de FONASA."
          },
          {
            "id": "B",
            "text": "20% del valor total de la cuenta hospitalaria según el arancel de referencia de FONASA."
          },
          {
            "id": "C",
            "text": "10% del costo total de la intervención quirúrgica y días de cama."
          },
          {
            "id": "D",
            "text": "50% del valor de los insumos y prótesis laparoscópicas utilizadas."
          },
          {
            "id": "E",
            "text": "Deberá pagar un deducible fijo equivalente a 1 ingreso mínimo mensual antes de recibir el alta médica."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. A partir de septiembre de 2022, el programa gubernamental 'Copago Cero' eliminó el copago del 10% (Tramo C) y del 20% (Tramo D) para todas las atenciones recibidas en la Modalidad de Atención Institucional (MAI), es decir, en la Red Pública de Salud. Actualmente, todos los usuarios de FONASA (A, B, C y D) tienen 0% de copago (atención 100% gratuita) en hospitales públicos y CESFAM.\nB) Incorrecta. El copago del 20% para el Tramo D fue formalmente derogado en la red pública por el Decreto de Copago Cero.\nC) Incorrecta. El 10% correspondía al antiguo copago del Tramo C.\nD) Incorrecta. Los insumos quirúrgicos están totalmente cubiertos dentro de la gratuidad institucional.\nE) Incorrecta. En la red institucional de FONASA no existe cobro de deducible para prestaciones convencionales.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.036"
      }
    ]
  },
  {
    "id": "sp-02",
    "classId": "sp-02",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica",
    "topicLabel": "21.2",
    "title": "Régimen de Garantías Explícitas en Salud (GES / AUGE): Las 4 Garantías Legales y Reclamos",
    "perfilCode": "7.01.3.040",
    "dx": "Criterios de Inclusión GES",
    "tx": "Canastas de Prestaciones",
    "seg": "Superintendencia de Salud",
    "ges": "Marco Legal Ley 19.966 del Régimen de Garantías Explícitas en Salud",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#89) · EUNACOM Julio 2024 (Q#14) · EUNACOM Diciembre 2023 (Q#58)",
    "frecuencia": "Máxima Prioridad · Evalúa las 4 garantías, el Formulario de Notificación GES y el plazo perentorio de reclamo por incumplimiento",
    "svg": null,
    "algoTitle": "Algoritmo de Notificación, Activación y Reclamo por Incumplimiento de Garantía GES",
    "diagramRows": [
      {
        "t": "Médico Confirma Sospecha o Diagnóstico de Problema de Salud GES (Decreto 87 Problemas)",
        "s": "Obligación legal INELUDIBLE: Notificar al paciente por escrito con Formulario Oficial de Constancia GES",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Qué Garantías Legales se activan automáticamente?",
        "al": "Las 4 Garantías Legales",
        "ll": "Acceso y Oportunidad",
        "left": {
          "t": "Acceso y Oportunidad (Plazos)",
          "s": "Derecho irrenunciable a recibir atención · Plazos máximos legales definidos por Decreto para dx, tto y seguimiento",
          "type": "acc"
        },
        "rl": "Protección Financiera y Calidad",
        "right": {
          "t": "Financiera (Copagos) y Calidad",
          "s": "Copago máx 20% (0% en FONASA) con Deducible Máximo Anual · Prestadores Individuales y Acreditados",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Ocurrió Incumplimiento de Plazo Legal (Garantía de Oportunidad Vencida)?",
        "al": "Cumplido vs Vencido",
        "ll": "Atención Oportuna dentro de Plazo",
        "left": {
          "t": "Tratamiento y Seguimiento Conforme",
          "s": "Prestación ejecutada según Guía Clínica Oficial MINSAL y canasta regulada",
          "type": "acc"
        },
        "rl": "Plazo Máximo Legal Vencido",
        "right": {
          "t": "RECLAMO ANTE FONASA / ISAPRE",
          "s": "Reclamo formal del paciente · Asegurador TIENE 48 HORAS para designar 2.° Prestador",
          "type": "crit"
        }
      },
      {
        "t": "Segundo Prestador Designado debe otorgar la atención en máximo 10 o 30 días corridos; si incumple, interviene Superintendencia de Salud",
        "s": "La Superintendencia instruye tercer prestador en 48 horas sin costo adicional para el asegurado",
        "type": "warn"
      }
    ],
    "contexto": "La Ley 19.966 regula el Régimen de Garantías Explícitas en Salud (GES / AUGE), un pilar fundamental de la política sanitaria chilena de exigibilidad legal obligatoria tanto para FONASA como para las ISAPRES. Todo médico que ejerza en Chile, público o privado, tiene la obligación legal de emitir el Formulario de Constancia de Información al Paciente GES ante toda sospecha o confirmación diagnóstica de los 87 problemas de salud vigentes. El EUNACOM examina rigurosamente las 4 garantías, los deducibles de protección financiera y la vía legal de reclamo ante incumplimiento de oportunidad.",
    "contentSections": [
      {
        "subhead": "1. Las Cuatro Garantías Explícitas Legales",
        "paragraphs": [
          "El régimen GES consagra cuatro garantías de exigibilidad legal ante la ley y tribunales:\n1. Garantía de Acceso: Obligación de FONASA y las ISAPRES de asegurar las prestaciones médicas de salud a todo beneficiario que cumpla con los criterios de edad, etapa clínica o condición de salud definidos en los decretos del régimen para cualquiera de los 87 problemas de salud.\n2. Garantía de Oportunidad: Plazos máximos legales perentorios para el otorgamiento de las prestaciones de salud garantizadas en sus distintas fases: sospecha diagnóstica, confirmación, tratamiento oportuno y seguimiento a largo plazo.",
          "3. Garantía de Protección Financiera: Regula el monto máximo que puede copagar el afiliado por el conjunto de prestaciones cubiertas en el problema de salud, fijando un copago del 0% para afiliados de FONASA A y B (y actualmente para C y D por Copago Cero en MAI), y un coaseguro máximo del 20% del valor de la canasta arancelada para cotizantes de ISAPRES o prestadores privados.\n• Deducible Máximo Anual en ISAPRES: Se establece un deducible por problema de salud equivalente a 29 cotizaciones mensuales legales (o 122 UF si es menor) por evento, con un tope familiar acumulado de 43 cotizaciones (o 181 UF).\n4. Garantía de Calidad: Las prestaciones garantizadas deben ser otorgadas exclusivamente por prestadores de salud individuales debidamente inscritos en el Registro Nacional de Prestadores Individuales de la Superintendencia de Salud, y por establecimientos institucionales debidamente Acreditados en calidad y seguridad del paciente."
        ]
      },
      {
        "subhead": "2. Obligación Legal del Médico: El Formulario de Notificación GES",
        "paragraphs": [
          "Todo médico cirujano que sospeche o confirme un problema de salud incluido en las garantías GES está obligado por ley a informar formalmente al paciente de su condición de salud y de su derecho a acogerse al régimen GES, dejando constancia escrita mediante la entrega del Formulario Oficial de Constancia de Información al Paciente GES.",
          "El formulario debe ser firmado por el médico y por el paciente (o su representante). Una copia se entrega al usuario y otra se archiva en la ficha clínica. El incumplimiento de esta notificación constituye una falta grave sancionable administrativamente por la Superintendencia de Salud. El paciente es libre de aceptar atenderse por el GES o renunciar expresamente por escrito para atenderse fuera de la red GES (en cuyo caso pierde las garantías de plazo y copago regulado)."
        ]
      },
      {
        "subhead": "3. Procedimiento Legal de Reclamo por Incumplimiento de Garantía de Oportunidad",
        "paragraphs": [
          "Si vence el plazo máximo legal establecido para una prestación GES (Garantía de Oportunidad incumplida):\n1. El paciente (o su representante) debe presentar un reclamo formal por escrito ante su asegurador de salud (FONASA o su respectiva ISAPRE) dentro de los 30 días siguientes al vencimiento del plazo.",
          "2. FONASA o la ISAPRE tienen un plazo legal estricto e improrrogable de 48 horas hábiles para designar un Segundo Prestador de reemplazo (institución pública o privada en convenio).",
          "3. El Segundo Prestador designado tiene un plazo perentorio legal de hasta 10 días corridos (ampliable a 30 días en prestaciones electivas complejas) para otorgar la prestación retrasada.",
          "4. Si el asegurador no designa el segundo prestador en 48 horas, o si el segundo prestador incumple el plazo adicional, el paciente debe acudir a la Superintendencia de Salud. La Superintendencia designará un Tercer Prestador en el plazo perentorio de 48 horas hábiles, con cargo financiero directo al asegurador incumplidor."
        ]
      }
    ],
    "table": {
      "title": "Las 4 Garantías Legales del Régimen GES (Ley 19.966)",
      "headers": [
        "Garantía",
        "Definición Legal",
        "Mecanismo de Exigibilidad",
        "Consecuencia de Incumplimiento"
      ],
      "rows": [
        [
          "Acceso",
          "Derecho a recibir atención si cumple criterios de inclusión",
          "Ingreso en prestador de la Red GES oficial",
          "Reclamo y obligatoriedad de ingreso forzoso"
        ],
        [
          "Oportunidad",
          "Plazo máximo para diagnóstico, tratamiento y seguimiento",
          "Cronograma estricto en Guías Clínicas GES",
          "Designación de 2.° prestador en 48 h; luego Superintendencia"
        ],
        [
          "Protección Financiera",
          "Copago máximo 20% (0% en FONASA) y Deducible tope",
          "Mecanismo de pago por canasta y deducible anual",
          "Reembolso inmediato de cualquier cobro improcedente"
        ],
        [
          "Calidad",
          "Atención por profesionales y centros acreditados",
          "Superintendencia de Salud (Registro de Prestadores)",
          "Invalidez legal de la prestación y sumario sanitario"
        ]
      ]
    },
    "severityTable": {
      "title": "Flujo Cronológico del Reclamo por Garantía de Oportunidad Vencida",
      "headers": [
        "Hito del Proceso",
        "Actor Responsable",
        "Plazo Legal Establecido",
        "Acción Mandatada"
      ],
      "rows": [
        [
          "1. Vencimiento del Plazo",
          "Médico / Red Prestadora",
          "Día 0 de vencimiento",
          "Se genera causal de reclamo por oportunidad"
        ],
        [
          "2. Ingreso de Reclamo",
          "Paciente o familiar",
          "Dentro de 30 días de vencido",
          "Presentación escrita ante FONASA o ISAPRE"
        ],
        [
          "3. Designación de Reemplazo",
          "FONASA / ISAPRE",
          "Máximo 48 horas hábiles",
          "Designación obligatoria de un Segundo Prestador"
        ],
        [
          "4. Ejecución de Prestación",
          "Segundo Prestador",
          "10 días corridos (máx 30 días)",
          "Otorgar la atención clínica de forma preferente"
        ],
        [
          "5. Fallo del 2.° Prestador",
          "Superintendencia de Salud",
          "48 horas para Tercer Prestador",
          "Designación directa del prestador más idóneo a costo del seguro"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Formulario de Constancia de Información al Paciente GES: Aspectos Médicos Clave",
      "headers": [
        "Elemento del Formulario",
        "Requisito Normativo",
        "Relevancia Médico-Legal",
        "Impacto en el Paciente"
      ],
      "rows": [
        [
          "Identificación del Problema",
          "Selección exacta del problema dentro de los 87",
          "Define la canasta y el plazo aplicable",
          "Garantiza cobertura técnica adecuada"
        ],
        [
          "Firma del Médico Tratante",
          "Firma y timbre de médico cirujano habilitado",
          "Deber ético y legal ineludible",
          "Respaldo en caso de auditoría sanitaria"
        ],
        [
          "Firma o Huella del Paciente",
          "Aceptación o rechazo expreso del régimen",
          "Prueba de consentimiento informado del derecho",
          "Activa el seguimiento en plataforma GES"
        ],
        [
          "Copia para Ficha Clínica",
          "Archivo físico o digital obligatorio",
          "Medio de prueba ante fiscalización de Superintendencia",
          "Permite trazabilidad del proceso"
        ]
      ]
    },
    "vignette": {
      "text": "Una paciente de 58 años, afiliada a una ISAPRE, es diagnosticada con colelitiasis sintomática ecográficamente confirmada en una clínica privada. El problema de salud 'Colecistectomía preventiva en adultos de 35 a 49 años' no le aplica por edad, pero la paciente pregunta si su problema tiene GES. El médico le aclara que por su edad (58 años) no cumple el criterio etario del GES para colecistectomía preventiva (restringido a personas de 35 a 49 años). La paciente consulta cuál es la garantía legal que no se está cumpliendo en su caso.",
      "conducta": "Se le explica que la situación no constituye un incumplimiento de garantías, sino que no cumple con el criterio de inclusión de la Garantía de Acceso, la cual exige por decreto supremo que el paciente tenga entre 35 y 49 años para acceder al GES de colecistectomía preventiva. Su resolución quirúrgica deberá canalizarse a través de su plan de salud complementario de libre elección en su ISAPRE."
    },
    "explicacion": "La Garantía de Acceso exige que el paciente cumpla estrictamente con las condiciones clínicas y de edad establecidas en el Decreto de Garantías Explícitas. En el caso de la colecistectomía preventiva por colelitiasis (Problema GES N.° 25), el acceso está garantizado por ley exclusivamente para personas de 35 a 49 años de edad. Una persona de 58 años no tiene derecho al régimen GES para esta patología, sin que ello constituya vulneración legal, debiendo resolverse a través de la cobertura general de su seguro de salud.",
    "keyPoints": [
      "Las 4 Garantías GES son: Acceso, Oportunidad, Protección Financiera y Calidad. Tienen rango de exigibilidad legal directa.",
      "Todo médico cirujano (público o privado) tiene la obligación legal de emitir el Formulario de Constancia GES ante sospecha o confirmación de un problema cubierto.",
      "Si se vence la Garantía de Oportunidad, el paciente reclama ante su asegurador (FONASA o ISAPRE), el cual tiene 48 horas hábiles para designar un Segundo Prestador.",
      "El Segundo Prestador tiene un plazo legal de 10 días corridos para otorgar la prestación requerida.",
      "Si el asegurador o el segundo prestador no responden en los plazos, el paciente acude a la Superintendencia de Salud, que designa un prestador en 48 horas.",
      "Protección Financiera en ISAPRE: Copago máximo 20% con deducible máximo anual de 29 cotizaciones legales o 122 UF por evento."
    ],
    "questions": [
      {
        "stem": "Un paciente de 64 años con diagnóstico confirmado de artrosis de cadera con indicación de endoprótesis total (Problema GES N.° 37) tiene su plazo legal de tratamiento quirúrgico vencido por más de 15 días en el hospital público correspondiente. ¿Cuál es la conducta correcta que debe seguir el paciente de acuerdo con el marco regulatorio del GES?",
        "options": [
          {
            "id": "A",
            "text": "Presentar un reclamo formal por incumplimiento de Garantía de Oportunidad ante FONASA, institución que dispondrá de 48 horas para designar un segundo prestador."
          },
          {
            "id": "B",
            "text": "Acudir directamente a un tribunal civil para interponer un recurso de protección en contra del hospital tratante."
          },
          {
            "id": "C",
            "text": "Operarse en una clínica privada de forma autónoma y exigir el reembolso del 100% de la cuenta a la dirección del hospital."
          },
          {
            "id": "D",
            "text": "Ingresar una solicitud de mediación prejudicial ante el Consejo de Defensa del Estado con plazo de 6 meses."
          },
          {
            "id": "E",
            "text": "Exigir al director del hospital una compensación económica diaria por cada día de retraso de la cirugía."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Ante el vencimiento del plazo máximo legal establecido en la Garantía de Oportunidad de una prestación GES, la ley 19.966 establece que el paciente debe ingresar un reclamo formal ante su asegurador (FONASA o la ISAPRE respectiva). El asegurador tiene la obligación perentoria de designar un Segundo Prestador en un plazo máximo de 48 horas hábiles, el cual deberá otorgar la prestación médica dentro de los 10 días corridos subsiguientes.\nB) Incorrecta. El recurso de protección no reemplaza la vía administrativa reglada por la Ley GES.\nC) Incorrecta. La atención privada autónoma sin derivación reglamentada por la red GES implica la pérdida de la garantía de protección financiera.\nD) Incorrecta. La mediación ante el CDE es para reclamos por daño corporal o mala praxis médica, no para activación de garantías GES por oportunidad vencida.\nE) Incorrecta. La ley no contempla compensaciones económicas directas en dinero por días de retraso.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.040"
      },
      {
        "stem": "¿Cuál de las siguientes situaciones describe una vulneración directa a la Garantía de Calidad contemplada en el Régimen GES?",
        "options": [
          {
            "id": "A",
            "text": "Un hospital privado no acreditado en calidad por la Superintendencia de Salud otorga prestaciones quirúrgicas garantizadas GES dentro de la red en convenio."
          },
          {
            "id": "B",
            "text": "Un paciente con neumonía adquirida en la comunidad no recibe antibióticos en los primeros 30 minutos de ingreso al SAPU."
          },
          {
            "id": "C",
            "text": "Una ISAPRE cobra un copago del 10% por una intervención ambulatoria garantizada en una clínica preferente."
          },
          {
            "id": "D",
            "text": "El médico tratante entrega el Formulario de Constancia GES en formato impreso en lugar de digital."
          },
          {
            "id": "E",
            "text": "Un paciente de 72 años rechaza voluntariamente someterse a una endoscopía digestiva alta garantizada."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Garantía de Calidad exige por ley que todas las prestaciones cubiertas por el GES sean otorgadas exclusivamente por prestadores individuales registrados y prestadores institucionales (clínicas y hospitales) debidamente Acreditados ante la Superintendencia de Salud en los estándares de calidad y seguridad asistencial. Si una institución no acreditada otorga atenciones GES, se está violando de forma directa la Garantía de Calidad.\nB) Incorrecta. Representa un aspecto de manejo clínico general, pero no necesariamente una infracción a la garantía de calidad legal del prestador.\nC) Incorrecta. Un copago del 10% se encuentra dentro del margen de protección financiera (máximo 20%).\nD) Incorrecta. El formulario puede emitirse válidamente en formato físico de papel o electrónico.\nE) Incorrecta. El paciente tiene derecho a rechazar prestaciones en ejercicio de su autonomía.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.040"
      }
    ]
  },
  {
    "id": "sp-03",
    "classId": "sp-03",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica",
    "topicLabel": "21.3",
    "title": "Ley Ricarte Soto (Tratamientos de Alto Costo) y Programas Alimentarios Nacionales (PNAC y PACAM)",
    "perfilCode": "7.01.3.040",
    "dx": "Criterios de Elegibilidad",
    "tx": "Subsidios y Productos Alimentarios",
    "seg": "Red Primaria y Especializada",
    "ges": "Ley 20.850 de Protección Financiera para Tratamientos de Alto Costo",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#90) · EUNACOM Julio 2023 (Q#45)",
    "frecuencia": "Alta · Evalúa financiamiento universal de la Ley Ricarte Soto y los grupos beneficiarios de PNAC (Purita) y PACAM (Crema Años Dorados)",
    "svg": null,
    "algoTitle": "Algoritmo de Acceso a Fármacos de Alto Costo (Ley Ricarte Soto) y Programas Alimentarios",
    "diagramRows": [
      {
        "t": "Paciente con Condición Crónica Compleja de Alto Costo o Requerimiento Nutricional Especial",
        "s": "Evaluación médica en APS o Red Especializada según edad y diagnóstico",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Qué beneficio de la Seguridad Social corresponde activar?",
        "al": "Ley Ricarte Soto vs Programas Alimentarios",
        "ll": "Ley Ricarte Soto (Ley 20.850)",
        "left": {
          "t": "Tratamientos de Alto Costo",
          "s": "Universal (FONASA, ISAPRES, FFAA y sin previsión) · 100% gratuito · Fármacos y dispositivos de alto impacto",
          "type": "acc"
        },
        "rl": "Programas Alimentarios (PNAC / PACAM)",
        "right": {
          "t": "PNAC y PACAM",
          "s": "Entrega en CESFAM · Niños < 6 años, gestantes y nodrizas (PNAC) · Adultos ≥ 70 años (PACAM)",
          "type": "warn"
        }
      },
      {
        "t": "Requisitos de Retiro Alimentario: Controles de salud al día según Programa del Niño/Gestante/Adulto Mayor y Vacunatorio PNI al día",
        "s": "Independiente de la previsión de salud del usuario para los productos universales entregados en APS",
        "type": "acc"
      }
    ],
    "contexto": "La Ley 20.850 (Ley Ricarte Soto) y los Programas Nacionales de Alimentación Complementaria (PNAC) y del Adulto Mayor (PACAM) son instrumentos emblemáticos de equidad sanitaria en Chile. A diferencia del GES, la Ley Ricarte Soto es un sistema de financiamiento 100% universal que ampara a todos los residentes del país sin importar su seguro de salud (FONASA, ISAPRE, Capredena, Dipreca o no asegurados). Por su parte, el PNAC y PACAM aseguran el soporte nutricional preventivo y terapéutico en las etapas más vulnerables del ciclo vital.",
    "contentSections": [
      {
        "subhead": "1. Ley Ricarte Soto (Ley 20.850): Tratamientos de Alto Costo",
        "paragraphs": [
          "Promulgada en 2015, la Ley 20.850 crea un Sistema de Protección Financiera para Diagnósticos y Tratamientos de Alto Costo de base científica garantizada:\n• Cobertura Universal: Cubre al 100% de la población de Chile que cumpla los criterios clínicos del decreto, sin importar su seguro de salud (FONASA, ISAPRES, Fuerzas Armadas o particulares sin previsión).\n• Financiamiento 100% Estatal: La cobertura de los fármacos, alimentos especiales o dispositivos médicos incluidos en el decreto es totalmente gratuita para el usuario (0% de copago, sin deducibles).\n• Patologías Cubiertas Representativas: Esclerosis múltiple recurrente remanente, artritis reumatoide refractaria, cáncer de mama HER2 positivo (Trastuzumab), enfermedad de Crohn, hipertensión arterial pulmonar, bombas de insulina para DM1 inestable, mucopolisacaridosis, tirosinemia, entre otras.",
          "El acceso se formaliza a través de médicos especialistas tratantes en centros hospitalarios públicos o privados acreditados como prestadores institucionales aprobados por el MINSAL."
        ]
      },
      {
        "subhead": "2. Programa Nacional de Alimentación Complementaria (PNAC)",
        "paragraphs": [
          "El PNAC es un programa universal del MINSAL que distribuye alimentos fortificados a través de la Atención Primaria (CESFAM y postas rurales):\n• PNAC Básico: Dirigido a niños menores de 6 años con estado nutricional normal o sobrepeso, y mujeres gestantes y nodrizas con estado nutricional adecuado. Alimentos: Leche Purita Fortificada (niños 6 a 17 meses) y Leche Purita Cereal (niños 18 meses a 5 años 11 meses); Purita Mamá para gestantes y nodrizas.\n• PNAC Refuerzo: Para niños con riesgo de desnutrición o desnutridos, y gestantes con bajo peso. Entrega mayor volumen de leche fortificada y alimentos complementarios.",
          "• Subprogramas Especiales del PNAC:\n  - PNAC Prematuros: Fórmula para prematuros extremos (< 32 semanas o < 1.500 g al nacer).\n  - PNAC Alergia a la Proteína de Leche de Vaca (APLV): Fórmulas extensamente hidrolizadas o a base de aminoácidos libres garantizadas para lactantes diagnosticados.\n  - PNAC Errores Innatos del Metabolismo: Fórmulas especiales libres de fenilalanina (fenilcetonuria) u otros metabolitos."
        ]
      },
      {
        "subhead": "3. Programa de Alimentación Complementaria del Adulto Mayor (PACAM)",
        "paragraphs": [
          "El PACAM provee suplementación nutricional focalizada en personas mayores de 70 años afiliadas a FONASA (o mayores de 60 años en programas de cuidados especiales o con sospecha/confirmación de tuberculosis):\n• Productos Entregados: Crema Años Dorados (sopa crema fortificada en micronutrientes, calcio, zinc, ácido fólico y baja en sodio) y Bebida Láctea Años Dorados (preparado lácteo fortificado, bajo en lactosa y grasa).\n• Requisitos de Retiro: Tener el Examen de Medicina Preventiva del Adulto Mayor (EMPAM) al día y esquema de vacunación según PNI (vacuna anti-influenza y neumocócica)."
        ]
      }
    ],
    "table": {
      "title": "Comparación: Ley Ricarte Soto vs Régimen GES",
      "headers": [
        "Característica",
        "Ley Ricarte Soto (Ley 20.850)",
        "Régimen GES (Ley 19.966)"
      ],
      "rows": [
        [
          "Población Objetivo",
          "100% Universal (FONASA, ISAPRES, FFAA y sin previsión)",
          "Afiliados a FONASA e ISAPRES"
        ],
        [
          "Criterio de Inclusión",
          "Alto costo financiero que supera el umbral económico nacional",
          "Prioridad sanitaria, morbimortalidad y años de vida perdidos"
        ],
        [
          "Copago del Usuario",
          "0% Gratuito siempre para todos los beneficiarios",
          "Copago máximo 20% (según seguro y tramo)"
        ],
        [
          "Tipos de Prestaciones",
          "Fármacos de alto costo, insumos y dispositivos específicos",
          "Canastas integrales (diagnóstico, cirugía, hospitalización, fármacos)"
        ],
        [
          "Garantías Legales",
          "Protección financiera integral para lo aprobado",
          "Las 4 garantías legales (Acceso, Oportunidad, Protección y Calidad)"
        ]
      ]
    },
    "vignette": {
      "text": "La madre de un lactante de 3 meses, beneficiario de ISAPRE, acude al CESFAM del sector donde reside solicitando el retiro de la leche Purita y sus vacunas obligatorias. El personal del mesón le indica inicialmente que por ser ISAPRE no puede retirar alimentos en el consultorio. La madre consulta al médico de turno.",
      "conducta": "El médico aclara que los programas nacionales de salud pública, tales como el Programa Nacional de Inmunizaciones (PNI) y el Programa Nacional de Alimentación Complementaria (PNAC Básico), tienen carácter universal para todos los niños que residan en el territorio nacional, independiente de su previsión de salud (FONASA o ISAPRE), siempre que cumplan los requisitos de control de salud y vacunas al día."
    },
    "explicacion": "El PNAC y el PNI son programas universales garantizados por el Ministerio de Salud para todos los niños menores de 6 años y gestantes de Chile, independientemente de su sistema previsional (FONASA, ISAPRE o Fuerzas Armadas). Los usuarios de ISAPRE pueden retirar los alimentos del PNAC en el CESFAM público correspondiente a su domicilio territorial presentando el carné de control de salud y vacunación al día.",
    "keyPoints": [
      "Ley Ricarte Soto: Protección financiera universal para fármacos y dispositivos de alto costo; cubre a FONASA, ISAPRES, FFAA y particulares.",
      "Copago en Ley Ricarte Soto: Es 100% gratuita para el beneficiario (0% de copago).",
      "PNAC Universal: Los niños menores de 6 años y gestantes pueden retirar los alimentos del PNAC en el CESFAM sin importar si son FONASA o ISAPRE.",
      "Alimentos del PNAC: Purita Fortificada (6-17 meses), Purita Cereal (18 meses a 5 años 11 meses) y Purita Mamá (embarazo y lactancia).",
      "PACAM: Beneficio para adultos de 70 años o más en FONASA; entrega Crema Años Dorados y Bebida Láctea; exige EMPAM al día.",
      "PNAC Especiales: Cubre fórmulas hidrolizadas/aminoácidos en APLV y fórmulas para prematuros menores de 32 semanas o 1.500 g."
    ],
    "questions": [
      {
        "stem": "Una paciente de 42 años diagnosticada de artritis reumatoide refractaria a metotrexato y leflunomida requiere inicio de un fármaco biológico de alto costo (adalimumab) contemplado en el decreto de la Ley Ricarte Soto (Ley 20.850). La paciente se encuentra afiliada a una ISAPRE. ¿Cuál es la cobertura financiera que le corresponde según la ley?",
        "options": [
          {
            "id": "A",
            "text": "100% de cobertura gratuita financiada por el Estado (copago $0), sin importar su previsión de salud."
          },
          {
            "id": "B",
            "text": "80% de cobertura con un copago del 20% con cargo al deducible GES de su plan de ISAPRE."
          },
          {
            "id": "C",
            "text": "50% de financiamiento si sus ingresos familiares superan las 50 UF mensuales."
          },
          {
            "id": "D",
            "text": "La Ley Ricarte Soto sólo rige para afiliados a FONASA, por lo que la ISAPRE debe financiarlo con un seguro catastrófico privado."
          },
          {
            "id": "E",
            "text": "Debe pagar la totalidad del fármaco y solicitar un reembolso anual con tope de 100 UF ante el Ministerio de Hacienda."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Ley 20.850 (Ley Ricarte Soto) tiene cobertura universal para todos los habitantes del país que cumplan los requisitos clínicos establecidos en los decretos aprobados, sin distinción de su previsión de salud (FONASA, ISAPRE, Dipreca o Capredena). Además, la cobertura de los tratamientos y exámenes diagnósticos incluidos es totalmente gratuita (0% de copago) para el beneficiario.\nB) Incorrecta. El copago del 20% corresponde al régimen general GES en prestadores privados, no a la Ley Ricarte Soto.\nC) Incorrecta. La Ley Ricarte Soto no discrimina por tramos de ingreso para fijar copagos.\nD) Incorrecta. La ley cubre obligatoriamente a los cotizantes de ISAPRE.\nE) Incorrecta. No funciona por reembolso, sino por dispensación directa autorizada.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.040"
      },
      {
        "stem": "¿Cuál es el requisito indispensable que debe cumplir un adulto de 74 años afiliado a FONASA para poder retirar mensualmente los productos alimentarios del PACAM (Crema Años Dorados) en el CESFAM?",
        "options": [
          {
            "id": "A",
            "text": "Tener vigente el Examen de Medicina Preventiva del Adulto Mayor (EMPAM) y sus vacunas al día."
          },
          {
            "id": "B",
            "text": "Acreditar una pensión inferior al sueldo mínimo legal ante la dirección de desarrollo comunitario (DIDECO)."
          },
          {
            "id": "C",
            "text": "Presentar un certificado médico de desnutrición calórico-proteica emitido por un geriatra."
          },
          {
            "id": "D",
            "text": "Haber estado hospitalizado por patología médica en los últimos 12 meses."
          },
          {
            "id": "E",
            "text": "Contar con un índice de Barthel menor a 40 puntos (dependencia severa)."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Para retirar los beneficios alimentarios del PACAM en los establecimientos de Atención Primaria, la normativa del MINSAL exige que el adulto de 70 años o más afiliado a FONASA tenga al día sus controles de salud, específicamente el Examen de Medicina Preventiva del Adulto Mayor (EMPAM) anual y su calendario de vacunación al día (vacuna anti-influenza y antineumocócica).\nB) Incorrecta. El PACAM no exige evaluación socioeconómica de DIDECO para mayores de 70 años.\nC) Incorrecta. El PACAM básico es preventivo y se entrega a todos los mayores de 70 años, independientemente de que su estado nutricional sea normal.\nD) Incorrecta. No se exige antecedente de hospitalización previa.\nE) Incorrecta. La dependencia severa califica para el programa de postrados, pero no es requisito para el PACAM.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.005"
      }
    ]
  },
  {
    "id": "sp-04",
    "classId": "sp-04",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica",
    "topicLabel": "21.4",
    "title": "Enfermedades de Notificación Obligatoria (ENO) y Vigilancia Epidemiológica en Chile",
    "perfilCode": "7.01.3.016",
    "dx": "Criterios de Notificación",
    "tx": "Medidas de Control y Bloqueo",
    "seg": "SEREMI de Salud / Epivigila",
    "ges": "Decreto Supremo N.° 7 de Notificación Obligatoria de Enfermedades Transmisibles",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#91) · EUNACOM Julio 2024 (Q#15) · EUNACOM Diciembre 2023 (Q#60)",
    "frecuencia": "Muy Alta · Pregunta clásica de examen distinguiendo ENO Inmediata (ante sospecha) vs ENO Diaria (confirmada)",
    "svg": null,
    "algoTitle": "Algoritmo de Vigilancia Epidemiológica: Notificación Inmediata vs Diaria (Decreto N.° 7)",
    "diagramRows": [
      {
        "t": "Médico Sospecha o Confirma Enfermedad Transmisible Sujeta a Vigilancia Epidemiológica",
        "s": "Deber legal ineludible de todo médico en territorio nacional (Art. 112 Código Sanitario y DS 7)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Tipo de Notificación según Peligrosidad Sanitaria y Rapidez Requerida?",
        "al": "Inmediata vs Diaria",
        "ll": "NOTIFICACIÓN INMEDIATA (Ante Sospecha)",
        "left": {
          "t": "ENO INMEDIATA: ¡ANTE SOSPECHA!",
          "s": "Vía más expedita (Epivigila/teléfono) · No esperar laboratorio · Ántrax, Botulismo, Cólera, Rabia, Sarampión, Meningococo, Hanta",
          "type": "crit"
        },
        "rl": "NOTIFICACIÓN DIARIA (Al Confirmar)",
        "right": {
          "t": "ENO DIARIA: DENTRO DE 24 HORAS",
          "s": "TBC, Sífilis, Gonorrea, VIH/SIDA, Hepatitis A/B/C, Coqueluche, Chagas, Tétanos, Hidatidosis, Brucelosis",
          "type": "warn"
        }
      },
      {
        "t": "Acción Inmediata de la Autoridad Sanitaria (SEREMI de Salud): Investigación Epidemiológica, Estudio de Contactos, Profilaxis y Bloqueo",
        "s": "Prevención de brotes epidémicos, quimioprofilaxis en contactos estrechos (meningococo, coqueluche) y saneamiento ambiental",
        "type": "acc"
      }
    ],
    "contexto": "La vigilancia epidemiológica de enfermedades transmisibles está regulada en Chile por el Decreto Supremo N.° 7 del Ministerio de Salud. Su conocimiento es de vital importancia médica y médico-legal, siendo una de las áreas más frecuentemente interrogadas en el EUNACOM. La distinción capital radica en las enfermedades de Notificación Inmediata (que deben notificarse obligatoriamente ante la simple sospecha clínica, sin aguardar confirmación bacteriológica o serológica) frente a las de Notificación Diaria.",
    "contentSections": [
      {
        "subhead": "1. Marco Regulatorio y Plataforma EPIVIGILA",
        "paragraphs": [
          "La notificación de enfermedades transmisibles es obligatoria para todos los médicos cirujanos que ejerzan en establecimientos públicos, privados, laboratorios y centros comunitarios. La notificación se realiza a través del sistema informático nacional EPIVIGILA (o mediante comunicación telefónica/electrónica directa a la Unidad de Epidemiología de la SEREMI de Salud correspondiente en emergencias biológicas).",
          "El incumplimiento de la notificación obligatoria constituye una infracción sanitaria severa contemplada en el Código Sanitario, sancionable con sumario sanitario, multas e inhabilidad profesional."
        ]
      },
      {
        "subhead": "2. Enfermedades de Notificación Inmediata (Ante la Simple Sospecha)",
        "paragraphs": [
          "Se deben notificar por la vía más rápida disponible dentro de las primeras horas de atención clínica, ¡SIN ESPERAR LA CONFIRMACIÓN DE LABORATORIO! Su objetivo es permitir la intervención inmediata de salud pública para control de brotes, aislamiento o quimioprofilaxis de contactos:",
          "• Lista Oficial de ENO Inmediatas:\n  - Infección Meningocócica (Enfermedad Meningocócica Invasora)\n  - Hantavirus (Síndrome Cardiopulmonar por Hantavirus)\n  - Sarampión y Rubéola\n  - Rabia humana o animal\n  - Botulismo\n  - Cólera\n  - Ántrax (Carbunco)\n  - Peste (Yersinia pestis)\n  - Poliomielitis / Parálisis Flácida Aguda en menores de 15 años\n  - Fiebre Amarilla, Dengue grave y Malaria\n  - Difteria\n  - Viruela del Mono (Mpox)\n  - Brotes de Enfermedades Transmitidas por Alimentos (ETA, 2 o más casos asociados)."
        ]
      },
      {
        "subhead": "3. Enfermedades de Notificación Diaria (Al Confirmarse o Sospecharse)",
        "paragraphs": [
          "Deben notificarse de forma agrupada o individual dentro de las 24 horas siguientes a la atención o confirmación diagnóstica:",
          "• Lista Oficial de ENO Diarias:\n  - Tuberculosis (todas sus formas: pulmonar y extrapulmonar)\n  - Infecciones de Transmisión Sexual: Sífilis (todas sus etapas), Gonorrea e Infección por VIH/SIDA\n  - Hepatitis Virales Agudas: Hepatitis A, Hepatitis B y Hepatitis C\n  - Coqueluche (Tos Ferina)\n  - Enfermedad de Chagas (aguda y crónica)\n  - Tétanos y Tétanos Neonatal\n  - Brucelosis, Leptospirosis y Triquinosis\n  - Hidatidosis\n  - Fiebre Tifoidea y Fiebre Paratifoidea\n  - Lepra (Enfermedad de Hansen)."
        ]
      },
      {
        "subhead": "4. Estudio de Brotes y Acciones de Bloqueo Sanitario",
        "paragraphs": [
          "Ante una ENO Inmediata, la Autoridad Sanitaria (SEREMI de Salud) despliega acciones de bloqueo epidemiológico:\n• Enfermedad Meningocócica: Quimioprofilaxis de contactos estrechos (personas que pernoctaron en la misma habitación o compartieron fluidos orales en los últimos 10 días) con Rifampicina (600 mg c/12 h x 2 días en adultos) o Ciprofloxacino (500 mg VO dosis única) o Ceftriaxona (250 mg IM dosis única en gestantes).\n• Coqueluche: Quimioprofilaxis de contactos domiciliarios con Azitromicina o Claritromicina por 7 a 14 días.\n• Brotes de ETA: Inspección sanitaria inmediata del casino o restaurante, decomiso de alimentos sospechosos, toma de coprocultivos y sumario sanitario."
        ]
      }
    ],
    "table": {
      "title": "Enfermedades de Notificación Obligatoria: Inmediata vs Diaria",
      "headers": [
        "Categoría",
        "Momento de la Notificación",
        "Vía de Comunicación",
        "Ejemplos Cardinales de Enfermedades"
      ],
      "rows": [
        [
          "ENO Inmediata",
          "Ante la simple SOSPECHA clínica (no esperar laboratorio)",
          "Vía más rápida disponible (teléfono/Epivigila inmediato)",
          "Meningococo, Hanta, Rabia, Sarampión, Cólera, Botulismo, Ántrax, Mpox, Brote ETA"
        ],
        [
          "ENO Diaria",
          "Dentro de las 24 horas de confirmación o sospecha",
          "Plataforma Epivigila / Formulario oficial diario",
          "TBC, Sífilis, VIH, Gonorrea, Hepatitis A/B/C, Coqueluche, Chagas, Tétanos, Hidatidosis"
        ],
        [
          "Vigilancia Centinela",
          "Muestreo poblacional periódico según centros centinela",
          "Plataforma de vigilancia ministerial",
          "Influenza, Virus Respiratorio Sincicial (VRS), Diarreas por Rotavirus"
        ]
      ]
    },
    "severityTable": {
      "title": "Quimioprofilaxis de Contactos Estrechos en Emergencias Epidemiológicas",
      "headers": [
        "Patología",
        "Definición de Contacto Estrecho",
        "Fármaco de Elección (Adultos)",
        "Fármaco Alternativo / Embarazo"
      ],
      "rows": [
        [
          "Meningococo",
          "Dormir bajo el mismo techo o contacto con saliva < 10 d",
          "Rifampicina 600 mg c/12 h x 2 días VO",
          "Ciprofloxacino 500 mg VO dosis única / Ceftriaxona 250 mg IM"
        ],
        [
          "Coqueluche",
          "Convivientes domiciliarios y cuidadores de lactantes",
          "Azitromicina 500 mg día 1, luego 250 mg/d x 4 d",
          "Claritromicina 500 mg c/12 h x 7 días"
        ],
        [
          "Hantavirus",
          "Convivientes de cabaña o exposición en bosque",
          "NO existe quimioprofilaxis farmacológica",
          "Seguimiento clínico estrecho y consulta precoz ante fiebre"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Investigación y Manejo de Brotes de ETA (Enfermedades Transmitidas por Alimentos)",
      "headers": [
        "Paso de la Investigación",
        "Objetivo Sanitario",
        "Herramienta Epidemiológica",
        "Medida de Control Inmediata"
      ],
      "rows": [
        [
          "1. Confirmar el Brote",
          "Verificar que ≥ 2 personas consumieron alimento común",
          "Curva epidémica y tasa de ataque",
          "Notificación inmediata a SEREMI de Salud"
        ],
        [
          "2. Identificar el Alimento",
          "Determinar alimento causal con mayor riesgo relativo",
          "Cuestionario alimentario y cálculo de Odds Ratio",
          "Clausura preventiva de la cocina y decomiso de lotes"
        ],
        [
          "3. Aislamiento Microbiológico",
          "Aislar Salmonella, Staphylococcus, etc.",
          "Coprocultivos y análisis bromatológico del alimento",
          "Tratamiento de afectados e hidratación oral/EV"
        ]
      ]
    },
    "vignette": {
      "text": "Un médico de urgencias evalúa a un joven de 19 años que reside en una residencia universitaria, quien consulta por fiebre de 39,2 °C, cefalea holocraneana severa, vómitos explosivos, rigidez de nuca franca y petequias en extremidades inferiores. El médico sospecha fuertemente una meningitis meningocócica y solicita punción lumbar. Antes de recibir los resultados del citoquímico y Gram del LCR, se pregunta cuál es el curso de acción correcto con respecto a la notificación epidemiológica.",
      "conducta": "El médico debe notificar de forma INMEDIATA la sospecha clínica a la SEREMI de Salud a través de Epivigila o teléfono, sin esperar el resultado del LCR ni el cultivo bacteriano, para iniciar urgentemente la quimioprofilaxis con ciprofloxacino o rifampicina en los compañeros de habitación y contactos estrechos de la residencia universitaria."
    },
    "explicacion": "La enfermedad meningocócica invasora es una Enfermedad de Notificación Obligatoria de carácter INMEDIATO. La normativa sanitaria chilena exige que la notificación a la Autoridad Sanitaria se realice ante la simple sospecha clínica, por la vía más expedita posible. Esperar los resultados de laboratorio (Gram o cultivo de LCR) retrasa inadmisiblemente la administración de la quimioprofilaxis a los contactos estrechos, la cual debe iniciarse idealmente en las primeras 24 horas para prevenir casos secundarios fatales.",
    "keyPoints": [
      "Las ENO Inmediatas se notifican ante la simple SOSPECHA clínica por la vía más rápida (Epivigila/teléfono); ¡nunca esperar confirmación de laboratorio!",
      "Son ENO Inmediatas clásicas: Meningococo, Hantavirus, Sarampión, Rubéola, Cólera, Botulismo, Rabia, Ántrax y brotes de ETA.",
      "Son ENO Diarias: Tuberculosis, Sífilis, VIH, Gonorrea, Hepatitis A, B y C, Coqueluche, Chagas y Tétanos.",
      "Contactos de Meningococo: Profilaxis con Rifampicina (600 mg c/12 h x 2 d) o Ciprofloxacino (500 mg VO DU); en embarazadas usar Ceftriaxona (250 mg IM DU).",
      "Brotes de ETA: La presencia de 2 o más personas con sintomatología digestiva similar tras compartir un alimento común constituye una ENO Inmediata.",
      "Hantavirus: NO tiene quimioprofilaxis profiláctica; se basa en la sospecha inmediata y traslado preventivo a centro con camas críticas (ECMO)."
    ],
    "questions": [
      {
        "stem": "¿Cuál de las siguientes patologías infecciosas debe ser notificada obligatoriamente a la autoridad sanitaria de manera INMEDIATA frente a la simple sospecha clínica, sin requerir confirmación serológica o bacteriológica previa?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome Cardiopulmonar por Hantavirus"
          },
          {
            "id": "B",
            "text": "Tuberculosis Pulmonar Bacilífera"
          },
          {
            "id": "C",
            "text": "Infección por Virus de Inmunodeficiencia Humana (VIH)"
          },
          {
            "id": "D",
            "text": "Sífilis Secundaria con lesiones cutáneas activas"
          },
          {
            "id": "E",
            "text": "Hepatitis Viral tipo A"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El Síndrome Cardiopulmonar por Hantavirus es una patología de alta letalidad clasificada como ENO de Notificación Inmediata ante la simple sospecha clínica por el Decreto Supremo N.° 7. El médico tratante debe notificar de inmediato a la SEREMI de Salud para coordinar la gestión de camas críticas/ECMO y desplegar la investigación ambiental en el lugar de probable contagio.\nB) Incorrecta. La tuberculosis es de notificación diaria.\nC) Incorrecta. El VIH se notifica de forma diaria al confirmarse por el ISP.\nD) Incorrecta. La sífilis es de notificación diaria.\nE) Incorrecta. La hepatitis A es de notificación diaria (salvo que forme parte de un brote institucional agudo).",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.016"
      },
      {
        "stem": "Se confirma un caso de meningitis por Neisseria meningitidis serogrupo W en un escolar de 8 años. ¿Cuál es la indicación correcta respecto a la quimioprofilaxis antibiótica de sus contactos estrechos en el aula y domicilio?",
        "options": [
          {
            "id": "A",
            "text": "Administrar Rifampicina oral durante 2 días o Ciprofloxacino en dosis única a los contactos estrechos a la brevedad."
          },
          {
            "id": "B",
            "text": "Indicar Amoxicilina oral por 10 días a todo el establecimiento educacional."
          },
          {
            "id": "C",
            "text": "Prescribir Penicilina Benzatina intramuscular en dosis única sólo a quienes presenten fiebre."
          },
          {
            "id": "D",
            "text": "Esperar la aparición de síntomas meníngeos antes de iniciar cualquier antibiótico."
          },
          {
            "id": "E",
            "text": "Aislar en domicilio a todos los alumnos sin requerimiento de terapia antimicrobiana preventiva."
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La profilaxis antibiótica contra la enfermedad meningocócica busca erradicar la portación nasofaríngea en contactos íntimos y convivientes. Los esquemas recomendados por el MINSAL son: Rifampicina oral cada 12 horas por 2 días (10 mg/kg en niños, 600 mg en adultos), o bien Ceftriaxona IM o Ciprofloxacino oral en dosis única en adultos. Debe administrarse idealmente en las primeras 24 horas del diagnóstico del caso índice.\nB) Incorrecta. La amoxicilina no erradica eficazmente la portación faríngea de meningococo y no debe usarse en todo el colegio sin criterio de contacto estrecho.\nC) Incorrecta. La penicilina benzatina no tiene indicación profiláctica en meningococo.\nD) Incorrecta. Esperar síntomas causaría casos secundarios de alta letalidad.\nE) Incorrecta. El aislamiento sin quimioprofilaxis no previene la enfermedad en portadores colonizados.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.016"
      }
    ]
  },
  {
    "id": "sp-05",
    "classId": "sp-05",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Sistema de Salud Chileno, Red Asistencial & Vigilancia Epidemiológica",
    "topicLabel": "21.5",
    "title": "Modelo de Atención Integral de Salud Familiar y Comunitaria (MAIS) y Diagnóstico Comunitario",
    "perfilCode": "7.01.3.001",
    "dx": "Evaluación Biopsicosocial",
    "tx": "Plan de Cuidado Familiar",
    "seg": "Sector Sanitario / CESFAM",
    "ges": "Enfoque Integral en Atención Primaria de Salud (MINSAL)",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#92) · EUNACOM Diciembre 2023 (Q#61)",
    "frecuencia": "Alta · Evalúa principios del MAIS, instrumentos de evaluación familiar (Genograma, Ecomapa, APGAR) y Diagnóstico de Salud Comunitario",
    "svg": null,
    "algoTitle": "Algoritmo de Aplicación del Enfoque Familiar y Comunitario en Atención Primaria (MAIS)",
    "diagramRows": [
      {
        "t": "Usuario y Familia Consultan en el Centro de Salud Familiar (CESFAM)",
        "s": "Abordaje no fragmentado centrado en la persona y su entorno biopsicosocial",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "¿Nivel de Intervención Requerido según Complejidad Familiar?",
        "al": "Individual vs Familiar / Comunitario",
        "ll": "Evaluación de la Dinámica Familiar",
        "left": {
          "t": "Instrumentos Familiares",
          "s": "Genograma (estructura 3 generaciones) · Ecomapa (redes y apoyos externos) · APGAR (funcionalidad familiar)",
          "type": "acc"
        },
        "rl": "Intervención Comunitaria y Territorial",
        "right": {
          "t": "Salud Comunitaria y ASIS",
          "s": "Diagnóstico participativo (ASIS) · Intersectorialidad (colegios, juntas de vecinos) · Promoción y prevención",
          "type": "warn"
        }
      },
      {
        "t": "Diseño del Plan de Cuidados Compartido: Equipo de Cabecera Multidisciplinario (Médico, Enfermera, Matrona, Asistente Social)",
        "s": "Continuidad del cuidado a lo largo de todo el curso de vida (niñez, adolescencia, adultez y vejez)",
        "type": "acc"
      }
    ],
    "contexto": "El Modelo de Atención Integral de Salud Familiar y Comunitaria (MAIS) es la base filosófica y operacional de la Atención Primaria en Chile. Supera el modelo biomédico tradicional centrado en la enfermedad aguda para articular un enfoque biopsicosocial centrado en las personas, sus familias y sus comunidades. En el EUNACOM se evalúan sus principios orientadores, los instrumentos de evaluación de salud familiar (Genograma, Ecomapa, APGAR de Smilkstein) y las etapas del Análisis de Situación de Salud (ASIS).",
    "contentSections": [
      {
        "subhead": "1. Principios Irrenunciables del Modelo MAIS",
        "paragraphs": [
          "El MAIS se fundamenta en tres principios rectores declarados por el MINSAL:\n1. Centrado en las Personas: Considera a los usuarios como seres integrales con dimensiones biológicas, psicológicas, espirituales y sociales. Respeta sus valores, fomenta su autonomía y promueve la toma de decisiones compartida.",
          "2. Integralidad de la Atención: Abarca el continuo de promoción de la salud, prevención de la enfermedad, curación, rehabilitación y cuidados paliativos, articulando tanto la atención individual como el trabajo con la familia y la comunidad.",
          "3. Continuidad del Cuidado: Provee un acompañamiento longitudinal y coordinado a lo largo del tiempo y en los diferentes niveles de la red asistencial, sin fragmentaciones, mediante equipos de salud de cabecera por sector geográfico."
        ]
      },
      {
        "subhead": "2. Instrumentos de Evaluación Familiar",
        "paragraphs": [
          "Los instrumentos de evaluación permiten al equipo de salud comprender la estructura, ciclo vital y dinámica de la familia:\n• Genograma Estructural (Familiograma): Representación gráfica estandarizada de al menos 3 generaciones de la familia. Muestra la composición familiar, edades, ocupaciones, consanguinidad, estado civil, patologías crónicas heredofamiliares y tipos de vínculos interpersonales (muy unidos, conflictivos, distantes, quiebres).",
          "• Ecomapa: Dibuja a la familia en su interacción con el ecosistema social externo (trabajo, escuela, CESFAM, iglesia, amigos, subsidios estatales), identificando si los flujos de energía y recursos son de apoyo enriquecedor o de tensión y sobrecarga.",
          "• APGAR Familiar (Smilkstein): Cuestionario autoadministrado de 5 preguntas que evalúa la percepción individual de la funcionalidad familiar en cinco dimensiones: Adaptabilidad, Participación, Gradualidad de crecimiento, Afecto y Resolución. Clasificación: Funcionalidad normal (7-10 puntos), Disfunción familiar leve (4-6 puntos), Disfunción familiar severa (0-3 puntos)."
        ]
      },
      {
        "subhead": "3. Diagnóstico de Salud Comunitario y Análisis de Situación de Salud (ASIS)",
        "paragraphs": [
          "El Análisis de Situación de Salud (ASIS) es el proceso analítico-sintético que caracteriza y mide el perfil epidemiológico, sociodemográfico y de determinantes sociales de una población territorial asignada.",
          "• Etapas del Diagnóstico Comunitario:\n  1. Recolección y análisis de datos sociodemográficos y sanitarios (censos, estadísticas vitales, REM del CESFAM).\n  2. Diagnóstico Participativo con la comunidad (talleres con juntas de vecinos, consejos de desarrollo local - CDL, organizaciones de usuarios).\n  3. Priorización de Problemas de Salud (empleando métodos objetivos como Método de Hanlon, evaluando magnitud, gravedad, eficacia y factibilidad).\n  4. Elaboración y ejecución del Plan de Acción Intersectorial en el territorio.\n  5. Monitoreo y evaluación continua de los indicadores de impacto."
        ]
      }
    ],
    "table": {
      "title": "Instrumentos de Salud Familiar en Atención Primaria",
      "headers": [
        "Instrumento",
        "Estructura y Componentes",
        "Objetivo Clínico-Asistencial",
        "Puntaje / Interpretación"
      ],
      "rows": [
        [
          "Genograma",
          "Árbol gráfico de 3 generaciones con símbolos estandarizados",
          "Visualizar estructura biológica, patologías y vínculos",
          "Estructural, dinámico y relacional"
        ],
        [
          "Ecomapa",
          "Círculo familiar central rodeado de sistemas comunitarios",
          "Evaluar redes de apoyo social y fuentes de estrés",
          "Vínculos fuertes, débiles o estresantes"
        ],
        [
          "APGAR Familiar",
          "5 preguntas (Adaptación, Participación, Ganancia, Afecto, Recursos)",
          "Medir percepción de satisfacción y funcionalidad familiar",
          "7-10: Buena función; 4-6: Disfunción leve; 0-3: Disfunción severa"
        ],
        [
          "Círculo Familiar",
          "Círculo en blanco donde el usuario dibuja a sus miembros",
          "Explorar cercanía emocional y jerarquías subjetivas",
          "Apreciación cualitativa gráfica del paciente"
        ]
      ]
    },
    "vignette": {
      "text": "Un médico de cabecera de un CESFAM atiende a una paciente de 46 años con diagnóstico reciente de diabetes mellitus tipo 2 descompensada. Al indagar sobre su adherencia al tratamiento, la paciente refiere llanto fácil, sobrecarga por el cuidado de su madre con demencia avanzada y constantes discusiones con su cónyuge desempleado. El médico aplica el cuestionario de APGAR familiar, obteniendo un puntaje de 3 puntos. ¿Cuál es la interpretación diagnóstica y la conducta más adecuada en el marco del MAIS?",
      "conducta": "El puntaje de 3 en el APGAR familiar indica una Disfunción Familiar Severa. En el marco del modelo MAIS, la conducta no se limita al ajuste farmacológico de la diabetes, sino que requiere activar al equipo de sector (asistente social, psicólogo y enfermera) para realizar una evaluación familiar integral, confeccionar el genograma y ecomapa, y formular un plan de cuidados consensuado que alivie la sobrecarga del cuidador."
    },
    "explicacion": "El APGAR familiar de Smilkstein es un instrumento validado que evalúa la funcionalidad familiar autopercibida. Un puntaje de 0 a 3 refleja una disfunción familiar severa (4 a 6 disfunción leve; 7 a 10 normofunción). Bajo el enfoque biopsicosocial del MAIS, los problemas psicosociales y la disfunción familiar impactan negativamente en el control metabólico de patologías crónicas, por lo que el abordaje debe ser multidisciplinario e incorporar la intervención sobre la dinámica familiar.",
    "keyPoints": [
      "Principios del MAIS: Centrado en las personas, Integralidad de la atención y Continuidad del cuidado.",
      "Genograma: Mínimo 3 generaciones familiares; grafica edades, vínculos, fallecimientos y antecedentes mórbidos.",
      "Ecomapa: Muestra las relaciones y redes de apoyo de la familia con el entorno comunitario (escuela, trabajo, CESFAM).",
      "APGAR Familiar: Puntaje 7-10 (funcional), 4-6 (disfunción leve), 0-3 (disfunción severa). Evalúa adaptabilidad, participación, gradiente, afecto y resolución.",
      "ASIS (Análisis de Situación de Salud): Proceso continuo que combina indicadores cuantitativos con diagnóstico participativo con la comunidad.",
      "Priorización de Hanlon: Método para jerarquizar problemas de salud comunitaria según componentes de Magnitud, Severidad, Eficacia y Factibilidad (PEARL)."
    ],
    "questions": [
      {
        "stem": "Durante la realización de un estudio de familia en un CESFAM, se aplica el cuestionario de APGAR familiar a un adolescente de 15 años con conductas de riesgo y deserción escolar, obteniendo un puntaje total de 5 puntos. ¿Cómo se clasifica la funcionalidad de su sistema familiar según este resultado?",
        "options": [
          {
            "id": "A",
            "text": "Disfunción familiar leve"
          },
          {
            "id": "B",
            "text": "Familia altamente funcional"
          },
          {
            "id": "C",
            "text": "Disfunción familiar severa"
          },
          {
            "id": "D",
            "text": "Familia desestructurada con riesgo de abandono"
          },
          {
            "id": "E",
            "text": "Sistema familiar con aglutinamiento patológico"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El APGAR familiar clasifica la funcionalidad percibida en: 7 a 10 puntos (buena funcionalidad o normofuncional), 4 a 6 puntos (disfunción familiar leve a moderada) y 0 a 3 puntos (disfunción familiar severa). Por ende, un puntaje de 5 puntos corresponde a una Disfunción Familiar Leve.\nB) Incorrecta. La buena función exige 7 o más puntos.\nC) Incorrecta. La disfunción severa se define con 0 a 3 puntos.\nD) Incorrecta. El término familia desestructurada no es una categoría del test de APGAR.\nE) Incorrecta. El aglutinamiento es un concepto de la teoría de Minuchin, no medido numéricamente por el APGAR.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.001"
      },
      {
        "stem": "¿Cuál de los siguientes instrumentos de salud familiar es el más adecuado para identificar y graficar las redes de apoyo social formal e informal, las fuentes de tensión comunitaria y el grado de aislamiento social de un grupo familiar?",
        "options": [
          {
            "id": "A",
            "text": "Ecomapa"
          },
          {
            "id": "B",
            "text": "Genograma estructural"
          },
          {
            "id": "C",
            "text": "Test de APGAR de Smilkstein"
          },
          {
            "id": "D",
            "text": "Escala de Zarit"
          },
          {
            "id": "E",
            "text": "Cuestionario de Duke-UNC"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El Ecomapa es la herramienta gráfica diseñada específicamente para visualizar a la familia en el centro de su entorno o ecosistema relacional, trazando líneas que representan los vínculos con instituciones comunitarias (CESFAM, escuela, trabajo, organizaciones religiosas, juntas vecinales) y distinguiendo si dichas relaciones son de apoyo enriquecedor, débiles o generadoras de tensión.\nB) Incorrecta. El genograma mapea la estructura interna e intergeneracional de la familia.\nC) Incorrecta. El APGAR mide la percepción de funcionalidad familiar interna.\nD) Incorrecta. La escala de Zarit mide la sobrecarga del cuidador de pacientes dependientes.\nE) Incorrecta. El cuestionario de Duke-UNC evalúa el apoyo social percibido individual.",
        "recTag": "Banco Oficial AEE · Perfil V3 7.01.3.001"
      }
    ]
  }
];

const bloque1Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowSaludPublica(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque1Classes };
