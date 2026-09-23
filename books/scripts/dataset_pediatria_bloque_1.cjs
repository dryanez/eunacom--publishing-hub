/**
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA · BLOQUE 1
 * Crecimiento, Desarrollo & Vacunas PNI (18.1 a 18.4)
 */

const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ped-01",
    "classId": "ped-01",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.1",
    "title": "Evaluación del Crecimiento & Estado Nutricional en Pediatría: Curvas OMS (P/E, T/E, P/T)",
    "perfilCode": "2.01.1.061",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Patología cubierta en control de salud infantil del Programa Nacional de Salud de la Infancia (MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#12) · EUNACOM Julio 2022 (Q#88)",
    "frecuencia": "Muy Alta rentabilidad · Pregunta clásica de cálculo e interpretación de desviaciones estándar en curvas OMS",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Estado Nutricional en Lactantes y Preescolares según Desviaciones Estándar OMS",
    "diagramRows": [
      {
        "t": "Lactante o Preescolar en Control Sano (0 a 5 años)",
        "s": "Medición antropométrica estandarizada: Peso, Longitud/Estatura, Perímetro Cefálico",
        "type": "acc"
      },
      {
        "t": "Graficar en Curvas OMS (2006) y Calcular Desviaciones Estándar (DE)",
        "s": "Indicadores: P/E (global), P/T (agudo/actual), T/E (crónico/estatura)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Evaluación del Indicador Peso para la Talla (P/T)",
        "al": "Estratificación Nutricional P/T",
        "ll": "P/T ≤ -1 DE",
        "left": {
          "t": "Riesgo de Desnutrición o Desnutrición",
          "s": "≤ -1 a -1.9 DE: Riesgo Desnutrición · ≤ -2 DE: Desnutrición Severa",
          "type": "warn"
        },
        "rl": "P/T ≥ +1 DE",
        "right": {
          "t": "Sobrepeso u Obesidad Infantil",
          "s": "+1 a +1.9 DE: Sobrepeso · ≥ +2 DE: Obesidad · ≥ +3 DE: Obesidad Severa",
          "type": "crit"
        }
      },
      {
        "t": "Conducta Clínica y Plan de Intervención Nutricional",
        "s": "P/T normal (-0.9 a +0.9 DE) + T/E normal: Control habitual · Alterado: Evaluación de ingesta, refuerzo de lactancia y control en 15-30 días",
        "type": "acc"
      }
    ],
    "contexto": "La evaluación del crecimiento y estado nutricional es el pilar fundamental del control de salud infantil en Chile. El médico de atención primaria debe dominar la interpretación estandarizada de las curvas de crecimiento de la Organización Mundial de la Salud (OMS 2006 adoptadas por el MINSAL), diferenciando alteraciones agudas (peso para la talla) de crónicas (talla para la edad), diagnosticando precozmente el riesgo de desnutrición, la desnutrición y la malnutrición por exceso (sobrepeso y obesidad), cuya prevalencia supera el 50% en escolares chilenos.",
    "contentSections": [
      {
        "subhead": "1. Antropometría Estandarizada e Indicadores Nutricionales",
        "paragraphs": [
          "La evaluación nutricional requiere técnica estandarizada: pesaje con balanza de lactante calibrada (desnudo hasta los 2 años) y medición de <strong>longitud en decúbito supino con infantómetro hasta los 24 meses</strong>, pasando a <strong>estatura en bipedestación con estadiómetro desde los 2 años cumplidos</strong>.",
          "Los tres indicadores antropométricos clásicos evaluados mediante desviaciones estándar (DE o puntaje Z) son:",
          "• <strong>Peso para la Talla (P/T):</strong> Es el indicador de elección para diagnosticar el estado nutricional actual (agudo) en niños menores de 5 años. Refleja la armonía corporal y masa magra/grasa relativa.",
          "• <strong>Talla para la Edad (T/E):</strong> Evalúa el crecimiento lineal y el impacto nutricional o patológico a largo plazo (crónico). Una alteración refleja desnutrición crónica, hipocrecimiento endocrinológico, genético o ambiental.",
          "• <strong>Peso para la Edad (P/E):</strong> Indicador de desnutrición global. En menores de 1 año alerta sobre desviaciones del canal de crecimiento, pero no discrimina entre desnutrición actual y talla baja constitucional."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos MINSAL / OMS según Desviaciones Estándar (Puntaje Z)",
        "paragraphs": [
          "En menores de 5 años, el diagnóstico estatutario del MINSAL se basa primordialmente en <strong>P/T</strong>:",
          "• <strong>Obesidad Severa:</strong> P/T ≥ +3 DE.",
          "• <strong>Obesidad:</strong> P/T entre +2.0 y +2.9 DE.",
          "• <strong>Sobrepeso (Riesgo de Obesidad):</strong> P/T entre +1.0 y +1.9 DE.",
          "• <strong>Eutrófico (Normal):</strong> P/T entre -0.9 y +0.9 DE.",
          "• <strong>Riesgo de Desnutrición:</strong> P/T entre -1.0 y -1.9 DE.",
          "• <strong>Desnutrición:</strong> P/T ≤ -2.0 DE (moderada entre -2.0 y -2.9 DE; severa ≤ -3.0 DE).",
          "Para el indicador <strong>Talla para la Edad (T/E)</strong>:",
          "• Talla Alta: T/E ≥ +2 DE.",
          "• Talla Normal: T/E entre -1.9 y +1.9 DE.",
          "• Talla Baja (o Retraso del Crecimiento): T/E ≤ -2 DE."
        ]
      },
      {
        "subhead": "3. Evaluación Nutricional en Mayores de 5 Años: Índice de Masa Corporal (IMC)",
        "paragraphs": [
          "A partir de los 5 años cumplidos (60 meses) hasta los 19 años, el diagnóstico nutricional de masa corporal cambia del indicador P/T al <strong>Índice de Masa Corporal para la Edad (IMC/E)</strong>:",
          "• Obesidad Severa: IMC/E ≥ +3 DE.",
          "• Obesidad: IMC/E entre +2.0 y +2.9 DE.",
          "• Sobrepeso: IMC/E entre +1.0 y +1.9 DE.",
          "• Eutrófico: IMC/E entre -0.9 y +0.9 DE.",
          "• Bajo Peso: IMC/E entre -1.0 y -1.9 DE.",
          "• Desnutrición: IMC/E ≤ -2.0 DE.",
          "La velocidad de crecimiento es el parámetro más sensible: un aplanamiento o caída de dos canales percentilares o >1 DE en controles sucesivos es criterio formal de alerta ('faltering growth'), obligando a descartar patología orgánica subyacente (celiaquía, alergia a proteína de leche de vaca, fibrosis quística, ITU recurrente, cardiopatía)."
        ]
      },
      {
        "subhead": "4. Conducta Clínica y Manejo en Atención Primaria",
        "paragraphs": [
          "• <strong>Riesgo de Desnutrición o Desnutrición:</strong> Evaluar técnica de lactancia, dilución de fórmulas lácteas, frecuencia de tomas e incorporación de sólidos. Solicitar exámenes básicos (orina completa, urocultivo, hemograma, ferritina). Control nutricional abreviado en 15 a 30 días. Si no hay ganancia ponderal tras optimización dietética, derivar a pediatría.",
          "• <strong>Malnutrición por Exceso:</strong> Suspender bebidas azucaradas, jugos envasados y colaciones ultraprocesadas. Estimular lactancia materna exclusiva hasta los 6 meses. Fomentar juego activo no estructurado mínimo 60 minutos al día. No someter a dietas restrictivas en menores de 2 años; la meta es frenar la ganancia excesiva de peso permitiendo que la talla crezca."
        ]
      }
    ],
    "table": {
      "title": "Clasificación Nutricional según Puntaje Z (Desviaciones Estándar) MINSAL / OMS",
      "headers": [
        "Diagnóstico Nutricional",
        "Menores de 5 Años (P/T)",
        "De 5 a 19 Años (IMC/E)",
        "Talla para la Edad (T/E)"
      ],
      "rows": [
        [
          "Obesidad Severa",
          "≥ +3.0 DE",
          "≥ +3.0 DE",
          "—"
        ],
        [
          "Obesidad",
          "+2.0 a +2.9 DE",
          "+2.0 a +2.9 DE",
          "—"
        ],
        [
          "Sobrepeso",
          "+1.0 a +1.9 DE",
          "+1.0 a +1.9 DE",
          "—"
        ],
        [
          "Eutrófico (Normal)",
          "-0.9 a +0.9 DE",
          "-0.9 a +0.9 DE",
          "-1.9 a +1.9 DE"
        ],
        [
          "Riesgo Desnutrición / Bajo Peso",
          "-1.0 a -1.9 DE",
          "-1.0 a -1.9 DE",
          "—"
        ],
        [
          "Desnutrición / Talla Baja",
          "≤ -2.0 DE",
          "≤ -2.0 DE",
          "≤ -2.0 DE"
        ]
      ]
    },
    "vignette": "Lactante de 8 meses, traído a control sano en CESFAM. Alimentado con lactancia materna y dos comidas diarias (almuerzo y cena) con postre de fruta. Al examen físico: peso 8.100 g, longitud 70 cm. Al contrastar con curvas OMS: P/E se ubica en -0.4 DE, P/T se ubica en -1.3 DE, y T/E se ubica en +0.8 DE. Su desarrollo psicomotor es adecuado para la edad y el examen segmentario no presenta hallazgos patológicos.",
    "explicacion": "El indicador que define el estado nutricional actual en un lactante menor de 5 años es el Peso para la Talla (P/T). Un P/T entre -1.0 y -1.9 DE corresponde a Riesgo de Desnutrición. La T/E de +0.8 DE descarta alteración del crecimiento lineal. La conducta médica correcta en APS es evaluar detalladamente la anamnesis alimentaria (consistencia de papillas, incorporación de aceite vegetal, frecuencia de lactancia), reforzar la técnica y citar a control ponderal abreviado en 15 a 30 días.",
    "keyPoints": [
      "En menores de 5 años, el diagnóstico nutricional oficial se establece mediante el indicador Peso para la Talla (P/T).",
      "A partir de los 5 años (60 meses) hasta los 19 años, se utiliza el Índice de Masa Corporal para la Edad (IMC/E).",
      "Riesgo de desnutrición corresponde a P/T entre -1.0 y -1.9 DE; Desnutrición a P/T ≤ -2.0 DE.",
      "Sobrepeso corresponde a P/T o IMC/E entre +1.0 y +1.9 DE; Obesidad entre +2.0 y +2.9 DE; Obesidad severa ≥ +3.0 DE.",
      "La Talla para la Edad (T/E) refleja nutrición y crecimiento crónico; T/E ≤ -2.0 DE define Talla Baja.",
      "La medición hasta los 24 meses se realiza acostado (longitud con infantómetro) y desde los 2 años de pie (estatura con estadiómetro)."
    ],
    "questions": [
      {
        "stem": "Un lactante de 14 meses es llevado al CESFAM para su control de salud infantil. Su madre refiere que come bien, recibe fórmula de continuación y sólidos. En la antropometría se registra: P/T en +1.4 DE, T/E en +0.2 DE y P/E en +1.1 DE. ¿Cuál es el diagnóstico nutricional integrado del paciente?",
        "options": [
          {
            "id": "A",
            "text": "Eutrófico con talla normal"
          },
          {
            "id": "B",
            "text": "Sobrepeso con talla normal"
          },
          {
            "id": "C",
            "text": "Obesidad con talla normal"
          },
          {
            "id": "D",
            "text": "Riesgo de desnutrición con talla normal"
          },
          {
            "id": "E",
            "text": "Sobrepeso con talla alta"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Para ser eutrófico, el P/T debe encontrarse entre -0.9 y +0.9 DE.\nB) Correcta. En menores de 5 años, el estado nutricional se determina por el indicador P/T. Un valor de +1.4 DE se encuentra en el rango de +1.0 a +1.9 DE, lo que corresponde a Sobrepeso. La T/E de +0.2 DE se ubica entre -1.9 y +1.9 DE, correspondiente a talla normal.\nC) Incorrecta. Obesidad requiere un P/T ≥ +2.0 DE.\nD) Incorrecta. El riesgo de desnutrición requiere P/T entre -1.0 y -1.9 DE.\nE) Incorrecta. La talla alta requiere T/E ≥ +2.0 DE, y este lactante tiene +0.2 DE.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.061"
      },
      {
        "stem": "Una niña de 7 años acude a control de salud escolar. En la evaluación antropométrica presenta un IMC de 21.5 kg/m², lo que al graficar en las tablas OMS para su edad y sexo arroja un puntaje Z de IMC/E de +2.4 DE y una T/E de -0.5 DE. ¿Cuál es la clasificación nutricional correcta?",
        "options": [
          {
            "id": "A",
            "text": "Sobrepeso con talla normal"
          },
          {
            "id": "B",
            "text": "Obesidad con talla baja"
          },
          {
            "id": "C",
            "text": "Obesidad con talla normal"
          },
          {
            "id": "D",
            "text": "Obesidad severa con talla normal"
          },
          {
            "id": "E",
            "text": "Eutrófica con talla normal"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Sobrepeso en mayores de 5 años corresponde a IMC/E entre +1.0 y +1.9 DE.\nB) Incorrecta. La T/E es de -0.5 DE, lo que está dentro del rango normal (-1.9 a +1.9 DE). Talla baja requiere T/E ≤ -2.0 DE.\nC) Correcta. A partir de los 5 años se utiliza el indicador IMC/E. Un puntaje Z de +2.4 DE corresponde a Obesidad (+2.0 a +2.9 DE). La talla es normal (-0.5 DE).\nD) Incorrecta. Obesidad severa requiere IMC/E ≥ +3.0 DE.\nE) Incorrecta. Eutrófico requiere IMC/E entre -0.9 y +0.9 DE.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.061"
      }
    ]
  },
  {
    "id": "ped-02",
    "classId": "ped-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.2",
    "title": "Desarrollo Psicomotor: Hitos Madurativos & Baterías de Tamizaje (EEDP y TEPSI)",
    "perfilCode": "2.01.1.083",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Cubierto por Programa Chile Crece Contigo y salas de estimulación en APS.",
    "reconstrucciones": "EUNACOM Julio 2023 (Q#14) · EUNACOM Diciembre 2021 (Q#112)",
    "frecuencia": "Alta rentabilidad · Pregunta recurrente sobre hitos motores y de lenguaje y edad de aplicación de EEDP/TEPSI",
    "svg": null,
    "algoTitle": "Flujo de Tamizaje y Manejo de Déficit del Desarrollo Psicomotor en APS (Chile Crece Contigo)",
    "diagramRows": [
      {
        "t": "Control Sano Infantil: Evaluación del DSM según Edad",
        "s": "Observación de hitos clínicos madurativos cardinales en cada control",
        "type": "acc"
      },
      {
        "t": "Aplicación de Instrumentos Estandarizados Nacionales",
        "s": "EEDP: a los 8 y 18 meses · TEPSI: a los 3 años (36 meses)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Resultado del Coeficiente de Desarrollo (CD)",
        "al": "Estratificación del Coeficiente de Desarrollo",
        "ll": "CD ≥ 85 (Normal)",
        "left": {
          "t": "Desarrollo Psicomotor Normal",
          "s": "Refuerzo pautas de estimulación · Próximo control según calendario habitual",
          "type": "acc"
        },
        "rl": "CD < 85 (Riesgo / Retraso)",
        "right": {
          "t": "Déficit del Desarrollo Psicomotor",
          "s": "CD 70-84: Riesgo (Sala de Estimulación) · CD < 70: Retraso (Médico + Especialista)",
          "type": "crit"
        }
      },
      {
        "t": "Derivación e Intervención Multidisciplinaria",
        "s": "Descartar hipoacusia, hipotiroidismo, errores innatos y trastorno del espectro autista (TEA)",
        "type": "warn"
      }
    ],
    "contexto": "El desarrollo psicomotor (DSM) es un proceso continuo y ordenado de maduración del sistema nervioso central que progresa en sentido céfalo-caudal y de proximal a distal. La detección precoz de retrasos permite intervenciones en períodos críticos de máxima plasticidad cerebral. En Chile, el sistema público cuenta con instrumentos validados a nivel poblacional (EEDP y TEPSI) integrados a la red del subsistema Chile Crece Contigo.",
    "contentSections": [
      {
        "subhead": "1. Hitos Madurativos Cardinales del Desarrollo Psicomotor",
        "paragraphs": [
          "El médico debe conocer las edades límite (red flags) en las cuatro áreas cardinales (motora gruesa, motora fina, lenguaje y social):",
          "• <strong>3 meses:</strong> Sostén cefálico firme, sonrisa social responsiva, vocalizaciones guturales ('agú'), manos abiertas.",
          "• <strong>6 meses:</strong> Sedestación con apoyo (trípode), transferencia de objetos de una mano a otra, balbuceo monosilábico ('ma', 'da'), se gira de prono a supino.",
          "• <strong>8-9 meses:</strong> Sedestación independiente sin apoyo, pinza radial inferior, balbuceo bisilábico duplicado ('mamá', 'papá' inespecífico), angustia de separación (ante extraños).",
          "• <strong>12 meses:</strong> Bipedestación con apoyo o marcha incipiente, pinza fina madura (índice-pulgar), primeras 1-2 palabras con sentido ('papá', 'agua'), responde a su nombre y señala para pedir (protoimperativo).",
          "• <strong>18 meses:</strong> Marcha autónoma fluida, sube escalones tomado de la mano, torre de 3 cubos, vocabulario de 10 a 20 palabras, uso de cuchara.",
          "• <strong>24 meses:</strong> Corre bien, sube y baja escaleras solo, patea pelota, torre de 6 cubos, frases de 2 palabras ('quiero agua'), control diurno de esfínteres incipiente."
        ]
      },
      {
        "subhead": "2. Instrumentos Estandarizados de Tamizaje en Chile: EEDP y TEPSI",
        "paragraphs": [
          "En la red pública de salud chilena, la evaluación formal se realiza mediante dos baterías normadas:",
          "• <strong>EEDP (Escala de Evaluación del Desarrollo Psicomotor):</strong> Se aplica desde los <strong>0 hasta los 24 meses</strong> de edad. Evalúa cuatro áreas: Motora, Coordinación, Lenguaje y Social. Los controles con aplicación obligatoria por norma son a los <strong>8 meses y a los 18 meses</strong> de vida.",
          "• <strong>TEPSI (Test de Desarrollo Psicomotor):</strong> Se aplica entre los <strong>2 y los 5 años</strong> (24 a 59 meses). Evalúa tres áreas: Coordinación, Lenguaje y Motricidad. La aplicación universal programada en APS es a los <strong>3 años cumplidos (36 meses)</strong>.",
          "• <strong>Puntajes de Corte (Coeficiente de Desarrollo / Puntaje T):</strong>",
          "  - <strong>Normal:</strong> Puntaje ≥ 85 puntos (o normal con rezago si aprueba el total pero falla un ítem específico).",
          "  - <strong>Riesgo:</strong> Puntaje entre 70 y 84 puntos (ingreso a Sala de Estimulación de APS, reevaluación en 60-90 días).",
          "  - <strong>Retraso:</strong> Puntaje < 70 puntos (evaluación médica inmediata, derivación a pediatría/neurología infantil)."
        ]
      },
      {
        "subhead": "3. Banderas Rojas y Signos de Alerta de Retraso Global o TEA",
        "paragraphs": [
          "Constituyen <strong>signos de alarma absolutos</strong> que obligan a evaluación inmediata sin esperar el próximo control:",
          "• Ausencia de sonrisa social a los 2-3 meses.",
          "• Falta de fijación y seguimiento ocular a los 3 meses.",
          "• Hipotonía axial marcada o ausencia de sostén cefálico a los 4 meses.",
          "• Persistencia de reflejos arcaicos (moro, prensión) más allá de los 6 meses.",
          "• No mantenerse sentado sin apoyo a los 9 meses.",
          "• Ausencia de balbuceo comunicativo o de señalar con el dedo a los 12 meses.",
          "• No caminar de forma independiente a los 18 meses.",
          "• No decir palabras con significado a los 18 meses o no emitir frases de 2 palabras a los 24 meses.",
          "• <strong>Regresión o pérdida de cualquier habilidad previamente adquirida:</strong> Alerta máxima de enfermedad neurodegenerativa o trastorno del espectro autista (TEA, evaluable con M-CHAT a los 18-24 meses)."
        ]
      }
    ],
    "table": {
      "title": "Baterías de Tamizaje del Desarrollo Psicomotor en APS (Chile Crece Contigo)",
      "headers": [
        "Parámetro",
        "EEDP (Lactantes)",
        "TEPSI (Preescolares)"
      ],
      "rows": [
        [
          "Rango de Edad",
          "0 a 24 meses",
          "2 a 5 años (24 a 59 meses)"
        ],
        [
          "Edades Obligatorias MINSAL",
          "8 meses y 18 meses",
          "3 años cumplidos (36 meses)"
        ],
        [
          "Áreas Evaluadas",
          "Motora, Coordinación, Lenguaje, Social",
          "Coordinación, Lenguaje, Motricidad"
        ],
        [
          "Normal",
          "Coeficiente de Desarrollo (CD) ≥ 85",
          "Puntaje T ≥ 85"
        ],
        [
          "Riesgo",
          "CD entre 70 y 84 puntos",
          "Puntaje T entre 70 y 84 puntos"
        ],
        [
          "Retraso",
          "CD < 70 puntos",
          "Puntaje T < 70 puntos"
        ],
        [
          "Conducta en Riesgo",
          "Sala de Estimulación + Reevaluar en 60 días",
          "Sala de Estimulación + Reevaluar en 90 días"
        ],
        [
          "Conducta en Retraso",
          "Evaluación médica + Derivación a Pediatría",
          "Evaluación médica + Derivación a Especialidad"
        ]
      ]
    },
    "vignette": "Lactante de 9 meses, sin antecedentes perinatales patológicos. Acude a control sano de los 8 meses que estaba pendiente. En la evaluación clínica se observa que no logra mantenerse sentado de manera independiente, apoya las manos hacia adelante cayendo frecuentemente, no transfiere objetos de una mano a otra y emite únicamente sonidos guturales guturales aislados sin balbuceo bisilábico. En la aplicación de la EEDP obtiene un puntaje estándar que corresponde a un Coeficiente de Desarrollo de 64 puntos.",
    "explicacion": "Un lactante de 9 meses que no logra sedestación estable (hito esperado a los 7-8 meses), no realiza transferencia de objetos (esperado a los 6 meses) y presenta un Coeficiente de Desarrollo (CD) en la EEDP < 70 puntos se clasifica formalmente como Retraso del Desarrollo Psicomotor. La conducta médica inmediata consiste en realizar examen neurológico completo, descartar causas sensoriales (hipoacusia) y derivar a Pediatría / Neurología Infantil para estudio etiológico e inicio precoz de neurorrehabilitación.",
    "keyPoints": [
      "El EEDP se aplica en Chile de forma obligatoria a los 8 meses y a los 18 meses (rango 0 a 24 meses).",
      "El TEPSI se aplica de forma universal a los 3 años cumplidos (36 meses) en el control de salud infantil.",
      "Puntajes: Normal ≥ 85; Riesgo = 70 a 84 (ingresa a Sala de Estimulación); Retraso < 70 (evaluación médica y derivación).",
      "Hitos clave: Sostén cefálico a los 3 meses; sedestación sin apoyo a los 8 meses; marcha independiente a los 12-15 meses.",
      "Límite máximo para marcha independiente es 18 meses; si no camina a los 18 meses es bandera roja formal.",
      "La pérdida de pautas ya adquiridas (regresión) constituye siempre un signo de alarma neurológica urgente."
    ],
    "questions": [
      {
        "stem": "Un lactante de 8 meses acude a control de salud infantil en el CESFAM. La enfermera aplica la Escala de Evaluación del Desarrollo Psicomotor (EEDP), obteniendo un Coeficiente de Desarrollo de 76 puntos. ¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Desarrollo normal; citar a control habitual a los 12 meses"
          },
          {
            "id": "B",
            "text": "Riesgo de déficit del DSM; derivar a Sala de Estimulación y reevaluar con EEDP en 60 días"
          },
          {
            "id": "C",
            "text": "Retraso del DSM; derivar de urgencia a Neurología Infantil"
          },
          {
            "id": "D",
            "text": "Retraso del DSM; hospitalizar para estudio metabólico"
          },
          {
            "id": "E",
            "text": "Desarrollo con rezago; indicar control telefónico en 6 meses"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Un puntaje de 76 puntos no es normal (normal es ≥ 85).\nB) Correcta. Según las normas técnicas de Chile Crece Contigo y del MINSAL, un Coeficiente de Desarrollo en la EEDP entre 70 y 84 puntos se clasifica como Riesgo. La conducta oficial es el ingreso a la Sala de Estimulación de APS y la reevaluación con una nueva EEDP en 60 días.\nC) Incorrecta. Retraso corresponde a puntaje < 70 puntos.\nD) Incorrecta. No requiere hospitalización ni tiene criterios de retraso severo.\nE) Incorrecta. El rezago se define cuando el puntaje global es normal (≥ 85) pero falla en un área específica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.083"
      },
      {
        "stem": "Durante el control de salud infantil de un niño de 18 meses, el médico constata que aún no camina de forma independiente, requiriendo ser tomado de ambas manos para dar pasos inestables. Dice solo 'mamá' y no señala con el dedo para pedir cosas. ¿Cuál es la conducta médica más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Tranquilizar a la madre y esperar hasta los 24 meses, dado que la marcha puede demorarse"
          },
          {
            "id": "B",
            "text": "Indicar uso de andador infantil para fortalecer la musculatura de extremidades inferiores"
          },
          {
            "id": "C",
            "text": "Considerar bandera roja por falta de marcha a los 18 meses, realizar examen neurológico completo y derivar a especialista"
          },
          {
            "id": "D",
            "text": "Solicitar únicamente radiografía de pelvis para descartar displasia de cadera"
          },
          {
            "id": "E",
            "text": "Suspender lácteos e indicar multivitamínicos orales"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Los 18 meses son la edad límite superior estricta para la marcha independiente. No caminar a los 18 meses nunca es una variante normal y no debe esperarse.\nB) Incorrecta. Los andadores están formalmente desaconsejados por la Academia Americana de Pediatría y la Sociedad Chilena de Pediatría (SOCHIPE) por alto riesgo de traumatismos graves y alteración del patrón de marcha.\nC) Correcta. La ausencia de marcha independiente y la falta de lenguaje comunicativo (señalar) a los 18 meses son banderas rojas formales que exigen examen físico/neurológico acucioso y derivación a Pediatría / Neurología Infantil.\nD) Incorrecta. Aunque la cadera debe evaluarse, el cuadro excede lo ortopédico puro.\nE) Incorrecta. No tiene indicación clínica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.083"
      }
    ]
  },
  {
    "id": "ped-03",
    "classId": "ped-03",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.3",
    "title": "Programa Nacional de Inmunizaciones (PNI Chile): Calendario de Vacunación Obligatorio 2026",
    "perfilCode": "2.01.2.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Garantía de acceso universal, obligatoria y gratuita por Decreto Ley Supremo del Ministerio de Salud (MINSAL).",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#45) · EUNACOM Diciembre 2023 (Q#101) · EUNACOM Julio 2021 (Q#5)",
    "frecuencia": "Máxima rentabilidad · Patología de salud pública pediátrica más preguntada en el examen",
    "svg": null,
    "algoTitle": "Cronología y Composición de Vacunas del Calendario Nacional PNI Chile",
    "diagramRows": [
      {
        "t": "Recién Nacido en Maternidad (Sala de Partos)",
        "s": "BCG (Tuberculosis miliar/meníngea) + Hepatitis B neonatal (primeras 12-24h)",
        "type": "acc"
      },
      {
        "t": "Lactante Menor: 2 y 4 Meses de Vida",
        "s": "Hexavalente (DTPa + Hib + HB + VIP) + Neumocócica Conjugada (13 o 15-valente)",
        "type": "dec"
      },
      {
        "t": "Lactante Menor: 6 Meses de Vida",
        "s": "Hexavalente (3.ª dosis) · Nota: Lactante prematuro recibe Neumococo a los 6 meses",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Lactante Mayor: 12 y 18 Meses de Vida",
        "al": "Hitos Inmunológicos de los 12 y 18 Meses",
        "ll": "12 Meses (1 Año)",
        "left": {
          "t": "Vacunas del Año de Vida",
          "s": "Tresvírica (SRP) + Meningocócica Conjugada (ACWY) + Neumocócica Conjugada (refuerzo)",
          "type": "acc"
        },
        "rl": "18 Meses (Año y Medio)",
        "right": {
          "t": "Vacunas de los 18 Meses",
          "s": "Hexavalente (4.ª dosis) + Hepatitis A + Varicela (1.ª dosis)",
          "type": "crit"
        }
      },
      {
        "t": "Vacunas Escolares (1.°, 4.°, 5.° y 8.° Básico)",
        "s": "1.° Básico: Tresvírica + dTpa · 4.° y 5.° Básico: VPH (Gardasil 9) · 8.° Básico: dTpa refuerzo",
        "type": "warn"
      }
    ],
    "contexto": "El Programa Nacional de Inmunizaciones (PNI) de Chile es un bien público fundamental, con coberturas históricas superiores al 90%. El médico general debe memorizar de manera infalible el calendario vigente (incluyendo la incorporación de anticuerpos monoclonales como Nirsevimab para VRS), los tipos de vacunas (vivas atenuadas vs inactivadas), sus contraindicaciones formales (embarazo, inmunodeprimidos) y el manejo de los Eventos Supuestamente Atribuibles a la Vacunación o Inmunización (ESAVI).",
    "contentSections": [
      {
        "subhead": "1. Calendario Oficial de Vacunación PNI Infantil",
        "paragraphs": [
          "• <strong>Recién Nacido:</strong> <strong>BCG</strong> (intradérmica, previene formas graves meníngea y miliar de tuberculosis; contraindicada si peso < 2.000 g o inmunodeficiencia conocida) y <strong>Hepatitis B</strong> (monovalente intramuscular, en las primeras 12-24 h de vida).",
          "• <strong>Lactante a los 2 y 4 meses:</strong>",
          "  1) <strong>Hexavalente acelular:</strong> Difteria, Tétanos, Tos convulsiva acelular (DTPa), Haemophilus influenzae tipo b (Hib), Hepatitis B (HB) y Polio inactivada (VIP inyectable). Reemplazó a la polio oral viva.",
          "  2) <strong>Neumocócica conjugada:</strong> Protege contra Streptococcus pneumoniae.",
          "• <strong>Lactante a los 6 meses:</strong> <strong>Hexavalente</strong> (3.ª dosis). En prematuros extremos se administra también dosis de Neumocócica a los 6 meses (esquema 3+1).",
          "• <strong>Lactante a los 12 meses (1 año):</strong>",
          "  1) <strong>Tresvírica (SRP):</strong> Sarampión, Rubéola y Parotiditis (virus vivos atenuados).",
          "  2) <strong>Meningocócica conjugada (ACWY):</strong> Protege contra serogrupos A, C, W-135 e Y.",
          "  3) <strong>Neumocócica conjugada:</strong> Dosis de refuerzo.",
          "• <strong>Lactante a los 18 meses:</strong>",
          "  1) <strong>Hexavalente</strong> (4.ª dosis de refuerzo).",
          "  2) <strong>Hepatitis A</strong> (inactivada).",
          "  3) <strong>Varicela</strong> (1.ª dosis, virus vivo atenuado; 2.ª dosis a los 36 meses)."
        ]
      },
      {
        "subhead": "2. Vacunación Escolar e Innovaciones en Chile (Nirsevimab y VPH)",
        "paragraphs": [
          "• <strong>36 meses (3 años):</strong> <strong>Varicela</strong> (2.ª dosis).",
          "• <strong>1.° Básico (6 años):</strong> <strong>Tresvírica</strong> (2.ª dosis) + <strong>dTpa</strong> acelular (difteria, tétanos, pertussis acelular formulación adulto/adolescente).",
          "• <strong>4.° y 5.° Básico:</strong> <strong>VPH (Virus Papiloma Humano):</strong> Vacuna nonavalente (Gardasil 9) administrada a niñas y niños (4.° básico 1.ª dosis, 5.° básico 2.ª dosis) para prevención de cáncer cervicouterino, anal y verrugas genitales.",
          "• <strong>8.° Básico:</strong> <strong>dTpa</strong> (refuerzo de tétanos y tos convulsiva).",
          "• <strong>Nirsevimab (Beyfortus):</strong> Hito sanitario chileno 2024-2026. No es una vacuna, sino un <em>anticuerpo monoclonal de vida media prolongada</em> contra la proteína F del Virus Respiratorio Sincicial (VRS). Se administra como inmunización pasiva universal a todos los recién nacidos y lactantes menores de 6 meses que ingresan a su primera temporada invernal, reduciendo más de 80% las hospitalizaciones por bronquiolitis grave."
        ]
      },
      {
        "subhead": "3. Contraindicaciones Reales vs Falsas Contraindicaciones",
        "paragraphs": [
          "• <strong>Vacunas de Virus Vivos Atenuados:</strong> BCG, Tresvírica (SRP), Varicela y Fiebre Amarilla. <em>Contraindicadas en:</em> Inmunodeficiencias congénitas o adquiridas graves (VIH con CD4 < 15%), terapia inmunosupresora a dosis altas (corticoides ≥ 2 mg/kg/día de prednisona por > 14 días), y <strong>embarazo</strong>.",
          "• <strong>Falsas Contraindicaciones (Errores habituales en EUNACOM):</strong>",
          "  - Resfrío común, coriza, diarrea leve o fiebre de bajo grado (< 38.5°C) <strong>NO</strong> contraindican la vacunación.",
          "  - Tratamiento antibiótico en curso <strong>NO</strong> contraindica ninguna vacuna.",
          "  - Alergia al huevo: Las vacunas Tresvírica y de Influenza actuales pueden administrarse de forma segura en APS sin pruebas cutáneas previas.",
          "  - Prematurez: Los prematuros deben vacunarse según su <strong>edad cronológica postnatal</strong>, nunca según la edad gestacional corregida (a excepción del peso para BCG que requiere ≥ 2.000 g)."
        ]
      }
    ],
    "table": {
      "title": "Esquema Resumen del Calendario PNI Chile 2026",
      "headers": [
        "Edad",
        "Vacunas Administradas",
        "Vía de Administración",
        "Tipo de Vacuna"
      ],
      "rows": [
        [
          "Recién Nacido",
          "BCG + Hepatitis B",
          "Intradérmica / IM",
          "Viva atenuada / Recombinante"
        ],
        [
          "2 meses",
          "Hexavalente (1.ª) + Neumocócica (1.ª)",
          "Intramuscular (muslos)",
          "Inactivadas"
        ],
        [
          "4 meses",
          "Hexavalente (2.ª) + Neumocócica (2.ª)",
          "Intramuscular (muslos)",
          "Inactivadas"
        ],
        [
          "6 meses",
          "Hexavalente (3.ª)",
          "Intramuscular",
          "Inactivada"
        ],
        [
          "12 meses",
          "Tresvírica (1.ª) + Meningococo ACWY + Neumococo (refuerzo)",
          "Subcutánea / IM",
          "Viva atenuada (SRP) / Conjugadas"
        ],
        [
          "18 meses",
          "Hexavalente (4.ª) + Hepatitis A + Varicela (1.ª)",
          "Intramuscular / Subcutánea",
          "Inactivadas / Viva atenuada (Varicela)"
        ],
        [
          "36 meses",
          "Varicela (2.ª dosis)",
          "Subcutánea",
          "Viva atenuada"
        ],
        [
          "1.° Básico",
          "Tresvírica (2.ª) + dTpa",
          "Subcutánea / IM",
          "Viva atenuada / Inactivada"
        ],
        [
          "4.° y 5.° Básico",
          "VPH (Gardasil 9) niñas y niños",
          "Intramuscular",
          "Recombinante VLP"
        ],
        [
          "8.° Básico",
          "dTpa (refuerzo)",
          "Intramuscular",
          "Inactivada toxoide"
        ]
      ]
    },
    "vignette": "Lactante de 12 meses acude a su control de salud integral. No presenta antecedentes mórbidos. La madre consulta si puede vacunarse hoy, ya que presenta desde hace dos días rinorrea hialina, estornudos y temperatura axilar registrada en el box de 37.4°C. Al examen físico se observa activo, reactivo y con faringe levemente congestiva sin exudados.",
    "explicacion": "Una infección respiratoria alta leve con febrícula (< 38.5°C) o coriza constituye una falsa contraindicación para la vacunación. Diferir la inmunización genera oportunidades perdidas de vacunación y riesgo de contagio. Corresponde administrar las vacunas correspondientes a los 12 meses: Tresvírica (SRP), Meningocócica conjugada (ACWY) y el refuerzo de Neumocócica conjugada.",
    "keyPoints": [
      "A los 2, 4 y 6 meses se administra la vacuna Hexavalente (DTPa-Hib-HB-VIP) intramuscular.",
      "A los 12 meses se administran: Tresvírica (SRP), Meningocócica conjugada ACWY y Neumocócica.",
      "A los 18 meses se administran: Hexavalente (refuerzo), Hepatitis A y Varicela.",
      "Las vacunas vivas atenuadas (BCG, SRP, Varicela) están contraindicadas en inmunosuprimidos y embarazadas.",
      "Infecciones leves afebriles o con fiebre baja (< 38.5°C) NO contraindican la vacunación.",
      "Los prematuros se vacunan según su edad cronológica postnatal, no por edad corregida.",
      "Nirsevimab es un anticuerpo monoclonal contra VRS indicado universalmente a recién nacidos y lactantes menores de 6 meses."
    ],
    "questions": [
      {
        "stem": "Un lactante de 12 meses acude al vacunatorio del CESFAM con su calendario al día hasta los 6 meses. ¿Cuáles son las vacunas que le corresponde recibir según el Programa Nacional de Inmunizaciones (PNI) de Chile?",
        "options": [
          {
            "id": "A",
            "text": "Hexavalente, Hepatitis A y Varicela"
          },
          {
            "id": "B",
            "text": "Tresvírica, Meningocócica ACWY y Neumocócica conjugada"
          },
          {
            "id": "C",
            "text": "Tresvírica, Varicela y Hexavalente"
          },
          {
            "id": "D",
            "text": "Neumocócica conjugada, Hepatitis A y Polio oral"
          },
          {
            "id": "E",
            "text": "Meningocócica ACWY, Varicela y Hepatitis B monovalente"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Hexavalente, Hepatitis A y Varicela corresponden al hito de los 18 meses.\nB) Correcta. En Chile, a los 12 meses de vida se administran: 1) Tresvírica (SRP: sarampión, rubéola, parotiditis), 2) Meningocócica conjugada contra serogrupos A, C, W-135 e Y, y 3) Refuerzo de Neumocócica conjugada.\nC) Incorrecta. La varicela y el refuerzo de hexavalente se indican a los 18 meses.\nD) Incorrecta. La polio oral (bOPV) ya no forma parte del calendario chileno (se usa VIP en la hexavalente).\nE) Incorrecta. La varicela corresponde a los 18 meses.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.001"
      },
      {
        "stem": "Un niño de 3 años en tratamiento con quimioterapia y corticoterapia a dosis altas por leucemia linfoblástica aguda en remisión es llevado a control. Su hermano menor recibirá vacunas del calendario. ¿Cuál de las siguientes vacunas está ABSOLUTAMENTE CONTRAINDICADA en el paciente oncológico inmunodeprimido?",
        "options": [
          {
            "id": "A",
            "text": "Vacuna Antineumocócica conjugada"
          },
          {
            "id": "B",
            "text": "Vacuna contra Hepatitis A inactivada"
          },
          {
            "id": "C",
            "text": "Vacuna Tresvírica (SRP) o Varicela"
          },
          {
            "id": "D",
            "text": "Vacuna Hexavalente acelular"
          },
          {
            "id": "E",
            "text": "Vacuna contra Influenza inactivada"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Las vacunas inactivadas o conjugadas no contienen microorganismos replicativos y son seguras en inmunodeprimidos (aunque su inmunogenicidad puede ser menor).\nB) Incorrecta. La vacuna de Hepatitis A es inactivada y segura.\nC) Correcta. Las vacunas de microorganismos vivos atenuados (Tresvírica, Varicela, BCG) están estrictamente contraindicadas en pacientes con inmunodeficiencias celulares graves o bajo quimioterapia inmunosupresora, por riesgo de diseminación y enfermedad vacunal potencialmente letal.\nD) Incorrecta. La hexavalente está compuesta exclusivamente por antígenos inactivados y toxoides.\nE) Incorrecta. La vacuna influenza administrada en Chile es inactivada.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.001"
      }
    ]
  },
  {
    "id": "ped-04",
    "classId": "ped-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.4",
    "title": "Lactancia Materna Exclusiva, Alimentación Complementaria & Suplementación (Vitamina D / Fierro)",
    "perfilCode": "2.01.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Programa Nacional de Alimentación Complementaria (PNAC).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#82) · EUNACOM Diciembre 2022 (Q#33)",
    "frecuencia": "Alta rentabilidad · Preguntas directas de dosificación de Vitamina D y edad de inicio de suplementación de fierro",
    "svg": null,
    "algoTitle": "Esquema Cronológico de Alimentación Infantil y Suplementación Profiláctica Universal MINSAL",
    "diagramRows": [
      {
        "t": "Recién Nacido a Término con Lactancia Materna",
        "s": "Lactancia materna exclusiva (LME) a libre demanda los primeros 6 meses",
        "type": "acc"
      },
      {
        "t": "Suplementación Universal de Vitamina D",
        "s": "Inicio al mes de vida: 400 UI/día oral (ergocalciferol/colecalciferol) hasta los 12 meses",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Suplementación Profiláctica con Hierro Oral",
        "al": "Estratificación de Suplementación de Hierro",
        "ll": "Recién Nacido a Término",
        "left": {
          "t": "Inicio a los 4 Meses de Vida",
          "s": "1 mg/kg/día de hierro elemental hasta el año (si LME > 50%)",
          "type": "acc"
        },
        "rl": "Prematuro (< 37 sem) o Bajo Peso (< 2.500 g)",
        "right": {
          "t": "Inicio Precoz a los 2 Meses",
          "s": "2 a 3 mg/kg/día de hierro elemental (depósitos agotados)",
          "type": "crit"
        }
      },
      {
        "t": "Alimentación Complementaria: Hitos de Introducción",
        "s": "6 meses: 1.ª papilla (almuerzo) + fruta cruda molida · 8-9 meses: 2.ª papilla (cena) · 12 meses: Pescado, huevo entero e incorporación a mesa familiar",
        "type": "dec"
      }
    ],
    "contexto": "La nutrición en los primeros 1.000 días de vida determina la salud metabólica e inmunológica a largo plazo. La OMS y el MINSAL recomiendan lactancia materna exclusiva (LME) durante los primeros 6 meses de vida y complementada hasta los 2 años o más. El médico general debe prescribir con precisión matemática la suplementación profiláctica universal con vitamina D y sulfato ferroso, guiando a la familia en la introducción oportuna y segura de la alimentación complementaria.",
    "contentSections": [
      {
        "subhead": "1. Beneficios de la Lactancia Materna y Contraindicaciones Absolutas",
        "paragraphs": [
          "La leche materna humana es el alimento óptimo: aporta macronutrientes balanceados, anticuerpos secretores (IgA), lactoferrina, oligosacáridos prebióticos (HMO) y lisozima. Reduce sustancialmente el riesgo de diarreas, neumonías, otitis media, muerte súbita del lactante, obesidad futura y diabetes.",
          "<strong>Contraindicaciones Absolutas Maternas de Lactancia:</strong>",
          "• Infección materna por <strong>VIH</strong> (en países con acceso a fórmula como Chile) e infección por <strong>HTLV-1 / HTLV-2</strong> (por riesgo de paraparesia espástica tropical y leucemia/linfoma de células T).",
          "• TBC bacilífera activa no tratada (separación transitoria hasta 2 semanas de tratamiento efectivo).",
          "• Lesiones herpéticas activas en la mama o pezón.",
          "• Consumo activo de drogas ilícitas (cocaína, heroína, pasta base, anfetaminas) o quimioterapia/radiofármacos.",
          "<strong>Contraindicaciones Neonatales:</strong> Galactosemia clásica (requiere fórmula sin lactosa a base de soya). Nota: La fenilcetonuria permite lactancia mixta monitoreada."
        ]
      },
      {
        "subhead": "2. Suplementación Profiláctica Universal MINSAL (Vitamina D y Hierro)",
        "paragraphs": [
          "• <strong>Vitamina D (Prevención de Raquitismo):</strong>",
          "  - <strong>Dosis:</strong> <strong>400 UI al día</strong> por vía oral (habitualmente 4 gotas de formulación pediátrica de 100 UI/gota o 1 gota según presentación).",
          "  - <strong>Momento de inicio:</strong> Al <strong>primer mes de vida (30 días)</strong>.",
          "  - <strong>Duración:</strong> Hasta los <strong>12 meses cumplidos</strong> de edad en todos los niños que reciben lactancia materna o ingesta < 1.000 mL/día de fórmula fortificada.",
          "• <strong>Hierro Elemental (Prevención de Anemia Ferropénica):</strong>",
          "  - <strong>Recién Nacido de Término (AEG):</strong> Iniciar a los <strong>4 meses de vida</strong> a dosis de <strong>1 mg/kg/día</strong> de hierro elemental hasta el año de vida (si recibe > 50% de lactancia materna).",
          "  - <strong>Prematuro (< 37 semanas) o Pequeño para la Edad Gestacional (< 2.500 g):</strong> Iniciar precozmente a los <strong>2 meses de vida</strong> (o a los 30 días en < 1.500 g) a dosis de <strong>2 a 3 mg/kg/día</strong> (hasta 4 mg/kg/día en extremos) debido al menor traspaso placentario de depósitos de hierro en el tercer trimestre."
        ]
      },
      {
        "subhead": "3. Cronograma de Alimentación Complementaria",
        "paragraphs": [
          "La alimentación complementaria se inicia a los <strong>6 meses cumplidos</strong>, momento en que el lactante adquiere madurez renal, digestiva y neurológica (pérdida del reflejo de extrusión, sostén cefálico y sedestación asistida):",
          "• <strong>A los 6 meses:</strong> Se introduce la <strong>primera comida (almuerzo)</strong>: papilla suave o puré mixto (verduras variadas + carne de vacuno, pollo o pavo desgrasada, 20-30 g) + <strong>1 cucharadita de postre (5 mL) de aceite vegetal crudo</strong> (canola, soya u oliva, fuente de ácidos grasos esenciales omega 3 y 6) agregada al momento de servir. Postre: fruta fresca cruda molida (manzana, pera, plátano) sin azúcar añadida.",
          "• <strong>A los 8 a 9 meses:</strong> Se introduce la <strong>segunda comida (cena)</strong> con las mismas características nutricionales.",
          "• <strong>A los 10 a 12 meses:</strong> Incorporación progresiva de pescado blanco/azul, huevo entero cocido y legumbres bien cocidas y pasadas por cedazo.",
          "• <strong>Prohibiciones estrictas el primer año:</strong> Sal añadida, azúcar, miel cruda (riesgo letal de <em>botulismo del lactante</em> por esporas de Clostridium botulinum), y leche de vaca entera no modificada (alta carga de solutos renales y microhemorragias intestinales)."
        ]
      }
    ],
    "table": {
      "title": "Protocolo Oficial MINSAL de Suplementación y Alimentación Complementaria",
      "headers": [
        "Edad / Condición",
        "Alimentación Recomendada",
        "Suplementación Requerida",
        "Pautas de Seguridad"
      ],
      "rows": [
        [
          "0 a 6 meses",
          "Lactancia materna exclusiva (LME)",
          "Vitamina D 400 UI/día desde el mes 1",
          "Libre demanda · No agua ni infusiones"
        ],
        [
          "Prematuro / < 2.500 g",
          "LME o fórmula prematuro",
          "Hierro 2-3 mg/kg/día desde los 2 meses + Vit D",
          "Control estrecho de hemograma a los 6 meses"
        ],
        [
          "RN Término en LME",
          "LME hasta los 6 meses",
          "Hierro 1 mg/kg/día desde los 4 meses",
          "Previene anemia ferropénica del lactante"
        ],
        [
          "6 meses cumplidos",
          "1.ª comida (almuerzo) + fruta",
          "Mantener Vitamina D + Hierro",
          "Agregar 5 mL aceite vegetal crudo · Cero sal"
        ],
        [
          "8 a 9 meses",
          "2.ª comida (cena) + almuerzo",
          "Mantener suplementación hasta los 12 meses",
          "Textura papilla semisólida / picados blandos"
        ],
        [
          "Menores de 1 año",
          "Evitar alimentos prohibidos",
          "—",
          "¡Prohibida la miel (botulismo), sal, azúcar y leche de vaca!"
        ]
      ]
    },
    "vignette": "Madre primeriza trae a su hijo de 4 meses a control sano. El niño nació a término con peso 3.400 g y se alimenta con lactancia materna exclusiva a libre demanda, con incremento ponderal adecuado. La madre refiere que ha estado dándole diariamente las 4 gotas de vitamina D prescritas al mes de vida. Consulta qué indicaciones farmacológicas y nutricionales debe iniciar a partir de este control.",
    "explicacion": "En un lactante nacido a término con lactancia materna exclusiva, a los 4 meses de vida se agotan las reservas hepáticas de hierro transferidas durante el embarazo. La norma del MINSAL indica iniciar suplementación profiláctica con hierro elemental a dosis de 1 mg/kg/día por vía oral, manteniendo la vitamina D a 400 UI/día y continuando con lactancia materna exclusiva hasta los 6 meses de vida, momento en el cual se incorporará la primera papilla.",
    "keyPoints": [
      "La vitamina D se prescribe universalmente a todos los lactantes a 400 UI/día desde el mes de vida hasta el año.",
      "En recién nacidos a término con LME, el hierro profiláctico se inicia a los 4 meses a 1 mg/kg/día.",
      "En prematuros (< 37 semanas) o bajo peso (< 2.500 g), el hierro profiláctico se inicia a los 2 meses a 2-3 mg/kg/día.",
      "La alimentación complementaria se inicia a los 6 meses con la primera comida (almuerzo) + aceite vegetal crudo (5 mL).",
      "La cena se introduce entre los 8 y 9 meses de vida.",
      "La miel está estrictamente prohibida en menores de 1 año por riesgo de botulismo del lactante.",
      "Contraindicaciones absolutas maternas de lactancia: VIH y HTLV-1/2."
    ],
    "questions": [
      {
        "stem": "Un lactante de 2 meses de vida, nacido a las 33 semanas de gestación con peso de nacimiento de 1.950 g, acude a control de salud infantil. Se alimenta con lactancia materna exclusiva y recibe vitamina D 400 UI/día desde los 30 días de vida. ¿Cuál es la indicación de suplementación con hierro más adecuada según la normativa chilena?",
        "options": [
          {
            "id": "A",
            "text": "Esperar hasta los 6 meses para iniciar hierro junto con la alimentación complementaria"
          },
          {
            "id": "B",
            "text": "Iniciar sulfato ferroso a 2 a 3 mg/kg/día de hierro elemental a contar de este control"
          },
          {
            "id": "C",
            "text": "Iniciar sulfato ferroso a los 4 meses a dosis de 1 mg/kg/día"
          },
          {
            "id": "D",
            "text": "No requiere suplementación de hierro si la madre consume una dieta rica en carnes rojas"
          },
          {
            "id": "E",
            "text": "Indicar hierro dextrano intramuscular en dosis única mensual"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los prematuros tienen reservas reducidas y desarrollan anemia precoz si no se suplementan antes.\nB) Correcta. La norma técnica del MINSAL establece que en niños prematuros (< 37 semanas) o con peso de nacimiento menor a 2.500 g, la suplementación profiláctica con hierro oral debe iniciarse precozmente a los 2 meses de vida (o al duplicar el peso de nacimiento) a dosis de 2 a 3 mg/kg/día de hierro elemental.\nC) Incorrecta. La indicación a los 4 meses y a 1 mg/kg/día corresponde al recién nacido de término con peso adecuado.\nD) Incorrecta. El hierro de la leche materna tiene excelente biodisponibilidad pero concentración baja; la dieta materna no compensa la prematurez.\nE) Incorrecta. La vía parenteral se reserva para malabsorción severa.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.004"
      },
      {
        "stem": "Una madre consulta en el CESFAM sobre la alimentación de su hijo de 7 meses. El niño recibe almuerzo desde los 6 meses. La abuela le recomienda endulzar el puré de fruta con un poco de miel natural de abeja y agregar una pizca de sal a la sopa. ¿Cuál es la recomendación médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Permitir la miel natural pero restringir la sal marina"
          },
          {
            "id": "B",
            "text": "Permitir una pizca de sal pero contraindicar formalmente la miel por riesgo de botulismo"
          },
          {
            "id": "C",
            "text": "Contraindicar estrictamente tanto la miel (por riesgo de botulismo) como el agregado de sal y azúcar durante todo el primer año"
          },
          {
            "id": "D",
            "text": "Autorizar ambos alimentos en pequeñas cantidades para favorecer la aceptación de sabores"
          },
          {
            "id": "E",
            "text": "Recomendar diluir la miel en leche tibia para inactivar posibles toxinas"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La miel está absolutamente contraindicada por riesgo de esporas de Clostridium botulinum.\nB) Incorrecta. La sal tampoco debe adicionarse en menores de 1 año debido a la inmadurez de la función renal para manejar cargas de solutos y la inducción de preferencias hipertensogénicas.\nC) Correcta. La normativa MINSAL y de SOCHIPE prohíbe taxativamente el uso de miel en menores de 1 año debido al riesgo de botulismo del lactante (ingestión de esporas que germinan en el colon del lactante liberando neurotoxina). Asimismo, está prohibido añadir sal y azúcares simples a las preparaciones infantiles durante el primer año de vida.\nD) Incorrecta. Contraviene todas las guías de nutrición infantil.\nE) Incorrecta. Las esporas de Clostridium botulinum son termorresistentes y no se destruyen con leche tibia.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.004"
      }
    ]
  }
];

const bloque1Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque1Classes };
