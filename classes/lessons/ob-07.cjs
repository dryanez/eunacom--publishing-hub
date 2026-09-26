// Clase 19.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwNormal1 = N('ok', 'Normal', 'Vas a tamizaje a las 24-28 semanas',
  'Si esa glicemia sale bajo cien, es normal, y esperas al tamizaje universal entre las veinticuatro y veintiocho semanas.');

const pwPrecoz = N('do', 'Diabetes gestacional precoz', 'Confirma con una segunda glicemia',
  'Entre cien y ciento veinticinco, pides una segunda glicemia en un día distinto. Si se confirma, ya es diabetes gestacional precoz: empieza dieta y automonitoreo ahora, sin esperar a las veinticuatro semanas.');

const pwPregestacional = N('alert', 'Diabetes pregestacional', 'Ya existía, sin diagnosticar',
  'Y si sale ciento veintiséis o más, esa paciente ya tenía diabetes antes de embarazarse, aunque nadie se lo hubiera dicho.');

const pwGlicemia1 = N('q', '¿Cuánto sale la glicemia?', 'Eso define las tres categorías',
  'Y según cuánto salga esa primera glicemia, tienes tres caminos distintos.',
  ['Bajo 100', pwNormal1],
  ['100 a 125, confirmada', pwPrecoz],
  ['126 o más', pwPregestacional]);

const pwPtgoNormal = N('ok', 'Normal', 'Sigues con el control habitual',
  'Si a las dos horas sale bajo ciento cuarenta, es normal, y sigues con el control habitual del embarazo.');

const pwDieta = N('q', '¿Más del 20% fuera de meta?', 'Tras 1 a 2 semanas de dieta',
  'Empiezas con dieta fraccionada, y a la semana o dos te preguntas: ¿más del veinte por ciento de sus controles sigue fuera de meta?',
  ['No', N('ok', 'Sigue con dieta', 'Ya está bien controlada',
    'Si no, sigue solo con la dieta: está bien controlada.')],
  ['Sí', N('alert', 'Insulina NPH y cristalina', 'La dieta no bastó',
    'Si sí, ahí entra la insulina: NPH de base, y cristalina o un análogo rápido antes de las comidas que más se alteran.')]);

const pwDG = N('do', 'Diabetes gestacional', 'Diagnóstico ya hecho',
  'A las dos horas, ciento cuarenta o más ya es diagnóstico de diabetes gestacional, sin importar cómo salió la basal.',
  ['¿Cómo la tratas?', pwDieta]);

const pwPtgo = N('q', '¿Cuánto sale a las 2 horas?', 'El único corte que importa en Chile',
  'A las veinticuatro a veintiocho semanas, toca la prueba con setenta y cinco gramos de glucosa. Y lo único que decide es el valor a las dos horas.',
  ['Bajo 140', pwPtgoNormal],
  ['140 o más', pwDG]);

const pwRoot = N('start', 'Primer control prenatal', 'Glicemia en ayunas para todas',
  'Toda embarazada parte con una glicemia en ayunas en su primer control, antes de la semana veinte.',
  ['Primer trimestre', pwGlicemia1],
  ['Semana 24 a 28', pwPtgo]);

