// Clase 4.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Parásito en la fase aguda, anticuerpos en la crónica, y la madre como principal vía de contagio',
      say: 'Bienvenidos. Seguimos con las zoonosis chilenas y hoy vemos la enfermedad de Chagas. Es un tema de alta rentabilidad, y el EUNACOM lo pregunta desde tres ángulos: cómo se contagia hoy en Chile, qué examen pides según la fase, y qué hacer con la embarazada y su recién nacido. Si entiendes una sola idea, que en la fase aguda buscas el parásito y en la crónica buscas anticuerpos, tienes resuelta la mitad de las preguntas. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Transmisión',
      title: 'De la vinchuca a la placenta',
      nodes: [
        { id: 'tc', col: 0, row: 2, k: 'cause', t: 'Trypanosoma cruzi', s: 'Protozoo hemoflagelado' },
        { id: 'dom', col: 1, row: 0, k: 'good', t: 'Vinchuca domiciliaria', s: 'Triatoma infestans · interrumpida en 1999' },
        { id: 'con', col: 2, row: 2, k: 'alert', t: 'Vía congénita', s: 'Transplacentaria · la predominante hoy' },
        { id: 'sil', col: 1, row: 4, k: 'risk', t: 'Vinchuca silvestre', s: 'Mepraia spinolai · norte chico rural' },
        { id: 'ras', col: 2, row: 4, k: 'mech', t: 'Defeca al picar', s: 'El rascado inocula el parásito' },
      ],
      edges: [
        { from: 'tc', to: 'dom', label: 'antes' }, { from: 'tc', to: 'con', label: 'hoy' },
        { from: 'tc', to: 'sil' }, { from: 'sil', to: 'ras' },
      ],
      steps: [
        { show: ['tc'], note: 'Tripanosomiasis americana',
          say: 'Partamos por el germen. La enfermedad de Chagas, o tripanosomiasis americana, la produce el Trypanosoma cruzi, un protozoo que circula en la sangre. En Chile es endémica entre la primera y la sexta región.' },
        { show: ['dom'], note: 'La vía clásica ya no es la principal',
          say: 'Clásicamente se transmitía por la vinchuca domiciliaria, el Triatoma infestans. Pero Chile logró interrumpir esa transmisión dentro de las casas en mil novecientos noventa y nueve. Por eso, si una alternativa te dice que hoy la vía más frecuente es la vinchuca, desconfía.' },
        { show: ['con'], note: 'El dato que más se pregunta',
          say: 'Hoy la vía predominante en Chile es la congénita: la madre con Chagas crónico, muchas veces sin saberlo, transmite el parásito al hijo a través de la placenta. Este dato es el que explica todo el tamizaje que veremos enseguida.' },
        { show: ['sil'], note: 'Queda un vector en zonas rurales',
          say: 'Todavía persiste una vía vectorial silvestre, por otra vinchuca, la Mepraia spinolai, en zonas rurales del norte chico, como Coquimbo y Valparaíso.' },
        { show: ['ras'], note: 'No es la picadura: son las deposiciones',
          say: 'Y el mecanismo tiene un detalle interesante: el insecto no inyecta el parásito al picar. Defeca mientras pica, la picadura da prurito, y al rascarse la persona arrastra los parásitos de las deposiciones hacia la herida o la conjuntiva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Tamizaje prenatal universal',
      cards: [
        { title: '¿A quién?', tag: 'Obligatorio', kind: 'criteria', items: [
          { t: 'IgG en el control prenatal', d: 'Serología a toda embarazada de zona endémica',
            say: 'Si la vía principal es la madre, la prevención está en el control prenatal. El Ministerio de Salud establece un tamizaje serológico con IgG, obligatorio y universal.' },
          { t: 'De O’Higgins al norte', d: 'Que resida o haya nacido ahí',
            say: 'Se hace a toda embarazada que resida o haya nacido desde la Región de O’Higgins hacia el norte.' },
          { t: 'Extranjeras de zonas endémicas', d: 'De Sudamérica',
            say: 'Y a todas las extranjeras que vienen de zonas endémicas de Sudamérica.' },
        ] },
        { title: 'Si sale positivo', tag: 'No se trata en el embarazo', kind: 'alert', items: [
          { t: 'Antiparasitarios contraindicados', d: 'Durante la gestación',
            say: 'Ahora, ¿qué pasa si la embarazada sale positiva? No se trata durante la gestación: los antiparasitarios están contraindicados en el embarazo.' },
          { t: 'Tratar a la madre en el posparto', d: 'Y estudiar al recién nacido',
            say: 'A la madre se la trata después del parto. Y lo que sí cambia de inmediato es el manejo del recién nacido, que tiene que ser estudiado al nacer. Eso lo veremos en detalle.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fases clínicas',
      title: 'Aguda, indeterminada y determinada',
      nodes: [
        { id: 'agu', col: 0, row: 2, k: 'start', t: 'Fase aguda', s: 'Parásitos en sangre' },
        { id: 'rom', col: 1, row: 0, k: 'effect', t: 'Signo de Romaña', s: 'Edema bipalpebral unilateral indoloro' },
        { id: 'nin', col: 1, row: 4, k: 'effect', t: 'Niño: fiebre prolongada', s: 'Hepatoesplenomegalia · chagoma' },
        { id: 'ind', col: 2, row: 2, k: 'mech', t: 'Crónica indeterminada', s: 'IgG + · ECG y Rx normales' },
        { id: 'nop', col: 3, row: 0, k: 'good', t: '70 % nunca progresa', s: 'Latente por décadas' },
        { id: 'det', col: 3, row: 4, k: 'risk', t: 'Crónica determinada', s: '30 % · corazón o tubo digestivo' },
      ],
      edges: [
        { from: 'agu', to: 'rom' }, { from: 'agu', to: 'nin' },
        { from: 'agu', to: 'ind' }, { from: 'ind', to: 'nop' }, { from: 'ind', to: 'det', label: 'décadas' },
      ],
      steps: [
        { show: ['agu'], note: 'En el adulto suele pasar inadvertida',
          say: 'Veamos la historia natural. La primera fase es la aguda, y su característica es que hay muchos parásitos circulando en la sangre. En el adulto habitualmente es asintomática.' },
        { show: ['nin'], note: 'Cuando da síntomas, suele ser en niños',
          say: 'En los niños, en cambio, puede dar un síndrome febril prolongado con hepatoesplenomegalia, y a veces una lesión en el sitio de entrada del parásito en la piel, el chagoma de inoculación.' },
        { show: ['rom'], note: 'El parásito entró por la conjuntiva',
          say: 'Y el signo más famoso de la puerta de entrada es el signo de Romaña: un edema de ambos párpados de un solo ojo, indoloro, con una adenopatía preauricular. Es lo que pasa cuando el rascado lleva el parásito a la conjuntiva, tal como vimos en el mecanismo.' },
        { show: ['ind'], note: 'Serología positiva, todo lo demás normal',
          say: 'Después viene la fase crónica indeterminada, o latente. El paciente tiene la IgG positiva, pero no tiene síntomas, y su electrocardiograma y radiografías son normales.' },
        { show: ['nop'], note: 'La mayoría se queda aquí',
          say: 'Esta fase dura décadas, y el setenta por ciento de los pacientes nunca sale de ella.' },
        { show: ['det'], note: 'El otro 30 %: daño de órgano',
          say: 'El otro treinta por ciento evoluciona a la fase crónica determinada, con daño del corazón o del tubo digestivo. Esa es la fase que el examen describe con más detalle, y la vemos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase crónica determinada',
      title: 'El corazón y los megas',
      cards: [
        { title: 'Cardiopatía chagásica', tag: 'Fibrosis miocárdica', kind: 'alert', items: [
          { t: 'BCRD + hemibloqueo anterior izquierdo', d: 'El hallazgo clásico del ECG',
            say: 'En el corazón, el parásito produce fibrosis del miocardio, y eso daña el sistema de conducción. El hallazgo clásico del electrocardiograma es el bloqueo completo de rama derecha asociado a un hemibloqueo anterior izquierdo. Si ves esa combinación en un paciente del norte, piensa en Chagas.' },
          { t: 'Arritmias ventriculares e IC', d: 'Insuficiencia cardíaca',
            say: 'Además da arritmias ventriculares e insuficiencia cardíaca.' },
        ] },
        { title: 'Forma digestiva', tag: 'Destrucción de plexos', kind: 'criteria', items: [
          { t: 'Plexos de Meissner y Auerbach', d: 'Sin inervación, el tubo se dilata',
            say: 'En el tubo digestivo el mecanismo es otro: el parásito destruye los plexos nerviosos de la pared, los de Meissner y Auerbach. Sin inervación, el tubo pierde su motilidad y se dilata. Por eso se habla de los megas.' },
          { t: 'Megacolon', d: 'Constipación severa, fecalomas, vólvulo de sigmoides',
            say: 'El megacolon da una constipación severa, que puede durar semanas, con fecalomas recurrentes, y puede complicarse con un vólvulo de sigmoides.' },
          { t: 'Megaesófago', d: 'Disfagia progresiva y regurgitación, como acalasia',
            say: 'Y el megaesófago da disfagia progresiva y regurgitación, un cuadro muy parecido a la acalasia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'La regla de oro: ¿hay parásitos en la sangre?',
      nodes: [
        { id: 'fas', col: 0, row: 2, k: 'q', t: '¿Qué fase es?', s: 'Define la parasitemia' },
        { id: 'agu', col: 1, row: 0, k: 'start', t: 'Aguda o recién nacido', s: 'Parasitemia alta' },
        { id: 'par', col: 2, row: 0, k: 'good', t: 'Parasitológico directo', s: 'Microhematocrito, gota gruesa o PCR' },
        { id: 'igg', col: 3, row: 0, k: 'trap', t: 'IgG en el recién nacido', s: 'Refleja los anticuerpos de la madre' },
        { id: 'cro', col: 1, row: 4, k: 'start', t: 'Fase crónica', s: 'Parasitemia indetectable' },
        { id: 'ser', col: 2, row: 4, k: 'good', t: 'Serología IgG', s: 'Dos técnicas: ELISA + IFI o HAI · ISP' },
      ],
      edges: [
        { from: 'fas', to: 'agu' }, { from: 'agu', to: 'par' }, { from: 'par', to: 'igg', label: 'no' },
        { from: 'fas', to: 'cro' }, { from: 'cro', to: 'ser' },
      ],
      steps: [
        { show: ['fas'], note: 'El examen depende de la fase',
          say: 'Ahora la regla de oro del diagnóstico, que el EUNACOM pregunta una y otra vez. El examen que pides depende de la fase, porque la fase define si hay parásitos en la sangre.' },
        { show: ['agu', 'par'], note: 'Si hay parásitos, se buscan',
          say: 'En la fase aguda, y en el recién nacido de madre con Chagas, la parasitemia es alta. Entonces se busca el parásito directamente: microhematocrito, gota gruesa, o PCR.' },
        { show: ['igg'], note: 'La trampa del recién nacido',
          say: 'Y ojo con la trampa: en el recién nacido, la IgG no sirve. La IgG cruza la placenta, así que un recién nacido de madre positiva va a tener IgG positiva aunque no esté infectado. Esos son los anticuerpos de la madre, no los suyos.' },
        { show: ['cro', 'ser'], note: 'Si no hay parásitos, se buscan anticuerpos',
          say: 'En la fase crónica pasa lo contrario: la parasitemia es indetectable, y buscar el parásito no sirve. Aquí el diagnóstico es serológico, con dos pruebas IgG de técnicas diferentes, por ejemplo ELISA más inmunofluorescencia o hemaglutinación, confirmadas por el Instituto de Salud Pública. En resumen: fase aguda, parásito; fase crónica, anticuerpos.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Chagas congénito',
      title: 'El recién nacido de madre con Chagas',
      nodes: [
        { id: 'rn', col: 0, row: 2, k: 'start', t: 'RN de madre con Chagas', s: 'Aunque nazca sano' },
        { id: 'mh', col: 1, row: 2, k: 'q', t: 'Microhematocrito al nacer', s: 'Sangre de cordón o periférica · o PCR' },
        { id: 'pos', col: 2, row: 0, k: 'good', t: 'Positivo: tratar ya', s: 'Curación > 95 %' },
        { id: 'neg', col: 2, row: 4, k: 'refer', t: 'Negativo: seguir', s: 'Repetir a los 3 meses' },
        { id: 'ig9', col: 3, row: 4, k: 'mech', t: 'IgG a los 9–12 meses', s: 'Ya sin anticuerpos maternos' },
      ],
      edges: [
        { from: 'rn', to: 'mh' }, { from: 'mh', to: 'pos', label: 'positivo' }, { from: 'mh', to: 'neg', label: 'negativo' },
        { from: 'neg', to: 'ig9', label: 'o' },
      ],
      steps: [
        { show: ['rn'], note: 'El examen físico normal no descarta',
          say: 'Apliquemos la regla al escenario más preguntado: el recién nacido de una madre con Chagas. Muchas veces nace vigoroso y con un examen físico normal, y eso no descarta nada.' },
        { show: ['mh'], note: 'Parasitológico directo, de inmediato',
          say: 'La conducta es hacer de inmediato, al nacer, un estudio parasitológico directo: microhematocrito en sangre de cordón o por punción venosa, o PCR.' },
        { show: ['pos'], note: 'En el lactante, el tratamiento funciona muy bien',
          say: 'Si es positivo, se trata de inmediato con nifurtimox o benznidazol. Y vale la pena: en el lactante la curación supera el noventa y cinco por ciento.' },
        { show: ['neg', 'ig9'], note: 'Un negativo no cierra el caso',
          say: 'Si es negativo, no se da de alta el tema. Se repite a los tres meses, o se pide la serología IgG después de los nueve a doce meses. ¿Por qué esperar tanto? Porque a esa edad los anticuerpos de la madre ya desaparecieron, y una IgG positiva ahora sí es del niño.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antiparasitarios: a quién y cómo',
      cards: [
        { title: 'Fármacos', tag: '60 días', kind: 'pharma', items: [
          { t: 'Nifurtimox 8–10 mg/kg/día', d: 'Por 60 días',
            say: 'Veamos el tratamiento. Hay dos antiparasitarios. El nifurtimox, de ocho a diez miligramos por kilo al día, por sesenta días.' },
          { t: 'Benznidazol 5–7 mg/kg/día', d: 'Por 60 días',
            say: 'O el benznidazol, de cinco a siete miligramos por kilo al día, también por sesenta días.' },
        ] },
        { title: 'Indicación', tag: 'Quiénes se tratan', kind: 'key', items: [
          { t: 'Fase aguda y Chagas congénito', d: 'Indicación absoluta',
            say: '¿A quién se trata? La indicación es clara en la fase aguda y en el Chagas congénito, donde el parásito está circulando y el tratamiento cura.' },
          { t: 'Indeterminada en menores de 50', d: 'Niños y adultos jóvenes: prevenir la progresión',
            say: 'Y en la fase indeterminada, en niños y adultos jóvenes, menores de cincuenta años, para prevenir la progresión al daño de órgano.' },
        ] },
        { title: 'Excepciones', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Embarazo: contraindicado', d: 'Se trata a la madre después del parto',
            say: 'Durante el embarazo están contraindicados; a la madre se la trata después del parto.' },
          { t: 'Fase determinada: manejo del órgano', d: 'Parasiticida discutido',
            say: 'Y en la fase determinada, el antiparasitario es discutido: lo que manda es el manejo del órgano dañado, como la insuficiencia cardíaca, el marcapasos, o la cirugía del megacolon.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen por fase',
      title: 'Diagnóstico y manejo según la fase clínica',
      head: ['Fase', 'Diagnóstico', 'Manifestación', 'Antiparasitario'],
      rows: [
        { cells: ['Aguda / congénita', 'Microhematocrito o PCR', 'Romaña, o RN asintomático', 'Indicación absoluta'],
          say: 'Ordenemos todo por fase. Aguda o congénita: parasitológico directo o PCR; se manifiesta con Romaña, o con un recién nacido asintomático; y el tratamiento está siempre indicado.' },
        { cells: ['Crónica indeterminada', 'IgG por 2 técnicas (ELISA + IFI)', 'Asintomático, ECG normal', 'Indicado si < 50 años'],
          say: 'Crónica indeterminada: IgG por dos técnicas; el paciente está asintomático con electrocardiograma normal; y se trata si tiene menos de cincuenta años.' },
        { cells: ['Cardiopatía chagásica', 'IgG + ECG + ecocardiograma', 'BCRD + HBAI, arritmias, IC', 'Manejo de IC o marcapasos'],
          say: 'Cardiopatía chagásica: serología, electrocardiograma y ecocardiograma; bloqueo de rama derecha con hemibloqueo anterior izquierdo, arritmias o insuficiencia cardíaca; y el manejo es el de la insuficiencia cardíaca o un marcapasos.' },
        { cells: ['Megacolon / megaesófago', 'IgG + Rx baritada o TAC', 'Constipación pertinaz, fecalomas, disfagia', 'Manejo de la constipación, cirugía'],
          say: 'Y la forma digestiva: serología más radiografía con bario o TAC; constipación pertinaz, fecalomas o disfagia; y se maneja la constipación, con cirugía de resección si hace falta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['RN de madre con Chagas', 'Microhematocrito o PCR al nacer', 'Pedir IgG al recién nacido'],
          say: 'Repasemos las trampas. Recién nacido de madre con Chagas: microhematocrito o PCR al nacer. El error es pedirle IgG, que solo refleja los anticuerpos de la madre.' },
        { cells: ['Adulto con sospecha de Chagas crónico', 'Dos serologías IgG distintas', 'Buscar el parásito en sangre'],
          say: 'Adulto con sospecha de Chagas crónico: dos serologías IgG de técnicas distintas. El error es buscar el parásito, que en esta fase no se ve.' },
        { cells: ['Embarazada IgG positiva', 'Tratar después del parto + estudiar al RN', 'Nifurtimox durante el embarazo'],
          say: 'Embarazada con IgG positiva: se trata después del parto y se estudia al recién nacido. Darle nifurtimox en el embarazo es un error.' },
        { cells: ['Vía de contagio más frecuente hoy', 'Congénita', 'Vinchuca domiciliaria'],
          say: 'La vía de contagio más frecuente hoy en Chile es la congénita. Responder la vinchuca domiciliaria es quedarse en los libros antiguos.' },
        { cells: ['Megacolon + BCRD, paciente del norte', 'Chagas crónico determinado', 'Cáncer de colon o Hirschsprung'],
          say: 'Y un paciente del norte con megacolon y bloqueo de rama derecha tiene un Chagas crónico determinado. Pensar solo en un cáncer de colon es no ver el electrocardiograma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de término, adecuado para la edad gestacional, hijo de madre de 28 años con Chagas crónico asintomático confirmado en el control prenatal. Nace vigoroso, afebril, sin visceromegalias ni alteraciones al examen físico.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar serología IgG anti-T. cruzi al recién nacido' },
        { letter: 'B', text: 'Microhematocrito (o PCR) al nacer' },
        { letter: 'C', text: 'Iniciar nifurtimox de inmediato sin estudio' },
        { letter: 'D', text: 'Alta sin estudio, porque el examen físico es normal' },
        { letter: 'E', text: 'Electrocardiograma y ecocardiograma neonatal' },
      ],
      correct: 'B',
      explanation: 'En el RN hijo de madre con Chagas se hace de inmediato un parasitológico directo (microhematocrito en sangre de cordón o periférica, o PCR). La IgG refleja los anticuerpos maternos transferidos por la placenta. Si es positivo, se trata (curación > 95 %); si es negativo, se repite a los 3 meses o se pide IgG después de los 9–12 meses.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de término, hijo de una madre de veintiocho años con Chagas crónico asintomático, detectado en el control prenatal. Nace vigoroso, afebril y con un examen físico completamente normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: serología IgG al recién nacido; microhematocrito o PCR al nacer; nifurtimox sin estudiar; alta sin estudio; o electrocardiograma y ecocardiograma. Piénsalo.',
        answer: 'Es la B. El recién nacido es como una fase aguda: si está infectado, tiene parásitos en la sangre, y se buscan directamente. La A es la trampa del tema: la IgG del recién nacido es la de su madre, así que va a salir positiva aunque no esté infectado. Y la D falla porque un examen normal no descarta un Chagas congénito.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 38',
      stem: 'Una paciente de 56 años, con antecedente de haber vivido en Brasil, hasta hace 6 meses, consulta por disfagia lógica y progresiva, asociada a baja de peso de 6 kilogramos. Su examen físico no tiene alteraciones. Tiene antecedente de pirosis y regurgitación de larga data.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer de esófago' },
        { letter: 'B', text: 'Estenosis péptica' },
        { letter: 'C', text: 'Esofagitis eosinofílica' },
        { letter: 'D', text: 'Acalasia esofágica' },
        { letter: 'E', text: 'Cáncer gástrico' },
      ],
      correct: 'A',
      explanation: 'El antecedente de vivir en Brasil sugiere Chagas, pero la clínica manda: disfagia lógica (primero sólidos, luego líquidos) y progresiva, con baja de peso y reflujo de larga data, es cáncer de esófago. El megaesófago chagásico y la acalasia suelen dar disfagia ilógica.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de cincuenta y seis años que vivió en Brasil hasta hace seis meses, con disfagia lógica y progresiva, baja de peso de seis kilos, y reflujo de larga data. El examen físico es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de esófago; estenosis péptica; esofagitis eosinofílica; acalasia; o cáncer gástrico. Piénsalo.',
        answer: 'Es la A, cáncer de esófago. El antecedente de Brasil está puesto para que pienses en un megaesófago chagásico, y por eso la acalasia es el distractor. Pero el megaesófago, como la acalasia, suele dar una disfagia ilógica, para sólidos y líquidos a la vez. Aquí es lógica, primero los sólidos, con baja de peso y reflujo antiguo. La epidemiología orienta, pero la clínica manda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 60 años, originario de la Región de Coquimbo, con constipación crónica pertinaz de años, agravada en los últimos meses, que requiere enemas evacuantes periódicos. El enema baritado muestra marcada dilatación del sigmoides y del recto. El ECG revela bloqueo completo de rama derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer de colon izquierdo estenosante' },
        { letter: 'B', text: 'Enfermedad de Chagas en fase crónica determinada' },
        { letter: 'C', text: 'Enfermedad de Hirschsprung del adulto' },
        { letter: 'D', text: 'Colitis ulcerosa de larga data' },
        { letter: 'E', text: 'Síndrome de colon irritable variante constipación' },
      ],
      correct: 'B',
      explanation: 'Megacolon (forma digestiva) + bloqueo completo de rama derecha (forma cardíaca) en un paciente de zona endémica (IV Región): Chagas crónico determinado. Se confirma con serología IgG por dos técnicas (ELISA e IFI).',
      say: {
        stem: 'Cerramos con un caso representativo del banco. Hombre de sesenta años, de la Región de Coquimbo, con años de constipación pertinaz que ahora requiere enemas periódicos. El enema baritado muestra un sigmoides y un recto muy dilatados, y el electrocardiograma, un bloqueo completo de rama derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de colon estenosante; Chagas crónico determinado; Hirschsprung del adulto; colitis ulcerosa; o colon irritable. Piénsalo.',
        answer: 'Es la B. Junta las piezas: zona endémica, un mega del tubo digestivo, y un bloqueo de rama derecha. Un solo diagnóstico explica el colon y el corazón a la vez: el Chagas crónico determinado. El cáncer de colon es el distractor, pero no explica el electrocardiograma. Y se confirma con dos serologías IgG, porque es una fase crónica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Transmisión', tag: 'Chile hoy', kind: 'key', items: [
          { t: 'Vía predominante: congénita', d: 'Vinchuca domiciliaria interrumpida en 1999',
            say: 'Cerremos con las reglas de oro. Hoy en Chile la vía predominante es la congénita; la vinchuca domiciliaria está interrumpida desde mil novecientos noventa y nueve.' },
          { t: 'IgG a toda embarazada', d: 'De O’Higgins al norte y extranjeras de zona endémica',
            say: 'Por eso se tamiza con IgG a toda embarazada de O’Higgins al norte y a las extranjeras de zonas endémicas.' },
        ] },
        { title: 'Diagnóstico', tag: 'Según la fase', kind: 'criteria', items: [
          { t: 'Aguda y RN: parásito', d: 'Microhematocrito o PCR',
            say: 'En la fase aguda y en el recién nacido se busca el parásito, con microhematocrito o PCR.' },
          { t: 'Crónica: dos IgG', d: 'ELISA + IFI o HAI',
            say: 'En la fase crónica se buscan anticuerpos, con dos IgG de técnicas distintas.' },
        ] },
        { title: 'Clínica y tratamiento', tag: 'Lo que se pregunta', kind: 'pharma', items: [
          { t: 'BCRD + HBAI · megacolon · megaesófago', d: 'Fase determinada (30 %)',
            say: 'La fase determinada da bloqueo de rama derecha con hemibloqueo anterior izquierdo, megacolon y megaesófago.' },
          { t: 'Nifurtimox o benznidazol × 60 días', d: 'Nunca en el embarazo',
            say: 'Y se trata con nifurtimox o benznidazol por sesenta días, nunca en el embarazo. Si te llevas una sola idea de hoy: en la fase aguda buscas el parásito, en la crónica buscas anticuerpos, y en el recién nacido la IgG es de la madre. En la próxima clase vemos las enfermedades transmitidas por mosquitos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Chagas: qué examen y a quién tratar',
    root: N('start', 'Sospecha o tamizaje de Chagas', 'Zona endémica o madre positiva',
      'Paciente con sospecha de Chagas, ya sea por venir de una zona endémica, por un tamizaje prenatal, o por ser hijo de una madre positiva. La primera pregunta es quién es el paciente, porque eso define la fase y el examen.',
      ['', N('q', '¿Quién es el paciente?', 'RN · embarazada · adulto',
        '¿Es un recién nacido de madre con Chagas, una embarazada, o un adulto con serología positiva?',
        ['RN de madre +', N('q', '¿Microhematocrito al nacer?', 'O PCR · nunca IgG',
          'En el recién nacido se hace microhematocrito o PCR al nacer, nunca IgG. ¿Cuál es el resultado?',
          ['Positivo', N('do', 'Tratar de inmediato', 'Nifurtimox o benznidazol · curación > 95 %',
            'Si es positivo, se trata de inmediato con nifurtimox o benznidazol, con una curación sobre el noventa y cinco por ciento.')],
          ['Negativo', N('ok', 'Repetir a los 3 meses', 'O IgG a los 9–12 meses',
            'Si es negativo, se repite a los tres meses, o se pide IgG después de los nueve a doce meses, cuando ya no quedan anticuerpos maternos.')])],
        ['Embarazada', N('do', 'IgG en el control prenatal', 'Si es +: tratar en el posparto',
          'En la embarazada de zona endémica se hace el tamizaje con IgG. Si es positiva, no se trata durante la gestación: se trata después del parto, y se estudia al recién nacido.')],
        ['Adulto IgG +', N('q', '¿Daño de órgano?', 'ECG, radiografía y clínica',
          'En el adulto con dos serologías IgG positivas, la pregunta es si hay daño de órgano: ¿el electrocardiograma, las radiografías y la clínica son normales?',
          ['NO', N('do', 'Indeterminada', 'Tratar si es menor de 50 años',
            'Si no hay daño, es una fase indeterminada, y se trata si tiene menos de cincuenta años, para prevenir la progresión.')],
          ['SÍ', N('alert', 'Determinada', 'Manejo de IC, marcapasos o cirugía',
            'Si hay bloqueo de rama, insuficiencia cardíaca o un mega, es la fase determinada. Lo que manda es el manejo del órgano: insuficiencia cardíaca, marcapasos o cirugía.')])])]),
  },
};
