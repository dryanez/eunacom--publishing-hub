// Clase 4.3 (Cardiología) — Insuficiencia aórtica: signos periféricos, ecocardiograma e indicación quirúrgica. Guion escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-24). Código: 1.01.1.017 Insuficiencia aórtica (Dx específico ·
// Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-24): Julio 2018 P71 (se quitó el encabezado «Pregunta 71 Sin contestar Puntúa como 1,00
// Marcar pregunta» que arrastra el banco), Diciembre 2018 P2 (joven con frémito diastólico) y Diciembre 2018 P91 (coartación operada con soplo
// diastólico: IAo por válvula bicúspide). Enunciados y alternativas del banco.
// Descartadas: Enero 2023 P147 (repite el patrón de presión de pulso amplia con menos datos).
// Fotos en contexto: Doppler color de insuficiencia aórtica, ejes paraesternal largo y corto (Harrison 21.ª ed., p. 1889).
// En movimiento: scenes/cardio_b4.html ?v=ia (presión aórtica con diastólica baja, pulso de Corrigan y signos periféricos), gráfico propio.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-24',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Presión de pulso amplia, signos con nombre propio, ecocardiograma y el momento de operar',
      say: 'Bienvenido. En la clase pasada vimos la estenosis aórtica. Hoy vemos su pareja: la insuficiencia aórtica, donde la válvula no cierra y la sangre vuelve al ventrículo. Es una valvulopatía que se diagnostica en la cabecera del paciente, por una presión arterial muy particular y por signos periféricos con nombre propio, y el examen los pregunta una y otra vez. Hoy aprendes el diagnóstico, cuándo se opera y la forma aguda, que es una urgencia.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'La sangre vuelve al ventrículo',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Válvula o raíz enferma', s: 'No cierra en diástole' },
        { id: 'r', col: 1, row: 1, k: 'mech', t: 'Regurgitación diastólica', s: 'La aorta se vacía' },
        { id: 'p', col: 2, row: 0, k: 'effect', t: 'Presión de pulso amplia', s: 'Diastólica baja' },
        { id: 'v', col: 2, row: 2, k: 'mech', t: 'Sobrecarga de volumen', s: 'El VI se dilata' },
        { id: 'a', col: 3, row: 0, k: 'effect', t: 'Angina', s: 'Menos flujo coronario' },
        { id: 'f', col: 4, row: 2, k: 'risk', t: 'Falla del ventrículo', s: 'FEVI cae, a veces antes de los síntomas' },
      ],
      edges: [{ from: 'c', to: 'r' }, { from: 'r', to: 'p' }, { from: 'r', to: 'v' }, { from: 'p', to: 'a' }, { from: 'v', to: 'f' }],
      steps: [
        { show: ['c', 'r'], note: 'Valvular o de la raíz aórtica',
          say: 'En la insuficiencia aórtica, la sangre que sale en sístole vuelve al ventrículo en diástole. La causa puede estar en las valvas, como una válvula bicúspide, una endocarditis o la fiebre reumática, o en la raíz de la aorta, que hoy es la causa más frecuente: hipertensión, síndrome de Marfan, disección tipo A, sífilis o espondilitis anquilosante.' },
        { show: ['p', 'a'], note: 'La diastólica cae',
          say: 'Como la aorta se vacía hacia el ventrículo, la presión diastólica cae, a veces casi a cero, mientras la sistólica sube por el gran volumen eyectado. Eso es la presión de pulso amplia. Y como el flujo coronario ocurre en diástole, con una diastólica baja el paciente puede tener angina aunque sus coronarias sean normales.' },
        { show: ['v', 'f'], note: 'El ventrículo se dilata',
          say: 'El ventrículo recibe el volumen normal más el que regurgita, y se dilata. Soporta bien durante décadas, pero con los años claudica, y su fracción de eyección puede caer antes de que el paciente note síntomas. Esa es la clave de cuándo operar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Presión divergente y signos periféricos',
      cards: [
        { title: 'Presión y pulso', tag: 'Alto rendimiento', kind: 'key', items: [
          { t: 'Presión de pulso amplia', d: 'Por ejemplo 170/45 mmHg',
            say: 'La insuficiencia aórtica crónica es silenciosa durante años. Pero el examen te da la pista en la presión arterial: una sistólica alta con una diastólica muy baja, por ejemplo ciento setenta sobre cuarenta y cinco.' },
          { t: 'Corrigan: pulso saltón', d: 'Sube rápido y colapsa; «martillo de agua»',
            say: 'El pulso de Corrigan, o pulso saltón, asciende con extrema rapidez y colapsa de golpe, como un martillo de agua.' },
          { t: 'Choque de la punta desplazado', d: 'Hiperdinámico, línea axilar media',
            say: 'El choque de la punta es amplio, hiperdinámico y desplazado hacia abajo y afuera.' },
        ] },
        { title: 'Signos con nombre propio', tag: 'Se preguntan uno a uno', kind: 'criteria', items: [
          { t: 'Musset, Quincke, Müller', d: 'Cabeza, uña y úvula que laten',
            say: 'El signo de Musset es el cabeceo rítmico con cada latido. El de Quincke, la pulsación capilar visible en el lecho de la uña. Y el de Müller, la pulsación de la úvula.' },
          { t: 'Traube y Duroziez', d: 'Pistoletazo y doble soplo femoral',
            say: 'El signo de Traube es un ruido de pistoletazo sobre la arteria femoral, y el de Duroziez, un doble soplo sistodiastólico al comprimir la femoral con el estetoscopio.' },
          { t: 'Hill > 60 mmHg', d: 'Poplítea mayor que braquial',
            say: 'Y el signo de Hill: la presión de la arteria poplítea supera a la braquial en más de sesenta milímetros de mercurio. Es el más sensible para valorar la gravedad.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'La diastólica cae, el pulso colapsa',
      images: [
        { src: 'animaciones/cardio-24/A1_ia_presion_de_pulso.mp4', label: 'Presión aórtica y signos periféricos', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'De 120/80 a 170/40; luego los seis signos',
          say: 'Mira la presión de la aorta. Con una válvula normal, la diastólica se mantiene alta. Con la insuficiencia, la sangre se devuelve al ventrículo: la presión diastólica se desploma y la curva sube rápido y colapsa, como el pulso de Corrigan. La presión de pulso pasa de cuarenta a más de cien milímetros de mercurio. Y abajo aparecen los signos periféricos, uno por uno.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Auscultación',
      title: 'El soplo y el Austin Flint',
      cards: [
        { title: 'El soplo', tag: 'Diastólico decreciente', kind: 'key', items: [
          { t: 'Aspirativo, decreciente, tono alto', d: 'Borde esternal izquierdo; sentado, inclinado, espiración',
            say: 'El soplo es diastólico, decreciente y aspirativo, de tono alto. Empieza justo después del segundo ruido y se oye mejor en el borde esternal izquierdo, con el paciente sentado, inclinado hacia delante y en espiración sostenida. Aumenta con el handgrip.' },
          { t: 'Soplo sistólico acompañante', d: 'Flujo, no estenosis',
            say: 'Suele acompañarse de un soplo sistólico eyectivo por el gran volumen eyectado. No significa que haya estenosis.' },
        ] },
        { title: 'Austin Flint', tag: 'No es estenosis mitral', kind: 'alert', items: [
          { t: 'Retumbo mesodiastólico apical', d: 'El chorro choca con la valva mitral',
            say: 'En la insuficiencia grave se oye además un retumbo mesodiastólico en el ápex, el soplo de Austin Flint. El chorro regurgitante choca contra la valva anterior de la mitral y limita su apertura.' },
          { t: 'Sin chasquido ni R1 intenso', d: 'Así se distingue de la EM',
            say: 'Se distingue de la estenosis mitral porque no tiene chasquido de apertura ni primer ruido intenso. Y en la estenosis mitral, la presión de pulso es normal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio',
      title: 'Ecocardiograma Doppler color',
      cards: [
        { title: 'Severidad', tag: 'Cuatro criterios', kind: 'criteria', items: [
          { t: 'Vena contracta > 6 mm', d: 'Chorro > 65% del tracto de salida',
            say: 'El ecocardiograma Doppler color muestra el chorro regurgitante hacia el ventrículo. Mira este eco: arriba, el eje paraesternal largo, y al lado el corto, con el chorro en colores. La insuficiencia es severa si la vena contracta mide más de seis milímetros y el chorro ocupa más del sesenta y cinco por ciento del tracto de salida.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-16/01_insuficiencia-aortica-doppler-color__harrison_p1889.jpg', label: 'Doppler color: IAo', at: 'Mira este eco', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 1889' } },
          { t: 'Vol. regurgitante ≥ 60 mL', d: 'Fracción regurgitante ≥ 50%',
            say: 'También si el volumen regurgitante es de sesenta mililitros o más por latido, o la fracción regurgitante de cincuenta por ciento o más.' },
          { t: 'Medir DFSVI, FEVI y raíz', d: 'Definen cuándo operar',
            say: 'Además se miden el diámetro de fin de sístole del ventrículo, la fracción de eyección y la raíz de la aorta, porque de ahí sale la decisión de operar.' },
        ] },
        { title: 'Otros exámenes', tag: 'Buscar la causa', kind: 'key', items: [
          { t: 'Rx: ventrículo «en bota»', d: 'ECG: hipertrofia',
            say: 'La radiografía muestra cardiomegalia, con el ventrículo en forma de bota, y el electrocardiograma, hipertrofia del ventrículo izquierdo.' },
          { t: 'Causa: Marfan, bicúspide, disección, sífilis', d: 'Endocarditis si hay fiebre',
            say: 'Siempre se busca la causa: bicúspide, dilatación de la raíz, síndrome de Marfan, disección tipo A, sífilis y enfermedades reumatológicas. Con fiebre y un soplo nuevo, piensa en endocarditis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cuándo operar y cuándo solo controlar',
      cards: [
        { title: 'Asintomático con VI normal', tag: 'No se opera', kind: 'normal', items: [
          { t: 'Vasodilatadores: IECA, nifedipino', d: 'Meta < 130/80 mmHg',
            say: 'El paciente asintomático, con el ventrículo de tamaño y función normales, no se opera. Se controla la presión con vasodilatadores, IECA, ARA dos o un calcioantagonista como nifedipino, con meta bajo ciento treinta sobre ochenta, y se hace un ecocardiograma cada seis a doce meses si es severa.' },
          { t: 'Betabloqueador con cautela', d: 'La bradicardia alarga la diástole',
            say: 'Los betabloqueadores se usan con cautela: la bradicardia alarga la diástole y aumenta el volumen regurgitante. Y ningún tratamiento médico reemplaza la cirugía cuando hay indicación.' },
        ] },
        { title: 'Reemplazo valvular', tag: 'Antes de que falle el VI', kind: 'alert', items: [
          { t: 'Sintomático, aunque FEVI normal', d: 'Disnea, angina o síncope',
            say: 'Se opera al paciente con insuficiencia severa y síntomas, aunque la fracción de eyección sea normal.' },
          { t: 'FEVI ≤ 55% o DFSVI > 50 mm', d: 'Asintomático',
            say: 'Y al asintomático con fracción de eyección de cincuenta y cinco por ciento o menos, o con un diámetro de fin de sístole mayor de cincuenta milímetros. También si se opera por otra causa cardíaca, o si la aorta ascendente mide cincuenta y cinco milímetros o más, o cuarenta y cinco a cincuenta si hay Marfan o bicúspide.' },
          { t: 'Derivar antes de que falle', d: 'La FEVI se recupera mal si se opera tarde',
            say: 'La clave es derivar antes de la disfunción del ventrículo, porque la función se recupera mal si se opera tarde.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'La insuficiencia aórtica aguda',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Endocarditis, disección A, trauma', s: 'Aparece en días' },
        { id: 'v', col: 1, row: 1, k: 'mech', t: 'VI no adaptado', s: 'La presión de llenado sube' },
        { id: 'e', col: 2, row: 0, k: 'effect', t: 'Edema pulmonar y shock', s: 'Pulso poco amplio' },
        { id: 's', col: 2, row: 2, k: 'trap', t: 'Soplo corto y suave', s: 'R1 disminuido' },
        { id: 't', col: 4, row: 1, k: 'alert', t: 'Cirugía urgente', s: 'Nitroprusiato y dobutamina' },
      ],
      edges: [{ from: 'c', to: 'v' }, { from: 'v', to: 'e' }, { from: 'v', to: 's' }, { from: 'e', to: 't' }, { from: 's', to: 't' }],
      steps: [
        { show: ['c', 'v'], note: 'Un ventrículo que no se ha adaptado',
          say: 'Cuando la insuficiencia es aguda, por una endocarditis, una disección aórtica tipo A o un traumatismo, el ventrículo no tuvo tiempo de dilatarse ni de adaptarse. El volumen regurgitante sube de golpe la presión de llenado.' },
        { show: ['e', 's'], note: 'Faltan los signos periféricos',
          say: 'El paciente tiene edema pulmonar, taquicardia y shock. Y ojo: faltan los signos periféricos. La presión de pulso no es amplia, el soplo es corto y suave, y el primer ruido está disminuido por el cierre prematuro de la válvula mitral.' },
        { show: ['t'], note: 'Cirugía urgente; evitar betabloqueador y balón',
          say: 'Es una emergencia quirúrgica. Mientras se traslada se dan diuréticos, nitroprusiato y dobutamina. Se evitan los betabloqueadores, que suprimen la taquicardia compensadora, y el balón de contrapulsación, que está contraindicado porque empeora el reflujo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la presión divergente a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Insuficiencia aórtica: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['PA 170/45, pulso saltón, Musset', 'Insuficiencia aórtica', 'Estenosis aórtica'],
          say: 'Presión divergente, pulso saltón y signo de Musset: insuficiencia aórtica. La estenosis aórtica tiene pulso débil y presión de pulso estrecha.' },
        { cells: ['Retumbo apical sin chasquido, con IAo', 'Austin Flint', 'Estenosis mitral'],
          say: 'Un retumbo apical sin chasquido en alguien con insuficiencia aórtica es el Austin Flint, no una estenosis mitral.' },
        { cells: ['Asintomático, VI normal', 'Vasodilatador y control con eco', 'Operar de inmediato'],
          say: 'Asintomático con ventrículo normal: vasodilatador y ecocardiograma de control. Operar de inmediato es el error.' },
        { cells: ['FEVI ≤ 55% o DFSVI > 50 mm, sin síntomas', 'Reemplazo valvular', 'Seguir controlando'],
          say: 'Pero si la fracción de eyección baja a cincuenta y cinco por ciento o el diámetro pasa de cincuenta milímetros, se opera aunque no tenga síntomas. Seguir controlando es el error.' },
        { cells: ['Marfan con aorta de 52 mm', 'Cirugía de la raíz aórtica', 'Betabloqueador en dosis altas'],
          say: 'Marfan con la aorta de cincuenta y dos milímetros: cirugía de la raíz. Los betabloqueadores en dosis altas aumentan el reflujo.' },
        { cells: ['IAo aguda con shock', 'Nitroprusiato, dobutamina, cirugía', 'Betabloqueador o balón de contrapulsación'],
          say: 'Insuficiencia aórtica aguda con shock: nitroprusiato, dobutamina y cirugía urgente. El betabloqueador y el balón de contrapulsación están contraindicados.' },
        { cells: ['Coartación operada con soplo diastólico', 'IAo por válvula bicúspide', 'Recoartación aórtica'],
          say: 'Un operado de coartación que vuelve con un soplo diastólico tiene una insuficiencia aórtica, por la válvula bicúspide asociada. No una recoartación.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 48 años, hipertenso, alto y delgado, consulta por disnea de esfuerzo progresiva de 6 meses y palpitaciones. PA 170/45 mmHg, FC 88 lpm, pulso de ascenso rápido y colapso súbito, oscilación rítmica de la cabeza, pulsación capilar visible en las uñas. El choque de la punta está desplazado a la línea axilar media y se ausculta un soplo diastólico decreciente en el borde esternal izquierdo. Ecocardiograma: insuficiencia aórtica severa por dilatación de la raíz, DFSVI de 54 mm y FEVI de 52%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Betabloqueador en dosis altas y control anual' },
        { letter: 'B', text: 'Derivar para reemplazo valvular aórtico, con evaluación de la raíz' },
        { letter: 'C', text: 'Balón de contrapulsación aórtico' },
        { letter: 'D', text: 'Profilaxis con penicilina benzatina cada tres semanas' },
        { letter: 'E', text: 'Prueba de esfuerzo y control en un año' },
      ],
      correct: 'B',
      explanation: 'Insuficiencia aórtica crónica severa sintomática, con signos periféricos clásicos por dilatación de la raíz, DFSVI > 50 mm y FEVI limítrofe: indicación de reemplazo valvular aórtico (con evaluación de la raíz) antes de que el ventrículo se deteriore más. Los betabloqueadores en dosis altas aumentan el reflujo y el balón de contrapulsación está contraindicado.',
      say: {
        stem: 'Un hombre de cuarenta y ocho años, hipertenso, tiene disnea de esfuerzo y palpitaciones. La presión es ciento setenta sobre cuarenta y cinco, el pulso sube rápido y colapsa, la cabeza oscila con cada latido y se ausculta un soplo diastólico decreciente. El ecocardiograma muestra una insuficiencia aórtica severa por dilatación de la raíz, con un diámetro de fin de sístole de cincuenta y cuatro milímetros y una fracción de eyección de cincuenta y dos por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: betabloqueador en dosis altas; derivar para reemplazo valvular con evaluación de la raíz; balón de contrapulsación; penicilina benzatina; o prueba de esfuerzo y control. Piénsalo.',
        answer: 'Es la B. Tiene síntomas, un diámetro de fin de sístole mayor de cincuenta milímetros y una fracción de eyección ya limítrofe: es indicación de cirugía antes de que el ventrículo se deteriore. La A tienta porque baja la frecuencia, pero en la insuficiencia aórtica la bradicardia alarga la diástole y aumenta el reflujo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 71',
      stem: 'Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases.',
      question: 'El diagnóstico de sospecha es:',
      options: [
        { letter: 'A', text: 'Insuficiencia tricuspídea' },
        { letter: 'B', text: 'Estenosis aórtica' },
        { letter: 'C', text: 'Insuficiencia aórtica' },
        { letter: 'D', text: 'Estenosis mitral' },
        { letter: 'E', text: 'Insuficiencia mitral' },
      ],
      correct: 'C',
      explanation: 'Presión de pulso amplia (160/60 mmHg), pulso amplio, choque de la punta desplazado y un soplo diastólico (entre el segundo y el primer ruido) que se irradia: insuficiencia aórtica. La estenosis aórtica tiene un soplo sistólico y un pulso débil.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciocho. Una mujer de ochenta y un años tiene disnea progresiva, con crisis nocturnas y ortopnea. La presión es ciento sesenta sobre sesenta, con pulso amplio. El choque del corazón está desplazado y se ausculta un soplo intenso entre el segundo y el primer ruido, que se irradia al cuello.',
        question: '¿Cuál es el diagnóstico de sospecha?',
        options: 'Las opciones: insuficiencia tricuspídea; estenosis aórtica; insuficiencia aórtica; estenosis mitral; o insuficiencia mitral. Piénsalo.',
        answer: 'Es la C. Un soplo entre el segundo y el primer ruido es diastólico, y con presión de pulso amplia y pulso amplio es una insuficiencia aórtica. La B tienta porque el soplo se irradia al cuello y es una paciente mayor, pero la estenosis aórtica tiene un soplo sistólico y un pulso débil.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 2',
      stem: 'Un paciente masculino de 23 años, sin antecedentes de importancia consulta por disnea de esfuerzos e intolerancia al ejercicio, progresiva, que actualmente le obligan a caminar más lento. Al examen físico tiene FC: 88x’, PA: 150/55 mmHg, choque de la punta en la línea axilar media y latido cervical visible. La auscultación cardíaca muestra ritmo regular, en dos tiempos, con un soplo diastólico IV/VI, con frémito. Al examen pulmonar, se constatan crépitos pulmonares.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Insuficiencia mitral' },
        { letter: 'B', text: 'Estenosis aórtica' },
        { letter: 'C', text: 'Estenosis mitral' },
        { letter: 'D', text: 'Insuficiencia aórtica' },
        { letter: 'E', text: 'Miocardiopatía hipertrófica' },
      ],
      correct: 'D',
      explanation: 'Un joven con PA 150/55 mmHg (presión de pulso amplia), choque de la punta en la línea axilar media, latido cervical visible y un soplo diastólico con frémito tiene una insuficiencia aórtica severa con insuficiencia cardíaca. Se confirma con ecocardiograma Doppler y se deriva para cirugía.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un hombre de veintitrés años tiene disnea de esfuerzo progresiva. La presión es ciento cincuenta sobre cincuenta y cinco, el choque de la punta está en la línea axilar media y se ve el latido en el cuello. Hay un soplo diastólico de grado cuatro con frémito y crépitos en los pulmones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: insuficiencia mitral; estenosis aórtica; estenosis mitral; insuficiencia aórtica; o miocardiopatía hipertrófica. Piénsalo.',
        answer: 'Es la D. La presión de pulso amplia, el choque desplazado, el latido cervical y el soplo diastólico con frémito son una insuficiencia aórtica severa, con insuficiencia cardíaca. La C tienta porque también es un soplo diastólico, pero la estenosis mitral tiene presión de pulso normal y un retumbo con chasquido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 91',
      stem: 'Un paciente de 18 años, con antecedente de coartación aórtica, operada en la infancia, consulta por disnea de esfuerzos, que ha ido en aumento, desde hace 2 meses. Además, refiere edema de extremidades inferiores y palpitaciones ocasionales. Al examen físico tiene FC: 88x’, PA: 155/55 mmHg, el choque de la punta se palpa hiperdinámico, en la línea media axilar y en la auscultación cardíaca se constata soplo sistólico eyectivo II/VI, más un soplo diastólico III/VI, que dura toda la diástole. Su examen pulmonar muestra crépitos escasos en ambas bases.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Estenosis aórtica' },
        { letter: 'B', text: 'Insuficiencia aórtica' },
        { letter: 'C', text: 'Recoartación aórtica' },
        { letter: 'D', text: 'Miocardiopatía hipertrófica obstructiva' },
        { letter: 'E', text: 'Miocardiopatía dilatada' },
      ],
      correct: 'B',
      explanation: 'Un adulto joven operado de coartación en la infancia, con PA 155/55 mmHg, choque hiperdinámico y un soplo diastólico de toda la diástole, tiene una insuficiencia aórtica (la coartación se asocia a válvula bicúspide). La recoartación daría hipertensión con diferencia de presión entre brazos y piernas, sin soplo diastólico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un joven de dieciocho años, operado de coartación aórtica en la infancia, tiene disnea de esfuerzo progresiva, edema y palpitaciones. La presión es ciento cincuenta y cinco sobre cincuenta y cinco, el choque de la punta es hiperdinámico y se ausculta un soplo sistólico eyectivo y otro diastólico, que dura toda la diástole.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis aórtica; insuficiencia aórtica; recoartación aórtica; miocardiopatía hipertrófica obstructiva; o miocardiopatía dilatada. Piénsalo.',
        answer: 'Es la B. La coartación se asocia a una válvula bicúspide, que puede volverse insuficiente. Un soplo diastólico de toda la diástole, con presión divergente y choque hiperdinámico, es una insuficiencia aórtica. La C tienta por el antecedente, pero una recoartación da hipertensión con pulsos femorales débiles y no un soplo diastólico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: insuficiencia aórtica',
      cards: [
        { title: 'Reconocer', tag: 'Cabecera y eco', kind: 'key', items: [
          { t: 'Presión divergente + Corrigan, Musset, Quincke', d: 'Soplo diastólico decreciente',
            say: 'Cerremos con las reglas de oro. Presión de pulso amplia, pulso de Corrigan, Musset y Quincke, y un soplo diastólico decreciente en el borde esternal izquierdo. El Austin Flint es un retumbo apical sin chasquido.' },
          { t: 'Severa: vena contracta > 6 mm, Rvol ≥ 60 mL', d: 'Medir DFSVI y FEVI',
            say: 'El ecocardiograma Doppler color define la severidad y mide el diámetro de fin de sístole y la fracción de eyección.' },
        ] },
        { title: 'Decidir', tag: 'Antes de que falle el VI', kind: 'alert', items: [
          { t: 'Síntomas, FEVI ≤ 55%, DFSVI > 50 mm', d: 'Reemplazo valvular',
            say: 'Se opera con síntomas, con fracción de eyección de cincuenta y cinco por ciento o menos, o con un diámetro de fin de sístole mayor de cincuenta milímetros, antes de que falle el ventrículo.' },
          { t: 'Aguda: urgencia; sin betabloqueador ni balón', d: 'Asintomático: vasodilatador y eco',
            say: 'El asintomático con ventrículo normal se controla con vasodilatadores. Y la insuficiencia aguda es una urgencia quirúrgica, sin betabloqueadores ni balón de contrapulsación. Si te llevas una sola idea de hoy: en la insuficiencia aórtica, la pista está en la presión arterial, una diastólica muy baja. Nos vemos en la próxima clase, con la estenosis mitral y la fiebre reumática.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia aórtica: de la presión divergente a la conducta',
    root: N('start', 'Soplo diastólico + presión de pulso amplia', 'Signos periféricos',
      'Un paciente con un soplo diastólico decreciente, presión de pulso amplia y signos periféricos. Lo primero es saber si es aguda o crónica.',
      ['Aguda con shock', N('alert', 'Insuficiencia aórtica aguda', 'Endocarditis o disección A',
        'Si es aguda, con edema pulmonar o shock, es una urgencia.',
        ['Estabilizar', N('refer', 'Cirugía urgente', 'Nitroprusiato y dobutamina',
          'Se estabiliza con nitroprusiato, diuréticos y dobutamina, sin betabloqueadores ni balón de contrapulsación, y se opera de urgencia.')],
      )],
      ['Crónica', N('q', 'Ecocardiograma Doppler', 'Severidad, DFSVI, FEVI, raíz',
        'Si es crónica, se pide el ecocardiograma Doppler, que da la severidad y mide el ventrículo y la raíz.',
        ['Sin síntomas y VI normal', N('ok', 'Control', 'Vasodilatador y eco cada seis a doce meses',
          'Sin síntomas y con el ventrículo normal, se controla con vasodilatadores y ecocardiograma cada seis a doce meses.')],
        ['Síntomas, FEVI ≤ 55% o DFSVI > 50 mm', N('alert', 'Reemplazo valvular', 'Antes de que falle el VI',
          'Con síntomas, fracción de eyección de cincuenta y cinco por ciento o menos, o un diámetro de fin de sístole mayor de cincuenta milímetros, se indica el reemplazo valvular.')],
        ['Aorta ≥ 55 mm (45-50 en Marfan)', N('refer', 'Cirugía de la raíz', 'Válvula y aorta',
          'Si la aorta ascendente mide cincuenta y cinco milímetros o más, o cuarenta y cinco a cincuenta en un Marfan o una bicúspide, se opera la raíz.')],
      )],
    ),
  },
};
