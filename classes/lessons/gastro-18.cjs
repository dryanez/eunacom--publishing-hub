// Clase 4.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dos de tres criterios, volumen agresivo y nada de antibióticos profilácticos',
      say: 'Bienvenidos. Hoy vemos pancreatitis aguda, un tema de alta rentabilidad: casi todas las preguntas del banco son de diagnóstico diferencial del dolor epigástrico agudo. Y es la continuación directa de la clase de vía biliar, porque el mismo cálculo que obstruye el colédoco puede terminar inflamando el páncreas. Partamos por entender qué le pasa a ese páncreas.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Un páncreas que se digiere a sí mismo',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'Litiasis biliar o alcohol', s: 'Las dos causas más frecuentes' },
        { id: 'trip', col: 1, row: 1, k: 'mech', t: 'Tripsinógeno activado', s: 'Dentro del acino, antes de tiempo' },
        { id: 'auto', col: 2, row: 1, k: 'mech', t: 'Autodigestión', s: 'Páncreas y retroperitoneo' },
        { id: 'dol', col: 3, row: 0, k: 'effect', t: 'Dolor transfixiante', s: 'Epigástrico, en faja al dorso' },
        { id: 'ile', col: 3, row: 1, k: 'effect', t: 'Íleo', s: 'Vómitos, distensión' },
        { id: 'ter', col: 3, row: 2, k: 'risk', t: 'Tercer espacio', s: 'Litros hacia el retroperitoneo' },
        { id: 'vol', col: 4, row: 2, k: 'good', t: 'Volumen agresivo', s: 'Pilar de las primeras 24 h' },
      ],
      edges: [
        { from: 'gat', to: 'trip', label: 'gatilla' }, { from: 'trip', to: 'auto' },
        { from: 'auto', to: 'dol' }, { from: 'auto', to: 'ile' }, { from: 'auto', to: 'ter' },
        { from: 'ter', to: 'vol', label: 'por eso' },
      ],
      steps: [
        { show: ['gat'], note: 'En Chile: cálculo o alcohol',
          say: 'Todo parte con un gatillo. En Chile, los dos grandes son la litiasis biliar y el alcohol. Los retomamos en detalle más adelante.' },
        { show: ['trip'], note: 'La enzima se activa donde no debe',
          say: 'Ese gatillo hace que el tripsinógeno se active antes de tiempo, dentro del propio acino pancreático. La enzima que debía activarse en el duodeno se enciende dentro de la glándula.' },
        { show: ['auto'], note: 'La pancreatitis es autodigestión',
          say: 'Y eso desencadena una cascada de enzimas que digieren el propio páncreas y el retroperitoneo que lo rodea. La pancreatitis aguda, en una palabra, es autodigestión.' },
        { show: ['dol', 'ile'], note: 'El mecanismo explica la clínica',
          say: 'De ahí sale la clínica. Un dolor epigástrico intenso, transfixiante, que se va en faja hacia la espalda, porque el páncreas está pegado al dorso. Y un íleo, con vómitos y distensión, porque el intestino vecino deja de moverse.' },
        { show: ['ter'], note: 'La piel seca engaña: pierde litros hacia adentro',
          say: 'Pero lo más peligroso no se ve. La inflamación del retroperitoneo hace que el paciente pierda litros de líquido hacia el tercer espacio, aunque su piel se vea seca y parezca que no le pasa nada.' },
        { show: ['vol'], note: 'Por eso el pilar es el volumen',
          say: 'Y esa es la razón de que el pilar del tratamiento en las primeras veinticuatro horas no sea un antibiótico ni un fármaco especial, sino reponer volumen de forma agresiva. Guarda esta idea, porque es la que más se pregunta en el manejo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Dos de tres criterios',
      cards: [
        { title: 'Criterios de Atlanta', tag: 'Revisada 2012', kind: 'criteria', items: [
          { t: 'Dolor abdominal compatible', d: 'Epigástrico, intenso, en faja al dorso',
            say: 'Veamos cómo se hace el diagnóstico. Se necesitan dos de tres criterios, los de Atlanta revisada del año dos mil doce. El primero es el dolor compatible: epigástrico, intenso, transfixiante e irradiado en faja al dorso.' },
          { t: 'Lipasa o amilasa > 3 veces', d: 'Sobre el límite superior normal',
            say: 'El segundo es la lipasa o la amilasa elevada a más de tres veces el límite superior normal. No basta con que esté alta: tiene que triplicar el valor normal.' },
          { t: 'Imagen compatible', d: 'TAC con contraste, ecografía o resonancia',
            say: 'Y el tercero es una imagen compatible con pancreatitis, ya sea tomografía con contraste, ecografía o resonancia.' },
        ] },
        { title: 'Lipasa vs amilasa', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Lipasa: la mejor', d: 'Más sensible, más específica, dura más días',
            say: 'Entre las dos enzimas, prefiere la lipasa: es más sensible, más específica, y se mantiene elevada por más días. Si el paciente consulta tarde, la amilasa puede haber bajado y la lipasa todavía estar alta.' },
          { t: 'Cifra ≠ gravedad', d: 'Una lipasa muy alta no es más grave',
            say: 'Y ojo con una trampa clásica: la magnitud de la elevación no se correlaciona con la gravedad. Una lipasa de cinco mil no significa una pancreatitis peor que una de seiscientos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: '¿Cuándo pedir un TAC?',
      nodes: [
        { id: 'cli', col: 0, row: 1, k: 'start', t: 'Dolor típico + lipasa > 3×', s: 'Ya cumple 2 de 3' },
        { id: 'dx', col: 1, row: 0, k: 'good', t: 'Diagnóstico hecho', s: 'No se necesita TAC' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Duda o mala evolución?', s: 'Dolor atípico o no mejora' },
        { id: 'tac', col: 2, row: 2, k: 'alert', t: 'TAC con contraste a las 72 h', s: 'Busca necrosis' },
      ],
      edges: [
        { from: 'cli', to: 'dx' }, { from: 'cli', to: 'q' }, { from: 'q', to: 'tac', label: 'sí' },
      ],
      steps: [
        { show: ['cli'], note: 'Lo habitual: los dos primeros criterios',
          say: 'Ahora, una pregunta práctica que el examen adora. Llega un paciente con dolor típico y lipasa sobre tres veces lo normal.' },
        { show: ['dx'], note: 'Con dos criterios, el TAC no agrega',
          say: 'Ese paciente ya cumple dos de tres. El diagnóstico está hecho y no necesitas un TAC para confirmarlo. Pedirlo de rutina en la urgencia no es la respuesta.' },
        { show: ['q', 'tac'], note: 'El TAC es para la duda o para la complicación',
          say: '¿Cuándo sí? En dos situaciones: si hay duda diagnóstica, o si el paciente evoluciona mal. Y en ese caso se pide un TAC con contraste a las setenta y dos horas, para evaluar la necrosis. El TAC no hace el diagnóstico de rutina: busca complicaciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Buscar siempre la causa',
      cards: [
        { title: 'Las dos grandes', tag: 'En Chile', kind: 'key', items: [
          { t: 'Litiasis biliar', d: 'Mujer · transaminasas y fosfatasas altas',
            say: 'Una vez hecho el diagnóstico, hay que buscar la causa. La primera es la litiasis biliar: un cálculo que obstruye la ampolla de Vater. Es más frecuente en mujeres, y el laboratorio te da la pista, con transaminasas y fosfatasas alcalinas elevadas.' },
          { t: 'Alcohol', d: 'Varón · consumo intenso y sostenido',
            say: 'La segunda es el alcohol: típicamente un hombre con un consumo intenso y sostenido.' },
        ] },
        { title: 'Otras causas', tag: 'Menos frecuentes', kind: 'normal', items: [
          { t: 'Triglicéridos > 1000 mg/dL', d: 'También hipercalcemia y fármacos',
            say: 'Después vienen las causas menos frecuentes. La hipertrigliceridemia, con triglicéridos sobre mil miligramos por decilitro, la hipercalcemia y los fármacos.' },
          { t: 'Post-CPRE, autoinmune, trauma', d: 'Y tumores',
            say: 'Y también la pancreatitis que aparece después de una colangiopancreatografía retrógrada endoscópica, la CPRE, la autoinmune, la traumática y la secundaria a tumores.' },
        ] },
        { title: 'Estudio a todos', tag: 'Primeras 24–48 h', kind: 'criteria', items: [
          { t: 'Ecografía abdominal', d: 'Buscar colelitiasis',
            say: 'Por eso, a todo paciente se le pide una ecografía abdominal en las primeras veinticuatro a cuarenta y ocho horas, buscando cálculos en la vesícula.' },
          { t: 'Perfil lipídico y calcemia', d: 'Las causas metabólicas',
            say: 'Y se agregan perfil lipídico y calcemia, para no perder las causas metabólicas. Encontrar la causa no es un trámite: define si hay que operar la vesícula.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'Atlanta revisada: leve, moderada o grave',
      cards: [
        { title: 'Leve', tag: 'La mayoría', kind: 'normal', items: [
          { t: 'Sin falla orgánica', d: 'Y sin complicaciones locales',
            say: 'Con el diagnóstico y la causa en la mano, falta definir la gravedad. La misma clasificación de Atlanta distingue tres categorías. La leve no tiene falla orgánica ni complicaciones locales.' },
        ] },
        { title: 'Moderadamente grave', tag: 'Transitoria', kind: 'key', items: [
          { t: 'Falla orgánica < 48 h', d: 'O una complicación local',
            say: 'La moderadamente grave tiene una falla orgánica transitoria, que dura menos de cuarenta y ocho horas, o una complicación local.' },
        ] },
        { title: 'Grave', tag: 'Persistente', kind: 'alert', items: [
          { t: 'Falla orgánica > 48 h', d: 'Persistente',
            say: 'Y la grave es la que tiene una falla orgánica persistente, más allá de cuarenta y ocho horas. Fíjate que la línea divisoria es el tiempo que dura la falla, no la cifra de la lipasa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: '¿Quién va a evolucionar mal?',
      cards: [
        { title: 'Scores predictivos', tag: 'Tres nombres', kind: 'criteria', items: [
          { t: 'BISAP: el más simple', d: 'BUN > 25 · conciencia · SIRS · > 60 años · derrame pleural',
            say: 'Para predecir quién va a evolucionar mal existen scores. El más simple es el BISAP, que junta cinco elementos: nitrógeno ureico sobre veinticinco, alteración de conciencia, síndrome de respuesta inflamatoria sistémica, edad sobre sesenta años y derrame pleural.' },
          { t: 'APACHE II y Ranson', d: 'UCI · Ranson requiere 48 h',
            say: 'El APACHE dos es el más usado en la unidad de cuidados intensivos. Y los criterios de Ranson, los más antiguos, tienen una desventaja: requieren cuarenta y ocho horas para completarse.' },
        ] },
        { title: 'Las señales de alarma', tag: 'A las 24 h', kind: 'alert', items: [
          { t: 'Hematocrito alto y en ascenso', d: 'Predice necrosis',
            say: 'Pero la señal de alarma más útil es simple. Un hematocrito elevado y que sigue subiendo a las veinticuatro horas predice necrosis y mala evolución. Y tiene toda la lógica del mecanismo: la sangre se está concentrando porque el volumen se va al tercer espacio.' },
          { t: 'BUN que sube', d: 'Mismo significado',
            say: 'Lo mismo vale para un nitrógeno ureico que sube. Ambos te dicen que el paciente sigue perdiendo volumen y que tu reposición no está alcanzando.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Manejo inicial',
      title: 'El pilar: volumen precoz y agresivo',
      nodes: [
        { id: 'ter', col: 0, row: 1, k: 'risk', t: 'Pérdida al tercer espacio', s: 'Hipovolemia oculta' },
        { id: 'rl', col: 1, row: 1, k: 'good', t: 'Ringer lactato', s: '5–10 mL/kg/h' },
        { id: 'diu', col: 2, row: 0, k: 'mech', t: 'Diuresis > 0,5 mL/kg/h', s: 'La meta principal' },
        { id: 'fc', col: 2, row: 2, k: 'mech', t: 'FC y hematocrito', s: 'Ajustar según respuesta' },
        { id: 'mor', col: 3, row: 1, k: 'good', t: 'Menos mortalidad', s: 'Lo que más impacta' },
      ],
      edges: [
        { from: 'ter', to: 'rl', label: 'reponer' }, { from: 'rl', to: 'diu' }, { from: 'rl', to: 'fc' },
        { from: 'diu', to: 'mor' }, { from: 'fc', to: 'mor' },
      ],
      steps: [
        { show: ['ter'], note: 'El problema de base es volumen',
          say: 'Vamos al manejo, y volvemos a la idea que guardamos al principio. El paciente está perdiendo litros hacia el retroperitoneo. El problema de base es de volumen.' },
        { show: ['rl'], note: 'Cristaloides, de preferencia Ringer lactato',
          say: 'Por eso la primera intervención es reponer con cristaloides, de preferencia Ringer lactato, a cinco a diez mililitros por kilo por hora, de forma precoz y agresiva.' },
        { show: ['diu', 'fc'], note: 'No se reponen litros a ciegas: se mide la respuesta',
          say: 'Pero no se repone a ciegas. Se ajusta según la respuesta: la diuresis, con una meta sobre medio mililitro por kilo por hora, la frecuencia cardíaca y el hematocrito, que es justamente el marcador que vimos en la gravedad.' },
        { show: ['mor'], note: 'Ninguna otra medida reduce tanto la mortalidad',
          say: 'Y esta es la frase para el examen: la reposición de volumen es la intervención que más impacta en la mortalidad de la pancreatitis aguda. Si una alternativa dice volumen agresivo con Ringer lactato, míralo con mucho cariño.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo inicial',
      title: 'Analgesia, nutrición y antibióticos',
      cards: [
        { title: 'Analgesia', tag: 'Potente', kind: 'pharma', items: [
          { t: 'Opioides', d: 'La meperidina ya no se prefiere',
            say: 'El segundo pilar es la analgesia, y tiene que ser potente: opioides. La meperidina, que antes se usaba mucho, ya no es la preferida.' },
        ] },
        { title: 'Nutrición', tag: 'Precoz', kind: 'key', items: [
          { t: 'Régimen cero inicial', d: 'Realimentar en 24–72 h, apenas cede el dolor',
            say: 'Después viene la nutrición. Se parte en régimen cero, pero por poco tiempo: la realimentación oral es precoz, dentro de las primeras veinticuatro a setenta y dos horas, apenas ceden el dolor y el íleo.' },
          { t: 'Incluso en la grave', d: 'Enteral por sonda nasoyeyunal · evitar parenteral',
            say: 'Y esto vale incluso en la pancreatitis grave. Si no tolera la vía oral, se alimenta por sonda nasoyeyunal. La nutrición parenteral se evita. Dejar al paciente en ayuno prolongado es una respuesta antigua e incorrecta.' },
        ] },
        { title: 'Antibióticos', tag: 'La trampa', kind: 'alert', items: [
          { t: 'NO profilácticos', d: 'Ni siquiera en la necrosis estéril',
            say: 'Y ahora la trampa más preguntada. No se indican antibióticos profilácticos en la pancreatitis no infectada, ni siquiera cuando hay necrosis, si esa necrosis es estéril. La fiebre y la leucocitosis de los primeros días son inflamación, no infección.' },
          { t: 'Solo si hay infección', d: 'Necrosis infectada demostrada o colangitis',
            say: 'Los antibióticos se reservan para dos escenarios: la necrosis infectada demostrada, o una colangitis concomitante.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pancreatitis biliar',
      title: '¿CPRE o colecistectomía?',
      nodes: [
        { id: 'pb', col: 0, row: 1, k: 'start', t: 'Pancreatitis biliar', s: 'Ecografía con colelitiasis' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Colangitis u obstrucción?', s: 'Persistente' },
        { id: 'cpre', col: 2, row: 0, k: 'alert', t: 'CPRE urgente < 24 h', s: 'Solo en este caso' },
        { id: 'col', col: 2, row: 2, k: 'good', t: 'Colecistectomía en el ingreso', s: 'Una vez resuelto el episodio' },
        { id: 'trap', col: 3, row: 2, k: 'trap', t: 'Alta y cirugía en semanas', s: 'Recurrencia' },
      ],
      edges: [
        { from: 'pb', to: 'q' }, { from: 'q', to: 'cpre', label: 'sí' }, { from: 'q', to: 'col', label: 'no' },
        { from: 'col', to: 'trap', label: 'no diferir' },
      ],
      steps: [
        { show: ['pb'], note: 'La causa biliar cambia la conducta',
          say: 'Cerremos el manejo con la pancreatitis biliar, porque encontrar el cálculo agrega dos decisiones sobre la vía biliar.' },
        { show: ['q'], note: 'La pregunta que decide',
          say: 'La pregunta es una sola: ¿hay colangitis asociada, u obstrucción biliar persistente? Recuerda la clase de vía biliar: la colangitis es la tríada de Charcot, dolor, ictericia y fiebre.' },
        { show: ['cpre'], note: 'La CPRE drena la vía biliar infectada',
          say: 'Si la hay, se hace una CPRE urgente, en menos de veinticuatro horas, para drenar la vía biliar. Pero solo en ese caso. Una pancreatitis biliar sin colangitis no necesita CPRE urgente.' },
        { show: ['col'], note: 'Pancreatitis biliar leve: operar en la misma hospitalización',
          say: 'Si no hay colangitis, lo que previene el siguiente episodio es sacar la vesícula. En la pancreatitis biliar leve, la colecistectomía se hace en el mismo ingreso, una vez resuelto el cuadro.' },
        { show: ['trap'], note: 'Diferir expone a un nuevo evento',
          say: 'Y la trampa es mandarlo de alta con la cirugía programada para varias semanas después. En ese intervalo recurren la pancreatitis, la colecistitis o la colangitis. La vesícula se saca antes del alta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dolor epigástrico agudo: la pancreatitis y sus imitadores',
      head: ['Diagnóstico', 'Clave que lo distingue', 'Examen que confirma'],
      rows: [
        { cells: ['Pancreatitis aguda', 'Dolor transfixiante al dorso + lipasa > 3× · íleo', 'Lipasa/amilasa; TAC a las 72 h si evoluciona mal'],
          say: 'Como el examen pregunta casi todo como diagnóstico diferencial, repasemos los imitadores. Pancreatitis: dolor transfixiante al dorso, íleo y lipasa sobre tres veces. Se confirma con las enzimas, y el TAC queda para la mala evolución.' },
        { cells: ['Coledocolitiasis', 'Dolor + ictericia, sin fiebre · lipasa normal o poco elevada', 'Ecografía (colédoco > 7 mm) → colangio-RM'],
          say: 'Coledocolitiasis: dolor con ictericia, sin fiebre, y una lipasa normal o apenas elevada. Ecografía con colédoco sobre siete milímetros, y luego colangiorresonancia.' },
        { cells: ['Colangitis aguda', 'Tríada de Charcot: dolor + ictericia + fiebre', 'Ecografía + hemocultivos → CPRE'],
          say: 'Colangitis: la tríada de Charcot. Ecografía, hemocultivos y CPRE.' },
        { cells: ['Úlcera perforada', 'Dolor brusco "en puñalada", abdomen en tabla', 'Radiografía de tórax de pie: neumoperitoneo'],
          say: 'Úlcera perforada: el dolor en puñalada y el abdomen en tabla. Radiografía de tórax de pie buscando neumoperitoneo, como vimos en la clase de úlcera.' },
        { cells: ['IAM de cara inferior', 'Factores de riesgo CV, síntomas vagales', 'ECG de 12 derivaciones + troponina'],
          say: 'Infarto de cara inferior: un paciente con factores de riesgo cardiovascular y síntomas vagales. Nunca te vayas a casa con un dolor epigástrico sin electrocardiograma y troponina.' },
        { cells: ['Isquemia mesentérica', 'Dolor desproporcionado al examen, FA, acidosis con lactato', 'Angio-TAC de abdomen'],
          say: 'Y la isquemia mesentérica: un dolor desproporcionado al examen físico, fibrilación auricular y acidosis con lactato elevado. Se confirma con angio TAC, y la veremos en detalle en su propia clase.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 50 años, bebedor intenso, con pancreatitis aguda de 20 horas de evolución (lipasa 12 veces el valor normal). Está taquicárdico, con diuresis escasa. El hematocrito subió de 44 % al ingreso a 49 %. Temperatura 37,8 °C, leucocitos 14.000/mm³.',
      question: '¿Cuál es la medida que más impacta en su pronóstico?',
      options: [
        { letter: 'A', text: 'Iniciar imipenem profiláctico' },
        { letter: 'B', text: 'Reposición agresiva con Ringer lactato ajustada a diuresis' },
        { letter: 'C', text: 'Solicitar TAC de abdomen con contraste de inmediato' },
        { letter: 'D', text: 'Iniciar nutrición parenteral total' },
        { letter: 'E', text: 'Realizar CPRE urgente' },
      ],
      correct: 'B',
      explanation: 'Hematocrito en ascenso, taquicardia y oliguria: está perdiendo volumen al tercer espacio y predice necrosis. La reposición precoz con Ringer lactato es lo que más reduce la mortalidad. No hay indicación de antibióticos profilácticos (la fiebre es inflamatoria), el TAC se pide a las 72 h, la parenteral se evita y la CPRE urgente es solo para la colangitis.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta años, bebedor intenso, con una pancreatitis aguda de veinte horas de evolución y una lipasa doce veces sobre lo normal. Está taquicárdico, orina poco, y el hematocrito subió de cuarenta y cuatro a cuarenta y nueve por ciento. Tiene treinta y siete ocho de temperatura y catorce mil leucocitos.',
        question: '¿Cuál es la medida que más impacta en su pronóstico?',
        options: 'Las alternativas: imipenem profiláctico, reposición agresiva con Ringer lactato, TAC con contraste de inmediato, nutrición parenteral, o CPRE urgente. Piénsalo.',
        answer: 'Es la B. El hematocrito que sube, la taquicardia y la diuresis escasa te dicen que está perdiendo volumen al tercer espacio, y eso predice necrosis. Lo que más reduce la mortalidad es el volumen con Ringer lactato, ajustado a diuresis. El distractor tentador es el imipenem, por la fiebre y los leucocitos, pero eso es inflamación: no hay antibióticos profilácticos. Y fíjate que la lipasa de doce veces no te dice nada de la gravedad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 121',
      stem: 'Un paciente de 45 años, sin antecedentes, consulta por dolor epigástrico intenso asociado a vómitos biliosos. Al examen físico se encuentra frecuencia cardiaca en 90 por minuto, presión arterial 140/90, escleras levemente ictéricas, abdomen blando, doloroso a palpación epigástrica, Blumberg negativo. Se solicitan exámenes que muestran GOT 100 U/L, GPT 110 U/L, bilirrubina total 2 mg/dL, fosfatasas alcalinas 350 U/L, lipasa 250 U/L. Ecografía abdominal que muestra vesícula de paredes delgadas, sin edema, con barro biliar visible y colédoco de 8 mm.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colangitis aguda' },
        { letter: 'B', text: 'Pancreatitis aguda' },
        { letter: 'C', text: 'Coledocolitiasis' },
        { letter: 'D', text: 'Colecistitis aguda' },
        { letter: 'E', text: 'Cólico biliar simple' },
      ],
      correct: 'B',
      explanation: 'La lipasa está sobre 180, tres veces el límite superior normal, junto con dolor típico: cumple criterios de pancreatitis aguda. Además tiene barro biliar y un colédoco levemente dilatado, sugerentes de coledocolitiasis, pero manda la pancreatitis por ser lo más grave. Sin fiebre ni compromiso hemodinámico no es colangitis, y la vesícula de paredes delgadas sin edema descarta la colecistitis.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de julio de dos mil trece. Hombre de cuarenta y cinco años, sin antecedentes, con dolor epigástrico intenso y vómitos biliosos. Signos vitales estables, escleras levemente ictéricas, abdomen blando y doloroso en el epigastrio, sin signos peritoneales. Las transaminasas están elevadas, la bilirrubina en dos, las fosfatasas alcalinas en trescientos cincuenta, y la lipasa en doscientos cincuenta. La ecografía muestra barro biliar y un colédoco de ocho milímetros.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: colangitis aguda, pancreatitis aguda, coledocolitiasis, colecistitis aguda, o cólico biliar simple. Piénsalo.',
        answer: 'La respuesta es la B, pancreatitis aguda. Haz la cuenta: tres veces el límite superior normal de la lipasa son ciento ochenta, y aquí está en doscientos cincuenta. Con dolor típico, ya cumple dos de tres criterios. El distractor tentador es la coledocolitiasis, porque hay barro biliar y colestasia, y probablemente coexiste. Pero cuando hay dos diagnósticos juntos, manda el más grave, el que define la conducta. Y sin fiebre, no es colangitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 66',
      stem: 'Un paciente de 55 años, sin antecedentes, consulta por dolor epigástrico intenso asociado a vómitos biliosos. Al examen físico destacan escleras ictéricas, sensibilidad a la palpación epigástrica. Se realizan exámenes donde destaca leucocitos 13.000/mm³, PCR 50 mg/dL, GOT 120 U/L, GPT 140 U/L, bilirrubina 3 mg/dL, fosfatasas alcalinas 400 U/L, lipasa 100 U/L. Ecografía abdominal con vía biliar extrahepática dilatada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colangitis aguda' },
        { letter: 'B', text: 'Pancreatitis aguda' },
        { letter: 'C', text: 'Colecistitis aguda' },
        { letter: 'D', text: 'Coledocolitiasis' },
        { letter: 'E', text: 'Hepatitis aguda' },
      ],
      correct: 'D',
      explanation: 'Tiene una coledocolitiasis: patrón colestásico con vía biliar dilatada. La lipasa está elevada pero no llega a tres veces el límite superior normal, así que no cumple criterio de pancreatitis. Los leucocitos y la PCR llaman la atención, pero la clínica no alcanza para colangitis, que exige la tríada de Charcot completa.',
      say: {
        stem: 'Una segunda pregunta real, también del EUNACOM de julio de dos mil trece, y que es el espejo de la anterior. Hombre de cincuenta y cinco años, sin antecedentes, con dolor epigástrico intenso y vómitos biliosos. Escleras ictéricas y dolor a la palpación epigástrica. Los leucocitos están en trece mil, la proteína C reactiva en cincuenta, las transaminasas y las fosfatasas alcalinas elevadas, la bilirrubina en tres, y la lipasa en cien. La ecografía muestra la vía biliar extrahepática dilatada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: colangitis aguda, pancreatitis aguda, colecistitis aguda, coledocolitiasis, o hepatitis aguda. Piénsalo.',
        answer: 'Es la D, coledocolitiasis. Fíjate en la trampa: el cuadro se parece al caso anterior, pero la lipasa está en cien, y tres veces el límite superior son ciento ochenta. No llega, así que no es pancreatitis. Los leucocitos y la proteína C reactiva altos tientan a pensar en colangitis, pero la clínica no alcanza para eso. La diferencia con la pregunta anterior está en un solo número: la lipasa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 55 años con pancreatitis aguda biliar de 36 horas de evolución. Está hemodinámicamente estable, afebril, con dolor en disminución y tolera líquidos. Ecografía: colelitiasis, vía biliar de calibre normal, sin cálculos en el colédoco.',
      question: '¿Cuál es la conducta más adecuada respecto de la vía biliar?',
      options: [
        { letter: 'A', text: 'CPRE de urgencia en las próximas 24 horas' },
        { letter: 'B', text: 'Colecistectomía laparoscópica durante el mismo ingreso, una vez resuelto el episodio' },
        { letter: 'C', text: 'Alta con colecistectomía programada en 6 a 8 semanas' },
        { letter: 'D', text: 'Colangiorresonancia y luego CPRE si es positiva' },
        { letter: 'E', text: 'Manejo médico indefinido, sin cirugía, por el riesgo quirúrgico' },
      ],
      correct: 'B',
      explanation: 'Pancreatitis biliar leve ya resuelta: colecistectomía laparoscópica en el mismo ingreso; diferirla se asocia a alta recurrencia de pancreatitis, colecistitis o colangitis. La CPRE urgente es solo para colangitis u obstrucción persistente, y la colangiorresonancia no aporta con baja probabilidad de coledocolitiasis.',
      say: {
        stem: 'Un caso representativo del banco EUNACOM, sobre la decisión que más se pregunta en la pancreatitis biliar. Paciente de cincuenta y cinco años con una pancreatitis aguda biliar de treinta y seis horas. Está estable, afebril, el dolor va bajando y tolera líquidos. La ecografía muestra colelitiasis, con una vía biliar de calibre normal y sin cálculos en el colédoco.',
        question: '¿Cuál es la conducta más adecuada respecto de la vía biliar?',
        options: 'Las opciones: CPRE urgente, colecistectomía en el mismo ingreso, alta con cirugía programada en seis a ocho semanas, colangiorresonancia y luego CPRE, o manejo médico sin cirugía. Piénsalo.',
        answer: 'Es la B. Pancreatitis biliar leve que ya se está resolviendo: la vesícula se saca en el mismo ingreso. El distractor tentador es la C, operar en seis a ocho semanas, pero en ese intervalo recurren la pancreatitis, la colecistitis o la colangitis. La CPRE urgente no corresponde, porque no hay colangitis ni obstrucción. Y con una vía biliar normal, la colangiorresonancia no agrega nada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: '2 de 3', kind: 'key', items: [
          { t: 'Dolor + lipasa > 3×: basta', d: 'Sin TAC; TAC a las 72 h si evoluciona mal',
            say: 'Cerremos con las reglas de oro. Dolor típico más lipasa sobre tres veces lo normal: el diagnóstico está hecho, sin TAC. El TAC es a las setenta y dos horas, si evoluciona mal.' },
          { t: 'Lipasa alta ≠ más grave', d: 'Hematocrito y BUN en ascenso sí predicen',
            say: 'La cifra de lipasa no mide gravedad. El hematocrito y el nitrógeno ureico que suben, sí.' },
        ] },
        { title: 'Manejo', tag: 'Primeras 48 h', kind: 'pharma', items: [
          { t: 'Ringer lactato agresivo', d: 'Ajustado a diuresis',
            say: 'El volumen agresivo con Ringer lactato es lo que más reduce la mortalidad.' },
          { t: 'Realimentación precoz', d: 'Sin antibióticos profilácticos',
            say: 'Realimentación precoz, incluso en la grave, y nada de antibióticos profilácticos.' },
        ] },
        { title: 'Pancreatitis biliar', tag: 'Vía biliar', kind: 'alert', items: [
          { t: 'CPRE urgente solo con colangitis', d: 'Colecistectomía en el mismo ingreso',
            say: 'Y en la biliar, CPRE urgente solo si hay colangitis, y colecistectomía antes del alta. Si te llevas una sola idea de hoy: la pancreatitis se trata con volumen, no con antibióticos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pancreatitis aguda: diagnóstico y primeras 48 horas',
    root: N('start', 'Dolor epigástrico en faja', 'Intenso, transfixiante, al dorso',
      'Partimos del paciente con dolor epigástrico intenso, transfixiante, irradiado en faja al dorso, con vómitos.',
      ['', N('q', '¿Cumple 2 de 3 criterios?', 'Dolor típico · lipasa > 3× · imagen',
        '¿Cumple dos de tres criterios? Dolor típico, lipasa o amilasa sobre tres veces lo normal, o imagen compatible. Con los dos primeros no se necesita TAC.',
        ['NO', N('do', 'Buscar los imitadores', 'Úlcera perforada · IAM inferior · isquemia',
          'Si no los cumple, piensa en los imitadores: úlcera perforada, infarto de cara inferior, isquemia mesentérica o patología biliar. Y si la duda persiste, el TAC ayuda.')],
        ['SÍ', N('alert', 'Volumen agresivo: Ringer lactato', 'Analgesia · realimentación precoz · sin ATB',
          'Es una pancreatitis aguda. Lo que más reduce la mortalidad es el volumen precoz con Ringer lactato, ajustado a diuresis. Además analgesia con opioides, realimentación precoz y nada de antibióticos profilácticos.',
          ['', N('do', 'Ecografía en 24–48 h', 'Litiasis · perfil lipídico · calcemia',
            'A todos se les pide ecografía abdominal en las primeras veinticuatro a cuarenta y ocho horas para buscar cálculos, más perfil lipídico y calcemia.',
            ['', N('q', '¿Colangitis asociada?', 'U obstrucción biliar persistente',
              'Si es biliar, ¿hay colangitis asociada u obstrucción biliar persistente?',
              ['SÍ', N('alert', 'CPRE urgente < 24 h', 'Solo en este escenario',
                'Solo en ese caso se hace CPRE urgente, en menos de veinticuatro horas, para drenar la vía biliar.')],
              ['NO', N('ok', 'Colecistectomía en el ingreso', 'Pancreatitis biliar leve',
                'Sin colangitis, en la pancreatitis biliar leve se hace la colecistectomía en el mismo ingreso, una vez resuelto el episodio, para evitar la recurrencia.')])])])])]),
  },
};
