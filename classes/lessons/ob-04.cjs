// Clase 19.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_1.cjs (ob-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pw37 = N('do', 'Interrumpes a la semana 37', 'Puede tolerar inducción',
  'En la etapa uno, interrumpes a la semana treinta y siete, y puedes intentar la inducción: no necesitas ir directo a cesárea.');

const pw34 = N('do', 'Interrumpes a la semana 34', 'Por cesárea, con corticoides antes',
  'En la etapa dos, adelantas a la semana treinta y cuatro, por cesárea, y antes le das corticoides para madurar el pulmón.');

const pw30 = N('do', 'Interrumpes a la semana 30', 'Cesárea electiva, con corticoides',
  'En la etapa tres, adelantas más, a la semana treinta, también por cesárea electiva y con corticoides.');

const pw2628 = N('alert', 'Interrupción inmediata, semana 26 a 28', 'Corticoides y sulfato de magnesio antes',
  'Y en la etapa cuatro, la interrupción es inmediata, entre las semanas veintiséis y veintiocho, con corticoides y sulfato de magnesio para proteger el cerebro, porque el feto está en falla franca.');

const pwEtapa = N('q', '¿Qué muestra el Doppler?', 'De más leve a más grave',
  'Y aquí está el corazón del tema: el Doppler no es todo o nada, tiene cuatro etapas, y cada una te dice cuándo interrumpes.',
  ['Etapa I: umbilical > P95 o cerebral < P5', pw37],
  ['Etapa II: diástole ausente en umbilical', pw34],
  ['Etapa III: diástole reversa en umbilical', pw30],
  ['Etapa IV: onda a reversa en ductus venoso', pw2628]);

const pwRcf = N('do', 'Es una restricción de crecimiento', 'Ahora etapificas con Doppler',
  'Con cualquiera de esos dos hallazgos, ya no es un PEG: es una restricción de crecimiento fetal verdadera, y lo que sigue es etapificar con el Doppler.',
  ['', pwEtapa]);

const pwPeg = N('ok', 'Es un PEG constitucional', 'Doppler normal: parto a término',
  'Si el Doppler de la arteria umbilical, la cerebral media y las uterinas está estrictamente normal, es un pequeño para la edad gestacional constitucional. No hay hipoxia, y esperas el parto a término, entre las semanas treinta y nueve y cuarenta.');

const pwPercentil = N('q', '¿Bajo qué percentil está el peso?', 'Y cómo sale el Doppler',
  'Miras dos cosas a la vez: bajo qué percentil está el peso fetal estimado, y cómo sale el Doppler.',
  ['P3 a P10, Doppler normal', pwPeg],
  ['Menor a P3, o Doppler alterado', pwRcf]);

const pwRoot = N('start', 'Feto con peso bajo el percentil 10', 'La pregunta no es solo el peso',
  'Tienes un feto que está creciendo bajo el percentil diez. La pregunta que decide todo no es solo cuánto pesa: es si además tiene el Doppler alterado.',
  ['', pwPercentil]);

