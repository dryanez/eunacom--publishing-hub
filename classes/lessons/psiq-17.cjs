// Clase 17.17 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 2 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-17). Códigos del Perfil: 5.01.1.016 Trastornos de la personalidad y 5.01.3.010 Personalidad: concepto y medición
// (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs psiq-17 y --search "personalidad|límite|limítrofe|borderline|antisocial|esquizoide|evitativo|histriónico|narcisista|dialéctico"):
//   Diciembre 2018 P132 (límite clásico: hijos de distintos padres, autoagresión, intentos suicidas), Julio 2015 P79 (límite con bulimia, impulsividad en alcohol y compras y vacío crónico),
//   Julio 2013 P122 (histriónico: provocativa, coqueta y exagerada), Julio 2016 P58 (evitativo: introvertida con miedo al juicio pero cariñosa con la familia; contraste con fobia social).
// No usadas por repetir: Julio 2024 P98 y Diciembre 2017 P112 (límite), Julio 2015 P84 (evitativo). DESCARTADA: Diciembre 2024 P143 (las alternativas A y B están fusionadas con un comentario
// del autor del banco y el enunciado mezcla TAG con personalidad obsesiva). Fuera de la clase: Diciembre 2025 P71, Diciembre 2019 P171 y Diciembre 2017 P109 (delirante paranoide, clase 12).
// Las preguntas del libro tienen etiqueta «Banco Oficial AEE» sin fecha: no se usan porque hay reales; el caso clínico es la viñeta del libro.
// Imágenes: ninguna. No hay foto verificada de personalidad ni autolesiones en atlas_fotos_verificadas.json ni en classes/media/biblioteca (las cicatrices de autolesión no se muestran).
// Animación: gráfico solo de código (psiq_nuevas.html?v=limite): el ánimo del límite oscila en horas con el miedo al abandono, frente al episodio del bipolar que dura semanas.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastornos de la personalidad: tres clústeres, el límite en crisis y los diferenciales que se preguntan',
      say: 'Bienvenido. Hoy vemos los trastornos de la personalidad. Son diez diagnósticos, y para no perderse se ordenan en tres clústeres: los raros, los dramáticos y los ansiosos. En el examen se pregunta casi siempre lo mismo: reconocer al límite por su viñeta, y distinguir los pares parecidos, como el esquizoide del evitativo. Y como conducta, qué hacer con la paciente que llega a urgencias con cortes en los antebrazos. Partamos por qué es un trastorno de la personalidad.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Qué es un trastorno de la personalidad',
      cards: [
        { title: 'Definición', tag: 'Patrón perdurable', kind: 'key', items: [
          { t: 'Rígido, estable y desadaptativo', d: 'Desde la adolescencia o adultez temprana',
            say: 'Un trastorno de la personalidad es un patrón perdurable, generalizado e inflexible de experiencia interna y de conducta, que se desvía de lo esperado en su cultura. Parte en la adolescencia o en la adultez temprana, es estable en el tiempo y causa malestar o deterioro social y laboral.' },
          { t: 'Egosintónico', d: 'La persona lo vive como parte de sí',
            say: 'Y es egosintónico: la persona lo vive como parte de su identidad. Eso lo diferencia de los trastornos del ánimo, que el paciente siente como algo ajeno que lo aqueja.' },
        ] },
        { title: 'Personalidad normal', tag: 'Temperamento y carácter', kind: 'normal', items: [
          { t: 'Temperamento: lo heredado', d: 'Base biológica',
            say: 'La personalidad es el patrón estable de pensamientos, emociones y conductas de una persona. Se compone del temperamento, que es la base biológica heredada, y del carácter, que es lo aprendido en la historia y en la cultura.' },
          { t: 'Carácter: lo aprendido', d: 'Historia y cultura',
            say: 'Los rasgos pasan a ser un trastorno cuando son rígidos y desadaptativos, y generan deterioro o malestar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clúster A',
      title: 'Raros, excéntricos, distantes',
      cards: [
        { title: 'Paranoide', tag: 'Desconfianza', kind: 'alert', items: [
          { t: 'Suspicacia y rencor', d: 'Interpreta a los otros como malévolos',
            say: 'El clúster A reúne a los raros, y lo común es la dificultad para los vínculos íntimos. El paranoide tiene una desconfianza y una suspicacia generalizadas: interpreta los motivos de los demás como malévolos, guarda rencor persistente y piensa que lo quieren perjudicar. No tiene un delirio fijo.' },
        ] },
        { title: 'Esquizoide', tag: 'Desapego', kind: 'normal', items: [
          { t: 'No desea la relación íntima', d: 'Frío e indiferente a elogios y críticas',
            say: 'El esquizoide muestra desapego social y una expresión emocional restringida. No desea ni disfruta las relaciones íntimas, ni siquiera con la familia, prefiere actividades solitarias y es indiferente a los elogios y a las críticas.' },
        ] },
        { title: 'Esquizotípico', tag: 'Rareza cognitiva', kind: 'criteria', items: [
          { t: 'Pensamiento mágico, ideas de referencia', d: 'Lenguaje y conducta excéntricos',
            say: 'El esquizotípico tiene malestar en las relaciones íntimas, distorsiones cognitivas y perceptivas y una conducta excéntrica: pensamiento mágico, como creer en la telepatía, ideas de referencia y lenguaje extravagante. No llega a una psicosis franca.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clúster B',
      title: 'Dramáticos, emocionales, impulsivos',
      cards: [
        { title: 'Límite y antisocial', tag: 'Impulsivos', kind: 'alert', items: [
          { t: 'Límite: inestabilidad en todo', d: 'Relaciones, autoimagen y afectos',
            say: 'El clúster B reúne a los dramáticos. El límite, o borderline, tiene inestabilidad en las relaciones, en la autoimagen y en los afectos, con impulsividad notable. Lo vemos con detalle en un momento.' },
          { t: 'Antisocial: viola los derechos ajenos', d: 'Sin remordimiento, desde los 15 años',
            say: 'El antisocial desprecia y viola los derechos de los demás desde los quince años: engaña, roba, pelea. Carece de remordimiento y culpa, es irresponsable en el trabajo y las finanzas y desprecia la ley. Para diagnosticarlo se exigen al menos dieciocho años.' },
        ] },
        { title: 'Histriónico y narcisista', tag: 'Buscan atención y admiración', kind: 'criteria', items: [
          { t: 'Histriónico: el centro de atención', d: 'Seductor, teatral, sugestionable',
            say: 'El histriónico tiene una emotividad excesiva y busca constantemente la atención. Se siente incómodo si no es el centro, es seductor de forma inapropiada, teatral y sugestionable.' },
          { t: 'Narcisista: grandiosidad sin empatía', d: 'Necesita admiración constante',
            say: 'El narcisista tiene un patrón de grandiosidad, necesita admiración constante y le falta empatía hacia los demás.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clúster C',
      title: 'Ansiosos y temerosos',
      cards: [
        { title: 'Evitativo y dependiente', tag: 'Miedo', kind: 'normal', items: [
          { t: 'Evitativo: desea amigos y teme el rechazo', d: 'Hipersensible a la evaluación negativa',
            say: 'El clúster C reúne a los ansiosos. El evitativo tiene inhibición social, sentimientos de incompetencia e hipersensibilidad a la evaluación negativa. Desea intensamente tener amigos, pero evita lo social por miedo al rechazo o al ridículo.' },
          { t: 'Dependiente: necesita que lo cuiden', d: 'Sumiso, miedo a la separación',
            say: 'El dependiente tiene una necesidad excesiva de que lo cuiden, y por eso es sumiso y se apega de forma exagerada, por miedo a la separación.' },
        ] },
        { title: 'Obsesivo-compulsivo', tag: 'Control', kind: 'criteria', items: [
          { t: 'Orden, perfeccionismo y rigidez', d: 'Egosintónico; sin obsesiones ni compulsiones',
            say: 'El obsesivo-compulsivo, llamado también anancástico, se preocupa en exceso del orden, el perfeccionismo y el control, y es obstinado y rígido. A diferencia del TOC, es egosintónico y no tiene obsesiones ni compulsiones propiamente tales.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Pares que se confunden',
      title: 'El diferencial clave de cada trastorno',
      head: ['Trastorno', 'Rasgo que lo define', 'Se diferencia de'],
      rows: [
        { cells: ['Paranoide', 'Suspicacia y rencor', 'Delirante: aquí no hay delirio fijo'],
          say: 'El paranoide, con su suspicacia y su rencor, se distingue del trastorno delirante porque no hay una convicción delirante fija.' },
        { cells: ['Esquizoide', 'Aislamiento voluntario', 'Evitativo: no desea socializar'],
          say: 'El esquizoide se aísla porque no quiere vínculos. Eso lo separa del evitativo, que sí los desea.' },
        { cells: ['Esquizotípico', 'Pensamiento mágico, rarezas', 'Esquizofrenia: sin psicosis franca'],
          say: 'El esquizotípico tiene rarezas y pensamiento mágico, pero sin la psicosis franca de la esquizofrenia.' },
        { cells: ['Límite', 'Inestabilidad y cortes', 'Bipolar: la labilidad dura horas'],
          say: 'El límite tiene inestabilidad afectiva e impulsividad, con cortes en la piel. Su labilidad dura horas, a diferencia del bipolar, cuyos episodios duran días o semanas.' },
        { cells: ['Antisocial', 'Violar leyes, sin culpa', 'Trastorno de conducta bajo los 15 años'],
          say: 'El antisocial exige antecedente de trastorno de conducta antes de los quince años y al menos dieciocho para el diagnóstico.' },
        { cells: ['Histriónico', 'Busca atención, seduce', 'Narcisista: aquí importa agradar'],
          say: 'El histriónico busca agradar y llamar la atención; el narcisista busca admiración y no tiene empatía.' },
        { cells: ['Evitativo', 'Desea amigos y teme el rechazo', 'Fobia social y esquizoide'],
          say: 'El evitativo desea vínculos y teme el rechazo. Se parece a la fobia social, pero esta es un miedo a situaciones concretas, y el evitativo es un rasgo de toda la vida.' },
        { cells: ['Obsesivo-compulsivo', 'Perfeccionismo rígido', 'TOC: aquí no hay obsesiones'],
          say: 'El obsesivo-compulsivo de la personalidad es perfeccionista y rígido, pero egosintónico y sin obsesiones ni compulsiones, a diferencia del TOC.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El que más se pregunta',
      title: 'Trastorno límite: cómo se reconoce',
      cards: [
        { title: 'Criterios que ves en la viñeta', tag: 'Reconocerlo', kind: 'alert', items: [
          { t: 'Miedo frenético al abandono', d: 'Real o imaginado',
            say: 'El trastorno límite es el que más se pregunta, y casi siempre en una paciente joven. Su núcleo es el esfuerzo frenético por evitar el abandono, real o imaginado.' },
          { t: 'Idealiza y devalúa', d: 'Relaciones intensas y caóticas',
            say: 'Eso produce relaciones tempestuosas con una polarización: idealiza a la pareja como lo único que importa y minutos después la devalúa como un monstruo. Es la idealización y la devaluación.' },
          { t: 'Autolesiones y gestos suicidas', d: 'Cortes en las muñecas',
            say: 'Hay conductas o amenazas suicidas recurrentes y autolesiones, con cortes superficiales en los antebrazos, y las intoxicaciones medicamentosas impulsivas.' },
          { t: 'Vacío crónico, identidad alterada', d: 'Ira inapropiada; impulsividad',
            say: 'Se agregan una alteración de la identidad, una sensación crónica de vacío, accesos de ira inapropiada y una impulsividad en el gasto, la comida y el alcohol.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo del límite',
      title: 'Crisis en urgencias y tratamiento de fondo',
      cards: [
        { title: 'En la crisis', tag: 'Urgencias', kind: 'alert', items: [
          { t: 'Curar sin moralizar', d: 'Heridas con técnica aséptica',
            say: 'Cuando llega a urgencias por un gesto autolesivo, se curan las heridas de forma aséptica, con una actitud firme, empática y neutra. No se moraliza ni se castiga, para no reforzar la conducta.' },
          { t: 'Evaluar el riesgo suicida real', d: 'Estricto y letal',
            say: 'Y se evalúa con rigor el riesgo suicida, porque algunas pacientes sí intentan morir. Se las contiene en el box de forma calmada y se las deriva a la red de salud mental.' },
        ] },
        { title: 'Tratamiento de fondo', tag: 'Psicoterapia primero', kind: 'key', items: [
          { t: 'Terapia dialéctico-conductual', d: 'Marsha Linehan; reduce hospitalizaciones',
            say: 'La psicoterapia de elección es la terapia dialéctico-conductual, de Marsha Linehan. Enseña regulación emocional, tolerancia al malestar, efectividad interpersonal y mindfulness, y reduce las hospitalizaciones y los suicidios.' },
          { t: 'Fármacos solo de apoyo', d: 'Lamotrigina, valproato, atípicos en dosis bajas',
            say: 'Los fármacos no curan el trastorno: se usan como apoyo de los síntomas, con estabilizadores como la lamotrigina o el valproato para la impulsividad, o antipsicóticos atípicos en dosis bajas para la disforia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Medición',
      title: 'Cómo se mide la personalidad',
      cards: [
        { title: 'Inventarios de autoinforme', tag: 'Los aplica el psicólogo', kind: 'criteria', items: [
          { t: 'MMPI-2: 567 ítems', d: 'Minnesota',
            say: 'La personalidad se mide con pruebas que aplica el psicólogo, y el médico las usa como apoyo, nunca como diagnóstico único. El MMPI-dos, de Minnesota, tiene quinientos sesenta y siete ítems.' },
          { t: 'NEO-PI-R: los cinco grandes', d: 'Neuroticismo, extraversión, apertura, amabilidad, responsabilidad',
            say: 'El NEO-PI-R mide los cinco grandes: neuroticismo, extraversión, apertura, amabilidad y responsabilidad. El MCMI de Millon se enfoca en los trastornos de la personalidad, y el dieciséis PF es de Cattell.' },
        ] },
        { title: 'Pruebas proyectivas', tag: 'Interpretativas', kind: 'normal', items: [
          { t: 'Rorschach y TAT', d: 'Manchas de tinta y láminas',
            say: 'Las pruebas proyectivas son el Rorschach, con manchas de tinta, y el TAT, con láminas que el paciente interpreta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Teorías',
      title: 'Las principales teorías de la personalidad',
      cards: [
        { title: 'Psicodinámicas y del desarrollo', tag: 'Freud, Erikson, Jung', kind: 'criteria', items: [
          { t: 'Freud: ello, yo y superyó', d: 'Etapas oral, anal, fálica, latencia y genital',
            say: 'Freud propone el ello, el yo y el superyó y las etapas psicosexuales: oral, anal, fálica, latencia y genital. Erikson plantea ocho etapas psicosociales. Y Jung habló de introversión y extraversión.' },
        ] },
        { title: 'Rasgos, aprendizaje y biología', tag: 'Eysenck, Skinner, Cloninger', kind: 'key', items: [
          { t: 'Rasgos: Eysenck, Cattell, Cinco Grandes', d: 'Costa y McCrae',
            say: 'Las teorías del rasgo son las de Eysenck, que habla de extraversión, neuroticismo y psicoticismo, la de Cattell y los Cinco Grandes de Costa y McCrae. La conductual es de Skinner, la del aprendizaje social, de Bandura, y la humanista, de Maslow y Rogers.' },
          { t: 'Cloninger: tres dimensiones', d: 'Novedad-dopamina; daño-serotonina; recompensa-noradrenalina',
            say: 'El modelo psicobiológico de Cloninger liga la búsqueda de novedad a la dopamina, la evitación del daño a la serotonina y la dependencia de la recompensa a la noradrenalina.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El ánimo del límite: horas, no semanas',
      images: [
        { src: 'animaciones/psiq-17/A1_animo_limite.mp4', label: 'Límite frente a bipolar', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'La labilidad del límite dura horas y responde al vínculo',
          say: 'Mira el ánimo de dos pacientes. En el trastorno límite, la curva cae en picada cuando aparece una amenaza de abandono, como un viaje de la pareja, y se recupera en horas cuando el vínculo vuelve. Pasa varias veces en el mismo día. En el bipolar, en cambio, el episodio dura días o semanas y no depende de lo que haga el otro. Esa es la diferencia que el examen busca.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la conducta al clúster y al diagnóstico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Personalidad: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Cortes, vacío, relaciones inestables', 'Trastorno límite; DBT', 'Bipolar o depresión mayor'],
          say: 'Cortes en los antebrazos, vacío y relaciones inestables con miedo al abandono: trastorno límite, con terapia dialéctico-conductual. Llamarlo bipolar es el error, porque su labilidad dura horas.' },
        { cells: ['Aislado y no quiere amigos', 'Esquizoide', 'Evitativo'],
          say: 'Aislado, frío y sin deseo de relacionarse: esquizoide. Si desea amigos pero teme el rechazo, es evitativo.' },
        { cells: ['Tímida desde niña, desea amigos', 'Evitativo', 'Fobia social o esquizoide'],
          say: 'Tímida desde la niñez, con baja autoestima, que desea amigos pero teme el juicio: evitativo. En la fobia social temen situaciones concretas y sí tienen amigos.' },
        { cells: ['Teatral, seductora, exagerada', 'Histriónico', 'Narcisista o límite'],
          say: 'Provocativa, coqueta y exagerada al contar sus problemas: histriónico. No es el límite, que tiene autolesiones e inestabilidad.' },
        { cells: ['Violación de normas, sin culpa, 18 años', 'Antisocial', 'Trastorno de conducta'],
          say: 'Violación de normas sin culpa en un adulto de al menos dieciocho años con antecedente antes de los quince: antisocial. En un menor, sería trastorno de conducta.' },
        { cells: ['Crisis con cortes en urgencias', 'Curar sin moralizar y evaluar riesgo', 'Castigar o hospitalizar siempre'],
          say: 'En la crisis, se cura sin moralizar y se evalúa el riesgo suicida. Castigar o ignorarla refuerza la conducta.' },
        { cells: ['Impulsividad persistente en el límite', 'Psicoterapia; fármaco de apoyo', 'Antipsicótico como tratamiento único'],
          say: 'La psicoterapia es el tratamiento de fondo. Los fármacos son solo coadyuvantes de síntomas puntuales.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 21 años llevada a urgencias por su novio tras provocarse múltiples cortes superficiales en ambos antebrazos con una hoja de afeitar, luego de que él le dijera que viajaría por trabajo el fin de semana. Llora desconsoladamente diciendo que su pareja «es un monstruo que la va a dejar sola para siempre» y, media hora más tarde, le suplica perdón afirmando que «él es la única razón de su vida». Tiene relaciones afectivas intensas y caóticas, atracones seguidos de compras desmedidas, abandono de carreras universitarias y sensación permanente de «vacío en el pecho». En dos años ha consultado 4 veces por intoxicaciones medicamentosas impulsivas no letales.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Trastorno bipolar tipo II; iniciar litio y alta' },
        { letter: 'B', text: 'Trastorno límite de la personalidad; curación sin juicios, evaluar riesgo suicida, contención y derivar a terapia dialéctico-conductual' },
        { letter: 'C', text: 'Trastorno histriónico; reasegurar y alta' },
        { letter: 'D', text: 'Trastorno depresivo mayor; iniciar un antidepresivo sin derivar' },
        { letter: 'E', text: 'Trastorno antisocial; derivar a justicia' },
      ],
      correct: 'B',
      explanation: 'Trastorno límite de la personalidad (clúster B): esfuerzos por evitar el abandono, idealización y devaluación, autolesiones, impulsividad, vacío crónico y desregulación emocional. La conducta es curar con técnica aséptica sin actitud moralizante, evaluar el riesgo suicida, contener y derivar a la red de salud mental para terapia dialéctico-conductual. Los psicofármacos son solo coadyuvantes sintomáticos.',
      say: {
        stem: 'Una mujer de veintiún años llega a urgencias con cortes en ambos antebrazos, porque su novio dijo que viajaría el fin de semana. Llora diciendo que es un monstruo que la dejará sola para siempre, y media hora después le suplica perdón diciendo que es la razón de su vida. Tiene relaciones intensas y caóticas, atracones y compras desmedidas, abandonó carreras universitarias, se siente vacía y ya consultó cuatro veces por intoxicaciones medicamentosas impulsivas.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: bipolar con litio; trastorno límite con curación sin juicios, evaluación del riesgo, contención y terapia dialéctico-conductual; histriónico con alta; depresión mayor con antidepresivo; o antisocial. Piénsalo.',
        answer: 'Es la B. Miedo al abandono, idealización y devaluación en minutos, autolesiones, impulsividad y vacío crónico: trastorno límite. Se cura sin moralizar, se evalúa el riesgo suicida y se deriva a terapia dialéctico-conductual. La A tienta por la labilidad afectiva, pero la del límite dura horas y responde a lo que pasa en el vínculo, y el litio no es su tratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 132',
      stem: 'Una paciente de 32 años, madre de 4 hijos, de distintos padres, de los cuales no se hace cargo, tiene relaciones inestables y problemas frecuentes con sus compañeros de trabajo. Pelea frecuentemente con su familia y como antecedente, ha tenido varios episodios de autoagresión e intentos suicidas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esquizofrenia' },
        { letter: 'B', text: 'Trastorno límite de la personalidad' },
        { letter: 'C', text: 'Trastorno bipolar' },
        { letter: 'D', text: 'Trastorno delirante' },
        { letter: 'E', text: 'Trastorno depresivo mayor' },
      ],
      correct: 'B',
      explanation: 'Trastorno límite de la personalidad clásico: relaciones inestables, impulsividad, conflictos frecuentes y conductas de autoagresión e intentos suicidas recurrentes desde la adultez joven.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Una mujer de treinta y dos años, madre de cuatro hijos de distintos padres, de los que no se hace cargo, tiene relaciones inestables y problemas con sus compañeros de trabajo. Pelea con su familia y ha tenido varios episodios de autoagresión e intentos suicidas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esquizofrenia; trastorno límite de la personalidad; bipolar; trastorno delirante; o depresión mayor. Piénsalo.',
        answer: 'Es la B. Relaciones inestables, conflictos repetidos y autoagresiones con intentos suicidas desde hace años: es un patrón de personalidad, no un episodio. La C y la E tientan por el riesgo suicida, pero no explican la inestabilidad crónica de las relaciones ni la impulsividad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 79',
      stem: 'Una paciente tiene relaciones interpersonales intensas e inestables y problemas frecuentes con las demás personas. Presenta antecedentes de dos intoxicaciones medicamentosas y autoagresiónes. Además estuvo en tratamiento por bulimia hace un año. Tiene un sentimiento crónico de inutilidad y vacío. Además es impulsiva en el consumo de alcohol y compras.',
      question: '¿A qué trastorno de la personalidad corresponde el cuadro?',
      options: [
        { letter: 'A', text: 'Histriónico' },
        { letter: 'B', text: 'Limítrofe' },
        { letter: 'C', text: 'Narcisista' },
        { letter: 'D', text: 'Antisocial' },
        { letter: 'E', text: 'Dependiente' },
      ],
      correct: 'B',
      explanation: 'Cuadro clásico de trastorno límite: relaciones intensas e inestables, autoagresiones e intoxicaciones medicamentosas, sentimiento crónico de vacío y de inutilidad, e impulsividad en el alcohol, las compras y la alimentación.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Una paciente tiene relaciones intensas e inestables, dos intoxicaciones medicamentosas y autoagresiones. Estuvo en tratamiento por bulimia, siente un vacío crónico y es impulsiva con el alcohol y las compras.',
        question: '¿A qué trastorno de la personalidad corresponde?',
        options: 'Las opciones: histriónico; límite; narcisista; antisocial; o dependiente. Piénsalo.',
        answer: 'Es la B. Autoagresión, vacío crónico, relaciones intensas e inestables e impulsividad en varias áreas, incluida la alimentación: es el límite. La A tienta porque también es emocional y dramática, pero el histriónico busca atención y seduce, sin autolesiones ni vacío.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 122',
      stem: 'Una paciente de 28 años tiene relaciones amorosas muy intensas, se viste muy provocativa y es muy coqueta, lo que le ha traído problemas con sus pares a las que ella las llama «envidiosas». Durante la entrevista es muy exagerada al contar sus problemas.',
      question: 'El trastorno de la personalidad más probable en este caso es:',
      options: [
        { letter: 'A', text: 'Narcisista' },
        { letter: 'B', text: 'Limítrofe' },
        { letter: 'C', text: 'Histriónico' },
        { letter: 'D', text: 'Dependiente' },
        { letter: 'E', text: 'Antisocial' },
      ],
      correct: 'C',
      explanation: 'Histriónico: se viste de forma provocativa, es coqueta y exagerada. Hay rasgos narcisistas (envidia) y límites (relaciones intensas), pero el cuadro predominante es la búsqueda de atención con seducción y teatralidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una paciente de veintiocho años tiene relaciones amorosas muy intensas, se viste de forma muy provocativa, es muy coqueta y llama envidiosas a sus pares. En la entrevista exagera al contar sus problemas.',
        question: '¿Cuál es el trastorno de la personalidad más probable?',
        options: 'Las opciones: narcisista; límite; histriónico; dependiente; o antisocial. Piénsalo.',
        answer: 'Es la C. Vestimenta provocativa, coquetería y exageración son seducción y teatralidad: histriónico. La B tienta por las relaciones intensas, pero faltan las autolesiones, el vacío y la impulsividad del límite. La A tienta por la envidia, pero el narcisista busca admiración, no agradar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 58',
      stem: 'Una mujer de 23 años quien, desde la niñez es extremadamente introvertida y con baja autoestima por lo que se le es difícil conseguir amigos, por miedo a que pensarán de ella, esto la hace infeliz. En cambio, con su familia es muy cariñosa.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno evitativo de la personalidad' },
        { letter: 'B', text: 'Síndrome de Asperger' },
        { letter: 'C', text: 'Depresión mayor' },
        { letter: 'D', text: 'Distimia' },
        { letter: 'E', text: 'Fobia social' },
      ],
      correct: 'A',
      explanation: 'Trastorno evitativo clásico: inicio temprano, pocos amigos por miedo al juicio, baja autoestima e infelicidad, con vínculo afectuoso en la familia. Puede confundirse con la fobia social; sin embargo, en la fobia social tienen amigos y solo temen las situaciones en que los pueden juzgar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una mujer de veintitrés años, desde la niñez muy introvertida y con baja autoestima, tiene dificultad para hacer amigos por miedo a lo que pensarán de ella, y eso la hace infeliz. Con su familia es muy cariñosa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trastorno evitativo de la personalidad; Asperger; depresión mayor; distimia; o fobia social. Piénsalo.',
        answer: 'Es la A. Desde la niñez, con deseo de tener amigos y miedo al juicio de los demás, y con un vínculo cariñoso en la familia: es el evitativo. La E tienta, porque se parece, pero en la fobia social los pacientes sí tienen amigos y temen solo situaciones concretas. Y el Asperger no desea el contacto de esta manera ni sufre por el juicio ajeno.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: personalidad',
      cards: [
        { title: 'Ordenar', tag: 'Tres clústeres', kind: 'key', items: [
          { t: 'A raros, B dramáticos, C ansiosos', d: 'Patrón egosintónico desde joven',
            say: 'Cerremos con las reglas de oro. Los trastornos de la personalidad son patrones egosintónicos que parten en la juventud. El clúster A son los raros, el B los dramáticos e impulsivos, y el C los ansiosos.' },
          { t: 'Esquizoide no desea; evitativo sí desea', d: 'Antisocial: 18 años y TC antes de los 15',
            say: 'El esquizoide no desea vínculos; el evitativo los desea y teme el rechazo. Y el antisocial exige dieciocho años y antecedente de trastorno de conducta antes de los quince.' },
        ] },
        { title: 'Conducta', tag: 'En el límite', kind: 'alert', items: [
          { t: 'Curar sin moralizar y evaluar el riesgo', d: 'Contener y derivar',
            say: 'En la crisis del límite se cura sin moralizar, se evalúa el riesgo suicida real, se contiene y se deriva.' },
          { t: 'DBT; fármacos solo de apoyo', d: 'Psicoterapia de elección',
            say: 'La psicoterapia de elección es la terapia dialéctico-conductual, y los fármacos solo apoyan los síntomas. Si te llevas una sola idea de hoy: el límite se reconoce por el miedo al abandono, y su ánimo cambia en horas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trastornos de la personalidad: del cuadro al clúster',
    root: N('start', 'Patrón rígido desde la juventud', 'Egosintónico, estable, con deterioro',
      'Un paciente tiene un patrón rígido y estable desde la adolescencia, que vive como parte de sí mismo. Primero decides en qué clúster cae por su conducta dominante.',
      ['Raro, desconfiado o aislado', N('q', 'Clúster A', 'Paranoide, esquizoide, esquizotípico',
        'Si es raro, desconfiado o distante, es del clúster A. Se distingue por si desconfía, si no desea vínculos o si tiene pensamiento mágico.',
        ['No desea vínculos', N('ok', 'Esquizoide', 'Distinto del evitativo',
          'Si no desea relaciones y se aísla de forma voluntaria, es esquizoide. El evitativo, en cambio, sí las desea.')],
        ['Suspicacia o pensamiento mágico', N('ok', 'Paranoide o esquizotípico', 'Sin delirio fijo ni psicosis franca',
          'Si hay suspicacia y rencor sin una convicción delirante fija, es paranoide. Si hay pensamiento mágico, ideas de referencia y rarezas sin psicosis franca, es esquizotípico.')],
      )],
      ['Dramático, impulsivo o emocional', N('q', 'Clúster B', 'Límite, antisocial, histriónico, narcisista',
        'Si es dramático, emocional o impulsivo, es del clúster B.',
        ['Miedo al abandono, cortes, vacío', N('alert', 'Límite', 'Curar sin moralizar y evaluar riesgo',
          'Si hay miedo al abandono, relaciones tempestuosas, autolesiones y vacío crónico, es un trastorno límite. En la crisis se cura sin moralizar, se evalúa el riesgo suicida y se deriva a terapia dialéctico-conductual.')],
        ['Viola normas, sin culpa', N('ok', 'Antisocial', 'Desde 18 años; TC antes de los 15',
          'Si viola los derechos ajenos sin culpa, y tiene al menos dieciocho años y un trastorno de conducta antes de los quince, es antisocial.')],
        ['Busca atención o admiración', N('ok', 'Histriónico o narcisista', 'Seducción frente a grandiosidad',
          'Si busca atención con seducción y teatralidad, es histriónico. Si hay grandiosidad y falta de empatía, es narcisista.')],
      )],
      ['Ansioso o temeroso', N('q', 'Clúster C', 'Evitativo, dependiente, obsesivo',
        'Si es ansioso o temeroso, es del clúster C.',
        ['Desea amigos y teme el rechazo', N('ok', 'Evitativo', 'Distinto de la fobia social',
          'Si desea amigos, pero evita lo social por miedo al juicio desde la niñez, es evitativo.')],
        ['Sumiso o perfeccionista', N('ok', 'Dependiente u obsesivo-compulsivo', 'Miedo a la separación o rigidez',
          'Si es sumiso y no decide sin los demás, por miedo a la separación, es dependiente. Si es perfeccionista, rígido y controlador, sin obsesiones ni compulsiones, es obsesivo-compulsivo de la personalidad.')],
      )],
    ),
  },
};
