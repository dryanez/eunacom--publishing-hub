// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-21',
  tier: 3,
  pathway: {
    title: 'Sangrado digestivo: estabilizar primero',
    root: N('start', 'Hemorragia digestiva', 'Primero: 2 vías gruesas + cristaloides',
      'Partimos del paciente que sangra. Antes de cualquier pregunta diagnóstica se estabiliza: dos vías venosas gruesas y cristaloides, mirando la frecuencia cardíaca y la presión, no el hematocrito.',
      ['', N('q', '¿Alta o baja?', 'Hematemesis y melena vs hematoquecia',
        'Con el paciente reanimado, la pregunta es dónde sangra. Hematemesis o melena apuntan a una hemorragia alta; hematoquecia o rectorragia, a una baja.',
        ['Hematemesis / melena', N('q', '¿Cirrótico?', 'Sangrado masivo, protrombina baja',
          'En la hemorragia alta, la pregunta que cambia el tratamiento es si el paciente es cirrótico, porque entonces lo más probable son las várices.',
          ['SÍ', N('alert', 'Terlipresina + antibióticos + ligadura', 'Más tiamina si es alcohólico',
            'En el cirrótico: terlipresina, antibióticos como profilaxis de peritonitis bacteriana espontánea, tiamina si es alcohólico, y endoscopía con ligadura de las várices.')],
          ['NO', N('ok', 'IBP endovenoso + endoscopía', 'Terapia según Forrest · erradicar H. pylori',
            'Si no es cirrótico, la causa más probable es la úlcera: IBP endovenoso en dosis alta, endoscopía con terapia según la clasificación de Forrest, y luego erradicar el Helicobacter.')])],
        ['Hematoquecia', N('q', '¿Estable o inestable?', 'No masiva vs masiva',
          'En la hemorragia baja, la pregunta es la estabilidad, porque define el orden de los exámenes.',
          ['Estable', N('ok', 'Colonoscopía en 24 h', 'Con preparación de colon',
            'Si está estable, se prepara el colon y se hace la colonoscopía dentro de veinticuatro horas.')],
          ['Inestable', N('refer', 'Colonoscopía urgente', 'Si no localiza: EDA → angio-TAC → cirugía',
            'Si está inestable, colonoscopía urgente. Si no encuentra el origen, endoscopía alta por la regla del diez por ciento, luego angio-TAC o angiografía, y la cirugía como último recurso.')])])]),
  },
  slides: [
    {
      type: 'cover',
      subtitle: 'Primero la hemodinamia, después el endoscopio',
      say: 'Bienvenidos. Hoy vemos la hemorragia digestiva, alta y baja. Es un tema de urgencia y de alta rentabilidad, con dos errores clásicos que anulan la respuesta: esperar el hematocrito para decidir, y olvidar la regla del diez por ciento. Además junta piezas que ya viste, como la úlcera, las várices y el Mallory-Weiss, bajo una sola lógica: primero estabilizar, después buscar la causa. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Definiciones',
      title: 'Alta o baja: lo decide el ángulo de Treitz',
      nodes: [
        { id: 'tre', col: 0, row: 1, k: 'start', t: 'Ángulo de Treitz', s: 'La frontera entre alta y baja' },
        { id: 'hda', col: 1, row: 0, k: 'risk', t: 'Hemorragia digestiva alta', s: 'Esófago, estómago, duodeno' },
        { id: 'mel', col: 2, row: 0, k: 'effect', t: 'Hematemesis y melena', s: 'Melena: 8 h o más de tránsito' },
        { id: 'hdb', col: 1, row: 2, k: 'risk', t: 'Hemorragia digestiva baja', s: 'Distal al Treitz' },
        { id: 'hem', col: 2, row: 2, k: 'effect', t: 'Hematoquecia y rectorragia', s: 'Sangre roja por el recto' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'HDA masiva, tránsito rápido', s: 'También da hematoquecia' },
      ],
      edges: [
        { from: 'tre', to: 'hda', label: 'proximal' }, { from: 'hda', to: 'mel' },
        { from: 'tre', to: 'hdb', label: 'distal' }, { from: 'hdb', to: 'hem' },
        { from: 'hda', to: 'tra', label: 'si es masiva' }, { from: 'tra', to: 'hem' },
      ],
      steps: [
        { show: ['tre'], note: 'Una sola frontera anatómica',
          say: 'Partamos por las definiciones, porque todo el algoritmo depende de ellas. La frontera entre una hemorragia alta y una baja es una sola: el ángulo de Treitz, donde el duodeno se une al yeyuno.' },
        { show: ['hda'], note: 'Proximal al Treitz',
          say: 'Todo lo que sangra antes del Treitz, es decir, esófago, estómago y duodeno, es una hemorragia digestiva alta.' },
        { show: ['mel'], note: 'La melena necesita tiempo',
          say: 'Y se manifiesta con hematemesis, que es vomitar sangre, o con melena: una deposición negra, alquitranada. ¿Por qué negra? Porque es sangre digerida, y para eso necesita tiempo: al menos ocho horas de tránsito por el intestino.' },
        { show: ['hdb', 'hem'], note: 'Distal al Treitz: sangre roja',
          say: 'Lo que sangra después del Treitz es una hemorragia digestiva baja. Aquí la sangre no alcanza a digerirse, y sale roja: hematoquecia, o rectorragia.' },
        { show: ['tra'], note: 'La excepción que se pregunta',
          say: 'Pero ojo con la excepción, que es la base de una de las trampas de hoy. Una hemorragia alta masiva, con un tránsito acelerado, no le da tiempo a la sangre para digerirse, y también sale roja. Es decir, la hematoquecia no siempre es baja. En cambio, la melena casi siempre te habla de un origen alto. Guarda esta idea, porque vuelve al final.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gravedad',
      title: 'La gravedad la marca la hemodinamia',
      nodes: [
        { id: 'san', col: 0, row: 1, k: 'cause', t: 'Sangrado agudo', s: 'Se pierde sangre completa' },
        { id: 'hto', col: 1, row: 0, k: 'trap', t: 'Hematocrito normal', s: 'Cae recién horas después' },
        { id: 'tq', col: 1, row: 2, k: 'alert', t: 'Taquicardia', s: 'Lo más precoz' },
        { id: 'ort', col: 2, row: 2, k: 'alert', t: 'Ortostatismo', s: 'Cae la presión al pararse' },
        { id: 'shk', col: 3, row: 2, k: 'alert', t: 'Hipotensión', s: 'Shock' },
      ],
      edges: [
        { from: 'san', to: 'hto', label: 'engaña' }, { from: 'san', to: 'tq', label: 'avisa' },
        { from: 'tq', to: 'ort' }, { from: 'ort', to: 'shk' },
      ],
      steps: [
        { show: ['san'], note: 'Se va plasma y glóbulos rojos en proporción',
          say: 'Ahora la pregunta más importante del tema: ¿cómo sé si la hemorragia es grave? Piensa en qué se pierde. En un sangrado agudo se va sangre completa: plasma y glóbulos rojos, en la misma proporción.' },
        { show: ['hto'], note: 'Error clásico: esperar el hematocrito',
          say: 'Entonces, ¿qué le pasa al hematocrito? Nada, al principio. Si pierdes todo en proporción, la proporción no cambia. El hematocrito cae recién horas después, cuando el líquido del intersticio entra a los vasos y diluye los glóbulos rojos que quedan. Por eso, esperar el hematocrito para decidir es el primer error clásico.' },
        { show: ['tq'], note: 'La primera señal de alarma',
          say: '¿Qué mide la gravedad, entonces? La hemodinamia. Lo primero que aparece es la taquicardia: el corazón compensa la pérdida latiendo más rápido. Es el signo más precoz.' },
        { show: ['ort'], note: 'La compensación empieza a fallar',
          say: 'Si la pérdida sigue, aparece el ortostatismo: acostado se ve bien, pero al sentarlo o pararlo cae la presión. La compensación empieza a quedarse corta.' },
        { show: ['shk'], note: 'Taquicardia, ortostatismo, hipotensión',
          say: 'Y al final, la hipotensión: el paciente está en shock. Memoriza esa secuencia en orden, taquicardia, ortostatismo, hipotensión, porque es la escala de gravedad que te pide el examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo inicial',
      title: 'Estabilizar primero, común a alta y baja',
      cards: [
        { title: 'Reanimación', tag: 'Lo primero', kind: 'alert', items: [
          { t: 'Dos vías venosas gruesas', d: 'Para pasar volumen rápido',
            say: 'El manejo inicial es el mismo para la hemorragia alta y la baja, y parte antes de saber dónde sangra. Primero, dos vías venosas gruesas, para poder pasar volumen rápido.' },
          { t: 'Cristaloides', d: 'Suero fisiológico o Ringer',
            say: 'Y por esas vías, cristaloides: suero fisiológico o Ringer. Esa es la reanimación inicial.' },
        ] },
        { title: 'Transfusión', tag: 'No es el primer paso', kind: 'criteria', items: [
          { t: 'Anemia persistente tras reponer', d: 'O sangrado masivo',
            say: 'Fíjate en lo que no dijimos: transfusión. La transfusión no es la reanimación inicial. Se reserva para dos situaciones: la anemia que persiste después de reponer volumen, o el sangrado masivo. Si una alternativa te ofrece transfundir como primer paso, desconfía.' },
        ] },
        { title: 'Después', tag: 'Con el paciente estable', kind: 'key', items: [
          { t: 'Endoscopía o colonoscopía', d: 'Diagnóstica y terapéutica',
            say: 'Una vez estabilizado, recién ahí viene el examen: endoscopía alta o colonoscopía, según el caso. Y ambas son diagnósticas y terapéuticas: en el mismo acto encuentran el punto que sangra y lo detienen. Estabilizar primero, endoscopiar después.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia alta',
      title: 'Várices esofágicas: el cirrótico que sangra',
      cards: [
        { title: 'Sospecha', tag: 'Pista clínica', kind: 'alert', items: [
          { t: 'Cirrótico, sangrado masivo', d: 'Protrombina baja',
            say: 'Veamos las causas de hemorragia alta, y cómo cada una suma algo propio al suero y la endoscopía. La primera son las várices esofágicas. La pista es un paciente cirrótico, con un sangrado masivo y la protrombina baja. Es la hemorragia alta más grave.' },
        ] },
        { title: 'Lo que se agrega', tag: 'Además del suero', kind: 'pharma', items: [
          { t: 'Terlipresina', d: 'Baja la presión portal',
            say: 'Además de la reanimación, se agrega terlipresina endovenosa, que baja la presión en el territorio portal y así ayuda a frenar el sangrado de las várices.' },
          { t: 'Antibióticos', d: 'Profilaxis de peritonitis bacteriana espontánea',
            say: 'Se agregan antibióticos, como profilaxis de peritonitis bacteriana espontánea. Conecta esto con la clase de daño hepático crónico: el cirrótico tiene ascitis que se infecta con facilidad, y el sangrado es justamente uno de los momentos de mayor riesgo.' },
          { t: 'Tiamina si es alcohólico', d: 'No olvidarla',
            say: 'Y si la cirrosis es por alcohol, tiamina. Es un detalle que el examen pone en la alternativa completa.' },
        ] },
        { title: 'Endoscopía', tag: 'Terapia de elección', kind: 'key', items: [
          { t: 'Ligadura endoscópica', d: 'En las primeras 12 horas',
            say: 'Y la endoscopía, que aquí es terapéutica: ligadura de las várices, idealmente en las primeras doce horas.' },
          { t: 'Después: prevenir el resangrado', d: 'Propranolol + ligadura',
            say: 'Y una vez superado el episodio, no termina ahí. Como vimos en la clase de hipertensión portal, la profilaxis secundaria es propranolol más ligadura, porque un paciente que ya sangró por várices tiene alto riesgo de volver a sangrar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia alta',
      title: 'Úlcera, Mallory-Weiss y las lesiones escondidas',
      cards: [
        { title: 'Úlcera gastroduodenal', tag: 'La causa sin cirrosis', kind: 'pharma', items: [
          { t: 'Síndrome ulceroso previo + melena', d: 'La pista clínica',
            say: 'La segunda causa es la úlcera gastroduodenal, que ya conoces de la clase de úlcera péptica. La pista es un paciente con síndrome ulceroso previo que ahora hace melena.' },
          { t: 'IBP endovenoso en dosis alta', d: 'Terapia endoscópica según Forrest',
            say: 'Aquí lo que se agrega es el IBP endovenoso en dosis alta, y la endoscopía hace terapia hemostática según la clasificación de Forrest, que ordena las úlceras según su riesgo de volver a sangrar.' },
          { t: 'Erradicar H. pylori', d: 'Para que no vuelva a sangrar',
            say: 'Y una vez que pasó la urgencia, se erradica el Helicobacter pylori. Si no, la úlcera vuelve, y con ella el sangrado.' },
        ] },
        { title: 'Mallory-Weiss', tag: 'Buen pronóstico', kind: 'normal', items: [
          { t: 'Vómitos alimentarios, luego hematemesis', d: 'Suele ser autolimitado',
            say: 'La tercera es el Mallory-Weiss, y aquí el orden de los síntomas es el diagnóstico: primero vómitos alimentarios, y después hematemesis. Suele ser autolimitado y de buen pronóstico: si está estable, se observa. No lo confundas con el Boerhaave de la clase de perforaciones, donde los vómitos terminan en dolor torácico y perforación.' },
        ] },
        { title: 'Lesiones escondidas', tag: 'Dieulafoy y angiodisplasia', kind: 'key', items: [
          { t: 'Sangrado recurrente sin lesión evidente', d: 'Hemostasia endoscópica',
            say: 'Y por último, la lesión de Dieulafoy y la angiodisplasia: sangrados recurrentes sin una lesión evidente a primera vista. Se tratan con hemostasia endoscópica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia baja',
      title: 'Causas: ¿quién sangra rojo?',
      cards: [
        { title: 'En el adulto', tag: 'Las más preguntadas', kind: 'key', items: [
          { t: 'Enfermedad diverticular', d: 'Causa más frecuente de HDB masiva',
            say: 'Pasemos a la hemorragia baja. La causa más frecuente de hemorragia digestiva baja masiva es la enfermedad diverticular. Si te preguntan por la causa más común de un sangrado rojo y abundante en un adulto, esa es la respuesta.' },
          { t: 'Angiodisplasias', d: 'Adulto mayor',
            say: 'Después vienen las angiodisplasias, típicas del adulto mayor.' },
          { t: 'Cáncer de colon y hemorroides internas', d: 'Completan la lista',
            say: 'Y completan la lista el cáncer de colon, que nunca puedes olvidar en un adulto que sangra, y las hemorroides internas.' },
        ] },
        { title: 'En el niño', tag: 'Otra causa', kind: 'alert', items: [
          { t: 'Divertículo de Meckel', d: 'La causa pediátrica clásica',
            say: 'Y en el niño, la causa clásica es el divertículo de Meckel: un sangrado bajo, abundante e indoloro. Lo vamos a retomar en la clase de cirugía pediátrica.' },
        ] },
        { title: 'No olvidar', tag: 'De la clase anterior', kind: 'normal', items: [
          { t: 'Colitis isquémica', d: 'Dolor izquierdo + hematoquecia tras hipotensión',
            say: 'Y recuerda la clase anterior: un adulto mayor con dolor cólico izquierdo y hematoquecia, después de un episodio de hipotensión, es una colitis isquémica. Lo que la delata es el dolor y el antecedente de hipotensión.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemorragia baja',
      title: 'El algoritmo: estable o inestable',
      nodes: [
        { id: 'hdb', col: 0, row: 1, k: 'start', t: 'Hemorragia digestiva baja', s: '¿Estable o inestable?' },
        { id: 'est', col: 1, row: 0, k: 'good', t: 'No masiva, estable', s: 'Preparación de colon' },
        { id: 'col', col: 2, row: 0, k: 'good', t: 'Colonoscopía en 24 h', s: 'Diagnóstica y terapéutica' },
        { id: 'ins', col: 1, row: 2, k: 'alert', t: 'Masiva, inestable', s: 'Colonoscopía urgente' },
        { id: 'eda', col: 2, row: 2, k: 'trap', t: 'Endoscopía alta', s: 'Regla del 10 %' },
        { id: 'ang', col: 3, row: 2, k: 'mech', t: 'Angio-TAC o angiografía', s: 'Puede embolizar' },
        { id: 'cin', col: 3, row: 3, k: 'mech', t: 'Cintigrafía con glóbulos rojos', s: 'Para sangrados lentos' },
        { id: 'cir', col: 4, row: 2, k: 'alert', t: 'Cirugía', s: 'Habitualmente hemicolectomía derecha' },
      ],
      edges: [
        { from: 'hdb', to: 'est', label: 'estable' }, { from: 'est', to: 'col' },
        { from: 'hdb', to: 'ins', label: 'inestable' }, { from: 'ins', to: 'eda', label: 'no localiza' },
        { from: 'eda', to: 'ang', label: 'no localiza' }, { from: 'ang', to: 'cin', label: 'lento' },
        { from: 'ang', to: 'cir', label: 'si todo falla' },
      ],
      steps: [
        { show: ['hdb'], note: 'La estabilidad ordena los exámenes',
          say: 'Ahora el algoritmo de la hemorragia baja. Como siempre, lo primero es reanimar, y después la pregunta que ordena todo: ¿el paciente está estable o inestable?' },
        { show: ['est', 'col'], note: 'Estable: hay tiempo para preparar',
          say: 'Si la hemorragia no es masiva y el paciente está estable, hay tiempo. Se prepara el colon, y se hace la colonoscopía dentro de las veinticuatro horas, que diagnostica y trata.' },
        { show: ['ins'], note: 'Inestable: colonoscopía urgente',
          say: 'Si la hemorragia es masiva y el paciente está inestable, no hay tiempo para preparar: colonoscopía urgente. El problema es que con tanta sangre, muchas veces no se ve de dónde viene. Y recuerda que inestable, otra vez, lo dicen el pulso y la presión, no el laboratorio.' },
        { show: ['eda'], note: 'El 10 % de las que parecen bajas son altas',
          say: 'Y aquí aparece el segundo error clásico. Si la colonoscopía no encuentra el origen, el siguiente paso no es repetirla ni operar: es una endoscopía alta. ¿Por qué? Recuerda la excepción del principio: cerca del diez por ciento de las hemorragias que parecen bajas son en realidad altas con tránsito rápido. Esa es la regla del diez por ciento.' },
        { show: ['ang'], note: 'Localiza y además puede tratar',
          say: 'Si la endoscopía alta tampoco la localiza, se sigue con angio-TAC o angiografía. La angiografía tiene la ventaja de que puede embolizar el vaso que sangra, o sea, tratar en el mismo acto.' },
        { show: ['cin'], note: 'Detecta sangrados de bajo flujo',
          say: 'Para los sangrados más lentos, que la angiografía no alcanza a ver, existe la cintigrafía con glóbulos rojos marcados.' },
        { show: ['cir'], note: 'El último recurso',
          say: 'Y si todo falla y el paciente sigue inestable, cirugía, que habitualmente es una hemicolectomía derecha. Fíjate en el orden: la cirugía es el último escalón, nunca el siguiente paso después de una colonoscopía que no encontró nada.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Causa, pista y conducta',
      head: ['Escenario', 'Pista clínica', 'Además del suero y la endoscopía'],
      rows: [
        { cells: ['Várices esofágicas', 'Cirrótico, sangrado masivo, protrombina baja', 'Terlipresina + antibióticos + tiamina'],
          say: 'Repasemos en una tabla lo que cada causa de hemorragia alta agrega al suero y la endoscopía. Várices: cirrótico, sangrado masivo, protrombina baja. Se agrega terlipresina, antibióticos y tiamina.' },
        { cells: ['Úlcera gastroduodenal', 'Síndrome ulceroso previo, melena', 'IBP endovenoso en dosis alta; erradicar H. pylori'],
          say: 'Úlcera: síndrome ulceroso previo y melena. Se agrega IBP endovenoso en dosis alta, y después se erradica el Helicobacter.' },
        { cells: ['Mallory-Weiss', 'Vómitos alimentarios y luego hematemesis', 'Suele ser autolimitado; observar si está estable'],
          say: 'Mallory-Weiss: primero vómitos, después sangre. Suele ser autolimitado, y si está estable, se observa.' },
        { cells: ['Lesión de Dieulafoy / angiodisplasia', 'Sangrado recurrente sin lesión evidente', 'Hemostasia endoscópica'],
          say: 'Y Dieulafoy o angiodisplasia: sangrado recurrente sin lesión evidente, con hemostasia endoscópica.' },
        { cells: ['Taquicárdico con hematocrito normal', 'Hemorragia grave', 'Reanimar ya; no esperar el hematocrito'],
          say: 'Y dos trampas que cruzan todo el tema. Un paciente taquicárdico con hematocrito normal tiene una hemorragia grave: se reanima ya, sin esperar el control.' },
        { cells: ['HDB masiva, colonoscopía sin hallazgos', 'Puede ser una HDA con tránsito rápido', 'Endoscopía alta, no laparotomía'],
          say: 'Y una hemorragia baja masiva con una colonoscopía que no encuentra nada puede ser una alta con tránsito rápido: el siguiente paso es la endoscopía alta, no la laparotomía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 55 años con cirrosis por alcohol llega por vómito de abundante sangre roja. Pálido y sudoroso, FC 120/min, PA 85/50 mmHg. El hematocrito informado es de 38 %.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Esperar un hematocrito de control antes de decidir, ya que el actual es normal' },
        { letter: 'B', text: 'Transfundir glóbulos rojos como primera medida de reanimación' },
        { letter: 'C', text: 'Dos vías gruesas y cristaloides, terlipresina, antibióticos, tiamina y endoscopía con ligadura' },
        { letter: 'D', text: 'IBP endovenoso y endoscopía electiva en 72 horas' },
        { letter: 'E', text: 'Colonoscopía urgente' },
      ],
      correct: 'C',
      explanation: 'HDA con compromiso hemodinámico (taquicardia e hipotensión) en un cirrótico: hemorragia variceal. La gravedad la define la hemodinamia; el hematocrito inicial es normal porque se pierde sangre completa. Reanimación con cristaloides, terlipresina, antibióticos (profilaxis de PBE), tiamina y ligadura endoscópica en las primeras 12 horas.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y cinco años con cirrosis por alcohol, que llega por vómitos de abundante sangre roja. Está pálido y sudoroso, con frecuencia cardíaca de ciento veinte y presión de ochenta y cinco con cincuenta. El hematocrito informado es de treinta y ocho por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: esperar un hematocrito de control, transfundir como primera medida, reanimar con cristaloides y agregar terlipresina, antibióticos, tiamina y ligadura, dar IBP con endoscopía electiva, o colonoscopía urgente. Piénsalo.',
        answer: 'Es la C. El paciente está taquicárdico e hipotenso: es una hemorragia grave, aunque el hematocrito sea normal, porque perdió sangre completa. Y es cirrótico, así que son várices. Por eso la alternativa completa: reanimar, terlipresina, antibióticos, tiamina y ligadura. La trampa más tentadora es la A, que se apoya en el hematocrito normal. Y la B falla porque transfundir no es la reanimación inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Al momento de la presentación de una hemorragia digestiva alta.',
      question: '¿Cuál de los siguientes parámetros determina mejor la gravedad del cuadro?',
      options: [
        { letter: 'A', text: 'El hematocrito' },
        { letter: 'B', text: 'La hemoglobina' },
        { letter: 'C', text: 'La frecuencia cardíaca y la presión arterial' },
        { letter: 'D', text: 'El volumen estimado de la hematemesis' },
        { letter: 'E', text: 'El recuento de plaquetas' },
      ],
      correct: 'C',
      explanation: 'En el sangrado agudo se pierde sangre completa, por lo que el hematocrito inicial suele ser normal y cae horas después, cuando el líquido intersticial diluye la masa eritrocitaria. La gravedad la marca el compromiso hemodinámico: taquicardia (lo más precoz), ortostatismo y, finalmente, hipotensión.',
      say: {
        stem: 'Ahora un caso representativo del banco EUNACOM. Es corto y directo: al momento de la presentación de una hemorragia digestiva alta.',
        question: '¿Cuál de los siguientes parámetros determina mejor la gravedad del cuadro?',
        options: 'Las opciones: el hematocrito, la hemoglobina, la frecuencia cardíaca y la presión arterial, el volumen estimado de la hematemesis, o el recuento de plaquetas. Piénsalo.',
        answer: 'La respuesta es la C. Fíjate en la frase clave del enunciado: al momento de la presentación. En ese momento se perdió sangre completa, y el hematocrito y la hemoglobina todavía no cambian. Por eso son los distractores más tentadores: son números, y parecen objetivos, pero llegan tarde. El volumen de la hematemesis tampoco sirve: es una estimación, no una medida. La que manda es la hemodinamia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 156',
      stem: 'Un paciente de 45 años, luego de una transgresión alcohólica y alimentaria, presenta múltiples episodios de vómitos alimentarios, seguidos de hematemesis en una oportunidad. Su hemograma muestra hemoglobina de 9 g/dL.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Várices esofágicas' },
        { letter: 'B', text: 'Gastropatía erosiva' },
        { letter: 'C', text: 'Úlcera péptica activa' },
        { letter: 'D', text: 'Síndrome de Mallory-Weiss' },
        { letter: 'E', text: 'Gastritis isquémica' },
      ],
      correct: 'D',
      explanation: 'Vómitos alimentarios repetidos y después hematemesis, tras una transgresión alcohólica: es el orden clásico del Mallory-Weiss, una laceración esofágica por el propio vómito. No lo confundas con el Boerhaave, que es una perforación esofágica y termina en mediastinitis, no solo en sangrado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Hombre de cuarenta y cinco años que, después de una transgresión alcohólica y alimentaria, presenta varios episodios de vómitos alimentarios, y en uno de ellos aparece hematemesis. La hemoglobina está en nueve.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: várices esofágicas, gastropatía erosiva, úlcera péptica activa, síndrome de Mallory-Weiss, o gastritis isquémica. Piénsalo.',
        answer: 'Es la D, síndrome de Mallory-Weiss. El orden lo dice todo: primero vómitos alimentarios, repetidos, y recién después sangre. Las várices tientan por el antecedente de alcohol, pero aquí no hay estigmas de daño hepático crónico en el enunciado, y el patrón de vómito antes que sangre es la firma del Mallory-Weiss.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 40',
      stem: 'Una paciente de 19 años acude al servicio de urgencia por un cuadro de rectorragia de dos días de evolución, que el día de hoy se volvió mucho más abundante. Al examen físico tiene FC 117x\', PA 90/60 mmHg, palidez de piel y mucosas y examen abdominal con dolor difuso a la palpación, sin signos de irritación peritoneal. Al preguntar dirigidamente, refiere antecedente de varios episodios de dolor periumbilical recurrente, de tipo urente, que había cedido de manera espontánea. Se solicita hemograma, que muestra hematocrito 27 %, hemoglobina 8,1 g/dL, blancos 5.000/mm³ y plaquetas 230.000/mm³. También se realiza colonoscopía de urgencia que muestra abundante sangre en todo el trayecto colónico, que fluye, además, por la válvula ileocecal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Crohn' },
        { letter: 'B', text: 'Pólipo juvenil' },
        { letter: 'C', text: 'Infección por Shigella' },
        { letter: 'D', text: 'Divertículo de Meckel' },
        { letter: 'E', text: 'Adenitis mesentérica' },
      ],
      correct: 'D',
      explanation: 'Paciente joven con rectorragia masiva y la colonoscopía muestra que la sangre viene desde el intestino delgado, por la válvula ileocecal, no del colon: eso aleja el colon como origen y apunta al divertículo de Meckel, la causa clásica de hemorragia baja masiva en el paciente joven.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de diciembre de dos mil veintidós, que muestra la causa clásica en el paciente joven. Mujer de diecinueve años con una rectorragia de dos días que hoy se hizo mucho más abundante. Está taquicárdica e hipotensa. La colonoscopía de urgencia muestra abundante sangre en todo el colon, que además fluye desde la válvula ileocecal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Crohn, pólipo juvenil, infección por Shigella, divertículo de Meckel, o adenitis mesentérica. Piénsalo.',
        answer: 'Es la D, divertículo de Meckel. El detalle que decide la pregunta es que la sangre entra al colon por la válvula ileocecal, es decir, viene de más arriba, del intestino delgado, no del colon mismo. Eso descarta el Crohn colónico y el pólipo, y en una paciente joven con sangrado masivo del intestino delgado, la respuesta clásica es el Meckel.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 14',
      stem: 'Un paciente de 52 años presenta hematoquecia de 2 días de evolución, sin otros síntomas. Sus signos vitales muestran PA 120/80 mmHg, FC 75x\' y temperatura 36 °C. Al examen físico, tiene leve palidez de mucosas y su abdomen es blando y depresible, sin masas ni visceromegalia y con preservación de los ruidos hidroaéreos. Se solicita una colonoscopía, que es normal.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Cintigrafía con glóbulos rojos marcados' },
        { letter: 'B', text: 'Endoscopía digestiva alta' },
        { letter: 'C', text: 'TAC de abdomen y pelvis' },
        { letter: 'D', text: 'Angiografía mesentérica' },
        { letter: 'E', text: 'Enteroscopía' },
      ],
      correct: 'B',
      explanation: 'Hematoquecia con una colonoscopía normal: el paso siguiente es la endoscopía digestiva alta, por la regla del 10 por ciento, ya que un sangrado alto con tránsito acelerado puede manifestarse como sangre roja y hacer creer que el origen es bajo cuando en realidad no lo es.',
      say: {
        stem: 'Cerremos con una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de cincuenta y dos años, con hematoquecia de dos días, sin otros síntomas y estable. Se hace una colonoscopía, que resulta normal.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: cintigrafía con glóbulos rojos marcados, endoscopía digestiva alta, TAC de abdomen y pelvis, angiografía mesentérica, o enteroscopía. Piénsalo.',
        answer: 'Es la B, endoscopía digestiva alta. La colonoscopía ya se hizo y no encontró nada, así que toca aplicar la regla del diez por ciento: antes de seguir con cintigrafía o angiografía, hay que descartar un origen alto con tránsito rápido. La cintigrafía y la angiografía quedan para cuando la endoscopía alta también sea negativa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Gravedad y reanimación', tag: 'Común a alta y baja', kind: 'alert', items: [
          { t: 'Hemodinamia, no hematocrito', d: 'Taquicardia, ortostatismo, hipotensión',
            say: 'Cerremos con las reglas de oro. La gravedad la marca la hemodinamia, no el hematocrito: taquicardia, ortostatismo, hipotensión.' },
          { t: 'Dos vías gruesas + cristaloides', d: 'La transfusión no es el primer paso',
            say: 'Se reanima con dos vías gruesas y cristaloides. La transfusión no es el primer paso.' },
        ] },
        { title: 'Hemorragia alta', tag: 'Qué se agrega', kind: 'pharma', items: [
          { t: 'Várices: terlipresina + antibióticos + ligadura', d: 'Más tiamina si es alcohólico',
            say: 'En las várices se agrega terlipresina, antibióticos, tiamina si es alcohólico, y ligadura.' },
          { t: 'Úlcera: IBP endovenoso + endoscopía', d: 'Después, erradicar H. pylori',
            say: 'En la úlcera, IBP endovenoso y terapia endoscópica, y después erradicar el Helicobacter.' },
        ] },
        { title: 'Hemorragia baja', tag: 'Regla del 10 %', kind: 'key', items: [
          { t: 'Colonoscopía no localiza: endoscopía alta', d: 'El 10 % son altas',
            say: 'En la hemorragia baja masiva, si la colonoscopía no localiza, el siguiente paso es la endoscopía alta. Y la causa más frecuente de hemorragia baja masiva es la diverticular; en el niño, el Meckel. Si te llevas una sola idea de hoy: primero se mira el pulso y la presión, después el endoscopio, y nunca el hematocrito. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};
