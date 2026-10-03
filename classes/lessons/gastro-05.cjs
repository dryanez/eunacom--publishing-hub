// Clase 1.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Del síntoma a la endoscopía, y qué decide el pronóstico',
      say: 'Bienvenidos. Hoy vemos cáncer de esófago y cáncer gástrico. Es el cierre lógico de las clases anteriores: el Barrett del reflujo, la disfagia lógica y la epigastralgia de la úlcera terminan, en el peor escenario, aquí. Y el examen pregunta casi siempre dos cosas: cuándo endoscopiar, y qué define el pronóstico.',
    },

    {
      type: 'points',
      kicker: 'Lo común',
      title: 'Lo que comparten los cánceres digestivos altos',
      cards: [
        { title: 'Clínica compartida', tag: 'Síntomas tardíos', kind: 'alert', items: [
          { t: 'Baja de peso y anorexia', d: 'El tumor ya suele estar avanzado',
            say: 'Partamos por lo que tienen en común. Los dos dan baja de peso y anorexia, y el problema es que lo hacen tarde: cuando aparecen los síntomas, el tumor suele estar avanzado.' },
          { t: 'Hemorragia digestiva', d: 'Con anemia ferropénica',
            say: 'También dan hemorragia digestiva, muchas veces silenciosa, que se manifiesta como una anemia ferropénica. Una anemia ferropénica en un adulto sin explicación siempre te obliga a mirar el tubo digestivo.' },
        ] },
        { title: 'Estudio', tag: 'Siempre igual', kind: 'key', items: [
          { t: 'Diagnóstico: endoscopía + biopsia', d: 'Endoscopía digestiva alta',
            say: 'El diagnóstico es siempre el mismo: endoscopía digestiva alta con biopsia. Sin biopsia no hay diagnóstico de cáncer.' },
          { t: 'Etapificación: TAC', d: 'Tórax, abdomen y pelvis',
            say: 'Y una vez confirmado, se etapifica con un TAC de tórax, abdomen y pelvis. Fíjate en el orden: el TAC va después, no antes.' },
        ] },
        { title: 'Pronóstico y tratamiento', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Invasión transmural', d: 'No las adenopatías ni las metástasis',
            say: 'Y ahora el dato que más se pregunta. El principal factor pronóstico es la invasión transmural, es decir, qué tan profundo penetra el tumor en la pared. No son las adenopatías ni las metástasis. Es la profundidad.' },
          { t: 'Curativo: solo la cirugía', d: 'Quimio y radioterapia: adyuvantes',
            say: 'El único tratamiento curativo es la cirugía. La quimioterapia y la radioterapia acompañan, pero son adyuvantes.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cáncer de esófago',
      title: 'Dos tipos, dos historias',
      nodes: [
        { id: 'tab', col: 0, row: 0, k: 'cause', t: 'Tabaco y alcohol', s: 'Irritan el epitelio escamoso' },
        { id: 'esc', col: 1, row: 0, k: 'risk', t: 'Carcinoma escamoso', s: 'Tercio medio' },
        { id: 'erg', col: 0, row: 2, k: 'cause', t: 'ERGE crónica y Barrett', s: 'Ácido por años' },
        { id: 'ade', col: 1, row: 2, k: 'risk', t: 'Adenocarcinoma', s: 'Tercio distal y cardias' },
        { id: 'cli', col: 2, row: 1, k: 'effect', t: 'Disfagia lógica + baja de peso', s: 'Sólidos, luego líquidos' },
        { id: 'dx', col: 3, row: 1, k: 'q', t: 'Endoscopía + biopsia', s: 'Etapificar: TAC + endosonografía' },
        { id: 'tx', col: 4, row: 1, k: 'good', t: 'Esofagectomía', s: 'Radioterapia, a menudo neoadyuvante' },
      ],
      edges: [
        { from: 'tab', to: 'esc' }, { from: 'erg', to: 'ade' },
        { from: 'esc', to: 'cli' }, { from: 'ade', to: 'cli' },
        { from: 'cli', to: 'dx' }, { from: 'dx', to: 'tx' },
      ],
      steps: [
        { show: ['tab', 'esc'], note: 'Escamoso: tabaco, alcohol, tercio medio',
          say: 'Vamos al esófago. Hay dos tipos, y cada uno tiene su propia historia. El primero es el carcinoma escamoso: su causa es el tabaco y el alcohol, y se ubica en el tercio medio.' },
        { show: ['erg', 'ade'], note: 'Adenocarcinoma: reflujo y Barrett, tercio distal',
          say: 'El segundo es el adenocarcinoma, y aquí se cierra el círculo de la primera clase: nace del reflujo crónico y del esófago de Barrett, por eso se ubica en el tercio distal. El cáncer del cardias se maneja igual que este.' },
        { show: ['cli'], note: 'Se obstruye de a poco: primero sólidos',
          say: '¿Cómo se presenta? Con disfagia lógica progresiva y baja de peso. Como vimos en la clase de disfagia, el tumor va cerrando el lumen de a poco: primero cuestan los sólidos y después los líquidos.' },
        { show: ['dx'], note: 'La endosonografía mide la invasión de la pared',
          say: 'El diagnóstico es endoscopía con biopsia. Y para etapificar, además del TAC, se usa la endosonografía transesofágica. ¿Por qué? Porque mide justamente la invasión de la pared, que es lo que define el pronóstico.' },
        { show: ['tx'], note: 'La radioterapia tiene un rol destacado',
          say: 'El tratamiento curativo es la cirugía, la esofagectomía. Pero a diferencia del estómago, aquí la radioterapia tiene un rol destacado, y con frecuencia se da antes de operar, como neoadyuvancia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer gástrico',
      title: 'Quién lo tiene y cómo llega',
      cards: [
        { title: 'Epidemiología y causa', tag: 'Chile', kind: 'key', items: [
          { t: '1ª causa de muerte por cáncer en hombres', d: '2ª en mujeres, tras el de mama',
            say: 'Pasemos al estómago. En Chile, el cáncer gástrico es la primera causa de muerte por cáncer en hombres, y la segunda en mujeres, después del de mama.' },
          { t: 'Causa principal: H. pylori', d: 'Atrofia, metaplasia, familia, ahumados y sal',
            say: 'La causa principal es el Helicobacter pylori, el mismo de la clase de úlcera. Y los factores de riesgo son la gastritis atrófica, la metaplasia intestinal, el antecedente familiar y una dieta rica en ahumados y sal.' },
        ] },
        { title: 'Formas de presentación', tag: 'Obligan a endoscopiar', kind: 'alert', items: [
          { t: 'Epigastralgia urente', d: 'Idéntica a la úlcera: siempre endoscopiar',
            say: 'La primera forma de presentación es la más traicionera: una epigastralgia urente, idéntica a la de la úlcera. Por eso la regla que vimos: epigastralgia en un mayor de cuarenta años, endoscopía siempre.' },
          { t: 'Síndrome pilórico', d: 'Vómitos de retención, en aumento',
            say: 'La segunda es el síndrome pilórico: vómitos posprandiales de retención, de comida ingerida horas antes, cada vez más frecuentes. En un adulto, eso es cáncer gástrico hasta demostrar lo contrario.' },
          { t: 'Masa o ganglio de Virchow', d: 'Adenopatía supraclavicular izquierda',
            say: 'Y las dos últimas ya hablan de enfermedad avanzada: una masa epigástrica palpable, o una adenopatía supraclavicular izquierda, el ganglio de Virchow.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación y tratamiento',
      title: 'Incipiente vs avanzado: manda la muscular propia',
      nodes: [
        { id: 'ca', col: 0, row: 1, k: 'start', t: 'Cáncer gástrico', s: '¿Hasta dónde penetra?' },
        { id: 'inc', col: 1, row: 0, k: 'good', t: 'Incipiente', s: 'Mucosa y submucosa' },
        { id: 'res', col: 2, row: 0, k: 'good', t: 'Resección', s: 'Endoscópica o gastrectomía' },
        { id: 'ava', col: 1, row: 2, k: 'risk', t: 'Avanzado', s: 'Muscular propia o más allá' },
        { id: 'gas', col: 2, row: 2, k: 'alert', t: 'Gastrectomía + D2', s: 'Más quimioterapia perioperatoria' },
        { id: 'ges', col: 3, row: 1, k: 'q', t: 'Endoscopía GES ≥ 40 años', s: 'Busca más cánceres incipientes' },
      ],
      edges: [
        { from: 'ca', to: 'inc', label: 'no pasa la submucosa' }, { from: 'inc', to: 'res' },
        { from: 'ca', to: 'ava', label: 'llega a la muscular' }, { from: 'ava', to: 'gas' },
        { from: 'ges', to: 'inc', label: 'objetivo' },
      ],
      steps: [
        { show: ['ca'], note: 'La clasificación sigue la profundidad',
          say: 'Y ahora la clasificación, que es la aplicación directa del factor pronóstico. La pregunta es una sola: hasta dónde penetra el tumor.' },
        { show: ['inc'], note: 'Independiente de las adenopatías',
          say: 'Si está limitado a la mucosa y la submucosa, es un cáncer incipiente, y eso es independiente de si tiene adenopatías o no. Ojo con esa trampa. Es el único de buen pronóstico.' },
        { show: ['res'], note: 'Endoscópica en casos seleccionados',
          say: 'Se trata con resección: endoscópica en casos seleccionados, o gastrectomía.' },
        { show: ['ava'], note: 'Compromete la muscular propia',
          say: 'Si compromete la muscular propia o va más allá, es un cáncer avanzado.' },
        { show: ['gas'], note: 'Subtotal o total',
          say: 'Aquí el tratamiento es una gastrectomía, subtotal o total, con linfadenectomía D dos, más quimioterapia perioperatoria.' },
        { show: ['ges'], note: 'Por eso existe la garantía GES',
          say: 'Y esto explica la garantía GES. Si solo el incipiente tiene buen pronóstico, y el cáncer gástrico da síntomas tarde, la única forma de ganar es buscarlo antes. Por eso Chile garantiza endoscopía a todo dispéptico de cuarenta años o más: para pillar más cánceres incipientes.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Presentaciones que obligan a un examen',
      head: ['Presentación', 'Sospecha', 'Examen'],
      rows: [
        { cells: ['Epigastralgia ≥ 40 años o con alarma', 'Úlcera o cáncer gástrico', 'Endoscopía con biopsias'],
          say: 'Repasemos en una tabla. Epigastralgia en un mayor de cuarenta, o con cualquier signo de alarma: puede ser una úlcera o un cáncer, y se pide endoscopía con biopsias.' },
        { cells: ['Vómitos de retención, en aumento', 'Cáncer gástrico con síndrome pilórico', 'Endoscopía digestiva alta'],
          say: 'Vómitos de retención que van en aumento: síndrome pilórico por cáncer gástrico, y también endoscopía.' },
        { cells: ['Baja de peso + epigastralgia', 'Cáncer gástrico', 'Endoscopía digestiva alta'],
          say: 'Baja de peso con epigastralgia: cáncer gástrico, endoscopía.' },
        { cells: ['Baja de peso + epigastralgia + ictericia', 'Cáncer de páncreas', 'TAC de abdomen con contraste'],
          say: 'Pero atención a esta fila, porque es la trampa. Si a la baja de peso y la epigastralgia se suma ictericia, la sospecha cambia a cáncer de páncreas, y el examen ya no es la endoscopía: es un TAC de abdomen con contraste.' },
        { cells: ['Disfagia lógica + baja de peso', 'Cáncer de esófago', 'Endoscopía con biopsia'],
          say: 'Y disfagia lógica progresiva con baja de peso: cáncer de esófago, endoscopía con biopsia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con 3 meses de plenitud posprandial y vómitos de alimentos ingeridos horas antes, cada vez más frecuentes, y baja de 9 kg. Al examen: chapoteo gástrico de ayuno y una pequeña adenopatía supraclavicular izquierda.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Úlcera duodenal no complicada' },
        { letter: 'B', text: 'Cáncer gástrico avanzado con obstrucción de la salida gástrica' },
        { letter: 'C', text: 'Acalasia' },
        { letter: 'D', text: 'Dispepsia funcional' },
        { letter: 'E', text: 'Cáncer de páncreas' },
      ],
      correct: 'B',
      explanation: 'Síndrome pilórico (vómitos de retención en aumento) con baja de peso y ganglio de Virchow: cáncer gástrico avanzado hasta demostrar lo contrario. Se confirma con endoscopía y biopsias y se etapifica con TAC. La adenopatía supraclavicular indica enfermedad metastásica y contraindica la cirugía curativa.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y ocho años con tres meses de plenitud después de comer y vómitos de alimentos ingeridos horas antes, cada vez más frecuentes, y una baja de nueve kilos. Al examen tiene chapoteo gástrico en ayunas y una pequeña adenopatía supraclavicular izquierda.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: úlcera duodenal no complicada, cáncer gástrico avanzado con obstrucción de la salida, acalasia, dispepsia funcional, o cáncer de páncreas. Piénsalo.',
        answer: 'Es la B. Vómitos de retención en aumento son un síndrome pilórico, y en un adulto con baja de peso eso es cáncer gástrico hasta demostrar lo contrario. El ganglio de Virchow además te dice que hay metástasis, y eso contraindica la cirugía con intención curativa. La acalasia tienta porque hay regurgitación, pero es de comida no digerida que nunca llegó al estómago, y aquí hay chapoteo gástrico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 121',
      stem: 'Un paciente de 55 años presenta pirosis, mayor postprandial, que inició hace 2 meses y ha ido en aumento. Además tiene baja de 4 kg de peso en ese periodo, dolor abdominal que aumenta al palpar el epigastrio, y en el último tiempo se han agregado vómitos postprandiales.',
      question: '¿Cuál es el examen que debe solicitarse para estudiar a este paciente?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta' },
        { letter: 'B', text: 'pH-metría de 24 horas' },
        { letter: 'C', text: 'TAC de abdomen' },
        { letter: 'D', text: 'Ecografía abdominal' },
        { letter: 'E', text: 'Marcadores tumorales' },
      ],
      correct: 'A',
      explanation: 'Baja de peso, dolor epigástrico y vómitos postprandiales en dos meses es un cuadro sospechoso de cáncer gástrico. Lo primero, siempre, es confirmarlo con endoscopía digestiva alta y biopsia; el TAC y los marcadores vienen después, si el diagnóstico se confirma.',
      say: {
        stem: 'Vamos con una pregunta real, de julio de dos mil quince. Paciente de cincuenta y cinco años con pirosis postprandial que empezó hace dos meses y ha ido en aumento, baja de cuatro kilos, dolor que aumenta al palpar el epigastrio, y en el último tiempo se agregaron vómitos después de comer.',
        question: '¿Cuál es el examen que debe solicitarse para estudiar a este paciente?',
        options: 'Las alternativas: endoscopía digestiva alta, pH-metría de veinticuatro horas, TAC de abdomen, ecografía abdominal, o marcadores tumorales. Piénsalo.',
        answer: 'Es la A, endoscopía digestiva alta. Baja de peso, dolor epigástrico y vómitos postprandiales en dos meses son un cuadro sospechoso de cáncer gástrico, y lo primero, siempre, es confirmarlo con endoscopía y biopsia. El TAC y los marcadores tumorales vienen después, una vez que ya tienes el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 91',
      stem: 'Un hombre de 57 años presenta epigastralgia, inapetencia y baja de peso, de 2 meses de evolución, a lo cual se agrega un episodio de melena, por el que consulta.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer gástrico' },
        { letter: 'B', text: 'Úlcera gastroduodenal' },
        { letter: 'C', text: 'Cáncer de esófago' },
        { letter: 'D', text: 'Linfoma gástrico asociado a mucosa' },
        { letter: 'E', text: 'Gastritis erosiva' },
      ],
      correct: 'A',
      explanation: 'Epigastralgia, inapetencia y baja de peso, con melena que confirma una hemorragia digestiva alta, es el cuadro clásico del cáncer gástrico. La úlcera daría dolor urente pero sin baja de peso marcada, y el cáncer de esófago daría disfagia, más que inapetencia.',
      say: {
        stem: 'Otra pregunta real, de julio de dos mil diecinueve. Hombre de cincuenta y siete años con epigastralgia, inapetencia y baja de peso de dos meses, que consulta porque además tuvo un episodio de melena.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: cáncer gástrico, úlcera gastroduodenal, cáncer de esófago, linfoma gástrico, o gastritis erosiva. Piénsalo.',
        answer: 'Es la A, cáncer gástrico. Epigastralgia, inapetencia y baja de peso, más una melena que confirma la hemorragia digestiva, es el cuadro clásico. La úlcera tienta porque también sangra, pero da un dolor urente sin esta baja de peso tan marcada, y el cáncer de esófago daría disfagia, no tanto inapetencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 133',
      stem: 'Paciente de 65 años, con antecedente de tabaquismo crónico de 30 paquetes-año, consulta por 3 meses de compromiso del estado general, pirosis y baja de 10 kg de peso. Al examen físico se aprecia decaído, deshidratado y muy enflaquecido, con leve edema simétrico en las extremidades inferiores.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer pulmonar' },
        { letter: 'B', text: 'Cáncer gástrico' },
        { letter: 'C', text: 'Cáncer de esófago' },
        { letter: 'D', text: 'Cáncer de páncreas' },
        { letter: 'E', text: 'Cáncer de duodeno' },
      ],
      correct: 'B',
      explanation: 'La pirosis y la gran baja de peso orientan a estómago; no hay disfagia, que es lo clásico del cáncer de esófago. El edema de extremidades inferiores se explica por la desnutrición proteica de un cáncer avanzado, no por el tabaquismo.',
      say: {
        stem: 'Una pregunta real más, de julio de dos mil trece. Paciente de sesenta y cinco años, fumador crónico de treinta paquetes año, con tres meses de compromiso del estado general, pirosis y baja de diez kilos. Al examen está decaído, deshidratado, muy enflaquecido, con un leve edema simétrico en las piernas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: cáncer pulmonar, cáncer gástrico, cáncer de esófago, cáncer de páncreas, o cáncer de duodeno. Piénsalo.',
        answer: 'Es la B, cáncer gástrico. El tabaquismo tienta a pensar en el esófago, pero ahí falta la disfagia, que es la clave de ese cuadro. La pirosis y la baja de peso tan grande orientan al estómago, y el edema de las piernas es por la desnutrición proteica del cáncer avanzado, no por otra causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 160',
      stem: 'Mujer de 74 años con epigastralgia de 3 semanas de evolución, sin irradiación y sin baja de peso. Tiene antecedente de dispepsia tratada hace 10 años, y usa antiinflamatorios no esteroidales de forma ocasional.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta para descartar lesión orgánica, por criterio de alarma según la edad' },
        { letter: 'B', text: 'Iniciar inhibidor de la bomba de protones y controlar en 4 semanas' },
        { letter: 'C', text: 'Test no invasivo de Helicobacter pylori y tratar si es positivo' },
        { letter: 'D', text: 'Radiografía de abdomen' },
        { letter: 'E', text: 'Ecografía abdominal' },
      ],
      correct: 'A',
      explanation: 'La dispepsia en un mayor de 60 años es, por sí sola, un signo de alarma por la edad: obliga a endoscopía digestiva alta para descartar cáncer gástrico, úlcera péptica u otra lesión orgánica, sin ensayar antes tratamiento empírico. No es necesario que además haya baja de peso u otro signo de alarma.',
      say: {
        stem: 'Y la última pregunta real de esta clase, de julio de dos mil veinticinco. Mujer de setenta y cuatro años con epigastralgia de tres semanas, sin irradiación y sin baja de peso. Tuvo dispepsia hace diez años, y usa antiinflamatorios de forma ocasional.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las alternativas: endoscopía por criterio de alarma según la edad, iniciar inhibidor de la bomba de protones y controlar en un mes, test no invasivo de Helicobacter y tratar si es positivo, radiografía de abdomen, o ecografía abdominal. Piénsalo.',
        answer: 'Es la A, endoscopía digestiva alta. Fíjate que no hay baja de peso ni otro signo de alarma clásico: la edad, sobre sesenta años, ya es un criterio de alarma por sí solo. Por eso no corresponde tratar de forma empírica con inhibidor de la bomba ni empezar por el Helicobacter: hay que descartar cáncer gástrico y úlcera con endoscopía primero.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Endoscopía', kind: 'key', items: [
          { t: 'Epigastralgia ≥ 40 años: endoscopía', d: 'Con biopsias, garantía GES',
            say: 'Cerremos con las reglas de oro. Epigastralgia en un mayor de cuarenta, o con alarma: endoscopía con biopsias, garantía GES.' },
          { t: 'Síndrome pilórico = cáncer', d: 'Hasta demostrar lo contrario',
            say: 'Vómitos de retención en aumento en un adulto: cáncer gástrico hasta demostrar lo contrario.' },
          { t: 'Con ictericia: TAC', d: 'Pensar en páncreas',
            say: 'Si se agrega ictericia, piensa en páncreas y pide TAC.' },
        ] },
        { title: 'Pronóstico y tratamiento', tag: 'Profundidad', kind: 'pharma', items: [
          { t: 'Manda la invasión transmural', d: 'No las adenopatías',
            say: 'El pronóstico lo decide la invasión de la pared, no las adenopatías.' },
          { t: 'Incipiente: resecar', d: 'Avanzado: gastrectomía D2 + quimio',
            say: 'El incipiente se reseca; el avanzado lleva gastrectomía con linfadenectomía D dos y quimioterapia.' },
          { t: 'Esófago: escamoso vs adenocarcinoma', d: 'Radioterapia con rol destacado',
            say: 'Y en el esófago, escamoso por tabaco y alcohol, adenocarcinoma por reflujo y Barrett. Si te llevas una sola idea de hoy: el pronóstico lo decide la profundidad, y por eso se endoscopia temprano. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cáncer digestivo alto: del síntoma al examen',
    root: N('start', 'Síntoma digestivo alto', 'Baja de peso · anemia · anorexia',
      'Paciente con baja de peso, anemia o anorexia. El síntoma que predomina nos dice qué cáncer buscar y con qué examen.',
      ['', N('q', '¿Qué predomina?', 'El síntoma guía el examen',
        '¿Qué predomina en el cuadro?',
        ['Disfagia lógica', N('alert', 'EDA + biopsia', 'Cáncer de esófago',
          'Disfagia lógica progresiva con baja de peso: cáncer de esófago hasta demostrar lo contrario. Endoscopía con biopsia.',
          ['', N('refer', 'TAC + endosonografía', 'Mide la invasión de la pared',
            'Se etapifica con TAC y endosonografía, porque el principal factor pronóstico es la invasión transmural. El tratamiento curativo es la cirugía, con rol importante de la radioterapia.')])],
        ['Epigastralgia ≥ 40 o vómitos', N('alert', 'EDA + biopsias', 'Cáncer gástrico (GES)',
          'Epigastralgia en mayor de cuarenta, o vómitos de retención en aumento: cáncer gástrico. Endoscopía con biopsias, garantía GES.',
          ['', N('q', '¿Invade la muscular propia?', 'Incipiente vs avanzado',
            '¿El tumor invade la muscular propia?',
            ['NO', N('ok', 'Incipiente: resección', 'Endoscópica o gastrectomía',
              'Si está limitado a mucosa y submucosa es incipiente, con buen pronóstico: resección endoscópica en casos seleccionados, o gastrectomía.')],
            ['SÍ', N('refer', 'Gastrectomía + D2 + QT', 'Cáncer avanzado',
              'Si compromete la muscular propia es avanzado: gastrectomía con linfadenectomía D dos y quimioterapia perioperatoria.')])])],
        ['Ictericia', N('do', 'TAC de abdomen con contraste', 'Sospecha de cáncer de páncreas',
          'Si a la baja de peso y la epigastralgia se suma ictericia, la sospecha cambia a cáncer de páncreas. Ahí el examen es TAC de abdomen con contraste, no endoscopía.')])]),
  },
};
