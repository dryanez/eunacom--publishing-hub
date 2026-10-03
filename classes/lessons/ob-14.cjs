// Clase 3.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se confirma, cuándo se espera y cuándo la infección obliga a interrumpir ya',
      say: 'Bienvenido a rotura prematura de membranas, antibióticos de latencia y corioamnionitis. En la clase pasada viste que nunca se toca a ciegas cuando hay sangrado; hoy vas a ver que tampoco se toca a ciegas cuando lo que sale es líquido amniótico. Y el resto de la clase se ordena con una sola pregunta: la edad gestacional, y si hay o no infección. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Cómo confirmas que se rompió la bolsa',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Pérdida de líquido claro', s: 'Con olor a cloro' },
        { id: 'trap', col: 1, row: 0, k: 'trap', t: 'Tacto vaginal digital', s: 'Acorta la latencia y trae infección' },
        { id: 'esp', col: 1, row: 2, k: 'good', t: 'Especuloscopía estéril', s: 'Ver el líquido salir por el cuello' },
        { id: 'val', col: 2, row: 2, k: 'mech', t: 'Valsalva o Tarnier', s: 'Si no sale espontáneo' },
        { id: 'duda', col: 3, row: 2, k: 'q', t: '¿Sigue la duda?', s: 'Pide un examen de apoyo' },
        { id: 'test', col: 4, row: 2, k: 'good', t: 'PAMG-1 o helecho', s: 'Confirman con alta certeza' },
      ],
      edges: [
        { from: 'ini', to: 'trap', label: 'nunca' },
        { from: 'ini', to: 'esp' },
        { from: 'esp', to: 'val' },
        { from: 'val', to: 'duda' },
        { from: 'duda', to: 'test' },
      ],
      steps: [
        { show: ['ini'], note: 'El relato ya orienta mucho',
          say: 'La paciente te cuenta que perdió, de golpe o poco a poco, un líquido claro y tibio, con un olor característico a cloro. Ese relato ya orienta casi todo.' },
        { show: ['trap'], note: 'Arrastra bacterias hacia el cuello',
          say: 'Y aquí va la primera regla de la clase, tan importante como la del sangrado: nada de tacto vaginal digital si no hay trabajo de parto. Arrastra bacterias de la vagina hacia el cuello, acorta la latencia a la mitad, y multiplica el riesgo de infección.' },
        { show: ['esp'], note: 'Ves el líquido salir por el cuello',
          say: 'Lo que sí haces es una especuloscopía estéril, para ver el líquido saliendo directamente por el orificio cervical.' },
        { show: ['val'], note: 'Aumentas la presión para que salga',
          say: 'Si no sale espontáneo, pides a la paciente que puje, la maniobra de Valsalva, o empujas la presentación hacia arriba, la maniobra de Tarnier.' },
        { show: ['duda'], note: 'La mayoría de las veces basta con esto',
          say: 'Si con eso ya viste el líquido, no necesitas nada más. Pero si la duda persiste, recién ahí pides un examen de apoyo.' },
        { show: ['test'], note: 'La microglobulina es el de mayor rendimiento',
          say: 'El test de la microglobulina placentaria, y el de la cristalización en hoja de helecho, son los que mejor confirman el diagnóstico cuando la clínica no basta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo',
      title: 'La edad gestacional decide casi todo',
      cards: [
        { title: '34 semanas o más', tag: 'Se interrumpe ya', kind: 'key', items: [
          { t: 'Inducir el parto de inmediato', d: 'El riesgo de esperar supera al de nacer',
            say: 'A partir de las treinta y cuatro semanas, el riesgo de esperar, con corioamnionitis y compresión de cordón, ya supera al riesgo de nacer un poco antes. Se induce el parto.' },
          { t: 'Profilaxis si el estreptococo es positivo', d: 'O si pasan más de 12 a 18 horas',
            say: 'Y das profilaxis con penicilina o ampicilina si la paciente tiene el estreptococo del grupo B positivo, o si la latencia se alarga más de doce a dieciocho horas.' },
        ] },
        { title: 'Entre 24 y 33 más 6', tag: 'Conducta expectante', kind: 'pharma', items: [
          { t: 'Hospitalizar en ARO', d: 'Y vigilar signos de infección',
            say: 'Antes de las treinta y cuatro semanas, la conducta cambia por completo: hospitalizas en una unidad de alto riesgo obstétrico, y vigilas de cerca los signos de infección.' },
          { t: 'Ampicilina más eritromicina, 7 días', d: 'Prolonga la latencia y baja la sepsis',
            say: 'Das antibióticos de latencia, ampicilina más eritromicina, que no curan nada todavía, pero prolongan el tiempo libre de parto y bajan la sepsis neonatal.' },
          { t: 'Betametasona para el pulmón fetal', d: 'Y sulfato de magnesio si es menor a 32',
            say: 'Sumas betametasona para madurar el pulmón fetal, y si la gestación es menor a treinta y dos semanas, sulfato de magnesio para proteger el cerebro del feto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Corioamnionitis',
      title: 'Cuando la infección manda por encima de todo',
      nodes: [
        { id: 'fiebre', col: 0, row: 1, k: 'start', t: 'Fiebre materna igual o mayor a 38', s: 'Criterio mayor obligatorio' },
        { id: 'menores', col: 1, row: 1, k: 'q', t: '¿2 o más criterios menores?', s: 'Taquicardia, dolor, fetidez, leucocitosis' },
        { id: 'chorio', col: 2, row: 0, k: 'risk', t: 'Corioamnionitis clínica', s: 'Contraindica tocolisis y corticoides' },
        { id: 'interr', col: 3, row: 0, k: 'alert', t: 'Interrumpir ya', s: 'Sin esperar nada' },
        { id: 'atb', col: 3, row: 2, k: 'good', t: 'Ampicilina más gentamicina', s: 'De inmediato, endovenoso' },
      ],
      edges: [
        { from: 'fiebre', to: 'menores' },
        { from: 'menores', to: 'chorio', label: 'sí' },
        { from: 'chorio', to: 'interr' },
        { from: 'chorio', to: 'atb' },
      ],
      steps: [
        { show: ['fiebre'], note: 'El criterio obligatorio es la fiebre',
          say: 'La corioamnionitis se define con los criterios de Gibbs, y el primero es obligatorio: fiebre materna de treinta y ocho grados o más.' },
        { show: ['menores'], note: 'Con dos ya se confirma',
          say: 'A esa fiebre le sumas al menos dos de estos: taquicardia materna, taquicardia fetal, dolor a la palpación del útero, líquido de mal olor, o leucocitosis.' },
        { show: ['chorio'], note: 'La infección invalida el manejo conservador',
          say: 'Con eso confirmas una corioamnionitis clínica, y esto cambia todo lo que veíamos antes: la infección invalida por completo la conducta expectante. Se acabaron los corticoides, se acabó la tocolisis, y no importa si la paciente tiene veintiséis semanas.' },
        { show: ['interr'], note: 'No hay edad gestacional que valga',
          say: 'La conducta es interrumpir el embarazo de inmediato, por la vía más expedita, sin esperar ningún resultado adicional.' },
        { show: ['atb'], note: 'Y si hay cesárea, se suma clindamicina',
          say: 'Y en paralelo, antibióticos de amplio espectro por vía endovenosa, ampicilina más gentamicina. Si se termina haciendo una cesárea, se agrega clindamicina para cubrir los anaerobios.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esquemas',
      title: 'Los fármacos, con sus tiempos exactos',
      cards: [
        { title: 'Antibióticos de latencia', tag: 'Antes de las 34 semanas', kind: 'pharma', items: [
          { t: 'Ampicilina y eritromicina, 48 horas EV', d: 'Después, la misma combinación oral',
            say: 'El esquema de latencia parte con ampicilina y eritromicina endovenosas por cuarenta y ocho horas, y sigue con las mismas dos por vía oral hasta completar siete días en total.' },
        ] },
        { title: 'Corticoides', tag: 'Betametasona o dexametasona', kind: 'pharma', items: [
          { t: 'Betametasona, 2 dosis cada 24 horas', d: 'O dexametasona, 4 dosis cada 12',
            say: 'Para el pulmón fetal, betametasona en dos dosis, una cada veinticuatro horas, o su alternativa, dexametasona, en cuatro dosis cada doce horas.' },
        ] },
        { title: 'Neuroprotección y perfil séptico', tag: 'Detalles que se preguntan', kind: 'criteria', items: [
          { t: 'Sulfato de magnesio: bolo y luego infusión', d: 'Antes de las 32 semanas',
            say: 'El sulfato de magnesio se da en un bolo inicial, seguido de una infusión continua, siempre que la gestación sea menor a treinta y dos semanas y el parto esté por ocurrir.' },
          { t: 'Corioamnionitis: suma clindamicina si hay cesárea', d: 'Cubre gérmenes que la ampicilina no cubre',
            say: 'Y si la corioamnionitis termina en cesárea, se agrega clindamicina al esquema de ampicilina y gentamicina, para cubrir los gérmenes anaerobios que esa combinación no alcanza.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la edad gestacional y la infección en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué hacer según el escenario',
      head: ['Escenario', 'Conducta', 'Error frecuente'],
      rows: [
        { cells: ['RPM de 34 semanas o más', 'Inducir el parto ya', 'Esperar el inicio espontáneo'],
          say: 'Repasemos en una tabla. RPM de treinta y cuatro semanas o más: se induce el parto. El error es esperar a que empiece solo.' },
        { cells: ['RPM entre 24 y 33 más 6', 'Antibióticos, corticoides, vigilancia', 'Interrumpir sin necesidad'],
          say: 'RPM entre veinticuatro y treinta y tres más seis: antibióticos de latencia, corticoides y vigilancia. El error es interrumpir antes de tiempo, sin que haga falta.' },
        { cells: ['Sospecha de RPM sin claridad', 'Especuloscopía y PAMG-1', 'Tacto vaginal digital'],
          say: 'Ante la duda diagnóstica: especuloscopía y el test de microglobulina. El error clásico es meter el dedo para confirmar.' },
        { cells: ['Corioamnionitis clínica', 'Interrumpir ya, antibióticos EV', 'Dar corticoides o tocolíticos'],
          say: 'Con corioamnionitis clínica, se interrumpe ya, con antibióticos endovenosos. El error grave es seguir dando corticoides o tocolíticos, pensando solo en la prematurez.' },
        { cells: ['Menor a 32 semanas, parto inminente', 'Sulfato de magnesio', 'Olvidar la neuroprotección'],
          say: 'Y si el parto es inminente antes de las treinta y dos semanas, no olvides el sulfato de magnesio, porque protege el cerebro del feto.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 30 semanas, hospitalizada hace 3 días por rotura prematura de membranas en manejo conservador, presenta fiebre de 38,6 grados, calofríos y taquicardia materna. El útero está hipertónico y muy sensible al tacto. Por la especuloscopía sale líquido amniótico purulento y de mal olor. El monitor fetal muestra taquicardia fetal sostenida, y el hemograma muestra leucocitosis con desviación a la izquierda.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar antipiréticos y tocolíticos, y esperar a las 34 semanas' },
        { letter: 'B', text: 'Iniciar ampicilina más gentamicina endovenosa e interrumpir el embarazo ya' },
        { letter: 'C', text: 'Dar un segundo ciclo de betametasona y esperar 48 horas' },
        { letter: 'D', text: 'Realizar una amniocentesis y esperar el resultado del cultivo' },
        { letter: 'E', text: 'Indicar sulfato de magnesio y mantener la conducta expectante' },
      ],
      correct: 'B',
      explanation: 'Fiebre más taquicardia materna y fetal, útero doloroso, líquido purulento y leucocitosis: cumple criterios de Gibbs para corioamnionitis clínica. Esto contraindica cualquier conducta expectante, tocolisis o corticoides. La conducta es antibióticos endovenosos de amplio espectro e interrupción inmediata.',
      say: {
        stem: 'Vamos con un caso. Primigesta de treinta semanas, hospitalizada hace tres días por rotura prematura de membranas, en manejo conservador. Ahora tiene fiebre de treinta y ocho y medio, calofríos y taquicardia materna. El útero está hipertónico y muy sensible al tacto, sale líquido amniótico purulento y de mal olor, el feto está taquicárdico, y el hemograma muestra leucocitosis con desviación a la izquierda.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antipiréticos y tocolíticos esperando a las treinta y cuatro semanas, ampicilina más gentamicina e interrumpir ya, un segundo ciclo de betametasona, una amniocentesis con espera del cultivo, o sulfato de magnesio con conducta expectante. Piénsalo.',
        answer: 'Es la B. Fiebre, taquicardia materna y fetal, dolor uterino, líquido purulento y leucocitosis: cumple de sobra los criterios de Gibbs. Con una corioamnionitis clínica confirmada, no hay conducta expectante que valga, ni corticoides, ni tocolíticos. Se dan antibióticos endovenosos de amplio espectro y se interrumpe el embarazo de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 16',
      stem: 'Una paciente de 34 años, multípara, embarazada de 36 semanas, presenta pérdida de líquido amniótico hace una hora, confirmándose rotura de membranas con la prueba de microglobulina placentaria. La ecografía obstétrica muestra disminución del líquido amniótico, con presentación cefálica y bienestar fetal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar cesárea' },
        { letter: 'B', text: 'Administrar corticoides' },
        { letter: 'C', text: 'Inducir el parto' },
        { letter: 'D', text: 'Esperar 48 horas para el inicio espontáneo del trabajo de parto' },
        { letter: 'E', text: 'Administrar antibióticos' },
      ],
      correct: 'C',
      explanation: 'RPM de 34 semanas o más se induce de inmediato si no hay contraindicación de parto vaginal. Los corticoides y los antibióticos de latencia son para las gestaciones menores a 34 semanas.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente multípara, con un embarazo de treinta y seis semanas, con pérdida de líquido hace una hora, confirmada con la prueba de microglobulina placentaria. La ecografía muestra el líquido disminuido, con el feto en cefálica y bienestar conservado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cesárea, dar corticoides, inducir el parto, esperar cuarenta y ocho horas, o dar antibióticos. Piénsalo.',
        answer: 'Es la C, inducir el parto. Con treinta y seis semanas ya cumplidas, la rotura de membranas se interrumpe de inmediato si no hay ninguna contraindicación para el parto vaginal. Los corticoides y los antibióticos de latencia son para las gestaciones bajo las treinta y cuatro semanas, y aquí ya la pasó.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 105',
      stem: 'Una paciente de 28 años, cursa un embarazo de 32 semanas por amenorrea, sin controles obstétricos previos, y consulta por pérdida de líquido amniótico. Al examen físico presenta temperatura de 38,5 grados y frecuencia cardíaca de 110 por minuto. La especuloscopía muestra salida de líquido por el orificio cervical. El monitoreo fetal muestra una frecuencia cardíaca fetal de 180 latidos por minuto. La ecografía obstétrica muestra oligoamnios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Interrumpir el embarazo' },
        { letter: 'B', text: 'Administrar corticoides y antibióticos, manteniendo una conducta expectante' },
        { letter: 'C', text: 'Solicitar Doppler materno-fetal' },
        { letter: 'D', text: 'Realizar amniocentesis' },
        { letter: 'E', text: 'Realizar amnioinfusión con surfactante intraamniótico' },
      ],
      correct: 'A',
      explanation: 'Fiebre materna con taquicardia materna y fetal, en una RPM de pretérmino, cumple criterios de corioamnionitis clínica. Esto gana por encima de la edad gestacional: se interrumpe el embarazo, sin importar que sea menor a 34 semanas.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de veintiocho años, con un embarazo de treinta y dos semanas, sin controles previos, con pérdida de líquido amniótico. Tiene fiebre de treinta y ocho y medio, y una frecuencia cardíaca de ciento diez. La especuloscopía confirma la salida de líquido, el feto está taquicárdico a ciento ochenta, y la ecografía muestra oligoamnios.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: interrumpir el embarazo, dar corticoides y antibióticos con conducta expectante, pedir un doppler materno fetal, hacer una amniocentesis, o hacer una amnioinfusión con surfactante. Piénsalo.',
        answer: 'Es la A. Fiebre materna con taquicardia materna y fetal en una rotura de membranas de pretérmino ya cumple los criterios de corioamnionitis clínica. Y la corioamnionitis gana por encima de la edad gestacional: se interrumpe, aunque tenga solo treinta y dos semanas. Dar corticoides y esperar sería un error grave frente a una infección activa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Paciente de 30 semanas de gestación, primigesta, consulta por pérdida repentina de líquido transparente hace 4 horas, con olor a lavandina, sin dolor ni contracciones. Al examen: afebril, presión y frecuencia cardíaca normales, útero relajado. La especuloscopía estéril confirma la salida de líquido claro al toser. Los latidos fetales son reactivos, y no hay dinámica uterina.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar en ARO, dar betametasona y antibióticos de latencia' },
        { letter: 'B', text: 'Indicar reposo domiciliario y control en una semana' },
        { letter: 'C', text: 'Inducir el parto con misoprostol de inmediato' },
        { letter: 'D', text: 'Realizar cesárea dentro de las próximas horas' },
        { letter: 'E', text: 'Iniciar tocolisis de mantención por dos semanas' },
      ],
      correct: 'A',
      explanation: 'RPM confirmada a las 30 semanas, sin signos de infección ni trabajo de parto: manejo conservador en ARO, con betametasona para maduración pulmonar y antibióticos de latencia para prolongar el tiempo libre de parto.',
      say: {
        stem: 'Una más del banco. Primigesta de treinta semanas, con pérdida repentina de líquido claro hace cuatro horas, con olor a lavandina, sin dolor ni contracciones. Está afebril, sus signos vitales son normales, y la especuloscopía confirma la salida de líquido al toser. El feto está reactivo, y no hay dinámica uterina.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar en ARO con betametasona y antibióticos de latencia, reposo domiciliario, inducir con misoprostol de inmediato, cesárea en las próximas horas, o tocolisis de mantención por dos semanas. Piénsalo.',
        answer: 'Es la A. Es una RPM de pretérmino, sin fiebre ni signos de infección: manejo conservador, hospitalizada en una unidad de alto riesgo obstétrico, con betametasona para el pulmón fetal y antibióticos de latencia para ganar tiempo. El reposo en casa es peligroso, y la tocolisis de mantención no está indicada más allá de las cuarenta y ocho horas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Nunca a ciegas', kind: 'key', items: [
          { t: 'Especuloscopía, nunca tacto digital', d: 'Confirmas con PAMG-1 si hay duda',
            say: 'Cerremos con las reglas de oro. El diagnóstico se confirma con especuloscopía, nunca con un tacto vaginal digital.' },
        ] },
        { title: 'Manejo', tag: 'La edad gestacional manda', kind: 'pharma', items: [
          { t: '34 semanas o más: se induce', d: 'Antes: corticoides y antibióticos de latencia',
            say: 'Con treinta y cuatro semanas o más, se induce el parto. Antes de eso, corticoides, antibióticos de latencia, y sulfato de magnesio si es menor a treinta y dos.' },
        ] },
        { title: 'Corioamnionitis', tag: 'Gana siempre', kind: 'alert', items: [
          { t: 'Fiebre más dos criterios de Gibbs', d: 'Interrumpe ya, sin importar la edad',
            say: 'Y si aparece fiebre con dos criterios de Gibbs, la corioamnionitis gana por encima de todo: se interrumpe de inmediato, con antibióticos endovenosos, sin importar la edad gestacional. Si te llevas una sola idea de hoy: la edad gestacional decide, salvo que haya infección, porque ahí la infección decide todo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Rotura prematura de membranas: edad gestacional e infección',
    root: N('start', 'RPM confirmada por especuloscopía', 'Nunca con tacto vaginal digital',
      'Con la rotura ya confirmada, dos preguntas ordenan todo: qué edad gestacional tiene, y si hay o no signos de infección.',
      ['¿Hay fiebre y 2 criterios de Gibbs?', N('alert', 'Corioamnionitis clínica', 'Interrumpir ya + ampicilina y gentamicina',
        'Si cumple los criterios de Gibbs, es una corioamnionitis clínica. Esto invalida cualquier conducta expectante: se interrumpe de inmediato, con antibióticos endovenosos, sin importar la edad gestacional.')],
      ['34 semanas o más, sin infección', N('ok', 'Inducir el parto', 'Profilaxis SGB si corresponde',
        'Sin infección y con treinta y cuatro semanas o más, el riesgo de esperar ya supera al de nacer. Se induce el parto, con profilaxis para el estreptococo si el cultivo es positivo o desconocido.')],
      ['Menor a 34 semanas, sin infección', N('do', 'Manejo expectante en ARO', 'Corticoides + antibióticos de latencia',
        'Bajo las treinta y cuatro semanas y sin infección, hospitalizas en ARO, das corticoides para el pulmón fetal y antibióticos de latencia. Si es menor a treinta y dos semanas, sumas sulfato de magnesio para proteger el cerebro fetal.')]),
  },
};
