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
            say: 'Las dermatofitosis, o tiñas, están producidas por hongos filamentosos que se alimentan de queratina. La tiña del cuerpo es la más reconocible: una placa anular u ovalada, con un borde activo, solevantado y con pequeñas vesículas, mientras el centro va aclarando, dando la clásica lesión en anillo. Mira esta placa: un borde rojo y escamoso que avanza, con el centro más claro.',
            photo: { src: 'biblioteca/11_dermatologia/derma-16/01_tina-corporis__amir-derma_p62.jpg', label: 'Tiña corporis', at: 'Mira esta placa', credit: 'Manual AMIR Dermatología, p. 62' } },
        ] },
        { title: 'Tiña inguinal', tag: 'Respeta el escroto', kind: 'normal', items: [
          { t: 'Placa bilateral en los pliegues', d: 'A diferencia de la Candida, no compromete el escroto',
            say: 'La tiña inguinal es una placa eritematosa bilateral en los pliegues, y aquí hay un dato que se pregunta mucho: respeta el escroto. Si la lesión sí compromete el escroto, con pequeñas lesiones satélites alrededor, ya no es tiña, es un intértrigo por Candida.' },
        ] },
        { title: 'Tiña del pie', tag: '"Pie de atleta"', kind: 'normal', items: [
          { t: 'Maceración interdigital', d: 'Cuarto espacio, o un patrón descamativo en mocasín',
            say: 'Y la tiña del pie da maceración y fisuras entre los dedos, típicamente en el cuarto espacio interdigital, o un patrón más seco, descamativo, en forma de mocasín en toda la planta. En este pie ves la piel blanquecina, macerada y descamada entre los dedos.',
            photo: { src: 'biblioteca/19_dermatologia/derma-16/atlas_287_tina_pedis_interdigital_macera.jpg', label: 'Tiña pedis interdigital', at: 'En este pie', credit: 'Atlas EUNACOM 2026' } },
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
          say: 'Da una placa alopécica, con los cabellos que quedan rotos a pocos milímetros de la piel, como si estuvieran cortados con un sacapuntas, y con descamación asociada. Mira esta nuca: placas con descamación y pelos cortos y quebrados.',
            photo: { src: 'biblioteca/11_dermatologia/derma-16/04_tina-capitis__amir-derma_p63.jpg', label: 'Tiña de la cabeza', at: 'Mira esta nuca', credit: 'Manual AMIR Dermatología, p. 63' } },
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
            say: 'La pitiriasis versicolor la produce una levadura, la Malassezia, que vive normalmente en nuestra piel. Da máculas hipo o hiperpigmentadas en el tronco superior y el cuello, con una fina descamación que aparece al raspar suavemente con la uña, lo que se conoce como el signo de la uñada. Mira este hombro y tórax: manchas claras, de bordes netos, con una fina descamación.',
            photo: { src: 'biblioteca/11_dermatologia/derma-16/02_pitiriasis-versicolor__cto-derma_p21.jpg', label: 'Pitiriasis versicolor', at: 'Mira este hombro', credit: 'Manual CTO Dermatología 14.ª ed., p. 21' } },
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
          say: 'Y las lesiones que confirman el diagnóstico son el surco acariano, una línea fina y serpenteante, con una vesícula perlada en su extremo, que es donde está el ácaro. Mira esta mano: pápulas y costras de rascado en la palma y los dedos.',
            photo: { src: 'biblioteca/11_dermatologia/derma-16/03_escabiosis-surco_alt1__amir-derma_p69.jpg', label: 'Escabiosis en la mano', at: 'Mira esta mano', credit: 'Manual AMIR Dermatología, p. 69' } },
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
      type: 'points',
      kicker: 'Exámenes que el médico general emplea',
      title: 'KOH, cultivo de hongos y acarotest',
      cards: [
        { title: 'Examen directo con KOH', tag: 'Tiñas, onicomicosis, versicolor, Candida', kind: 'key', items: [
          { t: 'Raspar el borde activo, no el centro', d: 'Bisturí N° 15; en uñas, detritus subungueal proximal',
            say: 'El examen micológico directo con KOH se indica en tiñas, onicomicosis, pitiriasis versicolor y candidiasis, y en la onicomicosis siempre se confirma antes de un tratamiento oral prolongado. Limpias con alcohol, raspas el borde activo de la lesión, no el centro, y en el cuero cabelludo arrancas los pelos rotos y las escamas.' },
          { t: 'Hifas septadas; en versicolor, espaguetis con albóndigas', d: 'Candida: levaduras con pseudohifas',
            say: 'Con una a dos gotas de KOH y un poco de calor, los dermatofitos se ven como hifas hialinas septadas y ramificadas; la pitiriasis versicolor, como hifas cortas y gruesas con esporas redondas, espaguetis con albóndigas; y Candida, como levaduras con pseudohifas.' },
          { t: 'Falsos negativos con antifúngicos recientes', d: 'Tópico 2 semanas; oral 4 semanas',
            say: 'Cuidado con los falsos negativos si usó un antifúngico tópico en las últimas dos semanas o uno oral en las últimas cuatro. La lámpara de Wood da fluorescencia verde amarilla en Microsporum y color coral en el eritrasma.' },
        ] },
        { title: 'Cultivo de hongos', tag: 'Agar Sabouraud', kind: 'criteria', items: [
          { t: '25 a 30 °C por 2 a 4 semanas', d: 'Hasta 6 en uñas',
            say: 'El cultivo se siembra en agar Sabouraud con cloranfenicol y se incuba de dos a cuatro semanas, hasta seis en las uñas.' },
          { t: 'Tiña capitis, uñas, formas refractarias, brotes', d: 'Microsporum: griseofulvina; Trichophyton: terbinafina',
            say: 'Lo pides en la tiña de la cabeza, porque el género decide el fármaco, Microsporum responde mejor a griseofulvina y Trichophyton a terbinafina; en la onicomicosis antes de un tratamiento sistémico; y en formas extensas, refractarias o en brotes, para buscar la fuente zoofílica, como gatos y perros.' },
        ] },
        { title: 'Acarotest', tag: 'Examen directo de la sarna', kind: 'alert', items: [
          { t: 'Surco o vesícula perlada reciente, no excoriada', d: 'Gota de aceite mineral o KOH, raspado con sangrado mínimo',
            say: 'El acarotest se hace en un surco o una vesícula perlada reciente y no excoriada, en espacios interdigitales o muñecas. Pones una gota de aceite mineral o KOH, raspas con bisturí hasta un mínimo de sangrado y llevas al portaobjetos.' },
          { t: 'Ácaro, huevos y escíbalos', d: 'Un resultado negativo no descarta sarna',
            say: 'Al microscopio ves el ácaro adulto, de ocho patas, los huevos y los escíbalos. Pero hay pocos ácaros por paciente: un negativo no descarta sarna, y si la clínica y la epidemiología son compatibles, se trata. En la sarna costrosa, de inmunodeprimidos y ancianos, hay miles de ácaros: se aísla, se deriva y se suma ivermectina oral a la permetrina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ectoparásitos',
      title: 'Pediculosis: cabeza, cuerpo y ladilla',
      cards: [
        { title: 'Tres entidades', tag: 'Cada una con su contexto', kind: 'key', items: [
          { t: 'Capitis: escolares de 3 a 12 años', d: 'Contacto cabeza con cabeza; los piojos no saltan',
            say: 'Hay tres pediculosis. La de la cabeza afecta a escolares de tres a doce años por contacto directo cabeza con cabeza; los piojos no saltan ni vuelan. Da prurito intenso en la nuca y detrás de las orejas, excoriaciones, impétigo secundario y adenopatías occipitales.' },
          { t: 'Diagnóstico: liendres a menos de 6 mm', d: 'No se desprenden al sacudirlas; la caspa sí',
            say: 'Se diagnostica al ver el piojo vivo o liendres adheridas al pelo, a menos de seis milímetros del cuero cabelludo, que no se desprenden al sacudirlas; la caspa sí cae. La mejor técnica es el peine fino sobre cabello húmedo.' },
          { t: 'Corporis: costuras de la ropa', d: 'Hacinamiento; vector de tifus epidémico y fiebre de las trincheras',
            say: 'El piojo del cuerpo vive en las costuras de la ropa, se asocia a hacinamiento y es vector del tifus epidémico, de la fiebre de las trincheras y de la fiebre recurrente. Se trata lavando y cambiando la ropa a más de sesenta grados.' },
          { t: 'Pubis o ladilla: infección de transmisión sexual', d: 'En pestañas de un niño: descartar abuso',
            say: 'La ladilla es una infección de transmisión sexual, con prurito púbico; se estudian otras infecciones y se trata a los contactos. Si aparece en las pestañas de un niño, obliga a descartar abuso sexual.' },
        ] },
        { title: 'Tratamiento', tag: 'Nivel completo', kind: 'pharma', items: [
          { t: 'Permetrina 1% por 10 minutos, repetir a los 7 a 10 días', d: 'Cabello húmedo; elimina las ninfas nacidas',
            say: 'Primera línea en la cabeza: permetrina al uno por ciento, diez minutos sobre el cabello húmedo, repetida a los siete a diez días para eliminar las ninfas que nacen de las liendres.' },
          { t: 'Resistencia: dimeticona 4% o ivermectina', d: 'Ivermectina 200 µg/kg en 2 dosis, en refractarios',
            say: 'Si hay resistencia a piretroides, dimeticona al cuatro por ciento, y en casos refractarios ivermectina oral en dos dosis.' },
          { t: 'Peine fino y lavar a más de 60 grados', d: 'Sin cortar el pelo, sin fumigar, sin excluir de clases',
            say: 'Se retiran las liendres con peine fino, se lava la ropa de cama y los peines a más de sesenta grados, y se trata solo a los contactos infestados. No hace falta cortar el pelo, fumigar ni excluir al niño de clases. En la ladilla se usa permetrina al uno por ciento, y en las pestañas, vaselina oftálmica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dos exantemas que se confunden',
      title: 'Pitiriasis rosada y prúrigo infantil',
      cards: [
        { title: 'Pitiriasis rosada de Gilbert', tag: 'Autolimitada', kind: 'key', items: [
          { t: 'Placa heráldica o medallón', d: 'Oval de 2 a 5 cm, collarete de descamación fina',
            say: 'La pitiriasis rosada es un exantema autolimitado de adultos jóvenes, más frecuente en primavera y otoño, probablemente por reactivación de los herpesvirus seis y siete. Parte con la placa heráldica o medallón: una placa oval de dos a cinco centímetros, rosada, con un collarete de fina descamación en su borde interno. Mira esta placa en el tronco.',
            photo: { src: 'biblioteca/19_dermatologia/derma-16/10_pitiriasis-rosada-medallon__fitzpatrick_p401.jpg', label: 'Placa heráldica', at: 'Mira esta placa', credit: "Fitzpatrick's Dermatology in General Medicine, p. 401" } },
          { t: 'Árbol de Navidad en la espalda', d: 'A las 1 a 2 semanas; respeta cara, palmas y plantas',
            say: 'A la una o dos semanas aparecen placas ovaladas más pequeñas, con escama periférica, que siguen las líneas de Langer y dibujan un árbol de Navidad en la espalda. Dura seis a ocho semanas y remite sin cicatriz.' },
          { t: 'Descarta sífilis secundaria con VDRL', d: 'Palmas y plantas, adenopatías; también tiña, psoriasis en gotas',
            say: 'El diferencial importante es la sífilis secundaria, con compromiso palmoplantar y adenopatías: pides VDRL a todo paciente sexualmente activo con un exantema parecido. También piensa en tiña corporis, psoriasis en gotas y exantema por fármacos.' },
          { t: 'Explicar, emolientes y antihistamínico', d: 'Derivar si ocurre en el primer trimestre del embarazo',
            say: 'Explicas la evolución benigna, das emolientes, antihistamínicos y corticoide tópico de potencia media para el prurito. Y se deriva si ocurre en el primer trimestre del embarazo, por su asociación a aborto y parto prematuro.' },
        ] },
        { title: 'Prúrigo infantil agudo', tag: 'Picaduras de insectos', kind: 'alert', items: [
          { t: 'Niños de 2 a 7 años, pápulas con punto central', d: 'Lesiones de distintas edades; chinches en fila de tres',
            say: 'El prúrigo infantil agudo, o urticaria papular, es una hipersensibilidad a las picaduras de pulgas, chinches y mosquitos en niños de dos a siete años. Son pápulas muy pruriginosas con un punto central hemorrágico o costroso, en brotes, con lesiones de distintas edades. Las chinches dejan tres lesiones alineadas: desayuno, almuerzo y cena.' },
          { t: 'Controlar el vector', d: 'Mascotas, ropa de cama, colchones, grietas',
            say: 'Se diferencia de la sarna por la ausencia de surcos y de contactos familiares, y de la varicela por la ausencia de fiebre y mucosas. El tratamiento parte por controlar el vector: desparasitar mascotas, lavar y aspirar la ropa de cama y revisar grietas en busca de chinches.' },
          { t: 'Corticoide tópico, antihistamínico, repelente', d: 'Antibiótico si hay sobreinfección; lesión necrótica: loxoscelismo',
            say: 'Se agrega corticoide tópico de potencia baja a media por tres a cinco días, antihistamínico sedante nocturno, repelente con DEET en mayores de dos meses, y antibiótico si hay sobreinfección. Una lesión única, necrótica y muy dolorosa no es prúrigo: piensa en loxoscelismo.' },
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
        { cells: ['Escolar con prurito en la nuca y liendres adheridas a menos de 6 mm', 'Pediculosis: permetrina 1% y repetir a los 7 a 10 días', 'Fumigar, cortar el pelo o excluir de clases'],
          say: 'Un escolar con prurito en la nuca y liendres adheridas es una pediculosis: permetrina al uno por ciento y repetir a los siete a diez días. El error es fumigar, cortar el pelo o excluirlo de clases.' },
        { cells: ['Placa oval con collarete y luego árbol de Navidad en la espalda', 'Pitiriasis rosada: explicar, VDRL si hay riesgo sexual', 'Tratarla con corticoides orales o confundirla con sífilis'],
          say: 'Una placa oval con collarete y luego un árbol de Navidad en la espalda es una pitiriasis rosada: se explica su curso benigno y se pide VDRL si hay riesgo sexual. El error es no descartar sífilis secundaria.' },
        { cells: ['Escabiosis con acarotest negativo', 'Si clínica y epidemiología son compatibles, tratar', 'Descartarla porque el raspado salió negativo'],
          say: 'Una escabiosis con acarotest negativo igual se trata si la clínica y los contactos lo sugieren: hay pocos ácaros por paciente. El error es descartarla por un raspado negativo.' },
        { cells: ['Niño de 2 a 7 años con pápulas con punto central y lesiones de distintas edades', 'Prúrigo infantil: controlar el vector y corticoide tópico suave', 'Tratarlo como sarna sin ver surcos ni contactos'],
          say: 'Y un niño de dos a siete años con pápulas con punto central y lesiones de distintas edades es un prúrigo infantil: control del vector y corticoide tópico suave. El error es tratarlo como sarna sin ver surcos ni contactos.' },
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
        options: 'Las opciones: escabiosis con permetrina al cinco por ciento tópica y tratamiento a todos los contactos, dermatitis atópica, tinea pedis, erupción por contacto, o impétigo. Piénsalo.',
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
        options: 'Las opciones: ivermectina oral, permetrina tópica al uno por ciento, permetrina tópica al cinco por ciento, lindano tópico, o no tratar mientras no se vean piojos. Piénsalo.',
        answer: 'Es la B. Liendres tan cerca del cuero cabelludo significan que la infestación está activa, aunque no veas al piojo adulto. Y la trampa está en la concentración: la pediculosis se trata con permetrina al uno por ciento, no al cinco por ciento, que es la que usamos en la escabiosis.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 44",
      "stem": "Un paciente de 40 años consulta por hiperqueratosis y cambio de coloración de las uñas de los ortejos, de algunos meses de evolución. Se realiza estudio micológico, que muestra presencia de Trichophyton rubrum.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Itraconazol"
        },
        {
          "letter": "B",
          "text": "Griseofulvina"
        },
        {
          "letter": "C",
          "text": "Fluconazol"
        },
        {
          "letter": "D",
          "text": "Terbinafina"
        },
        {
          "letter": "E",
          "text": "Clotrimazol"
        }
      ],
      "correct": "D",
      "explanation": "La onicomicosis por dermatofitos, como Trichophyton rubrum, se trata de elección con terbinafina oral, por alrededor de 12 semanas en las uñas de los pies, tras confirmar con estudio micológico. El clotrimazol tópico no penetra la lámina ungueal y la griseofulvina es menos eficaz.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de cuarenta años tiene hace meses engrosamiento y cambio de color de las uñas de los pies. El estudio micológico muestra Trichophyton rubrum.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: itraconazol, griseofulvina, fluconazol, terbinafina o clotrimazol. Piénsalo.",
        "answer": "Es la D. La terbinafina oral es el tratamiento de elección de la onicomicosis por dermatofitos. El itraconazol tienta porque también funciona, pero es alternativa, con más interacciones y menor tasa de curación frente a los dermatofitos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.019 · Pediculosis",
      "stem": "Mujer de 32 años, madre de dos escolares con pediculosis, consulta por prurito del cuero cabelludo de 2 semanas. Al examen se observan piojos vivos y liendres firmemente adheridas al tallo del pelo, cerca de la raíz, en la región occipital y retroauricular. No está embarazada.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Ivermectina oral como primera línea y rapado del cabello"
        },
        {
          "letter": "B",
          "text": "Corticoide tópico y antihistamínico oral"
        },
        {
          "letter": "C",
          "text": "Champú de ketoconazol por 4 semanas"
        },
        {
          "letter": "D",
          "text": "Permetrina al 1% en loción aplicada en el cuero cabelludo, repetida a los 7 a 10 días, con retiro mecánico de liendres y tratamiento de los convivientes afectados"
        },
        {
          "letter": "E",
          "text": "Lavado diario de cabello con agua y vinagre como única medida"
        }
      ],
      "correct": "D",
      "explanation": "La pediculosis capitis se trata con pediculicida tópico, de elección permetrina al 1%, repitiendo a los 7 a 10 días porque no es completamente ovicida. Se agrega retiro de liendres con peineta fina, tratamiento simultáneo de los convivientes afectados y lavado de ropa de cama y peinetas.",
      "say": {
        "stem": "Mujer de treinta y dos años, con dos hijos escolares con piojos, que tiene picazón del cuero cabelludo hace dos semanas. Se ven piojos vivos y liendres pegadas al pelo cerca de la raíz, en la nuca y detrás de las orejas. No está embarazada.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: ivermectina oral y rapado, corticoide con antihistamínico, champú de ketoconazol, permetrina tópica repetida a la semana con retiro de liendres y tratamiento de los convivientes o solo vinagre. Piénsalo.",
        "answer": "Es la D. Permetrina tópica, repetida a los siete a diez días porque no mata todos los huevos, más peineta fina y tratar a la vez a toda la familia afectada. La ivermectina oral tienta, pero se reserva para casos resistentes o fracaso del tratamiento tópico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.4.004 · Micológico directo de piel, pelos y uñas",
      "stem": "Hombre de 35 años consulta por una placa anular de 4 cm en el tronco, pruriginosa, con borde eritematoso descamativo activo y centro más claro, de 3 semanas de evolución. No ha usado ningún tratamiento.",
      "question": "¿Cuál es el examen más adecuado para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Examen micológico directo con hidróxido de potasio y cultivo de escamas obtenidas del borde activo"
        },
        {
          "letter": "B",
          "text": "Biopsia de piel del centro de la lesión"
        },
        {
          "letter": "C",
          "text": "Prueba del parche"
        },
        {
          "letter": "D",
          "text": "Inmunoglobulina E sérica"
        },
        {
          "letter": "E",
          "text": "Cultivo bacteriano de la lesión"
        }
      ],
      "correct": "A",
      "explanation": "La sospecha es una tiña corporis. Se confirma con micológico directo: se raspan escamas del borde activo, donde están las hifas, y se observan con hidróxido de potasio, complementado con cultivo para identificar la especie. Si el paciente ya usó antifúngicos, conviene suspenderlos 1 a 2 semanas antes para evitar falsos negativos.",
      "say": {
        "stem": "Hombre de treinta y cinco años con una placa en anillo de cuatro centímetros en el tronco, con picazón, borde rojo descamativo y centro más claro, de tres semanas. No ha usado ningún tratamiento.",
        "question": "¿Cuál es el examen más adecuado para confirmar el diagnóstico?",
        "options": "Las opciones: micológico directo con hidróxido de potasio y cultivo de escamas del borde, biopsia del centro, prueba del parche, inmunoglobulina E, o cultivo bacteriano. Piénsalo.",
        "answer": "Es la A. En la tiña los hongos viven en el borde activo, así que ahí se raspa para el micológico directo y el cultivo. La biopsia del centro tienta, pero es invasiva y además el centro es justamente la zona que se va aclarando, donde hay menos hongos."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 118",
      "stem": "Lactante con eritema en la zona del pañal que no responde a óxido de zinc. Al examen se observa eritema intenso que compromete los pliegues inguinales, con pápulas y pústulas satélite en la periferia.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Clotrimazol tópico"
        },
        {
          "letter": "B",
          "text": "Mupirocina tópica"
        },
        {
          "letter": "C",
          "text": "Hidrocortisona tópica al 1%"
        },
        {
          "letter": "D",
          "text": "Óxido de zinc en mayor concentración"
        },
        {
          "letter": "E",
          "text": "Fluconazol oral"
        }
      ],
      "correct": "A",
      "explanation": "La dermatitis irritativa del pañal respeta los pliegues; cuando los compromete y aparecen lesiones satélite, se ha sobreinfectado por Candida albicans. El tratamiento es un antifúngico tópico (clotrimazol o nistatina) junto con cambios frecuentes de pañal y barrera. El fluconazol oral no es necesario en la candidiasis cutánea localizada.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un lactante tiene una dermatitis del pañal que no responde al óxido de zinc, con compromiso de pliegues y lesiones satélite.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: clotrimazol tópico, mupirocina, hidrocortisona al uno por ciento, más óxido de zinc o fluconazol oral. Piénsalo.",
        "answer": "Es la A. El compromiso de pliegues con lesiones satélite indica sobreinfección por cándida, que se trata con clotrimazol tópico. El fluconazol oral tienta porque también es antifúngico, pero es innecesario en una candidiasis cutánea localizada."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 131",
      "stem": "Una preescolar de 4 años presenta prurito en la cabeza. Al examen físico se ven abundantes liendres a menos de 3 cm del cuero cabelludo, sin visualizar piojos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Ivermectina oral"
        },
        {
          "letter": "B",
          "text": "Permetrina tópica al 1%"
        },
        {
          "letter": "C",
          "text": "Permetrina tópica al 5%"
        },
        {
          "letter": "D",
          "text": "Lindano tópico"
        },
        {
          "letter": "E",
          "text": "No tratar mientras no se visualicen piojos"
        }
      ],
      "correct": "B",
      "explanation": "Liendres a menos de 1 a 3 cm del cuero cabelludo son viables y diagnostican pediculosis activa aunque no se vean piojos. El tratamiento de primera línea es permetrina al 1% tópica, repetida a los 7 a 10 días, más remoción mecánica con peineta fina y revisión de contactos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una niña de cuatro años tiene prurito en la cabeza y abundantes liendres pegadas cerca del cuero cabelludo, sin piojos visibles.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: ivermectina oral, permetrina al uno por ciento, permetrina al cinco por ciento, lindano o no tratar. Piénsalo.",
        "answer": "Es la B. Liendres cerca del cuero cabelludo indican pediculosis activa, que se trata con permetrina al uno por ciento. La permetrina al cinco por ciento tienta, pero esa concentración es para la sarna."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.110 · Infecciones micóticas de piel y fanéreos",
      "stem": "Un niño de 6 años, que tiene un perro, presenta desde hace 3 semanas una placa en el cuero cabelludo con pelos cortados a pocos milímetros de la piel y descamación. En los últimos días la lesión se volvió inflamatoria, dolorosa, con pústulas y supuración, y tiene adenopatías occipitales.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Clotrimazol tópico"
        },
        {
          "letter": "B",
          "text": "Corticoide tópico"
        },
        {
          "letter": "C",
          "text": "Cefadroxilo oral"
        },
        {
          "letter": "D",
          "text": "Drenaje quirúrgico"
        },
        {
          "letter": "E",
          "text": "Griseofulvina oral por 6 a 8 semanas"
        }
      ],
      "correct": "E",
      "explanation": "Placa alopécica con pelos cortados y descamación es tiña capitis (Microsporum canis, frecuente por contacto con mascotas). La forma inflamatoria con pústulas y supuración es el querion de Celso, una reacción inmune y no una infección bacteriana. La tiña capitis siempre requiere antifúngico oral (griseofulvina o terbinafina por semanas), porque el tópico no penetra el folículo. El drenaje está contraindicado.",
      "say": {
        "stem": "Un niño de seis años con perro tiene una placa en el cuero cabelludo con pelos cortados, que se volvió inflamatoria, con pústulas y supuración.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: clotrimazol tópico, corticoide tópico, cefadroxilo, drenaje o griseofulvina oral por semanas. Piénsalo.",
        "answer": "Es la E. Es un querion, una tiña de la cabeza inflamatoria, y siempre requiere antifúngico oral como la griseofulvina. El cefadroxilo tienta por la supuración, pero no es una infección bacteriana y el antibiótico no la trata."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.4.003 · Cultivos de hongos",
      "stem": "Un hombre de 55 años consulta por engrosamiento, color amarillento y desprendimiento distal de las uñas de ambos ortejos mayores, de 2 años de evolución. Desea tratamiento oral.",
      "question": "¿Cuál es la conducta más adecuada antes de iniciar terbinafina oral?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar terbinafina sin estudio"
        },
        {
          "letter": "B",
          "text": "Confirmar con examen micológico directo (KOH) y cultivo de hongos de la uña"
        },
        {
          "letter": "C",
          "text": "Biopsia de la matriz ungueal en todos los casos"
        },
        {
          "letter": "D",
          "text": "Radiografía del ortejo"
        },
        {
          "letter": "E",
          "text": "Hemocultivos"
        }
      ],
      "correct": "B",
      "explanation": "Hasta la mitad de las distrofias ungueales no son micóticas (psoriasis, trauma, liquen). Antes de un tratamiento oral prolongado (terbinafina por 12 semanas en pies), con costo y riesgo hepático, se confirma la onicomicosis con examen directo con KOH y cultivo micológico, que además identifica el agente: dermatofito, levadura o moho.",
      "say": {
        "stem": "Un hombre de cincuenta y cinco años tiene hace dos años las uñas de ambos ortejos mayores engrosadas, amarillentas y desprendidas en su borde distal, y quiere tratamiento oral.",
        "question": "¿Qué conducta es la más adecuada antes de iniciar terbinafina?",
        "options": "Las opciones: iniciar sin estudio, confirmar con examen directo y cultivo de hongos, biopsia de matriz, radiografía o hemocultivos. Piénsalo.",
        "answer": "Es la B. Muchas distrofias ungueales no son hongos, así que se confirma con examen directo y cultivo antes de un tratamiento largo con riesgo hepático. Iniciar sin estudio tienta por lo típico del cuadro, pero la psoriasis puede verse igual."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 121",
      "stem": "Mujer de 18 años presenta una placa eritematosa levemente pruriginosa de 5 cm en la espalda, sin otros síntomas. Una semana después se agregan múltiples lesiones similares, de menor tamaño, en todo el tronco.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Tiña"
        },
        {
          "letter": "B",
          "text": "Lupus cutáneo subagudo"
        },
        {
          "letter": "C",
          "text": "Sífilis secundaria"
        },
        {
          "letter": "D",
          "text": "Pitiriasis versicolor"
        },
        {
          "letter": "E",
          "text": "Pitiriasis rosada"
        }
      ],
      "correct": "E",
      "explanation": "Una placa heraldo seguida en 1 a 2 semanas de placas ovaladas más pequeñas con collarete, orientadas según las líneas de tensión del tronco (en árbol de Navidad), es pitiriasis rosada de Gilbert, probablemente viral (VHH 6 y 7). Es autolimitada en 6 a 8 semanas; se trata sintomáticamente. Ante dudas o lesiones palmoplantares, solicitar VDRL.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Mujer de dieciocho años con una placa rosada de cinco centímetros en la espalda y, una semana después, muchas placas más pequeñas en el tronco.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: tiña, lupus subagudo, sífilis secundaria, pitiriasis versicolor o pitiriasis rosada. Piénsalo.",
        "answer": "Es la E. Una placa heraldo seguida de lesiones menores en el tronco es la pitiriasis rosada. La tiña tienta porque la primera placa se parece a ella, pero no produce una erupción diseminada a la semana."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.023 · Prúrigo infantil agudo, picadura de insectos",
      "stem": "Niño de 4 años con lesiones muy pruriginosas de 1 semana, tras vacaciones en el campo. Al examen hay pápulas eritematosas con vesícula central y excoriaciones agrupadas en zonas descubiertas (piernas y antebrazos), algunas en línea de 3. Nadie más en la casa tiene prurito y no hay lesiones en pliegues interdigitales ni genitales.",
      "question": "¿Cuál es el diagnóstico y manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Prúrigo agudo infantil por picadura de insectos; antihistamínico oral, corticoide tópico de baja o mediana potencia y control de insectos"
        },
        {
          "letter": "B",
          "text": "Escabiosis; permetrina a toda la familia"
        },
        {
          "letter": "C",
          "text": "Varicela; aciclovir"
        },
        {
          "letter": "D",
          "text": "Impétigo; mupirocina"
        },
        {
          "letter": "E",
          "text": "Dermatitis atópica; inmunomoduladores tópicos"
        }
      ],
      "correct": "A",
      "explanation": "Pápulas seropápulas pruriginosas agrupadas en zonas expuestas, en brotes estacionales y en grupos de 3 (desayuno, almuerzo y cena), corresponden a prúrigo por picadura de insectos (pulgas, mosquitos), una reacción de hipersensibilidad. Se maneja con antihistamínicos, corticoide tópico, repelentes y control ambiental. La sarna afecta pliegues y a los convivientes.",
      "say": {
        "stem": "Niño de cuatro años con pápulas muy pruriginosas con vesícula central en piernas y antebrazos, algunas en línea de tres, tras ir al campo. Nadie más en la casa tiene picazón y no hay lesiones entre los dedos.",
        "question": "¿Cuál es el diagnóstico y manejo?",
        "options": "Las opciones: prúrigo por picaduras con antihistamínico y corticoide tópico, escabiosis con permetrina, varicela, impétigo o dermatitis atópica. Piénsalo.",
        "answer": "Es la A. Es un prúrigo por picadura de insectos en zonas expuestas, que se maneja con antihistamínico, corticoide tópico y control de insectos. La escabiosis tienta por el prurito, pero toma pliegues y genitales y afecta a los convivientes."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.4.001 · Acarotest",
      "stem": "Hombre de 35 años con prurito intenso de predominio nocturno de 3 semanas. Su pareja tiene síntomas similares. Al examen se observan pápulas excoriadas en espacios interdigitales, muñecas, ombligo y genitales, y algunos surcos lineales finos.",
      "question": "¿Cuál es el examen que confirma el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Micológico directo con KOH"
        },
        {
          "letter": "B",
          "text": "Test de Tzanck"
        },
        {
          "letter": "C",
          "text": "Biopsia de piel con inmunofluorescencia"
        },
        {
          "letter": "D",
          "text": "IgE total"
        },
        {
          "letter": "E",
          "text": "Acarotest: raspado de un surco con observación microscópica del ácaro, huevos o deyecciones"
        }
      ],
      "correct": "E",
      "explanation": "Prurito nocturno, convivientes afectados, distribución en pliegues interdigitales, muñecas, ombligo y genitales y surcos acarinos sugieren escabiosis. El acarotest (raspado del surco y microscopía) confirma al observar Sarcoptes scabiei, huevos o fecas; tiene alta especificidad pero sensibilidad limitada, por lo que un resultado negativo no descarta y se trata ante clínica sugerente.",
      "say": {
        "stem": "Hombre de treinta y cinco años con picazón nocturna intensa, igual que su pareja, con pápulas entre los dedos, muñecas, ombligo y genitales, y surcos finos.",
        "question": "¿Cuál es el examen que confirma el diagnóstico?",
        "options": "Las opciones: micológico directo, test de Tzanck, biopsia con inmunofluorescencia, IgE total o acarotest. Piénsalo.",
        "answer": "Es la E. El acarotest, raspando un surco y viendo el ácaro o sus huevos al microscopio, confirma la escabiosis. El micológico directo tienta porque también es un raspado, pero busca hongos, no ácaros."
      }
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
