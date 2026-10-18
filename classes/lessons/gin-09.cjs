// Clase 20.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'pH, aminas y microscopía: la regla que separa vaginosis, candidiasis y tricomoniasis',
      say: 'Bienvenida. Hoy vemos las infecciones más frecuentes de la vagina y el cuello uterino: vaginosis bacteriana, candidiasis, tricomoniasis y cervicitis. Los cuatro cuadros dan flujo vaginal, así que se parecen mucho al principio. Pero se separan con tres datos muy simples: el pH, el test de aminas y lo que ves al microscopio. Aprende esa regla y vas a resolver casi cualquier pregunta de este tema.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué se rompe el equilibrio vaginal?',
      nodes: [
        { id: 'gard', col: 0, row: 0, k: 'cause', t: 'Gardnerella y anaerobios', s: 'Reemplazan a los lactobacilos' },
        { id: 'vagi', col: 1, row: 0, k: 'effect', t: 'Vaginosis bacteriana', s: 'No es inflamación, es disbiosis' },
        { id: 'cand', col: 0, row: 1, k: 'cause', t: 'Candida albicans', s: 'Gatillada por antibióticos o embarazo' },
        { id: 'cane', col: 1, row: 1, k: 'effect', t: 'Candidiasis vulvovaginal', s: 'Ahora sí, mucho prurito' },
        { id: 'tric', col: 0, row: 2, k: 'cause', t: 'Trichomonas vaginalis', s: 'Es una infección de transmisión sexual' },
        { id: 'trie', col: 1, row: 2, k: 'effect', t: 'Tricomoniasis vaginal', s: 'Se trata también a la pareja' },
      ],
      edges: [
        { from: 'gard', to: 'vagi' },
        { from: 'cand', to: 'cane' },
        { from: 'tric', to: 'trie' },
      ],
      steps: [
        { show: ['gard'], note: 'No es una infección clásica, es disbiosis',
          say: 'Partamos por el mecanismo, porque cambia según la causa. En la vaginosis bacteriana no hay una bacteria invasora: lo que pasa es que los lactobacilos, que mantienen la vagina ácida y protegida, disminuyen, y en su lugar crecen la Gardnerella y otros anaerobios.' },
        { show: ['vagi'], note: 'Flujo gris, olor a pescado, sin dolor',
          say: 'Por eso la vaginosis no duele ni pica: es un desequilibrio de la flora, no una inflamación. El flujo es gris, homogéneo, y con un olor característico a pescado.' },
        { show: ['cand'], note: 'Antibióticos, embarazo o diabetes abren la puerta',
          say: 'La candidiasis es distinta: aquí sí hay un hongo, la Candida albicans, que aprovecha un ambiente favorable. Antibióticos recientes, embarazo o una diabetes mal controlada son los gatillantes típicos.' },
        { show: ['cane'], note: 'Ahora sí hay inflamación e intenso prurito',
          say: 'Y ahora sí hay inflamación: prurito intenso, que es el síntoma que manda en este cuadro.' },
        { show: ['tric'], note: 'Un protozoo flagelado, transmisión sexual',
          say: 'Y la tricomoniasis cambia otra vez de familia: es un protozoo flagelado, la Trichomona vaginalis, y se transmite por contacto sexual.' },
        { show: ['trie'], note: 'Por ser ITS, se trata también a la pareja',
          say: 'Justamente por ser una infección de transmisión sexual, aquí vas a tener que tratar también a la pareja. Guarda esa diferencia, porque es la que más se pregunta.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Examen físico',
      title: 'Especuloscopia y pH: cómo se toma la muestra',
      nodes: [
        { id: 'esp', col: 0, row: 1, k: 'start', t: 'Espéculo sin lubricante', s: 'Solo agua tibia si habrá PAP o cultivos' },
        { id: 'cue', col: 1, row: 1, k: 'mech', t: 'Describe cuello y paredes', s: 'Flujo, friabilidad, lesiones' },
        { id: 'ph', col: 2, row: 0, k: 'q', t: 'pH en la pared lateral', s: 'Normal 3,8 a 4,5' },
        { id: 'alto', col: 3, row: 0, k: 'risk', t: 'pH sobre 4,5', s: 'Vaginosis, tricomoniasis o atrofia' },
        { id: 'bajo', col: 3, row: 2, k: 'good', t: 'pH hasta 4,5', s: 'Candidiasis o flujo fisiológico' },
        { id: 'bim', col: 2, row: 2, k: 'alert', t: 'Tacto bimanual', s: 'Dolor al movilizar el cuello: EIP' },
      ],
      edges: [
        { from: 'esp', to: 'cue' }, { from: 'cue', to: 'ph' }, { from: 'ph', to: 'alto', label: 'alto' },
        { from: 'ph', to: 'bajo', label: 'normal' }, { from: 'cue', to: 'bim' },
      ],
      steps: [
        { show: ['esp'], note: 'Cusco cerrado, oblicuo, hacia el piso pélvico',
          say: 'Antes de interpretar el flujo, hay que tomarlo bien. La especuloscopia se hace en litotomía, después de inspeccionar la vulva. Eliges un espéculo del tamaño adecuado, sin lubricante, solo agua tibia, si vas a tomar PAP o cultivos. Se introduce cerrado, oblicuo y con presión hacia el piso pélvico, se rota a horizontal y se abre hasta ver el cuello.' },
        { show: ['cue'], note: 'Las muestras se toman al retirar',
          say: 'Describes el cuello: ectropión, friabilidad, lesiones exofíticas, pólipo, pus mucopurulento por cervicitis o pérdida del epitelio por atrofia. Y las paredes: flujo grumoso, espumoso u homogéneo, lesiones herpéticas o condilomas. Las muestras, PAP, pH, fresco, cultivo y PCR de clamidia y gonococo, se toman al ir retirando el espéculo.' },
        { show: ['ph'], note: 'Nunca en el fondo de saco',
          say: 'El pH se mide con una cinta aplicada en la pared vaginal lateral, no en el fondo de saco, porque ahí el moco cervical, la sangre y el semen lo alcalinizan. Lo normal es entre tres coma ocho y cuatro coma cinco.' },
        { show: ['alto', 'bajo'], note: 'Se complementa con aminas y fresco',
          say: 'Con pH sobre cuatro coma cinco piensas en vaginosis bacteriana, tricomoniasis o atrofia. Con pH de cuatro coma cinco o menos, en candidiasis o flujo fisiológico. Y lo completas con el test de aminas con hidróxido de potasio al diez por ciento y el examen en fresco.' },
        { show: ['bim'], note: 'Cierra el examen',
          say: 'Y terminas con el tacto bimanual: el dolor a la movilización del cuello sugiere enfermedad inflamatoria pélvica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vaginosis bacteriana',
      title: 'Los criterios de Amsel',
      cards: [
        { title: 'Diagnóstico', tag: 'Necesitas 3 de 4', kind: 'criteria', items: [
          { t: 'Flujo gris y homogéneo', d: 'Baña las paredes vaginales por completo',
            say: 'Para confirmar la vaginosis usas los criterios de Amsel, y necesitas al menos tres de cuatro. El primero: un flujo gris, fino, que baña toda la vagina por igual. Mira esta especuloscopia: el flujo homogéneo cubre las paredes vaginales.',
            photo: { src: 'biblioteca/13_ginecologia/gin-09/04_vaginosis-bacteriana-especuloscopia__kumar-clark_p1586.jpg', label: 'Vaginosis bacteriana', at: 'Mira esta especuloscopia', credit: 'Kumar and Clark\'s Clinical Medicine, p. 1586' } },
          { t: 'pH sobre 4,5', d: 'Y test de aminas positivo',
            say: 'El segundo, un pH sobre cuatro coma cinco. El tercero, el test de aminas positivo: le agregas hidróxido de potasio a la muestra y sale ese olor a pescado.' },
          { t: 'Clue cells en el frotis', d: 'Más del veinte por ciento de las células',
            say: 'Y el cuarto, al mirar al microscopio, encuentras las clue cells: células cubiertas de bacterias, con el borde borrado, en más del veinte por ciento. Mira esta célula clave: está tapizada de bacterias y no se le distingue el borde.',
            photo: { src: 'biblioteca/13_ginecologia/gin-09/01_celulas_clave__cdc-phil-3720.jpg', label: 'Células clave', at: 'Mira esta célula clave', credit: 'CDC PHIL 3720 (CDC/M. Rein), dominio público' } },
        ] },
        { title: 'Tratamiento', tag: 'Metronidazol', kind: 'pharma', items: [
          { t: 'Metronidazol oral', d: 'Quinientos miligramos cada doce horas, siete días',
            say: 'El tratamiento es metronidazol oral, quinientos miligramos cada doce horas, por siete días.' },
          { t: 'No se trata a la pareja', d: 'No baja las recurrencias',
            say: 'Y fíjate en algo importante: no tienes que tratar a la pareja. Se ha demostrado que no cambia las recurrencias. Esa es justamente la diferencia con lo que viene ahora.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Candidiasis vulvovaginal',
      title: 'Prurito, y un pH que no cambia',
      cards: [
        { title: 'Clínica', tag: 'El pH la delata', kind: 'criteria', items: [
          { t: 'Prurito vulvar intenso', d: 'El síntoma que manda en este cuadro',
            say: 'En la candidiasis, lo que manda es el prurito vulvar, intenso y persistente.' },
          { t: 'Flujo en leche cortada', d: 'Blanco, espeso y bien adherido',
            say: 'El flujo se describe como leche cortada: blanco, espeso, en grumos, adherido a la pared vaginal. Mira este flujo: es la leche cortada, y en el microscopio se ven las levaduras con sus hifas.',
            photos: [
              { src: 'biblioteca/13_ginecologia/gin-09/01_leucorrea-candidiasica__amir-gyo_p106.jpg', label: 'Leucorrea candidiásica', at: 'Mira este flujo', credit: 'Manual AMIR Ginecología y Obstetricia, p. 106' },
              { src: 'biblioteca/13_ginecologia/gin-09/03_microscopia_candida__fitzpatrick_p80.jpg', label: 'Candida al microscopio', at: 'en el microscopio', credit: 'Fitzpatrick 7.ª ed., Fig. 5-2B' },
            ] },
          { t: 'pH normal, test negativo', d: 'Es el único de los tres que no sube',
            say: 'Y aquí está el dato que la separa de las otras dos: el pH sigue normal, bajo cuatro coma cinco, y el test de aminas es negativo. Es el único cuadro de los tres que no altera el pH.' },
        ] },
        { title: 'Tratamiento', tag: 'Fluconazol', kind: 'pharma', items: [
          { t: 'Fluconazol en dosis única', d: 'Ciento cincuenta miligramos vía oral',
            say: 'El tratamiento es fluconazol, ciento cincuenta miligramos, en una sola dosis oral.' },
          { t: 'Si está embarazada: tópico', d: 'Clotrimazol vaginal, nunca fluconazol oral',
            say: 'Pero ojo con la embarazada: ahí el fluconazol oral se evita, y usas clotrimazol tópico. Guarda ese dato, porque el examen lo pregunta seguido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tricomoniasis vaginal',
      title: 'La única de las tres que es ITS',
      cards: [
        { title: 'Clínica', tag: 'Ojo con el cuello', kind: 'alert', items: [
          { t: 'Flujo espumoso y verdoso', d: 'Con mal olor y bastante prurito',
            say: 'En la tricomoniasis, el flujo es abundante, espumoso, de color amarillo verdoso, y con mal olor. En la muestra fresca, mira el parásito: las tricomonas se mueven con sus flagelos.',
            photo: { src: 'biblioteca/13_ginecologia/gin-09/02_tricomonas__cdc.jpg', label: 'Tricomonas', at: 'mira el parásito', credit: 'CDC (Wikimedia Commons "Trichomonas vaginalis 01"), dominio público' } },
          { t: 'Cuello en fresa', d: 'Petequias visibles en el exocérvix',
            say: 'Y al mirar el cuello uterino puedes ver el signo del cuello en fresa: pequeñas petequias rojas sobre la mucosa. Mira este cuello: las petequias le dan el aspecto de fresa.',
            photo: { src: 'biblioteca/13_ginecologia/gin-09/02_cervix-en-fresa-trichomonas__cto-gyo_p100.jpg', label: 'Cérvix en fresa', at: 'Mira este cuello', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 100' } },
        ] },
        { title: 'Tratamiento', tag: 'Metronidazol, y a la pareja', kind: 'pharma', items: [
          { t: 'Metronidazol, dos gramos', d: 'Una sola dosis por vía oral',
            say: 'El tratamiento es metronidazol, dos gramos, en una sola dosis.' },
          { t: 'Trata siempre a la pareja', d: 'Es obligatorio, porque es una ITS',
            say: 'Y a diferencia de la vaginosis, aquí tratas siempre a la pareja, de forma simultánea, porque es una infección de transmisión sexual y si no la vuelves a contagiar de inmediato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cervicitis',
      title: 'Cuando el problema sube al cuello',
      cards: [
        { title: 'Clínica', tag: 'No es lo mismo que vaginitis', kind: 'criteria', items: [
          { t: 'Secreción purulenta del cuello', d: 'Sale por el orificio cervical, no de la vagina',
            say: 'Cambiemos de nivel. En la cervicitis, la secreción purulenta sale del cuello uterino, no de las paredes vaginales.' },
          { t: 'Cuello friable, sangra fácil', d: 'Al tocarlo con la tórula',
            say: 'Y el cuello está friable: sangra apenas lo tocas con la tórula al examinarlo.' },
        ] },
        { title: 'Tratamiento dual', tag: 'Gonococo + Chlamydia', kind: 'pharma', items: [
          { t: 'Ceftriaxona intramuscular', d: 'Quinientos miligramos, una sola dosis',
            say: 'El tratamiento cubre los dos agentes de siempre. Ceftriaxona, quinientos miligramos intramuscular, en una sola dosis, para el gonococo.' },
          { t: 'Más doxiciclina, siete días', d: 'Cien miligramos cada doce horas',
            say: 'Y doxiciclina, cien miligramos cada doce horas, por siete días, para la Chlamydia. Casi siempre van juntas, así que tratas las dos aunque solo confirmes una.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Otras ITS',
      title: 'Manejo sindrómico: sífilis, herpes, VPH y úlceras',
      head: ['Infección', 'Cómo se ve', 'Tratamiento'],
      rows: [
        { cells: ['Sífilis primaria', 'Chancro indoloro', 'Penicilina benzatina 2,4 millones UI IM, dosis única'],
          say: 'Para cerrar, las otras infecciones de transmisión sexual, con manejo sindrómico del Minsal, tratamiento de la pareja, consejería, condón y oferta de test de VIH, sífilis y hepatitis B. La sífilis primaria es un chancro indoloro, y se trata con penicilina benzatina, dos coma cuatro millones de unidades intramusculares, en dosis única.' },
        { cells: ['Sífilis secundaria y latente', 'Exantema palmo-plantar, condilomas planos', 'Benzatina única; latente tardía, 3 semanas'],
          say: 'La secundaria da exantema palmoplantar y condilomas planos, con la misma dosis única. Y la latente tardía, o de duración desconocida, una dosis por semana durante tres semanas. El diagnóstico es VDRL o RPR más una prueba treponémica, es de notificación obligatoria y se controla a la pareja.' },
        { cells: ['Herpes genital (VHS-2)', 'Vesículas y úlceras dolorosas, adenopatías', 'Aciclovir 400 mg cada 8 h por 7-10 días'],
          say: 'El herpes genital da vesículas y úlceras dolorosas con adenopatías; el diagnóstico es clínico o por PCR. Se trata con aciclovir cuatrocientos miligramos cada ocho horas, siete a diez días, o valaciclovir, y supresión crónica si hay recurrencias frecuentes.' },
        { cells: ['VPH: condilomas (6 y 11)', 'Lesiones verrucosas', 'Podofilotoxina, imiquimod, ácido tricloroacético o crioterapia'],
          say: 'Los condilomas por los tipos seis y once se tratan con podofilotoxina, imiquimod, ácido tricloroacético o crioterapia. La vacuna cuadrivalente previene los tipos seis, once, dieciséis y dieciocho.' },
        { cells: ['Úlcera con adenopatía fluctuante', 'Dolorosa', 'LGV: doxiciclina; chancroide: azitromicina'],
          say: 'Y una úlcera con adenopatía dolorosa y fluctuante es linfogranuloma venéreo, que se trata con doxiciclina, o chancroide, con azitromicina.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Tres flujos, una regla',
      images: [
        { src: 'animaciones/gin-09/A1_ph_flujo.mp4', label: 'pH y aspecto del flujo', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'El pH separa los cuadros',
          say: 'Los lactobacilos mantienen la vagina ácida. En la vaginosis aparece un flujo gris homogéneo y el pH sube sobre cuatro coma cinco, con aminas positivas. En la candidiasis hay grumos blancos con prurito, y el pH no cambia: es la única donde no sube. En la tricomoniasis el flujo es espumoso y verdoso, con el cuello en fresa, el pH sube, y es una infección de transmisión sexual, así que se trata también a la pareja.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las cuatro entidades en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Flujo gris, sin dolor, pH alto', 'Metronidazol solo a la paciente', 'Tratar también a la pareja'],
          say: 'Repasemos las trampas. Flujo gris sin dolor y pH alto: metronidazol solo a la paciente. El error es tratar a la pareja sin necesidad.' },
        { cells: ['Prurito y leche cortada, pH normal', 'Fluconazol en dosis única', 'Confundirlo con vaginosis por el pH'],
          say: 'Prurito con flujo en leche cortada y pH normal: fluconazol. El error es pensar que todo flujo anormal tiene el pH alto.' },
        { cells: ['Flujo espumoso, cuello en fresa', 'Metronidazol a la paciente y a su pareja', 'Tratar solo a la paciente'],
          say: 'Flujo espumoso con cuello en fresa: metronidazol a los dos, porque es una ITS. El error clásico es olvidar a la pareja.' },
        { cells: ['Secreción purulenta del cuello', 'Ceftriaxona más doxiciclina', 'Usar solo metronidazol'],
          say: 'Secreción purulenta que sale del cuello: ceftriaxona más doxiciclina. El metronidazol no cubre ni gonococo ni Chlamydia.' },
        { cells: ['Candidiasis en el embarazo', 'Clotrimazol tópico', 'Dar fluconazol oral'],
          say: 'Y candidiasis en el embarazo: siempre tópico. El fluconazol oral se evita en la gestante.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 24 años, embarazada de 12 semanas, consulta por prurito vulvar intenso de una semana, con flujo blanco, espeso, en grumos, adherido a la pared vaginal. El pH vaginal es de 4,0 y el test de aminas resulta negativo.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Fluconazol 150 mg vía oral en dosis única' },
        { letter: 'B', text: 'Clotrimazol óvulos vaginales por 7 días' },
        { letter: 'C', text: 'Metronidazol 500 mg cada 12 horas por 7 días' },
        { letter: 'D', text: 'Metronidazol 2 g vía oral en dosis única, a ella y su pareja' },
        { letter: 'E', text: 'Ceftriaxona 500 mg intramuscular en dosis única' },
      ],
      correct: 'B',
      explanation: 'El cuadro es candidiasis vulvovaginal (prurito, flujo en leche cortada, pH normal, aminas negativas). Por estar embarazada, el fluconazol oral se evita y se prefiere el azol tópico.',
      say: {
        stem: 'Vamos al caso. Mujer de veinticuatro años, embarazada de doce semanas, con prurito vulvar intenso de una semana, y flujo blanco, espeso, en grumos, adherido a la pared vaginal. El pH vaginal es de cuatro, y el test de aminas es negativo.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Tienes cinco opciones: fluconazol oral en dosis única, clotrimazol en óvulos por siete días, metronidazol oral por siete días, metronidazol en dosis única para ella y su pareja, o ceftriaxona intramuscular. Piénsalo.',
        answer: 'Es la B. El cuadro es una candidiasis clásica: prurito, leche cortada, y un pH que no sube. La trampa está en el embarazo: el fluconazol oral, que sería tu primera opción fuera del embarazo, aquí se evita, y usas clotrimazol tópico. El metronidazol es para vaginosis o tricomoniasis, y la ceftriaxona, para cervicitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 121',
      stem: 'Mujer de 28 años con dispareunia y flujo vaginal gris homogéneo con mal olor, que empeora tras el coito. El pH vaginal es de 5,5 y el test de aminas con KOH resulta positivo.',
      question: '¿Cuál es el diagnóstico y tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Vaginosis bacteriana: metronidazol oral 500 mg cada 12 horas por 7 días' },
        { letter: 'B', text: 'Candidiasis vaginal: fluconazol oral 150 mg dosis única' },
        { letter: 'C', text: 'Tricomoniasis: metronidazol 2 g dosis única' },
        { letter: 'D', text: 'Herpes genital: aciclovir' },
        { letter: 'E', text: 'Cervicitis por Chlamydia: azitromicina' },
      ],
      correct: 'A',
      explanation: 'Flujo gris homogéneo, pH sobre 4,5 y test de aminas positivo: vaginosis bacteriana. Se trata con metronidazol oral 500 mg cada 12 horas por 7 días.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de veintiocho años con dispareunia y flujo vaginal gris homogéneo, con mal olor que empeora después de las relaciones. El pH vaginal es de cinco coma cinco, y el test de aminas con KOH resulta positivo.',
        question: '¿Cuál es el diagnóstico y tratamiento más adecuado?',
        options: 'Las opciones: vaginosis bacteriana con metronidazol oral, candidiasis con fluconazol, tricomoniasis con metronidazol en dosis única, herpes genital con aciclovir, o cervicitis por Chlamydia con azitromicina. Piénsalo.',
        answer: 'Es la A. Flujo gris homogéneo, pH sobre cuatro coma cinco y aminas positivas: son tres de los criterios de Amsel, y con eso ya tienes vaginosis bacteriana. El tratamiento es metronidazol oral por siete días, sin necesidad de tratar a la pareja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 178',
      stem: 'Mujer de 26 años, sin antecedentes, consulta por secreción vaginal asociada a prurito. Al examen se aprecia liquenificación y signos de grataje vulvar, y a la especuloscopía, leucorrea blanquecina.',
      question: '¿Cuál es el fármaco de elección para el manejo de este caso?',
      options: [
        { letter: 'A', text: 'Metronidazol' },
        { letter: 'B', text: 'Fluconazol' },
        { letter: 'C', text: 'Miconazol' },
        { letter: 'D', text: 'Doxiciclina' },
        { letter: 'E', text: 'Ceftriaxona' },
      ],
      correct: 'B',
      explanation: 'Prurito intenso con signos de rascado y leucorrea blanquecina: candidiasis genital. El fármaco de elección es fluconazol 150 mg oral en dosis única.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Mujer de veintiséis años, sin antecedentes, con secreción vaginal y prurito. Al examen se ven marcas de rascado en la vulva, y en la especuloscopía, una leucorrea blanquecina.',
        question: '¿Cuál es el fármaco de elección para el manejo de este caso?',
        options: 'Las opciones: metronidazol, fluconazol, miconazol, doxiciclina, o ceftriaxona. Piénsalo.',
        answer: 'Es la B, fluconazol. El prurito intenso con las marcas de rascado te tiene que hacer pensar de inmediato en candidiasis. Y aunque el miconazol también es un antifúngico, la vía oral en dosis única con fluconazol es la respuesta que el examen busca como fármaco de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 117',
      stem: 'Mujer de 30 años consulta por leucorrea y prurito. Al examen ginecológico destaca especuloscopía con leucorrea abundante, amarilla y espumosa.',
      question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
      options: [
        { letter: 'A', text: 'Prueba de aminas vaginales (test de KOH)' },
        { letter: 'B', text: 'Cultivo para Cándida albicans' },
        { letter: 'C', text: 'Examen de determinación de células clave (clue cells)' },
        { letter: 'D', text: 'Frotis fresco de la secreción vaginal' },
        { letter: 'E', text: 'PCR para Chlamydia trachomatis' },
      ],
      correct: 'D',
      explanation: 'Flujo amarillo y espumoso: cuadro clásico de tricomoniasis. El diagnóstico se confirma con el frotis fresco, donde se ve el protozoo flagelado móvil.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil diecisiete. Mujer de treinta años con leucorrea y prurito. A la especuloscopía, un flujo abundante, amarillo y espumoso.',
        question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
        options: 'Las opciones: prueba de aminas, cultivo para Cándida, células clave, frotis fresco de la secreción, o PCR para Chlamydia. Piénsalo.',
        answer: 'Es la D, frotis fresco. El flujo amarillo y espumoso es tricomoniasis, y ahí el examen que la confirma en el momento es mirar la muestra fresca al microscopio: vas a ver al protozoo moviéndose. Las clue cells son para vaginosis, y las aminas apoyan pero no confirman por sí solas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 86',
      stem: 'Mujer de 26 años, sexualmente activa y alérgica a la penicilina, consulta por disuria y molestias genitales de 4 días, con leucorrea. Al examen hay signos inflamatorios en el cuello uterino, con escasa leucorrea. El cultivo de Thayer Martin resulta positivo, y la prueba de aminas, negativa.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Azitromicina' },
        { letter: 'D', text: 'Doxiciclina' },
        { letter: 'E', text: 'Penicilina benzatina' },
      ],
      correct: 'B',
      explanation: 'Cultivo de Thayer Martin positivo: cervicitis gonocócica. A pesar de la alergia a penicilina, la ceftriaxona sigue siendo el fármaco de elección para el gonococo.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de veintiséis años, alérgica a la penicilina, con disuria y molestias genitales de cuatro días, con leucorrea. El cultivo de Thayer Martin sale positivo, y la prueba de aminas, negativa.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: ciprofloxacino, ceftriaxona, azitromicina, doxiciclina, o penicilina benzatina. Piénsalo.',
        answer: 'Es la B, ceftriaxona. El cultivo positivo confirma gonococo, y la ceftriaxona sigue siendo de elección aunque la paciente sea alérgica a la penicilina, porque son familias distintas de antibiótico. Ojo: en la práctica también cubrirías Chlamydia con doxiciclina, pero esta pregunta apunta específicamente al tratamiento del gonococo.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 69",
      "stem": "Una paciente de 25 años, embarazada, con 12 semanas contadas desde una FUR segura y confiable, se realiza exámenes, entre los que trae un VDRL que resulta no reactivo y un MHA-TP que resulta reactivo.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Administrar penicilina benzatina de inmediato"
        },
        {
          "letter": "B",
          "text": "Realizar VDRL mensual durante el resto del embarazo"
        },
        {
          "letter": "C",
          "text": "Controlar con VDRL a las 30 semanas"
        },
        {
          "letter": "D",
          "text": "Solicitar un FTA-ABS"
        },
        {
          "letter": "E",
          "text": "Indicar doxiciclina vía oral"
        }
      ],
      "correct": "C",
      "explanation": "Las pruebas no treponémicas (VDRL, RPR) se negativizan tras un tratamiento exitoso; las treponémicas (MHA-TP, FTA-ABS) quedan positivas de por vida. VDRL no reactivo con MHA-TP reactivo corresponde a una sífilis tratada en el pasado: se sigue el control prenatal habitual, con VDRL a las 28 a 30 semanas.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una embarazada de veinticinco años, con doce semanas por una fecha de última regla segura, trae un VDRL no reactivo y una prueba treponémica reactiva.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: penicilina benzatina de inmediato, VDRL mensual el resto del embarazo, control con VDRL a las treinta semanas, pedir otra prueba treponémica, o doxiciclina oral. Piénsalo.",
        "answer": "Es la C. La prueba treponémica queda positiva de por vida, mientras que el VDRL se negativiza al tratar: este patrón es la cicatriz de una sífilis ya tratada, y basta el control habitual con VDRL a las treinta semanas. La penicilina tienta, pero sería tratar una infección que no está activa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 3.01.5.008 · Flujo vaginal (pH)",
      "stem": "Mujer de 29 años consulta por flujo vaginal de mal olor de 1 semana. Se toma una muestra con tórula del tercio medio de la pared lateral de la vagina y se aplica sobre una tira de pH, que marca 5,0. Al agregar KOH al 10% a la muestra se libera olor a pescado.",
      "question": "¿Cuál es la interpretación correcta?",
      "options": [
        {
          "letter": "A",
          "text": "pH elevado con test de aminas positivo, compatible con vaginosis bacteriana"
        },
        {
          "letter": "B",
          "text": "El pH es normal y descarta una vaginosis bacteriana"
        },
        {
          "letter": "C",
          "text": "Es el pH ácido característico de la candidiasis"
        },
        {
          "letter": "D",
          "text": "La muestra debe tomarse del endocérvix para ser válida"
        },
        {
          "letter": "E",
          "text": "El test de aminas positivo confirma una tricomoniasis"
        }
      ],
      "correct": "A",
      "explanation": "El pH vaginal normal es 3,8 a 4,5. Medido en la pared lateral de la vagina, sin moco cervical, sangre ni semen, un pH sobre 4,5 con aminas positivas apoya vaginosis bacteriana (criterios de Amsel). El moco cervical es alcalino y falsea el resultado; la candidiasis tiene pH normal.",
      "say": {
        "stem": "Mujer de veintinueve años con flujo de mal olor. Se toma la muestra con tórula de la pared lateral de la vagina y se aplica en una tira de pH, que marca cinco. Al agregar hidróxido de potasio, se libera olor a pescado.",
        "question": "¿Cuál es la interpretación correcta?",
        "options": "Las opciones: pH elevado con aminas positivas compatible con vaginosis, pH normal que descarta vaginosis, pH ácido de candidiasis, que la muestra debió ser del endocérvix o que las aminas confirman tricomoniasis. Piénsalo.",
        "answer": "Es la A. Un pH sobre cuatro coma cinco, con test de aminas positivo, apoya la vaginosis bacteriana. Tomar la muestra del endocérvix tienta, pero es un error: el moco cervical es alcalino y sube falsamente el pH."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 3.01.5.007 · Examen ginecológico, especuloscopia y tacto bimanual",
      "stem": "Mujer de 30 años consulta por flujo vaginal anormal. Corresponde además tomar su citología cervical (PAP) de tamizaje.",
      "question": "¿Cuál es la secuencia correcta del examen ginecológico?",
      "options": [
        {
          "letter": "A",
          "text": "Inspección de genitales externos, especuloscopia con toma de muestras y luego tacto bimanual"
        },
        {
          "letter": "B",
          "text": "Tacto bimanual, luego especuloscopia y toma de muestras"
        },
        {
          "letter": "C",
          "text": "Especuloscopia con abundante lubricante y luego inspección vulvar"
        },
        {
          "letter": "D",
          "text": "Tacto rectal, luego especuloscopia y finalmente inspección vulvar"
        },
        {
          "letter": "E",
          "text": "Toma de muestras sin especuloscopia y tacto bimanual"
        }
      ],
      "correct": "A",
      "explanation": "El examen se inicia con la inspección de genitales externos, sigue con la especuloscopia (idealmente lubricando solo con agua o suero) para visualizar el cuello y tomar muestras de flujo y PAP, y termina con el tacto bimanual. Hacer el tacto antes altera las muestras y el lubricante interfiere con la citología.",
      "say": {
        "stem": "Mujer de treinta años con flujo anormal, a la que además corresponde tomar el Papanicolau.",
        "question": "¿Cuál es la secuencia correcta del examen?",
        "options": "Las opciones: inspección, espéculo con muestras y tacto al final; tacto primero; espéculo con mucho lubricante; tacto rectal primero; o muestras sin espéculo. Piénsalo.",
        "answer": "Es la A. Primero se inspecciona, luego espéculo y toma de muestras, y al final el tacto bimanual. Empezar por el tacto tienta por costumbre, pero contamina y altera las muestras."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.106 · Candidiasis urogenital",
      "stem": "Una adolescente de 16 años, sin actividad sexual, terminó hace una semana un tratamiento antibiótico por una faringoamigdalitis. Consulta por prurito vulvar intenso y flujo vaginal blanco, grumoso, sin mal olor. Al examen hay eritema y edema vulvar. El pH vaginal es 4,2.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Metronidazol oral"
        },
        {
          "letter": "B",
          "text": "Clotrimazol vaginal"
        },
        {
          "letter": "C",
          "text": "Ceftriaxona intramuscular"
        },
        {
          "letter": "D",
          "text": "Corticoide tópico de alta potencia"
        },
        {
          "letter": "E",
          "text": "Doxiciclina oral"
        }
      ],
      "correct": "B",
      "explanation": "Prurito intenso, flujo blanco grumoso \"como leche cortada\", sin mal olor y con pH normal (menor a 4,5), tras uso de antibióticos, es candidiasis vulvovaginal. No es una ITS. Se trata con azol tópico (clotrimazol vaginal) o fluconazol oral en dosis única. El metronidazol es para vaginosis bacteriana y tricomoniasis, que elevan el pH.",
      "say": {
        "stem": "Una adolescente de dieciséis años, tras usar antibióticos, tiene prurito vulvar intenso y flujo blanco grumoso sin mal olor, con pH vaginal normal.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: metronidazol, clotrimazol vaginal, ceftriaxona, corticoide tópico o doxiciclina. Piénsalo.",
        "answer": "Es la B. Es una candidiasis vulvovaginal y se trata con un azol como el clotrimazol vaginal. El metronidazol tienta porque es el tratamiento clásico de flujo vaginal, pero sirve para vaginosis y tricomonas, no para hongos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.130 · Leucorrea y vulvovaginitis",
      "stem": "Una niña de 6 años presenta flujo vaginal amarillento escaso, prurito y eritema vulvar de 2 semanas. Usa ropa interior sintética, se baña en tina con espuma y se limpia de atrás hacia adelante. No hay sangrado, cuerpo extraño visible, lesiones sugerentes de abuso ni oxiuros.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Medidas de higiene: limpieza de adelante hacia atrás, ropa de algodón, evitar baños de espuma"
        },
        {
          "letter": "B",
          "text": "Metronidazol oral"
        },
        {
          "letter": "C",
          "text": "Vaginoscopía bajo anestesia"
        },
        {
          "letter": "D",
          "text": "Óvulos de clotrimazol"
        },
        {
          "letter": "E",
          "text": "Ceftriaxona intramuscular"
        }
      ],
      "correct": "A",
      "explanation": "La vulvovaginitis inespecífica es la causa más frecuente de flujo en niñas prepuberales, por mucosa hipoestrogénica delgada, cercanía al ano y mala higiene. El manejo inicial son medidas higiénicas. La candidiasis es rara antes de la pubertad salvo uso de pañal o antibióticos. Si persiste o hay sangrado, se cultiva el flujo y se descarta cuerpo extraño o abuso.",
      "say": {
        "stem": "Una niña de seis años tiene flujo amarillento escaso, prurito y eritema vulvar, usa ropa sintética, toma baños de espuma y se limpia de atrás hacia adelante.",
        "question": "¿Cuál es la conducta inicial más adecuada?",
        "options": "Las opciones: medidas de higiene, metronidazol, vaginoscopía, óvulos de clotrimazol o ceftriaxona. Piénsalo.",
        "answer": "Es la A. Es una vulvovaginitis inespecífica, la más frecuente en niñas, y se maneja con medidas de higiene. El clotrimazol tienta por el prurito, pero la candidiasis es rara antes de la pubertad."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tres datos que separan todo', tag: 'pH, aminas, microscopía', kind: 'key', items: [
          { t: 'pH normal: candidiasis', d: 'Es el único que no lo altera',
            say: 'Cerremos con las reglas de oro. Si el pH es normal, piensa en candidiasis: es el único cuadro que no lo altera.' },
          { t: 'pH alto y aminas positivas', d: 'La microscopía separa vaginosis de tricomoniasis',
            say: 'Si el pH está alto y las aminas son positivas, es vaginosis o tricomoniasis, y ahí la microscopía decide: clue cells o protozoo móvil.' },
        ] },
        { title: 'Tratamiento', tag: 'Quién trata a la pareja', kind: 'pharma', items: [
          { t: 'Solo tricomoniasis trata pareja', d: 'Por ser la única infección de transmisión sexual',
            say: 'De las tres, solo en la tricomoniasis tratas a la pareja, porque es la única de transmisión sexual.' },
          { t: 'Cervicitis: ceftriaxona y doxiciclina', d: 'Gonococo y Chlamydia, casi siempre juntos',
            say: 'Y en la cervicitis, siempre las dos: ceftriaxona y doxiciclina.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Embarazada: candidiasis se trata tópica', d: 'Nunca fluconazol oral',
            say: 'Si te llevas una sola idea de hoy: mira el pH antes de decidir el tratamiento, y recuerda que en la embarazada la candidiasis siempre se trata tópica. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vulvovaginitis y cervicitis: qué decide el diagnóstico',
    root: N('start', 'Mujer con flujo vaginal patológico', 'Prurito, mal olor o secreción',
      'Partamos de la sospecha. Lo primero que necesitas es el pH y el test de aminas.',
      ['', N('q', '¿Dónde está el pH?', 'Eso separa las tres primeras causas',
        'La pregunta que ordena todo: ¿el pH está normal, o está alto?',
        ['Normal, bajo 4,5', N('ok', 'Candidiasis vulvovaginal', 'Prurito y flujo en leche cortada',
          'Con pH normal y prurito intenso, es candidiasis. Fluconazol en dosis única, o clotrimazol tópico si está embarazada.')],
        ['Alto, sobre 4,5', N('q', '¿Qué ves al microscopio?', 'Vaginosis o tricomoniasis',
          'Con el pH alto, la microscopía decide entre las dos.',
          ['Clue cells', N('do', 'Vaginosis bacteriana', 'Metronidazol oral, sin tratar a la pareja',
            'Si ves clue cells, es vaginosis bacteriana. Metronidazol oral por siete días, y no necesitas tratar a la pareja.')],
          ['Protozoo móvil', N('alert', 'Tricomoniasis vaginal', 'Metronidazol a ella y a su pareja',
            'Si ves un protozoo flagelado moviéndose, es tricomoniasis. Metronidazol en dosis única, y esta vez sí, a la paciente y a su pareja.')])],
        ['Secreción del cuello, no de la vagina', N('alert', 'Cervicitis mucopurulenta', 'Ceftriaxona más doxiciclina',
          'Y si la secreción purulenta sale del cuello uterino y no de las paredes vaginales, es cervicitis: ceftriaxona más doxiciclina, cubriendo gonococo y Chlamydia juntos.')])]),
  },
};
