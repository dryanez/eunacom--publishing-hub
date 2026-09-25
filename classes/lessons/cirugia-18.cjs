// Clase 11.18 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Manejo de heridas traumáticas, mordeduras de perro, gato y humanas, profilaxis antirrábica y protocolo oficial antitetánico',
      say: 'Bienvenidos a la clase de manejo de heridas traumáticas, mordeduras y profilaxis antitetánica. Este es uno de los temas más prácticos y frecuentemente preguntados en el EUNACOM para la atención en servicios de urgencia y consultorios. Hoy dominaremos el protocolo oficial de profilaxis antitetánica del Ministerio de Salud, las indicaciones precisas de vacuna e inmunoglobulina, el tratamiento antimicrobiano de las mordeduras y las reglas estrictas sobre cuándo está prohibido suturar una herida. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo y microbiología',
      title: 'Cinemática de la herida, riesgo tetanígeno y microbiología oral',
      nodes: [
        { id: 'tra', col: 0, row: 2, k: 'start', t: 'Herida traumática aguda', s: 'Corte por metal · punción · abrasión con tierra · mordedura' },
        { id: 'tet', col: 1, row: 0, k: 'alert', t: 'Riesgo de tétanos', s: 'Clostridium tetani en heridas sucias o contaminadas' },
        { id: 'gat', col: 1, row: 2, k: 'risk', t: 'Mordedura de gato o perro', s: 'Pasteurella multocida y Capnocytophaga canimorsus' },
        { id: 'hum', col: 1, row: 3, k: 'trap', t: 'Mordedura humana', s: 'Eikenella corrodens, estreptococos y anaerobios orales' },
        { id: 'amx', col: 2, row: 2, k: 'good', t: 'Amoxicilina con ácido clavulánico', s: 'Antibiótico de primera línea en todas las mordeduras' },
        { id: 'ase', col: 3, row: 1, k: 'good', t: 'Irrigación copiosa a presión', s: 'Suero fisiológico abundante y no suturar de regla' },
      ],
      edges: [
        { from: 'tra', to: 'tet', label: 'esporas telúricas' },
        { from: 'tra', to: 'gat', label: 'saliva animal' },
        { from: 'tra', to: 'hum', label: 'flora oral' },
        { from: 'gat', to: 'amx', label: 'primera línea' },
        { from: 'hum', to: 'amx', label: 'primera línea' },
        { from: 'amx', to: 'ase', label: 'manejo integral' },
        { from: 'tet', to: 'ase', label: 'debridamiento' },
      ],
      steps: [
        {
          show: ['tra', 'tet'],
          note: 'El riesgo tetanígeno universal',
          say: 'Toda herida abierta contaminada con tierra, heces, saliva animal o metales oxidados es potencialmente tetanígena. Las esporas anaerobias de Clostridium tetani proliferan en tejidos desvitalizados y con hipoxia tisular.',
        },
        {
          show: ['gat', 'hum', 'amx'],
          note: 'Microbiología de las mordeduras',
          say: 'En las mordeduras de gato y perro el patógeno más peligroso es Pasteurella multocida, que causa celulitis fulminante en menos de veinticuatro horas. En la mordedura humana destaca Eikenella corrodens junto a anaerobios. El antibiótico de elección indiscutido para ambas es amoxicilina con ácido clavulánico.',
        },
        {
          show: ['ase'],
          note: 'Aseo mecánico y conducta con sutura',
          say: 'El pilar más importante del tratamiento es el lavado profuso con suero fisiológico a presión. Recuerda la regla de oro: las mordeduras no se suturan de regla para evitar abscesos cerrados y flemones profundos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmunoprofilaxis oficial',
      title: 'Protocolo de profilaxis antitetánica según el MINSAL',
      cards: [
        {
          title: 'Clasificación de la herida',
          tag: 'Limpia menor vs Sucia tetanígena',
          kind: 'criteria',
          items: [
            {
              t: 'Herida limpia y menor',
              d: 'Corte superficial limpio sin tejido necrótico ni contacto con tierra',
              say: 'Una herida limpia es aquella superficial, reciente y no contaminada con tierra, polvo o cuerpos extraños, como un corte con cuchillo limpio de cocina.',
            },
            {
              t: 'Herida sucia o tetanígena',
              d: 'Contaminación con tierra, óxido, mordeduras, quemaduras o tejido aplastado',
              say: 'Es tetanígena toda herida con restos de tierra, heces, orina, óxido, aplastamiento, quemaduras profundas, heridas punzantes o mordeduras animales y humanas.',
            },
          ],
        },
        {
          title: 'Criterios de Vacuna (dT) e Inmunoglobulina (TIG)',
          tag: 'Reglas de corte temporal',
          kind: 'alert',
          items: [
            {
              t: 'Vacunación previa completa con tres o más dosis',
              d: 'NUNCA requiere inmunoglobulina; solo refuerzo vacunal si pasaron años',
              say: 'Si el paciente tiene su esquema completo de tres dosis o más, jamás requiere inmunoglobulina. Solo necesita una dosis de refuerzo de vacuna si pasaron más de cinco años en heridas sucias o más de diez años en heridas limpias.',
            },
            {
              t: 'Vacunación incompleta menor a tres dosis o desconocida',
              d: 'Requiere vacuna en toda herida e Inmunoglobulina (TIG) si es sucia',
              say: 'Si no tiene las tres dosis o no recuerda sus vacunas, se inicia el esquema vacunal. Si además la herida es sucia, se administra obligatoriamente la inmunoglobulina antitetánica de doscientas cincuenta unidades en un sitio anatómico diferente.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Norma técnica nacional',
      title: 'Profilaxis antitetánica según antecedente de vacunas y tipo de herida',
      head: ['Historia de vacunación previa', 'Herida limpia menor', 'Herida sucia o tetanígena', 'Conducta con inmunoglobulina'],
      rows: [
        {
          cells: ['Incierta o menor a tres dosis', 'Vacuna dT: Sí iniciar', 'Vacuna dT: Sí iniciar', 'TIG 250 UI solo en herida sucia'],
          say: 'Con antecedentes inciertos o menos de tres dosis se indica vacuna en todas las heridas y se agrega inmunoglobulina solo si la herida es sucia.',
        },
        {
          cells: ['Tres o más dosis (última < 5 años)', 'Vacuna dT: No necesaria', 'Vacuna dT: No necesaria', 'TIG: No necesaria nunca'],
          say: 'Si el paciente tiene tres o más dosis y el último refuerzo fue hace menos de cinco años, no requiere ninguna intervención.',
        },
        {
          cells: ['Tres o más dosis (última 5 a 10 años)', 'Vacuna dT: No necesaria', 'Vacuna dT: Sí administrar refuerzo', 'TIG: No necesaria nunca'],
          say: 'Si pasaron entre cinco y diez años desde la última dosis, solo se administra refuerzo de vacuna en heridas sucias.',
        },
        {
          cells: ['Tres o más dosis (última > 10 años)', 'Vacuna dT: Sí administrar refuerzo', 'Vacuna dT: Sí administrar refuerzo', 'TIG: No necesaria nunca'],
          say: 'Si transcurrieron más de diez años de la última vacuna, se indica refuerzo de toxoide tanto en heridas limpias como en sucias.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica quirúrgica básica',
      title: 'Manejo de heridas traumáticas y técnica de sutura',
      cards: [
        {
          title: 'Preparación y lavado de la herida',
          tag: 'Aseo a presión',
          kind: 'key',
          items: [
            {
              t: 'Irrigación copiosa con suero fisiológico',
              d: 'Presión suave con jeringa de veinte mililitros y aguja dieciocho',
              say: 'El factor determinante para prevenir la infección es la irrigación mecánica con abundante suero fisiológico a presión. No se deben verter antisépticos puros como alcohol o povidona yodada dentro del lecho.',
            },
            {
              t: 'Desbridamiento de bordes necróticos',
              d: 'Retirar tejido desvitalizado y regularizar bordes macerados',
              say: 'Los bordes macerados y desvitalizados deben resecárse conservadoramente con tijera para asegurar un margen dérmico sano y sangrante apto para cicatrizar.',
            },
          ],
        },
        {
          title: 'Ventana de cierre primario',
          tag: 'Tiempos seguros',
          kind: 'criteria',
          items: [
            {
              t: 'Cierre primario en seis a doce horas',
              d: 'Límite estándar en extremidades y tronco para sutura inmediata',
              say: 'En el tronco y las extremidades la ventana de tiempo estándar para realizar un cierre primario seguro es de seis a doce horas desde el traumatismo. Pasado este plazo, el cierre primario hermético se asocia a una elevada tasa de infección purulenta, prefiriéndose el cierre por segunda intención o diferido.',
            },
            {
              t: 'Excepción facial de veinticuatro horas',
              d: 'La excelente vascularización de la cara tolera cierre más tardío',
              say: 'La cara posee una rica irrigación que permite realizar sutura primaria por razones estéticas hasta doce a veinticuatro horas después del trauma tras un aseo quirúrgico meticuloso.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma por mordedura',
      title: 'Mordeduras animales: perro versus gato',
      cards: [
        {
          title: 'Mordedura de gato: punción profunda',
          tag: 'Alto riesgo de infección',
          kind: 'alert',
          items: [
            {
              t: 'Colmillos afilados y finos que inoculan gérmenes',
              d: 'Más del cincuenta por ciento se infecta por Pasteurella multocida',
              say: 'Los dientes de gato actúan como agujas que inoculan Pasteurella multocida en la profundidad del tejido celular o las vainas tendíneas de la mano, con más del cincuenta por ciento de infección severa.',
            },
            {
              t: 'Prohibido suturar heridas por gato',
              d: 'Dejar siempre abiertas para drenaje y curaciones secundarias',
              say: 'Está terminantemente prohibido suturar las punciones por mordedura de gato. Cerrar la piel atrapa las bacterias y genera flemones de mano y artritis séptica.',
            },
          ],
        },
        {
          title: 'Mordedura de perro: laceración y desgarro',
          tag: 'Capnocytophaga y trauma',
          kind: 'key',
          items: [
            {
              t: 'Trauma por aplastamiento y desgarro tisular',
              d: 'Capnocytophaga canimorsus puede provocar sepsis en asplénicos',
              say: 'El perro produce lesiones combinadas por desgarro, avulsión y aplastamiento de tejidos blandos. Además de la flora habitual, la bacteria Capnocytophaga canimorsus presente en su saliva puede causar bacteriemia fulminante, shock séptico y gangrena periférica en pacientes asplénicos o con cirrosis hepática.',
            },
            {
              t: 'Antibioticoterapia de primera línea obligatoria',
              d: 'Amoxicilina con ácido clavulánico por vía oral durante siete a diez días',
              say: 'Toda mordedura en manos, cerca de articulaciones, infectada o causada por gato exige profilaxis antibiótica con amoxicilina con ácido clavulánico oral.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Flora humana y zoonosis',
      title: 'Mordeduras humanas y profilaxis antirrábica',
      cards: [
        {
          title: 'Mordedura humana y herida de pelea',
          tag: 'Eikenella corrodens',
          kind: 'alert',
          items: [
            {
              t: 'Herida de puño cerrado contra la dentadura',
              d: 'Laceración sobre nudillos inocula flora oral en articulación metacarpofalángica',
              say: 'El golpe de puño cerrado contra la boca de un oponente introduce flora oral directamente en el espacio articular de los nudillos, requiriendo aseo quirúrgico y amoxicilina-clavulánico.',
            },
            {
              t: 'Prohibición estricta de sutura',
              d: 'La saliva humana es altamente séptica con anaerobios virulentos',
              say: 'Las mordeduras humanas nunca se suturan de forma primaria debido a la altísima concentración de gérmenes virulentos como Eikenella corrodens.',
            },
          ],
        },
        {
          title: 'Profilaxis antirrábica oficial',
          tag: 'Murciélagos y silvestres',
          kind: 'key',
          items: [
            {
              t: 'Indicación inmediata sin esperar observación',
              d: 'Mordedura de murciélago o animales silvestres carnívoros',
              say: 'Cualquier contacto o mordedura provocada por murciélagos, zorros u otros animales silvestres carnívoros exige iniciar de inmediato el esquema de vacunación antirrábica e inmunoglobulina específica sin perder tiempo esperando la captura o el análisis del animal, ya que la rabia humana es casi cien por ciento letal.',
            },
            {
              t: 'Observación de perros y gatos domésticos',
              d: 'Vigilancia veterinaria durante diez días si el animal es ubicable',
              say: 'En cambio, si la mordedura fue causada por un perro o gato doméstico ubicable y sano, se mantiene al animal bajo estricta observación veterinaria durante diez días corridos. Si el animal no enferma ni muere en ese plazo, se descarta rabia y no es necesario administrar la vacuna antirrábica al paciente.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de enfrentamiento de heridas y mordeduras',
      say: 'Analicemos el árbol de decisiones ante una herida traumática o mordedura en el servicio de urgencias.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en el manejo de heridas y profilaxis',
      head: ['Escenario clínico', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Mordedura de gato reciente en la palma',
            'Irrigación profusa, dejar abierta y dar amoxi-clavulánico',
            'Suturar herméticamente e indicar cloxacilina oral',
          ],
          say: 'La cloxacilina no cubre Pasteurella multocida y suturar la mordedura provoca flemones profundos.',
        },
        {
          cells: [
            'Herida con tierra y última vacuna hace 7 años',
            'Refuerzo exclusivo de vacuna dT (sin inmunoglobulina)',
            'Administrar inmunoglobulina antitetánica TIG innecesariamente',
          ],
          say: 'Si el paciente tiene tres dosis previas jamás requiere inmunoglobulina, solo una dosis de vacuna.',
        },
        {
          cells: [
            'Herida sucia con antecedentes de vacunas desconocidos',
            'Administrar vacuna dT más inmunoglobulina TIG',
            'Dar solo la vacuna sin aportar anticuerpos pasivos de rescate',
          ],
          say: 'En herida sucia sin vacunas conocidas se deben administrar vacuna e inmunoglobulina en sitios anatómicos separados.',
        },
        {
          cells: [
            'Lavado de herida penetrante de partes blandas',
            'Irrigación copiosa con suero fisiológico a presión',
            'Inyectar alcohol o povidona yodada pura en la herida',
          ],
          say: 'Los antisépticos en el interior de la herida son citotóxicos y retrasan la cicatrización natural.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: 'Un hombre de 35 años consulta en el servicio de urgencias 2 horas después de haber sido mordido en la mano derecha por el gato de su vecina. Al examen físico se aprecian dos heridas puntiformes en la eminencia tenar con dolor leve, sin compromiso tendíneo evidente. ¿Cuál es la conducta terapéutica inicial más adecuada?',
      question: '¿Cuál es la conducta inicial correcta?',
      options: [
        { letter: 'A', text: 'Realizar aseo con suero, suturar las heridas e indicar ciprofloxacino oral' },
        { letter: 'B', text: 'Irrigar con suero fisiológico, dejar las heridas abiertas e indicar amoxicilina con ácido clavulánico' },
        { letter: 'C', text: 'Administrar cloxacilina oral durante diez días y suturar herméticamente' },
        { letter: 'D', text: 'Indicar reposo en cabestrillo sin antibióticos por ser gato doméstico' },
        { letter: 'E', text: 'Realizar exploración quirúrgica de urgencia bajo anestesia general' },
      ],
      correct: 'B',
      explanation: 'Las mordeduras de gato tienen un alto riesgo de infección por Pasteurella multocida debido a sus colmillos delgados que actúan como punciones profundas. El manejo estándar consiste en abundante irrigación con solución salina a presión, NO suturar para evitar flemones profundos e iniciar profilaxis antibiótica precoz con amoxicilina con ácido clavulánico.',
      say: {
        stem: 'Revisemos esta clásica pregunta sobre mordeduras animales. Un hombre de treinta y cinco años es mordido por un gato en la mano derecha dos horas antes y presenta heridas puntiformes en la palma.',
        question: '¿Cuál es la conducta terapéutica inicial más adecuada?',
        options: 'Las alternativas proponen: suturar con ciprofloxacino, irrigar profusamente sin suturar y dar amoxicilina con ácido clavulánico, cloxacilina con sutura, reposo sin antibióticos o pabellón inmediato. Piénsalo.',
        answer: 'La respuesta correcta es la B, irrigar profusamente con suero fisiológico, dejar las heridas abiertas e iniciar amoxicilina con ácido clavulánico. Las mordeduras de gato inoculan Pasteurella multocida en la profundidad. Suturar está contraindicado porque genera tenosinovitis infecciosa. El fármaco de primera línea es la amoxicilina con ácido clavulánico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: 'Una mujer de 58 años sufre una herida cortante de 4 cm en la pierna izquierda con una lata oxidada en su patio. La herida está sucia con tierra. La paciente refiere tener su esquema de vacunación completo de la infancia y adultez, habiendo recibido su última dosis de refuerzo de vacuna antitetánica hace 7 años. ¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
      question: '¿Cuál es la indicación de profilaxis antitetánica?',
      options: [
        { letter: 'A', text: 'No requiere ninguna intervención porque su última dosis fue hace menos de diez años' },
        { letter: 'B', text: 'Administrar únicamente una dosis de refuerzo de vacuna antitetánica (dT)' },
        { letter: 'C', text: 'Administrar únicamente inmunoglobulina humana antitetánica (TIG)' },
        { letter: 'D', text: 'Administrar vacuna antitetánica e inmunoglobulina antitetánica simultáneamente' },
        { letter: 'E', text: 'Indicar tratamiento con penicilina benzatina en lugar de vacunas' },
      ],
      correct: 'B',
      explanation: 'En un paciente con vacunación completa previa (tres o más dosis) que presenta una herida sucia o tetanígena, el protocolo oficial del MINSAL establece que solo requiere una dosis de refuerzo de vacuna antitetánica (dT) si han transcurrido más de 5 años desde la última dosis (en este caso pasaron 7 años). No requiere inmunoglobulina antitetánica porque conserva memoria inmunológica.',
      say: {
        stem: 'Analicemos este ejercicio del protocolo oficial antitetánico. Una mujer con vacunas al día sufre una herida sucia con lata oxidada. Su última dosis de vacuna antitetánica fue hace siete años.',
        question: '¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
        options: 'Las opciones son: no administrar nada, dar únicamente refuerzo de vacuna dT, dar solo inmunoglobulina, administrar vacuna e inmunoglobulina a la vez o penicilina benzatina. Piénsalo.',
        answer: 'La respuesta correcta es la B, administrar únicamente una dosis de refuerzo de vacuna antitetánica. Al estar vacunada previamente con más de tres dosis, jamás necesita inmunoglobulina. Pero como la herida es tetanígena y ya transcurrieron más de cinco años desde el último refuerzo, debe administrarse una dosis de vacuna dT.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en heridas traumáticas y mordeduras',
      cards: [
        {
          title: 'Profilaxis antitetánica racional',
          tag: 'Reglas del MINSAL',
          kind: 'alert',
          items: [
            {
              t: 'Vacunado completo nunca usa inmunoglobulina',
              d: 'Solo refuerzo de vacuna si pasaron más de cinco años en sucia o diez en limpia',
              say: 'Si el paciente tiene tres o más dosis de vacuna, jamás indiques inmunoglobulina.',
            },
            {
              t: 'Herida sucia sin vacunas exige ambas',
              d: 'Vacuna dT más Inmunoglobulina TIG en sitios anatómicos separados',
              say: 'En herida sucia con vacunas desconocidas debes administrar vacuna e inmunoglobulina en sitios separados.',
            },
          ],
        },
        {
          title: 'Mordeduras y cierre de heridas',
          tag: 'Criterios de seguridad',
          kind: 'key',
          items: [
            {
              t: 'Mordeduras no se suturan de regla',
              d: 'Aseo a presión, curación abierta y amoxicilina con ácido clavulánico',
              say: 'No sutures mordeduras de animales o humanas: trátalas abiertas y con amoxicilina-clavulánico.',
            },
            {
              t: 'Murciélago es antirrábica de inmediato',
              d: 'Vacunación obligatoria sin esperar captura ni observación del animal',
              say: 'Si te llevas una sola idea de hoy: en el manejo de heridas contaminadas, irriga abundantemente con suero fisiológico a presión, no satures las mordeduras de regla, indica amoxicilina con ácido clavulánico y aplica el protocolo oficial antitetánico administrando solo vacuna si el paciente ya tenía su esquema completo. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Heridas Traumáticas y Mordeduras',
    root: N(
      'start',
      'Paciente con herida traumática o mordedura en urgencias',
      'Examen neurovascular, lavado copioso y evaluación de riesgo',
      'Iniciamos el enfrentamiento clínico lavando con suero a presión y evaluando el mecanismo causal.',
      [
        '¿Herida por mordedura animal o humana?',
        N(
          'alert',
          'Riesgo elevado de infección por flora oral',
          'Pasteurella multocida, Eikenella corrodens y anaerobios',
          'Identificamos si la lesión fue causada por dientes humanos, perro o gato.',
          [
            'Manejo de la mordedura',
            N(
              'do',
              'Aseo a presión, no suturar y antibiótico oral',
              'Amoxicilina con ácido clavulánico por siete a diez días',
              'Se irriga copiosamente con suero, se deja la herida abierta y se inicia amoxicilina con ácido clavulánico.'
            )
          ]
        )
      ],
      [
        'Evaluación de profilaxis antitetánica (MINSAL)',
        N(
          'q',
          '¿Antecedente de vacunación previa completa (≥ 3 dosis)?',
          'Verificación de carnet o historia de vacunación',
          'Evaluamos el estado inmunitario del paciente contra el tétanos.',
          [
            'Vacunación completa previa',
            N(
              'ok',
              'NUNCA requiere inmunoglobulina antitetánica',
              'Evaluar tiempo desde el último refuerzo',
              'El paciente conserva memoria inmune: solo requiere vacuna si pasaron más de cinco años en herida sucia.'
            )
          ],
          [
            'Vacunación incompleta (< 3 dosis) o incierta',
            N(
              'alert',
              'Vacuna dT más Inmunoglobulina en herida sucia',
              'Toxoides e inmunoglobulina en sitios anatómicos separados',
              'Se inicia esquema con vacuna dT y se administra TIG doscientas cincuenta unidades si la herida es tetanígena.'
            )
          ]
        )
      ]
    ),
  },
};
