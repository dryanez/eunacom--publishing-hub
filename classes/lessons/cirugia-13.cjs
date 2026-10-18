// Clase 11.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-13, classId cirugia-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuánto quemó, cuánto repones y a quién derivas antes de las veinticuatro horas',
      say: 'Cerramos el bloque de trauma con el gran quemado, uno de los temas de mayor rentabilidad del EUNACOM. Vas a ver que casi todo se resuelve con tres preguntas en orden: cuánta superficie se quemó, si eso lo hace un gran quemado según el GES, y cuánto suero le repones en las primeras horas. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Profundidad',
      title: '¿Qué tan profunda es esta quemadura?',
      cards: [
        { title: 'Superficiales', tag: 'Duelen mucho', kind: 'normal', items: [
          { t: 'Primer grado', d: 'Eritema seco, sin flictenas, no cuenta',
            say: 'Antes de calcular nada, fíjate qué tan profunda es la quemadura, porque de eso depende todo lo que viene. El primer grado es solo eritema seco y doloroso, como una quemadura solar, y ojo con esto: no se cuenta para ningún cálculo de superficie.' },
          { t: 'Segundo grado superficial', d: 'Flictenas húmedas, rosadas, muy dolorosas',
            say: 'El segundo grado superficial sí tiene flictenas, con un lecho húmedo y rosado, y es el más doloroso de todos, porque las terminaciones nerviosas siguen intactas. Mira este corte de la piel: la lesión llega solo a la dermis superficial, y el antebrazo muestra las ampollas y el lecho brillante.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-13/01_quemadura_ab_superficial__atls_p230.jpg', label: 'Espesor parcial superficial', at: 'Mira este corte de la piel', credit: 'ATLS 10.ª ed., Fig. 9-5' } },
        ] },
        { title: 'Profundas', tag: 'Duelen poco o nada', kind: 'alert', items: [
          { t: 'Segundo grado profundo', d: 'Lecho pálido, seco, sensibilidad ya baja',
            say: 'El segundo grado profundo ya destruyó parte de esas terminaciones: el lecho se ve pálido y seco, y duele menos. Casi siempre necesita injerto. Mira este otro corte: la lesión baja hasta la dermis profunda, el lecho es moteado, no blanquea y casi no siente el pinchazo.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-13/02_quemadura_ab_profunda__atls_p230.jpg', label: 'Espesor parcial profundo', at: 'Mira este otro corte', credit: 'ATLS 10.ª ed., Fig. 9-5' } },
          { t: 'Tercer grado', d: 'Escara acartonada, indolora, sin llenado capilar',
            say: 'Y el tercer grado es la escara acartonada, blanca o negra, completamente indolora. Guarda esta idea de que no duele, porque te va a servir más adelante para reconocer una complicación grave. En esta paciente se mezclan zonas rosadas con zonas blancas y pardas, secas y acartonadas: esas últimas son las profundas.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-13/03_quemadura_foto__atls_p230.jpg', label: 'Profundidad mixta', at: 'En esta paciente', credit: 'ATLS 10.ª ed., Fig. 9-5' } },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Hasta dónde llega cada grado',
      images: [
        { src: 'animaciones/cirugia-13/A1_profundidad_quemadura.mp4', label: 'Profundidad de la quemadura', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Epidermis, dermis, hipodermis: cuánto se destruye',
          say: 'Mira cómo baja la lesión por las capas de la piel. En el primer grado solo se daña la epidermis: eritema seco y doloroso, que no cuenta para la superficie. En el segundo grado llega a la dermis: con flictenas y muy dolorosa si es superficial, pálida y con menos dolor si es profunda. Y en el tercer grado se destruye todo el espesor, con las terminaciones nerviosas incluidas, por eso es indolora.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Extensión',
      title: 'La regla de Wallace: cuánto se quemó',
      nodes: [
        { id: 'nue', col: 0, row: 0, k: 'start', t: 'Regla de los nueve', s: 'Solo cuenta el segundo y tercer grado' },
        { id: 'cab', col: 1, row: 0, k: 'mech', t: 'Cabeza y cuello', s: 'Nueve por ciento' },
        { id: 'tro', col: 1, row: 1, k: 'mech', t: 'Tronco anterior o posterior', s: 'Dieciocho por ciento cada uno' },
        { id: 'bra', col: 1, row: 2, k: 'mech', t: 'Cada brazo entero', s: 'Nueve por ciento' },
        { id: 'pie', col: 1, row: 3, k: 'mech', t: 'Cada pierna entera', s: 'Dieciocho por ciento' },
        { id: 'pal', col: 2, row: 2, k: 'good', t: 'Regla de la palma', s: 'La mano del paciente vale uno por ciento' },
      ],
      edges: [
        { from: 'nue', to: 'cab' }, { from: 'nue', to: 'tro' }, { from: 'nue', to: 'bra' }, { from: 'nue', to: 'pie' },
        { from: 'bra', to: 'pal', label: 'parches dispersos' },
      ],
      steps: [
        { show: ['nue'], note: 'El primer grado nunca entra en la cuenta',
          say: 'Ahora sí, calculemos la superficie quemada, y la herramienta es la regla de los nueve de Wallace. Recuerda la regla de oro: solo sumas el segundo y el tercer grado. El eritema del primer grado no entra en ninguna cuenta. Mira esta mano: tiene segundo y tercer grado, y solo esas zonas entrarían en la suma.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-13/01_quemaduras-2-y-3-grado__cto-cirugia_p37.jpg', label: 'Segundo y tercer grado', at: 'Mira esta mano', credit: 'Manual CTO Cirugía 14.ª ed., p. 37' } },
        { show: ['cab'], note: 'Cabeza y cuello: nueve por ciento',
          say: 'La cabeza y el cuello valen nueve por ciento. Mira esta figura: en el adulto, la cara anterior de la cabeza vale cuatro coma cinco, la posterior otro tanto, y ahí tienes todos los segmentos con su porcentaje.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-13/04_regla_de_los_9__atls_p175.jpg', label: 'Regla de los nueve', at: 'Mira esta figura', credit: 'ATLS 10.ª ed., Fig. 9-4' } },
        { show: ['tro'], note: 'Tronco: dieciocho por ciento adelante, dieciocho atrás',
          say: 'El tronco vale dieciocho por ciento por delante, y otro dieciocho por atrás.' },
        { show: ['bra'], note: 'Cada brazo completo: nueve por ciento',
          say: 'Cada brazo completo vale nueve por ciento, así que los dos juntos son dieciocho.' },
        { show: ['pie'], note: 'Cada pierna completa: dieciocho por ciento',
          say: 'Y cada pierna completa vale dieciocho por ciento, treinta y seis entre las dos. El perineo, aparte, vale solo uno.' },
        { show: ['pal'], note: 'Útil en quemaduras parchadas',
          say: 'Y cuando las quemaduras están repartidas en parches, en vez de sumar segmentos completos, usa la palma del propio paciente con los dedos juntos: esa palma vale uno por ciento. Con esta suma, ya tienes el porcentaje de superficie corporal quemada, y ese número es la puerta de entrada a todo lo que viene.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gravedad',
      title: '¿Es un gran quemado según el GES?',
      nodes: [
        { id: 'scq', col: 0, row: 1, k: 'q', t: '¿Cuánto suma la superficie?', s: 'Y qué zonas están comprometidas' },
        { id: 'gar', col: 1, row: 0, k: 'mech', t: 'Índice de Garcés', s: 'Edad más superficie ponderada por grado' },
        { id: 'maj', col: 1, row: 2, k: 'risk', t: 'Más de veinte por ciento', s: 'O más de diez en niños y ancianos' },
        { id: 'esp', col: 1, row: 3, k: 'risk', t: 'Zonas especiales o inhalación', s: 'Cara, manos, pies, genitales, vía aérea' },
        { id: 'ges', col: 2, row: 1, k: 'alert', t: 'Gran quemado, GES cincuenta y seis', s: 'Traslado antes de veinticuatro horas' },
        { id: 'men', col: 2, row: 3, k: 'good', t: 'Quemadura menor', s: 'Manejo ambulatorio' },
      ],
      edges: [
        { from: 'scq', to: 'gar' }, { from: 'gar', to: 'ges', label: 'más de setenta puntos' },
        { from: 'scq', to: 'maj', label: 'cumple' }, { from: 'maj', to: 'ges' },
        { from: 'scq', to: 'esp', label: 'cumple' }, { from: 'esp', to: 'ges' },
        { from: 'scq', to: 'men', label: 'nada de esto' },
      ],
      steps: [
        { show: ['scq'], note: 'La misma pregunta de siempre: ¿esto es grave?',
          say: 'Con el porcentaje ya calculado, viene la pregunta que decide todo: ¿esto es un gran quemado? Y aquí el examen te da varios caminos distintos para llegar a la misma respuesta.' },
        { show: ['gar'], note: 'Un puntaje sobre setenta ya es grave',
          say: 'El primer camino es el índice de Garcés: la edad del paciente, más la superficie de segundo grado, más el doble de la superficie de tercer grado. Si ese puntaje pasa de setenta, ya estás frente a un quemado grave.' },
        { show: ['maj'], note: 'El corte cambia en los extremos de la vida',
          say: 'El segundo camino es directo: más de veinte por ciento de superficie en un adulto, o más de diez en un niño o un adulto mayor, porque a esas edades toleran mucho peor la misma quemadura.' },
        { show: ['esp'], note: 'Aunque la superficie total sea chica',
          say: 'Y el tercer camino no depende del porcentaje, sino de dónde está la quemadura: cara, manos, pies, genitales, o si sospechas que la vía aérea también se quemó. Con cualquiera de estos tres caminos, llegas al mismo lugar.' },
        { show: ['ges'], note: 'Antes de veinticuatro horas, no antes de una semana',
          say: 'Gran quemado, y eso activa la garantía GES número cincuenta y seis: acceso a un centro especializado antes de veinticuatro horas. Fíjate en ese plazo, porque se pregunta tal cual.' },
        { show: ['men'], note: 'Sin ninguno de los criterios anteriores',
          say: 'Si no cumple ninguno de estos criterios, es una quemadura menor, y se maneja de forma ambulatoria con analgesia y curaciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reanimación',
      title: 'Parkland: cuánto suero y en qué tiempo',
      cards: [
        { title: 'La fórmula', tag: 'Ringer lactato', kind: 'key', items: [
          { t: 'Cuatro por kilo por SCQ', d: 'Solo con segundo y tercer grado',
            say: 'Ya sabes que es un gran quemado, así que ahora repones el volumen que perdió, con la fórmula de Parkland: cuatro mililitros, por el peso en kilos, por el porcentaje de superficie quemada. Y de nuevo, solo cuenta el segundo y el tercer grado.' },
          { t: 'Ese total en veinticuatro horas', d: 'Todo en Ringer lactato',
            say: 'Ese resultado es el volumen total de Ringer lactato para las primeras veinticuatro horas.' },
        ] },
        { title: 'La distribución horaria', tag: 'El detalle que se pregunta', kind: 'alert', items: [
          { t: 'Mitad en las primeras ocho horas', d: 'Contadas desde el accidente, no del ingreso',
            say: 'Y aquí está el detalle que más se pregunta: la mitad de ese volumen se pasa en las primeras ocho horas, pero esas ocho horas se cuentan desde el momento del accidente, no desde que el paciente llega al hospital. Si demoró dos horas en llegar, te quedan solo seis para pasar esa mitad.' },
          { t: 'La otra mitad, en dieciséis horas', d: 'Completa las veinticuatro horas totales',
            say: 'La otra mitad se pasa en las dieciséis horas que quedan.' },
        ] },
        { title: 'La meta que manda', tag: 'Diuresis horaria', kind: 'pharma', items: [
          { t: 'Medio a un mililitro por hora', d: 'Por kilo, en adultos, con sonda Foley',
            say: 'Pero no te quedes solo con la fórmula: Parkland es una estimación inicial, y lo que de verdad decide cuánto sigues pasando es la diuresis horaria, con sonda Foley. En el adulto, la meta es de medio a un mililitro por kilo por hora.' },
          { t: 'Más alto en niños', d: 'Sube la meta si hay mioglobinuria',
            say: 'En los niños la meta sube un poco, y si hay mioglobinuria por una quemadura eléctrica, sube todavía más, para arrastrar esa mioglobina y proteger el riñón.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Parkland en el reloj',
      images: [
        { src: 'animaciones/cirugia-13/A2_parkland_ocho_horas.mp4', label: 'Parkland: ocho horas desde el accidente', credit: 'Gráfico propio (cifras del libro)' },
      ],
      steps: [
        { note: 'El reloj parte en el accidente',
          say: 'Veamos un ejemplo con una persona de setenta kilos y treinta por ciento de superficie quemada. Cuatro por setenta por treinta son ocho mil cuatrocientos mililitros de Ringer lactato en veinticuatro horas. La primera mitad se pasa en las primeras ocho horas, pero el reloj parte en el accidente. Si llegó a las dos horas, te quedan seis para pasar esa mitad, y la velocidad sube a setecientos mililitros por hora. Y recuerda que lo que manda es la diuresis.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencias del quemado',
      title: 'Lo que mata antes de que llegues al suero',
      nodes: [
        { id: 'sos', col: 0, row: 0, k: 'risk', t: 'Sospecha de vía aérea quemada', s: 'Vibrisas chamuscadas, esputo con hollín' },
        { id: 'int', col: 1, row: 0, k: 'alert', t: 'Intubación precoz', s: 'Antes de que el edema cierre la glotis' },
        { id: 'mon', col: 0, row: 1, k: 'risk', t: 'Intoxicación por monóxido', s: 'Todo rescatado de incendio cerrado' },
        { id: 'oxi', col: 1, row: 1, k: 'alert', t: 'Oxígeno al cien por ciento', s: 'El saturómetro engaña, sale normal' },
        { id: 'cir', col: 0, row: 2, k: 'risk', t: 'Escara circular de tercer grado', s: 'En una extremidad o en el tórax' },
        { id: 'esc', col: 1, row: 2, k: 'alert', t: 'Escarotomía de urgencia', s: 'Corta la escara, no la piel sana' },
      ],
      edges: [
        { from: 'sos', to: 'int' }, { from: 'mon', to: 'oxi' }, { from: 'cir', to: 'esc' },
      ],
      steps: [
        { show: ['sos'], note: 'Busca estos signos en la cara',
          say: 'Antes de terminar, tres urgencias que pueden matar mucho antes que la falta de volumen. La primera es la vía aérea: sospecha injuria por inhalación si ves vibrisas nasales chamuscadas, esputo con hollín, o disfonía.' },
        { show: ['int'], note: 'No esperes a que aparezca el estridor',
          say: 'Y la conducta es intubar de forma precoz, antes de que el edema de la glotis avance tanto que ya no puedas pasar el tubo.' },
        { show: ['mon'], note: 'Se asume en todo incendio en un espacio cerrado',
          say: 'La segunda urgencia es el monóxido de carbono. A todo paciente rescatado de un incendio en un espacio cerrado lo tratas como intoxicado, aunque se vea bien. Y aquí va la trampa clásica: el saturómetro de dedo sale normal, porque no distingue el oxígeno de la carboxihemoglobina.' },
        { show: ['oxi'], note: 'El oxígeno es tratamiento, no solo soporte',
          say: 'Por eso das oxígeno al cien por ciento con mascarilla con reservorio de inmediato: eso saca el monóxido de la hemoglobina mucho más rápido.' },
        { show: ['cir'], note: 'La escara actúa como un torniquete',
          say: 'Y la tercera es mecánica: una escara de tercer grado que rodea completamente una extremidad o el tórax se comporta como un torniquete que no cede, mientras el edema de abajo sigue creciendo.' },
        { show: ['esc'], note: 'Se corta sin anestesia porque la escara es insensible',
          say: 'Ahí no esperas: escarotomía de urgencia, cortando solo la escara hasta la grasa, sin necesidad de anestesia, porque el tercer grado ya no siente. Si esperas a que se pierdan los pulsos, ya perdiste la extremidad. Mira esta extremidad: las incisiones longitudinales abren la escara y el tejido de abajo se expande.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-13/08_escarotomia__sherman_p95.jpg', label: 'Escarotomía', at: 'Mira esta extremidad', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 95' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Curación y quemadura solar',
      title: 'Curar la quemadura menor, paso a paso',
      cards: [
        { title: 'Limpieza', tag: 'Nivel realizar', kind: 'key', items: [
          { t: 'Agua corriente, diez a veinte minutos', d: 'Sin hielo; no en el gran quemado',
            say: 'Cerremos la parte de la quemadura menor con la curación básica, que tienes que saber hacer. Como primeros auxilios, enfrías la zona con agua corriente por diez a veinte minutos, y retiras ropas y joyas. Ojo: nada de hielo, y no lo haces en el gran quemado, porque se te enfría entero y cae en hipotermia.' },
          { t: 'Suero y jabón suave, con analgesia', d: 'Flictenas chicas se dejan; las tensas o rotas, se desbridan',
            say: 'Después, ya con analgesia, lavas con suero fisiológico y jabón suave, retiras el tejido suelto y decides qué haces con las flictenas: las pequeñas e íntegras se dejan, y las grandes, tensas o rotas se desbridan.' },
        ] },
        { title: 'Cobertura', tag: 'Qué pones encima', kind: 'pharma', items: [
          { t: 'Sulfadiazina de plata al uno por ciento', d: 'No en alergia a sulfas, embarazo a término ni recién nacidos',
            say: 'Cubres con sulfadiazina de plata al uno por ciento, o con apósitos de plata, y gasa. La sulfadiazina se evita en la alergia a las sulfas, en el embarazo a término y en el recién nacido.' },
          { t: 'Sin remedios caseros ni antibióticos', d: 'Revisa la vacuna antitetánica',
            say: 'No se usan remedios caseros, ni hielo, ni antibióticos sistémicos de forma profiláctica, pero sí verificas la vacuna antitetánica. Controlas a las veinticuatro o cuarenta y ocho horas, y derivas si cumple criterios de gran quemado o está en cara, manos, genitales o pliegues.' },
        ] },
        { title: 'Quemadura solar', tag: 'Primer grado por UVB', kind: 'normal', items: [
          { t: 'Eritema máximo a las 24 a 36 horas', d: 'Con flictenas ya es segundo grado superficial',
            say: 'La quemadura solar es un primer grado por radiación ultravioleta: el eritema aparece a las seis horas y alcanza su máximo entre las veinticuatro y las treinta y seis. Si es intensa tiene flictenas, y entonces ya es un segundo grado superficial, con fiebre o náuseas incluidas.' },
          { t: 'Sintomático y prevención', d: 'Frío, AINE, emolientes; fotoprotector FPS 30 o más',
            say: 'El tratamiento es sintomático: compresas frías, hidratación oral, antiinflamatorio o paracetamol y emolientes, y no abres las flictenas. Lo importante es la prevención: fotoprotector con factor treinta o más, reaplicado cada dos horas, y evitar el sol entre las once y las dieciséis horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cobertura',
      title: 'Injertos y colgajos: cuál usar',
      cards: [
        { title: 'Injerto', tag: 'Sin irrigación propia', kind: 'key', items: [
          { t: 'Vive del lecho que lo recibe', d: 'Imbibición en las primeras 48 horas; luego neovascularización',
            say: 'Cuando la quemadura es profunda, la escarectomía precoz con autoinjerto es el tratamiento. Y aquí la diferencia que se pregunta: el injerto es tejido trasplantado sin su irrigación, así que sobrevive por imbibición plasmática del lecho durante las primeras cuarenta y ocho horas, y después por neovascularización.' },
          { t: 'No prende sobre hueso o tendón desnudo', d: 'Se pierde por hematoma, infección y fricción',
            say: 'Por eso el lecho tiene que estar bien vascularizado y sin infección: sobre hueso, tendón o cartílago desnudos, el injerto no prende. Y las causas de pérdida más comunes son el hematoma o seroma, la infección y la fricción.' },
        ] },
        { title: 'Espesor del injerto', tag: 'Parcial o total', kind: 'criteria', items: [
          { t: 'Espesor parcial', d: 'Prende fácil, la zona dadora cicatriza sola, se contrae más',
            say: 'El injerto de espesor parcial lleva epidermis y parte de la dermis, se toma del muslo, prende con más facilidad y su zona dadora cicatriza sola, pero se contrae más.' },
          { t: 'Espesor total', d: 'Mejor resultado estético: cara y manos',
            say: 'El de espesor total da mejor resultado estético, y por eso se reserva para cara y manos, pero exige cerrar la zona dadora de forma directa.' },
        ] },
        { title: 'Colgajo', tag: 'Trae su propio pedículo', kind: 'pharma', items: [
          { t: 'Cubre lo que el injerto no puede', d: 'Hueso, tendón, implantes y defectos profundos',
            say: 'El colgajo es otra cosa: es tejido que lleva su propio pedículo vascular, y por eso se usa para cubrir hueso, tendón, implantes y defectos profundos. Puede ser cutáneo, fasciocutáneo o musculocutáneo, local, a distancia o libre microquirúrgico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Secuelas',
      title: 'Cuando la quemadura ya cicatrizó',
      cards: [
        { title: 'Cicatrices que sobresalen', tag: 'No es lo mismo', kind: 'alert', items: [
          { t: 'Hipertrófica: respeta el borde', d: 'Elevada, dentro de los límites de la quemadura; mejora con el tiempo',
            say: 'Después de la quemadura vienen las secuelas. La cicatriz hipertrófica aparece en semanas, es elevada, pero queda confinada a los límites de la quemadura y mejora con el tiempo. Mira esta cicatriz: está en relieve, enrojecida, y no se sale del área quemada.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-13/07_cicatriz-hipertrofica-quemadura__bailey-love_p644.jpg', label: 'Cicatriz hipertrófica', at: 'Mira esta cicatriz', credit: "Bailey & Love 27.ª ed., p. 644" } },
          { t: 'Queloide: sobrepasa el borde', d: 'No regresa; piel oscura, hombros, tórax, lóbulos',
            say: 'El queloide, en cambio, sobrepasa los márgenes, no regresa solo y es más frecuente en piel oscura, en hombros, tórax y lóbulos de las orejas.' },
        ] },
        { title: 'Bridas y Marjolin', tag: 'Dos complicaciones', kind: 'criteria', items: [
          { t: 'Bridas y contracturas', d: 'Cuello, axila, párpados o articulaciones: plastía en Z',
            say: 'Las bridas y contracturas sobre articulaciones, cuello, axila o párpados limitan el movimiento y se resuelven con cirugía, con plastías en Z o injertos.' },
          { t: 'Úlcera de Marjolin', d: 'Carcinoma escamoso sobre cicatriz crónica: biopsia',
            say: 'Y la complicación rara pero que se pregunta: una úlcera que no cierra sobre una cicatriz antigua es una úlcera de Marjolin, un carcinoma escamoso, hasta demostrar lo contrario. Primero biopsia, después se planifica la resección.' },
        ] },
        { title: 'Prevención y tratamiento', tag: 'Qué indicas', kind: 'pharma', items: [
          { t: 'Presoterapia doce a dieciocho meses', d: 'Más silicona, férulas, kinesiterapia y fotoprotección',
            say: 'Se previenen cubriendo temprano las quemaduras profundas, con kinesiterapia, férulas, posiciones antideformantes, láminas de silicona, fotoprotección, y presoterapia con prendas elásticas durante doce a dieciocho meses.' },
          { t: 'Corticoide intralesional', d: 'Para hipertróficas y queloides; derivar a plástica',
            say: 'Y las cicatrices hipertróficas y los queloides se tratan con corticoide dentro de la lesión, derivando al paciente a cirugía plástica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo el razonamiento del gran quemado en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los errores que más se repiten en el gran quemado',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Calcular la superficie quemada', 'Sumar solo segundo y tercer grado', 'Incluir el eritema de primer grado'],
          say: 'Repasemos las trampas. Al calcular la superficie, solo se suma el segundo y el tercer grado. Sumar el eritema de primer grado infla el cálculo y te hace pasar suero de más.' },
        { cells: ['Contar las ocho horas de Parkland', 'Desde la hora del accidente', 'Desde que el paciente llega al hospital'],
          say: 'Las ocho horas de Parkland se cuentan desde el accidente, no desde el ingreso. Contarlas desde el ingreso deja al paciente sub reanimado justo cuando más lo necesita.' },
        { cells: ['Rescatado de incendio, satura noventa y ocho por ciento', 'Sospechar monóxido igual, pedir carboxihemoglobina', 'Confiar en la oximetría de pulso'],
          say: 'Un rescatado de incendio con saturación de noventa y ocho por ciento igual puede estar intoxicado con monóxido: pide carboxihemoglobina. Confiar en el saturómetro es el error que más cuesta.' },
        { cells: ['Escara circular con pulsos que se pierden', 'Escarotomía de urgencia', 'Esperar a la evaluación de un especialista'],
          say: 'Y con una escara circular y pulsos que empiezan a perderse, la escarotomía se hace ya, sin esperar a un especialista que puede llegar tarde.' },
        { cells: ['Quemadura menor con flictenas', 'Agua corriente, suero, sulfadiazina de plata', 'Hielo, remedio casero o antibiótico profiláctico'],
          say: 'En la quemadura menor, agua corriente, suero y sulfadiazina de plata. El hielo, los remedios caseros y el antibiótico profiláctico son errores clásicos, y recuerda revisar la vacuna antitetánica.' },
        { cells: ['Defecto con hueso o tendón desnudo', 'Colgajo, con su propio pedículo', 'Injerto de piel, que no prende ahí'],
          say: 'Si el defecto deja hueso o tendón desnudo, necesitas un colgajo. El injerto vive del lecho, y sobre un lecho sin irrigación no prende.' },
        { cells: ['Úlcera crónica sobre cicatriz antigua', 'Biopsia incisional: sospecha de Marjolin', 'Resecar sin histología o solo curar'],
          say: 'Y una úlcera crónica sobre una cicatriz de quemadura es una sospecha de Marjolin: primero biopsia. Resecar sin histología, o seguir curando, retrasa el tratamiento del cáncer.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 28 años sufre quemaduras por líquido caliente hace 3 horas. Presenta flictenas húmedas y rosadas, muy dolorosas, en todo el tronco anterior y en toda una extremidad inferior. No tiene compromiso facial ni de la vía aérea. Pesa 60 kg.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ambulatorio con analgesia oral y curaciones' },
        { letter: 'B', text: 'Calcular Parkland con 36 % de superficie quemada y derivar como gran quemada' },
        { letter: 'C', text: 'Calcular Parkland con 18 % de superficie quemada y derivar como gran quemada' },
        { letter: 'D', text: 'Indicar antibióticos profilácticos y control ambulatorio en 48 horas' },
        { letter: 'E', text: 'Realizar escarotomía profiláctica antes de cualquier examen' },
      ],
      correct: 'B',
      explanation: 'Tronco anterior (18 %) más una extremidad inferior completa (18 %) suman 36 % de superficie quemada de segundo grado, que supera el 20 % que define gran quemado en adultos. Se calcula Parkland con ese 36 % y se activa el traslado GES. La escarotomía no aplica: no hay escara circular de tercer grado.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiocho años con quemaduras por líquido caliente hace tres horas: flictenas húmedas, rosadas y muy dolorosas en todo el tronco anterior y en toda una pierna. Sin compromiso facial ni de la vía aérea, y pesa sesenta kilos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: manejo ambulatorio, calcular Parkland con treinta y seis por ciento y derivar como gran quemada, calcular Parkland con dieciocho por ciento y derivar, dar antibióticos y controlar en dos días, o hacer una escarotomía profiláctica. Piénsalo.',
        answer: 'Es la B. Suma la superficie: tronco anterior, dieciocho por ciento, más una pierna completa, otro dieciocho. Son treinta y seis por ciento, muy por encima del veinte que define gran quemado en un adulto. Con ese número calculas Parkland y activas el traslado GES. La escarotomía es la trampa: aquí no hay ninguna escara circular de tercer grado, así que no corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 77',
      stem: 'Niño con quemadura en palmas y dedos, con eritema importante y ampollas, que llega a urgencias inquieto e irritable.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Aplicar apósitos de plata y hospitalizar' },
        { letter: 'B', text: 'Enfriar con agua fría y cubrir con gasa estéril' },
        { letter: 'C', text: 'Indicar analgesia endovenosa' },
        { letter: 'D', text: 'Hospitalizar para manejo de quemaduras' },
        { letter: 'E', text: 'Debridación bajo anestesia general inmediata' },
      ],
      correct: 'C',
      explanation: 'Antes de cualquier cálculo, examen o curación, el paciente quemado necesita analgesia endovenosa: el dolor de las quemaduras es intenso y tratarlo primero facilita todo lo que viene después, incluyendo la evaluación de la extensión y la profundidad.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Un niño llega a urgencias con una quemadura en las palmas y los dedos, con eritema importante y ampollas, inquieto e irritable.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones son: apósitos de plata y hospitalizar, enfriar con agua fría y cubrir, dar analgesia endovenosa, hospitalizar para manejo de quemaduras, o debridar bajo anestesia general de inmediato. Piénsalo.',
        answer: 'La respuesta es la C. Antes de medir superficie, antes de curar, lo primero siempre es tratar el dolor: analgesia endovenosa. Y fíjate en el distractor del agua fría: se enfría con agua tibia, nunca fría, porque el agua fría agrega hipotermia a un paciente que ya está perdiendo calor por la piel quemada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 10',
      stem: 'Paciente de 27 años presenta cefalea, malestar general, disnea y opresión precordial, 3 horas después de estar expuesto a humo en un incendio en su casa. Frecuencia cardíaca 100 por minuto, presión arterial 130/85, frecuencia respiratoria 35, saturación de oxígeno 96 %. Sin cianosis, examen cardiopulmonar normal.',
      question: '¿Qué examen confirma la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Radiografía de tórax' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Niveles de carboxihemoglobina' },
        { letter: 'D', text: 'Gases en sangre arterial' },
        { letter: 'E', text: 'Monitorización transcutánea de anhídrido carbónico' },
      ],
      correct: 'C',
      explanation: 'El cuadro corresponde a intoxicación por monóxido de carbono. La saturación de pulso es falsamente normal porque no distingue oxihemoglobina de carboxihemoglobina, y los gases arteriales tampoco alteran la presión de oxígeno. El examen que confirma el diagnóstico es la medición directa de carboxihemoglobina.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintisiete años con cefalea, malestar, dificultad para respirar y opresión en el pecho, tres horas después de estar expuesto a humo en un incendio en su casa. Su saturación es noventa y seis por ciento, sin cianosis, y el examen cardiopulmonar es normal.',
        question: '¿Qué examen confirma la sospecha diagnóstica?',
        options: 'Las opciones son: radiografía de tórax, TAC de tórax, niveles de carboxihemoglobina, gases arteriales, o monitorización del anhídrido carbónico. Piénsalo.',
        answer: 'Es la C. Fíjate en la trampa: la saturación sale casi normal, y por eso muchos alumnos descartan la intoxicación. Pero eso es justo lo que vimos: el saturómetro no distingue el monóxido del oxígeno. Los gases arteriales tampoco te sirven, porque la presión de oxígeno sigue normal. Lo único que confirma el diagnóstico es medir la carboxihemoglobina de forma directa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 41',
      stem: 'Paciente de 25 años, encontrada inconsciente en el baño de su casa. Glasgow 15, presión arterial 110/60, frecuencia cardíaca 115, frecuencia respiratoria 12, saturación de oxígeno 98 %. Examen cardiopulmonar normal. Carboxihemoglobina de 20 por ciento.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar oxígeno por naricera de alto flujo' },
        { letter: 'B', text: 'Solicitar una TAC de cerebro' },
        { letter: 'C', text: 'Realizar terapia hiperbárica' },
        { letter: 'D', text: 'Administrar broncodilatadores por vía inhalada' },
        { letter: 'E', text: 'Administrar oxígeno por mascarilla de no recirculación' },
      ],
      correct: 'E',
      explanation: 'Confirmada la intoxicación por monóxido de carbono, el tratamiento inicial es oxígeno al cien por ciento con mascarilla de no recirculación, que acelera la eliminación del monóxido de la hemoglobina. La terapia hiperbárica se reserva para carboxihemoglobina sobre veinticinco por ciento o compromiso de conciencia importante, criterios que este caso no cumple.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de veinticinco años, encontrada inconsciente en su baño. Glasgow quince, signos vitales casi normales, y una carboxihemoglobina de veinte por ciento.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: oxígeno por naricera de alto flujo, TAC de cerebro, terapia hiperbárica, broncodilatadores inhalados, u oxígeno por mascarilla de no recirculación. Piénsalo.',
        answer: 'Es la E. El tratamiento siempre parte con oxígeno al cien por ciento en mascarilla de no recirculación, que desplaza al monóxido de la hemoglobina mucho más rápido que el aire ambiental. La cámara hiperbárica es la trampa tentadora, pero se reserva para cuando la carboxihemoglobina pasa de veinticinco por ciento o hay compromiso de conciencia, y aquí no se cumple ninguno de los dos.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.008 · Curación básica de quemaduras",
      "stem": "Hombre de 35 años se quema el antebrazo con agua hirviendo hace 2 horas. Presenta una quemadura de espesor parcial superficial, rosada, húmeda y dolorosa, con flictenas rotas, que compromete cerca del 3% de la superficie corporal. No tiene otras lesiones.",
      "question": "¿Cuál es el manejo local más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicar hielo directo y dejar la herida descubierta"
        },
        {
          "letter": "B",
          "text": "Lavar con suero fisiológico, retirar las flictenas rotas, cubrir con apósito no adherente y controlar en 48 a 72 horas"
        },
        {
          "letter": "C",
          "text": "Aplicar pomada de corticoides y vendaje compresivo"
        },
        {
          "letter": "D",
          "text": "Iniciar antibiótico oral profiláctico y dejar las flictenas intactas sin cubrir"
        },
        {
          "letter": "E",
          "text": "Derivar de inmediato a un centro de grandes quemados"
        }
      ],
      "correct": "B",
      "explanation": "La curación básica de una quemadura pequeña de espesor parcial consiste en enfriar con agua o suero a temperatura ambiente, lavar con suero, retirar el tejido desvitalizado y las flictenas rotas, y cubrir con apósito no adherente, con controles cada 48 a 72 horas. No se usan antibióticos profilácticos ni hielo.",
      "say": {
        "stem": "Hombre de treinta y cinco años que se quema el antebrazo con agua hirviendo hace dos horas. Tiene una quemadura de espesor parcial superficial, rosada, húmeda y dolorosa, con flictenas rotas, en cerca del tres por ciento de su superficie corporal.",
        "question": "¿Cuál es el manejo local más adecuado?",
        "options": "Las opciones: hielo y dejarla descubierta, lavar con suero, retirar las flictenas rotas y cubrir con apósito no adherente, pomada de corticoides, antibiótico oral profiláctico, o derivar a un centro de grandes quemados. Piénsalo.",
        "answer": "Es la B. Se lava con suero, se retira lo desvitalizado, se cubre con un apósito que no se pegue y se controla en dos o tres días. El antibiótico profiláctico tienta, pero no previene infección y favorece resistencia; y el hielo directo profundiza la lesión."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Agosto 2021 · Pregunta 161",
      "stem": "Hombre de 52 años, con una gran cicatriz de una quemadura antigua en el muslo derecho, que cicatrizó por segunda intención, refiere que desde hace 2 años presenta una úlcera en relación con la cicatriz. Al examen se observa una úlcera de 2 cm en medio de la cicatriz.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tratamiento con nitrógeno líquido"
        },
        {
          "letter": "B",
          "text": "Aseo quirúrgico"
        },
        {
          "letter": "C",
          "text": "Resección amplia"
        },
        {
          "letter": "D",
          "text": "Biopsia incisional"
        },
        {
          "letter": "E",
          "text": "Curaciones con povidona y suero fisiológico"
        }
      ],
      "correct": "D",
      "explanation": "Una úlcera crónica que no cicatriza sobre una cicatriz de quemadura antigua hace sospechar una úlcera de Marjolin, habitualmente un carcinoma espinocelular. Primero debe confirmarse con biopsia incisional de bordes y lecho; con el diagnóstico se planifica la resección amplia. Resecar sin histología o solo hacer curaciones retrasa el tratamiento oncológico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Hombre de cincuenta y dos años con una gran cicatriz de una quemadura antigua en el muslo, que cerró por segunda intención, y que desde hace dos años tiene una úlcera de dos centímetros en medio de esa cicatriz.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: nitrógeno líquido, aseo quirúrgico, resección amplia, biopsia incisional, o curaciones con povidona. Piénsalo.",
        "answer": "Es la D. Una úlcera crónica sobre una cicatriz de quemadura es una úlcera de Marjolin, un carcinoma espinocelular, hasta demostrar lo contrario, y primero se confirma con biopsia. La resección amplia tienta porque es el tratamiento final, pero no se planifica una cirugía oncológica sin histología."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.011 · Conceptos generales sobre injertos y colgajos",
      "stem": "Hombre de 40 años sufre un accidente con una máquina que le produce una pérdida de piel en el dorso del pie, con exposición del tendón extensor sin paratendón y de hueso sin periostio. El lecho está limpio tras el aseo quirúrgico.",
      "question": "¿Cuál es la opción de cobertura más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Injerto de piel parcial"
        },
        {
          "letter": "B",
          "text": "Injerto de piel total"
        },
        {
          "letter": "C",
          "text": "Sustituto dérmico sin cobertura posterior"
        },
        {
          "letter": "D",
          "text": "Cierre por segunda intención con curaciones"
        },
        {
          "letter": "E",
          "text": "Colgajo"
        }
      ],
      "correct": "E",
      "explanation": "Un injerto carece de irrigación propia y depende del lecho receptor para nutrirse, por lo que no prende sobre hueso sin periostio, tendón sin paratendón, cartílago sin pericondrio ni material de osteosíntesis expuesto. En esos casos se requiere un colgajo, que lleva su propio pedículo vascular. Los injertos son ideales sobre lechos bien vascularizados, como el tejido de granulación.",
      "say": {
        "stem": "Hombre de cuarenta años con un accidente con máquina que le deja sin piel el dorso del pie, con el tendón extensor expuesto sin su cubierta y hueso sin periostio. El lecho está limpio tras el aseo.",
        "question": "¿Cuál es la mejor opción de cobertura?",
        "options": "Las opciones: injerto de piel parcial, injerto de piel total, sustituto dérmico solo, segunda intención con curaciones o colgajo. Piénsalo.",
        "answer": "Es la E. El injerto necesita un lecho vascularizado del cual nutrirse, y hueso sin periostio o tendón desnudo no lo tienen, así que se necesita un colgajo con su propia irrigación. El injerto parcial tienta porque es más simple, pero sobre este lecho no va a prender."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 21",
      "stem": "Usted atiende en el servicio de urgencia a un niño de 3 años, traído por su madre por quemaduras en los dedos y en la espalda tras apoyarse accidentalmente en una estufa. Al examen está agitado y llorando, y se observa eritema y flictenas en las zonas afectadas.",
      "question": "¿Cuál es la conducta inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Curaciones"
        },
        {
          "letter": "B",
          "text": "Paracetamol vía oral"
        },
        {
          "letter": "C",
          "text": "Ungüento antibiótico tópico"
        },
        {
          "letter": "D",
          "text": "Analgesia endovenosa"
        },
        {
          "letter": "E",
          "text": "Antibióticos endovenosos"
        }
      ],
      "correct": "D",
      "explanation": "Las quemaduras de espesor parcial superficial (eritema y flictenas) son muy dolorosas. En un niño agitado, la prioridad inicial tras descartar compromiso vital es una analgesia efectiva y rápida, por vía endovenosa (ej. opioides), que además permite evaluar y curar. La quemadura de manos es zona especial y debe evaluarse para derivación. No se usan antibióticos profilácticos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un niño de tres años se apoyó en una estufa y tiene quemaduras con flictenas en los dedos y la espalda. Llora y está muy agitado.",
        "question": "¿Cuál es la conducta inicial?",
        "options": "Las opciones: curaciones, paracetamol oral, ungüento antibiótico, analgesia endovenosa o antibióticos endovenosos. Piénsalo.",
        "answer": "Es la D. Las quemaduras con flictenas duelen mucho y lo primero es una analgesia efectiva por vía endovenosa. Las curaciones tientan, pero hacerlas sin analgesia adecuada es inhumano e impide evaluar bien al niño."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.2.011 · Quemadura solar",
      "stem": "Mujer de 22 años consulta 12 horas después de pasar 6 horas en la playa sin fotoprotector. Tiene eritema intenso, doloroso y edema en espalda y hombros, con algunas ampollas pequeñas en los hombros. Está afebril, hidratada, sin compromiso del estado general.",
      "question": "¿Cuál es el manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Hospitalización y reanimación con fórmula de Parkland"
        },
        {
          "letter": "B",
          "text": "Compresas frías, hidratación oral, AINE para el dolor, emolientes, no romper las ampollas y fotoprotección estricta"
        },
        {
          "letter": "C",
          "text": "Corticoide sistémico en dosis altas"
        },
        {
          "letter": "D",
          "text": "Antibiótico oral profiláctico"
        },
        {
          "letter": "E",
          "text": "Aplicar pasta de dientes o mantequilla sobre la quemadura"
        }
      ],
      "correct": "B",
      "explanation": "La quemadura solar es una quemadura superficial (eritema) o intermedia superficial (ampollas) por radiación UV. Sin compromiso sistémico se maneja ambulatoriamente con frío local, analgesia (AINE), hidratación, emolientes, cuidado de ampollas y evitar el sol. Se hospitaliza si es extensa con ampollas, hay deshidratación, fiebre o compromiso general, sobre todo en niños.",
      "say": {
        "stem": "Mujer de veintidós años con eritema doloroso y algunas ampollas pequeñas en espalda y hombros tras seis horas al sol sin protector, sin fiebre ni compromiso general.",
        "question": "¿Cuál es el manejo más adecuado?",
        "options": "Las opciones: hospitalizar con Parkland, frío local con hidratación, antiinflamatorios y no romper ampollas, corticoide sistémico, antibiótico profiláctico o remedios caseros. Piénsalo.",
        "answer": "Es la B. Una quemadura solar sin compromiso general se maneja en casa con frío, hidratación, analgesia y protección solar. Los antibióticos tientan por las ampollas, pero no se usan en forma profiláctica."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Cálculo', tag: 'Solo segundo y tercer grado', kind: 'key', items: [
          { t: 'Wallace para la extensión', d: 'El primer grado nunca se suma',
            say: 'Cerremos con las reglas de oro. Calcula con Wallace, y nunca sumes el primer grado.' },
          { t: 'Gran quemado', d: 'Más de veinte por ciento, o zonas especiales, o inhalación',
            say: 'Y es gran quemado con más de veinte por ciento de superficie, con zonas especiales comprometidas, o con sospecha de inhalación.' },
        ] },
        { title: 'Reanimación', tag: 'Parkland guiado por diuresis', kind: 'pharma', items: [
          { t: 'Mitad en las primeras ocho horas', d: 'Contadas desde el accidente, no del ingreso',
            say: 'La mitad del volumen se pasa en las primeras ocho horas contadas desde el accidente.' },
          { t: 'La diuresis manda sobre la fórmula', d: 'Medio a un mililitro por kilo por hora',
            say: 'Y por sobre la fórmula, siempre manda la diuresis horaria.' },
        ] },
        { title: 'Urgencias', tag: 'Lo que mata primero', kind: 'alert', items: [
          { t: 'Saturación normal no descarta monóxido', d: 'Pide carboxihemoglobina si hay sospecha',
            say: 'Y no confíes en una saturación normal si hubo un incendio cerrado: pide carboxihemoglobina. Si te llevas una sola idea de hoy: primero calcula bien la superficie, porque de ese número dependen la reposición de volumen y la decisión de derivar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const escarotomia = N('alert', 'Escarotomía de urgencia', 'Sin esperar evaluación de especialista',
      'La escara actúa como un torniquete: cortas de inmediato, sin anestesia, porque el tercer grado ya no siente.');

    const parkland = N('do', 'Fórmula de Parkland', 'Cuatro por kilo por el porcentaje quemado',
      'Calculas el volumen total, y pasas la mitad en las primeras ocho horas desde el accidente, y la otra mitad en las dieciséis horas siguientes.',
      ['¿Escara circular de tercer grado con pulsos que se pierden?', escarotomia]);

    const granQuemado = N('alert', 'Gran quemado, GES cincuenta y seis', 'Traslado a centro especializado antes de veinticuatro horas',
      'Con cualquiera de estos criterios, activas la garantía GES y trasladas antes de veinticuatro horas.',
      ['¿Cuánto Ringer lactato en veinticuatro horas?', parkland]);

    const quemaduraMenor = N('ok', 'Quemadura menor', 'Manejo ambulatorio con analgesia y curaciones',
      'Sin ninguno de esos criterios, el manejo es ambulatorio, con buena analgesia y curaciones oclusivas estériles.');

    const wallace = N('do', 'Calcular con la regla de Wallace', 'El primer grado nunca se cuenta',
      'Con la regla de los nueve calculas el porcentaje exacto, sumando solo el segundo y el tercer grado.',
      ['¿Más de veinte por ciento, zona especial o inhalación?', granQuemado],
      ['¿No cumple ningún criterio de gran quemado?', quemaduraMenor]);

    const intubacion = N('alert', 'Intubación precoz', 'Antes de que el edema cierre la glotis',
      'Si hay vibrisas chamuscadas, esputo con hollín o disfonía, intubas antes de que el edema avance y ya no puedas.');

    const root = N('start', 'Paciente con quemaduras', 'Enfriar con agua tibia, nunca fría',
      'Llega un paciente quemado. Primero detienes el proceso de la quemadura y enfrías con agua tibia, nunca fría, para no agregar hipotermia.',
      ['¿Signos de vía aérea quemada o inhalación?', intubacion],
      ['¿Cuánto suma la superficie de segundo y tercer grado?', wallace]);

    return { title: 'Gran quemado: la superficie decide la reposición y la derivación', root };
  })(),
};
