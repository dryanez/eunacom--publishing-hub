// Clase 5.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-19',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fosa ilíaca derecha vs izquierda: qué se opera, qué se trata con antibióticos y qué no se endoscopia',
      say: 'Bienvenidos. Abrimos el bloque de abdomen agudo con dos cuadros casi simétricos: la apendicitis, a la derecha, y la diverticulitis, a la izquierda. El examen los pregunta por su clasificación y por su conducta, y casi siempre con una trampa escondida. En la clase de pancreatitis el dolor estaba en el epigastrio; hoy bajamos a las fosas ilíacas, y en la próxima clase veremos el abdomen agudo de origen vascular. Vamos a ver cuál es la trampa de cada uno.',
    },

    {
      type: 'points',
      kicker: 'Principios',
      title: 'Abdomen agudo: un diagnóstico clínico',
      cards: [
        { title: 'Qué es', tag: 'Clínico', kind: 'key', items: [
          { t: 'Diagnóstico clínico', d: 'Se hace con la historia y el examen',
            say: 'Partamos por lo general. El abdomen agudo es un diagnóstico clínico: se hace con la historia y el examen físico, no con un examen de laboratorio.' },
          { t: 'No todos son quirúrgicos', d: 'Ni todos llevan antibióticos',
            say: 'Y no es sinónimo de pabellón. No todos los abdómenes agudos son quirúrgicos, ni todos llevan antibióticos. Justamente en esta clase vas a ver cuadros que se operan de urgencia, otros que se tratan primero con antibióticos, y otros que se drenan.' },
        ] },
        { title: 'Signos peritoneales', tag: 'Irritación del peritoneo', kind: 'alert', items: [
          { t: 'Resistencia muscular y Blumberg', d: 'Dolor al descomprimir',
            say: '¿Qué te dice que el peritoneo está comprometido? La resistencia muscular, y el signo de Blumberg: el dolor que aparece al soltar bruscamente la mano que comprimía.' },
          { t: 'Abdomen en tabla, sin ruidos', d: 'Peritonitis difusa',
            say: 'Y en el extremo, el abdomen en tabla y la ausencia de ruidos intestinales. Esos hallazgos hablan de una peritonitis difusa, y los vamos a usar para separar la apendicitis perforada del plastrón.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La primera regla',
      title: 'Mujer en edad fértil con dolor abdominal bajo',
      nodes: [
        { id: 'muj', col: 0, row: 1, k: 'start', t: 'Mujer en edad fértil', s: 'Dolor abdominal bajo' },
        { id: 'test', col: 1, row: 1, k: 'q', t: 'Test de embarazo', s: 'Y evaluación ginecológica' },
        { id: 'ect', col: 2, row: 0, k: 'alert', t: 'Embarazo ectópico', s: 'El que no se puede perder' },
        { id: 'gin', col: 2, row: 2, k: 'effect', t: 'PIP o quiste complicado', s: 'Otras causas ginecológicas' },
        { id: 'apx', col: 3, row: 1, k: 'good', t: 'Recién ahí: apendicitis', s: 'Confirmar y operar' },
      ],
      edges: [
        { from: 'muj', to: 'test', label: 'primero' }, { from: 'test', to: 'ect' }, { from: 'test', to: 'gin' },
        { from: 'test', to: 'apx', label: 'descartado' },
      ],
      steps: [
        { show: ['muj'], note: 'La regla que más se pregunta',
          say: 'Antes de entrar a la apendicitis, la regla que más se pregunta en este tema. Una mujer en edad fértil que consulta por dolor abdominal bajo.' },
        { show: ['test'], note: 'Antes que cualquier otra conducta',
          say: '¿Qué haces primero? Un test de embarazo y una evaluación ginecológica. Antes de la ecografía abdominal, antes del TAC y antes de pensar en el pabellón.' },
        { show: ['ect'], note: 'Operar sin descartarlo puede pasar por alto un ectópico roto',
          say: '¿Por qué? Porque el cuadro que no te puedes perder es el embarazo ectópico. Si llevas a pabellón a esa paciente pensando en el apéndice, puedes pasar por alto un ectópico roto.' },
        { show: ['gin'], note: 'Proceso inflamatorio pelviano, quiste ovárico',
          say: 'Y la evaluación ginecológica busca las otras causas que imitan una apendicitis: el proceso inflamatorio pelviano y el quiste ovárico complicado.' },
        { show: ['apx'], note: 'El orden importa: primero lo ginecológico',
          say: 'Solo después de descartar todo eso confirmas la apendicitis y la operas. El orden es la pregunta: si una alternativa dice test de embarazo, y la paciente es una mujer joven, suele ser la correcta.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Apendicitis aguda',
      title: 'El dolor que migra',
      nodes: [
        { id: 'umb', col: 0, row: 1, k: 'cause', t: 'Dolor periumbilical', s: 'Mal localizado' },
        { id: 'fid', col: 1, row: 1, k: 'mech', t: 'Migra a la fosa ilíaca derecha', s: 'En 12–24 horas' },
        { id: 'aco', col: 1, row: 0, k: 'effect', t: 'Anorexia, náuseas, febrícula', s: 'Los acompañantes' },
        { id: 'mcb', col: 2, row: 1, k: 'effect', t: 'McBurney y Rovsing', s: 'Dolor localizado en la FID' },
        { id: 'pso', col: 3, row: 0, k: 'effect', t: 'Signo del psoas', s: 'Apéndice retrocecal' },
        { id: 'obt', col: 3, row: 2, k: 'effect', t: 'Signo del obturador', s: 'Apéndice pélvico' },
      ],
      edges: [
        { from: 'umb', to: 'fid' }, { from: 'umb', to: 'aco' }, { from: 'fid', to: 'mcb' },
        { from: 'mcb', to: 'pso', label: 'si es retrocecal' }, { from: 'mcb', to: 'obt', label: 'si es pélvico' },
      ],
      steps: [
        { show: ['umb'], note: 'Empieza en el centro',
          say: 'Vamos a la apendicitis. La historia clásica empieza con un dolor periumbilical, mal localizado, en la mitad del abdomen.' },
        { show: ['fid'], note: 'La migración es la clave del diagnóstico',
          say: 'Y en las siguientes doce a veinticuatro horas, ese dolor migra a la fosa ilíaca derecha. Esa migración, del ombligo a la fosa ilíaca derecha, es lo que más orienta el diagnóstico.' },
        { show: ['aco'], note: 'La anorexia: búscala siempre',
          say: 'Se acompaña de anorexia, náuseas y febrícula. La anorexia es un acompañante muy constante, así que búscala siempre en la historia.' },
        { show: ['mcb'], note: 'Rovsing: dolor en FID al comprimir la izquierda',
          say: 'Al examen buscas el punto de McBurney, doloroso en la fosa ilíaca derecha, y el signo de Rovsing, en que al comprimir el lado izquierdo el dolor aparece en el derecho.' },
        { show: ['pso', 'obt'], note: 'Cada signo corresponde a una posición del apéndice',
          say: 'Y hay dos signos que te dicen dónde está el apéndice. El signo del psoas se asocia al apéndice retrocecal, y el del obturador, al apéndice pélvico. Esa correspondencia se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Apendicitis aguda',
      title: 'Diagnóstico y tratamiento',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'criteria', items: [
          { t: 'Clínico', d: 'Apoyado por leucocitosis y PCR',
            say: 'El diagnóstico de apendicitis es clínico. La leucocitosis y la proteína C reactiva lo apoyan, pero no lo hacen por sí solas.' },
          { t: 'Ecografía: niños y mujeres fértiles', d: 'Primera imagen en estos grupos',
            say: 'La ecografía se usa en dos grupos: los niños y las mujeres en edad fértil. Y fíjate que conecta con la regla anterior: en la mujer, la ecografía mira también la pelvis.' },
          { t: 'TAC: duda en el adulto', d: 'No es de rutina',
            say: 'El TAC queda para el adulto con duda diagnóstica. Si la clínica es clara, no lo necesitas: un joven con dolor que migró a la fosa ilíaca derecha, anorexia y Blumberg positivo va a pabellón sin pasar por el escáner.' },
        ] },
        { title: 'Tratamiento', tag: 'Pabellón', kind: 'pharma', items: [
          { t: 'Apendicectomía laparoscópica', d: 'La apendicitis se opera',
            say: 'El tratamiento de la apendicitis aguda es la apendicectomía, por vía laparoscópica.' },
          { t: 'Perforada: urgencia', d: 'Cirugía + lavado + antibióticos',
            say: 'Y si el apéndice se perforó y hay una peritonitis, se opera de urgencia, con lavado de la cavidad y antibióticos. Quédate con esa palabra, perforada, porque la vamos a contrastar con el plastrón.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Plastrón vs apendicitis perforada',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'start', t: 'Apendicitis de varios días', s: '¿Qué pasó con el proceso?' },
        { id: 'pla', col: 1, row: 0, k: 'mech', t: 'Plastrón apendicular', s: 'Masa palpable en la FID' },
        { id: 'epi', col: 2, row: 0, k: 'good', t: 'Antibióticos primero', s: 'Ceftriaxona + metronidazol' },
        { id: 'dif', col: 3, row: 0, k: 'good', t: 'Apendicectomía diferida', s: 'A las 6–8 semanas' },
        { id: 'per', col: 1, row: 2, k: 'risk', t: 'Apendicitis perforada', s: 'Peritonitis difusa' },
        { id: 'cir', col: 2, row: 2, k: 'alert', t: 'Cirugía inmediata', s: 'Lavado + antibióticos' },
      ],
      edges: [
        { from: 'dia', to: 'pla', label: 'contenido' }, { from: 'pla', to: 'epi' }, { from: 'epi', to: 'dif' },
        { from: 'dia', to: 'per', label: 'libre' }, { from: 'per', to: 'cir' },
      ],
      steps: [
        { show: ['dia'], note: 'El tiempo de evolución cambia el cuadro',
          say: 'Ahora, ¿qué pasa si el paciente consulta tarde, con varios días de evolución? El apéndice inflamado puede terminar de dos maneras muy distintas.' },
        { show: ['pla'], note: 'El epiplón tapó el apéndice',
          say: 'La primera es el plastrón apendicular. El epiplón envuelve y tapa el apéndice inflamado, y contiene el proceso. Al examen palpas una masa en la fosa ilíaca derecha.' },
        { show: ['epi'], note: 'No se opera de entrada',
          say: 'Y aquí viene lo contraintuitivo: el plastrón no se opera de entrada. Primero se tratan con antibióticos, ceftriaxona más metronidazol, por varias semanas. El cuerpo ya contuvo el proceso, y el tratamiento respeta esa contención.' },
        { show: ['dif'], note: 'Cirugía de intervalo',
          say: 'La apendicectomía se hace después, en forma diferida o de intervalo, a las seis a ocho semanas.' },
        { show: ['per'], note: 'Aquí nada contuvo la infección',
          say: 'La segunda manera es la apendicitis perforada con peritonitis difusa. Aquí nada contuvo la infección: el paciente tiene signos peritoneales en todo el abdomen.' },
        { show: ['cir'], note: 'Masa localizada: esperar. Peritonitis difusa: operar',
          say: 'Y esta sí va a cirugía inmediata, con lavado y antibióticos. En resumen: masa localizada, antibióticos y cirugía diferida; peritonitis difusa, pabellón ahora. No son lo mismo, y el examen las pone juntas para ver si las confundes.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diverticulitis aguda',
      title: 'La apendicitis del lado izquierdo',
      cards: [
        { title: 'Clínica', tag: 'Mayor de 50', kind: 'key', items: [
          { t: 'Dolor en fosa ilíaca izquierda', d: 'Con fiebre y cambio del hábito',
            say: 'Crucemos al otro lado. La diverticulitis aguda es como una apendicitis del lado izquierdo: dolor en la fosa ilíaca izquierda, fiebre y un cambio del hábito intestinal.' },
          { t: 'Mayor de 50 años', d: 'El paciente es distinto',
            say: 'Pero el paciente es distinto: no es el joven de la apendicitis, sino un adulto mayor de cincuenta años.' },
        ] },
        { title: 'Diagnóstico', tag: 'TAC', kind: 'criteria', items: [
          { t: 'TAC de abdomen y pelvis', d: 'Con contraste',
            say: 'Y a diferencia de la apendicitis, aquí el diagnóstico se hace con imagen: TAC de abdomen y pelvis con contraste.' },
          { t: 'Sigmoides engrosado', d: 'Estrías de la grasa · absceso',
            say: 'El TAC muestra el sigmoides engrosado, estrías en la grasa que lo rodea, y además te dice si hay un absceso o una peritonitis. Eso es lo que va a decidir el tratamiento.' },
        ] },
        { title: 'Colonoscopía', tag: 'La trampa', kind: 'alert', items: [
          { t: 'Contraindicada en el agudo', d: 'Riesgo de perforación',
            say: 'Y la trampa clásica: la colonoscopía está contraindicada en el episodio agudo. Meter aire a presión en un colon inflamado puede perforarlo.' },
          { t: 'A las 6–8 semanas', d: 'Para descartar cáncer',
            say: 'Se hace después, a las seis a ocho semanas, para descartar un cáncer de colon. Como vimos en la clase de cáncer colorrectal, en un mayor de cincuenta ese diagnóstico no se puede dejar pasar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diverticulitis aguda',
      title: 'Hinchey: absceso o peritonitis',
      nodes: [
        { id: 'tac', col: 0, row: 1, k: 'start', t: 'TAC con diverticulitis', s: '¿Qué complica?' },
        { id: 'abs', col: 1, row: 0, k: 'mech', t: 'Hinchey I–II', s: 'Absceso' },
        { id: 'atb', col: 2, row: 0, k: 'good', t: 'Antibióticos ± drenaje', s: 'Percutáneo guiado por TAC' },
        { id: 'per', col: 1, row: 2, k: 'risk', t: 'Hinchey III–IV', s: 'Peritonitis purulenta o fecal' },
        { id: 'har', col: 2, row: 2, k: 'alert', t: 'Operación de Hartmann', s: 'Cirugía de urgencia' },
        { id: 'fis', col: 3, row: 1, k: 'trap', t: 'Fístula colovesical', s: 'Neumaturia · ITU recurrente' },
      ],
      edges: [
        { from: 'tac', to: 'abs', label: 'contenido' }, { from: 'abs', to: 'atb' },
        { from: 'tac', to: 'per', label: 'libre' }, { from: 'per', to: 'har' },
      ],
      steps: [
        { show: ['tac'], note: 'La clasificación sale del TAC',
          say: 'Con el TAC en la mano, la diverticulitis se clasifica según Hinchey. Y la lógica es exactamente la misma que en el plastrón: ¿el proceso está contenido, o está libre en el peritoneo?' },
        { show: ['abs'], note: 'Contenido: un absceso',
          say: 'Los Hinchey uno y dos son los que tienen un absceso. El uno, un absceso pericólico pequeño, pegado al colon. El dos, un absceso pélvico o a distancia.' },
        { show: ['atb'], note: 'Se tratan sin cirugía',
          say: 'Estos se tratan sin cirugía: antibióticos, y en el Hinchey dos se agrega un drenaje percutáneo guiado por TAC.' },
        { show: ['per'], note: 'Libre: peritonitis',
          say: 'Los Hinchey tres y cuatro ya tienen peritonitis: purulenta en el tres, y fecal en el cuatro, cuando hay una perforación libre.' },
        { show: ['har'], note: 'Resección + colostomía, reconstruir meses después',
          say: 'Y estos van a cirugía de urgencia, con la operación de Hartmann: se reseca el sigmoides, se deja una colostomía terminal y se cierra el muñón rectal. El tránsito se reconstruye meses después.' },
        { show: ['fis'], note: 'Aire en la orina: piensa en fístula',
          say: 'Una complicación más que se pregunta: la fístula colovesical. El colon inflamado se comunica con la vejiga, y el paciente orina aire, lo que se llama neumaturia, y hace infecciones urinarias a repetición. Si en una pregunta ves un adulto mayor con neumaturia e infecciones urinarias recurrentes, piensa en el colon antes que en la vejiga.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diverticulitis aguda',
      title: 'Manejo médico: Hinchey I y II',
      cards: [
        { title: 'Antibióticos', tag: 'La base', kind: 'pharma', items: [
          { t: 'Ceftriaxona + metronidazol', d: 'Endovenosos u orales según la gravedad',
            say: 'Veamos en concreto el manejo médico, que es el de la mayoría de los pacientes. Los antibióticos son los mismos que usamos en el plastrón: ceftriaxona más metronidazol, que cubren gramnegativos y anaerobios del colon. Van por vía endovenosa u oral, según la gravedad.' },
          { t: 'Reposo intestinal', d: 'Deja descansar el colon inflamado',
            say: 'Y se agrega reposo intestinal, para dejar descansar el colon inflamado mientras actúan los antibióticos.' },
        ] },
        { title: 'Dónde y cuánto', tag: 'Según Hinchey', kind: 'criteria', items: [
          { t: 'Hinchey I leve: ambulatorio', d: 'Absceso pericólico pequeño',
            say: 'En el Hinchey uno, con un absceso pericólico pequeño, los casos leves incluso se pueden manejar en forma ambulatoria.' },
          { t: 'Hinchey II: drenaje percutáneo', d: 'Absceso mayor, pélvico o a distancia',
            say: 'En el Hinchey dos, el absceso es mayor, pélvico o a distancia. Ahí, además de los antibióticos, se suma el drenaje percutáneo guiado por TAC.' },
        ] },
        { title: 'La simetría', tag: 'Derecha = izquierda', kind: 'key', items: [
          { t: 'Contenido: antibióticos', d: 'Plastrón · Hinchey I–II',
            say: 'Y fíjate en la simetría con el lado derecho. El plastrón y los Hinchey uno y dos tienen algo en común: el proceso está contenido, y se tratan con antibióticos, con o sin drenaje.' },
          { t: 'Libre: pabellón', d: 'Apendicitis perforada · Hinchey III–IV',
            say: 'La apendicitis perforada con peritonitis difusa y los Hinchey tres y cuatro también comparten algo: la infección está libre en el peritoneo, y van a pabellón de urgencia. Si entiendes esa lógica, no necesitas memorizar dos listas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos la derecha y la izquierda en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Derecha e izquierda: examen y conducta',
      head: ['Cuadro', 'Hallazgo clave', 'Conducta'],
      rows: [
        { cells: ['Apendicitis aguda', 'Dolor que migra a la FID + anorexia', 'Apendicectomía laparoscópica'],
          say: 'Repasemos en una tabla. Apendicitis aguda: dolor que migra a la fosa ilíaca derecha, con anorexia. Apendicectomía laparoscópica.' },
        { cells: ['Plastrón apendicular', 'Masa en la FID, varios días', 'Antibióticos → apendicectomía a las 6–8 sem'],
          say: 'Plastrón: una masa de varios días. Primero antibióticos, y la apendicectomía a las seis a ocho semanas.' },
        { cells: ['Apendicitis perforada', 'Peritonitis difusa', 'Cirugía inmediata + lavado + antibióticos'],
          say: 'Apendicitis perforada con peritonitis difusa: cirugía inmediata, con lavado y antibióticos.' },
        { cells: ['Diverticulitis Hinchey I–II', 'Absceso pericólico o a distancia', 'Antibióticos ± drenaje percutáneo'],
          say: 'Diverticulitis con absceso, Hinchey uno o dos: antibióticos, y drenaje percutáneo si el absceso es pélvico o a distancia.' },
        { cells: ['Diverticulitis Hinchey III–IV', 'Peritonitis purulenta o fecal', 'Operación de Hartmann de urgencia'],
          say: 'Diverticulitis con peritonitis, Hinchey tres o cuatro: operación de Hartmann de urgencia.' },
        { cells: ['Post-diverticulitis', '6–8 semanas después', 'Colonoscopía para descartar cáncer'],
          say: 'Y después de cualquier diverticulitis, colonoscopía a las seis a ocho semanas. Nunca en el episodio agudo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 30 años con 6 días de dolor en la fosa ilíaca derecha, que comenzó en la región periumbilical. Temperatura 38 °C. Al examen se palpa una masa dolorosa en la fosa ilíaca derecha, sin signos peritoneales en el resto del abdomen. La ecografía muestra un conglomerado inflamatorio que envuelve el apéndice.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Apendicectomía de urgencia' },
        { letter: 'B', text: 'Antibióticos endovenosos y apendicectomía diferida a las 6–8 semanas' },
        { letter: 'C', text: 'Alta con analgésicos y control en 48 horas' },
        { letter: 'D', text: 'Colonoscopía para descartar cáncer de ciego' },
        { letter: 'E', text: 'Laparotomía exploradora con lavado peritoneal' },
      ],
      correct: 'B',
      explanation: 'Masa en la FID con varios días de evolución y sin peritonitis difusa: plastrón apendicular. El epiplón contuvo el proceso; se trata con antibióticos (ceftriaxona + metronidazol) y apendicectomía diferida a las 6–8 semanas. La cirugía inmediata es para la apendicitis perforada con peritonitis difusa.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta años con seis días de dolor en la fosa ilíaca derecha, que empezó alrededor del ombligo. Tiene treinta y ocho grados. Al examen se palpa una masa dolorosa en la fosa ilíaca derecha, sin signos peritoneales en el resto del abdomen, y la ecografía muestra un conglomerado inflamatorio que envuelve el apéndice.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: apendicectomía de urgencia, antibióticos con apendicectomía diferida, alta con analgésicos, colonoscopía, o laparotomía con lavado peritoneal. Piénsalo.',
        answer: 'Es la B. Seis días de evolución y una masa localizada, sin peritonitis difusa: es un plastrón apendicular. El epiplón ya contuvo el proceso, así que primero antibióticos, y la apendicectomía a las seis a ocho semanas. El distractor tentador es la apendicectomía de urgencia, porque es una apendicitis, pero eso corresponde a la apendicitis simple o a la perforada con peritonitis, no al plastrón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 62',
      stem: 'Mujer joven con dolor súbito en FID, hipotensión y taquicardia súbitas, dolor en ambas fosas ilíacas.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda complicada' },
        { letter: 'B', text: 'Quiste ovárico torcido' },
        { letter: 'C', text: 'Embarazo ectópico roto' },
        { letter: 'D', text: 'Salpingitis aguda con absceso tubo-ovárico' },
        { letter: 'E', text: 'Rotura folicular hemorrágica' },
      ],
      correct: 'C',
      explanation: 'Mujer joven con dolor en ambas fosas ilíacas e hipotensión y taquicardia súbitas: es la presentación de un embarazo ectópico roto, con hemoperitoneo. El dolor bilateral y el colapso hemodinámico brusco no son típicos de una apendicitis, que suele doler solo a la derecha y no da shock tan súbito.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés, que muestra por qué la regla de la mujer en edad fértil existe. Mujer joven con dolor súbito en la fosa ilíaca derecha, que se hace hipotensa y taquicárdica de forma súbita, con dolor en ambas fosas ilíacas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: apendicitis aguda complicada, quiste ovárico torcido, embarazo ectópico roto, salpingitis con absceso tubo-ovárico, o rotura folicular hemorrágica. Piénsalo.',
        answer: 'Es la C, embarazo ectópico roto. El dolor en ambas fosas ilíacas y el shock súbito son la clave: eso es sangre libre en el peritoneo, no una apendicitis. El distractor tentador es la apendicitis complicada, porque también da shock, pero de forma más gradual y con dolor localizado a la derecha. Esta es exactamente la paciente por la que primero se pide el test de embarazo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 68',
      stem: 'Niña de 7 años de edad, quien consulta por cuadro de 12 horas de evolución, caracterizada por fiebre y dolor hipogástrico. Al examen físico tiene temperatura 38,7 grados, FC 100x\', PA 100/60, dolor a la palpación de hipogastrio, con signo de Blumberg positivo y resistencia en la pared abdominal. Exámenes de laboratorio: 18.000 glóbulos blancos. Sedimento urinario muestra 20 leucocitos por campo. Proteína C reactiva 15.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pielonefritis aguda' },
        { letter: 'B', text: 'Apendicitis aguda' },
        { letter: 'C', text: 'ITU baja' },
        { letter: 'D', text: 'Torsión ovárica' },
        { letter: 'E', text: 'Plastrón apendicular' },
      ],
      correct: 'B',
      explanation: 'Blumberg positivo, resistencia de la pared abdominal, fiebre y leucocitosis: es una apendicitis aguda clásica. Los leucocitos en el sedimento urinario confunden con una infección urinaria, pero son un hallazgo acompañante frecuente cuando el apéndice inflamado está cerca de la vejiga, no el diagnóstico principal.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Niña de siete años, con doce horas de fiebre y dolor en el hipogastrio. Tiene treinta y ocho siete de temperatura, dolor a la palpación con Blumberg positivo y resistencia de la pared abdominal. Dieciocho mil leucocitos, veinte leucocitos por campo en la orina, y proteína C reactiva en quince.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: pielonefritis aguda, apendicitis aguda, infección urinaria baja, torsión ovárica, o plastrón apendicular. Piénsalo.',
        answer: 'Es la B, apendicitis aguda. El distractor tentador es la infección urinaria, por los leucocitos en la orina, pero eso es un hallazgo acompañante, no el diagnóstico: Blumberg positivo y resistencia muscular te dicen que el peritoneo está comprometido. Y todavía no hay masa palpable, así que tampoco es un plastrón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 171',
      stem: 'Una paciente de 70 años, al tercer día después de una colonoscopía con resección de un pólipo, acude al servicio de urgencia por dolor abdominal muy intenso, en la zona inferior izquierda, asociada a sensación febril y deposiciones con sangre, en una oportunidad. Al examen físico tiene abdomen doloroso a la palpación profunda, mayor en la fosa ilíaca izquierda y signo de Blumberg en dicha zona.',
      question: '¿Cuál es el examen más adecuado para proseguir con el estudio de esta paciente?',
      options: [
        { letter: 'A', text: 'Radiografía de abdomen simple' },
        { letter: 'B', text: 'Ecotomografía abdominal' },
        { letter: 'C', text: 'Tomografía axial computada de abdomen y pelvis' },
        { letter: 'D', text: 'Resonancia magnética nuclear de abdomen y pelvis' },
        { letter: 'E', text: 'Colonoscopía' },
      ],
      correct: 'C',
      explanation: 'Dolor en la fosa ilíaca izquierda con fiebre y Blumberg en una paciente mayor: el examen que continúa el estudio es el TAC de abdomen y pelvis, para caracterizar la diverticulitis y clasificarla por Hinchey. La colonoscopía queda contraindicada en el episodio agudo por el riesgo de perforar un colon ya inflamado.',
      say: {
        stem: 'Y una tercera pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de setenta años que, al tercer día de una colonoscopía con resección de un pólipo, llega con dolor abdominal muy intenso en la fosa ilíaca izquierda, fiebre y una deposición con sangre. Al examen, dolor profundo y Blumberg en esa zona.',
        question: '¿Cuál es el examen más adecuado para proseguir con el estudio de esta paciente?',
        options: 'Las opciones: radiografía simple, ecografía abdominal, TAC de abdomen y pelvis, resonancia de abdomen y pelvis, o colonoscopía. Piénsalo.',
        answer: 'Es la C, el TAC de abdomen y pelvis. El distractor tentador es repetir la colonoscopía, porque acaba de tener una, pero justo por eso está contraindicada: el colon inflamado se puede perforar con el aire de la endoscopía. El TAC es el que clasifica el cuadro y decide si necesita solo antibióticos o una cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 63 años con diverticulitis aguda. El TAC muestra abundante líquido y aire libre intraperitoneal, con signos de peritonitis fecal difusa. Está febril, taquicárdica e hipotensa.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Antibióticos endovenosos y reevaluar en 48 horas' },
        { letter: 'B', text: 'Drenaje percutáneo guiado por TAC' },
        { letter: 'C', text: 'Cirugía de urgencia (operación de Hartmann)' },
        { letter: 'D', text: 'Colonoscopía para localizar la perforación' },
        { letter: 'E', text: 'Resección sigmoidea laparoscópica con anastomosis primaria diferida' },
      ],
      correct: 'C',
      explanation: 'Aire y líquido libre con peritonitis fecal: Hinchey IV. Junto con el Hinchey III es indicación de cirugía de urgencia: resección del sigmoides con colostomía terminal y cierre del muñón rectal (Hartmann). El manejo médico o percutáneo solo sirve en los abscesos (Hinchey I–II).',
      say: {
        stem: 'Cerremos con un caso representativo del banco EUNACOM, para la situación más grave. Mujer de sesenta y tres años con diverticulitis aguda. El TAC muestra abundante líquido y aire libre en el peritoneo, con signos de peritonitis fecal difusa. Está febril, taquicárdica e hipotensa.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: antibióticos y reevaluar en cuarenta y ocho horas, drenaje percutáneo, operación de Hartmann de urgencia, colonoscopía para localizar la perforación, o resección laparoscópica diferida. Piénsalo.',
        answer: 'Es la C. Aire libre y peritonitis fecal es un Hinchey cuatro, y la paciente ya está séptica. Con peritonitis, purulenta o fecal, el tratamiento es la operación de Hartmann de urgencia. El distractor tentador es el drenaje percutáneo, pero ese sirve para un absceso contenido, no para una peritonitis. Y la colonoscopía en el episodio agudo está contraindicada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Lado derecho', tag: 'Apendicitis', kind: 'key', items: [
          { t: 'Mujer fértil: test de embarazo', d: 'Antes de cualquier otra conducta',
            say: 'Cerremos con las reglas de oro. Mujer en edad fértil con dolor abdominal bajo: primero test de embarazo y evaluación ginecológica.' },
          { t: 'Apendicitis: clínica → pabellón', d: 'Plastrón: antibióticos y cirugía diferida',
            say: 'La apendicitis es un diagnóstico clínico y se opera. El plastrón, en cambio, primero antibióticos y cirugía a las seis a ocho semanas.' },
        ] },
        { title: 'Lado izquierdo', tag: 'Diverticulitis', kind: 'alert', items: [
          { t: 'TAC sí, colonoscopía no', d: 'Colonoscopía a las 6–8 semanas',
            say: 'La diverticulitis se estudia con TAC, y la colonoscopía nunca en el agudo, sino a las seis a ocho semanas.' },
          { t: 'Absceso vs peritonitis', d: 'I–II: antibióticos ± drenaje · III–IV: Hartmann',
            say: 'Y Hinchey decide: absceso, antibióticos con o sin drenaje; peritonitis, operación de Hartmann. Si te llevas una sola idea de hoy: lo contenido se trata con antibióticos, y lo libre en el peritoneo se opera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Abdomen agudo: apendicitis y diverticulitis',
    root: N('start', 'Dolor abdominal agudo', 'Diagnóstico clínico',
      'Partimos de un abdomen agudo. Es un diagnóstico clínico, y no todos son quirúrgicos.',
      ['', N('do', 'Mujer fértil: test de embarazo', 'Y evaluación ginecológica',
        'Primera regla: en toda mujer en edad fértil con dolor abdominal bajo, test de embarazo y evaluación ginecológica antes que nada, para no perder un embarazo ectópico.',
        ['', N('q', '¿Dónde está el dolor?', 'Fosa ilíaca derecha o izquierda',
          'Descartado lo ginecológico, ¿el dolor está en la fosa ilíaca derecha o en la izquierda?',
          ['Derecha', N('q', '¿Masa de varios días?', 'Sin peritonitis difusa',
            'Dolor que migró del ombligo a la fosa ilíaca derecha, con anorexia. ¿Se palpa una masa con varios días de evolución?',
            ['NO', N('alert', 'Apendicectomía', 'Laparoscópica · urgente si perforada',
              'Sin masa: apendicitis aguda, apendicectomía laparoscópica. Si está perforada con peritonitis difusa, cirugía inmediata con lavado y antibióticos.')],
            ['SÍ', N('refer', 'Plastrón: antibióticos', 'Apendicectomía diferida 6–8 sem',
              'Con masa de varios días: plastrón apendicular. Primero antibióticos, y apendicectomía diferida a las seis a ocho semanas.')])],
          ['Izquierda', N('q', 'TAC: ¿absceso o peritonitis?', 'Hinchey · colonoscopía nunca en agudo',
            'Dolor en fosa ilíaca izquierda con fiebre en un mayor de cincuenta: diverticulitis. Se pide TAC de abdomen y pelvis con contraste, y la colonoscopía queda para las seis a ocho semanas. ¿El TAC muestra un absceso o una peritonitis?',
              ['I–II', N('ok', 'Antibióticos ± drenaje', 'Drenaje percutáneo si absceso a distancia',
                'Hinchey uno o dos, con absceso: antibióticos, y drenaje percutáneo guiado por TAC en el absceso pélvico o a distancia.')],
              ['III–IV', N('alert', 'Operación de Hartmann', 'Cirugía de urgencia',
                'Hinchey tres o cuatro, con peritonitis purulenta o fecal: cirugía de urgencia, operación de Hartmann.')])])])]),
  },
};
