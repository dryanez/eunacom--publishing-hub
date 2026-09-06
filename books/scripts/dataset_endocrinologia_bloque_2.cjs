const { flow } = require('./dataset_endocrinologia_bloque_1.cjs');
const bloque2 = [
  {
    "id": "endo-06",
    "classId": "endo-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Bloque 2 · Tirotoxicosis, Bocio, Nódulo y Cáncer de Tiroides",
    "topicLabel": "7.6",
    "title": "Enfermedad de Graves-Basedow y Síndromes Tirotóxicos",
    "perfilCode": "1.04.1.002",
    "dx": "TSH suprimida (< 0.01 mIU/L), T4L/T3 elevadas, TRAb positivos (> 1.75 UI/L) y ecografía doppler con infierno tiroideo",
    "tx": "Tiamazol 10-30 mg/día (o PTU en 1er trimestre), betabloqueo sintomático (propranolol/atenolol), radioyodo I-131 o tiroidectomía",
    "seg": "Control T4L/T3 a las 4-6 semanas (la TSH puede permanecer suprimida meses). Monitoreo estricto de neutrófilos si fiebre o dolor faríngeo",
    "ges": "No GES directa para hipertiroidismo primario. GES 33 para Gran Quemado/politraumatizado, derivación prioritaria a endocrinología",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#14)",
      "EUNACOM Julio 2022 (Q#31)",
      "EUNACOM Diciembre 2020 (Q#22)",
      "EUNACOM Diciembre 2018 (Q#45)"
    ],
    "frecuencia": "MUY ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Enfermedad de Graves-Basedow",
    "contexto": "La tirotoxicosis es el estado clínico resultante del exceso de hormonas tiroideas circulantes. En Chile y el mundo, la Enfermedad de Graves-Basedow representa el 70-80% de los casos de hipertiroidismo en menores de 50 años. Su etiología autoinmune (anticuerpos estimulantes del receptor de TSH o TRAb) genera una hiperfunción folicular autónoma y bocio difuso. EUNACOM evalúa con máxima frecuencia el diagnóstico diferencial frente a tiroiditis destructivas (captación baja vs alta), las manifestaciones extratiroideas patognomónicas (oftalmopatía infiltrativa y mixedema pretibial), la titulación de fármacos antitiroideos y la detección precoz de sus complicaciones fatales (agranulocitosis).",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y Diagnóstico Diferencial de Tirotoxicosis",
        "paragraphs": [
          "La tirotoxicosis agrupa dos categorías fisiopatológicas fundamentales: 1) Con hiperfunción tiroidea (hipertiroidismo verdadero), caracterizada por síntesis y secreción activa acelerada, evidenciada por captación tiroidea de I-131 normal o elevada (> 25-30% a las 24 h); y 2) Sin hiperfunción tiroidea (por destrucción folicular o aporte exógeno), con captación tiroidea de I-131 abolida o baja (< 2-5% a las 24 h).",
          "Enfermedad de Graves-Basedow: Es mediada por inmunoglobulinas estimulantes de tiroides (TSI/TRAb) que activan constitutivamente el receptor de TSH acoplado a proteína Gs, estimulando adenilato ciclasa, angiogénesis e hiperplasia folicular masiva difusa.",
          "Bocio Multinodular Tóxico (Enfermedad de Plummer) y Adenoma Tóxico Autónomo: Causados por mutaciones somáticas activadoras del receptor de TSH. Son más frecuentes en adultos mayores de 60 años en zonas con deficiencia limítrofe de yodo. Rara vez cursan con oftalmopatía y no presentan TRAb positivos.",
          "Tiroiditis Destructivas (Subaguda, Silente, Postparto, Inducida por Amiodarona Tipo 2): La lisis de los tirocitos libera reservas preformadas de coloide. Cursan con captación de yodo nula y no responden a tionamidas."
        ]
      },
      {
        "subhead": "2. Cuadro Clínico y Hallazgos Extratiroideos Patognomónicos",
        "paragraphs": [
          "El síndrome hipermetabólico cursa con pérdida ponderal pese a polifagia, intolerancia al calor, sudoración profusa, temblor fino distal postural de alta frecuencia (8-12 Hz), taquicardia sinusal de reposo, palpitaciones, hipertensión sistólica con presión de pulso amplia, polidefecación y labilidad emocional con insomnio.",
          "En el adulto mayor, el cuadro puede presentarse como 'Hipertiroidismo Apático': letargia, depresión refractaria, pérdida de masa muscular proximal, fibrilación auricular de novo o insuficiencia cardíaca descompensada refractaria al tratamiento médico estándar.",
          "Signos Patognomónicos de Graves: 1) Oftalmopatía / Orbitopatía Distiroidea (50% de casos: proptosis, retracción palpebral, quemosis, diplopía por fibrosis muscular del recto inferior y medial, exacerbada por tabaquismo); 2) Bocio difuso elástico con soplo sistólico o frémito palpable; 3) Mixedema pretibial (dermopatía infiltrativa con placas eritemato-violáceas infiltradas no depresibles por depósito de glucosaminoglicanos); 4) Acropaquia tiroidea."
        ]
      },
      {
        "subhead": "3. Estrategia Diagnóstica y Exámenes de Confirmación",
        "paragraphs": [
          "Perfil Hormonal Inicial: TSH sérica marcadamente suprimida (< 0.01 mIU/L) con elevación concomitante de T4 libre (> 2.0 ng/dL) y T3 libre. Si la T4 libre es normal pero la TSH está suprimida, la medición de T3 libre es obligatoria para descartar 'T3-toxicosis' (presente en 5% de adenomas tóxicos y Graves incipiente).",
          "Anticuerpos TRAb (TSH-Receptor Antibodies): Prueba de mayor rendimiento diagnóstico y especificidad (> 98%). Confirman Enfermedad de Graves y predicen el riesgo de recidiva tras el retiro de fármacos antitiroideos y el riesgo de tirotoxicosis neonatal en gestantes.",
          "Cintigrama Tiroideo con I-131 o Tc-99m: Indicado cuando los TRAb son negativos o no están disponibles, y no hay oftalmopatía evidente. Permite discernir entre: captación difusa homogénea (Graves), nódulo hipercaptante único con supresión del resto (Adenoma Tóxico), múltiples áreas calientes y frías (BMNT) o captación nula/bloqueada (Tiroiditis o Facticia).",
          "Ecografía Doppler Tiroidea: Muestra parénquima heterogéneo difusamente hipoecogénico con vascularización exuberante difusa ('infierno tiroideo'), con velocidades de flujo pico sistólico de la arteria tiroidea superior > 40-50 cm/s."
        ]
      },
      {
        "subhead": "4. Farmacoterapia Antitiroidea (Tionamidas) y Alerta de Neutropenia",
        "paragraphs": [
          "Tiamazol (Metimazol): Fármaco de primera línea para el tratamiento médico de Graves. Inhibe la peroxidasa tiroidea (TPO), bloqueando la organificación y el acoplamiento de yodotirosinas. Dosis inicial: 10 a 30 mg/día vía oral en toma matinal única. Duración recomendada de tratamiento: 12 a 18 meses.",
          "Propiltiouracilo (PTU): Inhibe la TPO y adicionalmente bloquea la conversión periférica de T4 a T3 por inhibición de la 5'-desyodasa tipo 1. Dosis: 100 mg cada 8 horas. INDICACIONES EXCLUSIVAS: 1) Primer trimestre del embarazo (evita embriopatía por tiamazol: aplasia cutis, atresia de coanas/esófago); 2) Tormenta tiroidea aguda (por su bloqueo periférico rápido); 3) Reacciones alérgicas menores al tiamazol.",
          "ADVERTENCIA CRÍTICA EUNACOM - AGRANULOCITOSIS INDUCIDA POR TIONAMIDAS: Incidencia de 0.2-0.5%. Ocurre típicamente en los primeros 90 días. Se instruye al paciente que ante CUALQUIER síntoma de odinofagia, faringitis o fiebre > 38.0°C, debe SUSPENDER DE INMEDIATO el fármaco y acudir a urgencias para un Hemograma Urgente. Si el RAN es < 500/uL: suspensión definitiva, hospitalización en aislamiento, cultivos y factor estimulante de colonias de granulocitos (G-CSF). Nunca reexponer a tionamidas.",
          "Hepatotoxicidad: El tiamazol induce colestasis intrahepática; el PTU puede desencadenar hepatitis citolítica fulminante y falla hepática aguda (por ello no se usa fuera del 1er trimestre ni tormenta)."
        ]
      },
      {
        "subhead": "5. Terapias Definitivas: Yodo Radiactivo (I-131) y Tiroidectomía",
        "paragraphs": [
          "Radioyodo I-131: Tratamiento ablativo no invasivo de elección en recidivas post-tiamazol, en bocios tóxicos multinodulares y pacientes con contraindicación a cirugía. Provoca necrosis por radiación beta de los tirocitos en 6 a 12 semanas. Contraindicación absoluta: Embarazo y lactancia (esperar 6 meses tras dosis para concebir). CONTRAINDICACIÓN RELATIVA: Orbitopatía distiroidea moderada-severa activa (el I-131 libera antígenos y empeora la orbitopatía; requiere profilaxis con prednisona oral 0.4-0.5 mg/kg/día iniciada el día del radioyodo y reducida en 6 semanas).",
          "Tiroidectomía Total: Indicada en: bocios grandes (> 80 g) compresivos (disfagia, estridor), sospecha concomitante de malignidad nodular, orbitopatía activa severa que contraindique I-131, o mujeres que planean embarazo en menos de 6 meses. Requiere eutiroidismo farmacológico previo con tiamazol y solución de Lugol (yodo inorgánico) durante 7-10 días prequirúrgicos para reducir la vascularización glandular (Efecto Wolff-Chaikoff).",
          "Manejo Betabloqueador Sintomático: Propranolol 20-40 mg cada 6-8 h o Atenolol 25-50 mg/día mientras se alcanza el eutiroidismo químico, reduciendo el riesgo de arritmias y temblor incapacitante."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Etiológico Diferencial de Síndromes Tirotóxicos en EUNACOM",
      "headers": [
        "Criterio / Entidad",
        "Graves-Basedow",
        "Bocio Multinodular Tóxico",
        "Adenoma Tóxico",
        "Tiroiditis Subaguda (De Quervain)",
        "Tirotoxicosis Facticia"
      ],
      "rows": [
        [
          "Mecanismo Central",
          "TRAb estimulante de TSHR",
          "Mutaciones activadoras TSHR",
          "Mutación clonal autónoma TSHR",
          "Lisis folicular post-viral",
          "Ingesta exógena de levotiroxina"
        ],
        [
          "Palpación Tiroidea",
          "Bocio difuso, frémito/soplo",
          "Múltiples nódulos pétreos",
          "Nódulo único delimitado",
          "Glándula exquisitamente dolorosa",
          "Tiroides no palpable / atrófico"
        ],
        [
          "Oftalmopatía / Mixedema",
          "Presente (patognomónica)",
          "Ausente",
          "Ausente",
          "Ausente",
          "Ausente"
        ],
        [
          "Cintigrama I-131 / Tc99",
          "Difusa y homogénea (> 40%)",
          "Áreas calientes y frías",
          "Nódulo caliente único supresor",
          "Abolida / nula (< 2%)",
          "Abolida / nula (< 1%)"
        ],
        [
          "Tiroglobulina Sérica",
          "Elevada",
          "Elevada",
          "Elevada",
          "Muy elevada (lisis celular)",
          "Indetectable (< 0.1 ng/mL)"
        ],
        [
          "Tratamiento de Elección",
          "Tiamazol 12-18 m / I-131 / Cx",
          "Radioyodo I-131 o Cirugía",
          "I-131 o Resección quirúrgica",
          "AINEs / Corticoides + Propranolol",
          "Suspender aporte exógeno"
        ]
      ]
    },
    "severityTable": {
      "title": "Clasificación de Severidad y Riesgo en Tirotoxicosis",
      "headers": [
        "Nivel de Severidad",
        "Perfil Bioquímico",
        "Manifestaciones Clínicas",
        "Riesgo Crítico / Conducta Inmediata"
      ],
      "rows": [
        [
          "Hipertiroidismo Subclínico",
          "TSH < 0.1 mIU/L con T4L y T3L normales",
          "Asintomático o taquicardia leve, osteoporosis subclínica",
          "Tratar si > 65 años, TSH < 0.1, cardiopatía o riesgo de fractura"
        ],
        [
          "Hipertiroidismo Clínico Leve",
          "TSH < 0.01 mIU/L, T4L 1.5-2x sobre límite",
          "Baja de peso, nerviosismo, temblor distal, taquicardia",
          "Tiamazol 10-15 mg/día + Propranolol oral; control en 4 semanas"
        ],
        [
          "Hipertiroidismo Severo Florido",
          "TSH < 0.01, T4L > 3x sobre límite, TRAb > 10",
          "Bocio soplante, oftalmopatía activa, fibrilación auricular rápida",
          "Tiamazol 30-40 mg/día + Betabloqueo enérgico + anticoagulación si FA"
        ],
        [
          "Tormenta Tiroidea (Crisis)",
          "Hipertiroidismo descompensado sistémico",
          "Fiebre > 38.5°C, agitación, delirio, falla cardíaca, ictericia",
          "UCI inmediata, Burch-Wartofsky ≥ 45 pts; PTU + Yodo + Corticoide"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Algoritmo Terapéutico y Manejo Farmacológico Escalonado",
      "headers": [
        "Escenario Clínico",
        "Fármaco / Medida de Primera Línea",
        "Dosis / Esquema Habitual",
        "Meta / Precaución Obligatoria"
      ],
      "rows": [
        [
          "Graves: Inicio Adulto General",
          "Tiamazol oral",
          "15-30 mg/día en 1 toma matinal",
          "Ajustar con T4L a las 4-6 sem. Suspender ante fiebre/odinofagia"
        ],
        [
          "Graves: Gestación 1er Trimestre",
          "Propiltiouracilo (PTU) oral",
          "50-100 mg cada 8 horas",
          "Evitar embriopatía por tiamazol. Cambiar a tiamazol en sem 13-16"
        ],
        [
          "Síntomas Adrenérgicos Activos",
          "Propranolol o Atenolol",
          "Propranolol 20-40 mg c/8h o Atenolol 50 mg/d",
          "Meta FC 60-80 lpm. Precaución en asma severa descompensada"
        ],
        [
          "Recidiva post-fármacos o BMNT",
          "Radioyodo I-131",
          "10 a 15 mCi vía oral en ayuno",
          "Descartar embarazo. Prednisona 30 mg/d si orbitopatía activa"
        ],
        [
          "Agranulocitosis por Tionamida",
          "Hospitalización + Aislamiento + G-CSF",
          "Filgrastim 5 mcg/kg/día subcutáneo",
          "Suspensión definitiva de tionamidas; NUNCA reexponer"
        ]
      ]
    },
    "vignette": "Una mujer de 29 años, fumadora activa de 10 cigarrillos diarios, consulta por baja de peso de 6 kg en 2 meses pese a buen apetito, intolerancia marcada al calor, palpitaciones persistentes e insomnio. Al examen físico se observa sudorosa, ansiosa, con PA 145/65 mmHg, FC 114 lpm regular. En el cuello se palpa tiroides aumentado de tamaño 2 veces, difuso, elástico, indoloro y con frémito en polo superior. Presenta retracción palpebral bilateral con proptosis evidente y eritema conjuntival. En extremidades se constata temblor distal fino postural y reflejos osteotendinosos exaltados con hiperreflexia rotuliana. Los exámenes confirman TSH < 0.005 mIU/L y T4 libre 3.8 ng/dL (VN: 0.8-1.8). Los anticuerpos anti-receptor de TSH (TRAb) resultan en 8.4 UI/L (positivo > 1.75).",
    "explicacion": "El cuadro corresponde inequívocamente a una Enfermedad de Graves-Basedow florida. La tríada clásica de bocio difuso con frémito, tirotoxicosis franca con TSH suprimida y orbitopatía infiltrativa distiroidea (proptosis) es diagnóstica, siendo innecesario el cintigrama confirmatorio en presencia de TRAb marcadamente positivos. El tratamiento de inicio consiste en tiamazol oral (20-30 mg/día) asociado a betabloqueadores (propranolol 40 mg cada 8 horas) para control de síntomas adrenérgicos. Debe enfatizarse firmemente el cese del tabaquismo (principal factor de progresión de la orbitopatía) e instruir que ante fiebre o dolor faríngeo suspenda el fármaco de inmediato por riesgo de agranulocitosis. Si en el futuro se planea terapia ablativa con radioyodo I-131, requerirá cobertura profiláctica con corticoides orales para no reactivar la inflamación retroocular.",
    "keyPoints": [
      "La Enfermedad de Graves-Basedow es la causa más común de hipertiroidismo en menores de 50 años; es mediada por anticuerpos estimulantes del receptor de TSH (TRAb/TSI).",
      "El bocio difuso con soplo/frémito, la orbitopatía distiroidea y el mixedema pretibial son signos clínicos PATOGNOMÓNICOS de Graves.",
      "El cintigrama tiroideo discierne entre tirotoxicosis con captación alta (Graves, adenoma tóxico, BMNT) y captación baja o nula (tiroiditis subaguda, tiroiditis facticia).",
      "El fármaco de elección general es el Tiamazol (10-30 mg/día). El PTU se reserva exclusivamente para el 1er trimestre del embarazo y la tormenta tiroidea.",
      "La complicación más temida de las tionamidas es la Agranulocitosis (RAN < 500/uL). Regla de oro: si presenta fiebre o faringitis, suspender el fármaco de inmediato y pedir hemograma urgente.",
      "El radioyodo I-131 está absolutamente contraindicado en el embarazo y lactancia, y contraindicado relativamente en orbitopatía distiroidea moderada-severa activa.",
      "Si se indica I-131 en un paciente con Graves y orbitopatía activa leve a moderada, es obligatorio administrar profilaxis con prednisona oral (0.4-0.5 mg/kg/día) por 6 semanas.",
      "En adultos mayores, sospechar Hipertiroidismo Apático ante fibrilación auricular de novo, baja de peso inexplicada o insuficiencia cardíaca refractaria sin los síntomas hiperadrenérgicos floridos clásicos."
    ],
    "questions": [
      {
        "stem": "Una mujer de 32 años con diagnóstico de Enfermedad de Graves-Basedow inicia tratamiento con tiamazol 20 mg al día y propranolol 40 mg cada 8 horas. A las 3 semanas de haber iniciado el tratamiento, consulta en el servicio de urgencias por un cuadro de 24 horas de fiebre de 38.9°C, calofríos intensos y dolor faríngeo severo. Al examen físico se aprecia faringe congestiva con exudado amigdalino blanquecino y FC de 102 lpm. ¿Cuál es la conducta médica inmediata e inaplazable?",
        "opciones": [
          "A) Iniciar amoxicilina con ácido clavulánico oral y citar a control en 48 horas",
          "B) Suspender de inmediato el tiamazol, solicitar un hemograma urgente con recuento diferencial absoluto y hospitalizar en aislamiento",
          "C) Duplicar la dosis de tiamazol a 40 mg/día por sospecha de reactivación tiroidea",
          "D) Cambiar el tiamazol por propiltiouracilo a dosis equivalentes",
          "E) Indicar paracetamol 1 g cada 8 horas y continuar el tiamazol sin modificaciones"
        ],
        "correcta": "B",
        "explicacion": "La presencia de fiebre y odinofagia en un paciente bajo tratamiento con tionamidas (tiamazol o propiltiouracilo) constituye una sospecha ineludible de agranulocitosis medicamentosa (neutrófilos absolutos < 500/uL), complicación inmunológica potencialmente letal. La regla diagnóstica y terapéutica estricta es suspender inmediatamente el fármaco antitiroideo, solicitar un hemograma de urgencia con recuento absoluto de neutrófilos e iniciar aislamiento protector y estudio infeccioso. Si se confirma neutropenia severa, se hospitaliza, se administran antibióticos endovenosos de amplio espectro y factor estimulante de colonias de granulocitos (G-CSF). Nunca debe sustituirse por PTU debido a reactividad cruzada de hasta un 50%.",
        "recTag": "EUNACOM Diciembre 2023 (Q#14)"
      },
      {
        "stem": "Una paciente de 26 años con antecedente de Enfermedad de Graves-Basedow bien controlada con tiamazol 10 mg/día acude a control preconcepcional. Al examen se constata un bocio difuso indoloro sin signos inflamatorios. Su prueba de embarazo en orina resulta positiva, estimándose una gestación de 5 semanas. Su perfil hormonal muestra TSH 0.8 mIU/L y T4 libre 1.3 ng/dL. ¿Cuál es la conducta más adecuada respecto a su terapia antitiroidea durante este período?",
        "opciones": [
          "A) Mantener el tiamazol a la misma dosis durante todo el embarazo por encontrarse eutiroidea",
          "B) Suspender el tiamazol y cambiar inmediatamente a propiltiouracilo (PTU) a dosis equivalentes durante el primer trimestre",
          "C) Suspender todos los antitiroideos y administrar de inmediato una dosis terapéutica de radioyodo I-131",
          "D) Indicar tiroidectomía total de urgencia durante la semana 6 de gestación",
          "E) Suspender todo tratamiento farmacológico y mantener únicamente observación sin controles hormonales"
        ],
        "correcta": "B",
        "explicacion": "El tiamazol está formalmente contraindicado durante el primer trimestre de la gestación (semanas 1 a 12) debido a su potencial teratogénico, asociándose a la embriopatía por tiamazol (aplasia cutis congénita, atresia de coanas y atresia esofágica). Por esta razón, en toda mujer con hipertiroidismo por Graves que inicia un embarazo, el fármaco de elección obligatorio durante el primer trimestre es el Propiltiouracilo (PTU). Posteriormente, a partir de la semana 13-16 (segundo y tercer trimestre), suele rotarse nuevamente a tiamazol para minimizar el riesgo materno de hepatitis tóxica fulminante inducida por PTU.",
        "recTag": "EUNACOM Julio 2022 (Q#31)"
      },
      {
        "stem": "Un hombre de 68 años con antecedente de insuficiencia cardíaca consulta por palpitaciones de reposo, baja de 4 kg de peso en un mes y astenia. El electrocardiograma revela una fibrilación auricular de novo con respuesta ventricular de 135 lpm. La ecografía cervical no muestra nódulos ni bocio evidente y el examen oftalmológico es rigurosamente normal. Los exámenes revelan TSH < 0.01 mIU/L con T4 libre de 2.6 ng/dL. Los anticuerpos TRAb son negativos. El cintigrama tiroideo muestra captación focalizada e intensa en el polo inferior derecho con supresión funcional completa del resto del parénquima tiroideo. ¿Cuál es el diagnóstico más probable?",
        "opciones": [
          "A) Tiroiditis subaguda de De Quervain",
          "B) Enfermedad de Graves-Basedow con variante atípica",
          "C) Adenoma tóxico autónomo (enfermedad de Plummer unilocular)",
          "D) Cáncer folicular de tiroides hiperfuncionante",
          "E) Tirotoxicosis facticia por ingesta oculta de hormona tiroidea"
        ],
        "correcta": "C",
        "explicacion": "El cuadro clínico y cintigráfico es clásico de un Adenoma Tóxico Autónomo (enfermedad de Plummer unilocular). Se caracteriza por la presencia de un nódulo hipercaptante ('caliente') que produce hormonas tiroideas de manera autónoma e independiente de la regulación por TSH. La hiperproducción hormonal suprime la secreción hipofisaria de TSH, lo que conduce a la inactivación y abolición funcional de la captación en el resto de la glándula tiroidea normal. Es más prevalente en adultos mayores, no se acompaña de oftalmopatía ni mixedema, los TRAb son negativos y con frecuencia debuta con fibrilación auricular o insuficiencia cardíaca descompensada.",
        "recTag": "EUNACOM Diciembre 2020 (Q#22)"
      },
      {
        "stem": "Una mujer de 35 años con Enfermedad de Graves-Basedow presenta recaída clínica y bioquímica tras haber completado 18 meses de terapia con tiamazol. Al examen físico destaca proptosis ocular moderada bilateral, quemosis conjuntival y diplopía al mirar hacia arriba, con test de actividad clínica orbitaria (CAS) de 4 puntos (enfermedad activa). Se plantea ablación tiroidea definitiva. ¿Cuál es la conducta terapéutica más apropiada para el manejo definitivo de su hipertiroidismo?",
        "opciones": [
          "A) Administrar dosis ablativa de radioyodo I-131 en monoterapia ambulatoria sin medicación previa",
          "B) Tiroidectomía total previa preparación con tiamazol y yoduro inorgánico (Lugol), o en su defecto I-131 bajo estricta corticoterapia profiláctica sistémica",
          "C) Suspender todo antitiroideo y manejar exclusivamente con propranolol oral",
          "D) Indicar radioterapia orbitaria externa inmediata sin tocar la glándula tiroidea",
          "E) Mantener tiamazol a dosis de 60 mg/día de por vida sin plantear terapia ablativa"
        ],
        "correcta": "B",
        "explicacion": "En pacientes con Enfermedad de Graves y orbitopatía distiroidea moderada a severa activa, el radioyodo I-131 como monoterapia está desaconsejado o formalmente contraindicado relativo, ya que la liberación masiva de antígenos tiroideos provocada por la radiación exacerba marcadamente la inflamación autoinmune retroocular y puede amenazar la visión. En este contexto, la cirugía ablativa (tiroidectomía total) realizada por un equipo experto tras alcanzar eutiroidismo con tionamidas y Lugol es la opción de elección. Si por algún motivo se optara por I-131, es imperativo asociar profilaxis sistémica con glucocorticoides orales (prednisona 0.4-0.5 mg/kg/día iniciada el mismo día del I-131 y mantenida durante 6 semanas con desescalamiento paulatino).",
        "recTag": "EUNACOM Diciembre 2018 (Q#45)"
      }
    ]
  },
  {
    "id": "endo-07",
    "classId": "endo-07",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Bloque 2 · Tirotoxicosis, Bocio, Nódulo y Cáncer de Tiroides",
    "topicLabel": "7.7",
    "title": "Manejo Terapéutico Comparado: Fármacos, Radioyodo y Cirugía",
    "perfilCode": "1.04.1.002",
    "dx": "Evaluación de etiología tiroidea, severidad clínica, comorbilidades cardiovasculares, deseo gestacional y orbitopatía activa",
    "tx": "Tiamazol (1ra línea médica), Radioyodo I-131 (elección en recidivas/BMNT), Tiroidectomía total (bocios gigantes, compresión o sospecha CA)",
    "seg": "Perfil tiroideo a las 4-6 semanas de inicio médico; seguimiento anual con TSH tras I-131 o cirugía por desarrollo inexorable de hipotiroidismo",
    "ges": "Patología no GES directa. Garantías GES si concurre en cardiopatía o estudio quirúrgico sospechoso de cáncer papilar",
    "reconstrucciones": [
      "EUNACOM Diciembre 2021 (Q#18)",
      "EUNACOM Diciembre 2019 (Q#40)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Selección del Tratamiento Definitivo en Hipertiroidismo EUNACOM",
    "diagramRows": [
      {
        "k": "box",
        "t": "Confirmación de Hipertiroidismo Clínico (TSH < 0.01 + T4L alta)",
        "s": "Iniciar Betabloqueo (Propranolol/Atenolol) si hay síntomas simpáticos activos",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Cuál es la Etiología y Escenario del Paciente?",
        "al": "Clasificar",
        "left": {
          "t": "Enfermedad de Graves-Basedow",
          "s": "Tiamazol 10-30 mg/d por 12-18 meses · En 1er trim embarazo: usar PTU · Vigilar fiebre/odinofagia",
          "type": "acc"
        },
        "right": {
          "t": "Bocio Multinodular o Nódulo Tóxico",
          "s": "No remiten con fármacos · Tratamiento definitivo obligatorio: I-131 o Tiroidectomía",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Existe Orbitopatía Activa o Bocio Compresivo?",
        "al": "Ablación Definitiva",
        "left": {
          "t": "Orbitopatía Activa / Bocio > 80g / Sospecha CA",
          "s": "Tiroidectomía Total · Preparar con Tiamazol + Solución Lugol 7-10d antes",
          "type": "warn"
        },
        "right": {
          "t": "Sin Orbitopatía Severa / Alto Riesgo Cx",
          "s": "Radioyodo I-131 · Descartar embarazo (esperar 6m post-terapia para concebir)",
          "type": "acc"
        }
      }
    ],
    "contexto": "El tratamiento del hipertiroidismo exige seleccionar de forma individualizada entre tres modalidades terapéuticas de eficacia comprobada: farmacoterapia con tionamidas (tiamazol, propiltiouracilo), terapia ablativa con radioyodo I-131 o resección quirúrgica (tiroidectomía total o subtotal). EUNACOM evalúa consistentemente las indicaciones precisas de cada una, las contraindicaciones absolutas del radioyodo (embarazo y lactancia), los cuidados prequirúrgicos para evitar crisis tirotóxica intraoperatoria (solución de Lugol) y el monitoreo estricto de eventos adversos farmacológicos potencialmente mortales.",
    "contentSections": [
      {
        "subhead": "1. Comparativa Farmacológica: Tiamazol versus Propiltiouracilo",
        "paragraphs": [
          "El tiamazol (metimazol) es el agente de primera elección indiscutido para el manejo médico de la Enfermedad de Graves en Chile. Posee una vida media plasmática prolongada que permite su administración en una única toma diaria (10-30 mg/día), mayor potencia miligramo a miligramo y un perfil de tolerabilidad sustancialmente superior al PTU, con menor riesgo de falla hepática fulminante.",
          "El propiltiouracilo (PTU) presenta una vida media más corta, requiriendo 2 a 3 tomas diarias (50-100 mg cada 8 horas). Su uso queda estrictamente acotado a dos escenarios críticos: el primer trimestre del embarazo (para mitigar el riesgo de embriopatía teratogénica) y la tormenta tiroidea (gracias a su capacidad para inhibir de forma rápida la conversión periférica de T4 a T3 en hígado y riñón). Ambos fármacos comparten el riesgo de agranulocitosis aguda."
        ]
      },
      {
        "subhead": "2. Terapia con Radioyodo I-131: Indicaciones y Reglas de Seguridad",
        "paragraphs": [
          "El radioyodo I-131 actúa emitiendo partículas beta que destruyen selectivamente el parénquima folicular hiperfuncionante en un lapso de 6 a 16 semanas. Constituye el tratamiento de elección en Chile para pacientes con recidiva de Graves tras ciclo completo de tionamidas, pacientes con comorbilidades que contraindiquen cirugía y en el bocio multinodular tóxico o adenoma tóxico (entidades que no logran remisión a largo plazo con fármacos).",
          "Contraindicaciones y Normas Críticas: 1) Embarazo actual y lactancia son CONTRAINDICACIONES ABSOLUTAS. Toda paciente en edad fértil debe contar con prueba de subunidad beta-hCG negativa previa a la administración y debe asegurar anticoncepción eficaz por al menos 6 meses tras la dosis; 2) La orbitopatía activa moderada-grave requiere corticoterapia profiláctica concurrente; 3) El desenlace esperado a mediano-largo plazo es el hipotiroidismo permanente (> 80-90% de los pacientes), lo que no representa una falla sino el objetivo biológico de curación definitiva, requiriendo suplementación de por vida con levotiroxina."
        ]
      },
      {
        "subhead": "3. Tiroidectomía Total y Preparación Quirúrgica Inmediata",
        "paragraphs": [
          "La cirugía es de primera línea cuando existen síntomas compresivos mecánicos locales (disfagia, disfonía, estridor, compresión traqueal intratorácica demostrada en TC), bocios masivos (> 80 g), coexistencia de nódulos sospechosos de malignidad (categorías Bethesda IV, V o VI), o rechazo/contraindicación al I-131 en pacientes con orbitopatía moderada a severa.",
          "Preparación Preoperatoria Obligatoria (Regla EUNACOM): Para prevenir una tormenta tiroidea intraoperatoria desencadenada por la manipulación glandular, el paciente debe llegar a pabellón en estricto eutiroidismo químico, administrando tiamazol hasta normalizar la T4 libre. Adicionalmente, 7 a 10 días previos a la intervención se prescribe solución de Lugol (yoduro potásico al 5% + yodo al 10%) o solución saturada de yoduro de potasio (SSKI), a razón de 3 a 5 gotas cada 8 horas. Esto bloquea transitoriamente la secreción hormonal (Efecto Wolff-Chaikoff) y reduce drásticamente la hipervascularización del tiroides, facilitando la hemostasia quirúrgica."
        ]
      }
    ],
    "table": {
      "title": "Comparación Terapéutica en Hipertiroidismo: Fármacos vs Radioyodo vs Cirugía",
      "headers": [
        "Modalidad",
        "Ventajas Principales",
        "Desventajas / Riesgos Clave",
        "Indicación Predilecta EUNACOM"
      ],
      "rows": [
        [
          "Tiamazol (Tionamidas)",
          "No ablativo, conserva la glándula, remisión ~40-50%",
          "Agranulocitosis (0.3%), hepatitis colestásica, recidiva 50%",
          "Primer episodio de Graves en jóvenes o preparación quirúrgica"
        ],
        [
          "Propiltiouracilo (PTU)",
          "Bloquea conversión periférica T4->T3, menor teratogénesis temprana",
          "Hepatitis fulminante letal (caja negra FDA), requiere 3 tomas/día",
          "Graves en 1er trimestre gestacional y Tormenta Tiroidea"
        ],
        [
          "Radioyodo (I-131)",
          "Ablación definitiva, no invasivo, alta tasa de curación",
          "Hipotiroidismo definitivo (> 80%), empeora orbitopatía activa",
          "Recidiva de Graves, BMNT, nódulo tóxico, alto riesgo quirúrgico"
        ],
        [
          "Tiroidectomía Total",
          "Resolución inmediata, ideal para bocios gigantes compresivos",
          "Hipoparatiroidismo permanente (1-2%), lesión nervio laríngeo recurrente",
          "Bocio gigante (> 80 g), sospecha de cáncer, orbitopatía activa severa"
        ]
      ]
    },
    "vignette": "Una mujer de 34 años con Enfermedad de Graves-Basedow presentó recidiva de tirotoxicosis 6 meses después de suspender un esquema de 18 meses de tiamazol. No fuma, no presenta proptosis ni signos clínicos de orbitopatía. Su ecografía tiroidea muestra una glándula de 35 gramos sin nódulos dominantes. Desea resolver su enfermedad de forma definitiva porque planea buscar su primer embarazo el próximo año. Se decide administrar terapia ablativa con radioyodo I-131.",
    "explicacion": "El radioyodo I-131 es una excelente alternativa de tratamiento definitivo en recidivas de Graves en pacientes sin orbitopatía activa y sin bocio gigante compresivo. Sin embargo, dado el deseo de embarazo futuro de la paciente, la indicación médica fundamental consiste en asegurar que no exista embarazo en curso mediante test de hCG negativo y prescribir un método anticonceptivo eficaz durante al menos 6 meses tras la dosis ablativa. Este período de seguridad garantiza la eliminación completa del isótopo radiactivo, la resolución de la inflamación post-radiación y la titulación adecuada de la levotiroxina una vez instaurado el hipotiroidismo permanente esperado.",
    "keyPoints": [
      "El tiamazol es el fármaco de elección inicial para la Enfermedad de Graves en adultos no embarazadas debido a su potencia y dosificación en 1 toma diaria.",
      "El PTU se reserva de forma estricta para el 1er trimestre del embarazo y la tormenta tiroidea por su mayor riesgo de necrosis hepática fulminante.",
      "El I-131 está absolutamente contraindicado durante el embarazo y la lactancia; en mujeres fértiles exige posponer la concepción al menos 6 meses post-dosis.",
      "El hipotiroidismo permanente es el resultado natural y buscado tras la terapia con I-131 o tiroidectomía total, requiriendo sustitución con levotiroxina de por vida.",
      "La preparación prequirúrgica de la tiroidectomía exige eutiroidismo previo con tiamazol y administración de solución de Lugol durante los 7-10 días previos para colapsar la vascularización.",
      "Las principales complicaciones de la tiroidectomía total son el hipoparatiroidismo transitorio o definitivo (hipocalcemia) y la lesión del nervio laríngeo recurrente (disfonía)."
    ],
    "questions": [
      {
        "stem": "Una paciente de 42 años con antecedente de bocio multinodular tóxico de 45 g, sin síntomas compresivos, consulta para definir tratamiento curativo. La paciente tiene paridad completa y no tiene deseos de futuros embarazos. Se le propone tratamiento ablativo con radioyodo I-131. ¿Cuál de las siguientes afirmaciones respecto a esta terapia es correcta?",
        "opciones": [
          "A) La probabilidad de remisión completa sin requerir levotiroxina es superior al 95%",
          "B) El resultado esperado más frecuente a largo plazo es el hipotiroidismo permanente, el cual requiere suplementación de por vida",
          "C) La paciente puede amamantar sin restricciones a su hijo lactante de 8 meses el día posterior al radioyodo",
          "D) El I-131 está contraindicado porque los bocios multinodulares responden exclusivamente a tiamazol de por vida",
          "E) El fármaco debe asociarse a dosis altas de aspirina para potenciar la fijación del isótopo"
        ],
        "correcta": "B",
        "explicacion": "El radioyodo I-131 destruye el tejido tiroideo hiperfuncionante mediante radiación beta local. En el seguimiento a mediano y largo plazo, la gran mayoría de los pacientes tratados (> 80%) desarrollan hipotiroidismo definitivo, lo cual no se considera un fracaso del tratamiento sino la consecuencia biológica esperada del proceso ablativo curativo. Por esta razón, se les debe advertir formalmente que requerirán controles periódicos de TSH y suplementación diaria indefinida con levotiroxina oral. La lactancia es una contraindicación absoluta para el radioyodo.",
        "recTag": "EUNACOM Diciembre 2021 (Q#18)"
      },
      {
        "stem": "Un paciente de 38 años con Enfermedad de Graves y un bocio difuso masivo de 120 gramos con compresión traqueal sintomática será sometido a una tiroidectomía total programada. Se encuentra actualmente eutiroideo bajo tratamiento con tiamazol 20 mg/día. Para minimizar el sangrado operatorio y reducir la vascularización de la glándula durante el acto quirúrgico, ¿cuál es la medida farmacológica preoperatoria recomendada en los 7 a 10 días previos a la cirugía?",
        "opciones": [
          "A) Indicar solución de Lugol (yoduro inorgánico) oral 3 a 5 gotas cada 8 horas",
          "B) Suspender el tiamazol e iniciar propiltiouracilo a dosis altas",
          "C) Administrar una dosis baja de radioyodo I-131 48 horas antes de la incisión",
          "D) Indicar anticoagulación plena con heparina de bajo peso molecular",
          "E) Administrar carbonato de litio para aumentar la captación de hormonas"
        ],
        "correcta": "A",
        "explicacion": "La administración de solución de Lugol (o SSKI, solución saturada de yoduro de potasio) durante 7 a 10 días inmediatamente previos a la cirugía es la práctica estándar en la preparación preoperatoria de la tiroidectomía en pacientes con hipertiroidismo. Las altas concentraciones de yoduro inorgánico desencadenan el efecto Wolff-Chaikoff transitorio (inhibiendo la proteólisis del coloide y la liberación hormonal) y producen una marcada vasoconstricción y disminución del flujo sanguíneo glandular, lo que reduce ostensiblemente el tamaño de los vasos tiroideos, la fragilidad tisular y el riesgo de hemorragia intraoperatoria masiva.",
        "recTag": "EUNACOM Diciembre 2019 (Q#40)"
      }
    ]
  },
  {
    "id": "endo-08",
    "classId": "endo-08",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Bloque 2 · Tirotoxicosis, Bocio, Nódulo y Cáncer de Tiroides",
    "topicLabel": "7.8",
    "title": "Tormenta Tiroidea y Urgencias Tirotóxicas",
    "perfilCode": "1.04.1.002",
    "dx": "Clínico urgente mediante Escala de Burch-Wartofsky (≥ 45 puntos = Tormenta Tiroidea altamente probable)",
    "tx": "Abordaje multimodal simultáneo: Bloqueo adrenérgico (Propranolol EV/oral) + PTU alta dosis + Yodo inorgánico (1 h post-PTU) + Hidrocortisona EV",
    "seg": "Monitorización continua en UCI/UTI, hemodinamia invasiva, control electrolítico y detección de infecciones desencadenantes",
    "ges": "Manejo en Unidad de Paciente Crítico de Urgencia Vital (Ley de Urgencia)",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#11)",
      "EUNACOM Julio 2021 (Q#28)",
      "EUNACOM Diciembre 2019 (Q#15)",
      "EUNACOM Diciembre 2017 (Q#33)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Algoritmo de Rescate en Tormenta Tiroidea (Secuencia Multimodal)",
    "contexto": "La tormenta tiroidea representa la máxima expresión de descompensación tirotóxica, constituyendo una emergencia médica extrema con una mortalidad histórica del 10 al 30% si no se instaura un tratamiento precoz y agresivo. No se distingue del hipertiroidismo no complicado por el nivel absoluto de T4 libre o T3, sino por el colapso homeostático multiorgánico sistémico desencadenado por factores intercurrentes (infecciones bacterianas, cirugía tiroidea o no tiroidea sin preparación previa, cetoacidosis, parto o suspensión brusca de antitiroideos). EUNACOM evalúa el diagnóstico clínico rápido mediante los criterios de Burch-Wartofsky, el orden temporal estricto de los fármacos de rescate y la prohibición absoluta de administrar aspirina.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Factores Desencadenantes Principales",
        "paragraphs": [
          "La tormenta tiroidea no requiere necesariamente concentraciones hormonales más elevadas que un hipertiroidismo no complicado. Su patogenia obedece a un aumento abrupto en la biodisponibilidad de hormonas libres (por disminución de proteínas transportadoras), incremento desmesurado de la densidad y sensibilidad de receptores adrenérgicos beta tisulares, y una respuesta hiperinflamatoria descontrolada mediada por citoquinas sistémicas.",
          "Factores Desencadenantes Obligatorios en EUNACOM: 1) Infecciones agudas sistémicas (sepsis, neumonía, ITU); 2) Cirugía tiroidea o extratiroidea en paciente tirotóxico no compensado; 3) Abandono súbito de tionamidas; 4) Administración de contrastes yodados radiológicos o dosis de radioyodo I-131 sin cobertura previa; 5) Traumatismos graves, cetoacidosis diabética, hipoglicemia severa o trabajo de parto."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos de Burch-Wartofsky Point Scale (BWPS)",
        "paragraphs": [
          "El diagnóstico de tormenta tiroidea es 100% clínico y no debe demorarse a la espera de resultados de laboratorio. La escala de Burch-Wartofsky cuantifica la disfunción en 6 dominios orgánicos: termorregulación, sistema nervioso central, cardiovascular, gastrointestinal-hepático y presencia de factor desencadenante.",
          "Puntajes Clave: Menor a 25 puntos: Tormenta tiroidea improbable; 25 a 44 puntos: Tormenta tiroidea inminente; 45 o más puntos: Tormenta tiroidea altamente probable (indicación inmediata de tratamiento de rescate en UCI).",
          "Componentes Cuantitativos: 1) Temperatura: 37.2-37.7°C (5 pts), 37.8-38.2°C (10 pts), hasta > 40.0°C (30 pts); 2) SNC: agitación leve (10 pts), delirio/psicosis/letargia extrema (20 pts), coma o convulsiones (30 pts); 3) Gastrointestinal: diarrea/vómitos/náuseas/dolor abdominal (10 pts), ictericia inexplicada (20 pts); 4) Cardiovascular: taquicardia 100-109 (5 pts), hasta ≥ 140 lpm (25 pts), fibrilación auricular (10 pts), insuficiencia cardíaca congestiva grado leve (5 pts) a severa con edema pulmonar agudo (15 pts); 5) Evento precipitante identificado (10 pts)."
        ]
      },
      {
        "subhead": "3. Terapia Multimodal Escalonada: Los 4 Pilares Ineludibles",
        "paragraphs": [
          "Pilar 1 - Bloqueo Adrenérgico Inmediato: Propranolol a dosis elevadas (60-80 mg vía oral/sonda nasogástrica cada 4-6 horas, o 1-2 mg EV lento cada 10-15 minutos bajo monitoreo cardíaco continuo). Además de frenar el tono simpático periférico, a dosis > 160 mg/día el propranolol inhibe la 5'-desyodasa periférica. En caso de broncoespasmo severo contraindicador de betabloqueo no selectivo, se emplea Esmolol EV en infusión continua o Diltiazem.",
          "Pilar 2 - Bloqueo de Síntesis Hormonal: Propiltiouracilo (PTU) a dosis de ataque de 500 a 1000 mg por sonda nasogástrica o vía oral, seguido de 200 a 250 mg cada 4 horas. El PTU es el agente antitiroideo de elección preferido sobre el tiamazol en esta urgencia porque inhibe tanto la síntesis como la conversión periférica de T4 a T3.",
          "Pilar 3 - Bloqueo de la Liberación Hormonal (Efecto Wolff-Chaikoff): Solución de Lugol (8-10 gotas c/8h) o SSKI (5 gotas c/6h). REGLA DE ORO TEMPORAL EUNACOM: El yoduro inorgánico debe administrarse OBLIGATORIAMENTE al menos 1 HORA DESPUÉS de la primera dosis de PTU. Si se administra antes o al mismo tiempo, el yodo servirá como sustrato para la síntesis de nuevas hormonas tiroideas (Fenómeno de Jod-Basedow), agravando catastróficamente el cuadro.",
          "Pilar 4 - Glucocorticoides Sistémicos: Hidrocortisona 100 mg EV cada 8 horas (o Dexametasona 2 mg EV cada 6 horas). Trata la insuficiencia suprarrenal relativa inducida por el consumo hipermetabólico acelerado de cortisol, ejerce efecto estabilizador endotelial y bloquea potentemente la conversión periférica de T4 a T3."
        ]
      },
      {
        "subhead": "4. Medidas de Soporte Vital y Manejo de la Hipertermia Maligna",
        "paragraphs": [
          "Control de la Fiebre: Medidas físicas activas de enfriamiento externo (compresas frías, mantas térmicas enfriadoras). Fármaco antipirético de elección: Paracetamol (Acetaminofén) 1 g cada 6 horas por vía oral o endovenosa.",
          "CONTRAINDICACIÓN CRÍTICA ABSOLUTA: LOS SALICILATOS (ASPIRINA / ÁCIDO ACETILSALICÍLICO). La aspirina compite fuertemente con la T4 y T3 por los sitios de unión en la globulina fijadora de tiroxina (TBG) y prealbúmina, desplazando las hormonas a su forma libre biológicamente activa en el torrente sanguíneo, lo que puede precipitar el colapso hemodinámico letal.",
          "Reanimación con Fluidos y Glucosa: Suero glucosado al 5% con suero fisiológico isotónico para reponer la deshidratación severa secundaria a hiperhidrosis, taquipnea y diarrea, y para compensar la depleción acelerada de glucógeno hepático."
        ]
      },
      {
        "subhead": "5. Tratamiento del Factor Desencadenante y Terapia de Salvataje",
        "paragraphs": [
          "Toda tormenta tiroidea obliga a una búsqueda microbiológica activa (hemocultivos, urocultivo, radiografía de tórax, PCR inflamatoria) e inicio empírico precoz de antibioticoterapia si se sospecha foco séptico.",
          "En pacientes refractarios al tratamiento farmacológico multimodal a las 24-48 horas o con falla hepática inducida por PTU, se recurre a plasmaféresis terapéutica (recambio plasmático terapéutico) para remover hormonas tiroideas unidas a proteínas, o tiroidectomía de salvataje de urgencia extrema."
        ]
      }
    ],
    "table": {
      "title": "Escala de Burch-Wartofsky Point Scale (BWPS) para Diagnóstico de Tormenta Tiroidea",
      "headers": [
        "Sistema Orgánico",
        "Criterio Clínico Evaluado",
        "Puntaje Asignado",
        "Interpretación Global"
      ],
      "rows": [
        [
          "Termorregulación",
          "37.2-37.7°C (5) / 37.8-38.2°C (10) / 38.3-38.8°C (15) / 38.9-39.4°C (20) / 39.5-39.9°C (25) / ≥40.0°C (30)",
          "5 a 30 puntos",
          "≥ 45 puntos:"
        ],
        [
          "Efectos en SNC",
          "Leve: agitación (10) / Moderado: delirio, psicosis, letargia extrema (20) / Severo: convulsiones o coma (30)",
          "10 a 30 puntos",
          "TORMENTA TIROIDEA"
        ],
        [
          "Disfunción Gastrointestinal",
          "Moderada: náuseas, vómitos, diarrea, dolor abdominal (10) / Severa: ictericia de causa inexplicable (20)",
          "10 a 20 puntos",
          "ALTAMENTE PROBABLE"
        ],
        [
          "Disfunción Cardiovascular",
          "FC 100-109 (5) / 110-119 (10) / 120-129 (15) / 130-139 (20) / ≥ 140 lpm (25)",
          "5 a 25 puntos",
          "25 a 44 puntos:"
        ],
        [
          "Arritmias e Insuficiencia Cardíaca",
          "Fibrilación auricular (10) / ICC leve (5) / ICC moderada con crépitos (10) / Edema pulmonar franco (15)",
          "5 a 25 puntos",
          "Tormenta Inminente"
        ],
        [
          "Factor Desencadenante",
          "Presencia de evento precipitante agudo identificado (infección, trauma, cirugía, parto, contraste)",
          "10 puntos",
          "< 25 puntos: Improbable"
        ]
      ]
    },
    "severityTable": {
      "title": "Monitoreo de Falla Orgánica y Metas Clínicas en UCI",
      "headers": [
        "Parámetro / Sistema",
        "Manifestación Crítica",
        "Meta de Reanimación UCI",
        "Intervención de Soporte Avanzado"
      ],
      "rows": [
        [
          "Hemodinámico",
          "Shock distributivo o cardiogénico, PAS < 90 mmHg",
          "PAM ≥ 65 mmHg, FC < 100 lpm",
          "Fluidos cristaloides, infusión norepinefrina si vasodilatación"
        ],
        [
          "Respiratorio",
          "Edema pulmonar agudo, PaO2/FiO2 < 200",
          "SatO2 ≥ 93%, control de sobrecarga",
          "Ventilación no invasiva / intubación según Glasgow y mecánica"
        ],
        [
          "Neurológico",
          "Delirio hiperactivo agitado, coma, convulsiones",
          "Glasgow 15, cese de convulsiones",
          "Sedación cuidadosa con dexmedetomidina, protección de vía aérea"
        ],
        [
          "Térmico",
          "Hipertermia maligna > 39.5°C",
          "Normotermia (36.5 - 37.5°C)",
          "Mantas frías, Paracetamol EV; NUNCA administrar Aspirina"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Farmacológico Multimodal Inmediato de Tormenta Tiroidea",
      "headers": [
        "Fármaco / Paso",
        "Dosis de Ataque y Mantenimiento",
        "Mecanismo Primario",
        "Consideración Crítica EUNACOM"
      ],
      "rows": [
        [
          "1. Betabloqueador",
          "Propranolol 60-80 mg c/4-6h oral/SNG (o 1 mg EV lento)",
          "Bloquea tono simpático y conversión T4->T3",
          "Primera acción para frenar taquiarritmias colapsantes"
        ],
        [
          "2. Tionamida",
          "Propiltiouracilo 500-1000 mg ataque, luego 250 mg c/4h",
          "Inhibe síntesis tiroidea y conversión periférica",
          "De elección sobre tiamazol; administrar ANTES que el yodo"
        ],
        [
          "3. Yoduro Inorgánico",
          "Solución de Lugol 8-10 gotas c/8h oral/SNG (o SSKI)",
          "Bloqueo agudo de liberación (Wolff-Chaikoff)",
          "OBLIGATORIO: Dar ≥ 1 hora DESPUÉS del PTU"
        ],
        [
          "4. Glucocorticoide",
          "Hidrocortisona 100 mg EV c/8h (o Dexametasona 2 mg c/6h)",
          "Trata hipocortisolismo relativo y bloquea T4->T3",
          "Previene colapso por agotamiento suprarrenal"
        ],
        [
          "5. Antipirético",
          "Paracetamol 1 g EV o enteral cada 6 horas",
          "Control térmico hipotalámico",
          "PROHIBIDA LA ASPIRINA (desplaza T4/T3 de TBG)"
        ]
      ]
    },
    "vignette": "Una paciente de 46 años con diagnóstico reciente de hipertiroidismo en tratamiento irregular con tiamazol es traída a urgencias en ambulancia por compromiso progresivo de conciencia y fiebre alta. Sus familiares relatan que hace 3 días inició tos productiva y disnea. Al examen físico se encuentra soporosa profunda, diaforética, con temperatura axilar de 39.8°C, PA 85/50 mmHg y FC 152 lpm arrítmica. El monitor muestra fibrilación auricular con respuesta ventricular rápida. Presenta bocio difuso grado II con soplo auscultable, crepitaciones bilaterales en bases pulmonares e ictericia escleral leve. El cálculo de la escala de Burch-Wartofsky arroja 75 puntos.",
    "explicacion": "La paciente presenta una Tormenta Tiroidea desencadenada por una infección respiratoria baja. Con un puntaje de Burch-Wartofsky de 75 puntos (claramente ≥ 45), la conducta es el traslado inmediato a UCI e instauración prioritaria de terapia médica combinada: 1) Propranolol o betabloqueador EV/oral para estabilización cardiovascular; 2) Propiltiouracilo a dosis altas por sonda; 3) Hidrocortisona endovenosa para tratar la insuficiencia suprarrenal relativa; y 4) Solución de Lugol administrada con al menos 1 hora de desfase respecto al PTU. La hipertermia debe manejarse con medios físicos y paracetamol, estando estrictamente prohibida la administración de ácido acetilsalicílico. Se debe iniciar cobertura antibiótica empírica para neumonía y reanimación hemodinámica.",
    "keyPoints": [
      "La Tormenta Tiroidea es una emergencia endocrinológica con alta mortalidad; su diagnóstico es CLÍNICO y se define operativamente con la Escala de Burch-Wartofsky ≥ 45 puntos.",
      "No se diferencia del hipertiroidismo común por la concentración absoluta de T4L/T3, sino por la falla sistémica multiorgánica (SNC, cardiovascular, termorregulación, digestivo).",
      "El tratamiento comprende 4 pilares obligatorios: Betabloqueadores + Tionamidas (PTU preferido) + Yodo inorgánico + Corticoides sistémicos.",
      "REGLA TEMPORAL CRÍTICA: El yodo inorgánico (Lugol o SSKI) debe administrarse al menos 60 minutos DESPUÉS del PTU para evitar el fenómeno de Jod-Basedow.",
      "El PTU es superior al tiamazol en la tormenta porque bloquea de forma rápida la conversión periférica de T4 a T3.",
      "La hidrocortisona EV (100 mg cada 8 horas) previene el colapso cardiovascular por agotamiento suprarrenal relativo y frena la desyodación periférica.",
      "CONTRAINDICACIÓN ESTRICTA: NUNCA administrar Aspirina (ácido acetilsalicílico), ya que desplaza a las hormonas tiroideas de la TBG y eleva catastróficamente la fracción libre.",
      "El antipirético de elección es el Paracetamol asociado a enfriamiento físico activo."
    ],
    "questions": [
      {
        "stem": "Una mujer de 50 años con hipertiroidismo de Graves no controlado consulta en el servicio de urgencias por fiebre de 39.5°C, agitación psicomotora, náuseas, vómitos profusos y palpitaciones taquicárdicas. El electrocardiograma muestra taquicardia sinusal a 145 lpm y la escala de Burch-Wartofsky arroja 60 puntos, confirmando una tormenta tiroidea. ¿Cuál de las siguientes secuencias y combinaciones de fármacos representa el manejo médico correcto?",
        "opciones": [
          "A) Administrar ácido acetilsalicílico 1 g EV de inmediato, seguido de tiamazol 10 mg oral",
          "B) Iniciar propranolol, propiltiouracilo a dosis altas, hidrocortisona endovenosa y posponer la solución de Lugol para administrarla al menos una hora después del propiltiouracilo",
          "C) Administrar solución de Lugol en bolo endovenoso inmediato y continuar con levotiroxina en infusión",
          "D) Indicar tiroidectomía total de urgencia en los primeros 30 minutos sin administración previa de fármacos",
          "E) Administrar radioyodo I-131 a dosis máxima como terapia ablativa urgente"
        ],
        "correcta": "B",
        "explicacion": "El tratamiento de la tormenta tiroidea debe ser multimodal e instaurado sin demora: 1) Betabloqueo enérgico (propranolol) para controlar la toxicidad adrenérgica; 2) Propiltiouracilo (PTU) para inhibir la síntesis hormonal folicular y bloquear la conversión periférica de T4 a T3; 3) Hidrocortisona endovenosa para compensar la insuficiencia suprarrenal relativa; y 4) Solución de Lugol o SSKI para bloquear la liberación de hormonas preformadas mediante el efecto Wolff-Chaikoff. Es una regla de seguridad estricta diferir el yoduro inorgánico al menos una hora después del PTU para evitar que la glándula lo utilice como sustrato para sintetizar más hormonas (efecto Jod-Basedow). Los salicilatos están contraindicados.",
        "recTag": "EUNACOM Diciembre 2022 (Q#11)"
      },
      {
        "stem": "En un paciente cursando una tormenta tiroidea con hipertermia severa de 40.2°C y compromiso sensorial en la unidad de cuidados intensivos, el residente de turno planea indicar un antipirético. ¿Cuál de los siguientes fármacos antipiréticos se encuentra FORMALMENTE CONTRAINDICADO por el riesgo inminente de incrementar las concentraciones plasmáticas de hormona tiroidea libre?",
        "opciones": [
          "A) Paracetamol",
          "B) Dipirona (Metamizol)",
          "C) Ácido acetilsalicílico (Aspirina)",
          "D) Ibuprofeno",
          "E) Ketorolaco"
        ],
        "correcta": "C",
        "explicacion": "El ácido acetilsalicílico (aspirina) y otros salicilatos están absolutamente contraindicados en el contexto de tirotoxicosis y tormenta tiroidea. Los salicilatos compiten con gran afinidad por los sitios de unión de la globulina fijadora de tiroxina (TBG) y la transtiretina, desplazando a la tiroxina (T4) y triyodotironina (T3) de su unión proteica y disparando de forma brusca las concentraciones séricas de T4 y T3 libres biológicamente activas. Esto intensifica la tormenta tiroidea y precipita colapso cardiovascular. El antipirético de elección es el Paracetamol junto a medios físicos.",
        "recTag": "EUNACOM Julio 2021 (Q#28)"
      },
      {
        "stem": "Un hombre de 45 años con antecedente de Enfermedad de Graves en abandono de tratamiento ingresa a urgencias con cuadro de shock distributivo, agitación extrema, diaforesis, ictericia y fibrilación auricular rápida a 160 lpm. Se diagnostica tormenta tiroidea con escala de Burch-Wartofsky de 65 puntos. ¿Cuál es el fundamento fisiopatológico fundamental por el cual se debe administrar Hidrocortisona endovenosa en el esquema inicial de rescate?",
        "opciones": [
          "A) Para tratar la insuficiencia suprarrenal relativa por incremento acelerado del metabolismo del cortisol y frenar la conversión periférica de T4 a T3",
          "B) Para inducir inmunosupresión inmediata de los anticuerpos TRAb en menos de 2 horas",
          "C) Para elevar la TSH hipofisaria y restablecer el asa de retroalimentación",
          "D) Para favorecer la captación folicular de yodo inorgánico",
          "E) Para evitar la hipoglicemia provocada por el propiltiouracilo"
        ],
        "correcta": "A",
        "explicacion": "En el estado de hipermetabolismo extremo que caracteriza a la tormenta tiroidea, la degradación y el clearance hepático de cortisol están fuertemente acelerados, superando la capacidad de reserva de la corteza suprarrenal para sintetizar glucocorticoides ('insuficiencia suprarrenal relativa'). La administración de hidrocortisona EV a dosis de estrés (100 mg cada 8 horas) es vital para prevenir el colapso hemodinámico letal secundario a hipocortisolismo, al mismo tiempo que ejerce un efecto sinérgico inhibitorio sobre la enzima 5'-desyodasa, bloqueando la conversión periférica de T4 a T3.",
        "recTag": "EUNACOM Diciembre 2019 (Q#15)"
      },
      {
        "stem": "En el protocolo de reanimación de la tormenta tiroidea, el orden cronológico de administración de los medicamentos es un aspecto técnico de máxima relevancia evaluado en EUNACOM. ¿Cuál es la razón biológica por la que se debe administrar el antitiroideo (propiltiouracilo) AL MENOS 60 minutos antes de administrar el yodo inorgánico (Lugol)?",
        "opciones": [
          "A) Para evitar una reacción anafiláctica alérgica al yodo mediada por IgE",
          "B) Para impedir que el yoduro exógeno sea utilizado como sustrato folicular para la síntesis de nuevas hormonas tiroideas (Fenómeno de Jod-Basedow)",
          "C) Porque el yodo inorgánico inactiva químicamente al propiltiouracilo en la luz gástrica",
          "D) Para asegurar la absorción duodenal previa del propranolol",
          "E) Para prevenir la nefropatía por contraste inducida por tionamidas"
        ],
        "correcta": "B",
        "explicacion": "La glándula tiroidea hiperactiva en una tormenta capta ávidamente cualquier molécula de yoduro presente en circulación. Si se administra yoduro inorgánico (solución de Lugol o SSKI) antes de haber bloqueado la peroxidasa tiroidea con una tionamida (propiltiouracilo), el exceso masivo de yodo sirve de sustrato directo para la organificación y síntesis de grandes cantidades adicionales de T4 y T3 (efecto Jod-Basedow), lo que agrava de forma letal la tirotoxicosis. Por ello, el PTU debe administrarse primero y esperar al menos una hora para que bloquee la maquinaria enzimática antes de ingresar el yodo que provocará el efecto Wolff-Chaikoff (inhibición de la liberación).",
        "recTag": "EUNACOM Diciembre 2017 (Q#33)"
      }
    ]
  },
  {
    "id": "endo-09",
    "classId": "endo-09",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Bloque 2 · Tirotoxicosis, Bocio, Nódulo y Cáncer de Tiroides",
    "topicLabel": "7.9",
    "title": "Nódulo Tiroideo, Clasificación ACR TI-RADS y Criterios de PAAF",
    "perfilCode": "1.04.1.003",
    "dx": "TSH sérica + Ecografía tiroidea de alta resolución estandarizada con sistema ACR TI-RADS o ATA",
    "tx": "Según resultado citológico Bethesda: Bethesda II (seguimiento ecográfico), Bethesda V/VI (cirugía oncológica), nódulos calientes (I-131/Cx)",
    "seg": "Control ecográfico a los 6-12 meses según categoría de riesgo ecográfico y estabilidad dimensional",
    "ges": "Sospecha fundada de cáncer de tiroides (Bethesda IV, V o VI) tiene acceso garantizado por GES Cáncer en personas de 15 años y más",
    "reconstrucciones": [
      "EUNACOM Diciembre 2023 (Q#29)",
      "EUNACOM Julio 2022 (Q#16)",
      "EUNACOM Diciembre 2021 (Q#44)",
      "EUNACOM Diciembre 2019 (Q#08)"
    ],
    "frecuencia": "MUY ALTA",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Nódulo Tiroideo: TSH, TI-RADS y Criterios PAAF",
    "contexto": "El nódulo tiroideo es una de las consultas más prevalentes en la práctica médica ambulatoria. Aunque hasta un 50-60% de las mujeres adultas asintomáticas presentan nódulos detectables por ecografía, solo el 5-10% corresponden a lesiones malignas (predominantemente carcinoma papilar). La misión fundamental del médico en la atención primaria y en EUNACOM consiste en estratificar el riesgo mediante un algoritmo riguroso que evite la sobreintervención de nódulos benignos indolentes y asegure el diagnóstico citológico oportuno de lesiones malignas mediante punción aspirativa con aguja fina (PAAF) guiada por ecografía.",
    "contentSections": [
      {
        "subhead": "1. Algoritmo Diagnóstico Inicial: El Rol Crucial de la TSH",
        "paragraphs": [
          "Ante el hallazgo clínico o incidental de un nódulo tiroideo ≥ 1 cm (o sospechoso), el PRIMER examen paraclínico obligatorio que se debe solicitar es la TSH sérica.",
          "Bifurcación Algorítmica Obligatoria: 1) Si la TSH está suprimida (< 0.4 mIU/L), la glándula está hiperfuncionante, por lo que el siguiente paso mandatorio es un Cintigrama Tiroideo (I-131 o Tc-99m) para determinar si el nódulo es 'caliente' (hipercaptante). Los nódulos calientes son autónomos y prácticamente NUNCA son malignos (< 1%), por lo que NO REQUIEREN PAAF, derivándose a tratamiento del hipertiroidismo; 2) Si la TSH es normal o elevada, el siguiente paso ineludible es la Ecografía Tiroidea de Alta Resolución con estratificación TI-RADS. NUNCA se solicita cintigrama si la TSH es normal."
        ]
      },
      {
        "subhead": "2. Clasificación Ecográfica ACR TI-RADS y Hallazgos de Alta Sospecha",
        "paragraphs": [
          "La ecografía es la modalidad de imagen de elección. El sistema ACR TI-RADS (Thyroid Imaging Reporting and Data System) asigna puntos a 5 características morfológicas: composición, ecogenicidad, forma, márgenes y focos ecogénicos.",
          "Signos Ecográficos de ALTA SOSPECHA de Malignidad (muy evaluados en EUNACOM): 1) Composición sólida o casi completamente sólida; 2) Marcada hipoecogenicidad (más oscuro que la musculatura pretiroidea); 3) Forma 'más alto que ancho' en plano transversal (eje anteroposterior mayor que transversal); 4) Márgenes irregulares, espiculados, microlobulados o extensión extratiroidea; 5) Microcalcificaciones puntiformes (< 1 mm sin sombra acústica, correspondientes a cuerpos de psamoma histológicos).",
          "Signos de Benignidad: Aspecto espongiforme (más del 50% de microquistes en panal de abejas), quiste simple anecoico puro, o nódulo hiperecoico/isoecoico con halo periférico fino continuo."
        ]
      },
      {
        "subhead": "3. Umbrales Milimétricos para Indicación de PAAF según ACR TI-RADS",
        "paragraphs": [
          "La Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía NO se indica en todos los nódulos; está sujeta a puntos de corte de tamaño dimensional estrictos para evitar sobrediagnósticos:",
          "TR1 (Benigno, 0 puntos) y TR2 (No sospechoso, 2 puntos): No requieren PAAF en ningún tamaño.",
          "TR3 (Levemente sospechoso, 3 puntos): PAAF solo si mide ≥ 2.5 cm (seguimiento ecográfico si ≥ 1.5 cm).",
          "TR4 (Moderadamente sospechoso, 4-6 puntos): PAAF si mide ≥ 1.5 cm (seguimiento ecográfico si ≥ 1.0 cm).",
          "TR5 (Altamente sospechoso, ≥ 7 puntos): PAAF si mide ≥ 1.0 cm (seguimiento si ≥ 0.5 cm). REGLA GENERAL EUNACOM: En ausencia de adenopatías sospechosas o factores de riesgo familiares/radiación, NUNCA se puncionan nódulos subcentimétricos (< 1.0 cm), incluso si presentan características ecográficas sospechosas."
        ]
      },
      {
        "subhead": "4. Clasificación Citológica de Bethesda y Conducta Clínica",
        "paragraphs": [
          "El informe citopatológico de la PAAF se estandariza universalmente según el Sistema de Bethesda:",
          "Bethesda I (No diagnóstica / Muestra insuficiente, riesgo CA 5-10%): Repetir PAAF guiada por ecografía.",
          "Bethesda II (Benigno: nódulo coloide, tiroiditis, riesgo CA 0-3%): Conducta expectante, control ecográfico en 12 a 24 meses. No requiere cirugía.",
          "Bethesda III (Atipia de significado indeterminado / AUS/FLUS, riesgo CA 10-30%): Repetir PAAF a los 3-6 meses o paneles de biología molecular (BRAF, RAS).",
          "Bethesda IV (Neoplasia folicular o sospecha de neoplasia folicular, riesgo CA 25-40%): La citología no puede distinguir entre adenoma folicular benigno y carcinoma folicular porque requiere evaluar invasión capsular o vascular en pieza quirúrgica completa. Conducta: Hemitiroidectomía (lobectomía con istmectomía) diagnóstica.",
          "Bethesda V (Sospechoso de malignidad, riesgo CA 50-75%): Cirugía resectiva (tiroidectomía total o lobectomía).",
          "Bethesda VI (Maligno: confirma carcinoma papilar, medular o anaplásico, riesgo CA 97-99%): Cirugía oncológica definitiva (tiroidectomía total +/- vaciamiento ganglionar)."
        ]
      },
      {
        "subhead": "5. Factores de Riesgo Clínico y Conducta en APS",
        "paragraphs": [
          "Factores de Alto Riesgo que aumentan la probabilidad de malignidad: Antecedente de radioterapia de cabeza y cuello en la infancia/adolescencia, historia familiar de carcinoma medular de tiroides o NEM 2 (MEN 2), crecimiento rápido e indoloro del nódulo, parálisis de cuerda vocal ipsilateral (disfonía por infiltración del nervio laríngeo recurrente) y presencia de adenopatías cervicales láterocervicales duras adheridas a planos profundos.",
          "Cualquier paciente con citología Bethesda IV, V o VI, o con adenopatías sospechosas, debe ser derivado con carácter prioritario mediante el AUGE/GES de Cáncer de Tiroides a Endocrinología y Cirugía de Cabeza y Cuello."
        ]
      }
    ],
    "table": {
      "title": "Sistema de Clasificación Ecográfica ACR TI-RADS y Puntos de Corte para PAAF",
      "headers": [
        "Categoría ACR",
        "Definición y Características Clave",
        "Riesgo de Malignidad",
        "Umbral para PAAF Guiada por Eco",
        "Umbral de Seguimiento Eco"
      ],
      "rows": [
        [
          "TR1 (Benigno)",
          "Quiste simple anecoico, nódulo completamente esponjoso",
          "< 2%",
          "No requiere PAAF",
          "No requiere seguimiento"
        ],
        [
          "TR2 (No sospechoso)",
          "Mixto quístico-sólido sin rasgos de sospecha, isoecoico",
          "< 2%",
          "No requiere PAAF",
          "No requiere seguimiento"
        ],
        [
          "TR3 (Leve sospecha)",
          "Sólido isoecoico o hiperecoico, márgenes lisos",
          "~5%",
          "PAAF si tamaño ≥ 2.5 cm",
          "Seguimiento si ≥ 1.5 cm"
        ],
        [
          "TR4 (Sospecha moderada)",
          "Sólido hipoecoico con márgenes lisos o microquístico sospechoso",
          "10 - 20%",
          "PAAF si tamaño ≥ 1.5 cm",
          "Seguimiento si ≥ 1.0 cm"
        ],
        [
          "TR5 (Alta sospecha)",
          "Hipoecoico sólido + más alto que ancho + microcalcificaciones",
          "70 - 90%",
          "PAAF si tamaño ≥ 1.0 cm",
          "Seguimiento si ≥ 0.5 cm"
        ]
      ]
    },
    "severityTable": {
      "title": "El Sistema Bethesda para Reporte de Citopatología Tiroidea (2023)",
      "headers": [
        "Categoría Bethesda",
        "Diagnóstico Citopatológico",
        "Riesgo Implícito de Malignidad",
        "Conducta Terapéutica Estándar EUNACOM"
      ],
      "rows": [
        [
          "Bethesda I",
          "No diagnóstica / Muestra insuficiente en tirocitos",
          "5 - 10%",
          "Repetir PAAF guiada por ecografía en 2-3 meses"
        ],
        [
          "Bethesda II",
          "Benigno (nódulo coloide macrofolicular / tiroiditis)",
          "0 - 3%",
          "Observación clínica y seguimiento ecográfico en 12-24 meses"
        ],
        [
          "Bethesda III",
          "Atipia de significado indeterminado (AUS / FLUS)",
          "10 - 30%",
          "Repetir PAAF a los 3-6 meses o test molecular (BRAF/RAS)"
        ],
        [
          "Bethesda IV",
          "Neoplasia folicular / Sospecha neoplasia folicular",
          "25 - 40%",
          "Hemitiroidectomía diagnóstica (lobectomía) para ver cápsula"
        ],
        [
          "Bethesda V",
          "Sospechoso de malignidad (sospecha papilar fuerte)",
          "50 - 75%",
          "Tiroidectomía total o lobectomía oncológica planificada"
        ],
        [
          "Bethesda VI",
          "Maligno (confirmación de carcinoma papilar/medular)",
          "97 - 99%",
          "Tiroidectomía total oncológica + vaciamiento si adenopatías"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Conducta Médica Escalonada según Tamaño, Imagen y Citología",
      "headers": [
        "Escenario Clínico",
        "Examen Indicado de Entrada",
        "Criterio Decisorio",
        "Conducta Terapéutica Final"
      ],
      "rows": [
        [
          "Nódulo palpado + TSH < 0.4",
          "Cintigrama Tiroideo I-131/Tc99",
          "Nódulo caliente hipercaptante",
          "NO puncionar; tratar hipertiroidismo (I-131/Cirugía)"
        ],
        [
          "Nódulo palpado + TSH normal",
          "Ecografía Tiroidea de Alta Resolución",
          "Evaluar criterios ACR TI-RADS",
          "PAAF guiada por eco según umbrales de tamaño"
        ],
        [
          "Nódulo TR5 de 1.4 cm",
          "PAAF guiada por ecografía",
          "Obtención de cilindro citológico",
          "Si Bethesda II observar; si Bethesda VI tiroidectomía"
        ],
        [
          "Nódulo TR5 de 0.7 cm sin adenopatías",
          "Seguimiento Ecográfico a 6-12 meses",
          "No cumple umbral PAAF (≥ 1.0 cm)",
          "Vigilancia activa; evitar sobrediagnóstico indolente"
        ],
        [
          "Nódulo con PAAF Bethesda IV",
          "Pabellón quirúrgico programado",
          "Necesidad de biopsia diferida",
          "Hemitiroidectomía para evaluar invasión vascular/capsular"
        ]
      ]
    },
    "vignette": "Una mujer de 44 años consulta a su médico de atención primaria porque mientras se aplicaba una crema hidratante en el cuello se palpó un nódulo indoloro en la base cervical anterior derecha. No tiene antecedentes de radiación en cabeza o cuello ni antecedentes familiares de cáncer de tiroides. Al examen físico se palpa un nódulo de aproximadamente 1.5 cm en el lóbulo tiroideo derecho, móvil con la deglución, no doloroso y sin adenopatías palpables. El médico solicita una TSH sérica que resulta en 1.85 mIU/L (eutiroidea). El siguiente paso es una ecografía tiroidea, la cual describe: nódulo sólido de 16 × 12 × 11 mm en lóbulo derecho, francamente hipoecogénico, con márgenes espiculados irregulares, microcalcificaciones internas puntiformes y una relación eje anteroposterior mayor que transversal ('más alto que ancho').",
    "explicacion": "El abordaje diagnóstico inicial fue impecable al solicitar la TSH. Al ser normal, la ecografía de alta resolución es el estudio de rigor. El nódulo presenta todas las características de máxima sospecha ecográfica de malignidad: composición sólida, hipoecogenicidad marcada, márgenes espiculados, microcalcificaciones y forma más alto que ancho, lo que suma más de 7 puntos clasificándolo como ACR TI-RADS 5 (TR5). Para los nódulos TR5, el umbral de tamaño para indicar punción aspirativa con aguja fina (PAAF) guiada por ecografía es de ≥ 1.0 cm. Dado que la lesión mide 1.6 cm, la conducta inmediata y obligatoria es realizar una PAAF guiada por ecografía para estudio citológico según el sistema Bethesda.",
    "keyPoints": [
      "Ante cualquier nódulo tiroideo sospechoso o ≥ 1 cm, el PRIMER examen obligatorio es la TSH sérica.",
      "Si la TSH está suprimida (< 0.4 mIU/L), se solicita Cintigrama Tiroideo; los nódulos 'calientes' prácticamente nunca son malignos y NO requieren PAAF.",
      "Si la TSH es normal o elevada, el estudio de rigor es la Ecografía Tiroidea de Alta Resolución con clasificación TI-RADS.",
      "Los 5 signos ecográficos de alta sospecha de malignidad son: nódulo sólido, hipoecogénico, márgenes irregulares, microcalcificaciones y más alto que ancho.",
      "Umbrales de tamaño para PAAF según ACR TI-RADS: TR5 ≥ 1.0 cm; TR4 ≥ 1.5 cm; TR3 ≥ 2.5 cm. Nódulos < 1.0 cm no se puncionan rutinariamente.",
      "La citología se informa según el Sistema Bethesda (I a VI). Bethesda II es benigno (seguimiento ecográfico), Bethesda VI es maligno (cirugía).",
      "Bethesda IV (Neoplasia folicular) NO puede distinguir en la PAAF entre adenoma y carcinoma (requiere ver invasión vascular o capsular en pieza quirúrgica); la conducta es Hemitiroidectomía diagnóstica.",
      "El carcinoma papilar de tiroides es la neoplasia endocrina maligna más frecuente (> 85-90% de los cánceres tiroideos) y se asocia a excelente pronóstico global."
    ],
    "questions": [
      {
        "stem": "Un hombre de 49 años se realiza un chequeo médico de medicina preventiva en el cual se pesquisa un nódulo tiroideo palpable de 1.8 cm en el polo inferior izquierdo. La TSH resulta en 2.1 mIU/L. La ecografía cervical informa un nódulo sólido, marcadamente hipoecogénico de 18 mm, con microcalcificaciones en su espesor y márgenes microlobulados, catalogado como ACR TI-RADS 5. No se identifican adenopatías patológicas. ¿Cuál es la conducta médica más adecuada a seguir?",
        "opciones": [
          "A) Solicitar un cintigrama tiroideo con Tecnecio-99m para evaluar captación",
          "B) Indicar Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía",
          "C) Iniciar tratamiento supresor con levotiroxina 100 mcg/día para reducir el tamaño del nódulo",
          "D) Indicar control ecográfico en 12 meses sin realizar biopsia",
          "E) Administrar una dosis empírica de radioyodo I-131"
        ],
        "correcta": "B",
        "explicacion": "En un paciente eutiroideo con un nódulo tiroideo que presenta características ecográficas de alta sospecha de malignidad (ACR TI-RADS 5: sólido, hipoecogénico, márgenes irregulares y microcalcificaciones) y cuyo diámetro mayor supera el umbral estandarizado de 1.0 cm (mide 1.8 cm), la conducta mandataria e inmediata es la realización de una Punción Aspirativa con Aguja Fina (PAAF) guiada por ecografía para categorización citológica según el sistema Bethesda. El cintigrama solo se solicita si la TSH estuviera suprimida, la terapia supresiva con levotiroxina está formalmente en desuso por ineficaz y riesgosa, y la observación diferiría el diagnóstico oncológico.",
        "recTag": "EUNACOM Diciembre 2023 (Q#29)"
      },
      {
        "stem": "Una mujer de 52 años consulta por un nódulo tiroideo solitario de 2.2 cm en el lóbulo derecho. Se solicita TSH que resulta en 0.05 mIU/L (suprimida) y T4 libre en 1.9 ng/dL. La paciente se encuentra oligoasintomática, con pulso de 88 lpm regular. ¿Cuál es el examen complementario de elección que debe realizarse a continuación para definir la conducta?",
        "opciones": [
          "A) Punción aspirativa con aguja fina (PAAF) de inmediato",
          "B) Resonancia magnética de cuello con contraste paramagnético",
          "C) Cintigrama tiroideo con I-131 o Tc-99m",
          "D) Determinación seriada de calcitonina sérica",
          "E) Tomografía computarizada de tórax y cuello"
        ],
        "correcta": "C",
        "explicacion": "En el algoritmo diagnóstico del nódulo tiroideo, si la TSH se encuentra suprimida (< 0.4 mIU/L), el siguiente examen mandatorio es el Cintigrama Tiroideo (gammagrafía). Su objetivo es demostrar si el nódulo es hipercaptante ('caliente') o no captante ('frío'). Los nódulos calientes corresponden a adenomas tóxicos o nódulos autónomos, los cuales poseen un riesgo de malignidad prácticamente nulo (< 1%) y por norma internacional NO deben ser sometidos a PAAF, pasando directamente a tratamiento del hipertiroidismo.",
        "recTag": "EUNACOM Julio 2022 (Q#16)"
      },
      {
        "stem": "Un paciente de 39 años es sometido a una PAAF guiada por ecografía de un nódulo tiroideo de 2.0 cm clasificado previamente como TI-RADS 4. El informe de la citopatología concluye: \"Categoría Bethesda IV: Neoplasia Folicular / Sospecha de Neoplasia Folicular\". El paciente no tiene antecedentes familiares ni factores de riesgo adicionales. ¿Cuál es la conducta terapéutica de elección indicada en este caso?",
        "opciones": [
          "A) Observación clínica con ecografía de control a los 6 meses",
          "B) Hemitiroidectomía (lobectomía más istmectomía) diagnóstica con estudio histopatológico definitivo diferido",
          "C) Tiroidectomía total inmediata más vaciamiento ganglionar cervical radical bilateral",
          "D) Tratamiento con radioyodo I-131 ambulatorio a dosis ablativa",
          "E) Repetir la PAAF inmediatamente con aguja de mayor calibre (tru-cut)"
        ],
        "correcta": "B",
        "explicacion": "La categoría Bethesda IV (neoplasia folicular o sospecha de neoplasia folicular) confiere un riesgo de malignidad intrínseco del 25 al 40%. La citología obtenida por PAAF solo permite visualizar la morfología celular folicular, pero es completamente incapaz de distinguir entre un Adenoma Folicular (benigno) y un Carcinoma Folicular (maligno), distinción que depende exclusivamente de demostrar invasión transcapsular o angioinvasión vascular en cortes histológicos de la pieza resecada en su totalidad. Por consiguiente, la conducta quirúrgica estándar es la Hemitiroidectomía (lobectomía tiroidea con istmectomía) para examen diferido. Solo si la biopsia definitiva confirma carcinoma invasor se programa la tiroidectomía total complementaria.",
        "recTag": "EUNACOM Diciembre 2021 (Q#44)"
      },
      {
        "stem": "Una mujer de 36 años consulta con el resultado de una ecografía tiroidea solicitada en el contexto de dolor cervical musculoesquelético. El informe describe un nódulo único en el lóbulo izquierdo de 7 mm de diámetro mayor, sólido, hipoecogénico, con márgenes irregulares espiculados y presencia de microcalcificaciones puntiformes centrales, compatible con ACR TI-RADS 5. El examen de cuello no palpa masas ni adenopatías regionales. La TSH es de 1.6 mIU/L. ¿Cuál es la conducta médica más apropiada?",
        "opciones": [
          "A) Realizar punción aspirativa con aguja fina (PAAF) de inmediato por tratarse de un nódulo sospechoso",
          "B) Indicar seguimiento ecográfico activo en 6 a 12 meses sin realizar PAAF en este momento",
          "C) Indicar tiroidectomía total profiláctica",
          "D) Indicar hemitiroidectomía izquierda urgente",
          "E) Solicitar cintigrama tiroideo urgente"
        ],
        "correcta": "B",
        "explicacion": "De acuerdo con las guías internacionales vigentes (ACR TI-RADS y guías ATA), los nódulos tiroideos subcentimétricos (< 1.0 cm), incluso cuando presentan características ecográficas altamente sospechosas de malignidad (categoría TI-RADS 5), NO deben ser sometidos rutinariamente a PAAF en ausencia de adenopatías cervicales patológicas, invasión extratiroidea macroscópica evidente o antecedentes de alto riesgo (como radiación infantil de cuello o historia familiar de carcinoma medular). La gran mayoría de los microcarcinomas papilares tienen un comportamiento biológico extremadamente indolente. Por tanto, la conducta correcta es la vigilancia ecográfica periódica para evitar el sobrediagnóstico y sobretratamiento quirúrgico innecesario.",
        "recTag": "EUNACOM Diciembre 2019 (Q#08)"
      }
    ]
  },
  {
    "id": "endo-10",
    "classId": "endo-10",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Bloque 2 · Tirotoxicosis, Bocio, Nódulo y Cáncer de Tiroides",
    "topicLabel": "7.10",
    "title": "Cáncer de Tiroides: Subtipos Histológicos y Manejo Oncológico",
    "perfilCode": "1.04.1.004",
    "dx": "Confirmación citológica por PAAF (Bethesda V/VI) o estudio histopatológico post-quirúrgico. Marcadores tumorales específicos",
    "tx": "Tiroidectomía total (+ vaciamiento ganglionar si linfonodos comprometidos) + Terapia ablativa con I-131 en diferenciados + Levotiroxina supresora",
    "seg": "Tiroglobulina sérica + Anticuerpos anti-tiroglobulina + Ecografía de cuello en diferenciados; Calcitonina y CEA en carcinoma medular",
    "ges": "GES N° 33 (Cáncer en personas de 15 años y más): Acceso a diagnóstico en 40 días, etapificación en 30 días y cirugía en 30 días post-indicación",
    "reconstrucciones": [
      "EUNACOM Diciembre 2022 (Q#48)",
      "EUNACOM Diciembre 2018 (Q#12)"
    ],
    "frecuencia": "ALTA",
    "svg": null,
    "algoTitle": "Manejo Comparado de Subtipos de Cáncer de Tiroides EUNACOM",
    "diagramRows": [
      {
        "k": "box",
        "t": "Confirmación de Malignidad Tiroidea (PAAF o Biopsia)",
        "s": "Etapificación ecográfica de cuello completa: ganglios compartimento central (VI) y lateral (II-V)",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "¿Cuál es el Subtipo Histopatológico?",
        "al": "Subtipo",
        "left": {
          "t": "Carcinoma Papilar / Folicular (Diferenciado)",
          "s": "90-95% casos · Cirugía resectiva + I-131 ablativo + TSH supresiva · Marcador: Tiroglobulina",
          "type": "acc"
        },
        "right": {
          "t": "Carcinoma Medular (Células C Parafoliculares)",
          "s": "5-7% casos · Deriva de cresta neural · Secreta Calcitonina y CEA · Descartar NEM 2 (Mutación RET)",
          "type": "dec"
        }
      },
      {
        "k": "split",
        "q": "¿Presenta Cáncer Anaplásico o Diferenciado Avanzado?",
        "al": "Conducta",
        "left": {
          "t": "Carcinoma Anaplásico (Indiferenciado)",
          "s": "1-2% casos · Crecimiento fulminante, invasión traqueal rápida · Mal pronóstico · Paliativo / RT",
          "type": "crit"
        },
        "right": {
          "t": "Seguimiento Oncológico Diferenciado",
          "s": "Ecografía de cuello anual + Tiroglobulina sérica estimulada (debe ser indetectable si curado)",
          "type": "acc"
        }
      }
    ],
    "contexto": "El cáncer de tiroides es la neoplasia maligna del sistema endocrino más prevalente en Chile y el mundo, afectando a mujeres jóvenes con una proporción 3:1 respecto a los hombres. En el 90-95% de los casos corresponde a carcinomas diferenciados del epitelio folicular (papilar y folicular), los cuales exhiben una sobrevida a 10 años superior al 95%. EUNACOM enfatiza sistemáticamente los 4 subtipos histológicos, sus vías de diseminación (linfática vs hematógena), los marcadores tumorales de seguimiento (Tiroglobulina vs Calcitonina), la asociación del carcinoma medular con Neoplasia Endocrina Múltiple (MEN 2/NEM 2) y el devastador curso del carcinoma anaplásico.",
    "contentSections": [
      {
        "subhead": "1. Espectro Histopatológico y Características de los 4 Subtipos",
        "paragraphs": [
          "Carcinoma Papilar de Tiroides (CPT): Corresponde al 85-90% de los casos. Es el más común y de mejor pronóstico. Histológicamente presenta papilas verdaderas, cuerpos de psamoma (calcificaciones concéntricas) y núcleos en vidrio esmerilado ('ojos de la huérfana Annie') con hendiduras y pseudoinclusiones nucleares. Su vía de diseminación primordial es la VÍA LINFÁTICA hacia los ganglios cervicales del compartimento central y lateral, lo que no empeora significativamente la sobrevida global.",
          "Carcinoma Folicular de Tiroides (CFT): Representa el 5-10% de los casos. Afecta a pacientes algo mayores y en áreas de déficit de yodo. Histológicamente simula folículos tiroideos normales. Su diseminación es predominantemente por VÍA HEMATÓGENA hacia pulmones y huesos (metástasis osteolíticas). No puede diagnosticarse por PAAF sola (requiere demostrar angioinvasión o rotura capsular en biopsia quirúrgica diferida).",
          "Carcinoma Medular de Tiroides (CMT): Representa el 3-5% de los casos. Se origina en las células C o parafoliculares derivadas de la cresta neural embrionaria, por lo que NO sintetiza tiroglobulina ni capta yodo radiactivo (el I-131 es completamente inútil). Secreta CALCITONINA (marcador diagnóstico y de seguimiento) y antígeno carcinoembrionario (CEA). El 25% es hereditario familiar formando parte de los síndromes NEM 2A o NEM 2B por mutaciones en el protooncogén RET (exige estudio genético a familiares de primer grado y descartar feocromocitoma antes de operar el cuello).",
          "Carcinoma Anaplásico (Indiferenciado): Afecta a adultos mayores (> 65-70 años), representando el 1-2%. Es una de las neoplasias más agresivas y letales de la medicina. Debuta como una masa cervical fija, pétrea, de crecimiento fulminante en semanas, que infiltra rápidamente tráquea, esófago y nervio recurrente (disfonía, estridor, disfagia). La sobrevida media es de solo 3 a 6 meses."
        ]
      },
      {
        "subhead": "2. Tratamiento Quirúrgico, Ablación con I-131 y TSH Supresiva",
        "paragraphs": [
          "Abordaje Quirúrgico Inicial: Tiroidectomía Total es el estándar oncológico en tumores > 4 cm, extensión extratiroidea, adenopatías cervicales o multifocalidad. En carcinomas papilares unifocales intratiroideos de bajo riesgo de 1 a 4 cm, la lobectomía tiroidea puede considerarse en centros especializados.",
          "Radioyodo I-131 Ablativo (Terapia Adyuvante): Indicado en carcinomas diferenciados (papilar y folicular) de riesgo intermedio y alto (compromiso ganglionar, invasión capsular extensa, márgenes positivos o metástasis a distancia). Su objetivo es destruir remanentes microscópicos de tejido tiroideo normal y metástasis ocultas, permitiendo que la tiroglobulina sirva como marcador de recidiva en sangre.",
          "Terapia de Supresión con Levotiroxina: Dado que las células del carcinoma diferenciado expresan receptores de TSH que promueven su proliferación celular, se administra levotiroxina en dosis suprafisiológicas para mantener la TSH suprimida: < 0.1 mIU/L en pacientes de alto riesgo y 0.1 a 0.5 mIU/L en pacientes de bajo-moderado riesgo."
        ]
      },
      {
        "subhead": "3. Seguimiento a Largo Plazo y Marcadores Tumorales",
        "paragraphs": [
          "En Carcinoma Diferenciado (Papilar y Folicular): El marcador tumoral de elección es la TIROGLOBULINA sérica, evaluada siempre en conjunto con los Anticuerpos Anti-Tiroglobulina (anti-Tg). La presencia de anti-Tg positivos falsea los niveles de tiroglobulina haciéndolos artificialmente bajos. En un paciente sometido a tiroidectomía total más ablación con I-131, la tiroglobulina debe ser prácticamente INDETECTABLE (< 0.2 ng/mL). Cualquier elevación persistente o progresiva indica recidiva tumoral o metástasis a distancia.",
          "Seguimiento por Imagen: Ecografía de cuello periódica anual para detectar precozmente adenopatías metastásicas en cadenas ganglionares cervicales.",
          "En Carcinoma Medular: El marcador tumoral es la CALCITONINA sérica y el CEA. El radioyodo y la supresión de TSH no tienen ningún rol terapéutico. El tratamiento es la tiroidectomía total obligatoria con vaciamiento ganglionar central profiláctico."
        ]
      }
    ],
    "table": {
      "title": "Comparativa Clínico-Patológica de los Subtipos de Cáncer de Tiroides en EUNACOM",
      "headers": [
        "Subtipo Histológico",
        "Frecuencia / Origen Celular",
        "Vía de Diseminación Predilecta",
        "Marcador Tumoral Sérico",
        "Respuesta a Radioyodo I-131"
      ],
      "rows": [
        [
          "Carcinoma Papilar",
          "85 - 90% / Células foliculares",
          "Vía Linfática (ganglios cervicales)",
          "Tiroglobulina (Tg)",
          "Excelente (capta I-131)"
        ],
        [
          "Carcinoma Folicular",
          "5 - 10% / Células foliculares",
          "Vía Hematógena (pulmón y hueso)",
          "Tiroglobulina (Tg)",
          "Buena (capta I-131)"
        ],
        [
          "Carcinoma Medular",
          "3 - 5% / Células C parafoliculares",
          "Linfática y hematógena precoz",
          "Calcitonina y CEA",
          "NULA (no deriva de folículo)"
        ],
        [
          "Carcinoma Anaplásico",
          "1 - 2% / Epitelio indiferenciado",
          "Invasión local destructiva rápida",
          "Ninguno confiable",
          "NULA (comportamiento refractario)"
        ]
      ]
    },
    "vignette": "Una mujer de 31 años fue sometida a una tiroidectomía total hace 1 año debido a un carcinoma papilar de tiroides de 2.8 cm que presentaba 2 adenopatías metastásicas microscópicas en el compartimento central (T2 N1a M0). Posteriormente recibió una dosis ablativa de 100 mCi de radioyodo I-131 y se encuentra en terapia con levotiroxina 150 mcg/día con TSH mantenida en 0.08 mIU/L. Acude a su control oncológico asintomática. En sus exámenes de sangre destaca tiroglobulina indetectable (< 0.1 ng/mL) con anticuerpos anti-tiroglobulina negativos y ecografía cervical sin adenopatías ni lesiones en el lecho tiroideo.",
    "explicacion": "La paciente se encuentra en excelente respuesta clínica completa (remisión oncológica). El carcinoma papilar de tiroides es el subtipo más frecuente y tiene un pronóstico sumamente favorable cuando se realiza tiroidectomía total y ablación adecuada. Dado que la tiroglobulina solo puede ser producida por tirocitos normales o células foliculares cancerosas, tras la tiroidectomía total y ablación con radioyodo, su concentración sérica debe ser indetectable. El valor de tiroglobulina indetectable (< 0.1 ng/mL) junto a anticuerpos anti-Tg negativos y ecografía de cuello limpia confirman la ausencia de enfermedad residual o recidiva tumoral.",
    "keyPoints": [
      "El Carcinoma Papilar es el cáncer de tiroides más frecuente (85-90%) y de mejor pronóstico; disemina característicamente por vía LINFÁTICA cervical.",
      "El Carcinoma Folicular disemina por vía HEMATÓGENA hacia pulmón y huesos (metástasis osteolíticas); no se diagnostica por PAAF sino por biopsia diferida.",
      "El Carcinoma Medular se origina en las células C o parafoliculares secretoras de CALCITONINA; NO capta radioyodo I-131.",
      "Ante el diagnóstico de carcinoma medular, es OBLIGATORIO descartar feocromocitoma antes de intervenir el cuello y realizar estudio de mutaciones en el gen RET (NEM 2).",
      "El Carcinoma Anaplásico es extremadamente agresivo, propio de adultos mayores, con crecimiento rápido invasivo y pronóstico ominoso en pocos meses.",
      "La Tiroglobulina es el marcador tumoral sérico de seguimiento del carcinoma diferenciado (papilar y folicular). Siempre debe solicitarse junto a los Anticuerpos Anti-Tiroglobulina.",
      "La presencia de anticuerpos anti-tiroglobulina puede falsear la medición de tiroglobulina dando falsos negativos en el seguimiento.",
      "La levotiroxina se administra a dosis supresivas para inhibir la TSH, ya que esta hormona actúa como factor de crecimiento tumoral para las células foliculares."
    ],
    "questions": [
      {
        "stem": "Una paciente de 45 años, previamente operada de tiroidectomía total y dosis ablativa de I-131 hace 2 años por un carcinoma papilar de tiroides, asiste a control anual de seguimiento oncológico. ¿Cuál es el examen de laboratorio principal que se debe solicitar en sangre para pesquisar precozmente una recidiva tumoral?",
        "opciones": [
          "A) Calcitonina sérica basal",
          "B) Tiroglobulina sérica en conjunto con anticuerpos anti-tiroglobulina",
          "C) Antígeno carcinoembrionario (CEA)",
          "D) TSH y T3 total",
          "E) Fosfatasas alcalinas óseas"
        ],
        "correcta": "B",
        "explicacion": "En el seguimiento de los carcinomas tiroideos diferenciados (papilar y folicular) tratados con tiroidectomía total y radioyodo ablativo, la Tiroglobulina (Tg) sérica es el marcador tumoral específico de excelencia. Dado que la glándula tiroidea fue resecada y ablacionada en su totalidad, la tiroglobulina circulante debe permanecer indetectable (< 0.2 ng/mL); su reaparición o incremento sostenido es indicativo de recidiva o persistencia tumoral. Es un principio fundamental solicitar siempre y de forma conjunta los Anticuerpos Anti-Tiroglobulina (anti-Tg), ya que si están presentes pueden interferir analíticamente con el ensayo inmunorradiométrico produciendo niveles falsamente indetectables de tiroglobulina.",
        "recTag": "EUNACOM Diciembre 2022 (Q#48)"
      },
      {
        "stem": "Un hombre de 38 años presenta un nódulo tiroideo de 2.5 cm cuya biopsia por punción confirma un Carcinoma Medular de Tiroides. El paciente refiere que su padre falleció a los 45 años por una causa no precisada asociada a crisis de cefalea e hipertensión severa. Previo a programar la cirugía de resección cervical, ¿cuál es la conducta diagnóstica de máxima prioridad que debe llevarse a cabo?",
        "opciones": [
          "A) Indicar una dosis terapéutica inmediata de radioyodo I-131",
          "B) Descartar la coexistencia de un feocromocitoma mediante metanefrinas plasmáticas o urinarias y realizar estudio genético de la mutación del protooncogén RET",
          "C) Administrar quimioterapia con cisplatino para reducir la masa antes de la tiroidectomía",
          "D) Indicar levotiroxina a dosis altas para suprimir la TSH a valores menores a 0.01 mIU/L",
          "E) Solicitar una cintigrafía con yodo radiactivo de cuerpo entero"
        ],
        "correcta": "B",
        "explicacion": "El Carcinoma Medular de Tiroides forma parte en el 25% de los casos de los síndromes de Neoplasia Endocrina Múltiple tipo 2 (NEM 2A y NEM 2B), transmitidos de forma autosómica dominante por mutaciones activadoras del protooncogén RET. La regla de oro y prioridad vital antes de someter a estos pacientes a cualquier acto quirúrgico tiroideo es DESCARTAR la presencia concomitante de un Feocromocitoma mediante la medición de metanefrinas libres en plasma o fraccionadas en orina de 24 horas. Si existe un feocromocitoma no diagnosticado, la inducción anestésica o la manipulación del cuello pueden desencadenar una crisis adrenérgica masiva fatal intraoperatoria. Si coexiste feocromocitoma, este debe resecarse SIEMPRE ANTES que la cirugía tiroidea.",
        "recTag": "EUNACOM Diciembre 2018 (Q#12)"
      }
    ]
  }
];

// Convert diagramRows to diagram SVG if present
bloque2.forEach(t => {
  if (t.diagramRows && !t.diagram) {
    t.diagram = flow(t.algoTitle || t.title, t.diagramRows);
  }
});

module.exports = { bloque2 };
