// Clase 16.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-12).
// Nota: el código de la clase (6.01.2.005) no devuelve preguntas reales de confianza suficiente. Se buscó por
// tema con --search "eritema multiforme|lesión en diana|diana típica|escarapela|tiro al blanco" y todas las
// preguntas reales encontradas resultaron ser en verdad de Síndrome de Stevens-Johnson (código 2.01.1.055),
// no de eritema multiforme puro: otro caso del problema ya documentado en REVISION_CONTENIDO.md para esta
// especialidad (código correcto no siempre corresponde al tema real de la pregunta). Se usa 1 pregunta del
// libro ("Caso representativo", sin fecha) porque el banco real no tiene ninguna que enseñe el eritema
// multiforme puro sin confundirlo con SSJ.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La diana de tres anillos: cuando el herpes labial se complica en la piel, y por qué no es lo mismo que Stevens-Johnson',
      say: 'Bienvenidos a esta clase. Cerramos el bloque de farmacodermias graves con una entidad que en realidad casi nunca es por un fármaco: el eritema multiforme. Es el gemelo benigno de Stevens-Johnson, y el examen los pone a competir todo el tiempo con la misma palabra clave, la diana. Hoy vamos a aprender a distinguirlos con seguridad. Partamos por la lesión que le da el nombre.',
    },

    {
      type: 'flow',
      kicker: 'Etiología y lesión elemental',
      title: 'Del herpes labial a la diana de tres anillos',
      nodes: [
        { id: 'vhs', col: 0, row: 0, k: 'cause', t: 'Virus herpes simple previo', s: 'Más del 70% de los casos' },
        { id: 'myc', col: 0, row: 1, k: 'cause', t: 'Mycoplasma pneumoniae', s: 'Segunda causa, más en niños' },
        { id: 'lan', col: 1, row: 0, k: 'mech', t: 'Células de Langerhans transportan el virus', s: 'Estimulan citotoxicidad en la piel' },
        { id: 'dia', col: 2, row: 0, k: 'effect', t: 'Diana clásica de 3 anillos', s: 'Centro oscuro, halo pálido, borde rojo' },
        { id: 'acr', col: 3, row: 0, k: 'good', t: 'Distribución acral y simétrica', s: 'Manos, codos, rodillas' },
      ],
      edges: [
        { from: 'vhs', to: 'lan' }, { from: 'myc', to: 'lan', label: 'sobre todo en niños' },
        { from: 'lan', to: 'dia' }, { from: 'dia', to: 'acr' },
      ],
      steps: [
        { show: ['vhs'], note: 'La causa infecciosa manda, no el fármaco',
          say: 'A diferencia de Stevens-Johnson, aquí la causa infecciosa manda, en más del noventa por ciento de los casos. Y de esas causas infecciosas, la número uno, por lejos, es el virus herpes simple: un herpes labial que apareció una a dos semanas antes, responsable de más del setenta por ciento de todos los eritemas multiformes.' },
        { show: ['myc'], note: 'La segunda causa, típica en niños',
          say: 'La segunda causa es el Mycoplasma pneumoniae, sobre todo en niños y adultos jóvenes, muchas veces junto a una neumonía atípica con tos y fiebre. Y ojo: los fármacos son una causa muy infrecuente de este cuadro con dianas de tres anillos, menos del diez por ciento de los casos.' },
        { show: ['lan'], note: 'El virus viaja hasta la piel',
          say: 'El mecanismo es que el ADN del virus herpes es transportado por las células de Langerhans desde la mucosa hasta la piel, donde estimula una respuesta citotóxica local.' },
        { show: ['dia'], note: 'La lesión patognomónica: tres zonas, no dos',
          say: 'Y esa respuesta produce la lesión patognomónica: la diana clásica o en escarapela, con tres zonas concéntricas bien definidas. Un centro oscuro, violáceo o con una microvesícula. Un anillo intermedio pálido y edematoso. Y un halo exterior rojo, brillante, bien delimitado. Guarda el número tres: es la diferencia con la diana atípica de Stevens-Johnson, que solo tiene dos anillos.' },
        { show: ['acr'], note: 'Distribución acral: el otro dato que se pregunta',
          say: 'Y se distribuye de forma simétrica en zonas acrales: el dorso de las manos, las palmas, las muñecas, los antebrazos, los codos y las rodillas, a veces extendiéndose hacia el tronco de forma centrípeta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Eritema multiforme minor versus major',
      cards: [
        { title: 'Eritema multiforme minor', tag: 'La forma más frecuente', kind: 'normal', items: [
          { t: 'Sin mucosas, o compromiso leve de una sola', d: 'Buen estado general, sin fiebre',
            say: 'En la forma minor, las dianas son típicas y de distribución acral, sin compromiso de mucosas, o a lo más un compromiso leve de una sola mucosa, habitualmente la oral. El paciente está en buen estado general, sin fiebre.' },
        ] },
        { title: 'Eritema multiforme major', tag: 'Más extenso, pero sin desprendimiento', kind: 'criteria', items: [
          { t: 'Compromiso franco de 2 o más mucosas', d: 'Con fiebre, pero sin desprendimiento ni Nikolsky',
            say: 'En la forma major, hay compromiso franco de al menos dos mucosas, la oral, la conjuntival o la genital, con fiebre y astenia. Pero, y esto es la clave del tema, a pesar de las erosiones en la boca, nunca hay desprendimiento de la piel en sábanas, y el signo de Nikolsky es siempre negativo. Esa es la línea que lo separa de Stevens-Johnson, aunque la fiebre y el compromiso de mucosas se parezcan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Autolimitado, y con antiviral cuando hay recurrencias',
      cards: [
        { title: 'Manejo sintomático', tag: 'Resuelve solo en 2 a 4 semanas', kind: 'normal', items: [
          { t: 'Antihistamínicos orales y corticoide tópico', d: 'Para el prurito y las lesiones cutáneas',
            say: 'La gran mayoría de las veces, el eritema multiforme se resuelve solo, en dos a cuatro semanas, sin dejar cicatriz. El manejo es sintomático: antihistamínicos orales como cetirizina o desloratadina para el prurito, corticoide tópico en las lesiones de la piel, y enjuagues antisépticos o con lidocaína viscosa si hay dolor oral.' },
        ] },
        { title: 'Aciclovir', tag: 'Solo en 2 escenarios', kind: 'pharma', items: [
          { t: 'Herpes labial activo en el brote agudo', d: 'Aciclovir oral en ese episodio',
            say: 'Si el herpes labial todavía está activo cuando aparece el eritema, se trata ese episodio con aciclovir oral.' },
          { t: 'Recurrente: 3 a 5 brotes al año', d: 'Aciclovir profiláctico continuo por 6 meses',
            say: 'Pero el escenario que más se pregunta es el paciente con eritema multiforme recurrente, con tres a cinco brotes al año, cada uno precedido por un herpes labial visible. Ahí la conducta cambia: aciclovir oral profiláctico y continuo, cuatrocientos miligramos cada doce horas, por seis meses, que previene las recurrencias en más del ochenta por ciento de los casos, y no antihistamínicos ni corticoides de mantención.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la diana al tratamiento, y sin perder de vista a Stevens-Johnson.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Eritema multiforme versus Stevens-Johnson',
      head: ['Criterio', 'Eritema multiforme', 'Síndrome de Stevens-Johnson'],
      rows: [
        { cells: ['Causa principal', 'Infecciosa: virus herpes simple', 'Medicamentosa: fármacos de alto riesgo'],
          say: 'Repasemos con la tabla. La causa: infecciosa, sobre todo por herpes, en el eritema multiforme; medicamentosa en Stevens-Johnson.' },
        { cells: ['Diana', '3 anillos concéntricos', '2 anillos, centro purpúrico o ampollar'],
          say: 'La diana: de tres anillos en el eritema multiforme; de solo dos, atípica, en Stevens-Johnson.' },
        { cells: ['Distribución', 'Acral: manos, codos, rodillas', 'Centrípeta: tronco, cara, cuello'],
          say: 'La distribución: acral en el eritema multiforme; centrípeta, hacia el tronco y la cara, en Stevens-Johnson.' },
        { cells: ['Nikolsky y desprendimiento', 'Negativo, sin desprendimiento', 'Positivo, con desprendimiento'],
          say: 'El signo de Nikolsky y el desprendimiento: ausentes en el eritema multiforme; presentes en Stevens-Johnson. Esta es la pregunta que más se repite.' },
        { cells: ['Manejo', 'Ambulatorio, sintomático', 'Hospitalización, suspender el fármaco'],
          say: 'Y el manejo: ambulatorio y sintomático en el eritema multiforme; hospitalización urgente con suspensión del fármaco en Stevens-Johnson. El error clásico es hospitalizar de más a un eritema multiforme típico, o al revés, subestimar un Stevens-Johnson real.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 26 años consulta por lesiones cutáneas de 2 días de evolución en el dorso de ambas manos y los codos, redondeadas, de 1 a 2 cm, con un centro violáceo, un anillo pálido y un halo rojo bien delimitado. Refiere un episodio de herpes labial hace 9 días, ya en fase de costra. No tiene fiebre, y la mucosa oral está indemne. El signo de Nikolsky es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar de inmediato por sospecha de Stevens-Johnson' },
        { letter: 'B', text: 'Manejo ambulatorio con antihistamínico oral y corticoide tópico' },
        { letter: 'C', text: 'Biopsia cutánea urgente con inmunofluorescencia directa' },
        { letter: 'D', text: 'Prednisona oral en dosis altas por 2 a 3 meses' },
        { letter: 'E', text: 'Traslado a Centro de Quemados por riesgo de desprendimiento' },
      ],
      correct: 'B',
      explanation: 'Dianas de 3 anillos, distribución acral, antecedente de herpes labial 9 días antes, sin fiebre, sin mucosas comprometidas y Nikolsky negativo: eritema multiforme minor. El manejo es ambulatorio y sintomático; no hay indicación de hospitalización, biopsia urgente ni corticoides sistémicos.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintiséis años, con lesiones cutáneas de dos días de evolución en el dorso de ambas manos y los codos, redondeadas, de uno a dos centímetros, con un centro violáceo, un anillo pálido y un halo rojo bien delimitado. Tuvo un herpes labial hace nueve días, ya en fase de costra. No tiene fiebre, y la mucosa oral está indemne. El signo de Nikolsky es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar por sospecha de Stevens-Johnson, manejo ambulatorio con antihistamínico y corticoide tópico, biopsia urgente con inmunofluorescencia, prednisona oral en dosis altas, o traslado a Centro de Quemados. Piénsalo.',
        answer: 'Es la B. La diana de tres anillos, la distribución acral, el antecedente de herpes labial nueve días antes, la ausencia de fiebre y de compromiso mucoso, y el Nikolsky negativo, arman el cuadro típico de un eritema multiforme minor. El manejo es ambulatorio y sintomático. No hay ningún signo de alarma para hospitalizar, biopsiar de urgencia, ni menos trasladar a un Centro de Quemados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un adulto joven de 24 años consulta por lesiones redondeadas eritematosas en el dorso de ambas manos y antebrazos, con un centro purpúrico violáceo rodeado por un anillo pálido edematoso y un halo eritematoso externo. Refiere un episodio de herpes labial hace una semana. No se palpan adenopatías y el signo de Nikolsky es negativo.',
      question: '¿Cuál es el diagnóstico más probable y el agente causal más frecuentemente asociado?',
      options: [
        { letter: 'A', text: 'Síndrome de Stevens-Johnson por ingesta de paracetamol' },
        { letter: 'B', text: 'Eritema multiforme por infección por Virus Herpes Simple' },
        { letter: 'C', text: 'Urticaria multiforme por virus de Epstein-Barr' },
        { letter: 'D', text: 'Penfigoide ampollar por exposición a radiación UV' },
        { letter: 'E', text: 'Lupus eritematoso discoide por fotosensibilidad' },
      ],
      correct: 'B',
      explanation: 'Lesiones en diana de 3 anillos en zonas acrales, con Nikolsky negativo y antecedente de herpes labial 7 a 14 días antes: eritema multiforme por virus herpes simple, la causa de más del 70% de los casos. SSJ tendría Nikolsky positivo y dianas atípicas de 2 anillos.',
      say: {
        stem: 'Vamos con una pregunta del banco. Un adulto joven de veinticuatro años consulta por lesiones redondeadas en el dorso de ambas manos y antebrazos, con un centro purpúrico violáceo, un anillo pálido edematoso y un halo rojo externo. Tuvo un herpes labial hace una semana. No se palpan adenopatías y el signo de Nikolsky es negativo.',
        question: '¿Cuál es el diagnóstico más probable y el agente causal más frecuente?',
        options: 'Las opciones: Stevens-Johnson por paracetamol, eritema multiforme por virus herpes simple, urticaria multiforme por Epstein-Barr, penfigoide por radiación ultravioleta, o lupus discoide por fotosensibilidad. Piénsalo.',
        answer: 'Es la B. La diana de tres anillos en zonas acrales, el Nikolsky negativo, y el herpes labial una semana antes, arman el cuadro típico de eritema multiforme por virus herpes simple, la causa de más del setenta por ciento de los casos. Stevens-Johnson tendría dianas atípicas de dos anillos y Nikolsky positivo. La urticaria multiforme daría habones evanescentes, no dianas fijas de tres anillos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La cuenta de los anillos', tag: '3 anillos, no 2', kind: 'key', items: [
          { t: 'Diana de 3 zonas concéntricas', d: 'Acral, simétrica, tras un herpes labial',
            say: 'Cerremos con las reglas de oro. Cuenta los anillos: tres es eritema multiforme; dos es Stevens-Johnson.' },
        ] },
        { title: 'El Nikolsky manda', tag: 'Negativo aquí', kind: 'alert', items: [
          { t: 'Sin desprendimiento, aunque haya fiebre', d: 'Si es positivo, no es eritema multiforme',
            say: 'El signo de Nikolsky es negativo en el eritema multiforme, incluso en la forma major con fiebre y mucosas. Si es positivo, ya no estás frente a esta entidad.' },
        ] },
        { title: 'El gatillo que se repite', tag: 'Aciclovir profiláctico', kind: 'pharma', items: [
          { t: 'Recurrente por VHS: aciclovir 6 meses', d: 'Previene más del 80% de las recaídas',
            say: 'Y en el paciente con brotes recurrentes ligados al herpes, el aciclovir profiláctico por seis meses previene la gran mayoría de las recaídas. Si te llevas una sola idea de hoy: cuenta los anillos y busca el Nikolsky, y no vas a confundir nunca más estas dos entidades. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Eritema multiforme: de la diana al tratamiento',
    root: N(
      'start', 'Paciente con lesiones en diana, de distribución acral', 'Primero cuenta los anillos y evalúa el Nikolsky',
      'Frente a lesiones en diana, lo primero es contar los anillos concéntricos y buscar el signo de Nikolsky.',
      ['', N(
        'q', '¿La diana tiene 3 anillos y el Nikolsky es negativo?', 'Centro, halo pálido, borde rojo',
        'Tres anillos bien definidos y Nikolsky negativo apuntan a eritema multiforme, no a Stevens-Johnson.',
        ['No, 2 anillos o Nikolsky positivo', N(
          'refer', 'Sospechar Stevens-Johnson', 'Buscar el fármaco y hospitalizar',
          'Una diana atípica de solo dos anillos con Nikolsky positivo cambia por completo la conducta: buscar el fármaco culpable y hospitalizar.',
        )],
        ['Sí, diana típica de 3 anillos', N(
          'q', '¿Hay compromiso de 2 o más mucosas y fiebre?', 'Sin desprendimiento en ningún caso',
          'Confirmada la diana típica, el compromiso de mucosas separa la forma minor de la major, ambas sin desprendimiento.',
          ['No, o solo una mucosa leve', N(
            'do', 'Eritema multiforme minor', 'Manejo ambulatorio sintomático',
            'Sin fiebre y sin compromiso relevante de mucosas: eritema multiforme minor, con antihistamínicos y corticoide tópico.',
          )],
          ['Sí, 2 o más mucosas con fiebre', N(
            'do', 'Eritema multiforme major', 'Manejo sintomático, vigilando hidratación oral',
            'Con fiebre y compromiso de dos o más mucosas, pero sin desprendimiento ni Nikolsky positivo: eritema multiforme major, manejo sintomático y vigilancia de la ingesta oral.',
          )],
        )],
      )],
    ),
  },
};
