// Clase 10.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-13).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-13 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo aparece el temblor, qué lo acompaña y cómo se resuelve la distonía aguda en urgencias',
      say: 'Bienvenidos. Hoy vemos dos temas que el EUNACOM pregunta mucho. El primero es el temblor esencial, el trastorno del movimiento más frecuente, y cómo separarlo del temblor del Parkinson. El segundo es una urgencia: la distonía aguda por fármacos, que se resuelve en minutos si sabes qué dar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Semiología',
      title: '¿En qué momento aparece el temblor?',
      nodes: [
        { id: 'obs', col: 0, row: 2, k: 'start', t: 'Observar el temblor', s: 'Reposo, postura y acción' },
        { id: 'rep', col: 2, row: 0, k: 'q', t: 'Temblor de reposo', s: 'Extremidad relajada · 4–6 Hz' },
        { id: 'pos', col: 2, row: 2, k: 'q', t: 'Temblor postural', s: 'Brazos extendidos al frente' },
        { id: 'int', col: 2, row: 4, k: 'q', t: 'Temblor de intención', s: 'Empeora al acercarse al blanco' },
        { id: 'ep', col: 4, row: 0, k: 'effect', t: 'Enfermedad de Parkinson', s: 'Cede con el movimiento' },
        { id: 'te', col: 4, row: 2, k: 'effect', t: 'Temblor esencial', s: 'O fisiológico exagerado' },
        { id: 'cer', col: 4, row: 4, k: 'effect', t: 'Cerebelo', s: 'EM, infarto, fenitoína, alcohol' },
      ],
      edges: [
        { from: 'obs', to: 'rep' }, { from: 'obs', to: 'pos' }, { from: 'obs', to: 'int' },
        { from: 'rep', to: 'ep' }, { from: 'pos', to: 'te' }, { from: 'int', to: 'cer' },
      ],
      steps: [
        { show: ['obs'], note: 'La pregunta clave: ¿cuándo tiembla?',
          say: 'Frente a un temblor, la primera pregunta no es cuánto tiembla, sino cuándo tiembla. Por eso se observa en tres momentos: en reposo, al mantener una postura, y durante un movimiento dirigido.' },
        { show: ['rep', 'ep'], note: 'Reposo: Parkinson',
          say: 'El temblor de reposo aparece con la extremidad relajada y apoyada, por ejemplo con las manos en el regazo. Es lento, de cuatro a seis hercios, y desaparece al iniciar un movimiento. Es el temblor de la enfermedad de Parkinson.' },
        { show: ['pos', 'te'], note: 'Postural: esencial',
          say: 'El temblor postural aparece al sostener una postura contra la gravedad, como extender los brazos al frente. Es el típico del temblor esencial, y también del temblor fisiológico exagerado.' },
        { show: ['int', 'cer'], note: 'Intención: cerebelo',
          say: 'Y el temblor de intención aparece durante un movimiento con una meta, y empeora al acercarse al blanco, como en la prueba índice-nariz. Es el sello del cerebelo: esclerosis múltiple, infartos cerebelosos, o intoxicación por fenitoína o alcohol.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Temblor esencial',
      title: 'El trastorno del movimiento más frecuente',
      cards: [
        { title: 'Cómo se presenta', tag: 'Postural y cinético', kind: 'key', items: [
          { t: 'Bilateral, en las manos', d: '8–12 Hz, simétrico o casi',
            say: 'El temblor esencial es el trastorno del movimiento más común. Afecta hasta a un cuatro a cinco por ciento de los mayores de sesenta y cinco. Es un temblor postural y cinético, bilateral, de las manos, rápido, de ocho a doce hercios, simétrico o apenas asimétrico.' },
          { t: 'Le cuesta la sopa y el vaso', d: 'Escritura temblorosa, espiral alterada',
            say: 'Por eso el paciente te cuenta que le cuesta comer sopa con la cuchara, tomar un vaso lleno sin derramar, abotonarse o escribir.' },
          { t: 'Cabeza y voz', d: 'Titubeo "no-no" o "sí-sí"',
            say: 'Con frecuencia afecta también la cabeza, con un titubeo de no-no o de sí-sí, y la voz, que se hace temblorosa.' },
        ] },
        { title: 'Claves diagnósticas', tag: 'Se preguntan', kind: 'criteria', items: [
          { t: 'Familiar', d: 'Autosómico dominante en más de la mitad',
            say: 'Hay tres claves que se preguntan. La primera: es familiar. Tiene herencia autosómica dominante en más de la mitad de los casos, así que pregunta por los padres.' },
          { t: 'Mejora con el alcohol', d: 'En la mayoría de los pacientes',
            say: 'La segunda: una cantidad moderada de alcohol, como una copa de vino, lo mejora de forma transitoria en la mayoría de los pacientes. Es un dato anamnésico de gran valor.' },
          { t: 'Examen neurológico normal', d: 'Sin bradicinesia, sin rigidez',
            say: 'Y la tercera: fuera del temblor, el examen neurológico es normal. No hay bradicinesia, no hay rigidez, y la marcha es estable.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Temblor esencial: propranolol o primidona',
      cards: [
        { title: 'Primera línea', tag: 'Betabloqueador', kind: 'pharma', items: [
          { t: 'Propranolol 40–160 mg/día', d: 'En 2 a 3 tomas',
            say: 'El tratamiento de primera línea del temblor esencial que molesta es el propranolol, un betabloqueador no selectivo, en dosis de cuarenta a ciento sesenta miligramos al día, repartidos en dos o tres tomas.' },
          { t: 'Contraindicaciones', d: 'Asma, bloqueo AV, bradicardia severa',
            say: 'Antes de indicarlo, pregunta por sus contraindicaciones: asma bronquial, bloqueo auriculoventricular y bradicardia severa.' },
        ] },
        { title: 'Alternativa', tag: 'Anticonvulsivante', kind: 'normal', items: [
          { t: 'Primidona 25–250 mg/noche', d: 'Titular lento: sedación y mareo',
            say: 'La alternativa es la primidona, un anticonvulsivante barbitúrico, de veinticinco a doscientos cincuenta miligramos en la noche. Se titula lento, porque da sedación y mareos.' },
          { t: 'Ambos reducen la amplitud', d: 'Entre 50 y 70 %',
            say: 'Con cualquiera de los dos, la amplitud del temblor baja entre un cincuenta y un setenta por ciento. Y fíjate en lo que no va: la levodopa no sirve para el temblor esencial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Esencial, fisiológico o Parkinson',
      cards: [
        { title: 'Fisiológico exagerado', tag: 'Postural, fino, reversible', kind: 'alert', items: [
          { t: 'Exceso adrenérgico', d: 'Ansiedad, cafeína, abstinencia alcohólica',
            say: 'El primer diferencial es el temblor fisiológico exagerado. También es postural, fino y rápido, pero es transitorio y tiene una causa adrenérgica: ansiedad, cafeína o abstinencia de alcohol.' },
          { t: 'Hipertiroidismo: pedir TSH', d: 'Y fármacos: salbutamol, litio, valproato',
            say: 'Siempre descarta el hipertiroidismo con una TSH. Y revisa los fármacos: salbutamol, litio, ácido valproico, corticoides y antidepresivos tricíclicos.' },
        ] },
        { title: 'Esencial vs Parkinson', tag: 'El contraste clásico', kind: 'key', items: [
          { t: 'Esencial: acción, bilateral, cabeza', d: 'No cede al moverse, sin bradicinesia',
            say: 'Y el contraste más preguntado. El temblor esencial es de acción, bilateral y simétrico, no cede con el movimiento, afecta la cabeza, y no hay bradicinesia ni rigidez.' },
          { t: 'Parkinson: reposo, asimétrico', d: 'Bradicinesia, rueda dentada, hipomimia',
            say: 'El del Parkinson es de reposo, asimétrico, cede con el movimiento, y siempre se acompaña de bradicinesia, hipomimia y rigidez en rueda dentada.' },
          { t: 'Pierna que tiembla en reposo', d: 'Es Parkinson, no esencial',
            say: 'Y una regla de oro: el temblor esencial no afecta las piernas en reposo. Si tiembla una pierna en reposo, piensa en Parkinson.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia extrapiramidal',
      title: 'Distonía aguda: bloqueo D2 y exceso colinérgico',
      nodes: [
        { id: 'far', col: 0, row: 1, k: 'cause', t: 'Metoclopramida EV o haloperidol', s: 'Minutos a 48 horas' },
        { id: 'd2', col: 1, row: 1, k: 'mech', t: 'Bloqueo D2 agudo', s: 'En el estriado' },
        { id: 'ach', col: 2, row: 1, k: 'mech', t: 'Exceso colinérgico relativo', s: 'Hiperactividad muscarínica' },
        { id: 'ocu', col: 3, row: 0, k: 'alert', t: 'Crisis oculógira', s: 'Mirada fija hacia arriba' },
        { id: 'tor', col: 3, row: 1, k: 'alert', t: 'Tortícolis aguda', s: 'Esternocleidomastoideo' },
        { id: 'len', col: 3, row: 2, k: 'alert', t: 'Lengua, trismus, opistótonos', s: 'Contracción dolorosa sostenida' },
        { id: 'bip', col: 4, row: 1, k: 'good', t: 'Biperideno 2,5–5 mg IM o EV', s: 'Alivio en 10–15 min' },
        { id: 'vo', col: 4, row: 3, k: 'good', t: 'Biperideno oral 24–48 h', s: '2 mg c/8–12 h' },
      ],
      edges: [
        { from: 'far', to: 'd2' }, { from: 'd2', to: 'ach' },
        { from: 'ach', to: 'ocu' }, { from: 'ach', to: 'tor' }, { from: 'ach', to: 'len' },
        { from: 'tor', to: 'bip' }, { from: 'bip', to: 'vo', label: 'luego' },
      ],
      steps: [
        { show: ['far'], note: 'La escena clásica del examen',
          say: 'Cambiemos a la urgencia. La escena clásica es un paciente joven que consulta por náuseas o vómitos, o un cólico biliar, y recibe metoclopramida endovenosa. O un paciente agitado que recibe haloperidol. Minutos u horas después, habitualmente en las primeras veinticuatro a cuarenta y ocho horas, aparece el cuadro.' },
        { show: ['d2', 'ach'], note: 'Se rompe el equilibrio dopamina–acetilcolina',
          say: 'El mecanismo explica el tratamiento. El bloqueo agudo de los receptores D dos del estriado deja a la acetilcolina sin contrapeso: hay una hiperactividad colinérgica muscarínica relativa.' },
        { show: ['ocu', 'tor', 'len'], note: 'Contracciones tónicas, sostenidas y dolorosas',
          say: 'Y aparecen contracciones tónicas, sostenidas y muy dolorosas. La crisis oculógira, con la mirada fija hacia arriba. La tortícolis aguda, por contracción del esternocleidomastoideo. La protrusión de la lengua, el trismus, o el opistótonos, con la columna en hiperextensión.' },
        { show: ['bip'], note: 'Si sobra acetilcolina, se da un anticolinérgico',
          say: 'Si el problema es un exceso de acetilcolina, la solución es un anticolinérgico central: biperideno, dos coma cinco a cinco miligramos intramuscular o endovenoso lento. O difenhidramina si no hay biperideno. El alivio es dramático, en diez a quince minutos. No es una crisis epiléptica, ni un ataque cerebrovascular, ni un cuadro psicógeno, y no necesita un TAC.' },
        { show: ['vo'], note: 'Evitar la recurrencia',
          say: 'Y un detalle que se pregunta: después se deja biperideno oral, dos miligramos cada ocho a doce horas, por veinticuatro a cuarenta y ocho horas, para que la distonía no vuelva mientras se elimina el fármaco bloqueador.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: qué temblor es, y qué hacer si lo que ves no es un temblor, sino una distonía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Diagnóstico y conducta', 'Error frecuente'],
      rows: [
        { cells: ['Temblor postural bilateral, cabeza, madre igual', 'Temblor esencial · propranolol', 'Dar levodopa'],
          say: 'Repasemos las trampas. Temblor postural bilateral, con temblor de la cabeza y una madre igual: temblor esencial, y se trata con propranolol. La levodopa es el error.' },
        { cells: ['Temblor esencial en asmático', 'Primidona', 'Indicar propranolol'],
          say: 'Si ese paciente es asmático, el propranolol está contraindicado, y la alternativa es la primidona.' },
        { cells: ['Temblor fino + baja de peso y palpitaciones', 'Pedir TSH', 'Etiquetarlo como esencial'],
          say: 'Temblor fino con baja de peso o palpitaciones: pide una TSH antes de etiquetarlo como esencial.' },
        { cells: ['Temblor de reposo asimétrico + bradicinesia', 'Parkinson', 'Propranolol'],
          say: 'Temblor de reposo asimétrico con bradicinesia es Parkinson, y ahí el propranolol no sirve.' },
        { cells: ['Temblor al acercarse al blanco + ataxia', 'Cerebelo · tratar la causa', 'Propranolol'],
          say: 'Temblor que empeora al acercarse al blanco, con ataxia y dismetría: es cerebeloso, y se trata la causa.' },
        { cells: ['Tortícolis o crisis oculógira tras metoclopramida', 'Distonía aguda · biperideno IM o EV', 'Pedir TAC o dar anticonvulsivante'],
          say: 'Tortícolis o crisis oculógira después de metoclopramida o haloperidol: distonía aguda, y biperideno. Pedir un TAC o dar un anticonvulsivante es el error.' },
        { cells: ['Rigidez generalizada + fiebre + compromiso de conciencia', 'No es distonía aguda', 'Tratarlo como distonía'],
          say: 'Y ojo: la distonía aguda es focal, sin fiebre ni rigidez generalizada. Si hay rigidez generalizada, fiebre y compromiso de conciencia, es otra cosa, y lo vamos a ver en la última pregunta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 23 años, sin antecedentes, consulta en urgencia por náuseas y dolor cólico epigástrico tras una comida grasa. Recibe analgesia y metoclopramida 10 mg EV. A los 40 minutos presenta ojos desviados de forma fija hacia arriba, contractura cervical dolorosa con rotación del mentón hacia la izquierda y protrusión de la lengua con dificultad para hablar. Está angustiada. PA 125/75 mmHg, FC 82 lpm, afebril, Glasgow 15, pupilas isocóricas reactivas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Diazepam 10 mg EV y TAC de cerebro' },
        { letter: 'B', text: 'Biperideno 2,5 a 5 mg IM o EV lento' },
        { letter: 'C', text: 'Haloperidol 5 mg IM' },
        { letter: 'D', text: 'Propranolol 40 mg oral' },
        { letter: 'E', text: 'Levodopa/carbidopa oral' },
      ],
      correct: 'B',
      explanation: 'Crisis oculógira, tortícolis y distonía lingual 40 minutos después de metoclopramida EV: distonía aguda por fármacos. El tratamiento es un anticolinérgico central (biperideno IM o EV lento), con alivio en 10–15 minutos y mantención oral por 24–48 horas. No es una crisis epiléptica ni requiere TAC; el haloperidol la empeoraría.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintitrés años, sana, consulta en urgencia por náuseas y cólico epigástrico después de una comida grasa. Recibe metoclopramida endovenosa. Cuarenta minutos después tiene los ojos fijos hacia arriba, una contractura dolorosa del cuello con el mentón girado a la izquierda, y la lengua afuera. Está angustiada, con signos vitales normales, afebril y con Glasgow quince.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: diazepam y TAC de cerebro, biperideno intramuscular o endovenoso, haloperidol, propranolol, o levodopa. Piénsalo.',
        answer: 'Es la B, biperideno. Crisis oculógira, tortícolis y distonía de la lengua minutos después de la metoclopramida: distonía aguda. Sobra acetilcolina, y el anticolinérgico la resuelve en diez a quince minutos. El diazepam con TAC es el distractor, porque trata el cuadro como una convulsión, pero la paciente está lúcida y no es una crisis epiléptica. Y el haloperidol, otro bloqueador D dos, la empeoraría.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 161',
      stem: 'Paciente masculino, de 71 años de edad, con un cuadro de 2 años de evolución de temblor de ambas extremidades superiores, lo cual le sucede al escribir, tomar un objeto, o al usar cubiertos. Toma alprazolam 0,5 mg/dl, dos veces por día por cuadro ansioso. Al examen físico no tiene temblor de reposo y se observan reflejos osteotendíneos conservados, con tono muscular y sensibilidad normal. El temblor se acentúa al tratar de tomar un objeto.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hipertiroidismo' },
        { letter: 'B', text: 'Enfermedad de Parkinson' },
        { letter: 'C', text: 'Temblor esencial' },
        { letter: 'D', text: 'Temblor por ansiedad' },
        { letter: 'E', text: 'Temblor por medicamentos' },
      ],
      correct: 'C',
      explanation: 'Temblor bilateral de acción de 2 años (al escribir, tomar objetos, usar cubiertos), sin temblor de reposo y con tono normal: temblor esencial. El alprazolam no causa temblor; más bien lo atenúa.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil dieciséis. Hombre de setenta y un años con dos años de temblor de ambas manos al escribir, tomar objetos o usar cubiertos. Toma alprazolam por ansiedad. No tiene temblor de reposo, y el tono, los reflejos y la sensibilidad son normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hipertiroidismo, Parkinson, temblor esencial, temblor por ansiedad, o temblor por medicamentos. Piénsalo.',
        answer: 'Es la C, temblor esencial. Bilateral, de acción, de dos años, sin temblor de reposo y con tono normal, o sea, sin rigidez. Los distractores son la ansiedad y el alprazolam, pero el alprazolam no da temblor, y un temblor por ansiedad sería transitorio, no de dos años. Sin temblor de reposo ni rigidez, tampoco es Parkinson.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 85',
      stem: 'Un paciente de 72 años consulta por temblor ambas extremidades, que aparece al realizar sus actividades habituales. Al examen físico se observa el mencionado temblor, sin otras alteraciones en la exploración neurológica.',
      question: '¿Cuál es el fármaco más adecuado para el manejo de sus síntomas?',
      options: [
        { letter: 'A', text: 'Diazepam' },
        { letter: 'B', text: 'Alprazolam' },
        { letter: 'C', text: 'Propranolol' },
        { letter: 'D', text: 'Levodopa' },
        { letter: 'E', text: 'Sertralina' },
      ],
      correct: 'C',
      explanation: 'Temblor de acción bilateral con examen neurológico por lo demás normal: temblor esencial. El tratamiento de primera línea es propranolol (o primidona).',
      say: {
        stem: 'La segunda, del EUNACOM de julio de dos mil veinticuatro. Hombre de setenta y dos años con temblor de ambas extremidades que aparece al hacer sus actividades. El resto del examen neurológico es normal.',
        question: '¿Cuál es el fármaco más adecuado?',
        options: 'Las opciones: diazepam, alprazolam, propranolol, levodopa o sertralina. Piénsalo.',
        answer: 'Es la C, propranolol. Temblor de acción bilateral con un examen por lo demás normal es temblor esencial, y la primera línea es el propranolol, o la primidona. La levodopa es el distractor, pero sin bradicinesia ni rigidez no hay Parkinson. Y las benzodiacepinas no son el tratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 38',
      stem: 'Un paciente de 18 años, adicto a la pasta base, presenta un episodio psicótico, en relación al consumo, el que es manejado con haloperidol intramuscular. Al día siguiente presenta contracción tónica del cuello, que desvía la cabeza hacia la izquierda, con intenso dolor.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Distonía aguda' },
        { letter: 'B', text: 'Acatisia' },
        { letter: 'C', text: 'Síndrome neuroléptico maligno' },
        { letter: 'D', text: 'Disquinesia tardía' },
        { letter: 'E', text: 'Parkinsonismo farmacológico' },
      ],
      correct: 'A',
      explanation: 'Contracción tónica y dolorosa del cuello dentro de las 24–48 horas tras haloperidol: distonía aguda (tortícolis). Se trata con biperideno IM o EV.',
      say: {
        stem: 'La tercera, del EUNACOM de diciembre de dos mil dieciocho. Joven de dieciocho años con un episodio psicótico por pasta base, tratado con haloperidol intramuscular. Al día siguiente tiene una contracción tónica del cuello, que desvía la cabeza a la izquierda, con mucho dolor.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: distonía aguda, acatisia, síndrome neuroléptico maligno, disquinesia tardía, o parkinsonismo farmacológico. Piénsalo.',
        answer: 'Es la A, distonía aguda. Contracción tónica y dolorosa del cuello, al día siguiente de un bloqueador D dos: una tortícolis aguda. El tiempo es la clave: la distonía aparece en las primeras horas o días. El parkinsonismo farmacológico es subagudo, de semanas a meses, y la disquinesia tardía, como su nombre lo dice, es tardía. El tratamiento, biperideno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 147',
      stem: 'Un lactante está en tratamiento por reflujo gastroesofágico con medicamento en gotas. Presenta un cuadro de trismus, nistagmus, más hiperextensión del cuello.',
      question: '¿Qué fármaco es más probable que esté recibiendo?',
      options: [
        { letter: 'A', text: 'Omeprazol' },
        { letter: 'B', text: 'Cisaprida' },
        { letter: 'C', text: 'Metoclopramidad' },
        { letter: 'D', text: 'Domperidona' },
        { letter: 'E', text: 'Difenhidramina' },
      ],
      correct: 'C',
      explanation: 'Trismus e hiperextensión del cuello en un lactante que recibe un procinético: distonía aguda. La metoclopramida cruza la barrera hematoencefálica y es la que más reacciones extrapiramidales produce; la domperidona casi no la cruza. La difenhidramina es un tratamiento de la distonía, no su causa.',
      say: {
        stem: 'La cuarta, del EUNACOM de julio de dos mil quince. Un lactante recibe un medicamento en gotas por reflujo, y presenta trismus, movimientos de los ojos e hiperextensión del cuello.',
        question: '¿Qué fármaco es más probable que esté recibiendo?',
        options: 'Las opciones: omeprazol, cisaprida, metoclopramida, domperidona o difenhidramina. Piénsalo.',
        answer: 'Es la C, metoclopramida. Trismus e hiperextensión del cuello son una distonía aguda, y el procinético que cruza la barrera hematoencefálica es la metoclopramida. La domperidona es el distractor: también es un antagonista dopaminérgico, pero casi no entra al cerebro. Y la difenhidramina es al revés: es un tratamiento de la distonía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 109',
      stem: 'Paciente en tratamiento con flufenazina, presenta alteración de conciencia, fiebre, rigidez de extremidades y taquicardia.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipertermia maligna anestésica' },
        { letter: 'B', text: 'Síndrome serotoninérgico' },
        { letter: 'C', text: 'Crisis distónica aguda' },
        { letter: 'D', text: 'Síndrome neuroléptico maligno' },
        { letter: 'E', text: 'Encefalitis autoinmune' },
      ],
      correct: 'D',
      explanation: 'Neuroléptico + fiebre + rigidez de extremidades + compromiso de conciencia + taquicardia: síndrome neuroléptico maligno. La distonía aguda es focal, sin fiebre, sin rigidez generalizada y con conciencia conservada.',
      say: {
        stem: 'Y la última, del EUNACOM de enero de dos mil veintitrés. Paciente que usa flufenazina, un antipsicótico, y presenta compromiso de conciencia, fiebre, rigidez de las extremidades y taquicardia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hipertermia maligna anestésica, síndrome serotoninérgico, crisis distónica aguda, síndrome neuroléptico maligno, o encefalitis autoinmune. Piénsalo.',
        answer: 'Es la D, síndrome neuroléptico maligno. La crisis distónica es el distractor, porque también viene de un neuroléptico, pero la distonía aguda es focal, sin fiebre, sin rigidez generalizada y con el paciente lúcido. Aquí hay fiebre, rigidez de todas las extremidades y compromiso de conciencia: es otro cuadro, mucho más grave.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Temblor', tag: '¿Cuándo tiembla?', kind: 'key', items: [
          { t: 'Reposo: Parkinson · Postural: esencial', d: 'Intención: cerebelo',
            say: 'Cerremos con las reglas de oro. El temblor se clasifica por cuándo aparece. De reposo, Parkinson. Postural, esencial. De intención, cerebelo.' },
          { t: 'Esencial: familiar, alcohol, examen normal', d: 'Cabeza y voz, nunca pierna en reposo',
            say: 'El esencial es bilateral, familiar, mejora con el alcohol, afecta la cabeza y la voz, y el resto del examen es normal.' },
          { t: 'Propranolol o primidona', d: 'Primidona si hay asma',
            say: 'Se trata con propranolol, o con primidona si el propranolol está contraindicado.' },
        ] },
        { title: 'Distonía aguda', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Metoclopramida o haloperidol', d: 'Oculógira, tortícolis, lengua, trismus',
            say: 'La distonía aguda aparece minutos a horas después de metoclopramida o haloperidol, como crisis oculógira, tortícolis, trismus o protrusión de la lengua.' },
          { t: 'Biperideno IM o EV', d: 'Luego oral 24–48 h',
            say: 'Y se trata con biperideno, intramuscular o endovenoso, y después oral por uno o dos días. Si te llevas una sola idea de hoy: al temblor pregúntale cuándo aparece, y a la distonía aguda respóndele con un anticolinérgico. En la próxima clase entramos a las demencias, con la enfermedad de Alzheimer. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Temblor y distonía aguda',
    root: N('start', 'Movimiento involuntario', 'Reposo, postura y acción',
      'Paciente con un movimiento involuntario. Lo primero es mirarlo en reposo, en postura y en acción.',
      ['', N('q', '¿Oscila o es una postura fija dolorosa?', 'Temblor vs distonía',
        '¿Es un temblor, que oscila, o es una contracción fija y dolorosa?',
        ['Postura fija', N('q', '¿Recibió un bloqueador D2?', 'Metoclopramida, haloperidol',
          'Si es una postura fija y dolorosa, pregunta si recibió metoclopramida o un antipsicótico en las últimas horas.',
          ['SÍ', N('alert', 'Distonía aguda', 'Oculógira, tortícolis, trismus',
            'Si lo recibió, es una distonía aguda: crisis oculógira, tortícolis, trismus o protrusión de la lengua.',
            ['Tratar', N('do', 'Biperideno 2,5–5 mg IM o EV', 'Luego oral 24–48 h',
              'Se trata con biperideno intramuscular o endovenoso lento, y luego oral por veinticuatro a cuarenta y ocho horas.')])])],
        ['Oscila', N('q', '¿Cuándo aparece el temblor?', 'Reposo, postura o intención',
          'Si es un temblor, la pregunta es cuándo aparece.',
          ['Reposo', N('refer', 'Parkinson', 'Asimétrico, con bradicinesia',
            'Si es de reposo, asimétrico, con bradicinesia, es Parkinson, y se trata como vimos en esa clase.')],
          ['Postura', N('q', '¿TSH, fármacos o cafeína?', 'Descartar fisiológico exagerado',
            'Si es postural, primero descarta un temblor fisiológico exagerado: TSH, fármacos, cafeína o ansiedad.',
            ['Normal', N('ok', 'Temblor esencial', 'Propranolol o primidona',
              'Si todo es normal, y es bilateral, familiar y mejora con el alcohol, es un temblor esencial: propranolol o primidona.')])],
          ['Intención', N('refer', 'Temblor cerebeloso', 'Tratar la causa',
            'Si empeora al acercarse al blanco, con ataxia, es cerebeloso, y se busca la causa.')])])]),
  },
};
