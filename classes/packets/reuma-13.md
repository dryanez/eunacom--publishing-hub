# CLASE reuma-13 · Reumatologia 9.13: Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto

Escribe `classes/lessons/reuma-13.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-13" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-10: Reumatologia 9.10: Lupus Cutáneo (Subagudo y Crónico Discoide) y Lupus Inducido por Drogas
- reuma-11: Reumatologia 9.11: Síndrome Antifosfolípido (SAF): Criterios de Sydney, Trombosis Vascular y Manejo Obstétrico
- reuma-12: Reumatologia 9.12: Esclerosis Sistémica: Cutánea Difusa (Anti-Scl-70) vs Limitada / CREST (Anti-Centrómero) y Crisis Renal
- reuma-14: Reumatologia 9.14: Fenómeno de Raynaud Primario vs Secundario y Capilaroscopía Periungueal
- reuma-15: Reumatologia 9.15: Síndrome de Sjögren y Enfermedad Mixta del Tejido Conectivo (EMTC)
- reuma-16: Reumatologia 9.16: Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-13",
  "classId": "reuma-13",
  "tier": 3,
  "blockNum": 3,
  "blockName": "Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes",
  "topicLabel": "9.13",
  "title": "Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto",
  "perfilCode": "1.11.1.020",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Sin garantía GES específica · Derivación prioritaria a reumatología y oncología",
  "reconstrucciones": "EUNACOM 2017 Q#24 · EUNACOM 2019 Q#15 · EUNACOM 2022 Q#27 · EUNACOM 2024 Q#20",
  "frecuencia": "Alta · Cuadros con signos cutáneos patognomónicos y alerta oncológica crucial en el examen",
  "algoTitle": "Algoritmo Diagnóstico en Miopatías Inflamatorias: Signos Cutáneos, Biopsia y Neoplasia",
  "diagram": {
    "title": "Algoritmo Diagnóstico en Miopatías Inflamatorias: Signos Cutáneos, Biopsia y Neoplasia",
    "svg": "<svg viewBox=\"0 0 620 328\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Debilidad Muscular Proximal Simétrica Progresiva (Cinturas Escapular y Pelviana)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Dificultad para peinarse, subir escaleras o levantarse de una silla · Respeta músculos oculares</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Presencia de Lesiones Cutáneas Patognomónicas</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación inmediata entre Dermatomiositis y Polimiositis</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Pápulas de Gottron y Eritema en Heliotropo</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Ausencia de Lesiones Cutáneas</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Dermatomiositis (DM)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Lesiones violáceas en nudillos (Gottron) y párpados (Heliotropo)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Signo del chal · ALERTA: Cáncer oculto</text>\n<rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Polimiositis (PM)</text>\n<text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Debilidad muscular pura · Infiltrado endomisial CD8+</text>\n<text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Descartar miopatías por fármacos o tiroideas</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"warn\" x=\"12\" y=\"220\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Confirmación: CPK Elevada (10-50x VN) + Biopsia Muscular (Patrón Oro)</text>\n<text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Resonancia muscular (edema) · Electromiografía miopática · Autoanticuerpos Anti-Jo-1, Anti-Mi-2</text>\n<path class=\"ln\" d=\"M310,259 V281\"/>\n<rect class=\"warn\" x=\"12\" y=\"281\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">REGLA DE ORO ONCOLÓGICA MANDATORIA EN ADULTOS</text>\n<text class=\"warnT sub\" x=\"310\" y=\"308\" text-anchor=\"middle\">Tamizaje exhaustivo de Neoplasia Oculta (TAC tórax-abdomen-pelvis, mamografía, PAP/eco transvaginal, endoscopías)</text>\n</svg>"
  },
  "contexto": "Las miopatías inflamatorias autoinmunes se manifiestan por debilidad de cinturas proximales y elevación masiva de CPK. La Dermatomiositis destaca por sus signos cutáneos patognomónicos (eritema en heliotropo y pápulas de Gottron). En el EUNACOM es un concepto capital recordar que hasta un 25-30% de las dermatomiositis en el adulto constituyen un síndrome paraneoplásico, obligando a un tamizaje tumoral exhaustivo inmediato.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología Comparada: Inmunidad Humoral vs Citotóxica Celular",
      "paragraphs": [
        "Aunque comparten la debilidad muscular proximal, su patogenia es profundamente distinta:",
        "• <strong>Dermatomiositis (DM):</strong> Es una <strong>microangiopatía mediada por inmunocomplejos y complemento</strong>. Se produce activación de la cascada del complemento con depósito del complejo lítico de ataque a la membrana (C5b-9) en las paredes de los capilares endomisiales. Esto provoca necrosis endotelial, isquemia capilar y un patrón histopatológico característico de <strong>atrofia perifascicular</strong> con infiltrado inflamatorio perimisial y perivascular compuesto predominantemente por <strong>linfocitos B y linfocitos T CD4+</strong>.",
        "• <strong>Polimiositis (PM):</strong> Es una enfermedad por <strong>citotoxicidad celular directa mediada por linfocitos T CD8+ antígeno-específicos</strong>. Las fibras musculares expresan de forma anómala moléculas del complejo mayor de histocompatibilidad clase I (MHC-I). Los linfocitos T CD8+ y macrófagos invaden y perforan directamente las miofibras musculares no necróticas dentro del fascículo muscular (<strong>infiltrado endomisial</strong>)."
      ]
    },
    {
      "subhead": "2. Cuadro Clínico Muscular y Lesiones Cutáneas Patognomónicas de la DM",
      "paragraphs": [
        "<strong>Manifestaciones Musculares:</strong>",
        "• <strong>Debilidad muscular proximal, bilateral y simétrica</strong>, de curso insidioso y progresivo en semanas a meses. Compromete la cintura pelviana (dificultad para levantarse del asiento sin apoyar los brazos, subir escalones o levantarse del suelo) y escapular (dificultad para elevar los brazos, peinarse o alcanzar objetos altos).",
        "• <em>Músculos Respetados:</em> La musculatura facial y los músculos extraoculares están <strong>COMPLETAMENTE RESPETADOS</strong> (su compromiso orienta a Miastenia Gravis).",
        "• Compromiso de musculatura estriada faríngea y esofágica superior: produce <strong>disfagia orofaríngea alta, disfonía y alto riesgo de neumonía aspirativa</strong> (signo de severidad extrema).",
        "<strong>Lesiones Cutáneas Patognomónicas de la Dermatomiositis:</strong>",
        "1. <strong>Eritema en Heliotropo:</strong> Erupción eritematosa o violácea sobre los párpados superiores y región periorbitaria, con frecuencia acompañada de edema blando periorbitario (facies aborregada). Es prácticamente patognomónica.",
        "2. <strong>Pápulas de Gottron:</strong> Pápulas y placas eritematovioláceas, sobreelevadas o atróficas, localizadas simétricamente sobre el dorso de las <strong>articulaciones metacarpofalángicas (MCF) e interfalángicas (IFP e IFD)</strong>, y en superficies extensoras de codos y rodillas (signo de Gottron).",
        "3. <em>Signo del Chal y Signo en V:</em> Eritema macular violáceo confluente fotosensible en la parte posterior del cuello y hombros (chal) o en el escote anterior (V).",
        "4. <em>Manos de Mecánico:</em> Hiperqueratosis, descamación y fisuración lineal dolorosa en las caras laterales de los dedos, muy ligada al Síndrome Antisintetasa."
      ]
    },
    {
      "subhead": "3. Autoanticuerpos Específicos: Síndrome Antisintetasa",
      "paragraphs": [
        "• <strong>Anti-Jo-1 (Anti-Histidil-tRNA sintetasa):</strong> Es el anticuerpo más frecuente (20-30%). Define el <strong>Síndrome Antisintetasa</strong>: miopatía inflamatoria + <strong>Enfermedad Pulmonar Intersticial Difusa (EPID) severa y rápidamente progresiva</strong> + fenómeno de Raynaud + manos de mecánico + artritis no erosiva.",
        "• <strong>Anti-Mi-2:</strong> Muy específico de dermatomiositis clásica con lesiones cutáneas extensas; se asocia a excelente respuesta a corticoides y bajo riesgo de neoplasia.",
        "• <strong>Anti-TIF-1-gamma y Anti-NXP-2:</strong> Asociados a dermatomiositis del adulto mayor con altísimo riesgo de <strong>cáncer paraneoplásico subyacente</strong>."
      ]
    },
    {
      "subhead": "4. REGLA DE ORO ONCOLÓGICA EUNACOM: Tamizaje de Neoplasia Oculta",
      "paragraphs": [
        "Hasta un <strong>20% a 30% de los pacientes adultos con Dermatomiositis presentan una neoplasia maligna subyacente</strong> (la DM actúa como síndrome paraneoplásico). El riesgo es mayor en mayores de 50 años y persiste elevado durante los primeros 3 a 5 años del diagnóstico.",
        "<em>Tumores más frecuentes:</em> Cáncer de ovario, mama, pulmón, colon, próstata, páncreas y linfoma no Hodgkin.",
        "<strong>Conducta Obligatoria EUNACOM:</strong> Ante todo adulto diagnosticado de dermatomiositis es <strong>mandatorio realizar un tamizaje exhaustivo de neoplasia oculta</strong> que incluye: TAC de tórax, abdomen y pelvis con contraste, mamografía y ecografía ginecológica transvaginal con PAP en mujeres, antígeno prostático específico en hombres, sangre oculta en deposiciones / colonoscopía y endoscopía digestiva alta."
      ]
    },
    {
      "subhead": "5. Diagnóstico de Certeza y Tratamiento Inmunosupresor",
      "paragraphs": [
        "Laboratorio: Elevación extrema de <strong>Creatina Fosfoquinasa (CPK)</strong> (habitualmente 10 a 50 veces sobre el límite superior normal), aldolasa, transaminasas (GOT/GPT de origen muscular) y LDH.",
        "La <strong>Resonancia Magnética muscular (secuencias STIR / T2 con supresión grasa)</strong> demuestra edema muscular inflamatorio activo y guía el sitio óptimo para la <strong>Biopsia Muscular (patrón oro)</strong>.",
        "<strong>Tratamiento:</strong>",
        "• <strong>Corticoides a Dosis Altas:</strong> <strong>Prednisona oral 1 mg/kg/día</strong> (máximo 60-80 mg/día) o <strong>Pulsos de Metilprednisolona endovenosa (1 g/día por 3 días)</strong> si hay disfagia orofaríngea o debilidad rápidamente progresiva.",
        "• <strong>FARME Ahorrador de Corticoides Precoz:</strong> Se inicia <strong>Metotrexato (15 a 25 mg/semana) o Azatioprina (2 a 3 mg/kg/día)</strong> desde el inicio para permitir el descenso posterior de corticoides.",
        "• En casos refractarios, con compromiso respiratorio ventilatorio o disfagia severa se administra <strong>Inmunoglobulina Endovenosa (IGEV 2 g/kg en 2-5 días)</strong> o Rituximab."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Diferencial: Polimiositis vs Dermatomiositis",
    "headers": [
      "Parámetro",
      "Polimiositis (PM)",
      "Dermatomiositis (DM)"
    ],
    "rows": [
      [
        "Mecanismo inmunológico primario",
        "Citotoxicidad celular directa por linfocitos T CD8+",
        "Microangiopatía mediada por complemento e inmunocomplejos"
      ],
      [
        "Localización del infiltrado histológico",
        "Endomisial (infiltración intrafascicular de fibras)",
        "Perimisial y perivascular (en tabiques conjuntivos)"
      ],
      [
        "Lesión histopatológica característica",
        "Invasión de miofibras no necróticas que expresan MHC-I",
        "Atrofia perifascicular de las fibras musculares"
      ],
      [
        "Lesiones cutáneas patognomónicas",
        "AUSENTES (enfermedad muscular pura)",
        "PRESENTES: Heliotropo, Gottron, signo del chal"
      ],
      [
        "Asociación a neoplasia oculta",
        "Leve a moderada (~10%)",
        "Muy ALTA (25 – 30% en adultos mayores)"
      ],
      [
        "Población más afectada",
        "Adultos > 20 años; rara en niños",
        "Bimodal: Forma juvenil (5-14 años) y adultos (> 50 años)"
      ]
    ]
  },
  "severityTable": {
    "title": "Protocolo Obligatorio de Tamizaje Oncológico en Dermatomiositis del Adulto",
    "headers": [
      "Estudio de Tamizaje Tumoral",
      "Órganos Evaluados",
      "Neoplasias Buscadas Activadas"
    ],
    "rows": [
      [
        "TAC Tórax, Abdomen y Pelvis con contraste",
        "Parénquima pulmonar, mediastino, vísceras abdominales",
        "Cáncer pulmonar, renal, pancreático, linfomas"
      ],
      [
        "Mamografía bilateral y Ecografía mamaria",
        "Glándula mamaria y axilas",
        "Cáncer de mama"
      ],
      [
        "Ecografía Ginecológica Transvaginal + PAP",
        "Útero, cuello uterino y anexos ováricos",
        "Cáncer de ovario (altamente asociado a DM) y endometrio"
      ],
      [
        "Colonoscopía y Endoscopía Digestiva Alta",
        "Mucosa colónica, gástrica y esofágica",
        "Cáncer colorrectal y gástrico"
      ],
      [
        "Antígeno Prostático Específico (APE)",
        "Próstata en hombres mayores de 45 años",
        "Cáncer prostático"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Esquema Farmacológico Escalonado en Miopatías Inflamatorias",
    "headers": [
      "Fase Terapéutica",
      "Fármacos y Dosificación",
      "Duración Estimada",
      "Criterio de Ajuste / Respuesta"
    ],
    "rows": [
      [
        "Fase de Inducción Aguda",
        "Prednisona 1 mg/kg/día oral (o Pulsos Metilprednisolona 1g EV x 3d)",
        "4 a 8 semanas",
        "Normalización de CPK y mejoría de fuerza muscular"
      ],
      [
        "Fase de Descenso y Ahorro",
        "Iniciar Metotrexato 15-25 mg/semana o Azatioprina 2-3 mg/kg/d",
        "Meses 2 a 12",
        "Descenso gradual de prednisona hasta ≤ 5-10 mg/d"
      ],
      [
        "Manejo de Casos Refractarios",
        "Inmunoglobulina Endovenosa (IGEV 2 g/kg total) o Rituximab",
        "Ciclos mensuales",
        "Falla de FARME o disfagia grave con riesgo aspirativo"
      ],
      [
        "Rehabilitación Física",
        "Kinesioterapia pasiva precoz y activa supervisada",
        "Continua",
        "Prevenir contracturas articulares y atrofia por desuso"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 58 años sin antecedentes médicos previos consulta por cuadro de 2 meses de debilidad progresiva en hombros y muslos, refiriendo gran dificultad para subir escaleras y levantarse de la taza del baño sin ayudarse con las manos. Al examen físico presenta marcada debilidad muscular proximal (fuerza 3/5 en cuádriceps y deltoides) con fuerza distal conservada (5/5). En los párpados superiores se aprecia una coloración eritematoviolácea con edema periorbitario leve, y en el dorso de las articulaciones metacarpofalángicas de ambas manos se observan pápulas violáceas descamativas. Los exámenes muestran CPK de 4.200 U/L (normal < 170) y transaminasas marcadamente elevadas con GOT de 180 U/L y GPT de 145 U/L.",
    "conducta": "El cuadro clínico es patognomónico de una Dermatomiositis: debilidad muscular proximal simétrica, elevación masiva de CPK (con transaminasas elevadas de origen muscular) y los dos signos cutáneos cardinales: eritema en heliotropo y pápulas de Gottron. Además de iniciar de inmediato corticoides a dosis plenas (Prednisona 1 mg/kg/día) para frenar la miositis, en una paciente de 58 años es estrictamente obligatorio realizar un tamizaje oncológico exhaustivo (TAC de tórax, abdomen y pelvis, mamografía y evaluación ginecológica) debido a la altísima asociación de dermatomiositis con neoplasia oculta subyacente (síndrome paraneoplásico)."
  },
  "explicacion": "El cuadro clínico es patognomónico de una Dermatomiositis: debilidad muscular proximal simétrica, elevación masiva de CPK (con transaminasas elevadas de origen muscular) y los dos signos cutáneos cardinales: eritema en heliotropo y pápulas de Gottron. Además de iniciar de inmediato corticoides a dosis plenas (Prednisona 1 mg/kg/día) para frenar la miositis, en una paciente de 58 años es estrictamente obligatorio realizar un tamizaje oncológico exhaustivo (TAC de tórax, abdomen y pelvis, mamografía y evaluación ginecológica) debido a la altísima asociación de dermatomiositis con neoplasia oculta subyacente (síndrome paraneoplásico).",
  "keyPoints": [
    "Las miopatías inflamatorias cursan con debilidad muscular proximal simétrica y elevación masiva de CPK.",
    "Tanto la polimiositis como la dermatomiositis RESPETAN los músculos faciales y extraoculares.",
    "El eritema en heliotropo y las pápulas de Gottron son lesiones cutáneas patognomónicas de la Dermatomiositis.",
    "La histología de la dermatomiositis muestra atrofia perifascicular e infiltrado perimisial/perivascular por CD4+ y B.",
    "La polimiositis presenta infiltrado endomisial de linfocitos T CD8+ que invaden miofibras que expresan MHC-I.",
    "El anticuerpo Anti-Jo-1 define el Síndrome Antisintetasa: miositis, fibrosis pulmonar intersticial severa, Raynaud y manos de mecánico.",
    "REGLA DE ORO: Todo adulto con Dermatomiositis requiere un tamizaje exhaustivo de Neoplasia Oculta.",
    "El tratamiento de primera línea son los corticoides a dosis altas (Prednisona 1 mg/kg/día) + FARME ahorrador (MTX/Azatioprina)."
  ],
  "questions": [
    {
      "stem": "¿Qué lesión cutánea es característica de la dermatomiositis?",
      "options": [
        {
          "id": "A",
          "text": "Eritema nodoso"
        },
        {
          "id": "B",
          "text": "Eritema malar"
        },
        {
          "id": "C",
          "text": "Eritema en manto"
        },
        {
          "id": "D",
          "text": "Granuloma anular"
        },
        {
          "id": "E",
          "text": "Pioderma gangrenoso"
        }
      ],
      "correcta": "C",
      "explicacion": "La dermatomiositis (DM) es una miopatía inflamatoria idiopática que se caracteriza por la combinación de debilidad muscular proximal y simétrica, junto con manifestaciones cutáneas distintivas. Estas lesiones en la piel son fundamentales para el diagnóstico y a menudo preceden a la debilidad muscular.\n\nEl **eritema en manto**, también conocido como \"signo del chal\" (del inglés, *shawl sign*), es una de las lesiones más características de la dermatomiositis. Consiste en un eritema violáceo o rojizo, plano o ligeramente sobreelevado, que afecta a los hombros, la parte superior de la espalda y el cuello, en un patrón de distribución que simula un chal. Con frecuencia, se extiende a la parte superior del pecho en forma de \"V\" (signo de la V). Esta lesión es una manifestación de la fotosensibilidad que presentan estos pacientes y refleja la inflamación subyacente de la piel en áreas expuestas al sol.\n\nJunto con el eritema en manto, otras lesiones cutáneas patognomónicas o muy características de la DM incluyen las pápulas de Gottron (pápulas violáceas sobre las articulaciones de los nudillos) y el eritema en heliotropo (eritema violáceo en los párpados superiores, a menudo con edema). La presencia de estas lesiones, en el contexto clínico adecuado, es altamente sugestiva del diagnóstico de dermatomiositis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.020"
    },
    {
      "stem": "¿Qué marcador suele alterarse con mayor frecuencia en la\ndermatomiositis?",
      "options": [
        {
          "id": "A",
          "text": "Complemento"
        },
        {
          "id": "B",
          "text": "Factor reumatoídeo"
        },
        {
          "id": "C",
          "text": "Velocidad de sedimentación hemática"
        },
        {
          "id": "D",
          "text": "Anticuerpos antinucleares"
        },
        {
          "id": "E",
          "text": "Creatinfosfoquinasa"
        }
      ],
      "correcta": "E",
      "explicacion": "La dermatomiositis es una miopatía inflamatoria idiopática que se caracteriza por la inflamación y debilidad de los músculos esqueléticos, acompañada de manifestaciones cutáneas distintivas. El proceso patológico central implica el daño a las fibras musculares. La creatinfosfoquinasa (CPK o CK) es una enzima que se encuentra predominantemente en el citoplasma de las células musculares esqueléticas y cardíacas, así como en el cerebro. Es un biomarcador clave de daño muscular.\n\nCuando las células musculares sufren daño o necrosis, como ocurre en la dermatomiositis debido a la inflamación autoinmune, la CPK se libera en grandes cantidades al torrente sanguíneo. Por esta razón, los niveles elevados de CPK sérica son el marcador bioquímico más sensible, frecuente y característico de la lesión muscular activa en pacientes con dermatomiositis y otras miopatías inflamatorias.\n\nLa magnitud de la elevación de la CPK suele correlacionarse con la actividad de la enfermedad y la extensión del daño muscular, convirtiéndola en un parámetro esencial no solo para el diagnóstico sino también para monitorizar la respuesta al tratamiento. Aunque otras condiciones pueden elevar la CPK (como ejercicio intenso, traumatismos o infarto de miocardio), en el contexto clínico de debilidad muscular progresiva y hallazgos cutáneos típicos, una CPK elevada es altamente indicativa de una miopatía inflamatoria.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.020"
    },
    {
      "stem": "La dermatomiositis es una enfermedad autoinmune, que ha sido asociada a\nla presencia de un cáncer concomitante. Los marcadores inmunológicos más\ncaracterísticos de esta patología son:",
      "options": [
        {
          "id": "A",
          "text": "Anticuerpos anti centrómero"
        },
        {
          "id": "B",
          "text": "Anticuerpos anti nucléolo"
        },
        {
          "id": "C",
          "text": "Anticuerpos anti Jo-1"
        },
        {
          "id": "D",
          "text": "Anticuerpos anti Ro y anti La"
        },
        {
          "id": "E",
          "text": "Anticuerpos anti ribonucleoproteína"
        }
      ],
      "correcta": "C",
      "explicacion": "La dermatomiositis es una miopatía inflamatoria idiopática que se caracteriza por debilidad muscular proximal y erupciones cutáneas características. Una característica importante de la dermatomiositis es su asociación con neoplasias malignas, especialmente en adultos.\n\nLos anticuerpos anti-Jo-1 son anticuerpos anti-aminoacil tRNA sintetasa (ARS) y son los más comunes en el síndrome antisintetasa, que incluye dermatomiositis/polimiositis, enfermedad pulmonar intersticial, artritis, fenómeno de Raynaud y fiebre. Si bien no son *específicos* de la dermatomiositis asociada a cáncer, son el marcador inmunológico más característico de la dermatomiositis en general y, por lo tanto, la mejor respuesta entre las opciones dadas. En el contexto de una pregunta que menciona la asociación con cáncer, es importante recordar que la presencia de anticuerpos anti-Jo-1 debe alertar al clínico sobre la posibilidad de un síndrome antisintetasa y, por tanto, considerar la búsqueda de neoplasias.\n\nEs importante mencionar que en la evaluación de dermatomiositis en Chile, se debe seguir la guía clínica correspondiente (si existiera una guía ministerial específica, se citaría aquí).  Sin embargo, dado que las guías chilenas suelen ser menos detalladas en inmunología específica, se recurre a la práctica clínica internacional basada en la evidencia.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.020"
    },
    {
      "stem": "Acude a su consulta una paciente de 31 años por cuadro de 1 semana de\nevolución con debilidad en las masas musculares proximales, apareciendo\neritema violáceo en párpados superiores y eritema en hombros y región\nsuperior del tórax. Usted sospecha una dermatomiositis. ¿Qué marcadores\nserológicos espera que resulten alterados para confirmar el diagnóstico?",
      "options": [
        {
          "id": "A",
          "text": "Anticuerpos anti-citoplasma de neutrófilos (ANCA) y VHS"
        },
        {
          "id": "B",
          "text": "Anticuerpos antinucleares (ANA) y C3 disminuido"
        },
        {
          "id": "C",
          "text": "Factor reumatoídeo"
        },
        {
          "id": "D",
          "text": "Creatinkinasa (CK) y anticuerpos anti Jo-1"
        },
        {
          "id": "E",
          "text": "Anticuerpos anti-RNP"
        }
      ],
      "correcta": "D",
      "explicacion": "La alternativa correcta es la D (Creatinkinasa (CK) y anticuerpos anti Jo-1) porque la dermatomiositis se caracteriza por debilidad muscular proximal y hallazgos cutáneos típicos como el eritema en heliotropo (párpados superiores) y el signo de Gottron (eritema en hombros y región superior del tórax, como describe el caso). La creatinkinasa (CK) es una enzima muscular que se eleva en la dermatomiositis debido a la destrucción muscular (miopatía inflamatoria). Los anticuerpos anti-Jo-1 son un tipo de anticuerpo anti-ARNt sintetasa, fuertemente asociado con la dermatomiositis y el síndrome antisintetasa (que puede incluir miositis, enfermedad pulmonar intersticial, artritis, fiebre y fenómeno de Raynaud). La presencia de estos marcadores apoya fuertemente el diagnóstico de dermatomiositis. Si bien la guía clínica chilena de Artritis Reumatoide (MINSAL) no cubre específicamente la dermatomiositis, los principios generales de diagnóstico de enfermedades autoinmunes se aplican.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.020"
    }
  ],
  "vignetteText": "Mujer de 58 años sin antecedentes médicos previos consulta por cuadro de 2 meses de debilidad progresiva en hombros y muslos, refiriendo gran dificultad para subir escaleras y levantarse de la taza del baño sin ayudarse con las manos. Al examen físico presenta marcada debilidad muscular proximal (fuerza 3/5 en cuádriceps y deltoides) con fuerza distal conservada (5/5). En los párpados superiores se aprecia una coloración eritematoviolácea con edema periorbitario leve, y en el dorso de las articulaciones metacarpofalángicas de ambas manos se observan pápulas violáceas descamativas. Los exámenes muestran CPK de 4.200 U/L (normal < 170) y transaminasas marcadamente elevadas con GOT de 180 U/L y GPT de 145 U/L."
}
```

