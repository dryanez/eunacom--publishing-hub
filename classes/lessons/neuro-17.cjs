// Clase 10.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-17).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-17 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Debilidad que se cansa, pupilas que no se tocan y fármacos que pueden provocar una crisis',
      say: 'Bienvenidos. En la clase anterior vimos una debilidad que nace en el nervio, el Guillain-Barré. Hoy bajamos un escalón más, a la unión entre el nervio y el músculo, con la miastenia gravis. Es un tema de alta rentabilidad, y se ordena con una palabra: fatigabilidad. La fuerza se agota con el uso y se recupera con el reposo. Si entiendes por qué, entiendes la clínica, los exámenes y hasta qué fármacos no puedes indicar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Faltan receptores, y la señal se agota',
      nodes: [
        { id: 'ach', col: 0, row: 1, k: 'start', t: 'El nervio libera acetilcolina', s: 'Se une al receptor nicotínico' },
        { id: 'ac', col: 1, row: 0, k: 'cause', t: 'Anticuerpos anti-receptor', s: 'Contra la membrana postsináptica' },
        { id: 'men', col: 1, row: 2, k: 'mech', t: 'Menos receptores funcionales', s: 'Complemento, endocitosis, bloqueo' },
        { id: 'uso', col: 2, row: 1, k: 'mech', t: 'Con el uso, cae la acetilcolina', s: 'Se pierde el margen de seguridad' },
        { id: 'fat', col: 3, row: 1, k: 'effect', t: 'Fatigabilidad', s: 'Peor con el uso, mejor con reposo' },
      ],
      edges: [
        { from: 'ach', to: 'men' }, { from: 'ac', to: 'men', label: 'destruye' },
        { from: 'men', to: 'uso' }, { from: 'uso', to: 'fat' },
      ],
      steps: [
        { show: ['ach'], note: 'Normalmente sobra señal: factor de seguridad',
          say: 'Partamos por la sinapsis normal. El nervio libera acetilcolina, que se une a los receptores nicotínicos del músculo. En condiciones normales, la señal que se genera es más que suficiente para contraer el músculo. Ese exceso se llama factor de seguridad.' },
        { show: ['ac', 'men'], note: 'Autoinmune y postsináptica',
          say: 'En la miastenia, el sistema inmune fabrica anticuerpos contra la membrana postsináptica, sobre todo contra el receptor de acetilcolina. Y lo dañan de tres formas: activan el complemento, que destruye los pliegues de la membrana; aceleran la degradación del receptor; y bloquean directamente el sitio donde se une la acetilcolina. El resultado es que quedan muy pocos receptores funcionales.' },
        { show: ['uso'], note: 'Cada contracción libera un poco menos',
          say: 'Con pocos receptores, la primera contracción todavía funciona. Pero cuando el músculo se contrae una y otra vez, la acetilcolina liberada cae de forma natural, y en un paciente sin margen de sobra, la señal queda bajo el umbral.' },
        { show: ['fat'], note: 'El sello clínico: fluctuación',
          say: 'Eso es la fatigabilidad, el sello de la enfermedad: la fuerza empeora con el ejercicio repetido y al final del día, y mejora con el reposo o con el frío. Guarda esta idea, porque explica el test del hielo, la electromiografía y el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anticuerpos y perfil',
      title: 'Quién tiene miastenia y con qué anticuerpo',
      cards: [
        { title: 'Anticuerpos', tag: 'Definen el fenotipo', kind: 'key', items: [
          { t: 'Anti-receptor de acetilcolina', d: '85 % generalizada, 50 % ocular pura',
            say: 'Veamos los anticuerpos. El principal es el anti receptor de acetilcolina: está en ochenta y cinco por ciento de las formas generalizadas, pero solo en la mitad de las formas oculares puras.' },
          { t: 'Anti-MuSK', d: '30 a 40 % de los seronegativos',
            say: 'Si ese anticuerpo es negativo, se busca el anti MuSK, presente en treinta a cuarenta por ciento de los seronegativos. Tiene un perfil propio: mujeres jóvenes, compromiso bulbar y respiratorio severo, debilidad facial y de cuello, y atrofia de la lengua. Responden mal o empeoran con piridostigmina, y muy bien a rituximab.' },
          { t: 'Anti-LRP4', d: 'En algunos dobles seronegativos',
            say: 'Y en algunos pacientes negativos para ambos, aparece un tercer anticuerpo, el anti LRP cuatro.' },
        ] },
        { title: 'Dos picos de edad', tag: 'Distribución bimodal', kind: 'criteria', items: [
          { t: 'Mujer de 20 a 40 años', d: 'Hiperplasia tímica, otras autoinmunes',
            say: 'La enfermedad tiene dos picos. El primero, mujeres jóvenes de veinte a cuarenta años, a menudo con hiperplasia del timo y otras enfermedades autoinmunes, como la tiroiditis de Hashimoto.' },
          { t: 'Hombre de 50 a 60 años', d: 'Más asociado a timoma',
            say: 'El segundo, hombres de cincuenta a sesenta años, donde es más frecuente el timoma. Eso ya te anticipa por qué siempre vamos a mirar el tórax.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Ojos, boca y extremidades que se cansan',
      cards: [
        { title: 'Ocular', tag: 'Lo más frecuente', kind: 'key', items: [
          { t: 'Ptosis asimétrica y diplopía', d: 'No calza con un solo par craneal',
            say: 'Veamos cómo se presenta. Lo más frecuente es el ojo: la mitad de los pacientes debuta así, y más de ochenta y cinco por ciento lo tendrá en algún momento. Ptosis uni o bilateral asimétrica, y diplopía binocular que no calza con el territorio de un solo par craneal.' },
          { t: 'Pupilas siempre normales', d: 'El músculo intrínseco no se toca',
            say: 'Y la regla de oro: las pupilas son normales, simétricas y reactivas. Siempre. La miastenia afecta la musculatura externa del ojo, nunca la intrínseca. Esa diferencia se pregunta.' },
        ] },
        { title: 'Bulbar', tag: 'Empeora al hablar y comer', kind: 'alert', items: [
          { t: 'Voz nasal que se apaga', d: 'Se fatiga el velo del paladar',
            say: 'Después viene lo bulbar, y fíjate que todo sigue la lógica de la fatiga. La voz se vuelve nasal a medida que habla, porque se cansa el velo del paladar.' },
          { t: 'Fatiga al masticar y disfagia', d: 'Se sostiene la mandíbula',
            say: 'Le cuesta terminar de masticar un trozo de carne, a veces tiene que sostener la mandíbula con la mano, y aparece disfagia.' },
        ] },
        { title: 'Extremidades', tag: 'Proximal', kind: 'normal', items: [
          { t: 'Debilidad proximal y simétrica', d: 'Hombros, caderas, cuello',
            say: 'En las extremidades, la debilidad es proximal y simétrica: deltoides, flexores de cadera y flexores del cuello, hasta la cabeza caída. La fuerza distal suele conservarse. Y a diferencia del Guillain-Barré, los reflejos y la sensibilidad están normales.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'Ptosis: la pupila decide',
      nodes: [
        { id: 'pto', col: 0, row: 2, k: 'start', t: 'Ptosis y diplopía', s: 'Miro la pupila' },
        { id: 'nor', col: 2, row: 1, k: 'good', t: 'Pupila normal y reactiva', s: 'Compatible con miastenia' },
        { id: 'mid', col: 2, row: 3, k: 'alert', t: 'Midriasis o pupila arrefléctica', s: 'Descarta miastenia' },
        { id: 'iii', col: 3, row: 3, k: 'refer', t: 'Pensar en otra causa', s: 'Aneurisma de comunicante posterior, botulismo, Miller Fisher' },
      ],
      edges: [
        { from: 'pto', to: 'nor', label: 'intacta' }, { from: 'pto', to: 'mid', label: 'alterada' },
        { from: 'mid', to: 'iii' },
      ],
      steps: [
        { show: ['pto', 'nor'], note: 'Miastenia: la pupila nunca se compromete',
          say: 'Llevemos esa regla a la práctica. Frente a una ptosis con diplopía, lo primero que miras es la pupila. Si es normal y reactiva, la miastenia es compatible.' },
        { show: ['mid', 'iii'], note: 'Midriasis: compresión del III par hasta demostrar lo contrario',
          say: 'Si hay midriasis o la pupila no reacciona a la luz, descartas miastenia. Tienes que pensar en una compresión del tercer par por un aneurisma de la comunicante posterior, en botulismo, o en un síndrome de Miller Fisher, la variante del Guillain-Barré que vimos en la clase anterior.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pruebas de cabecera',
      title: 'Dos pruebas que haces en la consulta',
      cards: [
        { title: 'Test del hielo', tag: 'El frío ayuda a la sinapsis', kind: 'criteria', items: [
          { t: 'Hielo sobre el párpado 2 a 3 min', d: 'Positivo si mejora 2 mm o más',
            say: 'Hay dos pruebas que haces al lado de la cama. La primera es el test del hielo: pones una bolsa de hielo sobre el párpado caído por dos a tres minutos. Es positivo si la hendidura palpebral mejora dos milímetros o más.' },
          { t: 'Sensibilidad 80 a 90 %', d: 'Especificidad sobre 95 %',
            say: '¿Por qué funciona? Porque el frío inhibe la acetilcolinesterasa, la enzima que degrada la acetilcolina. Queda más acetilcolina en la sinapsis, y el músculo recupera fuerza. Tiene una sensibilidad de ochenta a noventa por ciento en la ptosis miasténica.' },
        ] },
        { title: 'Test de Simpson', tag: 'Provocar la fatiga', kind: 'key', items: [
          { t: 'Mirar hacia arriba 60 segundos', d: 'La ptosis aparece o empeora',
            say: 'La segunda es la prueba de fatigabilidad, o test de Simpson: le pides al paciente que mantenga la mirada hacia arriba durante sesenta segundos. En la miastenia, la ptosis aparece o empeora progresivamente. Es la fatigabilidad hecha visible.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Confirmación',
      title: 'Anticuerpos, electromiografía y siempre el tórax',
      nodes: [
        { id: 'sos', col: 0, row: 2, k: 'start', t: 'Sospecha clínica', s: 'Fatigabilidad, pupilas normales' },
        { id: 'ach', col: 1, row: 1, k: 'good', t: 'Anti-receptor de ACh', s: 'Especificidad sobre 98 %' },
        { id: 'musk', col: 2, row: 0, k: 'q', t: 'Negativo: anti-MuSK', s: 'Si el cuadro es generalizado' },
        { id: 'enr', col: 1, row: 3, k: 'good', t: 'Estimulación repetitiva a 3 Hz', s: 'Decremento mayor de 10 %' },
        { id: 'fib', col: 2, row: 4, k: 'q', t: 'Fibra aislada', s: 'La más sensible: jitter' },
        { id: 'tac', col: 3, row: 2, k: 'alert', t: 'TAC de tórax en todos', s: 'Timoma 10 a 15 %' },
      ],
      edges: [
        { from: 'sos', to: 'ach' }, { from: 'ach', to: 'musk', label: 'negativo' },
        { from: 'sos', to: 'enr' }, { from: 'enr', to: 'fib', label: 'normal' },
        { from: 'ach', to: 'tac' }, { from: 'enr', to: 'tac' },
      ],
      steps: [
        { show: ['sos', 'ach'], note: 'La prueba de confirmación más específica',
          say: 'Para confirmar, el primer examen son los anticuerpos anti receptor de acetilcolina. Es la prueba más específica, sobre noventa y ocho por ciento.' },
        { show: ['musk'], note: 'Seronegativo con cuadro sugerente',
          say: 'Si resulta negativa y el cuadro es generalizado y sugerente, pides el anti MuSK.' },
        { show: ['enr'], note: 'Cada estímulo da una respuesta menor',
          say: 'El segundo examen es la electromiografía con estimulación repetitiva a tres hertz. Estimulas el nervio varias veces seguidas y mides la respuesta del músculo. Es positiva si cae más de diez por ciento entre el primer y el cuarto o quinto potencial. Es la fatigabilidad medida en el laboratorio.' },
        { show: ['fib'], note: 'Para seronegativos con estimulación normal',
          say: 'Y si todo lo anterior sale normal pero la sospecha sigue, la electromiografía de fibra aislada. Es la prueba más sensible, sobre noventa y cinco por ciento, y muestra un aumento del jitter, la variabilidad en la transmisión entre fibras de la misma unidad motora.' },
        { show: ['tac'], note: 'Hiperplasia tímica 65 a 70 %',
          say: 'Y un examen que se pide en todo paciente con miastenia: la tomografía de tórax con contraste, para mirar el timo. Diez a quince por ciento tiene un timoma, y sesenta y cinco a setenta por ciento, hiperplasia tímica. Si en una alternativa aparece TAC de tórax, no es un examen de más: es obligatorio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos prohibidos',
      title: 'Lo que puede desencadenar una crisis',
      cards: [
        { title: 'Antibióticos', tag: 'Los más preguntados', kind: 'alert', items: [
          { t: 'Aminoglucósidos', d: 'Gentamicina, amikacina: contraindicados',
            say: 'Ahora una lista que se pregunta mucho, porque un fármaco mal indicado puede desencadenar una crisis. Primero, los aminoglucósidos, como gentamicina y amikacina: bloquean la liberación de acetilcolina y están contraindicados.' },
          { t: 'Fluoroquinolonas', d: 'Ciprofloxacino: advertencia de caja negra',
            say: 'Las fluoroquinolonas, como ciprofloxacino y levofloxacino, tienen una advertencia de caja negra por exacerbaciones graves y parálisis respiratoria. Si necesitas tratar una infección urinaria, prefieres ceftriaxona o cotrimoxazol.' },
          { t: 'Macrólidos y clindamicina', d: 'Con extrema cautela',
            say: 'Y los macrólidos, azitromicina y claritromicina, y la clindamicina, que también reducen la liberación de acetilcolina. Se usan con extrema cautela o se cambian por betalactámicos.' },
        ] },
        { title: 'Otros fármacos', tag: 'Pensar antes de indicar', kind: 'pharma', items: [
          { t: 'Betabloqueadores y antiarrítmicos', d: 'Propranolol, procainamida, quinidina',
            say: 'En lo cardiovascular, se evitan los betabloqueadores, el verapamilo y el diltiazem, y antiarrítmicos como procainamida y quinidina. Para la hipertensión se prefieren IECA, ARA dos o hidralazina.' },
          { t: 'Sulfato de magnesio EV', d: 'Puede causar paro respiratorio',
            say: 'El sulfato de magnesio endovenoso inhibe con fuerza la liberación de acetilcolina, y puede causar un paro respiratorio. Ojo con la embarazada miasténica con eclampsia: ahí está proscrito.' },
          { t: 'Relajantes musculares', d: 'Rocuronio a 1/10 de la dosis',
            say: 'Los relajantes no despolarizantes, como el rocuronio, producen una parálisis extrema y prolongada, así que se usan a un décimo de la dosis habitual, con monitoreo. Y los inhibidores de checkpoint inmunológico, fármacos oncológicos, pueden desencadenar una miastenia fulminante con miocarditis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento crónico',
      title: 'De la piridostigmina a la inmunosupresión',
      cards: [
        { title: 'Primera línea', tag: 'Sintomático', kind: 'pharma', items: [
          { t: 'Piridostigmina 30 a 60 mg c/4-6 h', d: 'Máximo 360 mg al día',
            say: 'Pasemos al tratamiento. La primera línea es la piridostigmina, un inhibidor reversible de la acetilcolinesterasa: treinta a sesenta miligramos por boca cada cuatro a seis horas, con un máximo habitual de trescientos sesenta al día. Fíjate en la lógica: hace lo mismo que el hielo, deja más acetilcolina en la sinapsis.' },
          { t: 'Efectos muscarínicos', d: 'Cólicos, diarrea, sialorrea',
            say: 'Actúa en quince a treinta minutos y dura tres a cuatro horas. Sus efectos adversos son colinérgicos: cólicos, diarrea, sialorrea, sudoración y secreciones bronquiales. Se manejan con dosis bajas de un anticolinérgico, como atropina o propantelina.' },
        ] },
        { title: 'Inmunosupresión', tag: 'Si persisten síntomas', kind: 'key', items: [
          { t: 'Prednisona: partir bajo y subir', d: '10 a 20 mg hasta 0,75 a 1 mg/kg',
            say: 'Si los síntomas siguen incapacitando a pesar de una piridostigmina optimizada, se agrega prednisona. Y aquí hay un detalle que se pregunta: se parte con dosis bajas, diez a veinte miligramos al día, y se sube de a poco hasta cero coma setenta y cinco a uno por kilo.' },
          { t: 'Evitar el efecto dip', d: 'Empeoramiento paradójico precoz',
            say: '¿Por qué partir bajo? Porque los corticoides en dosis altas pueden provocar un empeoramiento paradójico en los primeros siete a diez días, el llamado efecto dip.' },
          { t: 'Azatioprina o micofenolato', d: 'Ahorradores de corticoides',
            say: 'Para el largo plazo se usan ahorradores de corticoides: azatioprina, dos a tres miligramos por kilo al día, o micofenolato, uno a dos gramos al día. Ambos tardan meses en hacer efecto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Timectomía',
      title: 'Cuándo se saca el timo',
      cards: [
        { title: 'Indicación absoluta', tag: 'Siempre', kind: 'alert', items: [
          { t: 'Timoma en la imagen', d: 'Resecar la neoplasia',
            say: 'La timectomía tiene dos indicaciones. La absoluta: todo timoma comprobado en la imagen se opera, para sacar la neoplasia y evitar que invada la pleura o el pericardio.' },
        ] },
        { title: 'Indicación modificadora', tag: 'Estudio MGTX', kind: 'criteria', items: [
          { t: 'Sin timoma, 18 a 65 años', d: 'Generalizada y anti-receptor positivo',
            say: 'La segunda es modificadora de la enfermedad, aunque no haya timoma: pacientes de dieciocho a sesenta y cinco años, con miastenia generalizada y anticuerpos anti receptor positivos.' },
          { t: 'Más remisión, menos corticoides', d: 'Beneficio a largo plazo',
            say: 'En ellos, la timectomía aumenta la remisión completa y reduce a largo plazo la necesidad de corticoides y de hospitalizaciones.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Crisis miasténica',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'Infección o fármaco prohibido', s: 'El gatillo habitual' },
        { id: 'cri', col: 1, row: 1, k: 'alert', t: 'Falla respiratoria o disfagia grave', s: 'Crisis miasténica' },
        { id: 'uci', col: 2, row: 0, k: 'good', t: 'UCI e intubación electiva precoz', s: 'Vigilar CVF y PImáx' },
        { id: 'inm', col: 2, row: 2, k: 'good', t: 'Plasmaféresis o inmunoglobulina', s: 'IgEV 2 g/kg en 2 a 5 días' },
        { id: 'pir', col: 3, row: 1, k: 'trap', t: 'Suspender piridostigmina', s: 'Mientras está intubado' },
      ],
      edges: [
        { from: 'gat', to: 'cri' }, { from: 'cri', to: 'uci' }, { from: 'cri', to: 'inm' },
        { from: 'uci', to: 'pir', label: 'secreciones' },
      ],
      steps: [
        { show: ['gat', 'cri'], note: 'Insuficiencia respiratoria o vía aérea en riesgo',
          say: 'Y llegamos a la urgencia: la crisis miasténica. Se define como una insuficiencia respiratoria que requiere ventilación mecánica, o una disfagia tan grave que pone en riesgo la vía aérea. Los gatillos habituales son una infección o uno de los fármacos que acabamos de ver.' },
        { show: ['uci'], note: 'Igual que en el Guillain-Barré: no esperar la hipoxemia',
          say: 'La conducta se parece mucho a la del Guillain-Barré: UCI, monitoreo de la capacidad vital y de la presión inspiratoria máxima, e intubación electiva precoz.' },
        { show: ['inm'], note: 'Plasmaféresis 5 sesiones en 10 días',
          say: 'Y un tratamiento inmunomodulador rápido: plasmaféresis, cinco sesiones en diez días, o inmunoglobulina endovenosa, dos gramos por kilo en total, repartidos en dos a cinco días. Son igual de efectivas.' },
        { show: ['pir'], note: 'Evita secreciones que tapan el tubo',
          say: 'Y una perla de cuidados intensivos: mientras el paciente está intubado, se suspende transitoriamente la piridostigmina. ¿Por qué? Por sus efectos muscarínicos: aumenta las secreciones bronquiales, que pueden obstruir el tubo.' },
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
        { cells: ['Ptosis fluctuante con pupila normal', 'Miastenia: test del hielo y anticuerpos', 'Pensar en el tercer par'],
          say: 'Repasemos las trampas. Ptosis fluctuante con pupilas normales: miastenia, y se confirma con test del hielo y anticuerpos. El error es irse al tercer par.' },
        { cells: ['Ptosis con midriasis', 'Buscar compresión del III par', 'Diagnosticar miastenia'],
          say: 'Al revés, ptosis con midriasis: la miastenia queda descartada, y hay que buscar una compresión del tercer par.' },
        { cells: ['Miastenia recién diagnosticada', 'TAC de tórax siempre', 'Pedirlo solo si hay síntomas'],
          say: 'Miastenia recién diagnosticada: TAC de tórax en todos, sin excepción.' },
        { cells: ['Infección urinaria en miasténico', 'Ceftriaxona o cotrimoxazol', 'Ciprofloxacino o gentamicina'],
          say: 'Infección urinaria en un miasténico: ceftriaxona o cotrimoxazol. El error es el ciprofloxacino o la gentamicina.' },
        { cells: ['Inicio de prednisona', 'Dosis bajas y subir de a poco', 'Bolos altos de entrada: efecto dip'],
          say: 'Al iniciar prednisona, dosis bajas que se suben de a poco. Los bolos altos de entrada pueden empeorar al paciente.' },
        { cells: ['Crisis miasténica intubada', 'Plasmaféresis o IgEV; suspender piridostigmina', 'Subir la piridostigmina'],
          say: 'Y en la crisis miasténica intubada: plasmaféresis o inmunoglobulina, suspendiendo la piridostigmina. Subirla solo llena la vía aérea de secreciones.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 29 años, cajera, con 3 semanas de ptosis y diplopía que aparecen al avanzar la jornada; amanece casi asintomática. Se le cansa la mandíbula al masticar y la voz se vuelve gangosa en la tarde. Ptosis bilateral de predominio izquierdo, pupilas isocóricas y reactivas. El test del hielo mejora la hendidura palpebral 3,5 mm. Reflejos y sensibilidad normales.',
      question: 'Además de iniciar piridostigmina, ¿qué estudio es obligatorio solicitar?',
      options: [
        { letter: 'A', text: 'Angiografía cerebral por sospecha de aneurisma de comunicante posterior' },
        { letter: 'B', text: 'Punción lumbar para buscar disociación albúmino-citológica' },
        { letter: 'C', text: 'Anticuerpos anti-receptor de acetilcolina y TAC de tórax con contraste' },
        { letter: 'D', text: 'Resonancia magnética de cerebro con gadolinio' },
        { letter: 'E', text: 'Creatinquinasa y biopsia muscular' },
      ],
      correct: 'C',
      explanation: 'Fatigabilidad vespertina ocular y bulbar, pupilas normales y test del hielo positivo: miastenia gravis. Se confirma con anti-AChR (y anti-MuSK si es negativo) y electromiografía con estimulación repetitiva, y la TAC de tórax es obligatoria en todos para buscar timoma. Con pupilas normales no se sospecha aneurisma; la punción lumbar es para Guillain-Barré.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintinueve años, cajera, con tres semanas de ptosis y visión doble que aparecen a medida que avanza la jornada; en la mañana está casi bien. Se le cansa la mandíbula al masticar y la voz se vuelve gangosa en la tarde. Tiene ptosis bilateral, mayor a izquierda, con pupilas iguales y reactivas. El test del hielo mejora la hendidura tres coma cinco milímetros. Reflejos y sensibilidad normales.',
        question: 'Además de iniciar piridostigmina, ¿qué estudio es obligatorio solicitar?',
        options: 'Las opciones: angiografía por sospecha de aneurisma, punción lumbar, anticuerpos anti receptor de acetilcolina con TAC de tórax, resonancia de cerebro, o creatinquinasa con biopsia muscular. Piénsalo.',
        answer: 'Es la C. Todo grita miastenia: fatigabilidad que empeora en la tarde, compromiso ocular y bulbar, pupilas normales y un test del hielo positivo. Se confirma con anticuerpos, y la TAC de tórax es obligatoria para buscar un timoma. El distractor tentador es el aneurisma, pero las pupilas normales lo alejan. Y la punción lumbar es para el Guillain-Barré, donde además los reflejos estarían abolidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 74',
      stem: 'Una paciente de 38 años, profesora de enseñanza básica, consulta por debilidad y mialgias generalizadas, que iniciaron hace un mes. Además, refiere ptosis a derecha, que suele ser mayor en las tardes. Al examen físico se constata ptosis bilateral, mayor a derecha, con normalidad de los reflejos osteotendíneos y la sensibilidad.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esclerosis lateal amiotrófica' },
        { letter: 'B', text: 'Polimiositis' },
        { letter: 'C', text: 'Síndrome de Guillain Barré' },
        { letter: 'D', text: 'Esclerosis múltiple' },
        { letter: 'E', text: 'Miastenia gravis' },
      ],
      correct: 'E',
      explanation: 'Ptosis bilateral asimétrica que empeora en la tarde (fatigabilidad), con debilidad generalizada y reflejos y sensibilidad normales: miastenia gravis. El Guillain-Barré tendría arreflexia.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil veinticuatro. Profesora de treinta y ocho años con un mes de debilidad y mialgias generalizadas, y ptosis derecha que empeora en las tardes. Al examen tiene ptosis bilateral, mayor a derecha, con reflejos y sensibilidad normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esclerosis lateral amiotrófica, polimiositis, Guillain-Barré, esclerosis múltiple, o miastenia gravis. Piénsalo.',
        answer: 'Es la E, miastenia gravis. La clave es la ptosis asimétrica que empeora en la tarde: eso es fatigabilidad. La polimiositis puede tentarte por las mialgias y la debilidad, pero no explica una ptosis que fluctúa durante el día. Y el Guillain-Barré tendría los reflejos abolidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 44',
      stem: 'Un paciente diabético de larga data, mal controlado, en tratamiento con metformina y empaglifozina. Consulta por ptosis y molestias visuales en el ojo derecho. Al examen físico, tiene ptosis del ojo derecho, que se asocia a diplopía al abrir manualmente el párpado. Además, tiene dificultades en la aducción y elevación del ojo derecho. Su agudeza visual se constata como 20/25 bilateral.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Accidente vascular encefálico' },
        { letter: 'B', text: 'Tumor cerebral' },
        { letter: 'C', text: 'Cáncer de pulmón con compromiso del ganglio estrellado' },
        { letter: 'D', text: 'Ptosis aponeurótica' },
        { letter: 'E', text: 'Parálisis del tercer nervio craneal' },
      ],
      correct: 'E',
      explanation: 'Ptosis con déficit de aducción y elevación de un solo ojo, en un diabético mal controlado: parálisis del III par (mononeuropatía diabética). A diferencia de la miastenia, el compromiso sigue el territorio de un solo nervio y no fluctúa.',
      say: {
        stem: 'La siguiente, también de julio de dos mil veinticuatro, es el diagnóstico diferencial. Paciente diabético de larga data, mal controlado, con ptosis del ojo derecho y diplopía al levantarle el párpado. Además, le cuesta llevar ese ojo hacia adentro y hacia arriba. La agudeza visual es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: accidente vascular encefálico, tumor cerebral, cáncer de pulmón con compromiso del ganglio estrellado, ptosis aponeurótica, o parálisis del tercer par. Piénsalo.',
        answer: 'Es la E, parálisis del tercer par, la mononeuropatía del diabético. La ptosis con falla de la aducción y la elevación de un mismo ojo sigue exactamente el territorio del tercer par. Y ahí está la diferencia con la miastenia: la diplopía miasténica no calza con un solo nervio y fluctúa durante el día. El cáncer de pulmón tentaría por la ptosis, pero daría un síndrome de Horner, sin compromiso de la motilidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Fatigabilidad', kind: 'key', items: [
          { t: 'Peor con el uso, mejor con reposo', d: 'Ocular, bulbar y proximal',
            say: 'Cerremos con las reglas de oro. La miastenia es fatigabilidad: la debilidad empeora con el uso y en la tarde, y mejora con reposo y con frío. Ojos, músculos bulbares y extremidades proximales.' },
          { t: 'Pupilas siempre normales', d: 'Midriasis descarta miastenia',
            say: 'Las pupilas siempre están normales. Si hay midriasis, busca otra causa.' },
          { t: 'Anticuerpos, EMG y TAC de tórax', d: 'El TAC, en todos',
            say: 'Se confirma con anticuerpos y estimulación repetitiva, y la TAC de tórax se pide en todos.' },
        ] },
        { title: 'Tratamiento', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'Piridostigmina, luego prednisona', d: 'Partir bajo por el efecto dip',
            say: 'Piridostigmina primero; si no basta, prednisona partiendo bajo.' },
          { t: 'Timectomía', d: 'Timoma, o generalizada anti-receptor positiva',
            say: 'Timectomía siempre con timoma, y en la forma generalizada con anticuerpos positivos entre dieciocho y sesenta y cinco años.' },
        ] },
        { title: 'Urgencia', tag: 'Crisis miasténica', kind: 'alert', items: [
          { t: 'Evitar aminoglucósidos y quinolonas', d: 'También magnesio EV',
            say: 'Evita aminoglucósidos, quinolonas y magnesio endovenoso. Y en la crisis, UCI, intubación precoz, y plasmaféresis o inmunoglobulina. Si te llevas una sola idea de hoy: debilidad que se cansa con pupilas normales es miastenia, y lo primero que buscas después es el timo. En la próxima clase vemos la esclerosis múltiple. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Miastenia gravis: de la sospecha a la crisis',
    root: N('start', 'Ptosis, diplopía o debilidad fluctuante', 'Peor en la tarde',
      'Paciente con ptosis, diplopía o debilidad que empeora con el uso y en la tarde. Lo primero es mirar la pupila.',
      ['', N('q', '¿La pupila es normal?', 'Tamaño y reflejo fotomotor',
        'La pupila separa la miastenia de sus imitadores. En la miastenia, la musculatura intrínseca del ojo nunca se compromete.',
        ['No', N('refer', 'Descarta miastenia', 'III par, botulismo, Miller Fisher',
          'Si hay midriasis o la pupila no reacciona, descartas miastenia: piensa en compresión del tercer par, botulismo o Miller Fisher.')],
        ['Sí', N('do', 'Test del hielo + anticuerpos + EMG', 'Anti-receptor; si negativo, anti-MuSK',
          'Si la pupila es normal, test del hielo, anticuerpos anti receptor de acetilcolina, y electromiografía con estimulación repetitiva.',
          ['Confirmada', N('do', 'TAC de tórax + piridostigmina', 'En todos los pacientes',
            'Confirmada la miastenia, TAC de tórax en todos, e inicio de piridostigmina.',
            ['Timoma', N('alert', 'Timectomía', 'Indicación absoluta',
              'Si hay timoma, timectomía siempre.')],
            ['Sin timoma', N('ok', 'Prednisona si no basta', 'Timectomía si generalizada anti-receptor positiva',
              'Sin timoma, si la piridostigmina no basta se agrega prednisona partiendo bajo, y se considera timectomía en la forma generalizada con anticuerpos positivos.')],
            ['Falla respiratoria', N('alert', 'Crisis: UCI, intubación, plasmaféresis o IgEV', 'Suspender piridostigmina',
              'Si aparece falla respiratoria o disfagia grave, es una crisis: UCI, intubación electiva precoz, plasmaféresis o inmunoglobulina, y se suspende la piridostigmina mientras está intubado.')])])])]),
  },
};
