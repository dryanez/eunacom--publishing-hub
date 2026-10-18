// Clase piloto 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-02).

module.exports = {
  id: 'gastro-02',
  tier: 2,
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
      type: 'points',
      kicker: 'Procedimiento',
      title: 'La endoscopía por dentro',
      cards: [
        { title: 'Preparación', tag: 'Antes', kind: 'key', items: [
          { t: 'Ayuno de 6 a 8 horas', d: 'Con consentimiento informado',
            say: 'Antes de pedir una endoscopía, conviene saber cómo es el procedimiento. La hace el especialista con un endoscopio flexible, y el paciente va en ayuno de seis a ocho horas y firma un consentimiento informado.' },
          { t: 'Sedación: ir acompañado', d: 'No conducir ese día',
            say: 'Habitualmente se hace con sedación. Por eso el paciente debe ir acompañado y no puede conducir ese día. Dilo siempre al indicarla.' },
        ] },
        { title: 'Qué permite', tag: 'Durante', kind: 'normal', items: [
          { t: 'Ver y tomar biopsias', d: 'Cáncer, H. pylori, celiaquía',
            say: 'Permite ver la mucosa y tomar biopsias: para descartar cáncer, buscar Helicobacter pylori o confirmar una celiaquía.' },
          { t: 'Tratar', d: 'Hemostasia, ligadura, cuerpos extraños',
            say: 'Y también permite tratar: detener un sangrado, ligar várices o sacar un cuerpo extraño.' },
        ] },
        { title: 'Tu parte', tag: 'Médico general', kind: 'alert', items: [
          { t: 'Indicarla y preparar al paciente', d: 'Avisar anticoagulantes y antiagregantes',
            say: 'Tu parte es indicarla con los criterios que ya vimos y preparar al paciente. Si toma anticoagulantes o antiagregantes, eso se informa al especialista, que decide qué hacer con ellos. En una hemorragia, se pide con urgencia.' },
          { t: 'Complicaciones raras', d: 'Perforación, sangrado, depresión respiratoria',
            say: 'Las complicaciones son raras: perforación, sangrado después de la biopsia y depresión respiratoria por la sedación.' },
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
          say: 'Si está en el duodeno, la úlcera no se maligniza. Mira esta endoscopía: una úlcera duodenal con una mancha pigmentada en su base, un estigma de sangrado reciente. Su problema es otro: casi siempre es Helicobacter.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-02/01_ulcera_duodenal__harrison_p2430.jpg', label: 'Úlcera duodenal', at: 'Mira esta endoscopía', credit: 'Harrison 21.ª ed., p. 2430' } },
        { show: ['era'], note: 'Falsos negativos: IBP previo o sangrado reciente',
          say: 'Por eso la regla es erradicar siempre, incluso si el test sale negativo. Los falsos negativos son frecuentes, por ejemplo si el paciente venía tomando IBP o sangró hace poco.' },
        { show: ['ctd'], note: '4 semanas post antibióticos, IBP suspendido 2 semanas',
          say: 'Y el control se hace sin endoscopía: test del aliento o antígeno fecal, cuatro semanas después de terminar los antibióticos, y con el IBP suspendido dos semanas antes, para no tener un falso negativo.' },
        { show: ['gas'], note: 'Gástrica: puede ser un cáncer que parece úlcera',
          say: 'Si en cambio la úlcera está en el estómago, el foco cambia. La úlcera gástrica puede ser un cáncer que se ve como úlcera. Mira este cráter de bordes regulares con fondo blanquecino de fibrina: así se ve una úlcera gástrica.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-02/01_ulcera-gastrica-forrest-iic__cto-digestivo_p63.jpg', label: 'Úlcera gástrica', at: 'Mira este cráter', credit: 'Manual CTO Digestivo 14.ª ed., p. 63' } },
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
      type: 'points',
      kicker: 'Fármacos',
      title: 'AINE: quién necesita gastroprotección',
      cards: [
        { title: 'Por qué lesionan', tag: 'Prostaglandinas', kind: 'key', items: [
          { t: 'Todos los AINE, y la aspirina', d: 'Más riesgo en la úlcera gástrica',
            say: 'Todos los antiinflamatorios no esteroidales, y también la aspirina en dosis baja, inhiben las prostaglandinas que protegen la mucosa. Pueden dar dispepsia, úlcera, hemorragia y perforación, y el riesgo es mayor en la úlcera gástrica que en la duodenal.' },
          { t: 'Factores de riesgo', d: '65 años o más, úlcera previa, corticoides, anticoagulantes',
            say: 'El riesgo sube con la edad de sesenta y cinco años o más, el antecedente de úlcera o hemorragia, el uso de corticoides, anticoagulantes o antiagregantes, las dosis altas, usar dos antiinflamatorios juntos y tener Helicobacter pylori.' },
        ] },
        { title: 'Uso seguro', tag: 'Gastroprotección', kind: 'pharma', items: [
          { t: 'Menor dosis, menor tiempo, con comida', d: 'Paracetamol si el dolor es leve',
            say: 'Primero, la menor dosis por el menor tiempo posible y con comida. Y si el dolor es leve, mejor paracetamol.' },
          { t: 'AINE + IBP en el paciente de riesgo', d: 'No sirven anti-H2 ni sucralfato',
            say: 'Si el paciente de riesgo necesita el antiinflamatorio, se agrega un IBP. Ese es el fármaco de elección: los bloqueadores H dos y el sucralfato no protegen bien la mucosa gástrica. El misoprostol funciona, pero da diarrea y está contraindicado en el embarazo.' },
          { t: 'Riesgo alto: celecoxib + IBP', d: 'Antecedente de úlcera complicada',
            say: 'Con riesgo alto o una úlcera complicada previa, se prefiere un inhibidor selectivo de COX dos, el celecoxib, siempre junto con el IBP.' },
        ] },
        { title: 'Úlcera por AINE', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Suspender el AINE y dar IBP 8 semanas', d: 'Si es imprescindible: IBP de mantención',
            say: 'Si ya hay una úlcera por antiinflamatorios, se suspende el fármaco y se da IBP por ocho semanas. Si el antiinflamatorio es imprescindible, el IBP queda de mantención.' },
          { t: 'Erradicar antes del AINE crónico', d: 'Si hay antecedente de úlcera',
            say: 'Y antes de empezar un antiinflamatorio crónico en alguien con antecedente de úlcera, se erradica el Helicobacter pylori.' },
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
          say: 'Se maneja con IBP endovenoso y endoscopía de urgencia, que en el mismo acto detiene el sangrado con terapia hemostática. En esta imagen la flecha muestra un vaso visible en el fondo de la úlcera: es un hallazgo de alto riesgo de resangrado, y se trata en esa misma endoscopía.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-02/02_ulcera_duodenal_vaso_visible__harrison_p2430.jpg', label: 'Vaso visible', at: 'En esta imagen', credit: 'Harrison 21.ª ed., p. 2430' } },
        { show: ['per'], note: 'Clínica inconfundible',
          say: 'La segunda es la perforación, y su clínica es inconfundible: un dolor brusco, en puñalada, y un abdomen en tabla.' },
        { show: ['rx'], note: 'Buscar aire bajo el diafragma',
          say: 'El examen es la radiografía de tórax de pie, buscando aire bajo el diafragma: el neumoperitoneo. Mira esta radiografía: bajo el diafragma hay una delgada media luna de aire.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-02/03_neumoperitoneo-bajo-diafragma__cto-digestivo_p65.jpg', label: 'Neumoperitoneo', at: 'Mira esta radiografía', credit: 'Manual CTO Digestivo 14.ª ed., p. 65' } },
        { show: ['cir'], note: 'Al revés que en la hemorragia: aquí no se endoscopia',
          say: 'Y el tratamiento es cirugía de urgencia. Aquí la endoscopía está contraindicada: meter aire a presión en un estómago perforado solo empeora las cosas. Es exactamente al revés que en la hemorragia, y por eso el examen las pone juntas.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La bacteria y la úlcera',
      images: [
        { src: 'animaciones/gastro-02/A1_pylori_ulcera.mp4', label: 'Helicobacter pylori', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Test de ureasa',
          say: 'Helicobacter pylori sobrevive al ácido gracias a la ureasa, y daña la barrera de la mucosa hasta formar una úlcera. Da epigastralgia urente, peor en ayunas y que alivia al comer. Con signos de alarma se hace endoscopía, y en la biopsia se busca con el test de ureasa.' },
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
        { cells: ['AINE crónico de riesgo', 'Sí, si hubo úlcera; AINE + IBP', 'Sucralfato o anti-H2: no protegen'],
          say: 'Y el paciente de riesgo que necesita un antiinflamatorio crónico: se erradica si hubo úlcera y se agrega un IBP. Sucralfato o bloqueadores H dos no protegen la mucosa gástrica.' },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 160",
      "stem": "Mujer de 74 años con epigastralgia de 3 semanas de evolución, sin irradiación y sin baja de peso. Tiene antecedente de dispepsia tratada hace 10 años y usa antiinflamatorios no esteroidales en forma ocasional.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Endoscopía digestiva alta para descartar lesión orgánica"
        },
        {
          "letter": "B",
          "text": "Iniciar IBP y controlar en 4 semanas"
        },
        {
          "letter": "C",
          "text": "Test de Helicobacter pylori no invasivo y tratar si es positivo"
        },
        {
          "letter": "D",
          "text": "Radiografía de abdomen"
        },
        {
          "letter": "E",
          "text": "Ecografía abdominal"
        }
      ],
      "correct": "A",
      "explanation": "En Chile, por la alta incidencia de cáncer gástrico, la epigastralgia de más de 15 días en mayores de 40 años es criterio de endoscopía digestiva alta antes de cualquier tratamiento empírico. La prueba con IBP o el test and treat de H. pylori solo aplican a jóvenes sin signos de alarma.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Mujer de setenta y cuatro años con tres semanas de dolor epigástrico, sin irradiación y sin baja de peso. Tuvo una dispepsia tratada hace diez años y usa antiinflamatorios de vez en cuando.",
        "question": "¿Cuál es la conducta inicial más adecuada?",
        "options": "Las opciones: endoscopía digestiva alta, iniciar omeprazol y controlar, test de Helicobacter y tratar, radiografía de abdomen, o ecografía abdominal. Piénsalo.",
        "answer": "Es la A, endoscopía digestiva alta. En Chile, una epigastralgia de más de quince días en un mayor de cuarenta años es por sí sola criterio de endoscopía, por el riesgo de cáncer gástrico. Iniciar omeprazol y controlar es lo tentador, pero solo vale para un paciente joven y sin alarma."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.007 · Endoscopía digestiva alta y baja",
      "stem": "Hombre de 61 años consulta por melena. La endoscopía digestiva alta muestra una úlcera gástrica de 2 cm en la curvatura menor, sin sangrado activo. Las biopsias son negativas para neoplasia y el test de ureasa es positivo. Se indica erradicación de Helicobacter pylori y omeprazol.",
      "question": "¿Cuál es el seguimiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Endoscopía digestiva alta de control con nuevas biopsias a las 8 a 12 semanas"
        },
        {
          "letter": "B",
          "text": "Test de aire espirado como único control"
        },
        {
          "letter": "C",
          "text": "Alta sin controles, ya que la biopsia fue negativa"
        },
        {
          "letter": "D",
          "text": "Serología para Helicobacter pylori a las 4 semanas"
        },
        {
          "letter": "E",
          "text": "TAC de abdomen a los 6 meses"
        }
      ],
      "correct": "A",
      "explanation": "Toda úlcera gástrica se controla con endoscopía y nuevas biopsias a las 8–12 semanas hasta confirmar su cicatrización, porque una biopsia inicial negativa no descarta cáncer. Ese control permite además verificar la erradicación. La úlcera duodenal no complicada no requiere endoscopía de control.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de sesenta y un años con melena. La endoscopía muestra una úlcera gástrica de dos centímetros en la curvatura menor, sin sangrado activo. Las biopsias son negativas para cáncer y el test de ureasa es positivo, así que se indica erradicación y omeprazol.",
        "question": "¿Cuál es el seguimiento más adecuado?",
        "options": "Las opciones: endoscopía de control con nuevas biopsias, test de aire espirado solo, alta sin controles, serología para Helicobacter o tomografía a los seis meses. Piénsalo.",
        "answer": "Es la A. Toda úlcera gástrica se controla con una nueva endoscopía con biopsias hasta verla cicatrizada, porque una primera biopsia negativa no descarta un cáncer. El test de aire espirado confirma la erradicación, pero no muestra la úlcera: ese es el distractor."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.012 · Endoscopía digestiva alta",
      "stem": "Mujer de 48 años consulta por epigastralgia de 1 mes de evolución, sin respuesta a medidas generales. No tiene baja de peso, anemia ni vómitos. No usa antiinflamatorios.",
      "question": "¿Cuál es la conducta más adecuada según la guía GES de cáncer gástrico?",
      "options": [
        {
          "letter": "A",
          "text": "Endoscopía digestiva alta con test de ureasa"
        },
        {
          "letter": "B",
          "text": "Tratamiento empírico con omeprazol por 3 meses sin estudio"
        },
        {
          "letter": "C",
          "text": "Ecografía abdominal"
        },
        {
          "letter": "D",
          "text": "Serología para Helicobacter pylori y tratamiento si es positiva"
        },
        {
          "letter": "E",
          "text": "Radiografía esófago-estómago-duodeno con bario"
        }
      ],
      "correct": "A",
      "explanation": "En Chile, por la alta incidencia de cáncer gástrico, la guía GES indica endoscopía digestiva alta en personas de 40 años o más con epigastralgia de más de 15 días, aun sin síntomas de alarma, con biopsias y test de ureasa. Probar y tratar Helicobacter pylori sin endoscopía se reserva para menores de 40 años sin signos de alarma.",
      "say": {
        "stem": "Mujer de cuarenta y ocho años con un mes de epigastralgia que no mejora con medidas generales, sin baja de peso, anemia ni vómitos, y que no usa antiinflamatorios.",
        "question": "¿Cuál es la conducta más adecuada según la guía GES de cáncer gástrico?",
        "options": "Las opciones: endoscopía alta con test de ureasa, omeprazol empírico por tres meses, ecografía abdominal, serología para Helicobacter y tratar o radiografía con bario. Piénsalo.",
        "answer": "Es la A. En Chile, toda persona de cuarenta años o más con epigastralgia de más de quince días va a endoscopía, aunque no tenga signos de alarma. Probar y tratar Helicobacter tienta porque se usa en otros países, pero aquí se reserva para menores de cuarenta."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 161",
      "stem": "Una paciente de 65 años, con antecedente de úlcera duodenal tratada hace 20 años y de infarto agudo al miocardio hace un año, usa aspirina 100 mg al día desde entonces. Por un esguince de tobillo se indica diclofenaco 100 mg cada 12 horas. En los días siguientes evoluciona con malestar general progresivo y disnea. Al examen presenta palidez mucocutánea, FC 110/min, PA 110/66 mmHg, examen pulmonar normal y solo taquicardia al examen cardíaco. Hemograma: hemoglobina 7,5 g/dL, hematocrito 23%, VCM 58 fL, plaquetas 370.000/mm3, ferritina 12 ng/mL. El ECG muestra taquicardia sinusal, sin signos actuales de isquemia.",
      "question": "¿Cuál es el examen para proseguir el estudio etiológico?",
      "options": [
        {
          "letter": "A",
          "text": "Prueba de antígeno en deposiciones para Helicobacter pylori"
        },
        {
          "letter": "B",
          "text": "Niveles de vitamina B12"
        },
        {
          "letter": "C",
          "text": "Biopsia de médula ósea"
        },
        {
          "letter": "D",
          "text": "Endoscopía digestiva alta"
        },
        {
          "letter": "E",
          "text": "Test de sangre oculta en deposiciones"
        }
      ],
      "correct": "D",
      "explanation": "Anemia ferropénica en una paciente que usa aspirina más un AINE y tiene antecedente de úlcera sugiere pérdida digestiva alta por lesión péptica inducida por AINE. La endoscopía digestiva alta diagnostica, permite terapia y en ella se biopsia para Helicobacter pylori. El antígeno fecal no localiza la lesión y la sangre oculta no cambia la conducta.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Mujer de sesenta y cinco años, con aspirina y antecedente de úlcera, a quien se agrega diclofenaco y desarrolla anemia microcítica con ferritina baja.",
        "question": "¿Cuál es el examen para seguir el estudio?",
        "options": "Las opciones: antígeno de Helicobacter en deposiciones, vitamina be doce, biopsia de médula, endoscopía digestiva alta, o sangre oculta. Piénsalo.",
        "answer": "Es la D. La endoscopía alta, porque busca la úlcera por antiinflamatorios y permite tratarla y biopsiar. La sangre oculta tienta, pero ya sabemos que pierde sangre y no localiza la lesión."
      }
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
