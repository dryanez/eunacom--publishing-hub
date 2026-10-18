// Clase 14.20 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-20). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de PAAF versus biopsia abierta de la masa cervical: ese tema usa un caso representativo del libro.
// Disfonía crónica y nasofibroscopía ya se vieron en orl-16; aquí se retoman solo como paso de la secuencia.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de cabeza y cuello: las banderas rojas, la masa cervical del fumador y lo que nunca se hace con ella',
      say: 'Bienvenido. Cerramos el libro de otorrino con el cáncer de cabeza y cuello. El examen casi nunca pregunta tratamientos oncológicos. Pregunta si reconoces las banderas rojas y qué examen pides primero. Y hay una prohibición que aparece una y otra vez: la biopsia abierta de un ganglio del cuello. Veamos por qué.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Carcinoma escamoso y sus causas',
      cards: [
        { title: 'El tumor', tag: 'Más del 90%', kind: 'key', items: [
          { t: 'Carcinoma de células escamosas', d: 'Más del 90% de los cánceres de cabeza y cuello',
            say: 'Más del noventa por ciento de los cánceres malignos de cabeza y cuello son carcinomas de células escamosas, también llamados epidermoides o espinocelulares. Nacen en el epitelio de la mucosa de laringe, orofaringe, cavidad oral, hipofaringe y nasofaringe.' },
        ] },
        { title: 'Causas', tag: 'Dos perfiles', kind: 'criteria', items: [
          { t: 'Tabaco y alcohol', d: 'Sinergia: riesgo hasta 30 veces mayor',
            say: 'La causa clásica es el tabaquismo crónico junto con el consumo nocivo de alcohol. No se suman, se potencian: el riesgo puede multiplicarse hasta por treinta.' },
          { t: 'VPH-16 en la orofaringe', d: 'Adultos jóvenes, sin tabaquismo pesado',
            say: 'Hay un segundo perfil, que ha crecido en las últimas décadas: cáncer de orofaringe, en amígdala y base de la lengua, en adultos más jóvenes sin tabaquismo pesado, por virus del papiloma humano oncogénico, sobre todo el tipo dieciséis. Tiene mejor pronóstico y responde bien a la radioterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas',
      title: 'Cinco señales de alarma en ORL',
      cards: [
        { title: 'Derivación prioritaria', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Disfonía mayor de 3 semanas', d: 'En fumador: cáncer de laringe',
            say: 'La primera ya la conoces de la clase de disfonía: una disfonía persistente de más de dos a tres semanas en un adulto fumador es sospecha de cáncer de cuerda vocal o laringe.' },
          { t: 'Otalgia unilateral con otoscopía normal', d: 'Dolor referido desde faringe o laringe',
            say: 'La segunda es la otalgia unilateral persistente con otoscopía rigurosamente normal. Es dolor referido de un tumor de la base de la lengua, la amígdala, la hipofaringe o la laringe.' },
          { t: 'Úlcera o placa que no cicatriza', d: 'Leucoplaquia o eritroplasia, más de 2 semanas',
            say: 'La tercera es una úlcera indurada, o una placa blanca o roja, leucoplaquia o eritroplasia, en la lengua o la boca, que no cicatriza en dos semanas. Mira este carcinoma en el borde izquierdo de la lengua: una lesión irregular, áspera, con áreas blanquecinas. Y esta es una leucoplaquia con displasia severa: una placa blanca lisa, premaligna.',
            photos: [
              { src: 'biblioteca/17_otorrino/orl-20/01_carcinoma-de-lengua__bates_p286.jpg', label: 'Carcinoma de lengua', at: 'Mira este carcinoma', credit: 'Bates 12.ª ed., Fig. 7-71' },
              { src: 'biblioteca/17_otorrino/orl-20/02_leucoplaquia-displasia-lengua__bailey-love_p788.jpg', label: 'Leucoplaquia con displasia', at: 'Y esta es una leucoplaquia', credit: 'Bailey & Love 27.ª ed., Fig. 48.11 (a)' },
            ] },
          { t: 'Odinofagia o disfagia unilateral', d: 'Progresiva, con cuerpo extraño constante',
            say: 'La cuarta es la odinofagia o disfagia unilateral y progresiva, con sensación constante de cuerpo extraño en la faringe.' },
          { t: 'Obstrucción nasal unilateral en adulto', d: 'Epistaxis u otitis con efusión: cavum',
            say: 'Y la quinta: obstrucción nasal unilateral, epistaxis recurrente de un lado u otitis con efusión unilateral en un adulto. Eso es un cáncer de cavum, la nasofaringe, vinculado al virus de Epstein-Barr, y el tumor tapa la trompa de Eustaquio.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Banderas rojas y regla de los 80',
      images: [
        { src: 'animaciones/orl-20/A1_cancer_orl_banderas_y_regla_80.mp4', label: 'Cáncer de cabeza y cuello: banderas rojas y regla de los ochenta', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cinco banderas rojas y cuánto vale una masa cervical',
          say: 'Mira dónde nacen las banderas rojas: la disfonía de más de tres semanas, la otalgia con otoscopía normal, la úlcera que no cicatriza, la odinofagia unilateral y la obstrucción nasal de un solo lado. Y si en un mayor de cuarenta años aparece una masa cervical dura, aplica la regla de los ochenta: ochenta por ciento neoplásica, ochenta de esas maligna, y casi todas, metástasis de un escamoso de la vía aerodigestiva. Nunca una biopsia abierta del ganglio.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué duele el oído sano',
      nodes: [
        { id: 'tu', col: 0, row: 1, k: 'cause', t: 'Tumor en faringe o laringe', s: 'Base de lengua, amígdala' },
        { id: 'ne', col: 1, row: 0, k: 'mech', t: 'Nervio glosofaríngeo', s: 'Rama de Jacobson' },
        { id: 'va', col: 1, row: 2, k: 'mech', t: 'Nervio vago', s: 'Rama de Arnold' },
        { id: 'ot', col: 2, row: 1, k: 'effect', t: 'Otalgia refleja', s: 'Unilateral y persistente' },
        { id: 'no', col: 3, row: 1, k: 'alert', t: 'Otoscopía normal', s: 'Bandera roja mayor' },
      ],
      edges: [
        { from: 'tu', to: 'ne' },
        { from: 'tu', to: 'va' },
        { from: 'ne', to: 'ot' },
        { from: 'va', to: 'ot' },
        { from: 'ot', to: 'no' },
      ],
      steps: [
        { show: ['tu', 'ne', 'va'], note: 'La faringe y el oído comparten nervios',
          say: 'Veamos por qué un tumor de la garganta da dolor de oído. La orofaringe y la hipofaringe están inervadas por el glosofaríngeo y el vago, y esos mismos nervios mandan ramas al oído: la rama de Jacobson, del glosofaríngeo, y la de Arnold, del vago.' },
        { show: ['ot', 'no'], note: 'El cerebro lo interpreta como dolor del oído',
          say: 'El cerebro recibe la señal por esa vía compartida y la proyecta al oído. Por eso el paciente dice que le duele el oído, pero el oído está sano. Cuando un adulto, sobre todo fumador, tiene otalgia unilateral persistente con otoscopía normal, tienes que mirar la garganta, y eso se hace con nasofibroscopía.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de los 80',
      title: 'La masa cervical del adulto mayor de 40',
      nodes: [
        { id: 'ma', col: 0, row: 1, k: 'start', t: 'Masa cervical persistente', s: 'Mayor de 40, más de 3 semanas' },
        { id: 'ne', col: 1, row: 1, k: 'effect', t: '80% neoplásicas', s: 'Solo 20% benignas o infecciosas' },
        { id: 'ml', col: 2, row: 1, k: 'risk', t: '80% malignas', s: 'De las neoplásicas' },
        { id: 'me', col: 3, row: 0, k: 'alert', t: '80% metástasis ganglionares', s: 'De las malignas' },
        { id: 'es', col: 3, row: 2, k: 'alert', t: '80% de carcinoma escamoso', s: 'Primario sobre las clavículas' },
      ],
      edges: [
        { from: 'ma', to: 'ne' },
        { from: 'ne', to: 'ml' },
        { from: 'ml', to: 'me' },
        { from: 'me', to: 'es' },
      ],
      steps: [
        { show: ['ma', 'ne'], note: 'En el adulto, la masa casi siempre es tumor',
          say: 'La masa cervical en un adulto sigue la regla de los ochenta de Skandalakis. Vale para una masa cervical no tiroidea, persistente por más de tres semanas, en mayor de cuarenta años. Primero: ochenta por ciento son neoplásicas.' },
        { show: ['ml', 'me'], note: 'La mayoría son metástasis, no tumores primarios',
          say: 'Segundo: de las neoplásicas, ochenta por ciento son malignas. Tercero: de las malignas, ochenta por ciento son metástasis ganglionares, y el resto, tumores primarios como los linfomas.' },
        { show: ['es'], note: 'El primario está en la vía aerodigestiva superior',
          say: 'Y cuarto: de esas metástasis, ochenta por ciento vienen de un carcinoma escamoso de la vía aerodigestiva superior, por encima de las clavículas. Entonces, una masa pétrea e indolora en el cuello de un fumador mayor de cuarenta años es una metástasis de un carcinoma escamoso hasta demostrar lo contrario. Y hay que encontrar el tumor primario. Mira este cuello: una masa lateral, dura, en un hombre mayor.',
          photo: { src: 'biblioteca/17_otorrino/orl-20/03_masa-cervical-metastasica__openi.jpg', label: 'Masa cervical lateral', at: 'Mira este cuello', credit: 'Open-i (NLM), CC BY' } },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Estudio de la masa cervical',
      nodes: [
        { id: 'o1', col: 0, row: 1, k: 'start', t: '1. Examen ORL y nasofibroscopía', s: 'Cavum, orofaringe, hipofaringe, laringe' },
        { id: 'o2', col: 1, row: 1, k: 'good', t: '2. PAAF guiada por ecografía', s: 'Sensibilidad y especificidad sobre 95%' },
        { id: 'o3', col: 2, row: 1, k: 'mech', t: '3. TAC de cuello y tórax', s: 'Etapificación' },
        { id: 'bx', col: 1, row: 2, k: 'trap', t: 'Biopsia abierta del ganglio', s: 'Prohibida sin estudio previo' },
      ],
      edges: [
        { from: 'o1', to: 'o2' },
        { from: 'o2', to: 'o3' },
        { from: 'o2', to: 'bx', label: 'no' },
      ],
      steps: [
        { show: ['o1'], note: 'Primero buscar el tumor primario',
          say: 'La secuencia tiene un orden. Primero, examen otorrinolaringológico completo con nasofibroscopía: se recorre toda la mucosa del cavum, la orofaringe, la hipofaringe y la laringe, buscando el tumor primario.' },
        { show: ['o2', 'o3'], note: 'PAAF para confirmar, TAC para etapificar',
          say: 'Segundo, punción aspirativa con aguja fina, guiada por ecografía. Es el método de primera línea, con sensibilidad y especificidad sobre noventa y cinco por ciento, y no altera la anatomía del ganglio. Con eso se pide un escáner de cuello y tórax con contraste para etapificar.' },
        { show: ['bx'], note: 'Abrir el ganglio siembra el tumor',
          say: 'Y la prohibición: no se hace biopsia incisional ni escisional abierta del ganglio sin estudio previo. Abrir una adenopatía metastásica rompe las barreras fasciales del cuello, siembra células tumorales en el tejido subcutáneo, empeora la sobrevida y multiplica la recidiva cervical. Si el primario aparece, el ganglio se tratará junto con él.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha y prevención',
      title: 'Boca, laringe y nariz: cuándo sospechar y qué hacer',
      cards: [
        { title: 'Boca, labios y orofaringe', tag: 'Úlcera que no cicatriza', kind: 'alert', items: [
          { t: 'Lesión de más de 2 a 3 semanas, leucoplaquia, induración', d: 'Tabaco, alcohol, betel; VPH 16 en la orofaringe',
            say: 'El cáncer de boca, labios y orofaringe se sospecha ante una úlcera que no cicatriza en dos a tres semanas, leucoplaquia o eritroplasia, induración, sangrado o una adenopatía dura. Los factores son tabaco, alcohol, betel y, en la orofaringe, el virus del papiloma humano dieciséis.' },
          { t: 'Palpar, quitar irritantes, reevaluar a las 2 semanas', d: 'Si persiste: biopsia',
            say: 'Manejo inicial: palpas la lesión y el cuello, retiras irritantes y prótesis traumáticas, tratas la candidiasis o la infección, y reevalúas a las dos semanas. Si persiste, derivas para biopsia.' },
        ] },
        { title: 'Laringe', tag: 'Escamoso, glótico', kind: 'key', items: [
          { t: 'Disfonía persistente en fumador', d: 'Luego disfagia, otalgia refleja, hemoptisis, estridor, masa cervical',
            say: 'El cáncer laríngeo es casi siempre escamoso, y el glótico es el más frecuente. Se sospecha con disfonía de más de tres semanas en un fumador, y más tarde disfagia, otalgia refleja, hemoptisis, estridor o masa cervical. No lo manejas: derivas a laringoscopía y biopsia.' },
          { t: 'Prevención: tabaco y alcohol', d: 'Consejería breve, reemplazo de nicotina, vareniclina; reflujo; asbesto y polvos',
            say: 'La prevención es dejar el tabaco, con consejería breve, reemplazo de nicotina o vareniclina, y reducir el alcohol, que potencian su efecto, más el control del reflujo y la protección ante asbesto y polvos.' },
        ] },
        { title: 'Nariz y odinofagia crónica', tag: 'Banderas rojas', kind: 'pharma', items: [
          { t: 'Nasosinusal: obstrucción y epistaxis unilaterales', d: 'Madera, cuero, níquel, cromo; dolor o hipoestesia de la mejilla',
            say: 'El cáncer nasosinusal es raro, ligado a polvo de madera y cuero, níquel y cromo. Sospéchalo con obstrucción nasal unilateral persistente, epistaxis unilateral recurrente o rinorrea sanguinolenta, dolor o hipoestesia de la mejilla, proptosis o diplopía.' },
          { t: 'Odinofagia crónica con alarma', d: 'Unilateral, otalgia refleja, masa cervical, baja de peso, tabaco',
            say: 'La odinofagia de más de tres a cuatro semanas suele ser benigna, pero si es unilateral, con otalgia refleja, masa cervical, baja de peso y tabaquismo, derivas para endoscopía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adenitis cervical',
      title: 'El ganglio del cuello en el niño',
      cards: [
        { title: 'Adenitis aguda', tag: 'Reactiva o bacteriana', kind: 'key', items: [
          { t: 'Casi siempre reactiva o viral', d: 'Bacteriana: S. aureus o S. pyogenes',
            say: 'La adenitis cervical en el niño suele ser reactiva o viral. La bacteriana, por estafilococo dorado o estreptococo piógeno, da un ganglio unilateral, doloroso, caliente y rojo, con fiebre.' },
          { t: 'Amoxicilina con clavulánico o cefadroxilo, 10 días', d: 'Si fluctúa: ecografía y drenaje',
            say: 'Se trata diez días con amoxicilina con ácido clavulánico o cefadroxilo. Si fluctúa, se pide ecografía y se drena.' },
        ] },
        { title: 'Adenopatía de más de 3 semanas', tag: 'Subaguda o crónica', kind: 'criteria', items: [
          { t: 'Pensar en micobacterias, tuberculosis, Bartonella, toxoplasma, CMV, VEB', d: 'Estudio dirigido',
            say: 'Si dura más de tres semanas, piensa en micobacterias atípicas, tuberculosis ganglionar, enfermedad por arañazo de gato con Bartonella, toxoplasmosis, citomegalovirus y virus de Epstein-Barr.' },
        ] },
        { title: 'Señales de neoplasia', tag: 'Linfoma o leucemia', kind: 'alert', items: [
          { t: 'Mayor de 2 cm, duro, indoloro, fijo o supraclavicular', d: 'Crecimiento progresivo; fiebre, baja de peso, hepatoesplenomegalia',
            say: 'Son señales de alarma un ganglio mayor de dos centímetros, duro, indoloro y fijo, supraclavicular, de crecimiento progresivo, o con fiebre, baja de peso y hepatoesplenomegalia.' },
          { t: 'Hemograma, ecografía, PPD y biopsia', d: 'Sin corticoides antes del diagnóstico',
            say: 'Pides hemograma, ecografía, PPD y biopsia, y no das corticoides antes de tener un diagnóstico, porque pueden enmascarar un linfoma.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Masa cervical según la edad',
      head: ['Edad', 'Causa más frecuente', 'Ejemplos', 'Conducta inicial'],
      rows: [
        { cells: ['Menor de 15 años', 'Infecciosa o inflamatoria', 'Adenitis, adenoflemón', 'Antibiótico; ecografía si no cede'],
          say: 'Esta tabla separa por edad. En el niño, la masa cervical suele ser infecciosa, una adenitis reactiva o un adenoflemón. Se da antibiótico y se hace ecografía si no cede.' },
        { cells: ['16 a 40 años', 'Congénita, infecciosa o linfoma', 'Quiste tirogloso, quiste branquial, mononucleosis', 'Ecografía; PAAF si sospecha de linfoma'],
          say: 'En el adulto joven aparecen los quistes congénitos, como el tirogloso o el branquial, las infecciones como la mononucleosis, y el linfoma. Se hace ecografía y PAAF si se sospecha linfoma.' },
        { cells: ['Mayor de 40 años', 'Neoplásica maligna', 'Metástasis de carcinoma escamoso', 'PAAF y nasofibroscopía; no biopsia abierta'],
          say: 'Y en el mayor de cuarenta años, la causa más frecuente es la neoplasia maligna: la metástasis de un carcinoma escamoso. Se hace PAAF y nasofibroscopía urgente, y no biopsia abierta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la bandera roja o la masa cervical, al examen que se pide primero.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 58 años, fumador de 30 cigarrillos al día por 35 años y bebedor diario de vino, consulta por un aumento de volumen indoloro en la región lateral derecha del cuello, de 1 mes y creciente. Desde hace 3 semanas tiene un dolor punzante en el oído derecho al tragar, sin secreción ni sordera. Se palpa una masa de 3,5 cm en el nivel II derecho, pétrea, adherida a planos profundos e indolora. La otoscopía de ambos oídos es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Biopsia excisional del ganglio en pabellón' },
        { letter: 'B', text: 'Ciclo de cefadroxilo oral por 21 días y control' },
        { letter: 'C', text: 'Nasofibroscopía para buscar el tumor primario y PAAF guiada por ecografía' },
        { letter: 'D', text: 'Drenaje de la masa pensando en un quiste sebáceo' },
        { letter: 'E', text: 'Observar y reevaluar en 3 meses' },
      ],
      correct: 'C',
      explanation: 'Masa pétrea y fija en un fumador mayor de 40 años, más otalgia refleja con otoscopía normal: metástasis de un carcinoma escamoso de la vía aerodigestiva superior hasta demostrar lo contrario. Se hace examen ORL con nasofibroscopía y PAAF guiada por ecografía, y luego TAC para etapificar. Está prohibida la biopsia abierta sin estudio previo.',
      say: {
        stem: 'Un hombre de cincuenta y ocho años, fumador pesado y bebedor diario, con un mes de aumento de volumen indoloro en el cuello a la derecha, y tres semanas de dolor de oído derecho al tragar. La masa mide tres centímetros y medio, es pétrea y está adherida a planos profundos. La otoscopía es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: biopsia excisional del ganglio en pabellón; cefadroxilo por veintiún días; nasofibroscopía y punción con aguja fina guiada por ecografía; drenaje por sospecha de quiste sebáceo; u observar tres meses. Piénsalo.',
        answer: 'Es la C. Dos banderas rojas juntas: la masa pétrea del fumador mayor de cuarenta años y la otalgia refleja con oído normal. Hay que buscar el primario con nasofibroscopía y confirmar con punción. La A es la tentación: parece lógico sacar el ganglio y analizarlo. Pero abrirlo siembra el tumor y empeora el pronóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 62 años, fumador crónico, consulta por una masa en la región lateral izquierda del cuello de 4 semanas de evolución, indolora y pétrea, de 3 cm. Refiere además otalgia refleja izquierda ocasional con otoscopía normal.',
      question: '¿Cuál es el método de elección para la confirmación anatomopatológica y cuál procedimiento está formalmente contraindicado?',
      options: [
        { letter: 'A', text: 'Elección: biopsia incisional abierta en pabellón. Contraindicada: PAAF bajo ecografía' },
        { letter: 'B', text: 'Elección: PAAF guiada por ecografía. Contraindicada: biopsia ganglionar abierta antes de descartar un tumor primario en la vía aérea superior' },
        { letter: 'C', text: 'Elección: aspiración con trócar grueso por sospecha de quiste sebáceo. Contraindicada: tomografía computarizada' },
        { letter: 'D', text: 'Elección: exéresis de urgencia de la glándula tiroides. Contraindicada: nasofibroscopía flexible' },
        { letter: 'E', text: 'Elección: cefadroxilo oral por 21 días. Contraindicada: evaluación por otorrinolaringólogo' },
      ],
      correct: 'B',
      explanation: 'En un fumador mayor de 40 años, una masa cervical pétrea es una metástasis de carcinoma escamoso hasta demostrar lo contrario. La PAAF guiada por ecografía es el método citológico de primera línea y no disemina células. Está prohibida la biopsia abierta del ganglio sin evaluar antes la vía aérea superior y sin PAAF.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de sesenta y dos años, fumador crónico, con una masa pétrea e indolora de tres centímetros en el cuello, de cuatro semanas, y otalgia refleja con otoscopía normal.',
        question: '¿Cuál es el método de elección para confirmar el diagnóstico, y cuál procedimiento está contraindicado?',
        options: 'Las opciones son combinaciones. A: biopsia abierta como elección y punción como contraindicada. B: punción con aguja fina como elección y biopsia abierta como contraindicada. Las otras tres proponen un trócar grueso, quitar la tiroides o dar antibiótico. Piénsalo.',
        answer: 'Es la B. La punción aspirativa con aguja fina, guiada por ecografía, confirma sin alterar la anatomía. Y lo que está formalmente contraindicado es la biopsia abierta del ganglio antes de buscar el primario. La A es justamente el error al revés: cambia el método de elección por el prohibido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 7',
      stem: 'Un paciente de 66 años, fumador de 20 paquetes año, consulta por otalgia derecha, de algunos meses de evolución, asociado a odinofagia y disfagia, a lo que se le ha agregado atoramiento con algunos alimentos y cambios en la resonancia de la voz.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Cáncer de esófago' },
        { letter: 'B', text: 'Disfunción temporomandibular' },
        { letter: 'C', text: 'Cáncer de hipofaringe' },
        { letter: 'D', text: 'Faringitis crónica' },
        { letter: 'E', text: 'Cáncer de laringe' },
      ],
      correct: 'C',
      explanation: 'Es un cáncer de hipofaringe clásico. El cáncer de laringe suele presentar disfonía progresiva, sin los otros síntomas, y el cáncer de esófago presenta disfagia sin los otros síntomas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de sesenta y seis años, fumador, con meses de dolor de oído derecho, odinofagia y disfagia, a los que se agregan atoramientos con la comida y cambios en la resonancia de la voz.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de esófago; disfunción temporomandibular; cáncer de hipofaringe; faringitis crónica; o cáncer de laringe. Piénsalo.',
        answer: 'Es la C. Aquí está la otalgia refleja que vimos hoy, acompañada de disfagia, atoramiento y cambio en la resonancia de la voz, que es lo que produce un tumor en la hipofaringe. En el cáncer de laringe lo central sería la disfonía progresiva, y en el de esófago, la disfagia sola. Y la disfunción temporomandibular no explica nada de lo demás.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 2',
      stem: 'Un paciente de 58 años, fumador de 20 paquetes año, consulta por disfonía de 3 semanas de evolución, asociada a ligera odinofagia. Al examen físico, además, se palpa una adenopatía submandibular, de consistencia aumentada.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'TAC de cuello' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Ecografía de cuello' },
        { letter: 'D', text: 'Nasofibrolaringoscopía' },
        { letter: 'E', text: 'Endoscopía digestiva alta' },
      ],
      correct: 'D',
      explanation: 'Toda disfonía crónica se estudia con nasofibrolaringoscopía. Además, el cuadro sugiere un cáncer de laringe, así que con mayor razón está indicada.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve, y une esta clase con la de disfonía. Un paciente de cincuenta y ocho años, fumador, con tres semanas de disfonía, ligera odinofagia y una adenopatía submandibular de consistencia aumentada.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: escáner de cuello; escáner de tórax; ecografía de cuello; nasofibrolaringoscopía; o endoscopía digestiva alta. Piénsalo.',
        answer: 'Es la D. Este es el primer paso de la secuencia de hoy: antes que cualquier imagen, se mira la mucosa para encontrar el tumor primario. Aquí el primario casi seguro es la laringe, y la adenopatía dura es su metástasis. Las imágenes vienen después, para etapificar.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.004 · Cáncer de boca, labios y orofaringe",
      "stem": "Un hombre de 64 años, fumador de 40 paquetes-año y bebedor diario, consulta por una úlcera indolora de 1,5 cm, de bordes indurados, en el borde lateral izquierdo de la lengua, de 6 semanas de evolución. Hace 3 semanas se retiró una prótesis dental que la rozaba, pero la lesión no ha cicatrizado. No se palpan adenopatías cervicales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Enjuagues con clorhexidina y control en 3 meses"
        },
        {
          "letter": "B",
          "text": "Cauterización con nitrato de plata"
        },
        {
          "letter": "C",
          "text": "Aciclovir oral por 7 días"
        },
        {
          "letter": "D",
          "text": "Nistatina en suspensión oral"
        },
        {
          "letter": "E",
          "text": "Biopsia de la lesión"
        }
      ],
      "correct": "E",
      "explanation": "Una úlcera, leucoplaquia o eritroplasia que no cicatriza en 2 semanas, sobre todo indurada, en el borde lateral de la lengua de un fumador y bebedor, es un carcinoma escamoso hasta demostrar lo contrario. Se biopsia y se deriva a cabeza y cuello para etapificar. Observar o tratar empíricamente retrasa el diagnóstico.",
      "say": {
        "stem": "Hombre de sesenta y cuatro años, gran fumador y bebedor, con una úlcera indurada e indolora de un centímetro y medio en el borde de la lengua, de seis semanas. Ya se retiró la prótesis que la rozaba y la úlcera no cicatriza.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: enjuagues con clorhexidina y control, cauterización con nitrato de plata, aciclovir, nistatina o biopsia. Piénsalo.",
        "answer": "Es la E. Una úlcera indurada en el borde de la lengua que no cicatriza en dos semanas, en un fumador y bebedor, es un cáncer escamoso hasta demostrar lo contrario, y se biopsia. La clorhexidina con control tienta porque parece una úlcera traumática, pero ya retiraste la causa y no cicatrizó."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 80",
      "stem": "Adulto joven con una masa blanda palpable en la línea media del cuello, entre el mentón y el cartílago tiroides.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Adenoma tiroideo"
        },
        {
          "letter": "B",
          "text": "Quiste tirogloso"
        },
        {
          "letter": "C",
          "text": "Quiste branquial"
        },
        {
          "letter": "D",
          "text": "Linfadenitis cervical"
        },
        {
          "letter": "E",
          "text": "Lipoma cervical"
        }
      ],
      "correct": "B",
      "explanation": "El quiste tirogloso es la masa congénita más frecuente de la línea media del cuello; se ubica habitualmente a nivel o bajo el hueso hioides, por encima del tiroides, y asciende al protruir la lengua o deglutir. El quiste branquial, en cambio, es lateral, anterior al borde del esternocleidomastoideo.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Adulto joven con una masa blanda palpable en la línea media del cuello, entre el mentón y el cartílago tiroides.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: adenoma tiroideo, quiste tirogloso, quiste branquial, linfadenitis cervical, o lipoma cervical. Piénsalo.",
        "answer": "Es la B. Masa blanda en la línea media, por encima del tiroides, en un joven: quiste tirogloso, que además sube al sacar la lengua. El quiste branquial tienta por ser la otra masa congénita clásica, pero ese es lateral, por delante del esternocleidomastoideo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 142",
      "stem": "Un escolar de 6 años presenta aumento de volumen submandibular derecho, doloroso. Al examen físico se aprecia dicho aumento de volumen, de aspecto eritematoso, de 3 cm de diámetro, doloroso a la palpación.",
      "question": "¿Cuál es el agente etiológico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Bacteroides fragilis"
        },
        {
          "letter": "B",
          "text": "Peptoestreptococo"
        },
        {
          "letter": "C",
          "text": "Streptococcus pyogenes (grupo A)"
        },
        {
          "letter": "D",
          "text": "Staphylococcus aureus"
        },
        {
          "letter": "E",
          "text": "Escherichia coli"
        }
      ],
      "correct": "D",
      "explanation": "Una adenitis cervical aguda unilateral, eritematosa y dolorosa en un niño es una adenitis bacteriana piógena. Los agentes son Staphylococcus aureus y Streptococcus pyogenes; cuando el ganglio está inflamado y tiende a abscedarse, el más probable es S. aureus. Se trata con cefadroxilo o cloxacilina y drenaje si fluctúa.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un escolar de seis años tiene un aumento de volumen submandibular derecho, eritematoso y doloroso, de unos tres centímetros.",
        "question": "¿Cuál es el agente etiológico más probable?",
        "options": "Las opciones: Bacteroides, peptoestreptococo, estreptococo grupo A, estafilococo dorado o Escherichia coli. Piénsalo.",
        "answer": "Es la D. La adenitis cervical piógena unilateral, sobre todo cuando se inflama y tiende a abscedarse, es causada principalmente por estafilococo dorado. El estreptococo grupo A es el distractor tentador porque también la produce, pero es menos frecuente en la adenitis supurada."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.006 · Cáncer nasosinusal",
      "stem": "Hombre de 62 años, carpintero por 40 años, con obstrucción nasal izquierda progresiva de 4 meses, epistaxis unilateral recurrente, rinorrea fétida y parestesia de la mejilla izquierda. La rinoscopía muestra una masa friable en la fosa nasal izquierda.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Corticoide nasal y control en 3 meses"
        },
        {
          "letter": "B",
          "text": "Antibiótico por sinusitis bacteriana"
        },
        {
          "letter": "C",
          "text": "Cauterización de la epistaxis y alta"
        },
        {
          "letter": "D",
          "text": "Derivación prioritaria a otorrinolaringología para TAC o RM de cavidades paranasales y biopsia por sospecha de cáncer nasosinusal"
        },
        {
          "letter": "E",
          "text": "Polipectomía en atención primaria"
        }
      ],
      "correct": "D",
      "explanation": "Síntomas nasales unilaterales y progresivos (obstrucción, epistaxis, rinorrea fétida) con signos de invasión (hipoestesia del infraorbitario, diplopía, proptosis) en un adulto mayor son banderas rojas de cáncer nasosinusal. La exposición a polvo de madera se asocia a adenocarcinoma etmoidal. Requiere imagen y biopsia. Los pólipos inflamatorios suelen ser bilaterales.",
      "say": {
        "stem": "Carpintero de sesenta y dos años con obstrucción nasal izquierda progresiva, epistaxis del mismo lado, mal olor y hormigueo en la mejilla, con una masa friable en la fosa nasal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: corticoide nasal y control, antibiótico, cauterizar y alta, derivación prioritaria para imagen y biopsia o polipectomía en atención primaria. Piénsalo.",
        "answer": "Es la D. Síntomas nasales unilaterales con hipoestesia facial y masa friable son banderas rojas de cáncer nasosinusal y se derivan para imagen y biopsia. La sinusitis tienta por la rinorrea, pero no explica la masa ni la pérdida de sensibilidad."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.018 · Odinofagias crónicas",
      "stem": "Hombre de 60 años, fumador de 40 paquetes-año y bebedor intenso, con odinofagia derecha de 2 meses, otalgia refleja derecha y baja de 6 kg de peso. No tiene fiebre. Se palpa una adenopatía cervical derecha dura de 3 cm.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Amoxicilina por 10 días y control"
        },
        {
          "letter": "B",
          "text": "Ecografía tiroidea"
        },
        {
          "letter": "C",
          "text": "Inhibidor de bomba de protones por reflujo"
        },
        {
          "letter": "D",
          "text": "Antiinflamatorios y control en 3 meses"
        },
        {
          "letter": "E",
          "text": "Derivación prioritaria a otorrinolaringología para nasofibrolaringoscopía y biopsia por sospecha de cáncer de orofaringe, hipofaringe o laringe"
        }
      ],
      "correct": "E",
      "explanation": "La odinofagia persistente (más de 3 semanas), unilateral, con otalgia refleja, baja de peso y adenopatía cervical dura en un fumador y bebedor es un carcinoma escamoso de cabeza y cuello hasta demostrar lo contrario. Requiere examen endoscópico, biopsia de la lesión primaria y TAC cervical con contraste. No se debe tratar empíricamente con antibióticos de forma reiterada.",
      "say": {
        "stem": "Hombre de sesenta años, gran fumador y bebedor, con dos meses de dolor al tragar del lado derecho, dolor de oído del mismo lado, baja de peso y un ganglio cervical duro.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: amoxicilina, ecografía tiroidea, inhibidor de bomba de protones, antiinflamatorios y control o derivación prioritaria para endoscopía y biopsia. Piénsalo.",
        "answer": "Es la E. Odinofagia unilateral persistente con otalgia refleja, baja de peso y ganglio duro en un fumador es un cáncer de cabeza y cuello hasta probar lo contrario. El antibiótico tienta, pero solo retrasa el diagnóstico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.3.004 · Prevención de cáncer laríngeo",
      "stem": "Hombre de 50 años, fumador de 30 paquetes-año y consumidor de alcohol diario, consulta en APS por un control preventivo. No tiene síntomas.",
      "question": "¿Cuál es la medida más efectiva para prevenir el cáncer de laringe en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Nasofibrolaringoscopía anual de tamizaje"
        },
        {
          "letter": "B",
          "text": "Antiinflamatorios diarios"
        },
        {
          "letter": "C",
          "text": "Vitamina E diaria"
        },
        {
          "letter": "D",
          "text": "Cesación tabáquica y reducción del consumo de alcohol"
        },
        {
          "letter": "E",
          "text": "Reposo vocal"
        }
      ],
      "correct": "D",
      "explanation": "El tabaco es el principal factor de riesgo de cáncer de laringe y el alcohol potencia su efecto en forma sinérgica. La prevención primaria es la cesación tabáquica y la reducción del alcohol. No existe tamizaje poblacional recomendado; la clave es la detección precoz de síntomas: toda disfonía de más de 3 semanas en un fumador debe evaluarse con laringoscopía.",
      "say": {
        "stem": "Hombre de cincuenta años, fumador y bebedor diario, sin síntomas, en control preventivo.",
        "question": "¿Cuál es la medida más efectiva para prevenir el cáncer de laringe?",
        "options": "Las opciones: laringoscopía anual, antiinflamatorios diarios, vitamina E, dejar de fumar y reducir el alcohol o reposo vocal. Piénsalo.",
        "answer": "Es la D. Dejar de fumar y reducir el alcohol es la prevención más efectiva, porque son sus principales factores y potencian su efecto. La laringoscopía anual tienta, pero no existe tamizaje recomendado; se estudia ante disfonía de más de tres semanas."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cáncer de cabeza y cuello',
      cards: [
        { title: 'Reconocerlo', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Escamoso en más del 90%', d: 'Tabaco y alcohol; VPH-16 en orofaringe',
            say: 'Cerremos con las reglas de oro. El cáncer de cabeza y cuello es carcinoma escamoso en más del noventa por ciento, por tabaco y alcohol, y por virus del papiloma humano en la orofaringe del adulto joven.' },
          { t: 'Otalgia con otoscopía normal', d: 'Más disfonía larga o úlcera que no cierra',
            say: 'Las banderas rojas: otalgia unilateral con oído normal, disfonía de más de tres semanas, y úlcera o placa de la boca que no cicatriza.' },
        ] },
        { title: 'Estudiarlo', tag: 'Secuencia', kind: 'key', items: [
          { t: 'Masa pétrea mayor de 40: cáncer', d: 'Nasofibroscopía y PAAF por ecografía',
            say: 'Una masa cervical pétrea en un fumador mayor de cuarenta años es una metástasis de carcinoma escamoso, hasta demostrar lo contrario. Se estudia con nasofibroscopía y punción con aguja fina guiada por ecografía.' },
          { t: 'Nunca biopsia abierta del ganglio', d: 'Siembra el tumor y empeora el pronóstico',
            say: 'Si te llevas una sola idea de hoy: la masa cervical del fumador mayor de cuarenta años se estudia con nasofibroscopía y punción, y jamás con biopsia abierta del ganglio. Y con esto cerramos el libro de otorrinolaringología. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de banderas rojas y masa cervical en el adulto',
    root: N('start', 'Adulto con sospecha oncológica', '¿Qué bandera roja tiene?',
      'Un adulto, sobre todo fumador, con una posible bandera roja oncológica. Veamos cuál.',
      ['Masa cervical pétrea', N('alert', 'Metástasis de escamoso', 'Hasta demostrar lo contrario',
        'Una masa cervical pétrea en un fumador mayor de cuarenta años es una metástasis de carcinoma escamoso hasta demostrar lo contrario.',
        ['Estudio inicial', N('do', 'Nasofibroscopía y PAAF por ecografía', 'Buscar el tumor primario',
          'Se hace nasofibroscopía completa y punción con aguja fina guiada por ecografía.',
          ['PAAF positiva', N('refer', 'TAC y derivación oncológica', 'Etapificación',
            'Con la confirmación, se pide escáner de cuello y tórax y se deriva a oncología de cabeza y cuello.')],
        )],
        ['Biopsia abierta', N('alert', 'Prohibida sin estudio previo', 'Siembra el tumor',
          'La biopsia incisional o escisional abierta está prohibida sin estudio previo: siembra el tumor.')],
      )],
      ['Disfonía de más de 3 semanas', N('do', 'Nasofibroscopía', 'Descartar cáncer de laringe',
        'La disfonía persistente en un fumador se estudia con nasofibroscopía, como vimos en la clase de disfonía.')],
      ['Otalgia unilateral, otoscopía normal', N('do', 'Examinar faringe y laringe', 'Nasofibroscopía',
        'Es dolor referido: se busca el primario en la base de lengua, amígdala, hipofaringe o laringe.')],
      ['Úlcera o placa oral, más de 2 semanas', N('refer', 'Derivar y biopsiar', 'Leucoplaquia o eritroplasia',
        'Una úlcera indurada o una placa blanca o roja que no cicatriza se deriva y se biopsia.')],
      ['Obstrucción nasal o efusión unilateral', N('refer', 'Sospecha de cáncer de cavum', 'Nasofibroscopía y biopsia',
        'En un adulto, obstrucción nasal o otitis con efusión de un solo lado hace sospechar un cáncer de cavum.')],
    ),
  },
};
