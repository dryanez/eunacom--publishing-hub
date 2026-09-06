const { flow } = require('./dataset_endocrinologia_bloque_1.cjs');
const bloque3 = [
  {
    "id": "endo-11",
    "classId": "endo-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Bloque 3 · Corteza y Médula Suprarrenal: Cushing, Addison, Conn y Feocromocitoma",
    "topicLabel": "7.11",
    "title": "Síndrome de Cushing: Algoritmo Diagnóstico y Diagnóstico Etiológico",
    "perfilCode": "1.04.1.005",
    "dx": "Demostrar hipercortisolismo con 2 pruebas de 1ra línea alteradas (CLU 24h, Nugent 1 mg, Cortisol salival nocturno) + ACTH plasmática",
    "tx": "Según etiología: Resección transesfenoidal (Enfermedad de Cushing), Suprarrenalectomía laparoscópica (Adenoma), ketoconazol/metirapona",
    "seg": "Monitoreo de cortisol post-quirúrgico y reemplazo temporal con hidrocortisona por insuficiencia suprarrenal secundaria a atrofia del eje",
    "ges": "No GES directo. Derivación de alta prioridad a Endocrinología y Neurocirugía / Cirugía Oncológica",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#36)",
      "EUNACOM Julio 2022 (Q#09)",
      "EUNACOM Diciembre 2020 (Q#51)",
      "EUNACOM Diciembre 2018 (Q#27)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Escalonado del Síndrome de Cushing",
    "contexto": "El Síndrome de Cushing engloba el conjunto de signos y síntomas derivados de la exposición prolongada y patológica a concentraciones suprafisiológicas de glucocorticoides. Aunque la causa global más frecuente es exógena (iatrogénica por uso médico de corticoides), en los casos endógenos el 80% corresponde a Enfermedad de Cushing (adenoma hipofisario productor de ACTH) y el 20% a tumores suprarrenales o secreción ectópica de ACTH. EUNACOM evalúa con enorme precisión el algoritmo diagnóstico en dos fases ineludibles: 1) Demostrar fehacientemente el hipercortisolismo patológico autónomo mediante al menos 2 pruebas de primera línea; y 2) Localizar la etiología mediante la medición de ACTH plasmática (ACTH-dependiente vs ACTH-independiente).",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y Diagnóstico Diferencial de Entrada",
        "paragraphs": [
          "Causa Exógena (Iatrogénica): Es por amplio margen la causa más prevalente en la práctica clínica diaria en Chile. Todo paciente con hábito cushingoide debe ser interrogado exhaustivamente sobre el uso de corticoides orales, inyectables, tópicos dérmicos o inhalados de alta potencia. Al suspender bruscamente el fármaco, estos pacientes sufren insuficiencia suprarrenal terciaria por atrofia del eje.",
          "Causas Endógenas: Se clasifican de acuerdo con la dependencia de corticotropina:",
          "1) ACTH-Dependientes (80-85%): a) Enfermedad de Cushing (70-75%): Microadenoma hipofisario productor autónomo de ACTH, 5 veces más común en mujeres; b) Secreción Ectópica de ACTH (10%): Cáncer pulmonar microcítico (oat cell), tumores carcinoides bronquiales o tímicos. Cursan con hipercortisolismo fulminante, hiperpigmentación cutánea marcada e hipokalemia severa con alcalosis metabólica.",
          "2) ACTH-Independientes (15-20%): Adenoma suprarrenal unilateral benigno (10%), carcinoma corticosuprarrenal maligno (5%) o hiperplasia macronodular bilateral. La producción autónoma de cortisol por la corteza adrenal suprime por retroalimentación negativa la secreción hipofisaria de ACTH."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Hallazgos de Alta Sospecha",
        "paragraphs": [
          "Signos Clínicos más Discriminativos (Mayor Especificidad): 1) Fragilidad capilar con equimosis fáciles y hematomas espontáneos ante traumatismos mínimos; 2) Estrías violáceas rojizas anchas (> 1 cm de grosor), típicamente en abdomen, flancos, mamas y cara interna de muslos (debido a la proteólisis del colágeno dérmico inducida por cortisol); 3) Miopatía proximal severa con atrofia de cuádriceps y cintura pélvica (dificultad manifiesta para incorporarse de una silla o subir escaleras sin apoyarse); 4) Pletora facial.",
          "Signos Comunes pero Menos Específicos: Obesidad centrípeta o truncal con redistribución adiposa hacia abdomen, fosa supraclavicular y dorso cervical ('giba de búfalo'), cara de 'luna llena', hipertensión arterial resistente, osteoporosis precoz con fracturas vertebrales patológicas por compresión, intolerancia a la glucosa / diabetes mellitus secundaria, hirsutismo, acné y trastornos neuropsiquiátricos (depresión mayor, psicosis corticoidea o labilidad afectiva)."
        ]
      },
      {
        "subhead": "3. Fase 1: Demostración Bioquímica de Hipercortisolismo Autónomo",
        "paragraphs": [
          "REGLA DE ORO EUNACOM: NUNCA se solicita ACTH ni imágenes (silla turca o suprarrenales) antes de haber demostrado bioquímicamente el hipercortisolismo con al menos 2 pruebas de primera línea concordantes alteradas.",
          "Pruebas de Primera Línea Validadas: 1) Cortisol Libre Urinario (CLU) en orina de 24 horas: Se requieren idealmente 2 recolecciones; valores > 3 veces el límite superior de referencia son fuertemente diagnósticos; 2) Test de Supresión Rápida con Dexametasona 1 mg nocturno (Test de Nugent): Se administra 1 mg de dexametasona vía oral a las 23:00 h y se mide cortisol plasmático a las 08:00 h de la mañana siguiente. Si el eje es normal, el cortisol se suprime a < 1.8 mcg/dL (50 nmol/L). La falta de supresión (cortisol ≥ 1.8 mcg/dL) confirma hipercortisolismo patológico; 3) Cortisol Salival Nocturno (23:00 h): En personas sanas existe ritmo circadiano con cortisol mínimo a la medianoche; en el Cushing se pierde este ritmo circadiano (cortisol elevado a las 23:00 h en al menos 2 mediciones).",
          "Condiciones de Pseudo-Cushing: Depresión severa, alcoholismo crónico crudo, obesidad mórbida y anorexia nerviosa pueden alterar las pruebas; deben descartarse antes de avanzar."
        ]
      },
      {
        "subhead": "4. Fase 2: Diagnóstico Etiológico y Localización Anatómica",
        "paragraphs": [
          "Una vez confirmado el hipercortisolismo con 2 pruebas positivas, el siguiente paso OBLIGATORIO es medir la ACTH plasmática matinal (08:00 h):",
          "1) ACTH Indetectable o Baja (< 5-10 pg/mL): Confirma Síndrome de Cushing ACTH-Independiente (suprarrenal). Paso siguiente: Tomografía Computarizada (TC) de abdomen y pelvis con protocolo suprarrenal para caracterizar adenoma o carcinoma adrenal.",
          "2) ACTH Elevada o Inapropiadamente Normal (> 15-20 pg/mL): Confirma Síndrome de Cushing ACTH-Dependiente. El 80-85% corresponde a hipófisis y 15% a secreción ectópica.",
          "Diferenciación entre Enfermedad de Cushing y ACTH Ectópico: a) Resonancia Magnética (RM) de Silla Turca con gadolinio (pesquisa microadenoma hipofisario); b) Test de supresión con dosis alta de Dexametasona (8 mg) o Test de CRH: la Enfermedad de Cushing conserva cierta retroalimentación negativa y suprime > 50% del cortisol basal, mientras que los tumores ectópicos son autónomos y no suprimen; c) Cateterismo de Senos Petrosos Inferiores con estímulo de CRH: estándar de oro si la RM hipofisaria es negativa o dudosa (< 6 mm)."
        ]
      },
      {
        "subhead": "5. Tratamiento Etiológico Definitivo y Terapia Médica Coadyuvante",
        "paragraphs": [
          "Enfermedad de Cushing: Cirugía de Resección Transesfenoidal del adenoma hipofisario guiada por neurocirugía experta (éxito inicial 80-90%). En casos de persistencia o recidiva: radiocirugía estereotáxica hipofisaria, inhibidores adrenales o suprarrenalectomía bilateral total.",
          "Adenoma Suprarrenal Unilateral: Suprarrenalectomía laparoscópica unilateral tras estabilización clínica previa. Cuidado postoperatorio crítico: Dado que la suprarrenal contralateral se encuentra atrófica por la supresión crónica de ACTH, el paciente desarrolla una insuficiencia suprarrenal aguda transitoria post-resección, requiriendo sustitución con Hidrocortisona oral durante 6 a 12 meses hasta la recuperación funcional del eje corticosuprarrenal.",
          "Fármacos Inhibidores de la Esteroidogénesis Adrenal: Ketoconazol (bloquea CYP17 y CYP11A1), Metirapona u Osilodrostat, indicados para control médico del hipercortisolismo grave antes de la cirugía o en enfermedad ectópica irresecable."
        ]
      }
    ],
    "table": {
      "title": "Algoritmo Diagnóstico Diferencial Etiológico del Síndrome de Cushing en EUNACOM",
      "headers": [
        "Parámetro / Prueba",
        "Enfermedad de Cushing (Hipófisis)",
        "Adenoma Suprarrenal",
        "Carcinoma Suprarrenal",
        "Secreción Ectópica de ACTH (Pulmón)"
      ],
      "rows": [
        [
          "Frecuencia Relativa",
          "70 - 75% de causas endógenas",
          "10 - 12% de causas endógenas",
          "~5% de causas endógenas",
          "~10% de causas endógenas"
        ],
        [
          "ACTH Plasmática",
          "Normal-alta o francamente elevada",
          "Suprimida (< 5 pg/mL)",
          "Suprimida (< 5 pg/mL)",
          "Muy marcadamente elevada (> 100 pg/mL)"
        ],
        [
          "Test Nugent 1 mg",
          "No suprime (cortisol ≥ 1.8)",
          "No suprime (cortisol ≥ 1.8)",
          "No suprime (cortisol ≥ 1.8)",
          "No suprime (cortisol ≥ 1.8)"
        ],
        [
          "Test Dexametasona 8 mg",
          "Suprime > 50% de cortisol basal",
          "No suprime",
          "No suprime",
          "No suprime (autonomía absoluta)"
        ],
        [
          "Niveles de DHEA-S",
          "Normal o ligeramente elevado",
          "Disminuido / suprimido",
          "Masivamente elevado + virilización",
          "Elevado"
        ],
        [
          "Estudio de Imagen",
          "RM de Silla Turca con gadolinio",
          "TC Suprarrenal: nódulo < 4 cm lipídico",
          "TC: masa > 4-6 cm heterogénea invasora",
          "TC Tórax/Abdomen: tumor carcinoide / oat cell"
        ],
        [
          "Tratamiento de Elección",
          "Cirugía transesfenoidal hipofisaria",
          "Suprarrenalectomía laparoscópica",
          "Cirugía oncológica abierta + Mitotano",
          "Resección del tumor ectópico primario"
        ]
      ]
    },
    "severityTable": {
      "title": "Complicaciones Mayores del Hipercortisolismo Crónico No Tratado",
      "headers": [
        "Sistema Comprometido",
        "Manifestación Clínica Crítica",
        "Mecanismo Fisiopatológico",
        "Manejo Específico Coadyuvante"
      ],
      "rows": [
        [
          "Cardiovascular / Vascular",
          "Tromboembolismo venoso (TEV / TEP)",
          "Estado de hipercoagulabilidad (aumento factor VIII, von Willebrand)",
          "Tromboprofilaxis enoxaparina pre/postoperatoria"
        ],
        [
          "Infeccioso / Inmunológico",
          "Sepsis severa bacteriana o micótica",
          "Inmunosupresión celular mediada por glucocorticoides",
          "Profilaxis TMP-SMX contra Pneumocystis si hipercortisolismo severo"
        ],
        [
          "Metabólico / Hidroelectrolítico",
          "Hipokalemia severa (< 2.5 mEq/L) + HTA",
          "Saturación de enzima 11beta-HSD2 por exceso de cortisol (efecto mineralocorticoide)",
          "Espironolactona oral + Aporte agresivo de Cloruro de Potasio"
        ],
        [
          "Esquelético",
          "Fracturas vertebrales por compresión",
          "Inhibición de osteoblastos, hipercalciuria y malabsorción intestinal de Ca",
          "Calcio + Vitamina D + Bifosfonatos tras corrección"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Manejo Quirúrgico y Médico Escalonado según Etiología",
      "headers": [
        "Etiología Confirmada",
        "Tratamiento de 1ra Línea",
        "Terapia Médica Coadyuvante",
        "Cuidado Postoperatorio Obligatorio"
      ],
      "rows": [
        [
          "Enfermedad de Cushing (Microadenoma)",
          "Cirugía transesfenoidal hipofisaria",
          "Ketoconazol 200-400 mg c/8h o Cabergolina pre-op",
          "Hidrocortisona EV/oral de reemplazo transitorio"
        ],
        [
          "Adenoma Suprarrenal Unilateral",
          "Suprarrenalectomía laparoscópica unilateral",
          "Control de HTA con Espironolactona previa",
          "Hidrocortisona 20-30 mg/d por atrofia suprarrenal contralateral"
        ],
        [
          "Carcinoma Corticosuprarrenal",
          "Laparotomía oncológica con márgenes libres",
          "Mitotano oral + Quimioterapia combinada",
          "Monitoreo hormonal de esteroides y metástasis"
        ],
        [
          "Cushing Ectópico Irresecable",
          "Metirapona u Osilodrostat oral",
          "Ketoconazol + Espironolactona + KCl",
          "Profilaxis tromboembólica obligatoria"
        ]
      ]
    },
    "vignette": "Una mujer de 38 años consulta por aumento de peso progresivo de 12 kg en los últimos 8 meses predominantemente en tronco y cara, asociado a debilidad muscular severa en extremidades inferiores que le impide ponerse de pie sin ayuda de los brazos. Al examen físico destaca PA 165/100 mmHg, cara redondeada eritematosa ('luna llena'), acumulación grasa dorsocervical y en fosas supraclaviculares, múltiples hematomas espontáneos en brazos y piernas, y estrías de color violáceo oscuro de 1.5 cm de ancho en hemiabdomen inferior y flancos. No consume corticoides orales ni inyectables. Sus exámenes preliminares revelan glicemia de ayuno 158 mg/dL y kalemia 3.1 mEq/L. Se realiza test de Nugent (1 mg de dexametasona a las 23 h) con cortisol plasmático resultante a las 08 h de 14.2 mcg/dL (no suprime, VN < 1.8), y cortisol libre urinario en 24 horas de 420 mcg/24h (VN < 50).",
    "explicacion": "La paciente presenta un Síndrome de Cushing endógeno florido. El diagnóstico de hipercortisolismo autónomo quedó formalmente establecido con 2 pruebas de primera línea francamente alteradas (Nugent positivo con cortisol de 14.2 mcg/dL y CLU 24h > 8 veces el valor normal). Con el hipercortisolismo confirmado, el siguiente paso ineludible en el algoritmo diagnóstico NO es solicitar imágenes al azar, sino medir la ACTH plasmática matinal para clasificar el cuadro en ACTH-dependiente (si está normal o elevada) versus ACTH-independiente (si está suprimida). Esta distinción orientará de forma inequívoca el estudio de imágenes hacia la silla turca o hacia las glándulas suprarrenales.",
    "keyPoints": [
      "La causa más común de Síndrome de Cushing en la práctica clínica general es la IATROGÉNICA (exógena por uso de corticoides).",
      "Entre las causas endógenas, la Enfermedad de Cushing (microadenoma hipofisario productor de ACTH) representa el 70-80% de los casos.",
      "Los signos clínicos más específicos de hipercortisolismo son la miopatía proximal, las estrías violáceas anchas (> 1 cm) y la fragilidad capilar con hematomas fáciles.",
      "El diagnóstico requiere dos fases estrictas: 1° Demostrar hipercortisolismo con al menos 2 pruebas de 1ra línea; 2° Localizar midiendo ACTH.",
      "Pruebas de primera línea: Test de Nugent (1 mg dexametasona nocturna, suprime a < 1.8 mcg/dL si sano), Cortisol Libre Urinario 24h y Cortisol Salival Nocturno.",
      "Si la ACTH está suprimida (< 5 pg/mL), el origen es suprarrenal (pedir TC de suprarrenales). Si la ACTH está normal-alta o elevada, el origen es ACTH-dependiente (pedir RM de silla turca).",
      "El Cushing ectópico (cáncer pulmonar de células pequeñas) cursa con hipercortisolismo muy severo, alcalosis metabólica con hipokalemia marcada e hiperpigmentación cutánea.",
      "Tras resecar un adenoma suprarrenal unilateral, el paciente requerirá sustitución transitoria con Hidrocortisona debido a que la glándula contralateral se encuentra atrófica."
    ],
    "questions": [
      {
        "stem": "Una mujer de 35 años consulta por obesidad central, debilidad muscular proximal, amenorrea de 6 meses y aparición de estrías violáceas anchas en abdomen. No refiere uso de fármacos. Se solicita un test de Nugent (1 mg dexametasona a las 23 h) que muestra cortisol matinal de 9.8 mcg/dL (no suprime) y un cortisol libre urinario en 24 horas elevado a 350 mcg (normal < 50 mcg/24h). ¿Cuál es el examen de elección que se debe solicitar a continuación para proseguir con el estudio etiológico?",
        "opciones": [
          "A) Tomografía computarizada de abdomen y pelvis con protocolo suprarrenal",
          "B) Determinación de niveles plasmáticos de hormona adrenocorticotropa (ACTH)",
          "C) Resonancia magnética de silla turca con contraste",
          "D) Cateterismo de senos petrosos inferiores",
          "E) Cintigrama con octreótido marcado"
        ],
        "correcta": "B",
        "explicacion": "En el algoritmo diagnóstico del Síndrome de Cushing, una vez confirmado el hipercortisolismo bioquímico mediante dos pruebas de primera línea positivas concordantes (en este caso Nugent y CLU de 24 horas), el paso siguiente e inexcusable consiste en determinar si el cuadro es ACTH-dependiente o ACTH-independiente mediante la medición de ACTH plasmática en sangre. Si la ACTH resulta suprimida (< 5-10 pg/mL), el estudio de imágenes se dirigirá a las glándulas suprarrenales (TC abdominal); si resulta normal-alta o francamente elevada (> 15-20 pg/mL), el estudio se dirigirá a la hipófisis (RM de silla turca) o a la búsqueda de foco ectópico.",
        "recTag": "EUNACOM Diciembre 2023 (Q#36)"
      },
      {
        "stem": "Un hombre de 62 años, fumador pesado de 40 paquetes/año, consulta en urgencias por astenia severa, debilidad muscular profunda que le impide la bipedestación, edema de extremidades inferiores y pérdida de 8 kg de peso en el último mes. Al examen físico destaca hiperpigmentación cutánea difusa en zonas fotoexpuestas y pliegues, PA 175/105 mmHg, sin obesidad evidente. Los exámenes de laboratorio revelan glicemia de 260 mg/dL, sodio 144 mEq/L, potasio 2.1 mEq/L y bicarbonato de 36 mEq/L (alcalosis metabólica hipokalémica). Se confirma hipercortisolismo con ACTH plasmática marcadamente elevada en 280 pg/mL. El test de supresión con dosis alta de dexametasona (8 mg) no muestra supresión del cortisol. ¿Cuál es el diagnóstico más probable?",
        "opciones": [
          "A) Enfermedad de Cushing por adenoma hipofisario",
          "B) Carcinoma de la corteza suprarrenal productor de cortisol",
          "C) Síndrome de Cushing ectópico secundario a carcinoma pulmonar de células pequeñas (oat cell)",
          "D) Hiperaldosteronismo primario (Síndrome de Conn)",
          "E) Insuficiencia suprarrenal primaria por metástasis"
        ],
        "correcta": "C",
        "explicacion": "El cuadro clínico corresponde al Síndrome de Cushing Ectópico, clásicamente asociado a Carcinoma Pulmonar Microcítico o tumores neuroendocrinos/carcinoides. A diferencia de la Enfermedad de Cushing hipofisaria habitual, los tumores neuroendocrinos malignos producen concentraciones masivas de ACTH y precursores (POMC) de instauración rápida, lo que impide el desarrollo del fenotipo cushingoide típico (obesidad centrípeta) pero desencadena una severa hipokalemia con alcalosis metabólica (por activación cruzada masiva del receptor mineralocorticoide por el cortisol libre) e hiperpigmentación cutánea (por estimulación de receptores de melanocortina 1). La ausencia de supresión con 8 mg de dexametasona confirma la completa autonomía de la producción tumoral ectópica.",
        "recTag": "EUNACOM Julio 2022 (Q#09)"
      },
      {
        "stem": "Una paciente de 41 años con Síndrome de Cushing confirmado presenta una ACTH plasmática indetectable (< 2 pg/mL). La TC de abdomen revela un tumor suprarrenal derecho de 3.2 cm homogéneo con baja atenuación (< 10 Unidades Hounsfield) compatible con adenoma benigno; la glándula suprarrenal izquierda luce de aspecto atrófico y delgada. La paciente es sometida exitosamente a una suprarrenalectomía laparoscópica derecha. En el postoperatorio inmediato, ¿cuál es la medida farmacológica mandatoria que debe iniciarse para prevenir una complicación potencialmente mortal?",
        "opciones": [
          "A) Iniciar ketoconazol oral para bloquear residuos tumorales",
          "B) Iniciar terapia de reemplazo hormonal con Hidrocortisona por riesgo inminente de crisis suprarrenal secundaria a la atrofia del eje hipotálamo-hipófisis-adrenal contralateral",
          "C) Indicar espironolactona a dosis altas para prevenir hiperkalemia",
          "D) Indicar radioyodo I-131 para destruir remanentes glandulares",
          "E) Mantener en observación sin medicamentos puesto que la glándula contralateral asumirá de inmediato la función fisiológica"
        ],
        "correcta": "B",
        "explicacion": "En el Síndrome de Cushing por adenoma suprarrenal unilateral autónomo, los niveles suprafisiológicos crónicos de cortisol suprimen de forma prolongada la síntesis y secreción de CRH hipotalámica y ACTH hipofisaria, lo que induce una atrofia estructural y funcional severa de la corteza suprarrenal contralateral. Al extirpar quirúrgicamente el adenoma hipersecretor, el paciente pasa bruscamente de un estado de hipercortisolismo a una insuficiencia suprarrenal secundaria aguda potencialmente mortal (colapso circulatorio hemodinámico). Por ello, es mandatorio iniciar terapia sustitutiva con Hidrocortisona inmediatamente en el postoperatorio y mantenerla durante varios meses (generalmente 6 a 12 meses) hasta que el eje recupere su reactividad normal.",
        "recTag": "EUNACOM Diciembre 2020 (Q#51)"
      },
      {
        "stem": "¿Cuál de las siguientes combinaciones de pruebas de laboratorio es la más apropiada y aceptada por el consenso internacional como PRIMERA LÍNEA para pesquisar y confirmar la presencia de hipercortisolismo endógeno en un paciente con sospecha clínica de Síndrome de Cushing?",
        "opciones": [
          "A) Cortisol plasmático basal a las 08:00 h y ACTH plasmática basal",
          "B) Test de supresión rápida con dexametasona 1 mg nocturno (Nugent), Cortisol Libre Urinario en 24 horas y Cortisol salival nocturno",
          "C) Test de dexametasona 8 mg y Tomografía computarizada de glándulas suprarrenales",
          "D) Medición de metabolitos urinarios 17-hidroxicorticosteroides y 17-cetosteroides",
          "E) Test de estimulación con ACTH sintética (Synacthen) 250 mcg"
        ],
        "correcta": "B",
        "explicacion": "Las tres pruebas de primera línea validadas internacionalmente y con mayor sensibilidad y especificidad diagnóstica para demostrar hipercortisolismo patológico son: 1) Test de supresión con dexametasona 1 mg a las 23 h (Test de Nugent), considerando normal un cortisol plasmático < 1.8 mcg/dL a las 08 h; 2) Cortisol Libre Urinario (CLU) en orina de 24 horas; y 3) Cortisol salival nocturno (a las 23:00 h). El cortisol plasmático matinal aislado de las 08:00 h no tiene utilidad diagnóstica alguna debido a que se encuentra dentro del rango normal en la mayoría de los pacientes con Cushing, fallando en evaluar la pérdida del ritmo circadiano y la falta de autorregulación.",
        "recTag": "EUNACOM Diciembre 2018 (Q#27)"
      }
    ]
  },
  {
    "id": "endo-12",
    "classId": "endo-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Bloque 3 · Corteza y Médula Suprarrenal: Cushing, Addison, Conn y Feocromocitoma",
    "topicLabel": "7.12",
    "title": "Insuficiencia Suprarrenal Crónica: Primaria (Addison) versus Secundaria",
    "perfilCode": "1.04.1.006",
    "dx": "Cortisol plasmático matinal (< 3 mcg/dL confirma; 3-15 requiere test de ACTH/Synacthen). ACTH elevada confirma primaria (Addison); ACTH baja orienta a secundaria",
    "tx": "Reemplazo con Hidrocortisona (15-25 mg/día en 2-3 tomas) + Fludrocortisona (0.05-0.1 mg/día SOLO en primaria/Addison). Educar ajuste por estrés",
    "seg": "Monitoreo clínico (peso, PA de pie/sentado, energía), electrolitos plasmáticos y renina plasmática. NUNCA guiar dosis con cortisol plasmático",
    "ges": "No GES directo. Garantía en Ley Ricarte Soto para bombas o fármacos especializados si aplica, derivación prioritaria",
    "reconstrucciones": [
      "EUNACOM Diciembre 2021 (Q#24)",
      "EUNACOM Diciembre 2019 (Q#35)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Diagnóstico Diferencial: Insuficiencia Suprarrenal Primaria vs Secundaria",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha Clínica de Insuficiencia Suprarrenal Crónica",
        "s": "Astenia progresiva, baja de peso, náuseas, mareo postural, hipotensión arterial",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Cortisol Matinal 08:00 h + ACTH Plasmática",
        "al": "Bioquímica",
        "left": {
          "t": "Cortisol < 3 mcg/dL (o sin ascenso con Synacthen)",
          "s": "Insuficiencia Suprarrenal Confirmada · Evaluar ACTH para tipificar",
          "type": "acc"
        },
        "right": {
          "t": "Cortisol 3 a 15 mcg/dL",
          "s": "Rango Indeterminado · Requiere Test de ACTH sintética (Synacthen 250 mcg)",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Cuál es el Nivel de ACTH Plasmática?",
        "al": "Tipificar Eje",
        "left": {
          "t": "ACTH Alta (> 60-100 pg/mL) · Primaria (Addison)",
          "s": "Hiperpigmentación cutánea · Hiperkalemia + Hiponatremia · Dar Hidrocortisona + Fludrocortisona",
          "type": "crit"
        },
        "right": {
          "t": "ACTH Baja o Normal · Secundaria / Terciaria",
          "s": "Piel pálida · Aldosterona intacta (sin hiperkalemia) · Solo Hidrocortisona (NO dar Fludrocortisona)",
          "type": "acc"
        }
      }
    ],
    "contexto": "La insuficiencia suprarrenal crónica es una afección potencialmente letal que resulta de la incapacidad de la corteza suprarrenal para satisfacer los requerimientos fisiológicos de glucocorticoides, con o sin déficit concurrente de mineralocorticoides. EUNACOM evalúa de manera reiterada la distinción clínica y bioquímica entre la Insuficiencia Suprarrenal Primaria (Enfermedad de Addison, afección intrínseca de la corteza suprarrenal) y la Secundaria/Terciaria (deficiencia de ACTH por patología hipofisaria o por supresión iatrogénica del eje tras uso crónico de corticoides exógenos).",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Diagnóstico Diferencial Clínico",
        "paragraphs": [
          "Insuficiencia Suprarrenal Primaria (Enfermedad de Addison): Se debe a la destrucción o disfunción de más del 90% de ambas cortezas suprarrenales. En Chile y países desarrollados, el 70-80% es de causa autoinmune (adrenalitis autoinmune aislada o en síndromes poliglandulares autoinmunes tipo 1 y 2). La tuberculosis suprarrenal sigue siendo una etiología infecciosa relevante, además de metástasis bilaterales (mama, pulmón, melanoma) o hemorragia adrenal.",
          "Insuficiencia Suprarrenal Secundaria y Terciaria: Se origina por déficit de secreción hipofisaria de ACTH (tumores selares, apoplejía, radioterapia) o de CRH hipotalámica. La causa más prevalente en la comunidad es el cese brusco de una terapia prolongada con glucocorticoides exógenos.",
          "Diferencias Clínicas Críticas EUNACOM: 1) Piel: En Addison hay HIPERPIGMENTACIÓN cutáneo-mucosa (pliegues palmares, cicatrices recientes, mucosa yugal, pezones) debido a que el exceso de POMC/ACTH estimula los receptores de melanocortina-1 en melanocitos; en la secundaria la piel es característicamente pálida ('alabastrina'); 2) Eje Mineralocorticoide: En Addison hay pérdida total de Aldosterona, produciendo HIPERKALEMIA, hiponatremia y avidez por la sal; en la secundaria, el eje renina-angiotensina-aldosterona permanece intacto regulado por la volemia y el potasio, por lo que NO presentan hiperkalemia."
        ]
      },
      {
        "subhead": "2. Confirmación Bioquímica: Cortisol y Test de Synacthen",
        "paragraphs": [
          "Cortisol Plasmático Matinal (08:00 h): Un valor < 3 mcg/dL (< 80 nmol/L) en presencia de clínica compatible es virtualmente diagnóstico de insuficiencia suprarrenal. Un valor > 15-18 mcg/dL descarta la enfermedad con gran certeza. Valores intermedios (entre 3 y 15 mcg/dL) obligan a una prueba de estimulación dinámica.",
          "Test de Estimulación con ACTH sintética (Synacthen 250 mcg EV/IM): Es el patrón de referencia. Se inyectan 250 mcg de cosintropina y se mide cortisol plasmático a los 30 y 60 minutos. Una respuesta normal fisiológica exige un pico de cortisol plasmático ≥ 18 mcg/dL (500 nmol/L). La falta de ascenso (< 18 mcg/dL) confirma insuficiencia corticosuprarrenal.",
          "Medición Concomitante de ACTH Plasmática: Determina el nivel del defecto: ACTH marcadamente elevada (> 60 a 100 pg/mL) confirma Enfermedad de Addison (primaria); ACTH baja o inapropiadamente normal confirma insuficiencia central (secundaria o terciaria)."
        ]
      },
      {
        "subhead": "3. Terapia Sustitutiva Crónica y Educación para Emergencias",
        "paragraphs": [
          "Terapia Glucocorticoide: Hidrocortisona oral a dosis fisiológica de 15 a 25 mg/día repartidos en 2 o 3 tomas matinal y vespertina (ejemplo: 10 mg a las 08:00 h, 5 mg a las 14:00 h y 2.5 mg a las 18:00 h) para simular la curva circadiana fisiológica. Alternativa: Prednisona 3.75 a 5 mg/día en toma matinal única.",
          "Terapia Mineralocorticoide (EXCLUSIVA DE ADDISON): Fludrocortisona oral a dosis de 0.05 a 0.1 mg (50-100 mcg) al día en toma matinal única. Permite normalizar la volemia, regular la PA postural y corregir la hiperkalemia. En la insuficiencia suprarrenal secundaria NO SE INDICA Fludrocortisona porque la aldosterona endógena funciona normalmente.",
          "Educación del Paciente (Regla de la Duplicación/Triplicación): Ante cuadros febriles, cirugías menores o infecciones agudas, el paciente debe duplicar o triplicar temporalmente la dosis de hidrocortisona oral. Si presenta vómitos, intolerancia oral o diarrea profusa, debe inyectarse inmediatamente 100 mg de hidrocortisona IM o consultar de urgencia para rescate endovenoso."
        ]
      }
    ],
    "table": {
      "title": "Comparativa entre Insuficiencia Suprarrenal Primaria (Addison) y Secundaria",
      "headers": [
        "Característica / Parámetro",
        "Primaria (Enfermedad de Addison)",
        "Secundaria / Terciaria"
      ],
      "rows": [
        [
          "Nivel de la Lesión",
          "Corteza suprarrenal bilateral (> 90% destruida)",
          "Hipófisis (déficit ACTH) o Hipotálamo (déficit CRH)"
        ],
        [
          "Etiología más Frecuente",
          "Adrenalitis autoinmune (75-80%), TBC, metástasis",
          "Retiro brusco de corticoides, adenoma hipofisario"
        ],
        [
          "Pigmentación Cutánea",
          "Hiperpigmentación en pliegues y mucosas (ACTH alta)",
          "Piel pálida / despigmentada ('tono alabastrino')"
        ],
        [
          "Potasio Plasmático",
          "Hiperkalemia frecuente (> 5.0 mEq/L) por hipoaldosteronismo",
          "Normal (la aldosterona está preservada por el SRAA)"
        ],
        [
          "Sodio Plasmático",
          "Hiponatremia hipovolémica con pérdida renal de sal",
          "Hiponatremia dilucional (por aumento inapropiado de ADH)"
        ],
        [
          "ACTH Plasmática",
          "Francamente ELEVADA (> 100 pg/mL)",
          "Disminuida o inapropiadamente 'normal'"
        ],
        [
          "Reemplazo Mineralocorticoide",
          "Fludrocortisona OBLIGATORIA (0.05-0.1 mg/día)",
          "NO REQUERIDA (la aldosterona endógena funciona)"
        ]
      ]
    },
    "vignette": "Una mujer de 33 años consulta por astenia progresiva de 6 meses de evolución, mareos al ponerse de pie, anorexia, pérdida de 7 kg de peso y preferencia marcada por ingerir alimentos muy salados. Al examen físico se aprecia adelgazada, con PA 90/60 mmHg que desciende a 75/50 mmHg al ponerse de pie (ortostatismo positivo), FC 88 lpm. Llama la atención una coloración bronceada oscura y homogénea en zonas no expuestas al sol, destacando hiperpigmentación marcada en pliegues palmares, cicatriz de cesárea antigua y máculas negruzcas en la mucosa oral interna. Sus exámenes de laboratorio revelan: Sodio 128 mEq/L, Potasio 5.6 mEq/L, Glicemia 68 mg/dL y Cortisol matinal de 1.8 mcg/dL.",
    "explicacion": "El cuadro clínico y electrolítico es patognomónico de una Insuficiencia Suprarrenal Primaria (Enfermedad de Addison). La presencia conjunta de astenia crónica, hipotensión ortostática, avidez por la sal, hiperpigmentación cutáneo-mucosa característica (estimulación del receptor MC1R por el exceso de ACTH) y la combinación clásica de hiponatremia con hiperkalemia (por déficit de aldosterona) orientan con certeza a una destrucción primaria de la corteza adrenal. El cortisol < 3 mcg/dL confirma la insuficiencia. El manejo crónico definitivo requiere suplementación combinada obligatoria de glucocorticoides (hidrocortisona) y mineralocorticoides (fludrocortisona).",
    "keyPoints": [
      "La causa más frecuente de Enfermedad de Addison en adultos es la Adrenalitis Autoinmune (aislada o asociada a otros trastornos autoinmunes).",
      "La HIPERPIGMENTACIÓN de piel y mucosas es patognomónica de la insuficiencia suprarrenal primaria debido al incremento masivo de ACTH.",
      "La presencia de HIPERKALEMIA orienta con fuerza a insuficiencia primaria (Addison) por pérdida de aldosterona; en la secundaria el potasio es normal.",
      "Un cortisol matinal (08:00 h) < 3 mcg/dL es diagnóstico de insuficiencia; si está entre 3 y 15 mcg/dL se confirma con el Test de ACTH (Synacthen 250 mcg).",
      "La respuesta normal al Synacthen es un ascenso del cortisol plasmático a un valor pico ≥ 18 mcg/dL a los 30 o 60 minutos.",
      "El tratamiento de la Enfermedad de Addison requiere OBLIGATORIAMENTE dos fármacos: Hidrocortisona (glucocorticoide) + Fludrocortisona (mineralocorticoide).",
      "En la insuficiencia secundaria NUNCA se administra fludrocortisona porque la secreción de aldosterona está conservada.",
      "Los pacientes deben ser educados para duplicar o triplicar la dosis de hidrocortisona ante estrés agudo (fiebre, infecciones o cirugías menores)."
    ],
    "questions": [
      {
        "stem": "Un hombre de 42 años acude a la consulta médica por debilidad marcada, náuseas recurrentes, baja de 6 kg de peso e hipotensión arterial. Al examen físico destaca hiperpigmentación marcada en surcos de las manos, codos y encías. Sus exámenes demuestran Na+ 129 mEq/L, K+ 5.8 mEq/L y glicemia de 70 mg/dL. El cortisol basal a las 08:00 h resulta en 2.0 mcg/dL con ACTH plasmática de 180 pg/mL (VN < 50). ¿Cuál es el tratamiento sustitutivo crónico de elección que debe prescribirse?",
        "opciones": [
          "A) Hidrocortisona oral en monoterapia",
          "B) Prednisona oral asociada a espironolactona",
          "C) Hidrocortisona oral asociada obligatoriamente a Fludrocortisona oral",
          "D) Dexametasona oral en dosis nocturna única",
          "E) Fludrocortisona oral en monoterapia sin glucocorticoides"
        ],
        "correcta": "C",
        "explicacion": "El paciente presenta una Insuficiencia Suprarrenal Primaria (Enfermedad de Addison), confirmada por el cortisol < 3 mcg/dL, ACTH marcadamente elevada, hiperpigmentación cutáneo-mucosa y el trastorno hidroelectrolítico con hiponatremia e hiperkalemia severa secundario a déficit concomitante de mineralocorticoides. Al estar destruida la totalidad de la corteza suprarrenal, el paciente carece tanto de cortisol como de aldosterona. Por lo tanto, el esquema terapéutico sustitutivo crónico indispensable de por vida exige la combinación de un glucocorticoide (Hidrocortisona 15-25 mg/día repartidos) y un mineralocorticoide (Fludrocortisona 0.05-0.1 mg/día en toma matinal única).",
        "recTag": "EUNACOM Diciembre 2021 (Q#24)"
      },
      {
        "stem": "Una mujer de 58 años con antecedente de artritis reumatoide en tratamiento crónico con prednisona 15 mg diarios durante 2 años decide suspender bruscamente el fármaco por cuenta propia. A los 5 días consulta en el policlínico por debilidad extrema, náuseas, astenia e hipotensión postural (PA 95/60 mmHg). Se constata piel pálida sin hiperpigmentación. El laboratorio muestra Na+ 131 mEq/L, K+ 4.2 mEq/L, ACTH de 4 pg/mL y cortisol de 2.1 mcg/dL. ¿Cuál es el mecanismo fisiopatológico principal que explica este cuadro?",
        "opciones": [
          "A) Destrucción autoinmune aguda de la glándula suprarrenal",
          "B) Supresión exógena prolongada del eje hipotálamo-hipófisis con atrofia corticosuprarrenal secundaria y déficit exclusivo de glucocorticoides con aldosterona preservada",
          "C) Falla mineralocorticoide primaria con pérdida renal masiva de potasio",
          "D) Secreción ectópica de péptidos suresores adrenales",
          "E) Síndrome de lisis corticosuprarrenal por nefropatía intersticial"
        ],
        "correcta": "B",
        "explicacion": "La suspensión brusca de una corticoterapia sistémica administrada a dosis suprafisiológicas por más de 3 a 4 semanas es la causa más común de Insuficiencia Suprarrenal Secundaria/Terciaria. El glucocorticoide exógeno inhibe de forma persistente la síntesis de CRH hipotalámica y ACTH hipofisaria (demostrada por la ACTH suprimida de 4 pg/mL), conduciendo a la atrofia por desuso de la zona fascicular y reticular de la corteza suprarrenal. Dado que la zona glomerulosa productora de aldosterona no depende de ACTH sino del sistema renina-angiotensina, la aldosterona se encuentra conservada, razón por la cual los niveles de potasio son rigurosamente normales (K+ 4.2 mEq/L) y no se produce hiperpigmentación.",
        "recTag": "EUNACOM Diciembre 2019 (Q#35)"
      }
    ]
  },
  {
    "id": "endo-13",
    "classId": "endo-13",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Bloque 3 · Corteza y Médula Suprarrenal: Cushing, Addison, Conn y Feocromocitoma",
    "topicLabel": "7.13",
    "title": "Crisis Suprarrenal Aguda y Shock Refractario",
    "perfilCode": "1.04.1.006",
    "dx": "Sospecha clínica inmediata ante shock hipotensivo refractario a fluidos y aminas vasoactivas en paciente con antecedente adrenal o corticoterapia previa",
    "tx": "Hidrocortisona 100 mg bolo EV inmediato + Reposición agresiva con Suero Fisiológico al 0.9% y Suero Glucosado al 5-10% EV. NUNCA diferir por exámenes",
    "seg": "Hospitalización en UCI/UTI, monitoreo hemodinámico continuo invasivo, corrección de hipoglicemia e hiperkalemia, y búsqueda de foco séptico desencadenante",
    "ges": "Manejo prioritario en UPC bajo Ley de Urgencia / Condición con riesgo de muerte inminente",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#03)",
      "EUNACOM Julio 2021 (Q#42)",
      "EUNACOM Diciembre 2020 (Q#17)",
      "EUNACOM Diciembre 2017 (Q#20)"
    ],
    "frecuencia": "MUY ALTA",
    "svg": null,
    "algoTitle": "Protocolo de Rescate en Crisis Suprarrenal Aguda EUNACOM",
    "contexto": "La crisis suprarrenal aguda es una catástrofe endocrinológica potencialmente mortal provocada por la falta absoluta o relativa de glucocorticoides circulantes en situaciones de estrés fisiológico severo. Su forma de presentación primordial es el shock circulatorio distributivo hipotensivo refractario a la reanimación habitual con volumen y catecolaminas. En pacientes con insuficiencia suprarrenal crónica previa o en aquellos bajo tratamiento prolongado con corticoides exógenos, un cuadro intercurrente (sepsis, neumonía, trauma, intervención quirúrgica o gastroenteritis aguda) puede precipitar el colapso vascular letal en cuestión de horas. EUNACOM evalúa con la máxima rigurosidad el inicio terapéutico inmediato sin esperar resultados de exámenes y el uso de Hidrocortisona EV en dosis de estrés.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología del Colapso Vascular y Factores Gatillantes",
        "paragraphs": [
          "El cortisol es un mediador permisivo esencial para el mantenimiento del tono vascular y la contractilidad cardíaca normales, regulando la expresión y sensibilidad de los receptores alfa-1 adrenérgicos en las células musculares lisas de las arteriolas y modulando la permeabilidad capilar endotelial.",
          "En ausencia de cortisol, se produce una vasodilatación sistémica masiva, pérdida de tono arteriolar con colapso de las resistencias vasculares sistémicas y shock hipovolémico-distributivo que no responde a noradrenalina ni fenilefrina.",
          "Factores Desencadenantes Principales en EUNACOM: 1) Infección bacteriana o viral intercurrente (causa número 1); 2) Abandono súbito de terapia con corticoides o falta de aumento de dosis de hidrocortisona ante estrés; 3) Cirugía mayor o traumatismo cerrado/abierto; 4) Gastroenteritis con vómitos que impiden la absorción oral del fármaco; 5) Hemorragia suprarrenal bilateral masiva (Síndrome de Waterhouse-Friderichsen en meningococcemia fulminante o trombosis suprarrenal por síndrome antifosfolípido)."
        ]
      },
      {
        "subhead": "2. Presentación Clínica de la Emergencia",
        "paragraphs": [
          "Tríada Clásica de Presentación: Hipotensión arterial severa o shock desproporcionado a la causa aparente + Compromiso sensorial (letargia, confusión mental, estupor o coma) + Síntomas gastrointestinales severos (dolor abdominal agudo intenso en hemiabdomen superior que simula abdomen agudo quirúrgico, asociado a náuseas y vómitos incoercibles).",
          "Otros Hallazgos Clave: Fiebre alta (por la infección causal o desregulación del hipotálamo), mialgias generalizadas intensas, signos de deshidratación severa con pliegue cutáneo persistente y mucosas secas.",
          "En pacientes con Addison previo, se pesquisará la hiperpigmentación cutánea en pliegues y encías; sin embargo, en la crisis secundaria o post-corticoides la piel es pálida y los síntomas aparecen de forma fulminante."
        ]
      },
      {
        "subhead": "3. Laboratorio Crítico: Trastornos Hidroelectrolíticos y Metabólicos",
        "paragraphs": [
          "Alteraciones Bioquímicas Típicas: 1) Hiponatremia severa (< 130 mEq/L); 2) Hiperkalemia amenazante (> 5.5 a 6.5 mEq/L, exclusiva de la forma primaria con riesgo de paro cardíaco o fibrilación ventricular); 3) Hipoglicemia marcada (< 50-60 mg/dL) secundaria a la pérdida del efecto gluconeogénico hepático de los glucocorticoides; 4) Acidosis metabólica con brecha aniónica normal o levemente aumentada; 5) Azoemia prerrenal (elevación de nitrógeno ureico y creatinina) por hemoconcentración e hipoperfusión renal extrema.",
          "Conducta ante el Diagnóstico: Extraer una muestra rápida de sangre venosa para cortisol, ACTH y electrolitos, pero NUNCA demorar la administración del tratamiento farmacológico a la espera del laboratorio. El diagnóstico de crisis suprarrenal es eminentemente clínico y su retraso conduce a la muerte."
        ]
      },
      {
        "subhead": "4. Tratamiento Inmediato: Las 3 Medidas de Rescate Vital",
        "paragraphs": [
          "Medida 1 - Glucocorticoide Endovenoso de Acción Rápida: HIDROCORTISONA 100 mg en bolo endovenoso directo de inmediato, seguido de 100 a 200 mg/día en infusión continua o 50-100 mg EV cada 6 horas. La hidrocortisona es el fármaco de elección indiscutido porque a dosis altas ejerce un potente efecto mineralocorticoide intrínseco, haciendo innecesaria la administración de fludrocortisona en la fase aguda.",
          "¿Qué hacer si no hay Hidrocortisona?: Administrar Dexametasona 4 a 6 mg EV en bolo directo. Ventaja: la dexametasona no interfiere analíticamente con la medición posterior de cortisol plasmático en sangre si se desea realizar un test de estimulación con ACTH posterior.",
          "Medida 2 - Reanimación Agresiva con Cristaloides: Infusión rápida de Suero Fisiológico al 0.9% (1 a 2 litros en las primeras dos horas) para restaurar la volemia efectiva y revertir el colapso circulatorio.",
          "Medida 3 - Corrección Rápida de la Hipoglicemia: Administrar suero glucosado al 10% o 5% en paralelo con los cristaloides salinos para normalizar la glicemia y reponer las reservas hepáticas de glucógeno."
        ]
      },
      {
        "subhead": "5. Estabilización Posterior y Prevención de Recurrencias",
        "paragraphs": [
          "Una vez estabilizado hemodinámicamente el paciente (generalmente a las 24-48 horas), se reduce gradualmente la dosis de hidrocortisona endovenosa a 50 mg cada 8 horas, luego cada 12 horas, hasta alcanzar la dosis de mantenimiento oral habitual (20 a 30 mg/día).",
          "En pacientes con Enfermedad de Addison, se reinstaura la Fludrocortisona oral (0.05-0.1 mg/día) una vez que la dosis de hidrocortisona desciende por debajo de 50 mg/día (umbral por debajo del cual ya no aporta suficiente actividad mineralocorticoide).",
          "Identificación Obligatoria del Gatillante: Tomar hemocultivos y urocultivo, radiografía de tórax y prescribir antibioterapia empírica amplia ante cualquier sospecha de foco infeccioso intercurrente."
        ]
      }
    ],
    "table": {
      "title": "Protocolo de Emergencia en Crisis Suprarrenal Aguda EUNACOM",
      "headers": [
        "Prioridad / Tiempo",
        "Intervención Terapéutica Inmediata",
        "Fármaco y Dosis Recomendada",
        "Objetivo Fisiológico Crítico"
      ],
      "rows": [
        [
          "Minuto 0 (Inmediato)",
          "Bolo EV de Glucocorticoide de rescate",
          "Hidrocortisona 100 mg EV directo",
          "Restaurar reactividad vascular a catecolaminas"
        ],
        [
          "Minuto 5 - 60",
          "Expansión agresiva de volumen intravascular",
          "Suero Fisiológico 0.9% 1000 mL en la 1ra hora",
          "Corregir shock distributivo e hiponatremia"
        ],
        [
          "Minuto 5 - 60",
          "Reversión de la hipoglicemia aguda",
          "Suero Glucosado al 10% 250-500 mL EV",
          "Normalizar glicemia capilar > 100 mg/dL"
        ],
        [
          "Mantenimiento (24-48h)",
          "Glucocorticoide parenteral continuo",
          "Hidrocortisona 50 mg EV c/6h o 200 mg/24h BIC",
          "Mantener soporte en fase de estrés metabólico"
        ],
        [
          "Transición Estable",
          "Desescalamiento a vía oral",
          "Hidrocortisona oral + Fludrocortisona (si Addison)",
          "Retorno a dosis fisiológica de mantención"
        ]
      ]
    },
    "severityTable": {
      "title": "Diferenciación entre Crisis Suprarrenal y Otras Causas de Shock",
      "headers": [
        "Tipo de Shock",
        "Gasto Cardíaco / RVS",
        "Respuesta a Noradrenalina",
        "Pistas Diagnósticas / Laboratorio Clave"
      ],
      "rows": [
        [
          "Crisis Suprarrenal Aguda",
          "RVS colapsadas, débiles a catecolaminas",
          "Refractario hasta administrar corticoide",
          "Hiponatremia + Hiperkalemia + Hipoglicemia + Corticoide previo"
        ],
        [
          "Shock Séptico Puro",
          "Gasto elevado, RVS bajas",
          "Respuesta transitoria favorable",
          "Foco séptico evidente, leucocitosis, lactato elevado"
        ],
        [
          "Shock Hipovolémico Hemorrágico",
          "Gasto bajo, RVS altas compensatorias",
          "Responde a reposición de sangre / volumen",
          "Anemia aguda, antecedente de trauma o hemorragia"
        ],
        [
          "Shock Cardiogénico",
          "Gasto muy bajo, RVS elevadas",
          "Empeora con fluidos, requiere inotrópicos",
          "Ingurgitación yugular, edema pulmonar, ECG con infarto"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Manejo Escalonado de Trastornos Hidroelectrolíticos en la Crisis",
      "headers": [
        "Trastorno Específico",
        "Mecanismo Causal",
        "Manejo Terapéutico Específico",
        "Peligro Potencial"
      ],
      "rows": [
        [
          "Hipotensión / Shock",
          "Pérdida de tono vascular arteriolar por falta de cortisol",
          "Hidrocortisona EV + 2 a 3 L Suero Salino 0.9%",
          "Colapso cardiopulmonar refractario letal"
        ],
        [
          "Hipoglicemia (< 60 mg/dL)",
          "Falta de gluconeogénesis hepática inducida por cortisol",
          "Glucosa hipertónica al 30% en bolo + SG 10%",
          "Convulsiones hipoglicémicas y daño cerebral"
        ],
        [
          "Hiperkalemia (> 5.5 mEq/L)",
          "Déficit agudo de aldosterona en Addison",
          "Hidrocortisona (efecto mineralocorticoide) + Suero salino",
          "Arritmias ventriculares malignas / paro cardíaco"
        ],
        [
          "Acidosis Metabólica",
          "Hipoperfusión tisular y retención renal de protones",
          "Reanimación con volumen y soporte ventilatorio",
          "Disfunción miocárdica agravada"
        ]
      ]
    },
    "vignette": "Un hombre de 39 años con antecedente de Enfermedad de Addison diagnosticada hace 2 años en tratamiento con hidrocortisona 20 mg/día y fludrocortisona 0.1 mg/día es traído al servicio de urgencias en ambulancia por compromiso severo de conciencia, letargia y fiebre de 38.8°C. Su cónyuge refiere que hace 48 horas inició un cuadro de vómitos reiterados y diarrea acuosa profusa, por lo que no toleró la ingesta de sus comprimidos habituales. Al examen físico se encuentra soporoso profundo, con piel deshidratada y fría, PA 70/40 mmHg inaudible al pulso radial, FC 130 lpm filiforme, saturación de oxígeno 94% ambiental. Presenta dolor a la palpación difusa de hemiabdomen superior sin peritonismo franco e hiperpigmentación intensa en manos y cara interna de mejillas. El hemoglucotest marca 48 mg/dL. El médico residente sospecha una crisis suprarrenal aguda.",
    "explicacion": "El paciente se encuentra cursando una Crisis Suprarrenal Aguda precipitada por una gastroenteritis aguda con intolerancia oral y suspensión involuntaria de su terapia hormonal sustitutiva. El cuadro se manifiesta de forma clásica con shock refractario, hipotensión extrema, hipoglicemia severa (48 mg/dL), dolor abdominal pseudoperitoneal y compromiso sensorial. La conducta médica inmediata, prioritaria y salvadora de vidas consiste en administrar de inmediato un bolo endovenoso de Hidrocortisona 100 mg directo, acompañado de reanimación agresiva con Suero Fisiológico al 0.9% y Suero Glucosado al 10% para expandir la volemia y corregir la hipoglicemia. NUNCA se debe esperar la confirmación de exámenes de laboratorio para iniciar este tratamiento.",
    "keyPoints": [
      "La Crisis Suprarrenal Aguda es una emergencia médica extrema que debuta como shock hipotensivo distributivo refractario a fluidos y aminas.",
      "La causa desencadenante más común es un proceso infeccioso intercurrente o gastroenteritis con suspensión involuntaria de los corticoides.",
      "La tríada clínica cardinal es: Shock/hipotensión arterial severa + Compromiso sensorial + Síntomas gastrointestinales (dolor abdominal agudo y vómitos).",
      "El laboratorio clásico revela la combinación crítica de: HIPONATREMIA + HIPERKALEMIA (en Addison) + HIPOGLICEMIA SEVERA.",
      "REGLA DE ORO TERAPÉUTICA: NUNCA demorar el tratamiento a la espera de exámenes; la sospecha clínica obliga al inicio inmediato de las medidas de rescate.",
      "Fármaco de elección inmediata: Hidrocortisona 100 mg en bolo endovenoso directo, seguido de 50-100 mg EV cada 6 horas.",
      "Reanimación hídrica agresiva: Suero fisiológico al 0.9% (1-2 litros rápidos) asociado a suero glucosado para corregir la hipoglicemia.",
      "A dosis elevadas (> 100 mg/día), la hidrocortisona posee suficiente efecto mineralocorticoide, por lo que NO se requiere administrar fludrocortisona en la fase aguda de shock."
    ],
    "questions": [
      {
        "stem": "Un paciente de 45 años con antecedente de Enfermedad de Addison en tratamiento con hidrocortisona y fludrocortisona presenta neumonía bacteriana adquirida en la comunidad. Ingresa a la urgencia estuporoso, pálido, sudoroso, con PA 65/40 mmHg y FC 128 lpm. El hemoglucotest marca 52 mg/dL. Tras recibir 2000 mL de suero fisiológico en 45 minutos, la presión arterial se mantiene en 70/45 mmHg. ¿Cuál es la medida farmacológica inmediata de máxima prioridad para revertir este estado hemodinámico?",
        "opciones": [
          "A) Iniciar infusión de dopamina a dosis inotrópica",
          "B) Iniciar infusión continua de noradrenalina a dosis altas",
          "C) Administrar Hidrocortisona 100 mg en bolo endovenoso directo",
          "D) Administrar fludrocortisona 1 mg por sonda nasogástrica",
          "E) Realizar pericardiocentesis de urgencia"
        ],
        "correcta": "C",
        "explicacion": "El paciente presenta una Crisis Suprarrenal Aguda con shock refractario a volumen desencadenado por una sepsis de foco respiratorio. En ausencia de concentraciones adecuadas de cortisol, las arteriolas pierden la reactividad normal a las catecolaminas endógenas y exógenas debido al downregulation funcional de los receptores adrenérgicos vasculares, lo que perpetúa la vasodilatación sistémica letal. La administración inmediata de Hidrocortisona 100 mg en bolo endovenoso restaura el tono vascular, restablece la permeabilidad capilar y permite recuperar la presión arterial. Administrar noradrenalina sin corticoides en este contexto es completamente ineficaz.",
        "recTag": "EUNACOM Diciembre 2022 (Q#03)"
      },
      {
        "stem": "Un lactante de 2 semanas de vida es traído a urgencias en estado de shock severo, deshidratación grave, letargia y vómitos explosivos. El ionograma plasmático urgente revela Na+ 118 mEq/L y K+ 7.8 mEq/L con acidosis metabólica severa. Al examen físico destaca hiperpigmentación de los genitales externos y escroto rugoso hiperpigmentado. ¿Cuál es la sospecha diagnóstica prioritaria y el tratamiento médico urgente que debe instaurarse sin demora?",
        "opciones": [
          "A) Estenosis hipertrófica del píloro; resolución quirúrgica de urgencia",
          "B) Hiperplasia suprarrenal congénita perdedora de sal (déficit de 21-hidroxilasa); rescate urgente con Hidrocortisona endovenosa y solución salina fisiológica",
          "C) Sepsis por Pseudomonas aeruginosa; ceftazidima en bolo",
          "D) Insuficiencia renal aguda anúrica; hemodiálisis de emergencia",
          "E) Síndrome urémico hemolítico; transfusión de glóbulos rojos lavados"
        ],
        "correcta": "B",
        "explicacion": "El cuadro clínico de colapso hemodinámico a las 2 semanas de vida con crisis de pérdida salina severa (hiponatremia extrema Na+ 118 y severa hiperkalemia K+ 7.8) e hiperpigmentación genital es la presentación clásica y potencialmente fatal de la Hiperplasia Suprarrenal Congénita en su forma clásica perdedora de sal por déficit de la enzima 21-hidroxilasa. La incapacidad para sintetizar cortisol y aldosterona genera una crisis suprarrenal neonatal aguda. El tratamiento urgente e inaplazable consiste en reanimación con suero fisiológico isotónico para expandir la volemia y administración precoz de Hidrocortisona endovenosa.",
        "recTag": "EUNACOM Julio 2021 (Q#42)"
      },
      {
        "stem": "En un servicio de urgencias ingresa un paciente con alta sospecha de crisis suprarrenal aguda en shock hipotensivo. El médico de turno solicita una muestra de sangre para cortisol y electrolitos. ¿Cuál es la conducta médica correcta respecto al inicio de la Hidrocortisona endovenosa?",
        "opciones": [
          "A) Esperar el resultado analítico del cortisol plasmático en sangre para confirmar el diagnóstico antes de inyectar el corticoide",
          "B) Extraer la muestra de sangre e iniciar INMEDIATAMENTE el bolo de Hidrocortisona 100 mg EV sin esperar el resultado del laboratorio",
          "C) Esperar la realización de una ecografía suprarrenal previa para descartar hemorragia adrenal",
          "D) Iniciar antibióticos de amplio espectro y diferir los corticoides hasta las 12 horas de evolución",
          "E) Administrar solución salina exclusiva y esperar 6 horas de respuesta hemodinámica"
        ],
        "correcta": "B",
        "explicacion": "Una de las reglas de oro de mayor relevancia y evaluación en el examen EUNACOM ante la sospecha fundada de Crisis Suprarrenal Aguda es que el tratamiento de rescate es una URGENCIA VITAL INAPLAZABLE. Bajo ninguna circunstancia se debe retrasar o posponer la administración de la Hidrocortisona endovenosa a la espera de los resultados de laboratorio o pruebas diagnósticas complementarias. La mortalidad de esta condición en ausencia de tratamiento glucocorticoide inmediato es altísima debido a la falla circulatoria refractaria. La conducta estándar es extraer la muestra sanguínea y administrar de inmediato el fármaco.",
        "recTag": "EUNACOM Diciembre 2020 (Q#17)"
      },
      {
        "stem": "¿Por qué razón farmacológica y fisiológica NO es necesario administrar Fludrocortisona (mineralocorticoide) durante la fase aguda de reanimación en una crisis suprarrenal manejada con Hidrocortisona a dosis altas (100 mg cada 6 a 8 horas)?",
        "opciones": [
          "A) Porque la fludrocortisona solo se absorbe por vía rectal",
          "B) Porque a dosis iguales o superiores a 50-100 mg/día, la hidrocortisona satura el receptor mineralocorticoide proporcionando una actividad mineralocorticoide plenamente suficiente",
          "C) Porque la aldosterona se encuentra siempre elevada en la crisis suprarrenal",
          "D) Porque la fludrocortisona empeora la hipoglicemia aguda",
          "E) Porque los mineralocorticoides están contraindicados si la presión arterial sistólica es menor a 90 mmHg"
        ],
        "correcta": "B",
        "explicacion": "La molécula de hidrocortisona posee afinidad intrínseca equivalente tanto por el receptor glucocorticoide como por el receptor mineralocorticoide. A dosis de sustitución fisiológica crónica (20 mg/día), la enzima 11beta-HSD2 inactiva el cortisol a cortisona en el riñón, requiriendo el aporte adicional de fludrocortisona en pacientes con Addison. Sin embargo, a dosis de estrés suprafisiológicas utilizadas en la crisis aguda (≥ 100 a 200 mg/día de hidrocortisona), la capacidad enzimática de la 11beta-HSD2 se satura masivamente por completo, permitiendo que el exceso de cortisol active con máxima potencia los receptores mineralocorticoides de los túbulos renales, ejerciendo una acción retenedora de sal y excretora de potasio idéntica a la aldosterona.",
        "recTag": "EUNACOM Diciembre 2017 (Q#20)"
      }
    ]
  },
  {
    "id": "endo-14",
    "classId": "endo-14",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Bloque 3 · Corteza y Médula Suprarrenal: Cushing, Addison, Conn y Feocromocitoma",
    "topicLabel": "7.14",
    "title": "Hiperaldosteronismo Primario (Síndrome de Conn) e HTA Secundaria",
    "perfilCode": "1.04.1.007",
    "dx": "Relación Aldosterona / Renina Plasmática (RAR > 20-30 con Aldosterona > 15 ng/dL) + Test confirmatorio (sobrecarga salina) + TC Suprarrenal",
    "tx": "Adenoma unilateral (Conn): Suprarrenalectomía laparoscópica unilateral curativa. Hiperplasia bilateral: Antagonistas del receptor mineralocorticoide (Espironolactona)",
    "seg": "Monitorización de presión arterial, kalemia y función renal. Monitoreo de ginecomastia con espironolactona (rotar a Eplerenona si efectos adversos)",
    "ges": "No GES directo. Garantías asociadas a Hipertensión Arterial Primaria (GES 21) hasta confirmación y resolución quirúrgica",
    "reconstrucciones": [
      "EUNACOM Diciembre 2021 (Q#10)",
      "EUNACOM Diciembre 2018 (Q#42)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Hiperaldosteronismo Primario (RAR)",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha de Hiperaldosteronismo Primario (HAP)",
        "s": "HTA resistente (≥ 3 fármacos) · HTA en jóvenes (< 35a) · HTA con Hipokalemia espontánea o por diuréticos",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Tamizaje: Relación Aldosterona / Actividad Renina (RAR)",
        "al": "Test de Entrada",
        "left": {
          "t": "RAR > 20 a 30 con Aldosterona > 15 ng/dL",
          "s": "Sospecha Positiva de HAP · Confirmar con test de sobrecarga salina oral/EV",
          "type": "acc"
        },
        "right": {
          "t": "RAR Normal (< 20) o Renina Alta",
          "s": "HAP Improbable · Considerar HTA renovascular o esencial",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Cuál es la Causa Anatómica (TC Suprarrenal / Muestreo Venoso)?",
        "al": "Etiología",
        "left": {
          "t": "Adenoma Unilateral (Síndrome de Conn, ~35%)",
          "s": "Tratamiento Curativo: Suprarrenalectomía Laparoscópica Unilateral",
          "type": "acc"
        },
        "right": {
          "t": "Hiperplasia Suprarrenal Bilateral (~65%)",
          "s": "Tratamiento Médico Obligatorio: Espironolactona (o Eplerenona si ginecomastia)",
          "type": "warn"
        }
      }
    ],
    "contexto": "El Hiperaldosteronismo Primario (HAP) es la causa endocrinológica más común de hipertensión arterial secundaria, estando presente en el 8 al 10% de todos los pacientes hipertensos y hasta en el 20% de los pacientes con hipertensión arterial resistente. Se caracteriza por la producción autónoma inapropiadamente elevada de aldosterona por la corteza suprarrenal, independiente de la regulación fisiológica por angiotensina II y no suprimible con sobrecarga de volumen sódico. EUNACOM evalúa con gran frecuencia sus criterios de sospecha, la interpretación de la Relación Aldosterona/Renina (RAR) y la distinción terapéutica entre el Adenoma de Conn (quirúrgico) y la Hiperplasia Bilateral (médico con espironolactona).",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Cuándo Sospechar HAP en APS",
        "paragraphs": [
          "La hiperproducción autónoma de aldosterona estimula constitutivamente el canal epitelial de sodio (ENaC) en las células principales del túbulo colector cortical renal, promoviendo reabsorción neta de sodio, expansión del volumen intravascular e hipertensión arterial, al mismo tiempo que fuerza la excreción urinaria de potasio e hidrogeniones por la luz tubular.",
          "El aumento de volumen y la presión de perfusión renal suprimen potentemente la secreción de renina por las células yuxtaglomerulares. Esto configura el sello bioquímico del HAP: ALDOSTERONA ELEVADA CON RENINA SUPRIMIDA.",
          "Poblaciones Clave para Tamizaje EUNACOM: 1) HTA resistente o refractaria (no controlada con 3 antihipertensivos a dosis plenas, incluyendo un diurético); 2) HTA asociada a hipokalemia espontánea o inducida por diuréticos tiazídicos a dosis bajas; 3) HTA de inicio temprano (< 35-40 años); 4) Incidentaloma suprarrenal asociado a hipertensión; 5) HTA asociada a apnea obstructiva del sueño o historia familiar de HTA precoz o accidente cerebrovascular antes de los 40 años."
        ]
      },
      {
        "subhead": "2. Tamizaje y Confirmación: El Valor de la RAR",
        "paragraphs": [
          "Prueba de Tamizaje de Elección: Relación Aldosterona Plasmática / Actividad de Renina Plasmática (RAR) o concentración de renina directa (ARR). Condiciones: corregir previamente la hipokalemia (la hipokalemia inhibe la secreción de aldosterona dando falsos negativos) y suspender antagonistas de aldosterona (espironolactona/eplerenona) al menos 4-6 semanas antes.",
          "Interpretación: Una RAR > 20 a 30 (ng/dL por ng/mL/h) con una concentración absoluta de aldosterona plasmática > 15 ng/dL es fuertemente indicativa de hiperaldosteronismo primario.",
          "Pruebas de Confirmación (Sobrecarga de Sal): Test de infusión salina endovenosa (2 litros de suero fisiológico en 4 horas) o sobrecarga oral de sal durante 3 días. En individuos sanos, la aldosterona plasmática se suprime a < 5-10 ng/dL; en el HAP la secreción autónoma no se suprime."
        ]
      },
      {
        "subhead": "3. Diferenciación Etiológica y Abordaje Terapéutico",
        "paragraphs": [
          "Etiologías Principales: 1) Hiperplasia Suprarrenal Bilateral (Idiopática, 60-65%): La alteración es bilateral difusa o nodular; 2) Adenoma Productor de Aldosterona (Síndrome de Conn, 30-35%): Tumoración benigna monoclonal unilateral única bien delimitada.",
          "Estudio de Localización: Tomografía Computarizada (TC) de corte fino de glándulas suprarrenales. Si el paciente es candidato a cirugía curativa, el Cateterismo de Venas Suprarrenales (Muestreo Venoso Adrenal) con gradiente de aldosterona/cortisol es el estándar de oro para confirmar la lateralización unilateral verdadera.",
          "Tratamiento según Causa: Si es Adenoma Unilateral (Conn), el tratamiento curativo de elección es la Suprarrenalectomía Laparoscópica Unilateral (normaliza la kalemia en el 100% y cura o mejora drásticamente la HTA). Si es Hiperplasia Bilateral o paciente no quirúrgico, el tratamiento de elección es MÉDICO INDEFINIDO con antagonistas del receptor mineralocorticoide: ESPIRONOLACTONA (25 a 100 mg/día). Si el paciente varón presenta ginecomastia o disfunción sexual dolorosa por acción antiandrogénica, se rota a Eplerenona (antagonista selectivo mineralocorticoide)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Hiperaldosteronismo Primario vs Secundario en EUNACOM",
      "headers": [
        "Parámetro / Criterio",
        "Hiperaldosteronismo Primario (Conn / Hiperplasia)",
        "Hiperaldosteronismo Secundario (Estenosis Renal / Reninoma)"
      ],
      "rows": [
        [
          "Mecanismo Central",
          "Producción autónoma suprarrenal independiente de renina",
          "Hipoperfusión renal que activa masivamente el eje SRAA"
        ],
        [
          "Renina Plasmática (PRA)",
          "SUPRIMIDA o indetectable (< 0.6 ng/mL/h)",
          "FRANCAMENTE ELEVADA (> 5 ng/mL/h)"
        ],
        [
          "Aldosterona Plasmática",
          "Elevada (> 15-20 ng/dL)",
          "Elevada (estimulada por angiotensina II)"
        ],
        [
          "Relación Aldosterona / Renina",
          "Muy Elevada (RAR > 20 a 30)",
          "Baja o Normal (RAR < 10)"
        ],
        [
          "Causas Típicas",
          "Adenoma de Conn (unilateral), Hiperplasia bilateral",
          "Estenosis arteria renal, coartación aórtica, insuficiencia cardíaca"
        ],
        [
          "Tratamiento Inicial",
          "Cirugía laparoscópica si Conn / Espironolactona",
          "Angioplastia con stent renal / Manejo de la cardiopatía"
        ]
      ]
    },
    "vignette": "Un hombre de 37 años sin antecedentes mórbidos previos consulta por cefalea occipital recurrente y calambres musculares en extremidades inferiores. Al control de signos vitales se pesquisa una presión arterial de 175/105 mmHg, confirmada en múltiples tomas seriadas. Se encuentra actualmente en tratamiento con enalapril 20 mg cada 12 horas, amlodipino 10 mg/día e hidroclorotiazida 25 mg/día sin lograr metas tensionales (hipertensión arterial resistente). En sus exámenes de laboratorio de rutina destaca: Creatinina 0.9 mg/dL, Sodio 143 mEq/L y Potasio de 2.8 mEq/L (hipokalemia moderada). Se realiza medición de aldosterona plasmática que resulta en 38 ng/dL con una actividad de renina plasmática suprimida de 0.4 ng/mL/h (RAR de 95). La TC de abdomen revela un nódulo suprarrenal izquierdo de 1.8 cm, homogéneo e hipodenso.",
    "explicacion": "El cuadro clínico corresponde clásicamente a un Hiperaldosteronismo Primario por Adenoma Suprarrenal Unilateral (Síndrome de Conn). La presencia de HTA resistente en un paciente joven asociada a hipokalemia espontánea severa constituye la sospecha paradigmática de hiperaldosteronismo. La confirmación bioquímica se demuestra con la Relación Aldosterona/Renina marcadamente elevada (RAR de 95, muy superior al umbral de 30) en presencia de aldosterona plasmática elevada y renina suprimida. La TC que demuestra un nódulo unilateral compatible con adenoma confirma el diagnóstico etiológico. El tratamiento definitivo curativo de elección es la Suprarrenalectomía laparoscópica unilateral izquierda.",
    "keyPoints": [
      "El Hiperaldosteronismo Primario es la causa endocrinológica más frecuente de hipertensión arterial secundaria (~10% de hipertensos).",
      "Debe sospecharse formalmente ante: HTA resistente (≥ 3 fármacos), HTA en jóvenes (< 35-40 años) o HTA asociada a hipokalemia.",
      "El sello bioquímico distintivo es: ALDOSTERONA ELEVADA CON RENINA PLASMÁTICA SUPRIMIDA.",
      "La prueba de tamizaje de primera elección es la Relación Aldosterona / Renina Plasmática (RAR > 20-30 con aldosterona > 15 ng/dL).",
      "La causa más frecuente es la Hiperplasia Suprarrenal Bilateral (60-65%), seguida del Adenoma Unilateral de Conn (30-35%).",
      "El Adenoma de Conn se trata de forma curativa mediante Suprarrenalectomía Laparoscópica Unilateral.",
      "La Hiperplasia Bilateral requiere tratamiento médico farmacológico de por vida con antagonistas de mineralocorticoides (Espironolactona).",
      "Si la espironolactona genera ginecomastia dolorosa o disfunción sexual por su efecto antiandrogénico en varones, el fármaco de recambio es la Eplerenona."
    ],
    "questions": [
      {
        "stem": "Un hombre de 34 años con diagnóstico reciente de hipertensión arterial severa (PA 170/110 mmHg) presenta debilidad muscular episódica y calambres. En los exámenes de laboratorio se constata hipokalemia de 2.9 mEq/L sin uso previo de diuréticos. Se sospecha hiperaldosteronismo primario. ¿Cuál es el examen de tamizaje de primera línea que debe solicitarse para confirmar la sospecha diagnóstica?",
        "opciones": [
          "A) Determinación de cortisol libre urinario en 24 horas",
          "B) Medición simultánea de la relación aldosterona plasmática / actividad de renina plasmática (RAR)",
          "C) Tomografía computarizada de glándulas suprarrenales con contraste",
          "D) Angiografía de arterias renales",
          "E) Metanefrinas libres en plasma"
        ],
        "correcta": "B",
        "explicacion": "El examen de tamizaje de primera línea universalmente recomendado para evaluar la sospecha de Hiperaldosteronismo Primario es la Relación entre la concentración de Aldosterona Plasmática y la Actividad de Renina Plasmática (RAR). En condiciones normales, el eje renina-angiotensina regula a la aldosterona; en el hiperaldosteronismo primario la secreción autónoma de aldosterona expande el volumen extracelular y suprime potentemente la renina, generando una RAR marcadamente elevada (> 20 a 30 con aldosterona > 15 ng/dL). El estudio de imágenes (TC adrenal) solo se solicita tras la confirmación bioquímica de la prueba de tamizaje.",
        "recTag": "EUNACOM Diciembre 2021 (Q#10)"
      },
      {
        "stem": "Una paciente de 48 años con hipertensión arterial de difícil manejo y relación aldosterona/renina elevada es sometida a un estudio etiológico completo que demuestra una Hiperplasia Suprarrenal Bilateral Idiopática. No es candidata a cirugía. ¿Cuál es el tratamiento médico farmacológico de primera elección para controlar su hipertensión y normalizar el potasio sérico?",
        "opciones": [
          "A) Suprarrenalectomía bilateral total inmediata",
          "B) Espironolactona oral",
          "C) Furosemida en dosis altas",
          "D) Aliskiren (inhibidor directo de la renina)",
          "E) Hidralazina asociada a minoxidil"
        ],
        "correcta": "B",
        "explicacion": "En pacientes con Hiperaldosteronismo Primario debido a Hiperplasia Suprarrenal Bilateral (la causa más frecuente de HAP, representando el 60-65% de los casos), la cirugía resectiva no está indicada debido a que requeriría suprarrenalectomía bilateral con consecuente insuficiencia suprarrenal primaria permanente de por vida. El tratamiento estándar de elección indiscutido es el manejo médico con un antagonista competitivo del receptor mineralocorticoide, siendo la Espironolactona el fármaco de primera línea (a dosis de 25 a 100 mg/día). Este fármaco bloquea la acción de la aldosterona a nivel del túbulo colector, normalizando la presión arterial y reteniendo potasio para revertir la hipokalemia.",
        "recTag": "EUNACOM Diciembre 2018 (Q#42)"
      }
    ]
  },
  {
    "id": "endo-15",
    "classId": "endo-15",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Bloque 3 · Corteza y Médula Suprarrenal: Cushing, Addison, Conn y Feocromocitoma",
    "topicLabel": "7.15",
    "title": "Feocromocitoma y Paragangliomas: Bloqueo Alfa Obligatorio",
    "perfilCode": "1.04.1.008",
    "dx": "Medición de Metanefrinas libres plasmáticas o Metanefrinas fraccionadas en orina de 24 horas + TC/RM abdomen y pelvis",
    "tx": "Cirugía curativa (Suprarrenalectomía laparoscópica). PREPARACIÓN PREVIA MANDATORIA: Bloqueo alfa-adrenérgico previo (Fenoxibenzamina / Doxazosina) por 10-14 días, y SOLO DESPUÉS bloqueo beta",
    "seg": "Metanefrinas urinarias/plasmáticas anuales post-cirugía por 10 años. Estudio genético familiar de mutaciones (RET, VHL, NF1, SDHx)",
    "ges": "No GES directo. Derivación prioritaria a Endocrinología, Oncología y Cirugía Laparoscópica avanzada",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#25)",
      "EUNACOM Julio 2020 (Q#38)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Preparación Farmacológica Preoperatoria del Feocromocitoma",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha Clínica de Feocromocitoma",
        "s": "Tríada: Cefalea pulsátil paroxística + Diaforesis profusa + Palpitaciones taquicárdicas con HTA",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Tamizaje Bioquímico de Alta Sensibilidad",
        "al": "Metanefrinas",
        "left": {
          "t": "Metanefrinas Libres Plasmáticas o Urinarias 24h",
          "s": "Elevadas > 3-4x límite normal · Sensibilidad > 98% · Localizar con TC/RM Suprarrenal",
          "type": "acc"
        },
        "right": {
          "t": "Metanefrinas Rigurosamente Normales",
          "s": "Feocromocitoma virtualmente descartado · Buscar otras causas de crisis adrenérgica",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Cuál es la Secuencia de Preparación Quirúrgica Obligatoria?",
        "al": "Regla EUNACOM",
        "left": {
          "t": "Paso 1: Bloqueo Alfa Adrenérgico (10-14 días)",
          "s": "Fenoxibenzamina o Doxazosina · Dieta alta en sal/líquidos para reexpandir volumen",
          "type": "warn"
        },
        "right": {
          "t": "Paso 2: Bloqueo Beta Adrenérgico (SOLO DESPUÉS)",
          "s": "Propranolol/Atenolol · NUNCA dar betabloqueo solo (induce crisis hipertensiva fatal)",
          "type": "crit"
        }
      }
    ],
    "contexto": "El feocromocitoma es un tumor neuroendocrino infrecuente originado en las células cromafines de la médula suprarrenal que produce, almacena y secreta catecolaminas (norepinefrina, epinefrina y dopamina). Los tumores similares de origen extra-adrenal en los ganglios simpáticos o parasimpáticos se denominan paragangliomas. Aunque representa menos del 0.5% de los pacientes hipertensos, su relevancia en EUNACOM es mayúscula debido a su elevada letalidad si no se diagnostica a tiempo, su asociación a síndromes genéticos familiares (NEM 2, Von Hippel-Lindau, Neurofibromatosis 1) y la 'regla de oro' de preparación farmacológica preoperatoria estricta: BLOQUEO ALFA-ADRENÉRGICO OBLIGATORIO PREVIO AL BLOQUEO BETA.",
    "contentSections": [
      {
        "subhead": "1. Cuadro Clínico: La Clásica Tríada Paroxística y la 'Regla del 10%'",
        "paragraphs": [
          "Tríada Clásica de Síntomas Paroxísticos (Especificidad > 90%): 1) CEFALEA severa holocraneana pulsátil; 2) SUDORACIÓN / DIAFORESIS profusa drenching; 3) PALPITACIONES intensas taquicárdicas, acompañadas invariablemente de hipertensión arterial paroxística o mantenida de difícil manejo.",
          "La Regla Histórica del 10%: 10% son bilaterales (suprarrenales en ambos lados, frecuente en NEM 2 y VHL); 10% son extra-adrenales (paragangliomas); 10% son pediátricos; 10% son malignos metastásicos; y 10% no cursan con hipertensión arterial. NOTA MODERNA: Hasta el 35-40% de los casos son de causa genética hereditaria (mutaciones en RET, VHL, NF1 o subunidades de succinato deshidrogenasa SDH)."
        ]
      },
      {
        "subhead": "2. Confirmación Diagnóstica Bioquímica e Imágenes",
        "paragraphs": [
          "Prueba de Elección de Primera Línea: Medición de METANEFRINAS LIBRES EN PLASMA o Metanefrinas Fraccionadas en Orina de 24 horas. Las metanefrinas son los metabolitos metilados estables derivados de la degradación intracelular continua de las catecolaminas por la enzima COMT dentro del propio tumor, lo que confiere una sensibilidad superior al 98%, superando ampliamente a la medición de catecolaminas séricas o ácido vanililmandélico (AVM) libre.",
          "Estudio de Localización Anatómica: Tomografía Computarizada (TC) o Resonancia Magnética (RM) de abdomen y pelvis. Los feocromocitomas son masas suprarrenales típicamente grandes (> 3 cm), muy vascularizadas, heterogéneas con áreas quísticas o necróticas y señal hiperintensa brillante ('bombilla eléctrica') en secuencias ponderadas en T2 de la RM.",
          "Cintigrafía Funcional con MIBG (123-I-Metayodobenzilguanidina) o PET-CT con DOPA: Indicada ante sospecha de paraganglioma extraadrenal, sospecha de malignidad o tumores > 5 cm."
        ]
      },
      {
        "subhead": "3. Preparación Farmacológica Preoperatoria: REGLA DE ORO EUNACOM",
        "paragraphs": [
          "REGLA CRÍTICA DE SEGURIDAD VITAL: NUNCA ADMINISTRAR UN BETABLOQUEADOR ANTES DE HABER LOGRADO UN BLOQUEO ALFA COMPLETO Y EFICAZ.",
          "Fundamento Fisiopatológico: Si se prescribe un betabloqueador (propranolol, atenolol, labetalol) en monoterapia a un paciente con feocromocitoma, se bloquean los receptores vasodilatadores beta-2 vasculares en el músculo esquelético, dejando a las catecolaminas tumorales actuar libremente y sin oposición sobre los receptores alfa-1 vasoconstrictores. Esto desencadena una vasoconstricción periférica masiva fulminante, con crisis hipertensiva letal, edema pulmonar agudo cardiogénico o rotura vascular cerebral.",
          "Secuencia Correcta Preoperatoria (10 a 14 días antes): 1) Paso 1: Iniciar Bloqueo Alfa-adrenérgico no selectivo de acción prolongada con FENOXIBENZAMINA (iniciando 10 mg c/12h hasta 80-100 mg/d) o un bloqueador alfa-1 selectivo como DOXAZOSINA (2 a 16 mg/día); 2) Paso 2: Administrar dieta rica en sodio e hidratación abundante oral o EV para reexpandir el volumen plasmático severamente contraído por la vasoconstricción crónica; 3) Paso 3: SOLO DESPUÉS de 2 a 4 días de adecuado bloqueo alfa y expansión de volemia, si persiste taquicardia o taquiarritmias supraventriculares, se puede añadir un Betabloqueador (propranolol o atenolol)."
        ]
      }
    ],
    "table": {
      "title": "Síndromes Familiares Asociados a Feocromocitoma en EUNACOM",
      "headers": [
        "Síndrome Genético",
        "Gen / Herencia",
        "Tumores Asociados Principales",
        "Características del Feocromocitoma"
      ],
      "rows": [
        [
          "NEM 2A (S. Sipple)",
          "Protooncogén RET / Autosómica dominante",
          "Carcinoma Medular de Tiroides (100%) + Hiperparatiroidismo 1° (20-30%)",
          "Bilateral en > 50% de casos, benigno"
        ],
        [
          "NEM 2B (S. Gorlin)",
          "Protooncogén RET / Autosómica dominante",
          "Carcinoma Medular agresivo + Neuromas mucosos + Hábito marfanoide",
          "Bilateral en > 50% de casos, muy precoz"
        ],
        [
          "Enfermedad de Von Hippel-Lindau",
          "Gen VHL / Autosómica dominante",
          "Hemangioblastomas de retina y SNC + Carcinoma de células claras renal",
          "Frecuentemente bilateral o múltiple"
        ],
        [
          "Neurofibromatosis Tipo 1",
          "Gen NF1 / Autosómica dominante",
          "Manchas café con leche + Neurofibromas cutáneos + Nódulos de Lisch",
          "Feocromocitoma en 1-5% de casos"
        ]
      ]
    },
    "vignette": "Una mujer de 36 años consulta por episodios paroxísticos bruscos de cefalea pulsátil intensa, palpitaciones taquicárdicas con opresión torácica y sudoración profusa en cara y cuello, de 15 a 30 minutos de duración, que se repiten 2 a 3 veces por semana desde hace 3 meses. Durante una de las crisis en el policlínico se constata PA 210/120 mmHg y FC 130 lpm. Se solicita estudio de metanefrinas fraccionadas en orina de 24 horas que resultan en 2800 mcg/24h (VN < 350 mcg). La TC abdominal muestra una masa sólida en la glándula suprarrenal derecha de 4.5 cm de diámetro, muy vascularizada y heterogénea. La paciente será derivada a cirugía resectiva laparoscópica.",
    "explicacion": "El diagnóstico es inequívocamente un Feocromocitoma suprarrenal derecho sintomático confirmado por la tríada clínica típica y la elevación masiva de metanefrinas urinarias en orina de 24 horas (> 8 veces el límite superior de la normalidad). Para llevar a cabo la suprarrenalectomía laparoscópica de forma segura y evitar fluctuaciones hemodinámicas catastróficas o colapso vascular durante la inducción anestésica y la manipulación quirúrgica del tumor, es mandatorio instaurar un bloqueo alfa-adrenérgico previo (con fenoxibenzamina o doxazosina) durante al menos 10 a 14 días prequirúrgicos junto a abundante aporte de líquidos y sal. Si tras el bloqueo alfa la paciente presenta taquicardia refleja sintomática, se podrá asociar secundariamente un betabloqueador, pero NUNCA antes del alfa-bloqueo.",
    "keyPoints": [
      "El feocromocitoma se origina en las células cromafines de la médula suprarrenal secretoras de catecolaminas.",
      "La tríada paroxística clásica altamente específica es: CEFALEA pulsátil + DIAFORESIS profusa + PALPITACIONES taquicárdicas con hipertensión arterial.",
      "La prueba diagnóstica de tamizaje de primera elección con mayor sensibilidad (> 98%) es la medición de METANEFRINAS libres plasmáticas o urinarias de 24 horas.",
      "Hasta un 35-40% de los casos se asocian a síndromes genéticos: NEM 2A, NEM 2B (gen RET), Von Hippel-Lindau (VHL) y Neurofibromatosis 1 (NF1).",
      "REGLA DE ORO DE PREPARACIÓN QUIRÚRGICA: NUNCA administrar un betabloqueador antes de haber completado un bloqueo alfa-adrenérgico eficaz.",
      "El uso de betabloqueadores sin bloqueo alfa previo deja la vasoconstricción alfa-1 sin oposición, desencadenando crisis hipertensiva fatal y edema pulmonar agudo.",
      "El bloqueo alfa se realiza durante 10 a 14 días con Fenoxibenzamina o Doxazosina, asociado a aporte abundante de sodio y líquidos para reexpandir la volemia.",
      "Solo después de varios días de adecuado bloqueo alfa se puede asociar un betabloqueador (propranolol o atenolol) si persiste taquicardia.",
      "En pacientes con Carcinoma Medular de Tiroides y Feocromocitoma sincrónico (NEM 2), se opera SIEMPRE el feocromocitoma en primer lugar."
    ],
    "questions": [
      {
        "stem": "Una paciente de 40 años presenta episodios paroxísticos frecuentes de cefalea severa, sudoración profusa y taquicardia con cifras tensionales de 220/115 mmHg. Se confirma el diagnóstico de feocromocitoma suprarrenal derecho mediante metanefrinas fraccionadas urinarias elevadas y TC abdominal. Se programa una suprarrenalectomía laparoscópica para dentro de dos semanas. ¿Cuál de los siguientes esquemas farmacológicos preoperatorios representa la conducta correcta y obligatoria?",
        "opciones": [
          "A) Iniciar propranolol oral a dosis plenas de inmediato y asociar fenoxibenzamina 24 horas antes del pabellón",
          "B) Iniciar bloqueo alfa-adrenérgico con fenoxibenzamina o doxazosina durante 10 a 14 días, y asociar betabloqueador solo con posterioridad si persiste taquicardia",
          "C) Indicar atenolol oral en monoterapia sin administrar bloqueadores alfa",
          "D) Administrar sulfato de magnesio en infusión y llevar a pabellón de inmediato sin preparación oral",
          "E) Indicar espironolactona asociada a enalapril oral"
        ],
        "correcta": "B",
        "explicacion": "La regla fundamental y mandatoria en la preparación preoperatoria de un feocromocitoma es asegurar un bloqueo alfa-adrenérgico completo (con fenoxibenzamina o doxazosina) durante al menos 10 a 14 días antes de la intervención quirúrgica, asociado a reexpansión agresiva del volumen plasmático con sal y líquidos. Solo una vez que el bloqueo alfa se encuentra plenamente establecido, si el paciente presenta taquicardia compensatoria refleja o arritmias, se puede añadir un betabloqueador (como propranolol o atenolol). Administrar un betabloqueador previo o sin bloqueo alfa deja a los receptores alfa-1 vasoconstrictores sin oposición, lo que precipita una crisis hipertensiva colapsante potencialmente mortal.",
        "recTag": "EUNACOM Diciembre 2022 (Q#25)"
      },
      {
        "stem": "Un médico en una posta rural recibe a un paciente de 35 años con crisis de hipertensión arterial severa (PA 210/125 mmHg), taquicardia a 130 lpm, palidez y temblor. Ante la sospecha de feocromocitoma, el médico decide administrar un bolo endovenoso de propranolol para controlar la taquicardia y la presión. ¿Cuál es la complicación hemodinámica grave esperada tras esta conducta incorrecta?",
        "opciones": [
          "A) Hipotensión arterial brusca con shock distributivo por vasodilatación refleja",
          "B) Crisis hipertensiva paradójica severa con vasoconstricción periférica masiva por estimulación alfa-adrenérgica sin oposición beta-2",
          "C) Bloqueo auriculoventricular completo irreversible",
          "D) Hipertermia maligna refractaria a dantroleno",
          "E) Cetoacidosis metabólica severa"
        ],
        "correcta": "B",
        "explicacion": "El bloqueo beta-adrenérgico no selectivo aislado (propranolol) bloquea los receptores beta-1 (frenando el inotropismo y cronotropismo cardíaco) pero al mismo tiempo bloquea los receptores vasodilatadores beta-2 presentes en la vasculatura periférica arterial. Al quedar inhibida la vasodilatación beta-2, las elevadas cantidades circulantes de catecolaminas tumorales actúan libremente y sin contrapeso alguno sobre los receptores vasculares alfa-1, desencadenando una vasoconstricción periférica espasmódica masiva y descontrolada. Esto genera un aumento catastrófico de la resistencia vascular sistémica con crisis hipertensiva de rebote extrema, hemorragia cerebral o edema pulmonar agudo.",
        "recTag": "EUNACOM Julio 2020 (Q#38)"
      }
    ]
  }
];

// Convert diagramRows to diagram SVG if present
bloque3.forEach(t => {
  if (t.diagramRows && !t.diagram) {
    t.diagram = flow(t.algoTitle || t.title, t.diagramRows);
  }
});

module.exports = { bloque3 };
