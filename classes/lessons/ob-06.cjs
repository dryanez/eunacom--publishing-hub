// Clase 19.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwEclampsia = N('alert', 'Eclampsia', 'Convulsión tónico-clónica generalizada',
  'Si convulsionó, es eclampsia, sin importar si ya le habías bajado la presión.');

const pwSeveraPreg = N('q', '¿Convulsionó?', 'Eso separa severa de eclampsia',
  'La primera pregunta ante una preeclampsia con criterio de severidad es simple: ¿ya convulsionó?',
  ['Sí', pwEclampsia],
  ['No, todavía no', N('do', 'Preeclampsia severa', 'Igual recibe sulfato de magnesio ya',
    'Si no ha convulsionado todavía, igual está en riesgo de hacerlo, así que recibe el sulfato de magnesio de todas formas, como prevención.')]);

const pwMg = N('do', 'Sulfato de magnesio primero', 'Carga y luego infusión continua',
  'Lo primero, siempre, es el sulfato de magnesio: no el antihipertensivo, no la cesárea. Primero esto.');

const pwHellp = N('q', '¿Hemólisis, enzimas altas y plaquetas bajas?', 'Eso define el síndrome HELLP',
  'Después de estabilizarla, pregúntate si tiene hemólisis, transaminasas elevadas y plaquetas bajas.',
  ['Sí', N('alert', 'Síndrome HELLP', 'Interrupción inmediata, sin esperar edad gestacional',
    'Si los tres están presentes, es síndrome HELLP, y la interrupción es inmediata, sin importar cuántas semanas tenga.')],
  ['No', N('do', 'Solo preeclampsia severa o eclampsia', 'Interrupción tras estabilizar a la madre',
    'Si no cumple los tres criterios, igual interrumpes, pero apenas la madre esté estable.')]);

const pwRoot = N('start', 'PA de 160/110 o más, o criterio de severidad', 'Emergencia hipertensiva del embarazo',
  'Aquí tienes la emergencia. Actúas en un orden fijo: primero el magnesio, después todo lo demás.',
  ['¿Ya convulsionó?', pwSeveraPreg],
  ['¿Qué va primero?', pwMg],
  ['¿Hay HELLP?', pwHellp]);

