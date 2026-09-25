// Clase 3.8 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Prurito palmoplantar nocturno, ácidos biliares séricos totales, ácido ursodesoxicólico y criterios de interrupción programada',
      say: 'Bienvenidos a la clase sobre colestasia intrahepática del embarazo, una de las patologías hepáticas más características del tercer trimestre y con mayor arraigo en el EUNACOM. En esta sesión aprenderemos a reconocer el prurito palmoplantar sin lesiones primarias, comprenderemos por qué el monitoreo fetal no predice el óbito súbito, dominaremos la estratificación de riesgo según los niveles de ácidos biliares, el uso del ácido ursodesoxicólico y el momento exacto de interrupción programada. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo y susceptibilidad',
      title: 'Fisiopatología: de la disfunción canalicular a la toxicidad fetal',
      nodes: [
        { id: 'gen', col: 0, row: 1, k: 'start', t: 'Susceptibilidad genética', s: 'Mutaciones heterocigotas en transportadores canaliculares ABCB4 y BSEP' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Pico estrogénico y progestágeno', s: 'Saturación del transporte biliar hepatocelular en el tercer trimestre' },
        { id: 'aci', col: 2, row: 1, k: 'risk', t: 'Acumulación de ácidos biliares', s: 'Aumento sistémico de sales biliares hidrófobas tóxicas en sangre materna' },
        { id: 'pru', col: 3, row: 0, k: 'alert', t: 'Prurito materno', s: 'Depósito cutáneo con estimulación de terminaciones nociceptivas' },
        { id: 'fet', col: 3, row: 2, k: 'trap', t: 'Toxicidad fetal aguda', s: 'Paso transplacentario con vasoespasmo y arritmia miocárdica súbita' },
      ],
      edges: [
        { from: 'gen', to: 'est', label: 'predisposición' },
        { from: 'est', to: 'aci', label: 'colestasia canalicular' },
        { from: 'aci', to: 'pru', label: 'depósito tisular' },
        { from: 'aci', to: 'fet', label: 'difusión placentaria' },
      ],
      steps: [
        {
          show: ['gen', 'est'],
          note: 'Colestasia por influjo hormonal en tercer trimestre',
          say: 'En mujeres con susceptibilidad genética en los transportadores biliares canaliculares, los altos niveles de estrógenos y metabolitos de la progesterona propios del tercer trimestre saturan los mecanismos de excreción biliar hepatocelular, provocando una colestasia intrahepática reversible.',
        },
        {
          show: ['aci', 'pru'],
          note: 'Prurito por depósito de sales biliares',
          say: 'Las sales biliares hidrófobas no excretadas refluyen hacia los sinusoides hepáticos y la circulación sistémica. Se acumulan en la dermis y epidermis, estimulando receptores pruriginosos periféricos y desatando el prurito palmoplantar característico.',
        },
        {
          show: ['fet'],
          note: 'Riesgo de muerte fetal súbita',
          say: 'Los ácidos biliares atraviesan libremente la barrera placentaria y se concentran en el feto. Producen vasoconstricción aguda de los vasos coriónicos de la placenta y alteran los canales de calcio del miocardio fetal, generando arritmias letales y muerte fetal intrauterina súbita sin aviso previo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología cardinal',
      title: 'Manifestaciones clínicas de la colestasia intrahepática',
      cards: [
        {
          title: 'Signo cardinal: prurito',
          tag: 'Sospecha inmediata',
          kind: 'alert',
          items: [
            {
              t: 'Prurito palmoplantar nocturno',
              d: 'Inicio característico en palmas y plantas con exacerbación nocturna',
              say: 'El síntoma cardinal es el prurito de predominio palmoplantar con notable exacerbación nocturna que altera el descanso de la paciente. Con los días se extiende de forma centrípeta hacia extremidades y tronco pero respeta la cara.',
            },
            {
              t: 'Ausencia de lesiones cutáneas primarias',
              d: 'Piel sana; únicamente se observan escoriaciones por rascado secundario',
              say: 'En la inspección dermatológica no existen pápulas, vesículas, ampollas ni placas eritematosas primarias. La piel se encuentra completamente normal a excepción de las lesiones secundarias por rascado lineal.',
            },
            {
              t: 'Resolución posparto inmediata',
              d: 'Desaparición completa del prurito dentro de las primeras 48 horas',
              say: 'Al expulsar la placenta cesa abruptamente la sobrecarga hormonal y el prurito remite de forma espontánea y completa en las primeras veinticuatro a cuarenta y ocho horas posteriores al alumbramiento.',
            },
          ],
        },
        {
          title: 'Signos hepáticos asociados',
          tag: 'Colestasia sistémica',
          kind: 'criteria',
          items: [
            {
              t: 'Ictericia en minoría de casos',
              d: 'Presente solo en 10 a 15 por ciento (CIE ictérica severa)',
              say: 'La ictericia clínica de escleras y mucosas aparece una a dos semanas tras el inicio del prurito en solo el diez a quince por ciento de los casos. Su presencia clasifica de inmediato el cuadro como colestasia severa.',
            },
            {
              t: 'Coluria e hipocolia transitoria',
              d: 'Pigmentación urinaria por excreción renal de bilirrubina conjugada',
              say: 'Las pacientes ictéricas pueden presentar coluria e hipocolia transitorias por elevación moderada de la bilirrubina total conjugada, la cual habitualmente no sobrepasa los cinco miligramos por decilitro.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial dermatológico',
      title: 'Contraste del prurito gestacional en el tercer trimestre',
      head: ['Entidad clínica', 'Lesiones cutáneas primarias', 'Localización típica', 'Riesgo fetal'],
      rows: [
        {
          cells: ['Colestasia intrahepática (CIE)', 'Ausentes (solo lesiones de rascado)', 'Palmas y plantas; predominio nocturno', 'Muerte intrauterina súbita'],
          say: 'La colestasia es la única afección con prurito en el tercer trimestre que carece de lesiones primarias y pone en riesgo directo la sobrevida del feto.',
        },
        {
          cells: ['Erupción polimorfa (PUPPP / PEP)', 'Pápulas y placas urticariformes eritematosas', 'Estrías abdominales respetando ombligo', 'Ninguno (feto completamente sano)'],
          say: 'La erupción polimorfa presenta placas eritematosas pruriginosas sobre las estrías del abdomen que respetan estrictamente el ombligo, sin riesgo fetal.',
        },
        {
          cells: ['Penfigoide gestacional', 'Vesículas y ampollas tensas', 'Área periumbilical que luego se generaliza', 'Bajo peso y prematurez'],
          say: 'El penfigoide gestacional es una dermatosis ampollar autoinmune que inicia alrededor del ombligo y requiere manejo con corticoides orales sistémicos.',
        },
        {
          cells: ['Dermatitis atópica del embarazo', 'Placas eccematosas pruriginosas', 'Pliegues flexurales, fosas y cuello', 'Ninguno (curso benigno)'],
          say: 'La dermatitis atópica compromete pliegues flexurales en mujeres con historia atópica previa, cursando sin toxicidad sobre la circulación fetal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación de laboratorio',
      title: 'Diagnóstico de laboratorio y estratificación por ácidos biliares',
      cards: [
        {
          title: 'Ácidos biliares séricos totales',
          tag: 'Estándar de oro pronóstico',
          kind: 'pharma',
          items: [
            {
              t: 'Valor normal en embarazo',
              d: 'Menor a diez a once micromoles por litro',
              say: 'Los ácidos biliares séricos totales son el examen confirmatorio y de estratificación pronóstica de elección. El valor de referencia normal en el embarazo es menor a diez micromoles por litro.',
            },
            {
              t: 'CIE leve a moderada',
              d: 'Ácidos biliares entre diez y treinta y nueve micromoles por litro',
              say: 'Niveles entre diez y treinta y nueve micromoles por litro definen colestasia anictérica leve a moderada. El riesgo de muerte fetal es muy bajo y permite esperar el término temprano.',
            },
            {
              t: 'CIE severa y extrema',
              d: 'Mayor o igual a 40 micromoles por litro (extrema sobre cien)',
              say: 'Valores iguales o mayores a cuarenta definen colestasia severa. Si superan los cien micromoles por litro, el riesgo de óbito fetal súbito se dispara por encima del cinco por ciento requiriendo manejo urgente.',
            },
          ],
        },
        {
          title: 'Pruebas hepáticas accesorias',
          tag: 'Patrón bioquímico',
          kind: 'criteria',
          items: [
            {
              t: 'Transaminasas elevadas',
              d: 'Alza de GOT y GPT en 60 a 80 por ciento de pacientes',
              say: 'Las transaminasas se elevan de dos a cinco veces sobre el valor de referencia por necrosis hepatocelular colestásica leve, sin alcanzar las cifras extremas de las hepatitis agudas.',
            },
            {
              t: 'Fosfatasas alcalinas elevadas',
              d: 'Aumento fisiológico sumado a componente colestásico hepático',
              say: 'La fosfatasa alcalina suele encontrarse marcadamente elevada, aunque debe recordarse que la placenta sintetiza isoenzimas de fosfatasa alcalina de forma fisiológica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones maternas y hemostasia',
      title: 'Compromiso materno: malabsorción y riesgo de sangrado',
      cards: [
        {
          title: 'Malabsorción de grasas',
          tag: 'Déficit de vitaminas liposolubles',
          kind: 'criteria',
          items: [
            {
              t: 'Esteatorrea subclínica',
              d: 'Falta de micelas biliares intraluminales en el intestino delgado',
              say: 'La disminución de sales biliares en la luz intestinal dificulta la emulsión de grasas neutras, produciendo esteatorrea y mala absorción de vitaminas liposolubles como la vitamina K.',
            },
            {
              t: 'Déficit de vitamina K y coagulopatía',
              d: 'Disminución de factores de coagulación dos, siete, nueve y diez',
              say: 'La deficiencia de vitamina K reduce la síntesis de factores dependientes en el hígado, prolongando el tiempo de protrombina y predisponiendo a hemorragia posparto severa.',
            },
          ],
        },
        {
          title: 'Suplementación obligatoria',
          tag: 'Prevención de hemorragia',
          kind: 'pharma',
          items: [
            {
              t: 'Vitamina K1 fitomenadiona',
              d: 'Diez miligramos diarios por vía oral o intramuscular en casos severos',
              say: 'En pacientes con colestasia severa o ictericia prolongada se debe administrar fitomenadiona profiláctica para asegurar niveles óptimos de factores de coagulación al momento del parto.',
            },
            {
              t: 'Pruebas de coagulación basales',
              d: 'Tiempo de protrombina e INR seriados antes de la interrupción',
              say: 'Es indispensable solicitar tiempo de protrombina previo al parto para descartar coagulopatía oculta y evitar complicaciones hemorrágicas durante el alumbramiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Manejo terapéutico y obstetricia',
      title: 'Tratamiento con ácido ursodesoxicólico y momento de interrupción',
      head: ['Estratificación clínica', 'Ácidos biliares séricos', 'Terapia farmacológica', 'Momento de interrupción'],
      rows: [
        {
          cells: ['CIE anictérica moderada', 'Diez a treinta y nueve micromoles por litro', 'Ácido ursodesoxicólico 10 a 15 mg/kg/día', 'Treinta y siete a treinta y ocho semanas'],
          say: 'La colestasia moderada anictérica se trata con ácido ursodesoxicólico y se interrumpe de forma programada entre las treinta y siete y treinta y ocho semanas.',
        },
        {
          cells: ['CIE ictérica o severa', 'Cuarenta a noventa y nueve micromoles por litro', 'Ácido ursodesoxicólico dosis plena y clorfenamina', 'Treinta y seis semanas'],
          say: 'La colestasia severa con ácidos biliares sobre cuarenta o presencia de ictericia se interrumpe de forma electiva a las treinta y seis semanas completas.',
        },
        {
          cells: ['CIE extrema', 'Cien o más micromoles por litro', 'Ácido ursodesoxicólico y hospitalización', 'Treinta y cuatro a treinta y seis semanas'],
          say: 'Niveles sobre cien micromoles por litro configuran riesgo extremo de óbito. Se interrumpe entre las treinta y cuatro y treinta y seis semanas con corticoides antenatales.',
        },
        {
          cells: ['Mecanismo del ursodesoxicólico', 'Ácido biliar hidrofílico no citotóxico', 'Depura sales biliares materno fetales', 'Alivia prurito y normaliza enzimas'],
          say: 'El ácido ursodesoxicólico desplaza a las sales biliares tóxicas, estimula la secreción hepática y atraviesa la placenta protegiendo al feto.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de manejo y momento de interrupción en Colestasia Intrahepática',
      say: 'Revisemos el algoritmo estructurado de manejo de la colestasia intrahepática y los criterios de interrupción programada.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de colestasia gestacional',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Gestante con prurito palmoplantar y registro basal no estresante normal', 'Tranquilizar a la paciente y dar de alta sin programar parto', 'Solicitar ácidos biliares y programar interrupción por riesgo de óbito súbito'],
          say: 'El registro basal normal no garantiza bienestar futuro en colestasia. La muerte fetal es súbita e imprevista y la única prevención es la interrupción a tiempo.',
        },
        {
          cells: ['Prurito abdominal con pápulas eritematosas en estrías sin tocar ombligo', 'Diagnosticar colestasia intrahepática del embarazo', 'Diagnosticar erupción polimorfa del embarazo (PUPPP)'],
          say: 'La presencia de pápulas en estrías que respetan el ombligo descarta colestasia. Se trata de PUPPP, una dermatosis benigna sin riesgo fetal.',
        },
        {
          cells: ['Colestasia severa con ácidos biliares en 110 a las 37 semanas', 'Mantener ácido ursodesoxicólico y esperar a la semana 40', 'Interrumpir el embarazo de inmediato'],
          say: 'A las treinta y siete semanas con ácidos biliares mayores a cien no se puede esperar. El riesgo de muerte intrauterina es altísimo y se interrumpe de inmediato.',
        },
        {
          cells: ['Tratamiento de elección para la colestasia intrahepática', 'Indicar antihistamínicos orales como monoterapia definitiva', 'Indicar ácido ursodesoxicólico oral como fármaco específico'],
          say: 'Los antihistamínicos solo ayudan a conciliar el sueño pero no reducen los ácidos biliares ni el riesgo fetal. El fármaco de elección es el ácido ursodesoxicólico.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2018',
      title: 'EUNACOM Diciembre 2018 · Pregunta 85',
      stem: 'Una paciente de 25 años, con 33 semanas de embarazo, consulta por prurito de predominio palmoplantar, pero que en ocasiones es generalizado. Refiere que es más intenso en la noche y no presenta lesiones cutáneas primarias.',
      question: '¿Cuál es el examen de elección para confirmar y estratificar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Transaminasas hepáticas séricas' },
        { letter: 'B', text: 'Ecografía abdominal con Doppler portal' },
        { letter: 'C', text: 'Ácidos biliares séricos totales' },
        { letter: 'D', text: 'Fosfatasas alcalinas plasmáticas' },
        { letter: 'E', text: 'Bilirrubina total y diferenciada' },
      ],
      correct: 'C',
      explanation: 'El diagnóstico de confirmación y el estándar de oro para la estratificación del riesgo fetal en la Colestasia Intrahepática del Embarazo (CIE) es la medición de Ácidos Biliares Séricos Totales. Permite catalogar el cuadro en moderado (< 40 umol/L), severo (≥ 40 umol/L) o de riesgo extremo (≥ 100 umol/L), guiando el momento exacto de la interrupción del embarazo.',
      say: {
        stem: 'Una paciente de veinticinco años con treinta y tres semanas de gestación consulta por prurito palmoplantar de predominio nocturno sin lesiones cutáneas.',
        question: '¿Cuál es el examen de elección para confirmar y estratificar el diagnóstico?',
        options: 'La opción A propone transaminasas. La B ecografía abdominal. La C ácidos biliares séricos totales. La D fosfatasas alcalinas. La E bilirrubina total. Piénsalo.',
        answer: 'La respuesta correcta es la C. Los ácidos biliares séricos totales constituyen el estándar de oro indispensable para confirmar el diagnóstico y clasificar el riesgo de muerte fetal intrauterina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Agosto 2021',
      title: 'EUNACOM Agosto 2021 · Pregunta 46',
      stem: 'Una paciente de 34 años, cursando un embarazo de 32 semanas, inicia prurito en palmas y plantas, más intenso en la noche, asociado a astenia y náuseas. Al examen físico se constatan signos vitales normales y discreta ictericia escleral, sin lesiones cutáneas primarias. Sus exámenes muestran: bilirrubina total 1.5 mg/dL, fosfatasa alcalina 411 UI/L, GOT 32 UI/L, GPT 38 UI/L y gamaglutamiltransferasa 398 UI/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colestasia intrahepática del embarazo' },
        { letter: 'B', text: 'Colangitis biliar primaria' },
        { letter: 'C', text: 'Ictericia por hiperémesis gravídica' },
        { letter: 'D', text: 'Hígado graso agudo del embarazo' },
        { letter: 'E', text: 'Coledocolitiasis con colangitis aguda' },
      ],
      correct: 'A',
      explanation: 'La paciente presenta la tríada clásica de colestasia intrahepática del embarazo ictérica: prurito palmoplantar nocturno sin dermatosis primaria, ictericia leve en el tercer trimestre y un patrón de laboratorio colestásico con marcada elevación de fosfatasas alcalinas y gamaglutamiltransferasa con transaminasas mínimamente alteradas. El examen para complementar y estratificar son los ácidos biliares séricos.',
      say: {
        stem: 'Una paciente de treinta y cuatro años con treinta y dos semanas de gestación presenta prurito palmoplantar nocturno, leve ictericia de escleras, fosfatasa alcalina elevada y gamaglutamiltransferasa elevada sin lesiones cutáneas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A propone colestasia intrahepática del embarazo. La B colangitis biliar primaria. La C ictericia por hiperémesis. La D hígado graso agudo. La E coledocolitiasis. Piénsalo.',
        answer: 'La respuesta correcta es la A. El cuadro clínico de prurito palmoplantar nocturno con ictericia leve y patrón colestásico en el tercer trimestre corresponde a una colestasia intrahepática del embarazo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2024',
      title: 'EUNACOM Diciembre 2024 · Pregunta 153',
      stem: 'Una mujer cursando un embarazo de 37 semanas consulta por prurito palmoplantar intenso. En sus exámenes de laboratorio destacan ácidos biliares séricos totales de 112 micromoles por litro y transaminasas moderadamente elevadas.',
      question: '¿Cuál es la conducta médica más adecuada?',
      options: [
        { letter: 'A', text: 'Interrupción inmediata del embarazo' },
        { letter: 'B', text: 'Iniciar ácido ursodesoxicólico ambulatorio y controlar en dos semanas' },
        { letter: 'C', text: 'Administrar antihistamínicos orales y citar a las 40 semanas' },
        { letter: 'D', text: 'Solicitar perfil biofísico de Manning cada 48 horas' },
        { letter: 'E', text: 'Indicar reposo absoluto y dieta hepatoprotectora' },
      ],
      correct: 'A',
      explanation: 'La paciente presenta una Colestasia Intrahepática del Embarazo en rango de Severidad Extrema (ácidos biliares superiores a 100 umol/L) cursando además una edad gestacional a término (37 semanas). A este nivel de ácidos biliares el riesgo de óbito fetal súbito por arritmia es muy elevado. Cumplidas las 37 semanas, la conducta mandatoria e inmediata es la interrupción del embarazo.',
      say: {
        stem: 'Una mujer cursando embarazo de treinta y siete semanas consulta por prurito palmoplantar intenso, con ácidos biliares séricos de ciento doce micromoles por litro.',
        question: '¿Cuál es la conducta médica más adecuada?',
        options: 'La opción A propone interrupción inmediata del embarazo. La B iniciar ácido ursodesoxicólico ambulatorio. La C antihistamínicos hasta la semana cuarenta. La D perfil biofísico bisemanal. La E reposo y dieta. Piénsalo.',
        answer: 'La respuesta correcta es la A. Con ácidos biliares sobre cien micromoles por litro a las treinta y siete semanas de gestación, el riesgo de óbito fetal súbito es crítico y la única conducta correcta es la interrupción inmediata del embarazo.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en colestasia intrahepática para el EUNACOM',
      cards: [
        {
          title: 'Clínica y farmacología',
          tag: 'Diagnóstico y terapia',
          kind: 'key',
          items: [
            {
              t: 'Prurito sin lesiones primarias',
              d: 'Palmas y plantas nocturno con piel sana salvo rascado',
              say: 'Prurito palmoplantar nocturno sin pápulas ni ampollas en el tercer trimestre es colestasia hasta demostrar lo contrario.',
            },
            {
              t: 'Ácido ursodesoxicólico de elección',
              d: 'Dosis de diez a quince miligramos por kilo al día por vía oral',
              say: 'El ácido ursodesoxicólico es el tratamiento médico de primera línea indiscutido para aliviar síntomas y depurar sales biliares.',
            },
          ],
        },
        {
          title: 'Riesgo fetal y semanas de parto',
          tag: 'Prevención de óbito',
          kind: 'alert',
          items: [
            {
              t: 'El monitoreo no predice el óbito',
              d: 'La muerte es súbita por arritmia y vasoespasmo inducido por bilis',
              say: 'Nunca confíes en un registro basal no estresante normal en colestasia porque no es capaz de anticipar la arritmia fetal súbita.',
            },
            {
              t: 'Puntos de corte de interrupción',
              d: '37 a 38 semanas en moderada; 36 semanas en severa (mayor a 40)',
              say: 'Si te llevas una sola idea de hoy: la colestasia con ácidos biliares bajo cuarenta se interrumpe a las treinta y siete a treinta y ocho semanas, pero si superan cuarenta se interrumpe a las treinta y seis semanas. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Colestasia Intrahepática del Embarazo',
    root: N(
      'start',
      'Prurito Palmoplantar Nocturno en el Tercer Trimestre',
      'Examen físico dermatológico: constatar ausencia de lesiones cutáneas primarias',
      'Iniciamos el abordaje evaluando la piel y solicitando de inmediato ácidos biliares séricos y pruebas hepáticas.',
      [
        'Sospecha clínica confirmada con ácidos biliares',
        N(
          'do',
          'Iniciar Ácido Ursodesoxicólico 10 a 15 mg/kg/día',
          'Alivio sintomático y depuración de sales biliares materno fetales · clorfenamina nocturna',
          'Iniciamos inmediatamente ácido ursodesoxicólico por vía oral y estratificamos según el nivel de ácidos biliares.',
          [
            'Ácidos biliares entre 10 y 39 micromoles por litro (anictérica)',
            N(
              'ok',
              'CIE Moderada: Interrupción a las 37 a 38 semanas',
              'Control de ácidos biliares cada 1 a 2 semanas · parto vaginal programado',
              'En la colestasia moderada mantenemos el control y programamos la interrupción entre las treinta y siete y treinta y ocho semanas.',
            ),
          ],
          [
            'Ácidos biliares mayores o iguales a 40 micromoles por litro o ictericia',
            N(
              'alert',
              'CIE Severa: Interrupción a las 36 semanas',
              'Hospitalización en ARO · monitorización de bienestar fetal e interrupción electiva',
              'En la colestasia severa hospitalizamos y realizamos la interrupción programada al cumplir las treinta y seis semanas.',
            ),
          ],
          [
            'Ácidos biliares mayores a 100 micromoles por litro',
            N(
              'alert',
              'CIE Extrema: Interrupción a las 34 a 36 semanas',
              'Riesgo crítico de óbito fetal súbito · corticoides para maduración pulmonar e interrupción',
              'Ante ácidos biliares sobre cien micromoles por litro indicamos maduración pulmonar e interrupción inmediata.',
            ),
          ],
        ),
      ],
    ),
  },
};
