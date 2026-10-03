// Clase 1.5 (Diabetes) — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuánto ejercicio indicar, cuándo comer antes y qué ejercicio evitar según la complicación',
      say: 'Bienvenidos. Hoy vemos el ejercicio y los cambios de estilo de vida en la diabetes. Parece un tema blando, pero el examen lo pregunta con precisión: cuántos minutos a la semana, qué hacer si la glicemia está baja antes de salir a caminar, y qué ejercicio no le indicas a un paciente con neuropatía. Y todo se responde entendiendo una sola cosa: el músculo que se contrae capta glucosa sin necesitar insulina.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: '¿Por qué el ejercicio baja la glicemia?',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'cause', t: 'Contracción muscular', s: 'Ejercicio aeróbico o de fuerza' },
        { id: 'ampk', col: 1, row: 1, k: 'mech', t: 'Activa la AMPK', s: 'Proteína quinasa activada por AMP' },
        { id: 'glut', col: 2, row: 1, k: 'mech', t: 'GLUT-4 sube a la membrana', s: 'Sin necesitar insulina' },
        { id: 'cap', col: 3, row: 0, k: 'good', t: 'Capta glucosa', s: 'HbA1c baja 0,5 a 1,0 %' },
        { id: 'sen', col: 3, row: 2, k: 'effect', t: 'Más sensibilidad a insulina', s: 'Dura 24 a 48 horas' },
        { id: 'hip', col: 4, row: 2, k: 'risk', t: 'Hipoglicemia tardía', s: 'Nocturna, con insulina o sulfonilureas' },
      ],
      edges: [
        { from: 'con', to: 'ampk' }, { from: 'ampk', to: 'glut' },
        { from: 'glut', to: 'cap' }, { from: 'glut', to: 'sen', label: 'después' },
        { from: 'sen', to: 'hip', label: 'si hay fármaco' },
      ],
      steps: [
        { show: ['con'], note: 'Todo parte del músculo que trabaja',
          say: 'Partamos por el mecanismo, porque explica todas las reglas de la clase. Cuando el músculo esquelético se contrae, necesita energía, y la saca de la glucosa de la sangre.' },
        { show: ['ampk'], note: 'La vía de la AMPK',
          say: 'La contracción activa una enzima, la proteína quinasa activada por AMP, la AMPK. Guarda ese nombre, porque en la clase de metformina lo vamos a volver a encontrar.' },
        { show: ['glut'], note: 'La clave: independiente de la insulina',
          say: 'La AMPK hace que los transportadores GLUT cuatro suban desde el citoplasma a la membrana de la célula muscular. Y aquí está lo importante: eso ocurre en forma totalmente independiente de la insulina. El músculo que trabaja abre sus propias puertas.' },
        { show: ['cap'], note: 'Efecto comparable a un fármaco',
          say: 'El resultado es que el músculo capta glucosa en forma masiva. Por eso el ejercicio programado, junto con la terapia nutricional, es la piedra angular no farmacológica de la diabetes: baja la hemoglobina glicosilada entre medio y un punto, algo comparable a un fármaco.' },
        { show: ['sen'], note: 'El efecto no termina al dejar de moverse',
          say: 'Pero el efecto no termina cuando el paciente deja de moverse. Después del esfuerzo, la sensibilidad a la insulina queda aumentada hasta por veinticuatro a cuarenta y ocho horas.' },
        { show: ['hip'], note: 'Ejercicio en la tarde, hipoglicemia en la noche',
          say: 'Y eso tiene una consecuencia práctica. Si el paciente además usa algo que baja la glicemia por su cuenta, como la insulina o una sulfonilurea, puede hacer una hipoglicemia tardía, típicamente nocturna, horas después de haber hecho ejercicio. Esa es la complicación que el examen quiere que prevengas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prescripción',
      title: 'Cuánto ejercicio indicar',
      cards: [
        { title: 'Aeróbico', tag: 'ADA y MINSAL', kind: 'key', items: [
          { t: '150 minutos a la semana', d: 'Intensidad moderada',
            say: 'Ahora, la prescripción. La cifra que tienes que saber de memoria es ciento cincuenta minutos a la semana de actividad física aeróbica de intensidad moderada. Esa es la recomendación de la Asociación Americana de Diabetes y del MINSAL.' },
          { t: 'Caminar rápido, nadar, bicicleta', d: 'Paso ligero, no paseo',
            say: '¿Qué cuenta como aeróbico moderado? Caminar a paso ligero, nadar o andar en bicicleta. No es pasear: es un ritmo que acelera la respiración.' },
          { t: 'Al menos 3 días por semana', d: 'Nunca más de 2 días seguidos sin actividad',
            say: 'Y esos minutos se reparten en al menos tres días por semana, sin dejar pasar más de dos días seguidos sin actividad. ¿Por qué ese detalle? Porque, como acabamos de ver, el efecto sobre la sensibilidad a la insulina dura uno a dos días. Si el paciente descansa más que eso, lo pierde.' },
        ] },
        { title: 'Fuerza', tag: 'Complemento', kind: 'normal', items: [
          { t: 'Resistencia muscular', d: '2 a 3 veces por semana',
            say: 'Al aeróbico se le suman ejercicios de resistencia muscular, dos a tres veces por semana. Más músculo significa más tejido que capta glucosa.' },
        ] },
        { title: 'Estilo de vida', tag: 'Pilar basal', kind: 'criteria', items: [
          { t: 'Junto con la terapia nutricional', d: 'Pilar no farmacológico',
            say: 'Y recuerda que el ejercicio no va solo. Es parte del cambio de estilo de vida, junto con la alimentación, y es la base sobre la que después se construye cualquier tratamiento con fármacos, como veremos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguridad',
      title: 'La glicemia antes de empezar decide',
      nodes: [
        { id: 'hgt', col: 0, row: 2, k: 'start', t: 'Glicemia capilar', s: 'Antes de hacer ejercicio' },
        { id: 'baj', col: 1, row: 0, k: 'risk', t: 'Menos de 100 mg/dL', s: 'Riesgo de hipoglicemia' },
        { id: 'col', col: 2, row: 0, k: 'good', t: 'Colación de 15 a 20 g', s: 'Carbohidratos rápidos o mixtos' },
        { id: 'seg', col: 1, row: 2, k: 'good', t: '100 a 250 mg/dL', s: 'Zona segura: puede hacer ejercicio' },
        { id: 'alt', col: 1, row: 4, k: 'alert', t: 'Más de 250 con cetonas', s: 'Sobre todo en DM1' },
        { id: 'sus', col: 2, row: 4, k: 'alert', t: 'Suspender el ejercicio', s: 'Hidratar e insulina rápida' },
      ],
      edges: [
        { from: 'hgt', to: 'baj' }, { from: 'baj', to: 'col', label: 'antes de partir' },
        { from: 'hgt', to: 'seg' },
        { from: 'hgt', to: 'alt' }, { from: 'alt', to: 'sus' },
      ],
      steps: [
        { show: ['hgt'], note: 'Se mide antes de salir',
          say: 'Veamos las reglas de seguridad, que son las que más se preguntan. Un paciente que usa insulina o sulfonilureas se mide la glicemia capilar antes de hacer ejercicio. Y ese número decide la conducta.' },
        { show: ['baj'], note: 'Bajo 100: el músculo va a consumir lo poco que hay',
          say: 'Si la glicemia está bajo cien miligramos por decilitro, hay riesgo real de hipoglicemia. Piensa en el mecanismo: el músculo va a empezar a captar glucosa, y el fármaco sigue actuando.' },
        { show: ['col'], note: 'No se suspende: se come antes',
          say: 'La conducta no es suspender el ejercicio. Es comer antes de empezar: una colación de quince a veinte gramos de carbohidratos de absorción rápida o mixta, por ejemplo una fruta o unas galletas de agua. Y después sale a caminar.' },
        { show: ['seg'], note: 'Entre 100 y 250: adelante',
          say: 'Entre cien y doscientos cincuenta, es la zona segura. El paciente puede hacer su ejercicio con buena hidratación.' },
        { show: ['alt'], note: 'Sobre 250 con cetonas: falta insulina',
          say: 'Y el extremo opuesto: una glicemia sobre doscientos cincuenta con cetonas en la orina o en la sangre, sobre todo en un diabético tipo uno. Ese paciente no tiene insulina suficiente.' },
        { show: ['sus'], note: 'El ejercicio sin insulina empuja a la cetoacidosis',
          say: 'Aquí el ejercicio está contraindicado temporalmente. Sin insulina, el esfuerzo aumenta la descarga de catecolaminas y empuja hacia la cetoacidosis. Se suspende, se hidrata y se administra insulina rápida. Fíjate en la lógica: bajo cien falta azúcar, y sobre doscientos cincuenta con cetonas falta insulina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipoglicemia de esfuerzo',
      title: '¿Qué fármacos son el problema?',
      cards: [
        { title: 'Riesgo de hipoglicemia', tag: 'Ojo con el ejercicio', kind: 'alert', items: [
          { t: 'Insulina', d: 'NPH o cristalina',
            say: 'No todos los pacientes diabéticos tienen el mismo riesgo al hacer ejercicio. El riesgo lo ponen los fármacos que bajan la glicemia sin importar cuánta glucosa haya. El primero es la insulina, NPH o cristalina.' },
          { t: 'Sulfonilureas', d: 'Glibenclamida',
            say: 'El segundo son las sulfonilureas, como la glibenclamida, que obligan al páncreas a liberar insulina aunque la glicemia esté baja. En la clase de hipoglucemiantes orales vamos a ver por qué es tan peligrosa.' },
        ] },
        { title: 'Sin hipoglicemia de esfuerzo', tag: 'Seguros', kind: 'normal', items: [
          { t: 'Metformina', d: 'No causa hipoglicemia con el ejercicio',
            say: 'En cambio, la metformina no causa hipoglicemia con el ejercicio.' },
          { t: 'Inhibidores SGLT2 y DPP-4', d: 'Tampoco',
            say: 'Y tampoco los inhibidores de SGLT dos ni los de DPP cuatro. Entonces, si en el enunciado el paciente solo usa metformina, la colación previa no es el tema de la pregunta.' },
        ] },
        { title: 'Hipoglicemia tardía', tag: 'Horas después', kind: 'criteria', items: [
          { t: 'Hasta 24 a 48 horas después', d: 'Típicamente nocturna',
            say: 'Y recuerda que el riesgo no termina al volver a casa. La mayor sensibilidad a la insulina dura hasta cuarenta y ocho horas, así que la hipoglicemia puede aparecer en la noche, cuando el paciente duerme.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones crónicas',
      title: 'Qué ejercicio evitar según la complicación',
      cards: [
        { title: 'Neuropatía periférica', tag: 'Pie diabético', kind: 'alert', items: [
          { t: 'Sin sensibilidad protectora', d: 'Ampollas, úlceras, fracturas por sobrecarga',
            say: 'Ahora, las precauciones según las complicaciones crónicas. La primera es la neuropatía periférica sensitiva. Ese paciente perdió la sensibilidad protectora: no siente la ampolla, no siente la piedra en el zapato. Y así aparecen úlceras, e incluso fracturas por sobrecarga, sin que se dé cuenta.' },
          { t: 'Evitar trote y caminar descalzo', d: 'Sobre todo en superficies irregulares',
            say: 'Por eso se desaconseja el ejercicio de impacto: trotar, saltar, o caminar descalzo, sobre todo en superficies irregulares.' },
          { t: 'Preferir natación o bicicleta', d: 'También remo o bicicleta estática',
            say: 'Lo que se recomienda es ejercicio sin impacto sobre la planta del pie: natación, remo o bicicleta estática. Esa es la respuesta que se pregunta.' },
          { t: 'Inspección diaria de los pies', d: 'Calzado acolchado sin costuras internas',
            say: 'Y siempre con inspección diaria y minuciosa de los pies, y calzado acolchado sin costuras internas. Esto lo retomamos en la clase de pie diabético.' },
        ] },
        { title: 'Retinopatía proliferativa', tag: 'Ojo', kind: 'criteria', items: [
          { t: 'Evitar Valsalva y pesas máximas', d: 'Tampoco ejercicio vigoroso ni saltos',
            say: 'La segunda es la retinopatía diabética proliferativa severa. Aquí el problema no es el pie, sino los vasos nuevos y frágiles de la retina. Se evitan los ejercicios vigorosos con maniobra de Valsalva y el levantamiento de pesas máximas.' },
          { t: 'Riesgo de hemorragia vítrea', d: 'O desprendimiento de retina',
            say: '¿Por qué? Porque el aumento brusco de presión puede romper esos vasos y producir una hemorragia vítrea, o un desprendimiento de retina. Fíjate que cada complicación prohíbe un tipo distinto de ejercicio: la neuropatía, el impacto; la retinopatía, el esfuerzo con fuerza.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol que usas antes de indicarle ejercicio a un paciente con diabetes.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Prescripción general', '150 min/semana aeróbico moderado, ≥ 3 días', 'Dejar más de 2 días seguidos sin ejercicio'],
          say: 'Repasemos las trampas. La prescripción general es ciento cincuenta minutos a la semana de aeróbico moderado, en al menos tres días. El error es concentrarlo todo en un día y descansar el resto.' },
        { cells: ['Insulina o glibenclamida, glicemia < 100 mg/dL', 'Colación de 15 a 20 g de carbohidratos y luego ejercicio', 'Suspender el ejercicio o salir igual'],
          say: 'Usuario de insulina o glibenclamida con glicemia bajo cien antes del ejercicio: colación de quince a veinte gramos de carbohidratos y luego ejercicio. Suspenderlo es exagerado, y salir igual es peligroso.' },
        { cells: ['Glicemia 100 a 250 mg/dL', 'Ejercicio con hidratación', 'Pedir exámenes antes'],
          say: 'Entre cien y doscientos cincuenta, es zona segura. No hay nada que corregir.' },
        { cells: ['DM1, glicemia > 250 con cetonas', 'Suspender, hidratar e insulina rápida', 'Hacer ejercicio para bajar la glicemia'],
          say: 'Diabético tipo uno con glicemia sobre doscientos cincuenta y cetonas: se suspende el ejercicio, se hidrata y se da insulina rápida. La trampa es pensar que el ejercicio le va a bajar la glicemia: sin insulina, lo empuja a la cetoacidosis.' },
        { cells: ['Neuropatía con monofilamento alterado', 'Natación o bicicleta estática', 'Trote o caminar descalzo'],
          say: 'Neuropatía, con el monofilamento alterado: natación o bicicleta estática. El trote y la caminata descalzo son las alternativas incorrectas.' },
        { cells: ['Retinopatía proliferativa activa', 'Evitar pesas, saltos y Valsalva', 'Indicar entrenamiento de fuerza máxima'],
          say: 'Y retinopatía proliferativa activa: nada de pesas máximas, saltos ni maniobras de Valsalva, por el riesgo de hemorragia vítrea.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años con DM2 en tratamiento con metformina 850 mg cada 12 horas e insulina NPH 18 UI matinal. Decide iniciar un programa de acondicionamiento físico. Antes de salir a trotar a las 11:00 se realiza un hemoglucotest de 88 mg/dL. No tiene síntomas neurológicos ni sudoración.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender el ejercicio por hipoglicemia' },
        { letter: 'B', text: 'Ingerir una colación de 15 a 20 g de carbohidratos antes de comenzar' },
        { letter: 'C', text: 'Salir a trotar de inmediato, ya que está asintomático' },
        { letter: 'D', text: 'Suspender la insulina NPH desde mañana' },
        { letter: 'E', text: 'Administrar insulina cristalina antes de iniciar' },
      ],
      correct: 'B',
      explanation: 'Usa insulina NPH, cuyo peak matinal ocurre 4 a 6 horas después de la dosis, justo a la hora del ejercicio. Con glicemia < 100 mg/dL antes del esfuerzo, debe comer 15 a 20 g de carbohidratos y luego hacer ejercicio. 88 mg/dL no es una hipoglicemia que obligue a suspender.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cuatro años, diabético tipo dos, con metformina e insulina NPH en la mañana. Quiere empezar a trotar. A las once de la mañana, antes de salir, se mide la glicemia capilar: ochenta y ocho. No tiene ningún síntoma.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender el ejercicio, comer una colación de quince a veinte gramos de carbohidratos antes de partir, salir a trotar de inmediato, suspender la insulina, o ponerse insulina cristalina. Piénsalo.',
        answer: 'Es la B. Usa insulina y está bajo cien: colación de quince a veinte gramos de carbohidratos, y después a trotar. Además, la NPH de la mañana tiene su peak entre cuatro y seis horas después, justo a la hora del trote. La C es la trampa: estar asintomático no lo protege, porque el músculo consumirá glucosa mientras la insulina sigue actuando. Y la A es exagerada: ochenta y ocho no es hipoglicemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 30',
      stem: 'Hombre de 48 años con glicemia de ayuno de 115 mg/dL en dos ocasiones. IMC 28. Sin otros factores de riesgo.',
      question: '¿Cuál es la intervención más importante para reducir la progresión a diabetes?',
      options: [
        { letter: 'A', text: 'Dieta estricta baja en carbohidratos' },
        { letter: 'B', text: 'Metformina 500 mg dos veces al día' },
        { letter: 'C', text: 'Ejercicio aeróbico 150 minutos por semana' },
        { letter: 'D', text: 'Orlistat' },
        { letter: 'E', text: 'Insulina basal' },
      ],
      correct: 'C',
      explanation: 'Glicemia de ayuno entre 100 y 125 mg/dL: prediabetes. La intervención más efectiva para frenar la progresión a diabetes es el cambio de estilo de vida, con ejercicio aeróbico de intensidad moderada de al menos 150 minutos por semana, más dieta saludable.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Hombre de cuarenta y ocho años con glicemia de ayuno de ciento quince en dos ocasiones, índice de masa corporal de veintiocho, y sin otros factores de riesgo.',
        question: '¿Cuál es la intervención más importante para reducir la progresión a diabetes?',
        options: 'Las opciones: dieta estricta baja en carbohidratos, metformina, ejercicio aeróbico de ciento cincuenta minutos por semana, orlistat, o insulina basal. Piénsalo.',
        answer: 'Es la C. Ciento quince en ayunas, dos veces, es una glicemia de ayuno alterada, lo que viste como prediabetes en la clase de diagnóstico. Todavía no es diabetes, y lo que más frena la progresión es el cambio de estilo de vida, con la cifra exacta que vimos: ciento cincuenta minutos semanales de aeróbico moderado. La metformina es el distractor tentador, pero en un paciente sin otros factores de riesgo no es la primera intervención.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 20',
      stem: 'Un adolescente de 16 años, con IMC de 33, se realiza una glicemia de ayuno, que resulta 96 mg/dl, más una insulina basal que resulta 23 UI/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar insulina' },
        { letter: 'B', text: 'Iniciar dieta y ejercicio' },
        { letter: 'C', text: 'Iniciar metformina' },
        { letter: 'D', text: 'Solicitar un test de tolerancia a la glucosa' },
        { letter: 'E', text: 'Iniciar metformina más glibenclamida' },
      ],
      correct: 'B',
      explanation: 'Obesidad con resistencia a la insulina (insulina basal elevada), pero sin diabetes, sin intolerancia a la glucosa ni glicemia de ayuno alterada. La conducta es solo dieta y ejercicio.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil quince. Adolescente de dieciséis años, con índice de masa corporal de treinta y tres. Su glicemia de ayuno es noventa y seis, y su insulina basal, veintitrés.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar insulina, iniciar dieta y ejercicio, iniciar metformina, pedir una prueba de tolerancia a la glucosa, o metformina con glibenclamida. Piénsalo.',
        answer: 'Es la B. La glicemia es normal: no hay diabetes, ni glicemia de ayuno alterada. Lo que hay es obesidad con una insulina alta, es decir, resistencia a la insulina. Y justamente el ejercicio es lo que abre la puerta de la glucosa sin necesitar insulina. La metformina es la trampa: no hay ninguna alteración de la glicemia que tratar con fármacos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Mecanismo y dosis', tag: 'Lo básico', kind: 'key', items: [
          { t: 'GLUT-4 sin insulina', d: 'Sensibilidad aumentada 24 a 48 horas',
            say: 'Cerremos con las reglas de oro. El músculo que se contrae capta glucosa por GLUT cuatro, sin necesitar insulina, y deja la sensibilidad aumentada hasta dos días.' },
          { t: '150 minutos semanales', d: '≥ 3 días, fuerza 2 a 3 veces',
            say: 'La prescripción: ciento cincuenta minutos semanales de aeróbico moderado, en al menos tres días, más fuerza dos a tres veces por semana.' },
        ] },
        { title: 'Seguridad', tag: 'Glicemia previa', kind: 'alert', items: [
          { t: 'Bajo 100 con insulina o glibenclamida', d: 'Colación de 15 a 20 g antes',
            say: 'Con insulina o sulfonilureas, bajo cien antes del ejercicio se come una colación de quince a veinte gramos de carbohidratos.' },
          { t: 'Sobre 250 con cetonas', d: 'No se hace ejercicio',
            say: 'Sobre doscientos cincuenta con cetonas, no se hace ejercicio.' },
        ] },
        { title: 'Complicaciones', tag: 'Qué evitar', kind: 'criteria', items: [
          { t: 'Neuropatía: sin impacto', d: 'Natación o bicicleta + revisar los pies',
            say: 'Con neuropatía, ejercicio sin impacto y revisión diaria de los pies. Con retinopatía proliferativa, nada de Valsalva ni pesas máximas.' },
          { t: 'Retinopatía: sin Valsalva', d: 'Riesgo de hemorragia vítrea',
            say: 'Si te llevas una sola idea de hoy: el ejercicio funciona como un fármaco que baja la glicemia, así que se dosifica, y si el paciente usa insulina o glibenclamida, se come antes de empezar. En la próxima clase vemos el tratamiento farmacológico escalonado. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ejercicio seguro en el paciente con diabetes',
    root: N('start', 'Paciente diabético que hará ejercicio', 'Prescripción: 150 min/semana',
      'Paciente con diabetes al que le vas a indicar ejercicio. La meta es ciento cincuenta minutos semanales, pero antes hay que revisar dos cosas: sus complicaciones y su glicemia.',
      ['', N('q', '¿Tiene complicaciones crónicas?', 'Neuropatía o retinopatía',
        'Primero, las complicaciones, porque cambian el tipo de ejercicio.',
        ['Neuropatía', N('alert', 'Sin impacto', 'Natación o bicicleta + inspección de pies',
          'Con neuropatía sensitiva: nada de trote ni caminar descalzo. Natación, remo o bicicleta estática, e inspección diaria de los pies.')],
        ['Retinopatía proliferativa', N('alert', 'Sin Valsalva ni pesas', 'Riesgo de hemorragia vítrea',
          'Con retinopatía proliferativa severa: evitar el esfuerzo con Valsalva y las pesas máximas.')],
        ['No', N('q', '¿Glicemia antes del ejercicio?', 'Si usa insulina o sulfonilurea',
          'Luego, si usa insulina o sulfonilurea, se mide la glicemia capilar antes de partir.',
          ['Bajo 100', N('do', 'Colación de 15 a 20 g', 'Y luego ejercicio',
            'Bajo cien: colación de quince a veinte gramos de carbohidratos, y luego el ejercicio.')],
          ['100 a 250', N('ok', 'Ejercicio seguro', 'Con hidratación',
            'Entre cien y doscientos cincuenta: zona segura, adelante con hidratación.')],
          ['Sobre 250 + cetonas', N('refer', 'Suspender', 'Hidratar e insulina rápida',
            'Sobre doscientos cincuenta con cetonas: se suspende el ejercicio, se hidrata y se da insulina rápida.')])])]),
  },
};
