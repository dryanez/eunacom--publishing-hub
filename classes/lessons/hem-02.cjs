// Clase 8.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ferritina y transferrina: dos proteínas que se mueven en sentido contrario',
      say: 'Bienvenidos. En la clase anterior dejamos una tarea: frente a una anemia microcítica, el siguiente paso es el perfil de hierro. Hoy aprendemos a leerlo. Es uno de los exámenes más preguntados del EUNACOM, y se entiende con una sola idea: la ferritina y la transferrina se mueven en sentido contrario, y la inflamación las cambia a las dos. Si entiendes eso, separas la ferropenia de la anemia de enfermedades crónicas sin memorizar tablas.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'Por qué la ferritina y la transferrina se cruzan',
      nodes: [
        { id: 'fal', col: 0, row: 0, k: 'cause', t: 'Faltan depósitos', s: 'Ferropenia' },
        { id: 'fe1', col: 1, row: 0, k: 'effect', t: 'Ferritina baja', s: 'Refleja los depósitos vacíos' },
        { id: 'tr1', col: 2, row: 0, k: 'effect', t: 'Transferrina y TIBC altas', s: 'El hígado sale a buscar hierro' },
        { id: 'inf', col: 0, row: 2, k: 'cause', t: 'Inflamación', s: 'Infección, artritis, cáncer' },
        { id: 'il6', col: 1, row: 2, k: 'mech', t: 'IL-6 y hepcidina', s: 'El hierro queda atrapado' },
        { id: 'fe2', col: 2, row: 2, k: 'effect', t: 'Ferritina alta', s: 'Reactante de fase aguda positivo' },
        { id: 'tr2', col: 3, row: 2, k: 'effect', t: 'Transferrina baja', s: 'Reactante de fase aguda negativo' },
      ],
      edges: [
        { from: 'fal', to: 'fe1' }, { from: 'fe1', to: 'tr1', label: 'compensa' },
        { from: 'inf', to: 'il6' }, { from: 'il6', to: 'fe2' }, { from: 'il6', to: 'tr2' },
      ],
      steps: [
        { show: ['fal', 'fe1'], note: 'La ferritina es el espejo de los depósitos',
          say: 'Partamos por la fisiología. La ferritina es la proteína que guarda el hierro, y la que circula en el suero es un espejo de los depósitos del cuerpo. Si los depósitos se vacían, la ferritina baja. Por eso es el mejor parámetro para estimar cuánto hierro tiene el paciente.' },
        { show: ['tr1'], note: 'Más transferrina para captar el poco hierro que queda',
          say: 'La transferrina, en cambio, es el camión que transporta el hierro en la sangre. Cuando falta hierro, el hígado fabrica más camiones para captar lo poco que queda. Por eso en la ferropenia pura la transferrina sube, y con ella la capacidad total de fijación de hierro, la TIBC. Ferritina abajo, transferrina arriba: se cruzan.' },
        { show: ['inf', 'il6'], note: 'La inflamación secuestra el hierro',
          say: 'Ahora mira qué pasa con la inflamación. Una infección, una artritis o un cáncer liberan interleucina seis, que estimula la hepcidina. La hepcidina encierra el hierro dentro de los macrófagos: hay hierro, pero no se puede usar.' },
        { show: ['fe2', 'tr2'], note: 'Las dos se mueven al revés que en la ferropenia',
          say: 'Y las dos proteínas se mueven al revés. La ferritina es un reactante de fase aguda positivo: sube con la inflamación. La transferrina es un reactante de fase aguda negativo: baja. Ferritina arriba, transferrina abajo. Esa es la huella de la anemia de enfermedades crónicas, y esa diferencia se pregunta mucho.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ferritina',
      title: 'Ferritina: el mejor marcador, con una trampa',
      cards: [
        { title: 'Sin inflamación', tag: 'Corte 30', kind: 'key', items: [
          { t: 'Normal: 30 a 200 ng/mL', d: 'Estima los depósitos totales de hierro',
            say: 'Vamos a los números. La ferritina normal va de treinta a doscientos nanogramos por mililitro. Es el parámetro más sensible y específico para estimar los depósitos, siempre que no haya inflamación.' },
          { t: 'Ferritina < 30: ferropenia', d: 'No necesita estudio de médula',
            say: 'Y una ferritina bajo treinta confirma la ferropenia. No necesitas biopsia de médula ni ningún examen invasivo para demostrar que faltan depósitos.' },
        ] },
        { title: 'Con inflamación', tag: 'El corte sube a 100', kind: 'alert', items: [
          { t: 'Infección, artritis o neoplasia', d: 'La ferritina sube artificialmente',
            say: 'La trampa es la inflamación. Como la ferritina es reactante de fase aguda, en un paciente con infección activa, artritis o cáncer, sube aunque los depósitos estén vacíos. Una ferritina normal puede estar escondiendo una ferropenia.' },
          { t: 'Con PCR alta: < 100 aún es ferropenia', d: 'Ferropenia concomitante',
            say: 'Por eso, si la proteína C reactiva está alta, el corte se corre: una ferritina bajo cien todavía traduce ferropenia concomitante. Ojo con esto en el paciente reumatológico o con cáncer.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'El resto del perfil',
      title: 'Transferrina, ferremia y saturación',
      cards: [
        { title: 'Transferrina y TIBC', tag: 'Reactante negativo', kind: 'criteria', items: [
          { t: 'Transferrina: 200 a 360 mg/dL', d: 'Sube en ferropenia, baja en inflamación',
            say: 'La transferrina normal va de doscientos a trescientos sesenta miligramos por decilitro. Sube en la ferropenia pura, junto con la TIBC, y baja en la sepsis, la artritis, el cáncer y la uremia.' },
        ] },
        { title: 'Ferremia', tag: 'Nunca sola', kind: 'alert', items: [
          { t: 'Normal: 50 a 170 µg/dL', d: 'Baja en ferropenia y en inflamación',
            say: 'La ferremia, o hierro sérico, va de cincuenta a ciento setenta microgramos por decilitro. Pero varía durante el día, y baja tanto en la ferropenia como en la inflamación. Como baja en las dos, no las separa. Por eso nunca se usa sola para decidir una conducta.' },
        ] },
        { title: 'Saturación de transferrina', tag: 'IST', kind: 'key', items: [
          { t: 'IST = hierro ÷ TIBC × 100', d: 'Normal: 20 a 50 %',
            say: 'La saturación de transferrina, el IST, se calcula dividiendo el hierro sérico por la TIBC y multiplicando por cien. Dice qué porcentaje de los camiones va cargado. Lo normal es entre veinte y cincuenta por ciento.' },
          { t: 'IST < 15–20 %: ferropenia', d: 'IST > 45–50 %: sobrecarga de hierro',
            say: 'Bajo quince a veinte por ciento, a la médula no le llega hierro suficiente: es ferropenia, absoluta o funcional. Sobre cuarenta y cinco a cincuenta, sobra hierro, y piensas en sobrecarga.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Patrones especiales',
      title: 'Talasemia, hemocromatosis y ferritina extrema',
      cards: [
        { title: 'Rasgo talasémico menor', tag: 'No falta hierro', kind: 'alert', items: [
          { t: 'Perfil normal o con leve sobrecarga', d: 'Ferritina, transferrina e IST normales',
            say: 'Ahora los patrones que el examen usa para confundirte. Recuerda de la clase anterior que la otra causa de microcitosis es la talasemia. Ahí el problema es la globina, no el hierro, así que el perfil es normal, o incluso con leve sobrecarga.' },
          { t: 'Dar hierro es mala práctica', d: 'Microcitosis no es igual a ferropenia',
            say: 'Y ojo: darle hierro a un paciente talasémico es una mala práctica que el examen castiga. Microcitosis no es sinónimo de ferropenia; la ferritina decide.' },
        ] },
        { title: 'Hemocromatosis hereditaria', tag: 'Gen HFE', kind: 'criteria', items: [
          { t: 'Ferritina > 500–1.000 ng/mL', d: 'IST > 50–60 %, ferremia muy alta',
            say: 'En la hemocromatosis hereditaria, una mutación del gen HFE hace que el intestino absorba hierro de más. Los depósitos están sobresaturados: ferritina sobre quinientos a mil, saturación sobre cincuenta a sesenta por ciento y ferremia muy alta.' },
          { t: 'Transferrina baja o normal', d: 'Ya no necesita captar más',
            say: 'Y la transferrina está baja o normal, porque el cuerpo no necesita salir a buscar más hierro. La clave para distinguirla de la inflamación es la saturación: en la hemocromatosis está muy alta.' },
        ] },
        { title: 'Ferritina extrema', tag: 'Más de 3.000', kind: 'key', items: [
          { t: 'Still del adulto o activación macrofágica', d: 'Ferritina > 3.000 a 10.000 ng/mL',
            say: 'Por último, si ves una ferritina sobre tres mil, e incluso hasta diez mil, en un paciente con fiebre y artritis, piensa en la enfermedad de Still del adulto o en el síndrome de activación macrofágica. Ninguna otra enfermedad reumatológica común llega a esos números.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, empezando por la ferritina, que es el parámetro que manda.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro patrones que se preguntan',
      head: ['Cuadro', 'Ferritina', 'Transferrina y TIBC', 'Saturación (IST)'],
      rows: [
        { cells: ['Anemia ferropénica', 'Baja (< 30 ng/mL)', 'Aumentada', 'Muy baja (< 15 %)'],
          say: 'Repasemos los patrones. Anemia ferropénica: ferritina bajo treinta, transferrina y TIBC altas, saturación muy baja y ferremia muy baja. Los depósitos están agotados.' },
        { cells: ['Enfermedad crónica', 'Elevada (> 100–300)', 'Disminuida', 'Baja o normal (15–25 %)'],
          say: 'Anemia de enfermedad crónica: ferritina alta, transferrina baja, ferremia baja y saturación baja o normal. El hierro está, pero secuestrado por la hepcidina. El error clásico es ver la ferremia baja y dar hierro.' },
        { cells: ['Hemocromatosis', 'Muy elevada (> 500–1.000)', 'Disminuida o normal', 'Muy alta (> 50–60 %)'],
          say: 'Hemocromatosis: ferritina muy alta, transferrina baja o normal, y saturación y ferremia muy altas. Hay hierro de sobra.' },
        { cells: ['Rasgo talasémico menor', 'Normal o levemente alta', 'Normal', 'Normal (25–40 %)'],
          say: 'Rasgo talasémico menor: todo normal. Microcitosis con perfil normal no es ferropenia, y no se da hierro.' },
        { cells: ['Ferropenia con inflamación', '< 100 ng/mL con PCR alta', '—', '< 15 %'],
          say: 'Y la combinación que más confunde: inflamación con ferropenia. Si la PCR está alta, una ferritina bajo cien con saturación bajo quince por ciento te dice que, además de inflamación, faltan depósitos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 54 años con artritis reumatoide en tratamiento con metotrexato consulta por astenia. Hb 9,4 g/dL, VCM 83 fL, leucocitos 7.800/µL, plaquetas 390.000/µL. Ferremia 32 µg/dL (VN 50–150), transferrina 180 mg/dL (VN 200–360), TIBC 225 µg/dL (VN 250–420), ferritina 380 ng/mL (VN 30–200), saturación 14 %. PCR 24 mg/L.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Anemia ferropénica; iniciar sulfato ferroso oral' },
        { letter: 'B', text: 'Anemia de enfermedades crónicas; optimizar el control de la artritis, sin hierro' },
        { letter: 'C', text: 'Ferropenia concomitante a inflamación; hierro endovenoso' },
        { letter: 'D', text: 'Hemocromatosis hereditaria; estudio del gen HFE' },
        { letter: 'E', text: 'Rasgo talasémico; electroforesis de hemoglobina' },
      ],
      correct: 'B',
      explanation: 'Normocítica, con ferritina alta (380) y transferrina y TIBC bajas en una paciente con PCR elevada: hierro secuestrado por inflamación. La ferritina supera 100, así que no hay ferropenia concomitante. Se trata la artritis de base; no está indicado suplementar hierro.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y cuatro años, con artritis reumatoide en tratamiento con metotrexato, consulta por astenia. Hemoglobina nueve coma cuatro, VCM ochenta y tres. Ferremia baja, transferrina ciento ochenta, baja. TIBC baja. Ferritina trescientos ochenta, alta. Saturación catorce por ciento, y PCR elevada.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: ferropenia con sulfato ferroso, anemia de enfermedades crónicas controlando la artritis y sin hierro, ferropenia más inflamación con hierro endovenoso, hemocromatosis, o rasgo talasémico. Piénsalo.',
        answer: 'Es la B. Mira las dos proteínas: ferritina arriba, transferrina abajo. Esa es la huella de la inflamación, y la PCR lo confirma. ¿Hay además ferropenia? No, porque aun con inflamación el corte es cien, y aquí la ferritina está en trescientos ochenta. El distractor tentador es la A: la ferremia y la saturación están bajas, pero ya vimos que la ferremia baja en las dos. El hierro está atrapado, no falta, y se trata la artritis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 58',
      stem: 'Una paciente de 52 años, con antecedente de artritis reumatoide en tratamiento permanente con AINES y prednisona por vía oral y tratamiento intermitente con metotrexate por vía oral, presenta un cuadro de astenia, adinamia y disnea de esfuerzos que ha empeorado en el último tiempo. Se solicitan exámenes en los que destacan una creatinina de 1,6mg/dL, hemograma con hematocrito 29%, hemoglobina 9,7g/dL, plaquetas 147.000/mm3, blancos 4.200/mm3 y al frotis se aprecia microcitosis. Además se solicita perfil de fierro que muestra ferremia de 40ug/dL (60-160 ug/dL) y transferrina de 190mg/dL (240-360mg/dL).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Anemia por enfermedades crónicas' },
        { letter: 'B', text: 'Mielodisplasia' },
        { letter: 'C', text: 'Anemia por insuficiencia renal crónica' },
        { letter: 'D', text: 'Hipoplasia medular' },
        { letter: 'E', text: 'Mieloma múltiple' },
      ],
      correct: 'A',
      explanation: 'Artritis reumatoide con ferremia baja y transferrina baja: hierro secuestrado por inflamación, anemia de enfermedades crónicas. En la ferropenia la transferrina estaría alta. El dato que decide es la transferrina baja en una paciente con artritis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Mujer de cincuenta y dos años con artritis reumatoide, en tratamiento con antiinflamatorios, prednisona y metotrexato, con astenia y disnea progresiva. Creatinina uno coma seis, hemoglobina nueve coma siete, microcitosis en el frotis. El perfil muestra ferremia baja y transferrina baja.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: anemia por enfermedades crónicas, mielodisplasia, anemia por insuficiencia renal crónica, hipoplasia medular, o mieloma múltiple. Piénsalo.',
        answer: 'Es la A, anemia por enfermedades crónicas. Fíjate que no te dan la ferritina, y no la necesitas: la transferrina baja ya te dice inflamación, porque en la ferropenia estaría alta. Y la microcitosis no te debe desviar: la enfermedad crónica suele ser normocítica, pero puede ser microcítica. El distractor tentador es la insuficiencia renal, por la creatinina elevada, pero el dato que el examen te está mostrando es el perfil de hierro: transferrina baja en una paciente con artritis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 23',
      stem: 'Una paciente de 64 años, con antecedente de by-pass gástrico, por obesidad mórbida, presenta un cuadro de dificultad a la marcha, asociado a astenia y malestar general. En sus exámenes destaca anemia macrocítica, plaquetas: 100.000 por mm3, blancos: 6.000 por mm3, ferritina 56 ug/dl y saturación de transferrina de 18%.',
      question: '¿El déficit de qué nutriente explica mejor este caso?',
      options: [
        { letter: 'A', text: 'Fierro' },
        { letter: 'B', text: 'Ácido fólico' },
        { letter: 'C', text: 'Cianocobalamina' },
        { letter: 'D', text: 'Zinc' },
        { letter: 'E', text: 'Tiamina' },
      ],
      correct: 'C',
      explanation: 'By-pass gástrico, anemia macrocítica con plaquetopenia y compromiso de la marcha: déficit de vitamina B12. La ferritina es normal, así que los depósitos de hierro no están vacíos, y la macrocitosis no calza con ferropenia.',
      say: {
        stem: 'La segunda es del EUNACOM de agosto de dos mil veintiuno. Mujer de sesenta y cuatro años con by-pass gástrico por obesidad mórbida, que presenta dificultad para caminar, astenia y malestar. Tiene anemia macrocítica, plaquetas cien mil, ferritina cincuenta y seis y saturación de transferrina de dieciocho por ciento.',
        question: '¿El déficit de qué nutriente explica mejor este caso?',
        options: 'Las opciones: hierro, ácido fólico, cianocobalamina, zinc o tiamina. Piénsalo.',
        answer: 'Es la C, cianocobalamina, la vitamina B doce. El by-pass, la macrocitosis y el compromiso de la marcha apuntan ahí. El distractor tentador es el hierro, porque el by-pass también lo hace perder y la saturación está algo baja. Pero la ferritina manda, y cincuenta y seis está sobre treinta: los depósitos no están vacíos. Y además la anemia es macrocítica, no microcítica. Lee siempre el perfil junto con el VCM.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ferritina', tag: 'Manda', kind: 'key', items: [
          { t: 'Ferritina < 30: ferropenia', d: 'Con inflamación, < 100 aún es ferropenia',
            say: 'Cerremos con las reglas de oro. La ferritina manda: bajo treinta es ferropenia, y si hay inflamación, bajo cien todavía lo es.' },
        ] },
        { title: 'Se cruzan', tag: 'Ferritina vs transferrina', kind: 'criteria', items: [
          { t: 'Ferropenia: ferritina ↓, transferrina ↑', d: 'Inflamación: ferritina ↑, transferrina ↓',
            say: 'La ferritina y la transferrina se cruzan. En la ferropenia, ferritina abajo y transferrina arriba. En la inflamación, ferritina arriba y transferrina abajo.' },
          { t: 'La ferremia no separa nada', d: 'Baja en ferropenia y en inflamación',
            say: 'La ferremia baja en las dos, así que nunca decide sola.' },
        ] },
        { title: 'No dar hierro', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Talasemia y enfermedad crónica', d: 'Hemocromatosis: IST > 50–60 %',
            say: 'No se da hierro en el rasgo talasémico ni en la anemia de enfermedad crónica pura, y una saturación sobre cincuenta a sesenta por ciento te habla de hemocromatosis.' },
          { t: 'Ferropenia confirmada: buscar la causa', d: 'Es lo que vemos en la próxima clase',
            say: 'Y cuando el perfil confirma ferropenia, el trabajo recién empieza: hay que buscar por dónde se perdió el hierro, que es la próxima clase. Si te llevas una sola idea de hoy: ferritina y transferrina se mueven al revés, y la inflamación las da vuelta a las dos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lectura del perfil de hierro',
    root: N('start', 'Anemia con perfil de hierro', 'Mirar primero la ferritina y la PCR',
      'Tienes una anemia y un perfil de hierro. No empieces por la ferremia: empieza por la ferritina, que estima los depósitos, y mírala junto con la PCR, porque la inflamación la infla.',
      ['', N('q', '¿Qué muestra la ferritina?', 'Leerla según haya o no inflamación',
        '¿Dónde está la ferritina, y hay inflamación?',
        ['< 30', N('ok', 'Ferropenia confirmada', 'Transferrina alta, IST bajo',
          'Bajo treinta, la ferropenia está confirmada, sin necesidad de médula. Lo esperable es transferrina alta y saturación baja. Y ahora hay que buscar la causa.')],
        ['< 100 + PCR alta', N('alert', 'Ferropenia más inflamación', 'IST bajo 15 %',
          'Con la PCR alta el corte sube a cien. Bajo cien, con saturación bajo quince por ciento, además de la inflamación faltan depósitos: hay ferropenia concomitante.')],
        ['> 100 + PCR alta', N('do', 'Enfermedad crónica', 'Transferrina baja; tratar la causa',
          'Sobre cien con inflamación y transferrina baja: anemia de enfermedad crónica. El hierro está secuestrado; se trata la enfermedad de base y no se da hierro.')],
        ['Normal o alta, sin PCR', N('q', '¿Saturación?', 'Alta o normal',
          'Sin inflamación y con ferritina normal o alta, mira la saturación de transferrina.',
          ['IST > 50', N('refer', 'Hemocromatosis', 'Ferritina > 500–1.000',
            'Saturación sobre cincuenta a sesenta y ferritina muy alta: sobrecarga de hierro, hemocromatosis hereditaria.')],
          ['Normal', N('do', 'Perfil normal', 'Si es microcítica: talasemia',
            'Perfil normal con microcitosis: piensa en rasgo talasémico, y no des hierro.')])])]),
  },
};
