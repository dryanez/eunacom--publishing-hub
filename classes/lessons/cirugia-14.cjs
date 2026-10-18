// Clase 11.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-14, classId cirugia-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'A quién operas sin miedo y qué haces con sus pastillas de siempre',
      say: 'Terminado el trauma, entramos al bloque del perioperatorio. Hoy vemos la evaluación preoperatoria: cómo clasificas el riesgo de un paciente antes de operarlo, y qué haces con los fármacos que toma todos los días. Este es de los temas más transversales del examen, porque aparece detrás de cualquier cirugía electiva. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Clasificación ASA',
      title: '¿Qué tan enfermo está, en general?',
      cards: [
        { title: 'ASA I y II', tag: 'Sin límite funcional', kind: 'normal', items: [
          { t: 'ASA uno', d: 'Sano, sin ninguna enfermedad de fondo',
            say: 'Antes de operar a nadie, lo primero es clasificar qué tan enfermo está en términos globales, con la escala ASA. El ASA uno es el paciente sano, sin ninguna enfermedad de fondo.' },
          { t: 'ASA dos', d: 'Enfermedad leve, sin limitar su función',
            say: 'El ASA dos ya tiene una enfermedad, pero leve y controlada: hipertenso o diabético bien manejado, fumador, o con obesidad moderada. No le limita la vida diaria.' },
        ] },
        { title: 'ASA III y más', tag: 'Aquí sube el riesgo', kind: 'alert', items: [
          { t: 'ASA tres', d: 'Enfermedad grave que sí limita, no mata',
            say: 'El ASA tres tiene una enfermedad sistémica grave que ya lo limita bastante, pero no amenaza su vida en este momento: un infarto de hace más de tres meses, o una diálisis programada.' },
          { t: 'ASA cuatro', d: 'Amenaza constante para la vida',
            say: 'El ASA cuatro es una amenaza constante para la vida: un infarto reciente, o una angina inestable. Y ojo con la letra E: se agrega a cualquier categoría cuando la cirugía es de urgencia. Guarda esta idea, porque la retomamos con el riesgo cardíaco.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Riesgo cardíaco',
      title: 'El score de Lee: ¿aguanta el corazón esta cirugía?',
      nodes: [
        { id: 'met', col: 0, row: 0, k: 'start', t: '¿Sube dos pisos sin ahogarse?', s: 'Capacidad funcional de cuatro MET o más' },
        { id: 'bue', col: 1, row: 0, k: 'good', t: 'Buena capacidad funcional', s: 'Operas sin estudio cardíaco extra' },
        { id: 'lee', col: 1, row: 1, k: 'mech', t: 'Score de Lee', s: 'Seis factores, uno por cada uno' },
        { id: 'baj', col: 2, row: 0, k: 'good', t: 'Cero o un factor', s: 'Riesgo bajo, operas directo' },
        { id: 'alt', col: 2, row: 1, k: 'risk', t: 'Tres factores o más', s: 'Riesgo alto, cardiología antes' },
      ],
      edges: [
        { from: 'met', to: 'bue', label: 'sí' }, { from: 'met', to: 'lee', label: 'no o dudoso' },
        { from: 'lee', to: 'baj' }, { from: 'lee', to: 'alt' },
      ],
      steps: [
        { show: ['met'], note: 'La pregunta más simple, y la más útil',
          say: 'Ya sabes qué tan enfermo está en general, pero falta algo específico: ¿aguanta su corazón el estrés de la cirugía? Empieza con la pregunta más simple: ¿puede subir dos pisos de escaleras cargando peso, sin que le falte el aire ni le duela el pecho?' },
        { show: ['bue'], note: 'Si responde que sí, ya tienes tu respuesta',
          say: 'Si la respuesta es sí, tiene una capacidad funcional de cuatro equivalentes metabólicos o más, y con eso te basta: operas sin pedir ningún estudio cardíaco adicional.' },
        { show: ['lee'], note: 'Seis factores, cada uno suma un punto',
          say: 'Si no puede, o la respuesta es dudosa, usas el score de Lee. Son seis factores que suman un punto cada uno: cirugía de alto riesgo, cardiopatía isquémica, insuficiencia cardíaca, antecedente de accidente cerebrovascular, diabetes con insulina, y una creatinina mayor a dos.' },
        { show: ['baj'], note: 'Con ninguno o solo uno, el riesgo es bajo',
          say: 'Con ninguno de estos factores, o solo uno, el riesgo es bajo: operas directo.' },
        { show: ['alt'], note: 'La cirugía electiva puede esperar la evaluación',
          say: 'Pero con tres factores o más, el riesgo ya es alto, y antes de programar la cirugía pides una evaluación cardiológica formal. Retoma la idea de la letra E: si la cirugía es de urgencia, no esperas ese estudio, la haces igual y optimizas en paralelo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos crónicos',
      title: 'Lo que se mantiene hasta la mañana de pabellón',
      cards: [
        { title: 'Nunca se suspenden', tag: 'Riesgo si los quitas', kind: 'key', items: [
          { t: 'Betabloqueadores', d: 'Suspenderlos da taquicardia de rebote e isquemia',
            say: 'Ahora, el fármaco de siempre. Y hay un grupo que nunca se suspende: los betabloqueadores. Si los quitas de golpe, el corazón se acelera de rebote y puede isquemiarse justo en la cirugía.' },
          { t: 'Estatinas y tiroideos', d: 'Se toman igual, con un sorbo de agua',
            say: 'Lo mismo con las estatinas y con la levotiroxina: se toman igual, la mañana de la cirugía, con un sorbo de agua.' },
        ] },
        { title: 'Se mantienen, con un matiz', tag: 'El caso del stent', kind: 'criteria', items: [
          { t: 'Aspirina en prevención secundaria', d: 'Se mantiene, salvo neurocirugía',
            say: 'Y aquí viene un matiz que se pregunta seguido: la aspirina, cuando el paciente la toma por un infarto previo o un stent, se mantiene en casi toda cirugía general. Solo se suspende antes de una neurocirugía o de cirugía ocular.' },
          { t: 'El stent pesa más', d: 'Trombosis del stent es peor que el sangrado',
            say: 'Piensa en la lógica: si sacas la aspirina, el riesgo de que ese stent se trombose es mucho más grave que el sangrado extra de la cirugía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fármacos crónicos',
      title: 'Lo que se suspende, y cuándo',
      nodes: [
        { id: 'iec', col: 0, row: 0, k: 'risk', t: 'IECA o ARA dos', s: 'Suspender veinticuatro horas antes' },
        { id: 'hip', col: 1, row: 0, k: 'effect', t: 'Hipotensión refractaria', s: 'Si no lo suspendes' },
        { id: 'met', col: 0, row: 1, k: 'risk', t: 'Metformina', s: 'Suspender veinticuatro a cuarenta y ocho horas antes' },
        { id: 'aci', col: 1, row: 1, k: 'effect', t: 'Acidosis láctica', s: 'Si hay hipoperfusión renal' },
        { id: 'clo', col: 0, row: 2, k: 'risk', t: 'Clopidogrel', s: 'Suspender cinco a siete días antes' },
        { id: 'san', col: 1, row: 2, k: 'effect', t: 'Sangrado quirúrgico', s: 'Inhibición plaquetaria irreversible' },
      ],
      edges: [
        { from: 'iec', to: 'hip', label: 'si sigue dando' }, { from: 'met', to: 'aci', label: 'si sigue dando' }, { from: 'clo', to: 'san', label: 'si sigue dando' },
      ],
      steps: [
        { show: ['iec'], note: 'Se omite solo la dosis de la mañana',
          say: 'Y en el otro extremo, tres fármacos que sí se suspenden, cada uno por una razón distinta. El primero: los inhibidores de la enzima convertidora y los ARA dos se suspenden veinticuatro horas antes, omitiendo solo la dosis de la mañana de pabellón.' },
        { show: ['hip'], note: 'Un bloqueo vasopléjico que no responde a la efedrina',
          say: 'Si lo mantienes, la anestesia general le baja tanto la presión que se vuelve refractaria a los fármacos que normalmente la suben.' },
        { show: ['met'], note: 'Sobre todo si hay contraste yodado por delante',
          say: 'El segundo es la metformina, que se suspende de veinticuatro a cuarenta y ocho horas antes, sobre todo si va a recibir contraste yodado.' },
        { show: ['aci'], note: 'El riñón sufre y la metformina se acumula',
          say: 'Si el riñón se hipoperfunde durante la cirugía, la metformina se acumula y puede llevar a una acidosis láctica grave.' },
        { show: ['clo'], note: 'A diferencia de la aspirina, aquí sí se suspende',
          say: 'Y el tercero es el clopidogrel, que se suspende de cinco a siete días antes. Aquí sí se suspende, a diferencia de la aspirina, porque la inhibición plaquetaria que produce es irreversible.' },
        { show: ['san'], note: 'El riesgo de sangrado supera al de trombosis aquí',
          say: 'Si lo mantienes, el riesgo de un sangrado quirúrgico importante es mayor que el beneficio de seguir antiagregado justo en esos días.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cuándo se suspende cada fármaco',
      images: [
        { src: 'animaciones/cirugia-14/A1_farmacos_cuando_se_suspenden.mp4', label: 'Fármacos crónicos antes de la cirugía', credit: 'Gráfico propio (cifras del libro)' },
      ],
      steps: [
        { note: 'Clopidogrel, metformina, IECA: se suspenden; el resto se mantiene',
          say: 'Mira la línea de tiempo. El clopidogrel se suspende cinco a siete días antes, por el sangrado. La metformina, veinticuatro a cuarenta y ocho horas antes, por la acidosis láctica. El IECA, veinticuatro horas antes, omitiendo la dosis de la mañana. En verde, lo que nunca se suspende: betabloqueador, estatina, levotiroxina y la aspirina por un stent.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía ambulatoria',
      title: '¿Se va a su casa hoy mismo?',
      cards: [
        { title: 'Quién califica', tag: 'Paciente, cirugía y entorno', kind: 'key', items: [
          { t: 'ASA uno, dos o tres estable', d: 'Cirugía corta, poco sangrado, dolor controlable por vía oral',
            say: 'Además del riesgo, hay otra decisión del preoperatorio: ¿este paciente se opera y se va a su casa el mismo día? Eso es la cirugía mayor ambulatoria. Califica el paciente ASA uno o dos, o un tres estable, con una cirugía corta, de bajo riesgo de sangrado y con dolor controlable por vía oral. Piensa en una hernioplastía inguinal, una colecistectomía laparoscópica, una hemorroidectomía o una safenectomía.' },
          { t: 'Adulto responsable por veinticuatro horas', d: 'Vivienda cercana, teléfono, entiende las instrucciones',
            say: 'Y el tercer pilar es el entorno: un acompañante adulto responsable las primeras veinticuatro horas, vivienda cercana, acceso a teléfono y que el paciente entienda las instrucciones.' },
        ] },
        { title: 'Se excluye', tag: 'No es candidato', kind: 'alert', items: [
          { t: 'ASA cuatro', d: 'Enfermedad que amenaza la vida',
            say: 'Se excluye el ASA cuatro, porque su enfermedad amenaza la vida en forma constante.' },
          { t: 'Apnea no tratada o sin acompañante', d: 'Obesidad mórbida con apnea del sueño',
            say: 'Se excluyen también la obesidad mórbida con apnea del sueño no tratada y, algo que se pregunta mucho, el paciente que no tiene acompañante: puede estar sano, pero sin acompañante no se va.' },
        ] },
        { title: 'Criterios de alta', tag: 'Antes de salir', kind: 'criteria', items: [
          { t: 'Estable, orientado y sin dolor ni náuseas', d: 'Camina, tolera la vía oral, herida sin sangrado',
            say: 'Para el alta necesitas signos vitales estables, paciente orientado, dolor y náuseas controlados, que camine, tolere la vía oral y tenga la herida sin sangrado.' },
          { t: 'Indicaciones por escrito', d: 'Analgesia y control programado',
            say: 'Y se va con las indicaciones y la analgesia por escrito, y un control ya programado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estado nutricional',
      title: '¿Está lo bastante nutrido para operarse?',
      cards: [
        { title: 'Cuándo sospechar', tag: 'Desnutrición', kind: 'alert', items: [
          { t: 'Baja de peso mayor de 10 % en 6 meses', d: 'IMC menor de 18,5, poca ingesta, enfermedad catabólica',
            say: 'Otro pilar del preoperatorio es el estado nutricional, porque la desnutrición aumenta la infección de la herida, la dehiscencia, las fístulas y la mortalidad. Lo sospechas con una pérdida de peso mayor de diez por ciento en seis meses, un índice de masa corporal menor de dieciocho coma cinco, poca ingesta o una enfermedad catabólica.' },
        ] },
        { title: 'Valoración global subjetiva', tag: 'Nivel realizar', kind: 'criteria', items: [
          { t: 'Historia más examen físico', d: 'Peso, ingesta, síntomas, función; grasa, músculo, edema',
            say: 'La valoración global subjetiva es clínica: combina la historia, con el cambio de peso, la ingesta, los síntomas digestivos y la capacidad funcional, con el examen físico, buscando pérdida de grasa y de masa muscular, edema o ascitis. No pide exámenes de laboratorio.' },
          { t: 'A, B o C', d: 'Bien nutrido, desnutrición moderada, desnutrición grave',
            say: 'Y clasifica al paciente en A, bien nutrido, B, desnutrición moderada o sospechada, y C, desnutrición grave.' },
        ] },
        { title: 'Conducta', tag: 'Antes de la cirugía electiva', kind: 'pharma', items: [
          { t: 'Soporte de 7 a 14 días', d: 'Preferentemente enteral; la urgencia no se posterga',
            say: 'Al desnutrido grave le das soporte nutricional de siete a catorce días antes de una cirugía electiva, de preferencia por vía enteral. La cirugía de urgencia no se posterga.' },
          { t: 'Vigilar la realimentación', d: 'Hipofosfemia, hipokalemia, hipomagnesemia',
            say: 'Y al reiniciar la nutrición vigilas el síndrome de realimentación: baja el fósforo, el potasio y el magnesio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'Albúmina: un pronóstico, no una dieta',
      cards: [
        { title: 'Qué te dice', tag: 'Vida media de 20 días', kind: 'key', items: [
          { t: 'Normal 3,5 a 5 g/dL', d: 'Refleja las semanas previas, no lo agudo',
            say: 'La albúmina normal es de tres coma cinco a cinco gramos por decilitro, y como su vida media es de unos veinte días, refleja el estado de las semanas previas, no los cambios agudos.' },
          { t: 'Menos de 3 a 3,5 g/dL', d: 'Más infección, dehiscencia, estadía y mortalidad',
            say: 'Un valor menor de tres a tres coma cinco antes de operar se asocia a más infección, dehiscencia, días de hospital y mortalidad. Es, sobre todo, un indicador de pronóstico.' },
        ] },
        { title: 'No siempre es desnutrición', tag: 'Cuidado', kind: 'alert', items: [
          { t: 'También baja por otras causas', d: 'Inflamación aguda, cirrosis, nefrótico, enteropatía, hemodilución',
            say: 'Ojo, porque la albúmina baja por muchas razones: la inflamación aguda, porque es un reactante negativo, la cirrosis, el síndrome nefrótico, la enteropatía perdedora de proteínas y la hemodilución.' },
        ] },
        { title: 'Cómo seguirla', tag: 'Respuesta a la nutrición', kind: 'pharma', items: [
          { t: 'Prealbúmina y transferrina', d: 'La prealbúmina tiene vida media de 2 días',
            say: 'Para monitorizar la respuesta a la nutrición se prefieren la prealbúmina, que dura dos días, y la transferrina.' },
          { t: 'No se corrige infundiendo albúmina', d: 'No es una medida nutricional',
            say: 'Y esa es la trampa: la albúmina baja no se corrige con infusiones de albúmina, porque eso no nutre.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo esto en el árbol de decisión de la evaluación preoperatoria.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué se mantiene y qué se suspende',
      head: ['Fármaco', 'Conducta', 'Error frecuente'],
      rows: [
        { cells: ['Betabloqueador de uso crónico', 'Mantener hasta la mañana de pabellón', 'Suspenderlo por prudencia'],
          say: 'Repasemos las trampas. El betabloqueador crónico se mantiene hasta la mañana de pabellón. Suspenderlo por prudencia es justo lo que provoca la taquicardia de rebote.' },
        { cells: ['Aspirina por stent coronario', 'Mantener en cirugía general', 'Suspenderla como cualquier antiagregante'],
          say: 'La aspirina por un stent coronario se mantiene en cirugía general. Suspenderla igual que el clopidogrel es un error clásico: no todos los antiagregantes se tratan igual.' },
        { cells: ['IECA la mañana de la cirugía', 'Omitir esa dosis', 'Darlo igual que todos los días'],
          say: 'El IECA se omite justo la mañana de la cirugía. Darlo igual que siempre expone al paciente a una hipotensión que cuesta mucho revertir en pabellón.' },
        { cells: ['Diabético con buena capacidad funcional', 'Operar sin estudio cardíaco extra', 'Pedir score de Lee de todas formas'],
          say: 'Y si el paciente sube dos pisos sin problema, operas sin más estudio cardíaco. Pedir el score de Lee de todas formas solo retrasa una cirugía que ya estaba autorizada.' },
        { cells: ['ASA bien, pero vive solo', 'No es candidato a cirugía ambulatoria', 'Darlo de alta sin acompañante'],
          say: 'En cirugía ambulatoria, el acompañante adulto las primeras veinticuatro horas es obligatorio. Un paciente sano que vive solo no se va a su casa el mismo día.' },
        { cells: ['Desnutrido grave, cirugía electiva', 'Soporte nutricional de siete a catorce días', 'Operar de inmediato o infundir albúmina'],
          say: 'Al desnutrido grave antes de una cirugía electiva le das soporte nutricional, preferentemente enteral. Operar de inmediato, o infundir albúmina creyendo que nutre, son los errores clásicos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, con antecedente de infarto al miocardio hace 4 años y un stent coronario, hipertenso en tratamiento con enalapril y bisoprolol, será operado de una colecistectomía laparoscópica electiva. Camina 40 minutos diarios en subida sin angina ni disnea. Toma ácido acetilsalicílico 100 mg al día.',
      question: '¿Cuál es la indicación más adecuada para el día de la cirugía?',
      options: [
        { letter: 'A', text: 'Suspender el ácido acetilsalicílico y el bisoprolol por el riesgo de sangrado' },
        { letter: 'B', text: 'Mantener el bisoprolol y el ácido acetilsalicílico, y omitir el enalapril de esa mañana' },
        { letter: 'C', text: 'Suspender los tres fármacos 24 horas antes de la cirugía' },
        { letter: 'D', text: 'Solicitar evaluación cardiológica antes de definir cualquier fármaco' },
        { letter: 'E', text: 'Mantener los tres fármacos exactamente igual que todos los días' },
      ],
      correct: 'B',
      explanation: 'Buena capacidad funcional: no necesita evaluación cardiológica adicional. El betabloqueador nunca se suspende. El ácido acetilsalicílico en prevención secundaria por stent se mantiene en cirugía general. El enalapril se suspende omitiendo solo la dosis de la mañana, para evitar hipotensión refractaria en la inducción.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y ocho años, con un infarto hace cuatro años y un stent coronario, hipertenso con enalapril y bisoprolol, programado para una colecistectomía laparoscópica. Camina cuarenta minutos diarios en subida sin angina ni ahogo. Toma aspirina cien miligramos al día.',
        question: '¿Cuál es la indicación más adecuada para el día de la cirugía?',
        options: 'Tienes cinco opciones: suspender aspirina y bisoprolol, mantener bisoprolol y aspirina y omitir el enalapril, suspender los tres fármacos, pedir cardiología antes de decidir, o mantener los tres igual que siempre. Piénsalo.',
        answer: 'Es la B. Primero, camina cuarenta minutos en subida sin síntomas: tiene buena capacidad funcional, así que no necesita cardiología antes de operar. El bisoprolol nunca se suspende. La aspirina, por el stent, se mantiene en cirugía general. Y el enalapril se suspende, pero solo omitiendo la dosis de esa mañana, para evitar la hipotensión refractaria de la inducción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 62 años, hipertenso en tratamiento crónico con enalapril y amlodipino, y con cardiopatía coronaria en tratamiento con bisoprolol y atorvastatina, será sometido a una hernioplastia inguinal electiva.',
      question: '¿Cuál es la indicación más apropiada para el día de la intervención?',
      options: [
        { letter: 'A', text: 'Suspender todos los antihipertensivos y coronarios 48 horas antes' },
        { letter: 'B', text: 'Suspender el enalapril 24 horas antes y mantener bisoprolol y atorvastatina la mañana de la cirugía' },
        { letter: 'C', text: 'Suspender el bisoprolol 24 horas antes y administrar el enalapril esa mañana' },
        { letter: 'D', text: 'Mantener todos los fármacos sin excepción, con un sorbo de agua' },
        { letter: 'E', text: 'Reemplazar todos los fármacos orales por infusión de nitroprusiato' },
      ],
      correct: 'B',
      explanation: 'El enalapril se suspende 24 horas antes, omitiendo la dosis de la mañana, para prevenir hipotensión refractaria. El bisoprolol y la atorvastatina nunca se suspenden bruscamente: se administran esa misma mañana, con un sorbo de agua.',
      say: {
        stem: 'Esta pregunta viene del banco de estudio del EUNACOM, no tiene fecha de examen real. Paciente de sesenta y dos años, hipertenso con enalapril y amlodipino, y con una cardiopatía coronaria en tratamiento con bisoprolol y atorvastatina, programado para una hernioplastia inguinal.',
        question: '¿Cuál es la indicación más apropiada para el día de la intervención?',
        options: 'Las opciones: suspender todo cuarenta y ocho horas antes, suspender el enalapril y mantener bisoprolol y atorvastatina, suspender el bisoprolol y dar el enalapril, mantener todo igual, o reemplazar todo por nitroprusiato. Piénsalo.',
        answer: 'Es la B, exactamente la misma lógica que ya viste: el enalapril se suspende, omitiendo solo la dosis de esa mañana, y el betabloqueador junto con la estatina se mantienen, con un sorbo de agua, para no perder su efecto protector justo el día de la cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Se evalúa a un paciente para clasificarlo en la categoría de estado físico ASA tres de la Sociedad Americana de Anestesiología.',
      question: '¿Cuál de los siguientes pacientes corresponde a esa categoría?',
      options: [
        { letter: 'A', text: 'Mujer de 32 años no fumadora, previamente sana, programada para biopsia mamaria' },
        { letter: 'B', text: 'Hombre de 45 años, fumador leve, hipertenso bien controlado, sin daño de órgano' },
        { letter: 'C', text: 'Hombre de 68 años con infarto hace un año, con angina estable a esfuerzos moderados' },
        { letter: 'D', text: 'Mujer de 72 años con infarto hace 3 semanas y angina de reposo inestable' },
        { letter: 'E', text: 'Paciente politraumatizado en shock hipovolémico que fallece en pabellón' },
      ],
      correct: 'C',
      explanation: 'ASA III es enfermedad sistémica severa con limitación funcional sustancial, pero no incapacitante: infarto antiguo con angina estable encaja ahí. La opción A es ASA I. La B es ASA II. La D, con infarto reciente y angina inestable, es ASA IV.',
      say: {
        stem: 'Otra pregunta del banco de estudio, también sin fecha de examen real. Se te pide identificar al paciente ASA tres.',
        question: '¿Cuál de los siguientes pacientes corresponde a esa categoría?',
        options: 'Las opciones son: una mujer sana para biopsia mamaria, un hombre hipertenso bien controlado, un hombre con infarto antiguo y angina estable, una mujer con infarto reciente y angina inestable, y un politraumatizado en shock. Piénsalo.',
        answer: 'Es la C. El infarto de hace un año, ya estable, con angina solo a esfuerzos moderados, es justo la definición de ASA tres: una enfermedad grave que limita, pero que en este momento no amenaza la vida. La mujer sana es ASA uno, el hipertenso controlado es ASA dos, y la mujer con infarto reciente e inestable ya es ASA cuatro.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.006 · Concepto de paciente quirúrgico ambulatorio",
      "stem": "Se evalúan pacientes para colecistectomía laparoscópica en un programa de cirugía mayor ambulatoria.",
      "question": "¿Cuál de los siguientes pacientes NO es candidato a cirugía ambulatoria?",
      "options": [
        {
          "letter": "A",
          "text": "Mujer de 40 años, ASA I, que vive a 20 minutos del hospital con su pareja"
        },
        {
          "letter": "B",
          "text": "Hombre de 55 años, ASA II, hipertenso controlado, acompañado por su hijo"
        },
        {
          "letter": "C",
          "text": "Mujer de 70 años, ASA IV, con insuficiencia cardíaca descompensada, que vive sola"
        },
        {
          "letter": "D",
          "text": "Hombre de 35 años, ASA I, con índice de masa corporal de 28"
        },
        {
          "letter": "E",
          "text": "Mujer de 60 años, ASA II, con diabetes tipo 2 bien controlada, con cuidador en casa"
        }
      ],
      "correct": "C",
      "explanation": "La cirugía mayor ambulatoria requiere un procedimiento de bajo riesgo, pacientes ASA I a II (o III estables), un adulto responsable que lo acompañe las primeras 24 horas y acceso rápido a un centro de salud. Un paciente ASA IV con enfermedad descompensada, que además vive solo, no cumple criterios.",
      "say": {
        "stem": "Se evalúan pacientes para colecistectomía laparoscópica en un programa de cirugía ambulatoria.",
        "question": "¿Cuál de estos pacientes no es candidato?",
        "options": "Las opciones: mujer de cuarenta, ASA uno, acompañada; hombre de cincuenta y cinco, hipertenso controlado; mujer de setenta, ASA cuatro, con insuficiencia cardíaca descompensada y que vive sola; hombre de treinta y cinco, sano con algo de sobrepeso; o mujer de sesenta con diabetes controlada y cuidador. Piénsalo.",
        "answer": "Es la C. La cirugía ambulatoria exige un paciente estable y un adulto que lo acompañe, y la paciente ASA cuatro, descompensada y sola no cumple ninguna de las dos. La diabética tienta por su enfermedad crónica, pero bien controlada y con cuidador es una buena candidata."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.014 · Evaluación nutricional",
      "stem": "Hombre de 64 años con cáncer gástrico resecable, programado para gastrectomía. Ha bajado 12% de su peso en los últimos 6 meses, tiene un índice de masa corporal de 18 kg/m2 y albúmina plasmática de 2,8 g/dL.",
      "question": "¿Cuál es la conducta más adecuada desde el punto de vista nutricional?",
      "options": [
        {
          "letter": "A",
          "text": "Soporte nutricional preoperatorio, de preferencia enteral, por 7 a 14 días"
        },
        {
          "letter": "B",
          "text": "Operar de inmediato, porque el estado nutricional no influye en la evolución"
        },
        {
          "letter": "C",
          "text": "Postergar la cirugía 6 meses hasta normalizar la albúmina"
        },
        {
          "letter": "D",
          "text": "Solo suplementar vitaminas por vía oral"
        },
        {
          "letter": "E",
          "text": "Nutrición parenteral exclusiva por 3 meses"
        }
      ],
      "correct": "A",
      "explanation": "Una baja de peso mayor de 10% en 6 meses, IMC menor de 18,5 y albúmina menor de 3 g/dL indican desnutrición grave, que aumenta las complicaciones postoperatorias (dehiscencias, infecciones). Está indicado un soporte nutricional preoperatorio de 7 a 14 días, preferentemente por vía enteral, sin retrasar en exceso una cirugía oncológica.",
      "say": {
        "stem": "Hombre de sesenta y cuatro años con un cáncer gástrico resecable, programado para gastrectomía. Ha bajado doce por ciento de su peso en seis meses, su índice de masa corporal es dieciocho y su albúmina es dos coma ocho.",
        "question": "¿Cuál es la conducta nutricional más adecuada?",
        "options": "Las opciones: soporte nutricional preoperatorio de una a dos semanas, operar de inmediato, postergar seis meses, solo vitaminas orales o parenteral exclusiva por tres meses. Piénsalo.",
        "answer": "Es la A. Es una desnutrición grave, que aumenta las dehiscencias y las infecciones, así que conviene nutrirlo una a dos semanas antes de operar, idealmente por vía enteral. Postergar seis meses tienta para normalizar todo, pero dejaría progresar un cáncer que hoy es resecable."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.003 · Albúmina plasmática",
      "stem": "Un hombre de 68 años será operado de una colectomía electiva. Ha bajado 10% de su peso en 3 meses. En el preoperatorio, su albúmina plasmática es 2,6 g/dL, sin proteinuria ni daño hepático.",
      "question": "¿Cuál es la interpretación y la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "La albúmina es normal y se opera sin cambios"
        },
        {
          "letter": "B",
          "text": "La albúmina refleja cambios nutricionales en 24 horas"
        },
        {
          "letter": "C",
          "text": "La albúmina baja indica deshidratación y basta con hidratar"
        },
        {
          "letter": "D",
          "text": "Es un marcador de desnutrición y de mayor riesgo de complicaciones: optimizar el estado nutricional antes de la cirugía"
        },
        {
          "letter": "E",
          "text": "Indicar infusión de albúmina como tratamiento nutricional"
        }
      ],
      "correct": "D",
      "explanation": "La hipoalbuminemia sin pérdidas renales ni daño hepático, junto a baja de peso, indica desnutrición y se asocia a más dehiscencias, infecciones y mortalidad postoperatoria. Se recomienda soporte nutricional por 7 a 14 días antes de una cirugía electiva. La albúmina tiene vida media de unos 20 días y su infusión no nutre.",
      "say": {
        "stem": "Un hombre de sesenta y ocho años será operado de una colectomía electiva. Bajó el diez por ciento de su peso en tres meses y su albúmina es dos coma seis, sin proteinuria ni daño hepático.",
        "question": "¿Cuál es la interpretación y conducta más adecuada?",
        "options": "Las opciones: es normal y se opera igual, refleja cambios de un día, solo indica deshidratación, es marcador de desnutrición y se optimiza la nutrición antes o infundir albúmina como nutrición. Piénsalo.",
        "answer": "Es la D. La albúmina baja con baja de peso indica desnutrición y más complicaciones, así que se optimiza la nutrición antes de operar. Infundir albúmina tienta, pero no corrige la desnutrición."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.5.002 · Evaluacion nutricional subjetiva",
      "stem": "Un hombre de 66 años será operado de un cáncer gástrico. En la evaluación nutricional subjetiva global refiere baja de peso de 12% en 6 meses, ingesta reducida a la mitad hace 1 mes, náuseas frecuentes y capacidad funcional disminuida; al examen tiene pérdida de grasa subcutánea y de masa muscular temporal.",
      "question": "¿Cómo se clasifica según la evaluación subjetiva global y qué implica?",
      "options": [
        {
          "letter": "A",
          "text": "A (bien nutrido): operar sin intervención nutricional"
        },
        {
          "letter": "B",
          "text": "B (moderadamente desnutrido): no requiere intervención"
        },
        {
          "letter": "C",
          "text": "Requiere exámenes de laboratorio para poder clasificarlo"
        },
        {
          "letter": "D",
          "text": "No es aplicable en pacientes oncológicos"
        },
        {
          "letter": "E",
          "text": "C (severamente desnutrido): iniciar soporte nutricional preoperatorio"
        }
      ],
      "correct": "E",
      "explanation": "La evaluación subjetiva global es clínica (anamnesis y examen), sin exámenes: considera cambio de peso, ingesta, síntomas digestivos, capacidad funcional, estrés metabólico y signos físicos. Una baja sobre 10% en 6 meses con pérdida de grasa y músculo clasifica como C, desnutrición severa, y justifica soporte nutricional preoperatorio por 7 a 14 días.",
      "say": {
        "stem": "Un hombre de sesenta y seis años con cáncer gástrico por operar bajó doce por ciento de su peso en seis meses, come la mitad, tiene náuseas, menos capacidad funcional y pérdida visible de grasa y músculo.",
        "question": "¿Cómo se clasifica según la evaluación subjetiva global y qué implica?",
        "options": "Las opciones: A bien nutrido, B moderado sin intervención, requiere exámenes para clasificar, no aplicable en cáncer o C desnutrición severa con soporte preoperatorio. Piénsalo.",
        "answer": "Es la E. Más de diez por ciento de baja en seis meses con pérdida de grasa y músculo es desnutrición severa y requiere soporte nutricional antes de operar. La opción que pide exámenes tienta, pero esta evaluación es puramente clínica."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Riesgo', tag: 'La capacidad funcional manda', kind: 'key', items: [
          { t: 'Sube dos pisos sin síntomas', d: 'No necesita más estudio cardíaco',
            say: 'Cerremos con las reglas de oro. Si sube dos pisos sin síntomas, no necesitas más estudio cardíaco.' },
          { t: 'Score de Lee sobre tres', d: 'Cardiología antes de operar',
            say: 'Con un score de Lee de tres o más, cardiología antes de operar.' },
        ] },
        { title: 'Fármacos', tag: 'Nunca se suspenden', kind: 'pharma', items: [
          { t: 'Betabloqueadores y estatinas', d: 'Se toman con sorbo de agua',
            say: 'Los betabloqueadores y las estatinas nunca se suspenden.' },
          { t: 'Aspirina por stent', d: 'Se mantiene, salvo neurocirugía',
            say: 'Y la aspirina por un stent se mantiene, salvo antes de una neurocirugía.' },
        ] },
        { title: 'Fármacos', tag: 'Sí se suspenden', kind: 'alert', items: [
          { t: 'IECA', d: 'Veinticuatro horas antes, omitir la mañana',
            say: 'El IECA se suspende veinticuatro horas antes.' },
          { t: 'Metformina y clopidogrel', d: 'Por acidosis láctica y por sangrado',
            say: 'La metformina y el clopidogrel también se suspenden, cada uno por su propio riesgo. Si te llevas una sola idea de hoy: pregúntate primero si el corazón aguanta la cirugía, y después decide fármaco por fármaco, nunca todos igual. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const cardiologia = N('refer', 'Evaluación cardiológica formal', 'Antes de programar la cirugía electiva',
      'Con tres factores o más del score de Lee, pides una evaluación cardiológica formal antes de fijar fecha, salvo que la cirugía sea de urgencia.');

    const bajoRiesgo = N('ok', 'Riesgo bajo', 'Operas sin más estudio cardíaco',
      'Con ninguno o solo un factor de Lee, el riesgo es bajo y operas sin pedir más estudio.');

    const scoreLee = N('do', 'Score de Lee', 'Seis factores, uno por cada uno',
      'Cuentas cirugía de alto riesgo, cardiopatía isquémica, insuficiencia cardíaca, ataque cerebrovascular, diabetes con insulina y creatinina alta.',
      ['¿Tres factores o más?', cardiologia],
      ['¿Ninguno o solo uno?', bajoRiesgo]);

    const buenaCapacidad = N('ok', 'Buena capacidad funcional', 'Operas directo, sin más pruebas',
      'Si sube dos pisos cargando peso sin que le falte el aire, con eso te basta para operar.');

    const suspenderFarmacos = N('alert', 'Fármacos que se suspenden', 'IECA, metformina, clopidogrel',
      'El IECA se suspende veinticuatro horas antes, la metformina veinticuatro a cuarenta y ocho, y el clopidogrel cinco a siete días antes.');

    const mantenerFarmacos = N('ok', 'Fármacos que se mantienen', 'Betabloqueadores, estatinas y aspirina por stent',
      'Estos se toman igual la mañana de la cirugía, con un sorbo de agua, porque suspenderlos es más riesgoso que mantenerlos.');

    const root = N('start', 'Paciente programado para cirugía', 'Primero, el riesgo cardíaco',
      'Antes de cualquier fármaco, resuelve primero si el corazón aguanta la cirugía.',
      ['¿Sube dos pisos sin angina ni disnea?', buenaCapacidad],
      ['¿No puede, o es dudoso?', scoreLee],
      ['¿Qué haces con sus fármacos de siempre?', mantenerFarmacos],
      ['¿Cuáles sí se suspenden?', suspenderFarmacos]);

    return { title: 'Preoperatorio: primero el corazón, después cada fármaco', root };
  })(),
};
