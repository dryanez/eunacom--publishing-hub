// Clase 15.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El examen que decide todo en un minuto: el agujero estenopeico, y la ventana que se cierra a los ocho años',
      say: 'Bienvenidos. Hoy vemos los vicios de refracción, la presbicia y la ambliopía en niños. Es de los temas más rentables del examen, porque casi todo se resuelve con una sola pregunta: si el paciente mira a través de un agujero estenopeico, ¿mejora o no mejora? Y en pediatría, hay una fecha límite que no puedes olvidar. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Óptica fisiológica',
      title: '¿Por qué el ojo no enfoca en la retina?',
      nodes: [
        { id: 'mcau', col: 0, row: 0, k: 'cause', t: 'Ojo demasiado largo', s: 'O córnea con exceso de potencia' },
        { id: 'mmec', col: 1, row: 0, k: 'mech', t: 'El foco cae antes de la retina', s: 'Delante de la fóvea' },
        { id: 'mefe', col: 2, row: 0, k: 'effect', t: 'Mala visión de lejos', s: 'Visión de cerca excelente' },
        { id: 'mcor', col: 3, row: 0, k: 'good', t: 'Lentes divergentes (-)', s: 'Cóncavos, negativos' },
        { id: 'hcau', col: 0, row: 1, k: 'cause', t: 'Ojo demasiado corto', s: 'O córnea demasiado plana' },
        { id: 'hmec', col: 1, row: 1, k: 'mech', t: 'El foco cae detrás de la retina', s: 'El joven lo compensa acomodando' },
        { id: 'hefe', col: 2, row: 1, k: 'effect', t: 'Astenopía acomodativa', s: 'Cefalea frontal y fatiga vespertina' },
        { id: 'hcor', col: 3, row: 1, k: 'good', t: 'Lentes convergentes (+)', s: 'Convexos, positivos' },
        { id: 'acau', col: 0, row: 2, k: 'cause', t: 'Córnea irregular', s: 'Como un balón de rugby, no una esfera' },
        { id: 'aefe', col: 2, row: 2, k: 'effect', t: 'Visión distorsionada', s: 'Borrosa de lejos y de cerca' },
        { id: 'acor', col: 3, row: 2, k: 'good', t: 'Lentes cilíndricos', s: 'O tóricos' },
      ],
      edges: [
        { from: 'mcau', to: 'mmec' }, { from: 'mmec', to: 'mefe' }, { from: 'mefe', to: 'mcor' },
        { from: 'hcau', to: 'hmec' }, { from: 'hmec', to: 'hefe' }, { from: 'hefe', to: 'hcor' },
        { from: 'acau', to: 'aefe' }, { from: 'aefe', to: 'acor' },
      ],
      steps: [
        { show: ['mcau', 'mmec'], note: 'El ojo emétrope normal enfoca justo en la retina, sin esfuerzo',
          say: 'Empecemos por el mecanismo, porque de ahí sale todo lo demás. En el ojo normal, los rayos de luz convergen exactamente sobre la retina. En la miopía, el globo ocular es anatómicamente demasiado largo, o la córnea tiene demasiada potencia, y el foco cae por delante de la retina, antes de llegar a ella.' },
        { show: ['mefe', 'mcor'], note: 'El patrón clásico: pizarrón borroso, libro nítido',
          say: 'Y eso explica la clínica que se pregunta siempre: mala visión de lejos, con visión de cerca excelente. El paciente entrecierra los ojos para ver el pizarrón, pero lee perfecto un libro. Como el foco cae antes de la retina, la corrección necesita alejar ese foco: lentes divergentes, cóncavos, de poder negativo.' },
        { show: ['hcau', 'hmec'], note: 'El joven compensa acomodando; el présbita, no',
          say: 'En la hipermetropía pasa lo contrario: el ojo es demasiado corto, y el foco cae, en teoría, por detrás de la retina. Un paciente joven puede compensar esto acomodando activamente con el músculo ciliar.' },
        { show: ['hefe', 'hcor'], note: 'Ojo, con esto: la hipermetropía predispone a glaucoma agudo',
          say: 'Pero acomodar todo el día cansa, y eso da la astenopía acomodativa: cefalea frontal, fatiga ocular, ardor al final del día. La corrección son lentes convergentes, convexos, de poder positivo. Y guarda este dato, porque conecta con una clase anterior: la hipermetropía predispone a un ángulo camerular estrecho, y por lo tanto, a un glaucoma agudo.' },
        { show: ['acau', 'aefe', 'acor'], note: 'Dos focos distintos, ninguno nítido',
          say: 'Y el astigmatismo es distinto a los dos anteriores: no es un problema de largo del ojo, sino de forma. La córnea tiene una curvatura irregular, como un balón de rugby en vez de una pelota, y eso forma dos focos distintos en vez de uno. Por eso la visión sale distorsionada, tanto de lejos como de cerca, y se corrige con lentes cilíndricos o tóricos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Presbicia y el examen de bolsillo',
      title: 'Presbicia y la prueba del agujero estenopeico',
      cards: [
        { title: 'Presbicia', tag: 'Desde los cuarenta a cuarenta y cinco años', kind: 'key', items: [
          { t: 'Pérdida de elasticidad del cristalino', d: 'Proceso fisiológico, inevitable',
            say: 'Ahora un cambio distinto, que no es un vicio de refracción sino el envejecimiento normal del ojo: la presbicia. A partir de los cuarenta a cuarenta y cinco años, el cristalino pierde elasticidad y el núcleo se esclerosa, y pierde la capacidad de cambiar de forma para enfocar de cerca.' },
          { t: 'Síndrome de los brazos cortos', d: 'Aleja el libro o el celular para enfocar',
            say: 'La clínica es reconocible: el paciente aleja los brazos para leer letras pequeñas, el clásico síndrome de los brazos cortos. Se corrige con lentes positivos, convexos, graduados exclusivamente para la visión cercana.' },
        ] },
        { title: 'Agujero estenopeico', tag: 'El examen que responde casi todo', kind: 'criteria', items: [
          { t: 'Un disco con un orificio central', d: 'De uno a uno coma cinco milímetros',
            say: 'Y aquí está la herramienta más poderosa y más barata del médico general: el agujero estenopeico. Es un disco opaco con un pequeño orificio central, de un milímetro a un milímetro y medio.' },
          { t: 'Solo dejan pasar los rayos centrales', d: 'Eliminan la aberración periférica',
            say: 'Al mirar por ese orificio, solo pasan los rayos de luz paralelos al eje óptico, y se elimina la aberración que producen los rayos periféricos.' },
          { t: 'Mejora: vicio de refracción', d: 'No mejora: lesión orgánica o ambliopía',
            say: 'Y esa es la pregunta que decide todo: si la agudeza visual mejora al mirar por el agujero, el problema es puramente refractivo, un vicio de refracción. Si no mejora, el defecto no es óptico: es una lesión orgánica, como una catarata, una degeneración macular o una neuritis óptica, o en un niño, una ambliopía. Este examen te va a ahorrar exámenes de alto costo en la consulta de atención primaria.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pediatría, GES número cuarenta y uno',
      title: 'Ambliopía: la ventana que se cierra a los ocho años',
      nodes: [
        { id: 'est', col: 0, row: 0, k: 'cause', t: 'Estrabismo', s: 'La corteza suprime la imagen desviada' },
        { id: 'ani', col: 0, row: 1, k: 'cause', t: 'Anisometropía', s: 'Diferencia de refracción entre ambos ojos' },
        { id: 'priv', col: 0, row: 2, k: 'cause', t: 'Privación sensorial', s: 'Catarata congénita, ptosis palpebral completa' },
        { id: 'sup', col: 1, row: 1, k: 'mech', t: 'Supresión cortical', s: 'El cerebro apaga la vía del ojo peor' },
        { id: 'amb', col: 2, row: 1, k: 'risk', t: 'Ambliopía: ojo flojo', s: 'Baja visual sin lesión orgánica en el ojo' },
        { id: 'ven', col: 3, row: 0, k: 'alert', t: 'Ventana hasta los siete u ocho años', s: 'Es cuando madura la plasticidad cortical' },
        { id: 'irr', col: 3, row: 2, k: 'trap', t: 'Después de esa edad', s: 'Ceguera funcional permanente' },
        { id: 'par', col: 4, row: 1, k: 'good', t: 'Parche en el ojo sano', s: 'Fuerza a usar la vía del ojo ambliope' },
      ],
      edges: [
        { from: 'est', to: 'sup' }, { from: 'ani', to: 'sup' }, { from: 'priv', to: 'sup' },
        { from: 'sup', to: 'amb' }, { from: 'amb', to: 'ven', label: 'a tiempo' }, { from: 'amb', to: 'irr', label: 'tarde' },
        { from: 'ven', to: 'par' },
      ],
      steps: [
        { show: ['est', 'ani'], note: 'Dos caminos frecuentes al mismo resultado',
          say: 'Y ahora lo más importante de la clase, porque es donde el examen es más despiadado: la ambliopía, el ojo flojo. Tiene tres causas. Primero, el estrabismo: si un ojo se desvía, el cerebro recibe dos imágenes distintas y, para evitar la visión doble, suprime activamente la que viene del ojo desviado. Segundo, la anisometropía: si hay una diferencia grande de refracción entre ambos ojos, el cerebro procesa solo el ojo claro y apaga el borroso.' },
        { show: ['priv'], note: 'La forma más grave: bloquea la luz desde el nacimiento',
          say: 'Y tercero, la privación sensorial: una catarata congénita, o una ptosis palpebral que tapa completamente la pupila, y que bloquea la llegada de luz desde el nacimiento. Es la forma más grave de todas, porque el estímulo visual falta por completo.' },
        { show: ['sup', 'amb'], note: 'No hay lesión en el ojo: el problema está en la corteza',
          say: 'Y fíjate en algo clave para el examen: en los tres casos, el ojo en sí mismo está sano. Lo que falla es la maduración de la corteza visual, porque nunca recibió el estímulo que necesitaba. Eso es la ambliopía: una disminución de la agudeza visual, unilateral o bilateral, sin ninguna lesión orgánica que la explique.' },
        { show: ['ven'], note: 'El dato que más se pregunta',
          say: 'Y aquí está el dato que más se pregunta de todo el tema: la plasticidad neuronal visual madura hasta los siete a ocho años de edad. Esa es la ventana terapéutica.' },
        { show: ['irr'], note: 'Irreversible de por vida',
          say: 'Si la ambliopía no se corrige antes de esa edad, la ceguera funcional de ese ojo queda permanente e irreversible de por vida, aunque el ojo esté anatómicamente perfecto.' },
        { show: ['par'], note: 'Parche en el ojo bueno, no en el malo',
          say: 'El tratamiento de elección tiene una trampa clásica de nombre: se corrige el vicio con lentes, y se pone el parche oclusivo sobre el ojo sano, no sobre el ojo ambliope. Al tapar el ojo bueno, se obliga a la corteza cerebral a usar y conectar las vías del ojo flojo, durante varias horas al día. Esta es la garantía GES número cuarenta y uno, para el estrabismo en menores de nueve años.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Un cuadro, cinco entidades, una sola pregunta cada vez',
      head: ['Trastorno', 'Mecanismo', 'Corrección', 'La trampa que se pregunta'],
      rows: [
        { cells: ['Miopía', 'Ojo largo; foco delante de la retina', 'Lentes divergentes (-)', 'Riesgo de desprendimiento de retina'],
          say: 'Repasemos rápido. La miopía tiene el ojo largo, el foco cae delante de la retina, se corrige con lentes divergentes, y la trampa es su asociación con el desprendimiento de retina y el glaucoma crónico.' },
        { cells: ['Hipermetropía', 'Ojo corto; foco detrás de la retina', 'Lentes convergentes (+)', 'Riesgo de glaucoma agudo por ángulo estrecho'],
          say: 'La hipermetropía tiene el ojo corto, foco detrás de la retina, se corrige con lentes convergentes, y la trampa es que predispone al glaucoma agudo de ángulo cerrado.' },
        { cells: ['Astigmatismo', 'Córnea con curvatura irregular', 'Lentes cilíndricos o tóricos', 'No es un problema de largo del ojo'],
          say: 'El astigmatismo no depende del largo del ojo, sino de una córnea irregular, y se corrige con lentes cilíndricos. Si el examen te habla de dos focos distintos, es astigmatismo, no miopía ni hipermetropía.' },
        { cells: ['Presbicia', 'Cristalino pierde elasticidad después de los cuarenta', 'Lentes positivos solo para cerca', 'No es hipermetropía ni requiere fondo de ojo'],
          say: 'La presbicia es la pérdida fisiológica de elasticidad del cristalino después de los cuarenta años, se corrige con lentes positivos solo para cerca, y la trampa es confundirla con una hipermetropía o pedir estudios que no hacen falta: es un diagnóstico clínico, por la edad.' },
        { cells: ['Ambliopía', 'Supresión cortical antes de los ocho años', 'Parche en el ojo sano más lentes', 'Irreversible si se trata después de esa edad'],
          say: 'Y la ambliopía es la supresión cortical antes de los ocho años, se trata con parche en el ojo sano, y la trampa más grave de todas: si no se trata a tiempo, es irreversible de por vida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Madre consulta en control infantil con su hijo de 4 años porque nota que en las fotografías familiares el ojo izquierdo del niño parece desviarse levemente hacia la nariz. Al examen: agudeza visual en ojo derecho 20/20 y en ojo izquierdo 20/80, que no mejora al mirar por el agujero estenopeico. Medios transparentes y fondo de ojo normal. La prueba de Hirschberg revela asimetría en el reflejo corneal del ojo izquierdo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la madre: es normal que un niño de esa edad desvíe levemente un ojo' },
        { letter: 'B', text: 'Prescribir lentes ópticos y controlar la agudeza visual en un año' },
        { letter: 'C', text: 'Derivar de urgencia a oftalmología pediátrica para corrección óptica y terapia con parche en el ojo derecho' },
        { letter: 'D', text: 'Solicitar resonancia magnética de órbita antes de decidir cualquier tratamiento' },
        { letter: 'E', text: 'Indicar parche en el ojo izquierdo, que es el ojo con menor agudeza visual' },
      ],
      correct: 'C',
      explanation: 'Estrabismo con endotropia y agudeza visual 20/80 en el ojo desviado, que no mejora con agujero estenopeico y con fondo de ojo normal: ambliopía estrábica. Es GES 41 (estrabismo en menores de 9 años); la conducta es corrección óptica y parche en el ojo sano, el derecho, antes de que se cierre la ventana de plasticidad a los 7-8 años.',
      say: {
        stem: 'Vamos al caso. Una madre consulta en control infantil con su hijo de cuatro años, porque en las fotos familiares nota que el ojo izquierdo se desvía levemente hacia la nariz. La agudeza visual del ojo derecho es normal, pero la del ojo izquierdo está muy disminuida, y no mejora con el agujero estenopeico. El fondo de ojo es normal, y la prueba de Hirschberg muestra el reflejo corneal asimétrico en ese ojo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar a la madre porque es normal a esa edad, prescribir lentes y controlar en un año, derivar de urgencia para corrección óptica y parche en el ojo derecho, pedir una resonancia de órbita antes de decidir, o poner el parche en el ojo izquierdo, que es el que ve peor. Piénsalo.',
        answer: 'Es la C. Hay estrabismo hacia la nariz y baja visual en ese mismo ojo, que no mejora con el agujero estenopeico, con fondo de ojo normal: ambliopía estrábica. El niño tiene cuatro años, dentro de la ventana de los siete a ocho, así que se actúa ahora, con lentes y parche en el ojo sano, el derecho. La opción E es la trampa: el parche va en el ojo que ve bien.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 125',
      stem: 'Un paciente de 18 años presenta agudeza visual de 1 en el ojo izquierdo y de 0,6 en el ojo derecho, que mejora a 0,8 al mirar por un agujero estenopeico. No presenta dolor.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma' },
        { letter: 'B', text: 'Estrabismo' },
        { letter: 'C', text: 'Vicio de refracción' },
        { letter: 'D', text: 'Catarata' },
        { letter: 'E', text: 'Coriorretinitis' },
      ],
      correct: 'C',
      explanation: 'La mejoría de la agudeza visual al mirar por un agujero estenopeico es característica de los vicios de refracción: el defecto es puramente óptico, no orgánico.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de julio de dos mil diecisiete. Un paciente de dieciocho años tiene una visión perfecta en el ojo izquierdo, pero en el ojo derecho está reducida, y mejora al mirar por un agujero estenopeico. No tiene dolor.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glaucoma, estrabismo, vicio de refracción, catarata, o coriorretinitis.',
        answer: 'Es la C, vicio de refracción. Este es el caso más directo de todo el tema: la agudeza visual mejora con el agujero estenopeico, así que el problema es puramente óptico. Ni el glaucoma, ni la catarata, ni una coriorretinitis mejoran con ese examen, porque son lesiones orgánicas, no ópticas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 95',
      stem: 'Un niño de 5 años, nacido a las 32 semanas por parto vaginal, es llevado a control porque se acerca mucho a la pantalla cuando ve televisión. La inspección ocular es normal. La agudeza visual es 20/25 en el ojo derecho y 20/80 en el ojo izquierdo, la cual mejora a 20/25 al usar un agujero estenopeico.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Ambliopía' },
        { letter: 'B', text: 'Microftalmia' },
        { letter: 'C', text: 'Ametropía' },
        { letter: 'D', text: 'Glaucoma congénito' },
        { letter: 'E', text: 'Retinopatía del prematuro' },
      ],
      correct: 'C',
      explanation: 'La mejora de la agudeza visual al mirar a través de un agujero estenopeico es característica de los vicios de refracción, o ametropías. Aquí la agudeza visual se corrige por completo, así que no hay ambliopía; si solo hubiese mejorado en forma parcial, el diagnóstico habría incluido ambliopía anisometrópica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Un niño de cinco años, nacido a las treinta y dos semanas, es llevado a control porque se acerca mucho a la pantalla del televisor. La inspección ocular es normal. La agudeza visual del ojo izquierdo está reducida, pero mejora casi por completo al usar el agujero estenopeico.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: ambliopía, microftalmia, ametropía, glaucoma congénito, o retinopatía del prematuro.',
        answer: 'Es la C, ametropía, es decir, un vicio de refracción. Este caso enseña la diferencia más fina del tema: la agudeza visual mejoró casi por completo con el agujero estenopeico, así que no es ambliopía. Si hubiera mejorado solo a medias, ahí sí tendrías que pensar en una ambliopía anisometrópica encima del vicio de refracción. El antecedente de prematurez es un distractor: la inspección y el resto del examen son normales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 38',
      stem: 'Un niño de 2 meses presenta estrabismo bilateral, fluctuante y que aparece con bastante frecuencia. Ha incrementado bien de peso y no tiene otros síntomas. Se realiza examen ocular, que muestra rojo pupilar presente bilateral, sin defectos, y movilidad ocular sin alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar fondo de ojo' },
        { letter: 'B', text: 'Derivar a oftalmólogo pediátrico' },
        { letter: 'C', text: 'Indicar parches oculares intermitentes' },
        { letter: 'D', text: 'Solicitar tomografía computada de órbitas' },
        { letter: 'E', text: 'Mantener el control habitual del niño sano' },
      ],
      correct: 'E',
      explanation: 'En los primeros meses de vida, un estrabismo intermitente, fluctuante y con reflejo rojo y motilidad normales suele ser fisiológico, porque la fijación binocular aún no ha madurado. No exige derivación ni exámenes de urgencia; sí lo haría si fuera fijo, constante, o si alterara el reflejo rojo.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de agosto de dos mil veintiuno, y que es la contracara de todo lo que hemos visto. Un niño de dos meses tiene un estrabismo bilateral, que aparece y desaparece, es decir, es fluctuante. Sube bien de peso y no tiene otros síntomas. El reflejo rojo pupilar está presente en ambos ojos, sin defectos, y la movilidad ocular es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hacer un fondo de ojo, derivar a oftalmólogo pediátrico, indicar parches intermitentes, pedir una tomografía de órbitas, o simplemente mantener el control habitual del niño sano.',
        answer: 'Es la E. No todo estrabismo en un lactante es patológico: en los primeros meses de vida, la fijación binocular todavía no madura, y es normal que el ojo se desvíe de forma intermitente y fluctuante. La alarma se enciende si el estrabismo es fijo y constante, o si el reflejo rojo está alterado, que es justo lo que este niño no tiene. Sobrederivar aquí no es lo correcto: se mantiene el control habitual del niño sano.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El examen que responde casi todo', tag: 'Agujero estenopeico', kind: 'key', items: [
          { t: 'Mejora: vicio de refracción', d: 'No mejora: lesión orgánica o ambliopía',
            say: 'Cerremos con las reglas de oro. Si la agudeza visual mejora con el agujero estenopeico, es un vicio de refracción. Si no mejora, busca una lesión orgánica o, en un niño, una ambliopía.' },
        ] },
        { title: 'Los tres vicios', tag: 'Mecanismo y lente', kind: 'criteria', items: [
          { t: 'Miopía: ojo largo, lentes negativos', d: 'Hipermetropía: ojo corto, lentes positivos',
            say: 'La miopía tiene el ojo largo y se corrige con lentes negativos. La hipermetropía tiene el ojo corto, se corrige con lentes positivos, y predispone al glaucoma agudo. El astigmatismo es la córnea irregular, con lentes cilíndricos.' },
        ] },
        { title: 'Ambliopía', tag: 'La ventana se cierra a los ocho años', kind: 'alert', items: [
          { t: 'Parche en el ojo sano', d: 'No en el ojo enfermo',
            say: 'Y si te llevas una sola idea de hoy: en la ambliopía, el parche va en el ojo sano, y hay que tratarla antes de los siete a ocho años, porque después es irreversible de por vida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Baja visual sin dolor ni ojo rojo: la pregunta es el agujero estenopeico',
    root: (() => {
      const parche = N('ok', 'Corrección óptica más parche en el ojo sano', 'Antes de los siete u ocho años',
        'Corrige el vicio con lentes y coloca el parche oclusivo sobre el ojo sano, para forzar la vía del ojo ambliope, dentro de la ventana de los siete a ocho años.');
      const buscarCausaAmbliopia = N('q', '¿Hay estrabismo, anisometropía o privación sensorial?', 'Estrabismo, catarata congénita o ptosis completa',
        'Busca la causa: estrabismo, una diferencia de refracción marcada entre ambos ojos, o una privación sensorial como una catarata congénita o una ptosis palpebral completa.',
        ['sí, se confirma la causa', parche]);
      const noMejoraNino = N('alert', 'Sospecha de ambliopía', 'Sin lesión orgánica visible en el fondo de ojo',
        'En un niño, si no mejora con el agujero y el fondo de ojo es normal, sospecha ambliopía y busca su causa de inmediato.',
        ['', buscarCausaAmbliopia]);
      const otraLesion = N('refer', 'Buscar lesión orgánica', 'Catarata, degeneración macular, neuritis óptica',
        'En un adulto, si no mejora con el agujero estenopeico, el problema no es óptico: busca una lesión orgánica del ojo o la vía visual.');
      const lentes = N('ok', 'Prescribir lentes ópticos', 'Divergentes, convergentes o cilíndricos según el defecto',
        'El problema es puramente óptico: prescribe el lente que corresponda, divergente para miopía, convergente para hipermetropía, o cilíndrico para astigmatismo.');
      const preguntaEsten = N('q', '¿La agudeza visual mejora con el agujero estenopeico?', 'Disco opaco con un orificio central',
        'Haz mirar al paciente a través del agujero estenopeico y compara la agudeza visual antes y después.',
        ['sí, mejora', lentes],
        ['no mejora, y es adulto', otraLesion],
        ['no mejora, y es un niño', noMejoraNino]);
      return N('start', 'Baja de agudeza visual, sin dolor ni ojo rojo', 'En cualquier edad',
        'Paciente con disminución de la agudeza visual, sin dolor ni ojo rojo.',
        ['', preguntaEsten]);
    })(),
  },
};
