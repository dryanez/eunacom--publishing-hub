/**
 * TOMO 19: OBSTETRICIA & MEDICINA MATERNO-FETAL · BLOQUE 1
 * Control Prenatal & Evaluación Fetal (19.1 a 19.4)
 */

const { flowObstetricia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ob-01",
    "classId": "ob-01",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Control Prenatal & Evaluación Fetal",
    "topicLabel": "19.1",
    "title": "Control Prenatal de Bajo Riesgo: Calendario, Suplementación (Ácido Fólico, Calcio, Fierro) y Exámenes por Trimestre",
    "perfilCode": "3.01.3.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Garantía de acceso universal en la red de Atención Primaria de Salud (Guía Perinatal MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#35) · EUNACOM Julio 2023 (Q#40) · EUNACOM Diciembre 2022 (Q#12)",
    "frecuencia": "Máxima rentabilidad · Exámenes obligatorios por trimestre, cálculo de semanas y dosis de ácido fólico",
    "svg": null,
    "algoTitle": "Cronograma Integral de Exámenes de Laboratorio y Suplementación en el Control Prenatal (MINSAL)",
    "diagramRows": [
      {
        "t": "Ingreso Precoz al Control Prenatal (< 12 semanas)",
        "s": "Confirmación de EG por FUR/Eco precoz · Clasificación de riesgo biopsicosocial",
        "type": "acc"
      },
      {
        "t": "Batería de Laboratorio del 1.er Trimestre",
        "s": "Grupo y Rh + Coombs ind. · Hemograma · VDRL/RPR · VIH · Glicemia ayunas · Orina completa + Urocultivo · Chagas",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Suplementación Farmacológica Universal MINSAL",
        "al": "Suplementación según Etapa Gestacional",
        "ll": "Periconcepcional / 1.er Trimestre",
        "left": {
          "t": "Ácido Fólico Profiláctico",
          "s": "0.4 mg/día (bajo riesgo) o 4-5 mg/día (antecedente de defecto tubo neural, diabetes, anticonvulsivantes)",
          "type": "acc"
        },
        "rl": "Desde la Semana 12-16 en Adelante",
        "right": {
          "t": "Calcio y Hierro Elemental",
          "s": "Calcio 1.000 a 1.500 mg/día (prevención de preeclampsia) + Hierro oral profiláctico desde sem 16-20",
          "type": "warn"
        }
      },
      {
        "t": "Hitos del 2.° y 3.er Trimestre: PTGO 75g (24-28 sem) y Cultivo SGB (35-37 sem)",
        "s": "Sem 24-28: PTGO 75g (tamizaje diabetes gestacional) · Sem 35-37: Cultivo vaginorrectal para Streptococcus agalactiae",
        "type": "crit"
      }
    ],
    "contexto": "El control prenatal (CPN) de calidad es la intervención sanitaria más eficaz para reducir la morbimortalidad materna y perinatal. En Chile, la Guía Perinatal del MINSAL estructura el calendario de controles y la pesquisa universal de patologías silentes (diabetes gestacional, sífilis, VIH, bacteriuria asintomática, colonización por EGB y preeclampsia). El médico general debe prescribir con exactitud el ácido fólico periconcepcional, el carbonato de calcio para prevención de preeclampsia, interpretar la batería de exámenes por trimestre y solicitar oportunamente el cultivo vaginorrectal de SGB.",
    "contentSections": [
      {
        "subhead": "1. Objetivos, Calendario y Cálculo de Edad Gestacional",
        "paragraphs": [
          "El control prenatal debe ser <strong>precoz</strong> (idealmente antes de las 12 semanas), <strong>periódico, continuo e integral</strong>.",
          "• <strong>Calendario en Embarazo de Bajo Riesgo:</strong> Mensual hasta la semana 28; quincenal entre las semanas 28 y 36; y semanal desde la semana 36 hasta el parto.",
          "• <strong>Cálculo de la Edad Gestacional (EG) y Fecha Probable de Parto (FPP):</strong>",
          "  - <strong>Regla de Naegele:</strong> FPP = Primer día de la FUM + 7 días - 3 meses.",
          "  - <strong>Validación por Ecografía:</strong> Si la diferencia entre la edad por FUM y la Longitud Céfalo-Nalgas (LCN) de la ecografía del 1.er trimestre (7-14 semanas) es <strong>mayor a 5-7 días</strong>, la edad gestacional <strong>SE CORRIGE</strong> por ecografía precoz (que pasa a ser la fecha oficial inamovible)."
        ]
      },
      {
        "subhead": "2. Suplementación Farmacológica Universal MINSAL",
        "paragraphs": [
          "• <strong>Ácido Fólico (Prevención de Defectos del Tubo Neural - DTN):</strong>",
          "  - <strong>Población General (Bajo Riesgo):</strong> <strong>0.4 a 1.0 mg/día</strong> por vía oral, iniciado idealmente <strong>3 meses antes de la concepción y mantenido hasta las 12 semanas de gestación</strong>.",
          "  - <strong>Alto Riesgo (Hijo previo con DTN, espina bífida, anencefalia, madre diabética pregestacional o uso de fármacos anticonvulsivantes como ácido valproico/carbamazepina):</strong> <strong>4.0 a 5.0 mg/día</strong> por vía oral.",
          "• <strong>Carbonato de Calcio (Prevención de Preeclampsia):</strong>",
          "  - <strong>Dosis:</strong> <strong>1.000 a 1.500 mg/día de calcio elemental</strong> por vía oral, iniciado a partir de las <strong>12 a 16 semanas</strong> y mantenido hasta el parto en mujeres con ingesta dietética baja de calcio (la gran mayoría de la población en Chile). Reduce el riesgo de preeclampsia en más del 50%.",
          "• <strong>Hierro Oral:</strong> Suplementación profiláctica con 30-60 mg/día de hierro elemental desde la semana 16 a 20 si ferritina o hemoglobina están en el límite (meta de Hb en embarazo ≥ 11 g/dL en 1.er y 3.er trimestre; ≥ 10.5 g/dL en 2.° trimestre)."
        ]
      },
      {
        "subhead": "3. Batería Estandarizada de Exámenes por Trimestre",
        "paragraphs": [
          "• <strong>Primer Trimestre (Ingreso Prenatal):</strong>",
          "  1) Grupo sanguíneo y factor Rh + Test de Coombs indirecto.",
          "  2) Hemograma completo y Ferritina.",
          "  3) <strong>VDRL o RPR</strong> (tamizaje universal de sífilis; se repite a las 28 semanas y en el parto).",
          "  4) <strong>Test de VIH</strong> con consentimiento informado (se repite a las 32-34 semanas y en el parto).",
          "  5) <strong>Glicemia en ayunas</strong> (si es ≥ 100-125 mg/dL en dos ocasiones -> Diabetes Gestacional precoz; si ≥ 126 mg/dL -> Diabetes Pregestacional manifiesta).",
          "  6) Orina completa y <strong>Urocultivo</strong> (pesquisa de bacteriuria asintomática).",
          "  7) Serología para <strong>Enfermedad de Chagas</strong> (IgG) en zonas endémicas y según norma nacional.",
          "  8) PAP (Papanicolau) si no está al día.",
          "• <strong>Segundo Trimestre (24 a 28 semanas):</strong>",
          "  - <strong>Prueba de Tolerancia a la Glucosa Oral con 75 g de glucosa (PTGO 75g):</strong> Se realiza a todas las embarazadas normales. Si la glicemia a las 2 horas es <strong>≥ 140 mg/dL</strong> se diagnostica <strong>Diabetes Gestacional</strong>.",
          "  - Repetir VDRL y Hematocrito/Hemoglobina.",
          "• <strong>Tercer Trimestre (35 a 37 semanas):</strong>",
          "  - <strong>Cultivo Vaginorrectal para Streptococcus agalactiae (EGB):</strong> Se toma tórula en tercio inferior de vagina y a través del esfínter anal sin espéculo. Si resulta <strong>positivo</strong>, la paciente tiene indicación formal de <strong>Profilaxis Antibiótica Intraparto con Penicilina G sódica EV</strong> durante el trabajo de parto para prevenir la sepsis neonatal precoz."
        ]
      }
    ],
    "table": {
      "title": "Batería Oficial de Exámenes en el Control Prenatal (Guía Perinatal MINSAL)",
      "headers": [
        "Trimestre / Semana",
        "Exámenes Obligatorios",
        "Objetivo Clínico / Diagnóstico",
        "Conducta ante Alteración"
      ],
      "rows": [
        [
          "Ingreso (< 12 sem)",
          "Grupo/Rh, Coombs ind, VDRL, VIH, Glicemia, Urocultivo, Chagas",
          "Línea base, despistaje de ITS e ITU asintomática",
          "Tratar según patología (ej. Penicilina en sífilis)"
        ],
        [
          "11 a 14 sem",
          "Ecografía de 1.er Trimestre",
          "Aneuploidías (Translucencia Nucal) + Doppler uterinas",
          "Cálculo de riesgo de preeclampsia / Trisomías"
        ],
        [
          "20 a 24 sem",
          "Ecografía Morfológica + Cervicometría",
          "Anatomía fetal detallada + riesgo parto prematuro",
          "Pesquisa malformaciones / Progesterona si cérvix < 25mm"
        ],
        [
          "24 a 28 sem",
          "PTGO 75g (Glicemia basal y 2 horas)",
          "Tamizaje universal de Diabetes Gestacional",
          "Glicemia 2h ≥ 140 mg/dL = Dieta e insulina"
        ],
        [
          "28 sem",
          "Coombs indirecto + Profilaxis Anti-D",
          "Madres Rh(-) no sensibilizadas (Coombs negativo)",
          "Administrar Inmunoglobulina Anti-D 300 mcg IM"
        ],
        [
          "35 a 37 sem",
          "Cultivo Vaginorrectal para EGB",
          "Colonización por Streptococcus agalactiae",
          "Penicilina G EV intraparto (5 mill inicial + 2.5 mill c/4h)"
        ]
      ]
    },
    "vignette": "Primigesta de 8 semanas de gestación por FUM acude a su primer control prenatal en CESFAM. No tiene antecedentes médicos de relevancia. Trae ecografía transvaginal que informa saco gestacional intrauterino único con embrión de Longitud Céfalo-Nalgas (LCN) de 18 mm, correspondiente a 8 semanas y 2 días con latidos cardiofetales presentes (164 lpm). La paciente consulta qué vitaminas debe tomar y qué exámenes de laboratorio deben solicitarse en este control.",
    "explicacion": "La paciente ingresa a control prenatal precoz con edad gestacional confirmada por ecografía del primer trimestre. Corresponde prescribir Ácido Fólico a dosis de 0.4 a 1.0 mg/día por vía oral para prevención de defectos del tubo neural (mantener hasta las 12 semanas), e indicar que a partir de las 12-16 semanas iniciará suplementación con Carbonato de Calcio (1.000 a 1.500 mg/día de calcio elemental) para prevención de preeclampsia. Asimismo, se debe solicitar la batería completa de exámenes del primer trimestre: Grupo sanguíneo y Rh, Coombs indirecto, hemograma, VDRL/RPR, test de VIH, glicemia en ayunas, orina completa con urocultivo y tamizaje de Chagas.",
    "keyPoints": [
      "El ácido fólico en dosis de 0.4 mg/día se prescribe periconcepcional hasta las 12 semanas (5 mg/día en alto riesgo DTN).",
      "El carbonato de calcio (1.000-1.500 mg/día) se inicia a las 12-16 semanas para prevención de preeclampsia.",
      "La ecografía del primer trimestre (LCN) es el método más preciso para fechar la gestación (margen error ± 3-5 días).",
      "Glicemia en ayunas en 1.er trimestre ≥ 100-125 mg/dL en dos ocasiones define Diabetes Gestacional precoz.",
      "La PTGO con 75 g se realiza universalmente entre las semanas 24 y 28 (glicemia 2h ≥ 140 mg/dL es diagnóstica).",
      "El cultivo vaginorrectal para Streptococcus agalactiae se toma a las 35-37 semanas.",
      "Si el cultivo de EGB es positivo, se indica profilaxis antibiótica intraparto con Penicilina G EV."
    ],
    "questions": [
      {
        "stem": "Una mujer de 26 años con antecedente de un hijo previo nacido con mielomeningocele lumbosacro planifica un nuevo embarazo. Acude a consulta preconcepcional para orientación médica. ¿Cuál es la indicación de suplementación con ácido fólico recomendada para reducir el riesgo de recurrencia de defectos del tubo neural?",
        "options": [
          {
            "id": "A",
            "text": "0.4 mg al día iniciando al confirmar el test de embarazo positivo en orina"
          },
          {
            "id": "B",
            "text": "4.0 a 5.0 mg al día por vía oral, iniciado al menos 3 meses antes de la concepción y mantenido hasta las 12 semanas de gestación"
          },
          {
            "id": "C",
            "text": "1.0 mg al día durante todo el segundo y tercer trimestre exclusivamente"
          },
          {
            "id": "D",
            "text": "10 mg semanales en inyección intramuscular única"
          },
          {
            "id": "E",
            "text": "No requiere suplementación si consume cereales y harinas fortificadas"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La dosis de 0.4 mg/día es para mujeres de bajo riesgo sin antecedentes de DTN; además, iniciarlo tras la falta menstrual puede ser tardío (el tubo neural se cierra al día 28 post-concepción).\nB) Correcta. En mujeres con antecedente de un hijo previo con defecto del tubo neural (anencefalia, espina bífida, mielomeningocele), la dosis profiláctica debe incrementarse 10 veces, prescribiendo 4.0 a 5.0 mg/día de ácido fólico por vía oral, iniciado idealmente al menos 1 a 3 meses antes de la fecundación y mantenido de forma estricta durante todo el primer trimestre (hasta la semana 12), reduciendo la tasa de recurrencia en más de un 70%.\nC) Incorrecta. En el 2.° y 3.er trimestre el tubo neural ya está cerrado.\nD) Incorrecta. La vía es oral diaria.\nE) Incorrecta. La fortificación de harinas no aporta la dosis requerida para alto riesgo.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.3.001"
      },
      {
        "stem": "Una primigesta de 36 semanas de gestación acude a control prenatal habitual en APS. Se revisa el resultado del cultivo vaginorrectal tomado a las 35 semanas, el cual informa: desarrollo abundante de Streptococcus agalactiae (Streptococcus grupo B). La paciente se encuentra totalmente asintomática. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Indicar Amoxicilina oral ambulatoria por 7 días de inmediato para erradicar la bacteria"
          },
          {
            "id": "B",
            "text": "Realizar cesárea electiva de urgencia para evitar el paso del feto por el canal vaginal"
          },
          {
            "id": "C",
            "text": "Consignar el resultado en el carné prenatal e indicar que recibirá Penicilina G endovenosa durante el trabajo de parto activo"
          },
          {
            "id": "D",
            "text": "Indicar óvulos vaginales de Metronidazol por 10 noches"
          },
          {
            "id": "E",
            "text": "Repetir el cultivo vaginorrectal cada semana hasta que resulte negativo"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. El tratamiento antibiótico oral previo al parto es ineficaz porque el germen recoloniza la vagina y el recto en pocos días desde el reservorio gastrointestinal.\nB) Incorrecta. La colonización por EGB no es indicación de cesárea.\nC) Correcta. La colonización vaginorrectal asintomática por Streptococcus agalactiae no se trata antes del parto. La conducta normada internacionalmente y por el MINSAL es consignar la condición de 'Cultivo EGB positivo' e indicar que al ingresar en trabajo de parto activo o con rotura de membranas recibirá Profilaxis Antibiótica Intraparto con Penicilina G sódica EV (dosis de carga de 5 millones de UI seguida de 2.5 a 3 millones cada 4 horas hasta el parto) para prevenir la transmisión vertical y sepsis neonatal precoz.\nD) Incorrecta. El metronidazol no tiene actividad contra Streptococcus.\nE) Incorrecta. No se repite el cultivo; una vez positivo, se asume colonizada para el parto.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.3.001"
      }
    ]
  },
  {
    "id": "ob-02",
    "classId": "ob-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Control Prenatal & Evaluación Fetal",
    "topicLabel": "19.2",
    "title": "Ecografía Obstétrica: 11-14 Semanas (Aneuploidías y Doppler Uterino) & 20-24 Semanas (Morfológica y Cervicometría)",
    "perfilCode": "3.01.4.003",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Exámenes ecográficos obligatorios del Programa de Salud de la Mujer (MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#38) · EUNACOM Diciembre 2022 (Q#50)",
    "frecuencia": "Alta rentabilidad · Medición de Translucencia Nucal, Doppler de arterias uterinas y riesgo de parto prematuro por cervicometría",
    "svg": null,
    "algoTitle": "Algoritmo de Pesquisa y Marcadores en las Ecografías Clave del Embarazo (11-14 y 20-24 Semanas)",
    "diagramRows": [
      {
        "t": "Ecografía de las 11 a 13+6 Semanas (LCN 45 a 84 mm)",
        "s": "Hitos: Fechado exacto de EG · Marcadores de aneuploidías · Doppler de arterias uterinas",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Hallazgos de la Ecografía 11-14 Semanas",
        "al": "Marcadores 11-14 Semanas",
        "ll": "Translucencia Nucal (TN) Aumentada (≥ 3 mm o > P95)",
        "left": {
          "t": "Riesgo de Trisomías (21, 18, 13) y Cardiopatías",
          "s": "Evaluar hueso nasal, ductus venoso · Derivar a Genética / Biopsia de vellosidades o Amniocentesis",
          "type": "crit"
        },
        "rl": "Doppler de Arterias Uterinas Alterado (IP medio > P95)",
        "right": {
          "t": "Riesgo de Preeclampsia Precoz y RCF",
          "s": "Indicar Aspirina (AAS) 150 mg/noche antes de las 16 semanas para reducir preeclampsia severa",
          "type": "warn"
        }
      },
      {
        "t": "Ecografía de las 20 a 24 Semanas: Morfológica y Cervicometría",
        "s": "Evaluación anatómica completa de órganos y sistemas · Medición de Longitud Cervical por ecografía transvaginal",
        "type": "dec"
      },
      {
        "t": "Cervicometría Corta (< 25 mm)",
        "s": "Marcador mayor de Parto Prematuro asintomático -> Progesterona micronizada vaginal 200 mg/noche hasta sem 36",
        "type": "crit"
      }
    ],
    "contexto": "La ecografía obstétrica es el pilar de la medicina materno-fetal moderna. Existen dos ecografías de tamizaje universal insustituibles en la embarazada chilena: la ecografía de 11 a 14 semanas (screening combinado de aneuploidías mediante translucencia nucal y de preeclampsia precoz mediante Doppler de arterias uterinas para indicación de aspirina) y la ecografía de 20 a 24 semanas (evaluación anatómica fetal detallada y medición de longitud cervical transvaginal para prevención de parto prematuro con progesterona).",
    "contentSections": [
      {
        "subhead": "1. Ecografía de 11 a 13+6 Semanas: Tamizaje de Aneuploidías y Preeclampsia",
        "paragraphs": [
          "Se realiza con una Longitud Céfalo-Nalgas (LCN) entre 45 y 84 mm:",
          "• <strong>1) Marcadores Ecográficos de Aneuploidías (Síndrome de Down / Trisomía 21, 18 y 13):</strong>",
          "  - <strong>Translucencia Nucal (TN):</strong> Espacio sonolúcido entre la piel y el tejido blando retrocervical. Se considera patológica si es <strong>≥ 3.0 mm (o > percentil 95 para la LCN)</strong>. Su engrosamiento se asocia fuertemente a <strong>Trisomía 21</strong>, cardiopatías congénitas mayores y síndromes genéticos (Turner, Noonan).",
          "  - <strong>Hueso Nasal:</strong> La ausencia de visualización del hueso nasal en este examen aumenta el riesgo de trisomía 21.",
          "  - <strong>Ductus Venoso:</strong> Onda de flujo reversa de la onda 'a' durante la sístole auricular.",
          "  - <strong>Regurgitación Tricuspídea:</strong> Flujo retrógrado sistólico patológico.",
          "• <strong>2) Doppler de Arterias Uterinas (Screening de Preeclampsia):</strong>",
          "  - Evalúa la invasión trofoblástica de las arterias espirales maternas.",
          "  - Si el <strong>Índice de Pulsatilidad (IP) medio de las arterias uterinas se encuentra sobre el percentil 95</strong> (o con notch bilateral persistente): indica alto riesgo de desarrollar <strong>Preeclampsia Precoz (< 34 sem) y RCF severo</strong>.",
          "  - <strong>Intervención Farmacológica Demostrada:</strong> <strong>Ácido Acetilsalicílico (Aspirina) 150 mg al día por vía oral por las noches</strong>, iniciada <strong>ANTES de la semana 16 de gestación</strong> (idealmente entre 11 y 14 sem) y suspendida a la semana 36. Reduce la preeclampsia pretérmino en más del 60-70%."
        ]
      },
      {
        "subhead": "2. Ecografía de 20 a 24 Semanas: Morfológica y Cervicometría",
        "paragraphs": [
          "• <strong>1) Evaluación Anatómica y Malformaciones Fetales:</strong>",
          "  - Examen sistemático de cabeza y encéfalo (ventrículos laterales < 10 mm, cerebelo, cisterna magna), cara (labio leporino y paladar hendido), tórax y corazón (corte de cuatro cámaras y tractos de salida de grandes vasos), pared abdominal (descarte de onfalocele y gastrosquisis), riñones/vejiga y extremidades.",
          "  - Se evalúa la anatomía placentaria (descartar placenta previa) y volumen de líquido amniótico.",
          "• <strong>2) Cervicometría Transvaginal (Screening de Parto Prematuro):</strong>",
          "  - Medición de la longitud del canal endocervical cerrado mediante <strong>ecografía transvaginal</strong> con vejiga vacía.",
          "  - <strong>Definición de Cuello Corto:</strong> Longitud cervical <strong>menor a 25 mm (< 2.5 cm)</strong> antes de las 24 semanas.",
          "  - <strong>Conducta Inmediata Comprobada:</strong> Prescripción de <strong>Progesterona Natural Micronizada vaginal (200 mg cada noche)</strong> administrada hasta la semana 36. En pacientes con cuello corto asintomático, la progesterona reduce en un 40-50% el riesgo de parto prematuro espontáneo antes de las 34 semanas."
        ]
      }
    ],
    "table": {
      "title": "Comparación de las Dos Ecografías Universales Clave del Embarazo",
      "headers": [
        "Parámetro",
        "Ecografía de 11 a 13+6 Semanas",
        "Ecografía de 20 a 24 Semanas"
      ],
      "rows": [
        [
          "Vía de Examen",
          "Abdominal y/o Transvaginal",
          "Abdominal + Transvaginal (cérvix)"
        ],
        [
          "Objetivo Fetal",
          "Aneuploidías (TN, Hueso nasal, Ductus)",
          "Anatomía de órganos y malformaciones"
        ],
        [
          "Objetivo Materno",
          "Doppler uterinas (Riesgo preeclampsia)",
          "Cervicometría (Riesgo parto prematuro)"
        ],
        [
          "Marcador Patológico",
          "TN ≥ 3 mm / IP uterinas > P95",
          "Malformación / Cuello uterino < 25 mm"
        ],
        [
          "Intervención Terapéutica",
          "Aspirina 150 mg/noche (si Doppler alterado)",
          "Progesterona vaginal 200 mg/noche (cuello corto)"
        ]
      ]
    },
    "vignette": "Secundigesta de 12 semanas de gestación por FUM. Se realiza la ecografía de screening de 11 a 14 semanas. El informe describe: feto único con LCN de 62 mm. La Translucencia Nucal (TN) mide 1.6 mm y el hueso nasal está presente. En el Doppler de arterias uterinas se constata un Índice de Pulsatilidad (IP) medio bilateral de 2.45, lo que se sitúa por encima del percentil 95 para la edad gestacional con persistencia de notch protodiastólico bilateral.",
    "explicacion": "El feto presenta marcadores de aneuploidías normales (TN normal y hueso nasal presente), pero el Doppler de arterias uterinas alterado con IP medio > percentil 95 traduce una invasión trofoblástica defectuosa de las arterias espirales, clasificando a la paciente como de alto riesgo para desarrollar Preeclampsia Precoz y Restricción de Crecimiento Fetal. La conducta médica protocolizada y con sólida evidencia es iniciar de inmediato tratamiento profiláctico con Ácido Acetilsalicílico (Aspirina) a dosis de 150 mg al día por vía oral en la noche antes de cumplir las 16 semanas de gestación, manteniéndola hasta la semana 36.",
    "keyPoints": [
      "La ecografía 11-14 sem evalúa la Translucencia Nucal (patológica ≥ 3 mm) y Doppler de arterias uterinas.",
      "Doppler de uterinas alterado (> P95) es indicación de Aspirina 150 mg/noche antes de la semana 16.",
      "La Aspirina iniciada precozmente reduce drásticamente la preeclampsia prematura (< 34 semanas).",
      "La ecografía 20-24 sem realiza el estudio anatómico morfológico fetal y la cervicometría transvaginal.",
      "Cuello uterino corto (< 25 mm) antes de las 24 semanas es indicación de Progesterona vaginal 200 mg/noche.",
      "La translucencia nucal aumentada se asocia a Trisomía 21, Trisomía 18 y cardiopatías congénitas.",
      "La cervicometría debe medirse siempre por vía transvaginal con la vejiga vacía."
    ],
    "questions": [
      {
        "stem": "A una primigesta de 12 semanas se le realiza la ecografía de primer trimestre. Se constata Doppler de arterias uterinas patológico con un Índice de Pulsatilidad medio superior al percentil 95. ¿Cuál es la intervención preventiva con mayor evidencia para reducir el riesgo de desarrollar preeclampsia severa y restricción de crecimiento fetal?",
        "options": [
          {
            "id": "A",
            "text": "Reposo absoluto en cama en decúbito lateral izquierdo"
          },
          {
            "id": "B",
            "text": "Iniciar Ácido Acetilsalicílico (Aspirina) a dosis de 150 mg al día por vía oral antes de las 16 semanas"
          },
          {
            "id": "C",
            "text": "Iniciar Enoxaparina subcutánea a dosis de anticoagulación plena"
          },
          {
            "id": "D",
            "text": "Dieta hiposódica estricta sin sal y diuréticos tiazídicos"
          },
          {
            "id": "E",
            "text": "Prescribir Nifedipino oral como antihipertensivo profiláctico"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El reposo en cama no previene la preeclampsia y aumenta el riesgo de trombosis venosa profunda.\nB) Correcta. El ensayo clínico internacional ASPRE y las guías del MINSAL y de la FIGO establecen que en pacientes identificadas con alto riesgo de preeclampsia mediante Doppler de arterias uterinas alterado (> P95) en el primer trimestre, la administración de Ácido Acetilsalicílico (Aspirina) a dosis de 100 a 150 mg al día por las noches, iniciada antes de las 16 semanas de gestación y mantenida hasta las 36 semanas, reduce en más del 60 al 70% la incidencia de preeclampsia pretérmino y restricción de crecimiento fetal asociada.\nC) Incorrecta. La heparina solo se indica en síndrome antifosfolípido o trombofilias específicas.\nD) Incorrecta. La restricción de sodio y los diuréticos están contraindicados en el embarazo por depleción de volumen plasmático.\nE) Incorrecta. Los antihipertensivos no previenen la preeclampsia, solo tratan la crisis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.4.003"
      },
      {
        "stem": "Durante la ecografía morfológica de las 22 semanas en una paciente asintomática sin antecedentes mórbidos, se realiza cervicometría transvaginal que informa una longitud endocervical cerrada de 18 mm. ¿Cuál es la conducta terapéutica indicada para prevenir el parto prematuro?",
        "options": [
          {
            "id": "A",
            "text": "Cerclaje cervical de emergencia inmediato"
          },
          {
            "id": "B",
            "text": "Indicar Progesterona natural micronizada por vía vaginal a 200 mg diarios cada noche hasta la semana 36"
          },
          {
            "id": "C",
            "text": "Hospitalización e inicio de tocolíticos orales con nifedipino profiláctico"
          },
          {
            "id": "D",
            "text": "Indicar reposo domiciliario relativo sin medicamentos"
          },
          {
            "id": "E",
            "text": "Instalación de pesario cervical sin progesterona"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El cerclaje se reserva para incompetencia cervical demostrada (antecedente de abortos tardíos o partos prematuros previos recurrentes con cuello dilatado).\nB) Correcta. El hallazgo incidental de un cuello uterino corto (< 25 mm por ecografía transvaginal, en este caso 18 mm) en una paciente asintomática de 22 semanas es el principal factor de riesgo para parto prematuro espontáneo. La intervención médica de primera línea avalada por el MINSAL y la evidencia científica es la administración de Progesterona natural micronizada por vía vaginal (200 mg al día al acostarse) hasta la semana 36 de gestación, reduciendo significativamente la probabilidad de parto antes de las 34 semanas.\nC) Incorrecta. Los tocolíticos solo se usan en fase aguda de contracciones activas por 48h, no de forma profiláctica.\nD) Incorrecta. El reposo exclusivo es ineficaz.\nE) Incorrecta. La progesterona es el pilar de primera línea.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.4.003"
      }
    ]
  },
  {
    "id": "ob-03",
    "classId": "ob-03",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Control Prenatal & Evaluación Fetal",
    "topicLabel": "19.3",
    "title": "Evaluación del Bienestar Fetal: Registro Basal No Estresante (RBNE), Perfil Biofísico (Manning) y Doppler Fetal",
    "perfilCode": "3.01.5.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Procedimientos de monitorización anteparto en alto riesgo obstétrico (ARO).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#42) · EUNACOM Julio 2023 (Q#15)",
    "frecuencia": "Alta rentabilidad · Interpretación de RBNE reactivo vs no reactivo y componentes del Perfil Biofísico",
    "svg": null,
    "algoTitle": "Algoritmo Secuencial de Monitoreo y Evaluación del Bienestar Fetal Anteparto (RBNE y PBF)",
    "diagramRows": [
      {
        "t": "Embarazada de Tercer Trimestre con Indicación de Monitoreo Fetal",
        "s": "Patología materna (HTA, diabetes), sospecha de RCF, colestasia o disminución de MF",
        "type": "acc"
      },
      {
        "t": "Registro Basal No Estresante (RBNE / Monitoreo Cardiofetal Anteparto)",
        "s": "Trazado de 20 a 40 minutos: FCF basal (110-160 lpm), Variabilidad (6-25 lpm), Aceleraciones",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Clasificación del Trazado del RBNE",
        "al": "RBNE Reactivo vs No Reactivo",
        "ll": "RBNE Reactivo (Normal)",
        "left": {
          "t": "Feto Vigoroso y Oxigenado",
          "s": "≥ 2 aceleraciones de ≥ 15 lpm por ≥ 15 seg en 20 min con buena variabilidad · Repetir según patología",
          "type": "acc"
        },
        "rl": "RBNE No Reactivo (Sospechoso)",
        "right": {
          "t": "Falta de Aceleraciones o Variabilidad Mínima",
          "s": "Estimular feto / prolongar a 40 min (descartar sueño fetal) -> Si persiste: Realizar Perfil Biofísico o Doppler",
          "type": "warn"
        }
      },
      {
        "t": "Perfil Biofísico Fetal (Score de Manning de 10 Puntos)",
        "s": "Ecografía: Movimientos respiratorios, movimientos corporales, tono fetal, líquido amniótico + RBNE · Si Score ≤ 4: Hipoxia grave",
        "type": "crit"
      }
    ],
    "contexto": "La evaluación del bienestar fetal anteparto tiene como objetivo identificar precozmente la hipoxia y acidosis fetal para intervenir oportunamente antes de que se produzca la muerte fetal intrauterina o secuelas neurológicas permanentes. Las tres herramientas cardinales son el Registro Basal No Estresante (RBNE), el Perfil Biofísico Fetal (PBF de Manning) y la velocimetría Doppler fetal. El médico general debe saber interpretar los criterios de un RBNE reactivo, el significado del ciclo sueño-vigilia fetal y los componentes ecográficos del PBF.",
    "contentSections": [
      {
        "subhead": "1. Registro Basal No Estresante (RBNE / Non-Stress Test)",
        "paragraphs": [
          "Evalúa la integridad del sistema nervioso autónomo simpático y parasimpático fetal y su respuesta hemodinámica a los movimientos fetales en un feto sin trabajo de parto (sin estrés contráctil):",
          "• <strong>Parámetros Evaluados en 20 a 40 Minutos:</strong>",
          "  1) <strong>Frecuencia Cardíaca Fetal Basal:</strong> Normal entre <strong>110 y 160 latidos por minuto</strong> (taquicardia > 160 lpm; bradicardia < 110 lpm).",
          "  2) <strong>Variabilidad de la FCF:</strong> Fluctuaciones latido a latido. La <strong>variabilidad moderada (normal) es de 6 a 25 lpm</strong> (refleja oxigenación cerebral intacta). Variabilidad mínima (< 5 lpm) o silente es signo de hipoxia o sueño; variabilidad ausente es alarma extrema.",
          "  3) <strong>Aceleraciones Transitorias:</strong> Aumento transitorio de la FCF de <strong>al menos 15 latidos por minuto por encima de la basal, con una duración de al menos 15 segundos (Regla 15 x 15)</strong> (en < 32 semanas se acepta 10 x 10).",
          "  4) <strong>Desaceleraciones:</strong> En condiciones basales normales <strong>NO deben existir desaceleraciones</strong>.",
          "• <strong>Interpretación:</strong>",
          "  - <strong>RBNE Reactivo (Normal):</strong> <strong>Dos o más aceleraciones (15 lpm x 15 seg) en 20 minutos</strong>, con FCF basal normal (110-160) y variabilidad moderada (6-25 lpm). Tiene un valor predictivo negativo de muerte fetal en los siguientes 7 días > 99%.",
          "  - <strong>RBNE No Reactivo:</strong> Ausencia de aceleraciones tras 40 minutos de registro. Causa benigna más frecuente: <em>Ciclo de sueño profundo fisiológico fetal</em> (dura 20-40 min). Requiere estimulación vibroacústica o extender el registro; si persiste no reactivo, indica prueba complementaria (PBF o Doppler)."
        ]
      },
      {
        "subhead": "2. Perfil Biofísico Fetal (PBF / Score de Manning)",
        "paragraphs": [
          "Combina la monitorización electrónica con la ecografía en tiempo real durante un período máximo de 30 minutos. Evalúa <strong>5 variables (cada una otorga 2 puntos si es normal o 0 puntos si es anormal)</strong>:",
          "1) <strong>Reactividad Cardíaca (RBNE):</strong> ≥ 2 aceleraciones en 20-40 min (2 pts).",
          "2) <strong>Movimientos Respiratorios Fetales:</strong> Al menos 1 episodio de respiración continua de ≥ 30 segundos (2 pts).",
          "3) <strong>Movimientos Corporales Fetales:</strong> Al menos 3 movimientos corporales o de extremidades (2 pts).",
          "4) <strong>Tono Fetal:</strong> Al menos 1 episodio de extensión activa con retorno a la flexión de extremidades o tronco, o apertura y cierre de mano (2 pts).",
          "5) <strong>Volumen de Líquido Amniótico:</strong> Al menos 1 bolsillo vertical de líquido libre de cordón de <strong>≥ 2 cm de profundidad</strong> (o ILA entre 5 y 24 cm) (2 pts).",
          "• <strong>Interpretación y Conducta Clínica:</strong>",
          "  - <strong>10/10 u 8/10 (con líquido amniótico normal):</strong> Feto sano, sin riesgo de asfixia. Manejo conservador.",
          "  - <strong>8/10 (con oligohidramnios / LA = 0 pts):</strong> Marcador de hipoxia crónica o compromiso placentario crónico. Considerar interrupción si embarazo de término.",
          "  - <strong>6/10:</strong> Sospecha de asfixia fetal. Si es de término, interrumpir el embarazo; si es pretérmino, repetir en 24 horas o evaluar con Doppler.",
          "  - <strong>≤ 4/10:</strong> <strong>Alta probabilidad de asfixia fetal grave inminente</strong>. Indicación formal de <strong>interrupción inmediata del embarazo</strong>."
        ]
      }
    ],
    "table": {
      "title": "Score de Perfil Biofísico Fetal de Manning (Criterios Ecográficos y de Monitoreo)",
      "headers": [
        "Variable Biofísica",
        "Criterio Normal (2 Puntos)",
        "Criterio Anormal (0 Puntos)",
        "Centro Neurológico Regulador"
      ],
      "rows": [
        [
          "Movimientos Respiratorios",
          "≥ 1 episodio de ≥ 30 segundos en 30 min",
          "Ausentes o < 30 segundos de duración",
          "Centro respiratorio del bulbo (sensible a hipoxia)"
        ],
        [
          "Movimientos Corporales",
          "≥ 3 movimientos gruesos de cuerpo/miembros",
          "< 3 movimientos en 30 minutos",
          "Corteza cerebral y núcleos motores"
        ],
        [
          "Tono Muscular Fetal",
          "≥ 1 flexión activa con retorno elástico",
          "Extensión lenta sin flexión o flacidez",
          "Corteza motora subcortical (el más resistente)"
        ],
        [
          "Reactividad FCF (RBNE)",
          "≥ 2 aceleraciones de ≥ 15 lpm x 15 seg",
          "< 2 aceleraciones en 40 minutos",
          "Hipotálamo y sistema nervioso autónomo"
        ],
        [
          "Líquido Amniótico",
          "Bolsillo vertical único ≥ 2 cm (ILA 5-24)",
          "Bolsillo máximo < 2 cm (Oligohidramnios)",
          "Perfusión renal fetal (reflejo de hipoxia crónica)"
        ]
      ]
    },
    "vignette": "Embarazada de 38 semanas, con diagnóstico de diabetes gestacional en tratamiento dietético con buen control metabólico. Acude a control de bienestar fetal programado. Se instala monitor cardiofetal durante 20 minutos: FCF basal de 135 lpm, variabilidad de 10-12 lpm, sin desaceleraciones y se registran 3 aceleraciones de la FCF de 20 lpm sobre la basal con una duración de 25 segundos asociadas a movimientos fetales activos percibidos por la madre.",
    "explicacion": "El trazado cardiofetal cumple con la totalidad de los criterios de un Registro Basal No Estresante (RBNE) Reactivo: frecuencia cardíaca basal en rango normal (110-160 lpm), variabilidad moderada preservada (6-25 lpm), ausencia de desaceleraciones patológicas y presencia de ≥ 2 aceleraciones transitorias que cumplen con la regla de 15 lpm por encima de la basal durante al menos 15 segundos en 20 minutos. Un RBNE reactivo tiene un valor predictivo de bienestar fetal superior al 99% para la siguiente semana, por lo que la conducta adecuada es continuar con el control prenatal ambulatorio habitual.",
    "keyPoints": [
      "RBNE Reactivo: ≥ 2 aceleraciones (aumento ≥ 15 lpm por ≥ 15 seg) en 20 minutos con FCF 110-160 y variabilidad 6-25.",
      "La causa benigna más frecuente de RBNE no reactivo es el ciclo de sueño profundo fetal (dura 20-40 min).",
      "Perfil Biofísico de Manning evalúa 5 parámetros (cada uno 2 puntos): RBNE, respiración, movimientos, tono y líquido amniótico.",
      "Un PBF de 10/10 u 8/10 con líquido normal indica ausencia de asfixia fetal.",
      "Un PBF ≤ 4/10 indica asfixia fetal severa e interrupción inmediata del embarazo.",
      "El oligohidramnios (bolsillo vertical < 2 cm) es un marcador de hipoperfusión renal fetal crónica.",
      "El tono fetal es el último parámetro en perderse en la cascada de hipoxia fetal progresiva."
    ],
    "questions": [
      {
        "stem": "Se realiza un Registro Basal No Estresante (RBNE) a una embarazada de 37 semanas por disminución transitoria de movimientos fetales. En los primeros 20 minutos de trazado se observa: FCF basal de 130 lpm, variabilidad de 8 lpm, ausencia de aceleraciones y ausencia de desaceleraciones. ¿Cuál es la conducta médica inmediata más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Indicar cesárea de urgencia por sufrimiento fetal agudo"
          },
          {
            "id": "B",
            "text": "Prolongar el registro por 20 minutos adicionales y aplicar estímulo acústico o táctil al feto para descartar ciclo de sueño fisiológico"
          },
          {
            "id": "C",
            "text": "Hospitalizar en UCI de adultos para infusión de sulfato de magnesio"
          },
          {
            "id": "D",
            "text": "Considerar el examen 100% normal y dar el alta definitiva sin más controles"
          },
          {
            "id": "E",
            "text": "Administrar un bolo de 1.000 mL de suero fisiológico y realizar amniocentesis"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La cesárea de entrada sin confirmar hipoxia es una conducta precipitada e injustificada.\nB) Correcta. El ciclo de sueño profundo fetal dura normalmente entre 20 y 40 minutos, durante el cual es fisiológico que no se produzcan aceleraciones de la frecuencia cardíaca. La guía de monitorización fetal establece que ante un trazado no reactivo en los primeros 20 minutos con variabilidad normal, se debe prolongar el registro durante 20 minutos adicionales (completando 40 min) y aplicar estímulo vibroacústico o mecánico suave para despertar al feto. Si tras 40 minutos persiste sin reactividad, se procede a realizar un Perfil Biofísico o Doppler.\nC) Incorrecta. El sulfato de magnesio es neuroprotector o anticonvulsivante en preeclampsia, no indicado aquí.\nD) Incorrecta. El examen aún no cumple criterios de reactividad.\nE) Incorrecta. Inadecuado.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.5.009"
      },
      {
        "stem": "En una paciente de 36 semanas con sospecha de deterioro de la función placentaria se realiza un Perfil Biofísico Fetal ecográfico de Manning. Se obtienen los siguientes resultados: sin movimientos respiratorios en 30 min (0 pts), 1 movimiento corporal único (0 pts), tono flexor conservado (2 pts), líquido amniótico con bolsillo vertical máximo de 0.8 cm (0 pts) y RBNE no reactivo (0 pts). Puntaje total: 2/10. ¿Cuál es la conducta clínica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Repetir el examen en 48 horas en forma ambulatoria"
          },
          {
            "id": "B",
            "text": "Interrupción inmediata del embarazo por riesgo crítico de asfixia y óbito fetal"
          },
          {
            "id": "C",
            "text": "Indicar reposo en cama e hidratación oral con abundante agua"
          },
          {
            "id": "D",
            "text": "Administrar betametasona y diferir el parto por al menos 5 días"
          },
          {
            "id": "E",
            "text": "Iniciar antibióticos profilácticos orales y control semanal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Con 2/10 el feto está en asfixia crítica y fallecerá antes de 48 horas.\nB) Correcta. En el Score de Perfil Biofísico Fetal de Manning, un puntaje de ≤ 4/10 (en este caso 2/10 con oligohidramnios severo) es diagnóstico de asfixia fetal severa inminente y traduce acidosis metabólica profunda. La conducta oficial mandataria e inmediata es la interrupción urgente del embarazo por la vía más expedita (habitualmente cesárea de emergencia en centro terciario con neonatólogo en sala de partos).\nC) Incorrecta. La hidratación no corrige la asfixia fetal.\nD) Incorrecta. A las 36 semanas el feto está prácticamente maduro y el riesgo de asfixia supera con creces cualquier beneficio de esperar corticoides.\nE) Incorrecta. No es una patología infecciosa.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.5.009"
      }
    ]
  },
  {
    "id": "ob-04",
    "classId": "ob-04",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Control Prenatal & Evaluación Fetal",
    "topicLabel": "19.4",
    "title": "Restricción del Crecimiento Fetal (RCF): Fisiopatología, RCF Precoz vs Tardío y Velocimetría Doppler",
    "perfilCode": "3.01.1.010",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Patología de Alto Riesgo Obstétrico (ARO) con indicación de manejo en nivel secundario/terciario.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#39) · EUNACOM Julio 2023 (Q#14) · EUNACOM Diciembre 2022 (Q#28)",
    "frecuencia": "Máxima rentabilidad · Diferenciación estricta entre PEG Constitucional y RCF patológico mediante Doppler",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico, Etapificación Doppler e Interrupción en Restricción de Crecimiento Fetal",
    "diagramRows": [
      {
        "t": "Sospecha de Feto con Crecimiento Insuficiente",
        "s": "Estimación de Peso Fetal (EPF) por ecografía < Percentil 10 para la edad gestacional",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Diferenciación: PEG Constitucional vs RCF Patológico",
        "al": "PEG Constitucional vs RCF",
        "ll": "EPF entre P3 y P10 con Doppler Normal",
        "left": {
          "t": "Pequeño para la Edad Gestacional (PEG)",
          "s": "Feto constitucionalmente pequeño · Doppler de arteria umbilical y cerebral normal · Excelente pronóstico",
          "type": "acc"
        },
        "rl": "EPF < P3 O Doppler Alterado (Cualquier percentil)",
        "right": {
          "t": "Restricción de Crecimiento Fetal (RCF)",
          "s": "RCF Tipo I (Precoz < 32 sem: falla placentaria masiva) vs RCF Tipo II (Tardío ≥ 32 sem: hipoxia aguda)",
          "type": "crit"
        }
      },
      {
        "t": "Etapificación Doppler Fetal Progresiva (Barcelona / MINSAL)",
        "s": "Etapa I (Leve): Umbilical > P95 o ACM < P5 · Etapa II (Severa): Diástole ausente en AU · Etapa III: Diástole reversa en AU · Etapa IV: Ductus venoso reverso",
        "type": "dec"
      },
      {
        "t": "Criterios de Interrupción según Etapa Doppler y Semanas",
        "s": "Etapa I: sem 37 · Etapa II: sem 34 · Etapa III: sem 30 · Etapa IV: sem 26-28 con corticoides + Sulfato Mg",
        "type": "warn"
      }
    ],
    "contexto": "La Restricción del Crecimiento Fetal (RCF) se define como la incapacidad del feto para alcanzar su potencial genético de crecimiento debido a una noxa biológica, predominantemente una insuficiencia placentaria crónica. Es una de las principales causas de óbito fetal, prematuridad iatrogénica y asfixia intraparto. El médico general debe saber que no todo feto pequeño es patológico: el Pequeño para la Edad Gestacional (PEG) constitucional tiene Doppler normal y no requiere adelantar el parto, mientras que el RCF presenta alteración hemodinámica progresiva en la velocimetría Doppler que determina el momento exacto de la interrupción.",
    "contentSections": [
      {
        "subhead": "1. Definiciones: PEG Constitucional vs RCF Verdadero",
        "paragraphs": [
          "• <strong>Pequeño para la Edad Gestacional Constitucional (PEG):</strong> Estimación de Peso Fetal (EPF) situada entre el <strong>Percentil 3 y el Percentil 10</strong> para la edad gestacional, con <strong>Velocimetría Doppler de la arteria umbilical, arteria cerebral media y arterias uterinas estrictamente NORMAL</strong>, volumen de líquido amniótico normal y curva de crecimiento que mantiene su propio canal. Es una variante fisiológica (feto genéticamente pequeño), no tiene riesgo de asfixia y se maneja con parto a término (semana 39-40).",
          "• <strong>Restricción del Crecimiento Fetal (RCF Patológico):</strong>",
          "  - Se diagnostica formalmente ante cualquiera de los siguientes criterios:",
          "    1) <strong>EPF < Percentil 3</strong> para la edad gestacional (por sí solo, independientemente del Doppler).",
          "    2) <strong>EPF entre Percentil 3 y 10 ASOCIADO a Doppler patológico</strong> (Índice de pulsatilidad de arteria umbilical > P95, o vasodilatación cerebral media < P5, o relación cerebro-placentaria < P5, o Doppler de uterinas > P95).",
          "    3) Caída de más de dos canales percentilares de crecimiento en ecografías seriadas."
        ]
      },
      {
        "subhead": "2. Clasificación Clínica: RCF Precoz vs RCF Tardío",
        "paragraphs": [
          "• <strong>RCF Precoz (Tipo I, debut < 32 semanas):</strong>",
          "  - <strong>Fisiopatología:</strong> Falla severa y masiva en la remodelación de las arterias espirales uterinas (placentación defectuosa profunda).",
          "  - Alta asociación con <strong>Preeclampsia severa</strong> (50-70%).",
          "  - <em>Comportamiento Doppler:</em> Sigue una secuencia cronológica predecible y ordenada de deterioro hemodinámico: Arteria Umbilical -> Arteria Cerebral Media -> Ductus Venoso.",
          "  - Desafío clínico: La prematurez extrema contra el riesgo de hipoxia intrauterina.",
          "• <strong>RCF Tardío (Tipo II, debut ≥ 32 semanas, típicamente a término):</strong>",
          "  - <strong>Fisiopatología:</strong> Insuficiencia placentaria leve a moderada por senescencia placentaria difusa.",
          "  - Baja asociación con preeclampsia.",
          "  - <em>Comportamiento Doppler:</em> La arteria umbilical suele ser normal. El marcador cardinal es la <strong>Vasodilatación de la Arteria Cerebral Media (ACM < P5)</strong> y alteración del ratio cerebro-placentario (cerebral protection effect).",
          "  - Desafío clínico: Alta tasa de hipoxia aguda y óbito intraparto en fetos que pasan desapercibidos."
        ]
      },
      {
        "subhead": "3. Secuencia de Deterioro Doppler y Etapificación (Consenso Barcelona / MINSAL)",
        "paragraphs": [
          "El Doppler evalúa la adaptación vascular fetal a la hipoxemia progresiva:",
          "• <strong>1) Arteria Umbilical (AU):</strong> Refleja la resistencia del lecho vascular placentario. Inicialmente se observa aumento de resistencia (IP > P95); con el avance de la obliteración capilar vellosa se produce <strong>flujo de fin de diástole ausente</strong>, y en estadios extremos <strong>flujo reverso diastólico</strong> (asociado a >50% de mortalidad fetal).",
          "• <strong>2) Arteria Cerebral Media (ACM):</strong> Ante hipoxemia, el feto redistribuye el flujo hacia órganos nobles (cerebro, miocardio y suprarrenales), produciendo vasodilatación cerebral manifestada por <strong>disminución de la resistencia en la ACM (IP < P5)</strong> (efecto protector cerebral).",
          "• <strong>3) Ductus Venoso (DV):</strong> Refleja la precarga y función del ventrículo derecho. Ante acidosis y falla miocárdica terminal se produce una <strong>onda 'a' reversa</strong> en el ductus venoso (máxima urgencia de interrupción inmediata en menos de 24-48 horas).",
          "<strong>Etapificación y Momento de Interrupción Programada:</strong>",
          "• <strong>Etapa I (RCF Leve):</strong> Doppler umbilical > P95 o ACM < P5. Parto a las <strong>37 semanas</strong>.",
          "• <strong>Etapa II (RCF Severo):</strong> Flujo ausente en diástole en arteria umbilical. Parto a las <strong>34 semanas</strong> (tras corticoides).",
          "• <strong>Etapa III (RCF de Alto Riesgo):</strong> Flujo reverso en diástole en arteria umbilical. Parto a las <strong>30 semanas</strong> por cesárea.",
          "• <strong>Etapa IV (Falla Fetal Inminente):</strong> Onda 'a' reversa en ductus venoso o variabilidad silente en RBNE. Parto a las <strong>26-28 semanas</strong> inmediato previa neuroprotección con Sulfato de Magnesio."
        ]
      }
    ],
    "table": {
      "title": "Diferencias Cardinales entre PEG Constitucional y RCF Patológico",
      "headers": [
        "Característica",
        "Pequeño para EG Constitucional (PEG)",
        "Restricción Crecimiento Fetal (RCF)"
      ],
      "rows": [
        [
          "Percentil de Peso (EPF)",
          "Percentil 3 a 10",
          "< P3 o P3-P10 con Doppler alterado"
        ],
        [
          "Velocimetría Doppler",
          "Estrictamente normal en todos los vasos",
          "Patológico (Umbilical > P95, ACM < P5, etc.)"
        ],
        [
          "Líquido Amniótico",
          "Normal (ILA 5 a 24 cm)",
          "Frecuentemente oligohidramnios"
        ],
        [
          "Monitoreo Cardiofetal",
          "Reactivo con buena variabilidad",
          "Desaceleraciones / Pérdida de variabilidad"
        ],
        [
          "Asociación con Preeclampsia",
          "Nula",
          "Muy alta (especialmente en RCF precoz)"
        ],
        [
          "Momento del Parto",
          "Término espontáneo (39 a 40 semanas)",
          "Interrupción programada según etapa Doppler"
        ]
      ]
    },
    "severityTable": {
      "title": "Etapificación Doppler del RCF y Criterios de Interrupción (Consenso de Barcelona / MINSAL)",
      "headers": [
        "Etapa Clínica",
        "Hallazgos en Velocimetría Doppler",
        "Mecanismo Fisiopatológico",
        "Edad Gestacional de Interrupción"
      ],
      "rows": [
        [
          "Etapa I (Insuficiencia Leve)",
          "IP arteria umbilical > P95 o IP cerebral media < P5",
          "Resistencia placentaria + redistribución cerebral",
          "Semana 37 (puede tolerar inducción)"
        ],
        [
          "Etapa II (Insuficiencia Severa)",
          "Flujo diastólico ausente en arteria umbilical en > 50% ciclos",
          "Obliteración del 60-70% del lecho vellositario",
          "Semana 34 (por Cesárea)"
        ],
        [
          "Etapa III (Falla Placentaria Crítica)",
          "Flujo diastólico reverso en arteria umbilical",
          "Obliteración masiva > 80% de vasos placentarios",
          "Semana 30 (Cesárea electiva con corticoides)"
        ],
        [
          "Etapa IV (Falla Miocárdica Terminal)",
          "Onda 'a' reversa en ductus venoso o DIP tardíos",
          "Acidosis metabólica fetal severa y falla cardíaca",
          "Semana 26 a 28 inmediata (Cesárea urgente)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Manejo Farmacológico y Neuroprotección en RCF Pretérmino",
      "headers": [
        "Fármaco / Intervención",
        "Indicación Específica",
        "Dosis y Vía de Administración",
        "Beneficio Perinatal Demostrado"
      ],
      "rows": [
        [
          "Betametasona",
          "Maduración pulmonar en < 34 semanas",
          "12 mg IM cada 24 horas x 2 dosis",
          "Reduce EMH, hemorragia intraventricular y muerte"
        ],
        [
          "Sulfato de Magnesio",
          "Neuroprotección fetal en parto < 32 semanas",
          "Bolo 4-5 g EV en 30 min + 1 g/h mantención",
          "Reduce parálisis cerebral y disfunción motora"
        ],
        [
          "Monitoreo Doppler Seriado",
          "Control evolutivo de la insuficiencia",
          "Cada 24h a 7 días según severidad",
          "Evita la hipoxia antes del daño permanente"
        ],
        [
          "Cesárea Electiva",
          "RCF etapas II, III y IV",
          "Vía de interrupción de elección",
          "Evita el estrés de las contracciones y asfixia"
        ]
      ]
    },
    "vignette": "Embarazada de 31 semanas, cursando su primer embarazo. En control de salud se detecta altura uterina de 25 cm (discordante para la edad gestacional). La ecografía obstétrica informa: feto único con Estimación de Peso Fetal (EPF) en percentil 2 para las 31 semanas. El líquido amniótico se encuentra disminuido con un bolsillo vertical máximo de 1.8 cm (oligohidramnios). En la velocimetría Doppler se constata ausencia de flujo diastólico en la arteria umbilical en forma persistente en ambos cuadrantes.",
    "explicacion": "La paciente presenta un feto con Estimación de Peso Fetal bajo el percentil 3 (< P3), lo que define formalmente una Restricción de Crecimiento Fetal (RCF). La velocimetría Doppler que demuestra ausencia persistente de flujo diastólico en la arteria umbilical clasifica el cuadro en Etapa II (RCF Severo). El manejo indicado a las 31 semanas consiste en hospitalizar de inmediato en Unidad de Alto Riesgo Obstétrico (ARO), administrar corticoides para maduración pulmonar fetal (Betametasona 12 mg IM cada 24 horas por 2 dosis), monitorizar con Doppler fetal y RBNE seriado, y planificar la interrupción del embarazo a las 34 semanas por vía cesárea (o antes si progresa a Etapa III o IV con flujo reverso en umbilical o ductus venoso).",
    "keyPoints": [
      "PEG constitucional: EPF entre P3 y P10 con Doppler rigurosamente normal (pronóstico excelente).",
      "RCF patológico: EPF < P3, o EPF P3-P10 con Doppler patológico, o caída de 2 canales percentilares.",
      "RCF precoz (< 32 sem): Asociado a preeclampsia y placentación defectuosa con deterioro Doppler progresivo.",
      "RCF tardío (≥ 32 sem): Asociado a vasodilatación cerebral (ACM < P5) y riesgo de hipoxia súbita intraparto.",
      "Etapa I (Doppler umbilical > P95 o ACM < P5) se interrumpe a la semana 37.",
      "Etapa II (Diástole ausente en arteria umbilical) se interrumpe a la semana 34 por cesárea.",
      "Etapa III (Diástole reversa en arteria umbilical) a las 30 sem; Etapa IV (Ductus venoso reverso) a las 26-28 semanas."
    ],
    "questions": [
      {
        "stem": "Una embarazada de 33 semanas de gestación se realiza ecografía que muestra una Estimación de Peso Fetal en el percentil 6. La velocimetría Doppler revela: arteria umbilical con Índice de Pulsatilidad normal (< P95), arteria cerebral media normal (> P5) y arterias uterinas normales. El líquido amniótico es normal. ¿Cuál es el diagnóstico más adecuado y la conducta a seguir?",
        "options": [
          {
            "id": "A",
            "text": "Restricción de crecimiento fetal severa; indicar cesárea inmediata"
          },
          {
            "id": "B",
            "text": "Pequeño para la edad gestacional constitucional (PEG); mantener controles habituales y programar parto a término (39-40 semanas)"
          },
          {
            "id": "C",
            "text": "Restricción de crecimiento fetal etapa II; hospitalizar e inducir el parto a las 34 semanas"
          },
          {
            "id": "D",
            "text": "Sufrimiento fetal agudo; realizar amniocentesis diagnóstica"
          },
          {
            "id": "E",
            "text": "Feto adecuado para la edad gestacional normal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No es una RCF severa ni requiere cesárea precoz.\nB) Correcta. El feto presenta una estimación de peso situada entre el percentil 3 y 10 (P6) pero con una velocimetría Doppler completamente normal en todos los lechos vasculares (umbilical, cerebral y uterinas) y líquido amniótico conservado. Esto define con certeza un Pequeño para la Edad Gestacional (PEG) Constitucional (feto sano genéticamente pequeño sin hipoxia ni falla placentaria). El pronóstico perinatal es equivalente al de un feto con peso adecuado y la conducta médica es el manejo conservador ambulatorio con parto a término espontáneo (semana 39-40), sin necesidad de adelantar el parto ni realizar intervenciones invasivas.\nC) Incorrecta. La etapa II requiere diástole ausente en la arteria umbilical.\nD) Incorrecta. No hay sufrimiento fetal.\nE) Incorrecta. El peso está bajo el percentil 10, lo que define formalmente PEG.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.010"
      },
      {
        "stem": "En el seguimiento Doppler de un feto de 30 semanas con restricción de crecimiento fetal severa, se pesquisa la presencia de flujo reverso persistente durante la sístole auricular (onda 'a' reversa) en el Ductus Venoso. ¿Cuál es el significado fisiopatológico y la conducta médica inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Signo de madurez pulmonar avanzada; alta a domicilio"
          },
          {
            "id": "B",
            "text": "Signo de falla miocárdica y acidosis metabólica fetal crítica; interrupción inmediata del embarazo por cesárea bajo neuroprotección con sulfato de magnesio"
          },
          {
            "id": "C",
            "text": "Variante anatómica benigna sin repercusión hemodinámica"
          },
          {
            "id": "D",
            "text": "Indicar infusión de glucosa materna para revertir la onda 'a'"
          },
          {
            "id": "E",
            "text": "Programar nuevo control ecográfico en 2 semanas"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No tiene ninguna relación con la madurez pulmonar.\nB) Correcta. El ductus venoso es el vaso central que comunica la vena umbilical con la vena cava inferior. La aparición de una onda 'a' reversa en el ductus venoso refleja una presión telediastólica muy elevada en el ventrículo derecho por claudicación miocárdica ante acidosis láctica y asfixia terminal (RCF Etapa IV). Es el predictor más potente e independiente de muerte fetal intrauterina en menos de 24 a 48 horas. La conducta obligatoria es la interrupción urgente del embarazo mediante cesárea, previa administración de neuroprotección con Sulfato de Magnesio (por ser < 32 semanas) y corticoides.\nC) Incorrecta. Es el signo de máxima gravedad en medicina materno-fetal.\nD) Incorrecta. La glucosa no revierte la falla ventricular en un feto asfíctico.\nE) Incorrecta. Esperar 2 semanas causaría el óbito fetal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.010"
      }
    ]
  }
];

const bloque1Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowObstetricia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque1Classes };
