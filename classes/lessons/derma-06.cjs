// Clase 16.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_2.cjs (derma-06).
// Pregunta real EUNACOM: node classes/scripts/class_questions.cjs --search "dermatitis atópica|eccema herpético|filagrina|atopia"
// -> EUNACOM Diciembre 2025 · Pregunta 79 (código 2.01.1.107, confianza 0.95)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El prurito manda, la barrera falla y la topografía cambia con la edad',
      say: 'Bienvenidos. Seguimos con la dermatitis atópica, la dermatosis inflamatoria más frecuente de la infancia. Hoy la idea central es una sola: un criterio cardinal que nunca puede faltar, el prurito intenso, y una topografía que cambia según la edad del paciente. Y cerramos con una complicación que es una urgencia médica de verdad. Partamos por la barrera cutánea, que es donde empieza todo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Una barrera que falla y un sistema inmune que sobrerreacciona',
      nodes: [
        { id: 'fil', col: 0, row: 0, k: 'cause', t: 'Mutación de la filagrina', s: 'Pérdida de función de la proteína' },
        { id: 'bar', col: 1, row: 0, k: 'mech', t: 'Barrera epidérmica defectuosa', s: 'Pérdida transepidérmica de agua' },
        { id: 'xer', col: 2, row: 0, k: 'effect', t: 'Xerosis y entrada de alérgenos', s: 'Piel seca, penetración facilitada' },
        { id: 'th2', col: 0, row: 2, k: 'cause', t: 'Desregulación Th2', s: 'Sobreproducción de inmunoglobulina E' },
        { id: 'inf', col: 1, row: 2, k: 'effect', t: 'Eccema pruriginoso crónico', s: 'Prurito intenso, criterio cardinal' },
        { id: 'mar', col: 3, row: 1, k: 'risk', t: 'Marcha atópica', s: 'Alergia alimentaria, asma, rinitis' },
      ],
      edges: [
        { from: 'fil', to: 'bar' }, { from: 'bar', to: 'xer' },
        { from: 'th2', to: 'inf' }, { from: 'xer', to: 'inf' }, { from: 'inf', to: 'mar' },
      ],
      steps: [
        { show: ['fil', 'bar'], note: 'El defecto estructural de la piel',
          say: 'La dermatitis atópica nace de dos anomalías que se potencian entre sí. La primera es un defecto de la barrera epidérmica: mutaciones con pérdida de función en el gen de la filagrina, una proteína clave para compactar la queratina y retener agua.' },
        { show: ['xer'], note: 'Piel seca que deja pasar de todo',
          say: 'Sin filagrina, la piel pierde agua de forma transepidérmica, se pone extremadamente seca, y esa barrera rota facilita la penetración de alérgenos ambientales.' },
        { show: ['th2'], note: 'El otro lado del problema',
          say: 'La segunda anomalía es inmunológica: una desregulación de tipo T helper dos, con sobreproducción de inmunoglobulina E e hiperreactividad frente a esos antígenos que ahora entran con facilidad.' },
        { show: ['inf'], note: 'El síntoma que no puede faltar',
          say: 'La suma de ambas produce el eccema pruriginoso crónico recidivante. Y aquí está el criterio cardinal indispensable para el diagnóstico: el prurito intenso. Sin prurito, no hay dermatitis atópica.' },
        { show: ['mar'], note: 'Una secuencia que se repite en el examen',
          say: 'Y todo esto se inscribe en la marcha atópica: dermatitis atópica en el lactante, seguida de alergia alimentaria, asma bronquial infantil y rinitis alérgica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Hanifin y Rajka',
      title: 'La topografía que cambia con la edad',
      cards: [
        { title: 'Lactante, menor de 2 años', tag: 'Mejillas y convexidades', kind: 'key', items: [
          { t: 'Mejillas, respetando el triángulo perioral', d: 'Eccema agudo exudativo, con costras',
            say: 'En el lactante menor de dos años, la topografía es la primera pregunta clásica del examen. Las lesiones son eccematosas agudas y exudativas, con costras, en las mejillas, respetando el triángulo nasogeniano perioral, y en el cuero cabelludo y las caras extensoras.' },
          { t: 'Respeta estrictamente el área del pañal', d: 'El microclima húmedo previene la sequedad',
            say: 'Y el signo clave de examen es que respeta estrictamente la zona cubierta por el pañal, porque ese microclima húmedo previene la xerosis atópica. Si ves compromiso del pañal, piensa en otra cosa.' },
        ] },
        { title: 'Infantil y adulto, mayor de 2 años', tag: 'Pliegues flexurales', kind: 'criteria', items: [
          { t: 'Fosas antecubitales y poplíteas', d: 'De los dos a los doce años, con liquenificación leve',
            say: 'Entre los dos y los doce años, las lesiones se trasladan a los pliegues flexurales: la fosa antecubital, la fosa poplítea, las muñecas, los tobillos y el cuello, con lesiones subagudas que empiezan a liquenificarse.' },
          { t: 'Liquenificación marcada en el adulto', d: 'Piel engrosada por rascado crónico',
            say: 'En el adulto, después de los doce años, se mantienen los pliegues de flexión, más el cuello, la cara y el dorso de las manos, con una liquenificación marcada por el rascado crónico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Emolientes de base, corticoides según la zona',
      cards: [
        { title: 'El pilar de siempre', tag: 'Emolientes', kind: 'pharma', items: [
          { t: 'Hidratación diaria, técnica soak and seal', d: 'Aplicar el emoliente inmediatamente tras el baño',
            say: 'El pilar fundamental, que se mantiene siempre, es la hidratación con emolientes abundantes a diario, aplicados de inmediato después del baño, la técnica de mojar y sellar.' },
          { t: 'Baños cortos y tibios, jabón syndet', d: 'Ropa de algodón, sin detergentes agresivos',
            say: 'Los baños deben ser cortos, con agua tibia y jabones syndet sin detergentes agresivos, y la ropa siempre de algodón cien por ciento.' },
        ] },
        { title: 'El brote agudo', tag: 'Corticoide tópico según la zona', kind: 'criteria', items: [
          { t: 'Cara, párpados y pliegues: baja potencia', d: 'Hidrocortisona, o tacrolimus tópico',
            say: 'En el brote, la potencia del corticoide depende de la zona. En la cara, los párpados y los pliegues se usa un corticoide de baja potencia, como la hidrocortisona, o un inhibidor de la calcineurina tópico como el tacrolimus, para evitar la atrofia y las estrías.' },
          { t: 'Tronco y extremidades: mediana a alta potencia', d: 'Betametasona o mometasona, por 7 a 14 días',
            say: 'En el tronco y las extremidades se puede usar un corticoide de mediana a alta potencia, como la betametasona, por siete a catorce días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones infecciosas',
      title: 'Cuando la piel dañada se sobreinfecta',
      cards: [
        { title: 'Impetiginización bacteriana', tag: 'Staphylococcus aureus', kind: 'normal', items: [
          { t: 'Costras melicéricas amarillentas', d: 'Antibiótico tópico u oral',
            say: 'La sobreinfección bacteriana por Staphylococcus aureus da costras melicéricas, amarillentas y de aspecto meloso, y se trata con antibiótico tópico como la mupirocina, o antibiótico oral como el cefadroxilo.' },
        ] },
        { title: 'Eccema herpético de Kaposi', tag: 'Emergencia dermatológica', kind: 'alert', items: [
          { t: 'Vesículas umbilicadas y fiebre', d: 'Erupción variceliforme diseminada por virus herpes simple',
            say: 'Y aquí la urgencia real de la clase: el eccema herpético de Kaposi es una infección diseminada por el virus herpes simple sobre la piel atópica dañada. Se ve un brote agudo y masivo de vesículas umbilicadas, dolorosas, con fiebre alta.' },
          { t: 'Aciclovir endovenoso urgente', d: 'Hospitalizar; riesgo de diseminación visceral',
            say: 'Es una verdadera emergencia médica que exige hospitalización e inicio inmediato de aciclovir endovenoso, por el riesgo de diseminación visceral y de queratitis herpética.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: del lactante con eccema hasta la complicación que no se puede pasar por alto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Topografía de la dermatitis atópica según la edad',
      head: ['Etapa etaria', 'Localización clásica', 'Lesión predominante', 'Zona respetada'],
      rows: [
        { cells: ['Lactante, menor de 2 años', 'Mejillas, cuero cabelludo, extensoras', 'Eccema agudo exudativo con costras', 'Respeta el área del pañal'],
          say: 'Repasemos con la tabla. En el lactante, la localización es mejillas, cuero cabelludo y superficies extensoras, con eccema agudo exudativo, y la zona respetada es siempre el área del pañal.' },
        { cells: ['Infantil, 2 a 12 años', 'Pliegues flexurales', 'Pápulas descamativas, liquenificación leve', 'Menor compromiso facial'],
          say: 'En la etapa infantil, la localización cambia a los pliegues flexurales, con menor compromiso facial que en el lactante.' },
        { cells: ['Adulto, mayor de 12 años', 'Pliegues, cuello, manos, párpados', 'Placas liquenificadas por rascado', 'Tronco suele estar menos afectado'],
          say: 'Y en el adulto, se mantienen los pliegues, más el cuello y las manos, con liquenificación marcada. El error clásico es olvidar que el respeto del pañal solo aplica en el lactante, no en las otras edades.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 7 meses es traído por su madre por presentar lesiones rojas muy pruriginosas en ambas mejillas que le impiden dormir. Al examen físico se aprecia eritema brillante exudativo con pequeñas vesículas y costras en ambas mejillas, respetando el área perioral, y lesiones similares en las caras extensoras de brazos y piernas. Al desvestirlo, la piel de toda la región glútea e inguinal cubierta por el pañal está completamente sana.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar fórmula con proteína hidrolizada de forma inmediata' },
        { letter: 'B', text: 'Baños cortos con syndet, emolientes e hidrocortisona tópica al 1 % en las mejillas' },
        { letter: 'C', text: 'Iniciar aciclovir endovenoso de urgencia' },
        { letter: 'D', text: 'Indicar betametasona tópica de alta potencia en toda la cara' },
        { letter: 'E', text: 'Solicitar biopsia cutánea para confirmar el diagnóstico' },
      ],
      correct: 'B',
      explanation: 'Eccema exudativo pruriginoso en mejillas, respetando estrictamente el pañal, en un lactante: dermatitis atópica del lactante. La conducta es cuidados generales de la piel más un corticoide de baja potencia en la cara. La betametasona de alta potencia en la cara produce atrofia; el aciclovir es para el eccema herpético, que aquí no hay signos de; y la biopsia no es necesaria en un cuadro tan característico.',
      say: {
        stem: 'Vamos al caso. Lactante de siete meses que su madre trae por lesiones rojas muy pruriginosas en ambas mejillas, que le impiden dormir. Al examen hay eritema brillante exudativo con pequeñas vesículas y costras en las mejillas, respetando el área perioral, y lesiones similares en las caras extensoras de brazos y piernas. Al desvestirlo, la piel de toda la zona del pañal está completamente sana.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: fórmula con proteína hidrolizada, baños cortos con syndet más emolientes e hidrocortisona tópica en las mejillas, aciclovir endovenoso de urgencia, betametasona de alta potencia en toda la cara, o biopsia cutánea. Piénsalo.',
        answer: 'Es la B. Eccema exudativo pruriginoso en las mejillas, con respeto estricto del área del pañal, es la presentación clásica de la dermatitis atópica del lactante. La conducta correcta es cuidado general de la piel, con baños cortos y syndet, emolientes, y un corticoide de baja potencia como la hidrocortisona en la cara. La betametasona de alta potencia produciría atrofia. El aciclovir es para el eccema herpético, que aquí no hay, porque no hay vesículas umbilicadas ni fiebre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 79',
      stem: 'Una niña de 4 años presenta lesiones cutáneas recurrentes de 2 años de evolución, caracterizadas por pápulas pruriginosas que aparecen en los antebrazos y fosas cubitales, así como en las piernas, fosas poplíteas, cara y cuello. Su madre comenta que pasa por periodos de exacerbación de las lesiones y otros en que son mucho menos intensas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Dermatitis alérgica' },
        { letter: 'B', text: 'Urticaria' },
        { letter: 'C', text: 'Dermatitis atópica' },
        { letter: 'D', text: 'Escabiosis' },
        { letter: 'E', text: 'Dermatitis seborreica' },
      ],
      correct: 'C',
      explanation: 'Lesiones crónico recidivantes, pruriginosas, en pliegues flexurales más mejillas, con periodos de exacerbación y remisión en una niña de 4 años, es una dermatitis atópica clásica en su fase infantil.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Una niña de cuatro años presenta lesiones cutáneas recurrentes, de dos años de evolución, con pápulas pruriginosas en los antebrazos y las fosas cubitales, en las piernas y las fosas poplíteas, y en la cara y el cuello. Su madre cuenta que hay periodos de exacerbación y otros de mucha menos intensidad.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: dermatitis alérgica, urticaria, dermatitis atópica, escabiosis, o dermatitis seborreica.',
        answer: 'Es la C, dermatitis atópica. Fíjate en el patrón exacto que acabamos de ver: pápulas pruriginosas en las fosas antecubitales y poplíteas, más compromiso facial, con un curso crónico recidivante de exacerbaciones y remisiones. Eso es la fase infantil de la dermatitis atópica. La urticaria daría habones evanescentes que duran menos de veinticuatro horas, no pápulas crónicas fijas en pliegues.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El criterio que no puede faltar', tag: 'Prurito', kind: 'key', items: [
          { t: 'Sin prurito intenso, no hay dermatitis atópica', d: 'Es el criterio cardinal de Hanifin y Rajka',
            say: 'Cerremos con las reglas de oro. El prurito intenso es el criterio cardinal: sin prurito, no hay dermatitis atópica.' },
        ] },
        { title: 'La topografía que se pregunta', tag: 'Cambia con la edad', kind: 'criteria', items: [
          { t: 'Lactante: mejillas, respeta el pañal', d: 'Infantil y adulto: pliegues flexurales',
            say: 'En el lactante, mejillas y convexidades, respetando siempre el área del pañal. En el niño mayor y el adulto, pliegues flexurales con liquenificación.' },
        ] },
        { title: 'La urgencia que no se puede pasar', tag: 'Eccema herpético', kind: 'alert', items: [
          { t: 'Vesículas umbilicadas más fiebre: aciclovir endovenoso', d: 'Hospitalizar sin demora',
            say: 'Y si aparecen vesículas umbilicadas con fiebre sobre piel atópica, es un eccema herpético de Kaposi: hospitalizar e iniciar aciclovir endovenoso sin demora. Si te llevas una sola idea de hoy: primero pregunta por el prurito, después mira dónde están las lesiones. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dermatitis atópica: del prurito a la complicación',
    root: N(
      'start', 'Eccema pruriginoso crónico recidivante', 'Primero confirma el prurito intenso',
      'Frente a un eccema crónico, lo primero es confirmar el criterio cardinal: el prurito intenso. Sin prurito, hay que buscar otro diagnóstico.',
      ['', N(
        'q', '¿Qué edad tiene el paciente?', 'Lactante, o niño mayor y adulto',
        'Confirmado el prurito, la edad define dónde buscar las lesiones.',
        ['Lactante, menor de 2 años', N(
          'do', 'Fase del lactante', 'Mejillas y extensoras, respeta el pañal',
          'En el lactante, busca eccema exudativo en mejillas y caras extensoras, respetando siempre el área del pañal. Tratamiento: emolientes más corticoide de baja potencia en la cara.',
        )],
        ['Niño mayor o adulto', N(
          'do', 'Fase flexural', 'Fosas antecubitales y poplíteas, cuello',
          'En el niño mayor y el adulto, las lesiones están en los pliegues flexurales, con liquenificación progresiva. Tratamiento: emolientes de base y corticoide según la zona afectada.',
        )],
      )],
      ['', N(
        'q', '¿Hay signos de sobreinfección?', 'Costras melicéricas, o vesículas con fiebre',
        'En cualquier edad, hay que vigilar la sobreinfección de la piel dañada.',
        ['Costras melicéricas amarillentas', N(
          'do', 'Impetiginización bacteriana', 'Antibiótico tópico u oral',
          'Costras melicéricas amarillentas indican sobreinfección por Staphylococcus aureus: antibiótico tópico como mupirocina, u oral como cefadroxilo.',
        )],
        ['Vesículas umbilicadas y fiebre', N(
          'alert', 'Eccema herpético de Kaposi', 'Hospitalizar, aciclovir endovenoso urgente',
          'Vesículas umbilicadas dolorosas con fiebre alta sobre piel atópica es un eccema herpético de Kaposi: hospitalización y aciclovir endovenoso urgente, por el riesgo de diseminación.',
        )],
      )],
    ),
  },
};
