// Clase 14.14 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-14). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene preguntas de absceso retrofaríngeo ni de angina de Ludwig: se usan 2 del libro como "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Absceso periamigdalino, retrofaríngeo, parafaríngeo y angina de Ludwig: cómo reconocerlos y cuándo asegurar la vía aérea',
      say: 'Bienvenido. En la clase anterior viste la amigdalitis. Hoy vemos lo que pasa cuando la infección se escapa de la amígdala y se instala en los espacios profundos del cuello. Son urgencias, porque pueden cerrar la vía aérea o bajar al mediastino. El examen pregunta una tríada que tienes que reconocer al vuelo, el drenaje como tratamiento, y qué infección profunda aparece según la edad y el origen.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Cómo nace el absceso periamigdalino',
      nodes: [
        { id: 'am', col: 0, row: 1, k: 'start', t: 'Amigdalitis supurada', s: 'Adolescente o adulto joven' },
        { id: 'ca', col: 1, row: 1, k: 'mech', t: 'Atraviesa la cápsula', s: 'Llega al espacio periamigdalino' },
        { id: 'co', col: 2, row: 0, k: 'alert', t: 'Colección de pus', s: 'Entre cápsula y constrictor superior' },
        { id: 'mi', col: 2, row: 2, k: 'cause', t: 'Polimicrobiano', s: 'Estreptococo y anaerobios orales' },
        { id: 'tr', col: 3, row: 1, k: 'effect', t: 'Se drena, no se espera', s: 'El antibiótico solo no basta' },
      ],
      edges: [
        { from: 'am', to: 'ca' },
        { from: 'ca', to: 'co' },
        { from: 'mi', to: 'co', label: 'causa' },
        { from: 'co', to: 'tr' },
      ],
      steps: [
        { show: ['am', 'ca'], note: 'Es la infección profunda más frecuente del cuello',
          say: 'El absceso periamigdalino, o quinsy, es la infección profunda del cuello más frecuente en adolescentes y adultos jóvenes. Nace de una amigdalitis supurada que atraviesa la cápsula de la amígdala y llega al espacio que hay entre la cápsula y el músculo constrictor superior de la faringe.' },
        { show: ['co'], note: 'Una colección que ocupa espacio',
          say: 'Ahí se forma una colección de pus. Y fíjate en la idea clave: una colección es un problema mecánico. Por eso, como verás, no basta con dar antibióticos.' },
        { show: ['mi'], note: 'Estreptococo del grupo A, anginosus y anaerobios',
          say: 'La flora es polimicrobiana: Streptococcus pyogenes, Streptococcus anginosus y anaerobios de la boca, como Fusobacterium, Prevotella y Peptostreptococcus. Los anaerobios son los que explican por qué el esquema antibiótico es especial.' },
        { show: ['tr'], note: 'Pus en un espacio cerrado: se drena',
          say: 'Y de ahí sale la conducta: pus en un espacio cerrado se drena. Lo vemos en un momento.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El absceso y los espacios profundos',
      images: [
        { src: 'animaciones/orl-14/A1_absceso_periamigdalino_y_profundos.mp4', label: 'Absceso periamigdalino e infecciones profundas del cuello', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Pilar abombado y úvula al lado sano; otras infecciones profundas',
          say: 'Mira la amígdala: el absceso abomba el pilar anterior, la úvula se desvía hacia el lado sano, y el trismus impide abrir la boca. Se drena y se da antibiótico endovenoso. Las otras infecciones profundas se reconocen por el paciente: el lactante con tortícolis, el retrofaríngeo; el trismus con masa en el ángulo, el parafaríngeo; y el molar infectado con cuello leñoso, la angina de Ludwig. Ahí, primero la vía aérea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada del absceso periamigdalino',
      cards: [
        { title: 'Tríada clásica', tag: 'Se pregunta siempre', kind: 'key', items: [
          { t: 'Trismus intenso', d: 'No puede abrir la boca',
            say: 'La tríada clásica tiene tres elementos. Primero, el trismus: el paciente casi no puede abrir la boca. Se produce porque la inflamación irrita al músculo pterigoideo interno, que está pegado a la amígdala, y lo contrae en espasmo.' },
          { t: 'Voz en papa caliente', d: 'Voz apagada y gangosa',
            say: 'Segundo, la voz en papa caliente: apagada, gangosa, como si hablara con comida caliente en la boca.' },
          { t: 'Úvula hacia el lado sano', d: 'Desviación contralateral',
            say: 'Tercero, la úvula desviada hacia el lado contrario. El pilar anterior abombado empuja la amígdala hacia la línea media y la úvula se va al lado sano. Si el pilar abombado es el izquierdo, la úvula mira a la derecha. Mira esta garganta: el pilar abombado, rojo, y la úvula empujada hacia el otro lado.',
            photo: { src: 'biblioteca/17_otorrino/orl-14/02_absceso-periamigdalino__sherman_p259.jpg', label: 'Pilar abombado y úvula', at: 'Mira esta garganta', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 259' } },
        ] },
        { title: 'Lo que acompaña', tag: 'Cuadro florido', kind: 'criteria', items: [
          { t: 'Odinofagia unilateral', d: 'Intolerable, con otalgia refleja',
            say: 'Se suma una odinofagia de un solo lado, intolerable, con dolor de oído del mismo lado, por el nervio glosofaríngeo.' },
          { t: 'Sialorrea y aliento fétido', d: 'No puede ni tragar la saliva',
            say: 'Como no puede tragar ni su propia saliva, babea. Hay fiebre alta y aliento fétido. Piensa en un paciente que lleva días con amigdalitis, y que empeora a pesar del antibiótico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Absceso periamigdalino: tres pilares',
      cards: [
        { title: 'Drenaje y antibiótico', tag: 'En el box de urgencia', kind: 'pharma', items: [
          { t: 'Punción o incisión y drenaje', d: 'En el punto de máximo abombamiento',
            say: 'El primer pilar, y el que más se pregunta, es el drenaje. Se hace una punción con aguja gruesa o una incisión en el punto de máximo abombamiento, con anestesia tópica e infiltrativa. Alivia el trismus casi al instante y permite tomar un cultivo.' },
          { t: 'Antibiótico endovenoso', d: 'Cubre estreptococo y anaerobios',
            say: 'El segundo pilar es el antibiótico endovenoso, que tiene que cubrir anaerobios. Las opciones son amoxicilina con ácido clavulánico, un gramo doscientos cada ocho horas; penicilina sódica más metronidazol; o ceftriaxona más clindamicina.' },
          { t: 'Dexametasona y analgesia', d: 'Una dosis EV reduce edema y trismus',
            say: 'El tercer pilar es una dosis de dexametasona endovenosa, de ocho a diez miligramos, junto con analgesia. Reduce el edema y acelera la resolución del trismus.' },
        ] },
        { title: 'Amigdalectomía', tag: 'Cuándo', kind: 'key', items: [
          { t: 'En caliente: solo si falla', d: 'Falla el drenaje o hay riesgo de vía aérea',
            say: 'La amigdalectomía en caliente, en plena fase aguda, se reserva para cuando falla el drenaje o hay compromiso de vía aérea.' },
          { t: 'En frío: 4 a 6 semanas', d: 'Si hay amigdalitis recurrentes',
            say: 'Si el paciente tiene antecedente de amigdalitis recurrentes, se programa una amigdalectomía electiva, en frío, a las cuatro a seis semanas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Absceso retrofaríngeo',
      title: 'El peligro del lactante',
      nodes: [
        { id: 'gi', col: 0, row: 0, k: 'cause', t: 'Ganglios de Gilette', s: 'Drenan adenoides y nariz' },
        { id: 'at', col: 0, row: 2, k: 'good', t: 'Se atrofian a los 4 a 5 años', s: 'Por eso es de niños pequeños' },
        { id: 'ab', col: 1, row: 1, k: 'alert', t: 'Absceso retrofaríngeo', s: 'Menores de 5 años' },
        { id: 'cl', col: 2, row: 0, k: 'effect', t: 'Tortícolis y estridor', s: 'Fiebre, sialorrea, rechazo alimentario' },
        { id: 'dp', col: 2, row: 2, k: 'risk', t: 'Danger space', s: 'Comunica con el mediastino posterior' },
        { id: 'me', col: 3, row: 2, k: 'risk', t: 'Mediastinitis descendente', s: 'Y asfixia' },
      ],
      edges: [
        { from: 'gi', to: 'ab', label: 'supuran' },
        { from: 'at', to: 'ab' },
        { from: 'ab', to: 'cl' },
        { from: 'ab', to: 'dp' },
        { from: 'dp', to: 'me' },
      ],
      steps: [
        { show: ['gi', 'at'], note: 'Espacio entre la fascia bucofaríngea y la prevertebral',
          say: 'El absceso retrofaríngeo se forma detrás de la faringe, entre la fascia bucofaríngea y la fascia prevertebral. Ahí viven los ganglios retrofaríngeos de Gilette, que drenan las adenoides, la nariz y los senos paranasales. Esos ganglios se atrofian hacia los cuatro o cinco años.' },
        { show: ['ab'], note: 'Casi exclusivo del menor de 5 años',
          say: 'Por eso el absceso retrofaríngeo es casi exclusivo de lactantes y niños menores de cinco años. En un adulto, solo aparece tras un cuerpo extraño, como una espina de pescado, o un trauma instrumental.' },
        { show: ['cl'], note: 'La orofaringe anterior suele verse normal',
          say: 'La clínica es fiebre alta, rechazo a comer, babeo, tortícolis dolorosa, y estridor inspiratorio con el cuello en hiperextensión. Ojo con un detalle: a diferencia del absceso periamigdalino, la orofaringe anterior suele verse normal. Lo que hay es un abombamiento de la pared posterior de la faringe.' },
        { show: ['dp', 'me'], note: 'Emergencia quirúrgica absoluta',
          say: 'Y el peligro es que este espacio se comunica con el mediastino posterior a través del danger space. La infección puede bajar y causar una mediastinitis necrotizante descendente, además de asfixia. Por eso es una emergencia quirúrgica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Absceso retrofaríngeo',
      title: 'Diagnóstico y manejo',
      cards: [
        { title: 'Cómo se confirma', tag: 'Imágenes', kind: 'criteria', items: [
          { t: 'Radiografía lateral de cuello', d: 'En inspiración e hiperextensión',
            say: 'La radiografía lateral de cuello, tomada en inspiración e hiperextensión, muestra el ensanchamiento del espacio prevertebral, y a veces aire o un nivel hidroaéreo. Mira esta radiografía lateral: el espacio prevertebral ensanchado, y al lado, el escáner con la colección.',
            photo: { src: 'biblioteca/17_otorrino/orl-14/03_absceso-retrofaringeo-rx-tc__sherman_p261.jpg', label: 'Absceso retrofaríngeo: ensanchamiento del espacio prevertebral en la Rx lateral', at: 'Mira esta radiografía lateral', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 3217' } },
          { t: 'Prevertebral muy ancho', d: 'Más de un cuerpo en C2; el doble en C6',
            say: 'Se considera patológico si el espacio supera el ancho de un cuerpo vertebral a nivel de C dos, o el doble de un cuerpo vertebral a nivel de C seis. Se pierde además la lordosis cervical.' },
          { t: 'TAC de cuello con contraste', d: 'Es el examen definitivo',
            say: 'El examen definitivo es el escáner de cuello con contraste.' },
        ] },
        { title: 'Conducta', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Hospitalizar en UCI', d: 'Intubación cuidadosa',
            say: 'La conducta es hospitalizar de urgencia, a menudo en UCI, con una intubación muy cuidadosa.' },
          { t: 'Drenaje quirúrgico en pabellón', d: 'Con ceftriaxona y clindamicina EV',
            say: 'Se drena en pabellón con anestesia general, por un cirujano otorrinolaringólogo, junto con ceftriaxona más clindamicina endovenosas. No se maneja en el box como el periamigdalino.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Imagen',
      title: 'Cómo se informa la TAC cervical con contraste',
      cards: [
        { title: 'Cuándo se pide', tag: 'Sospecha de absceso profundo', kind: 'key', items: [
          { t: 'Trismus, rigidez cervical, estridor, disfagia', d: 'Abombamiento faríngeo o falta de respuesta al manejo',
            say: 'La TAC cervical con contraste es el examen de elección ante la sospecha de un absceso periamigdalino complicado, retrofaríngeo o parafaríngeo: trismus, rigidez cervical, abombamiento faríngeo, disfagia, estridor o una úvula desplazada que no responde al manejo.' },
        ] },
        { title: 'Qué distingue el informe', tag: 'Flemón o absceso', kind: 'criteria', items: [
          { t: 'Flemón: inflamación difusa, sin colección', d: 'Manejo médico',
            say: 'El informe separa el flemón, una inflamación difusa sin colección, que se maneja con antibióticos, del absceso, una colección hipodensa con realce periférico en anillo, a veces con gas, que requiere drenaje.' },
        ] },
        { title: 'Hallazgos de gravedad', tag: 'Cambian la conducta', kind: 'alert', items: [
          { t: 'Prevertebral ancho, vía aérea estrecha', d: 'Extensión parafaríngea o mediastínica',
            say: 'Orientan a gravedad el ensanchamiento del espacio prevertebral, la estrechez de la vía aérea y la extensión al espacio parafaríngeo o al mediastino.' },
          { t: 'Trombosis yugular y carótida', d: 'Síndrome de Lemierre',
            say: 'Y la trombosis de la vena yugular interna, el síndrome de Lemierre, y el compromiso de la carótida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras infecciones profundas',
      title: 'Parafaríngeo y angina de Ludwig',
      cards: [
        { title: 'Absceso parafaríngeo', tag: 'Espacio lateral', kind: 'alert', items: [
          { t: 'Trismus y masa bajo la mandíbula', d: 'Pared faríngea desplazada hacia medial',
            say: 'El absceso parafaríngeo afecta el espacio lateral de la faringe. Da trismo severo, desplaza la pared lateral de la faringe y la amígdala hacia la línea media, sin que la amígdala esté primariamente inflamada, y produce un abultamiento doloroso en el ángulo de la mandíbula. Mira este escáner con contraste: la colección con realce periférico en el espacio parafaríngeo.',
            photo: { src: 'biblioteca/17_otorrino/orl-14/04_absceso-parafaringeo-tc__nelson_p3217.jpg', label: 'Absceso retrofaríngeo en la TAC (sagital y axial)', at: 'Mira este escáner', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 3217' } },
          { t: 'Erosión carotídea y Lemierre', d: 'Trombosis de la yugular por Fusobacterium',
            say: 'Sus grandes peligros son la erosión de la arteria carótida interna y el síndrome de Lemierre, que es una tromboflebitis séptica de la vena yugular interna por Fusobacterium necrophorum.' },
        ] },
        { title: 'Angina de Ludwig', tag: 'Piso de la boca', kind: 'alert', items: [
          { t: 'Origen: molares inferiores', d: 'Celulitis bilateral del piso de boca',
            say: 'La angina de Ludwig es una celulitis gangrenosa que compromete a ambos lados los espacios submandibular, sublingual y submentoniano. En cerca del ochenta por ciento de los casos parte de una infección de los molares inferiores, el segundo y el tercero.' },
          { t: 'Induración leñosa y lengua elevada', d: 'Sin fluctuación; cierra la orofaringe',
            say: 'El signo es una induración dura como madera en el piso de la boca, sin fluctuación, con la lengua elevada y empujada hacia atrás, que tapa la orofaringe. Mira esta paciente: la región submandibular hinchada y dura. Esa induración empuja la base de la lengua hacia atrás, y por eso la vía aérea se asegura de inmediato.',
            photo: { src: 'biblioteca/17_otorrino/orl-14/01_angina-de-ludwig__amir-orl_p55.jpg', label: 'Angina de Ludwig', at: 'Mira esta paciente', credit: 'Manual AMIR Otorrinolaringología, p. 55' } },
          { t: 'Primero la vía aérea', d: 'Intubación con fibroscopio o traqueostomía',
            say: 'La prioridad indiscutida es asegurar la vía aérea, con intubación guiada con fibrobroncoscopio o traqueostomía. Después vienen la descompresión quirúrgica y los antibióticos endovenosos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Infecciones profundas del cuello',
      head: ['Entidad', 'Quién', 'Signo clave', 'Conducta'],
      rows: [
        { cells: ['Periamigdalino', 'Adolescente o adulto joven', 'Trismus, papa caliente, úvula al lado sano', 'Punción y drenaje, antibiótico EV'],
          say: 'Esta tabla es la que más rinde. El periamigdalino es del adolescente o adulto joven. La tríada es trismus, voz en papa caliente y úvula desviada al lado sano. Se punciona o se drena en el box y se da antibiótico endovenoso.' },
        { cells: ['Retrofaríngeo', 'Menor de 5 años', 'Tortícolis, estridor, pared posterior abombada', 'TAC y pabellón urgente'],
          say: 'El retrofaríngeo es del menor de cinco años. Piensa en tortícolis, estridor y la pared posterior de la faringe abombada, con la orofaringe anterior normal. Se pide escáner con contraste y va a pabellón de urgencia.' },
        { cells: ['Parafaríngeo', 'Cualquier edad, tras faringitis u otitis', 'Trismus y masa bajo el ángulo mandibular', 'Drenaje quirúrgico; vigilar Lemierre'],
          say: 'El parafaríngeo puede aparecer a cualquier edad. Trismus y una masa bajo el ángulo de la mandíbula. Se drena quirúrgicamente, y recuerda la erosión carotídea y el síndrome de Lemierre.' },
        { cells: ['Angina de Ludwig', 'Adulto con infección de molares inferiores', 'Induración leñosa, lengua elevada', 'Vía aérea primero'],
          say: 'Y la angina de Ludwig: adulto con una infección de los molares inferiores, induración leñosa del piso de la boca y lengua elevada. Aquí lo primero es la vía aérea, antes de cualquier otro procedimiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vía aérea',
      title: 'Signos de alarma en el cuello',
      cards: [
        { title: 'Cuándo actuar de inmediato', tag: 'Gravedad', kind: 'alert', items: [
          { t: 'Estridor o disnea inspiratoria', d: 'Edema que comprime la laringe',
            say: 'Hay tres signos que cambian la prioridad. El estridor o la disnea inspiratoria indican que el edema comprime el espacio supraglótico. Ahí el riesgo es un paro por asfixia y la acción es intubar con fibroscopio o hacer una traqueostomía.' },
          { t: 'Induración leñosa submandibular', d: 'La base de la lengua se va hacia atrás',
            say: 'La induración leñosa submandibular significa que la base de la lengua puede retropulsarse del todo. Asegura la vía aérea antes de manipular la orofaringe.' },
          { t: 'Ensanchamiento mediastínico', d: 'Mediastinitis necrotizante, mortalidad sobre 40%',
            say: 'Y el ensanchamiento del mediastino en el escáner indica que la infección bajó por el danger space. Es una mediastinitis necrotizante descendente, con mortalidad de más de cuarenta por ciento, y requiere drenaje cervical y torácico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: del paciente con odinofagia asimétrica y trismus hasta el drenaje o la vía aérea.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un joven de 20 años consulta por odinofagia izquierda de 4 días. No puede tragar su saliva y habla con voz apagada. Tiene 38,8 °C, trismus con apertura de 1,5 cm, abombamiento eritematoso del pilar anterior izquierdo y úvula desplazada hacia la derecha.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Penicilina benzatina intramuscular y control en 48 horas' },
        { letter: 'B', text: 'Punción con aguja gruesa o drenaje, antibiótico endovenoso y corticoide' },
        { letter: 'C', text: 'Radiografía lateral de cuello y alta con amoxicilina oral' },
        { letter: 'D', text: 'Amigdalectomía en caliente inmediata' },
        { letter: 'E', text: 'TAC de tórax ambulatorio' },
      ],
      correct: 'B',
      explanation: 'Es un absceso periamigdalino con la tríada completa. Se confirma y alivia con punción o incisión y drenaje, más antibiótico endovenoso que cubra anaerobios y una dosis de corticoide. Con una colección purulenta no basta el tratamiento oral.',
      say: {
        stem: 'Un joven de veinte años con odinofagia izquierda de cuatro días. No puede tragar su saliva y habla con voz apagada. Tiene treinta y ocho coma ocho grados, trismus con apertura de uno coma cinco centímetros, el pilar anterior izquierdo abombado y la úvula desplazada hacia la derecha.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: penicilina benzatina y control en cuarenta y ocho horas; punción o drenaje con antibiótico endovenoso y corticoide; radiografía de cuello y amoxicilina oral; amigdalectomía en caliente inmediata; o escáner de tórax ambulatorio. Piénsalo.',
        answer: 'Es la B. Tienes la tríada completa, trismus, voz en papa caliente y úvula al lado sano, así que es un absceso periamigdalino. Hay pus en un espacio cerrado: se drena, se cubre con antibiótico endovenoso y se da una dosis de corticoide. La A es la tentación, porque viene de la amigdalitis, pero un absceso no se resuelve con una dosis de penicilina benzatina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 119',
      stem: 'Un paciente está en el tercer día de tratamiento con azitromicina, por una amigdalitis con exudado. Consulta por aumento de la odinofagia, asociada a imposibilidad de comer por trismo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Absceso periamigdalino' },
        { letter: 'B', text: 'Angina de Ludwig' },
        { letter: 'C', text: 'Mononucleosis infecciosa' },
        { letter: 'D', text: 'Absceso parafaríngeo' },
        { letter: 'E', text: 'Absceso retrofaríngeo' },
      ],
      correct: 'A',
      explanation: 'Amigdalitis con exudado que empeora pese al antibiótico y suma trismo: absceso periamigdalino, la complicación supurativa clásica de la amigdalitis.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente está en el tercer día de tratamiento con azitromicina por una amigdalitis con exudado. Consulta por más odinofagia y por no poder comer a causa del trismo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: absceso periamigdalino, angina de Ludwig, mononucleosis infecciosa, absceso parafaríngeo, o absceso retrofaríngeo. Piénsalo.',
        answer: 'Es la A. Fíjate en la secuencia: una amigdalitis tratada que empeora y aparece trismo. Esa es la historia natural del absceso periamigdalino. La Ludwig parte de un molar, el retrofaríngeo es de niños pequeños, y el parafaríngeo no tiene inflamación amigdalina primaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 92',
      stem: 'Un paciente de 18 años consulta por odinofagia intensa de 2 días asociada a fiebre hasta 38,5 °C y aumento de volumen doloroso submandibular derecho. Tiene faringe congestiva con amígdala derecha aumentada y exudado purulento. Se palpa una masa blanda y dolorosa, con eritema, de 4 cm en la zona submandibular derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Absceso periamigdalino' },
        { letter: 'B', text: 'Mononucleosis infecciosa' },
        { letter: 'C', text: 'Quiste branquial infectado' },
        { letter: 'D', text: 'Adenitis supurada' },
        { letter: 'E', text: 'Linfoma de Hodgkin' },
      ],
      correct: 'D',
      explanation: 'Es una amigdalitis bacteriana complicada con una adenitis supurada submandibular. El absceso periamigdalino se caracteriza por dolor muy intenso, trismus y abombamiento del pilar amigdalino, que aquí no aparecen.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Un joven de dieciocho años con odinofagia intensa de dos días, fiebre de treinta y ocho coma cinco, amígdala derecha aumentada con exudado purulento, y una masa blanda, dolorosa y eritematosa de cuatro centímetros en la zona submandibular derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: absceso periamigdalino, mononucleosis infecciosa, quiste branquial infectado, adenitis supurada, o linfoma de Hodgkin. Piénsalo.',
        answer: 'Es la D. Esta pregunta te enseña a no ver un absceso periamigdalino en todo lado. Aquí hay una amigdalitis bacteriana con un ganglio submandibular que supuró. No hay trismus, ni abombamiento del pilar, ni úvula desviada, que son las tres claves del periamigdalino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un lactante de 2 años presenta fiebre de 39,2 °C, irritabilidad, rechazo alimentario, sialorrea y una postura fija del cuello en extensión con tortícolis dolorosa y estridor inspiratorio leve. En la radiografía lateral de cuello se evidencia un marcado ensanchamiento del espacio de partes blandas prevertebrales.',
      question: '¿Cuál es el diagnóstico más probable y la complicación más temida de no mediar tratamiento urgente?',
      options: [
        { letter: 'A', text: 'Absceso retrofaríngeo; mediastinitis necrotizante descendente' },
        { letter: 'B', text: 'Croup viral laringotraqueal; estenosis subglótica adquirida' },
        { letter: 'C', text: 'Epiglotitis aguda; fístula traqueoesofágica espontánea' },
        { letter: 'D', text: 'Absceso periamigdalino bilateral; trombosis de arteria basilar' },
        { letter: 'E', text: 'Mononucleosis infecciosa severa; rotura esplénica retardada' },
      ],
      correct: 'A',
      explanation: 'Lactante con tortícolis, estridor y ensanchamiento prevertebral: absceso retrofaríngeo. La complicación más grave es la mediastinitis necrotizante descendente a través del danger space. Requiere hospitalización, TAC con contraste y drenaje quirúrgico.',
      say: {
        stem: 'Esta es una pregunta representativa del banco EUNACOM. Un lactante de dos años con fiebre alta, irritabilidad, rechazo alimentario, babeo, cuello fijo en extensión con tortícolis dolorosa y estridor inspiratorio leve. La radiografía lateral de cuello muestra un marcado ensanchamiento del espacio prevertebral.',
        question: '¿Cuál es el diagnóstico más probable y la complicación más temida?',
        options: 'Las opciones: absceso retrofaríngeo con mediastinitis; croup con estenosis subglótica; epiglotitis con fístula traqueoesofágica; absceso periamigdalino bilateral con trombosis basilar; o mononucleosis con rotura esplénica. Piénsalo.',
        answer: 'Es la A. Menor de cinco años, tortícolis, estridor y espacio prevertebral ensanchado: es un absceso retrofaríngeo. Y la complicación que te piden es la mediastinitis necrotizante descendente, por el danger space.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 55 años con mala higiene dental consulta por aumento de volumen cervical anterior y submandibular bilateral, de consistencia dura "en madera" y dolorosa. Tiene fiebre, dificultad respiratoria, incapacidad para tragar la saliva y elevación forzada de la lengua, empujada hacia el paladar y hacia atrás.',
      question: '¿Cuál es la prioridad absoluta en el manejo inmediato de este paciente?',
      options: [
        { letter: 'A', text: 'Extracción inmediata en box de las piezas dentarias cariadas bajo anestesia local' },
        { letter: 'B', text: 'Asegurar y proteger la vía aérea de forma precoz (intubación guiada o traqueostomía)' },
        { letter: 'C', text: 'Corticoides orales en altas dosis y reposo en domicilio' },
        { letter: 'D', text: 'Radiografía panorámica dental ambulatoria' },
        { letter: 'E', text: 'Punción evacuadora con trocar en el piso de la boca sin anestesia' },
      ],
      correct: 'B',
      explanation: 'Es una angina de Ludwig. La induración leñosa del piso de boca eleva y empuja la lengua hacia atrás, con riesgo inminente de obstrucción. Lo primero es asegurar la vía aérea, antes de cualquier drenaje o examen.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Un paciente de cincuenta y cinco años con mala higiene dental, aumento de volumen submandibular bilateral duro como madera, fiebre, dificultad respiratoria, no puede tragar su saliva, y tiene la lengua elevada y empujada hacia atrás.',
        question: '¿Cuál es la prioridad absoluta en el manejo inmediato?',
        options: 'Las opciones: extraer las piezas cariadas en el box; asegurar la vía aérea con intubación guiada o traqueostomía; corticoides orales y reposo en casa; radiografía panorámica dental; o punción del piso de la boca sin anestesia. Piénsalo.',
        answer: 'Es la B. Es una angina de Ludwig, y la regla es que la vía aérea va primero. La tentación es ir directo al foco dental, la A, pero tocar la boca sin asegurar la vía aérea puede precipitar la obstrucción.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.002 · Absceso amigdalino",
      "stem": "Un adolescente de 15 años con odinofagia de 5 días, tratada con paracetamol, presenta empeoramiento con odinofagia unilateral intensa, fiebre, trismus, sialorrea y voz apagada (en papa caliente). Al examen se observa abombamiento del pilar amigdalino izquierdo con desplazamiento de la úvula hacia la derecha.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Amoxicilina oral y control en 48 horas"
        },
        {
          "letter": "B",
          "text": "Drenaje del absceso (punción o incisión) y antibiótico"
        },
        {
          "letter": "C",
          "text": "Amigdalectomía de urgencia"
        },
        {
          "letter": "D",
          "text": "Corticoides endovenosos como único tratamiento"
        },
        {
          "letter": "E",
          "text": "Solicitar TAC y diferir el drenaje una semana"
        }
      ],
      "correct": "B",
      "explanation": "Odinofagia unilateral, trismus, voz en papa caliente y desplazamiento de la úvula contralateral son el absceso periamigdalino, la complicación supurativa más frecuente de la faringoamigdalitis en adolescentes. El tratamiento es drenaje (punción aspirativa o incisión) más antibiótico (ej. amoxicilina-ácido clavulánico o clindamicina) y analgesia. El TAC se reserva si se sospecha extensión profunda.",
      "say": {
        "stem": "Un adolescente de quince años con faringitis tiene ahora dolor unilateral intenso, fiebre, trismus, voz en papa caliente y la úvula desplazada.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: amoxicilina oral y control, drenaje más antibiótico, amigdalectomía urgente, solo corticoides o diferir el drenaje. Piénsalo.",
        "answer": "Es la B. Es un absceso periamigdalino y se trata con drenaje más antibiótico. La amoxicilina sola tienta, pero un absceso constituido necesita ser drenado."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.4.004 · TAC cervical con contraste",
      "stem": "Hombre de 35 años con odontalgia molar inferior hace 1 semana, ahora con fiebre de 39 °C, trismus, aumento de volumen submandibular y cervical lateral izquierdo doloroso y odinofagia. Sin estridor ni dificultad respiratoria.",
      "question": "¿Cuál es el examen de elección para evaluar este cuadro?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cuello lateral"
        },
        {
          "letter": "B",
          "text": "Ecografía Doppler carotídea"
        },
        {
          "letter": "C",
          "text": "TAC de cuello con contraste endovenoso"
        },
        {
          "letter": "D",
          "text": "Resonancia magnética sin contraste"
        },
        {
          "letter": "E",
          "text": "Panorámica dental exclusivamente"
        }
      ],
      "correct": "C",
      "explanation": "La sospecha de infección profunda del cuello (absceso parafaríngeo, submandibular, angina de Ludwig) requiere TAC cervical con contraste: distingue celulitis de absceso, muestra su extensión (mediastino) y su relación con la vía aérea y los vasos. Se acompaña de antibióticos endovenosos y drenaje si hay colección. Antes, siempre asegurar la vía aérea.",
      "say": {
        "stem": "Hombre de treinta y cinco años con dolor de muela, fiebre, trismus y aumento de volumen doloroso submandibular y cervical, sin dificultad respiratoria.",
        "question": "¿Cuál es el examen de elección?",
        "options": "Las opciones: radiografía lateral de cuello, Doppler carotídeo, TAC de cuello con contraste, resonancia sin contraste o solo panorámica dental. Piénsalo.",
        "answer": "Es la C. Ante sospecha de infección profunda del cuello se pide TAC con contraste, que distingue celulitis de absceso y muestra su extensión. La panorámica dental tienta para ver la muela, pero no evalúa los espacios del cuello."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.003 · Drenaje de absceso retrofaríngeo",
      "stem": "Niño de 3 años con fiebre alta, odinofagia, sialorrea, rechazo alimentario y tortícolis con dolor a la extensión del cuello, tras una infección respiratoria alta. La radiografía lateral de cuello muestra aumento del espacio prevertebral. La TAC con contraste confirma una colección retrofaríngea con realce periférico de 2,5 cm. Respira sin dificultad.",
      "question": "¿Cuál es el manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Antibiótico oral y control ambulatorio"
        },
        {
          "letter": "B",
          "text": "Amigdalectomía de urgencia"
        },
        {
          "letter": "C",
          "text": "Punción del absceso en el servicio de urgencia por vía externa"
        },
        {
          "letter": "D",
          "text": "Corticoides y observación"
        },
        {
          "letter": "E",
          "text": "Hospitalización, antibióticos endovenosos y drenaje quirúrgico (habitualmente transoral) por otorrinolaringología, con protección de la vía aérea"
        }
      ],
      "correct": "E",
      "explanation": "El absceso retrofaríngeo predomina bajo los 5 años, por supuración de ganglios retrofaríngeos: fiebre, odinofagia, tortícolis o limitación de la extensión y espacio prevertebral aumentado. Se hospitaliza con antibióticos endovenosos (amoxicilina-clavulánico o clindamicina) y, si hay colección significativa, se drena en pabellón por vía transoral con la vía aérea protegida.",
      "say": {
        "stem": "Niño de tres años con fiebre, dolor al tragar, babeo, tortícolis con dolor al extender el cuello, y una colección retrofaríngea de dos centímetros y medio en la TAC, respirando sin dificultad.",
        "question": "¿Cuál es el manejo más adecuado?",
        "options": "Las opciones: antibiótico oral ambulatorio, amigdalectomía, punción en urgencia, corticoides o hospitalizar con antibióticos endovenosos y drenaje quirúrgico por otorrino protegiendo la vía aérea. Piénsalo.",
        "answer": "Es la E. Se hospitaliza, se dan antibióticos endovenosos y se drena en pabellón con la vía aérea protegida. La punción en urgencia tienta por ser rápida, pero arriesga la aspiración del pus y la pérdida de la vía aérea."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: infecciones profundas',
      cards: [
        { title: 'Reconocer', tag: 'Por edad y signo', kind: 'key', items: [
          { t: 'Trismus + papa caliente + úvula', d: 'Absceso periamigdalino',
            say: 'Cerremos con las reglas de oro. Trismus, voz en papa caliente y úvula desviada al lado sano es un absceso periamigdalino.' },
          { t: 'Niño pequeño con tortícolis', d: 'Retrofaríngeo hasta demostrar lo contrario',
            say: 'Un niño menor de cinco años con tortícolis, estridor y espacio prevertebral ensanchado es un retrofaríngeo, con riesgo de mediastinitis.' },
        ] },
        { title: 'Actuar', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Pus: se drena', d: 'Más antibiótico EV con anaerobios',
            say: 'El pus se drena, con antibiótico endovenoso que cubra anaerobios y una dosis de corticoide.' },
          { t: 'Ludwig: vía aérea primero', d: 'Antes de cualquier procedimiento',
            say: 'Si el piso de la boca está duro como madera y la lengua está elevada, es una angina de Ludwig, y primero va la vía aérea. Si te llevas una sola idea de hoy: un absceso del cuello se drena, y si compromete la vía aérea, la vía aérea va primero. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de las infecciones profundas del cuello',
    root: N('start', 'Odinofagia asimétrica, fiebre y trismus', '¿Qué espacio está comprometido?',
      'Un paciente con odinofagia severa, fiebre y trismus. Lo primero es decidir qué espacio fascial está comprometido.',
      ['Pilar abombado y úvula desviada', N('alert', 'Absceso periamigdalino', 'Trismus, papa caliente, sialorrea',
        'Pilar anterior abombado con úvula hacia el lado contrario: absceso periamigdalino.',
        ['Conducta', N('do', 'Punción o drenaje y antibiótico EV', 'Penicilina más metronidazol o amoxicilina con clavulánico; dexametasona',
          'Se puncionan o drenan en el punto de máximo abombamiento y se da antibiótico endovenoso que cubra anaerobios, más una dosis de dexametasona.')],
      )],
      ['Niño pequeño, tortícolis o pared posterior abombada', N('refer', 'Absceso retrofaríngeo', 'Menor de 5 años, estridor',
        'Un niño pequeño con tortícolis, estridor o la pared posterior abombada: absceso retrofaríngeo.',
        ['Conducta', N('do', 'Hospitalizar, TAC con contraste y pabellón', 'Ceftriaxona más clindamicina; riesgo de mediastinitis',
          'Hospitalización urgente, escáner de cuello con contraste y drenaje quirúrgico en pabellón, con ceftriaxona más clindamicina.')],
      )],
      ['Piso de boca duro y lengua elevada', N('alert', 'Angina de Ludwig', 'Origen en molares inferiores',
        'Induración leñosa del piso de la boca con la lengua elevada: angina de Ludwig.',
        ['Conducta', N('do', 'Asegurar la vía aérea primero', 'Intubación con fibroscopio o traqueostomía; luego drenaje',
          'Primero se asegura la vía aérea. Después vienen la descompresión quirúrgica y los antibióticos endovenosos.')],
      )],
    ),
  },
};
