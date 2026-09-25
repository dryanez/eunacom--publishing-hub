// Clase 2.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-07',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué aislamiento pide cada germen y cuándo se saca el catéter',
      say: 'Bienvenidos. En las clases anteriores vimos profilaxis fuera del hospital. Hoy entramos al hospital: las infecciones asociadas a la atención de salud, que son un indicador directo de calidad asistencial. El examen pregunta dos cosas prácticas, una y otra vez. Qué tipo de aislamiento corresponde a cada germen, y qué hacer frente a una infección del catéter venoso central. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Precauciones de aislamiento',
      title: 'Estándar para todos, específicas según la transmisión',
      cards: [
        { title: 'Precauciones estándar', tag: 'Todo paciente', kind: 'normal', items: [
          { t: 'Higiene de manos', d: 'Antes y después de cada contacto',
            say: 'Partamos por la base. Todo paciente hospitalizado, tenga lo que tenga, recibe precauciones estándar. La más importante es la higiene de manos, con alcohol gel o con agua y jabón, antes y después de tocar al paciente.' },
          { t: 'EPP según riesgo y cortopunzantes', d: 'Salpicaduras y manejo seguro',
            say: 'Además, equipo de protección personal según el riesgo de salpicadura, y manejo seguro de los cortopunzantes. Sobre esa base se agregan precauciones específicas, y lo que las decide es cómo se transmite el germen.' },
        ] },
        { title: 'Aislamiento de contacto', tag: 'Bata + guantes', kind: 'key', items: [
          { t: 'Bata y guantes al entrar', d: 'Individual o cohorte de la misma bacteria',
            say: 'Si el germen se transmite por las manos y las superficies, el aislamiento es de contacto: bata limpia, no estéril, y guantes antes de entrar a la habitación. Se usa pieza individual o en cohorte con pacientes que tengan la misma bacteria.' },
          { t: 'Multirresistentes y otros', d: 'SAMR, BLEE, VRE, rotavirus, sarna, impétigo',
            say: 'Aquí van los multirresistentes: estafilococo aureus resistente a meticilina, las bacterias productoras de betalactamasas de espectro extendido y el enterococo resistente a vancomicina. También el rotavirus, la sarna noruega y el impétigo.' },
          { t: 'C. difficile: agua y jabón', d: 'El alcohol no destruye las esporas',
            say: 'Y el Clostridioides difficile, con un detalle que se pregunta mucho. El lavado de manos es obligatorio con agua y jabón, porque el alcohol gel no destruye las esporas. Si ves alcohol gel en una alternativa sobre difficile, descártala.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gotitas versus aéreo',
      title: 'El tamaño de la partícula decide la mascarilla',
      nodes: [
        { id: 'res', col: 0, row: 1, k: 'cause', t: 'Germen respiratorio', s: 'Tos, estornudo, habla' },
        { id: 'got', col: 1, row: 0, k: 'mech', t: 'Gotitas > 5 micrones', s: 'Caen a menos de 1 metro' },
        { id: 'aer', col: 1, row: 2, k: 'mech', t: 'Núcleos < 5 micrones', s: 'Flotan en el aire' },
        { id: 'mq', col: 2, row: 0, k: 'good', t: 'Mascarilla quirúrgica', s: 'Camas separadas > 1 metro' },
        { id: 'n95', col: 2, row: 2, k: 'alert', t: 'N95 + presión negativa', s: 'Pieza individual, puerta cerrada' },
        { id: 'gge', col: 3, row: 0, k: 'effect', t: 'Meningococo, influenza', s: 'Coqueluche, parotiditis, rubéola, adenovirus' },
        { id: 'age', col: 3, row: 2, k: 'risk', t: 'TBC bacilífera', s: 'Sarampión, varicela, zóster diseminado' },
      ],
      edges: [
        { from: 'res', to: 'got', label: 'grandes' },
        { from: 'res', to: 'aer', label: 'pequeñas' },
        { from: 'got', to: 'mq' },
        { from: 'aer', to: 'n95' },
        { from: 'mq', to: 'gge' },
        { from: 'aer', to: 'age' },
      ],
      steps: [
        { show: ['res'], note: 'Dos formas de viajar por el aire',
          say: 'Ahora, los gérmenes respiratorios. Aquí está la diferencia que más se pregunta del tema, y se entiende con física simple: todo depende del tamaño de la partícula que sale al toser o hablar.' },
        { show: ['got', 'mq'], note: 'Gotitas: pesan y caen cerca',
          say: 'Las gotitas grandes, de más de cinco micrones, pesan y caen a menos de un metro. Por eso basta una mascarilla quirúrgica al entrar, y las camas pueden compartir sala si están separadas por más de un metro.' },
        { show: ['gge'], note: 'Gotitas: meningococo y compañía',
          say: 'Por gotitas van el meningococo, la influenza, el adenovirus, el coqueluche, la parotiditis y la rubéola. En el meningococo, el aislamiento se mantiene hasta cumplir veinticuatro horas de antibiótico efectivo.' },
        { show: ['aer', 'n95'], note: 'Aéreo: flotan por horas',
          say: 'Los núcleos de gotitas, de menos de cinco micrones, en cambio, flotan en el aire. Una mascarilla quirúrgica no sirve. Se necesita mascarilla de alta eficiencia N noventa y cinco, y habitación individual con presión negativa, con seis a doce recambios de aire por hora y la puerta siempre cerrada.' },
        { show: ['age'], note: 'Solo tres: TBC, sarampión y varicela',
          say: 'Y la lista del aislamiento aéreo es corta, apréndetela de memoria: tuberculosis pulmonar bacilífera activa, sarampión, y varicela o herpes zóster diseminado. Fíjate en la trampa: meningococo y tuberculosis son ambos respiratorios, pero uno usa mascarilla quirúrgica y el otro N noventa y cinco.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Catéter venoso central',
      title: 'Bacteriemia por catéter: cómo entra y cómo se confirma',
      nodes: [
        { id: 'ext', col: 0, row: 0, k: 'cause', t: 'Vía extraluminal', s: 'Piel del sitio · precoz, < 10 días' },
        { id: 'int', col: 0, row: 2, k: 'cause', t: 'Vía intraluminal', s: 'Conector e infusiones · > 10 días' },
        { id: 'bac', col: 1, row: 1, k: 'mech', t: 'Bacteriemia por CVC', s: 'S. epidermidis, S. aureus, BGN, Candida' },
        { id: 'hem', col: 2, row: 1, k: 'q', t: 'Hemocultivos pareados', s: 'Periférico + cada lumen del CVC' },
        { id: 'dtp', col: 3, row: 0, k: 'good', t: 'CVC positivo > 2 h antes', s: 'Mismo germen en ambos' },
        { id: 'rat', col: 3, row: 2, k: 'good', t: 'Cuantitativo CVC/periférico ≥ 3:1', s: 'Criterio alternativo' },
      ],
      edges: [
        { from: 'ext', to: 'bac' },
        { from: 'int', to: 'bac' },
        { from: 'bac', to: 'hem' },
        { from: 'hem', to: 'dtp', label: 'tiempo' },
        { from: 'hem', to: 'rat', label: 'recuento' },
      ],
      steps: [
        { show: ['ext'], note: 'Precoz: la bacteria viene de la piel',
          say: 'Pasemos al catéter venoso central. Las bacterias llegan a la sangre por dos caminos. En los primeros diez días, migran desde la piel del sitio de inserción por fuera del catéter: es la vía extraluminal.' },
        { show: ['int'], note: 'Tardía: la contaminación viene por dentro',
          say: 'Después de los diez días predomina la vía intraluminal: se contaminan el conector y las soluciones que se infunden, y los gérmenes entran por dentro del catéter.' },
        { show: ['bac'], note: 'Los gérmenes de la piel mandan',
          say: 'Como el origen es sobre todo la piel, el germen más frecuente es el Staphylococcus epidermidis, un coagulasa negativo, en cuarenta a cincuenta por ciento de los casos. Le siguen el Staphylococcus aureus, las enterobacterias y la Candida.' },
        { show: ['hem'], note: 'Siempre pareados',
          say: 'El diagnóstico es microbiológico, y la clave es que los hemocultivos son pareados: se toman al mismo tiempo uno periférico y uno a través de cada lumen del catéter.' },
        { show: ['dtp'], note: 'Diferencia de tiempo de positividad',
          say: '¿Por qué pareados? Porque si el catéter es la fuente, tiene muchas más bacterias, y su frasco se vuelve positivo primero. El criterio es el mismo germen en ambos, con el frasco del catéter positivo más de dos horas antes que el periférico.' },
        { show: ['rat'], note: 'O más bacterias en el catéter',
          say: 'El criterio alternativo es un cultivo cuantitativo, con una proporción entre catéter y periférico de tres a uno o más. Es la misma idea: hay más bacterias donde está el foco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antibióticos y cuándo se retira el catéter',
      cards: [
        { title: 'Tratamiento empírico', tag: 'Cubrir estafilococos', kind: 'pharma', items: [
          { t: 'Vancomicina EV', d: 'Cubre SAMR y coagulasa negativo',
            say: 'El tratamiento empírico se construye con los gérmenes que acabamos de ver. La base es vancomicina endovenosa, para cubrir el estafilococo aureus resistente a meticilina y el coagulasa negativo.' },
          { t: '+ BGN si séptico o neutropénico', d: 'Cefepime, piperacilina-tazobactam o amikacina',
            say: 'Si el paciente está séptico o neutropénico, se agrega cobertura para bacilos gramnegativos: cefepime, piperacilina con tazobactam o amikacina.' },
        ] },
        { title: 'Retiro inmediato del CVC', tag: 'Criterios mandatorios', kind: 'alert', items: [
          { t: 'Shock séptico', d: 'O inestabilidad hemodinámica severa',
            say: 'Y ahora lo que más se pregunta: cuándo el catéter se saca de inmediato. Primero, el shock séptico o la inestabilidad hemodinámica severa.' },
          { t: 'Túnel infectado o pus en el sitio', d: 'Eritema o pus franco',
            say: 'Segundo, la infección del túnel subcutáneo, o eritema y pus franco en el sitio de inserción.' },
          { t: 'Complicaciones metastásicas', d: 'Endocarditis, tromboflebitis, émbolos sépticos',
            say: 'Tercero, las complicaciones metastásicas: endocarditis, tromboflebitis séptica supurada o embolias sépticas pulmonares.' },
          { t: 'S. aureus, Candida, Pseudomonas', d: 'O multirresistentes',
            say: 'Cuarto, y el más preguntado, los gérmenes de alto riesgo: Staphylococcus aureus, Candida, Pseudomonas aeruginosa o multirresistentes. Aquí el catéter sale siempre, sin excepción.' },
          { t: 'Bacteriemia o fiebre a las 48–72 h', d: 'Pese a antibiótico adecuado',
            say: 'Y quinto, la bacteriemia o la fiebre que persisten a las cuarenta y ocho a setenta y dos horas de un antibiótico adecuado. Si el tratamiento no funciona, es porque el foco sigue adentro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Staphylococcus aureus',
      title: 'Por qué el aureus obliga a buscar endocarditis',
      cards: [
        { title: 'Coagulasa negativo', tag: 'Menos agresivo', kind: 'normal', items: [
          { t: 'A veces se intenta salvar', d: 'Sellado del catéter en casos seleccionados',
            say: 'Compara dos gérmenes. Con el estafilococo coagulasa negativo, en casos seleccionados se puede intentar conservar el catéter con la técnica de sellado.' },
        ] },
        { title: 'S. aureus', tag: 'Siembra a distancia', kind: 'alert', items: [
          { t: 'Retiro + vancomicina', d: 'Ajustada a niveles de valle',
            say: 'Con el Staphylococcus aureus, no. Tiene una altísima tendencia a sembrar a distancia. Por eso se retira el catéter y se da vancomicina endovenosa, ajustada a niveles plasmáticos de valle.' },
          { t: 'Ecocardiograma obligatorio', d: 'Transtorácico o transesofágico',
            say: 'Y siempre se pide un ecocardiograma, transtorácico o transesofágico, para descartar endocarditis. Otras siembras son la espondilodiscitis y los abscesos esplénicos.' },
        ] },
        { title: 'Candida', tag: 'Biofilm', kind: 'key', items: [
          { t: 'Retiro + antifúngico sistémico', d: 'Equinocandina o fluconazol',
            say: 'La Candida forma un biofilm masivo dentro y fuera del catéter. Se retira siempre, y se da un antifúngico sistémico, equinocandina o fluconazol.' },
          { t: 'Fondo de ojo', d: 'Descartar endoftalmitis',
            say: 'Y el equivalente del ecocardiograma en la candidemia es el fondo de ojo, para descartar una endoftalmitis candidiásica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos la parte del catéter en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué aislamiento corresponde a cada paciente',
      head: ['Aislamiento', 'Medida obligatoria', 'Habitación', 'Patógenos clásicos'],
      rows: [
        { cells: ['Contacto', 'Guantes + bata al entrar', 'Individual o cohorte', 'C. difficile, SAMR, VRE, BLEE, sarna'],
          say: 'Repasemos con la tabla completa. Contacto: guantes y bata al entrar, pieza individual o cohorte. Difficile, estafilococo resistente a meticilina, enterococo resistente a vancomicina, BLEE y sarna.' },
        { cells: ['Gotitas', 'Mascarilla quirúrgica', 'Camas separadas > 1 m', 'Meningococo, influenza, coqueluche, parotiditis'],
          say: 'Gotitas: mascarilla quirúrgica y camas separadas por más de un metro. Meningococo, influenza, coqueluche y parotiditis.' },
        { cells: ['Aéreo', 'N95 / FFP2 con sello', 'Presión negativa, puerta cerrada', 'TBC bacilífera, sarampión, varicela'],
          say: 'Aéreo: mascarilla N noventa y cinco con buen sello, presión negativa y puerta cerrada. Tuberculosis bacilífera, sarampión y varicela. La trampa es poner al meningococo aquí.' },
        { cells: ['Protector (inverso)', 'Mascarilla + bata limpia, sin flores', 'Presión positiva, flujo laminar', 'Neutropenia < 500, trasplante de médula'],
          say: 'Y un cuarto tipo que funciona al revés: el aislamiento protector, o inverso. Aquí se protege al paciente del ambiente, por eso la presión es positiva, con flujo laminar, y no se permiten flores. Es para la neutropenia severa, con recuento absoluto bajo quinientos, y el trasplante de médula.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años en UCI por pancreatitis aguda grave, con CVC subclavio derecho desde hace 12 días. Presenta bruscamente fiebre de 39 °C con calofríos y taquicardia. Sitio de inserción limpio, sin eritema ni secreción. Hemocultivos pareados: a las 14 horas crece Staphylococcus aureus meticilino-resistente en ambos frascos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener el CVC, iniciar vancomicina y repetir hemocultivos en 72 horas' },
        { letter: 'B', text: 'Recambiar el CVC sobre guía en el mismo sitio e iniciar cefazolina' },
        { letter: 'C', text: 'Retirar el CVC, iniciar vancomicina EV y solicitar ecocardiograma' },
        { letter: 'D', text: 'Sellado del catéter con vancomicina sin antibiótico sistémico' },
        { letter: 'E', text: 'Retirar el CVC y observar sin antibióticos, ya que el foco fue removido' },
      ],
      correct: 'C',
      explanation: 'Bacteriemia por CVC por S. aureus: retiro obligatorio del catéter aunque el sitio se vea limpio, vancomicina EV ajustada a niveles de valle (es SAMR) y ecocardiograma transtorácico o transesofágico para descartar endocarditis.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años en la unidad de cuidados intensivos por una pancreatitis grave, con un catéter venoso central subclavio desde hace doce días. Hace fiebre de treinta y nueve grados con calofríos. El sitio de inserción está limpio. Los hemocultivos pareados muestran Staphylococcus aureus resistente a meticilina en ambos frascos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: mantener el catéter con vancomicina; recambiarlo sobre guía con cefazolina; retirarlo, vancomicina y ecocardiograma; sellar el catéter sin antibiótico sistémico; o retirarlo y observar sin antibióticos. Piénsalo.',
        answer: 'Es la C. El germen es aureus, así que el catéter sale siempre, aunque el sitio se vea limpio: ese es el distractor de la A. Se da vancomicina porque es resistente a meticilina, y se pide ecocardiograma por su tendencia a sembrar el endocardio. Recambiar sobre guía deja el problema en el mismo lugar, y la cefazolina no cubre este germen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 107',
      stem: 'Respecto al DIEP (Departamento de Infecciones y Epidemiología del Paciente) en hospitales chilenos, ¿cuál es su función principal?',
      question: 'Seleccione la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Vigilar, prevenir y controlar las infecciones asociadas a la atención de salud (IAAS)' },
        { letter: 'B', text: 'Gestionar los recursos humanos del hospital' },
        { letter: 'C', text: 'Supervisar la farmacia hospitalaria' },
        { letter: 'D', text: 'Coordinar las licencias médicas' },
        { letter: 'E', text: 'Auditar los estados financieros del hospital' },
      ],
      correct: 'A',
      explanation: 'El DIEP (o comité de IAAS) de los hospitales chilenos tiene como función primordial la vigilancia epidemiológica, la prevención y el control de las infecciones asociadas a la atención de salud.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Es de salud pública, y pregunta por el DIEP, el departamento de infecciones y epidemiología del paciente de los hospitales chilenos.',
        question: '¿Cuál es su función principal?',
        options: 'Las opciones son: vigilar, prevenir y controlar las infecciones asociadas a la atención de salud; gestionar los recursos humanos; supervisar la farmacia; coordinar las licencias médicas; o auditar las finanzas. Piénsalo.',
        answer: 'Es la A. El DIEP, o comité de infecciones asociadas a la atención de salud, existe para vigilar, prevenir y controlar justamente lo que vimos hoy. Las demás son funciones administrativas del hospital, que no tienen relación con las infecciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de las siguientes enfermedades infecciosas transmisibles requiere de forma estricta que el paciente sea hospitalizado en una habitación individual con presión negativa y que el personal de salud utilice mascarilla N95?',
      question: 'Seleccione la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Meningitis aguda por Neisseria meningitidis' },
        { letter: 'B', text: 'Tuberculosis pulmonar con baciloscopía positiva' },
        { letter: 'C', text: 'Colitis pseudomembranosa por Clostridioides difficile' },
        { letter: 'D', text: 'Coqueluche por Bordetella pertussis' },
        { letter: 'E', text: 'Infección urinaria por Klebsiella pneumoniae productora de BLEE' },
      ],
      correct: 'B',
      explanation: 'La TBC bacilífera se transmite por núcleos de gotitas < 5 micrones que quedan suspendidos en el aire: aislamiento aéreo con N95 y presión negativa. Meningococo y coqueluche usan gotitas (mascarilla quirúrgica); C. difficile y BLEE, contacto.',
      say: {
        stem: 'Y como los aislamientos no tienen preguntas reales fechadas en el banco, cerramos con un caso representativo. ¿Qué enfermedad exige habitación individual con presión negativa y mascarilla N noventa y cinco para el personal?',
        question: 'Elige la alternativa correcta.',
        options: 'Las opciones son: meningitis meningocócica; tuberculosis pulmonar con baciloscopía positiva; colitis por Clostridioides difficile; coqueluche; o infección urinaria por Klebsiella BLEE. Piénsalo.',
        answer: 'Es la B, la tuberculosis bacilífera, porque sus partículas flotan en el aire por horas. La A es el distractor más tentador: el meningococo también es respiratorio y grave, pero viaja en gotitas grandes y basta la mascarilla quirúrgica. El coqueluche también es gotitas, y el difficile y la Klebsiella BLEE son contacto.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Aislamientos', tag: 'Según la transmisión', kind: 'key', items: [
          { t: 'Aéreo: TBC, sarampión, varicela', d: 'N95 + presión negativa',
            say: 'Cerremos con las reglas de oro. Aislamiento aéreo, con N noventa y cinco y presión negativa, solo para tres: tuberculosis bacilífera, sarampión y varicela.' },
          { t: 'Meningococo: gotitas', d: 'Mascarilla quirúrgica hasta 24 h de antibiótico',
            say: 'El meningococo es gotitas: mascarilla quirúrgica, hasta cumplir veinticuatro horas de antibiótico.' },
          { t: 'C. difficile: contacto + agua y jabón', d: 'El alcohol no mata las esporas',
            say: 'Y el difficile es contacto, con lavado de manos con agua y jabón, nunca solo alcohol gel.' },
        ] },
        { title: 'Catéter venoso central', tag: 'Decide el germen', kind: 'alert', items: [
          { t: 'Hemocultivos pareados', d: 'CVC positivo > 2 h antes que el periférico',
            say: 'En el catéter, el diagnóstico se hace con hemocultivos pareados, y el del catéter se positiviza más de dos horas antes.' },
          { t: 'S. aureus o Candida: retirar siempre', d: 'Aureus: ecocardiograma · Candida: fondo de ojo',
            say: 'Y con aureus o Candida, el catéter se retira siempre. Si te llevas una sola idea de hoy: el aislamiento lo decide cómo viaja el germen, y el retiro del catéter lo decide qué germen es. La próxima clase vemos intoxicación alimentaria, botulismo y cólera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre en paciente con catéter venoso central',
    root: N('start', 'Fiebre en portador de CVC', 'Sospecha de bacteriemia por catéter',
      'Paciente hospitalizado con un catéter venoso central que hace fiebre. Tienes que pensar en una bacteriemia asociada al catéter.',
      ['', N('do', 'Hemocultivos pareados', 'Periférico + cada lumen del CVC',
        'Lo primero es tomar hemocultivos pareados, periférico y de cada lumen, e iniciar vancomicina, sumando cobertura gramnegativa si está séptico o neutropénico.',
        ['', N('q', '¿Hay criterio de retiro inmediato?', 'Clínica, sitio o germen',
          'Luego la pregunta clave: ¿hay algún criterio de retiro inmediato?',
          ['Shock, túnel o pus', N('alert', 'Retirar el CVC', 'Por la gravedad o el sitio',
            'Si hay shock séptico, infección del túnel o pus en el sitio de inserción, el catéter sale de inmediato.')],
          ['S. aureus', N('alert', 'Retirar + ecocardiograma', 'Vancomicina ajustada a niveles',
            'Si crece Staphylococcus aureus, se retira el catéter y se pide ecocardiograma para descartar endocarditis.')],
          ['Candida', N('alert', 'Retirar + fondo de ojo', 'Antifúngico sistémico',
            'Si crece Candida, se retira el catéter, antifúngico sistémico y fondo de ojo para descartar endoftalmitis.')],
          ['Ninguno', N('q', '¿Persiste a las 48–72 h?', 'Con antibiótico adecuado',
            'Si no hay ningún criterio, por ejemplo un coagulasa negativo en un paciente estable, se sigue el tratamiento y se reevalúa. ¿Persisten la fiebre o la bacteriemia a las cuarenta y ocho a setenta y dos horas?',
            ['SÍ', N('refer', 'Retirar el CVC', 'El foco sigue adentro',
              'Si persisten, el foco sigue en el catéter y hay que retirarlo.')],
            ['NO', N('ok', 'Completar tratamiento', 'Sellado en casos seleccionados',
              'Si responde, se completa el tratamiento, y en casos seleccionados de coagulasa negativo se puede intentar conservar el catéter con sellado.')])])])]),
  },
};
