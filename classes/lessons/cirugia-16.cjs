// Clase 11.16 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cronología de las 5 W: atelectasia (Wind), infección urinaria (Water), herida quirúrgica (Wound), trombosis venosa (Walking) y fármacos (Wonder drugs)',
      say: 'Bienvenidos a la clase de fiebre postoperatoria. En el EUNACOM este tema se responde con la regla mnemotécnica clásica de las cinco W. Hoy aprenderemos a diagnosticar la causa exacta según el día postoperatorio, a evitar dar antibióticos a ciegas el primer día y a saber cuándo abrir y drenar una herida quirúrgica. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología clínica',
      title: 'La regla de las 5 W: etiología de la fiebre según el día postoperatorio',
      nodes: [
        { id: 'ope', col: 0, row: 2, k: 'start', t: 'Cirugía mayor bajo anestesia', s: 'Respuesta inflamatoria sistémica y reposo en cama' },
        { id: 'w1', col: 1, row: 0, k: 'risk', t: 'Días 1 a 2: Wind (Pulmón)', s: 'Atelectasia por hipoventilación basal y dolor' },
        { id: 'w2', col: 1, row: 2, k: 'alert', t: 'Días 3 a 5: Water (Orina)', s: 'Infección urinaria asociada a sonda Foley' },
        { id: 'w3', col: 2, row: 1, k: 'trap', t: 'Días 5 a 7: Wound (Herida)', s: 'Infección del sitio quirúrgico incisional o profunda' },
        { id: 'w4', col: 3, row: 0, k: 'alert', t: 'Días 7 a 10: Walking (Venas)', s: 'Trombosis venosa profunda o tromboembolismo' },
        { id: 'w5', col: 3, row: 2, k: 'mech', t: 'Día 7 o posterior: Wonder drugs', s: 'Reacción febril por fármacos o antibióticos' },
      ],
      edges: [
        { from: 'ope', to: 'w1', label: 'primeras 48 h' },
        { from: 'ope', to: 'w2', label: 'tercer día' },
        { from: 'ope', to: 'w3', label: 'quinto día' },
        { from: 'ope', to: 'w4', label: 'primera semana' },
        { from: 'ope', to: 'w5', label: 'tardío' },
      ],
      steps: [
        {
          show: ['ope', 'w1'],
          note: 'Días 1 y 2: Pulmón y atelectasia',
          say: 'En las primeras veinticuatro a cuarenta y ocho horas postoperatorias, la causa número uno de fiebre es la atelectasia pulmonar, representada por la palabra Wind. El dolor incisional y los anestésicos deprimen la respiración profunda, colapsando los alvéolos de las bases pulmonares.',
        },
        {
          show: ['w2', 'w3'],
          note: 'Días 3 a 7: Orina y herida operatoria',
          say: 'Hacia el tercer a quinto día la sospecha se desplaza a la vía urinaria con la letra Water, casi siempre por colonización de una sonda vesical. Entre el quinto y séptimo día postoperatorio cobra protagonismo la letra Wound: la infección de la herida quirúrgica con dolor local y pus.',
        },
        {
          show: ['w4', 'w5'],
          note: 'Segunda semana: Trombosis y medicamentos',
          say: 'Hacia el séptimo a décimo día aparece la letra Walking, que representa la trombosis venosa profunda y el embolismo pulmonar por inmovilidad. Finalmente, la letra Wonder drugs recuerda la fiebre por fármacos, típica de pacientes con buen estado general que reciben antibióticos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Primeras 48 horas',
      title: 'Días 1 y 2: Wind (Atelectasia pulmonar) y respuesta inflamatoria',
      cards: [
        {
          title: 'Atelectasia pulmonar postquirúrgica',
          tag: 'Causa más frecuente precoz',
          kind: 'alert',
          items: [
            {
              t: 'Mecanismo de colapso alveolar',
              d: 'Hipoventilación por dolor de la incisión y parálisis ciliar por anestesia',
              say: 'El paciente operado ventila superficialmente por dolor y acumula secreciones bronquiales. Los alvéolos basales se colapsan generando fiebre moderada, taquipnea leve y crepitaciones bibasales.',
            },
            {
              t: 'Tratamiento sin antibióticos',
              d: 'Kinesiterapia respiratoria, espirometría incentivada y analgesia',
              say: 'El tratamiento de la atelectasia jamás requiere antibióticos. Se optimiza la analgesia para que el paciente pueda toser, se realiza kinesiterapia respiratoria con ejercicios incentivados y se fomenta la deambulación precoz.',
            },
          ],
        },
        {
          title: 'Excepciones hiperagudas graves',
          tag: 'Fiebre antes de 48 horas',
          kind: 'key',
          items: [
            {
              t: 'Infección necrosante fulminante',
              d: 'Streptococcus pyogenes del grupo A o Clostridium perfringens',
              say: 'Si un paciente presenta fiebre muy alta y dolor desproporcionado en las primeras veinticuatro horas, sospecha una infección por estreptococo del grupo A o gangrena gaseosa clostridial con crepitación dérmica.',
            },
            {
              t: 'Hipertermia maligna intraoperatoria',
              d: 'Rigidez muscular, hipercapnia severa y fiebre descontrolada por succinilcolina',
              say: 'La hipertermia maligna debuta en el mismo pabellón quirúrgico por anestésicos halogenados o succinilcolina, requiriendo suspensión inmediata del agente y administración de dantroleno endovenoso.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Días 3 a 5',
      title: 'Water: Infección urinaria y flebitis de catéteres venosos',
      cards: [
        {
          title: 'Infección del tracto urinario asociada a sonda',
          tag: 'Tercer día postoperatorio',
          kind: 'criteria',
          items: [
            {
              t: 'Colonización retrógrada por sonda Foley',
              d: 'Riesgo acumulativo de cinco por ciento por cada día de permanencia',
              say: 'La causa predominante hacia el tercer día es la infección urinaria en pacientes que mantienen sonda vesical. El biofilm bacteriano asciende por el catéter hasta infectar la vejiga.',
            },
            {
              t: 'Conducta estándar de manejo',
              d: 'Retiro inmediato del catéter vesical, urocultivo y antibiótico dirigido',
              say: 'La medida más eficaz es retirar la sonda Foley tan pronto como el paciente recupere la movilidad, tomar sedimento de orina y cultivo, e iniciar tratamiento antibiótico empírico.',
            },
          ],
        },
        {
          title: 'Tromboflebitis de vías periféricas',
          tag: 'Sitios de punción',
          kind: 'key',
          items: [
            {
              t: 'Eritema y cordón venoso doloroso',
              d: 'Inflamación local en antebrazo o dorso de la mano por cánula venosa',
              say: 'Revisa siempre los accesos venosos periféricos. Una vía colocada hace más de setenta y dos horas puede causar flebitis con eritema lineal y dolor que simulan un cuadro séptico.',
            },
            {
              t: 'Retiro y cambio de vía a contralateral',
              d: 'Compresas tibias locales y retiro inmediato del teflón contaminado',
              say: 'El tratamiento consiste simplemente en retirar la cánula afectada, aplicar compresas húmedas tibias y rotar el acceso venoso a la extremidad contralateral.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Días 5 a 7',
      title: 'Wound: Infección del sitio quirúrgico y abscesos profundos',
      cards: [
        {
          title: 'Infección incisional de la herida',
          tag: 'Quinto al séptimo día',
          kind: 'alert',
          items: [
            {
              t: 'Signos cardinales de inflamación local',
              d: 'Dolor creciente, induración, calor, eritema perilesional y secreción purulenta',
              say: 'Hacia el final de la primera semana, la causa clásica de fiebre es la infección de la herida quirúrgica. El paciente consulta por dolor que en lugar de ceder empeora, eritema en los bordes y salida de pus.',
            },
            {
              t: 'Principio quirúrgico: desbridamiento y drenaje',
              d: 'Retiro de puntos de sutura, apertura del plano y aseo profuso abierto',
              say: 'El pilar indiscutido del tratamiento es abrir la herida retirando las suturas del área infectada, evacuar el pus acumulado y dejar cicatrizar por segunda intención con curaciones abiertas.',
            },
            {
              t: 'Indicación selectiva de antibióticos sistémicos',
              d: 'Solo si hay celulitis extensa mayor a cinco centímetros o compromiso sistémico',
              say: 'No todos los pacientes con herida infectada requieren antibióticos orales. Se reservan exclusivamente si el eritema sobrepasa cinco centímetros de los bordes o si hay fiebre alta con sepsis.',
            },
          ],
        },
        {
          title: 'Colecciones y abscesos intraabdominales',
          tag: 'Foco profundo oculto',
          kind: 'key',
          items: [
            {
              t: 'Fiebre en agujas y distensión abdominal',
              d: 'Leucocitosis persistente sin signos evidentes en la piel',
              say: 'Si la herida está sana pero el paciente mantiene fiebre en agujas, dolor vago y leucocitosis, sospecha un absceso intraabdominal en el lecho quirúrgico o fondo de saco.',
            },
            {
              t: 'Tomografía computarizada con contraste intravenoso',
              d: 'Examen de elección para guiar drenaje percutáneo mínimamente invasivo',
              say: 'El método diagnóstico de elección es la tomografía computarizada con contraste, que permite localizar la colección y guiar su drenaje percutáneo por radiología intervencional.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Segunda semana y más',
      title: 'Walking (TVP) y Wonder drugs (Fiebre por fármacos)',
      cards: [
        {
          title: 'Walking: Trombosis venosa profunda y TEP',
          tag: 'Día siete al diez',
          kind: 'alert',
          items: [
            {
              t: 'Sospecha clínica en extremidad inferior',
              d: 'Edema asimétrico de pantorrilla, dolor a la dorsiflexión y febrícula',
              say: 'Entre el séptimo y décimo día postoperatorio la fiebre puede ser la primera manifestación de una trombosis venosa profunda, acompañada de aumento de volumen unilateral de la pantorrilla.',
            },
            {
              t: 'Eco-Doppler y anticoagulación inmediata',
              d: 'Confirmación diagnóstica con ecografía vascular venosa de compresión',
              say: 'Se solicita ecografía Doppler venosa de miembros inferiores e inicia de inmediato anticoagulación plena con heparina de bajo peso molecular para prevenir un tromboembolismo pulmonar letal.',
            },
          ],
        },
        {
          title: 'Wonder drugs: Fiebre medicamentosa',
          tag: 'Diagnóstico de exclusión',
          kind: 'pharma',
          items: [
            {
              t: 'Paciente en buen estado general con eosinofilia',
              d: 'Fiebre persistente sin foco infeccioso que coincide con antibióticos',
              say: 'Sospecha fiebre farmacológica en pacientes que lucen bien, afebriles clínicamente pero con temperatura elevada en el termómetro, a menudo con eosinofilia o exantema cutáneo leve.',
            },
            {
              t: 'Fármacos culpables frecuentes y resolución',
              d: 'Betalactámicos, sulfas, heparina, fenitoína y quinidina',
              say: 'Los antibióticos betalactámicos son los causantes más habituales. El diagnóstico se confirma y la fiebre desaparece dentro de las cuarenta y ocho horas posteriores a la suspensión del fármaco.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico cronológico',
      title: 'Regla de las 5 W y conducta clínica estandarizada',
      head: ['Mnemotecnia', 'Etiología principal', 'Momento postoperatorio', 'Tratamiento de elección'],
      rows: [
        {
          cells: ['WIND (Pulmón)', 'Atelectasia pulmonar', 'Días 1 a 2 (24 a 48 horas)', 'Kinesiterapia respiratoria y analgesia (NO antibióticos)'],
          say: 'En las primeras cuarenta y ocho horas la atelectasia se maneja con kinesiterapia y analgesia sin usar antibióticos.',
        },
        {
          cells: ['WATER (Orina)', 'Infección urinaria nosocomial', 'Días 3 a 5', 'Retiro de sonda Foley, cultivo y antibiótico'],
          say: 'Hacia el tercer día la infección urinaria exige retirar la sonda vesical y tratar según cultivo.',
        },
        {
          cells: ['WOUND (Herida)', 'Infección del sitio quirúrgico', 'Días 5 a 7', 'Apertura de puntos, drenaje y curaciones abiertas'],
          say: 'Hacia el quinto día la herida infectada se resuelve abriendo las suturas y drenando el pus.',
        },
        {
          cells: ['WALKING (Venas)', 'Trombosis venosa profunda', 'Días 7 a 10', 'Eco-Doppler venoso y anticoagulación con HBPM'],
          say: 'En la segunda semana la trombosis venosa profunda requiere Eco-Doppler e inicio de anticoagulación con heparina.',
        },
        {
          cells: ['WONDER DRUGS', 'Fiebre medicamentosa', 'Día 7 o posterior', 'Suspensión del fármaco sospechoso causal'],
          say: 'La fiebre por fármacos es tardía en un paciente con buen estado general y cede al retirar el medicamento.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de enfrentamiento escalonado de la fiebre postoperatoria',
      say: 'Analicemos el árbol de decisiones frente a un paciente hospitalizado que presenta un alza térmica en el postoperatorio.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en la evaluación de la fiebre postquirúrgica',
      head: ['Escenario clínico', 'Conducta médica correcta', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Fiebre en día 1 post-laparotomía con herida limpia',
            'Kinesiterapia respiratoria y buena analgesia',
            'Iniciar ceftriaxona endovenosa creyendo que es neumonía',
          ],
          say: 'Dar antibióticos por fiebre en el primer día postoperatorio con herida limpia es un error grave de sobretratamiento.',
        },
        {
          cells: [
            'Herida con pus y eritema en día 6 postoperatorio',
            'Retirar puntos del área y drenar la colección',
            'Dar antibióticos orales manteniendo la herida cerrada',
          ],
          say: 'Los antibióticos no curan una herida con pus acumulado: la incisión debe abrirse y drenarse.',
        },
        {
          cells: [
            'Fiebre en día 4 con sonda Foley hace 5 días',
            'Retirar sonda Foley y solicitar urocultivo',
            'Mantener la sonda y pasar antibióticos empíricos',
          ],
          say: 'Dejar la sonda vesical perpetúa la infección urinaria nosocomial.',
        },
        {
          cells: [
            'Fiebre en día 8 en paciente afebril con rash y cefalosporina',
            'Suspender el antibiótico sospechoso',
            'Escalar a vancomicina o carbapenémicos por sospecha de sepsis',
          ],
          say: 'Escalar antibióticos ante una fiebre medicamentosa agrava el cuadro; la solución es suspender el fármaco.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.005',
      stem: 'Un hombre de 62 años operado de gastrectomía subtotal hace 24 horas presenta fiebre de 38.4 °C. Al examen físico se encuentra hemodinámicamente estable con FC 92 lpm, FR 22 rpm y SatO2 93% a aire ambiental. La herida operatoria está limpia, seca y sin eritema. La auscultación pulmonar revela murmullo vesicular disminuido y crepitaciones bibasales. ¿Cuál es la conducta más adecuada en este momento?',
      question: '¿Cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Iniciar ceftriaxona endovenosa dos gramos al día' },
        { letter: 'B', text: 'Indicar analgesia adecuada, kinesiterapia respiratoria y deambulación' },
        { letter: 'C', text: 'Abrir la herida quirúrgica para descartar infección oculta' },
        { letter: 'D', text: 'Instalar catéter venoso central para monitorización' },
        { letter: 'E', text: 'Solicitar broncoscopía urgente con lavado alveolar' },
      ],
      correct: 'B',
      explanation: 'En las primeras 24 a 48 horas postoperatorias la causa más frecuente de fiebre es la atelectasia pulmonar (Wind), causada por hipoventilación basal y dolor. El tratamiento consiste en optimizar la analgesia, incentivar la espirometría o kinesiterapia respiratoria y movilizar al paciente fuera de cama. No se requieren antibióticos.',
      say: {
        stem: 'Revisemos este caso clásico de las primeras cuarenta y ocho horas. Un paciente operado hace veinticuatro horas hace fiebre de treinta y ocho cuatro grados con crepitaciones en bases y herida limpia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas proponen: ceftriaxona endovenosa, analgesia y kinesiterapia respiratoria, abrir la herida, catéter venoso central o broncoscopía. Piénsalo.',
        answer: 'La respuesta correcta es la B, analgesia adecuada, kinesiterapia y deambulación precoz. En las primeras veinticuatro horas la causa indiscutida de fiebre es la atelectasia pulmonar. No es una neumonía bacteriana, por lo que la opción A con antibióticos es incorrecta. Se maneja aliviando el dolor para permitir una ventilación profunda y expandiendo los alvéolos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.005',
      stem: 'Una mujer de 45 años intervenida de histerectomía abdominal hace 6 días consulta en urgencias por fiebre de 38.6 °C y dolor progresivo en la herida operatoria. Al examen físico destaca eritema perilesional de 3 cm, calor local, dolor intenso a la palpación y salida de líquido purulento a través del tercio medio de la sutura. ¿Cuál es la conducta terapéutica de elección inicial?',
      question: '¿Cuál es la conducta terapéutica de elección?',
      options: [
        { letter: 'A', text: 'Iniciar ciprofloxacino oral manteniendo la sutura hermética cerrada' },
        { letter: 'B', text: 'Retirar los puntos de sutura del área, abrir la herida y realizar aseo abierto' },
        { letter: 'C', text: 'Solicitar resonancia magnética de pelvis antes de intervenir la herida' },
        { letter: 'D', text: 'Administrar corticoides endovenosos en altas dosis' },
        { letter: 'E', text: 'Comprimir vigorosamente la herida sin retirar los puntos' },
      ],
      correct: 'B',
      explanation: 'El cuadro corresponde a una infección del sitio quirúrgico incisional en el sexto día postoperatorio (Wound). La conducta quirúrgica de elección es retirar los puntos de sutura del segmento comprometido, evacuar el pus acumulado, lavar profusamente y dejar la herida abierta para curaciones secundarias.',
      say: {
        stem: 'Analicemos este caso típico del sexto día postoperatorio. Una paciente presenta fiebre, dolor eritematoso y secreción purulenta franca a través de la herida quirúrgica de una histerectomía.',
        question: '¿Cuál es la conducta inicial correcta?',
        options: 'Las opciones son: ciprofloxacino oral con herida cerrada, retirar puntos y abrir la herida para curación abierta, resonancia magnética, corticoides endovenosos o comprimir sin descoser. Piénsalo.',
        answer: 'La respuesta correcta es la B, retirar los puntos de sutura, abrir la herida y realizar curaciones abiertas. El principio hipocrático de ubi pus, ibi evacua manda en cirugía: donde hay pus acumulado debe drenarse mecánicamente. Mantener la sutura cerrada con antibióticos orales solo perpetúa el absceso de pared.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en fiebre postoperatoria',
      cards: [
        {
          title: 'Cronología y antibióticos',
          tag: 'Conducta racional',
          kind: 'alert',
          items: [
            {
              t: 'Día uno es atelectasia, no infección bacteriana',
              d: 'Manejo con kinesiterapia y deambulación; prohibido dar antibióticos a ciegas',
              say: 'La fiebre en las primeras cuarenta y ocho horas es atelectasia hasta demostrar lo contrario: no indiques antibióticos.',
            },
            {
              t: 'Día cinco exige examinar la herida',
              d: 'Si hay pus se retiran los puntos y se drena; los antibióticos son secundarios',
              say: 'Hacia el quinto a séptimo día el pus de la herida se trata abriendo la piel, no con pastillas.',
            },
          ],
        },
        {
          title: 'Causas no infecciosas tardías',
          tag: 'Trombosis y medicamentos',
          kind: 'key',
          items: [
            {
              t: 'Día siete con pantorrilla hinchada es TVP',
              d: 'Eco-Doppler venoso de compresión e inicio de anticoagulación terapéutica',
              say: 'Si la fiebre aparece en la segunda semana con asimetría en piernas, descarta trombosis venosa profunda.',
            },
            {
              t: 'Fiebre medicamentosa cura retirando el fármaco',
              d: 'Paciente en buen estado con eosinofilia tras recibir betalactámicos prolongados',
              say: 'Si te llevas una sola idea de hoy: la fiebre postoperatoria tiene un reloj cronológico estricto: Wind en los días uno y dos, Water en los días tres a cinco, Wound en los días cinco a siete y Walking hacia la segunda semana. Jamás prescribas antibióticos a ciegas sin examinar la incisión y los accesos vasculares del paciente. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Evaluación Escalonada de la Fiebre Postoperatoria',
    root: N(
      'start',
      'Paciente con fiebre postoperatoria mayor a 38 °C',
      'Determinar día postoperatorio exacto y examen físico completo',
      'Iniciamos el enfrentamiento clínico identificando el día transcurrido desde la intervención quirúrgica.',
      [
        'Días 1 a 2 postoperatorios (Wind)',
        N(
          'q',
          '¿Auscultación pulmonar alterada o dolor incisional?',
          'Crepitaciones bibasales, taquipnea leve y herida limpia',
          'Evaluamos la presencia de atelectasia pulmonar por hipoventilación basal.',
          [
            'Atelectasia pulmonar típica',
            N(
              'do',
              'Kinesiterapia respiratoria y analgesia',
              'Espirometría incentivada y deambulación precoz',
              'Se optimiza la analgesia parenteral y se inician ejercicios respiratorios sin indicar antibióticos.'
            )
          ]
        )
      ],
      [
        'Días 3 a 5 postoperatorios (Water)',
        N(
          'q',
          '¿Portador de sonda vesical o flebitis de vía venosa?',
          'Disuria, orina turbia o cordón venoso periférico eritematoso',
          'Buscamos focos en la vía urinaria y accesos vasculares periféricos.',
          [
            'Infección urinaria o flebitis',
            N(
              'do',
              'Retiro de catéter y cultivo dirigido',
              'Retirar sonda Foley o rotar acceso venoso a contralateral',
              'Se retira el dispositivo causante y se inicia tratamiento antibiótico específico según urocultivo.'
            )
          ]
        )
      ],
      [
        'Días 5 a 7 postoperatorios (Wound)',
        N(
          'q',
          '¿Signos inflamatorios o pus en la herida quirúrgica?',
          'Eritema, calor, dolor exquisito o secreción purulenta',
          'Inspeccionamos directamente la incisión quirúrgica retirando el apósito.',
          [
            'Infección de herida operatoria',
            N(
              'alert',
              'Apertura de sutura y drenaje del pus',
              'Curaciones abiertas y antibióticos solo si celulitis extensa',
              'Se retiran los puntos del segmento comprometido para evacuar la colección y lavar profusamente.'
            )
          ]
        )
      ]
    ),
  },
};
