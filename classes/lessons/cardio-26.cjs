// Clase 4.5 (Cardiología) — Insuficiencia mitral y prolapso de la válvula mitral. Guion escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-26). Código: 1.01.1.019 Insuficiencia mitral
// (Dx específico · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-26): Diciembre 2025 P1 (se reparó «aór2ca» de las alternativas B y D, artefacto de
// extracción de «ti») y Diciembre 2019 P124 (insuficiencia mitral aguda con edema pulmonar). Enunciados del banco.
// Descartadas: Julio 2015 P38 (rotura de músculo papilar tras IAM: va en cardio-15, Complicaciones del IAM).
// El banco no trae ninguna pregunta de prolapso mitral ni de maniobras: el caso clínico del prolapso es de la clase.
// Fotos en contexto: eco de prolapso de Barlow con Doppler color (Harrison 21.ª ed., p. 2042) y chorro de insuficiencia mitral
// (Harrison, p. 1890, Fig. 241-23 B).
// En movimiento: scenes/cardio_b4.html ?v=prolapso (clic y soplo del prolapso con Valsalva y cuclillas), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-26',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Soplo holosistólico a la axila, el clic del prolapso y cuándo reparar la válvula',
      say: 'Bienvenido. Seguimos con la válvula mitral, esta vez cuando no cierra. Se pregunta con mucha variedad: una mujer joven con un clic y palpitaciones, un adulto con un soplo que se irradia a la axila, o un paciente que, tras un infarto, hace de pronto un edema pulmonar. Hoy distingues la insuficiencia primaria de la funcional, usas las maniobras con el clic del prolapso y reconoces la forma aguda.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismos',
      title: 'Primaria o secundaria: ¿está enferma la válvula?',
      nodes: [
        { id: 'v', col: 0, row: 1, k: 'start', t: 'Aparato mitral', s: 'Valvas, anillo, cuerdas, papilares' },
        { id: 'p', col: 2, row: 0, k: 'cause', t: 'Primaria u orgánica', s: 'La válvula está enferma' },
        { id: 's', col: 2, row: 2, k: 'cause', t: 'Secundaria o funcional', s: 'Valvas sanas, VI enfermo' },
        { id: 'pc', col: 4, row: 0, k: 'effect', t: 'Barlow, endocarditis, cuerdas, reumática, papilar', s: 'Cirugía: plastía' },
        { id: 'sc', col: 4, row: 2, k: 'effect', t: 'Miocardiopatía dilatada o isquémica', s: 'Tratar la insuficiencia cardíaca' },
      ],
      edges: [{ from: 'v', to: 'p' }, { from: 'v', to: 's' }, { from: 'p', to: 'pc' }, { from: 's', to: 'sc' }],
      steps: [
        { show: ['v'], note: 'Un complejo de cinco piezas',
          say: 'La válvula mitral es un complejo: las valvas, el anillo, las cuerdas tendinosas, los músculos papilares y la pared del ventrículo. La insuficiencia puede nacer en cualquiera de ellos, y la primera pregunta es si la válvula misma está enferma.' },
        { show: ['p', 'pc'], note: 'Primaria: la válvula está enferma',
          say: 'En la insuficiencia mitral primaria u orgánica, el daño es de la válvula. La causa más frecuente en el adulto es la degeneración mixomatosa, el prolapso o enfermedad de Barlow. Siguen la endocarditis, la rotura de cuerdas tendinosas, la fiebre reumática y la rotura de un músculo papilar por un infarto.' },
        { show: ['s', 'sc'], note: 'Secundaria: las valvas están sanas',
          say: 'En la insuficiencia secundaria o funcional, las valvas son normales, pero el anillo se dilata y los músculos papilares se desplazan y tiran de las valvas, por el remodelado de una miocardiopatía dilatada o isquémica. Ahí se maneja la insuficiencia cardíaca, no la válvula.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Insuficiencia mitral crónica',
      title: 'Clínica y auscultación',
      cards: [
        { title: 'Clínica', tag: 'Silenciosa por años', kind: 'key', items: [
          { t: 'Asintomática por años', d: 'Luego fatiga, disnea, FA',
            say: 'La insuficiencia mitral crónica es asintomática durante años. Después aparecen fatiga, disnea de esfuerzo y palpitaciones por fibrilación auricular, y por último insuficiencia cardíaca.' },
          { t: 'FEVI normal ya es disfunción', d: 'El VI eyecta hacia una aurícula de baja presión',
            say: 'Un detalle que se pregunta: en la insuficiencia mitral severa, una fracción de eyección de sesenta por ciento o menos ya indica disfunción del ventrículo, porque este eyecta parte de la sangre hacia una aurícula de baja presión.' },
        ] },
        { title: 'Auscultación', tag: 'En barra, a la axila', kind: 'criteria', items: [
          { t: 'Holosistólico apical a la axila', d: 'En barra, tono soplante',
            say: 'El soplo es holosistólico, en barra, de tono soplante, en el ápex, y se irradia hacia la axila izquierda y el dorso.' },
          { t: 'R1 disminuido y R3', d: 'No cambia con la inspiración',
            say: 'El primer ruido está disminuido y suele haber un tercer ruido por el llenado rápido. Aumenta con el handgrip y las cuclillas, y no cambia con la inspiración, que es lo que lo separa de la insuficiencia tricuspídea. La intensidad no mide la gravedad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prolapso mitral',
      title: 'El clic y el soplo telesistólico',
      cards: [
        { title: 'Quién y cómo', tag: 'Mujer joven, delgada', kind: 'key', items: [
          { t: 'Valvas mixomatosas > 2 mm', d: 'Marfan, Ehlers-Danlos, pectus',
            say: 'El prolapso es el desplazamiento de una o ambas valvas, engrosadas y redundantes, hacia la aurícula durante la sístole. Afecta a dos a tres por ciento de la población, sobre todo a mujeres jóvenes y delgadas, y se asocia al síndrome de Marfan y a otras enfermedades del tejido conectivo.' },
          { t: 'Palpitaciones y dolor atípico', d: 'La mayoría es asintomática',
            say: 'La mayoría no tiene síntomas. Algunas consultan por palpitaciones, dolor torácico punzante atípico, ansiedad o mareos.' },
        ] },
        { title: 'Semiología patognomónica', tag: 'Clic + soplo telesistólico', kind: 'criteria', items: [
          { t: 'Clic mesosistólico', d: 'Tensión de las valvas y cuerdas',
            say: 'El hallazgo característico es un clic en la mitad de la sístole, por la tensión brusca de las cuerdas y las valvas redundantes, seguido de un soplo telesistólico en el ápex. Mira cómo se ve el prolapso en este ecocardiograma: las dos valvas se abomban hacia la aurícula, y a la derecha el Doppler color muestra la insuficiencia.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-26/01_prolapso-mitral-barlow-eco-y-doppler-insuficiencia__harrison_p2042.jpg', label: 'Eco: prolapso de Barlow', at: 'Mira cómo se ve el prolapso', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 2042' } },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El clic que se mueve con las maniobras',
      images: [
        { src: 'animaciones/cardio-26/A1_prolapso_clic.mp4', label: 'Clic y soplo con Valsalva y cuclillas', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Con Valsalva se adelanta; con cuclillas se retrasa',
          say: 'Mira el fonocardiograma. En reposo, el clic cae en la mitad de la sístole y el soplo viene después. Con Valsalva, o al ponerse de pie, el ventrículo queda más pequeño, las valvas prolapsan antes: el clic se adelanta y el soplo se alarga. Con las cuclillas pasa lo contrario: el ventrículo se llena, el prolapso se retrasa y el clic y el soplo se acortan. Esta es la pregunta clave del prolapso.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Insuficiencia mitral clásica frente a prolapso',
      head: ['Parámetro', 'IM clásica', 'Prolapso mitral'],
      rows: [
        { cells: ['Soplo', 'Holosistólico', 'Telesistólico con clic'],
          say: 'El soplo de la insuficiencia clásica es holosistólico. En el prolapso es telesistólico, precedido de un clic.' },
        { cells: ['Irradiación', 'Axila y dorso', 'Focal en el ápex'],
          say: 'La insuficiencia clásica se irradia a la axila y al dorso. El prolapso es más focal.' },
        { cells: ['Valsalva o de pie', 'Disminuye o no varía', 'El clic se adelanta; soplo largo'],
          say: 'Con Valsalva, la insuficiencia clásica disminuye o no cambia, y en el prolapso el clic se adelanta y el soplo se alarga.' },
        { cells: ['Cuclillas', 'Aumenta', 'Clic tardío; soplo corto'],
          say: 'Con las cuclillas, la insuficiencia clásica aumenta, y en el prolapso el clic se retrasa y el soplo se acorta.' },
        { cells: ['Conducta', 'Plastía si es severa', 'Observar; plastía si es severa'],
          say: 'La conducta: plastía si es severa. En el prolapso sin insuficiencia significativa, observación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo del prolapso',
      title: 'Tranquilizar, estudiar y no sobretratar',
      cards: [
        { title: 'Prolapso sin insuficiencia', tag: 'En atención primaria', kind: 'normal', items: [
          { t: 'Eco Doppler y tranquilizar', d: 'Evitar cafeína y tabaco',
            say: 'El prolapso sin insuficiencia significativa se resuelve en atención primaria: se pide un ecocardiograma Doppler, se tranquiliza a la paciente y se aconseja evitar los estimulantes, como la cafeína y el tabaco.' },
          { t: 'Betabloqueador solo si hay palpitaciones', d: 'Sin restricción deportiva',
            say: 'Los betabloqueadores en dosis bajas se reservan para las palpitaciones sintomáticas. No hay restricción deportiva si no hay insuficiencia severa ni arritmias, y no se indica profilaxis de endocarditis.' },
        ] },
        { title: 'Complicaciones', tag: 'Cuándo derivar', kind: 'alert', items: [
          { t: 'Insuficiencia progresiva y cuerdas rotas', d: 'Más en valvas gruesas y hombres',
            say: 'Las complicaciones son la insuficiencia progresiva, la rotura de cuerdas, la endocarditis y, rara vez, las arritmias graves y la muerte súbita. Si la insuficiencia es moderada o severa, se sigue como cualquier insuficiencia mitral.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y cirugía',
      title: 'Ecocardiograma y criterios quirúrgicos',
      cards: [
        { title: 'Severidad', tag: 'Doppler color', kind: 'criteria', items: [
          { t: 'Vol. regurgitante ≥ 60 mL', d: 'Fracción ≥ 50%; vena contracta ≥ 7 mm',
            say: 'El ecocardiograma Doppler muestra el mecanismo y la gravedad. Mira este chorro: la sangre sale del ventrículo hacia la aurícula durante la sístole. La insuficiencia es severa con un volumen regurgitante de sesenta mililitros o más, una fracción regurgitante de cincuenta por ciento o más, o una vena contracta de siete milímetros o más.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-26/02_prolapso-mitral-doppler-color-chorro-regurgitante__harrison_p1890.jpg', label: 'Chorro de la IM', at: 'Mira este chorro', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 1890' } },
        ] },
        { title: 'Cirugía', tag: 'Plastía mejor que reemplazo', kind: 'alert', items: [
          { t: 'Sintomática, FEVI ≤ 60%, DTSVI ≥ 40 mm', d: 'FA nueva o PSAP > 50 mmHg',
            say: 'La insuficiencia primaria severa se opera si hay síntomas, si la fracción de eyección es de sesenta por ciento o menos, si el diámetro de fin de sístole es de cuarenta milímetros o más, o si aparece una fibrilación auricular nueva o una presión pulmonar mayor de cincuenta milímetros de mercurio.' },
          { t: 'Plastía mitral con anuloplastía', d: 'Preserva el VI; sin anticoagular de por vida',
            say: 'La intervención de elección es la reparación, la plastía mitral con anuloplastía, que preserva el aparato subvalvular y el ventrículo y evita la anticoagulación crónica. El reemplazo queda para las válvulas no reparables.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'La insuficiencia mitral aguda',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Rotura de papilar o cuerdas', s: 'IAM, endocarditis' },
        { id: 'a', col: 1, row: 1, k: 'mech', t: 'Aurícula sin adaptar', s: 'La presión pasa al pulmón' },
        { id: 'e', col: 2, row: 0, k: 'effect', t: 'Edema pulmonar o shock', s: 'Soplo corto o ausente' },
        { id: 't', col: 3, row: 2, k: 'good', t: 'Nitroprusiato y balón de contrapulsación', s: 'Bajan la poscarga' },
        { id: 'q', col: 4, row: 1, k: 'alert', t: 'Cirugía urgente', s: 'Reparación o reemplazo' },
      ],
      edges: [{ from: 'c', to: 'a' }, { from: 'a', to: 'e' }, { from: 'e', to: 't' }, { from: 't', to: 'q' }],
      steps: [
        { show: ['c', 'a'], note: 'Una aurícula que no se adaptó',
          say: 'En la insuficiencia mitral aguda, por la rotura de cuerdas, de un músculo papilar tras un infarto o por una endocarditis, la aurícula no tuvo tiempo de adaptarse. La presión sube directo hacia los pulmones.' },
        { show: ['e'], note: 'Edema pulmonar y shock',
          say: 'El paciente tiene un edema pulmonar o un shock, y el soplo puede ser corto, suave o hasta inaudible, porque la presión de la aurícula se iguala con la del ventrículo. Después de un infarto, la rotura papilar aparece entre el segundo y el séptimo día.' },
        { show: ['t', 'q'], note: 'Bajar la poscarga y operar',
          say: 'Se estabiliza con nitroprusiato, diuréticos y balón de contrapulsación, que baja la poscarga y reduce el reflujo, y se opera de urgencia. Ojo: en la insuficiencia mitral aguda el balón de contrapulsación sí ayuda, al revés que en la insuficiencia aórtica.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del soplo apical a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Insuficiencia mitral y prolapso: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Holosistólico apical a la axila', 'Insuficiencia mitral', 'Insuficiencia tricuspídea'],
          say: 'Soplo holosistólico apical que se irradia a la axila: insuficiencia mitral. La tricuspídea sube con la inspiración.' },
        { cells: ['Clic mesosistólico + soplo telesistólico', 'Prolapso mitral', 'Insuficiencia mitral clásica'],
          say: 'Un clic mesosistólico con soplo telesistólico: prolapso mitral, no una insuficiencia mitral clásica.' },
        { cells: ['Valsalva o de pie en el prolapso', 'Clic y soplo se adelantan', 'El soplo desaparece'],
          say: 'En el prolapso, con Valsalva o de pie, el clic y el soplo se adelantan. El soplo no desaparece.' },
        { cells: ['Mujer joven con palpitaciones y prolapso', 'Eco, tranquilizar, betabloqueador si hay síntomas', 'Cirugía o profilaxis de endocarditis'],
          say: 'Mujer joven con palpitaciones y prolapso: ecocardiograma, tranquilizar y un betabloqueador si hay síntomas. Operar o dar profilaxis de endocarditis es el error.' },
        { cells: ['IM primaria severa con FEVI 55%', 'Plastía mitral', 'Seguir controlando'],
          say: 'Insuficiencia mitral primaria severa con fracción de eyección de cincuenta y cinco por ciento: plastía mitral. Esperar es el error, porque ya hay disfunción.' },
        { cells: ['Edema pulmonar tras un infarto y soplo nuevo', 'IM aguda: nitroprusiato, balón, cirugía', 'Tratar como insuficiencia cardíaca crónica'],
          say: 'Edema pulmonar días después de un infarto con un soplo nuevo: rotura papilar, insuficiencia mitral aguda, con nitroprusiato, balón y cirugía urgente.' },
        { cells: ['Valvas sanas con VI dilatado', 'Tratar la insuficiencia cardíaca', 'Operar la válvula primero'],
          say: 'Insuficiencia mitral funcional, con valvas sanas y el ventrículo dilatado: se trata la insuficiencia cardíaca, no se opera la válvula primero.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, sin antecedentes mórbidos, delgada, consulta por palpitaciones y dolor torácico atípico punzante. PA 115/70 mmHg, FC 72 lpm. En el ápex se ausculta un clic agudo y seco en la mitad de la sístole, seguido de un soplo sistólico breve. Al pedirle una maniobra de Valsalva, el clic se desplaza hacia el inicio de la sístole y el soplo se hace más prolongado. ECG normal.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Cirugía de plastía mitral' },
        { letter: 'B', text: 'Ecocardiograma Doppler, tranquilizar y evitar estimulantes; betabloqueador en dosis bajas solo si las palpitaciones son sintomáticas' },
        { letter: 'C', text: 'Profilaxis con amoxicilina antes de procedimientos dentales' },
        { letter: 'D', text: 'Restricción de toda actividad física' },
        { letter: 'E', text: 'Anticoagulación con acenocumarol' },
      ],
      correct: 'B',
      explanation: 'Un clic mesosistólico seguido de un soplo telesistólico que se adelanta y alarga con Valsalva es el sello del prolapso valvular mitral. La conducta inicial en atención primaria es tranquilizar, descartar una regurgitación significativa con ecocardiograma Doppler, evitar estimulantes y usar betabloqueadores en dosis bajas solo si las palpitaciones son sintomáticas. No requiere restricción deportiva ni profilaxis de endocarditis si no hay insuficiencia significativa.',
      say: {
        stem: 'Una mujer de veintiséis años, delgada, consulta por palpitaciones y dolor torácico punzante. En el ápex se ausculta un clic en la mitad de la sístole, seguido de un soplo breve. Con la maniobra de Valsalva el clic se adelanta y el soplo se hace más largo. El electrocardiograma es normal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: cirugía de plastía mitral; ecocardiograma, tranquilizar y evitar estimulantes, con betabloqueador solo si hay síntomas; profilaxis con amoxicilina; restricción de toda actividad física; o acenocumarol. Piénsalo.',
        answer: 'Es la B. El clic que se adelanta con Valsalva es un prolapso mitral. En una mujer joven sin insuficiencia significativa se hace un ecocardiograma, se tranquiliza y se evitan los estimulantes. La A tienta porque suena a valvulopatía, pero la cirugía es para la insuficiencia severa. Y la C no corresponde: el prolapso no necesita profilaxis de endocarditis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 1',
      stem: 'Una paciente de 45 años, con antecedente de enfermedad reumática en la infancia, consulta por un cuadro de 3 meses de evolución de disnea de esfuerzos en capacidad funcional II, que actualmente ha progresado a disnea de mínimos esfuerzos. Al examen físico, su presión arterial es de 120/78 mmHg, su frecuencia cardíaca es de 92 latidos por minuto y su saturación de oxígeno es de 93% a aire ambiental. Se ausculta un soplo holosistólico en el ápex, irradiado a la axila y se palpa el choque de la punta hiperdinámico a la altura del quinto espacio intercostal. El examen pulmonar muestra crepitaciones basales bilaterales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Insuficiencia mitral' },
        { letter: 'B', text: 'Insuficiencia aórtica' },
        { letter: 'C', text: 'Estenosis mitral' },
        { letter: 'D', text: 'Estenosis aórtica' },
        { letter: 'E', text: 'Ductus arterioso persistente' },
      ],
      correct: 'A',
      explanation: 'Disnea progresiva con soplo holosistólico en el ápex irradiado a la axila, choque de la punta hiperdinámico y crépitos: insuficiencia mitral con insuficiencia cardíaca. La estenosis mitral da un retumbo diastólico y chasquido; los soplos aórticos se irradian al cuello. El antecedente de enfermedad reumática en la infancia orienta a la etiología.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de cuarenta y cinco años, con antecedente de enfermedad reumática en la infancia, tiene tres meses de disnea progresiva, que ya aparece con mínimos esfuerzos. Se ausculta un soplo holosistólico en el ápex, irradiado a la axila, con el choque de la punta hiperdinámico, y hay crepitaciones en ambas bases.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: insuficiencia mitral; insuficiencia aórtica; estenosis mitral; estenosis aórtica; o ductus arterioso persistente. Piénsalo.',
        answer: 'Es la A. Un soplo holosistólico apical que se irradia a la axila es una insuficiencia mitral, aquí de origen reumático y con insuficiencia cardíaca. La C tienta por el antecedente reumático, pero la estenosis mitral tiene un retumbo diastólico con chasquido, no un soplo holosistólico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 124',
      stem: 'Una paciente presenta un cuadro de 2 días de disnea de esfuerzo, que aparece ante medianos esfuerzos, asociado a tos con expectoración, que en ocasiones es rosada. Al examen físico tiene FC: 94x’, PA: 110/70 mmHg, examen pulmonar con crepitaciones bilaterales y examen cardíaco con presencia de un soplo sistólico IV/VI.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Tromboembolismo pulmonar' },
        { letter: 'B', text: 'Insuficiencia tricuspídea' },
        { letter: 'C', text: 'Neumopatía aguda' },
        { letter: 'D', text: 'Insuficiencia mitral aguda' },
        { letter: 'E', text: 'Disección aórtica' },
      ],
      correct: 'D',
      explanation: 'Disnea súbita con expectoración rosada, crépitos bilaterales y soplo sistólico IV/VI: edema pulmonar agudo por insuficiencia mitral aguda (rotura de cuerdas o papilar). Es una urgencia que se estabiliza con vasodilatadores y diuréticos y se opera. La insuficiencia tricuspídea no explica un edema pulmonar, y el tromboembolismo pulmonar no da crépitos con soplo apical.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Una paciente tiene dos días de disnea de medianos esfuerzos, con tos y expectoración a veces rosada. Hay crepitaciones en ambos pulmones y un soplo sistólico de grado cuatro.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tromboembolismo pulmonar; insuficiencia tricuspídea; neumopatía aguda; insuficiencia mitral aguda; o disección aórtica. Piénsalo.',
        answer: 'Es la D. La expectoración rosada y los crépitos bilaterales son un edema pulmonar, y un soplo sistólico fuerte apunta a una insuficiencia mitral aguda. La C tienta por la tos y los crépitos, pero una neumopatía no explica el soplo ni la expectoración rosada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: insuficiencia mitral y prolapso',
      cards: [
        { title: 'Reconocer', tag: 'Semiología', kind: 'key', items: [
          { t: 'Holosistólico apical, axila, R1 bajo', d: 'No cambia con la inspiración',
            say: 'Cerremos con las reglas de oro. El soplo holosistólico apical irradiado a la axila es la insuficiencia mitral. Y en el prolapso, clic y soplo telesistólico: con Valsalva se adelantan, con cuclillas se retrasan.' },
          { t: 'Primaria u orgánica, o funcional', d: 'La funcional se maneja como insuficiencia cardíaca',
            say: 'La insuficiencia primaria es de la válvula y se opera. La funcional tiene valvas sanas, y se maneja como insuficiencia cardíaca.' },
        ] },
        { title: 'Decidir', tag: 'Plastía y urgencia', kind: 'alert', items: [
          { t: 'Severa + síntomas, FEVI ≤ 60%, DTSVI ≥ 40 mm', d: 'Plastía mejor que reemplazo',
            say: 'La insuficiencia primaria severa se opera con síntomas, fracción de eyección de sesenta por ciento o menos, diámetro de fin de sístole de cuarenta milímetros o más, fibrilación auricular nueva o hipertensión pulmonar. La plastía es mejor que el reemplazo.' },
          { t: 'Aguda: edema pulmonar o shock', d: 'Nitroprusiato, balón de contrapulsación, cirugía',
            say: 'La forma aguda, tras un infarto o una endocarditis, es una urgencia: nitroprusiato, balón de contrapulsación y cirugía. Y el prolapso sin insuficiencia se tranquiliza. Si te llevas una sola idea de hoy: en el prolapso, el clic se mueve con la precarga, y en la insuficiencia mitral, la fracción de eyección normal ya es disfunción. Nos vemos en la próxima clase, con las cardiopatías congénitas del adulto.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia mitral y prolapso: del soplo a la conducta',
    root: N('start', 'Soplo sistólico apical', 'Clic, irradiación, síntomas',
      'Un soplo sistólico en el ápex. Lo primero es distinguir si es agudo, y qué mecanismo tiene.',
      ['Edema pulmonar o shock', N('alert', 'Insuficiencia mitral aguda', 'Rotura papilar, cuerdas o endocarditis',
        'Si hay edema pulmonar o shock, es una insuficiencia mitral aguda: rotura de un papilar, de cuerdas o endocarditis.',
        ['Estabilizar', N('refer', 'Cirugía urgente', 'Nitroprusiato, diuréticos, balón',
          'Se estabiliza con nitroprusiato, diuréticos y balón de contrapulsación, y se opera de urgencia.')],
      )],
      ['Clic mesosistólico', N('do', 'Prolapso mitral', 'Eco; tranquilizar',
        'Si hay un clic en la mitad de la sístole, es un prolapso. Se hace ecocardiograma, se tranquiliza, se evitan los estimulantes y se usa un betabloqueador si hay palpitaciones.')],
      ['Holosistólico a la axila', N('q', 'Insuficiencia mitral crónica', 'Eco: mecanismo y severidad',
        'Si es un soplo holosistólico a la axila, es una insuficiencia mitral crónica. El ecocardiograma define el mecanismo y la severidad.',
        ['Funcional (valvas sanas)', N('ok', 'Tratar la insuficiencia cardíaca', 'Clip si persiste sintomática',
          'Si es funcional, se trata la insuficiencia cardíaca, y si persiste sintomática, se evalúa el clip mitral.')],
        ['Primaria severa con indicación', N('alert', 'Plastía mitral', 'Síntomas, FEVI ≤ 60%, DTSVI ≥ 40',
          'Si es primaria, severa y con síntomas, fracción de eyección de sesenta por ciento o menos o diámetro de fin de sístole de cuarenta milímetros o más, se hace plastía mitral.')],
      )],
    ),
  },
};
