// Clase 7.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-08).
// El banco real no tiene preguntas de tormenta tiroidea: se usan preguntas del libro como "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Diagnóstico clínico, cuatro pilares y un orden que no se puede cambiar',
      say: 'Bienvenidos. Hoy vemos la tormenta tiroidea, la máxima descompensación del hipertiroidismo, con una mortalidad del diez al treinta por ciento si no se trata a tiempo. Todo lo que vimos en las dos clases anteriores, el propiltiouracilo, el Lugol y el betabloqueo, se junta aquí. Y el examen pregunta tres cosas: cómo se diagnostica, en qué orden van los fármacos, y qué antipirético está prohibido. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Qué convierte un hipertiroidismo en tormenta?',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'start', t: 'Hipertiroidismo', s: 'Graves no controlado, en general' },
        { id: 'gat', col: 0, row: 3, k: 'cause', t: 'Desencadenante', s: 'Infección, cirugía, abandono' },
        { id: 'lib', col: 1, row: 0, k: 'mech', t: 'Más hormona libre', s: 'Caen las proteínas transportadoras' },
        { id: 'bet', col: 1, row: 2, k: 'mech', t: 'Más receptores beta', s: 'Tejidos hipersensibles' },
        { id: 'cit', col: 1, row: 4, k: 'mech', t: 'Tormenta de citoquinas', s: 'Respuesta hiperinflamatoria' },
        { id: 'fal', col: 3, row: 2, k: 'risk', t: 'Falla multiorgánica', s: 'Fiebre, SNC, corazón, hígado' },
      ],
      edges: [
        { from: 'hip', to: 'lib' },
        { from: 'gat', to: 'lib' },
        { from: 'gat', to: 'bet' },
        { from: 'gat', to: 'cit' },
        { from: 'lib', to: 'fal' },
        { from: 'bet', to: 'fal' },
        { from: 'cit', to: 'fal' },
      ],
      steps: [
        { show: ['hip'], note: 'La T4L no es más alta que en un hipertiroidismo común',
          say: 'Empecemos con la idea más importante de la clase. La tormenta tiroidea no se define por tener la T cuatro libre más alta. Un paciente en tormenta puede tener hormonas iguales a las de un hipertiroidismo no complicado. La diferencia está en cómo responde el organismo.' },
        { show: ['gat'], note: 'Siempre hay un gatillo',
          say: 'Casi siempre hay un gatillo: una infección, una cirugía, el abandono del tratamiento. Guarda esta idea, porque buscar ese gatillo es parte del tratamiento.' },
        { show: ['lib'], note: 'La misma hormona, más activa',
          say: 'El gatillo cambia tres cosas. Primero, bajan las proteínas que transportan la hormona, y entonces aumenta la fracción libre, la que actúa.' },
        { show: ['bet'], note: 'Tejidos más sensibles a la adrenalina',
          say: 'Segundo, aumenta la cantidad y la sensibilidad de los receptores beta adrenérgicos en los tejidos. El corazón responde mucho más a la misma señal.' },
        { show: ['cit'], note: 'Inflamación sistémica',
          say: 'Y tercero, se dispara una respuesta inflamatoria sistémica mediada por citoquinas.' },
        { show: ['fal'], note: 'Lo que define la tormenta es la falla de órganos',
          say: 'El resultado es un colapso de varios sistemas a la vez: fiebre, compromiso de conciencia, falla cardíaca, alteraciones digestivas e ictericia. Eso, la falla de órganos, es lo que define la tormenta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Desencadenantes',
      title: 'Los gatillos que el enunciado te va a dar',
      cards: [
        { title: 'Los más frecuentes', tag: 'Buscarlos siempre', kind: 'alert', items: [
          { t: 'Infecciones agudas', d: 'Sepsis, neumonía, infección urinaria',
            say: 'Estos son los gatillos que tienes que buscar en el enunciado. El primero y más frecuente: una infección aguda, como una neumonía, una infección urinaria o una sepsis.' },
          { t: 'Cirugía sin preparación', d: 'Tiroidea o de cualquier otro órgano',
            say: 'El segundo: una cirugía en un paciente tirotóxico no compensado, sea de la tiroides o de cualquier otro órgano. Es exactamente lo que evitamos con la preparación con tiamazol y Lugol de la clase pasada.' },
          { t: 'Abandono de tionamidas', d: 'Suspensión brusca',
            say: 'El tercero: el paciente que deja de golpe su tiamazol.' },
        ] },
        { title: 'Otros gatillos', tag: 'También se preguntan', kind: 'normal', items: [
          { t: 'Contraste yodado o radioyodo', d: 'Sin cobertura previa',
            say: 'Otros gatillos: un medio de contraste yodado o una dosis de radioyodo sin cobertura previa, porque el yodo es combustible para una glándula hiperactiva.' },
          { t: 'Trauma, cetoacidosis, hipoglicemia, parto', d: 'Cualquier estrés mayor',
            say: 'Y cualquier estrés mayor: un trauma grave, una cetoacidosis diabética, una hipoglicemia severa o el trabajo de parto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El diagnóstico es clínico: escala de Burch-Wartofsky',
      cards: [
        { title: 'La regla', tag: 'No esperar el laboratorio', kind: 'alert', items: [
          { t: 'Diagnóstico 100 % clínico', d: 'No se espera la T4L para tratar',
            say: 'Vamos al diagnóstico. Es completamente clínico, y no se retrasa esperando exámenes. Como la T cuatro libre no separa la tormenta del hipertiroidismo común, esperarla no aporta nada y cuesta tiempo.' },
          { t: 'Escala de Burch-Wartofsky', d: 'Puntúa la disfunción por sistemas',
            say: 'Para objetivarla se usa la escala de Burch-Wartofsky, que suma puntos según la disfunción de cada sistema.' },
        ] },
        { title: 'Los cortes', tag: 'Memorizar', kind: 'criteria', items: [
          { t: '45 o más: altamente probable', d: 'Tratamiento de rescate en UCI',
            say: 'Y los cortes que tienes que memorizar: cuarenta y cinco puntos o más, tormenta altamente probable, con indicación de tratamiento inmediato en la UCI.' },
          { t: '25 a 44: inminente', d: 'Tormenta en desarrollo',
            say: 'Entre veinticinco y cuarenta y cuatro, tormenta inminente.' },
          { t: 'Menos de 25: improbable', d: 'Hipertiroidismo no complicado',
            say: 'Y bajo veinticinco, improbable.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Qué suma puntos',
      cards: [
        { title: 'Temperatura y SNC', tag: 'Hasta 30 cada uno', kind: 'criteria', items: [
          { t: 'Temperatura: 5 a 30 puntos', d: 'Desde 37,2 °C; 30 si es 40 °C o más',
            say: 'Veamos qué suma. La temperatura da de cinco puntos, desde treinta y siete coma dos grados, hasta treinta puntos, con cuarenta grados o más.' },
          { t: 'SNC: 10 a 30 puntos', d: 'Agitación 10, delirio 20, coma o convulsión 30',
            say: 'El sistema nervioso: agitación leve, diez; delirio, psicosis o letargia extrema, veinte; y coma o convulsiones, treinta.' },
        ] },
        { title: 'Digestivo y corazón', tag: 'Falla de órganos', kind: 'criteria', items: [
          { t: 'Digestivo: 10 a 20 puntos', d: 'Vómitos o diarrea 10, ictericia 20',
            say: 'Lo digestivo: náuseas, vómitos, diarrea o dolor abdominal, diez; e ictericia sin otra causa, veinte. Fíjate en la ictericia: vale el doble.' },
          { t: 'Frecuencia cardíaca: 5 a 25 puntos', d: 'Desde 100 lpm; 25 si es 140 o más',
            say: 'La frecuencia cardíaca: cinco puntos entre cien y ciento nueve latidos, hasta veinticinco puntos con ciento cuarenta o más.' },
          { t: 'FA 10; insuficiencia cardíaca 5 a 15', d: 'Edema pulmonar: 15',
            say: 'La fibrilación auricular suma diez, y la insuficiencia cardíaca de cinco, si es leve, a quince, con edema pulmonar franco.' },
        ] },
        { title: 'Desencadenante', tag: '10 puntos', kind: 'key', items: [
          { t: 'Evento precipitante identificado', d: 'Infección, cirugía, parto, contraste',
            say: 'Y el desencadenante identificado suma diez puntos más. Por eso un paciente febril, taquicárdico y agitado, con una neumonía, supera los cuarenta y cinco con facilidad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Los cuatro pilares, en orden',
      nodes: [
        { id: 'uci', col: 0, row: 2, k: 'start', t: 'Tormenta: 45 puntos o más', s: 'UCI inmediata' },
        { id: 'bb', col: 1, row: 0, k: 'good', t: '1. Betabloqueo', s: 'Propranolol' },
        { id: 'ptu', col: 1, row: 2, k: 'good', t: '2. Propiltiouracilo', s: 'Bloquea la síntesis' },
        { id: 'yod', col: 3, row: 2, k: 'good', t: '3. Lugol', s: 'Al menos 1 hora después del PTU' },
        { id: 'cor', col: 1, row: 4, k: 'good', t: '4. Hidrocortisona EV', s: '100 mg cada 8 horas' },
        { id: 'sop', col: 3, row: 4, k: 'mech', t: 'Soporte + gatillo', s: 'Paracetamol, fluidos, antibióticos' },
      ],
      edges: [
        { from: 'uci', to: 'bb' },
        { from: 'uci', to: 'ptu' },
        { from: 'ptu', to: 'yod', label: '1 hora después' },
        { from: 'uci', to: 'cor' },
        { from: 'cor', to: 'sop' },
      ],
      steps: [
        { show: ['uci'], note: 'Tratamiento multimodal y simultáneo',
          say: 'Pasemos al tratamiento, que es lo que más se pregunta. Con cuarenta y cinco puntos o más, el paciente va a la UCI y se inicia un tratamiento multimodal. No es un fármaco: son cuatro pilares, y cada uno ataca un paso distinto.' },
        { show: ['bb'], note: 'Frenar al corazón primero',
          say: 'Pilar uno, el betabloqueo, para frenar el efecto adrenérgico sobre el corazón. Es la primera acción para controlar las taquiarritmias que pueden colapsar al paciente.' },
        { show: ['ptu'], note: 'Cerrar la fábrica',
          say: 'Pilar dos, el propiltiouracilo, que bloquea la síntesis de hormona nueva. Es cerrar la fábrica.' },
        { show: ['yod'], note: 'Cerrar la puerta de salida, pero después',
          say: 'Pilar tres, el yodo inorgánico, la solución de Lugol, que bloquea la liberación de la hormona que ya estaba fabricada. Es cerrar la puerta de salida. Y fíjate en la flecha: va al menos una hora después del PTU. Ese orden es la pregunta estrella del tema.' },
        { show: ['cor'], note: 'Proteger la suprarrenal',
          say: 'Pilar cuatro, la hidrocortisona endovenosa, cien miligramos cada ocho horas, que protege al paciente del agotamiento suprarrenal.' },
        { show: ['sop'], note: 'Sin tratar el gatillo, la tormenta no cede',
          say: 'Y alrededor de los cuatro pilares, el soporte: bajar la fiebre, reponer fluidos, y tratar el desencadenante. Veamos cada pieza en detalle.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilares 1 y 2',
      title: 'Betabloqueo y propiltiouracilo',
      cards: [
        { title: 'Propranolol', tag: 'Pilar 1', kind: 'pharma', items: [
          { t: '60 a 80 mg cada 4 a 6 horas', d: 'Oral o por sonda; o 1 a 2 mg EV lento',
            say: 'El propranolol va en dosis altas: sesenta a ochenta miligramos cada cuatro a seis horas por boca o por sonda, o uno a dos miligramos endovenosos lentos cada diez a quince minutos, con monitor.' },
          { t: 'Sobre 160 mg/día frena la conversión', d: 'Inhibe la desyodasa periférica',
            say: 'Y tiene un efecto extra: sobre ciento sesenta miligramos al día también frena la conversión periférica de T cuatro a T tres.' },
          { t: 'Broncoespasmo severo: esmolol o diltiazem', d: 'Si el no selectivo está contraindicado',
            say: 'Si el paciente tiene un broncoespasmo severo que contraindica un betabloqueador no selectivo, se usa esmolol en infusión o diltiazem.' },
        ] },
        { title: 'Propiltiouracilo', tag: 'Pilar 2', kind: 'pharma', items: [
          { t: 'Carga de 500 a 1000 mg', d: 'Luego 200 a 250 mg cada 4 horas',
            say: 'El propiltiouracilo se da con una carga de quinientos a mil miligramos, por boca o por sonda, y luego doscientos a doscientos cincuenta miligramos cada cuatro horas.' },
          { t: 'Preferido sobre el tiamazol', d: 'También bloquea la conversión de T4 a T3',
            say: '¿Por qué PTU y no tiamazol, si en todo lo demás preferimos el tiamazol? Porque además de bloquear la síntesis, el PTU frena la conversión de T cuatro a la forma más activa, la T tres. En la tormenta, eso es justamente lo que necesitas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La regla que más se pregunta',
      title: 'Primero el PTU, una hora después el yodo',
      nodes: [
        { id: 'yod', col: 0, row: 1, k: 'q', t: 'Yodo inorgánico', s: '¿Antes o después del PTU?' },
        { id: 'ant', col: 1, row: 0, k: 'trap', t: 'Yodo primero', s: 'La fábrica está abierta' },
        { id: 'sus', col: 2, row: 0, k: 'mech', t: 'Sustrato para más hormona', s: 'Fenómeno de Jod-Basedow' },
        { id: 'pe', col: 3, row: 0, k: 'risk', t: 'La tormenta empeora', s: 'Agravamiento catastrófico' },
        { id: 'des', col: 1, row: 2, k: 'good', t: 'PTU primero', s: 'Bloquea la peroxidasa' },
        { id: 'wc', col: 2, row: 2, k: 'mech', t: 'Lugol 1 hora después', s: 'Efecto Wolff-Chaikoff' },
        { id: 'ok', col: 3, row: 2, k: 'good', t: 'Se frena la liberación', s: 'Sin materia prima nueva' },
      ],
      edges: [
        { from: 'yod', to: 'ant', label: 'antes' },
        { from: 'ant', to: 'sus' },
        { from: 'sus', to: 'pe' },
        { from: 'yod', to: 'des', label: 'después' },
        { from: 'des', to: 'wc' },
        { from: 'wc', to: 'ok' },
      ],
      steps: [
        { show: ['yod'], note: 'El orden no es un detalle',
          say: 'Esta es la regla temporal que el examen pregunta una y otra vez. ¿Por qué el yodo tiene que ir después del PTU?' },
        { show: ['ant', 'sus'], note: 'Una glándula hiperactiva capta todo el yodo',
          say: 'Piensa en qué pasa si lo das primero. La glándula en tormenta está hiperactiva y capta con avidez todo el yodo que le llega. Si la fábrica sigue abierta, ese yodo se convierte en materia prima para fabricar todavía más hormona. Es el fenómeno de Jod-Basedow, el mismo de la amiodarona tipo uno.' },
        { show: ['pe'], note: 'Echar combustible al fuego',
          say: 'El resultado es un agravamiento catastrófico de la tormenta. Dar el yodo antes o al mismo tiempo que el PTU es echarle combustible al fuego.' },
        { show: ['des'], note: 'Primero se cierra la fábrica',
          say: 'Por eso el orden es al revés. Primero el PTU, que bloquea la peroxidasa tiroidea: la fábrica ya no puede usar el yodo.' },
        { show: ['wc'], note: 'Lugol 8 a 10 gotas cada 8 horas, o SSKI',
          say: 'Y al menos una hora después, el yodo: solución de Lugol, ocho a diez gotas cada ocho horas, o solución saturada de yoduro de potasio, cinco gotas cada seis horas. Ahora el yodo en dosis alta produce el efecto Wolff-Chaikoff.' },
        { show: ['ok'], note: 'PTU cierra la fábrica, el yodo cierra la puerta',
          say: 'Y frena la liberación de la hormona que ya estaba guardada, sin aportar materia prima nueva. En una frase: el PTU cierra la fábrica, y una hora después el yodo cierra la puerta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar 4',
      title: 'Hidrocortisona: por qué va siempre',
      cards: [
        { title: 'Dosis', tag: 'Endovenosa', kind: 'pharma', items: [
          { t: 'Hidrocortisona 100 mg EV cada 8 horas', d: 'O dexametasona 2 mg EV cada 6 horas',
            say: 'El cuarto pilar es el corticoide: hidrocortisona cien miligramos endovenosos cada ocho horas, o dexametasona dos miligramos cada seis horas.' },
        ] },
        { title: 'Fundamento', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Insuficiencia suprarrenal relativa', d: 'El hipermetabolismo consume el cortisol',
            say: '¿Por qué? Porque el hipermetabolismo acelera la degradación del cortisol, y la suprarrenal no alcanza a reponerlo. Es una insuficiencia suprarrenal relativa, y sin corticoide el paciente puede caer en un colapso hemodinámico.' },
          { t: 'Bloquea la conversión de T4 a T3', d: 'Y estabiliza el endotelio',
            say: 'Además, estabiliza el endotelio y bloquea con fuerza la conversión periférica de T cuatro a T tres. Fíjate que tres de los cuatro pilares frenan esa conversión: el propranolol en dosis altas, el PTU y el corticoide.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Soporte',
      title: 'Fiebre, fluidos y la aspirina prohibida',
      cards: [
        { title: 'Control de la fiebre', tag: 'Paracetamol', kind: 'pharma', items: [
          { t: 'Enfriamiento físico activo', d: 'Compresas frías, mantas enfriadoras',
            say: 'Vamos al soporte. La fiebre se controla con medidas físicas activas, como compresas frías o mantas enfriadoras.' },
          { t: 'Paracetamol 1 g cada 6 horas', d: 'Oral o endovenoso',
            say: 'Y el antipirético de elección es el paracetamol, un gramo cada seis horas, por boca o endovenoso.' },
        ] },
        { title: 'Contraindicación absoluta', tag: 'Nunca', kind: 'alert', items: [
          { t: 'Aspirina y salicilatos', d: 'Desplazan la T4 y la T3 de la TBG',
            say: 'Y aquí está la contraindicación que se pregunta: nunca aspirina ni otros salicilatos. La aspirina compite con la hormona tiroidea por sus proteínas transportadoras, la TBG y la prealbúmina, y la desplaza.' },
          { t: 'Sube la hormona libre', d: 'Puede precipitar el colapso',
            say: 'Resultado: sube de golpe la fracción libre, la que actúa, y eso puede precipitar un colapso hemodinámico letal. Conecta con lo que vimos al principio: la tormenta ya tiene más hormona libre; la aspirina le suma todavía más.' },
        ] },
        { title: 'Fluidos', tag: 'Reponer', kind: 'normal', items: [
          { t: 'Suero glucosado 5 % + fisiológico', d: 'Deshidratación y glucógeno agotado',
            say: 'Por último, fluidos: suero glucosado al cinco por ciento con suero fisiológico, para reponer lo que se pierde por sudor, taquipnea y diarrea, y el glucógeno hepático que el hipermetabolismo agotó.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Desencadenante y rescate',
      title: 'Tratar el gatillo, y qué hacer si no responde',
      cards: [
        { title: 'Buscar el gatillo', tag: 'Siempre', kind: 'key', items: [
          { t: 'Hemocultivos, urocultivo, radiografía de tórax', d: 'Y PCR',
            say: 'Toda tormenta obliga a buscar activamente una infección: hemocultivos, urocultivo, radiografía de tórax y PCR.' },
          { t: 'Antibióticos empíricos precoces', d: 'Si se sospecha foco séptico',
            say: 'Y si se sospecha un foco, antibióticos empíricos de inmediato. Si no tratas el gatillo, la tormenta no cede.' },
        ] },
        { title: 'Metas en UCI', tag: 'Soporte avanzado', kind: 'normal', items: [
          { t: 'PAM 65 o más, FC bajo 100', d: 'Cristaloides; norepinefrina si hay vasodilatación',
            say: 'En la UCI las metas son una presión arterial media de sesenta y cinco o más y una frecuencia cardíaca bajo cien, con cristaloides y norepinefrina si hay vasodilatación. Si hay edema pulmonar, ventilación no invasiva o intubación según corresponda.' },
        ] },
        { title: 'Refractario', tag: '24 a 48 horas', kind: 'alert', items: [
          { t: 'Plasmaféresis', d: 'Remueve hormona unida a proteínas',
            say: 'Y si a las veinticuatro a cuarenta y ocho horas no responde, o el PTU produjo falla hepática, se recurre a la plasmaféresis, que remueve la hormona unida a proteínas.' },
          { t: 'Tiroidectomía de salvataje', d: 'Urgencia extrema',
            say: 'O, en la urgencia extrema, a una tiroidectomía de salvataje.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol de rescate, en el orden en que lo vas a hacer.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que se pregunta de la tormenta',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sospecha clínica, BWPS ≥ 45', 'Tratar de inmediato en UCI', 'Esperar la T4L'],
          say: 'Repasemos las trampas. Sospecha clínica con cuarenta y cinco puntos o más: se trata de inmediato en la UCI. El error es esperar la T cuatro libre.' },
        { cells: ['Elegir la tionamida', 'Propiltiouracilo', 'Tiamazol'],
          say: 'La tionamida de elección es el propiltiouracilo, porque además frena la conversión periférica. El tiamazol es el distractor.' },
        { cells: ['Momento del Lugol', '≥ 1 hora después del PTU', 'Darlo antes o junto al PTU'],
          say: 'El Lugol va al menos una hora después del PTU. Darlo antes o junto al PTU alimenta la tormenta.' },
        { cells: ['Fiebre', 'Paracetamol + medidas físicas', 'Aspirina'],
          say: 'Para la fiebre: paracetamol y enfriamiento físico. La aspirina está prohibida.' },
        { cells: ['Corticoide', 'Hidrocortisona 100 mg EV c/8 h', 'Omitirlo'],
          say: 'Hidrocortisona siempre, por la insuficiencia suprarrenal relativa. Omitirla es un error.' },
        { cells: ['Desencadenante', 'Buscar infección + antibióticos', 'Tratar solo la tiroides'],
          say: 'Y el desencadenante se busca y se trata. Tratar solo la tiroides deja encendido el gatillo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 46 años con hipertiroidismo reciente, en tratamiento irregular con tiamazol, con 3 días de tos productiva. Llega soporosa, sudorosa, T° 39,8 °C, PA 85/50 mmHg, FC 152 lpm en fibrilación auricular. Bocio difuso con soplo, crepitaciones bibasales e ictericia leve. Burch-Wartofsky: 75 puntos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar T4 libre y T3 y esperar el resultado antes de iniciar tratamiento' },
        { letter: 'B', text: 'Traslado a UCI e inicio inmediato de tratamiento multimodal, más antibióticos para la neumonía' },
        { letter: 'C', text: 'Solicitar cintigrama tiroideo para confirmar la etiología' },
        { letter: 'D', text: 'Aumentar el tiamazol y controlar en 48 horas en sala' },
        { letter: 'E', text: 'Administrar radioyodo en dosis ablativa' },
      ],
      correct: 'B',
      explanation: 'Burch-Wartofsky de 75 puntos (≥ 45): tormenta tiroidea desencadenada por una neumonía. El diagnóstico es clínico y el tratamiento no se retrasa por exámenes: UCI, propranolol, PTU, Lugol 1 hora después del PTU, hidrocortisona EV, paracetamol y medidas físicas, reanimación y antibióticos empíricos.',
      say: {
        stem: 'Vamos al caso. Mujer de cuarenta y seis años, hipertiroidea, que toma el tiamazol de forma irregular, con tres días de tos productiva. Llega soporosa, sudorosa, con treinta y nueve coma ocho grados, hipotensa, con fibrilación auricular a ciento cincuenta y dos. Tiene bocio con soplo, crepitaciones en las bases e ictericia leve. La escala de Burch-Wartofsky da setenta y cinco puntos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: pedir hormonas y esperar el resultado, trasladar a UCI con tratamiento multimodal y antibióticos, pedir un cintigrama, subir el tiamazol y controlar en sala, o radioyodo. Piénsalo.',
        answer: 'Es la B. Setenta y cinco puntos es muy por encima de cuarenta y cinco: es una tormenta, y el gatillo es la neumonía. El distractor más tentador es la A, pedir hormonas y esperar, pero el diagnóstico es clínico, y la T cuatro libre no separa la tormenta de un hipertiroidismo común. Se trata ya, en la UCI, con los cuatro pilares, y con antibióticos para la neumonía, porque sin tratar el gatillo la tormenta no cede.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 50 años con hipertiroidismo de Graves no controlado consulta en urgencias por fiebre de 39,5 °C, agitación psicomotora, náuseas, vómitos profusos y palpitaciones. ECG: taquicardia sinusal a 145 lpm. Escala de Burch-Wartofsky: 60 puntos.',
      question: '¿Cuál de las siguientes secuencias y combinaciones de fármacos representa el manejo médico correcto?',
      options: [
        { letter: 'A', text: 'Ácido acetilsalicílico 1 g EV de inmediato, seguido de tiamazol 10 mg oral' },
        { letter: 'B', text: 'Propranolol, propiltiouracilo a dosis altas, hidrocortisona EV y solución de Lugol al menos una hora después del propiltiouracilo' },
        { letter: 'C', text: 'Solución de Lugol en bolo endovenoso inmediato y levotiroxina en infusión' },
        { letter: 'D', text: 'Tiroidectomía total de urgencia en los primeros 30 minutos sin fármacos previos' },
        { letter: 'E', text: 'Radioyodo a dosis máxima como terapia ablativa urgente' },
      ],
      correct: 'B',
      explanation: 'Tratamiento multimodal: betabloqueo, PTU (bloquea síntesis y conversión periférica), hidrocortisona EV (insuficiencia suprarrenal relativa) y Lugol diferido al menos 1 hora tras el PTU para evitar el efecto Jod-Basedow. Los salicilatos están contraindicados.',
      say: {
        stem: 'Ahora preguntas del banco EUNACOM, porque este tema no tiene preguntas reales fechadas en el banco. La primera: mujer de cincuenta años con Graves no controlado, con fiebre de treinta y nueve y medio, agitación, vómitos profusos y taquicardia de ciento cuarenta y cinco. Burch-Wartofsky de sesenta puntos.',
        question: '¿Qué secuencia de fármacos es la correcta?',
        options: 'Las opciones: aspirina seguida de tiamazol, los cuatro pilares con el Lugol una hora después del PTU, Lugol en bolo con levotiroxina, tiroidectomía inmediata sin fármacos, o radioyodo. Piénsalo.',
        answer: 'Es la B, los cuatro pilares con el orden correcto. Mira cómo caen las demás: la A tiene aspirina, que está prohibida; la C da el yodo primero, y encima levotiroxina, que es echar más hormona; la D opera a un paciente tirotóxico sin preparar, que es justamente un gatillo de tormenta; y el radioyodo no tiene papel en la urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'En un paciente cursando una tormenta tiroidea con hipertermia de 40,2 °C y compromiso sensorial en la unidad de cuidados intensivos, el residente de turno planea indicar un antipirético.',
      question: '¿Cuál de los siguientes antipiréticos está formalmente contraindicado por el riesgo de aumentar la hormona tiroidea libre?',
      options: [
        { letter: 'A', text: 'Paracetamol' },
        { letter: 'B', text: 'Dipirona (metamizol)' },
        { letter: 'C', text: 'Ácido acetilsalicílico (aspirina)' },
        { letter: 'D', text: 'Ibuprofeno' },
        { letter: 'E', text: 'Ketorolaco' },
      ],
      correct: 'C',
      explanation: 'Los salicilatos desplazan a la T4 y la T3 de la TBG y la transtiretina, aumentando bruscamente la fracción libre y agravando la tormenta. El antipirético de elección es el paracetamol con medidas físicas.',
      say: {
        stem: 'La siguiente. Paciente en tormenta tiroidea, en la UCI, con cuarenta coma dos grados y compromiso de conciencia. El residente quiere indicar un antipirético.',
        question: '¿Cuál está formalmente contraindicado por el riesgo de subir la hormona libre?',
        options: 'Las opciones: paracetamol, metamizol, aspirina, ibuprofeno, o ketorolaco. Piénsalo.',
        answer: 'Es la C, la aspirina. Desplaza a la hormona tiroidea de sus proteínas transportadoras y sube de golpe la fracción libre, justo lo que la tormenta ya tiene de más. El paracetamol, en cambio, es el antipirético de elección, junto al enfriamiento físico. Esta pregunta se responde en segundos si recuerdas una sola palabra: aspirina, nunca.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 45 años con enfermedad de Graves en abandono de tratamiento ingresa a urgencias con shock distributivo, agitación extrema, diaforesis, ictericia y fibrilación auricular rápida a 160 lpm. Burch-Wartofsky: 65 puntos.',
      question: '¿Cuál es el fundamento fisiopatológico principal para administrar hidrocortisona endovenosa en el esquema inicial?',
      options: [
        { letter: 'A', text: 'Tratar la insuficiencia suprarrenal relativa por metabolismo acelerado del cortisol y frenar la conversión periférica de T4 a T3' },
        { letter: 'B', text: 'Inducir inmunosupresión inmediata de los TRAb en menos de 2 horas' },
        { letter: 'C', text: 'Elevar la TSH hipofisaria y restablecer el asa de retroalimentación' },
        { letter: 'D', text: 'Favorecer la captación folicular de yodo inorgánico' },
        { letter: 'E', text: 'Evitar la hipoglicemia provocada por el propiltiouracilo' },
      ],
      correct: 'A',
      explanation: 'El hipermetabolismo acelera la degradación del cortisol y supera la reserva suprarrenal (insuficiencia suprarrenal relativa). La hidrocortisona a dosis de estrés previene el colapso hemodinámico y además inhibe la desyodasa periférica, frenando la conversión de T4 a T3.',
      say: {
        stem: 'Y la última. Hombre de cuarenta y cinco años con Graves, que abandonó el tratamiento, llega en shock, agitado, sudoroso, ictérico y con fibrilación auricular a ciento sesenta. Burch-Wartofsky de sesenta y cinco.',
        question: '¿Cuál es el fundamento principal para dar hidrocortisona endovenosa?',
        options: 'Las opciones: tratar la insuficiencia suprarrenal relativa y frenar la conversión de T cuatro a T tres, inmunosuprimir los anticuerpos, subir la TSH, favorecer la captación de yodo, o evitar la hipoglicemia del PTU. Piénsalo.',
        answer: 'Es la A. El hipermetabolismo consume el cortisol más rápido de lo que la suprarrenal lo fabrica, y este paciente en shock es exactamente el que colapsa sin corticoide. Además, frena la conversión a T tres. La B suena lógica porque Graves es autoinmune, pero el corticoide no apaga los anticuerpos en dos horas; su papel en la urgencia es otro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Burch-Wartofsky 45 o más', d: 'Tratar sin esperar exámenes',
            say: 'Cerremos con las reglas de oro. La tormenta es un diagnóstico clínico: con cuarenta y cinco puntos o más, se trata sin esperar exámenes.' },
          { t: 'La define la falla de órganos', d: 'No el nivel de T4L',
            say: 'Lo que la define es la falla de órganos, no el nivel de T cuatro libre.' },
        ] },
        { title: 'Tratamiento', tag: 'Cuatro pilares', kind: 'pharma', items: [
          { t: 'Propranolol + PTU + Lugol + hidrocortisona', d: 'Más soporte y tratar el gatillo',
            say: 'El tratamiento son cuatro pilares: propranolol, propiltiouracilo, Lugol e hidrocortisona, más soporte y el tratamiento del gatillo.' },
          { t: 'Lugol al menos 1 hora después del PTU', d: 'Si no, Jod-Basedow',
            say: 'El Lugol va al menos una hora después del PTU.' },
        ] },
        { title: 'Prohibido', tag: 'Nunca', kind: 'alert', items: [
          { t: 'Aspirina', d: 'Paracetamol + medidas físicas',
            say: 'Y la fiebre se baja con paracetamol, nunca con aspirina. Si te llevas una sola idea de hoy: primero se cierra la fábrica con el PTU, y una hora después se cierra la puerta con el yodo. Con esto cerramos el bloque de hipertiroidismo; en la próxima clase entramos al nódulo tiroideo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tormenta tiroidea: rescate en orden',
    root: N('start', 'Tirotoxicosis con falla de órganos', 'Fiebre, SNC, corazón, ictericia',
      'Paciente hipertiroideo con fiebre, compromiso de conciencia, taquicardia o falla cardíaca. Lo primero es calcular la escala, sin esperar exámenes.',
      ['', N('q', 'Burch-Wartofsky', '¿Cuántos puntos?',
        '¿Cuántos puntos suma en la escala de Burch-Wartofsky?',
        ['Menos de 25', N('ok', 'Tormenta improbable', 'Hipertiroidismo no complicado',
          'Bajo veinticinco, la tormenta es improbable: se maneja como un hipertiroidismo no complicado.')],
        ['25 a 44', N('refer', 'Tormenta inminente', 'Vigilancia estrecha y tratamiento',
          'Entre veinticinco y cuarenta y cuatro, la tormenta es inminente: vigilancia estrecha y tratamiento, porque puede progresar.')],
        ['45 o más', N('alert', 'UCI: cuatro pilares', 'Tratamiento multimodal inmediato',
          'Con cuarenta y cinco o más, tormenta altamente probable: UCI e inicio inmediato del tratamiento, en este orden.',
          ['Primero', N('do', 'Propranolol + PTU + hidrocortisona', 'De inmediato',
            'De inmediato: propranolol en dosis altas, propiltiouracilo con dosis de carga, e hidrocortisona endovenosa.')],
          ['1 hora después', N('do', 'Lugol', 'Nunca antes del PTU',
            'Al menos una hora después del PTU, la solución de Lugol, para frenar la liberación.')],
          ['En paralelo', N('do', 'Paracetamol, fluidos, antibióticos', 'Nunca aspirina',
            'En paralelo: paracetamol y enfriamiento físico, nunca aspirina; fluidos con glucosa; y búsqueda y tratamiento del gatillo.')],
          ['Sin respuesta en 24 a 48 h', N('refer', 'Plasmaféresis o tiroidectomía', 'Salvataje',
            'Si no responde en veinticuatro a cuarenta y ocho horas, o hay falla hepática por el PTU: plasmaféresis o tiroidectomía de salvataje.')])])]),
  },
};
