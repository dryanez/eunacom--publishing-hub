# CLASE reuma-04 · Reumatologia 9.4: Artrosis / Osteoartritis: Diagnóstico Clínico, Radiología y Terapia Escalonada

Escribe `classes/lessons/reuma-04.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-04" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-01: Reumatologia 9.1: Monoartritis Aguda: Enfrentamiento Clínico y Estudio de Líquido Sinovial
- reuma-02: Reumatologia 9.2: Artritis Séptica del Adulto y Protésica: Etiología, Drenaje Urgente y Antimicrobianos
- reuma-03: Reumatologia 9.3: Artritis por Microcristales: Gota vs Condrocalcinosis (Pseudogota)
- reuma-05: Reumatologia 9.5: Artritis Idiopática Juvenil (AIJ) y Enfermedad de Still del Adulto
- reuma-06: Reumatologia 9.6: Artritis Reumatoide: Fisiopatología, Criterios ACR/EULAR 2010 y Manifestaciones Extraarticulares
- reuma-07: Reumatologia 9.7: Artritis Reumatoide: Farmacoterapia, FARME Convencionales, Biológicos y GES

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-04",
  "classId": "reuma-04",
  "tier": 2,
  "blockNum": 1,
  "blockName": "Artritis Inflamatorias, Cristales y Diagnóstico Articular",
  "topicLabel": "9.4",
  "title": "Artrosis / Osteoartritis: Diagnóstico Clínico, Radiología y Terapia Escalonada",
  "perfilCode": "1.08.1.001",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Completo",
  "ges": "Garantía Explícita en Salud (GES): Tratamiento Médico en Personas de 55 Años y Más con Artrosis de Cadera y/o Rodilla Leve o Moderada · Endoprótesis de Cadera en Personas de 65 Años y Más con Artrosis Severa",
  "reconstrucciones": "EUNACOM 2018 Q#40 · EUNACOM 2020 Q#12 · EUNACOM 2022 Q#35 · EUNACOM 2023 Q#48",
  "frecuencia": "Muy Alta · Causa más común de consulta reumatológica ambulatoria y patología GES",
  "algoTitle": "Algoritmo Diagnóstico y Escalonamiento Terapéutico en Artrosis (GES)",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Escalonamiento Terapéutico en Artrosis (GES)",
    "svg": "<svg viewBox=\"0 0 620 328\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Dolor Articular de Tipo Mecánico (Empeora con el Uso, Alivia en Reposo)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Rigidez matinal breve (&lt; 30 min) · Crepitaciones óseas · Mayores de 50 años</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"warn\" x=\"12\" y=\"69\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Estudio Radiológico Simple: Los 4 Signos Cardinales</text>\n<text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">1) Pinzamiento asimétrico · 2) Esclerosis subcondral · 3) Osteofitos marginales · 4) Geodas</text>\n<path class=\"ln\" d=\"M310,108 V130\"/>\n<rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Estratificación de Severidad y Respuesta Terapéutica</text>\n<text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Alineación con Guía Clínica GES Chilena</text>\n<path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n<path class=\"ln\" d=\"M310,199 H462 V209\"/>\n<text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Artrosis Leve a Moderada (Manejo APS)</text>\n<text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Artrosis Severa / Falla Médica</text>\n<rect class=\"dec\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Conservador Multimodal</text>\n<text class=\"sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Baja de peso + Ejercicio/Kinesiología +</text>\n<text class=\"sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Paracetamol / AINEs tópicos o ciclos orales</text>\n<rect class=\"warn\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Quirúrgica Traumatológica</text>\n<text class=\"warnT sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Dolor intratable o limitación severa</text>\n<text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Endoprótesis total de cadera o rodilla GES</text>\n<path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n<path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n<rect class=\"acc\" x=\"12\" y=\"281\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Localizaciones Típicas en Mano</text>\n<text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Nódulos de Heberden (IFD) · Nódulos de Bouchard (IFP) · Rizartrosis del pulgar (1ra CMC)</text>\n</svg>"
  },
  "contexto": "La artrosis u osteoartritis es la enfermedad articular más prevalente en el mundo y una de las principales causas de discapacidad en adultos mayores en Chile. Es una patología GES garantizada en mayores de 55 años para manejo médico y en mayores de 65 años para reemplazo protésico de cadera. El EUNACOM exige diferenciar su dolor mecánico de los dolores inflamatorios y dominar los hallazgos radiológicos clásicos.",
  "contentSections": [
    {
      "subhead": "1. Concepto, Fisiopatología y Factores de Riesgo",
      "paragraphs": [
        "La artrosis no es un simple proceso de desgaste senil pasivo, sino una enfermedad activa que compromete la <strong>totalidad de la articulación</strong>: pérdida progresiva del cartílago articular hialino, remodelación y esclerosis del hueso subcondral, formación de osteofitos marginales y sinovitis de bajo grado secundaria a detritos cartilaginosos.",
        "Factores de riesgo principales: Edad avanzada (principal factor), sexo femenino (mayor prevalencia tras la menopausia), obesidad (factor mecánico y metabólico adipocitoquinario crucial en rodilla y cadera), sobrecarga articular mecánica ocupacional o deportiva, traumatismos previos y alineación articular anómala (genu varo/valgo)."
      ]
    },
    {
      "subhead": "2. Cuadro Clínico y Localizaciones Anatómicas Típicas",
      "paragraphs": [
        "El síntoma guía es el <strong>dolor de características mecánicas</strong>: aparece o se intensifica con el movimiento, la carga y la deambulación, y cede típicamente con el reposo. A medida que avanza la enfermedad puede aparecer dolor nocturno o en reposo.",
        "La <strong>rigidez matinal o tras períodos de inactividad es breve</strong>, durando típicamente <strong>menos de 15 a 30 minutos</strong> (a diferencia de la artritis reumatoide, donde supera los 45-60 minutos).",
        "Al examen físico se aprecian crepitaciones palpables o audibles al movilizar la articulación, aumento de volumen de consistencia dura u ósea, dolor en la interlínea articular y limitación del rango articular activo y pasivo.",
        "<strong>Patrones anatómicos clásicos:</strong>",
        "• Manos: <strong>Nódulos de Heberden</strong> en articulaciones interfalángicas distales (IFD); <strong>Nódulos de Bouchard</strong> en interfalángicas proximales (IFP); y <strong>Rizartrosis</strong> en la primera articulación carpometacarpiana (base del pulgar). <em>Nota EUNACOM:</em> Las articulaciones metacarpofalángicas (MCF) y muñecas son respetadas por la artrosis típica (su afectación orienta a artritis reumatoide o hemocromatosis).",
        "• Grandes articulaciones de carga: Rodilla (gonartrosis, frecuentemente femorotibial medial con deformidad en genu varo) y Cadera (coxartrosis, con dolor inguinal que irradia a cara anterior de muslo y rodilla)."
      ]
    },
    {
      "subhead": "3. Diagnóstico Radiológico y Manejo Terapéutico Escalonado GES",
      "paragraphs": [
        "El diagnóstico es eminentemente clínico-radiológico. La radiografía simple en carga (bipedestación para rodillas y pelvis anteroposterior para cadera) revela los <strong>cuatro signos cardinales patognomónicos</strong>: 1) Pinzamiento asimétrico del espacio articular; 2) Esclerosis ósea subcondral (hueso eburnado reactivo); 3) Osteofitos marginales (proliferación fibrocartilaginosa calcificada); y 4) Geodas o quistes subcondrales.",
        "<strong>Manejo Escalonado según Guía Clínica GES:</strong>",
        "• <strong>Medidas No Farmacológicas (Pilar Fundamental):</strong> Educación del paciente, reducción de peso corporal (disminuye exponencialmente la carga intraarticular), kinesioterapia con fortalecimiento del cuádriceps en gonartrosis, uso de bastón en la mano contralateral para descargar cadera/rodilla, y calzado amortiguador.",
        "• <strong>Farmacoterapia de Primera Línea:</strong> Paracetamol (hasta 1 g cada 8 horas) para dolor leve a moderado. En artrosis de rodilla o manos se recomienda de inicio <strong>AINEs tópicos (diclofenaco o ketoprofeno en gel)</strong> por su eficacia comparable a los orales pero con excelente perfil de seguridad gastrointestinal y renal.",
        "• <strong>Farmacoterapia de Segunda Línea:</strong> AINEs orales (Ibuprofeno, Naproxeno o inhibidores COX-2 como Celecoxib) en las dosis mínimas eficaces y en <strong>ciclos cortos durante períodos de exacerbación</strong>, asociando siempre protección gástrica con IBP en mayores de 60 años.",
        "• <strong>Tratamiento Invasivo / Quirúrgico:</strong> Infiltración intraarticular con corticoides de depósito (triamcinolona) como rescate temporal en crisis inflamatorias con derrame articular. La <strong>endoprótesis articular total (artroplastia de cadera o rodilla)</strong> está indicada ante dolor refractario invalidante y limitación funcional severa a pesar del tratamiento médico óptimo."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Diferencial Clínico: Artrosis vs Artritis Reumatoide",
    "headers": [
      "Parámetro",
      "Artrosis / Osteoartritis",
      "Artritis Reumatoide (AR)"
    ],
    "rows": [
      [
        "Naturaleza de la enfermedad",
        "Degenerativa / biomecánica del cartílago",
        "Autoinmune inflamatoria de membrana sinovial"
      ],
      [
        "Tipo de dolor",
        "Mecánico (empeora con uso, alivia en reposo)",
        "Inflamatorio (peor en reposo, alivia con movimiento)"
      ],
      [
        "Rigidez matinal",
        "Breve (< 15 a 30 minutos)",
        "Prolongada (> 45 a 60 minutos)"
      ],
      [
        "Articulaciones en mano",
        "IFD (Heberden), IFP (Bouchard), 1ra CMC",
        "MCF, IFP, muñecas (RESPETA típicamente IFD)"
      ],
      [
        "Consistencia de tumefacción",
        "Dura, ósea (osteofitos)",
        "Blanda, pastosa, fluctuante (sinovitis)"
      ],
      [
        "Signos radiológicos",
        "Pinzamiento asimétrico, osteofitos, esclerosis",
        "Osteopenia periarticular, erosiones simétricas marginales"
      ],
      [
        "Laboratorio sistémico",
        "VHS y PCR normales, FR y Anti-CCP negativos",
        "VHS y PCR elevadas, FR y Anti-CCP positivos (80%)"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 64 años, obesa (IMC 32 kg/m²), consulta por dolor en ambas rodillas de 2 años de evolución, que empeora al bajar escaleras y al final de la jornada laboral, aliviando al sentarse. Refiere rigidez de rodillas al levantarse que dura unos 10 minutos. Al examen físico se palpan crepitaciones gruesas femorotibiales bilaterales y leve deformidad en varo, sin signos de calor local ni eritema. En las manos presenta nódulos duros no dolorosos en articulaciones interfalángicas distales de ambas manos.",
    "conducta": "El cuadro es plenamente concordante con una osteoartritis (artrosis) femorotibial y de manos. El dolor mecánico que empeora con la carga (bajar escaleras), la rigidez matinal menor a 30 minutos, las crepitaciones óseas y la presencia de nódulos de Heberden en las IFD son los elementos cardinales diagnósticos. El manejo médico inicial incluye reducción de peso, kinesioterapia para fortalecimiento muscular, AINEs tópicos o paracetamol y educación GES."
  },
  "explicacion": "El cuadro es plenamente concordante con una osteoartritis (artrosis) femorotibial y de manos. El dolor mecánico que empeora con la carga (bajar escaleras), la rigidez matinal menor a 30 minutos, las crepitaciones óseas y la presencia de nódulos de Heberden en las IFD son los elementos cardinales diagnósticos. El manejo médico inicial incluye reducción de peso, kinesioterapia para fortalecimiento muscular, AINEs tópicos o paracetamol y educación GES.",
  "keyPoints": [
    "El dolor de la artrosis es típicamente MECÁNICO: aumenta con el uso/deambulación y alivia en reposo.",
    "La rigidez matinal es breve: dura menos de 15 a 30 minutos.",
    "Afectación clásica en manos: Nódulos de Heberden en IFD, Nódulos de Bouchard en IFP y Rizartrosis en 1ra CMC.",
    "La artrosis típicamente RESPETA las articulaciones metacarpofalángicas (MCF) y muñecas.",
    "Los 4 signos radiológicos cardinales son: pinzamiento articular asimétrico, esclerosis subcondral, osteofitos y geodas.",
    "Tratamiento de primera línea: medidas no farmacológicas (baja de peso, kinesiología) + AINEs tópicos / Paracetamol.",
    "Los AINEs orales se reservan para períodos breves de reagudización dolorosa, minimizando riesgos digestivos y renales."
  ],
  "questions": [
    {
      "stem": "Un paciente de 66 años aqueja dolor en la ingle derecha, especialmente al\ncaminar varias cuadras. Se solicita radiografía de cadera que demuestra\ndisminución del espacio articular, con algunos osteofitos acetabulares y\nesclerosis del hueso subcodral. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Pelviespondilopatía seronegativa"
        },
        {
          "id": "B",
          "text": "Artrosis"
        },
        {
          "id": "C",
          "text": "Condrocalcinosis"
        },
        {
          "id": "D",
          "text": "Necrosis avascular de la cabeza femoral"
        },
        {
          "id": "E",
          "text": "Epifisiolisis femoral"
        }
      ],
      "correcta": "B",
      "explicacion": "El diagnóstico de artrosis (osteoartritis) de cadera, también conocida como coxartrosis, es el más probable y se sustenta en una sólida correlación entre la clínica y los hallazgos radiológicos del paciente. La artrosis es una enfermedad degenerativa del cartílago articular que afecta predominantemente a adultos mayores, por lo que la edad del paciente (66 años) es un factor de riesgo clave. El síntoma principal, el dolor inguinal de características \"mecánicas\" (que empeora con la actividad como caminar y mejora con el reposo), es el patrón clásico de la coxartrosis. El dolor se localiza típicamente en la ingle y puede irradiarse a la cara anterior del muslo y la rodilla.\n\nLos hallazgos en la radiografía son patognomónicos de la artrosis. La \"disminución del espacio articular\" es el reflejo directo de la pérdida y el desgaste del cartílago hialino. Los \"osteofitos acetabulares\" son espolones óseos que se forman en los márgenes de la articulación como un intento de reparación y estabilización del hueso ante la pérdida de cartílago. Finalmente, la \"esclerosis del hueso subcondral\" corresponde al aumento de la densidad ósea justo debajo del cartílago, una respuesta del hueso al aumento de la presión y el estrés mecánico debido a la disfunción del cartílago. La combinación de estos tres elementos en un paciente de edad avanzada con dolor mecánico confirma el diagnóstico.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.004"
    },
    {
      "stem": "Un paciente de 71 años consulta por dolor en la ingle derecha, que aumenta\ncon la marcha, por lo que ha disminuido su actividad. El dolor varía de un día a\notro y cede con el reposo. El examen físico se observa dolor a la abducción y\nrotación interna de la cadera derecha. Se solicita radiografía de cadera que\nmuestra disminución del espacio articular, con reacción subcortical y presencia de algunos osteofitos acetabulares. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Iniciar tratamiento sintomático con paracetamol"
        },
        {
          "id": "B",
          "text": "Solicitar hemograma, VHS, ANA, ANCA y factor reumatoídeo"
        },
        {
          "id": "C",
          "text": "Iniciar corticoides orales"
        },
        {
          "id": "D",
          "text": "Realizar infiltraciones con corticoides"
        },
        {
          "id": "E",
          "text": "Resolver quirúrgicamente"
        }
      ],
      "correcta": "A",
      "explicacion": "La alternativa correcta es la A (Iniciar tratamiento sintomático con paracetamol). La presentación clínica del paciente, un hombre de 71 años con dolor inguinal que aumenta con la marcha, alivia con el reposo y con limitación de la movilidad de la cadera (abducción y rotación interna dolorosa), junto con los hallazgos radiológicos de disminución del espacio articular, reacción subcondral y osteofitos, son altamente sugestivos de artrosis de cadera (coxartrosis). En el manejo inicial de la artrosis, las guías clínicas (aunque no existe una GPC específica de MINSAL para coxartrosis, se aplican principios generales de manejo del dolor crónico y artrosis en otras localizaciones) recomiendan el tratamiento sintomático con analgésicos como el paracetamol o AINEs, asociado a medidas no farmacológicas como la fisioterapia y modificación de la actividad física. Dado que el dolor es tolerable y la limitación funcional no es extrema (disminución de la actividad, no invalidez completa), el inicio con paracetamol es una opción razonable antes de escalar a AINEs, considerando los riesgos asociados a estos últimos, especialmente en un paciente de edad avanzada.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.004"
    }
  ],
  "vignetteText": "Mujer de 64 años, obesa (IMC 32 kg/m²), consulta por dolor en ambas rodillas de 2 años de evolución, que empeora al bajar escaleras y al final de la jornada laboral, aliviando al sentarse. Refiere rigidez de rodillas al levantarse que dura unos 10 minutos. Al examen físico se palpan crepitaciones gruesas femorotibiales bilaterales y leve deformidad en varo, sin signos de calor local ni eritema. En las manos presenta nódulos duros no dolorosos en articulaciones interfalángicas distales de ambas manos."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "artrosis, osteoartritis, clinico, radiologia, terapia")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2017 · Pregunta 58 · confianza 0.85
Una paciente de 52 años, con antecedente de artritis reumatoide en tratamiento per- manente con AINES y prednisona por vía oral y tratamiento intermitente con metotre- xate por vía oral, presenta un cuadro de astenia, adinamia y disnea de esfuerzos que ha empeorado en el último tiempo. Se solicitan exámenes en los que destacan una creatini- na de 1,6mg/dL, hemograma con hematocrito 29%, hemoglobina 9,7g/dL, plaquetas 147.000/mm3, blancos 4.200/mm3 y al frotis se aprecia microcitosis. Además se solicita perfil de fierro que muestra ferremia de 40ug/dL (60-160 ug/dL) y transferrina de 190mg/dL (240-360mg/dL). ¿Cuál es el diagnóstico más probable?
- A) Anemia por enfermedades crónicas
- B) Mielodisplasia
- C) Anemia por insuficiencia renal crónica
- D) Hipoplasia medular
- E) Mieloma múltiple
**Correcta: A**
Explicación del banco: Tanto por tener AR, como por la ferremia baja, con transferrina baja, orienta mu- cho a una anemia por enfermedades crónicas.

### [2] EUNACOM Julio 2016 · Pregunta 102 · confianza 0.97
Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos. El diagnóstico más probable es:
- A) Artritris psoriática
- B) Artriris reumatoide
- C) Artritis reactiva
- D) Condrocalcinosis
- E) Artrosis
**Correcta: E**
Explicación del banco: Tanto la clínica (compromiso de IFD, IFP y primera CMC), como la radiografía son clásicas de artrosis. No importa la positividad de marcadores, ya que están positivos en un 5% de las personas sanas y solo tienen importancia cuando la clínica es de Lupus o Artritis reumatoide, que no es el caso.

### [3] EUNACOM Diciembre 2025 · Pregunta 143 · confianza 0.95
¿A qué concepto corresponde la siguiente deﬁnición: “Conjunto de medidas des8nadas a evitar que una enfermedad ocurra, actuando antes de que exista la enfermedad o el daño causado por esta”?
- A) Prevención primaria
- B) Prevención secundaria
- C) Prevención terciaria
- D) Prevención cuaternaria
- E) Promoción de la salud
**Correcta: A**
Explicación del banco: Prevención primaria actúa antes de que exista la enfermedad (ej. vacunas con papiloma). Prevención secundaria actúa cuando ya existe la enfermedad, pero todavía no hay síntomas, permiGendo un diagnóstico oportuno (ej. PAP). Prevención terciaria actúa cuando la enfermedad ya Gene síntomas, para recuperar la salud y evitar complicaciones y recidivas (ej. histerectomía radical). Prevención cuaternaria enfrenta los síntomas, en ausencia de una patología orgánica (ej. psicoterapia de trastorno somatomorfo). Promoción de la salud consiste en enseñar hábitos de vida saludables, por lo que se enmarca dentro de la prevención primaria, pero su deﬁnición es especíﬁca.

### [4] EUNACOM Julio 2024 · Pregunta 127 · confianza 0.95
Un paciente de 32 años consulta por la idea recurrente de que debe limpiar sus utensilios de alimentación para evitar adquirir una infección intestinal. Refiere que se cepilla los dientes durante 15 minutos y luego se enjuaga la boca por 10 minutos más. Reconoce que a veces quiere dejar de hacerlo, pero no puede evitarlo. Como antecedente, sufrió de leucemia aguda a los 7 años, siendo manejado con quimioterapia y logrando la curación de la enfermedad. ¿Cuál es el diagnóstico más probable?
- A) Manía aguda
- B) Trastorno por descontrol de impulsos
- C) Trastorno de personalidad
- D) Esquizofrenia
- E) Trastorno obsesivo compulsivo
**Correcta: E**
Explicación del banco: Trastorno Obsesivo-Compulsivo: El cuadro clínico describe un trastorno obsesivo-compulsivo clásico, con obsesión por la contaminación y compulsión por la limpieza.

### [5] EUNACOM Julio 2017 · Pregunta 121 · confianza 0.95
Una paciente de 64 años consulta por artralgias de las manos, caderas y rodillas. Al examen físico presenta aumento de volumen de las articulaciones interfalángicas, con nódulos de Heberden. Además tiene limitación de los movimientos de las rodillas, con dolor y crepitación articular, sin signos inflamatorios y limitación a la abducción ambas caderas. ¿Cuál es el tratamiento inicial más adecuado?
- A) Prednisona
- B) Paracetamol
- C) Metotrexato
- D) Bifosfonatos
- E) Ibuprofeno
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Paracetamol** (opción **B**). La primera línea de tratamiento en la artrosis, es el paracetamol.. el tratamiento hay que saberlo bien, De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [6] EUNACOM Julio 2015 · Pregunta 46 · confianza 0.95
Un paciente de presenta dolor abdominal en el flanco izquierdo, por lo que se realiza una ecografía abdominal, que muestra un tumor renal sólido, de 2,5 cm de diámetro, en el polo superior del riñón derecho. Se solicita un TAC, que confirma el tumor renal de aspecto sólido y que capta contraste. ¿Cuál es la conducta más adecuada?
- A) Nefrectomía radical
- B) Nefrectomía parcial
- C) Nefroureterectomía
- D) Iniciar inhibidores de la tirosinasa
- E) Realizar seguimiento ecográfico
**Correcta: B**
Explicación del banco: Todo tumor renal sólido (con pocas excepciones) se presume un cáncer renal. Si son menores a 7 cm (antes era 4), se tratan con nefrectomía parcial (más aún en monorrenos o insuficientes renales). Si son más de 7 cm se tratan con nefrectomía radical. Si tienen metástasis ganglionares, van a terapia paliativa (la inmunoterapia puede servir, pero poco y es muy cara). Si es de pelvis renal, se hace nefroureterectomía.

### [7] EUNACOM Agosto 2021 · Pregunta 78 · confianza 0.92
Una mujer de 52 años presenta reglas irregulares, desde hace 8 meses, asociadas a bochornos frecuentes, con calor, enrojecimiento de la cara, sudoración nocturna y dificultades para dormir. ¿Cuál es la indicación más adecuada para el manejo de los síntomas de esta paciente?
- A) Fitoestrógenos
- B) Terapia de reemplazo hormonal combinada continua
- C) Terapia de reemplazo hormonal combinada cíclica
- D) Estrógenos solos continuos
- E) Progestágenos solos continuos
**Correcta: B**
Explicación del banco: Tiene síntomas climatéricos, que se tratan con terapia de reemplazo hormonal. La regla general es que se usan estrógenos más progestágenos, salvo en las pacientes histerectomizadas, en que se usa estrógeno solo. En este caso tiene útero, ya que tiene reglas irregulares. En los casos en que la TRH está contraindicada (ej. cáncer de mama) se usan los antidepresivos, ya sea IRS o venlafaxina. En la práctica, suele indicarse de tipo continua, ya que no sirve mayormente la TRH cíclica (aunque hay quienes postulan que sirve en el inicio de los síntomas climatérico, como una forma de ciclar a la paciente con reglas irregulares; sin embargo, en la práctica casi no existen fármacos de ese tipo disponibles en el medio chileno, salvo que use ACOs como TRH).

### [8] EUNACOM Diciembre 2018 · Pregunta 52 · confianza 0.92
Un paciente de 63 años consulta por dolor progresivo, de una semana de evolución, en la cara lateral de la cadera, que aumenta con la caminata y limita sus movimientos. Además, en el último tiempo, le impide dormir para ese lado. Al examen físico tiene dolor a la palpación de la cara externa de la cadera y a la rotación externa forzada. El diagnóstico más probable es:
- A) Coxartrosis
- B) Fractura incompleta de cadera por estrés
- C) Hernia del núcleo pulposo, con radiculopatía L2
- D) Bursitis trocantérica
- E) Síndrome de la fascia lata rígida
**Correcta: D**
Explicación del banco: Diagnóstico: **Bursitis trocantérica** (opción **D**). Parece una bursitis trocantérica clásica.. La artrosis (osteoartritis) es la patología articular más frecuente. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [9] EUNACOM Julio 2017 · Pregunta 139 · confianza 0.92
¿Qué antecedente es indicación del uso de estrógenos orales solos, en la terapia de reemplazo hormonal?
- A) Antecedente de cáncer de mama
- B) Antecedente de dislipidemia
- C) Antecedente de histerectomía total
- D) Osteoporosis
- E) Edad mayor a 70 años
**Correcta: C**
Explicación del banco: El uso de progestágeno en la TRH está solo indicado para evitar el cáncer de endo- metrio. Si hay histerectomía, se hace innecesario dar progestágeno y se dan estrógenos solos.

### [10] EUNACOM Julio 2015 · Pregunta 155 · confianza 0.92
Una paciente se realiza un legrado por un aborto espontáneo. La biopsia es informada como “mola completa”. Su HCG postlegrado es de 750 UI/L. ¿Cuál es la conducta más adecuada?
- A) Seguirla con niveles seriados de HCG
- B) Realizar biopsia endometrial
- C) Indicar anticonceptivos con progestágeno solo
- D) Repetir el legrado
- E) Indicar metotrexato
**Correcta: A**
Explicación del banco: Ante un embarazo molar se debe seguir con HCG, después de sacarla. Si se eleva o mantiene sin bajar, se diagnostica neoplasia trofoblástica gestacional y se procede a la histerectomía más quimioterapia con metotrexato. Una HCG de 750 postlegrado, es bastante baja.

### [11] EUNACOM Diciembre 2025 · Pregunta 46 · confianza 0.9
Una paciente de 55 años, con menopausia a los 51 años y usuaria de estrógenos transdérmicos como terapia de reemplazo hormonal, consulta por sangrado genital de 5 días de evolución. Al examen Fsico, sus signos vitales son normales y la especuloscopía no muestra metrorragia ac8va ni lesiones del cuello uterino. ¿Cuál es la conducta más adecuada?
- A) Realizar histerectomía
- B) Aumentar la dosis de estrógenos
- C) Iniciar an2concep2vos orales
- D) Solicitar biopsia de endometrio
- E) Indicar ácido tranexámico vía oral
**Correcta: D**
Explicación del banco: Toda metrorragia postmenopáusica se debe estudiar. Existen dos opciones de estudio: 1. Ecografía transvaginal (el más usado) y 2. Directamente la biopsia endometrial (BEM), que habitualmente se hace por técnicas poco invasivas, como la Pipelle. En el caso de que se uGlice la ecografía, se ve el grosor del endometrio, si es menor a 5 mm, se asume que era atroﬁa vaginal y se observa. Si es de 5 mm o más, se biopsia. En caso de que esté con terapia de reemplazo hormonal (TRH), se biopsia desde 8 mm. Si se solicita una ecografía por otro motivo, en una paciente postmenopáusica sin metrorragia, también se biopsia desde los 11 mm. En resumen, las indicaciones de BEM en la postmenopausia: 1. Cualquier metrorragia (aceptable, sin EcoTV). 2. Metrorragia + EcoTV con EM > 4-5 mm (≥ 8 mm si TRH). 3. Asintomática + EcoTV con EM ≥ 11 mm

### [12] EUNACOM Diciembre 2025 · Pregunta 43 · confianza 0.9
Una paciente de 56 años, usuaria de terapia de reemplazo hormonal y sin síntomas ginecológicos, se realiza una ecograFa abdominal durante el estudio de un cuadro cons8pación crónica. En dicho examen se detecta un mioma uterino subseroso de 32 × 35 mm, FIGO 6. ¿Cuál es la conducta más adecuada?
- A) Realizar laparoscopía
- B) Suspender la terapia de reemplazo hormonal
- C) Iniciar an2concep2vos orales
- D) Realizar histerectomía
- E) Realizar control ecográﬁco en 6 meses
**Correcta: E**
Explicación del banco: Los miomas asintomáticos se observan, sin importar su clasiﬁcación. Por cultura general, la clasiﬁcación FIGO va del 1 al 8 y se reﬁere a la ubicación, en relación a la pared. Mientras más bajo, más hacia submucoso (hacia la cavidad uterina) y mientras más alto, más subseroso (hacia afuera). FIGO 4 es intramural puro y FIGO 6 es subseroso, con un componente intramural.

### [13] EUNACOM Diciembre 2025 · Pregunta 162 · confianza 0.9
Una paciente de 53 años acude a control ginecológico. Tuvo su menopausia a los 51 años y está en terapia de reemplazo hormonal, con estrógeno y progestágeno por vía oral, como tratamiento de los síntomas vasomotores del climaterio. Su examen ginecológico es normal, al igual que su mamograFa y PAP. Además, se solicita una ecograFa transvaginal, cuya imagen se presenta a con8nuación: ¿Cuál es la conducta más adecuada?
- A) Realizar biopsia endometrial
- B) Controlar con ecogra:a en 6 meses
- C) Suspender la terapia de reemplazo hormonal
- D) Realizar resección de la lesión por laparoscopía
- E) Instalar disposi2vo intrauterino medicado con levonorgestrel
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Controlar con ecogra:a en 6 meses** (opción **B**). Tiene un mioma asintomático, por lo que se debe observar evolución. Fuente imagen: hxps://we.riseup.net/assets/230674/.... Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención.

### [14] EUNACOM Julio 2025 · Pregunta 127 · confianza 0.9
Hombre de 55 años con dolor en el hombro derecho al elevar el brazo entre 60-120° (arco doloroso). Prueba de Neer y Hawkins positivas. ¿Cuál es el diagnóstico más probable?
- A) Síndrome de pinzamiento subacromial (manguito rotador)
- B) Luxación glenohumeral
- C) Capsulitis adhesiva (hombro congelado)
- D) Artritis reumatoide de hombro
- E) Fractura de clavícula
**Correcta: A**
Explicación del banco: Arco doloroso 60-120° + Neer (+) + Hawkins (+) = síndrome de pinzamiento subacromial por tendinitis/desgarro del manguito rotador. Tratamiento: kinesioterapia + AINEs ± corticoides locales.

### [15] EUNACOM Julio 2025 · Pregunta 95 · confianza 0.9
Hombre de 45 años con lumbalgia mecánica de 5 días de evolución, sin irradiación, sin signos de alarma. EF: dolor a la palpación paravertebral lumbar, sin déficit neurológico. ¿Cuál es el manejo más adecuado?
- A) Analgesia (AINEs o paracetamol) + kinesioterapia activa; no reposo en cama
- B) Reposo absoluto por 7 días
- C) Cirugía de columna
- D) Infiltración epidural de corticoides
- E) Resonancia magnética urgente
**Correcta: A**
Explicación del banco: Lumbalgia mecánica aguda sin alarma: AINEs por corto plazo + actividad física progresiva + kinesioterapia. El reposo en cama prolonga la incapacidad. Sin indicación de imagen en fase aguda.

### [16] EUNACOM Julio 2025 · Pregunta 24 · confianza 0.9
Mujer de 55 años con DM2 en tratamiento con metformina, requiere corticoterapia con prednisona 40 mg/día por enfermedad pulmonar. Sus glicemias de ayuno eran 130 mg/dL y post-prandiales suben a 280 mg/dL. ¿Cuál es el ajuste más adecuado?
- A) Iniciar insulina
- B) Agregar metformina adicional
- C) Pioglitazona
- D) Glibenclamida
- E) Sitagliptina
**Correcta: A**
Explicación del banco: Corticoides causan hiperglicemia postprandial marcada por resistencia a la insulina. La insulina es el tratamiento de elección en este contexto (flexibilidad de ajuste, control rápido). Los hipoglicemiantes orales no dan el control necesario con dosis altas de corticoides.

### [17] EUNACOM Diciembre 2025 · Pregunta 20 · confianza 0.9
Un paciente de 55 años, diagnos8cado con un linfoma no Hodgkin con múl8ples masas medias`nicas y abdominales de gran tamaño, de hasta 25 cm, inicia quimioterapia endovenosa. Al tercer día evoluciona con malestar general marcado, obnubilación y disnea. Al examen Fsico, se aprecia desorientado en el 8empo y el espacio, en malas condiciones generales y se solicitan exámenes de laboratorio, entre los que destacan ácido úrico: 13 mg/dL, sodio: 140 mEq/L, potasio: 5,9 mEq/L, fósforo: 6,5 mg/dl, crea8nina plasmá8ca: 2,1 mg/dl y hematocrito 22%. ¿Cuál es el diagnós8co más probable?
- A) Hipercalcemia maligna
- B) Metástasis cerebrales
- C) Síndrome de vena cava superior
- D) Síndrome de compresión medular
- E) Síndrome de lisis tumoral
**Correcta: E**
Explicación del banco: Es un síndrome de lisis tumoral clásico, con rotura celular masiva, que se reﬂeja en hiperuricemia, hiperkalemia, hiperfosfemia, hipocalcemia, acidosis, falla renal, compromiso de conciencia, compromiso hemodinámico. Se trata con hidratación, hipouricemiantes (ej. alopurinol) y manejo de los electrolitos según las alteraciones (ej. Bicarbonato, calcio, furosemida, insulina más glucosa, resinas de intercambio como el sulfonato de poliestireno, etc.).

