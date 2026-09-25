// Clase 10.22 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-22).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-22 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Medir la reserva antes de que se agote: Fried, fuerza muscular y las cuatro esferas',
      say: 'Bienvenidos. En la clase anterior vimos que el delirium aparece sobre un cerebro vulnerable. Hoy vamos a medir esa vulnerabilidad en todo el cuerpo: fragilidad, sarcopenia y valoración geriátrica integral. Son temas de puntajes y cortes, pero con una idea de fondo muy simple: la fragilidad es reversible, y el tratamiento más potente es el ejercicio. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Concepto',
      title: '¿Qué es ser frágil?',
      nodes: [
        { id: 'env', col: 0, row: 1, k: 'cause', t: 'Declive de varios sistemas', s: 'Inflammaging, estrés oxidativo' },
        { id: 'res', col: 1, row: 1, k: 'mech', t: 'Se agota la reserva', s: 'Pierde capacidad de adaptarse' },
        { id: 'est', col: 2, row: 0, k: 'cause', t: 'Estresor menor', s: 'ITU, cambio de fármaco, 48 h en cama' },
        { id: 'cai', col: 2, row: 2, k: 'risk', t: 'Caída funcional desproporcionada', s: 'Caídas, discapacidad, muerte' },
        { id: 'rev', col: 3, row: 1, k: 'good', t: 'Estado dinámico', s: 'Prevenible y reversible' },
      ],
      edges: [
        { from: 'env', to: 'res' }, { from: 'res', to: 'cai' }, { from: 'est', to: 'cai', label: 'gatilla' },
        { from: 'res', to: 'rev', label: 'si se interviene' },
      ],
      steps: [
        { show: ['env'], note: 'Varios sistemas pierden reserva a la vez',
          say: 'La fragilidad es un síndrome biológico. Varios sistemas, el inmune, el neuroendocrino, el muscular y el cardiovascular, van perdiendo capacidad a la vez, por una inflamación crónica de bajo grado que se llama inflammaging, por estrés oxidativo y por falla mitocondrial.' },
        { show: ['res'], note: 'Sin reserva, no hay margen para adaptarse',
          say: 'El resultado es que se agota la reserva. El paciente funciona bien en reposo, pero no tiene margen para adaptarse cuando algo lo desafía.' },
        { show: ['est', 'cai'], note: 'Un estresor pequeño, una caída enorme',
          say: 'Entonces basta un estresor menor, una infección urinaria simple, un cambio de fármaco o dos días en cama, para que se venga abajo de forma desproporcionada: caídas, discapacidad, hospitalización y muerte. Es la misma lógica de vulnerabilidad que vimos en el delirium.' },
        { show: ['rev'], note: 'No es la edad ni la discapacidad',
          say: 'Y lo más importante: la fragilidad no es lo mismo que tener muchos años, ni que ser discapacitado. Es un estado dinámico, prevenible y reversible. Por eso vale la pena buscarla.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Fenotipo de Fried: cinco criterios',
      cards: [
        { title: 'Los cinco criterios', tag: 'Linda Fried', kind: 'criteria', items: [
          { t: 'Baja de peso involuntaria', d: '≥ 4,5 kg o ≥ 5 % en un año',
            say: 'El modelo más validado es el fenotipo de Linda Fried, con cinco criterios objetivos. El primero es la baja de peso involuntaria: cuatro kilos y medio, o el cinco por ciento del peso, en el último año.' },
          { t: 'Agotamiento', d: 'Todo le cuesta un esfuerzo inmenso',
            say: 'El segundo es el agotamiento autorreportado: la sensación de que todo lo que hace le exige un esfuerzo inmenso.' },
          { t: 'Debilidad: prensión baja', d: '< 27 kg hombres, < 16 kg mujeres',
            say: 'El tercero es la debilidad, medida con un dinamómetro de mano. Los cortes habituales son menos de veintisiete kilos en hombres y menos de dieciséis en mujeres.' },
          { t: 'Marcha lenta', d: '< 0,8 m/s: más de 5 s en 4 metros',
            say: 'El cuarto es la marcha lenta: menos de cero coma ocho metros por segundo, es decir, más de cinco a seis segundos para recorrer cuatro metros a paso habitual.' },
          { t: 'Baja actividad física', d: 'Poco gasto calórico semanal',
            say: 'Y el quinto es la baja actividad física, estimada por el gasto calórico semanal.' },
        ] },
        { title: 'Clasificación', tag: 'Se pregunta', kind: 'key', items: [
          { t: '0 criterios: robusto', d: 'Sin fragilidad',
            say: 'La clasificación es fácil. Cero criterios, robusto.' },
          { t: '1 a 2: prefrágil', d: 'La mejor fase para prevenir',
            say: 'Uno o dos criterios, prefrágil. Fíjate que esta es la fase donde la prevención rinde más.' },
          { t: '3 o más: frágil', d: 'Síndrome de fragilidad',
            say: 'Y tres o más criterios, síndrome de fragilidad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sarcopenia',
      title: 'EWGSOP2: la fuerza manda, no la masa',
      nodes: [
        { id: 'sar', col: 0, row: 1, k: 'start', t: 'SARC-F ≥ 4', s: 'Sospecha clínica' },
        { id: 'fue', col: 1, row: 1, k: 'q', t: '¿Fuerza baja?', s: 'Dinamometría o silla > 15 s' },
        { id: 'pro', col: 2, row: 0, k: 'good', t: 'Sarcopenia probable', s: 'Basta para tratar' },
        { id: 'mas', col: 2, row: 2, k: 'mech', t: 'Masa baja', s: 'DEXA o bioimpedancia' },
        { id: 'con', col: 3, row: 2, k: 'effect', t: 'Sarcopenia confirmada', s: 'Fuerza + masa' },
        { id: 'sev', col: 4, row: 2, k: 'alert', t: 'Sarcopenia severa', s: '+ marcha < 0,8 m/s, TUG ≥ 20 s' },
      ],
      edges: [
        { from: 'sar', to: 'fue' }, { from: 'fue', to: 'pro', label: 'sí' },
        { from: 'pro', to: 'mas' }, { from: 'mas', to: 'con' }, { from: 'con', to: 'sev', label: 'rendimiento bajo' },
      ],
      steps: [
        { show: ['sar'], note: 'Cuestionario de cinco preguntas',
          say: 'Ahora la sarcopenia: la pérdida de masa, fuerza y función del músculo. Se sigue el consenso europeo, el EWGSOP dos. Parte con una sospecha: el cuestionario SARC-F, que pregunta por fuerza, ayuda para caminar, levantarse de una silla, subir escaleras y caídas. Cuatro puntos o más obliga a medir.' },
        { show: ['fue'], note: 'Menos de 27 kg en hombres y 16 kg en mujeres',
          say: 'Y aquí está el cambio conceptual que se pregunta: el parámetro principal es la fuerza, no la masa. Se mide con el dinamómetro, o con la prueba de la silla: si demora más de quince segundos en levantarse cinco veces sin usar los brazos, la fuerza es baja.' },
        { show: ['pro'], note: 'No hay que esperar la imagen para tratar',
          say: 'La fuerza baja, por sí sola, ya define una sarcopenia probable. Y eso basta para empezar el tratamiento de inmediato. No necesitas esperar ningún examen de imagen.' },
        { show: ['mas', 'con'], note: 'DEXA de cuerpo entero o bioimpedancia',
          say: 'Para confirmarla, se demuestra masa muscular baja con una densitometría de cuerpo entero, que mide la masa muscular apendicular, o con bioimpedanciometría. Fuerza baja más masa baja es sarcopenia confirmada.' },
        { show: ['sev'], note: 'Velocidad de marcha, TUG o SPPB',
          say: 'Y si además el rendimiento físico es bajo, con una marcha de menos de cero coma ocho metros por segundo, un Timed Up and Go de veinte segundos o más, o una batería SPPB de ocho puntos o menos, es sarcopenia severa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Valoración Geriátrica Integral',
      title: 'VGI: esfera funcional y mental',
      cards: [
        { title: 'Funcional', tag: 'Lo que el paciente hace', kind: 'criteria', items: [
          { t: 'Básicas: Barthel o Katz', d: 'Comer, bañarse, vestirse, continencia',
            say: 'La valoración geriátrica integral es la herramienta central de la geriatría: un proceso interdisciplinario que evalúa cuatro esferas para armar un plan. La primera es la funcional. Las actividades básicas, como comer, bañarse, vestirse, la continencia o trasladarse, se miden con el índice de Barthel, de cero a cien, o con el de Katz.' },
          { t: 'Barthel: 100 independiente', d: '< 20 dependencia total',
            say: 'En el Barthel, cien es independiente, de sesenta a noventa y cinco es dependencia leve a moderada, de veinte a cincuenta y cinco es grave, y menos de veinte es dependencia total.' },
          { t: 'Instrumentales: Lawton y Brody', d: 'Teléfono, dinero, remedios, transporte',
            say: 'Las actividades instrumentales, como usar el teléfono, manejar el dinero, los remedios o el transporte, se miden con la escala de Lawton y Brody, de cero a ocho. Ojo con este dato: es la primera esfera que falla cuando empieza un deterioro cognitivo.' },
        ] },
        { title: 'Mental', tag: 'Cognición y ánimo', kind: 'key', items: [
          { t: 'Pfeiffer: ≥ 3 errores', d: 'Deterioro que requiere estudio',
            say: 'La segunda esfera es la mental. Para el cribado cognitivo está el cuestionario de Pfeiffer, de diez preguntas: tres errores o más indican un deterioro que hay que estudiar. También se usan el Mini-Mental y el MoCA.' },
          { t: 'Yesavage GDS-15: ≥ 5', d: 'Sugiere depresión',
            say: 'Y el ánimo se evalúa con la escala de depresión geriátrica de Yesavage, de quince preguntas: cinco puntos o más sugiere depresión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Valoración Geriátrica Integral',
      title: 'VGI: esfera clínica, social y el EMPAM',
      cards: [
        { title: 'Clínica y nutricional', tag: 'MNA', kind: 'normal', items: [
          { t: 'Comorbilidad y polifarmacia', d: 'Registro completo',
            say: 'La tercera esfera es la clínica y nutricional: registrar comorbilidades y fármacos, y hacer un cribado nutricional.' },
          { t: 'MNA: < 17 desnutrición', d: '17 a 23,5: riesgo',
            say: 'Para eso está el Mini Nutritional Assessment: menos de diecisiete puntos es desnutrición establecida, y de diecisiete a veintitrés y medio, riesgo de desnutrición.' },
        ] },
        { title: 'Social', tag: 'Gijón', kind: 'normal', items: [
          { t: 'Red de apoyo y cuidador', d: 'Escala sociofamiliar de Gijón',
            say: 'La cuarta es la social: el apoyo familiar, quién es el cuidador principal, y los recursos. Se mide con la escala sociofamiliar de Gijón.' },
        ] },
        { title: 'EMPAM en APS', tag: '65 años y más', kind: 'alert', items: [
          { t: 'EFAM-Chile anual', d: 'Examen preventivo del adulto mayor',
            say: 'En Chile, en atención primaria, esto se aterriza en el examen de medicina preventiva del adulto mayor, el EMPAM, que aplica cada año el instrumento EFAM-Chile a las personas de sesenta y cinco años o más.' },
          { t: 'Tres categorías', d: 'Sin riesgo · con riesgo · riesgo de dependencia',
            say: 'Clasifica en tres grupos. Autovalente sin riesgo. Autovalente con riesgo, que se deriva a talleres de prevención y actividad física. Y en riesgo de dependencia, que se deriva al médico para una valoración geriátrica completa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cómo se revierte la fragilidad',
      cards: [
        { title: 'Ejercicio multicomponente', tag: 'Pilar principal', kind: 'key', items: [
          { t: 'Fuerza contra resistencia', d: 'Cuádriceps, glúteos, prensión',
            say: 'Vamos al tratamiento. La intervención con mayor impacto es el ejercicio físico multicomponente, como el programa Vivifrail. Su base es el ejercicio de fuerza contra resistencia progresiva, en cuádriceps, glúteos y prensión.' },
          { t: 'Equilibrio, marcha y flexibilidad', d: '3 a 5 días por semana',
            say: 'Se suma entrenamiento de equilibrio, que previene caídas, marcha funcional y flexibilidad, al menos tres a cinco días por semana. No hay fármaco que lo reemplace.' },
        ] },
        { title: 'Nutrición', tag: 'Más proteína', kind: 'pharma', items: [
          { t: 'Proteínas 1,2–1,5 g/kg/día', d: 'Repartidas en las tres comidas',
            say: 'El segundo pilar es la nutrición. El músculo del adulto mayor responde menos al estímulo anabólico, así que necesita más proteína que un joven: uno coma dos a uno coma cinco gramos por kilo al día, repartidos en las tres comidas, salvo insuficiencia renal avanzada.' },
          { t: 'Vitamina D si está baja', d: 'Colecalciferol 800–2000 UI/día',
            say: 'Y si la vitamina D está baja, colecalciferol de ochocientas a dos mil unidades al día, que mejora la fuerza y reduce las caídas.' },
        ] },
        { title: 'Revisión de fármacos', tag: 'Desprescribir', kind: 'alert', items: [
          { t: 'Sedantes y anticolinérgicos', d: 'Perpetúan inmovilidad y anorexia',
            say: 'Y el tercero, revisar los fármacos y retirar sedantes, anticolinérgicos y todo lo que quite el apetito o inmovilice. De eso hablamos en detalle en la clase de polifarmacia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos todo en un árbol, desde el control preventivo hasta la intervención.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['1 o 2 criterios de Fried', 'Prefrágil', 'Frágil o robusto'],
          say: 'Repasemos las trampas. Uno o dos criterios de Fried es prefrágil. Frágil exige tres o más.' },
        { cells: ['Fuerza de prensión baja, sin imagen', 'Sarcopenia probable: tratar ya', 'Esperar DEXA para tratar'],
          say: 'Fuerza baja sin imagen es sarcopenia probable, y ya se trata. El error es esperar la densitometría para empezar.' },
        { cells: ['Parámetro principal de sarcopenia', 'Fuerza muscular', 'Masa muscular'],
          say: 'En el consenso actual, el parámetro principal es la fuerza, no la masa.' },
        { cells: ['Primera función que cae en deterioro cognitivo', 'Instrumentales (Lawton)', 'Básicas (Barthel)'],
          say: 'Si el deterioro cognitivo recién empieza, lo primero que se pierde son las actividades instrumentales, como el dinero o los remedios. Las básicas caen después.' },
        { cells: ['Tratamiento de fragilidad y sarcopenia', 'Ejercicio de fuerza + proteínas', 'Suplementos solos o fármacos'],
          say: 'Y el tratamiento es ejercicio de fuerza con aporte de proteínas. Los suplementos solos, o buscar un fármaco, son la respuesta incorrecta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 78 años, autovalente, en control en APS. En el último año bajó de 58 a 52 kg sin dieta, camina más lento y ya no sale a comprar porque "se cansa enseguida". Dinamometría: 13 kg en la mano dominante. Recorre 4 metros en 7,2 s (0,55 m/s). Pfeiffer: 1 error. Barthel 95/100, Lawton 6/8.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Prefragilidad; control anual en EMPAM' },
        { letter: 'B', text: 'Fragilidad; ejercicio multicomponente y aporte proteico de 1,2–1,5 g/kg/día' },
        { letter: 'C', text: 'Demencia leve; derivar a neurología' },
        { letter: 'D', text: 'Fragilidad; solicitar DEXA de cuerpo entero antes de iniciar tratamiento' },
        { letter: 'E', text: 'Envejecimiento normal; no requiere intervención' },
      ],
      correct: 'B',
      explanation: 'Cumple 4 criterios de Fried (baja de peso > 10 %, agotamiento, prensión < 16 kg, marcha < 0,8 m/s): fragilidad. La prensión baja define además sarcopenia probable, que basta para tratar. Conducta: ejercicio multicomponente (Vivifrail), proteínas 1,2–1,5 g/kg/día, medir vitamina D y descartar causas orgánicas de la baja de peso.',
      say: {
        stem: 'Vamos a un caso. Mujer de setenta y ocho años, autovalente, en control en el consultorio. En un año bajó de cincuenta y ocho a cincuenta y dos kilos sin hacer dieta, camina más lento, y dejó de salir a comprar porque se cansa. Su prensión es de trece kilos, y demora siete segundos en caminar cuatro metros. El Pfeiffer es normal y su Barthel es noventa y cinco.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones son: prefragilidad con control anual; fragilidad con ejercicio y proteínas; demencia leve; fragilidad pidiendo una densitometría antes de tratar; o envejecimiento normal. Piénsalo.',
        answer: 'La respuesta es la B. Cuenta los criterios de Fried: baja de peso, agotamiento, prensión menor de dieciséis y marcha lenta. Son cuatro, así que es frágil, no prefrágil. La prensión baja además es sarcopenia probable, y eso basta para tratar: ejercicio multicomponente y proteínas. La D es la trampa: no hay que esperar la imagen. Y el Pfeiffer normal descarta que el problema sea cognitivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 143',
      stem: 'Hombre de 78 años con pérdida de masa muscular, fuerza de prensión <16 kg y velocidad de marcha 0.7 m/s.',
      question: '¿Cuál es el diagnóstico y la intervención más eficaz?',
      options: [
        { letter: 'A', text: 'Sarcopenia: ejercicio de resistencia progresivo + aporte proteico adecuado (1.2-1.5 g/kg/día)' },
        { letter: 'B', text: 'Desnutrición: solo suplementos nutricionales orales' },
        { letter: 'C', text: 'Depresión en adulto mayor: antidepresivos' },
        { letter: 'D', text: 'Osteoporosis: bifosfonatos' },
        { letter: 'E', text: 'Hipotiroidismo: levotiroxina' },
      ],
      correct: 'A',
      explanation: 'Masa baja + fuerza baja + marcha < 0,8 m/s: sarcopenia (severa según EWGSOP2). La intervención más eficaz es el ejercicio de resistencia progresivo con aporte proteico de 1,2–1,5 g/kg/día; no hay fármaco de primera línea.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Hombre de setenta y ocho años con pérdida de masa muscular, prensión menor de dieciséis kilos y una marcha de cero coma siete metros por segundo.',
        question: '¿Cuál es el diagnóstico y la intervención más eficaz?',
        options: 'Las opciones son: sarcopenia con ejercicio de resistencia y proteínas; desnutrición con suplementos solos; depresión con antidepresivos; osteoporosis con bifosfonatos; o hipotiroidismo con levotiroxina. Piénsalo.',
        answer: 'Es la A. Tiene masa baja, fuerza baja y rendimiento bajo: es una sarcopenia, y además severa. La intervención más eficaz es el ejercicio de resistencia progresivo con uno coma dos a uno coma cinco gramos de proteína por kilo. El distractor es la B: los suplementos solos, sin ejercicio, no recuperan el músculo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 25',
      stem: 'Una paciente de 84 años es traída por su hija debido a que presenta olvidos frecuentes. Su acompañante refiere que la paciente ha olvidado recetas, ya no cocina como antes y tiene dificultades crecientes en el manejo del dinero. Recientemente se desorientó en la calle, por lo que requirió ayuda para volver a casa. Tiene escolaridad incompleta hasta sexto básico. Al examen se observa orientada, cooperadora y sin alteraciones neurológicas.',
      question: '¿Cuál es el examen más adecuado para la evaluación inicial de esta paciente?',
      options: [
        { letter: 'A', text: 'Test de Montreal Cognitive Assessment (MOCA)' },
        { letter: 'B', text: 'Mini-Mental State Examination (MMSE)' },
        { letter: 'C', text: 'Prueba de Confusion Assessment Method (CAM)' },
        { letter: 'D', text: 'Test del reloj' },
        { letter: 'E', text: 'Prueba de memorización de tres palabras' },
      ],
      correct: 'B',
      explanation: 'Pérdida de actividades instrumentales (cocinar, manejar dinero) con olvidos, de curso progresivo y sin compromiso de conciencia: sospecha de demencia. El cribado cognitivo inicial es el MMSE. El CAM es para el delirium (cuadro agudo); el MoCA es más exigente y se reserva para buscar deterioro inicial con MMSE normal.',
      say: {
        stem: 'Segunda pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Mujer de ochenta y cuatro años, con escolaridad hasta sexto básico, que olvida recetas, ya no cocina como antes, le cuesta manejar el dinero y se desorientó en la calle. Al examen está orientada, cooperadora y sin focalidad.',
        question: '¿Cuál es el examen más adecuado para la evaluación inicial?',
        options: 'Las opciones son: el MoCA, el Mini-Mental, el CAM, el test del reloj, o memorizar tres palabras. Piénsalo.',
        answer: 'Es la B, el Mini-Mental. Fíjate en lo que conecta con la clase: lo primero que perdió son actividades instrumentales, cocinar y el dinero, que es justo lo que cae primero en el deterioro cognitivo. El cuadro es progresivo, así que se sospecha una demencia y se parte con el Mini-Mental. El CAM es la trampa: sirve para el delirium, que es agudo, y esta paciente está lúcida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 138',
      stem: 'Si aumenta la velocidad de envejecimiento en la población que pasara en temas de salud publica:',
      question: '¿Qué ocurre?',
      options: [
        { letter: 'A', text: 'Aumento de cobertura de adultos mayores en APS' },
        { letter: 'B', text: 'Aumento de personas con fragilidad' },
        { letter: 'C', text: 'Aumento en la variabilidad de morbilidad o mortalidad' },
        { letter: 'D', text: 'Ninguna de las anteriores es correcta' },
        { letter: 'E', text: 'Todas las anteriores son correctas' },
      ],
      correct: 'B',
      explanation: 'Un envejecimiento poblacional más rápido aumenta el número de personas mayores con pérdida de reserva funcional, es decir, con fragilidad. Por eso el EMPAM busca pesquisarla de forma sistemática en APS.',
      say: {
        stem: 'Y una pregunta de salud pública, del EUNACOM de diciembre de dos mil veinticuatro. Si aumenta la velocidad de envejecimiento de la población, ¿qué pasa en salud pública?',
        question: '¿Qué ocurre?',
        options: 'Las opciones son: aumenta la cobertura de adultos mayores en atención primaria; aumentan las personas con fragilidad; aumenta la variabilidad de la morbilidad o mortalidad; ninguna; o todas. Piénsalo.',
        answer: 'Es la B: aumentan las personas con fragilidad. Más adultos mayores significa más personas con la reserva agotada. Y eso explica por qué el EMPAM la busca cada año en atención primaria: es un problema poblacional, no solo individual. La cobertura, en cambio, no crece por sí sola.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fragilidad', tag: 'Fried', kind: 'criteria', items: [
          { t: 'Pérdida de reserva, reversible', d: 'No es edad ni discapacidad',
            say: 'Cerremos. La fragilidad es la pérdida de reserva frente a estresores menores, y es reversible.' },
          { t: '3 o más criterios de Fried', d: '1 a 2: prefrágil',
            say: 'Con tres o más criterios de Fried es frágil; con uno o dos, prefrágil.' },
        ] },
        { title: 'Sarcopenia y VGI', tag: 'Lo que se mide', kind: 'key', items: [
          { t: 'La fuerza manda', d: 'Fuerza baja: probable y se trata',
            say: 'En la sarcopenia manda la fuerza: la fuerza baja ya es sarcopenia probable, y ya se trata.' },
          { t: 'Cuatro esferas de la VGI', d: 'Lawton cae primero en lo cognitivo',
            say: 'La valoración geriátrica tiene cuatro esferas, funcional, mental, clínica y social, y las actividades instrumentales son las primeras en caer.' },
        ] },
        { title: 'Tratamiento', tag: 'Sin fármacos', kind: 'pharma', items: [
          { t: 'Ejercicio + proteínas', d: 'Fuerza, equilibrio, marcha; 1,2–1,5 g/kg/día',
            say: 'Si te llevas una sola idea de hoy: la fragilidad se revierte con ejercicio de fuerza y proteínas, no con fármacos. En la próxima clase vemos la consecuencia más temida de la fragilidad: las caídas y la fractura de cadera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto mayor en control preventivo',
    root: N('start', 'Adulto mayor de 65 años', 'EMPAM anual con EFAM-Chile',
      'Adulto mayor de sesenta y cinco años en su control preventivo anual. El EFAM-Chile lo clasifica.',
      ['', N('q', '¿Resultado del EFAM?', 'Tres categorías',
        '¿Cómo sale en el EFAM?',
        ['Sin riesgo', N('ok', 'Autovalente sin riesgo', 'Control anual',
          'Autovalente sin riesgo: sigue con su control anual y actividad física.')],
        ['Con riesgo', N('do', 'Talleres de prevención', 'Actividad física',
          'Autovalente con riesgo: se deriva a talleres de prevención y actividad física.')],
        ['Riesgo de dependencia', N('refer', 'VGI completa', 'Cuatro esferas + Fried',
          'En riesgo de dependencia: al médico para una valoración geriátrica integral completa, y ahí se aplican los criterios de Fried.',
          ['', N('q', '¿Cuántos criterios de Fried?', 'Peso, agotamiento, fuerza, marcha, actividad',
            '¿Cuántos criterios de Fried cumple?',
            ['0', N('ok', 'Robusto', 'Mantener actividad',
              'Ninguno: robusto.')],
            ['1–2', N('do', 'Prefrágil', 'Ejercicio preventivo',
              'Uno o dos: prefrágil, la fase de mayor rendimiento para prevenir con ejercicio.')],
            ['≥ 3', N('alert', 'Frágil', 'Ejercicio multicomponente + proteínas',
              'Tres o más: frágil. Ejercicio multicomponente, proteínas de uno coma dos a uno coma cinco gramos por kilo, vitamina D si está baja, y revisar los fármacos.')])])])]),
  },
};
