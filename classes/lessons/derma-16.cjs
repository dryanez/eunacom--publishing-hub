// Clase 16.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-16, infecciones cutáneas comunes).
// El código de la clase (6.01.1.006) no devuelve preguntas reales de ese código. Se buscó por tema
// con --search "escabiosis|sarna|Sarcoptes|tiña|pitiriasis versicolor|permetrina|pediculosis|
// dermatofitos" y se encontraron varias preguntas reales que sí son textualmente autosuficientes
// (no dependen de una imagen para responderse). Se usan 3: EUNACOM Julio 2025 P144 (escabiosis
// familiar), EUNACOM Diciembre 2017 P131 (pediculosis) y EUNACOM Julio 2017 P20 (tiña capitis,
// cuyo enunciado describe la placa alopécica con detalle suficiente sin necesitar la fotografía).
// Se descartan las preguntas encontradas de pitiriasis rosada y pitiriasis alba: son parecidos
// clínicos, pero no son pitiriasis versicolor, el tema real de esta clase (mismo problema ya
// documentado en otras clases de este libro: el código o el término de búsqueda puede traer una
// entidad distinta a la que se está enseñando).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Del anillo que crece hacia afuera al surco que no deja dormir',
      say: 'Bienvenidos. Cerramos el bloque de dermatología con las infecciones cutáneas más comunes de la atención primaria: las micosis superficiales y las ectoparasitosis. Son consultas del día a día, y el EUNACOM las pregunta con mucha frecuencia porque casi siempre alcanza con la clínica para diagnosticar y tratar. Partamos por los hongos.',
    },

    {
      type: 'points',
      kicker: 'Dermatofitosis',
      title: 'La tiña, según dónde aparece',
      cards: [
        { title: 'Tiña del cuerpo', tag: 'La lesión en anillo', kind: 'key', items: [
          { t: 'Placa anular, borde activo', d: 'Centro que aclara, borde solevantado y descamativo',
            say: 'Las dermatofitosis, o tiñas, están producidas por hongos filamentosos que se alimentan de queratina. La tiña del cuerpo es la más reconocible: una placa anular u ovalada, con un borde activo, solevantado y con pequeñas vesículas, mientras el centro va aclarando, dando la clásica lesión en anillo.' },
        ] },
        { title: 'Tiña inguinal', tag: 'Respeta el escroto', kind: 'normal', items: [
          { t: 'Placa bilateral en los pliegues', d: 'A diferencia de la Candida, no compromete el escroto',
            say: 'La tiña inguinal es una placa eritematosa bilateral en los pliegues, y aquí hay un dato que se pregunta mucho: respeta el escroto. Si la lesión sí compromete el escroto, con pequeñas lesiones satélites alrededor, ya no es tiña, es un intértrigo por Candida.' },
        ] },
        { title: 'Tiña del pie', tag: '"Pie de atleta"', kind: 'normal', items: [
          { t: 'Maceración interdigital', d: 'Cuarto espacio, o un patrón descamativo en mocasín',
            say: 'Y la tiña del pie da maceración y fisuras entre los dedos, típicamente en el cuarto espacio interdigital, o un patrón más seco, descamativo, en forma de mocasín en toda la planta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tiña de la cabeza',
      title: 'La única tiña que se trata siempre por vía oral',
      nodes: [
        { id: 'nin', col: 0, row: 1, k: 'cause', t: 'Exclusiva de niños', s: 'Microsporum o Trichophyton' },
        { id: 'pla', col: 1, row: 1, k: 'effect', t: 'Placa alopécica, pelos rotos', s: '"En sacapuntas", con escamas' },
        { id: 'top', col: 2, row: 0, k: 'trap', t: 'Antimicótico tópico solo', s: 'No penetra hasta la raíz del folículo' },
        { id: 'ora', col: 2, row: 2, k: 'good', t: 'Griseofulvina oral', s: '20 a 25 mg por kilo al día, 6 a 8 semanas' },
      ],
      edges: [
        { from: 'nin', to: 'pla' }, { from: 'pla', to: 'top', label: 'error' }, { from: 'pla', to: 'ora', label: 'siempre' },
      ],
      steps: [
        { show: ['nin'], note: 'Casi siempre en escolares',
          say: 'Aparte va la tiña de la cabeza, porque es casi exclusiva de niños, y porque cambia por completo el tratamiento.' },
        { show: ['pla'], note: 'Pelos rotos "en sacapuntas": el dato clínico clave',
          say: 'Da una placa alopécica, con los cabellos que quedan rotos a pocos milímetros de la piel, como si estuvieran cortados con un sacapuntas, y con descamación asociada.' },
        { show: ['top'], note: 'La trampa: tratarla como si fuera tiña del cuerpo',
          say: 'Y aquí está la regla de oro que más se pregunta: los antimicóticos tópicos no sirven, porque no logran penetrar hasta la raíz del folículo piloso, que es donde está el hongo.' },
        { show: ['ora'], note: 'Siempre por vía oral, sin excepción',
          say: 'El tratamiento siempre es por vía oral: griseofulvina, veinte a veinticinco miligramos por kilo al día, durante seis a ocho semanas, idealmente con una comida grasa para mejorar su absorción, o terbinafina oral como alternativa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pitiriasis versicolor',
      title: 'La levadura que despigmenta el tronco',
      cards: [
        { title: 'Clínica y diagnóstico', tag: 'Signo de la uñada', kind: 'normal', items: [
          { t: 'Máculas hipo o hiperpigmentadas', d: 'Descamación fina al raspar: signo de la uñada',
            say: 'La pitiriasis versicolor la produce una levadura, la Malassezia, que vive normalmente en nuestra piel. Da máculas hipo o hiperpigmentadas en el tronco superior y el cuello, con una fina descamación que aparece al raspar suavemente con la uña, lo que se conoce como el signo de la uñada.' },
          { t: 'KOH: hifas cortas y esporas', d: '"Albóndigas con espaguetis"',
            say: 'Y al examen directo con hidróxido de potasio se ve una imagen característica, que se describe como albóndigas con espaguetis: esporas redondas junto a hifas cortas.' },
        ] },
        { title: 'Tratamiento', tag: 'Ketoconazol tópico', kind: 'pharma', items: [
          { t: 'Champú de ketoconazol al 2%', d: 'O terbinafina tópica, por 2 semanas',
            say: 'El tratamiento es tópico: champú de ketoconazol al dos por ciento, o terbinafina tópica, por dos semanas. No confundas esta entidad con otras que también despigmentan o descaman el tronco: el dato que la identifica es siempre el signo de la uñada y el hallazgo en el examen directo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escabiosis',
      title: 'El prurito nocturno que no deja dormir a toda la casa',
      nodes: [
        { id: 'aca', col: 0, row: 1, k: 'cause', t: 'Sarcoptes scabiei hominis', s: 'Ácaro que excava la piel' },
        { id: 'pru', col: 1, row: 0, k: 'effect', t: 'Prurito nocturno intenso', s: 'Afecta a varios en la casa' },
        { id: 'sur', col: 1, row: 2, k: 'effect', t: 'Surco acariano y vesícula perlada', s: 'Lesiones patognomónicas' },
        { id: 'loc', col: 2, row: 1, k: 'risk', t: 'Interdigital, muñecas, pliegues', s: 'Areolas y genitales; respeta cara en el adulto' },
      ],
      edges: [
        { from: 'aca', to: 'pru' }, { from: 'aca', to: 'sur' }, { from: 'pru', to: 'loc' }, { from: 'sur', to: 'loc' },
      ],
      steps: [
        { show: ['aca'], note: 'El ácaro excava un túnel en la epidermis',
          say: 'Pasemos a la escabiosis, o sarna, producida por el ácaro Sarcoptes scabiei, que excava un túnel dentro de la epidermis para poner sus huevos.' },
        { show: ['pru'], note: 'El síntoma que más orienta: peor de noche, y en familia',
          say: 'El síntoma cardinal es un prurito de predominio nocturno, intenso e intratable, que además suele afectar a varios miembros de la misma familia al mismo tiempo, porque el contagio es por contacto piel con piel.' },
        { show: ['sur'], note: 'Búscalas activamente: son pequeñas',
          say: 'Y las lesiones que confirman el diagnóstico son el surco acariano, una línea fina y serpenteante, con una vesícula perlada en su extremo, que es donde está el ácaro.' },
        { show: ['loc'], note: 'Un patrón de distribución que se pregunta mucho',
          say: 'Se ubican en los espacios interdigitales de las manos, la cara anterior de las muñecas, los pliegues axilares, las areolas en la mujer, y los genitales en el hombre, donde puede dar nódulos escabióticos muy pruriginosos. En el adulto, la cara y la espalda quedan respetadas; en el lactante, en cambio, puede afectar el cuero cabelludo y las palmas y plantas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la escabiosis',
      title: 'Permetrina, y una regla que no se negocia',
      cards: [
        { title: 'Permetrina al 5%', tag: 'Tratamiento de elección', kind: 'pharma', items: [
          { t: 'Del cuello a los pies', d: 'Dejar actuar de 8 a 12 horas, repetir a los 7 días',
            say: 'El tratamiento de elección es la permetrina al cinco por ciento en crema, aplicada desde el cuello hacia abajo, cubriendo toda la superficie corporal. Se deja actuar de ocho a doce horas y se retira con el baño, y se repite la aplicación a los siete días, para eliminar los ácaros que salen de huevos que quedaron sin eclosionar.' },
        ] },
        { title: 'La regla que no se negocia', tag: 'Tratar a todos los convivientes', kind: 'alert', items: [
          { t: 'Aunque no tengan síntomas', d: 'El período de incubación asintomático dura semanas',
            say: 'Y aquí está la regla de oro de todo el tema: hay que tratar de forma simultánea a todos los convivientes y contactos cercanos, tengan o no síntomas. El período de incubación puede durar de cuatro a seis semanas sin dar ninguna molestia, y si dejas a alguien sin tratar, la familia entera se reinfecta en un ciclo de ida y vuelta.' },
          { t: 'Lavar la ropa con agua caliente', d: 'O guardarla en bolsa cerrada por 72 horas',
            say: 'Se suma lavar la ropa de vestir y de cama de los últimos días con agua caliente, sobre sesenta grados, o guardarla en una bolsa plástica cerrada por tres días, porque el ácaro no sobrevive fuera del cuerpo humano más de dos o tres días.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: del patrón de la lesión al tratamiento correcto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Infecciones cutáneas comunes: lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Placa anular en el tronco, borde activo', 'Terbinafina tópica, 2 a 3 semanas', 'Corticoide tópico por sospecha de eccema'],
          say: 'Repasemos con la tabla. Una placa anular de borde activo se trata con terbinafina tópica. El error es tratarla con corticoide pensando en un eccema: el corticoide empeora la tiña y la hace más difícil de reconocer.' },
        { cells: ['Placa alopécica con pelos rotos en un niño', 'Griseofulvina oral, 6 a 8 semanas', 'Antimicótico tópico solo'],
          say: 'La placa alopécica con pelos rotos en un niño siempre se trata por vía oral. Tratarla solo con tópico es el error que más se repite, porque el antimicótico no llega a la raíz del folículo.' },
        { cells: ['Prurito nocturno con surcos interdigitales', 'Permetrina 5% a todos los convivientes', 'Tratar solo al paciente sintomático'],
          say: 'El prurito nocturno con surcos interdigitales se trata con permetrina a todos los convivientes. Tratar solo a quien tiene síntomas es el error que perpetúa el contagio.' },
        { cells: ['Máculas descamativas hipopigmentadas en tronco', 'Ketoconazol tópico, con KOH que confirma', 'Confundir con vitíligo o pitiriasis alba'],
          say: 'Y las máculas hipopigmentadas del tronco con signo de la uñada positivo son pitiriasis versicolor, que se trata con ketoconazol tópico. El error es confundirla con vitíligo, que no descama, o con otras dermatosis que se le parecen de lejos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niña de 9 años consulta con su madre por prurito intenso de predominio nocturno, de 3 semanas de evolución, que también afecta a su hermano menor. Al examen se aprecian pápulas eritematosas con pequeños surcos lineales en los espacios interdigitales de ambas manos y en la cara anterior de las muñecas.',
      question: '¿Cuál es la conducta terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Permetrina al 5% en la niña, dejando al hermano en observación por ahora' },
        { letter: 'B', text: 'Permetrina al 5% simultánea en la niña y en todos los convivientes del hogar' },
        { letter: 'C', text: 'Corticoide tópico de alta potencia para el prurito, y control en 2 semanas' },
        { letter: 'D', text: 'Antihistamínico oral exclusivo, sin tratamiento tópico' },
        { letter: 'E', text: 'Ivermectina oral solo si el acarotest resulta positivo' },
      ],
      correct: 'B',
      explanation: 'Prurito nocturno con surcos acarianos interdigitales, que afecta a más de un miembro de la familia: escabiosis. El tratamiento de elección es permetrina al 5% aplicada de forma simultánea a todos los convivientes, tengan o no síntomas, para evitar la reinfección.',
      say: {
        stem: 'Vamos con un caso. Niña de nueve años, con prurito intenso de predominio nocturno, de tres semanas, que también afecta a su hermano menor. Al examen: pápulas con pequeños surcos lineales en los espacios interdigitales de ambas manos y en la cara anterior de las muñecas.',
        question: '¿Cuál es la conducta terapéutica más adecuada?',
        options: 'Las opciones: permetrina solo en la niña, dejando al hermano en observación; permetrina simultánea en toda la familia; corticoide tópico de alta potencia; antihistamínico oral exclusivo; o ivermectina solo si el acarotest es positivo. Piénsalo.',
        answer: 'Es la B. El prurito nocturno con surcos interdigitales que afecta a dos hermanos es escabiosis. Y la regla de oro es tratar a todos los convivientes al mismo tiempo, con o sin síntomas. Dejar al hermano en observación es la trampa: mientras uno queda sin tratar, la reinfección entre ambos sigue el ciclo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 144',
      stem: 'Niño de 8 años con lesiones eritematosas papulosas en manos, pies, axilas y zona interdigital, muy pruriginosas, que empeoran de noche. También afectados su hermano y su madre.',
      question: '¿Cuál es el diagnóstico y tratamiento?',
      options: [
        { letter: 'A', text: 'Escabiosis: permetrina 5% tópica + tratar a todos los contactos' },
        { letter: 'B', text: 'Dermatitis atópica: emolientes y corticoides tópicos' },
        { letter: 'C', text: 'Tinea pedis: clotrimazol tópico' },
        { letter: 'D', text: 'Erupción por contacto: evitar alérgeno' },
        { letter: 'E', text: 'Impétigo: mupirocina tópica' },
      ],
      correct: 'A',
      explanation: 'Prurito nocturno con lesiones papulosas en espacios interdigitales, axilas, manos y pies, que afecta a varios convivientes: escabiosis por Sarcoptes scabiei. El tratamiento es permetrina al 5% en todo el cuerpo, tratando simultáneamente a todos los contactos.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Niño de ocho años, con lesiones papulosas en manos, pies, axilas y espacios interdigitales, muy pruriginosas, que empeoran de noche. También están afectados su hermano y su madre.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: escabiosis con permetrina al cinco por ciento tópica y tratamiento a todos los contactos, dermatitis atópica, tinea pedis, erupción por contacto, o impétigo.',
        answer: 'Es la A. Prurito nocturno, distribución interdigital y axilar, y varios convivientes afectados: escabiosis. El tratamiento es permetrina al cinco por ciento en todo el cuerpo, tratando a todos los contactos al mismo tiempo, exactamente la misma regla que acabamos de repasar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 131',
      stem: 'Una prescolar de 4 años presenta prurito en la cabeza. Al examen físico se ven abundantes liendres, a menos de 3 cm del cuero cabelludo, sin visualizar piojos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Ivermectina oral' },
        { letter: 'B', text: 'Permetrina tópica al 1%' },
        { letter: 'C', text: 'Permetrina tópica al 5%' },
        { letter: 'D', text: 'Lindano tópico' },
        { letter: 'E', text: 'No tratar, mientras no se visualicen piojos' },
      ],
      correct: 'B',
      explanation: 'Liendres a menos de 3 cm del cuero cabelludo indican infestación activa por Pediculus humanus capitis, aunque no se vean piojos adultos. El tratamiento de la pediculosis es permetrina tópica al 1%, distinta a la concentración usada en la escabiosis.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de diciembre de dos mil diecisiete. Una preescolar de cuatro años tiene prurito en la cabeza. Al examen se ven abundantes liendres, a menos de tres centímetros del cuero cabelludo, sin visualizar piojos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ivermectina oral, permetrina tópica al uno por ciento, permetrina tópica al cinco por ciento, lindano tópico, o no tratar mientras no se vean piojos.',
        answer: 'Es la B. Liendres tan cerca del cuero cabelludo significan que la infestación está activa, aunque no veas al piojo adulto. Y la trampa está en la concentración: la pediculosis se trata con permetrina al uno por ciento, no al cinco por ciento, que es la que usamos en la escabiosis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La tiña de la cabeza es la excepción', tag: 'Siempre oral', kind: 'key', items: [
          { t: 'Tópico no llega a la raíz del pelo', d: 'Griseofulvina o terbinafina oral',
            say: 'Cerremos con las reglas de oro. La tiña de la cabeza siempre se trata por vía oral, porque el tópico no llega hasta la raíz del folículo.' },
        ] },
        { title: 'El surco nocturno es escabiosis', tag: 'Y se trata en familia', kind: 'alert', items: [
          { t: 'Prurito nocturno con surcos', d: 'Permetrina al 5% a todos los convivientes',
            say: 'El prurito nocturno con surcos interdigitales es escabiosis, y se trata con permetrina al cinco por ciento a todos los convivientes, tengan o no síntomas.' },
        ] },
        { title: 'No mezcles las concentraciones', tag: 'Permetrina 1% versus 5%', kind: 'pharma', items: [
          { t: 'Pediculosis: al 1%', d: 'Escabiosis: al 5%',
            say: 'Y no confundas las concentraciones: la pediculosis se trata con permetrina al uno por ciento; la escabiosis, al cinco por ciento. Si te llevas una sola idea de hoy: el patrón de la lesión y el horario del prurito te dicen qué es, y la vía de administración correcta te asegura curar de verdad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infecciones cutáneas comunes: de la lesión al tratamiento',
    root: N(
      'start', 'Lesión cutánea pruriginosa o descamativa', 'En atención primaria de salud',
      'Frente a una lesión cutánea pruriginosa o descamativa en atención primaria, primero hay que definir el patrón.',
      ['', N(
        'q', '¿Cómo es el patrón de la lesión?', 'Placa anular descamativa, o prurito nocturno con surcos',
        'El patrón clínico separa las micosis superficiales de las ectoparasitosis.',
        ['Placa anular, borde activo descamativo', N(
          'q', '¿Dónde está ubicada la placa?', 'El cuero cabelludo en niños cambia el tratamiento',
          'La localización decide si el tratamiento puede ser tópico o si obligatoriamente debe ser oral.',
          ['Cuerpo, ingle o pie', N(
            'do', 'Terbinafina tópica', '2 a 3 semanas según la zona',
            'En cuerpo, ingle o pie, el tratamiento tópico es suficiente.',
          )],
          ['Cuero cabelludo, en un niño', N(
            'refer', 'Griseofulvina oral obligatoria', '6 a 8 semanas, el tópico no sirve',
            'En el cuero cabelludo de un niño, el tratamiento siempre debe ser oral: el tópico no penetra hasta la raíz del folículo.',
          )],
        )],
        ['Prurito nocturno intenso, con surcos', N(
          'do', 'Escabiosis: permetrina al 5%', 'A todos los convivientes, con o sin síntomas',
          'El prurito nocturno con surcos acarianos es escabiosis, y el tratamiento debe incluir a todos los convivientes.',
        )],
        ['Máculas hipopigmentadas, signo de la uñada', N(
          'do', 'Pitiriasis versicolor: ketoconazol tópico', 'Confirmar con examen directo si hay duda',
          'Las máculas descamativas con signo de la uñada positivo orientan a pitiriasis versicolor.',
        )],
      )],
    ),
  },
};
