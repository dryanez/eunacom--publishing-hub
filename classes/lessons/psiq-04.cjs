// Clase 17.4 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-04). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.11.1.002) no tiene preguntas reales propias; la psiquiatría real del banco está bajo 5.01.1.xxx. De la búsqueda por tema se usó:
//   Julio 2025 P99 (depresión posparto: sertralina más psicoterapia). Es la única pregunta real sobre el tema central; psiq-01 la dejó sin usar (tema de esta clase).
// No usadas: Diciembre 2019 P95 y Diciembre 2017 P110 (esquizoafectivo con antecedente de depresión posparto: el antecedente es solo un dato; la segunda tiene la correcta en duda);
//   Julio 2019 P49 (depresión psicótica, no perinatal); preguntas de puerperio obstétrico (endometritis, mastitis, Sheehan, miocardiopatía periparto): tema de ob/gin.
// Sin pregunta real sobre baby blues ni sobre fármaco compatible con la lactancia: dos preguntas del libro como "Banco EUNACOM · Caso representativo".
// Decisiones de seguridad: la psicosis puerperal se enseña como emergencia con hospitalización; el libro la nombra como "TEC de elección", aquí la TEC queda como opción rápida en casos graves o sin respuesta (nota A).
//   En la pregunta real Julio 2025 P99 hay pensamientos de hacerse daño: en la explicación se agrega evaluar el riesgo antes de tratar. Nunca se enseña suspender la lactancia sin necesidad.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Depresión posparto y trastornos afectivos perinatales: tristeza materna, depresión y psicosis',
      say: 'Bienvenido. Hoy vemos los trastornos del ánimo después del parto. Son tres cuadros que se parecen en la superficie y que se manejan de forma totalmente distinta: la tristeza materna pasajera, la depresión posparto y la psicosis puerperal. Distinguirlos por el momento en que aparecen y por el vínculo con el bebé es lo que se pregunta en el EUNACOM, y además puede salvar vidas.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué el puerperio es vulnerable',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Caída hormonal', s: 'Estrógeno y progesterona' },
        { id: 'b', col: 0, row: 3, k: 'cause', t: 'Falta de sueño', s: 'Y demandas del recién nacido' },
        { id: 'c', col: 2, row: 2, k: 'mech', t: 'Vulnerabilidad afectiva', s: 'Biológica y psicosocial' },
        { id: 'd', col: 4, row: 1, k: 'good', t: 'Tristeza materna', s: 'Frecuente, pasajera' },
        { id: 'e', col: 4, row: 2, k: 'risk', t: 'Depresión posparto', s: '10 a 15%' },
        { id: 'f', col: 4, row: 3, k: 'alert', t: 'Psicosis puerperal', s: 'Emergencia' },
      ],
      edges: [
        { from: 'a', to: 'c' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'c', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Hormonas y sueño',
          say: 'Después del alumbramiento los estrógenos y la progesterona caen de golpe. A eso se suman la falta de sueño y las demandas del recién nacido. Es la etapa de mayor vulnerabilidad del ánimo en la vida de una mujer.' },
        { show: ['d', 'e', 'f'], note: 'Un espectro de gravedad',
          say: 'De ahí sale un espectro. En un extremo, la tristeza materna, que le pasa a la mayoría y se resuelve sola. En el medio, la depresión posparto, que afecta a una de cada diez mujeres o un poco más. Y en el otro extremo, la psicosis puerperal, rara, pero una emergencia psiquiátrica. La pregunta de siempre es: ¿en cuál de los tres estoy?' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Tres cuadros, tres tiempos',
      cards: [
        { title: 'Tristeza materna', tag: 'Baby blues', kind: 'normal', items: [
          { t: 'Día 3 a 5 del posparto', d: 'Afecta a 50 a 80% de las madres',
            say: 'La tristeza materna, o baby blues, aparece entre el tercer y el quinto día después del parto y afecta entre la mitad y cuatro de cada cinco madres.' },
          { t: 'Llanto fácil, labilidad, fatiga', d: 'Vínculo con el bebé preservado',
            say: 'Hay llanto fácil, irritabilidad leve y cansancio, pero el vínculo con el recién nacido está intacto y no hay ideas de hacerle daño.' },
          { t: 'Remite en 10 a 14 días', d: 'Educación y apoyo, sin fármacos',
            say: 'Se resuelve espontáneamente en diez a catorce días. Solo se necesita educación y apoyo de la familia, sin fármacos.' },
        ] },
        { title: 'Depresión posparto', tag: 'DPP', kind: 'key', items: [
          { t: 'Semana 2 a 6', d: 'Hasta 1 año; afecta a 10 a 15%',
            say: 'La depresión posparto empieza típicamente entre la segunda y la sexta semana, aunque puede debutar hasta el año. Afecta a diez a quince de cada cien puérperas.' },
          { t: 'Es una depresión mayor', d: 'Anhedonia, culpa, desapego del bebé',
            say: 'Cumple criterios de depresión mayor: pérdida del placer, llanto, culpa excesiva, sensación de incompetencia como madre, y a veces rechazo o desapego hacia el bebé.' },
          { t: 'Insomnio aunque el bebé duerma', d: 'Distinto del cansancio normal',
            say: 'Un dato muy típico: no logra dormir ni siquiera cuando el bebé duerme. Eso la distingue del simple cansancio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Línea de tiempo',
      title: 'El momento orienta el diagnóstico',
      nodes: [
        { id: 'p', col: 0, row: 2, k: 'start', t: 'Parto', s: 'Día cero' },
        { id: 'b', col: 1, row: 1, k: 'good', t: 'Blues', s: 'Día 3 a 5; termina en 14 días' },
        { id: 'ps', col: 2, row: 3, k: 'alert', t: 'Psicosis', s: 'Primeras 1 a 2 semanas' },
        { id: 'd', col: 3, row: 1, k: 'risk', t: 'Depresión posparto', s: 'Semana 2 a 6' },
        { id: 'r', col: 4, row: 2, k: 'trap', t: 'Más de 2 semanas', s: 'Ya no es blues' },
      ],
      edges: [
        { from: 'p', to: 'b' }, { from: 'p', to: 'ps' }, { from: 'b', to: 'd' }, { from: 'd', to: 'r' },
      ],
      steps: [
        { show: ['p', 'b'], note: 'Primero llega el blues',
          say: 'Partimos desde el parto. Lo primero que puede aparecer es la tristeza materna, entre el tercer y el quinto día, y desaparece sola antes de las dos semanas.' },
        { show: ['ps'], note: 'La psicosis es hiperaguda',
          say: 'La psicosis puerperal también es precoz y de inicio muy rápido, en la primera o segunda semana. Por eso un llanto fácil de los primeros días no se puede dar por bueno sin preguntar por delirios, confusión y alteración del sueño.' },
        { show: ['d', 'r'], note: 'Si dura más, es otra cosa',
          say: 'La depresión posparto aparece más tarde, de la segunda a la sexta semana. Y aquí va la trampa: una madre con anhedonia y culpa a las seis semanas no tiene baby blues. El blues dura menos de catorce días.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: 'Escala de Edimburgo en APS',
      cards: [
        { title: 'Quién y cuándo', tag: 'Universal', kind: 'key', items: [
          { t: 'Tamizaje a todas las madres', d: 'Controles de niño sano: 2 y 6 meses',
            say: 'En Chile el tamizaje es universal. En los controles de niño sano, a los dos y a los seis meses, se aplica a la madre la Escala de Depresión Postnatal de Edimburgo, llamada EPDS.' },
          { t: 'Chile Crece Contigo y GES 21', d: 'Depresión en mayores de 15 años',
            say: 'Esto forma parte de Chile Crece Contigo y de la garantía explícita número veintiuno, la de depresión en personas de quince años y más.' },
        ] },
        { title: 'Cómo se interpreta', tag: 'Puntaje', kind: 'criteria', items: [
          { t: 'Menos de 10: bajo riesgo', d: 'Se sigue con el control habitual',
            say: 'Con menos de diez puntos, el riesgo es bajo.' },
          { t: '10 o más: tamizaje positivo', d: 'Confirmar el diagnóstico y tratar',
            say: 'Con diez puntos o más, el tamizaje es positivo. No es un diagnóstico, es una alarma: obliga a confirmar con una entrevista clínica y a ingresar a la garantía, según el libro dentro de veinticuatro horas.' },
          { t: 'Pregunta 10 positiva: riesgo suicida', d: 'Se evalúa el mismo día',
            say: 'Ojo con la pregunta diez, la de ideas de hacerse daño. Si es positiva, el riesgo suicida se evalúa de inmediato, aunque el puntaje total sea bajo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia',
      title: 'Psicosis puerperal: emergencia',
      cards: [
        { title: 'Cómo se presenta', tag: 'Inicio hiperagudo', kind: 'alert', items: [
          { t: '1 a 2 por 1.000 partos', d: 'Primeras 1 a 2 semanas',
            say: 'Es poco frecuente, uno a dos casos por cada mil partos, y empieza muy rápido, en la primera o segunda semana.' },
          { t: 'Insomnio total, agitación, confusión', d: 'Labilidad maníaca, pensamiento desorganizado',
            say: 'Hay insomnio severo, agitación, perplejidad, ánimo cambiante de tipo maníaco y pensamiento desorganizado.' },
          { t: 'Delirios centrados en el bebé', d: 'Riesgo de infanticidio y suicidio',
            say: 'El signo de alarma son los delirios sobre el recién nacido, por ejemplo creer que está poseído o que está destinado a sufrir. Eso conlleva riesgo real para el bebé y para la madre.' },
        ] },
        { title: 'Qué se hace', tag: 'Conducta', kind: 'key', items: [
          { t: 'Hospitalización psiquiátrica urgente', d: 'Idealmente unidad madre-bebé',
            say: 'La conducta es hospitalización psiquiátrica de urgencia, de preferencia en una unidad conjunta madre-hijo, con supervisión continua para proteger al recién nacido. Nunca se manda a la casa.' },
          { t: 'Antipsicótico y estabilizador', d: 'Muchas veces es un bipolar no diagnosticado',
            say: 'Se usa un antipsicótico más un estabilizador del ánimo, porque muchas veces detrás hay un trastorno bipolar que no se había diagnosticado. La terapia electroconvulsiva es una opción rápida y segura en casos graves o que no responden.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratar la depresión y seguir amamantando',
      cards: [
        { title: 'Base del tratamiento', tag: 'Depresión posparto', kind: 'key', items: [
          { t: 'Psicoterapia y apoyo a la díada', d: 'Madre e hijo se tratan juntos',
            say: 'El tratamiento incluye psicoterapia individual e intervenciones que fortalecen el vínculo entre la madre y el bebé.' },
          { t: 'Fármaco si es moderada o grave', d: 'Control en 2 semanas',
            say: 'Cuando el cuadro es moderado o grave se agrega un antidepresivo, y se controla a las dos semanas.' },
          { t: 'La lactancia no se suspende', d: 'Salvo contraindicación estricta',
            say: 'Y una regla de oro: no se le pide a la madre que deje de amamantar solo porque tiene depresión o porque va a tomar un fármaco compatible. Suspender la lactancia sin necesidad es un error.' },
        ] },
        { title: 'Fármacos y lactancia', tag: 'Elección', kind: 'pharma', items: [
          { t: 'Sertralina: primera elección', d: '50 a 100 mg; casi no pasa a la leche',
            say: 'La primera elección durante la lactancia es la sertralina, de cincuenta a cien miligramos al día. Pasa muy poco a la leche y los niveles en el lactante son prácticamente indetectables.' },
          { t: 'Paroxetina: alternativa', d: 'Baja excreción; más sedante y anticolinérgica',
            say: 'La paroxetina también pasa poco a la leche, pero es más sedante y tiene efectos anticolinérgicos. Es una alternativa, no la primera opción.' },
          { t: 'Fluoxetina: evitar iniciarla', d: 'Vida media larga; no cambiar si ya responde',
            say: 'La fluoxetina pasa más a la leche y tiene vida media larga, por eso se prefiere no empezarla en lactancia exclusiva. Si la madre ya respondía bien a ella, no es obligatorio cambiarla.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la puérpera con cambios del ánimo a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Llanto fácil, día 5, vínculo bueno', 'Educar y apoyar', 'Dar antidepresivo'],
          say: 'Llanto fácil al quinto día con buen vínculo es baby blues: educación y apoyo familiar. El error es medicarla.' },
        { cells: ['Anhedonia y culpa a las 6 semanas', 'Depresión posparto: tratar', 'Decir que es el blues'],
          say: 'Si a las seis semanas hay anhedonia y culpa, es depresión posparto. El error clásico es tranquilizarla diciendo que es el blues normal.' },
        { cells: ['Depresión posparto y lactancia', 'Sertralina y seguir amamantando', 'Suspender la lactancia'],
          say: 'Depresión posparto en una madre que amamanta: sertralina, y la lactancia continúa. Suspenderla sin necesidad no se acepta.' },
        { cells: ['Delirios sobre el bebé, insomnio total', 'Hospitalizar de urgencia', 'Control ambulatorio'],
          say: 'Delirios sobre el bebé con insomnio total es psicosis puerperal: urgencia, hospitalización y protección del recién nacido. El error es citarla a control.' },
        { cells: ['EPDS de 10 o más', 'Confirmar y tratar', 'Dar el alta sin evaluar'],
          say: 'Un puntaje de diez o más en la escala de Edimburgo no es un diagnóstico, pero obliga a confirmar y tratar. El error es ignorarlo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 27 años, parto vaginal hace 7 semanas, acude al control de niño sano de los 2 meses. La EPDS da 15 puntos. Hace 1 mes no disfruta estar con su hijo, siente que "no nació para ser madre", no logra dormir aunque el bebé duerma y se siente exhausta y culpable. Es protectora con el lactante, niega ideas de dañarlo y no tiene síntomas psicóticos. Amamanta en forma exclusiva y desea continuar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Explicar que es baby blues y controlar en 6 meses' },
        { letter: 'B', text: 'Suspender la lactancia e iniciar un tricíclico' },
        { letter: 'C', text: 'Sertralina, psicoterapia, mantener la lactancia y control en 2 semanas' },
        { letter: 'D', text: 'Hospitalización psiquiátrica de urgencia por psicosis puerperal' },
        { letter: 'E', text: 'Indicar benzodiacepinas para dormir y volver a control habitual' },
      ],
      correct: 'C',
      explanation: 'Depresión posparto: más de 2 semanas, criterios de depresión mayor y EPDS de 15. No hay psicosis ni riesgo para el bebé. Se trata con sertralina y psicoterapia, se mantiene la lactancia y se controla en 2 semanas.',
      say: {
        stem: 'Una primigesta de veintisiete años, siete semanas después del parto, en el control de niño sano de los dos meses. La escala de Edimburgo da quince puntos. Hace un mes no disfruta estar con su hijo, no duerme aunque el bebé duerma, y se siente agotada y culpable. Es protectora con el bebé, no tiene ideas de dañarlo ni síntomas psicóticos, y quiere seguir amamantando.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: explicar que es baby blues; suspender la lactancia e iniciar un tricíclico; sertralina, psicoterapia, mantener la lactancia y control en dos semanas; hospitalización por psicosis; o benzodiacepinas para dormir. Piénsalo.',
        answer: 'Es la C. Hay más de un mes de síntomas con criterios de depresión mayor y un tamizaje positivo, así que es depresión posparto y no blues. No hay psicosis ni riesgo para el bebé, entonces no se hospitaliza. Se indica sertralina por su mínimo paso a la leche, psicoterapia, y se mantiene la lactancia. Las benzodiacepinas solas no tratan la depresión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico: la urgencia',
      stem: 'Una mujer de 30 años, al décimo día de su primer parto, es traída por su familia. Lleva 3 noches casi sin dormir, está agitada y confusa, cambia rápido del llanto a la euforia y dice que su hijo "está poseído y hay que salvarlo". La familia teme que lo lastime.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar, indicar apoyo familiar y control en 2 semanas' },
        { letter: 'B', text: 'Iniciar sertralina y control ambulatorio' },
        { letter: 'C', text: 'Indicar benzodiacepinas y enviarla a casa con su familia' },
        { letter: 'D', text: 'Hospitalización psiquiátrica urgente, con supervisión y protección del bebé' },
        { letter: 'E', text: 'Aplicar la escala de Edimburgo y decidir según el puntaje' },
      ],
      correct: 'D',
      explanation: 'Es una psicosis puerperal: inicio hiperagudo, insomnio, agitación, labilidad y delirios centrados en el bebé. Es una emergencia con riesgo de infanticidio y suicidio. Se hospitaliza de inmediato y se trata con antipsicótico y estabilizador.',
      say: {
        stem: 'Una mujer de treinta años, diez días después de su primer parto. Tres noches casi sin dormir, agitada y confusa, pasa rápido del llanto a la euforia, y dice que su hijo está poseído y hay que salvarlo. La familia teme que lo lastime.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar y controlar en dos semanas; sertralina con control ambulatorio; benzodiacepinas y a la casa; hospitalización psiquiátrica urgente con protección del bebé; o aplicar la escala de Edimburgo. Piénsalo.',
        answer: 'Es la D. Inicio rápido, insomnio, agitación, ánimo cambiante y delirios sobre el bebé: psicosis puerperal, una emergencia con riesgo para el recién nacido y para ella. Se hospitaliza de inmediato. Tamizar con la escala o mandarla a casa pondría en peligro a ambos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 99',
      stem: 'Mujer de 30 años, 3 semanas post parto vaginal, consulta por llanto fácil, tristeza, insomnio, sentimiento de incompetencia como madre y pensamientos de hacerse daño. ¿Cuál es el diagnóstico y tratamiento?',
      question: '¿Cuál es el diagnóstico y tratamiento?',
      options: [
        { letter: 'A', text: 'Depresión postparto: iniciar antidepresivo (sertralina) + psicoterapia' },
        { letter: 'B', text: 'Blues postparto: tranquilizar, resolverá espontáneamente en días' },
        { letter: 'C', text: 'Psicosis puerperal: hospitalización de urgencia' },
        { letter: 'D', text: 'Trastorno adaptativo: solo psicoterapia' },
        { letter: 'E', text: 'Trastorno bipolar postparto: iniciar litio' },
      ],
      correct: 'A',
      explanation: 'Más de 2 semanas del parto, síntomas depresivos e ideas de autolesión: depresión posparto. Se trata con sertralina, segura en lactancia, y psicoterapia. Con ideas de hacerse daño se evalúa antes el riesgo suicida; si es moderado o alto, se deriva.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de treinta años, tres semanas después de un parto vaginal, con llanto fácil, tristeza, insomnio, sentimiento de incompetencia como madre y pensamientos de hacerse daño.',
        question: '¿Cuál es el diagnóstico y tratamiento?',
        options: 'Las opciones: depresión posparto con sertralina y psicoterapia; blues, tranquilizar; psicosis puerperal con hospitalización; trastorno adaptativo con psicoterapia sola; o bipolar con litio. Piénsalo.',
        answer: 'Es la A. A las tres semanas ya pasó el plazo del blues, que cede en menos de dos semanas, y no hay delirios ni confusión, así que no es psicosis. Es depresión posparto: sertralina, que es segura en lactancia, más psicoterapia. Ojo con el dato de hacerse daño: en la vida real primero se evalúa el riesgo suicida, y si es moderado o alto se deriva con urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una madre primípara de 24 años consulta al 5.° día postparto por llanto fácil, hipersensibilidad emocional y fatiga. Refiere que a ratos se siente desbordada por los cuidados del recién nacido, pero amamanta a su hijo con afecto y logra descansar cuando sus familiares la apoyan. Su examen mental no muestra anhedonia persistente, desapego ni ideas delirantes. ¿Cuál es el diagnóstico más probable y la conducta adecuada?',
      question: '¿Cuál es el diagnóstico más probable y la conducta adecuada?',
      options: [
        { letter: 'A', text: 'Depresión posparto mayor; iniciar sertralina 50 mg al día de inmediato' },
        { letter: 'B', text: 'Disforia puerperal ("baby blues"); psicoeducación, apoyo familiar y seguimiento sin psicofármacos' },
        { letter: 'C', text: 'Psicosis puerperal incipiente; derivar de urgencia a hospitalización cerrada' },
        { letter: 'D', text: 'Trastorno de pánico posparto; alprazolam en gotas cada 8 horas' },
        { letter: 'E', text: 'Encefalopatía puerperal; resonancia magnética de encéfalo urgente' },
      ],
      correct: 'B',
      explanation: 'Baby blues: día 3 a 5, llanto fácil y labilidad, vínculo preservado, sin anhedonia persistente ni delirios. Remite en 10 a 14 días con educación y apoyo, sin fármacos. La sertralina se reserva para la depresión instalada.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Una madre primípara de veinticuatro años, al quinto día del parto, con llanto fácil, hipersensibilidad y fatiga. A ratos se siente desbordada, pero amamanta con afecto y descansa cuando la familia ayuda. Sin anhedonia persistente, desapego ni delirios.',
        question: '¿Cuál es el diagnóstico más probable y la conducta adecuada?',
        options: 'Las opciones: depresión posparto con sertralina; baby blues con psicoeducación y apoyo; psicosis incipiente con hospitalización; pánico con alprazolam; o encefalopatía con resonancia. Piénsalo.',
        answer: 'Es la B. Quinto día, llanto fácil, vínculo preservado y sin anhedonia ni delirios: tristeza materna. Se resuelve sola en unas dos semanas, y se maneja con educación y apoyo familiar. La sertralina es para la depresión ya instalada, y la psicosis traería delirios y confusión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 29 años, en su 4.ª semana de puerperio, consulta por anhedonia profunda, llanto diario, culpa intensa y temor a quedarse sola con su bebé porque "siente que no lo quiere lo suficiente". En el CESFAM se aplica la EPDS con 16 puntos. Amamanta con leche materna exclusiva y desea continuar. ¿Cuál es el tratamiento farmacológico de primera elección en este escenario?',
      question: '¿Cuál es el tratamiento farmacológico de primera elección?',
      options: [
        { letter: 'A', text: 'Suspender definitivamente la lactancia e iniciar amitriptilina 150 mg al día' },
        { letter: 'B', text: 'Mantener la lactancia materna e iniciar sertralina 50 mg al día' },
        { letter: 'C', text: 'Fenobarbital 100 mg cada noche para garantizar el sueño materno' },
        { letter: 'D', text: 'Fluoxetina 60 mg al día junto con bromocriptina para inhibir la prolactina' },
        { letter: 'E', text: 'Evitar todo fármaco y esperar a que el niño cumpla 6 meses' },
      ],
      correct: 'B',
      explanation: 'Depresión posparto con EPDS de 16. En lactancia la primera elección es sertralina, de mínimo paso a la leche. La lactancia no se suspende sin necesidad. No tratar deteriora el desarrollo del lactante.',
      say: {
        stem: 'Otro caso representativo del banco. Una mujer de veintinueve años, cuarta semana de puerperio, con anhedonia profunda, llanto diario, culpa intensa y miedo a quedarse sola con su bebé. La escala de Edimburgo da dieciséis puntos. Amamanta en forma exclusiva y quiere continuar.',
        question: '¿Cuál es el tratamiento farmacológico de primera elección?',
        options: 'Las opciones: suspender la lactancia y dar amitriptilina; mantener la lactancia con sertralina; fenobarbital en la noche; fluoxetina con bromocriptina; o esperar sin fármacos. Piénsalo.',
        answer: 'Es la B. Es una depresión posparto, y en lactancia la primera elección es la sertralina, que casi no pasa a la leche. Suspender la lactancia no hace falta y le quita beneficios al bebé. El fenobarbital sedaría al lactante, la bromocriptina inhibe la lactancia, y no tratar deteriora a la madre y al niño.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: ánimo perinatal',
      cards: [
        { title: 'Diagnóstico', tag: 'El tiempo manda', kind: 'key', items: [
          { t: 'Blues: día 3 a 5; breve', d: 'Vínculo preservado; sin fármacos',
            say: 'Cerremos con las reglas de oro. El blues aparece entre el tercer y el quinto día, dura menos de catorce días, el vínculo está preservado y no necesita fármacos.' },
          { t: 'Tamizar con Edimburgo; 10 o más', d: 'Confirmar y tratar; pregunta 10: riesgo',
            say: 'La depresión posparto se tamiza con la escala de Edimburgo. Diez puntos o más se confirma y se trata, y si la pregunta diez es positiva, se evalúa el riesgo suicida.' },
        ] },
        { title: 'Conducta', tag: 'Seguridad', kind: 'alert', items: [
          { t: 'Depresión posparto: sertralina', d: 'Más psicoterapia; la lactancia sigue',
            say: 'La depresión posparto se trata con psicoterapia y, si es moderada o grave, sertralina, y la lactancia se mantiene.' },
          { t: 'Delirios sobre el bebé: urgencia', d: 'Hospitalizar y proteger al recién nacido',
            say: 'Y la psicosis puerperal es una emergencia: delirios sobre el bebé, insomnio total y agitación se hospitalizan de inmediato. Si te llevas una sola idea de hoy: lo que separa un baby blues de una urgencia es el tiempo y el vínculo, y a una puérpera con delirios nunca se la manda a casa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Puérpera con cambios del ánimo: de la sospecha a la conducta',
    root: N('start', 'Puérpera con ánimo alterado', 'Primeras semanas o meses',
      'Una madre consulta o es tamizada por cambios del ánimo después del parto. Partimos descartando lo más grave.',
      ['Siempre', N('do', 'Preguntar por psicosis y riesgo', 'Delirios, confusión, ideas de daño',
        'Se pregunta por delirios, confusión, insomnio total y por ideas de hacerse daño o de dañar al bebé. Eso se hace antes de cualquier otra cosa.',
        ['Delirios sobre el bebé o confusión', N('refer', 'Psicosis: hospitalizar de urgencia', 'Antipsicótico y estabilizador; proteger al bebé',
          'Es una psicosis puerperal. Se hospitaliza de inmediato, de preferencia con unidad madre-hijo, y se protege al recién nacido.')],
        ['Sin psicosis, menos de 2 semanas', N('ok', 'Blues: educar y apoyar', 'Remite en 10 a 14 días',
          'Si el inicio fue entre el día tres y cinco, el vínculo está preservado y dura menos de dos semanas, es baby blues. Educación, apoyo familiar y seguimiento, sin fármacos.')],
        ['Sin psicosis, más de 2 semanas', N('do', 'Confirmar depresión posparto', 'Criterios de depresión mayor y EPDS 10 o más',
          'Si hay anhedonia, culpa, insomnio y un puntaje de diez o más en la escala de Edimburgo, se confirma depresión posparto.',
          ['Moderada o grave', N('ok', 'Sertralina y psicoterapia', 'Mantener la lactancia; control en 2 semanas',
            'Se inicia sertralina más psicoterapia y apoyo a la díada, se mantiene la lactancia y se controla a las dos semanas. Si hay riesgo suicida moderado o alto, se deriva.')],
        )],
      )],
    ),
  },
};
