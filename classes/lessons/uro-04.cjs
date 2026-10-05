// Clase 13.4 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-04). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Las preguntas del código de la clase (4.01.1.025, 1.08.1.009) no son de incontinencia; se usan las que salen de la búsqueda por tema.
// Preguntas reales que ya usan otras clases y que no se repiten: Diciembre 2019 P101 (urgencia, gin-06), Diciembre 2025 P121 (urgencia, neuro-24) y Julio 2016 P76 (esfuerzo, neuro-24).
// Julio 2015 P48 (rebalse por neuropatía diabética) también la usa neuro-24; se reutiliza porque es la única pregunta real sobre vejiga neurogénica y rebalse, punto central de esta clase.
// Julio 2019 P71 (urgencia, anticolinérgico versus reeducación) no se usa: el propio banco la marca discutible y repite el punto de Diciembre 2017 P79.
// Las preguntas del libro (questions) no se usan: el banco real cubre los tres tipos de incontinencia.
// Imágenes: no hay figura clínica útil extraída en Bailey & Love ni en Williams Gyn (las de Williams son páginas completas); ver informe.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Incontinencia urinaria del adulto: esfuerzo, urgencia y rebalse; cada una con su tratamiento',
      say: 'Bienvenido. Hoy vemos la incontinencia urinaria en el adulto. Parece un tema blando, pero en el examen se juega en una sola pregunta: por qué se escapa la orina. Si es esfuerzo, ejercicios y quizás cirugía. Si es urgencia, fármacos. Y si es rebalse, medir el residuo y no dar anticolinérgicos jamás. Con el mecanismo claro, todo eso sale solo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué se escapa la orina',
      nodes: [
        { id: 'q', col: 0, row: 1, k: 'start', t: 'Pérdida involuntaria de orina', s: 'Tres mecanismos distintos' },
        { id: 'e', col: 1, row: 0, k: 'mech', t: 'Suelo pélvico débil', s: 'Hipermovilidad uretral' },
        { id: 'ee', col: 2, row: 0, k: 'effect', t: 'Esfuerzo', s: 'Escape con tos, risa o salto' },
        { id: 'u', col: 1, row: 1, k: 'mech', t: 'Detrusor hiperactivo', s: 'Se contrae durante el llenado' },
        { id: 'uu', col: 2, row: 1, k: 'effect', t: 'Urgencia', s: 'Deseo imperioso, no alcanza' },
        { id: 'r', col: 1, row: 2, k: 'mech', t: 'Vejiga que no se vacía', s: 'Obstrucción o vejiga atónica' },
        { id: 'rr', col: 2, row: 2, k: 'risk', t: 'Rebalse', s: 'Goteo continuo, residuo alto' },
      ],
      edges: [
        { from: 'q', to: 'e' }, { from: 'e', to: 'ee' },
        { from: 'q', to: 'u' }, { from: 'u', to: 'uu' },
        { from: 'q', to: 'r' }, { from: 'r', to: 'rr' },
      ],
      steps: [
        { show: ['q'], note: 'Un síntoma, tres mecanismos',
          say: 'La incontinencia es un síntoma, no un diagnóstico. Y detrás hay tres mecanismos distintos, con tratamientos distintos. Por eso lo primero siempre es preguntar cuándo se escapa la orina.' },
        { show: ['e', 'ee'], note: 'Esfuerzo: falla el cierre',
          say: 'En la incontinencia de esfuerzo, el esfínter y el soporte de la uretra fallan cuando sube la presión del abdomen. Pasa mucho en mujeres con varios partos, por daño de los ligamentos y debilidad del suelo pélvico. El detrusor, en cambio, está tranquilo. Y no hay ningún deseo previo de orinar.' },
        { show: ['u', 'uu'], note: 'Urgencia: el detrusor se contrae solo',
          say: 'En la incontinencia de urgencia pasa lo contrario. El cierre está bien, pero el detrusor, el músculo de la vejiga, se contrae sin permiso mientras la vejiga se llena. Es el síndrome de vejiga hiperactiva. Aparece un deseo imperioso e imposible de postergar, y el escape llega antes del baño. Si coexisten esfuerzo y urgencia, se llama incontinencia mixta.' },
        { show: ['r', 'rr'], note: 'Rebalse: la vejiga está llena',
          say: 'Y en el rebalse, el problema no es que la vejiga se vacíe de más, sino que no se vacía. Queda sobredistendida hasta que la presión supera la resistencia de la uretra, y gotea. Las causas típicas son una obstrucción, como la hiperplasia prostática o una estenosis uretral, o una vejiga atónica, por ejemplo por neuropatía diabética.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo reconocer cada tipo',
      cards: [
        { title: 'Esfuerzo y urgencia', tag: 'Residuo normal', kind: 'key', items: [
          { t: 'Esfuerzo: tos, risa, saltos', d: 'Chorritos pequeños, sin deseo previo',
            say: 'La incontinencia de esfuerzo es la pérdida sincrónica con la tos, la risa o el ejercicio, en chorritos pequeños y sin ganas previas. Al examen se ve salir orina por el meato cuando la paciente tose, y a veces hay un cistocele.' },
          { t: 'Urgencia: deseo que no da tiempo', d: 'Escape moderado a abundante, nicturia',
            say: 'En la urgencia, primero viene un deseo imperioso, y después el escape, que suele ser de volumen importante. Es frecuente que se levante varias veces en la noche.' },
          { t: 'Residuo postmiccional normal', d: 'Se mide por ecografía',
            say: 'Ojo con esto, porque lo que las separa del rebalse es el residuo. En esfuerzo y en urgencia el residuo es normal, menos de cincuenta mililitros.' },
        ] },
        { title: 'Rebalse', tag: 'Residuo alto', kind: 'alert', items: [
          { t: 'Goteo continuo, sin deseo', d: 'Sin fuerza miccional',
            say: 'El rebalse da un goteo continuo, incesante, de poca cantidad. El paciente no siente deseo ni tiene fuerza para orinar, y a veces se palpa una masa blanda en el hipogastrio, que es la vejiga llena.' },
          { t: 'Residuo mayor de 200 mL', d: 'Confirma falla de vaciamiento',
            say: 'El examen que lo confirma es medir el residuo postmiccional, con ecografía o con sondaje. Si es mayor de doscientos mililitros, la vejiga no se está vaciando.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Esfuerzo: ejercicios primero, cirugía después',
      cards: [
        { title: 'Primera línea', tag: 'Conservador', kind: 'key', items: [
          { t: 'Ejercicios de Kegel', d: 'Con kinesiólogo, 8 a 12 semanas',
            say: 'La primera línea de la incontinencia de esfuerzo son los ejercicios del suelo pélvico, los de Kegel, supervisados por un kinesiólogo durante ocho a doce semanas. Es contraer, de forma voluntaria y repetida, el músculo del suelo pélvico, sin apretar glúteos ni abdomen.' },
          { t: 'Antes de operar, descartar infección', d: 'Sedimento y urocultivo',
            say: 'Antes de decidir, se descarta una infección urinaria. Un urocultivo negativo deja el diagnóstico limpio.' },
        ] },
        { title: 'Segunda línea y error', tag: 'Cirugía', kind: 'pharma', items: [
          { t: 'Cinta suburetral TOT o TVT', d: 'Éxito sobre 85%',
            say: 'Si los ejercicios fracasan o el escape es severo, se opera con una cinta suburetral libre de tensión, TVT o TOT, con tasas de éxito sobre ochenta y cinco por ciento.' },
          { t: 'Anticolinérgicos: ineficaces', d: 'El detrusor no es el problema',
            say: 'Y el error clásico es darle anticolinérgicos a una incontinencia de esfuerzo. No sirven, porque el detrusor no es el problema. Si ves que mezclan esfuerzo con urgencia, trata primero el componente que predomina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Urgencia: vejiga hiperactiva',
      cards: [
        { title: 'Medidas generales', tag: 'Para todos', kind: 'key', items: [
          { t: 'Reentrenamiento vesical', d: 'Micciones a horario',
            say: 'En la urgencia se parte con reentrenamiento de la vejiga, que es orinar a horarios y aumentar poco a poco el intervalo.' },
          { t: 'Evitar irritantes', d: 'Cafeína, edulcorantes, tabaco',
            say: 'Y se reducen los irritantes de la vejiga: cafeína, edulcorantes y tabaco. Antes de tratar, se descarta una infección urinaria.' },
        ] },
        { title: 'Fármacos', tag: 'Antimuscarínicos o beta 3', kind: 'pharma', items: [
          { t: 'Oxibutinina o tolterodina', d: 'Oxibutinina 5 mg cada 8 a 12 h',
            say: 'La primera línea farmacológica son los antimuscarínicos, como la oxibutinina, cinco miligramos cada ocho a doce horas, o la tolterodina. Relajan el detrusor. En el examen, ante una urgencia con residuo normal, la respuesta es el anticolinérgico.' },
          { t: 'Mirabegrón 50 mg al día', d: 'Beta 3: mejor en ancianos',
            say: 'La otra opción es el mirabegrón, cincuenta miligramos al día, un agonista beta tres. El libro lo prefiere en ancianos, porque no da los efectos de los anticolinérgicos: confusión, boca seca y estreñimiento. En los mayores se evitan además los antidepresivos tricíclicos, que están contraindicados.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Rebalse',
      title: 'Rebalse y vejiga neurogénica',
      cards: [
        { title: 'Causas', tag: 'No se vacía', kind: 'alert', items: [
          { t: 'Obstrucción severa', d: 'HPB avanzada, estenosis uretral',
            say: 'Las causas del rebalse son dos. La obstrucción severa de la salida, como la hiperplasia prostática avanzada o la estenosis de uretra.' },
          { t: 'Vejiga neurogénica atónica', d: 'Neuropatía diabética, lesión medular baja',
            say: 'Y la vejiga neurogénica hipocontráctil, por neuropatía diabética, lesión medular baja o fármacos anticolinérgicos. El diabético de muchos años que gotea sin sentir deseo es el caso de libro.' },
        ] },
        { title: 'Conducta', tag: 'Residuo primero', kind: 'key', items: [
          { t: 'Medir residuo postmiccional', d: 'Ecografía o sondaje',
            say: 'Lo primero es medir el residuo. Es un examen simple, no invasivo, y decide todo.' },
          { t: 'Aliviar la obstrucción', d: 'O cateterismo intermitente limpio',
            say: 'El tratamiento es aliviar la obstrucción o, si la vejiga es atónica, el cateterismo intermitente limpio. Limpio no significa estéril, e intermitente no significa permanente.' },
          { t: 'Nunca anticolinérgicos', d: 'Precipitan retención e hidronefrosis',
            say: 'Y el error grave: dar anticolinérgicos. Empeoran la retención y pueden terminar en hidronefrosis.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la pérdida de orina al tipo de incontinencia y su tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Incontinencia: dato, tipo, error',
      head: ['Dato', 'Conducta', 'Error típico'],
      rows: [
        { cells: ['Escape al toser, sin deseo', 'Kegel, luego TOT o TVT', 'Anticolinérgicos'],
          say: 'Escape al toser, sin deseo previo: es esfuerzo. Ejercicios de Kegel, y cinta suburetral si fallan. El error es dar anticolinérgicos.' },
        { cells: ['Deseo imperioso y escape', 'Oxibutinina o mirabegrón', 'Cirugía con malla'],
          say: 'Deseo imperioso y escape: es urgencia. Antimuscarínico o mirabegrón. El error es operar con una malla.' },
        { cells: ['Goteo continuo, residuo > 200 mL', 'Aliviar la obstrucción o sondear', 'Dar anticolinérgicos'],
          say: 'Goteo continuo con residuo alto: es rebalse. Se alivia la obstrucción o se sondea de forma intermitente. El error es dar anticolinérgicos.' },
        { cells: ['Diabético que gotea sin ganas', 'Medir residuo', 'Pedir cistoscopía de urgencia'],
          say: 'Diabético de años que gotea sin sentir deseo: el primer examen es el residuo postmiccional, no la cistoscopía.' },
        { cells: ['Esfuerzo y urgencia juntas', 'Tratar la que predomina', 'Operar de entrada'],
          say: 'Si se mezclan, se trata primero la que predomina. Si es esfuerzo, ejercicios antes que cirugía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 54 años, con tres partos vaginales, consulta por escapes de orina de un año, en chorros pequeños al toser, reír o saltar. No tiene urgencia ni nicturia. Hay un cistocele grado I y sale orina por el meato al toser. Residuo postmiccional por ecografía: 15 mL.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Oxibutinina 5 mg cada 8 horas' },
        { letter: 'B', text: 'Ejercicios de suelo pélvico con kinesiólogo' },
        { letter: 'C', text: 'Cinta transobturatriz de inmediato' },
        { letter: 'D', text: 'Cateterismo intermitente limpio' },
        { letter: 'E', text: 'Mirabegrón 50 mg al día' },
      ],
      correct: 'B',
      explanation: 'Es una incontinencia de esfuerzo no complicada, con residuo normal. La primera línea son los ejercicios de Kegel supervisados por kinesiólogo durante 8 a 12 semanas. La cinta suburetral queda para el fracaso o el escape severo. Los anticolinérgicos y el mirabegrón son para urgencia, y el cateterismo para rebalse.',
      say: {
        stem: 'Una paciente de cincuenta y cuatro años, con tres partos vaginales, tiene escapes de orina desde hace un año, en chorros pequeños al toser, reír o saltar. No siente urgencia ni se levanta de noche. Tiene un cistocele leve, sale orina al toser durante el examen, y el residuo postmiccional es de quince mililitros.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: oxibutinina; ejercicios del suelo pélvico con kinesiólogo; cinta transobturatriz de inmediato; cateterismo intermitente; o mirabegrón. Piénsalo.',
        answer: 'Es la B. Todo apunta a esfuerzo: escape sincrónico con la tos, sin urgencia y con residuo normal. Se parte con ejercicios. La C es la tentación, pero la cinta se reserva para cuando los ejercicios fracasan. La A y la E son para urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 47',
      stem: 'Una paciente de 57 años, multípara de 5, presenta incontinencia de esfuerzos moderados. Su examen físico muestra genitales normales, sin prolapso. Tiene sedimento de orina normal y urocultivo negativo. ¿Cuál es el tratamiento más adecuado para esta paciente?',
      question: '¿Cuál es el tratamiento más adecuado para esta paciente?',
      options: [
        { letter: 'A', text: 'Oxibutinina' },
        { letter: 'B', text: 'Suspensión uretral' },
        { letter: 'C', text: 'Terapia de remplazo hormonal' },
        { letter: 'D', text: 'Kinesioterapia pélvica' },
        { letter: 'E', text: 'Doxasozina' },
      ],
      correct: 'D',
      explanation: 'Incontinencia de esfuerzo con urocultivo negativo: primero kinesioterapia pélvica. La cirugía de suspensión uretral viene después, si fracasa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Una paciente de cincuenta y siete años, con cinco partos, tiene incontinencia de esfuerzo moderada. El examen genital es normal, sin prolapso, y el sedimento y el urocultivo son normales.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: oxibutinina; suspensión uretral; terapia de reemplazo hormonal; kinesioterapia pélvica; o doxazosina. Piénsalo.',
        answer: 'Es la D. En la incontinencia de esfuerzo se descarta la infección, y después van los ejercicios del suelo pélvico. La cirugía queda para el fracaso. La A es la trampa: la oxibutinina es para urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 79',
      stem: 'Una mujer de 73 años, presenta escapes de orina, precedidos por grandes e incontrolables deseos de orinar. Además, ha tenido escapes de orina en la noche. Al examen físico, no hay mayores alteraciones. Se solicita una ecografía vesical, que visualiza una vejiga urinaria de paredes delgadas, sin litiasis y sin residuo postmiccional significativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar cistoscopía' },
        { letter: 'B', text: 'Realizar suspensión uretral con cinta transvaginal' },
        { letter: 'C', text: 'Iniciar oxibutinina' },
        { letter: 'D', text: 'Indicar ejercicios de piso pélvico' },
        { letter: 'E', text: 'Realizar cirugía abierta de piso pélvico' },
      ],
      correct: 'C',
      explanation: 'Escapes precedidos por deseo imperioso, con residuo normal: incontinencia de urgencia. Se trata con anticolinérgicos, como la oxibutinina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una mujer de setenta y tres años tiene escapes de orina precedidos por un deseo incontrolable de orinar, y también de noche. El examen es normal, y la ecografía muestra una vejiga de paredes delgadas, sin cálculos y sin residuo significativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cistoscopía; suspensión uretral con cinta; iniciar oxibutinina; ejercicios del piso pélvico; o cirugía abierta. Piénsalo.',
        answer: 'Es la C. Deseo imperioso, escapes nocturnos y residuo normal: es urgencia, y el tratamiento es el anticolinérgico. La D es la tentación, pero los ejercicios son para esfuerzo, y la B es cirugía de esfuerzo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 131',
      stem: 'Mujer de 85 años tiene el diagnóstico de incontinencia urinaria de urgencia. Su examen ginecológico es normal, y trae un examen de orina, que resulta normal. ¿Cuál de los siguientes fármacos es el mas indicado para el manejo de esta paciente?',
      question: '¿Cuál de los siguientes fármacos es el más indicado para el manejo de esta paciente?',
      options: [
        { letter: 'A', text: 'Amitriptilina' },
        { letter: 'B', text: 'Imipramina' },
        { letter: 'C', text: 'Oxibutinina' },
        { letter: 'D', text: 'Tolterodina' },
        { letter: 'E', text: 'Trazodona' },
      ],
      correct: 'D',
      explanation: 'Los anticolinérgicos son de elección en la urgencia. Los tricíclicos están contraindicados en el adulto mayor. Entre oxibutinina y tolterodina, la tolterodina da menos efectos adversos, como boca seca.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una mujer de ochenta y cinco años tiene incontinencia urinaria de urgencia. El examen ginecológico y el examen de orina son normales.',
        question: '¿Qué fármaco es el más indicado?',
        options: 'Las opciones: amitriptilina; imipramina; oxibutinina; tolterodina; o trazodona. Piénsalo.',
        answer: 'Es la D. Los anticolinérgicos son de elección, y en una persona de ochenta y cinco años la tolterodina da menos efectos adversos que la oxibutinina. La A y la B son tricíclicos, que están contraindicados en el adulto mayor. Y recuerda que el mirabegrón es la alternativa cuando se quiere evitar el efecto anticolinérgico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 49',
      stem: 'Una paciente de 81 años, multípara de 3, histerectomizada, inicia escapes de orina de esfuerzos hace 5 años y además, desde hace 2 años tiene escapes de urgencia. No tiene antecedente de infecciones urinarias, ni hematuria. Al examen físico se aprecia un grado leve de prolapso genital. Se realiza sedimento de orina con 4-5 leucocitos por campo y 2-3 hematíes por campo, sin bacterias y se realiza un urocultivo, que resulta negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar tratamiento quirúrgico del prolapso' },
        { letter: 'B', text: 'Indicar ejercicios de fortalecimiento del piso pélvico' },
        { letter: 'C', text: 'Iniciar anticolinérgicos' },
        { letter: 'D', text: 'Iniciar alfabloqueadores adrenérgicos' },
        { letter: 'E', text: 'Solicitar ecografía abdomino-pélvica' },
      ],
      correct: 'B',
      explanation: 'Es una incontinencia mixta en que predomina el esfuerzo, y el sedimento y el urocultivo descartan infección. Se parte con ejercicios del suelo pélvico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una paciente de ochenta y un años, con tres partos e histerectomía, tiene escapes de esfuerzo desde hace cinco años, y desde hace dos años también escapes de urgencia. Hay un prolapso genital leve, y el urocultivo es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cirugía del prolapso; ejercicios del piso pélvico; iniciar anticolinérgicos; alfabloqueadores; o ecografía abdominopélvica. Piénsalo.',
        answer: 'Es la B. Es una incontinencia mixta, y el componente que más pesa es el de esfuerzo, así que se parte con ejercicios del suelo pélvico. La C es la trampa: el anticolinérgico trata solo la urgencia. Y la cirugía no es lo primero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 48',
      stem: 'Una paciente de 69 años diabética, mal controlada, presenta escapes de orina. Ademá ha presentado algunas infecciones urinarias. Su urocultivo actual está negativo, pero consulta por la incontinencia urinaria. Se realiza una ecografía que muestra una vejiga de paredes lisas, con volumen urinario de 930cc y residuo postmiccional de 750cc.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resolver quirúrgicamente' },
        { letter: 'B', text: 'Instalar una sonda Foley' },
        { letter: 'C', text: 'Realizar cateterismo intermitente' },
        { letter: 'D', text: 'Indicar anticolinérgicos' },
        { letter: 'E', text: 'Indicar colinérgicos' },
      ],
      correct: 'C',
      explanation: 'Vejiga neurogénica por neuropatía diabética, con rebalse y residuo muy alto. Se trata con cateterismo limpio intermitente. Los anticolinérgicos empeoran la retención.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Una paciente de sesenta y nueve años, diabética mal controlada, tiene escapes de orina y algunas infecciones urinarias. El urocultivo actual es negativo. La ecografía muestra una vejiga con novecientos treinta centímetros cúbicos y un residuo postmiccional de setecientos cincuenta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cirugía; instalar una sonda Foley; cateterismo intermitente; anticolinérgicos; o colinérgicos. Piénsalo.',
        answer: 'Es la C. Un residuo de setecientos cincuenta en una diabética es una vejiga neurogénica atónica con rebalse, y se trata con autocateterismo limpio intermitente. La D es la gran trampa: un anticolinérgico empeoraría la retención.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: incontinencia urinaria',
      cards: [
        { title: 'Esfuerzo y urgencia', tag: 'Residuo normal', kind: 'key', items: [
          { t: 'Esfuerzo: Kegel, luego cinta', d: 'TOT o TVT si fracasan',
            say: 'Cerremos con las reglas de oro. La incontinencia de esfuerzo se trata primero con ejercicios del suelo pélvico, y la cirugía con cinta, TOT o TVT, queda para cuando fracasan.' },
          { t: 'Urgencia: antimuscarínico o mirabegrón', d: 'Reentrenamiento y evitar irritantes',
            say: 'La incontinencia de urgencia se trata con reentrenamiento vesical y un antimuscarínico, como la oxibutinina o la tolterodina, o con mirabegrón, que se prefiere en el anciano.' },
        ] },
        { title: 'Rebalse', tag: 'Residuo alto', kind: 'alert', items: [
          { t: 'Goteo continuo: medir residuo', d: 'Mayor de 200 mL confirma',
            say: 'Si el paciente gotea de forma continua y no siente deseo, mide el residuo postmiccional.' },
          { t: 'Nunca anticolinérgicos', d: 'Cateterismo intermitente limpio',
            say: 'El rebalse se trata aliviando la obstrucción o con cateterismo intermitente limpio, y nunca con anticolinérgicos. Si te llevas una sola idea de hoy: el tratamiento depende del mecanismo, y ante un goteo continuo lo primero es el residuo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Incontinencia urinaria del adulto',
    root: N('start', 'Pérdida involuntaria de orina', 'Cuándo se escapa y cuánto queda',
      'Un adulto con escapes de orina. Antes de tratar, pregúntate cuándo se escapa, y mide el residuo postmiccional.',
      ['Goteo continuo, residuo mayor de 200 mL', N('alert', 'Rebalse', 'Vejiga que no se vacía',
        'Si gotea de forma continua y el residuo es alto, es un rebalse. La causa es una obstrucción, como la hiperplasia prostática, o una vejiga neurogénica atónica.',
        ['Obstrucción', N('do', 'Aliviar la obstrucción', 'HPB o estenosis uretral',
          'Si hay obstrucción, se alivia la salida de la vejiga.')],
        ['Vejiga atónica', N('do', 'Cateterismo intermitente limpio', 'Nunca anticolinérgicos',
          'Si la vejiga es atónica, cateterismo intermitente limpio. Y nunca anticolinérgicos, que precipitan retención e hidronefrosis.')],
      )],
      ['Residuo normal, escape con tos o risa', N('q', 'Incontinencia de esfuerzo', 'Sin deseo previo',
        'Si el escape ocurre al toser o reír, sin deseo previo, es incontinencia de esfuerzo.',
        ['Primera línea', N('ok', 'Ejercicios de Kegel', '8 a 12 semanas con kinesiólogo',
          'Primera línea: ejercicios del suelo pélvico durante ocho a doce semanas.')],
        ['Fracaso o escape severo', N('refer', 'Cinta suburetral TOT o TVT', 'Éxito sobre 85%',
          'Si fracasan, o el escape es severo, cinta suburetral libre de tensión.')],
      )],
      ['Residuo normal, deseo imperioso antes del escape', N('q', 'Incontinencia de urgencia', 'Vejiga hiperactiva',
        'Si el escape viene precedido de un deseo imperioso, es incontinencia de urgencia, o vejiga hiperactiva.',
        ['Primera medida', N('do', 'Reentrenamiento y evitar irritantes', 'Cafeína, edulcorantes, tabaco',
          'Se parte con reentrenamiento vesical y reducción de irritantes.')],
        ['Fármacos', N('ok', 'Oxibutinina, tolterodina o mirabegrón', 'Mirabegrón mejor en ancianos',
          'Como fármaco, un antimuscarínico o mirabegrón, que se prefiere en ancianos.')],
      )],
    ),
  },
};
