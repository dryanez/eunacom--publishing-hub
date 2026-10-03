// Clase 19.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwModerada = N('do', 'CIE moderada', 'UDCA + interrupción a las 37-38 semanas',
  'Con ácidos biliares bajo cuarenta, es CIE moderada: ácido ursodesoxicólico, control semanal, e interrupción entre las treinta y siete y treinta y ocho semanas.');

const pwSevera = N('alert', 'CIE severa', 'Interrupción a las 36 semanas',
  'Con ácidos biliares de cuarenta o más, es severa: hospitalizas en alto riesgo, y adelantas la interrupción a las treinta y seis semanas.');

const pwExtrema = N('alert', 'CIE extrema', 'Interrupción a las 34-36, con corticoides',
  'Y si supera los cien, el riesgo de muerte fetal sube tanto que interrumpes entre las treinta y cuatro y treinta y seis semanas, con corticoides antes.');

const pwAcidos = N('q', '¿Cuánto salen los ácidos biliares?', 'Ese número decide todo',
  'Y ese número, los ácidos biliares totales, es el que decide la conducta completa.',
  ['Bajo 40', pwModerada],
  ['40 a 99', pwSevera],
  ['100 o más', pwExtrema]);

const pwRoot = N('start', 'Prurito palmoplantar nocturno', 'Sin lesiones cutáneas primarias, 2° o 3er trimestre',
  'Tienes a tu paciente con el prurito clásico. El diagnóstico ya es clínico, pero igual pides el examen que lo confirma.',
  ['¿Qué pides?', N('do', 'Ácidos biliares séricos totales', 'El estándar de oro',
    'Pides ácidos biliares séricos totales: es el estándar de oro para esta enfermedad.', ['¿Cuánto sale?', pwAcidos])]);

