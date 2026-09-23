/**
 * TOMO 20: GINECOLOGÍA & ONCOLOGÍA GINECOLÓGICA · BLOQUE 4
 * Oncología Ginecológica & Patología Mamaria (20.13 a 20.16)
 */

const { flowGinecologia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "gin-13",
    "classId": "gin-13",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Oncología Ginecológica & Patología Mamaria",
    "topicLabel": "20.13",
    "title": "Cáncer Cervicouterino (CCU) GES, Lesiones Preinvasoras (Bethesda) y Colposcopía",
    "perfilCode": "3.02.1.013",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES N° 3: Cáncer Cervicouterino (Tamizaje, Diagnóstico, Tratamiento y Seguimiento garantizados).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#55) · EUNACOM Julio 2023 (Q#32) · EUNACOM Diciembre 2022 (Q#24)",
    "frecuencia": "Máxima rentabilidad · Tamizaje PAP cada 3 años (25-64a), conducta ante PAP alterado (Colposcopía) y estadios precoces vs avanzados (≥ IIB)",
    "svg": null,
    "algoTitle": "Algoritmo de Tamizaje, Diagnóstico y Tratamiento del Cáncer Cervicouterino (GES)",
    "diagramRows": [
      {
        "t": "Tamizaje Poblacional GES: PAP cada 3 años en mujeres de 25 a 64 años (o Test VPH)",
        "s": "Evaluar informe citológico según el Sistema Bethesda",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Resultado de Citología Cervical (PAP)",
        "al": "Normal vs Alterado (LIEBG / LIEAG / ASCUS / Cáncer)",
        "ll": "PAP Normal (Negativo para lesión)",
        "left": {
          "t": "Control Rutinario en 3 Años",
          "s": "Mantener tamizaje trienal en APS · Educación en factores de riesgo y vacuna VPH",
          "type": "acc"
        },
        "rl": "PAP Alterado (LIEAG, NIE I-III, Cáncer o VPH 16/18 +)",
        "right": {
          "t": "DERIVACIÓN INMEDIATA A COLPOSCOPÍA (GES)",
          "s": "Unidad de Patología Cervical (UPC) · Colposcopía + Biopsia dirigida obligatoria · Plazo GES: atención en < 30 días",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Etapificación FIGO y Tratamiento del CCU Invasor",
        "al": "Estadios Precoces vs Estadios Avanzados (≥ IIB)",
        "ll": "Estadios Precoces (IA a IB2: Confinado a cérvix / sin parametrios)",
        "left": {
          "t": "TRATAMIENTO QUIRÚRGICO RADICAL",
          "s": "Conización (IA1 sin ILV) o Histerectomía Radical con Linfadenectomía Pélvica (Wertheim-Meigs)",
          "type": "acc"
        },
        "rl": "Estadios Avanzados (≥ IIB: Invasión de Parametrios a vagina baja)",
        "right": {
          "t": "QUIMIOTERAPIA + RADIOTERAPIA CONCOMITANTE",
          "s": "¡CIRUGÍA FORMALMENTE CONTRAINDICADA! Radioterapia externa + Braquiterapia + Cisplatino semanal",
          "type": "crit"
        }
      }
    ],
    "contexto": "El Cáncer Cervicouterino (CCU) es la segunda neoplasia ginecológica más frecuente y una causa mayor de muerte prevenible en mujeres chilenas en edad fértil y perimenopáusica. Está cubierto integralmente por las Garantías Explícitas en Salud (GES N° 3). El 99.7% de los casos se debe a la infección persistente por genotipos oncogénicos del Virus del Papiloma Humano (VPH), principalmente los tipos 16 y 18. El tamizaje universal en Chile se realiza con el Papanicolaou (PAP) cada 3 años entre los 25 y 64 años (y progresivamente con Test de VPH). El médico general debe dominar el algoritmo ante un PAP alterado (derivación obligatoria a Colposcopía y biopsia en la Unidad de Patología Cervical - UPC) y el corte crucial de tratamiento: la cirugía radical se reserva para estadios precoces confinados al cuello, mientras que ante invasión de parametrios (Estadio ≥ IIB) la cirugía está estrictamente contraindicada y el tratamiento curativo es la Quimiorradioterapia con Cisplatino.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Fisiopatología del VPH y Tamizaje GES",
        "paragraphs": [
          "• <strong>Etiología y Oncogénesis del VPH:</strong> El VPH es una infección de transmisión sexual extraordinariamente común. Los serotipos de <strong>Alto Riesgo Oncogénico</strong> son el <strong>16 (responsable del 50-60% de los carcinomas epidermoides)</strong> y el <strong>18 (responsable del 15-20% y del adenocarcinoma endocervical)</strong>, seguidos por el 31, 33, 45 y 52. Las oncoproteínas virales <strong>E6 (que degrada al gen supresor p53)</strong> y <strong>E7 (que inactiva a la proteína del retinoblastoma pRb)</strong> bloquean la apoptosis y desatan la inestabilidad genómica y transformación maligna.",
          "• <strong>Vacunación Preventiva (PNI Chile):</strong> Vacuna nonavalente (Gardasil 9) administrada gratuitamente en escolares de 4° básico (1.ª dosis) y 5° básico (2.ª dosis) a niñas y niños.",
          "• <strong>Programa Nacional de Tamizaje GES (Guía Clínica MINSAL):</strong>",
          "  - <strong>Población Objetivo:</strong> Mujeres de <strong>25 a 64 años de edad</strong>.",
          "  - <strong>Periodicidad:</strong> <strong>Papanicolaou (PAP) cada 3 años</strong> tras dos exámenes anuales consecutivos negativos.",
          "  - <strong>Test de ADN-VPH:</strong> Incorporado en programas piloto y actualización MINSAL como método primario a partir de los 30 años (cada 5 años si es negativo; si VPH 16 o 18 positivo -> derivación directa a colposcopía)."
        ]
      },
      {
        "subhead": "2. Clasificación de Bethesda y Algoritmo ante PAP Alterado",
        "paragraphs": [
          "• <strong>Clasificación Citológica del Sistema Bethesda:</strong>",
          "  - <strong>Células Escamosas Atípicas:</strong> <strong>ASC-US</strong> (de significado indeterminado) y <strong>ASC-H</strong> (no se puede descartar lesión de alto grado).",
          "  - <strong>Lesión Intraepitelial Escamosa de Bajo Grado (LIEBG / L-SIL):</strong> Corresponde a infección citopática por VPH / Neoplasia Intraepitelial Cervical grado 1 (<strong>NIE I</strong>). Más del 80% regresiona espontáneamente en 2 años.",
          "  - <strong>Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL):</strong> Corresponde a <strong>NIE II y NIE III / Carcinoma in situ (CIS)</strong>. Alto riesgo de progresión a cáncer invasor.",
          "  - <strong>Carcinoma Escamoso Invasor / Células Glandulares Atípicas (AGC / ACG-N / Adenocarcinoma).</strong>",
          "• <strong>Conducta Mandatoria de Derivación GES (Garantía de Acceso en < 30 días):</strong>",
          "  - Todo PAP informado como <strong>LIEAG, NIE II, NIE III, sospecha de invasión, ASC-H o AGC</strong> DEBE ser derivado de forma <strong>INMEDIATA a la Unidad de Patología Cervical (UPC) para COLPOSCOPÍA y BIOPSIA DIRIGIDA</strong>.",
          "  - En caso de <strong>ASC-US o LIEBG en mayores de 30 años</strong>: se deriva a colposcopía o se repite PAP en 6 meses (según norma local); si persiste alterado -> colposcopía.",
          "• <strong>Colposcopía y Procedimientos Terapéuticos Preinvasores:</strong>",
          "  - Evaluación con ácido acético al 3-5% (áreas acetoblancas densas, mosaicos, puntillado) y Test de Schiller con Lugol (captación yodo-negativa patológica).",
          "  - <strong>Tratamiento de NIE II / NIE III:</strong> <strong>CONIZACIÓN CERVICAL</strong> mediante resección con asa electroquirúrgica (<strong>LEEP</strong>) o Cono Frío quirúrgico con bisturí. Diagnóstica y curativa al evaluar márgenes libres."
        ]
      },
      {
        "subhead": "3. Cáncer Invasor: Etapificación FIGO y Tratamiento Radical vs Quimiorradioterapia",
        "paragraphs": [
          "• <strong>Clínica del CCU Invasor:</strong> El síntoma inicial más clásico es el <strong>sangrado genital postcoital (sinusorragia)</strong> o metrorragia intermenstrual, seguido de leucorrea serohemática fétida 'en agua de lavar carne'. Al espéculo: masa vegetante friable o úlcera en cuello.",
          "• <strong>Etapificación FIGO del Cáncer Cervicouterino (CORTE CLÍNICO DETERMINANTE EUNACOM):</strong>",
          "  - <strong>Estadio I:</strong> Carcinoma estrictamente confinado al cérvix (IA1 microscópico < 3 mm; IA2 3-5 mm; IB1 < 2 cm; IB2 2-4 cm; IB3 ≥ 4 cm).",
          "  - <strong>Estadio II:</strong> El tumor invade más allá del útero pero NO llega a la pared pélvica ni al tercio inferior de la vagina:",
          "    • <strong>IIA:</strong> Invade los dos tercios superiores de la vagina SIN comprometer parametrios.",
          "    • <strong>IIB (PUNTO DE INFLEXIÓN TERAPÉUTICA):</strong> <strong>INVASIÓN DE PARAMETRIOS</strong> (pero sin llegar a la pared ósea pélvica).",
          "  - <strong>Estadio III:</strong> Invade tercio inferior de vagina (IIIA) o llega a la pared pélvica / hidronefrosis (IIIB) o metástasis ganglionares pélvicas/paraórticas (IIIC).",
          "  - <strong>Estadio IV:</strong> Invade mucosa de vejiga o recto (IVA) o metástasis a distancia (IVB).",
          "• <strong>Regla Terapéutica de Oro Absoluta (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>Estadios Precoces SIN INVASIÓN DE PARAMETRIOS (IA, IB1, IB2, IIA1):</strong> <strong>TRATAMIENTO QUIRÚRGICO RADICAL</strong> mediante <strong>Histerectomía Radical con Linfadenectomía Pélvica bilateral (Operación de Wertheim-Meigs)</strong> o traquelectomía radical con conservación uterina si desea fertilidad en estadios muy iniciales.",
          "  - <strong>Estadios Avanzados CON INVASIÓN DE PARAMETRIOS (≥ ESTADIO IIB):</strong> <strong>¡LA CIRUGÍA ESTÁ ESTRICTAMENTE PROHIBIDA Y CONTRAINDICADA!</strong> El tratamiento curativo de elección es la <strong>QUIMIOTERAPIA CONCOMITANTE BASADA EN CISPLATINO MÁS RADIOTERAPIA EXTERNA Y BRAQUITERAPIA INTRACAVITARIA</strong>."
        ]
      }
    ],
    "table": {
      "title": "Etapificación FIGO y Tratamiento de Elección del Cáncer Cervicouterino",
      "headers": [
        "Estadio FIGO",
        "Extensión Anatómica del Tumor",
        "Tratamiento Primario de Elección",
        "Pronóstico (SG 5 años)"
      ],
      "rows": [
        [
          "Estadio IA1",
          "Microscópico: Invasión estromal < 3 mm sin invasión vascular",
          "Conización cervical (si desea fertilidad) o Histerectomía total",
          "> 98%"
        ],
        [
          "Estadio IB1 / IB2",
          "Tumor invasor confinado a cérvix (< 4 cm de diámetro)",
          "Histerectomía Radical + Linfadenectomía (Wertheim-Meigs)",
          "85 - 90%"
        ],
        [
          "Estadio IIA1",
          "Invasión vaginal superior < 4 cm sin parametrios",
          "Cirugía Radical de Wertheim-Meigs o Quimiorradioterapia",
          "75 - 80%"
        ],
        [
          "Estadio IIB",
          "INVASIÓN DE PARAMETRIOS (sin llegar a pared pélvica)",
          "QUIMIORRADIOTERAPIA (Cisplatino + Radioterapia + Braquiterapia)",
          "60 - 65%"
        ],
        [
          "Estadio IIIB",
          "Extensión a pared pélvica y/o Hidronefrosis renal",
          "Quimioterapia con Cisplatino + Radioterapia pélvica",
          "35 - 45%"
        ],
        [
          "Estadio IVA / IVB",
          "Invasión de vejiga/recto o Metástasis a distancia",
          "Tratamiento sistémico paliativo (Platino + Paclitaxel + Bevacizumab)",
          "< 15%"
        ]
      ]
    },
    "severityTable": {
      "title": "Garantías Explícitas en Salud (GES N° 3): Plazos Máximos de Atención en CCU",
      "headers": [
        "Etapa de la Garantía GES",
        "Plazo Máximo Legal Garantizado por Ley",
        "Acción Médica Mandatoria"
      ],
      "rows": [
        [
          "Confirmación Diagnóstica",
          "Dentro de 30 días desde la sospecha (PAP alterado)",
          "Atención en UPC por ginecólogo especialista + Colposcopía y Biopsia."
        ],
        [
          "Etapificación Completa",
          "Dentro de 20 días desde la confirmación diagnóstica",
          "RMN pélvica, cistoscopía, rectoscopía y evaluación preoperatoria."
        ],
        [
          "Inicio de Tratamiento Preinvasor",
          "Dentro de 30 días desde la indicación",
          "Conización LEEP o Cono Frío con márgenes quirúrgicos libres."
        ],
        [
          "Inicio de Tratamiento Cáncer Invasor",
          "Dentro de 20 a 30 días desde la indicación",
          "Cirugía radical (Wertheim-Meigs) o inicio de Quimiorradioterapia con Cisplatino."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Modalidades Terapéuticas en Lesiones Cervicales Preinvasoras e Invasoras",
      "headers": [
        "Patología",
        "Procedimiento de Elección",
        "Objetivo Oncológico",
        "Criterios de Éxito"
      ],
      "rows": [
        [
          "NIE II / NIE III (LIEAG)",
          "Conización con asa LEEP o Cono Frío",
          "Extirpación de la zona de transformación y canal",
          "Márgenes quirúrgicos endocervicales y ectocervicales libres de displasia."
        ],
        [
          "CCU Estadio IB1 (< 2 cm)",
          "Histerectomía Radical (Wertheim-Meigs)",
          "Extirpación de útero, parametrios, tercio sup vaginal y ganglios",
          "Ausencia de metástasis ganglionares y parametrios libres."
        ],
        [
          "CCU Estadio IIB en adelante",
          "Quimiorradioterapia concomitante",
          "Cisplatino semanal (40 mg/m²) como radiosensibilizador + Braquiterapia",
          "Respuesta tumoral completa y esterilización parametrial."
        ],
        [
          "Recidiva Pélvica Central",
          "Exenteración Pélvica",
          "Resección en bloque de útero, vagina, vejiga y recto",
          "Procedimiento de rescate en recurrencias centrales post-radioterapia."
        ]
      ]
    },
    "vignette": "Mujer de 44 años, multípara de 3, acude a control al CESFAM para entrega del resultado de su Papanicolaou (PAP) trienal del programa GES. El informe citológico emitido por el laboratorio de anatomía patológica señala: 'Muestra adecuada para evaluación. Hallazgo: Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL)'. La paciente se encuentra totalmente asintomática, afebril y sin sangrados anormales. A la especuloscopía se observa un cuello uterino macroscópicamente sano sin úlceras exofíticas visibles. Pregunta muy angustiada cuál es la conducta que debe seguirse.",
    "explicacion": "Ante el hallazgo citológico de una Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL) en el PAP, la conducta clínica mandatoria e inmediata estipulada por la Guía Clínica de Cáncer Cervicouterino GES (Problema de Salud N° 3) consiste en realizar la NOTIFICACIÓN GES y la DERIVACIÓN INMEDIATA de la paciente a la Unidad de Patología Cervical (UPC) del hospital de referencia para la realización de una COLPOSCOPÍA Y BIOPSIA DIRIGIDA, con un plazo máximo legal garantizado de atención menor a 30 días. Bajo ninguna circunstancia se debe repetir el PAP, indicar óvulos vaginales ni dar el alta, debido a que el LIEAG tiene una probabilidad superior al 20-30% de albergar una neoplasia intraepitelial avanzada (NIE II o NIE III) o un cáncer microinvasor oculto en el canal endocervical.",
    "keyPoints": [
      "GES N° 3 Cáncer Cervicouterino: Tamizaje universal con PAP cada 3 años en mujeres de 25 a 64 años.",
      "Etiología: Virus Papiloma Humano serotipos de alto riesgo oncogénico (VPH 16 en 60% y VPH 18 en 15%).",
      "Oncoproteínas oncogénicas: E6 degrada al gen supresor p53; E7 inactiva a la proteína pRb.",
      "PAP con LIEAG (H-SIL) o NIE II-III: DERIVACIÓN INMEDIATA A COLPOSCOPÍA Y BIOPSIA en UPC (Garantía GES < 30 días).",
      "Tratamiento de NIE II / NIE III: Conización cervical (LEEP o Cono Frío) con márgenes libres.",
      "Síntoma clínico más temprano del cáncer invasor: Sangrado postcoital (sinusorragia) indoloro.",
      "Estadios precoces sin invasión de parametrios (IA, IB1, IB2): Cirugía radical de Wertheim-Meigs.",
      "Estadios avanzados con invasión de parametrios (≥ IIB): ¡PROHIBIDA LA CIRUGÍA! -> Quimiorradioterapia con Cisplatino."
    ],
    "questions": [
      {
        "stem": "Una paciente de 38 años recibe el resultado de su Papanicolaou de tamizaje rutinario que informa: 'Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL)'. A la especuloscopía el cuello uterino luce sin lesiones exofíticas evidentes y la paciente está asintomática. ¿Cuál es la conducta médica correcta según la normativa GES del MINSAL?",
        "options": [
          {
            "id": "A",
            "text": "Repetir el PAP en 6 meses para confirmar la persistencia de la lesión"
          },
          {
            "id": "B",
            "text": "Notificar GES y derivar inmediatamente a la Unidad de Patología Cervical (UPC) para Colposcopía y biopsia dirigida"
          },
          {
            "id": "C",
            "text": "Prescribir óvulos vaginales de metronidazol con nistatina por 10 días y dar de alta"
          },
          {
            "id": "D",
            "text": "Programar histerectomía total simple por vía laparoscópica de inmediato"
          },
          {
            "id": "E",
            "text": "Administrar vacuna contra VPH como tratamiento curativo de la lesión"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Repetir el PAP posterga inaceptablemente el diagnóstico de una lesión premaligna de alto grado que puede albergar cáncer invasor oculto.\nB) Correcta. En el marco del Programa Nacional de Prevención y Control del Cáncer Cervicouterino (GES N° 3), todo informe de PAP con Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL) exige la notificación de garantía GES y la derivación inmediata y obligatoria a la Unidad de Patología Cervical (UPC) de nivel secundario para la realización de una Colposcopía con biopsia dirigida y eventual legrado endocervical en un plazo máximo garantizado de 30 días.\nC) Incorrecta. Los óvulos no tratan las neoplasias intraepiteliales.\nD) Incorrecta. La histerectomía sin confirmación diagnóstica colposcópica e histológica previa es una mala praxis quirúrgica grave.\nE) Incorrecta. La vacuna es profiláctica, no tiene ningún efecto terapéutico sobre lesiones preexistentes.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.013"
      },
      {
        "stem": "Una paciente de 49 años consulta por sangrado genital postcoital y fetidez vaginal de 3 meses. Al examen ginecológico con espéculo se observa un tumor ulcerado y vegetante de 4 cm en el cuello uterino. Al tacto rectovaginal se palpa que la induración tumoral se extiende y compromete de forma evidente el tercio medial del parametrio izquierdo, sin alcanzar la pared ósea pélvica. La biopsia confirma Carcinoma Epidermoide Invasor de cuello uterino (Estadio IIB de la FIGO). ¿Cuál es el tratamiento de elección indicado?",
        "options": [
          {
            "id": "A",
            "text": "Histerectomía radical con linfadenectomía pélvica bilateral (Operación de Wertheim-Meigs)"
          },
          {
            "id": "B",
            "text": "Conización cervical con márgenes amplios"
          },
          {
            "id": "C",
            "text": "Quimiorradioterapia concomitante (Radioterapia externa + Braquiterapia + Cisplatino semanal)"
          },
          {
            "id": "D",
            "text": "Histerectomía total simple extrafascial"
          },
          {
            "id": "E",
            "text": "Tratamiento exclusivamente sintomático y cuidados paliativos"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La cirugía radical está formalmente CONTRAINDICADA cuando el tumor invade los parametrios (Estadio IIB en adelante), debido a que no permite lograr bordes quirúrgicos libres y aumenta masivamente las fístulas urinarias sin beneficio en sobrevida.\nB) Incorrecta. La conización es exclusiva de lesiones preinvasoras o microinvasoras IA1.\nC) Correcta. El límite biológico y quirúrgico consensuado internacionalmente (FIGO, NCCN, MINSAL) para operar el cáncer cervicouterino es la indemnidad de los parametrios. Desde el momento en que existe invasión parametrial demostrada al tacto rectovaginal (Estadio IIB), el tratamiento curativo estándar de elección es la Quimiorradioterapia Concomitante basada en Cisplatino semanal asociado a Radioterapia Externa pélvica y Braquiterapia intracavitaria de alta tasa de dosis. Este esquema alcanza excelentes tasas de control local sin la morbilidad de una cirugía no R0.\nD) Incorrecta. La histerectomía simple deja tumor parametrial activo.\nE) Incorrecta. El Estadio IIB es potencialmente curable con quimiorradioterapia definitiva.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.013"
      },
      {
        "stem": "¿Cuál es la edad y la periodicidad del tamizaje poblacional universal garantizado por el régimen GES para la detección precoz del Cáncer Cervicouterino en Chile mediante el examen de Papanicolaou (PAP)?",
        "options": [
          {
            "id": "A",
            "text": "Anual en todas las mujeres a partir del inicio de la actividad sexual hasta los 80 años"
          },
          {
            "id": "B",
            "text": "Cada 3 años en mujeres de 25 a 64 años de edad"
          },
          {
            "id": "C",
            "text": "Cada 5 años en mujeres de 50 a 69 años de edad exclusivamente"
          },
          {
            "id": "D",
            "text": "Semestral en mujeres que utilizan anticonceptivos hormonales orales"
          },
          {
            "id": "E",
            "text": "Única vez en la vida a los 35 años de edad"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El tamizaje masivo anual en menores de 25 años sobretrata infecciones transitorias por VPH sin reducir la mortalidad.\nB) Correcta. La Guía Clínica de Cáncer Cervicouterino del MINSAL y las Garantías Explícitas en Salud (GES N° 3) definen que la población beneficiaria de tamizaje poblacional universal está constituida por las mujeres de 25 a 64 años de edad, mediante el examen de Papanicolaou (PAP) cada 3 años (tras dos controles anuales iniciales consecutivos negativos). Este intervalo trienal maximiza el costo-efectividad y reduce la incidencia de cáncer invasor en más del 80%.\nC) Incorrecta. El rango 50 a 69 años bienal corresponde al tamizaje de Cáncer de Mama por mamografía.\nD) Incorrecta. El uso de ACOs no altera el intervalo trienal de tamizaje.\nE) Incorrecta. El tamizaje debe ser periódico a lo largo de toda la vida reproductiva y perimenopáusica.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.013"
      },
      {
        "stem": "¿Cuáles son los dos genotipos oncogénicos del Virus del Papiloma Humano (VPH) de alto riesgo más prevalentes a nivel mundial y en Chile, responsables de más del 70% de los carcinomas invasores de cuello uterino?",
        "options": [
          {
            "id": "A",
            "text": "VPH tipos 6 y 11"
          },
          {
            "id": "B",
            "text": "VPH tipos 16 y 18"
          },
          {
            "id": "C",
            "text": "VPH tipos 1 y 2"
          },
          {
            "id": "D",
            "text": "VPH tipos 42 y 43"
          },
          {
            "id": "E",
            "text": "VPH tipos 5 y 8"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los serotipos 6 y 11 son de bajo riesgo oncogénico y son los causantes del 90% de los condilomas acuminados (verrugas anogenitales benignas).\nB) Correcta. Los serotipos 16 y 18 del Virus Papiloma Humano son los principales agentes carcinogénicos de alto riesgo oncogénico para el epitelio cervical. El serotipo 16 es responsable de aproximadamente el 55-60% de los carcinomas epidermoides de cuello uterino, y el serotipo 18 es responsable del 15% de los carcinomas epidermoides y de más del 50% de los adenocarcinomas endocervicales. Ambos están cubiertos por la vacuna del PNI chileno.\nC) Incorrecta. Los serotipos 1 y 2 causan verrugas vulgares y plantares cutáneas.\nD) Incorrecta. Son serotipos de bajo riesgo.\nE) Incorrecta. Asociados a epidermodisplasia verruciforme en piel.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.013"
      }
    ]
  },
  {
    "id": "gin-14",
    "classId": "gin-14",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Oncología Ginecológica & Patología Mamaria",
    "topicLabel": "20.14",
    "title": "Cáncer de Mama GES, Tamizaje Mamográfico (BI-RADS) y Patología Mamaria Benigna",
    "perfilCode": "3.02.1.014",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES N° 4: Cáncer de Mama en personas de 15 años y más (Diagnóstico, Tratamiento y Seguimiento).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#56) · EUNACOM Julio 2023 (Q#33) · EUNACOM Julio 2022 (Q#26)",
    "frecuencia": "Máxima rentabilidad · Clasificación BI-RADS (4 y 5 requieren Core Biopsy), tamizaje GES 50-69 años y subtipos moleculares",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico del Cáncer de Mama según BI-RADS",
    "diagramRows": [
      {
        "t": "Tamizaje Mamográfico GES: Mamografía Bilateral bienal en mujeres de 50 a 69 años (o nódulo palpable)",
        "s": "Evaluar informe radiológico según el Sistema Estandarizado BI-RADS",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Categoría Radiológica BI-RADS",
        "al": "BI-RADS 0, 1-2, 3 vs BI-RADS 4-5",
        "ll": "BI-RADS 0, 1-2 o 3",
        "left": {
          "t": "BI-RADS 0: Evaluación Incompleta (Ecotomografía SOS)",
          "s": "BI-RADS 1-2: Benigna (Mamografía en 2 años) · BI-RADS 3: Probablemente benigna (Control en 6 meses)",
          "type": "acc"
        },
        "rl": "BI-RADS 4 o BI-RADS 5 (Sospechosa / Muy sospechosa)",
        "right": {
          "t": "BIOPSIA CORE (Aguja Gruesa) OBLIGATORIA",
          "s": "Confirmación histológica e inmunohistoquímica (RE, RP, HER2, Ki-67) · Garantía GES: derivación en < 30 días",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Tratamiento Quirúrgico Inicial",
        "al": "Cirugía Conservadora vs Mastectomía",
        "ll": "Tumor Pequeño / Relación Mama-Tumor Favorable",
        "left": {
          "t": "Tumorectomía / Cuadrantectomía + RADIOTERAPIA",
          "s": "Cirugía conservadora SIEMPRE exige radioterapia postoperatoria de la mama restante + Biopsia Ganglio Centinela",
          "type": "acc"
        },
        "rl": "Multicéntrico / Tumor Grande / Relación Desfavorable",
        "right": {
          "t": "Mastectomía Total + Biopsia Ganglio Centinela",
          "s": "Extirpación de toda la glándula mamaria · Posibilidad de reconstrucción inmediata",
          "type": "crit"
        }
      }
    ],
    "contexto": "El Cáncer de Mama es la primera causa de muerte por neoplasia maligna en las mujeres en Chile y en el mundo occidental. Está priorizado en el sistema de salud chileno bajo la Garantía Explícita en Salud (GES N° 4) para personas de 15 años y más. El único método que ha demostrado reducir la mortalidad por cáncer de mama en ensayos clínicos es la Mamografía de Tamizaje, garantizada bienalmente entre los 50 y 69 años. El informe mamográfico utiliza el sistema internacional BI-RADS, donde las categorías 4 y 5 exigen obligatoriamente la realización de una Biopsia con aguja gruesa (Core Biopsy). El tratamiento moderno es multidisciplinario e individualizado según los subtipos moleculares (Luminal A, Luminal B, HER2 enriquecido y Triple Negativo).",
    "contentSections": [
      {
        "subhead": "1. Factores de Riesgo y Tamizaje Mamográfico GES",
        "paragraphs": [
          "• <strong>Factores de Riesgo Mayores:</strong>",
          "  - Mutaciones genéticas hereditarias de alta penetrancia: <strong>BRCA1 y BRCA2</strong> (riesgo acumulado de cáncer de mama del 60-80% y cáncer de ovario del 20-40%).",
          "  - Antecedente familiar de 1° grado con cáncer de mama (especialmente bilateral o diagnosticado antes de los 40 años).",
          "  - Antecedente de radioterapia torácica en la juventud (ej. linfoma de Hodgkin).",
          "  - Antecedente de biopsia previa con <strong>Hiperplasia Ductal Atípica o Carcinoma Lobulillar in situ</strong>.",
          "• <strong>Factores de Riesgo Hormonales Modestos:</strong> Menarquia precoz (< 12 años), menopausia tardía (> 55 años), nuliparidad o primer parto sobre los 30 años, terapia hormonal combinada prolongada (> 5 años), obesidad postmenopáusica y alcoholismo.",
          "• <strong>Tamizaje Poblacional Universal GES en Chile:</strong>",
          "  - <strong>Examen de Elección:</strong> <strong>Mamografía Bilateral en dos proyecciones (craneocaudal y mediolateral oblicua)</strong>.",
          "  - <strong>Población Garantizada:</strong> Mujeres de <strong>50 a 69 años de edad, cada 2 años (bienal)</strong>. En mujeres de alto riesgo genético familiar se inicia a los 30-35 años (o 10 años antes del familiar más joven diagnosticado)."
        ]
      },
      {
        "subhead": "2. Sistema de Clasificación Mamográfica BI-RADS",
        "paragraphs": [
          "• El sistema BI-RADS (Breast Imaging Reporting and Data System) estandariza el reporte y la conducta clínica:",
          "  - <strong>BI-RADS 0 (Incompleto):</strong> Requiere estudios de imagen adicionales (proyecciones magnificadas, focalizadas o <strong>ecografía mamaria complementaria</strong>).",
          "  - <strong>BI-RADS 1 (Negativo / Normal):</strong> Mamas simétricas, sin nódulos ni calcificaciones sospechosas. Riesgo de cáncer: 0%. Control habitual en 2 años.",
          "  - <strong>BI-RADS 2 (Hallazgo Benigno):</strong> Quistes simples, fibroadenomas calcificados en 'palomita de maíz', ganglios intramamarios, implantes. Riesgo de cáncer: 0%. Control habitual en 2 años.",
          "  - <strong>BI-RADS 3 (Probablemente Benigno):</strong> Nódulos circunscritos no calcificados, asimetrías focales. Riesgo de malignidad: <strong>< 2%</strong>. <strong>Conducta: Seguimiento estricto con mamografía unilateral a los 6 meses</strong>.",
          "  - <strong>BI-RADS 4 (Sospecha de Malignidad):</strong> Riesgo de malignidad del <strong>2 al 95%</strong> (subdividido en 4A bajo, 4B moderado, 4C alto). Hallazgos: microcalcificaciones pleomórficas agrupadas en molde o nódulos espiculados. <strong>Conducta: BIOPSIA OBLIGATORIA</strong>.",
          "  - <strong>BI-RADS 5 (Altamente Sospechoso de Malignidad):</strong> Riesgo de malignidad <strong>> 95%</strong>. Nódulo espiculado hiperdenso con retracción cutánea y microcalcificaciones lineales ramificadas. <strong>Conducta: BIOPSIA OBLIGATORIA</strong>.",
          "  - <strong>BI-RADS 6:</strong> Malignidad ya confirmada histológicamente mediante biopsia previa.",
          "• <strong>Método de Biopsia de Elección:</strong> <strong>BIOPSIA CON AGUJA GRUESA (Core Biopsy o Tru-Cut)</strong> guiada por ecografía o estereotaxia. Permite diferenciar con total certeza carcinoma in situ de invasor y obtener tejido para inmunohistoquímica (RE, RP, HER2, Ki-67). <em>¡La Punción con Aguja Fina - PAAF no sirve para esto porque solo obtiene células sueltas citológicas!</em>"
        ]
      },
      {
        "subhead": "3. Patología Mamaria Benigna más Frecuente",
        "paragraphs": [
          "• <strong>1) Fibroadenoma Mamario:</strong> Tumor benigno sólido más frecuente en <strong>mujeres jóvenes (15 a 35 años)</strong>. Nódulo ovoideo, firme, elástico, bordes netos regulares, móvil e indoloro. Ecografía: masa hipoecogénica circunscrita, más ancha que alta, con eje mayor paralelo a la piel. Manejo: observación si es < 2-3 cm y estable; extirpación si crece o causa dudas.",
          "• <strong>2) Condición Fibroquística de la Mama (Displasia Mamaria):</strong> Patología benigna más frecuente en mujeres de 30 a 50 años. Se caracteriza por <strong>mastodinia / mastalgia cíclica premenstrual bilateral</strong> y nodularidad difusa en 'bolsa de perdigones'. Manejo: sintomático, sostenes de soporte, AINEs tópicos/orales.",
          "• <strong>3) Papiloma Intraductal:</strong> Proliferación benigna de los conductos galactóforos principales. Es la <strong>causa más frecuente de telorrea serohemática o hemática unicanalicular (uniporo) espontánea</strong> en una mujer no lactante. Manejo: ecografía ductal y exéresis quirúrgica del conducto afectado (microdoquectomía) para descartar carcinoma papilar."
        ]
      },
      {
        "subhead": "4. Tratamiento del Cáncer de Mama y Subtipos Moleculares",
        "paragraphs": [
          "• <strong>Subtipos Moleculares Inmunohistoquímicos:</strong>",
          "  - <strong>Luminal A (60%):</strong> Receptores de Estrógeno (RE) (+) y Progesterona (RP) (+), HER2 (-), Ki-67 bajo (< 20%). Excelente pronóstico. Tratamiento: <strong>Hormonoterapia</strong> (Tamoxifeno en premenopáusicas o Inhibidores de Aromatasa como Anastrozol/Letrozol en postmenopáusicas por 5 a 10 años). Rara vez requiere quimioterapia.",
          "  - <strong>Luminal B (15-20%):</strong> RE (+), RP bajo/ausente, Ki-67 alto (≥ 20%) o HER2 (+). Tratamiento: Quimioterapia + Hormonoterapia.",
          "  - <strong>HER2 Enriquecido (10-15%):</strong> RE (-), RP (-), sobreexpresión de HER2 (3+). Agresivo. Tratamiento: Quimioterapia + <strong>Anticuerpos anti-HER2 dirigidos (TRASTUZUMAB / Pertuzumab)</strong>.",
          "  - <strong>Triple Negativo (10-15%):</strong> RE (-), RP (-), HER2 (-). Típico de mujeres jóvenes y mutación BRCA1. Muy agresivo, mal pronóstico. No responde a hormonoterapia ni trastuzumab; requiere <strong>Quimioterapia citotóxica</strong> intensiva (antraciclinas + taxanos).",
          "• <strong>Tratamiento Quirúrgico y Axilar:</strong>",
          "  - <strong>Cirugía Conservadora (Tumorectomía / Cuadrantectomía):</strong> Extirpa el tumor con márgenes libres. <strong>EXIGE SIEMPRE RADIOTERAPIA POSTOPERATORIA OBLIGATORIA SOBRE LA MAMA RESTANTE</strong> (sin radioterapia, la tasa de recidiva es inaceptable). Ofrece idéntica sobrevida que la mastectomía.",
          "  - <strong>Mastectomía Total:</strong> Indicada ante tumores multicéntricos, microcalcificaciones difusas extensas, mala relación mama-tumor o contraindicación de radioterapia.",
          "  - <strong>Manejo de la Axila:</strong> <strong>Biopsia del Ganglio Centinela</strong> (con tecnecio-99 o azul de metileno). Si es negativo, <strong>se evita la linfadenectomía axilar completa</strong>, previniendo el linfedema del brazo."
        ]
      }
    ],
    "table": {
      "title": "Sistema de Clasificación Radiológica BI-RADS y Conducta Clínica Obligatoria",
      "headers": [
        "Categoría BI-RADS",
        "Significado Radiológico",
        "Riesgo Estimado de Malignidad",
        "Conducta Médica Obligatoria"
      ],
      "rows": [
        [
          "BI-RADS 0",
          "Estudio Incompleto",
          "No determinado",
          "Solicitar proyecciones adicionales o Ecografía mamaria complementaria"
        ],
        [
          "BI-RADS 1",
          "Negativa / Completamente Normal",
          "0%",
          "Mamografía de tamizaje rutinaria cada 2 años"
        ],
        [
          "BI-RADS 2",
          "Hallazgos Benignos (quistes, fibroadenoma calcificado)",
          "0%",
          "Mamografía de tamizaje rutinaria cada 2 años"
        ],
        [
          "BI-RADS 3",
          "Probablemente Benigno (nódulo sólido circunscrito)",
          "< 2%",
          "SEGUIMIENTO ESTRICTO: Control mamográfico a los 6 meses"
        ],
        [
          "BI-RADS 4",
          "Sospechosa de Malignidad (4A, 4B, 4C)",
          "2 a 95%",
          "BIOPSIA OBLIGATORIA (Core Biopsy percutánea guiada)"
        ],
        [
          "BI-RADS 5",
          "Altamente Sospechosa (nódulo espiculado + microcalcificaciones)",
          "> 95%",
          "BIOPSIA OBLIGATORIA (Core Biopsy) y derivación oncológica expedita"
        ],
        [
          "BI-RADS 6",
          "Malignidad Comprobada por Biopsia previa",
          "100%",
          "Planificación terapéutica multidisciplinaria (cirugía/neoadyuvancia)"
        ]
      ]
    },
    "severityTable": {
      "title": "Subtipos Moleculares del Cáncer de Mama y Estrategias Terapéuticas",
      "headers": [
        "Subtipo Molecular",
        "Perfil de Inmunohistoquímica",
        "Pronóstico Relativo",
        "Tratamiento Sistémico Dirigido EUNACOM"
      ],
      "rows": [
        [
          "Luminal A",
          "RE (+), RP (+), HER2 (-), Ki-67 bajo (< 20%)",
          "El más favorable",
          "Hormonoterapia (Tamoxifeno o Inhibidores de Aromatasa) x 5-10 años."
        ],
        [
          "Luminal B (HER2 -)",
          "RE (+), RP (-/bajo), HER2 (-), Ki-67 alto (≥ 20%)",
          "Intermedio",
          "Quimioterapia previa + Hormonoterapia."
        ],
        [
          "Luminal B (HER2 +)",
          "RE (+), RP (+/-), HER2 (+), Ki-67 variable",
          "Intermedio-Agresivo",
          "Quimioterapia + Trastuzumab + Hormonoterapia."
        ],
        [
          "HER2 Enriquecido",
          "RE (-), RP (-), HER2 (+) sobreexpresado",
          "Desfavorable / Agresivo",
          "Quimioterapia + TERAPIA DIRIGIDA CON TRASTUZUMAB (Anti-HER2)."
        ],
        [
          "Triple Negativo",
          "RE (-), RP (-), HER2 (-) todos negativos",
          "El más agresivo / Pobre",
          "QUIMIOTERAPIA CITOTÓXICA INTENSIVA (antraciclinas + taxanos)."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Modalidades Terapéuticas Quirúrgicas y Adyuvantes en Cáncer de Mama",
      "headers": [
        "Intervención",
        "Indicaciones Clínicas",
        "Premisas Obligatorias EUNACOM",
        "Morbilidad / Secuelas Prevenidas"
      ],
      "rows": [
        [
          "Cirugía Conservadora (Tumorectomía)",
          "Tumores unifocales con bordes libres y mama adecuada",
          "¡OBLIGATORIA RADIOTERAPIA POSTOPERATORIA a toda la mama restante!",
          "Preservación estética e identidad corporal con idéntica sobrevida que mastectomía."
        ],
        [
          "Biopsia Ganglio Centinela",
          "Axila clínicamente negativa (cN0) al examen y eco",
          "Inyección peritumoral de radioisótopo/tinte y extirpación del primer ganglio",
          "Evita el vaciamiento axilar completo y reduce el linfedema de extremidad superior en > 90%."
        ],
        [
          "Tamoxifeno (Hormonoterapia)",
          "Tumores con receptores hormonales (+) en premenopáusicas",
          "Modulador selectivo de receptores estrogénicos (SERM) por 5-10 años",
          "Aumenta riesgo de hiperplasia/cáncer endometrial y TVP (requiere control ginecológico)."
        ],
        [
          "Inhibidores de Aromatasa (Anastrozol)",
          "Tumores con receptores hormonales (+) en postmenopáusicas",
          "Bloquean la síntesis periférica de estrógenos en tejido graso",
          "Provocan artralgias y aceleran osteoporosis (requiere densitometría ósea y calcio/vit D)."
        ]
      ]
    },
    "vignette": "Mujer de 54 años, sin antecedentes mórbidos ni familiares de cáncer, asintomática, acude a su control ginecológico en el CESFAM con el resultado de su mamografía bilateral de tamizaje del programa GES. El informe radiológico señala: 'En el cuadrante superoexterno de la mama derecha se identifica un grupo de microcalcificaciones pleomórficas de distribución lineal ramificada asociadas a una distorsión de la arquitectura tisular con márgenes espiculados. Conclusión: Hallazgo altamente sospechoso de malignidad (BI-RADS 5)'. La paciente se encuentra sumamente asustada y solicita saber qué examen debe realizarse de inmediato para saber si tiene cáncer.",
    "explicacion": "El hallazgo de una imagen mamográfica clasificada como BI-RADS 5 (altamente sospechosa de malignidad, con un riesgo de cáncer > 95%) exige de forma perentoria e inmediata la realización de una BIOPSIA HISTOLÓGICA CON AGUJA GRUESA (Core Biopsy o Tru-cut), idealmente guiada por ecografía o mamografía estereotáxica. Bajo el amparo de las Garantías Explícitas en Salud (GES N° 4 Cáncer de Mama), la paciente debe ser notificada y derivada de inmediato al centro de referencia oncológica para la toma de la biopsia core (garantía de confirmación diagnóstica en < 30 días). Este procedimiento permite certificar la presencia de cáncer invasor o carcinoma in situ y determinar los receptores hormonales (RE, RP), HER2 y Ki-67 indispensables para planificar la terapia.",
    "keyPoints": [
      "Cáncer de mama: Primera causa de muerte por cáncer en mujeres en Chile (GES N° 4 desde los 15 años).",
      "Tamizaje GES: Mamografía bilateral bienal (cada 2 años) en mujeres de 50 a 69 años.",
      "BI-RADS 3: Probablemente benigno (< 2% riesgo); requiere seguimiento mamográfico en 6 meses.",
      "BI-RADS 4 y 5: Sospechosos de malignidad; exigen BIOPSIA CON AGUJA GRUESA (Core Biopsy) obligatoria.",
      "La PAAF citológica NO sirve para diagnóstico inicial porque no distingue carcinoma in situ de invasor.",
      "Cirugía conservadora (tumorectomía): EXIGE SIEMPRE RADIOTERAPIA COMPLEMENTARIA de la mama restante.",
      "Biopsia de Ganglio Centinela: De elección en axila clínicamente negativa para evitar vaciamiento y linfedema.",
      "Subtipo Triple Negativo: RE (-), RP (-), HER2 (-); agresivo, no responde a hormonoterapia ni trastuzumab.",
      "Hormonoterapia: Tamoxifeno en premenopáusicas; Inhibidores de Aromatasa (Anastrozol/Letrozol) en postmenopáusicas.",
      "Causa más común de telorrea serohemática unicanalicular: Papiloma Intraductal benigno."
    ],
    "questions": [
      {
        "stem": "Una paciente de 52 años asintomática se realiza una mamografía de tamizaje rutinario que informa: 'En el cuadrante superoexterno de la mama izquierda se observa un nódulo espiculado de 15 mm con microcalcificaciones heterogéneas agrupadas en su interior, clasificado como BI-RADS 4C'. ¿Cuál es la conducta diagnóstica de primera línea indicada a continuación?",
        "options": [
          {
            "id": "A",
            "text": "Control mamográfico estricto a los 6 meses para evaluar estabilidad"
          },
          {
            "id": "B",
            "text": "Realización de Biopsia con aguja gruesa (Core Biopsy) guiada por imágenes"
          },
          {
            "id": "C",
            "text": "Mastectomía radical de urgencia sin confirmación anatomopatológica previa"
          },
          {
            "id": "D",
            "text": "Punción con aguja fina (PAAF) para estudio citológico exclusivo"
          },
          {
            "id": "E",
            "text": "Administración empírica de tamoxifeno oral durante 3 meses"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El control a los 6 meses es la conducta exclusiva de la categoría BI-RADS 3 (< 2% de riesgo), jamás de una lesión BI-RADS 4.\nB) Correcta. Todo hallazgo radiológico clasificado como BI-RADS 4 (sospechoso de malignidad con riesgo de 2 a 95%) o BI-RADS 5 (> 95%) tiene indicación formal y mandatoria de confirmación histológica mediante Biopsia Percutánea con Aguja Gruesa (Core Biopsy o Tru-Cut) guiada por ecografía o estereotaxia. Este procedimiento obtiene cilindros de tejido que permiten diagnosticar invasión del estroma y realizar el panel inmunohistoquímico completo (RE, RP, HER2 y Ki-67).\nC) Incorrecta. Mutilar una mama sin diagnóstico histológico previo es una mala praxis inadmisible.\nD) Incorrecta. La PAAF solo aporta células aisladas que no permiten distinguir carcinoma in situ de carcinoma invasor ni medir adecuadamente los receptores.\nE) Incorrecta. La hormonoterapia requiere confirmación histológica de neoplasia con receptores positivos.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.014"
      },
      {
        "stem": "Una mujer de 58 años es sometida a una tumorectomía conservadora de mama con márgenes quirúrgicos libres por un carcinoma ductal infiltrante de 18 mm. ¿Cuál de las siguientes terapias adyuvantes locales es ESTRICTAMENTE OBLIGATORIA tras una cirugía conservadora de mama para reducir la tasa de recidiva local al mismo nivel que una mastectomía total?",
        "options": [
          {
            "id": "A",
            "text": "Radioterapia externa sobre la glándula mamaria restante"
          },
          {
            "id": "B",
            "text": "Quimioterapia con metotrexato intratecal"
          },
          {
            "id": "C",
            "text": "Vaciamiento ganglionar axilar radical bilateral"
          },
          {
            "id": "D",
            "text": "Inyecciones locales de interferón alfa intralesional"
          },
          {
            "id": "E",
            "text": "Ninguna, la cirugía conservadora con bordes libres no requiere tratamientos adicionales"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El estándar oncológico internacional y las guías del MINSAL establecen como regla de oro indiscutible que TODA Cirugía Conservadora de Mama (tumorectomía o cuadrantectomía) DEBE ir seguida obligatoriamente de RADIOTERAPIA EXTERNA ADYUVANTE sobre la glándula mamaria residual. Los ensayos clínicos clásicos (NSABP B-06) demostraron que la cirugía conservadora MÁS radioterapia ofrece exactamente la misma tasa de sobrevida global a largo plazo que la mastectomía radical, pero omitir la radioterapia eleva la tasa de recidiva local a más del 25-35%.\nB) Incorrecta. El metotrexato intratecal es para leucemias o metástasis meníngeas.\nC) Incorrecta. El vaciamiento axilar se evita si el ganglio centinela es negativo.\nD) Incorrecta. No tiene indicación en cáncer de mama.\nE) Incorrecta. Omitir la radioterapia tras tumorectomía es un error terapéutico grave.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.014"
      },
      {
        "stem": "Una paciente de 46 años, no lactante, consulta por la salida espontánea de secreción serohemática (líquido rosado con estrías de sangre) por un único poro del pezón de la mama derecha desde hace 3 semanas. A la palpación física no se identifican nódulos dominantes ni adenopatías axilares. ¿Cuál es la causa etiológica benigna más frecuente de este tipo de telorrea?",
        "options": [
          {
            "id": "A",
            "text": "Fibroadenoma mamario simple"
          },
          {
            "id": "B",
            "text": "Papiloma intraductal solitario"
          },
          {
            "id": "C",
            "text": "Prolactinoma hipofisario"
          },
          {
            "id": "D",
            "text": "Mastitis granulomatosa idiopática"
          },
          {
            "id": "E",
            "text": "Ectasia ductal senil"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El fibroadenoma es un nódulo móvil que no se comunica con los conductos principales ni produce telorrea hemática.\nB) Correcta. La causa benigna más frecuente de telorrea serohemática o hemática unilateral, unicanalicular (que brota por un único poro del pezón) y espontánea en mujeres en edad reproductiva o perimenopáusica es el Papiloma Intraductal Benigno. Consiste en una pequeña proliferación de epitelio ductal vascularizado que asienta en los conductos galactóforos principales retroareolares. Debe estudiarse con ecografía/mamografía y resolverse mediante resección del conducto afectado (microdoquectomía) para descartar un carcinoma papilar subyacente.\nC) Incorrecta. El prolactinoma produce galactorrea (leche blanquecina) bilateral, pluriorificial y sin sangre.\nD) Incorrecta. Cursa con masa inflamatoria dolorosa abscedada recurrente.\nE) Incorrecta. La ectasia ductal produce secreción pluriorificial, bilateral, espesa y verdosa/pardusca.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.014"
      },
      {
        "stem": "Una paciente de 42 años diagnosticada de cáncer de mama invasor presenta el siguiente informe de inmunohistoquímica tumoral: Receptores de Estrógeno (RE) negativos (0%), Receptores de Progesterona (RP) negativos (0%) y HER2 negativo (Score 0). ¿A qué subtipo molecular corresponde este tumor y cuál es la implicancia terapéutica respecto a la hormonoterapia y anticuerpos monoclonales anti-HER2?",
        "options": [
          {
            "id": "A",
            "text": "Subtipo Luminal A; responderá excelentemente a Tamoxifeno como única terapia"
          },
          {
            "id": "B",
            "text": "Subtipo Triple Negativo; NO responderá a hormonoterapia ni a Trastuzumab, requiriendo quimioterapia citotóxica"
          },
          {
            "id": "C",
            "text": "Subtipo HER2 enriquecido; indicación prioritaria de Trastuzumab con Pertuzumab"
          },
          {
            "id": "D",
            "text": "Subtipo Luminal B; requiere monoterapia con inhibidores de aromatasa"
          },
          {
            "id": "E",
            "text": "Carcinoma basocelular de la mama; solo requiere seguimiento sin fármacos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El tamoxifeno requiere que los receptores de estrógeno sean positivos.\nB) Correcta. El tumor que resulta negativo para los tres marcadores clásicos (RE negativo, RP negativo y HER2 negativo) se clasifica como Cáncer de Mama Triple Negativo. Representa aproximadamente el 15% de los cánceres mamarios y se asocia con mayor frecuencia a pacientes jóvenes y portadoras de mutaciones en el gen BRCA1. Desde el punto de vista terapéutico, al carecer de receptores hormonales y de la proteína HER2, este tumor NO se beneficia de la hormonoterapia (tamoxifeno/anastrozol) ni de la terapia dirigida anti-HER2 (Trastuzumab); su tratamiento médico descansa fundamentalmente en la Quimioterapia Citotóxica combinada.\nC) Incorrecta. El HER2 es negativo; el trastuzumab es ineficaz.\nD) Incorrecta. Los inhibidores de aromatasa exigen receptores hormonales positivos.\nE) Incorrecta. El triple negativo es un carcinoma muy agresivo con alta tasa de recidiva temprana.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.014"
      }
    ]
  },
  {
    "id": "gin-15",
    "classId": "gin-15",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Oncología Ginecológica & Patología Mamaria",
    "topicLabel": "20.15",
    "title": "Cáncer de Endometrio y Masa Anexial / Cáncer de Ovario: Diagnóstico y Marcadores",
    "perfilCode": "3.02.1.015",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "No GES. Estudio de alta sospecha oncológica y derivación a Ginecología Oncológica.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#57) · EUNACOM Julio 2023 (Q#34) · EUNACOM Julio 2021 (Q#22)",
    "frecuencia": "Máxima rentabilidad · Metrorragia en la postmenopausia (corte endometrial > 4-5 mm), CA-125 y criterios IOTA de malignidad ovárica",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico de la Metrorragia Postmenopáusica y Masa Anexial",
    "diagramRows": [
      {
        "t": "Mujer Postmenopáusica con Sangrado Uterino o Masa Anexial Compleja",
        "s": "Realizar Ecografía Transvaginal Ginecológica de Alta Resolución",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Evaluación del Grosor Endometrial en Metrorragia Postmenopáusica",
        "al": "Endometrio Fino (< 4 mm) vs Endometrio Engrosado (≥ 4-5 mm)",
        "ll": "Endometrio Fino y Regular (< 4 mm)",
        "left": {
          "t": "Baja Probabilidad de Cáncer (< 1%)",
          "s": "Causa habitual: Atrofia endometrial o vaginitis atrófica · Observación y tratamiento con estrógenos locales",
          "type": "acc"
        },
        "rl": "Endometrio Engrosado o Heterogéneo (≥ 4-5 mm)",
        "right": {
          "t": "BIOPSIA ENDOMETRIAL OBLIGATORIA",
          "s": "Biopsia ambulatoria con cánula de Pipelle o Histeroscopía diagnóstica · Descartar Adenocarcinoma de Endometrio",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Evaluación de Masa Anexial / Quiste Ovárico",
        "al": "Criterios IOTA de Malignidad vs Quiste Simple",
        "ll": "Criterios de Malignidad (IOTA M-rules)",
        "left": {
          "t": "Masa sólida irregular + Papilas > 3mm + Ascitis + CA-125 alto",
          "s": "Riesgo elevado de Cáncer Epitelial de Ovario · Derivación a Ginecología Oncológica para Laparotomía Citorreductora",
          "type": "crit"
        },
        "rl": "Criterios de Benignidad (IOTA B-rules)",
        "right": {
          "t": "Quiste unilocular anecoico < 5-8 cm sin vascularización",
          "s": "Quiste simple funcional · Control ecográfico en 6 a 12 semanas",
          "type": "acc"
        }
      }
    ],
    "contexto": "El Cáncer de Endometrio y el Cáncer de Ovario son las dos principales neoplasias ginecológicas del tracto genital interno en mujeres perimenopáusicas y postmenopáusicas. El Cáncer de Endometrio es la neoplasia ginecológica más frecuente en países desarrollados y la regla de oro mandatoria en el EUNACOM es que TODO sangrado en la postmenopausia es cáncer de endometrio hasta que se demuestre lo contrario (siendo el grosor ecográfico ≥ 4 a 5 mm el punto de corte para indicar biopsia inmediata). Por su parte, el Cáncer de Ovario es el más letal de todos debido a que se diagnostica tardíamente en estadios avanzados (III o IV) por síntomas digestivos vagos e inespecíficos. El reconocimiento de los signos ecográficos IOTA de malignidad de una masa anexial y el uso del marcador CA-125 son conocimientos de primer orden.",
    "contentSections": [
      {
        "subhead": "1. Cáncer de Endometrio: Factores de Riesgo y Clínica",
        "paragraphs": [
          "• <strong>Fisiopatología y Clasificación Dual de Bokhman:</strong>",
          "  - <strong>Tipo I (Endometrioide, 80-85%):</strong> Estrógeno-dependiente. Se origina a partir de hiperplasia endometrial con atipias en un contexto de <strong>hiperestrogenismo crónico sin oposición de progesterona</strong>. Buen pronóstico, grado histológico bajo a moderado.",
          "  - <strong>Tipo II (Seroso papilar / Células claras, 15%):</strong> Estrógeno-independiente. Ocurre en mujeres ancianas con endometrio atrófico, mutación en el gen p53. Muy agresivo, mal pronóstico.",
          "• <strong>Factores de Riesgo Clásicos (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>Obesidad (el factor de riesgo más potente):</strong> La aromatización periférica de andrógenos a estrona en el tejido adiposo genera hiperestrogenismo continuo.",
          "  - Nuliparidad, menopausia tardía, menarquia precoz.",
          "  - <strong>Síndrome de Ovario Poliquístico (SOP)</strong> por anovulación crónica.",
          "  - <strong>Uso de Tamoxifeno:</strong> Ejerce efecto agonista estrogénico sobre el endometrio.",
          "  - <strong>Síndrome de Lynch (HNPCC):</strong> Mutación en genes de reparación de ADN (MLH1, MSH2); confiere un 40-60% de riesgo de cáncer de endometrio y colon.",
          "• <strong>Manifestación Clínica Cardinal:</strong> <strong>METRORRAGIA EN LA POSTMENOPAUSIA (90% de los casos)</strong>. Todo sangrado vaginal ocurrido tras 12 meses de amenorrea en la menopausia obliga a descartar cáncer endometrial.",
          "• <strong>Diagnóstico:</strong>",
          "  - <strong>Ecografía Transvaginal:</strong> Grosor endometrial normal en postmenopausia: <strong>< 4 a 5 mm</strong>. Si mide <strong>≥ 4 a 5 mm (o ≥ 8 mm si usa TRH)</strong> o es heterogéneo: <strong>BIOPSIA ENDOMETRIAL AMBULATORIA (Pipelle) OBLIGATORIA</strong>.",
          "  - Si la muestra de Pipelle es insuficiente o hay sospecha de pólipo: <strong>Histeroscopía diagnóstica con biopsia dirigida</strong>.",
          "• <strong>Tratamiento:</strong> Quirúrgico y etapificador mediante <strong>Histerectomía Total con Salpingooforectomía Bilateral y Linfadenectomía</strong> (o mapeo de ganglio centinela) +/- radioterapia/quimioterapia adyuvante según estadio."
        ]
      },
      {
        "subhead": "2. Masa Anexial y Cáncer de Ovario: Diagnóstico y Marcadores",
        "paragraphs": [
          "• <strong>Epidemiología y Mortalidad:</strong> El cáncer de ovario es el 'asesino silencioso' de la ginecología. Más del 70% se diagnostica en <strong>Estadios Avanzados (III y IV)</strong> con carcinomatosis peritoneal y ascitis. El tipo histológico más común es el <strong>Carcinoma Epitelial Seroso de Alto Grado (70-80%)</strong>, que se origina en la fimbria tubárica.",
          "• <strong>Síntomas Clínicos Iniciales (Engañosos y Vagos):</strong> Distensión abdominal persistente, saciedad precoz, dispepsia, dolor pélvico sordo, aumento del perímetro abdominal y polaquiuria (frecuentemente mal diagnosticados como colon irritable).",
          "• <strong>Evaluación Ecográfica de la Masa Anexial (Reglas IOTA de Malignidad):</strong>",
          "  - <strong>Signos de ALTA SOSPECHA DE MALIGNIDAD (IOTA M-rules):</strong>",
          "    • 1) Tumor sólido irregular multiloculado voluminoso.",
          "    • 2) <strong>Presencia de Proyecciones Papilares sólidas intracísticas (> 3 mm)</strong>.",
          "    • 3) <strong>Septos o tabiques internos gruesos (> 3 mm)</strong>.",
          "    • 4) <strong>Ascitis</strong> o líquido libre en el fondo de saco.",
          "    • 5) <strong>Flujo vascular Doppler central intralesional de baja resistencia</strong>.",
          "• <strong>Marcadores Tumorales Séricos:</strong>",
          "  - <strong>CA-125:</strong> Elevado en el 80% de los carcinomas epiteliales serosos de alto grado. Es poco específico en premenopáusicas (se eleva en endometriosis, miomas, EIP, embarazo, peritonitis), pero <strong>ALTAMENTE PREDICTIVO DE MALIGNIDAD en una mujer POSTMENOPÁUSICA con masa anexial compleja</strong>.",
          "  - Otros marcadores en mujeres jóvenes (tumores germinales): <strong>Alfa-fetoproteína (AFP)</strong> (seno endodérmico), <strong>β-hCG</strong> (coriocarcinoma) y <strong>LDH</strong> (disgerminoma).",
          "• <strong>Tratamiento:</strong> El pilar es la <strong>Cirugía de Citorreducción Primaria Máxima (Debulking)</strong> (laparotomía xifopúbica con histerectomía, salpingooforectomía bilateral, omentectomía total, linfadenectomía y peritonectomías para lograr citorreducción R0 sin tumor residual macroscópico) seguida de <strong>Quimioterapia basada en Carboplatino + Paclitaxel</strong>."
        ]
      }
    ],
    "table": {
      "title": "Criterios Ecográficos IOTA para Diagnóstico Diferencial de Masas Ováricas",
      "headers": [
        "Parámetro Ecográfico",
        "Criterios de Benignidad (B-rules)",
        "Criterios de Malignidad (M-rules)"
      ],
      "rows": [
        [
          "Estructura de la Masa",
          "Quiste unilocular puro (anecoico)",
          "Tumor sólido irregular o multiloculado heterogéneo"
        ],
        [
          "Componente Sólido / Papilas",
          "Ausencia de áreas sólidas o papilas < 3 mm",
          "Presencia de proyecciones papilares ≥ 3 mm sólidas"
        ],
        [
          "Tabiques Internos",
          "Sin tabiques o septos finos (< 3 mm)",
          "Tabiques gruesos múltiples (> 3 mm)"
        ],
        [
          "Líquido Peritoneal",
          "Sin líquido libre en cavidad",
          "ASCITIS evidente perihepática y en Douglas"
        ],
        [
          "Vascularización Doppler",
          "Sin flujo Doppler color (Score 1)",
          "Flujo vascular Doppler central intenso (Score 4)"
        ],
        [
          "Sombra Acústica",
          "Presencia de sombra acústica posterior (benigno)",
          "Ausencia de sombra acústica con atenuación"
        ]
      ]
    },
    "severityTable": {
      "title": "Protocolo de Estudio y Derivación en Sospecha de Cáncer Ginecológico",
      "headers": [
        "Sospecha Clínica",
        "Hallazgo Clave de Alarma",
        "Conducta Médica Inmediata"
      ],
      "rows": [
        [
          "Cáncer de Endometrio",
          "Metrorragia postmenopáusica + Endometrio ecográfico ≥ 4-5 mm",
          "Biopsia endometrial ambulatoria (Pipelle) -> Si positiva: TAC TAP y derivación a Ginecología Oncológica."
        ],
        [
          "Cáncer Epitelial de Ovario",
          "Masa ovárica compleja ecográfica + CA-125 elevado (> 35 U/mL en postmenopausia) + Ascitis",
          "Derivación URGENTE a centro oncológico terciario para laparotomía exploradora citorreductora (¡No puncionar por riesgo de diseminación!)."
        ],
        [
          "Tumor Germinal de Ovario",
          "Masa ovárica sólida de rápido crecimiento en adolescente o mujer < 25 años",
          "Solicitar AFP, β-hCG y LDH séricos + TAC pélvico y derivación oncológica."
        ],
        [
          "Síndrome de Lynch (HNPCC)",
          "Antecedente de múltiples familiares con cáncer de colon y endometrio a edad joven",
          "Consejo genético, tamizaje anual con eco TV y biopsia endometrial desde los 30-35 años, e histerectomía profiláctica a los 40 años."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Estrategias Terapéuticas en Cáncer de Endometrio y Ovario",
      "headers": [
        "Neoplasia",
        "Cirugía Primaria Estándar",
        "Terapia Adyuvante de Elección",
        "Marcador de Seguimiento"
      ],
      "rows": [
        [
          "Cáncer de Endometrio Estadio I",
          "Histerectomía Total + Doble Anexectomía + Mapeo de Ganglio Centinela",
          "Observación (IA) o Braquiterapia de cúpula vaginal (IB de alto riesgo)",
          "Control clínico y especuloscopía seriada."
        ],
        [
          "Cáncer de Endometrio Avanzado",
          "Cirugía citorreductora completa + Linfadenectomía pelviana/aórtica",
          "Quimioterapia (Carboplatino + Paclitaxel) + Radioterapia externa",
          "Control clínico y TAC según síntomas."
        ],
        [
          "Cáncer Epitelial de Ovario",
          "Citorreducción primaria máxima R0 (Histerectomía, anexectomía, omentectomía)",
          "Poliquimioterapia parenteral: Carboplatino + Paclitaxel x 6 ciclos (+/- Bevacizumab / Inhibidores de PARP)",
          "Marcador sérico CA-125 seriado."
        ],
        [
          "Tumores Germinales Ováricos",
          "Cirugía conservadora preservando útero y ovario sano contralateral",
          "Quimioterapia con esquema BEP (Bleomicina, Etopósido, Cisplatino) curativa",
          "Marcadores AFP, β-hCG y LDH."
        ]
      ]
    },
    "vignette": "Paciente de 61 años, menopáusica desde hace 10 años sin antecedentes mórbidos ni terapia de reemplazo hormonal, consulta por presentar sangrado genital rojo oscuro escaso e intermitente de 3 semanas de evolución. Al examen físico: paciente en buenas condiciones generales, abdomen blando e indoloro sin masas palpables. La especuloscopía confirma que el sangrado proviene del orificio cervical externo, sin lesiones exocervicales ni atrofia severa sangrante. Se realiza ecografía transvaginal que informa útero de 70 mm con miometrio homogéneo y un endometrio engrosado de 11 mm, marcadamente heterogéneo con áreas microquísticas. Ambos ovarios se observan atróficos y normales sin masas anexiales ni líquido libre.",
    "explicacion": "La presencia de un sangrado genital en una mujer postmenopáusica (Metrorragia de la Postmenopausia) asociado al hallazgo ecográfico de un grosor endometrial de 11 mm (muy superior al punto de corte máximo de normalidad de 4 a 5 mm en la menopausia) constituye una indicación formal, urgente y obligatoria de BIOPSIA ENDOMETRIAL (preferentemente mediante aspiración ambulatoria con cánula de Pipelle, o histeroscopía con biopsia dirigida si el Pipelle es insuficiente o negativo persistiendo el sangrado). El objetivo impostergable es confirmar o descartar un Carcinoma de Endometrio (responsable del 10 al 15% de estos cuadros). No se debe adoptar conducta expectante ni prescribir hemostáticos u hormonas sin confirmación histopatológica previa.",
    "keyPoints": [
      "Regla de oro: Toda metrorragia en la postmenopausia es Cáncer de Endometrio hasta demostrar lo contrario.",
      "Grosor endometrial normal en postmenopausia: Menor a 4 a 5 mm (si usa TRH hasta 8 mm).",
      "Endometrio ≥ 4-5 mm con sangrado en postmenopáusica: BIOPSIA ENDOMETRIAL (Pipelle) OBLIGATORIA.",
      "Factor de riesgo mayor de Cáncer de Endometrio: Obesidad (aromatización periférica a estrógenos).",
      "Cáncer de Ovario: Neoplasia ginecológica más letal, se diagnostica tardíamente con síntomas digestivos vagos.",
      "Criterios ecográficos IOTA de malignidad ovárica: Proyecciones papilares sólidas > 3 mm, septos gruesos, ascitis.",
      "Marcador tumoral CA-125: Altamente predictivo de malignidad en mujeres postmenopáusicas con masa anexial.",
      "¡PROHIBIDO PUNCIONAR una masa ovárica sospechosa por riesgo de rotura y siembra peritoneal masiva!",
      "Tratamiento estándar del cáncer de ovario: Citorreducción quirúrgica máxima R0 + Carboplatino y Paclitaxel."
    ],
    "questions": [
      {
        "stem": "Una paciente de 63 años consulta por sangrado vaginal rojo oscuro escaso de 2 semanas de evolución tras 12 años de amenorrea menopáusica. La ecografía transvaginal muestra un grosor endometrial de 12 mm, heterogéneo e irregular. ¿Cuál es el paso diagnóstico que debe realizarse de inmediato?",
        "options": [
          {
            "id": "A",
            "text": "Prescribir óvulos de estriol vaginal durante 1 mes y reevaluar con ecografía"
          },
          {
            "id": "B",
            "text": "Realización de una Biopsia Endometrial (mediante cánula de Pipelle o histeroscopía)"
          },
          {
            "id": "C",
            "text": "Solicitar tomografía por emisión de positrones (PET-CT) de cuerpo entero"
          },
          {
            "id": "D",
            "text": "Indicar reposo en cama y control ecográfico en 6 meses"
          },
          {
            "id": "E",
            "text": "Realizar laparoscopía exploradora diagnóstica para ooforectomía bilateral"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los estrógenos locales tratan la atrofia, pero ante un endometrio de 12 mm retrasarían el diagnóstico de un adenocarcinoma.\nB) Correcta. El sangrado postmenopáusico es el síntoma de presentación del Cáncer de Endometrio en el 90% de los casos. La presencia de un grosor endometrial ecográfico ≥ 4 a 5 mm en una mujer menopáusica exige de forma mandatoria e impostergable la obtención de una muestra histológica mediante Biopsia Endometrial (la aspiración ambulatoria con cánula de Pipelle es el método de primera línea por su alta sensibilidad y bajo costo, recurriéndose a histeroscopía si la muestra no es concluyente).\nC) Incorrecta. El PET-CT no sustituye la biopsia histológica primaria.\nD) Incorrecta. La conducta expectante ante sospecha de neoplasia ginecológica es negligencia.\nE) Incorrecta. La causa del sangrado reside en el endometrio uterino, no en los ovarios.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.015"
      },
      {
        "stem": "Una mujer de 65 años consulta por distensión abdominal progresiva, dispepsia y saciedad precoz de 3 meses de evolución. Al examen físico se palpa abdomen distendido con matidez desplazable compatible con ascitis y una masa pelviana profunda firme. La ecografía transvaginal muestra una masa anexial derecha de 9 cm, multiloculada, con septos gruesos de 5 mm, abundantes proyecciones papilares sólidas internas con vascularización Doppler central de baja resistencia, y abundante líquido libre ascítico en fondo de saco de Douglas. El marcador sérico CA-125 resulta en 450 U/mL (VN < 35 U/mL). ¿Cuál es la sospecha diagnóstica más probable y la conducta adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Quiste folicular funcional simple; indicar anticonceptivos orales por 3 meses"
          },
          {
            "id": "B",
            "text": "Cáncer epitelial de ovario avanzado; derivar de inmediato a Ginecología Oncológica para laparotomía etapificadora y citorreducción primaria"
          },
          {
            "id": "C",
            "text": "Punción transvaginal evacuadora del quiste ovárico para aliviar la presión"
          },
          {
            "id": "D",
            "text": "Endometrioma ovárico; prescribir dienogest oral continuo"
          },
          {
            "id": "E",
            "text": "Absceso apendicular crónico; apendicectomía electiva ambulatoria"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los quistes foliculares solo ocurren en mujeres fértiles ovuladoras, no en postmenopáusicas de 65 años.\nB) Correcta. La constelación clínica de síntomas digestivos subagudos (distensión, saciedad precoz) asociada a ascitis, una masa anexial con todos los criterios IOTA de malignidad (multiloculada, tabiques gruesos, papilas sólidas y flujo Doppler central) y un marcador tumoral CA-125 marcadamente elevado en una mujer postmenopáusica es diagnóstica de Cáncer Epitelial de Ovario Avanzado. La conducta es la derivación urgente a un centro terciario oncológico para cirugía citorreductora primaria máxima (debulking) y posterior quimioterapia con carboplatino y paclitaxel.\nC) Incorrecta. La punción percutánea o transvaginal de una masa ovárica con sospecha de cáncer está ABSOLUTAMENTE CONTRAINDICADA por el gravísimo riesgo de rotura capsular y siembra masiva de células tumorales en la cavidad peritoneal.\nD) Incorrecta. Los endometriomas no tienen papilas ni se asocian a ascitis masiva en postmenopáusicas.\nE) Incorrecta. El cuadro es una neoplasia ovárica primaria con carcinomatosis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.015"
      },
      {
        "stem": "¿Por qué razón oncológica fundamental está FORMALMENTE CONTRAINDICADO realizar una punción-aspiración con aguja de una masa anexial ovárica con criterios ecográficos sospechosos de malignidad?",
        "options": [
          {
            "id": "A",
            "text": "Porque induce una hemorragia digestiva masiva secundaria"
          },
          {
            "id": "B",
            "text": "Porque la rotura de la cápsula quística provoca la siembra y diseminación de células malignas en la cavidad peritoneal, empeorando el estadio y pronóstico oncológico de la paciente"
          },
          {
            "id": "C",
            "text": "Porque eleva de forma irreversible los niveles plasmáticos de CA-125"
          },
          {
            "id": "D",
            "text": "Porque provoca el cierre precoz de las trompas de Falopio contralaterales"
          },
          {
            "id": "E",
            "text": "Porque desencadena una crisis de tirotoxicosis autoinmune"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No causa hemorragia digestiva.\nB) Correcta. La punción evacuadora de un tumor ovárico sospechoso de cáncer está estrictamente proscrita en la ginecología oncológica moderna. Si el tumor corresponde a un carcinoma ovárico confinado al ovario (Estadio IA), la punción accidental o deliberada de la cápsula produce el derrame de líquido cargado de células neoplásicas viables hacia el peritoneo libre, transformando inmediatamente la enfermedad en un Estadio IC (peor pronóstico) y multiplicando drásticamente el riesgo de carcinomatosis peritoneal y muerte. Toda masa ovárica sospechosa debe extirparse quirúrgicamente íntegra sin romper su cápsula.\nC) Incorrecta. La elevación de CA-125 es un marcador tumoral secundario, no el daño biológico.\nD) Incorrecta. No tiene que ver con permeabilidad tubárica.\nE) Incorrecta. Salvo el excepcional estruma ovárico, no causa tirotoxicosis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.015"
      },
      {
        "stem": "¿Cuál de las siguientes condiciones clínicas se asocia al mayor riesgo relativo de desarrollar un Adenocarcinoma de Endometrio de tipo I endometrioide debido a la estimulación estrogénica continua no balanceada?",
        "options": [
          {
            "id": "A",
            "text": "Multiparidad con más de 4 hijos"
          },
          {
            "id": "B",
            "text": "Uso prolongado de anticonceptivos orales combinados durante más de 10 años"
          },
          {
            "id": "C",
            "text": "Obesidad severa (aromatización periférica en tejido adiposo) y Síndrome de Ovario Poliquístico"
          },
          {
            "id": "D",
            "text": "Tabaquismo crónico activo de más de 20 cigarrillos al día"
          },
          {
            "id": "E",
            "text": "Uso continuo de dispositivo intrauterino liberador de levonorgestrel"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La multiparidad es un factor protector (la progesterona del embarazo descama y protege el endometrio).\nB) Incorrecta. Los ACOs combinados protegen fuertemente contra el cáncer de endometrio (reducen el riesgo en un 50%).\nC) Correcta. El adenocarcinoma de endometrio tipo I es un tumor hormonodependiente vinculado a la exposición prolongada a estrógenos sin la oposición protectora de la progesterona ('estrógenos sin oposición'). La Obesidad es el factor de riesgo más importante en países occidentales, debido a que el exceso de tejido adiposo contiene enzima aromatasa que convierte masivamente los andrógenos suprarrenales (androstenediona) en estrona. Asimismo, el Síndrome de Ovario Poliquístico (SOP) perpetúa ciclos anovulatorios crónicos sin fase lútea ni secreción de progesterona.\nD) Incorrecta. Curiosamente, el tabaquismo ejerce un leve efecto antiestrogénico hepático y reduce discretamente el riesgo de cáncer de endometrio (aunque aumenta muchos otros cánceres).\nE) Incorrecta. El DIU-LNG produce atrofia endometrial y es fuertemente protector.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.015"
      }
    ]
  },
  {
    "id": "gin-16",
    "classId": "gin-16",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Oncología Ginecológica & Patología Mamaria",
    "topicLabel": "20.16",
    "title": "Urgencias Ginecológicas Quirúrgicas: Torsión Anexial y Rotura de Quiste Ovárico Hemorrágico",
    "perfilCode": "3.02.1.016",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Urgencia Quirúrgica Ginecológica de Pabellón Inmediato.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#55) · EUNACOM Diciembre 2023 (Q#35) · EUNACOM Julio 2022 (Q#28)",
    "frecuencia": "Alta rentabilidad · Torsión ovárica como emergencia isquémica (laparoscopía y detorsión conservadora) vs quiste hemorrágico roto",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico y Manejo de las Urgencias Ginecológicas Quirúrgicas",
    "diagramRows": [
      {
        "t": "Mujer en Edad Fértil con Dolor Pélvico Agudo Unilateral Intenso de Inicio Súbito",
        "s": "Descartar Embarazo Ectópico (β-hCG) + Solicitar Ecografía Transvaginal Doppler Inmediata",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Diagnóstico Diferencial Ecográfico y Clínico",
        "al": "Torsión Anexial vs Quiste Ovárico Hemorrágico Roto",
        "ll": "Torsión Anexial / Ovárica (Isquemia Aguda)",
        "left": {
          "t": "Ovario Aumentado + Ausencia de Flujo Doppler + Vómitos",
          "s": "Dolor lacerante continuo con paroxismos · Vómitos profusos (80%) · Signo del remolino en pedículo",
          "type": "crit"
        },
        "rl": "Quiste Ovárico Hemorrágico Roto",
        "right": {
          "t": "Dolor Súbito Postcoital en Fase Lútea Tardía",
          "s": "Ecografía: Masa ovárica con ecos reticulares ('red de pesca') + Líquido libre hemático en Douglas",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Conducta Terapéutica Inmediata",
        "al": "Pabellón de Urgencia vs Manejo Médico Conservador",
        "ll": "Manejo de la Torsión Ovárica",
        "left": {
          "t": "LAPAROSCOPÍA DE URGENCIA INMEDIATA",
          "s": "Detorsión ovárica conservadora preservando el ovario (incluso si se ve isquémico/violáceo) · Cistectomía diferida",
          "type": "crit"
        },
        "rl": "Manejo de Quiste Hemorrágico Roto",
        "right": {
          "t": "Observación si Estable vs Cirugía si Inestable",
          "s": "Si está estable y sin caída de hematocrito: Manejo médico analgésico · Si hay shock o hemoperitoneo masivo: Laparoscopía hemostática",
          "type": "acc"
        }
      }
    ],
    "contexto": "El dolor pélvico agudo ginecológico en una mujer en edad fértil con prueba de embarazo negativa representa un desafío clínico cotidiano en las unidades de emergencia. Las dos principales urgencias no obstétricas son la Torsión Anexial y el Quiste Ovárico Hemorrágico Roto. La Torsión Anexial es una verdadera emergencia isquémica por rotación del ovario y la trompa sobre su pedículo vascular, que cursa clásicamente con dolor paroxístico agudo unilateral y cortejo vegetativo severo (náuseas y vómitos en más del 80%); la conducta de elección actual y pregunta clásica de examen es la laparoscopía urgente con DETORSIÓN OVÁRICA CONSERVADORA para salvar el órgano, proscribiéndose la ooforectomía de entrada. Por su parte, el Quiste Hemorrágico Roto suele ser autolimitado tras el coito en fase lútea y su manejo primario es médico conservador salvo inestabilidad hemodinámica.",
    "contentSections": [
      {
        "subhead": "1. Torsión Anexial / Ovárica: Fisiopatología y Diagnóstico",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Rotación total o parcial del ovario y trompa de Falopio sobre su eje vascular (el <strong>ligamento infundíbulo-pélvico</strong> o ligamento suspensorio del ovario, que transporta la arteria y vena ováricas). Inicialmente se ocluye el drenaje venoso y linfático (baja presión), provocando congestión pasiva masiva, edema ovárico extremo y hemorragia intraovárica; finalmente se ocluye el flujo arterial provocando <strong>isquemia ovárica irreversible y necrosis gangrenosa</strong> en cuestión de horas si no se desimpacta.",
          "• <strong>Factores de Riesgo:</strong> <strong>Presencia de un quiste ovárico preexistente de 5 a 10 cm de diámetro</strong> (los teratomas quísticos maduros o quistes dermoides son los que con mayor frecuencia se tuercen debido a su alto contenido graso flotante y peso excéntrico), hiperestimulación ovárica en técnicas de reproducción asistida y el embarazo temprano (por cuerpo lúteo quístico grande).",
          "• <strong>Cuadro Clínico Clásico:</strong>",
          "  - <strong>Dolor pélvico unilateral hiperagudo, súbito, lancinante y severo (10/10)</strong> en fosa ilíaca derecha o izquierda, con episodios de exacerbación paroxística y alivio transitorio (torsión/detorsión intermitente).",
          "  - <strong>Cortejo Vegetativo Acompañante Severo:</strong> <strong>Náuseas y vómitos profusos en más del 80% de los casos</strong> (por reflejo vagal inducido por la isquemia visceral).",
          "  - Al examen: marcada defensa abdominal focal y masa anexial dolorosa exquisita al tacto bimanual.",
          "• <strong>Diagnóstico por Imágenes:</strong>",
          "  - <strong>Ecografía Transvaginal con Doppler Color:</strong> Muestra un <strong>ovario marcadamente aumentado de tamaño (> 4-5 cm) y edematoso</strong> con estroma heterogéneo y folículos antrales desplazados a la periferia ('signo del collar de perlas'). En el pedículo vascular se visualiza el <strong>'signo del remolino' (whirlpool sign)</strong>. En el Doppler se aprecia ausencia o disminución del flujo venoso y arterial. <em>¡ADVERTENCIA EUNACOM!: La presencia de flujo Doppler arterial detectable NO DESCARTA la torsión</em> (debido a la doble irrigación de la arteria uterina; si la sospecha clínica es alta, debe operarse de inmediato)."
        ]
      },
      {
        "subhead": "2. Tratamiento Quirúrgico de la Torsión Ovárica: Abordaje Conservador",
        "paragraphs": [
          "• <strong>Emergencia Quirúrgica Inmediata:</strong> La demora diagnóstica mayor a 24-36 horas condiciona la pérdida irreversible del ovario.",
          "• <strong>Vía de Abordaje Estándar:</strong> <strong>LAPAROSCOPÍA QUIRÚRGICA DE URGENCIA</strong>.",
          "• <strong>Conducta Quirúrgica Moderna (Cambio de Paradigma EUNACOM):</strong>",
          "  - Clásicamente se realizaba ooforectomía directa sin desenrollar por temor a embolias venosas. <strong>HOY EN DÍA ESTA CONDUCTA ESTÁ OBSOLETA Y RECHAZADA</strong>.",
          "  - <strong>LA CONDUCTA DE ELECCIÓN ACTUAL ES LA DETORSIÓN OVÁRICA CONSERVADORA (Desenrollar el ovario):</strong> El cirujano desenrolla el pedículo vascular y evalúa la viabilidad del órgano. <strong>AUNQUE EL OVARIO SE OBSERVE NEGRUZCO, VIOLÁCEO O CIANÓTICO, SE DEBE CONSERVAR</strong> (en más del 90% de los casos el ovario recupera su función hormonal y folicular a largo plazo).",
          "  - Si existe un quiste ovárico evidente (teratoma o cistoadenoma), se puede realizar quistectomía en el mismo acto si el tejido no está excesivamente friable, o diferirse a una segunda cirugía programada semanas después.",
          "  - La Ooforectomía total se reserva exclusivamente para mujeres postmenopáusicas o ante necrosis gangrenosa purulenta desintegrada irreversible."
        ]
      },
      {
        "subhead": "3. Quiste Ovárico Hemorrágico Roto y Diagnóstico Diferencial",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Hemorragia espontánea dentro del cuerpo lúteo o quiste folicular durante la <strong>fase lútea tardía (días 20 a 26 del ciclo)</strong>. Al distenderse la cápsula, se rompe vertiendo sangre y líquido hemático hacia el fondo de saco de Douglas.",
          "• <strong>Desencadenante Clásico:</strong> <strong>Dolor pélvico agudo que se inicia durante o inmediatamente después de una relación sexual coital (coito postcoital)</strong> o ejercicio físico vigoroso en los días previos a la menstruación.",
          "• <strong>Hallazgos Ecográficos:</strong> Quiste ovárico con contenido ecogénico complejo heterogéneo que muestra <strong>patrón reticular en 'tela de araña' o 'red de pesca'</strong> (por hebras de fibrina) con coágulo retráctil avascular sin flujo Doppler interno, y presencia de <strong>líquido libre hemático en el fondo de saco de Douglas</strong>.",
          "• <strong>Conducta Terapéutica Escalonada:</strong>",
          "  - <strong>Paciente Hemodinámicamente ESTABLE (la inmensa mayoría):</strong> <strong>MANEJO MÉDICO CONSERVADOR EXPECTANTE</strong>. Hospitalización en observación durante 24 horas, reposo en cama, hidratación, analgesia parenteral y control seriado de signos vitales y hematocrito. El sangrado casi siempre se autolimita espontáneamente y el hemoperitoneo se reabsorbe.",
          "  - <strong>Paciente INESTABLE o con Hemoperitoneo Progresivo (Caída de hematocrito o shock):</strong> <strong>LAPAROSCOPÍA QUIRÚRGICA DE URGENCIA</strong> para aspiración del hemoperitoneo, coagulación hemostática del lecho ovárico o cistectomía conservadora."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial entre Torsión Anexial y Quiste Ovárico Hemorrágico Roto",
      "headers": [
        "Parámetro Clínico",
        "Torsión Anexial / Ovárica",
        "Quiste Hemorrágico Roto"
      ],
      "rows": [
        [
          "Fisiopatología",
          "Isquemia tisular aguda por rotación del pedículo vascular",
          "Rotura de la cápsula ovárica con hemoperitoneo libre"
        ],
        [
          "Momento Típico del Ciclo",
          "Cualquier momento del ciclo, embarazo o post-TRA",
          "Fase lútea tardía (días 20-26 del ciclo menstrual)"
        ],
        [
          "Gatillante Frecuente",
          "Movimientos bruscos o idiopático",
          "Relaciones sexuales coitales recientes (postcoital)"
        ],
        [
          "Síntomas Acompañantes",
          "Náuseas y vómitos profusos intensos (reflejo vagal)",
          "Habitualmente sin vómitos; dolor pélvico que cede lentamente"
        ],
        [
          "Ecografía Doppler Color",
          "Ovario muy aumentado, edematoso; flujo Doppler disminuido/ausente",
          "Quiste con ecos reticulares en 'red de pesca' + líquido en Douglas"
        ],
        [
          "Conducta Inmediata",
          "LAPAROSCOPÍA DE URGENCIA OBLIGATORIA",
          "Manejo médico conservador expectante si estable"
        ],
        [
          "Técnica Quirúrgica",
          "Detorsión ovárica conservadora (preservar ovario)",
          "Laparoscopía hemostática solo si hay inestabilidad o hemoperitoneo masivo"
        ]
      ]
    },
    "vignette": "Mujer de 23 años, nulípara, sin antecedentes mórbidos, consulta en el servicio de urgencia a las 3 de la madrugada por dolor abdominal en fosa ilíaca derecha de inicio repentino hace 4 horas, lancinante y de intensidad 10/10, acompañado de cuatro episodios de vómitos profusos. Al examen físico: paciente quejumbrosa, afebril, PA 120/75 mmHg, FC 100 lpm. Abdomen sensible a la palpación profunda en fosa ilíaca derecha con contractura muscular voluntaria sin Blumberg franco. Al tacto bimanual se palpa una masa anexial derecha extraordinariamente dolorosa de unos 7 cm. El test rápido de embarazo en orina es negativo y la orina completa es normal. La ecografía transvaginal urgente muestra un ovario derecho aumentado de tamaño a 75 mm, edematoso, que contiene una masa quística de 6 cm compatible con teratoma quístico maduro, con estroma heterogéneo y ausencia de flujo venoso en el estudio Doppler color. El ovario izquierdo es normal.",
    "explicacion": "El cuadro clínico de dolor pélvico hiperagudo unilateral severo acompañado de cortejo vegetativo marcado (vómitos profusos), asociado al antecedente ecográfico de un quiste ovárico de 6 cm (teratoma) y un ovario aumentado de tamaño edematoso con cese de flujo Doppler venoso, es diagnóstico certero de Torsión Anexial / Ovárica. Se trata de una emergencia quirúrgica ginecológica donde el tiempo es factor determinante para evitar la necrosis isquémica irreversible del órgano. La conducta médica correcta e inmediata es preparar a la paciente y trasladarla a pabellón para LAPAROSCOPÍA QUIRÚRGICA DE URGENCIA. De acuerdo al estándar quirúrgico moderno de preservación de la fertilidad en mujeres jóvenes, el procedimiento de elección es la DETORSIÓN OVÁRICA CONSERVADORA (desenrollar el ovario y evaluar recuperación de perfusión), estando formalmente proscrita la ooforectomía de entrada.",
    "keyPoints": [
      "Torsión anexial: Isquemia aguda del ovario y trompa por rotación sobre el pedículo infundíbulo-pélvico.",
      "Tríada clásica de sospecha: Dolor pélvico hiperagudo severo + Masa anexial palpable + Vómitos profusos (80%).",
      "Factor predisponente principal: Quiste ovárico de 5 a 10 cm (especialmente Teratoma o quiste dermoide).",
      "La presencia de flujo arterial en el Doppler NO descarta la torsión ovárica (si hay sospecha clínica, se opera).",
      "Tratamiento quirúrgico de elección en torsión: LAPAROSCOPÍA URGENTE CON DETORSIÓN OVÁRICA CONSERVADORA.",
      "¡Aun si el ovario se ve negruzco/isquémico, se debe detorcer y conservar! (La ooforectomía directa es obsoleta).",
      "Quiste hemorrágico roto: Dolor súbito postcoital en fase lútea tardía; patrón ecográfico en 'red de pesca'.",
      "Manejo de quiste hemorrágico: Observación médica conservadora si está hemodinámicamente estable."
    ],
    "questions": [
      {
        "stem": "Una joven de 21 años consulta por dolor intenso y súbito en fosa ilíaca izquierda de 5 horas de evolución que se acompaña de náuseas y múltiples vómitos alimentarios. La prueba de embarazo es negativa. La ecografía transvaginal Doppler revela un ovario izquierdo aumentado de volumen a 7 cm con estroma marcadamente edematoso y ausencia de flujo vascular al Doppler color, visualizándose el 'signo del remolino' en el pedículo. ¿Cuál es el tratamiento médico-quirúrgico inmediato más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Prescribir analgesia con ketorolaco endovenoso y enviar a reposo en domicilio"
          },
          {
            "id": "B",
            "text": "Laparoscopía de urgencia inmediata para detorsión ovárica y preservación del anexo"
          },
          {
            "id": "C",
            "text": "Punción transvaginal evacuadora guiada por ecografía"
          },
          {
            "id": "D",
            "text": "Tratamiento antibiótico endovenoso para enfermedad pélvica inflamatoria"
          },
          {
            "id": "E",
            "text": "Ooforectomía radical izquierda abierta sin desenrollar el ovario"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Enviar a domicilio a una paciente con torsión ovárica causa la necrosis y pérdida irreversible del ovario en pocas horas.\nB) Correcta. La Torsión Ovárica es una emergencia quirúrgica isquémica por compromiso vascular del ligamento infundíbulo-pélvico. En mujeres jóvenes en edad reproductiva, el estándar quirúrgico internacional exige la intervención inmediata mediante Laparoscopía de urgencia para realizar la DETORSIÓN OVÁRICA CONSERVADORA (desenrollar el anexo sobre su eje) para restaurar el flujo sanguíneo y preservar el parénquima ovárico y la fertilidad. El ovario tiene una extraordinaria capacidad de recuperación funcional aun tras horas de isquemia clínica.\nC) Incorrecta. La punción no resuelve la torsión del pedículo y agrega riesgo de infección.\nD) Incorrecta. No es un cuadro infeccioso; el compromiso es isquémico mecánico.\nE) Incorrecta. La ooforectomía sistemática de entrada sin intentar detorsión es una práctica desaconsejada y mutilante en mujeres jóvenes.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.016"
      },
      {
        "stem": "Una paciente de 24 años consulta por dolor pélvico agudo de inicio brusco tras mantener relaciones sexuales coitales hace 3 horas. Se encuentra en el día 23 de su ciclo menstrual (fase lútea tardía). Signos vitales: PA 118/74 mmHg, FC 78 lpm, afebril. Abdomen blando, sensible en fosa ilíaca derecha sin signos peritoneales. La prueba rápida de embarazo es negativa. La ecografía transvaginal muestra una imagen quística ovárica derecha de 3.5 cm con múltiples septos finos reticulares en 'red de pesca' y escaso líquido libre anecoico en el fondo de saco de Douglas. Su hematocrito es de 40% y se mantiene estable tras 4 horas de observación. ¿Cuál es la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Laparotomía exploradora de urgencia para ooforectomía derecha"
          },
          {
            "id": "B",
            "text": "Manejo médico conservador expectante con analgesia oral, reposo y control ambulatorio"
          },
          {
            "id": "C",
            "text": "Cistectomía ovárica laparoscópica inmediata"
          },
          {
            "id": "D",
            "text": "Inicio de quimioterapia con metotrexato parenteral"
          },
          {
            "id": "E",
            "text": "Transfusión inmediata de 2 unidades de glóbulos rojos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La cirugía abierta es invasiva y desproporcionada para un cuadro estable.\nB) Correcta. El cuadro clínico de dolor pélvico agudo postcoital en fase lútea tardía, asociado a los hallazgos ecográficos patognomónicos de un quiste con patrón reticular en 'red de pesca' y líquido libre escaso en una paciente hemodinámicamente estable (PA 118/74, FC 78, hematocrito normal de 40%), corresponde a un Quiste Ovárico Hemorrágico Roto no complicado. La conducta de elección es el MANEJO MÉDICO CONSERVADOR EXPECTANTE con analgesia, reposo y observación clínica. El sangrado del lecho quístico se autolimitada espontáneamente y el hemoperitoneo leve se reabsorbe sin necesidad de cirugía.\nC) Incorrecta. La laparoscopía solo está indicada si existe inestabilidad hemodinámica, hemoperitoneo masivo o caída persistente del hematocrito.\nD) Incorrecta. El metotrexato es para el embarazo ectópico (la prueba de gestación fue negativa).\nE) Incorrecta. La paciente tiene un hematocrito normal y no requiere transfusión.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.016"
      }
    ]
  }
];

const bloque4Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowGinecologia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque4Classes };
