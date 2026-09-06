const { flow } = require('./dataset_endocrinologia_bloque_1.cjs');
const bloque4 = [
  {
    "id": "endo-16",
    "classId": "endo-16",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Bloque 4 · Metabolismo Mineral, Calcio, Paratiroides y Hueso",
    "topicLabel": "7.16",
    "title": "Hipercalcemia e Hiperparatiroidismo Primario versus Neoplásico",
    "perfilCode": "1.04.1.009",
    "dx": "Calcio total corregido por albúmina o Calcio Iónico + PTH intacta (PTHi). PTH elevada/inapropiada = HPT 1°; PTH suprimida = Neoplasia / Vit D",
    "tx": "Crisis aguda: Suero fisiológico 0.9% enérgico + Ácido Zoledrónico EV +/- Calcitonina. HPT 1°: Paratiroidectomía si cumple criterios",
    "seg": "Calcio sérico, fósforo y función renal post-resección. Monitoreo de hipocalcemia severa por 'Síndrome del Hueso Hambriento'",
    "ges": "No GES directo. Garantías por patología oncológica o nefrológica si concurre",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#42)",
      "EUNACOM Julio 2022 (Q#19)",
      "EUNACOM Diciembre 2020 (Q#34)",
      "EUNACOM Diciembre 2018 (Q#50)"
    ],
    "frecuencia": "MUY ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Hipercalcemia",
    "contexto": "La hipercalcemia es un trastorno hidroelectrolítico de alta relevancia en la medicina interna y en el examen EUNACOM. Más del 90% de todos los casos de hipercalcemia se deben a dos entidades clínicas fundamentales: Hiperparatiroidismo Primario (causa más frecuente en pacientes ambulatorios asintomáticos) e Hipercalcemia Maligna Asociada a Neoplasias (causa más común en pacientes hospitalizados con sintomatología florida). EUNACOM evalúa con máxima regularidad la fórmula de corrección del calcio por albúmina, el uso discriminativo de la PTH intacta para separar causas dependientes de independientes, el protocolo de hidratación agresiva con suero fisiológico y bifosfonatos endovenosos en la crisis aguda, y los criterios quirúrgicos de paratiroidectomía en pacientes asintomáticos.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología del Calcio y Regla de Corrección por Albúmina",
        "paragraphs": [
          "El calcio sérico total se distribuye en tres fracciones: 50% como calcio iónico libre (biológicamente activo y estrechamente regulado por la PTH), 40% unido a proteínas plasmáticas (principalmente albúmina) y 10% complejado con aniones (citrato, fosfato).",
          "Fórmula Obligatoria de Corrección EUNACOM: Ante cualquier alteración en la concentración de albúmina sérica, el calcio total debe corregirse mediante la fórmula: Calcio Corregido (mg/dL) = Calcio Medido (mg/dL) + 0.8 × (4.0 - Albúmina sérica en g/dL). Si la albúmina está disminuida (frecuente en desnutrición, hepatopatía o sepsis), un calcio total aparentemente normal puede ocultar una hipercalcemia iónica real.",
          "Fisiología de la PTH: La hormona paratiroidea estimula la resorción ósea osteoclástica liberando calcio y fósforo, aumenta la reabsorción tubular distal de calcio, inhibe la reabsorción tubular proximal de fosfato (generando hipofosfaturia/hipofosfatemia) y activa la enzima renal 1-alfa-hidroxilasa convirtiendo la 25-OH vitamina D en 1,25-(OH)2 vitamina D (calcitriol activo), que promueve la absorción digestiva de calcio."
        ]
      },
      {
        "subhead": "2. Diagnóstico Etiológico: Hiperparatiroidismo 1° versus Neoplasia Maligna",
        "paragraphs": [
          "La primera prueba de laboratorio mandatoria ante una hipercalcemia confirmada es la medición de PTH Intacta (PTHi):",
          "1) Hiperparatiroidismo Primario (HPT 1°, PTH-Dependiente): La PTHi se encuentra francamente elevada o inapropiadamente 'normal' en presencia de hipercalcemia (calcio > 10.5 mg/dL). Se acompaña típicamente de hipofosfatemia (< 2.5 mg/dL) y acidosis tubular renal leve. Causa: Adenoma paratiroideo único benigno (85%), hiperplasia de las 4 glándulas (12-15%, asociada a NEM 1 y NEM 2A) o carcinoma paratiroideo (< 1%).",
          "2) Hipercalcemia Maligna Neoplásica (PTH-Independiente): La PTHi se encuentra intensamente SUPRIMIDA (< 10 pg/mL). Mecanismos tumorales: a) Secreción de Péptido Relacionado con la PTH (PTHrP, 80% de neoplasias: cáncer epidermoide de pulmón, esófago, cabeza/cuello, cérvix o células renales); b) Metástasis osteolíticas con resorción local por citoquinas (cáncer de mama, mieloma múltiple); c) Producción tumoral autónoma de Calcitriol (1,25-OH2-Vit D en linfomas de Hodgkin y no Hodgkin); d) Enfermedades granulomatosas (sarcoidosis, tuberculosis) con actividad macrofágica de 1-alfa-hidroxilasa."
        ]
      },
      {
        "subhead": "3. Cuadro Clínico: De la Oligosintomatología a la Crisis Hipercalcémica",
        "paragraphs": [
          "Manifestaciones Clásicas (Mnemotecnia clásica 'Bones, Stones, Groans and Moans'): 1) Renales: Poliuria y polidipsia por diabetes insípida nefrogénica inducida por calcio (resistencia a ADH en el túbulo colector), nefrolitiasis cálcica recurrente (oxalato y fosfato de calcio), nefrocalcinosis y falla renal progresiva; 2) Gastrointestinales: Constipación pertinaz, náuseas, vómitos, anorexia, pancreatitis aguda y úlcera péptica por hipergastrinemia; 3) Esqueléticas: Dolores óseos difusos, osteopenia/osteoporosis cortical (típicamente en radio distal tercio 33%) y osteítis fibrosa quística con tumores pardos en casos avanzados; 4) Neuropsiquiátricas: Fatiga, astenia, hiporreflexia osteotendinosa, debilidad muscular, depresión, psicosis o letargia hasta coma; 5) Cardiovasculares: Acortamiento del intervalo QT en el ECG, hipertensión y arritmias ventriculares.",
          "Crisis Hipercalcémica Severa (Calcio Corregido > 14 mg/dL): Emergencia médica con deshidratación masiva, colapso hemodinámico, insuficiencia renal aguda y estupor/coma."
        ]
      },
      {
        "subhead": "4. Manejo Inmediato de la Hipercalcemia Moderada-Severa en Urgencias",
        "paragraphs": [
          "Pilar 1 - EXPANSIÓN DE VOLUMEN CON SUERO FISIOLÓGICO AL 0.9%: Es la medida inicial de MÁXIMA PRIORIDAD. El paciente hipercalcémico presenta un déficit de 3 a 5 litros de agua y sal debido a la diuresis osmótica y los vómitos. Se infunden 200 a 300 mL/hora (2 a 4 litros en las primeras 24 horas) para restaurar la tasa de filtración glomerular e inducir calciuresis por competencia de sodio en el túbulo proximal.",
          "¿Diuréticos de Asa (Furosemida)?: CONTRAINDICADOS COMO PRIMERA LÍNEA. Solo se administran SI y SOLO SI el paciente se encuentra plenamente euvolémico rehidratado y presenta sobrecarga de volumen o insuficiencia cardíaca congestiva.",
          "Pilar 2 - BIFOSFONATOS ENDOVENOSOS DE ALTA POTENCIA: ÁCIDO ZOLEDRÓNICO 4 mg EV en infusión de 15 minutos (o Pamidronato 60-90 mg EV en 2-4 horas). Inhibe potentemente la resorción osteoclástica. Su efecto hipocalcemiante inicia a las 48-72 horas, alcanzando el nadir a los 4-7 días.",
          "Pilar 3 - Terapia Coadyuvante Inmediata: Calcitonina de salmón (4 a 8 UI/kg subcutánea o intramuscular cada 12 horas): ejerce un descenso rápido del calcio en 4 a 6 horas (terapia puente mientras actúa el bifosfonato), pero presenta taquifilaxia a las 48 horas.",
          "Pilar 4 - Glucocorticoides (Prednisona 40-60 mg/día o Hidrocortisona EV): Indicados específicamente si la hipercalcemia es mediada por exceso de calcitriol (linfomas, mieloma múltiple, sarcoidosis)."
        ]
      },
      {
        "subhead": "5. Criterios Quirúrgicos de Paratiroidectomía en HPT Primario Asintomático",
        "paragraphs": [
          "La Paratiroidectomía (resección del adenoma guiada por cintigrama Sestamibi-Tc99m o ecografía) es el único tratamiento curativo definitivo del HPT primario. En pacientes sintomáticos (litiasis, osteoporosis, fracturas) la cirugía es mandatoria.",
          "Criterios de Paratiroidectomía en Pacientes ASINTOMÁTICOS (Guías Internacionales vigentes evaluadas en EUNACOM): 1) Edad menor de 50 años; 2) Calcio sérico corregido > 1.0 mg/dL por encima del límite superior normal (típicamente > 11.5 mg/dL); 3) Compromiso esquelético: Densitometría ósea con T-score < -2.5 en columna, cadera o radio distal 33%, o antecedente de fractura vertebral por fragilidad; 4) Compromiso renal: Tasa de filtración glomerular estimada < 60 mL/min/1.73m2, calciuria de 24 horas > 400 mg/día o nefrolitiasis/nefrocalcinosis asintomática en ecografía/TC.",
          "Riesgo Post-Quirúrgico Crítico: Síndrome del Hueso Hambriento (Hungry Bone Syndrome): hipocalcemia severa sintomática e hipofosfatemia profunda post-paratiroidectomía por avidez mineral ósea masiva; requiere suplementación agresiva con calcio y calcitriol."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Hiperparatiroidismo Primario vs Hipercalcemia Maligna vs Hipercalcemia Hipocalciúrica Familiar",
      "headers": [
        "Entidad Clínica",
        "Calcio Sérico Corregido",
        "PTH Intacta (PTHi)",
        "Fósforo Sérico",
        "Calciuria 24 horas",
        "Causa / Mecanismo Central"
      ],
      "rows": [
        [
          "Hiperparatiroidismo Primario",
          "Elevado (leve a moderado)",
          "Elevada o 'inapropiadamente normal'",
          "Bajo (< 2.5 mg/dL, hipofosfatemia)",
          "Normal o Elevada (> 200-400 mg/d)",
          "Adenoma paratiroideo único (85%)"
        ],
        [
          "Hipercalcemia Maligna (PTHrP)",
          "Muy Elevado (> 13-14 mg/dL)",
          "SUPRIMIDA (< 5-10 pg/mL)",
          "Bajo o Normal",
          "Muy Elevada (> 400 mg/d)",
          "Carcinoma epidermoide, mama, riñón"
        ],
        [
          "Hipercalcemia Maligna (Osteólisis)",
          "Muy Elevado",
          "SUPRIMIDA",
          "Elevado o Normal",
          "Muy Elevada",
          "Mieloma múltiple, metástasis óseas"
        ],
        [
          "Hipercalcemia Hipocalciúrica Familiar (FHH)",
          "Elevado leve (< 11.5 mg/dL)",
          "Normal o discretamente elevada",
          "Normal",
          "MUY BAJA (< 100 mg/d, FE Ca < 1%)",
          "Mutación inactivadora receptor CaSR (benigna, no operar)"
        ],
        [
          "Toxicidad por Vitamina D",
          "Elevado",
          "SUPRIMIDA",
          "ELEVADO (aumenta absorción renal/int)",
          "Elevada",
          "Exceso de ingesta o granulomatosis (sarcoidosis)"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Riesgo Clínico en Hipercalcemia",
      "headers": [
        "Severidad",
        "Calcio Corregido",
        "Síntomas Habituales",
        "Conducta Terapéutica Inmediata"
      ],
      "rows": [
        [
          "Leve",
          "< 12.0 mg/dL",
          "Asintomático, astenia leve, constipación",
          "Hidratación oral, suspender tiazidas/litio, estudio ambulatorio"
        ],
        [
          "Moderada",
          "12.0 a 13.9 mg/dL",
          "Poliuria, náuseas, debilidad muscular, deshidratación",
          "Hospitalización, suero fisiológico EV, bifosfonato según clínica"
        ],
        [
          "Severa / Crisis Hipercalcémica",
          "≥ 14.0 mg/dL",
          "Compromiso de conciencia, estupor, arritmias, falla renal",
          "UCI/UTI, SF 0.9% 3-4 L/d + Zoledronato EV + Calcitonina"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado en Hipercalcemia Aguda Severa",
      "headers": [
        "Fármaco / Medida",
        "Dosis y Vía de Administración",
        "Inicio y Pico de Acción",
        "Rol Clínico / Precaución Crítica"
      ],
      "rows": [
        [
          "Suero Fisiológico al 0.9%",
          "200-300 mL/h (2-4 L en 24h) EV",
          "Inmediato (primeras horas)",
          "Pilar 1 absoluto. Restaura volumen y promueve calciuresis"
        ],
        [
          "Ácido Zoledrónico",
          "4 mg EV en 100 mL SF en 15 min",
          "Inicio 48h, pico a los 4-7 días",
          "Inhibe resorción osteoclástica. Ajustar si VFG < 30 mL/min"
        ],
        [
          "Calcitonina de Salmón",
          "4-8 UI/kg SC o IM cada 12 horas",
          "Inicio en 4-6 horas",
          "Terapia puente rápida. Presenta taquifilaxia tras 48 horas"
        ],
        [
          "Prednisona / Hidrocortisona",
          "Prednisona 40-60 mg/d VO o HC 100 mg EV c/8h",
          "Inicio en 2-4 días",
          "Elección en linfomas, mieloma o sarcoidosis (bloquea 1-alfa-OH)"
        ],
        [
          "Hemodiálisis con baño bajo en Ca",
          "Sesión de diálisis con filtro sin calcio",
          "Inmediato durante la terapia",
          "Indicado en falla renal anúrica severa o refractariedad extrema"
        ]
      ]
    },
    "vignette": "Una mujer de 56 años consulta por astenia progresiva, estreñimiento de difícil manejo de 3 meses de evolución, dolores óseos difusos en extremidades y dos episodios previos de cólico renal expulsivo en los últimos 2 años. Al examen físico se aprecia lúcida, orientada, hidratada, con PA 135/85 mmHg y examen segmentario sin hallazgos patológicos. En los exámenes de laboratorio destaca: Calcio total 11.6 mg/dL con Albúmina de 4.0 g/dL (calcio corregido 11.6 mg/dL, VN 8.5-10.5), Fósforo sérico de 2.1 mg/dL (VN 2.5-4.5), Creatinina 0.9 mg/dL y una concentración de Hormona Paratiroidea Intacta (PTHi) de 145 pg/mL (VN 15-65). La ecografía renal demuestra microlitiasis bilateral.",
    "explicacion": "El cuadro clínico y de laboratorio es diagnóstico de Hiperparatiroidismo Primario. La presencia simultánea de hipercalcemia franca con hipofosfatemia y niveles elevados de PTH intacta confirma la producción autónoma paratiroidea inapropiada (eje calcio-PTH dependiente). La paciente es plenamente sintomática debido al antecedente de nefrolitiasis cálcica recurrente sintomática. Cumple con indicación formal indiscutida de tratamiento quirúrgico curativo definitivo (Paratiroidectomía). El estudio preoperatorio de localización debe incluir ecografía cervical de alta resolución y cintigrama paratiroideo con Tecnecio-99m Sestamibi para planificar una cirugía mínimamente invasiva focalizada.",
    "keyPoints": [
      "El Hiperparatiroidismo Primario es la causa más común de hipercalcemia en el paciente ambulatorio; la Hipercalcemia Maligna lo es en el paciente hospitalizado.",
      "REGLA OBLIGATORIA: Siempre corregir el calcio por albúmina: Calcio Corregido = Calcio Medido + 0.8 × (4.0 - Albúmina).",
      "La PTH Intacta (PTHi) divide el algoritmo: PTH alta o normal-inapropiada = HPT 1°; PTH suprimida = Neoplasia (PTHrP o metástasis).",
      "El HPT 1° se debe en un 85% a un Adenoma Paratiroideo único benigno.",
      "La tríada bioquímica del HPT 1° es: HIPERCALCEMIA + HIPOFOSFATEMIA + PTHi ELEVADA.",
      "La medida inicial de máxima urgencia ante una crisis hipercalcémica (> 14 mg/dL) es la hidratación enérgica con Suero Fisiológico al 0.9% (2 a 4 litros en 24h).",
      "El Ácido Zoledrónico EV (bifosfonato) es el fármaco de elección para el control sostenido de la resorción ósea hipercalcémica.",
      "Criterios quirúrgicos de paratiroidectomía en HPT asintomático: edad < 50 años, Ca > 1 mg/dL sobre el límite, T-score < -2.5, o VFG < 60 mL/min.",
      "En la Hipercalcemia Hipocalciúrica Familiar (mutación CaSR), la excreción fraccionada de calcio es < 1% y NO debe operarse."
    ],
    "questions": [
      {
        "stem": "Un paciente de 64 años con antecedente de cáncer epidermoide de pulmón en etapa avanzada ingresa al servicio de urgencias estuporoso, con sequedad extrema de mucosas, deshidratación severa y signos clínicos de shock hipovolémico. El laboratorio de urgencia revela: Calcio plasmático de 15.2 mg/dL con albúmina de 3.0 g/dL (calcio corregido de 16.0 mg/dL), creatinina de 2.8 mg/dL y una PTH intacta suprimida en 4 pg/mL. El electrocardiograma muestra un intervalo QT marcadamente acortado. ¿Cuál es la primera medida terapéutica de máxima prioridad que debe iniciarse de inmediato?",
        "opciones": [
          "A) Infusión endovenosa rápida de furosemida a dosis de 80 mg en bolo",
          "B) Hidratación agresiva con Suero Fisiológico al 0.9% en infusión endovenosa continua de 200 a 300 mL/hora",
          "C) Calcitonina de salmón subcutánea en monoterapia",
          "D) Ácido zoledrónico 4 mg EV en bolo rápido sin hidratación previa",
          "E) Fosfato de potasio endovenoso"
        ],
        "correcta": "B",
        "explicacion": "El paciente se encuentra cursando una Crisis Hipercalcémica Severa (calcio corregido ≥ 14 mg/dL) de origen neoplásico (PTH suprimida, secundario a secreción tumoral de PTHrP). Los pacientes con hipercalcemia severa presentan invariablemente una depleción masiva de volumen intravascular (déficit de 3 a 5 litros de agua y electrolitos) debido a la diuresis osmótica nefrogénica inducida por calcio y los vómitos. La medida inicial de máxima prioridad e indiscutible antes de cualquier otra intervención es la restitución enérgica de volumen con Suero Fisiológico al 0.9% (2 a 4 litros en las primeras 24 horas). Esto restaura la perfusión renal e induce calciuresis salina. La furosemida está contraindicada en deshidratación, y el zoledronato requiere expansión de volumen previa.",
        "recTag": "EUNACOM Diciembre 2023 (Q#42)"
      },
      {
        "stem": "Una paciente de 46 años asintomática acude a control de salud. En un perfil bioquímico preventivo se detecta calcio sérico de 11.2 mg/dL con albúmina de 4.0 g/dL. El médico sospecha hiperparatiroidismo primario. ¿Cuál es el examen de laboratorio indispensable que confirmará esta sospecha diagnóstica al demostrar su valor elevado o inapropiadamente normal?",
        "opciones": [
          "A) Hormona Paratiroidea Intacta (PTHi)",
          "B) Péptido relacionado con la PTH (PTHrP)",
          "C) Calcitriol sérico (1,25-dihidroxivitamina D)",
          "D) Calcitonina plasmática",
          "E) Fosfatasas alcalinas óseas"
        ],
        "correcta": "A",
        "explicacion": "Ante el hallazgo confirmado de hipercalcemia, la prueba diagnóstica cardinal para categorizar el mecanismo fisiopatológico es la medición de Hormona Paratiroidea Intacta (PTHi). En condiciones fisiológicas normales, una concentración sérica elevada de calcio suprime por completo la liberación de PTH por las glándulas paratiroides mediante la estimulación del receptor sensor de calcio (CaSR). Si la PTH intacta se encuentra elevada o 'inapropiadamente normal' (no suprimida) en coexistencia con hipercalcemia, se establece formalmente el diagnóstico de Hiperparatiroidismo Primario (o raramente hipercalcemia hipocalciúrica familiar).",
        "recTag": "EUNACOM Julio 2022 (Q#19)"
      },
      {
        "stem": "Una mujer de 44 años asintomática presenta hiperparatiroidismo primario confirmado con calcio corregido de 11.8 mg/dL y PTHi de 110 pg/mL. La densitometría ósea muestra un T-score de -2.7 en columna lumbar y la ecografía renal pesquisó microlitiasis renal asintomática. La paciente consulta si debe intervenirse quirúrgicamente. ¿Cuál es la indicación médica correcta respecto a la cirugía paratiroidea?",
        "opciones": [
          "A) No cumple criterios quirúrgicos por encontrarse asintomática; mantener control anual exclusivo con densitometría",
          "B) Cumple criterios formales de Paratiroidectomía debido a su edad menor de 50 años, nivel de calcio > 1 mg/dL sobre el límite normal, presencia de osteoporosis (T-score < -2.5) y litiasis renal",
          "C) Debe recibir radioterapia cervical externa en lugar de cirugía",
          "D) Debe indicarse tratamiento de por vida con cinacalcet y suspender todo lácteo",
          "E) La cirugía está contraindicada porque los adenomas paratiroideos regresionan espontáneamente"
        ],
        "correcta": "B",
        "explicacion": "De acuerdo con el consenso de las Guías Internacionales sobre el Manejo del Hiperparatiroidismo Primario Asintomático, la paciente cumple múltiples criterios formales de indicación quirúrgica de Paratiroidectomía: 1) Edad menor de 50 años (tiene 44 años); 2) Calcio sérico > 1.0 mg/dL por encima del límite superior normal (11.8 mg/dL vs límite 10.5); 3) Osteoporosis demostrada por densitometría ósea con T-score < -2.5 (presenta -2.7 en columna lumbar); y 4) Presencia de nefrolitiasis asintomática demostrada por imagen. La paratiroidectomía es el único tratamiento curativo definitivo, el cual normaliza la calcemia y revierte la pérdida de masa ósea.",
        "recTag": "EUNACOM Diciembre 2020 (Q#34)"
      },
      {
        "stem": "Un paciente de 52 años sometido a una paratiroidectomía subtotal exitosa por hiperparatiroidismo primario severo con compromiso óseo extenso presenta al tercer día postoperatorio parestesias periorales intensas, signo de Chvostek positivo, espasmo carpopedal (signo de Trousseau) y calcio plasmático de 6.4 mg/dL con fósforo sérico de 1.8 mg/dL. ¿Cuál es el diagnóstico de esta complicación postquirúrgica clásica?",
        "opciones": [
          "A) Síndrome del Hueso Hambriento (Hungry Bone Syndrome)",
          "B) Hipotiroidismo iatrogénico agudo",
          "C) Falla renal aguda por nefropatía de contraste",
          "D) Pseudohipoparatiroidismo tipo 1A",
          "E) Crisis tirotóxica por manipulación cervical"
        ],
        "correcta": "A",
        "explicacion": "El cuadro corresponde al Síndrome del Hueso Hambriento (Hungry Bone Syndrome), una complicación postoperatoria típica tras la paratiroidectomía en pacientes que presentaban hiperparatiroidismo primario de larga data o con compromiso óseo severo previo. Al extirpar bruscamente el adenoma hipersecretor de PTH, cesa de forma súbita la resorción osteoclástica masiva inducida por la PTH, mientras que los osteoblastos previamente estimulados captan con extrema avidez cantidades masivas de calcio y fósforo desde la sangre para remineralizar la matriz ósea desmineralizada. Esto provoca una caída abrupta y profunda tanto del calcio sérico (hipocalcemia sintomática severa) como del fósforo (hipofosfatemia concomitante). Requiere aporte masivo de calcio endovenoso y calcitriol oral a dosis altas.",
        "recTag": "EUNACOM Diciembre 2018 (Q#50)"
      }
    ]
  },
  {
    "id": "endo-17",
    "classId": "endo-17",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Bloque 4 · Metabolismo Mineral, Calcio, Paratiroides y Hueso",
    "topicLabel": "7.17",
    "title": "Hipocalcemia Aguda y Crónica: Diagnóstico y Manejo de Emergencia",
    "perfilCode": "1.04.1.010",
    "dx": "Calcio total corregido por albúmina < 8.5 mg/dL o Calcio Iónico < 4.0 mg/dL (1.0 mmol/L) + Signos de irritabilidad neuromuscular (Trousseau / Chvostek)",
    "tx": "Aguda sintomática: Gluconato de Calcio al 10% 1-2 ampollas EV en 10-20 min + infusión continua. Corregir magnesio si hipomagnesemia",
    "seg": "Monitoreo cardíaco continuo (riesgo QT largo y arritmias). Monitoreo de calcemia, magnesemia y producto calcio-fósforo en tratamiento crónico",
    "ges": "No GES directo. Garantías por patología tiroidea/oncológica previa si aplica",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#39)",
      "EUNACOM Diciembre 2019 (Q#22)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo de Rescate en Hipocalcemia Aguda Sintomática",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha de Hipocalcemia Sintomática Aguda",
        "s": "Parestesias periorales y distales · Espasmo carpopedal · Laringoespasmo · QT largo",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Presenta Tetania, Laringoespasmo o QT Largo en ECG?",
        "al": "Severidad",
        "left": {
          "t": "Hipocalcemia Aguda Severa Sintomática",
          "s": "Emergencia Médica · Gluconato de Calcio al 10% 1-2 ampollas (10-20 mL) EV en 10-20 min",
          "type": "crit"
        },
        "right": {
          "t": "Hipocalcemia Crónica Leve Asintomática",
          "s": "Manejo Oral: Carbonato de Calcio 1-3 g/d + Calcitriol 0.25-0.5 mcg/d",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Coexiste Hipomagnesemia Severa (Mg < 1.0 mg/dL)?",
        "al": "Regla Crítica",
        "left": {
          "t": "Hipomagnesemia Presente",
          "s": "OBLIGATORIO: Administrar Sulfato de Magnesio EV (la hipocalcemia es refractaria sin Mg)",
          "type": "warn"
        },
        "right": {
          "t": "Magnesio Normal",
          "s": "Continuar infusión de Calcio EV hasta estabilización y transición a terapia oral",
          "type": "acc"
        }
      }
    ],
    "contexto": "La hipocalcemia aguda es una emergencia clínica potencialmente letal caracterizada por un estado de hiperirritabilidad neuromuscular generalizada secundario al aumento en la permeabilidad neuronal a iones de sodio. La etiología más prevalente en la práctica hospitalaria es el hipoparatiroidismo post-quirúrgico transitorio o definitivo tras tiroidectomía total o disección cervical. EUNACOM evalúa de manera prioritaria la identificación de los signos semiológicos cardinales de hipocalcemia latente (signos de Chvostek y Trousseau), las alteraciones electrocardiográficas (prolongación del intervalo QT), el tratamiento inmediato con gluconato de calcio endovenoso y la regla clínica obligatoria de corregir la hipomagnesemia concomitante.",
    "contentSections": [
      {
        "subhead": "1. Etiologías Principales y Fisiopatología de la Irritabilidad Neuromuscular",
        "paragraphs": [
          "Causa Número 1 en EUNACOM: Hipoparatiroidismo Postquirúrgico iatrogénico (resección accidental o desvascularización isquémica de las glándulas paratiroides durante una tiroidectomía total, lobectomía tiroidea bilateral o vaciamiento ganglionar cervical). Aparece típicamente entre las 24 y 72 horas postoperatorias.",
          "Otras Causas: Hipomagnesemia severa (< 1.0 mg/dL, induce resistencia periférica a PTH y bloquea su síntesis hipofisaria), pancreatitis aguda severa (saponificación de grasas retroperitoneales con atrapamiento de calcio), sepsis con shock, déficit severo de vitamina D y transfusión masiva de hemoderivados (el citrato quelante del anticoagulante secuestra el calcio iónico libre).",
          "Mecanismo Fisiopatológico: El calcio extracelular estabiliza los canales de sodio dependientes de voltaje en las membranas de axones y miocitos. La disminución de calcio reduce el umbral de despolarización, provocando descargas espontáneas repetitivas e hiperexcitabilidad neuromuscular tetánica."
        ]
      },
      {
        "subhead": "2. Signos Clínicos Cardinales y Electrocardiograma",
        "paragraphs": [
          "Manifestaciones Clínicas: Parestesias periorales ('alrededor de la boca') y en la punta de los dedos de manos y pies (signo más precoz), fasciculaciones musculares, hiperreflexia tendinosa profunda, espasmo carpopedal espontáneo (mano en comadrón o 'mano de obstetra'), cólicos abdominales, broncoespasmo y laringoespasmo con estridor inspiratorio que amenaza la vía aérea, y convulsiones generalizadas.",
          "Signos Semiológicos Clásicos (Latentes): 1) Signo de Chvostek: La percusión ligera del nervio facial por delante del trago auricular desencadena una contracción espasmódica involuntaria ipsilateral de los músculos faciales (labio superior, comisura bucal o ala nasal); 2) Signo de Trousseau (MÁS SENSIBLE Y ESPECÍFICO): Al inflar el manguito de presión arterial por encima de la PAS sistólica durante 3 minutos, se produce isquemia nerviosa relativa que desencadena el clásico espasmo carpopedal (flexión de muñeca y articulaciones metacarpofalángicas con extensión interfalángica y aducción del pulgar).",
          "Electrocardiograma: Prolongación del intervalo QT a expensas de un alargamiento del segmento ST, con riesgo latente de arritmias ventriculares como Torsades de Pointes."
        ]
      },
      {
        "subhead": "3. Manejo de Urgencia y Tratamiento de Mantenimiento Crónico",
        "paragraphs": [
          "Manejo Inmediato de la Hipocalcemia Aguda Severa Sintomática: GLUCONATO DE CALCIO AL 10%: 1 a 2 ampollas (10 a 20 mL, equivalentes a 90-180 mg de calcio elemental) diluidos en 50-100 mL de solución glucosada al 5% a infundir por vía endovenosa lenta en 10 a 20 minutos bajo monitorización electrocardiográfica continua. (Nota: Se prefiere gluconato de calcio sobre cloruro de calcio porque este último causa necrosis tisular severa por extravasación).",
          "Infusión Continua de Mantenimiento: Tras el bolo de rescate, se infunden 10 ampollas de gluconato de calcio en 1000 mL de SG 5% a 50-100 mL/hora hasta la resolución completa.",
          "REGLA DE ORO DEL MAGNESIO: Si coexiste hipomagnesemia, la hipocalcemia es ABSOLUTAMENTE REFRACTARIA al tratamiento con calcio. Es mandatorio administrar Sulfato de Magnesio EV (1 a 2 g en 20 minutos) para restaurar la sensibilidad y secreción de PTH.",
          "Manejo Crónico (Hipoparatiroidismo Permanente): Suplementación oral con Carbonato de Calcio (1 a 3 g/día de calcio elemental repartido con las comidas) asociado obligatoriamente a CALCITRIOL oral (1,25-dihidroxivitamina D, 0.25 a 1.0 mcg/día). (La vitamina D común colecalciferol es ineficaz porque sin PTH el riñón no puede sintetizar la 1-alfa-hidroxilasa activa)."
        ]
      }
    ],
    "table": {
      "title": "Comparación Diagnóstica y Terapéutica en Trastornos del Calcio en EUNACOM",
      "headers": [
        "Parámetro",
        "Hipocalcemia Aguda Grave",
        "Hipocalcemia Crónica Estable",
        "Hipocalcemia por Hipomagnesemia"
      ],
      "rows": [
        [
          "Presentación Típica",
          "Parestesias, Trousseau +, Laringoespasmo",
          "Asintomática, cataratas, calcificación ganglios basales",
          "Refractaria a infusión repetida de calcio"
        ],
        [
          "Examen Físico Clave",
          "Trousseau (+) en 94%, Chvostek (+)",
          "Chvostek débil o negativo",
          "Tetania + temblor + arritmias"
        ],
        [
          "Riesgo ECG",
          "Prolongación del intervalo QT (Torsades)",
          "QT limítrofe o normal",
          "QT prolongado + arritmias ventriculares"
        ],
        [
          "Fármaco de Elección",
          "Gluconato de Calcio 10% EV en bolo lento",
          "Carbonato de Calcio oral + Calcitriol oral",
          "Sulfato de Magnesio EV obligatorio previo"
        ],
        [
          "Precaución Crítica",
          "Monitoreo cardíaco; evitar extravasación",
          "Meta calcio 8.0-8.5 mg/dL (evitar hipercalciuria)",
          "Medir siempre magnesio antes de considerar falla de calcio"
        ]
      ]
    },
    "vignette": "Una mujer de 38 años fue sometida a una tiroidectomía total electiva hace 36 horas por un bocio multinodular compresivo. Durante el postoperatorio inmediato en sala de cirugía refiere hormigueos intensos y sensación de adormecimiento peribucal bilateral, que progresa rápidamente a parestesias dolorosas en ambas manos y pies. Al examen físico se aprecia angustiada, taquipneica, con signos vitales estables. Al medir la presión arterial e inflar el manguito a 160 mmHg por 2 minutos, la paciente presenta una flexión involuntaria dolorosa de la muñeca y dedos de la mano derecha en forma de garra (signo de Trousseau positivo). El ionograma urgente informa: Calcio corregido de 6.7 mg/dL y Magnesio sérico de 2.0 mg/dL. El ECG revela un intervalo QTc prolongado de 510 ms.",
    "explicacion": "La paciente presenta una Hipocalcemia Aguda Sintomática Severa por hipoparatiroidismo post-tiroidectomía total (complicación postoperatoria frecuente por lesión transitoria o definitiva de las glándulas paratiroides). La presencia de tetania latente manifiesta por el Signo de Trousseau positivo y prolongación peligrosa del intervalo QT en el electrocardiograma representa una urgencia vital con riesgo de laringoespasmo y arritmias ventriculares. El tratamiento de rescate inmediato de elección indiscutido es la administración de Gluconato de Calcio al 10% (1 a 2 ampollas EV lento en 10-20 minutos bajo monitorización cardíaca continua), seguido de infusión de mantenimiento y transición precoz a carbonato de calcio oral más calcitriol.",
    "keyPoints": [
      "La causa más frecuente de hipocalcemia aguda en el paciente hospitalizado es el Hipoparatiroidismo Postquirúrgico post-tiroidectomía total.",
      "El Signo de Trousseau (espasmo carpopedal al inflar el manguito de PA durante 3 minutos) es más sensible y específico que el signo de Chvostek.",
      "La manifestación electrocardiográfica característica de la hipocalcemia es la PROLONGACIÓN DEL INTERVALO QT a expensas del segmento ST.",
      "Tratamiento de rescate inmediato en hipocalcemia sintomática: GLUCONATO DE CALCIO AL 10% (1-2 ampollas EV lento en 10-20 minutos).",
      "Se prefiere gluconato de calcio sobre cloruro de calcio porque este último produce necrosis tisular grave en caso de extravasación.",
      "REGLA DE ORO: En toda hipocalcemia refractaria, SIEMPRE sospechar y medir MAGNESIO; la hipomagnesemia bloquea la secreción y acción de la PTH.",
      "El tratamiento crónico del hipoparatiroidismo permanente requiere Calcio oral asociado a CALCITRIOL (vitamina D activa), ya que sin PTH no hay 1-alfa-hidroxilasa.",
      "En el tratamiento crónico se busca mantener el calcio en el límite bajo-normal (8.0 a 8.5 mg/dL) para evitar hipercalciuria y nefrocalcinosis."
    ],
    "questions": [
      {
        "stem": "Una paciente de 42 años intervenida de tiroidectomía total hace 48 horas presenta parestesias periorales, contractura muscular dolorosa en ambas manos al inflar el manguito de presión arterial (signo de Trousseau positivo) y sensación de falta de aire con estridor inspiratorio leve. El laboratorio urgente confirma un calcio plasmático de 6.1 mg/dL. ¿Cuál es la conducta terapéutica inmediata más adecuada?",
        "opciones": [
          "A) Administrar carbonato de calcio 1 g por vía oral y citar a control en 24 horas",
          "B) Administrar una ampolla de Gluconato de Calcio al 10% por vía endovenosa lenta en 10 a 20 minutos bajo monitorización cardíaca",
          "C) Administrar vitamina D3 (colecalciferol) 100.000 UI en dosis oral única",
          "D) Indicar rebreathing con bolsa de papel para aumentar la pCO2",
          "E) Administrar cloruro de potasio en bolo endovenoso rápido"
        ],
        "correcta": "B",
        "explicacion": "La paciente presenta una hipocalcemia aguda sintomática severa con signos de tetania e inicio de laringoespasmo (estridor inspiratorio) secundario a hipoparatiroidismo post-tiroidectomía. Esta situación constituye una emergencia médica con riesgo inminente de asfixia por laringoespasmo o arritmias ventriculares letales por QT largo. El tratamiento de rescate inmediato de elección es la administración endovenosa lenta de Gluconato de Calcio al 10% (1 a 2 ampollas diluidas administradas en 10 a 20 minutos bajo monitor continuo de ECG). El calcio oral y la vitamina D son insuficientes y demasiado lentos para controlar una emergencia aguda de estas características.",
        "recTag": "EUNACOM Diciembre 2022 (Q#39)"
      },
      {
        "stem": "Un paciente alcohólico crónico de 54 años ingresa desnutrido con tetania muscular y parestesias. El calcio sérico es de 6.8 mg/dL. Pese a recibir dos bolos endovenosos consecutivos de gluconato de calcio, el paciente persiste tetánico con calcio sérico en 6.9 mg/dL. ¿Cuál es el examen de laboratorio que debe solicitarse de inmediato para identificar la causa de la refractariedad terapéutica?",
        "opciones": [
          "A) Magnesemia plasmática",
          "B) Calcitonina sérica",
          "C) TSH sérica",
          "D) Ácido fólico plasmático",
          "E) Plomo en sangre"
        ],
        "correcta": "A",
        "explicacion": "La hipomagnesemia severa (< 1.0 mg/dL) es una causa clásica de hipocalcemia clínicamente indistinguible de la tetania por hipoparatiroidismo y profundamente refractaria a la administración aislada de calcio endovenoso. El magnesio es un cofactor indispensable tanto para la secreción fisiológica de PTH por las paratiroides como para la respuesta de los órganos diana (hueso y riñón) a la propia PTH. En pacientes con pérdidas gastrointestinales, uso crónico de diuréticos o alcoholismo desnutrido, la coexistencia de hipomagnesemia bloquea el eje del calcio. La administración de Sulfato de Magnesio EV es obligatoria para poder corregir la calcemia.",
        "recTag": "EUNACOM Diciembre 2019 (Q#22)"
      }
    ]
  },
  {
    "id": "endo-18",
    "classId": "endo-18",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Bloque 4 · Metabolismo Mineral, Calcio, Paratiroides y Hueso",
    "topicLabel": "7.18",
    "title": "Osteoporosis: Densitometría Ósea (DEXA), Criterios FRAX y Tratamiento",
    "perfilCode": "1.04.1.011",
    "dx": "Densitometría ósea DEXA: T-score ≤ -2.5 en columna lumbar, cuello femoral o cadera total, O presencia de fractura por fragilidad",
    "tx": "1ra Línea: Alendronato 70 mg/semana VO (o Ácido Zoledrónico 5 mg/año EV) + Calcio (1000-1200 mg/d) + Vitamina D3 (800-2000 UI/d)",
    "seg": "DEXA de control cada 1-2 años. Evaluar 'vacaciones terapéuticas' con bifosfonatos a los 3-5 años por riesgo de fractura atípica de fémur y osteonecrosis mandibular",
    "ges": "No GES directo. Garantías en GES 16 (Adulto Mayor con artrosis / fracturas) y atención integral de salud en APS",
    "reconstrucciones": [
      "EUNACOM Diciembre 2021 (Q#33)",
      "EUNACOM Diciembre 2017 (Q#47)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Osteoporosis EUNACOM",
    "diagramRows": [
      {
        "k": "box",
        "t": "Tamizaje en Mujeres ≥ 65 años o Factores de Riesgo (Corticoides / Fractura)",
        "s": "Solicitar Densitometría Ósea DEXA (Columna lumbar y Cuello Femoral / Cadera total)",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Cuál es el T-score más bajo en DEXA o hay Fractura Previa?",
        "al": "Criterios OMS",
        "left": {
          "t": "T-score ≤ -2.5 O Fractura por Fragilidad",
          "s": "OSTEOPOROSIS CONFIRMADA · Iniciar Bifosfonatos (Alendronato 70 mg/sem o Zoledronato EV)",
          "type": "crit"
        },
        "right": {
          "t": "T-score entre -1.0 y -2.5 (Osteopenia)",
          "s": "Calcular FRAX · Tratar si riesgo fractura mayor ≥ 20% o fractura cadera ≥ 3%",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Tolera vía oral o presenta Enfermedad Esofágica Activa?",
        "al": "Vía de Fármaco",
        "left": {
          "t": "Reflujo Severo / Esofagitis / Imposibilidad bipedestación",
          "s": "Ácido Zoledrónico 5 mg EV anual en infusión (evita toxicidad esofágica)",
          "type": "warn"
        },
        "right": {
          "t": "Buena Tolerancia Digestiva",
          "s": "Alendronato oral en ayunas con vaso de agua lleno · Mantenerse de pie/sentado 30 min",
          "type": "acc"
        }
      }
    ],
    "contexto": "La osteoporosis es una enfermedad esquelética sistémica progresiva caracterizada por una disminución de la masa ósea y un deterioro microarquitectónico del tejido óseo, lo que incrementa sustancialmente la fragilidad esquelética y la susceptibilidad a fracturas patológicas ante traumatismos de baja energía (fracturas por fragilidad en cadera, columna vertebral y muñeca/Colles). Es una patología de altísima prevalencia en mujeres posmenopáusicas en Chile. EUNACOM evalúa con gran frecuencia la interpretación del T-score en la densitometría DEXA, la indicación de tratamiento farmacológico según criterios diagnósticos y algoritmo FRAX, y las normas estrictas de administración oral de los bifosfonatos para evitar úlceras esofágicas.",
    "contentSections": [
      {
        "subhead": "1. Criterios Diagnósticos OMS y Densitometría Ósea (DEXA)",
        "paragraphs": [
          "El estándar de oro diagnóstico es la Absorciometría Radiológica de Doble Energía (DEXA) axial, medida en columna lumbar (L1-L4) y cadera (cuello femoral y cadera total).",
          "Criterios de la OMS según T-score (desviaciones estándar respecto al pico de masa ósea del adulto joven):",
          "1) Normal: T-score ≥ -1.0 DE;",
          "2) Osteopenia (Baja Masa Ósea): T-score entre -1.0 y -2.5 DE;",
          "3) Osteoporosis: T-score ≤ -2.5 DE en cualquiera de los sitios evaluados;",
          "4) Osteoporosis Severa / Establecida: T-score ≤ -2.5 DE asociado a una o más fracturas por fragilidad.",
          "DIAGNÓSTICO CLÍNICO DIRECTO (Regla EUNACOM): Toda persona mayor que presenta una fractura por fragilidad clínica mayor (cadera, vértebra por aplastamiento o húmero proximal ante una caída desde su propia altura) tiene diagnóstico directo de OSTEOPOROSIS, requiriendo tratamiento farmacológico antiosteoporótico inmediato independientemente del valor del T-score densitométrico."
        ]
      },
      {
        "subhead": "2. Indicaciones de Tratamiento Farmacológico y Herramienta FRAX",
        "paragraphs": [
          "¿Cuándo iniciar tratamiento antiosteoporótico específico en EUNACOM?: 1) Presencia de fractura previa de cadera o fractura vertebral clínica o radiológica por fragilidad; 2) Densitometría con T-score ≤ -2.5 en columna o cadera; 3) Osteopenia (T-score entre -1.0 y -2.5) asociada a un riesgo calculado por la herramienta FRAX a 10 años ≥ 20% para fractura osteoporótica mayor o ≥ 3% para fractura de cadera; 4) Uso crónico planificado de corticoides orales (prednisona ≥ 5-7.5 mg/día por más de 3 meses).",
          "Factores de Riesgo Integrados en FRAX: Edad avanzada, sexo femenino, IMC bajo (< 20 kg/m2), tabaquismo activo, alcoholismo (≥ 3 unidades/día), antecedentes parentales de fractura de cadera, artritis reumatoide y causas de osteoporosis secundaria."
        ]
      },
      {
        "subhead": "3. Farmacoterapia: Bifosfonatos y Reglas Estrictas de Administración",
        "paragraphs": [
          "Fármacos Antirresortivos de Primera Línea: BIFOSFONATOS ORALES (Alendronato 70 mg una vez a la semana; Risedronato 35 mg a la semana o 150 mg al mes). Inhiben la enzima farnesil pirofosfato sintasa en los osteoclastos, promoviendo su apoptosis y reduciendo la resorción ósea.",
          "INSTRUCCIONES CRÍTICAS DE ADMINISTRACIÓN ORAL (Muy evaluadas en EUNACOM): 1) Tomar el comprimido a primera hora de la mañana en ayuno absoluto; 2) Ingerir únicamente con un vaso completo (200-250 mL) de agua de la llave pura (no agua mineral con gas, jugos, leche ni té, ya que anulan por completo su absorción intestinal < 1%); 3) Permanecer en posición estrictamente erguida (de pie o sentado en 90°) sin acostarse durante al menos 30 a 60 minutos; 4) No ingerir ningún alimento ni otro medicamento durante los siguientes 30-60 minutos. Fundamento: Prevenir el contacto prolongado con la mucosa esofágica que causa esofagitis erosiva grave o úlceras esofágicas por decúbito.",
          "Alternativa Endovenosa: Ácido Zoledrónico 5 mg EV administrado en infusión de 15 minutos una vez al año. De elección en pacientes con intolerancia gastrointestinal, reflujo gastroesofágico severo, esofagitis previa o falta de adherencia oral.",
          "Suplementación Base Obligatoria: Calcio elemental 1000 a 1200 mg/día (dieta + carbonato/citrato) y Vitamina D3 (Colecalciferol) 800 a 2000 UI/día en todos los pacientes tratados.",
          "Complicaciones Raras a Largo Plazo: Osteonecrosis mandibular (asociada a extracciones dentales) y Fracturas atípicas subtrocantéricas de fémur (dolor en muslo en uso > 5 años); obligan a evaluar 'vacaciones terapéuticas' tras 3-5 años de bifosfonatos."
        ]
      }
    ],
    "table": {
      "title": "Comparación de Terapias Antiosteoporóticas en EUNACOM",
      "headers": [
        "Fármaco / Clase",
        "Vía y Posología",
        "Mecanismo de Acción",
        "Ventajas y Consideraciones de Seguridad"
      ],
      "rows": [
        [
          "Alendronato (Bifosfonato)",
          "70 mg VO semanal en ayuno",
          "Antirresortivo (apoptosis osteoclasto)",
          "Económico, alta eficacia. Exige ayuno y bipedestación 30 min"
        ],
        [
          "Ácido Zoledrónico (Bifosfonato)",
          "5 mg EV anual en infusión 15 min",
          "Antirresortivo de máxima potencia",
          "100% adherencia. Evita toxicidad digestiva. Precaución si VFG < 35"
        ],
        [
          "Denosumab (Anticuerpo monoclonal)",
          "60 mg SC semestral",
          "Inhibe ligando RANK (RANKL)",
          "Útil en falla renal moderada. Si se suspende: efecto rebote rápido"
        ],
        [
          "Teriparatida (Análogo PTH 1-34)",
          "20 mcg SC diario (máx 24 meses)",
          "OSTEOFORMADOR / Anabólico óseo",
          "Elección en osteoporosis severa con múltiples fracturas vertebrales"
        ]
      ]
    },
    "vignette": "Una mujer de 67 años, menopáusica desde los 50 años sin terapia hormonal de reemplazo, consulta para evaluación preventiva ósea. Es no fumadora y no tiene antecedentes de fracturas previas. La densitometría ósea DEXA informa: T-score en columna lumbar L1-L4 de -2.8 DE y T-score en cuello femoral de -2.6 DE. Sus exámenes de laboratorio revelan calcemia, fosfemia, fosfatasas alcalinas, función renal y hemograma normales. La paciente tolera adecuadamente la alimentación oral y no presenta antecedentes de pirosis ni reflujo gastroesofágico. Se decide iniciar tratamiento antiosteoporótico con Alendronato 70 mg semanal.",
    "explicacion": "La paciente presenta osteoporosis densitométrica confirmada (T-score ≤ -2.5 en columna lumbar y cadera). Al tener osteoporosis establecida, el tratamiento farmacológico de primera línea de elección son los bifosfonatos orales (como Alendronato 70 mg una vez a la semana), asociados a un aporte adecuado de calcio (1000-1200 mg/día) y vitamina D (800-2000 UI/día). Debido a su bajísima biodisponibilidad y alto potencial ulcerogénico por reflujo esofágico del comprimido, el médico debe enfatizar rigurosamente las instrucciones de administración: ingerir en ayunas solo con agua pura de la llave y mantenerse en posición erguida (sin acostarse) durante al menos 30 a 60 minutos.",
    "keyPoints": [
      "El diagnóstico densitométrico de osteoporosis según la OMS es un T-score ≤ -2.5 desviaciones estándar en columna lumbar o cadera.",
      "La presencia de una fractura por fragilidad en adulto mayor (cadera, vértebra) establece el diagnóstico clínico directo de OSTEOPOROSIS independientemente de la DEXA.",
      "El tratamiento de primera línea de elección son los Bifosfonatos (Alendronato oral 70 mg/semana o Ácido Zoledrónico 5 mg EV anual).",
      "REGLA ESTRICTA DE ALENDRONATO: Ingerir en ayunas estricto con un vaso lleno de agua de la llave y permanecer de pie o sentado 30-60 minutos sin acostarse.",
      "En pacientes con reflujo severo, esofagitis previa o incapacidad para mantenerse erguidos, el fármaco de elección es el Ácido Zoledrónico EV.",
      "Todos los pacientes bajo terapia antirresortiva deben recibir suplementación adecuada de Calcio (1000-1200 mg/día) y Vitamina D (800-2000 UI/día).",
      "El uso crónico prolongado (> 5 años) de bifosfonatos se asocia a riesgo de fracturas femorales subtrocantéricas atípicas y osteonecrosis mandibular.",
      "La herramienta FRAX estima el riesgo de fractura a 10 años en pacientes con osteopenia para definir el inicio de fármacos (umbral ≥ 20% mayor o ≥ 3% cadera)."
    ],
    "questions": [
      {
        "stem": "Una mujer de 71 años presenta una fractura del cuello femoral izquierdo tras resbalar y caer desde su propia altura en el living de su casa. En el postoperatorio de la osteosíntesis, la densitometría ósea informa un T-score de -2.2 DE en columna lumbar y -2.1 DE en cadera contralateral (osteopenia). ¿Cuál es la conducta terapéutica correcta respecto a su salud ósea?",
        "opciones": [
          "A) No iniciar fármacos antiosteoporóticos específicos debido a que el T-score no alcanza el umbral de -2.5 DE",
          "B) Iniciar tratamiento farmacológico antiosteoporótico con bifosfonatos (o ácido zoledrónico) asociado a calcio y vitamina D, debido a que la fractura por fragilidad establece el diagnóstico clínico directo de osteoporosis",
          "C) Indicar reposo absoluto en cama por 6 meses para favorecer la consolidación ósea",
          "D) Administrar calcitonina nasal como único tratamiento durante 5 años",
          "E) Citar a nueva densitometría en 2 años para reevaluar la indicación de fármacos"
        ],
        "correcta": "B",
        "explicacion": "Una de las reglas cardinales más evaluadas en EUNACOM establece que la presencia de una Fractura por Fragilidad en un adulto mayor ante un traumatismo de bajo impacto (caída de su propia altura) en sitios típicos como cadera o vértebras establece el diagnóstico clínico inequívoco de OSTEOPOROSIS SEVERA / ESTABLECIDA, independientemente de que el valor densitométrico del T-score se encuentre en rango de osteopenia (-1.0 a -2.5). Por consiguiente, la paciente tiene indicación perentoria de iniciar tratamiento farmacológico antiosteoporótico activo de primera línea (bifosfonatos orales o zoledronato endovenoso) junto a calcio y vitamina D para reducir el elevado riesgo de una segunda fractura.",
        "recTag": "EUNACOM Diciembre 2021 (Q#33)"
      },
      {
        "stem": "Una paciente de 66 años con osteoporosis densitométrica (T-score -2.9 en columna lumbar) inicia tratamiento con Alendronato 70 mg una vez a la semana por vía oral. Para maximizar la absorción del medicamento y minimizar el riesgo de esofagitis erosiva medicamentosa severa, ¿cuál de las siguientes indicaciones de administración debe entregarse a la paciente?",
        "opciones": [
          "A) Ingerir el comprimido por la noche inmediatamente antes de acostarse junto a un vaso de leche entera",
          "B) Tomar el comprimido en ayuno absoluto matinal con un vaso lleno de agua pura de la llave y mantenerse sentada o de pie sin acostarse durante al menos 30 minutos",
          "C) Masticar el comprimido junto con el desayuno matinal para facilitar su deglución",
          "D) Disolver el comprimido en jugo de naranja cítrico para favorecer su solubilidad ácida",
          "E) Tomar el comprimido junto a las sales de calcio para que se absorban de manera conjunta"
        ],
        "correcta": "B",
        "explicacion": "Los bifosfonatos orales (alendronato, risedronato) poseen una biodisponibilidad gastrointestinal extremadamente baja (< 1%) y son sumamente irritantes para el epitelio del esófago si permanecen en contacto prolongado con la mucosa. Para asegurar su absorción y prevenir la esofagitis ulcerativa por decúbito, se instruye a la paciente a: 1) Tomarlo en ayunas con un vaso completo (200 mL) de agua de la llave pura (los alimentos, lácteos, jugos y el calcio quelan el bifosfonato e impiden su absorción); 2) No consumir alimentos ni otros fármacos en los siguientes 30 a 60 minutos; y 3) Permanecer erguida (de pie o sentada) sin acostarse durante al menos 30 a 60 minutos.",
        "recTag": "EUNACOM Diciembre 2017 (Q#47)"
      }
    ]
  },
  {
    "id": "endo-19",
    "classId": "endo-19",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Bloque 4 · Metabolismo Mineral, Calcio, Paratiroides y Hueso",
    "topicLabel": "7.19",
    "title": "Déficit de Vitamina D, Osteomalacia del Adulto y Raquitismo",
    "perfilCode": "1.04.1.012",
    "dx": "25-hidroxivitamina D sérica [25(OH)D]: < 20 ng/mL = Deficiencia; 20-29 ng/mL = Insuficiencia; ≥ 30 ng/mL = Suficiencia óptima",
    "tx": "Deficiencia (< 20 ng/mL): Colecalciferol (D3) 50.000 UI semanal por 8 semanas (o 6.000 UI/día), seguido de mantención 1.000-2.000 UI/día",
    "seg": "Control de 25(OH)D sérica a los 3-4 meses de iniciada la carga de reposición. Monitoreo de calcemia y fosfemia",
    "ges": "No GES directo. Garantías por patología metabólica o malabsortiva si aplica",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#16)",
      "EUNACOM Julio 2020 (Q#12)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Diagnóstico y Reposición del Déficit de Vitamina D y Osteomalacia",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha de Déficit de Vitamina D / Osteomalacia",
        "s": "Adulto mayor institucionalizado · Dolores óseos sordos · Debilidad muscular proximal · Malabsorción",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Marcador de Depósitos Corporales: 25-OH Vitamina D Sérica",
        "al": "Niveles Séricos",
        "left": {
          "t": "25(OH)D < 20 ng/mL (Deficiencia Franca)",
          "s": "Carga de Choque: Colecalciferol 50.000 UI semanal por 8 semanas · Asegurar Calcio",
          "type": "crit"
        },
        "right": {
          "t": "25(OH)D 20 a 29 ng/mL (Insuficiencia)",
          "s": "Suplementación Diaria: Colecalciferol 1.000 a 2.000 UI/día VO",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Presenta Osteomalacia Clínica (Fosfatasa Alcalina Alta)?",
        "al": "Compromiso Óseo",
        "left": {
          "t": "Osteomalacia / Seudofracturas de Looser-Milkman",
          "s": "Déficit mineral de matriz osteoide · Calcio normal/bajo + Fósforo bajo + FA elevada",
          "type": "warn"
        },
        "right": {
          "t": "Mantención a Largo Plazo",
          "s": "Colecalciferol 800 a 1.200 UI/día en adultos mayores para prevenir caídas y fracturas",
          "type": "acc"
        }
      }
    ],
    "contexto": "El déficit de vitamina D es una epidemia silenciosa de elevada prevalencia en la población adulta mayor chilena, especialmente en latitudes australes con baja radiación solar UV-B y en adultos mayores institucionalizados. La forma biológica activa (calcitriol) estimula la absorción intestinal activa de calcio y fósforo. Su deficiencia severa y prolongada impide la adecuada mineralización de la matriz osteoide recién formada, provocando Osteomalacia en adultos con cartílagos de crecimiento cerrados y Raquitismo en niños en crecimiento activo. EUNACOM evalúa el examen correcto para medir depósitos (25-OH-vitamina D y NO calcitriol), las dosis de choque de colecalciferol y el perfil analítico de la osteomalacia.",
    "contentSections": [
      {
        "subhead": "1. Síntesis, Metabolismo y Examen Correcto de Evaluación",
        "paragraphs": [
          "La vitamina D3 (colecalciferol) se sintetiza en la piel a partir del 7-dehidrocolesterol por acción de la radiación ultravioleta B solar (80-90% del aporte corporal) o se absorbe por la dieta/suplementos. En el hígado se hidroxila por la 25-hidroxilasa a 25-hidroxivitamina D [25(OH)D o calcidiol]. Posteriormente, en el túbulo proximal renal la enzima 1-alfa-hidroxilasa (estimulada por la PTH y la hipofosfemia) la convierte en la forma activa hormonal 1,25-dihidroxivitamina D [1,25(OH)2D o calcitriol].",
          "REGLA DE LABORATORIO EUNACOM: El examen de laboratorio de elección INDISCUTIDO para evaluar el estado nutricional y las reservas corporales de vitamina D es la 25-HIDROXIVITAMINA D SÉRICA [25(OH)D].",
          "¿Por qué NO medir 1,25(OH)2D (Calcitriol)?: Porque posee una vida media plasmática muy corta (4-6 horas frente a 2-3 semanas de la 25-OH-D) y en estados de deficiencia de vitamina D la elevación secundaria de PTH sobreestimula a la 1-alfa-hidroxilasa renal, manteniendo niveles normales o incluso falsamente elevados de 1,25(OH)2D a expensas de un vaciamiento crítico de los depósitos corporales."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos e Interpretación de Rangos",
        "paragraphs": [
          "Clasificación Internacional y Chilena de 25-OH Vitamina D Sérica:",
          "1) Deficiencia Severa: < 10-12 ng/mL (riesgo inminente de osteomalacia, raquitismo y miopatía proximal severa);",
          "2) Deficiencia: < 20 ng/mL (50 nmol/L);",
          "3) Insuficiencia: 20 a 29 ng/mL;",
          "4) Suficiencia Óptima: 30 a 50 ng/mL;",
          "5) Toxicidad por Hipervitaminosis D: > 100-150 ng/mL (asociada a hipercalcemia, hipercalciuria y nefrocalcinosis por megadosis indiscriminadas)."
        ]
      },
      {
        "subhead": "3. Osteomalacia del Adulto y Esquemas Terapéuticos de Reposición",
        "paragraphs": [
          "Osteomalacia del Adulto: Cuadro clínico caracterizado por dolor óseo sordo continuo generalizado (frecuente en pelvis, columna y costillas), fragilidad esquelética y miopatía proximal dolorosa con marcha de pato o anadeante (dificultad para levantarse de una silla o subir peldaños).",
          "Perfil de Laboratorio Clásico: Calcio sérico normal-bajo o francamente disminuido + Fósforo bajo (por hiperparatiroidismo secundario que induce fosfaturia) + FOSFATASAS ALCALINAS ELEVADAS (sello distintivo de remodelado osteoide desmineralizado) + PTH elevada con 25(OH)D marcadamente baja (< 10-15 ng/mL).",
          "Signo Radiológico Patognomónico: Pseudo-fracturas o Líneas de Looser-Milkman (bandas radiolúcidas estrechas perpendiculares a la cortical en cuello femoral, escápula, ramas pubianas o costillas correspondientes a microfracturas reparadas con matriz osteoide no mineralizada).",
          "Tratamiento de la Deficiencia Franca (< 20 ng/mL): Colecalciferol (Vitamina D3) 50.000 UI por vía oral una vez a la semana durante 8 semanas (o 6.000 UI al día por 8 semanas) para repletar rápidamente los depósitos tisulares, seguido de una dosis de mantenimiento de 1.000 a 2.000 UI/día oral de forma indefinida, asociada a un aporte de calcio elemental de 1.000 mg/día."
        ]
      }
    ],
    "table": {
      "title": "Perfil Bioquímico Comparativo en Enfermedades Metabólicas Óseas en EUNACOM",
      "headers": [
        "Enfermedad Ósea",
        "Calcio Sérico",
        "Fósforo Sérico",
        "Fosfatasa Alcalina (FA)",
        "PTH Intacta",
        "25(OH) Vitamina D"
      ],
      "rows": [
        [
          "Osteomalacia / Raquitismo",
          "Normal-bajo o Bajo",
          "BAJO (< 2.5 mg/dL)",
          "ELEVADA (marcador clave)",
          "ELEVADA (HPT 2°)",
          "MUY BAJA (< 10-20 ng/mL)"
        ],
        [
          "Osteoporosis Primaria",
          "Normal (8.5-10.5)",
          "Normal (2.5-4.5)",
          "Normal",
          "Normal",
          "Normal o Insuficiente"
        ],
        [
          "Enfermedad de Paget Ósea",
          "Normal",
          "Normal",
          "MASIVAMENTE ELEVADA (> 5x)",
          "Normal",
          "Normal"
        ],
        [
          "Hiperparatiroidismo Primario",
          "ELEVADO (> 10.5)",
          "BAJO (< 2.5 mg/dL)",
          "Normal o Levemente alta",
          "ELEVADA o inapropiada",
          "Variable"
        ]
      ]
    },
    "vignette": "Una mujer de 78 años que reside en un establecimiento de larga estadía para adultos mayores (ELEAM) en la ciudad de Valdivia es evaluada por astenia, dolores difusos en pelvis y piernas, debilidad muscular proximal con dificultad para ponerse de pie desde una silla y marcha vacilante anadeante. Su exposición solar es prácticamente nula. En sus exámenes de laboratorio destaca: Calcio total 8.4 mg/dL con Albúmina 3.9 g/dL, Fósforo sérico de 2.0 mg/dL (disminuido), Fosfatasas Alcalinas elevadas en 340 U/L (VN < 120), PTH intacta de 115 pg/mL (elevada) y 25-hidroxivitamina D sérica de 8 ng/mL (deficiencia severa). La radiografía de pelvis revela bandas radiolúcidas simétricas y perpendiculares a la corteza en el cuello de ambos fémures (líneas de Looser-Milkman).",
    "explicacion": "El diagnóstico es Osteomalacia del Adulto secundaria a déficit severo de vitamina D. La combinación clínica de dolor óseo pélvico difuso, miopatía proximal, hipofosfatemia con elevación marcada de fosfatasas alcalinas, hiperparatiroidismo secundario compensatorio (PTH alta) y la presencia radiológica de pseudofracturas de Looser-Milkman confirman la falla de mineralización osteoide. El examen confirmatorio correcto es la 25-hidroxivitamina D (< 10 ng/mL). El tratamiento médico de elección consiste en un esquema de carga con Colecalciferol (D3) a dosis de 50.000 UI semanales por vía oral durante 8 semanas, asociado a suplementación con carbonato de calcio 1000 mg/día, pasando posteriormente a una dosis de mantención diaria de 1000 a 2000 UI/día.",
    "keyPoints": [
      "El examen de elección indiscutido para evaluar depósitos corporales de vitamina D es la 25-HIDROXIVITAMINA D sérica [25(OH)D].",
      "NUNCA se solicita calcitriol [1,25(OH)2D] para tamizaje ni diagnóstico de deficiencia, ya que puede estar normal o elevado por estímulo de la PTH.",
      "Deficiencia se define como 25(OH)D < 20 ng/mL; insuficiencia entre 20 y 29 ng/mL; suficiencia óptima ≥ 30 ng/mL.",
      "La deficiencia severa y prolongada causa Osteomalacia en adultos y Raquitismo en niños (defecto de mineralización de la matriz osteoide).",
      "El perfil analítico de la Osteomalacia es: Calcio normal-bajo + Fósforo bajo + FOSFATASAS ALCALINAS ELEVADAS + PTH elevada.",
      "Las Líneas o Seudofracturas de Looser-Milkman son bandas radiolúcidas corticales patognomónicas de osteomalacia en radiografías.",
      "El tratamiento de la deficiencia (< 20 ng/mL) es Colecalciferol 50.000 UI semanal vía oral durante 8 semanas, seguido de mantención de 1.000-2.000 UI/día.",
      "En adultos mayores, mantener niveles de 25(OH)D ≥ 30 ng/mL mejora la fuerza muscular proximal y reduce sustancialmente el riesgo de caídas y fracturas."
    ],
    "questions": [
      {
        "stem": "Un médico de atención primaria atiende a una mujer de 82 años institucionalizada en un hogar de ancianos sin exposición a luz solar. Para evaluar el estado de sus reservas corporales de vitamina D y descartar deficiencia nutricional, ¿cuál es el examen de laboratorio específico que debe solicitarse?",
        "opciones": [
          "A) 1,25-dihidroxivitamina D sérica (Calcitriol)",
          "B) 25-hidroxivitamina D sérica [25(OH)D o Calcidiol]",
          "C) Calcitonina sérica basal",
          "D) Dehidroepiandrosterona sulfato (DHEA-S)",
          "E) Fosfatasas alcalinas leucocitarias"
        ],
        "correcta": "B",
        "explicacion": "El marcador biológico específico, validado internacionalmente y con mayor precisión diagnóstica para cuantificar los depósitos corporales de vitamina D y diagnosticar tanto su deficiencia como su insuficiencia es la 25-Hidroxivitamina D sérica [25(OH)D o calcidiol]. Posee una vida media plasmática de 2 a 3 semanas y refleja de manera fiel la síntesis cutánea solar y la ingesta dietética. La medición de 1,25-dihidroxivitamina D (calcitriol) es un error conceptual frecuente en la práctica y en el examen EUNACOM, dado que en estados tempranos de deficiencia la PTH se eleva estimulando la 1-alfa-hidroxilasa renal, manteniendo niveles normales o paradójicamente elevados de calcitriol.",
        "recTag": "EUNACOM Diciembre 2022 (Q#16)"
      },
      {
        "stem": "Una paciente de 75 años con dolor óseo sordo progresivo y debilidad muscular proximal presenta en sus exámenes de sangre: Calcio 8.5 mg/dL, Fósforo 2.0 mg/dL, Fosfatasas Alcalinas elevadas en 380 U/L (VN < 120), PTH intacta de 120 pg/mL y una 25-hidroxivitamina D de 7 ng/mL. Las radiografías revelan seudofracturas en ramas isquiopubianas. Se concluye Osteomalacia por déficit severo de vitamina D. ¿Cuál es el esquema farmacológico de ataque más apropiado?",
        "opciones": [
          "A) Colecalciferol 50.000 UI por vía oral una vez a la semana durante 8 semanas, asociado a suplementación con calcio elemental",
          "B) Ácido zoledrónico 5 mg endovenoso en dosis única",
          "C) Alendronato 70 mg semanal en monoterapia",
          "D) Teriparatida 20 mcg subcutáneo diario sin vitamina D",
          "E) Calcitonina nasal 200 UI diarias"
        ],
        "correcta": "A",
        "explicacion": "En pacientes con deficiencia severa de vitamina D (< 20 ng/mL y especialmente < 10 ng/mL) con osteomalacia clínica y bioquímica documentada, el esquema terapéutico estándar de reposición rápida recomendado por las guías endocrinológicas consiste en dosis altas de choque de Colecalciferol (vitamina D3) a razón de 50.000 UI vía oral una vez a la semana durante 8 semanas (o 6.000 UI diarias por 8 semanas). Este esquema repleta los depósitos tisulares saturando los receptores diana, y debe acompañarse obligatoriamente de 1.000 a 1.200 mg/día de calcio elemental. Los fármacos antirresortivos (como bifosfonatos) están FORMALMENTE CONTRAINDICADOS en presencia de osteomalacia activa no corregida porque empeoran la desmineralización ósea.",
        "recTag": "EUNACOM Julio 2020 (Q#12)"
      }
    ]
  }
];

// Convert diagramRows to diagram SVG if present
bloque4.forEach(t => {
  if (t.diagramRows && !t.diagram) {
    t.diagram = flow(t.algoTitle || t.title, t.diagramRows);
  }
});

module.exports = { bloque4 };
