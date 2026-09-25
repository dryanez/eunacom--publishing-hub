// Clase 15.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-16).
// El banco real EUNACOM (código 6.02.2.002 no trae preguntas propias; se buscó por "soda cáustica",
// "quemadura química", "lavado ocular") tiene dos versiones casi idénticas de la misma pregunta
// (Agosto 2021 · Pregunta 173 y Diciembre 2019 · Pregunta 175, código 6.02.1.001): se usa solo la
// más reciente para no repetir el mismo caso dos veces. Se descarta una tercera pregunta con
// "soda cáustica" (Julio 2016 · Pregunta 95) porque es ingesta de cáustico, no quemadura ocular:
// tema de otra clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La única urgencia oftalmológica donde se trata antes de preguntar nada',
      say: 'Bienvenidos. Hoy vemos las quemaduras químicas oculares, y quiero que te quede clarísima una idea desde el principio: esta es la única urgencia de todo el examen donde el tratamiento va antes que la historia clínica. Cada segundo que pasa sin lavar el ojo es retina, córnea y visión que no vuelven. Vamos a ver por qué, y exactamente cómo se hace.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Álcalis contra ácidos: por qué unos penetran y otros no',
      nodes: [
        { id: 'alc', col: 0, row: 0, k: 'cause', t: 'Álcalis', s: 'Soda cáustica, cal viva, cemento, amoníaco' },
        { id: 'aci', col: 0, row: 2, k: 'cause', t: 'Ácidos', s: 'Ácido de baterías, ácido muriático' },
        { id: 'lic', col: 1, row: 0, k: 'mech', t: 'Necrosis por licuefacción', s: 'Saponifica los lípidos de la membrana' },
        { id: 'coa', col: 1, row: 2, k: 'mech', t: 'Necrosis por coagulación', s: 'Precipita las proteínas' },
        { id: 'pen', col: 2, row: 0, k: 'risk', t: 'Penetra en minutos', s: 'Cámara anterior, iris, cristalino' },
        { id: 'esc', col: 2, row: 2, k: 'good', t: 'Forma una escara protectora', s: 'Frena el avance del ácido' },
      ],
      edges: [
        { from: 'alc', to: 'lic' }, { from: 'lic', to: 'pen' },
        { from: 'aci', to: 'coa' }, { from: 'coa', to: 'esc' },
      ],
      steps: [
        { show: ['alc'], note: 'Soda cáustica, cal, cemento, amoníaco: los más peligrosos',
          say: 'Empecemos por el mecanismo, porque de ahí sale todo lo demás. Los álcalis, como la soda cáustica, la cal viva, el cemento o el amoníaco de los limpiadores, son con diferencia los más destructivos.' },
        { show: ['lic'], note: 'Saponifica las membranas y desnaturaliza el colágeno',
          say: 'El álcali produce necrosis por licuefacción: saponifica los lípidos de las membranas celulares y desnaturaliza el colágeno del estroma corneal. Y ese proceso no forma ninguna barrera.' },
        { show: ['pen'], note: 'Iris, cristalino y trabéculo dañados en minutos',
          say: 'Por eso el álcali sigue penetrando activamente, hacia el estroma profundo, la cámara anterior, el iris y el cristalino, en cuestión de minutos u horas. No se detiene solo.' },
        { show: ['aci'], note: 'Ácido de baterías, ácido muriático: menos destructivos',
          say: 'Los ácidos, en cambio, como el ácido sulfúrico de las baterías o el ácido muriático, son menos destructivos, aunque igual son graves.' },
        { show: ['coa'], note: 'Precipita proteínas, forma una escara',
          say: 'El ácido produce necrosis por coagulación: precipita las proteínas de golpe.' },
        { show: ['esc'], note: 'Esa escara actúa como un escudo',
          say: 'Y esa coagulación forma una escara firme sobre la superficie, que actúa como una barrera y limita que el ácido siga penetrando en profundidad. Por eso, a igual concentración, un álcali es siempre más grave que un ácido. La única excepción que se pregunta es el ácido fluorhídrico, que sí penetra como un álcali.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Se lava primero, se pregunta después',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'start', t: 'Contacto ocular con químico', s: 'Álcali o ácido, hace minutos' },
        { id: 'ane', col: 1, row: 0, k: 'good', t: 'Anestésico tópico', s: 'Vence el blefarospasmo' },
        { id: 'irr', col: 1, row: 2, k: 'good', t: 'Irrigación con suero fisiológico', s: 'Uno a dos litros, veinte a treinta minutos' },
        { id: 'eve', col: 2, row: 2, k: 'good', t: 'Evertir los párpados', s: 'Barrer los fondos de saco con tórula' },
        { id: 'ph', col: 3, row: 1, k: 'q', t: 'Tira de pH', s: 'Meta: pH neutro, siete a siete y medio' },
        { id: 'tra', col: 0, row: 3, k: 'trap', t: 'Historia clínica o agudeza visual primero', s: 'Retrasa el lavado, error grave' },
      ],
      edges: [
        { from: 'con', to: 'ane' }, { from: 'con', to: 'irr' },
        { from: 'irr', to: 'eve' }, { from: 'eve', to: 'ph', label: 'controla' },
        { from: 'con', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['con'], note: 'La regla de oro absoluta de todo el tema',
          say: 'Aquí está la regla de oro de todo el tema, la que se pregunta una y otra vez: ante una quemadura química ocular, se lava primero y se pregunta después.' },
        { show: ['tra'], note: 'El error que más cuesta caro',
          say: 'Y el error clásico, el que hace perder puntos, es demorar el lavado para redactar la ficha clínica, llamar al oftalmólogo o medir la agudeza visual. Nada de eso puede esperar: cada minuto sin irrigar destruye más tejido.' },
        { show: ['ane'], note: 'Sin esto el paciente no colabora',
          say: 'Lo primero es instilar una gota de anestésico tópico, como la proparacaína, para vencer el blefarospasmo y que el paciente deje de apretar el ojo.' },
        { show: ['irr'], note: 'El volumen y el tiempo se preguntan tal cual',
          say: 'Y de inmediato, irrigación continua con suero fisiológico o Ringer lactato, con matraz o equipo de venoclisis a chorro directo. La cifra que se pregunta: mínimo uno a dos litros, durante veinte a treinta minutos ininterrumpidos. Si no hay suero, sirve agua corriente limpia.' },
        { show: ['eve'], note: 'Obligatorio, sobre todo con cal o cemento',
          say: 'Un paso que se olvida y que es obligatorio: evertir el párpado superior e inferior, y barrer los fondos de saco con una tórula húmeda. Si fue cal o cemento, ahí quedan partículas sólidas atrapadas que van a seguir liberando álcali si no se retiran.' },
        { show: ['ph'], note: 'El lavado no termina por reloj, termina por pH',
          say: 'Y el lavado no se detiene por un tiempo fijo: se controla con una tira de pH en el fondo de saco. La meta es la neutralidad, entre siete y siete y medio. Se espera diez minutos después de terminar y se vuelve a medir, para descartar que el pH rebote por partículas retenidas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico',
      title: 'El signo que decide todo: la isquemia límbica',
      cards: [
        { title: 'Limbo esclerocorneal', tag: 'Ahí viven las células madre de la córnea', kind: 'key', items: [
          { t: 'Ojo blanco y sin vasos', d: 'No es mejoría: es necrosis vascular isquémica',
            say: 'Una vez controlado el lavado, hay un signo que decide el pronóstico de por vida, y es contraintuitivo: la isquemia del limbo esclerocorneal. El limbo alberga las células madre epiteliales de la córnea. Cuando el químico destruye sus vasos, el ojo se ve paradójicamente blanco y sin vasos, como porcelana.' },
          { t: 'Pérdida de la capacidad regenerativa', d: 'Pronóstico visual pésimo, puede requerir trasplante de limbo',
            say: 'Y ojo, porque en el examen ese blanco tienta a pensar que el ojo mejoró. Es justo lo contrario: significa que los vasos que nutren el limbo murieron, la córnea perdió su capacidad de regenerarse, y el pronóstico visual es pésimo. Ese paciente puede terminar necesitando un trasplante de limbo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Álcalis contra ácidos, y las decisiones que se preguntan',
      head: ['Característica', 'Álcalis', 'Ácidos'],
      rows: [
        { cells: ['Sustancias frecuentes', 'Soda cáustica, cal, cemento, amoníaco', 'Ácido de batería, ácido muriático'],
          say: 'Repasemos las trampas. En sustancias, los álcalis son la soda cáustica, la cal, el cemento y el amoníaco; los ácidos, el de las baterías y el muriático.' },
        { cells: ['Tipo de necrosis', 'Licuefacción, sin barrera', 'Coagulación, con escara protectora'],
          say: 'El álcali produce licuefacción y no forma barrera; el ácido, coagulación, que sí forma una escara protectora.' },
        { cells: ['Profundidad del daño', 'Profunda y progresiva, llega a cámara anterior', 'Superficial, salvo el ácido fluorhídrico'],
          say: 'Por eso el álcali llega profundo, hasta la cámara anterior; el ácido queda superficial, con la única excepción del fluorhídrico, que se comporta como álcali.' },
        { cells: ['Conducta inmediata', 'Lavado profuso, veinte a treinta minutos', 'Exactamente la misma conducta'],
          say: 'Y la conducta inmediata es idéntica para los dos: lavado profuso, de veinte a treinta minutos, sin importar cuál fue el químico.' },
        { cells: ['Trampa clásica', 'Neutralizar con un ácido débil', 'Medir agudeza visual antes de lavar'],
          say: 'Y las dos trampas clásicas del examen: intentar neutralizar el álcali con un ácido débil, que genera una reacción exotérmica y quema todavía más; y medir la agudeza visual o esperar al oftalmólogo antes de lavar. Ninguna de las dos se hace.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Trabajador de una faena de construcción, de 29 años, llega corriendo a la urgencia rural gritando de dolor, luego de que un saco de cemento y cal viva le estallara en la cara hace 10 minutos. Presenta blefarospasmo intenso y lagrimeo. El técnico de enfermería pregunta si debe tomar los signos vitales y la agudeza visual antes de ingresarlo al box.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tomar los signos vitales y la agudeza visual antes de iniciar cualquier tratamiento' },
        { letter: 'B', text: 'Iniciar de inmediato irrigación ocular profusa con suero fisiológico, sin esperar ningún otro trámite' },
        { letter: 'C', text: 'Esperar la llegada del oftalmólogo de turno antes de tocar los ojos' },
        { letter: 'D', text: 'Aplicar un ungüento con corticoides y ocluir con parche estéril' },
        { letter: 'E', text: 'Instilar un colirio con ácido acético diluido para neutralizar la cal' },
      ],
      correct: 'B',
      explanation: 'La cal viva y el cemento son álcalis, y en toda quemadura química ocular la conducta inaplazable es la irrigación ocular inmediata y profusa. No se debe demorar el lavado por signos vitales, agudeza visual ni la llegada del especialista, y está contraindicado intentar neutralizar con otro químico.',
      say: {
        stem: 'Vamos con un caso. Un trabajador de una faena de construcción, de veintinueve años, llega corriendo a la urgencia rural gritando de dolor, después de que un saco de cemento y cal viva le estallara en la cara hace diez minutos. Tiene blefarospasmo intenso y lagrimeo. El técnico de enfermería pregunta si debe tomar los signos vitales y la agudeza visual antes de ingresarlo al box.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: tomar signos vitales y agudeza visual primero, iniciar de inmediato la irrigación con suero fisiológico sin esperar ningún trámite, esperar al oftalmólogo, aplicar un ungüento con corticoides y ocluir, o instilar un colirio con ácido acético para neutralizar la cal. Piénsalo.',
        answer: 'Es la B. La cal y el cemento son álcalis, y sabemos que penetran en minutos, así que no hay ningún minuto que perder en trámites. Se lava primero y se pregunta después. Tomar los signos vitales o la agudeza visual antes es el error clásico. Esperar al especialista es igual de grave. Y neutralizar con ácido acético es la trampa más peligrosa: genera una reacción exotérmica que suma una quemadura térmica encima de la química.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 173',
      stem: 'Un paciente consulta en el servicio de urgencia porque hace 20 minutos le saltó una solución de soda cáustica en la cara, la que entró a los ojos, presentando intenso dolor y dificultades para ver. Al examen físico tiene ojo rojo profundo, córneas opacas, y con el ojo derecho solo es capaz de contar dedos, mientras que con el izquierdo tiene agudeza visual de 20/80.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Ungüento antibiótico y parche ocular' },
        { letter: 'B', text: 'Lavado con suero fisiológico abundante por 30 minutos' },
        { letter: 'C', text: 'Hielo local' },
        { letter: 'D', text: 'Corticoides tópicos' },
        { letter: 'E', text: 'Analgésicos' },
      ],
      correct: 'B',
      explanation: 'La causticación ocular se maneja con lavado profuso con suero fisiológico o agua por 30 minutos, sin importar la agudeza visual ya perdida. Esto es distinto de la sospecha de perforación ocular, donde no se toca el ojo y solo se dan analgésicos y antibióticos endovenosos mientras se deriva con urgencia.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Un paciente consulta porque hace veinte minutos le saltó una solución de soda cáustica en la cara, que le entró a los ojos, con dolor intenso y dificultad para ver. Al examen tiene ojo rojo profundo, córneas opacas, y con el ojo derecho solo cuenta dedos, mientras que con el izquierdo tiene una agudeza visual de veinte ochenta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: ungüento antibiótico y parche ocular, lavado con suero fisiológico abundante por treinta minutos, hielo local, corticoides tópicos, o analgésicos. Piénsalo.',
        answer: 'Es la B. Aunque el daño visual ya se ve severo, con córneas opacas y visión de cuenta dedos, la conducta sigue siendo la misma: lavado abundante durante treinta minutos. No importa cuán grave se vea el ojo, primero se lava. El parche ocular aquí no es error, porque no hay sospecha de perforación; se evita solo cuando sí la hay, para no adherir el párpado a un globo abierto.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla que decide todo', tag: 'Se lava primero', kind: 'key', items: [
          { t: 'Lavado inmediato, sin trámites antes', d: 'Ni ficha, ni agudeza visual, ni esperar al especialista',
            say: 'Cerremos con las reglas de oro. Ante una quemadura química, se lava primero y se pregunta después: nada de ficha clínica, agudeza visual ni esperar al especialista antes de irrigar.' },
          { t: 'Un litro o dos, veinte a treinta minutos', d: 'Con eversión de párpados y control de pH',
            say: 'El volumen mínimo es uno a dos litros de suero, durante veinte a treinta minutos, evertiendo los párpados y controlando con tira de pH hasta llegar a la neutralidad.' },
        ] },
        { title: 'Mecanismo', tag: 'Álcalis contra ácidos', kind: 'criteria', items: [
          { t: 'Álcalis: licuefacción, penetran', d: 'Cal, cemento, soda cáustica: los más graves',
            say: 'Los álcalis producen licuefacción y siguen penetrando; son los más graves.' },
          { t: 'Ácidos: coagulación, forman escara', d: 'Se autolimitan, salvo el fluorhídrico',
            say: 'Los ácidos producen coagulación y forman una escara que los autolimita, con la excepción del ácido fluorhídrico.' },
        ] },
        { title: 'Pronóstico', tag: 'El ojo blanco no es buena señal', kind: 'alert', items: [
          { t: 'Isquemia límbica: ojo blanco porcelana', d: 'Destruye las células madre corneales, pronóstico pésimo',
            say: 'Si te llevas una sola idea de hoy: en la quemadura química el tratamiento va antes que cualquier pregunta, y si ves el limbo blanco y sin vasos, no es mejoría, es isquemia límbica severa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con quemadura química ocular: qué se hace primero y cómo se decide el pronóstico',
    root: (() => {
      const trasplante = N('refer', 'Trasplante de limbo, según evolución', 'Pronóstico visual reservado',
        'Con isquemia límbica confirmada, el pronóstico es reservado y puede terminar necesitando un trasplante de limbo más adelante.');
      const isquemia = N('alert', 'Isquemia límbica: limbo blanco y sin vasos', 'No es mejoría, es necrosis vascular',
        'Si el limbo se ve blanco y sin vasos, no pienses que mejoró: es isquemia límbica, y significa que las células madre de la córnea murieron.',
        ['', trasplante]);

      const vigilancia = N('ok', 'Limbo con vasos conservados', 'Mejor pronóstico de regeneración corneal',
        'Si el limbo conserva sus vasos, el pronóstico de regeneración corneal es mucho mejor.');
      const limboQ = N('q', 'Cómo se ve el limbo esclerocorneal', 'Con vasos, o blanco y sin vasos',
        'Ahora examina el limbo esclerocorneal, porque de eso depende el pronóstico visual de por vida.',
        ['con vasos', vigilancia],
        ['blanco, sin vasos', isquemia]);

      const derivar = N('do', 'Derivar a oftalmología', 'Con el pH ya neutralizado',
        'Con el pH ya en la meta, deriva a oftalmología para completar la evaluación.',
        ['', limboQ]);
      const phNo = N('do', 'Seguir irrigando', 'El pH todavía no está neutro',
        'Si el pH todavía no está entre siete y siete y medio, sigues irrigando: el lavado termina por pH, no por reloj.');
      const phQ = N('q', 'El pH del fondo de saco es neutro', 'Meta: siete a siete y medio, verificado a los diez minutos',
        'Controla el pH en el fondo de saco con una tira reactiva, y espera diez minutos después de terminar para reconfirmarlo.',
        ['sí, neutro', derivar],
        ['no, todavía no', phNo]);

      const evertir = N('do', 'Evertir los párpados y barrer los fondos de saco', 'Retira partículas de cal o cemento atrapadas',
        'Evierte el párpado superior e inferior y barre los fondos de saco con una tórula húmeda: si quedan partículas de cal o cemento, van a seguir quemando.',
        ['', phQ]);
      const irrigar = N('do', 'Irrigar con suero fisiológico', 'Uno a dos litros, veinte a treinta minutos, sin demora',
        'Irriga de inmediato con suero fisiológico o Ringer lactato, mínimo uno a dos litros, durante veinte a treinta minutos ininterrumpidos.',
        ['', evertir]);
      const anestesia = N('do', 'Instilar anestésico tópico', 'Vence el blefarospasmo para poder lavar bien',
        'Instila una gota de anestésico tópico para vencer el blefarospasmo, y parte a lavar de inmediato.',
        ['', irrigar]);

      return N('start', 'Contacto ocular reciente con un químico', 'No hagas ficha ni agudeza visual todavía',
        'Ante un paciente que llega con un químico en el ojo, no pierdas tiempo en la ficha ni en la agudeza visual: se lava primero y se pregunta después.',
        ['', anestesia]);
    })(),
  },
};
