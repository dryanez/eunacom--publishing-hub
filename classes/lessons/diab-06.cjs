// Clase 2.1 (Diabetes) — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Metformina desde el día uno, biterapia a los tres meses e insulina sin inercia',
      say: 'Bienvenidos. Hoy vemos el tratamiento escalonado de la diabetes tipo dos y su garantía GES, uno de los temas con más presencia en todo el EUNACOM. La buena noticia es que casi todas las preguntas se responden con una escalera de pocos peldaños: con qué se parte, cuándo se sube al siguiente escalón, y cuándo hay que saltarse la escalera e ir directo a la insulina. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Punto de partida',
      title: 'Estilo de vida y metformina, juntos',
      cards: [
        { title: 'Pilar basal', tag: 'Todo paciente', kind: 'normal', items: [
          { t: 'Cambio intensivo del estilo de vida', d: 'Dieta mediterránea o baja en azúcares simples',
            say: 'Todo paciente con diabetes tipo dos recién diagnosticada parte con el mismo pilar: la modificación intensiva del estilo de vida. Un plan de alimentación mediterráneo o bajo en carbohidratos simples.' },
          { t: 'Bajar 5 a 10 % del peso', d: 'Y 150 minutos semanales de aeróbico',
            say: 'Una reducción del cinco a diez por ciento del peso corporal, y los ciento cincuenta minutos semanales de actividad física aeróbica que vimos en la clase anterior.' },
        ] },
        { title: 'Metformina desde el diagnóstico', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Se inicia junto con la dieta', d: 'Sin meses de "prueba de dieta"',
            say: 'Pero aquí está el cambio respecto del pasado, y es una trampa clásica. Antes se hacían meses de prueba solo con dieta. Hoy, tanto la Asociación Americana de Diabetes como el MINSAL indican iniciar la metformina simultáneamente, desde el momento del diagnóstico.' },
          { t: 'Revertir la glucotoxicidad', d: 'Proteger la célula beta',
            say: '¿Por qué tanto apuro? Porque la glucosa alta es tóxica para las propias células beta del páncreas. Cada mes de hiperglicemia las daña un poco más. Tratar precoz revierte esa glucotoxicidad. Entonces, si una alternativa dice solo dieta y control en tres meses, desconfía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer escalón',
      title: 'Metformina: por qué es la primera línea',
      cards: [
        { title: 'Ventajas', tag: 'Primera línea universal', kind: 'key', items: [
          { t: 'Barata y neutra en el peso', d: 'Sin hipoglicemia en monoterapia',
            say: 'La metformina es la primera línea obligatoria, y tiene cuatro razones. Es barata, no sube de peso, y no produce hipoglicemia cuando se usa sola.' },
          { t: 'Menos eventos cardiovasculares', d: 'Estudio UKPDS',
            say: 'Y la cuarta: redujo los eventos cardiovasculares en el estudio UKPDS. En un paciente cuyo riesgo principal es el corazón, eso pesa.' },
        ] },
        { title: 'Cómo se indica', tag: 'Titular lento', kind: 'pharma', items: [
          { t: '500 u 850 mg una vez al día', d: 'Con la comida principal',
            say: 'Se parte con quinientos u ochocientos cincuenta miligramos una vez al día, con la comida principal, el almuerzo o la cena.' },
          { t: 'Subir cada 1 a 2 semanas', d: 'Hasta 1.700 a 2.550 mg/día',
            say: 'Y se sube gradualmente cada una a dos semanas, hasta la dosis óptima de mil setecientos a dos mil quinientos cincuenta miligramos al día. En la práctica, ochocientos cincuenta cada doce horas, o cada ocho horas.' },
        ] },
        { title: 'Efectos adversos', tag: 'Digestivos', kind: 'alert', items: [
          { t: 'Diarrea, náuseas, meteorismo', d: '20 a 30 %, dependen de la dosis',
            say: '¿Por qué subir lento? Por los efectos digestivos: diarrea, náuseas, meteorismo y sabor metálico, en un veinte a treinta por ciento. Dependen de la dosis, y se minimizan titulando despacio y tomando el comprimido siempre con comida.' },
          { t: 'Déficit de vitamina B12', d: 'A largo plazo',
            say: 'Y a largo plazo, puede producir déficit de vitamina B doce por malabsorción en el íleon. Sus contraindicaciones renales las vemos en detalle en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Segundo escalón',
      title: 'El control a los tres meses',
      nodes: [
        { id: 'met', col: 0, row: 1, k: 'start', t: 'Metformina a dosis plena', s: '+ estilo de vida' },
        { id: 'con', col: 1, row: 1, k: 'q', t: 'HbA1c a los 3 meses', s: 'Meta individualizada, habitual < 7 %' },
        { id: 'ok', col: 2, row: 0, k: 'good', t: 'En meta', s: 'Mantener el tratamiento' },
        { id: 'bi', col: 2, row: 2, k: 'effect', t: 'Sobre la meta', s: 'Biterapia de inmediato' },
        { id: 'ges', col: 3, row: 1, k: 'good', t: 'En APS: + glibenclamida', s: '2,5 a 5 mg/día predesayuno' },
        { id: 'tra', col: 3, row: 3, k: 'trap', t: 'Esperar otros 3 meses', s: 'Inercia terapéutica' },
      ],
      edges: [
        { from: 'met', to: 'con' }, { from: 'con', to: 'ok', label: 'en meta' },
        { from: 'con', to: 'bi', label: 'sobre 7 %' }, { from: 'bi', to: 'ges' },
        { from: 'bi', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['met'], note: 'Metformina a dosis plena',
          say: 'Ahora, cómo se sube de escalón. El paciente está con estilo de vida y metformina a dosis plena.' },
        { show: ['con'], note: 'El control es a los tres meses, con hemoglobina glicosilada',
          say: 'El control se hace estrictamente a los tres meses de iniciado o ajustado el tratamiento, con la hemoglobina glicosilada. ¿Por qué tres meses? Porque la hemoglobina glicosilada refleja el promedio de glicemia de los últimos tres meses. Antes no alcanza a mostrar el efecto.' },
        { show: ['ok'], note: 'Si está en meta, no se toca',
          say: 'Si el paciente está en su meta, que en general es bajo siete, se mantiene el tratamiento. No se agregan fármacos a un paciente que está bien controlado. Esa pregunta existe.' },
        { show: ['bi'], note: 'Sobre 7 % con dosis plena: se agrega un segundo fármaco',
          say: 'Si con dosis plena de metformina sigue sobre la meta, se escala de inmediato a biterapia. Y fíjate: se agrega un segundo fármaco, la metformina no se suspende.' },
        { show: ['ges'], note: 'La opción de la canasta GES',
          say: 'En la red pública, en la atención primaria, el segundo fármaco disponible es una sulfonilurea, la glibenclamida, de dos coma cinco a cinco miligramos al día antes del desayuno. Se reserva para pacientes sin insuficiencia renal grave ni fragilidad extrema, por el riesgo de hipoglicemia.' },
        { show: ['tra'], note: 'La inercia es el error',
          say: 'La trampa es la inercia: reforzar la dieta y controlar en otros tres meses, o en un año. Si no está en meta con dosis plena, se sube el escalón en ese mismo control.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Segundo escalón',
      title: '¿Qué segundo fármaco según el paciente?',
      cards: [
        { title: 'Riesgo estándar', tag: 'Sin falla de órgano', kind: 'normal', items: [
          { t: 'Glibenclamida o inhibidor DPP-4', d: 'En APS: glibenclamida',
            say: 'Pero el segundo fármaco no es igual para todos, y el examen lo pregunta cada vez más. En el paciente de riesgo estándar, sin falla de ningún órgano, sirve una sulfonilurea como la glibenclamida, o un inhibidor de DPP cuatro, como la sitagliptina.' },
        ] },
        { title: 'Insuficiencia cardíaca o ERC', tag: 'Guías ADA', kind: 'key', items: [
          { t: 'Inhibidor SGLT2', d: 'Empagliflozina o dapagliflozina',
            say: 'Si el paciente tiene insuficiencia cardíaca o enfermedad renal crónica, el segundo fármaco de elección es un inhibidor de SGLT dos, la empagliflozina o la dapagliflozina.' },
          { t: 'Evitar tiazolidinedionas en IC', d: 'Retienen líquido',
            say: 'Y en la insuficiencia cardíaca, ojo con la pioglitazona y las otras tiazolidinedionas: retienen líquido y la descompensan.' },
        ] },
        { title: 'Enfermedad aterosclerótica', tag: 'IAM o ACV previo', kind: 'pharma', items: [
          { t: 'Agonista GLP-1', d: 'Liraglutida o semaglutida; o un iSGLT2',
            say: 'Y si lo que predomina es la enfermedad cardiovascular aterosclerótica, un infarto o un accidente cerebrovascular previo, se prefiere un agonista de GLP uno, como la liraglutida o la semaglutida, o también un inhibidor de SGLT dos.' },
          { t: 'Dos preguntas distintas', d: 'Qué hay en APS vs. qué protege el órgano',
            say: 'Fíjate que son dos preguntas distintas. Si te preguntan qué se agrega en la canasta GES de atención primaria, es glibenclamida. Si te describen un paciente con insuficiencia cardíaca o un infarto previo, te están preguntando por el fármaco que protege el órgano. Estos fármacos los vemos a fondo en la clase de nuevas terapias.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Insulinización temprana',
      title: 'Cuándo saltarse la escalera',
      nodes: [
        { id: 'a1c', col: 0, row: 0, k: 'risk', t: 'HbA1c ≥ 9–10 %', s: 'O glicemia de ayuno > 250–300' },
        { id: 'cat', col: 0, row: 1, k: 'risk', t: 'Síntomas catabólicos', s: 'Baja de peso, astenia, deshidratación' },
        { id: 'cet', col: 0, row: 2, k: 'alert', t: 'Cetonuria', s: 'O sospecha de cetoacidosis' },
        { id: 'fal', col: 0, row: 3, k: 'risk', t: 'Falla de biterapia máxima', s: 'Tras 3 a 6 meses' },
        { id: 'agu', col: 0, row: 4, k: 'risk', t: 'Enfermedad aguda grave', s: 'Cirugía mayor o no puede usar orales' },
        { id: 'ins', col: 2, row: 2, k: 'good', t: 'Insulina de inmediato', s: 'NPH nocturna + metformina' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Inercia médica', s: 'Postergar la insulina' },
      ],
      edges: [
        { from: 'a1c', to: 'ins' }, { from: 'cat', to: 'ins' }, { from: 'cet', to: 'ins' },
        { from: 'fal', to: 'ins' }, { from: 'agu', to: 'ins' },
        { from: 'ins', to: 'tra', label: 'no' },
      ],
      steps: [
        { show: ['a1c'], note: 'Una hemoglobina glicosilada muy alta',
          say: 'Ahora, lo que más se pregunta del tema: cuándo no se sigue la escalera y se va directo a la insulina. La primera indicación es un debut con hemoglobina glicosilada de nueve a diez o más, o una glicemia de ayuno sobre doscientos cincuenta a trescientos. Con esas cifras, un comprimido no alcanza.' },
        { show: ['cat'], note: 'El paciente se está consumiendo',
          say: 'La segunda son los síntomas catabólicos: baja de peso involuntaria y rápida, astenia extrema, deshidratación. Piensa en lo que significan: el cuerpo no puede usar la glucosa y está quemando sus propias reservas. Le falta insulina.' },
        { show: ['cet'], note: 'Cetonas: falta insulina de verdad',
          say: 'La tercera, la cetonuria, o la sospecha de una descompensación cetoacidótica. Es el mismo mensaje, más grave: falta insulina.' },
        { show: ['fal'], note: 'La escalera se agotó',
          say: 'La cuarta es la falla de la biterapia oral a dosis máximas, después de tres a seis meses de seguimiento. Es decir, el paciente ya subió los dos escalones y no llegó.' },
        { show: ['agu'], note: 'Situaciones transitorias',
          say: 'Y la quinta, una enfermedad intercurrente aguda grave, una cirugía mayor, o una contraindicación para los fármacos orales.' },
        { show: ['ins'], note: 'NPH nocturna, manteniendo la metformina',
          say: 'En cualquiera de estos casos, se inicia insulina de inmediato: insulina NPH nocturna, o un esquema intensificado. Y la metformina se mantiene, porque sigue bajando la resistencia a la insulina.' },
        { show: ['tra'], note: 'La insulina no es un fracaso',
          say: 'El error que el examen castiga es la inercia médica: agregar otro comprimido, o subir la dosis, a un paciente que ya necesita insulina. La insulina no es el último recurso ni un castigo: es el tratamiento correcto cuando falta insulina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tercer y cuarto escalón',
      title: 'Cómo se inicia y se ajusta la insulina',
      cards: [
        { title: 'Insulina basal', tag: 'Paso 3', kind: 'pharma', items: [
          { t: 'NPH nocturna 0,2 UI/kg', d: 'A las 22:00, sumada a los orales',
            say: 'Veamos los dos últimos escalones. El tercero es la insulinización basal: se agrega insulina NPH nocturna, a cero coma dos unidades por kilo, a las diez de la noche.' },
          { t: 'Subir 2 UI cada 3 a 4 días', d: 'Hasta glicemia de ayuno 80 a 130',
            say: 'Y se ajusta según la glicemia de ayuno: se suben dos unidades cada tres a cuatro días, hasta que el ayuno quede entre ochenta y ciento treinta. ¿Por qué se ajusta con la glicemia de la mañana? Porque la NPH de la noche es la que controla el ayuno.' },
        ] },
        { title: 'Esquema intensificado', tag: 'Paso 4', kind: 'criteria', items: [
          { t: 'NPH 2 veces al día + cristalina', d: 'Cristalina antes de las comidas',
            say: 'Si con la NPH por sobre cero coma cinco unidades por kilo sigue fuera de meta, o aparecen hipoglicemias, se pasa al cuarto escalón: NPH dos veces al día más insulina cristalina antes de las comidas.' },
          { t: 'Dosis total 0,5 a 1,0 UI/kg/día', d: 'Manejo en nivel secundario',
            say: 'La dosis total va de cero coma cinco a una unidad por kilo al día, repartida, y este paciente ya se maneja con el equipo de diabetología en el nivel secundario. Los esquemas en detalle los vemos en el bloque de insulinoterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'GES',
      title: 'Garantía GES de diabetes tipo 2',
      cards: [
        { title: 'Plazos', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Confirmación: 45 días', d: 'Desde la sospecha',
            say: 'Cerremos el contenido con la garantía GES, que cubre a beneficiarios de Fonasa e Isapre con diabetes tipo dos. Tiene dos plazos que se preguntan. El primero: desde la sospecha clínica, la confirmación diagnóstica tiene que estar dentro de cuarenta y cinco días.' },
          { t: 'Tratamiento: 24 horas', d: 'Desde la confirmación',
            say: 'Y el segundo, que es el más preguntado: una vez confirmado el diagnóstico, el tratamiento tiene que iniciarse dentro de veinticuatro horas. Ojo con confundirlos: cuarenta y cinco días para confirmar, veinticuatro horas para tratar. Y es coherente con lo que vimos: la metformina parte desde el diagnóstico.' },
        ] },
        { title: 'Canasta', tag: 'Lo que cubre', kind: 'pharma', items: [
          { t: 'Metformina y glibenclamida', d: 'Los orales de la canasta',
            say: '¿Qué cubre la canasta? En orales, la metformina y la glibenclamida. Por eso en atención primaria la biterapia clásica es metformina con glibenclamida.' },
          { t: 'Insulina NPH y cristalina', d: 'Jeringas, lancetas y glucómetro',
            say: 'Además, insulina NPH e insulina cristalina, y para los pacientes que usan insulina, jeringas, lancetas y glucómetro.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la escalera completa en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['DM2 recién diagnosticada, sin síntomas', 'Estilo de vida + metformina desde el inicio', 'Meses de "prueba de dieta"'],
          say: 'Repasemos las trampas. Diabetes tipo dos recién diagnosticada y sin síntomas: estilo de vida y metformina desde el inicio. El error es dejar meses de prueba solo con dieta.' },
        { cells: ['HbA1c en meta con su tratamiento', 'Mantener sin cambios', 'Agregar o subir fármacos'],
          say: 'Paciente que está en meta: se mantiene el tratamiento. No se agregan fármacos a quien ya está bien.' },
        { cells: ['HbA1c > 7 % a los 3 meses con dosis plena', 'Mantener metformina + 2° fármaco', 'Cambiar la metformina o esperar'],
          say: 'Sobre siete a los tres meses con dosis plena: se mantiene la metformina y se agrega un segundo fármaco. El error es reemplazar la metformina, o esperar otros tres meses.' },
        { cells: ['DM2 con IC o ERC', 'Agregar iSGLT2', 'Pioglitazona en la IC'],
          say: 'Con insuficiencia cardíaca o enfermedad renal crónica, el segundo fármaco es un inhibidor de SGLT dos. Y la pioglitazona en la insuficiencia cardíaca es un error.' },
        { cells: ['HbA1c ≥ 9–10 %, baja de peso o cetonuria', 'Insulina NPH + metformina', 'Agregar otro comprimido'],
          say: 'Hemoglobina glicosilada de nueve a diez o más, baja de peso o cetonuria: insulina, manteniendo la metformina. Agregar otro comprimido es la inercia que se castiga.' },
        { cells: ['Falla de biterapia a dosis máxima', 'Iniciar insulina basal', 'Subir más los orales'],
          say: 'Falla de la biterapia a dosis máximas: insulina basal. Subir un poco más los orales rara vez alcanza.' },
        { cells: ['Plazos GES', 'Confirmar en 45 días; tratar en 24 h', 'Confundir los dos plazos'],
          say: 'Y los plazos GES: cuarenta y cinco días para confirmar, veinticuatro horas para iniciar tratamiento.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 57 años con DM2 diagnosticada hace 4 meses. Inició cambios de estilo de vida y metformina 850 mg cada 12 horas. Acude a control con HbA1c de 8,3%. No presenta baja de peso ni poliuria, ni antecedentes cardiovasculares. Creatinina 0,9 mg/dL.',
      question: '¿Cuál es la conducta indicada según la guía GES?',
      options: [
        { letter: 'A', text: 'Suspender metformina e iniciar insulina NPH nocturna' },
        { letter: 'B', text: 'Mantener metformina y asociar glibenclamida' },
        { letter: 'C', text: 'Reforzar la dieta y controlar en 3 meses' },
        { letter: 'D', text: 'Reemplazar metformina por glibenclamida' },
        { letter: 'E', text: 'Hospitalizar para insulina endovenosa' },
      ],
      correct: 'B',
      explanation: 'Falla de la monoterapia con metformina a dosis terapéutica tras 3 meses (HbA1c 8,3%, meta < 7%). Está asintomático, sin catabolismo ni cetonuria: no tiene criterios de insulina. Se mantiene la metformina y se agrega un segundo oral; en la canasta GES de APS, glibenclamida 2,5 a 5 mg/día.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y siete años, con diabetes tipo dos diagnosticada hace cuatro meses, con estilo de vida y metformina ochocientos cincuenta cada doce horas. Llega con hemoglobina glicosilada de ocho coma tres. No ha bajado de peso, no tiene poliuria ni antecedentes cardiovasculares, y su creatinina es normal.',
        question: '¿Cuál es la conducta indicada según la guía GES?',
        options: 'Las opciones: suspender la metformina e iniciar insulina, mantener la metformina y agregar glibenclamida, reforzar la dieta y controlar en tres meses, reemplazar la metformina por glibenclamida, u hospitalizar para insulina endovenosa. Piénsalo.',
        answer: 'Es la B. Pasaron más de tres meses con dosis plena y está sobre siete: se sube un escalón. Como no tiene síntomas, baja de peso ni cetonas, no hay criterios de insulina. Se mantiene la metformina y, en la canasta GES, se agrega glibenclamida. La D es la trampa: la metformina nunca se reemplaza, se suma. Y la C es inercia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 132',
      stem: 'Un paciente de 45 años se realiza glicemias de ayuno que resultan 128 y 136 mg/dl. Se solicita hemoglobina glicosilada, que resulta 7,2%.',
      question: '¿Cuál es el tratamiento de elección para iniciar el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Glibenclamida' },
        { letter: 'B', text: 'Metformina' },
        { letter: 'C', text: 'Pioglitazona' },
        { letter: 'D', text: 'Sitagliptina' },
        { letter: 'E', text: 'Repaglinida' },
      ],
      correct: 'B',
      explanation: 'Tiene diagnóstico de diabetes (dos glicemias de ayuno ≥ 126 mg/dL). Por la edad y la ausencia de otros antecedentes, lo más probable es que sea tipo 2. Sin indicaciones de insulina, se inicia metformina.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de diciembre de dos mil diecinueve. Paciente de cuarenta y cinco años con glicemias de ayuno de ciento veintiocho y ciento treinta y seis, y hemoglobina glicosilada de siete coma dos.',
        question: '¿Cuál es el tratamiento de elección para iniciar el manejo?',
        options: 'Las opciones: glibenclamida, metformina, pioglitazona, sitagliptina o repaglinida. Piénsalo.',
        answer: 'Es la B, metformina. Dos glicemias de ayuno sobre ciento veintiséis confirman la diabetes, y por la edad lo más probable es que sea tipo dos. No tiene ningún criterio de insulina, así que se parte por el primer escalón: metformina, junto con el estilo de vida. La glibenclamida es el distractor, pero es un segundo fármaco, no el primero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 17',
      stem: 'Un hombre de 33 años, obeso, consulta por polidipsia y baja de peso de 6 kilogramos, en los últimos dos meses. Su examen físico no aporta mayor información. Se solicitan exámenes, entre los que destacan glicemia de ayuno de 245 mg/dl y hemoglobina glicosilada: 9,2%.',
      question: 'El tratamiento inicial más adecuado es:',
      options: [
        { letter: 'A', text: 'Metformina' },
        { letter: 'B', text: 'Sitagliptina' },
        { letter: 'C', text: 'Insulina' },
        { letter: 'D', text: 'Liraglutide' },
        { letter: 'E', text: 'Glibenclamida' },
      ],
      correct: 'C',
      explanation: 'Tanto por los síntomas de diabetes (baja de peso y polidipsia) como por la HbA1c mayor a 9%, está indicada la insulina.',
      say: {
        stem: 'Del EUNACOM de diciembre de dos mil dieciocho. Hombre de treinta y tres años, obeso, con polidipsia y seis kilos de baja de peso en dos meses. Glicemia de ayuno de doscientos cuarenta y cinco y hemoglobina glicosilada de nueve coma dos.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: metformina, sitagliptina, insulina, liraglutida o glibenclamida. Piénsalo.',
        answer: 'Es la C, insulina. Fíjate que tiene dos criterios de insulinización temprana a la vez: síntomas catabólicos, con baja de peso y polidipsia, y una hemoglobina glicosilada sobre nueve. Ese paciente no tiene insulina suficiente. La metformina es el distractor, porque es obeso y parece un tipo dos clásico, pero con catabolismo se parte con insulina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 151',
      stem: 'Diabético en tratamiento con metformina, Hb1Ac >9%.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Agregar glibenclamida 5 mg/día' },
        { letter: 'B', text: 'Agregar sitagliptina 100 mg/día' },
        { letter: 'C', text: 'Agregar liraglutida 1,2 mg SC' },
        { letter: 'D', text: 'Aumentar metformina al máximo' },
        { letter: 'E', text: 'Insulina NPH' },
      ],
      correct: 'E',
      explanation: 'Con metformina y HbA1c sobre 9%, ningún segundo fármaco oral o GLP-1 alcanza a bajarla a la meta: está indicada la insulina NPH, manteniendo la metformina.',
      say: {
        stem: 'Del EUNACOM de enero de dos mil veintitrés, una pregunta muy corta. Diabético con metformina y hemoglobina glicosilada sobre nueve.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: agregar glibenclamida, agregar sitagliptina, agregar liraglutida, subir la metformina al máximo, o insulina NPH. Piénsalo.',
        answer: 'Es la E, insulina NPH. Aquí no hay síntomas en el enunciado: la sola cifra, sobre nueve, basta para insulinizar. Las otras tres opciones que agregan un fármaco serían correctas con una hemoglobina glicosilada de ocho, pero con más de nueve no alcanzan a llevar al paciente a la meta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 125',
      stem: 'Un paciente de 55 años, diabético e hipertenso, en tratamiento con metformina 2000mg al día, glibenclamida 15mg al día y enalapril 20mg al día, acude a control con exámenes, donde destaca glicemia de ayuno de 180mg/dL y hemoglobina glicosilada de 8,8%. Se ha mantenido sin síntomas y su examen físico es normal.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Aumentar dosis de glibenclamida' },
        { letter: 'B', text: 'Aumentar dosis de metformina' },
        { letter: 'C', text: 'Iniciar insulina' },
        { letter: 'D', text: 'Reemplazar metformina con rosiglitazona' },
        { letter: 'E', text: 'Reemplazar glibenclamida con sitagliptina' },
      ],
      correct: 'C',
      explanation: 'Ya está en biterapia con dosis altas de metformina y glibenclamida. Subir un poco más los orales tendría poco efecto para una HbA1c de 8,8%: la falla de la biterapia oral indica iniciar insulina.',
      say: {
        stem: 'Del EUNACOM de julio de dos mil trece. Paciente de cincuenta y cinco años con metformina, dos gramos al día, y glibenclamida, quince miligramos al día. Glicemia de ayuno de ciento ochenta y hemoglobina glicosilada de ocho coma ocho. Sin síntomas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: subir la glibenclamida, subir la metformina, iniciar insulina, cambiar la metformina por rosiglitazona, o cambiar la glibenclamida por sitagliptina. Piénsalo.',
        answer: 'Es la C. Este paciente ya subió los dos escalones y está en biterapia con dosis altas. Esa es la cuarta indicación de insulina: la falla de la biterapia oral. Aún quedaba un poco de margen para subir los comprimidos, y por eso las alternativas A y B tientan, pero con ocho coma ocho no alcanzan a llegar a la meta. Y el reemplazo por sitagliptina no suma potencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 105',
      stem: 'Un paciente de 59 años, con diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850mg dos veces al día y glibenclamida 5mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglo- bina glicosilada de 6,9%. Su examen físico no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Aumentar dosis de glibenclamida' },
        { letter: 'C', text: 'Suspender metformina' },
        { letter: 'D', text: 'Aumentar dosis de metformina' },
        { letter: 'E', text: 'Mantener el tratamiento sin cambios' },
      ],
      correct: 'E',
      explanation: 'Si la hemoglobina glicosilada está bajo 7%, no es necesario hacer cambios en el tratamiento hipoglicemiante.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil diecisiete. Paciente de cincuenta y nueve años con metformina y glibenclamida. Creatinina normal y hemoglobina glicosilada de seis coma nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, subirla, suspender la metformina, subirla, o mantener el tratamiento sin cambios. Piénsalo.',
        answer: 'Es la E. Está bajo siete, en meta, y es un adulto de cincuenta y nueve años con función renal normal: no hay nada que cambiar. La escalera también sirve para saber cuándo no subir. Guarda este caso, porque en la próxima clase vas a ver el mismo enunciado con un paciente de ochenta y cinco años, y la respuesta cambia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La escalera', tag: 'Paso a paso', kind: 'key', items: [
          { t: 'Metformina desde el diagnóstico', d: 'Junto con el estilo de vida',
            say: 'Cerremos con las reglas de oro. La metformina parte desde el diagnóstico, junto con el estilo de vida, sin meses de prueba de dieta.' },
          { t: 'Control a los 3 meses', d: 'Sobre 7 % con dosis plena: biterapia',
            say: 'El control es a los tres meses. Si sigue sobre siete con dosis plena, se mantiene la metformina y se agrega un segundo fármaco: en la canasta GES, glibenclamida; con insuficiencia cardíaca o enfermedad renal, un inhibidor de SGLT dos; con enfermedad aterosclerótica, un agonista de GLP uno.' },
        ] },
        { title: 'Insulina', tag: 'Sin inercia', kind: 'alert', items: [
          { t: 'HbA1c ≥ 9–10 %, catabolismo, cetonas', d: 'Insulina NPH de inmediato',
            say: 'Hemoglobina glicosilada de nueve a diez o más, síntomas catabólicos o cetonas: insulina de inmediato, manteniendo la metformina.' },
          { t: 'Falla de biterapia máxima', d: 'NPH nocturna 0,2 UI/kg',
            say: 'Y si falla la biterapia a dosis máximas, también insulina: NPH nocturna, ajustada con la glicemia de ayuno.' },
        ] },
        { title: 'GES', tag: 'Plazos', kind: 'criteria', items: [
          { t: '45 días para confirmar', d: '24 horas para tratar',
            say: 'En el GES, cuarenta y cinco días para confirmar y veinticuatro horas para tratar. Si te llevas una sola idea de hoy: la metformina nunca se quita, se le suma; y cuando falta insulina, se da insulina sin esperar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tratamiento escalonado de la diabetes tipo 2',
    root: N('start', 'DM2 recién diagnosticada', 'Estilo de vida en todos',
      'Paciente con diabetes tipo dos recién diagnosticada. Todos parten con cambio de estilo de vida. La primera pregunta decide si se sube la escalera paso a paso o se salta directo a la insulina.',
      ['', N('q', '¿Criterios de insulina de entrada?', 'HbA1c ≥ 9–10 %, catabolismo, cetonuria',
        '¿Tiene hemoglobina glicosilada de nueve a diez o más, glicemia sobre doscientos cincuenta a trescientos, síntomas catabólicos o cetonuria?',
        ['Sí', N('alert', 'Insulina NPH + metformina', 'De inmediato',
          'Si tiene cualquiera de ellos, insulina NPH nocturna de inmediato, manteniendo la metformina. Sin inercia.')],
        ['No', N('do', 'Metformina desde el diagnóstico', 'Titular hasta 1.700–2.550 mg/día',
          'Si no los tiene, metformina desde el diagnóstico, titulada lento hasta la dosis plena.',
          ['', N('q', 'HbA1c a los 3 meses', '¿En meta?',
            'A los tres meses se controla la hemoglobina glicosilada.',
            ['En meta', N('ok', 'Mantener', 'No agregar fármacos',
              'Si está en meta, se mantiene el tratamiento.')],
            ['Sobre 7 %', N('do', 'Biterapia', 'APS: + glibenclamida · IC/ERC: + iSGLT2 · aterosclerosis: + GLP-1',
              'Si está sobre siete, biterapia: en atención primaria, glibenclamida; con insuficiencia cardíaca o enfermedad renal, inhibidor de SGLT dos; con enfermedad aterosclerótica, agonista de GLP uno.',
              ['Falla a los 3–6 meses', N('refer', 'Insulina basal', 'NPH nocturna 0,2 UI/kg; luego esquema intensificado',
                'Si la biterapia a dosis máximas falla, insulina NPH nocturna. Y si con eso no se logra la meta, esquema intensificado en el nivel secundario.')])])])])]),
  },
};
