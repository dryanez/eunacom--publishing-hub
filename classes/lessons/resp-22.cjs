// Clase 5.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-22, en dataset_neumologia_bloque_5.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro criterios de Berlín y dos medidas que salvan vidas',
      say: 'Bienvenidos. En la clase anterior dijimos que la hipoxemia que no corrige con oxígeno al cien por ciento es shunt, y que el ejemplo típico era el distrés respiratorio. Hoy vemos ese cuadro: el síndrome de distrés respiratorio agudo. El examen pregunta dos cosas: los cuatro criterios de Berlín con la clasificación por PaFi, y cómo se ventila a este paciente para no hacerle más daño.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la sepsis al pulmón inundado',
      nodes: [
        { id: 'dir', col: 0, row: 0, k: 'cause', t: 'Causa directa', s: 'Neumonía, aspiración, contusión, humo' },
        { id: 'ind', col: 0, row: 2, k: 'cause', t: 'Causa indirecta', s: 'Sepsis, politrauma, pancreatitis, quemados' },
        { id: 'dad', col: 1, row: 1, k: 'mech', t: 'Daño alveolar difuso', s: 'Se rompe la barrera alvéolo-capilar' },
        { id: 'ede', col: 2, row: 1, k: 'mech', t: 'Edema rico en proteínas', s: 'Por permeabilidad, no por presión' },
        { id: 'sh', col: 3, row: 1, k: 'effect', t: 'Shunt', s: 'Hipoxemia refractaria al O2' },
        { id: 'rx', col: 3, row: 3, k: 'risk', t: 'Opacidades bilaterales', s: 'Pulmón blanco en la radiografía' },
      ],
      edges: [
        { from: 'dir', to: 'dad' }, { from: 'ind', to: 'dad' },
        { from: 'dad', to: 'ede' }, { from: 'ede', to: 'sh' }, { from: 'ede', to: 'rx' },
      ],
      steps: [
        { show: ['dir'], note: 'El pulmón se daña desde el alvéolo',
          say: 'Partamos por el mecanismo. El distrés es una respuesta inflamatoria masiva del pulmón, que puede partir por dos caminos. El directo, cuando la agresión llega por la vía aérea: una neumonía grave, una aspiración masiva de contenido gástrico, una contusión pulmonar bilateral o la inhalación de humo.' },
        { show: ['ind'], note: 'La sepsis es la causa más común',
          say: 'Y el indirecto, cuando la inflamación llega por la sangre. Aquí está la causa más común en la unidad de intensivo: la sepsis y el shock séptico. También el politraumatismo con transfusiones masivas, la pancreatitis aguda necrotizante y los grandes quemados.' },
        { show: ['dad'], note: 'Daño alveolar difuso',
          say: 'Sea cual sea la puerta de entrada, el resultado es el mismo: daño alveolar difuso. La barrera entre el alvéolo y el capilar se rompe, y su permeabilidad aumenta de forma extrema.' },
        { show: ['ede'], note: 'Edema de permeabilidad',
          say: 'Por esa barrera rota sale líquido rico en proteínas, que inunda los alvéolos. Fíjate en la diferencia con el edema cardiogénico: allá el líquido sale porque la presión es alta; aquí sale porque la pared está rota. Esa diferencia es uno de los criterios de Berlín.' },
        { show: ['sh', 'rx'], note: 'Shunt y pulmón blanco',
          say: 'Y con los alvéolos inundados, la sangre pasa sin oxigenarse: es el shunt de la clase anterior, la hipoxemia que no corrige con oxígeno. En la radiografía, ese líquido se ve como opacidades bilaterales difusas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Los cuatro criterios de Berlín',
      cards: [
        { title: 'Se cumplen los cuatro', tag: 'Definición de Berlín', kind: 'criteria', items: [
          { t: '1. Inicio en ≤ 7 días', d: 'Tras un insulto clínico conocido',
            say: 'Para diagnosticar distrés se tienen que cumplir los cuatro criterios de Berlín a la vez. El primero es el tiempo: comienzo agudo dentro de una semana desde el insulto conocido, o desde que empeoran los síntomas respiratorios.' },
          { t: '2. Opacidades bilaterales', d: 'En radiografía o TAC',
            say: 'El segundo es la imagen: opacidades bilaterales en la radiografía o en el TAC, que no se expliquen del todo por derrames, atelectasias lobares o nódulos.' },
          { t: '3. No explicado por el corazón', d: 'Ni por sobrecarga de volumen',
            say: 'El tercero es el origen: la insuficiencia respiratoria no se explica completamente por falla cardíaca ni por sobrecarga de fluidos. Para eso se necesita una evaluación objetiva, habitualmente un ecocardiograma.' },
          { t: '4. PaFi ≤ 300 con PEEP ≥ 5', d: 'Medida con PEEP o CPAP de al menos 5 cmH2O',
            say: 'Y el cuarto es la oxigenación: una relación PaFi de trescientos o menos, medida con una presión positiva al final de la espiración, o PEEP, de al menos cinco centímetros de agua. Ese detalle de la PEEP se pregunta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: '¿Distrés o edema cardiogénico?',
      nodes: [
        { id: 'pac', col: 0, row: 1, k: 'start', t: 'Hipoxemia + opacidades bilaterales', s: 'Paciente crítico' },
        { id: 'eco', col: 1, row: 1, k: 'q', t: '¿Lo explica el corazón?', s: 'Ecocardiograma' },
        { id: 'car', col: 2, row: 0, k: 'refer', t: 'Edema cardiogénico', s: 'Furosemida + nitroglicerina + CPAP' },
        { id: 'sdra', col: 2, row: 2, k: 'alert', t: 'SDRA', s: 'Clasificar por PaFi con PEEP ≥ 5' },
        { id: 'lev', col: 3, row: 1, k: 'risk', t: 'Leve: 200 < PaFi ≤ 300', s: 'Mortalidad 27%' },
        { id: 'mod', col: 3, row: 2, k: 'risk', t: 'Moderado: 100 < PaFi ≤ 200', s: 'Mortalidad 32%' },
        { id: 'sev', col: 3, row: 3, k: 'alert', t: 'Severo: PaFi ≤ 100', s: 'Mortalidad 45%' },
      ],
      edges: [
        { from: 'pac', to: 'eco' },
        { from: 'eco', to: 'car', label: 'sí' }, { from: 'eco', to: 'sdra', label: 'no' },
        { from: 'sdra', to: 'lev' }, { from: 'sdra', to: 'mod' }, { from: 'sdra', to: 'sev' },
      ],
      steps: [
        { show: ['pac', 'eco'], note: 'Dos cuadros que se ven igual en la radiografía',
          say: 'La diferencia que más se pregunta es con el edema pulmonar cardiogénico. Los dos tienen hipoxemia y opacidades bilaterales, y en la radiografía se pueden ver iguales. Lo que los separa es el corazón, y por eso el ecocardiograma es clave.' },
        { show: ['car'], note: 'Si el corazón lo explica, no es distrés',
          say: 'Si el ecocardiograma muestra una falla cardíaca que explica el cuadro, es un edema hidrostático, y se trata como tal: diurético de asa, como furosemida, vasodilatador, como nitroglicerina, y presión positiva no invasiva con CPAP.' },
        { show: ['sdra'], note: 'Corazón normal: distrés',
          say: 'Si el corazón es normal y se cumplen los otros criterios, es distrés respiratorio agudo. Y el paso siguiente es clasificarlo por la PaFi, siempre medida con PEEP de cinco o más.' },
        { show: ['lev', 'mod'], note: 'Cortes cada 100',
          say: 'Los cortes son fáciles de recordar porque van de cien en cien. Leve, con PaFi sobre doscientos y hasta trescientos, con una mortalidad cercana al veintisiete por ciento. Moderado, sobre cien y hasta doscientos, con alrededor de treinta y dos por ciento.' },
        { show: ['sev'], note: 'Casi la mitad muere',
          say: 'Y severo, con PaFi de cien o menos, con una mortalidad cercana al cuarenta y cinco por ciento. Casi la mitad de estos pacientes muere, y eso explica por qué el manejo ventilatorio importa tanto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Ventilación protectora',
      cards: [
        { title: 'No dañar más el pulmón', tag: 'ARDS Network', kind: 'key', items: [
          { t: 'Vt 6 mL/kg de peso ideal', d: 'Peso predicho, no el peso real',
            say: 'El distrés no tiene un fármaco que lo cure: se trata la causa y se ventila sin dañar. El primer pilar es el volumen corriente bajo, de seis mililitros por kilo de peso corporal predicho, o ideal. No del peso real. Esa es la trampa: un paciente obeso no tiene pulmones más grandes.' },
          { t: 'Presión plateau ≤ 30 cmH2O', d: 'Previene volutrauma y barotrauma',
            say: 'El segundo pilar es limitar la presión meseta, o plateau, a treinta centímetros de agua o menos. Es la presión que realmente soportan los alvéolos, y mantenerla bajo ese límite previene el volutrauma y el barotrauma.' },
        ] },
        { title: 'Casos graves', tag: 'PaFi < 150', kind: 'alert', items: [
          { t: 'Prono precoz ≥ 16 h/día', d: 'Reduce la mortalidad: estudio PROSEVA',
            say: 'En el distrés moderado a severo con PaFi bajo ciento cincuenta, se suma la posición prono precoz, al menos dieciséis horas seguidas al día. El estudio PROSEVA mostró que reduce claramente la mortalidad.' },
          { t: 'Bloqueo neuromuscular', d: 'Cisatracurio, primeras 48 h del SDRA severo',
            say: 'En el distrés severo, el libro agrega bloqueo neuromuscular precoz con cisatracurio en las primeras cuarenta y ocho horas, para mejorar la sincronía con el ventilador.' },
        ] },
        { title: 'Además', tag: 'Moderado', kind: 'normal', items: [
          { t: 'PEEP optimizada', d: 'Evitar balance hídrico positivo',
            say: 'Y en el moderado, una PEEP optimizada para mantener abiertos los alvéolos, y evitar el balance hídrico positivo, porque el pulmón con la barrera rota se inunda con facilidad.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el diagnóstico y el manejo en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los errores que se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['PaFi medida sin PEEP', 'Medir con PEEP o CPAP ≥ 5', 'Clasificar con cualquier PaFi'],
          say: 'Repasemos las trampas. La PaFi de Berlín se mide con PEEP o CPAP de al menos cinco. Clasificar con una PaFi tomada sin presión positiva es el primer error.' },
        { cells: ['Opacidades bilaterales + falla cardíaca', 'Edema cardiogénico: diurético', 'Llamarlo SDRA'],
          say: 'Si hay opacidades bilaterales, pero el ecocardiograma muestra una falla cardíaca que lo explica, no es distrés: es edema cardiogénico, y se trata con diurético.' },
        { cells: ['Volumen corriente', '6 mL/kg de peso ideal', 'Calcular con el peso real'],
          say: 'El volumen corriente se calcula con el peso ideal. Calcularlo con el peso real, o usar diez a doce mililitros por kilo, es la alternativa incorrecta clásica.' },
        { cells: ['Parámetro de seguridad', 'Presión plateau ≤ 30', 'Vigilar solo la presión peak'],
          say: 'El parámetro de seguridad es la presión plateau. La presión peak incluye la resistencia de la vía aérea, y no refleja lo que sufre el alvéolo.' },
        { cells: ['PaFi < 150', 'Prono ≥ 16 h/día', 'Mantener en supino estricto'],
          say: 'Y con PaFi bajo ciento cincuenta, prono al menos dieciséis horas al día. Dejar al paciente en supino estricto es no usar una de las pocas medidas que reduce la mortalidad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 38 años, al cuarto día de hospitalización por pancreatitis aguda necrotizante, presenta disnea intensa, FR 34 rpm y cianosis. Rx de tórax: infiltrados alveolares bilaterales difusos. Intubada, con FiO2 80% y PEEP 10 cmH2O, tiene PaO2 72 mmHg. El ecocardiograma muestra función biventricular normal.',
      question: '¿Cuál es el diagnóstico y la estrategia ventilatoria más adecuada?',
      options: [
        { letter: 'A', text: 'SDRA moderado; Vt 10 mL/kg de peso real para mejorar la oxigenación' },
        { letter: 'B', text: 'Edema pulmonar cardiogénico; furosemida y nitroglicerina' },
        { letter: 'C', text: 'SDRA severo; Vt 6 mL/kg de peso ideal, plateau ≤ 30 cmH2O y prono precoz' },
        { letter: 'D', text: 'SDRA leve; ventilación no invasiva y alta a sala' },
        { letter: 'E', text: 'Neumonía aspirativa; antibióticos y supino estricto' },
      ],
      correct: 'C',
      explanation: 'Insulto conocido (pancreatitis) hace < 7 días, opacidades bilaterales, eco normal y PaFi = 72/0,8 = 90 con PEEP ≥ 5: SDRA severo. Ventilación protectora (6 mL/kg de peso ideal, plateau ≤ 30) y, con PaFi < 150, prono ≥ 16 h/día.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y ocho años, al cuarto día de una pancreatitis necrotizante, con disnea intensa, frecuencia respiratoria de treinta y cuatro y cianosis. La radiografía muestra infiltrados bilaterales difusos. Intubada, con fracción inspirada de ochenta por ciento y PEEP de diez, tiene una presión de oxígeno de setenta y dos. El ecocardiograma es normal.',
        question: '¿Cuál es el diagnóstico y la estrategia ventilatoria más adecuada?',
        options: 'Las alternativas: distrés moderado con diez mililitros por kilo de peso real, edema cardiogénico con furosemida, distrés severo con ventilación protectora y prono, distrés leve con ventilación no invasiva, o neumonía aspirativa en supino estricto. Piénsalo.',
        answer: 'Es la C. Revisa los cuatro criterios: pancreatitis hace cuatro días, infiltrados bilaterales, corazón normal, y la PaFi: setenta y dos dividido por cero coma ocho da noventa, con PEEP sobre cinco. Eso es distrés severo. La A es la trampa: subir el volumen corriente y calcularlo con el peso real daña más el pulmón. Lo correcto es ventilación protectora y, con PaFi bajo ciento cincuenta, prono.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 50 años ingresa a la UCI con shock séptico secundario a peritonitis apendicular. Al tercer día de ventilación mecánica invasiva presenta empeoramiento del intercambio gaseoso. La radiografía de tórax revela opacidades alveolo-intersticiales difusas bilaterales que no estaban presentes al ingreso. Con ventilador en modalidad asistida, FiO2 70% y PEEP 8 cmH2O, sus gases arteriales reportan una PaO2 de 63 mmHg (PaFiO2 = 90). El ecocardiograma descarta insuficiencia cardíaca.',
      question: '¿Cuál es el diagnóstico según los criterios de Berlín y cuál es la estrategia ventilatoria que ha demostrado reducir la mortalidad?',
      options: [
        { letter: 'A', text: 'SDRA leve; ventilar con volúmenes corrientes de 10 a 12 mL/kg peso real' },
        { letter: 'B', text: 'SDRA severo; ventilación protectora con volumen corriente de 6 mL/kg peso predicho y posición en decúbito prono precoz' },
        { letter: 'C', text: 'Edema pulmonar cardiogénico; suspender sedación e indicar digoxina' },
        { letter: 'D', text: 'Atelectasia masiva izquierda; realizar broncoscopía rígida desobstructiva' },
        { letter: 'E', text: 'SDRA moderado; mantener al paciente en posición supina estricta y volumen corriente de 8 mL/kg' },
      ],
      correct: 'B',
      explanation: 'Sepsis abdominal, < 7 días, opacidades bilaterales y eco sin falla cardíaca: SDRA. PaFi 90 con PEEP ≥ 5 lo clasifica como severo. Ventilación protectora (6 mL/kg de peso predicho) y prono precoz ≥ 16 h/día (PROSEVA) reducen la mortalidad.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Paciente de cincuenta años en la unidad de intensivo por shock séptico de una peritonitis apendicular. Al tercer día de ventilación mecánica empeora su oxigenación, y aparecen opacidades bilaterales difusas que no tenía al ingreso. Con fracción inspirada de setenta por ciento y PEEP de ocho, la presión de oxígeno es sesenta y tres: una PaFi de noventa. El ecocardiograma descarta falla cardíaca.',
        question: '¿Cuál es el diagnóstico según Berlín, y qué estrategia ventilatoria reduce la mortalidad?',
        options: 'Las opciones: distrés leve con volúmenes altos, distrés severo con ventilación protectora y prono precoz, edema cardiogénico con digoxina, atelectasia con broncoscopía, o distrés moderado en supino estricto. Piénsalo.',
        answer: 'Es la B. Tiene la causa más común, la sepsis, menos de una semana, opacidades bilaterales y corazón normal. La PaFi de noventa con PEEP de ocho es severo. La E es la tentadora, porque mezcla un volumen casi correcto, pero clasifica mal y deja al paciente en supino, justo cuando el prono es lo que salva vidas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál es el parámetro fisiológico de seguridad en el ventilador mecánico que debe monitorizarse y mantenerse rigurosamente por debajo de 30 cmH2O para prevenir el barotrauma alveolar en un paciente con SDRA?',
      question: '¿Cuál es el parámetro?',
      options: [
        { letter: 'A', text: 'Presión inspiratoria peak (Ppeak)' },
        { letter: 'B', text: 'Presión meseta o plateau (Pplateau)' },
        { letter: 'C', text: 'Nivel de presión positiva al final de la espiración (PEEP)' },
        { letter: 'D', text: 'Presión de oclusión de la arteria pulmonar (POAP)' },
        { letter: 'E', text: 'Presión venosa central (PVC)' },
      ],
      correct: 'B',
      explanation: 'La presión plateau, medida con una pausa al final de la inspiración, refleja la presión estática sobre el alvéolo. Mantenerla ≤ 30 cmH2O previene la sobredistensión y el barotrauma. La presión peak incluye la resistencia de la vía aérea y puede subir sin sobredistender el alvéolo.',
      say: {
        stem: 'Una más del banco. ¿Cuál es el parámetro del ventilador que debe mantenerse bajo treinta centímetros de agua para prevenir el barotrauma en un paciente con distrés?',
        question: '¿Cuál es ese parámetro?',
        options: 'Las opciones: presión peak, presión plateau, PEEP, presión de oclusión de la arteria pulmonar, o presión venosa central. Piénsalo.',
        answer: 'Es la B, la presión plateau. Se mide con una pausa al final de la inspiración, cuando no hay flujo, y por eso refleja lo que soporta el alvéolo. La peak es el distractor tentador, porque también es una presión del ventilador, pero incluye la resistencia de la vía aérea: puede subir por un tubo acodado sin que el alvéolo esté sobredistendido.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Berlín', tag: 'Los cuatro juntos', kind: 'criteria', items: [
          { t: '≤ 7 días + opacidades bilaterales', d: 'No explicado por el corazón',
            say: 'Cerremos con las reglas de oro. Berlín son cuatro criterios juntos: inicio en una semana o menos, opacidades bilaterales, y un cuadro que el corazón ni la sobrecarga de volumen explican.' },
          { t: 'PaFi con PEEP ≥ 5', d: '300 · 200 · 100: leve, moderado, severo',
            say: 'Y la PaFi, medida con PEEP de cinco o más: trescientos, doscientos y cien separan leve, moderado y severo.' },
        ] },
        { title: 'Ventilación protectora', tag: 'Salva vidas', kind: 'key', items: [
          { t: '6 mL/kg de peso ideal', d: 'Plateau ≤ 30 cmH2O',
            say: 'La ventilación protectora es seis mililitros por kilo de peso ideal, con plateau de treinta o menos.' },
          { t: 'PaFi < 150: prono ≥ 16 h', d: 'Reduce la mortalidad',
            say: 'Y con PaFi bajo ciento cincuenta, prono al menos dieciséis horas al día. Si te llevas una sola idea de hoy: en el distrés, la clasificación la da la PaFi con PEEP, y la vida la salva ventilar poco y dar vuelta al paciente. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'SDRA: diagnóstico de Berlín y ventilación protectora',
    root: N('start', 'Hipoxemia aguda en paciente crítico', 'Sepsis, neumonía, pancreatitis, politrauma',
      'Paciente crítico, con un insulto conocido como sepsis, neumonía, pancreatitis o politrauma, que desarrolla hipoxemia aguda.',
      ['', N('q', '¿Inicio ≤ 7 días y opacidades bilaterales?', 'Criterios 1 y 2',
        'Primero, el tiempo y la imagen: ¿empezó dentro de una semana, y la radiografía muestra opacidades bilaterales?',
        ['NO', N('ok', 'Buscar otra causa', 'Derrame, atelectasia, nódulo',
          'Si no, no es distrés: busca otra causa, como un derrame, una atelectasia lobar o un nódulo.')],
        ['SÍ', N('q', '¿Lo explica el corazón?', 'Ecocardiograma',
          'Si se cumplen, el tercer criterio: ¿la falla cardíaca o la sobrecarga de volumen explican el cuadro? Lo responde el ecocardiograma.',
          ['SÍ', N('refer', 'Edema cardiogénico', 'Furosemida + nitroglicerina + CPAP',
            'Si el corazón lo explica, es edema cardiogénico: diurético, vasodilatador y CPAP.')],
          ['NO', N('q', 'SDRA: ¿PaFi con PEEP ≥ 5?', 'Leve · moderado · severo',
            'Si no, es distrés. Se mide la PaFi con PEEP de al menos cinco para clasificarlo, y todos se ventilan con volumen de seis mililitros por kilo de peso ideal y plateau de treinta o menos.',
            ['PaFi 150–300', N('do', 'Ventilación protectora', 'Vt 6 mL/kg ideal + plateau ≤ 30 + PEEP',
              'Con PaFi sobre ciento cincuenta: ventilación protectora, PEEP optimizada y evitar el balance hídrico positivo.')],
            ['PaFi < 150', N('alert', 'Protectora + prono ≥ 16 h/día', 'Bloqueo neuromuscular si es severo',
              'Con PaFi bajo ciento cincuenta: ventilación protectora más prono precoz, al menos dieciséis horas al día, y bloqueo neuromuscular en el severo.')])])])]),
  },
};
