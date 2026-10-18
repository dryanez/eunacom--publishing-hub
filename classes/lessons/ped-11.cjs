// Clase ped-11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo evaluar la deshidratación con la mano y el ojo, y elegir el plan correcto',
      say: 'Bienvenido. Hoy vemos la diarrea aguda del niño, la deshidratación y los planes de rehidratación de la Organización Mundial de la Salud. Es un tema que se pregunta muchísimo, porque no necesitas ningún examen de laboratorio para resolverlo: todo lo decides con la clínica. Vas a aprender a mirar a un niño y saber, sin exámenes, qué plan le corresponde, y también vas a aprender a reconocer una complicación grave que no te puedes perder. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Qué te dice el cuerpo',
      title: 'Cuatro signos que valen para todo el examen',
      nodes: [
        { id: 'con', col: 0, row: 0, k: 'cause', t: 'Conciencia', s: 'Alerta, inquieto, o letárgico' },
        { id: 'ojo', col: 0, row: 1, k: 'cause', t: 'Ojos y lágrimas', s: 'Normales, hundidos, o secos' },
        { id: 'boc', col: 0, row: 2, k: 'cause', t: 'Boca y sed', s: 'Húmeda, ávida, o no puede beber' },
        { id: 'pli', col: 0, row: 3, k: 'cause', t: 'Signo del pliegue', s: 'Rápido, lento, o muy lento' },
        { id: 'gra', col: 1, row: 1, k: 'mech', t: 'Sumas los signos', s: 'Y clasificas el grado' },
        { id: 'des', col: 2, row: 0, k: 'good', t: 'Sin deshidratación', s: 'Menos del 5% del peso' },
        { id: 'mod', col: 2, row: 1, k: 'risk', t: 'Deshidratación moderada', s: 'Del 5 al 10% del peso' },
        { id: 'gra2', col: 2, row: 2, k: 'alert', t: 'Deshidratación grave', s: 'Más del 10%, o en shock' },
      ],
      edges: [
        { from: 'con', to: 'gra' }, { from: 'ojo', to: 'gra' }, { from: 'boc', to: 'gra' }, { from: 'pli', to: 'gra' },
        { from: 'gra', to: 'des' }, { from: 'gra', to: 'mod' }, { from: 'gra', to: 'gra2' },
      ],
      steps: [
        { show: ['con'], note: 'Alerta, inquieto o letárgico',
          say: 'Antes de ver los planes, aprende a mirar bien. La Organización Mundial de la Salud te da cuatro signos que resumen todo el examen, y el primero es la conciencia: alerta y despierto, o inquieto e irritable, o en el extremo, letárgico y difícil de despertar.' },
        { show: ['ojo'], note: 'De normales a secos y hundidos',
          say: 'El segundo son los ojos y las lágrimas: pueden estar normales, hundidos con pocas lágrimas, o muy hundidos y completamente secos.' },
        { show: ['boc'], note: 'De húmeda a no poder beber',
          say: 'El tercero es la boca y la sed: húmeda con sed normal, seca con sed ávida, o tan seca que ya no puede beber.' },
        { show: ['pli'], note: 'El pliegue cutáneo, el más famoso',
          say: 'Y el cuarto, el más conocido, es el signo del pliegue: tomas la piel del abdomen y ves qué tan rápido vuelve a su lugar. Rápido está bien, lento es sospechoso, y muy lento es grave. Mira este pliegue: la piel queda levantada y no vuelve, es el turgor disminuido de una deshidratación moderada a grave.',
          photo: { src: 'biblioteca/15_pediatria/ped-11/01_pliegue_persistente__commons.jpg', label: 'Pliegue persistente', at: 'Mira este pliegue', credit: 'Wikimedia Commons «LowSkinTurgor.jpg», CC BY-SA 4.0, DRobert' } },
        { show: ['gra'], note: 'No necesitas laboratorio para esto',
          say: 'Suma estos cuatro signos y clasificas el grado. Fíjate que no pediste ningún examen: todo esto lo defines con la clínica, al lado de la cama, en menos de un minuto de observación.' },
        { show: ['des'], note: 'Menos del 5% de pérdida de peso',
          say: 'Si todo está normal, no hay deshidratación, y eso corresponde a menos del cinco por ciento del peso corporal perdido en líquidos.' },
        { show: ['mod'], note: 'Entre el 5 y el 10%',
          say: 'Si tiene al menos dos signos alterados, como estar inquieto, con ojos hundidos y que bebe con avidez, es una deshidratación moderada, entre el cinco y el diez por ciento.' },
        { show: ['gra2'], note: 'Más del 10%, o directamente en shock',
          say: 'Y si está letárgico, con los ojos muy hundidos y no puede beber, es una deshidratación grave, más del diez por ciento, o incluso en shock. Cada uno de estos tres grados tiene su propio plan, y eso viene ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Plan A',
      title: 'Sin deshidratación: prevenir en la casa',
      cards: [
        { title: 'Las tres reglas', tag: 'Manejo domiciliario', kind: 'key', items: [
          { t: 'Más líquido de lo habitual', d: 'Sales de rehidratación tras cada deposición',
            say: 'Empecemos con el plan A, para el niño sin deshidratación. La primera regla es dar más líquido de lo habitual: sales de rehidratación oral después de cada deposición líquida.' },
          { t: 'No suspendas la alimentación', d: 'Sigue con pecho o la dieta habitual',
            say: 'La segunda regla es que sigas alimentando al niño con su dieta habitual, incluida la lactancia materna. El ayuno no ayuda: empeora la recuperación del intestino.' },
        ] },
        { title: 'Cuándo volver', tag: 'Pautas de alarma', kind: 'alert', items: [
          { t: 'Fiebre alta o sangre', d: 'O vómitos repetidos que no dejan beber',
            say: 'Y la tercera regla es darle a la familia señales claras para volver: fiebre alta, sangre en las deposiciones, o vómitos tan repetidos que ya no puede beber nada.' },
          { t: 'Sed intensa o decae', d: 'Esos signos ya hablan de otro plan',
            say: 'Y si lo notan con sed intensa, o si empieza a decaer, esos signos ya te están hablando de un grado mayor de deshidratación, y ahí no corresponde el plan A.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Antes de elegir el plan',
      title: 'Qué está causando la diarrea',
      cards: [
        { title: 'El agente más frecuente', tag: 'En el lactante', kind: 'criteria', items: [
          { t: 'Rotavirus es el más común', d: 'Sobre todo en el niño no vacunado',
            say: 'Antes de seguir con los planes, fíjate en la causa. En el lactante, el agente más frecuente es el rotavirus, sobre todo si no está vacunado.' },
          { t: 'También virus y bacterias', d: 'Norovirus, adenovirus, Campylobacter, Salmonella, Shigella',
            say: 'Y también compiten el norovirus, el adenovirus, y bacterias como el Campylobacter, la Salmonella y la Shigella. Pero para elegir el plan, lo que importa no es el agente: es el grado de hidratación que acabas de medir.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Plan B',
      title: 'Deshidratación moderada: sales por la boca, en el box',
      nodes: [
        { id: 'mod', col: 0, row: 1, k: 'start', t: 'Deshidratación moderada', s: 'Va al box, no a la casa' },
        { id: 'dos', col: 1, row: 1, k: 'mech', t: 'Sales de rehidratación oral', s: 'En 4 horas, fraccionadas' },
        { id: 'tec', col: 2, row: 0, k: 'good', t: 'Cucharita o jeringa', s: 'Cada 1 a 2 minutos' },
        { id: 'vom', col: 2, row: 2, k: 'q', t: '¿Vómitos incoercibles?', s: 'Más de 3 en una hora' },
        { id: 'son', col: 3, row: 2, k: 'refer', t: 'Sonda nasogástrica', s: 'Gastroclisis, antes de ir a vena' },
        { id: 're', col: 1, row: 3, k: 'q', t: 'Reevaluar a las 4 horas', s: 'Se hidrató, sigue igual, o empeoró' },
      ],
      edges: [
        { from: 'mod', to: 'dos' }, { from: 'dos', to: 'tec' }, { from: 'dos', to: 'vom' },
        { from: 'vom', to: 'son', label: 'sí' }, { from: 'dos', to: 're' },
      ],
      steps: [
        { show: ['mod'], note: 'Ya no se va a la casa',
          say: 'El plan B es para la deshidratación moderada, y este niño ya no se va a la casa: se queda en observación en el box.' },
        { show: ['dos'], note: 'Cincuenta a cien mililitros por kilo',
          say: 'La dosis es de sales de rehidratación oral, entre cincuenta y cien mililitros por kilo, repartidos en cuatro horas.' },
        { show: ['tec'], note: 'De a poco, para que tolere',
          say: 'Y la técnica importa: se da con cucharita o jeringa, cada uno o dos minutos, en cantidades pequeñas para que el estómago lo tolere y no se dispare un nuevo vómito.' },
        { show: ['vom'], note: 'Si vomita mucho, no vas directo a la vena',
          say: 'Ahora, ¿qué haces si vomita mucho, más de tres veces en una hora, y no logra tolerar nada por la boca?' },
        { show: ['son'], note: 'Antes de puncionar una vena',
          say: 'Antes de puncionar una vena, instalas una sonda nasogástrica y pasas las mismas sales por gastroclisis, a veinte mililitros por kilo cada hora. Es un paso que muchos se saltan, y que el examen te pregunta.' },
        { show: ['re'], note: 'A las 4 horas, decides de nuevo',
          say: 'A las cuatro horas, reevalúas: si se hidrató, pasa a plan A y se va a la casa; si sigue igual, repites el plan B; y si empeora, sube al plan C.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Plan C',
      title: 'Deshidratación grave: es una urgencia vital',
      cards: [
        { title: 'Vía y volumen', tag: 'Endovenoso, ya', kind: 'alert', items: [
          { t: 'Ringer lactato o suero fisiológico', d: 'Cien mililitros por kilo en total',
            say: 'El plan C es para la deshidratación grave o el shock, y aquí la vía es endovenosa de inmediato: Ringer lactato o suero fisiológico, cien mililitros por kilo en total.' },
          { t: 'Si hay shock, bolo primero', d: 'Veinte mililitros por kilo, rápido',
            say: 'Si el niño está en shock descompensado, primero pasas un bolo de veinte mililitros por kilo en diez a quince minutos, y reevalúas el pulso antes de seguir.' },
        ] },
        { title: 'Cómo se reparte', tag: 'Cambia con la edad', kind: 'key', items: [
          { t: 'Menor de un año', d: 'Treinta en la primera hora, el resto en cinco',
            say: 'Y el reparto del volumen cambia con la edad. En el lactante menor de un año, va treinta mililitros por kilo en la primera hora, y el resto en las cinco horas siguientes.' },
          { t: 'Un año o más', d: 'Treinta en media hora, resto en 2,5 horas',
            say: 'En el niño de un año o más, el mismo treinta va en solo media hora, y el resto en dos horas y media. Apenas pueda beber, lo pasas a plan B.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando no logras una vena',
      title: 'Osteoclisis: el acceso intraóseo',
      cards: [
        { title: 'Cuándo', tag: 'Cualquier edad', kind: 'key', items: [
          { t: 'Shock, paro, deshidratación grave', d: 'O convulsión, sin vena en 2 intentos o 90 segundos',
            say: 'En el plan C hay un problema práctico: un niño en shock al que no le encuentras una vena. La indicación de la vía intraósea es necesitar líquidos o fármacos de inmediato, en shock descompensado, paro, deshidratación grave o convulsión, cuando no logras una vena periférica en dos intentos o en noventa segundos. Sirve a cualquier edad.' },
        ] },
        { title: 'Dónde y cómo', tag: 'Tibia proximal', kind: 'criteria', items: [
          { t: 'Tibia proximal, cara plana', d: '1–3 cm bajo la tuberosidad tibial',
            say: 'El sitio de elección es la tibia proximal, entre uno y tres centímetros bajo la tuberosidad, en la cara anteromedial plana. Si no se puede, la tibia distal, el fémur distal o, en niños mayores, el húmero.' },
          { t: 'Pérdida brusca de resistencia', d: 'Aguja firme, aspira médula, sin extravasación',
            say: 'Con asepsia, avanzas la aguja perpendicular o levemente hacia abajo, lejos del cartílago de crecimiento, con un giro, hasta sentir que la resistencia se pierde de golpe: entraste a la médula. Lo confirmas porque la aguja queda firme, aspiras médula y el suero pasa sin edema. Y se infunde a presión, con jeringa, porque no baja por gravedad.' },
        ] },
        { title: 'Precauciones', tag: 'Vía transitoria', kind: 'alert', items: [
          { t: 'No en hueso fracturado', d: 'Ni con infección local, ni osteogénesis imperfecta',
            say: 'No la haces en un hueso fracturado, con infección local, en un hueso recién puncionado, ni en enfermedades óseas como la osteogénesis imperfecta.' },
          { t: 'Retirar antes de 24 horas', d: 'Riesgo: extravasación, osteomielitis',
            say: 'Es una vía transitoria: apenas tienes una vena, la retiras, idealmente antes de veinticuatro horas. Sus complicaciones son la extravasación con síndrome compartimental, la osteomielitis, el daño del cartílago de crecimiento y la embolia grasa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Las sales de rehidratación oral',
      title: 'Por qué son de osmolaridad reducida',
      cards: [
        { title: 'La fórmula actual', tag: 'Menos sodio, menos glucosa', kind: 'pharma', items: [
          { t: 'Osmolaridad baja, no la antigua', d: 'Doscientos cuarenta y cinco frente a trescientos once',
            say: 'Un dato que también se pregunta: las sales de rehidratación oral que usas hoy son de osmolaridad reducida, no la fórmula antigua y más concentrada.' },
          { t: 'Menos deposiciones y vómitos', d: 'Reduce el volumen fecal cerca de un 30%',
            say: 'Esa fórmula más diluida reduce el volumen de las deposiciones en cerca de un tercio, y además da menos vómitos que la fórmula antigua. Por eso es la que recomienda la Organización Mundial de la Salud.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diarrea con sangre',
      title: 'Síndrome disentérico y Shigella',
      cards: [
        { title: 'Qué es y qué lo causa', tag: 'Pujo y tenesmo', kind: 'criteria', items: [
          { t: 'Diarrea con sangre visible', d: 'Moco, fiebre, pujo y tenesmo',
            say: 'Ahora, la diarrea con sangre, que tiene dos caras. La disentería es la diarrea con sangre visible, con moco, fiebre, pujo y tenesmo. En el niño, la causa más importante es la Shigella, que da fiebre alta y convulsiones febriles, y puede complicarse con bacteriemia, megacolon tóxico y artritis reactiva. Pides coprocultivo, y la base sigue siendo hidratar y dar zinc.' },
        ] },
        { title: 'Cuándo sí das antibiótico', tag: 'Fiebre y sospecha de Shigella', kind: 'pharma', items: [
          { t: 'Azitromicina, 3 días', d: '10 mg/kg/día; primera línea por resistencia',
            say: 'Si hay disentería con fiebre y sospecha de Shigella, sí se trata. La primera línea actual es azitromicina, diez miligramos por kilo al día por tres días, por la resistencia al cotrimoxazol.' },
          { t: 'Casos graves: ceftriaxona', d: '50–75 mg/kg/día, 3–5 días; o ciprofloxacino',
            say: 'En casos graves, ceftriaxona, cincuenta a setenta y cinco miligramos por kilo al día, por tres a cinco días; o ciprofloxacino quince miligramos por kilo cada doce horas, por tres días. El cotrimoxazol queda solo si el antibiograma es sensible. Y la amebiasis es otra historia: metronidazol por siete a diez días.' },
        ] },
        { title: 'Cuándo no', tag: 'Las excepciones', kind: 'alert', items: [
          { t: 'Sospecha de E. coli O157', d: 'Sin fiebre alta, carne mal cocida, brote',
            say: 'Pero ojo con las excepciones. Si sospechas E. coli productora de toxina Shiga, con diarrea con sangre sin fiebre alta, carne molida mal cocida o un brote, no das antibióticos, porque aumentan la liberación de toxina y el riesgo de síndrome hemolítico urémico.' },
          { t: 'Salmonella no tifoídica', d: 'Solo si <3 meses, inmunodeprimido o bacteriemia',
            say: 'Tampoco tratas la salmonelosis no tifoídica no invasora, salvo en menores de tres meses, inmunodeprimidos o con bacteriemia. Y los antidiarreicos están siempre contraindicados.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Lo que nunca se indica, y lo que no puedes pasar por alto',
      title: 'Antidiarreicos prohibidos, y el síndrome hemolítico urémico',
      nodes: [
        { id: 'lop', col: 0, row: 0, k: 'trap', t: 'Loperamida', s: 'Prohibida en niños' },
        { id: 'ile', col: 1, row: 0, k: 'risk', t: 'Íleo y megacolon tóxico', s: 'Retiene la toxina adentro' },
        { id: 'dis', col: 0, row: 2, k: 'cause', t: 'Diarrea con sangre', s: 'E. coli productora de toxina Shiga' },
        { id: 'shu', col: 1, row: 2, k: 'alert', t: 'Síndrome hemolítico urémico', s: 'Anemia, plaquetas bajas, riñón' },
        { id: 'atb', col: 2, row: 2, k: 'trap', t: 'Nunca antibióticos aquí', s: 'Liberan más toxina, empeoran todo' },
      ],
      edges: [
        { from: 'lop', to: 'ile' }, { from: 'dis', to: 'shu' }, { from: 'shu', to: 'atb', label: 'jamás' },
      ],
      steps: [
        { show: ['lop'], note: 'No la indiques, aunque la pidan',
          say: 'Dos reglas de seguridad antes de cerrar. La primera: la loperamida y los antidiarreicos están prohibidos en niños, aunque la familia te la pida para que pare más rápido.' },
        { show: ['ile'], note: 'Guardan la toxina dentro del intestino',
          say: 'La razón es que frenan el tránsito intestinal y favorecen el íleo paralítico y el megacolon tóxico, además de dejar la toxina atrapada adentro en vez de eliminarla.' },
        { show: ['dis'], note: 'Diarrea con sangre, carne mal cocida',
          say: 'La segunda regla, más grave: si un niño tiene diarrea con sangre, típicamente tras comer carne molida mal cocida, sospecha la E. coli productora de toxina Shiga.' },
        { show: ['shu'], note: 'La tríada: anemia, plaquetas bajas, riñón',
          say: 'Esa infección puede evolucionar al síndrome hemolítico urémico: anemia hemolítica con esquistocitos, plaquetas bajas, y falla renal aguda con poca orina. En Chile, es la primera causa de injuria renal aguda en niños pequeños.' },
        { show: ['atb'], note: 'La regla más preguntada de esta clase',
          say: 'Y aquí está la regla más preguntada de toda la clase: ante la sospecha de esta E. coli, jamás des antibióticos. Al matar a la bacteria, liberas de golpe toda la toxina Shiga a la sangre, y multiplicas el riesgo de que aparezca el síndrome hemolítico urémico. Tampoco transfundas plaquetas sin que haya un sangrado grave, porque alimentan los pequeños trombos que ya están dañando el riñón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome hemolítico urémico',
      title: 'No hay tratamiento específico: manejo de soporte',
      cards: [
        { title: 'Soporte', tag: 'Con nefrología pediátrica', kind: 'key', items: [
          { t: 'Balance hídrico estricto', d: 'Hidratar al inicio; con oligoanuria, solo pérdidas',
            say: 'Una vez instalado el síndrome hemolítico urémico, no hay tratamiento específico: es soporte, en una unidad con nefrología pediátrica. Lo primero es el balance hídrico estricto. En la fase inicial, la rehidratación isotónica precoz protege el riñón; pero cuando ya hay oligoanuria, se restringe a las pérdidas insensibles más la diuresis.' },
          { t: 'Presión y transfusión', d: 'Calcioantagonista; glóbulos rojos con Hb < 6–7 g/dL',
            say: 'La hipertensión se trata con calcioantagonistas y diuréticos de asa. Transfundes glóbulos rojos lavados solo con hemoglobina bajo seis a siete. Y las plaquetas se evitan, salvo sangrado activo o procedimiento, porque pueden agravar la microtrombosis.' },
        ] },
        { title: 'Diálisis', tag: 'Cuándo derivar a diálisis', kind: 'alert', items: [
          { t: 'Anuria de más de 24 horas', d: 'O sobrecarga con edema pulmonar o HTA refractaria',
            say: 'La diálisis se indica en anuria de más de veinticuatro horas, sobrecarga de volumen con edema pulmonar o hipertensión refractaria, hiperkalemia refractaria, acidosis grave y uremia con encefalopatía.' },
        ] },
        { title: 'Pronóstico', tag: 'Seguimiento de años', kind: 'criteria', items: [
          { t: 'Mortalidad 3 a 5%', d: 'Entre 10 y 30% queda con secuelas renales',
            say: 'La mortalidad aguda es de tres a cinco por ciento, y entre diez y treinta por ciento queda con secuelas renales: hipertensión, proteinuria, enfermedad renal crónica. Por eso se sigue por años. No se usan antibióticos ni antiinflamatorios no esteroidales, y en formas atípicas o con compromiso neurológico grave, el especialista evalúa eculizumab.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "Cuatro signos, tres planes",
      images: [
        { src: 'animaciones/ped-11/A1_deshidratacion_signos_y_planes.mp4', label: "Del signo al plan", credit: "Animación propia" },
      ],
      steps: [
        { note: "Se clasifica con la clínica",
          say: "Mira la tabla de izquierda a derecha: conciencia, ojos y lágrimas, boca y sed, y signo del pliegue, cada uno normal, alterado o muy alterado. Dos signos alterados ya son deshidratación moderada; letargia con pliegue muy lento, grave. Abajo, lo que haces: plan A en casa, plan B con sales por la boca durante cuatro horas, y plan C con vena y Ringer lactato. Antidiarreicos, nunca." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos los tres planes y la alerta del síndrome hemolítico urémico en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en diarrea aguda',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Deshidratación moderada', 'Plan B: sales orales en 4 horas', 'Pasar suero endovenoso de entrada'],
          say: 'Repasemos las trampas. Con deshidratación moderada: plan B, sales orales en cuatro horas. El error es saltarse directo a la vena.' },
        { cells: ['Vómitos incoercibles en plan B', 'Sonda nasogástrica para gastroclisis', 'Ir directo a la vía endovenosa'],
          say: 'Si los vómitos son incoercibles en pleno plan B: sonda nasogástrica para gastroclisis. El error es ir directo a la vena sin probar este paso intermedio.' },
        { cells: ['Diarrea con sangre y compromiso renal', 'Sospechar síndrome hemolítico urémico', 'Dar antibióticos para la diarrea'],
          say: 'Diarrea con sangre y compromiso renal: sospecha síndrome hemolítico urémico. El error grave es dar antibióticos, porque empeora todo.' },
        { cells: ['Diarrea aguda en cualquier niño', 'Sales de rehidratación y alimentación continua', 'Indicar loperamida'],
          say: 'Y en cualquier diarrea aguda: sales de rehidratación y seguir alimentando. La loperamida es la trampa que nunca se marca como correcta.' },
        { cells: ['Disentería con fiebre, sospecha de Shigella', 'Azitromicina por 3 días', 'No tratar o dar antidiarreicos'],
          say: 'Disentería con fiebre y sospecha de Shigella: sí se trata, con azitromicina por tres días. El error es dejarla sin antibiótico o dar un antidiarreico.' },
        { cells: ['Niño en shock, sin vena en 90 segundos', 'Vía intraósea en tibia proximal', 'Seguir puncionando venas'],
          say: 'Niño grave al que no encuentras una vena en noventa segundos: vía intraósea en la tibia proximal. El error es seguir puncionando y perder minutos.' },
        { cells: ['Síndrome hemolítico urémico con oligoanuria', 'Restringir líquidos, evitar plaquetas, dializar si corresponde', 'Transfundir plaquetas o dar AINE'],
          say: 'Y en el síndrome hemolítico urémico con oligoanuria: restringes líquidos, evitas las plaquetas salvo sangrado, y dializas si hay criterios. El error es transfundir plaquetas o dar antiinflamatorios.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 9 meses, 8 kg, con diarrea acuosa y vómitos desde hace 12 horas. Al examen está irritable, con los ojos hundidos, la boca seca, y bebe agua con avidez cuando se le ofrece. El signo del pliegue cutáneo desaparece en 1,5 segundos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Sin deshidratación: plan A con sales de rehidratación oral en la casa' },
        { letter: 'B', text: 'Deshidratación moderada: plan B con sales de rehidratación oral en 4 horas, en el box' },
        { letter: 'C', text: 'Deshidratación grave: plan C con suero endovenoso' },
        { letter: 'D', text: 'Indicar loperamida y control en 48 horas' },
        { letter: 'E', text: 'Régimen cero por 12 horas para reposo digestivo' },
      ],
      correct: 'B',
      explanation: 'Irritabilidad, ojos hundidos, sed intensa y pliegue que desaparece con lentitud (menos de 2 segundos): son al menos dos signos de deshidratación moderada. Corresponde plan B, sales de rehidratación oral 50 a 100 mL/kg en 4 horas, en el box de observación.',
      say: {
        stem: 'Vamos con un caso. Lactante de nueve meses, ocho kilos, con diarrea acuosa y vómitos desde hace doce horas. Al examen está irritable, con los ojos hundidos, la boca seca, y bebe agua con muchas ganas cuando se le ofrece. El pliegue cutáneo desaparece en un segundo y medio.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: plan A en la casa, plan B en el box, plan C con suero endovenoso, loperamida con control en cuarenta y ocho horas, o régimen cero por doce horas. Piénsalo.',
        answer: 'Es la B. Cuenta los signos: irritable, ojos hundidos, sed intensa y pliegue lento. Con al menos dos de estos, ya es una deshidratación moderada, y el plan es el B: sales de rehidratación oral en el box, entre cincuenta y cien mililitros por kilo en cuatro horas. No está en shock ni letárgico, así que el plan C sería exagerado; y la loperamida y el ayuno son errores clásicos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 74',
      stem: 'Niño de 2 años con gastroenteritis aguda de 24 horas de evolución, con vómitos y diarrea. Sin fiebre alta, sin sangre en las deposiciones, con mucosas hidratadas, llenado capilar normal, y orina presente.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Hospitalización y suero endovenoso' },
        { letter: 'B', text: 'Sales de rehidratación oral, fraccionadas, en el domicilio' },
        { letter: 'C', text: 'Ayuno absoluto por 6 horas' },
        { letter: 'D', text: 'Antibióticos orales empíricos' },
        { letter: 'E', text: 'Loperamida' },
      ],
      correct: 'B',
      explanation: 'Sin signos de deshidratación (mucosas hidratadas, llenado capilar normal, orina presente): manejo con Plan A, sales de rehidratación oral fraccionadas en domicilio. La loperamida está contraindicada en menores de 2 años.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Niño de dos años con gastroenteritis aguda de veinticuatro horas, con vómitos y diarrea. Sin fiebre alta, sin sangre en las deposiciones, con las mucosas hidratadas, el llenado capilar normal, y orina presente.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: hospitalización con suero endovenoso, sales de rehidratación oral fraccionadas en el domicilio, ayuno absoluto por seis horas, antibióticos orales empíricos, o loperamida. Piénsalo.',
        answer: 'Es la B. Este niño no tiene ningún signo de deshidratación: mucosas húmedas, buen llenado capilar y sigue orinando. Le corresponde el plan A, en la casa, con sales de rehidratación oral fraccionadas. La loperamida está prohibida en menores de dos años, y el ayuno solo empeora la recuperación del intestino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 165',
      stem: 'Niño de 2 años con diarrea disentérica desde hace 4 días tras consumir una hamburguesa casera. Hoy está pálido, decaído y con disminución marcada de la diuresis. Los exámenes muestran hemoglobina 6,5 g/dL, plaquetas 42.000/mm³, creatinina 2,8 mg/dL, y esquistocitos abundantes en el frotis.',
      question: '¿Cuál es la sospecha diagnóstica, y qué tratamiento está contraindicado?',
      options: [
        { letter: 'A', text: 'Invaginación intestinal; está contraindicada la ecografía' },
        { letter: 'B', text: 'Síndrome hemolítico urémico; están contraindicados los antibióticos' },
        { letter: 'C', text: 'Púrpura trombocitopénico inmune; están contraindicados los corticoides' },
        { letter: 'D', text: 'Apendicitis perforada; está contraindicada la laparotomía' },
        { letter: 'E', text: 'Sepsis bacteriana; está contraindicada la hidratación endovenosa' },
      ],
      correct: 'B',
      explanation: 'Diarrea sanguinolenta previa más anemia hemolítica microangiopática (esquistocitos), trombocitopenia e injuria renal aguda oligúrica: síndrome hemolítico urémico. Los antibióticos están formalmente contraindicados, porque lisan la bacteria y liberan más toxina Shiga a la circulación.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de dos años con diarrea con sangre desde hace cuatro días, tras comer una hamburguesa casera. Hoy está pálido, decaído, y orina muy poco. Los exámenes muestran hemoglobina de seis coma cinco, plaquetas de cuarenta y dos mil, creatinina de dos coma ocho, y esquistocitos abundantes en el frotis.',
        question: '¿Cuál es la sospecha diagnóstica, y qué tratamiento está contraindicado?',
        options: 'Las opciones: invaginación intestinal con la ecografía contraindicada, síndrome hemolítico urémico con los antibióticos contraindicados, púrpura trombocitopénico con los corticoides contraindicados, apendicitis perforada con la laparotomía contraindicada, o sepsis bacteriana con la hidratación contraindicada. Piénsalo.',
        answer: 'Es la B. La combinación de diarrea con sangre, anemia con esquistocitos, plaquetas bajas y falla renal es exactamente el síndrome hemolítico urémico, gatillado por la toxina Shiga. Y lo que no puedes hacer nunca es dar antibióticos: matarías a la bacteria de golpe y liberarías más toxina a la circulación, empeorando la falla renal.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 122",
      "stem": "Una niña de 3 años presenta, hace 4 días, un cuadro de diarrea y fiebre hasta 38 °C, al que se agrega sangre en las deposiciones 48 horas después. En su examen físico se ve decaída y pálida, y en sus exámenes destaca hematocrito de 28%, leucocitos 9.800/mm³, plaquetas 75.000/mm³, BUN 28 mg/dL y creatinina 2,3 mg/dL.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Leucemia aguda"
        },
        {
          "letter": "B",
          "text": "Síndrome hemolítico urémico"
        },
        {
          "letter": "C",
          "text": "Shock séptico"
        },
        {
          "letter": "D",
          "text": "Glomerulonefritis aguda"
        },
        {
          "letter": "E",
          "text": "Púrpura de Schönlein-Henoch"
        }
      ],
      "correct": "B",
      "explanation": "Es un síndrome hemolítico urémico clásico: niño pequeño, diarrea disentérica previa (típicamente Escherichia coli productora de toxina Shiga) y la tríada de insuficiencia renal aguda, anemia hemolítica y trombocitopenia. La glomerulonefritis no da plaquetopenia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Niña de tres años con diarrea y fiebre hace cuatro días, que a las cuarenta y ocho horas se vuelve con sangre. Ahora está decaída y pálida, con hematocrito de veintiocho por ciento, plaquetas en setenta y cinco mil, y creatinina de dos coma tres.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: leucemia aguda, síndrome hemolítico urémico, shock séptico, glomerulonefritis aguda, o púrpura de Schönlein Henoch. Piénsalo.",
        "answer": "Es la B. Diarrea con sangre seguida de anemia, plaquetas bajas y falla renal es el síndrome hemolítico urémico. La glomerulonefritis tienta por la falla renal, pero no explica la plaquetopenia ni viene justo después de una disentería."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 47",
      "stem": "Un niño de 14 años, con antecedente de síndrome de QT largo con historia familiar positiva, consulta por un cuadro de fiebre, dolor abdominal y deposiciones líquidas de 5 días de evolución, persistentes, que hace 2 días se han vuelto sanguinolentas.",
      "question": "Además de la hidratación, ¿qué antibiótico debe indicarse?",
      "options": [
        {
          "letter": "A",
          "text": "Ciprofloxacino"
        },
        {
          "letter": "B",
          "text": "Azitromicina"
        },
        {
          "letter": "C",
          "text": "Metronidazol"
        },
        {
          "letter": "D",
          "text": "Sulfametoxazol con trimetoprim"
        },
        {
          "letter": "E",
          "text": "Ampicilina"
        }
      ],
      "correct": "D",
      "explanation": "Un síndrome disentérico febril se trata con antibióticos que cubran Shigella. Ciprofloxacino y azitromicina son opciones habituales, pero prolongan el QT y están contraindicados aquí. El metronidazol no cubre enterobacterias y la ampicilina tiene espectro insuficiente: queda el cotrimoxazol.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un niño de catorce años, con síndrome de QT largo familiar, tiene fiebre, dolor abdominal y diarrea líquida de cinco días, que desde hace dos días viene con sangre.",
        "question": "Además de hidratarlo, ¿qué antibiótico debe indicarse?",
        "options": "Las opciones: ciprofloxacino, azitromicina, metronidazol, cotrimoxazol, o ampicilina. Piénsalo.",
        "answer": "Es la D. Es un síndrome disentérico y hay que cubrir Shigella, pero el ciprofloxacino y la azitromicina prolongan el QT, así que en este niño quedan fuera. El metronidazol tienta porque se asocia a diarrea, pero cubre anaerobios y parásitos, no enterobacterias."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 108",
      "stem": "Un lactante de 4 meses presenta una diarrea grave y abundante, asociada a deterioro del estado general y sopor. Sus exámenes muestran elevación de la creatinina, hiponatremia e hipokalemia. Ha sido imposible encontrar una vía venosa periférica para administrar fluidos.",
      "question": "¿Cuál es el medio de hidratación más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Catéter femoral"
        },
        {
          "letter": "B",
          "text": "Catéter subclavio"
        },
        {
          "letter": "C",
          "text": "Denudación de safena"
        },
        {
          "letter": "D",
          "text": "Vía intraósea"
        },
        {
          "letter": "E",
          "text": "Sonda nasogástrica"
        }
      ],
      "correct": "D",
      "explanation": "Un lactante con deshidratación grave y compromiso de conciencia (plan C) requiere reposición endovenosa inmediata. Si no se logra una vía periférica rápidamente (ej. 90 segundos o 3 intentos), la vía de elección en pediatría es la intraósea (osteoclisis), habitualmente en la tibia proximal, por la que se pueden pasar fluidos y fármacos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un lactante de cuatro meses con diarrea grave está soporoso y deshidratado, y no se logra una vía venosa.",
        "question": "¿Cuál es la vía de hidratación más adecuada?",
        "options": "Las opciones: catéter femoral, catéter subclavio, denudación de safena, vía intraósea o sonda nasogástrica. Piénsalo.",
        "answer": "Es la D. Cuando no se logra una vía venosa en un niño grave, la vía de elección es la intraósea, rápida y segura. La sonda nasogástrica tienta porque sirve en la deshidratación moderada, pero en un lactante soporoso hay riesgo de aspiración."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Los tres planes', tag: 'Sin exámenes', kind: 'key', items: [
          { t: 'Sin deshidratación', d: 'Plan A, en la casa, sin dejar de comer',
            say: 'Cerremos con las reglas de oro. Sin deshidratación, plan A, en la casa, sin dejar de alimentar al niño.' },
          { t: 'Moderada', d: 'Plan B, sales orales en 4 horas, en el box',
            say: 'Con deshidratación moderada, plan B, sales orales en cuatro horas, en el box.' },
        ] },
        { title: 'Grave', tag: 'Urgencia vital', kind: 'alert', items: [
          { t: 'Plan C', d: 'Ringer lactato o suero fisiológico endovenoso',
            say: 'Y con deshidratación grave o shock, plan C, endovenoso de inmediato.' },
          { t: 'Sin vena en 90 segundos', d: 'Vía intraósea en la tibia proximal',
            say: 'Si no logras una vena en dos intentos o noventa segundos, vía intraósea.' },
        ] },
        { title: 'Las dos prohibiciones', tag: 'No las olvides', kind: 'pharma', items: [
          { t: 'Nunca loperamida en niños', d: 'Riesgo de íleo y megacolon',
            say: 'Nunca loperamida en niños.' },
          { t: 'Sin antibióticos si sospechas E. coli', d: 'Diarrea con sangre sin fiebre alta: riesgo de SHU',
            say: 'Y nunca antibióticos si sospechas E. coli productora de toxina Shiga o síndrome hemolítico urémico, aunque la familia insista. La disentería febril por Shigella, en cambio, sí se trata, con azitromicina: por eso piensas primero en la causa. Si te llevas una sola idea de hoy: la clínica te dice el grado, sin ningún examen, y el grado te dice el plan. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diarrea aguda: la clínica decide el plan',
    root: N('start', 'Niño con diarrea aguda', 'Evalúas hidratación al lado de la cama',
      'Tienes un niño con diarrea. Antes de cualquier examen, revisa cuatro signos: conciencia, ojos, boca y el pliegue cutáneo.',
      ['', N('q', '¿Qué grado de deshidratación tiene?', 'Ningún examen es obligatorio para decidir',
        'Súmalos y clasifica: sin deshidratación, moderada, o grave.',
        ['Sin deshidratación', N('ok', 'Plan A', 'Sales orales tras cada deposición, sigue alimentando',
          'En la casa: más líquido de lo habitual, seguir con la alimentación de siempre, y pautas de alarma para volver.')],
        ['Moderada', N('do', 'Plan B', 'Sales orales, 50 a 100 mL/kg en 4 horas',
          'En el box, fraccionado con cucharita o jeringa. Si vomita mucho, sonda nasogástrica para gastroclisis antes de ir a la vena.')],
        ['Grave o en shock', N('alert', 'Plan C', 'Ringer lactato o suero fisiológico endovenoso',
          'Cien mililitros por kilo, repartidos según la edad. Si hay shock, primero un bolo de veinte mililitros por kilo.')],
        ['Disentería con fiebre', N('do', 'Sospecha de Shigella', 'Azitromicina por 3 días',
          'Diarrea con sangre, moco, fiebre, pujo y tenesmo: pide coprocultivo, hidrata y trata con azitromicina tres días. Si es sin fiebre alta y con carne mal cocida, piensa en E. coli productora de toxina Shiga y no des antibióticos.')],
        ['Diarrea con sangre + riñón', N('alert', 'Sospecha síndrome hemolítico urémico', 'Nunca antibióticos',
          'Anemia con esquistocitos, plaquetas bajas y poca orina tras una diarrea disentérica, casi siempre por carne mal cocida. Los antibióticos liberan más toxina y empeoran la falla renal.')])]),
  },
};
