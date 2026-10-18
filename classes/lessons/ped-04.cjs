// Clase 18.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dosis, edades y prohibiciones que se preguntan con precisión matemática',
      say: 'Bienvenido. Hoy vemos lactancia materna, alimentación complementaria, y la suplementación con vitamina D y con hierro. Es un tema donde el examen no te perdona un número: te va a pedir la dosis exacta y la edad exacta, así que vamos a ser precisos. Y al final vamos a ver qué nunca se le puede dar a un lactante, porque ahí también hay preguntas clásicas. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Lactancia materna',
      title: 'Por qué es el alimento de elección',
      cards: [
        { title: 'Sus beneficios', tag: 'Hasta los 6 meses, exclusiva', kind: 'key', items: [
          { t: 'Anticuerpos y factores protectores', d: 'Menos diarrea, otitis y neumonía',
            say: 'Empecemos por la lactancia. Aporta anticuerpos, lactoferrina y otros factores protectores que ninguna fórmula iguala, y reduce diarreas, otitis y neumonías en el lactante.' },
        ] },
        { title: 'Contraindicaciones maternas', tag: 'Muy pocas, pero se preguntan', kind: 'alert', items: [
          { t: 'VIH y HTLV uno o dos', d: 'Las dos contraindicaciones que más se preguntan',
            say: 'Pero hay contraindicaciones absolutas, y son las que más se preguntan: la infección materna por VIH, y la infección por HTLV uno o dos.' },
          { t: 'TBC bacilífera activa', d: 'Drogas ilícitas o quimioterapia',
            say: 'También la tuberculosis bacilífera activa sin tratar, y el consumo de drogas ilícitas o el uso de quimioterapia.' },
        ] },
        { title: 'Contraindicación del lactante', tag: 'Poco frecuente', kind: 'normal', items: [
          { t: 'Galactosemia clásica', d: 'Necesita fórmula sin lactosa',
            say: 'Y del lado del lactante, la única contraindicación real es la galactosemia clásica, que obliga a una fórmula sin lactosa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica de lactancia',
      title: 'El buen agarre y la lactancia efectiva',
      cards: [
        { title: 'Posición y agarre', tag: 'Vientre con vientre', kind: 'key', items: [
          { t: 'Bebé alineado, vientre con vientre', d: 'Nariz a la altura del pezón',
            say: 'Vamos a la técnica, porque de un mal agarre nacen casi todos los problemas. La madre cómoda, el bebé con el cuerpo alineado, vientre con vientre, y la nariz a la altura del pezón.' },
          { t: 'Boca abierta, labio inferior evertido', d: 'Más areola arriba que abajo; sin dolor',
            say: 'Mira la imagen de la izquierda, el agarre incorrecto contra el correcto. En el correcto la boca está muy abierta, el labio inferior queda hacia afuera, se ve más areola por arriba que por abajo y el mentón toca la mama. Y en esta otra imagen ves el acople correcto en la práctica. La succión es rítmica, con deglución audible y sin dolor.',
            photos: [
              { src: 'biblioteca/15_pediatria/ped-04/03_acople_incorrecto_vs_correcto__commons.jpg', label: 'Incorrecto vs correcto', at: 'Mira la imagen de la izquierda', credit: 'Wikimedia Commons «Breastfeeding - Incorrect vs Correct Latch-On.png», CC BY-SA 4.0, BruceBlaus' },
              { src: 'biblioteca/15_pediatria/ped-04/01_acople_correcto__minsal-lactancia-2017.jpg', label: 'Acople correcto', at: 'Y en esta otra imagen', credit: 'Manual Operativo Lactancia MINSAL 2017, p. 13' },
            ] },
        ] },
        { title: 'Lactancia efectiva', tag: 'Libre demanda', kind: 'normal', items: [
          { t: 'Libre demanda: 8 a 12 tomas', d: 'Vacía una mama antes de ofrecer la otra',
            say: 'La lactancia es a libre demanda, de ocho a doce tomas al día, y se deja que el lactante vacíe una mama antes de ofrecer la otra. Fíjate en este esquema de succión efectiva, con la lengua y la mandíbula moviéndose en ritmo.',
            photo: { src: 'biblioteca/15_pediatria/ped-04/02_tetina_succion__minsal-lactancia-2010.jpg', label: 'Succión efectiva', at: 'Fíjate en este esquema', credit: 'Manual Lactancia Materna MINSAL 2010, p. 141' } },
          { t: 'Al menos 6 pañales mojados', d: 'Desde el día 5; 20 a 30 g/día de peso',
            say: 'Sabes que funciona si desde el quinto día hay al menos seis pañales mojados, deposiciones amarillas y una ganancia de veinte a treinta gramos por día. La pérdida fisiológica de hasta siete a diez por ciento se recupera hacia los diez a catorce días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Problemas mamarios',
      title: 'Grietas, ingurgitación, mastitis y absceso',
      cards: [
        { title: 'Sin infección', tag: 'Casi siempre un mal agarre', kind: 'normal', items: [
          { t: 'Grietas: se corrige el agarre', d: 'Leche materna al final; sin jabones ni cremas',
            say: 'Las grietas del pezón casi siempre son por mal agarre. Mira este acople deficiente: el mentón queda lejos del pecho y se ve mucha areola, por eso lastima. Se corrige la técnica, se aplica un poco de leche al final de la toma y se evitan jabones y cremas irritantes.',
            photo: { src: 'biblioteca/15_pediatria/ped-04/04_acople_deficiente__commons.jpg', label: 'Acople deficiente', at: 'Mira este acople deficiente', credit: 'Wikimedia Commons «Shallow Latch.jpg», CC BY-SA 4.0, Dr. Jack Newman' } },
          { t: 'Ingurgitación y conducto obstruido', d: 'Vaciado frecuente, compresas y masaje',
            say: 'La ingurgitación, con mamas tensas y dolorosas al tercer a quinto día, se maneja con vaciado frecuente, compresas tibias antes y frías después, y masaje. El conducto obstruido es un nódulo doloroso sin fiebre, con el mismo manejo.' },
        ] },
        { title: 'Mastitis', tag: 'No se suspende la lactancia', kind: 'alert', items: [
          { t: 'Zona roja, caliente y fiebre', d: 'Fiebre sobre 38,4 °C y calofríos',
            say: 'La mastitis es una zona dolorosa, roja y caliente, con fiebre sobre treinta y ocho coma cuatro grados, calofríos y compromiso general. Y aquí está la trampa: la lactancia no se suspende. Se sigue amamantando o extrayendo, con ibuprofeno.' },
          { t: 'Antibiótico si no mejora en 12 a 24 horas', d: 'Cloxacilina o cefalosporina por 10 a 14 días',
            say: 'Si no mejora en doce a veinticuatro horas, o es grave, agregas un antibiótico antiestafilocócico, cloxacilina o una cefalosporina de primera generación, por diez a catorce días.' },
        ] },
        { title: 'Otros', tag: 'Cada uno con su manejo', kind: 'criteria', items: [
          { t: 'Absceso: ecografía y drenaje', d: 'Colección fluctuante; sigue la lactancia',
            say: 'El absceso mamario es una colección fluctuante: ecografía y drenaje, y la lactancia continúa.' },
          { t: 'Candidiasis: tratamiento a madre y bebé', d: 'Dolor punzante, pezón brillante',
            say: 'Y la candidiasis del pezón da dolor punzante y un pezón brillante. Se trata de forma tópica a la madre y también al lactante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Extracción, destete e higiene',
      title: 'Conservar la leche, destetar y alimentar con higiene',
      cards: [
        { title: 'Conservación de la leche', tag: 'Tiempos que se memorizan', kind: 'key', items: [
          { t: '4 horas, 3 a 4 días, 6 meses', d: 'Ambiente, refrigerador a 4 °C, congelador a -18 °C',
            say: 'La leche extraída dura hasta cuatro horas a temperatura ambiente, tres a cuatro días en el refrigerador y hasta seis meses en el congelador. Se descongela en el refrigerador o en baño maría, nunca en microondas, y no se vuelve a congelar.' },
        ] },
        { title: 'Destete', tag: 'Gradual', kind: 'normal', items: [
          { t: 'Una toma menos cada 1 a 2 semanas', d: 'Evita ingurgitación y mastitis',
            say: 'La Organización Mundial de la Salud recomienda lactancia hasta los dos años o más, con complementaria desde los seis meses. Si se suspende, es gradual, una toma menos cada una a dos semanas.' },
          { t: 'Sin lactancia: fórmula', d: 'Leche de vaca entera no antes de los 12 meses',
            say: 'Si no hay lactancia, fórmula de inicio hasta los seis meses y de continuación después. La leche de vaca entera no se da antes de los doce meses, porque produce microsangrado intestinal y anemia ferropénica.' },
        ] },
        { title: 'Higiene de la alimentación', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Fórmula: agua hervida, una medida rasa por 30 mL', d: 'Desechar el sobrante a la hora',
            say: 'La fórmula se prepara con agua hervida y enfriada, una medida rasa por cada treinta mililitros, y se desecha el sobrante después de una hora. Los biberones se escobillan y se hierven cinco minutos durante el primer año.' },
          { t: 'Sin miel; sin frutos secos enteros', d: 'Ni uvas enteras antes de los 4 a 5 años',
            say: 'No se da miel antes de los doce meses, por botulismo, y se evitan los alimentos de riesgo de aspiración, como frutos secos enteros y uvas enteras, antes de los cuatro a cinco años. Y la higiene bucal parte con el primer diente, con pasta con flúor del tamaño de un grano de arroz, sin biberón nocturno.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Suplementación universal',
      title: 'Vitamina D: la misma dosis para todos',
      nodes: [
        { id: 'nac', col: 0, row: 2, k: 'start', t: 'Nace a término', s: 'Con o sin lactancia' },
        { id: 'mes', col: 1, row: 2, k: 'mech', t: 'Al mes de vida', s: 'Empieza la suplementación' },
        { id: 'dos', col: 2, row: 2, k: 'effect', t: 'Cuatrocientas UI al día', s: 'Vía oral, todos los días' },
        { id: 'fin', col: 3, row: 2, k: 'good', t: 'Hasta los doce meses', s: 'Se mantiene sin interrupción' },
      ],
      edges: [
        { from: 'nac', to: 'mes' }, { from: 'mes', to: 'dos' }, { from: 'dos', to: 'fin' },
      ],
      steps: [
        { show: ['nac'], note: 'Aplica a todos, sin excepción',
          say: 'Vamos con la vitamina D, porque aquí el número es exacto y se pregunta directo. Todo recién nacido de término la recibe, esté con lactancia materna o con fórmula.' },
        { show: ['mes'], note: 'No se da desde el nacimiento',
          say: 'Empieza al mes de vida, a los treinta días. No se indica antes de eso.' },
        { show: ['dos'], note: 'El número que tienes que memorizar',
          say: 'La dosis es cuatrocientas unidades internacionales al día, por vía oral. Ese número no cambia.' },
        { show: ['fin'], note: 'Doce meses, sin cortes',
          say: 'Y se mantiene todos los días hasta que el niño cumple los doce meses. Es la suplementación más simple de todas: una dosis fija, para todos, sin excepciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Suplementación universal',
      title: 'Hierro: la dosis depende de cómo nació',
      cards: [
        { title: 'Recién nacido de término', tag: 'Empieza a los 4 meses', kind: 'key', items: [
          { t: 'Un miligramo por kilo al día', d: 'Desde los 4 meses hasta el año',
            say: 'El hierro es distinto: aquí la dosis y la edad de inicio cambian según cómo nació el niño. En el recién nacido de término, empieza a los cuatro meses, a un miligramo por kilo al día, hasta el año.' },
        ] },
        { title: 'Prematuro o bajo peso', tag: 'Empieza antes, a mayor dosis', kind: 'alert', items: [
          { t: 'Dos a tres miligramos por kilo', d: 'Desde los 2 meses de vida',
            say: 'En el prematuro, menor de treinta y siete semanas, o en el niño con menos de dos mil quinientos gramos al nacer, empieza antes, a los dos meses, y a mayor dosis: entre dos y tres miligramos por kilo al día.' },
          { t: 'Depósitos agotados más rápido', d: 'Por eso el inicio precoz',
            say: 'La razón es que sus depósitos de hierro, que se traspasan sobre todo en el tercer trimestre, quedaron más bajos. Por eso no puede esperar hasta los cuatro meses como el niño de término.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alimentación complementaria',
      title: 'Qué se introduce y cuándo',
      cards: [
        { title: 'A los 6 meses', tag: 'La primera comida', kind: 'normal', items: [
          { t: 'Primera papilla, el almuerzo', d: 'Con aceite vegetal crudo agregado',
            say: 'A los seis meses cumplidos se introduce la primera comida, el almuerzo, y le agregas una cucharadita de aceite vegetal crudo al servirla, para el aporte de ácidos grasos.' },
        ] },
        { title: 'A los 8 a 9 meses', tag: 'La segunda comida', kind: 'normal', items: [
          { t: 'Segunda papilla, la cena', d: 'Mismas características que el almuerzo',
            say: 'Entre los ocho y los nueve meses se agrega la segunda comida, la cena, con la misma lógica que el almuerzo.' },
        ] },
        { title: 'Prohibido el primer año', tag: 'Se pregunta seguido', kind: 'alert', items: [
          { t: 'Miel: riesgo de botulismo', d: 'Aunque esté diluida o cocida',
            say: 'Y lo que nunca se da en el primer año: la miel, por el riesgo de botulismo del lactante, sin importar si está diluida o mezclada con otra cosa.' },
          { t: 'Sal, azúcar y leche de vaca', d: 'Por la carga renal de solutos',
            say: 'Tampoco se agrega sal ni azúcar, y no se da leche de vaca entera, porque el riñón del lactante todavía no maneja bien esa carga de solutos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Piel del niño',
      title: 'Manchas pigmentarias: cuáles se derivan',
      cards: [
        { title: 'Manchas oscuras', tag: 'Benignas y de alerta', kind: 'key', items: [
          { t: 'Mancha mongólica', d: 'Azul-grisácea lumbosacra; desaparece sola',
            say: 'Primero, la mancha mongólica, o melanocitosis dérmica. Mira esta espalda de un recién nacido: máculas azul-grisáceas en la región lumbosacra. Es benigna y desaparece en la infancia, pero se registra en la ficha para no confundirla con equimosis por maltrato.',
            photo: { src: 'biblioteca/15_pediatria/ped-04/05_melanocitosis-dermica__nelson_p5159.jpg', label: 'Mancha mongólica', at: 'Mira esta espalda', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5159 (Fig. 688.3)' } },
          { t: 'Café con leche: seis o más', d: 'Con pecas axilares: neurofibromatosis tipo 1',
            say: 'Las manchas café con leche aisladas son frecuentes. Pero seis o más, mayores de cinco milímetros, con pecas axilares como las de esta axila, sugieren neurofibromatosis tipo uno, y derivas. El nevus congénito gigante también se deriva, por el riesgo de melanoma.',
            photo: { src: 'biblioteca/15_pediatria/ped-04/06_pecas-axilares-nf1__nelson_p4649.jpg', label: 'Pecas axilares (Crowe)', at: 'como las de esta axila', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 4649 (Fig. 636.2)' } },
        ] },
        { title: 'Hipopigmentaciones', tag: 'Acromía y esclerosis tuberosa', kind: 'alert', items: [
          { t: 'Vitíligo: acromía adquirida', d: 'Simétrico, autoinmune; tiroiditis y diabetes tipo 1',
            say: 'En las hipopigmentaciones, el vitíligo es una acromía adquirida, bien delimitada y simétrica, como estas rodillas. Es autoinmune, se asocia a tiroiditis y diabetes tipo uno, y se indica fotoprotección y derivación.',
            photo: { src: 'biblioteca/15_pediatria/ped-04/07_vitiligo__nelson_p5197.jpg', label: 'Vitíligo simétrico', at: 'como estas rodillas', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5197 (Fig. 694.4)' } },
          { t: '3 o más manchas en hoja de fresno', d: 'Descarta esclerosis tuberosa; luz de Wood',
            say: 'Tres o más máculas hipomelánicas en hoja de fresno, que se ven mejor con luz de Wood, obligan a descartar esclerosis tuberosa: convulsiones, retraso y angiofibromas. Los nevus acrómico y anémico son estables y benignos.' },
          { t: 'Pitiriasis alba y albinismo', d: 'Albinismo: nistagmo y fotofobia',
            say: 'La pitiriasis alba son placas pálidas con fina descamación en la cara del escolar atópico: benigna, con emolientes. El albinismo es hipopigmentación generalizada con nistagmo y fotofobia, y se deriva a oftalmología y dermatología. Regla general: se derivan las lesiones múltiples, las que crecen o cambian de color, y las que vienen con hallazgos sistémicos.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "El primer año en barras",
      images: [
        { src: 'animaciones/ped-04/A1_suplementos_primer_anio.mp4', label: "Suplementos y alimentación", credit: "Animación propia" },
      ],
      steps: [
        { note: "Cuándo parte cada cosa",
          say: "Mira las barras. La vitamina D parte al mes, cuatrocientas unidades al día, hasta el año. El hierro del niño de término, a los cuatro meses; el del prematuro, a los dos y en mayor dosis. La primera papilla, a los seis meses; la cena, entre los ocho y los nueve. Y las barras rojas: la miel nunca en el primer año, por botulismo, ni leche de vaca, sal o azúcar." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos toda la suplementación en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las dosis y edades que más se confunden',
      head: ['Suplemento', 'Recién nacido de término', 'Prematuro o bajo peso'],
      rows: [
        { cells: ['Vitamina D', 'Cuatrocientas UI al día, desde el mes 1', 'La misma dosis, sin cambios'],
          say: 'Repasemos en una tabla. La vitamina D es igual para todos: cuatrocientas unidades al día, desde el mes de vida.' },
        { cells: ['Hierro', 'Un miligramo por kilo, desde los 4 meses', 'Dos a tres miligramos por kilo, desde los 2 meses'],
          say: 'El hierro sí cambia: en el de término, un miligramo por kilo desde los cuatro meses; en el prematuro, hasta tres veces esa dosis, y dos meses antes.' },
        { cells: ['Primera comida', '6 meses, con aceite vegetal', 'Igual, salvo indicación distinta'],
          say: 'La primera comida se introduce a los seis meses en ambos casos, siempre con aceite vegetal agregado.' },
        { cells: ['Miel, sal y azúcar', 'Prohibidas todo el primer año', 'Prohibidas todo el primer año'],
          say: 'Y la miel, la sal y el azúcar están prohibidas en cualquier lactante durante todo el primer año, sin excepción por prematurez.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 2 meses, nacido a las 33 semanas de gestación, con peso de nacimiento de 1.950 gramos. Se alimenta con lactancia materna exclusiva y recibe vitamina D desde los 30 días de vida.',
      question: '¿Cuál es la indicación de hierro más adecuada en este control?',
      options: [
        { letter: 'A', text: 'Esperar hasta los 6 meses, junto con la alimentación complementaria' },
        { letter: 'B', text: 'Iniciar hierro elemental a 2 a 3 miligramos por kilo al día, desde hoy' },
        { letter: 'C', text: 'Iniciar hierro elemental a 1 miligramo por kilo al día, a los 4 meses' },
        { letter: 'D', text: 'No requiere suplementación si la madre come carnes rojas' },
        { letter: 'E', text: 'Indicar hierro dextrano intramuscular una vez al mes' },
      ],
      correct: 'B',
      explanation: 'Un prematuro de 33 semanas y bajo peso de nacimiento debe iniciar hierro precozmente, a los 2 meses de vida, a dosis de 2 a 3 miligramos por kilo al día, por el menor traspaso de depósitos de hierro en el tercer trimestre.',
      say: {
        stem: 'Vamos con un caso. Lactante de dos meses, nacido a las treinta y tres semanas, con mil novecientos cincuenta gramos al nacer. Está con lactancia materna exclusiva, y recibe vitamina D desde los treinta días de vida.',
        question: '¿Cuál es la indicación de hierro más adecuada en este control?',
        options: 'Las opciones: esperar hasta los seis meses, iniciar hierro a dos o tres miligramos por kilo desde hoy, iniciarlo a un miligramo por kilo a los cuatro meses, no suplementar si la madre come carnes rojas, o dar hierro dextrano mensual. Piénsalo.',
        answer: 'Es la B. Este lactante nació antes de las treinta y siete semanas y con menos de dos mil quinientos gramos, así que le corresponde el esquema del prematuro: empieza ahora, a los dos meses, y a la dosis más alta, entre dos y tres miligramos por kilo. Esperar a los cuatro meses, como haces con el niño de término, sería tarde para él.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 109',
      stem: 'Lactante de 3 meses, que pesa 7 kilos, alimentado con lactancia materna exclusiva a libre demanda. Su Peso para la Edad está en más 1 DE, y su Peso para la Talla en más 2 DE.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar fórmula de relleno' },
        { letter: 'B', text: 'Amamantar cada 4 horas' },
        { letter: 'C', text: 'Dar agua entre cada toma' },
        { letter: 'D', text: 'Mantener la lactancia materna a libre demanda' },
        { letter: 'E', text: 'Suspender la lactancia nocturna' },
      ],
      correct: 'D',
      explanation: 'Aunque el Peso para la Talla en +2 DE corresponde a obesidad, mientras el lactante esté con lactancia materna exclusiva no se indica ninguna medida restrictiva: se mantiene la lactancia a libre demanda hasta los 6 meses.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil dieciséis. Lactante de tres meses, que pesa siete kilos, con lactancia materna exclusiva a libre demanda. Su peso para la edad está en más uno, y su peso para la talla en más dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar fórmula de relleno, amamantar cada cuatro horas, dar agua entre tomas, mantener la lactancia a libre demanda, o suspender la lactancia nocturna. Piénsalo.',
        answer: 'Es la D. El peso para la talla en más dos marca obesidad, pero mientras el lactante esté en lactancia materna exclusiva, no se toca nada: ni horario, ni agua, ni fórmula. La lactancia a libre demanda se regula sola, y esa es siempre la respuesta antes de los seis meses.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Madre consulta en el CESFAM sobre la alimentación de su hijo de 7 meses, que recibe almuerzo desde los 6 meses. La abuela recomienda endulzar el puré de fruta con miel de abeja y agregar una pizca de sal a la sopa.',
      question: '¿Cuál es la recomendación médica correcta?',
      options: [
        { letter: 'A', text: 'Permitir la miel, pero restringir la sal' },
        { letter: 'B', text: 'Permitir una pizca de sal, pero contraindicar la miel' },
        { letter: 'C', text: 'Contraindicar estrictamente tanto la miel como la sal y el azúcar durante todo el primer año' },
        { letter: 'D', text: 'Autorizar ambos alimentos en pequeñas cantidades' },
        { letter: 'E', text: 'Diluir la miel en leche tibia para inactivar sus toxinas' },
      ],
      correct: 'C',
      explanation: 'La miel está prohibida en menores de 1 año por el riesgo de botulismo del lactante, causado por esporas de Clostridium botulinum que germinan en el intestino del lactante. La sal y el azúcar tampoco se agregan durante el primer año, por la inmadurez renal y la formación de preferencias hipertensogénicas.',
      say: {
        stem: 'Una pregunta del banco EUNACOM. Una madre consulta en su centro de salud sobre la alimentación de su hijo de siete meses, que recibe almuerzo desde los seis meses. La abuela recomienda endulzar el puré de fruta con miel de abeja, y agregar sal a la sopa.',
        question: '¿Cuál es la recomendación médica correcta?',
        options: 'Las opciones: permitir la miel y restringir la sal, permitir la sal y prohibir la miel, prohibir ambas por completo, autorizar las dos en poca cantidad, o diluir la miel en leche tibia. Piénsalo.',
        answer: 'Es la C. La miel está prohibida en todo menor de un año por el riesgo de botulismo del lactante, y ese riesgo no se elimina diluyéndola ni cocinándola. Y la sal y el azúcar tampoco se agregan durante el primer año, por el riñón todavía inmaduro del lactante. La abuela, con cariño, te está proponiendo justo lo que nunca debes autorizar.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 55",
      "stem": "Puérpera en su décimo día posparto, con PCR para SARS-CoV-2 positiva y síntomas leves.",
      "question": "¿Cuál es la conducta respecto a la lactancia?",
      "options": [
        {
          "letter": "A",
          "text": "Suspender la lactancia hasta completar 10 días de aislamiento"
        },
        {
          "letter": "B",
          "text": "Mantener la lactancia con uso de mascarilla"
        },
        {
          "letter": "C",
          "text": "Extraer la leche y pasteurizarla antes de dársela al bebé"
        },
        {
          "letter": "D",
          "text": "Suspender la lactancia y cambiar a fórmula"
        },
        {
          "letter": "E",
          "text": "Mantener la lactancia sin restricciones"
        }
      ],
      "correct": "B",
      "explanation": "La COVID-19 materna no contraindica la lactancia: el virus no se transmite por la leche y la lactancia protege al lactante. Se mantiene con medidas para evitar el contagio respiratorio: mascarilla, higiene de manos y de mamas. Suspenderla o pasteurizar la leche no tiene beneficio.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Puérpera de diez días con PCR positiva para coronavirus y síntomas leves.",
        "question": "¿Qué haces con la lactancia?",
        "options": "Las opciones: suspender por aislamiento, mantener con mascarilla, extraer y pasteurizar, cambiar a fórmula, o mantener sin restricciones. Piénsalo.",
        "answer": "Es la B. La lactancia se mantiene, porque el virus no pasa por la leche, pero con mascarilla e higiene de manos. Mantenerla sin restricciones tienta, pero deja expuesto al bebé al contagio respiratorio."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 5.01.3.004 · Higiene de la alimentación",
      "stem": "Madre de un niño sano de 4 años, con peso y talla normales, consulta porque es mañoso para comer. Para que coma le promete postre como premio, lo deja comer frente a la televisión y, si no termina el plato, le prepara otra comida.",
      "question": "¿Cuál es la recomendación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Comidas en familia en horarios regulares, sin pantallas, sin usar alimentos como premio o castigo, respetando su saciedad"
        },
        {
          "letter": "B",
          "text": "Obligarlo a terminar el plato en cada comida"
        },
        {
          "letter": "C",
          "text": "Indicar suplementos nutricionales"
        },
        {
          "letter": "D",
          "text": "Permitir colaciones libres durante el día para asegurar la ingesta"
        },
        {
          "letter": "E",
          "text": "Ofrecerle solo los alimentos que acepta"
        }
      ],
      "correct": "A",
      "explanation": "La higiene de la alimentación busca hábitos saludables y una relación sana con la comida: horarios regulares, comer en familia, sin pantallas, ofrecer variedad repetidamente y respetar la saciedad. Usar la comida como premio, forzar o preparar menús alternativos refuerza la selectividad y se asocia a malnutrición por exceso y conductas alimentarias alteradas.",
      "say": {
        "stem": "Niño sano de cuatro años, mañoso para comer, al que premian con postre, dejan comer viendo televisión y le cocinan otra cosa si no termina.",
        "question": "¿Qué le recomiendas a la madre?",
        "options": "Las opciones: comidas en familia con horario, sin pantallas ni premios; obligarlo a terminar; suplementos; colaciones libres; o solo lo que acepta. Piénsalo.",
        "answer": "Es la A. Lo que corrige el problema son horarios, comer en familia sin pantallas y no usar la comida como premio. Obligarlo a terminar el plato tienta, pero forzar empeora la selectividad y no respeta su saciedad."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 3",
      "stem": "Un lactante de 12 meses es traído por su madre porque presenta coloración amarillo-anaranjada en las palmas de las manos, las plantas y las mejillas. No tiene otros antecedentes, pesa 9,5 kg, mide 73,5 cm y su examen físico no muestra otras alteraciones; las escleras son blancas.",
      "question": "¿Cuál es la causa de esta alteración?",
      "options": [
        {
          "letter": "A",
          "text": "Hipercolesterolemia"
        },
        {
          "letter": "B",
          "text": "Hipertrigliceridemia"
        },
        {
          "letter": "C",
          "text": "Hiperbilirrubinemia de predominio directo"
        },
        {
          "letter": "D",
          "text": "Hiperbilirrubinemia de predominio indirecto"
        },
        {
          "letter": "E",
          "text": "Un componente de la dieta"
        }
      ],
      "correct": "E",
      "explanation": "Coloración amarillo-anaranjada de palmas, plantas y surcos nasogenianos con escleras respetadas, en un lactante sano, es carotenemia por alta ingesta de alimentos ricos en betacarotenos (zanahoria, zapallo). Es benigna y se resuelve al moderar su consumo. La ictericia por hiperbilirrubinemia compromete precozmente las escleras.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un lactante de un año sano tiene las palmas, plantas y mejillas de color amarillo anaranjado, con escleras blancas.",
        "question": "¿Cuál es la causa?",
        "options": "Las opciones: hipercolesterolemia, hipertrigliceridemia, bilirrubina directa, bilirrubina indirecta o un componente de la dieta. Piénsalo.",
        "answer": "Es la E. Es una carotenemia por consumo alto de zanahoria o zapallo, benigna. La hiperbilirrubinemia tienta por la coloración amarilla, pero la ictericia tiñe primero las escleras, que aquí están blancas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.08.3.009 · Prevención de anemias por carencias nutricionales",
      "stem": "Lactante de 4 meses, nacido de término con peso adecuado, recibe lactancia materna exclusiva y crece normalmente. La madre consulta en el control de salud.",
      "question": "Según la norma MINSAL, ¿cuál es la indicación para prevenir la anemia ferropénica?",
      "options": [
        {
          "letter": "A",
          "text": "No requiere suplementación por recibir lactancia materna"
        },
        {
          "letter": "B",
          "text": "Hierro 6 mg/kg/día desde el nacimiento"
        },
        {
          "letter": "C",
          "text": "Suspender la lactancia e iniciar fórmula fortificada"
        },
        {
          "letter": "D",
          "text": "Hierro 1 mg/kg/día desde los 4 meses hasta el año"
        },
        {
          "letter": "E",
          "text": "Iniciar carne a los 2 meses de vida"
        }
      ],
      "correct": "D",
      "explanation": "Las reservas de hierro del lactante de término se agotan hacia los 4 a 6 meses y la leche materna aporta poco hierro. La norma indica hierro 1 mg/kg/día desde los 4 hasta los 12 meses en lactancia materna exclusiva (en prematuros, 2 mg/kg/día desde los 2 meses), junto con alimentación complementaria rica en hierro desde los 6 meses.",
      "say": {
        "stem": "Lactante de cuatro meses, de término, con lactancia materna exclusiva y crecimiento normal.",
        "question": "¿Cómo previenes la anemia ferropénica?",
        "options": "Las opciones: no suplementar, dosis altas desde el nacimiento, cambiar a fórmula, hierro un miligramo por kilo al día desde los cuatro meses hasta el año o carne a los dos meses. Piénsalo.",
        "answer": "Es la D. Hierro un miligramo por kilo al día desde los cuatro meses hasta el año. Pensar que la lactancia basta es el error: la leche materna aporta poco hierro."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Vitamina D', tag: 'Un número, para todos', kind: 'key', items: [
          { t: 'Cuatrocientas UI al día', d: 'Desde el mes 1 hasta el año',
            say: 'Cerremos con las reglas de oro. Vitamina D: cuatrocientas unidades al día, desde el mes de vida hasta el año, igual para todos.' },
        ] },
        { title: 'Hierro', tag: 'Depende de cómo nació', kind: 'pharma', items: [
          { t: 'Término: 1 mg/kg desde los 4', d: 'Prematuro: 2 a 3 mg/kg, desde los 2 meses',
            say: 'El hierro cambia con la prematurez: en el de término, un miligramo por kilo desde los cuatro meses; en el prematuro, más dosis y antes, desde los dos meses.' },
        ] },
        { title: 'Lo prohibido', tag: 'Todo el primer año', kind: 'alert', items: [
          { t: 'Miel: riesgo de botulismo', d: 'Sal, azúcar y leche de vaca entera',
            say: 'Y nunca en el primer año: miel, sal, azúcar y leche de vaca entera. Si te llevas una sola idea de hoy: la vitamina D es igual para todos, pero el hierro depende de cómo nació el niño. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Suplementación del lactante: vitamina D y hierro',
    root: N('start', 'Recién nacido en control de salud', 'Lactancia y suplementación',
      'Un recién nacido llega a su primer control. La vitamina D es igual para todos: cuatrocientas unidades al día, desde el mes de vida hasta el año. Para el hierro sí importa cómo nació.',
      ['', N('q', '¿Nació de término o prematuro?', 'Esto decide la dosis de hierro',
        'Pregúntate si nació de término y con peso adecuado, o si fue prematuro, o con bajo peso al nacer.',
        ['Término, sobre 2.500 gramos', N('do', 'Hierro desde los 4 meses', 'Un miligramo por kilo al día',
          'En el recién nacido de término, el hierro empieza a los cuatro meses, a un miligramo por kilo al día, hasta el año.',
          ['', N('do', 'A los 6 meses: alimentación complementaria', 'Primera comida, con aceite vegetal',
            'Y a los seis meses se introduce la primera comida, siempre con aceite vegetal agregado, y nunca con miel, sal ni azúcar.')])],
        ['Prematuro o bajo peso', N('alert', 'Hierro desde los 2 meses', 'Dos a tres miligramos por kilo al día',
          'En el prematuro o el niño bajo dos mil quinientos gramos, el hierro empieza antes, a los dos meses, y a mayor dosis, por sus depósitos más bajos.',
          ['', N('do', 'A los 6 meses: alimentación complementaria', 'Primera comida, con aceite vegetal',
            'Y a los seis meses, igual que en el niño de término, se introduce la primera comida, con aceite vegetal, y nunca con miel, sal ni azúcar.')])])]),
  },
};
