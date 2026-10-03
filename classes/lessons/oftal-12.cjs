// Clase 15.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-12).
// El banco real EUNACOM (código 6.02.2.006) sí tiene preguntas donde la hemorragia vítrea,
// complicación de la retinopatía diabética proliferativa, es la respuesta correcta; se usan aquí.
// Para el tamizaje GES no hay pregunta real con esa respuesta exacta, así que ese punto se cubre
// con una pregunta propia del libro, etiquetada "Caso representativo" según LESSON_STANDARD.md.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-12',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La causa número uno de ceguera en edad laboral, y el tamizaje que la detecta antes de que el paciente note nada',
      say: 'Bienvenidos. Hoy vemos la retinopatía diabética, la primera causa de ceguera irreversible en personas en edad laboral, en Chile y en el mundo. Es un tema denso, con harto que memorizar, pero con una lógica muy clara: todo depende de si hay o no neovasos, y el tamizaje existe justamente para encontrarla antes de que el paciente sienta algo. Vamos completos, porque el examen la pregunta mucho.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la hiperglicemia crónica a los neovasos',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Hiperglicemia crónica', s: 'Vía de los polioles, glicación, estrés oxidativo' },
        { id: 'per', col: 1, row: 1, k: 'mech', t: 'Pérdida de pericitos', s: 'Debilita la pared del capilar retiniano' },
        { id: 'per2', col: 2, row: 1, k: 'effect', t: 'Microaneurismas y permeabilidad', s: 'Primera lesión visible al fondo de ojo' },
        { id: 'isq', col: 3, row: 1, k: 'risk', t: 'Oclusión e isquemia retiniana', s: 'Hipoxia del tejido' },
        { id: 'vegf', col: 4, row: 0, k: 'trap', t: 'Sobreexpresión de VEGF', s: 'Factor de crecimiento del endotelio vascular' },
        { id: 'neo', col: 4, row: 2, k: 'alert', t: 'Neovascularización', s: 'Vasos frágiles y anómalos' },
      ],
      edges: [
        { from: 'hip', to: 'per' }, { from: 'per', to: 'per2' }, { from: 'per2', to: 'isq' },
        { from: 'isq', to: 'vegf' }, { from: 'vegf', to: 'neo' },
      ],
      steps: [
        { show: ['hip', 'per'], note: 'El mecanismo central que explica todo lo demás',
          say: 'Empecemos por el mecanismo, porque de ahí se deduce toda la clasificación. La hiperglicemia crónica daña el endotilio de tres formas: la vía de los polioles, la glicación no enzimática de proteínas y el estrés oxidativo. Y el resultado central es la pérdida selectiva de los pericitos de los capilares retinianos, que son las células que sostienen y dan resistencia a la pared vascular.' },
        { show: ['per2'], note: 'La primera lesión que el médico general puede ver',
          say: 'Al perder ese sostén, el capilar se debilita, aumenta la permeabilidad, y aparecen los microaneurismas, que son la primera lesión clínicamente visible al examinar el fondo de ojo.' },
        { show: ['isq', 'vegf', 'neo'], note: 'La hipoxia es la que enciende el interruptor',
          say: 'Con el tiempo, esos capilares se ocluyen y la retina queda isquémica. Y esa hipoxia tisular es la que enciende el interruptor: la retina sobreexpresa el factor de crecimiento del endotelio vascular, el VEGF, que estimula la proliferación de vasos nuevos, frágiles y anómalos. Guarda esta idea, porque la presencia o ausencia de estos neovasos es lo que define toda la clasificación que viene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'No proliferativa versus proliferativa: la línea la traza el neovaso',
      cards: [
        { title: 'No proliferativa (RDNP)', tag: 'Ausencia de neovasos', kind: 'criteria', items: [
          { t: 'Microaneurismas y microhemorragias', d: 'En punto y mancha',
            say: 'En la retinopatía no proliferativa, sin neovasos, se ven microaneurismas, microhemorragias en punto y mancha, y exudados duros, que son depósitos de lípidos por la extravasación crónica.' },
          { t: 'Exudados algodonosos', d: 'Microinfartos de la capa de fibras nerviosas',
            say: 'También aparecen exudados algodonosos, que son microinfartos por oclusión de arteriolas pequeñas. Y hay un grado severo, la regla cuatro dos uno: hemorragias en los cuatro cuadrantes, arrosariamiento venoso en dos cuadrantes, o anomalías microvasculares en un cuadrante. La mitad de estos pacientes progresa a proliferativa en un año.' },
        ] },
        { title: 'Proliferativa (RDP)', tag: 'La define la presencia de neovasos', kind: 'alert', items: [
          { t: 'Neovasos en papila o retina', d: 'El criterio diagnóstico es solo este',
            say: 'La retinopatía proliferativa se define, formalmente, por un solo criterio: la presencia de neovasos, ya sea en la papila óptica o en cualquier sector de la retina. Nada más define esta categoría.' },
          { t: 'Hemorragia vítrea o desprendimiento traccional', d: 'Los neovasos son frágiles y se rompen',
            say: 'Esos neovasos crecen hacia la cavidad vítrea, y son extremadamente frágiles: se rompen y sangran, dando una hemorragia vítrea de aparición súbita e indolora, o forman tejido fibroso que tracciona la retina y produce un desprendimiento de retina traccional.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Edema macular diabético',
      title: 'La causa número uno de baja visual, y puede aparecer en cualquier etapa',
      nodes: [
        { id: 'rot', col: 0, row: 1, k: 'cause', t: 'Rotura de la barrera hematorretiniana', s: 'Permeabilidad de los capilares perifoveales' },
        { id: 'liq', col: 1, row: 1, k: 'mech', t: 'Líquido se acumula en la mácula', s: 'Engrosamiento de la fóvea' },
        { id: 'cual', col: 2, row: 0, k: 'trap', t: 'Puede ocurrir en cualquier etapa', s: 'Tanto en RDNP leve como en RDP avanzada' },
        { id: 'baja', col: 2, row: 2, k: 'risk', t: 'Causa número uno de baja visual', s: 'Más frecuente que la hemorragia vítrea' },
        { id: 'oct', col: 3, row: 1, k: 'q', t: 'Tomografía de coherencia óptica', s: 'El examen que confirma el diagnóstico' },
        { id: 'avegf', col: 4, row: 1, k: 'good', t: 'Anti-VEGF intravítreo', s: 'Ranibizumab o aflibercept' },
      ],
      edges: [
        { from: 'rot', to: 'liq' }, { from: 'liq', to: 'cual' }, { from: 'liq', to: 'baja' },
        { from: 'liq', to: 'oct' }, { from: 'oct', to: 'avegf' },
      ],
      steps: [
        { show: ['rot', 'liq'], note: 'El engrosamiento de la fóvea es lo que roba la visión fina',
          say: 'Y ahora la complicación que más se pregunta de toda la clase: el edema macular diabético. Se produce cuando se rompe la barrera hematorretiniana interna, y el líquido se acumula justo en el centro, en la mácula, engrosando la fóvea.' },
        { show: ['cual'], note: 'No hace falta esperar a la fase proliferativa',
          say: 'Y aquí está la regla de oro: el edema macular puede aparecer en cualquier etapa de la enfermedad, tanto en una retinopatía no proliferativa leve como en una proliferativa avanzada. No hace falta esperar a que aparezcan neovasos.' },
        { show: ['baja'], note: 'Más frecuente que la hemorragia vítrea o el desprendimiento',
          say: 'Y por eso es la causa más frecuente de disminución de la agudeza visual en los pacientes diabéticos, más frecuente incluso que la hemorragia vítrea o el desprendimiento traccional.' },
        { show: ['oct', 'avegf'], note: 'El diagnóstico se ve, el tratamiento se inyecta',
          say: 'Se diagnostica con precisión mediante tomografía de coherencia óptica macular, y el tratamiento de elección son las inyecciones intravítreas periódicas de fármacos anti-VEGF, como ranibizumab o aflibercept, que reducen la permeabilidad capilar y mejoran la visión.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje y garantía GES número veintitrés',
      title: 'El calendario que se pregunta siempre, y el láser que trata la proliferativa',
      cards: [
        { title: 'Calendario de tamizaje', tag: 'DM2 versus DM1', kind: 'key', items: [
          { t: 'Diabetes tipo 2: al momento del diagnóstico', d: 'Y luego anualmente, de por vida',
            say: 'El calendario de tamizaje es de los datos más preguntados de toda la especialidad. En la diabetes tipo dos, el fondo de ojo con pupila dilatada, o la retinografía, se hace al momento del diagnóstico, y luego una vez al año, de por vida. Y la razón es que la diabetes tipo dos puede llevar años evolucionando en silencio antes del diagnóstico.' },
          { t: 'Diabetes tipo 1: a los 5 años del debut', d: 'Porque el debut agudo sí es identificable',
            say: 'En la diabetes tipo uno, en cambio, el tamizaje se inicia a los cinco años del diagnóstico, porque ahí sí el debut es agudo e identificable, y toma esos años en desarrollarse la retinopatía.' },
        ] },
        { title: 'Panfotocoagulación láser', tag: 'Tratamiento de la RDP', kind: 'pharma', items: [
          { t: 'Destruye la retina periférica isquémica', d: 'Para frenar la producción de VEGF',
            say: 'El tratamiento de la retinopatía proliferativa es la panfotocoagulación retiniana con láser: destruye la retina periférica isquémica, que es la que produce el VEGF, y así se apaga el estímulo y los neovasos regresan.' },
        ] },
        { title: 'Garantía GES número veintitrés', tag: 'Plazos legales', kind: 'alert', items: [
          { t: 'Láser dentro de sesenta días', d: 'Anti-VEGF y vitrectomía también garantizados',
            say: 'Y la garantía GES número veintitrés cubre el tamizaje, la confirmación diagnóstica, la fotocoagulación láser dentro de sesenta días, la terapia anti-VEGF, y la vitrectomía en centros de especialidad. Todo paciente con retinopatía diabética debe notificarse.' },
          { t: 'Vitrectomía si la hemorragia no se reabsorbe', d: 'Limpia el eje visual y reaplica la retina',
            say: 'Y si ya hubo una hemorragia vítrea que no se reabsorbe sola, o si se sospecha un desprendimiento traccional asociado, el paso siguiente es la vitrectomía pars plana quirúrgica, para limpiar el eje visual y reaplicar la retina.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'No proliferativa contra proliferativa: la diferencia que decide la conducta',
      head: ['Característica', 'No proliferativa (RDNP)', 'Proliferativa (RDP)'],
      rows: [
        { cells: ['Criterio definitorio', 'Ausencia total de neovasos', 'Presencia de neovasos, en papila o retina'],
          say: 'Repasemos el contraste. La no proliferativa se define por la ausencia de neovasos; la proliferativa, por su presencia, en cualquier parte de la retina.' },
        { cells: ['Riesgo mayor', 'Edema macular diabético', 'Hemorragia vítrea y desprendimiento traccional'],
          say: 'El riesgo mayor de la no proliferativa es el edema macular; el de la proliferativa, la hemorragia vítrea y el desprendimiento traccional.' },
        { cells: ['Tratamiento de elección', 'Control metabólico, más anti-VEGF si hay edema', 'Panfotocoagulación láser urgente'],
          say: 'El tratamiento de la no proliferativa es el control estricto de la glicemia, con anti-VEGF si hay edema; el de la proliferativa es la panfotocoagulación urgente.' },
        { cells: ['Seguimiento', 'Anual si es leve; cada cuatro a seis meses si es severa', 'Cada uno a tres meses, por especialista'],
          say: 'Y el seguimiento: anual si es leve, más seguido si es severa, y en la proliferativa, cada uno a tres meses, siempre con el especialista.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Estadificación',
      title: 'Los cinco escalones de la enfermedad, y qué hacer en cada uno',
      head: ['Estadio', 'Hallazgo al fondo de ojo', 'Riesgo de progresión a un año', 'Conducta'],
      rows: [
        { cells: ['Sin retinopatía', 'Fondo de ojo normal', 'Mínimo', 'Fondo de ojo anual en atención primaria'],
          say: 'Repasemos los cinco escalones de la enfermedad. Sin retinopatía, el fondo de ojo es normal, el riesgo es mínimo, y basta el control anual en atención primaria.' },
        { cells: ['No proliferativa leve', 'Solo microaneurismas aislados', 'Bajo', 'Control oftalmológico anual'],
          say: 'La no proliferativa leve solo tiene microaneurismas aislados, con riesgo bajo, y control oftalmológico anual.' },
        { cells: ['No proliferativa moderada', 'Microaneurismas, microhemorragias y exudados', 'Moderado', 'Control cada seis meses'],
          say: 'La moderada suma microhemorragias y exudados, con riesgo moderado, y el control se acorta a cada seis meses.' },
        { cells: ['No proliferativa severa', 'Regla cuatro dos uno cumplida, sin neovasos', 'Muy alto, la mitad progresa', 'Derivación prioritaria; láser temprano'],
          say: 'La severa cumple la regla cuatro dos uno, todavía sin neovasos, pero la mitad progresa a proliferativa en un año, así que la derivación es prioritaria, con láser temprano.' },
        { cells: ['Proliferativa avanzada', 'Neovasos visibles o hemorragia vítrea', 'Pérdida visual severa inminente', 'Panfotocoagulación láser inmediata'],
          say: 'Y la proliferativa avanzada ya tiene neovasos visibles o hemorragia vítrea, con pérdida visual severa inminente: panfotocoagulación láser de inmediato, sin esperar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, con diabetes mellitus tipo 2 de 10 años de evolución y mal control metabólico, acude a control en atención primaria asintomático, refiriendo que ve perfectamente. Se realiza fondo de ojo bajo dilatación pupilar, evidenciándose múltiples microaneurismas, exudados duros en el polo posterior y neovasos finos que crecen sobre el disco de la papila óptica derecha.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar al paciente: si no tiene síntomas, no hay retinopatía significativa' },
        { letter: 'B', text: 'Indicar solo optimizar el control glucémico y repetir el fondo de ojo en un año' },
        { letter: 'C', text: 'Notificar GES 23 y derivar de forma prioritaria para panfotocoagulación láser' },
        { letter: 'D', text: 'Iniciar corticoides tópicos y controlar en tres meses' },
        { letter: 'E', text: 'Solicitar únicamente una angiografía y esperar el resultado sin derivar' },
      ],
      correct: 'C',
      explanation: 'La presencia de neovasos sobre la papila óptica en un paciente diabético define la retinopatía diabética proliferativa, aunque esté asintomático. La conducta es notificar la garantía GES 23 y derivar de forma prioritaria a panfotocoagulación láser, por el riesgo inminente de hemorragia vítrea o desprendimiento traccional.',
      say: {
        stem: 'Vamos al caso. Un hombre de cincuenta y ocho años, diabético tipo dos desde hace diez años, con mal control metabólico, acude a un control en atención primaria completamente asintomático: dice que ve perfecto. Se le hace un fondo de ojo con dilatación pupilar, y se encuentran múltiples microaneurismas, exudados duros, y neovasos finos que crecen sobre la papila óptica del ojo derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizarlo porque sin síntomas no hay retinopatía significativa, solo optimizar el control glucémico y repetir el fondo de ojo en un año, notificar la garantía GES veintitrés y derivar de forma prioritaria para panfotocoagulación láser, iniciar corticoides tópicos, o solo pedir una angiografía sin derivar. Piénsalo.',
        answer: 'Es la C. La palabra que decide todo es neovasos: eso define, por sí solo, una retinopatía diabética proliferativa, sin importar que el paciente no sienta nada. La opción A es la trampa central del tema, porque esta enfermedad avanza en silencio. Con neovasos ya formados, el riesgo de hemorragia vítrea o desprendimiento traccional es inminente, así que la conducta es notificar el GES y derivar de forma prioritaria a panfotocoagulación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un paciente de 52 años es diagnosticado de diabetes mellitus tipo 2 en un chequeo preventivo de salud. Se encuentra completamente asintomático desde el punto de vista visual.',
      question: '¿Cuál es la indicación correcta respecto al tamizaje oftalmológico según las guías del MINSAL y la garantía GES número veintitrés?',
      options: [
        { letter: 'A', text: 'Realizar fondo de ojo con pupila dilatada al momento del diagnóstico y luego anualmente' },
        { letter: 'B', text: 'Esperar cinco años desde el diagnóstico para realizar el primer fondo de ojo' },
        { letter: 'C', text: 'Solicitar fondo de ojo únicamente si la hemoglobina glicosilada supera el ocho por ciento' },
        { letter: 'D', text: 'Realizar fondo de ojo solo cuando el paciente refiera disminución de la agudeza visual' },
        { letter: 'E', text: 'Derivar a cirugía preventiva de cataratas bilateral de inmediato' },
      ],
      correct: 'A',
      explanation: 'En la diabetes tipo 2, la enfermedad suele tener un curso subclínico de varios años antes del diagnóstico formal, así que hasta un 20 por ciento de los pacientes ya tiene algún grado de retinopatía al debut. La norma MINSAL y el GES 23 exigen fondo de ojo con pupila dilatada al momento del diagnóstico, y luego una vez al año de por vida; en la DM1, el tamizaje se inicia a los 5 años del debut.',
      say: {
        stem: 'Una pregunta representativa del banco de la especialidad, sin fecha del examen real, sobre el punto administrativo que más se pregunta. Un paciente de cincuenta y dos años es diagnosticado de diabetes tipo dos en un chequeo preventivo, y está completamente asintomático desde el punto de vista visual.',
        question: '¿Cuál es la indicación correcta respecto al tamizaje oftalmológico, según las guías del MINSAL y la garantía GES veintitrés?',
        options: 'Las opciones: fondo de ojo al momento del diagnóstico y luego anualmente, esperar cinco años para el primer fondo de ojo, pedirlo solo si la hemoglobina glicosilada supera el ocho por ciento, pedirlo solo si hay síntomas visuales, o derivar de inmediato a cirugía de cataratas. Piénsalo.',
        answer: 'Es la A. La diabetes tipo dos suele llevar años de evolución silenciosa antes del diagnóstico formal, así que hasta uno de cada cinco pacientes ya tiene algún grado de retinopatía cuando recién se entera de que es diabético. Por eso el fondo de ojo va al momento del diagnóstico, y luego cada año, de por vida. La opción B es la trampa: esperar cinco años es la regla de la diabetes tipo uno, no de la tipo dos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 157',
      stem: 'Una paciente de 56 años, diabética de larga data y mal controlada, con nefropatía diabética en etapa 4, presenta pérdida súbita e indolora de la visión del ojo izquierdo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma' },
        { letter: 'B', text: 'Edema macular' },
        { letter: 'C', text: 'Uveítis' },
        { letter: 'D', text: 'Trombosis de la vena central de la retina' },
        { letter: 'E', text: 'Hemorragia vítrea' },
      ],
      correct: 'E',
      explanation: 'El antecedente de diabetes de larga data con daño renal avanzado sugiere una microangiopatía sistémica severa, compatible con una retinopatía diabética proliferativa ya complicada con hemorragia vítrea, la causa más frecuente de pérdida súbita e indolora de la visión en el diabético de larga data.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Una paciente de cincuenta y seis años, diabética de larga data y mal controlada, con nefropatía diabética avanzada, en etapa cuatro, presenta pérdida súbita e indolora de la visión del ojo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glaucoma, edema macular, uveítis, trombosis de la vena central de la retina, o hemorragia vítrea. Piénsalo.',
        answer: 'Es la E, hemorragia vítrea. El antecedente clave es el daño renal avanzado: cuando la microangiopatía diabética ya dañó el riñón de forma severa, es altamente probable que también haya una retinopatía proliferativa avanzada, con neovasos frágiles. La pérdida súbita e indolora es justamente lo que esperas cuando uno de esos neovasos se rompe y sangra hacia el vítreo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 177',
      stem: 'Un paciente de 68 años, diabético e hipertenso, presenta disminución brusca de la visión del ojo izquierdo, que solo le permite diferenciar los movimientos de una mano, sin poder identificar letras. La exploración externa es normal y el rojo pupilar es negativo en ese ojo. En sus exámenes destaca una hemoglobina glicosilada de nueve coma dos por ciento.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neuritis óptica isquémica' },
        { letter: 'B', text: 'Desprendimiento de retina' },
        { letter: 'C', text: 'Hemorragia vítrea' },
        { letter: 'D', text: 'Trombosis de la arteria central de la retina' },
        { letter: 'E', text: 'Edema macular' },
      ],
      correct: 'C',
      explanation: 'La pérdida súbita de visión reducida a percepción de movimientos de mano, con pérdida del reflejo rojo pupilar y una hemoglobina glicosilada muy elevada, es una hemorragia vítrea. El edema macular tarda días en instalarse y no borra el rojo pupilar; la oclusión arterial da mancha rojo cereza, no pérdida del rojo pupilar.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil diecisiete, que insiste en el mismo punto con otro nivel de detalle. Un paciente de sesenta y ocho años, diabético e hipertenso, presenta caída brusca de la visión del ojo izquierdo, tan severa que solo distingue el movimiento de una mano. La exploración externa es normal, el reflejo rojo pupilar está negativo, y su hemoglobina glicosilada está muy elevada, en nueve coma dos por ciento.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neuritis óptica isquémica, desprendimiento de retina, hemorragia vítrea, trombosis de la arteria central de la retina, o edema macular. Piénsalo.',
        answer: 'Es la C, hemorragia vítrea. Fíjate en el detalle que la distingue de las otras opciones: la pérdida del reflejo rojo pupilar. Ni el edema macular ni la trombosis de la arteria central borran ese reflejo, y el edema, además, tarda varios días en instalarse. Con un diabético tan mal controlado y el rojo pupilar perdido, el sangrado hacia el vítreo por neovasos rotos junta todas las piezas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La línea que separa las dos formas', tag: 'Neovasos', kind: 'key', items: [
          { t: 'Sin neovasos: no proliferativa', d: 'Con neovasos: proliferativa, sin excepción',
            say: 'Cerremos con las reglas de oro. La presencia de neovasos, en cualquier parte, define la retinopatía proliferativa. Sin neovasos, es no proliferativa.' },
        ] },
        { title: 'La causa número uno de ceguera', tag: 'Edema macular diabético', kind: 'alert', items: [
          { t: 'Puede aparecer en cualquier etapa', d: 'No esperes a la fase proliferativa',
            say: 'El edema macular es la causa más frecuente de baja visual en el diabético, y puede aparecer en cualquier etapa de la enfermedad, incluso en la fase leve.' },
        ] },
        { title: 'El tamizaje', tag: 'El dato administrativo que más se pregunta', kind: 'pharma', items: [
          { t: 'DM2: al diagnóstico y luego anual', d: 'DM1: a los cinco años del debut',
            say: 'Y si te llevas una sola idea de hoy: en la diabetes tipo dos, el fondo de ojo se pide al momento del diagnóstico y luego cada año; en la tipo uno, a los cinco años del debut. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente diabético: sigue el tamizaje hasta el neovaso',
    root: (() => {
      const laser = N('ok', 'Panfotocoagulación láser dentro de sesenta días', 'Garantía GES número veintitrés',
        'Notifica la garantía GES número veintitrés y deriva de forma prioritaria a panfotocoagulación retiniana con láser, dentro de los sesenta días garantizados.');
      const rdp = N('alert', 'Retinopatía diabética proliferativa', 'Riesgo de hemorragia vítrea o desprendimiento traccional',
        'Confirma retinopatía proliferativa: el riesgo inminente es la hemorragia vítrea y el desprendimiento de retina traccional.',
        ['', laser]);
      const controlNp = N('ok', 'Control metabólico y seguimiento oftalmológico', 'Según la severidad de la no proliferativa',
        'Optimiza el control de la hemoglobina glicosilada y la presión arterial, y programa el seguimiento oftalmológico según la severidad.');
      const rdnp = N('do', 'Retinopatía diabética no proliferativa', 'Clasifica en leve, moderada o severa',
        'Clasifica la severidad con la regla cuatro dos uno, y decide el intervalo de control.',
        ['', controlNp]);
      const antivegf = N('ok', 'Anti-VEGF intravítreo', 'Ranibizumab o aflibercept, en menos de treinta días',
        'Indica anti-VEGF intravítreo, sin importar si la retinopatía es no proliferativa o proliferativa, porque el edema puede aparecer en cualquier etapa.');
      const edemaQ = N('q', '¿Hay edema macular en la tomografía de coherencia óptica?', 'Puede coexistir con cualquier etapa',
        'Solicita una tomografía de coherencia óptica macular para buscar edema, independiente de la etapa que encuentres.',
        ['sí, hay edema macular', antivegf]);
      const neovasosQ = N('q', '¿Hay neovasos en la papila o en la retina?', 'Ese es el único criterio que importa',
        'Busca neovasos en el fondo de ojo, en la papila o en cualquier sector de la retina.',
        ['sí, hay neovasos', rdp],
        ['no hay neovasos', rdnp]);
      return N('start', 'Paciente con diabetes mellitus', 'DM2 al diagnóstico, DM1 a los cinco años',
        'Realiza fondo de ojo con pupila dilatada según el calendario de tamizaje GES.',
        ['', neovasosQ],
        ['en paralelo', edemaQ]);
    })(),
  },
};