### [18] EUNACOM Julio 2025 · Pregunta 63 · confianza 0.9
Paciente con linfoma en quimioterapia. Post primer ciclo presenta hiperuricemia, hiperkalemia, hiperfosfatemia e hipocalcemia. Creatinina en ascenso. ¿Cuál es el diagnóstico?
- A) Síndrome de lisis tumoral
- B) Insuficiencia renal aguda prerenal
- C) Nefrotoxicidad por cisplatino
- D) Síndrome hemolítico urémico
- E) Hiperparatiroidismo secundario
**Correcta: A**
Explicación del banco: Post quimioterapia: hiperuricemia + hiperkalemia + hiperfosfatemia + hipocalcemia + IRA = síndrome de lisis tumoral. Ocurre por destrucción masiva de células tumorales que liberan su contenido.

### [19] EUNACOM Diciembre 2025 · Pregunta 73 · confianza 0.9
Una paciente de 35 años es traída al servicio de urgencia debido a que, luego del consumo de alcohol en una ﬁesta, presentó una ac8tud agresiva peleando con otros invitados, a quienes arrojó vasos de vidrio, por lo que fue re8rada del lugar. Reﬁere que consume alcohol de manera esporádica, habitualmente solo durante los ﬁnes de semana, y que lo hace como una forma de distenderse de su alta carga laboral. En una oportunidad fue detenida por manejar en estado de ebriedad, sin embargo, ella no considera que ello sea un problema. ¿Cuál es la conducta más adecuada?
- A) Iniciar disulﬁram vía oral
- B) Indicar benzodiacepinas vía oral
- C) Iniciar bupropión vía oral
- D) Realizar entrevista mo2vacional
- E) Derivar para psicoterapia cogni2vo-conductual
**Correcta: D**
Explicación del banco: Presenta un consumo perjudicial de alcohol con escasa conciencia de enfermedad (etapa precontemplativa), por lo que primero se debe trabajar la motivación al cambio. De nada sirve iniciar fármacos o derivar a psicoterapia, si no Gene intenciones de cambiar.

