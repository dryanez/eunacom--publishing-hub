// Clase 20.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La tríada que la sospecha, la biopsia que decide, la displasia que nunca es',
      say: 'Bienvenida. Hoy vemos endometriosis y adenomiosis, dos enfermedades que suenan parecidas pero que tienes que aprender a separar bien, porque el examen las pone una al lado de la otra todo el tiempo. En la endometriosis el tejido endometrial se escapa del útero; en la adenomiosis se mete dentro del músculo uterino. Vamos paso a paso.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el endometrio termina fuera del útero?',
      nodes: [
        { id: 'retro', col: 0, row: 1, k: 'cause', t: 'Menstruación retrógrada', s: 'Teoría de Sampson' },
        { id: 'implant', col: 1, row: 1, k: 'mech', t: 'Se implanta en el peritoneo', s: 'Con inflamación crónica' },
        { id: 'ova', col: 2, row: 0, k: 'risk', t: 'Ovario', s: 'El lugar más frecuente' },
        { id: 'dou', col: 2, row: 1, k: 'risk', t: 'Fondo de saco de Douglas', s: 'Y ligamentos uterosacros' },
        { id: 'rec', col: 2, row: 2, k: 'risk', t: 'Tabique rectovaginal', s: 'Duele al defecar' },
        { id: 'vej', col: 2, row: 3, k: 'risk', t: 'Vejiga y uréteres', s: 'Duele al orinar' },
        { id: 'rar', col: 3, row: 2, k: 'trap', t: 'Pleura y cicatriz de cesárea', s: 'Localizaciones raras' },
      ],
      edges: [
        { from: 'retro', to: 'implant' },
        { from: 'implant', to: 'ova' }, { from: 'implant', to: 'dou' },
        { from: 'implant', to: 'rec' }, { from: 'implant', to: 'vej' },
        { from: 'rec', to: 'rar' },
      ],
      steps: [
        { show: ['retro'], note: 'Fragmentos de endometrio suben por las trompas',
          say: 'Empecemos por el mecanismo. La teoría más aceptada es la de Sampson: durante la regla, fragmentos de endometrio refluyen por las trompas hacia la cavidad peritoneal, en vez de salir por la vagina.' },
        { show: ['implant'], note: 'Se prenden y generan inflamación crónica',
          say: 'Esos fragmentos logran implantarse porque el ambiente peritoneal se los permite, y ahí generan una inflamación crónica que depende del estrógeno. Guarda esta idea, porque explica por qué duele siempre en relación con la regla.' },
        { show: ['ova'], note: 'El endometrioma se forma aquí',
          say: 'El lugar donde más se implanta es el ovario, formando el clásico quiste de chocolate, que ahora vamos a ver en la ecografía.' },
        { show: ['dou'], note: 'Nódulos dolorosos al tacto',
          say: 'También se implanta en el fondo de saco de Douglas y en los ligamentos uterosacros, dejando al útero fijo y esos nódulos dolorosos que vas a sentir al tacto.' },
        { show: ['rec'], note: 'Disquecia: dolor al defecar con la regla',
          say: 'Si llega al tabique rectovaginal o al recto, aparece la disquecia: dolor al defecar, que empeora justo con la menstruación.' },
        { show: ['vej'], note: 'Disuria catamenial',
          say: 'Y si toca la vejiga o el uréter, vas a ver disuria que se repite cada mes, junto con la regla. Fíjate en el patrón: todo lo que aparece o empeora con la menstruación, en esta paciente, es sospechoso.' },
        { show: ['rar'], note: 'Casos raros que igual se preguntan',
          say: 'Y hay localizaciones raras que a veces aparecen en el examen: en la pleura o el diafragma, dando un neumotórax que coincide con la regla, o en la cicatriz de una cesárea previa, como un nódulo doloroso que crece cada mes.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada que tienes que reconocer de memoria',
      cards: [
        { title: 'Tríada cardinal', tag: 'Pregunta fija', kind: 'key', items: [
          { t: 'Dismenorrea progresiva', d: 'No cede con antiinflamatorios comunes',
            say: 'Esta tríada la vas a ver una y otra vez. Primero, dismenorrea que empeora año tras año y que ya no responde a los antiinflamatorios que antes le servían.' },
          { t: 'Dispareunia profunda', d: 'Duele con la penetración',
            say: 'Segundo, dispareunia profunda: duele con la penetración, porque tracciona justo los ligamentos uterosacros comprometidos.' },
          { t: 'Infertilidad', d: 'Hasta la mitad de las pacientes',
            say: 'Y tercero, infertilidad, en hasta la mitad de los casos, por las adherencias y la inflamación que alteran la trompa y el ovocito.' },
        ] },
        { title: 'Al examinarla', tag: 'Lo que vas a palpar', kind: 'normal', items: [
          { t: 'Útero fijo en retroversión', d: 'No se moviliza al tacto',
            say: 'Al examinarla, el útero está fijo en retroversión: no se mueve cuando lo intentas movilizar.' },
          { t: 'Nódulos en el Douglas', d: 'Firmes y dolorosos',
            say: 'Y vas a palpar nódulos firmes y dolorosos en el fondo de saco posterior y en los ligamentos uterosacros. Con esta clínica, ya deberías estar pensando en endometriosis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Con qué confirmas lo que sospechas?',
      cards: [
        { title: 'Ecografía transvaginal', tag: 'Primer examen', kind: 'key', items: [
          { t: 'Vidrio esmerilado', d: 'Ecos finos y homogéneos',
            say: 'Pide primero una ecografía transvaginal. El endometrioma se ve como un quiste con ecos finos y homogéneos, la clásica imagen en vidrio esmerilado.' },
          { t: 'Sin papilas ni Doppler', d: 'Eso descarta cáncer',
            say: 'Fíjate en algo importante: sin papilas sólidas ni vascularización al Doppler. Eso es lo que te permite descartarte del cáncer de ovario.' },
        ] },
        { title: 'Cuando la eco no basta', tag: 'Enfermedad profunda', kind: 'alert', items: [
          { t: 'Resonancia magnética pélvica', d: 'Mapea uterosacros y tabique',
            say: 'Si sospechas endometriosis profunda infiltrante, la resonancia magnética es tu siguiente paso: mapea los uterosacros, el tabique rectovaginal, la vejiga o el colon.' },
          { t: 'Laparoscopía con biopsia', d: 'El estándar de oro definitivo',
            say: 'Y el diagnóstico definitivo, el estándar de oro, es la laparoscopía con biopsia, donde vas a ver esas lesiones que parecen quemaduras de pólvora.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adenomiosis',
      title: 'Ahora el otro lado: cuando es todo el útero',
      cards: [
        { title: 'Quién la tiene', tag: 'El perfil que cambia todo', kind: 'key', items: [
          { t: 'Multípara, 35 a 50 años', d: 'No la joven nuligesta',
            say: 'Cambiemos de enfermedad. La adenomiosis aparece en la mujer multípara, entre los treinta y cinco y los cincuenta años. Ese perfil ya es distinto al de la endometriosis, que ves en la joven nuligesta.' },
          { t: 'Hipermenorrea + dismenorrea tardía', d: 'El sangrado abundante manda',
            say: 'Y el síntoma que manda cambia también: aquí lo que más te va a contar es hipermenorrea, sangrado abundante, con una dismenorrea que aparece más tarde en la vida.' },
        ] },
        { title: 'Examen y ecografía', tag: 'Útero difuso, no nodular', kind: 'normal', items: [
          { t: 'Útero grande, blando, globoso', d: 'Duele parejo, no en un punto',
            say: 'Al examinarla, el útero está aumentado de tamaño de forma difusa, blando y globuloso, y duele parejo, no en un nódulo puntual como en la endometriosis.' },
          { t: 'Miometrio en rayos de sol', d: 'Heterogéneo y asimétrico',
            say: 'La ecografía muestra un miometrio heterogéneo, con esas estriaciones que se describen como rayos de sol, y una asimetría entre ambas paredes.' },
        ] },
        { title: 'Tratamiento', tag: 'Médico primero', kind: 'pharma', items: [
          { t: 'DIU con levonorgestrel', d: 'Primera opción médica',
            say: 'El tratamiento médico de primera línea es el DIU con levonorgestrel, junto con antiinflamatorios y ácido tranexámico para el sangrado.' },
          { t: 'Histerectomía', d: 'Curativa con la paridad cumplida',
            say: 'Y si ya cumplió su paridad y el tratamiento médico falla, la histerectomía es curativa. Guarda este contraste: en la endometriosis operas focos y quistes; en la adenomiosis, si operas, sacas el útero completo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'La diferencia que más se pregunta',
      title: 'Endometriosis versus adenomiosis',
      head: ['Parámetro', 'Endometriosis', 'Adenomiosis'],
      rows: [
        { cells: ['Dónde está el endometrio ectópico', 'Fuera del útero: ovario, peritoneo', 'Dentro del miometrio'],
          say: 'Pongamos todo en una tabla. La diferencia de fondo es esta: en la endometriosis el endometrio está fuera del útero; en la adenomiosis, dentro del miometrio.' },
        { cells: ['Edad típica', 'Joven, veinte a treinta y cinco años', 'Multípara, treinta y cinco a cincuenta'],
          say: 'La edad también cambia: joven en la endometriosis, multípara y más grande en la adenomiosis.' },
        { cells: ['Síntoma que manda', 'Dismenorrea, dispareunia, infertilidad', 'Hipermenorrea con dismenorrea tardía'],
          say: 'Y el síntoma que manda: dolor y dispareunia en una, sangrado abundante en la otra.' },
        { cells: ['Examen físico', 'Útero fijo, nódulos en el Douglas', 'Útero grande, blando y difuso'],
          say: 'Al examen, un útero fijo y nodular en la endometriosis; un útero grande y difuso, sin nódulos, en la adenomiosis.' },
        { cells: ['Tratamiento quirúrgico', 'Cistectomía o escisión de focos', 'Histerectomía con la paridad cumplida'],
          say: 'Y si llega a cirugía, en la endometriosis conservas el útero y sacas los focos; en la adenomiosis, con la paridad cumplida, el útero completo se va.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la endometriosis',
      title: '¿Busca embarazo ahora, o no?',
      cards: [
        { title: 'Si NO busca embarazo', tag: 'Dolor pélvico', kind: 'pharma', items: [
          { t: 'Dienogest continuo', d: 'Dos miligramos al día, sin pausas',
            say: 'Volvamos a la endometriosis, para el tratamiento. Si tu paciente no busca embarazo ahora, la primera línea es el dienogest continuo, dos miligramos al día, sin descansos.' },
          { t: 'DIU-LNG o ACOs continuos', d: 'Buenas alternativas de primera línea',
            say: 'Como alternativas igual de válidas en primera línea, tienes el DIU con levonorgestrel, o anticonceptivos combinados en pauta continua, sin la semana de descanso.' },
          { t: 'Análogos de GnRH', d: 'Máximo seis meses',
            say: 'Si nada de eso responde, subes a análogos de GnRH, pero solo por seis meses, porque desmineralizan el hueso.' },
        ] },
        { title: 'Si SÍ busca embarazo', tag: 'Ojo con la trampa', kind: 'alert', items: [
          { t: 'Las hormonas no ayudan aquí', d: 'Solo retrasan la búsqueda',
            say: 'Pero si busca embarazo, cambia todo: ninguna de esas hormonas mejora la fertilidad. Dárselas solo le hace perder tiempo reproductivo.' },
          { t: 'Cirugía conservadora o FIV', d: 'Según el tamaño del endometrioma',
            say: 'Lo que corresponde es cirugía laparoscópica conservadora, o derivar directo a fertilización in vitro. Y eso depende del tamaño del endometrioma, que vamos a ver ahora en el árbol de decisión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: '¿Cuándo operas a la que no busca embarazo?',
      cards: [
        { title: 'Indicaciones quirúrgicas', tag: 'No es la primera opción', kind: 'criteria', items: [
          { t: 'Endometrioma grande', d: 'Cuatro centímetros o más',
            say: 'Aunque no busque embarazo, hay indicaciones para operar. La primera es un endometrioma de cuatro centímetros o más, o que duele a pesar del tratamiento.' },
          { t: 'Dolor refractario', d: 'Tras al menos dos líneas médicas',
            say: 'La segunda es el dolor que no cede después de probar al menos dos líneas de tratamiento hormonal.' },
          { t: 'Compromiso de uréter o intestino', d: 'Enfermedad profunda infiltrante',
            say: 'Y la tercera, cuando la enfermedad profunda comprime el uréter o el intestino: ahí la cirugía deja de ser electiva y se vuelve necesaria.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos endometriosis y adenomiosis en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Dolor típico, sin deseo de embarazo', 'Dienogest continuo', 'Pedir laparoscopía de entrada'],
          say: 'Repasemos las trampas. Dolor típico, sin deseo de embarazo: dienogest continuo. El error es saltar directo a la laparoscopía.' },
        { cells: ['Quiste en vidrio esmerilado, sin papilas', 'Es un endometrioma benigno', 'Pensar en cáncer y operar de urgencia'],
          say: 'Un quiste en vidrio esmerilado, sin papilas: es un endometrioma benigno. El error es asustarse y pensar en cáncer.' },
        { cells: ['Útero grande, blando y difuso', 'Sospechar adenomiosis', 'Confundirlo con miomatosis'],
          say: 'Útero grande, blando y difuso, sin nódulos: sospecha adenomiosis. El error clásico es llamarlo miomatosis.' },
        { cells: ['Busca embarazo con endometrioma grande', 'Cirugía conservadora o FIV', 'Dar solo tratamiento hormonal'],
          say: 'Si busca embarazo y el endometrioma es grande: cirugía conservando el ovario, o FIV. El error es dar solo hormonas y hacerla esperar.' },
        { cells: ['Adenomiosis con paridad cumplida', 'Histerectomía si falla el DIU', 'Insistir en tratamiento médico indefinido'],
          say: 'Y adenomiosis con la paridad ya cumplida: si falla el DIU, histerectomía. El error es seguir insistiendo con fármacos para siempre.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 27 años, nuligesta, consulta por dismenorrea intensa de 3 años que ha empeorado progresivamente y no cede con ibuprofeno. Además tiene dispareunia profunda y lleva 18 meses buscando embarazo sin éxito. Al examen: útero en retroversión fija, con nódulos dolorosos en el fondo de saco de Douglas. La ecografía muestra en el ovario izquierdo un quiste de 4,2 cm con contenido homogéneo en vidrio esmerilado, sin papilas ni Doppler.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar dienogest 2 mg al día en forma continua' },
        { letter: 'B', text: 'Derivar a cirugía laparoscópica conservadora o a fertilización in vitro' },
        { letter: 'C', text: 'Indicar análogos de GnRH por 6 meses y reevaluar' },
        { letter: 'D', text: 'Iniciar anticonceptivos orales combinados en forma continua' },
        { letter: 'E', text: 'Controlar con ecografía en 6 meses, sin tratamiento' },
      ],
      correct: 'B',
      explanation: 'El cuadro es endometriosis con endometrioma mayor a 4 cm, y la paciente busca embarazo desde hace 18 meses. El tratamiento hormonal no mejora la fertilidad y solo retrasa la búsqueda; la conducta es cirugía conservadora o derivación a técnicas de reproducción asistida.',
      say: {
        stem: 'Vamos con el caso. Mujer de veintisiete años, nuligesta, con dismenorrea intensa de tres años que ha empeorado y no cede con ibuprofeno. Además tiene dispareunia profunda y lleva dieciocho meses buscando embarazo sin éxito. Al examen, útero fijo en retroversión, con nódulos dolorosos en el Douglas. La ecografía muestra en el ovario izquierdo un quiste de cuatro coma dos centímetros, homogéneo, en vidrio esmerilado, sin papilas ni Doppler.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: iniciar dienogest continuo, derivar a cirugía conservadora o a fertilización in vitro, indicar análogos de GnRH por seis meses, iniciar anticonceptivos combinados continuos, o solo controlar con ecografía. Piénsalo.',
        answer: 'Es la B. Fíjate en el dato que cambia todo: lleva dieciocho meses buscando embarazo. Con endometrioma mayor a cuatro centímetros y deseo de fertilidad, ninguna hormona ayuda: dienogest, GnRH y anticonceptivos combinados quedan descartados porque solo retrasan la búsqueda. Lo que corresponde es cirugía conservadora del ovario, o derivación directa a reproducción asistida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 54',
      stem: 'Mujer de 38 años con dismenorrea severa, dispareunia profunda y menometrorragia. La ecografía transvaginal muestra un útero aumentado de tamaño con ecotextura heterogénea, sin miomas definidos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Endometriosis' },
        { letter: 'B', text: 'Pólipo endometrial' },
        { letter: 'C', text: 'Hiperplasia endometrial' },
        { letter: 'D', text: 'Mioma uterino intramural' },
        { letter: 'E', text: 'Adenomiosis' },
      ],
      correct: 'E',
      explanation: 'El útero aumentado de tamaño de forma difusa, con ecotextura heterogénea y sin miomas definidos, junto con menometrorragia y dismenorrea, es el cuadro clásico de adenomiosis: endometrio ectópico dentro del miometrio.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de treinta y ocho años con dismenorrea severa, dispareunia profunda y sangrado menstrual abundante e irregular. La ecografía transvaginal muestra un útero aumentado de tamaño, con la textura heterogénea, y sin ningún mioma definido.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: endometriosis, pólipo endometrial, hiperplasia endometrial, mioma intramural, o adenomiosis. Piénsalo.',
        answer: 'La respuesta es la E, adenomiosis. Fíjate en la trampa: la dispareunia y la dismenorrea te tientan a marcar endometriosis, pero el hallazgo clave es el útero aumentado de tamaño de forma difusa y heterogénea, sin masa focal. Eso es adenomiosis, no endometriosis: en esta última, el útero al examen suele ser de tamaño normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 10',
      stem: 'Mujer de 32 años consulta por dismenorrea de 2 años, progresiva. Al examen ginecológico se palpa un tumor anexial derecho. La ecografía transvaginal muestra un tumor ovárico derecho de 6,5 cm, quístico, en vidrio esmerilado. Su Ca-125 resulta 86 UI/L (normal menor a 35).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Carcinoma epitelial de ovario' },
        { letter: 'B', text: 'Endometrioma ovárico' },
        { letter: 'C', text: 'Teratoma maduro' },
        { letter: 'D', text: 'Disgerminoma ovárico' },
        { letter: 'E', text: 'Quiste folicular' },
      ],
      correct: 'B',
      explanation: 'La imagen en vidrio esmerilado, en una mujer joven con dismenorrea progresiva, corresponde a un endometrioma ovárico. El Ca-125 elevado no descarta esto: también se eleva en procesos peritoneales benignos como la endometriosis, no solo en el cáncer.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de treinta y dos años con dismenorrea progresiva de dos años. Al examen se palpa un tumor anexial derecho, y la ecografía muestra un quiste ovárico derecho de seis coma cinco centímetros, en vidrio esmerilado. Su Ca ciento veinticinco sale en ochenta y seis, sobre el valor normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: carcinoma epitelial, endometrioma ovárico, teratoma maduro, disgerminoma, o quiste folicular. Piénsalo.',
        answer: 'Es la B, endometrioma ovárico. Y aquí está la trampa: el Ca ciento veinticinco elevado te tienta hacia el cáncer, pero ese marcador también sube en la endometriosis, porque es un proceso inflamatorio peritoneal. La imagen manda: vidrio esmerilado, sin papilas, en una mujer joven con dismenorrea progresiva, es endometrioma.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diferéncialas', tag: 'Dónde está el endometrio', kind: 'key', items: [
          { t: 'Fuera del útero: endometriosis', d: 'Joven, dolor y nódulos fijos',
            say: 'Cerremos. Si el endometrio está fuera del útero, es endometriosis: mujer joven, dolor, útero fijo y nodular.' },
          { t: 'Dentro del miometrio: adenomiosis', d: 'Multípara, sangrado y útero difuso',
            say: 'Si está dentro del miometrio, es adenomiosis: multípara, sangrado abundante y útero grande sin nódulos.' },
        ] },
        { title: 'Tratamiento', tag: 'La pregunta que decide todo', kind: 'pharma', items: [
          { t: '¿Busca embarazo ahora?', d: 'Cambia toda la conducta',
            say: 'En la endometriosis, la pregunta que decide el tratamiento es si busca embarazo ahora. Las hormonas tratan el dolor, nunca la infertilidad.' },
          { t: 'Adenomiosis: DIU, luego histerectomía', d: 'Curativa con paridad cumplida',
            say: 'Y en la adenomiosis, empiezas con el DIU medicado, y si falla, con paridad cumplida, la histerectomía es curativa.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Vidrio esmerilado no es cáncer', d: 'Aunque suba el Ca-125',
            say: 'Si te llevas una sola idea de hoy: un quiste en vidrio esmerilado, sin papilas, es endometrioma, aunque el Ca ciento veinticinco esté alto. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Endometriosis y adenomiosis: qué decide la conducta',
    root: N('start', 'Sospecha por la clínica', 'Dismenorrea, dispareunia, sangrado o infertilidad',
      'Partamos de la sospecha clínica. Lo primero es decidir qué enfermedad es más probable, según lo que cuenta la paciente.',
      ['', N('q', '¿El útero está fijo y nodular, o grande y difuso?', 'Eso separa las dos enfermedades',
        'La pregunta que ordena todo: ¿el útero está fijo, con nódulos dolorosos, o está aumentado de tamaño de forma difusa y blanda?',
        ['Fijo y nodular, joven', N('q', '¿Busca embarazo ahora?', 'Endometriosis',
          'Si es fijo y nodular, en una mujer joven, piensa en endometriosis. Y aquí la pregunta clave es si busca embarazo ahora.',
          ['No busca embarazo', N('do', 'Dienogest continuo', 'Luego análogos de GnRH si no responde',
            'Si no busca embarazo, dienogest continuo, dos miligramos al día. Si no responde, análogos de GnRH por máximo seis meses.')],
          ['Sí busca embarazo', N('q', '¿Endometrioma mayor a cuatro centímetros?', 'Nunca uses hormonas para la fertilidad',
            'Si busca embarazo, olvida las hormonas: no mejoran la fertilidad. Pregúntate el tamaño del endometrioma.',
            ['Sí, mayor a cuatro', N('do', 'Cistectomía laparoscópica conservando la corteza', 'O derivar a FIV',
              'Con un endometrioma grande, cistectomía laparoscópica conservando la corteza sana, o derivación directa a fertilización in vitro.')],
            ['No, o sin endometrioma', N('do', 'Deriva a técnicas de reproducción asistida', 'Sin retrasar más el tiempo reproductivo',
              'Sin endometrioma grande, deriva igual a técnicas de reproducción asistida: no hay tiempo que perder.')])] )],
        ['Grande y difuso, multípara', N('q', '¿Ya cumplió su paridad?', 'Adenomiosis',
          'Si el útero está aumentado de tamaño de forma difusa y blanda, en una multípara con sangrado abundante, es adenomiosis. Pregúntate si ya cumplió su paridad.',
          ['No la ha cumplido', N('do', 'DIU con levonorgestrel', 'Más antiinflamatorios y ácido tranexámico',
            'Si aún no cumple su paridad, DIU con levonorgestrel, antiinflamatorios y ácido tranexámico para el sangrado.')],
          ['Sí, y falla el tratamiento médico', N('ok', 'Histerectomía', 'Curativa y definitiva',
            'Si ya cumplió su paridad y el tratamiento médico falla, la histerectomía es curativa y definitiva.')])])]),
  },
};
