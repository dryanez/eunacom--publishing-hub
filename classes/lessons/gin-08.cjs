// Clase 20.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro condiciones que prohíben el estrógeno, y qué das en su lugar',
      say: 'Bienvenida. Hoy vemos anticoncepción y planificación familiar: los criterios de elegibilidad de la Organización Mundial de la Salud, y la píldora de emergencia. Vas a ver que casi todo el examen se resume en una pregunta: ¿esta paciente puede recibir estrógenos, o no? Aprende bien esa lista, porque se pregunta siempre.',
    },

    {
      type: 'points',
      kicker: 'Criterios OMS',
      title: 'Cuatro categorías, y una que nunca se cruza',
      cards: [
        { title: 'Categorías uno a tres', tag: 'De libre uso a poco recomendado', kind: 'normal', items: [
          { t: 'Categoría uno', d: 'Sin ninguna restricción',
            say: 'Empecemos por las categorías. La categoría uno es de libre uso, sin ninguna restricción.' },
          { t: 'Categorías dos y tres', d: 'Ventajas o riesgos que se van pesando',
            say: 'La categoría dos, las ventajas superan los riesgos y generalmente se puede usar. La categoría tres es al revés: los riesgos superan las ventajas, así que solo se usa si no hay otra opción.' },
        ] },
        { title: 'Categoría cuatro', tag: 'La que se pregunta siempre', kind: 'alert', items: [
          { t: 'Riesgo inaceptable', d: 'No se usa bajo ninguna circunstancia',
            say: 'Y la categoría cuatro es la que tienes que memorizar de verdad: riesgo inaceptable para la salud. Ese método no se usa bajo ninguna circunstancia, sin excepción.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Categoría cuatro',
      title: '¿Qué prohíbe el estrógeno para siempre?',
      cards: [
        { title: 'Riesgo cardiovascular', tag: 'La lista que más se pregunta', kind: 'alert', items: [
          { t: 'Fumadora de 35 años o más', d: 'Quince cigarrillos al día o más',
            say: 'Vamos a la lista que decide casi todo el examen. Primero, fumadora de treinta y cinco años o más, con quince cigarrillos al día o más.' },
          { t: 'Migraña con aura', d: 'A cualquier edad',
            say: 'Segundo, migraña con aura, a cualquier edad: los destellos, las parestesias, cualquier síntoma neurológico focal antes del dolor.' },
          { t: 'Trombosis venosa o hipertensión severa', d: 'Actual o antecedente personal',
            say: 'Y tercero, trombosis venosa profunda actual o antigua, o hipertensión severa, con la presión sobre ciento sesenta el número de arriba, o cien el de abajo.' },
          { t: 'Trombofilias conocidas', d: 'Factor V de Leiden, síndrome antifosfolípido',
            say: 'También entran aquí las trombofilias diagnosticadas: la mutación del factor cinco de Leiden, la mutación de protrombina, o el síndrome antifosfolípido.' },
        ] },
        { title: 'Otras contraindicaciones', tag: 'Hormonales y hepáticas', kind: 'criteria', items: [
          { t: 'Cáncer de mama actual', d: 'O en los últimos cinco años',
            say: 'También el cáncer de mama actual, o diagnosticado en los últimos cinco años, porque es un tumor hormonodependiente.' },
          { t: 'Lactancia antes de seis semanas', d: 'O enfermedad hepática severa activa',
            say: 'Y la lactancia antes de las seis semanas postparto, o una enfermedad hepática severa activa, como una cirrosis descompensada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el estrógeno es el que se prohíbe?',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'cause', t: 'Estrógeno exógeno', s: 'Del anticonceptivo combinado' },
        { id: 'coa', col: 1, row: 1, k: 'mech', t: 'Sube los factores de coagulación', s: 'Estado protrombótico' },
        { id: 'fac', col: 0, row: 3, k: 'cause', t: 'Tabaco, aura o daño vascular', s: 'El segundo factor de riesgo' },
        { id: 'sin', col: 2, row: 2, k: 'risk', t: 'Los dos factores se suman', s: 'Sinergismo, no solo suma' },
        { id: 'eve', col: 3, row: 2, k: 'alert', t: 'Trombosis, infarto o ACV', s: 'Por eso es categoría cuatro' },
      ],
      edges: [
        { from: 'est', to: 'coa' }, { from: 'coa', to: 'sin' },
        { from: 'fac', to: 'sin' }, { from: 'sin', to: 'eve' },
      ],
      steps: [
        { show: ['est'], note: 'No es el progestágeno el problema',
          say: 'Vale la pena que entiendas por qué se arma esta lista, y no que la memorices sin más. El estrógeno del anticonceptivo combinado es el componente que cambia la coagulación.' },
        { show: ['coa'], note: 'Sube el fibrinógeno y otros factores',
          say: 'Sube varios factores de coagulación en el hígado, dejando a la paciente en un estado protrombótico de fondo.' },
        { show: ['fac'], note: 'El tabaco, el aura o la hipertensión dañan el vaso',
          say: 'Si a eso le sumas un segundo factor, como el tabaco después de los treinta y cinco años, el vasoespasmo de la migraña con aura, o el daño vascular de una hipertensión severa, el riesgo no solo se suma.' },
        { show: ['sin'], note: 'Sinergismo, no suma simple',
          say: 'Se multiplica: es un sinergismo entre el estado protrombótico del estrógeno y el daño vascular del otro factor.' },
        { show: ['eve'], note: 'Por eso es categoría cuatro y no categoría tres',
          say: 'Y ese sinergismo es justo lo que dispara la trombosis venosa, el infarto o el accidente cerebrovascular. Por eso estas condiciones no son categoría tres, sino cuatro: el riesgo se vuelve inaceptable.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Alternativas seguras',
      title: 'Si no puede recibir estrógeno, ¿qué le das?',
      cards: [
        { title: 'Solo progestágeno', tag: 'No sube el riesgo trombótico', kind: 'pharma', items: [
          { t: 'Implante de etonogestrel', d: 'El método reversible más eficaz que existe',
            say: 'La ventaja de los solo progestágenos es que no aumentan el riesgo trombótico. El implante de etonogestrel es el método reversible más eficaz que existe hoy.' },
          { t: 'Minipíldora o DIU-LNG', d: 'Igual de seguros en estas pacientes',
            say: 'También tienes la minipíldora de desogestrel, y el DIU con levonorgestrel: ambos son seguros justo en las mismas pacientes en las que el estrógeno está prohibido.' },
        ] },
        { title: 'DIU de cobre', tag: 'Sin ninguna hormona', kind: 'criteria', items: [
          { t: 'Diez a doce años de duración', d: 'Seguro incluso en categoría cuatro',
            say: 'Y el DIU de cobre no tiene ninguna hormona: dura entre diez y doce años, y es seguro incluso en toda paciente categoría cuatro para el estrógeno.' },
          { t: 'Contraindicado en infección pélvica activa', d: 'O ante sospecha de embarazo',
            say: 'Lo único que sí lo contraindica es una infección pélvica activa, o la sospecha de un embarazo en curso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia',
      title: 'La píldora del día después',
      cards: [
        { title: 'Levonorgestrel', tag: 'El fármaco de elección en Chile', kind: 'pharma', items: [
          { t: 'Punto cinco miligramos, dosis única', d: 'Dentro de las primeras setenta y dos horas',
            say: 'La anticoncepción de emergencia de elección en Chile es el levonorgestrel, un punto cinco miligramos en dosis única, idealmente dentro de las primeras setenta y dos horas.' },
          { t: 'No es abortivo', d: 'Retrasa el pico de la hormona luteinizante',
            say: 'Su mecanismo es retrasar o frenar el pico de la hormona luteinizante, evitando la ovulación. No interrumpe un embarazo ya implantado: no es abortivo.' },
          { t: 'Vómito antes de 2 horas', d: 'Repite la dosis completa',
            say: 'Y un dato que se pregunta seguido: si vomita antes de las dos horas de tomarla, repite la dosis completa, porque se asume que no alcanzó a absorberse.' },
          { t: 'Acetato de ulipristal', d: 'Mejor opción con sobrepeso',
            say: 'También existe el acetato de ulipristal, en dosis única, con ventana hasta ciento veinte horas. Es mejor opción que el levonorgestrel en la paciente con sobrepeso.' },
        ] },
        { title: 'DIU de cobre de emergencia', tag: 'El método más eficaz', kind: 'alert', items: [
          { t: 'Hasta ciento veinte horas postcoito', d: 'Eficacia sobre el noventa y nueve por ciento',
            say: 'Y el método de emergencia más eficaz de todos es insertar un DIU de cobre, hasta ciento veinte horas después del coito, con una eficacia sobre el noventa y nueve por ciento.' },
          { t: 'Además, queda anticoncepción para diez años', d: 'A diferencia de la píldora',
            say: 'Y a diferencia de la píldora, con el DIU la paciente sale con anticoncepción para los próximos diez años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Solo progestágeno',
      title: 'Uno por uno, para que no te confundas',
      cards: [
        { title: 'Orales e inyectable', tag: 'Sin descansos', kind: 'pharma', items: [
          { t: 'Desogestrel setenta y cinco microgramos', d: 'Inhibe la ovulación, sin pausas',
            say: 'Repasemos cada uno de los solo progestágeno. La minipíldora de desogestrel se toma todos los días, sin ninguna pausa, e inhibe la ovulación.' },
          { t: 'Inyectable trimestral', d: 'Puede retrasar la fertilidad un año',
            say: 'El inyectable trimestral de medroxiprogesterona da amenorrea en la mayoría de las usuarias, pero tiene una desventaja: la fertilidad puede tardar hasta un año en recuperarse tras suspenderlo.' },
        ] },
        { title: 'Implante y DIU-LNG', tag: 'Larga duración', kind: 'key', items: [
          { t: 'Implante: tres a cinco años', d: 'El índice de falla más bajo que existe',
            say: 'El implante subdérmico dura entre tres y cinco años, y tiene el índice de falla más bajo de toda la anticoncepción reversible.' },
          { t: 'DIU-LNG: cinco a ocho años', d: 'Reduce el sangrado sobre el noventa por ciento',
            say: 'Y el DIU con levonorgestrel dura entre cinco y ocho años, y reduce el sangrado menstrual en más del noventa por ciento: por eso también lo usas para tratar la hipermenorrea.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos decisiones en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Elegibilidad según la condición de la paciente',
      head: ['Condición médica', 'Métodos combinados', 'Solo progestágeno', 'DIU de cobre'],
      rows: [
        { cells: ['Fumadora de treinta y cinco años o más', 'Categoría cuatro, prohibido', 'Categoría uno, sin restricción', 'Categoría uno'],
          say: 'Repasemos en una tabla. Fumadora de treinta y cinco o más: prohibido el combinado, pero sin restricción el solo progestágeno o el cobre.' },
        { cells: ['Migraña con aura', 'Categoría cuatro, prohibido', 'Seguro', 'Sin restricción'],
          say: 'Migraña con aura: mismo patrón, prohibido el combinado, seguro todo lo demás.' },
        { cells: ['Trombosis venosa previa', 'Categoría cuatro, prohibido', 'Aceptable', 'Sin restricción'],
          say: 'Trombosis venosa previa: igual, el combinado queda fuera.' },
        { cells: ['Cáncer de mama actual', 'Prohibido', 'También prohibido', 'Sin restricción'],
          say: 'Pero fíjate en esta fila, que es distinta: con cáncer de mama actual, también se prohíbe el solo progestágeno, porque el tumor es hormonodependiente. Solo el DIU de cobre queda disponible.' },
        { cells: ['Infección pélvica activa', 'Sin restricción', 'Sin restricción', 'Prohibido'],
          say: 'Y esta fila se invierte del todo: con infección pélvica activa, lo prohibido es justamente el DIU de cobre, por el riesgo de diseminar la infección.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 37 años, fumadora de 20 cigarrillos al día desde los 18 años, solicita el mismo anticonceptivo combinado de etinilestradiol con drospirenona que usa su amiga. No tiene otros antecedentes y su presión arterial es 125/80.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar el anticonceptivo combinado solicitado' },
        { letter: 'B', text: 'Denegar el combinado y ofrecer un método solo progestágeno o DIU de cobre' },
        { letter: 'C', text: 'Indicar el mismo combinado, pero en dosis reducida de estrógeno' },
        { letter: 'D', text: 'Indicar el combinado por vía transdérmica en parche' },
        { letter: 'E', text: 'Indicar el combinado por anillo vaginal' },
      ],
      correct: 'B',
      explanation: 'Ser fumadora de 35 años o más con 15 o más cigarrillos al día es categoría 4 de la OMS para cualquier método con estrógeno, sin importar la vía de administración. Se debe ofrecer un método de solo progestágeno o el DIU de cobre.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y siete años, fumadora de veinte cigarrillos al día desde los dieciocho años, solicita el mismo anticonceptivo combinado de etinilestradiol con drospirenona que usa su amiga. No tiene otros antecedentes, y su presión arterial es ciento veinticinco sobre ochenta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: indicar el combinado solicitado, denegarlo y ofrecer solo progestágeno o DIU de cobre, indicarlo en dosis reducida, indicarlo en parche, o indicarlo en anillo vaginal. Piénsalo.',
        answer: 'Es la B. Y fíjate en la trampa: no importa si cambias la vía a parche o anillo, o si bajas la dosis. Ser fumadora de treinta y cinco años o más, con veinte cigarrillos al día, es categoría cuatro para cualquier estrógeno, por cualquier vía. Lo correcto es explicarle el riesgo y ofrecerle un método solo progestágeno o el DIU de cobre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 19',
      stem: 'Mujer de 22 años, nulípara, con antecedente de migraña a repetición y un episodio de amaurosis fugax, desea iniciar un método anticonceptivo. Su examen físico es normal.',
      question: '¿Cuál de los siguientes métodos anticonceptivos indicaría a esta paciente?',
      options: [
        { letter: 'A', text: 'Anticonceptivos combinados por vía oral' },
        { letter: 'B', text: 'Anticonceptivos combinados por vía transdérmica' },
        { letter: 'C', text: 'Salpingoligadura' },
        { letter: 'D', text: 'Dispositivo intrauterino con progestágeno' },
        { letter: 'E', text: 'Anticonceptivos combinados inyectables' },
      ],
      correct: 'D',
      explanation: 'La migraña con aura, aquí manifestada como amaurosis fugax, es categoría 4 para cualquier método con estrógeno. El DIU con progestágeno es la opción segura, a pesar de que la nuliparidad sea una contraindicación relativa menor del dispositivo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de veintidós años, nulípara, con migrañas a repetición y un episodio de amaurosis fugax, quiere iniciar un método anticonceptivo. Su examen físico es normal.',
        question: '¿Cuál de los siguientes métodos anticonceptivos indicaría a esta paciente?',
        options: 'Las opciones: combinado oral, combinado transdérmico, salpingoligadura, DIU con progestágeno, o combinado inyectable. Piénsalo.',
        answer: 'La respuesta es la D. La amaurosis fugax es una forma de aura visual: eso hace que cualquier estrógeno, por cualquier vía, sea categoría cuatro para ella. La salpingoligadura queda fuera por ser irreversible en una paciente joven y nulípara. El DIU con progestágeno es la opción segura, aunque la nuliparidad sea apenas una contraindicación relativa y menor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 172',
      stem: 'Mujer de 20 años, nuligesta, tuvo relaciones sexuales sin protección hace 72 horas y consulta por anticoncepción de emergencia.',
      question: '¿Cuál es la más efectiva?',
      options: [
        { letter: 'A', text: 'Levonorgestrel 0,75 mg por una vez' },
        { letter: 'B', text: 'Levonorgestrel 0,75 mg ahora y otra dosis en 12 horas' },
        { letter: 'C', text: 'Método de Yuzpe' },
        { letter: 'D', text: 'Anillo vaginal' },
        { letter: 'E', text: 'Dispositivo intrauterino de cobre' },
      ],
      correct: 'E',
      explanation: 'Dentro de las 120 horas postcoito, el DIU de cobre es el método de anticoncepción de emergencia más eficaz que existe, con una eficacia sobre el 99 %, muy superior al levonorgestrel oral.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Mujer de veinte años, nuligesta, tuvo relaciones sexuales sin protección hace setenta y dos horas y consulta por anticoncepción de emergencia.',
        question: '¿Cuál es la más efectiva?',
        options: 'Las opciones: levonorgestrel en dosis única, levonorgestrel en dos dosis separadas, método de Yuzpe, anillo vaginal, o DIU de cobre. Piénsalo.',
        answer: 'Es la E. Aunque el levonorgestrel es el que más usas en la práctica, si te preguntan por el método más eficaz, la respuesta es el DIU de cobre: por encima del noventa y nueve por ciento, muy superior a cualquier pastilla, y además le queda anticoncepción para los próximos diez años.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 45',
      stem: 'Paciente con un hijo de 8 meses, aún en lactancia materna exclusiva, consulta por el método anticonceptivo más adecuado.',
      question: '¿Cuál es el método anticonceptivo más adecuado?',
      options: [
        { letter: 'A', text: 'Anticonceptivos orales combinados' },
        { letter: 'B', text: 'Dispositivo intrauterino con levonorgestrel' },
        { letter: 'C', text: 'Anillo vaginal mensual' },
        { letter: 'D', text: 'Parche anticonceptivo transdérmico' },
        { letter: 'E', text: 'Implante subdérmico de etonogestrel' },
      ],
      correct: 'B',
      explanation: 'A los 8 meses postparto, ya pasadas las primeras 6 semanas, el DIU con levonorgestrel es una excelente opción de larga duración, sin estrógeno, compatible con la lactancia y sin afectar el volumen de leche.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con un hijo de ocho meses, aún en lactancia materna, consulta por el método anticonceptivo más adecuado.',
        question: '¿Cuál es el método anticonceptivo más adecuado?',
        options: 'Las opciones: combinado oral, DIU con levonorgestrel, anillo vaginal, parche transdérmico, o implante de etonogestrel. Piénsalo.',
        answer: 'La respuesta es la B. A los ocho meses ya pasaron las primeras seis semanas postparto, así que la lactancia por sí sola ya no prohíbe el estrógeno, pero el DIU con levonorgestrel sigue siendo la mejor opción: no tiene estrógeno, no afecta la leche, y le da protección de larga duración sin que tenga que acordarse de nada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Categoría cuatro', tag: 'Nunca estrógeno', kind: 'alert', items: [
          { t: 'Fumadora, migraña con aura, TVP', d: 'O hipertensión severa',
            say: 'Cerremos. Fumadora de treinta y cinco o más, migraña con aura, trombosis venosa o hipertensión severa: nunca estrógeno.' },
        ] },
        { title: 'Alternativa', tag: 'Casi siempre segura', kind: 'pharma', items: [
          { t: 'Solo progestágeno o DIU de cobre', d: 'No suben el riesgo trombótico',
            say: 'En esas pacientes, solo progestágeno o DIU de cobre: ninguno sube el riesgo de trombosis.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Levonorgestrel en dosis única', d: 'DIU de cobre si buscas la máxima eficacia',
            say: 'Si te llevas una sola idea de hoy: levonorgestrel en dosis única para la emergencia, y el DIU de cobre cuando lo que buscas es la máxima eficacia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Anticoncepción: elegibilidad y emergencia',
    root: N('start', 'Mujer solicita anticoncepción', 'Rutina, o consulta de emergencia',
      'Partamos de la consulta. Primero define si es una asesoría de rutina, o si viene por una anticoncepción de emergencia.',
      ['Asesoría de rutina', N('q', '¿Tiene alguna condición categoría cuatro?', 'Fumadora, migraña con aura, TVP, HTA severa',
        'Si es rutina, la pregunta clave es si tiene alguna condición categoría cuatro para el estrógeno.',
        ['Sí, tiene alguna', N('alert', 'Nunca uses estrógeno', 'Ningún método combinado',
          'Si tiene alguna, nunca uses estrógeno: ni combinado oral, ni parche, ni anillo.',
          ['', N('do', 'Solo progestágeno o DIU de cobre', 'Según su preferencia',
            'La alternativa es un método solo progestágeno, o el DIU de cobre, según lo que ella prefiera.')])],
        ['No tiene ninguna', N('ok', 'Método combinado o DIU a elección', 'Sin restricción médica',
          'Si no tiene ninguna condición categoría cuatro, puede elegir libremente entre un combinado o un DIU.')])],
      ['Emergencia', N('q', '¿Cuántas horas pasaron desde la relación?', 'Define la ventana de eficacia',
        'Si consulta por emergencia, pregúntale cuántas horas pasaron desde la relación sin protección.',
        ['Menos de ciento veinte horas', N('do', 'Levonorgestrel un punto cinco miligramos en dosis única', 'O DIU de cobre si busca máxima eficacia',
          'Dentro de las ciento veinte horas, levonorgestrel un punto cinco miligramos en dosis única es la opción estándar. Si buscas la máxima eficacia, el DIU de cobre.')],
        ['Vomitó antes de dos horas', N('alert', 'Repite la dosis completa', 'Se asume que no se absorbió',
          'Y si vomitó antes de las dos horas de tomarla, repite la dosis completa: se asume que no alcanzó a absorberse.')])]),
  },
};
