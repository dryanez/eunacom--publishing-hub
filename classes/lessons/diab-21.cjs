// Clase 5.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La lesión más precoz, el neovaso que lo cambia todo y el ojo que pierde el rojo pupilar',
      say: 'Bienvenidos. Seguimos con las complicaciones microvasculares. En la clase anterior vimos cómo la diabetes daña el capilar del riñón; hoy vemos el mismo daño en la retina. La retinopatía diabética es la principal causa de ceguera irreversible en adultos en edad laboral, y en el examen se pregunta con tres ideas: cuál es la primera lesión, qué define a la forma proliferativa, y cómo reconocer la hemorragia vítrea.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del capilar dañado al neovaso',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Hiperglicemia crónica', s: 'Años de mal control' },
        { id: 'per', col: 1, row: 1, k: 'mech', t: 'Pérdida de pericitos', s: 'Cae la barrera hematorretiniana' },
        { id: 'mic', col: 2, row: 0, k: 'effect', t: 'Microaneurismas', s: 'La lesión más precoz' },
        { id: 'fug', col: 2, row: 1, k: 'effect', t: 'Fuga vascular', s: 'Exudados duros y hemorragias' },
        { id: 'isq', col: 2, row: 2, k: 'mech', t: 'Isquemia capilar', s: 'Exudados algodonosos' },
        { id: 'veg', col: 3, row: 2, k: 'mech', t: 'Retina isquémica libera VEGF', s: 'Factor de crecimiento vascular' },
        { id: 'neo', col: 4, row: 2, k: 'risk', t: 'Neovasos', s: 'Retinopatía proliferativa' },
      ],
      edges: [
        { from: 'hip', to: 'per' }, { from: 'per', to: 'mic', label: 'dilatación sacular' },
        { from: 'per', to: 'fug' }, { from: 'per', to: 'isq', label: 'cierre capilar' },
        { from: 'isq', to: 'veg' }, { from: 'veg', to: 'neo' },
      ],
      steps: [
        { show: ['hip', 'per'], note: 'El daño parte en la pared del capilar',
          say: 'Partamos por el mecanismo, porque ordena todo lo demás. La hiperglicemia sostenida daña a los pericitos, las células que envuelven y sostienen los capilares de la retina. Sin ellos, la pared se debilita y se pierde la barrera hematorretiniana.' },
        { show: ['mic'], note: 'Dilataciones saculares: los primeros puntos rojos',
          say: 'La pared debilitada se abomba en pequeñas dilataciones saculares. Al fondo de ojo se ven como puntos rojos de bordes netos, en el polo posterior, al lado temporal de la fóvea. Son los microaneurismas, y son la lesión más precoz que puedes ver. Eso se pregunta.' },
        { show: ['fug'], note: 'Un capilar que filtra deja lípidos y sangre',
          say: 'Un capilar sin barrera filtra. Salen lípidos y proteínas, que dejan los exudados duros, amarillentos y brillantes, y sale sangre, que deja las microhemorragias en punto o en llama.' },
        { show: ['isq'], note: 'Capilares cerrados: microinfartos',
          say: 'Además, muchos capilares se cierran. Esa isquemia produce microinfartos de la capa de fibras nerviosas, que se ven como manchas blancas y difusas: los exudados algodonosos o blandos.' },
        { show: ['veg', 'neo'], note: 'La retina isquémica pide vasos nuevos',
          say: 'Y aquí está el salto más importante. La retina isquémica libera el factor de crecimiento vascular endotelial, el VEGF, que estimula vasos nuevos. Pero esos neovasos son frágiles y sangran. Cuando aparecen, la retinopatía pasa a ser proliferativa. Guarda esta cadena, porque el tratamiento la ataca justo en este punto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: 'Una enfermedad silenciosa: se busca, no se espera',
      cards: [
        { title: 'Cuándo', tag: 'GES', kind: 'key', items: [
          { t: 'DM2: al momento del diagnóstico', d: 'Y luego una vez al año',
            say: 'La retinopatía no duele ni da síntomas hasta que ya es tarde. Por eso se busca activamente. En la diabetes tipo dos, el fondo de ojo se hace al momento mismo del diagnóstico, porque ese paciente pudo tener la enfermedad años sin saberlo, y luego una vez al año.' },
          { t: 'DM1: desde el 5.º año del debut', d: 'Luego control periódico',
            say: 'En la diabetes tipo uno, en cambio, el tamizaje parte a los cinco años del debut. La diferencia tiene lógica: en el tipo uno conoces el inicio exacto de la enfermedad.' },
        ] },
        { title: 'Cómo', tag: 'Dos caminos', kind: 'criteria', items: [
          { t: 'Fondo de ojo con pupila dilatada', d: 'Por oftalmólogo',
            say: '¿Y cómo se hace? El examen clásico es el fondo de ojo con dilatación pupilar farmacológica, hecho por el oftalmólogo.' },
          { t: 'Retinografía digital no midriática', d: 'En la atención primaria',
            say: 'O bien la retinografía con cámara digital no midriática, que se toma en la atención primaria. Ambas cumplen la garantía de acceso al tamizaje que da el GES.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'No proliferativa vs proliferativa: lo decide el neovaso',
      cards: [
        { title: 'No proliferativa', tag: 'RDNP', kind: 'normal', items: [
          { t: 'Microaneurismas y microhemorragias', d: 'En punto o en llama',
            say: 'Con el mecanismo en mente, la clasificación es fácil. La retinopatía no proliferativa es todo lo que ocurre antes del neovaso: microaneurismas y microhemorragias en punto o en llama.' },
          { t: 'Exudados duros y algodonosos', d: 'Duros: fuga · Algodonosos: isquemia',
            say: 'Y los dos tipos de exudados. Fíjate en la diferencia, que se confunde: el exudado duro es fuga de lípidos; el algodonoso es un microinfarto por isquemia.' },
          { t: 'Severa: regla 4-2-1', d: 'Hemorragias en 4 cuadrantes, venas arrosariadas en 2, IRMA en 1',
            say: 'La forma severa se reconoce con la regla cuatro, dos, uno: hemorragias severas en cuatro cuadrantes, arrosariamiento venoso en dos, o anomalías microvasculares intrarretinianas en uno. Es la antesala de la proliferativa.' },
        ] },
        { title: 'Proliferativa', tag: 'RDP', kind: 'alert', items: [
          { t: 'Neovasos en papila o retina', d: 'Su presencia la define',
            say: 'La retinopatía proliferativa tiene una sola definición: la presencia de neovasos, en el disco óptico o en la retina periférica. No importa cuántas hemorragias haya; si hay neovasos, es proliferativa, y si no los hay, no lo es.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'Qué hacen los neovasos: la pérdida visual aguda',
      nodes: [
        { id: 'neo', col: 0, row: 1, k: 'cause', t: 'Neovasos frágiles', s: 'Retinopatía proliferativa' },
        { id: 'hv', col: 2, row: 0, k: 'alert', t: 'Hemorragia vítrea', s: 'Pérdida súbita e indolora' },
        { id: 'roj', col: 3, row: 0, k: 'q', t: 'Rojo pupilar abolido', s: 'No se ve la retina' },
        { id: 'fib', col: 1, row: 2, k: 'mech', t: 'Fibrosis de los neovasos', s: 'Tracción sobre la retina' },
        { id: 'dr', col: 2, row: 2, k: 'risk', t: 'Desprendimiento traccional', s: 'De retina' },
        { id: 'gla', col: 2, row: 3, k: 'risk', t: 'Glaucoma neovascular', s: 'Rubeosis iridis' },
      ],
      edges: [
        { from: 'neo', to: 'hv', label: 'sangran' }, { from: 'hv', to: 'roj' },
        { from: 'neo', to: 'fib' }, { from: 'fib', to: 'dr' }, { from: 'neo', to: 'gla', label: 'en el iris' },
      ],
      steps: [
        { show: ['neo', 'hv'], note: 'El neovaso se rompe hacia el vítreo',
          say: 'Veamos por qué el neovaso es tan peligroso. Es un vaso frágil que crece hacia la cavidad vítrea. Cuando se rompe, la sangre llena el vítreo: es la hemorragia vítrea. El paciente pierde la visión de forma súbita e indolora, a veces precedida por una lluvia de manchas negras que se mueven.' },
        { show: ['roj'], note: 'La clave semiológica del examen',
          say: 'Y el signo que te da el diagnóstico en el examen: el rojo pupilar se pierde. La sangre en el vítreo no deja pasar la luz, y no puedes ver la retina. Diabético de larga data, pérdida visual brusca, sin dolor y sin rojo pupilar: hemorragia vítrea.' },
        { show: ['fib', 'dr'], note: 'El neovaso cicatriza y tira',
          say: 'Con el tiempo, los neovasos se fibrosan, y ese tejido cicatricial se contrae y tracciona la retina. El resultado es un desprendimiento de retina traccional.' },
        { show: ['gla'], note: 'Neovasos en el iris',
          say: 'Y si los neovasos crecen en el iris, la llamada rubeosis iridis, el resultado es un glaucoma neovascular. Tres complicaciones, un mismo culpable: el neovaso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Edema macular y tratamiento',
      title: 'Qué se trata con láser y qué con anti-VEGF',
      cards: [
        { title: 'Edema macular diabético', tag: 'Cualquier etapa', kind: 'key', items: [
          { t: 'Engrosamiento o exudado en la fóvea', d: 'Puede aparecer en cualquier etapa',
            say: 'Antes de tratar, una entidad aparte: el edema macular diabético. Es el engrosamiento de la retina, o la exudación de lípidos, que compromete el centro de la fóvea. Y puede aparecer en cualquier etapa, también en la no proliferativa.' },
          { t: 'Causa más frecuente de baja visual moderada en DM2', d: 'No la hemorragia vítrea',
            say: 'Ojo con este dato: la causa más frecuente de disminución moderada de la visión en la diabetes tipo dos es el edema macular. La hemorragia vítrea es más dramática, pero menos frecuente.' },
        ] },
        { title: 'Tratamientos GES', tag: 'Oftalmología', kind: 'pharma', items: [
          { t: 'Panfotocoagulación con láser de argón', d: 'Proliferativa y RDNP muy severa',
            say: 'Ahora el tratamiento, y vuelve el mecanismo. La panfotocoagulación con láser de argón destruye la retina periférica isquémica. Menos retina isquémica significa menos VEGF, y los neovasos regresan. Por eso es el tratamiento de elección de la proliferativa y de la no proliferativa muy severa, y previene la ceguera.' },
          { t: 'Anti-VEGF intravítreo', d: 'Ranibizumab, aflibercept: edema macular central',
            say: 'Las inyecciones intravítreas de anti-VEGF, como ranibizumab o aflibercept, son la primera línea del edema macular que compromete el centro de la fóvea. Es la dupla que se pregunta: láser para el neovaso, anti-VEGF para el edema macular.' },
        ] },
        { title: 'Base de todo', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Control estricto de HbA1c y PA', d: 'En toda etapa',
            say: 'Y en todas las etapas, el control estricto de la hemoglobina glicosilada y de la presión arterial, que es lo mismo que protegía al riñón en la clase anterior.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde el tamizaje hasta el tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las diferencias que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Lesión más precoz al fondo de ojo', 'Microaneurismas', 'Exudados duros o neovasos'],
          say: 'Repasemos las trampas. La lesión más precoz son los microaneurismas. Los exudados y los neovasos vienen después.' },
        { cells: ['¿Qué define la proliferativa?', 'Neovasos en papila o retina', 'Muchas hemorragias o exudados'],
          say: 'Lo que define la proliferativa es el neovaso. Una retina llena de hemorragias sin neovasos sigue siendo no proliferativa.' },
        { cells: ['Exudado algodonoso', 'Microinfarto por isquemia', 'Confundirlo con fuga lipídica'],
          say: 'El exudado algodonoso es isquemia, un microinfarto; el exudado duro es fuga de lípidos.' },
        { cells: ['DM2 recién diagnosticada', 'Fondo de ojo de inmediato', 'Esperar 5 años como en DM1'],
          say: 'Diabetes tipo dos recién diagnosticada: fondo de ojo de inmediato. Esperar cinco años es la regla de la tipo uno, no de la tipo dos.' },
        { cells: ['Retinopatía proliferativa', 'Panfotocoagulación láser, derivación prioritaria', 'Solo control metabólico y fondo de ojo anual'],
          say: 'Retinopatía proliferativa: panfotocoagulación con láser y derivación prioritaria a oftalmología. Quedarse solo con el control metabólico es la trampa.' },
        { cells: ['Edema macular central', 'Anti-VEGF intravítreo', 'Láser panretinal como primera línea'],
          say: 'Edema macular que compromete el centro: anti-VEGF intravítreo.' },
        { cells: ['Pérdida visual súbita, indolora, sin rojo pupilar', 'Hemorragia vítrea', 'Edema macular o catarata'],
          say: 'Y la más preguntada: pérdida visual súbita, indolora, sin rojo pupilar, en un diabético de larga data. Es hemorragia vítrea. El edema macular se instala en días y conserva el rojo; la catarata es lenta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 55 años con DM2 de 10 años de evolución, HbA1c 9 %, asintomático. En su control anual, la retinografía en APS muestra microaneurismas, exudados duros y vasos anómalos y frágiles sobre el disco óptico. Agudeza visual conservada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Optimizar el control metabólico y repetir la retinografía en 1 año' },
        { letter: 'B', text: 'Derivación prioritaria a oftalmología para panfotocoagulación con láser de argón' },
        { letter: 'C', text: 'Iniciar inyecciones intravítreas de anti-VEGF como único tratamiento' },
        { letter: 'D', text: 'Vitrectomía de urgencia' },
        { letter: 'E', text: 'Controlar solo si aparece pérdida de visión' },
      ],
      correct: 'B',
      explanation: 'Neovasos en el disco óptico definen una retinopatía proliferativa, aunque el paciente vea bien. El tratamiento de elección es la panfotocoagulación con láser de argón (GES), que reduce el VEGF y hace regresar los neovasos. El anti-VEGF es la primera línea del edema macular central; la vitrectomía se plantea ante la hemorragia vítrea o el desprendimiento traccional.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cinco años, con diabetes tipo dos de diez años y hemoglobina glicosilada de nueve por ciento. No tiene síntomas. En su control anual, la retinografía muestra microaneurismas, exudados duros, y vasos anómalos y frágiles sobre el disco óptico. Su agudeza visual está conservada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: optimizar el control y repetir la retinografía en un año, derivar a oftalmología para panfotocoagulación con láser, anti-VEGF como único tratamiento, vitrectomía de urgencia, o controlar solo si pierde visión. Piénsalo.',
        answer: 'La respuesta es la B. Esos vasos anómalos sobre el disco son neovasos, y los neovasos definen la retinopatía proliferativa, aunque el paciente vea perfecto. El tratamiento es la panfotocoagulación con láser de argón, garantizada por el GES. La trampa es la A: ver bien no permite esperar un año. El anti-VEGF es para el edema macular, y la vitrectomía, para cuando ya sangró o se desprendió la retina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 177',
      stem: 'Un paciente de 68 años, diabético e hipertenso presenta disminución brusca de la visión del ojo izquierdo, que solo le permite diferenciar los movimientos de una mano, sin poder identificar letras. La agudeza visual del ojo derecho es normal. La exploración externa es normal y el rojo pupilar es negativo en ese ojo. En sus exámenes destaca hemoglobina glicosilada de 9,2%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neuritis óptica isquémica' },
        { letter: 'B', text: 'Desprendimiento de retina' },
        { letter: 'C', text: 'Hemorragia vítrea' },
        { letter: 'D', text: 'Trombosis de la arteria central' },
        { letter: 'E', text: 'Edema macular' },
      ],
      correct: 'C',
      explanation: 'Diabético mal controlado con pérdida visual brusca e indolora y rojo pupilar negativo: hemorragia vítrea por rotura de neovasos de una retinopatía proliferativa. La pérdida del rojo pupilar es el signo que la distingue.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente de sesenta y ocho años, diabético e hipertenso, con disminución brusca de la visión del ojo izquierdo: solo distingue el movimiento de una mano. La exploración externa es normal, y el rojo pupilar es negativo en ese ojo. Su hemoglobina glicosilada es nueve coma dos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: neuritis óptica isquémica, desprendimiento de retina, hemorragia vítrea, trombosis de la arteria central, o edema macular. Piénsalo.',
        answer: 'Es la C, hemorragia vítrea. Diabético mal controlado, pérdida brusca y sin dolor, y el dato que decide: rojo pupilar negativo. La sangre en el vítreo bloquea la luz. El desprendimiento de retina tienta porque también es brusco, pero suele avisar con destellos y avanzar como un telón. Y el edema macular se instala en días, no de golpe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 157',
      stem: 'Una paciente de 56 años, diabética de larga data, mal controlada, con nefropatía diabética en etapa IV, presenta pérdida súbita e indolora de la visión del ojo izquierdo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma' },
        { letter: 'B', text: 'Edema macular' },
        { letter: 'C', text: 'Uveítis' },
        { letter: 'D', text: 'Trombosis de la vena central de la retina' },
        { letter: 'E', text: 'Hemorragia vítrea' },
      ],
      correct: 'E',
      explanation: 'La nefropatía avanzada indica daño microvascular extenso y sugiere una retinopatía proliferativa, que se complica con hemorragia vítrea: pérdida súbita e indolora. Al examen se perdería el rojo pupilar.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de cincuenta y seis años, diabética de larga data y mal controlada, con nefropatía diabética en etapa cuatro. Presenta pérdida súbita e indolora de la visión del ojo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: glaucoma, edema macular, uveítis, trombosis de la vena central de la retina, o hemorragia vítrea. Piénsalo.',
        answer: 'Es la E, hemorragia vítrea. Aquí no te dan el rojo pupilar, pero te dan otra pista: una nefropatía avanzada. Si el capilar del riñón está tan dañado, el de la retina también, y lo esperable es una retinopatía proliferativa. Sus neovasos sangran, y la pérdida es súbita y sin dolor. El edema macular es el distractor, pero es de instalación lenta, en días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 33',
      stem: 'Un paciente de 68 años, con antecedente de diabetes mellitus tipo 2, consulta por disminución progresiva de la agudeza visual del ojo derecho. En su evaluación, tiene agudeza visual 20/20 en el ojo izquierdo y 15/20 en el ojo derecho. Su rojo pupilar demuestra una opacidad central con forma de estrella.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Retinopatía diabética' },
        { letter: 'B', text: 'Edema macular' },
        { letter: 'C', text: 'Catarata' },
        { letter: 'D', text: 'Glaucoma' },
        { letter: 'E', text: 'Hemorragia vítrea' },
      ],
      correct: 'C',
      explanation: 'Disminución progresiva de la agudeza visual con una opacidad en el rojo pupilar: catarata. La retinopatía diabética no da síntomas hasta sus complicaciones; el edema macular no altera el rojo pupilar; la hemorragia vítrea es súbita y lo abole por completo.',
      say: {
        stem: 'Y una tercera, del EUNACOM de diciembre de dos mil diecinueve, que te obliga a no responder retinopatía por reflejo. Paciente de sesenta y ocho años, diabético tipo dos, con disminución progresiva de la visión del ojo derecho. Al examinar el rojo pupilar, se ve una opacidad central con forma de estrella.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: retinopatía diabética, edema macular, catarata, glaucoma, o hemorragia vítrea. Piénsalo.',
        answer: 'Es la C, catarata. La pérdida es progresiva y la opacidad está en el rojo pupilar, que es el cristalino. La retinopatía diabética tienta porque es diabético, pero no da síntomas hasta que se complica. El edema macular no altera el rojo, y la hemorragia vítrea es súbita y lo borra entero. El rojo pupilar ordena el diagnóstico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Fondo de ojo', kind: 'key', items: [
          { t: 'Lesión más precoz: microaneurismas', d: 'Por pérdida de pericitos',
            say: 'Cerremos con las reglas de oro. La primera lesión visible son los microaneurismas.' },
          { t: 'Neovasos = proliferativa', d: 'Sin neovasos, no proliferativa',
            say: 'Lo que define la proliferativa es el neovaso, nada más.' },
          { t: 'DM2: fondo de ojo al diagnóstico', d: 'Y anual',
            say: 'En la diabetes tipo dos, fondo de ojo al diagnóstico y luego cada año.' },
        ] },
        { title: 'Tratamiento', tag: 'GES', kind: 'pharma', items: [
          { t: 'Proliferativa: panfotocoagulación', d: 'Láser de argón',
            say: 'La proliferativa se trata con panfotocoagulación con láser de argón.' },
          { t: 'Edema macular central: anti-VEGF', d: 'Causa más frecuente de baja visual moderada',
            say: 'Y el edema macular central, la causa más frecuente de baja visual moderada, con anti-VEGF intravítreo.' },
        ] },
        { title: 'Urgencia', tag: 'Rojo pupilar', kind: 'alert', items: [
          { t: 'Súbita, indolora, sin rojo pupilar', d: 'Hemorragia vítrea: derivar de inmediato',
            say: 'Si te llevas una sola idea de hoy: la retinopatía no avisa, por eso se busca; y cuando avisa con una pérdida visual súbita, indolora y sin rojo pupilar, es una hemorragia vítrea y se deriva de inmediato a oftalmología. En la próxima clase bajamos de la retina al pie diabético. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Retinopatía diabética: del tamizaje al tratamiento',
    root: N('start', 'Paciente con diabetes', 'Tamizaje con fondo de ojo',
      'Todo paciente con diabetes entra a este árbol por el tamizaje. En la tipo dos, al diagnóstico y luego cada año; en la tipo uno, desde el quinto año del debut.',
      ['', N('q', '¿Qué muestra el fondo de ojo?', 'Busca el neovaso',
        'La pregunta que ordena todo es una sola: ¿hay neovasos?',
        ['Normal', N('ok', 'Sin retinopatía', 'Control anual',
          'Si el fondo de ojo es normal, control metabólico y repetir el examen al año.')],
        ['Sin neovasos', N('q', '¿Edema macular central?', 'Retinopatía no proliferativa',
          'Si hay microaneurismas, hemorragias o exudados, pero sin neovasos, es no proliferativa. Ahora mira la mácula.',
          ['NO', N('do', 'Control estricto HbA1c y PA', 'Láser si es muy severa',
            'Sin edema macular: control estricto de glicemia y presión, y seguimiento. Si es muy severa, ya se considera panfotocoagulación.')],
          ['SÍ', N('do', 'Anti-VEGF intravítreo', 'Ranibizumab o aflibercept',
            'Con edema macular que compromete el centro: anti-VEGF intravítreo.')])],
        ['Neovasos', N('alert', 'Retinopatía proliferativa', 'Derivación prioritaria GES',
          'Con neovasos es proliferativa: derivación prioritaria a oftalmología.',
          ['', N('refer', 'Panfotocoagulación con láser de argón', 'Hace regresar los neovasos',
            'El tratamiento es la panfotocoagulación con láser de argón, que reduce el VEGF y previene la ceguera. Y si el paciente llega con pérdida visual súbita, indolora y sin rojo pupilar, es una hemorragia vítrea: derivación inmediata para ecografía ocular y láser o vitrectomía.')])])]),
  },
};
