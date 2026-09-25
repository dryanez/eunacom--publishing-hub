// Clase 20.10 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Patología vulvar y glándula de Bartolino, quiste versus absceso agudo con marsupialización y liquen escleroso con clobetasol tópico',
      say: 'Bienvenidos a la clase sobre patología vulvar y afecciones de la glándula de Bartolino, dos temas de altísima frecuencia en el examen EUNACOM. En esta sesión aprenderemos a distinguir con claridad un quiste indoloro de un absceso agudo que exige drenaje quirúrgico formal con marsupialización o catéter de Word, y dominaremos el diagnóstico clínico y tratamiento del liquen escleroso vulvar con corticoides tópicos ultrapotentes, recordando siempre su riesgo latente de degeneración neoplásica hacia carcinoma epidermoide. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecánica glandular y sobreinfección',
      title: 'Fisiopatología de la Patología de la Glándula de Bartolino',
      nodes: [
        { id: 'obs', col: 0, row: 1, k: 'start', t: 'Obstrucción del conducto', s: 'Oclusión mecánica del ostium excretor por tapón mucoso o proceso inflamatorio previo' },
        { id: 'qui', col: 1, row: 1, k: 'effect', t: 'Quiste de Bartolino', s: 'Retención de mucus estéril, dilatación no inflamatoria, indolora y renitente' },
        { id: 'sob', col: 2, row: 1, k: 'mech', t: 'Sobreinfección bacteriana', s: 'Colonización polimicrobiana por anaerobios entéricos, estafilococo o gonococo' },
        { id: 'abs', col: 3, row: 1, k: 'alert', t: 'Absceso de Bartolino', s: 'Colección purulenta a tensión, eritema marcado, calor y dolor vulvar invalidante' },
      ],
      edges: [
        { from: 'obs', to: 'qui', label: 'acumulación estéril' },
        { from: 'qui', to: 'sob', label: 'ingreso de patógenos' },
        { from: 'sob', to: 'abs', label: 'abscedación' },
      ],
      steps: [
        {
          show: ['obs', 'qui'],
          note: 'Oclusión ductal y formación del quiste simple',
          say: 'Las glándulas de Bartolino desembocan en el introito posterior a las cuatro y ocho del reloj para lubricar la vulva. La obstrucción del conducto por detritos o microtraumas retiene el mucus estéril formando un quiste liso, renitente e indoloro que no presenta signos inflamatorios locales.',
        },
        {
          show: ['sob', 'abs'],
          note: 'Contaminación polimicrobiana y formación del absceso',
          say: 'Si el quiste o la glándula se colonizan por bacterias de la flora entérica perineal como Escherichia coli o anaerobios, se desencadena una infección supurada aguda a tensión: el absceso de Bartolino, caracterizado por dolor vulvar paroxístico que impide caminar y sentarse.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Masa vulvar indolora',
      title: 'Quiste de Bartolino: Clínica, Diagnóstico y Conducta',
      cards: [
        {
          title: 'Características Clínicas del Quiste',
          tag: 'Asintomático y no inflamatorio',
          kind: 'key',
          items: [
            {
              t: 'Ubicación anatómica en tercio posterior',
              d: 'Masa redondeada en el tercio inferior del labio mayor en posición de 4 u 8 horas del reloj',
              say: 'El quiste de Bartolino se palpa como una tumoración redondeada, móvil y renitente localizada de forma característica en el espesor del tercio posterior del labio mayor, orientada anatómicamente en la posición horaria de las cuatro o las ocho del introito vaginal.',
            },
            {
              t: 'Ausencia total de dolor y eritema',
              d: 'Piel circundante de aspecto normal sin calor local; puede causar molestia mecánica leve',
              say: 'El rasgo semiológico cardinal del quiste de Bartolino es que no duele en absoluto a la palpación ni presenta eritema o calor local en la piel suprayacente, manifestándose típicamente como una molestia física mecánica o asimetría vulvar cuando alcanza un volumen considerable.',
            },
          ],
        },
        {
          title: 'Conducta Médica y Sospecha Oncológica',
          tag: 'Manejo según síntomas y edad',
          kind: 'criteria',
          items: [
            {
              t: 'Manejo expectante versus quirúrgico',
              d: 'Observación si es pequeño y asintomático; marsupialización electiva si produce molestias',
              say: 'Si el quiste es pequeño y asintomático la conducta es la simple observación periódica. Si genera interferencia al caminar o durante el coito, se programa una marsupialización electiva.',
            },
            {
              t: '¡Alerta de cáncer en mujeres postmenopáusicas!',
              d: 'Toda masa en la glándula de Bartolino en mayores de 40 a 50 años exige biopsia o escisión',
              say: 'En mujeres mayores de cuarenta o cincuenta años la aparición de una masa en la glándula de Bartolino es infrecuente y obliga a descartar un adenocarcinoma glandular mediante biopsia o escisión completa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia infecciosa vulvar',
      title: 'Absceso de Bartolino: Bartonolitis Aguda y Presentación Clínica',
      cards: [
        {
          title: 'Cuadro Clínico Agudo e Invalidante',
          tag: 'Dolor paroxístico y fluctuación',
          kind: 'alert',
          items: [
            {
              t: 'Dolor vulvar severo que impide sentarse',
              d: 'Dolor urente y pulsátil progresivo que empeora al apoyar la pelvis o con la marcha',
              say: 'La paciente consulta en el servicio de urgencia por un dolor vulvar lancinante, pulsátil y de rápida instauración que le impide adoptar la posición sentada y la obliga a deambular con marcada dificultad adoptando una marcha antálgica con las piernas abiertas.',
            },
            {
              t: 'Tumoración inflamatoria fluctuante',
              d: 'Masa tumefacta, muy caliente, intensamente eritematosa y exquisitamente sensible a la palpación',
              say: 'Al examen ginecológico se aprecia una masa voluminosa, intensamente eritematosa, caliente al tacto y de extrema sensibilidad dolorosa, la cual exhibe una clara fluctuación central indicativa de pus purulento acumulado a gran tensión dentro de la cavidad glandular.',
            },
          ],
        },
        {
          title: 'Etiología Polimicrobiana',
          tag: 'Flora mixta perineal',
          kind: 'key',
          items: [
            {
              t: 'Microbiología habitual entérica y vaginal',
              d: 'Predominio de Escherichia coli, Bacteroides, Staphylococcus aureus y flora anaerobia mixta',
              say: 'La gran mayoría de los abscesos obedecen a una sobreinfección oportunista por bacterias entéricas y anaerobias perineales, participando de forma menos común gonococos o clamidias.',
            },
            {
              t: 'Antibioticoterapia complementaria seleccionada',
              d: 'Solo indicada si existe celulitis perilesional extensa, fiebre sistémica o inmunosupresión',
              say: 'Los antibióticos orales como amoxicilina con ácido clavulánico o cefadroxilo se reservan como complemento solo si existe celulitis extensa circundante, fiebre o en pacientes inmunodeprimidas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica quirúrgica y trampas',
      title: 'Tratamiento del Absceso de Bartolino: Marsupialización y Catéter de Word',
      cards: [
        {
          title: 'Procedimiento Estándar de Elección',
          tag: 'Marsupialización quirúrgica',
          kind: 'key',
          items: [
            {
              t: 'Incisión amplia y eversión de bordes',
              d: 'Incisión longitudinal en la mucosa vestibular, evacuación del pus, lavado y fijación con sutura',
              say: 'La marsupialización consiste en realizar una incisión elíptica en la mucosa vestibular sobre la cara interna del absceso, evacuar completamente la colección purulenta, lavar la cavidad y eversar suturando los bordes de la cápsula glandular a la mucosa con puntos absorbibles para mantenerla permanentemente abierta.',
            },
            {
              t: 'Creación de un nuevo ostium permanente',
              d: 'Garantiza el drenaje continuo impidiendo que la herida cierre en falso y vuelva a infectarse',
              say: 'Esta técnica quirúrgica confecciona un nuevo orificio o estoma glandular definitivo que drena libremente hacia el vestíbulo, preservando la función de lubricación y erradicando de forma categórica el riesgo de reacumulación bacteriana y recidiva a largo plazo.',
            },
          ],
        },
        {
          title: 'Catéter de Word y Prohibición de Punción',
          tag: 'Reglas de oro EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Catéter de Word como alternativa ambulatoria',
              d: 'Sonda con balón insuflado con suero que permanece cuatro semanas para epitelizar el conducto',
              say: 'Una alternativa eficaz es el catéter de Word: se introduce una pequeña sonda con balón insuflado con suero que se mantiene cuatro semanas hasta epitelizar un nuevo trayecto fistuloso.',
            },
            {
              t: '¡Prohibida la punción simple con aguja!',
              d: 'La aspiración o punción con aguja tiene una tasa de recidiva superior al noventa por ciento',
              say: 'Graben esta prohibición absoluta de examen: jamás se debe realizar punción o aspiración simple con aguja, pues la cavidad se sella en pocas horas recidivando el absceso en casi todos los casos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Dermatosis autoinmune vulvar',
      title: 'Liquen Escleroso Vulvar: Prurito Crónico y Morfología en Ocho',
      cards: [
        {
          title: 'Fisiopatología y Perfil de Paciente',
          tag: 'Inflamación linfocítica crónica',
          kind: 'key',
          items: [
            {
              t: 'Población diana postmenopáusica',
              d: 'Afecta predominantemente a mujeres climatéricas y postmenopáusicas mediado por autoinmunidad',
              say: 'El liquen escleroso es una dermatosis inflamatoria crónica autoinmune mediada por linfocitos T, cuya incidencia máxima se concentra en mujeres después de la menopausia.',
            },
            {
              t: 'Prurito vulvar intratable de larga evolución',
              d: 'Prurito quemante y desesperante de meses o años de duración que interrumpe el descanso nocturno',
              say: 'El síntoma cardinal e indiscutible del liquen escleroso es un prurito vulvar crónico desesperante e intratable de meses o años de evolución, que típicamente no cede con cremas antifúngicas habituales y llega a perturbar gravemente el descanso nocturno de la mujer.',
            },
          ],
        },
        {
          title: 'Morfología Patognomónica en Papel Apergaminado',
          tag: 'Patrón en cerradura o en ocho',
          kind: 'alert',
          items: [
            {
              t: 'Placas blanquecinas nacaradas atróficas',
              d: 'Piel adelgazada, nacarada y arrugada con aspecto clásico en papel de cigarrillo o pergamino',
              say: 'A la inspección minuciosa se aprecian placas blanquecinas nacaradas y brillantes con atrofia epidérmica muy marcada, adquiriendo el tegumento vulvar un aspecto arrugado, frágil y apergaminado que se compara clásicamente con el papel de cigarrillo.',
            },
            {
              t: 'Distribución en ocho y borramiento anatómico',
              d: 'Rodea vulva y ano respetando vagina; borra labios menores y encapucha el clítoris',
              say: 'Las lesiones dibujan un patrón clásico en forma de ocho o cerradura rodeando vulva y periné sin afectar la vagina, produciendo borramiento de labios menores y estenosis progresiva del introito.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento y riesgo oncológico',
      title: 'Liquen Escleroso: Manejo con Clobetasol y Riesgo de Cáncer de Vulva',
      cards: [
        {
          title: 'Terapia de Elección con Corticoide Ultrapotente',
          tag: 'Propionato de clobetasol tópico',
          kind: 'pharma',
          items: [
            {
              t: 'Ungüento de propionato de clobetasol al 0.05%',
              d: 'Aplicación nocturna diaria por cuatro semanas, luego en noches alternas y dosis de mantención',
              say: 'El tratamiento de primera línea respaldado mundialmente es el propionato de clobetasol en ungüento al cero coma cero cinco por ciento aplicado cada noche durante cuatro semanas.',
            },
            {
              t: 'Alivio del prurito y frenado de la atrofia',
              d: 'Disminuye la inflamación dérmica, erradica el prurito y detiene la esclerosis anatómica',
              say: 'El clobetasol frena la respuesta autoinmune, elimina por completo el prurito y evita la progresión de la distorsión anatómica vulvar, pasando luego a pautas de mantenimiento.',
            },
          ],
        },
        {
          title: 'Vigilancia y Riesgo de Carcinoma Epidermoide',
          tag: 'Riesgo neoplásico del 3 al 5 por ciento',
          kind: 'alert',
          items: [
            {
              t: 'Riesgo elevado de cáncer epidermoide de vulva',
              d: 'Un tres a cinco por ciento de las pacientes con liquen desarrollará carcinoma espinocelular invasor',
              say: 'Las mujeres con liquen escleroso tienen un riesgo de un tres a cinco por ciento de desarrollar un carcinoma epidermoide de vulva sobre la piel crónicamente inflamada.',
            },
            {
              t: 'Biopsia obligatoria ante lesiones sospechosas',
              d: 'Toda placa hiperqueratósica, sobreelevada, ulcerada o sangrante exige biopsia con sacabocados',
              say: 'Cualquier zona sobreelevada, engrosada, pigmentada o ulcerada que no responda al tratamiento exige de inmediato una biopsia cutánea en sacabocados para descartar una neoplasia maligna.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Comparativa de Patologías Vulvares Más Preguntadas',
      head: ['Entidad Clínica', 'Semiología Cardinal', 'Conducta Terapéutica de Elección'],
      rows: [
        {
          cells: ['Quiste de Bartolino', 'Masa liso-renitente, indolora, afebril, sin eritema', 'Observación si asintomático; marsupialización electiva'],
          say: 'El quiste de Bartolino es una dilatación indolora sin calor local que solo se opera con marsupialización si produce molestias mecánicas.',
        },
        {
          cells: ['Absceso de Bartolino', 'Masa caliente, eritematosa, fluctuante, dolor invalidante', 'Drenaje quirúrgico con marsupialización o catéter de Word'],
          say: 'El absceso de Bartolino presenta pus fluctuante y dolor que impide sentarse, exigiendo drenaje y marsupialización para no recidivar.',
        },
        {
          cells: ['Liquen Escleroso Vulvar', 'Prurito crónico, placas nacaradas en 8, atrofia de labios', 'Propionato de clobetasol 0.05% tópico (vigilar cáncer)'],
          say: 'El liquen escleroso cursa con prurito intractable y placas en ocho, respondiendo a ungüento de clobetasol y requiriendo control oncológico.',
        },
        {
          cells: ['Cáncer Epidermoide de Vulva', 'Placa indurada o úlcera vulvar que sangra en ancianas', 'Biopsia con sacabocados confirmatoria y cirugía oncológica'],
          say: 'El cáncer de vulva se sospecha ante úlceras o placas vegetantes induradas y se confirma siempre con biopsia en sacabocados.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de abordaje vulvar',
      title: 'Algoritmo de Manejo de Masas de Bartolino y Dermatosis Pruriginosas',
      say: 'Revisemos el algoritmo estructurado para clasificar una lesión vulvar entre patología glandular infecciosa versus dermatosis inflamatoria crónica.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Absceso de Bartolino · Tratamiento Quirúrgico de Elección',
      stem: 'Una paciente de 31 años consulta por dolor vulvar progresivo e invalidante que le impide sentarse. Al examen ginecológico se aprecia una masa de 5 cm de diámetro en el labio mayor izquierdo, en posición de las 4 horas del reloj, caliente, fluctuante, muy eritematosa y de extrema sensibilidad al tacto. Se diagnostica un absceso de la glándula de Bartolino.',
      question: '¿Cuál es el procedimiento quirúrgico de elección para resolver el cuadro y prevenir la recidiva?',
      options: [
        { letter: 'A', text: 'Punción evacuadora con aguja fina bajo anestesia local' },
        { letter: 'B', text: 'Incisión, drenaje y marsupialización de la glándula (o colocación de catéter de Word)' },
        { letter: 'C', text: 'Vulvectomía simple izquierda' },
        { letter: 'D', text: 'Prescripción exclusiva de antibióticos orales sin drenar el absceso' },
        { letter: 'E', text: 'Cauterización química con nitrato de plata de la mucosa vestibular' },
      ],
      correct: 'B',
      explanation: 'El tratamiento de elección para el absceso agudo de la glándula de Bartolino es la incisión y drenaje amplio seguido de MARSUPIALIZACIÓN (sutura de los bordes de la pared de la cápsula a la mucosa vestibular para formar un ostium permanente permeable), o alternativamente la colocación de un Catéter de Word. Estos procedimientos permiten la evacuación del pus y garantizan la formación de una nueva apertura fistulosa definitiva que previene la reobstrucción y recidiva. La punción con aguja tiene una tasa de recidiva superior al 80-90% y está proscrita.',
      say: {
        stem: 'Mujer de treinta y un años con absceso fluctuante y caliente de cinco centímetros en glándula de Bartolino izquierda que le impide sentarse.',
        question: '¿Cuál es el procedimiento quirúrgico de elección para resolver el cuadro y prevenir la recidiva?',
        options: 'La opción A propone punción con aguja fina. La B incisión drenaje y marsupialización o catéter de Word. La C vulvectomía simple. La D antibióticos exclusivos. La E nitrato de plata. Piénsalo.',
        answer: 'La respuesta correcta es la B. El tratamiento de elección indiscutible es la marsupialización de la glándula o catéter de Word para garantizar un drenaje permanente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Liquen Escleroso Vulvar · Diagnóstico y Tratamiento',
      stem: 'Una mujer de 64 años consulta por prurito vulvar intenso y constante de más de 8 meses de evolución que le interrumpe el sueño. Al examen físico se aprecia atrofia severa de los labios menores con enterramiento parcial del clítoris y placas blanquecinas nacaradas adelgazadas de aspecto en papel apergaminado distribuidas en la vulva y región perianal en figura de ocho, sin úlceras activas.',
      question: '¿Cuál es el diagnóstico clínico y el fármaco tópico de primera línea de elección?',
      options: [
        { letter: 'A', text: 'Candidiasis vulvovaginal crónica; Clotrimazol en crema al 1%' },
        { letter: 'B', text: 'Liquen Escleroso Vulvar; Propionato de Clobetasol al 0.05% en ungüento tópico' },
        { letter: 'C', text: 'Condilomas acuminados gigantes; Imiquimod al 5% en crema' },
        { letter: 'D', text: 'Herpes genital recurrente; Aciclovir tópico en crema' },
        { letter: 'E', text: 'Psoriasis invertida; Ácido salicílico al 10%' },
      ],
      correct: 'B',
      explanation: 'La combinación de prurito vulvar crónico intratable en una mujer postmenopáusica con placas atróficas blanquecinas apergaminadas en forma de cerradura o en ocho, con reabsorción de labios menores y encapuchamiento del clítoris, es la descripción patognomónica del Liquen Escleroso Vulvar. El tratamiento de primera línea respaldado por todas las guías dermatológicas y ginecológicas consiste en la aplicación tópica de Corticoides Ultrapotentes, siendo el ungüento de Propionato de Clobetasol al 0.05% el fármaco de elección para frenar la inflamación autoinmune y aliviar el prurito.',
      say: {
        stem: 'Mujer de sesenta y cuatro años con prurito vulvar crónico de ocho meses, placas blanquecinas en papel apergaminado en figura de ocho y borramiento de labios menores.',
        question: '¿Cuál es el diagnóstico clínico y el fármaco tópico de primera línea de elección?',
        options: 'La opción A propone candidiasis crónica con clotrimazol. La B liquen escleroso vulvar con ungüento de propionato de clobetasol. La C condilomas con imiquimod. La D herpes con aciclovir. La E psoriasis con ácido salicílico. Piénsalo.',
        answer: 'La respuesta correcta es la B. Las placas nacaradas en ocho con prurito crónico corresponden a liquen escleroso y se tratan con clobetasol ultrapotente.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Patología de Bartolino y Dermatosis Vulvares',
      cards: [
        {
          title: 'Patología de la Glándula de Bartolino',
          tag: 'Quiste vs Absceso supurado',
          kind: 'key',
          items: [
            {
              t: 'Quiste indoloro versus absceso caliente',
              d: 'El quiste no duele y se observa si es asintomático; el absceso tiene dolor agudo y exige drenaje',
              say: 'El quiste de Bartolino es indoloro y se observa; el absceso presenta calor, eritema y dolor invalidante, exigiendo evacuación quirúrgica.',
            },
            {
              t: 'Marsupialización obligatoria y punción proscrita',
              d: 'Drenar y marsupializar o colocar catéter de Word; la punción simple con aguja está prohibida',
              say: 'El tratamiento de elección del absceso es la incisión con marsupialización o catéter de Word; jamás se debe punzar con aguja por su altísima recidiva.',
            },
          ],
        },
        {
          title: 'Liquen Escleroso y Riesgo Oncológico',
          tag: 'Clobetasol y riesgo de carcinoma',
          kind: 'alert',
          items: [
            {
              t: 'Prurito crónico y lesiones en cerradura u ocho',
              d: 'Placas atróficas en papel apergaminado tratadas de elección con propionato de clobetasol',
              say: 'El liquen escleroso produce prurito intratable y placas nacaradas en ocho, respondiendo al ungüento de propionato de clobetasol tópico.',
            },
            {
              t: 'Control estricto por riesgo neoplásico',
              d: 'Riesgo de tres a cinco por ciento de cáncer epidermoide; biopsia ante cualquier lesión engrosada',
              say: 'El liquen escleroso exige biopsia ante lesiones sospechosas por riesgo de malignidad. Si te llevas una sola idea de hoy: el liquen escleroso vulvar se trata con corticoides tópicos de alta potencia como clobetasol y requiere seguimiento por riesgo de carcinoma escamoso. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Masas de Bartolino y Dermatosis Pruriginosas',
    root: N(
      'start',
      'Paciente con Masa Vulvar o Prurito Genital Crónico',
      'Examen ginecológico meticuloso · palpación de introito posterior y evaluación de piel vulvar',
      'Iniciamos el examen distinguiendo una masa en tercio posterior de una lesión cutánea generalizada.',
      [
        'Masa localizada en tercio posterior del labio mayor (Glándula de Bartolino)',
        N(
          'q',
          '¿Presenta signos de inflamación aguda, eritema, calor y dolor?',
          'Palpación dirigida en posición de las 4 y 8 horas del reloj',
          'Determinamos si la masa de Bartolino es asintomática o presenta signos inflamatorios agudos.',
          [
            'Masa blanda indolora, móvil y sin eritema ni calor',
            N(
              'ok',
              'Quiste de Bartolino: Observación o Marsupialización Electiva',
              'Observar si es asintomático · marsupializar si interfiere con la marcha o el coito',
              'Si es un quiste indoloro observamos, indicando marsupialización solo si produce molestias mecánicas.',
            ),
          ],
          [
            'Masa intensamente dolorosa, caliente, eritematosa y fluctuante',
            N(
              'alert',
              'Absceso de Bartolino: Marsupialización o Catéter de Word',
              'Incisión y marsupialización de elección · ¡Punción con aguja contraindicada!',
              'Ante un absceso fluctuante y caliente realizamos drenaje y marsupialización de urgencia.',
            ),
          ],
        ),
      ],
      [
        'Prurito vulvar crónico con placas blanquecinas atróficas en figura de ocho',
        N(
          'do',
          'Liquen Escleroso Vulvar: Propionato de Clobetasol al 0.05% Tópico',
          'Corticoide ultrapotente por cuatro semanas · biopsia si hay engrosamiento sospechoso de cáncer',
          'Frente a prurito crónico y placas nacaradas en ocho indicamos ungüento de clobetasol al cero coma cero cinco por ciento.',
        ),
      ],
    ),
  },
};
