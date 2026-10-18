// Clase 18.20 — guion docente escrito a mano (formato: ver gastro-01.cjs y gastro-17.cjs).
// Fuente clínica: books/scripts/dataset_pediatria.cjs / dataset_pediatria_bloque_4.cjs (ped-20).
// Preguntas reales: EUNACOM Enero 2023 · Pregunta 8; EUNACOM Diciembre 2022 · Pregunta 150.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo basta con alimentar, cuándo va suero glucosado, y qué hacer con el calcio',
      say: 'Bienvenido. Hoy vemos la hipoglicemia neonatal y, junto a ella, la hipocalcemia del recién nacido. Es un tema que se pregunta seguido, y se ordena con una sola pregunta: tiene síntomas o no. Esa pregunta te va a decidir todo lo que viene. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el recién nacido hace hipoglicemia?',
      nodes: [
        { id: 'res', col: 0, row: 0, k: 'cause', t: 'Reservas mínimas de glucógeno', s: 'Prematuro, bajo peso, asfixia' },
        { id: 'ins', col: 0, row: 2, k: 'cause', t: 'Exceso de insulina fetal', s: 'Hijo de madre diabética, macrosómico' },
        { id: 'mec', col: 1, row: 1, k: 'mech', t: 'El cerebro solo usa glucosa', s: 'No tiene reserva propia' },
        { id: 'cor', col: 2, row: 1, k: 'effect', t: 'Glicemia bajo el corte', s: 'Menos de 45' },
        { id: 'sin', col: 3, row: 0, k: 'risk', t: 'Temblores, succión débil', s: 'A veces no da ningún síntoma' },
        { id: 'dan', col: 3, row: 2, k: 'risk', t: 'Convulsión si no lo tratas', s: 'Daño cerebral permanente' },
      ],
      edges: [
        { from: 'res', to: 'mec', label: 'se agota rápido' },
        { from: 'ins', to: 'mec', label: 'consume de más' },
        { from: 'mec', to: 'cor' },
        { from: 'cor', to: 'sin' },
        { from: 'cor', to: 'dan', label: 'si persiste' },
      ],
      steps: [
        { show: ['res'], note: 'Prematuro, bajo peso, asfixia: casi sin reserva',
          say: 'Empecemos por el mecanismo, porque te va a explicar a quién le pides el examen. Hay dos caminos para llegar a la hipoglicemia. El primero es tener casi nada guardado: eso pasa en el prematuro, en el niño pequeño para su edad gestacional, y en el que sufrió asfixia al nacer.' },
        { show: ['ins'], note: 'Hijo de madre diabética: insulina alta, se acaba el azúcar',
          say: 'El segundo camino es al revés: el hijo de madre diabética trae la insulina muy alta, porque se acostumbró a la glucosa extra que le llegaba de su mamá. Al cortar el cordón, esa insulina se queda circulando y le consume la glucosa mucho más rápido de lo normal.' },
        { show: ['mec'], note: 'El cerebro no guarda glucosa: depende del minuto a minuto',
          say: 'Y aquí está la clave que explica por qué esto es urgente: el cerebro del recién nacido no fabrica ni guarda su propia glucosa. Vive del azúcar que circula en ese momento. Si se le acaba, no tiene ningún plan B.' },
        { show: ['cor'], note: 'El corte está en 45',
          say: 'Por eso se fija un corte: hablamos de hipoglicemia cuando la glicemia baja de cuarenta y cinco miligramos por decilitro. Fíjate en un detalle que se pregunta: en las primeras cuatro horas de vida el corte es un poco más bajo, cuarenta, porque toda guagua tiene una caída fisiológica al nacer.' },
        { show: ['sin'], note: 'Puede no dar ningún síntoma',
          say: 'Ahora, ¿cómo se te presenta? Con temblores finos, succión débil, decaimiento, o episodios de apnea. Pero acuérdate de esto: la mayoría de los recién nacidos de riesgo no tiene ningún síntoma. Por eso a estos grupos les tomas el examen aunque se vean perfectos.' },
        { show: ['dan'], note: 'El daño se acumula si no corriges',
          say: 'Y si esa glicemia baja se mantiene o se repite, el riesgo ya no es un temblor: son convulsiones, y un daño en el cerebro que después no se revierte. Por eso no se trata de esperar a ver qué pasa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo escalonado',
      title: '¿Cuándo basta con alimentar, y cuándo va suero?',
      cards: [
        { title: 'Sin síntomas, glicemia entre 35 y 44', tag: 'Primer escalón', kind: 'normal', items: [
          { t: 'Alimenta de inmediato', d: 'Pecho o fórmula, y controlas de nuevo',
            say: 'Vamos al manejo, escalón por escalón. Si el recién nacido está sin síntomas y la glicemia está entre treinta y cinco y cuarenta y cuatro, tu primer paso no es el suero: es alimentarlo de inmediato, al pecho o con fórmula.' },
          { t: 'Control en 30 a 60 minutos', d: 'Si sube, sigues con tomas frecuentes',
            say: 'Y controlas la glicemia entre treinta y sesenta minutos después. Si se normaliza, sigues con tomas frecuentes y controles antes de cada una.' },
        ] },
        { title: 'Con síntomas, o glicemia bajo 35', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Bolo de suero glucosado al diez', d: 'Dos mililitros por kilo, en cinco minutos',
            say: 'Pero si tiene síntomas, o la glicemia ya está bajo treinta y cinco, aquí no hay tiempo para esperar que coma: es un bolo endovenoso de suero glucosado al diez por ciento, dos mililitros por kilo, pasado lento en cinco minutos.' },
          { t: 'Luego, infusión continua', d: 'Seis a ocho miligramos por kilo por minuto',
            say: 'Y ese bolo siempre va seguido de una infusión continua, para no dejarlo caer de nuevo apenas se le pase el efecto.' },
        ] },
        { title: 'La trampa del examen', tag: 'Ojo', kind: 'key', items: [
          { t: 'Nunca suero al veinte o cincuenta', d: 'En bolo, sube la insulina de rebote',
            say: 'Y una trampa clásica: nunca le pases un bolo de suero glucosado al veinte o al cincuenta. Suena más potente, pero le dispara la insulina de rebote y lo deja peor. El bolo siempre es al diez.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipocalcemia neonatal',
      title: 'El otro trastorno que va de la mano',
      cards: [
        { title: 'Definición y momento', tag: 'Precoz vs tardía', kind: 'criteria', items: [
          { t: 'Calcio bajo siete en el prematuro', d: 'Bajo ocho en el de término',
            say: 'De la mano con la glicemia va el calcio. Hablamos de hipocalcemia con un calcio bajo siete en el prematuro, o bajo ocho en el recién nacido de término.' },
          { t: 'Precoz: primeras 72 horas', d: 'Mismos grupos de riesgo que la hipoglicemia',
            say: 'La forma precoz aparece en las primeras setenta y dos horas, y fíjate que comparte exactamente los mismos grupos de riesgo: el prematuro, el asfixiado, y el hijo de madre diabética.' },
        ] },
        { title: 'Tratamiento', tag: 'Si hay síntomas', kind: 'pharma', items: [
          { t: 'Gluconato de calcio al diez', d: 'Uno a dos mililitros por kilo, lento',
            say: 'Si le da temblores, o el electrocardiograma muestra el intervalo prolongado, el tratamiento es gluconato de calcio al diez por ciento, uno a dos mililitros por kilo, endovenoso lento.' },
          { t: 'Siempre con monitor cardíaco', d: 'Puede provocar una bradicardia grave',
            say: 'Y nunca lo pases sin monitor: si se lo das rápido, le puede provocar una bradicardia severa. Este dato del monitor es justo lo que más te van a preguntar aquí.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hematocrito alto',
      title: 'Policitemia neonatal',
      cards: [
        { title: 'Definición y causas', tag: 'Hematocrito venoso mayor a 65%', kind: 'key', items: [
          { t: 'Hematocrito venoso sobre 65%', d: 'O hemoglobina sobre 22 g/dL',
            say: 'La policitemia es un hematocrito venoso central sobre sesenta y cinco por ciento, o hemoglobina sobre veintidós. Ojo: el hematocrito capilar sobreestima, así que se confirma en sangre venosa.' },
          { t: 'Hipoxia crónica o transfusión', d: 'PEG, hijo de madre diabética, postérmino, clampeo tardío',
            say: 'Las causas son más eritropoyesis por hipoxia crónica, en el pequeño para la edad, el hijo de madre diabética y el postérmino, o una transfusión, por clampeo tardío del cordón o el gemelo receptor en una transfusión feto-fetal.' },
        ] },
        { title: 'Clínica', tag: 'Por hiperviscosidad', kind: 'alert', items: [
          { t: 'Pletórico, letárgico, mala succión', d: 'Taquipnea, cianosis, hipoglicemia, ictericia',
            say: 'El niño está pletórico, letárgico, con mala succión, taquipnea, cianosis, hipoglicemia, ictericia y a veces convulsiones.' },
          { t: 'Trombosis renal y enterocolitis', d: 'Y también hipertensión pulmonar',
            say: 'Por la hiperviscosidad pueden aparecer trombosis, sobre todo renal, enterocolitis necrotizante e hipertensión pulmonar.' },
        ] },
        { title: 'Manejo', tag: 'Según síntomas y valor', kind: 'pharma', items: [
          { t: 'Asintomático, 65 a 70%', d: 'Hidratar; glicemia y hematocrito seriados',
            say: 'Si está asintomático y el hematocrito está entre sesenta y cinco y setenta por ciento, lo hidratas y controlas glicemia y hematocrito de forma seriada.' },
          { t: 'Sintomático o sobre 70%', d: 'Exsanguinotransfusión parcial con suero fisiológico',
            say: 'Si tiene síntomas, o el hematocrito pasa de setenta por ciento, exsanguinotransfusión parcial con suero fisiológico, para llevar el hematocrito a cerca de cincuenta y cinco por ciento, en una unidad neonatal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'El hiperinsulinismo fetal',
      title: 'Hijo de madre diabética',
      cards: [
        { title: 'Por qué', tag: 'Hiperglicemia materna', kind: 'key', items: [
          { t: 'Hiperinsulinismo fetal', d: 'Macrosomía y adiposidad',
            say: 'La hiperglicemia de la madre hace que el feto produzca mucha insulina: eso explica la macrosomía y la adiposidad, y casi todo lo que viene después.' },
          { t: 'Hipoglicemia: la más frecuente', d: 'Entre la hora 1 y la 12 de vida',
            say: 'La complicación más frecuente es la hipoglicemia, entre la primera y la duodécima hora de vida. Se suman hipocalcemia, hipomagnesemia, policitemia e hiperbilirrubinemia.' },
        ] },
        { title: 'Otras complicaciones', tag: 'Para no olvidar', kind: 'alert', items: [
          { t: 'Membrana hialina', d: 'La insulina retrasa el surfactante',
            say: 'El exceso de insulina retrasa la maduración del surfactante, por eso hacen membrana hialina.' },
          { t: 'Miocardiopatía hipertrófica septal', d: 'Ecocardiograma; sin inotrópicos',
            say: 'Se sospecha miocardiopatía hipertrófica septal ante un soplo o dificultad respiratoria: ecocardiograma, hidratación y betabloqueador, evitando los inotrópicos.' },
          { t: 'Trauma obstétrico y trombosis renal', d: 'Distocia, Erb, clavícula',
            say: 'Y trauma obstétrico, con distocia de hombros, parálisis de Erb y fractura de clavícula, además de trombosis de la vena renal. En la diabetes pregestacional se suman malformaciones: cardiopatías, defectos del tubo neural, síndrome de regresión caudal y colon izquierdo pequeño.' },
        ] },
        { title: 'Manejo', tag: 'Completo y derivar', kind: 'pharma', items: [
          { t: 'Glicemia al nacer y seriada', d: 'Alimentación precoz',
            say: 'Mides glicemia al nacer y de forma seriada, alimentas precoz, y pides calcemia, hematocrito y bilirrubina.' },
          { t: 'Observar al menos 24 horas', d: 'Ecocardiograma si soplo o distrés',
            say: 'Haces ecocardiograma si hay soplo o distrés, observas por al menos veinticuatro horas, y los casos con complicaciones se derivan a una unidad neonatal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando el cerebro avisa',
      title: 'Convulsiones neonatales',
      cards: [
        { title: 'Cómo se ven', tag: 'A menudo sutiles', kind: 'key', items: [
          { t: 'Sutiles: ojos, chupeteo, pedaleo', d: 'O apneas; también clónicas, tónicas, mioclónicas',
            say: 'Las convulsiones neonatales suelen ser sutiles: movimientos oculares, chupeteo, pedaleo o apneas. También pueden ser clónicas focales, tónicas o mioclónicas.' },
          { t: 'Temblor benigno', d: 'Cede al sujetar; sin ojos ni apnea',
            say: 'Las distingues del temblor benigno, el jitteriness: se desencadena con estímulos, cede al sujetar la extremidad y no tiene movimientos oculares ni apnea. La confirmación es con electroencefalograma.' },
        ] },
        { title: 'Causas', tag: 'Y estudio inicial', kind: 'criteria', items: [
          { t: 'Encefalopatía hipóxico-isquémica', d: 'La más frecuente, primeras 24 a 48 horas',
            say: 'La causa más frecuente es la encefalopatía hipóxico-isquémica, en las primeras veinticuatro a cuarenta y ocho horas. Siguen la hemorragia o el infarto, las infecciones como meningitis y TORCH, y los trastornos metabólicos: hipoglicemia, hipocalcemia, hipomagnesemia y alteraciones del sodio.' },
          { t: 'Glicemia, calcio, magnesio, sodio', d: 'Hemocultivo, punción lumbar, ecografía',
            say: 'El estudio inicial parte por glicemia inmediata, calcio, magnesio y sodio, gases, hemograma y hemocultivo, punción lumbar si sospechas infección, ecografía transfontanelar y resonancia, y pruebas metabólicas si no hay causa evidente.' },
        ] },
        { title: 'Tratamiento', tag: 'Causa primero', kind: 'pharma', items: [
          { t: 'Corregir la causa', d: 'Glucosado 10% 2 mL/kg; gluconato de calcio',
            say: 'Primero corriges la causa: suero glucosado al diez por ciento, dos mililitros por kilo, o gluconato de calcio.' },
          { t: 'Fenobarbital 20 mg/kg EV', d: 'Luego fenitoína o levetiracetam; piridoxina',
            say: 'La primera línea es fenobarbital, veinte miligramos por kilo endovenoso. De segunda línea, fenitoína o levetiracetam, con ensayo de piridoxina en las refractarias. Derivas a UCI neonatal y neurología.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "La glicemia que cae",
      images: [
        { src: 'animaciones/ped-20/A1_glicemia_neonatal.mp4', label: "Primeras horas de vida", credit: "Animación propia" },
      ],
      steps: [
        { note: "Quién cae y qué haces",
          say: "Mira las dos curvas desde el parto. El recién nacido sano baja un poco y se recupera solo. El prematuro, el pequeño para la edad o el hijo de madre diabética cae bajo cuarenta y cinco. Entre treinta y cinco y cuarenta y cuatro, sin síntomas, alimentas y controlas. Bajo treinta y cinco, o con síntomas, bolo de suero glucosado al diez por ciento y luego infusión. Nunca un bolo al veinte o al cincuenta." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo esto en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El corte, la dosis y el error clásico',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Riesgo, sin síntomas, glicemia 35–44', 'Alimentar y controlar en 30–60 min', 'Pasar suero de entrada'],
          say: 'Repasemos con una tabla. Riesgo, sin síntomas, glicemia entre treinta y cinco y cuarenta y cuatro: alimentas y controlas. El error es saltarte ese paso y pasar suero de entrada.' },
        { cells: ['Síntomas o glicemia bajo 35', 'Bolo de suero glucosado al 10 % + infusión', 'Solo alimentar y esperar'],
          say: 'Con síntomas, o glicemia bajo treinta y cinco: bolo de suero glucosado al diez y luego infusión. El error contrario es intentar solo alimentarlo y esperar.' },
        { cells: ['Cualquier bolo de glucosa', 'Siempre al 10 %', 'Usar suero al 20 % o al 50 %'],
          say: 'En cualquier bolo, siempre al diez por ciento. Usar uno al veinte o al cincuenta es el error que más se repite en este tema.' },
        { cells: ['Policitemia con síntomas o Hto sobre 70%', 'Exsanguinotransfusión parcial', 'Solo hidratar y esperar'],
          say: 'Policitemia con síntomas, o hematocrito sobre setenta: exsanguinotransfusión parcial con suero fisiológico. El error es solo hidratar y esperar.' },
        { cells: ['Hijo de madre diabética', 'Glicemia seriada y observar 24 horas', 'Dar el alta a las pocas horas'],
          say: 'Hijo de madre diabética: glicemia desde el nacimiento y observación por al menos veinticuatro horas. El error es dar el alta temprano, sin controlar la glicemia.' },
        { cells: ['Convulsión neonatal', 'Glicemia y calcio, luego fenobarbital', 'Partir con el anticonvulsivante sin corregir'],
          say: 'Convulsión neonatal: primero glicemia, calcio, magnesio y sodio, y fenobarbital como primera línea. El error es dar el anticonvulsivante sin buscar ni corregir la causa metabólica.' },
        { cells: ['Hipocalcemia sintomática', 'Gluconato de calcio con monitor', 'Pasarlo rápido y sin monitor'],
          say: 'Y en la hipocalcemia con síntomas: gluconato de calcio, siempre con monitor cardíaco. Pasarlo rápido y sin vigilancia es lo que causa la bradicardia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de 39 semanas, hijo de madre con diabetes gestacional en tratamiento con insulina. Nace por cesárea, peso 4.350 g. A las 2 horas de vida presenta temblores finos de extremidades, succión débil y tono algo disminuido. El hemoglucotest marca 32 mg/dL, confirmado por glicemia venosa en 30 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Ofrecer pecho materno y controlar la glicemia en 2 horas más' },
        { letter: 'B', text: 'Bolo de suero glucosado al 10 % 2 mL/kg en 5 minutos, seguido de infusión continua' },
        { letter: 'C', text: 'Bolo rápido de suero glucosado al 50 % 5 mL/kg' },
        { letter: 'D', text: 'Observación estricta, sin tratamiento, por ser un hallazgo esperable en un hijo de madre diabética' },
        { letter: 'E', text: 'Hidrocortisona endovenosa como primera línea' },
      ],
      correct: 'B',
      explanation: 'Hijo de madre diabética, macrosómico, con hipoglicemia sintomática (temblores, succión débil) y glicemia venosa de 30 mg/dL: es una urgencia. La alimentación sola no corrige rápido ni previene el daño neurológico. El manejo es bolo de suero glucosado al 10 % 2 mL/kg endovenoso en 5 minutos, seguido de infusión continua con carga de 6 a 8 mg/kg/min.',
      say: {
        stem: 'Vamos con el caso. Recién nacido de treinta y nueve semanas, hijo de madre con diabetes gestacional en tratamiento con insulina, nacido por cesárea con cuatro mil trescientos cincuenta gramos. A las dos horas de vida tiene temblores finos, succión débil y algo de hipotonía. El hemoglucotest marca treinta y dos, confirmado con glicemia venosa en treinta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: pecho materno y control en dos horas, bolo de suero glucosado al diez con infusión, bolo rápido de suero al cincuenta, solo observar porque es esperable, o hidrocortisona de entrada. Piénsalo.',
        answer: 'Es la B. Este paciente ya tiene síntomas y una glicemia bien baja: no es momento de esperar a ver si come. Va bolo de suero glucosado al diez, dos mililitros por kilo en cinco minutos, y de inmediato la infusión continua. El suero al cincuenta es la trampa: parece más potente, pero dispara la insulina de rebote. Y observar sin tratar, con temblores y succión débil, es dejarlo avanzar hacia el daño que veníamos explicando.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 8',
      stem: 'Recién nacido pequeño para la edad gestacional, 2.500 g.',
      question: '¿Qué conducta tomar en relación a la alimentación?',
      options: [
        { letter: 'A', text: 'Iniciar fórmula láctea hipercalórica' },
        { letter: 'B', text: 'Instalar sonda nasogástrica para alimentación' },
        { letter: 'C', text: 'Ayuno de 6 horas y luego fórmula de prematuro' },
        { letter: 'D', text: 'Pecho materno precoz y control de glicemia a las 2 horas' },
        { letter: 'E', text: 'Suero glucosado al 10 % endovenoso' },
      ],
      correct: 'D',
      explanation: 'El recién nacido pequeño para la edad gestacional tiene reservas mínimas de glucógeno, así que es de riesgo aunque nazca sin ningún síntoma. La conducta de entrada no es el suero: es pecho materno precoz, con control de glicemia a las 2 horas, tal como viste en el primer escalón del manejo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Recién nacido pequeño para la edad gestacional, con dos mil quinientos gramos.',
        question: '¿Qué conducta tomar en relación a la alimentación?',
        options: 'Las opciones: fórmula hipercalórica, sonda nasogástrica, ayuno de seis horas y fórmula de prematuro, pecho materno precoz con control en dos horas, o suero glucosado endovenoso de entrada.',
        answer: 'Es la D. Fíjate que este recién nacido no tiene ningún síntoma: solo tiene el factor de riesgo, el bajo peso. Y ese es justo el escenario del primer escalón que vimos: no partes con suero, partes alimentando precoz y controlando la glicemia a las dos horas. El suero endovenoso de entrada es la trampa, porque se salta un paso que aquí es innecesario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 150',
      stem: 'Recién nacido de término, con antecedente de madre con preeclampsia, pesa 2.600 gramos al nacer.',
      question: '¿Cuál es la complicación más frecuente durante las primeras horas de vida?',
      options: [
        { letter: 'A', text: 'Hipoglicemia' },
        { letter: 'B', text: 'Sepsis' },
        { letter: 'C', text: 'Hiperbilirrubinemia' },
        { letter: 'D', text: 'Anemia' },
        { letter: 'E', text: 'Distrés respiratorio' },
      ],
      correct: 'A',
      explanation: 'La preeclampsia materna suele producir un recién nacido pequeño para la edad gestacional, con reservas de glucógeno casi nulas. La complicación más frecuente en las primeras horas es la hipoglicemia, no la anemia ni el distrés respiratorio.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Recién nacido de término, hijo de madre con preeclampsia, que pesa dos mil seiscientos gramos al nacer.',
        question: '¿Cuál es la complicación más frecuente durante las primeras horas de vida?',
        options: 'Las opciones son: hipoglicemia, sepsis, hiperbilirrubinemia, anemia, o distrés respiratorio.',
        answer: 'Es la A. Con la preeclampsia de la madre, este recién nacido nació chico para su edad gestacional, y ya sabes lo que eso significa: reservas casi en cero. La trampa aquí es la anemia. El pequeño para la edad gestacional no se pone anémico, se pone policitémico, así que la anemia queda descartada, y la respuesta es la hipoglicemia.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.119 · Hipocalcemia",
      "stem": "Recién nacido de 37 semanas, hijo de madre diabética pregestacional, de 30 horas de vida. Presenta temblores de extremidades e irritabilidad. Glicemia 62 mg/dL. Calcio total 6,6 mg/dL. El electrocardiograma muestra un intervalo QT prolongado.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Bolo de suero glucosado al 10% 2 mL/kg"
        },
        {
          "letter": "B",
          "text": "Fenobarbital endovenoso por sospecha de convulsión"
        },
        {
          "letter": "C",
          "text": "Gluconato de calcio en bolo rápido sin monitorización"
        },
        {
          "letter": "D",
          "text": "Gluconato de calcio al 10% 1 a 2 mL/kg endovenoso lento, con monitor cardíaco"
        },
        {
          "letter": "E",
          "text": "Solo observación, porque es esperable en el hijo de madre diabética"
        }
      ],
      "correct": "D",
      "explanation": "Calcio bajo 8 mg/dL en un recién nacido de término es hipocalcemia; el hijo de madre diabética es grupo de riesgo. Con síntomas o QT prolongado se trata con gluconato de calcio al 10% endovenoso lento con monitor, porque pasarlo rápido causa bradicardia y arritmias. La glicemia es normal.",
      "say": {
        "stem": "Recién nacido de treinta y siete semanas, hijo de madre diabética, de treinta horas de vida, con temblores e irritabilidad. La glicemia es sesenta y dos, el calcio total seis coma seis, y el electrocardiograma muestra un QT prolongado.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: bolo de suero glucosado, fenobarbital, gluconato de calcio rápido sin monitor, gluconato de calcio endovenoso lento con monitor o solo observar. Piénsalo.",
        "answer": "Es la D. Es una hipocalcemia sintomática con QT largo, y se trata con gluconato de calcio al diez por ciento, lento y con monitor cardíaco. El suero glucosado tienta porque es hijo de madre diabética, pero la glicemia está normal; el problema aquí es el calcio."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.115 · Convulsiones neonatales",
      "stem": "Un recién nacido de término, hijo de madre con diabetes gestacional, presenta a las 6 horas de vida movimientos de pedaleo de extremidades y desviación ocular sostenida, de 1 minuto de duración. Está en buenas condiciones generales, sin fiebre.",
      "question": "¿Cuál es la primera medida diagnóstica?",
      "options": [
        {
          "letter": "A",
          "text": "Electroencefalograma"
        },
        {
          "letter": "B",
          "text": "Punción lumbar"
        },
        {
          "letter": "C",
          "text": "Glicemia capilar"
        },
        {
          "letter": "D",
          "text": "Ecografía cerebral"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética cerebral"
        }
      ],
      "correct": "C",
      "explanation": "Ante una convulsión neonatal, lo primero es medir la glicemia capilar, porque la hipoglicemia es una causa frecuente, rápidamente tratable y que deja secuelas si no se corrige; el hijo de madre diabética tiene alto riesgo. Luego se miden calcio, magnesio y electrolitos y se buscan otras causas (encefalopatía hipóxico-isquémica, infección, hemorragia). El EEG y las imágenes vienen después.",
      "say": {
        "stem": "Un recién nacido de término, hijo de madre diabética, tiene a las seis horas de vida movimientos de pedaleo y desviación ocular por un minuto.",
        "question": "¿Cuál es la primera medida diagnóstica?",
        "options": "Las opciones: electroencefalograma, punción lumbar, glicemia capilar, ecografía cerebral o resonancia. Piénsalo.",
        "answer": "Es la C. Ante una convulsión neonatal lo primero es la glicemia capilar, porque la hipoglicemia es frecuente y se corrige al tiro. El electroencefalograma tienta para confirmar la convulsión, pero no debe retrasar descartar una causa metabólica tratable."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.122 · Poliglobulia",
      "stem": "Un recién nacido de término, pequeño para la edad gestacional, a las 12 horas de vida se ve pletórico, con letargia, temblores y succión débil. Exámenes: hematocrito venoso 71% y glicemia 38 mg/dL.",
      "question": "¿Cuál es el tratamiento más adecuado de la poliglobulia?",
      "options": [
        {
          "letter": "A",
          "text": "Flebotomía simple sin reposición"
        },
        {
          "letter": "B",
          "text": "Exsanguinotransfusión parcial con suero fisiológico"
        },
        {
          "letter": "C",
          "text": "Hidratación oral exclusiva y control"
        },
        {
          "letter": "D",
          "text": "Transfusión de plaquetas"
        },
        {
          "letter": "E",
          "text": "Fototerapia"
        }
      ],
      "correct": "B",
      "explanation": "Poliglobulia neonatal es un hematocrito venoso mayor a 65%; en pequeños para la edad gestacional se debe a hipoxia crónica intrauterina. Causa hiperviscosidad, con letargia, hipoglicemia, dificultad respiratoria o enterocolitis. Si es sintomática (o el hematocrito es mayor a 70 a 75%), se realiza exsanguinotransfusión parcial con suero fisiológico para bajar el hematocrito a 55%, además de corregir la glicemia.",
      "say": {
        "stem": "Un recién nacido pequeño para la edad gestacional está pletórico, letárgico y con temblores, con hematocrito venoso de setenta y uno y glicemia baja.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: flebotomía sin reposición, exsanguinotransfusión parcial con suero fisiológico, solo hidratación oral, plaquetas o fototerapia. Piénsalo.",
        "answer": "Es la B. Una poliglobulia sintomática se trata con exsanguinotransfusión parcial con suero fisiológico. La flebotomía simple tienta, pero sin reposición de volumen puede causar hipotensión en el recién nacido."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que ordena todo', tag: 'Síntomas o no', kind: 'key', items: [
          { t: 'Sin síntomas, 35 a 44', d: 'Alimentas y controlas en 30 a 60 minutos',
            say: 'Cerremos con las reglas de oro. La pregunta que ordena todo es si hay síntomas. Sin síntomas y entre treinta y cinco y cuarenta y cuatro: alimentas y controlas.' },
          { t: 'Síntomas o bajo 35', d: 'Bolo de suero al 10 % más infusión',
            say: 'Con síntomas, o bajo treinta y cinco: bolo de suero glucosado al diez, y de inmediato la infusión continua.' },
        ] },
        { title: 'Lo que nunca se hace', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Nunca suero al 20% o 50%', d: 'En bolo, dispara la insulina',
            say: 'Nunca uses suero al veinte o al cincuenta en bolo.' },
          { t: 'Nunca calcio sin monitor', d: 'Riesgo de bradicardia grave',
            say: 'Y nunca pases el gluconato de calcio sin monitor cardíaco.' },
        ] },
        { title: 'Lo que comparten', tag: 'Mismos factores de riesgo', kind: 'normal', items: [
          { t: 'Hipoglicemia e hipocalcemia van juntas', d: 'Prematuro, asfixia, hijo de madre diabética',
            say: 'Y ante una convulsión neonatal, primero descartas hipoglicemia y trastornos del calcio, y recién ahí fenobarbital. Si te llevas una sola idea de hoy: hipoglicemia e hipocalcemia comparten los mismos grupos de riesgo, y en los dos casos, el síntoma es lo que te obliga a actuar rápido. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nSigueFrecuentes = N('ok', 'Sigue con tomas frecuentes', 'Controles antes de cada una',
      'Si se corrigió, mantienes tomas frecuentes con controles preprandiales.');
    const nEndovenosa = N('alert', 'Inicia vía endovenosa', 'Igual que la sintomática',
      'Si persiste baja, ya no insistes con la vía oral: pasas a la vía endovenosa.');
    const nSeCorrigio = N('q', '¿Se corrigió?', 'Bajo 45 tras dos tomas',
      'Si tras alimentar la glicemia sigue baja, cambias de camino.',
      ['Sí', nSigueFrecuentes],
      ['No', nEndovenosa]);
    const nAlimenta = N('do', 'Alimenta y controla', 'En 30 a 60 minutos',
      'Sin síntomas y con una glicemia entre treinta y cinco y cuarenta y cuatro: alimentas de inmediato, y controlas en treinta a sesenta minutos.',
      ['', nSeCorrigio]);
    const nInfusion = N('do', 'Infusión continua después', 'Seis a ocho miligramos por kilo por minuto',
      'Y siempre sigue con una infusión continua, para sostener la glicemia sobre el corte de seguridad.');
    const nBolo = N('alert', 'Bolo de suero glucosado al 10 %', 'Dos mililitros por kilo, en cinco minutos',
      'Con síntomas, o una glicemia bajo treinta y cinco, es una urgencia: bolo endovenoso de suero glucosado al diez por ciento.',
      ['', nInfusion]);
    const nTieneSintomas = N('q', '¿Tiene síntomas?', 'Temblores, succión débil, apnea',
      'Primero preguntas si hay síntomas neurológicos. La respuesta te separa en dos caminos completamente distintos.',
      ['No, glicemia 35 a 44', nAlimenta],
      ['Sí, o glicemia bajo 35', nBolo]);
    return {
      title: 'Hipoglicemia neonatal: síntomas o no',
      root: N('start', 'Recién nacido de riesgo', 'Hijo de madre diabética, PEG, prematuro, asfixia',
        'Recién nacido de un grupo de riesgo, con hemoglucotest bajo el corte. La pregunta que decide todo es si tiene síntomas.',
        ['', nTieneSintomas]),
    };
  })(),
};