## PREGUNTAS REALES DEL BANCO (18; por código de la clase y por búsqueda "miopatias, inflamatorias, autoinmunes, polimiositis, dermatomiositis")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Agosto 2021 · Pregunta 104 · confianza 0.9
Un hombre de 68 años, diabético mal controlado, consulta por mialgias generalizadas de 2 semanas de evolución, mayores en los muslos, asociadas a debilidad, mayor en la cintura pélvica y astenia. En el último tiempo refiere dificultades para ponerse de pie, desde una silla o desde la cama. Al examen físico se objetiva debilidad muscular de predominio proximal, sin alteraciones sensitivas. Se solicitan exámenes, entre los que destacan hemograma con hemoglobina: 12,1 g/dl, hematocrito: 37%, blancos: 7.000 por mm3, plaquetas: 250.000 por mm3, VHS: 10 mm/hora. Además, trae glicemia: 150 mg/dl, creatinfosfoquinasa: 1.760 UI/L, LDH: 1.050 UI/L, PCR: 4,3 mg/L, SGOT: 250 UI/L, SGPT: 170 UI/L. ¿Cuál es el diagnóstico más probable?
- A) Polimiositis
- B) Polimialgia reumática
- C) Polineuropatía diabética
- D) Miopatía por cuerpos de inclusión
- E) Síndrome de Guillain Barré
**Correcta: A**
Explicación del banco: La debilidad proximal orienta a miopatía. La elevación de la CK y de los parámetros inflamatorios (PCR) orienta a polimiositis. La polimialgia reumática también puede tener una clínica similar e incluso elevar las CK, pero tiende a elevar mucho la VHS (la polimiositis también puede hacerlo) y, lo más importante, no tiene debilidad en el examen físico (aunque sí puede tener sensación de debilidad). La miopatía por cuerpos de inclusión también es una miopatía inflamatoria y puede tener una clínica similar, pero mucho más lenta (de años o varios meses) y suele afectar muslos y antebrazos con más frecuencia (afectación proximal y distal). Revisar semiología neurológica para las otras opciones.

