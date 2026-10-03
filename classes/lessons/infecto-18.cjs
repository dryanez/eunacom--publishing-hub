// Clase 4.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La exposición da el diagnóstico: queso de cabra, agua con orina de rata o comida contaminada',
      say: 'Bienvenidos. Seguimos con las zoonosis, ahora con tres bacterias que dan fiebre prolongada: la brucelosis, la leptospirosis y la fiebre tifoidea. Las tres se parecen al principio, porque son un síndrome febril con compromiso de varios órganos. Y el examen las separa casi siempre con un solo dato: de dónde vino la bacteria. Si en la clase anterior el perro y el cerdo daban la pista, hoy la dan el queso de cabra, el agua estancada y la comida contaminada.',
    },

    {
      type: 'flow',
      kicker: 'El nexo epidemiológico',
      title: 'Tres fiebres, tres exposiciones',
      nodes: [
        { id: 'fie', col: 0, row: 1, k: 'start', t: 'Fiebre prolongada', s: 'Compromiso multisistémico' },
        { id: 'que', col: 1, row: 0, k: 'cause', t: 'Leche o queso de cabra', s: 'Sin pasteurizar' },
        { id: 'bru', col: 2, row: 0, k: 'effect', t: 'Brucelosis', s: 'Fiebre ondulante' },
        { id: 'agu', col: 1, row: 1, k: 'cause', t: 'Agua estancada o barro', s: 'Con orina de roedores' },
        { id: 'lep', col: 2, row: 1, k: 'effect', t: 'Leptospirosis', s: 'Sufusión conjuntival' },
        { id: 'fec', col: 1, row: 2, k: 'cause', t: 'Agua o comida contaminada', s: 'Portador humano' },
        { id: 'tif', col: 2, row: 2, k: 'effect', t: 'Fiebre tifoidea', s: 'Bradicardia relativa' },
      ],
      edges: [
        { from: 'fie', to: 'que', label: '¿qué comió?' }, { from: 'que', to: 'bru' },
        { from: 'fie', to: 'agu', label: '¿dónde se mojó?' }, { from: 'agu', to: 'lep' },
        { from: 'fie', to: 'fec', label: 'fecal-oral' }, { from: 'fec', to: 'tif' },
      ],
      steps: [
        { show: ['fie'], note: 'El cuadro es inespecífico; la historia no',
          say: 'Partamos por la idea que ordena toda la clase. Frente a un paciente con fiebre de varios días o semanas, la clínica al principio es muy parecida. Lo que cambia es la exposición, y por eso la anamnesis vale más que cualquier examen.' },
        { show: ['que', 'bru'], note: 'Lácteos caprinos artesanales',
          say: 'Si el paciente toma leche cruda o come quesillo de cabra artesanal, o trabaja con ganado, piensa en brucelosis.' },
        { show: ['agu', 'lep'], note: 'Inundaciones, canales, alcantarillado',
          say: 'Si se mojó en agua estancada, barro o una inundación, donde las ratas dejaron su orina, piensa en leptospirosis.' },
        { show: ['fec', 'tif'], note: 'El reservorio es solo humano',
          say: 'Y si comió o tomó algo contaminado por un portador humano, piensa en fiebre tifoidea. Fíjate que esta última no es una zoonosis: su reservorio es exclusivamente humano. Por eso el examen la pone junto a las otras dos, para ver si sabes separarlas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Brucelosis · mecanismo y clínica',
      title: 'Una bacteria que se esconde dentro de la célula',
      nodes: [
        { id: 'fue', col: 0, row: 1, k: 'cause', t: 'Lácteos de cabra crudos', s: 'O contacto con fetos y placentas' },
        { id: 'bru', col: 1, row: 1, k: 'mech', t: 'Brucella melitensis', s: 'Cocobacilo Gram − intracelular' },
        { id: 'fie', col: 2, row: 0, k: 'effect', t: 'Fiebre ondulante', s: 'Vespertina, sudor olor a paja húmeda' },
        { id: 'hep', col: 2, row: 1, k: 'effect', t: 'Hepatoesplenomegalia', s: 'Astenia intensa, artralgias' },
        { id: 'sac', col: 2, row: 2, k: 'risk', t: 'Sacroileítis y espondilodiscitis', s: 'Complicación focal más frecuente' },
      ],
      edges: [
        { from: 'fue', to: 'bru' }, { from: 'bru', to: 'fie' }, { from: 'bru', to: 'hep' },
        { from: 'bru', to: 'sac', label: 'se localiza' },
      ],
      steps: [
        { show: ['fue'], note: 'Consumo o exposición ocupacional',
          say: 'Vamos a la brucelosis, también llamada fiebre ondulante o de Malta. Se adquiere por leche cruda o quesillos de cabra artesanales, o por contacto laboral: veterinarios y matarifes que manipulan fetos abortados y placentas de animales infectados.' },
        { show: ['bru'], note: 'Melitensis: cabras y ovejas, la más frecuente en Chile',
          say: 'El agente es la Brucella, un cocobacilo gramnegativo que vive dentro de las células. En Chile la más frecuente es Brucella melitensis, de cabras y ovejas; la abortus viene de los bovinos. Retén que es intracelular, porque eso explica el tratamiento.' },
        { show: ['fie'], note: 'Fiebre que sube en la tarde, sudor profuso',
          say: 'La clínica clásica es una fiebre ondulante, vespertina o nocturna, con sudoración profusa que tiene un olor característico a paja húmeda.' },
        { show: ['hep'], note: 'Compromiso del sistema reticuloendotelial',
          say: 'Se suma astenia intensa, artralgias y hepatoesplenomegalia, porque la bacteria se instala en el hígado, el bazo y la médula ósea.' },
        { show: ['sac'], note: 'Dolor lumbar o glúteo en un paciente febril',
          say: 'Y su complicación focal más frecuente, y la más invalidante, es osteoarticular: la sacroileítis y la espondilodiscitis lumbar. Ojo: fiebre prolongada con dolor lumbar o glúteo en alguien que come queso de cabra es brucelosis hasta demostrar lo contrario.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Brucelosis · diagnóstico y tratamiento',
      title: 'Confirmar y tratar sin recaídas',
      cards: [
        { title: 'Diagnóstico', tag: 'Serología y cultivo', kind: 'key', items: [
          { t: 'Rosa de Bengala', d: 'Tamizaje rápido; aglutinación en tubo confirma',
            say: 'El diagnóstico parte con serología. La prueba de Rosa de Bengala es el tamizaje rápido, y la aglutinación en tubo confirma por títulos.' },
          { t: 'Mielocultivo o hemocultivo', d: 'Medio bifásico prolongado (Ruiz-Castañeda)',
            say: 'El estándar de oro es el cultivo: mielocultivo de médula ósea, o hemocultivos en medios bifásicos prolongados, el de Ruiz Castañeda. Crece lento, y por eso hay que avisar al laboratorio.' },
        ] },
        { title: 'Tratamiento', tag: 'Biterapia obligatoria', kind: 'pharma', items: [
          { t: 'Doxiciclina + rifampicina', d: 'Doxi 100 mg c/12 h + rifampicina 600–900 mg/día',
            say: 'El tratamiento siempre es combinado: doxiciclina cien miligramos cada doce horas más rifampicina de seiscientos a novecientos miligramos al día, ambas por vía oral.' },
          { t: '6 semanas seguidas', d: 'Alternativa: doxiciclina + gentamicina 2 semanas iniciales',
            say: 'Y por seis semanas seguidas. La alternativa es doxiciclina con gentamicina durante las dos primeras semanas.' },
        ] },
        { title: 'La trampa', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Monoterapia o curso corto', d: 'Recae: la bacteria es intracelular',
            say: '¿Por qué tanto? Porque la bacteria se esconde dentro de las células y en el hueso. Un antibiótico solo, o un curso corto, cura la fiebre, pero la enfermedad recae. Si ves monoterapia o catorce días como alternativa, descártala.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Leptospirosis · mecanismo y clínica',
      title: 'De la orina de rata al síndrome de Weil',
      nodes: [
        { id: 'rat', col: 0, row: 1, k: 'cause', t: 'Ratas', s: 'Leptospira en los túbulos renales' },
        { id: 'agu', col: 1, row: 1, k: 'mech', t: 'Agua, barro, inundaciones', s: 'Entra por piel erosionada o mucosas' },
        { id: 'ani', col: 2, row: 0, k: 'effect', t: 'Forma anictérica 90%', s: 'Fiebre bifásica' },
        { id: 'sig', col: 3, row: 0, k: 'good', t: 'Sufusión conjuntival', s: 'Y dolor en las pantorrillas' },
        { id: 'wei', col: 2, row: 2, k: 'alert', t: 'Síndrome de Weil 10%', s: 'Forma ictérica grave' },
        { id: 'tri', col: 3, row: 2, k: 'risk', t: 'Ictericia + falla renal + hemorragia', s: 'Hemorragia pulmonar letal' },
      ],
      edges: [
        { from: 'rat', to: 'agu', label: 'orina' }, { from: 'agu', to: 'ani' }, { from: 'ani', to: 'sig' },
        { from: 'agu', to: 'wei' }, { from: 'wei', to: 'tri' },
      ],
      steps: [
        { show: ['rat'], note: 'Espiroqueta que vive en el riñón del roedor',
          say: 'Ahora la leptospirosis. La Leptospira interrogans es una espiroqueta que coloniza los túbulos renales de las ratas, y se elimina por su orina.' },
        { show: ['agu'], note: 'Saneamiento, pescadores, bañistas en lagunas',
          say: 'El humano se infecta cuando su piel erosionada o sus mucosas tocan agua estancada, barro, inundaciones o alcantarillado contaminados. Por eso los casos típicos son trabajadores de saneamiento, pescadores, o quien limpió un canal de regadío.' },
        { show: ['ani'], note: 'La gran mayoría: fiebre sin ictericia',
          say: 'En el noventa por ciento de los casos la forma es anictérica: un síndrome febril agudo, que viene en dos fases.' },
        { show: ['sig'], note: 'Los dos signos que buscas',
          say: 'Y tiene dos signos que te dan el diagnóstico. La sufusión conjuntival bilateral: ojos rojos, sin secreción. Y un dolor exquisito al comprimir las pantorrillas, los gemelos. Fíjate que la conjuntiva está roja pero no tiene pus: eso la separa de una conjuntivitis.' },
        { show: ['wei'], note: 'Uno de cada diez se agrava',
          say: 'En cerca del diez por ciento aparece la forma grave, ictérica: el síndrome de Weil.' },
        { show: ['tri'], note: 'Ictericia rubínica, falla renal hipokalémica, sangrado',
          say: 'Su tríada es ictericia rubínica, falla renal aguda con hipokalemia, y diátesis hemorrágica. La hemorragia pulmonar es la complicación que mata. Ojo con el dato del potasio: una falla renal con potasio bajo es rara, y aquí es una pista.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Leptospirosis · diagnóstico y tratamiento',
      title: 'Confirmar y tratar según la gravedad',
      cards: [
        { title: 'Diagnóstico', tag: 'Serología', kind: 'key', items: [
          { t: 'Microaglutinación (MAT)', d: 'Confirma la leptospirosis',
            say: 'El diagnóstico se confirma con la prueba de microaglutinación, conocida como MAT. Pero la sospecha es clínica: agua contaminada, ojos rojos sin pus y pantorrillas dolorosas.' },
        ] },
        { title: 'Tratamiento', tag: 'Según gravedad', kind: 'pharma', items: [
          { t: 'Forma leve: doxiciclina oral', d: 'Manejo ambulatorio',
            say: 'El tratamiento depende de la gravedad. En la forma leve, doxiciclina oral.' },
          { t: 'Weil: penicilina G sódica EV', d: 'O ceftriaxona endovenosa',
            say: 'En la forma grave, el síndrome de Weil, penicilina G sódica endovenosa, o ceftriaxona endovenosa, con el paciente hospitalizado.' },
        ] },
        { title: 'Diferencial', tag: 'Ictericia con fiebre', kind: 'alert', items: [
          { t: 'No es hepatitis ni colangitis', d: 'Ninguna da sufusión ni mialgia de pantorrillas',
            say: 'Y el diferencial que te van a poner es ictericia con fiebre: hepatitis A o colangitis. Ninguna de las dos tiene sufusión conjuntival ni dolor de pantorrillas, y ninguna explica una falla renal con hipokalemia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fiebre tifoidea · clínica',
      title: 'Una enfermedad que avanza por semanas',
      nodes: [
        { id: 'sal', col: 0, row: 1, k: 'cause', t: 'Salmonella Typhi', s: 'Portador crónico en la vesícula' },
        { id: 's1', col: 1, row: 0, k: 'effect', t: 'Semana 1', s: 'Fiebre en escalera, cefalea, constipación' },
        { id: 's2', col: 2, row: 1, k: 'mech', t: 'Semana 2', s: 'Meseta 39–40 °C + bradicardia relativa' },
        { id: 'ros', col: 2, row: 2, k: 'effect', t: 'Roséola tífica', s: 'Hepatoesplenomegalia, diarrea' },
        { id: 's3', col: 3, row: 1, k: 'alert', t: 'Semana 3', s: 'Perforación ileal, hemorragia digestiva' },
      ],
      edges: [
        { from: 'sal', to: 's1', label: 'fecal-oral' }, { from: 's1', to: 's2' }, { from: 's2', to: 'ros' },
        { from: 's2', to: 's3' },
      ],
      steps: [
        { show: ['sal'], note: 'Reservorio exclusivamente humano',
          say: 'Y la tercera, la fiebre tifoidea, por Salmonella entérica serotipo Typhi, un bacilo gramnegativo entérico. Se transmite por vía fecal oral, en agua o alimentos contaminados por un manipulador que es portador crónico. Y ese portador guarda la bacteria en la vesícula biliar.' },
        { show: ['s1'], note: 'Constipación, no diarrea, al inicio',
          say: 'La clínica se ordena por semanas. En la primera, la fiebre sube en escalera, con cefalea intensa, dolor abdominal sordo y constipación. Fíjate: al principio no hay diarrea.' },
        { show: ['s2'], note: 'Signo de Faget: disociación pulso-temperatura',
          say: 'En la segunda semana la fiebre queda en meseta, entre treinta y nueve y cuarenta grados. Y aparece el signo que más se pregunta: la bradicardia relativa, o signo de Faget. Con cuarenta grados el pulso debería estar muy alto, y sin embargo está normal o bajo. Eso es la disociación esfigmotérmica.' },
        { show: ['ros'], note: 'Manchas rosadas en el abdomen',
          say: 'En esa misma semana hay hepatoesplenomegalia, unas manchas rosadas en el abdomen, la roséola tífica, y recién ahí la diarrea, en puré de arvejas.' },
        { show: ['s3'], note: 'Placas de Peyer: perforación y sangrado',
          say: 'La tercera semana es la peligrosa. La bacteria inflama las placas de Peyer del íleon, y estas pueden perforarse, dando un abdomen agudo, o sangrar, con una hemorragia digestiva baja masiva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fiebre tifoidea · diagnóstico y tratamiento',
      title: 'El cultivo depende de la semana',
      cards: [
        { title: 'Diagnóstico', tag: 'Según la semana', kind: 'key', items: [
          { t: 'Hemocultivos: semana 1', d: 'Positivos en 80–90%',
            say: 'El examen que pides también depende de la semana. En la primera, hemocultivos, que son positivos en ochenta a noventa por ciento, porque la bacteria está en la sangre.' },
          { t: 'Coprocultivo: semanas 2–3', d: 'Cuando la bacteria llega al intestino',
            say: 'El coprocultivo se hace positivo desde la segunda o tercera semana, cuando la bacteria vuelve al intestino por la bilis.' },
          { t: 'Mielocultivo: el más sensible', d: 'Más de 95%, aun con antibióticos previos',
            say: 'Y el mielocultivo es el más sensible, sobre noventa y cinco por ciento, incluso si el paciente ya recibió antibióticos.' },
        ] },
        { title: 'Tratamiento', tag: 'Elección', kind: 'pharma', items: [
          { t: 'Ceftriaxona 2 g/día EV', d: 'Por 7 a 14 días',
            say: 'El tratamiento de elección es ceftriaxona, dos gramos al día endovenosa, por siete a catorce días.' },
          { t: 'Azitromicina 1 g/día oral', d: '7 días; ciprofloxacino solo si es sensible',
            say: 'La alternativa oral es azitromicina, un gramo al día por siete días. El ciprofloxacino se reserva para cuando se confirma la sensibilidad.' },
        ] },
        { title: 'Trampa', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Test de Widal', d: 'No confirma el diagnóstico',
            say: 'Y una trampa clásica: el test de Widal. Aparece como alternativa, pero hoy no tiene valor confirmatorio. Lo que confirma es el cultivo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres en un solo árbol, partiendo por la pregunta que las separa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Exposición, signo cardinal y tratamiento',
      head: ['Enfermedad', 'Exposición', 'Signo cardinal', 'Tratamiento'],
      rows: [
        { cells: ['Brucelosis', 'Queso o leche de cabra sin pasteurizar', 'Fiebre ondulante + sudor olor a paja + sacroileítis', 'Doxiciclina + rifampicina 6 semanas'],
          say: 'Repasemos en una tabla. Brucelosis: queso o leche de cabra sin pasteurizar, fiebre ondulante con sudor a paja húmeda y sacroileítis. Doxiciclina con rifampicina por seis semanas. La trampa es la monoterapia.' },
        { cells: ['Leptospirosis (Weil)', 'Agua estancada con orina de rata', 'Sufusión conjuntival + dolor de pantorrillas + ictericia', 'Penicilina G sódica EV o ceftriaxona'],
          say: 'Leptospirosis: agua estancada con orina de rata, sufusión conjuntival, dolor de pantorrillas y, en el Weil, ictericia con falla renal. Penicilina G sódica o ceftriaxona endovenosa en la forma grave.' },
        { cells: ['Fiebre tifoidea', 'Agua o comida contaminada', 'Bradicardia relativa (Faget) + roséola tífica', 'Ceftriaxona EV 7–14 días o azitromicina'],
          say: 'Fiebre tifoidea: agua o comida contaminada, bradicardia relativa y roséola tífica. Ceftriaxona endovenosa por siete a catorce días, o azitromicina.' },
        { cells: ['Tifoidea, primera semana', 'Hemocultivos', 'Widal', 'No esperar la diarrea'],
          say: 'Y en la tifoidea, el examen de la primera semana es el hemocultivo, no el test de Widal. Tampoco esperes la diarrea para sospecharla: al inicio hay constipación.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 42 años, criador de cabras en la precordillera de Coquimbo, con 5 semanas de fiebre vespertina hasta 38,8 °C, calofríos, astenia y sudoración nocturna profusa. Hace 10 días presenta dolor lumbar bajo que se irradia al glúteo derecho. Hepatomegalia sensible y dolor a la maniobra de Fabere derecha. Consume leche y queso de cabra artesanal.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino oral en monoterapia por 14 días' },
        { letter: 'B', text: 'Doxiciclina 100 mg c/12 h + rifampicina 600–900 mg/día por 6 semanas' },
        { letter: 'C', text: 'Ceftriaxona 2 g/día EV por 7 días' },
        { letter: 'D', text: 'Penicilina G sódica EV por 7 días' },
        { letter: 'E', text: 'Azitromicina 1 g/día oral por 7 días' },
      ],
      correct: 'B',
      explanation: 'Lácteos caprinos no pasteurizados + fiebre ondulante con sudoración + sacroileítis: brucelosis por B. melitensis. Se confirma con Rosa de Bengala y aglutinación o hemocultivo en Ruiz-Castañeda, y se trata con biterapia prolongada (doxiciclina + rifampicina 6 semanas) para evitar recaídas. La monoterapia corta recae; ceftriaxona y azitromicina son de la tifoidea; la penicilina, de la leptospirosis.',
      say: {
        stem: 'Vamos al caso. Hombre de cuarenta y dos años, criador de cabras en la precordillera de Coquimbo, con cinco semanas de fiebre en la tarde, calofríos, astenia y sudoración nocturna profusa. Hace diez días agrega dolor lumbar bajo que se irradia al glúteo derecho. Tiene hepatomegalia sensible y dolor sacroilíaco a la maniobra de Fabere. Y consume leche y queso de cabra artesanal.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: ciprofloxacino solo por catorce días, doxiciclina con rifampicina por seis semanas, ceftriaxona por siete días, penicilina endovenosa, o azitromicina. Piénsalo.',
        answer: 'Es la B. El queso de cabra artesanal, la fiebre ondulante con sudoración y la sacroileítis arman una brucelosis. Y como la Brucella vive dentro de las células, necesita dos antibióticos por seis semanas. El distractor más tentador es el ciprofloxacino: es un buen antibiótico, pero solo y por catorce días, la brucelosis recae. La ceftriaxona y la azitromicina son de la tifoidea, y la penicilina, de la leptospirosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 57',
      stem: 'Un niño de 7 años presenta fiebre persistente desde hace 7 días, mayor en la tarde, hasta 38,9 °C, asociada a cefalea, anorexia y dolor abdominal. Al examen físico tiene temperatura: 38,2 °C, frecuencia cardíaca: 62x’ y frecuencia respiratoria: 15x’. Se palpa abdomen sensible de manera difusa, sin signos peritoneales. Se solicita hemograma que muestra hematocrito: 35%, glóbulos blancos: 3.700/mm³ con 70% segmentados, 9% cayados, 16% linfocitos, 5% monocitos, 0% eosinófilos y VHS 65 mm/h. Su proteína C reactiva resulta 6,9 mg/L (valor normal: < 0,5 mg/L).',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Brucella melitensis' },
        { letter: 'B', text: 'Salmonella typhi' },
        { letter: 'C', text: 'Escherichia coli enterotoxigénica' },
        { letter: 'D', text: 'Virus de Epstein-Barr' },
        { letter: 'E', text: 'Citomegalovirus' },
      ],
      correct: 'B',
      explanation: 'Fiebre de una semana con cefalea y dolor abdominal, frecuencia cardíaca de 62 con 38,2 °C (bradicardia relativa) y un hemograma con leucopenia, desviación izquierda y sin eosinófilos: el clásico "hemograma tífico". Es fiebre tifoidea por Salmonella Typhi.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de siete años con siete días de fiebre, mayor en la tarde, con cefalea, anorexia y dolor abdominal. Tiene treinta y ocho coma dos grados y una frecuencia cardíaca de sesenta y dos. El abdomen es sensible sin signos peritoneales. El hemograma muestra tres mil setecientos leucocitos, con algo de desviación izquierda y cero eosinófilos.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Brucella melitensis, Salmonella typhi, Escherichia coli enterotoxigénica, virus de Epstein Barr, o citomegalovirus. Piénsalo.',
        answer: 'Es la B, Salmonella typhi. Fíjate en el pulso: sesenta y dos con fiebre es la bradicardia relativa que vimos, el signo de Faget. Y el hemograma, con leucopenia, desviación izquierda y sin eosinófilos, es lo que se conoce como hemograma tífico. La Brucella tienta por la fiebre de tarde, pero no hay ningún lácteo de cabra en la historia. Y la Escherichia coli enterotoxigénica da diarrea aguda del viajero, no una semana de fiebre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 6',
      stem: 'Veterinario expuesto a ganado, con dolor articular. Artrocentesis con PMN 70%.',
      question: '¿Cuál es el agente o diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Brucelosis' },
        { letter: 'B', text: 'Fiebre Q' },
        { letter: 'C', text: 'Staphylococcus aureus' },
        { letter: 'D', text: 'Streptococcus pneumoniae' },
        { letter: 'E', text: 'Escherichia coli' },
      ],
      correct: 'A',
      explanation: 'El nexo ocupacional (veterinario con ganado) más compromiso articular apunta a brucelosis, cuya complicación focal más frecuente es osteoarticular (sacroileítis, espondilodiscitis, artritis).',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticuatro, con un enunciado muy breve. Un veterinario expuesto a ganado consulta por dolor articular, y la artrocentesis muestra setenta por ciento de polimorfonucleares.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: brucelosis, fiebre Q, Staphylococcus aureus, Streptococcus pneumoniae, o Escherichia coli. Piénsalo.',
        answer: 'Es la A, brucelosis. Aquí la pregunta no te da el queso de cabra, te da la otra puerta de entrada: el contacto ocupacional de veterinarios y matarifes con el ganado. Y la complicación focal de la brucelosis es justamente osteoarticular. El Staphylococcus aureus sería la causa habitual de una artritis séptica, pero la pregunta te está mostrando el oficio a propósito: la exposición da el diagnóstico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Brucelosis', tag: 'Cabra', kind: 'key', items: [
          { t: 'Queso de cabra + fiebre ondulante', d: 'Sudor a paja húmeda, sacroileítis',
            say: 'Cerremos con las reglas de oro. Queso de cabra, fiebre ondulante, sudor a paja húmeda y sacroileítis: brucelosis.' },
          { t: 'Doxiciclina + rifampicina 6 semanas', d: 'Nunca monoterapia',
            say: 'Se trata con doxiciclina y rifampicina por seis semanas, nunca con un solo antibiótico.' },
        ] },
        { title: 'Leptospirosis', tag: 'Rata y agua', kind: 'alert', items: [
          { t: 'Sufusión conjuntival + pantorrillas', d: 'Tras agua estancada o inundación',
            say: 'Agua estancada, ojos rojos sin pus y pantorrillas dolorosas: leptospirosis.' },
          { t: 'Weil: ictericia + falla renal + sangrado', d: 'Penicilina G sódica o ceftriaxona EV',
            say: 'Si se suma ictericia, falla renal y sangrado, es un síndrome de Weil, y va penicilina G sódica o ceftriaxona endovenosa.' },
        ] },
        { title: 'Fiebre tifoidea', tag: 'Faget', kind: 'pharma', items: [
          { t: 'Fiebre alta con pulso lento', d: 'Hemocultivo en la 1ª semana',
            say: 'Fiebre alta con pulso lento es fiebre tifoidea, y en la primera semana se confirma con hemocultivos.' },
          { t: 'Ceftriaxona EV', d: 'Perforación ileal en la 3ª semana',
            say: 'Se trata con ceftriaxona, y en la tercera semana se vigila la perforación ileal. Si te llevas una sola idea de hoy: en las fiebres zoonóticas, la exposición da el diagnóstico; queso de cabra es brucelosis, agua con orina de rata es leptospirosis, y fiebre con pulso lento es tifoidea. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre prolongada: la exposición decide',
    root: N('start', 'Fiebre prolongada', 'Compromiso multisistémico',
      'Paciente con fiebre de días a semanas y compromiso de varios órganos. La primera pregunta no es un examen: es de dónde vino la bacteria.',
      ['', N('q', '¿Cuál es la exposición?', 'Cabra · agua con ratas · comida',
        'Pregunta qué comió, en qué trabaja y dónde se mojó. Esa respuesta separa las tres enfermedades.',
        ['Lácteos de cabra o ganado', N('do', 'Brucelosis', 'Rosa de Bengala + aglutinación o hemocultivo',
          'Lácteos de cabra sin pasteurizar o contacto con ganado, con fiebre ondulante y sudor a paja húmeda: brucelosis. Se confirma con Rosa de Bengala, aglutinación, o cultivo en medio de Ruiz Castañeda.',
          ['', N('ok', 'Doxiciclina + rifampicina', '6 semanas, nunca monoterapia',
            'Tratamiento: doxiciclina más rifampicina por seis semanas, para evitar recaídas.')])],
        ['Agua estancada o inundación', N('q', '¿Ictericia, falla renal o sangrado?', 'Sufusión conjuntival + pantorrillas',
          'Agua contaminada con orina de rata, sufusión conjuntival y dolor de pantorrillas: leptospirosis. Ahora define la gravedad.',
          ['NO', N('ok', 'Forma anictérica', 'Doxiciclina oral',
            'Sin ictericia ni falla renal, es la forma anictérica, la más frecuente. Doxiciclina oral.')],
          ['SÍ', N('alert', 'Síndrome de Weil', 'Penicilina G sódica o ceftriaxona EV',
            'Con ictericia, falla renal con hipokalemia o sangrado, es un síndrome de Weil. Hospitalizar y penicilina G sódica o ceftriaxona endovenosa.')])],
        ['Agua o comida contaminada', N('do', 'Fiebre tifoidea', 'Bradicardia relativa · hemocultivos',
          'Fiebre en escalera y luego en meseta con bradicardia relativa: fiebre tifoidea. En la primera semana, hemocultivos; el más sensible es el mielocultivo.',
          ['', N('ok', 'Ceftriaxona EV 7–14 días', 'O azitromicina oral',
            'Ceftriaxona endovenosa por siete a catorce días, o azitromicina oral.')],
          ['Semana 3: abdomen agudo', N('refer', 'Perforación ileal', 'Cirugía de urgencia',
            'Si en la tercera semana aparece un abdomen agudo, piensa en perforación de las placas de Peyer: es una urgencia quirúrgica.')])])]),
  },
};
