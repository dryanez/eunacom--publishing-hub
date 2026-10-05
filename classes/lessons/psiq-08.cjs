// Clase 17.8 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-08). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.13.1.004) no trae preguntas reales; el TOC real del banco está bajo 5.01.1.002. De la búsqueda por tema se usaron:
//   Julio 2013 P155 (lavado de manos con dermatitis, sabe que no tiene sentido: TOC egodistónico), Diciembre 2019 P15 (padre con imágenes de dañar a su bebé: obsesión de daño, no psicosis ni TEPT),
//   Julio 2019 P73 (obsesión de ser pedófilo, reza y evita: TOC, no parafilia ni delirio), Julio 2019 P13 (fármaco de elección: fluoxetina; "voz interior" que no es alucinación),
//   Agosto 2021 P11 (madre con imágenes de dañar a su hijo; hay ideas de muerte: TOC, con riesgo a evaluar).
// No usadas: Julio 2025 P87 y Julio 2024 P127 (mismo punto que Julio 2013 P155: compulsión de limpieza con insight), Julio 2015 P68 (mismo punto que Julio 2019 P73),
//   Diciembre 2018 P34 (misma pregunta que Agosto 2021 P11), Diciembre 2024 P37 (enunciado incompleto).
// Cuidado clínico: Julio 2019 P13 explica que "también se dejan benzodiacepinas en dosis bajas"; no se enseña (el libro las contraindica de forma crónica y no son tratamiento del TOC): se enseña solo el ISRS.
//   El libro no dice qué hacer con la ideación de muerte del caso de Agosto 2021 P11: se agrega solo evaluar el riesgo suicida, como en la clase de suicidio.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno obsesivo-compulsivo: obsesiones, compulsiones, ISRS en dosis altas y exposición con prevención de respuesta',
      say: 'Bienvenido. Hoy vemos el trastorno obsesivo-compulsivo, que ya no se clasifica como ansiedad, pero se estudia junto a ella. En el examen se repiten tres ideas: el síntoma es egodistónico, o sea que el paciente sufre y sabe que no tiene sentido; se diferencia de la personalidad obsesiva; y se trata con inhibidores selectivos de la recaptación de serotonina en dosis altas, más exposición con prevención de respuesta.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'El círculo del TOC',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Circuito cortico-estriado', s: 'Cortico-estriado-tálamo-cortical' },
        { id: 'b', col: 1, row: 2, k: 'effect', t: 'Obsesión', s: 'Pensamiento intrusivo, angustia' },
        { id: 'c', col: 2, row: 2, k: 'mech', t: 'Compulsión', s: 'Acto repetitivo para calmar' },
        { id: 'd', col: 3, row: 1, k: 'good', t: 'Alivio breve', s: 'Baja la angustia un rato' },
        { id: 'e', col: 3, row: 3, k: 'trap', t: 'Se refuerza el ritual', s: 'La obsesión vuelve más fuerte' },
        { id: 'f', col: 4, row: 2, k: 'alert', t: 'Más de 1 hora al día', s: 'Deterioro de la vida' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'e', to: 'b' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Una idea que no se puede apagar',
          say: 'El TOC se asocia a una disfunción de los circuitos cortico-estriado-tálamo-corticales. El resultado es una obsesión: un pensamiento, imagen o impulso que irrumpe sin ser querido y que produce mucha angustia.' },
        { show: ['c', 'd'], note: 'La compulsión alivia solo un momento',
          say: 'Para neutralizarla, el paciente hace una compulsión, como lavarse las manos, revisar o contar. Y funciona un rato: la angustia baja.' },
        { show: ['e', 'f'], note: 'Y el ritual mantiene el trastorno',
          say: 'Pero ese alivio refuerza el ritual, y la obsesión vuelve con más fuerza. Por eso el tratamiento psicológico se basa en cortar justo ese paso: no dejar que la compulsión ocurra.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Obsesiones y compulsiones',
      cards: [
        { title: 'Obsesiones', tag: 'Pensamientos', kind: 'criteria', items: [
          { t: 'Intrusivas, no deseadas', d: 'Pensamientos, imágenes o impulsos',
            say: 'Las obsesiones son pensamientos, impulsos o imágenes recurrentes y persistentes que se viven como intrusivos y no deseados, y que causan marcada ansiedad. El paciente intenta ignorarlos o neutralizarlos.' },
          { t: 'Temas típicos', d: 'Contaminación, dudas, orden, daño, tabú',
            say: 'Los temas más frecuentes son la contaminación o los gérmenes, las dudas repetidas sobre la cerradura o el gas, la simetría y el orden, y los pensamientos agresivos o tabú.' },
        ] },
        { title: 'Compulsiones', tag: 'Conductas', kind: 'key', items: [
          { t: 'Conductas o actos mentales', d: 'Lavar, ordenar, revisar, rezar, contar',
            say: 'Las compulsiones son conductas repetitivas, como lavarse, ordenar o comprobar, o actos mentales, como rezar, contar o repetir palabras en silencio.' },
          { t: 'Buscan reducir la angustia', d: 'Excesivas o sin relación real',
            say: 'Se hacen para prevenir o reducir la angustia, o para evitar algo temido. Pero no tienen una conexión realista con lo que pretenden evitar, o son claramente excesivas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Egodistónico y que consume tiempo',
      cards: [
        { title: 'Criterios clave', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Más de 1 hora al día', d: 'O malestar y deterioro significativos',
            say: 'El criterio de disfunción es que las obsesiones o compulsiones consuman más de una hora al día, o causen un malestar o deterioro clínicamente significativos.' },
          { t: 'Egodistónico', d: 'Sabe que es absurdo y sufre',
            say: 'Y lo más preguntado: es egodistónico. El paciente reconoce que la idea es absurda o exagerada, lucha contra ella y desearía detener el ritual.' },
        ] },
        { title: 'Pistas en el caso', tag: 'Examen', kind: 'key', items: [
          { t: '«Sé que no tiene sentido»', d: 'Pero no puedo evitarlo',
            say: 'Cuando el enunciado diga que el paciente sabe que su conducta no tiene sentido, pero no puede evitarla, la frase está describiendo un TOC.' },
          { t: 'Consecuencias del ritual', d: 'Dermatitis, atrasos, pérdida de tiempo',
            say: 'Y suelen aparecer las consecuencias: dermatitis por lavados, atrasos por revisar, horas perdidas al día.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial clave',
      title: 'TOC frente a personalidad obsesiva',
      head: ['Característica', 'TOC', 'Personalidad obsesiva'],
      rows: [
        { cells: ['Relación con el yo', 'Egodistónico: sufre', 'Egosintónico: lo ve correcto'],
          say: 'La diferencia cardinal es la sintonía con el yo. En el TOC el síntoma es ajeno y causa gran sufrimiento. En la personalidad obsesiva, el paciente cree que su manera de hacer las cosas es la correcta.' },
        { cells: ['Obsesiones', 'Siempre presentes', 'Ausentes'],
          say: 'En el TOC hay obsesiones intrusivas, absurdas e indeseadas. En la personalidad obsesiva no hay obsesiones.' },
        { cells: ['Rituales', 'Siempre presentes', 'Ausentes'],
          say: 'Tampoco hay rituales estereotipados en la personalidad obsesiva. Es perfeccionismo, orden y control, sin compulsiones.' },
        { cells: ['Tiempo', 'Horas limpiando, ordenando, contando', 'Exceso de trabajo y minuciosidad'],
          say: 'El tiempo se pierde por rituales en el TOC. En la personalidad obsesiva se va en el trabajo, por perfeccionismo.' },
        { cells: ['Tratamiento', 'ISRS en dosis altas más EPR', 'Psicoterapia individual'],
          say: 'Y el tratamiento: el TOC, ISRS en dosis altas con exposición y prevención de respuesta. La personalidad obsesiva, psicoterapia individual.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lo que asusta al paciente',
      title: 'Obsesiones que no son psicosis',
      cards: [
        { title: 'Obsesiones de daño o tabú', tag: 'Muy preguntadas', kind: 'alert', items: [
          { t: 'Imágenes de dañar a un hijo', d: 'Angustia; evita estar a solas',
            say: 'Hay madres y padres, sobre todo tras el parto, con imágenes de hacerle daño a su bebé. Sienten angustia y miedo, no quieren hacerlo y evitan estar solos con el niño. Eso es una obsesión, no un deseo ni un delirio.' },
          { t: 'Miedo a ser pedófilo', d: 'Reza y evita a los niños',
            say: 'Igual con la idea de ser pedófilo: lo angustia, reza y evita a los niños. Es una obsesión de conducta inmoral con compulsión de evitación, no una parafilia.' },
        ] },
        { title: 'Cómo no confundirlo', tag: 'Diferencial', kind: 'key', items: [
          { t: 'Sin delirio ni alucinaciones', d: 'La «voz interior» no es una voz',
            say: 'No hay delirio: el paciente sabe que es una idea suya y absurda. Una voz interior que ordena lavarse las manos no es una alucinación mientras no se escuche de afuera ni se sienta ajena.' },
          { t: 'Evaluar siempre el riesgo suicida', d: 'Por vergüenza o desesperanza',
            say: 'Y si hay vergüenza o ideas de morir, como en una pregunta real, se evalúa el riesgo suicida, tal como vimos en la clase de suicidio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'EPR y ISRS en dosis altas',
      cards: [
        { title: 'Psicoterapia de elección', tag: 'TCC', kind: 'key', items: [
          { t: 'Exposición con prevención de respuesta', d: 'EPR, dentro de la TCC',
            say: 'La psicoterapia de elección es la terapia cognitivo-conductual con exposición con prevención de respuesta. Es la técnica más eficaz.' },
          { t: 'Exponerse sin hacer el ritual', d: 'Tocar la manilla, sin lavarse',
            say: 'El paciente se expone de forma gradual al estímulo, por ejemplo tocar una manilla, con la prohibición estricta de hacer la compulsión, como lavarse las manos. Así la angustia se habitúa y se extingue.' },
        ] },
        { title: 'Fármacos de primera línea', tag: 'ISRS', kind: 'pharma', items: [
          { t: 'ISRS en dosis altas', d: 'Hasta el doble que en depresión',
            say: 'La primera línea son los ISRS, y la regla de oro es que el TOC necesita dosis hasta dos veces mayores que las de la depresión.' },
          { t: 'Sertralina, fluoxetina', d: 'Escitalopram o paroxetina también',
            say: 'Por ejemplo, sertralina de ciento cincuenta a doscientos miligramos, fluoxetina de sesenta a ochenta, escitalopram veinte o paroxetina de cuarenta a sesenta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento',
      title: 'Dosis alta y paciencia',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'ISRS en TOC', s: 'Parte con dosis habitual' },
        { id: 'b', col: 1, row: 1, k: 'trap', t: 'A las 4 semanas, sin cambios', s: 'Dosis baja, mala señal' },
        { id: 'c', col: 2, row: 1, k: 'good', t: 'Subir la dosis', s: 'Hacia el máximo tolerado' },
        { id: 'd', col: 2, row: 3, k: 'mech', t: 'Esperar 8 a 12 semanas', s: 'Tarda en evaluarse' },
        { id: 'e', col: 3, row: 2, k: 'refer', t: 'Si no responde', s: 'Clomipramina o potenciación' },
        { id: 'f', col: 4, row: 2, k: 'alert', t: 'Derivar a psiquiatría', s: 'Casos moderados a severos' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'a', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'No se abandona a las cuatro semanas',
          say: 'Un error clásico es evaluar la respuesta a las cuatro semanas con dosis baja y concluir que el fármaco no sirve. No es así: se explica al paciente, se sube la dosis de forma progresiva hacia el máximo tolerado y se sigue.' },
        { show: ['d'], note: 'La latencia es larga',
          say: 'La respuesta tarda entre ocho y doce semanas en poder evaluarse, bastante más que en la depresión. Hay que decírselo al paciente desde el comienzo.' },
        { show: ['e', 'f'], note: 'Segunda línea y derivación',
          say: 'Si no responde, la segunda línea es la clomipramina, un tricíclico muy eficaz pero con efectos anticolinérgicos y riesgo cardíaco, o potenciar con un antipsicótico atípico, como aripiprazol o risperidona en dosis bajas. Por norma, los casos moderados a severos se derivan a nivel secundario.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué no hacer',
      title: 'Errores de manejo',
      cards: [
        { title: 'Fármacos que no corresponden', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Benzodiacepinas crónicas', d: 'No tratan el TOC',
            say: 'Las benzodiacepinas crónicas no tratan el TOC y están contraindicadas como tratamiento, por tolerancia y dependencia.' },
          { t: 'Antipsicóticos en monoterapia', d: 'Solo como potenciación',
            say: 'Un antipsicótico solo, como el haloperidol, no es tratamiento. Los atípicos se usan únicamente para potenciar un ISRS cuando la respuesta es parcial.' },
        ] },
        { title: 'Otros errores', tag: 'Conducta', kind: 'key', items: [
          { t: 'Tranquilizar o ayudar al ritual', d: 'Refuerza el círculo',
            say: 'Tranquilizar una y otra vez, o ayudarlo a hacer sus rituales, refuerza el círculo. La familia necesita psicoeducación.' },
          { t: 'Tratar solo la piel', d: 'Hay que tratar también el TOC',
            say: 'Y si hay dermatitis por lavado, se trata la piel con emolientes, pero el tratamiento es el del TOC.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la obsesión al tratamiento del TOC.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Sabe que es absurdo, igual lo hace', 'TOC', 'Psicosis o delirio'],
          say: 'Reconoce que es absurdo pero no puede evitarlo: TOC egodistónico. El error es pensar en psicosis.' },
        { cells: ['Imágenes de dañar a un hijo, con angustia', 'TOC; evaluar riesgo suicida', 'Depresión psicótica o TEPT'],
          say: 'Imágenes de dañar al hijo con angustia y evitación: obsesión de daño. No es psicosis ni estrés postraumático.' },
        { cells: ['Miedo a ser pedófilo, reza y evita', 'TOC', 'Parafilia'],
          say: 'Miedo a ser pedófilo con angustia y evitación: obsesión de conducta inmoral. No es una parafilia.' },
        { cells: ['Orden y perfeccionismo, lo ve correcto', 'Personalidad obsesiva', 'Tratarlo como TOC'],
          say: 'Perfeccionismo que el paciente considera correcto y sin rituales: personalidad obsesiva, no TOC.' },
        { cells: ['TOC sin mejoría a las 4 semanas', 'Subir dosis; esperar 8 a 12', 'Suspender o cambiar a benzodiacepina'],
          say: 'Sin mejoría a las cuatro semanas con dosis baja: se sube la dosis y se espera. El error es suspender o cambiar a una benzodiacepina.' },
        { cells: ['TOC en cualquier grado', 'ISRS más EPR', 'Solo benzodiacepina o solo reposo'],
          say: 'Y el tratamiento siempre combina un ISRS con exposición y prevención de respuesta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 21 años, estudiante de ingeniería, consulta con su madre. Hace 8 meses tiene pensamientos continuos e involuntarios de que sus manos están contaminadas con bacterias letales. Para calmar la angustia se lava las manos con jabón desinfectante 15 veces seguidas tras tocar cualquier objeto, más de 4 horas al día. Tiene dermatitis de contacto con fisuras y eritema en ambas manos. Llorando dice: «Sé perfectamente que no me voy a infectar y que es una estupidez lavarme tanto, pero si no lo hago siento que me va a dar un ataque de pánico».',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Clonazepam cada 8 horas de forma crónica' },
        { letter: 'B', text: 'ISRS en dosis crecientes, TCC con EPR, emolientes y derivar a psiquiatría' },
        { letter: 'C', text: 'Haloperidol en monoterapia por ideas delirantes' },
        { letter: 'D', text: 'Solo tranquilizarlo y pedirle que se lave menos' },
        { letter: 'E', text: 'Psicoterapia psicodinámica sin fármacos' },
      ],
      correct: 'B',
      explanation: 'TOC con obsesión de contaminación y compulsión de lavado, egodistónico (insight conservado) y de más de 4 horas diarias. Manejo: ISRS de primera línea en dosis altas (sertralina partiendo en 50 mg y titulando hasta 150 a 200 mg), TCC con exposición y prevención de respuesta, explicar la latencia de 8 a 12 semanas, tratar la dermatitis con emolientes y derivar a nivel secundario. Las benzodiacepinas crónicas no tienen lugar.',
      say: {
        stem: 'Un joven de veintiún años consulta con su madre. Hace ocho meses piensa, sin quererlo, que sus manos están contaminadas. Para calmar la angustia se lava quince veces seguidas tras tocar cualquier objeto, más de cuatro horas al día, y tiene dermatitis con fisuras. Llorando dice que sabe que no se va a infectar, que es una estupidez, pero que si no lo hace siente que le dará un ataque de pánico.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: clonazepam crónico; ISRS en dosis crecientes, terapia con exposición y prevención de respuesta, emolientes y derivar; haloperidol; solo tranquilizarlo; o psicoterapia psicodinámica sin fármacos. Piénsalo.',
        answer: 'Es la B. TOC clásico: obsesión de contaminación, compulsión de lavado, egodistónico y de más de cuatro horas al día. Se trata con ISRS en dosis crecientes, exposición con prevención de respuesta, emolientes para la piel y derivación. La respuesta tarda ocho a doce semanas. El clonazepam crónico es el error clásico, y el haloperidol no corresponde: no hay delirio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 155',
      stem: 'Una paciente de 55 años, se lava las manos recurrentemente porque siente que se encuentran sucias, el hecho de no hacerlo rápidamente le provoca gran angustia. Esto le ha provocado dermatitis en sus manos, por lo cual está preocupada. Sabe que esta conducta no tiene sentido, pero no puede evitarlo. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno de ansiedad' },
        { letter: 'B', text: 'Ansiedad específica' },
        { letter: 'C', text: 'Trastorno dismórfico corporal' },
        { letter: 'D', text: 'Trastorno disociativo' },
        { letter: 'E', text: 'Trastorno obsesivo compulsivo' },
      ],
      correct: 'E',
      explanation: 'Obsesión de contaminación y compulsión de lavado, que la paciente reconoce sin sentido pero no puede evitar (egodistónica), con consecuencias en la piel: trastorno obsesivo compulsivo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una paciente de cincuenta y cinco años se lava las manos de forma recurrente porque siente que están sucias, y no hacerlo rápido le provoca gran angustia. Tiene dermatitis por eso. Sabe que esta conducta no tiene sentido, pero no puede evitarla.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: trastorno de ansiedad; ansiedad específica; dismórfico corporal; disociativo; o trastorno obsesivo compulsivo. Piénsalo.',
        answer: 'Es la E. Hay obsesión de suciedad y compulsión de lavado, y la frase clave es que sabe que no tiene sentido pero no puede evitarlo: es egodistónico. La dermatitis es la consecuencia del ritual. Una ansiedad inespecífica no explica el ritual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 13',
      stem: 'Un paciente de 32 años se lava las manos repetidamente durante el día. Al examen está lúcido, cooperador, pero angustiado. Refiere que una voz interior le ordena lavarse las manos y no puede desobedecerle. ¿Cuál es el fármaco de elección para iniciar el tratamiento?',
      question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Litio' },
        { letter: 'B', text: 'Fluoxetina' },
        { letter: 'C', text: 'Olanzapina' },
        { letter: 'D', text: 'Carbamazepina' },
        { letter: 'E', text: 'Alprazolam' },
      ],
      correct: 'B',
      explanation: 'Es un TOC, que se trata con antidepresivos ISRS. La «voz interior» no es una alucinación mientras el paciente no la escuche directamente ni la considere algo ajeno o externo a él.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de treinta y dos años se lava las manos repetidamente durante el día. Está lúcido, cooperador, pero angustiado. Dice que una voz interior le ordena lavarse las manos y no puede desobedecerle.',
        question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
        options: 'Las opciones: litio; fluoxetina; olanzapina; carbamazepina; o alprazolam. Piénsalo.',
        answer: 'Es la B. Es un TOC y la primera línea es un ISRS, como la fluoxetina. La voz interior es el distractor: es el propio pensamiento intrusivo, no una alucinación, así que no corresponde un antipsicótico como la olanzapina. El alprazolam es una benzodiacepina, que no trata el TOC. Recuerda que en el TOC las dosis son altas y la respuesta tarda semanas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 15',
      stem: 'Un hombre de 34 años, que fue padre hace 2 meses, presenta imágenes recurrentes y desagradables, en las que él se ve asfixiando a su bebé con una almohada. Se siente muy angustiado y evita el contacto con su hijo, por miedo a hacerle daño. No ha querido contarle a su cónyuge, ya que se siente avergonzado y cree que se puede estar volviendo loco. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Depresión psicótica' },
        { letter: 'B', text: 'Trastorno de estrés postraumático' },
        { letter: 'C', text: 'Trastorno adaptativo' },
        { letter: 'D', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'E', text: 'Trastorno delirante' },
      ],
      correct: 'D',
      explanation: 'Es un TOC clásico, con obsesión de acción negativa y compulsión de evitación. Otras obsesiones preguntadas han sido ser pedófilo, ser infiel o agredir a personas en la calle.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un hombre de treinta y cuatro años, padre hace dos meses, tiene imágenes recurrentes y desagradables en las que se ve asfixiando a su bebé con una almohada. Está muy angustiado y evita el contacto con su hijo por miedo a hacerle daño. No se lo ha contado a su cónyuge por vergüenza, y cree que se puede estar volviendo loco.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: depresión psicótica; estrés postraumático; trastorno adaptativo; trastorno obsesivo compulsivo; o trastorno delirante. Piénsalo.',
        answer: 'Es la D. Hay una imagen intrusiva de dañar, que le produce angustia, y una conducta de evitación: obsesión de daño con compulsión de evitación. Fíjate que él rechaza la idea y teme volverse loco, por eso no es un delirio ni una psicosis. Y el padre no quiere dañar a su hijo: sufre justamente por eso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 73',
      stem: 'Un paciente de 36 años presenta la idea de que puede ser pedófilo. Aquello lo angustia mucho y le aterra la idea de acercarse a los niños. Por ello reza y evita situaciones en las que estará en contacto con niños. Su diagnóstico es:',
      question: 'Su diagnóstico es:',
      options: [
        { letter: 'A', text: 'Trastorno delirante' },
        { letter: 'B', text: 'Parafilia' },
        { letter: 'C', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'D', text: 'Trastorno de la inclinación sexual' },
        { letter: 'E', text: 'Trastorno de ansiedad generalizada' },
      ],
      correct: 'C',
      explanation: 'Es un TOC clásico con obsesión de conducta inmoral y compulsión de evitación y de rezar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de treinta y seis años tiene la idea de que puede ser pedófilo. Eso lo angustia mucho y le aterra acercarse a los niños. Por eso reza y evita las situaciones en que estaría con niños.',
        question: 'Su diagnóstico es:',
        options: 'Las opciones: trastorno delirante; parafilia; trastorno obsesivo compulsivo; trastorno de la inclinación sexual; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la C. Una idea intrusiva que lo aterra, con compulsión de rezar y de evitar: TOC. La parafilia sería un deseo vivido sin angustia, y aquí el paciente sufre y rechaza la idea. Es el mismo razonamiento egodistónico que vimos hoy.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 11',
      stem: 'Una paciente de 32 años presenta imágenes recurrentes, en que se ve a sí misma cortando a su hijo de 12 meses, con un cuchillo. Aquello le genera mucha angustia y miedo de dañar a su hijo. Por ello, nunca se queda a solas con el niño y sacó todos los cuchillos de los cajones de la casa. Está muy angustiada y triste, porque no quiere que le pase nada malo a su hijo y teme tener problemas con sus familiares o perder la tuición del niño, por lo que no le ha contado su problema a nadie. Ha pensado incluso en morir, con tal de proteger a su familia. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno bipolar' },
        { letter: 'B', text: 'Episodio psicótico' },
        { letter: 'C', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'D', text: 'Trastorno depresivo mayor' },
        { letter: 'E', text: 'Trastorno de adaptación' },
      ],
      correct: 'C',
      explanation: 'Es un TOC clásico, con obsesión de causar daño y compulsión evitativa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una paciente de treinta y dos años tiene imágenes recurrentes en que se ve cortando a su hijo de doce meses con un cuchillo. Eso le produce mucha angustia: nunca se queda sola con el niño y sacó todos los cuchillos de la casa. Está triste, teme perder la tuición y no se lo ha contado a nadie. Ha pensado incluso en morir para proteger a su familia.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: bipolar; episodio psicótico; trastorno obsesivo compulsivo; depresión mayor; o trastorno de adaptación. Piénsalo.',
        answer: 'Es la C. Obsesión de causar daño, con compulsión evitativa de esconder cuchillos y no quedarse a solas con el hijo. No es un episodio psicótico, porque ella rechaza la idea. La tristeza es consecuencia del sufrimiento, y como hay ideas de morir, se evalúa además el riesgo suicida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: TOC',
      cards: [
        { title: 'Diagnóstico', tag: 'Clave', kind: 'key', items: [
          { t: 'Obsesión más compulsión', d: 'Más de 1 hora al día; egodistónico',
            say: 'Cerremos con las reglas de oro. El TOC es obsesión más compulsión, que consumen más de una hora al día, y es egodistónico: el paciente sabe que es absurdo y sufre.' },
          { t: 'No es personalidad obsesiva', d: 'Allí no hay obsesiones ni rituales',
            say: 'Y no se confunde con la personalidad obsesiva, que es egosintónica y sin rituales.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'EPR más ISRS en dosis altas', d: 'Esperar 8 a 12 semanas',
            say: 'El tratamiento es exposición con prevención de respuesta más un ISRS en dosis altas, esperando ocho a doce semanas antes de decidir.' },
          { t: 'Clomipramina o derivar si no responde', d: 'Nunca benzodiacepinas crónicas',
            say: 'Si no responde, clomipramina o potenciación, y derivación. Nunca benzodiacepinas crónicas. Si te llevas una sola idea de hoy: sabe que es absurdo pero no puede evitarlo, es TOC, y se trata con ISRS en dosis altas y exposición sin ritual. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Obsesiones y compulsiones: del diagnóstico al tratamiento',
    root: N('start', 'Pensamientos intrusivos y rituales', 'Lavado, revisar, ordenar; angustia',
      'Un paciente consulta por pensamientos intrusivos que le angustian y por rituales repetitivos que le quitan horas del día. Primero hay que ver si el síntoma es egodistónico.',
      ['Sabe que es absurdo y sufre', N('ok', 'TOC', 'Obsesiones y compulsiones, más de 1 hora al día',
        'Es un trastorno obsesivo-compulsivo. Se evalúa también el riesgo suicida si hay vergüenza o desesperanza. El tratamiento combina terapia y fármaco.',
        ['Siempre', N('do', 'EPR más ISRS en dosis altas', 'Sertralina, fluoxetina; esperar 8 a 12 semanas',
          'Terapia cognitivo-conductual con exposición y prevención de respuesta, más un inhibidor selectivo de la recaptación de serotonina en dosis altas, esperando ocho a doce semanas.',
          ['Sin respuesta', N('refer', 'Clomipramina o potenciar; derivar', 'Aripiprazol o risperidona en dosis bajas',
            'Si no responde, clomipramina o potenciación con un antipsicótico atípico, y derivación a psiquiatría a nivel secundario.')],
        )],
      )],
      ['Cree que es correcto, sin rituales', N('refer', 'Personalidad obsesiva', 'Egosintónica; perfeccionismo',
        'Es un rasgo de personalidad, egosintónico, sin obsesiones ni rituales. Se maneja con psicoterapia individual.')],
      ['Cree que le ordenan o le persiguen desde afuera', N('alert', 'Descartar psicosis', 'Alucinaciones o delirio',
        'Si la voz es externa o la idea se vive como ajena y creída, hay que descartar un cuadro psicótico, que no es TOC.')],
    ),
  },
};