### [2] EUNACOM Agosto 2021 · Pregunta 105 · confianza 0.85
Un paciente de 71 años, con antecedente de diabetes, hipertensión arterial y lumbago crónico, en tratamiento con hipoglicemiantes orales, atorvastatina y losartán, presenta un cuadro de 1 mes de debilidad de las 4 extremidades, mayor en los muslos, asociadas a mialgias, que en el último tiempo le han dificultado la marcha. Al examen físico se constata paresia M4 de ambas extremidades inferiores, mayor en los cuádriceps, sin alteraciones sensitivas ni focalidad neurológica. Se solicitan exámenes que muestran hemoglobina: 12,1 g/dl, hematocrito: 33%, blancos: 6.200 por mm3, plaquetas: 180.000 por mm3, VHS: 50 mm/hora, SGOT: 210 UI/L, SGPT: 110 UI/L, CPK: 3.760 UI/L, LDH: 1.050 UI/L, PCR: 4,3 mg/L y hemoglobina glicosilada: 7,5%. ¿Cuál es el diagnóstico más probable?
- A) Miopatía por estatinas
- B) Polimialgia reumática
- C) Polimiositis
- D) Miositis por cuerpos de inclusión
- E) Raquiestenosis medular
**Correcta: C**
Explicación del banco: Diagnóstico: **Polimiositis** (opción **C**). Es otra polimiositis clásica, en especial por el marcado aumento de las CPK y la debilidad.. La polimiositis y dermatomiositis son miopatías autoinmunes. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [3] EUNACOM Julio 2017 · Pregunta 104 · confianza 0.85
Una paciente de 58 años, con antecedente de cáncer de mama, tratado con cirugía y radioterapia hace un año, consulta astenia y debilidad de las 4 extremidades. Al exa- men físico presenta edema y eritema palpebral, asociado a aumento de volumen en el brazo derecho. Al examen neurológico se constata la tetraparesia, con reflejos osteoten- díneos normales, sin alteraciones en el tono muscular, ni signos focales. El diagnóstico más probable es:
- A) Síndrome de Guillain Barré
- B) Miastenia gravis
- C) Polimialgia reumática
- D) Dermatomiosistis
- E) Vasculitis
**Correcta: D**
Explicación del banco: Es una dermatomiositis clásica: compromiso de párpados, mialgias, debilidad. Re- cordar que suele ser paraneoplásica, por lo que además se debe sospechar recidiva del cáncer.

