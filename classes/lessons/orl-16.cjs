// Clase 14.16 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-16). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de nódulos vocales: el caso clínico de la clase cubre ese tema.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La disfonía que dura más de tres semanas, y cómo distinguir nódulos, pólipo y edema de Reinke',
      say: 'Bienvenido. La disfonía es una consulta muy común, y el examen la pregunta de dos maneras. Una es la bandera roja: una disfonía larga se mira con un endoscopio antes de decir cualquier otra cosa. La otra es la comparación de tres lesiones benignas de las cuerdas vocales, que se diferencian por lado, causa y tratamiento. Veamos las dos.',
    },

    {
      type: 'points',
      kicker: 'Regla de oro',
      title: 'Disfonía larga: mirar la laringe',
      cards: [
        { title: 'Qué es y cuándo preocupa', tag: 'Bandera roja', kind: 'alert', items: [
          { t: 'Cambio en tono, timbre o intensidad', d: 'O fatiga vocal',
            say: 'La disfonía es cualquier alteración del tono, el timbre o la intensidad de la voz, o la fatiga al hablar. La gran mayoría de las disfonías agudas, de menos de dos semanas, son laringitis virales o fonotraumáticas, y se resuelven solas.' },
          { t: 'Más de 2 a 3 semanas', d: 'Se sospecha cáncer hasta demostrar lo contrario',
            say: 'Pero si la disfonía dura más de dos a tres semanas, se considera sospechosa de carcinoma epidermoide de laringe hasta demostrar lo contrario. Más aún si el paciente es fumador o consume alcohol. Mira esta laringoscopía: una lesión blanquecina e irregular en la cuerda, el aspecto de un carcinoma glótico.',
            photo: { src: 'biblioteca/17_otorrino/orl-16/04_carcinoma-cuerda-vocal__kumar-clark_p640.jpg', label: 'Carcinoma de cuerda vocal', at: 'Mira esta laringoscopía', credit: "Kumar and Clark's Clinical Medicine, p. 640" } },
          { t: 'Nasofibroscopía obligatoria', d: 'O telelaringoscopía rígida',
            say: 'Y lo que corresponde es ver la laringe: nasofibroscopía flexible o telelaringoscopía rígida, por el otorrinolaringólogo. No se prueba con antibióticos ni con reposo, sin mirar antes.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Dos formas de lastimar una cuerda',
      nodes: [
        { id: 'cr', col: 0, row: 0, k: 'cause', t: 'Abuso vocal crónico', s: 'Profesores, cantantes' },
        { id: 'nd', col: 1, row: 0, k: 'effect', t: 'Nódulos', s: 'Bilaterales y simétricos' },
        { id: 'fo', col: 2, row: 0, k: 'good', t: 'Fonoaudiología', s: 'Primera línea, sin cirugía' },
        { id: 'ag', col: 0, row: 2, k: 'cause', t: 'Trauma vocal agudo', s: 'Grito, tos violenta' },
        { id: 'po', col: 1, row: 2, k: 'effect', t: 'Pólipo', s: 'Unilateral; hematoma organizado' },
        { id: 'mc', col: 2, row: 2, k: 'refer', t: 'Microcirugía laríngea', s: 'Y luego fonoaudiología' },
      ],
      edges: [
        { from: 'cr', to: 'nd' },
        { from: 'nd', to: 'fo' },
        { from: 'ag', to: 'po' },
        { from: 'po', to: 'mc' },
      ],
      steps: [
        { show: ['cr', 'nd', 'fo'], note: 'Como un callo: microtrauma repetido',
          say: 'Piensa en un callo en la mano. Los nódulos vocales aparecen por un microtraumatismo repetido y crónico, el abuso o mal uso de la voz. Por eso son frecuentes en profesoras, educadoras de párvulos, cantantes y monitores. Como la causa es un vicio de emisión, el tratamiento es corregirlo: rehabilitación fonoaudiológica.' },
        { show: ['ag', 'po', 'mc'], note: 'Un solo golpe fuerte: se rompe un capilar',
          say: 'El pólipo, en cambio, nace de un golpe: un grito desgarrador, un acceso violento de tos o cantar forzado. Se rompe un capilar bajo la mucosa y se forma un hematoma organizado en el espacio de Reinke. Una lesión de un solo lado que no responde a la fonoaudiología, y se opera.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cuatro lesiones de la cuerda',
      images: [
        { src: 'animaciones/orl-16/A1_cuerdas_vocales_lesiones.mp4', label: 'Cuerdas vocales: nódulos, pólipo, edema de Reinke y carcinoma', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cuatro lesiones, cuatro conductas',
          say: 'Mira las cuerdas vocales al cerrarse. Los nódulos son bilaterales y simétricos, en la unión del tercio anterior con los posteriores, y dejan un cierre en reloj de arena: fonoaudiología. El pólipo es de un solo lado: microcirugía. En el edema de Reinke las dos cuerdas están gelatinosas, en una mujer fumadora. Y si la disfonía pasa de tres semanas en un fumador, la lesión irregular obliga a nasofibroscopía y biopsia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones benignas',
      title: 'Nódulos, pólipo y edema de Reinke',
      cards: [
        { title: 'Nódulos vocales', tag: 'Callos de la voz', kind: 'key', items: [
          { t: 'Bilaterales y simétricos', d: 'Unión del tercio anterior con los dos posteriores',
            say: 'Los nódulos se ven como engrosamientos blanquecinos o rosados, bilaterales y simétricos, en la unión del tercio anterior con los dos tercios posteriores del borde libre de las cuerdas. Mira esta laringoscopía: dos engrosamientos simétricos en ese punto.',
            photo: { src: 'biblioteca/17_otorrino/orl-16/01_nodulos-vocales__bailey-love_p771.jpg', label: 'Nódulos vocales', at: 'Mira esta laringoscopía', credit: 'Bailey & Love 27.ª ed., p. 771' } },
          { t: 'Voz soplada, cierre en reloj', d: 'La glotis no cierra completa',
            say: 'Impiden el cierre completo de la glotis, con un cierre en reloj de arena, y por eso la voz es soplada y se escapa aire.' },
          { t: 'Tratamiento: fonoaudiología', d: 'Cirugía inicial contraindicada',
            say: 'El tratamiento de elección es la terapia de voz. La cirugía inicial está contraindicada, porque si no se corrige el vicio, los nódulos recidivan. Solo se opera un nódulo fibroso antiguo que no responde a mucha fonoaudiología.' },
        ] },
        { title: 'Pólipo y edema de Reinke', tag: 'Unilateral vs difuso', kind: 'criteria', items: [
          { t: 'Pólipo: unilateral', d: 'Voz bitonal; microcirugía laríngea',
            say: 'El pólipo es unilateral, pediculado o sésil, y da una disfonía constante con voz bitonal. No responde a la fonoaudiología: su tratamiento es la microcirugía laríngea, y después se complementa con fonoaudiología. Mira este pólipo: una masa roja en una sola cuerda.',
            photo: { src: 'biblioteca/17_otorrino/orl-16/02_polipo-vocal__bailey-love_p771.jpg', label: 'Pólipo vocal', at: 'Mira este pólipo', credit: 'Bailey & Love 27.ª ed., p. 771' } },
          { t: 'Reinke: mujer fumadora, voz grave', d: 'Edema gelatinoso difuso de ambas cuerdas',
            say: 'El edema de Reinke es un acúmulo de líquido gelatinoso en todo el espacio de Reinke de ambas cuerdas. Afecta a mujeres adultas con tabaquismo crónico intenso y reflujo, y da una voz marcadamente grave y áspera, de tabernero. Mira estas cuerdas: edematosas y translúcidas, a la derecha, comparadas con la laringe normal.',
            photo: { src: 'biblioteca/17_otorrino/orl-16/03_edema-de-reinke__bull_p229.jpg', label: 'Edema de Reinke', at: 'Mira estas cuerdas', credit: 'Color Atlas of ENT Diagnosis (Bull), p. 229' } },
          { t: 'Dejar el tabaco y operar', d: 'Decorticación de las cuerdas',
            say: 'Su tratamiento es abandonar el tabaco, que perpetúa el edema, y la decorticación quirúrgica de las cuerdas. En grados avanzados puede dar disnea y estridor.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laringoscopía y disfonía aguda',
      title: 'Laringoscopía indirecta y manejo de la disfonía aguda',
      cards: [
        { title: 'Laringoscopía indirecta', tag: 'Se deriva a ORL', kind: 'key', items: [
          { t: 'Espejo laríngeo, luz frontal y lengua traccionada', d: 'El paciente dice «iii»',
            say: 'La laringoscopía indirecta usa un espejo laríngeo precalentado, luz frontal y la lengua traccionada con una gasa. Con el paciente diciendo i, se ven la epiglotis, las bandas, las cuerdas vocales, los aritenoides y los senos piriformes. Hoy se complementa con la nasofibrolaringoscopía flexible.' },
          { t: 'Derivar si la disfonía pasa de 3 a 4 semanas', d: 'O antes: tabaco, odinofagia, disfagia, hemoptisis, masa cervical, intubación',
            say: 'Es un procedimiento que derivas: ante una disfonía de más de tres a cuatro semanas, o antes si hay tabaquismo, odinofagia, disfagia, hemoptisis, una masa cervical o el antecedente de intubación o cirugía cervical.' },
        ] },
        { title: 'Disfonía aguda', tag: 'Casi siempre benigna', kind: 'pharma', items: [
          { t: 'Laringitis viral o fonotrauma', d: 'Reposo vocal relativo, hidratación, sin tabaco, sin antibióticos',
            say: 'La disfonía aguda es una laringitis viral o un fonotrauma. Reposo vocal relativo, evitando gritar y susurrar, hidratación, humidificación, suprimir el tabaco y analgesia. No requiere antibióticos, y se trata el reflujo laringofaríngeo si existe.' },
          { t: 'Hemorragia de cuerda en un cantante', d: 'Reposo absoluto y derivación',
            say: 'La hemorragia de una cuerda vocal en un cantante exige reposo vocal absoluto y derivación. Y si no mejora en tres a cuatro semanas, se estudia con laringoscopía.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro lesiones de la cuerda vocal',
      head: ['Lesión', 'Lado y sitio', 'Quién y por qué', 'Tratamiento'],
      rows: [
        { cells: ['Nódulos', 'Bilaterales; unión 1/3 anterior con 2/3 posteriores', 'Profesores, cantantes; abuso vocal', 'Fonoaudiología'],
          say: 'Esta tabla ordena las lesiones. Los nódulos son bilaterales, en la unión del tercio anterior con los dos tercios posteriores, de profesores y cantantes por abuso vocal. Se tratan con fonoaudiología.' },
        { cells: ['Pólipo', 'Unilateral, borde libre', 'Esfuerzo vocal agudo violento', 'Microcirugía y fonoaudiología'],
          say: 'El pólipo es unilateral y viene de un esfuerzo vocal agudo, como un grito. Se trata con microcirugía y luego fonoaudiología.' },
        { cells: ['Edema de Reinke', 'Bilateral difuso, cuerdas gelatinosas', 'Mujer fumadora; reflujo', 'Dejar el tabaco y decorticación'],
          say: 'El edema de Reinke es bilateral y difuso, en la mujer fumadora, con reflujo. Se trata dejando el tabaco y con decorticación quirúrgica.' },
        { cells: ['Granuloma de contacto', 'Apófisis vocal del aritenoides', 'Intubación previa o reflujo severo', 'IBP y reposo vocal'],
          say: 'Y el granuloma de contacto está sobre la apófisis vocal del aritenoides, tras una intubación traumática o por reflujo severo. Se trata con inhibidor de la bomba de protones y reposo vocal.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: de la disfonía del paciente a la lesión y su tratamiento.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una profesora de 32 años consulta por disfonía de 3 meses que empeora al final de la semana laboral. Tiene fatiga vocal y voz soplada. No fuma. En la nasofibroscopía se ven dos lesiones blanquecinas pequeñas, simétricas y enfrentadas, en la unión del tercio anterior con los dos tercios posteriores del borde libre de ambas cuerdas.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Microcirugía laríngea con láser inmediata' },
        { letter: 'B', text: 'Rehabilitación fonoaudiológica e higiene vocal' },
        { letter: 'C', text: 'Corticoides orales en dosis altas por 21 días' },
        { letter: 'D', text: 'Toxina botulínica en el músculo tiroaritenoideo' },
        { letter: 'E', text: 'Reposo vocal absoluto por 6 meses' },
      ],
      correct: 'B',
      explanation: 'Son nódulos vocales bilaterales por abuso vocal. El tratamiento de primera línea es la rehabilitación fonoaudiológica. La cirugía inicial está desaconsejada, porque recidiva si no se corrige la técnica de emisión.',
      say: {
        stem: 'Una profesora de treinta y dos años con disfonía de tres meses que empeora a fin de semana, fatiga vocal y voz soplada. No fuma. La nasofibroscopía muestra dos lesiones blanquecinas pequeñas, simétricas y enfrentadas, en la unión del tercio anterior con los dos tercios posteriores de ambas cuerdas.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: microcirugía con láser inmediata; rehabilitación fonoaudiológica; corticoides orales por veintiún días; toxina botulínica; o reposo vocal absoluto por seis meses. Piénsalo.',
        answer: 'Es la B. Profesora, bilateral, simétrico, en esa unión: son nódulos, y se tratan con fonoaudiología. La A es la tentación, porque ves una lesión y quieres sacarla, pero si no corriges la técnica de emisión, los nódulos vuelven.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 58',
      stem: 'Un paciente de 61 años, fumador, consulta por disfonía de 2 meses de evolución, asociada a la aparición de una adenopatía cervical de consistencia aumentada.',
      question: '¿Cuál es el examen inicial para el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'Radiografías de cuello' },
        { letter: 'B', text: 'Endoscopía digestiva alta' },
        { letter: 'C', text: 'Nasofibroscopía' },
        { letter: 'D', text: 'Ecografía de cuello' },
        { letter: 'E', text: 'TAC de cuello' },
      ],
      correct: 'C',
      explanation: 'La disfonía crónica se estudia con nasofibroscopía, más aún cuando se sospecha un cáncer de laringe, como en este fumador con adenopatía.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente de sesenta y un años, fumador, con disfonía de dos meses y una adenopatía cervical dura.',
        question: '¿Cuál es el examen inicial para estudiarlo?',
        options: 'Las opciones: radiografías de cuello; endoscopía digestiva alta; nasofibroscopía; ecografía de cuello; o escáner de cuello. Piénsalo.',
        answer: 'Es la C. Toda disfonía crónica se estudia primero mirando la laringe, y aquí además sospechas un cáncer. Las imágenes del cuello pueden venir después, pero no reemplazan la visión directa de las cuerdas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 149',
      stem: 'Una paciente de 27 años sufre atoro con un pedazo de alimento hace 7 días, que obstruyó la vía aérea y requirió maniobra de Heimlich para su desobstrucción. Desde entonces ha persistido con disfonía y carraspera.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar endoscopía digestiva alta' },
        { letter: 'B', text: 'Solicitar radiografías de cuello' },
        { letter: 'C', text: 'Solicitar TAC de cuello' },
        { letter: 'D', text: 'Solicitar nasofibrolaringoscopía' },
        { letter: 'E', text: 'Solicitar videodeglución' },
      ],
      correct: 'D',
      explanation: 'Toda disfonía persistente se evalúa con nasofibrolaringoscopía. Además, el antecedente de cuerpo extraño y maniobra de Heimlich hace sospechar una lesión laríngea, una parálisis cordal o un cuerpo extraño residual, que se objetivan con este examen.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Una paciente de veintisiete años que se atoró con un trozo de comida hace siete días y requirió maniobra de Heimlich. Desde entonces persiste con disfonía y carraspera.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: endoscopía digestiva alta; radiografías de cuello; escáner de cuello; nasofibrolaringoscopía; o videodeglución. Piénsalo.',
        answer: 'Es la D. Fíjate que la regla se cumple incluso en una paciente joven y sin tabaco: una disfonía que persiste se mira con nasofibrolaringoscopía. Aquí además hubo un trauma de la vía aérea, que puede dejar una lesión de cuerda o un cuerpo extraño residual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 103',
      stem: 'Un paciente de 30 años presenta disfonía persistente, de un mes de evolución, que inició al asistir a un concierto de rock.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nódulos vocales' },
        { letter: 'B', text: 'Disfonía musculotensional' },
        { letter: 'C', text: 'Cáncer de laringe' },
        { letter: 'D', text: 'Pólipos vocales' },
        { letter: 'E', text: 'Reflujo faringo-laríngeo' },
      ],
      correct: 'D',
      explanation: 'Los pólipos pueden producirse de forma aguda: al forzar mucho la voz hay una hemorragia en la cuerda que evoluciona a un pólipo. Los nódulos y la disfonía musculotensional se forman por abuso vocal crónico. A los treinta años el cáncer de laringe es muy improbable.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de treinta años con disfonía persistente de un mes, que comenzó al asistir a un concierto de rock.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: nódulos vocales; disfonía musculotensional; cáncer de laringe; pólipos vocales; o reflujo faringolaríngeo. Piénsalo.',
        answer: 'Es la D. La clave es el inicio: un episodio agudo de esfuerzo vocal, como gritar en un concierto, rompe un capilar y forma un pólipo. Los nódulos, en cambio, son de abuso crónico, como el de una profesora. La palabra que decide es agudo contra crónico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 65',
      stem: 'Un paciente de 36 años consulta por disfonía de varios meses de evolución, de predominio matinal, que mejora durante el día y que se intercala con periodos de tiempo en los cuales no tiene alteraciones de la voz.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar esomeprazol' },
        { letter: 'B', text: 'Iniciar prednisona oral' },
        { letter: 'C', text: 'Solicitar endoscopía digestiva alta' },
        { letter: 'D', text: 'Solicitar radiografías contrastadas de esófago-estómago-duodeno' },
        { letter: 'E', text: 'Solicitar TAC de cuello' },
      ],
      correct: 'A',
      explanation: 'Parece una disfonía por reflujo, de predominio matinal. Se puede hacer una prueba terapéutica con inhibidor de bomba de protones, aunque lo mejor suele ser una pHmetría para confirmar.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Un paciente de treinta y seis años con disfonía de varios meses, peor en la mañana, que mejora durante el día y que alterna con periodos en que su voz es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: esomeprazol; prednisona oral; endoscopía digestiva alta; radiografías contrastadas de esófago, estómago y duodeno; o escáner de cuello. Piénsalo.',
        answer: 'Es la A. El patrón es de reflujo: peor por la mañana, fluctuante, sin los factores de riesgo de un cáncer. Se hace una prueba terapéutica con inhibidor de la bomba de protones. Recuerda que esto no contradice la regla de oro: aquí la disfonía fluctúa y no hay tabaco ni adenopatías. Ante la duda, igual se mira la laringe.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.009 · Laringoscopía indirecta",
      "stem": "Un hombre de 58 años, fumador, consulta en un servicio de urgencia rural por disfonía de 5 semanas. No hay nasofibroscopio disponible, por lo que decides examinar su laringe mediante laringoscopía indirecta con espejo laríngeo.",
      "question": "¿Cuál es la técnica correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Paciente en decúbito supino con el cuello flectado y el espejo frío"
        },
        {
          "letter": "B",
          "text": "Pedir al paciente que trague durante el examen para ver las cuerdas vocales"
        },
        {
          "letter": "C",
          "text": "Introducir el espejo hasta apoyarlo en la pared posterior de la faringe para ver mejor"
        },
        {
          "letter": "D",
          "text": "Paciente sentado e inclinado hacia adelante, lengua traccionada con una gasa, espejo entibiado apoyado en la úvula y el velo, pidiéndole que diga «i»"
        },
        {
          "letter": "E",
          "text": "Si la laringoscopía indirecta es normal, se descarta un cáncer laríngeo y no requiere derivación"
        }
      ],
      "correct": "D",
      "explanation": "En la laringoscopía indirecta el paciente se sienta erguido e inclinado hacia adelante; se tracciona la lengua con una gasa, se entibia el espejo para que no se empañe y se apoya en la úvula, sin tocar la faringe, para no gatillar náuseas. Al decir «i» las cuerdas se aducen. Una disfonía persistente en fumador igual se deriva a otorrinolaringología.",
      "say": {
        "stem": "Hombre de cincuenta y ocho años, fumador, con cinco semanas de disfonía, en una urgencia rural sin nasofibroscopio. Decides mirar su laringe con laringoscopía indirecta, con espejo.",
        "question": "¿Cuál es la técnica correcta?",
        "options": "Las opciones: acostado con el espejo frío, pedirle que trague, apoyar el espejo en la pared posterior, sentado e inclinado adelante con la lengua traccionada y el espejo tibio en el velo o que un examen normal descarta cáncer. Piénsalo.",
        "answer": "Es la D. Paciente sentado e inclinado hacia adelante, lengua traccionada con una gasa, espejo tibio apoyado en el velo, y pedirle que diga i para ver aducir las cuerdas. Tocar la pared posterior tienta para ver mejor, pero gatilla el reflejo nauseoso y arruina el examen."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 149",
      "stem": "Paciente de 27 años sufrió atoro con un trozo de alimento hace 7 días, que obstruyó la vía aérea y requirió maniobra de Heimlich para su desobstrucción. Desde entonces ha persistido con disfonía y carraspera.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar endoscopía digestiva alta"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografías de cuello"
        },
        {
          "letter": "C",
          "text": "Solicitar TAC de cuello"
        },
        {
          "letter": "D",
          "text": "Solicitar nasofibrolaringoscopía"
        },
        {
          "letter": "E",
          "text": "Solicitar videodeglución"
        }
      ],
      "correct": "D",
      "explanation": "Una disfonía que persiste tras un evento laríngeo (cuerpo extraño, maniobras de desobstrucción, intubación) puede deberse a lesión de cuerdas vocales, hematoma, restos de cuerpo extraño o luxación aritenoidea. El examen de elección es la visualización directa de la laringe mediante nasofibrolaringoscopía. Las imágenes y la endoscopía digestiva no evalúan la movilidad cordal.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Mujer de veintisiete años con disfonía y carraspera persistentes una semana después de un atoro que requirió maniobra de Heimlich.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: endoscopía digestiva, radiografía de cuello, TAC de cuello, nasofibrolaringoscopía o videodeglución. Piénsalo.",
        "answer": "Es la D. La disfonía tras un evento laríngeo se estudia viendo directamente las cuerdas vocales con nasofibrolaringoscopía. La TAC tienta para buscar restos del cuerpo extraño, pero no muestra la movilidad ni la mucosa de las cuerdas."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: disfonía',
      cards: [
        { title: 'Primero mirar', tag: 'Bandera roja', kind: 'alert', items: [
          { t: 'Más de 3 semanas: nasofibroscopía', d: 'Sospecha de cáncer hasta demostrar lo contrario',
            say: 'Cerremos con las reglas de oro. Una disfonía de más de dos a tres semanas, sobre todo en un fumador, se estudia con nasofibroscopía antes de probar cualquier tratamiento.' },
        ] },
        { title: 'Tres lesiones', tag: 'Lado, causa y tratamiento', kind: 'key', items: [
          { t: 'Nódulos: bilaterales, fonoaudiología', d: 'Abuso vocal crónico; no se operan primero',
            say: 'Los nódulos son bilaterales, por abuso crónico, y se tratan con fonoaudiología.' },
          { t: 'Pólipo: unilateral, cirugía', d: 'Trauma vocal agudo',
            say: 'El pólipo es unilateral, tras un trauma agudo, y se opera.' },
          { t: 'Reinke: mujer fumadora', d: 'Voz grave; dejar el tabaco y operar',
            say: 'El edema de Reinke es de la mujer fumadora con voz grave. Si te llevas una sola idea de hoy: la disfonía larga se mira antes de tratarla, y lo bilateral se rehabilita mientras lo unilateral se opera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la disfonía crónica y lesiones benignas de cuerdas vocales',
    root: N('start', 'Paciente con disfonía', '¿Dura más de 2 a 3 semanas?',
      'Un paciente con disfonía. Lo primero es cuánto tiempo lleva.',
      ['Menos de 2 semanas', N('ok', 'Laringitis viral o fonotraumática', 'Reposo vocal e hidratación',
        'Las disfonías agudas suelen ser laringitis virales o fonotraumáticas, autolimitadas.')],
      ['Más de 2 a 3 semanas', N('do', 'Nasofibroscopía o laringoscopía', 'Descartar cáncer de laringe',
        'Si la disfonía persiste, la laringe se visualiza con nasofibroscopía o telelaringoscopía, para descartar cáncer.',
        ['Nódulos bilaterales', N('ok', 'Fonoaudiología', 'Cirugía inicial desaconsejada',
          'Nódulos bilaterales y simétricos: rehabilitación fonoaudiológica.')],
        ['Pólipo unilateral', N('do', 'Microcirugía laríngea', 'Luego fonoaudiología',
          'Un pólipo unilateral requiere microcirugía laríngea, complementada con fonoaudiología.')],
        ['Edema de Reinke', N('do', 'Dejar el tabaco y decorticación', 'Mujer fumadora con voz grave',
          'El edema de Reinke se trata abandonando el tabaco y con decorticación quirúrgica.')],
        ['Lesión sospechosa', N('refer', 'Biopsia y estudio oncológico', 'Leucoplaquia, úlcera o masa',
          'Ante una leucoplaquia, una úlcera o una lesión proliferativa, se toma biopsia.')],
      )],
    ),
  },
};
