// Clase 11.17 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Infección del sitio quirúrgico incisional y profunda, dehiscencia aponeurótica, líquido en agua de carne y evisceración aguda',
      say: 'Bienvenidos a la clase de infección de sitio quirúrgico, dehiscencia de herida y evisceración aguda. Estas complicaciones de la incisión operatoria generan gran morbimortalidad y son evaluadas con frecuencia en el EUNACOM. Durante esta sesión aprenderemos a clasificar las heridas quirúrgicas para indicar profilaxis racional, a diagnosticar la dehiscencia de fascia ante el clásico líquido en agua de carne y a ejecutar la conducta de emergencia ante una evisceración aguda sin cometer errores fatales. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Contaminación y profilaxis',
      title: 'Clasificación de heridas quirúrgicas e indicación de antimicrobianos',
      nodes: [
        { id: 'her', col: 0, row: 2, k: 'start', t: 'Incisión quirúrgica programada', s: 'Evaluación del riesgo de contaminación bacteriana' },
        { id: 'c1', col: 1, row: 0, k: 'good', t: 'Clase I: Herida limpia', s: 'Sin apertura de tracto digestivo, biliar o respiratorio' },
        { id: 'pro', col: 2, row: 0, k: 'alert', t: '¿Uso de prótesis o malla sintética?', s: 'Excepción: hernioplastía con malla requiere Cefazolina' },
        { id: 'c2', col: 1, row: 2, k: 'mech', t: 'Clase II: Limpia-contaminada', s: 'Apertura controlada de tubo digestivo o vía biliar' },
        { id: 'c3', col: 2, row: 2, k: 'risk', t: 'Clase III: Contaminada', s: 'Fuga evidente de bilis o contenido entérico sin pus' },
        { id: 'c4', col: 3, row: 1, k: 'trap', t: 'Clase IV: Sucia o infectada', s: 'Peritonitis purulenta, heces o tejido desvitalizado' },
        { id: 'tx', col: 4, row: 1, k: 'good', t: 'Antibioticoterapia terapéutica', s: 'Tratamiento prolongado terapéutico, no profilaxis' },
      ],
      edges: [
        { from: 'her', to: 'c1', label: 'sin víscera hueca' },
        { from: 'c1', to: 'pro', label: 'evaluar implante' },
        { from: 'her', to: 'c2', label: 'apertura controlada' },
        { from: 'her', to: 'c3', label: 'derrame o trauma' },
        { from: 'her', to: 'c4', label: 'infección activa' },
        { from: 'c3', to: 'tx', label: 'esquema curativo' },
        { from: 'c4', to: 'tx', label: 'esquema curativo' },
      ],
      steps: [
        {
          show: ['her', 'c1', 'pro'],
          note: 'Heridas limpias y la excepción de la malla',
          say: 'Las heridas limpias no atraviesan vísceras huecas ni presentan inflamación activa. Por norma general no requieren antibióticos profilácticos, con una excepción obligatoria en el EUNACOM: cuando se implanta material protésico permanente como una malla en una hernioplastía, donde se indica cefazolina preoperatoria.',
        },
        {
          show: ['c2'],
          note: 'Heridas limpia-contaminadas y profilaxis estándar',
          say: 'Las heridas limpia-contaminadas corresponden a cirugías donde se abre el tubo digestivo, urinario o biliar bajo condiciones controladas sin derrame inusual, como una colecistectomía programada. Aquí la profilaxis antibiótica preincisional de dosis única es mandatoria.',
        },
        {
          show: ['c3', 'c4', 'tx'],
          note: 'Heridas contaminadas y sucias: tratamiento terapéutico',
          say: 'En las heridas contaminadas y sucias existe contaminación bacteriana masiva o peritonitis purulenta establecida. En estos escenarios ya no hablamos de profilaxis sino de tratamiento antibiótico terapéutico parenteral prolongado por varios días.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación CDC / MINSAL',
      title: 'Categorías de Infección del Sitio Quirúrgico (ISQ)',
      cards: [
        {
          title: 'ISQ Incisional Superficial y Profunda',
          tag: 'Compromiso de pared',
          kind: 'criteria',
          items: [
            {
              t: 'Incisional superficial: piel y celular subcutáneo',
              d: 'Aparece dentro de los treinta días con dolor, eritema y pus',
              say: 'La infección superficial solo afecta la piel y el tejido celular subcutáneo. El diagnóstico es clínico por la presencia de secreción purulenta y signos inflamatorios locales en el primer mes.',
            },
            {
              t: 'Incisional profunda: fascia y músculo',
              d: 'Drenaje purulento profundo o dehiscencia espontánea de la fascia',
              say: 'La infección profunda compromete la aponeurosis o las capas musculares de la pared. Suele asociarse a fiebre alta y requiere exploración y desbridamiento del tejido fascial necrótico.',
            },
          ],
        },
        {
          title: 'ISQ de Órgano y Espacio',
          tag: 'Compromiso cavitario',
          kind: 'alert',
          items: [
            {
              t: 'Compromiso de cavidades anatómicas manipuladas',
              d: 'Abscesos intraabdominales, colecciones pélvicas o peritonitis postquirúrgica',
              say: 'La infección de órgano o espacio se desarrolla en cualquier zona anatómica manipulada durante la intervención, como un absceso subfrénico o peritonitis residual tras una apendicectomía.',
            },
            {
              t: 'Confirmación y resolución mínimamente invasiva',
              d: 'Tomografía computarizada con contraste y drenaje percutáneo guiado',
              say: 'El diagnóstico se confirma mediante tomografía computarizada con contraste endovenoso, resolviéndose habitualmente mediante drenaje percutáneo guiado por radiología sin abrir el abdomen.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Buenas prácticas clínicas',
      title: 'Medidas de prevención de ISQ basadas en la evidencia',
      cards: [
        {
          title: 'Profilaxis antimicrobiana preincisional',
          tag: 'Momento de administración',
          kind: 'pharma',
          items: [
            {
              t: 'Administración treinta a sesenta minutos preincisión',
              d: 'Cefazolina dos gramos endovenosa durante la inducción anestésica',
              say: 'La cefazolina debe administrarse dentro de los sesenta minutos previos al corte quirúrgico para garantizar niveles tisulares bactericidas máximos al momento de abrir la piel.',
            },
            {
              t: 'Dosis única preoperatoria',
              d: 'Prolongar antibióticos en el postoperatorio no previene infecciones',
              say: 'En cirugías no complicadas basta una dosis única preoperatoria. Mantener antibióticos por dos o tres días tras la cirugía no reduce la infección y genera resistencia bacteriana.',
            },
          ],
        },
        {
          title: 'Preparación del paciente y control ambiental',
          tag: 'Normas de pabellón',
          kind: 'key',
          items: [
            {
              t: 'Prohibido el rasurado con hoja de afeitar',
              d: 'El corte con navaja genera microabrasiones que colonizan bacterias',
              say: 'Nunca rasures con máquina de afeitar la noche anterior: multiplica el riesgo de infección por microheridas cutáneas. Si es indispensable cortar el vello, se usa clipper eléctrico en pabellón.',
            },
            {
              t: 'Normotermia y normoglicemia perioperatoria',
              d: 'Evitar la hipotermia y mantener glicemias bajo ciento ochenta',
              say: 'Mantener la temperatura corporal sobre treinta y seis grados y controlar la glicemia en rangos normales optimiza la función leucocitaria y la cicatrización colágena.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación anatómica',
      title: 'Complicaciones de la herida quirúrgica y conducta estandarizada',
      head: ['Complicación', 'Plano comprometido', 'Manifestación patognomónica', 'Conducta quirúrgica'],
      rows: [
        {
          cells: ['ISQ superficial', 'Piel y tejido subcutáneo', 'Eritema local y pus entre bordes', 'Retiro de puntos, drenaje y aseo'],
          say: 'La infección superficial solo compromete la piel y el tejido celular subcutáneo. Se resuelve de forma inmediata retirando las suturas, drenando todo el pus acumulado y realizando curaciones húmedas por segunda intención.',
        },
        {
          cells: ['Dehiscencia de fascia', 'Aponeurosis muscular', 'Líquido en agua de carne profuso', 'Pabellón para resutura aponeurótica'],
          say: 'La dehiscencia aponeurótica avisa con la salida súbita de líquido serohemático acuoso en agua de carne tras un esfuerzo de tos y requiere reexploración urgente en pabellón quirúrgico para resuturar la fascia.',
        },
        {
          cells: ['Evisceración aguda', 'Todos los planos de la pared', 'Asas intestinales visibles al exterior', 'Compresas estériles tibias y pabellón directo'],
          say: 'La evisceración aguda expone las asas intestinales o el epiplón directamente al exterior. Exige cubrirlas de inmediato con compresas estériles empapadas en suero tibio y traslado urgente a quirófano sin manipularlas en la sala.',
        },
        {
          cells: ['Eventración tardía', 'Cicatriz aponeurótica antigua', 'Hernia incisional indolora meses después', 'Hernioplastía electiva con malla'],
          say: 'La eventración es la secuela tardía diferida y se repara en forma electiva con malla de refuerzo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Alerta de dehiscencia profunda',
      title: 'Dehiscencia aponeurótica y el clásico signo en agua de carne',
      cards: [
        {
          title: 'Fisiopatología del fallo de pared',
          tag: 'Quinto al octavo día',
          kind: 'alert',
          items: [
            {
              t: 'Ruptura de la sutura fascial profunda',
              d: 'Tensión excesiva por tos, obesidad, desnutrición o infección oculta',
              say: 'La dehiscencia aponeurótica ocurre clásicamente entre el quinto y octavo día postoperatorio, cuando la sutura cede por esfuerzos de tos, distensión abdominal o cierre deficiente.',
            },
            {
              t: 'Salida de líquido en agua de carne',
              d: 'Líquido serohemático acuoso rosado y profuso que empapa apósitos',
              say: 'El signo patognomónico que siempre pregunta el EUNACOM es la salida súbita y profusa de líquido serohemático rosado, descrito como en agua de carne, que empapa múltiples capas de gasa.',
            },
          ],
        },
        {
          title: 'Conducta médica ante la sospecha',
          tag: 'Exploración obligatoria',
          kind: 'key',
          items: [
            {
              t: 'Inspección minuciosa retirando apósitos',
              d: 'Palpación de la brecha aponeurótica bajo la piel con técnica estéril',
              say: 'Todo apósito empapado en líquido acuoso exige retirar la curación e inspeccionar directamente la incisión. Si la piel está cerrada pero la aponeurosis se abrió, existe dehiscencia encubierta.',
            },
            {
              t: 'Reparación quirúrgica en pabellón',
              d: 'Reoperación de urgencia para aseo y cierre monofilamento con puntos totales',
              say: 'La dehiscencia de fascia es una indicación formal de retorno a pabellón quirúrgico para realizar un nuevo cierre de la pared con material irreabsorbible o puntos de retención.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia de piso',
      title: 'Evisceración aguda: conducta inmediata en la sala de hospitalización',
      cards: [
        {
          title: 'Cuadro clínico y error fatal proscrito',
          tag: 'Prohibido reintroducir',
          kind: 'alert',
          items: [
            {
              t: 'Exteriorización de vísceras abdominales',
              d: 'Protrusión súbita de asas de intestino delgado o epiplón tras esfuerzo',
              say: 'La evisceración es la salida de las vísceras hacia el exterior a través de la piel y aponeurosis completamente abiertas, desencadenada habitualmente por un golpe de tos o vómito.',
            },
            {
              t: 'NUNCA reintroducir las asas en la sala',
              d: 'La manipulación en cama perfora asas friables e introduce contaminación masiva',
              say: 'Esta es la regla cardinal del examen: jamás intentes reintroducir manualmente el intestino dentro del abdomen en la cama del paciente. Eso desgarra el mesenterio, perfora vísceras y desata peritonitis letal.',
            },
          ],
        },
        {
          title: 'Protocolo de rescate en la sala',
          tag: 'Manejo paso a paso',
          kind: 'key',
          items: [
            {
              t: 'Cubrir con compresas estériles húmedas tibias',
              d: 'Empapar compresas en suero fisiológico tibio para evitar la desecación isquémica',
              say: 'La conducta inmediata en la sala es cubrir suavemente las vísceras con compresas estériles empapadas en suero fisiológico tibio, evitando la hipotermia y la necrosis por desecación.',
            },
            {
              t: 'Traslado inmediato a pabellón quirúrgico',
              d: 'Régimen cero, analgesia parenteral y laparotomía de urgencia bajo anestesia general',
              say: 'Se suspende la vía oral, se indica analgesia endovenosa y se traslada de urgencia al quirófano para lavado peritoneal exhaustivo y reconstrucción formal de la pared abdominal.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de complicaciones de la herida quirúrgica',
      say: 'Analicemos el árbol de decisiones ante un paciente que presenta dolor, secreción o dehiscencia de la herida operatoria en el postoperatorio.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en complicaciones de herida quirúrgica',
      head: ['Situación clínica', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Evisceración aguda con asas en la cama',
            'Compresas estériles tibias y pabellón urgente',
            'Intentar reintroducir las asas manualmente en la sala',
          ],
          say: 'Reintroducir vísceras en la cama contamina y desgarra el intestino; deben cubrirse con compresas tibias y operar.',
        },
        {
          cells: [
            'Salida de líquido en agua de carne profuso',
            'Diagnosticar dehiscencia fascial y programar cirugía',
            'Creer que es exudado normal y colocar vendaje compresivo',
          ],
          say: 'El líquido en agua de carne nunca es normal: traduce rotura completa de la aponeurosis bajo la piel.',
        },
        {
          cells: [
            'Hernioplastía inguinal limpia con malla sintética',
            'Cefazolina dos gramos preoperatoria en inducción',
            'Omitir profilaxis por tratarse de una herida limpia clase uno',
          ],
          say: 'El implante de una malla sintética siempre exige profilaxis preoperatoria aunque la herida sea limpia.',
        },
        {
          cells: [
            'Infección superficial de herida con pus localizado',
            'Apertura de suturas, drenaje y curaciones abiertas',
            'Administrar antibióticos orales manteniendo la herida cerrada',
          ],
          say: 'Las heridas infectadas se curan abriendo los puntos y lavando, no con antibióticos cerrados.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.016',
      stem: 'Un hombre de 70 años, diabético y con EPOC, operado hace 7 días de resección sigmoidea programada, presenta súbita salida abundante de líquido rosado acuoso (en agua de carne) a través de la herida operatoria tras un esfuerzo de tos. Al retirar los apósitos se observa dehiscencia de la piel y aponeurosis con protrusión de asas de intestino delgado hacia el exterior. ¿Cuál es la conducta inmediata más adecuada?',
      question: '¿Cuál es la conducta médica inmediata?',
      options: [
        { letter: 'A', text: 'Reintroducir las asas manualmente en la cavidad y cerrar piel con puntos en sala' },
        { letter: 'B', text: 'Cubrir las asas evisceradas con compresas estériles húmedas tibias y trasladar a pabellón' },
        { letter: 'C', text: 'Aplicar vendaje compresivo elástico seco sobre el abdomen y observar en sala' },
        { letter: 'D', text: 'Instalar un sistema de aspiración negativa directamente sobre las asas expuestas' },
        { letter: 'E', text: 'Administrar heparina de bajo peso molecular y pedir tomografía de urgencia' },
      ],
      correct: 'B',
      explanation: 'La evisceración aguda postoperatoria requiere protección inmediata de las vísceras expuestas con compresas estériles empapadas en suero fisiológico tibio para evitar la desecación, el enfriamiento y la necrosis intestinal. Está terminantemente prohibido reintroducir las asas en la sala. El tratamiento definitivo es la reoperación urgente en pabellón.',
      say: {
        stem: 'Revisemos esta pregunta clásica de urgencia quirúrgica. Un paciente operado hace una semana presenta salida de líquido en agua de carne y protrusión de intestino delgado tras un golpe de tos.',
        question: '¿Cuál es la conducta inmediata correcta?',
        options: 'Las alternativas proponen: reintroducir las asas en la sala, cubrir con compresas estériles húmedas tibias y trasladar a pabellón, vendaje compresivo elástico, aspiración negativa o tomografía de urgencia. Piénsalo.',
        answer: 'La respuesta correcta es la B, cubrir con compresas estériles húmedas tibias y trasladar a pabellón. La opción A es un error mortal: jamás intentes meter las asas al abdomen en la cama del paciente. Las vísceras se protegen con compresas empapadas en suero tibio y el paciente se traslada de inmediato a quirófano para reparación formal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.016',
      stem: '¿En cuál de las siguientes situaciones clínicas se encuentra formalmente indicada la administración de profilaxis antibiótica quirúrgica según las normas ministeriales y consensos internacionales?',
      question: '¿Cuál procedimiento tiene indicación formal de profilaxis?',
      options: [
        { letter: 'A', text: 'Biopsia excisional de un nevus dérmico benigno de un centímetro en el tórax' },
        { letter: 'B', text: 'Hernioplastía inguinal electiva con colocación de malla de polipropileno' },
        { letter: 'C', text: 'Drenaje ambulatorio de un absceso perianal fluctuante de dos centímetros' },
        { letter: 'D', text: 'Extirpación de un lipoma subcutáneo superficial de tres centímetros en antebrazo' },
        { letter: 'E', text: 'Curación de una quemadura superficial tipo A de dos por ciento de superficie' },
      ],
      correct: 'B',
      explanation: 'Las cirugías limpias (Clase I) habitualmente no requieren profilaxis antibiótica, con una excepción formal: cuando se implanta un cuerpo extraño protésico permanente como una malla de polipropileno en una hernioplastía. La infección de una malla obliga a su retiro quirúrgico, por lo que se indica profilaxis con cefazolina preincisional.',
      say: {
        stem: 'Analicemos este ejercicio de indicaciones profilácticas. Se consulta en cuál de los procedimientos señalados está formalmente indicada la profilaxis antibiótica quirúrgica.',
        question: '¿Cuál es la intervención que exige profilaxis antimicrobiana?',
        options: 'Las opciones son: biopsia de nevus dérmico, hernioplastía inguinal electiva con malla protésica, drenaje de absceso perianal, extirpación de lipoma de antebrazo o curación de quemadura menor. Piénsalo.',
        answer: 'La respuesta correcta es la B, hernioplastía inguinal electiva con malla de polipropileno. Aunque la cirugía de hernia es una herida limpia clase uno, la colocación de un cuerpo extraño protésico permanente justifica el uso de cefazolina preoperatoria porque la infección de la malla es una complicación catastrófica.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en complicaciones de la herida quirúrgica',
      cards: [
        {
          title: 'Prevención y diagnóstico precoz',
          tag: 'Principios quirúrgicos',
          kind: 'alert',
          items: [
            {
              t: 'Malla en cirugía limpia exige cefazolina',
              d: 'Dosis única treinta a sesenta minutos antes de la incisión de la piel',
              say: 'Toda cirugía limpia que implanta material protésico o mallas sintéticas permanentes requiere profilaxis antibiótica preincisional con cefazolina en la inducción para evitar infecciones catastróficas.',
            },
            {
              t: 'Líquido en agua de carne es dehiscencia de fascia',
              d: 'Salida abundante serohemática al quinto día exige revisión en pabellón',
              say: 'Si un paciente empapa apósitos con líquido rosado acuoso descrito como en agua de carne, la aponeurosis profunda se abrió por completo y requiere resutura en pabellón.',
            },
          ],
        },
        {
          title: 'Emergencia de evisceración',
          tag: 'Conducta en sala',
          kind: 'key',
          items: [
            {
              t: 'Prohibido reintroducir asas en la cama',
              d: 'La manipulación en la sala perfora vísceras y desata peritonitis mortal',
              say: 'Jamás intentes reintroducir el intestino en la cama del paciente: la manipulación a ciegas perfora vísceras friables, desgarra el mesenterio y contamina masivamente el peritoneo.',
            },
            {
              t: 'Compresas estériles tibias y traslado a quirófano',
              d: 'Empapar en solución salina tibia para prevenir desecación y necrosis',
              say: 'Si te llevas una sola idea de hoy: ante una evisceración aguda con asas expuestas, mantén la calma, cubre de inmediato las vísceras con compresas estériles húmedas tibias para evitar su enfriamiento y desecación, e ingresa al paciente de urgencia a pabellón sin intentar reintroducirlas en la sala. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Complicaciones de Herida Operatoria',
    root: N(
      'start',
      'Paciente con complicación en herida quirúrgica abdominal',
      'Examen directo de la incisión retirando apósitos',
      'Iniciamos el enfrentamiento evaluando si hay secreción purulenta, líquido acuoso o exteriorización visceral.',
      [
        'Evisceración aguda (asas o epiplón visibles)',
        N(
          'alert',
          'Urgencia quirúrgica inmediata de pared',
          'Prohibido reintroducir vísceras en la sala',
          'Constatamos la protrusión de asas intestinales a través de la incisión abierta.',
          [
            'Conducta de salvataje en la sala',
            N(
              'do',
              'Cubrir con compresas estériles húmedas tibias',
              'Prevenir desecación e hipotermia visceral',
              'Se colocan compresas húmedas con suero tibio y se indica régimen cero con analgesia parenteral.',
              [
                'Tratamiento definitivo',
                N(
                  'refer',
                  'Traslado urgente a pabellón quirúrgico',
                  'Laparotomía exploradora, aseo y cierre formal',
                  'Se traslada de inmediato a quirófano para resutura de pared abdominal bajo anestesia general.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Salida profusa de líquido en agua de carne',
        N(
          'alert',
          'Dehiscencia de fascia profunda encubierta',
          'Líquido serohemático acuoso tras esfuerzo de tos',
          'Sospechamos rotura aponeurótica bajo piel aparentemente cerrada.',
          [
            'Exploración y resolución',
            N(
              'refer',
              'Reoperación programada de urgencia',
              'Apertura cutánea y resutura aponeurótica firme',
              'Se programa revisión en pabellón para resuturar la aponeurosis con material irreabsorbible.'
            )
          ]
        )
      ],
      [
        'Infección de herida con eritema y pus (ISQ)',
        N(
          'q',
          '¿Afecta solo tejido celular o fascia profunda?',
          'ISQ incisional superficial versus profunda',
          'Evaluamos la profundidad del compromiso inflamatorio de la pared.',
          [
            'Incisional superficial',
            N(
              'do',
              'Retiro de puntos de sutura y drenaje',
              'Curaciones abiertas por segunda intención',
              'Se abren las suturas comprometidas, se evacua el pus y se realizan curaciones húmedas diarias.'
            )
          ]
        )
      ]
    ),
  },
};
