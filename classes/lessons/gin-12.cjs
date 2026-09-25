// Clase 20.12 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Climaterio, menopausia, ventana de oportunidad de la terapia de reemplazo hormonal, esquemas según útero intacto o histerectomía y contraindicaciones',
      say: 'Bienvenidos a la clase sobre climaterio, menopausia y terapia de reemplazo hormonal, un tema de consulta diaria en atención primaria y de constante evaluación en el examen EUNACOM. En esta sesión aprenderemos a definir con precisión el concepto clínico de la ventana de oportunidad terapéutica, dominaremos la regla de oro para prescribir estrógenos solos en histerectomizadas versus combinados en mujeres con útero intacto para proteger el endometrio, y repasaremos detalladamente las contraindicaciones absolutas y las alternativas farmacológicas no hormonales. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo endocrino del climaterio',
      title: 'Fisiopatología del Cese de la Función Ovárica y Déficit Estrogénico',
      nodes: [
        { id: 'fol', col: 0, row: 1, k: 'start', t: 'Agotamiento folicular', s: 'Depleción de la reserva ovárica y caída de folículos sensibles a gonadotropinas' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Hipoestrogenismo marcado', s: 'Caída de estradiol plasmático e inhibina B con pérdida de retroalimentación' },
        { id: 'fsh', col: 2, row: 1, k: 'effect', t: 'Elevación de FSH y LH', s: 'FSH sérica marcadamente elevada mayor a 30 o 40 unidades por litro' },
        { id: 'sin', col: 3, row: 1, k: 'alert', t: 'Síntomas climatéricos', s: 'Inestabilidad termorreguladora en hipotálamo, bochornos, insomnio y atrofia' },
      ],
      edges: [
        { from: 'fol', to: 'est', label: 'cese ovocitario' },
        { from: 'est', to: 'fsh', label: 'pérdida de freno central' },
        { from: 'fsh', to: 'sin', label: 'manifestación clínica' },
      ],
      steps: [
        {
          show: ['fol', 'est'],
          note: 'Agotamiento folicular y caída de esteroides ováricos',
          say: 'Alrededor de los cincuenta años la reserva ovárica se extingue por apoptosis fisiológica de los folículos ovocitarios. Al cesar la síntesis de estradiol e inhibina por las células de la granulosa, se instala un estado de hipoestrogenismo tisular profundo y progresivo.',
        },
        {
          show: ['fsh', 'sin'],
          note: 'Pérdida del freno hipofisiario e inestabilidad hipotalámica',
          say: 'La falta de retroalimentación negativa libera al eje central disparando la hormona folículo estimulante a niveles muy elevados. A nivel del centro termorregulador hipotalámico se estrecha la zona termoneutra, desencadenando descargas vasomotoras paroxísticas con sofocos, sudoración y taquicardia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Fases y manifestaciones clínicas',
      title: 'Manifestaciones del Climaterio en el Corto, Mediano y Largo Plazo',
      cards: [
        {
          title: 'Corto y Mediano Plazo',
          tag: 'Calidad de vida y esfera urogenital',
          kind: 'key',
          items: [
            {
              t: 'Síntomas vasomotores y neuropsíquicos',
              d: 'Bochornos intensos, sudoración nocturna, insomnio de conciliación, labilidad emocional e irritabilidad',
              say: 'En el corto plazo predominan los síntomas vasomotores caracterizados por bochornos súbitos y sudoración profusa nocturna que interrumpen el sueño reparador, acompañados de marcada irritabilidad emocional, cefaleas tensionales, cansancio crónico y tendencia al ánimo depresivo.',
            },
            {
              t: 'Síndrome genitourinario de la menopausia',
              d: 'Atrofia vulvovaginal, sequedad mucosa, dispareunia severa, disuria y cistitis recurrentes abacterianas',
              say: 'En el mediano plazo se instala el síndrome genitourinario de la menopausia por adelgazamiento de la mucosa y pérdida del glucógeno epitelial, causando sequedad vaginal severa, dispareunia o dolor coital invalidante y una marcada propensión a infecciones urinarias recurrentes y cistitis abacterianas.',
            },
          ],
        },
        {
          title: 'Largo Plazo: Hueso y Sistema Cardiovascular',
          tag: 'Impacto estructural crónico',
          kind: 'alert',
          items: [
            {
              t: 'Pérdida acelerada de masa ósea (Osteoporosis)',
              d: 'Aumento de la resorción osteoclástica con riesgo crítico de fractura de cadera, vértebra y muñeca',
              say: 'En el largo plazo la ausencia de estrógenos acelera la resorción ósea por los osteoclastos, disminuyendo la densidad mineral y triplicando el riesgo de fracturas osteoporóticas por fragilidad.',
            },
            {
              t: 'Deterioro del perfil lipídico y riesgo vascular',
              d: 'Aumento de colesterol LDL, descenso de HDL y pérdida de la vasodilatación dependiente de endotelio',
              say: 'Asimismo, el perfil lipídico se modifica de forma desfavorable con elevación del colesterol de baja densidad y caída del colesterol de alta densidad, perdiendo la cardioprotección biológica femenina.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Concepto central EUNACOM',
      title: 'La Ventana de Oportunidad: Cuándo Indicar Terapia Hormonal',
      cards: [
        {
          title: 'Definición de la Ventana Terapéutica',
          tag: 'Menores de 60 años o menos de 10 años de menopausia',
          kind: 'criteria',
          items: [
            {
              t: 'Criterio cronológico estricto',
              d: 'Inicio de TRH en mujeres menores de 60 años de edad o dentro de los primeros 10 años postmenopausia',
              say: 'El concepto fundamental de ventana de oportunidad establece que la terapia de reemplazo hormonal sistémica tiene una relación beneficio riesgo claramente favorable cuando se inicia oportunamente en mujeres menores de sesenta años de edad o dentro de los primeros diez años transcurridos desde la última menstruación.',
            },
            {
              t: 'Beneficio cardiovascular y óseo demostrado',
              d: 'Reduce mortalidad global, previene aterosclerosis incipiente y detiene la pérdida de masa ósea',
              say: 'Prescribir estrógenos dentro de este intervalo de tiempo protege el endotelio vascular coronario sano, previene la enfermedad aterosclerótica a futuro, frena de manera categórica la pérdida de masa ósea y alivia los síntomas vasomotores con una tasa mínima de eventos adversos graves.',
            },
          ],
        },
        {
          title: 'Riesgos del Inicio Tardío',
          tag: 'Mayores de 60 años o más de una década',
          kind: 'alert',
          items: [
            {
              t: 'Inicio tardío formalmente desaconsejado',
              d: 'Iniciar TRH tras diez años de menopausia o sobre los sesenta años incrementa eventos coronarios y ACV',
              say: 'Por el contrario, iniciar terapia hormonal tardíamente en mujeres mayores de sesenta años o con más de diez años de menopausia está formalmente desaconsejado por provocar inestabilidad de placas arteriales.',
            },
            {
              t: 'Aumento de riesgo de demencia y trombosis',
              d: 'Se asocia a mayor incidencia de trombosis venosa profunda, accidente cerebrovascular y deterioro cognitivo',
              say: 'En arterias ateroscleróticas envejecidas los estrógenos inducen inflamación de la placa, aumentando de forma significativa el riesgo de infarto cerebral isquémico y trombosis venosa profunda.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla de oro de prescripción',
      title: 'Selección del Esquema de TRH según la Anatomía Uterina',
      cards: [
        {
          title: 'Mujer con Útero Intacto',
          tag: '¡Estrógenos más progestágeno obligatorio!',
          kind: 'alert',
          items: [
            {
              t: 'Asociación obligatoria con progestágeno',
              d: 'Los estrógenos solos inducen proliferación patológica, hiperplasia y cáncer de endometrio',
              say: 'En toda paciente que conserva su útero intacto constituye una regla de oro inquebrantable e inexcusable asociar siempre un progestágeno al estrógeno, con el objetivo primordial de antagonizar el efecto proliferativo estrogénico, mantener el endometrio en atrofia y prevenir el desarrollo de hiperplasia o cáncer endometrial.',
            },
            {
              t: 'Progesterona natural micronizada de elección',
              d: 'Progesterona micronizada oral 100 a 200 mg diarios o didrogesterona por su perfil neutro mamario',
              say: 'El progestágeno de primera línea recomendado es la progesterona natural micronizada oral o didrogesterona, debido a su excelente tolerancia metabólica y menor impacto en el parénquima mamario.',
            },
          ],
        },
        {
          title: 'Mujer Histerectomizada (Sin Útero)',
          tag: 'Monoterapia con estrógenos solos',
          kind: 'key',
          items: [
            {
              t: 'Estrógenos solos en monoterapia estricta',
              d: 'No existe riesgo endometrial; la adición de progestágeno es innecesaria y contraproducente',
              say: 'En una mujer histerectomizada que carece de útero, el tratamiento hormonal de elección indiscutido es la monoterapia con estrógenos solos, administrados en forma de comprimidos orales o mediante parches o geles transdérmicos, sin agregar jamás un progestágeno que no cumple ningún rol protector.',
            },
            {
              t: 'Eliminación del riesgo mamario añadido',
              d: 'Omitir el progestágeno evita el leve incremento de riesgo de cáncer de mama asociado a terapia combinada',
              say: 'Al omitir el progestágeno se elimina por completo el ligero aumento de riesgo de cáncer de mama asociado a las terapias combinadas continuas, logrando un perfil terapéutico sumamente seguro.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad y contraindicaciones',
      title: 'Contraindicaciones Absolutas de la Terapia de Reemplazo Hormonal',
      cards: [
        {
          title: 'Neoplasias y Patología Tromboembólica',
          tag: 'Prohibición absoluta e indiscutible',
          kind: 'alert',
          items: [
            {
              t: 'Cáncer de mama activo o antecedente personal',
              d: 'Contraindicación formal absoluta; los estrógenos estimulan la proliferación de células tumorales residuales',
              say: 'El antecedente personal comprobado o la sospecha clínica o mamográfica de cáncer de mama contraindica de forma absoluta cualquier formulación hormonal sistémica, debido a que los estrógenos estimulan directamente la proliferación de receptores hormonales en células tumorales residuales.',
            },
            {
              t: 'Tromboembolismo venoso previo o activo',
              d: 'Antecedente de trombosis venosa profunda o tromboembolismo pulmonar prohíbe el uso de TRH oral',
              say: 'Haber presentado un episodio previo o activo de trombosis venosa profunda o tromboembolismo pulmonar prohíbe taxativamente la terapia hormonal sistémica, debido al incremento de los factores procoagulantes hepáticos y al elevado riesgo de recurrencia tromboembólica fatal.',
            },
          ],
        },
        {
          title: 'Otras Contraindicaciones Absolutas Mayores',
          tag: 'Cardiovascular, hepático y sangrado',
          kind: 'criteria',
          items: [
            {
              t: 'Cardiopatía coronaria o evento vascular previo',
              d: 'Infarto agudo de miocardio, accidente cerebrovascular o accidente isquémico transitorio establecido',
              say: 'El antecedente de infarto agudo de miocardio o accidente cerebrovascular establecido prohíbe la administración de hormonas por el riesgo de nuevas complicaciones isquémicas.',
            },
            {
              t: 'Sangrado genital no filiado y hepatopatía aguda',
              d: 'Metrorragia sin biopsia endometrial previa y cirrosis hepática severa o hepatitis en curso',
              say: 'Todo sangrado uterino anormal no filiado debe ser estudiado con biopsia endometrial antes de considerar hormonas, y la falla hepática descompensada prohíbe su metabolismo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Alternativas farmacológicas',
      title: 'Manejo No Hormonal de Sofocos y Tratamiento Tópico Local',
      cards: [
        {
          title: 'Tratamiento No Hormonal de Síntomas Vasomotores',
          tag: 'Alternativas ante contraindicación de TRH',
          kind: 'pharma',
          items: [
            {
              t: 'Inhibidores de recaptura: Venlafaxina y Paroxetina',
              d: 'Venlafaxina 37.5 a 75 mg al día o Paroxetina a dosis bajas estabilizan el centro termorregulador',
              say: 'En mujeres con contraindicación de hormonas, los fármacos de elección para aliviar los sofocos son los antidepresivos inhibidores de recaptura como venlafaxina o paroxetina en dosis bajas.',
            },
            {
              t: '¡Cuidado con el tamoxifeno en cáncer de mama!',
              d: 'La paroxetina bloquea el citocromo CYP2D6 inactivando el tamoxifeno; en ellas se usa Venlafaxina',
              say: 'Alerta de examen: la paroxetina inhibe la enzima que activa el tamoxifeno en pacientes con cáncer mamario; en mujeres usuarias de tamoxifeno el fármaco de elección es venlafaxina.',
            },
          ],
        },
        {
          title: 'Estrógenos Tópicos Locales en Atrofia Urogenital',
          tag: 'Acción mucosa con mínima absorción',
          kind: 'normal',
          items: [
            {
              t: 'Estriol o promestrieno en crema u óvulos',
              d: 'Excelente eficacia en sequedad y dispareunia con absorción sistémica prácticamente despreciable',
              say: 'Para la atrofia vulvovaginal aislada el tratamiento estándar son los estrógenos locales como estriol o promestrieno vaginal, cuya absorción sistémica es insignificante y no altera el endometrio.',
            },
            {
              t: 'No requiere protección progestagénica',
              d: 'Al no inducir proliferación del endometrio uterino, los estrógenos tópicos no exigen progestágenos',
              say: 'Dado que los estrógenos tópicos locales no alcanzan niveles plasmáticos capaces de engrosar el endometrio, no requieren asociarse a progesterona en mujeres con útero intacto.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa clínica',
      title: 'Matriz Comparativa de Esquemas en el Manejo del Climaterio',
      head: ['Situación de la Paciente', 'Esquema de Elección', 'Justificación Biológica'],
      rows: [
        {
          cells: ['Mujer con útero en ventana de oportunidad', 'Estrógenos sistémicos + Progestágeno continuo', 'El progestágeno evita hiperplasia y cáncer de endometrio'],
          say: 'En mujer con útero en ventana de oportunidad se combina estrógeno con progestágeno para proteger el endometrio de neoplasias.',
        },
        {
          cells: ['Mujer histerectomizada sintomática', 'Estrógenos solos en monoterapia (oral/parche)', 'No existe riesgo endometrial y se evita el riesgo mamario del progestágeno'],
          say: 'En histerectomizadas se prescribe estrógeno solo en monoterapia porque no hay útero que proteger ni necesidad de progestágenos.',
        },
        {
          cells: ['Antecedente personal de cáncer de mama', 'Venlafaxina oral o Gabapentina (no hormonal)', 'Hormonas contraindicadas absolutamente por riesgo de proliferación tumoral'],
          say: 'Ante cáncer de mama las hormonas están absolutamente prohibidas y los bochornos se tratan con venlafaxina o gabapentina.',
        },
        {
          cells: ['Atrofia vulvovaginal aislada sin sofocos', 'Estrógenos tópicos locales (Estriol vaginal)', 'Restaura el epitelio y la flora ácida sin absorción hormonal sistémica'],
          say: 'La atrofia genital aislada se trata con cremas de estrógeno tópico local sin riesgo sistémico ni necesidad de progestágeno.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión terapéutica',
      title: 'Algoritmo de Prescripción Segura de TRH en el Climaterio',
      say: 'Revisemos el algoritmo estructurado para decidir la conveniencia y el tipo de esquema hormonal en la mujer climatérica sintomática.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Mujer Histerectomizada · Esquema Hormonal de Elección',
      stem: 'Una paciente de 51 años con antecedentes de histerectomía total por miomatosis hace 3 años consulta por bochornos intensos e insomnio que afectan severamente su calidad de vida tras cesar sus síntomas ováricos hace 1 año. No tiene antecedentes oncológicos personales ni familiares, y su mamografía reciente es normal (BI-RADS 2).',
      question: '¿Cuál es el esquema de Terapia de Reemplazo Hormonal de elección para esta paciente?',
      options: [
        { letter: 'A', text: 'Estrógenos solos en monoterapia (vía oral o transdérmica)' },
        { letter: 'B', text: 'Estrógenos combinados con progesterona micronizada continua' },
        { letter: 'C', text: 'Progestágenos solos a altas dosis' },
        { letter: 'D', text: 'Moduladores selectivos de receptores androgénicos exclusivamente' },
        { letter: 'E', text: 'Está formalmente contraindicada cualquier hormona por el antecedente de histerectomía' },
      ],
      correct: 'A',
      explanation: 'En una mujer menopáusica sintomática histerectomizada (sin útero) que no tiene contraindicaciones, el tratamiento hormonal de elección indiscutido es la Monoterapia con Estrógenos Solos (ej. 17-beta estradiol oral o transdérmico). Dado que la paciente no tiene útero, no existe riesgo de hiperplasia ni adenocarcinoma de endometrio, por lo que NO se debe prescribir progestágeno; la adición innecesaria de progestágenos aumenta el riesgo de cáncer de mama y eventos adversos sin aportar ningún beneficio clínico adicional.',
      say: {
        stem: 'Mujer de cincuenta y un años histerectomizada hace tres años que consulta por bochornos intensos e insomnio en ventana de oportunidad sin contraindicaciones.',
        question: '¿Cuál es el esquema de Terapia de Reemplazo Hormonal de elección para esta paciente?',
        options: 'La opción A propone estrógenos solos en monoterapia oral o transdérmica. La B estrógenos combinados con progesterona micronizada. La C progestágenos solos. La D moduladores androgénicos. La E contraindicación absoluta. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. Al no tener útero no existe riesgo de cáncer endometrial, por lo que se indican estrógenos puros sin asociar progestágenos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Contraindicación Absoluta de TRH Sistémica',
      stem: '¿Cuál de las siguientes condiciones clínicas constituye una CONTRAINDICACIÓN FORMAL ABSOLUTA para la prescripción de Terapia de Reemplazo Hormonal sistémica en una mujer con síntomas climatéricos?',
      question: '¿Cuál de las siguientes condiciones clínicas constituye una contraindicación formal absoluta para prescribir TRH sistémica?',
      options: [
        { letter: 'A', text: 'Antecedente personal tratado de Cáncer de Mama ductal infiltrante' },
        { letter: 'B', text: 'Osteoporosis densitométrica con T-score de -2.8' },
        { letter: 'C', text: 'Atrofia vulvovaginal sintomática con dispareunia' },
        { letter: 'D', text: 'Edad menor a 45 años con menopausia quirúrgica' },
        { letter: 'E', text: 'Sofocos moderados en una mujer de 50 años sana' },
      ],
      correct: 'A',
      explanation: 'El antecedente personal o la sospecha de Cáncer de Mama es una CONTRAINDICACIÓN FORMAL ABSOLUTA para cualquier formulación de Terapia de Reemplazo Hormonal sistémica, debido a que los estrógenos estimulan la proliferación de células mamarias residuales y aumentan drásticamente el riesgo de recidiva o progresión tumoral. En estas pacientes, los bochornos deben manejarse con alternativas no hormonales (como venlafaxina, paroxetina o gabapentina).',
      say: {
        stem: 'Pregunta sobre los límites de seguridad y contraindicaciones absolutas mayores de la terapia de reemplazo hormonal sistémica en la mujer climatérica.',
        question: '¿Cuál de las siguientes condiciones clínicas constituye una contraindicación formal absoluta para prescribir terapia hormonal sistémica?',
        options: 'La opción A propone antecedente personal de cáncer de mama ductal infiltrante. La B osteoporosis con t score de menos dos coma ocho. La C atrofia vulvovaginal. La D menopausia quirúrgica menor a cuarenta y cinco años. La E sofocos moderados en mujer sana. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. El antecedente de cáncer de mama es una contraindicación absoluta para cualquier terapia hormonal sistémica.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Climaterio y Terapia de Reemplazo Hormonal',
      cards: [
        {
          title: 'Ventana de Oportunidad y Prescripción Segura',
          tag: 'Menores de 60 años o < 10 años',
          kind: 'key',
          items: [
            {
              t: 'Timing óptimo para inicio de TRH',
              d: 'Iniciar en menores de 60 años o dentro de diez años de menopausia para lograr beneficio neto',
              say: 'La terapia hormonal ofrece beneficio cardiovascular y óseo indiscutible solo cuando se inicia en menores de sesenta años o dentro de diez años de menopausia.',
            },
            {
              t: 'Regla del útero para estrógenos y progestágenos',
              d: 'Mujer con útero exige estrógeno más progesterona; histerectomizada recibe estrógeno solo',
              say: 'Si la mujer tiene útero es obligatorio agregar progesterona para evitar cáncer endometrial; si está histerectomizada indicamos estrógeno solo sin progestágeno.',
            },
          ],
        },
        {
          title: 'Contraindicaciones y Alternativas No Hormonales',
          tag: 'Cáncer mamario y manejo de bochornos',
          kind: 'alert',
          items: [
            {
              t: 'Cáncer de mama prohíbe toda hormona sistémica',
              d: 'Manejar sofocos con venlafaxina o gabapentina; evitar paroxetina si toma tamoxifeno',
              say: 'El cáncer de mama prohíbe de forma absoluta las hormonas sistémicas; en ellas los sofocos se tratan con venlafaxina o gabapentina.',
            },
            {
              t: 'Estrógenos tópicos locales en atrofia pura',
              d: 'Estriol o promestrieno vaginal seguros para tratar dispareunia y sequedad sin efecto sistémico',
              say: 'Para la atrofia genital aislada prescribimos estrógenos locales tópicos como estriol, que curan la dispareunia sin absorción sistémica apreciable. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Prescripción Segura de TRH en el Climaterio',
    root: N(
      'start',
      'Mujer Climatérica con Síntomas Vasomotores Moderados a Severos',
      'Mamografía normal · presión arterial normal · anamnesis dirigida de antecedentes vasculares y oncológicos',
      'Iniciamos la evaluación descartando contraindicaciones oncológicas y verificando mamografía normal.',
      [
        'Presenta contraindicación absoluta (cáncer de mama, TVP previa, infarto o hepatopatía)',
        N(
          'alert',
          'Terapia No Hormonal de Primera Línea',
          'Venlafaxina 37.5 a 75 mg/d o Gabapentina 300 mg/d · estrógenos tópicos si hay atrofia aislada',
          'Si presenta contraindicación de hormonas indicamos venlafaxina oral o estrógenos tópicos si solo hay atrofia.',
        ),
      ],
      [
        'Sin contraindicaciones y dentro de ventana de oportunidad (< 60 años o < 10 años menopausia)',
        N(
          'q',
          '¿Conserva la paciente su útero intacto?',
          'Antecedente quirúrgico ginecológico · evaluación ecográfica pelviana',
          'Verificamos si la paciente conserva su útero o fue sometida a histerectomía previa.',
          [
            'Mujer con útero intacto',
            N(
              'ok',
              'TRH Combinada: Estrógeno Sistémico + Progestágeno Protector',
              '17-beta estradiol más Progesterona micronizada oral 100 a 200 mg/d continua para proteger endometrio',
              'Con útero intacto prescribimos estrógenos combinados con progesterona micronizada para proteger el endometrio.',
            ),
          ],
          [
            'Mujer histerectomizada (sin útero)',
            N(
              'do',
              'TRH Monoterapia: Estrógenos Solos (Oral o Transdérmico)',
              '17-beta estradiol en monoterapia sin requerir progestágeno eliminando riesgo mamario adicional',
              'En histerectomizadas indicamos monoterapia con estrógenos puros sin asociar progestágenos.',
            ),
          ],
        ),
      ],
    ),
  },
};
