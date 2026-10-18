// Clase 16.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_1.cjs (derma-01).
// Sin preguntas reales EUNACOM para el código 7.01.1.001 ni para semiología de lesiones
// elementales en el banco real (node classes/scripts/class_questions.cjs derma-01 y --search):
// los quiz de banco usan las 2 preguntas "Banco Oficial AEE" del libro, sin fecha.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo nombrar cada lesión de la piel para no perder la pregunta del examen',
      say: 'Bienvenidos. Empezamos dermatología con la base de todo el resto del curso: cómo nombrar cada lesión de la piel. Esta semiología decide más de la mitad de las preguntas de dermatología en el examen, porque el enunciado casi nunca te da el diagnóstico: te describe la lesión, y tú tienes que reconocerla. Hoy aprendemos a diferenciar mácula de pápula, vesícula de ampolla, y sobre todo, erosión de úlcera. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Semiología',
      title: '¿Plana, líquida o sólida?',
      nodes: [
        { id: 'eval', col: 0, row: 1, k: 'start', t: 'Lesión primaria', s: 'Piel antes sana' },
        { id: 'preg', col: 1, row: 1, k: 'q', t: '¿Cómo es al tacto?', s: 'Inspección y palpación' },
        { id: 'plana', col: 2, row: 0, k: 'effect', t: 'Cambio de color', s: 'Mácula o mancha' },
        { id: 'liquida', col: 2, row: 1, k: 'effect', t: 'Contenido líquido', s: 'Vesícula, ampolla o pústula' },
        { id: 'solida', col: 2, row: 2, k: 'effect', t: 'Elevación sólida', s: 'Pápula, placa, nódulo o habón' },
      ],
      edges: [
        { from: 'eval', to: 'preg' },
        { from: 'preg', to: 'plana', label: 'sin relieve' },
        { from: 'preg', to: 'liquida', label: 'con líquido' },
        { from: 'preg', to: 'solida', label: 'se palpa' },
      ],
      steps: [
        { show: ['eval'], note: 'Se desarrolla sobre piel sana',
          say: 'Partamos por la base. Una lesión elemental primaria se desarrolla sobre una piel que antes estaba sana, sin cambios previos. Todo lo que viene después de esta clase, incluida la lesión secundaria, nace de una primaria.' },
        { show: ['preg'], note: 'La pregunta que ordena todo',
          say: 'Y frente a cualquier lesión, la primera pregunta que te tienes que hacer es simple: ¿cómo es al tacto? ¿Es solo un cambio de color, tiene contenido líquido, o se palpa una elevación sólida? Con esa sola pregunta ya clasificaste la lesión en uno de tres grupos.' },
        { show: ['plana'], note: 'Sin relieve ni depresión',
          say: 'Si es plana, sin relieve ni depresión a la palpación, hablamos de mácula o de mancha. La única diferencia entre las dos es el tamaño. Mira esta pierna: manchas pardas, planas, de más de un centímetro, sin relieve al tacto. Es una mancha café con leche.',
            photo: { src: '_verificadas/285_derma_Mácula_y_mancha__27thBailey_p622_1.jpg', label: 'Mancha café con leche', at: 'Mira esta pierna', credit: 'Bailey & Love\'s Short Practice of Surgery, 27.ª ed., p. 622' } },
        { show: ['liquida'], note: 'Colección de líquido',
          say: 'Si tiene contenido líquido, es una vesícula, una ampolla o una pústula. Y ahí lo que cambia entre ellas es el tamaño y qué hay adentro. Mira estas vesículas de varicela: pequeñas, con líquido claro, sobre una base roja.',
            photo: { src: 'biblioteca/11_dermatologia/derma-01/04_vesicula__cto-derma_p16.jpg', label: 'Vesículas (varicela)', at: 'Mira estas vesículas', credit: 'Manual CTO Dermatología 14.ª ed., p. 16' } },
        { show: ['solida'], note: 'Se palpa más que se ve, o al revés',
          say: 'Y si es una elevación sólida, estás frente a una pápula, una placa, un nódulo o un habón. Vamos a verlas una por una, porque el examen pregunta los tamaños de corte exactos. En este exantema ves máculas y pápulas pequeñas que confluyen, todas sólidas y sin líquido.',
            photo: { src: 'biblioteca/11_dermatologia/derma-01/03_exantema-maculopapular__cto-derma_p9.jpg', label: 'Exantema maculopapular', at: 'En este exantema', credit: 'Manual CTO Dermatología 14.ª ed., p. 9' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones planas y líquidas',
      title: 'Mácula, mancha, vesícula, ampolla y pústula',
      cards: [
        { title: 'Lesiones planas', tag: 'El corte es un centímetro', kind: 'key', items: [
          { t: 'Mácula: menor a 1 cm', d: 'Efélides, petequias',
            say: 'Empecemos por las planas. La mácula mide menos de un centímetro: efélides o pecas, léntigos, petequias.' },
          { t: 'Mancha: mayor a 1 cm', d: 'Vitíligo, mancha café con leche',
            say: 'Y la mancha mide más de un centímetro: vitíligo, mancha café con leche, melasma. Un dato que se pregunta: si la lesión desaparece al presionarla con el dedo, es vascular, un eritema; si no desaparece, es purpúrica, por sangre extravasada.' },
        ] },
        { title: 'Lesiones líquidas', tag: 'Tamaño y contenido', kind: 'alert', items: [
          { t: 'Vesícula: menor a 0,5 cm', d: 'Herpes simple, varicela',
            say: 'En las líquidas, la vesícula mide menos de medio centímetro, con contenido seroso o hemático: herpes simple, herpes zóster, varicela. Mira estas vesículas agrupadas sobre una base roja, un herpes simple: son pequeñas y de líquido claro.',
            photo: { src: 'derma-01/vesicula.jpg', label: 'Vesícula (herpes simple)', at: 'Mira estas vesículas agrupadas', credit: 'Manual AMIR Dermatología' } },
          { t: 'Ampolla o flictena: sobre 0,5 a 1 cm', d: 'Pénfigo, penfigoide, quemaduras',
            say: 'La ampolla, también llamada flictena, es más grande, desde medio centímetro hacia arriba: pénfigo, penfigoide, quemaduras de segundo grado. En esta piel las ampollas son grandes y tensas, llenas de líquido: un penfigoide ampolloso.',
            photo: { src: 'derma-01/ampolla.jpg', label: 'Ampolla (penfigoide)', at: 'En esta piel', credit: 'Manual AMIR Dermatología' } },
          { t: 'Pústula: contenido purulento', d: 'Desde su origen',
            say: 'Y la pústula no se define por tamaño, sino por contenido: es purulenta desde el inicio, como en el acné o en la foliculitis. Ojo, no es una vesícula que se infectó después; nace purulenta. Mira esta palma: las pústulas son amarillentas desde que aparecen, en una pustulosis palmar.',
            photo: { src: 'derma-01/pustula.jpg', label: 'Pústulas palmares', at: 'Mira esta palma', credit: 'Manual AMIR Dermatología' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones sólidas',
      title: 'Pápula, placa, nódulo y habón',
      cards: [
        { title: 'Pápula y placa', tag: 'La placa nace de pápulas', kind: 'key', items: [
          { t: 'Pápula: menor a 1 cm', d: 'Verruga plana, liquen plano',
            say: 'Las sólidas parten con la pápula, menor a un centímetro, en la epidermis o la dermis superficial: verruga plana, liquen plano, molusco contagioso. Mira estas pápulas con una depresión en el centro: un molusco contagioso.',
            photo: { src: 'derma-01/papula.jpg', label: 'Pápulas (molusco)', at: 'Mira estas pápulas', credit: 'Manual AMIR Dermatología' } },
          { t: 'Placa: mayor a 1 cm, en meseta', d: 'Confluencia de pápulas, como la psoriasis',
            say: 'Cuando muchas pápulas confluyen y forman una meseta de más de un centímetro, se llama placa. El ejemplo clásico es la psoriasis vulgar. En esta piel ves placas rojas, planas por arriba y cubiertas de escama blanca, típicas de la psoriasis.',
            photo: { src: 'derma-01/placa.jpg', label: 'Placa (psoriasis)', at: 'En esta piel', credit: 'Manual AMIR Dermatología' } },
        ] },
        { title: 'Nódulo y habón', tag: 'Uno profundo, el otro fugaz', kind: 'alert', items: [
          { t: 'Nódulo: dermis profunda o hipodermis', d: 'Se palpa más de lo que se ve',
            say: 'El nódulo es distinto: está en la dermis profunda o en la hipodermis, y la regla que se pregunta es que se palpa más de lo que se ve. El eritema nudoso es el ejemplo típico.' },
          { t: 'Habón o roncha: evanescente', d: 'Dura menos de 24 horas',
            say: 'Y el habón, o roncha, es una placa edematosa por edema dérmico. Su característica patognomónica es que es evanescente: dura menos de un día y desaparece sin dejar ninguna marca. Es la lesión de la urticaria. Mira estos habones: elevaciones rosadas, edematosas, de bordes geográficos.',
            photo: { src: 'derma-01/habon.jpg', label: 'Habones (urticaria)', at: 'Mira estos habones', credit: 'Manual AMIR Dermatología' } },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Erosión versus úlcera',
      nodes: [
        { id: 'orig', col: 0, row: 1, k: 'cause', t: 'Rotura de una ampolla', s: 'O rascado, o infección' },
        { id: 'prof', col: 1, row: 1, k: 'q', t: '¿Hasta dónde llega el daño?', s: 'Epidermis o dermis' },
        { id: 'ero', col: 2, row: 0, k: 'good', t: 'Solo epidermis', s: 'Erosión o excoriación' },
        { id: 'sc', col: 3, row: 0, k: 'good', t: 'Sin cicatriz', s: 'Regenera por mitosis' },
        { id: 'ulc', col: 2, row: 2, k: 'risk', t: 'Dermis o hipodermis', s: 'Úlcera' },
        { id: 'cc', col: 3, row: 2, k: 'alert', t: 'Siempre deja cicatriz', s: 'Tejido de granulación' },
      ],
      edges: [
        { from: 'orig', to: 'prof' },
        { from: 'prof', to: 'ero', label: 'epidermis' }, { from: 'ero', to: 'sc' },
        { from: 'prof', to: 'ulc', label: 'dermis' }, { from: 'ulc', to: 'cc' },
      ],
      steps: [
        { show: ['orig'], note: 'Punto de partida de las secundarias',
          say: 'Las lesiones secundarias nacen de la evolución de una primaria, por ejemplo cuando se rompe una ampolla o el paciente se rasca. Y aquí está la pregunta que más se repite del tema.' },
        { show: ['prof'], note: 'La profundidad lo decide todo',
          say: '¿Hasta dónde llega esa pérdida de piel? Si se queda solo en la epidermis, respetando la membrana basal, es una erosión, también llamada excoriación.' },
        { show: ['ero', 'sc'], note: 'La capa basal regenera',
          say: 'Y como la capa basal de queratinocitos puede regenerar por mitosis, la erosión cura sin dejar ninguna cicatriz. Piensa en una ampolla desnudada, o en el rascado de la sarna. Mira estas erosiones tras romperse las ampollas de un pénfigo: zonas rojas y húmedas, sin pérdida de dermis.',
            photo: { src: 'derma-01/erosion.jpg', label: 'Erosiones (pénfigo)', at: 'Mira estas erosiones', credit: 'Manual AMIR Dermatología' } },
        { show: ['ulc'], note: 'Cruza la membrana basal',
          say: 'Pero si el daño destruye la membrana basal y llega a la dermis, o incluso a la hipodermis, ya no es una erosión: es una úlcera. En esta úlcera el fondo llega a la dermis y hay una escara negra en el centro.',
            photo: { src: 'derma-01/ulcera.jpg', label: 'Úlcera con escara', at: 'En esta úlcera', credit: 'Manual AMIR Dermatología' } },
        { show: ['cc'], note: 'Se repara con colágeno, no con mitosis',
          say: 'Y como la dermis no se regenera por mitosis, la reparación se hace con tejido de granulación y colágeno, y eso siempre deja cicatriz. Guarda esta idea, porque es justo la pregunta que vas a ver en el caso de hoy.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras lesiones secundarias',
      title: 'Fisura, escama, costra, escara y liquenificación',
      cards: [
        { title: 'Por pérdida, sin destruir tejido', tag: 'Fisura', kind: 'normal', items: [
          { t: 'Fisura o grieta', d: 'Desgarro lineal doloroso',
            say: 'Hay una tercera lesión por pérdida de sustancia que no es ni erosión ni úlcera: la fisura, un desgarro lineal y doloroso, sin pérdida neta de piel. Se ve en la queilitis angular o en la tiña interdigital.' },
        ] },
        { title: 'Por acumulación o residuo', tag: 'Cuatro más', kind: 'criteria', items: [
          { t: 'Escama', d: 'Laminillas córneas en exceso, como en la psoriasis',
            say: 'Por el otro lado están las lesiones por acumulación. La escama son laminillas córneas desprendidas en exceso, como en la psoriasis o en la ictiosis.' },
          { t: 'Costra', d: 'Exudado seco: seroso, hemático o purulento',
            say: 'La costra es la desecación de un exudado: amarillenta si es seroso, rojiza si es sangre, y melicérica, como la miel, si es pus, como en el impétigo.' },
          { t: 'Escara', d: 'Tejido necrótico negro y delimitado',
            say: 'La escara es tejido necrótico, negro y seco, bien delimitado de la piel sana: el loxoscelismo cutáneo, las úlceras por presión.' },
          { t: 'Liquenificación', d: 'Engrosamiento por rascado crónico',
            say: 'Y la liquenificación es el engrosamiento de la piel con los pliegues acentuados, por el rascado crónico y repetitivo. Con esto ya tienes todas las lesiones elementales que arma el examen. Mira este pliegue: la piel gruesa, como cuero, con los surcos marcados.',
            photo: { src: 'derma-01/liquenificacion.jpg', label: 'Liquenificación', at: 'Mira este pliegue', credit: 'Manual CTO Dermatología 14.ª ed.' } },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Dónde está cada lesión',
      images: [
        { src: 'animaciones/derma-01/A1_lesiones_real.mp4', label: 'Lesiones elementales', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cada lesión, su capa',
          say: 'La mácula es plana: solo cambia el color. La pápula es sólida, elevada y menor de un centímetro. La vesícula y la ampolla tienen líquido, y se separan por el tamaño; la ampolla intraepidérmica es frágil, como en el pénfigo, y la subepidérmica es tensa, como en el penfigoide. La pústula tiene pus. El nódulo es profundo y se palpa más de lo que se ve.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La piel como ventana',
      title: 'Cuando la lesión avisa de una enfermedad interna',
      cards: [
        { title: 'Metabólicas y autoinmunes', tag: 'Busca la enfermedad de fondo', kind: 'key', items: [
          { t: 'Acantosis nigricans', d: 'Resistencia a la insulina o diabetes',
            say: 'Cuando una lesión no calza con una dermatosis primaria, la piel te está avisando de una enfermedad interna. La acantosis nigricans, placas pardas aterciopeladas en cuello y axilas, es resistencia a la insulina o diabetes. Y si aparece de golpe en un adulto mayor, piensa en una neoplasia visceral, sobre todo gástrica.' },
          { t: 'Eritema malar con fotosensibilidad', d: 'Lupus eritematoso',
            say: 'El eritema malar con fotosensibilidad es lupus eritematoso.' },
          { t: 'Pápulas de Gottron y heliotropo', d: 'Dermatomiositis; en adultos, buscar cáncer',
            say: 'Las pápulas de Gottron y el heliotropo son dermatomiositis, y en adultos hay que buscar una neoplasia asociada.' },
        ] },
        { title: 'Vasculares e inflamatorias', tag: 'Piernas y úlceras', kind: 'alert', items: [
          { t: 'Púrpura palpable en piernas', d: 'Vasculitis; Schönlein-Henoch en niños',
            say: 'La púrpura palpable en las piernas es una vasculitis, y en niños, la púrpura de Schönlein-Henoch.' },
          { t: 'Pioderma gangrenoso', d: 'Úlcera violácea y socavada: EII o artritis reumatoide',
            say: 'El pioderma gangrenoso es una úlcera de borde violáceo y socavado, y se asocia a enfermedad inflamatoria intestinal o a artritis reumatoide.' },
          { t: 'Livedo reticular', d: 'Síndrome antifosfolípido',
            say: 'Y el livedo reticular hace pensar en un síndrome antifosfolípido.' },
        ] },
        { title: 'Otras pistas', tag: 'Tratar la causa, no la lesión', kind: 'criteria', items: [
          { t: 'Xantelasmas y xantomas', d: 'Dislipidemia',
            say: 'Los xantelasmas y los xantomas son dislipidemia.' },
          { t: 'Hiperpigmentación generalizada', d: 'Insuficiencia suprarrenal o hemocromatosis',
            say: 'La hiperpigmentación generalizada orienta a insuficiencia suprarrenal o a hemocromatosis.' },
          { t: 'Prurito sin lesiones primarias', d: 'Colestasis, uremia, tiroides o linfoma',
            say: 'Y el prurito generalizado sin lesiones primarias obliga a descartar colestasis, uremia, alteración tiroidea o linfoma. La conducta es siempre la misma: buscar la enfermedad de fondo con exámenes dirigidos y tratar la causa más que la lesión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dos nódulos y una mancha que preguntan',
      title: 'Eritema nudoso, Bazin y vitíligo',
      cards: [
        { title: 'Eritema nudoso', tag: 'Paniculitis septal', kind: 'alert', items: [
          { t: 'Nódulos pretibiales dolorosos', d: 'Rojos, calientes, sin úlcera ni cicatriz',
            say: 'El eritema nudoso es una paniculitis septal: nódulos rojos, calientes y dolorosos de uno a cinco centímetros, en la cara anterior de ambas piernas, más frecuente en mujeres de veinte a cuarenta años. Mira estas piernas: placas rojizas, mal delimitadas, bilaterales. No se ulceran, no dejan cicatriz y cambian de color como un moretón durante dos a seis semanas.',
            photo: { src: '_web/286_derma_Nódulo__Commons_1.jpg', label: 'Eritema nudoso', at: 'Mira estas piernas', credit: 'Wikimedia Commons, CC BY-SA 3.0' } },
          { t: 'Busca la causa', d: 'Estreptococo, TBC, sarcoidosis, EII, fármacos',
            say: 'Siempre se busca la causa: estreptococo, tuberculosis, sarcoidosis, enfermedad inflamatoria intestinal y fármacos como los anticonceptivos. El síndrome de Löfgren une eritema nudoso, adenopatías hiliares bilaterales y artritis de tobillos. Se pide hemograma, cultivo faríngeo y ASO, radiografía de tórax y PPD, y se trata con reposo, AINE y la causa.' },
        ] },
        { title: 'Eritema indurado de Bazin', tag: 'No es lo mismo', kind: 'key', items: [
          { t: 'Pantorrillas, crónico y recidivante', d: 'Se ulcera y deja cicatriz',
            say: 'El eritema indurado de Bazin se ubica en la cara posterior de las pantorrillas, en mujeres jóvenes, con curso crónico, y tiende a ulcerarse y dejar cicatriz. Se asocia a tuberculosis, así que exige biopsia, estudio de tuberculosis y derivación.' },
        ] },
        { title: 'Vitíligo', tag: 'Autoinmune', kind: 'criteria', items: [
          { t: 'Mancha blanco tiza, bordes netos', d: 'Sin descamación; Koebner positivo',
            say: 'El vitíligo es una enfermedad autoinmune que destruye los melanocitos: manchas blanco tiza, de bordes netos, sin descamación, en cara, manos, codos y rodillas. La luz de Wood acentúa el color.' },
          { t: 'Pide TSH y anticuerpos antiperoxidasa', d: 'Hashimoto, diabetes tipo 1, anemia perniciosa',
            say: 'Se asocia a otras enfermedades autoinmunes, sobre todo la tiroiditis de Hashimoto, así que pides TSH, anticuerpos antiperoxidasa y glicemia.' },
          { t: 'Fotoprotección y corticoide o tacrolimus', d: 'Fototerapia: derivar',
            say: 'El tratamiento inicial es fotoprotección estricta, porque la piel sin melanina se quema, y corticoide tópico potente en zonas pequeñas o tacrolimus en cara y pliegues. La fototerapia se deriva.' },
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
      title: 'Los pares que más se confunden',
      head: ['Par', 'El corte', 'Error frecuente'],
      rows: [
        { cells: ['Mácula vs mancha', '1 cm, ambas planas', 'Llamar "mácula" a cualquier mancha grande'],
          say: 'Repasemos los pares que más se confunden. Mácula versus mancha: el corte es un centímetro, y las dos son planas. El error es llamar mácula a cualquier mancha grande.' },
        { cells: ['Vesícula vs ampolla', '0,5 cm, ambas líquidas', 'Confundir tamaño con gravedad'],
          say: 'Vesícula versus ampolla: el corte es medio centímetro, y las dos tienen líquido. El error es pensar que el tamaño indica gravedad, cuando solo indica el nombre. Mira estas ampollas tensas de un penfigoide: grandes, de varios milímetros, nada que ver con una vesícula.',
            photo: { src: 'biblioteca/11_dermatologia/derma-01/05_ampolla__cto-derma_p72.jpg', label: 'Ampollas tensas', at: 'Mira estas ampollas tensas', credit: 'Manual CTO Dermatología 14.ª ed., p. 72' } },
        { cells: ['Pápula vs placa', '1 cm, la placa es en meseta', 'Llamar "placa" a una pápula aislada'],
          say: 'Pápula versus placa: el corte es un centímetro, y la placa es una meseta que suele nacer de pápulas que confluyen. El error es llamar placa a una sola pápula. Estas pápulas rojo violáceas de las piernas se palpan: es púrpura palpable, pápulas y no máculas.',
            photo: { src: 'biblioteca/11_dermatologia/derma-01/01_papula-purpura-palpable__cto-derma_p8.jpg', label: 'Púrpura palpable', at: 'Estas pápulas rojo violáceas', credit: 'Manual CTO Dermatología 14.ª ed., p. 8' } },
        { cells: ['Nódulo', 'Dermis profunda o hipodermis', 'Confundirlo con una pápula grande'],
          say: 'El nódulo no compite por tamaño con la pápula: compite por profundidad. Se palpa más de lo que se ve. El error es tratarlo como una pápula grande.' },
        { cells: ['Habón', 'Evanescente, menos de 24 horas', 'No preguntar cuánto dura la lesión'],
          say: 'El habón se reconoce por el tiempo, no por la forma: dura menos de veinticuatro horas. El error clásico es no preguntar cuánto duró la lesión antes de nombrarla. Mira estos habones: nadie los reconoce por su forma, sino por lo fugaces que son.',
            photo: { src: 'biblioteca/11_dermatologia/derma-01/07_habon__cto-derma_p49.jpg', label: 'Habones', at: 'Mira estos habones', credit: 'Manual CTO Dermatología 14.ª ed., p. 49' } },
        { cells: ['Erosión vs úlcera', 'Epidermis sin cicatriz vs dermis con cicatriz', 'Decir "úlcera" de cualquier lesión que sangra'],
          say: 'Y la más importante: erosión versus úlcera. La erosión solo llega a la epidermis y no deja cicatriz; la úlcera llega a la dermis y siempre deja cicatriz. El error es llamar úlcera a cualquier lesión que sangra o duele, sin fijarse en la profundidad.' },
        { cells: ['Eritema nudoso vs Bazin', 'Pretibial sin úlcera vs pantorrilla que se ulcera', 'Tratar un Bazin como eritema nudoso, sin biopsia'],
          say: 'Otro par: eritema nudoso versus eritema indurado de Bazin. El nudoso es pretibial y no se ulcera; el Bazin está en la pantorrilla, se ulcera y exige biopsia y estudio de tuberculosis. El error es tratar un Bazin como si fuera un eritema nudoso.' },
        { cells: ['Vitíligo vs pitiriasis versicolor', 'Acrómico sin escama vs hipocrómico que descama', 'No pedir TSH ni anticuerpos antiperoxidasa en el vitíligo'],
          say: 'Y el vitíligo versus la pitiriasis versicolor: el vitíligo es blanco tiza, sin escama, y se asocia a autoinmunidad tiroidea; la versicolor descama al raspar y se tiñe con KOH. El error es no pedir TSH en un vitíligo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 32 años consulta por lesiones pruriginosas en los codos. Al examen físico se aprecian lesiones sobreelevadas sólidas eritematosas que miden entre 3 y 5 cm de diámetro, con superficie aplanada en meseta y cubiertas por abundantes escamas plateadas que confluyen formando áreas extensas.',
      question: '¿Cuál es el nombre semiológico correcto de esta lesión elemental?',
      options: [
        { letter: 'A', text: 'Mancha' },
        { letter: 'B', text: 'Pápula' },
        { letter: 'C', text: 'Placa' },
        { letter: 'D', text: 'Nódulo' },
        { letter: 'E', text: 'Habón' },
      ],
      correct: 'C',
      explanation: 'Elevación sólida circunscrita, con diámetro mayor a 1 cm y extensión en superficie que supera su altura (en meseta), formada por confluencia de lesiones más pequeñas: placa. La descamación plateada sobre una placa en superficies de extensión es la lesión elemental clásica de la psoriasis vulgar.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y dos años que consulta por lesiones que le pican en los codos. Al examen se ven lesiones sólidas y sobreelevadas, de color rojo, que miden entre tres y cinco centímetros, con la superficie aplanada, en meseta, y cubiertas de abundantes escamas de color plateado que confluyen formando zonas extensas.',
        question: '¿Cuál es el nombre semiológico correcto de esta lesión elemental?',
        options: 'Tienes cinco opciones: mancha, pápula, placa, nódulo, o habón. Piénsalo.',
        answer: 'La respuesta es la C, placa. Aplica la regla que vimos: es sólida, mide más de un centímetro, y en vez de crecer hacia arriba se extiende en meseta, por confluencia de lesiones más pequeñas. La mancha es la trampa fácil de descartar, porque es plana y esto se palpa. Y fíjate: esta combinación, placa eritematosa con escamas plateadas en los codos, es la presentación clásica de la psoriasis, que veremos en una próxima clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Una paciente de 25 años consulta por una erupción cutánea diseminada. El médico describe lesiones circunscritas de contenido líquido claro seroso, de 2 a 3 milímetros de diámetro, agrupadas en racimo sobre una base eritematosa en el labio superior.',
      question: '¿Cuál es el nombre semiológico exacto de esta lesión elemental primaria?',
      options: [
        { letter: 'A', text: 'Pústula' },
        { letter: 'B', text: 'Vesícula' },
        { letter: 'C', text: 'Ampolla' },
        { letter: 'D', text: 'Pápula' },
        { letter: 'E', text: 'Erosión' },
      ],
      correct: 'B',
      explanation: 'Colección circunscrita de líquido seroso en la epidermis, con diámetro menor a 0,5 cm: vesícula. La ampolla es mayor a 0,5–1 cm; la pústula tiene contenido purulento desde su origen; la pápula es sólida; la erosión es una lesión secundaria por pérdida de sustancia.',
      say: {
        stem: 'Vamos con una pregunta del banco. Mujer de veinticinco años con una erupción diseminada. El médico describe lesiones con contenido líquido claro, de dos a tres milímetros, agrupadas en racimo sobre una base roja, en el labio superior.',
        question: '¿Cuál es el nombre semiológico exacto de esta lesión elemental primaria?',
        options: 'Las opciones: pústula, vesícula, ampolla, pápula, o erosión. Piénsalo.',
        answer: 'Es la B, vesícula. Aplica la regla de tamaño: líquida y menor a medio centímetro es vesícula, no ampolla. La pústula queda descartada porque el enunciado dice líquido claro, no pus. La pápula es sólida, y la erosión es una lesión secundaria, no primaria. Este patrón, vesículas agrupadas en racimo sobre base roja en el labio, es además la forma típica del herpes simple.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un residente describe una lesión cutánea y pregunta cuál es la diferencia semiológica e histológica fundamental entre una erosión y una úlcera.',
      question: '¿Cuál es la diferencia correcta?',
      options: [
        { letter: 'A', text: 'La erosión compromete solo la epidermis y cura sin dejar cicatriz, mientras que la úlcera compromete la dermis o la hipodermis y cura dejando cicatriz' },
        { letter: 'B', text: 'La erosión es siempre de origen infeccioso bacteriano y la úlcera es de origen autoinmune' },
        { letter: 'C', text: 'La erosión es una lesión primaria y la úlcera es una lesión terciaria' },
        { letter: 'D', text: 'La úlcera es indolora mientras que la erosión cursa con dolor lancinante' },
        { letter: 'E', text: 'La erosión mide más de 5 cm y la úlcera menos de 1 cm' },
      ],
      correct: 'A',
      explanation: 'La erosión afecta solo la epidermis, respeta la membrana basal y cura sin cicatriz porque la capa basal regenera por mitosis. La úlcera destruye la membrana basal, llega a la dermis o la hipodermis, y repara con tejido de granulación y colágeno, dejando siempre cicatriz.',
      say: {
        stem: 'Otra del banco. Un residente pregunta cuál es la diferencia semiológica e histológica fundamental entre una erosión y una úlcera.',
        question: '¿Cuál es la diferencia correcta?',
        options: 'Las opciones hablan de profundidad y cicatriz, de origen infeccioso versus autoinmune, de si son primaria o terciaria, de dolor, y de tamaño. Piénsalo con lo que ya vimos. Piénsalo.',
        answer: 'Es la A, lo que repasamos en el flujo: la erosión solo llega a la epidermis y cura sin cicatriz, porque la capa basal regenera por mitosis; la úlcera llega a la dermis o la hipodermis y siempre deja cicatriz, con tejido de granulación y colágeno. Ninguna otra alternativa tiene relación con el mecanismo real: ni el origen infeccioso, ni la categoría, ni el dolor, ni el tamaño definen esta diferencia.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.009 · Eritema nodoso / Eritema indurado de Bazin",
      "stem": "Mujer de 25 años consulta por nódulos dolorosos, eritemato-violáceos, calientes, de 2 a 4 cm, en la cara anterior de ambas piernas, de 1 semana. No se ulceran. Refiere odinofagia hace 3 semanas. Usa anticonceptivos orales.",
      "question": "¿Cuál es el diagnóstico y el estudio inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Eritema indurado de Bazin; biopsia y PPD"
        },
        {
          "letter": "B",
          "text": "Trombosis venosa superficial; ecografía Doppler"
        },
        {
          "letter": "C",
          "text": "Vasculitis leucocitoclástica; biopsia urgente"
        },
        {
          "letter": "D",
          "text": "Celulitis bilateral; antibióticos endovenosos"
        },
        {
          "letter": "E",
          "text": "Eritema nodoso; estudio etiológico con ASO o cultivo faríngeo, radiografía de tórax y PPD"
        }
      ],
      "correct": "E",
      "explanation": "El eritema nodoso es una paniculitis septal reactiva: nódulos dolorosos en cara anterior de piernas que no se ulceran y curan sin cicatriz. Causas: estreptococo, fármacos (anticonceptivos), sarcoidosis, TBC, EII. Se busca la causa (ASO, radiografía de tórax, PPD). El eritema indurado de Bazin es lobulillar, en pantorrillas y tiende a ulcerarse.",
      "say": {
        "stem": "Mujer de veinticinco años con nódulos dolorosos y rojos en la cara anterior de ambas piernas, sin úlceras, tras una faringitis, y usuaria de anticonceptivos.",
        "question": "¿Cuál es el diagnóstico y el estudio inicial?",
        "options": "Las opciones: eritema indurado de Bazin, trombosis venosa superficial, vasculitis leucocitoclástica, celulitis bilateral o eritema nodoso con estudio de causa. Piénsalo.",
        "answer": "Es la E. Es un eritema nodoso, y se buscan sus causas como estreptococo, fármacos, sarcoidosis o tuberculosis. El eritema de Bazin tienta, pero aparece en pantorrillas y tiende a ulcerarse."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.032 · Vitiligo",
      "stem": "Mujer de 30 años con manchas blancas de 1 año, simétricas, en dorso de manos, alrededor de la boca y en ambos codos. Son máculas acrómicas de bordes netos, sin descamación, que se acentúan con la luz de Wood. Tiene hipotiroidismo por tiroiditis de Hashimoto.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Pitiriasis versicolor"
        },
        {
          "letter": "B",
          "text": "Lepra tuberculoide"
        },
        {
          "letter": "C",
          "text": "Hipopigmentación postinflamatoria"
        },
        {
          "letter": "D",
          "text": "Pitiriasis alba"
        },
        {
          "letter": "E",
          "text": "Vitiligo"
        }
      ],
      "correct": "E",
      "explanation": "Máculas acrómicas (sin melanina), de bordes netos, simétricas en zonas periorificiales y acrales, que se intensifican con luz de Wood, son vitiligo, enfermedad autoinmune asociada a tiroiditis, diabetes tipo 1 y anemia perniciosa. Se trata con corticoides o inhibidores de calcineurina tópicos y fototerapia. La pitiriasis versicolor es hipocrómica y descama al rascado.",
      "say": {
        "stem": "Mujer de treinta años con hipotiroidismo de Hashimoto y manchas completamente blancas, de bordes netos, simétricas en manos, boca y codos, que se marcan con luz de Wood.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: pitiriasis versicolor, lepra, hipopigmentación postinflamatoria, pitiriasis alba o vitiligo. Piénsalo.",
        "answer": "Es la E. Manchas acrómicas simétricas en una paciente con autoinmunidad tiroidea son vitiligo. La pitiriasis versicolor tienta, pero sus manchas son hipocrómicas, no totalmente blancas, y descaman al raspar."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Lesiones primarias', tag: 'El tamaño manda', kind: 'key', items: [
          { t: 'Mácula/mancha: 1 cm', d: 'Vesícula/ampolla: 0,5 cm',
            say: 'Cerremos con las reglas de oro. En las lesiones planas y líquidas, el corte es de un centímetro entre mácula y mancha, y de medio centímetro entre vesícula y ampolla.' },
          { t: 'Pápula/placa: 1 cm, en meseta', d: 'Nódulo: profundo · Habón: fugaz',
            say: 'En las sólidas, la placa es una pápula que superó el centímetro y se extendió en meseta. El nódulo se define por profundidad, no por tamaño. Y el habón se define por el tiempo: menos de veinticuatro horas.' },
        ] },
        { title: 'La piel como ventana', tag: 'Lo que más se pregunta', kind: 'criteria', items: [
          { t: 'Eritema nudoso: pretibial, sin úlcera', d: 'Bazin: pantorrilla, se ulcera, biopsia',
            say: 'Una regla más: el eritema nudoso es pretibial y no se ulcera; si está en la pantorrilla y se ulcera, piensa en Bazin y pide biopsia.' },
          { t: 'Vitíligo: pide TSH', d: 'Autoinmunidad tiroidea asociada',
            say: 'Y ante un vitíligo, siempre pide TSH y anticuerpos antiperoxidasa.' },
        ] },
        { title: 'Lesiones secundarias', tag: 'La que más se pregunta', kind: 'alert', items: [
          { t: 'Erosión: solo epidermis', d: 'Sin cicatriz',
            say: 'Y la distinción más preguntada de todas: la erosión solo compromete la epidermis y no deja cicatriz.' },
          { t: 'Úlcera: dermis o hipodermis', d: 'Siempre deja cicatriz',
            say: 'La úlcera compromete la dermis o la hipodermis, y siempre deja cicatriz. Si te llevas una sola idea de hoy: antes de pensar en el diagnóstico, nombra bien la lesión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión cutánea: nombra lo que ves',
    root: N('start', 'Lesión cutánea nueva', 'Antes de pensar en el diagnóstico, descríbela',
      'Frente a cualquier lesión de la piel, antes de pensar en el diagnóstico tienes que describirla con el nombre semiológico correcto. Ese nombre, casi siempre, ya te deja a un paso de la respuesta.',
      ['', N('q', '¿Es primaria o secundaria?', 'Primaria: piel antes sana · Secundaria: evolucionó de otra',
        'Primero pregúntate si nace sobre piel antes sana, y entonces es primaria, o si evolucionó de una lesión previa por rotura, rascado o infección, y entonces es secundaria.',
        ['Primaria, plana', N('q', '¿Mide más o menos de 1 cm?', 'Mácula o mancha',
          'Si es plana, sin relieve a la palpación, el corte es de un centímetro.',
          ['Menos de 1 cm', N('ok', 'Mácula', 'Efélides, petequias', 'Menos de un centímetro y plana: mácula.')],
          ['Más de 1 cm', N('ok', 'Mancha', 'Vitíligo, melasma', 'Más de un centímetro y plana: mancha.')])],
        ['Primaria, con líquido', N('q', '¿Mide más o menos de 0,5 cm?', 'Vesícula, ampolla o pústula',
          'Si tiene contenido líquido, primero revisa el tamaño, y aparte revisa si el contenido es purulento desde el inicio.',
          ['Menos de 0,5 cm, seroso', N('ok', 'Vesícula', 'Herpes, varicela', 'Menos de medio centímetro y contenido seroso: vesícula.')],
          ['Más de 0,5 cm, seroso', N('ok', 'Ampolla', 'Pénfigo, quemaduras', 'Más de medio centímetro y contenido seroso: ampolla o flictena.')],
          ['Purulento desde el inicio', N('ok', 'Pústula', 'Acné, foliculitis', 'Contenido purulento desde el origen, sin importar el tamaño: pústula.')])],
        ['Primaria, sólida', N('q', '¿Se palpa más de lo que se ve?', 'Pápula, placa, nódulo o habón',
          'Si es una elevación sólida, pregúntate si crece en superficie, si se palpa más de lo que se ve, o si dura menos de un día.',
          ['Menos de 1 cm', N('ok', 'Pápula', 'Verruga plana, liquen plano', 'Sólida y menor a un centímetro: pápula.')],
          ['En meseta, más de 1 cm', N('ok', 'Placa', 'Psoriasis vulgar', 'Sólida, en meseta, mayor a un centímetro, por confluencia de pápulas: placa.')],
          ['Se palpa más de lo que se ve', N('ok', 'Nódulo', 'Eritema nudoso', 'Dermis profunda o hipodermis, se palpa más de lo que se ve: nódulo.')],
          ['Dura menos de 24 horas', N('ok', 'Habón', 'Urticaria', 'Evanescente, dura menos de veinticuatro horas: habón o roncha.')])],
        ['Secundaria', N('q', '¿Hasta dónde llega el daño?', 'Erosión o úlcera',
          'Si es secundaria y hay pérdida de sustancia, lo que decide el nombre es la profundidad.',
          ['Solo epidermis', N('ok', 'Erosión', 'Sin cicatriz', 'Compromete solo la epidermis, respeta la membrana basal, y cura sin cicatriz: erosión o excoriación.')],
          ['Dermis o hipodermis', N('alert', 'Úlcera', 'Con cicatriz', 'Destruye la membrana basal y llega a la dermis o la hipodermis: úlcera. Siempre deja cicatriz.')])])]),
  },
};
