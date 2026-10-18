// Clase 11.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato). Última clase del libro.
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué heridas se suturan, cuáles no, y quién necesita la vacuna del tétanos',
      say: 'Bienvenido a la última clase de cirugía. Terminamos con las heridas traumáticas y las mordeduras. Primero, cómo se maneja y se sutura una herida menor. Y después, un formato que el examen repite: te dan una herida y un estado de vacunación, y decides vacuna, inmunoglobulina, o las dos. Dos preguntas ordenan todo, y te las dejo claras.',
    },

    {
      type: 'points',
      kicker: 'Herida menor',
      title: 'Irrigar, explorar y decidir si se cierra',
      cards: [
        { title: 'Contusión', tag: 'Sin herida abierta', kind: 'normal', items: [
          { t: 'Reposo, hielo, compresión, elevación', d: 'Hielo 15 a 20 min cada 2 a 3 h por 48 h',
            say: 'Empecemos por lo simple. En una contusión se indican reposo, hielo de quince a veinte minutos cada dos o tres horas durante las primeras cuarenta y ocho horas, compresión, elevación y analgesia.' },
        ] },
        { title: 'Herida menor', tag: 'Nivel completo', kind: 'key', items: [
          { t: 'Anestesiar e irrigar a presión', d: 'Suero fisiológico; desbridar lo mínimo',
            say: 'En la herida abierta, primero preguntas mecanismo, hora y vacunación, anestesias, controlas la hemostasia, e irrigas abundantemente con suero fisiológico a presión. Exploras y desbridas solo lo mínimo necesario.' },
          { t: 'Limpia y reciente: se cierra', d: 'Antes de 6 a 8 h; en la cara hasta 24 h',
            say: 'Se cierra de inmediato si es limpia y reciente, idealmente antes de seis a ocho horas; en la cara, hasta veinticuatro horas.' },
          { t: 'Sucia, punzante o mordedura: abierta', d: 'Cierre diferido a los 3 a 5 días',
            say: 'Las heridas sucias, antiguas, punzantes o por mordedura no se suturan: se dejan abiertas y se cierran de forma diferida a los tres a cinco días si no hay infección. Y no se dan antibióticos profilácticos de rutina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'Sutura, retiro de puntos y hemostasia',
      cards: [
        { title: 'Sutura', tag: 'Nivel realizar', kind: 'key', items: [
          { t: 'Hilo según el plano y la zona', d: 'Piel: no reabsorbible; profundo: reabsorbible',
            say: 'En la piel se usan hilos no reabsorbibles monofilamento, como nylon o polipropileno, y en los planos profundos, reabsorbibles, para eliminar el espacio muerto. El calibre depende de la zona: hilo fino, cinco ceros o seis ceros, en la cara, y tres ceros o cuatro ceros en tronco y extremidades.' },
          { t: 'Punto simple con eversión', d: 'A 0,5-1 cm del borde; nudo cuadrado',
            say: 'En el punto simple la aguja entra perpendicular, a medio o un centímetro del borde, y sale simétrica, logrando eversión de los bordes. Se anuda con nudo cuadrado sin estrangular, con el nudo a un lado de la herida.' },
        ] },
        { title: 'Retiro de puntos', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Cara: 3 a 5 días', d: 'Cuero cabelludo: 7 días',
            say: 'El retiro de puntos depende de la zona. En la cara, a los tres a cinco días; en el cuero cabelludo, a los siete.' },
          { t: 'Tronco: 7 a 10 días', d: 'Extremidades y manos: 10 a 14 días',
            say: 'En el tronco, de siete a diez días, y en extremidades y manos, de diez a catorce, con más tiempo sobre las articulaciones.' },
        ] },
        { title: 'Hemostasia', tag: 'Nivel realizar', kind: 'alert', items: [
          { t: 'Presión directa 10 a 15 minutos', d: 'Y elevar el miembro',
            say: 'Para la hemostasia, la primera medida es la presión directa firme con una compresa, diez a quince minutos, y elevar el miembro.' },
          { t: 'Torniquete si es exanguinante', d: '5 a 7 cm sobre la herida; anotar la hora',
            say: 'Si fracasa, o es una hemorragia exanguinante de extremidad, se coloca un torniquete cinco a siete centímetros sobre la herida, anotando la hora, y solo se retira en pabellón.' },
          { t: 'Ligadura bajo visión', d: 'Nunca pinzar a ciegas: nervios',
            say: 'Y para ligar, identificas el vaso bajo visión. Nunca pinzas a ciegas en el fondo de la herida, por el riesgo de lesionar nervios en el cuello, la axila o la mano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Herida tetanígena',
      title: '¿Qué hace que una herida sea sucia?',
      cards: [
        { title: 'Herida tetanígena', tag: 'Alto riesgo', kind: 'alert', items: [
          { t: 'Contaminada con tierra o heces', d: 'También saliva o restos vegetales',
            say: 'Antes de decidir la profilaxis, tienes que reconocer qué herida es tetanígena, porque de ahí sale la mitad de la decisión. Lo es la que está contaminada con tierra, heces o saliva, ya que ahí es donde vive la bacteria del tétanos.' },
          { t: 'Punzante y profunda', d: 'Un clavo es el ejemplo clásico',
            say: 'También la herida punzante y profunda, con el clavo oxidado como el ejemplo que siempre usa el examen, porque ese ambiente sin oxígeno es justo el que la bacteria necesita para multiplicarse.' },
          { t: 'Aplastamiento o tejido muerto', d: 'O más de seis horas de evolución',
            say: 'Y la que tiene aplastamiento, tejido desvitalizado, o más de seis horas desde que ocurrió. Cualquiera de estas la hace tetanígena.' },
        ] },
        { title: 'Herida limpia', tag: 'Bajo riesgo', kind: 'normal', items: [
          { t: 'Superficial y reciente', d: 'Sin tierra ni tejido muerto',
            say: 'En cambio, la herida limpia es superficial, reciente, y sin ninguno de esos elementos contaminantes. Piensa por ejemplo en un corte limpio con un cuchillo de cocina, recién ocurrido.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Profilaxis antitetánica',
      title: 'Vacuna, inmunoglobulina, o ambas',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Herida en urgencia', s: '¿Cuántas dosis previas tiene?' },
        { id: 'com', col: 1, row: 0, k: 'q', t: 'Esquema completo', s: 'Tres dosis o más' },
        { id: 'inc', col: 1, row: 3, k: 'q', t: 'Incompleto o desconocido', s: 'Menos de tres dosis' },
        { id: 'cl1', col: 2, row: 0, k: 'good', t: 'Limpia: vacuna si pasaron 10 años', s: 'Nunca inmunoglobulina' },
        { id: 'su1', col: 2, row: 1, k: 'good', t: 'Sucia: vacuna si pasaron 5 años', s: 'Nunca inmunoglobulina' },
        { id: 'cl2', col: 2, row: 3, k: 'risk', t: 'Limpia: vacuna siempre', s: 'Sin inmunoglobulina' },
        { id: 'su2', col: 2, row: 4, k: 'alert', t: 'Sucia: vacuna e inmunoglobulina', s: 'Juntas, en sitios distintos' },
      ],
      edges: [
        { from: 'ini', to: 'com' }, { from: 'ini', to: 'inc' },
        { from: 'com', to: 'cl1' }, { from: 'com', to: 'su1' },
        { from: 'inc', to: 'cl2' }, { from: 'inc', to: 'su2' },
      ],
      steps: [
        { show: ['ini'], note: 'Dos preguntas deciden todo',
          say: 'Toda la profilaxis antitetánica se decide con dos preguntas: cuántas dosis de vacuna tiene el paciente, y si la herida es limpia o tetanígena.' },
        { show: ['com'], note: 'Con memoria inmunológica ya formada',
          say: 'Si el esquema está completo, con tres dosis o más, el paciente ya tiene memoria inmunológica.' },
        { show: ['cl1', 'su1'], note: 'La inmunoglobulina casi nunca aplica aquí',
          say: 'Con herida limpia, solo necesita un refuerzo si pasaron más de diez años. Con herida sucia, el corte baja a cinco años. Y en ninguno de los dos casos necesita inmunoglobulina, porque su memoria responde sola.' },
        { show: ['inc'], note: 'Aquí está la pregunta que más se repite',
          say: 'Pero si el esquema es incompleto, con menos de tres dosis, o simplemente no lo sabes, el paciente no tiene esa memoria protectora.' },
        { show: ['cl2'], note: 'Solo vacuna, para iniciar el esquema',
          say: 'Con herida limpia, se da vacuna siempre, para partir o completar el esquema.' },
        { show: ['su2'], note: 'La combinación que se pregunta siempre',
          say: 'Y con herida sucia, aquí está la combinación clave: vacuna e inmunoglobulina juntas, en dos sitios distintos del cuerpo, y con jeringas distintas. La vacuna genera la protección a largo plazo, y la inmunoglobulina, doscientas cincuenta unidades por vía intramuscular, cubre de inmediato mientras esa protección todavía no aparece. Esta es la pareja que el examen pregunta una y otra vez.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mordeduras',
      title: 'Perro, gato y humano: no es lo mismo',
      cards: [
        { title: 'Quién muerde qué', tag: 'Distintos gérmenes', kind: 'normal', items: [
          { t: 'Gato: colmillos finos', d: 'Inoculan Pasteurella muy profundo',
            say: 'Las mordeduras cambian según quién muerde, y eso llega a tener hasta la mitad de riesgo de infección de una a otra. El gato tiene colmillos finos que actúan como agujas, e inoculan la Pasteurella muy profundo, en tendones y hueso: es la que más se infecta de las tres. Mira esta mano: una punción pequeña, y sin embargo ya hinchada y enrojecida por la infección.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-18/atlas_358_mordedura_gato_mano.jpg', label: 'Mordedura de gato infectada', at: 'Mira esta mano', credit: 'Open-i (NLM), CC BY' } },
          { t: 'Perro: desgarro y aplastamiento', d: 'Más daño de tejido, menos infección',
            say: 'El perro produce más desgarro y aplastamiento del tejido, con gérmenes distintos, pero se infecta un poco menos que la del gato, porque sus colmillos no penetran tan profundo. Esta mordedura de perro en la cara de un niño muestra lo grave que puede ser el desgarro.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-18/01_mordedura_perro__bailey_p48.jpg', label: 'Mordedura de perro', at: 'Esta mordedura de perro', credit: 'Bailey & Love 27.ª ed., Fig. 3.4' } },
          { t: 'Humana: la más agresiva', d: 'Flora oral con Eikenella',
            say: 'Y la mordedura humana es la más agresiva de todas, por su flora oral rica en Eikenella y anaerobios, sobre todo cuando es en la mano, con el puño cerrado contra un diente.' },
        ] },
        { title: 'El mismo tratamiento para todas', tag: 'Regla de cierre', kind: 'key', items: [
          { t: 'Lavar con suero a presión', d: 'Es lo que más baja la carga bacteriana',
            say: 'Pero el manejo inicial es el mismo para las tres: irrigar con suero fisiológico a presión, que es lo que más reduce la carga bacteriana.' },
          { t: 'No suturar de entrada', d: 'Deja cicatrizar por segunda intención',
            say: 'Y la regla que más se pregunta: no suturas una mordedura de entrada. Se deja cicatrizar por segunda intención, o se cierra diferido a las cuarenta y ocho horas, porque cerrarla de inmediato atrapa la infección adentro.' },
          { t: 'Amoxicilina con ácido clavulánico', d: 'El antibiótico de elección',
            say: 'El antibiótico de elección para las tres es amoxicilina con ácido clavulánico, porque cubre bien la Pasteurella y la Eikenella.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Casos especiales',
      title: 'La excepción facial y la rabia',
      cards: [
        { title: 'Mordedura en la cara', tag: 'La única excepción', kind: 'alert', items: [
          { t: 'Sí se puede suturar', d: 'Solo por motivo estético',
            say: 'Dijimos que la mordedura no se sutura, pero hay una excepción: la herida facial extensa, donde el resultado estético importa mucho.' },
          { t: 'Lavado masivo primero', d: 'Y cobertura antibiótica estricta',
            say: 'Ahí se puede cerrar en forma laxa, pero solo después de un lavado quirúrgico masivo, y con cobertura antibiótica estricta desde el inicio.' },
          { t: 'Buscar lesiones asociadas', d: 'Nervio facial, conducto de Stenon, párpado',
            say: 'En cualquier herida profunda de la cara, busca lesiones asociadas: nervio facial y conducto de Stenon en la mejilla, fracturas, el canalículo lagrimal o el párpado, y hematoma septal o auricular. Se derivan las que tienen lesión nerviosa o de conductos, pérdida de tejido o compromiso del borde labial o palpebral.' },
        ] },
        { title: 'Profilaxis antirrábica', tag: 'Depende del animal', kind: 'key', items: [
          { t: 'Perro observable diez días', d: 'Se espera antes de vacunar',
            say: 'Y sobre la rabia: si el perro que muerde se puede observar por diez días y se mantiene sano, no necesitas vacunar.' },
          { t: 'Animal no ubicable o silvestre', d: 'Vacunas de inmediato, sin esperar',
            say: 'Pero si es un animal silvestre, un murciélago, o simplemente no lo puedes ubicar para observarlo, vacunas de inmediato, sin esperar ningún plazo.' },
          { t: 'Lavar 10 a 15 minutos y notificar', d: 'Agua y jabón; el reservorio es el murciélago',
            say: 'En todos los casos, lavas la herida de inmediato con abundante agua y jabón, al menos diez a quince minutos, y notificas. En Chile, el reservorio es sobre todo el murciélago.' },
          { t: 'Vacuna: días 0, 3, 7 y 14', d: 'Exposición grave: más inmunoglobulina',
            say: 'La profilaxis es con vacuna antirrábica de cultivo celular, cuatro dosis intramusculares, en los días cero, tres, siete y catorce. Si la exposición es grave, en cabeza, cuello, mucosas, mordeduras múltiples o por murciélago, se suma inmunoglobulina antirrábica humana, veinte unidades por kilo, infiltrada en la herida y el resto por vía intramuscular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Mano y cicatrices',
      title: 'Herida de la mano y cicatrices viciosas',
      cards: [
        { title: 'Herida de la mano', tag: 'Nivel completo', kind: 'key', items: [
          { t: 'Examinar antes de anestesiar', d: 'Sensibilidad, tendón flexor y perfusión',
            say: 'Antes de anestesiar una herida de la mano, examinas la sensibilidad con discriminación de dos puntos, la función de los tendones flexores flexionando las interfalángicas, y la perfusión. Si no, no sabrás qué estaba dañado antes de tocarla.' },
          { t: 'Complicada: se deriva', d: 'Tendón, nervio, vasos, fractura expuesta',
            say: 'Son complicadas, y se derivan, las que tienen sección de tendón, de nervio digital o de vasos, fractura expuesta, aplastamiento, inyección a presión o amputación. Mira esta herida avulsiva de la mano: bordes irregulares y pérdida de tejido, un ejemplo de herida complicada.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-18/06_herida-avulsiva-mano__bailey-love_p047.jpg', label: 'Herida avulsiva de la mano', at: 'Mira esta herida avulsiva', credit: 'Bailey & Love 27.ª ed., p. 47' } },
          { t: 'Parte amputada: gasa, bolsa, hielo', d: 'Sin contacto directo con el hielo',
            say: 'La parte amputada se envuelve en gasa húmeda con suero, se pone en una bolsa, y esa bolsa va sobre hielo, nunca en contacto directo con el hielo.' },
          { t: 'Herida sobre los nudillos', d: 'Mordedura humana hasta demostrar lo contrario',
            say: 'Y una trampa clásica: una herida sobre los nudillos tras un golpe de puño es una mordedura humana hasta demostrar lo contrario. Se trata abierta, con amoxicilina más ácido clavulánico.' },
        ] },
        { title: 'Cicatrices viciosas', tag: 'Sospechar y derivar', kind: 'normal', items: [
          { t: 'Hipertrófica o queloide', d: 'El queloide sobrepasa el borde y no regresa',
            say: 'Las cicatrices viciosas son las anormales. La hipertrófica es elevada pero se limita a la herida; el queloide sobrepasa el borde y no regresa. Mira este queloide del lóbulo de la oreja tras una perforación.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-18/05_queloide-lobulo__nelson_p5268.jpg', label: 'Queloide del lóbulo', at: 'Mira este queloide', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5268' } },
          { t: 'Prevención y tratamiento', d: 'Cierre sin tensión; silicona; corticoide',
            say: 'Se favorecen por tensión, infección, cierre por segunda intención y localización, como el esternón. Se previenen con buen aseo y cierre sin tensión; el tratamiento incluye láminas de silicona, presoterapia y corticoide intralesional, y plastía en Z en las contracturas. La escisión simple de un queloide recidiva, así que se deriva.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las dos preguntas del tétanos',
      images: [
        { src: 'animaciones/cirugia-18/A1_tetanos_decision.mp4', label: 'Esquema previo y tipo de herida', credit: 'Gráfico propio · Animación propia' },
      ],
      steps: [
        { note: 'Dosis previas y tipo de herida',
          say: 'Mira cómo se arma la decisión. Primero, las dosis previas: con esquema completo hay memoria inmunológica, y con esquema incompleto o desconocido no la hay. Después, el tipo de herida. Solo cuando no hay memoria y la herida es sucia aparecen juntas la vacuna y la inmunoglobulina.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol completo, desde la herida hasta la decisión final.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Vacunación previa y tipo de herida',
      head: ['Vacunación previa', 'Herida limpia', 'Herida sucia'],
      rows: [
        { cells: ['Incierta o menos de 3 dosis', 'Solo vacuna', 'Vacuna + inmunoglobulina'],
          say: 'Repasemos en la tabla. Con vacunación incierta o menos de tres dosis: en herida limpia, solo vacuna; en herida sucia, vacuna e inmunoglobulina juntas.' },
        { cells: ['3 dosis, última hace menos de 5 años', 'Nada', 'Nada'],
          say: 'Con esquema completo y la última dosis hace menos de cinco años: no necesita nada, en ninguna de las dos heridas.' },
        { cells: ['3 dosis, última hace 5 a 10 años', 'Nada', 'Refuerzo con vacuna'],
          say: 'Entre cinco y diez años desde la última dosis: en herida limpia, nada; en herida sucia, un refuerzo de vacuna.' },
        { cells: ['3 dosis, última hace más de 10 años', 'Refuerzo con vacuna', 'Refuerzo con vacuna'],
          say: 'Y con más de diez años desde la última dosis: refuerzo de vacuna en ambos tipos de herida. En estos tres últimos casos nunca hay inmunoglobulina, porque el paciente ya tiene memoria inmunológica.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años sufre una herida cortante de 4 centímetros en la pierna izquierda con una lata oxidada, visiblemente sucia con tierra. Refiere esquema de vacunación al día, con la última dosis de refuerzo hace 7 años.',
      question: '¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
      options: [
        { letter: 'A', text: 'No requiere ninguna intervención porque la última dosis fue hace menos de 10 años' },
        { letter: 'B', text: 'Administrar únicamente una dosis de refuerzo de vacuna antitetánica' },
        { letter: 'C', text: 'Administrar únicamente inmunoglobulina antitetánica' },
        { letter: 'D', text: 'Administrar vacuna e inmunoglobulina antitetánica simultáneamente' },
        { letter: 'E', text: 'Indicar penicilina benzatina en lugar de profilaxis antitetánica' },
      ],
      correct: 'B',
      explanation: 'Con esquema completo previo y herida sucia, el corte para el refuerzo es de 5 años, no de 10. Como pasaron 7 años, corresponde una dosis de refuerzo de vacuna. No requiere inmunoglobulina, porque conserva memoria inmunológica que responde con el toxoide.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y ocho años sufre una herida cortante de cuatro centímetros en la pierna izquierda con una lata oxidada, visiblemente sucia con tierra. Cuenta que su esquema de vacunación está al día, y que su última dosis de refuerzo fue hace siete años.',
        question: '¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
        options: 'Las opciones: no hacer nada porque fue hace menos de diez años, dar solo un refuerzo de vacuna, dar solo inmunoglobulina, dar vacuna e inmunoglobulina juntas, o indicar penicilina benzatina en su lugar. Piénsalo.',
        answer: 'La respuesta es la B. Aquí está la trampa: el corte de diez años es para la herida limpia, pero esta es una herida sucia, y ahí el corte baja a cinco años. Como pasaron siete, corresponde el refuerzo. Y no necesita inmunoglobulina, porque su esquema previo completo ya le dio memoria inmunológica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 93',
      stem: 'Niño de 7 años es mordido por un perro callejero en el brazo derecho.',
      question: 'Además del manejo de la herida, ¿cuál es la conducta más adecuada respecto a la profilaxis de la rabia?',
      options: [
        { letter: 'A', text: 'Observar al niño por 10 días' },
        { letter: 'B', text: 'Vacunar al niño solo si el perro presenta síntomas' },
        { letter: 'C', text: 'Administrar la vacuna antirrábica al niño' },
        { letter: 'D', text: 'Vacunar al niño solo si el perro muere' },
        { letter: 'E', text: 'Administrar inmunoglobulina antirrábica al niño' },
      ],
      correct: 'C',
      explanation: 'La normativa vigente indica vacunar de inmediato cuando el animal agresor no es observable, como ocurre con un perro callejero, independiente de si hubo o no provocación. La observación por 10 días se reserva para animales identificables y con dueño conocido.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Niño de siete años es mordido por un perro callejero en el brazo derecho.',
        question: 'Además del manejo de la herida, la pregunta es cuál es la conducta más adecuada respecto a la profilaxis de la rabia.',
        options: 'Las opciones: observarlo por diez días, vacunarlo solo si el perro tiene síntomas, darle la vacuna antirrábica, vacunarlo solo si el perro muere, o darle inmunoglobulina antirrábica. Piénsalo.',
        answer: 'La respuesta es la C, vacunarlo ahora. La observación de diez días solo sirve cuando el animal es identificable y se le puede seguir. Un perro callejero no es observable, así que la conducta es vacunar de inmediato, sin esperar nada del animal.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.3.002 · Mordeduras de animales",
      "stem": "Hombre de 30 años es mordido en el dorso de la mano por su perro, que está vacunado y es observable. Consulta 3 horas después con dos heridas punzantes de 0,5 cm, sin compromiso tendíneo. Tiene esquema antitetánico completo, con refuerzo hace 3 años.",
      "question": "Además del aseo profuso de la herida, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Sutura primaria de las heridas y alta sin antibióticos"
        },
        {
          "letter": "B",
          "text": "Vacunación antirrábica inmediata"
        },
        {
          "letter": "C",
          "text": "Dejar las heridas abiertas, indicar amoxicilina con ácido clavulánico profiláctica y observar al perro por 10 días"
        },
        {
          "letter": "D",
          "text": "Cefadroxilo oral y cierre con adhesivo tisular"
        },
        {
          "letter": "E",
          "text": "Inmunoglobulina antitetánica y vacuna antitetánica"
        }
      ],
      "correct": "C",
      "explanation": "Las mordeduras en la mano y las heridas punzantes tienen alto riesgo de infección, por lo que no se suturan y se indica amoxicilina con ácido clavulánico, que cubre Pasteurella y anaerobios. Con un perro vacunado y observable no se vacuna contra la rabia: se observa al animal 10 días. Con refuerzo antitetánico hace 3 años no requiere profilaxis.",
      "say": {
        "stem": "Hombre de treinta años mordido en el dorso de la mano por su propio perro, vacunado y observable. Consulta a las tres horas con dos heridas punzantes pequeñas, sin lesión de tendones. Su último refuerzo antitetánico fue hace tres años.",
        "question": "Además del aseo profuso, ¿cuál es la conducta más adecuada?",
        "options": "Las opciones: suturar y dar el alta sin antibióticos, vacuna antirrábica inmediata, dejar abiertas con amoxicilina clavulánico y observar al perro diez días, cefadroxilo con adhesivo, o inmunoglobulina y vacuna antitetánica. Piénsalo.",
        "answer": "Es la C. Mano y herida punzante son alto riesgo de infección, así que no se cierran y se cubren con amoxicilina con clavulánico. La vacuna antirrábica tienta, pero con un perro conocido, vacunado y observable basta con vigilarlo diez días."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.025 · Heridas y contusiones menores",
      "stem": "Hombre de 40 años consulta por una herida cortante de 5 cm en la pierna, producida con un vidrio sucio hace 20 horas. Los bordes están levemente eritematosos, con restos de tierra, sin compromiso de estructuras profundas. Tiene esquema antitetánico completo con refuerzo hace 2 años.",
      "question": "¿Cuál es el manejo más adecuado de la herida?",
      "options": [
        {
          "letter": "A",
          "text": "Sutura primaria inmediata tras un aseo breve"
        },
        {
          "letter": "B",
          "text": "Antibiótico oral y sutura primaria"
        },
        {
          "letter": "C",
          "text": "Cierre con adhesivo tisular"
        },
        {
          "letter": "D",
          "text": "Aseo quirúrgico con debridamiento, no cerrar en forma primaria, curaciones y cierre diferido o por segunda intención"
        },
        {
          "letter": "E",
          "text": "Vendaje compresivo sin aseo"
        }
      ],
      "correct": "D",
      "explanation": "Una herida contaminada y de más de 12 a 24 horas de evolución, en zona no facial, tiene alto riesgo de infección si se cierra primariamente. Se realiza aseo profuso y debridamiento, se deja abierta con curaciones y se cierra en forma diferida o por segunda intención.",
      "say": {
        "stem": "Hombre de cuarenta años con una herida cortante de cinco centímetros en la pierna, hecha con un vidrio sucio hace veinte horas. Los bordes están algo rojos y con tierra, sin lesión profunda. Su refuerzo antitetánico fue hace dos años.",
        "question": "¿Cuál es el manejo más adecuado de la herida?",
        "options": "Las opciones: sutura primaria tras un aseo breve, antibiótico con sutura, adhesivo tisular, aseo con debridamiento sin cierre primario o vendaje sin aseo. Piénsalo.",
        "answer": "Es la D. Contaminada y con veinte horas, esta herida no se cierra de entrada: aseo, debridamiento, curaciones y cierre diferido. Suturarla tienta para que quede estética, pero encerrar bacterias en una herida vieja y sucia es la receta para un absceso."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.009 · Curación de heridas, sutura y aseo",
      "stem": "Mujer de 25 años con una herida cortante limpia de 2 cm en la mejilla, producida hace 2 horas, que se sutura con puntos simples de material no absorbible fino.",
      "question": "¿En cuántos días se deben retirar los puntos?",
      "options": [
        {
          "letter": "A",
          "text": "Entre 5 y 7 días"
        },
        {
          "letter": "B",
          "text": "Entre 10 y 12 días"
        },
        {
          "letter": "C",
          "text": "Entre 14 y 21 días"
        },
        {
          "letter": "D",
          "text": "A los 30 días"
        },
        {
          "letter": "E",
          "text": "No se retiran porque se reabsorben"
        }
      ],
      "correct": "A",
      "explanation": "En la cara, por su excelente irrigación, los puntos se retiran a los 5 a 7 días, lo que evita las marcas de los puntos. El cuero cabelludo se retira a los 7 a 10 días, el tronco y las extremidades entre 10 y 14, y sobre articulaciones hasta 14 días. El material no absorbible sí debe retirarse.",
      "say": {
        "stem": "Mujer de veinticinco años con una herida limpia de dos centímetros en la mejilla, de dos horas, suturada con puntos simples de material fino no absorbible.",
        "question": "¿En cuántos días se deben retirar los puntos?",
        "options": "Las opciones: cinco a siete días, diez a doce, catorce a veintiuno, treinta días, o no se retiran. Piénsalo.",
        "answer": "Es la A. La cara cicatriza rápido por su gran irrigación, y retirar a los cinco a siete días evita las marcas de los puntos. Diez a doce días tienta porque es lo habitual en tronco y extremidades, pero en la cara deja cicatriz en riel."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.057 · Cicatrices viciosas",
      "stem": "Mujer de 20 años consulta por una lesión firme, brillante y pruriginosa en el lóbulo de la oreja izquierda, que apareció 4 meses después de una perforación para aros y ha seguido creciendo, sobrepasando los límites de la herida original.",
      "question": "¿Cuál es el tratamiento inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Resección quirúrgica simple aislada"
        },
        {
          "letter": "B",
          "text": "Infiltración intralesional de corticoides"
        },
        {
          "letter": "C",
          "text": "Crema antibiótica"
        },
        {
          "letter": "D",
          "text": "Observación, porque regresa espontáneamente"
        },
        {
          "letter": "E",
          "text": "Radioterapia exclusiva"
        }
      ],
      "correct": "B",
      "explanation": "Una cicatriz que crece más allá de los bordes de la herida original y no regresa es un queloide; la cicatriz hipertrófica se limita a la herida y tiende a mejorar. El tratamiento inicial es la infiltración intralesional de corticoides, asociada a presoterapia o láminas de silicona. La resección aislada tiene una recurrencia muy alta.",
      "say": {
        "stem": "Mujer de veinte años con una lesión firme, brillante y con picazón en el lóbulo de la oreja, que apareció cuatro meses después de perforarse para un aro y sigue creciendo más allá de la herida original.",
        "question": "¿Cuál es el tratamiento inicial más adecuado?",
        "options": "Las opciones: resección simple, infiltración de corticoides en la lesión, crema antibiótica, observar, o radioterapia sola. Piénsalo.",
        "answer": "Es la B. Si sobrepasa los bordes de la herida es un queloide, y se parte con corticoides inyectados en la lesión. Resecarlo tienta porque parece lo más definitivo, pero la cirugía sola hace que reaparezca casi siempre, a menudo más grande."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.014 · Heridas de cara",
      "stem": "Hombre de 25 años consulta 2 horas después de una caída en bicicleta con una herida cortante limpia de 2 cm en el labio superior, que cruza el borde bermellón. No hay compromiso dentario ni otras lesiones.",
      "question": "¿Cuál es el paso más importante en la reparación de esta herida?",
      "options": [
        {
          "letter": "A",
          "text": "Dejar cicatrizar por segunda intención"
        },
        {
          "letter": "B",
          "text": "Colocar el primer punto alineando exactamente el borde bermellón"
        },
        {
          "letter": "C",
          "text": "Afrontar con cianoacrilato"
        },
        {
          "letter": "D",
          "text": "Suturar solo la mucosa con material reabsorbible"
        },
        {
          "letter": "E",
          "text": "Diferir la sutura 72 horas para disminuir el riesgo de infección"
        }
      ],
      "correct": "B",
      "explanation": "En las heridas de cara que cruzan el borde bermellón, el primer punto debe alinear exactamente la unión cutáneo-mucosa, porque un desnivel de apenas 1 mm produce una deformidad visible. La cara tiene excelente irrigación, por lo que estas heridas pueden suturarse en forma primaria incluso hasta 24 horas o más.",
      "say": {
        "stem": "Hombre de veinticinco años que, dos horas después de caer en bicicleta, tiene una herida cortante limpia de dos centímetros en el labio superior que cruza el borde bermellón.",
        "question": "¿Cuál es el paso más importante en la reparación?",
        "options": "Las opciones: dejar cicatrizar por segunda intención, primer punto alineando el bermellón, cianoacrilato, suturar solo la mucosa o diferir la sutura tres días. Piénsalo.",
        "answer": "Es la B. Cuando una herida cruza el bermellón, el primer punto va justo en ese borde, porque un desnivel mínimo deja un escalón visible en el labio. Diferir la sutura tienta para evitar infección, pero la cara está tan bien irrigada que se cierra en forma primaria sin problema."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 30",
      "stem": "Hombre de 28 años sufre un accidente con un vidrio y resulta con una herida cortante de 10 cm en el muslo izquierdo, que sangra profusamente.",
      "question": "¿Cuál es la mejor forma de manejar inicialmente la hemorragia?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicación de torniquete"
        },
        {
          "letter": "B",
          "text": "Compresión directa de la herida"
        },
        {
          "letter": "C",
          "text": "Identificar y ligar el vaso sangrante"
        },
        {
          "letter": "D",
          "text": "Compresión de la arteria femoral"
        },
        {
          "letter": "E",
          "text": "Cubrir la herida con apósitos"
        }
      ],
      "correct": "B",
      "explanation": "La primera medida para controlar la hemorragia externa es la compresión directa y sostenida sobre la herida, que controla la gran mayoría de los sangrados. El torniquete se reserva para hemorragias de extremidades que no ceden con compresión directa o amenazan la vida. Pinzar o ligar vasos a ciegas en urgencia puede dañar nervios y estructuras vecinas.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Hombre de veintiocho años con una herida cortante de diez centímetros en el muslo izquierdo, hecha con un vidrio, que sangra profusamente.",
        "question": "¿Cuál es la mejor forma de manejar inicialmente la hemorragia?",
        "options": "Las opciones: torniquete, compresión directa de la herida, ligar el vaso sangrante, comprimir la arteria femoral, o cubrir con apósitos. Piénsalo.",
        "answer": "Es la B. Lo primero frente a cualquier hemorragia externa es la compresión directa y sostenida, que controla casi todos los sangrados. El torniquete tienta porque el sangrado es profuso, pero se reserva para cuando la compresión fracasa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.2.009 · Heridas de la mano no complicadas",
      "stem": "Hombre de 30 años se corta la palma de la mano con un cuchillo de cocina hace 2 horas. Herida lineal limpia de 2 cm en la eminencia tenar, sangrado controlado con compresión. La flexión y extensión de todos los dedos contra resistencia es normal, la sensibilidad de los pulpejos (discriminación de 2 puntos) está conservada y el llene capilar es normal. Vacuna antitetánica completa hace 4 años.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Vacuna antitetánica y gammaglobulina antitetánica"
        },
        {
          "letter": "B",
          "text": "Derivar a cirugía de mano para exploración en pabellón"
        },
        {
          "letter": "C",
          "text": "Dejar la herida abierta para cierre por segunda intención"
        },
        {
          "letter": "D",
          "text": "Cierre con puntos y cefazolina oral por 7 días"
        },
        {
          "letter": "E",
          "text": "Aseo, exploración bajo anestesia local y sutura con puntos simples de nylon"
        }
      ],
      "correct": "E",
      "explanation": "Una herida limpia de la mano, reciente, con tendones, nervios digitales y perfusión indemnes es una herida no complicada: se maneja en urgencia con aseo, exploración bajo anestesia local y sutura. No requiere antibióticos. Con vacuna completa hace menos de 5 años no necesita refuerzo antitetánico.",
      "say": {
        "stem": "Hombre de treinta años con un corte limpio de dos centímetros en la palma, de dos horas. La función de los tendones, la sensibilidad de los dedos y la perfusión son normales, y tiene la vacuna antitetánica al día.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: vacuna con gammaglobulina, derivar a cirugía de mano, cierre por segunda intención, sutura con antibiótico o aseo y sutura en urgencia. Piénsalo.",
        "answer": "Es la E. Con tendones, nervios y perfusión indemnes, es una herida no complicada que se asea, explora y sutura en urgencia. Derivar a cirugía de mano tienta, pero se reserva para lesión tendinosa, nerviosa o vascular."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Profilaxis antitetánica', tag: 'Dos preguntas deciden todo', kind: 'key', items: [
          { t: 'Dosis previas y tipo de herida', d: 'Esas dos variables lo definen',
            say: 'Cerremos con las reglas de oro. Todo se decide con dos preguntas: cuántas dosis previas tiene, y si la herida es limpia o sucia.' },
          { t: 'Inmunoglobulina solo si es incompleto', d: 'Y la herida es sucia',
            say: 'La inmunoglobulina solo entra si el esquema es incompleto y además la herida es sucia. Con esquema completo, nunca la necesitas.' },
        ] },
        { title: 'Antes de suturar', tag: 'Cerrar o no cerrar', kind: 'normal', items: [
          { t: 'Limpia y reciente: se cierra', d: 'Sucia, punzante o mordedura: abierta',
            say: 'Antes de suturar, irriga a presión. Se cierra la herida limpia y reciente; la sucia, la punzante y la mordedura se dejan abiertas y se cierran diferido.' },
          { t: 'Presión, torniquete, ligadura a la vista', d: 'Nunca pinzar a ciegas',
            say: 'Y si sangra: presión directa, torniquete si es exanguinante y ligadura siempre bajo visión.' },
        ] },
        { title: 'Mordeduras', tag: 'No se suturan', kind: 'alert', items: [
          { t: 'Lavado a presión, sin sutura', d: 'Amoxicilina con ácido clavulánico',
            say: 'Y en las mordeduras: lavado a presión, sin suturar de entrada, y amoxicilina con ácido clavulánico como antibiótico de elección.' },
          { t: 'Perro no observable: vacunar ya', d: 'No esperes al animal',
            say: 'Si te llevas una sola idea de hoy: la herida sucia y el esquema incompleto son los que más piden inmunoglobulina, y un animal que no puedes observar se vacuna de inmediato. Con esto cerramos cirugía completa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Herida traumática: vacuna, inmunoglobulina, o ambas',
    root: N('start', 'Herida en urgencia', '¿Cuántas dosis previas tiene?',
      'Paciente con una herida traumática que llega a urgencia. Toda la decisión de profilaxis se arma con dos preguntas: cuántas dosis de vacuna tiene, y qué tan sucia es la herida.',
      ['', N('q', '¿El esquema de vacunación está completo?', 'Tres dosis o más, o menos',
        'Con esquema completo ya hay memoria inmunológica; sin él, no.',
        ['Completo', N('q', '¿La herida es limpia o sucia?', 'Cambia solo el plazo del refuerzo',
          'Con memoria inmunológica ya formada, la inmunoglobulina prácticamente nunca se necesita.',
          ['Limpia', N('ok', 'Refuerzo solo si pasaron 10 años', 'Sin inmunoglobulina',
            'Herida limpia con esquema completo: solo se refuerza si la última dosis fue hace más de diez años, y nunca lleva inmunoglobulina.')],
          ['Sucia', N('ok', 'Refuerzo solo si pasaron 5 años', 'Sin inmunoglobulina',
            'Herida sucia con esquema completo: el corte para el refuerzo baja a cinco años, y tampoco lleva inmunoglobulina, porque la memoria inmunológica responde sola.')])],
        ['Incompleto o desconocido', N('q', '¿La herida es limpia o sucia?', 'Aquí sí puede entrar la inmunoglobulina',
          'Sin memoria inmunológica previa, la herida sucia obliga a sumar inmunoglobulina.',
          ['Limpia', N('do', 'Solo vacuna', 'Iniciar o completar el esquema',
            'Herida limpia con esquema incompleto: se da vacuna para iniciar o completar el esquema, sin inmunoglobulina.')],
          ['Sucia', N('alert', 'Vacuna e inmunoglobulina juntas', 'En sitios distintos del cuerpo',
            'Herida sucia con esquema incompleto o desconocido: se administran vacuna e inmunoglobulina a la vez, en dos sitios distintos, y esta es la combinación que más se pregunta.')])])]),
  },
};