### [20] EUNACOM Enero 2023 · Pregunta 95 · confianza 0.9
Paciente con artralgias en IFD e IFP, rigidez matinal de 3-5 minutos, dolor que aumenta con actividad. Radiografía: disminución de espacio articular, esclerosis subcondral y osteofitos. ¿Diagnóstico?
- A) Artritis reumatoide
- B) Artrosis
- C) Artritis psoriásica
- D) Artritis gotosa crónica
- E) Espondilitis anquilosante
**Correcta: B**
Explicación del banco: Diagnóstico: **Artrosis** (opción **B**). Artrosis. A todos, con este video vamos a empezar con el tema de reumatología y los primeros dos temas que vamos a ver son artrosis y la monotítica y aguga, que incluye artítica por cristales y además la artítica y séptica. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [21] EUNACOM Diciembre 2022 · Pregunta 7 · confianza 0.9
Una paciente de 56 años tiene antecedentes de cáncer de mama, en tratamiento con quimioterapia cuyo último ciclo fue hace 9 días. Consulta porque ha presentado malestar general y fiebre hasta 38,5°C. Al examen físico, se confirma febril, con frecuencia cardíaca 95x’, PA: 120/80, sin otras alteraciones. ¿Cuál es el examen de elección para iniciar el estudio?
- A) Hemograma
- B) Radiografía de tórax
- C) Urocultivo
- D) Ecografía abdominal
- E) Mielograma
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Urocultivo** (opción **C**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Hemograma, Radiografía de tórax) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [22] EUNACOM Diciembre 2019 · Pregunta 159 · confianza 0.9
Un niño de 2 años presenta tendencia a las hemorragias, ya que sangra con facilidad y presenta múltiples equimosis. En el examen físico, se observan extremidades inferiores con equimosis en distinto grado de resolución, algunas de gran tamaño. Se solicitan exámenes, entre los que destacan hemograma con recuento de plaquetas normal, TP normal y TTPA alargado. ¿Cuál es el diagnóstico más probable?
- A) Púrpura trombocitopénica inmune
- B) Hemofilia
- C) Enfermedad de von Willebrand
- D) Enfermedad de Glanzmann
- E) Púrpura trombocitopénica trombótica
**Correcta: B**
Explicación del banco: El alargamiento del TTPA sugiere fuertemente hemofilia. Que tenga una clínica tan florida, en un niño (sexo masculino) pequeño, la sugiere también. Suele evolucionar a hemartrosis y hematomas musculares y de otras partes del cuerpo. PTI y PTT tienen plaquetopenia. EvW y Glanzmann tienen alteración de la hemostasia primaria, con petequias y clínicas generalmente más leves que la hemofilia, aunque sí pueden tener una clínica similar, en las formas más graves. Eso sí, el TTPA suele estar normal, salvo en algunas variantes de la EvW en que sí se puede alargar.