### [4] EUNACOM Diciembre 2019 · Pregunta 131 · confianza 0.7
Un hombre de 78 años consulta por debilidad de las extremidades inferiores, que le dificulta realizar movimientos como pararse de una silla o subir escaleras. Al examen físico tiene paresia de las extremidades inferiores, la sensibilidad es normal y no tiene alteración de los reflejos osteotendíneos. ¿Cuál es el diagnóstico más probable?
- A) Polimiositis
- B) Hipotiroidismo
- C) Déficit de vitamina B12
- D) Distrofia muscular progresiva
- E) Raquiestenosis
**Correcta: A**
Explicación del banco: Tiene clínica de una miopatía: debilidad proximal, sin alteraciones sensitivas ni de los reflejos. B, C y E afectan los reflejos y tienen otros síntomas. La raquiestenosis principalmente tiene dolor al caminar, más afectación de las raíces comprometidas. D afecta más a niños, ya que es genética.

### [5] EUNACOM Diciembre 2018 · Pregunta 118 · confianza 0.7
Un hombre de 68 años, diabético mal controlado, consulta por mialgias generalizadas, asociadas a debilidad, mayor en la cintura escapular y astenia. En el último tiempo refiere dificultades para ponerse de pie, desde una silla o desde la cama. Se solicitan exámenes, entre los que destacan CK: 1.800 UI/L, LDH: 1.050 UI/L, PCR: 4,3 (VN: menor a 1). ¿Cuál es el diagnóstico más probable?
- A) Polimiositis
- B) Polimialgia reumática
- C) Polineuropatía diabética
- D) Miopatía por cuerpos de inclusión
- E) Dermatomiositis
**Correcta: A**
Explicación del banco: [Pregunta disputada] Por la edad, lo más probable es la polimialgia reumática, aunque generalmente no eleva tanto las CK y suele cursar sin debilidad, sino solo con las mialgias. Por otro lado, tanto polimiositis (PM), como la miositis por cuerpos de inclusión (MCI) calzan con el cuadro y las alteraciones, aunque la MCI tiene atroﬁa de cuádriceps y del antebrazo, como cosa característica (pero es más frecuente a esa edad que la PM). No sé cual es la respuesta correcta (esperemos que se elimine).

