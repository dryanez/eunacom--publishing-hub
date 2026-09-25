// Clase 16.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_1.cjs (derma-02).
// Pregunta real EUNACOM: node classes/scripts/class_questions.cjs --search "acné"
// -> EUNACOM Diciembre 2025 · Pregunta 78 (código 6.01.1.001, confianza 0.97).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El escalonamiento tópico, oral y las reglas vitales de la isotretinoína',
      say: 'Bienvenidos. Seguimos con el acné vulgar, la enfermedad inflamatoria cutánea más frecuente de la adolescencia, y un tema de muy alta frecuencia en el examen. La buena noticia es que el tratamiento se ordena solo, si conoces el mecanismo: cuatro factores encadenados que explican por qué se escala de un retinoide tópico hasta la isotretinoína oral. Partamos por ahí.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Los cuatro pilares del acné',
      nodes: [
        { id: 'que', col: 0, row: 0, k: 'cause', t: 'Hiperqueratinización folicular', s: 'Tapón del ostium: el comedón' },
        { id: 'seb', col: 0, row: 1, k: 'cause', t: 'Hipersecreción sebácea', s: 'Estimulada por andrógenos' },
        { id: 'bac', col: 0, row: 2, k: 'cause', t: 'Cutibacterium acnes', s: 'Degrada grasa a ácidos irritantes' },
        { id: 'inf', col: 1, row: 1, k: 'mech', t: 'Rotura folicular', s: 'Inflamación en la dermis' },
        { id: 'acne', col: 2, row: 1, k: 'effect', t: 'Acné vulgar', s: 'Comedón, pápula, pústula o nódulo' },
      ],
      edges: [
        { from: 'que', to: 'inf', label: 'tapón' }, { from: 'seb', to: 'inf', label: 'sustrato' },
        { from: 'bac', to: 'inf', label: 'inflama' }, { from: 'inf', to: 'acne' },
      ],
      steps: [
        { show: ['que'], note: 'La lesión elemental obligatoria',
          say: 'Todo parte con un tapón de queratina que ocluye la salida del folículo. Ese tapón es el comedón, la lesión elemental que define al acné vulgar. Sin comedón, no hablamos de acné.' },
        { show: ['seb'], note: 'La pubertad enciende el sustrato',
          say: 'Segundo, la hipersecreción sebácea, que los andrógenos de la pubertad estimulan y que le da alimento a lo que viene después.' },
        { show: ['bac'], note: 'Vive ahí, pero puede inflamar',
          say: 'Tercero, el Cutibacterium acnes, antes llamado Propionibacterium acnes: una bacteria comensal que vive en ese ambiente graso y degrada los triglicéridos en ácidos grasos libres proinflamatorios.' },
        { show: ['inf'], note: 'Ahí se define la gravedad',
          say: 'Cuando esos tres factores se juntan, el folículo se rompe hacia la dermis y llegan los neutrófilos: eso es la inflamación, y es lo que separa al acné leve del severo.' },
        { show: ['acne'], note: 'Del comedón al nódulo',
          say: 'El resultado final es el acné vulgar, y su forma clínica va desde el comedón puro hasta la pápula, la pústula, y en los casos más severos, el nódulo con riesgo de cicatriz. Esa escala de gravedad es justamente la que ordena el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Tres formas clínicas',
      cards: [
        { title: 'Comedoniano', tag: 'No inflamatorio', kind: 'normal', items: [
          { t: 'Comedones abiertos y cerrados', d: '"Puntos negros" y "puntos blancos"',
            say: 'Veamos las tres formas clínicas. La comedoniana, no inflamatoria, tiene comedones abiertos, los puntos negros por oxidación de melanina y queratina, y comedones cerrados, los puntos blancos.' },
        ] },
        { title: 'Pápulo-pustuloso', tag: 'Inflamatorio leve a moderado', kind: 'criteria', items: [
          { t: 'Pápulas y pústulas', d: 'Superficiales, sobre el comedón',
            say: 'La pápulo-pustulosa suma pápulas eritematosas inflamatorias y pústulas superficiales al comedón de base.' },
        ] },
        { title: 'Nódulo-quístico', tag: 'Severo, con riesgo de cicatriz', kind: 'alert', items: [
          { t: 'Nódulos, abscesos y fístulas', d: 'Profundos y dolorosos',
            say: 'Y la nódulo-quística, o conglobata, tiene nódulos profundos, dolorosos, abscesos y fístulas.' },
          { t: 'Cicatrices atróficas o queloideas', d: 'Alto riesgo si se retrasa el tratamiento',
            say: 'Es la única con alto riesgo de dejar cicatrices, ya sea atróficas, en picahielo, o hipertróficas. Y ese riesgo de cicatriz es justamente lo que más adelante te va a hacer subir un escalón de tratamiento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento tópico',
      title: 'Comedoniano y pápulo-pustuloso leve',
      nodes: [
        { id: 'com', col: 0, row: 1, k: 'start', t: 'Acné comedoniano', s: 'No inflamatorio' },
        { id: 'ret', col: 1, row: 0, k: 'good', t: 'Retinoide tópico', s: 'Adapaleno, de noche' },
        { id: 'pb', col: 1, row: 2, k: 'good', t: 'Peróxido de benzoilo', s: 'Queratolítico y bactericida' },
        { id: 'pap', col: 2, row: 1, k: 'risk', t: 'Pápulo-pustuloso leve', s: 'Se suma inflamación' },
        { id: 'atb', col: 3, row: 1, k: 'trap', t: 'Antibiótico tópico solo', s: 'Clindamicina o eritromicina en monoterapia' },
        { id: 'res', col: 4, row: 1, k: 'alert', t: 'Resistencia bacteriana', s: 'En semanas' },
      ],
      edges: [
        { from: 'com', to: 'ret' }, { from: 'com', to: 'pb' },
        { from: 'ret', to: 'pap' }, { from: 'pb', to: 'pap' },
        { from: 'pap', to: 'atb', label: 'nunca solo' }, { from: 'atb', to: 'res' },
      ],
      steps: [
        { show: ['com'], note: 'Se ataca el comedón',
          say: 'Empecemos el tratamiento por el escalón más bajo. En el acné comedoniano puro, el fármaco de elección es el retinoide tópico: adapaleno al cero coma uno por ciento, o tretinoína. Normaliza la descamación del folículo y disuelve el comedón. Se aplica de noche.' },
        { show: ['pb'], note: 'Sin resistencia bacteriana',
          say: 'Se puede asociar peróxido de benzoilo, que es queratolítico y bactericida potente, y tiene una ventaja enorme: la bacteria no le genera resistencia.' },
        { show: ['pap'], note: 'Ya hay pápulas y pústulas',
          say: 'Cuando se suma inflamación leve a moderada, con pápulas y pústulas, se combina peróxido de benzoilo más retinoide tópico, y puede agregarse un antibiótico tópico como la clindamicina.' },
        { show: ['atb'], note: 'La regla de oro de este tema',
          say: 'Pero aquí está la regla de oro que más se pregunta: nunca se prescribe un antibiótico tópico solo, en monoterapia.' },
        { show: ['res'], note: 'Se pierde la eficacia en semanas',
          say: 'Porque induce resistencia del Cutibacterium acnes en cuestión de semanas, y pierde toda su eficacia. Siempre se combina con peróxido de benzoilo o con un retinoide.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento oral',
      title: 'Antibióticos orales: pápulo-pustuloso moderado a severo',
      cards: [
        { title: 'Tetraciclinas', tag: 'Doxiciclina de elección', kind: 'pharma', items: [
          { t: 'Doxiciclina o minociclina', d: 'Por 8 a 12 semanas',
            say: 'Cuando el acné pápulo-pustuloso es moderado a severo, o se extiende a cara y tronco, se usan tetraciclinas orales, doxiciclina o minociclina, por ocho a doce semanas, junto con peróxido de benzoilo tópico.' },
        ] },
        { title: 'Efectos adversos y contraindicaciones', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Fotosensibilidad, esofagitis', d: 'Tomar con agua, no acostarse después',
            say: 'Dan fotosensibilidad y pueden causar esofagitis, así que se indican con un vaso lleno de agua y sin acostarse después de tomarlas.' },
          { t: 'Contraindicadas en embarazo', d: 'Y en menores de 8 años, por tinción dental',
            say: 'Y están contraindicadas en el embarazo y en menores de ocho años, porque tiñen de forma permanente los dientes en formación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Isotretinoína oral',
      title: 'Cuándo se indica y las reglas que no se negocian',
      cards: [
        { title: 'Indicaciones', tag: 'Nódulo-quístico o refractario', kind: 'key', items: [
          { t: 'Nódulo-quístico o conglobata severo', d: 'Y acné con cicatrización activa',
            say: 'La isotretinoína oral es el fármaco más eficaz: atrofia la glándula sebácea, frena la queratinización y reduce la bacteria. Se indica en el acné nódulo-quístico o conglobata severo, y en el que ya está cicatrizando.' },
          { t: 'Refractario o con gran impacto psicológico', d: 'Tras tres meses de antibiótico oral completo',
            say: 'También en el acné moderado que no respondió a un ciclo completo de antibióticos orales, o cuando genera un impacto psicológico importante.' },
        ] },
        { title: 'Teratogenicidad extrema', tag: 'Regla vital', kind: 'alert', items: [
          { t: 'Doble anticoncepción', d: 'Un mes antes, durante y un mes después',
            say: 'Y aquí viene la regla que jamás se negocia: es un teratógeno extremo, con riesgo de malformaciones craneofaciales, cardíacas y del sistema nervioso central. En mujeres en edad fértil exige doble método anticonceptivo, iniciado un mes antes del tratamiento, mantenido durante, y hasta un mes después de suspenderlo.' },
          { t: 'Dos test de embarazo negativos', d: 'Y control mensual durante el tratamiento',
            say: 'Además, dos pruebas de embarazo negativas antes de empezar, y una prueba mensual mientras dure el tratamiento.' },
        ] },
        { title: 'Monitorización y efecto universal', tag: 'Se pregunta siempre', kind: 'pharma', items: [
          { t: 'Perfil lipídico y pruebas hepáticas', d: 'Basal y de control',
            say: 'Se controla el perfil lipídico y las pruebas hepáticas, de forma basal y periódica.' },
          { t: 'Queilitis descamativa y sequedad', d: 'Efecto adverso universal y predecible',
            say: 'Y el efecto adverso universal y predecible es la queilitis descamativa y la sequedad de piel y mucosas. Si el paciente no tiene los labios partidos, probablemente no está tomando el fármaco.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo el escalonamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué fármaco para cada forma de acné',
      head: ['Forma clínica', 'Primera línea', 'Error frecuente'],
      rows: [
        { cells: ['Comedoniano', 'Retinoide tópico (adapaleno)', 'Partir con antibiótico oral'],
          say: 'Repasemos las trampas. Acné comedoniano: retinoide tópico. El error es partir de una vez con un antibiótico oral, que no le hace nada al comedón sin inflamación.' },
        { cells: ['Pápulo-pustuloso leve a moderado', 'Peróxido de benzoilo + retinoide ± clindamicina', 'Clindamicina tópica en monoterapia'],
          say: 'Pápulo-pustuloso leve a moderado: peróxido de benzoilo más retinoide, y clindamicina si hace falta, pero nunca sola. Ese "nunca sola" es el error más preguntado del tema.' },
        { cells: ['Pápulo-pustuloso moderado a severo', 'Doxiciclina oral 8 a 12 semanas', 'Suspender antes de las 8 semanas'],
          say: 'Pápulo-pustuloso moderado a severo: doxiciclina oral por ocho a doce semanas. El error es suspenderla antes, antes de completar el curso.' },
        { cells: ['Nódulo-quístico o refractario', 'Isotretinoína oral', 'Indicarla sin anticoncepción doble'],
          say: 'Y el nódulo-quístico o refractario: isotretinoína oral. El error más grave de todos es indicarla en una mujer fértil sin la doble anticoncepción y los test de embarazo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 17 años consulta por lesiones faciales de 6 meses de evolución que le generan angustia social. Al examen físico se aprecian abundantes comedones abiertos y cerrados en frente y mejillas, con escasas pápulas eritematosas no confluentes, sin nódulos, quistes ni cicatrices.',
      question: '¿Cuál es el tratamiento de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Adapaleno tópico en gel, aplicado en la noche' },
        { letter: 'B', text: 'Doxiciclina oral 100 mg al día por 8 semanas' },
        { letter: 'C', text: 'Clindamicina tópica en monoterapia' },
        { letter: 'D', text: 'Isotretinoína oral en dosis bajas' },
        { letter: 'E', text: 'Corticoide tópico de baja potencia' },
      ],
      correct: 'A',
      explanation: 'Comedones predominantes con escasas pápulas no confluentes, sin nódulos ni cicatrices: acné comedoniano leve. El tratamiento de primera línea es un retinoide tópico, como el adapaleno, aplicado en la noche; puede asociarse peróxido de benzoilo. No corresponden antibióticos orales, isotretinoína ni la clindamicina en monoterapia.',
      say: {
        stem: 'Vamos al caso. Joven de diecisiete años, con lesiones en la cara desde hace seis meses, que le generan mucha angustia. Al examen hay abundantes comedones abiertos y cerrados en la frente y las mejillas, con pocas pápulas rojas que no confluyen, y sin nódulos, quistes ni cicatrices.',
        question: '¿Cuál es el tratamiento de primera línea más adecuado?',
        options: 'Las opciones: adapaleno tópico en la noche, doxiciclina oral por ocho semanas, clindamicina tópica sola, isotretinoína en dosis bajas, o un corticoide tópico. Piénsalo.',
        answer: 'Es la A. El comedón manda en este cuadro: predominan los comedones, con pocas pápulas y ningún nódulo ni cicatriz, así que es un acné comedoniano leve. Ahí el retinoide tópico es de elección. La doxiciclina y la isotretinoína son escalones más altos que este paciente no necesita todavía, y la clindamicina sola es directamente un error, porque nunca se da en monoterapia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 78',
      stem: 'Paciente de 17 años consulta por acné. Al examen físico se observan múltiples comedones en cara, pecho y espalda, asociados a pápulas y pústulas abundantes, y presencia de algunos quistes en dichas zonas con cicatrices atróficas.',
      question: '¿Cuál es el tratamiento de elección para este paciente?',
      options: [
        { letter: 'A', text: 'Peróxido de benzoilo tópico' },
        { letter: 'B', text: 'Clindamicina tópica' },
        { letter: 'C', text: 'Isotretinoína oral' },
        { letter: 'D', text: 'Doxiciclina oral' },
        { letter: 'E', text: 'Adapaleno tópico' },
      ],
      correct: 'C',
      explanation: 'Comedones extensos, pápulas y pústulas abundantes, con quistes y cicatrices atróficas: acné nódulo-quístico, inflamatorio severo. El tratamiento de elección es la isotretinoína oral. Las demás opciones son escalones tópicos u orales insuficientes para este grado de severidad y de cicatrización.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de diecisiete años con acné: comedones en cara, pecho y espalda, con pápulas y pústulas abundantes, y algunos quistes en esas mismas zonas con cicatrices atróficas.',
        question: '¿Cuál es el tratamiento de elección para este paciente?',
        options: 'Las opciones: peróxido de benzoilo tópico, clindamicina tópica, isotretinoína oral, doxiciclina oral, o adapaleno tópico. Piénsalo.',
        answer: 'Es la C, isotretinoína oral. La palabra clave del enunciado es quistes con cicatrices atróficas: eso ya es un acné nódulo-quístico, inflamatorio severo, y ese grado de gravedad, con cicatriz activa, es indicación directa de isotretinoína. Los tópicos, y hasta la doxiciclina oral, se quedan cortos para este nivel; son el escalón de un acné más leve que el de este paciente.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Escalonamiento', tag: 'De menos a más', kind: 'key', items: [
          { t: 'Comedoniano: retinoide tópico', d: 'Leve-moderado: sumar peróxido de benzoilo',
            say: 'Cerremos con las reglas de oro. Comedoniano: retinoide tópico. Leve a moderado: se suma peróxido de benzoilo, y antibiótico tópico si hace falta, nunca solo.' },
          { t: 'Moderado-severo: doxiciclina oral', d: 'Nódulo-quístico: isotretinoína',
            say: 'Moderado a severo, o extenso: doxiciclina oral. Nódulo-quístico, cicatrizante o refractario: isotretinoína oral.' },
        ] },
        { title: 'Isotretinoína', tag: 'Nunca se negocia', kind: 'alert', items: [
          { t: 'Doble anticoncepción', d: 'Test de embarazo mensual',
            say: 'La isotretinoína exige doble anticoncepción y test de embarazo mensual en toda mujer fértil, sin excepción.' },
          { t: 'Perfil lipídico y hepático', d: 'Queilitis: efecto esperado, no de alarma',
            say: 'Se controla el perfil lipídico y hepático, y la queilitis descamativa es un efecto esperado, no una señal de alarma. Si te llevas una sola idea de hoy: nunca antibiótico tópico solo, y nunca isotretinoína sin el programa de prevención de embarazo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Acné vulgar: escalonamiento terapéutico',
    root: N('start', 'Paciente con acné', 'Comedones, con o sin inflamación',
      'Frente a un paciente con acné, la conducta se decide con dos preguntas: cuánta inflamación hay, y si ya dejó cicatriz.',
      ['', N('q', '¿Qué tan inflamado está?', 'Comedoniano · leve-moderado · severo',
        'Clasifica primero la forma clínica: solo comedones, pápulas y pústulas, o nódulos y quistes con riesgo de cicatriz.',
        ['Solo comedones', N('ok', 'Retinoide tópico', 'Adapaleno de noche ± peróxido de benzoilo',
          'Acné comedoniano puro: retinoide tópico, como el adapaleno, aplicado en la noche. Puede asociarse peróxido de benzoilo.')],
        ['Pápulas y pústulas leves', N('do', 'Peróxido de benzoilo + retinoide', '± antibiótico tópico, nunca solo',
          'Pápulo-pustuloso leve: peróxido de benzoilo más retinoide tópico. Si se agrega un antibiótico tópico, jamás en monoterapia.')],
        ['Pápulas y pústulas extensas', N('do', 'Doxiciclina oral', '8 a 12 semanas + peróxido de benzoilo',
          'Pápulo-pustuloso moderado a severo, o extenso en tronco: doxiciclina oral por ocho a doce semanas, junto con peróxido de benzoilo tópico.')],
        ['Nódulos, quistes o cicatriz', N('q', '¿Mujer en edad fértil?', 'Isotretinoína oral',
          'Nódulo-quístico, cicatrizante o refractario a antibióticos orales: isotretinoína oral. Antes de indicarla, revisa el riesgo reproductivo.',
          ['Sí', N('alert', 'Doble anticoncepción obligatoria', 'Más test de embarazo mensual',
            'En mujer fértil, la isotretinoína exige doble método anticonceptivo un mes antes, durante y un mes después, con test de embarazo negativo antes y cada mes.')],
          ['No', N('ok', 'Isotretinoína con control lipídico y hepático', 'Y vigilancia de la sequedad mucocutánea',
            'Sin riesgo reproductivo, igual se controla el perfil lipídico y las pruebas hepáticas, y se explica la queilitis esperable.')])])]),
  },
};
