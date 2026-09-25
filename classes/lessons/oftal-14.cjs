// Clase 15.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-14), bloque 3.
// El banco real EUNACOM (búsqueda por "degeneración macular", "metamorfopsia", "rejilla de
// Amsler", "drusas") sí tiene preguntas donde la degeneración macular asociada a la edad es
// la respuesta correcta y se decide por el texto del enunciado; se usan aquí dos, sin depender
// de ninguna imagen de fondo de ojo. Se descartan otros hallazgos del mismo código
// (6.02.1.010) que en realidad corresponden a celulitis orbitaria, tema de otra clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La causa número uno de ceguera central en el adulto mayor, y por qué nunca deja a nadie ciego del todo',
      say: 'Bienvenidos. Hoy vemos la degeneración macular asociada a la edad, la causa principal de ceguera central legal en los mayores de sesenta años. Es la continuación natural de lo que ya vimos con la retina: ahí el problema eran los vasos; hoy el problema es la mácula, la zona de más alta definición de toda la retina. Y la buena noticia es que esta enfermedad, por severa que sea, nunca deja a nadie completamente ciego. Vamos a ver por qué.',
    },

    {
      type: 'flow',
      kicker: 'Factores de riesgo y lesión inicial',
      title: 'Por qué la mácula envejece distinto al resto de la retina',
      nodes: [
        { id: 'edad', col: 0, row: 0, k: 'cause', t: 'Edad mayor a sesenta años', s: 'El factor de riesgo número uno' },
        { id: 'taba', col: 0, row: 2, k: 'cause', t: 'Tabaquismo', s: 'El principal factor modificable' },
        { id: 'epr', col: 1, row: 1, k: 'mech', t: 'El epitelio pigmentario pierde eficiencia', s: 'No degrada bien los desechos de los fotorreceptores' },
        { id: 'dru', col: 2, row: 1, k: 'risk', t: 'Drusas', s: 'Depósitos de lípidos bajo la retina' },
        { id: 'conf', col: 3, row: 1, k: 'trap', t: 'Drusas blandas y confluentes', s: 'Alto riesgo de progresar a ceguera' },
      ],
      edges: [
        { from: 'edad', to: 'epr' }, { from: 'taba', to: 'epr', label: 'acelera' },
        { from: 'epr', to: 'dru' }, { from: 'dru', to: 'conf', label: 'si son grandes' },
      ],
      steps: [
        { show: ['edad'], note: 'La mácula tiene la tasa metabólica más alta del ojo',
          say: 'Empecemos por el mecanismo. La mácula concentra la mayor densidad de conos y la mayor tasa metabólica de todo el organismo, y con los años esa exigencia pasa la cuenta. El factor de riesgo número uno, sin discusión, es la edad avanzada, sobre los sesenta o sesenta y cinco años.' },
        { show: ['taba'], note: 'El único factor que el paciente puede cambiar',
          say: 'El segundo factor importante es el tabaquismo, y es clave porque es el principal factor de riesgo modificable: acelera la progresión de la enfermedad. También suman los antecedentes familiares y la raza blanca.' },
        { show: ['epr'], note: 'El epitelio pigmentario deja de limpiar bien',
          say: 'Con la edad, el epitelio pigmentario retiniano pierde la capacidad de degradar los segmentos externos gastados de los fotorreceptores.' },
        { show: ['dru'], note: 'La lesión elemental de toda la enfermedad',
          say: 'Y ese material de desecho se acumula entre el epitelio pigmentario y la membrana de Bruch, formando las drusas: depósitos amarillentos de lípidos. Son la lesión elemental, la que ves primero en el fondo de ojo.' },
        { show: ['conf'], note: 'El tamaño de la drusa predice el riesgo',
          say: 'Y ojo con este dato, porque se pregunta: no todas las drusas pesan lo mismo. Las drusas blandas, grandes y confluentes, son las que tienen alto riesgo de progresar hacia la ceguera.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas clínicas',
      title: 'DMAE seca versus DMAE húmeda: la diferencia que decide todo',
      cards: [
        { title: 'DMAE seca o atrófica', tag: 'Ochenta y cinco a noventa por ciento de los casos', kind: 'criteria', items: [
          { t: 'Progresión lenta, a lo largo de años', d: 'Drusas más atrofia geográfica de la fóvea',
            say: 'La forma seca o atrófica es, por lejos, la más frecuente: entre el ochenta y cinco y el noventa por ciento de los casos. Progresa muy lento, a lo largo de años, con drusas y áreas de atrofia geográfica del epitelio pigmentario y los fotorreceptores en la fóvea.' },
        ] },
        { title: 'DMAE húmeda o exudativa', tag: 'Diez a quince por ciento, pero la más destructiva', kind: 'alert', items: [
          { t: 'Membrana neovascular coroidea', d: 'El VEGF estimula vasos anómalos que cruzan la membrana de Bruch',
            say: 'La forma húmeda es minoritaria, solo entre un diez y un quince por ciento, pero causa el noventa por ciento de la ceguera severa por esta enfermedad. La isquemia local libera VEGF, y eso hace crecer una membrana neovascular coroidea que atraviesa la membrana de Bruch hacia el espacio bajo la retina.' },
          { t: 'Extravasación y hemorragia subretiniana', d: 'Pérdida visual rápida, en días o semanas',
            say: 'Esos vasos nuevos son frágiles: sangran y dejan salir líquido, dando edema macular y hemorragias subretinianas, que terminan en una cicatriz fibrovascular. Por eso la pérdida visual acá es rápida, en días o semanas, muy distinta a la evolución lenta de la forma seca.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica y diagnóstico',
      title: 'Metamorfopsia: el síntoma que la rejilla de Amsler pesquisa antes que nadie',
      nodes: [
        { id: 'sint', col: 0, row: 1, k: 'start', t: 'Paciente mayor de sesenta años', s: 'Nota que algo cambió al leer o mirar de frente' },
        { id: 'meta', col: 1, row: 0, k: 'q', t: 'Metamorfopsia', s: 'Las líneas rectas se ven onduladas o quebradas' },
        { id: 'amsl', col: 2, row: 0, k: 'good', t: 'Rejilla de Amsler', s: 'Detecta la distorsión en el box' },
        { id: 'esco', col: 1, row: 2, k: 'effect', t: 'Escotoma central', s: 'Mancha fija que impide leer y reconocer caras' },
        { id: 'peri', col: 2, row: 2, k: 'good', t: 'Campo periférico intacto', s: 'El paciente camina sin tropezar, no queda ciego' },
      ],
      edges: [
        { from: 'sint', to: 'meta' }, { from: 'meta', to: 'amsl' },
        { from: 'sint', to: 'esco' }, { from: 'esco', to: 'peri', label: 'siempre se conserva' },
      ],
      steps: [
        { show: ['sint'], note: 'La clínica cardinal de toda la enfermedad',
          say: 'Ahora, la clínica cardinal, porque es la que reconoces en el examen. El paciente típico es mayor de sesenta años, y nota un cambio muy específico al leer o al mirar de frente.' },
        { show: ['meta'], note: 'El signo más temprano y más sensible',
          say: 'El síntoma más temprano y más sensible es la metamorfopsia: las líneas rectas, como el marco de una puerta o las baldosas del piso, se perciben torcidas, onduladas o quebradas.' },
        { show: ['amsl'], note: 'Se pesquisa en el box, sin ningún examen sofisticado',
          say: 'Y se pesquisa con la rejilla de Amsler: una cuadrícula que el paciente mira de cerca, y si tiene degeneración macular, las líneas centrales se le ven curvadas o hay un área que falta.' },
        { show: ['esco'], note: 'Lo que le impide leer y reconocer rostros',
          say: 'Con el tiempo aparece el escotoma central: una mancha oscura fija justo en el centro de la mirada, que le impide leer y reconocer las caras de las personas.' },
        { show: ['peri'], note: 'El dato que evita el error de examen más frecuente',
          say: 'Y aquí está el dato que más se pregunta y más se confunde: el campo visual periférico se mantiene siempre intacto. El paciente puede caminar solo, sin bastón blanco, porque la enfermedad destruye la mácula, no toda la retina. La degeneración macular nunca produce ceguera total.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antioxidantes para la seca, anti-VEGF para la húmeda',
      cards: [
        { title: 'DMAE seca', tag: 'Fórmula AREDS-2', kind: 'pharma', items: [
          { t: 'Antioxidantes orales', d: 'Vitamina C, vitamina E, zinc, cobre, luteína y zeaxantina',
            say: 'El tratamiento de la forma seca son los antioxidantes orales, con la fórmula AREDS-2: vitamina C, vitamina E, zinc, cobre, luteína y zeaxantina.' },
          { t: 'Dejar de fumar, siempre', d: 'Frena la progresión, pero no regenera el tejido ya atrófico',
            say: 'Junto con dejar de fumar de forma estricta. Ojo con la expectativa correcta: esto frena la velocidad de progresión, pero no regenera el tejido que ya está atrófico.' },
        ] },
        { title: 'DMAE húmeda', tag: 'Terapia de rescate', kind: 'alert', items: [
          { t: 'Inyecciones intravítreas de anti-VEGF', d: 'Ranibizumab, aflibercept o brolucizumab',
            say: 'La forma húmeda, en cambio, es una urgencia retinológica: se trata con inyecciones intravítreas periódicas de fármacos anti-VEGF, como ranibizumab, aflibercept o brolucizumab.' },
          { t: 'Mensuales o bimestrales', d: 'Frenan la neovascularización y estabilizan la visión',
            say: 'Se aplican mensual o bimestralmente, y logran frenar el crecimiento de esa membrana neovascular y estabilizar la visión. Entre más rápido se inicien, mejor el pronóstico.' },
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
      title: 'DMAE seca contra DMAE húmeda',
      head: ['Característica', 'DMAE seca', 'DMAE húmeda'],
      rows: [
        { cells: ['Frecuencia', 'Ochenta y cinco a noventa por ciento', 'Diez a quince por ciento, la más destructiva'],
          say: 'Repasemos el contraste. En frecuencia, la seca es la mayoría de los casos; la húmeda es minoritaria, pero es la que ciega.' },
        { cells: ['Velocidad de pérdida visual', 'Lenta, a lo largo de años', 'Rápida, en semanas o meses'],
          say: 'La seca pierde visión lento, a lo largo de años; la húmeda, rápido, en semanas o meses.' },
        { cells: ['Fondo de ojo', 'Drusas y atrofia geográfica', 'Hemorragia subretiniana y líquido seroso'],
          say: 'En el fondo de ojo, la seca muestra drusas y atrofia; la húmeda, hemorragia subretiniana y líquido.' },
        { cells: ['Tratamiento de elección', 'Antioxidantes AREDS-2 y dejar de fumar', 'Inyecciones intravítreas de anti-VEGF'],
          say: 'Y el tratamiento: antioxidantes y dejar de fumar en la seca; anti-VEGF intravítreo, con urgencia, en la húmeda.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años, hipertensa, refiere que hace 2 semanas nota que las baldosas de su cocina se ven onduladas y que le cuesta reconocer las caras de sus nietos cuando la visitan. Camina sola sin dificultad y no ha chocado con nada. Al examinarla con la rejilla de Amsler, las líneas centrales se ven curvadas hacia un punto oscuro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizarla, ya que camina sola y no tiene compromiso de la visión periférica' },
        { letter: 'B', text: 'Derivar con urgencia a oftalmología para estudio con tomografía de coherencia óptica y eventual anti-VEGF' },
        { letter: 'C', text: 'Indicar solo antioxidantes orales con fórmula AREDS-2 y controlar en un año' },
        { letter: 'D', text: 'Solicitar campimetría para confirmar el diagnóstico antes de derivar' },
        { letter: 'E', text: 'Indicar colirio de timolol y control en tres meses' },
      ],
      correct: 'B',
      explanation: 'Metamorfopsia y escotoma central de instalación reciente, confirmados con la rejilla de Amsler, son el cuadro cardinal de degeneración macular asociada a la edad. La evolución en solo dos semanas orienta a una forma húmeda, que exige derivación urgente para estudio con tomografía de coherencia óptica y, si se confirma, inyecciones intravítreas de anti-VEGF.',
      say: {
        stem: 'Vamos con un caso. Mujer de sesenta y ocho años, hipertensa, que hace dos semanas nota que las baldosas de su cocina se ven onduladas, y que le cuesta reconocer las caras de sus nietos cuando la visitan. Camina sola sin dificultad y no ha chocado con nada. Con la rejilla de Amsler, las líneas centrales se ven curvadas hacia un punto oscuro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: tranquilizarla porque camina sola y no tiene compromiso periférico, derivar con urgencia a oftalmología para estudio con tomografía de coherencia óptica y eventual anti-VEGF, indicar solo antioxidantes y controlar en un año, pedir una campimetría antes de derivar, o dar un colirio de timolol. Piénsalo.',
        answer: 'Es la B. La metamorfopsia más el escotoma central, confirmados con la rejilla de Amsler, dan el diagnóstico de degeneración macular. Y la velocidad, solo dos semanas, es la pista para pensar en la forma húmeda, que necesita estudio urgente y, si se confirma, anti-VEGF cuanto antes. El campo periférico intacto es esperable en esta enfermedad, no motivo para tranquilizarla, y los antioxidantes solos son el tratamiento de la forma seca, que evoluciona lenta, no en semanas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 105',
      stem: 'Un paciente de 80 años, diabético, hipertenso y fumador de 30 paquetes-año, consulta por dificultades para leer, que ha empeorado lentamente. Además notó hace poco una metamorfopsia en el ojo izquierdo. Tiene agudeza visual de 0,8 en el ojo derecho y de 0,4 en el ojo izquierdo, y al examen ocular se aprecia leve disminución del rojo pupilar bilateral, con reflejos fotomotores normales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Degeneración macular relacionada con la edad' },
        { letter: 'B', text: 'Glaucoma de ángulo abierto' },
        { letter: 'C', text: 'Desprendimiento de retina' },
        { letter: 'D', text: 'Glaucoma de ángulo estrecho' },
        { letter: 'E', text: 'Retinopatía diabética' },
      ],
      correct: 'A',
      explanation: 'La metamorfopsia, la edad avanzada y la dificultad progresiva y lenta para leer son el cuadro característico de la degeneración macular asociada a la edad. El fumador de larga data tiene además el principal factor de riesgo modificable. El glaucoma no da metamorfopsia y afecta primero el campo visual periférico, no la lectura.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil quince. Un paciente de ochenta años, diabético, hipertenso y fumador de treinta paquetes al año, consulta por dificultad para leer, que ha empeorado lentamente. Además, notó hace poco una metamorfopsia en el ojo izquierdo. Su agudeza visual es de ocho décimos en el ojo derecho y cuatro décimos en el izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: degeneración macular asociada a la edad, glaucoma de ángulo abierto, desprendimiento de retina, glaucoma de ángulo estrecho, o retinopatía diabética.',
        answer: 'Es la A. La combinación de edad avanzada, dificultad progresiva y lenta para leer, y sobre todo la metamorfopsia, arma el cuadro típico de la degeneración macular. Y el antecedente de tabaquismo intenso refuerza el diagnóstico, porque es el principal factor de riesgo que el paciente puede modificar. El glaucoma es la trampa más tentadora por la edad, pero el glaucoma no da metamorfopsia: ataca primero el campo visual periférico, no la lectura fina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 171',
      stem: 'Un paciente de 72 años consulta por dificultades en la lectura, que han empeorado en el último mes, a pesar de que realizó un cambio de lentes hace 6 meses. No presenta otros síntomas, tiene agudeza visual 20/80 en el ojo derecho y 20/40 en el ojo izquierdo, y refiere que ve algunos objetos deformados.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Degeneración macular relacionada con la edad' },
        { letter: 'B', text: 'Glaucoma crónico' },
        { letter: 'C', text: 'Cataratas' },
        { letter: 'D', text: 'Desprendimiento de retina' },
        { letter: 'E', text: 'Edema macular' },
      ],
      correct: 'A',
      explanation: 'La deformación de los objetos, es decir la metamorfopsia, junto con la dificultad progresiva para leer que no mejora con un cambio de lentes reciente, orientan a degeneración macular asociada a la edad. Las cataratas dan visión borrosa difusa, sin distorsión de las formas; el glaucoma no altera la lectura fina hasta etapas muy tardías.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de agosto de dos mil veintiuno, que insiste en el mismo punto con otro distractor. Un paciente de setenta y dos años consulta por dificultad para leer, que ha empeorado en el último mes, a pesar de haber cambiado de lentes hace seis meses. No tiene otros síntomas, su agudeza visual es veinte cuarenta en el ojo izquierdo, y refiere que ve algunos objetos deformados.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: degeneración macular asociada a la edad, glaucoma crónico, cataratas, desprendimiento de retina, o edema macular.',
        answer: 'Es la A. Fíjate en el detalle que descarta a la trampa más tentadora, las cataratas: el cambio reciente de lentes que no mejoró nada te dice que el problema no es de refracción. Y la palabra clave, deformados, es la metamorfopsia. Eso, sumado a la edad, arma la degeneración macular. El glaucoma no da esta distorsión, y ataca la lectura recién en etapas muy avanzadas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clínica', tag: 'Metamorfopsia', kind: 'key', items: [
          { t: 'Líneas rectas onduladas', d: 'El síntoma más temprano; se pesquisa con la rejilla de Amsler',
            say: 'Cerremos con las reglas de oro. La metamorfopsia, las líneas rectas que se ven onduladas, es el síntoma más temprano, y se pesquisa con la rejilla de Amsler.' },
          { t: 'Campo periférico siempre intacto', d: 'Nunca produce ceguera total',
            say: 'Y el campo visual periférico siempre se conserva: esta enfermedad nunca deja a nadie completamente ciego.' },
        ] },
        { title: 'Diagnóstico diferencial', tag: 'Seca contra húmeda', kind: 'criteria', items: [
          { t: 'Seca: progresión lenta, drusas', d: 'Ochenta y cinco a noventa por ciento de los casos',
            say: 'La forma seca progresa lento y muestra drusas; es la mayoría de los casos.' },
          { t: 'Húmeda: progresión rápida, hemorragia', d: 'Minoritaria, pero la que causa ceguera severa',
            say: 'La forma húmeda progresa rápido, en semanas, con hemorragia subretiniana, y es la responsable de casi toda la ceguera severa.' },
        ] },
        { title: 'Tratamiento', tag: 'Antioxidantes o anti-VEGF', kind: 'pharma', items: [
          { t: 'Seca: AREDS-2 y dejar de fumar', d: 'Húmeda: inyecciones intravítreas de anti-VEGF, sin demora',
            say: 'Si te llevas una sola idea de hoy: en la seca, antioxidantes con fórmula AREDS-2 y dejar de fumar; en la húmeda, anti-VEGF intravítreo, sin demora, porque cada semana que pasa se pierde visión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con metamorfopsia: decide entre la forma seca y la húmeda',
    root: (() => {
      const vegf = N('ok', 'Inyecciones intravítreas de anti-VEGF', 'Ranibizumab o aflibercept, mensual o bimestral',
        'Inicia inyecciones intravítreas de anti-VEGF cuanto antes: cada semana de demora significa más visión central perdida.');
      const oct = N('do', 'Tomografía de coherencia óptica y angiografía', 'Confirma la membrana neovascular coroidea',
        'Confirma con tomografía de coherencia óptica y angiografía la membrana neovascular coroidea que está sangrando.',
        ['', vegf]);
      const humeda = N('alert', 'Sospecha de DMAE húmeda', 'Progresión en días o semanas, con hemorragia subretiniana',
        'Sospecha una forma húmeda: la progresión es rápida, en días o semanas, y puede haber hemorragia subretiniana en el fondo de ojo.',
        ['', oct]);

      const areds = N('ok', 'Antioxidantes AREDS-2 y dejar de fumar', 'Frena la progresión, no regenera lo atrófico',
        'Indica antioxidantes con fórmula AREDS-2 y refuerza dejar de fumar, sabiendo que esto frena la progresión, pero no revierte el daño ya hecho.');
      const seca = N('do', 'Sospecha de DMAE seca', 'Progresión lenta, a lo largo de años, con drusas',
        'Sospecha una forma seca: la progresión es lenta, a lo largo de años, y el fondo de ojo muestra drusas y atrofia.',
        ['', areds]);

      const velocidadQ = N('q', '¿La pérdida visual es de días o semanas, o de años?', 'La velocidad separa la forma húmeda de la seca',
        'Pregunta desde cuándo nota el cambio: eso separa de inmediato la forma húmeda de la seca.',
        ['días o semanas', humeda],
        ['a lo largo de años', seca]);

      const amsler = N('do', 'Rejilla de Amsler', 'Confirma la distorsión de las líneas',
        'Confirma la distorsión con la rejilla de Amsler, y pregunta desde cuándo la nota.',
        ['', velocidadQ]);

      return N('start', 'Paciente mayor de sesenta años con metamorfopsia', 'Líneas rectas que se ven onduladas o quebradas',
        'Ante un paciente mayor de sesenta años que refiere líneas rectas onduladas o un punto que falta al mirar de frente, sospecha degeneración macular.',
        ['', amsler]);
    })(),
  },
};