module.exports = {
  id: 'ob-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'No todo feto pequeño está enfermo: el Doppler te dice cuál sí',
      say: 'Bienvenido a una de las clases más rentables del módulo: la restricción de crecimiento fetal. Vas a ver algo que se pregunta una y otra vez: no todo feto que pesa poco está en riesgo. Hay un pequeño para la edad gestacional que es solo eso, pequeño y sano, y hay una restricción de crecimiento verdadera, con una placenta que está fallando. Lo que separa a uno del otro, siempre, es el Doppler. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'PEG constitucional versus restricción de crecimiento',
      nodes: [
        { id: 'epf', col: 0, row: 1, k: 'start', t: 'Peso estimado bajo percentil 10', s: 'Ecografía de control' },
        { id: 'peg', col: 1, row: 0, k: 'good', t: 'Percentil 3 a 10', s: 'Con Doppler estrictamente normal' },
        { id: 'sano', col: 2, row: 0, k: 'good', t: 'PEG constitucional', s: 'Feto genéticamente pequeño' },
        { id: 'rcf', col: 1, row: 2, k: 'risk', t: 'Menor a percentil 3', s: 'O Doppler alterado, en cualquier percentil' },
        { id: 'plac', col: 2, row: 2, k: 'cause', t: 'Insuficiencia placentaria', s: 'Falla en la invasión trofoblástica' },
        { id: 'malo', col: 3, row: 2, k: 'risk', t: 'Restricción de crecimiento', s: 'Riesgo real de hipoxia' },
      ],
      edges: [
        { from: 'epf', to: 'peg' }, { from: 'peg', to: 'sano' },
        { from: 'epf', to: 'rcf' }, { from: 'rcf', to: 'plac' }, { from: 'plac', to: 'malo' },
      ],
      steps: [
        { show: ['epf'], note: 'El primer dato es solo una alerta',
          say: 'Partamos por el mecanismo. Te llega un feto con peso estimado bajo el percentil diez, y ese dato, solo, no te dice nada todavía.' },
        { show: ['peg'], note: 'El Doppler tiene que estar perfecto',
          say: 'Si está entre el percentil tres y el diez, y el Doppler de la arteria umbilical, de la cerebral media y de las arterias uterinas está estrictamente normal, con líquido amniótico también normal...' },
        { show: ['sano'], note: 'Feto sano, no enfermo',
          say: '...tienes un pequeño para la edad gestacional constitucional. Es un feto genéticamente pequeño, mantiene su propio canal de crecimiento, y su pronóstico es igual al de un feto de peso adecuado.' },
        { show: ['rcf'], note: 'Dos puertas de entrada distintas',
          say: 'Pero hay otras dos puertas que te llevan a un diagnóstico distinto: que el peso esté bajo el percentil tres, sin importar el Doppler, o que el Doppler salga alterado, sin importar el percentil.' },
        { show: ['plac'], note: 'El origen es la placenta, no el feto',
          say: 'Por cualquiera de esas dos puertas, el problema real es la placenta: las arterias espirales no se remodelaron bien, y la placenta no está entregando lo que el feto necesita.' },
        { show: ['malo'], note: 'Aquí sí hay riesgo de hipoxia',
          say: 'Y eso es la restricción de crecimiento fetal verdadera. Aquí sí hay riesgo real de hipoxia, y aquí sí te vas a tener que preocupar del momento exacto del parto. Guarda esta diferencia, porque es la base de toda la clase.' },
        { show: ['malo'], note: 'Una tercera puerta: la caída de percentiles',
          say: 'Y hay una tercera forma de llegar al mismo diagnóstico, que también se pregunta: si el feto cae más de dos canales percentilares entre dos ecografías separadas por semanas, ya es restricción de crecimiento, aunque el percentil actual no sea tan bajo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'RCF precoz versus RCF tardío',
      title: 'Dos formas de la misma enfermedad',
      cards: [
        { title: 'RCF precoz', tag: 'Antes de las 32 semanas', kind: 'alert', items: [
          { t: 'Falla placentaria masiva', d: 'Placentación defectuosa desde el inicio',
            say: 'Cuando la restricción debuta antes de las treinta y dos semanas, hablas de RCF precoz. Ahí la falla en la placenta es masiva y profunda desde el principio.' },
          { t: 'Alta asociación con preeclampsia', d: 'Hasta en 7 de cada 10 casos',
            say: 'Se asocia a preeclampsia severa en la mayoría de los casos: hasta siete de cada diez.' },
          { t: 'Deterioro Doppler ordenado', d: 'Umbilical, luego cerebral, luego ductus venoso',
            say: 'Y el Doppler se deteriora en un orden predecible: primero la arteria umbilical, después la cerebral media, y al final el ductus venoso. Ese orden es justo lo que vamos a etapificar ahora.' },
        ] },
        { title: 'RCF tardío', tag: 'Desde las 32 semanas', kind: 'alert', items: [
          { t: 'Insuficiencia placentaria leve', d: 'Por senescencia de la placenta',
            say: 'Si debuta desde las treinta y dos semanas, casi siempre a término, es RCF tardío. La falla placentaria es más leve, por senescencia difusa, y casi no se asocia a preeclampsia.' },
          { t: 'Umbilical normal, cerebral alterada', d: 'Vasodilatación cerebral protectora',
            say: 'Aquí la arteria umbilical suele estar normal. Lo que se altera es la cerebral media, que se dilata para proteger al cerebro, un efecto que llamamos redistribución.' },
          { t: 'Riesgo de hipoxia súbita', d: 'Se puede descompensar en el trabajo de parto',
            say: 'Su peligro es distinto: pasa desapercibido, y el riesgo mayor es una hipoxia aguda durante el trabajo de parto, no algo lento y progresivo. Por eso, aunque suene menos grave que el precoz, es el que más se asocia a un óbito inesperado en un embarazo que parecía tranquilo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etapificación Doppler',
      title: 'Cuatro etapas, cuatro momentos de parto',
      nodes: [
        { id: 'e1', col: 0, row: 0, k: 'risk', t: 'Etapa I', s: 'Umbilical > P95 o cerebral < P5' },
        { id: 's1', col: 1, row: 0, k: 'good', t: 'Semana 37', s: 'Puede tolerar inducción' },
        { id: 'e2', col: 0, row: 1, k: 'risk', t: 'Etapa II', s: 'Diástole ausente en la umbilical' },
        { id: 's2', col: 1, row: 1, k: 'good', t: 'Semana 34', s: 'Por cesárea, con corticoides' },
        { id: 'e3', col: 0, row: 2, k: 'risk', t: 'Etapa III', s: 'Diástole reversa en la umbilical' },
        { id: 's3', col: 1, row: 2, k: 'good', t: 'Semana 30', s: 'Cesárea electiva' },
        { id: 'e4', col: 0, row: 3, k: 'trap', t: 'Etapa IV', s: 'Onda a reversa en el ductus venoso' },
        { id: 's4', col: 1, row: 3, k: 'alert', t: 'Semana 26 a 28', s: 'Interrupción inmediata' },
      ],
      edges: [
        { from: 'e1', to: 's1' }, { from: 'e2', to: 's2' }, { from: 'e3', to: 's3' }, { from: 'e4', to: 's4' },
      ],
      steps: [
        { show: ['e1', 's1'], note: 'Lo más leve, resistencia solamente',
          say: 'Vamos con las cuatro etapas, de la más leve a la más grave. En la etapa uno, el índice de pulsatilidad de la umbilical está sobre el percentil noventa y cinco, o el de la cerebral media, bajo el percentil cinco. Con esto, interrumpes a la semana treinta y siete, y puedes intentar la inducción.' },
        { show: ['e2', 's2'], note: 'Ya no hay flujo en diástole',
          say: 'En la etapa dos, la arteria umbilical pierde el flujo en diástole: se queda sin flujo en más de la mitad del ciclo, señal de que se obliteró entre el sesenta y el setenta por ciento del lecho vellositario. Aquí adelantas a la semana treinta y cuatro, por cesárea, y das corticoides antes de nacer.' },
        { show: ['e3', 's3'], note: 'El flujo va al revés',
          say: 'En la etapa tres, el flujo en diástole ya no está ausente: va al revés, reverso, reflejando una obliteración masiva de más del ochenta por ciento de los vasos placentarios. Interrumpes a la semana treinta, siempre por cesárea electiva.' },
        { show: ['e4', 's4'], note: 'Falla del corazón fetal, minutos cuentan',
          say: 'Y en la etapa cuatro, lo que se altera es el ductus venoso, con una onda llamada "a" que se vuelve reversa. Eso refleja que el corazón derecho del feto ya está fallando por la acidosis. Interrumpes de inmediato, entre las semanas veintiséis y veintiocho, con corticoides y sulfato de magnesio para proteger el cerebro. Fíjate en la lógica completa: mientras peor el Doppler, más temprano nace, sin importar lo prematuro que sea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuroprotección y maduración',
      title: 'Lo que le das antes de interrumpir',
      cards: [
        { title: 'Betametasona', tag: 'Antes de las 34 semanas', kind: 'pharma', items: [
          { t: '12 mg cada 24 horas', d: 'Dos dosis, vía intramuscular',
            say: 'Antes de las treinta y cuatro semanas, das betametasona, doce miligramos cada veinticuatro horas, dos dosis, por vía intramuscular. Reduce la membrana hialina, la hemorragia intraventricular y la mortalidad.' },
        ] },
        { title: 'Sulfato de magnesio', tag: 'Antes de las 32 semanas', kind: 'pharma', items: [
          { t: 'Neuroprotección fetal', d: 'Bolo y luego infusión continua',
            say: 'Y si el parto va a ser antes de las treinta y dos semanas, sumas sulfato de magnesio como neuroprotector: un bolo inicial, y después una infusión continua. Reduce la parálisis cerebral y la disfunción motora del recién nacido.' },
        ] },
        { title: 'Vía del parto y seguimiento', tag: 'Depende de la etapa', kind: 'criteria', items: [
          { t: 'Etapa II, III y IV', d: 'Siempre por cesárea',
            say: 'Y la vía del parto: desde la etapa dos en adelante, siempre cesárea. Le evitas al feto el estrés de las contracciones, que ya no tolera.' },
          { t: 'Doppler seriado', d: 'Cada 24 horas a 7 días, según gravedad',
            say: 'Mientras no llega el momento de interrumpir, el seguimiento es con Doppler seriado, cada veinticuatro horas hasta cada siete días, según qué tan grave sea la etapa. Ese control es lo que te avisa si el feto está empeorando antes de que llegue el daño permanente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo el razonamiento, desde el peso fetal hasta el momento exacto del parto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'PEG, RCF y el Doppler que decide todo',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Percentil 3 a 10, Doppler normal', 'PEG constitucional: parto a término', 'Adelantar el parto por el peso solo'],
          say: 'Repasemos las trampas. Percentil tres a diez con Doppler normal es un PEG constitucional, y el parto va a término. El error es adelantarlo solo porque el peso está bajo.' },
        { cells: ['Menor a percentil 3, aunque el Doppler mejore', 'Restricción de crecimiento severa: cesárea', 'Esperar porque el Doppler se ve normal ahora'],
          say: 'Un peso bajo el percentil tres sigue siendo restricción severa, aunque el Doppler salga normal en un control posterior. Esperar por ese dato es la trampa: la severidad ya la marcó el percentil.' },
        { cells: ['Diástole ausente en la arteria umbilical', 'Interrumpir a la semana 34, por cesárea', 'Solo repetir el Doppler y observar'],
          say: 'Diástole ausente en la umbilical: interrumpes a la semana treinta y cuatro, por cesárea. Solo repetir el Doppler y seguir observando es quedarse corto.' },
        { cells: ['Onda a reversa en el ductus venoso', 'Interrupción inmediata', 'Esperar a completar la maduración pulmonar'],
          say: 'La onda a reversa en el ductus venoso es la máxima urgencia: interrupción inmediata. Esperar a que termine la maduración pulmonar puede costar la vida del feto.' },
        { cells: ['Caída de más de 2 canales percentilares', 'Restricción de crecimiento, aunque el peso no sea bajo', 'Ignorarla si el peso actual es normal'],
          say: 'Y si el feto cae más de dos canales percentilares entre dos ecografías, ya es restricción de crecimiento, aunque el peso actual todavía parezca normal. Ignorar esa caída es otro error clásico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Embarazada de 33 semanas, con estimación de peso fetal en percentil 8. El Doppler muestra arteria umbilical con índice de pulsatilidad normal, arteria cerebral media normal, y líquido amniótico normal.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Restricción de crecimiento fetal etapa I; interrumpir a las 37 semanas' },
        { letter: 'B', text: 'Pequeño para la edad gestacional constitucional; parto a término, entre las 39 y 40 semanas' },
        { letter: 'C', text: 'Restricción de crecimiento fetal severa; cesárea inmediata' },
        { letter: 'D', text: 'Sufrimiento fetal agudo; solicitar amniocentesis' },
        { letter: 'E', text: 'Feto con peso adecuado para la edad gestacional' },
      ],
      correct: 'B',
      explanation: 'Peso en percentil 8 (entre P3 y P10) con Doppler estrictamente normal en todos los vasos: define un PEG constitucional, sin riesgo de hipoxia, con manejo conservador y parto a término.',
      say: {
        stem: 'Un caso. Embarazada de treinta y tres semanas, con una estimación de peso fetal en percentil ocho. El Doppler muestra la arteria umbilical normal, la cerebral media normal, y el líquido amniótico normal.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: restricción de crecimiento etapa uno con interrupción a las treinta y siete semanas, pequeño para la edad gestacional constitucional con parto a término, restricción severa con cesárea inmediata, sufrimiento fetal agudo con amniocentesis, o peso adecuado para la edad. Piénsalo.',
        answer: 'Es la B. El percentil ocho está entre tres y diez, y lo que decide aquí es que el Doppler está perfecto en todos los vasos. Eso es justo la definición de un pequeño para la edad gestacional constitucional: nada de hipoxia, manejo conservador, y parto a término, entre las semanas treinta y nueve y cuarenta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 24',
      stem: 'Paciente de 34 años, con embarazo de 35 semanas, con feto creciendo en percentil 2 desde la semana 33, con Doppler fetal normal en ese entonces. Se solicita un nuevo Doppler de control, que no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Inducir el parto' },
        { letter: 'B', text: 'Realizar cesárea' },
        { letter: 'C', text: 'Solicitar perfil biofísico' },
        { letter: 'D', text: 'Controlar semanalmente con Doppler' },
        { letter: 'E', text: 'Interrumpir a las 37 semanas' },
      ],
      correct: 'B',
      explanation: 'Un percentil 2 define restricción de crecimiento severa, independiente de que el Doppler siga normal: la severidad por percentil ya obliga a interrumpir a las 34 semanas, y por cesárea.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta y cuatro años, con un embarazo de treinta y cinco semanas, con un feto que crece en percentil dos desde la semana treinta y tres, con Doppler normal en ese momento. Se pide un nuevo Doppler de control, que tampoco muestra alteraciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: inducir el parto, hacer cesárea, pedir perfil biofísico, controlar semanalmente con Doppler, o interrumpir a las treinta y siete semanas. Piénsalo.',
        answer: 'Es la B. Aquí la trampa es dejarte tranquilizar porque el Doppler sigue normal. Pero un percentil dos, bajo el percentil tres, ya es una restricción de crecimiento severa por definición, sin importar el Doppler, y eso obliga a interrumpir a las treinta y cuatro semanas, que ya se cumplieron, por cesárea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 168',
      stem: 'Paciente cursando un embarazo de 35 semanas, es diagnosticada de restricción de crecimiento fetal en percentil 3.',
      question: '¿Cuál de las siguientes alteraciones es indicación de interrupción inmediata del embarazo?',
      options: [
        { letter: 'A', text: 'Oligohidramnios' },
        { letter: 'B', text: 'Aumento de la resistencia de las arterias umbilicales' },
        { letter: 'C', text: 'Dilatación de la arteria cerebral media' },
        { letter: 'D', text: 'Relación fémur/abdomen mayor a 0,25' },
        { letter: 'E', text: 'Ductus venoso con flujo ausente en diástole' },
      ],
      correct: 'E',
      explanation: 'El Doppler del ductus venoso alterado (flujo ausente o, más grave aún, onda a reversa) es el hallazgo más ominoso de la cascada, y su aparición obliga a la interrupción inmediata del embarazo.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente con un embarazo de treinta y cinco semanas, diagnosticada de restricción de crecimiento fetal en percentil tres.',
        question: '¿Cuál de las siguientes alteraciones es indicación de interrupción inmediata del embarazo?',
        options: 'Las opciones: oligohidramnios, aumento de la resistencia en las arterias umbilicales, dilatación de la cerebral media, relación fémur abdomen mayor a cero coma veinticinco, o ductus venoso con flujo ausente en diástole. Piénsalo.',
        answer: 'Es la E. Las otras cuatro son hallazgos que sí importan, pero no son el final de la cascada: son etapas más tempranas o marcadores acompañantes. El ductus venoso alterado es el último escalón, el que te dice que el corazón fetal ya está fallando, y por eso es el único que exige interrumpir de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 56',
      stem: 'Paciente multípara de 40 años, con un embarazo de 32 semanas. La ecografía muestra líquido amniótico normal, con un feto creciendo en percentil 10, con un peso fetal estimado de 1.320 gramos.',
      question: '¿Cuál es la actitud más adecuada?',
      options: [
        { letter: 'A', text: 'Observar evolución' },
        { letter: 'B', text: 'Solicitar Doppler de arterias uterinas' },
        { letter: 'C', text: 'Solicitar Doppler de arteria umbilical' },
        { letter: 'D', text: 'Repetir la ecografía obstétrica en 2 semanas' },
        { letter: 'E', text: 'Inducir maduración pulmonar con corticoides' },
      ],
      correct: 'C',
      explanation: 'Ante un feto bajo el percentil 10, el examen de elección para diferenciar un PEG constitucional de una restricción de crecimiento, y para etapificar su gravedad, es el Doppler de arteria umbilical.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente multípara de cuarenta años, con un embarazo de treinta y dos semanas. La ecografía muestra líquido amniótico normal, con un feto en percentil diez, y un peso estimado de mil trescientos veinte gramos.',
        question: '¿Cuál es la actitud más adecuada?',
        options: 'Las opciones: observar evolución, pedir Doppler de arterias uterinas, pedir Doppler de arteria umbilical, repetir la ecografía en dos semanas, o inducir maduración pulmonar con corticoides. Piénsalo.',
        answer: 'Es la C. Con un peso en percentil diez todavía no sabes si es un PEG constitucional o una restricción de verdad, y el examen que te lo dice, el que separa uno del otro y de paso te dice qué tan grave es, es el Doppler de la arteria umbilical. Observar sin más, o repetir la ecografía sin Doppler, te deja sin la información que decide todo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'PEG versus RCF', tag: 'El Doppler manda', kind: 'key', items: [
          { t: 'P3 a P10, Doppler normal', d: 'PEG: parto a término',
            say: 'Cerremos con las reglas de oro. Percentil tres a diez, con Doppler estrictamente normal, es un PEG, y el parto va a término.' },
          { t: 'Menor a P3, o Doppler alterado', d: 'Restricción de crecimiento verdadera',
            say: 'Bajo el percentil tres, o con Doppler alterado en cualquier percentil, ya es una restricción de crecimiento verdadera.' },
        ] },
        { title: 'Las cuatro etapas', tag: 'Cada una, su semana', kind: 'pharma', items: [
          { t: 'Etapa I a IV', d: 'Semana 37, 34, 30, y 26 a 28',
            say: 'Y las cuatro etapas del Doppler tienen su semana exacta: treinta y siete, treinta y cuatro, treinta, y veintiséis a veintiocho.' },
        ] },
        { title: 'La urgencia máxima', tag: 'Ductus venoso', kind: 'alert', items: [
          { t: 'Onda a reversa', d: 'Interrupción inmediata, sin esperar nada',
            say: 'La onda a reversa en el ductus venoso es la urgencia máxima: interrupción inmediata, con neuroprotección si el embarazo aún es pretérmino. Si te llevas una sola idea de hoy: el peso solo no te dice nada, es el Doppler el que separa al feto sano del que está en riesgo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'PEG constitucional versus restricción de crecimiento fetal',
    root: pwRoot,
  },
};
