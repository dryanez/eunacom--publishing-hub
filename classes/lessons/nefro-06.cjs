// Clase 2.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tres cuadros con el sodio bajo: la volemia y la orina deciden',
      say: 'Bienvenidos. En la clase anterior vimos que la hiponatremia euvolémica te hace pensar en el SIADH. Hoy lo miramos de cerca, y lo comparamos con dos cuadros que se le parecen: el síndrome perdedor de sal cerebral y la polidipsia primaria. La diferencia importa mucho, porque uno se trata restringiendo agua y otro dando suero. Si te equivocas de lado, el paciente se puede morir. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'SIADH: hormona antidiurética sin motivo',
      nodes: [
        { id: 'adh', col: 0, row: 1, k: 'cause', t: 'ADH inapropiada', s: 'Sin estímulo osmótico ni de volumen' },
        { id: 'agu', col: 1, row: 1, k: 'mech', t: 'Retiene agua libre', s: 'El colector reabsorbe agua' },
        { id: 'hip', col: 2, row: 0, k: 'effect', t: 'Hiponatremia hipotónica', s: 'Sin edema ni deshidratación' },
        { id: 'ori', col: 2, row: 2, k: 'effect', t: 'Orina concentrada', s: 'Osm urinaria mayor de 100' },
        { id: 'nau', col: 3, row: 2, k: 'effect', t: 'Sodio urinario mayor de 40', s: 'Con ingesta normal de sal' },
      ],
      edges: [
        { from: 'adh', to: 'agu' }, { from: 'agu', to: 'hip' }, { from: 'agu', to: 'ori' }, { from: 'ori', to: 'nau' },
      ],
      steps: [
        { show: ['adh'], note: 'La hormona se secreta cuando no debería',
          say: 'Partamos por el nombre, que ya explica el mecanismo. Síndrome de secreción inapropiada de hormona antidiurética. Inapropiada, porque se secreta aunque el plasma esté diluido y el volumen esté normal: no hay ningún motivo fisiológico para que esté ahí.' },
        { show: ['agu'], note: 'Exceso de agua, no falta de sodio',
          say: 'Esa hormona hace que el túbulo colector reabsorba agua libre. El paciente retiene agua, y como vimos la clase pasada, el problema de la hiponatremia es de agua, no de sodio.' },
        { show: ['hip'], note: 'Euvolemia clínica',
          say: 'El resultado es una hiponatremia hipotónica, pero con un paciente que se ve euvolémico: no tiene edema ni signos de deshidratación. Esa euvolemia es la clave del diagnóstico.' },
        { show: ['ori', 'nau'], note: 'La orina está inapropiadamente concentrada',
          say: 'Y la orina lo delata. Con un plasma diluido, el riñón debería eliminar orina diluida. En el SIADH pasa lo contrario: la orina está concentrada, sobre cien miliosmoles, y el sodio urinario está alto, sobre cuarenta, con una ingesta normal de sal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Criterios de SIADH (Schwartz-Bartter)',
      cards: [
        { title: 'Lo que tiene', tag: 'Los cuatro hallazgos', kind: 'criteria', items: [
          { t: 'Hiponatremia hipotónica', d: 'Na menor de 135, Osm menor de 275',
            say: 'Los criterios de Schwartz y Bartter ordenan el diagnóstico. Primero, hiponatremia hipotónica: sodio bajo ciento treinta y cinco y osmolaridad plasmática bajo doscientos setenta y cinco.' },
          { t: 'Osm urinaria mayor de 100', d: 'Frecuentemente mayor de 300',
            say: 'Segundo, orina inapropiadamente concentrada: osmolaridad urinaria sobre cien, y muchas veces sobre trescientos.' },
          { t: 'Na urinario mayor de 40', d: 'Con ingesta normal de sal',
            say: 'Tercero, sodio urinario sobre cuarenta, con una ingesta normal de sal.' },
          { t: 'Euvolemia clínica', d: 'Sin edema ni deshidratación',
            say: 'Y cuarto, euvolemia clínica: sin edema y sin signos de deshidratación.' },
        ] },
        { title: 'Lo que hay que descartar', tag: 'Diagnóstico de exclusión', kind: 'alert', items: [
          { t: 'Tiroides, suprarrenal y riñón normales', d: 'Hipotiroidismo e insuficiencia suprarrenal',
            say: 'El quinto criterio es el que más se olvida: la función tiroidea, suprarrenal y renal tienen que ser normales. El hipotiroidismo y la insuficiencia suprarrenal dan un cuadro idéntico.' },
          { t: 'Sin diuréticos recientes', d: 'La tiazida también sube el sodio urinario',
            say: 'Y no puede haber uso reciente de diuréticos, porque la tiazida también deja el sodio urinario alto. Por eso el SIADH es un diagnóstico de exclusión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Las cuatro familias de causas',
      cards: [
        { title: 'Neoplasias y fármacos', tag: 'Las más preguntadas', kind: 'key', items: [
          { t: 'Cáncer pulmonar microcítico', d: 'Secreción ectópica paraneoplásica',
            say: 'Las causas se agrupan en cuatro familias. La primera, las neoplasias, y el ejemplo clásico es el cáncer pulmonar de células pequeñas, que fabrica hormona antidiurética de manera ectópica.' },
          { t: 'ISRS, carbamazepina', d: 'También antipsicóticos y ciclofosfamida',
            say: 'La segunda, los fármacos: los inhibidores selectivos de la recaptura de serotonina, como el citalopram y la sertralina, la carbamazepina, los antipsicóticos y la ciclofosfamida. En el examen, si hay un fármaco de estos en la lista, casi siempre es la respuesta.' },
        ] },
        { title: 'Sistema nervioso y pulmón', tag: 'Enfermedad aguda', kind: 'normal', items: [
          { t: 'Patología del SNC', d: 'Meningitis, encefalitis, AVC, tumores',
            say: 'La tercera, la patología del sistema nervioso central: meningitis, encefalitis, accidente cerebrovascular y tumores.' },
          { t: 'Patología pulmonar infecciosa', d: 'Neumonía bacteriana o viral',
            say: 'Y la cuarta, la patología pulmonar infecciosa, como la neumonía. Ojo con la tercera familia, porque el paciente neurológico es justamente el que te obliga a pensar en el diagnóstico diferencial que viene.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'SIADH vs perdedor de sal cerebral',
      nodes: [
        { id: 'neu', col: 0, row: 2, k: 'start', t: 'Paciente neuroquirúrgico', s: 'HSA o TEC con Na bajo y Na urinario alto' },
        { id: 'vol', col: 1, row: 2, k: 'q', t: '¿Cómo está la volemia?', s: 'Lo único que los separa' },
        { id: 'siadh', col: 2, row: 0, k: 'effect', t: 'Euvolemia', s: 'SIADH' },
        { id: 'rh', col: 3, row: 0, k: 'good', t: 'Restricción hídrica', s: '800 a 1000 mL/día + sal' },
        { id: 'csw', col: 2, row: 4, k: 'risk', t: 'Hipovolemia real', s: 'Perdedor de sal: natriuresis por BNP' },
        { id: 'sf', col: 3, row: 4, k: 'good', t: 'Suero fisiológico 0,9%', s: '3% si es severo + fludrocortisona' },
        { id: 'tra', col: 4, row: 2, k: 'trap', t: 'Restringir agua en el CSW', s: 'Shock e isquemia cerebral' },
      ],
      edges: [
        { from: 'neu', to: 'vol' }, { from: 'vol', to: 'siadh' }, { from: 'siadh', to: 'rh' },
        { from: 'vol', to: 'csw' }, { from: 'csw', to: 'sf' }, { from: 'csw', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['neu'], note: 'Los dos dan lo mismo en el laboratorio',
          say: 'Ahora, la diferencia que más se pregunta. Imagina un paciente con hemorragia subaracnoidea o un traumatismo encefalocraneano, con sodio bajo y sodio urinario alto. Puede ser un SIADH, o puede ser un síndrome perdedor de sal cerebral. En el laboratorio se ven casi iguales.' },
        { show: ['vol'], note: 'La volemia es la clave',
          say: 'Lo que los separa es una sola cosa: la volemia. Por eso el examen siempre te da la presión, la frecuencia cardíaca, la presión venosa central o el balance hídrico.' },
        { show: ['siadh', 'rh'], note: 'Euvolémico: sobra agua',
          say: 'Si el paciente está euvolémico, es un SIADH: le sobra agua. Se trata con restricción de líquidos libres, ochocientos a mil mililitros al día, y suplementos de sal.' },
        { show: ['csw'], note: 'Hipovolémico: pierde sal y volumen',
          say: 'En el perdedor de sal, en cambio, el cerebro libera péptido natriurético y el riñón pierde sodio de verdad. El paciente queda hipovolémico: hipotenso, taquicárdico, con presión venosa central baja, balance negativo, pérdida de peso, hemoconcentración, y una relación nitrógeno ureico sobre creatinina mayor de veinte.' },
        { show: ['sf'], note: 'Se repone volumen y sodio',
          say: 'Y su tratamiento es el opuesto: expansión enérgica de volumen con suero fisiológico al cero coma nueve por ciento, o hipertónico al tres por ciento si es severo, más un mineralocorticoide, la fludrocortisona.' },
        { show: ['tra'], note: 'El error que mata',
          say: 'Y aquí está la trampa que puede costar una vida. Si al perdedor de sal lo tratas como SIADH y le restringes el agua, lo llevas al shock hipovolémico. En un paciente con hemorragia subaracnoidea, eso favorece el vasoespasmo y el infarto cerebral. La restricción hídrica en el perdedor de sal es fatal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El tercer cuadro',
      title: 'Polidipsia primaria: la orina está diluida',
      cards: [
        { title: 'Polidipsia psicógena', tag: 'Toma más agua de la que elimina', kind: 'key', items: [
          { t: 'Osm urinaria menor de 100', d: 'El riñón diluye al máximo',
            say: 'El tercer cuadro es la polidipsia primaria, o psicógena. Aquí no hay hormona antidiurética inapropiada: el paciente simplemente toma más agua de la que el riñón alcanza a eliminar. Y el riñón hace todo bien: diluye la orina al máximo, bajo cien miliosmoles.' },
          { t: 'Na urinario menor de 20', d: 'Euvolemia a hipervolemia leve',
            say: 'Por eso el sodio urinario está bajo veinte, y el paciente está euvolémico o con una hipervolemia leve.' },
        ] },
        { title: 'Cómo separarla del SIADH', tag: 'Mirar la orina', kind: 'alert', items: [
          { t: 'SIADH: orina concentrada', d: 'Polidipsia: orina diluida',
            say: 'Fíjate en el contraste: los dos son euvolémicos con sodio bajo, pero en el SIADH la orina está concentrada, y en la polidipsia está diluida. La orina decide.' },
          { t: 'Tratamiento: restringir el agua oral', d: 'Se corrige al dejar de beber en exceso',
            say: 'Su tratamiento es restringir la ingesta de agua. Y como el riñón funciona bien, cuando el paciente deja de beber en exceso, la orina se concentra y el sodio se normaliza. Esa respuesta la vas a ver en una pregunta real.' },
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
      title: 'SIADH vs perdedor de sal vs polidipsia',
      head: ['Parámetro', 'SIADH', 'Perdedor de sal (CSW)', 'Polidipsia psicógena'],
      rows: [
        { cells: ['Volemia', 'Euvolemia', 'Hipovolemia', 'Euvolemia o hipervolemia leve'],
          say: 'Repasemos los tres cuadros lado a lado. La volemia: el SIADH es euvolémico, el perdedor de sal es hipovolémico, y la polidipsia es euvolémica o levemente hipervolémica.' },
        { cells: ['Osm urinaria', 'Mayor de 100 (concentrada)', 'Mayor de 300 (concentrada)', 'Menor de 100 (diluida)'],
          say: 'La osmolaridad urinaria: concentrada en el SIADH y en el perdedor de sal, y máximamente diluida en la polidipsia.' },
        { cells: ['Na urinario', 'Mayor de 40', 'Mayor de 40 a 80', 'Menor de 20'],
          say: 'El sodio urinario: alto en los dos primeros, y bajo en la polidipsia.' },
        { cells: ['Ácido úrico', 'Bajo (menor de 4)', 'Bajo o normal', 'Normal o bajo'],
          say: 'El ácido úrico suele estar bajo en el SIADH, bajo cuatro, pero no te ayuda mucho a separarlo del perdedor de sal.' },
        { cells: ['Tratamiento', 'Restricción hídrica', 'SF 0,9% + fludrocortisona', 'Restringir el agua oral'],
          say: 'Y el tratamiento, que es lo que se pregunta: restricción hídrica en el SIADH, suero fisiológico y fludrocortisona en el perdedor de sal, y restringir el agua en la polidipsia. El error clásico es restringir agua en el perdedor de sal.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años, 5 días después del clipaje de un aneurisma por hemorragia subaracnoidea. FC 110 lpm, PA 90/60 mmHg (previa 135/85), PVC 2 cmH2O, diuresis 4.500 mL en 24 h, balance −2.800 mL. Na 126 mEq/L (basal 138), BUN 28 mg/dL, creatinina 0,9 mg/dL, Na urinario 88 mEq/L, Osm urinaria 450 mOsm/kg.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Restricción hídrica a 800 mL/día' },
        { letter: 'B', text: 'Suero fisiológico 0,9% intravenoso' },
        { letter: 'C', text: 'Furosemida intravenosa más NaCl oral' },
        { letter: 'D', text: 'Desmopresina subcutánea' },
        { letter: 'E', text: 'Suero glucosado al 5%' },
      ],
      correct: 'B',
      explanation: 'Hiponatremia hipotónica con natriuresis alta en patología intracraneana, pero con hipovolemia evidente (hipotensión, taquicardia, PVC baja, balance negativo, BUN/Cr > 20): síndrome perdedor de sal cerebral. Se repone volumen y sodio con SF 0,9%. La restricción hídrica, correcta en el SIADH, aquí precipita shock y vasoespasmo.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y dos años, a los cinco días del clipaje de un aneurisma por una hemorragia subaracnoidea. Está taquicárdico, con presión de noventa sobre sesenta, presión venosa central de dos, orina cuatro litros y medio al día y tiene un balance negativo. Su sodio bajó de ciento treinta y ocho a ciento veintiséis, con sodio urinario de ochenta y ocho y orina concentrada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: restricción hídrica, suero fisiológico, furosemida con sal oral, desmopresina, o suero glucosado. Piénsalo.',
        answer: 'Es la B, suero fisiológico. El laboratorio se parece a un SIADH, pero mira la volemia: hipotensión, taquicardia, presión venosa central colapsada y balance negativo. Eso es un perdedor de sal cerebral, y se trata reponiendo volumen y sodio. El distractor tentador es la restricción hídrica: es la respuesta del SIADH, y aquí llevaría al paciente al shock y al vasoespasmo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 49',
      stem: 'Una paciente de 60 años, con antecedente de hipotiroidismo, hipertensión y depresión, en tratamiento con levotiroxina, enalapril y citalopram se realiza exámenes de control, entre los que destacan sodio plasmático de 127 mEq/L, potasio plasmático de 4,1 mEq/L, creatinina plasmática de 0,9 mg/dl y sodio urinario de 60 mEq/L.',
      question: '¿Cuál es la causa más probable de su hiponatremia?',
      options: [
        { letter: 'A', text: 'Uso del enalapril' },
        { letter: 'B', text: 'Reacción secundaria al citalopram' },
        { letter: 'C', text: 'Síndrome paraneoplásico' },
        { letter: 'D', text: 'Insuficiencia suprarrenal' },
        { letter: 'E', text: 'Hipotiroidismo descompensado' },
      ],
      correct: 'B',
      explanation: 'Hiponatremia con sodio urinario alto y función renal normal en una usuaria de citalopram: SIADH probable por el ISRS. El hipotiroidismo está tratado y no hay datos de insuficiencia suprarrenal ni de neoplasia.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Mujer de sesenta años, con hipotiroidismo, hipertensión y depresión, que toma levotiroxina, enalapril y citalopram. En un control tiene sodio de ciento veintisiete, potasio normal, creatinina normal y sodio urinario de sesenta.',
        question: '¿Cuál es la causa más probable de su hiponatremia?',
        options: 'Las opciones: el enalapril, el citalopram, un síndrome paraneoplásico, insuficiencia suprarrenal, o hipotiroidismo descompensado. Piénsalo.',
        answer: 'Es la B, el citalopram. Hiponatremia con sodio urinario alto en una paciente sin diuréticos: SIADH, y el fármaco de la lista que lo produce es el ISRS. El distractor tentador es el hipotiroidismo, porque está en el antecedente, pero está en tratamiento con levotiroxina y el caso no da ningún dato de que esté descompensado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 105',
      stem: 'Una paciente de 16 años de edad, con cuadro caracterizado por polidipsia y poliuria desde hace aproximadamente 3 semanas, no asociado a otros síntomas. Se realizan exámenes donde destaca osmolaridad plasmática disminuida, por lo que se solicita test de la sed que muestra normalización de diuresis y osmolaridad plasmática.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Polidipsia psicógena' },
        { letter: 'B', text: 'Diabetes insípida nefrogénica' },
        { letter: 'C', text: 'Diabetes insípida central' },
        { letter: 'D', text: 'Hipercalcemia' },
        { letter: 'E', text: 'Diabetes mellitus tipo 1' },
      ],
      correct: 'A',
      explanation: 'Poliuria y polidipsia con osmolaridad plasmática baja: el exceso es de agua ingerida. Al restringir el agua (test de la sed), la diuresis y la osmolaridad se normalizan porque el riñón y la ADH funcionan: polidipsia psicógena. En la diabetes insípida la osmolaridad plasmática tiende a estar alta y la poliuria persiste con la privación.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Adolescente de dieciséis años con polidipsia y poliuria de tres semanas, sin otros síntomas. La osmolaridad plasmática está disminuida, y en el test de la sed se normalizan la diuresis y la osmolaridad.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: polidipsia psicógena, diabetes insípida nefrogénica, diabetes insípida central, hipercalcemia, o diabetes mellitus tipo uno. Piénsalo.',
        answer: 'Es la A, polidipsia psicógena. La clave es la osmolaridad plasmática baja: el plasma está diluido porque entra demasiada agua. Y cuando se le quita el agua, todo se normaliza, porque el riñón y la hormona antidiurética funcionan bien. El distractor es la diabetes insípida: ahí el paciente pierde agua, la osmolaridad plasmática tiende a subir, y la poliuria sigue aunque no beba. Eso lo vemos en la próxima clase.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'SIADH', tag: 'Euvolemia + orina concentrada', kind: 'key', items: [
          { t: 'Euvolémico, Na urinario mayor de 40', d: 'Osm urinaria mayor de 100',
            say: 'Cerremos con las reglas de oro. SIADH: hiponatremia hipotónica en un paciente euvolémico, con orina concentrada y sodio urinario sobre cuarenta.' },
          { t: 'Descartar tiroides, suprarrenal, diurético', d: 'Buscar ISRS, carbamazepina, cáncer microcítico',
            say: 'Antes de decirlo, descarta hipotiroidismo, insuficiencia suprarrenal y diuréticos, y busca la causa: un ISRS, la carbamazepina o un cáncer pulmonar de células pequeñas.' },
        ] },
        { title: 'Perdedor de sal cerebral', tag: 'Hipovolemia real', kind: 'alert', items: [
          { t: 'Neuroquirúrgico hipovolémico', d: 'Suero fisiológico + fludrocortisona',
            say: 'Si el paciente neuroquirúrgico está hipovolémico, es un perdedor de sal: suero fisiológico y fludrocortisona.' },
          { t: 'Nunca restringir agua', d: 'Shock y vasoespasmo',
            say: 'Y nunca le restrinjas el agua, porque lo llevas al shock y al vasoespasmo.' },
        ] },
        { title: 'Polidipsia primaria', tag: 'Orina diluida', kind: 'normal', items: [
          { t: 'Osm urinaria menor de 100', d: 'Se corrige al restringir el agua',
            say: 'Y la polidipsia primaria tiene la orina diluida, y se corrige al dejar de beber. Si te llevas una sola idea de hoy: con sodio bajo y sodio urinario alto, la volemia decide si restringes agua o das suero. En la próxima clase damos vuelta el problema: la hipernatremia y la diabetes insípida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiponatremia hipotónica: SIADH, perdedor de sal o polidipsia',
    root: N('start', 'Hiponatremia hipotónica', 'Osm plasmática menor de 275',
      'Paciente con hiponatremia hipotónica confirmada. Para separar estos tres cuadros, mira la orina y la volemia.',
      ['', N('q', '¿Cómo está la orina?', 'Osm urinaria y sodio urinario',
        'La primera pregunta es la orina: ¿está diluida o concentrada?',
        ['Diluida', N('ok', 'Polidipsia primaria', 'Osm urinaria menor de 100 · restringir agua',
          'Orina máximamente diluida, bajo cien, con sodio urinario bajo veinte: polidipsia primaria. Se restringe la ingesta de agua.')],
        ['Concentrada', N('q', '¿Cómo está la volemia?', 'Na urinario mayor de 40',
          'Orina concentrada con sodio urinario sobre cuarenta. Ahora la pregunta que decide: ¿cómo está la volemia?',
          ['Euvolemia', N('do', 'SIADH: restricción hídrica', '800 a 1000 mL/día + sal · suspender fármaco',
            'Euvolémico: si la tiroides, la suprarrenal y el riñón son normales y no hay diuréticos, es un SIADH. Restricción hídrica de ochocientos a mil mililitros al día, suplementos de sal, y suspender el fármaco que lo causa.')],
          ['Hipovolemia', N('alert', 'Perdedor de sal cerebral', 'SF 0,9% + fludrocortisona · no restringir',
            'Hipovolémico, en contexto neuroquirúrgico: perdedor de sal cerebral. Suero fisiológico y fludrocortisona. Restringir agua aquí es fatal.')])])]),
  },
};
