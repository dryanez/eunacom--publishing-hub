// Clase Neumología 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-02, bloque 1).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Medir la gravedad, reconocer al paciente que se agota y tratar la primera hora',
      say: 'Bienvenidos. Hoy vemos la crisis asmática del adulto, un clásico de la urgencia y del EUNACOM. En la clase anterior aprendiste a leer una espirometría; hoy el mismo bronquio se cierra de golpe, y ya no hay tiempo para una espirometría: hay un paciente que no puede respirar. El examen pregunta tres cosas: cuán grave es la crisis, cómo reconocer al paciente que se está agotando, y qué hacer en la primera hora. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Qué pasa en el bronquio durante la crisis?',
      nodes: [
        { id: 'esp', col: 0, row: 0, k: 'cause', t: 'Espasmo del músculo liso', s: 'El bronquio se contrae' },
        { id: 'ede', col: 0, row: 1, k: 'cause', t: 'Edema e inflamación', s: 'La pared se engruesa' },
        { id: 'moc', col: 0, row: 2, k: 'cause', t: 'Tapones de moco', s: 'Moco espeso intraluminal' },
        { id: 'res', col: 1, row: 1, k: 'mech', t: 'Resistencia de la vía aérea', s: 'Obstrucción difusa' },
        { id: 'atr', col: 2, row: 0, k: 'effect', t: 'Atrapamiento aéreo', s: 'Hiperinsuflación dinámica' },
        { id: 'vq', col: 2, row: 2, k: 'effect', t: 'Desbalance V/Q', s: 'Hipoxemia' },
        { id: 'hip', col: 3, row: 2, k: 'mech', t: 'Hiperventilación', s: 'Alcalosis respiratoria, CO2 bajo' },
        { id: 'tra', col: 3, row: 0, k: 'risk', t: 'Más trabajo respiratorio', s: 'El músculo se puede agotar' },
      ],
      edges: [
        { from: 'esp', to: 'res' }, { from: 'ede', to: 'res' }, { from: 'moc', to: 'res' },
        { from: 'res', to: 'atr' }, { from: 'res', to: 'vq' }, { from: 'vq', to: 'hip' }, { from: 'atr', to: 'tra' },
      ],
      steps: [
        { show: ['esp', 'ede', 'moc'], note: 'Tres mecanismos cierran el bronquio',
          say: 'Partamos por el mecanismo, porque explica toda la clínica y los gases. En la crisis, tres cosas cierran el bronquio a la vez: el músculo liso se contrae, la pared se inflama y se edematiza, y el lumen se llena de moco espeso.' },
        { show: ['res'], note: 'Obstrucción difusa',
          say: 'El resultado es una obstrucción difusa, con un aumento crítico de la resistencia de la vía aérea.' },
        { show: ['atr', 'tra'], note: 'El aire entra, pero no alcanza a salir',
          say: 'Como el aire sale lento, no alcanza a salir antes de la siguiente inspiración, y queda atrapado: es la hiperinsuflación dinámica. El paciente respira con el pulmón lleno, y eso aumenta mucho el trabajo de los músculos respiratorios. Guarda esta idea: ese músculo se puede agotar.' },
        { show: ['vq'], note: 'Zonas que se perfunden y no se ventilan',
          say: 'Al mismo tiempo, hay zonas del pulmón que reciben sangre pero no reciben aire. Ese desbalance entre ventilación y perfusión produce hipoxemia.' },
        { show: ['hip'], note: 'Lo esperable: CO2 bajo',
          say: 'Y la respuesta a la hipoxemia y a la disnea es hiperventilar. Por eso lo esperable en una crisis asmática es una alcalosis respiratoria, con el CO dos bajo. Esta idea es la clave para entender los gases, que vemos en un momento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Severidad',
      title: 'Leve a moderada o grave',
      cards: [
        { title: 'Leve a moderada', tag: 'Habla en oraciones', kind: 'normal', items: [
          { t: 'Habla en oraciones o párrafos', d: 'FC 100–120, FR < 25',
            say: 'La severidad se clasifica con la clínica y con el flujo espiratorio máximo, el PEF o peak flow. En la crisis leve a moderada, el paciente habla en oraciones o párrafos, con frecuencia cardíaca de cien a ciento veinte, y frecuencia respiratoria bajo veinticinco.' },
          { t: 'SatO2 90–95% · PEF 50–70%', d: 'Del mejor valor personal o teórico',
            say: 'Satura entre noventa y noventa y cinco por ciento al aire ambiente, y el PEF está entre el cincuenta y el setenta por ciento de su mejor valor personal o del teórico.' },
        ] },
        { title: 'Grave', tag: 'Habla en palabras', kind: 'alert', items: [
          { t: 'Solo palabras o frases cortas', d: 'Posición de trípode, musculatura accesoria',
            say: 'En la crisis grave, el paciente solo logra decir palabras o frases cortas. Se sienta en posición de trípode, apoyado en los brazos, y usa la musculatura accesoria del cuello y los intercostales.' },
          { t: 'FC > 120 · FR > 30 · PEF < 50%', d: 'Cualquiera basta para llamarla grave',
            say: 'La frecuencia cardíaca pasa de ciento veinte, la respiratoria de treinta, y el PEF cae bajo el cincuenta por ciento. Fíjate en lo práctico: la forma de hablar del paciente ya te dice la severidad antes de medir nada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgo vital',
      title: 'Signos de paro respiratorio inminente',
      cards: [
        { title: 'El silencio es malo', tag: 'Crisis casi fatal', kind: 'alert', items: [
          { t: 'Tórax silente', d: 'Sin sibilancias por flujo insuficiente',
            say: 'Ahora lo más importante de la clase: reconocer la crisis casi fatal. El primer signo es el tórax silente. Las sibilancias necesitan flujo de aire para sonar; si el flujo es tan bajo que ya no hace vibrar los bronquios, dejan de escucharse. Un paciente que deja de sibilar sin haber mejorado está a punto de hacer un paro.' },
          { t: 'Bradicardia', d: 'Tras la taquicardia, es un signo tardío',
            say: 'El segundo es la bradicardia. Después de la taquicardia, un corazón que se enlentece es un corazón que ya no tolera la hipoxia.' },
        ] },
        { title: 'Otros signos', tag: 'Agotamiento', kind: 'criteria', items: [
          { t: 'Pulso paradojal > 25 mmHg', d: 'Y diaforesis profusa',
            say: 'Además, un pulso paradojal de más de veinticinco milímetros de mercurio y la sudoración profusa.' },
          { t: 'Confusión o somnolencia', d: 'Por hipoxia; incapaz de hablar',
            say: 'La confusión o la somnolencia, por hipoxia. Ojo con el enunciado: un paciente que se queda tranquilo o somnoliento en plena crisis no se calmó; se está agotando.' },
          { t: 'Movimiento paradójico', d: 'Toracoabdominal: el diafragma se fatiga',
            say: 'Y el movimiento paradójico toracoabdominal, que es el diafragma fatigado. Todos estos signos son la misma idea del mecanismo: el músculo respiratorio que trabajó demasiado y ya no da más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gases arteriales',
      title: 'El CO2 normal es la alarma',
      nodes: [
        { id: 'gsa', col: 0, row: 1, k: 'start', t: 'Gases arteriales', s: 'Crisis grave o sin respuesta' },
        { id: 'baj', col: 1, row: 0, k: 'good', t: 'PaCO2 < 35 mmHg', s: 'Alcalosis respiratoria: lo esperable' },
        { id: 'nor', col: 2, row: 1, k: 'alert', t: 'PaCO2 38–42 mmHg', s: '"Normal": agotamiento inminente' },
        { id: 'alt', col: 3, row: 2, k: 'alert', t: 'PaCO2 > 45 y pH < 7,30', s: 'Acidosis respiratoria' },
        { id: 'upc', col: 4, row: 2, k: 'refer', t: 'Soporte en UPC', s: 'Riesgo de paro hipóxico' },
      ],
      edges: [
        { from: 'gsa', to: 'baj', label: 'hiperventila' }, { from: 'baj', to: 'nor', label: 'se cansa' },
        { from: 'nor', to: 'alt', label: 'claudica' }, { from: 'alt', to: 'upc' },
      ],
      steps: [
        { show: ['gsa'], note: 'Obligatorios en la crisis grave',
          say: 'Los gases en sangre arterial son obligatorios en la crisis grave o cuando no hay respuesta al tratamiento inicial. Y se interpretan con el mecanismo que vimos.' },
        { show: ['baj'], note: 'Hipocapnia por hiperventilación',
          say: 'Lo esperable es la hipocapnia: un CO dos arterial bajo treinta y cinco, porque el paciente está hiperventilando. Es un paciente que todavía tiene fuerzas.' },
        { show: ['nor'], note: 'Taquipneico con CO2 normal',
          say: 'Ahora, la pregunta clásica. ¿Qué significa un CO dos normal, entre treinta y ocho y cuarenta y dos, en un paciente que respira rápido? Que ya no puede sostener la hiperventilación. Es un signo ominoso de agotamiento inminente. Normal, en este contexto, es malo.' },
        { show: ['alt', 'upc'], note: 'Hipercapnia con acidosis',
          say: 'Y si el CO dos sube sobre cuarenta y cinco con acidosis respiratoria, con pH bajo siete coma treinta, el riesgo de paro hipóxico es extremo, y el paciente necesita soporte inmediato en la unidad de paciente crítico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'La primera hora: cuatro pilares',
      cards: [
        { title: 'Oxígeno y broncodilatadores', tag: 'Desde el ingreso', kind: 'pharma', items: [
          { t: 'Oxígeno a SatO2 93–95%', d: '≥ 95% en embarazadas o cardiópatas',
            say: 'Pasemos al tratamiento de la primera hora. Primero, oxígeno por cánula nasal, titulado para una saturación de noventa y tres a noventa y cinco por ciento; noventa y cinco o más en embarazadas y cardiópatas. Sin hiperoxia indiscriminada.' },
          { t: 'Salbutamol 4–8 puff cada 20 min', d: 'Durante la 1ª hora, con aerocámara',
            say: 'Segundo, el broncodilatador de acción corta: salbutamol, de cuatro a ocho inhalaciones cada veinte minutos durante la primera hora, con inhalador y aerocámara valvulada.' },
          { t: '+ Ipratropio en moderada y grave', d: '4–8 puff o 500 mcg nebulizado cada 20 min',
            say: 'Tercero, en la crisis moderada y grave se suma el bromuro de ipratropio, cuatro a ocho puff, o quinientos microgramos nebulizados, cada veinte minutos en la primera hora. Esa asociación reduce las hospitalizaciones.' },
        ] },
        { title: 'Corticoide sistémico', tag: 'En la primera hora', kind: 'key', items: [
          { t: 'Prednisona 40–50 mg VO', d: 'Igual de eficaz que la vía EV',
            say: 'Cuarto, el corticoide sistémico, que se da en la primera hora, no al final. De elección, prednisona oral, cuarenta a cincuenta miligramos. La biodisponibilidad oral es casi completa, así que es igual de eficaz que la vía endovenosa.' },
          { t: 'Hidrocortisona 200 mg EV', d: 'O metilprednisolona 40 mg EV si vomita o hay compromiso de conciencia',
            say: 'Solo si el paciente vomita o tiene compromiso de conciencia se usa la vía endovenosa: hidrocortisona doscientos miligramos, o metilprednisolona cuarenta miligramos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'Lo que sí y lo que no',
      cards: [
        { title: 'Aerocámara', tag: 'Tan eficaz como nebulizar', kind: 'normal', items: [
          { t: 'Inhalador + aerocámara = nebulización', d: 'Menos taquicardia y depósito orofaríngeo',
            say: 'Dos detalles que el examen convierte en pregunta. El primero: el inhalador presurizado con aerocámara es al menos igual de eficaz que la nebulización, con menos depósito en la boca y menos taquicardia. La nebulización no es superior.' },
        ] },
        { title: 'No de rutina', tag: 'Trampa de examen', kind: 'alert', items: [
          { t: 'Antibióticos', d: 'La crisis no es una infección bacteriana',
            say: 'El segundo: lo que no se usa de rutina. Los antibióticos no tienen indicación en la crisis asmática; el problema es un bronquio cerrado, no una infección bacteriana.' },
          { t: 'Aminofilina', d: 'Sin beneficio adicional y tóxica',
            say: 'Y las metilxantinas, como la aminofilina, tampoco: no agregan beneficio y tienen toxicidad, sobre todo arritmias. Si aparecen como el siguiente paso, descártalas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Reevaluación',
      title: 'A los 60 minutos: alta, magnesio o UPC',
      nodes: [
        { id: 'rev', col: 0, row: 1, k: 'start', t: 'Reevaluar a la hora', s: 'Clínica y PEF' },
        { id: 'alt', col: 1, row: 0, k: 'good', t: 'Buena respuesta', s: 'PEF > 70%, SatO2 > 93%' },
        { id: 'ref', col: 1, row: 2, k: 'q', t: 'Crisis grave refractaria', s: 'PEF < 50%' },
        { id: 'mg', col: 2, row: 2, k: 'mech', t: 'Sulfato de magnesio 2 g EV', s: 'En 20 minutos, dosis única' },
        { id: 'iot', col: 3, row: 2, k: 'alert', t: 'Intubación', s: 'Sopor, pH < 7,25 y PaCO2 > 50' },
        { id: 'ket', col: 4, row: 2, k: 'refer', t: 'Secuencia rápida', s: 'Inducción con ketamina' },
      ],
      edges: [
        { from: 'rev', to: 'alt' }, { from: 'rev', to: 'ref' }, { from: 'ref', to: 'mg' },
        { from: 'mg', to: 'iot', label: 'si se deteriora' }, { from: 'iot', to: 'ket' },
      ],
      steps: [
        { show: ['rev'], note: 'La hora marca la decisión',
          say: 'Después de la primera hora se reevalúa al paciente, con la clínica y con el PEF. De esa reevaluación salen tres caminos.' },
        { show: ['alt'], note: 'Camino al alta',
          say: 'Si responde bien, con PEF sobre setenta por ciento y buena saturación, va camino al alta. Los criterios los vemos en un momento.' },
        { show: ['ref', 'mg'], note: 'El rescate de elección',
          say: 'Si la crisis grave no responde a la primera hora de broncodilatadores, o el PEF sigue bajo cincuenta por ciento, el rescate de elección es el sulfato de magnesio: dos gramos endovenosos en infusión de veinte minutos. Bloquea la entrada de calcio al músculo liso y produce broncodilatación. Esa es la respuesta cuando la pregunta dice que ya hizo todo y no mejora.' },
        { show: ['iot'], note: 'Criterios de intubación',
          say: 'Y si el paciente se deteriora, se intuba. Los criterios son: compromiso de conciencia, sopor o coma; acidosis respiratoria progresiva, con pH bajo siete coma veinticinco y CO dos sobre cincuenta; inestabilidad hemodinámica, o paro inminente.' },
        { show: ['ket'], note: 'Ketamina: también broncodilata',
          say: 'La intubación se hace con secuencia rápida, y el inductor de elección es la ketamina, porque además es broncodilatadora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Alta',
      title: 'Cuándo se va y con qué se va',
      cards: [
        { title: 'Criterios de alta', tag: 'Tras 60 min del último BD', kind: 'criteria', items: [
          { t: 'Asintomático en reposo', d: 'Examen normal o sibilancias mínimas',
            say: 'Veamos el alta de la urgencia. El paciente tiene que estar asintomático en reposo, con un examen pulmonar normal o con sibilancias espiratorias mínimas.' },
          { t: 'SatO2 > 93% · PEF > 70%', d: 'Al aire ambiente',
            say: 'Saturando más de noventa y tres por ciento al aire ambiente, y con un PEF sobre setenta por ciento, medido al menos sesenta minutos después del último broncodilatador. Ese PEF es el criterio objetivo que se pregunta.' },
        ] },
        { title: 'Receta de egreso', tag: 'Obligatoria', kind: 'pharma', items: [
          { t: 'Prednisona 40 mg/día por 5–7 días', d: 'Sin esquema descendente',
            say: 'Y nunca se va solo con salbutamol. Se va con prednisona oral, cuarenta miligramos al día por cinco a siete días, y sin esquema descendente, porque un ciclo tan corto no lo necesita.' },
          { t: 'SABA de rescate + corticoide inhalado', d: 'Iniciar o escalar la mantención',
            say: 'Además, salbutamol de rescate, e iniciar o subir el corticoide inhalado de mantención, con educación en la técnica inhalatoria. Es el puente a la próxima clase: una crisis es la señal de que el asma crónica no está controlada.' },
          { t: 'Control en ≤ 7 días hábiles', d: 'En APS o policlínico',
            say: 'Y control médico en atención primaria o en policlínico en un plazo máximo de siete días hábiles.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde que el paciente entra a la urgencia hasta que se va.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Taquipneico con PaCO2 de 40', 'Agotamiento inminente: preparar soporte', 'Leerlo como gases normales'],
          say: 'Repasemos las trampas. Paciente taquipneico con un CO dos de cuarenta: es agotamiento inminente, y hay que preparar el soporte. El error es leerlo como gases normales.' },
        { cells: ['Deja de sibilar sin mejorar', 'Tórax silente: riesgo de paro', 'Pensar que mejoró'],
          say: 'Paciente que deja de sibilar pero no mejoró: tórax silente, riesgo de paro. El error es pensar que la crisis cedió.' },
        { cells: ['Crisis moderada o grave', 'Prednisona VO en la primera hora', 'Esperar a ver si responde al SABA'],
          say: 'Crisis moderada o grave: corticoide sistémico en la primera hora, por vía oral si puede tragar. El error es esperar a ver si responde al salbutamol.' },
        { cells: ['Grave refractaria a la 1ª hora', 'Sulfato de magnesio 2 g EV', 'Aminofilina o antibióticos'],
          say: 'Crisis grave que no responde en la primera hora: sulfato de magnesio. La aminofilina y los antibióticos son los distractores de siempre.' },
        { cells: ['Alta de urgencia', 'Prednisona 5–7 días, sin descenso', 'Solo salbutamol, o ciclo largo con descenso'],
          say: 'Y al alta: prednisona por cinco a siete días, sin descenso, más el corticoide inhalado. El error es mandarlo solo con salbutamol, o indicar un ciclo largo con reducción progresiva.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 22 años, asmática desde la infancia con tratamiento irregular, consulta en el SAPU por 4 horas de disnea intensa, tos y sibilancias. FR 32/min, FC 128/min, SatO2 89% ambiental. Habla solo con monosílabos entrecortados, tiraje intercostal y supraclavicular. PEF 160 L/min (38% del predicho). Sibilancias inspiratorias y espiratorias difusas.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Oxígeno, salbutamol con ipratropio cada 20 min y prednisona 40–50 mg VO' },
        { letter: 'B', text: 'Sulfato de magnesio 2 g EV como primera medida' },
        { letter: 'C', text: 'Aminofilina EV en carga y mantención' },
        { letter: 'D', text: 'Nebulizar con salbutamol y diferir el corticoide hasta evaluar respuesta' },
        { letter: 'E', text: 'Amoxicilina-ácido clavulánico y salbutamol a demanda' },
      ],
      correct: 'A',
      explanation: 'Crisis grave: habla en monosílabos, FC > 120, FR > 30, musculatura accesoria y PEF < 50%. Conducta: oxígeno a SatO2 93–95%, salbutamol 4–8 puff + ipratropio con aerocámara cada 20 minutos en la primera hora y corticoide sistémico precoz. Reevaluar a los 60 minutos; el magnesio es el rescate si no responde.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintidós años, asmática desde niña, con tratamiento irregular. Consulta en el SAPU por cuatro horas de disnea intensa. Respira treinta y dos veces por minuto, tiene ciento veintiocho de frecuencia cardíaca, satura ochenta y nueve por ciento, habla solo con monosílabos, tiene tiraje, y su PEF es treinta y ocho por ciento del predicho.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: oxígeno, salbutamol con ipratropio y prednisona; sulfato de magnesio de entrada; aminofilina; nebulizar y diferir el corticoide; o antibióticos con salbutamol. Piénsalo.',
        answer: 'Es la A. Primero clasifica: monosílabos, frecuencia cardíaca sobre ciento veinte, respiratoria sobre treinta y PEF bajo cincuenta: es una crisis grave. Entonces van los cuatro pilares de la primera hora: oxígeno, salbutamol con ipratropio y corticoide precoz. El magnesio es el distractor más tentador, pero es el rescate cuando no responde a la primera hora, no la primera medida. Y diferir el corticoide es justamente el error que hay que evitar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 179',
      stem: 'Un paciente de 25 años, con antecedente de asma en tratamiento con fluticasona, un puff cada 12 horas, y salbutamol SOS, consulta por un cuadro de disnea que inició hace 48 horas en relación a un cuadro respiratorio alto y que ha ido empeorando, presentando actualmente disnea de mínimos esfuerzos que no ha respondido al uso de salbutamol. Al examen físico se observa taquipneico, con aumento del diámetro anteroposterior del tórax, frecuencia respiratoria de 35 por minuto, saturación de oxígeno 95% y frases con palabras entrecortadas.',
      question: '¿Cuál de los siguientes exámenes es más adecuado para precisar la severidad del cuadro?',
      options: [
        { letter: 'A', text: 'Radiografía de tórax' },
        { letter: 'B', text: 'Test de metacolina' },
        { letter: 'C', text: 'Flujo espiratorio máximo (PEF)' },
        { letter: 'D', text: 'Hemograma y VHS' },
        { letter: 'E', text: 'Gases en sangre venosa' },
      ],
      correct: 'C',
      explanation: 'La severidad de la crisis se define con la clínica y el PEF, que objetiva la obstrucción y permite seguir la respuesta al tratamiento. Los gases útiles son los arteriales, no los venosos, y se piden en la crisis grave o sin respuesta. La metacolina provoca broncoespasmo: está contraindicada en crisis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veinticinco años, asmático con fluticasona y salbutamol, con dos días de disnea creciente tras un cuadro respiratorio alto, que no responde al salbutamol. Está taquipneico, con treinta y cinco respiraciones por minuto, satura noventa y cinco por ciento y habla con palabras entrecortadas.',
        question: '¿Cuál de los siguientes exámenes es más adecuado para precisar la severidad del cuadro?',
        options: 'Las opciones: radiografía de tórax, test de metacolina, flujo espiratorio máximo, hemograma con VHS, o gases en sangre venosa. Piénsalo.',
        answer: 'Es la C, el PEF. La severidad se mide con la clínica y con el flujo espiratorio máximo, que además te sirve para ver la respuesta a la hora. El distractor tentador son los gases, pero fíjate que dicen venosos: los que sirven son los arteriales, y se piden en la crisis grave. Y la metacolina es para diagnosticar asma en un paciente sin crisis; aquí provocaría más broncoespasmo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Gravedad', tag: 'Mírale la boca', kind: 'key', items: [
          { t: 'Palabras, FC > 120, FR > 30, PEF < 50%', d: 'Crisis grave',
            say: 'Cerremos con las reglas de oro. Si habla en palabras, con frecuencia cardíaca sobre ciento veinte, respiratoria sobre treinta y PEF bajo cincuenta, la crisis es grave.' },
          { t: 'Tórax silente y CO2 normal', d: 'Agotamiento: riesgo de paro',
            say: 'El tórax silente y el CO dos normal en un paciente taquipneico no son buenas noticias: son agotamiento y riesgo de paro.' },
        ] },
        { title: 'Primera hora', tag: 'Cuatro pilares', kind: 'pharma', items: [
          { t: 'O2 + SABA + ipratropio + corticoide', d: 'Prednisona VO igual que la EV',
            say: 'En la primera hora: oxígeno, salbutamol con ipratropio cada veinte minutos, y corticoide sistémico precoz, por vía oral si puede tragar.' },
          { t: 'Refractaria: magnesio 2 g EV', d: 'No aminofilina, no antibióticos',
            say: 'Si no responde, sulfato de magnesio; nunca aminofilina ni antibióticos de rutina.' },
        ] },
        { title: 'Alta', tag: 'PEF > 70%', kind: 'alert', items: [
          { t: 'Prednisona 5–7 días + CI', d: 'Control en 7 días hábiles',
            say: 'Y al alta, con PEF sobre setenta, prednisona por cinco a siete días sin descenso, más corticoide inhalado y control precoz. Si te llevas una sola idea de hoy: en la crisis asmática, el paciente que se calla y el CO dos que se normaliza te están avisando que se agota. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Crisis asmática en el servicio de urgencia',
    root: N('start', 'Crisis asmática', 'Clínica + PEF',
      'Llega un paciente con crisis asmática. Lo primero es clasificar la severidad con la clínica y el PEF.',
      ['', N('q', '¿Signos de paro inminente?', 'Tórax silente, sopor, bradicardia',
        'Antes de todo, busca los signos de paro inminente: tórax silente, compromiso de conciencia, bradicardia o agotamiento.',
        ['SÍ', N('alert', 'Soporte vital y UPC', 'Preparar intubación con ketamina',
          'Si están presentes, es una crisis casi fatal: soporte inmediato, preparar la intubación con secuencia rápida y ketamina, e ingreso a la unidad de paciente crítico.')],
        ['NO', N('q', 'Primera hora: 4 pilares', '¿Cómo responde a los 60 min?',
          'Si no los hay, se inician los cuatro pilares de la primera hora: oxígeno a noventa y tres a noventa y cinco, salbutamol con ipratropio cada veinte minutos, y corticoide sistémico precoz. A los sesenta minutos se reevalúa con la clínica y el PEF.',
          ['PEF > 70%', N('ok', 'Alta', 'Prednisona 5–7 días + CI + control',
            'Si queda asintomático, con PEF sobre setenta y saturación sobre noventa y tres, se va de alta con prednisona por cinco a siete días, corticoide inhalado, salbutamol de rescate y control en siete días hábiles.')],
          ['PEF < 50%', N('do', 'Sulfato de magnesio 2 g EV', 'En 20 minutos',
            'Si la crisis grave no responde, se agrega sulfato de magnesio, dos gramos endovenosos en veinte minutos.')],
          ['Se deteriora', N('refer', 'Intubación y UPC', 'pH < 7,25, PaCO2 > 50, sopor',
            'Y si se deteriora, con sopor, acidosis con pH bajo siete coma veinticinco y CO dos sobre cincuenta, o inestabilidad, se intuba y va a la unidad de paciente crítico.')])])]),
  },
};
