// Clase 3.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dónde se esconde el bacilo, cómo se confirma y qué fármaco causa cada efecto adverso',
      say: 'Bienvenidos. En la clase anterior la tuberculosis apareció como profilaxis en el paciente con VIH. Hoy la vemos completa desde la infectología: las formas extrapulmonares, el diagnóstico con GeneXpert y los cuatro fármacos del esquema nacional con sus toxicidades. Es un tema de alta rentabilidad, y el examen pregunta sobre todo tres cosas: el ADA en el líquido pleural, el test molecular, y qué fármaco produce cada efecto adverso. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Patogenia',
      title: 'Un bacilo que se disemina y espera',
      nodes: [
        { id: 'bac', col: 0, row: 1, k: 'cause', t: 'M. tuberculosis', s: 'BAAR aerobio estricto' },
        { id: 'pri', col: 1, row: 1, k: 'mech', t: 'Infección primaria', s: 'Pulmonar' },
        { id: 'dis', col: 2, row: 1, k: 'mech', t: 'Diseminación linfohematógena', s: 'Siembra otros órganos' },
        { id: 'lat', col: 3, row: 0, k: 'effect', t: 'Latencia por décadas', s: 'Sin síntomas' },
        { id: 'ext', col: 3, row: 2, k: 'risk', t: 'TBC extrapulmonar', s: '20–25% · más de 50% en VIH' },
      ],
      edges: [
        { from: 'bac', to: 'pri' }, { from: 'pri', to: 'dis' },
        { from: 'dis', to: 'lat' }, { from: 'dis', to: 'ext', label: 'reactivación' },
      ],
      steps: [
        { show: ['bac'], note: 'Un bacilo ácido alcohol resistente',
          say: 'Partamos por el bacilo. Mycobacterium tuberculosis es un bacilo ácido alcohol resistente, un BAAR, y es aerobio estricto. Guarda ese dato de ácido alcohol resistente, porque es la base de la baciloscopía.' },
        { show: ['pri', 'dis'], note: 'Desde el pulmón viaja a otros órganos',
          say: 'Después de la infección primaria, los bacilos pueden diseminarse por vía linfática y sanguínea, y sembrarse en otros órganos. Si la siembra es masiva, mira esta radiografía: tuberculosis miliar, con innumerables nódulos finos en ambos pulmones. Otros órganos de siembra son la pleura, los ganglios, las meninges, la columna.',
            photo: { src: 'biblioteca/07_infectologia/infecto-11/03_tbc-miliar-rx__cto-infecto_p66.jpg', label: 'Tuberculosis miliar (Rx)', at: 'mira esta radiografía', credit: 'Manual CTO Infecciosas 14.ª ed., p. 66' } },
        { show: ['lat'], note: 'Pueden quedar dormidos décadas',
          say: 'Y ahí pueden quedar latentes durante décadas, sin dar ningún síntoma.' },
        { show: ['ext'], note: 'Más frecuente cuanto peor la inmunidad',
          say: 'Cuando se reactivan fuera del pulmón, tienes una tuberculosis extrapulmonar. Es el veinte a veinticinco por ciento de los casos en inmunocompetentes, y más de la mitad en las personas con VIH. Esa es la conexión con la clase anterior: mientras más cae la inmunidad celular, más se escapa el bacilo del pulmón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas extrapulmonares',
      title: 'Pleura y ganglios',
      cards: [
        { title: 'Pleuresía tuberculosa', tag: 'ADA > 40', kind: 'key', items: [
          { t: 'Exudado unilateral linfocítico', d: 'Linfocitos más de 80%',
            say: 'Veamos las formas extrapulmonares, empezando por la pleura. La pleuresía tuberculosa es un derrame exudativo: mira esta radiografía, con el derrame unilateral que ocupa la base del hemitórax. Es un exudado, con predominio de linfocitos, típicamente más del ochenta por ciento.',
            photo: { src: 'biblioteca/07_infectologia/infecto-11/04_derrame-pleural__cto-neumo_p111.jpg', label: 'Derrame pleural unilateral', at: 'mira esta radiografía', credit: 'Manual CTO Neumología 14.ª ed., p. 111' } },
          { t: 'Adenosina deaminasa > 40 UI/L', d: 'Con clínica compatible, confirma',
            say: 'Y el examen clave es la adenosina deaminasa, el ADA. Si está sobre cuarenta unidades por litro, en un contexto clínico compatible, tiene valor diagnóstico confirmatorio. Exudado linfocítico con ADA alto es tuberculosis pleural: esa es la pregunta del tema.' },
        ] },
        { title: 'Tuberculosis ganglionar', tag: 'Escrófula', kind: 'criteria', items: [
          { t: 'Ganglios cervicales', d: 'Supraclaviculares y yugulares',
            say: 'La tuberculosis ganglionar, o escrófula, es la localización extrapulmonar más frecuente. Compromete típicamente los ganglios cervicales, supraclaviculares y yugulares.' },
          { t: 'Masas indoloras y frías', d: 'Coalescen y fistulizan a la piel',
            say: 'Mira este cuello: son masas indoloras y frías, sin los signos de inflamación de una adenitis bacteriana, que se van uniendo entre sí y pueden fistulizar a la piel, drenando material caseoso.',
            photo: { src: 'biblioteca/07_infectologia/infecto-11/02_escrofula-adenitis-tbc__amir-infecto_p112.jpg', label: 'Escrófula', at: 'Mira este cuello', credit: 'Manual AMIR Infecciosas, p. 112' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas extrapulmonares',
      title: 'Meninges y columna',
      cards: [
        { title: 'Meningitis tuberculosa', tag: 'Subaguda', kind: 'alert', items: [
          { t: 'En la base del encéfalo', d: 'Parálisis de pares III y VI',
            say: 'La forma más grave es la meningitis tuberculosa. Es subaguda, de días a semanas, no de horas como la bacteriana, y compromete la base del encéfalo. Por eso atrapa a los pares craneanos que pasan por ahí: típicamente el tercero y el sexto. Un paciente con cefalea de semanas y diplopía te tiene que hacer pensar en esto.' },
          { t: 'LCR: glucosa muy baja', d: 'Proteínas > 200–500 mg/dL · linfocitos',
            say: 'El líquido cefalorraquídeo tiene hipoglucorraquia severa, proteínas muy altas, sobre doscientos a quinientos miligramos por decilitro, y pleocitosis de linfocitos. Fíjate en la combinación: glucosa baja como en la bacteriana, pero con linfocitos como en la viral.' },
        ] },
        { title: 'Mal de Pott', tag: 'Espondilodiscitis', kind: 'criteria', items: [
          { t: 'Columna torácica o lumbar', d: 'Destruye disco y vértebras vecinas',
            say: 'Y el mal de Pott es la espondilodiscitis tuberculosa: compromete la columna torácica o lumbar, destruyendo el disco y los cuerpos vertebrales vecinos, como ves en esta resonancia.',
            photo: { src: 'biblioteca/07_infectologia/infecto-11/01_mal-de-pott__cto-infecto_p69.jpg', label: 'Mal de Pott', at: 'como ves en esta resonancia', credit: 'Manual CTO Infecciosas 14.ª ed., p. 69' } },
          { t: 'Cifosis angular', d: 'Riesgo de compresión medular',
            say: 'Si avanza, colapsa las vértebras, produce una cifosis angular y puede comprimir la médula. Un lumbago que no cede, con parámetros inflamatorios altos, en un paciente con riesgo de tuberculosis, es Pott hasta demostrar lo contrario.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Baciloscopía, cultivo y GeneXpert',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de TBC', s: 'Muestra según localización' },
        { id: 'bk', col: 1, row: 0, k: 'mech', t: 'Baciloscopía', s: 'Ziehl-Neelsen · requiere > 5.000 bacilos/mL' },
        { id: 'cul', col: 2, row: 0, k: 'good', t: 'Cultivo: gold standard', s: 'Lowenstein-Jensen o MGIT + antibiograma' },
        { id: 'gx', col: 1, row: 2, k: 'good', t: 'GeneXpert MTB/RIF', s: 'ADN + resistencia a rifampicina < 2 h' },
        { id: 'ind', col: 2, row: 2, k: 'q', t: 'Prueba inicial en', s: 'Niños · VIH · contactos de resistentes · personal de salud' },
        { id: 'rpo', col: 3, row: 2, k: 'alert', t: 'Mutación rpoB', s: 'Resistencia a rifampicina' },
      ],
      edges: [
        { from: 'sos', to: 'bk' }, { from: 'bk', to: 'cul' },
        { from: 'sos', to: 'gx' }, { from: 'gx', to: 'ind' }, { from: 'gx', to: 'rpo', label: 'detecta' },
      ],
      steps: [
        { show: ['sos', 'bk'], note: 'Rápida y barata, pero poco sensible',
          say: 'Pasemos al diagnóstico microbiológico. El método tradicional es la baciloscopía, con tinción de Ziehl Neelsen o fluorescencia con auramina, que busca los bacilos ácido alcohol resistentes: mira esta baciloscopía, con bastoncitos rojos sobre fondo azul. Es rápida y barata, pero necesita más de cinco mil bacilos por mililitro para verlos. Por eso una baciloscopía negativa no descarta la enfermedad.',
            photo: { src: 'biblioteca/07_infectologia/infecto-11/03_ziehl-neelsen__commons.jpg', label: 'Ziehl-Neelsen', at: 'mira esta baciloscopía', credit: 'Wikimedia Commons, dominio público' } },
        { show: ['cul'], note: 'El único que da el antibiograma',
          say: 'El cultivo, en medio sólido de Lowenstein Jensen o líquido MGIT, sigue siendo el estándar de oro. Y tiene una ventaja que nadie más tiene: permite hacer el antibiograma. Un cultivo positivo es tuberculosis, aunque las baciloscopías hayan salido negativas.' },
        { show: ['gx'], note: 'Detecta el bacilo y su resistencia',
          say: 'Y el GeneXpert es la técnica molecular de elección en la norma técnica chilena. Es una reacción en cadena de la polimerasa en tiempo real, automatizada, que detecta el ADN del complejo Mycobacterium tuberculosis en menos de dos horas.' },
        { show: ['rpo'], note: 'Dos respuestas en un solo examen',
          say: 'Y al mismo tiempo detecta la mutación del gen rpoB, que confiere resistencia a rifampicina. En un solo examen sabes si hay tuberculosis y si el fármaco central del esquema va a servir.' },
        { show: ['ind'], note: 'Estos grupos se preguntan',
          say: '¿En quién se indica como prueba inicial? En los niños, las personas con VIH, los contactos de casos resistentes y el personal de salud. Son justamente los grupos en que la baciloscopía rinde menos, o en que la resistencia importa más.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Esquema nacional: 2 RHZE / 4 RH',
      nodes: [
        { id: 'cas', col: 0, row: 1, k: 'start', t: 'Caso nuevo pansensible', s: 'Tratamiento directamente observado' },
        { id: 'ini', col: 1, row: 1, k: 'mech', t: 'Fase inicial: 2 meses', s: 'RHZE · 50 dosis de lunes a viernes' },
        { id: 'con', col: 2, row: 1, k: 'good', t: 'Continuación: 4 meses', s: 'RH · 80 dosis' },
        { id: 'fin', col: 3, row: 1, k: 'good', t: '6 meses en total', s: 'Curación' },
      ],
      edges: [
        { from: 'cas', to: 'ini' }, { from: 'ini', to: 'con' }, { from: 'con', to: 'fin' },
      ],
      steps: [
        { show: ['cas'], note: 'Cada dosis se observa',
          say: 'El tratamiento del caso nuevo, sensible a todos los fármacos, es un esquema diario y directamente observado: alguien del equipo de salud ve al paciente tomar cada dosis. La adherencia es lo que evita la resistencia.' },
        { show: ['ini'], note: 'Cuatro fármacos, dos meses',
          say: 'Primero, una fase inicial de dos meses con cuatro fármacos: rifampicina, isoniazida, pirazinamida y etambutol. Son cincuenta dosis, de lunes a viernes.' },
        { show: ['con'], note: 'Dos fármacos, cuatro meses',
          say: 'Después, una fase de continuación de cuatro meses con solo dos: rifampicina e isoniazida, ochenta dosis.' },
        { show: ['fin'], note: 'Se escribe 2 RHZE / 4 RH',
          say: 'En total, seis meses. Así se escribe el esquema: dos RHZE, cuatro RH. Esa nomenclatura aparece tal cual en las alternativas, así que conviene leerla de corrido.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Toxicidades',
      title: 'Cada fármaco tiene su firma',
      cards: [
        { title: 'Isoniazida y rifampicina', tag: 'H · R', kind: 'pharma', items: [
          { t: 'Isoniazida: neuropatía y hepatitis', d: 'Inhibe el ácido micólico · prevenir con B6',
            say: 'Ahora lo que más se pregunta: las toxicidades. La isoniazida, que inhibe la síntesis de ácido micólico, produce hepatotoxicidad y neuropatía periférica, porque depleta la piridoxina. Por eso se previene dando vitamina B seis, veinticinco a cincuenta miligramos al día.' },
          { t: 'Rifampicina: secreciones naranjas', d: 'Inhibe la ARN polimerasa · induce el CYP450',
            say: 'La rifampicina, que inhibe la ARN polimerasa bacteriana, tiñe de naranja la orina y las lágrimas, lo que es benigno. Además puede dar una hepatitis colestásica, y es un potente inductor del citocromo P cuatrocientos cincuenta: baja los niveles de anticonceptivos, warfarina y antirretrovirales.' },
        ] },
        { title: 'Pirazinamida y etambutol', tag: 'Z · E', kind: 'alert', items: [
          { t: 'Pirazinamida: la más hepatotóxica', d: 'Además hiperuricemia y gota',
            say: 'La pirazinamida es el fármaco más hepatotóxico del esquema, y además produce hiperuricemia, que puede gatillar una crisis de gota.' },
          { t: 'Etambutol: neuritis óptica', d: 'Pierde agudeza y discriminación rojo-verde',
            say: 'Y el etambutol produce neuritis óptica retrobulbar, dependiente de la dosis: baja la agudeza visual y se pierde la discriminación de los colores rojo y verde. Por eso se evita en niños pequeños, que no pueden colaborar con el examen oftalmológico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fracaso y resistencia',
      title: 'Fracaso, multirresistencia y TBC urinaria',
      cards: [
        { title: 'Fracaso de tratamiento', tag: 'Desde el 5.º mes', kind: 'alert', items: [
          { t: 'Baciloscopía o cultivo (+) desde el 5.º mes', d: 'Causa más frecuente: mala adherencia',
            say: 'Hablamos de fracaso cuando persiste la baciloscopía o el cultivo positivo desde el quinto mes de un esquema. La causa más frecuente es la mala adherencia.' },
          { t: 'Cultivo con sensibilidad y GeneXpert', d: 'Nunca agregar un solo fármaco',
            say: 'Se confirma la adherencia, se pide cultivo con sensibilidad y GeneXpert y se deriva. Nunca se agrega un solo fármaco a un esquema que falla.' },
          { t: 'MDR: resistencia a H y R', d: 'Centro especializado, tratamiento supervisado',
            say: 'La multirresistente, resistente a isoniacida y rifampicina, se sospecha en retratamientos, contactos de casos MDR y VIH. Se trata en centro especializado, siempre con tratamiento directamente observado.' },
        ] },
        { title: 'TBC genitourinaria', tag: 'Reactivación', kind: 'key', items: [
          { t: 'Piuria ácida con urocultivo negativo', d: 'Piuria estéril, hematuria, disuria crónica',
            say: 'La tuberculosis genitourinaria es una reactivación años después de la primoinfección. La pista es la piuria ácida con urocultivo corriente negativo, la piuria estéril, con hematuria y disuria crónicas.' },
          { t: 'Cultivo de Koch en orina de 3 días', d: 'UroTAC: estenosis y calcificaciones',
            say: 'Se confirma con cultivo de Koch en orina matinal de tres días seguidos y se estudia con UroTAC. Evoluciona a estenosis ureteral y vejiga contraída.' },
          { t: 'Varón: epidídimo · mujer: trompas', d: 'Esquema estándar de 6 meses',
            say: 'En el varón afecta epidídimo y próstata; en la mujer, las trompas, con infertilidad. Se trata con el esquema estándar de seis meses y se deriva a urología por las complicaciones.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Del pulmón a todo el cuerpo',
      images: [
        { src: 'animaciones/infecto-11/A1_diseminacion_tbc.mp4', label: 'Tuberculosis extrapulmonar', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Ganglios: la más frecuente',
          say: 'Después de la infección primaria, los bacilos se diseminan por vía linfática y sanguínea a la pleura, los ganglios, las meninges y la columna. Ahí pueden quedar latentes durante décadas. La ganglionar es la localización extrapulmonar más frecuente, y en las personas con VIH la forma extrapulmonar es más de la mitad de los casos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos el diagnóstico y el tratamiento en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué fármaco y qué hacer',
      head: ['Hallazgo', 'Responsable', 'Conducta correcta'],
      rows: [
        { cells: ['Orina o lágrimas naranjas', 'Rifampicina', 'Tranquilizar y continuar el esquema'],
          say: 'Repasemos en tabla. Orina o lágrimas naranjas: es la rifampicina, y es benigno. Se educa al paciente y se sigue el tratamiento. La trampa es suspender.' },
        { cells: ['Alteración visual rojo-verde', 'Etambutol', 'Suspender de inmediato y definitivamente'],
          say: 'Visión borrosa o dificultad con el rojo y el verde: es el etambutol, y aquí la conducta es la contraria, suspenderlo de inmediato.' },
        { cells: ['Parestesias en pies y manos', 'Isoniazida', 'Piridoxina (vitamina B6)'],
          say: 'Parestesias por neuropatía periférica: isoniazida, y se previene y trata con piridoxina.' },
        { cells: ['Crisis de gota, ácido úrico alto', 'Pirazinamida', 'Controlar ácido úrico y función hepática'],
          say: 'Crisis de gota con ácido úrico alto: pirazinamida, que además es la más hepatotóxica, así que se controlan el ácido úrico y la función hepática.' },
        { cells: ['Anticonceptivo que falla', 'Rifampicina (inductor CYP450)', 'Anticipar la interacción'],
          say: 'Y una anticonceptiva que se embaraza en tratamiento: es la inducción enzimática de la rifampicina, que baja los niveles del anticonceptivo.' },
        { cells: ['Derrame linfocítico, ADA > 40', 'Pleuritis tuberculosa', 'Tratar con el esquema estándar'],
          say: 'Y fuera de los fármacos, la más preguntada: derrame exudativo linfocítico con ADA sobre cuarenta es pleuritis tuberculosa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 48 años, en su 5.ª semana de tratamiento 2RHZE, consulta por visión borrosa bilateral y dificultad para distinguir las luces del semáforo. Agudeza visual 20/60 bilateral, test de Ishihara muy alterado para verde y rojo. Fondo de ojo normal.',
      question: '¿Cuál es la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Suspender de inmediato y en forma definitiva el etambutol' },
        { letter: 'B', text: 'Agregar piridoxina y mantener el esquema' },
        { letter: 'C', text: 'Suspender la rifampicina por su efecto sobre las secreciones' },
        { letter: 'D', text: 'Mantener el esquema y controlar en un mes' },
        { letter: 'E', text: 'Reducir la dosis de isoniazida a la mitad' },
      ],
      correct: 'A',
      explanation: 'Neuritis óptica retrobulbar por etambutol: pérdida de agudeza visual y de la discriminación rojo-verde con fondo de ojo normal. Se suspende de inmediato y en forma definitiva; si se suspende precozmente suele ser reversible, y si se continúa la ceguera puede ser permanente.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y ocho años, en su quinta semana de tratamiento con cuatro fármacos, que consulta por visión borrosa en ambos ojos y porque le cuesta distinguir las luces del semáforo. El test de Ishihara está muy alterado para el verde y el rojo, y el fondo de ojo es normal.',
        question: '¿Cuál es la conducta inmediata?',
        options: 'Las opciones son: suspender definitivamente el etambutol; agregar piridoxina; suspender la rifampicina; mantener y controlar en un mes; o reducir la isoniazida. Piénsalo.',
        answer: 'Es la A. Visión borrosa con pérdida del rojo y el verde es la neuritis óptica del etambutol. Se suspende de inmediato y para siempre: si se hace a tiempo, suele revertir en semanas a meses; si se sigue, la ceguera puede quedar permanente. La B es el distractor: la piridoxina es para la neuropatía de la isoniazida, no para el ojo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 71',
      stem: 'Un paciente de 35 años, sin antecedentes, con cuadro de una semana de compromiso del estado general y sensación febril, que durante los últimos días se agrega cefalea y diplopía. Al examen físico destaca reflejo fotomotor conservado, parálisis del sexto par derecho y rigidez de nuca esbozada. Se solicita punción lumbar que muestra células aumentadas de predominio mononuclear, glucosa disminuida y proteínas altas, gram no visualiza gérmenes.',
      question: 'El agente etiológico más probable en este caso es:',
      options: [
        { letter: 'A', text: 'Mycobacterium tuberculosis' },
        { letter: 'B', text: 'Neumococo' },
        { letter: 'C', text: 'Enterovirus' },
        { letter: 'D', text: 'Herpes virus' },
        { letter: 'E', text: 'Criptococosis' },
      ],
      correct: 'A',
      explanation: 'Cuadro subagudo con compromiso de pares craneanos (VI par) y LCR con mononucleares, glucosa baja y proteínas altas: meningitis tuberculosa.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Paciente de treinta y cinco años con una semana de compromiso del estado general y fiebre, al que se agregan cefalea y diplopía. Tiene parálisis del sexto par derecho y rigidez de nuca esbozada. El líquido muestra células mononucleares, glucosa baja y proteínas altas, sin gérmenes al Gram.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones son: Mycobacterium tuberculosis; neumococo; enterovirus; herpes virus; o criptococo. Piénsalo.',
        answer: 'Es la A. Un cuadro subagudo, que atrapa el sexto par en la base del encéfalo, con un líquido de linfocitos, glucosa baja y proteínas altas: meningitis tuberculosa. El neumococo daría un cuadro de horas, con neutrófilos. Y el criptococo es el distractor, porque también es subagudo, pero piensas en él en un VIH avanzado, y lo confirmas con tinta china, como vimos la clase pasada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 116',
      stem: 'Un paciente de 54 años, con antecedente de artritis reumatoide severa, inicia tratamiento con corticoides sistémicos y terapia biológica, por lo que se realiza estudio de tuberculosis latente con PPD, el que resulta positivo, indicándose tratamiento con isoniacida por 6 meses, permaneciendo asintomático. Un año después consulta por lumbago muy intenso, EVA 8/10, de 10 días de evolución, que ha empeorado en los últimos días y no ha respondido a analgésicos. En el examen físico el dolor limita los movimientos de flexoextensión. Se solicita hemograma que muestra hematocrito: 30% con hemoglobina: 10 g/dL, glóbulos blancos: 12.000/mm³, plaquetas: 480.000/mm³ y VHS: 80 mm/h. La radiografía de tórax es normal.',
      question: '¿Cuál es el examen más adecuado para evaluar a este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía de columna lumbar' },
        { letter: 'B', text: 'Resonancia magnética nuclear lumbar' },
        { letter: 'C', text: 'Cintigrafía ósea' },
        { letter: 'D', text: 'ELISPOT' },
        { letter: 'E', text: 'PET-scan' },
      ],
      correct: 'B',
      explanation: 'Inmunosuprimido con TBC latente conocida, lumbago intenso refractario y VHS 80: sospecha de mal de Pott (espondilodiscitis tuberculosa). Como osteomielitis, el examen de elección es la RM. El ELISPOT es un IGRA, útil en la TBC latente, no para evaluar la columna.',
      say: {
        stem: 'La segunda es la más reciente, del EUNACOM de diciembre de dos mil veinticinco. Paciente de cincuenta y cuatro años con artritis reumatoide, en corticoides y terapia biológica, que tuvo un PPD positivo y recibió isoniazida por seis meses. Un año después consulta por un lumbago muy intenso de diez días, que no responde a analgésicos. Tiene anemia, leucocitosis y una VHS de ochenta. La radiografía de tórax es normal.',
        question: '¿Cuál es el examen más adecuado para evaluarlo?',
        options: 'Las opciones son: radiografía de columna lumbar; resonancia magnética lumbar; cintigrafía ósea; ELISPOT; o PET scan. Piénsalo.',
        answer: 'Es la B, la resonancia. Inmunosuprimido, con tuberculosis latente conocida, y un lumbago que no cede con parámetros inflamatorios altos: es un mal de Pott hasta demostrar lo contrario. Es una infección del hueso y del disco, y el examen de elección es la resonancia. Fíjate que la radiografía de tórax normal no lo descarta: es una forma extrapulmonar. Y el ELISPOT es el distractor: sirve para la tuberculosis latente, no para ver la columna.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 26',
      stem: 'Un paciente de 39 años, VIH positivo, que abandonó el tratamiento antiviral hace varios meses, consulta por un cuadro de tos de 2 meses de evolución, asociado a expectoración mucopurulenta, que en ocasiones es hemoptoica, más sensación febril y baja de peso de 3 kilogramos. Al examen físico, se aprecia enflaquecido, con FC: 100x’, PA: 110/60 mmHg, FR: 22x’, saturación de oxígeno: 93%, Tº: 37,5ºC y, en el examen pulmonar, se auscultan crepitaciones y estertores bilaterales. Se solicita radiografía de tórax que se muestra zonas de relleno bilaterales y se solicitan baciloscopías de expectoración que resultan negativas, con muestra hemorrágica.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar TAC de tórax' },
        { letter: 'B', text: 'Realizar lavado bronquioalveolear' },
        { letter: 'C', text: 'Realizar broncoscopía' },
        { letter: 'D', text: 'Solicitar reacción en cadena de polimerasa para tuberculosis en expectoración' },
        { letter: 'E', text: 'Iniciar tratamiento con ceftriaxona endovenosa' },
      ],
      correct: 'D',
      explanation: 'Clínica de tuberculosis en un paciente con VIH, con baciloscopías negativas en una muestra hemorrágica. La baciloscopía es poco sensible; la PCR (GeneXpert) es más sensible y es la prueba de elección en personas con VIH.',
      say: {
        stem: 'La tercera es del EUNACOM de agosto de dos mil veintiuno. Paciente de treinta y nueve años con VIH, que abandonó la terapia, con dos meses de tos con expectoración a veces hemoptoica, fiebre y baja de peso. La radiografía muestra zonas de relleno bilaterales, y las baciloscopías salen negativas, en una muestra hemorrágica.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: TAC de tórax; lavado broncoalveolar; broncoscopía; reacción en cadena de la polimerasa para tuberculosis en expectoración; o ceftriaxona endovenosa. Piénsalo.',
        answer: 'Es la D. La clínica es de tuberculosis, y la baciloscopía negativa no la descarta: necesita miles de bacilos, y en una muestra con sangre rinde todavía menos. Además es un paciente con VIH, uno de los grupos en que el test molecular es la prueba inicial. Los procedimientos invasivos, como la broncoscopía, son los distractores: primero se agota lo simple.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 91',
      stem: 'Paciente con VIH sin TARV, fiebre, baja de peso, hemoptisis, baciloscopías negativas y cultivo MGIT positivo.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Iniciar TARV e investigar otras infecciones oportunistas' },
        { letter: 'B', text: 'Solicitar broncoscopía y biopsia transbronquial' },
        { letter: 'C', text: 'Iniciar profilaxis con isoniazida y observar' },
        { letter: 'D', text: 'Repetir baciloscopías y esperar resultado de cultivo' },
        { letter: 'E', text: 'Iniciar tratamiento estándar para tuberculosis' },
      ],
      correct: 'E',
      explanation: 'El cultivo es el gold standard: un cultivo MGIT positivo confirma tuberculosis activa aunque las baciloscopías sean negativas. Corresponde el esquema estándar, no la profilaxis.',
      say: {
        stem: 'La cuarta es del EUNACOM de enero de dos mil veintitrés. Paciente con VIH sin terapia, con fiebre, baja de peso y hemoptisis. Las baciloscopías son negativas, pero el cultivo líquido MGIT sale positivo.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones son: iniciar terapia antirretroviral y buscar otras oportunistas; broncoscopía con biopsia; profilaxis con isoniazida; repetir baciloscopías y esperar; o tratamiento estándar para tuberculosis. Piénsalo.',
        answer: 'Es la E. El cultivo es el estándar de oro: si es positivo, hay tuberculosis activa, aunque la baciloscopía haya salido negativa. Y la tuberculosis activa se trata con el esquema completo. La C es la trampa: la isoniazida sola es profilaxis para la infección latente, y usarla en una enfermedad activa es tratarla mal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 120',
      stem: 'Un paciente incia tratamiento antituberculoso con 4 fármacos, por una tuberculosis pulmonar. Al séptimo día de tratamiento presenta vómitos y dolor abdominal luego de recibir los fármacos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar omeprazol al tratamiento' },
        { letter: 'B', text: 'Retirar uno de los 4 fármacos' },
        { letter: 'C', text: 'Suspender el tratamiento y solicitar pruebas hepáticas' },
        { letter: 'D', text: 'Derivar para tratamiento secundario' },
        { letter: 'E', text: 'Mantener el tratamiento' },
      ],
      correct: 'C',
      explanation: 'Vómitos y dolor abdominal tras los fármacos obligan a sospechar hepatotoxicidad, la reacción adversa más frecuente del esquema (isoniazida, rifampicina y sobre todo pirazinamida). Se suspende y se confirma con pruebas hepáticas.',
      say: {
        stem: 'La quinta es del EUNACOM de julio de dos mil quince. Paciente que inicia tratamiento con cuatro fármacos por una tuberculosis pulmonar, y al séptimo día presenta vómitos y dolor abdominal después de tomarlos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: agregar omeprazol; retirar uno de los fármacos; suspender el tratamiento y pedir pruebas hepáticas; derivar a tratamiento secundario; o mantener el tratamiento. Piénsalo.',
        answer: 'Es la C. Tres de los cuatro fármacos son hepatotóxicos, y la pirazinamida es la peor. Vómitos y dolor abdominal al empezar el esquema son una hepatitis por fármacos hasta que se demuestre lo contrario: se suspende y se piden pruebas hepáticas. Agregar omeprazol es el distractor, porque trata el síntoma y deja seguir el daño. Y retirar un fármaco a ciegas no sirve, porque todavía no sabes cuál es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 118',
      stem: 'Un paciente es diagnosticado de tuberculosis pulmonar, por lo que se inicia tratamiento con antibióticos asociados. Sus baciloscopías mensuales de control resultan: mes 1 (+), mes 2 (-), mes 3 (-), mes 4 (-), mes 5 (+) y mes 6 (+).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Recaída' },
        { letter: 'B', text: 'Eliminación esporádica' },
        { letter: 'C', text: 'Fracaso' },
        { letter: 'D', text: 'Contaminación' },
        { letter: 'E', text: 'Nocardiosis pulmonar' },
      ],
      correct: 'C',
      explanation: 'Dos baciloscopías positivas seguidas después del cuarto mes, estando aún en tratamiento, hacen sospechar fracaso. Se confirma con cultivo y antibiograma, y el paciente se deriva a tratamiento secundario mientras tanto.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil dieciséis. Paciente en tratamiento por tuberculosis pulmonar, con baciloscopías mensuales de control: positiva el primer mes, negativas el segundo, tercero y cuarto, y de nuevo positivas el quinto y el sexto.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: recaída; eliminación esporádica; fracaso; contaminación; o nocardiosis. Piénsalo.',
        answer: 'Es la C, fracaso. Dos baciloscopías positivas seguidas después del cuarto mes, con el paciente todavía en tratamiento, hacen sospechar un fracaso, y se confirma con cultivo y antibiograma, que es lo único que muestra la resistencia. La A es el distractor: la recaída es cuando la enfermedad vuelve después de terminar el tratamiento y quedar curado, no durante el tratamiento.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.1.013 · Derrame pleural por tuberculosis",
      "stem": "Hombre de 28 años con 4 semanas de fiebre vespertina, tos seca, dolor pleurítico derecho y baja de 4 kg. Radiografía: derrame pleural derecho moderado. Toracocentesis: exudado con 85 % de linfocitos, glucosa 70 mg/dL, ADA 78 U/L y escasas células mesoteliales. Baciloscopía del líquido negativa.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Antibióticos para neumonía y control en 2 semanas"
        },
        {
          "letter": "B",
          "text": "Esperar el cultivo de Koch del líquido, de 6 a 8 semanas"
        },
        {
          "letter": "C",
          "text": "Pleurodesis con talco"
        },
        {
          "letter": "D",
          "text": "Iniciar tratamiento antituberculoso"
        },
        {
          "letter": "E",
          "text": "Toracoscopía con biopsia pleural antes de tratar"
        }
      ],
      "correct": "D",
      "explanation": "Exudado linfocitario con ADA alto (sobre 60 U/L) en un adulto joven es diagnóstico de pleuresía tuberculosa y basta para iniciar tratamiento. La baciloscopía y el cultivo del líquido suelen ser negativos porque es una forma paucibacilar. La biopsia pleural se reserva para ADA dudoso o sospecha de cáncer.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de veintiocho años con un mes de fiebre en las tardes, tos seca, dolor pleurítico y baja de peso. Tiene un derrame pleural derecho, y el líquido es un exudado con predominio de linfocitos y ADA de setenta y ocho. La baciloscopía del líquido es negativa.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: antibióticos para neumonía, esperar el cultivo, pleurodesis, iniciar tratamiento antituberculoso o toracoscopía con biopsia. Piénsalo.",
        "answer": "Es la D. Un exudado linfocitario con ADA alto en un joven es una pleuresía tuberculosa y se trata sin esperar más. Esperar el cultivo es la trampa: el derrame tuberculoso tiene pocos bacilos, así que el cultivo demora semanas y muchas veces sale negativo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.1.037 · Tuberculosis pulmonar (fracaso de tratamiento)",
      "stem": "Mujer de 40 años en tratamiento antituberculoso supervisado, con buena adherencia documentada. Sus baciloscopías de control fueron negativas en el 2.º y 3.º mes, pero vuelven a ser positivas en el 4.º y 5.º mes.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar cultivo con estudio de susceptibilidad y prueba molecular de resistencia, y derivar al especialista del programa"
        },
        {
          "letter": "B",
          "text": "Prolongar el mismo esquema por 3 meses más"
        },
        {
          "letter": "C",
          "text": "Agregar levofloxacino al esquema actual"
        },
        {
          "letter": "D",
          "text": "Suspender el tratamiento y repetir las baciloscopías en un mes"
        },
        {
          "letter": "E",
          "text": "Cambiar a isoniazida en monoterapia"
        }
      ],
      "correct": "A",
      "explanation": "Baciloscopías que se repositivizan después de negativizarse, desde el 4.º mes, definen fracaso de tratamiento y hacen sospechar resistencia. Se solicita cultivo con test de susceptibilidad y prueba molecular, y el caso lo maneja el especialista del Programa de Tuberculosis. Nunca se agrega un solo fármaco a un esquema que falla: genera más resistencia.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de cuarenta años en tratamiento antituberculoso supervisado, que lo toma bien. Sus baciloscopías se negativizaron al segundo y tercer mes, pero vuelven a salir positivas al cuarto y quinto mes.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: pedir cultivo con susceptibilidad y derivar al especialista, prolongar el mismo esquema, agregar levofloxacino, suspender y repetir baciloscopías o isoniazida sola. Piénsalo.",
        "answer": "Es la A. Volver a positivizar desde el cuarto mes es un fracaso de tratamiento, y lo primero es estudiar la resistencia y derivar al programa. Agregar levofloxacino es la trampa: sumar un solo fármaco a un esquema que está fallando es la forma más rápida de crear más resistencia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.1.016 · Infección urinaria específica",
      "stem": "Hombre de 45 años, con antecedente de tuberculosis pulmonar tratada hace 10 años, consulta por disuria, polaquiuria y hematuria intermitente de 4 meses. Ha recibido 2 cursos de antibióticos sin mejoría. El sedimento urinario muestra leucocituria abundante con orina ácida, y los urocultivos convencionales han sido repetidamente negativos.",
      "question": "¿Cuál es el estudio más adecuado para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Urocultivo con antibiograma nuevamente"
        },
        {
          "letter": "B",
          "text": "Citología urinaria"
        },
        {
          "letter": "C",
          "text": "Cultivo de orina para Mycobacterium tuberculosis (Koch) en muestras seriadas de primera orina de la mañana"
        },
        {
          "letter": "D",
          "text": "PCR para Chlamydia trachomatis en orina"
        },
        {
          "letter": "E",
          "text": "Ecografía testicular"
        }
      ],
      "correct": "C",
      "explanation": "La piuria estéril (leucocituria con urocultivo convencional negativo) con orina ácida, hematuria y síntomas irritativos persistentes sugiere tuberculosis urogenital, más aún con antecedente de TBC. Se confirma con baciloscopía y cultivo de Koch en al menos 3 a 6 muestras seriadas de la primera orina matinal (o PCR para M. tuberculosis), y se estudia con uroTAC.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con tuberculosis pulmonar tratada en el pasado, que lleva cuatro meses con disuria, hematuria y leucocitos en la orina, pero con urocultivos siempre negativos pese a antibióticos.",
        "question": "¿Cuál es el estudio que confirma el diagnóstico?",
        "options": "Las opciones: repetir urocultivo, citología urinaria, cultivo de Koch en orinas seriadas, PCR para clamidia o ecografía testicular. Piénsalo.",
        "answer": "Es la C. La piuria estéril en alguien con tuberculosis previa obliga a buscar tuberculosis urinaria con cultivo de Koch en varias muestras de orina matinal. La citología tienta por la hematuria, pero no explica la leucocituria con cultivos negativos."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Extrapulmonar', tag: 'Dónde se esconde', kind: 'key', items: [
          { t: 'Derrame linfocítico + ADA > 40', d: 'Pleuritis tuberculosa',
            say: 'Cerremos con las reglas de oro. Derrame exudativo linfocítico con ADA sobre cuarenta es pleuritis tuberculosa.' },
          { t: 'Meningitis subaguda + pares III y VI', d: 'LCR: glucosa baja, proteínas muy altas, linfocitos',
            say: 'Una meningitis subaguda que atrapa pares craneanos, con glucosa baja y linfocitos, es tuberculosa. Y un lumbago refractario con inflamación alta es un Pott.' },
        ] },
        { title: 'Diagnóstico', tag: 'GeneXpert', kind: 'criteria', items: [
          { t: 'Cultivo: gold standard', d: 'GeneXpert: bacilo + resistencia a rifampicina',
            say: 'El cultivo es el estándar de oro y da el antibiograma; el GeneXpert detecta el bacilo y la resistencia a rifampicina en menos de dos horas, y es la prueba inicial en niños, VIH, contactos de resistentes y personal de salud.' },
        ] },
        { title: 'Tratamiento', tag: '2 RHZE / 4 RH', kind: 'pharma', items: [
          { t: 'Seis meses, directamente observado', d: 'Etambutol: ojo · isoniazida: nervio · rifampicina: naranja',
            say: 'Y el esquema es dos RHZE, cuatro RH, directamente observado. Si te llevas una sola idea de hoy: cada fármaco tiene su firma, y la conducta cambia según cuál es. La orina naranja se explica, y la alteración de los colores obliga a suspender el etambutol. En la próxima clase empezamos las infecciones de transmisión sexual con la sífilis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tuberculosis: confirmar y tratar',
    root: N('start', 'Sospecha de tuberculosis', 'Pulmonar o extrapulmonar',
      'Paciente con sospecha de tuberculosis, pulmonar o extrapulmonar. Lo primero es tomar la muestra que corresponde a la localización, y elegir el examen según quién es el paciente.',
      ['', N('q', '¿Grupo prioritario?', 'Niño · VIH · contacto de resistente · personal de salud',
        '¿Es un niño, una persona con VIH, un contacto de un caso resistente, o personal de salud?',
        ['SÍ', N('do', 'GeneXpert como prueba inicial', 'ADN + rpoB en menos de 2 horas',
          'Si lo es, la prueba inicial es el GeneXpert, que detecta el bacilo y la resistencia a rifampicina en menos de dos horas.',
          ['Sensible', N('ok', 'Esquema 2 RHZE / 4 RH', 'Directamente observado',
            'Si no hay resistencia, esquema estándar: dos meses de cuatro fármacos y cuatro meses de rifampicina con isoniazida, directamente observado.')],
          ['Resistente', N('refer', 'Resistencia a rifampicina', 'No sirve el esquema estándar',
            'Si detecta la mutación rpoB, hay resistencia a rifampicina, y el esquema estándar no sirve. El cultivo con antibiograma define el tratamiento.')])],
        ['NO', N('do', 'Baciloscopía + cultivo', 'Cultivo: gold standard',
          'Si no, baciloscopía y cultivo. Recuerda que una baciloscopía negativa no descarta, y que un cultivo positivo confirma.',
          ['Confirmada', N('ok', 'Esquema 2 RHZE / 4 RH', 'Vigilar toxicidad',
            'Con la tuberculosis confirmada, esquema estándar, vigilando la toxicidad de cada fármaco: hígado, nervio, ojo y ácido úrico.')])])]),
  },
};
