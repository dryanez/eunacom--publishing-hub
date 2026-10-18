// Clase 18.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se cruza la edad gestacional con el peso, y qué riesgo trae cada casilla',
      say: 'Bienvenido a la clase de evaluación de la edad gestacional y clasificación ponderal del recién nacido. Hoy vas a aprender a clasificarlo por su edad gestacional, a estimarla con el examen físico cuando no tienes una fecha confiable, y a cruzarla con el peso para anticipar sus complicaciones. Es la continuación natural de la clase anterior: ahí decidiste cómo nace; aquí decides qué vigilar después. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Semanas cumplidas',
      title: 'Pretérmino, término o postérmino',
      cards: [
        { title: 'Pretérmino', tag: 'Menos de 37 semanas', kind: 'criteria', items: [
          { t: 'Extremo: menos de 28 semanas', d: 'El de mayor riesgo',
            say: 'Empecemos por la edad gestacional. Pretérmino es nacer antes de las treinta y siete semanas. El extremo, antes de las veintiocho, es el de mayor riesgo.' },
          { t: 'Tardío: 34 a 36 semanas', d: 'Hasta 36 semanas y 6 días',
            say: 'Y fíjate en el prematuro tardío, entre las treinta y cuatro y las treinta y seis semanas: es el más frecuente, cerca del setenta por ciento de los prematuros, y aun así tiene más riesgo que uno de término.' },
        ] },
        { title: 'Término', tag: 'La mayoría de los nacimientos', kind: 'normal', items: [
          { t: '37 a 41 semanas', d: 'Hasta 41 semanas y 6 días',
            say: 'Término es entre las treinta y siete semanas y las cuarenta y uno más seis días. Es el rango de menor riesgo.' },
        ] },
        { title: 'Postérmino', tag: '42 semanas o más', kind: 'alert', items: [
          { t: 'Insuficiencia placentaria', d: 'Riesgo de meconio y macrosomía',
            say: 'Y postérmino es desde las cuarenta y dos semanas, con el riesgo de una placenta que ya no alcanza, líquido con meconio, y a veces macrosomía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando la fecha no es confiable',
      title: 'Estimar la edad gestacional por el examen físico',
      cards: [
        { title: 'Test de Capurro', tag: 'Desde las 29 semanas', kind: 'key', items: [
          { t: '5 signos somáticos', d: 'Oreja, mama, pezón, piel, pliegues',
            say: 'Cuando no tienes una fecha de última regla confiable ni una ecografía precoz, estimas la edad con el examen físico. El test de Capurro, desde las veintinueve semanas, evalúa cinco signos: la oreja, la mama, el pezón, la piel y los pliegues plantares. Mira esta tabla: cada signo tiene sus casillas con puntaje, y la suma se traduce en semanas.',
            photo: { src: 'biblioteca/15_pediatria/ped-16/01_test_capurro__usuario.jpg', label: 'Test de Capurro', at: 'Mira esta tabla', credit: 'Test de Capurro (esquema docente)' } },
        ] },
        { title: 'Test de Ballard', tag: 'Prematuros extremos', kind: 'criteria', items: [
          { t: 'Suma signos neuromusculares', d: 'Postura, ángulo poplíteo, bufanda',
            say: 'Y el test de Ballard, que además de lo físico suma signos neuromusculares como la postura o el ángulo poplíteo, lo usas de preferencia en el prematuro extremo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cruzando edad y peso',
      title: 'Pequeño, adecuado o grande para la edad gestacional',
      cards: [
        { title: 'Pequeño para la EG (PEG)', tag: 'Bajo el percentil 10', kind: 'alert', items: [
          { t: 'Hipoglicemia', d: 'Por poca reserva de glucógeno',
            say: 'Ahora cruzas el peso con la edad gestacional. Pequeño para la edad gestacional es estar bajo el percentil diez, y su riesgo cardinal es la hipoglicemia, porque el hígado se queda sin reserva de glucógeno.' },
          { t: 'Hipotermia y poliglobulia', d: 'Poca grasa parda, más eritropoyetina',
            say: 'Además tiene poca grasa parda, así que se enfría con facilidad, y suele tener poliglobulia, por la hipoxia crónica que vivió dentro del útero.' },
        ] },
        { title: 'Adecuado para la EG (AEG)', tag: 'Entre el percentil 10 y 90', kind: 'normal', items: [
          { t: 'Bajo riesgo general', d: 'La mayoría de los recién nacidos',
            say: 'Adecuado para la edad gestacional es estar entre el percentil diez y el noventa: es donde está la mayoría, y el riesgo neonatal es bajo.' },
        ] },
        { title: 'Grande para la EG (GEG)', tag: 'Sobre el percentil 90', kind: 'alert', items: [
          { t: 'Hipoglicemia por hiperinsulinismo', d: 'Clásico del hijo de madre diabética',
            say: 'Y grande para la edad gestacional es estar sobre el percentil noventa. Aquí la hipoglicemia también es el riesgo cardinal, pero por otro mecanismo: hiperinsulinismo, típico del hijo de madre diabética.' },
          { t: 'Trauma obstétrico', d: 'Distocia de hombros, fractura de clavícula',
            say: 'Y además tiene riesgo de trauma obstétrico: distocia de hombros, parálisis braquial, o fractura de clavícula.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo del pequeño y del grande',
      title: 'PEG y GEG: qué haces con cada uno',
      cards: [
        { title: 'PEG asimétrico y simétrico', tag: 'Según cuándo actuó la noxa', kind: 'criteria', items: [
          { t: 'Asimétrico', d: 'Insuficiencia placentaria tardía; cabeza preservada',
            say: 'En el pequeño para la edad distingues dos tipos. El asimétrico viene de una insuficiencia placentaria tardía, por preeclampsia o hipertensión: la cabeza está preservada y el crecimiento posterior es mejor.' },
          { t: 'Simétrico', d: 'Noxa precoz: cromosomopatía, TORCH, tóxicos',
            say: 'El simétrico viene de una noxa precoz, como cromosomopatías, infecciones TORCH o tóxicos, y tiene perímetro craneano, peso y talla bajos.' },
        ] },
        { title: 'Manejo del PEG', tag: 'Alimentar y vigilar', kind: 'pharma', items: [
          { t: 'Alimentación en la primera hora', d: 'Control frecuente de glicemia',
            say: 'Para el pequeño: alimentación precoz, en la primera hora, control frecuente de la glicemia, prevención de la hipotermia, hematocrito entre las dos y las cuatro horas por el riesgo de policitemia, y vigilancia de hipocalcemia.' },
          { t: 'Crecimiento recuperador', d: '85–90% antes de los 2 años',
            say: 'Entre el ochenta y cinco y el noventa por ciento logra crecimiento recuperador antes de los dos años. Si no lo logra, derivas a endocrinología por la hormona de crecimiento. Y tienen más riesgo de síndrome metabólico de adultos.' },
        ] },
        { title: 'Manejo del GEG', tag: 'Peso sobre p90 o más de 4.000 g', kind: 'alert', items: [
          { t: 'Descartar madre diabética', d: 'Glicemia desde el nacimiento',
            say: 'En el grande, o macrosomía sobre cuatro mil gramos, lo primero es descartar que sea hijo de madre diabética y controlar la glicemia desde el nacimiento.' },
          { t: 'Parálisis de Erb', d: 'Examina plexo braquial y clavícula',
            say: 'Revisas el plexo braquial y la clavícula: la parálisis braquial de Erb compromete las raíces cervicales cinco y seis, y se asocia a distocia de hombros. También vigilas policitemia, hipocalcemia e ictericia durante las primeras veinticuatro a cuarenta y ocho horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Una causa evitable de ceguera',
      title: 'Retinopatía del prematuro',
      cards: [
        { title: 'Quién y por qué', tag: 'Retina inmadura', kind: 'key', items: [
          { t: 'Menos de 32 semanas o 1.500 g', d: 'La vascularización retinal termina cerca del término',
            say: 'La retinopatía del prematuro es una vasoproliferación anormal de una retina inmadura, porque los vasos terminan de formarse cerca del término. El riesgo está en los menores de treinta y dos semanas o bajo mil quinientos gramos.' },
          { t: 'Hiperoxia, sepsis, transfusiones', d: 'Saturación meta 90–95%',
            say: 'Empeoran el riesgo la oxigenoterapia prolongada o con hiperoxia, por eso la meta de saturación es entre noventa y noventa y cinco por ciento, además de la sepsis y las transfusiones. Avanzada, causa desprendimiento de retina y ceguera.' },
        ] },
        { title: 'Pesquisa', tag: 'Fondo de ojo por oftalmólogo', kind: 'alert', items: [
          { t: 'Fondo de ojo a las 4 a 6 semanas', d: 'O a las 31 semanas postmenstruales',
            say: 'Todo prematuro bajo treinta y dos semanas o mil quinientos gramos, y los mayores si estuvieron inestables, necesita fondo de ojo por oftalmólogo entre las cuatro y las seis semanas de vida, o a las treinta y una semanas de edad postmenstrual, con controles hasta la vascularización completa.' },
          { t: 'Asegurar el control antes del alta', d: 'Es tu responsabilidad como médico general',
            say: 'Tu rol es asegurar que el prematuro llegue a su control oftalmológico antes del alta.' },
        ] },
        { title: 'Tratamiento', tag: 'En pocos días', kind: 'pharma', items: [
          { t: 'Láser o antiangiogénico', d: 'Fotocoagulación o inyección intravítrea',
            say: 'La forma que requiere tratamiento se trata en pocos días, con fotocoagulación con láser o un antiangiogénico intravítreo. Mira este fondo de ojo justo después del láser: se ven las marcas de la fotocoagulación en la retina periférica.',
            photo: { src: 'biblioteca/15_pediatria/ped-16/02_rop-post-laser__kanski_p577.jpg', label: 'Fondo de ojo post láser', at: 'Mira este fondo de ojo', credit: 'Kanski, Clinical Ophthalmology 8.ª ed., p. 577 (Fig. 13.52B)' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del nacimiento',
      title: 'Manejo y seguimiento del prematuro',
      cards: [
        { title: 'Antes y durante el parto', tag: 'Estrategias perinatales', kind: 'key', items: [
          { t: 'Corticoides prenatales', d: 'Betametasona 12 mg IM c/24 h, 2 dosis (24–34 sem)',
            say: 'Para prevenir las complicaciones, entre las veinticuatro y las treinta y cuatro semanas se dan corticoides prenatales: betametasona, doce miligramos intramuscular cada veinticuatro horas, dos dosis.' },
          { t: 'Sulfato de magnesio', d: 'Neuroprotección bajo 32 semanas',
            say: 'Bajo treinta y dos semanas agregas sulfato de magnesio como neuroprotección. Además, clampeo tardío del cordón y traslado de la madre a un centro de nivel adecuado.' },
        ] },
        { title: 'Cuidados', tag: 'En la unidad neonatal', kind: 'normal', items: [
          { t: 'Termorregulación y canguro', d: 'Leche materna, fortificada si es muy prematuro',
            say: 'Después cuidas la temperatura, usas contacto piel a piel o método canguro, y leche materna, fortificada en el muy prematuro. Si no tolera la vía enteral, nutrición parenteral, y cafeína para las apneas.' },
        ] },
        { title: 'Suplementos y seguimiento', tag: 'Edad corregida', kind: 'pharma', items: [
          { t: 'Vitamina D y hierro', d: '400–800 UI/día; hierro 2–4 mg/kg/día desde el mes',
            say: 'Entregas vitamina D, cuatrocientas a ochocientas unidades al día, y hierro, de dos a cuatro miligramos por kilo al día, desde el mes de vida.' },
          { t: 'Vacunas por edad cronológica', d: 'Desarrollo por edad corregida hasta los 2 años',
            say: 'Las vacunas se ponen según la edad cronológica, no la corregida. El desarrollo, en cambio, se evalúa con la edad corregida hasta los dos años: edad cronológica menos las semanas que faltaron para las cuarenta. Controlas oftalmología, audición, crecimiento y neurodesarrollo.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "La matriz edad por peso",
      images: [
        { src: 'animaciones/ped-16/A1_matriz_edad_peso.mp4', label: "Edad gestacional y peso", credit: "Animación propia" },
      ],
      steps: [
        { note: "Pequeño, adecuado o grande",
          say: "Mira el gráfico: semanas de gestación abajo, peso al nacer a la izquierda, y los percentiles diez y noventa. Bajo el diez, pequeño para la edad gestacional: hipoglicemia, hipotermia y poliglobulia. Entre diez y noventa, adecuado, riesgo bajo. Sobre el noventa, grande: hipoglicemia por hiperinsulinismo y trauma obstétrico. Y primero defines la edad: pretérmino bajo treinta y siete semanas, término hasta cuarenta y uno más seis días." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora crucemos la edad gestacional con el peso en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'La matriz que más se pregunta',
      head: ['Categoría', 'Percentil de peso', 'Riesgo principal'],
      rows: [
        { cells: ['Pretérmino PEG', 'Menor a 10', 'Hipoglicemia grave, hipotermia'],
          say: 'Repasemos la matriz. Pretérmino y pequeño para la edad: el riesgo más alto de todos, hipoglicemia grave e hipotermia.' },
        { cells: ['Pretérmino AEG', 'Entre 10 y 90', 'Dificultad respiratoria, ictericia'],
          say: 'Pretérmino adecuado: el riesgo principal es la dificultad respiratoria y la ictericia, por la sola inmadurez.' },
        { cells: ['Término PEG', 'Menor a 10', 'Hipoglicemia por falta de depósitos'],
          say: 'Término pero pequeño: hipoglicemia, aunque nazca a tiempo, porque los depósitos igual le faltaron.' },
        { cells: ['Término GEG', 'Mayor a 90', 'Distocia de hombros, hipoglicemia'],
          say: 'Término y grande: el riesgo cambia a trauma del parto y a la hipoglicemia por hiperinsulinismo.' },
        { cells: ['Postérmino', 'Cualquiera', 'Aspiración meconial, piel descamada'],
          say: 'Y el postérmino, sea cual sea su peso, tiene riesgo de aspiración meconial y de una piel ya descamada por el tiempo de más dentro del útero.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de sexo masculino, parto vaginal a las 35 semanas, peso de nacimiento de 2.850 gramos. En las curvas de crecimiento intrauterino, ese peso corresponde al percentil 92 para las 35 semanas.',
      question: '¿Cuál es la clasificación correcta de este paciente?',
      options: [
        { letter: 'A', text: 'Recién nacido de término, pequeño para la edad gestacional' },
        { letter: 'B', text: 'Recién nacido de término, adecuado para la edad gestacional' },
        { letter: 'C', text: 'Recién nacido pretérmino, grande para la edad gestacional' },
        { letter: 'D', text: 'Recién nacido pretérmino, adecuado para la edad gestacional' },
        { letter: 'E', text: 'Recién nacido postérmino, grande para la edad gestacional' },
      ],
      correct: 'C',
      explanation: 'A las 35 semanas es pretérmino, y un peso en el percentil 92 está sobre el percentil 90, lo que define grande para la edad gestacional: pretérmino GEG.',
      say: {
        stem: 'Vamos con un caso. Recién nacido, parto vaginal a las treinta y cinco semanas, con un peso de dos mil ochocientos cincuenta gramos. Ese peso corresponde al percentil noventa y dos para su edad gestacional.',
        question: '¿Cuál es la clasificación correcta de este paciente?',
        options: 'Tienes cinco opciones: término pequeño, término adecuado, pretérmino grande, pretérmino adecuado, o postérmino grande. Piénsalo.',
        answer: 'Es la C. Treinta y cinco semanas es pretérmino, no término: ya puedes descartar dos opciones. Y un percentil noventa y dos está sobre el noventa, así que es grande para la edad gestacional, no adecuado. La clasificación cruzada correcta es pretérmino, grande para la edad gestacional.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 8',
      stem: 'Recién nacido pequeño para la edad gestacional, con un peso de 2.500 gramos.',
      question: '¿Qué conducta tomas respecto de la alimentación?',
      options: [
        { letter: 'A', text: 'Iniciar fórmula láctea hipercalórica' },
        { letter: 'B', text: 'Instalar sonda nasogástrica para alimentación' },
        { letter: 'C', text: 'Ayuno de 6 horas y luego fórmula de prematuro' },
        { letter: 'D', text: 'Pecho materno precoz y control de glicemia a las 2 horas' },
        { letter: 'E', text: 'Suero glucosado al 10% endovenoso' },
      ],
      correct: 'D',
      explanation: 'El recién nacido pequeño para la edad gestacional tiene alto riesgo de hipoglicemia precoz: la conducta es alimentar precozmente al pecho y controlar la glicemia a las 2 horas de vida.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de enero de dos mil veintitrés. Recién nacido pequeño para la edad gestacional, con un peso de dos mil quinientos gramos.',
        question: '¿Qué conducta tomas respecto de la alimentación?',
        options: 'Las opciones: fórmula hipercalórica, sonda nasogástrica, ayuno de seis horas y luego fórmula de prematuro, pecho materno precoz con control de glicemia, o suero glucosado endovenoso.',
        answer: 'Es la D. Ya sabes que el riesgo cardinal del pequeño para la edad gestacional es la hipoglicemia por falta de reservas. La conducta no es el ayuno ni la sonda: es alimentarlo precozmente al pecho materno y controlar la glicemia a las dos horas de vida.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.123 · Prematurez",
      "stem": "Recién nacido de 30 semanas, con peso de nacimiento de 1.250 gramos, hospitalizado en neonatología. Recibió surfactante y oxígeno durante las primeras 2 semanas. Hoy tiene 4 semanas de vida, está estable, sin apoyo ventilatorio y en ganancia de peso.",
      "question": "Según las garantías GES para el prematuro, ¿qué evaluación corresponde realizar ahora?",
      "options": [
        {
          "letter": "A",
          "text": "Electroencefalograma de rutina"
        },
        {
          "letter": "B",
          "text": "Cariograma"
        },
        {
          "letter": "C",
          "text": "Fondo de ojo por oftalmólogo para pesquisa de retinopatía del prematuro"
        },
        {
          "letter": "D",
          "text": "Densitometría ósea"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética de cerebro de rutina"
        }
      ],
      "correct": "C",
      "explanation": "El prematuro menor de 32 semanas o menor de 1.500 gramos tiene garantía GES de pesquisa de retinopatía del prematuro con fondo de ojo por oftalmólogo, habitualmente desde las 4 semanas de vida; el oxígeno recibido es un factor de riesgo adicional. También tiene garantía de pesquisa de hipoacusia.",
      "say": {
        "stem": "Prematuro de treinta semanas, que pesó mil doscientos cincuenta gramos, recibió surfactante y oxígeno las primeras dos semanas. Hoy tiene cuatro semanas de vida, está estable, sin apoyo ventilatorio, y subiendo de peso.",
        "question": "Según las garantías GES para el prematuro, ¿qué evaluación corresponde ahora?",
        "options": "Las opciones: electroencefalograma, cariograma, fondo de ojo por oftalmólogo, densitometría ósea o resonancia de cerebro. Piénsalo.",
        "answer": "Es la C. Todo prematuro menor de treinta y dos semanas o de mil quinientos gramos tiene garantizada la pesquisa de retinopatía con fondo de ojo, y a las cuatro semanas ya corresponde. La resonancia tienta por la prematurez extrema, pero no es un examen de rutina garantizado."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.1.022 · Retinopatía del prematuro",
      "stem": "Recién nacido de 29 semanas de gestación y 1.150 g de peso al nacer, que requirió oxigenoterapia prolongada. Se encuentra en la unidad de neonatología a las 4 semanas de vida.",
      "question": "Respecto de la retinopatía del prematuro, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "No requiere evaluación, porque está en oxígeno controlado"
        },
        {
          "letter": "B",
          "text": "Evaluar al alta, a los 6 meses de edad"
        },
        {
          "letter": "C",
          "text": "Evaluar solo si presenta leucocoria"
        },
        {
          "letter": "D",
          "text": "Examen de fondo de ojo con pupila dilatada por oftalmólogo, según GES, en prematuros menores de 32 semanas o menores de 1.500 g"
        },
        {
          "letter": "E",
          "text": "Indicar vitamina A como tratamiento"
        }
      ],
      "correct": "D",
      "explanation": "La retinopatía del prematuro es una vasculopatía proliferativa de la retina inmadura, favorecida por prematurez, bajo peso e hiperoxia. Es GES: se tamiza con fondo de ojo dilatado por oftalmólogo a todo prematuro menor de 1.500 g o de 32 semanas, desde las 4 semanas de vida, y se trata con láser o antiangiogénicos.",
      "say": {
        "stem": "Prematuro de veintinueve semanas y mil ciento cincuenta gramos, con oxígeno prolongado, de cuatro semanas de vida.",
        "question": "Respecto de la retinopatía del prematuro, ¿cuál es la conducta?",
        "options": "Las opciones: no evaluar, evaluar a los seis meses, evaluar solo si hay leucocoria, fondo de ojo dilatado por oftalmólogo según GES o vitamina A. Piénsalo.",
        "answer": "Es la D. Todo prematuro menor de treinta y dos semanas o de mil quinientos gramos se tamiza con fondo de ojo por oftalmólogo desde las cuatro semanas. Esperar la leucocoria tienta, pero significa llegar con la retina ya desprendida."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Edad gestacional', tag: 'Semanas cumplidas', kind: 'key', items: [
          { t: 'Término: 37 a 41 semanas', d: 'Pretérmino antes, postérmino después',
            say: 'Cerremos con las reglas de oro. Término es entre treinta y siete y cuarenta y uno más seis días; antes es pretérmino, después es postérmino.' },
        ] },
        { title: 'Clasificación ponderal', tag: 'Percentiles', kind: 'criteria', items: [
          { t: 'PEG bajo 10, GEG sobre 90', d: 'AEG queda entre esos dos',
            say: 'Pequeño para la edad es bajo el percentil diez, grande es sobre el noventa, y adecuado queda entre esos dos.' },
        ] },
        { title: 'Riesgos', tag: 'Los vigilas distinto', kind: 'alert', items: [
          { t: 'PEG: hipoglicemia por reservas', d: 'GEG: hipoglicemia por hiperinsulinismo',
            say: 'El pequeño hace hipoglicemia por falta de reservas; el grande, por hiperinsulinismo. Si te llevas una sola idea de hoy: siempre cruzas la edad gestacional con el peso antes de decidir qué vigilar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cruzar edad gestacional y peso al nacer',
    root: N('start', 'Recién nacido en la maternidad', 'Edad gestacional y peso al nacer',
      'Tienes un recién nacido recién examinado, con su edad gestacional y su peso de nacimiento.',
      ['', N('q', '¿En qué rango de edad gestacional está?', 'Decide el primer eje',
        'Primero ubicas la edad gestacional en su rango.',
        ['Menos de 37 semanas', N('q', '¿En qué percentil de peso está?', 'Decide el segundo eje',
          'Si es pretérmino, ahora ubicas el percentil de peso para esa edad.',
          ['Bajo percentil 10', N('alert', 'Pretérmino PEG', 'El de mayor riesgo: hipoglicemia e hipotermia',
            'Pretérmino y bajo el percentil diez es la combinación de mayor riesgo: hipoglicemia grave, hipotermia y enterocolitis.')],
          ['Sobre percentil 90', N('alert', 'Pretérmino GEG', 'Pensar en hijo de madre diabética',
            'Pretérmino pero sobre el percentil noventa te hace pensar en un hijo de madre diabética, con hipoglicemia por hiperinsulinismo.')])],
        ['37 semanas o más', N('q', '¿En qué percentil de peso está?', 'Decide el segundo eje',
          'Si es de término o más, también ubicas el percentil de peso.',
          ['Bajo percentil 10', N('alert', 'Término PEG', 'Vigilar hipoglicemia por reservas',
            'De término pero bajo el percentil diez: vigilas hipoglicemia por falta de depósitos, aunque haya nacido a tiempo.')],
          ['Sobre percentil 90', N('alert', 'Término GEG', 'Vigilar trauma obstétrico e hipoglicemia',
            'De término y sobre el percentil noventa: vigilas trauma obstétrico, como la distocia de hombros, y también hipoglicemia por hiperinsulinismo.')])])]),
  },
};
