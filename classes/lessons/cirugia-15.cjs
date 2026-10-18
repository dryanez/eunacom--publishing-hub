// Clase 11.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-15, classId cirugia-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué anestesia elegir, y cómo reaccionas si el anestésico local se envenena',
      say: 'Seguimos en el bloque del perioperatorio. Hoy vemos anestesia general contra neuroaxial, y la complicación que más se pregunta de los anestésicos locales: su toxicidad sistémica. Vas a ver que hay una secuencia de síntomas muy reconocible, y un antídoto puntual que tienes que saber de memoria. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Técnicas',
      title: 'General o neuroaxial: ¿qué decide la diferencia?',
      cards: [
        { title: 'Anestesia general', tag: 'Tres cosas a la vez', kind: 'key', items: [
          { t: 'Hipnosis, analgesia y relajación', d: 'La tríada clásica',
            say: 'Empecemos por las técnicas. La anestesia general busca tres cosas al mismo tiempo: que el paciente esté inconsciente, que no sienta dolor, y que sus músculos se relajen.' },
          { t: 'Propofol es el de elección', d: 'Etomidato si hay shock o cardiopatía grave',
            say: 'Para inducir, el propofol es el fármaco de elección, aunque baja la presión. Si el paciente ya está en shock o tiene una cardiopatía grave, prefieres etomidato, porque mantiene la presión estable.' },
          { t: 'Ketamina en shock o asma grave', d: 'Estimula el corazón y broncodilata',
            say: 'Y hay un tercer inductor para un escenario puntual: la ketamina. A diferencia de los otros dos, estimula el corazón en vez de deprimirlo, y además broncodilata, por eso es la elegida en el shock y en la crisis asmática grave.' },
        ] },
        { title: 'Anestesia neuroaxial', tag: 'Raquídea o peridural', kind: 'criteria', items: [
          { t: 'Raquídea: directo al líquido cefalorraquídeo', d: 'Bloqueo rápido, profundo y predecible',
            say: 'La neuroaxial es otra familia completa. La raquídea deposita el anestésico directo en el líquido cefalorraquídeo, y el bloqueo es rápido, profundo y muy predecible.' },
          { t: 'Peridural: fuera de la duramadre', d: 'Permite dejar un catéter para analgesia continua',
            say: 'La peridural queda por fuera de la duramadre, necesita más volumen de anestésico, y su ventaja es que puedes dejar un catéter para analgesia continua, como en el trabajo de parto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones neuroaxiales',
      title: 'Lo que puede pasar apenas pones el bloqueo',
      cards: [
        { title: 'Hipotensión por bloqueo simpático', tag: 'La más frecuente', kind: 'alert', items: [
          { t: 'El bloqueo abre las venas', d: 'Apaga las fibras simpáticas que las contraen',
            say: 'Apenas pones una raquídea o una peridural, fíjate en la complicación más frecuente: la presión cae, porque el bloqueo también apaga las fibras simpáticas que mantienen contraídas las venas.' },
          { t: 'Volumen y un vasoconstrictor', d: 'Efedrina o fenilefrina',
            say: 'Se maneja con volumen y con un vasoconstrictor, efedrina o fenilefrina.' },
        ] },
        { title: 'Anestesia general', tag: 'Su propia caída de presión', kind: 'normal', items: [
          { t: 'Propofol también hipotensa', d: 'Por vasodilatación y depresión del corazón',
            say: 'Y recuerda que la anestesia general tiene su propia caída de presión: el propofol vasodilata y deprime algo el corazón, así que este riesgo no es exclusivo de la neuroaxial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Relajantes musculares',
      title: 'Para intubar rápido, y cómo revertir después',
      cards: [
        { title: 'Succinilcolina', tag: 'La más rápida', kind: 'alert', items: [
          { t: 'Inicio en menos de un minuto', d: 'Ideal para intubación de secuencia rápida',
            say: 'Y para completar la tríada, ya sabes que necesitas relajación muscular. La succinilcolina actúa en menos de un minuto, y es la elegida cuando necesitas intubar de inmediato.' },
          { t: 'Hiperkalemia grave', d: 'Contraindicada en el gran quemado y en denervación',
            say: 'Pero tiene un riesgo puntual: puede causar una hiperkalemia grave, así que evítala en el gran quemado de más de veinticuatro horas, en el politraumatizado, y en cualquier denervación muscular.' },
        ] },
        { title: 'Rocuronio y vecuronio', tag: 'Se pueden revertir', kind: 'pharma', items: [
          { t: 'No despolarizantes', d: 'Acción más lenta que la succinilcolina',
            say: 'El rocuronio y el vecuronio son no despolarizantes, con un inicio más lento.' },
          { t: 'Sugammadex los revierte directo', d: 'Los atrapa y termina el bloqueo',
            say: 'Su ventaja es que el sugammadex los revierte de forma directa y específica, envolviendo la molécula del relajante. Si no tienes sugammadex, la alternativa es neostigmina con atropina.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Peridural, raquídea y la fuga que da cefalea',
      images: [
        { src: 'animaciones/cirugia-15/A1_neuroaxial_peridural_raquidea.mp4', label: 'Peridural, raquídea y cefalea postpunción', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Fuera de la dura, dentro de la dura, y el orificio que queda',
          say: 'Mira la región lumbar. La aguja de la peridural se detiene por fuera de la duramadre, y puede dejar un catéter. La de la raquídea la atraviesa y llega al líquido cefalorraquídeo. Ese orificio puede quedar abierto: el líquido se fuga, la presión baja y aparece la cefalea al sentarse. Primero reposo, hidratación y cafeína, y si no cede, parche hemático.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación neuroaxial',
      title: 'La cefalea que aparece al sentarse',
      nodes: [
        { id: 'pun', col: 0, row: 1, k: 'cause', t: 'Punción dural durante la técnica', s: 'Con la raquídea o al fallar la peridural' },
        { id: 'fug', col: 1, row: 1, k: 'mech', t: 'Fuga continua de líquido', s: 'La presión intracraneana baja' },
        { id: 'cef', col: 2, row: 1, k: 'effect', t: 'Cefalea postural', s: 'Empeora al sentarse, mejora acostado' },
        { id: 'con', col: 3, row: 0, k: 'good', t: 'Reposo, hidratación y cafeína', s: 'Primera línea' },
        { id: 'par', col: 3, row: 2, k: 'refer', t: 'Parche hemático epidural', s: 'Si no cede en dos o tres días' },
      ],
      edges: [
        { from: 'pun', to: 'fug' }, { from: 'fug', to: 'cef' },
        { from: 'cef', to: 'con', label: 'primero' }, { from: 'con', to: 'par', label: 'si no cede' },
      ],
      steps: [
        { show: ['pun'], note: 'Puede pasar con la raquídea, o sin querer con la peridural',
          say: 'Antes de llegar a la toxicidad grave, mira esta complicación más frecuente y menos dramática: la punción de la duramadre, ya sea al hacer una raquídea, o sin querer, mientras intentas una peridural.' },
        { show: ['fug'], note: 'Menos líquido cefalorraquídeo del que debería',
          say: 'Por el orificio que queda, el líquido cefalorraquídeo sigue fugando, y su presión baja.' },
        { show: ['cef'], note: 'El dato que la reconoce de inmediato',
          say: 'Y eso da una cefalea muy característica: empeora en segundos al sentarse o pararse, y desaparece casi por completo al acostarse. Ese patrón postural es el dato que la reconoce de inmediato.' },
        { show: ['con'], note: 'La mayoría mejora sola en dos o tres días',
          say: 'El tratamiento de primera línea es simple: reposo en decúbito, buena hidratación, y cafeína. La mayoría mejora sola en dos o tres días.' },
        { show: ['par'], note: 'Sangre propia que sella el orificio',
          say: 'Si no cede en ese plazo, se hace un parche hemático epidural: se inyecta sangre del propio paciente en el espacio epidural, y esa sangre sella el orificio.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Farmacología',
      title: 'Ésteres y amidas: dos familias, un mismo bloqueo',
      nodes: [
        { id: 'nav', col: 0, row: 1, k: 'mech', t: 'Bloquean el canal de sodio', s: 'La neurona no se despolariza' },
        { id: 'est', col: 1, row: 0, k: 'cause', t: 'Ésteres', s: 'Procaína, tetracaína' },
        { id: 'ale', col: 2, row: 0, k: 'risk', t: 'Alergia verdadera', s: 'Por su metabolito, el PABA' },
        { id: 'ami', col: 1, row: 2, k: 'cause', t: 'Amidas', s: 'Lidocaína, bupivacaína' },
        { id: 'hig', col: 2, row: 2, k: 'effect', t: 'Se metabolizan en el hígado', s: 'Alergia verdadera, casi nunca' },
      ],
      edges: [
        { from: 'nav', to: 'est' }, { from: 'est', to: 'ale' },
        { from: 'nav', to: 'ami' }, { from: 'ami', to: 'hig' },
      ],
      steps: [
        { show: ['nav'], note: 'El mismo mecanismo para las dos familias',
          say: 'Ahora la farmacología. Todos los anestésicos locales hacen lo mismo: bloquean el canal de sodio de la neurona, y sin ese canal, no hay despolarización ni dolor que se transmita.' },
        { show: ['est'], note: 'Se acuerdan por el nombre corto',
          say: 'La primera familia son los ésteres: procaína y tetracaína.' },
        { show: ['ale'], note: 'Esto casi no se ve con las amidas',
          say: 'Su metabolito, el ácido para amino benzoico, es el responsable de que los ésteres den bastante más alergia verdadera.' },
        { show: ['ami'], note: 'Truco para memorizar: llevan dos íes en el nombre',
          say: 'La segunda familia son las amidas: lidocaína, bupivacaína, y las demás terminadas en caína con dos íes en el nombre.' },
        { show: ['hig'], note: 'Las que más usas en la práctica diaria',
          say: 'Se metabolizan en el hígado, y la alergia verdadera con ellas es rarísima. Son, por lejos, las que más usas. Y justamente de una de ellas viene la complicación más grave de la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Dosis máximas',
      title: 'El límite antes de que aparezca la toxicidad',
      cards: [
        { title: 'Lidocaína', tag: 'La más usada', kind: 'key', items: [
          { t: 'Sin epinefrina, cuatro a cinco', d: 'Miligramos por kilo, máximo trescientos',
            say: 'Y esto conecta directo con la toxicidad: cada anestésico tiene un límite. La lidocaína sin epinefrina llega a cuatro o cinco miligramos por kilo, con un máximo de trescientos miligramos.' },
          { t: 'Con epinefrina: siete por kilo', d: 'Máximo quinientos miligramos',
            say: 'Con epinefrina, ese límite sube a siete miligramos por kilo, porque la epinefrina enlentece la absorción hacia la sangre.' },
        ] },
        { title: 'Bupivacaína', tag: 'La de mayor riesgo', kind: 'alert', items: [
          { t: 'Solo dos por kilo', d: 'Máximo ciento cincuenta miligramos',
            say: 'La bupivacaína tiene un límite mucho más bajo: solo dos miligramos por kilo, ciento cincuenta como máximo, porque se pega con fuerza al canal de sodio del corazón y cuesta mucho que lo suelte.' },
          { t: 'Sumar dosis, no solo mirar volumen', d: 'Un error de cálculo dispara la toxicidad',
            say: 'La trampa más común es calcular mal, sumando el volumen sin convertirlo a miligramos por kilo: ese error de cálculo es lo que más dispara la toxicidad.' },
        ] },
        { title: 'Otras amidas', tag: 'Alternativas más seguras', kind: 'normal', items: [
          { t: 'Ropivacaína: menor cardiotoxicidad', d: 'Misma duración larga que la bupivacaína',
            say: 'Y si necesitas un bloqueo de larga duración, pero con menos margen de susto, la ropivacaína tiene una cardiotoxicidad bastante menor que la bupivacaína, con una duración parecida.' },
          { t: 'Mepivacaína: menos vasodilatación', d: 'Útil en bloqueos periféricos sin epinefrina',
            say: 'Y la mepivacaína vasodilata menos que las demás por sí sola, lo que la hace útil en bloqueos periféricos incluso sin agregar epinefrina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Infiltración y bloqueo de dedos',
      title: 'Anestesiar una herida y un dedo',
      cards: [
        { title: 'Infiltración local', tag: 'Nivel realizar', kind: 'key', items: [
          { t: 'Habón intradérmico y luego los bordes', d: 'Aguja fina; aspirar antes de cada inyección',
            say: 'Con el límite de dosis claro, veamos la técnica. Con asepsia y aguja fina, pones primero un habón intradérmico y luego infiltras avanzando por los bordes de la herida, aspirando antes de cada inyección para no entrar a un vaso. Inyectas lento, con la solución tibia o tamponada con bicarbonato para que duela menos, y esperas cinco a diez minutos.' },
          { t: 'Lidocaína al 1 %: 10 mg por mL', d: 'Adulto de 70 kg sin adrenalina: máximo 300 mg, o sea 30 mL',
            say: 'Y haces la cuenta antes de inyectar: la lidocaína al uno por ciento tiene diez miligramos por mililitro, así que en un adulto de setenta kilos sin adrenalina el máximo es de trescientos miligramos, treinta mililitros.' },
        ] },
        { title: 'Adrenalina', tag: 'Prolonga y reduce sangrado', kind: 'alert', items: [
          { t: 'Nunca en dedos, ortejos, pene, nariz ni pabellón', d: 'Riesgo de isquemia en zonas de circulación terminal',
            say: 'La adrenalina prolonga el efecto y disminuye el sangrado, pero no se usa en dedos, ortejos, pene, nariz ni pabellón auricular, porque son zonas de circulación terminal. Y si el paciente refiere parestesias en los labios, sabor metálico o mareo, detienes todo y lo manejas como toxicidad sistémica.' },
        ] },
        { title: 'Bloqueo de dedos', tag: 'Nivel derivar', kind: 'criteria', items: [
          { t: 'Base del dedo, a cada lado', d: '1 a 2 mL de lidocaína 1-2 % sin adrenalina por lado',
            say: 'El bloqueo de dedos, o de Oberst, anestesia los nervios digitales en la base de la falange proximal. Pones uno a dos mililitros de lidocaína al uno o dos por ciento, sin adrenalina, a cada lado, con un total de tres a cinco mililitros, y esperas cinco a diez minutos.' },
          { t: 'Poco volumen, sin adrenalina', d: 'Útil en heridas, onicocriptosis, panadizos y cuerpos extraños',
            say: 'El volumen excesivo comprime los vasos digitales, y la adrenalina puede producir isquemia, por eso ninguno de los dos. Lo usas en heridas, uñas encarnadas, panadizos y cuerpos extraños de los dedos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Toxicidad sistémica',
      title: 'Cuando el anestésico local se va a la sangre',
      nodes: [
        { id: 'iny', col: 0, row: 1, k: 'cause', t: 'Inyección intravascular por error', s: 'O una dosis demasiado alta' },
        { id: 'sab', col: 1, row: 0, k: 'q', t: 'Sabor metálico y tinnitus', s: 'El primer aviso' },
        { id: 'con', col: 2, row: 0, k: 'risk', t: 'Convulsión tónico clónica', s: 'Fase de excitación del sistema nervioso' },
        { id: 'car', col: 2, row: 2, k: 'alert', t: 'Colapso cardiovascular', s: 'Bloqueo, arritmias, QRS ancho' },
        { id: 'lip', col: 3, row: 1, k: 'good', t: 'Emulsión lipídica al veinte por ciento', s: 'El antídoto específico' },
      ],
      edges: [
        { from: 'iny', to: 'sab' }, { from: 'sab', to: 'con' }, { from: 'sab', to: 'car', label: 'si avanza' },
        { from: 'con', to: 'lip' }, { from: 'car', to: 'lip' },
      ],
      steps: [
        { show: ['iny'], note: 'Bupivacaína es la más peligrosa de todas',
          say: 'Y esa complicación es la toxicidad sistémica por anestésicos locales. Ocurre cuando el fármaco pasa a la sangre en cantidad, casi siempre por una inyección intravascular accidental, y la bupivacaína es la más peligrosa de todas por su alta cardiotoxicidad.' },
        { show: ['sab'], note: 'Si el paciente te dice esto, detente ya',
          say: 'El primer aviso es puramente subjetivo: el paciente refiere un sabor metálico en la boca, hormigueo alrededor de los labios, y tinnitus. En cuanto escuches esto, detienes la inyección de inmediato.' },
        { show: ['con'], note: 'El sistema nervioso se excita antes de deprimirse',
          say: 'Si sigues adelante, viene la fase de excitación del sistema nervioso: temblores, y convulsiones tónico clónicas generalizadas.' },
        { show: ['car'], note: 'Aquí es donde se muere el paciente',
          say: 'Y en paralelo, o después, llega la parte que mata: el corazón se deprime, aparecen bloqueos, el QRS se ensancha, y pueden aparecer arritmias ventriculares hasta el paro cardíaco.' },
        { show: ['lip'], note: 'Se pide apenas aparecen los primeros síntomas',
          say: 'El tratamiento específico es la emulsión lipídica al veinte por ciento. Actúa como una esponja que atrapa el anestésico libre en la sangre, y se pide desde el primer síntoma, no cuando ya hay paro cardíaco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de la toxicidad',
      title: 'Cómo reanimas a este paciente',
      cards: [
        { title: 'Lo inmediato', tag: 'Antes que nada', kind: 'alert', items: [
          { t: 'Suspender el anestésico', d: 'Y pedir el kit de rescate lipídico',
            say: 'Ante los primeros síntomas, suspendes la inyección de inmediato y pides el kit de rescate lipídico.' },
          { t: 'Oxígeno al cien por ciento', d: 'La hipoxia empeora la cardiotoxicidad',
            say: 'Das oxígeno al cien por ciento, porque la hipoxia y la acidosis empeoran todavía más la toxicidad sobre el corazón.' },
        ] },
        { title: 'El antídoto', tag: 'Emulsión lipídica', kind: 'pharma', items: [
          { t: 'Bolo de uno y medio', d: 'Por kilo, en un minuto, más infusión continua',
            say: 'El bolo inicial de la emulsión lipídica es de uno y medio mililitros por kilo, pasado en un minuto, seguido de una infusión continua.' },
          { t: 'Midazolam para la convulsión', d: 'Evita propofol si ya está hipotenso',
            say: 'Para la convulsión usas midazolam. Evita el propofol en dosis altas si el paciente ya está con la presión baja, porque la baja todavía más.' },
        ] },
        { title: 'Si llega al paro', tag: 'ACLS modificado', kind: 'criteria', items: [
          { t: 'Adrenalina en dosis bajas', d: 'Menos de un microgramo por kilo',
            say: 'Si llega al paro cardíaco, el soporte avanzado se modifica: la adrenalina se da en dosis mucho más bajas que lo habitual.' },
          { t: 'Nunca vasopresina ni bloqueadores de calcio', d: 'Empeoran la arritmia',
            say: 'Y evitas por completo la vasopresina y los bloqueadores de canales de calcio, porque empeoran la arritmia. La reanimación puede durar mucho más de lo habitual, así que no la suspendas temprano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dolor postoperatorio',
      title: 'Analgesia horaria y multimodal',
      cards: [
        { title: 'Principio', tag: 'Escalera de la OMS', kind: 'key', items: [
          { t: 'Medir y tratar en horario', d: 'Escala 0 a 10; no «a demanda»',
            say: 'Cerramos con el dolor postoperatorio. Lo mides con una escala numérica de cero a diez y lo tratas con analgesia multimodal y horaria, no a demanda, siguiendo la escalera analgésica de la OMS.' },
          { t: 'Paracetamol más AINE', d: 'Paracetamol 1 g cada 6-8 h; ketorolaco no más de 5 días',
            say: 'La base es paracetamol, un gramo cada seis a ocho horas, con un antiinflamatorio como ibuprofeno, diclofenaco o ketorolaco, este último por no más de cinco días.' },
        ] },
        { title: 'Si persiste', tag: 'Subes un peldaño', kind: 'pharma', items: [
          { t: 'Opioide débil, luego fuerte', d: 'Tramadol; morfina titulada',
            say: 'Si el dolor persiste, agregas un opioide débil, el tramadol, y luego uno fuerte, la morfina titulada, sin sacar lo anterior. En cirugía mayor las técnicas regionales y la epidural complementan.' },
        ] },
        { title: 'Precauciones', tag: 'Qué vigilar', kind: 'alert', items: [
          { t: 'Opioides: laxante y vigilancia', d: 'Sedación, frecuencia respiratoria; naloxona',
            say: 'Los opioides piden laxantes y vigilancia de la sedación y de la frecuencia respiratoria, con naloxona si hay depresión respiratoria.' },
          { t: 'AINE: no en úlcera, renal ni anticoagulado', d: 'Un dolor que aumenta: descartar complicación quirúrgica',
            say: 'Los antiinflamatorios se evitan en úlcera péptica, insuficiencia renal y anticoagulación. Y un dolor que aumenta o no cede obliga a descartar una complicación quirúrgica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos toda la toxicidad por anestésicos locales en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en anestesia',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Paciente en shock que necesita inducción', 'Etomidato', 'Propofol por costumbre'],
          say: 'Repasemos las trampas. En un paciente en shock, el inductor es etomidato, no propofol por costumbre: el propofol le baja aún más la presión.' },
        { cells: ['Sabor metálico y tinnitus durante un bloqueo', 'Suspender la inyección de inmediato', 'Terminar de pasar la dosis completa'],
          say: 'Ante sabor metálico y tinnitus durante un bloqueo, se suspende la inyección ya. Terminar de pasar la dosis completa es el error que después cuesta la vida.' },
        { cells: ['Toxicidad sistémica por anestésico local', 'Emulsión lipídica al veinte por ciento', 'Solo soporte vital básico, sin antídoto'],
          say: 'Y en la toxicidad sistémica confirmada, el antídoto es la emulsión lipídica. Quedarse solo con el soporte básico, sin pedir el antídoto, retrasa el único tratamiento específico que existe.' },
        { cells: ['Cefalea postural tras raquídea', 'Reposo, hidratación y cafeína primero', 'Parche hemático de entrada'],
          say: 'Y la cefalea postural después de una raquídea parte con reposo, hidratación y cafeína. Ir directo al parche hemático, sin dar esos días, es adelantarse.' },
        { cells: ['Anestesia de un dedo', 'Lidocaína sin adrenalina, poco volumen', 'Usar adrenalina o un anillo de gran volumen'],
          say: 'Y en un dedo, lidocaína sin adrenalina y en poco volumen. La adrenalina o el gran volumen pueden causar isquemia.' },
        { cells: ['Dolor postoperatorio moderado a severo', 'Analgesia multimodal y horaria', 'Analgesia a demanda o dos AINE juntos'],
          say: 'El dolor postoperatorio se trata en horario y con varios fármacos. Dar analgesia a demanda, o sumar dos antiinflamatorios, no calma más y aumenta el riesgo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Durante un bloqueo de nervio periférico con lidocaína para una cirugía de mano, el paciente refiere de pronto adormecimiento alrededor de los labios y un sabor metálico intenso en la boca. Segundos después presenta fasciculaciones faciales.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Continuar el bloqueo, ya que la dosis calculada era segura' },
        { letter: 'B', text: 'Suspender la inyección de inmediato y prepararse para tratar la toxicidad sistémica' },
        { letter: 'C', text: 'Administrar un antihistamínico, pensando en una reacción alérgica' },
        { letter: 'D', text: 'Completar la dosis y observar en las próximas 2 horas' },
        { letter: 'E', text: 'Solicitar una tomografía computarizada de cerebro de urgencia' },
      ],
      correct: 'B',
      explanation: 'Sabor metálico, parestesias periorales y fasciculaciones son los pródromos clásicos de la toxicidad sistémica por anestésicos locales. Suspender la inyección de inmediato evita que progrese a convulsiones y colapso cardiovascular; esperar a completar la dosis es la conducta que más la agrava.',
      say: {
        stem: 'Vamos con un caso. Durante un bloqueo de nervio periférico con lidocaína para operar una mano, el paciente refiere de pronto adormecimiento alrededor de los labios y un sabor metálico intenso. Segundos después le aparecen fasciculaciones en la cara.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Tienes cinco opciones: continuar el bloqueo, suspender la inyección y prepararte para tratar la toxicidad, dar un antihistamínico, completar la dosis y observar, o pedir un TAC de cerebro. Piénsalo.',
        answer: 'Es la B. Ese sabor metálico y esas fasciculaciones son exactamente los pródromos que acabas de aprender: es toxicidad sistémica por anestésico local empezando. Suspender ya mismo puede evitar que llegue a la convulsión y al colapso cardiovascular. Pensar en alergia es la trampa: la alergia verdadera con una amida como la lidocaína es rarísima.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Durante un bloqueo peridural con bupivacaína para una cirugía ginecológica, la paciente refiere sabor metálico, mareos y tinnitus, y de inmediato presenta una convulsión tónico clónica generalizada, con colapso hemodinámico, bradicardia extrema y ensanchamiento del QRS.',
      question: '¿Cuál es el tratamiento farmacológico específico que debe iniciarse de urgencia?',
      options: [
        { letter: 'A', text: 'Infusión inmediata de emulsión lipídica al 20 %' },
        { letter: 'B', text: 'Bolo de 1 mg de adrenalina endovenosa directa' },
        { letter: 'C', text: 'Sulfato de magnesio en infusión rápida' },
        { letter: 'D', text: 'Flumazenil endovenoso en bolos seriados' },
        { letter: 'E', text: 'Amiodarona en bolo endovenoso' },
      ],
      correct: 'A',
      explanation: 'El cuadro es una toxicidad sistémica grave por bupivacaína, probablemente por inyección intravascular inadvertida. El tratamiento específico es la emulsión lipídica al 20 %, en bolo de 1,5 mL por kilo en un minuto, seguida de infusión continua, que secuestra el anestésico libre en el plasma.',
      say: {
        stem: 'Esta pregunta viene del banco de estudio del EUNACOM, sin fecha de examen real. Durante un bloqueo peridural con bupivacaína para una cirugía ginecológica, la paciente presenta sabor metálico, mareos, tinnitus, y de inmediato una convulsión con colapso, bradicardia extrema y el QRS ensanchado.',
        question: '¿Cuál es el tratamiento farmacológico específico que debe iniciarse de urgencia?',
        options: 'Las opciones: emulsión lipídica al veinte por ciento, un miligramo de adrenalina en bolo directo, sulfato de magnesio, flumazenil, o amiodarona. Piénsalo.',
        answer: 'Es la A. Es la misma secuencia que ya conoces, con bupivacaína, que es la más cardiotóxica de todas. El antídoto específico, sin discusión, es la emulsión lipídica al veinte por ciento. La adrenalina en dosis alta es la trampa: en esta toxicidad se usa en dosis mucho más bajas que la de un paro cardíaco habitual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 28 años fue sometida a una cesárea bajo anestesia raquídea, sin incidentes, hace 48 horas. Al levantarse de la cama presenta cefalea holocraneana severa y dolor cervical, que empeora drásticamente al ponerse de pie y desaparece por completo en decúbito supino. El examen neurológico es normal.',
      question: '¿Cuál es el diagnóstico y su mecanismo?',
      options: [
        { letter: 'A', text: 'Meningitis bacteriana por inoculación intratecal' },
        { letter: 'B', text: 'Cefalea postpunción dural, por fuga persistente de líquido cefalorraquídeo' },
        { letter: 'C', text: 'Trombosis de senos durales por estado protrombótico puerperal' },
        { letter: 'D', text: 'Hemorragia subaracnoidea por rotura de aneurisma' },
        { letter: 'E', text: 'Cefalea tensional por contractura cervical' },
      ],
      correct: 'B',
      explanation: 'El carácter estrictamente postural, con alivio completo en decúbito, es patognomónico de la cefalea postpunción dural: la fuga de líquido cefalorraquídeo por el orificio de la aguja espinal reduce la presión y produce tracción de estructuras sensibles al dolor.',
      say: {
        stem: 'Otra pregunta del banco de estudio, sin fecha de examen real. Mujer de veintiocho años, con una cesárea bajo anestesia raquídea hace cuarenta y ocho horas, sin problemas durante la técnica. Al levantarse presenta una cefalea intensa que empeora al pararse y desaparece por completo acostada. Su examen neurológico es normal.',
        question: '¿Cuál es el diagnóstico y su mecanismo?',
        options: 'Las opciones son: meningitis bacteriana, cefalea postpunción dural, trombosis de senos durales, hemorragia subaracnoidea, o cefalea tensional. Piénsalo.',
        answer: 'Es la B. Fíjate en el patrón: aparece de pie, y se va por completo acostada. Esa relación tan estricta con la postura es la firma de la cefalea postpunción dural, por la fuga de líquido cefalorraquídeo que dejó la aguja. Las otras opciones no tendrían ese alivio tan completo y tan inmediato con solo acostarse.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.001 · Anestesia local por infiltración",
      "stem": "Hombre de 60 kg con una herida cortante de 6 cm en el antebrazo, que requiere sutura. Se usará lidocaína al 1% sin epinefrina para anestesia local por infiltración. Recuerde que la solución al 1% contiene 10 mg por mL.",
      "question": "¿Cuál es el volumen máximo aproximado que se puede infiltrar?",
      "options": [
        {
          "letter": "A",
          "text": "5 mL"
        },
        {
          "letter": "B",
          "text": "10 mL"
        },
        {
          "letter": "C",
          "text": "100 mL"
        },
        {
          "letter": "D",
          "text": "60 mL"
        },
        {
          "letter": "E",
          "text": "27 mL"
        }
      ],
      "correct": "E",
      "explanation": "La dosis máxima de lidocaína sin epinefrina es de 4,5 mg/kg, con techo de 300 mg. En 60 kg son 270 mg, que al 1% equivalen a 27 mL. Al infiltrar se aspira antes de inyectar para evitar inyección intravascular, y se vigilan pródromos de toxicidad como sabor metálico o parestesias peribucales.",
      "say": {
        "stem": "Hombre de sesenta kilos con una herida de seis centímetros en el antebrazo que hay que suturar. Usarás lidocaína al uno por ciento sin epinefrina, y la solución al uno por ciento tiene diez miligramos en cada mililitro.",
        "question": "¿Cuál es el volumen máximo aproximado que puedes infiltrar?",
        "options": "Las opciones: cinco, diez, cien mililitros, sesenta o veintisiete. Piénsalo.",
        "answer": "Es la E. Sin epinefrina el máximo es cerca de cuatro coma cinco miligramos por kilo, o sea doscientos setenta miligramos, que al uno por ciento son veintisiete mililitros. El error tentador es la D: sumar volumen sin convertir a miligramos por kilo es justamente lo que lleva a la toxicidad."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.017 · Manejo del dolor",
      "stem": "Mujer de 55 años, en su primer día postoperatorio de una laparotomía por histerectomía, refiere dolor EVA 8/10 pese a paracetamol y ketorolaco endovenosos en horario. No tiene contraindicaciones ni alergias.",
      "question": "¿Cuál es la conducta analgésica más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener el mismo esquema y esperar que el dolor ceda"
        },
        {
          "letter": "B",
          "text": "Suspender todo y usar solo dipirona"
        },
        {
          "letter": "C",
          "text": "Agregar un segundo AINE"
        },
        {
          "letter": "D",
          "text": "Agregar un opioide, como morfina endovenosa titulada, manteniendo la analgesia multimodal"
        },
        {
          "letter": "E",
          "text": "Indicar diazepam para disminuir la ansiedad"
        }
      ],
      "correct": "D",
      "explanation": "El dolor postoperatorio severo que no cede con analgesia no opioide requiere agregar un opioide (por ejemplo, morfina endovenosa titulada o en bomba de analgesia controlada por el paciente), manteniendo paracetamol y AINE como base multimodal para reducir la dosis de opioide. Combinar dos AINE no mejora la analgesia y aumenta la toxicidad.",
      "say": {
        "stem": "Mujer de cincuenta y cinco años, al primer día de una histerectomía por laparotomía, con dolor de ocho sobre diez pese a paracetamol y ketorolaco endovenosos en horario.",
        "question": "¿Cuál es la conducta analgésica más adecuada?",
        "options": "Las opciones: mantener el esquema y esperar, dejar solo dipirona, agregar un segundo antiinflamatorio, agregar morfina endovenosa titulada manteniendo lo anterior o dar diazepam. Piénsalo.",
        "answer": "Es la D. Un dolor severo que no cede con analgésicos no opioides necesita un opioide, sumado a lo que ya recibe para usar menos morfina. Agregar otro antiinflamatorio tienta, pero dos juntos no calman más y sí aumentan el riesgo renal y de sangrado."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.002 · Anestesia troncular de dedos y ortejos",
      "stem": "Hombre de 30 años requiere sutura de una herida en el pulpejo del dedo índice. Se decide realizar una anestesia troncular digital con lidocaína.",
      "question": "¿Cuál es la técnica correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Infiltrar directamente en el pulpejo, alrededor de la herida"
        },
        {
          "letter": "B",
          "text": "Infiltrar solo en la cara dorsal de la falange distal"
        },
        {
          "letter": "C",
          "text": "Infiltrar en la muñeca a nivel del nervio radial exclusivamente"
        },
        {
          "letter": "D",
          "text": "Infiltrar en la base del dedo, en ambas caras laterales (dorsolateral y palmar-lateral), donde transcurren los nervios digitales"
        },
        {
          "letter": "E",
          "text": "Infiltrar en forma circular completa con gran volumen, como un anillo apretado"
        }
      ],
      "correct": "D",
      "explanation": "La anestesia troncular digital bloquea los 4 nervios colaterales (2 dorsales y 2 palmares), que corren por las caras laterales del dedo: se infiltra en la base del dedo, a ambos lados. Se usan volúmenes pequeños, porque los anillos de gran volumen comprimen las arterias digitales; tradicionalmente se recomienda lidocaína sin vasoconstrictor.",
      "say": {
        "stem": "Hombre de treinta años con una herida en el pulpejo del dedo índice, a quien se le hará una anestesia troncular digital con lidocaína.",
        "question": "¿Cuál es la técnica correcta?",
        "options": "Las opciones: infiltrar en el pulpejo alrededor de la herida, infiltrar solo el dorso de la falange distal, infiltrar el nervio radial en la muñeca, infiltrar en la base del dedo a ambos lados o un anillo completo de gran volumen. Piénsalo.",
        "answer": "Es la D. Los nervios digitales corren por los costados del dedo, así que se bloquean en la base, a ambos lados. Infiltrar el pulpejo tienta porque está junto a la herida, pero es muy doloroso y no anestesia bien un tejido tan denso."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Técnica', tag: 'Según el paciente', kind: 'key', items: [
          { t: 'Shock o cardiopatía grave', d: 'Etomidato en vez de propofol',
            say: 'Cerremos con las reglas de oro. Con shock o cardiopatía grave, etomidato en vez de propofol.' },
          { t: 'Cefalea al sentarse tras raquídea', d: 'Postpunción dural, reposo primero',
            say: 'Y una cefalea que empeora al sentarse, después de una raquídea, es postpunción dural, y parte con reposo.' },
        ] },
        { title: 'Toxicidad sistémica', tag: 'La secuencia que se pregunta', kind: 'alert', items: [
          { t: 'Sabor metálico y tinnitus', d: 'Suspender la inyección ya',
            say: 'Sabor metálico y tinnitus: suspende la inyección de inmediato, sin esperar a la convulsión.' },
          { t: 'Emulsión lipídica al veinte por ciento', d: 'El antídoto específico, sin discusión',
            say: 'Y el antídoto, sin discusión, es la emulsión lipídica al veinte por ciento. Si te llevas una sola idea de hoy: el sabor metálico no es un detalle raro que se cuenta en la historia, es la alarma que te dice que pares de inyectar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const lipidica = N('alert', 'Emulsión lipídica al veinte por ciento', 'Bolo de uno y medio por kilo, más infusión',
      'Suspendes el anestésico, das oxígeno al cien por ciento, tratas la convulsión con midazolam, y administras la emulsión lipídica de inmediato.');

    const colapso = N('alert', 'Convulsión o colapso cardiovascular', 'Bloqueos, arritmias, QRS ancho',
      'Si no suspendiste a tiempo, la toxicidad avanza a convulsión tónico clónica y después a depresión miocárdica grave.',
      ['¿Cómo tratas esto de urgencia?', lipidica]);

    const prodromo = N('q', '¿Sabor metálico, parestesias periorales o tinnitus?', 'El aviso más precoz',
      'Estos síntomas subjetivos aparecen antes que cualquier signo objetivo, y son tu única alarma temprana.',
      ['Si aparecen', N('alert', 'Suspender la inyección de inmediato', 'Antes de que avance a convulsión',
        'Detener la inyección en este momento puede evitar por completo la fase convulsiva y cardiovascular.',
        ['¿Igual progresa?', colapso])]);

    const cppd = N('refer', 'Cefalea postpunción dural', 'Empeora al sentarse, mejora acostado',
      'Si en vez de toxicidad tienes una cefalea postural después de una técnica neuroaxial, el mecanismo es otro: fuga de líquido cefalorraquídeo.',
      ['¿No cede con reposo y cafeína en dos o tres días?', N('do', 'Parche hemático epidural', 'Sangre propia que sella el orificio',
        'Se inyecta sangre autóloga en el espacio epidural, y sella el punto de fuga.')]);

    const root = N('start', 'Paciente recibiendo un anestésico local', 'Infiltración, bloqueo o técnica neuroaxial',
      'Con cualquier anestésico local en curso, tu primera tarea es vigilar los síntomas de alarma.',
      ['¿Aparecen los pródromos de toxicidad?', prodromo],
      ['¿O aparece una cefalea postural después de la técnica?', cppd]);

    return { title: 'Toxicidad por anestésicos locales: el sabor metálico manda a parar', root };
  })(),
};
