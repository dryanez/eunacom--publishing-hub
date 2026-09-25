// Clase 15.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un dato basta: si duele, es infección; si no duele, es un granuloma',
      say: 'Bienvenidos. Dejamos la conjuntiva y bajamos al párpado y al saco lagrimal. Vas a ver cuatro cuadros: el orzuelo, el chalazión, la blefaritis y la dacriocistitis. Y casi todo el examen se resuelve con una sola pregunta: ese nódulo o esa masa, ¿duele o no duele? Empecemos por ahí.',
    },

    {
      type: 'flow',
      kicker: 'La clave semiológica',
      title: 'Orzuelo versus chalazión',
      nodes: [
        { id: 'gla', col: 0, row: 1, k: 'cause', t: 'Glándulas del párpado', s: 'Zeiss, Moll y Meibomio' },
        { id: 'inf', col: 1, row: 0, k: 'risk', t: 'Se infectan', s: 'Staphylococcus aureus' },
        { id: 'orz', col: 2, row: 0, k: 'alert', t: 'Orzuelo', s: 'Agudo, eritematoso, muy doloroso' },
        { id: 'obs', col: 1, row: 2, k: 'mech', t: 'Se obstruyen', s: 'Retención de secreción, sin bacteria activa' },
        { id: 'cha', col: 2, row: 2, k: 'good', t: 'Chalazión', s: 'Nódulo firme, crónico, indoloro' },
      ],
      edges: [
        { from: 'gla', to: 'inf' }, { from: 'inf', to: 'orz' },
        { from: 'gla', to: 'obs' }, { from: 'obs', to: 'cha' },
      ],
      steps: [
        { show: ['gla'], note: 'Las mismas glándulas, dos destinos distintos',
          say: 'Empecemos por el mecanismo, porque ordena todo. El párpado tiene varias glándulas: las de Zeiss y Moll en el borde libre, y las de Meibomio dentro del tarso. Lo que les pase a esas glándulas define si tienes un orzuelo o un chalazión.' },
        { show: ['inf'], note: 'Infección bacteriana aguda',
          say: 'Si esa glándula se infecta, casi siempre por estafilococo dorado, tienes una infección aguda.' },
        { show: ['orz'], note: 'Duele mucho, se resuelve en días',
          say: 'Y eso es el orzuelo: un absceso agudo, eritematoso y muy doloroso, en la base de una pestaña si es externo, o hacia adentro del tarso si es interno. Duele porque hay bacteria activa.' },
        { show: ['obs'], note: 'Retención lipídica, sin infección activa',
          say: 'En cambio, si el conducto de una glándula de Meibomio se tapa, sin que haya bacteria infectando, la secreción se acumula y forma un granuloma.' },
        { show: ['cha'], note: 'No duele porque no hay infección activa',
          say: 'Eso es el chalazión: un nódulo firme, redondeado, en el espesor del párpado, cubierto por piel que se mueve libre. Fíjate en el contraste: mismo párpado, mismas glándulas, pero uno duele y el otro no, porque uno es infección y el otro es retención.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Orzuelo y chalazión: cada uno con lo suyo',
      cards: [
        { title: 'Orzuelo', tag: 'Calor y antibiótico', kind: 'pharma', items: [
          { t: 'Compresas tibias, 3 a 4 veces al día', d: 'Favorecen el drenaje espontáneo',
            say: 'El orzuelo se trata con compresas tibias y húmedas, tres a cuatro veces al día, que ayudan a que drene solo, más un ungüento oftálmico antibiótico como terramicina o eritromicina.' },
          { t: 'No se puncione precozmente', d: 'Se deja que drene solo',
            say: 'Y un detalle que se pregunta: no se punciona de forma precoz. Se le da tiempo a que drene con el calor local.' },
        ] },
        { title: 'Chalazión', tag: 'Si persiste más de 2 meses', kind: 'normal', items: [
          { t: 'Calor local y masaje inicial', d: 'Curetaje o triamcinolona intralesional si persiste',
            say: 'El chalazión también parte con calor local y masaje. Pero si persiste más de dos meses, o si comprime la córnea y produce astigmatismo, se pasa a curetaje quirúrgico o a una infiltración de triamcinolona dentro de la lesión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Blefaritis',
      title: 'Inflamación crónica del borde palpebral',
      cards: [
        { title: 'Anterior versus posterior', tag: 'Dos formas', kind: 'criteria', items: [
          { t: 'Anterior: escamas en la base de la pestaña', d: 'Seborreica o estafilocócica, con collaretes',
            say: 'La blefaritis es una inflamación crónica y bilateral del borde palpebral, asociada a dermatitis seborreica y a rosácea. La forma anterior afecta la base de las pestañas: puede ser seborreica, con escamas grasosas, o estafilocócica, con collaretes duros alrededor de cada pestaña.' },
          { t: 'Posterior: disfunción de Meibomio', d: 'Secreción espesa como pasta de dientes',
            say: 'La forma posterior es por disfunción de las glándulas de Meibomio: el orificio se tapa con una secreción espesa, como pasta de dientes al exprimir el borde, y eso altera la lágrima y da ojo seco.' },
        ] },
        { title: 'Tratamiento', tag: 'Higiene diaria', kind: 'pharma', items: [
          { t: 'Champú neutro diluido', d: 'Precedido de compresas tibias',
            say: 'El pilar del tratamiento, en las dos formas, es la higiene palpebral diaria, con champú neutro de bebé diluido, precedido de compresas tibias.' },
          { t: 'Doxiciclina oral si hay rosácea', d: 'Cien miligramos al día, por 4 a 6 semanas',
            say: 'En casos moderados, o con rosácea asociada, se agrega doxiciclina oral por su efecto sobre la secreción lipídica, durante cuatro a seis semanas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Dacriocistitis aguda',
      title: 'Infección del saco lagrimal: nunca sondar en agudo',
      nodes: [
        { id: 'obs', col: 0, row: 1, k: 'cause', t: 'Vía nasolagrimal tapada', s: 'Dacrioestenosis crónica' },
        { id: 'inf', col: 1, row: 1, k: 'mech', t: 'Se infecta el saco', s: 'S. aureus y S. pneumoniae' },
        { id: 'cli', col: 2, row: 0, k: 'risk', t: 'Canto interno rojo y doloroso', s: 'Tenso, caliente, con epífora' },
        { id: 'ref', col: 2, row: 2, k: 'risk', t: 'Reflujo de pus', s: 'Al presionar el saco lagrimal' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'Sondaje en fase aguda', s: 'Contraindicación absoluta' },
        { id: 'atb', col: 4, row: 0, k: 'good', t: 'Antibiótico oral', s: 'Amoxicilina con ácido clavulánico' },
      ],
      edges: [
        { from: 'obs', to: 'inf' }, { from: 'inf', to: 'cli' }, { from: 'inf', to: 'ref' },
        { from: 'cli', to: 'tra', label: 'nunca' }, { from: 'cli', to: 'atb' },
      ],
      steps: [
        { show: ['obs', 'inf'], note: 'Casi siempre sobre una obstrucción crónica',
          say: 'La dacriocistitis aguda es una infección del saco lagrimal, y casi siempre nace sobre una obstrucción crónica del conducto nasolagrimal, ya presente antes del episodio agudo. Los gérmenes son los mismos de siempre: estafilococo dorado y neumococo.' },
        { show: ['cli'], note: 'Localización muy específica: canto interno',
          say: 'La localización es muy específica y se pregunta mucho: una masa eritematosa, dolorosa, tensa y caliente en el canto interno, la región inferomedial del ojo, con lagrimeo continuo.' },
        { show: ['ref'], note: 'Confirma el diagnóstico al examen',
          say: 'Y si comprimes con suavidad ese saco, refluye material mucopurulento por el punto lagrimal. Ese hallazgo confirma el diagnóstico en la consulta.' },
        { show: ['atb'], note: 'Tratamiento sistémico oral',
          say: 'El tratamiento es antibiótico oral sistémico con cobertura para estafilococo, como amoxicilina con ácido clavulánico o cefadroxilo, más calor local y analgesia.' },
        { show: ['tra'], note: 'Puede diseminar a celulitis orbitaria',
          say: 'Y la contraindicación absoluta: nunca se sonda la vía lagrimal en fase aguda. El saco está inflamado y frágil, y el sondaje puede desgarrarlo y diseminar la infección a una celulitis orbitaria. El sondaje o la cirugía definitiva, la dacriocistorrinostomía, se dejan para cuando el cuadro agudo ya se resolvió.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos los cuatro cuadros en un solo árbol: localización, dolor, y qué hacer.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Localización, dolor y conducta',
      head: ['Hallazgo', 'Diagnóstico', 'Trampa frecuente'],
      rows: [
        { cells: ['Nódulo agudo, eritematoso, muy doloroso', 'Orzuelo', 'Puncionarlo apenas aparece'],
          say: 'Repasemos las trampas. Nódulo agudo, eritematoso y muy doloroso: orzuelo, con calor local y pomada antibiótica. La trampa es puncionarlo de inmediato, en vez de esperar el drenaje espontáneo.' },
        { cells: ['Nódulo firme, indoloro, crónico', 'Chalazión', 'Operarlo antes de intentar tratamiento médico'],
          say: 'Nódulo firme e indoloro, de semanas de evolución: chalazión. La trampa es saltarse el calor local e ir directo al curetaje, cuando lleva menos de dos meses.' },
        { cells: ['Escamas en pestañas, borde palpebral crónico', 'Blefaritis', 'Indicar solo antibiótico, sin higiene diaria'],
          say: 'Escamas en la base de las pestañas, con ardor crónico del borde palpebral: blefaritis. La trampa es indicar solo un colirio antibiótico y olvidar que el pilar es la higiene diaria.' },
        { cells: ['Masa roja y dolorosa en el canto interno', 'Dacriocistitis aguda', 'Sondar la vía lagrimal de urgencia'],
          say: 'Y masa roja y dolorosa en el canto interno, con reflujo de pus: dacriocistitis aguda, con antibiótico oral. La trampa más peligrosa de esta clase es sondar la vía lagrimal de urgencia, pensando en destaparla de inmediato.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 30 años consulta por un nódulo doloroso, eritematoso, de 3 días de evolución, en el párpado superior derecho, localizado en la base de una pestaña. No refiere fiebre ni baja de visión. Al examen: pústula pequeña y sensible en el borde palpebral, sin compromiso de la conjuntiva tarsal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Punción y drenaje inmediato en el box' },
        { letter: 'B', text: 'Compresas tibias 3 a 4 veces al día más ungüento oftálmico antibiótico' },
        { letter: 'C', text: 'Curetaje quirúrgico ambulatorio' },
        { letter: 'D', text: 'Infiltración de triamcinolona intralesional' },
        { letter: 'E', text: 'Colirio de corticoide tópico cada 6 horas' },
      ],
      correct: 'B',
      explanation: 'Nódulo agudo, eritematoso y doloroso en la base de una pestaña es un orzuelo externo. El tratamiento es compresas tibias, que favorecen el drenaje espontáneo, más un ungüento antibiótico; no se punciona de forma precoz. El curetaje y la triamcinolona son manejo del chalazión, y el corticoide tópico no tiene rol aquí.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta años, con un nódulo doloroso y eritematoso de tres días, en el párpado superior derecho, en la base de una pestaña. Sin fiebre ni baja de visión. Al examen: una pústula pequeña y sensible en el borde palpebral, sin compromiso de la conjuntiva tarsal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: punción y drenaje inmediato, compresas tibias con ungüento antibiótico, curetaje quirúrgico, triamcinolona intralesional, o colirio de corticoide. Piénsalo.',
        answer: 'Es la B. Agudo, eritematoso y muy doloroso, en la base de una pestaña: es un orzuelo. Compresas tibias para favorecer el drenaje, más un ungüento antibiótico. Ni el curetaje ni la triamcinolona corresponden aquí, porque son manejo del chalazión, un cuadro crónico e indoloro. Y la punción precoz solo agrega otra puerta de entrada a la infección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 106',
      stem: 'Una paciente de 60 años está en espera de cirugía por obstrucción crónica del conducto nasolagrimal, sin embargo presenta cuadro de aumento de volumen en la zona medial del ojo derecho, con dolor, eritema y epífora.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar antibióticos orales' },
        { letter: 'B', text: 'Indicar masajes y compresiones locales' },
        { letter: 'C', text: 'Indicar corticoides tópicos' },
        { letter: 'D', text: 'Indicar antibióticos en colirios' },
        { letter: 'E', text: 'Resolver quirúrgicamente' },
      ],
      correct: 'A',
      explanation: 'Paciente con obstrucción nasolagrimal crónica conocida que ahora presenta aumento de volumen, dolor, eritema y epífora en la región medial del ojo: es una dacriocistitis aguda sobre esa obstrucción de base. El tratamiento de primera línea es antibiótico oral, dejando el sondaje o la cirugía definitiva para cuando el cuadro agudo se resuelva.',
      say: {
        stem: 'Pregunta real, del EUNACOM de julio de dos mil quince. Una paciente de sesenta años, que ya estaba en espera de cirugía por obstrucción crónica del conducto nasolagrimal, presenta ahora aumento de volumen en la zona medial del ojo derecho, con dolor, eritema y lagrimeo continuo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antibióticos orales, masajes y compresiones locales, corticoides tópicos, antibióticos en colirio, o resolver quirúrgicamente. Piénsalo.',
        answer: 'Es la A, antibióticos orales. Fíjate cómo se arma la pregunta: te dice que ya tenía una obstrucción crónica, y ahora se agrega dolor y eritema, es decir, se infectó. Eso es justamente la dacriocistitis aguda sobre una dacrioestenosis previa. Y como vimos, en fase aguda no se opera ni se sonda: primero el antibiótico oral, y la cirugía definitiva queda para después, con el paciente ya sin infección activa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un hombre de 42 años consulta por la aparición de un nódulo firme en el párpado superior derecho de 6 semanas de evolución. Refiere que hace dos meses tuvo un cuadro inflamatorio doloroso que se resolvió solo, quedando esta lesión que no le duele en absoluto. Al examen se palpa un nódulo subcutáneo redondeado de 5 milímetros en el espesor del tarso superior, no adherido a la piel y completamente indoloro a la palpación.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Orzuelo interno agudo' },
        { letter: 'B', text: 'Chalazión' },
        { letter: 'C', text: 'Carcinoma sebáceo de párpado' },
        { letter: 'D', text: 'Dacriocistitis crónica' },
        { letter: 'E', text: 'Quiste de inclusión epidérmica' },
      ],
      correct: 'B',
      explanation: 'Nódulo firme, bien delimitado, indoloro y de varias semanas de duración, que sucede a un episodio agudo previo mal resuelto, es la presentación clásica del chalazión: un granuloma por retención lipídica tras la obstrucción de una glándula de Meibomio. El orzuelo agudo duele; el carcinoma sebáceo se sospecha solo si el chalazión recidiva en un anciano con pérdida de pestañas.',
      say: {
        stem: 'Cerremos con un caso representativo del banco. Un hombre de cuarenta y dos años consulta por un nódulo firme en el párpado superior derecho, de seis semanas de evolución. Hace dos meses tuvo un cuadro inflamatorio doloroso que se resolvió solo, y le quedó esta lesión que no le duele nada. Al examen: un nódulo subcutáneo redondeado de cinco milímetros en el tarso superior, no adherido a la piel, e indoloro.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: orzuelo interno agudo, chalazión, carcinoma sebáceo de párpado, dacriocistitis crónica, o quiste de inclusión epidérmica. Piénsalo.',
        answer: 'Es chalazión. Fíjate en el patrón completo: un orzuelo previo que se resolvió, y ahora un nódulo firme, crónico e indoloro. Es exactamente la secuencia que vimos al principio de la clase: la infección aguda deja atrás una obstrucción glandular que se convierte en granuloma. El carcinoma sebáceo sería la trampa solo si este paciente fuera mayor y el chalazión recidivara varias veces con pérdida de pestañas, algo que aquí no ocurre.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que ordena todo', tag: 'Duele o no duele', kind: 'key', items: [
          { t: 'Agudo y doloroso: orzuelo', d: 'Crónico e indoloro: chalazión',
            say: 'Cerremos con las reglas de oro. Un nódulo palpebral agudo y doloroso es orzuelo; crónico e indoloro es chalazión. Es la misma glándula, pero infección activa o retención sin infección.' },
        ] },
        { title: 'La higiene manda', tag: 'Blefaritis', kind: 'pharma', items: [
          { t: 'Champú neutro diario', d: 'Antes que cualquier colirio',
            say: 'En la blefaritis, la higiene palpebral diaria con champú neutro va antes que cualquier colirio antibiótico.' },
        ] },
        { title: 'El canto interno', tag: 'Dacriocistitis', kind: 'alert', items: [
          { t: 'Masa roja y dolorosa medial, con epífora', d: 'Antibiótico oral; nunca sondar en agudo',
            say: 'Y si te llevas una sola idea de hoy: una masa roja y dolorosa en el canto interno, con lagrimeo, es dacriocistitis aguda, se trata con antibiótico oral, y jamás se sonda la vía lagrimal mientras esté activa la infección. Nos vemos en la próxima clase, donde vamos a la córnea.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Párpados y saco lagrimal: cuatro cuadros',
    root: N('start', 'Nódulo, inflamación o masa periocular', 'Primero, ¿dónde está?',
      'Paciente con un hallazgo en el párpado o cerca del canto interno. Lo primero es la localización.',
      ['', N('q', '¿En el párpado o en el canto interno?', 'Después decide el dolor',
        'Si está en el párpado, la siguiente pregunta es si duele o no. Si está en el canto interno, casi siempre es la vía lagrimal.',
        ['Párpado, agudo y doloroso', N('ok', 'Orzuelo', 'Compresas tibias + ungüento antibiótico',
          'Nódulo agudo, eritematoso y muy doloroso en el borde palpebral: orzuelo. Compresas tibias y ungüento oftálmico antibiótico; no se punciona precozmente.')],
        ['Párpado, crónico e indoloro', N('ok', 'Chalazión', 'Calor local; curetaje si pasa de 2 meses',
          'Nódulo firme, indoloro, en el espesor del tarso: chalazión. Calor local y masaje; curetaje o triamcinolona si persiste más de dos meses.')],
        ['Borde palpebral, crónico y con escamas', N('ok', 'Blefaritis', 'Higiene palpebral diaria',
          'Inflamación crónica del borde palpebral, con escamas o secreción espesa en las glándulas de Meibomio: blefaritis. Higiene diaria con champú neutro, y doxiciclina oral si hay rosácea.')],
        ['Canto interno, rojo y doloroso', N('alert', 'Dacriocistitis aguda', 'Antibiótico oral; nunca sondar',
          'Masa eritematosa y dolorosa en el canto interno, con epífora y reflujo de pus: dacriocistitis aguda. Antibiótico oral sistémico y calor local; el sondaje de la vía lagrimal está contraindicado mientras dure la infección.')])]),
  },
};