module.exports = {
  id: 'ob-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dos momentos, dos exámenes, y un solo corte que decide el diagnóstico en cada uno',
      say: 'Bienvenida a la clase de diabetes gestacional y pregestacional, un tema de máxima rentabilidad y la continuación natural de las dos clases anteriores: ahí vimos qué le pasa a la presión en el embarazo, y hoy vemos qué le pasa a la glicemia. La buena noticia es que el algoritmo chileno tiene solo dos pasos, con un examen y un corte para cada uno. Partamos por el primero.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el embarazo hace resistente a la insulina?',
      nodes: [
        { id: 'plac', col: 0, row: 1, k: 'cause', t: 'Placenta en el segundo trimestre', s: 'Fabrica hormonas diabetogénicas' },
        { id: 'res', col: 1, row: 1, k: 'mech', t: 'Resistencia a la insulina', s: 'Lactógeno placentario y cortisol' },
        { id: 'hip', col: 2, row: 0, k: 'effect', t: 'Hiperglicemia materna', s: 'Si el páncreas no compensa' },
        { id: 'fet', col: 3, row: 0, k: 'risk', t: 'Hiperinsulinismo fetal', s: 'La glucosa cruza, la insulina no' },
        { id: 'mac', col: 4, row: 0, k: 'risk', t: 'Macrosomía', s: 'Grasa en hombros y tronco' },
      ],
      edges: [
        { from: 'plac', to: 'res' },
        { from: 'res', to: 'hip', label: 'si no compensa' },
        { from: 'hip', to: 'fet' },
        { from: 'fet', to: 'mac' },
      ],
      steps: [
        { show: ['plac'], note: 'Lactógeno placentario, cortisol, progesterona',
          say: 'Partamos por el mecanismo. En la segunda mitad del embarazo, la placenta fabrica hormonas que empujan hacia la resistencia a la insulina: lactógeno placentario, cortisol y progesterona.' },
        { show: ['res'], note: 'Un páncreas que no logra compensar',
          say: 'Esa resistencia es normal y esperable. El problema aparece cuando el páncreas de la madre no logra compensarla con más insulina.' },
        { show: ['hip'], note: 'Ahí aparece la diabetes gestacional',
          say: 'Y ahí es cuando aparece la hiperglicemia materna: la diabetes gestacional.' },
        { show: ['fet'], note: 'La clave: la glucosa pasa, la insulina no',
          say: 'La glucosa de la madre cruza la placenta libremente, pero la insulina materna no. Entonces el feto recibe glucosa de más, y su propio páncreas responde fabricando más insulina.' },
        { show: ['mac'], note: 'La insulina es la hormona anabólica fetal',
          say: 'Y esa insulina fetal es la principal hormona que hace crecer al feto. Por eso el resultado es macrosomía, con grasa depositada sobre todo en los hombros y el tronco. Guarda esta idea, porque explica varias de las complicaciones que vienen después.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Dos momentos, dos exámenes',
      cards: [
        { title: 'Primer trimestre', tag: 'Glicemia en ayunas', kind: 'key', items: [
          { t: 'Bajo 100', d: 'Normal, vas a tamizaje a las 24-28',
            say: 'Empecemos por el primer momento. A toda embarazada le pides una glicemia en ayunas en su primer control. Si sale bajo cien, es normal, y esperas al tamizaje de las veinticuatro a veintiocho semanas.' },
          { t: '100 a 125, dos veces', d: 'Diabetes gestacional precoz',
            say: 'Si sale entre cien y ciento veinticinco, repites en un día distinto. Si se confirma, es diabetes gestacional precoz, y no esperas a las veinticuatro semanas para tratarla.' },
          { t: '126 o más', d: 'Diabetes pregestacional, ya existía',
            say: 'Y si sale ciento veintiséis o más, esa paciente tenía diabetes antes del embarazo, aunque recién te enteras ahora.' },
        ] },
        { title: 'Semana 24 a 28', tag: 'PTGO con 75 gramos', kind: 'key', items: [
          { t: 'Un solo corte importa', d: 'Glicemia a las 2 horas de 140 o más',
            say: 'El segundo momento es la prueba de tolerancia con setenta y cinco gramos, a todas las que salieron normales antes. Y aquí Chile usa un solo criterio: la glicemia a las dos horas. Si sale ciento cuarenta o más, ya es diagnóstico, sin importar el valor basal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Gestacional vs pregestacional: el riesgo de malformación',
      nodes: [
        { id: 'preg', col: 0, row: 0, k: 'risk', t: 'Diabetes pregestacional', s: 'Mal control desde antes de embarazarse' },
        { id: 'org', col: 1, row: 0, k: 'mech', t: 'Daño en la organogénesis', s: 'Primeras 8 semanas' },
        { id: 'malf', col: 2, row: 0, k: 'risk', t: 'Malformaciones mayores', s: 'Cardíacas, regresión caudal' },
        { id: 'gest', col: 0, row: 2, k: 'good', t: 'Diabetes gestacional típica', s: 'Aparece después de organogénesis' },
        { id: 'norm', col: 2, row: 2, k: 'good', t: 'Sin más riesgo de malformación', s: 'El feto ya está formado' },
      ],
      edges: [
        { from: 'preg', to: 'org' }, { from: 'org', to: 'malf' },
        { from: 'gest', to: 'norm', label: 'no daña la organogénesis' },
      ],
      steps: [
        { show: ['preg'], note: 'El daño ocurre antes de que sepas que está embarazada',
          say: 'Y aquí está una diferencia que se pregunta mucho. En la diabetes pregestacional, la glicemia ya estaba alta desde antes del embarazo, o desde sus primeras semanas.' },
        { show: ['org'], note: 'Antes de las 8 semanas se forman los órganos',
          say: 'Y esas primeras ocho semanas son justo cuando se forman los órganos del feto: la organogénesis.' },
        { show: ['malf'], note: 'Cardiopatías, agenesia sacra, tubo neural',
          say: 'Por eso la diabetes pregestacional mal controlada trae malformaciones mayores: cardiopatías, agenesia sacra y defectos del tubo neural.' },
        { show: ['gest', 'norm'], note: 'La gestacional típica no malforma',
          say: 'En cambio, la diabetes gestacional típica aparece recién en la segunda mitad del embarazo, cuando el feto ya terminó de formarse. Por eso no aumenta el riesgo de malformaciones. Fíjate en esta diferencia, porque es justo lo que distingue a las dos entidades.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Metas, dieta y cuándo pasar a insulina',
      cards: [
        { title: 'Metas glucémicas', tag: 'Lo que vigilas con el HGT', kind: 'key', items: [
          { t: 'Ayunas bajo 95', d: 'Idealmente entre 70 y 90',
            say: 'Veamos el tratamiento. Las metas con el automonitoreo capilar: en ayunas, bajo noventa y cinco, idealmente entre setenta y noventa.' },
          { t: 'Una hora postprandial, bajo 140', d: 'Dos horas, bajo 120',
            say: 'A la hora después de comer, bajo ciento cuarenta. Y a las dos horas, bajo ciento veinte.' },
        ] },
        { title: 'Primera línea', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Dieta fraccionada', d: '4 comidas y 2 colaciones',
            say: 'El primer paso, siempre, es la dieta: fraccionada en cuatro comidas y dos colaciones, para evitar la cetosis de ayuno, más ejercicio moderado.' },
        ] },
        { title: 'Insulina', tag: 'Si la dieta no basta', kind: 'pharma', items: [
          { t: 'Más del 20% fuera de meta', d: 'Tras 1 a 2 semanas de dieta',
            say: 'Si después de una a dos semanas más del veinte por ciento de sus controles sigue fuera de meta, ahí inicias insulina.' },
          { t: 'NPH más cristalina o análogo rápido', d: 'La insulina no cruza la placenta',
            say: 'Usas insulina NPH de base, y cristalina o un análogo rápido antes de las comidas. La eliges porque no cruza la placenta.' },
          { t: 'Metformina: no es primera línea', d: 'Sí cruza la placenta',
            say: 'Y ojo con la metformina: no es la primera línea en la guía chilena, precisamente porque sí atraviesa la placenta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos los dos momentos y los dos exámenes en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los cortes que más se confunden',
      head: ['Escenario', 'Diagnóstico', 'Error frecuente'],
      rows: [
        { cells: ['Glicemia de ayuno de 108, confirmada', 'Diabetes gestacional precoz', 'Pedir la PTGO de inmediato'],
          say: 'Repasemos los cortes. Una glicemia de ayuno de ciento ocho, confirmada en otro día, ya es diabetes gestacional precoz. El error es saltarte esa confirmación y pedir la prueba de tolerancia de una vez.' },
        { cells: ['PTGO con 2 horas en 152', 'Diabetes gestacional, sin importar la basal', 'Decir que es normal porque la basal era baja'],
          say: 'Una prueba de tolerancia con la basal normal, pero ciento cincuenta y dos a las dos horas: ya es diagnóstico. El error es fijarte solo en la basal e ignorar el valor que realmente decide.' },
        { cells: ['28% de controles fuera de meta tras dieta', 'Iniciar insulina', 'Mantener solo la dieta y reevaluar en un mes'],
          say: 'Con más del veinte por ciento de sus controles fuera de meta tras la dieta, inicias insulina. El error es dejarla otro mes solo con dieta, dejando pasar hiperglicemias que dañan al feto.' },
        { cells: ['Diabetes gestacional típica', 'No aumenta el riesgo de malformación', 'Pedir ecocardiografía fetal como en la pregestacional'],
          say: 'Y la diabetes gestacional típica no aumenta el riesgo de malformación, porque aparece después de la organogénesis. Ese estudio dirigido es para la pregestacional, no para esta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Secundigesta de 26 semanas, con IMC de 28. Su glicemia en ayunas del primer trimestre fue 88 mg/dL. La PTGO a las 25 semanas muestra: basal 92 mg/dL y 2 horas post-carga 158 mg/dL. Está asintomática.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Control habitual, ya que la glicemia basal es normal' },
        { letter: 'B', text: 'Iniciar insulina NPH de inmediato' },
        { letter: 'C', text: 'Terapia nutricional fraccionada y automonitoreo glucémico' },
        { letter: 'D', text: 'Iniciar metformina 850 mg cada 12 horas' },
        { letter: 'E', text: 'Repetir la prueba de tolerancia en 4 semanas' },
      ],
      correct: 'C',
      explanation: 'La glicemia a las 2 horas de 158 mg/dL, sobre el corte de 140, ya es diagnóstica de diabetes gestacional. El primer paso es terapia nutricional y automonitoreo, reevaluando en 1 a 2 semanas antes de considerar insulina.',
      say: {
        stem: 'Vamos con un caso. Secundigesta de veintiséis semanas, con un índice de masa corporal de veintiocho. Su glicemia en ayunas del primer trimestre fue ochenta y ocho. La prueba de tolerancia a las veinticinco semanas sale con una basal de noventa y dos, y ciento cincuenta y ocho a las dos horas. Está asintomática.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Tienes cinco opciones: control habitual porque la basal es normal, iniciar insulina de inmediato, terapia nutricional fraccionada con automonitoreo, iniciar metformina, o repetir la prueba en cuatro semanas. Piénsalo.',
        answer: 'Es la C. Fíjate que la basal está normal, en noventa y dos, pero el valor que decide es el de las dos horas, y ciento cincuenta y ocho supera el corte de ciento cuarenta. Ya es diabetes gestacional. Pero el primer paso no es la insulina: es la terapia nutricional con automonitoreo, y recién si eso no basta, pasas al fármaco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 60',
      stem: 'Mujer de 35 años, con embarazo de 15 semanas, sin síntomas. Glicemia de ayuno de 108 mg/dL, con examen físico normal y altura uterina acorde.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Solicitar test de tolerancia oral a la glucosa' },
        { letter: 'B', text: 'Indicar dieta y mantener el control habitual' },
        { letter: 'C', text: 'Solicitar hemoglobina glicosilada' },
        { letter: 'D', text: 'Indicar insulina subcutánea' },
        { letter: 'E', text: 'Solicitar una nueva glicemia de ayunas' },
      ],
      correct: 'E',
      explanation: 'Una glicemia de ayuno entre 100 y 125 mg/dL en el primer trimestre exige repetirla en otro día antes de diagnosticar. La prueba de tolerancia se reserva para las 24 a 28 semanas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de treinta y cinco años, con embarazo de quince semanas, sin síntomas, con una glicemia de ayuno de ciento ocho. Su examen físico es normal.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'Las opciones son: pedir la prueba de tolerancia a la glucosa, indicar dieta y seguir el control habitual, pedir hemoglobina glicosilada, indicar insulina, o pedir una nueva glicemia de ayunas. Piénsalo.',
        answer: 'Es la E. Ciento ocho cae justo entre cien y ciento veinticinco, y ese rango no te manda directo a la prueba de tolerancia: primero repites la glicemia de ayuno, en un día distinto. Si vuelve a salir alterada, ahí sí es diabetes gestacional precoz.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 38',
      stem: 'Paciente de 31 años, con embarazo de 28 semanas, se realiza una prueba de tolerancia a la glucosa con 75 gramos, que resulta 75 mg/dL basal y 160 mg/dL a las 2 horas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Intolerancia a la glucosa' },
        { letter: 'B', text: 'Diabetes gestacional' },
        { letter: 'C', text: 'Diabetes pregestacional' },
        { letter: 'D', text: 'Diabetes mellitus 2' },
        { letter: 'E', text: 'Resistencia a la insulina' },
      ],
      correct: 'B',
      explanation: 'La glicemia a las 2 horas de 160 mg/dL, sobre el corte de 140, define diabetes gestacional. No es pregestacional, porque esa se diagnostica con glicemias de ayuno de 126 mg/dL o más, y esta paciente ya está en el segundo trimestre.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de treinta y un años, con embarazo de veintiocho semanas. Su prueba de tolerancia sale con setenta y cinco de basal, y ciento sesenta a las dos horas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: intolerancia a la glucosa, diabetes gestacional, diabetes pregestacional, diabetes mellitus tipo dos, o resistencia a la insulina. Piénsalo.',
        answer: 'Es la B. Ciento sesenta a las dos horas supera con creces el corte de ciento cuarenta: eso es diabetes gestacional. No es pregestacional, porque ya estamos en el segundo trimestre, y esa categoría se define en el primero, con glicemias de ayuno de ciento veintiséis o más.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 73',
      stem: 'Paciente de 37 años, con embarazo de 29 semanas, se realiza una prueba de tolerancia a la glucosa de 75 gramos, con glicemia basal de 86 mg/dL y postcarga de 139 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar dieta hipoglucídica y controlar con glicemias seriadas' },
        { letter: 'B', text: 'Solicitar hemoglobina glicosilada' },
        { letter: 'C', text: 'Iniciar metformina' },
        { letter: 'D', text: 'Repetir el examen a las 32 semanas' },
        { letter: 'E', text: 'Mantener el control habitual del embarazo' },
      ],
      correct: 'E',
      explanation: 'La glicemia a las 2 horas de 139 mg/dL queda justo bajo el corte de 140 mg/dL: el resultado es normal y no requiere dieta especial ni fármacos.',
      say: {
        stem: 'Última pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de treinta y siete años, con embarazo de veintinueve semanas. Su prueba de tolerancia sale con ochenta y seis de basal, y ciento treinta y nueve a las dos horas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar dieta hipoglucídica con glicemias seriadas, pedir hemoglobina glicosilada, iniciar metformina, repetir el examen a las treinta y dos semanas, o mantener el control habitual. Piénsalo.',
        answer: 'Es la E. Fíjate en el número: ciento treinta y nueve queda justo bajo el corte de ciento cuarenta. Por un solo miligramo de diferencia, este resultado es normal, y no corresponde iniciar dieta especial ni ningún fármaco. Es la trampa clásica de quedarse mirando un número que casi alcanza, pero no alcanza.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Dos momentos', kind: 'key', items: [
          { t: 'Primer trimestre: ayuno', d: '100 a 125, confirmar; 126 o más, pregestacional',
            say: 'Cerremos con las reglas de oro. En el primer trimestre, la glicemia de ayuno: entre cien y ciento veinticinco confirmas, y con ciento veintiséis o más ya es pregestacional.' },
          { t: 'Semana 24 a 28: PTGO', d: '140 a las 2 horas ya es diagnóstico',
            say: 'Y entre las veinticuatro y veintiocho semanas, la prueba de tolerancia: ciento cuarenta a las dos horas ya es diagnóstico, sin mirar la basal.' },
        ] },
        { title: 'Tratamiento', tag: 'Dieta primero', kind: 'pharma', items: [
          { t: 'Insulina si falla la dieta', d: 'Más del 20% fuera de meta',
            say: 'Tratas primero con dieta, y pasas a insulina si más del veinte por ciento de sus controles queda fuera de meta.' },
        ] },
        { title: 'La diferencia clave', tag: 'Con la pregestacional', kind: 'alert', items: [
          { t: 'Malformaciones: solo en pregestacional', d: 'Por daño en la organogénesis',
            say: 'Y las malformaciones son cosa de la pregestacional, porque el daño ocurre en la organogénesis, no de la gestacional típica. Si te llevas una sola idea de hoy: en la diabetes del embarazo, cada examen tiene su propio corte, y ese corte es justamente lo que se pregunta. Nos vemos en la próxima clase, donde vemos la colestasia del embarazo.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diabetes gestacional: los dos exámenes y sus cortes',
    root: pwRoot,
  },
};
