// Clase 16.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-15, lesiones premalignas).
// El código de la clase (6.01.6.002) no devuelve preguntas reales. Se buscó por tema con --search
// "queratosis actínica|cuerno cutáneo|campo de cancerización|nevo displásico|imiquimod|papel de
// lija" y también "melanoma|nevo|Breslow|ABCDE" y las únicas coincidencias reales dependen por
// completo de una fotografía clínica para responderse (p. ej. EUNACOM Julio 2019 P84, "se muestra
// a continuación"), sin datos textuales suficientes para reconstruir la respuesta sin la imagen. Se
// usan 2 preguntas del libro ("Caso representativo", sin fecha), porque enseñan contenidos
// distintos (semiología táctil de la queratosis actínica; tratamiento del campo de cancerización).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La lesión que se palpa antes de verse, y el campo de piel que hay que tratar completo',
      say: 'Bienvenidos. Hoy vemos las lesiones cutáneas premalignas, y en especial la más frecuente de todas: la queratosis actínica. Es la antesala del carcinoma espinocelular que vimos la clase pasada, y el examen la pregunta por dos cosas muy concretas: cómo se reconoce con el tacto, y cómo se trata cuando son varias a la vez. Partamos por el tacto.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología y semiología',
      title: 'La piel que se siente como papel de lija',
      nodes: [
        { id: 'uvb', col: 0, row: 1, k: 'cause', t: 'Radiación ultravioleta acumulada', s: 'Daño solar crónico, años de exposición' },
        { id: 'tp53', col: 1, row: 1, k: 'mech', t: 'Mutación del gen supresor TP53', s: 'Queratinocitos basales se vuelven displásicos' },
        { id: 'mac', col: 2, row: 0, k: 'effect', t: 'Mácula áspera, "papel de lija"', s: 'Escama seca y adherente, poco delimitada' },
        { id: 'loc', col: 2, row: 2, k: 'effect', t: 'Cara, orejas, dorso de manos', s: 'Y cuero cabelludo calvo en hombres' },
        { id: 'cue', col: 3, row: 1, k: 'risk', t: 'Cuerno cutáneo', s: 'Protrusión hiperqueratósica: 60% esconde una QA' },
      ],
      edges: [
        { from: 'uvb', to: 'tp53' }, { from: 'tp53', to: 'mac' }, { from: 'tp53', to: 'loc' },
        { from: 'mac', to: 'cue', label: 'si se compacta' },
      ],
      steps: [
        { show: ['uvb'], note: 'No es un evento agudo: es la dosis de toda una vida',
          say: 'La queratosis actínica es la lesión premaligna más frecuente en la práctica clínica. Y a diferencia de las quemaduras puntuales que disparan el melanoma, aquí lo que importa es la radiación ultravioleta acumulada durante años de exposición solar crónica.' },
        { show: ['tp53'], note: 'Biológicamente, ya es un carcinoma espinocelular incipiente',
          say: 'Esa radiación produce mutaciones en un gen supresor de tumores clave, dentro de los queratinocitos de la capa basal, que se vuelven displásicos. Y por eso se considera, biológicamente, un carcinoma espinocelular in situ incipiente.' },
        { show: ['mac'], note: 'El aforismo que más se pregunta',
          say: 'Clínicamente es una mácula o pápula eritematosa, poco delimitada, cubierta por una escama seca y muy adherente. Pero el dato que más se pregunta es táctil: la queratosis actínica se palpa antes de verse. Si pasas la yema del dedo sobre la piel, sientes una aspereza característica, igual a papel de lija.' },
        { show: ['loc'], note: 'Siempre en la piel que más sol recibió',
          say: 'Aparece en las zonas más fotoexpuestas: la cara, sobre todo frente, mejillas y nariz, los pabellones auriculares, el dorso de las manos, los antebrazos, y el cuero cabelludo calvo en los hombres.' },
        { show: ['cue'], note: 'No es un diagnóstico, es una forma',
          say: 'Y hay una presentación particular que se pregunta aparte: el cuerno cutáneo, una protrusión cónica y compacta que parece un pequeño cuerno. No es un diagnóstico histológico, es solo una descripción de forma. En su base, lo más frecuente, en el sesenta por ciento, es una queratosis actínica. Pero en uno de cada cinco casos esconde un carcinoma espinocelular ya invasor, así que todo cuerno cutáneo se biopsia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Lesión aislada versus campo de cancerización',
      cards: [
        { title: 'Lesiones aisladas', tag: 'Crioterapia', kind: 'normal', items: [
          { t: 'Nitrógeno líquido, menos ciento noventa y seis grados', d: 'Método de elección para lesiones únicas o escasas',
            say: 'Cuando tienes una o pocas lesiones aisladas, el método de elección es físico: crioterapia con nitrógeno líquido, que congela y destruye la célula displásica en la misma consulta.' },
        ] },
        { title: 'Campo de cancerización', tag: 'Toda la piel fotoexpuesta está afectada', kind: 'alert', items: [
          { t: 'Mutaciones subclínicas alrededor', d: 'Aunque la piel se vea sana',
            say: 'Pero cuando las lesiones son múltiples, entra un concepto clave: el campo de cancerización. Toda la piel fotoexpuesta alrededor de las queratosis visibles comparte las mismas mutaciones, aunque a simple vista se vea sana, y por eso van a seguir apareciendo lesiones nuevas si solo tratas las que ya ves.' },
        ] },
        { title: 'Tratamiento de campo', tag: 'Imiquimod o 5-Fluorouracilo', kind: 'pharma', items: [
          { t: 'Imiquimod al 5%', d: 'Inmunomodulador: activa la respuesta inmune local',
            say: 'Ahí se trata el campo completo, no lesión por lesión. El Imiquimod al cinco por ciento en crema es un inmunomodulador que activa la respuesta inmune para eliminar las células displásicas subclínicas.' },
          { t: '5-Fluorouracilo al 5%', d: 'Antimetabolito: bloquea la síntesis de ADN',
            say: 'La alternativa es el fluorouracilo al cinco por ciento, un antimetabolito que bloquea la síntesis de ADN en las células de mayor recambio. En ambos casos, un eritema intenso durante el tratamiento no es un fracaso: es la señal de que está funcionando.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Nevo displásico',
      title: 'El otro marcador de riesgo: no es una queratosis, es un nevo atípico',
      cards: [
        { title: 'Qué es, y qué no es', tag: 'Marcador de riesgo, no lesión maligna', kind: 'criteria', items: [
          { t: 'Nevo con atipia clínica según ABCDE', d: 'Asimetría, bordes, color y diámetro alterados',
            say: 'Cambiemos de lesión premaligna. El nevo displásico, o atípico, es un nevo melanocítico que, al mirarlo con los mismos criterios del ABCDE que ya conoces, tiene algún grado de asimetría, bordes menos definidos, o más de un tono de color.' },
          { t: 'No es cáncer: es un marcador de riesgo', d: 'Aumenta la probabilidad de melanoma en cualquier parte de la piel',
            say: 'Y aquí está el matiz importante: el nevo displásico no es en sí mismo un cáncer. Es un marcador de riesgo, tanto de que ese nevo puntual se transforme, como de que aparezca un melanoma en cualquier otra parte de la piel de esa persona.' },
        ] },
        { title: 'Cuándo actuar', tag: 'Solo si cumple criterios de sospecha severa', kind: 'alert', items: [
          { t: 'Cambios francos o atipia marcada', d: 'Biopsia excisional completa, igual que un melanoma sospechoso',
            say: 'La conducta depende de qué tan atípico sea. Si el nevo tiene cambios francos, o una atipia marcada, se biopsia igual que cualquier lesión sospechosa de melanoma: biopsia excisional completa. Si es una atipia leve y estable, la conducta es seguimiento fotográfico seriado, no biopsiar todos los nevos atípicos de una persona con muchos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la piel áspera al tratamiento correcto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Modalidades terapéuticas en queratosis actínica',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Una o dos lesiones aisladas', 'Crioterapia con nitrógeno líquido', 'Iniciar Imiquimod para una sola lesión'],
          say: 'Repasemos con la tabla. Con una o dos lesiones aisladas, la conducta es crioterapia. El error es partir con Imiquimod, que es para tratar campo, no una lesión sola.' },
        { cells: ['Múltiples lesiones en frente y cuero cabelludo', 'Tratamiento de campo con Imiquimod o 5-Fluorouracilo', 'Congelar lesión por lesión, sin tratar el campo'],
          say: 'Con múltiples lesiones en una zona extensa, corresponde tratar el campo completo. El error es congelar solo lo visible, dejando el resto del campo sin tratar.' },
        { cells: ['Lesión con base indurada o dolor', 'Biopsia excisional para descartar carcinoma invasor', 'Tratarla como una queratosis actínica más'],
          say: 'Y si una lesión tiene base indurada, o duele, o crece rápido, no es una queratosis actínica típica: hay que biopsiarla para descartar que ya progresó a un carcinoma espinocelular invasor.' },
        { cells: ['Cuerno cutáneo en cualquier paciente', 'Biopsiar siempre la base', 'Asumir que es benigno por su forma'],
          say: 'Y el cuerno cutáneo se biopsia siempre. Asumir que es benigno solo por su forma es el error, porque en uno de cada cinco casos esconde un cáncer ya invasor.' },
        { cells: ['Nevo displásico con atipia leve y estable', 'Seguimiento fotográfico seriado', 'Biopsiar todos los nevos atípicos de una vez'],
          say: 'Y un nevo displásico con atipia leve y estable en el tiempo se sigue con fotografías seriadas, no se biopsia de entrada. El error es querer sacar todos los nevos atípicos de una persona que tiene muchos: ahí lo que corresponde es vigilar y educar en autoexamen.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años, agricultora, consulta por múltiples lesiones ásperas de 3 a 5 mm en mejillas, nariz y dorso de ambas manos, que nota "como escamas que no se despegan". Al tacto, la piel se siente rugosa, como papel de lija. Ninguna lesión tiene base indurada ni ha crecido rápido en el último tiempo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Crioterapia focal sobre cada lesión, una por una, sin más medidas' },
        { letter: 'B', text: 'Combinar crioterapia en las más gruesas con Imiquimod o 5-Fluorouracilo en el campo, más fotoprotección estricta' },
        { letter: 'C', text: 'Biopsia excisional de todas las lesiones antes de decidir tratamiento' },
        { letter: 'D', text: 'Observación clínica sin tratamiento, con control en un año' },
        { letter: 'E', text: 'Corticoide tópico de alta potencia por 4 semanas' },
      ],
      correct: 'B',
      explanation: 'Múltiples queratosis actínicas en zonas fotoexpuestas extensas corresponden a un campo de cancerización. El tratamiento combina destrucción focal de las lesiones más gruesas (crioterapia) con tratamiento médico del campo completo (Imiquimod o 5-Fluorouracilo) y fotoprotección estricta. No hay signos de alarma que justifiquen biopsiar todas las lesiones.',
      say: {
        stem: 'Vamos con un caso. Mujer de sesenta y ocho años, agricultora, con múltiples lesiones ásperas de tres a cinco milímetros en mejillas, nariz y dorso de ambas manos, que describe como escamas que no se despegan. Al tacto, la piel se siente rugosa, como papel de lija. Ninguna lesión tiene base indurada ni ha crecido rápido.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: crioterapia focal lesión por lesión, combinar crioterapia con tratamiento de campo y fotoprotección, biopsiar todas las lesiones antes de decidir, observación sin tratamiento, o corticoide tópico de alta potencia. Piénsalo.',
        answer: 'Es la B. Múltiples lesiones en una zona fotoexpuesta extensa son un campo de cancerización, no lesiones aisladas. La conducta combina crioterapia en las más gruesas con tratamiento médico de todo el campo, Imiquimod o fluorouracilo, más fotoprotección estricta. No hay ningún signo de alarma que justifique biopsiar todo, y la observación sin tratamiento deja avanzar el riesgo de carcinoma espinocelular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un hombre de 65 años presenta en la frente y dorso de manos varias máculas eritematosas milimétricas cubiertas por escamas ásperas muy adherentes, que al frotarlas suavemente con el dedo se sienten rugosas como lija. No hay induración ni signos inflamatorios profundos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Queratosis actínicas' },
        { letter: 'B', text: 'Queratosis seborreicas' },
        { letter: 'C', text: 'Psoriasis vulgar' },
        { letter: 'D', text: 'Lupus eritematoso discoide' },
        { letter: 'E', text: 'Linfoma cutáneo de células T' },
      ],
      correct: 'A',
      explanation: 'Máculas eritematosas poco delimitadas con escamas adherentes ásperas al tacto (signo de la lija) en zonas fotoexpuestas crónicas son patognomónicas de las queratosis actínicas.',
      say: {
        stem: 'Ahora una pregunta representativa del banco. Hombre de sesenta y cinco años, con varias máculas eritematosas milimétricas en la frente y el dorso de las manos, cubiertas por escamas ásperas muy adherentes, que al frotarlas con el dedo se sienten rugosas como lija. No hay induración ni signos inflamatorios profundos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: queratosis actínicas, queratosis seborreicas, psoriasis vulgar, lupus eritematoso discoide, o linfoma cutáneo de células T.',
        answer: 'Es la A. El signo de la lija, en máculas eritematosas mal delimitadas de zonas fotoexpuestas, sin induración, es la descripción textual de la queratosis actínica. La queratosis seborreica, en cambio, tiene un aspecto untuoso y "pegado", no áspero.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El tacto no falla', tag: 'Papel de lija', kind: 'key', items: [
          { t: 'Se palpa antes de verse', d: 'Mácula áspera en zona fotoexpuesta',
            say: 'Cerremos con las reglas de oro. La queratosis actínica se palpa antes de verse: si sientes aspereza en una zona con años de sol, piénsala primero.' },
        ] },
        { title: 'Aislada o campo', tag: 'Cambia el tratamiento', kind: 'alert', items: [
          { t: 'Pocas: crioterapia', d: 'Muchas en una zona: tratar el campo completo',
            say: 'Si son pocas lesiones, crioterapia. Si son muchas en una misma zona, tienes que tratar el campo de cancerización completo, no lesión por lesión.' },
        ] },
        { title: 'Cuándo desconfiar', tag: 'Induración obliga a biopsiar', kind: 'pharma', items: [
          { t: 'Base indurada o cuerno cutáneo', d: 'Descartar progresión a espinocelular',
            say: 'Y si una lesión se hace indurada, o forma un cuerno cutáneo, ya no confíes en el ojo: biopsia, porque puede haber progresado a un carcinoma espinocelular invasor.' },
        ] },
        { title: 'El nevo displásico es otra historia', tag: 'Marcador de riesgo, no urgencia', kind: 'normal', items: [
          { t: 'Atipia leve: fotografía seriada', d: 'Atipia severa: biopsia excisional',
            say: 'Y no lo confundas con el nevo displásico: ese no se palpa como lija, es un nevo pigmentado con algún rasgo del ABCDE. Con atipia leve, se sigue con fotografías; con atipia severa, se biopsia igual que un melanoma. Si te llevas una sola idea de hoy: el tacto hace el diagnóstico de la queratosis actínica, y el número de lesiones decide su tratamiento. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Queratosis actínica: del tacto al tratamiento',
    root: N(
      'start', 'Mácula áspera en zona fotoexpuesta', 'Se palpa antes de verse',
      'Frente a una mácula áspera en piel fotoexpuesta, lo primero es confirmar si es una lesión o son varias.',
      ['', N(
        'q', '¿La base está indurada, o hay varias lesiones?', 'La induración cambia todo el plan',
        'La induración y el número de lesiones son las dos preguntas que definen la conducta.',
        ['Base indurada, dolor o crecimiento rápido', N(
          'refer', 'Sospechar progresión a carcinoma espinocelular', 'Biopsia excisional o incisional',
          'Una lesión que se hace indurada o dolorosa ya no es una queratosis actínica típica: hay que biopsiarla.',
        )],
        ['Sin induración: una o pocas lesiones', N(
          'do', 'Crioterapia con nitrógeno líquido', 'Tratamiento focal de elección',
          'Sin signos de alarma y con pocas lesiones, la crioterapia focal es suficiente.',
        )],
        ['Sin induración: múltiples lesiones en la misma zona', N(
          'do', 'Tratamiento de campo: Imiquimod o 5-Fluorouracilo', 'Más fotoprotección estricta',
          'Con múltiples lesiones en un campo de cancerización, se trata toda la zona, no solo lo visible, junto con fotoprotección estricta.',
        )],
      )],
    ),
  },
};
