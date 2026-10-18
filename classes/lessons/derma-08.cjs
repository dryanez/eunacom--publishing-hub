// Clase 16.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_2.cjs (derma-08).
// Nota: el código de la clase (6.01.1.002) devuelve preguntas de alopecia areata (ver derma-04), no de urticaria;
// se usó --search para encontrar las preguntas reales que sí enseñan este tema.
// Preguntas reales EUNACOM: node classes/scripts/class_questions.cjs --search "urticaria|habón|angioedema|anafilaxia"
// -> EUNACOM Julio 2025 · Pregunta 20 (código 6.01.1.030, confianza 0.88)
// -> EUNACOM Agosto 2021 · Pregunta 34 (código 2.01.1.055, confianza 0.7)
// -> EUNACOM Enero 2023 · Pregunta 178 (código 2.01.1.055, confianza 0.62)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El habón que dura menos de un día, y la adrenalina que salva la vida cuando no es solo la piel',
      say: 'Bienvenidos. Cerramos el bloque de dermatosis inflamatorias con la urticaria, uno de los motivos de consulta más frecuentes en urgencias. Hoy la idea central es una sola pregunta semiológica que resuelve casi todo: ¿la roncha dura menos de veinticuatro horas? Y después vemos qué hacer cuando la urticaria deja de ser solo un problema de la piel. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología y semiología',
      title: 'Del mastocito al habón evanescente',
      nodes: [
        { id: 'mas', col: 0, row: 1, k: 'cause', t: 'Degranulación de mastocitos', s: 'Liberación de histamina y leucotrienos' },
        { id: 'vas', col: 1, row: 0, k: 'mech', t: 'Vasodilatación y edema papilar', s: 'Aumento de la permeabilidad capilar' },
        { id: 'hab', col: 2, row: 1, k: 'effect', t: 'Habón o roncha', s: 'Sobreelevado, pruriginoso, halo pálido' },
        { id: 'eva', col: 3, row: 0, k: 'good', t: 'Evanescente', s: 'Desaparece en menos de 24 horas, sin marca' },
        { id: 'fij', col: 3, row: 2, k: 'trap', t: 'Fijo más de 24 a 48 horas', s: 'Deja mancha purpúrica al resolverse' },
      ],
      edges: [
        { from: 'mas', to: 'vas' }, { from: 'vas', to: 'hab' },
        { from: 'hab', to: 'eva' }, { from: 'hab', to: 'fij', label: 'si no es habitual' },
      ],
      steps: [
        { show: ['mas', 'vas'], note: 'El mecanismo mastocitario',
          say: 'El habón de la urticaria se produce por la degranulación de mastocitos dérmicos, que liberan histamina, leucotrienos y prostaglandinas. Eso induce vasodilatación arteriolar y aumento transitorio de la permeabilidad capilar, con edema de la dermis papilar y media.' },
        { show: ['hab'], note: 'La lesión elemental',
          say: 'El resultado es el habón o roncha: una lesión sobreelevada, eritematosa, muy pruriginosa, con un halo pálido característico. Mira estos habones: elevaciones rosadas, de bordes geográficos y centro más pálido, que duran menos de veinticuatro horas.',
            photo: { src: 'biblioteca/11_dermatologia/derma-08/01_habones__cto-derma_p49.jpg', label: 'Habones', at: 'Mira estos habones', credit: 'Manual CTO Dermatología 14.ª ed., p. 49' } },
        { show: ['eva'], note: 'El criterio patognomónico absoluto de examen',
          say: 'Y aquí está el criterio que define todo: cada habón individual aparece en minutos, dura entre media hora y pocas horas, y desaparece por completo en menos de veinticuatro horas, sin dejar huella ni cicatriz. Ese carácter evanescente es lo que hay que confirmar siempre.' },
        { show: ['fij'], note: 'La regla de oro que descarta urticaria común',
          say: 'Si una lesión con aspecto de habón se queda fija en el mismo sitio por más de veinticuatro a cuarenta y ocho horas, o al resolverse deja una pigmentación purpúrica residual, no es una urticaria común: es una vasculitis urticariana, y obliga a hacer biopsia cutánea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Angioedema y anafilaxia',
      title: 'Cuando el edema es profundo, o hay compromiso vital',
      cards: [
        { title: 'Angioedema', tag: 'Dermis profunda y submucosas', kind: 'criteria', items: [
          { t: 'Tumefacción tensa de párpados, labios o lengua', d: 'Sensación de tensión o dolor, más que prurito',
            say: 'El angioedema es el mismo proceso, pero originado en la dermis profunda, el tejido celular subcutáneo y las submucosas. Se ve como una tumefacción difusa, tensa y deformante de párpados, labios, lengua o genitales, con sensación de tensión o dolor, más que prurito, y tarda de dos a tres días en reabsorberse. Mira a este paciente: los labios hinchados, tensos y brillantes, sin la ronchita rosada de la urticaria.',
            photo: { src: 'biblioteca/11_dermatologia/derma-08/02_angioedema__cto-derma_p50.jpg', label: 'Angioedema labial', at: 'Mira a este paciente', credit: 'Manual CTO Dermatología 14.ª ed., p. 50' } },
        ] },
        { title: 'Banderas rojas de anafilaxia', tag: 'Emergencia vital', kind: 'alert', items: [
          { t: 'Compromiso respiratorio o hemodinámico', d: 'Estridor, disnea, hipotensión, síncope',
            say: 'Si los habones o el angioedema se acompañan de estridor laríngeo, disnea, sibilancias, o de hipotensión y síncope, estamos frente a una anafilaxia.' },
          { t: 'Adrenalina intramuscular, tratamiento inmediato', d: 'En la cara anterolateral del muslo',
            say: 'El tratamiento de elección inmediato es la adrenalina intramuscular, en la cara anterolateral del muslo. Los corticoides y los antihistamínicos son fármacos secundarios, que tardan horas en actuar, y nunca reemplazan a la adrenalina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación temporal y tratamiento',
      title: 'Aguda versus crónica, y el escalonamiento internacional',
      cards: [
        { title: 'Aguda y crónica', tag: 'El corte son 6 semanas', kind: 'normal', items: [
          { t: 'Aguda: menos de 6 semanas', d: 'Más de la mitad de los casos por infección viral',
            say: 'La urticaria aguda dura menos de seis semanas, y en más de la mitad de los casos se desencadena por infecciones virales respiratorias o digestivas comunes, además de fármacos y alimentos.' },
          { t: 'Crónica: 6 semanas o más', d: 'La mayoría es espontánea, autoinmune',
            say: 'La urticaria crónica dura seis semanas o más, con brotes casi diarios, y en la gran mayoría de los casos es espontánea, mediada por autoanticuerpos contra el receptor de la inmunoglobulina E del mastocito.' },
        ] },
        { title: 'Escalonamiento internacional', tag: 'Antihistamínicos H1 de segunda generación', kind: 'pharma', items: [
          { t: 'Primera línea: dosis estándar diaria', d: 'Cetirizina, levocetirizina, desloratadina',
            say: 'La primera línea es un antihistamínico H uno de segunda generación, no sedante, a dosis estándar diaria: cetirizina, levocetirizina o desloratadina.' },
          { t: 'Segunda línea: cuadruplicar la dosis', d: 'Si no hay control en 2 a 4 semanas',
            say: 'Si no hay control en dos a cuatro semanas, la segunda línea es cuadruplicar la dosis de ese mismo antihistamínico, hasta cuatro veces la dosis estándar. Es una estrategia de altísima eficacia y seguridad.' },
          { t: 'Tercera línea: omalizumab', d: 'Anticuerpo monoclonal anti inmunoglobulina E',
            say: 'La tercera línea es omalizumab, un anticuerpo monoclonal contra la inmunoglobulina E, y la cuarta línea es ciclosporina oral.' },
        ] },
        { title: 'La trampa grave', tag: 'Corticoides orales', kind: 'alert', items: [
          { t: 'Nunca como mantenimiento crónico', d: 'Solo ciclos ultracortos de rescate',
            say: 'Y la trampa grave de examen: los corticoides orales nunca se usan como tratamiento de mantenimiento en la urticaria crónica. Solo se permiten ciclos ultracortos, de máximo tres a cinco días, como rescate en una exacerbación aguda severa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la evaluación de urgencia hasta el escalonamiento crónico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Urticaria común versus vasculitis urticariana',
      head: ['Parámetro', 'Urticaria común', 'Vasculitis urticariana'],
      rows: [
        { cells: ['Duración de cada lesión', 'Evanescente, menos de 24 horas', 'Fija, más de 24 a 48 horas'],
          say: 'Repasemos con la tabla. La duración de cada lesión: evanescente, menos de veinticuatro horas, en la urticaria común; fija, más de veinticuatro a cuarenta y ocho horas, en la vasculitis urticariana.' },
        { cells: ['Síntoma predominante', 'Prurito intenso', 'Ardor, dolor o sensibilidad'],
          say: 'El síntoma predominante: prurito intenso en la urticaria común; ardor, dolor o sensibilidad en la vasculitis.' },
        { cells: ['Al resolverse', 'Sin ninguna marca', 'Deja púrpura o mancha residual'],
          say: 'Al resolverse: la urticaria común no deja ninguna marca; la vasculitis deja púrpura o una mancha pigmentaria residual.' },
        { cells: ['Estudio', 'Clínico, sin biopsia', 'Biopsia cutánea obligatoria'],
          say: 'Y el estudio: la urticaria común es un diagnóstico clínico, sin necesidad de biopsia; la vasculitis urticariana exige biopsia cutánea obligatoria. El error clásico es tratar una lesión fija de varios días como si fuera una urticaria simple.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 32 años consulta por aparición recurrente de ronchas solevantadas, rojizas y muy pruriginosas en el tronco y las extremidades desde hace 3 meses, casi todos los días. Cada roncha individual dura entre 4 y 6 horas y desaparece sin dejar ninguna cicatriz ni marca, pero brotan otras nuevas en sitios diferentes. Ha usado desloratadina 5 miligramos al día sin lograr mejoría satisfactoria. No hay angioedema ni compromiso respiratorio.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar prednisona oral de mantenimiento por 3 meses' },
        { letter: 'B', text: 'Aumentar la dosis del antihistamínico H1 hasta 4 veces la dosis estándar' },
        { letter: 'C', text: 'Solicitar biopsia cutánea de inmediato' },
        { letter: 'D', text: 'Administrar adrenalina intramuscular' },
        { letter: 'E', text: 'Cambiar a un antihistamínico de primera generación como la clorfenamina' },
      ],
      correct: 'B',
      explanation: 'Habones evanescentes, diarios, de más de 6 semanas de evolución, sin respuesta a dosis estándar de antihistamínico H1: urticaria crónica espontánea refractaria. El siguiente escalón según las guías internacionales es cuadruplicar la dosis del mismo antihistamínico H1 de segunda generación, no cambiar a corticoides ni a antihistamínicos sedantes de primera generación.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y dos años que consulta por ronchas solevantadas, rojizas y muy pruriginosas en el tronco y las extremidades, desde hace tres meses, casi todos los días. Cada roncha dura entre cuatro y seis horas y desaparece sin dejar marca, pero brotan otras en sitios distintos. Ha usado desloratadina cinco miligramos al día sin mejoría satisfactoria. No hay angioedema ni compromiso respiratorio.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: prednisona oral de mantenimiento por tres meses, aumentar la dosis del antihistamínico H uno hasta cuatro veces la dosis estándar, biopsia cutánea inmediata, adrenalina intramuscular, o cambiar a un antihistamínico de primera generación como la clorfenamina. Piénsalo.',
        answer: 'Es la B. Habones evanescentes, diarios, de más de seis semanas de evolución, sin respuesta a la dosis estándar de un antihistamínico H uno: es urticaria crónica espontánea refractaria. El siguiente escalón es cuadruplicar la dosis de ese mismo antihistamínico. La prednisona de mantenimiento está contraindicada. La biopsia sería para una vasculitis, que aquí no hay. Y la adrenalina es solo para la anafilaxia, que este paciente no tiene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 20',
      stem: 'Mujer de 28 años con urticaria generalizada de 48 horas de evolución, con prurito intenso. Sin angioedema ni compromiso hemodinámico.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Levocetirizina oral' },
        { letter: 'B', text: 'Adrenalina subcutánea' },
        { letter: 'C', text: 'Metilprednisolona endovenosa' },
        { letter: 'D', text: 'Omalizumab subcutáneo' },
        { letter: 'E', text: 'Inmunoterapia sublingual' },
      ],
      correct: 'A',
      explanation: 'Urticaria aguda sin signos de anafilaxia: la primera línea son los antihistamínicos H1 de segunda generación, como la levocetirizina. Los corticoides se reservan para casos refractarios y de rescate, no como primera línea.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de veintiocho años con urticaria generalizada, de dos días de evolución, con prurito intenso. Sin angioedema ni compromiso hemodinámico.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: levocetirizina oral, adrenalina subcutánea, metilprednisolona endovenosa, omalizumab subcutáneo, o inmunoterapia sublingual. Piénsalo.',
        answer: 'Es la A, levocetirizina oral. Una urticaria aguda, sin ningún signo de anafilaxia, se trata con un antihistamínico H uno de segunda generación como primera línea. La adrenalina es solo para la anafilaxia. Los corticoides se reservan como rescate en casos refractarios, nunca como primera indicación. Y el omalizumab es una tercera línea, reservada para la urticaria crónica que no responde a los antihistamínicos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 178',
      stem: 'Niño con rash urticarial, edema de labios, taquicardia y sensibilidad abdominal.',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Adrenalina intramuscular' },
        { letter: 'B', text: 'Difenhidramina endovenosa' },
        { letter: 'C', text: 'Hidrocortisona endovenosa' },
        { letter: 'D', text: 'Clorfenamina oral' },
        { letter: 'E', text: 'Salbutamol inhalado' },
      ],
      correct: 'A',
      explanation: 'Rash urticarial más angioedema de labios, taquicardia y dolor abdominal: son criterios de anafilaxia, con compromiso hemodinámico y digestivo asociado. El tratamiento inicial inmediato es siempre la adrenalina intramuscular, no los antihistamínicos ni los corticoides.',
      say: {
        stem: 'Y una tercera pregunta real, del EUNACOM de enero de dos mil veintitrés. Un niño presenta rash urticarial, edema de labios, taquicardia y sensibilidad abdominal.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: adrenalina intramuscular, difenhidramina endovenosa, hidrocortisona endovenosa, clorfenamina oral, o salbutamol inhalado. Piénsalo.',
        answer: 'Es la A, adrenalina intramuscular. Habones más angioedema de labios, taquicardia y dolor abdominal son las banderas rojas de anafilaxia que vimos hoy: hay compromiso hemodinámico y digestivo, no solo cutáneo. El tratamiento inicial inmediato es siempre la adrenalina intramuscular. Los antihistamínicos y los corticoides son fármacos secundarios, que tardan horas en actuar y nunca sustituyen a la adrenalina en este escenario.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.2.001 · Angioedema de Quinque",
      "stem": "Hombre de 28 años consulta 30 minutos después de comer mariscos por hinchazón progresiva de labios y lengua, con voz ronca y sensación de cierre de la garganta. Presión arterial 118/76, frecuencia cardíaca 104, saturación 95%. No tiene habones.",
      "question": "¿Cuál es la conducta inmediata más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Clorfenamina oral y observación"
        },
        {
          "letter": "B",
          "text": "Inhibidor C1 esterasa endovenoso"
        },
        {
          "letter": "C",
          "text": "Prednisona oral y control al día siguiente"
        },
        {
          "letter": "D",
          "text": "Adrenalina 0,5 mg intramuscular en la cara anterolateral del muslo"
        },
        {
          "letter": "E",
          "text": "Alta con loratadina por 7 días"
        }
      ],
      "correct": "D",
      "explanation": "Angioedema alérgico de labios y lengua con disfonía y sensación de cierre faríngeo indica compromiso de la vía aérea: es una emergencia. El tratamiento inmediato es adrenalina intramuscular, 0,5 mg en el adulto, en el muslo, repetible a los 5 a 15 minutos. Antihistamínicos y corticoides son coadyuvantes y no la reemplazan.",
      "say": {
        "stem": "Hombre de veintiocho años que, media hora después de comer mariscos, nota hinchazón progresiva de labios y lengua, con voz ronca y sensación de que se le cierra la garganta. Está con presión normal, algo taquicárdico, y no tiene ronchas.",
        "question": "¿Cuál es la conducta inmediata más adecuada?",
        "options": "Las opciones: clorfenamina oral, inhibidor de C uno esterasa, prednisona oral, adrenalina intramuscular en el muslo o alta con loratadina. Piénsalo.",
        "answer": "Es la D. Lengua hinchada con voz ronca es vía aérea en riesgo, y eso se trata con adrenalina intramuscular de inmediato. La clorfenamina tienta porque es una reacción alérgica, pero demora y no revierte el edema laríngeo; el inhibidor de C uno es para el angioedema hereditario, que no se gatilla con alimentos."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Agosto 2021 · Pregunta 34",
      "stem": "Un niño de 4 años presenta ronchas evanescentes en el tronco y las extremidades desde hace 4 días. Además, desde hace algunos días presentaba congestión nasal, con coriza y estornudos. Al examen físico se observan habones en el tórax y dermografismo en las extremidades inferiores.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Indicar corticoides orales"
        },
        {
          "letter": "B",
          "text": "Solicitar prick test"
        },
        {
          "letter": "C",
          "text": "Indicar antihistamínicos orales"
        },
        {
          "letter": "D",
          "text": "Solicitar IgE sérica total"
        },
        {
          "letter": "E",
          "text": "Solicitar test de parches"
        }
      ],
      "correct": "C",
      "explanation": "Habones evanescentes de pocos días en un niño con un cuadro viral reciente corresponden a urticaria aguda, cuya causa más frecuente en pediatría son las infecciones virales. El tratamiento es antihistamínico H1 oral de segunda generación (ej. cetirizina). No requiere estudio alérgico; los corticoides quedan para casos graves o refractarios.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un niño de cuatro años tiene ronchas evanescentes en tronco y extremidades hace cuatro días, después de un resfrío, con habones y dermografismo.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: corticoides orales, prick test, antihistamínicos orales, inmunoglobulina E total o test de parches. Piénsalo.",
        "answer": "Es la C. Es una urticaria aguda, probablemente gatillada por el virus, y se trata con antihistamínicos orales. El prick test tienta para buscar un alérgeno, pero la urticaria aguda no requiere estudio alérgico."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.2.016 · Urticaria y angioedema",
      "stem": "Mujer de 30 años presenta, 1 hora después de tomar ibuprofeno, habones pruriginosos generalizados y edema de labios y párpados. No tiene disfonía, estridor, disnea, sibilancias, vómitos ni hipotensión. PA 120/75 mmHg, saturación 98%.",
      "question": "¿Cuál es el manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Adrenalina intramuscular y hospitalización en UCI"
        },
        {
          "letter": "B",
          "text": "Concentrado de inhibidor de C1 esterasa"
        },
        {
          "letter": "C",
          "text": "Intubación orotraqueal profiláctica"
        },
        {
          "letter": "D",
          "text": "Suspender el AINE, antihistamínico H1 de segunda generación y eventual curso corto de corticoide oral, con observación y educación sobre signos de anafilaxia"
        },
        {
          "letter": "E",
          "text": "Antibiótico oral"
        }
      ],
      "correct": "D",
      "explanation": "Urticaria aguda con angioedema sin compromiso de vía aérea, respiratorio, digestivo ni hemodinámico no es anafilaxia: se suspende el desencadenante y se indican antihistamínicos H1 de segunda generación (pueden aumentarse hasta 4 veces la dosis), con corticoide oral breve si es extensa. La adrenalina IM se reserva para anafilaxia o angioedema laríngeo.",
      "say": {
        "stem": "Mujer de treinta años con ronchas generalizadas y edema de labios y párpados una hora después de tomar ibuprofeno, sin dificultad respiratoria, sin estridor y con presión normal.",
        "question": "¿Cuál es el manejo más adecuado?",
        "options": "Las opciones: adrenalina intramuscular con UCI, inhibidor de C uno esterasa, intubación, suspender el antiinflamatorio con antihistamínico y eventual corticoide oral o antibiótico. Piénsalo.",
        "answer": "Es la D. Sin compromiso de vía aérea ni hemodinámico no es anafilaxia, así que basta suspender el fármaco y dar antihistamínicos. La adrenalina tienta por el edema de labios, pero se reserva para anafilaxia o edema de laringe."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que confirma', tag: 'Evanescencia', kind: 'key', items: [
          { t: 'Menos de 24 horas, sin marca', d: 'Si es fijo, piensa en vasculitis urticariana',
            say: 'Cerremos con las reglas de oro. El habón dura menos de veinticuatro horas y no deja marca. Si es fijo por más tiempo, piensa en vasculitis urticariana y pide biopsia.' },
        ] },
        { title: 'La emergencia que no se puede pasar', tag: 'Anafilaxia', kind: 'alert', items: [
          { t: 'Compromiso respiratorio o hemodinámico', d: 'Adrenalina intramuscular, de inmediato',
            say: 'Si hay compromiso respiratorio o hemodinámico, es anafilaxia, y el tratamiento inmediato es adrenalina intramuscular, nunca antihistamínicos o corticoides como primera medida.' },
        ] },
        { title: 'El escalonamiento crónico', tag: 'Cuadruplicar antes de escalar', kind: 'criteria', items: [
          { t: 'Antihistamínico H1, luego cuadruplicar la dosis', d: 'Corticoides orales, nunca como mantenimiento',
            say: 'Y en la urticaria crónica refractaria, el paso siguiente es cuadruplicar la dosis del antihistamínico, nunca partir con corticoides orales de mantenimiento. Si te llevas una sola idea de hoy: pregunta cuánto dura cada roncha, y busca las banderas rojas de anafilaxia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Urticaria: de la evaluación de urgencia al escalonamiento',
    root: N(
      'start', 'Paciente con habones pruriginosos', 'Primero evalúa signos de anafilaxia',
      'Frente a un paciente con habones, lo primero es descartar compromiso vital, antes de pensar en el manejo cutáneo.',
      ['', N(
        'q', '¿Hay compromiso respiratorio o hemodinámico?', 'Estridor, disnea, hipotensión',
        'Un habón o angioedema con compromiso respiratorio o hemodinámico es una emergencia vital.',
        ['Sí, anafilaxia', N(
          'alert', 'Adrenalina intramuscular inmediata', 'Cara anterolateral del muslo',
          'Ante estridor, disnea o hipotensión, el tratamiento inmediato es adrenalina intramuscular, en la cara anterolateral del muslo, sin esperar a los antihistamínicos ni a los corticoides.',
        )],
        ['No, solo cutáneo', N(
          'q', '¿Cuánto dura cada lesión individual?', 'Menos de 24 horas vs fija más de 48 horas',
          'Sin anafilaxia, la siguiente pregunta es la duración de cada habón individual.',
          ['Fija, más de 24 a 48 horas', N(
            'refer', 'Vasculitis urticariana', 'Biopsia cutánea obligatoria',
            'Una lesión fija por más de veinticuatro a cuarenta y ocho horas, o que deja púrpura residual, no es urticaria común: requiere biopsia para confirmar vasculitis urticariana.',
          )],
          ['Evanescente, menos de 24 horas', N(
            'q', '¿Cuántas semanas de evolución tiene?', 'Menos de 6 semanas vs 6 o más',
            'Confirmada la urticaria común, la duración total del cuadro define si es aguda o crónica.',
            ['Menos de 6 semanas', N(
              'do', 'Urticaria aguda', 'Antihistamínico H1 de segunda generación',
              'Urticaria aguda, casi siempre por infección viral o fármacos: antihistamínico H uno de segunda generación a dosis estándar.',
            )],
            ['6 semanas o más, refractaria', N(
              'do', 'Cuadruplicar el antihistamínico', 'Hasta 4 veces la dosis estándar',
              'Urticaria crónica sin control con dosis estándar: cuadruplicar la dosis del mismo antihistamínico H uno de segunda generación antes de escalar a omalizumab.',
            )],
          )],
        )],
      )],
    ),
  },
};
