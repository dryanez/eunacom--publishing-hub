// Clase 2.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dieta primero, insulina cuando falla y nunca glibenclamida',
      say: 'Bienvenidos. En la clase de diabetes y embarazo aprendiste a diagnosticar la diabetes gestacional; hoy vemos qué se hace después. El examen pregunta tres cosas: cuánto tiempo se prueba la dieta, cuándo se inicia insulina y qué fármaco está prohibido. Y las tres se responden entendiendo a quién estamos protegiendo: al feto.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué hay que tratar a la madre?',
      nodes: [
        { id: 'hig', col: 0, row: 1, k: 'cause', t: 'Hiperglicemia materna', s: 'Segunda mitad del embarazo' },
        { id: 'pla', col: 1, row: 1, k: 'mech', t: 'La glucosa cruza la placenta', s: 'La insulina materna no' },
        { id: 'pan', col: 2, row: 1, k: 'mech', t: 'Hiperinsulinismo fetal', s: 'El páncreas fetal responde' },
        { id: 'mac', col: 3, row: 0, k: 'risk', t: 'Macrosomía', s: 'Grasa en tronco y hombros' },
        { id: 'dis', col: 4, row: 0, k: 'alert', t: 'Distocia de hombros', s: 'En el parto' },
        { id: 'hip', col: 3, row: 2, k: 'alert', t: 'Hipoglicemia neonatal', s: 'Al cortar el cordón' },
        { id: 'mal', col: 0, row: 3, k: 'trap', t: 'Malformaciones', s: 'Son de la pregestacional' },
      ],
      edges: [
        { from: 'hig', to: 'pla' }, { from: 'pla', to: 'pan' },
        { from: 'pan', to: 'mac', label: 'anabólico' }, { from: 'mac', to: 'dis' },
        { from: 'pan', to: 'hip', label: 'al nacer' },
      ],
      steps: [
        { show: ['hig', 'pla'], note: 'La glucosa pasa; la insulina materna no',
          say: 'Partamos por el mecanismo, porque explica toda la conducta. Cuando la madre está hiperglicémica, la glucosa atraviesa libremente la placenta. Pero la insulina de la madre no la cruza. Entonces el feto recibe el azúcar y tiene que manejarlo solo.' },
        { show: ['pan'], note: 'El feto fabrica su propia insulina en exceso',
          say: 'Y lo maneja con su propio páncreas, que responde fabricando grandes cantidades de insulina. Eso es el hiperinsulinismo fetal, y es el centro de todo el problema.' },
        { show: ['mac', 'dis'], note: 'La insulina fetal actúa como hormona de crecimiento',
          say: 'En el feto, la insulina actúa como una potente hormona de crecimiento. Acumula grasa en el tronco y los hombros, y el resultado es la macrosomía. Con hombros grandes aparece el riesgo del parto: la distocia de hombros.' },
        { show: ['hip'], note: 'Se corta el aporte, sigue la insulina',
          say: 'Y al nacer, cuando se corta el cordón, el aporte de glucosa materna se detiene de golpe, pero el recién nacido sigue con su insulina alta. Por eso hace una hipoglicemia neonatal grave.' },
        { show: ['mal'], note: 'Trampa: las malformaciones no son de la gestacional',
          say: 'Ojo con una trampa. Las malformaciones mayores, como la regresión caudal o las cardiopatías, son propias de la diabetes pregestacional descompensada en el primer trimestre. La consecuencia típica de la gestacional mal controlada es la macrosomía. Esa diferencia se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer paso',
      title: 'Terapia médica nutricional',
      cards: [
        { title: 'El pilar inicial', tag: 'Toda DMG', kind: 'key', items: [
          { t: 'Controla al 70–80 %', d: 'Solo con dieta fraccionada',
            say: 'Con el diagnóstico hecho, la paciente se deriva a alto riesgo obstétrico y parte con la terapia médica nutricional. Y la buena noticia es que funciona: entre el setenta y el ochenta por ciento de las pacientes se controla solo con dieta.' },
        ] },
        { title: 'Calorías', tag: 'Según peso', kind: 'criteria', items: [
          { t: 'Normopeso: 30 kcal/kg/día', d: 'Sobrepeso: 25 kcal/kg/día',
            say: 'El aporte depende del peso: treinta kilocalorías por kilo al día en la mujer de peso normal, y veinticinco si tiene sobrepeso.' },
          { t: 'Obesidad: 20–25 kcal/kg/día', d: 'Nunca bajo 1.500 kcal/día',
            say: 'En la obesidad se restringe con prudencia, a veinte o veinticinco kilocalorías por kilo, pero nunca por debajo de mil quinientas kilocalorías al día. ¿Por qué? Porque una dieta muy pobre produce cetonemia, y los cuerpos cetónicos dañan el cerebro fetal.' },
        ] },
        { title: 'Cómo se reparte', tag: 'Fraccionar', kind: 'normal', items: [
          { t: '40–45 % carbohidratos complejos', d: 'Bajo índice glicémico',
            say: 'La dieta tiene entre cuarenta y cuarenta y cinco por ciento de carbohidratos complejos, de bajo índice glicémico, veinte por ciento de proteínas y el resto grasas poliinsaturadas.' },
          { t: '4 comidas + 2 a 3 colaciones', d: 'Colación nocturna a las 23:00',
            say: 'Y el fraccionamiento es obligatorio: cuatro comidas y dos a tres colaciones, incluida una colación nocturna tardía, a las once de la noche. Es la misma lógica: evitar el ayuno largo que produce cetosis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Automonitoreo',
      title: 'Metas de glicemia capilar',
      cards: [
        { title: 'Cómo se mide', tag: '1 a 2 semanas', kind: 'key', items: [
          { t: 'Hemoglucotest 4 a 6 veces al día', d: 'Ayunas y después de comer',
            say: 'La dieta se evalúa con automonitoreo: hemoglucotest de cuatro a seis veces al día, en ayunas y una o dos horas después de las comidas.' },
          { t: 'Prueba de dieta: 1 a 2 semanas', d: 'No un mes',
            say: 'Y el plazo es corto: una a dos semanas. No se espera un mes. El feto sigue creciendo mientras esperamos, y ese tiempo de prueba se pregunta.' },
        ] },
        { title: 'Metas', tag: 'MINSAL', kind: 'criteria', items: [
          { t: 'Ayuno: 70 a 90–95 mg/dL', d: 'Refleja la noche',
            say: 'Las metas son estrictas. En ayunas, entre setenta y noventa a noventa y cinco. Ese valor refleja lo que pasó durante la noche.' },
          { t: '1 h postprandial: < 140 mg/dL', d: 'O 2 h postprandial: < 120',
            say: 'Una hora después de comer, bajo ciento cuarenta, que es el peak de glucosa en el embarazo. Si se mide a las dos horas, bajo ciento veinte.' },
          { t: 'A las 3 AM: > 60 mg/dL', d: 'Descartar hipoglicemia nocturna',
            say: 'Y cuando ya está con insulina, la glicemia de las tres de la mañana debe estar sobre sesenta, para no pasar por alto una hipoglicemia nocturna.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La decisión que más se pregunta',
      title: '¿Cuándo se inicia insulina?',
      nodes: [
        { id: 'die', col: 0, row: 1, k: 'start', t: '1 a 2 semanas de dieta', s: 'Con automonitoreo' },
        { id: 'c20', col: 1, row: 0, k: 'risk', t: 'Más del 20 % fuera de meta', s: 'Falla metabólica materna' },
        { id: 'ca', col: 1, row: 1, k: 'risk', t: 'CA fetal ≥ p75–90', s: 'Macrosomía incipiente' },
        { id: 'pha', col: 1, row: 2, k: 'risk', t: 'Polihidramnios', s: 'Sin otra causa' },
        { id: 'ins', col: 3, row: 1, k: 'alert', t: 'Iniciar insulina', s: 'Basta un criterio' },
        { id: 'ok', col: 3, row: 3, k: 'good', t: 'Sin criterios', s: 'Seguir con dieta' },
      ],
      edges: [
        { from: 'die', to: 'c20' }, { from: 'die', to: 'ca' }, { from: 'die', to: 'pha' },
        { from: 'c20', to: 'ins' }, { from: 'ca', to: 'ins' }, { from: 'pha', to: 'ins' },
        { from: 'die', to: 'ok', label: 'en meta' },
      ],
      steps: [
        { show: ['die'], note: 'Al cabo de la prueba, se revisa el registro',
          say: 'Pasadas una a dos semanas, se revisa el registro. Y hay criterios formales para iniciar insulina: basta con que se cumpla uno solo.' },
        { show: ['c20'], note: 'El criterio materno',
          say: 'El primero es materno: más del veinte por ciento de los controles sobre la meta. Es decir, ayunos sobre noventa a noventa y cinco, o valores a la hora sobre ciento cuarenta. Fíjate que no se exige que todos estén altos: basta con uno de cada cinco.' },
        { show: ['ca'], note: 'El criterio fetal',
          say: 'El segundo mira directamente al feto: una circunferencia abdominal fetal en el percentil setenta y cinco a noventa o más en la ecografía. Es la macrosomía que empieza, y es el hiperinsulinismo fetal que vimos al comienzo, visto en la ecografía.' },
        { show: ['pha'], note: 'El tercero',
          say: 'El tercero es un polihidramnios que no se explica por otra causa.' },
        { show: ['ins'], note: 'Insulina de inmediato, sin más semanas de dieta',
          say: 'Con cualquiera de los tres, se inicia insulina de inmediato. La trampa es insistir con más dieta o esperar otro mes.' },
        { show: ['ok'], note: 'Control cada 2 a 3 semanas',
          say: 'Si no hay ningún criterio, se mantiene la terapia nutricional, con control cada dos a tres semanas y ecografía mensual para vigilar el crecimiento fetal.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: '¿Qué insulina? Depende de qué glicemia falla',
      nodes: [
        { id: 'ins', col: 0, row: 1, k: 'start', t: 'Insulina humana', s: 'NPH y cristalina' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Qué valor está alto?', s: 'Mirar el registro' },
        { id: 'ayu', col: 2, row: 0, k: 'mech', t: 'Ayuno alto', s: 'Falla la noche' },
        { id: 'nph', col: 3, row: 0, k: 'good', t: 'NPH nocturna', s: '0,1–0,2 UI/kg a las 22:00' },
        { id: 'pos', col: 2, row: 2, k: 'mech', t: 'Postprandial alto', s: 'Falla la comida' },
        { id: 'rap', col: 3, row: 2, k: 'good', t: 'Cristalina o lispro/aspart', s: 'Antes de esa comida' },
      ],
      edges: [
        { from: 'ins', to: 'q' }, { from: 'q', to: 'ayu' }, { from: 'ayu', to: 'nph' },
        { from: 'q', to: 'pos' }, { from: 'pos', to: 'rap' },
      ],
      steps: [
        { show: ['ins'], note: 'No cruza la placenta en cantidad significativa',
          say: '¿Y qué insulina? La de elección es la insulina humana, NPH y cristalina. No atraviesa la placenta en cantidades significativas, y por eso es segura para el embrión y el feto.' },
        { show: ['q'], note: 'El registro dice qué insulina',
          say: 'La elección no se memoriza: se lee en el registro. La pregunta es qué glicemia es la que está fuera de meta.' },
        { show: ['ayu', 'nph'], note: 'La NPH de la noche controla el ayuno',
          say: 'Si lo que falla es el ayuno, el problema está en la noche. Se indica insulina NPH nocturna, de cero coma uno a cero coma dos unidades por kilo, a las diez de la noche.' },
        { show: ['pos', 'rap'], note: 'La rápida controla la comida que le sigue',
          say: 'Si el ayuno está bien y lo que se dispara es la glicemia después de comer, la NPH no sirve. Se usa insulina cristalina, o un análogo ultrarrápido como lispro o aspart, antes de las comidas que generan el peak. Esa distinción es la que decide la pregunta del caso clínico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prohibido',
      title: 'Sulfonilureas: contraindicadas',
      cards: [
        { title: 'Glibenclamida', tag: 'Nunca en el embarazo', kind: 'alert', items: [
          { t: 'Cruza activamente la placenta', d: 'Estimula el páncreas fetal',
            say: 'Y ahora lo prohibido. La glibenclamida, una sulfonilurea, atraviesa activamente la placenta y estimula directamente el páncreas del feto.' },
          { t: 'Hiperinsulinismo fetal masivo', d: 'Macrosomía e hipoglicemia neonatal refractaria',
            say: 'Piensa en el mecanismo del comienzo: produce exactamente el mismo daño que queremos evitar, pero peor. Hiperinsulinismo fetal masivo, macrosomía grave e hipoglicemia neonatal profunda y refractaria. Por eso está formalmente contraindicada.' },
        ] },
        { title: 'La regla', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Si falla la dieta: insulina', d: 'No un hipoglicemiante oral',
            say: 'La regla para el examen es simple: si la dieta falla, la respuesta es insulina. Cuando la alternativa ofrece glibenclamida, esa es la trampa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, desde el diagnóstico hasta la elección de la insulina.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Metas y fármaco de rescate',
      head: ['Momento', 'Meta', 'Si falla'],
      rows: [
        { cells: ['Ayunas', '70 a 90–95 mg/dL', 'NPH a las 22:00'],
          say: 'Repasemos en una tabla. Ayuno sobre la meta: NPH a las diez de la noche.' },
        { cells: ['1 h postprandial', '< 140 mg/dL', 'Cristalina o lispro antes de esa comida'],
          say: 'Postprandial a la hora sobre ciento cuarenta: insulina rápida antes de esa comida. El error es subir la NPH, que no cubre la comida.' },
        { cells: ['2 h postprandial', '< 120 mg/dL', 'Cristalina antes de esa comida'],
          say: 'Si se mide a las dos horas, la meta baja a ciento veinte, y la conducta es la misma.' },
        { cells: ['3 AM', '> 60 mg/dL', 'Bajar NPH o sumar colación'],
          say: 'Y si a las tres de la mañana está bajo sesenta, se baja la NPH o se agrega una colación.' },
        { cells: ['Falla de la dieta', 'Insulina', 'Glibenclamida: prohibida'],
          say: 'Y la trampa más clásica: ante la falla de la dieta, la glibenclamida está prohibida. Siempre insulina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Gestante de 27 semanas con diabetes gestacional diagnosticada hace 10 días, en plan de alimentación guiado por nutricionista. Registro de hemoglucotest: 7 de 20 controles postprandiales (35 %) sobre 155 mg/dL; glicemias de ayuno entre 82 y 88 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener la dieta y reevaluar en un mes' },
        { letter: 'B', text: 'Iniciar glibenclamida antes del almuerzo' },
        { letter: 'C', text: 'Iniciar insulina NPH nocturna a las 22:00' },
        { letter: 'D', text: 'Iniciar insulina rápida (cristalina o lispro) antes de las comidas' },
        { letter: 'E', text: 'Restringir la dieta a 1.200 kcal/día' },
      ],
      correct: 'D',
      explanation: 'Más del 20 % de los controles fuera de meta tras 1 a 2 semanas de dieta: falla de la terapia nutricional. El ayuno está en meta; lo alto es el postprandial, así que se indica insulina rápida precomida. La NPH corrige el ayuno, la glibenclamida está contraindicada y bajar de 1.500 kcal produce cetosis.',
      say: {
        stem: 'Vamos con un caso. Gestante de veintisiete semanas, con diabetes gestacional diagnosticada hace diez días y en dieta con nutricionista. En su registro, siete de veinte controles postprandiales están sobre ciento cincuenta y cinco, y los ayunos están entre ochenta y dos y ochenta y ocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener la dieta y reevaluar en un mes, glibenclamida antes del almuerzo, NPH nocturna, insulina rápida antes de las comidas, o restringir la dieta a mil doscientas kilocalorías. Piénsalo.',
        answer: 'Es la D. Siete de veinte es un treinta y cinco por ciento fuera de meta, más que el veinte por ciento que basta para iniciar insulina. Y ahora lee el registro: el ayuno está perfecto, lo que falla es después de comer. Entonces va insulina rápida antes de esas comidas. La NPH es el distractor tentador, pero corrige el ayuno, que aquí está bien. La glibenclamida está prohibida, y bajar de mil quinientas kilocalorías produce cetosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 133',
      stem: 'Una mujer de 34 años, cursando un embarazo de 24 semanas, se realiza un test de tolerancia a la glucosa oral, con 75 gramos de glucosa, que resulta 205 a las 2 horas.',
      question: 'Además de dieta y ejercicio, el tratamiento de elección es:',
      options: [
        { letter: 'A', text: 'Acarbosa' },
        { letter: 'B', text: 'Sitaglipina' },
        { letter: 'C', text: 'Metformina' },
        { letter: 'D', text: 'Insulina' },
        { letter: 'E', text: 'Glibenclamida' },
      ],
      correct: 'D',
      explanation: 'La diabetes en el embarazo se trata con dieta y ejercicio, y luego insulina como fármaco de elección. La insulina humana no cruza la placenta en cantidad significativa; la glibenclamida está contraindicada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Mujer de treinta y cuatro años, con veinticuatro semanas de embarazo, que se hace una prueba de tolerancia a la glucosa con setenta y cinco gramos y a las dos horas tiene doscientos cinco. Además de dieta y ejercicio, ¿cuál es el tratamiento de elección?',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: acarbosa, sitagliptina, metformina, insulina o glibenclamida. Piénsalo.',
        answer: 'Es la D, insulina. En el embarazo, cuando se necesita un fármaco, el de elección es la insulina humana, porque no atraviesa la placenta en cantidades significativas. La trampa es la glibenclamida: cruza la placenta y provoca hiperinsulinismo fetal e hipoglicemia neonatal. Los demás orales no son la respuesta de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 9',
      stem: 'Una paciente embarazada de 32 semanas, con altura uterina: 38 cm e IMC: 33 se realiza una ecografía obstétrica, que muestra feto creciendo en percentil 93, con ILA: 12. Se solicita test de tolerancia a la glucosa oral, que resulta 92 mg/dl basal y 170 mg/dl a las dos horas postcarga de glucosa.',
      question: '¿Cuál es la causa más probable de la condición fetal?',
      options: [
        { letter: 'A', text: 'Diabetes mellitus gestacional' },
        { letter: 'B', text: 'Obesidad materna' },
        { letter: 'C', text: 'Diabetes mellitus pregestacional' },
        { letter: 'D', text: 'Incompatibilidad de grupo Rh' },
        { letter: 'E', text: 'Síndrome hipertensivo del embarazo' },
      ],
      correct: 'A',
      explanation: 'Feto grande para la edad gestacional (sobre p90) con prueba de tolerancia alterada en el tercer trimestre: macrosomía por diabetes gestacional. La hiperglicemia materna provoca hiperinsulinismo fetal, que actúa como hormona de crecimiento.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Embarazada de treinta y dos semanas, con altura uterina de treinta y ocho centímetros e índice de masa corporal de treinta y tres. La ecografía muestra un feto en el percentil noventa y tres, con líquido amniótico normal. La prueba de tolerancia da noventa y dos en ayunas y ciento setenta a las dos horas.',
        question: '¿Cuál es la causa más probable de la condición fetal?',
        options: 'Las opciones: diabetes gestacional, obesidad materna, diabetes pregestacional, incompatibilidad Rh o síndrome hipertensivo del embarazo. Piénsalo.',
        answer: 'Es la A, diabetes gestacional. El feto sobre el percentil noventa es grande para su edad, y la prueba de tolerancia está alterada en el tercer trimestre. Es el hiperinsulinismo fetal del comienzo de la clase. La obesidad materna es el distractor tentador, porque la paciente la tiene, pero lo que explica el crecimiento es la glucosa que cruza la placenta. Y ese feto grande, por sí solo, ya es criterio para iniciar insulina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Dieta', tag: 'Primer paso', kind: 'key', items: [
          { t: 'Controla al 70–80 %', d: 'Fraccionada, nunca bajo 1.500 kcal',
            say: 'Cerremos con las reglas de oro. La dieta fraccionada controla a la mayoría, y nunca baja de mil quinientas kilocalorías, para no producir cetosis.' },
          { t: 'Prueba de 1 a 2 semanas', d: 'Con 4 a 6 hemoglucotest al día',
            say: 'La prueba de dieta dura una a dos semanas, con automonitoreo de cuatro a seis controles diarios.' },
        ] },
        { title: 'Insulina', tag: 'Basta un criterio', kind: 'alert', items: [
          { t: 'Más del 20 % fuera de meta', d: 'O CA fetal ≥ p75–90',
            say: 'Se inicia insulina si más del veinte por ciento de los controles está fuera de meta, o si la circunferencia abdominal fetal llega al percentil setenta y cinco a noventa.' },
          { t: 'Ayuno alto: NPH nocturna', d: 'Postprandial alto: rápida precomida',
            say: 'Ayuno alto se corrige con NPH nocturna; postprandial alto, con insulina rápida antes de esa comida.' },
        ] },
        { title: 'Prohibido', tag: 'Cruza la placenta', kind: 'pharma', items: [
          { t: 'Glibenclamida contraindicada', d: 'Hipoglicemia neonatal refractaria',
            say: 'Y la glibenclamida está contraindicada. Si te llevas una sola idea de hoy: en la gestante todo se decide pensando en el páncreas del feto; por eso la dieta falla rápido, la insulina entra sin demora y la glibenclamida nunca. En la próxima clase pasamos a la otra gran compañera de la diabetes: la hipertensión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diabetes gestacional: de la dieta a la insulina',
    root: N('start', 'Diabetes gestacional confirmada', 'Derivar a alto riesgo obstétrico',
      'Paciente con diabetes gestacional recién confirmada. Se deriva a alto riesgo obstétrico y parte la terapia médica nutricional, con automonitoreo de cuatro a seis controles diarios.',
      ['', N('q', '¿Criterios de insulina?', 'Tras 1 a 2 semanas de dieta',
        'Al cabo de una a dos semanas se revisa el registro y la ecografía. ¿Más del veinte por ciento de los controles fuera de meta, circunferencia abdominal fetal alta o polihidramnios?',
        ['NO', N('ok', 'Mantener la dieta', 'Control cada 2 a 3 semanas',
          'Si no hay ningún criterio, se mantiene la dieta, con control cada dos a tres semanas y ecografía mensual del crecimiento fetal.')],
        ['SÍ', N('q', '¿Qué glicemia falla?', 'Ayuno o postprandial',
          'Si hay al menos un criterio, se inicia insulina de inmediato. Y la pregunta siguiente es qué glicemia está fuera de meta.',
          ['Ayuno', N('do', 'NPH nocturna', '0,1–0,2 UI/kg a las 22:00',
            'Si falla el ayuno, insulina NPH nocturna, de cero coma uno a cero coma dos unidades por kilo, a las diez de la noche.')],
          ['Postprandial', N('do', 'Insulina rápida precomida', 'Cristalina, lispro o aspart',
            'Si falla la glicemia después de comer, insulina cristalina o un análogo ultrarrápido antes de esas comidas.')],
          ['¿Glibenclamida?', N('alert', 'Contraindicada', 'Cruza la placenta',
            'Y si aparece la glibenclamida como opción, se descarta: cruza la placenta y provoca hipoglicemia neonatal grave.')])])]),
  },
};
