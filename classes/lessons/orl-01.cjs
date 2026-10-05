// Clase 14.1 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-01). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se ve el tímpano, qué antibiótico se da y qué hacer cuando el niño no mejora a las 72 horas',
      say: 'Bienvenidos. Hoy vemos la otitis media aguda, el primer tema de otorrinolaringología y uno de los más rentables del examen: se pregunta casi siempre, y siempre con las mismas tres ideas. Cómo se diagnostica con la otoscopía, qué dosis de amoxicilina se usa, y qué haces cuando el niño sigue con fiebre a los tres días. Si dominas esas tres, esta clase te regala puntos. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Cómo se llega a una otitis media aguda?',
      nodes: [
        { id: 'vir', col: 0, row: 1, k: 'cause', t: 'Resfrío viral', s: 'Rinovirus, VRS, influenza' },
        { id: 'eus', col: 1, row: 1, k: 'mech', t: 'La trompa de Eustaquio se tapa', s: 'Disfunción tubárica' },
        { id: 'pre', col: 2, row: 0, k: 'mech', t: 'Presión negativa en el oído medio', s: 'Sale trasudado seroso' },
        { id: 'bac', col: 2, row: 2, k: 'risk', t: 'Bacterias suben desde la nariz', s: 'Colonización retrógrada' },
        { id: 'oma', col: 3, row: 1, k: 'alert', t: 'Otitis media aguda', s: 'Pus a presión detrás del tímpano' },
        { id: 'dol', col: 4, row: 1, k: 'effect', t: 'Otalgia, fiebre, llanto', s: 'El tímpano se abomba' },
      ],
      edges: [
        { from: 'vir', to: 'eus' },
        { from: 'eus', to: 'pre' },
        { from: 'eus', to: 'bac' },
        { from: 'pre', to: 'oma' },
        { from: 'bac', to: 'oma' },
        { from: 'oma', to: 'dol' },
      ],
      steps: [
        { show: ['vir'], note: 'Casi siempre parte con un resfrío',
          say: 'Empecemos por el mecanismo. Casi toda otitis media aguda parte con un resfrío: una infección viral de la vía respiratoria alta, por rinovirus, virus sincicial, influenza o adenovirus. Por eso el niño llega a urgencia con un resfrío de cinco días y, de pronto, empeora.' },
        { show: ['eus'], note: 'El virus inflama la trompa y la obstruye',
          say: 'El virus inflama la mucosa y tapa la trompa de Eustaquio, que es el tubito que comunica el oído medio con la nariz. Y fíjate que en el niño es más corta y más horizontal, por eso esta enfermedad es tan de la infancia.' },
        { show: ['pre', 'bac'], note: 'Oído medio cerrado: líquido y gérmenes',
          say: 'Con la trompa cerrada, el aire del oído medio se absorbe y queda una presión negativa. Esa presión hace trasudar líquido. Y por la misma vía, desde la nasofaringe, suben las bacterias y colonizan ese líquido que quedó atrapado.' },
        { show: ['oma', 'dol'], note: 'Pus a presión: dolor y abombamiento',
          say: 'El resultado es pus acumulado a presión detrás del tímpano. Esa presión explica toda la clínica: otalgia intensa, fiebre, y en el lactante, tirones de oreja y llanto inconsolable. Y también explica el signo estrella, que veremos en un minuto: el tímpano abombado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología',
      title: 'Los tres gérmenes de la otitis media aguda',
      cards: [
        { title: 'Neumococo', tag: 'El más frecuente', kind: 'key', items: [
          { t: 'Streptococcus pneumoniae', d: '35 a 40% de los casos',
            say: 'Son tres gérmenes. El primero y más frecuente es el neumococo, entre el treinta y cinco y el cuarenta por ciento. Es el más agresivo, y es la respuesta de la pregunta clásica sobre el agente etiológico más frecuente.' },
        ] },
        { title: 'Los productores de betalactamasas', tag: 'Explican la falla', kind: 'alert', items: [
          { t: 'Haemophilus influenzae', d: '30 a 35%; hasta 40% produce betalactamasas',
            say: 'El segundo es Haemophilus influenzae, entre el treinta y el treinta y cinco por ciento. Una parte importante, entre treinta y cuarenta por ciento, produce betalactamasas. Desde que el calendario de vacunas incluyó el neumococo, su proporción relativa ha ido subiendo.' },
          { t: 'Moraxella catarrhalis', d: '10 a 15%; más del 90% produce betalactamasas',
            say: 'Y el tercero es Moraxella, con diez a quince por ciento, que casi siempre produce betalactamasas. Guarda esto: estos dos gérmenes son la razón por la que a veces la amoxicilina sola no alcanza.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Tres criterios para diagnosticar una OMA',
      cards: [
        { title: 'Los tres criterios', tag: 'Los tres juntos', kind: 'criteria', items: [
          { t: 'Inicio agudo de síntomas', d: 'Otalgia, fiebre, llanto, tirones de oreja',
            say: 'El diagnóstico es clínico y se hace con la otoscopía. Necesitas tres criterios. El primero: inicio agudo y reciente de síntomas, es decir otalgia, fiebre, y en el lactante, tirones de oreja o llanto inconsolable.' },
          { t: 'Efusión en el oído medio', d: 'Abombamiento, nivel hidroaéreo o otorrea',
            say: 'El segundo: signos de líquido en el oído medio. Un tímpano abombado, un nivel hidroaéreo, o una perforación con otorrea aguda.' },
          { t: 'Inflamación del tímpano', d: 'Eritema, opacidad e hipomovilidad',
            say: 'Y el tercero: signos de inflamación. Tímpano rojo, opaco, y con poca o nula movilidad cuando usas la otoscopía neumática.' },
        ] },
        { title: 'El signo clave', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Abombamiento del tímpano', d: 'El signo más específico de OMA supurada',
            say: 'De todos, el abombamiento es el signo más específico. Si el tímpano está abombado, es una otitis media aguda.' },
          { t: 'Eritema aislado no basta', d: 'Puede ser llanto o fiebre viral',
            say: 'En cambio, un tímpano solo rojo, sin abombamiento ni hipomovilidad, puede ser simplemente por el llanto o por la fiebre. Eso no justifica un antibiótico, y es una trampa clásica.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'El tímpano en la otoscopía',
      images: [
        { src: 'biblioteca/17_otorrino/orl-01/01_timpano-normal__bates_p317.jpg', label: 'Tímpano normal derecho: rosado grisáceo, con el martillo visible', credit: 'Bates, Guía de exploración física, Tabla 7-20' },
        { src: 'biblioteca/17_otorrino/orl-01/02_otitis-media-aguda-timpano-abombado__bates_p318.jpg', label: 'Otitis media aguda: tímpano rojo, abombado, sin referencias', credit: 'Bates, Guía de exploración física, Tabla 7-20' },
      ],
      steps: [
        { note: 'Tímpano normal: se ve el martillo',
          say: 'Primero, para comparar, un tímpano normal: color rosado grisáceo, y se reconoce el mango del martillo. Quédate con esta imagen, porque la otitis media aguda se define justamente por lo que se pierde.' },
        { note: 'OMA: rojo, abombado, sin referencias',
          say: 'Y esto es una otitis media aguda. Mira cómo el tímpano se ve rojo, abombado hacia el observador, y casi no se distinguen las referencias, como el martillo. Eso es lo que debes reconocer de un vistazo en una pregunta del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Primera línea: amoxicilina en dosis altas',
      cards: [
        { title: 'Amoxicilina oral', tag: 'Primera línea indiscutida', kind: 'pharma', items: [
          { t: 'Amoxicilina 80 a 90 mg/kg/día', d: 'Dividida cada 12 horas; máximo 3 g al día',
            say: 'Pasemos al tratamiento. El antibiótico de primera línea, en Chile y en las guías internacionales, es amoxicilina oral en dosis altas: ochenta a noventa miligramos por kilo al día, dividida cada doce horas, con un máximo de tres gramos al día.' },
          { t: 'La dosis alta es obligatoria', d: 'Supera al neumococo menos sensible',
            say: 'Y la dosis alta no es un capricho. Hay neumococos con sensibilidad disminuida a la penicilina, y solo con esta dosis se superan. Si en una pregunta aparece una dosis baja, es la trampa.' },
        ] },
        { title: 'Cuánto tiempo', tag: 'Depende de la edad', kind: 'criteria', items: [
          { t: '10 días si < 2 años o severa', d: 'Cuadros leves en mayores: 5 a 7 días',
            say: 'La duración es de siete a diez días. Diez días en menores de dos años o en una otitis severa, y cinco a siete días en mayores de dos años con un cuadro leve.' },
        ] },
        { title: 'Lo que sí y lo que no', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Siempre analgesia reglada', d: 'Paracetamol o ibuprofeno',
            say: 'Además del antibiótico, siempre analgesia reglada, con paracetamol o ibuprofeno, porque lo que más duele es la presión.' },
          { t: 'Sin antihistamínicos ni corticoides', d: 'Sin descongestionantes tampoco',
            say: 'Y nada de antihistamínicos, descongestionantes ni corticoides orales: no sirven en la otitis media aguda no complicada, y están formalmente desaconsejados.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escalamiento',
      title: 'Si no mejora, o si es alérgico: cambiar el esquema',
      nodes: [
        { id: 'ami', col: 0, row: 1, k: 'start', t: 'Amoxicilina a dosis alta', s: 'Primera línea' },
        { id: 'fal', col: 1, row: 0, k: 'alert', t: 'Falla a las 48 a 72 horas', s: 'Persiste fiebre y otalgia' },
        { id: 'cla', col: 2, row: 0, k: 'good', t: 'Amoxicilina + ácido clavulánico', s: 'Misma dosis, relación 14 a 1' },
        { id: 'ale', col: 1, row: 1, k: 'q', t: '¿Alergia a penicilina?', s: 'Tipo de reacción' },
        { id: 'cef', col: 2, row: 1, k: 'refer', t: 'Cefuroxima', s: 'Si no fue anafilaxia' },
        { id: 'mac', col: 2, row: 2, k: 'refer', t: 'Azitromicina', s: 'Si fue anafilaxia' },
        { id: 'vom', col: 1, row: 3, k: 'trap', t: 'Vómitos incoercibles', s: 'No tolera la vía oral' },
        { id: 'cef3', col: 2, row: 3, k: 'refer', t: 'Ceftriaxona IM o EV', s: '1 a 3 dosis' },
      ],
      edges: [
        { from: 'ami', to: 'fal', label: 'sin mejoría' },
        { from: 'fal', to: 'cla' },
        { from: 'ami', to: 'ale' },
        { from: 'ale', to: 'cef', label: 'no IgE' },
        { from: 'ale', to: 'mac', label: 'IgE' },
        { from: 'ami', to: 'vom' },
        { from: 'vom', to: 'cef3' },
      ],
      steps: [
        { show: ['fal'], note: 'La falla se define a las 48 a 72 horas',
          say: 'Veamos cuándo se cambia el esquema. Si el niño tratado con amoxicilina sigue con fiebre y dolor a las cuarenta y ocho a setenta y dos horas, eso es una falla terapéutica. Y la respuesta no es subir la dosis ni esperar más.' },
        { show: ['cla'], note: 'Falla: se agrega ácido clavulánico',
          say: 'La conducta es amoxicilina más ácido clavulánico, con la misma dosis de amoxicilina, ochenta a noventa miligramos por kilo al día, en relación catorce a uno. Piensa en el mecanismo: el clavulánico cubre a Haemophilus y a Moraxella, que producen betalactamasas. También se parte directo con clavulánico si recibió amoxicilina en los últimos treinta días, o si tiene conjuntivitis purulenta asociada, el síndrome otitis conjuntivitis, típico de Haemophilus.' },
        { show: ['ale'], note: 'Con alergia, importa qué tipo de reacción fue',
          say: 'Ahora, el paciente alérgico. Lo que decide es el tipo de reacción, porque no es lo mismo un exantema tardío que una anafilaxia.' },
        { show: ['cef'], note: 'Alergia no anafiláctica: cefalosporina oral',
          say: 'Si la alergia no fue mediada por IgE, un exantema tardío, se usa una cefalosporina oral, como cefuroxima, que tiene baja reactividad cruzada.' },
        { show: ['mac'], note: 'Anafilaxia: macrólido de rescate',
          say: 'Si hubo anafilaxia o hipersensibilidad inmediata, el rescate es un macrólido, como azitromicina, sabiendo que el neumococo tiene entre veinticinco y treinta por ciento de resistencia.' },
        { show: ['vom', 'cef3'], note: 'No tolera la vía oral: ceftriaxona',
          say: 'Y un último escenario: si tiene vómitos incoercibles y no tolera nada por boca, se usa ceftriaxona intramuscular o endovenosa, de una a tres dosis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'Cuándo una OMA ya no es para la casa',
      cards: [
        { title: 'OMA severa', tag: 'Tratar con 10 días', kind: 'key', items: [
          { t: 'Fiebre desde 39 °C', d: 'Otalgia continua más de 48 horas',
            say: 'La otitis se estratifica por gravedad. Es severa si hay fiebre de treinta y nueve grados o más, otalgia intensa y continua por más de cuarenta y ocho horas, o si es un menor de dos años con compromiso de los dos oídos.' },
          { t: 'Lactante menor de 6 meses', d: 'Antibiótico siempre, sin observar',
            say: 'En el menor de seis meses no se observa: toda sospecha de otitis media aguda se trata con antibiótico desde el primer día.' },
        ] },
        { title: 'Complicación inminente', tag: 'Alarma', kind: 'alert', items: [
          { t: 'Eritema o edema retroauricular', d: 'Pabellón desplazado hacia adelante',
            say: 'Y atención con los signos de complicación. Enrojecimiento y edema detrás de la oreja, con el pabellón que se desplaza, apunta a una mastoiditis.' },
          { t: 'Parálisis facial o vértigo', d: 'La infección salió del oído medio',
            say: 'La parálisis facial o el vértigo también son signos de alarma. Eso ya no se trata en la casa.' },
          { t: 'Hospitalizar, TAC y ceftriaxona', d: 'Más miringotomía',
            say: 'La conducta es hospitalización inmediata, TAC de peñasco con contraste, ceftriaxona endovenosa y miringotomía. Y vigilas más a quien tenga inmunodeficiencia o un colesteatoma de base.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Recurrencia',
      title: 'OMA recurrente: cuándo derivar',
      cards: [
        { title: 'Definición', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: '3 o más episodios en 6 meses', d: 'Con resolución completa entre ellos',
            say: 'La otitis media aguda recurrente se define de dos maneras. Tres o más episodios documentados en seis meses, o cuatro o más en doce meses, con al menos uno en los últimos seis. En ambos casos el oído debe quedar completamente sano entre un episodio y otro.' },
          { t: '4 o más episodios en 12 meses', d: 'Al menos uno en los últimos 6 meses',
            say: 'Fíjate que no es de cinco episodios, como intentan confundirte las alternativas. Tres en seis meses ya es recurrente.' },
        ] },
        { title: 'Conducta', tag: 'Derivar a otorrino', kind: 'key', items: [
          { t: 'Derivar a otorrinolaringología', d: 'Estudiar adenoides, paladar y reflujo',
            say: 'La conducta es derivar al otorrino, para buscar factores que predisponen: hipertrofia adenoidea, fisura palatina o reflujo faringolaríngeo.' },
          { t: 'Tubos de ventilación y adenoidectomía', d: 'Reducen las recurrencias',
            say: 'Allí se evalúa poner tubos de ventilación timpánica, las colleras, con o sin adenoidectomía. Esto devuelve la aireación del oído medio y baja mucho las recurrencias.' },
          { t: 'No dar antibiótico profiláctico', d: 'Genera resistencia',
            say: 'Y lo que no se hace es dar antibiótico profiláctico prolongado, porque genera resistencia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos lo que vimos en un árbol de decisión, tal como lo vas a razonar frente a un niño con dolor de oído.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'No todo oído rojo o con líquido es una OMA',
      head: ['Entidad', 'Lo que ves en la otoscopía', 'Conducta'],
      rows: [
        { cells: ['Otitis media aguda', 'Tímpano abombado, rojo y opaco', 'Amoxicilina en dosis alta + analgesia'],
          say: 'Repasemos las trampas. Otitis media aguda: tímpano abombado, rojo y opaco, con dolor y fiebre. Se trata con amoxicilina en dosis alta y analgesia.' },
        { cells: ['Otitis media con efusión', 'Tímpano retraído, ámbar, burbujas, sin dolor', 'Observar 3 meses; sin antibióticos'],
          say: 'Otitis media con efusión: el tímpano está retraído, color ámbar, con burbujas, y el niño no tiene dolor ni fiebre. Se observa tres meses. Dar antibióticos o antihistamínicos aquí es el error clásico.' },
        { cells: ['Miringitis bulosa', 'Ampollas serosas o hemorrágicas en el tímpano', 'Analgesia potente + macrólido'],
          say: 'Miringitis bulosa: ampollas en la superficie del tímpano, con un dolor súbito desgarrador. Se asocia a Mycoplasma y a virus, por eso el antibiótico es un macrólido, además de analgesia potente.' },
        { cells: ['Otitis externa difusa', 'Conducto edematoso; tímpano indemne', 'Aseo + gotas de ciprofloxacino'],
          say: 'Otitis externa difusa: el conducto está edematoso, duele al tirar del pabellón o presionar el trago, y el tímpano está indemne. Es patología del conducto, y se trata con aseo y gotas de ciprofloxacino. Esa es la clase de más adelante.' },
        { cells: ['Falla a las 48 a 72 horas', 'Persisten fiebre, dolor y abombamiento', 'Cambiar a amoxicilina + clavulánico'],
          say: 'Y la trampa de oro: falla a las cuarenta y ocho a setenta y dos horas. Subir la dosis de amoxicilina, dar gotas óticas o derivar a miringotomía son distractores. La respuesta es amoxicilina más ácido clavulánico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un niño de 18 meses, previamente sano y con vacunas al día, consulta por fiebre de 39,2 °C axilar de 24 horas, llanto inconsolable y manos hacia la oreja derecha. Tuvo un resfrío común hace 5 días en la sala cuna. Está febril, reactivo y sin signos meníngeos. La otoscopía izquierda es normal; en el oído derecho el tímpano está francamente abombado, eritematoso, opaco y sin movilidad, sin otorrea.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina 80 a 90 mg/kg/día cada 12 horas por 10 días y analgesia con paracetamol o ibuprofeno' },
        { letter: 'B', text: 'Gotas óticas de ciprofloxacino con corticoide por 7 días' },
        { letter: 'C', text: 'Solo analgesia y observación por 48 horas, sin antibióticos' },
        { letter: 'D', text: 'Antihistamínico y descongestionante nasal por 7 días' },
        { letter: 'E', text: 'Derivación urgente para miringotomía y timpanocentesis' },
      ],
      correct: 'A',
      explanation: 'Es una OMA severa: menor de 2 años, fiebre sobre 39 °C y tímpano abombado con hipomovilidad. Corresponde amoxicilina en dosis alta por 10 días más analgesia. Las gotas óticas no atraviesan un tímpano íntegro, los antihistamínicos no sirven, y la miringotomía se reserva para las complicaciones.',
      say: {
        stem: 'Vamos con un caso. Un niño de dieciocho meses, sano y con sus vacunas al día, llega a urgencia con fiebre de treinta y nueve coma dos grados desde hace un día, llanto inconsolable y tomándose la oreja derecha. Hace cinco días tuvo un resfrío en la sala cuna. Está febril, reactivo, sin signos meníngeos. El oído izquierdo es normal, y en el derecho el tímpano está abombado, rojo, opaco y sin movilidad.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: amoxicilina en dosis alta por diez días con analgesia, gotas óticas de ciprofloxacino, solo analgesia con observación, antihistamínico con descongestionante, o derivar a miringotomía. Piénsalo.',
        answer: 'La respuesta es la A. Tiene abombamiento, es menor de dos años y la fiebre pasa de treinta y nueve grados: es una otitis severa, y se trata con amoxicilina en dosis alta por diez días y analgesia. Observar sin antibiótico no corresponde con ese cuadro. Las gotas óticas no atraviesan un tímpano íntegro, y los antihistamínicos no sirven. La miringotomía se guarda para las complicaciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 175',
      stem: 'Un paciente de 3 años, sin antecedentes, con cuadro de rinofaringitis viral de dos días de evolución en tratamiento sintomático, es traído por presentar desde hace unas horas mayor compromiso del estado general, asociado a otalgia intensa izquierda y sensación febril. Al examen físico destaca examen cardiopulmonar normal y a la otoscopía se aprecia tímpano izquierdo eritematoso y abombado con escasa secreción purulenta.',
      question: 'El fármaco de elección en este caso es:',
      options: [
        { letter: 'A', text: 'Ibuprofeno oral' },
        { letter: 'B', text: 'Amoxicilina oral' },
        { letter: 'C', text: 'Amoxicilina con ácido clavulánico oral' },
        { letter: 'D', text: 'Gentamicina tópica' },
        { letter: 'E', text: 'Claritromicina oral' },
      ],
      correct: 'B',
      explanation: 'Es una OMA: se parte con amoxicilina sola. El ácido clavulánico se agrega solo si no responde a las 72 horas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Niño de tres años con un resfrío de dos días, que de pronto tiene mal estado general, otalgia intensa izquierda y fiebre. La otoscopía muestra el tímpano rojo y abombado, con escasa secreción purulenta.',
        question: '¿Cuál es el fármaco de elección?',
        options: 'Las opciones son: ibuprofeno, amoxicilina, amoxicilina con ácido clavulánico, gentamicina tópica o claritromicina. Piénsalo.',
        answer: 'Es la B, amoxicilina sola. Es una otitis media aguda sin falla previa, y la primera línea es amoxicilina. El distractor tentador es la C: parece más potente, pero el clavulánico se reserva para cuando no hay respuesta a las cuarenta y ocho a setenta y dos horas. Y el ibuprofeno solo, aunque ayuda al dolor, no trata la infección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 13',
      stem: 'Un niño de 3 años presenta un cuadro de 5 días de evolución de rinorrea, fiebre y odinofagia, al que, hace dos días se le agrega otalgia, por lo que se realiza otoscopía que muestra tímpano abombado y eritematoso. Se inicia amoxicilina 50 mg/kg al día, sin embargo, a las 48 horas no ha mostrado ningún tipo de mejoría.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis a 100 mg/Kg al día' },
        { letter: 'B', text: 'Cambiar el tratamiento a azitromicina oral 10 mg/Kg al día' },
        { letter: 'C', text: 'Agregar ácido clavulánico al tratamiento oral' },
        { letter: 'D', text: 'Solicitar una TAC de peñasco' },
        { letter: 'E', text: 'Iniciar ceftriaxona endovenosa' },
      ],
      correct: 'C',
      explanation: 'Sin respuesta a las 48 a 72 horas se agrega ácido clavulánico, para cubrir Haemophilus y Moraxella productores de betalactamasas. Aquí la dosis inicial fue baja, por lo que la dosis recomendada sigue siendo 80 a 90 mg/kg/día.',
      say: {
        stem: 'Otra real, del EUNACOM de julio de dos mil veinticuatro. Niño de tres años con cinco días de resfrío, fiebre y odinofagia, y desde hace dos días otalgia. La otoscopía muestra el tímpano abombado y rojo. Se inicia amoxicilina, pero a las cuarenta y ocho horas no mejora.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes: subir la dosis, cambiar a azitromicina, agregar ácido clavulánico, pedir un TAC de peñasco, o iniciar ceftriaxona endovenosa. Piénsalo.',
        answer: 'La respuesta es la C, agregar ácido clavulánico. Es la falla terapéutica clásica, y el mecanismo son los gérmenes productores de betalactamasas, Haemophilus y Moraxella, que el clavulánico cubre. Ojo con un detalle: la dosis de amoxicilina que se le dio, cincuenta miligramos por kilo, es menor que la recomendada, que es ochenta a noventa. Pero entre las opciones, la que corresponde a la falla es el clavulánico. El TAC y la ceftriaxona se reservan para las complicaciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un lactante de 11 meses presenta su tercer episodio de otitis media aguda supurada en los últimos 4 meses, respondiendo satisfactoriamente a la amoxicilina en cada oportunidad. La madre pregunta cuál es la definición médica de su condición y el paso a seguir.',
      question: '¿Cuál es la respuesta correcta?',
      options: [
        { letter: 'A', text: 'Corresponde a una otitis media crónica supurada y debe iniciar profilaxis antibiótica diaria con cotrimoxazol.' },
        { letter: 'B', text: 'Cumple criterios de otitis media recurrente y debe ser derivado al otorrinolaringólogo para evaluación de tubos de ventilación.' },
        { letter: 'C', text: 'No cumple criterios de recurrencia porque se requieren al menos 5 episodios en 6 meses.' },
        { letter: 'D', text: 'Se trata de una falla inmunológica primaria y requiere inmunoglobulinas endovenosas mensuales.' },
        { letter: 'E', text: 'Debe recibir amoxicilina en dosis profiláctica continua durante toda la temporada de invierno.' },
      ],
      correct: 'B',
      explanation: 'OMA recurrente: 3 o más episodios en 6 meses, o 4 o más en 12 meses. Se deriva a ORL para evaluar tubos de ventilación. La quimioprofilaxis prolongada está contraindicada por generar resistencia.',
      say: {
        stem: 'Cerremos con una pregunta del banco, de caso representativo, sobre la recurrencia. Un lactante de once meses con su tercera otitis media aguda supurada en cuatro meses, y cada vez respondió bien a la amoxicilina. La madre pregunta cómo se llama su condición y qué sigue.',
        question: '¿Cuál es la respuesta correcta?',
        options: 'Las opciones: otitis crónica con profilaxis, otitis recurrente con derivación a otorrino, no cumple criterios porque se piden cinco episodios, inmunodeficiencia con inmunoglobulinas, o amoxicilina profiláctica en invierno. Piénsalo.',
        answer: 'Es la B. Tres episodios en seis meses ya cumplen la definición de otitis recurrente, y el paso siguiente es derivar al otorrino para evaluar tubos de ventilación. La C es la trampa numérica: no se piden cinco episodios. Y las profilaxis con antibiótico están contraindicadas, porque generan resistencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: otitis media aguda',
      cards: [
        { title: 'Diagnóstico', tag: 'Abombamiento', kind: 'key', items: [
          { t: 'Tímpano abombado = OMA', d: 'El eritema aislado no basta',
            say: 'Cerremos con las reglas de oro. El diagnóstico es clínico, y el signo más específico es el tímpano abombado. Un tímpano solo rojo no basta.' },
          { t: 'Con efusión sin inflamación: OME', d: 'Observar 3 meses, sin antibióticos',
            say: 'Y si hay líquido pero sin dolor, fiebre ni abombamiento, es una otitis con efusión: se observa, sin antibióticos.' },
        ] },
        { title: 'Tratamiento', tag: 'Dosis alta', kind: 'pharma', items: [
          { t: 'Amoxicilina 80 a 90 mg/kg/día', d: 'Cada 12 horas, 7 a 10 días',
            say: 'La primera línea es amoxicilina en dosis alta, cada doce horas, por siete a diez días, siempre con analgesia.' },
          { t: 'Falla a 48 a 72 h: clavulánico', d: 'Cubre Haemophilus y Moraxella',
            say: 'Si falla a las cuarenta y ocho a setenta y dos horas, se agrega ácido clavulánico, porque el problema son las betalactamasas.' },
        ] },
        { title: 'Complicaciones y recurrencia', tag: 'No pasar por alto', kind: 'alert', items: [
          { t: 'Edema retroauricular o parálisis facial', d: 'Hospitalizar, TAC y ceftriaxona',
            say: 'El edema detrás de la oreja o una parálisis facial significan complicación, y esa se hospitaliza.' },
          { t: '3 episodios en 6 meses', d: 'Derivar a ORL para tubos',
            say: 'Y tres episodios en seis meses, o cuatro en un año, es recurrencia, con derivación al otorrino. Si te llevas una sola idea de hoy: abombamiento para diagnosticar, amoxicilina en dosis alta para tratar, y clavulánico si falla. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: otitis media aguda',
    root: N('start', 'Niño con otalgia y fiebre', 'Tras un resfrío reciente',
      'Un niño con otalgia, fiebre o llanto inconsolable después de un resfrío. Lo primero es mirar el tímpano.',
      ['', N('q', '¿El tímpano está abombado?', 'Con eritema, opacidad e hipomovilidad',
        'La otoscopía decide. El abombamiento es el signo más específico de otitis media aguda supurada.',
        ['No: líquido sin signos inflamatorios', N('ok', 'Otitis con efusión: observar', 'Sin antibióticos ni antihistamínicos',
          'Si el tímpano está retraído o ámbar, sin dolor ni fiebre, es una otitis con efusión. Se observa por tres meses.')],
        ['Sí: otitis media aguda', N('do', 'Amoxicilina 80 a 90 mg/kg/día', 'Cada 12 horas, 7 a 10 días + analgesia',
          'Se inicia amoxicilina en dosis alta con analgesia reglada. Si hay edema retroauricular, parálisis facial o vértigo, es una complicación: hospitalización, TAC de peñasco y ceftriaxona.',
          ['Mejora a las 48 a 72 horas', N('ok', 'Completar el esquema', 'Si son 3 en 6 meses: derivar a ORL',
            'Se completa el tratamiento. Si es el tercer episodio en seis meses, o el cuarto en doce, es una otitis recurrente y se deriva al otorrino para evaluar tubos de ventilación.')],
          ['Falla a las 48 a 72 horas', N('do', 'Amoxicilina + ácido clavulánico', '80 a 90 mg/kg/día de amoxicilina, 10 días',
            'La falla se explica por Haemophilus y Moraxella productores de betalactamasas. Se pasa a amoxicilina con ácido clavulánico por diez días.')],
        )],
      )],
    ),
  },
};
