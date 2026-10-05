// Clase 12.3 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-03). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de TEP ni de embolia grasa después de una fractura: se usan 2 casos del libro, rotulados "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Síndrome compartimental agudo: reconocerlo en horas y distinguirlo de las otras complicaciones de la fractura',
      say: 'Bienvenido. Hoy entramos a las complicaciones de las fracturas, y partimos por la más preguntada: el síndrome compartimental agudo. Es una urgencia que se decide en horas. En el examen cae casi siempre igual: un paciente con un yeso, dolor desproporcionado, y tú tienes que saber qué hacer. Después vemos las otras complicaciones, para que aprendas a separarlas por el tiempo y por la clínica.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Cuando el compartimento se aprieta',
      nodes: [
        { id: 'ca', col: 0, row: 1, k: 'cause', t: 'Alta energía o yeso circular', s: 'Edema y sangrado' },
        { id: 'pr', col: 1, row: 1, k: 'mech', t: 'Sube la presión del compartimento', s: 'La fascia no se expande' },
        { id: 've', col: 2, row: 0, k: 'effect', t: 'Colapsa el retorno venoso', s: 'Primero las venas' },
        { id: 'ar', col: 2, row: 2, k: 'risk', t: 'Luego cae el flujo arterial', s: 'Isquemia muscular' },
        { id: 'ne', col: 3, row: 1, k: 'alert', t: 'Necrosis y pérdida del miembro', s: 'En pocas horas' },
        { id: 'fa', col: 3, row: 3, k: 'good', t: 'Fasciotomía amplia', s: 'Libera la presión' },
      ],
      edges: [
        { from: 'ca', to: 'pr' },
        { from: 'pr', to: 've' },
        { from: 've', to: 'ar' },
        { from: 'ar', to: 'ne' },
        { from: 'pr', to: 'fa' },
      ],
      steps: [
        { show: ['ca', 'pr'], note: 'Una caja cerrada que se llena',
          say: 'Piensa en el músculo como contenido dentro de una caja cerrada, el compartimento, rodeada de una fascia que no se estira. Si el trauma es de alta energía, o si un yeso circular aprieta mientras el miembro se hincha, el contenido crece y la presión dentro de la caja sube.' },
        { show: ['ve', 'ar'], note: 'Primero se cierran las venas, después las arterias',
          say: 'Y esa presión colapsa primero el retorno venoso, que es de baja presión, y recién después el flujo arterial. Por eso el músculo sufre isquemia mientras todavía puede haber pulso. Guarda esa idea, porque explica la clínica.' },
        { show: ['ne', 'fa'], note: 'La única solución es abrir la fascia',
          say: 'Si no se corrige, el resultado es necrosis y pérdida de la extremidad en pocas horas. El tratamiento definitivo es liberar la presión abriendo la fascia: la fasciotomía amplia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Las señales del síndrome compartimental',
      cards: [
        { title: 'Signos tempranos', tag: 'Minutos a horas', kind: 'alert', items: [
          { t: 'Dolor desproporcionado', d: 'No cede con analgésicos habituales',
            say: 'A diferencia de las otras complicaciones, el síndrome compartimental aparece de forma inmediata, en minutos a horas. El primer signo es un dolor intenso, desproporcionado a la lesión, que no cede con los analgésicos habituales.' },
          { t: 'Dolor al estiramiento pasivo', d: 'El signo más precoz y característico',
            say: 'El signo más precoz y más característico es el dolor al estiramiento pasivo: al mover los dedos o los ortejos del paciente, el dolor aumenta. Esa maniobra es la que más se pregunta.' },
          { t: 'Compartimento tenso, pétreo', d: 'Edema y tensión',
            say: 'Al palpar, el compartimento se siente tenso, pétreo, por el edema.' },
        ] },
        { title: 'Signo tardío', tag: 'Ya es tarde', kind: 'criteria', items: [
          { t: 'Pulsos alterados o ausentes', d: 'Isquemia avanzada',
            say: 'Y la alteración de los pulsos es un signo tardío. Si ya no hay pulsos, la isquemia está avanzada y la necrosis es inminente. La trampa del examen es esperar a que desaparezca el pulso para decidir. No esperes: el dolor ya te lo dijo.' },
          { t: 'Típico: yeso cerrado y antebrazo', d: 'Y de pierna con yeso cerrado',
            say: 'Se asocia clásicamente a un yeso cerrado y a las fracturas de antebrazo y de pierna.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y conducta',
      title: 'Qué hacer cuando lo sospechas',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Es clínico', d: 'Ante sospecha clara, se actúa',
            say: 'El diagnóstico es clínico. Si la sospecha es clara, actúas sin esperar ningún examen.' },
          { t: 'Medir presión si hay duda', d: 'Es un procedimiento invasivo',
            say: 'Solo en los casos dudosos se puede medir la presión del compartimento, que es un procedimiento invasivo.' },
        ] },
        { title: 'Tratamiento', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Retirar yesos y vendajes', d: 'Primer paso inmediato',
            say: 'El primer paso es retirar de inmediato todo lo que aprieta: el yeso y los vendajes. Ojo con la trampa: en el examen, elevar la extremidad aparece como alternativa y es incorrecta. Lo que resuelve es retirar el yeso y reevaluar.' },
          { t: 'Si no mejora de inmediato: cirugía', d: 'Fasciotomía amplia',
            say: 'Pero si no mejora enseguida, el tratamiento definitivo es la fasciotomía amplia, que libera la presión. El sentido de urgencia es el que se pregunta: la isquemia muscular se cuenta en horas.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Fasciotomía: el compartimento abierto',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-03/01_fasciotomia-antebrazo__atls_p213.jpg', label: 'Fasciotomía del antebrazo por aplastamiento', credit: 'ATLS 10.ª ed., Fig. 8-8A' },
        { src: 'biblioteca/18_traumatologia/trauma-03/02_fasciotomia-pierna__atls_p213.jpg', label: 'Descompresión de la pierna con incisión medial', credit: 'ATLS 10.ª ed., Fig. 8-8B' },
      ],
      steps: [
        { note: 'Antebrazo: la fascia abierta en toda su longitud',
          say: 'Esta es una fasciotomía del antebrazo en un paciente con aplastamiento. Fíjate en lo amplia que es la incisión: se abre la piel y la fascia en toda la longitud del compartimento, y el músculo queda expuesto. Por eso el libro la llama fasciotomía amplia.' },
        { note: 'Pierna: descompresión con incisión medial',
          say: 'Y esta es la pierna, ya descomprimida, con la incisión medial. El músculo que antes estaba apretado ahora tiene espacio. Lo importante para el examen no es la técnica, sino la indicación: dolor desproporcionado que no mejora al retirar el yeso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Secuelas y otras complicaciones',
      title: 'Complicaciones tardías de la fractura',
      cards: [
        { title: 'Mano en garra', tag: 'Semanas o meses', kind: 'criteria', items: [
          { t: 'Fibrosis muscular tras isquemia', d: 'No extiende dedos ni muñeca',
            say: 'Si un síndrome compartimental no se resuelve a tiempo, la secuela es la fibrosis del músculo. Se ve en las fracturas supracondíleas de húmero y de antebrazo: aparece semanas o meses después, con la mano en garra, porque el paciente no puede extender los dedos ni la muñeca. Es la contractura isquémica de Volkmann.' },
          { t: 'Kinesioterapia; luego cirugía', d: 'Liberación de fascias y tendones',
            say: 'Se trata primero con kinesioterapia motora, y si no responde, con cirugía para liberar fascias y tendones.' },
        ] },
        { title: 'Distrofia simpático refleja', tag: 'Sudeck o SDRC', kind: 'key', items: [
          { t: 'Dolor urente con alodinia', d: 'Empeora al mover dedos o ortejos',
            say: 'La otra complicación tardía es la distrofia simpático refleja, también llamada atrofia ósea de Sudeck o síndrome de dolor regional complejo. Aparece semanas a meses después, con dolor neuropático urente, alodinia e hiperalgesia, que empeora al mover los dedos.' },
          { t: 'Cambios tróficos y osteoporosis moteada', d: 'Piel, fanéreos y uñas',
            say: 'Hay cambios tróficos en la piel, el vello y las uñas, y la radiografía muestra una osteoporosis moteada. Se cree que hay un cortocircuito entre las fibras del dolor y el sistema simpático, muchas veces gatillado por un mal manejo de la analgesia inicial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones sistémicas',
      title: 'Tromboembolismo y embolia grasa',
      cards: [
        { title: 'Tromboembolismo pulmonar', tag: 'Días después', kind: 'alert', items: [
          { t: 'Disnea súbita y dolor pleurítico', d: 'Desaturación; a veces hemoptisis o síncope',
            say: 'Pasemos a las complicaciones sistémicas. El tromboembolismo pulmonar aparece días después de la fractura, con disnea súbita, dolor torácico pleurítico y desaturación. Puede haber hemoptisis o síncope.' },
          { t: 'Dx: AngioTAC de tórax', d: 'El dímero D no sirve aquí',
            say: 'Se diagnostica con angioTAC de tórax. La perla del examen es que el dímero D no sirve en este contexto: la fractura y la cirugía lo elevan de forma inespecífica.' },
          { t: 'TEP masivo: ecocardiograma y trombolisis', d: 'Si hay shock o hipotensión',
            say: 'Si hay compromiso hemodinámico, el examen puede ser un ecocardiograma que busque falla derecha, y el tratamiento de elección es la trombolisis.' },
        ] },
        { title: 'Embolia grasa', tag: 'Horas', kind: 'key', items: [
          { t: 'Huesos largos: fémur, tibia, húmero', d: 'Aparece en horas a 48 horas',
            say: 'La embolia grasa es una complicación grave, propia de las fracturas de huesos largos como fémur, tibia y húmero. Aparece rápido, entre horas y cuarenta y ocho horas después.' },
          { t: 'Tríada: distrés, conciencia, petequias', d: 'Rash en tórax superior, cuello y axilas',
            say: 'Su tríada es distrés respiratorio, por edema pulmonar no cardiogénico, compromiso de conciencia, desde confusión hasta coma, y un rash petequial en tórax superior, cuello y axilas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro complicaciones, cuatro tiempos',
      head: ['Cuadro', 'Cuándo', 'Clínica clave', 'Conducta'],
      rows: [
        { cells: ['Síndrome compartimental', 'Horas', 'Dolor al estiramiento pasivo', 'Retirar yeso; fasciotomía'],
          say: 'Esta tabla separa las complicaciones por el tiempo. El síndrome compartimental aparece en horas, con dolor desproporcionado y dolor al estiramiento pasivo. Se retira el yeso y se hace fasciotomía.' },
        { cells: ['Embolia grasa', 'Horas a 48 h', 'Distrés, conciencia y petequias', 'Soporte'],
          say: 'La embolia grasa también aparece en horas, pero con distrés respiratorio, compromiso de conciencia y petequias. El tratamiento es de soporte.' },
        { cells: ['TEP', 'Días', 'Disnea súbita, dolor pleurítico', 'AngioTAC; dímero D no sirve'],
          say: 'El tromboembolismo pulmonar aparece días después, con disnea súbita. Se diagnostica con angioTAC, y no con dímero D.' },
        { cells: ['Distrofia simpático refleja', 'Semanas a meses', 'Dolor urente, alodinia, cambios tróficos', 'Diagnóstico clínico'],
          say: 'Y la distrofia simpático refleja aparece semanas a meses después, con dolor urente, alodinia y cambios tróficos. Si identificas el tiempo y el síntoma estrella, aciertas casi todas las preguntas de este grupo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: del paciente con una fractura y dolor a la complicación y su conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 55 años consulta 2 meses después de una fractura de muñeca tratada con yeso. Refiere dolor quemante en la mano, que se agrava con el roce de la ropa y al mover los dedos. Tiene la piel de la mano brillante, con cambios de color y de vello, y las uñas frágiles. La radiografía muestra osteoporosis moteada. No hay fiebre ni lesión de la piel.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome compartimental agudo' },
        { letter: 'B', text: 'Distrofia simpático refleja' },
        { letter: 'C', text: 'Contractura isquémica de Volkmann' },
        { letter: 'D', text: 'Osteomielitis' },
        { letter: 'E', text: 'Trombosis venosa profunda' },
      ],
      correct: 'B',
      explanation: 'Dolor urente con alodinia, cambios tróficos y osteoporosis moteada semanas a meses después de la fractura es una distrofia simpático refleja, o síndrome de dolor regional complejo. El síndrome compartimental aparece en horas y la contractura de Volkmann se caracteriza por la mano en garra.',
      say: {
        stem: 'Una mujer de cincuenta y cinco años, dos meses después de una fractura de muñeca con yeso, con dolor quemante en la mano que empeora con el roce de la ropa y al mover los dedos. La piel está brillante, con cambios de color y de vello, las uñas frágiles, y la radiografía muestra osteoporosis moteada. No hay fiebre.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome compartimental agudo; distrofia simpático refleja; contractura de Volkmann; osteomielitis; o trombosis venosa profunda. Piénsalo.',
        answer: 'Es la B. El tiempo, dos meses, descarta el síndrome compartimental, que es de horas. El dolor urente con alodinia, los cambios tróficos y la osteoporosis moteada son la distrofia simpático refleja. En la Volkmann lo que domina es la mano en garra por fibrosis, no el dolor quemante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 4',
      stem: 'Un paciente de 20 años hace 12 horas sufre una fractura cerrada de pierna derecha, mientras jugaba fútbol, presentando dolor e impotencia funcional. Se administran analgésicos y su fractura es inmovilizada con una bota larga de yeso. Sin embargo, evoluciona con intenso dolor de la pierna, más edema del pie ipsilateral.',
      question: 'La conducta inicial más adecuada es:',
      options: [
        { letter: 'A', text: 'Solicitar nuevas radiografías' },
        { letter: 'B', text: 'Administrar diuréticos' },
        { letter: 'C', text: 'Elevar la extremidad' },
        { letter: 'D', text: 'Solicitar TAC de pierna' },
        { letter: 'E', text: 'Retirar inmediatamente el yeso' },
      ],
      correct: 'E',
      explanation: 'La sospecha clínica es de síndrome compartimental. La conducta adecuada es retirar el yeso de inmediato y pedir evaluación urgente por un traumatólogo para una fasciotomía amplia. El diagnóstico es clínico, aunque se puede medir la presión intracompartimental si hay un tonómetro disponible.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un paciente de veinte años con una fractura cerrada de pierna, inmovilizada con una bota larga de yeso. A las doce horas tiene un dolor intenso de la pierna y edema del pie.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: nuevas radiografías; diuréticos; elevar la extremidad; escáner de pierna; o retirar inmediatamente el yeso. Piénsalo.',
        answer: 'Es la E. Es un síndrome compartimental, y el primer paso es quitar lo que aprieta: el yeso. Después, evaluación urgente por traumatología para la fasciotomía. Las otras alternativas pierden tiempo, y el tiempo es músculo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 57',
      stem: 'Mujer de 40 años con fractura de muñeca que fue enyesada. 3 horas después refiere dolor intenso progresivo en el antebrazo que no cede con analgesia, parestesias y sensación de tensión bajo el yeso.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome compartimental agudo' },
        { letter: 'B', text: 'Trombosis venosa profunda' },
        { letter: 'C', text: 'Reacción alérgica al yeso' },
        { letter: 'D', text: 'Fractura secundaria' },
        { letter: 'E', text: 'Distrofia simpática refleja' },
      ],
      correct: 'A',
      explanation: 'Dolor desproporcionado, parestesias y tensión bajo el yeso en una extremidad inmovilizada son un síndrome compartimental agudo. Es una emergencia: se retira el yeso de inmediato y se hace fasciotomía si no mejora.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de cuarenta años con una fractura de muñeca enyesada. A las tres horas tiene dolor intenso y progresivo en el antebrazo que no cede con analgesia, con parestesias y sensación de tensión bajo el yeso.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome compartimental agudo; trombosis venosa profunda; reacción alérgica al yeso; fractura secundaria; o distrofia simpática refleja. Piénsalo.',
        answer: 'Es la A. Fíjate en los tres datos: pocas horas desde el yeso, dolor que no cede con analgesia, y parestesias. Eso lo separa de la distrofia, que es de semanas, y de la trombosis venosa, que no da tensión bajo el yeso. Emergencia: se retira el yeso, y si no mejora, fasciotomía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 131',
      stem: 'Una paciente de 62 años sufre una caída a nivel, sufriendo una fractura del extremo distal del radio izquierdo, la que es manejada ortopédicamente, con un yeso braquiopalmar. A las 5 horas, evoluciona con intenso dolor, EVA 10/10, que no responde a la analgesia y se asocia a dificultades para mover los dedos. Al examen físico, se objetivan dedos con llene capilar enlentecido.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de dolor locorregional complejo' },
        { letter: 'B', text: 'Lesión de la arteria radial' },
        { letter: 'C', text: 'Trombosis venosa profunda' },
        { letter: 'D', text: 'Compresión del nervio mediano' },
        { letter: 'E', text: 'Síndrome compartimental' },
      ],
      correct: 'E',
      explanation: 'Dolor intenso que no responde a analgesia a pocas horas del yeso, con dificultad para mover los dedos y llene capilar enlentecido, es un síndrome compartimental.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Una mujer de sesenta y dos años con fractura del radio distal, tratada con yeso braquiopalmar. A las cinco horas tiene un dolor intensísimo que no responde a analgesia, dificultad para mover los dedos y llene capilar enlentecido.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de dolor regional complejo; lesión de la arteria radial; trombosis venosa profunda; compresión del nervio mediano; o síndrome compartimental. Piénsalo.',
        answer: 'Es la E. Cinco horas, dolor refractario a la analgesia y dedos con perfusión alterada. El síndrome de dolor regional complejo, que es la distrofia, tarda semanas. Y una lesión aislada de la arteria radial o una compresión del mediano no explican el dolor tan intenso del compartimento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 173',
      stem: 'Una paciente sufre una fractura de la diáfisis humeral derecha, la que es manejada mediante cirugía, con osteosíntesis con placa. A las 24 horas, evoluciona con dolor en el sitio de la fractura, asociada a imposibilidad de extender la muñeca derecha. Mantiene la flexión activa de los dedos de esa mano.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trombosis de la arteria braquial' },
        { letter: 'B', text: 'Neurapraxia del nervio radial' },
        { letter: 'C', text: 'Desplazamiento de la placa' },
        { letter: 'D', text: 'Síndrome compartimental' },
        { letter: 'E', text: 'Lesión del plexo braquial' },
      ],
      correct: 'B',
      explanation: 'El dolor en la zona orienta a un síndrome compartimental, pero solo se describe la afectación del nervio radial, sin otras alteraciones, por lo que lo más probable es una neurapraxia del radial.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una paciente operada de una fractura de la diáfisis del húmero, con placa. A las veinticuatro horas tiene dolor en el sitio de la fractura, no puede extender la muñeca, pero mantiene la flexión activa de los dedos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trombosis de la arteria braquial; neurapraxia del nervio radial; desplazamiento de la placa; síndrome compartimental; o lesión del plexo braquial. Piénsalo.',
        answer: 'Es la B. Aquí el síndrome compartimental es la trampa: hay dolor y una fractura. Pero no hay dolor desproporcionado ni al estiramiento pasivo, no hay tensión, y la flexión de los dedos se mantiene. Solo está dañado el nervio radial, que recorre la diáfisis humeral. No todo dolor tras una cirugía es un compartimental.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de fémur tratada hace tres días presenta en forma súbita disnea intensa y desaturación.',
      question: '¿Cuál es el diagnóstico más probable y el examen de elección?',
      options: [
        { letter: 'A', text: 'Embolia grasa; dímero D' },
        { letter: 'B', text: 'Tromboembolismo pulmonar; angiotac de tórax' },
        { letter: 'C', text: 'Tromboembolismo pulmonar; dímero D' },
        { letter: 'D', text: 'Síndrome compartimental; fasciotomía inmediata' },
        { letter: 'E', text: 'Neumonía aspirativa; radiografía de tórax' },
      ],
      correct: 'B',
      explanation: 'El TEP aparece días después de una fractura, con disnea o dolor torácico súbito, y el examen de elección es el angiotac de tórax. El dímero D no es útil porque la fractura ya lo eleva. La embolia grasa aparece en las primeras horas, con tríada de distrés, compromiso de conciencia y petequias.',
      say: {
        stem: 'Un paciente con una fractura de fémur tratada hace tres días presenta, de forma súbita, disnea intensa y desaturación.',
        question: '¿Cuál es el diagnóstico más probable y el examen de elección?',
        options: 'Las opciones: embolia grasa con dímero D; tromboembolismo pulmonar con angioTAC de tórax; tromboembolismo con dímero D; síndrome compartimental con fasciotomía; o neumonía aspirativa con radiografía. Piénsalo.',
        answer: 'Es la B. Tres días y disnea súbita: tromboembolismo pulmonar, no embolia grasa, que es de horas y viene con petequias. Y la C es la trampa: el diagnóstico es correcto, pero el dímero D no sirve, porque la fractura misma lo eleva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de fémur presenta a las seis horas distrés respiratorio, compromiso de conciencia y se observan petequias en el tronco.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'TEP masivo; trombolisis' },
        { letter: 'B', text: 'Embolia grasa; soporte' },
        { letter: 'C', text: 'Embolia grasa; anticoagulación con heparina' },
        { letter: 'D', text: 'Síndrome compartimental; fasciotomía urgente' },
        { letter: 'E', text: 'Distrofia simpático refleja; pregabalina' },
      ],
      correct: 'B',
      explanation: 'La embolia grasa aparece en horas, con la tríada de distrés respiratorio, compromiso de conciencia y rash petequial, y se asocia a fracturas de huesos largos como el fémur. El tratamiento es solo de soporte, porque no hay fármacos con eficacia demostrada.',
      say: {
        stem: 'Un paciente con una fractura de fémur presenta a las seis horas distrés respiratorio, compromiso de conciencia y petequias en el tronco.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: tromboembolismo masivo con trombolisis; embolia grasa con soporte; embolia grasa con heparina; síndrome compartimental con fasciotomía; o distrofia simpático refleja con pregabalina. Piénsalo.',
        answer: 'Es la B. Seis horas, distrés, conciencia alterada y petequias: la tríada de la embolia grasa. Y el tratamiento es de soporte. La C es la trampa, porque acierta el diagnóstico, pero no hay un fármaco con eficacia demostrada, y la heparina no corresponde.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: complicaciones',
      cards: [
        { title: 'Síndrome compartimental', tag: 'Urgencia en horas', kind: 'alert', items: [
          { t: 'Dolor desproporcionado y al estiramiento pasivo', d: 'Es lo más precoz; el pulso es tardío',
            say: 'Cerremos con las reglas de oro. En el síndrome compartimental, lo más precoz es el dolor desproporcionado y el dolor al estiramiento pasivo. El pulso ausente es tardío: no lo esperes.' },
          { t: 'Retirar yeso; fasciotomía si no mejora', d: 'Nunca yeso circular en fractura reciente',
            say: 'La conducta es retirar el yeso de inmediato, y si no mejora, fasciotomía amplia. Por eso las fracturas se inmovilizan con valva abierta.' },
        ] },
        { title: 'Separar por el tiempo', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Horas: compartimental y embolia grasa', d: 'Dolor de la extremidad o tríada con petequias',
            say: 'Para distinguir las complicaciones, usa el tiempo. En horas: el síndrome compartimental, con dolor del miembro, y la embolia grasa, con distrés, conciencia alterada y petequias.' },
          { t: 'Días: TEP', d: 'AngioTAC; el dímero D no sirve',
            say: 'En días: el tromboembolismo pulmonar, que se diagnostica con angioTAC.' },
          { t: 'Semanas o meses: Volkmann y distrofia', d: 'Mano en garra o dolor urente con alodinia',
            say: 'Y en semanas o meses: la mano en garra de Volkmann y la distrofia simpático refleja, con dolor urente. Si te llevas una sola idea de hoy: dolor desproporcionado después de una fractura o un yeso es compartimental hasta demostrar lo contrario, y se retira el yeso. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo del paciente con dolor después de una fractura',
    root: N('start', 'Fractura reciente con dolor intenso', '¿Cuánto tiempo ha pasado?',
      'Un paciente con una fractura o un yeso y un dolor intenso. Lo primero es el tiempo desde el trauma.',
      ['Horas, dolor del miembro', N('alert', 'Sospechar síndrome compartimental', 'Dolor desproporcionado y al estiramiento pasivo',
        'En horas, con dolor que no cede y que aumenta al estirar pasivamente, sospechas síndrome compartimental. El pulso ausente es tardío.',
        ['Retirar yeso y vendajes', N('do', 'Reevaluar de inmediato', 'Elevar la extremidad no es la respuesta',
          'Retiras todo lo que aprieta y reevalúas de inmediato. Elevar la extremidad no resuelve el cuadro.',
          ['No mejora, o duda', N('refer', 'Fasciotomía amplia urgente', 'Medir la presión solo si hay duda',
            'Si no mejora de inmediato, o el cuadro es claro, fasciotomía amplia urgente. La presión intracompartimental se mide solo en casos dudosos.')],
        )],
      )],
      ['Horas, distrés y petequias', N('do', 'Embolia grasa', 'Fractura de hueso largo; tratamiento de soporte',
        'Si en horas aparece distrés respiratorio, compromiso de conciencia y petequias, es una embolia grasa. Tratas con soporte.')],
      ['Días, disnea súbita', N('do', 'TEP: angioTAC de tórax', 'El dímero D no sirve en una fractura',
        'Días después, con disnea súbita, es un tromboembolismo pulmonar. Se confirma con angioTAC. Si hay shock, trombolisis.')],
      ['Semanas o meses', N('ok', 'Distrofia o mano en garra', 'Dolor urente con alodinia, o fibrosis',
        'Semanas o meses después, con dolor urente, alodinia y cambios tróficos, es una distrofia simpático refleja. Con la mano en garra, una secuela de Volkmann, que se trata con kinesioterapia y, si no responde, con cirugía.')],
    ),
  },
};
