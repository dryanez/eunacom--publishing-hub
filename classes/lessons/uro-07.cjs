// Clase 13.7 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-07). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase (4.01.1.018) en el banco real corresponde a quiste pilonidal (no es del tema); se usaron las preguntas de la búsqueda por tema:
// Diciembre 2017 P148 (varicocele en adolescente con atrofia y dolor) y Diciembre 2025 P124 (quiste de epidídimo en ecografía). Ninguna aparece en otra clase.
// No usada: Julio 2017 P162 (tumor testicular sólido, orquiectomía radical): es del tema de cáncer de testículo (uro-10).
// Hidrocele y varicocele sin pregunta real propia sobre transiluminación ni bandera roja renal: el caso clínico de la clase cubre la bandera roja.
// Seguridad: la punción evacuadora del hidrocele se enseña como contraindicada (recidiva e infección), como dice el libro.
// Imágenes: Bailey & Love 27.ª ed., Fig. 80.10 (hidrocele) y Fig. 80.13 (ecografía de quiste de epidídimo). El varicocele (Fig. 80.7 y 80.8) se extrajo en menos de 250 px: no se usó.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Escroto que crece sin dolor: varicocele, hidrocele y quiste de epidídimo, y cuándo sospechar un tumor',
      say: 'Bienvenido. En la clase anterior vimos el escroto que duele. Hoy vemos el que crece sin dolor, que casi siempre es benigno. El examen quiere que sepas distinguirlo con una linterna y con la palpación, y que no se te escape la bandera roja: un varicocele que no se colapsa puede esconder un tumor renal.',
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Cómo se examina una masa indolora',
      cards: [
        { title: 'Dónde está la masa', tag: 'Primera pregunta', kind: 'key', items: [
          { t: 'Intratesticular: sospecha de cáncer', d: 'Siempre hasta demostrar lo contrario',
            say: 'La primera pregunta es dónde está la masa. Si es del propio testículo, intratesticular, se sospecha malignidad hasta demostrar lo contrario. Si es extratesticular, casi siempre es benigna.' },
          { t: '¿Se palpa el cordón por encima?', d: 'Si no, piensa en hernia',
            say: 'Y siempre palpa si puedes llegar al cordón espermático por encima de la masa. Si no puedes, puede ser una hernia inguinoescrotal y no una patología del escroto.' },
        ] },
        { title: 'Transiluminación', tag: 'Linterna en pieza oscura', kind: 'alert', items: [
          { t: 'Positiva: contenido líquido', d: 'Hidrocele o espermatocele',
            say: 'Apoyas una linterna por detrás del escroto, en una pieza oscura. Si la masa se ilumina con un halo rosado, el contenido es líquido claro: hidrocele o espermatocele.' },
          { t: 'Negativa: sólido o vascular', d: 'Tumor, hematocele, varicocele',
            say: 'Si no deja pasar la luz, es sólida o vascular: tumor, hematocele o varicocele. Esa maniobra, que no cuesta nada, ordena todo el diagnóstico diferencial.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué el varicocele es izquierdo',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Vena espermática izquierda', s: 'Desemboca en la vena renal' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Ángulo recto y más presión', s: 'Comprimida bajo la aorta' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Dilatación del plexo', s: 'Bolsa de gusanos' },
        { id: 'd', col: 3, row: 1, k: 'risk', t: 'Calor e hipoxia local', s: 'Daña la espermatogénesis' },
        { id: 'e', col: 4, row: 1, k: 'alert', t: 'Infertilidad masculina', s: '40% con espermiograma alterado' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'La anatomía explica el lado',
          say: 'El varicocele es la dilatación de las venas del plexo pampiniforme. Se ve en el lado izquierdo en ochenta y cinco a noventa por ciento de los casos por una razón anatómica: la vena espermática izquierda desemboca en ángulo recto en la vena renal izquierda, que soporta más presión venosa.' },
        { show: ['c'], note: 'Dilatación y tortuosidad',
          say: 'Esa presión dilata y hace tortuosas las venas. Al tacto se siente como una bolsa de gusanos.' },
        { show: ['d', 'e'], note: 'La causa tratable más frecuente de infertilidad',
          say: 'La sangre estancada sube la temperatura del escroto y produce hipoxia. Eso daña la producción de espermatozoides, y por eso el varicocele es la causa tratable más frecuente de infertilidad masculina. Está presente en cerca de cuarenta por ciento de los varones con espermiograma alterado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Varicocele',
      title: 'Clínica y cuándo se opera',
      cards: [
        { title: 'Cómo se reconoce', tag: 'Semiología', kind: 'key', items: [
          { t: 'Bolsa de gusanos', d: 'Sobre el testículo, no transilumina',
            say: 'Es una masa blanda, tortuosa, sobre y detrás del testículo, que no transilumina. Un varón joven con pesadez escrotal después de estar de pie o de hacer deporte es el cuadro típico.' },
          { t: 'Aumenta con Valsalva', d: 'Se colapsa acostado',
            say: 'Aumenta con la maniobra de Valsalva y desaparece o se colapsa en decúbito dorsal. Esa última propiedad es la que separa el varicocele benigno del peligroso, y la vemos en un momento.' },
        ] },
        { title: 'Tratamiento', tag: 'Varicocelectomía', kind: 'criteria', items: [
          { t: 'Infertilidad con espermiograma alterado', d: 'Oligoastenospermia',
            say: 'Se opera si hay infertilidad con alteración del espermiograma. Antes de decidir, pide un espermiograma y una ecografía Doppler escrotal.' },
          { t: 'Atrofia testicular', d: 'Testículo más chico',
            say: 'También se opera si hay atrofia testicular. Un adolescente con el testículo izquierdo más pequeño que el derecho tiene indicación, y no se espera a que termine la pubertad.' },
          { t: 'Dolor persistente', d: 'Refractario al manejo',
            say: 'Y se opera si el dolor es persistente. Sin estas tres razones, un varicocele asintomático solo se observa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bandera roja',
      title: 'Cuando el varicocele esconde un tumor',
      cards: [
        { title: 'Tres señales', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Aparición brusca después de los 40', d: 'Adulto mayor sin antecedente',
            say: 'Primera señal: un varicocele que aparece de forma brusca en un hombre mayor de cuarenta a cincuenta años.' },
          { t: 'Varicocele derecho aislado', d: 'Lo normal es el izquierdo',
            say: 'Segunda: que sea solamente derecho. El derecho drena directo a la vena cava, y es muy poco frecuente.' },
          { t: 'No se colapsa acostado', d: 'Obstrucción venosa fija',
            say: 'Tercera, la más clásica: que no se colapse en decúbito. Significa que algo obstruye el drenaje venoso de forma fija.' },
        ] },
        { title: 'Qué hacer', tag: 'Conducta', kind: 'key', items: [
          { t: 'TAC de abdomen y pelvis', d: 'Descartar tumor renal',
            say: 'Con cualquiera de las tres se pide un TAC de abdomen y pelvis. Lo que buscas es un carcinoma renal con trombo en la vena renal o en la cava, o una masa retroperitoneal que comprime la vena.' },
          { t: 'No operar ni tranquilizar', d: 'Primero descartar neoplasia',
            say: 'No se opera el varicocele ni se tranquiliza al paciente. Primero se descarta el tumor. El examen lo pregunta con un varón mayor con varicocele derecho que no se colapsa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Masas quísticas',
      title: 'Hidrocele y quiste de epidídimo',
      cards: [
        { title: 'Hidrocele', tag: 'Rodea al testículo', kind: 'key', items: [
          { t: 'Líquido en la túnica vaginal', d: 'Entre sus hojas parietal y visceral',
            say: 'El hidrocele es líquido seroso entre las hojas de la túnica vaginal. En niños suele ser comunicante, por un conducto peritoneovaginal permeable. En adultos es adquirido, idiopático o reactivo a trauma o infección.' },
          { t: 'Testículo no se palpa aparte', d: 'Transilumina',
            say: 'La masa engloba el testículo, así que no puedes palparlo por separado, y transilumina. Es el dato que lo distingue del quiste de epidídimo.' },
          { t: 'Cirugía si molesta; nunca punción', d: 'Recidiva rápida e infección',
            say: 'Si es chico, se observa. Si es grande o molesto, se opera con hidrocelectomía. La punción evacuadora está contraindicada porque recidiva rápido y puede infectarse.' },
        ] },
        { title: 'Quiste de epidídimo', tag: 'Espermatocele', kind: 'normal', items: [
          { t: 'Quiste de la cabeza del epidídimo', d: 'Líquido lechoso con espermatozoides',
            say: 'El espermatocele, o quiste de retención del epidídimo, es una dilatación benigna de los túbulos de la cabeza del epidídimo. Contiene líquido lechoso con espermatozoides.' },
          { t: 'Masa lisa, separada del testículo', d: 'Polo superior, indolora',
            say: 'Se palpa redonda, lisa, tensa e indolora, claramente separada del testículo, arriba. Se observa, y se reseca solo si duele.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Hidrocele y quiste de epidídimo',
      images: [
        { src: 'biblioteca/19_urologia/uro-07/01_hidrocele-derecho-fotografia__bailey-love_p1524.jpg', label: 'Hidrocele derecho: hemiescroto grande, liso y tenso', credit: 'Bailey & Love 27.ª ed., Fig. 80.10' },
        { src: 'biblioteca/19_urologia/uro-07/02_ecografia-quiste-epididimo__bailey-love_p1525.jpg', label: 'Ecografía de un quiste de epidídimo: lesión líquida bien delimitada', credit: 'Bailey & Love 27.ª ed., Fig. 80.13' },
      ],
      steps: [
        { note: 'Un hemiescroto tenso y liso',
          say: 'Mira la forma: un hemiescroto muy aumentado de tamaño, de superficie lisa y tensa. El testículo queda dentro de la masa y por eso no lo puedes palpar por separado. Con la linterna, toda la bolsa se iluminaría.' },
        { note: 'Una colección redonda, de contenido líquido',
          say: 'En la ecografía, el quiste de epidídimo se ve como una lesión redonda, de contenido líquido y paredes finas, fuera del testículo. Esa imagen, junto a un testículo normal, es la que apareció en el examen.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de una masa escrotal indolora a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'Masas escrotales indoloras',
      head: ['Patología', 'Palpación', 'Transilumina', 'Conducta'],
      rows: [
        { cells: ['Hidrocele', 'Engloba el testículo, fluctuante', 'Positiva', 'Observar; cirugía si molesta'],
          say: 'El hidrocele rodea al testículo, es fluctuante y transilumina. Se observa, y se opera si molesta.' },
        { cells: ['Quiste de epidídimo', 'Polo superior, separado del testículo', 'Positiva', 'Observar; resecar si duele'],
          say: 'El quiste de epidídimo está arriba, separado del testículo, y también transilumina. Se observa.' },
        { cells: ['Varicocele benigno', 'Bolsa de gusanos, colapsa acostado', 'Negativa', 'Cirugía si infertilidad, atrofia o dolor'],
          say: 'El varicocele benigno es izquierdo, no transilumina y se colapsa al acostarse. Se opera si hay infertilidad, atrofia o dolor.' },
        { cells: ['Varicocele secundario', 'Derecho o brusco, no colapsa', 'Negativa', 'TAC de abdomen'],
          say: 'El varicocele secundario es derecho o brusco y no se colapsa. Se pide TAC de abdomen.' },
        { cells: ['Cáncer de testículo', 'Intratesticular, pétreo, irregular', 'Negativa', 'Ecografía, marcadores y orquiectomía'],
          say: 'Y la masa intratesticular, dura e irregular, es cáncer hasta demostrar lo contrario. Eso lo vemos en una clase propia.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Masa indolora: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Varicocele derecho que no colapsa', 'TAC de abdomen y pelvis', 'Operar o tranquilizar'],
          say: 'Varicocele derecho que no se colapsa: TAC de abdomen. El error es operar o tranquilizar.' },
        { cells: ['Adolescente con atrofia y dolor', 'Varicocelectomía', 'Esperar la pubertad'],
          say: 'Adolescente con varicocele, atrofia y dolor: se opera. Esperar a la pubertad es el distractor.' },
        { cells: ['Masa que transilumina', 'Hidrocele o quiste', 'Pensar en tumor'],
          say: 'Si la masa transilumina, el contenido es líquido y no es un tumor sólido.' },
        { cells: ['Hidrocele grande', 'Hidrocelectomía', 'Punción evacuadora'],
          say: 'En el hidrocele grande se opera. Puncionar recidiva rápido y puede infectarse.' },
        { cells: ['Quiste de epidídimo asintomático', 'Control ecográfico', 'Orquiectomía o punción'],
          say: 'El quiste de epidídimo asintomático se controla, y no se reseca ni se punciona.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, sano, nota hace 3 semanas un aumento de volumen indoloro en el hemiescroto derecho. Se palpa una masa varicosa tortuosa en el cordón derecho que, al acostarlo en decúbito dorsal, sigue ingurgitada y no se colapsa.',
      question: '¿Cuál es la conducta diagnóstica prioritaria?',
      options: [
        { letter: 'A', text: 'Varicocelectomía subinguinal electiva' },
        { letter: 'B', text: 'Espermiograma para evaluar fertilidad' },
        { letter: 'C', text: 'TAC de abdomen y pelvis con contraste' },
        { letter: 'D', text: 'Tranquilizar: es un proceso benigno por la edad' },
        { letter: 'E', text: 'Suspensorio escrotal y control en 6 meses' },
      ],
      correct: 'C',
      explanation: 'Varicocele derecho, de aparición tardía y que no se colapsa en decúbito: obstrucción venosa fija hasta demostrar lo contrario. Se busca un carcinoma renal con trombo en la vena renal o la cava, o una masa retroperitoneal, con TAC de abdomen y pelvis.',
      say: {
        stem: 'Un hombre de cincuenta y ocho años, sano, nota hace tres semanas un aumento de volumen indoloro en el lado derecho del escroto. Se palpa una masa varicosa en el cordón derecho, y al acostarlo no se colapsa.',
        question: '¿Cuál es la conducta diagnóstica prioritaria?',
        options: 'Las opciones: varicocelectomía electiva; espermiograma; TAC de abdomen y pelvis con contraste; tranquilizar porque es benigno; o suspensorio y control en seis meses. Piénsalo.',
        answer: 'Es la C. Un varicocele derecho, de aparición tardía y que no se colapsa, tiene las tres banderas rojas juntas, y hay que descartar un tumor renal con trombo o una masa retroperitoneal. La A y la D son las trampas, porque tratan o tranquilizan sin descartar una neoplasia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 148',
      stem: 'Un adolescente de 15 años presenta dolor frecuente del testículo izquierdo. Al examen físico se palpa aumento de volumen peritesticular, compatible con un varicocele y además se palpa el testículo izquierdo de menor tamaño que el testículo derecho. Se solicita una ecografía testicular que muestra una dilatación patológica del plexo pampiniforme.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observa evolución hasta que complete su desarrollo puberal' },
        { letter: 'B', text: 'Realizar varicosectomía' },
        { letter: 'C', text: 'Solicitar espermiograma' },
        { letter: 'D', text: 'Realizar biopsia testicular' },
        { letter: 'E', text: 'Solicitar cariograma y niveles de testosterona, LH y FSH' },
      ],
      correct: 'B',
      explanation: 'Tiene indicación de ligadura del plexo pampiniforme, tanto por la atrofia testicular como por el dolor.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un adolescente de quince años con dolor frecuente del testículo izquierdo. Se palpa un varicocele y el testículo izquierdo es más pequeño que el derecho. La ecografía muestra dilatación del plexo pampiniforme.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: observar hasta que complete la pubertad; varicosectomía; espermiograma; biopsia testicular; o cariograma y hormonas. Piénsalo.',
        answer: 'Es la B. Hay atrofia testicular y dolor, y cualquiera de las dos es indicación de cirugía. La A es la tentación, porque el varicocele es frecuente en la adolescencia, pero con atrofia no se espera. El espermiograma no se pide a esta edad para decidir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 124',
      stem: 'Un paciente de 18 años, asintomático, se palpa un tumor intraescrotal derecho, por lo que consulta. Al examen físico se palpa una tumoración extratesticular de 1,5 cm de diámetro, de consistencia elástica, indolora a la palpación. Se solicita ecografía escrotal que muestra parénquima testicular de aspecto normal, sin lesiones y se visualiza una lesión hipoecogénica de paredes finas, de 1,5 cm de diámetro, en relación con la cabeza del epidídimo derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar orquiectomía radical' },
        { letter: 'B', text: 'Realizar resección quirúrgica de la lesión del epidídimo' },
        { letter: 'C', text: 'Realizar punción de la lesión' },
        { letter: 'D', text: 'Indicar autoexamen testicular frecuente' },
        { letter: 'E', text: 'Controlar ecográficamente en un año' },
      ],
      correct: 'E',
      explanation: 'Parece un quiste del epidídimo. Suele observarse. El autoexamen testicular no cuenta con evidencia y la mayoría no lo recomienda.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un joven de dieciocho años, asintomático, consulta por un tumor intraescrotal derecho. Es extratesticular, de uno coma cinco centímetros, elástico e indoloro. La ecografía muestra el testículo normal y una lesión de paredes finas en la cabeza del epidídimo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: orquiectomía radical; resección de la lesión; punción; autoexamen testicular frecuente; o control ecográfico en un año. Piénsalo.',
        answer: 'Es la E. Extratesticular, quística, de paredes finas y en la cabeza del epidídimo: es un quiste de epidídimo, benigno, y se observa. La A es la trampa, porque la orquiectomía es para una masa sólida intratesticular. Y la resección se reserva para si da dolor.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: escroto indoloro',
      cards: [
        { title: 'Examen', tag: 'Qué distinguir', kind: 'key', items: [
          { t: 'Linterna: líquido o sólido', d: 'Positiva: hidrocele o quiste',
            say: 'Cerremos con las reglas de oro. La transiluminación separa el líquido del sólido: positiva es hidrocele o quiste de epidídimo.' },
          { t: 'Intratesticular: cáncer hasta probar', d: 'Extratesticular: casi siempre benigna',
            say: 'Una masa del propio testículo es cáncer hasta demostrar lo contrario, y una extratesticular casi siempre es benigna.' },
        ] },
        { title: 'Varicocele', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Izquierdo, se colapsa: benigno', d: 'Opera si infertilidad, atrofia o dolor',
            say: 'El varicocele benigno es izquierdo y se colapsa acostado, y se opera si hay infertilidad, atrofia o dolor.' },
          { t: 'Derecho, brusco o no colapsa: TAC', d: 'Descartar tumor renal',
            say: 'Si es derecho, brusco o no se colapsa, TAC de abdomen para descartar un tumor renal. Y el hidrocele nunca se punciona. Si te llevas una sola idea de hoy: un varicocele que no se colapsa acostado es un tumor hasta demostrar lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Masa escrotal indolora',
    root: N('start', 'Masa escrotal indolora', 'Palpar y transiluminar',
      'Un paciente con aumento de volumen escrotal sin dolor. Primero palpas dónde está la masa, y luego la iluminas con una linterna.',
      ['Intratesticular, dura, no transilumina', N('alert', 'Sospecha de cáncer', 'Ecografía y marcadores',
        'Si la masa es del propio testículo, dura e irregular, se sospecha un cáncer de testículo. Eso se ve en una clase propia, y se resuelve con orquiectomía inguinal.')],
      ['Transilumina: líquido', N('q', '¿Engloba al testículo?', 'Palpar por separado',
        'Si deja pasar la luz, el contenido es líquido. Ahora te fijas si el testículo se puede palpar aparte.',
        ['Lo engloba', N('do', 'Hidrocele', 'Observar; cirugía si molesta',
          'Si el testículo está dentro de la masa, es un hidrocele. Si es grande o molesto, se hace hidrocelectomía. Nunca se punciona.')],
        ['Polo superior, separada', N('ok', 'Quiste de epidídimo', 'Observar; resecar si duele',
          'Si la masa está arriba y separada del testículo, es un quiste de epidídimo. Se observa y se controla.')],
      )],
      ['No transilumina, bolsa de gusanos', N('q', '¿Colapsa al acostarse?', 'Y de qué lado está',
        'Una masa blanda y tortuosa que no transilumina es un varicocele. Ahora la pregunta es si se colapsa acostado y de qué lado está.',
        ['Izquierdo y colapsa', N('ok', 'Varicocele benigno', 'Cirugía si infertilidad, atrofia o dolor',
          'Si es izquierdo y se colapsa, es primario. Se opera si hay infertilidad con espermiograma alterado, atrofia testicular o dolor.')],
        ['Derecho, brusco o no colapsa', N('refer', 'TAC de abdomen y pelvis', 'Descartar tumor renal',
          'Si es derecho, de aparición brusca después de los cuarenta o no se colapsa, es una bandera roja. Se pide TAC de abdomen para descartar tumor renal o masa retroperitoneal.')],
      )],
    ),
  },
};
