// Clase 10.19 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-19).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-19 y --search).
// Parálisis de Bell: sin pregunta real en el banco; se usa un caso representativo del libro.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La frente decide si es central o periférica, y la mano dormida en la noche es el túnel carpiano',
      say: 'Bienvenidos. En la clase anterior vimos la esclerosis múltiple, una enfermedad del sistema nervioso central. Hoy vamos a la frontera entre lo central y lo periférico, con la parálisis facial y las neuropatías por atrapamiento. Son temas de semiología pura, y se resuelven mirando dos cosas: la frente del paciente y en qué dedos tiene las parestesias. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Neuroanatomía',
      title: '¿Por qué la frente separa lo central de lo periférico?',
      nodes: [
        { id: 'sup', col: 0, row: 0, k: 'mech', t: 'Mitad superior de la cara', s: 'Inervación cortical bilateral' },
        { id: 'inf', col: 0, row: 2, k: 'mech', t: 'Mitad inferior de la cara', s: 'Solo corteza contralateral' },
        { id: 'cen', col: 2, row: 0, k: 'alert', t: 'Lesión central', s: 'Corteza o vía corticonuclear' },
        { id: 'cfx', col: 3, row: 0, k: 'effect', t: 'Respeta frente y ojo', s: 'Solo 2/3 inferiores, lado contrario' },
        { id: 'per', col: 2, row: 2, k: 'cause', t: 'Lesión periférica', s: 'Núcleo o nervio facial' },
        { id: 'pfx', col: 3, row: 2, k: 'effect', t: 'Toda la hemicara', s: 'Mismo lado: frente, ojo y boca' },
      ],
      edges: [
        { from: 'sup', to: 'cen' }, { from: 'inf', to: 'cen' },
        { from: 'cen', to: 'cfx' }, { from: 'per', to: 'pfx' },
        { from: 'inf', to: 'per' },
      ],
      steps: [
        { show: ['sup'], note: 'La frente recibe órdenes de ambos hemisferios',
          say: 'Todo el tema se explica con un detalle anatómico. Las neuronas del núcleo facial que mueven la parte superior de la cara, es decir, la frente y el cierre del ojo, reciben órdenes de los dos hemisferios cerebrales.' },
        { show: ['inf'], note: 'La boca solo del hemisferio opuesto',
          say: 'En cambio, las que mueven la mitad inferior de la cara, la boca y la mejilla, reciben órdenes solo del hemisferio contrario.' },
        { show: ['cen', 'cfx'], note: 'Central: el otro hemisferio salva la frente',
          say: 'Ahora imagina un accidente cerebrovascular en la corteza o en la vía que baja al núcleo. La boca del lado contrario queda débil, pero la frente sigue funcionando, porque el otro hemisferio todavía le manda órdenes. Por eso la parálisis central respeta la frente y el cierre del ojo, y afecta solo los dos tercios inferiores de la cara del lado opuesto.' },
        { show: ['per', 'pfx'], note: 'Periférica: se corta el cable final',
          say: 'Si en cambio se lesiona el núcleo o el nervio facial, se corta el cable final, el que lleva todas las órdenes. Se paraliza toda la hemicara del mismo lado: frente, ojo y boca. Esa es la diferencia que el examen pregunta una y otra vez.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Parálisis periférica',
      title: 'Parálisis periférica: toda la hemicara',
      cards: [
        { title: 'Lo que ves', tag: 'Mismo lado', kind: 'key', items: [
          { t: 'No arruga la frente ni eleva la ceja', d: 'Comisura caída; boca hacia el lado sano',
            say: 'Veamos la parálisis periférica. El paciente no puede arrugar la frente ni levantar la ceja del lado afectado, la comisura cae, y al sonreír la boca se desvía hacia el lado sano.' },
          { t: 'Lagoftalmos y signo de Bell', d: 'El ojo no cierra y el globo sube',
            say: 'Y el ojo no cierra: eso es el lagoftalmos. Cuando le pides que cierre con fuerza, el globo ocular rota hacia arriba y afuera y queda a la vista la esclerótica blanca. Ese es el signo de Bell, y es la razón por la que la córnea corre peligro.' },
        ] },
        { title: 'Lo que acompaña', tag: 'Según el nivel', kind: 'criteria', items: [
          { t: 'Hiperacusia', d: 'Se paraliza el músculo del estribo',
            say: 'Según dónde se dañe el nervio dentro del canal óseo, puede haber síntomas acompañantes. La hiperacusia, porque se paraliza el músculo del estribo, que amortigua los sonidos.' },
          { t: 'Ageusia de 2/3 anteriores', d: 'Cuerda del tímpano; también lagrimeo',
            say: 'La pérdida del gusto en los dos tercios anteriores de la lengua, por la cuerda del tímpano, y alteraciones del lagrimeo y la salivación.' },
          { t: 'Dolor retroauricular previo', d: 'En el 60% de los casos',
            say: 'Y un dato de la historia: en seis de cada diez casos, el cuadro viene precedido de un dolor leve detrás de la oreja.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras causas',
      title: 'Parálisis central y Ramsay Hunt',
      cards: [
        { title: 'Parálisis central', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Frente y cierre ocular preservados', d: 'Solo la mitad inferior, lado contrario',
            say: 'Compara con la parálisis central. Aquí la frente y el cierre del ojo están preservados. El paciente arruga la frente sin problema, y solo se borra el surco nasogeniano y cae la comisura del lado opuesto a la lesión.' },
          { t: 'Con hemiparesia del mismo lado', d: 'ACV: TAC de encéfalo urgente (GES)',
            say: 'Casi siempre viene con una hemiparesia del mismo lado que la cara débil, porque la causa es un accidente cerebrovascular. Y eso cambia la conducta: no es un caso para la consulta, es una TAC de encéfalo urgente y el protocolo GES de ACV.' },
        ] },
        { title: 'Síndrome de Ramsay Hunt', tag: 'Varicela zóster', kind: 'pharma', items: [
          { t: 'Parálisis + otalgia + vesículas', d: 'En conducto auditivo y concha',
            say: 'La otra causa que tienes que reconocer es el síndrome de Ramsay Hunt: la reactivación del virus varicela zóster en el ganglio geniculado. Es una tríada: parálisis facial periférica severa, otalgia intensa y vesículas en el conducto auditivo externo y la concha de la oreja. Puede sumar hipoacusia y vértigo.' },
          { t: 'Prednisona + valaciclovir', d: '1 g c/8 h por 7 a 10 días',
            say: 'Aquí sí van antivirales: prednisona más valaciclovir, un gramo cada ocho horas, o aciclovir, por siete a diez días. Por eso siempre hay que mirar el oído.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Parálisis de Bell: corticoide y proteger el ojo',
      cards: [
        { title: 'Corticoide precoz', tag: 'Antes de 72 horas', kind: 'pharma', items: [
          { t: 'Prednisona 60 mg/día por 7 días', d: 'O 1 mg/kg/día; luego descenso',
            say: 'La parálisis de Bell es la causa del setenta a ochenta por ciento de las parálisis faciales agudas. Es un edema del nervio dentro de su canal óseo, atribuido al virus herpes simple uno. El tratamiento es prednisona oral, sesenta miligramos al día, o un miligramo por kilo, por siete días, con descenso en los días siguientes. Y se inicia dentro de las primeras setenta y dos horas.' },
          { t: 'Antivirales: no de rutina', d: 'Solo en Ramsay Hunt',
            say: 'Los antivirales no han demostrado beneficio en la parálisis de Bell aislada. Quedan para el Ramsay Hunt.' },
        ] },
        { title: 'Protección ocular', tag: 'Obligatoria', kind: 'alert', items: [
          { t: 'Lágrimas artificiales de día', d: 'Cada 1 a 2 horas',
            say: 'Y la segunda medida es tan importante como el corticoide: proteger el ojo. Como no cierra ni parpadea, la córnea se seca y puede ulcerarse hasta perder la visión. Lágrimas artificiales durante el día, cada una a dos horas.' },
          { t: 'Ungüento y oclusión nocturna', d: 'Parche o cinta para dormir',
            say: 'Y en la noche, ungüento lubricante y ocluir el ojo con un parche o una cinta.' },
        ] },
        { title: 'Evolución', tag: 'Cuándo derivar', kind: 'criteria', items: [
          { t: '>85% mejora en 3 semanas', d: 'Recuperación completa a los 3–6 meses',
            say: 'El pronóstico es bueno: más del ochenta y cinco por ciento empieza a mejorar dentro de tres semanas y se recupera por completo entre el tercer y el sexto mes.' },
          { t: 'Derivar si no es típica', d: 'Sin mejoría, otros pares, bilateral, masa',
            say: 'Se deriva al especialista si no mejora en tres semanas, si se comprometen otros pares craneales, si es bilateral, si hay una masa en la parótida o si sospechas un Ramsay Hunt.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neuropatías por atrapamiento',
      title: 'Túnel carpiano: el mediano comprimido en la muñeca',
      nodes: [
        { id: 'fac', col: 0, row: 1, k: 'risk', t: 'Factores predisponentes', s: 'Mujer, embarazo, diabetes, hipotiroidismo, AR' },
        { id: 'com', col: 1, row: 1, k: 'mech', t: 'Compresión del mediano', s: 'Bajo el retináculo flexor' },
        { id: 'noc', col: 2, row: 0, k: 'effect', t: 'Parestesias nocturnas', s: 'Pulgar a mitad del anular' },
        { id: 'fli', col: 3, row: 0, k: 'good', t: 'Alivia al sacudir la mano', s: 'Signo de Flick' },
        { id: 'pro', col: 2, row: 2, k: 'q', t: 'Phalen y Tinel', s: 'Reproducen los síntomas' },
        { id: 'ate', col: 3, row: 2, k: 'alert', t: 'Atrofia tenar', s: 'Signo de severidad' },
      ],
      edges: [
        { from: 'fac', to: 'com' }, { from: 'com', to: 'noc' }, { from: 'noc', to: 'fli' },
        { from: 'com', to: 'pro' }, { from: 'pro', to: 'ate', label: 'si avanza' },
      ],
      steps: [
        { show: ['fac'], note: 'La mononeuropatía por atrapamiento más frecuente',
          say: 'Pasemos a las neuropatías por atrapamiento. La más frecuente es el síndrome del túnel carpiano. Piensa en él en la mujer, la embarazada, el diabético, el hipotiroideo, la artritis reumatoide, la obesidad y los trabajos manuales repetitivos.' },
        { show: ['com'], note: 'Un conducto estrecho',
          say: 'El nervio mediano pasa por la muñeca bajo el retináculo flexor, el ligamento anular del carpo. Si ese conducto se estrecha, el nervio queda comprimido.' },
        { show: ['noc'], note: 'Territorio del mediano',
          say: 'La queja típica son parestesias y dolor nocturno en el territorio del mediano: el pulgar, el índice, el medio y la mitad del anular hacia el pulgar. Fíjate en los dedos, porque eso separa al mediano del ulnar.' },
        { show: ['fli'], note: 'Despierta con la mano dormida',
          say: 'El paciente despierta con la mano dormida y se alivia sacudiéndola. Eso tiene nombre: signo de Flick, y es muy sugerente.' },
        { show: ['pro'], note: 'Maniobras de provocación',
          say: 'Al examen hay dos maniobras. Phalen: flexión forzada de ambas muñecas, dorso contra dorso, por sesenta segundos, y aparecen las parestesias. Tinel: percutir sobre el túnel carpiano produce una descarga hacia los dedos.' },
        { show: ['ate'], note: 'Lo que indica un caso avanzado',
          say: 'Y el signo de severidad es la atrofia de la eminencia tenar, con debilidad para la oposición y la abducción del pulgar, más hipoestesia en los pulpejos. Ojo: la aducción del pulgar depende del ulnar, así que se conserva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo y otros atrapamientos',
      title: 'Férula o cirugía, y los otros nervios',
      cards: [
        { title: 'Túnel carpiano', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'Leve a moderado: férula nocturna', d: 'Muñeca neutra por 4 a 8 semanas; infiltración',
            say: 'El manejo es escalonado. En los casos leves a moderados, férula nocturna con la muñeca en posición neutra por cuatro a ocho semanas, ajustes en la actividad e infiltración con corticoides.' },
          { t: 'Severo: liberación quirúrgica', d: 'Atrofia, déficit persistente o refractario; con EMG',
            say: 'Si hay déficit sensitivo persistente, atrofia tenar o no responde al tratamiento conservador, y la electromiografía lo confirma, se libera quirúrgicamente el ligamento anular del carpo.' },
        ] },
        { title: 'Nervio ulnar', tag: 'Codo o Guyon', kind: 'criteria', items: [
          { t: '5° dedo y mitad del 4°', d: 'Túnel cubital o canal de Guyon',
            say: 'El nervio ulnar se atrapa en el codo, en el túnel cubital, o en la muñeca, en el canal de Guyon. Las parestesias van al quinto dedo y la mitad del cuarto hacia él.' },
          { t: 'Froment, atrofia hipotenar, garra', d: 'Débil el aductor del pulgar',
            say: 'Al examen, signo de Froment por debilidad del aductor del pulgar, atrofia hipotenar y mano en garra.' },
        ] },
        { title: 'Nervio peroneo común', tag: 'Cuello de la fíbula', kind: 'alert', items: [
          { t: 'Pie caído con estepaje', d: 'Piernas cruzadas, yeso apretado, encamado',
            say: 'Y en la pierna, el peroneo común se comprime en el cuello de la fíbula: piernas cruzadas por mucho rato, un yeso apretado o un paciente postrado. Da pie caído, con marcha en estepaje e hipoestesia del dorso del pie.' },
          { t: 'Pierde dorsiflexión y eversión', d: 'Conserva flexión plantar e inversión',
            say: 'Pierde la dorsiflexión y la eversión, pero conserva la flexión plantar y la inversión, porque esas dependen del nervio tibial.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Parálisis facial que respeta la frente', 'Central: TAC urgente', 'Tratar como Bell con prednisona'],
          say: 'Repasemos las trampas. Parálisis facial que respeta la frente: es central, y va una TAC urgente. El error es tratarla como Bell y mandarla a la casa.' },
        { cells: ['Toda la hemicara, sin otros signos', 'Bell: prednisona <72 h + protección ocular', 'Aciclovir de rutina'],
          say: 'Toda la hemicara, sin nada más: parálisis de Bell, prednisona antes de las setenta y dos horas y protección ocular. El error es indicar aciclovir de rutina.' },
        { cells: ['Parálisis + otalgia + vesículas en el oído', 'Ramsay Hunt: prednisona + valaciclovir', 'Olvidar el antiviral'],
          say: 'Parálisis con otalgia y vesículas en el oído: Ramsay Hunt, y aquí sí va el antiviral.' },
        { cells: ['Parálisis facial bilateral', 'Pensar en Guillain-Barré y derivar', 'Llamarla Bell'],
          say: 'Parálisis facial bilateral: no es Bell. Deriva y piensa en un Guillain-Barré, sobre todo si hay arreflexia.' },
        { cells: ['Mano dormida en la noche, alivia al sacudir', 'Túnel carpiano', 'Polineuropatía diabética'],
          say: 'Mano dormida en la noche que se alivia al sacudirla: túnel carpiano. La polineuropatía diabética parte por los pies.' },
        { cells: ['Túnel carpiano con atrofia tenar', 'Cirugía descompresiva, previa EMG', 'Seguir solo con férula'],
          say: 'Túnel carpiano con atrofia tenar: cirugía, previa electromiografía. Seguir solo con férula es quedarse corto.' },
        { cells: ['Pie caído tras cruzar las piernas', 'Peroneo común en la fíbula', 'Radiculopatía o ACV'],
          say: 'Y pie caído en alguien que pasó horas con las piernas cruzadas: atrapamiento del peroneo común en la fíbula.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años, sano, despierta con "la cara chueca". Ayer tuvo molestia retroauricular derecha. No eleva la ceja ni arruga la frente a derecha; al cerrar los ojos con fuerza el ojo derecho queda entreabierto 4 mm y el globo sube dejando ver la esclerótica. La comisura se desvía a la izquierda. Resto de pares, fuerza, sensibilidad y reflejos normales. Conducto auditivo sin vesículas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'TAC de encéfalo urgente y activar protocolo de ACV' },
        { letter: 'B', text: 'Prednisona 60 mg/día por 7 días con descenso, más protección ocular' },
        { letter: 'C', text: 'Aciclovir oral como tratamiento único' },
        { letter: 'D', text: 'Prednisona más valaciclovir por Ramsay Hunt' },
        { letter: 'E', text: 'Observar, porque más del 85% mejora solo' },
      ],
      correct: 'B',
      explanation: 'Compromiso de toda la hemicara, incluida la frente, con lagoftalmos y signo de Bell y sin otros hallazgos: parálisis facial periférica idiopática (Bell). Se trata con prednisona precoz (<72 h) y protección ocular obligatoria. La TAC es para la parálisis central (frente preservada); el antiviral, para el Ramsay Hunt (vesículas).',
      say: {
        stem: 'Vamos con un caso. Hombre de veintidós años, sano, que despierta con la cara chueca. Ayer tuvo una molestia detrás de la oreja derecha. No puede levantar la ceja ni arrugar la frente a derecha, el ojo derecho queda entreabierto al cerrarlo con fuerza y el globo sube mostrando la esclerótica. La comisura se desvía a la izquierda. Todo lo demás es normal, y el oído no tiene vesículas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: TAC urgente con protocolo de ACV, prednisona por siete días con protección ocular, aciclovir solo, prednisona con valaciclovir, u observar. Piénsalo.',
        answer: 'Es la B. La frente está tomada, así que es periférica; no hay vesículas ni otros signos, así que es una parálisis de Bell. Prednisona precoz y protección del ojo. La TAC tienta porque asusta una cara chueca, pero la frente paralizada te dice que no es central. Y observar no basta: el corticoide mejora la recuperación y el ojo necesita protección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 19 años consulta por imposibilidad de mover la mitad de la cara izquierda, que inició hace 3 horas. Presenta sensibilidad normal y conserva los movimientos masticatorios y oculomotores, sin embargo no es capaz de realizar movimientos con los músculos de expresión facial del lado izquierdo como sonreír, fruncir el ceño, arrugar la frente y tampoco puede cerrar completamente el ojo. El resto del examen neurológico es normal.',
      question: 'Además de la protección ocular la conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Iniciar carbamazepina' },
        { letter: 'B', text: 'Iniciar clorpromazina' },
        { letter: 'C', text: 'Iniciar amitriptilina' },
        { letter: 'D', text: 'Iniciar aciclovir' },
        { letter: 'E', text: 'Iniciar prednisona' },
      ],
      correct: 'E',
      explanation: 'Parálisis facial periférica aguda (incluye la frente y el cierre ocular) sin otros hallazgos: parálisis de Bell. El tratamiento es prednisona precoz, dentro de las primeras 72 horas. El aciclovir no se recomienda de rutina.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Paciente de diecinueve años con tres horas de imposibilidad de mover la mitad izquierda de la cara. No puede sonreír, fruncir el ceño ni arrugar la frente, y no cierra completamente el ojo. Conserva la masticación, la motilidad ocular y la sensibilidad, y el resto del examen es normal.',
        question: 'Además de la protección ocular, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: carbamazepina, clorpromazina, amitriptilina, aciclovir, o prednisona. Piénsalo.',
        answer: 'Es la E, prednisona. Es una parálisis periférica típica, con la frente tomada, y lleva apenas tres horas: estás justo en la ventana para el corticoide. El aciclovir es el distractor, porque se habla del virus herpes, pero no ha demostrado beneficio en la parálisis de Bell aislada. La carbamazepina es para la neuralgia del trigémino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 170',
      stem: 'Paciente de 45 años presenta paresia facial bilateral de instalación progresiva, en 2 semanas, a lo que luego se agrega parálisis del sexto par craneal. Al examen físico, el tono muscular está disminuido de forma simétrica en las cuatro extremidades, con reflejos osteotendíneos abolidos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Accidente vascular tronco encefálico' },
        { letter: 'B', text: 'Miastenia gravis' },
        { letter: 'C', text: 'Sd. de Guillain Barre' },
        { letter: 'D', text: 'Botulismo' },
        { letter: 'E', text: 'Hemorragia intracraneana' },
      ],
      correct: 'C',
      explanation: 'Parálisis facial bilateral progresiva, con otro par craneal y tetraparesia flácida arrefléctica: síndrome de Guillain-Barré. La parálisis facial bilateral nunca se asume como Bell.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil dieciséis. Paciente de cuarenta y cinco años con paresia facial bilateral que se instala en dos semanas, y luego se agrega una parálisis del sexto par. Tiene hipotonía simétrica de las cuatro extremidades y reflejos abolidos.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: accidente vascular de tronco, miastenia gravis, Guillain-Barré, botulismo, o hemorragia intracraneana. Piénsalo.',
        answer: 'Es la C, Guillain-Barré. Por eso la parálisis facial bilateral es un criterio de derivación: no es una parálisis de Bell. Súmale los reflejos abolidos y la debilidad simétrica, y es el Guillain-Barré que vimos hace unas clases. La miastenia tienta por los pares craneales, pero conserva los reflejos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 97',
      stem: 'Paciente con parestesias nocturnas en una mano que ceden al sacudir las manos.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neuropatía cubital' },
        { letter: 'B', text: 'Síndrome de Raynaud' },
        { letter: 'C', text: 'Síndrome del túnel carpiano' },
        { letter: 'D', text: 'Radiculopatía C6' },
        { letter: 'E', text: 'Polineuropatía diabética' },
      ],
      correct: 'C',
      explanation: 'Parestesias nocturnas que ceden al sacudir la mano (signo de Flick): síndrome del túnel carpiano.',
      say: {
        stem: 'Pasemos al túnel carpiano, que el examen pregunta mucho. Esta es del EUNACOM de enero de dos mil veintitrés, y es cortita: paciente con parestesias nocturnas en una mano, que ceden al sacudirla.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neuropatía cubital, síndrome de Raynaud, túnel carpiano, radiculopatía C seis, o polineuropatía diabética. Piénsalo.',
        answer: 'Es la C, túnel carpiano. Parestesias nocturnas que se alivian sacudiendo la mano son el signo de Flick. El Raynaud tienta porque también afecta las manos, pero es un cambio de color con el frío, no parestesias nocturnas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 126',
      stem: 'Paciente embarazada de 26 semanas, bien controlada, consulta por cuadro de una semana de sensación de hormigueo en ambas manos de predominio nocturno, mayor en lado derecho, sin otros síntomas. Al examen físico destaca parestesia en ambas manos al mantener muñecas flexionadas por 20 segundos.',
      question: 'El diagnóstico más probable:',
      options: [
        { letter: 'A', text: 'Mielopatía cervical' },
        { letter: 'B', text: 'Polimiositis' },
        { letter: 'C', text: 'Miastenia gravis' },
        { letter: 'D', text: 'Atrapamiento del nervio cubital' },
        { letter: 'E', text: 'Atrapamiento del nervio mediano' },
      ],
      correct: 'E',
      explanation: 'Embarazada con parestesias nocturnas en las manos y signo de Phalen positivo: túnel carpiano, es decir, atrapamiento del nervio mediano.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil trece. Embarazada de veintiséis semanas con una semana de hormigueo nocturno en ambas manos, mayor a derecha. Al mantener las muñecas flexionadas por veinte segundos, aparecen las parestesias.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: mielopatía cervical, polimiositis, miastenia gravis, atrapamiento del cubital, o atrapamiento del mediano. Piénsalo.',
        answer: 'Es la E, atrapamiento del nervio mediano, o sea, túnel carpiano. El embarazo es un factor predisponente, los síntomas son nocturnos, y la maniobra descrita es el signo de Phalen. El cubital tienta porque también es un atrapamiento, pero el Phalen comprime el túnel carpiano, por donde pasa el mediano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 111',
      stem: 'Un paciente de 55 años con diabetes mellitus mal controlada con metformina consulta por disestesias y sensación de aumento de volumen o edema en ambas manos, de predominio nocturno, que disminuyen con el movimiento y ceden al iniciar sus actividades diarias. El examen físico muestra movilidad y sensibilidad conservadas, con leve atrofia de la eminencia tenar.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neuropatía diabética simétrica sensitiva' },
        { letter: 'B', text: 'Contractura de Dupuytren' },
        { letter: 'C', text: 'Atrapamiento de los dedos flexores de la mano' },
        { letter: 'D', text: 'Artritis reumatoide' },
        { letter: 'E', text: 'Síndrome del túnel carpiano' },
      ],
      correct: 'E',
      explanation: 'Síntomas nocturnos en las manos que ceden con el movimiento y atrofia tenar, en un diabético: túnel carpiano. La neuropatía diabética parte por los pies.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil veinticuatro. Diabético de cincuenta y cinco años, mal controlado, con disestesias y sensación de hinchazón en ambas manos, de predominio nocturno, que ceden con el movimiento y al iniciar el día. Tiene una leve atrofia de la eminencia tenar.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neuropatía diabética sensitiva, contractura de Dupuytren, atrapamiento de los flexores, artritis reumatoide, o túnel carpiano. Piénsalo.',
        answer: 'Es la E, túnel carpiano. Síntomas nocturnos que se alivian moviendo la mano, y atrofia tenar. La trampa es la neuropatía diabética, porque el paciente es diabético. Pero la diabetes también predispone al túnel carpiano, y la neuropatía diabética empieza por los pies, en calcetín, no en la eminencia tenar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 27',
      stem: 'Una paciente de 34 años, cursando un embarazo de 28 semanas, consulta por parestesias en el primer, segundo y tercer dedo de la mano derecha, que empeoran durante la tarde y la noche, asociadas a sensación de debilidad en los mismos dedos. El resto del examen físico es normal.',
      question: '¿Cuál es el examen más adecuado para confirmar la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Resonancia magnética nuclear de cuello' },
        { letter: 'B', text: 'Ecografía de muñecas' },
        { letter: 'C', text: 'Electromiografía' },
        { letter: 'D', text: 'Radiografía de mano derecha' },
        { letter: 'E', text: 'Factor reumatoideo' },
      ],
      correct: 'C',
      explanation: 'Túnel carpiano clásico (embarazo, parestesias en los tres primeros dedos, peor en la noche). El examen que lo confirma es la electromiografía con estudio de conducción nerviosa.',
      say: {
        stem: 'La última es del EUNACOM de diciembre de dos mil veinticinco. Embarazada de veintiocho semanas con parestesias en el primer, segundo y tercer dedo de la mano derecha, que empeoran en la tarde y la noche, con sensación de debilidad en esos dedos.',
        question: '¿Cuál es el examen más adecuado para confirmar la sospecha diagnóstica?',
        options: 'Las opciones: resonancia de cuello, ecografía de muñecas, electromiografía, radiografía de mano, o factor reumatoideo. Piénsalo.',
        answer: 'Es la C, electromiografía. El diagnóstico es clínico, pero cuando hay que confirmarlo, sobre todo antes de operar, el examen es la electromiografía. La resonancia de cuello tienta si piensas en una radiculopatía, pero los dedos afectados calzan exactamente con el mediano.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Parálisis facial', tag: 'Mira la frente', kind: 'key', items: [
          { t: 'Frente tomada: periférica', d: 'Toda la hemicara, mismo lado',
            say: 'Cerremos con las reglas de oro. Si la frente está tomada, la parálisis es periférica y afecta toda la hemicara del mismo lado.' },
          { t: 'Frente respetada: central', d: 'ACV hasta demostrar lo contrario',
            say: 'Si la frente está respetada, es central: un ACV hasta demostrar lo contrario, con TAC urgente.' },
        ] },
        { title: 'Tratamiento', tag: 'Bell', kind: 'pharma', items: [
          { t: 'Prednisona <72 h + proteger el ojo', d: 'Antiviral solo en Ramsay Hunt',
            say: 'La parálisis de Bell se trata con prednisona antes de las setenta y dos horas, y el ojo siempre se protege. El antiviral queda para el Ramsay Hunt.' },
          { t: 'Bilateral o atípica: derivar', d: 'Pensar en Guillain-Barré',
            say: 'Y si es bilateral, no mejora en tres semanas o toca otros pares, derivas.' },
        ] },
        { title: 'Atrapamientos', tag: 'Mira los dedos', kind: 'alert', items: [
          { t: 'Pulgar a anular, de noche: mediano', d: 'Phalen, Tinel, Flick; EMG para confirmar',
            say: 'En la mano, parestesias nocturnas del pulgar a la mitad del anular son túnel carpiano; se confirma con electromiografía, y la atrofia tenar lleva a cirugía.' },
          { t: 'Pie caído: peroneo en la fíbula', d: 'Conserva flexión plantar',
            say: 'Y el pie caído tras cruzar las piernas es el peroneo común. Si te llevas una sola idea de hoy: en la cara mira la frente, y en la mano mira los dedos. En la próxima clase vemos el síndrome vertiginoso. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Parálisis facial aguda: central, Bell o algo más',
    root: N('start', 'Parálisis facial aguda', 'Cara chueca',
      'Paciente que consulta por una parálisis facial aguda. La primera pregunta es anatómica.',
      ['', N('q', '¿Puede arrugar la frente?', 'Frente y cierre ocular',
        'Pídele que arrugue la frente y que cierre los ojos con fuerza.',
        ['Sí', N('alert', 'Parálisis central', 'TAC de encéfalo urgente: ACV',
          'Si arruga la frente y cierra el ojo, la lesión es central. Busca hemiparesia y pide una TAC de encéfalo urgente: es un ACV hasta demostrar lo contrario.')],
        ['No', N('q', '¿Vesículas, otalgia o signos atípicos?', 'Oído, otros pares, bilateral',
          'Si la frente está tomada, es periférica. Ahora mira el oído y busca signos atípicos.',
          ['Vesículas y otalgia', N('do', 'Ramsay Hunt', 'Prednisona + valaciclovir',
            'Vesículas en el oído con otalgia: Ramsay Hunt, con prednisona más valaciclovir.')],
          ['Bilateral u otros pares', N('refer', 'Derivar', 'Pensar en Guillain-Barré, masa parotídea',
            'Si es bilateral, toca otros pares o hay una masa parotídea, derivas al especialista.')],
          ['Nada más', N('ok', 'Parálisis de Bell', 'Prednisona <72 h + protección ocular',
            'Si no hay nada más, es una parálisis de Bell: prednisona antes de las setenta y dos horas y protección ocular. Si no mejora en tres semanas, derivas.')])])]),
  },
};
