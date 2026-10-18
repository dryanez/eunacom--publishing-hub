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
      type: 'points',
      kicker: 'Antes de empezar',
      title: '¿Test de esfuerzo antes de partir?',
      cards: [
        { title: 'No hace falta', tag: 'Lo habitual', kind: 'normal', items: [
          { t: 'Asintomático, ejercicio leve', d: 'Caminata a paso ligero, progresivo',
            say: 'Una duda frecuente: ¿todo diabético necesita un test de esfuerzo antes de hacer ejercicio? No. Si está asintomático y va a partir con intensidad leve o moderada, como caminar a paso ligero y subir de a poco, puede comenzar sin estudio previo.' },
        ] },
        { title: 'Sí se pide', tag: 'Ejercicio vigoroso', kind: 'alert', items: [
          { t: 'Sedentario que quiere intensidad', d: 'Y además uno de estos factores',
            say: 'El test de esfuerzo, el electrocardiograma en cinta con protocolo de Bruce, se pide cuando un sedentario planea ejercicio vigoroso y hay algo más: más de cuarenta años con diabetes de más de diez, varios factores de riesgo cardiovascular, síntomas de esfuerzo, electrocardiograma anormal, enfermedad arterial periférica, enfermedad renal crónica o neuropatía autonómica.' },
          { t: 'Isquemia silente', d: 'El diabético puede no sentir la angina',
            say: 'La razón es que la isquemia miocárdica silente es frecuente en la diabetes. El paciente puede estar isquémico y no sentir dolor.' },
        ] },
        { title: 'Cómo se lee', tag: 'Informe', kind: 'criteria', items: [
          { t: 'Positivo: no iniciar, derivar', d: 'Estudio de isquemia en cardiología',
            say: 'Si el test sale positivo, con descenso del segmento ST de un milímetro o más, angina, caída de la presión con el esfuerzo o arritmia ventricular compleja, no se inicia el programa y se deriva a cardiología.' },
          { t: 'Negativo con 85 % de la frecuencia máxima', d: 'Sin restricción cardiovascular',
            say: 'Si es negativo y alcanzó el ochenta y cinco por ciento de la frecuencia cardíaca máxima, que es doscientos veinte menos la edad, se prescribe ejercicio sin restricción.' },
          { t: 'Submáximo: no descarta isquemia', d: 'Betabloqueo o neuropatía autonómica',
            say: 'Si no alcanzó ese ochenta y cinco por ciento, por betabloqueo, mala condición física o neuropatía autonómica, no descarta isquemia y se complementa con una imagen de estrés. Ojo: en neuropatía autonómica la frecuencia cardíaca no sirve para dosificar, ahí se usa la escala de esfuerzo percibido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgo cardiovascular',
      title: 'Lo que mata al diabético es el corazón',
      cards: [
        { title: 'El riesgo', tag: 'Principal causa de muerte', kind: 'alert', items: [
          { t: 'Riesgo de infarto y ACV ×2 a ×4', d: 'Puede ser sin dolor típico',
            say: 'Cerremos con una mirada más amplia. La enfermedad cardiovascular aterosclerótica es la principal causa de muerte del paciente con diabetes: multiplica por dos a cuatro el riesgo de infarto, accidente cerebrovascular y enfermedad arterial periférica. Y por la neuropatía autonómica el infarto puede venir sin dolor típico.' },
          { t: 'Manejo integral y simultáneo', d: 'No solo la glicemia',
            say: 'Por eso el manejo no es solo glicémico. Es hemoglobina glicosilada individualizada, presión bajo ciento treinta sobre ochenta, estatina según el riesgo, dejar el tabaco, bajar de peso y ejercicio. Cada uno de esos puntos lo vemos en su clase.' },
        ] },
        { title: 'En Chile', tag: 'Atención primaria', kind: 'key', items: [
          { t: 'Programa de Salud Cardiovascular', d: 'HTA, DM2 y dislipidemia',
            say: 'En Chile todo esto se organiza en la atención primaria con el Programa de Salud Cardiovascular, que ingresa a las personas con hipertensión, diabetes tipo dos y dislipidemia, estratifica su riesgo en bajo, moderado o alto, y define cada cuánto los controla el equipo.' },
          { t: 'Pesquisa: EMPA', d: 'Examen de Medicina Preventiva del Adulto',
            say: 'La pesquisa parte en el Examen de Medicina Preventiva del Adulto, el EMPA. Y la prevención poblacional se apoya en el etiquetado de alimentos, la ley del tabaco y el programa Elige Vida Sana.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El ejercicio sigue actuando de noche',
      images: [
        { src: 'animaciones/diab-05/A1_ejercicio_hipoglicemia.mp4', label: 'Ejercicio', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Sensibilidad alta por veinticuatro a cuarenta y ocho horas',
          say: 'Después del ejercicio, la sensibilidad a la insulina queda alta uno a dos días. Con insulina o una sulfonilurea aparece la hipoglicemia tardía, típicamente nocturna. Por eso se mide la glicemia antes de salir, y se reparten los ciento cincuenta minutos en al menos tres días.' },
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
        { cells: ['Sedentario, 45 años, DM > 10 años, quiere ejercicio vigoroso', 'Test de esfuerzo antes de partir', 'Pedírselo a todo diabético que camina'],
          say: 'Y una trampa más. Diabético sedentario con más de diez años de evolución que quiere hacer ejercicio vigoroso: test de esfuerzo antes. En cambio, al asintomático que parte caminando, no se le pide.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.003 · Diabetes y riesgo cardiovascular",
      "stem": "Hombre de 52 años con DM2 de 2 años de evolución, en tratamiento con metformina, HbA1c 6,9 %. No fuma. Presión arterial 128/80 mmHg. Sin antecedentes de infarto ni ACV. Perfil lipídico: colesterol total 196 mg/dL, LDL 112 mg/dL, HDL 44 mg/dL, triglicéridos 180 mg/dL. Creatinina normal.",
      "question": "Según el Programa de Salud Cardiovascular del MINSAL, ¿cuál es la conducta más adecuada respecto a su riesgo cardiovascular?",
      "options": [
        {
          "letter": "A",
          "text": "No requiere estatina, porque su LDL es menor de 130 mg/dL"
        },
        {
          "letter": "B",
          "text": "Calcular el riesgo con tablas y repetir perfil lipídico en un año"
        },
        {
          "letter": "C",
          "text": "Iniciar gemfibrozilo por la hipertrigliceridemia"
        },
        {
          "letter": "D",
          "text": "Iniciar aspirina 100 mg/día como prevención primaria"
        },
        {
          "letter": "E",
          "text": "Iniciar atorvastatina, porque la diabetes lo clasifica como alto riesgo cardiovascular"
        }
      ],
      "correct": "E",
      "explanation": "En el Programa de Salud Cardiovascular, la persona con diabetes mayor de 40 años se clasifica directamente como alto riesgo cardiovascular, sin necesidad de tablas, y se le indica estatina independiente del LDL. La aspirina no se indica de rutina en prevención primaria.",
      "say": {
        "stem": "Hombre de cincuenta y dos años, diabético tipo dos, bien controlado, no fumador, con presión normal y sin eventos cardiovasculares previos. Su colesterol LDL es ciento doce.",
        "question": "Según el programa cardiovascular del ministerio, ¿cuál es la conducta más adecuada respecto a su riesgo cardiovascular?",
        "options": "Las opciones: no requiere estatina, calcular el riesgo con tablas, gemfibrozilo, aspirina en prevención primaria o iniciar atorvastatina por ser de alto riesgo. Piénsalo.",
        "answer": "Es la E. La diabetes en mayores de cuarenta años ya es alto riesgo cardiovascular, y eso basta para indicar estatina sin importar el LDL. El distractor es fijarse en el LDL bajo ciento treinta, pero en el diabético la decisión la toma el riesgo, no el número del colesterol."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 149",
      "stem": "Un paciente de 60 años, con antecedente de diabetes mellitus 2 insulinodependiente, en tratamiento con insulina NPH 30 U en la mañana y 20 U en la noche. Presenta un cuadro de malestar, sudoración y palpitaciones intensas a las 3 de la madrugada, constatándose un hemoglucotest de 50 mg/dL. Su examen físico no muestra alteraciones.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Disminuir la insulina NPH matinal"
        },
        {
          "letter": "B",
          "text": "Suspender la insulina NPH matinal"
        },
        {
          "letter": "C",
          "text": "Disminuir la insulina NPH nocturna"
        },
        {
          "letter": "D",
          "text": "Suspender la insulina NPH nocturna"
        },
        {
          "letter": "E",
          "text": "Disminuir ambas dosis de insulina NPH"
        }
      ],
      "correct": "C",
      "explanation": "Hipoglicemia de madrugada en un paciente con NPH: la dosis nocturna es la que tiene su peak a las 3 de la mañana. Se disminuye la NPH nocturna; suspenderla dejaría hiperglicemia de ayuno.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Paciente de sesenta años, diabético tipo dos, con insulina NPH treinta unidades en la mañana y veinte en la noche. A las tres de la madrugada presenta malestar, sudoración y palpitaciones, con un hemoglucotest de cincuenta.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: disminuir la NPH matinal, suspender la matinal, disminuir la NPH nocturna, suspender la nocturna, o disminuir ambas. Piénsalo.",
        "answer": "Es la C. La hipoglicemia de las tres de la mañana la produce la NPH de la noche, que tiene su peak a esa hora, así que se reduce esa dosis. Suspenderla tienta, pero dejaría al paciente con hiperglicemia de ayuno; basta con ajustarla."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.032 · Estrategias de control de enfermedades crónicas prioritarias (cáncer, cardiovasculares)",
      "stem": "El Ministerio de Salud busca reducir la mortalidad cardiovascular del país y evalúa distintas medidas. Siguiendo a Geoffrey Rose, distingue entre estrategias dirigidas a individuos de alto riesgo y estrategias poblacionales.",
      "question": "¿Cuál de las siguientes corresponde a una estrategia poblacional?",
      "options": [
        {
          "letter": "A",
          "text": "Realizar angioplastía precoz en el infarto agudo"
        },
        {
          "letter": "B",
          "text": "Indicar estatinas a pacientes con riesgo cardiovascular alto"
        },
        {
          "letter": "C",
          "text": "Ingresar a los hipertensos al Programa de Salud Cardiovascular"
        },
        {
          "letter": "D",
          "text": "Reducir el contenido de sodio del pan mediante un acuerdo con la industria panificadora"
        },
        {
          "letter": "E",
          "text": "Prescribir antiagregantes a pacientes con enfermedad coronaria"
        }
      ],
      "correct": "D",
      "explanation": "La estrategia poblacional desplaza la distribución del factor de riesgo en toda la población, como reducir la sal del pan, la ley de etiquetado de alimentos o los impuestos al tabaco. Logra gran impacto porque la mayoría de los eventos ocurre en personas de riesgo moderado. Las demás opciones son estrategias de alto riesgo o tratamiento individual.",
      "say": {
        "stem": "El ministerio quiere bajar la mortalidad cardiovascular y distingue entre estrategias de alto riesgo y poblacionales.",
        "question": "¿Cuál es una estrategia poblacional?",
        "options": "Las opciones: angioplastía en el infarto, estatinas en alto riesgo, programa cardiovascular para hipertensos, bajar la sal del pan o antiagregantes. Piénsalo.",
        "answer": "Es la D. Reducir la sal del pan baja la presión de toda la población a la vez. El programa cardiovascular tienta porque es masivo, pero atiende a personas ya diagnosticadas, es una estrategia de alto riesgo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.3.001 · Alimentación saludable",
      "stem": "Un hombre de 50 años, normotenso, con IMC de 26 kg/m², consulta para recibir consejería alimentaria de prevención cardiovascular. Refiere que agrega sal a las comidas y consume pan, embutidos y snacks a diario.",
      "question": "¿Cuál es el consumo máximo diario de sal recomendado para un adulto?",
      "options": [
        {
          "letter": "A",
          "text": "1 g/día"
        },
        {
          "letter": "B",
          "text": "15 g/día"
        },
        {
          "letter": "C",
          "text": "10 g/día"
        },
        {
          "letter": "D",
          "text": "Menos de 5 g/día (una cucharadita)"
        },
        {
          "letter": "E",
          "text": "No hay límite si la presión arterial es normal"
        }
      ],
      "correct": "D",
      "explanation": "La OMS y las guías chilenas recomiendan menos de 5 g de sal al día (unos 2 g de sodio). Reducir la sal baja la presión arterial, también en normotensos, y disminuye el riesgo cardiovascular. La mayor parte proviene de alimentos procesados como pan y embutidos, no solo del salero.",
      "say": {
        "stem": "Un hombre de cincuenta años, normotenso y con sobrepeso leve, pide consejería alimentaria. Agrega sal a las comidas y come pan, embutidos y snacks todos los días.",
        "question": "¿Cuál es el consumo máximo diario de sal recomendado para un adulto?",
        "options": "Las opciones: un gramo, quince gramos, diez gramos, menos de cinco gramos o sin límite si la presión es normal. Piénsalo.",
        "answer": "Es la D. Se recomienda menos de cinco gramos de sal al día, una cucharadita. La opción sin límite tienta en un normotenso, pero reducir la sal baja el riesgo cardiovascular igual."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.3.004 · Obesidad y sobrepeso",
      "stem": "Una mujer de 40 años pesa 78 kg y mide 1,60 m. Su circunferencia de cintura es de 94 cm. No tiene comorbilidades conocidas.",
      "question": "¿Cómo se clasifica su estado nutricional según el IMC?",
      "options": [
        {
          "letter": "A",
          "text": "Normal"
        },
        {
          "letter": "B",
          "text": "Obesidad grado I"
        },
        {
          "letter": "C",
          "text": "Sobrepeso"
        },
        {
          "letter": "D",
          "text": "Obesidad grado II"
        },
        {
          "letter": "E",
          "text": "Obesidad mórbida"
        }
      ],
      "correct": "B",
      "explanation": "IMC = 78 / (1,60)² ≈ 30,5 kg/m². En adultos: 18,5-24,9 normal, 25-29,9 sobrepeso, 30-34,9 obesidad I, 35-39,9 obesidad II y ≥40 obesidad mórbida. Además, una cintura sobre 88 cm en mujeres indica obesidad abdominal y mayor riesgo cardiometabólico.",
      "say": {
        "stem": "Una mujer de cuarenta años pesa setenta y ocho kilos, mide un metro sesenta y tiene noventa y cuatro centímetros de cintura.",
        "question": "¿Cómo se clasifica su estado nutricional según el índice de masa corporal?",
        "options": "Las opciones: normal, obesidad grado uno, sobrepeso, obesidad grado dos o obesidad mórbida. Piénsalo.",
        "answer": "Es la B. Su índice es cerca de treinta coma cinco, obesidad grado uno. Sobrepeso tienta, pero ese rango termina justo antes de treinta."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.3.006 · Sedentarismo vs actividad física",
      "stem": "Un hombre de 45 años, oficinista, sedentario y sin enfermedades, pregunta cuánta actividad física necesita para reducir su riesgo cardiovascular.",
      "question": "¿Cuál es la recomendación mínima de actividad física para adultos?",
      "options": [
        {
          "letter": "A",
          "text": "30 minutos de caminata una vez por semana"
        },
        {
          "letter": "B",
          "text": "Solo actividad física si tiene sobrepeso"
        },
        {
          "letter": "C",
          "text": "20 minutos diarios de elongación"
        },
        {
          "letter": "D",
          "text": "60 minutos de ejercicio intenso todos los días, sin excepción"
        },
        {
          "letter": "E",
          "text": "150 minutos semanales de actividad aeróbica moderada, más fortalecimiento muscular 2 días por semana"
        }
      ],
      "correct": "E",
      "explanation": "La OMS recomienda al menos 150 a 300 minutos semanales de actividad aeróbica moderada (o 75 a 150 vigorosa), más ejercicios de fuerza 2 o más días por semana, y reducir el tiempo sentado. El sedentarismo es un factor de riesgo cardiovascular independiente, incluso con peso normal.",
      "say": {
        "stem": "Un oficinista sedentario de cuarenta y cinco años, sano, pregunta cuánta actividad física necesita para bajar su riesgo cardiovascular.",
        "question": "¿Cuál es la recomendación mínima para adultos?",
        "options": "Las opciones: media hora una vez por semana, ejercicio solo si tiene sobrepeso, solo elongación diaria, una hora intensa todos los días o ciento cincuenta minutos semanales moderados más fuerza dos días. Piénsalo.",
        "answer": "Es la E. Se recomiendan al menos ciento cincuenta minutos a la semana de actividad moderada más fortalecimiento muscular. La hora intensa diaria tienta por ser más, pero no es el mínimo y es poco realista para iniciar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 20",
      "stem": "Un adolescente de 16 años, con IMC de 33 kg/m², se realiza una glicemia de ayuno que resulta 96 mg/dL y una insulinemia basal de 23 µUI/mL.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar insulina"
        },
        {
          "letter": "B",
          "text": "Iniciar dieta y ejercicio"
        },
        {
          "letter": "C",
          "text": "Iniciar metformina"
        },
        {
          "letter": "D",
          "text": "Solicitar un test de tolerancia a la glucosa"
        },
        {
          "letter": "E",
          "text": "Iniciar metformina más glibenclamida"
        }
      ],
      "correct": "B",
      "explanation": "Tiene obesidad con resistencia a la insulina (HOMA = 96 × 23 / 405 ≈ 5,5), pero glicemia de ayuno normal, sin diabetes ni prediabetes. El manejo es el cambio de estilo de vida: dieta y actividad física, idealmente con apoyo familiar. La metformina no se indica solo por insulinemia alta en un adolescente.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Un adolescente de dieciséis años con índice de masa corporal de treinta y tres tiene glicemia de ayuno de noventa y seis e insulinemia basal de veintitrés.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: insulina, dieta y ejercicio, metformina, test de tolerancia a la glucosa, o metformina más glibenclamida. Piénsalo.",
        "answer": "Es la B. Tiene obesidad con resistencia a la insulina, pero sin diabetes ni prediabetes, así que el pilar es dieta y ejercicio. La metformina tienta, pero no se indica solo por tener la insulina alta."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.1.013 · Obesidad mórbida",
      "stem": "Una mujer de 38 años, con IMC de 42 kg/m², hipertensa y con DM2, ha intentado bajar de peso por más de 2 años con dieta, ejercicio y apoyo farmacológico, sin éxito. No tiene trastorno psiquiátrico descompensado ni consumo de alcohol o drogas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Insistir solo con dieta hipocalórica estricta"
        },
        {
          "letter": "B",
          "text": "Indicar liposucción"
        },
        {
          "letter": "C",
          "text": "Indicar ayuno intermitente prolongado"
        },
        {
          "letter": "D",
          "text": "Iniciar levotiroxina para aumentar el gasto energético"
        },
        {
          "letter": "E",
          "text": "Derivar a evaluación multidisciplinaria para cirugía bariátrica"
        }
      ],
      "correct": "E",
      "explanation": "Con IMC ≥40 kg/m², o ≥35 con comorbilidades, y fracaso del tratamiento médico, la cirugía bariátrica (manga gástrica o bypass) es la terapia más eficaz para bajar de peso en forma sostenida y mejora la diabetes y la HTA. Requiere evaluación multidisciplinaria previa. La liposucción no trata la obesidad ni sus comorbilidades.",
      "say": {
        "stem": "Una mujer de treinta y ocho años con índice de masa corporal de cuarenta y dos, hipertensa y diabética, no ha logrado bajar de peso en más de dos años de tratamiento médico.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: insistir solo con dieta, liposucción, ayuno intermitente prolongado, levotiroxina o derivar a evaluación para cirugía bariátrica. Piénsalo.",
        "answer": "Es la E. Con índice sobre cuarenta, comorbilidades y fracaso médico, la cirugía bariátrica es lo más eficaz. La liposucción tienta como atajo, pero no trata la obesidad ni la diabetes."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.001 · Alimentación saludable",
      "stem": "Una mujer de 35 años, sana, solicita orientación sobre alimentación saludable para su familia.",
      "question": "Según las Guías Alimentarias para la Población Chilena, ¿cuál de las siguientes recomendaciones es correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Preferir jugos de fruta azucarados a la fruta entera"
        },
        {
          "letter": "B",
          "text": "Consumir pescado solo una vez al mes"
        },
        {
          "letter": "C",
          "text": "Consumir legumbres al menos 2 veces por semana"
        },
        {
          "letter": "D",
          "text": "Consumir 1 porción de frutas y verduras al día"
        },
        {
          "letter": "E",
          "text": "Evitar completamente los lácteos en adultos"
        }
      ],
      "correct": "C",
      "explanation": "Las Guías Alimentarias chilenas recomiendan legumbres y pescado al menos 2 veces por semana, 5 porciones diarias de frutas y verduras de distintos colores, 3 porciones de lácteos bajos en grasa y azúcar, 6 a 8 vasos de agua y evitar alimentos con sellos 'ALTO EN'. La fruta entera se prefiere a los jugos.",
      "say": {
        "stem": "Una mujer sana de treinta y cinco años pide orientación sobre alimentación saludable para su familia.",
        "question": "Según las guías alimentarias chilenas, ¿cuál recomendación es correcta?",
        "options": "Las opciones: preferir jugos azucarados a la fruta, pescado una vez al mes, legumbres al menos dos veces por semana, una porción de frutas y verduras al día o evitar los lácteos. Piénsalo.",
        "answer": "Es la C. Las guías recomiendan legumbres y pescado al menos dos veces por semana, y cinco porciones de frutas y verduras al día. Los jugos tientan por ser de fruta, pero aportan azúcar sin la fibra de la fruta entera."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.012 · Regímenes dietéticos para obesidad",
      "stem": "Una mujer de 45 años, con IMC de 32 kg/m², desea bajar de peso. Su gasto energético estimado es de 2.000 kcal/día.",
      "question": "¿Cuál es la prescripción dietética más adecuada para iniciar?",
      "options": [
        {
          "letter": "A",
          "text": "Dieta de 600 kcal/día sin supervisión"
        },
        {
          "letter": "B",
          "text": "Ayuno total por 2 semanas"
        },
        {
          "letter": "C",
          "text": "Dieta libre de carbohidratos en forma indefinida"
        },
        {
          "letter": "D",
          "text": "Dieta con déficit de 500 a 750 kcal/día respecto de su gasto, balanceada y sostenible"
        },
        {
          "letter": "E",
          "text": "Mantener la ingesta y agregar diuréticos"
        }
      ],
      "correct": "D",
      "explanation": "Un déficit de 500 a 750 kcal/día (unas 1.200-1.500 kcal en mujeres) produce una baja de 0,5 a 1 kg por semana. La meta inicial es bajar 5 a 10% del peso en 6 meses, lo que ya mejora presión, glicemia y lípidos. Lo clave es la adherencia; las dietas de muy bajo aporte requieren supervisión estricta.",
      "say": {
        "stem": "Una mujer de cuarenta y cinco años con índice de masa corporal de treinta y dos desea bajar de peso. Gasta unas dos mil kilocalorías al día.",
        "question": "¿Cuál es la prescripción dietética más adecuada para iniciar?",
        "options": "Las opciones: seiscientas kilocalorías sin supervisión, ayuno total, cero carbohidratos indefinido, un déficit de quinientas a setecientas cincuenta kilocalorías balanceado o diuréticos. Piénsalo.",
        "answer": "Es la D. Un déficit de quinientas a setecientas cincuenta kilocalorías diarias baja medio a un kilo por semana de forma sostenible. La dieta de seiscientas tienta por rápida, pero sin supervisión es riesgosa y poco adherente."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.014 · Síndrome metabólico",
      "stem": "Un hombre de 50 años tiene diagnóstico de síndrome metabólico: cintura de 104 cm, triglicéridos 180 mg/dL, HDL 38 mg/dL y glicemia de ayuno 110 mg/dL. Su presión arterial es 128/82 mmHg.",
      "question": "¿Cuál es la intervención de primera línea?",
      "options": [
        {
          "letter": "A",
          "text": "Metformina, fenofibrato y losartán desde el inicio"
        },
        {
          "letter": "B",
          "text": "Cambios de estilo de vida, con meta de bajar 5 a 10% del peso, dieta saludable y actividad física"
        },
        {
          "letter": "C",
          "text": "Cirugía bariátrica"
        },
        {
          "letter": "D",
          "text": "Insulina NPH nocturna"
        },
        {
          "letter": "E",
          "text": "Control anual sin intervención"
        }
      ],
      "correct": "B",
      "explanation": "El tratamiento de primera línea del síndrome metabólico es el cambio de estilo de vida: bajar 5 a 10% del peso, dieta saludable, al menos 150 minutos semanales de actividad física y no fumar. Esto mejora todos sus componentes a la vez. Los fármacos se agregan según cada componente que lo requiera, no por el diagnóstico.",
      "say": {
        "stem": "Un hombre de cincuenta años tiene síndrome metabólico, con obesidad abdominal, triglicéridos altos, HDL bajo y glicemia de ayuno alterada, con presión normal.",
        "question": "¿Cuál es la intervención de primera línea?",
        "options": "Las opciones: metformina, fenofibrato y losartán de entrada, cambios de estilo de vida con baja de peso, cirugía bariátrica, insulina nocturna o solo control anual. Piénsalo.",
        "answer": "Es la B. El estilo de vida, con bajar cinco a diez por ciento del peso y actividad física, mejora todos los componentes a la vez. Partir con tres fármacos tienta, pero se indican según cada componente, no por el diagnóstico."
      }
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
