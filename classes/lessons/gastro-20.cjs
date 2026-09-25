// Clase 5.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-20',
  tier: 3,
  pathway: {
    title: 'Dolor abdominal desproporcionado al examen',
    root: N('start', 'Dolor abdominal intensísimo', 'Examen abdominal que casi no duele',
      'Partimos del paciente con un dolor abdominal intensísimo y un abdomen que casi no duele al palparlo. Esa disociación ya te obliga a pensar en isquemia intestinal.',
      ['', N('q', '¿Qué contexto y qué inicio?', 'FA · hipercoagulabilidad · hipotensión previa',
        'La siguiente pregunta es el contexto y la forma de inicio, porque cada una de las tres entidades tiene su terreno propio.',
        ['FA + inicio súbito', N('alert', 'Heparina + angio-TAC', 'Embolia de la arteria mesentérica superior',
          'Fibrilación auricular y dolor súbito con disociación clínica: embolia de la arteria mesentérica superior. Se anticoagula con heparina ante la sola sospecha y se confirma con angio-TAC o angiografía.',
          ['', N('refer', 'Revascularizar', 'Embolectomía o trombólisis · resecar lo necrótico',
            'Luego se revasculariza, con embolectomía o trombólisis, y se reseca el intestino necrótico si lo hay. La ventana para salvar el intestino es de horas.')])],
        ['Hipercoagulable + días', N('do', 'TAC con contraste', 'Trombo en la vena mesentérica',
          'Estado de hipercoagulabilidad, cirrosis o cirugía abdominal reciente, con dolor de días y signos peritoneales precoces: trombosis venosa mesentérica. El examen es el TAC con contraste, que muestra el trombo en la vena.',
          ['', N('ok', 'Anticoagulación', 'Cirugía solo si necrosis o perforación',
            'Como es una trombosis venosa, el tratamiento es anticoagular. La cirugía queda solo para la necrosis o la perforación.')])],
        ['Hipotensión + hematoquecia', N('do', 'TAC de abdomen', 'Engrosamiento segmentario del colon',
          'Adulto mayor con ateroesclerosis o un episodio de hipotensión, con dolor en el hemiabdomen izquierdo y hematoquecia: colitis isquémica. El TAC muestra un engrosamiento segmentario del colon.',
          ['', N('ok', 'Manejo médico', 'Reposo intestinal, hidratación, antibióticos',
            'La mayoría es transitoria y se resuelve con reposo intestinal, hidratación y antibióticos. Cirugía solo si hay necrosis, perforación o estenosis.')])])]),
  },
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando el dolor es enorme y el abdomen casi no duele',
      say: 'Bienvenidos. Hoy vemos la isquemia mesentérica y el abdomen agudo de origen vascular. Es un tema corto, pero letal, y el examen lo pregunta con una frase que se repite: dolor intensísimo con un abdomen que casi no duele al palparlo. Si aprendes a reconocer esa frase, y sabes qué hacer en los primeros minutos, ya tienes la mayoría de las preguntas resueltas. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Embolia mesentérica: la disociación clínica',
      nodes: [
        { id: 'fa', col: 0, row: 1, k: 'cause', t: 'Fibrilación auricular', s: 'U otra fuente cardioembólica' },
        { id: 'emb', col: 1, row: 1, k: 'mech', t: 'Émbolo en la mesentérica superior', s: 'El intestino se queda sin sangre' },
        { id: 'dol', col: 2, row: 0, k: 'effect', t: 'Dolor súbito e intensísimo', s: 'Puede haber vómitos y diarrea' },
        { id: 'bla', col: 2, row: 2, k: 'trap', t: 'Abdomen blando', s: 'Sin defensa ni Blumberg al inicio' },
        { id: 'nec', col: 3, row: 1, k: 'risk', t: 'Necrosis intestinal', s: 'Hematoquecia y peritonitis tardía' },
      ],
      edges: [
        { from: 'fa', to: 'emb' }, { from: 'emb', to: 'dol' }, { from: 'emb', to: 'bla' },
        { from: 'dol', to: 'nec', label: 'horas' }, { from: 'bla', to: 'nec', label: 'horas' },
      ],
      steps: [
        { show: ['fa'], note: 'El contexto que abre la sospecha',
          say: 'Empecemos por la entidad que más se pregunta: la embolia de la arteria mesentérica superior. El contexto casi siempre es el mismo, un paciente con fibrilación auricular, o con otra fuente de émbolos desde el corazón.' },
        { show: ['emb'], note: 'Un coágulo del corazón tapa la arteria del intestino',
          say: 'Un coágulo que se formó en la aurícula se suelta, viaja por la aorta y se aloja en la arteria mesentérica superior. Desde ese momento, el intestino que depende de ella se queda sin sangre. Por eso, lo primero que buscas en el enunciado es la arritmia, y sobre todo si el paciente no está anticoagulado.' },
        { show: ['dol'], note: 'Inicio brusco, dolor desproporcionado',
          say: 'La isquemia duele muchísimo, y duele de golpe. El paciente describe un dolor súbito e intensísimo, difuso. Al inicio puede tener vómitos y alguna deposición diarreica, lo que a veces confunde con una gastroenteritis.' },
        { show: ['bla'], note: 'Disociación: mucho dolor, poco hallazgo',
          say: 'Y aquí está la clave de todo el tema. Al palpar, el abdomen está blando, sin defensa ni signo de Blumberg. ¿Por qué? Porque en las primeras horas el problema está dentro del intestino, y el peritoneo todavía no se ha enterado. Eso es la disociación clínica: mucho dolor, poco hallazgo.' },
        { show: ['nec'], note: 'Cuando aparece la peritonitis, ya es tarde',
          say: 'Y si nadie hace nada, en pocas horas el intestino se necrosa. Recién ahí aparece la hematoquecia y, más tarde, la peritonitis. Fíjate en la consecuencia práctica: si esperas los signos peritoneales para actuar, llegaste tarde. La ventana para salvar el intestino es de horas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y tratamiento',
      title: 'Embolia: se anticoagula ante la sospecha',
      cards: [
        { title: 'Examen de elección', tag: 'Ver el émbolo', kind: 'key', items: [
          { t: 'Angio-TAC mesentérico', d: 'Muestra el defecto de llene en la arteria',
            say: '¿Cómo lo confirmamos? El examen de elección es el angio-TAC, que muestra el defecto de llene en la arteria mesentérica superior. Tiene que ser con contraste: un TAC sin contraste o una radiografía simple no ven el émbolo y te hacen perder horas que el intestino no tiene.' },
          { t: 'Lactato elevado', d: 'Pista de tejido sin oxígeno',
            say: 'Antes de la imagen, un dato de laboratorio que el examen usa como pista: el lactato elevado. Te dice que hay tejido sin oxígeno. Pero ojo: la sospecha la hace la clínica, no el laboratorio. Si el cuadro calza, no te quedes esperando un número para actuar.' },
          { t: 'Angiografía', d: 'Diagnostica y además puede tratar',
            say: 'La alternativa es la angiografía formal, que tiene una ventaja: además de diagnosticar, puede ser terapéutica, porque por el mismo catéter se puede tratar el émbolo.' },
        ] },
        { title: 'Tratamiento', tag: 'En orden', kind: 'alert', items: [
          { t: 'Heparina ante la sospecha', d: 'No esperar la confirmación',
            say: 'Ahora, el tratamiento, y aquí está el punto que más se pregunta. Se anticoagula con heparina ante la sola sospecha. No esperas el angio-TAC para partir: si el cuadro calza, la heparina va primero, para que el coágulo no siga creciendo.' },
          { t: 'Revascularizar', d: 'Embolectomía o trombólisis',
            say: 'Después se revasculariza, es decir, se devuelve el flujo a la arteria, con una embolectomía o con trombólisis.' },
          { t: 'Resecar el intestino necrótico', d: 'Si ya hay necrosis: laparotomía',
            say: 'Y si el intestino ya se necrosó, se opera para resecar el segmento muerto. Mientras antes actúes, menos intestino pierdes.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Segunda entidad',
      title: 'Trombosis venosa mesentérica',
      nodes: [
        { id: 'hip', col: 0, row: 0, k: 'cause', t: 'Hipercoagulabilidad', s: 'Estados protrombóticos' },
        { id: 'cir', col: 0, row: 1, k: 'cause', t: 'Cirrosis', s: 'Otro terreno clásico' },
        { id: 'qx', col: 0, row: 2, k: 'cause', t: 'Cirugía abdominal reciente', s: 'Otro gatillo clásico' },
        { id: 'tro', col: 1, row: 1, k: 'mech', t: 'Trombo en la vena mesentérica', s: 'Es una trombosis venosa' },
        { id: 'cli', col: 2, row: 1, k: 'effect', t: 'Dolor subagudo, de días', s: 'Signos peritoneales más precoces' },
        { id: 'tac', col: 3, row: 0, k: 'good', t: 'TAC con contraste', s: 'Visualiza el trombo' },
        { id: 'aco', col: 3, row: 2, k: 'good', t: 'Anticoagulación', s: 'Cirugía solo si necrosis o perforación' },
      ],
      edges: [
        { from: 'hip', to: 'tro' }, { from: 'cir', to: 'tro' }, { from: 'qx', to: 'tro' },
        { from: 'tro', to: 'cli' }, { from: 'cli', to: 'tac' }, { from: 'tac', to: 'aco' },
      ],
      steps: [
        { show: ['hip', 'cir', 'qx'], note: 'El terreno: sangre que coagula de más o que va lenta',
          say: 'La segunda entidad es la trombosis venosa mesentérica, y cambia el terreno. Ya no es un paciente con fibrilación auricular, sino alguien con un estado de hipercoagulabilidad, con cirrosis, o con una cirugía abdominal reciente.' },
        { show: ['tro'], note: 'No viene del corazón: se forma en la vena',
          say: 'Aquí el coágulo no viene del corazón. Se forma en el lugar, dentro de la vena mesentérica. Y esa diferencia te va a ordenar el tratamiento, así que guárdala.' },
        { show: ['cli'], note: 'Días, no minutos. Peritoneo precoz',
          say: 'La clínica es distinta a la embolia en dos cosas. Primero, el dolor es subagudo: se instala en días, no de golpe. Y segundo, los signos peritoneales aparecen más precozmente. O sea, aquí la disociación clínica no es la regla. Ese contraste, súbito sin peritoneo versus días con peritoneo, es exactamente lo que el examen te pide distinguir.' },
        { show: ['tac'], note: 'El trombo se ve dentro de la vena',
          say: 'El examen es el TAC con contraste, que visualiza el trombo dentro de la vena mesentérica. Es el mismo principio que en la embolia: sin contraste, el vaso no se ve.' },
        { show: ['aco'], note: 'Se trata como lo que es: una trombosis venosa',
          say: '¿Y el tratamiento? Piensa en lo que es: en esencia, una trombosis venosa, como una trombosis de las piernas pero en el abdomen. Entonces se anticoagula, igual que en la embolia, aunque por un motivo distinto: aquí la anticoagulación no es un puente a la revascularización, es el tratamiento en sí. La cirugía queda solo para cuando hay necrosis o perforación.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tercera entidad',
      title: 'Colitis isquémica: las zonas frontera',
      nodes: [
        { id: 'ate', col: 0, row: 0, k: 'cause', t: 'Ateroesclerosis', s: 'Adulto mayor' },
        { id: 'hpo', col: 0, row: 2, k: 'cause', t: 'Episodio de hipotensión', s: 'Por ejemplo, tras una hemorragia' },
        { id: 'baj', col: 1, row: 1, k: 'mech', t: 'Bajo flujo al colon', s: 'No hay un émbolo' },
        { id: 'zon', col: 2, row: 1, k: 'mech', t: 'Zonas frontera', s: 'Ángulo esplénico y rectosigmoides' },
        { id: 'cli', col: 3, row: 1, k: 'effect', t: 'Dolor cólico izquierdo', s: 'Más hematoquecia' },
      ],
      edges: [
        { from: 'ate', to: 'baj' }, { from: 'hpo', to: 'baj' }, { from: 'baj', to: 'zon' }, { from: 'zon', to: 'cli' },
      ],
      steps: [
        { show: ['ate', 'hpo'], note: 'La forma más frecuente de isquemia intestinal',
          say: 'La tercera entidad es la colitis isquémica, y ojo, porque es la forma más frecuente de isquemia intestinal. El paciente típico es un adulto mayor con ateroesclerosis, o alguien que acaba de pasar por un episodio de hipotensión.' },
        { show: ['baj'], note: 'No se tapa una arteria: baja el flujo',
          say: 'Fíjate que aquí no hay un émbolo que tape una arteria. Lo que pasa es que el flujo global hacia el colon disminuye, por vasos enfermos o por una presión baja.' },
        { show: ['zon'], note: 'Donde terminan dos territorios arteriales',
          say: 'Y cuando baja el flujo, sufren primero las zonas frontera: los sectores del colon donde termina un territorio arterial y empieza otro, y que por eso reciben la sangre más justa. Son dos: el ángulo esplénico y la unión rectosigmoidea.' },
        { show: ['cli'], note: 'Ambas zonas quedan a la izquierda',
          say: 'Ahora el mecanismo te explica la clínica. Como las dos zonas frontera están en el lado izquierdo, el paciente tiene dolor cólico en el hemiabdomen izquierdo, y como la mucosa del colon se daña, elimina sangre roja: hematoquecia. Dolor izquierdo con sangre en un adulto mayor que estuvo hipotenso: colitis isquémica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colitis isquémica',
      title: 'Diagnóstico y manejo: casi siempre médico',
      cards: [
        { title: 'Diagnóstico', tag: 'Imagen primero', kind: 'key', items: [
          { t: 'TAC de abdomen', d: 'Engrosamiento segmentario del colon',
            say: '¿Cómo se confirma? Con un TAC de abdomen, que muestra un engrosamiento segmentario de la pared del colon, justamente en esas zonas frontera.' },
          { t: 'Colonoscopía', d: 'Confirma en casos seleccionados',
            say: 'La colonoscopía puede confirmar el diagnóstico, pero solo en casos seleccionados. No es el primer examen.' },
          { t: 'Hematoquecia en el adulto mayor', d: 'Puente a la hemorragia digestiva baja',
            say: 'Y fíjate en un puente con la próxima clase. Un adulto mayor con sangre roja por el recto también te obliga a pensar en hemorragia digestiva baja. Lo que inclina hacia la colitis isquémica es el dolor cólico izquierdo y el antecedente de hipotensión o ateroesclerosis.' },
        ] },
        { title: 'Tratamiento', tag: 'La mayoría es transitoria', kind: 'normal', items: [
          { t: 'Manejo médico', d: 'Reposo intestinal, hidratación, antibióticos',
            say: 'Y aquí viene la buena noticia: a diferencia de la embolia, la mayoría de las colitis isquémicas son transitorias y se resuelven con manejo médico. Reposo intestinal, hidratación y antibióticos.' },
        ] },
        { title: 'Cirugía', tag: 'Solo si se complica', kind: 'alert', items: [
          { t: 'Necrosis, perforación o estenosis', d: 'Las tres indicaciones quirúrgicas',
            say: 'La cirugía queda para las complicaciones: necrosis, perforación o, más adelante, una estenosis del segmento dañado. Fíjate que aparece un tercer motivo que no vimos en las otras dos entidades: la estenosis, porque el colon que cicatriza puede quedar estrecho.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo común',
      title: 'Lo que comparten las tres',
      cards: [
        { title: 'Soporte', tag: 'Siempre', kind: 'key', items: [
          { t: 'Hidratación endovenosa', d: 'En las tres entidades',
            say: 'Ahora, lo que las tres comparten. Primero, hidratación endovenosa. Es un intestino con mala perfusión: lo último que quieres es que además el paciente esté seco.' },
          { t: 'Corregir la causa', d: 'Fuente embólica, hipercoagulabilidad, hipotensión',
            say: 'Y siempre corregir la causa: la fuente de émbolos, el estado de hipercoagulabilidad o la hipotensión que gatilló el cuadro.' },
        ] },
        { title: 'Antibióticos', tag: 'Translocación bacteriana', kind: 'pharma', items: [
          { t: 'Ceftriaxona + metronidazol', d: 'Por el riesgo de translocación',
            say: 'Segundo, antibióticos: ceftriaxona más metronidazol. ¿Por qué, si no es una infección? Porque la pared del intestino isquémico deja de ser una barrera, y las bacterias de la luz pasan a la sangre. Eso es la translocación bacteriana, y es lo que se previene.' },
        ] },
        { title: 'Cirugía', tag: 'Regla común', kind: 'alert', items: [
          { t: 'Solo si necrosis o perforación', d: 'Vale para las tres',
            say: 'Y tercero, la regla común para la cirugía: se opera solo si hay necrosis o perforación. Si te preguntan cuándo operar cualquiera de las tres, esa es la respuesta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Otros dolores desproporcionados',
      cards: [
        { title: 'Descartar con un examen', tag: 'Abdominales', kind: 'criteria', items: [
          { t: 'Pancreatitis aguda', d: 'Se descarta con la lipasa',
            say: 'La disociación clínica no es exclusiva de la isquemia, así que conviene tener a mano el diferencial. El primero es la pancreatitis aguda, que como vimos en su clase también puede doler mucho con poco hallazgo. La diferencia la hace la lipasa.' },
          { t: 'Aneurisma aórtico roto', d: 'Masa pulsátil, hipotensión, TAC',
            say: 'El segundo es el aneurisma aórtico roto. Aquí busca una masa pulsátil al palpar y un paciente hipotenso, y se confirma con TAC. Es el diferencial más grave de todos.' },
        ] },
        { title: 'Causas metabólicas', tag: 'No olvidar', kind: 'normal', items: [
          { t: 'Cetoacidosis diabética', d: 'Dolor abdominal con abdomen blando',
            say: 'Y hay causas que ni siquiera son abdominales. La cetoacidosis diabética también puede presentarse con dolor abdominal importante, y el que no la busca, no la encuentra.' },
          { t: 'Porfiria', d: 'Rara, pero clásica en el diferencial',
            say: 'Y la porfiria, que es rara, pero aparece en las listas de diferencial del dolor abdominal desproporcionado.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las tres entidades en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Abdomen agudo vascular: cómo distinguirlas',
      head: ['Entidad', 'Pista clínica', 'Examen y conducta'],
      rows: [
        { cells: ['Embolia mesentérica', 'FA + dolor súbito, peritoneo ausente al inicio', 'Angio-TAC · heparina ante la sospecha'],
          say: 'Repasemos en una tabla. Embolia mesentérica: fibrilación auricular, dolor súbito, y signos peritoneales ausentes al inicio. Angio-TAC, y heparina ante la sola sospecha.' },
        { cells: ['Trombosis venosa mesentérica', 'Hipercoagulable o cirrótico, dolor de días, peritoneo precoz', 'TAC con contraste · anticoagular'],
          say: 'Trombosis venosa mesentérica: hipercoagulable o cirrótico, dolor de días, y signos peritoneales precoces. TAC con contraste y anticoagulación.' },
        { cells: ['Colitis isquémica', 'Adulto mayor, hipotensión previa, dolor izquierdo + hematoquecia', 'TAC de abdomen · manejo médico'],
          say: 'Colitis isquémica: adulto mayor, hipotensión previa, dolor en el lado izquierdo con hematoquecia. TAC de abdomen, y casi siempre manejo médico. La trampa aquí es operar de entrada.' },
        { cells: ['Esperar el peritonismo en la embolia', 'Error clásico', 'Cuando aparece, el intestino ya se necrosó'],
          say: 'Y el error clásico de todo el tema: descartar una embolia porque el abdomen está blando, o esperar los signos peritoneales para actuar. Cuando aparecen, el intestino ya se necrosó.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 76 años con fibrilación auricular no anticoagulada. Dolor abdominal brusco hace 4 horas, 10/10, difuso, con 2 vómitos y una deposición diarreica. Abdomen blando, depresible, levemente sensible, sin defensa ni Blumberg. Taquicárdica, lactato elevado.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Analgesia y reevaluación seriada del abdomen hasta que aparezcan signos peritoneales' },
        { letter: 'B', text: 'Heparina endovenosa y angio-TAC mesentérico urgente' },
        { letter: 'C', text: 'Colonoscopía urgente' },
        { letter: 'D', text: 'Hidratación y manejo como gastroenteritis aguda' },
        { letter: 'E', text: 'TAC de abdomen sin contraste' },
      ],
      correct: 'B',
      explanation: 'FA no anticoagulada + dolor súbito intensísimo + abdomen blando (disociación clínica) + lactato alto: embolia de la arteria mesentérica superior. Se anticoagula con heparina ante la sospecha y se confirma con angio-TAC para revascularizar. Esperar el peritonismo es llegar con el intestino necrosado.',
      say: {
        stem: 'Vamos al caso. Mujer de setenta y seis años con fibrilación auricular no anticoagulada. Consulta por un dolor abdominal brusco hace cuatro horas, de intensidad diez de diez, difuso, con dos vómitos y una deposición diarreica. El abdomen está blando, depresible, apenas sensible, sin defensa ni Blumberg. Está taquicárdica, y el lactato está elevado.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las alternativas: analgesia y reevaluar hasta que aparezca peritonismo, heparina y angio-TAC urgente, colonoscopía urgente, manejarla como gastroenteritis, o un TAC sin contraste. Piénsalo.',
        answer: 'Es la B. El caso trae todo junto: fibrilación auricular sin anticoagular, un dolor enorme con un abdomen blando, y un lactato alto que te dice que hay tejido sufriendo. Es una embolia mesentérica hasta que se demuestre lo contrario: heparina ya, y angio-TAC para revascularizar. La trampa más tentadora es la A. Parece prudente, pero esperar el peritonismo es esperar la necrosis. Y la gastroenteritis es el disfraz que ponen los vómitos y la diarrea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 100',
      stem: 'Una paciente de 65 años, con antecedente de accidente vascular encefálico con compromiso faciobraquiocrural derecho hace dos años en tratamiento con aspirina, consulta por dolor abdominal difuso e intenso de inicio agudo. Al examen físico se encuentra en regulares condiciones, ritmo irregular, abdomen levemente doloroso a la palpación profunda, Blumberg negativo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Isquemia mesentérica' },
        { letter: 'B', text: 'Disección aórtica' },
        { letter: 'C', text: 'Úlcera perforada' },
        { letter: 'D', text: 'Diverticulitis aguda' },
        { letter: 'E', text: 'Trombosis mesentérica' },
      ],
      correct: 'A',
      explanation: 'El ritmo irregular delata la fibrilación auricular, la fuente del émbolo. El dolor es agudo y difuso, pero el abdomen está apenas doloroso y Blumberg es negativo: esa disociación clínica es la firma de la embolia de la arteria mesentérica superior. La trombosis mesentérica (E) da un cuadro más subagudo, de días, con peritoneo más precoz.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de sesenta y cinco años, con un accidente vascular encefálico hace dos años en tratamiento con aspirina, consulta por un dolor abdominal difuso e intenso, de inicio agudo. Al examen está en regulares condiciones, con ritmo irregular, y el abdomen apenas duele a la palpación profunda, con Blumberg negativo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: isquemia mesentérica, disección aórtica, úlcera perforada, diverticulitis aguda, o trombosis mesentérica. Piénsalo.',
        answer: 'Es la A, isquemia mesentérica, por embolia. El ritmo irregular es la fibrilación auricular escondida en el enunciado, la fuente del émbolo. Y fíjate en la frase clave: dolor intenso, pero abdomen apenas doloroso y Blumberg negativo. Esa es la disociación clínica de memoria. La trombosis mesentérica, la E, es la trampa, pero esa da un cuadro más lento, de días, no de inicio agudo como este.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 15',
      stem: 'Una mujer de 62 años acude al servicio de urgencia por dolor abdominal intenso, de dos horas de evolución, difuso, pero mayor en hemiabdomen superior. Además, presentó vómitos alimentarios, en varias oportunidades. El dolor inició tipo cólico, pero luego se hizo permanente. Al examen físico tiene IMC 32, temperatura 36,7 °C, frecuencia cardíaca 108x\', presión arterial 102/96 mmHg. Examen cardiopulmonar normal. El examen abdominal muestra cicatriz de cesárea Pfannenstiel, timpanismo y disminución de la matidez hepática a la percusión, con ruidos hidroaéreos muy disminuidos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal' },
        { letter: 'B', text: 'Perforación intestinal' },
        { letter: 'C', text: 'Vólvulo de sigmoides' },
        { letter: 'D', text: 'Trombosis de la vena mesentérica' },
        { letter: 'E', text: 'Embolia mesentérica' },
      ],
      correct: 'D',
      explanation: 'La cesárea reciente es un estado protrombótico y quirúrgico, el terreno típico de la trombosis venosa mesentérica, no de la embolia (que necesita una fuente cardíaca, ausente aquí). El dolor que empieza cólico y se hace permanente, en horas, encaja con la evolución subaguda que distingue a la trombosis de la embolia súbita.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Mujer de sesenta y dos años, con una cesárea reciente, consulta por un dolor abdominal intenso, de dos horas, difuso pero mayor en el hemiabdomen superior, con vómitos alimentarios. El dolor empezó tipo cólico y se hizo permanente. Está taquicárdica, con el abdomen timpánico y ruidos hidroaéreos muy disminuidos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: obstrucción intestinal, perforación intestinal, vólvulo de sigmoides, trombosis de la vena mesentérica, o embolia mesentérica. Piénsalo.',
        answer: 'Es la D, trombosis de la vena mesentérica. El distractor tentador es la embolia mesentérica, porque también es isquemia intestinal, pero a la embolia le falta la fuente: aquí no hay fibrilación auricular, y sí hay una cirugía reciente, que es justamente el terreno protrombótico de la trombosis venosa. El dolor que pasa de cólico a permanente en un par de horas también calza mejor con un cuadro que avanza más gradual que el de la embolia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 70 años con ateroesclerosis, tras un episodio de hipotensión por una hemorragia digestiva, presenta dolor cólico en el flanco izquierdo y elimina deposiciones con sangre roja. Abdomen sensible en el flanco izquierdo, sin peritonismo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Embolia de la arteria mesentérica superior' },
        { letter: 'B', text: 'Trombosis venosa mesentérica' },
        { letter: 'C', text: 'Colitis isquémica' },
        { letter: 'D', text: 'Diverticulitis aguda' },
        { letter: 'E', text: 'Enfermedad de Crohn' },
      ],
      correct: 'C',
      explanation: 'Dolor en el hemiabdomen izquierdo + hematoquecia en un adulto mayor ateroesclerótico, precipitado por hipotensión (bajo flujo): colitis isquémica de las zonas frontera. Suele ser transitoria y responde a manejo médico. La embolia da dolor más intenso y difuso, con disociación clínica, en contexto de FA.',
      say: {
        stem: 'Cerremos con un caso representativo del banco EUNACOM, para la tercera entidad. Hombre de setenta años con ateroesclerosis que, después de un episodio de hipotensión por una hemorragia digestiva, presenta dolor cólico en el flanco izquierdo y elimina deposiciones con sangre roja. El abdomen está sensible en el flanco izquierdo, sin peritonismo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: embolia mesentérica, trombosis venosa mesentérica, colitis isquémica, diverticulitis aguda, o enfermedad de Crohn. Piénsalo.',
        answer: 'Es la C, colitis isquémica. El enunciado arma el mecanismo: ateroesclerosis más hipotensión es bajo flujo, y el bajo flujo daña las zonas frontera, que están a la izquierda. La embolia tienta porque también es isquemia, pero aquí no hay fibrilación auricular, y el dolor sería difuso y brutal, con disociación. Y la diverticulitis, de la clase anterior, no la gatilla una hipotensión.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Embolia', tag: 'La que mata', kind: 'alert', items: [
          { t: 'FA + dolor súbito + abdomen blando', d: 'Disociación clínica = embolia',
            say: 'Cerremos con las reglas de oro. Fibrilación auricular, dolor súbito e intensísimo, y un abdomen blando: embolia mesentérica hasta que se demuestre lo contrario.' },
          { t: 'Heparina ante la sospecha', d: 'Angio-TAC y revascularizar',
            say: 'Heparina ante la sola sospecha, angio-TAC, y revascularizar. La ventana es de horas.' },
        ] },
        { title: 'Las otras dos', tag: 'Terreno distinto', kind: 'key', items: [
          { t: 'Trombosis venosa: días + peritoneo', d: 'TAC con contraste y anticoagular',
            say: 'La trombosis venosa: hipercoagulable, dolor de días y peritoneo precoz. TAC con contraste y anticoagulación. Aquí la heparina no es un puente: es el tratamiento.' },
          { t: 'Colitis isquémica: izquierda + sangre', d: 'Casi siempre manejo médico',
            say: 'La colitis isquémica: la más frecuente, dolor izquierdo con hematoquecia tras una hipotensión, y casi siempre se maneja sin cirugía.' },
        ] },
        { title: 'Para las tres', tag: 'Regla común', kind: 'pharma', items: [
          { t: 'Hidratación + ceftriaxona y metronidazol', d: 'Cirugía solo si necrosis o perforación',
            say: 'Y para las tres, hidratación y antibióticos, con cirugía solo si hay necrosis o perforación. Si te llevas una sola idea de hoy: un dolor enorme con un abdomen que casi no duele, en un paciente con fibrilación auricular, se anticoagula antes de que el peritoneo te dé la razón. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};
