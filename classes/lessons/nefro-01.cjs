// Clase 1.1 de Nefrología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Definir la injuria renal aguda, descartar la obstrucción y separar el riñón sediento del túbulo dañado',
      say: 'Bienvenidos al bloque de nefrología. Partimos con la injuria renal aguda, uno de los temas centrales de urgencia en el EUNACOM. Casi todas sus preguntas se ordenan con tres preguntas simples: ¿hay obstrucción?, ¿el túbulo está sano o dañado?, y entonces, ¿le doy volumen o se lo restrinjo? Si respondes eso, tienes el tema. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Criterios KDIGO: cuándo hablamos de injuria renal aguda',
      cards: [
        { title: 'Basta un criterio', tag: 'KDIGO', kind: 'criteria', items: [
          { t: 'Creatinina sube ≥ 0,3 mg/dL', d: 'En 48 horas',
            say: 'La injuria renal aguda es la caída brusca de la función renal, en horas a días, con retención de productos nitrogenados y alteraciones del agua y los electrolitos. Para llamarla así, los criterios KDIGO exigen al menos uno de tres. El primero: que la creatinina suba cero coma tres miligramos por decilitro o más en cuarenta y ocho horas.' },
          { t: 'Creatinina ≥ 1,5 veces la basal', d: 'Dentro de 7 días',
            say: 'El segundo: que la creatinina llegue a una vez y media su valor basal o más, dentro de los últimos siete días. Por eso siempre vale la pena buscar una creatinina previa del paciente.' },
          { t: 'Diuresis < 0,5 mL/kg/h', d: 'Por 6 horas o más',
            say: 'Y el tercero no mira la sangre, mira la orina: una diuresis menor de medio mililitro por kilo por hora durante seis horas seguidas. Fíjate que la oliguria sola ya define la injuria, aunque la creatinina todavía no suba.' },
        ] },
        { title: 'Estadios de gravedad', tag: 'Del 1 al 3', kind: 'alert', items: [
          { t: 'Estadio 1', d: 'Cr 1,5–1,9 veces · oliguria 6–12 h',
            say: 'Luego se estratifica en tres estadios. Estadio uno: creatinina entre una vez y media y uno coma nueve veces la basal, o el alza de cero coma tres, u oliguria de seis a doce horas.' },
          { t: 'Estadio 2', d: 'Cr 2–2,9 veces · oliguria ≥ 12 h',
            say: 'Estadio dos: creatinina entre dos y dos coma nueve veces la basal, u oliguria de doce horas o más.' },
          { t: 'Estadio 3', d: 'Cr ≥ 3 veces o ≥ 4 mg/dL · diálisis · anuria ≥ 12 h',
            say: 'Y estadio tres, el más grave: creatinina tres veces la basal o más, una creatinina de cuatro o más, anuria de doce horas, o que el paciente ya haya necesitado terapia de reemplazo renal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Cómo el riñón defiende su filtración',
      nodes: [
        { id: 'pam', col: 0, row: 2, k: 'start', t: 'Cae la presión de perfusión', s: 'Deshidratación, shock' },
        { id: 'afe', col: 1, row: 1, k: 'mech', t: 'Aferente se dilata', s: 'Prostaglandinas' },
        { id: 'efe', col: 1, row: 3, k: 'mech', t: 'Eferente se contrae', s: 'Angiotensina II' },
        { id: 'tfg', col: 2, row: 2, k: 'good', t: 'Filtración se mantiene', s: 'Autorregulación' },
        { id: 'aine', col: 0, row: 0, k: 'cause', t: 'AINE', s: 'Bloquean la dilatación aferente' },
        { id: 'ieca', col: 0, row: 4, k: 'cause', t: 'IECA o ARA-II', s: 'Bloquean la contracción eferente' },
        { id: 'pre', col: 3, row: 1, k: 'risk', t: 'IRA prerrenal', s: 'Reversible' },
        { id: 'nta', col: 4, row: 2, k: 'alert', t: 'Necrosis tubular aguda', s: 'Si la isquemia persiste' },
      ],
      edges: [
        { from: 'pam', to: 'afe' }, { from: 'pam', to: 'efe' },
        { from: 'afe', to: 'tfg' }, { from: 'efe', to: 'tfg' },
        { from: 'aine', to: 'afe', label: 'bloquea' }, { from: 'ieca', to: 'efe', label: 'bloquea' },
        { from: 'tfg', to: 'pre', label: 'si fracasa' }, { from: 'pre', to: 'nta', label: 'persiste' },
      ],
      steps: [
        { show: ['pam'], note: 'El riñón tiene dos defensas cuando baja la presión',
          say: 'Ahora el mecanismo, porque explica casi todas las preguntas de fármacos. Cuando cae la presión de perfusión, por deshidratación o shock, el riñón no se queda quieto: tiene dos defensas para mantener su filtración.' },
        { show: ['afe'], note: 'Entrada: la aferente se abre',
          say: 'La primera está en la entrada del glomérulo. La arteriola aferente se dilata, gracias a las prostaglandinas y al óxido nítrico, para que entre la mayor cantidad posible de sangre al ovillo.' },
        { show: ['efe'], note: 'Salida: la eferente se cierra',
          say: 'La segunda está en la salida. La arteriola eferente se contrae, por acción de la angiotensina dos, y así sostiene la presión dentro del glomérulo.' },
        { show: ['tfg'], note: 'Entrada abierta y salida estrecha',
          say: 'Entrada abierta, salida estrecha: con eso la filtración se mantiene aunque la presión haya bajado. Eso es la autorregulación.' },
        { show: ['aine', 'ieca'], note: 'Doble bloqueo: se pregunta mucho',
          say: 'Y aquí está la trampa farmacológica. Los antiinflamatorios no esteroidales, los AINE, bloquean las prostaglandinas y cierran la entrada. Los IECA y los ARA dos bloquean la angiotensina y abren la salida. Si los juntas en un paciente deshidratado, desarmas las dos defensas a la vez. Súmale un diurético, que agrava la hipovolemia, y el riñón queda sin protección.' },
        { show: ['pre'], note: 'Primero es funcional y reversible',
          say: 'Cuando la autorregulación fracasa, la filtración cae: es la injuria prerrenal. El riñón está sano, solo le falta perfusión, y todavía es reversible.' },
        { show: ['nta'], note: 'Del riñón sediento al túbulo muerto',
          say: 'Pero si la hipoperfusión se mantiene, el epitelio del túbulo proximal y de la porción gruesa del asa de Henle se queda sin oxígeno y muere. Pasamos de una falla prerrenal reversible a una necrosis tubular aguda establecida, que es justamente el tema de la próxima clase.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfrentamiento',
      title: 'El orden del estudio: primero la obstrucción',
      nodes: [
        { id: 'cr', col: 0, row: 2, k: 'start', t: 'Sube la creatinina', s: 'O cae la diuresis' },
        { id: 'eco', col: 1, row: 2, k: 'q', t: '¿Hay obstrucción?', s: 'Eco renal y vesical, globo' },
        { id: 'post', col: 2, row: 0, k: 'alert', t: 'IRA postrenal', s: 'Sonda Foley o descompresión urológica' },
        { id: 'tub', col: 2, row: 3, k: 'q', t: '¿El túbulo está sano?', s: 'Índices urinarios y sedimento' },
        { id: 'pre', col: 3, row: 2, k: 'good', t: 'Prerrenal', s: 'Túbulo ávido de sodio' },
        { id: 'nta', col: 3, row: 4, k: 'risk', t: 'Intrínseca', s: 'Túbulo que pierde sodio' },
      ],
      edges: [
        { from: 'cr', to: 'eco' },
        { from: 'eco', to: 'post', label: 'sí' }, { from: 'eco', to: 'tub', label: 'no' },
        { from: 'tub', to: 'pre', label: 'sano' }, { from: 'tub', to: 'nta', label: 'dañado' },
      ],
      steps: [
        { show: ['cr', 'eco'], note: 'Paso uno, siempre: descartar la causa postrenal',
          say: 'Veamos el orden del estudio. Frente a toda alza aguda de creatinina, el primer paso no se discute: descartar una causa postrenal, obstructiva. Se hace con una ecografía renal y vesical, o simplemente palpando o sondeando la vejiga.' },
        { show: ['post'], note: 'Hidronefrosis bilateral o globo vesical',
          say: 'Si encuentras hidronefrosis bilateral o un globo vesical, el diagnóstico está hecho, y el tratamiento es descomprimir: una sonda Foley, una cistostomía o la descompresión urológica de la vía alta. Ojo con el paciente monorreno: le basta obstruir un solo uréter para quedar anúrico.' },
        { show: ['tub'], note: 'Sin obstrucción: la pregunta es el túbulo',
          say: 'Si no hay obstrucción, queda separar lo prerrenal de lo intrínseco. Y la clave es una sola: preguntarle al túbulo si todavía funciona.' },
        { show: ['pre'], note: 'Túbulo sano: retiene sodio y concentra',
          say: 'Un túbulo sano, en un riñón mal perfundido, hace lo que tiene que hacer: está ávido de sodio, lo retiene todo y concentra la orina. Eso es lo prerrenal.' },
        { show: ['nta'], note: 'Túbulo necrótico: pierde sodio, orina isostenúrica',
          say: 'Un túbulo necrótico ya no puede reabsorber. Pierde sodio en la orina, y la orina sale con una densidad cercana a uno coma cero diez, parecida al plasma: es la isostenuria. Esa diferencia es la que miden los índices urinarios.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Causa postrenal',
      title: 'Obstrucción: quién, cómo y qué hacer',
      cards: [
        { title: 'Cuándo sospecharla', tag: '5–10 % de las IRA', kind: 'key', items: [
          { t: 'Anuria o diuresis alternante', d: 'Globo vesical, dolor suprapúbico o lumbar',
            say: 'La obstrucción explica entre cinco y diez por ciento de las injurias renales agudas, y para que falle la función tiene que ser bilateral, o de un riñón único. Sospéchala ante anuria, o una diuresis que alterna entre poca y mucha, con globo vesical o dolor suprapúbico o lumbar.' },
          { t: 'Próstata, litiasis, tumores pélvicos', d: 'Y estenosis uretral, fármacos anticolinérgicos u opioides',
            say: 'La causa más frecuente es la próstata, hiperplasia o cáncer, en el hombre mayor. Después vienen la litiasis bilateral o en riñón único, la estenosis uretral, la vejiga neurogénica, los tumores pélvicos, la fibrosis retroperitoneal y los coágulos. Y no olvides los anticolinérgicos y los opioides.' },
          { t: 'Ecografía: hidronefrosis', d: 'Confirma la obstrucción',
            say: 'La ecografía lo confirma: si ves hidronefrosis, el cuadro es obstructivo hasta que se demuestre lo contrario. Mira esta ecografía: la pelvis del riñón está dilatada y llena de orina. Y en esta tomografía, la hidronefrosis es bilateral.',
            photos: [
              { src: 'biblioteca/03_nefrologia/nefro-01/02_ecografia-hidronefrosis__bailey-love_p1433.jpg', label: 'Hidronefrosis (ecografía)', at: 'Mira esta ecografía', credit: 'Bailey & Love 27.ª ed., Fig. 76.15' },
              { src: 'biblioteca/03_nefrologia/nefro-01/03_tac-hidronefrosis-bilateral__bailey-love_p1482.jpg', label: 'Hidronefrosis bilateral', at: 'Y en esta tomografía', credit: 'Bailey & Love 27.ª ed., Fig. 78.12' }
            ] },
        ] },
        { title: 'Manejo inicial', tag: 'Descomprimir', kind: 'pharma', items: [
          { t: 'Globo vesical: sonda Foley', d: 'Es el primer paso',
            say: 'Si hay globo vesical, el primer paso es instalar una sonda Foley. Es simple, rápido y muchas veces resuelve el cuadro.' },
          { t: 'Obstrucción alta o que no cede', d: 'Urología urgente: catéter doble J o nefrostomía',
            say: 'Si la obstrucción es alta, o la sonda no la resuelve, se deriva de urgencia a Urología, que descomprime con un catéter doble jota o con una nefrostomía percutánea.' },
        ] },
        { title: 'Después de destapar', tag: 'Diuresis postobstructiva', kind: 'alert', items: [
          { t: 'Más de 200 mL/h por 2 horas', d: 'O más de 3 L al día',
            say: 'Ojo con lo que viene después. Al descomprimir, el riñón puede orinar a chorros: más de doscientos mililitros por hora durante dos horas, o más de tres litros al día. Es la diuresis postobstructiva.' },
          { t: 'Reponer volumen y vigilar Na, K y Mg', d: 'Mientras más precoz la descompresión, mejor la recuperación',
            say: 'Se repone volumen y se controlan sodio, potasio y magnesio. Y recuerda que mientras más precoz sea la descompresión, mejor se recupera la función renal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Índices urinarios: preguntarle al túbulo',
      cards: [
        { title: 'Fracción excretada de sodio', tag: 'Índice de referencia', kind: 'key', items: [
          { t: 'FeNa < 1 % y Na urinario < 20', d: 'Prerrenal: el túbulo retiene sodio',
            say: 'El índice de referencia es la fracción excretada de sodio, la FeNa, que compara el sodio y la creatinina en la orina y en el plasma. Si es menor de uno por ciento, y el sodio urinario menor de veinte, el túbulo está reteniendo sodio: es prerrenal.' },
          { t: 'FeNa > 2 % y Na urinario > 40', d: 'Necrosis tubular: el túbulo lo pierde',
            say: 'Si la FeNa es mayor de dos por ciento y el sodio urinario mayor de cuarenta, el túbulo está perdiendo sodio: es una necrosis tubular aguda.' },
        ] },
        { title: 'Si usa diuréticos', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'La FeNa deja de servir', d: 'El diurético fuerza la natriuresis',
            say: 'Ahora, ojo con esto, porque se pregunta. Si el paciente viene usando diuréticos de asa, como la furosemida, el diurético obliga al riñón a perder sodio. La FeNa sale alta aunque el cuadro sea prerrenal, y te engaña.' },
          { t: 'Usar la FeUrea', d: '< 35 % confirma prerrenal',
            say: 'En ese paciente se usa la fracción excretada de urea, la FeUrea. Menor de treinta y cinco por ciento confirma lo prerrenal; sobre cincuenta, habla de necrosis tubular.' },
        ] },
        { title: 'Otros apoyos', tag: 'Mismo sentido', kind: 'normal', items: [
          { t: 'BUN/creatinina > 20', d: 'Prerrenal; < 15 en la necrosis tubular',
            say: 'Hay otros datos que apuntan en el mismo sentido. La relación entre nitrógeno ureico y creatinina sobre veinte sugiere prerrenal, porque el túbulo sano reabsorbe urea; bajo quince, sugiere necrosis tubular.' },
          { t: 'Osmolaridad > 500 y densidad > 1.020', d: 'Orina concentrada: prerrenal',
            say: 'Y la orina concentrada, con osmolaridad sobre quinientos y densidad sobre uno coma cero veinte, es prerrenal. La necrosis tubular da osmolaridad bajo trescientos cincuenta e isostenuria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Nitrógeno ureico',
      title: 'Relación BUN/creatinina: útil, pero con límites',
      cards: [
        { title: 'Qué muestra', tag: 'Ambos en mg/dL', kind: 'key', items: [
          { t: 'Normal: 10 a 15 : 1', d: 'Nitrógeno ureico sobre creatinina',
            say: 'La relación entre el nitrógeno ureico y la creatinina, ambos en miligramos por decilitro, es normalmente de diez a quince por uno.' },
          { t: 'Prerrenal: sobre 20 : 1', d: 'La hipoperfusión reabsorbe urea',
            say: 'En la injuria prerrenal, la hipoperfusión estimula la reabsorción de urea junto con sodio y agua, por acción de la hormona antidiurética, mientras la creatinina casi no se reabsorbe. Por eso la relación sube sobre veinte.' },
          { t: 'Necrosis tubular: 10–15 : 1 o menos', d: 'El túbulo dañado no reabsorbe urea',
            say: 'En la necrosis tubular aguda, el túbulo dañado deja de reabsorber urea, y la relación se queda en diez a quince, o incluso menos.' },
        ] },
        { title: 'Cuándo engaña', tag: 'Limitaciones', kind: 'alert', items: [
          { t: 'Sube sin ser prerrenal', d: 'Hemorragia digestiva alta, corticoides, catabolismo, dieta hiperproteica',
            say: 'Pero ojo, porque también sube sin que sea prerrenal: con una hemorragia digestiva alta, con corticoides, con catabolismo intenso o con una dieta rica en proteínas.' },
          { t: 'Baja en hepatopatía grave o desnutrición', d: 'Se fabrica menos urea',
            say: 'Y baja en la hepatopatía grave y en la desnutrición, porque el cuerpo fabrica menos urea.' },
          { t: 'Nunca como dato aislado', d: 'Se lee con FeNa, sedimento y clínica',
            say: 'Por eso esta relación nunca se interpreta sola. Se lee junto con la fracción excretada de sodio, el sedimento y la clínica del paciente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sedimento urinario',
      title: 'El microscopio dice dónde está el daño',
      cards: [
        { title: 'Túbulo', tag: 'Prerrenal vs necrosis', kind: 'key', items: [
          { t: 'Cilindros hialinos', d: 'Prerrenal: sedimento normal',
            say: 'El sedimento urinario, mirado al microscopio, entrega una respuesta casi inmediata. Los cilindros hialinos, acelulares, son normales y acompañan al estado prerrenal.' },
          { t: 'Cilindros granulosos pardos', d: 'Y células tubulares: necrosis tubular',
            say: 'Los cilindros granulosos oscuros, de color café, junto con células epiteliales tubulares libres, son el sello de la necrosis tubular aguda: son literalmente pedazos del túbulo que se desprendieron.' },
        ] },
        { title: 'Otros compartimentos', tag: 'Otras causas intrínsecas', kind: 'alert', items: [
          { t: 'Cilindros hemáticos', d: 'Y hematíes dismórficos: glomerulonefritis',
            say: 'Los cilindros hemáticos y los glóbulos rojos dismórficos confirman que el daño está en el glomérulo: es una glomerulonefritis aguda. Mira estos glóbulos rojos deformados en el sedimento: son los dismórficos, que pasaron por un glomérulo dañado.',
            photo: { src: 'biblioteca/03_nefrologia/nefro-01/01_sedimento-hematuria-glomerular__cto-nefro_p33.jpg', label: 'Hematíes dismórficos', at: 'Mira estos glóbulos rojos', credit: 'Manual CTO Nefrología 14.ª ed., p. 33' } },
          { t: 'Cilindros leucocitarios', d: 'Con piuria estéril: nefritis intersticial',
            say: 'Y los cilindros leucocitarios con piuria estéril, es decir, glóbulos blancos en la orina con urocultivo negativo, apuntan a una nefritis intersticial aguda inmunoalérgica. Esta la vamos a ver a fondo en la próxima clase, junto a la necrosis tubular.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Volumen o restricción: lo decide el túbulo',
      nodes: [
        { id: 'dx', col: 0, row: 2, k: 'start', t: 'Obstrucción descartada', s: '¿Prerrenal o necrosis tubular?' },
        { id: 'pre', col: 1, row: 0, k: 'good', t: 'IRA prerrenal', s: 'Túbulo sano' },
        { id: 'vol', col: 2, row: 0, k: 'good', t: 'Cristaloides isotónicos', s: 'Bolo de 500 a 1.000 mL' },
        { id: 'sus', col: 3, row: 0, k: 'good', t: 'Suspender nefrotóxicos', s: 'AINE, IECA/ARA-II, diuréticos, aminoglucósidos' },
        { id: 'fur', col: 3, row: 1, k: 'trap', t: 'Furosemida para forzar diuresis', s: 'Error grave' },
        { id: 'nta', col: 1, row: 4, k: 'risk', t: 'Necrosis tubular establecida', s: 'El volumen ya no la revierte' },
        { id: 'bal', col: 2, row: 4, k: 'mech', t: 'Balance neutro', s: '500 mL + diuresis del día' },
        { id: 'aei', col: 3, row: 4, k: 'alert', t: 'Vigilar AEIOU', s: 'Diálisis si hay criterio' },
      ],
      edges: [
        { from: 'dx', to: 'pre' }, { from: 'pre', to: 'vol' }, { from: 'vol', to: 'sus' },
        { from: 'vol', to: 'fur', label: 'nunca' },
        { from: 'dx', to: 'nta' }, { from: 'nta', to: 'bal' }, { from: 'bal', to: 'aei' },
      ],
      steps: [
        { show: ['dx'], note: 'El tratamiento es opuesto en cada caso',
          say: 'Y aquí está la razón de todo este esfuerzo diagnóstico: el tratamiento de lo prerrenal y de la necrosis tubular es casi opuesto. A uno le das volumen; al otro, se lo restringes.' },
        { show: ['pre', 'vol'], note: 'Suero fisiológico o Ringer lactato',
          say: 'En la injuria prerrenal, el pilar es expandir con cristaloides isotónicos, suero fisiológico al cero coma nueve o Ringer lactato, con un bolo inicial de quinientos a mil mililitros. Se guía por la respuesta: presión arterial media de sesenta y cinco o más, llene capilar y una diuresis de al menos medio mililitro por kilo por hora.' },
        { show: ['sus'], note: 'Retirar todo lo que agrede la autorregulación',
          say: 'Y al mismo tiempo se suspenden de inmediato los nefrotóxicos: los AINE, los IECA y ARA dos, los diuréticos y los aminoglucósidos. Es devolverle al riñón las defensas que vimos en el mecanismo.' },
        { show: ['fur'], note: 'Aumenta la depleción y precipita necrosis tubular',
          say: 'Y ojo con la trampa clásica: dar furosemida para forzar la diuresis en un paciente prerrenal hipovolémico. Suena activo, pero es un error grave: aumenta la depleción de volumen y empuja al riñón hacia la necrosis tubular isquémica.' },
        { show: ['nta'], note: 'Más suero ya no revierte el daño',
          say: 'En cambio, si la necrosis tubular ya está establecida, el daño es del parénquima. Infundir más fluidos no va a revertir la falla, y lo único que consigues es un edema pulmonar.' },
        { show: ['bal'], note: 'Aportar solo lo que se pierde',
          say: 'El manejo es de soporte: balance neutro, aportando las pérdidas insensibles, unos quinientos mililitros, más la diuresis del día. Además, ajustar todos los fármacos a la filtración residual y corregir los electrolitos.' },
        { show: ['aei'], note: 'El puente con la clase de diálisis de urgencia',
          say: 'Y vigilar de cerca las indicaciones de diálisis de urgencia, la regla AEIOU, que veremos en detalle dos clases más adelante.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo de rescate',
      title: 'Metas del manejo en la injuria renal aguda',
      head: ['Fase', 'Objetivo', 'Intervención'],
      rows: [
        { cells: ['Resucitación hemodinámica', 'PAM ≥ 65 mmHg y perfusión renal', 'Cristaloides en bolos de 500 mL; noradrenalina si hay vasoplejía'],
          say: 'Ordenemos el manejo por fases. Primero, la resucitación: llevar la presión arterial media a sesenta y cinco o más, con bolos de cristaloides de quinientos mililitros, y noradrenalina si el paciente está vasopléjico.' },
        { cells: ['Protección glomerular', 'Retirar agresores de la autorregulación', 'Suspender AINE, IECA, ARA-II, diuréticos; ajustar antibióticos'],
          say: 'Segundo, proteger el glomérulo: suspender AINE, IECA, ARA dos y diuréticos, y ajustar los antibióticos a la función renal.' },
        { cells: ['Monitoreo del débito', 'Detectar oliguria < 0,5 mL/kg/h', 'Sonda Foley con diuresis horaria si está inestable'],
          say: 'Tercero, medir. En el paciente inestable se instala una sonda Foley con recolección horaria, para detectar la oliguria de inmediato.' },
        { cells: ['Prevención de sobrecarga', 'Evitar edema pulmonar en la necrosis anúrica', 'Aporte de 500 mL + diuresis del día'],
          say: 'Y cuarto, en la necrosis tubular anúrica, evitar la sobrecarga: restringir el aporte a las pérdidas insensibles más lo que orinó el día anterior.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El riñón se defiende',
      images: [
        { src: 'animaciones/nefro-01/A1_autorregulacion_real.mp4', label: 'Autorregulación', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Aferente abierta, eferente cerrada',
          say: 'Cuando cae la presión, el riñón dilata la arteriola de entrada con prostaglandinas y contrae la de salida con angiotensina dos, para mantener la filtración. Por eso los antiinflamatorios, que bloquean las prostaglandinas, y los IECA, que bloquean la angiotensina, pueden precipitar la falla renal en un paciente con poco volumen.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Prerrenal vs necrosis tubular aguda',
      head: ['Parámetro', 'Prerrenal (túbulo íntegro)', 'Necrosis tubular (túbulo dañado)'],
      rows: [
        { cells: ['FeNa', '< 1 %', '> 2 %'],
          say: 'Repasemos la tabla que más se pregunta. La FeNa: bajo uno por ciento en lo prerrenal, sobre dos en la necrosis tubular.' },
        { cells: ['FeUrea (si usa diuréticos)', '< 35 %', '> 50 %'],
          say: 'Si el paciente usa diuréticos, cambias a la FeUrea: bajo treinta y cinco es prerrenal, sobre cincuenta es necrosis tubular. El error es confiar en la FeNa de un paciente con furosemida.' },
        { cells: ['Sodio urinario', '< 20 mEq/L', '> 40 mEq/L'],
          say: 'El sodio urinario: bajo veinte en lo prerrenal, sobre cuarenta en la necrosis tubular.' },
        { cells: ['BUN/creatinina', '> 20', '< 15'],
          say: 'La relación nitrógeno ureico sobre creatinina: mayor de veinte en lo prerrenal, menor de quince en la necrosis.' },
        { cells: ['Osmolaridad / densidad', '> 500 mOsm/kg · > 1.020', '< 350 mOsm/kg · 1.010'],
          say: 'La orina prerrenal está concentrada: osmolaridad sobre quinientos y densidad sobre uno coma cero veinte. La necrótica es isostenúrica, con densidad de uno coma cero diez.' },
        { cells: ['Sedimento', 'Cilindros hialinos', 'Cilindros granulosos pardos, células tubulares'],
          say: 'Y el sedimento: cilindros hialinos en lo prerrenal; cilindros granulosos pardos y células tubulares en la necrosis tubular.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años, hipertenso y diabético, usuario de enalapril 20 mg/día e hidroclorotiazida 25 mg/día. Consulta por 4 días de diarrea acuosa profusa y vómitos. Somnoliento, PA 85/50 mmHg, FC 115 lpm, mucosas secas, llene capilar de 4 s. Creatinina 3,4 mg/dL (basal 1,0 hace 1 mes), BUN 72 mg/dL, K 5,6 mEq/L. Sodio urinario 12 mEq/L; FeNa 0,3 %. Sedimento: algunos cilindros hialinos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Furosemida 40 mg IV para restablecer la diuresis' },
        { letter: 'B', text: 'Suspender enalapril e hidroclorotiazida e hidratar con suero fisiológico 0,9 % IV' },
        { letter: 'C', text: 'Restringir el aporte hídrico a pérdidas insensibles más diuresis' },
        { letter: 'D', text: 'Hemodiálisis de urgencia por creatinina mayor de 3 mg/dL' },
        { letter: 'E', text: 'Biopsia renal percutánea' },
      ],
      correct: 'B',
      explanation: 'IRA KDIGO estadio 3 (creatinina 3,4 veces la basal) prerrenal: hipovolemia en un usuario de IECA y diurético. FeNa < 1 %, Na urinario < 20, BUN/Cr ≈ 21 y cilindros hialinos. Se suspenden IECA y diurético y se expande con cristaloides isotónicos. La furosemida agravaría el shock; la restricción hídrica es para la necrosis tubular establecida.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años, hipertenso y diabético, que toma enalapril e hidroclorotiazida. Lleva cuatro días con diarrea profusa y vómitos. Llega somnoliento, con presión de ochenta y cinco cincuenta, taquicárdico y con mucosas secas. La creatinina es tres coma cuatro, cuando hace un mes era uno. El sodio urinario es doce, la FeNa sale bajo uno por ciento, y el sedimento tiene cilindros hialinos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: furosemida para restablecer la diuresis, suspender los fármacos e hidratar con suero fisiológico, restringir el aporte de agua, hemodiálisis de urgencia por la creatinina, o biopsia renal. Piénsalo.',
        answer: 'Es la B. La creatinina subió más de tres veces, así que es estadio tres, y todo dice prerrenal: FeNa baja, sodio urinario bajo y cilindros hialinos. Además tiene la combinación que desarma la autorregulación: deshidratación, IECA y diurético. Se suspenden y se hidrata. La trampa es la furosemida, que agravaría el shock. Y la restricción hídrica es el manejo de la necrosis tubular, no de este paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 31',
      stem: 'Un paciente de 70 años, diabético tipo 2 e hipertenso, en tratamiento con metformina, losartán e hidroclorotiazida, presenta un cuadro de 4 días de vómitos alimentarios y diarrea, evolucionando con malestar general y disminución del volumen urinario. Al examen físico está bradipsíquico, con presión arterial de 100/50 mmHg, frecuencia cardíaca de 110x\'. En sus exámenes de laboratorio destaca creatinina: 2,0 mg/dl, BUN: 78 mg/dl, FeNa: 0,5%, sodio: 130 mEq/L, potasio: 2,0 mEq/L y cloro: 110 mEq/L.',
      question: '¿Qué fluido debe administrarse inicialmente?',
      options: [
        { letter: 'A', text: 'Solución glucosada al 5%' },
        { letter: 'B', text: 'Solución ringer lactato' },
        { letter: 'C', text: 'Albúmina al 5%' },
        { letter: 'D', text: 'Solución glucosalina isotónica' },
        { letter: 'E', text: 'Solución de bicarbonato al 2/3 molar' },
      ],
      correct: 'B',
      explanation: 'IRA prerrenal por hipovolemia (FeNa 0,5 %, BUN/Cr 39) en un usuario de ARA-II y tiazida. Lo primero es reponer la volemia con un cristaloide isotónico; el suero fisiológico no estaba entre las opciones, y el Ringer lactato es la alternativa correcta. La glucosada no expande el intravascular.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de setenta años, diabético e hipertenso, con metformina, losartán e hidroclorotiazida. Cuatro días de vómitos y diarrea, con menos orina. Está bradipsíquico, con presión de cien cincuenta y taquicardia. Creatinina dos, nitrógeno ureico setenta y ocho, FeNa cero coma cinco por ciento, y un potasio muy bajo, de dos.',
        question: '¿Qué fluido debe administrarse inicialmente?',
        options: 'Las opciones: suero glucosado al cinco por ciento, Ringer lactato, albúmina al cinco por ciento, suero glucosalino, o bicarbonato. Piénsalo.',
        answer: 'Es la B, Ringer lactato. Fíjate que es casi el mismo paciente del caso anterior: deshidratado, con un ARA dos y una tiazida, y una FeNa bajo uno. Es prerrenal, y lo primero es reponer la volemia con un cristaloide isotónico. El suero fisiológico no aparecía, así que el Ringer es la respuesta. El suero glucosado es el distractor: el agua libre no se queda en el intravascular y no corrige el shock.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 147',
      stem: 'Una paciente de 78 años, con antecedente de hipertensión arterial, en tratamiento con hidroclorotiazida, presenta un cuadro de diarrea y vómitos, seguido de compromiso de conciencia. Al examen físico está en sopor profundo, con PA: 80/50 y frecuencia cardiaca de 120x\', regular, con sequedad de mucosas. Se solicitan exámenes de laboratorio que muestran natremia: 156 mEq/L, cloremia: 114 mEq/L, potasemia: 3,1 mEq/L, pH: 7,40, bicarbonato: 14 mmol/L, CO2: 20 mmHg.',
      question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
      options: [
        { letter: 'A', text: 'Suero glucosado al 5% ev' },
        { letter: 'B', text: 'Suero fisiológico al 0,9% ev' },
        { letter: 'C', text: 'Solución de bicarbonato al 2/3 molar ev' },
        { letter: 'D', text: 'Agua por sonda nasogástrica' },
        { letter: 'E', text: 'Sales de rehidratación oral' },
      ],
      correct: 'B',
      explanation: 'Paciente en shock hipovolémico: primero se repone la volemia con un cristaloide isotónico, y después se corrige la hipernatremia. El suero glucosado es hipotónico y no expande el intravascular; la vía oral o enteral no es opción en un paciente en sopor.',
      say: {
        stem: 'Otra pregunta real del mismo examen, julio de dos mil dieciséis. Paciente de setenta y ocho años, hipertensa, con hidroclorotiazida. Tras diarrea y vómitos está en sopor profundo, con presión de ochenta cincuenta, taquicárdica y con mucosas secas. Y aquí el detalle: el sodio está alto, en ciento cincuenta y seis.',
        question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
        options: 'Las opciones: suero glucosado, suero fisiológico, bicarbonato, agua por sonda nasogástrica, o sales de rehidratación oral. Piénsalo.',
        answer: 'Es la B, suero fisiológico. La hipernatremia te tienta a elegir el suero glucosado, porque es hipotónico. Pero la paciente está en shock, y la regla es primero la volemia y después los electrolitos. El suero glucosado no se queda en los vasos y no saca a nadie del shock. Y la vía oral o por sonda no corresponde en un paciente en sopor. La hipernatremia se corrige después, en su propia clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 158',
      stem: 'Paciente con hidronefrosis izquierda severa por urolitiasis y antecedente de nefrectomía derecha previa (monorreno). Sin infección activa.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Catéter doble J para aliviar la obstrucción y preservar la función renal' },
        { letter: 'B', text: 'Nefrectomía izquierda' },
        { letter: 'C', text: 'Nefrostomía percutánea de urgencia' },
        { letter: 'D', text: 'Litotricia extracorpórea sin derivación' },
        { letter: 'E', text: 'Solo analgesia y observar' },
      ],
      correct: 'A',
      explanation: 'Monorreno con obstrucción ureteral por cálculo: es una IRA postrenal y una urgencia urológica. El catéter doble J descomprime el sistema colector y preserva el único riñón funcionante. Observar o litotriptar sin derivar deja al riñón obstruido.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticinco, sobre la causa que siempre se descarta primero. Paciente monorreno, porque le sacaron el riñón derecho, con una hidronefrosis izquierda severa por un cálculo. No tiene infección activa.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: catéter doble J, nefrectomía izquierda, nefrostomía percutánea de urgencia, litotricia sin derivación, o solo analgesia y observar. Piénsalo.',
        answer: 'Es la A, catéter doble J. Es una injuria postrenal en un riñón único, y la conducta es descomprimir la vía urinaria para preservar la función. Sacar su único riñón no tiene sentido, y observar o romper el cálculo sin derivar lo deja obstruido. La nefrostomía también descomprime, pero sin infección el doble J es la opción que se eligió en este examen.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.2.004 · Enfermedad tubular aguda",
      "stem": "Hombre de 64 años, al tercer día de una colectomía, cursó con shock séptico por filtración anastomótica que requirió noradrenalina por 36 horas y recibió amikacina. Hoy diuresis de 300 mL en 24 horas. Creatinina 3,8 mg/dL (basal 1,0). Sodio urinario 58 mEq/L, FeNa 3,2 %. Sedimento: abundantes cilindros granulosos pardos y células epiteliales tubulares.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Insuficiencia renal aguda prerrenal"
        },
        {
          "letter": "B",
          "text": "Glomerulonefritis rápidamente progresiva"
        },
        {
          "letter": "C",
          "text": "Nefritis intersticial aguda por fármacos"
        },
        {
          "letter": "D",
          "text": "Necrosis tubular aguda isquémica y nefrotóxica"
        },
        {
          "letter": "E",
          "text": "Insuficiencia renal aguda obstructiva"
        }
      ],
      "correct": "D",
      "explanation": "Shock prolongado más aminoglucósido, FeNa mayor de 2 %, sodio urinario alto y cilindros granulosos pardos (barro) son el perfil de la necrosis tubular aguda: el túbulo dañado ya no reabsorbe sodio. En lo prerrenal el sodio urinario es bajo y el sedimento es blando.",
      "say": {
        "stem": "Un hombre de sesenta y cuatro años, operado de colon, hizo un shock séptico que necesitó noradrenalina por un día y medio, y recibió amikacina. Hoy orina poco, la creatinina subió de uno a casi cuatro, el sodio urinario es cincuenta y ocho, la fracción excretada de sodio es tres coma dos por ciento, y el sedimento trae cilindros granulosos pardos.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: prerrenal, glomerulonefritis rápidamente progresiva, nefritis intersticial, necrosis tubular aguda o obstructiva. Piénsalo.",
        "answer": "Es la D, necrosis tubular aguda. Isquemia más amikacina, sodio urinario alto y cilindros granulosos pardos dicen túbulo dañado. Lo prerrenal tienta por el shock, pero ahí el riñón guarda sodio y el sedimento es limpio."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.2.009 · Insuficiencia renal aguda obstructiva",
      "stem": "Hombre de 79 años con síntomas prostáticos de años, consulta por 2 días de goteo urinario, dolor hipogástrico y confusión leve. PA 150/90 mmHg. Al examen: masa hipogástrica suprapúbica mate y dolorosa. Creatinina 3,1 mg/dL (basal 1,1 hace 3 meses), K 5,3 mEq/L.",
      "question": "¿Cuál es la primera conducta?",
      "options": [
        {
          "letter": "A",
          "text": "Furosemida 40 mg IV"
        },
        {
          "letter": "B",
          "text": "Hidratación con 2 litros de suero fisiológico"
        },
        {
          "letter": "C",
          "text": "Hemodiálisis de urgencia"
        },
        {
          "letter": "D",
          "text": "Pielografía de eliminación"
        },
        {
          "letter": "E",
          "text": "Instalar sonda vesical y medir el residuo"
        }
      ],
      "correct": "E",
      "explanation": "El globo vesical en un hombre con prostatismo indica obstrucción baja: la sonda vesical es diagnóstica y terapéutica, y suele revertir la falla renal. Después se vigila la poliuria posobstructiva. Los diuréticos y el contraste no tienen lugar.",
      "say": {
        "stem": "Un hombre de setenta y nueve años, con síntomas prostáticos de años, lleva dos días orinando gota a gota, con dolor bajo el ombligo y algo confuso. Tiene una masa suprapúbica mate y dolorosa. La creatinina subió de uno coma uno a tres coma uno.",
        "question": "¿Cuál es la primera conducta?",
        "options": "Las opciones: furosemida, suero fisiológico, hemodiálisis, pielografía o sonda vesical. Piénsalo.",
        "answer": "Es la E, la sonda vesical. Ese globo es una vejiga llena detrás de una próstata obstruida, y vaciarla resuelve la falla renal. La hemodiálisis tienta por la creatinina, pero el potasio no la exige y la causa se corrige con una sonda."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.016 · Sodio urinario",
      "stem": "Mujer de 71 años, hipertensa, usuaria de furosemida 40 mg/día (última dosis esta mañana). Consulta por 5 días de vómitos e ingesta oral escasa. PA 95/60 mmHg con ortostatismo, mucosas secas. Creatinina 2,2 mg/dL (basal 0,8). Sodio urinario 46 mEq/L, FeNa 2,1 %, FeUrea 24 %. Sedimento normal.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Insuficiencia renal prerrenal: la furosemida eleva el sodio urinario y la FeUrea bajo 35 % lo confirma"
        },
        {
          "letter": "B",
          "text": "Necrosis tubular aguda, porque la FeNa es mayor de 2 %"
        },
        {
          "letter": "C",
          "text": "Nefritis intersticial aguda por furosemida"
        },
        {
          "letter": "D",
          "text": "Insuficiencia renal obstructiva"
        },
        {
          "letter": "E",
          "text": "Síndrome hepatorrenal"
        }
      ],
      "correct": "A",
      "explanation": "Los diuréticos aumentan el sodio urinario y la FeNa aunque el riñón esté hipoperfundido. En ese caso se usa la fracción excretada de urea: menor de 35 % confirma lo prerrenal. Clínica de hipovolemia y sedimento normal apoyan.",
      "say": {
        "stem": "Una mujer de setenta y un años, que toma furosemida, lleva cinco días vomitando y casi sin comer. Está hipotensa, con ortostatismo y mucosas secas. La creatinina subió a dos coma dos, el sodio urinario es cuarenta y seis, la fracción excretada de sodio dos coma uno por ciento, y la fracción excretada de urea veinticuatro por ciento.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: prerrenal con sodio urinario falseado por la furosemida, necrosis tubular, nefritis intersticial, obstrucción o hepatorrenal. Piénsalo.",
        "answer": "Es la A. La furosemida hace perder sodio aunque el riñón quiera guardarlo, así que el sodio urinario miente; la fracción excretada de urea bajo treinta y cinco por ciento confirma lo prerrenal. La necrosis tubular tienta por la fracción de sodio sobre dos, pero ese número no vale con diurético."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.063 · Insuficiencia renal aguda",
      "stem": "Un niño de 3 años presentó diarrea con sangre hace una semana, ya resuelta. Ahora está pálido, decaído y orina poco. Exámenes: hemoglobina 7,5 g/dL con esquistocitos en el frotis, plaquetas 45.000/mm3, LDH elevada, Coombs directo negativo y creatinina 2,1 mg/dL.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Púrpura trombocitopénica inmune"
        },
        {
          "letter": "B",
          "text": "Glomerulonefritis postestreptocócica"
        },
        {
          "letter": "C",
          "text": "Síndrome hemolítico urémico"
        },
        {
          "letter": "D",
          "text": "Anemia hemolítica autoinmune"
        },
        {
          "letter": "E",
          "text": "Deshidratación con falla prerrenal"
        }
      ],
      "correct": "C",
      "explanation": "Anemia hemolítica microangiopática (esquistocitos, LDH alta, Coombs negativo), trombocitopenia e injuria renal aguda tras una diarrea disentérica es síndrome hemolítico urémico, por E. coli productora de toxina Shiga. Es la principal causa de injuria renal aguda intrínseca en preescolares en Chile. Manejo de soporte; los antibióticos no están indicados.",
      "say": {
        "stem": "Un niño de tres años que tuvo diarrea con sangre hace una semana está pálido y orina poco, con anemia con esquistocitos, plaquetas bajas y creatinina elevada.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: púrpura trombocitopénica inmune, glomerulonefritis, síndrome hemolítico urémico, hemólisis autoinmune o falla prerrenal. Piénsalo.",
        "answer": "Es la C. Anemia hemolítica con esquistocitos, plaquetas bajas e injuria renal después de una diarrea con sangre es un síndrome hemolítico urémico. La falla prerrenal tienta por la diarrea, pero no explica la hemólisis ni la trombocitopenia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.014 · Nitrogeno ureico (relación bun/creatinina",
      "stem": "Mujer de 80 años con vómitos y diarrea de 3 días, mucosas secas y PA 95/60 mmHg. Exámenes: BUN 64 mg/dL, creatinina 1,6 mg/dL (basal 0,9) y sodio urinario 12 mEq/L.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Glomerulonefritis rápidamente progresiva"
        },
        {
          "letter": "B",
          "text": "Necrosis tubular aguda establecida"
        },
        {
          "letter": "C",
          "text": "Obstrucción urinaria"
        },
        {
          "letter": "D",
          "text": "Lesión renal aguda prerrenal por hipovolemia"
        },
        {
          "letter": "E",
          "text": "Nefritis intersticial aguda"
        }
      ],
      "correct": "D",
      "explanation": "Una relación BUN/creatinina mayor de 20 (aquí 40) indica mayor reabsorción de urea, propia de la falla prerrenal por hipovolemia, y el sodio urinario bajo 20 confirma la conservación tubular de sodio. La NTA establecida muestra relación menor de 15 y sodio urinario alto. La hemorragia digestiva alta y los corticoides también elevan esta relación.",
      "say": {
        "stem": "Mujer de ochenta años deshidratada por vómitos y diarrea, con relación nitrógeno ureico sobre creatinina de cuarenta y sodio urinario bajo.",
        "question": "¿Cómo interpretas su falla renal?",
        "options": "Las opciones: glomerulonefritis rápidamente progresiva, necrosis tubular aguda, obstrucción, prerrenal por hipovolemia o nefritis intersticial. Piénsalo.",
        "answer": "Es la D. Es prerrenal, por la relación alta y el sodio urinario bajo. La necrosis tubular es la evolución si no se repone volumen, pero tendría sodio urinario alto."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.006 · Ecografía renal (tamaño, asimetrías, hidronefrosis)",
      "stem": "Hombre de 75 años con creatinina de 3,2 mg/dL (basal desconocida), sin síntomas urinarios claros. Se solicita ecografía renal.",
      "question": "¿Qué hallazgo ecográfico orienta más a enfermedad renal crónica que a injuria renal aguda?",
      "options": [
        {
          "letter": "A",
          "text": "Riñones de tamaño normal con hidronefrosis bilateral"
        },
        {
          "letter": "B",
          "text": "Riñones aumentados de tamaño"
        },
        {
          "letter": "C",
          "text": "Riñones pequeños (menores de 9 cm), con corteza adelgazada y aumento de la ecogenicidad"
        },
        {
          "letter": "D",
          "text": "Asimetría renal mayor de 1,5 cm por uno grande"
        },
        {
          "letter": "E",
          "text": "Vejiga distendida"
        }
      ],
      "correct": "C",
      "explanation": "La ecografía renal permite distinguir cronicidad: riñones pequeños, de corteza delgada e hiperecogénicos indican ERC avanzada. Además descarta obstrucción (hidronefrosis), la principal causa reversible, y detecta asimetrías (mayor de 1,5 cm sugiere enfermedad renovascular). Excepciones de ERC con riñones grandes: diabetes, poliquistosis, amiloidosis y VIH.",
      "say": {
        "stem": "Hombre de setenta y cinco años con creatinina elevada, sin valor previo conocido. Se pide ecografía renal.",
        "question": "¿Qué hallazgo orienta más a enfermedad renal crónica?",
        "options": "Las opciones: riñones normales con hidronefrosis, riñones grandes, riñones pequeños con corteza delgada e hiperecogénicos, asimetría por uno grande o vejiga distendida. Piénsalo.",
        "answer": "Es la C. Los riñones pequeños, de corteza delgada y más brillantes indican daño crónico. La hidronefrosis tienta porque es el hallazgo más buscado, pero apunta a una obstrucción, potencialmente aguda y reversible."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'En orden', kind: 'key', items: [
          { t: 'Primero descartar obstrucción', d: 'Ecografía renal y vesical, globo',
            say: 'Cerremos con las reglas de oro. Frente a una injuria renal aguda, lo primero es descartar la obstrucción, con ecografía o buscando el globo vesical.' },
          { t: 'FeNa < 1 % = prerrenal', d: 'Con diuréticos: FeUrea < 35 %',
            say: 'Después se le pregunta al túbulo: FeNa bajo uno es prerrenal, y si el paciente usa diuréticos, se mira la FeUrea, bajo treinta y cinco.' },
          { t: 'Sedimento', d: 'Hialinos: prerrenal · granulosos pardos: necrosis tubular',
            say: 'Y el sedimento lo confirma: cilindros hialinos en lo prerrenal, granulosos pardos en la necrosis tubular.' },
        ] },
        { title: 'Fármacos', tag: 'Doble bloqueo', kind: 'alert', items: [
          { t: 'AINE + IECA/ARA-II + deshidratación', d: 'Anulan la autorregulación',
            say: 'Recuerda la combinación peligrosa: AINE que cierran la entrada, IECA o ARA dos que abren la salida, en un paciente deshidratado.' },
        ] },
        { title: 'Tratamiento', tag: 'Opuestos', kind: 'pharma', items: [
          { t: 'Prerrenal: cristaloides isotónicos', d: 'Y suspender nefrotóxicos; nunca furosemida',
            say: 'La prerrenal se trata con cristaloides isotónicos y suspendiendo nefrotóxicos, nunca con furosemida.' },
          { t: 'Necrosis tubular: balance neutro', d: 'El exceso de volumen da edema pulmonar',
            say: 'La necrosis tubular establecida se trata con balance neutro, porque el volumen ya no la revierte. Si te llevas una sola idea de hoy: el túbulo sano pide volumen, y el túbulo dañado lo rechaza; por eso primero hay que saber cuál tienes. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Injuria renal aguda: obstrucción, túbulo y conducta',
    root: N('start', 'Alza aguda de creatinina', 'O diuresis < 0,5 mL/kg/h por 6 h',
      'La creatinina subió cero coma tres o más en cuarenta y ocho horas, o una vez y media la basal, o cayó la diuresis. Es una injuria renal aguda por KDIGO. Ahora, el orden.',
      ['', N('q', '¿Hay obstrucción?', 'Eco renal y vesical, globo',
        'Lo primero, siempre: ¿hay obstrucción? Ecografía renal y vesical, o buscar el globo vesical.',
        ['SÍ', N('alert', 'IRA postrenal', 'Sonda Foley o descompresión urológica',
          'Hidronefrosis o globo vesical: es postrenal. Se descomprime de inmediato, con sonda Foley, cistostomía o descompresión de la vía alta.')],
        ['NO', N('q', '¿FeNa < 1 % y Na urinario < 20?', 'Con diuréticos: FeUrea < 35 %',
          'Sin obstrucción, se le pregunta al túbulo. ¿La FeNa es menor de uno por ciento y el sodio urinario menor de veinte? Si usa diuréticos, mira la FeUrea.',
          ['SÍ', N('do', 'Prerrenal', 'Cristaloides isotónicos + suspender nefrotóxicos',
            'El túbulo retiene sodio: es prerrenal. Cristaloides isotónicos y suspender AINE, IECA, ARA dos y diuréticos. Nunca furosemida para forzar la diuresis.')],
          ['NO', N('q', '¿Qué muestra el sedimento?', 'Daño intrínseco',
            'El túbulo pierde sodio: el daño es intrínseco. El sedimento te dice dónde está.',
            ['Granulosos pardos', N('alert', 'Necrosis tubular aguda', 'Balance neutro, ajustar fármacos, vigilar AEIOU',
              'Cilindros granulosos pardos y células tubulares: necrosis tubular aguda. Soporte con balance neutro, ajuste de fármacos y vigilancia de los criterios de diálisis.')],
            ['Hemáticos', N('refer', 'Glomerulonefritis', 'Hematíes dismórficos',
              'Cilindros hemáticos y hematíes dismórficos: el daño está en el glomérulo. Es una glomerulonefritis, y se deriva a nefrología.')],
            ['Leucocitarios', N('do', 'Nefritis intersticial', 'Piuria estéril: suspender el fármaco',
              'Cilindros leucocitarios con piuria estéril: nefritis intersticial aguda. Lo primero es suspender el fármaco culpable, como veremos en la próxima clase.')])])])]),
  },
};
