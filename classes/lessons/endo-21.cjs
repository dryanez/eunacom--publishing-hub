// Clase 7.21 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primero descartar lo que no es tumor; si es prolactinoma, se trata con pastillas',
      say: 'Bienvenidos. En la clase anterior vimos las masas de la silla turca; hoy vemos la más frecuente de todas y el trastorno hipofisario que más vas a ver en la consulta: la hiperprolactinemia y el prolactinoma. El examen pregunta dos cosas una y otra vez: qué descartas antes de pensar en un tumor, y por qué este es el único adenoma que no se opera de entrada. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una hormona que vive frenada',
      nodes: [
        { id: 'dop', col: 0, row: 1, k: 'mech', t: 'Dopamina hipotalámica', s: 'Freno tónico sobre el lactotropo' },
        { id: 'far', col: 0, row: 0, k: 'cause', t: 'Fármacos anti-D2', s: 'Bloquean el freno' },
        { id: 'tal', col: 0, row: 2, k: 'cause', t: 'Compresión del tallo', s: 'La dopamina no llega' },
        { id: 'trh', col: 1, row: 3, k: 'cause', t: 'Hipotiroidismo primario', s: 'La TRH estimula prolactina' },
        { id: 'prl', col: 2, row: 1, k: 'effect', t: 'Prolactina alta', s: 'Hiperprolactinemia' },
        { id: 'tum', col: 1, row: 0, k: 'risk', t: 'Prolactinoma', s: '40–50 % de los adenomas' },
        { id: 'gnrh', col: 3, row: 1, k: 'mech', t: 'Frena la GnRH', s: 'Hipogonadismo hipogonadotropo' },
        { id: 'cli', col: 4, row: 1, k: 'alert', t: 'Amenorrea, infertilidad, disfunción eréctil', s: 'Y galactorrea' },
      ],
      edges: [
        { from: 'far', to: 'dop', label: 'bloquean' },
        { from: 'tal', to: 'dop', label: 'desconecta' },
        { from: 'dop', to: 'prl', label: 'si falla' },
        { from: 'trh', to: 'prl' },
        { from: 'tum', to: 'prl', label: 'autónomo' },
        { from: 'prl', to: 'gnrh' },
        { from: 'gnrh', to: 'cli' },
      ],
      steps: [
        { show: ['dop'], note: 'La única hormona hipofisaria que vive frenada',
          say: 'Empecemos por lo que hace distinta a la prolactina. Las demás hormonas de la hipófisis anterior necesitan un estímulo del hipotálamo. La prolactina es al revés: vive frenada por la dopamina, que llega a la hipófisis y actúa sobre los receptores de dopamina tipo dos del lactotropo.' },
        { show: ['prl'], note: 'Si el freno falla, sube',
          say: 'Entonces, cualquier cosa que suelte ese freno hace subir la prolactina. Con esa idea puedes deducir casi todas las causas, sin memorizarlas.' },
        { show: ['far'], note: 'Antipsicóticos, metoclopramida, domperidona',
          say: 'La primera: los fármacos que bloquean ese receptor de dopamina. Antipsicóticos, antieméticos como la metoclopramida y la domperidona. Son muy frecuentes en atención primaria.' },
        { show: ['tal'], note: 'Efecto tallo: elevación moderada',
          say: 'La segunda: cualquier masa de la silla turca que comprima el tallo hipofisario. La dopamina no alcanza a llegar, y la prolactina sube aunque el tumor no la fabrique. Es el efecto tallo, o desconexión.' },
        { show: ['trh'], note: 'TSH alta con TRH alta',
          say: 'La tercera no pasa por la dopamina: el hipotiroidismo primario. El hipotálamo sube la TRH para estimular la tiroides, y la TRH es también un potente liberador de prolactina. Al tratar con levotiroxina, la prolactina se normaliza.' },
        { show: ['tum'], note: 'El adenoma más frecuente',
          say: 'Y recién ahí aparece el tumor: el prolactinoma, que secreta prolactina de forma autónoma. Es el adenoma hipofisario más frecuente, entre el cuarenta y el cincuenta por ciento de todos.' },
        { show: ['gnrh', 'cli'], note: 'La prolactina apaga el eje gonadal',
          say: '¿Y por qué da amenorrea? Porque el exceso de prolactina inhibe la secreción pulsátil de GnRH. Sin ese pulso bajan la LH y la FSH, y el resultado es un hipogonadismo hipogonadotropo: amenorrea e infertilidad en la mujer, disfunción eréctil en el hombre, además de la galactorrea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Antes de pensar en tumor',
      title: 'La regla del descarte previo',
      cards: [
        { title: 'Fisiológicas', tag: 'Siempre primero', kind: 'alert', items: [
          { t: 'Embarazo: beta-hCG', d: 'En toda mujer fértil con amenorrea',
            say: 'Ante una prolactina alta, lo primero no es la resonancia. Lo primero es descartar las causas que no son tumor. Y la número uno es el embarazo: en toda mujer en edad fértil con amenorrea y galactorrea se pide una beta-hCG.' },
          { t: 'Lactancia, estrés, venopunción', d: 'Estimulación del pezón o coito reciente',
            say: 'También suben la prolactina la lactancia, el estrés físico, una venopunción traumática, la estimulación del pezón o un coito reciente. Por eso se mide en ayunas, en reposo de treinta minutos y sin estrés.' },
        ] },
        { title: 'Fármacos', tag: 'Muy frecuentes en APS', kind: 'pharma', items: [
          { t: 'Risperidona, haloperidol', d: 'La risperidona es el más potente',
            say: 'Luego se revisan los fármacos. Los antipsicóticos, típicos como el haloperidol y la clorpromazina, o atípicos como la risperidona, que es el más potente de todos.' },
          { t: 'Metoclopramida, domperidona', d: 'También ISRS, tricíclicos, verapamilo, opiáceos',
            say: 'Además, la metoclopramida y la domperidona, los antidepresivos tricíclicos y los inhibidores de la recaptación de serotonina, el verapamilo y los opiáceos. Un dato útil: los fármacos suelen dejar la prolactina entre treinta y cien, y rara vez sobre ciento cincuenta.' },
        ] },
        { title: 'Sistémicas', tag: 'Medir TSH', kind: 'criteria', items: [
          { t: 'Hipotiroidismo primario', d: 'Se corrige con levotiroxina',
            say: 'Y siempre se mide la TSH, porque el hipotiroidismo primario eleva la prolactina por la vía de la TRH. Si esa es la causa, lo que se trata es la tiroides, no la hipófisis.' },
          { t: 'Insuficiencia renal y cirrosis', d: 'Menor aclaramiento',
            say: 'Por último, la insuficiencia renal crónica y la cirrosis, porque la prolactina se elimina más lento. Recién descartado todo esto, se piensa en un prolactinoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Mujer joven y varón tardío',
      cards: [
        { title: 'En la mujer', tag: 'Amenorrea-galactorrea', kind: 'key', items: [
          { t: 'Oligomenorrea o amenorrea', d: 'Anovulación e infertilidad',
            say: 'La presentación depende del sexo. En la mujer en edad reproductiva es el síndrome de amenorrea-galactorrea. Lo que la trae es la falta de reglas o la infertilidad, por la anovulación crónica que vimos en el mecanismo.' },
          { t: 'Galactorrea en 50–80 %', d: 'Espontánea o a la expresión',
            say: 'La galactorrea aparece en la mitad a cuatro de cada cinco pacientes, espontánea o al comprimir la mama. Y como hay hipoestrogenismo, también sequedad vaginal con dispareunia, y una osteopenia acelerada.' },
        ] },
        { title: 'En el varón', tag: 'Macroadenoma', kind: 'alert', items: [
          { t: 'Debut tardío e insidioso', d: 'Tumor de más de 10 mm',
            say: 'En el hombre la historia es otra. Los síntomas del hipogonadismo se ignoran por años, así que el diagnóstico llega tarde, cuando el tumor ya es un macroadenoma de más de diez milímetros.' },
          { t: 'Libido baja, disfunción eréctil', d: 'Atrofia testicular, ginecomastia',
            say: 'Consulta por baja de la libido, disfunción eréctil, infertilidad, atrofia testicular, pérdida de vello o ginecomastia. La galactorrea es rara en el hombre.' },
          { t: 'Cefalea y hemianopsia bitemporal', d: 'Compresión del quiasma',
            say: 'Y como el tumor es grande, se suman síntomas de masa: cefalea y hemianopsia bitemporal por compresión del quiasma. Ese hombre que choca con los muebles y tiene disfunción eréctil es un clásico de las preguntas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El valor de la prolactina orienta la causa',
      nodes: [
        { id: 'prl', col: 0, row: 1, k: 'start', t: 'Prolactina > 25 ng/mL', s: 'En ayunas y en reposo' },
        { id: 'baj', col: 1, row: 0, k: 'cause', t: '25 a 100', s: 'Fármacos, hipotiroidismo, estrés, microadenoma' },
        { id: 'med', col: 1, row: 1, k: 'risk', t: '100 a 200', s: 'Prolactinoma o efecto tallo' },
        { id: 'alt', col: 1, row: 2, k: 'alert', t: 'Sobre 200 a 250', s: 'Macroprolactinoma casi seguro' },
        { id: 'des', col: 2, row: 0, k: 'mech', t: 'Descartar y repetir', s: 'Fármacos, TSH, beta-hCG' },
        { id: 'rm', col: 2, row: 1, k: 'good', t: 'RM de silla turca', s: 'Con gadolinio' },
        { id: 'cab', col: 3, row: 2, k: 'good', t: 'Cabergolina + campimetría', s: 'Evaluar el quiasma' },
      ],
      edges: [
        { from: 'prl', to: 'baj' }, { from: 'prl', to: 'med' }, { from: 'prl', to: 'alt' },
        { from: 'baj', to: 'des' }, { from: 'med', to: 'rm' }, { from: 'alt', to: 'rm' },
        { from: 'des', to: 'rm', label: 'si persiste' }, { from: 'alt', to: 'cab' },
      ],
      steps: [
        { show: ['prl'], note: 'Bien tomada: ayuno, reposo, sin estrés',
          say: 'Con el descarte en mente, veamos cómo leer el número. Se habla de hiperprolactinemia sobre veinticinco nanogramos por mililitro, medida en ayunas, sin estrés y tras treinta minutos de reposo.' },
        { show: ['baj', 'des'], note: 'Aquí viven los fármacos y la tiroides',
          say: 'Entre veinticinco y cien, las causas más probables son justamente las que acabamos de descartar: fármacos, hipotiroidismo, estrés, o un microprolactinoma. La conducta es revisar los fármacos, pedir TSH y beta-hCG, y repetir la prolactina en reposo.' },
        { show: ['med', 'rm'], note: 'Ahora sí, imagen',
          say: 'Entre cien y doscientos, el prolactinoma pasa a ser muy probable, o una masa que comprime el tallo. Aquí se pide la resonancia de silla turca con gadolinio. Y fíjate en un detalle: el efecto tallo rara vez supera cien a ciento cincuenta.' },
        { show: ['alt', 'cab'], note: 'Casi cien por ciento específico',
          say: 'Y sobre doscientos a doscientos cincuenta, es prácticamente un macroprolactinoma. Se confirma con la resonancia, se inicia cabergolina y se pide una campimetría computarizada para evaluar el quiasma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'El único adenoma que se trata con pastillas',
      cards: [
        { title: 'Cabergolina', tag: 'Primera línea absoluta', kind: 'pharma', items: [
          { t: 'Agonista D2 de acción prolongada', d: '0,5 mg VO 1–2 veces por semana',
            say: 'Y llegamos a la regla de oro del tema. El prolactinoma es el único adenoma hipofisario cuyo tratamiento de primera línea es médico y no quirúrgico. El fármaco es la cabergolina, un agonista dopaminérgico: devuelve el freno que falta. Se da medio miligramo por vía oral una a dos veces por semana, con las comidas.' },
          { t: 'Normaliza prolactina en 85–90 %', d: 'Reduce el tumor en más del 80 %',
            say: 'Normaliza la prolactina en más del ochenta y cinco a noventa por ciento, recupera las reglas y la fertilidad, y achica el tumor en más del ochenta por ciento. Por eso supera a la bromocriptina, y además se tolera mejor: solo náuseas o mareo leve.' },
        ] },
        { title: 'Incluso con hemianopsia', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Micro o macro: igual cabergolina', d: 'Libera el quiasma en semanas',
            say: 'Y esto vale para cualquier tamaño, incluso un macroadenoma con hemianopsia bitemporal. La tentación es mandarlo a pabellón para descomprimir, pero la cabergolina encoge el tumor y libera el quiasma en semanas.' },
        ] },
        { title: 'Cirugía transesfenoidal', tag: 'Excepción', kind: 'criteria', items: [
          { t: 'Resistencia o intolerancia', d: 'A dosis máximas de cabergolina',
            say: 'La cirugía transesfenoidal queda solo para la resistencia demostrada, es decir, el tumor que no se achica con dosis máximas, o la intolerancia severa al fármaco.' },
          { t: 'Apoplejía con fístula de LCR', d: 'La otra indicación',
            say: 'La otra indicación es la apoplejía tumoral con fístula de líquido cefalorraquídeo, que conecta con la clase anterior.' },
          { t: 'Control: prolactina a los 3 meses', d: 'RM al año; ecocardiograma si dosis altas',
            say: 'El seguimiento es con prolactina a los tres meses, una resonancia de control al año para ver la reducción del tumor, y ecocardiograma si se usan dosis altas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol que vas a recorrer en el examen: descartar, medir, y recién ahí tratar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que se pregunta y cómo se cae',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Amenorrea + galactorrea', 'Beta-hCG primero; luego prolactina y TSH', 'Resonancia de entrada'],
          say: 'Repasemos las trampas. Amenorrea con galactorrea: primero la beta-hCG, después prolactina y TSH. El error es pedir una resonancia de entrada.' },
        { cells: ['Usuaria de risperidona, prolactina 58', 'Causa farmacológica', 'Buscar un macroprolactinoma'],
          say: 'Paciente con risperidona y prolactina de cincuenta y ocho: es el fármaco. El valor bajo cien y el antipsicótico lo explican.' },
        { cells: ['Prolactina alta con TSH alta', 'Tratar el hipotiroidismo', 'Iniciar cabergolina'],
          say: 'Prolactina alta con TSH alta: se trata el hipotiroidismo con levotiroxina, y la prolactina baja sola.' },
        { cells: ['Prolactinoma de cualquier tamaño', 'Cabergolina', 'Cirugía transesfenoidal de entrada'],
          say: 'Prolactinoma, sea micro o macro: cabergolina. La cirugía de entrada es la respuesta incorrecta más clásica del tema.' },
        { cells: ['Hombre con disfunción eréctil y hemianopsia', 'RM de silla turca', 'Pensar solo en causa testicular'],
          say: 'Y el hombre con disfunción eréctil y alteración del campo visual temporal: resonancia de silla turca. No es un problema testicular, es un macroadenoma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, nulípara, con amenorrea secundaria de 8 meses y galactorrea bilateral espontánea desde hace 4 meses. No usa fármacos. Campo visual normal. Beta-hCG negativa, TSH 1,8 mUI/L. Prolactina en reposo 165 ng/mL (VN < 25). RM de silla turca: lesión intraselar de 7 mm compatible con microadenoma.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Cirugía transesfenoidal' },
        { letter: 'B', text: 'Cabergolina oral' },
        { letter: 'C', text: 'Anticonceptivos orales combinados' },
        { letter: 'D', text: 'Levotiroxina' },
        { letter: 'E', text: 'Radiocirugía estereotáxica' },
      ],
      correct: 'B',
      explanation: 'Microprolactinoma con amenorrea-galactorrea, con embarazo, hipotiroidismo y fármacos descartados. El tratamiento de primera línea de todo prolactinoma es médico con cabergolina: normaliza la prolactina, restablece ciclos ovulatorios y fertilidad, y reduce el tumor en más del 80 %.',
      say: {
        stem: 'Vamos al caso. Mujer de veintiséis años, nulípara, con ocho meses de amenorrea y galactorrea bilateral desde hace cuatro. No usa fármacos y el campo visual es normal. La beta-hCG es negativa, la TSH es normal, y la prolactina en reposo es ciento sesenta y cinco. La resonancia muestra una lesión de siete milímetros, un microadenoma.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las alternativas: cirugía transesfenoidal, cabergolina oral, anticonceptivos combinados, levotiroxina, o radiocirugía. Piénsalo.',
        answer: 'Es la B, cabergolina. Fíjate que el enunciado hizo todo el descarte por ti: sin embarazo, TSH normal y sin fármacos. Con un microprolactinoma, el tratamiento es médico. La cirugía es la trampa, porque es lo que se hace con los otros adenomas, pero el prolactinoma es la excepción. Y los anticonceptivos harían sangrar, pero no tratan el tumor ni devuelven la fertilidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 131',
      stem: 'Una paciente de 25 años, sin antecedentes de importancia, consulta por mastalgia bilateral de 5 días de evolución. Al examen físico, se observa galactorrea bilateral al comprimir los pezones. Su FUR fue hace 12 días y no toma medicamentos. ¿Cuál es el examen más adecuado para iniciar el estudio?',
      question: '¿Cuál es el examen más adecuado para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Subunidad beta de gonadotropina coriónica humana en plasma' },
        { letter: 'B', text: 'Prolactinemia' },
        { letter: 'C', text: 'Resonancia magnética de silla turca' },
        { letter: 'D', text: 'Ecotomografía mamaria' },
        { letter: 'E', text: 'Mamografía' },
      ],
      correct: 'A',
      explanation: 'Ante galactorrea, lo primero es descartar embarazo, aunque la FUR sea reciente. Luego se busca hiperprolactinemia, cuya causa principal son los fármacos y después los adenomas hipofisarios.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de julio de dos mil veinticuatro. Paciente de veinticinco años con mastalgia bilateral de cinco días y galactorrea bilateral al comprimir los pezones. Su última regla fue hace doce días y no toma medicamentos.',
        question: '¿Cuál es el examen más adecuado para iniciar el estudio?',
        options: 'Las opciones: beta-hCG en plasma, prolactinemia, resonancia de silla turca, ecografía mamaria, o mamografía. Piénsalo.',
        answer: 'Es la A, la beta-hCG. Es la regla del descarte previo aplicada al pie de la letra: ante una galactorrea, lo primero es descartar el embarazo, aunque la regla haya sido hace doce días. La prolactinemia es el distractor tentador, y es el paso siguiente, pero no el primero. Y la resonancia está dos pasos más allá.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 79',
      stem: 'Una paciente de 26 años, sin antecedentes mórbidos, consulta por historia de tres meses de amenorrea asociada a galactorrea, sin otros síntomas, con prueba de detección de bHCG en orina negativa en dos oportunidades. Su examen físico resulta normal, su índice de masa corporal es de 20.',
      question: 'El examen de elección para iniciar el estudio en este caso es:',
      options: [
        { letter: 'A', text: 'Hormona estimulante tiroidea' },
        { letter: 'B', text: 'Prueba de progesterona' },
        { letter: 'C', text: 'Ecografía transvaginal' },
        { letter: 'D', text: 'Prolactina' },
        { letter: 'E', text: 'Prueba de estrógeno más progesterona' },
      ],
      correct: 'D',
      explanation: 'Síndrome de amenorrea-galactorrea con embarazo descartado: es una hiperprolactinemia hasta demostrar lo contrario, y se inicia el estudio con prolactina.',
      say: {
        stem: 'Una del EUNACOM de julio de dos mil trece. Paciente de veintiséis años con tres meses de amenorrea y galactorrea, con dos pruebas de embarazo en orina negativas. Examen físico normal e índice de masa corporal de veinte.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las alternativas: TSH, prueba de progesterona, ecografía transvaginal, prolactina, o prueba de estrógeno más progesterona. Piénsalo.',
        answer: 'Es la D, prolactina. Compárala con la anterior: aquí el embarazo ya está descartado dos veces, así que el paso siguiente es medir la prolactina. Amenorrea con galactorrea sin embarazo es hiperprolactinemia. La TSH también se pide, pero la galactorrea te lleva primero a la prolactina. Y las pruebas de progesterona son para la amenorrea sin galactorrea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 24',
      stem: 'Una paciente de 32 años, consulta por un cuadro de 6 meses de amenorrea, asociado a secreción mamaria bilateral. No utiliza método anticonceptivo y es sexualmente activa. Además, ha presentado cefalea que ha aumentado en las últimas semanas, de predominio matinal. Al examen mamario se objetiva escasa galactorrea y al examen neurológico se constata presencia de una hemianopsia bitemporal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Craneofaringioma' },
        { letter: 'B', text: 'Macroadenoma hipofisiario' },
        { letter: 'C', text: 'Glioma cerebral' },
        { letter: 'D', text: 'Apoplejía hipofisiaria' },
        { letter: 'E', text: 'Accidente vascular encefálico' },
      ],
      correct: 'B',
      explanation: 'La hemianopsia bitemporal indica compresión del quiasma, y la amenorrea-galactorrea indica hiperprolactinemia: macroadenoma hipofisario. La apoplejía se distingue por cefalea intensa y súbita.',
      say: {
        stem: 'Otra del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y dos años con seis meses de amenorrea y secreción mamaria bilateral, y una cefalea matinal que ha ido aumentando. Al examen hay escasa galactorrea y una hemianopsia bitemporal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: craneofaringioma, macroadenoma hipofisario, glioma, apoplejía hipofisaria, o accidente vascular. Piénsalo.',
        answer: 'Es la B, macroadenoma hipofisario. La amenorrea con galactorrea te dice prolactina alta, y la hemianopsia bitemporal te dice que algo comprime el quiasma: un tumor de más de diez milímetros. La apoplejía es el distractor, pero sería una cefalea brusca e intensa, no progresiva en semanas. Y recuerda la conducta: aunque haya hemianopsia, si es un prolactinoma se parte con cabergolina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 123',
      stem: 'Paciente con astenia, disminución de la libido, disfunción eréctil progresiva y alteración visual en zonas temporales.',
      question: '¿Cuál es el examen de elección?',
      options: [
        { letter: 'A', text: 'RNM de silla turca' },
        { letter: 'B', text: 'Campo visual computarizado' },
        { letter: 'C', text: 'TAC de cerebro con contraste' },
        { letter: 'D', text: 'Testosterona total sérica y FSH/LH' },
        { letter: 'E', text: 'Ecografía testicular bilateral' },
      ],
      correct: 'A',
      explanation: 'Hipogonadismo en un varón con defecto del campo visual temporal: masa selar que comprime el quiasma, típicamente un macroadenoma. El examen de elección es la resonancia de silla turca.',
      say: {
        stem: 'La última, del EUNACOM de enero de dos mil veintitrés. Paciente con astenia, baja de la libido, disfunción eréctil progresiva y alteración de la visión en las zonas temporales.',
        question: '¿Cuál es el examen de elección?',
        options: 'Las alternativas: resonancia de silla turca, campo visual computarizado, TAC de cerebro con contraste, testosterona con FSH y LH, o ecografía testicular. Piénsalo.',
        answer: 'Es la A, resonancia de silla turca. Es el varón que describimos en la clínica: hipogonadismo que se ignoró por años y que llega con un macroadenoma que ya toca el quiasma. La ecografía testicular es la trampa, porque el problema no está en el testículo. Y el campo visual confirma el defecto, pero no muestra la causa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Descartar primero', tag: 'Antes del tumor', kind: 'alert', items: [
          { t: 'Beta-hCG, TSH y fármacos', d: 'En ese orden',
            say: 'Cerremos con las reglas de oro. Ante una prolactina alta, primero se descarta lo que no es tumor: embarazo con beta-hCG, hipotiroidismo con TSH, y los fármacos, sobre todo risperidona, haloperidol y metoclopramida.' },
          { t: 'Sobre 100–200: prolactinoma', d: 'Confirmar con RM de silla turca',
            say: 'Un valor sobre cien a doscientos es casi siempre un prolactinoma, y se confirma con resonancia de silla turca.' },
        ] },
        { title: 'Tratamiento', tag: 'La excepción', kind: 'pharma', items: [
          { t: 'Cabergolina en todo prolactinoma', d: 'Micro, macro, con o sin hemianopsia',
            say: 'El prolactinoma, sea micro o macro, se trata con cabergolina, incluso con hemianopsia. Es el único adenoma que no se opera de entrada.' },
          { t: 'Cirugía solo si resistencia', d: 'O intolerancia severa',
            say: 'La cirugía transesfenoidal queda para la resistencia o la intolerancia. Si te llevas una sola idea de hoy: antes de buscar el tumor, descarta embarazo, tiroides y fármacos; y si es prolactinoma, se trata con pastillas, no con bisturí. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiperprolactinemia: descartar, medir, tratar',
    root: N('start', 'Amenorrea-galactorrea', 'O hipogonadismo en el varón',
      'Mujer con amenorrea y galactorrea, o un varón con disfunción eréctil y baja de la libido. Antes de pensar en la hipófisis, hay tres preguntas que hacer.',
      ['', N('q', '¿Beta-hCG positiva?', 'Siempre lo primero',
        'La primera es el embarazo. En toda mujer en edad fértil, beta-hCG antes que cualquier otro examen.',
        ['SÍ', N('ok', 'Embarazo', 'Hiperprolactinemia fisiológica',
          'Si es positiva, es un embarazo, y la prolactina alta es fisiológica. No hay nada más que estudiar.')],
        ['NO', N('q', '¿TSH alta o fármaco anti-D2?', 'Hipotiroidismo o antipsicótico',
          'Si es negativa, se mide la TSH y se revisan los fármacos: antipsicóticos, metoclopramida, domperidona.',
          ['TSH alta', N('do', 'Tratar el hipotiroidismo', 'La prolactina se normaliza',
            'Si la TSH está alta, se trata el hipotiroidismo con levotiroxina y la prolactina baja sola.')],
          ['Fármaco', N('do', 'Causa farmacológica', 'Prolactina habitualmente 30–100',
            'Si toma un bloqueador de dopamina y la prolactina está entre treinta y cien, la causa es el fármaco, y no hace falta resonancia.')],
          ['Ninguno', N('q', 'RM de silla turca', 'Prolactina persistentemente alta',
            'Si no hay embarazo, ni hipotiroidismo, ni fármaco, y la prolactina sigue alta, se pide resonancia de silla turca con gadolinio.',
            ['Prolactinoma', N('alert', 'Cabergolina', 'Micro o macro, incluso con hemianopsia',
              'Si muestra un prolactinoma, cualquiera sea su tamaño, el tratamiento es cabergolina. Si hay macroadenoma, se agrega campimetría.')],
            ['Resistente', N('refer', 'Cirugía transesfenoidal', 'Resistencia o intolerancia',
              'Y solo si hay resistencia a dosis máximas, o intolerancia severa, se deriva a cirugía transesfenoidal.')])])])]),
  },
};
