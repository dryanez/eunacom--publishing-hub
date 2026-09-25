// Clase 18.21 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tamizaje neonatal universal en Chile, pesquisa de hipotiroidismo congénito y fenilcetonuria, toma de muestra en papel filtro, levotiroxina y tamizaje auditivo',
      say: 'Bienvenidos a la clase sobre tamizaje neonatal universal en Chile, una de las políticas de salud pública más exitosas de nuestro país y un tema con preguntas de memoria muy precisas en el examen EUNACOM. En esta sesión aprenderemos el momento exacto y los requisitos de la toma de muestra de talón en papel filtro, dominaremos la confirmación y el tratamiento del hipotiroidismo congénito con levotiroxina, revisaremos la fisiopatología de la fenilcetonuria y fijaremos las bases del tamizaje auditivo. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Medicina preventiva perinatal',
      title: 'Historia Natural de los Errores Metabólicos sin Pesquisa Neonatal',
      nodes: [
        { id: 'asi', col: 0, row: 1, k: 'start', t: 'Neonato asintomático al nacer', s: 'La placenta materna depuró los metabolitos tóxicos y aportó hormonas durante la gestación' },
        { id: 'lac', col: 1, row: 1, k: 'mech', t: 'Inicio de alimentación láctea', s: 'La ingesta de proteínas aporta fenilalanina y cesa el aporte transplacentario de tiroxina' },
        { id: 'acu', col: 2, row: 1, k: 'risk', t: 'Acumulación tóxica silenciosa', s: 'Aumento progresivo de fenilalanina o déficit tisular de hormonas tiroideas sin signos clínicos' },
        { id: 'dan', col: 3, row: 1, k: 'alert', t: 'Daño neurológico irreversible', s: 'Aparición de microcefalia, cretinismo y retraso mental severo permanente e irrecuperable' },
      ],
      edges: [
        { from: 'asi', to: 'lac', label: 'nacimiento' },
        { from: 'lac', to: 'acu', label: 'metabolismo postnatal' },
        { from: 'acu', to: 'dan', label: 'ventana terapéutica cerrada' },
      ],
      steps: [
        {
          show: ['asi', 'lac'],
          note: 'Protección biológica materna transitoria e inicio lácteo',
          say: 'Al momento de nacer, el recién nacido con hipotiroidismo congénito o fenilcetonuria luce completamente sano y vigoroso debido a que la madre suplió las hormonas tiroideas y depuró los metabolitos a través de la placenta durante todo el embarazo.',
        },
        {
          show: ['acu', 'dan'],
          note: 'Deterioro silente irreversible y cierre de la ventana de rescate',
          say: 'Al iniciar la alimentación con leche materna o fórmula, la fenilalanina se acumula o la falta de tiroxina lesiona la mielinización cerebral de forma silente. Cuando los síntomas clínicos se hacen evidentes a los dos o tres meses, el daño intelectual ya es severo e irreversible.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Programa nacional ministerial',
      title: 'Programa Nacional de Pesquisa Neonatal en Chile: Principios Rectores',
      cards: [
        {
          title: 'Cobertura Universal Obligatoria',
          tag: 'Garantía para todos los recién nacidos del territorio chileno',
          kind: 'key',
          items: [
            {
              t: 'Pesquisa obligatoria en sector público y privado',
              d: 'Se aplica al cien por ciento de los recién nacidos vivos en maternidades públicas y clínicas privadas del país',
              say: 'El programa de tamizaje neonatal es de carácter universal y obligatorio en todo Chile, abarcando al cien por ciento de los recién nacidos tanto en hospitales públicos como en clínicas privadas.',
            },
            {
              t: 'Objetivo de salud pública fundamental',
              d: 'Detectar precozmente enfermedades metabólicas tratables antes de que produzcan discapacidad intelectual permanente',
              say: 'Su objetivo primordial es pesquisar en fase presintomática el hipotiroidismo congénito y la fenilcetonuria, permitiendo iniciar el tratamiento antes de que se instale el daño cerebral irreversible.',
            },
          ],
        },
        {
          title: 'Patologías Incluidas en el Programa Histórico Nacional',
          tag: 'Dos enfermedades endocrino metabólicas cardinales',
          kind: 'criteria',
          items: [
            {
              t: 'Hipotiroidismo Congénito (HC): Pesquisa mediante TSH',
              d: 'Cuantificación de tirotropina en sangre seca de talón; patología garantizada en el Régimen GES N° 34',
              say: 'La primera patología es el hipotiroidismo congénito, evaluado mediante la medición de la hormona tirotropina en sangre de talón, con cobertura integral garantizada por el régimen de salud.',
            },
            {
              t: 'Fenilcetonuria (PKU): Pesquisa de Fenilalanina',
              d: 'Detección de hiperfenilalaninemia mediante espectrometría de masas o método microbiológico de Guthrie',
              say: 'La segunda patología es la fenilcetonuria, pesquisada mediante la cuantificación directa de los niveles plasmáticos de fenilalanina en la misma tarjeta de papel filtro.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica y requisitos de laboratorio',
      title: 'Toma de Muestra de Talón en Papel Filtro: Momento y Requisito Biológico',
      cards: [
        {
          title: 'Momento Exacto Normado por el MINSAL',
          tag: 'Pregunta obligada de memorización en el examen',
          kind: 'key',
          items: [
            {
              t: 'Entre las cuarenta y cuarenta y ocho horas de vida',
              d: 'La toma se realiza idealmente al alta de la maternidad, nunca antes de las 40 horas ni después de las 72 horas',
              say: 'La norma técnica ministerial establece con rigor que la toma de sangre de talón debe realizarse estrictamente entre las cuarenta y cuarenta y ocho horas de vida, coincidiendo con el alta hospitalaria.',
            },
            {
              t: '¿Por qué no tomarla al momento del nacimiento?',
              d: 'En cordón umbilical la TSH sufre un pico fisiológico transitorio posparto que arroja falsos positivos masivos',
              say: 'Jamás debe tomarse de cordón umbilical ni en las primeras horas, ya que el estrés del nacimiento gatilla un alza fisiológica transitoria de tirotropina que causaría falsos positivos masivos.',
            },
          ],
        },
        {
          title: 'Requisito Biológico Indispensable para Fenilcetonuria',
          tag: 'Alimentación proteica previa por al menos 24 a 48 horas',
          kind: 'alert',
          items: [
            {
              t: 'Ingesta proteica láctea previa obligatoria',
              d: 'El neonato debe haber recibido leche materna o fórmula por un mínimo de 24 a 48 horas antes de la punción',
              say: 'Para que la fenilcetonuria pueda ser detectada, es un requisito biológico indispensable que el niño haya iniciado alimentación con leche por al menos veinticuatro a cuarenta y ocho horas previas.',
            },
            {
              t: 'Peligro de falsos negativos en pacientes en ayuno',
              d: 'Si el niño no ha comido proteínas no acumula fenilalanina en sangre, arrojando un resultado falsamente normal',
              say: 'Si el recién nacido se encuentra en ayunas o no ha ingerido proteínas, no habrá acumulado fenilalanina en sangre, arrojando un resultado falsamente negativo con graves consecuencias.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Endocrinología neonatal',
      title: 'Hipotiroidismo Congénito: Epidemiología y Etiología',
      cards: [
        {
          title: 'Epidemiología e Impacto Sanitario',
          tag: 'La causa prevenible más común de discapacidad intelectual',
          kind: 'key',
          items: [
            {
              t: 'Prevalencia en Chile: Uno por cada tres mil recién nacidos',
              d: 'Una de las tasas de incidencia más altas descritas en Latinoamérica, con leve predominio en sexo femenino',
              say: 'En Chile la incidencia de hipotiroidismo congénito es de aproximadamente uno por cada tres mil recién nacidos vivos, constituyendo la causa prevenible más frecuente de discapacidad cognitiva.',
            },
            {
              t: 'Presentación inicial asintomática en más del 95% de los casos',
              d: 'El examen físico en las primeras dos semanas de vida suele ser completamente normal en recién nacidos afectados',
              say: 'La inmensa mayoría de los recién nacidos con hipotiroidismo congénito no presenta ningún signo evidente al nacer, haciendo que el examen físico aislado sea totalmente insuficiente para detectarlo.',
            },
          ],
        },
        {
          title: 'Etiología Principal: Disgenesia Tiroidea',
          tag: 'Representa el ochenta y cinco por ciento de los casos',
          kind: 'criteria',
          items: [
            {
              t: 'Disgenesia tiroidea: Ectopia, atireosis e hipoplasia',
              d: 'La tiroides ectópica sublingual es la anomalía más común (60%), seguida de agenesia total e hipoplasia glandular',
              say: 'El ochenta y cinco por ciento de los casos se debe a una disgenesia tiroidea, siendo la tiroides ectópica en la base lingual la anomalía anatómica más habitual en la práctica clínica.',
            },
            {
              t: 'Dishormonogénesis tiroidea: Quince por ciento restante',
              d: 'Defectos enzimáticos hereditarios autosómicos recesivos en la síntesis de tiroxina; cursan con bocio neonatal',
              say: 'El quince por ciento restante corresponde a dishormonogénesis por defectos enzimáticos en la biosíntesis hormonal, cuadro que se transmite de forma autosómica recesiva y suele cursar con bocio.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de la sospecha tardía',
      title: 'Clínica del Hipotiroidismo Congénito sin Diagnóstico Precoz',
      cards: [
        {
          title: 'Banderas Rojas al Examen Físico a los Dos Meses',
          tag: 'Signos clásicos cuando se omitió el tamizaje de talón',
          kind: 'alert',
          items: [
            {
              t: 'Facies típica: Macroglosia y llanto ronco característico',
              d: 'Lengua engrosada que protruye de la boca, edema periorbitario y emisión de un llanto grave y ronco áspero',
              say: 'A los dos meses el lactante no pesquisado desarrolla la clásica facies mixedematosa con lengua aumentada de tamaño que asoma entre los labios y un llanto típicamente ronco y apagado.',
            },
            {
              t: 'Fontanela posterior amplia mayor a un centímetro',
              d: 'Retraso en el cierre de la fontanela lambdoidea mayor a 0.5 cm en recién nacidos de término',
              say: 'Destaca una fontanela posterior anormalmente amplia que supera el centímetro de diámetro, traduciendo un retraso severo en la osificación del esqueleto craneano infantil.',
            },
          ],
        },
        {
          title: 'Alteraciones Metabólicas, Digestivas y Cutáneas',
          tag: 'Enlentecimiento generalizado del metabolismo basal',
          kind: 'criteria',
          items: [
            {
              t: 'Constipación intestinal severa y hernia umbilical prominente',
              d: 'Disminución del peristaltismo colónico con retención fecal pertinaz e hipotonía de la pared abdominal',
              say: 'Presentan constipación pertinaz por hipomotilidad intestinal y una hernia umbilical prominente secundaria a la hipotonía marcada de los músculos rectos del abdomen.',
            },
            {
              t: 'Piel seca, fría, livedo reticularis e ictericia prolongada',
              d: 'Hipotermia, piel áspera descamativa y persistencia de ictericia indirecta más allá de las tres semanas',
              say: 'La piel se palpa fría, seca y moteada por vasoconstricción, asociándose frecuentemente a ictericia fisiológica prolongada por retardo en la maduración de las enzimas hepáticas.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Confirmación y rescate endocrino',
      title: 'Algoritmo de Rescate ante Pesquisa de Talón Alterada',
      nodes: [
        { id: 'tal', col: 0, row: 1, k: 'start', t: 'TSH elevada en papel filtro', s: 'Tirotropina en sangre de talón superior al punto de corte del laboratorio' },
        { id: 'lla', col: 1, row: 1, k: 'alert', t: 'Ubicación inmediata de familia', s: 'Contacto telefónico urgente en las primeras cuarenta y ocho horas' },
        { id: 'ven', col: 2, row: 1, k: 'good', t: 'Confirmación en sangre venosa', s: 'Extracción venosa inmediata de TSH y T4 libre para confirmación diagnóstica' },
        { id: 'lev', col: 3, row: 1, k: 'effect', t: 'Inicio de Levotiroxina oral', s: 'Inicio de reemplazo hormonal antes de los quince días de vida cumplidos' },
      ],
      edges: [
        { from: 'tal', to: 'lla', label: 'alerta de screening' },
        { from: 'lla', to: 'ven', label: 'citación urgente' },
        { from: 'ven', to: 'lev', label: 'TSH alta con T4 libre baja' },
      ],
      steps: [
        {
          show: ['tal', 'lla'],
          note: 'Detección en laboratorio de tamizaje y búsqueda activa del paciente',
          say: 'Si el resultado de la tirotropina en papel filtro supera el umbral de corte, el centro de pesquisa activa de inmediato la búsqueda telefónica y territorial de la familia para una citación médica de urgencia.',
        },
        {
          show: ['ven', 'lev'],
          note: 'Confirmación con sangre venosa e inicio terapéutico inmediato',
          say: 'Se toma de inmediato una muestra de sangre venosa para medir tirotropina y tiroxina libre. Si se confirma el hipotiroidismo, se inicia levotiroxina sódica oral antes de los quince días de vida para asegurar un desarrollo psicomotor totalmente normal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento hormonal sustitutivo',
      title: 'Tratamiento del Hipotiroidismo Congénito con Levotiroxina',
      cards: [
        {
          title: 'Dosificación y Administración de Levotiroxina Sódica',
          tag: 'Fármaco garantizado por las Garantías Explícitas en Salud (GES N° 34)',
          kind: 'pharma',
          items: [
            {
              t: 'Dosis inicial: Diez a quince microgramos por kilo día',
              d: 'Dosis elevada en el recién nacido para normalizar rápidamente la T4 libre en los primeros tres a cinco días',
              say: 'La dosis de inicio es de diez a quince microgramos por kilo día en toma única diaria, dosis proporcionalmente alta para lograr normalizar la tiroxina libre en menos de una semana.',
            },
            {
              t: 'Técnica de administración: Ayunas triturada con agua',
              d: 'Triturar el comprimido en una cucharita con unas gotas de leche materna o agua; jamás con sales de hierro ni soya',
              say: 'El comprimido debe triturarse finamente en una cuchara con unas gotas de agua o leche materna administrándose en ayunas, evitando mezclarse con suplementos de hierro que quelan el fármaco.',
            },
          ],
        },
        {
          title: 'Seguimiento y Metas Hormonales Estrictas',
          tag: 'Monitoreo mensual por endocrinología infantil',
          kind: 'criteria',
          items: [
            {
              t: 'Meta: Normalizar T4 libre precozmente y mantener TSH normal',
              d: 'Mantener la T4 libre en la mitad superior del rango normal para la edad durante todo el primer año de vida',
              say: 'El objetivo es mantener la tiroxina libre en la mitad superior del rango de referencia durante los primeros meses para garantizar un óptimo crecimiento neuronal y axonal.',
            },
            {
              t: 'Controles de laboratorio seriados mensuales',
              d: 'Control de TSH y T4 libre al mes del inicio y luego cada dos a tres meses durante los primeros tres años',
              say: 'Se efectúan controles hormonales mensuales durante el primer semestre ajustando la dosis según el aumento de peso corporal para evitar el hipotiroidismo subclínico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Error innato de los aminoácidos',
      title: 'Fenilcetonuria (PKU): Fisiopatología y Neurotoxicidad',
      cards: [
        {
          title: 'Déficit Enzimático y Bloqueo Metabólico',
          tag: 'Herencia autosómica recesiva clásica',
          kind: 'key',
          items: [
            {
              t: 'Mutación en gen de Fenilalanina Hidroxilasa (PAH)',
              d: 'Incapacidad enzimática hepática para transformar el aminoácido esencial fenilalanina en tirosina',
              say: 'La fenilcetonuria se produce por mutaciones autosómicas recesivas en la enzima fenilalanina hidroxilasa hepática, impidiendo la conversión normal de fenilalanina en tirosina.',
            },
            {
              t: 'Acumulación de fenilalanina y ácidos fenilpirúvico y fenilláctico',
              d: 'Niveles plasmáticos de fenilalanina mayores a 20 mg/dL cruzan la barrera cerebral bloqueando neurotransmisores',
              say: 'La fenilalanina acumulada compite por los transportadores cerebrales de aminoácidos neutros, bloqueando la síntesis de dopamina y serotonina y lesionando gravemente la mielina.',
            },
          ],
        },
        {
          title: 'Cuadro Clínico Clásico sin Tratamiento Oportuno',
          tag: 'Fenotipo característico descrito antes del screening',
          kind: 'alert',
          items: [
            {
              t: 'Discapacidad intelectual severa y microcefalia progresiva',
              d: 'Pérdida irreversible de puntos de coeficiente intelectual cada mes que se retrasa el inicio de la fórmula',
              say: 'Los niños no tratados sufren un retraso psicomotor severo y microcefalia progresiva, perdiendo irreversiblemente puntos de coeficiente intelectual cada mes que se posterga la dieta.',
            },
            {
              t: 'Olor a humedad o ratón mojado y piel hipopigmentada',
              d: 'Excreción de fenilacetato en orina y sudor; déficit de melanina por bloqueo en la síntesis de tirosina',
              say: 'Presentan un olor penetrante a humedad o ratón mojado en la orina y sudor por eliminación de ácido fenilacético, con tez pálida y ojos claros por falta de melanina.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Dietoterapia de precisión',
      title: 'Tratamiento Nutricional de la Fenilcetonuria',
      cards: [
        {
          title: 'Dieta Restricta en Fenilalanina para Toda la Vida',
          tag: 'La intervención que erradicó la discapacidad por PKU',
          kind: 'pharma',
          items: [
            {
              t: 'Fórmula médica especial libre de fenilalanina',
              d: 'Aporte de aminoácidos esenciales enriquecidos con tirosina, vitaminas y minerales garantizados por el Estado',
              say: 'El tratamiento consiste en una fórmula médica especial completamente libre de fenilalanina pero suplementada con tirosina, la cual es provista de forma gratuita y continua por el Estado.',
            },
            {
              t: 'Restricción estricta de alimentos proteicos naturales',
              d: 'Prohibición absoluta de carnes, pescados, huevos, lácteos y legumbres; aporte controlado de frutas y verduras',
              say: 'Se restringen rigurosamente todos los alimentos ricos en proteínas naturales como carnes, huevos y lácteos, calculando al gramo el aporte mínimo de fenilalanina indispensable.',
            },
          ],
        },
        {
          title: 'Monitorización de Niveles Plasmáticos de Fenilalanina',
          tag: 'Mantener niveles en rango seguro para evitar neurotoxicidad',
          kind: 'criteria',
          items: [
            {
              t: 'Rango terapéutico objetivo: Dos a seis miligramos por decilitro',
              d: 'Mediciones periódicas de fenilalaninemia mediante gotas de sangre en papel filtro enviadas al laboratorio',
              say: 'El seguimiento exige controles periódicos con gotas de sangre en papel filtro para asegurar que los niveles de fenilalanina se mantengan entre dos y seis miligramos por decilitro.',
            },
            {
              t: 'Mantenimiento del tratamiento durante la adultez y embarazo',
              d: 'La dieta debe mantenerse de por vida; en mujeres previene el síndrome de fenilcetonuria materna con cardiopatía fetal',
              say: 'La dieta debe mantenerse de por vida, siendo especialmente crítica en mujeres jóvenes para prevenir el síndrome de fenilcetonuria materna que causa malformaciones cardíacas fetales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Sensorial y neurodesarrollo',
      title: 'Tamizaje Auditivo Universal en el Recién Nacido',
      cards: [
        {
          title: 'Pesquisa Oportuna de la Hipoacusia Congénita',
          tag: 'Objetivo internacional: Detección antes de los tres meses',
          kind: 'key',
          items: [
            {
              t: 'Prevalencia: Uno a tres por cada mil recién nacidos sanos',
              d: 'La incidencia se multiplica por diez en prematuros extremos hospitalizados en unidades neonatales intensivas',
              say: 'La hipoacusia neurosensorial congénita afecta a uno a tres de cada mil recién nacidos sanos, aumentando a uno de cada cincuenta en prematuros internados en cuidados intensivos.',
            },
            {
              t: 'La regla del uno, tres y seis meses',
              d: 'Tamizaje antes del primer mes de vida, diagnóstico confirmatorio a los 3 meses e inicio de rehabilitación a los 6 meses',
              say: 'La regla internacional establece realizar el tamizaje antes del primer mes de vida, confirmar el diagnóstico antes de los tres meses e iniciar la intervención auditiva a los seis meses.',
            },
          ],
        },
        {
          title: 'Métodos Electrofisiológicos de Detección',
          tag: 'Emisiones otoacústicas y potenciales evocados auditivos',
          kind: 'criteria',
          items: [
            {
              t: 'Emisiones Otoacústicas (EOA): Tamizaje universal rápido',
              d: 'Prueba no invasiva automatizada que evalúa la integridad de las células ciliadas externas de la cóclea',
              say: 'Las emisiones otoacústicas constituyen el método de elección para el tamizaje universal rápido, evaluando de forma automatizada la respuesta de las células ciliadas de la cóclea.',
            },
            {
              t: 'Potenciales Evocados Auditivos de Tronco Encefálico (PEATC)',
              d: 'Obligatorios en recién nacidos de alto riesgo (prematuros, asfixia, hiperbilirrubinemia con recambio o uso de aminoglucósidos)',
              say: 'Los potenciales evocados auditivos de tronco cerebral son obligatorios en neonatos con factores de riesgo para pesquisar neuropatías auditivas del nervio coclear.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Programas de pesquisa en chile',
      title: 'Comparación de los Programas de Tamizaje Neonatal Universal en Chile',
      head: ['Patología Tamizada', 'Método Diagnóstico', 'Momento de Toma', 'Tratamiento Inmediato'],
      rows: [
        {
          cells: ['Hipotiroidismo Congénito', 'TSH en papel filtro de talón', '40 a 48 horas de vida', 'Levotiroxina sódica oral a 10-15 mcg/kg/d'],
          say: 'El hipotiroidismo congénito se tamiza con TSH de talón entre las cuarenta y cuarenta y ocho horas y se trata con levotiroxina sódica oral.',
        },
        {
          cells: ['Fenilcetonuria (PKU)', 'Fenilalanina en papel filtro', '40 a 48 horas (con lactancia)', 'Fórmula especial libre de fenilalanina'],
          say: 'La fenilcetonuria exige alimentación láctea previa y se trata de por vida con una fórmula médica completamente libre de fenilalanina.',
        },
        {
          cells: ['Hipoacusia congénita', 'Emisiones Otoacústicas (EOA)', 'Antes del alta o primer mes', 'Audífonos o implante coclear antes de 6 meses'],
          say: 'La hipoacusia congénita se pesquisa mediante emisiones otoacústicas antes del mes, habilitando audífonos o implante coclear precoz.',
        },
        {
          cells: ['Displasia de caderas', 'Radiografía de pelvis AP', 'A los tres meses de vida (GES)', 'Correas o arnés de Pavlik en menores de 6 meses'],
          say: 'La displasia del desarrollo de la cadera se tamiza con radiografía de pelvis a los tres meses y se corrige con correas de Pavlik.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo Nacional de Pesquisa Neonatal de Talón y Rescate Endocrinológico',
      say: 'Examinemos el algoritmo paso a paso para la toma de muestra de talón en la maternidad, el procesamiento ministerial y la conducta médica ante un resultado alterado.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.134',
      title: 'Momento de Toma de Muestra y Requisito en Fenilcetonuria',
      stem: 'En relación con el Programa Nacional de Pesquisa Neonatal de Errores Innatos del Metabolismo en Chile, ¿cuál es el momento exacto normado por el MINSAL para la toma de la muestra de sangre de talón en papel filtro y cuál es el requisito biológico indispensable para la pesquisa de Fenilcetonuria?',
      options: [
        { letter: 'A', text: 'Inmediatamente al corte del cordón umbilical en sala de partos, antes de la primera mamada' },
        { letter: 'B', text: 'Entre las 40 y 48 horas de vida (al alta de maternidad), habiendo recibido alimentación láctea por al menos 24 a 48 horas' },
        { letter: 'C', text: 'A los 30 días de vida en el primer control de salud infantil del CESFAM' },
        { letter: 'D', text: 'A las 12 horas de vida en ayunas estricto de agua y leche' },
        { letter: 'E', text: 'Solo si el recién nacido presenta ictericia o letargia clínica' },
      ],
      correct: 'B',
      explanation: 'La norma técnica del Ministerio de Salud de Chile establece que la toma de sangre de talón en papel filtro debe realizarse entre las 40 y 48 horas de vida (coincidiendo con el alta de la maternidad). En el caso de la Fenilcetonuria (PKU), es un requisito biológico indispensable que el recién nacido haya recibido alimentación con leche materna o fórmula por un mínimo de 24 a 48 horas para que los niveles de fenilalanina plasmática alcancen valores medibles, evitando falsos negativos catastróficos.',
      say: {
        stem: 'Pregunta sobre el momento normado por el ministerio para la toma de sangre de talón en papel filtro y el requisito indispensable para fenilcetonuria.',
        question: '¿Cuál es el momento exacto y el requisito biológico necesario?',
        options: 'La opción A en cordón umbilical. La B entre las cuarenta y cuarenta y ocho horas habiendo recibido alimentación láctea por al menos veinticuatro a cuarenta y ocho horas. La C a los treinta días. La D a las doce horas en ayunas. La E solo en sintomáticos. Recuerda la norma técnica nacional. Piénsalo.',
        answer: 'La respuesta correcta es la B. La muestra se toma entre las cuarenta y cuarenta y ocho horas con alimentación láctea previa de al menos un día.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.134',
      title: 'Diagnóstico Confirmatorio y Manejo en Sospecha de Hipotiroidismo',
      stem: 'Un lactante de 2 meses no tuvo tamizaje de talón al nacer. Es evaluado en APS por constipación severa. Al examen se observa somnoliento, con piel seca y fría, llanto ronco, fontanela posterior abierta de 2 cm, macroglosia y una hernia umbilical evidente. La sospecha clínica apunta a Hipotiroidismo Congénito.',
      question: '¿Cuál es el examen confirmatorio de elección y el tratamiento que debe iniciarse de inmediato?',
      options: [
        { letter: 'A', text: 'Ecografía de tiroides exclusiva; indicar fórmula enriquecida con yodo' },
        { letter: 'B', text: 'TSH y T4 libre en sangre venosa; iniciar Levotiroxina oral a 10-15 mcg/kg/día' },
        { letter: 'C', text: 'Anticuerpos anti-TPO en saliva; iniciar Metimazol oral' },
        { letter: 'D', text: 'Cintigrama de tiroides con I-131 previo a cualquier tratamiento' },
        { letter: 'E', text: 'Punción aspiración de tiroides con aguja fina y tiroidectomía total' },
      ],
      correct: 'B',
      explanation: 'Ante la sospecha clínica tardía de Hipotiroidismo Congénito (facies con macroglosia, llanto ronco, fontanela posterior amplia, hernia umbilical y constipación pertinaz), el examen confirmatorio estándar e ineludible es la medición de TSH y T4 libre en sangre venosa. Confirmado el cuadro (TSH muy elevada con T4 libre baja), se debe iniciar inmediatamente tratamiento con Levotiroxina sódica oral a dosis de 10 a 15 microgramos por kilo día en ayunas, patología garantizada por las Garantías Explícitas en Salud (GES N° 34) para prevenir un retraso mental irreversible.',
      say: {
        stem: 'Lactante de dos meses sin tamizaje con macroglosia llanto ronco fontanela posterior amplia y hernia umbilical con sospecha de hipotiroidismo.',
        question: '¿Cuál es el examen confirmatorio de elección y el tratamiento que debe iniciarse de inmediato?',
        options: 'La opción A ecografía de tiroides y yodo. La B tirotropina y tiroxina libre en sangre venosa con inicio de levotiroxina oral a diez a quince microgramos por kilo día. La C anticuerpos en saliva y metimazol. La D cintigrama antes de tratar. La E punción con aguja fina. Prioriza la confirmación funcional. Piénsalo.',
        answer: 'La respuesta correcta es la B. Se confirma con tirotropina y tiroxina libre en sangre venosa y se inicia de inmediato levotiroxina sódica oral.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Tamizaje Neonatal',
      cards: [
        {
          title: 'Momento y Requisitos del Talón',
          tag: 'Memorización estricta de normas técnicas',
          kind: 'key',
          items: [
            {
              t: 'Muestra de talón entre las 40 y 48 horas de vida',
              d: 'Nunca tomar en cordón por falsos positivos de TSH; exigir ingesta láctea previa de al menos 24 horas para PKU',
              say: 'Recuerden que la sangre de talón se toma entre las cuarenta y cuarenta y ocho horas de vida habiendo comido leche previamente.',
            },
            {
              t: 'Levotiroxina a 10 a 15 mcg/kg/día antes de los 15 días',
              d: 'El tratamiento oportuno del hipotiroidismo congénito asegura un desarrollo cognitivo e intelectual cien por ciento normal',
              say: 'La levotiroxina a diez a quince microgramos por kilo día iniciada antes de los quince días de vida garantiza un intelecto normal.',
            },
          ],
        },
        {
          title: 'Fenilcetonuria y Tamizaje Auditivo',
          tag: 'Prevención integral de secuelas sensoriales y cognitivas',
          kind: 'pharma',
          items: [
            {
              t: 'Fórmula libre de fenilalanina de por vida en PKU',
              d: 'Evita la microcefalia y el retraso mental severo; olor a ratón mojado y piel clara en casos no tratados',
              say: 'La fenilcetonuria exige fórmula sin fenilalanina de por vida para evitar el daño cerebral y el clásico olor a ratón mojado.',
            },
            {
              t: 'Regla del 1, 3 y 6 meses en tamizaje auditivo',
              d: 'Pesquisa al mes con EOA, confirmación diagnóstica a los 3 meses y rehabilitación con audífonos a los 6 meses',
              say: 'En audición recuerden la regla de uno, tres y seis meses. Si te llevas una sola idea de hoy: el tamizaje neonatal en papel de filtro para fenilcetonuria e hipotiroidismo se toma obligatoriamente a las cuarenta horas de vida para evitar falsos negativos. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Nacional de Pesquisa Neonatal de Talón, Confirmación y Rescate Endocrinológico',
    root: N(
      'start',
      'Recién Nacido en Maternidad: Cumplimiento de 40 a 48 Horas de Vida con Alimentación Láctea',
      'Punción de cara lateral externa del talón con lanceta y llenado de círculos de papel filtro estandarizado',
      'Iniciamos el protocolo tomando la muestra de sangre en papel filtro al cumplir cuarenta a cuarenta y ocho horas de vida.',
      [
        'Procesamiento en Laboratorio Central de Tamizaje Metabólico',
        N(
          'q',
          '¿Resultado del análisis de TSH y Fenilalanina en sangre seca?',
          'Cuantificación hormonal y de aminoácidos con puntos de corte validados',
          'El laboratorio central procesa la muestra analizando tirotropina y concentración de fenilalanina.',
          [
            'TSH sobre el punto de corte (Sospecha de Hipotiroidismo Congénito)',
            N(
              'alert',
              'Ubicación Urgente de Familia y Confirmación en Sangre Venosa',
              'Llamado telefónico inmediato · Extracción de TSH y T4 libre en sangre venosa · Si se confirma: Levotiroxina sódica oral a 10-15 mcg/kg/día antes de 15 días (GES N° 34)',
              'Ante tirotropina elevada en el talón se cita de inmediato para confirmar con sangre venosa e iniciar levotiroxina precoz.',
            ),
          ],
          [
            'Fenilalanina sobre el punto de corte (Sospecha de Fenilcetonuria)',
            N(
              'alert',
              'Derivación Inmediata a Centro de Enfermedades Metabólicas',
              'Confirmación cromatográfica de aminoácidos plasmáticos · Inicio inmediato de fórmula especial sin fenilalanina y seguimiento nutricional estricto de por vida',
              'Ante fenilalanina elevada derivamos de inmediato para confirmar con cromatografía e iniciar fórmula libre de fenilalanina.',
            ),
          ],
          [
            'Resultados de TSH y Fenilalanina en rangos normales',
            N(
              'ok',
              'Control de Salud Infantil Habitual en Atención Primaria (CESFAM)',
              'Registro en carné de salud infantil · Continuar controles sanos regulares · No requiere repetición del examen si no hay factores de riesgo especiales',
              'Si ambos resultados son normales se registran en el carné infantil y se continúa con los controles de salud habituales.',
            ),
          ],
        ),
      ],
    ),
  },
};
