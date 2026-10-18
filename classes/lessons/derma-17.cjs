// Clase 16.17 (Dermatología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_4.cjs (derma-17, tema 16.17, tier 2). Códigos 6.01.1.028, 6.01.1.013, 2.01.1.111
// (Dx específico · Tx completo/inicial · Seguimiento completo/derivar, según books/data/v3_codemap.json).
// Preguntas reales (class_questions.cjs derma-17; verificadas contra el banco real): Agosto 2021 P83 (hemangioma periocular: propranolol),
// Julio 2024 P125 (ocho hemangiomas: ecografía abdominal), Diciembre 2025 P83 (queloide esternal) y Diciembre 2018 P64 (queloide tras arete).
// Enunciados y alternativas del banco real (se corrigió "propanolol" por propranolol).
// No usadas: Julio 2024 P126 y Enero 2023 P19 (duplican la ecografía abdominal por múltiples hemangiomas), Diciembre 2017 P87 (periocular, repite
// Agosto 2021 P83), Diciembre 2022 P41 (seis hemangiomas: la clave del banco es resonancia espinal; el libro y las otras tres preguntas piden
// ecografía abdominal: posible clave errónea, se anota) y Diciembre 2017 P90 (quiste epidérmico abscedado: la clave es antibiótico más drenaje;
// el libro indica drenaje y antibiótico solo si hay celulitis: se anota).
// Fotos (en contexto): biblioteca/19_dermatologia/derma-17/ (Fitzpatrick, Nelson, Bailey & Love, Kanski). Del libro de cirugía se reutilizan
// quiste epidermoide, lipomas, queloide de lóbulo y cicatriz hipertrófica (copias en la carpeta de la clase).
// En movimiento: scenes/derma_nuevas.html (?v=hemangioma), gráfico solo código de la historia natural frente a la malformación vascular.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tumores benignos de la piel, hemangiomas del lactante y malformaciones vasculares: cuándo tranquilizar, cuándo tratar y cuándo derivar',
      say: 'Bienvenido. Hoy vemos las lesiones benignas de la piel, un motivo de consulta muy frecuente, en el adulto y en el lactante. El médico general debe reconocerlas, tranquilizar al paciente, y distinguir las que requieren extirpación o derivación. En el examen se preguntan tres cosas: el queloide frente a la cicatriz hipertrófica, el manejo del hemangioma infantil, y la diferencia entre un hemangioma y una malformación vascular. Partamos por el adulto.',
    },

    {
      type: 'points',
      kicker: 'Tumores benignos del adulto',
      title: 'Queratosis seborreica',
      cards: [
        { title: 'Cómo es', tag: 'El tumor epitelial benigno más frecuente', kind: 'key', items: [
          { t: 'Placa verrugosa «pegada»', d: 'Café a negro, bien delimitada, untuosa',
            say: 'La queratosis seborreica es el tumor epitelial benigno más frecuente del adulto mayor. Son placas o pápulas bien delimitadas, de superficie verrugosa y untuosa, que parecen pegadas sobre la piel. Mira estas lesiones en la cara: múltiples, de color café a negro, con ese aspecto adherido.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/03_queratosis-seborreicas__fitzpatrick_p1093.jpg', label: 'Queratosis seborreicas', at: 'Mira estas lesiones', credit: 'Fitzpatrick Dermatology, p. 1093' } },
          { t: 'Tronco, cara y cuero cabelludo', d: 'Respeta palmas y plantas',
            say: 'Son múltiples, en el tronco, la cara y el cuero cabelludo, y respetan las palmas y las plantas. La dermatoscopía muestra aperturas tipo comedón, quistes tipo milia y un aspecto cerebriforme.' },
        ] },
        { title: 'Conducta', tag: 'Casi siempre, nada', kind: 'criteria', items: [
          { t: 'No malignizan: sin tratamiento', d: 'Crioterapia, curetaje o shaving si molestan',
            say: 'No malignizan y no requieren tratamiento. Si molestan o se inflaman, se tratan con crioterapia, curetaje o shaving. Y las que cambian, sangran o generan dudas con un melanoma se biopsian.' },
          { t: 'Signo de Leser-Trélat', d: 'Muchas de golpe y con prurito',
            say: 'La alarma es el signo de Leser-Trélat: la aparición brusca de muchas lesiones, con prurito. Sugiere una neoplasia interna, sobre todo digestiva.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores benignos del adulto',
      title: 'Quistes y lipoma',
      cards: [
        { title: 'Quiste epidérmico', tag: 'Mal llamado «sebáceo»', kind: 'key', items: [
          { t: 'Nódulo móvil con punctum central', d: 'Cara, cuello y tronco · contenido caseoso',
            say: 'El quiste epidérmico, mal llamado sebáceo, es un nódulo firme y móvil, con un punctum central, en la cara, el cuello y el tronco. Mira este nódulo en la mejilla: sobreelevado y con ese centro. Contiene queratina caseosa, y puede inflamarse o abscedarse.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/13_quiste-epidermoide__fitzpatrick_p1102.jpg', label: 'Quiste epidérmico', at: 'Mira este nódulo', credit: 'Fitzpatrick Dermatology, p. 1102' } },
          { t: 'Extirpar la pared completa', d: 'Fuera de la fase inflamatoria, 4-6 semanas después',
            say: 'El tratamiento es extirpar la pared quística completa: si queda, recidiva. Durante la inflamación se dan antiinflamatorios y drenaje si hay absceso, con antibiótico solo si hay celulitis, y se extirpa cuatro a seis semanas después. Si los quistes son múltiples y atípicos, se descarta un síndrome de Gardner.' },
          { t: 'Quiste pilar', d: 'Liso, sin punctum, múltiple, familiar, cuero cabelludo',
            say: 'El quiste pilar, en cambio, es liso, sin punctum, múltiple y familiar, y está en el cuero cabelludo.' },
        ] },
        { title: 'Lipoma', tag: 'El tumor blando más frecuente', kind: 'criteria', items: [
          { t: 'Nódulo blando, lobulado, móvil, indoloro', d: '2-10 cm · tronco, cuello y extremidades',
            say: 'El lipoma es el tumor benigno de partes blandas más frecuente: un nódulo subcutáneo blando, lobulado, móvil, indoloro y de crecimiento lento, de dos a diez centímetros. Aquí se ven lipomas múltiples en los antebrazos. El diagnóstico es clínico.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/14_lipomas-multiples__fitzpatrick_p1228.jpg', label: 'Lipomas múltiples', at: 'Aquí se ven lipomas', credit: 'Fitzpatrick Dermatology, Fig. 129-1' } },
          { t: 'Sospechar liposarcoma', d: '> 5 cm, profundo, firme, fijo, doloroso, crece rápido',
            say: 'Se sospecha un liposarcoma si mide más de cinco centímetros, es profundo bajo la fascia, firme, fijo, doloroso o crece rápido. Eso requiere resonancia magnética y biopsia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores benignos del adulto',
      title: 'Dermatofibroma y otras lesiones benignas',
      cards: [
        { title: 'Dermatofibroma', tag: 'Piernas de mujeres jóvenes', kind: 'key', items: [
          { t: 'Pápula firme pardo-rosada', d: '0,5-1 cm · signo del hoyuelo',
            say: 'El dermatofibroma es una pápula o un nódulo firme, de medio a un centímetro, pardo rosado, en las piernas de mujeres jóvenes, a menudo tras una picadura o un trauma. Mira esta lesión: firme, indurada, algo violácea en el centro. Y al comprimirla lateralmente se deprime: es el signo del hoyuelo.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/12_dermatofibroma__fitzpatrick_p594.jpg', label: 'Dermatofibroma', at: 'Mira esta lesión', credit: 'Fitzpatrick Dermatology, Fig. 64-7A' } },
          { t: 'Benigno y asintomático', d: 'Se extirpa solo si hay duda o molestia',
            say: 'Es benigno y asintomático. Se extirpa solo si hay duda diagnóstica o molestia.' },
        ] },
        { title: 'Otras', tag: 'Reconocer', kind: 'normal', items: [
          { t: 'Acrocordones', d: 'Cuello y axilas: obesidad y diabetes',
            say: 'Los acrocordones son fibromas blandos y péndulos del cuello y las axilas, asociados a obesidad y diabetes.' },
          { t: 'Angioma rubí', d: 'Pápula roja brillante del adulto',
            say: 'El angioma rubí es una pápula roja brillante del adulto.' },
          { t: 'Granuloma piógeno', d: 'Pápula roja friable que sangra',
            say: 'Y el granuloma piógeno es una pápula roja y friable que sangra, de crecimiento rápido tras un trauma o en el embarazo. Se trata con curetaje y electrocoagulación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cicatrices patológicas',
      title: 'Queloide frente a cicatriz hipertrófica',
      cards: [
        { title: 'Cicatriz hipertrófica', tag: 'No sobrepasa la herida', kind: 'normal', items: [
          { t: 'Respeta los bordes de la herida', d: 'Primeras semanas · regresa en 1-2 años',
            say: 'La diferencia que se pregunta es el borde. La cicatriz hipertrófica no sobrepasa los límites de la herida, aparece en las primeras semanas y tiende a regresar en uno a dos años. Mira esta cicatriz tras una quemadura en el tórax: es gruesa y elevada, pero se queda dentro de la zona quemada.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/16_cicatriz-hipertrofica__bailey-love_p644.jpg', label: 'Cicatriz hipertrófica', at: 'Mira esta cicatriz', credit: 'Bailey & Love 27.ª ed., Fig. 41.6' } },
        ] },
        { title: 'Queloide', tag: 'Sobrepasa la herida', kind: 'alert', items: [
          { t: 'Sobrepasa los límites de la herida', d: 'Meses después · rojo violáceo · no regresa',
            say: 'El queloide sobrepasa los límites de la herida. Es de aspecto rojo violáceo, a veces doloroso o pruriginoso, aparece meses después y no regresa. Mira este queloide en el lóbulo de la oreja, tras una perforación: es una masa redondeada que crece más allá del sitio del trauma.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/15_queloide-lobulo__nelson_p5268.jpg', label: 'Queloide del lóbulo', at: 'Mira este queloide', credit: 'Nelson 22.ª ed., Fig. 700.1' } },
          { t: 'Fototipos oscuros; esternón, hombros, lóbulo', d: 'Evitar cirugías y perforaciones electivas',
            say: 'Es más frecuente en fototipos oscuros y en el esternón, los hombros, el dorso y el lóbulo de la oreja. Se previene evitando cirugías electivas y perforaciones en pacientes con antecedente.' },
          { t: 'Triamcinolona intralesional', d: '10-40 mg/mL cada 4-6 semanas · silicona',
            say: 'El tratamiento es triamcinolona intralesional, diez a cuarenta miligramos por mililitro, cada cuatro a seis semanas, con láminas de silicona, presoterapia y crioterapia. La cirugía sola recidiva en más de la mitad de los casos, y se combina con corticoide o radioterapia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemangioma infantil',
      title: 'Historia natural: crece y luego involuciona',
      nodes: [
        { id: 'n', col: 0, row: 2, k: 'start', t: 'Al nacer: nada o una mácula pálida', s: 'No está presente de verdad' },
        { id: 'p', col: 1, row: 2, k: 'effect', t: 'Proliferación rápida', s: 'Primeros 3-5 meses · la mayor parte a los 3' },
        { id: 'm', col: 2, row: 2, k: 'mech', t: 'Meseta', s: 'Se estabiliza' },
        { id: 'i', col: 3, row: 2, k: 'good', t: 'Involución lenta', s: '~50% a los 5 años · ~70% a los 7' },
        { id: 'g', col: 4, row: 1, k: 'q', t: 'Células GLUT-1 positivas', s: 'Tumor vascular benigno' },
        { id: 's', col: 4, row: 3, k: 'alert', t: 'Puede dejar secuelas', s: 'Piel redundante, telangiectasias' },
      ],
      edges: [
        { from: 'n', to: 'p' }, { from: 'p', to: 'm' }, { from: 'm', to: 'i' }, { from: 'i', to: 'g' }, { from: 'i', to: 's' },
      ],
      steps: [
        { show: ['n'], note: 'No es una lesión del nacimiento',
          say: 'Ahora el lactante. El hemangioma infantil es el tumor vascular benigno más frecuente de la infancia: de cuatro a diez por ciento de los lactantes, más en prematuros, bajo peso y niñas. Y lo primero que tienes que fijar es que no está presente al nacer. Puede ser solo una mácula pálida o con telangiectasias de pocos milímetros.' },
        { show: ['p', 'm'], note: 'Crece rápido y se estabiliza',
          say: 'Después viene una fase de proliferación rápida durante los primeros tres a cinco meses; la mayor parte del tamaño se alcanza a los tres meses. Luego hay una meseta.' },
        { show: ['i'], note: 'Y se va solo, durante años',
          say: 'Y después, una involución lenta durante años: alrededor de la mitad a los cinco años y siete de cada diez a los siete.' },
        { show: ['g', 's'], note: 'Tumor GLUT-1; deja secuelas',
          say: 'Son células endoteliales GLUT uno positivas, un dato que lo distingue de las malformaciones. Y al involucionar puede dejar piel redundante, telangiectasias o tejido fibroadiposo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemangioma infantil',
      title: 'Cómo se ven y complicaciones',
      cards: [
        { title: 'Tipos', tag: 'Por profundidad', kind: 'key', items: [
          { t: 'Superficial: placa roja «en fresa»', d: 'Rojo brillante',
            say: 'El hemangioma superficial es una placa rojo brillante, en fresa. Mira esta lesión: un nódulo rojo intenso, bien delimitado, sobre la piel.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/04_hemangioma-superficial-fresa__nelson_p5175.jpg', label: 'Hemangioma superficial', at: 'Mira esta lesión', credit: 'Nelson 22.ª ed., Fig. 691.8A' } },
          { t: 'Profundo: nódulo azulado bajo piel normal', d: 'O mixto: ambos componentes',
            say: 'El profundo es un nódulo azulado bajo la piel de aspecto normal, como el de este lactante, que se ve como un abultamiento. Y el mixto combina ambos: en esta imagen, un componente rojo y uno de relieve bajo la piel.',
            photos: [
              { src: 'biblioteca/19_dermatologia/derma-17/05_hemangioma-profundo__nelson_p5175.jpg', label: 'Hemangioma profundo', at: 'como el de este lactante', credit: 'Nelson 22.ª ed., Fig. 691.8B' },
              { src: 'biblioteca/19_dermatologia/derma-17/06_hemangioma-mixto__nelson_p5175.jpg', label: 'Hemangioma mixto', at: 'en esta imagen', credit: 'Nelson 22.ª ed., Fig. 691.8C' },
            ] },
        ] },
        { title: 'Complicaciones', tag: 'Lo más frecuente', kind: 'alert', items: [
          { t: 'Ulceración', d: 'Dolorosa: pliegues, labios, zona del pañal',
            say: 'La complicación más frecuente es la ulceración, dolorosa, en pliegues, labios y zona del pañal.' },
          { t: 'Segmentario: más complicaciones', d: 'Sigue un territorio de desarrollo',
            say: 'El hemangioma segmentario sigue un territorio de desarrollo y se asocia a más complicaciones y a síndromes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemangioma infantil',
      title: 'Alarmas: cuándo estudiar',
      cards: [
        { title: 'Por la localización', tag: 'Riesgo funcional', kind: 'alert', items: [
          { t: 'Periorbitario', d: 'Ambliopía y astigmatismo',
            say: 'Los hemangiomas periorbitarios pueden causar ambliopía y astigmatismo. Mira este lactante: el hemangioma cubre el párpado y se extiende por la frente y la sien. Cuando tapa el eje visual, no se espera.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/07_hemangioma-periocular-segmentario__nelson_p5176.jpg', label: 'Hemangioma periocular', at: 'Mira este lactante', credit: 'Nelson 22.ª ed., Fig. 691.12' } },
          { t: 'Barba o cuello: vía aérea', d: 'Estridor, tos, ronquera entre 6 semanas y 6 meses',
            say: 'Los de la barba o segmentarios del cuello pueden acompañar un hemangioma subglótico, con estridor, tos o ronquera, entre las seis semanas y los seis meses. Los labiales dificultan la alimentación, y los de la nariz o el labio pueden deformar.' },
        ] },
        { title: 'Estudio', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: '5 o más hemangiomas: ecografía abdominal', d: 'Compromiso hepático · TSH',
            say: 'Cinco o más hemangiomas cutáneos obligan a pedir una ecografía abdominal, para descartar compromiso hepático, que puede cursar con insuficiencia cardíaca de alto gasto e hipotiroidismo, por lo que se mide la TSH. Esa es la regla más preguntada.' },
          { t: 'Segmentario facial grande: PHACE', d: 'RM, angio-RM y ecocardiograma',
            say: 'Un hemangioma segmentario facial grande hace sospechar un síndrome PHACE: malformación de la fosa posterior, hemangioma, anomalías arteriales, cardíacas y oculares. Mira este otro lactante, con el hemangioma que ocupa la hemicara derecha y baja al cuello. Se estudia con resonancia, angiorresonancia y ecocardiograma.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/01_hemangioma-infantil-segmentario__fitzpatrick_p1203.jpg', label: 'Hemangioma segmentario', at: 'Mira este otro lactante', credit: 'Fitzpatrick Dermatology, p. 1203' } },
          { t: 'Lumbosacro en línea media', d: 'Disrafismo espinal: eco o RM de columna',
            say: 'Y uno lumbosacro en la línea media hace sospechar un disrafismo espinal, con una ecografía o resonancia de columna.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemangioma infantil',
      title: 'Tratamiento: observar o propranolol',
      cards: [
        { title: 'Observar', tag: 'La mayoría', kind: 'normal', items: [
          { t: 'Pequeño y sin riesgo funcional', d: 'Fotografías seriadas, control mensual al inicio',
            say: 'La mayoría, pequeños y sin riesgo funcional, se observan, con fotografías seriadas y controles mensuales en la fase proliferativa. Se tranquiliza a la familia, y no se opera.' },
        ] },
        { title: 'Propranolol oral', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Cuándo: riesgo funcional, ulceración, desfiguración', d: 'Periorbitario, vía aérea, desfigurante',
            say: 'Cuando hay riesgo funcional, ulceración o desfiguración, la primera línea es propranolol oral.' },
          { t: '2-3 mg/kg/día en 2-3 dosis, 6 a 12 meses', d: 'Partir con 1 mg/kg/día · idealmente antes de los 5 meses',
            say: 'La dosis es de dos a tres miligramos por kilo al día en dos o tres tomas. Se parte con un miligramo por kilo y se sube en una a dos semanas, idealmente antes de los cinco meses, y se mantiene seis a doce meses, porque suspenderlo antes produce rebote.' },
          { t: 'Control de FC, PA y glicemia', d: 'Con las comidas; suspender si hay ayuno o vómitos',
            say: 'Se controlan la frecuencia cardíaca, la presión arterial y la glicemia. Se da con la alimentación y se suspende si el lactante está en ayuno o con vómitos, por el riesgo de hipoglicemia.' },
        ] },
        { title: 'Contraindicaciones y derivar', tag: 'Alertas', kind: 'alert', items: [
          { t: 'Asma, bradicardia, bloqueo AV, shock', d: 'Corticoides sistémicos solo como alternativa',
            say: 'El propranolol está contraindicado en asma o broncoespasmo, bradicardia, bloqueo auriculoventricular, hipotensión y shock. Los corticoides sistémicos quedaron solo como alternativa.' },
          { t: 'Timolol 0,5% tópico; derivar', d: 'Láser para telangiectasias y ulceración',
            say: 'Los superficiales pequeños pueden tratarse con timolol tópico al medio por ciento, y el láser de colorante pulsado sirve en las telangiectasias y ulceraciones. El médico general inicia el tratamiento y deriva los periorbitarios, de vía aérea, ulcerados, segmentarios faciales y múltiples.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Malformaciones vasculares',
      title: 'No es un hemangioma',
      cards: [
        { title: 'Malformación', tag: 'Error del desarrollo del vaso', kind: 'key', items: [
          { t: 'Presente desde el nacimiento', d: 'GLUT-1 negativas',
            say: 'Las malformaciones vasculares son errores del desarrollo de los vasos, presentes desde el nacimiento, aunque a veces se noten después. Son GLUT uno negativas.' },
          { t: 'Crecen con el niño y nunca involucionan', d: 'Capilares, venosas, linfáticas, AV, combinadas',
            say: 'Crecen en proporción al niño y nunca involucionan. Se clasifican según el vaso comprometido: capilares, venosas, linfáticas, arteriovenosas y combinadas.' },
        ] },
        { title: 'Hemangioma', tag: 'Un tumor', kind: 'criteria', items: [
          { t: 'Aparece semanas después', d: 'Prolifera y luego involuciona',
            say: 'El hemangioma, en cambio, es un tumor que aparece semanas después del parto, prolifera y luego involuciona. Esa diferencia, presente al nacer o no, y crece con el niño o se va solo, es la que se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Malformaciones capilares',
      title: 'Mancha salmón y mancha en vino de Oporto',
      cards: [
        { title: 'Mancha salmón', tag: 'Nevus simplex', kind: 'normal', items: [
          { t: 'Mácula rosada mal delimitada', d: '40-70% de los recién nacidos',
            say: 'La mancha salmón, o nevus simplex, es una mácula rosada y mal delimitada, presente en cuarenta a setenta por ciento de los recién nacidos, que se acentúa con el llanto. Mira esta, en la nuca, el picotazo de cigüeña.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/08_mancha-salmon-nuca__bailey-love_p634.jpg', label: 'Mancha salmón en la nuca', at: 'Mira esta', credit: 'Bailey & Love 27.ª ed., Fig. 40.42' } },
          { t: 'Frente y párpados: desaparece en 1-2 años', d: 'La de la nuca puede persistir',
            say: 'La de la frente y los párpados, el beso de ángel, desaparece en uno a dos años, y la de la nuca puede persistir. Es benigna y no requiere estudio ni tratamiento.' },
        ] },
        { title: 'Mancha en vino de Oporto', tag: 'Malformación capilar', kind: 'alert', items: [
          { t: 'Roja, bien delimitada, unilateral en cara', d: 'No desaparece; se oscurece y engruesa',
            say: 'La mancha en vino de Oporto es una mácula rosada a roja, bien delimitada, habitualmente unilateral en la cara y el cuello. No desaparece, y con los años se oscurece, se engruesa y puede formar nódulos y granulomas piógenos. Mira esta niña, con la mancha en la cara.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/09_mancha-vino-oporto-cara__kanski_p26.jpg', label: 'Mancha en vino de Oporto', at: 'Mira esta niña', credit: 'Kanski 8.ª ed., Fig. 1.14' } },
          { t: 'Láser de colorante pulsado', d: 'Temprano, por especialista',
            say: 'Su tratamiento de elección es el láser de colorante pulsado, idealmente temprano, a cargo del especialista.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndromes asociados',
      title: 'Sturge-Weber, Klippel-Trénaunay y otras',
      cards: [
        { title: 'Sturge-Weber', tag: 'Mancha en V1', kind: 'alert', items: [
          { t: 'Vino de Oporto en frente y párpado superior', d: 'Rama oftálmica del trigémino',
            say: 'Si la mancha en vino de Oporto compromete la rama oftálmica del trigémino, la frente y el párpado superior, sospecha un síndrome de Sturge-Weber.' },
          { t: 'Convulsiones, hemiparesia, retraso', d: 'Calcificaciones «en vías de tren»',
            say: 'Hay una malformación vascular leptomeníngea del mismo lado, que produce convulsiones, hemiparesia y retraso del desarrollo, con calcificaciones en vías de tren. Esta tomografía muestra la calcificación unilateral con atrofia del hemisferio.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/10_sturge-weber-tac__nelson_p4657.jpg', label: 'Sturge-Weber: calcificación', at: 'Esta tomografía', credit: 'Nelson 22.ª ed., Fig. 636.14' } },
          { t: 'Glaucoma', d: 'RM con contraste; neurología y oftalmología',
            say: 'Y puede haber glaucoma: aquí, los vasos episclerales dilatados de un ojo con Sturge-Weber. Se pide resonancia con contraste y se deriva a neurología y oftalmología.',
            photo: { src: 'biblioteca/19_dermatologia/derma-17/11_sturge-weber-glaucoma__kanski_p405.jpg', label: 'Ojo en Sturge-Weber', at: 'aquí, los vasos', credit: 'Kanski 8.ª ed., Fig. 10.94' } },
        ] },
        { title: 'Otras', tag: 'Se derivan', kind: 'criteria', items: [
          { t: 'Klippel-Trénaunay', d: 'Capilar + venosa + hipertrofia del miembro · Doppler',
            say: 'En una extremidad, la combinación de malformación capilar, venosa e hipertrofia del miembro es el síndrome de Klippel-Trénaunay, con riesgo de trombosis venosa y embolia pulmonar. Se estudia con Doppler.' },
          { t: 'Venosa: masa azulada compresible', d: 'Aumenta al llorar o con Valsalva',
            say: 'La malformación venosa es una masa azulada, blanda y compresible, que aumenta al llorar o con la maniobra de Valsalva. La linfática macroquística, el higroma quístico, se asocia a síndrome de Turner y a trisomías. Y la arteriovenosa es cálida, con frémito y riesgo de sangrado.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Hemangioma y malformación: dos historias distintas',
      images: [
        { src: 'animaciones/derma-17/A1_hemangioma_vs_malformacion.mp4', label: 'Hemangioma: crece y se va · malformación: crece con el niño', credit: 'Gráfico propio con los tiempos del libro' },
      ],
      steps: [
        { note: 'Un tumor que se va, un error que se queda',
          say: 'Compara las dos historias. El hemangioma no está al nacer, prolifera en los primeros tres a cinco meses, se estabiliza y luego involuciona durante años, alrededor de la mitad a los cinco años. La malformación vascular, en cambio, está desde el nacimiento, crece en proporción al niño y nunca involuciona. Por eso al hemangioma lo observas o lo tratas con propranolol, y a la mancha en vino de Oporto la derivas para láser.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la lesión de piel a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hemangioma, malformaciones y lesiones benignas',
      head: ['Lesión', 'Dato clave', 'Conducta en APS'],
      rows: [
        { cells: ['Hemangioma infantil', 'Semanas tras el parto · GLUT-1 · crece 3-5 meses y se va', 'Observar; propranolol si hay riesgo funcional; ≥ 5: eco abdominal'],
          say: 'Hemangioma infantil: aparece semanas después del parto, crece tres a cinco meses y luego involuciona. Se observa; con riesgo funcional, propranolol; y con cinco o más, ecografía abdominal.' },
        { cells: ['Mancha salmón', 'Presente al nacer · nuca, frente, párpados', 'Tranquilizar; sin estudio ni tratamiento'],
          say: 'Mancha salmón: presente al nacer, en la nuca, la frente y los párpados. Se tranquiliza, y no se estudia ni se trata.' },
        { cells: ['Mancha en vino de Oporto', 'Al nacer · unilateral en cara · no desaparece', 'Láser (derivar); V1: descartar Sturge-Weber'],
          say: 'Mancha en vino de Oporto: no desaparece. Se deriva para láser, y si compromete la frente y el párpado superior, descartas Sturge-Weber con resonancia y oftalmología.' },
        { cells: ['Malformación venosa o linfática', 'Masa blanda azulada o quística', 'Eco-Doppler o RM; derivar'],
          say: 'Malformación venosa o linfática: crece con el niño y no involuciona. Se estudia con ecodoppler o resonancia y se deriva.' },
        { cells: ['Queratosis seborreica', 'Adulto mayor · placa verrugosa «pegada»', 'Observar; crioterapia si molesta; biopsia si hay duda'],
          say: 'Queratosis seborreica: benigna, se observa, y la crioterapia es opcional. Muchas de golpe con prurito, piensa en neoplasia interna.' },
        { cells: ['Quiste epidérmico', 'Nódulo móvil con punctum', 'Extirpar la pared completa fuera de la inflamación'],
          say: 'Quiste epidérmico: nódulo con punctum. Se extirpa la pared completa, fuera de la fase inflamatoria.' },
        { cells: ['Lipoma', 'Nódulo subcutáneo blando e indoloro', '> 5 cm, profundo o doloroso: RM y biopsia'],
          say: 'Lipoma: blando y indoloro. Si mide más de cinco centímetros, es profundo o doloroso, resonancia y biopsia.' },
        { cells: ['Queloide', 'Sobrepasa los bordes de la herida · no regresa', 'Triamcinolona intralesional; cirugía + corticoide'],
          say: 'Queloide: sobrepasa los bordes y no regresa. Triamcinolona intralesional, y si se opera, siempre con corticoide o radioterapia. La cicatriz hipertrófica no sobrepasa los bordes y tiende a regresar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una madre consulta por una lesión roja y sobreelevada en la mejilla de su hija de 7 semanas, que no estaba al nacer y ha crecido rápidamente en las últimas semanas. Al examen se observa una placa rojo brillante de 2 cm, de superficie lobulada, sin ulceración, que no compromete el párpado ni la vía aérea; no hay otras lesiones cutáneas y el resto del examen es normal. La madre pregunta si debe operarse.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observar con controles y fotografías seriadas y tranquilizar a la madre' },
        { letter: 'B', text: 'Extirpación quirúrgica precoz' },
        { letter: 'C', text: 'Solicitar ecografía abdominal' },
        { letter: 'D', text: 'Iniciar propranolol oral' },
        { letter: 'E', text: 'Tratar con láser de colorante pulsado como malformación capilar' },
      ],
      correct: 'A',
      explanation: 'Es un hemangioma infantil superficial: tumor vascular que aparece en las primeras semanas, crece durante los primeros meses y luego involuciona de forma espontánea. Por ser único, pequeño, sin ulceración y sin riesgo funcional (no compromete la visión ni la vía aérea), la conducta es observar con controles y fotografías seriadas y tranquilizar a la madre; no se opera. Si fuera periocular, ulcerado, de la vía aérea o desfigurante se indica propranolol oral, y si hubiera 5 o más hemangiomas se pide una ecografía abdominal.',
      say: {
        stem: 'Una madre consulta por una lesión roja y sobreelevada en la mejilla de su hija de siete semanas, que no estaba al nacer y ha crecido rápido. Es una placa rojo brillante de dos centímetros, lobulada, sin ulceración, que no compromete el párpado ni la vía aérea. No hay otras lesiones y el resto del examen es normal. La madre pregunta si debe operarse.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: observar con controles y fotografías; cirugía precoz; ecografía abdominal; propranolol oral; o láser como malformación capilar. Piénsalo.',
        answer: 'Es la A. No estaba al nacer y crece rápido: es un hemangioma infantil. Es único, pequeño y sin riesgo funcional, así que se observa con fotografías seriadas y se tranquiliza a la madre. La D tienta, pero el propranolol es para el periocular, el de vía aérea, el ulcerado o el desfigurante. Y la C, solo con cinco o más hemangiomas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 83',
      stem: 'Un recién nacido de 10 días presenta un hemangioma en el párpado derecho, de 3 cm de diámetro, que cubre parcialmente la visión.',
      question: '¿Cuál es la conducta más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Administrar propranolol' },
        { letter: 'B', text: 'Administrar betametasona' },
        { letter: 'C', text: 'Realizar embolización' },
        { letter: 'D', text: 'Derivar a cirujano plástico' },
        { letter: 'E', text: 'Observar evolución' },
      ],
      correct: 'A',
      explanation: 'El propranolol es el tratamiento de primera línea de los hemangiomas infantiles que ponen en riesgo la función, como uno periocular que cubre el eje visual (riesgo de ambliopía y astigmatismo), con evaluación previa y control de FC, PA y glicemia. La cirugía queda para los que no responden y deja cicatriz.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un recién nacido de diez días tiene un hemangioma en el párpado derecho, de tres centímetros, que cubre parcialmente la visión.',
        question: '¿Cuál es la conducta más adecuada en este momento?',
        options: 'Las opciones: propranolol; betametasona; embolización; derivar a cirujano plástico; u observar. Piénsalo.',
        answer: 'Es la A. Un hemangioma periocular que cubre el eje visual pone en riesgo la visión, por ambliopía y astigmatismo, y no se observa: la primera línea es propranolol. La E tienta porque la mayoría se observa, pero esta no. Y la cirugía queda para los que no responden.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 125',
      stem: 'Un lactante de 6 meses presenta ocho hemangiomas infantiles localizados en el tronco, principalmente en la espalda.',
      question: '¿Cuál es la conducta más adecuada para el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Solicitar ecografía abdominal' },
        { letter: 'B', text: 'Iniciar propranolol oral' },
        { letter: 'C', text: 'Iniciar corticoides intralesionales' },
        { letter: 'D', text: 'Solicitar una resonancia magnética de cerebro' },
        { letter: 'E', text: 'Solicitar estudio de neurofibromatosis' },
      ],
      correct: 'A',
      explanation: 'La presencia de múltiples hemangiomas infantiles (5 o más) obliga a descartar hemangiomas viscerales, sobre todo hepáticos, con una ecografía abdominal (y TSH si hay compromiso hepático). El propranolol es el tratamiento de los hemangiomas complicados o desfigurantes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un lactante de seis meses tiene ocho hemangiomas infantiles en el tronco, sobre todo en la espalda.',
        question: '¿Cuál es la conducta más adecuada para el manejo de este paciente?',
        options: 'Las opciones: ecografía abdominal; propranolol oral; corticoides intralesionales; resonancia de cerebro; o estudio de neurofibromatosis. Piénsalo.',
        answer: 'Es la A. Cinco o más hemangiomas cutáneos obligan a descartar hemangiomas hepáticos con una ecografía abdominal, y a medir la TSH si hay compromiso. La B tienta, pero el propranolol es para los complicados o desfigurantes, y aquí no hay ninguno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 83',
      stem: 'Una paciente de 24 años presenta una cicatriz en la zona esternal de gran tamaño, secundaria a una cirugía torácica realizada hace 6 meses, que no ha respondido a la terapia compresiva. Al examen físico se observa una cicatriz que sobrepasa los bordes de la cirugía inicial, de aspecto rojo-violáceo y dolorosa a la palpación.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cicatriz hipertrófica en fase activa' },
        { letter: 'B', text: 'Queloide' },
        { letter: 'C', text: 'Cuerpo extraño' },
        { letter: 'D', text: 'Úlcera de Marjolin' },
        { letter: 'E', text: 'Granuloma piógeno' },
      ],
      correct: 'B',
      explanation: 'Sobrepasar los bordes de la herida es lo característico del queloide; aparece meses después, en una zona de riesgo como el esternón, y puede doler en la fase activa. La cicatriz hipertrófica no sobrepasa los límites y tiende a regresar. La úlcera de Marjolin es un cáncer sobre cicatrices crónicas y el granuloma piógeno es una pápula roja friable.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una paciente de veinticuatro años tiene una cicatriz esternal grande, tras una cirugía torácica hace seis meses, que no respondió a la terapia compresiva. La cicatriz sobrepasa los bordes de la cirugía, es rojo violácea y duele a la palpación.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cicatriz hipertrófica en fase activa; queloide; cuerpo extraño; úlcera de Marjolin; o granuloma piógeno. Piénsalo.',
        answer: 'Es la B. Sobrepasar los bordes de la herida es lo característico del queloide, y el esternón es una zona de riesgo. La A tienta porque ambas pueden doler y ser rojas, pero la hipertrófica se queda dentro de los bordes y regresa. La D es un cáncer sobre una cicatriz crónica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 64',
      stem: 'Un paciente, de 17 años, consulta por aparición de un nódulo blanquecino, que apareció hace 3 semanas, en una zona donde se había puesto un arete y que ha ido aumentando de tamaño.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Dermatofibroma' },
        { letter: 'B', text: 'Quiste dermoide' },
        { letter: 'C', text: 'Neurofibroma' },
        { letter: 'D', text: 'Dermatitis de contacto' },
        { letter: 'E', text: 'Queloide' },
      ],
      correct: 'E',
      explanation: 'La perforación del lóbulo de la oreja es una causa clásica de queloide: un nódulo firme que crece de forma progresiva y sobrepasa el sitio del trauma. El dermatofibroma es pequeño, pardo, de las piernas y con signo del hoyuelo. El tratamiento inicial es la triamcinolona intralesional.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente de diecisiete años consulta por un nódulo blanquecino que apareció hace tres semanas en una zona donde se había puesto un arete, y que ha ido aumentando de tamaño.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: dermatofibroma; quiste dermoide; neurofibroma; dermatitis de contacto; o queloide. Piénsalo.',
        answer: 'Es la E. Una perforación del lóbulo es una causa clásica de queloide: un nódulo firme que crece más allá del sitio del trauma, como el de la foto del lóbulo que viste. La A tienta porque el dermatofibroma también es un nódulo firme, pero es pequeño, pardo, de las piernas, y con signo del hoyuelo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: lesiones benignas, hemangiomas y malformaciones',
      cards: [
        { title: 'Lesiones del adulto', tag: 'Reconocer', kind: 'key', items: [
          { t: 'Queloide sobrepasa los bordes', d: 'Hipertrófica no, y regresa',
            say: 'Cerremos con las reglas de oro. El queloide sobrepasa los bordes de la herida y no regresa, y se trata con triamcinolona intralesional. La cicatriz hipertrófica no los sobrepasa y tiende a regresar.' },
          { t: 'Queratosis, quiste, lipoma', d: 'Leser-Trélat; extirpar pared; lipoma > 5 cm: RM',
            say: 'La queratosis seborreica es benigna, y muchas de golpe con prurito sugieren una neoplasia. El quiste epidérmico se extirpa completo, fuera de la inflamación. Y un lipoma de más de cinco centímetros, profundo o doloroso, se estudia.' },
        ] },
        { title: 'El lactante', tag: 'Lo más preguntado', kind: 'alert', items: [
          { t: 'Hemangioma: no está al nacer, crece y se va', d: 'Propranolol si hay riesgo funcional',
            say: 'El hemangioma infantil no está al nacer, crece tres a cinco meses y luego involuciona. La mayoría se observa, y los periorbitarios, de la vía aérea, ulcerados o desfigurantes se tratan con propranolol oral.' },
          { t: '5 o más: ecografía abdominal', d: 'Segmentario facial: PHACE',
            say: 'Cinco o más hemangiomas obligan a una ecografía abdominal, y uno segmentario facial grande hace sospechar un síndrome PHACE.' },
          { t: 'Malformación: al nacer y nunca involuciona', d: 'V1 con vino de Oporto: Sturge-Weber',
            say: 'La malformación vascular está al nacer y nunca involuciona. La mancha en vino de Oporto de la frente y el párpado superior hace sospechar Sturge-Weber, con convulsiones y glaucoma. Si te llevas una sola idea de hoy: si estaba al nacer y no se va, es una malformación; si apareció después y crece rápido, es un hemangioma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión benigna o vascular de la piel: conducta',
    root: N('start', 'Lesión de la piel o mancha vascular', '¿Edad, momento de aparición y evolución?',
      'Una lesión de la piel, o una mancha vascular. Lo primero que preguntas es la edad y cuándo apareció: en el lactante, si estaba al nacer o apareció después; en el adulto, la forma y la evolución.',
      ['Lactante: apareció después, crece', N('q', 'Hemangioma infantil', '¿Riesgo funcional o múltiple?',
        'Si apareció semanas después del parto y crece rápido, es un hemangioma infantil. Te preguntas si hay riesgo funcional, ulceración, o si son varios.',
        ['Único, pequeño, sin riesgo', N('ok', 'Observar', 'Fotos seriadas, control mensual',
          'Si es único, pequeño y sin riesgo funcional, observas con fotografías seriadas y tranquilizas a la familia. No se opera.')],
        ['Periocular, vía aérea, ulcerado', N('do', 'Propranolol oral', '2-3 mg/kg/día, 6 a 12 meses; derivar',
          'Si es periorbitario, de la vía aérea, ulcerado o desfigurante, propranolol oral, de dos a tres miligramos por kilo al día por seis a doce meses, con control de frecuencia cardíaca, presión y glicemia, y derivas.')],
        ['5 o más hemangiomas', N('refer', 'Ecografía abdominal', 'Descartar compromiso hepático; TSH',
          'Con cinco o más hemangiomas, pides una ecografía abdominal para descartar compromiso hepático y mides la TSH si lo hay.')],
      )],
      ['Mancha presente al nacer', N('q', 'Malformación vascular', '¿Dónde está y desaparece?',
        'Si estaba al nacer, es una malformación vascular, que crece con el niño y no involuciona.',
        ['Rosada en nuca, frente o párpados', N('ok', 'Mancha salmón', 'Tranquilizar; sin estudio',
          'Si es rosada y mal delimitada en la nuca, la frente o los párpados, es una mancha salmón. Se tranquiliza, sin estudio ni tratamiento.')],
        ['Roja unilateral en la cara', N('refer', 'Vino de Oporto', 'Láser; V1: descartar Sturge-Weber',
          'Si es roja, bien delimitada y unilateral en la cara, es una mancha en vino de Oporto: derivas para láser. Si compromete la frente y el párpado superior, descartas Sturge-Weber con resonancia, neurología y oftalmología.')],
      )],
      ['Adulto: cicatriz o nódulo', N('q', '¿Cuál es el aspecto?', 'Cicatriz, nódulo o placa',
        'En el adulto miras si es una cicatriz, un nódulo o una placa.',
        ['Cicatriz que sobrepasa los bordes', N('do', 'Queloide', 'Triamcinolona intralesional',
          'Si la cicatriz sobrepasa los bordes de la herida y no regresa, es un queloide: triamcinolona intralesional, silicona, y cirugía solo con corticoide o radioterapia.')],
        ['Nódulo con punctum', N('do', 'Quiste epidérmico', 'Extirpar la pared completa',
          'Si es un nódulo móvil con punctum central, es un quiste epidérmico: se extirpa la pared completa, fuera de la inflamación.')],
        ['Nódulo blando, > 5 cm o profundo', N('refer', 'Sospechar liposarcoma', 'RM y biopsia',
          'Si es un nódulo blando de más de cinco centímetros, profundo, fijo, doloroso o de crecimiento rápido, sospechas liposarcoma: resonancia y biopsia.')],
      )],
    ),
  },
};
