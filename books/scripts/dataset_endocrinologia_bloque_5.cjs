const { flow } = require('./dataset_endocrinologia_bloque_1.cjs');
const bloque5 = [
  {
    "id": "endo-20",
    "classId": "endo-20",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.20",
    "title": "Masas Selares, Adenomas Hipofisiarios y Apoplejía Hipofisaria",
    "perfilCode": "1.04.1.013",
    "dx": "RM de Silla Turca con gadolinio + Campo visual computarizado + Evaluación hormonal completa de todos los ejes hipofisarios",
    "tx": "Compresión quiasmática o tumores no funcionantes grandes: Cirugía transesfenoidal. Apoplejía: Hidrocortisona EV inmediata +/- descompresión urgente",
    "seg": "RM de control anual, campimetría periódica y seguimiento hormonal para pesquisar hipopituitarismo diferido postquirúrgico",
    "ges": "No GES directo. Garantías por patología neurológica o neuroquirúrgica prioritaria",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#50)",
      "EUNACOM Diciembre 2019 (Q#28)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Abordaje Diagnóstico y Manejo de Masas Selares y Apoplejía Hipofisaria",
    "diagramRows": [
      {
        "k": "box",
        "t": "Pesquisa de Masa Selar (Incidental o por Cefalea / Defecto Visual)",
        "s": "Estudio Triple Obligatorio: 1) RM Silla Turca · 2) Campimetría Visual · 3) Perfil Hormonal Completo",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Presenta Apoplejía Hipofisaria Aguda (Cefalea en Trueno + Colapso)?",
        "al": "Emergencia",
        "left": {
          "t": "Apoplejía Hipofisaria (Infarto / Hemorragia)",
          "s": "EMERGENCIA MÉDICA · Hidrocortisona 100 mg EV inmediata · Descompresión si pérdida visual",
          "type": "crit"
        },
        "right": {
          "t": "Masa Selar Estable Asintomática",
          "s": "Estratificar: Microadenoma (< 10 mm) vs Macroadenoma (≥ 10 mm)",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Existe Hipersecreción Hormonal o Compromiso Quiasmático?",
        "al": "Conducta",
        "left": {
          "t": "Hemianopsia Bitemporal / Macroadenoma Compresivo",
          "s": "Cirugía de Resección Transesfenoidal Guiada por Neurocirugía (Excepto Prolactinoma)",
          "type": "warn"
        },
        "right": {
          "t": "Incidentaloma No Funcionante < 10 mm",
          "s": "Conducta Expectante · Control con RM a los 12 meses y evaluación hormonal periódica",
          "type": "acc"
        }
      }
    ],
    "contexto": "Las masas selares comprenden un amplio espectro de lesiones anatómicas en la fosa pituitaria, siendo los adenomas hipofisarios (tumores epiteliales benignos de la adenohipófisis) las lesiones más comunes en adultos (10-15% de todas las neoplasias intracraneales). Se dividen dimensionalmente en microadenomas (< 10 mm) y macroadenomas (≥ 10 mm). EUNACOM evalúa de manera recurrente el patrón campimétrico clásico por compresión del quiasma óptico (hemianopsia bitemporal), el abordaje de la Apoplejía Hipofisaria como urgencia neuroendocrina extrema y la regla médica universal de que el prolactinoma es el único adenoma hipofisario de tratamiento inicial médico farmacológico y no quirúrgico.",
    "contentSections": [
      {
        "subhead": "1. Espectro Etiológico, Fisiopatología y Cuadro Clínico Compresivo",
        "paragraphs": [
          "Etiología de Masas Selares: 1) Adenomas Hipofisarios (los más frecuentes: prolactinomas 40%, no funcionantes 30-35%, somatotropinomas 15%, corticotropinomas 10%); 2) Craneofaringiomas (tumores quísticos epiteliales disembrioplásicos derivados de la bolsa de Rathke con calcificaciones supraselares, típicos en niños y adultos mayores); 3) Meningiomas del tubérculo selar; 4) Quistes de la hendidura de Rathke; 5) Aneurismas de la arteria carótida interna supraclinoidea; 6) Metástasis (mama, pulmón, próstata).",
          "Signos por Efecto de Masa Mecánico Local: Cefalea sorda retroocular o bifrontal por distensión diafragmática selar; HEMIANOPSIA BITEMPORAL clásica (defecto en los campos visuales temporales bilateral secundario a la compresión de las fibras nasales decusadas de la retina en el centro del quiasma óptico); y oftalmoplejía por invasión lateral hacia los senos cavernosos comprometiendo pares craneales III, IV, VI y ramas V1-V2 del trigémino."
        ]
      },
      {
        "subhead": "2. Apoplejía Hipofisaria: La Emergencia Neuroendocrinológica",
        "paragraphs": [
          "Definición: Infarto isquémico fulminante o hemorragia intralesional aguda masiva de un adenoma hipofisario preexistente (muchas veces desconocido previamente). Gatillantes: cambios hemodinámicos bruscos, cirugías mayores cardiovasculares, uso de anticoagulantes, embarazo o pruebas dinámicas de estimulación hipofisaria.",
          "Cuadro Clínico Agudo: Cefalea súbita violenta en estallido o 'en trueno' (holocraneana o retroocular), pérdida visual súbita monocular o binocular con amaurosis, oftalmoplejía dolorosa aguda (ptosis palpebral, estrabismo divergent o diplopía por parálisis del III par), meningismo que simula hemorragia subaracnoidea, alteración de conciencia y shock circulatorio por insuficiencia suprarrenal aguda secundaria fulminante.",
          "MANEJO INMEDIATO DE RESCATE: 1) HIDROCORTISONA 100 mg EV en bolo directo inmediato para tratar la insuficiencia corticotropa aguda que amenaza la vida; 2) RM de encéfalo urgente; 3) Descompresión quirúrgica transesfenoidal de urgencia si hay deterioro progresivo agudo de la agudeza visual, defectos campimétricos severos o compromiso sensorial profundo."
        ]
      },
      {
        "subhead": "3. Evaluación Diagnóstica Integral y Conducta Terapéutica",
        "paragraphs": [
          "Protocolo Diagnóstico Triple Mandatorio ante cualquier Masa Selar: 1) RM de Silla Turca ponderada en T1/T2 con y sin gadolinio; 2) Campimetría Visual Computarizada formal para documentar daño de fibras quiasmáticas; 3) Evaluación Hormonal Completa: Prolactina sérica (descartar prolactinoma o hiperprolactinemia por desconexión de tallo), IGF-1 (acromegalia), cortisol matinal + ACTH (Cushing o insuficiencia suprarrenal), TSH + T4L (hipotiroidismo central) y FSH/LH + Testosterona/Estradiol.",
          "Conducta Terapéutica: Si es Macroadenoma no funcionante con compresión quiasmática: Cirugía de Resección Transesfenoidal Endoscópica. Si es Incidentaloma < 10 mm asintomático no funcionante: seguimiento con RM anual sin cirugía. REGLA DE ORO: Si la masa resulta ser un PROLACTINOMA, la cirugía NO es la primera opción; el tratamiento de entrada es MÉDICO con agonistas dopaminérgicos (Cabergolina)."
        ]
      },
      {
        "subhead": "4. Campo Visual por Confrontación: Técnica en la Consulta",
        "paragraphs": [
          "El <strong>campo visual por confrontación</strong> es el examen de campo visual que realiza el médico general frente a toda sospecha de masa selar, cefalea con síntomas visuales o ACV. Técnica: el examinador se sienta frente al paciente a una distancia de 50 cm a 1 metro, con los ojos a la misma altura. Se examina <strong>cada ojo por separado</strong>: el paciente se tapa un ojo con la palma (por ejemplo, el izquierdo) y el examinador cierra su propio ojo opuesto (el derecho), de modo que ambos campos visuales se superpongan y el del examinador sirva de control normal. El paciente mira fijamente el ojo abierto del examinador, sin desviar la mirada.",
          "El estímulo se presenta en los <strong>cuatro cuadrantes</strong>, en un plano equidistante entre ambos y desde la periferia hacia el centro: contar dedos (uno, dos o cinco) o detectar un dedo en movimiento o un objeto rojo (la cabeza roja de un alfiler, más sensible para lesiones del quiasma: el rojo se ve «desteñido» en el hemicampo afectado); también se comparan ambos hemicampos a cada lado de la línea media vertical. Interpretación: la <strong>hemianopsia bitemporal</strong> (al inicio, cuadrantanopsia temporal superior, porque el adenoma comprime el quiasma desde abajo) sugiere masa selar; la hemianopsia homónima, una lesión retroquiasmática (ACV o tumor); y el defecto de un solo ojo, una lesión del ojo o del nervio óptico. Es un examen de tamizaje de baja sensibilidad: un resultado normal no descarta un defecto, por lo que toda masa selar o alteración detectada requiere campimetría computarizada formal en oftalmología."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de Masas en la Región Selar en EUNACOM",
      "headers": [
        "Lesión Selar",
        "Epidemiología Típica",
        "Características en Resonancia / TC",
        "Conducta Terapéutica Principal"
      ],
      "rows": [
        [
          "Adenoma Hipofisario",
          "Adultos 20-60 años, más común",
          "Intraselar con o sin extensión supraselar, realce homogéneo",
          "Cabergolina si prolactinoma; Cirugía si otros"
        ],
        [
          "Craneofaringioma",
          "Bimodal (5-14 años y > 50 años)",
          "Supraselar, quístico con calcificaciones gruesas en TC",
          "Resección neuroquirúrgica +/- Radioterapia"
        ],
        [
          "Meningioma Selar",
          "Mujeres de edad media",
          "Base de implantación dural con 'cola dural' densa",
          "Cirugía neuroquirúrgica si sintomático"
        ],
        [
          "Quiste de Rathke",
          "Hallazgo incidental frecuente",
          "Lesión quística intraselar bien delimitada sin realce",
          "Observación salvo compresión visual"
        ],
        [
          "Apoplejía Hipofisaria",
          "Crisis aguda sobre adenoma previo",
          "Hiperintensidad T1 espontánea (sangrado agudo) selar",
          "Hidrocortisona EV inmediata +/- Cirugía descompresiva"
        ]
      ]
    },
    "vignette": "Un hombre de 49 años consulta a su oftalmólogo debido a que en el último año ha sufrido dos accidentes de tránsito menores por 'no ver los autos que se aproximaban por los lados en los cruces de calles'. Niega cefalea intensa ni alteraciones de la visión central. Al examen oftalmológico la agudeza visual central es de 20/20 en ambos ojos, pero el campo visual por confrontación y la campimetría computarizada demuestran una hemianopsia bitemporal simétrica respetando la visión macular. El fondo de ojo revela palidez papilar bilateral incipiente. Se solicita una Resonancia Magnética de silla turca que describe una masa selar sólida de 22 × 18 × 16 mm con franca extensión supraselar que desplaza y comprime el quiasma óptico hacia arriba.",
    "explicacion": "El cuadro clínico y neuro-oftalmológico es paradigmático de un Macroadenoma Hipofisario con efecto de masa supraselar. La hemianopsia bitemporal es el signo campimétrico clásico provocado por la compresión mecánica de las fibras del quiasma óptico decusadas en la línea media (que provienen de las hemirretinas nasales y transmiten la visión del hemicampo temporal externo). Ante una masa selar con compromiso de la vía visual, el abordaje terapéutico de primera línea para los adenomas no funcionantes o secretores de GH/ACTH es la resección quirúrgica por vía transesfenoidal para descomprimir el quiasma y salvar la visión, previa evaluación de la función corticotropa y tirotropa.",
    "keyPoints": [
      "El defecto campimétrico clásico de la compresión quiasmática por macroadenomas hipofisarios es la HEMIANOPSIA BITEMPORAL.",
      "Toda masa selar exige tres estudios mandatorios: RM de Silla Turca + Campimetría Computarizada + Perfil Hormonal Hipofisario completo.",
      "La Apoplejía Hipofisaria es una emergencia médica que debuta con cefalea en trueno, pérdida visual súbita, oftalmoplejía y colapso hemodinámico.",
      "La primera medida salvadora de vidas en la apoplejía hipofisaria es la administración inmediata de HIDROCORTISONA 100 mg EV.",
      "La descompresión quirúrgica urgente en apoplejía está indicada si hay pérdida progresiva de agudeza visual o compromiso sensorial.",
      "El Prolactinoma es la ÚNICA masa selar cuyo tratamiento de primera línea es MÉDICO con Cabergolina (incluso si produce hemianopsia bitemporal).",
      "Los Craneofaringiomas son lesiones supraselares quísticas con calcificaciones típicas en TC, frecuentes en población pediátrica.",
      "Los microadenomas (< 10 mm) no funcionantes asintomáticos no requieren cirugía; se controlan con RM periódica anual."
    ],
    "questions": [
      {
        "stem": "Un paciente de 52 años consulta por cefalea progresiva. La campimetría visual computarizada demuestra una hemianopsia bitemporal. La RM de cerebro revela una masa intraselar con extensión supraselar de 24 mm que comprime el quiasma óptico. El perfil hormonal descarta hiperprolactinemia (prolactina normal) y no hay hipersecreción de GH ni ACTH. ¿Cuál es el tratamiento de elección indicado para descomprimir la vía óptica y evitar la ceguera permanente?",
        "opciones": [
          "A) Iniciar cabergolina oral a dosis altas",
          "B) Cirugía de resección transesfenoidal del macroadenoma",
          "C) Radioterapia holocraneana convencional",
          "D) Tratamiento con temozolomida",
          "E) Observación con control campimétrico en 6 meses"
        ],
        "correcta": "B",
        "explicacion": "En presencia de un Macroadenoma Hipofisario no funcionante (o clínicamente silente) que genera compromiso estructural de la vía visual evidenciado por hemianopsia bitemporal y compresión quiasmática evidente en la RM, la indicación de tratamiento de elección indiscutida es la Cirugía de Resección por vía Transesfenoidal (endoscópica o microquirúrgica). El objetivo primordial de la intervención es la descompresión mecánica urgente del quiasma óptico para permitir la recuperación funcional de los axones visuales y prevenir la atrofia óptica irreversible. Los agonistas dopaminérgicos como la cabergolina son ineficaces para reducir significativamente los adenomas no prolactinomas.",
        "recTag": "EUNACOM Diciembre 2023 (Q#50)"
      },
      {
        "stem": "Un hombre de 45 años con antecedente de cefaleas esporádicas consulta en el servicio de urgencias por inicio súbito hace 3 horas de cefalea holocraneana de intensidad 10/10 en 'estallido', acompañada de vómitos, caída del párpado superior derecho (ptosis palpebral), diplopía y marcada somnolencia. Al examen físico destaca PA 85/50 mmHg, FC 62 lpm, parálisis completa del tercer par craneal derecho con midriasis y defecto campimétrico bitemporal severo. La TC de cerebro muestra una masa selar heterogénea con focos hiperdensos compatibles con hemorragia aguda intraselar. ¿Cuál es la medida médica farmacológica inicial de máxima prioridad que debe administrarse de inmediato?",
        "opciones": [
          "A) Manitol al 20% en infusión rápida",
          "B) Hidrocortisona 100 mg endovenosa directa en bolo",
          "C) Cabergolina por sonda nasogástrica",
          "D) Heparina de bajo peso molecular subcutánea",
          "E) Somatostatina endovenosa continua"
        ],
        "correcta": "B",
        "explicacion": "El paciente se encuentra cursando una Apoplejía Hipofisaria aguda hemorrágica con compresión de estructuras quiasmáticas y del seno cavernoso derecho (parálisis del III par). En esta catástrofe neuroendocrina, la necrosis hemorrágica masiva destruye bruscamente el tejido hipofisario remanente, provocando un hipopituitarismo agudo fulminante con colapso de la secreción de ACTH. La consiguiente crisis suprarrenal aguda secundaria es la causa primordial de mortalidad perioperatoria rápida por shock circulatorio refractario (como refleja su hipotensión PA 85/50). Por lo tanto, la medida inicial más urgente y prioritaria antes del traslado a pabellón neuroquirúrgico descompresivo es la administración inmediata de Hidrocortisona 100 mg EV en bolo directo.",
        "recTag": "EUNACOM Diciembre 2019 (Q#28)"
      }
    ]
  },
  {
    "id": "endo-21",
    "classId": "endo-21",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.21",
    "title": "Hiperprolactinemia y Prolactinomas: Diagnóstico y Terapia Médica",
    "perfilCode": "1.04.1.014",
    "dx": "Prolactina sérica basal > 25 ng/mL (en ayuno, sin estrés, reposo 30 min). > 100 ng/mL = Prolactinoma altamente probable; > 200 ng/mL = casi patognomónico",
    "tx": "1ra Línea ABSOLUTA: Agonistas Dopaminérgicos (Cabergolina 0.5 mg 1-2 veces/semana VO). Cirugía transesfenoidal solo si resistencia/intolerancia",
    "seg": "Prolactina sérica a los 3 meses y RM de silla turca de control al año para evaluar reducción tumoral. Monitoreo de ecocardiograma si dosis altas",
    "ges": "No GES directo. Derivación prioritaria a Endocrinología y Ginecología / Urología",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#34)",
      "EUNACOM Diciembre 2020 (Q#40)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Hiperprolactinemia EUNACOM",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha Clínica de Hiperprolactinemia",
        "s": "Mujer: Galactorrea + Oligo/Amenorrea + Infertilidad · Varón: Disfunción eréctil + Pérdida libido + Ginecomastia",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Existen Causas Secundarias Frecuentes?",
        "al": "Descarte 1ra Línea",
        "left": {
          "t": "Embarazo, Fármacos o Hipotiroidismo Primario",
          "s": "1) Descartar embarazo (beta-hCG) · 2) Medir TSH (TRH estimula prolactina) · 3) Fármacos antidopaminérgicos",
          "type": "acc"
        },
        "right": {
          "t": "Sin Causa Fisiológica ni Fármacos",
          "s": "Prolactina persistentemente elevada · Solicitar RM de Silla Turca con gadolinio",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Cuál es el Tratamiento de 1ra Línea del Prolactinoma?",
        "al": "Terapia Médica",
        "left": {
          "t": "Agonistas Dopaminérgicos (CABERGOLINA)",
          "s": "ELECCIÓN ABSOLUTA · Cabergolina 0.5 mg/semana · Normaliza prolactina y reduce tamaño tumoral > 80%",
          "type": "acc"
        },
        "right": {
          "t": "Cirugía Transesfenoidal",
          "s": "Exclusiva para casos excepcionales con resistencia demostrada o intolerancia severa a agonistas",
          "type": "warn"
        }
      }
    ],
    "contexto": "La hiperprolactinemia es el trastorno del eje hipotálamo-hipofisario más común en la práctica clínica diaria, especialmente en mujeres en edad reproductiva. A diferencia de las demás hormonas adenohipofisarias, la prolactina se encuentra bajo un tono inhibitorio tónico constante mediado por la dopamina hipotalámica a través de receptores D2. Los prolactinomas representan el 40-50% de todos los adenomas hipofisarios. EUNACOM evalúa con extrema insistencia el descarte de causas no tumorales de hiperprolactinemia (antipsicóticos, metoclopramida, hipotiroidismo primario y embarazo) y la regla de oro terapéutica: EL TRATAMIENTO DE ELECCIÓN DEL PROLACTINOMA ES MÉDICO CON CABERGOLINA, NUNCA QUIRÚRGICO DE ENTRADA.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y la Regla del Descarte Previo",
        "paragraphs": [
          "Causas Fisiológicas Obligatorias de Descarte: 1) Embarazo (siempre solicitar test de embarazo en toda mujer en edad fértil con amenorrea y galactorrea); 2) Lactancia materna; 3) Estrés físico o venopunción traumática; 4) Estimulación del pezón o coito reciente.",
          "Causas Farmacológicas (MUY FRECUENTES EN APS): Fármacos antagonistas de receptores D2 de dopamina: antipsicóticos típicos (haloperidol, clorpromazina) y atípicos (risperidona es el más potente), antieméticos/procinéticos (metoclopramida, domperidona), antidepresivos tricíclicos, ISRS, verapamilo y opiáceos. Los fármacos suelen inducir prolactinas entre 30 y 100 ng/mL (rara vez > 150).",
          "Causas Sistémicas: HIPOTIROIDISMO PRIMARIO (la TSH elevada se acompaña de elevación de TRH hipotalámica, la cual actúa como un potente factor liberador de prolactina; al tratar con levotiroxina la prolactina se normaliza por completo); e Insuficiencia renal crónica o cirrosis (por clearance disminuido).",
          "Hiperprolactinemia por Efecto de Tallo ('Desconexión'): Cualquier masa selar no prolactinoma que comprima el tallo hipofisario interrumpe el transporte de dopamina hacia la adenohipófisis, generando elevaciones moderadas de prolactina (< 100-150 ng/mL)."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas en Mujeres y Varones",
        "paragraphs": [
          "En Mujeres en Edad Reproductiva: Síndrome de Amenorrea-Galactorrea. El exceso de prolactina inhibe la secreción pulsátil de GnRH hipotalámica, provocando hipogonadismo hipogonadotropo con anovulación crónica, oligomenorrea o amenorrea secundaria, infertilidad, dispareunia por sequedad vaginal y osteopenia acelerada por hipoestrogenismo; galactorrea (emisión de secreción láctea por el pezón unibilateral espontánea o a la expresión mamaria en 50-80% de los casos).",
          "En Varones: El debut es típicamente más tardío e insidioso, presentándose como macroadenomas (> 10 mm) con síntomas compresivos locales (cefalea, hemianopsia bitemporal) asociados a signos de hipogonadismo: disfunción eréctil, disminución marcada de la libido, infertilidad por oligospermia, atrofia testicular, pérdida de vello corporal y ginecomastia (la galactorrea es rara en hombres)."
        ]
      },
      {
        "subhead": "3. Abordaje Terapéutico: Cabergolina de Primera Línea",
        "paragraphs": [
          "PRINCIPIO TERAPÉUTICO CARDINAL EUNACOM: El Prolactinoma es el ÚNICO adenoma hipofisario cuyo tratamiento primario de primera línea es MÉDICO FARMACOLÓGICO y NO QUIRÚRGICO, independientemente del tamaño tumoral o de la presencia de hemianopsia bitemporal.",
          "Fármaco de Elección: CABERGOLINA (agonista dopaminérgico selectivo del receptor D2 de acción ultraprolongada). Dosis: 0.5 mg por vía oral una a dos veces por semana con las comidas. Ventajas sobre Bromocriptina: normaliza la prolactina en > 85-90% de los pacientes, reduce el volumen tumoral significativamente en > 80% (incluso en macroadenomas gigantes liberando el quiasma óptico en semanas) y presenta excelente perfil de tolerancia digestiva con mínimos efectos adversos (náuseas o mareo postural leves).",
          "¿Cuándo se Opera un Prolactinoma?: La cirugía transesfenoidal se reserva EXCLUSIVAMENTE para casos de resistencia farmacológica demostrada (falta de reducción tumoral con dosis máximas de cabergolina), intolerancia severa refractaria a agonistas dopaminérgicos o apoplejía tumoral con fístula de LCR."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Etiológico según Niveles Séricos de Prolactina en EUNACOM",
      "headers": [
        "Rango de Prolactina Sérica",
        "Etiologías más Probables",
        "Mecanismo Fisiopatológico",
        "Conducta Inicial Recomendada"
      ],
      "rows": [
        [
          "25 a 100 ng/mL",
          "Fármacos (metoclopramida, risperidona), Hipotiroidismo 1°, Estrés, Microprolactinoma",
          "Antagonismo D2 periférico, estímulo por TRH o microadenoma pequeño",
          "Descartar fármacos, medir TSH y beta-hCG; repetir prolactina en reposo"
        ],
        [
          "100 a 200 ng/mL",
          "Prolactinoma (frecuente microadenoma), Efecto compresión de tallo",
          "Producción tumoral autónoma o pérdida de tono dopaminérgico",
          "RM de Silla Turca con contraste gadolinio"
        ],
        [
          "> 200 a 250 ng/mL",
          "Macroprolactinoma Hipofisario (casi 100% de especificidad)",
          "Secreción masiva por masa adenomatosa ≥ 10 mm",
          "Iniciar Cabergolina oral + Campimetría visual computarizada"
        ]
      ]
    },
    "vignette": "Una mujer de 26 años, nulípara, consulta por amenorrea secundaria de 8 meses de evolución y secreción mamaria blanquecina espontánea por ambos pezones desde hace 4 meses. Niega consumo de medicamentos, drogas o anticonceptivos. Al examen físico se comprueba galactorrea bilateral a la compresión mamaria suave, sin nódulos mamarios palpables; el campo visual por confrontación es normal. La prueba de embarazo en orina y sangre (subunidad beta-hCG) resulta negativa y la TSH es de 1.8 mIU/L (eutiroidea). La prolactina sérica matinal en reposo resulta marcadamente elevada en 165 ng/dL (VN < 25). La RM de silla turca revela una lesión focal intraselar de 7 mm en la adenohipófisis con menor realce que el parénquima circundante, compatible con microadenoma.",
    "explicacion": "El cuadro clínico corresponde clásicamente a un Microprolactinoma (microadenoma hipofisario secretor de prolactina de 7 mm) con síndrome de amenorrea-galactorrea típico. Se descartaron apropiadamente las causas no tumorales más frecuentes: embarazo (hCG negativa), hipotiroidismo primario (TSH normal) y uso de fármacos antidopaminérgicos. El tratamiento de primera línea indiscutido y de elección es MÉDICO mediante el uso de agonistas dopaminérgicos, siendo la Cabergolina el fármaco predilecto a dosis de 0.5 mg semanales. La cabergolina normaliza los niveles hormonales, restablece los ciclos menstruales ovulatorios y la fertilidad, y logra una reducción de masa tumoral en más del 80% de los casos, evitando la cirugía.",
    "keyPoints": [
      "La hiperprolactinemia fisiológica y farmacológica debe descartarse SIEMPRE antes de pensar en prolactinoma.",
      "En toda mujer con amenorrea-galactorrea: 1° Descartar embarazo (beta-hCG); 2° Medir TSH (el hipotiroidismo primario eleva prolactina vía TRH); 3° Revisar fármacos.",
      "Los fármacos más comunes que inducen hiperprolactinemia son: Risperidona, Haloperidol, Metoclopramida (antiemético) y Domperidona.",
      "Valores de prolactina > 100-200 ng/mL son prácticamente patognomónicos de prolactinoma.",
      "REGLA DE ORO TERAPÉUTICA: El tratamiento de primera línea de elección de TODOS los prolactinomas (micro y macroadenomas) es MÉDICO con CABERGOLINA.",
      "La Cabergolina es un agonista dopaminérgico selectivo D2 que normaliza la prolactina y encoge el tumor en más del 80-90% de los casos.",
      "La cirugía transesfenoidal se reserva EXCLUSIVAMENTE para casos refractarios o con intolerancia severa a agonistas dopaminérgicos.",
      "En varones, el prolactinoma suele diagnosticarse tardíamente como macroadenoma con disfunción eréctil, cefalea y defectos visuales."
    ],
    "questions": [
      {
        "stem": "Una paciente de 28 años consulta por amenorrea de 6 meses y galactorrea bilateral. La prueba de embarazo es negativa y la TSH es de 1.9 mIU/L. La prolactina sérica resulta en 180 ng/mL. La RM de cerebro confirma un prolactinoma de 8 mm intraselar. La paciente no toma medicamentos y desea recuperar sus ciclos menstruales para buscar un embarazo. ¿Cuál es el tratamiento de primera línea de elección que debe indicarse?",
        "opciones": [
          "A) Resección quirúrgica por vía transesfenoidal de inmediato",
          "B) Terapia médica oral con Cabergolina (agonista dopaminérgico)",
          "C) Radiocirugía estereotáxica con Gamma Knife",
          "D) Anticonceptivos orales combinados para inducir sangrado",
          "E) Reemplazo con levotiroxina en dosis supresiva"
        ],
        "correcta": "B",
        "explicacion": "El tratamiento de primera línea de elección para los prolactinomas (tanto microadenomas como macroadenomas) es la terapia médica con agonistas dopaminérgicos, siendo la Cabergolina el fármaco de elección indiscutido debido a su alta eficacia, dosificación semanal cómoda y excelente perfil de tolerancia. La cabergolina normaliza los niveles de prolactina en más del 85% de las pacientes, induce una reducción volumétrica tumoral significativa y restaura los ciclos ovulatorios y la fertilidad normal en pocas semanas. La cirugía transesfenoidal queda relegada a casos excepcionales con resistencia demostrada o intolerancia grave a los agonistas.",
        "recTag": "EUNACOM Diciembre 2022 (Q#34)"
      },
      {
        "stem": "Una paciente de 34 años con antecedente de esquizofrenia en tratamiento regular con risperidona 4 mg al día desde hace un año consulta por ausencia de menstruaciones de 4 meses y galactorrea bilateral leve. No presenta cefalea ni alteraciones visuales. La prueba de embarazo es negativa. La prolactina plasmática resulta en 58 ng/mL y la TSH es normal. ¿Cuál es la causa más probable de su hiperprolactinemia y amenorrea?",
        "opciones": [
          "A) Macroprolactinoma hipofisario invasor",
          "B) Efecto adverso farmacológico por bloqueo de receptores dopaminérgicos D2 en la vía tuberoinfundibular inducido por risperidona",
          "C) Insuficiencia ovárica primaria autoinmune precoz",
          "D) Síndrome de Sheehan asintomático",
          "E) Carcinoma corticosuprarrenal ectópico"
        ],
        "correcta": "B",
        "explicacion": "La risperidona es un antipsicótico atípico que posee una potentísima actividad antagonista de los receptores dopaminérgicos D2 a nivel del sistema nervioso central y periférico. Al bloquear los receptores D2 en los lactotropos de la adenohipófisis, interrumpe el tono inhibitorio tónico fisiológico que ejerce la dopamina sobre la secreción de prolactina, provocando una hiperprolactinemia farmacológica (habitualmente con niveles entre 30 y 100 ng/mL) que se manifiesta por galactorrea, oligomenorrea o amenorrea e hipoestrogenismo. Es una causa sumamente prevalente en la práctica que no requiere imágenes selares si el cuadro coincide con la introducción o aumento del fármaco.",
        "recTag": "EUNACOM Diciembre 2020 (Q#40)"
      }
    ]
  },
  {
    "id": "endo-22",
    "classId": "endo-22",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.22",
    "title": "Acromegalia y Gigantismo: Diagnóstico Bioquímico y Manejo",
    "perfilCode": "1.04.1.015",
    "dx": "Tamizaje: IGF-1 sérica elevada para edad y sexo. Confirmación: Test de Sobrecarga Oral de Glucosa (PTGO 75g con GH que no suprime a < 1.0 o 0.4 mcg/L)",
    "tx": "1ra Línea: Cirugía de Resección Transesfenoidal del adenoma somatotropo. Terapia médica coadyuvante: Análogos de Somatostatina (Octreótido/Lanreótido)",
    "seg": "Monitoreo anual con IGF-1 y GH post-PTGO. Colonoscopía periódica (riesgo elevado de pólipos premalignos y cáncer colorrectal) y ecocardiograma",
    "ges": "No GES directo. Garantías por patología cardiovascular y neuroquirúrgica asociada",
    "reconstrucciones": [
      "EUNACOM Diciembre 2021 (Q#49)",
      "EUNACOM Diciembre 2018 (Q#19)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Confirmatorio de la Acromegalia",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha Clínica de Acromegalia",
        "s": "Crecimiento acral (aumento talla zapatos/anillos) · Prognatismo · Macroglosia · Sudoración · SAHOS · HTA / DM",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Paso 1: Prueba de Tamizaje Inicial de Elección",
        "al": "Tamizaje",
        "left": {
          "t": "IGF-1 (Somatomedina C) Sérica Elevada",
          "s": "Indica Hipersecreción Crónica de GH · NUNCA pedir GH basal aislada (secreción pulsátil)",
          "type": "acc"
        },
        "right": {
          "t": "IGF-1 Normal para Edad y Sexo",
          "s": "Acromegalia Virtualmente Descartada · Buscar otras causas de rasgos toscos",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "Paso 2: Confirmación con Sobrecarga Oral de Glucosa (PTGO 75g)",
        "al": "Confirmación",
        "left": {
          "t": "GH post-glucosa NO suprime (< 1.0 o 0.4 mcg/L)",
          "s": "ACROMEGALIA CONFIRMADA · Pedir RM Silla Turca · Tratamiento de 1ra Línea: Cirugía Transesfenoidal",
          "type": "crit"
        },
        "right": {
          "t": "GH post-glucosa suprime normalmente a < 0.4 mcg/L",
          "s": "Eje Somatotropo Normal · Regulación fisiológica conservada",
          "type": "acc"
        }
      }
    ],
    "contexto": "La acromegalia es una enfermedad sistémica insidiosa y potencialmente letal causada por la hipersecreción crónica autónoma de hormona de crecimiento (GH) tras el cierre de las epífisis óseas, lo que promueve la síntesis hepática excesiva de factor de crecimiento insulínico tipo 1 (IGF-1). En el 98% de los casos se origina en un macroadenoma hipofisario somatotropo monoclonal benigno. Su diagnóstico suele demorarse entre 8 y 10 años desde el inicio de los síntomas. EUNACOM evalúa con gran rigor el algoritmo diagnóstico en dos fases (tamizaje con IGF-1 y confirmación con falta de supresión de GH tras sobrecarga oral de glucosa), el tratamiento de primera línea (cirugía transesfenoidal) y el cribado obligatorio de cáncer de colon y miocardiopatía.",
    "contentSections": [
      {
        "subhead": "1. Cuadro Clínico Sistémico y Cambios Acrales Progresivos",
        "paragraphs": [
          "Cambios Físicos Característicos: Crecimiento óseo y de partes blandas acrales: aumento progresivo del tamaño de manos y pies (el paciente cambia repetidamente de número de calzado o no puede retirarse los anillos matrimoniales), engrosamiento de los rasgos faciales toscos, ensanchamiento nasal, prominencia de arcos supraciliares y frontales, prognatismo mandibular con separación interdental (diastema) y maloclusión, y macroglosia.",
          "Manifestaciones Sistémicas de Alta Morbimortalidad: 1) Cardiovascular (causa principal de muerte): Hipertensión arterial secundaria, miocardiopatía acromegálica con hipertrofia concéntrica del ventrículo izquierdo, arritmias e insuficiencia cardíaca diastólica; 2) Respiratorio: Síndrome de apnea obstructiva del sueño (SAHOS) severo en > 70% de los pacientes por hipertrofia de partes blandas faríngeas; 3) Metabólico: Intolerancia a la glucosa y Diabetes Mellitus secundaria (la GH es un potente antagonista insulínico hiperglicemiante); 4) Osteoarticular: Artropatía degenerativa precoz de grandes articulaciones y síndrome del túnel carpiano bilateral.",
          "RIESGO ONCOLÓGICO MANDATORIO: Elevada incidencia de pólipos colónicos adenomatosos premalignos y Carcinoma Colorrectal (exige colonoscopía de tamizaje al diagnóstico y seguimiento regular)."
        ]
      },
      {
        "subhead": "2. Algoritmo Diagnóstico Bioquímico Riguroso",
        "paragraphs": [
          "REGLA DE LABORATORIO EUNACOM: NUNCA se solicita Hormona de Crecimiento (GH) basal aislada para tamizaje ni diagnóstico de acromegalia. La GH posee una secreción fisiológica altamente pulsátil con picos circadianos y valles indetectables, además de elevarse con el estrés y el ejercicio.",
          "Paso 1 - Tamizaje de Primera Línea: Medición de FACTOR DE CRECIMIENTO INSULÍNICO TIPO 1 SÉRICO (IGF-1 o Somatomedina C). La IGF-1 posee una vida media prolongada y refleja de manera fiel e integrada la exposición promedio a GH en las últimas semanas. Un nivel normal para edad y sexo descarta la acromegalia con 99% de certeza.",
          "Paso 2 - Confirmación Dinámica Obligatoria: Test de Tolerancia a la Sobrecarga Oral de Glucosa (PTGO con 75 g de glucosa y medición seriada de GH a los 0, 30, 60, 90 y 120 minutos). En personas sanas, la hiperglicemia aguda suprime la GH a < 1.0 mcg/L (o < 0.4 mcg/L con ensayos ultrasensibles). En la acromegalia, el tumor presenta secreción autónoma no suprimible (GH persiste ≥ 1.0 mcg/L).",
          "Paso 3 - Estudio Anatómico de Localización: RM de Silla Turca con gadolinio (en > 75% demuestra un macroadenoma ≥ 10 mm)."
        ]
      },
      {
        "subhead": "3. Manejo Terapéutico Multimodal y Metas de Control",
        "paragraphs": [
          "Tratamiento de Primera Línea de Elección: CIRUGÍA DE RESECCIÓN TRANSESFENOIDAL del adenoma somatotropo. Es la única terapia con potencial de curación inmediata y alivio rápido del efecto de masa sobre el quiasma óptico.",
          "Terapia Médica Farmacológica Coadyuvante: Indicada ante persistencia tumoral o bioquímica post-quirúrgica, o en pacientes de alto riesgo quirúrgico: 1) Análogos de la Somatostatina de acción prolongada (Octreótido LAR 20-30 mg IM mensual o Lanreótido Autogel 120 mg SC mensual): se unen al receptor SSTR2 y suprimen la GH en > 60-70%; 2) Antagonista del receptor de GH: Pegvisomant (bloquea la síntesis periférica de IGF-1); 3) Agonistas dopaminérgicos: Cabergolina (útil si hay cosecreción de prolactina).",
          "Metas de Curación / Control Bioquímico: Normalización de la IGF-1 sérica ajustada por edad y sexo junto con GH post-PTGO < 1.0 mcg/L."
        ]
      }
    ],
    "table": {
      "title": "Protocolo Diagnóstico Escalonado de Acromegalia en EUNACOM",
      "headers": [
        "Fase Diagnóstica",
        "Examen Indicado",
        "Resultado Patológico Confirmatorio",
        "Significado Clínico / Próximo Paso"
      ],
      "rows": [
        [
          "1. Tamizaje Inicial",
          "IGF-1 (Somatomedina C) sérica",
          "Elevada por sobre rango de referencia para edad y sexo",
          "Alta sospecha de hipersecreción de GH; pasar a PTGO"
        ],
        [
          "2. Confirmación Dinámica",
          "PTU 75g glucosa con GH seriada",
          "Ausencia de supresión de GH (persiste ≥ 1.0 o 0.4 mcg/L)",
          "DIAGNÓSTICO BIOQUÍMICO CONFIRMADO de acromegalia"
        ],
        [
          "3. Localización Anatómica",
          "RM Silla Turca con gadolinio",
          "Macroadenoma hipofisario (75%) o Microadenoma (25%)",
          "Planificación de cirugía de resección transesfenoidal"
        ],
        [
          "4. Tamizaje de Complicaciones",
          "Colonoscopía total + Ecocardiograma",
          "Pólipos colónicos adenomatosos / Hipertrofia VI",
          "Polipectomía preventiva y control de riesgo cardiovascular"
        ]
      ]
    },
    "vignette": "Un hombre de 46 años consulta porque en los últimos 5 años ha notado un cambio progresivo en sus rasgos faciales, su dentadura se ha separado con maloclusión evidente y ha tenido que cambiar dos veces de número de zapatos (de talla 41 a 44) debido a ensanchamiento de sus pies. Su cónyuge relata que ronca intensamente con pausas respiratorias durante la noche. Al examen físico destaca macroglosia, nariz ancha, prognatismo mandibular, manos grandes con dedos en salchicha y PA de 160/95 mmHg. El hemoglucotest de ayuno resulta en 142 mg/dL. El médico sospecha acromegalia e inicia el estudio de laboratorio.",
    "explicacion": "El cuadro clínico es clásico y altamente sugestivo de Acromegalia. El abordaje diagnóstico inicial correcto exige solicitar de primera línea la medición de IGF-1 sérica (y no GH aislada). Si la IGF-1 resulta elevada, la confirmación mandatoria se realiza mediante el Test de Tolerancia a la Glucosa Oral (PTGO 75 g), demostrando la incapacidad fisiológica para suprimir la GH por debajo de 1.0 mcg/L. Una vez confirmada la autonomía bioquímica, se solicita una RM de silla turca para caracterizar el adenoma hipofisario. El tratamiento de elección de primera línea indiscutido es la Resección Quirúrgica por vía Transesfenoidal, y el paciente debe ser derivado a colonoscopía de tamizaje y ecocardiograma para evaluar hipertrofia ventricular y pólipos premalignos.",
    "keyPoints": [
      "La Acromegalia se debe en > 98% a un Macroadenoma Hipofisario secretor de GH tras el cierre epifisario (si ocurre antes se llama Gigantismo).",
      "NUNCA solicitar GH basal aislada para tamizaje ni diagnóstico debido a su secreción pulsátil y fluctuante.",
      "La prueba de tamizaje de primera elección es la IGF-1 sérica (Somatomedina C), elevada para edad y sexo.",
      "La prueba confirmatoria de certeza es la SOBRECARGA ORAL DE GLUCOSA (PTGO 75 g): en personas normales suprime la GH a < 1.0 mcg/L; en acromegalia no suprime.",
      "El tratamiento de primera línea de elección es la CIRUGÍA TRANSESFENOIDAL neuroquirúrgica.",
      "Si persiste enfermedad activa tras la cirugía, los fármacos de elección son los Análogos de la Somatostatina de acción prolongada (Octreótido / Lanreótido).",
      "La principal causa de mortalidad prematura en acromegalia es la Cardiopatía Acromegálica (hipertrofia concéntrica e insuficiencia cardíaca).",
      "Todo paciente con acromegalia debe ser sometido a una COLONOSCOPÍA de tamizaje al diagnóstico debido al elevado riesgo de cáncer colorrectal."
    ],
    "questions": [
      {
        "stem": "Un paciente de 48 años consulta por sudoración profusa, ensanchamiento progresivo de manos y pies y síndrome de apnea obstructiva del sueño. El médico sospecha acromegalia. ¿Cuál es el examen de tamizaje de primera línea que debe solicitarse para evaluar la presencia de esta patología?",
        "opciones": [
          "A) Determinación aislada de hormona de crecimiento (GH) plasmática matinal en ayunas",
          "B) Factor de crecimiento insulínico tipo 1 sérico (IGF-1 o somatomedina C)",
          "C) Tomografía computarizada de cerebro sin contraste",
          "D) Radiografía de manos para evaluar espolones óseos",
          "E) Prueba de estimulación con GHRH"
        ],
        "correcta": "B",
        "explicacion": "El examen de tamizaje inicial de primera elección con mayor sensibilidad diagnóstica para la pesquisa de Acromegalia es la determinación sérica del Factor de Crecimiento Insulínico tipo 1 (IGF-1 o Somatomedina C). A diferencia de la GH, cuyos niveles plasmáticos son pulsátiles y oscilan ampliamente a lo largo del día con picos aleatorios de estrés, la IGF-1 tiene una vida media prolongada y concentraciones estables en sangre que reflejan fielmente la actividad integrada de la GH durante las semanas previas. La medición de una GH basal matinal aislada es un error técnico grave y no se utiliza para tamizaje.",
        "recTag": "EUNACOM Diciembre 2021 (Q#49)"
      },
      {
        "stem": "En un paciente con alta sospecha clínica de acromegalia y niveles séricos de IGF-1 elevados para su rango etario, ¿cuál es la prueba de confirmación diagnóstica estándar de oro que debe realizarse para demostrar la secreción autónoma de hormona de crecimiento?",
        "opciones": [
          "A) Test de tolerancia a la sobrecarga oral con 75 gramos de glucosa (PTGO) con medición seriada de GH",
          "B) Test de hipoglicemia inducida por insulina",
          "C) Medición seriada de prolactina cada 15 minutos",
          "D) Test de supresión con dexametasona 8 mg",
          "E) Biopsia estereotáxica transcraneal"
        ],
        "correcta": "A",
        "explicacion": "La prueba diagnóstica estándar de oro confirmatoria de la Acromegalia es el Test de Sobrecarga Oral de Glucosa (PTGO con 75 g de glucosa). En individuos sanos, la hiperglicemia inducida actúa sobre el hipotálamo y la hipófisis suprimiendo potentemente la liberación de hormona de crecimiento hasta valores menores a 1.0 mcg/L (o < 0.4 mcg/L en ensayos ultrasensibles). En los pacientes con acromegalia, el adenoma somatotropo posee autonomía funcional absoluta, demostrándose una falla patológica en la supresión de la GH (persiste ≥ 1.0 mcg/L).",
        "recTag": "EUNACOM Diciembre 2018 (Q#19)"
      }
    ]
  },
  {
    "id": "endo-23",
    "classId": "endo-23",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.23",
    "title": "Hipopituitarismo, Síndrome de Sheehan y Panhipopituitarismo",
    "perfilCode": "1.04.1.016",
    "dx": "Hormonas diana disminuidas (Cortisol, T4L, Estradiol/Testosterona) con tropinas hipofisarias bajas o 'inapropiadamente normales' (ACTH, TSH, LH/FSH)",
    "tx": "Reemplazo hormonal escalonado. REGLA DE ORO DE SEGURIDAD: Iniciar SIEMPRE Glucocorticoides (Hidrocortisona) ANTES que Levotiroxina",
    "seg": "Monitoreo clínico, densitometría ósea y ajuste periódico de dosis según bienestar, peso y presión arterial. NUNCA guiar levotiroxina con TSH",
    "ges": "No GES directo. Garantías asociadas a patología gineco-obstétrica previa o insuficiencia hormonal crónica",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#07)",
      "EUNACOM Julio 2021 (Q#15)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Diagnóstico y Secuencia de Reemplazo Hormonal en Hipopituitarismo",
    "diagramRows": [
      {
        "k": "box",
        "t": "Sospecha de Hipopituitarismo / Panhipopituitarismo",
        "s": "Astenia severa · Palidez cérea · Hipotensión · Amenorrea / Fracaso lactancia postparto (Sheehan)",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Confirmación Bioquímica de Eje Central",
        "al": "Perfil Hormonal",
        "left": {
          "t": "Hormonas Periféricas Bajas + Tropinas NO Elevadas",
          "s": "Cortisol bajo + ACTH baja · T4L baja + TSH baja/normal · Estradiol bajo + FSH/LH bajas",
          "type": "acc"
        },
        "right": {
          "t": "Hormonas Periféricas Bajas + Tropinas Muy Altas",
          "s": "Falla Periférica Primaria (Addison / Hipotiroidismo Primario / Menopausia precoz)",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Cuál es el Orden de Reposición Farmacológica Obligatorio?",
        "al": "REGLA VITAL",
        "left": {
          "t": "Paso 1: HIDROCORTISONA (Glucocorticoides)",
          "s": "OBLIGATORIO INICIAR PRIMERO · Previene desencadenar crisis suprarrenal aguda fatal",
          "type": "crit"
        },
        "right": {
          "t": "Paso 2: LEVOTIROXINA (SOLO DESPUÉS)",
          "s": "Iniciar 24-48 horas después de asegurar reemplazo glucocorticoide pleno",
          "type": "acc"
        }
      }
    ],
    "contexto": "El hipopituitarismo se define como la deficiencia en la secreción de una o más hormonas de la hipófisis anterior o posterior. Cuando compromete a todas las estirpes celulares se denomina Panhipopituitarismo. El Síndrome de Sheehan es la necrosis isquémica posparto de la glándula adenohipofisaria secundaria a una hemorragia obstétrica masiva (shock hipovolémico en el alumbramiento), patología de enorme arraigo en la historia de la medicina y en el temario EUNACOM. EUNACOM enfatiza sistemáticamente dos conceptos de seguridad crítica vital: 1) El diagnóstico de laboratorio con tropinas bajas o normales inapropiadas; y 2) LA REGLA DE ORO DE SEGURIDAD DEL REEMPLAZO HORMONAL: NUNCA administrar Levotiroxina antes de haber asegurado la reposición de Glucocorticoides (Hidrocortisona).",
    "contentSections": [
      {
        "subhead": "1. Etiología y Fisiopatología del Síndrome de Sheehan",
        "paragraphs": [
          "Durante la gestación, la adenohipófisis experimenta una hipertrofia e hiperplasia fisiológica masiva de los lactotropos, duplicando su tamaño glandular sin un aumento proporcional de su vascularización dependiente del sistema portal hipotálamo-hipofisario de baja presión.",
          "Si durante el parto o puerperio inmediato se produce una hemorragia obstétrica grave con hipotensión severa sostenida y shock hipovolémico (inercia uterina, rotura uterina o desprendimiento prematuro de placenta), se desencadena un vasoespasmo arterial isquémico y trombosis con necrosis avascular de más del 75-90% de la adenohipófisis.",
          "Clínica Clásica Postparto (Secuencia Temporal): 1) El síntoma más precoz y patognomónico es el FRACASO ABSOLUTO DE LA LACTANCIA MATERNA (agalactia completa tras el parto por colapso de prolactina); 2) Amenorrea secundaria persistente tras el puerperio con pérdida del vello pubiano y axilar (por déficit de gonadotropinas y andrógenos adrenales); 3) Astenia profunda, intolerancia al frío, piel seca cérea y letargia (hipotiroidismo secundario); 4) Mareo ortostático, hiponatremia y crisis hipoglicémicas (insuficiencia corticotropa secundaria)."
        ]
      },
      {
        "subhead": "2. Confirmación Diagnóstica de Falla Central y Laboratorio",
        "paragraphs": [
          "Sello Bioquímico del Hipopituitarismo en EUNACOM: Coexistencia de HORMONAS GLANDULARES PERIFÉRICAS BAJAS con TROPINAS HIPOFISARIAS BAJAS O 'INAPROPIADAMENTE NORMALES' (falla en el asa de retroalimentación negativa):",
          "1) Eje Suprarrenal: Cortisol plasmático matinal bajo con ACTH baja o inapropiadamente normal (a diferencia de Addison donde la ACTH está muy alta);",
          "2) Eje Tiroideo: T4 libre baja con TSH baja o en rango normal (a diferencia del hipotiroidismo primario donde la TSH está muy elevada);",
          "3) Eje Gonadal: Estradiol bajo en mujeres (o testosterona baja en varones) con FSH y LH bajas o normales.",
          "Imágenes: En fases tardías del Sheehan o panhipopituitarismo idiopático, la RM de encéfalo demuestra el signo de la 'Silla Turca Vacía' (la fosa pituitaria ocupada por líquido cefalorraquídeo con una lámina atrófica residual de glándula contra el piso óseo)."
        ]
      },
      {
        "subhead": "3. Terapia Sustitutiva Hormonal: REGLA DE ORO DE SEGURIDAD",
        "paragraphs": [
          "REGLA VITAL DE SEGURIDAD ABSOLUTA EN EUNACOM: SIEMPRE INICIAR EL TRATAMIENTO CON GLUCOCORTICOIDES (HIDROCORTISONA) ANTES DE INICIAR LA LEVOTIROXINA.",
          "Fundamento Fisiopatológico de la Regla: Si se administra hormona tiroidea (levotiroxina) a un paciente con panhipopituitarismo sin haber reemplazado previamente el cortisol, el aumento del metabolismo celular basal inducido por la T4 acelera el aclaramiento hepático de las escasas moléculas circulantes de cortisol residual, precipitando una CRISIS SUPRARRENAL AGUDA FULMINANTE Y POTENCIALMENTE MORTAL con shock circulatorio en menos de 24-48 horas.",
          "Secuencia Correcta: 1) Iniciar Hidrocortisona oral (15-20 mg/día); 2) Transcurridas 24 a 48 horas de adecuado reemplazo glucocorticoide, iniciar Levotiroxina (50-100 mcg/día); 3) Añadir reemplazo estrogénico/androgénico según edad y deseo de fertilidad; 4) REGLA DE MONITOREO TIROIDEO: En el hipotiroidismo central la TSH NO SIRVE para monitorear la dosis de levotiroxina (permanecerá siempre baja); la dosis se titula EXCLUSIVAMENTE guiándose por los niveles séricos de T4 LIBRE (buscando mantenerla en el tercio medio-alto de la normalidad)."
        ]
      },
      {
        "subhead": "4. Hipogonadismo Masculino: Primario vs Secundario y Reemplazo con Testosterona",
        "paragraphs": [
          "El <strong>hipogonadismo masculino</strong> es el síndrome clínico por déficit de testosterona, de la espermatogénesis o de ambos. Se sospecha ante disminución de la libido y de las erecciones matinales, disfunción eréctil, ginecomastia, pérdida de vello corporal, <strong>testículos pequeños</strong> (< 15 mL) o blandos, infertilidad, osteoporosis o fracturas por fragilidad, anemia leve, fatiga y aumento de grasa visceral. Si se inicia antes de la pubertad produce retraso puberal con proporciones eunucoides (envergadura mayor que la talla en más de 5 cm) y voz infantil.",
          "Diagnóstico: <strong>testosterona total matinal</strong> (entre 7 y 11 horas, en ayunas) baja en al menos dos mediciones (< 300 ng/dL aproximadamente) y luego LH y FSH. 1) <strong>Primario (hipergonadotropo)</strong>: testosterona baja con LH y FSH ALTAS. Causas: síndrome de Klinefelter 47,XXY (la causa genética más frecuente: testículos pequeños y firmes, talla alta, ginecomastia y azoospermia; se confirma con cariotipo), orquitis urliana, criptorquidia, quimioterapia o radioterapia, y trauma o torsión testicular. 2) <strong>Secundario (hipogonadotropo)</strong>: testosterona baja con LH y FSH bajas o inapropiadamente normales. Causas: hiperprolactinemia (prolactinoma), tumores selares e hipopituitarismo, hemocromatosis, síndrome de Kallmann (con anosmia), uso de opioides, corticoides o esteroides anabolizantes, obesidad severa, diabetes mal controlada y enfermedad sistémica grave. En el secundario siempre se mide prolactina y ferritina, y se solicita RM de silla turca si la prolactina está alta, hay otros déficits hipofisarios o síntomas de masa selar.",
          "Tratamiento y seguimiento: primero se trata la causa (suspender opioides o anabolizantes, bajar de peso, cabergolina en el prolactinoma). La <strong>terapia con testosterona</strong> (gel transdérmico diario o inyecciones intramusculares de undecanoato cada 10-14 semanas o de enantato cada 2-3 semanas) se indica solo con hipogonadismo confirmado clínica y bioquímicamente. Está contraindicada en el cáncer de próstata o de mama, ante un nódulo prostático o APE > 4 ng/mL sin estudio urológico, hematocrito > 50%, insuficiencia cardíaca descompensada, apnea del sueño grave no tratada y en quien desea fertilidad a corto plazo (la testosterona suprime la espermatogénesis; el hipogonadismo secundario con deseo de fertilidad se trata con gonadotropinas por el especialista). <strong>Seguimiento</strong>: a los 3-6 meses y luego cada año, con testosterona (meta en rango medio normal), hematocrito (reducir o suspender si supera 54%), APE y tacto rectal desde los 40 años, densitometría si había osteoporosis y evaluación de la respuesta clínica."
        ]
      }
    ],
    "table": {
      "title": "Perfil Bioquímico Comparativo: Falla Hormonal Primaria vs Hipopituitarismo Central en EUNACOM",
      "headers": [
        "Eje Endocrino",
        "Falla Primaria (Glándula Periférica)",
        "Hipopituitarismo (Falla Central)",
        "Parámetro de Monitoreo Terapéutico"
      ],
      "rows": [
        [
          "Eje Tiroideo",
          "T4L baja con TSH MUY ELEVADA (> 10 mIU/L)",
          "T4L baja con TSH baja o normal inapropiada",
          "Titular Levotiroxina con T4 LIBRE (la TSH no sirve)"
        ],
        [
          "Eje Suprarrenal",
          "Cortisol bajo con ACTH MUY ELEVADA + Hiperpigmentación",
          "Cortisol bajo con ACTH baja o normal + Piel pálida",
          "Titular Hidrocortisona por clínica (peso, PA, energía)"
        ],
        [
          "Eje Gonadal",
          "Estradiol bajo con FSH y LH MUY ELEVADAS",
          "Estradiol bajo con FSH y LH bajas o normales",
          "Alivio de síntomas climatéricos / fertilidad"
        ]
      ]
    },
    "vignette": "Una mujer de 36 años consulta por astenia crónica invalidante, debilidad generalizada, intolerancia marcada al frío y sequedad cutánea extrema. Refiere que hace 2 años tuvo su último parto en el hospital provincial, el cual se complicó con una hemorragia posparto severa por atonía uterina requiriendo politransfusión de 4 unidades de glóbulos rojos e histerectomía de urgencia. Como antecedente obstétrico relevante, la paciente nunca logró amamantar a su hijo por falta completa de leche tras el parto (agalactia) y desde entonces nunca más volvió a presentar una menstruación. Al examen físico se aprecia muy pálida con tono cutáneo céreo, hipotensa (PA 90/60 mmHg), con alopecia difusa y ausencia casi completa de vello axilar y pubiano. Sus exámenes revelan: T4 libre 0.4 ng/dL con TSH de 1.1 mIU/L (inapropiadamente normal), Cortisol matinal de 1.9 mcg/dL con ACTH de 6 pg/mL, y FSH de 1.8 UI/L con Estradiol < 10 pg/mL.",
    "explicacion": "El cuadro clínico y los antecedentes obstétricos son la descripción clásica y patognomónica del Síndrome de Sheehan (necrosis isquémica posparto de la adenohipófisis). La sospecha clínica se confirma por la secuencia cronológica típica: hemorragia obstétrica grave con shock hipovolémico seguida de fracaso de lactancia (agalactia precoz) y amenorrea secundaria permanente con pérdida de vello corporal. El laboratorio confirma un Panhipopituitarismo con tropinas hipofisarias bajas o inapropiadamente normales para los niveles deficientes de hormonas periféricas (T4L, cortisol y estradiol bajos). La regla de oro del tratamiento sustitutivo farmacológico exige iniciar de forma mandatoria Glucocorticoides (Hidrocortisona) primero, y posponer el inicio de Levotiroxina al menos 24-48 horas después para evitar desencadenar una crisis suprarrenal aguda fatal.",
    "keyPoints": [
      "El Síndrome de Sheehan es la necrosis isquémica adenohipofisaria provocada por hemorragia obstétrica severa con hipotensión periparto.",
      "La manifestación más precoz y característica es el FRACASO COMPLETO DE LA LACTANCIA MATERNA (agalactia postparto inmediata).",
      "Cursa con amenorrea secundaria persistente, pérdida del vello axilar y pubiano, y síntomas de hipotiroidismo e hipocortisolismo.",
      "El sello analítico del hipopituitarismo es: HORMONAS PERIFÉRICAS BAJAS CON TROPINAS BAJAS O INAPROPIADAMENTE NORMALES.",
      "REGLA DE SEGURIDAD VITAL: SIEMPRE iniciar primero el reemplazo con Glucocorticoides (Hidrocortisona) antes de administrar Levotiroxina.",
      "Administrar levotiroxina antes que hidrocortisona en un panhipopituitarismo precipita una crisis suprarrenal aguda mortal por aclaramiento acelerado de cortisol.",
      "En el hipotiroidismo central, la dosis de levotiroxina se monitorea y titula con la T4 LIBRE y NUNCA con la TSH.",
      "La RM de cerebro en fases crónicas demuestra clásicamente el signo de la Silla Turca Vacía."
    ],
    "questions": [
      {
        "stem": "Una paciente de 35 años con antecedente de shock hipovolémico por hemorragia del alumbramiento hace 1 año presenta fracaso de lactancia, amenorrea persistente, astenia extrema e hipotensión. Se confirma panhipopituitarismo por Síndrome de Sheehan con T4 libre y cortisol plasmático severamente disminuidos. Respecto al inicio de su terapia de reemplazo hormonal, ¿cuál es la regla de seguridad cronológica obligatoria que debe respetarse?",
        "opciones": [
          "A) Iniciar levotiroxina a dosis plenas de inmediato y posponer los glucocorticoides hasta que la TSH se normalice",
          "B) Iniciar tratamiento glucocorticoide con Hidrocortisona en primer lugar, y solo después de 24 a 48 horas comenzar la sustitución con Levotiroxina",
          "C) Iniciar estrógenos orales antes que cualquier otra hormona para proteger la masa ósea",
          "D) Administrar hormona de crecimiento humana recombinante en monoterapia",
          "E) No iniciar medicamentos hormonales y derivar a fisioterapia"
        ],
        "correcta": "B",
        "explicacion": "Una de las reglas más estrictas y evaluadas con mayor énfasis en el examen EUNACOM en relación al panhipopituitarismo es la secuencia cronológica mandatoria de reemplazo hormonal: SIEMPRE se deben administrar GLUCOCORTICOIDES (Hidrocortisona) ANTES de iniciar la hormona tiroidea (Levotiroxina). Si se administra levotiroxina a un paciente con déficit concomitante de ACTH/cortisol sin cobertura previa, la inducción del hipermetabolismo celular incrementa aceleradamente la degradación hepática y el aclaramiento del escaso cortisol plasmático residual, lo que desencadena de forma inmediata una Crisis Suprarrenal Aguda con shock circulatorio potencialmente letal.",
        "recTag": "EUNACOM Diciembre 2022 (Q#07)"
      },
      {
        "stem": "Una mujer de 42 años diagnosticada de hipopituitarismo secundario a la resección de un macroadenoma selar se encuentra en tratamiento de reemplazo con levotiroxina 100 mcg/día e hidrocortisona 20 mg/día. Acude a su primer control ambulatorio. ¿Cuál es el examen de laboratorio adecuado que debe solicitarse para titular y ajustar la dosis de levotiroxina en esta paciente?",
        "opciones": [
          "A) TSH sérica ultrasensible exclusivamente",
          "B) T4 libre plasmática",
          "C) T3 reversa plasmática",
          "D) Anticuerpos anti-TPO",
          "E) Tiroglobulina sérica"
        ],
        "correcta": "B",
        "explicacion": "En los pacientes con Hipotiroidismo Central (secundario o terciario por hipopituitarismo), la secreción hipofisaria de TSH se encuentra dañada de forma irreversible e intrínseca, por lo que los niveles séricos de TSH permanecerán siempre bajos, indetectables o inapropiadamente normales e independientes del estado tiroideo real del organismo. Por esta razón, la TSH carece por completo de utilidad clínica para monitorizar o titular la dosis de levotiroxina. El único parámetro biológico válido para evaluar la adecuación del tratamiento sustitutivo tiroideo en el hipopituitarismo es la concentración sérica de T4 LIBRE, debiendo ajustarse la dosis de levotiroxina para mantener la T4 libre en la mitad superior del rango normal de referencia.",
        "recTag": "EUNACOM Julio 2021 (Q#15)"
      }
    ]
  },
  {
    "id": "endo-24",
    "classId": "endo-24",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.24",
    "title": "Diabetes Insípida, SIADH y Neoplasia Endocrina Múltiple (MEN)",
    "perfilCode": "1.04.1.017",
    "dx": "Poliuria hipotónica: Osm urinaria < 300 mOsm/kg + Test de deprivación hídrica (Miller) y Desmopresina. Hiponatremia euvolémica: SIADH (Osm orina > 100)",
    "tx": "DI Central: Desmopresina (DDAVP) nasal u oral. DI Nefrogénica: Hidroclorotiazida + Amilorida. SIADH: Restricción de fluidos (500-1000 mL/d)",
    "seg": "Monitoreo estricto de sodio plasmático para evitar Síndrome de Desmielinización Osmótica (corrección máxima < 8-10 mEq/L en 24h)",
    "ges": "No GES directo. Garantías por patología oncológica o neuroquirúrgica asociada",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#11)",
      "EUNACOM Diciembre 2020 (Q#28)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Diagnóstico Diferencial de Trastornos del Agua (DI vs SIADH) y Síndromes MEN",
    "diagramRows": [
      {
        "k": "box",
        "t": "Evaluación del Metabolismo del Agua y Osmolaridad",
        "s": "Determinar Volemia Clínica · Osmolaridad Plasmática y Osmolaridad Urinaria",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Cuál es el Trastorno del Sodio y Diuresis Predominante?",
        "al": "Diagnóstico",
        "left": {
          "t": "Poliuria Hipotónica (> 3 L/d, Osm orina < 300)",
          "s": "DIABETES INSÍPIDA · Hipernatremia / Deshidratación si falta agua · Test de Desmopresina",
          "type": "crit"
        },
        "right": {
          "t": "Hiponatremia Euvolémica (Osm orina > 100)",
          "s": "SIADH · Sodio urinario > 30 mEq/L · Tratamiento: Restricción de fluidos",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Responde a Desmopresina Exógena (Aumenta Osm orina > 50%)?",
        "al": "Tipo de DI",
        "left": {
          "t": "DI Central (Déficit de ADH Hipofisaria)",
          "s": "Respuesta Positiva (> 50-100% aumento Osm) · Tratamiento: DESMOPRESINA (DDAVP)",
          "type": "acc"
        },
        "right": {
          "t": "DI Nefrogénica (Resistencia Renal a ADH)",
          "s": "Sin respuesta a DDAVP (< 50%) · Causas: Litio, hipercalcemia · Manejo: Tiazidas",
          "type": "warn"
        }
      }
    ],
    "contexto": "El equilibrio hídrico corporal depende críticamente de la secreción hipotalámica de hormona antidiurética (ADH o vasopresina) y de su acción en los receptores V2 de los túbulos colectores renales. Las dos caras de su disfunción son la Diabetes Insípida (déficit o resistencia a ADH con poliuria acuosa masiva e hipernatremia) y el Síndrome de Secreción Inadecuada de ADH (SIADH, causa paradigmática de hiponatremia hipotónica euvolémica). Adicionalmente, el temario EUNACOM evalúa los síndromes de Neoplasia Endocrina Múltiple (MEN 1 y MEN 2).",
    "contentSections": [
      {
        "subhead": "1. Diabetes Insípida: Central versus Nefrogénica y Test de Miller",
        "paragraphs": [
          "Definición y Clínica: Poliuria masiva (> 3 a 5 litros en 24 horas, hasta 15-20 L/día) con orinas diluidas (hipotónicas, osmolaridad urinaria < 200-300 mOsm/kg y densidad < 1.005), acompañada de polidipsia intensa y nicturia extrema. Si el paciente tiene libre acceso al agua y el centro de la sed intacto, el sodio sérico permanece normal-alto; si se restringe el agua o se compromete la conciencia, se produce deshidratación hiperosmolar e hipernatremia severa.",
          "Etiología: 1) DI Central (Neurogénica): Déficit de síntesis o liberación de ADH por daño hipotalámico o del tallo hipofisario (traumatismo craneoencefálico, neurocirugía transesfenoidal, histiocitosis, sarcoidosis, idiopática); 2) DI Nefrogénica: Resistencia de las células del túbulo colector renal a la acción de la ADH. Causa farmacológica número 1: CARBONATO DE LITIO; causas metabólicas: Hipercalcemia severa e Hipokalemia crónica.",
          "Test de Deprivación Hídrica y Desmopresina (Test de Miller): 1) Fase de restricción hídrica: la osmolaridad urinaria no sube (< 300 mOsm/kg); 2) Administración de Desmopresina (DDAVP) 2-4 mcg SC o 20 mcg nasal: Si la osmolaridad urinaria se incrementa en > 50-100% y el volumen urinario colapsa, confirma DI CENTRAL (responde al aporte exógeno). Si la osmolaridad urinaria no asciende (< 50%), confirma DI NEFROGÉNICA (el riñón no responde al receptor V2)."
        ]
      },
      {
        "subhead": "2. Síndrome de Secreción Inadecuada de ADH (SIADH)",
        "paragraphs": [
          "Fisiopatología y Diagnóstico: Secreción autónoma y desregulada de ADH en ausencia de estímulos hiperosmolares o de hipovolemia hemodinámica. Conduce a retención selectiva de agua libre por los túbulos colectores con hemodilución e hiponatremia hipotónica. La sobreexpansión leve de volumen activa la liberación de péptidos natriuréticos (ANP/BNP) que fuerzan la pérdida urinaria de sodio (natriuresis) para mantener la volemia clínicamente rigurosamente normal (HIPONATREMIA EUVOLÉMICA).",
          "Criterios Diagnósticos Obligatorios: 1) Hiponatremia hipotónica (Na < 135 mEq/L, Osm plasmática < 275 mOsm/kg); 2) Osmolaridad urinaria inapropiadamente concentrada (> 100 mOsm/kg, a menudo > 300); 3) Sodio urinario elevado (> 30-40 mEq/L) pese a la hiponatremia; 4) Estado de estricta EUVOLEMIA clínica (sin edemas ni ingurgitación yugular ni signos de deshidratación); 5) Función renal, tiroidea (TSH normal) y suprarrenal (cortisol normal) normales.",
          "Causas Principales en EUNACOM: Neoplasias malignas con secreción ectópica (cáncer pulmonar de células pequeñas u oat cell en > 70%), patología pulmonar benigna (neumonía bacteriana, tuberculosis), afecciones de SNC (meningitis, traumatismo, ACV) y fármacos (ISRS, carbamazepina, ciclofosfamida).",
          "Tratamiento: Restricción hídrica estricta a 500-1000 mL/día de líquidos totales. En casos agudos graves con convulsiones o coma: Suero Salino Hipertónico al 3% en infusión lenta controlada (precaución: velocidad de corrección máxima < 8 a 10 mEq/L en las primeras 24 horas para evitar la Mielinólisis Pontina Central / Síndrome de Desmielinización Osmótica)."
        ]
      },
      {
        "subhead": "3. Neoplasia Endocrina Múltiple: Las 3 'P' de NEM 1 y las 2 'C' de NEM 2",
        "paragraphs": [
          "Síndromes de Neoplasia Endocrina Múltiple (MEN / NEM): Trastornos hereditarios autosómicos dominantes caracterizados por tumores en múltiples glándulas endocrinas:",
          "NEM 1 (Síndrome de Wermer, Mutación en gen MEN1 / proteína menina): La Regla Mnemotécnica de las '3 P': 1) Paratiroides (Hiperparatiroidismo primario por hiperplasia de 4 glándulas, 95-100% de casos, manifestación más precoz); 2) Páncreas / Tracto Gastroenteropancreático (tumores neuroendocrinos: gastrinomas / Síndrome de Zollinger-Ellison en 60%, insulinomas); 3) Pituitaria / Hipófisis (adenomas hipofisarios: prolactinomas 60%, GH).",
          "NEM 2A (Síndrome de Sipple, Mutación en protooncogén RET): 1) Carcinoma Medular de Tiroides (100% de penetrancia, multicéntrico bilateral); 2) Feocromocitoma (50%, bilateral); 3) Hiperparatiroidismo Primario (20-30%).",
          "NEM 2B (Síndrome de Gorlin, Mutación en protooncogén RET): 1) Carcinoma Medular de Tiroides muy precoz y agresivo; 2) Feocromocitoma (50%); 3) Neuromas mucosos en lengua, labios y conjuntivas; 4) Hábito marfanoide y ganglioneuromatosis intestinal. (NOTA: NEM 2B NO TIENE hiperparatiroidismo)."
        ]
      }
    ],
    "table": {
      "title": "Comparación de Síndromes de Neoplasia Endocrina Múltiple (MEN / NEM) en EUNACOM",
      "headers": [
        "Síndrome",
        "Gen / Herencia",
        "Tríada Tumoral Clásica ('Regla de Oro')",
        "Regla Quirúrgica EUNACOM"
      ],
      "rows": [
        [
          "NEM 1 (S. Wermer)",
          "Gen MEN1 (Menina) / Autosómica dominante",
          "3 'P': Paratiroides (HPT 1°) + Páncreas (Gastrinoma/Insulinoma) + Pituitaria (Prolactinoma)",
          "Paratiroidectomía subtotal (compromete 4 glándulas)"
        ],
        [
          "NEM 2A (S. Sipple)",
          "Protooncogén RET / Autosómica dominante",
          "Carcinoma Medular de Tiroides + Feocromocitoma + Hiperparatiroidismo 1°",
          "Descartar y operar Feocromocitoma ANTES del tiroides"
        ],
        [
          "NEM 2B (S. Gorlin)",
          "Protooncogén RET / Autosómica dominante",
          "Carcinoma Medular + Feocromocitoma + Neuromas mucosos + Hábito marfanoide (Sin HPT)",
          "Tiroidectomía profiláctica en el primer año de vida"
        ]
      ]
    },
    "vignette": "Un paciente de 62 años con antecedente de carcinoma broncogénico de células pequeñas en tratamiento oncológico es traído a urgencias por astenia, náuseas, marcha inestable y confusión mental progresiva. Al examen físico no presenta edemas ni signos de sobrecarga de volumen; la mucosa oral está bien hidratada, las venas yugulares son normales y la PA es de 130/80 mmHg (estricta euvolemia clínica). Los exámenes demuestran: Sodio plasmático de 118 mEq/L (hiponatremia severa), Potasio 4.0 mEq/L, Osmolaridad plasmática de 245 mOsm/kg (hipotónica), Osmolaridad urinaria de 480 mOsm/kg (inapropiadamente concentrada) y Sodio urinario de 54 mEq/L. La función renal, TSH y cortisol plasmático son normales.",
    "explicacion": "El cuadro clínico corresponde al Síndrome de Secreción Inadecuada de Hormona Antidiurética (SIADH) secundario a un carcinoma pulmonar de células pequeñas (oat cell), la causa paraneoplásica más común de esta entidad. Cumple con todos los criterios diagnósticos clásicos: hiponatremia hipotónica severa en presencia de estricta euvolemia clínica, con orina inapropiadamente concentrada (osmolaridad urinaria > 100 mOsm/kg) y natriuresis persistente (> 30 mEq/L), con función renal, suprarrenal y tiroidea normales. La base del tratamiento en un paciente con síntomas leves a moderados es la Restricción Hídrica estricta (500 a 1000 mL/día). Si presenta convulsiones o coma, se utiliza suero salino hipertónico al 3% bajo monitorización estricta sin superar una velocidad de corrección de 8-10 mEq/L en 24 horas para prevenir la mielinólisis pontina.",
    "keyPoints": [
      "La Diabetes Insípida cursa con poliuria masiva hipotónica (osmolaridad urinaria < 300 mOsm/kg) e hipernatremia si se restringe el acceso al agua.",
      "El test de Desmopresina (DDAVP) diferencia la DI Central (la osmolaridad urinaria sube > 50-100%) de la DI Nefrogénica (no responde a DDAVP).",
      "La causa farmacológica número uno de DI Nefrogénica es el CARBONATO DE LITIO.",
      "El SIADH cursa con HIPONATREMIA HIPOTÓNICA EUVOLÉMICA, con osmolaridad urinaria > 100 mOsm/kg y sodio urinario > 30 mEq/L.",
      "La causa tumoral más frecuente de SIADH es el Carcinoma Pulmonar de Células Pequeñas (microcítico).",
      "El tratamiento inicial de elección del SIADH es la RESTRICCIÓN HÍDRICA (500 a 1000 mL/día).",
      "REGLA DE CORRECCIÓN DE SODIO: La corrección de hiponatremia crónica NUNCA debe superar los 8 a 10 mEq/L en 24 horas para evitar la Mielinólisis Pontina Central.",
      "NEM 1 comprende las 3 'P': Paratiroides + Páncreas (Gastrinoma) + Pituitaria (Prolactinoma).",
      "NEM 2A comprende: Carcinoma Medular de Tiroides + Feocromocitoma + Hiperparatiroidismo 1°. Regla de oro: operar siempre el feocromocitoma primero."
    ],
    "questions": [
      {
        "stem": "Un paciente de 25 años sometido a la extirpación quirúrgica de un craneofaringioma supraselar presenta en el postoperatorio inmediato una diuresis abrupta de 600 mL/hora durante 4 horas consecutivas. El laboratorio demuestra una densidad urinaria de 1.002, osmolaridad urinaria de 110 mOsm/kg y una natremia que asciende rápidamente a 152 mEq/L. Tras la administración de 2 mcg de Desmopresina (DDAVP) por vía subcutánea, la diuresis disminuye a 80 mL/hora y la osmolaridad urinaria se eleva a 520 mOsm/kg. ¿Cuál es el diagnóstico más probable?",
        "opciones": [
          "A) Síndrome de pérdida cerebral de sal",
          "B) Diabetes Insípida Central aguda postquirúrgica",
          "C) Diabetes Insípida Nefrogénica",
          "D) Diuresis osmótica por hiperglicemia",
          "E) Síndrome de secreción inadecuada de ADH"
        ],
        "correcta": "B",
        "explicacion": "El paciente presenta una Diabetes Insípida Central Aguda, complicación clásica y muy frecuente tras cirugías neuroquirúrgicas de la región selar o supraselar (como resección de craneofaringiomas o adenomas hipofisarios con manipulación del tallo hipofisario). La falta aguda de liberación de ADH provoca una incapacidad del túbulo colector para reabsorber agua libre, desencadenando poliuria hipotónica masiva (orinas muy diluidas con densidad < 1.005 y osmolaridad urinaria < 300 mOsm/kg) con hipernatremia resultante. La respuesta contundente a la administración de Desmopresina (aumento de la osmolaridad urinaria > 50-100% y colapso de la diuresis) confirma que el defecto radica en la falta central de hormona y no en una resistencia renal periférica.",
        "recTag": "EUNACOM Diciembre 2023 (Q#11)"
      },
      {
        "stem": "Una paciente de 32 años consulta para asesoramiento genético. Refiere que a su madre le diagnosticaron hiperparatiroidismo primario por adenomas en múltiples glándulas paratiroides y que a su hermano le extirparon un prolactinoma hipofisario y un tumor neuroendocrino pancreático productor de gastrina (gastrinoma). ¿Cuál de los siguientes genes es el responsable más probable de esta agregación familiar de neoplasias endocrinas múltiples?",
        "opciones": [
          "A) Protooncogén RET",
          "B) Gen supresor de tumores MEN1 (Menina)",
          "C) Gen supresor tumoral VHL",
          "D) Gen NF1",
          "E) Gen del receptor de TSH"
        ],
        "correcta": "B",
        "explicacion": "El cuadro clínico y la constelación familiar corresponden de manera inequívoca a un Síndrome de Neoplasia Endocrina Múltiple tipo 1 (NEM 1 o Síndrome de Wermer). Este síndrome autosómico dominante está causado por mutaciones germinales inactivadoras en el gen supresor de tumores MEN1, ubicado en el cromosoma 11q13, el cual codifica para la proteína menina. Se caracteriza clínicamente por la presencia combinada de la clásica tríada de las 3 'P': 1) Paratiroides (hiperparatiroidismo primario en > 95% de los portadores); 2) Páncreas / tracto gastroenteropancreático (gastrinomas, insulinomas); y 3) Pituitaria o hipófisis anterior (prolactinomas y somatotropinomas). Las mutaciones del gen RET causan NEM 2A y 2B.",
        "recTag": "EUNACOM Diciembre 2020 (Q#28)"
      }
    ]
  },
  {
    "id": "endo-25",
    "classId": "endo-25",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Bloque 5 · Hipófisis, Hipotálamo, Neuroendocrinología y MEN",
    "topicLabel": "7.25",
    "title": "Ginecomastia: Fisiológica, Farmacológica y Patológica",
    "perfilCode": "1.03.1.023",
    "dx": "Disco glandular retroareolar ≥ 2 cm (no grasa) · examen testicular obligatorio · si es patológica: perfil hepático, creatinina, TSH, testosterona, LH, FSH, estradiol y β-hCG",
    "tx": "Puberal: tranquilizar y observar · Farmacológica: suspender o cambiar el fármaco (espironolactona → eplerenona) · Tratar la causa · Tamoxifeno solo por especialista",
    "seg": "Control a los 6 meses en el púber; derivar a endocrinología si el estudio es anormal, a cirugía si es fibrosa > 1-2 años, y con urgencia si se sospecha cáncer de mama o tumor testicular",
    "ges": "Sin garantía GES específica · Sospecha de cáncer de mama o tumor testicular: derivación oncológica prioritaria",
    "reconstrucciones": [
      "EUNACOM Julio 2025 (Q#45)"
    ],
    "frecuencia": "MEDIA",
    "svg": null,
    "algoTitle": "Enfrentamiento de la Ginecomastia en Atención Primaria",
    "diagramRows": [
      {
        "k": "box",
        "t": "Aumento de volumen mamario en un varón",
        "s": "¿Disco glandular retroareolar ≥ 2 cm o solo grasa? · Examinar ambas mamas, axilas y testículos",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Tiene rasgos de cáncer de mama o masa testicular?",
        "al": "Banderas rojas",
        "left": {
          "t": "Sí: masa mamaria dura o masa testicular",
          "s": "Mama: mamografía o ecografía + biopsia · Testículo: β-hCG, AFP y ecografía · Derivar urgente",
          "type": "crit"
        },
        "right": {
          "t": "No: disco blando y centrado",
          "s": "A veces sensible · Definir si es fisiológica, farmacológica o patológica",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "¿Púber con examen normal o fármaco causante identificado?",
        "al": "Etiología",
        "left": {
          "t": "Sí: puberal o farmacológica",
          "s": "Observar 6 meses (regresa en 1-2 años) · Suspender o cambiar el fármaco",
          "type": "acc"
        },
        "right": {
          "t": "No: adulto sin causa o > 5 cm",
          "s": "O crecimiento rápido · Perfil hepático, creatinina y TSH · Testosterona, LH, FSH, estradiol y β-hCG",
          "type": "dec"
        }
      }
    ],
    "contexto": "La ginecomastia es el motivo de consulta mamario más frecuente en el varón y es, casi siempre, benigna. Tiene tres picos fisiológicos —neonatal, puberal y del adulto mayor— y su causa adquirida más común son los fármacos, con la espironolactona a la cabeza. El desafío para el médico general es triple: distinguirla de la seudoginecomastia (grasa), no pasar por alto un cáncer de mama masculino ni un tumor testicular productor de estrógenos o de hCG, y no sobreestudiar al adolescente sano, en quien basta tranquilizar y controlar. EUNACOM pregunta la conducta en la ginecomastia puberal, el fármaco causante y el estudio hormonal escalonado.",
    "contentSections": [
      {
        "subhead": "1. Definición, Fisiopatología y Diagnóstico Diferencial",
        "paragraphs": [
          "La <strong>ginecomastia</strong> es la proliferación benigna del tejido glandular de la mama en el varón. Se palpa como un <strong>disco firme o elástico, concéntrico al pezón, de 2 cm o más</strong>, uni o bilateral, a veces sensible. Se produce por un desbalance entre estrógenos, que estimulan el tejido mamario, y andrógenos, que lo inhiben: exceso de estrógenos (o de su formación por aromatización periférica de andrógenos en el tejido adiposo), déficit de testosterona o fármacos que bloquean el receptor androgénico.",
          "Diagnóstico diferencial: 1) <strong>Seudoginecomastia (lipomastia)</strong>: aumento de grasa sin tejido glandular, propio de la obesidad; al tomar la mama en pinza entre el pulgar y el índice y acercar los dedos hacia el pezón no se encuentra un disco retroareolar. 2) <strong>Cáncer de mama masculino</strong>: masa unilateral, dura, indolora, excéntrica (no centrada bajo el pezón) o fija, con retracción del pezón, secreción sanguinolenta, ulceración o adenopatía axilar; es más frecuente después de los 60 años y en el síndrome de Klinefelter o portadores de BRCA2, y obliga a mamografía o ecografía y biopsia."
        ]
      },
      {
        "subhead": "2. Etiología: Fisiológica, Farmacológica y Patológica",
        "paragraphs": [
          "<strong>Fisiológica</strong> (distribución trimodal): neonatal (60-90% de los recién nacidos, por estrógenos maternos; regresa en semanas), <strong>puberal</strong> (hasta la mitad o más de los varones entre Tanner 2 y 4, a menudo bilateral y sensible, que regresa sola en 6 meses a 2 años en más del 90%) y del adulto mayor (por descenso de testosterona y mayor aromatización en el tejido graso).",
          "<strong>Fármacos y drogas</strong> (10-25% de los casos): espironolactona (la más típica), ketoconazol, cimetidina, antiandrógenos y análogos de GnRH usados en el cáncer de próstata, estrógenos, finasterida y dutasterida, digoxina, metronidazol, antirretrovirales (efavirenz), antipsicóticos y metoclopramida (por hiperprolactinemia), esteroides anabolizantes, alcohol, marihuana y opioides. <strong>Enfermedades</strong>: cirrosis hepática, enfermedad renal crónica en diálisis, hipertiroidismo, hipogonadismo primario (Klinefelter) o secundario, realimentación tras desnutrición, tumores testiculares productores de estrógenos (células de Leydig o de Sertoli) o de hCG (tumores germinales, coriocarcinoma), tumores con hCG ectópica (pulmón, hígado) y tumores suprarrenales feminizantes. Cerca de un cuarto queda como idiopática."
        ]
      },
      {
        "subhead": "3. Estudio Escalonado, Tratamiento Inicial y Criterios de Derivación",
        "paragraphs": [
          "Evaluación clínica: preguntar el tiempo de evolución y la velocidad de crecimiento, el dolor, todos los fármacos, el alcohol, las drogas y los anabolizantes, y síntomas de hipogonadismo, hipertiroidismo, hepatopatía o nefropatía. Al examen se mide el diámetro del disco, se examinan ambas mamas y axilas, se buscan estigmas de daño hepático y el <strong>examen testicular es obligatorio</strong> (tamaño, consistencia y masas). En el <strong>adolescente puberal con examen normal</strong> (testículos normales, sin fármacos ni otros hallazgos) no se piden exámenes: se tranquiliza y se controla a los 6 meses.",
          "Exámenes si se sospecha ginecomastia patológica (adulto sin causa evidente, crecimiento rápido, disco > 5 cm, inicio reciente doloroso en el adulto, o púber con testículos anormales o ginecomastia que persiste más de 2 años): perfil hepático, creatinina, TSH, <strong>testosterona total, LH, FSH, estradiol y β-hCG</strong>, y prolactina si hay galactorrea o sospecha de hipogonadismo secundario. Interpretación: β-hCG elevada → ecografía testicular (tumor germinal) y, si es normal, TC de tórax y abdomen; estradiol alto con LH normal o baja → ecografía testicular (tumor de Leydig) y TC suprarrenal; testosterona baja con LH alta → hipogonadismo primario (cariotipo si se sospecha Klinefelter); testosterona baja con LH baja → hipogonadismo secundario (prolactina y RM de silla turca).",
          "Tratamiento inicial: suspender o cambiar el fármaco causante (por ejemplo, espironolactona por eplerenona) y tratar la enfermedad de base; la regresión es más probable si se actúa antes de 12 meses, porque después el tejido se fibrosa. La ginecomastia puberal solo se observa. En la ginecomastia dolorosa de menos de un año, o para prevenir la inducida por antiandrógenos en el cáncer de próstata, el especialista puede indicar tamoxifeno 10-20 mg/día por 3 meses. <strong>Derivar</strong>: a endocrinología, la ginecomastia patológica con estudio alterado o sin causa aclarada; a cirugía (mastectomía subcutánea con o sin liposucción), la ginecomastia fibrosa de más de 1-2 años o con impacto psicológico importante; y con urgencia, la sospecha de cáncer de mama o de tumor testicular."
        ]
      }
    ],
    "table": {
      "title": "Ginecomastia: Tipo, Dato Clave y Conducta del Médico General",
      "headers": [
        "Tipo",
        "Dato Clínico Clave",
        "Conducta Inicial",
        "Cuándo Derivar"
      ],
      "rows": [
        [
          "Neonatal",
          "Recién nacido, por estrógenos maternos",
          "Tranquilizar; no exprimir",
          "No requiere"
        ],
        [
          "Puberal",
          "Tanner 2-4, bilateral o unilateral, sensible, testículos normales",
          "Tranquilizar y control a los 6 meses",
          "Persiste > 2 años, > 5 cm o testículos anormales"
        ],
        [
          "Farmacológica",
          "Espironolactona, antiandrógenos, ketoconazol, anabolizantes",
          "Suspender o cambiar el fármaco",
          "Persiste o es fibrosa: cirugía"
        ],
        [
          "Por enfermedad sistémica",
          "Cirrosis, ERC, hipertiroidismo",
          "Tratar la causa",
          "Según la enfermedad de base"
        ],
        [
          "Hipogonadismo",
          "Testículos pequeños, libido baja; LH alta (primario) o baja (secundario)",
          "Testosterona, LH, FSH; cariotipo o prolactina",
          "Endocrinología"
        ],
        [
          "Tumoral (testículo, hCG)",
          "Crecimiento rápido, masa testicular, β-hCG o estradiol altos",
          "β-hCG, AFP y ecografía testicular",
          "Urgente: urología/oncología"
        ],
        [
          "Cáncer de mama (diferencial)",
          "Masa dura, excéntrica, fija, retracción, secreción sanguinolenta",
          "Mamografía o ecografía y biopsia",
          "Urgente: cirugía/oncología"
        ]
      ]
    },
    "vignette": "Hombre de 63 años con insuficiencia cardíaca con fracción de eyección reducida, en tratamiento con enalapril, bisoprolol, furosemida y espironolactona 25 mg/día desde hace 8 meses, consulta por aumento de volumen doloroso de ambas mamas de 4 meses de evolución. Al examen se palpa bajo ambas areolas un disco firme, móvil, centrado en el pezón, de 3 cm, sensible, sin retracción ni secreción del pezón ni adenopatías axilares. Los testículos miden 20 mL, son simétricos y no tienen masas. No hay estigmas de daño hepático. El perfil hepático, la creatinina y la TSH son normales.",
    "explicacion": "Es una ginecomastia farmacológica por espironolactona, que bloquea el receptor androgénico y aumenta la conversión de testosterona a estradiol. El disco es concéntrico, bilateral y sensible, sin rasgos de cáncer de mama y con testículos normales, por lo que no se requiere biopsia ni estudio hormonal extenso. La conducta es cambiar la espironolactona por eplerenona, un antagonista mineralocorticoide selectivo que conserva el beneficio pronóstico en la insuficiencia cardíaca y casi no produce ginecomastia, y controlar la regresión en los meses siguientes. Si persiste más de 12 a 24 meses y se vuelve fibrosa, ya no regresa con medidas médicas y se deriva a cirugía.",
    "keyPoints": [
      "Ginecomastia es tejido glandular: disco retroareolar ≥ 2 cm, concéntrico al pezón. La seudoginecomastia es solo grasa, sin disco.",
      "Tiene tres picos fisiológicos: neonatal, puberal (Tanner 2-4, regresa en 1-2 años) y adulto mayor.",
      "En el púber con examen testicular normal y sin fármacos no se piden exámenes: tranquilizar y controlar a los 6 meses.",
      "La espironolactona es el fármaco causante más típico; se reemplaza por eplerenona.",
      "El examen testicular es obligatorio: un tumor de Leydig o un tumor germinal productor de hCG puede debutar con ginecomastia.",
      "Estudio de la ginecomastia patológica: perfil hepático, creatinina, TSH, testosterona, LH, FSH, estradiol y β-hCG.",
      "Masa dura, excéntrica, fija o unilateral con retracción o secreción sanguinolenta: sospechar cáncer de mama masculino y biopsiar.",
      "Después de 12 meses el tejido se fibrosa y ya no regresa con fármacos: la solución es quirúrgica."
    ],
    "questions": [
      {
        "stem": "Adolescente de 14 años consulta por aumento bilateral del tejido mamario bajo la areola, sensible al tacto y sin secreción. No usa medicamentos. Su desarrollo puberal es Tanner 3 y el examen testicular es normal. ¿Cuál es el diagnóstico y la conducta más adecuados?",
        "options": [
          {
            "id": "A",
            "text": "Ginecomastia puberal fisiológica; tranquilizar y observar"
          },
          {
            "id": "B",
            "text": "Cáncer de mama masculino; biopsia urgente"
          },
          {
            "id": "C",
            "text": "Hiperprolactinemia; solicitar prolactina"
          },
          {
            "id": "D",
            "text": "Hipogonadismo; solicitar testosterona"
          },
          {
            "id": "E",
            "text": "Tumor testicular; solicitar ecografía testicular"
          }
        ],
        "correcta": "A",
        "explicacion": "La ginecomastia puberal aparece en la mitad o más de los varones entre Tanner 2 y 4; es bilateral, subareolar, a veces sensible, y regresa sola en 1 a 2 años. Se examinan los testículos y se revisan fármacos y drogas; si todo es normal, basta tranquilizar y controlar a los 6 meses. El cáncer de mama es excepcional a esta edad y, sin masa testicular, no se justifica estudiar un tumor.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 45"
      },
      {
        "stem": "Hombre de 26 años consulta por aumento de volumen de la mama izquierda, levemente doloroso, que ha crecido rápidamente en los últimos 2 meses. No usa fármacos, alcohol ni anabolizantes. Al examen se palpa un disco retroareolar de 4 cm, blando y centrado bajo el pezón, sin adenopatías. El testículo derecho está aumentado de volumen, duro e indoloro. ¿Cuál es el estudio inicial más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Mamografía y biopsia core de la mama izquierda"
          },
          {
            "id": "B",
            "text": "β-hCG, alfafetoproteína y ecografía testicular"
          },
          {
            "id": "C",
            "text": "Prolactina y resonancia magnética de silla turca"
          },
          {
            "id": "D",
            "text": "Tamoxifeno 20 mg/día y control en 3 meses"
          },
          {
            "id": "E",
            "text": "Cariotipo para descartar síndrome de Klinefelter"
          }
        ],
        "correcta": "B",
        "explicacion": "Una ginecomastia de crecimiento rápido en un adulto joven con una masa testicular dura e indolora sugiere un tumor testicular productor de hCG (tumor germinal) o de estrógenos (tumor de Leydig). El paso siguiente es medir β-hCG y alfafetoproteína y pedir una ecografía testicular, para derivar con urgencia a urología. El disco blando y centrado no sugiere cáncer de mama, y dar tamoxifeno sin estudiar la causa retrasa el diagnóstico de un cáncer testicular.",
        "recTag": "Banco Oficial AEE"
      }
    ]
  }
];

// Convert diagramRows to diagram SVG if present
bloque5.forEach(t => {
  if (t.diagramRows && !t.diagram) {
    t.diagram = flow(t.algoTitle || t.title, t.diagramRows);
  }
});

module.exports = { bloque5 };
