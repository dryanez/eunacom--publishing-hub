// Clase 13.2 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-02). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Preguntas reales de la clase: Julio 2025 P19, Diciembre 2025 P5, Diciembre 2019 P90. Julio 2015 P43 y Agosto 2021 P61 (trauma de uretra)
// ya las usa trauma-05 y no se repiten; el trauma de uretra se enseña desde el libro.
// Se descartó Diciembre 2022 P66 (RTU previa, sonda que no pasa, globo vesical): su clave marca ecografía pélvica,
// mientras Enero 2023 P142 (mismo escenario, sin globo) marca uretrografía retrógrada; las dos claves no son coherentes entre sí.
// El banco real no tiene preguntas sobre diuresis postobstructiva: se usa la pregunta del libro como "Caso representativo".
// Imagen: Bailey & Love 27.ª ed., Fig. 78.12 (caption ubicado junto a la figura 78.11; la imagen del TAC es la segunda del par).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Retención aguda de orina: sonda Foley o cistostomía, y qué vigilar al descomprimir',
      say: 'Bienvenido. Hoy vemos la retención aguda de orina, una urgencia dolorosa que se resuelve con una decisión sencilla pero que se pregunta mucho: sonda Foley o cistostomía suprapúbica. La clave está en una sola pregunta que debes hacerte antes de tocar la uretra: ¿hay sospecha de trauma uretral?',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la obstrucción a la retención',
      nodes: [
        { id: 'h', col: 0, row: 0, k: 'cause', t: 'Hiperplasia prostática', s: 'La causa más frecuente en el adulto mayor' },
        { id: 'f', col: 0, row: 2, k: 'cause', t: 'Fármacos', s: 'Anticolinérgicos, opiáceos, alcohol' },
        { id: 'r', col: 1, row: 1, k: 'mech', t: 'La vejiga no se vacía', s: 'Se llena sin salida' },
        { id: 'g', col: 2, row: 1, k: 'effect', t: 'Dolor y globo vesical', s: 'Masa mate sobre el pubis' },
        { id: 'b', col: 3, row: 0, k: 'risk', t: 'Incontinencia por rebalse', s: 'En el adulto mayor' },
        { id: 'k', col: 3, row: 2, k: 'alert', t: 'Daño renal', s: 'Si se mantiene la obstrucción' },
        { id: 'd', col: 4, row: 1, k: 'good', t: 'Descomprimir', s: 'Calma el dolor y protege el riñón' },
      ],
      edges: [
        { from: 'h', to: 'r' },
        { from: 'f', to: 'r', label: 'la descompensan' },
        { from: 'r', to: 'g' },
        { from: 'g', to: 'b' },
        { from: 'g', to: 'k' },
        { from: 'k', to: 'd', label: 'urgente' },
      ],
      steps: [
        { show: ['h', 'f', 'r'], note: 'Una próstata grande, descompensada',
          say: 'La retención aguda de orina es la incapacidad súbita de vaciar una vejiga llena. En el hombre mayor, la causa más frecuente es la hiperplasia prostática, y muchas veces la descompensa un fármaco: un anticolinérgico, un antihistamínico como la clorfenamina, un descongestionante, un opiáceo o el alcohol.' },
        { show: ['g'], note: 'El globo vesical se palpa',
          say: 'El paciente llega con dolor intenso en el hipogastrio, agitado y sudoroso. Y al examen palpas el globo vesical: una masa convexa, dolorosa y mate a la percusión, que sobrepasa el pubis.' },
        { show: ['b', 'k'], note: 'Rebalse y daño renal',
          say: 'En el adulto mayor o en el paciente con vejiga neurógena puede verse como incontinencia por rebalse, que es el escape de orina de una vejiga que está llena. Y si la obstrucción se mantiene, se compromete el riñón.' },
        { show: ['d'], note: 'Descomprimir de inmediato',
          say: 'Por eso la retención aguda es una urgencia, y el tratamiento es descomprimir la vejiga. La pregunta es con qué técnica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas',
      title: 'Por qué se retiene la orina',
      cards: [
        { title: 'Mecánicas', tag: 'Obstáculo', kind: 'key', items: [
          { t: 'Próstata: HPB o cáncer', d: 'Comprimen la uretra',
            say: 'Las causas mecánicas son las que bloquean el paso: la hiperplasia prostática y el cáncer de próstata.' },
          { t: 'Cálculo, coágulos o estenosis', d: 'Obstruyen el trayecto de la uretra',
            say: 'También un cálculo enclavado en la uretra, los coágulos dentro de la vejiga y las estenosis uretrales.' },
        ] },
        { title: 'Neurológicas y fármacos', tag: 'Detrusor y esfínter', kind: 'alert', items: [
          { t: 'Vejiga neurógena, shock espinal', d: 'Falla el control del vaciado',
            say: 'Las causas neurológicas son la vejiga neurógena y el shock espinal, donde el músculo no se contrae.' },
          { t: 'Anticolinérgicos y opiáceos', d: 'También antihistamínicos y descongestionantes',
            say: 'Y los fármacos: anticolinérgicos, antihistamínicos de primera generación, descongestionantes simpaticomiméticos y opiáceos. Un resfrío tratado con clorfenamina puede ser la gota que rebasa el vaso en un hombre con la próstata grande.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Elección de técnica',
      title: 'Foley o cistostomía: la pregunta clave',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'Retención aguda con globo', s: 'Hay que descomprimir' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Sospecha de trauma uretral?', s: 'Sangre, hematoma, pelvis' },
        { id: 'n', col: 2, row: 0, k: 'good', t: 'Sonda Foley', s: '16 a 18 French' },
        { id: 'y', col: 2, row: 2, k: 'alert', t: 'Cistostomía suprapúbica', s: 'Por punción, sin pasar por la uretra' },
        { id: 'x', col: 3, row: 1, k: 'trap', t: 'No se sonda a ciegas', s: 'Puede cortar una uretra desgarrada' },
      ],
      edges: [
        { from: 's', to: 'q' },
        { from: 'q', to: 'n', label: 'no' },
        { from: 'q', to: 'y', label: 'sí' },
        { from: 'y', to: 'x' },
      ],
      steps: [
        { show: ['s', 'q'], note: 'Antes de sondar, pregunta',
          say: 'Antes de pasar cualquier sonda, busca señales de lesión de la uretra: sangre en el meato, que es la uretrorragia, un hematoma escrotal o perineal, o una fractura de pelvis.' },
        { show: ['n'], note: 'Sin trauma: sonda Foley',
          say: 'Si no hay trauma, la primera elección es la sonda Foley transuretral. Es la técnica más simple, y calma el dolor y protege el riñón.' },
        { show: ['y', 'x'], note: 'Con trauma: cistostomía',
          say: 'Si hay sospecha de lesión uretral, la sonda está contraindicada, porque al pasarla a ciegas puedes convertir un desgarro parcial en una sección completa. Se descomprime por la vía suprapúbica, con una cistostomía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'Cómo se pasa bien una sonda Foley',
      cards: [
        { title: 'Paso a paso', tag: 'Foley', kind: 'key', items: [
          { t: 'Calibre 16 a 18 French', d: 'Con lidocaína jalea al 2%',
            say: 'La sonda Foley de dieciséis a dieciocho French se pasa con técnica estéril, y la uretra se lubrica generosamente con lidocaína en jalea al dos por ciento.' },
          { t: 'Avanza con suavidad', d: 'Sin forzar la sonda',
            say: 'Se avanza con suavidad. Si sientes un tope, no empujes: ahí es donde se produce una falsa vía.' },
          { t: 'Confirma orina antes de inflar', d: 'Balón con agua bidestilada',
            say: 'Y la regla de oro: antes de inflar el balón tiene que salir orina por la sonda. Se infla con agua bidestilada, no con aire ni suero fisiológico.' },
        ] },
        { title: 'Qué sale mal', tag: 'Complicaciones', kind: 'alert', items: [
          { t: 'Inflar sin ver orina', d: 'Desgarra la uretra',
            say: 'Si inflas el balón dentro de la uretra, antes de ver orina, desgarras la mucosa. Hay dolor intenso y sangrado.' },
          { t: 'Falsa vía o infección', d: 'Si falla, cistostomía',
            say: 'Las complicaciones tempranas son la falsa vía, la uretrorragia y la infección. Si el cateterismo fracasa y hay globo vesical, la salida es la cistostomía suprapúbica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cistostomía suprapúbica',
      title: 'Cuándo se hace cistostomía',
      cards: [
        { title: 'Tres indicaciones', tag: 'Por punción', kind: 'alert', items: [
          { t: 'Trauma uretral', d: 'Uretrorragia, hematoma perineal, pelvis rota',
            say: 'La primera y más preguntada: sospecha o confirmación de trauma uretral. Sangre en el meato, hematoma escrotal o perineal en mariposa, o fractura de pelvis.' },
          { t: 'Sonda imposible', d: 'Estenosis severa o falsa vía',
            say: 'La segunda: no se puede pasar la sonda, por una estenosis uretral severa o una falsa vía.' },
          { t: 'Prostatitis aguda grave', d: 'La sonda duele y puede dar bacteriemia',
            say: 'Y la tercera, una prostatitis aguda bacteriana grave con retención, donde sondar es muy doloroso y puede producir bacteriemia.' },
        ] },
        { title: 'La técnica', tag: 'Cystofix', kind: 'key', items: [
          { t: 'Trocar de 10 a 14 French', d: 'Sobre el pubis, con globo palpable',
            say: 'Se punciona sobre el pubis con un trocar de diez a catorce French. Necesitas un globo vesical palpable: sin globo, se podría puncionar el intestino.' },
          { t: 'Estudio de la uretra después', d: 'Uretrocistografía retrógrada',
            say: 'Si fue por trauma, la uretra se estudia después con una uretrocistografía retrógrada, y se repara con cirugía.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación',
      title: 'Foley contra cistostomía',
      head: ['Parámetro', 'Sonda Foley', 'Cistostomía suprapúbica'],
      rows: [
        { cells: ['Indicación', 'HPB, fármacos, funcional, sin trauma', 'Trauma, estenosis, prostatitis grave'],
          say: 'La sonda Foley es para la retención por hiperplasia, por fármacos o funcional, sin trauma. La cistostomía, para el trauma uretral, la estenosis infranqueable y la prostatitis bacteriana aguda.' },
        { cells: ['Contraindicación', 'Sospecha de lesión uretral', 'Sin globo palpable'],
          say: 'La contraindicación de la Foley es la sospecha de lesión uretral. La de la cistostomía es que no haya globo vesical palpable, porque aumenta el riesgo de puncionar el intestino.' },
        { cells: ['Calibre', '16 a 18 French', '10 a 14 French'],
          say: 'El calibre es de dieciséis a dieciocho French en la Foley, y de diez a catorce en la cistostomía.' },
        { cells: ['Complicaciones', 'Falsa vía, uretrorragia, infección', 'Punción intestinal, hematoma de pared'],
          say: 'La Foley puede dar falsa vía, sangrado e infección. La cistostomía, punción intestinal, si no hay globo, y hematoma de la pared abdominal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de descomprimir',
      title: 'Lo que pasa al vaciar la vejiga',
      cards: [
        { title: 'Cómo descomprimir', tag: 'Continuo', kind: 'key', items: [
          { t: 'Completa y sin clampeo', d: 'El clampeo intermitente está obsoleto',
            say: 'La descompresión debe ser continua y completa. La antigua práctica de clampear la sonda para evitar la hematuria ex vacuo o un colapso fue desmentida por la evidencia: el clampeo solo prolonga el dolor.' },
          { t: 'Todos van a urología', d: 'Para estudiar la causa',
            say: 'Y todo paciente con retención aguda de orina se deriva a urología para estudiar la causa.' },
        ] },
        { title: 'Diuresis postobstructiva', tag: 'Vigilar', kind: 'alert', items: [
          { t: 'Más de 1.000 mL al sondar', d: 'Se observa al paciente',
            say: 'Si al descomprimir salen más de mil mililitros, el paciente debe quedar en observación, y se anota el volumen evacuado.' },
          { t: 'Poliuria, hipovolemia, hipokalemia', d: 'Se pierde el gradiente medular',
            say: 'El riesgo es la diuresis postobstructiva: el riñón pierde transitoriamente su gradiente medular, y el paciente orina muchísimo. Puede caer en hipovolemia y en hipokalemia severas.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cuando la obstrucción llega al riñón',
      images: [
        { src: 'biblioteca/19_urologia/uro-02/01_tac-hidronefrosis-bilateral-obstruccion-vesical__bailey-love_p1482.jpg', label: 'TAC: hidronefrosis bilateral por obstrucción de la salida de la vejiga', credit: 'Bailey & Love 27.ª ed., Fig. 78.12' },
      ],
      steps: [
        { note: 'Ambos riñones con la pelvis dilatada',
          say: 'Este es un TAC de abdomen. Mira a cada lado de la columna: en los dos riñones la pelvis está dilatada y llena de líquido, la zona oscura que ocupa el centro. Eso es una hidronefrosis bilateral, causada por una obstrucción en la salida de la vejiga. Es lo que le pasa al riñón cuando la retención no se descomprime a tiempo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la retención aguda a la técnica de descompresión y lo que se vigila después.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Retención aguda: dato, conducta, error',
      head: ['Dato', 'Conducta', 'Error típico'],
      rows: [
        { cells: ['Retención con HPB, sin trauma', 'Sonda Foley', 'Empezar con alfabloqueante'],
          say: 'Retención aguda por hiperplasia, sin trauma: sonda Foley. El alfabloqueante se agrega después, para prevenir la recurrencia.' },
        { cells: ['Uretrorragia o fractura de pelvis', 'Cistostomía suprapúbica', 'Pasar la sonda Foley'],
          say: 'Uretrorragia, hematoma perineal o fractura de pelvis: cistostomía. El error es pasar la sonda.' },
        { cells: ['Sospecha de lesión uretral', 'Uretrocistografía retrógrada', 'Cistoscopía o TAC'],
          say: 'Para estudiar una lesión de uretra se pide uretrocistografía retrógrada, no cistoscopía ni TAC.' },
        { cells: ['Sonda que no pasa y sangra', 'Cistostomía', 'Insistir con un calibre menor'],
          say: 'Si la sonda no avanza y hay uretrorragia, cistostomía. No insistas con otra sonda.' },
        { cells: ['Más de 1.000 mL evacuados', 'Observar diuresis y electrolitos', 'Clampear la sonda'],
          say: 'Más de mil mililitros al sondar: vigilas la diuresis y los electrolitos. El clampeo ya no se usa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 72 años con dolor intenso en el bajo vientre e imposibilidad de orinar desde hace 14 horas, tras tomar clorfenamina por un resfrío. Está taquicárdico y sudoroso. Se palpa una masa dolorosa y mate en el hipogastrio, 4 cm sobre el pubis. No hay trauma ni sangre en el meato.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Cistostomía suprapúbica por punción' },
        { letter: 'B', text: 'Sonda Foley transuretral, con descompresión continua' },
        { letter: 'C', text: 'Sonda Foley con clampeo cada 300 mL' },
        { letter: 'D', text: 'Solicitar uretrocistografía retrógrada antes de sondar' },
        { letter: 'E', text: 'Furosemida endovenosa y observar' },
      ],
      correct: 'B',
      explanation: 'Es una retención aguda de orina por un antihistamínico con efecto anticolinérgico, sobre una hiperplasia prostática probable. Sin trauma ni uretrorragia, la primera maniobra es la sonda Foley, con descompresión continua y completa. El clampeo fraccionado no se usa, y se registra el volumen evacuado para vigilar la diuresis postobstructiva.',
      say: {
        stem: 'Un hombre de setenta y dos años con dolor intenso en el bajo vientre y sin poder orinar hace catorce horas, después de tomar clorfenamina por un resfrío. Tiene una masa dolorosa y mate sobre el pubis. No hay trauma ni sangre en el meato.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: cistostomía suprapúbica; sonda Foley con descompresión continua; sonda Foley con clampeo cada trescientos mililitros; uretrocistografía antes de sondar; o furosemida y observar. Piénsalo.',
        answer: 'Es la B. Sin signos de trauma, se pasa una sonda Foley. La A es la tentación, pero la cistostomía se reserva para el trauma o para cuando la sonda no pasa. Y la C es una práctica obsoleta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 19',
      stem: 'Hombre de 70 años con HPB conocida llega a urgencias con incapacidad de orinar desde hace 8 horas, vejiga palpable en hipogastrio y dolor intenso.',
      question: '¿Cuál es el manejo inicial de elección?',
      options: [
        { letter: 'A', text: 'Sonda Foley vesical' },
        { letter: 'B', text: 'Diurético EV' },
        { letter: 'C', text: 'Alfa-bloqueador oral y esperar' },
        { letter: 'D', text: 'Cistostomía suprapúbica inmediata' },
        { letter: 'E', text: 'Cateterismo intermitente' },
      ],
      correct: 'A',
      explanation: 'Retención urinaria aguda: manejo inmediato = sonda Foley para drenaje vesical. Alivia el dolor y previene daño renal. Cistostomía solo si falla la sonda. Alfa-bloqueador se agrega DESPUÉS del episodio agudo para prevención de recurrencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de setenta años con hiperplasia prostática conocida, que no puede orinar hace ocho horas, con vejiga palpable en el hipogastrio y dolor intenso.',
        question: '¿Cuál es el manejo inicial de elección?',
        options: 'Las opciones: sonda Foley vesical; diurético endovenoso; alfabloqueador oral y esperar; cistostomía suprapúbica inmediata; o cateterismo intermitente. Piénsalo.',
        answer: 'Es la A. Sin trauma, la primera maniobra es la sonda Foley, que alivia el dolor y protege el riñón. La D es la trampa: la cistostomía solo se usa si la sonda falla. El alfabloqueador se agrega después del episodio agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 5',
      stem: 'Un paciente de 68 años consulta por imposibilidad de orinar asociada a dolor abdominal. Refiere que desde hace 3 días presenta dificultades en la micción que progresaron hasta la anuria en las últimas 24 horas. Al examen físico se observa sudoroso, con frecuencia cardíaca de 100 lpm y quejumbroso. El examen abdominal demuestra matidez a la percusión hipogástrica y dolor a la palpación abdominal baja sin signos peritoneales. Tiene antecedente de una resección transuretral hace 10 años por uropatía obstructiva baja asociada a hiperplasia prostática benigna. Se intenta instalar una sonda Foley número 18 por uretra; sin embargo, se encuentra un tope a los 6 cm, con imposibilidad de pasar la sonda y, luego, uretrorragia moderada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cistostomía abierta' },
        { letter: 'B', text: 'Intentar instalar una sonda de menor calibre' },
        { letter: 'C', text: 'UroTAC' },
        { letter: 'D', text: 'Cistostomía suprapúbica' },
        { letter: 'E', text: 'Uretrocistografía' },
      ],
      correct: 'D',
      explanation: 'Se trata de una retención urinaria aguda, probablemente por estenosis uretral (post RTU) o recurrencia de hiperplasia prostática. El manejo inicial es sondaje vesical; sin embargo, al fracasar 2 a 3 intentos o al producirse uretrorragia (sugestiva de lesión uretral o falsa vía), la conducta correcta es realizar una cistostomía suprapúbica percutánea para descompresión vesical.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de sesenta y ocho años, con anuria de veinticuatro horas, dolor, matidez en el hipogastrio y una resección transuretral previa por hiperplasia prostática. Intentan pasar una sonda Foley número dieciocho, pero hay un tope a los seis centímetros, no pasa, y aparece una uretrorragia moderada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cistostomía abierta; intentar una sonda de menor calibre; urotac; cistostomía suprapúbica; o uretrocistografía. Piénsalo.',
        answer: 'Es la D. La sonda no pasa y hay uretrorragia: ya hay una falsa vía o una lesión uretral, y el paciente sigue con globo vesical. Se descomprime por punción suprapúbica. La B es la trampa: insistir con otra sonda empeora la lesión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 90',
      stem: 'Un paciente de 42 años sufre un accidente automovilístico, resultado con múltiples traumatismos. Al examen físico tiene movilidad de las extremidades inferiores, sin signos de fractura y examen genital con uretrorragia. Las radiografías confirman una fractura de pelvis estable.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Pielografía de eliminación endovenosa' },
        { letter: 'B', text: 'Uretrocistografía retrógrada' },
        { letter: 'C', text: 'Cistoscopía' },
        { letter: 'D', text: 'TAC de pelvis' },
        { letter: 'E', text: 'Resonancia magnética nuclear de pelvis' },
      ],
      correct: 'B',
      explanation: 'Tiene una sección uretral, la que se estudia con uretrocistografía retrógrada y se trata con cirugía. Recordar que está contraindicada la sonda (también la cistoscopía) y, si hay globo vesical, se maneja con cistostomía suprapúbica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de cuarenta y dos años, con múltiples traumatismos en un accidente. Mueve las piernas, y tiene uretrorragia. Las radiografías muestran una fractura de pelvis estable.',
        question: '¿Cuál es el examen más adecuado para seguir el estudio?',
        options: 'Las opciones: pielografía de eliminación; uretrocistografía retrógrada; cistoscopía; TAC de pelvis; o resonancia magnética. Piénsalo.',
        answer: 'Es la B. Uretrorragia con fractura de pelvis es una lesión uretral hasta demostrar lo contrario, y se estudia con uretrocistografía retrógrada. No se pasa sonda ni se hace cistoscopía. Si hubiera globo vesical, se descomprime con cistostomía suprapúbica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Varón de 69 años con retención urinaria aguda de 12 horas es sondado con éxito en urgencias mediante sonda Foley, evacuándose de forma inmediata 1.400 mL de orina clara. El paciente refiere alivio inmediato del dolor.',
      question: '¿Cuál es la complicación fisiopatológica que debe monitorizarse con mayor atención en las primeras 24 horas?',
      options: [
        { letter: 'A', text: 'Reflejo vasovagal sostenido con paro cardíaco' },
        { letter: 'B', text: 'Síndrome de diuresis post-obstructiva con deshidratación e hipokalemia' },
        { letter: 'C', text: 'Estenosis uretral isquémica precoz' },
        { letter: 'D', text: 'Necrosis tubular aguda anúrica irreversible' },
        { letter: 'E', text: 'Hematuria ex vacuo masiva con shock hipovolémico' },
      ],
      correct: 'B',
      explanation: 'Tras la descompresión de una obstrucción severa y prolongada, sobre todo con más de 1.000 mL, puede aparecer el síndrome de diuresis postobstructiva: pérdida del gradiente medular y excreción de la urea retenida, con diuresis masiva, deshidratación e hipokalemia. La hematuria ex vacuo con shock es un mito.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Un hombre de sesenta y nueve años con retención aguda de orina de doce horas. Lo sondan con éxito y salen mil cuatrocientos mililitros de orina clara, con alivio inmediato del dolor.',
        question: '¿Qué complicación debes vigilar con más atención en las primeras veinticuatro horas?',
        options: 'Las opciones: reflejo vasovagal con paro; diuresis postobstructiva con deshidratación e hipokalemia; estenosis uretral precoz; necrosis tubular irreversible; o hematuria ex vacuo con shock. Piénsalo.',
        answer: 'Es la B. Con más de mil mililitros al descomprimir, el riñón puede orinar masivamente y deshidratar al paciente. La E es el mito clásico: la hematuria ex vacuo no produce shock, y por eso ya no se clampea la sonda.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: retención aguda de orina',
      cards: [
        { title: 'Reconocer y descomprimir', tag: 'Urgencia', kind: 'key', items: [
          { t: 'Dolor hipogástrico y globo vesical', d: 'Causa frecuente: HPB descompensada',
            say: 'Cerremos con las reglas de oro. Dolor hipogástrico y un globo vesical palpable es una retención aguda, y en el adulto mayor suele ser una hiperplasia prostática descompensada por un fármaco.' },
          { t: 'Sin trauma: sonda Foley primero', d: 'Alfabloqueador después',
            say: 'Sin signos de trauma, la primera maniobra es la sonda Foley. El alfabloqueador se agrega después del episodio agudo.' },
        ] },
        { title: 'Trampas', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Uretrorragia o pelvis rota: sin sonda', d: 'Cistostomía y uretrocistografía',
            say: 'Uretrorragia, hematoma perineal o fractura de pelvis: la sonda está contraindicada, se hace cistostomía suprapúbica y se estudia con uretrocistografía retrógrada.' },
          { t: 'Descompresión continua y vigilada', d: 'Más de 1.000 mL: diuresis y potasio',
            say: 'Se descomprime en forma continua, sin clampear. Y si salen más de mil mililitros, se vigilan la diuresis y el potasio. Si te llevas una sola idea de hoy: antes de pasar una sonda, busca señales de trauma uretral. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Retención aguda de orina: cómo descomprimir',
    root: N('start', 'Dolor hipogástrico y globo vesical', 'Retención aguda de orina',
      'Un paciente con dolor en el hipogastrio, sin poder orinar, y con un globo vesical palpable. Antes de sondar, mira si hay señales de lesión de la uretra.',
      ['Sin trauma uretral', N('do', 'Sonda Foley 16 a 18 French', 'Descompresión continua',
        'Si no hay trauma, se pasa una sonda Foley de dieciséis a dieciocho French, con lidocaína en jalea, y se infla el balón solo después de ver orina.',
        ['Pasa la sonda', N('ok', 'Descomprimir y vigilar', 'Más de 1.000 mL: diuresis y potasio',
          'Si pasa, se descomprime de forma continua. Si salen más de mil mililitros, se vigilan la diuresis y el potasio por el riesgo de diuresis postobstructiva, y se deriva a urología.')],
        ['No pasa o sangra', N('refer', 'Cistostomía suprapúbica', 'Por punción',
          'Si la sonda no pasa, o aparece sangrado, se hace una cistostomía suprapúbica por punción.')],
      )],
      ['Uretrorragia, hematoma perineal o pelvis rota', N('alert', 'No pasar sonda', 'Cistostomía suprapúbica',
        'Si hay uretrorragia, hematoma perineal o fractura de pelvis, la sonda está contraindicada. Se descomprime con cistostomía suprapúbica y la uretra se estudia después con una uretrocistografía retrógrada.')],
    ),
  },
};