module.exports = {
  id: 'ob-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un prurito que parece inofensivo, pero que puede matar al feto sin avisar',
      say: 'Bienvenida a esta clase de colestasia intrahepática del embarazo, un tema de alta rentabilidad y muy chileno: es la enfermedad hepática propia del embarazo más frecuente en el país. Ya vimos qué pasa con la presión y con la glicemia, y hoy es el turno del hígado. Y aquí hay una idea que te va a sorprender: para ti es benigna, pero para el feto puede ser letal, de un momento a otro. Vamos a ver por qué.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué pica tanto, y por qué el feto corre riesgo',
      nodes: [
        { id: 'gen', col: 0, row: 0, k: 'cause', t: 'Susceptibilidad genética', s: 'Transportadores biliares del hepatocito' },
        { id: 'est', col: 0, row: 2, k: 'cause', t: 'Estrógenos altos', s: 'Propios del tercer trimestre' },
        { id: 'col', col: 1, row: 1, k: 'mech', t: 'Colestasia intrahepática', s: 'Se acumulan los ácidos biliares' },
        { id: 'pru', col: 2, row: 0, k: 'effect', t: 'Prurito palmoplantar nocturno', s: 'Sin lesiones primarias' },
        { id: 'cor', col: 2, row: 2, k: 'risk', t: 'Ácidos biliares tóxicos', s: 'Cruzan a la circulación fetal' },
        { id: 'obi', col: 3, row: 2, k: 'risk', t: 'Muerte fetal súbita', s: 'Arritmia o vasoespasmo placentario' },
      ],
      edges: [
        { from: 'gen', to: 'col' }, { from: 'est', to: 'col' },
        { from: 'col', to: 'pru' }, { from: 'col', to: 'cor' }, { from: 'cor', to: 'obi' },
      ],
      steps: [
        { show: ['gen'], note: 'Transportadores que no funcionan bien',
          say: 'Partamos por el mecanismo. Hay una base genética: los transportadores del hepatocito que sacan la bilis no funcionan del todo bien.' },
        { show: ['est'], note: 'El tercer trimestre es cuando más suben',
          say: 'Y esa falla se hace evidente cuando suben los estrógenos, que es justo lo que pasa en el tercer trimestre.' },
        { show: ['col'], note: 'Los ácidos biliares se quedan en la sangre',
          say: 'El resultado es colestasia: los ácidos biliares no salen bien del hígado, y se acumulan en la sangre materna.' },
        { show: ['pru'], note: 'La piel está sana por debajo',
          say: 'Y esos ácidos biliares acumulados son los que producen el prurito, típicamente en palmas y plantas, peor en la noche. Fíjate en algo importante: la piel está sana. Solo vas a ver rasguños, nunca una lesión primaria.' },
        { show: ['cor', 'obi'], note: 'Lo grave no se ve en la madre',
          say: 'Pero lo más importante de esta clase es lo que le pasa al feto. Esos mismos ácidos biliares cruzan a su circulación, y ahí son tóxicos para el miocardio: pueden gatillar una arritmia, o un vasoespasmo agudo en la placenta. Y eso significa una muerte fetal súbita, sin aviso previo, en un feto que hasta ese momento crecía normal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y diagnóstico',
      title: 'Cómo lo reconoces, y con qué lo confirmas',
      cards: [
        { title: 'Presentación típica', tag: 'Diagnóstico clínico', kind: 'key', items: [
          { t: 'Prurito palmoplantar nocturno', d: 'Empieza ahí y luego se generaliza',
            say: 'Veamos la clínica. El síntoma que abre el cuadro es el prurito en palmas y plantas, peor en la noche, que después se extiende al resto del cuerpo.' },
          { t: 'Sin lesiones cutáneas primarias', d: 'Solo escoriaciones de rascado',
            say: 'Y un dato que define el diagnóstico: no hay ninguna lesión primaria en la piel. Si ves pápulas o placas, piensa en otra cosa, no en colestasia.' },
          { t: 'Ictericia en el 10 al 15%', d: 'Aparece después del prurito',
            say: 'La ictericia solo aparece en una minoría, y siempre después del prurito, nunca antes.' },
        ] },
        { title: 'Confirmación de laboratorio', tag: 'Estándar de oro', kind: 'alert', items: [
          { t: 'Ácidos biliares séricos totales', d: 'El examen que confirma y estratifica',
            say: 'El diagnóstico es clínico, pero lo confirmas con los ácidos biliares séricos totales. Y ese mismo número es el que después te dice cuán severa es.' },
          { t: 'Transaminasas elevadas', d: 'En 60 a 80% de los casos',
            say: 'Las transaminasas también suelen subir, en seis de cada diez a ocho de cada diez pacientes, pero no son el examen que define el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento y momento del parto',
      title: 'El fármaco, y la fecha que salva al feto',
      cards: [
        { title: 'Ácido ursodesoxicólico', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: '10 a 15 mg/kg al día', d: 'Vía oral, en dos o tres tomas',
            say: 'El tratamiento es el ácido ursodesoxicólico, en dosis de diez a quince miligramos por kilo al día, vía oral.' },
          { t: 'Cruza la placenta', d: 'Depura los ácidos biliares del feto también',
            say: 'Y su gran ventaja es que cruza la placenta: no solo te alivia el prurito a ti, sino que también depura los ácidos biliares del lado del feto.' },
        ] },
        { title: 'Por qué no basta vigilar', tag: 'La trampa central del tema', kind: 'alert', items: [
          { t: 'El monitoreo no predice el óbito', d: 'Porque el evento es súbito',
            say: 'Y aquí está la trampa central de todo el tema: el monitoreo fetal habitual no te sirve para prevenir la muerte fetal, porque el evento es súbito, no una falla que avisa antes.' },
          { t: 'La única prevención es interrumpir', d: 'Según el nivel de ácidos biliares',
            say: 'Por eso la única forma de prevenir la muerte fetal es programar la interrupción, y la fecha depende del nivel de ácidos biliares que ya vimos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el diagnóstico y la estratificación en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en la colestasia',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Prurito palmoplantar sin lesiones primarias', 'Diagnóstico clínico + ácidos biliares', 'Buscar una lesión cutánea que lo explique'],
          say: 'Repasemos las trampas. Prurito palmoplantar sin lesiones primarias: el diagnóstico ya es clínico, y confirmas con ácidos biliares. El error es buscar una erupción que no existe.' },
        { cells: ['Ácidos biliares en 110', 'Interrupción entre 34 y 36 semanas', 'Solo subir la dosis de ácido ursodesoxicólico'],
          say: 'Ácidos biliares en ciento diez: eso es extremo, y la interrupción va entre las treinta y cuatro y treinta y seis semanas. El error es pensar que basta con más fármaco.' },
        { cells: ['Registro basal no estresante normal', 'No descarta el riesgo de óbito', 'Confiar en que el monitoreo protege al feto'],
          say: 'Un registro basal normal en una colestasia severa no te asegura nada. El error más peligroso de este tema es confiar en que el monitoreo fetal protege, cuando lo único que protege es la fecha de interrupción.' },
        { cells: ['Pápulas y placas en el abdomen', 'Pensar en erupción polimorfa del embarazo', 'Diagnosticar colestasia igual'],
          say: 'Y si ves pápulas y placas, no es colestasia: piensa en la erupción polimorfa del embarazo. El error es diagnosticar colestasia solo porque hay prurito.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Multigesta de 34 semanas, con prurito de 10 días que empeora en la noche, iniciado en palmas y plantas y extendido a antebrazos y abdomen. Sin erupciones ni lesiones primarias, solo escoriaciones de rascado. Escleras anictéricas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar ácido ursodesoxicólico y solicitar ácidos biliares séricos' },
        { letter: 'B', text: 'Indicar clobetasol tópico y biopsia cutánea' },
        { letter: 'C', text: 'Solicitar serología viral hepática antes de tratar' },
        { letter: 'D', text: 'Indicar permetrina al 5% por sospecha de escabiosis' },
        { letter: 'E', text: 'Interrumpir el embarazo de inmediato, sin más estudio' },
      ],
      correct: 'A',
      explanation: 'El prurito palmoplantar nocturno sin lesiones primarias en el tercer trimestre es diagnóstico clínico de CIE. La conducta es iniciar UDCA y confirmar con ácidos biliares, que además estratifican la severidad y el momento del parto.',
      say: {
        stem: 'Vamos con un caso. Multigesta de treinta y cuatro semanas, con diez días de prurito que empeora en la noche, que empezó en palmas y plantas y ya se extendió a los antebrazos y el abdomen. No tiene erupciones, solo escoriaciones de rascado, y sus escleras no están ictéricas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: iniciar ácido ursodesoxicólico y pedir ácidos biliares, dar clobetasol tópico con biopsia, pedir serología viral antes de tratar, dar permetrina por escabiosis, o interrumpir de inmediato sin más estudio. Piénsalo.',
        answer: 'Es la A. El cuadro es la colestasia en su forma más típica: prurito palmoplantar nocturno, sin ninguna lesión primaria. El diagnóstico ya es clínico, así que inicias el ácido ursodesoxicólico ahora, y pides los ácidos biliares para confirmar y para saber qué tan severa es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 46',
      stem: 'Paciente de 34 años, con embarazo de 32 semanas, inicia prurito de palmas y plantas más intenso en la noche, asociado a astenia y vómitos. Leve ictericia de escleras, sin lesiones cutáneas. Bilirrubina 1,5 mg/dL, fosfatasas alcalinas 411 UI/L, GGT 398 UI/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colestasia intrahepática' },
        { letter: 'B', text: 'Colangitis biliar primaria' },
        { letter: 'C', text: 'Ictericia por hiperémesis gravídica' },
        { letter: 'D', text: 'Hígado graso agudo del embarazo' },
        { letter: 'E', text: 'Coledocolitiasis' },
      ],
      correct: 'A',
      explanation: 'Prurito palmoplantar nocturno sin lesiones primarias, con patrón colestásico de laboratorio, en el tercer trimestre, es el cuadro clásico de CIE. El diagnóstico es clínico; los ácidos biliares complementan la sospecha.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de treinta y cuatro años, con embarazo de treinta y dos semanas, con prurito de palmas y plantas que empeora en la noche, con astenia y vómitos. Tiene una leve ictericia de escleras, sin lesiones cutáneas. Su bilirrubina está en uno coma cinco, y sus fosfatasas y su gamaglutamiltransferasa están bien elevadas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: colestasia intrahepática, colangitis biliar primaria, ictericia por hiperémesis gravídica, hígado graso agudo del embarazo, o coledocolitiasis. Piénsalo.',
        answer: 'Es la A. Es la colestasia en su forma clásica: prurito palmoplantar nocturno, sin lesiones en la piel, con un patrón de laboratorio colestásico. El diagnóstico ya es clínico, y estos exámenes solo lo complementan, con los ácidos biliares como el examen que más pesa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Por qué motivo la monitorización fetal electrónica anteparto habitual, el registro basal no estresante semanal, no es suficiente para garantizar la seguridad fetal en una colestasia intrahepática severa?',
      question: '¿Cuál es la explicación correcta?',
      options: [
        { letter: 'A', text: 'Porque los ácidos biliares impiden la transmisión de las ondas Doppler' },
        { letter: 'B', text: 'Porque la muerte fetal en CIE ocurre por un evento súbito de arritmia o vasoespasmo, sin hipoxia crónica previa' },
        { letter: 'C', text: 'Porque todos los fetos con CIE presentan taquicardia basal fija irreversible' },
        { letter: 'D', text: 'Porque la colestasia solo afecta a la madre y el feto nunca tiene complicaciones' },
        { letter: 'E', text: 'Porque el ácido ursodesoxicólico altera artificialmente el trazado cardiofetal' },
      ],
      correct: 'B',
      explanation: 'A diferencia de la insuficiencia placentaria crónica que sí se detecta con monitoreo, en la CIE el óbito ocurre de forma aguda e impredecible por toxicidad directa de los ácidos biliares sobre el miocardio fetal. Por eso la única estrategia eficaz es la interrupción programada.',
      say: {
        stem: 'Vamos con una pregunta del banco EUNACOM. ¿Por qué el registro basal no estresante semanal, que uno pediría de rutina, no alcanza para asegurar que el feto está bien en una colestasia severa?',
        question: '¿Cuál es la explicación correcta?',
        options: 'Las opciones: que los ácidos biliares bloquean el Doppler, que la muerte ocurre por un evento súbito sin aviso previo, que todos estos fetos tienen taquicardia fija, que el feto nunca se complica, o que el ácido ursodesoxicólico altera el trazado. Piénsalo.',
        answer: 'Es la B. En otras enfermedades, como la restricción de crecimiento, el feto se va deteriorando de a poco, y el monitoreo alcanza a mostrarlo. Aquí no: la muerte llega de golpe, por una arritmia o un vasoespasmo agudo, sin ese aviso previo. Por eso lo único que realmente protege es la fecha de interrupción, no el monitoreo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Es clínico', kind: 'key', items: [
          { t: 'Prurito palmoplantar nocturno', d: 'Sin lesiones primarias, en el tercer trimestre',
            say: 'Cerremos con las reglas de oro. El diagnóstico es clínico: prurito palmoplantar nocturno, sin lesiones primarias, en el tercer trimestre.' },
          { t: 'Ácidos biliares confirman y estratifican', d: 'El examen que más pesa',
            say: 'Y los ácidos biliares son el examen que confirma, y que además te dice qué tan severa es.' },
        ] },
        { title: 'Tratamiento', tag: 'UDCA', kind: 'pharma', items: [
          { t: 'Ácido ursodesoxicólico', d: '10 a 15 mg por kilo al día',
            say: 'El tratamiento es el ácido ursodesoxicólico, diez a quince miligramos por kilo al día.' },
        ] },
        { title: 'Lo que salva al feto', tag: 'No es el monitoreo', kind: 'alert', items: [
          { t: 'La interrupción programada', d: 'Según el nivel de ácidos biliares',
            say: 'Lo que salva al feto no es el monitoreo, es la interrupción programada según el nivel de ácidos biliares. Si te llevas una sola idea de hoy: en la colestasia, el prurito parece poco, pero es la fecha del parto la que evita la tragedia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Colestasia intrahepática: diagnóstico y estratificación',
    root: pwRoot,
  },
};
