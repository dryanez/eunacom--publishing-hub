// Clase 18.08 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Aspiración de cuerpo extraño en vía aérea pediátrica, síndrome de penetración, maniobras de desobstrucción según edad, prohibición de Heimlich en lactantes y broncoscopía rígida',
      say: 'Bienvenidos a la clase sobre cuerpo extraño en la vía aérea pediátrica, una de las urgencias con mayor riesgo vital en la infancia temprana y un tema clásico de alta frecuencia en el examen EUNACOM. En esta sesión dominaremos el reconocimiento del síndrome de penetración, aprenderemos a diferenciar una obstrucción parcial de una total, fijaremos las maniobras según edad con la prohibición absoluta de Heimlich en menores de un año, y revisaremos las cuatro preguntas reales del banco histórico. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo asfíctico y bronquial',
      title: 'Aspiración Mecánica, Efecto Válvula y Atelectasia Pulmonar',
      nodes: [
        { id: 'asp', col: 0, row: 1, k: 'start', t: 'Aspiración o síndrome de penetración', s: 'Ingreso accidental de fruto seco, comida u objeto pequeño durante llanto o juego' },
        { id: 'loc', col: 1, row: 1, k: 'mech', t: 'Impactación en bronquio derecho', s: 'Alojamiento preferente en bronquio fuente derecho por anatomía más vertical y ancho' },
        { id: 'val', col: 2, row: 1, k: 'effect', t: 'Válvula espiratoria o stop total', s: 'Válvula genera atrapamiento aéreo; obstrucción completa produce atelectasia lobar' },
        { id: 'com', col: 3, row: 1, k: 'alert', t: 'Infección crónica y bronquiectasias', s: 'Cuerpo extraño inadvertido causa neumonía recurrente o daño bronquial irreversible' },
      ],
      edges: [
        { from: 'asp', to: 'loc', label: 'aspiración' },
        { from: 'loc', to: 'val', label: 'impactación' },
        { from: 'val', to: 'com', label: 'evolución tardía' },
      ],
      steps: [
        {
          show: ['asp', 'loc'],
          note: 'Aspiración súbita e impactación anatómica preferencial',
          say: 'La aspiración ocurre típicamente mientras el niño come frutos secos o manipula juguetes pequeños, desencadenando un violento acceso de tos protectora antes de impactarse en el bronquio fuente derecho, anatómicamente más ancho y vertical.',
        },
        {
          show: ['val', 'com'],
          note: 'Mecanismo valvular, atelectasia secundaria y secuelas crónicas',
          say: 'Si el objeto permite el paso de aire solo en inspiración, genera enfisema obstructivo con atrapamiento aéreo; si bloquea la luz por completo, el aire distal se reabsorbe produciendo una atelectasia lobar que puede infectarse con neumonía recurrente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y semiología inicial',
      title: 'Síndrome de Penetración y Fases Clínicas de la Aspiración',
      cards: [
        {
          title: 'El Síndrome de Penetración Cardinal',
          tag: 'Episodio asfíctico brusco mientras come o juega',
          kind: 'alert',
          items: [
            {
              t: 'Acceso súbito de tos paroxística, cianosis y sofocación',
              d: 'Inicio instantáneo y presenciado en un niño previamente sano que estaba comiendo o manipulando objetos',
              say: 'El síndrome de penetración es el dato anamnéstico clave: un episodio súbito de tos sofocante incoercible, náuseas, cianosis perioral y sensación de ahogo en un niño previamente asintomático.',
            },
            {
              t: 'Importancia del interrogatorio dirigido a cuidadores',
              d: 'La anamnesis dirigida rescata el antecedente de asfixia transitoria hasta en un 90% de los casos confirmados',
              say: 'Siempre se debe interrogar con insistencia si el niño tuvo un episodio de atoro reciente con alimentos duros como maní, nueces, uvas enteras o monedas, incluso si ocurrió días atrás.',
            },
          ],
        },
        {
          title: 'Fases Posteriores y Período Silente Engañoso',
          tag: 'La calma falsa que retrasa el diagnóstico',
          kind: 'key',
          items: [
            {
              t: 'Fase de latencia o período silente asintomático',
              d: 'Tras el acceso inicial, el objeto se fija en un bronquio y los reflejos tusígenos se adaptan transitoriamente',
              say: 'Una vez que el cuerpo extraño desciende y se enclava en un bronquio distal, la tos puede disminuir drásticamente, generando una falsa sensación de normalidad que retrasa la consulta médica.',
            },
            {
              t: 'Fase de complicaciones tardías inflamatorias',
              d: 'Reaparición de tos crónica, sibilancias unilaterales fijas, atelectasias o neumonías refractarias',
              say: 'Días o semanas después reaparece tos persistente con sibilancias rebeldes en un hemitórax o neumonías condensantes a repetición en el mismo lóbulo pulmonar que no responden a antibióticos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Anatomía topográfica',
      title: 'Topografía de la Vía Aérea: Laringe, Tráquea y Bronquio Derecho',
      cards: [
        {
          title: 'Cuerpo Extraño Laríngeo y Traqueal',
          tag: 'Obstrucción de vía aérea alta con riesgo vital inmediato',
          kind: 'alert',
          items: [
            {
              t: 'Impactación laríngea: Afonía y estridor súbito',
              d: 'Afonía completa o llanto inaudible, tos áfona, estridor inspiratorio y asfixia aguda severa',
              say: 'Si el objeto queda atascado en las cuerdas vocales o la glotis, el cuadro es dramático: afonía total, incapacidad para emitir sonidos, estridor inspiratorio rudo y cianosis asfíctica inmediata.',
            },
            {
              t: 'Cuerpo extraño móvil en la tráquea',
              d: 'Tos en salvas, estridor bifásico y choque palpable o audible del objeto contra las cuerdas vocales al toser',
              say: 'Si el cuerpo extraño permanece libre en la luz traqueal, se puede palpar o auscultar el clásico choque traqueal audible cada vez que la tos proyecta el objeto hacia la subglotis.',
            },
          ],
        },
        {
          title: 'Cuerpo Extraño Bronquial (Más Frecuente)',
          tag: 'Afectación hegemónica del bronquio principal derecho',
          kind: 'key',
          items: [
            {
              t: 'Predilección anatómica por el bronquio fuente derecho',
              d: 'En más del 60% de los casos se aloja en el bronquio derecho por ser más amplio, rectilíneo y de menor ángulo',
              say: 'En más de la mitad de las aspiraciones bronquiales el objeto se desvía hacia el bronquio principal derecho, cuya orientación es más vertical y continúa de manera más directa el trayecto de la tráquea.',
            },
            {
              t: 'Asimetría auscultatoria pulmonar cardinal',
              d: 'Disminución o abolición del murmullo pulmonar unilateral y sibilancias focales en el lado afectado',
              say: 'El hallazgo semiológico cardinal del cuerpo extraño bronquial es la asimetría auscultatoria: sibilancias localizadas y marcada disminución del murmullo pulmonar en el hemitórax comprometido.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Algoritmo de reanimación pediátrica',
      title: 'Obstrucción Parcial versus Obstrucción Total de la Vía Aérea',
      cards: [
        {
          title: 'Obstrucción Parcial con Tos Efectiva',
          tag: 'Regla de oro: NO intervenir físicamente',
          kind: 'key',
          items: [
            {
              t: 'Paciente consciente que tose con fuerza y respira',
              d: 'Emisión de sonidos, llanto audible, tos enérgica y adecuado intercambio gaseoso sin cianosis',
              say: 'Si el niño tose con fuerza, llora, puede hablar o respirar, estamos ante una obstrucción parcial donde el reflejo tusígeno propio es el mecanismo más potente y seguro para expulsar el cuerpo extraño.',
            },
            {
              t: 'Solo estimular y acompañar la tos espontánea',
              d: '¡No realizar golpes en la espalda ni compresiones abdominales! Puede convertirla en obstrucción total',
              say: 'En la obstrucción parcial está terminantemente prohibido golpear la espalda o comprimir el abdomen: únicamente se acompaña al niño, se estimula la tos continua y se traslada monitorizado.',
            },
          ],
        },
        {
          title: 'Obstrucción Total o con Tos Inefectiva',
          tag: 'Emergencia extrema: Actuar de inmediato',
          kind: 'alert',
          items: [
            {
              t: 'Tos débil o inaudible, afonía y signo universal de asfixia',
              d: 'Incapacidad para emitir sonidos, imposibilidad de toser, cianosis progresiva y manos al cuello',
              say: 'Si el niño no puede toser ni hablar, se lleva las manos al cuello en signo universal de asfixia o se torna cianótico, la obstrucción es completa y exige maniobras de desobstrucción inmediatas.',
            },
            {
              t: 'Diferenciación estricta de maniobras según la edad',
              d: 'Menores de 1 año: golpes dorsales y compresiones torácicas. Mayores de 1 año: compresiones de Heimlich',
              say: 'La técnica de desobstrucción depende de manera estricta de la edad del paciente, diferenciando radicalmente al lactante menor de un año del niño mayor de esa edad.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica en lactantes',
      title: 'Desobstrucción en Menores de un Año: Golpes y Compresiones',
      cards: [
        {
          title: 'Técnica Estandarizada: 5 Golpes y 5 Compresiones',
          tag: 'Lactante menor de doce meses consciente',
          kind: 'criteria',
          items: [
            {
              t: 'Cinco golpes interescapulares con talón de la mano',
              d: 'Lactante apoyado boca abajo sobre el antebrazo inclinado hacia abajo, sosteniendo la mandíbula con los dedos',
              say: 'En el menor de un año se coloca al lactante boca abajo sobre el antebrazo con la cabeza más baja que el tórax afirmando firmemente la mandíbula, y se aplican cinco golpes secos entre las escápulas.',
            },
            {
              t: 'Cinco compresiones torácicas en el tercio medio esternal',
              d: 'Se gira al lactante boca arriba sobre el otro antebrazo y se aplican 5 compresiones con dos dedos en el esternón',
              say: 'A continuación se gira al niño en bloque boca arriba sobre el otro brazo y se efectúan cinco compresiones en el centro del pecho con dos dedos, repitiendo este ciclo hasta expulsar el objeto.',
            },
          ],
        },
        {
          title: 'Prohibiciones Críticas en Lactantes Menores de 1 Año',
          tag: '¡Heimlich y barrido digital a ciegas prohibidos!',
          kind: 'alert',
          items: [
            {
              t: 'Maniobra de Heimlich estrictamente contraindicada',
              d: 'En menores de un año el hígado es voluminoso y desprotegido; las compresiones abdominales causan rotura hepática',
              say: 'La maniobra de Heimlich está formalmente contraindicada en menores de un año debido a que el hígado es prominente y vulnerable bajo el reborde costal, con riesgo inminente de estallido hepático fatal.',
            },
            {
              t: 'Nunca realizar barrido con el dedo a ciegas en la boca',
              d: 'El barrido a ciegas puede empujar el cuerpo extraño hacia la laringe convirtiendo una obstrucción parcial en total',
              say: 'Nunca se debe introducir el dedo a ciegas en la boca del niño: el barrido digital solo está autorizado si el objeto es claramente visible y accesible para retirarlo con pinza o dedo en gancho.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica en niños mayores',
      title: 'Maniobra de Heimlich en Mayores de un Año y Paro Respiratorio',
      cards: [
        {
          title: 'Maniobra de Heimlich en Niños Mayores de un Año',
          tag: 'Compresiones abdominales subdiafragmáticas rápidas',
          kind: 'criteria',
          items: [
            {
              t: 'Posicionamiento y aplicación de compresiones enérgicas',
              d: 'Rescatador situado detrás del niño, puño cerrado entre el ombligo y el xifoides, traccionando hacia adentro y arriba',
              say: 'En niños mayores de un año el rescatador se coloca por detrás a la altura del paciente, ubicando el puño en el epigastrio entre el ombligo y el apéndice xifoides, y realiza compresiones firmes hacia adentro y arriba.',
            },
            {
              t: 'Mecanismo de pistón diafragmático neumático',
              d: 'Eleva bruscamente el diafragma aumentando la presión intratorácica para simular un golpe de tos artificial',
              say: 'La compresión epigástrica empuja bruscamente el diafragma hacia arriba, generando un golpe de presión aérea en la vía respiratoria que expulsa el objeto como un proyectil fuera de la laringe.',
            },
          ],
        },
        {
          title: 'Manejo ante Pérdida de Conciencia',
          tag: 'Transición inmediata a Reanimación Cardiopulmonar',
          kind: 'alert',
          items: [
            {
              t: 'Iniciar inmediatamente Reanimación Cardiopulmonar (RCP)',
              d: 'Tender al paciente sobre superficie rígida, pedir ayuda al equipo y comenzar compresiones torácicas',
              say: 'Si el paciente pierde el conocimiento durante las maniobras, se debe tender con suavidad sobre una superficie plana firme y comenzar de inmediato la reanimación cardiopulmonar con compresiones torácicas.',
            },
            {
              t: 'Mirar la cavidad oral antes de cada ventilación de rescate',
              d: 'Al abrir la vía aérea para ventilar, observar si el objeto asoma en la boca; solo extraer si está visible',
              say: 'Cada vez que se abran las vías aéreas para dar ventilaciones se inspecciona rápidamente la boca, extrayendo el cuerpo extraño únicamente si es visible a simple vista sin hurgar a ciegas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Imágenes diagnósticas',
      title: 'Hallazgos Radiológicos: Atelectasia y Atrapamiento Aéreo',
      cards: [
        {
          title: 'Manifestaciones en Radiografía de Tórax',
          tag: 'Signos indirectos de obstrucción bronquial',
          kind: 'key',
          items: [
            {
              t: 'La mayoría de los cuerpos extraños son radiolúcidos',
              d: 'Semillas, maní y trozos de plástico no se ven en la radiografía; el diagnóstico se basa en signos indirectos',
              say: 'Es crucial recordar que la inmensa mayoría de los cuerpos extraños aspirados como frutos secos o juguetes plásticos son radiolúcidos y no aparecen de forma directa en la placa simple.',
            },
            {
              t: 'Atelectasia lobar por reabsorción completa de aire',
              d: 'Opacidad densa con retracción de cisuras, elevación diafragmática ipsilateral y desviación mediastínica',
              say: 'Si la obstrucción del bronquio es completa, el parénquima distal colapsa originando una atelectasia lobar visible como una opacidad que tracciona cisuras, diafragma y mediastino hacia el lado enfermo.',
            },
          ],
        },
        {
          title: 'Atrapamiento Aéreo y Radiografía en Espiración',
          tag: 'Enfisema obstructivo con desplazamiento mediastínico contralateral',
          kind: 'criteria',
          items: [
            {
              t: 'Hiperinsuflación unilateral por mecanismo valvular',
              d: 'El pulmón afectado se aprecia hiperclaro, con costillas separadas y aplanamiento de la cúpula diafragmática',
              say: 'Si el objeto genera un mecanismo valvular, el aire atrapado insufla el pulmón hiperclaro empujando las estructuras mediastínicas hacia el lado sano contralateral durante la espiración forzada.',
            },
            {
              t: 'Una radiografía de tórax normal NO descarta la aspiración',
              d: 'Hasta en un 20% a 30% de los casos confirmados la placa inicial es completamente normal; la clínica manda',
              say: 'Regla de oro de EUNACOM: una radiografía de tórax normal jamás descarta la aspiración de un cuerpo extraño. Si la sospecha clínica o el antecedente asfíctico es categórico, la broncoscopía es obligatoria.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo de rescate',
      title: 'Diferencias en el Manejo de la Asfixia según Grupo Etario',
      head: ['Parámetro Clínico', 'Lactante Menor de un Año', 'Niño Mayor de un Año y Adulto'],
      rows: [
        {
          cells: ['Posición del Paciente', 'Boca abajo sobre antebrazo con cabeza declive', 'De pie o sentado con leve inclinación anterior'],
          say: 'En el lactante menor de un año se ubica boca abajo sobre el antebrazo con la cabeza declive, mientras que en el niño mayor se sostiene de pie o sentado inclinado.',
        },
        {
          cells: ['Maniobra Inicial', 'Cinco golpes interescapulares con talón de la mano', 'Cinco compresiones abdominales con puño en epigastrio'],
          say: 'El menor de un año recibe cinco golpes en la espalda seguidos de cinco compresiones torácicas, mientras que el mayor recibe compresiones de Heimlich.',
        },
        {
          cells: ['Maniobra de Heimlich', '¡Estrictamente contraindicada por rotura hepática!', 'Maniobra de elección estándar recomendada'],
          say: 'La maniobra de Heimlich está estrictamente contraindicada en menores de un año por riesgo de estallido hepático, siendo la técnica de elección en el niño mayor.',
        },
        {
          cells: ['Pérdida de Conciencia', 'Iniciar RCP pediátrica con compresiones torácicas', 'Iniciar RCP clásica mirando la boca antes de ventilar'],
          say: 'Si el paciente pierde el conocimiento se inicia de inmediato reanimación cardiopulmonar en ambas edades, extrayendo el objeto solo si es visible en la boca.',
        },
        {
          cells: ['Barrido Digital a Ciegas', '¡Terminantemente prohibido en todas las edades!', '¡Terminantemente prohibido en todas las edades!'],
          say: 'El barrido con el dedo a ciegas en la cavidad oral está terminantemente prohibido en todas las edades pediátricas porque puede empujar el objeto hacia la vía aérea.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento definitivo',
      title: 'Broncoscopía Rígida: El Estándar de Oro Diagnóstico y Terapéutico',
      cards: [
        {
          title: 'Broncoscopía Rígida en Pabellón Quirúrgico',
          tag: 'Procedimiento de elección para la extracción segura',
          kind: 'key',
          items: [
            {
              t: 'Ventilación continua y control directo de la vía aérea',
              d: 'Tubo metálico rígido con canal amplio que permite ventilar al paciente mientras se introduce la pinza óptica',
              say: 'La broncoscopía rígida bajo anestesia general es el estándar de oro en pediatría, ya que asegura la ventilación mecánica continua del paciente y cuenta con un canal amplio para manipular pinzas de extracción.',
            },
            {
              t: 'Manejo de cuerpos extraños friables y vegetales',
              d: 'Permite retirar trozos de maní o semillas fragmentadas y aspirar secreciones purulentas distales',
              say: 'El instrumental rígido permite fragmentar o sujetar firmemente cuerpos extraños vegetales friables como granos de maní, aspirando además detritus inflamatorios y pus retenido.',
            },
          ],
        },
        {
          title: 'Rol de la Broncoscopía Flexible (Fibrobroncoscopía)',
          tag: 'Estudio diagnóstico en casos dudosos o periféricos',
          kind: 'criteria',
          items: [
            {
              t: 'Exploración de bronquios segmentarios distales',
              d: 'Excelente instrumento diagnóstico para visualizar la anatomía en lactantes sin requerir quirófano rígido',
              say: 'La fibrobroncoscopía flexible es muy valiosa para inspeccionar bronquios segmentarios distales ante sospecha dudosa, pero resulta insuficiente para sujetar y extraer objetos voluminosos.',
            },
            {
              t: 'Tomografía computarizada no sustituye la endoscopía',
              d: 'La tomografía de tórax no aporta información decisiva y retrasa la desobstrucción endoscópica obligatoria',
              say: 'No se debe solicitar tomografía de tórax ante un cuadro clínico categórico de aspiración: la realización de la broncoscopía es diagnóstica y terapéutica a la vez y no debe postergarse.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de emergencia',
      title: 'Algoritmo de Enfrentamiento de Cuerpo Extraño en Vía Aérea',
      say: 'Examinemos el algoritmo paso a paso para el manejo de la obstrucción de vía aérea por cuerpo extraño en pediatría según la efectividad de la tos y la edad.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2013 · Pregunta 35',
      title: 'Manejo Asfíctico en Lactante Menor de un Año',
      stem: 'Un lactante de 10 meses de edad, sin antecedentes, mientras come su almuerzo comienza súbitamente con tos asociado a disminución del esfuerzo respiratorio e hipotonía.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Iniciar reanimación cardiopulmonar con compresiones torácicas' },
        { letter: 'B', text: 'Exploración digital a ciegas de su cavidad oral' },
        { letter: 'C', text: 'Iniciar presión digital en epigastrio mediante maniobra de Heimlich' },
        { letter: 'D', text: 'Dar golpes en la espalda' },
        { letter: 'E', text: 'Iniciar ventilaciones boca a boca inmediatas' },
      ],
      correct: 'D',
      explanation: 'En un lactante menor de 1 año (10 meses de edad) que sufre una obstrucción aguda severa de la vía aérea durante la alimentación con tos inefectiva y pérdida del esfuerzo respiratorio, la conducta inmediata normada por la AHA y el MINSAL es posicionar al lactante boca abajo sobre el antebrazo y administrar 5 golpes secos en la espalda (región interescapular), seguidos de 5 compresiones torácicas. La maniobra de Heimlich está formalmente contraindicada en menores de un año por riesgo de laceración hepática, y la exploración digital a ciegas está terminantemente prohibida porque puede empujar el cuerpo extraño hacia la laringe.',
      say: {
        stem: 'Lactante de diez meses que mientras come su almuerzo comienza súbitamente con tos disminución del esfuerzo respiratorio e hipotonía.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'La opción A iniciar reanimación cardiopulmonar. La B exploración digital a ciegas en la cavidad oral. La C maniobra de Heimlich con presión en epigastrio. La D dar golpes en la espalda. La E ventilaciones boca a boca. Recuerda la edad del paciente. Piénsalo.',
        answer: 'La respuesta correcta es la D. En menores de un año la maniobra inicial consiste en dar cinco golpes en la espalda seguidos de cinco compresiones torácicas, estando prohibido Heimlich.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2016 · Pregunta 127',
      title: 'Cuadro Clínico Clásico de Aspiración Bronquial',
      stem: 'Un lactante de 1 año de edad presenta un ataque súbito de tos, sofocamiento y dificultad respiratoria. Al examen presenta sibilancias y disminución del murmullo pulmonar, con frecuencia respiratoria de 34 por minuto.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neumotórax espontáneo' },
        { letter: 'B', text: 'Laringitis aguda' },
        { letter: 'C', text: 'Bronquitis obstructiva aguda' },
        { letter: 'D', text: 'Cuerpo extraño bronquial' },
        { letter: 'E', text: 'Angioedema laríngeo' },
      ],
      correct: 'D',
      explanation: 'El debut brusco con síndrome de penetración (ataque súbito de tos y sofocación) seguido de dificultad respiratoria y asimetría auscultatoria caracterizada por sibilancias y disminución unilateral del murmullo pulmonar en un niño de 1 año es el cuadro clínico clásico e inconfundible de aspiración de un cuerpo extraño bronquial. La bronquitis obstructiva no suele debutar en forma súbita ni con asimetría focal tan marcada, la laringitis produce estridor inspiratorio y disfonía, y el neumotórax espontáneo es muy raro a esta edad sin antecedente traumático o ventilatorio previo.',
      say: {
        stem: 'Lactante de un año con ataque súbito de tos sofocamiento y dificultad respiratoria constatándose sibilancias y disminución del murmullo pulmonar.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A neumotórax espontáneo. La B laringitis aguda. La C bronquitis obstructiva. La D cuerpo extraño bronquial. La E angioedema laríngeo. Analiza el inicio brusco y la asimetría. Piénsalo.',
        answer: 'La respuesta correcta es la D. El síndrome de penetración brusco con asimetría auscultatoria en un niño de un año es la presentación típica de cuerpo extraño bronquial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Agosto 2021 · Pregunta 85',
      title: 'Conducta Médica ante Sospecha de Cuerpo Extraño',
      stem: 'Una niña de dos años presenta un episodio brusco de tos intensa, asociado a cianosis y disnea, que remite luego de pocos minutos. Persiste luego con tos en salvas y expectoración. Al examen pulmonar se auscultan roncus y sibilancias, mayores en el lado derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar reacción de polimerasa en cadena para Bordetella pertussis' },
        { letter: 'B', text: 'Solicitar tomografía axial computarizada de tórax' },
        { letter: 'C', text: 'Solicitar broncoscopía' },
        { letter: 'D', text: 'Realizar laringoscopía rígida de urgencia' },
        { letter: 'E', text: 'Iniciar antibióticos orales' },
      ],
      correct: 'C',
      explanation: 'La historia de episodio asfíctico brusco presenciado (síndrome de penetración) asociado a cianosis y disnea transitoria, seguido de tos persistente y signos obstructivos asimétricos predominantes en el hemitórax derecho, configura una sospecha clínica categórica de cuerpo extraño bronquial en el bronquio principal derecho. La conducta indicada es realizar una broncoscopía (flexible o rígida según disponibilidad y centro), la cual es diagnóstica y terapéutica para la extracción del objeto. La tomografía de tórax no aporta mayor información y posterga el tratamiento definitivo.',
      say: {
        stem: 'Niña de dos años con episodio brusco de tos intensa cianosis y disnea que remite persistiendo con tos en salvas y sibilancias mayores en lado derecho.',
        question: '¿Cuál es la conducta médica más adecuada?',
        options: 'La opción A reacción en cadena para coqueluche. La B tomografía de tórax. La C solicitar broncoscopía. La D laringoscopía rígida. La E antibióticos orales. Elige la conducta diagnóstica y terapéutica. Piénsalo.',
        answer: 'La respuesta correcta es la C. Ante un síndrome de penetración categórico con sibilancias asimétricas la indicación definitiva e impostergable es la broncoscopía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2025 · Pregunta 64',
      title: 'Cuerpo Extraño Bronquial Complicado con Atelectasia',
      stem: 'Una niña de 3 años presenta tos persistente desde hace 7 días, inicialmente seca pero que se volvió productiva, por lo que recibió amoxicilina sin respuesta. Sus signos muestran SatO2 97% y FR 25 rpm. Al examen físico se constatan sibilancias en el lado derecho y estridor respiratorio. La radiografía de tórax muestra atelectasia del lóbulo medio.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Laringitis viral aguda' },
        { letter: 'B', text: 'Bronquiolitis aguda' },
        { letter: 'C', text: 'Neumonía atípica' },
        { letter: 'D', text: 'Cuerpo extraño bronquial' },
        { letter: 'E', text: 'Traqueítis bacteriana' },
      ],
      correct: 'D',
      explanation: 'La presencia de tos subaguda refractaria a tratamiento antibiótico empírico, acompañada de sibilancias focales en el lado derecho y confirmación radiológica de una atelectasia lobar (lóbulo medio), en una niña de 3 años, orienta fuertemente a un cuerpo extraño bronquial retenido que actúa como tapón obstructivo completo del bronquio lobar medio derecho. La laringitis y la traqueítis son patologías altas difusas febriles, y la bronquiolitis afecta a lactantes menores de dos años con sibilancias bilaterales difusas.',
      say: {
        stem: 'Niña de tres años con tos de siete días rebelde a amoxicilina sibilancias unilaterales derechas y radiografía que demuestra atelectasia del lóbulo medio.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A laringitis viral. La B bronquiolitis aguda. La C neumonía atípica. La D cuerpo extraño bronquial. La E traqueítis bacteriana. Identifica la causa de la atelectasia unilateral. Piénsalo.',
        answer: 'La respuesta correcta es la D. La tos refractaria con sibilancias unilaterales y atelectasia lobar en un niño de tres años es la forma clásica de cuerpo extraño bronquial inadvertido.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Cuerpo Extraño en la Vía Aérea',
      cards: [
        {
          title: 'Algoritmo de Desobstrucción Vital',
          tag: 'Diferenciación estricta por edad y tipo de tos',
          kind: 'criteria',
          items: [
            {
              t: 'Tos efectiva: Solo estimular y observar',
              d: 'Si el niño tose con fuerza y respira, jamás golpear la espalda ni comprimir el abdomen',
              say: 'Si el niño tose de manera efectiva jamás intervengan: estimulen la tos espontánea sin aplicar maniobras físicas que puedan desviar el objeto y empeorar la obstrucción.',
            },
            {
              t: 'Menor de 1 año: 5 golpes y 5 compresiones (¡Cero Heimlich!)',
              d: 'Golpes interescapulares declives y compresiones en el pecho; Heimlich estrictamente prohibido por rotura hepática',
              say: 'En menores de un año se aplican cinco golpes en la espalda y cinco compresiones torácicas. Jamás realicen maniobra de Heimlich bajo los doce meses por riesgo de estallido hepático.',
            },
          ],
        },
        {
          title: 'Clínica y Diagnóstico de Elección',
          tag: 'Heimlich en mayores y broncoscopía rígida',
          kind: 'key',
          items: [
            {
              t: 'Mayor de un año: Maniobra de Heimlich subdiafragmática',
              d: 'Compresiones epigástricas hacia adentro y arriba; si cae inconsciente iniciar RCP y mirar boca',
              say: 'Desde el año de vida cumplido la maniobra de elección es Heimlich; si el paciente pierde la conciencia se inicia reanimación cardiopulmonar mirando la boca antes de ventilar.',
            },
            {
              t: 'Broncoscopía rígida es el estándar definitivo',
              d: 'Diagnóstica y terapéutica; no suspender por radiografía normal si la sospecha clínica es categórica',
              say: 'La broncoscopía rígida es el estándar de oro diagnóstico y terapéutico. Si te llevas una sola idea de hoy: ante una asfixia presenciada o síndrome de penetración, la sospecha manda y se realiza broncoscopía aunque la radiografía sea normal. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Cuerpo Extraño en Vía Aérea Pediátrica',
    root: N(
      'start',
      'Paciente Pediátrico con Síndrome de Penetración o Sospecha de Aspiración de Cuerpo Extraño',
      'Evaluación inmediata de la eficacia de la tos, nivel de conciencia, permeabilidad de la vía aérea e intercambio gaseoso',
      'Iniciamos la evaluación diferenciando si el paciente presenta una obstrucción parcial con tos efectiva o una obstrucción total asfíctica.',
      [
        'Obstrucción parcial: Niño consciente, tose con fuerza, llora o habla y mantiene intercambio gaseoso',
        N(
          'ok',
          'Estimular la Tos y Observación Estricta',
          'NO realizar maniobras de desobstrucción ni golpes · Mantener en posición cómoda, estimular la tos y trasladar a Urgencia',
          'Si la tos es efectiva no se realizan maniobras físicas: se estimula la tos continua y se traslada monitorizado a un centro asistencial.',
        ),
      ],
      [
        'Obstrucción total: Tos débil o inaudible, imposibilidad para hablar, cianosis progresiva o asfixia',
        N(
          'q',
          '¿Cuál es la edad del paciente para seleccionar la maniobra de desobstrucción?',
          'Selección estricta de la técnica de rescate según grupo etario pediátrico',
          'Ante una obstrucción total evaluamos la edad del paciente para aplicar la maniobra de desobstrucción correspondiente.',
          [
            'Lactante menor de un año (cero a once meses cumplidos)',
            N(
              'do',
              'Ciclos de 5 Golpes Dorsales y 5 Compresiones Torácicas',
              'Lactante sobre antebrazo declive: 5 golpes interescapulares con talón seguidos de 5 compresiones torácicas con 2 dedos · ¡Prohibido Heimlich!',
              'En el menor de un año aplicamos ciclos continuos de cinco golpes en la espalda y cinco compresiones en el tórax.',
              [
                'El lactante expulsa el objeto y recupera la ventilación espontánea',
                N(
                  'ok',
                  'Desobstrucción Exitosa y Evaluación Médica',
                  'Posición de seguridad · Oxígeno si persiste taquipnea · Traslado a centro médico para examen físico y laringoscopía',
                  'Al expulsar el objeto se coloca en posición de seguridad y se traslada a urgencia para descartar lesiones mucosas.',
                ),
              ],
              [
                'El lactante pierde el conocimiento durante las maniobras',
                N(
                  'alert',
                  'Inicio Inmediato de Reanimación Cardiopulmonar (RCP)',
                  'Lactante sobre superficie firme · Iniciar RCP 30:2 (15:2 si 2 rescatadores) · Mirar cavidad oral antes de cada ventilación',
                  'Si pierde la conciencia se tiende boca arriba e iniciamos reanimación cardiopulmonar mirando la boca antes de ventilar.',
                ),
              ],
            ),
          ],
          [
            'Niño mayor de un año y preescolar o escolar',
            N(
              'do',
              'Maniobra de Heimlich (Compresiones Abdominales Subdiafragmáticas)',
              'Rescatador detrás del niño: puño cerrado entre ombligo y xifoides con compresiones firmes hacia adentro y arriba de forma seriada',
              'En mayores de un año realizamos compresiones de Heimlich hacia adentro y arriba hasta expulsar el objeto o perder el conocimiento.',
              [
                'El niño expulsa el cuerpo extraño y respira normalmente',
                N(
                  'ok',
                  'Desobstrucción Exitosa y Control Médico',
                  'Mantener en reposo semisentado · Traslado a Urgencia para descartar complicaciones o lesiones gástricas por compresión',
                  'Tras la expulsión exitosa se mantiene en reposo y se traslada a evaluación médica preventiva en un centro de urgencia.',
                ),
              ],
              [
                'El niño cae inconsciente',
                N(
                  'alert',
                  'Inicio Inmediato de RCP Pediátrica',
                  'Tender en el suelo sobre superficie plana · Activar sistema de emergencia e iniciar compresiones torácicas continuas',
                  'Si el niño mayor cae inconsciente iniciamos reanimación cardiopulmonar convencional retirando el objeto si asoma en la boca.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Cuerpo extraño bronquial diagnosticado (asimetría auscultatoria, atelectasia o tos subaguda)',
        N(
          'refer',
          'Broncoscopía Rígida en Pabellón Quirúrgico',
          'Régimen cero · Oxigenoterapia · Traslado urgente a centro quirúrgico pediátrico para extracción endoscópica bajo anestesia general',
          'En el cuerpo extraño bronquial el paciente se mantiene en ayuno y se traslada a pabellón para broncoscopía rígida de rescate.',
        ),
      ],
    ),
  },
};
