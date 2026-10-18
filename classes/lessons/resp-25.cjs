// Clase 2.25 (Neumología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/neumologia_extra/c.cjs (resp-25, tier 2). Códigos: 1.05.2.001 (asfixia por inmersión) y 1.07.1.011 (hipotermia),
// según books/data/v3_codemap.json. No hay GES.
// Preguntas reales: el banco real no tiene ninguna para estos códigos (real_questions_by_code.json vacío; class_questions.cjs --search
// "ahogamiento|inmersión|hipotermia|ondas J|Osborn|recalentamiento" solo devuelve hipotermia neonatal y mixedema, que no corresponden).
// Por eso se usan, como manda el estándar, las tres preguntas de práctica del libro con la etiqueta "Banco EUNACOM · Caso representativo"
// (kicker "Pregunta del banco EUNACOM") y la voz no inventa fecha. Las del libro con recTag "Banco Oficial AEE · Perfil V3" son esas mismas.
// El caso clínico de la clase es otro (paro en hipotermia grave), porque la viñeta del libro repite la primera pregunta (niño de 6 años en piscina).
// Fotos en contexto: radiografía de tórax de SDRA (Harrison 21.ª ed., Fig. 301-2) como ejemplo del edema pulmonar no cardiogénico que deja la aspiración.
// No hay foto verificada de ahogamiento ni de ondas J en books/data/atlas_fotos_verificadas.json ni en classes/media/biblioteca;
// el ECG de la onda J se dibuja por código en la animación.
// En movimiento: scenes/neumo_nuevas.html (?v=hipotermia), gráfico solo código (escala de temperatura central, ECG con onda J, recalentamiento).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-25',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ahogamiento e hipotermia accidental: ventilar primero, recalentar con cuidado',
      say: 'Bienvenido. Hoy vemos dos urgencias que se parecen más de lo que parece: el ahogamiento y la hipotermia accidental. En el ahogamiento, el paro es por falta de oxígeno, y por eso la reanimación parte por ventilar. En la hipotermia, el paciente puede parecer muerto y no estarlo, y por eso la reanimación se prolonga hasta recalentarlo. Partamos por el agua.',
    },

    {
      type: 'flow',
      kicker: 'Ahogamiento',
      title: 'De la apnea al paro cardíaco por hipoxia',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'cause', t: 'Pánico y apnea voluntaria', s: 'Cabeza bajo el agua' },
        { id: 'l', col: 0, row: 2, k: 'mech', t: 'Laringoespasmo', s: 'Luego aspiración de agua' },
        { id: 'h', col: 2, row: 1, k: 'mech', t: 'Hipoxemia progresiva', s: 'Pérdida de conciencia' },
        { id: 'b', col: 4, row: 0, k: 'effect', t: 'Bradicardia', s: 'La hipoxia frena el corazón' },
        { id: 'p', col: 4, row: 2, k: 'alert', t: 'Paro cardíaco hipóxico', s: 'El problema es el oxígeno' },
      ],
      edges: [
        { from: 'a', to: 'l' }, { from: 'l', to: 'h' }, { from: 'h', to: 'b' }, { from: 'b', to: 'p' },
      ],
      steps: [
        { show: ['a', 'l'], note: 'La vía aérea se cierra',
          say: 'El ahogamiento es un proceso de dificultad respiratoria por inmersión o sumersión en un líquido. La secuencia empieza con pánico y una apnea voluntaria. Después viene un laringoespasmo, y luego la aspiración de agua.' },
        { show: ['h'], note: 'Falta oxígeno',
          say: 'El resultado es una hipoxemia progresiva. El paciente pierde la conciencia.' },
        { show: ['b', 'p'], note: 'El paro es por hipoxia',
          say: 'La hipoxia frena el corazón: primero bradicardia, y después paro cardíaco. Guarda esta idea, porque define toda la reanimación: el corazón no se detuvo por una arritmia primaria, sino por falta de oxígeno.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Quién y qué le pasa al pulmón',
      title: 'Niños pequeños, hombres jóvenes y un pulmón lavado',
      cards: [
        { title: 'Epidemiología', tag: 'Quién se ahoga', kind: 'key', items: [
          { t: 'Niños de 1 a 4 años', d: 'Piscinas, tinas y canales',
            say: 'Se ahogan sobre todo los niños de uno a cuatro años, en piscinas, tinas y canales, y los hombres jóvenes, con alcohol, drogas, clavados, ríos y mar.' },
          { t: 'Ya no se dice ahogamiento seco ni húmedo', d: 'Con muerte, con morbilidad o sin morbilidad',
            say: 'Hoy no se habla de ahogamiento seco ni húmedo, sino de ahogamiento con muerte, con morbilidad o sin morbilidad.' },
          { t: 'Alcohol, convulsiones, QT largo, trauma cervical', d: 'Falta de supervisión',
            say: 'Se asocia a alcohol, convulsiones, arritmias como el QT largo, trauma cervical en los clavados y falta de supervisión.' },
        ] },
        { title: 'El pulmón', tag: 'Aspiración de agua', kind: 'alert', items: [
          { t: 'El agua lava el surfactante', d: 'Edema pulmonar no cardiogénico y SDRA',
            say: 'Cuando se aspira agua, dulce o salada, se lava el surfactante. Eso causa edema pulmonar no cardiogénico, atelectasias y síndrome de distrés respiratorio agudo. Mira esta radiografía: opacidades en los dos pulmones, el aspecto típico de ese edema.',
            photo: { src: 'biblioteca/02_neumologia/resp-25/01_sdra-rx-torax__harrison_p2267.jpg', label: 'Edema no cardiogénico, SDRA', at: 'Mira esta radiografía', credit: 'Harrison 21.ª ed., Fig. 301-2' } },
          { t: 'Agua dulce o salada: da igual', d: 'La diferencia de electrolitos no importa',
            say: 'Las diferencias de electrolitos entre agua dulce y salada no tienen importancia clínica.' },
          { t: 'Puede deteriorarse horas después', d: 'Por eso se observa',
            say: 'Y un paciente asintomático puede empeorar horas más tarde, por eso se observa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reanimación',
      title: 'Primero ventilar, y no perder tiempo en el agua',
      cards: [
        { title: 'Qué se hace', tag: 'Paro hipóxico', kind: 'alert', items: [
          { t: '5 ventilaciones de rescate primero', d: 'Después compresiones, 30:2 (15:2 en niños con dos rescatistas)',
            say: 'La víctima se saca del agua cuidando la seguridad del rescatista. Como el paro es hipóxico, la reanimación parte por cinco ventilaciones de rescate. Después vienen las compresiones, treinta compresiones por dos ventilaciones, o quince por dos en niños cuando hay dos rescatistas.' },
          { t: 'Oxígeno al 100% y desfibrilador si corresponde', d: 'Retirar la ropa mojada y cubrir',
            say: 'Se usa oxígeno al cien por ciento y el desfibrilador si el ritmo lo permite. Se retira la ropa mojada y se cubre al paciente.' },
          { t: 'Columna cervical: solo si hay trauma', d: 'Clavado, caída',
            say: 'La columna cervical se inmoviliza solo si hay mecanismo de trauma, como un clavado.' },
        ] },
        { title: 'Qué no se hace', tag: 'Trampas', kind: 'pharma', items: [
          { t: 'No drenar el agua', d: 'Ni Heimlich ni boca abajo',
            say: 'Lo que no se hace es intentar sacar el agua. Ni la maniobra de Heimlich ni poner al paciente boca abajo sirven, y aumentan el vómito y la aspiración. Cada segundo perdido es oxígeno que no llega.' },
          { t: 'No suspender hasta recalentar', d: 'Si el agua era fría: 32-35 °C',
            say: 'Y si el agua era fría, la reanimación se prolonga más que en un paro habitual y no se suspende hasta recalentar al paciente, a treinta y dos a treinta y cinco grados.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo hospitalario',
      title: 'Oxígeno, estudio y observación de 6 a 8 horas',
      cards: [
        { title: 'En el hospital', tag: 'Qué se hace', kind: 'criteria', items: [
          { t: 'Oxígeno con meta SatO2 > 94%', d: 'CPAP, VMNI o intubación si persiste',
            say: 'En el hospital se monitoriza al paciente y se da oxígeno, con meta de saturación mayor de noventa y cuatro por ciento. Si la hipoxemia persiste, se usa CPAP o ventilación no invasiva, o se intuba con ventilación protectora, como en el distrés respiratorio.' },
          { t: 'Gases, radiografía, glicemia, electrolitos, ECG', d: 'Buscar trauma, hipotermia, sustancias',
            say: 'Se piden gases arteriales, radiografía de tórax, glicemia, electrolitos y electrocardiograma, y se busca siempre trauma, hipotermia y consumo de sustancias.' },
          { t: 'Sin antibióticos ni corticoides', d: 'Solo si hay infección clara',
            say: 'No se indican antibióticos profilácticos ni corticoides. Solo se usan ante una infección clara, por ejemplo, con agua contaminada.' },
        ] },
        { title: 'Observación', tag: 'Alta o ingreso', kind: 'key', items: [
          { t: 'Asintomático con Rx y saturación normales', d: 'Observar 6 a 8 horas antes del alta',
            say: 'El paciente asintomático, con radiografía y saturación normales, se observa de seis a ocho horas antes del alta.' },
          { t: 'Tos, disnea, hipoxemia o infiltrados', d: 'Hospitalizar',
            say: 'Si hay tos, disnea, hipoxemia o infiltrados, se hospitaliza.' },
          { t: 'Peor pronóstico', d: 'Sumersión > 10 min, asistolia, pH < 7,0',
            say: 'El pronóstico es peor con una sumersión mayor de diez minutos, con asistolia y con un pH menor de siete.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Hipotermia',
      title: 'Clasificación por temperatura central',
      head: ['Grado', 'Temperatura central', 'Cuadro clínico', 'Manejo'],
      rows: [
        { cells: ['Leve', '32 a 35 °C', 'Temblor, taquicardia, taquipnea, confusión', 'Recalentamiento pasivo y externo'],
          say: 'Pasemos a la hipotermia, que es una temperatura central menor de treinta y cinco grados, medida en el recto, el esófago o la vejiga. El termómetro oral no sirve en este rango. En la hipotermia leve, de treinta y dos a treinta y cinco, el cuerpo reacciona: hay temblor, taquicardia, taquipnea y confusión. Basta el recalentamiento pasivo y externo.' },
        { cells: ['Moderada', '28 a 32 °C', 'Letargo, sin temblor, bradicardia, ondas J, FA', 'Activo externo + suero tibio; monitor'],
          say: 'En la moderada, de veintiocho a treinta y dos, el temblor desaparece. Hay letargo, bradicardia, hipotensión y ondas J de Osborn en el electrocardiograma, con riesgo de fibrilación auricular. Se agrega recalentamiento activo externo y suero tibio, con monitor. Mira este electrocardiograma: la onda J de Osborn al final del complejo.',
            photos: [{ src: 'biblioteca/02_neumologia/resp-25/10_ecg-hipotermia-ondas-j-osborn__knoop_p551.jpg', label: 'Onda J de Osborn', at: 'Mira este electrocardiograma', credit: 'Knoop, Atlas of Emergency Medicine, p. 551' }] },
        { cells: ['Grave', '< 28 °C', 'Coma, bradicardia extrema, FV o asistolia', 'Recalentamiento interno, ECMO; RCP prolongada'],
          say: 'En la grave, bajo veintiocho grados, hay coma, pupilas poco reactivas y bradicardia extrema, con riesgo de fibrilación ventricular y asistolia. El paciente parece muerto. Aquí se recalienta por dentro y, si hay centro, con circulación extracorpórea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reconocimiento',
      title: 'Quién se enfría y qué más descartar',
      cards: [
        { title: 'Quién', tag: 'Grupos expuestos', kind: 'alert', items: [
          { t: 'Adultos mayores', d: 'Viven solos, caídas, hipotiroidismo, sedantes',
            say: 'Los más expuestos son los adultos mayores, por una termorregulación menor, la pobreza, vivir solos, las caídas, el hipotiroidismo y los fármacos sedantes.' },
          { t: 'Alcohol, drogas, sin hogar, niños pequeños', d: 'Y los sumergidos en agua fría',
            say: 'También las personas con alcohol u otras drogas, las personas sin hogar, los niños pequeños y los que se sumergen en agua fría.' },
        ] },
        { title: 'Qué más', tag: 'Causa o consecuencia', kind: 'criteria', items: [
          { t: 'Hipoglicemia, sepsis, mixedema, insuficiencia suprarrenal', d: 'Intoxicaciones y trauma',
            say: 'Hay que descartar hipoglicemia, sepsis, hipotiroidismo grave, insuficiencia suprarrenal, intoxicaciones y trauma, como causa o como consecuencia de la hipotermia.' },
          { t: 'Glicemia, gases, potasio, creatinina y CK', d: 'Hemograma, coagulación y lactato',
            say: 'Los exámenes incluyen glicemia, gases arteriales, electrolitos con potasio, creatinina y CK, hemograma, coagulación, porque el frío produce coagulopatía, y lactato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Recalentamiento escalonado y manos suaves',
      cards: [
        { title: 'Medidas generales', tag: 'Para todos', kind: 'key', items: [
          { t: 'Retirar la ropa húmeda y aislar del suelo', d: 'Mantas y cubrir la cabeza',
            say: 'Para todos, se retira de la exposición, se quita la ropa húmeda, se aísla del suelo y se cubre con mantas, incluida la cabeza.' },
          { t: 'Monitor y manipulación cuidadosa', d: 'Los movimientos bruscos pueden gatillar FV',
            say: 'Se monitoriza de forma continua y se manipula con cuidado, porque los movimientos bruscos pueden gatillar una fibrilación ventricular. No se masajean las extremidades ni se da alcohol.' },
        ] },
        { title: 'Según el grado', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'Leve: pasivo y externo', d: 'Mantas, ambiente cálido, bebidas calientes dulces',
            say: 'En la leve basta el recalentamiento pasivo y externo: mantas, ambiente cálido y bebidas calientes dulces si está consciente.' },
          { t: 'Moderada: activo externo y suero tibio', d: '38-42 °C; subir 0,5 a 2 °C por hora',
            say: 'En la moderada se agrega el recalentamiento activo externo, con mantas de aire caliente o eléctricas, y suero fisiológico tibio, de treinta y ocho a cuarenta y dos grados. La meta es subir de medio a dos grados por hora. La bradicardia es fisiológica y no responde a atropina ni a marcapaso.' },
          { t: 'Grave: interno y circulación extracorpórea', d: 'Lavado pleural o peritoneal tibio, ECMO',
            say: 'En la grave o inestable se recalienta por dentro: lavado pleural o peritoneal con líquido tibio y, si está disponible, circulación extracorpórea, ECMO o bypass. Por eso se deriva a un centro con esa capacidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paro hipotérmico',
      title: 'Nadie está muerto hasta que está tibio y muerto',
      cards: [
        { title: 'En paro', tag: 'RCP prolongada', kind: 'alert', items: [
          { t: 'RCP y hasta 3 descargas', d: 'Con < 30 °C: limitar fármacos y descargas',
            say: 'En paro cardíaco se inicia la reanimación y se dan hasta tres descargas. Con una temperatura menor de treinta grados se limitan los fármacos y las descargas hasta recalentar.' },
          { t: 'Hasta recalentar', d: 'El corazón frío puede no responder',
            say: 'Por eso la frase clásica: nadie está muerto hasta que está tibio y muerto. Mientras está frío, no se suspende la reanimación.' },
        ] },
        { title: 'Vigilar', tag: 'Complicaciones', kind: 'criteria', items: [
          { t: 'Hipoglicemia, hiperkalemia, arritmias', d: 'Y reanimar con volumen: hipovolemia por diuresis fría',
            say: 'Se vigilan la hipoglicemia, la hiperkalemia y las arritmias, y se repone volumen, porque el frío produce diuresis y deja al paciente hipovolémico.' },
          { t: 'Colapso al recalentar', d: 'Vasodilatación y shock; calentar primero el tronco',
            say: 'Y la complicación del recalentamiento es el colapso, con shock por vasodilatación. Por eso se calienta primero el tronco.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La temperatura baja y el corazón cambia',
      images: [
        { src: 'animaciones/resp-25/A1_hipotermia_escalera.mp4', label: 'Hipotermia: temperatura, ECG y recalentamiento', credit: 'Gráfico con código propio · cifras del libro de Neumología (resp-25)' },
      ],
      steps: [
        { note: 'Del temblor a la fibrilación',
          say: 'Mira cómo baja la temperatura central. En la hipotermia leve el cuerpo reacciona: hay temblor y taquicardia. En la moderada el temblor desaparece, el corazón se enlentece y aparece la onda J de Osborn en el electrocardiograma. En la grave, el riesgo es la fibrilación ventricular. Y al recalentar se sube de a poco, medio a dos grados por hora, con el tronco primero y manos suaves.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la víctima rescatada a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ahogamiento e hipotermia: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Ahogado en paro', '5 ventilaciones y luego compresiones', 'Heimlich o boca abajo para drenar agua'],
          say: 'Ahogado en paro: cinco ventilaciones y luego compresiones. El error es intentar sacar el agua con Heimlich o poniéndolo boca abajo.' },
        { cells: ['Ahogado asintomático, Rx y SatO2 normales', 'Observar 6 a 8 horas', 'Alta inmediata, o antibióticos y corticoides'],
          say: 'Ahogado asintomático con radiografía y saturación normales: se observa de seis a ocho horas. El error es el alta inmediata, o dar antibióticos y corticoides profilácticos.' },
        { cells: ['Hipotermia leve', 'Pasivo y externo', 'Sobretratar con calor interno'],
          say: 'Hipotermia leve: recalentamiento pasivo y externo. No necesita medidas invasivas.' },
        { cells: ['Hipotermia moderada con bradicardia', 'Activo externo, suero tibio y monitor', 'Atropina o marcapaso; manipular bruscamente'],
          say: 'Hipotermia moderada con bradicardia: recalentamiento activo externo, suero tibio y monitor. El error es dar atropina o marcapaso, o mover al paciente con brusquedad.' },
        { cells: ['Hipotermia grave o paro', 'Recalentamiento interno, ECMO; RCP prolongada', 'Suspender la reanimación estando frío'],
          say: 'Hipotermia grave o paro: recalentamiento interno, ECMO y reanimación prolongada. El error es declararlo muerto mientras sigue frío.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un excursionista de 35 años es rescatado de una grieta en una montaña. Lleva varias horas expuesto al frío. No responde, no respira y no se palpa pulso carotídeo. La piel está rígida y fría, con temperatura rectal de 26 °C. El monitor muestra fibrilación ventricular. Hay un equipo de rescate de montaña entrenado en el lugar, y el hospital con circulación extracorpórea está a 90 minutos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Declarar el fallecimiento por la rigidez y la ausencia de pulso' },
        { letter: 'B', text: 'Iniciar RCP, dar hasta tres descargas, limitar fármacos y mantener la reanimación mientras se traslada para recalentamiento con circulación extracorpórea' },
        { letter: 'C', text: 'Administrar atropina y adrenalina en dosis repetidas desde el inicio' },
        { letter: 'D', text: 'Suspender la reanimación a los 20 minutos si no hay respuesta' },
        { letter: 'E', text: 'Baño de agua a 45 °C para recalentarlo rápido y reevaluar después' },
      ],
      correct: 'B',
      explanation: 'Hipotermia grave (menor de 28 °C) con paro: la reanimación se inicia y se mantiene, con hasta tres descargas; con menos de 30 °C se limitan los fármacos y las descargas hasta recalentar. El tratamiento definitivo es el recalentamiento interno, con circulación extracorpórea, por lo que se traslada a un centro que la tenga. "Nadie está muerto hasta que está tibio y muerto". No se declara la muerte ni se suspende estando frío, y el recalentamiento brusco por fuera puede provocar colapso por vasodilatación.',
      say: {
        stem: 'Un excursionista de treinta y cinco años es rescatado de una grieta en la montaña, después de varias horas expuesto al frío. No responde, no respira y no tiene pulso. La piel está fría y rígida, la temperatura rectal es veintiséis grados, y el monitor muestra fibrilación ventricular. El hospital con circulación extracorpórea está a noventa minutos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: declarar el fallecimiento; reanimar con hasta tres descargas, limitar fármacos y trasladar para recalentamiento extracorpóreo; atropina y adrenalina repetidas; suspender a los veinte minutos; o un baño a cuarenta y cinco grados. Piénsalo.',
        answer: 'Es la B. Es una hipotermia grave con paro: se reanima, se da hasta tres descargas y se limitan los fármacos mientras la temperatura sea menor de treinta grados. El tratamiento definitivo es recalentar por dentro, con circulación extracorpórea, así que se traslada con la reanimación en marcha. La A es el error más peligroso: nadie está muerto hasta que está tibio y muerto. Y la E tienta, pero un recalentamiento brusco por fuera puede provocar un colapso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 4 años es sacado de una piscina tras 4 minutos sumergido. No respira, no responde y tiene pulso lento.',
      question: '¿Cuál es el primer paso de la reanimación?',
      options: [
        { letter: 'A', text: 'Maniobra de Heimlich para expulsar el agua' },
        { letter: 'B', text: 'Colocarlo boca abajo para drenar el agua' },
        { letter: 'C', text: 'Ventilaciones de rescate con oxígeno y luego compresiones si no hay pulso' },
        { letter: 'D', text: 'Solo compresiones torácicas sin ventilaciones' },
        { letter: 'E', text: 'Esperar al desfibrilador antes de iniciar maniobras' },
      ],
      correct: 'C',
      explanation: 'El ahogamiento causa paro por hipoxia, por lo que la ventilación es la prioridad. No se intenta drenar el agua porque retrasa la reanimación y aumenta la aspiración.',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. Un niño de cuatro años es sacado de una piscina tras cuatro minutos sumergido. No respira, no responde y tiene el pulso lento.',
        question: '¿Cuál es el primer paso de la reanimación?',
        options: 'Las opciones: maniobra de Heimlich; colocarlo boca abajo; ventilaciones de rescate con oxígeno y luego compresiones si no hay pulso; solo compresiones; o esperar al desfibrilador. Piénsalo.',
        answer: 'Es la C. El paro del ahogado es hipóxico, así que lo primero es ventilar, con oxígeno. La A y la B son las trampas: intentar sacar el agua no sirve y retrasa la reanimación. Y la D, solo compresiones, tienta, pero aquí el problema no es el ritmo, es el oxígeno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 88 años que vive sola es encontrada en el suelo en invierno. Está somnolienta, con temperatura rectal de 30 °C, FC 44 por minuto y ondas J de Osborn en el ECG.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Atropina y marcapaso transcutáneo inmediato' },
        { letter: 'B', text: 'Recalentamiento activo externo y suero tibio, con monitor y manipulación cuidadosa' },
        { letter: 'C', text: 'Iniciar compresiones torácicas' },
        { letter: 'D', text: 'Baño de agua a 45 °C' },
        { letter: 'E', text: 'Solo frazadas a temperatura ambiente' },
      ],
      correct: 'B',
      explanation: 'Con 30 °C la hipotermia es moderada; la bradicardia es fisiológica y no responde a atropina, y la manipulación brusca puede producir fibrilación ventricular. Corresponde recalentamiento activo externo y suero tibio, con monitor y manipulación cuidadosa.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Una mujer de ochenta y ocho años que vive sola es encontrada en el suelo, en invierno. Está somnolienta, con temperatura rectal de treinta grados, frecuencia cardíaca de cuarenta y cuatro y ondas J de Osborn en el electrocardiograma.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: atropina y marcapaso; recalentamiento activo externo y suero tibio con monitor y manipulación cuidadosa; compresiones torácicas; un baño a cuarenta y cinco grados; o solo frazadas. Piénsalo.',
        answer: 'Es la B. Con treinta grados es una hipotermia moderada, y la bradicardia es fisiológica: no responde a atropina ni a marcapaso. Se recalienta de forma activa por fuera, con suero tibio, monitor y manos suaves. La C tienta, pero la paciente no está en paro: tiene un corazón lento, que perfunde, y no se comprime. Y las frazadas solas, la E, son para la leve.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un joven rescatado del mar es observado y está asintomático, con SatO2 98% y radiografía de tórax normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta inmediata sin observación' },
        { letter: 'B', text: 'Antibióticos profilácticos por 7 días' },
        { letter: 'C', text: 'Corticoides endovenosos' },
        { letter: 'D', text: 'Observación por 6 a 8 horas antes del alta' },
        { letter: 'E', text: 'Intubación electiva' },
      ],
      correct: 'D',
      explanation: 'El edema pulmonar por aspiración puede aparecer tardíamente, por lo que se observa por 6 a 8 horas. No se indican antibióticos ni corticoides profilácticos.',
      say: {
        stem: 'Una última pregunta representativa del banco EUNACOM. Un joven es rescatado del mar y está asintomático, con saturación de noventa y ocho por ciento y radiografía de tórax normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta inmediata; antibióticos por siete días; corticoides endovenosos; observación de seis a ocho horas antes del alta; o intubación electiva. Piénsalo.',
        answer: 'Es la D. Aunque hoy esté bien, el edema por aspiración puede aparecer horas después, así que se observa de seis a ocho horas. La A tienta, porque el examen está normal, pero ese es justo el riesgo. Y ni antibióticos ni corticoides se dan de manera profiláctica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: ahogamiento e hipotermia',
      cards: [
        { title: 'Ahogamiento', tag: 'El paro es hipóxico', kind: 'key', items: [
          { t: 'Ventilar primero: 5 ventilaciones de rescate', d: 'Luego compresiones',
            say: 'Cerremos con las reglas de oro. En el ahogamiento el paro es hipóxico: la reanimación parte con cinco ventilaciones de rescate y luego compresiones.' },
          { t: 'No drenar el agua', d: 'Ni Heimlich ni boca abajo',
            say: 'No se pierde tiempo intentando drenar el agua, ni con Heimlich ni boca abajo.' },
          { t: 'Todo ahogado se observa 6 a 8 horas', d: 'Edema o SDRA tardío',
            say: 'Y todo ahogado se observa de seis a ocho horas, porque puede desarrollar edema pulmonar o distrés tardío.' },
        ] },
        { title: 'Hipotermia', tag: 'Temperatura central < 35 °C', kind: 'alert', items: [
          { t: 'Leve 32-35, moderada 28-32, grave < 28', d: 'Ondas J de Osborn',
            say: 'La hipotermia es una temperatura central menor de treinta y cinco grados: leve, moderada y grave según el grado, con ondas J de Osborn.' },
          { t: 'Recalentamiento escalonado y manos suaves', d: 'La bradicardia no responde a atropina',
            say: 'Se recalienta de forma escalonada y se manipula con suavidad, por el riesgo de fibrilación ventricular. La bradicardia no responde a atropina.' },
          { t: 'Nadie está muerto hasta que está tibio', d: 'RCP hasta recalentar',
            say: 'Si te llevas una sola idea de hoy: al ahogado se le ventila primero, y al hipotérmico no se le declara muerto mientras siga frío. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ahogamiento e hipotermia accidental',
    root: N('start', 'Víctima rescatada', 'Respira? Temperatura central',
      'Rescataron a una persona del agua o del frío. Lo primero es ver si responde y respira, y medir la temperatura central.',
      ['No respira, sin pulso', N('alert', 'Paro cardíaco', 'Casi siempre hipóxico en ahogamiento',
        'Si no respira y no tiene pulso, es un paro. En el ahogamiento el paro es hipóxico, así que no pierdes tiempo en drenar el agua.',
        ['5 ventilaciones y luego compresiones', N('do', 'RCP con oxígeno al 100%', '30:2; 15:2 en niño con 2 rescatistas',
          'Das cinco ventilaciones de rescate y sigues con compresiones, con oxígeno al cien por ciento y desfibrilador si corresponde. Si está frío, no suspendes hasta recalentar.')],
      )],
      ['Respira, pero temperatura < 35 °C', N('q', 'Hipotermia: ¿qué grado?', 'Temperatura central',
        'Si respira pero la temperatura central es menor de treinta y cinco grados, es una hipotermia. Defines el grado.',
        ['Leve, 32 a 35 °C', N('ok', 'Recalentamiento pasivo y externo', 'Mantas y ambiente cálido',
          'Si es leve, mantas, ambiente cálido y bebidas calientes dulces.')],
        ['Moderada, 28 a 32 °C', N('do', 'Activo externo y suero tibio', 'Monitor; manos suaves',
          'Si es moderada, recalentamiento activo externo, suero tibio a treinta y ocho a cuarenta y dos grados y monitor, con manipulación cuidadosa.')],
        ['Grave, < 28 °C', N('refer', 'Recalentamiento interno, ECMO', 'Centro con circulación extracorpórea',
          'Si es grave, recalentamiento interno y circulación extracorpórea, en un centro que la tenga.')],
      )],
      ['Ahogado asintomático', N('ok', 'Observar 6 a 8 horas', 'Sin antibióticos ni corticoides',
        'Si estuvo bajo el agua pero hoy está asintomático, con radiografía y saturación normales, se observa de seis a ocho horas antes del alta, sin antibióticos ni corticoides.')],
    ),
  },
};