### [23] EUNACOM Diciembre 2019 · Pregunta 130 · confianza 0.9
Un paciente de 18 años presenta equimosis frecuente y tendencia a presentar petequias en las extremidades inferiores. Como antecedente, presentó hemorragia tardía, en relación a la extracción de un molar y hace algunos años sufrió un hematoma en el muslo izquierdo, en relación a un traumatismo, que requirió manejo hospitalizado. Se solicitan exámenes que muestran hemograma con 160.000 plaquetas por mm3, sin alteraciones de la serie roja ni blanca, TTPA de 45 segundos y TP de 100%. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Glanzmann
- B) Enfermedad de von Willebrand
- C) Déficit de factor VII
- D) Hemofilia
- E) Púrpura trombopénica inmune
**Correcta: B**
Explicación del banco: Es una EvW clásico (alteración de hemostasia primaria: petequias y alveolorragia), con plaquetas normales (es disfunción plaquetaria) y puede alargar levemente el TTPA. La hemofilia alarga el TTPA pero tendría muchos más síntomas y hematomas, además de hemartrosis y sin petequias.

### [24] EUNACOM Julio 2018 · Pregunta 76 · confianza 0.9
Una paciente de 30 años se realiza un PAP, que resulta atípico de alto grado, por lo que se realiza una colposcopía y biopsia, que es informada como NIE-1, de localización exocervical. ¿Cuál es la conducta más adecuada?
- A) Seguimiento con PAP
- B) Crioterapia
- C) Cono cervical
- D) Tipificación de virus papiloma humano
- E) Diatermocoagulación
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Diatermocoagulación** (opción **E**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Seguimiento con PAP, Crioterapia) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [25] EUNACOM Diciembre 2017 · Pregunta 62 · confianza 0.9
Un paciente es diagnosticado de infección por VIH, hace 3 meses. Está en etapa A3 e inició tratamiento con triterapia antirretroviral al momento del diagnóstico. Consulta ahora por aparición de placas pruriginosas en el tronco, más algunas lesiones similares en las palmas y plantas. Además tiene una lesión parecida en la cara interna de la mejilla derecha. ¿Cuál es el diagnóstico más probable?
- A) Pitiriasis rosada
- B) Pitiriasis versicolor
- C) Síndrome pie mano boca
- D) Sífilis secundaria
- E) Reacción adversa a la triterapia antirretroviral
**Correcta: D**
Explicación del banco: Es una sífilis secundaria clásica. Además recordar que el principal factor de riesgo para tener una ETS, es tener otra ETS.
