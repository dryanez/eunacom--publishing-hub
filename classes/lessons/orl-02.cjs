// Clase 14.2 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-02). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo se observa el oído con líquido, cuándo se pone una collera y cuándo una perforación es una urgencia quirúrgica',
      say: 'Bienvenido. En la clase anterior vimos la otitis media aguda, que duele y tiene fiebre. Hoy vemos lo que pasa cuando el oído medio se queda enfermo en silencio: la otitis media con efusión, la otitis media crónica simple y el colesteatoma. El examen busca que sepas distinguirlas con la otoscopía, y que sepas qué conducta corresponde a cada una. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Otitis media con efusión',
      title: 'Líquido en el oído medio, sin infección',
      cards: [
        { title: 'Qué es', tag: 'Hipoacusia silenciosa', kind: 'key', items: [
          { t: 'Líquido no purulento, tímpano íntegro', d: 'Sin fiebre ni dolor',
            say: 'La otitis media con efusión, que también se llama otitis serosa, es líquido no purulento en el oído medio, con el tímpano intacto y sin signos de infección aguda. Mira este tímpano: está entero, de color amarillento, y detrás se ve una línea de líquido con burbujas de aire. No hay fiebre ni dolor, y aquí está el truco: el niño solo no oye bien.',
            photo: { src: 'biblioteca/17_otorrino/orl-02/01_otitis-media-con-efusion-nivel-hidroaereo__bates_p318.jpg', label: 'Efusión: nivel de líquido', at: 'Mira este tímpano', credit: 'Bates, Guía de exploración física, Tabla 7-20' } },
          { t: 'Trompa de Eustaquio sin ventilar', d: 'Adenoides o rinitis alérgica',
            say: 'La causa es la misma disfunción de la trompa de Eustaquio que viste en la otitis aguda, pero aquí sin infección. En el niño se relaciona con hipertrofia de adenoides, y en general con rinitis alérgica.' },
          { t: 'Primera causa de hipoacusia conductiva', d: 'En preescolares y escolares',
            say: 'Es la causa más frecuente de hipoacusia de conducción en preescolares y escolares. Por eso el caso típico es un niño al que la profesora cree distraído, porque tiene que repetirle las órdenes.' },
        ] },
        { title: 'Conducta de tres meses', tag: 'Se pregunta mucho', kind: 'alert', items: [
          { t: 'Observar 12 semanas', d: 'Del 80 al 90% se resuelve solo',
            say: 'Entre el ochenta y el noventa por ciento de estos derrames se resuelven solos en tres meses. Por eso la conducta inicial es observar, con audiometría e impedanciometría de control. La impedanciometría muestra una curva B plana.' },
          { t: 'Sin antibióticos, antihistamínicos ni corticoides', d: 'Formalmente desaconsejados',
            say: 'Y mientras observas, nada de antibióticos, antihistamínicos, descongestionantes ni corticoides. Es una trampa muy frecuente: las alternativas con fármacos suenan activas, pero no sirven.' },
          { t: 'Persiste más de 3 meses', d: 'Con pérdida sobre 25 a 30 dB: colleras',
            say: 'Si persiste más de tres meses con hipoacusia de conducción bilateral documentada, con umbral sobre veinticinco a treinta decibeles, se hace miringotomía con tubos de ventilación timpánica, las colleras. Mira esta: es un tubito que atraviesa el tímpano y devuelve la ventilación al oído medio, por eso la audición se normaliza casi de inmediato. Primero observas y después operas, nunca al revés.',
            photo: { src: 'biblioteca/17_otorrino/orl-02/03_tubo-de-ventilacion-timpanica-colleras__bailey-love_p731.jpg', label: 'Collera en el tímpano', at: 'Mira esta', credit: 'Bailey & Love 27.ª ed., Fig. 46.20' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otitis media crónica simple',
      title: 'La perforación central con otorrea',
      cards: [
        { title: 'Cómo se reconoce', tag: 'Perforación central', kind: 'criteria', items: [
          { t: 'Perforación permanente en la pars tensa', d: 'Respeta el annulus fibroso',
            say: 'La otitis media crónica simple, o supurada benigna, es una inflamación crónica de la mucosa del oído medio con una perforación permanente en el centro del tímpano, en la pars tensa. La clave es que respeta el borde del tímpano, el annulus fibroso. Mira cómo el agujero está en el centro y deja un borde de membrana a su alrededor. Esa palabra, central, es la que la distingue de lo que viene después.',
            photo: { src: 'biblioteca/17_otorrino/orl-02/02_perforacion-timpanica-central__bates_p317.jpg', label: 'Perforación central', at: 'Mira cómo el agujero', credit: 'Bates, Guía de exploración física, Tabla 7-20' } },
          { t: 'Otorrea indolora, 6 a 12 semanas', d: 'Intermitente o persistente',
            say: 'Se manifiesta como otorrea que no duele, intermitente o persistente, durante más de seis a doce semanas, más una hipoacusia.' },
          { t: 'Pseudomonas y Staphylococcus aureus', d: 'Los gérmenes habituales',
            say: 'Los gérmenes habituales son Pseudomonas aeruginosa y Staphylococcus aureus. Esto explica el antibiótico que se elige.' },
        ] },
        { title: 'Tratamiento', tag: 'Tópico, no oral', kind: 'pharma', items: [
          { t: 'Aseo y ciprofloxacino tópico 0,3%', d: 'En la fase supurativa',
            say: 'En la fase con otorrea, el tratamiento es aseo del oído y gotas de ciprofloxacino al cero coma tres por ciento. Es una infección de la superficie mucosa, y por eso la primera línea es tópica. Los antibióticos orales y endovenosos se guardan para los casos complicados.' },
          { t: 'Evitar aminoglucósidos tópicos', d: 'Ototóxicos con el tímpano abierto',
            say: 'Ojo con esto: con el tímpano perforado, los aminoglucósidos en gotas, como la neomicina, pasan al oído interno y son ototóxicos. Esa es la alternativa tentadora que el examen pone para que caigas.' },
          { t: 'Fase seca: timpanoplastia electiva', d: 'Cierra la perforación y recupera audición',
            say: 'Y cuando el oído está seco, el tratamiento definitivo es quirúrgico, una timpanoplastia electiva, que cierra la membrana y recupera la audición.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Colesteatoma',
      title: 'Por qué el colesteatoma es una urgencia quirúrgica',
      nodes: [
        { id: 'qu', col: 0, row: 1, k: 'cause', t: 'Epitelio queratinizante en el oído medio', s: 'Escamas que se acumulan' },
        { id: 'en', col: 1, row: 1, k: 'mech', t: 'Colagenasas y citoquinas líticas', s: 'Destruye el hueso' },
        { id: 'os', col: 2, row: 0, k: 'effect', t: 'Huesecillos', s: 'Hipoacusia severa' },
        { id: 'fa', col: 2, row: 1, k: 'risk', t: 'Canal de Falopio', s: 'Parálisis facial periférica' },
        { id: 'se', col: 3, row: 1, k: 'risk', t: 'Canal semicircular lateral', s: 'Fístula laberíntica y vértigo' },
        { id: 'te', col: 4, row: 1, k: 'alert', t: 'Tegmen tympani', s: 'Meningitis o absceso cerebral' },
      ],
      edges: [
        { from: 'qu', to: 'en' },
        { from: 'en', to: 'os' },
        { from: 'en', to: 'fa' },
        { from: 'fa', to: 'se' },
        { from: 'se', to: 'te' },
      ],
      steps: [
        { show: ['qu', 'en'], note: 'Epitelio escamoso que come hueso',
          say: 'El colesteatoma no es un tumor, pero se comporta como algo destructivo. Es una acumulación de epitelio escamoso queratinizante dentro del oído medio y la mastoides. Esas células producen colagenasas y citoquinas que disuelven el hueso. Por eso se llama osteolítico.' },
        { show: ['os'], note: 'Primero, la cadena de huesecillos',
          say: 'Lo primero que se destruye es la cadena de huesecillos, y eso da una hipoacusia severa.' },
        { show: ['fa'], note: 'Después, el nervio facial',
          say: 'Si erosiona el canal de Falopio, por donde va el nervio facial, aparece una parálisis facial periférica.' },
        { show: ['se', 'te'], note: 'Al final, laberinto y cerebro',
          say: 'Si erosiona el canal semicircular lateral, se produce una fístula laberíntica con vértigo. Y si rompe el tegmen tympani, que es el techo del oído medio, llegan la meningitis y el absceso cerebral. Todo esto explica por qué la cirugía no es opcional.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El colesteatoma que come hueso',
      images: [
        { src: 'animaciones/orl-02/A1_colesteatoma_erosion_osea.mp4', label: 'Colesteatoma: del bolsillo de retracción a la erosión del hueso', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Una bolsa de queratina que destruye en orden',
          say: 'Mira el tímpano: en su parte superior se forma un bolsillo de retracción, y ahí se acumulan escamas de queratina. El saco crece hacia el ático y la mastoides, y sus enzimas disuelven el hueso. Primero cae la cadena de huesecillos, con hipoacusia. Después el canal del nervio facial, con parálisis. Luego el canal semicircular, con vértigo, y por último el techo del oído, con meningitis. Por eso se opera siempre.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colesteatoma',
      title: 'Cómo se reconoce y cómo se trata',
      cards: [
        { title: 'La otoscopía', tag: 'Marginal o atical', kind: 'alert', items: [
          { t: 'Perforación marginal o atical', d: 'Pars flácida o bolsillo de retracción',
            say: 'La otoscopía lo delata. En lugar de una perforación central, hay una perforación marginal, que compromete el borde del tímpano, o atical, en la pars flácida, o un bolsillo de retracción en esa zona.' },
          { t: 'Escamas nacaradas y otorrea fétida', d: 'Refractaria a antibióticos',
            say: 'Por el agujero asoman escamas blanquecinas nacaradas de queratina, con una otorrea purulenta de olor fétido, que no responde a los antibióticos. Mira esta otoscopía: una masa blanca nacarada, queratina acumulada, detrás del tímpano. Fetidez, escamas y borde: quédate con esas tres palabras.',
            photo: { src: 'biblioteca/17_otorrino/orl-02/05_colesteatoma-otoscopia__nelson_p5122.jpg', label: 'Masa blanco nacarada', at: 'Mira esta otoscopía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5122' } },
          { t: 'Signo de la fístula', d: 'Vértigo y nistagmo al comprimir el trago',
            say: 'Y si al comprimir el trago el paciente se marea y tiene nistagmo, significa que ya erosionó el canal semicircular lateral. Es el signo de la fístula.' },
        ] },
        { title: 'Conducta', tag: 'Cirugía obligatoria', kind: 'key', items: [
          { t: 'TAC de peñasco sin contraste', d: 'Alta resolución: muestra la extensión ósea',
            say: 'El examen de elección es el TAC de peñasco de alta resolución, sin contraste, que muestra la extensión de la erosión ósea.' },
          { t: 'Timpanomastoidectomía', d: 'Derivar al especialista',
            say: 'El tratamiento es siempre quirúrgico: una timpanomastoidectomía, radical o conservadora. Los antibióticos tópicos solo controlan la sobreinfección, pero no sacan el colesteatoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Colesteatoma',
      title: 'Qué te dice la TAC de oídos',
      cards: [
        { title: 'Lo que describe el informe', tag: 'Sin contraste', kind: 'key', items: [
          { t: 'Masa de partes blandas en el ático', d: 'Erosión del scutum y del aditus ad antrum ensanchado',
            say: 'Pides la TAC de oídos sin contraste ante una otitis crónica con sospecha de colesteatoma, o ante cualquier complicación. Tú no la lees corte a corte: usas el informe. En el colesteatoma describe una masa de partes blandas en el ático o el antro, con erosión del scutum y el aditus ad antrum ensanchado. Mira este corte: una masa de partes blandas rodea los huesecillos, en el oído medio.',
            photo: { src: 'biblioteca/17_otorrino/orl-02/04_colesteatoma-congenito-tac__nelson_p5104.jpg', label: 'TAC: masa en el oído medio', at: 'Mira este corte', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5104' } },
          { t: 'Erosión de la cadena osicular', d: 'Sobre todo la apófisis larga del yunque',
            say: 'También informa la erosión de los huesecillos, sobre todo la apófisis larga del yunque y el estribo, y una mastoides poco neumatizada o llena de tejido inflamatorio.' },
        ] },
        { title: 'Hallazgos que te hacen derivar urgente', tag: 'Complicación', kind: 'alert', items: [
          { t: 'Tegmen, canal semicircular, canal facial', d: 'Meningitis, vértigo, parálisis facial',
            say: 'Los hallazgos que cambian la conducta son los de complicación: erosión del tegmen, con riesgo de meningitis o absceso temporal; fístula del canal semicircular lateral, con vértigo; y dehiscencia del canal del nervio facial. Cualquiera de ellos obliga a derivar de urgencia.' },
          { t: 'Pared del seno sigmoides', d: 'Riesgo de trombosis',
            say: 'La erosión de la pared del seno sigmoides anuncia una trombosis del seno.' },
          { t: 'TAC normal no descarta', d: 'RM con difusión: residual o intracraneal',
            say: 'Y ojo: una TAC normal no descarta un colesteatoma pequeño; manda la otoscopía. La resonancia con difusión se reserva para el colesteatoma residual o la sospecha de complicación intracraneal.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos las tres entidades en un árbol de decisión, partiendo del oído que no oye bien o que supura.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'OME, OMC simple y colesteatoma',
      head: ['', 'Otitis con efusión', 'OMC simple', 'Colesteatoma'],
      rows: [
        { cells: ['Tímpano', 'Íntegro, retraído, ámbar, burbujas', 'Perforación central, respeta el annulus', 'Perforación marginal o atical'],
          say: 'Comparemos las tres. En la efusión el tímpano está íntegro, retraído, ámbar y con burbujas. En la crónica simple hay una perforación central que respeta el annulus. En el colesteatoma, la perforación es marginal o atical.' },
        { cells: ['Otorrea', 'No hay', 'Mucosa, indolora, no fétida', 'Fétida, con escamas nacaradas'],
          say: 'La otorrea también diferencia. En la efusión no hay otorrea, porque el líquido queda detrás del tímpano. En la simple es mucosa e indolora. Y en el colesteatoma es fétida y trae escamas nacaradas.' },
        { cells: ['Hueso', 'No es osteolítica; se resuelve sola', 'Rara vez osteolítica', 'Muy osteolítico'],
          say: 'En cuanto al hueso, la efusión se resuelve sola, la simple rara vez destruye hueso, y el colesteatoma es altamente osteolítico, con erosión de huesecillos, laberinto y tegmen.' },
        { cells: ['Conducta', 'Observar 3 meses; collera si persiste', 'Aseo + ciprofloxacino; timpanoplastia en fase seca', 'TAC de peñasco + mastoidectomía'],
          say: 'Y la conducta. Efusión: observar tres meses y poner collera si persiste con hipoacusia. Simple: aseo y ciprofloxacino, y timpanoplastia con el oído seco. Colesteatoma: TAC de peñasco sin contraste y cirugía obligatoria.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 42 años consulta por hipoacusia progresiva izquierda y supuración ótica intermitente de larga data. En el último mes la supuración es constante y de olor muy fétido, y hace 4 días siente inestabilidad al limpiarse el oído. En la otoscopía izquierda hay una perforación marginal posterosuperior en la pars flácida, por la que asoman detritos blanquecinos escamosos y tejido de granulación. Al comprimir el trago presenta vértigo con nistagmo horizontal hacia la derecha.',
      question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Otitis media crónica simple; ciprofloxacino tópico y control' },
        { letter: 'B', text: 'Otitis media con efusión; observar 3 meses' },
        { letter: 'C', text: 'Colesteatoma con fístula laberíntica; TAC de peñasco sin contraste y derivación urgente a otorrinolaringología para cirugía' },
        { letter: 'D', text: 'Otitis externa maligna; ciprofloxacino oral' },
        { letter: 'E', text: 'Neuronitis vestibular; corticoides y reposo' },
      ],
      correct: 'C',
      explanation: 'Perforación marginal en la pars flácida con escamas nacaradas y otorrea fétida es colesteatoma. El vértigo y nistagmo al comprimir el trago es el signo de la fístula: erosión del canal semicircular lateral. Se pide TAC de peñasco sin contraste y se deriva para mastoidectomía.',
      say: {
        stem: 'Veamos un caso. Un hombre de cuarenta y dos años con hipoacusia progresiva izquierda y supuración del oído desde hace años. Este último mes la supuración es constante y muy fétida, y hace cuatro días siente inestabilidad al limpiarse el oído. En la otoscopía hay una perforación marginal posterosuperior, en la pars flácida, por la que asoman escamas blanquecinas y tejido de granulación. Al comprimir el trago tiene vértigo con nistagmo horizontal.',
        question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
        options: 'Las opciones: otitis crónica simple con ciprofloxacino, otitis con efusión con observación, colesteatoma con fístula con TAC y derivación urgente, otitis externa maligna, o neuronitis vestibular. Piénsalo.',
        answer: 'Es la C. Perforación marginal, escamas nacaradas y fetidez son un colesteatoma, y el vértigo al comprimir el trago es el signo de la fístula, porque erosionó el canal semicircular lateral. Pides un TAC de peñasco sin contraste y derivas para cirugía. La A es la trampa: una crónica simple tiene perforación central y no hay fístula.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 148',
      stem: 'Un paciente de 47 años, con antecedente de perforación timpánica derecha de larga data, presenta otalgia y otorrea de dos días de evolución. Al examen físico, la otoscopía muestra la perforación timpánica conocida, con presencia de secreción amarillenta en relación al tímpano y al conducto auditivo externo.',
      question: '¿Qué antibiótico es de elección para el tratamiento inicial de este paciente?',
      options: [
        { letter: 'A', text: 'Neomicina tópica' },
        { letter: 'B', text: 'Ciprofloxacino tópico' },
        { letter: 'C', text: 'Amoxicilina oral' },
        { letter: 'D', text: 'Amoxicilina con ácido clavulánico oral' },
        { letter: 'E', text: 'Ceftriaxona endovenosa' },
      ],
      correct: 'B',
      explanation: 'Otitis media crónica simple reagudizada: primera línea tópica con ciprofloxacino. La neomicina es un aminoglucósido, con riesgo de ototoxicidad con el tímpano perforado. Los antibióticos sistémicos se reservan para los casos complicados.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de cuarenta y siete años con una perforación timpánica de larga data, que consulta por dos días de dolor y otorrea. La otoscopía muestra la perforación conocida y secreción amarillenta en el tímpano y el conducto.',
        question: '¿Qué antibiótico es de elección?',
        options: 'Las opciones son: neomicina tópica, ciprofloxacino tópico, amoxicilina oral, amoxicilina con clavulánico oral o ceftriaxona endovenosa. Piénsalo.',
        answer: 'Es la B, ciprofloxacino tópico. Es una otitis media crónica simple con otorrea, y la primera línea es tópica. La neomicina es la trampa: es un aminoglucósido, y con el tímpano perforado puede ser ototóxica. Los antibióticos orales o endovenosos se usan solo si hay complicaciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 153',
      stem: 'Paciente de 45 años con otorrea crónica recurrente, hipoacusia conductiva y perforación timpánica central con colesteatoma evidenciado en TAC de oídos.',
      question: '¿Cuál es el tratamiento?',
      options: [
        { letter: 'A', text: 'Timpanomastoidectomía (cirugía)' },
        { letter: 'B', text: 'Antibióticos tópicos indefinidos' },
        { letter: 'C', text: 'Corticoides tópicos' },
        { letter: 'D', text: 'Audífonos' },
        { letter: 'E', text: 'Solo observar' },
      ],
      correct: 'A',
      explanation: 'Colesteatoma: tratamiento quirúrgico obligatorio, timpanomastoidectomía, para erradicarlo y prevenir mastoiditis, meningitis y parálisis facial.',
      say: {
        stem: 'Otra real, del EUNACOM de julio de dos mil veinticinco. Paciente de cuarenta y cinco años con otorrea crónica recurrente, hipoacusia de conducción y un colesteatoma confirmado en el TAC de oídos.',
        question: '¿Cuál es el tratamiento?',
        options: 'Tienes: timpanomastoidectomía, antibióticos tópicos indefinidos, corticoides tópicos, audífonos o solo observar. Piénsalo.',
        answer: 'Es la A. Un colesteatoma confirmado se opera siempre, con una timpanomastoidectomía, para evitar la mastoiditis, la meningitis y la parálisis facial. Los antibióticos tópicos solo controlan la sobreinfección, y observar o poner un audífono dejaría que siga destruyendo hueso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 35',
      stem: 'Niño de 8 años con otorrea crónica serosa, hipoacusia conductiva bilateral y tímpano con perforación central.',
      question: '¿Cuál es el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Gotas óticas de ciprofloxacino + taponamiento con algodón' },
        { letter: 'B', text: 'Miringoplastia electiva' },
        { letter: 'C', text: 'Timpanotomía de urgencia' },
        { letter: 'D', text: 'Audiometría y derivación a otorrinolaringología' },
        { letter: 'E', text: 'Antibiótico oral por 14 días' },
      ],
      correct: 'D',
      explanation: 'Perforación timpánica crónica con hipoacusia de conducción: audiometría para cuantificar la pérdida y derivación a otorrinolaringología para evaluar la timpanoplastia. No se tapona un oído perforado.',
      say: {
        stem: 'Y una tercera real, del EUNACOM de julio de dos mil veinticinco. Niño de ocho años con otorrea crónica serosa, hipoacusia de conducción en los dos oídos y una perforación central del tímpano.',
        question: '¿Cuál es el manejo inicial más adecuado?',
        options: 'Las opciones: gotas de ciprofloxacino con tapón de algodón, miringoplastia electiva, timpanotomía de urgencia, audiometría y derivación, o antibiótico oral por catorce días. Piénsalo.',
        answer: 'La respuesta es la D. Es una perforación crónica con hipoacusia, y el paso inicial es cuantificar la pérdida con una audiometría y derivar al otorrino para evaluar la timpanoplastia. No se tapona un oído perforado, y no es una urgencia ni requiere antibiótico oral. Fíjate que aquí la clave es la hipoacusia, que se resuelve con cirugía electiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un escolar de 6 años es evaluado por sospecha de déficit atencional, ya que en el colegio no obedece las órdenes y pide que le repitan las frases. No ha tenido otalgia ni fiebre. La otoscopía muestra tímpanos íntegros, ligeramente retraídos, amarillentos, con nivel hidroaéreo y burbujas bilaterales. La timpanometría muestra curvas tipo B bilaterales con hipoacusia de conducción de 25 dB. El cuadro está documentado por 4 meses consecutivos.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Corticoides sistémicos orales en pulsos por 10 días' },
        { letter: 'B', text: 'Amoxicilina con ácido clavulánico por 21 días' },
        { letter: 'C', text: 'Inserción bilateral de tubos de ventilación timpánica (colleras)' },
        { letter: 'D', text: 'Mastoidectomía bilateral abierta' },
        { letter: 'E', text: 'Antihistamínicos orales y descongestionantes nasales prolongados' },
      ],
      correct: 'C',
      explanation: 'Otitis media con efusión persistente por más de 3 meses, con hipoacusia de conducción bilateral: colleras. Los antibióticos, corticoides, antihistamínicos y descongestionantes no sirven, y la mastoidectomía es para colesteatoma o mastoiditis.',
      say: {
        stem: 'Cerremos con una pregunta del banco, de caso representativo. Un escolar de seis años, evaluado por sospecha de déficit atencional, porque en el colegio pide que le repitan las frases. Sin dolor ni fiebre. La otoscopía muestra tímpanos íntegros, retraídos, amarillentos, con burbujas. La timpanometría da curva B en los dos oídos, con una pérdida de veinticinco decibeles, y el cuadro lleva cuatro meses.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: corticoides orales, amoxicilina con clavulánico por tres semanas, colleras, mastoidectomía, o antihistamínicos con descongestionantes. Piénsalo.',
        answer: 'Es la C. Es una otitis con efusión que ya pasó los tres meses de observación y tiene hipoacusia documentada, por lo que corresponde poner colleras. Las opciones con fármacos son la trampa clásica, porque están formalmente desaconsejadas. Y la mastoidectomía se reserva para el colesteatoma o la mastoiditis.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.4.005 · TAC de oídos sin medio de contraste",
      "stem": "Hombre de 40 años con otorrea fétida crónica del oído derecho e hipoacusia progresiva. La otoscopía muestra una perforación timpánica marginal posterosuperior con material blanquecino descamativo. Se planifica cirugía.",
      "question": "¿Cuál es el examen de imagen de elección para evaluar la extensión de la lesión?",
      "options": [
        {
          "letter": "A",
          "text": "Audiometría solamente"
        },
        {
          "letter": "B",
          "text": "Radiografía de Schüller"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética de cerebro con contraste como primer examen"
        },
        {
          "letter": "D",
          "text": "Ecografía de mastoides"
        },
        {
          "letter": "E",
          "text": "TAC de oídos (hueso temporal) sin medio de contraste"
        }
      ],
      "correct": "E",
      "explanation": "Una perforación marginal o atical con escamas blanquecinas y otorrea fétida es un colesteatoma. La TAC de hueso temporal sin contraste, de alta resolución, es el examen de elección para evaluar la erosión ósea (cadena osicular, canal semicircular lateral, tegmen, canal del facial) y planificar la cirugía. La resonancia se usa ante sospecha de complicación intracraneana o recidiva.",
      "say": {
        "stem": "Hombre de cuarenta años con otorrea fétida crónica, hipoacusia y una perforación marginal con escamas blanquecinas. Se planifica cirugía.",
        "question": "¿Cuál es el examen de elección para ver la extensión?",
        "options": "Las opciones: solo audiometría, radiografía de Schüller, resonancia como primer examen, ecografía o TAC de hueso temporal sin contraste. Piénsalo.",
        "answer": "Es la E. Es un colesteatoma y la TAC de hueso temporal sin contraste muestra la erosión ósea para planificar la cirugía. La resonancia tienta por ser más moderna, pero se reserva para complicaciones intracraneanas o recidiva."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: oído medio crónico',
      cards: [
        { title: 'Otitis con efusión', tag: 'Observar', kind: 'key', items: [
          { t: 'Observar 3 meses, sin fármacos', d: 'Colleras si persiste con hipoacusia',
            say: 'Cerremos con las reglas de oro. La otitis con efusión se observa tres meses, sin antibióticos ni antihistamínicos, y si persiste con hipoacusia de conducción, se ponen colleras.' },
        ] },
        { title: 'Otitis crónica simple', tag: 'Central', kind: 'pharma', items: [
          { t: 'Perforación central: ciprofloxacino tópico', d: 'Nunca aminoglucósidos',
            say: 'La otitis crónica simple tiene perforación central, y con otorrea se trata con aseo y ciprofloxacino tópico. Nunca con aminoglucósidos en gotas.' },
          { t: 'Oído seco: timpanoplastia', d: 'Cierra la perforación',
            say: 'Con el oído seco, el tratamiento definitivo es la timpanoplastia.' },
        ] },
        { title: 'Colesteatoma', tag: 'Cirugía', kind: 'alert', items: [
          { t: 'Marginal o atical, escamas y fetidez', d: 'TAC de peñasco sin contraste',
            say: 'El colesteatoma tiene perforación marginal o atical, escamas nacaradas y otorrea fétida, y se estudia con TAC de peñasco sin contraste.' },
          { t: 'Se opera siempre', d: 'Riesgo de parálisis facial, fístula y meningitis',
            say: 'Y se opera siempre, porque destruye hueso y puede causar parálisis facial, fístula laberíntica, meningitis y absceso cerebral. Si te llevas una sola idea de hoy: perforación central, gotas de ciprofloxacino; perforación marginal con escamas, cirugía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: patología crónica del oído medio',
    root: N('start', 'Hipoacusia de conducción u otorrea crónica', 'Con tímpano a la otoscopía',
      'Un paciente con hipoacusia de conducción o con otorrea crónica. Lo primero es mirar el tímpano.',
      ['', N('q', '¿El tímpano está íntegro?', 'Retraído, ámbar, con burbujas',
        'La otoscopía decide el camino: tímpano íntegro con líquido detrás, o tímpano perforado.',
        ['Sí: otitis con efusión', N('do', 'Observar 3 meses', 'Audiometría e impedanciometría; sin fármacos',
          'La mayoría se resuelve sola. No das antibióticos, antihistamínicos ni corticoides.',
          ['Persiste con hipoacusia', N('ok', 'Colleras', 'Tubos de ventilación timpánica',
            'Si pasan tres meses con hipoacusia de conducción bilateral documentada, se hace miringotomía con colleras.')],
        )],
        ['No: perforado', N('q', '¿Dónde está la perforación?', 'Central o marginal/atical',
          'Ahora importa la ubicación y lo que sale por el agujero.',
          ['Central, otorrea no fétida', N('do', 'OMC simple: aseo + ciprofloxacino tópico', 'Timpanoplastia en fase seca',
            'Es una otitis crónica simple. Tratas la fase activa con gotas de ciprofloxacino, sin aminoglucósidos, y planificas la timpanoplastia cuando el oído esté seco.')],
          ['Marginal o atical, escamas, fetidez', N('refer', 'Colesteatoma: TAC de peñasco sin contraste', 'Mastoidectomía quirúrgica obligatoria',
            'Es un colesteatoma. Se confirma con TAC de peñasco sin contraste y se deriva para timpanomastoidectomía. Vértigo, parálisis facial o signos meníngeos son complicaciones.')],
        )],
      )],
    ),
  },
};
