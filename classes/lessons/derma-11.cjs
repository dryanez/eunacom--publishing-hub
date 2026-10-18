// Clase 16.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-11).
// Nota: el código de la clase (6.01.2.004) no devuelve preguntas reales de confianza suficiente, y
// --search "pénfigo|penfigoide|desmogleína|ampolla flácida|ampolla tensa|BP180" tampoco encontró ninguna
// en el banco real. Se usan 2 preguntas del libro (etiquetadas "Caso representativo", sin fecha), una por entidad.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ampolla flácida versus ampolla tensa: el detalle semiológico que separa dos enfermedades autoinmunes muy distintas',
      say: 'Bienvenidos a esta clase. Terminamos el bloque de enfermedades ampollares con la comparación más clásica del examen: pénfigo vulgar contra penfigoide ampollar. Los dos son enfermedades autoinmunes que atacan la unión de las células de la piel, pero atacan un blanco distinto, a una profundidad distinta, y eso cambia todo lo demás: la edad del paciente, el aspecto de la ampolla, la mucosa oral, y el tratamiento. Partamos por el pénfigo, que es el más grave de los dos.',
    },

    {
      type: 'flow',
      kicker: 'Pénfigo vulgar',
      title: 'Cuando el ataque es entre células: la acantolisis',
      nodes: [
        { id: 'igg', col: 0, row: 0, k: 'cause', t: 'Autoanticuerpos IgG', s: 'Contra desmogleína 3 y desmogleína 1' },
        { id: 'des', col: 1, row: 0, k: 'mech', t: 'Rompen los desmosomas', s: 'Se pierde la unión célula a célula' },
        { id: 'aca', col: 2, row: 0, k: 'mech', t: 'Acantolisis', s: 'Ampolla intraepidérmica suprabasal' },
        { id: 'fla', col: 3, row: 0, k: 'effect', t: 'Ampolla flácida', s: 'Techo delgado, se rompe fácil' },
        { id: 'nik', col: 3, row: 1, k: 'alert', t: 'Nikolsky positivo', s: 'La epidermis se desprende en bloque' },
      ],
      edges: [
        { from: 'igg', to: 'des' }, { from: 'des', to: 'aca' }, { from: 'aca', to: 'fla' }, { from: 'fla', to: 'nik' },
      ],
      steps: [
        { show: ['igg'], note: 'El blanco es la desmogleína, no la membrana basal',
          say: 'El pénfigo vulgar es una enfermedad autoinmune potencialmente mortal, que hoy vamos a comparar con el penfigoide ampollar. Autoanticuerpos de tipo inmunoglobulina G atacan la desmogleína tres, que mantiene unidas a las células en las mucosas, y también la desmogleína uno, en la piel.' },
        { show: ['des', 'aca'], note: 'Acantolisis: se pierde la cola entre queratinocitos',
          say: 'Al unirse a esas desmogleínas, el anticuerpo rompe los desmosomas, los puentes que unen a un queratinocito con el siguiente. Eso es la acantolisis, y produce una ampolla intraepidérmica, justo por encima de la capa basal, dentro del espesor de la epidermis.' },
        { show: ['fla'], note: 'El techo es solo la epidermis superior: por eso es tan frágil',
          say: 'Como el techo de esa ampolla es solo la capa superior de la epidermis, queda muy delgado y frágil. Por eso la ampolla del pénfigo es flácida, de contenido claro, y se rompe con el mínimo roce, dejando erosiones dolorosas que no cicatrizan.' },
        { show: ['nik'], note: 'La misma maniobra que vimos en SSJ, ahora por otra causa',
          say: 'Y por esa misma fragilidad, el signo de Nikolsky es positivo: al frotar la piel sana cercana con el dedo, la epidermis se desprende. Es el mismo signo que viste en Stevens-Johnson, pero aquí la causa no es un fármaco, es un autoanticuerpo. Mira a este recién nacido: la epidermis se despega al roce y deja la piel roja y húmeda por debajo.',
            photo: { src: '_verificadas/280_derma_Signo_de_Nikolsky__nelsontext_p5312_1.jpg', label: 'Nikolsky positivo', at: 'Mira a este recién nacido', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5312' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Pénfigo vulgar',
      title: 'La boca avisa antes que la piel',
      cards: [
        { title: 'Población y debut', tag: '40 a 60 años', kind: 'criteria', items: [
          { t: 'Úlceras orales dolorosas primero', d: 'En 70 a 90% de los casos, meses antes',
            say: 'El pénfigo vulgar afecta típicamente a adultos de cuarenta a sesenta años, sin predominio marcado de sexo. Y en la gran mayoría de los casos, el debut no es en la piel: son erosiones y úlceras orales muy dolorosas, en el paladar y las encías, que llevan semanas sin sanar y que el paciente ya consultó por ellas antes de tener ninguna lesión cutánea. Mira esta boca: erosiones en la mucosa, porque las ampollas se rompen apenas se forman.',
            photo: { src: 'biblioteca/19_dermatologia/derma-11/atlas_082_penfigo_vulgar_oral_erosiones_.jpg', label: 'Pénfigo vulgar oral', at: 'Mira esta boca', credit: 'Atlas EUNACOM 2026' } },
        ] },
        { title: 'La piel', tag: 'Erosiones que no cicatrizan', kind: 'alert', items: [
          { t: 'Ampollas flácidas sobre piel sana', d: 'Se rompen y dejan costras que sangran',
            say: 'Cuando aparecen las ampollas en la piel, son flácidas, sobre piel de aspecto sano, y se rompen con tanta facilidad que rara vez las ves intactas: lo que encuentras son erosiones extensas, dolorosas, que sangran y no cicatrizan solas. En esta espalda no ves ampollas intactas, sino erosiones con costras sobre piel de aspecto sano.',
            photo: { src: 'biblioteca/11_dermatologia/derma-11/01_penfigo-vulgar__amir-derma_p49.jpg', label: 'Pénfigo vulgar', at: 'En esta espalda', credit: 'Manual AMIR Dermatología, p. 49' } },
          { t: 'Signo de Asboe-Hansen', d: 'Al comprimir el centro, la ampolla se extiende al lado',
            say: 'Hay otra maniobra que refuerza el diagnóstico: el signo de Asboe-Hansen. Si comprimes verticalmente el centro de una ampolla todavía intacta, el líquido se extiende hacia los lados y despega la piel vecina, porque esa cohesión también está rota.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Penfigoide ampollar',
      title: 'Cuando el ataque es contra el anclaje a la dermis',
      nodes: [
        { id: 'bp', col: 0, row: 0, k: 'cause', t: 'Autoanticuerpos anti-BP180 y BP230', s: 'Contra los hemidesmosomas' },
        { id: 'hem', col: 1, row: 0, k: 'mech', t: 'Se despega toda la epidermis', s: 'De la membrana basal' },
        { id: 'sub', col: 2, row: 0, k: 'mech', t: 'Ampolla subepidérmica', s: 'El techo es la epidermis completa' },
        { id: 'ten', col: 3, row: 0, k: 'good', t: 'Ampolla tensa', s: 'Pared gruesa, resiste días' },
        { id: 'niN', col: 3, row: 1, k: 'good', t: 'Nikolsky negativo', s: 'La piel vecina no se despega' },
      ],
      edges: [
        { from: 'bp', to: 'hem' }, { from: 'hem', to: 'sub' }, { from: 'sub', to: 'ten' }, { from: 'ten', to: 'niN' },
      ],
      steps: [
        { show: ['bp'], note: 'La enfermedad ampollar autoinmune más frecuente de todas',
          say: 'El penfigoide ampollar es la dermatosis ampollar autoinmune más frecuente de todas, más que el pénfigo. Aquí los autoanticuerpos no atacan la unión entre células: atacan el antígeno BP doscientos treinta y el antígeno BP ciento ochenta, que forman los hemidesmosomas, la estructura que ancla la epidermis a la dermis.' },
        { show: ['hem', 'sub'], note: 'Se despega toda la epidermis, no solo una capa',
          say: 'Al romperse ese anclaje, toda la epidermis se separa en bloque de la dermis subyacente. La ampolla es subepidérmica, y su techo es la epidermis completa, sana y gruesa, no solo una capa superficial.' },
        { show: ['ten'], note: 'Por eso resiste días sin romperse',
          say: 'Y por eso la ampolla es tensa: de pared gruesa, contenido claro o hemorrágico, y puede permanecer intacta durante varios días, algo impensado en el pénfigo, donde la ampolla dura horas.' },
        { show: ['niN'], note: 'La diferencia que más se pregunta al examen físico',
          say: 'Como la cohesión entre las células de la epidermis está completamente sana, el signo de Nikolsky es negativo: la fricción lateral no despega nada. Esta es la diferencia semiológica más preguntada de todo el tema.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Penfigoide ampollar',
      title: 'El anciano que pica antes de que aparezcan las ampollas',
      cards: [
        { title: 'Población y pródromo', tag: 'Más de 70 a 80 años', kind: 'criteria', items: [
          { t: 'Prurito intenso semanas antes', d: 'Placas urticariales o eccematosas',
            say: 'El penfigoide afecta a ancianos, típicamente sobre setenta u ochenta años, muchas veces con demencia, Parkinson o un accidente vascular previo. Semanas antes de las ampollas, el paciente tiene una fase de prurito intenso, con placas que parecen urticaria o eccema, y muchas veces consulta antes por ese prurito sin que nadie sospeche todavía una enfermedad ampollar.' },
        ] },
        { title: 'La piel y las mucosas', tag: 'Respeta la boca', kind: 'normal', items: [
          { t: 'Ampollas en abdomen, ingles y flexuras', d: 'Compromiso oral excepcional, menor a 20%',
            say: 'Las ampollas asientan sobre todo en el abdomen inferior, las ingles, las axilas y los pliegues de flexión, sobre una base roja o eccematosa, y suele haber eosinofilia periférica y en el líquido de la ampolla. Y a diferencia del pénfigo, el penfigoide respeta casi siempre la mucosa oral: el compromiso mucoso es la excepción, no la regla. Mira este brazo: ampollas grandes, tensas, de contenido claro. Y en esta pierna también están íntegras.',
            photos: [{ src: 'biblioteca/11_dermatologia/derma-11/02_penfigoide-ampolloso-tensas__cto-derma_p72.jpg', label: 'Ampollas tensas', at: 'Mira este brazo', credit: 'Manual CTO Dermatología 14.ª ed., p. 72' }, { src: 'biblioteca/11_dermatologia/derma-11/02_penfigoide-ampolloso-tensas_alt1_1__amir-derma_p49.jpg', label: 'Ampollas íntegras', at: 'Y en esta pierna', credit: 'Manual AMIR Dermatología, p. 49' }] },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Confirmación diagnóstica',
      title: 'La biopsia con inmunofluorescencia directa cierra el diagnóstico',
      cards: [
        { title: 'Pénfigo vulgar', tag: 'Depósito intercelular', kind: 'alert', items: [
          { t: 'Patrón en red de pescar o panal de abejas', d: 'IgG y complemento entre los queratinocitos',
            say: 'La clínica orienta, pero la confirmación es histológica. En el pénfigo vulgar, la inmunofluorescencia directa muestra un depósito de inmunoglobulina G y complemento entre las células, rodeando cada queratinocito, en un patrón que se describe como red de pescar o panal de abejas. Mira esta imagen: el depósito verde fluorescente dibuja una red alrededor de cada célula de la epidermis.',
            photo: { src: '_web/281_derma_Inmunofluorescencia_directa__Commons_1.jpg', label: 'IFD de pénfigo vulgar', at: 'Mira esta imagen', credit: 'Wikimedia Commons, CC BY 3.0' } },
          { t: 'Hilera de lápidas sepulcrales', d: 'La capa basal queda pegada a la dermis',
            say: 'Y en la histología convencional se ve la fila de células basales, todavía ancladas a la membrana basal por sus hemidesmosomas intactos, mientras el resto de la epidermis se despegó por encima: es la imagen clásica de hilera de lápidas sepulcrales.' },
        ] },
        { title: 'Penfigoide ampollar', tag: 'Depósito lineal', kind: 'criteria', items: [
          { t: 'Línea continua de IgG y complemento', d: 'A lo largo de toda la membrana basal',
            say: 'En el penfigoide, en cambio, la inmunofluorescencia muestra un depósito continuo y lineal de inmunoglobulina G y del complemento, siguiendo toda la línea de la membrana basal, justo donde están BP ciento ochenta y BP doscientos treinta. No hay ningún depósito entre las células de la epidermis, porque esas uniones están sanas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Dos enfermedades, dos estrategias muy distintas',
      cards: [
        { title: 'Pénfigo vulgar', tag: 'Corticoides sistémicos en dosis altas', kind: 'pharma', items: [
          { t: 'Prednisona 1 a 1,5 mg/kg/día', d: 'Antes de los corticoides, mortalidad mayor a 70%',
            say: 'El pénfigo vulgar, antes de los corticoides, mataba a más del setenta por ciento de los pacientes por sepsis o deshidratación. Hoy el pilar inicial es prednisona oral a dosis altas, de uno a uno coma cinco miligramos por kilo al día, asociada siempre a profilaxis de osteoporosis y protección gástrica.' },
          { t: 'Rituximab de primera línea', d: 'Anticuerpo anti-CD20, ahorra corticoides',
            say: 'Y hoy, según las guías internacionales, el rituximab, un anticuerpo monoclonal contra el CD veinte, se agrega de primera línea para inducir una remisión completa más precoz, junto con azatioprina o micofenolato como alternativa.' },
        ] },
        { title: 'Penfigoide ampollar', tag: 'Corticoide tópico de alta potencia', kind: 'key', items: [
          { t: 'Clobetasol en todo el cuerpo', d: 'Menor mortalidad que la prednisona oral en ancianos',
            say: 'El penfigoide ampollar, en cambio, se trata primero con clobetasol tópico, un corticoide de muy alta potencia, aplicado sobre toda la piel. En los estudios, esto tiene menor mortalidad que la prednisona oral en pacientes ancianos.' },
          { t: 'Prednisona a dosis moderada si es extenso', d: '0,5 mg/kg/día, mucho menos que en el pénfigo',
            say: 'Solo si el paciente no tolera el tópico o la enfermedad es muy extensa, se usa prednisona oral, pero a una dosis moderada de cero coma cinco miligramos por kilo, bastante menor que la que necesita el pénfigo. Y si se requiere mantención, se agrega metotrexato oral en dosis bajas, en vez de mantener al anciano con corticoides sistémicos por meses.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Dónde se separa la piel',
      images: [
        { src: 'animaciones/derma-11/A1_penfigo_penfigoide.mp4', label: 'Pénfigo o penfigoide', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Flácida o tensa',
          say: 'En el pénfigo la separación ocurre dentro de la epidermis, y la ampolla es flácida. En el penfigoide ocurre bajo la epidermis, y la ampolla es tensa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué indica el médico general',
      title: 'Cómo se toman la biopsia y la inmunofluorescencia',
      cards: [
        { title: 'Dos muestras, dos destinos', tag: 'Punch de 3 a 4 mm', kind: 'key', items: [
          { t: 'Borde de una ampolla reciente', d: 'Menos de 24 horas; en formalina, hematoxilina-eosina',
            say: 'En el pénfigo y el penfigoide, el diagnóstico de certeza exige biopsia, que el médico general indica y deriva al especialista. Se hacen dos muestras con punch de tres a cuatro milímetros bajo anestesia local. La primera, del borde de una ampolla de menos de veinticuatro horas, nunca de una antigua ni solo del techo, en formalina, para hematoxilina-eosina: distingue la ampolla acantolítica intraepidérmica del pénfigo de la subepidérmica del penfigoide.' },
          { t: 'Piel sana a 1 cm de la ampolla', d: 'En medio de Michel o suero, no en formalina',
            say: 'La segunda muestra es de la piel perilesional de aspecto sano, a un centímetro de la ampolla. Esa no va en formalina, sino en medio de Michel o suero fisiológico, y se envía rápido, porque es para la inmunofluorescencia directa.' },
        ] },
        { title: 'Qué esperar', tag: 'Y el suero', kind: 'criteria', items: [
          { t: 'Pénfigo: red de IgG y C3', d: 'Penfigoide: línea en la membrana basal',
            say: 'En el pénfigo ves depósito intercelular de inmunoglobulina G y complemento, en red; en el penfigoide, un depósito lineal en la membrana basal.' },
          { t: 'Suero: desmogleínas 1 y 3, o BP180 y BP230', d: 'Inmunofluorescencia indirecta o ELISA',
            say: 'En el suero se pide inmunofluorescencia indirecta o ELISA contra desmogleínas uno y tres en el pénfigo, y contra BP ciento ochenta y BP doscientos treinta en el penfigoide.' },
          { t: 'Antes de biopsiar: anticoagulantes y anestésicos', d: 'Sutura o hemostasia simple',
            say: 'Y antes de biopsiar preguntas por anticoagulantes y alergia a anestésicos, y cierras con sutura o hemostasia simple.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la morfología de la ampolla al tratamiento de cada enfermedad.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Pénfigo vulgar versus penfigoide ampollar',
      head: ['Parámetro', 'Pénfigo vulgar', 'Penfigoide ampollar'],
      rows: [
        { cells: ['Edad típica', '40 a 60 años', 'Más de 70 a 80 años'],
          say: 'Repasemos con la tabla. La edad: cuarenta a sesenta años en el pénfigo; más de setenta u ochenta en el penfigoide.' },
        { cells: ['Morfología de la ampolla', 'Flácida, se rompe fácil', 'Tensa, resiste días'],
          say: 'La morfología: ampolla flácida en el pénfigo; tensa y resistente en el penfigoide.' },
        { cells: ['Signo de Nikolsky', 'Positivo', 'Negativo'],
          say: 'El signo de Nikolsky: positivo en el pénfigo, negativo en el penfigoide. Esta es la pregunta más directa del tema.' },
        { cells: ['Mucosa oral', 'Comprometida en 70 a 90%, suele iniciar ahí', 'Excepcional, menor a 20%'],
          say: 'La mucosa oral: comprometida en la gran mayoría de los pénfigos, y casi siempre respetada en el penfigoide.' },
        { cells: ['Síntoma predominante', 'Dolor de las erosiones', 'Prurito intenso'],
          say: 'Y el síntoma que predomina: dolor en el pénfigo, por las erosiones; prurito intenso en el penfigoide, antes incluso de que aparezcan las ampollas.' },
        { cells: ['Inmunofluorescencia directa', 'Depósito intercelular en red de pescar', 'Depósito lineal en la membrana basal'],
          say: 'La inmunofluorescencia directa: depósito entre las células, en red de pescar, en el pénfigo; depósito lineal continuo en la membrana basal, en el penfigoide.' },
        { cells: ['Tratamiento inicial', 'Prednisona oral en dosis altas', 'Clobetasol tópico de alta potencia'],
          say: 'Y el tratamiento inicial: corticoide sistémico en dosis altas en el pénfigo; corticoide tópico potente en el penfigoide. Confundir estas dos indicaciones es el error más grave de todo el tema, porque en el anciano frágil, la prednisona oral en dosis altas aumenta el riesgo de mortalidad por otras causas.' },
        { cells: ['Toma de biopsia', 'Borde de ampolla reciente en formalina; piel sana vecina en medio de Michel', 'Una sola muestra, del techo de una ampolla antigua'],
          say: 'Y la biopsia: dos muestras, una del borde de una ampolla reciente en formalina y otra de la piel sana vecina en medio de Michel, para la inmunofluorescencia. El error es tomar una sola muestra del techo de una ampolla antigua.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 52 años consulta por erosiones dolorosas en la mucosa yugal y encías de 2 meses de evolución, sin respuesta a antimicóticos. Hace 10 días notó ampollas de pared muy delgada en el tronco, que se rompen con el roce de la ropa dejando zonas denudadas dolorosas. Al frotar suavemente la piel sana cercana a una lesión, la epidermis se desprende con facilidad.',
      question: '¿Cuál es el diagnóstico más probable y el tratamiento inicial?',
      options: [
        { letter: 'A', text: 'Penfigoide ampollar; clobetasol tópico de alta potencia' },
        { letter: 'B', text: 'Pénfigo vulgar; prednisona oral en dosis altas' },
        { letter: 'C', text: 'Dermatitis herpetiforme; dapsona y dieta sin gluten' },
        { letter: 'D', text: 'Necrólisis epidérmica tóxica; traslado a Centro de Quemados' },
        { letter: 'E', text: 'Eritema multiforme major; aciclovir oral' },
      ],
      correct: 'B',
      explanation: 'Úlceras orales dolorosas como debut, ampollas flácidas de pared delgada y Nikolsky positivo en una mujer de mediana edad: Pénfigo Vulgar. El tratamiento inicial es prednisona oral en dosis altas. El penfigoide es Nikolsky negativo y respeta la mucosa oral; no hay antecedente farmacológico ni fiebre para pensar en NET.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y dos años, con erosiones dolorosas en la mucosa de la boca y las encías desde hace dos meses, sin respuesta a antimicóticos. Hace diez días notó ampollas de pared muy delgada en el tronco, que se rompen con el roce de la ropa. Al frotar suavemente la piel sana cerca de una lesión, la epidermis se desprende con facilidad.',
        question: '¿Cuál es el diagnóstico más probable y el tratamiento inicial?',
        options: 'Las opciones: penfigoide ampollar con clobetasol tópico, pénfigo vulgar con prednisona oral en dosis altas, dermatitis herpetiforme con dapsona, necrólisis epidérmica tóxica con traslado a quemados, o eritema multiforme major con aciclovir. Piénsalo.',
        answer: 'Es la B. Las úlceras orales como primer síntoma, la ampolla flácida y el Nikolsky positivo, en una mujer de mediana edad, arman el cuadro clásico del pénfigo vulgar. El tratamiento inicial correcto es prednisona oral en dosis altas. El penfigoide es Nikolsky negativo y respeta la boca. Y no hay ni el antecedente farmacológico ni la fiebre que necesitarías para pensar en necrólisis epidérmica tóxica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un hombre de 76 años, con antecedente de enfermedad de Parkinson, consulta por 2 meses de prurito generalizado severo, al que se agregó en las últimas 2 semanas la aparición de múltiples ampollas de gran tamaño en el abdomen, las ingles y las caras internas de los muslos. Al examen se aprecian ampollas de contenido seroso claro, de paredes gruesas y muy tensas, sobre placas eritematosas. La mucosa oral no presenta lesiones. Al frotar con fuerza moderada la piel sana cercana, la epidermis no se despega.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pénfigo vulgar' },
        { letter: 'B', text: 'Penfigoide ampollar' },
        { letter: 'C', text: 'Necrólisis epidérmica tóxica' },
        { letter: 'D', text: 'Dermatitis herpetiforme' },
        { letter: 'E', text: 'Epidermólisis bullosa simple' },
      ],
      correct: 'B',
      explanation: 'Edad avanzada con patología neurológica de base, prurito intenso prodrómico, ampollas tensas y resistentes, Nikolsky negativo y mucosa oral respetada: Penfigoide Ampollar. El pénfigo afectaría a un paciente más joven, con ampollas flácidas, Nikolsky positivo y compromiso oral casi universal.',
      say: {
        stem: 'Vamos con una pregunta del banco. Un hombre de setenta y seis años, con Parkinson, consulta por dos meses de prurito generalizado severo, al que se agregan ampollas de gran tamaño en el abdomen, las ingles y la cara interna de los muslos. Las ampollas tienen contenido claro, paredes gruesas y muy tensas, sobre placas rojas. La mucosa oral está indemne. Al frotar con fuerza moderada la piel sana cercana, la epidermis no se despega.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: pénfigo vulgar, penfigoide ampollar, necrólisis epidérmica tóxica, dermatitis herpetiforme, o epidermólisis bullosa simple. Piénsalo.',
        answer: 'Es la B, penfigoide ampollar. Todo calza con lo que vimos hoy: edad avanzada con antecedente neurológico, prurito intenso antes de las ampollas, ampollas tensas y resistentes, Nikolsky negativo, y boca respetada. El pénfigo se ve en pacientes más jóvenes, con ampollas flácidas, Nikolsky positivo, y casi siempre compromiso oral desde el inicio.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.5.001 · Biopsia de piel",
      "stem": "Hombre de 72 años presenta hace 3 semanas ampollas tensas de contenido seroso sobre placas eritematosas en el abdomen y las caras internas de los muslos, con prurito intenso y sin compromiso de mucosas. Se sospecha una enfermedad ampollar autoinmune.",
      "question": "¿Cuál es el estudio más adecuado para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Cultivo del contenido de la ampolla"
        },
        {
          "letter": "B",
          "text": "Biopsia de una ampolla reciente para histología y biopsia de piel perilesional para inmunofluorescencia directa"
        },
        {
          "letter": "C",
          "text": "Test de Tzanck"
        },
        {
          "letter": "D",
          "text": "Biopsia del centro de una erosión antigua"
        },
        {
          "letter": "E",
          "text": "Examen micológico directo"
        }
      ],
      "correct": "B",
      "explanation": "En enfermedades ampollares autoinmunes se toman dos muestras: una ampolla reciente e intacta para histología, que muestra el nivel de separación, y piel perilesional sana para inmunofluorescencia directa, que muestra el depósito de anticuerpos. Las erosiones antiguas no sirven porque el tejido está destruido.",
      "say": {
        "stem": "Hombre de setenta y dos años con tres semanas de ampollas tensas sobre placas rojas en el abdomen y los muslos, con mucho prurito y sin lesiones en mucosas. Se sospecha una enfermedad ampollar autoinmune.",
        "question": "¿Cuál es el estudio más adecuado para confirmar el diagnóstico?",
        "options": "Las opciones: cultivo de la ampolla, biopsia de ampolla reciente más biopsia perilesional para inmunofluorescencia directa, test de Tzanck, biopsia de una erosión antigua, o micológico directo. Piénsalo.",
        "answer": "Es la B. La ampolla nueva muestra a qué nivel se separa la piel, y la piel vecina sana muestra los anticuerpos depositados con inmunofluorescencia directa. Biopsiar una erosión antigua tienta porque es lo más visible, pero ese tejido ya está destruido y no permite diagnosticar."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta semiológica clave', tag: 'Flácida versus tensa', kind: 'key', items: [
          { t: 'Flácida y Nikolsky positivo: pénfigo', d: 'Tensa y Nikolsky negativo: penfigoide',
            say: 'Cerremos con las reglas de oro. Ampolla flácida con Nikolsky positivo es pénfigo vulgar. Ampolla tensa con Nikolsky negativo es penfigoide ampollar.' },
        ] },
        { title: 'La mucosa oral decide', tag: 'Comprometida versus respetada', kind: 'alert', items: [
          { t: 'La boca avisa antes en el pénfigo', d: 'El penfigoide casi siempre la respeta',
            say: 'La mucosa oral casi siempre está comprometida, y suele ser el primer síntoma, en el pénfigo; en el penfigoide, casi siempre se respeta. Y de paso, recuerda que existen primos cercanos de estas dos enfermedades: el pénfigo foliáceo, más superficial y que nunca afecta mucosas, y la dermatitis herpetiforme, siempre asociada a celiaquía y tratada con dapsona, que verás en otras clases del bloque.' },
        ] },
        { title: 'El tratamiento no es intercambiable', tag: 'Sistémico versus tópico', kind: 'pharma', items: [
          { t: 'Pénfigo: prednisona oral en dosis altas', d: 'Penfigoide: clobetasol tópico primero',
            say: 'Y el tratamiento no se intercambia: el pénfigo necesita corticoides sistémicos en dosis altas desde el principio; el penfigoide responde mejor, y de forma más segura en el anciano, a un corticoide tópico potente. Si te llevas una sola idea de hoy: mira la ampolla y haz el Nikolsky, y vas a saber cuál es cuál. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ampolla autoinmune: de la morfología al tratamiento',
    root: N(
      'start', 'Paciente con ampollas cutáneas, sin fármaco desencadenante claro', 'Primero describe la ampolla: ¿flácida o tensa?',
      'Frente a una ampolla de origen no farmacológico, la morfología de la lesión es el primer dato que orienta el diagnóstico.',
      ['', N(
        'q', '¿La ampolla es flácida o tensa?', 'Y evalúa el signo de Nikolsky',
        'La morfología de la ampolla y el signo de Nikolsky separan de entrada el nivel de la lesión.',
        ['Flácida, Nikolsky positivo', N(
          'q', '¿Hay úlceras orales previas?', 'Suelen preceder a la piel por semanas o meses',
          'Confirmada la ampolla flácida con Nikolsky positivo, el compromiso oral inaugural apoya el diagnóstico de pénfigo vulgar.',
          ['Sí, desde antes', N(
            'refer', 'Pénfigo vulgar', 'Prednisona oral en dosis altas más rituximab',
            'Úlceras orales dolorosas como debut, ampolla flácida y Nikolsky positivo: pénfigo vulgar. Tratamiento inicial con corticoides sistémicos en dosis altas, asociando rituximab o azatioprina.',
          )],
          ['No, boca sana', N(
            'do', 'Reevaluar: pénfigo foliáceo', 'Anti-desmogleína 1, no afecta mucosas',
            'Sin compromiso oral pero con Nikolsky positivo, considera pénfigo foliáceo: mismo mecanismo de acantolisis, pero más superficial y sin afectar mucosas.',
          )],
        )],
        ['Tensa, Nikolsky negativo', N(
          'q', '¿Hay prurito intenso previo y edad avanzada?', 'Y mucosa oral respetada',
          'Confirmada la ampolla tensa con Nikolsky negativo, el prurito prodrómico en un paciente mayor apoya el penfigoide ampollar.',
          ['Sí, anciano con prurito', N(
            'do', 'Penfigoide ampollar', 'Clobetasol tópico de alta potencia primero',
            'Anciano con prurito intenso prodrómico, ampolla tensa, Nikolsky negativo y boca respetada: penfigoide ampollar. Tratamiento inicial con corticoide tópico de muy alta potencia en todo el cuerpo.',
          )],
          ['No calza del todo', N(
            'refer', 'Ampliar estudio con biopsia e inmunofluorescencia', 'Descartar dermatitis herpetiforme',
            'Si el cuadro no encaja del todo, la biopsia con inmunofluorescencia directa distingue entre penfigoide, dermatitis herpetiforme y otras ampollares subepidérmicas.',
          )],
        )],
      )],
    ),
  },
};
