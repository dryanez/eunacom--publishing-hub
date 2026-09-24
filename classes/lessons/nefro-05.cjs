// Clase 2.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Confirmar que es hipotónica, tratar la urgencia y no corregir de más',
      say: 'Bienvenidos. Hoy abrimos el bloque de trastornos del sodio y del agua con la hiponatremia, el trastorno electrolítico más común en el paciente hospitalizado. En el examen se pregunta una y otra vez lo mismo: cuándo dar suero hipertónico al tres por ciento, y qué tan rápido se puede subir el sodio sin dañar el cerebro. Si en las clases de injuria renal aprendiste a leer el sodio urinario, hoy lo vas a usar de nuevo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Es un problema de agua, no de sodio',
      nodes: [
        { id: 'agu', col: 0, row: 1, k: 'cause', t: 'Exceso relativo de agua libre', s: 'Más que un déficit de sodio' },
        { id: 'hip', col: 1, row: 1, k: 'mech', t: 'Plasma hipotónico', s: 'El agua entra a las neuronas' },
        { id: 'ede', col: 2, row: 0, k: 'alert', t: 'Edema cerebral', s: 'Si se instala en menos de 48 h' },
        { id: 'ada', col: 2, row: 2, k: 'good', t: 'El cerebro se adapta', s: 'Expulsa osmolitos en 48 h' },
        { id: 'rap', col: 3, row: 2, k: 'trap', t: 'Corrección demasiado rápida', s: 'El plasma se hipertoniza de golpe' },
        { id: 'sdo', col: 4, row: 2, k: 'risk', t: 'Desmielinización osmótica', s: 'Mielinolisis pontina central' },
      ],
      edges: [
        { from: 'agu', to: 'hip' }, { from: 'hip', to: 'ede', label: 'aguda' },
        { from: 'hip', to: 'ada', label: 'crónica' }, { from: 'ada', to: 'rap', label: 'si se corrige rápido' },
        { from: 'rap', to: 'sdo' },
      ],
      steps: [
        { show: ['agu'], note: 'Sobra agua respecto del sodio',
          say: 'Partamos por una idea que ordena todo el tema. La hiponatremia casi nunca es un problema de falta de sodio: es un problema de agua. Sobra agua libre en relación con el sodio que hay en el cuerpo.' },
        { show: ['hip'], note: 'El agua sigue al gradiente osmótico',
          say: 'Ese exceso de agua deja al plasma hipotónico. Y como el agua se mueve hacia donde hay más solutos, entra a las células. La célula que más nos preocupa es la neurona, porque vive dentro de una caja rígida: el cráneo.' },
        { show: ['ede'], note: 'Hiponatremia aguda: el cerebro no alcanza a adaptarse',
          say: 'Si la hiponatremia se instala rápido, en menos de cuarenta y ocho horas, la neurona se hincha y aparece el edema cerebral. Ese es el paciente que convulsiona o cae en coma, y el que tiene riesgo de enclavamiento.' },
        { show: ['ada'], note: 'Hiponatremia crónica: el cerebro expulsa osmolitos',
          say: 'Pero si la hiponatremia se instala lento, el cerebro se defiende. En unas cuarenta y ocho horas saca de sus células osmolitos orgánicos, como el mioinositol, la taurina y el glutamato, y así deja de hincharse. Por eso la hiponatremia crónica puede dar muy pocos síntomas.' },
        { show: ['rap', 'sdo'], note: 'La adaptación se vuelve el peligro al corregir',
          say: 'Y aquí está la trampa del tema. Ese cerebro adaptado ya no tiene osmolitos. Si subes el sodio muy rápido, el plasma se vuelve hipertónico de golpe, le saca agua a los oligodendrocitos y destruye la mielina del puente. Eso es la desmielinización osmótica. Guarda esta idea, porque decide la velocidad de corrección.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Primer paso',
      title: 'Antes de tratar: ¿es realmente hipotónica?',
      nodes: [
        { id: 'na', col: 0, row: 1, k: 'start', t: 'Sodio menor de 135', s: 'mEq/L' },
        { id: 'osm', col: 1, row: 1, k: 'q', t: 'Osmolaridad plasmática', s: '2 × Na + glicemia / 18' },
        { id: 'nor', col: 2, row: 0, k: 'trap', t: 'Normal: 280 a 295', s: 'Pseudohiponatremia: triglicéridos, mieloma' },
        { id: 'alt', col: 2, row: 1, k: 'effect', t: 'Alta: más de 295', s: 'Hiperglicemia arrastra agua' },
        { id: 'baj', col: 2, row: 2, k: 'good', t: 'Baja: menos de 275', s: 'Hiponatremia hipotónica verdadera' },
        { id: 'cor', col: 3, row: 1, k: 'mech', t: 'Corregir por glicemia', s: '+1,6 a 2 por cada 100 sobre 100' },
      ],
      edges: [
        { from: 'na', to: 'osm' }, { from: 'osm', to: 'nor' }, { from: 'osm', to: 'alt' },
        { from: 'osm', to: 'baj' }, { from: 'alt', to: 'cor' },
      ],
      steps: [
        { show: ['na', 'osm'], note: 'Siempre mirar la osmolaridad primero',
          say: 'Frente a un sodio bajo ciento treinta y cinco, el primer paso no es tratar: es calcular o medir la osmolaridad plasmática. Se estima con dos veces el sodio más la glicemia dividida por dieciocho.' },
        { show: ['nor'], note: 'Osmolaridad normal: error de medición',
          say: 'Si la osmolaridad es normal, entre doscientos ochenta y doscientos noventa y cinco, no hay un problema de agua. Es una pseudohiponatremia, un artefacto de laboratorio por triglicéridos muy altos o por exceso de proteínas, como en el mieloma múltiple. No se trata el sodio.' },
        { show: ['alt', 'cor'], note: 'Osmolaridad alta: la glucosa saca agua de las células',
          say: 'Si la osmolaridad está alta, sobre doscientos noventa y cinco, hay otro soluto que arrastra agua al plasma y diluye el sodio. El clásico es la hiperglicemia. Para saber el sodio real, se suma uno coma seis a dos miliequivalentes por cada cien de glicemia sobre cien.' },
        { show: ['baj'], note: 'Solo la hipotónica es hiponatremia verdadera',
          say: 'Y si la osmolaridad está baja, menos de doscientos setenta y cinco, recién ahí tienes una hiponatremia hipotónica verdadera. Esa es la que se estudia y se trata, y es la que vamos a ver el resto de la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Dos preguntas: ¿desde cuándo? y ¿cuánto?',
      cards: [
        { title: 'Tiempo de evolución', tag: 'Define el riesgo', kind: 'key', items: [
          { t: 'Aguda: menos de 48 horas', d: 'El cerebro no alcanzó a adaptarse',
            say: 'Una vez confirmada la hipotónica, la clasificas con dos preguntas. La primera es el tiempo. Aguda es la de menos de cuarenta y ocho horas: el cerebro no alcanzó a adaptarse, y el riesgo es el edema.' },
          { t: 'Crónica: 48 horas o más', d: 'O de duración desconocida',
            say: 'Crónica es la de cuarenta y ocho horas o más. Y ojo con este detalle: si no sabes cuándo empezó, la tratas como crónica. En la crónica el riesgo cambia de lado: el peligro es corregir demasiado rápido.' },
        ] },
        { title: 'Severidad bioquímica', tag: 'En mEq/L', kind: 'criteria', items: [
          { t: 'Leve: 130 a 134', d: 'Moderada: 125 a 129',
            say: 'La segunda pregunta es cuánto. Leve, entre ciento treinta y ciento treinta y cuatro. Moderada, entre ciento veinticinco y ciento veintinueve.' },
          { t: 'Severa: menor de 125', d: 'Pero la urgencia la definen los síntomas',
            say: 'Y severa, bajo ciento veinticinco. Pero fíjate: lo que define la urgencia no es el número, son los síntomas neurológicos. Un paciente con ciento dieciocho que conversa no es lo mismo que uno con ciento veinticuatro que convulsiona.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etiología',
      title: 'La volemia y el sodio urinario dan la causa',
      nodes: [
        { id: 'vec', col: 0, row: 2, k: 'q', t: '¿Cómo está el volumen?', s: 'Examen físico' },
        { id: 'hpo', col: 1, row: 0, k: 'cause', t: 'Hipovolémica', s: 'Mucosas secas, ortostatismo' },
        { id: 'ext', col: 2, row: 0, k: 'effect', t: 'Sodio urinario menor de 20', s: 'Vómitos, diarrea, tercer espacio' },
        { id: 'ren', col: 3, row: 0, k: 'effect', t: 'Sodio urinario mayor de 20', s: 'Tiazidas, Addison, nefropatía pierde sal' },
        { id: 'euv', col: 1, row: 2, k: 'cause', t: 'Euvolémica', s: 'Sin edema ni deshidratación' },
        { id: 'eu2', col: 2, row: 2, k: 'effect', t: 'SIADH, hipotiroidismo severo', s: 'Insuficiencia suprarrenal secundaria' },
        { id: 'pol', col: 3, row: 2, k: 'effect', t: 'Polidipsia o cerveza', s: 'Osm urinaria menor de 100' },
        { id: 'hpe', col: 1, row: 4, k: 'cause', t: 'Hipervolémica', s: 'Edema o ascitis' },
        { id: 'edm', col: 2, row: 4, k: 'effect', t: 'Insuficiencia cardíaca, cirrosis, nefrótico', s: 'Sodio urinario menor de 20' },
      ],
      edges: [
        { from: 'vec', to: 'hpo' }, { from: 'hpo', to: 'ext', label: 'extrarrenal' }, { from: 'hpo', to: 'ren', label: 'renal' },
        { from: 'vec', to: 'euv' }, { from: 'euv', to: 'eu2' }, { from: 'euv', to: 'pol' },
        { from: 'vec', to: 'hpe' }, { from: 'hpe', to: 'edm' },
      ],
      steps: [
        { show: ['vec'], note: 'El examen físico decide la rama',
          say: 'Ahora, la causa. Aquí la herramienta es el examen físico: ¿cómo está el volumen extracelular? Hipovolémico, euvolémico o hipervolémico. Y después, como en la injuria renal, el sodio urinario te dice dónde está el problema.' },
        { show: ['hpo', 'ext'], note: 'Riñón que ahorra sodio: la pérdida es afuera',
          say: 'El paciente hipovolémico tiene mucosas secas y ortostatismo. Si su sodio urinario es menor de veinte, el riñón está ahorrando sodio como debe, así que la pérdida es extrarrenal: vómitos, diarrea o tercer espacio.' },
        { show: ['ren'], note: 'Riñón que pierde sodio pese a la hipovolemia',
          say: 'Si con esa misma hipovolemia el sodio urinario es mayor de veinte, el que pierde sodio es el riñón. Las causas son los diuréticos tiazídicos, el déficit de mineralocorticoides, como en la enfermedad de Addison, y la nefropatía perdedora de sal.' },
        { show: ['euv', 'eu2'], note: 'Euvolemia: pensar en SIADH',
          say: 'El paciente euvolémico no tiene edema ni signos de deshidratación. Aquí la causa principal es el síndrome de secreción inapropiada de hormona antidiurética, el SIADH, con sodio urinario sobre cuarenta y orina concentrada. Antes de decir SIADH, descarta el hipotiroidismo severo y la insuficiencia suprarrenal secundaria.' },
        { show: ['pol'], note: 'Orina máximamente diluida',
          say: 'En la misma rama está la polidipsia psicógena y el bebedor de cerveza. La diferencia con el SIADH está en la orina: aquí está máximamente diluida, con osmolaridad urinaria bajo cien y sodio urinario bajo veinte. Este contraste lo profundizamos en la próxima clase.' },
        { show: ['hpe', 'edm'], note: 'Edematoso con sodio urinario bajo',
          say: 'Y el hipervolémico tiene edema o ascitis: insuficiencia cardíaca, cirrosis o síndrome nefrótico. Aunque le sobra agua y sodio, su volumen arterial efectivo está bajo, y por eso el riñón retiene sodio: el sodio urinario es menor de veinte. Esto conecta con lo que vimos en síndrome cardiorrenal y hepatorrenal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas frecuentes',
      title: 'Las causas que el examen pone en el caso',
      cards: [
        { title: 'Diuréticos tiazídicos', tag: 'La causa farmacológica clásica', kind: 'pharma', items: [
          { t: 'Actúan en el túbulo distal', d: 'Bloquean el segmento que diluye la orina',
            say: 'Veamos las causas que más aparecen en los casos. La primera, las tiazidas, como la hidroclorotiazida. Actúan en el túbulo contorneado distal, que es justamente el segmento que diluye la orina. Si lo bloqueas, el riñón pierde la capacidad de eliminar agua libre.' },
          { t: 'La médula sigue concentrando', d: 'A diferencia de la furosemida',
            say: '¿Y por qué dan más hiponatremia que la furosemida? Porque la tiazida no toca el asa de Henle, entonces la médula sigue concentrada y la hormona antidiurética sigue reabsorbiendo agua. La furosemida, en cambio, borra ese gradiente. Por eso las tiazidas son la causa farmacológica más frecuente de hiponatremia grave.' },
        ] },
        { title: 'Fármacos que causan SIADH', tag: 'Euvolemia', kind: 'alert', items: [
          { t: 'ISRS y carbamazepina', d: 'Sertralina, citalopram',
            say: 'La segunda son los fármacos que producen SIADH: los inhibidores selectivos de la recaptura de serotonina, como la sertralina y el citalopram, y la carbamazepina.' },
          { t: 'Tiazida más ISRS', d: 'Combinación típica en la adulta mayor',
            say: 'Y la combinación que más se repite es la adulta mayor hipertensa y deprimida, que toma una tiazida y un ISRS al mismo tiempo. Dos mecanismos que suman.' },
        ] },
        { title: 'Cáncer pulmonar microcítico', tag: 'Paraneoplásico', kind: 'key', items: [
          { t: 'Fumador con hiponatremia', d: 'Secreción ectópica de hormona antidiurética',
            say: 'Y la tercera es el cáncer pulmonar de células pequeñas, que fabrica hormona antidiurética por su cuenta. Fumador, hiponatremia y confusión: piensa en SIADH paraneoplásico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Hiponatremia con síntomas graves: suero al 3%',
      nodes: [
        { id: 'sin', col: 0, row: 1, k: 'alert', t: 'Convulsiones, estupor o coma', s: 'También bradipnea' },
        { id: 'ede', col: 1, row: 1, k: 'mech', t: 'Edema cerebral', s: 'Riesgo de enclavamiento' },
        { id: 'bol', col: 2, row: 1, k: 'good', t: 'NaCl 3%: 100 a 150 mL', s: 'En bolo de 10 a 20 minutos' },
        { id: 'rep', col: 3, row: 0, k: 'refer', t: 'Repetir hasta 2 veces más', s: 'Cada 20 a 30 min si persiste' },
        { id: 'met', col: 3, row: 2, k: 'good', t: 'Meta: subir 4 a 6 mEq/L', s: 'Basta para revertir el edema' },
      ],
      edges: [
        { from: 'sin', to: 'ede' }, { from: 'ede', to: 'bol' },
        { from: 'bol', to: 'rep', label: 'si persisten' }, { from: 'bol', to: 'met' },
      ],
      steps: [
        { show: ['sin'], note: 'Estos síntomas son una emergencia vital',
          say: 'Pasemos a la urgencia, que es lo más preguntado. Convulsiones, estupor, coma, somnolencia profunda o bradipnea. Con cualquiera de estos síntomas, la hiponatremia es una emergencia vital.' },
        { show: ['ede'], note: 'El problema es el cerebro hinchado',
          say: '¿Por qué? Por lo que vimos al principio: el cerebro está hinchado dentro del cráneo, y el riesgo es el enclavamiento.' },
        { show: ['bol'], note: 'No es suero fisiológico: es hipertónico',
          say: 'La conducta es inmediata: bolo de suero salino hipertónico al tres por ciento, de cien a ciento cincuenta mililitros, en diez a veinte minutos. Fíjate que no es suero fisiológico. Es hipertónico, porque necesitas sacar agua del cerebro rápido.' },
        { show: ['rep'], note: 'Se puede repetir si el paciente sigue convulsionando',
          say: 'Si los síntomas persisten, el bolo se repite hasta dos veces más, cada veinte a treinta minutos.' },
        { show: ['met'], note: 'Una subida pequeña basta',
          say: 'Y la meta es modesta: subir el sodio cuatro a seis miliequivalentes por litro. No buscas normalizarlo. Esa pequeña subida basta para reducir el edema y cortar las convulsiones. Lo que viene después ya es corrección lenta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Velocidad de corrección',
      title: 'El límite que no se cruza',
      cards: [
        { title: 'Riesgo estándar', tag: 'Hiponatremia crónica', kind: 'criteria', items: [
          { t: 'Máximo 8 a 10 mEq/L en 24 h', d: 'Y no más de 18 en 48 horas',
            say: 'Ahora, el número que tienes que saber de memoria. En la hiponatremia crónica, el sodio no debe subir más de ocho a diez miliequivalentes por litro en las primeras veinticuatro horas, ni más de dieciocho en cuarenta y ocho horas.' },
          { t: 'Natremia cada 4 a 6 horas', d: 'Para detectar a tiempo la sobrecorrección',
            say: 'Y para cumplirlo no basta con calcular: hay que medir. Se controla la natremia cada cuatro a seis horas.' },
        ] },
        { title: 'Alto riesgo de desmielinización', tag: 'Límite más estricto', kind: 'alert', items: [
          { t: 'Máximo 6 a 8 mEq/L en 24 h', d: 'En los pacientes más frágiles',
            say: 'En algunos pacientes el límite es todavía más estricto: seis a ocho miliequivalentes en veinticuatro horas.' },
          { t: 'Alcohol, desnutrición, cirrosis', d: 'Hipokalemia o sodio basal menor de 105',
            say: '¿Quiénes son? El alcohólico crónico, el desnutrido severo, el cirrótico avanzado, el que tiene hipokalemia, y el que parte con un sodio menor de ciento cinco. Si en el caso aparece uno de ellos, busca la alternativa con el límite más bajo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación',
      title: 'Síndrome de desmielinización osmótica',
      nodes: [
        { id: 'rap', col: 0, row: 1, k: 'cause', t: 'Corrección demasiado rápida', s: 'Sobre el límite de 24 h' },
        { id: 'oli', col: 1, row: 1, k: 'mech', t: 'Oligodendrocitos deshidratados', s: 'Se destruye la mielina del puente' },
        { id: 'cli', col: 2, row: 1, k: 'risk', t: 'Días 2 a 6', s: 'Disartria, disfagia, cuadriparesia' },
        { id: 'loc', col: 3, row: 1, k: 'risk', t: 'Enclaustramiento', s: 'Irreversible' },
        { id: 'sob', col: 1, row: 3, k: 'alert', t: 'Sobrecorrección detectada', s: 'Poliuria acuosa tras suero' },
        { id: 'res', col: 2, row: 3, k: 'good', t: 'SG 5% + desmopresina', s: '3–5 mL/kg/h · DDAVP 1–2 mcg c/6–8 h' },
      ],
      edges: [
        { from: 'rap', to: 'oli' }, { from: 'oli', to: 'cli' }, { from: 'cli', to: 'loc' },
        { from: 'sob', to: 'res', label: 're-descender' },
      ],
      steps: [
        { show: ['rap', 'oli'], note: 'Retomamos la conexión del inicio',
          say: 'Volvamos a la conexión que dejamos pendiente. Si el sodio sube más rápido que el límite, el plasma se hipertoniza bruscamente y deshidrata a los oligodendrocitos, que pierden la mielina, sobre todo en el puente. Eso es la mielinolisis pontina central.' },
        { show: ['cli'], note: 'Aparece días después: el paciente parecía mejorar',
          say: 'Lo traicionero es que no aparece de inmediato. El paciente mejora con la corrección, y dos a seis días después aparece disartria, disfagia, compromiso de conciencia y cuadriparesia.' },
        { show: ['loc'], note: 'El daño es irreversible',
          say: 'En su forma más grave, el síndrome de enclaustramiento: el paciente está despierto pero no puede moverse ni hablar. Y es irreversible. Por eso la velocidad de corrección se pregunta tanto.' },
        { show: ['sob'], note: 'Típico: hipovolémico que recibe suero fisiológico',
          say: '¿Cómo ocurre la sobrecorrección accidental? El caso típico es el hipovolémico que recibe suero fisiológico. Al recuperar el volumen se apaga de golpe la hormona antidiurética, el riñón elimina agua a chorros y el sodio se dispara.' },
        { show: ['res'], note: 'Frenar y volver a bajar el sodio',
          say: 'Si eso pasa, hay que frenar y volver a bajar el sodio. Se suspende el suero salino, se infunde suero glucosado al cinco por ciento, a tres a cinco mililitros por kilo por hora, y se agrega desmopresina, uno a dos microgramos cada seis a ocho horas, para que el riñón vuelva a retener agua.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo sin urgencia',
      title: 'Paciente asintomático: se trata según la volemia',
      cards: [
        { title: 'Tratamiento por volemia', tag: 'Sin síntomas graves', kind: 'pharma', items: [
          { t: 'Hipovolémico: suero fisiológico 0,9%', d: 'Restaurar la perfusión',
            say: 'Si el paciente no tiene síntomas graves, no hay suero hipertónico: se trata la causa según la volemia. El hipovolémico recibe suero fisiológico al cero coma nueve por ciento, para restaurar la perfusión. Y ya sabes que hay que vigilar la sobrecorrección.' },
          { t: 'SIADH: restricción hídrica', d: 'Menos de 800 a 1000 mL al día, más NaCl oral',
            say: 'El SIADH se trata con restricción de líquidos libres, bajo ochocientos a mil mililitros al día, más cápsulas de cloruro de sodio o furosemida.' },
          { t: 'Edematoso: restricción + furosemida', d: 'Insuficiencia cardíaca y cirrosis',
            say: 'Y el edematoso, con insuficiencia cardíaca o cirrosis, se trata con restricción hídrica y diurético de asa, la furosemida, que obliga a eliminar agua libre.' },
        ] },
        { title: 'Fórmula de Adrogué-Madias', tag: 'Cuánto sube con 1 litro', kind: 'criteria', items: [
          { t: 'ΔNa = (Na sol − Na actual) / (ACT + 1)', d: 'Estima el cambio con 1 litro',
            say: 'Para calcular cuánto va a subir el sodio con un litro de una solución, se usa la fórmula de Adrogué-Madias: el sodio de la solución menos el sodio actual, dividido por el agua corporal total más uno.' },
          { t: 'NaCl 3%: 513 · SF 0,9%: 154', d: 'mEq de sodio por litro',
            say: 'Los datos que necesitas: un litro de suero al tres por ciento aporta quinientos trece miliequivalentes de sodio, y un litro de suero fisiológico, ciento cincuenta y cuatro.' },
          { t: 'ACT: 0,6 × peso en hombres', d: '0,5 × peso en mujeres y ancianos',
            say: 'Y el agua corporal total se estima como cero coma seis por el peso en los hombres, y cero coma cinco por el peso en mujeres y ancianos.' },
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
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hiponatremia con convulsiones', 'Bolo de NaCl 3%, 100–150 mL', 'Suero fisiológico o restricción hídrica'],
          say: 'Repasemos las trampas. Hiponatremia con convulsiones: bolo de suero hipertónico al tres por ciento. El error es dar suero fisiológico, o indicar solo restricción hídrica en un paciente que convulsiona.' },
        { cells: ['Sodio bajo con osmolaridad normal', 'Pseudohiponatremia: no tratar', 'Dar suero hipertónico'],
          say: 'Sodio bajo con osmolaridad normal: es una pseudohiponatremia. El error es tratar un número que no es real.' },
        { cells: ['Hiponatremia crónica', 'Máximo 8–10 mEq/L en 24 h', 'Normalizar el sodio el primer día'],
          say: 'Hiponatremia crónica: no más de ocho a diez en veinticuatro horas. El error es intentar normalizar el sodio el primer día.' },
        { cells: ['Alcohólico o desnutrido', 'Máximo 6–8 mEq/L en 24 h', 'Usar el límite estándar'],
          say: 'Alcohólico o desnutrido: el límite baja a seis a ocho. El error es aplicarle el límite estándar.' },
        { cells: ['Sobrecorrección accidental', 'SG 5% + desmopresina', 'Solo suspender el suero y esperar'],
          say: 'Sobrecorrección accidental: suero glucosado más desmopresina para volver a bajar el sodio. Quedarse esperando no basta.' },
        { cells: ['Euvolémico, Na urinario mayor de 40', 'SIADH: restricción hídrica', 'Hidratar con suero fisiológico'],
          say: 'Y el euvolémico con sodio urinario alto es un SIADH: se restringe el agua. Hidratarlo con suero fisiológico puede bajar todavía más el sodio.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 74 años, hipertensa y deprimida, en tratamiento con hidroclorotiazida 25 mg/día y citalopram 20 mg/día. Hace 30 minutos tuvo una convulsión tónico-clónica generalizada. Está en sopor moderado, PA 135/85 mmHg, sin deshidratación ni edema. Glicemia 98 mg/dL, Na 112 mEq/L, K 3,6 mEq/L, Osm plasmática 232 mOsm/kg. Na urinario 68 mEq/L, Osm urinaria 410 mOsm/kg.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Restricción hídrica a 800 mL/día y suspender los fármacos' },
        { letter: 'B', text: 'Suero fisiológico 0,9% a 250 mL/hora' },
        { letter: 'C', text: 'Bolo de NaCl 3%, 100 a 150 mL en 20 minutos' },
        { letter: 'D', text: 'Furosemida 40 mg intravenosa' },
        { letter: 'E', text: 'NaCl 3% hasta normalizar el sodio en 24 horas' },
      ],
      correct: 'C',
      explanation: 'Hiponatremia hipotónica euvolémica grave (tiazida + ISRS) con convulsión: encefalopatía hiponatrémica. Se indica bolo de NaCl 3% para subir el sodio 4–6 mEq/L y revertir el edema cerebral. La restricción hídrica es para el SIADH asintomático. Normalizar el sodio en 24 horas supera el límite de 8–10 mEq/L y arriesga desmielinización osmótica.',
      say: {
        stem: 'Vamos con un caso. Mujer de setenta y cuatro años, hipertensa y deprimida, que toma hidroclorotiazida y citalopram. Hace media hora tuvo una convulsión generalizada y ahora está en sopor, sin deshidratación ni edema. Su sodio es ciento doce, con osmolaridad plasmática baja, sodio urinario de sesenta y ocho y orina concentrada.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las alternativas: restricción hídrica, suero fisiológico, bolo de suero al tres por ciento, furosemida, o suero al tres por ciento hasta normalizar el sodio en un día. Piénsalo.',
        answer: 'Es la C. Hiponatremia hipotónica, euvolémica, con dos causas que suman: la tiazida y el citalopram. Pero lo que decide la conducta es la convulsión: eso es edema cerebral, y la respuesta es el bolo de suero hipertónico. La restricción hídrica sería correcta si estuviera asintomática. Y la trampa es la E: el suero hipertónico es correcto, pero normalizar el sodio en un día rompe el límite y arriesga la desmielinización.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 92',
      stem: 'Un paciente de 72 años, fumador de 40 paquetes/año, con diagnóstico de cáncer pulmonar de células pequeñas sin tratamiento actual, presenta un cuadro de 7 días de evolución de cefalea y tendencia a la desorientación. En sus exámenes destaca una concentración sérica de sodio de 121 mEq/L, sin focalidad neurológica.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'SIADH (Síndrome de secreción inapropiada de hormona antidiurética)' },
        { letter: 'B', text: 'Metástasis cerebrales' },
        { letter: 'C', text: 'Síndrome carcinoide' },
        { letter: 'D', text: 'Accidente vascular encefálico' },
        { letter: 'E', text: 'Hipercalcemia' },
      ],
      correct: 'A',
      explanation: 'Cáncer pulmonar de células pequeñas + hiponatremia con cefalea y desorientación, sin focalidad: SIADH paraneoplásico por secreción ectópica de ADH. La ausencia de focalidad aleja las metástasis y el AVE; la hipercalcemia no explica un sodio de 121.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Hombre de setenta y dos años, fumador importante, con un cáncer pulmonar de células pequeñas sin tratamiento. Lleva siete días con cefalea y tendencia a la desorientación. Su sodio es ciento veintiuno, y no tiene focalidad neurológica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: SIADH, metástasis cerebrales, síndrome carcinoide, accidente vascular encefálico, o hipercalcemia. Piénsalo.',
        answer: 'Es la A, SIADH. El cáncer de células pequeñas es la causa paraneoplásica clásica: el tumor fabrica hormona antidiurética. La cefalea y la desorientación las explica el sodio bajo. El distractor tentador son las metástasis cerebrales, porque el paciente tiene cáncer, pero no hay focalidad, y el sodio de ciento veintiuno ya explica todo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 60',
      stem: 'Un paciente de 78 años, diabético, hipertenso y dislipidémico está en tratamiento con metformina, glibenclamida, enalapril, hidroclorotiazida, aspirina y atorvastatina. Se realiza exámenes de laboratorio, entre los que destacan sodio plasmático: 130 mEq/L, potasio plasmático: 3,4 mEq/L, creatinina plasmática: 1,1 mg/dl.',
      question: '¿Cuál es la causa más probable de sus alteraciones?',
      options: [
        { letter: 'A', text: 'Nefroesclerosis hipertensiva' },
        { letter: 'B', text: 'Uso de hidroclorotiazida' },
        { letter: 'C', text: 'Nefropatía diabética' },
        { letter: 'D', text: 'Uso de enalapril' },
        { letter: 'E', text: 'Uso de aspirina' },
      ],
      correct: 'B',
      explanation: 'Hiponatremia con hipokalemia y función renal normal en un usuario de tiazida: la hidroclorotiazida explica ambas. El enalapril tiende a subir el potasio, no a bajarlo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Hombre de setenta y ocho años, diabético e hipertenso, que toma entre otros fármacos enalapril e hidroclorotiazida. En sus exámenes tiene sodio de ciento treinta, potasio de tres coma cuatro y creatinina normal.',
        question: '¿Cuál es la causa más probable de sus alteraciones?',
        options: 'Las opciones: nefroesclerosis hipertensiva, hidroclorotiazida, nefropatía diabética, enalapril, o aspirina. Piénsalo.',
        answer: 'Es la B, la hidroclorotiazida. Explica las dos alteraciones a la vez: la hiponatremia, porque bloquea el segmento que diluye la orina, y la hipokalemia, por la pérdida renal de potasio. El distractor es el enalapril, pero ese fármaco tiende a subir el potasio, no a bajarlo. Y la creatinina normal descarta que el problema sea una nefropatía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Primero la osmolaridad', kind: 'key', items: [
          { t: 'Confirmar que es hipotónica', d: 'Osm normal o alta: no es hiponatremia verdadera',
            say: 'Cerremos con las reglas de oro. Antes de tratar, confirma que es hipotónica: con osmolaridad normal o alta, no es una hiponatremia verdadera.' },
          { t: 'Volemia + sodio urinario', d: 'Euvolemia con Na urinario alto: SIADH',
            say: 'Después, la volemia y el sodio urinario te dan la causa. Euvolémico con sodio urinario alto y orina concentrada: SIADH.' },
        ] },
        { title: 'Urgencia', tag: 'Síntomas graves', kind: 'alert', items: [
          { t: 'Convulsión o coma: NaCl 3%', d: 'Bolo de 100 a 150 mL en 20 min',
            say: 'Si hay convulsiones o coma, bolo de suero hipertónico al tres por ciento, de cien a ciento cincuenta mililitros.' },
          { t: 'Meta: subir 4 a 6 mEq/L', d: 'No normalizar',
            say: 'La meta es subir cuatro a seis, no normalizar.' },
        ] },
        { title: 'Velocidad', tag: 'Lo que protege el cerebro', kind: 'criteria', items: [
          { t: 'Máximo 8 a 10 en 24 horas', d: '6 a 8 en alcohólicos y desnutridos',
            say: 'Nunca más de ocho a diez miliequivalentes en veinticuatro horas, y seis a ocho en alcohólicos y desnutridos.' },
          { t: 'Sobrecorrección: SG 5% + DDAVP', d: 'Para volver a bajar el sodio',
            say: 'Si te pasas, suero glucosado y desmopresina. Si te llevas una sola idea de hoy: en la hiponatremia, los síntomas deciden si das suero hipertónico, y el reloj decide qué tan rápido subes el sodio. En la próxima clase separamos el SIADH del síndrome perdedor de sal cerebral. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiponatremia: de la osmolaridad a la conducta',
    root: N('start', 'Sodio menor de 135', 'Medir la osmolaridad plasmática',
      'Paciente con sodio bajo ciento treinta y cinco. Antes de tratar, la primera pregunta es la osmolaridad plasmática.',
      ['Osm normal', N('ok', 'Pseudohiponatremia', 'Triglicéridos o mieloma: no se trata',
        'Osmolaridad normal: pseudohiponatremia por triglicéridos o proteínas altas. No se trata el sodio.')],
      ['Osm alta', N('ok', 'Hiperglicemia', 'Corregir el sodio por la glicemia',
        'Osmolaridad alta: hay otro soluto, casi siempre la glucosa. Se corrige el sodio sumando uno coma seis a dos por cada cien de glicemia sobre cien, y se trata la hiperglicemia.')],
      ['Osm baja', N('q', '¿Síntomas neurológicos graves?', 'Convulsiones, estupor, coma',
        'Osmolaridad baja: hiponatremia hipotónica verdadera. Ahora la pregunta que manda: ¿hay síntomas neurológicos graves?',
        ['SÍ', N('alert', 'Bolo de NaCl 3%', 'Subir 4 a 6 · máximo 8 a 10 en 24 h',
          'Si convulsiona o está en coma, bolo de suero hipertónico al tres por ciento, cien a ciento cincuenta mililitros, repetible hasta dos veces más. La meta es subir cuatro a seis, sin pasar de ocho a diez en el día.')],
        ['NO', N('q', '¿Cómo está la volemia?', 'Examen físico + sodio urinario',
          'Sin síntomas graves, el tratamiento lo decide la volemia.',
          ['Hipovolémico', N('do', 'Suero fisiológico 0,9%', 'Vigilar la sobrecorrección',
            'Hipovolémico: suero fisiológico, vigilando que el sodio no suba de más cuando se apague la hormona antidiurética.')],
          ['Euvolémico', N('do', 'Restricción hídrica', 'SIADH: 800 a 1000 mL al día',
            'Euvolémico con sodio urinario alto: SIADH. Restricción de agua libre bajo ochocientos a mil mililitros al día, y suspender el fármaco que lo causa.')],
          ['Hipervolémico', N('do', 'Restricción + furosemida', 'Insuficiencia cardíaca, cirrosis',
            'Hipervolémico con edema: restricción hídrica y furosemida.')])])]),
  },
};
