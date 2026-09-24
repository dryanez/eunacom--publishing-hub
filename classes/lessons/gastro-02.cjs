// Clase piloto 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-02).

module.exports = {
  id: 'gastro-02',
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué rompe la mucosa, a quién se endoscopia y a quién se erradica',
      say: 'Bienvenidos. En esta clase vemos la úlcera péptica, la dispepsia y el Helicobacter pylori, otro tema de alta frecuencia, con ocho preguntas en el banco. Y es la continuación natural de la clase anterior: allá el problema era una barrera que falla; aquí, es una mucosa que pierde su protección.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Qué rompe la mucosa?',
      nodes: [
        { id: 'hp', col: 0, row: 0, k: 'cause', t: 'Helicobacter pylori', s: 'Lo porta el 75 % de los chilenos' },
        { id: 'inf', col: 1, row: 0, k: 'mech', t: 'Inflamación de la mucosa', s: 'La bacteria daña el epitelio' },
        { id: 'aine', col: 0, row: 2, k: 'cause', t: 'AINE', s: 'Antiinflamatorios no esteroidales' },
        { id: 'pg', col: 1, row: 2, k: 'mech', t: 'Menos prostaglandinas', s: 'Se pierde la protección' },
        { id: 'cof', col: 2, row: 2, k: 'cause', t: 'Tabaco y corticoides', s: 'Cofactores' },
        { id: 'ulc', col: 2, row: 1, k: 'risk', t: 'Úlcera péptica', s: 'Duodenal o gástrica' },
        { id: 'sin', col: 3, row: 1, k: 'effect', t: 'Epigastralgia urente', s: 'Peor en ayunas, alivia al comer' },
      ],
      edges: [
        { from: 'hp', to: 'inf' }, { from: 'inf', to: 'ulc' },
        { from: 'aine', to: 'pg' }, { from: 'pg', to: 'ulc' },
        { from: 'cof', to: 'ulc', label: 'potencian' },
        { from: 'ulc', to: 'sin' },
      ],
      steps: [
        { show: ['hp'], note: 'Primer culpable: Helicobacter pylori',
          say: 'Partamos por la causa. En la úlcera péptica hay dos culpables, y el primero es el Helicobacter pylori. No es un detalle menor: en Chile, cerca del setenta y cinco por ciento de la población lo porta.' },
        { show: ['inf'], note: '90 % de las duodenales, 70 % de las gástricas',
          say: 'La bacteria vive en el estómago e inflama la mucosa, y esa mucosa inflamada es la que termina ulcerándose. Explica el noventa por ciento de las úlceras duodenales y el setenta por ciento de las gástricas.' },
        { show: ['aine'], note: 'Segundo culpable: los antiinflamatorios',
          say: 'El segundo culpable son los antiinflamatorios no esteroidales, los AINE.' },
        { show: ['pg'], note: 'Sin prostaglandinas, el ácido hace el daño',
          say: 'Pero actúan por otro camino: bloquean las prostaglandinas, que son justamente las que protegen la mucosa. Sin esa protección, el ácido hace el daño.' },
        { show: ['cof'], note: 'No causan úlcera solos, pero la potencian',
          say: 'Y hay dos cofactores que no causan la úlcera por sí solos, pero la potencian: el tabaco y los corticoides.' },
        { show: ['ulc'], note: 'Dos caminos, un mismo resultado',
          say: 'Por cualquiera de estos caminos llegamos al mismo lugar: la úlcera péptica, en el duodeno o en el estómago.' },
        { show: ['sin'], note: 'Ojo: el cáncer gástrico duele igual',
          say: '¿Y cómo se presenta? Con epigastralgia urente: un ardor en la boca del estómago que aumenta con el ayuno y alivia al comer o con antiácidos. Pero ojo, esta misma clínica la puede dar un cáncer gástrico, o una dispepsia funcional. Y eso nos lleva directo a la siguiente pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿A quién se le pide endoscopía?',
      cards: [
        { title: 'Endoscopía de entrada', tag: 'Alarma o 40 años o más', kind: 'alert', items: [
          { t: 'Signos de alarma', d: 'Baja de peso, anemia, vómitos, hemorragia',
            say: 'Como la úlcera, el cáncer y la dispepsia funcional duelen igual, la que decide es la endoscopía. ¿A quién se la pedimos? Primero, a todo paciente con signos de alarma: baja de peso, anemia, vómitos o hemorragia.' },
          { t: '40 años o más', d: 'Descartar cáncer gástrico (GES)',
            say: 'Y segundo, por edad: a los cuarenta años o más. En Chile el cáncer gástrico es la primera causa de muerte por cáncer en hombres, y por eso la garantía GES fija el corte en cuarenta, no en cincuenta como vimos en el reflujo. Esa diferencia se pregunta.' },
        ] },
        { title: 'Buscar el H. pylori', tag: 'Tres métodos', kind: 'key', items: [
          { t: 'Test de ureasa', d: 'En la biopsia de la endoscopía',
            say: 'La endoscopía además nos sirve para buscar la bacteria: en la biopsia se hace el test de ureasa.' },
          { t: 'Aliento o antígeno fecal', d: 'Sin endoscopía',
            say: 'Y sin endoscopía hay dos métodos no invasivos: el test del aliento con urea marcada, y el antígeno en deposiciones.' },
        ] },
        { title: 'Dispepsia funcional', tag: 'Diagnóstico de exclusión', kind: 'normal', items: [
          { t: 'Exige endoscopía normal', d: 'Sin úlcera ni cáncer',
            say: 'Por último, la dispepsia funcional. Es un diagnóstico de exclusión: solo puedes llamarla funcional cuando la endoscopía es normal. Sin endoscopía, no hay dispepsia funcional.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Úlcera duodenal vs úlcera gástrica',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'start', t: 'Úlcera en la endoscopía', s: '¿Dónde está?' },
        { id: 'duo', col: 1, row: 0, k: 'effect', t: 'Úlcera duodenal', s: 'No se maligniza' },
        { id: 'era', col: 2, row: 0, k: 'good', t: 'Erradicar siempre', s: 'Aunque el test sea negativo' },
        { id: 'ctd', col: 3, row: 0, k: 'good', t: 'Control no invasivo', s: 'Aliento o antígeno fecal' },
        { id: 'gas', col: 1, row: 2, k: 'risk', t: 'Úlcera gástrica', s: 'Puede ser un cáncer' },
        { id: 'bio', col: 2, row: 2, k: 'risk', t: 'Biopsia del borde', s: 'Siempre, para descartar cáncer' },
        { id: 'ctg', col: 3, row: 2, k: 'good', t: 'Endoscopía de control', s: 'Erradicar si H. pylori + y rebiopsiar' },
      ],
      edges: [
        { from: 'ulc', to: 'duo', label: 'duodeno' }, { from: 'duo', to: 'era' }, { from: 'era', to: 'ctd' },
        { from: 'ulc', to: 'gas', label: 'estómago' }, { from: 'gas', to: 'bio' }, { from: 'bio', to: 'ctg' },
      ],
      steps: [
        { show: ['ulc'], note: 'La ubicación cambia toda la conducta',
          say: 'Ahora, encontraste una úlcera. Lo primero que tienes que preguntarte es dónde está, porque la conducta cambia completamente.' },
        { show: ['duo'], note: 'Duodenal: el problema es la bacteria, no el cáncer',
          say: 'Si está en el duodeno, la úlcera no se maligniza. Su problema es otro: casi siempre es Helicobacter.' },
        { show: ['era'], note: 'Falsos negativos: IBP previo o sangrado reciente',
          say: 'Por eso la regla es erradicar siempre, incluso si el test sale negativo. Los falsos negativos son frecuentes, por ejemplo si el paciente venía tomando IBP o sangró hace poco.' },
        { show: ['ctd'], note: '4 semanas post antibióticos, IBP suspendido 2 semanas',
          say: 'Y el control se hace sin endoscopía: test del aliento o antígeno fecal, cuatro semanas después de terminar los antibióticos, y con el IBP suspendido dos semanas antes, para no tener un falso negativo.' },
        { show: ['gas'], note: 'Gástrica: puede ser un cáncer que parece úlcera',
          say: 'Si en cambio la úlcera está en el estómago, el foco cambia. La úlcera gástrica puede ser un cáncer que se ve como úlcera.' },
        { show: ['bio'], note: 'Biopsia en la primera endoscopía',
          say: 'Por eso siempre se biopsia el borde, ya en la primera endoscopía.' },
        { show: ['ctg'], note: 'Duodenal: se controla con un test. Gástrica: con el endoscopio',
          say: 'Se erradica si el Helicobacter es positivo, y el control es con una nueva endoscopía, que verifica la cicatrización y permite volver a biopsiar. En resumen: la duodenal se controla con un test; la gástrica, con el endoscopio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Erradicación: cómo y a quién',
      cards: [
        { title: 'Primera línea', tag: '14 días', kind: 'pharma', items: [
          { t: 'IBP + amoxicilina + claritromicina', d: 'Amoxicilina 1 g y claritromicina 500 mg, cada 12 horas',
            say: 'Veamos cómo se erradica. La primera línea es una terapia triple: un IBP, amoxicilina un gramo y claritromicina quinientos miligramos, todos cada doce horas, por catorce días. Catorce, no siete ni diez.' },
        ] },
        { title: 'Segunda línea', tag: 'Si falla la primera', kind: 'pharma', items: [
          { t: 'Cuádruple con bismuto', d: 'IBP + bismuto + tetraciclina + metronidazol',
            say: 'Si falla, pasamos a la segunda línea: la terapia cuádruple con bismuto, que suma bismuto, tetraciclina y metronidazol al IBP. Y fíjate en la lógica: si la primera falló, lo más probable es que la bacteria sea resistente a la claritromicina, así que no la repetimos.' },
        ] },
        { title: '¿A quién se erradica?', tag: 'Se pregunta siempre', kind: 'key', items: [
          { t: 'Úlcera y linfoma MALT: siempre', d: 'El MALT regresa solo con antibióticos',
            say: '¿A quién se erradica? Siempre en la úlcera, y siempre en el linfoma MALT gástrico. Este último es un dato muy preguntado: el linfoma MALT regresa solo con los antibióticos, sin quimioterapia.' },
          { t: 'Reflujo: no', d: 'No hay asociación',
            say: 'En el reflujo, no. Conecta esto con la clase anterior: no hay relación entre el Helicobacter y el reflujo, así que un paciente con reflujo y test positivo no se erradica por su reflujo.' },
          { t: 'Indicaciones relativas', d: 'Dispepsia funcional, AINE crónico, familiar con cáncer gástrico',
            say: 'Y hay indicaciones relativas: la dispepsia funcional, el usuario crónico de antiinflamatorios, el familiar con cáncer gástrico, y la metaplasia o gastritis atrófica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencias',
      title: 'Complicaciones: hemorragia y perforación',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'risk', t: 'Úlcera péptica', s: 'Complicada' },
        { id: 'hda', col: 1, row: 0, k: 'risk', t: 'Hemorragia digestiva alta', s: 'La más frecuente' },
        { id: 'ibp', col: 2, row: 0, k: 'good', t: 'IBP endovenoso', s: 'Y endoscopía urgente con hemostasia' },
        { id: 'per', col: 1, row: 2, k: 'risk', t: 'Perforación', s: 'Dolor en puñalada, abdomen en tabla' },
        { id: 'rx', col: 2, row: 2, k: 'mech', t: 'Radiografía de tórax de pie', s: 'Neumoperitoneo' },
        { id: 'cir', col: 3, row: 2, k: 'alert', t: 'Cirugía de urgencia', s: 'Endoscopía contraindicada' },
      ],
      edges: [
        { from: 'ulc', to: 'hda', label: 'sangra' }, { from: 'hda', to: 'ibp' },
        { from: 'ulc', to: 'per', label: 'perfora' }, { from: 'per', to: 'rx' }, { from: 'rx', to: 'cir' },
      ],
      steps: [
        { show: ['ulc'], note: 'Las dos complicaciones que llegan a urgencias',
          say: 'Para cerrar la parte teórica, las dos complicaciones que llegan a urgencias.' },
        { show: ['hda'], note: 'Melena o hematemesis en un paciente ulceroso',
          say: 'La más frecuente es la hemorragia digestiva alta: melena o hematemesis en un paciente con síndrome ulceroso.' },
        { show: ['ibp'], note: 'La endoscopía diagnostica y trata',
          say: 'Se maneja con IBP endovenoso y endoscopía de urgencia, que en el mismo acto detiene el sangrado con terapia hemostática.' },
        { show: ['per'], note: 'Clínica inconfundible',
          say: 'La segunda es la perforación, y su clínica es inconfundible: un dolor brusco, en puñalada, y un abdomen en tabla.' },
        { show: ['rx'], note: 'Buscar aire bajo el diafragma',
          say: 'El examen es la radiografía de tórax de pie, buscando aire bajo el diafragma: el neumoperitoneo.' },
        { show: ['cir'], note: 'Al revés que en la hemorragia: aquí no se endoscopia',
          say: 'Y el tratamiento es cirugía de urgencia. Aquí la endoscopía está contraindicada: meter aire a presión en un estómago perforado solo empeora las cosas. Es exactamente al revés que en la hemorragia, y por eso el examen las pone juntas.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'A quién se erradica y cómo se controla',
      head: ['Situación', '¿Erradicar?', 'Control'],
      rows: [
        { cells: ['Úlcera duodenal', 'Siempre, aunque el test sea negativo', 'Aliento o antígeno fecal a las 4 semanas'],
          say: 'Repasemos en una tabla. Úlcera duodenal, cualquiera: se erradica siempre, aunque el test sea negativo, y se controla con antígeno fecal o test del aliento a las cuatro semanas.' },
        { cells: ['Úlcera gástrica con H. pylori +', 'Sí', 'Endoscopía: cicatrización + biopsias'],
          say: 'Úlcera gástrica con Helicobacter positivo: se erradica, y se controla con endoscopía, para ver la cicatrización y volver a biopsiar.' },
        { cells: ['Úlcera gástrica con H. pylori −', 'No', 'Endoscopía de control igual'],
          say: 'Úlcera gástrica con Helicobacter negativo: no hay nada que erradicar, pero la endoscopía de control se mantiene. En la gástrica, lo que nunca cambia es el endoscopio.' },
        { cells: ['Reflujo con H. pylori +', 'No, no hay asociación', 'No aplica'],
          say: 'Reflujo con Helicobacter positivo: no se erradica.' },
        { cells: ['Linfoma MALT gástrico', 'Sí: es el tratamiento', 'Endoscopía seriada'],
          say: 'Y el linfoma MALT: se erradica, porque ese es el tratamiento, y se controla con endoscopías seriadas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 27 años, sin antecedentes ni uso de antiinflamatorios, con 3 meses de dolor epigástrico urente que aumenta con el ayuno y calma al comer. La endoscopía muestra una úlcera duodenal activa de 1 cm; el test de ureasa es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar esquema erradicador de Helicobacter pylori por 14 días' },
        { letter: 'B', text: 'Indicar omeprazol 20 mg al día por 8 semanas, sin antibióticos' },
        { letter: 'C', text: 'Solicitar tomografía computarizada de abdomen y pelvis' },
        { letter: 'D', text: 'Repetir la endoscopía en 4 semanas para nuevo test de ureasa' },
        { letter: 'E', text: 'Solicitar gastrina sérica para descartar gastrinoma' },
      ],
      correct: 'A',
      explanation: 'Úlcera duodenal sin AINE: se erradica siempre, aunque el test sea negativo (los falsos negativos son frecuentes). Solo con IBP la úlcera cicatriza pero recidiva en cerca del 90 %; repetir estudios retrasa el tratamiento.',
      say: {
        stem: 'Vamos al caso. Hombre de veintisiete años, sin antecedentes y sin uso de antiinflamatorios, con tres meses de dolor epigástrico urente que aumenta con el ayuno y calma al comer. La endoscopía muestra una úlcera duodenal activa de un centímetro, y el test de ureasa sale negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: erradicar el Helicobacter por catorce días, dar solo omeprazol por ocho semanas, pedir un TAC de abdomen, repetir la endoscopía en cuatro semanas, o medir la gastrina. Piénsalo.',
        answer: 'Es la A. Este caso está hecho para que caigas en la trampa del test negativo. Úlcera duodenal, sin antiinflamatorios: es Helicobacter hasta que se demuestre lo contrario, y se erradica siempre. Si solo das omeprazol, la úlcera cicatriza, pero vuelve en cerca del noventa por ciento de los casos. Y repetir la endoscopía o pedir un TAC solo retrasa el tratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 129',
      stem: 'Hombre de 42 años con 5 días de dolor epigástrico intenso y fluctuante, con náuseas, que empeora con el ayuno y tras usar antiinflamatorios. FC 85 lpm, PA 130/82 mmHg. Dolor a la palpación epigástrica, sin signos peritoneales, masas ni visceromegalia.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Gastritis erosiva' },
        { letter: 'B', text: 'Úlcera péptica' },
        { letter: 'C', text: 'Reflujo gastroesofágico' },
        { letter: 'D', text: 'Pancreatitis aguda leve' },
        { letter: 'E', text: 'Colecistitis aguda' },
      ],
      correct: 'B',
      explanation: 'Epigastralgia que empeora en ayunas y se gatilla con AINE: síndrome ulceroso. Sin dolor en faja ni signos peritoneales no es pancreatitis; sin dolor en hipocondrio derecho no es colecistitis; el reflujo da pirosis y regurgitación.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de cuarenta y dos años con cinco días de dolor epigástrico intenso y fluctuante, con náuseas, que empeora con el ayuno y después de tomar antiinflamatorios. Signos vitales normales, dolor a la palpación epigástrica, sin signos peritoneales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: gastritis erosiva, úlcera péptica, reflujo gastroesofágico, pancreatitis aguda leve, o colecistitis aguda.',
        answer: 'La respuesta es la B, úlcera péptica. Fíjate cómo el enunciado va armando exactamente el mecanismo que vimos: un dolor que empeora en ayunas, y un gatillo claro, los antiinflamatorios. Sin dolor en faja ni signos peritoneales, no es pancreatitis. Sin dolor en el hipocondrio derecho, no es colecistitis. Y el reflujo daría pirosis y regurgitación, no epigastralgia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Endoscopía', kind: 'key', items: [
          { t: 'Alarma o 40 años o más', d: 'Endoscopía con biopsias',
            say: 'Cerremos con las reglas de oro. Signos de alarma, o cuarenta años o más: endoscopía con biopsias.' },
          { t: 'Dispepsia funcional', d: 'Solo con endoscopía normal',
            say: 'La dispepsia funcional solo existe con una endoscopía normal.' },
        ] },
        { title: 'Tratamiento', tag: 'Erradicar', kind: 'pharma', items: [
          { t: 'Duodenal: erradicar siempre', d: 'Aunque el test sea negativo',
            say: 'La úlcera duodenal se erradica siempre, aunque el test sea negativo.' },
          { t: 'Gástrica: biopsia y control endoscópico', d: 'Siempre',
            say: 'La gástrica se biopsia y se controla con endoscopía, siempre.' },
          { t: 'Triple terapia por 14 días', d: 'Si falla: cuádruple con bismuto',
            say: 'La triple terapia dura catorce días, y si falla, cuádruple con bismuto.' },
        ] },
        { title: 'Urgencias', tag: 'Hemorragia vs perforación', kind: 'alert', items: [
          { t: 'Perforación: radiografía y cirugía', d: 'La endoscopía está contraindicada',
            say: 'Y en la perforación, radiografía y cirugía, nunca endoscopía. Si te llevas una sola idea de hoy: la duodenal se erradica siempre, y la gástrica se biopsia siempre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};