### [6] EUNACOM Diciembre 2018 · Pregunta 109 · confianza 0.6
Un paciente de 82 años, con antecedente de diabetes y enfermedad coronaria, en tratamiento farmacológico con metformina 1 gramo cada 8 horas, glibenclamida 10 mg cada 12 horas, aspirina 100 mg al día y atorvastatina 40 mg al día, presenta un cuadro de mialgias generalizadas, asociadas a debilidad muscular, mayor en la cintura escapular y los muslos. Se solicitan exámenes, entre los que destacan CK: 1.320 UI/L, GOT: 128 UI/L y GOT: 133 UI/L. El diagnóstico más probable es:
- A) Miopatía diabética
- B) Polineuropatía diabética
- C) Miopatía por estatinas
- D) Polimiositis
- E) Polimialgia reumática
**Correcta: C**
Explicación del banco: Diagnóstico: **Miopatía por estatinas** (opción **C**). Es una miopatía pos estatinas clásica.. La polimiositis y dermatomiositis son miopatías autoinmunes. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [7] EUNACOM Diciembre 2019 · Pregunta 27 · confianza 0.95
Un paciente de 58 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador CVF 5.928cc 100% 6.106cc 103% VEF1 4.163cc 76% 5.040cc 92% VEF1/CVF 65% 73% Su radiografía de tórax se muestra a continuación: El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Diagnóstico: **Asma bronquial** (opción **A**). Tiene un cuadro clínico y espirometría (patrón obstructivo que mejora con BD) compatibles con asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [8] EUNACOM Diciembre 2018 · Pregunta 103 · confianza 0.92
Un hombre de 26 años consulta por dolor abdominal de 3 meses de evolución, asociado a diarrea acuosa, que en ocasiones ha presentado hematoquecia. Hace una semana se agrega marcado pujo y tenesmo, más aumento de la intensidad del dolor abdominal. Al examen físico tiene signos vitales normales y su abdomen es sensible a la palpación, con dolor a la palpación de la fosa iliaca y el flaco izquierdos, sin signos peritoneales. Los ruidos hidroaéreos se auscultan conservados. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Cröhn
- B) Enfermedad celiaca
- C) Colitis ulcerosa
- D) Megacolon amebiano
- E) Cáncer de colon
**Correcta: C**
Explicación del banco: Diagnóstico: **Colitis ulcerosa** (opción **C**). Es una colitis ulcerosa clásica. No tiene elementos que hagan elegir a la enfermedad de Cröhn.. Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [9] EUNACOM Diciembre 2025 · Pregunta 30 · confianza 0.9
Una paciente de 46 años, con antecedentes de anemia perniciosa y vi`ligo, es traída al servicio de urgencia por un cuadro de malestar general y desorientación. Sus familiaees relatan que ha presentado compromiso del estado general y astenia de 3 semanas de evolución, asociando recientemente a somnolencia y desorientación. Al examen Fsico está en sopor superﬁcial y sus signos vitales muestran presión arterial: 90/60 mmHg, frecuencia cardíaca: 62 lpm, temperatura: 36 °C. En el examen segmentario se obje8va lengua de gran tamaño y edema de extremidades inferiores. Al examen neurológico está soporosa, no 8ene focalidad neurológica y se observa enlentecimiento de la fase de relajación de los reﬂejos osteotendíneos. Los exámenes de laboratorio muestran sodio: 130 mEq/L, hemoglobina: 10 g/dl, hematocrito: 31%, VCM 102 fL, glóbulos blancos: 5.200/mm³ y plaquetas: 180.000/mm³. Se solicita TAC de cerebro, que no muestra alteraciones. ¿Cuál es el tratamiento inicial más adecuado?
- A) Suero hipertónico endovenoso
- B) Suero ﬁsiológico endovenoso
- C) Levo2roxina endovenosa
- D) Cor2coides endovenosos
- E) An2bió2cos endovenosos
**Correcta: D**
Explicación del banco: Tiene un coma mixedematoso, en contexto de una GroidiGs autoinmune (reforzada por el viVligo y la anemia perniciosa, que son autoinmunes). La primera medida es dar corticoides EV, seguidos de la levoGroxina EV. Si se da directamente la levoGroxina existe riesgo de producir una insuﬁciencia suprarrenal aguda.

### [10] EUNACOM Julio 2024 · Pregunta 110 · confianza 0.9
Un paciente de 27 años consulta por dolor abdominal de un mes de evolución, asociado a diarrea y baja de peso de 6 kg. En algún momento, presentó deposiciones sanguinolentas. Se solicita una tomografía axial computarizada (TAC), que muestra engrosamiento del íleon distal y del ciego, sin masas. ¿Cuál es el examen más adecuado para continuar el estudio diagnóstico?
- A) Parasitológico de deposiciones
- B) Endoscopía digestiva alta
- C) Colonoscopía
- D) Enteroscopía
- E) Enteroclisis por TAC
**Correcta: C**
Explicación del banco: Enfermedad de Crohn: La clínica de la paciente es compatible con una enfermedad inflamatoria intestinal. Además, la TAC muestra un compromiso del intestino delgado, lo que sugiere una enfermedad de Crohn. En las enfermedades inflamatorias intestinales, el diagnóstico definitivo se realiza mediante una colonoscopía.

### [11] EUNACOM Diciembre 2022 · Pregunta 50 · confianza 0.9
Un hombre de 35 años consulta por deposiciones abundantes y líquidas, que iniciaron hace 2 semanas y se presentan hasta 5 veces al día. Además, refiere malestar general y sensación febril. Dos meses atrás fue operado por una fístula perianal. Al examen físico tiene T°: 37,7°C, FC: 88x’, PA. 120/80 mmHg, examen oral con tres úlceras; el examen abdominal muestra abdomen blando, depresible, sensible a la palpación profunda, con negatividad de los signos peritoneales y presencia de ruidos hidroaéreos. ¿Cuál es el diagnóstico más probable?
- A) Infección por Shigella
- B) Colitis ulcerosa
- C) Enfermedad de Cröhn
- D) Colitis pseudomembranosa
- E) Infección por Entamoeba histolytica
**Correcta: C**
Explicación del banco: Diagnóstico: **Enfermedad de Cröhn** (opción **C**). Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Diciembre 2024 · Pregunta 81 · confianza 0.85
Paciente joven con diarrea de larga data, sin mucosidad ni sangre, TAC con engrosamiento íleon distal, diagnóstico, *calprotectina fecal elevada (1500 creo): cáncer/Crohn/CU? (Es Crohn) Tenia mas pinta de cancer<—- no porque tenia 20 y tantos. Tenia 48 era viejo. Pero por el nivel de calprotectina y el compromiso de intestino delgado es Crohn…
- A) Hemograma y VHS
- B) Ecografía
- C) Radiografía
- D) TAC con contraste
- E) Resonancia magnética
**Correcta: A**
Explicación del banco: Diagnóstico: **Hemograma y VHS** (opción **A**). Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [13] EUNACOM Diciembre 2017 · Pregunta 27 · confianza 0.82
Un paciente de 23 años presenta dolor abdominal de 2 meses de evolución, asociado a deposiciones acuosas, que han ido en aumento, hasta presentar diarrea varias veces al día. Además ha tenido sensación de fiebre, y ha perdido 3 kilos de peso. Refiere también que en la última semana presentó un cuadro de hematoquezia abundante, con coágulos. ¿Qué examen es el más adecuado para iniciar el estudio de este paciente?
- A) TAC de abdomen y pelvis
- B) Colonoscopía
- C) Coprocultivo y leucocitos fecales
- D) Examen parasitológico seriado de deposiciones
- E) Toxinas de Clostridium difficile en deposiciones
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Colonoscopía). Es una enfermedad inflamatoria intestinal, que se estudia con colonoscopía.. Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [14] EUNACOM Julio 2017 · Pregunta 76 · confianza 0.8
Paciente de 45 años, fumadora activa de 40 paquetes año, consulta por tos irritativa asociada a disnea y crisis de sibilancias que aparecen en relación a la actividad física e infecciones respiratorias. Se realiza una espirometría que muestra: Basal: VEF1/CVF: 62% VEF1: 2,4L (62% del valor teórico) CVF: 4,9L (92% del valor teórico) Post-Salbutamol VEF1/CVF: 74% VEF1: 3,6L (89% del valor teórico) CVF: 5,0L (95% del valor teórico)
- A) Asma
- B) EPOC
- C) Fibrosis pulmonar
- D) Bronquiectasias
- E) Bronquitis crónica
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Asma). Es un patrón obstructivo, que mejora con broncodilatador, es decir, un asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [15] EUNACOM Enero 2023 · Pregunta 69 · confianza 0.7
Hombre con diarrea disentérica, aftas bucales y antecedente de fístula perianal tratada. ¿Diagnóstico más probable?
- A) Colitis ulcerosa
- B) Síndrome de intestino irritable
- C) Colitis infecciosa por Shigella
- D) Enfermedad de Crohn
- E) Colitis isquémica
**Correcta: D**
Explicación del banco: Diagnóstico: **Enfermedad de Crohn** (opción **D**). Enfermedad de Crohn. Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [16] EUNACOM Diciembre 2019 · Pregunta 163 · confianza 0.7
Un niño de 12 años consulta por cansancio, artralgias, dolores musculares generalizados y fiebre. Refiere que las mialgias son intensas, al punto que limitan su actividad física. Al examen físico presenta dolor a la palpación de las masas musculares, en especial en la espalda alta y los hombros. Además, tiene eritema violáceo en los párpados superiores. El diagnóstico más probable es:
- A) Artritis reumatoide juvenil
- B) Distrofia muscular
- C) Dermatomiositis
- D) Triquinosis
- E) Lupus infantil
**Correcta: C**
Explicación del banco: Es una dermatomiositis infantil clásica, con el rash heliotropo y el rash en manto. Se debe descartar un cáncer (suele ser paraneoplásica).

### [17] EUNACOM Julio 2013 · Pregunta 34 · confianza 0.68
Una paciente de 40 años, con antecedente de hipotiroidismo desde la adolescencia, vitíligo y diabetes diagnosticada hace un año, en tratamiento con régimen oral, acude a control con glicemia de ayuno en 250 mg/dL y hemoglobina glicosilada en 9,0%. El diagnóstico más probable es:
- A) Diabetes mellitus tipo 1
- B) Diabetes mellitus tipo 2
- C) Diabetes mellitus autoinmune
- D) Hipopituitarismo autoinmune
- E) Neoplasia endocrina múltiple tipo 1
**Correcta: C**
Explicación del banco: El diagnóstico es una diabetes LADA, que si bien es igual a la DM1, tiene un nombre distinto. Orientan el vitíligo, el hipotiroidismo (autoinmunes ambos) y la falta de respuesta.

### [18] EUNACOM Diciembre 2022 · Pregunta 127 · confianza 0.62
Una paciente de 27 años consulta por deposiciones diarreicas de 3 semanas de evolución, asociadas a mucho pujo y tenesmo rectal. Refiere rectorragia ocasional escasa. Su examen físico muestra T°: 37°C, PA: 122/78 mmHg, FC: 72x’, abdomen blando, depresible, doloroso a la palpación hipogástrica y fosa iliaca izquierda. ¿Cuál es el examen de elección para proseguir el estudio?
- A) Test de sangre oculta en deposiciones
- B) Parasitológico de deposiciones
- C) Colonoscopía
- D) Tomografía axial computada de abdomen y pelvis
- E) PCR para Clostridioides difficile
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (Colonoscopía). Clase sobre las enfermedades inflamatorias intestinales: colitis ulcerosa y enfermedad de Crohn. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).
