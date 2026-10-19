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
          say: 'Y esa respuesta produce la lesión patognomónica: la diana clásica o en escarapela, con tres zonas concéntricas bien definidas. Un centro oscuro, violáceo o con una microvesícula. Un anillo intermedio pálido y edematoso. Y un halo exterior rojo, brillante, bien delimitado. Guarda el número tres: es la diferencia con la diana atípica de Stevens-Johnson, que solo tiene dos anillos. Mira estas manos: lesiones redondas con el centro más oscuro y un anillo rojo alrededor.',
            photo: { src: 'biblioteca/11_dermatologia/derma-12/02_lesiones-en-diana__cto-derma_p15.jpg', label: 'Dianas en las manos', at: 'Mira estas manos', credit: 'Manual CTO Dermatología 14.ª ed., p. 15' } },
        { show: ['acr'], note: 'Distribución acral: el otro dato que se pregunta',
          say: 'Y se distribuye de forma simétrica en zonas acrales: el dorso de las manos, las palmas, las muñecas, los antebrazos, los codos y las rodillas, a veces extendiéndose hacia el tronco de forma centrípeta. Mira este pie: las mismas dianas, en el dorso, de forma simétrica en una zona acral.',
            photo: { src: 'biblioteca/11_dermatologia/derma-12/01_eritema-multiforme__amir-derma_p106.jpg', label: 'Eritema multiforme en el pie', at: 'Mira este pie', credit: 'Manual AMIR Dermatología, p. 106' } },
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
      type: 'points',
      kicker: 'Virus de la piel que se preguntan',
      title: 'Verrugas y molusco contagioso',
      cards: [
        { title: 'Verrugas (VPH)', tag: 'Según el tipo de virus', kind: 'key', items: [
          { t: 'Tipos 1, 2 y 4: vulgares y plantares', d: 'Planas: 3 y 10; condilomas: 6 y 11',
            say: 'Las verrugas las produce el virus papiloma humano. Los tipos uno, dos y cuatro dan las verrugas vulgares y plantares, los tipos tres y diez las planas, y los tipos seis y once los condilomas anogenitales benignos; los tipos dieciséis y dieciocho son los oncogénicos. La verruga vulgar es un nódulo hiperqueratósico rugoso en dedos, manos y rodillas, con puntos negros por capilares trombosados. Mira esta verruga en el labio.',
            photo: { src: 'biblioteca/19_dermatologia/derma-12/11_verruga-vulgar__fitzpatrick_p1955.jpg', label: 'Verruga vulgar', at: 'Mira esta verruga', credit: "Fitzpatrick's Dermatology in General Medicine, p. 1955" } },
          { t: 'Plantar: duele al comprimir y rompe los dermatoglifos', d: 'El callo conserva los surcos',
            say: 'La verruga plantar es endofítica, duele al comprimirla de lado e interrumpe los dermatoglifos; el callo, en cambio, los conserva.' },
          { t: 'Ácido salicílico y crioterapia', d: 'Derivar si no responde en 3 meses o hay condilomas',
            say: 'En niños inmunocompetentes se resuelven solas en cerca de dos años. Se trata con ácido salicílico diario y lijado, o crioterapia cada dos a tres semanas, y se deriva si no hay respuesta en tres meses, si hay inmunosupresión, lesiones atípicas o condilomas.' },
        ] },
        { title: 'Molusco contagioso', tag: 'Poxvirus', kind: 'criteria', items: [
          { t: 'Pápulas perladas umbilicadas de 2 a 5 mm', d: 'Niños; en adultos, genital o VIH',
            say: 'El molusco contagioso lo causa un poxvirus: pápulas perladas, color piel, de dos a cinco milímetros, con una depresión central y contenido caseoso. Mira estas pápulas perladas junto al ojo de un niño: son molusco contagioso. En niños se asocia a piscinas y atopia; en adultos, a transmisión sexual o, si son múltiples y gigantes, a VIH.',
            photo: { src: 'biblioteca/11_dermatologia/derma-12/12_molusco-contagioso-periocular__kumar-clark_p1652.jpg', label: 'Molusco contagioso', at: 'Mira estas pápulas perladas', credit: 'Kumar & Clark, Clinical Medicine, Fig. 45.28' } },
          { t: 'Autolimitado; curetaje o crioterapia', d: 'Evitar el rascado y compartir toallas',
            say: 'Se resuelve solo en seis a doce meses, y se puede observar o tratar con curetaje, crioterapia o hidróxido de potasio tópico. Evita el rascado, que autoinocula, y en un adulto con muchas lesiones descartas VIH.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Virus de la piel que se preguntan',
      title: 'Herpes simple y herpes zóster',
      cards: [
        { title: 'Herpes simple', tag: 'VHS-1 labial, VHS-2 genital', kind: 'key', items: [
          { t: 'Vesículas en racimo tras ardor y prurito', d: 'Costras a los 7 a 10 días',
            say: 'El herpes simple tipo uno produce el herpes labial y el tipo dos el genital. En la recurrencia hay un pródromo de ardor y prurito y luego vesículas agrupadas en racimo sobre una base roja, que se erosionan y forman costras en siete a diez días. Las desencadenan la fiebre, el sol, el estrés y la menstruación.' },
          { t: 'Aciclovir oral', d: 'Supresión si hay 6 o más episodios al año',
            say: 'El tratamiento oral es aciclovir por siete a diez días en la primoinfección y por cinco días en las recurrencias. Con seis o más episodios al año se indica supresión, y en inmunosuprimidos o formas graves, aciclovir endovenoso.' },
          { t: 'Complicaciones que obligan a actuar', d: 'Kaposi, queratitis, neonatal, encefalitis',
            say: 'Las complicaciones son el eccema herpético de Kaposi, que es una urgencia, la queratitis herpética, que se deriva a oftalmología, el eritema multiforme recurrente, la encefalitis y el herpes neonatal.' },
        ] },
        { title: 'Herpes zóster', tag: 'Reactivación del VVZ', kind: 'alert', items: [
          { t: 'Dolor y luego vesículas en un dermatoma', d: 'Unilateral, no cruza la línea media',
            say: 'El herpes zóster es la reactivación del virus varicela-zóster en un ganglio de la raíz dorsal, frecuente sobre los cincuenta años o con inmunosupresión. Tras uno a cinco días de dolor o ardor, aparece una placa roja con vesículas agrupadas en un dermatoma, unilateral, que no cruza la línea media. Mira este zóster diseminado: lesiones en distintas etapas, con pústulas y costras.',
            photo: { src: 'biblioteca/19_dermatologia/derma-12/10_zoster-diseminado__harrison_p1522.jpg', label: 'Zóster diseminado', at: 'Mira este zóster diseminado', credit: "Harrison's Principles of Internal Medicine, 21.ª ed., p. 1522" } },
          { t: 'Hutchinson, Ramsay Hunt, neuralgia', d: 'Oftálmico y óptico: derivar de urgencia',
            say: 'Las vesículas en la punta de la nariz, el signo de Hutchinson, anuncian compromiso ocular y obligan a derivar de urgencia. El síndrome de Ramsay Hunt une vesículas en el oído, parálisis facial periférica e hipoacusia. Y la neuralgia posherpética es un dolor de más de tres meses.' },
          { t: 'Antiviral dentro de las 72 horas', d: 'Aciclovir, valaciclovir o famciclovir por 7 días',
            say: 'Se da un antiviral idealmente dentro de las setenta y dos horas, aciclovir, valaciclovir o famciclovir por siete días, con analgesia escalonada. Los corticoides no son de rutina. Mientras haya vesículas o costras húmedas, contagia varicela a quien no la ha tenido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Un examen rápido y barato',
      title: 'Test de Tzanck',
      cards: [
        { title: 'Cómo se hace', tag: 'Vesícula reciente', kind: 'key', items: [
          { t: 'Destechar una vesícula reciente, no costrosa', d: 'Raspar el piso y teñir con Giemsa',
            say: 'El test de Tzanck es un citodiagnóstico rápido y barato que el médico general debe saber interpretar. Destechas una vesícula reciente, no una costrosa, raspas suavemente el piso con un bisturí, extiendes en un portaobjetos y tiñes con Giemsa, Wright o azul de toluidina.' },
        ] },
        { title: 'Qué se ve', tag: 'Dos patrones', kind: 'criteria', items: [
          { t: 'Herpes: células gigantes multinucleadas', d: 'Vidrio esmerilado; no distingue herpes simple de zóster',
            say: 'En el herpes simple y en el zóster ves células gigantes multinucleadas, con núcleos en vidrio esmerilado y moldeamiento nuclear. Mira esta célula gigante multinucleada en el extendido. Pero no distingue entre herpes simple, zóster y varicela.',
            photo: { src: 'biblioteca/11_dermatologia/derma-12/13_tzanck-celulas-gigantes__knoop_p947.jpg', label: 'Célula gigante multinucleada', at: 'Mira esta célula gigante', credit: 'The Atlas of Emergency Medicine (Knoop), p. 947' } },
          { t: 'Pénfigo: queratinocitos acantolíticos aislados', d: 'Redondeados, sin multinucleación',
            say: 'En el pénfigo vulgar ves queratinocitos acantolíticos redondeados y aislados, sin multinucleación. Así orienta entre una erosión herpética y una enfermedad ampollar autoinmune.' },
        ] },
        { title: 'Su límite', tag: 'Sensibilidad 60 a 70%', kind: 'alert', items: [
          { t: 'Un Tzanck negativo no descarta herpes', d: 'Confirmar con PCR, IFD o cultivo viral',
            say: 'Su sensibilidad es de sesenta a setenta por ciento: un test negativo no descarta herpes, y se confirma con PCR, inmunofluorescencia directa o cultivo viral. En el eritema multiforme por herpes sirve para documentar el virus.' },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 86",
      "stem": "Un niño de 8 años presenta una lesión en la cara lateral del primer ortejo derecho. Al examen físico se aprecia una lesión hiperqueratósica, de superficie rugosa, con puntos negros en su superficie.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Queratosis seborreica"
        },
        {
          "letter": "B",
          "text": "Melanoma"
        },
        {
          "letter": "C",
          "text": "Panadizo"
        },
        {
          "letter": "D",
          "text": "Verruga vulgar"
        },
        {
          "letter": "E",
          "text": "Cuerpo extraño periungueal"
        }
      ],
      "correct": "D",
      "explanation": "Una pápula hiperqueratósica rugosa con puntos negros, que son capilares trombosados, en la zona periungueal de un niño es una verruga vulgar por virus papiloma humano. La queratosis seborreica es del adulto mayor y el panadizo es una infección aguda dolorosa con pus.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un niño de ocho años tiene una lesión en el costado del primer ortejo derecho: es hiperqueratósica, rugosa, y tiene puntos negros en su superficie.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: queratosis seborreica, melanoma, panadizo, verruga vulgar, o cuerpo extraño. Piénsalo.",
        "answer": "Es la D. Hiperqueratosis rugosa con puntitos negros, que son capilares trombosados, es la firma de la verruga vulgar. El melanoma tienta por los puntos negros, pero en un niño de ocho años, y con superficie verrucosa, es extraordinariamente improbable."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.4.006 · Test TZANCK",
      "stem": "Mujer de 25 años con vesículas agrupadas sobre base eritematosa en el labio superior, precedidas de ardor. Se realiza raspado de la base de una vesícula reciente con tinción de Giemsa (test de Tzanck).",
      "question": "¿Qué hallazgo se espera y cuál es su principal limitación?",
      "options": [
        {
          "letter": "A",
          "text": "Células gigantes multinucleadas; no distingue entre virus herpes simple y varicela-zóster"
        },
        {
          "letter": "B",
          "text": "Hifas tabicadas; no distingue dermatofitos"
        },
        {
          "letter": "C",
          "text": "Cocos gram positivos en racimos; no distingue S. aureus de S. epidermidis"
        },
        {
          "letter": "D",
          "text": "Ácaros; baja sensibilidad"
        },
        {
          "letter": "E",
          "text": "Células de Sézary; requiere citometría"
        }
      ],
      "correct": "A",
      "explanation": "El test de Tzanck muestra queratinocitos acantolíticos y células gigantes multinucleadas en lesiones por herpes simple y varicela-zóster, pero no diferencia entre ellos y tiene sensibilidad moderada. La PCR viral es hoy el examen de elección. También muestra células acantolíticas en el pénfigo vulgar.",
      "say": {
        "stem": "Mujer de veinticinco años con vesículas agrupadas en el labio, precedidas de ardor. Se hace un raspado con test de Tzanck.",
        "question": "¿Qué hallazgo se espera y cuál es su limitación?",
        "options": "Las opciones: células gigantes multinucleadas que no distinguen herpes simple de varicela zóster, hifas, cocos en racimo, ácaros o células de Sézary. Piénsalo.",
        "answer": "Es la A. Se ven células gigantes multinucleadas, pero el test no distingue herpes simple de varicela zóster. Las hifas tientan porque también se buscan en un raspado, pero corresponden al examen micológico."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La cuenta de los anillos', tag: '3 anillos, no 2', kind: 'key', items: [
          { t: 'Diana de 3 zonas concéntricas', d: 'Acral, simétrica, tras un herpes labial',
            say: 'Cerremos con las reglas de oro. Cuenta los anillos: tres es eritema multiforme; dos es Stevens-Johnson.' },
          { t: 'Tzanck: células gigantes multinucleadas', d: 'Herpes; sensibilidad 60 a 70%, no descarta',
            say: 'Y si destechas una vesícula y ves células gigantes multinucleadas en el Tzanck, es herpes; pero con sensibilidad de sesenta a setenta por ciento, un Tzanck negativo no lo descarta.' },
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