module.exports = {
  id: 'ob-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El orden fijo: sulfato de magnesio primero, siempre, y después todo lo demás',
      say: 'Bienvenida a la continuación directa de la clase anterior. Ahí vimos la preeclampsia sin severidad; hoy vemos qué pasa cuando se complica: preeclampsia severa, eclampsia y síndrome HELLP. Este es un tema de máxima rentabilidad, y la buena noticia es que casi todo se resuelve con una sola idea: hay un orden fijo de acción, y ese orden empieza siempre con el sulfato de magnesio. Vamos a verlo.',
    },

    {
      type: 'points',
      kicker: 'Criterios de severidad',
      title: '¿Cuándo una preeclampsia deja de ser leve?',
      cards: [
        { title: 'Basta uno solo', tag: 'Ya es severa', kind: 'alert', items: [
          { t: 'PA 160/110 o más', d: 'Confirmada en dos tomas, 15 minutos aparte',
            say: 'Empecemos por los criterios de severidad. Basta que aparezca uno solo para que tu paciente pase de leve a severa. El primero: presión ciento sesenta sobre ciento diez o más, confirmada en dos tomas con quince minutos de diferencia.' },
          { t: 'Plaquetas bajo 100.000', d: 'O transaminasas duplicadas, o creatinina alta',
            say: 'El segundo grupo es de laboratorio: plaquetas bajo cien mil, o transaminasas al doble de lo normal, o creatinina sobre uno coma uno.' },
          { t: 'Cefalea o escotomas', d: 'O epigastralgia que no cede con analgésicos',
            say: 'Y el tercer grupo es neurológico y visceral: cefalea intensa que no cede, escotomas centellantes, o un dolor en el epigastrio que tampoco cede. Fíjate en algo: ese dolor epigástrico no es casualidad, viene de la cápsula del hígado estirándose, y lo vamos a ver de nuevo en el HELLP.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Eclampsia y HELLP',
      title: 'Cuando aparece la convulsión, o falla el hígado',
      nodes: [
        { id: 'sev', col: 0, row: 1, k: 'risk', t: 'Preeclampsia severa', s: 'Ya tiene un criterio de severidad' },
        { id: 'ecl', col: 1, row: 0, k: 'alert', t: 'Eclampsia', s: 'Convulsión tónico-clónica generalizada' },
        { id: 'cer', col: 2, row: 0, k: 'risk', t: 'Hemorragia cerebral', s: 'Su causa de muerte más frecuente' },
        { id: 'hel', col: 1, row: 2, k: 'alert', t: 'Síndrome HELLP', s: 'Hemólisis, hígado, plaquetas bajas' },
        { id: 'rot', col: 2, row: 2, k: 'risk', t: 'Rotura hepática', s: 'Dolor en puñalada, shock' },
      ],
      edges: [
        { from: 'sev', to: 'ecl', label: 'convulsiona' },
        { from: 'ecl', to: 'cer' },
        { from: 'sev', to: 'hel', label: 'daño hepático' },
        { from: 'hel', to: 'rot' },
      ],
      steps: [
        { show: ['sev'], note: 'Punto de partida de las dos complicaciones',
          say: 'Desde esta preeclampsia severa, hay dos caminos que se pueden disparar, y ambos son urgencias.' },
        { show: ['ecl'], note: 'Convulsiones sin otra causa neurológica',
          say: 'El primero es la eclampsia: convulsiones tónico-clónicas generalizadas, sin que haya otra causa neurológica de por medio.' },
        { show: ['cer'], note: 'Por eso el sulfato de magnesio importa tanto',
          say: 'Y su complicación más temida es la hemorragia cerebral, que es la causa más frecuente de muerte materna en la eclampsia. Justamente por eso el sulfato de magnesio es tan importante: previene la siguiente convulsión.' },
        { show: ['hel'], note: 'Tres letras: hemólisis, enzimas, plaquetas',
          say: 'El segundo camino es el síndrome HELLP: hemólisis, con esquistocitos y LDH sobre seiscientos; enzimas hepáticas elevadas; y plaquetas bajo cien mil.' },
        { show: ['rot'], note: 'El dolor en puñalada es la alarma',
          say: 'Su complicación catastrófica es la rotura hepática, con un dolor en puñalada y shock hipovolémico súbito. Ese dolor epigástrico intenso que no cede es la alarma que no puedes dejar pasar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'El orden: primero el magnesio, después la presión',
      cards: [
        { title: 'Sulfato de magnesio', tag: 'Esquema de Zuspan', kind: 'pharma', items: [
          { t: 'Carga de 4 a 5 gramos', d: 'Endovenoso, en 20 minutos',
            say: 'Vamos al tratamiento, en el orden en que se hace. Primero, siempre, el sulfato de magnesio: una carga de cuatro a cinco gramos endovenosos en veinte minutos.' },
          { t: '1 a 2 gramos por hora', d: 'Mantención, hasta 24 horas postparto',
            say: 'Y después, una mantención de uno a dos gramos por hora, que se mantiene veinticuatro horas después del parto.' },
        ] },
        { title: 'Vigilar la toxicidad', tag: 'Tres signos que revisas cada hora', kind: 'alert', items: [
          { t: 'Reflejo rotuliano presente', d: 'Su ausencia es el primer signo de alarma',
            say: 'Mientras la pasas, vigilas tres cosas cada hora. La primera: que el reflejo rotuliano siga presente. Su ausencia es la primera señal de que hay demasiado magnesio.' },
          { t: 'Frecuencia respiratoria normal', d: 'Y diuresis conservada',
            say: 'La segunda, que la frecuencia respiratoria esté bien. Y la tercera, que la diuresis se mantenga, porque el magnesio se elimina solo por el riñón.' },
          { t: 'Antídoto: gluconato de calcio', d: 'Un gramo endovenoso si hay toxicidad',
            say: 'Y si algo de esto falla, el antídoto es el gluconato de calcio, un gramo endovenoso, que tiene que estar disponible al lado de la cama.' },
        ] },
        { title: 'Después: la presión y el parto', tag: 'Labetalol y luego interrumpir', kind: 'key', items: [
          { t: 'Labetalol endovenoso en bolos', d: 'Meta: 140 a 150 sobre 90 a 100',
            say: 'Con el magnesio ya puesto, controlas la presión con labetalol endovenoso en bolos crecientes, buscando una meta de ciento cuarenta a ciento cincuenta sobre noventa a cien. No más abajo: bajarla de más le corta la circulación a la placenta.' },
          { t: 'Hidralazina: la alternativa', d: 'Si hay bradicardia o asma de base',
            say: 'Y si tu paciente no puede recibir labetalol, por ejemplo por bradicardia o por asma, la hidralazina endovenosa es la alternativa.' },
          { t: 'Interrupción tras estabilizar', d: 'En eclampsia y HELLP, sin esperar',
            say: 'Y una vez que la madre está estable, interrumpes el embarazo. En la eclampsia y en el HELLP, esa interrupción es la única cura, y no espera a que avance la edad gestacional.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Toxicidad por magnesio',
      title: 'Qué revisas y qué haces según el nivel',
      head: ['Nivel de magnesio', 'Qué encuentras', 'Qué haces'],
      rows: [
        { cells: ['4 a 7 mEq/L', 'Reflejos conservados, diuresis normal', 'Rango terapéutico: mantienes la infusión'],
          say: 'Veamos esto con más detalle, porque se pregunta seguido. Entre cuatro y siete miliequivalentes por litro estás en el rango que buscas: los reflejos están conservados y la diuresis es normal. Ahí mantienes la infusión tal como está.' },
        { cells: ['8 a 10 mEq/L', 'Se abole el reflejo rotuliano', 'Suspendes la infusión de inmediato'],
          say: 'Entre ocho y diez, el primer signo aparece: se abole el reflejo rotuliano. Ahí suspendes la infusión de inmediato, antes de que avance más.' },
        { cells: ['10 a 12 mEq/L', 'Depresión respiratoria, menos de 12 por minuto', 'Suspendes y das gluconato de calcio'],
          say: 'Entre diez y doce, ya hay depresión respiratoria, con menos de doce respiraciones por minuto. Ahí no basta con suspender: agregas el gluconato de calcio.' },
        { cells: ['Sobre 15 mEq/L', 'Bloqueo cardíaco y paro', 'Gluconato de calcio e intubación'],
          say: 'Y sobre quince, el magnesio bloquea la conducción del corazón y puede llevar al paro. Ahí es gluconato de calcio más intubación, sin demora.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos el orden completo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El orden es lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Preeclampsia severa, aún sin convulsionar', 'Sulfato de magnesio de todas formas', 'Esperar a que convulsione para darlo'],
          say: 'Repasemos las trampas. Preeclampsia severa que todavía no convulsiona: el sulfato de magnesio se da igual, como prevención. El error es esperar la convulsión para recién indicarlo.' },
        { cells: ['Convulsión activa, con antecedente de epilepsia', 'Sulfato de magnesio, no antiepilépticos', 'Tratarla como una crisis epiléptica'],
          say: 'Convulsión en una embarazada con preeclampsia, aunque tenga antecedente de epilepsia: sigue siendo eclampsia, y el tratamiento es sulfato de magnesio, no fenobarbital ni diazepam.' },
        { cells: ['Presión ya controlada, pero convulsiona después', 'Igual es sulfato de magnesio, no otro antihipertensivo', 'Solo subir la dosis del antihipertensivo'],
          say: 'Si ya le controlaste la presión y aun así convulsiona, sigue siendo el sulfato de magnesio lo que corresponde, no un segundo antihipertensivo.' },
        { cells: ['Reflejo rotuliano ausente con el magnesio', 'Suspender e indicar gluconato de calcio', 'Aumentar la infusión para asegurar el efecto'],
          say: 'Y si el reflejo rotuliano desaparece durante la infusión, suspendes el magnesio y das gluconato de calcio. El error más peligroso es aumentar la dosis pensando que hace falta más.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Embarazada de 35 semanas, traída por convulsión tónico-clónica de 2 minutos en su casa. Al llegar está en período postictal. PA 174/114 mmHg. Al examen destaca hiperreflexia rotuliana con clonus bilateral.',
      question: '¿Cuál es la primera medida terapéutica?',
      options: [
        { letter: 'A', text: 'Administrar labetalol endovenoso' },
        { letter: 'B', text: 'Administrar sulfato de magnesio endovenoso' },
        { letter: 'C', text: 'Realizar cesárea de urgencia sin más estudio' },
        { letter: 'D', text: 'Administrar diazepam endovenoso' },
        { letter: 'E', text: 'Solicitar tomografía computada de cerebro' },
      ],
      correct: 'B',
      explanation: 'La convulsión con preeclampsia define eclampsia. La primera medida, antes de tratar la presión o decidir la vía de parto, es el sulfato de magnesio: previene la siguiente convulsión y es superior a cualquier benzodiacepina.',
      say: {
        stem: 'Vamos con un caso. Embarazada de treinta y cinco semanas, traída tras una convulsión tónico-clónica de dos minutos en su casa. Llega en período postictal, con presión ciento setenta y cuatro sobre ciento catorce, e hiperreflexia con clonus bilateral.',
        question: '¿Cuál es la primera medida terapéutica?',
        options: 'Tienes cinco opciones: labetalol endovenoso, sulfato de magnesio endovenoso, cesárea de urgencia sin más estudio, diazepam endovenoso, o una tomografía de cerebro. Piénsalo.',
        answer: 'Es la B. Convulsionó, así que ya es eclampsia. Y en eclampsia, antes que la presión, antes que decidir cómo nace el bebé, va el sulfato de magnesio: es lo que evita la siguiente convulsión. El diazepam queda descartado, porque el magnesio le gana en eficacia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 48',
      stem: 'Primigesta de 32 semanas con cefalea intensa y presión de 170/110 mmHg, se administra labetalol endovenoso, logrando 140/90 mmHg. Dos horas después presenta una convulsión tónico-clónica de 2 minutos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar lorazepam endovenoso' },
        { letter: 'B', text: 'Administrar labetalol endovenoso' },
        { letter: 'C', text: 'Administrar sulfato de magnesio endovenoso' },
        { letter: 'D', text: 'Administrar tocolíticos endovenosos' },
        { letter: 'E', text: 'Realizar maduración pulmonar' },
      ],
      correct: 'C',
      explanation: 'Aunque la presión ya esté controlada, la convulsión define eclampsia y exige sulfato de magnesio. Haber tratado bien la presión antes no reemplaza este paso: son dos problemas distintos que se tratan por separado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Primigesta de treinta y dos semanas, con cefalea intensa y presión ciento setenta sobre ciento diez. Le dan labetalol endovenoso y baja a ciento cuarenta sobre noventa. Pero dos horas después, convulsiona por dos minutos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: lorazepam endovenoso, labetalol endovenoso, sulfato de magnesio endovenoso, tocolíticos endovenosos, o maduración pulmonar. Piénsalo.',
        answer: 'Es la C. Fíjate en la trampa: ya le habían controlado bien la presión, y aun así convulsionó. Eso te confirma que controlar la presión no basta para prevenir la eclampsia. Ahora que convulsionó, el paso que corresponde es el sulfato de magnesio, sin importar que el labetalol ya haya funcionado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 126',
      stem: 'Embarazada de 32 semanas con dolor epigástrico y en hipocondrio derecho de 2 días. Plaquetas 80.000/mm³, bilirrubina 2,0 mg/dL, GOT 320 UI/L, GPT 240 UI/L. La ecografía muestra litiasis vesicular.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pancreatitis aguda' },
        { letter: 'B', text: 'Hepatitis viral' },
        { letter: 'C', text: 'Colecistitis aguda' },
        { letter: 'D', text: 'Colestasia intrahepática' },
        { letter: 'E', text: 'Síndrome de HELLP' },
      ],
      correct: 'E',
      explanation: 'Plaquetas bajas, transaminasas elevadas y bilirrubina indirecta alta cumplen los tres criterios de HELLP. La litiasis vesicular es un distractor: en el embarazo es un hallazgo frecuente e incidental.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de diciembre de dos mil veintidós. Embarazada de treinta y dos semanas, con dolor epigástrico y en el hipocondrio derecho de dos días. Sus plaquetas están en ochenta mil, la bilirrubina en dos, y las transaminasas muy elevadas. La ecografía muestra litiasis vesicular.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: pancreatitis aguda, hepatitis viral, colecistitis aguda, colestasia intrahepática, o síndrome de HELLP. Piénsalo.',
        answer: 'Es la E. Junta las tres letras: plaquetas bajas, transaminasas muy altas, y la bilirrubina elevada te habla de hemólisis. Eso es HELLP. La litiasis vesicular es la trampa: aparece en la ecografía, pero es un hallazgo incidental frecuente en el embarazo, no la causa de este cuadro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden', tag: 'No se cambia', kind: 'key', items: [
          { t: 'Primero sulfato de magnesio', d: 'Antes que la presión o el parto',
            say: 'Cerremos con las reglas de oro. Ante cualquier severidad, lo primero es siempre el sulfato de magnesio, antes que tratar la presión o decidir el parto.' },
        ] },
        { title: 'Vigilancia', tag: 'Cada hora', kind: 'pharma', items: [
          { t: 'Reflejo rotuliano, respiración, diuresis', d: 'Y gluconato de calcio si hay toxicidad',
            say: 'Vigilas el reflejo rotuliano, la respiración y la diuresis cada hora, con el gluconato de calcio listo si aparece toxicidad.' },
        ] },
        { title: 'Eclampsia y HELLP', tag: 'La cura es el parto', kind: 'alert', items: [
          { t: 'Interrupción sin esperar la edad gestacional', d: 'Una vez estable la madre',
            say: 'Y en eclampsia y en HELLP, la interrupción no espera la edad gestacional: se hace apenas la madre está estable. Si te llevas una sola idea de hoy: en la emergencia hipertensiva, el orden es magnesio primero, siempre. Nos vemos en la próxima clase, donde vemos la diabetes en el embarazo.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Emergencia hipertensiva: el orden de acción',
    root: pwRoot,
  },
};
