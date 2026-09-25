// Clase 18.02 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hitos madurativos cardinales, baterías EEDP y TEPSI, estratificación de riesgo según Chile Crece Contigo y banderas rojas de derivación neurológica',
      say: 'Bienvenidos a la clase sobre desarrollo psicomotor infantil, un eje fundamental de la atención primaria y una temática ampliamente evaluada en el examen EUNACOM. En esta sesión revisaremos los hitos madurativos cardinales por trimestres, analizaremos en detalle las dos baterías de tamizaje nacionales aplicadas en el control sano, aprenderemos a clasificar los puntajes de corte y fijaremos las banderas rojas que obligan a una derivación neurológica inmediata. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Leyes del neurodesarrollo',
      title: 'Principios Biológicos y Secuencia del Neurodesarrollo Infantil',
      nodes: [
        { id: 'cef', col: 0, row: 1, k: 'start', t: 'Dirección céfalo-caudal', s: 'Control del cuello precede al tronco y este al dominio de las extremidades inferiores' },
        { id: 'pro', col: 1, row: 1, k: 'mech', t: 'Dirección próximo-distal', s: 'Dominio de hombros y brazos precede a la prensión fina de dedos y pinza' },
        { id: 'ref', col: 2, row: 1, k: 'effect', t: 'Integración refleja', s: 'Desaparición paulatina de reflejos arcaicos para permitir movimientos voluntarios' },
        { id: 'aut', col: 3, row: 1, k: 'good', t: 'Autonomía y lenguaje', s: 'Marcha independiente, comunicación verbal con sentido y juego social adaptativo' },
      ],
      edges: [
        { from: 'cef', to: 'pro', label: 'maduración axial' },
        { from: 'pro', to: 'ref', label: 'inhibición cortical' },
        { from: 'ref', to: 'aut', label: 'integración motriz' },
      ],
      steps: [
        {
          show: ['cef', 'pro'],
          note: 'Gradiente de maduración del sistema nervioso central',
          say: 'El desarrollo psicomotor sigue leyes biológicas estrictas. La maduración mielínica avanza en dirección céfalo caudal, donde el control de la cabeza antecede a la postura sentada y la bipedestación, y en sentido próximo distal, donde la musculatura proximal se coordina antes que la pinza fina distal.',
        },
        {
          show: ['ref', 'aut'],
          note: 'Extinción de automatismos primitivos y adquisición de autonomía',
          say: 'Para que emerja la motricidad voluntaria y la marcha independiente es imprescindible que los reflejos arcaicos se integren y desaparezcan antes de los seis meses. Su persistencia anormal traduce daño de la motoneurona superior o retraso en la maduración cortical.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer semestre',
      title: 'Hitos Madurativos del Primer Semestre: De 3 a 6 Meses de Vida',
      cards: [
        {
          title: 'Hito de los Tres Meses de Vida',
          tag: 'Sostén cefálico y sonrisa social',
          kind: 'key',
          items: [
            {
              t: 'Sostén cefálico firme y alineación axial',
              d: 'Control antigravitatorio de cabeza y cuello al traccionar desde decúbito supino',
              say: 'A los tres meses de vida el lactante debe lograr sostén cefálico firme sin oscilaciones al llevarlo a posición sentada, manteniendo manos entreabiertas y siguiendo objetos en ciento ochenta grados.',
            },
            {
              t: 'Sonrisa social responsiva y gorjeo',
              d: 'Interacción visual directa con cuidadores y emisión de vocalizaciones guturales (agú)',
              say: 'En el área socio comunicativa aparece la sonrisa social responsiva ante el rostro humano y los primeros gorjeos o vocalizaciones guturales, marcando el inicio del diálogo afectivo temprano.',
            },
          ],
        },
        {
          title: 'Hito de los Seis Meses de Vida',
          tag: 'Sedestación en trípode y transferencia',
          kind: 'criteria',
          items: [
            {
              t: 'Sedestación asistida con apoyo anterior en trípode',
              d: 'Se apoya con ambas manos hacia adelante para mantener el equilibrio del tronco',
              say: 'A los seis meses el lactante es capaz de mantenerse sentado con apoyo anterior en trípode apoyando sus manos sobre la colchoneta, y logra girar activamente su cuerpo de prono a supino.',
            },
            {
              t: 'Transferencia bimanual y balbuceo consonántico',
              d: 'Pasa objetos de una mano a otra con prensión palmar y emite sílabas como ma o da',
              say: 'En la coordinación motriz destaca la capacidad de transferir un juguete de una mano a la otra, mientras que en el lenguaje debuta el balbuceo imitativo con sílabas simples.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Segundo semestre',
      title: 'Hitos Madurativos del Segundo Semestre: De 8 a 12 Meses de Vida',
      cards: [
        {
          title: 'Hito de los Ocho a Nueve Meses',
          tag: 'Sedestación independiente y angustia',
          kind: 'key',
          items: [
            {
              t: 'Sedestación independiente sin ningún apoyo',
              d: 'Mantiene el equilibrio sentado con manos libres para manipular juguetes simultáneamente',
              say: 'A los ocho meses cumplidos el niño logra sentarse solo sin ningún apoyo y con las manos totalmente libres para jugar, un hito fundamental para iniciar la alimentación complementaria.',
            },
            {
              t: 'Angustia ante extraños y balbuceo duplicado',
              d: 'Diferencia a sus figuras de apego y emite cadenas silábicas dobles como mamá o papá',
              say: 'Surge la angustia de separación o miedo ante extraños, evidenciando un apego selectivo normal, mientras que el balbuceo se enriquece con cadenas silábicas dobles inespecíficas.',
            },
          ],
        },
        {
          title: 'Hito de los Doce Meses (Primer Año)',
          tag: 'Pinza madura, señalamiento y marcha incipiente',
          kind: 'alert',
          items: [
            {
              t: 'Pinza fina índice-pulgar madura',
              d: 'Oposición precisa entre la yema del pulgar y el índice para tomar objetos diminutos',
              say: 'Al año de vida se consolida la pinza fina madura entre el pulgar y el índice, permitiendo recoger migas u objetos pequeños sin arrastrar la mano en prensión palmar.',
            },
            {
              t: 'Primeras palabras con significado y protoimperativo',
              d: 'Dice una o dos palabras con sentido comunicativo real y señala con el dedo para pedir',
              say: 'Emite sus primeras palabras intencionadas dirigidas a sus padres y utiliza el dedo índice para señalar objetos deseados, lo que se denomina gesto protoimperativo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Segundo año',
      title: 'Hitos Madurativos del Segundo Año: De 18 a 24 Meses de Vida',
      cards: [
        {
          title: 'Hito de los Dieciocho Meses (Año y Medio)',
          tag: 'Marcha autónoma y juego simbólico',
          kind: 'alert',
          items: [
            {
              t: 'Marcha autónoma independiente fluida',
              d: 'Camina solo sin apoyo, sube escalones tomado de la mano y se agacha para recoger objetos',
              say: 'A los dieciocho meses el niño camina de forma totalmente autónoma y fluida, sube peldaños tomado de una mano, utiliza la cuchara para comer y apila tres cubos en torre.',
            },
            {
              t: 'Vocabulario expresivo de diez a veinte palabras',
              d: 'Comprende órdenes simples, reconoce partes del cuerpo y utiliza juego funcional básico',
              say: 'Maneja un repertorio de diez a veinte palabras con sentido claro, comprende instrucciones de un paso y reconoce partes de su cuerpo cuando se le solicita.',
            },
          ],
        },
        {
          title: 'Hito de los Veinticuatro Meses (Dos Años)',
          tag: 'Carrera, frases de dos palabras y control diurno',
          kind: 'key',
          items: [
            {
              t: 'Frases de dos palabras con intención comunicativa',
              d: 'Conecta sustantivo y verbo para formular oraciones sencillas como quiero pan o vamos auto',
              say: 'A los dos años cumplidos el hito lingüístico crucial es la combinación de dos palabras distintas para formar frases sencillas con sujeto y predicado como quiero agua o mamá ven.',
            },
            {
              t: 'Control motor avanzado y juego cooperativo',
              d: 'Corre ágilmente, patea una pelota sin caerse, torre de 6 cubos y control de esfínter diurno',
              say: 'En el plano motor corre con destreza, patea una pelota, apila seis cubos e inicia las primeras pautas de control voluntario de esfínteres diurnos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Escala de lactantes',
      title: 'Batería EEDP: Evaluación del Desarrollo de 0 a 24 Meses',
      cards: [
        {
          title: 'Estructura y Áreas Evaluadas en la EEDP',
          tag: 'Cuatro dimensiones del desarrollo infantil',
          kind: 'key',
          items: [
            {
              t: 'Áreas Motora, Coordinación, Lenguaje y Social',
              d: 'Setenta y cinco reactivos estandarizados que miden habilidades reflejas y voluntarias en lactantes',
              say: 'La escala de evaluación del desarrollo psicomotor examina de manera objetiva cuatro áreas: motora, coordinación visomotriz, lenguaje comprensivo expresivo y comportamiento social adaptativo.',
            },
            {
              t: 'Edades de aplicación obligatoria por norma técnica',
              d: 'Aplicación universal estandarizada a los 8 meses y a los 18 meses de vida en el control infantil',
              say: 'Por directriz obligatoria del Ministerio de Salud dentro del programa Chile Crece Contigo, esta batería debe aplicarse a todos los lactantes a los ocho y a los dieciocho meses de vida.',
            },
          ],
        },
        {
          title: 'Cálculo del Coeficiente de Desarrollo (CD)',
          tag: 'Puntaje estandarizado por edad cronológica',
          kind: 'criteria',
          items: [
            {
              t: 'Mes base, puntaje adicional y edad mental',
              d: 'Se calcula la edad mental a partir de los ítems aprobados y se relaciona con la edad cronológica',
              say: 'La prueba determina la edad mental del lactante mediante la suma de reactivos aprobados sobre el mes base, calculando el coeficiente de desarrollo estandarizado por tablas de conversión nacional.',
            },
            {
              t: 'Ajuste estricto en niños prematuros',
              d: 'Hasta los dos años de vida la evaluación del desarrollo debe ajustarse por edad gestacional corregida',
              say: 'En niños con antecedente de prematurez la aplicación de la batería debe corregirse por edad gestacional restando las semanas que faltaron para el término hasta cumplir los dos años.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Test preescolar',
      title: 'Batería TEPSI: Tamizaje en Preescolares de 2 a 5 Años',
      cards: [
        {
          title: 'Estructura y Áreas Evaluadas en el TEPSI',
          tag: 'Coordinación, Lenguaje y Motricidad',
          kind: 'key',
          items: [
            {
              t: 'Cincuenta y dos reactivos en tres subtests',
              d: 'Subtest de Coordinación (16 ítems), Subtest de Lenguaje (24 ítems) y Subtest de Motricidad (12 ítems)',
              say: 'El test de desarrollo psicomotor preescolar evalúa a niños entre dos y cinco años a través de cincuenta y dos ítems distribuidos en coordinación motriz fina, lenguaje verbal y motricidad gruesa.',
            },
            {
              t: 'Aplicación universal a los tres años cumplidos',
              d: 'Hito estatutario de tamizaje masivo a los 36 meses de edad en la red de atención primaria',
              say: 'En todos los centros de salud familiar del país el test preescolar tiene su aplicación obligatoria protocolizada a los tres años cumplidos, equivalentes a treinta y seis meses.',
            },
          ],
        },
        {
          title: 'Puntaje T y Coeficiente Estandarizado',
          tag: 'Conversión psicométrica nacional',
          kind: 'criteria',
          items: [
            {
              t: 'Escala psicométrica con media cincuenta y desvío diez',
              d: 'El puntaje bruto se transforma en Puntaje T según grupos de edad de seis meses',
              say: 'El puntaje bruto se convierte mediante tablas normadas en un Puntaje T estandarizado, permitiendo comparar el desempeño del preescolar respecto a su grupo de pares en Chile.',
            },
            {
              t: 'Pesquisa oportuna antes del ingreso escolar',
              d: 'Detecta rezagos en motricidad fina y lenguaje previo a la transición a la educación parvularia',
              say: 'Su objetivo sanitario es pesquisar oportunamente desfases en el lenguaje y motricidad fina antes del ingreso a kínder, permitiendo una nivelación oportuna en el sistema escolar.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación y conducta',
      title: 'Puntajes de Corte y Flujo Asistencial en Atención Primaria',
      cards: [
        {
          title: 'Rangos de Corte en EEDP y TEPSI',
          tag: 'Normalidad, rezago, riesgo y retraso',
          kind: 'alert',
          items: [
            {
              t: 'Normalidad y Normal con Rezago (mayor o igual a 85)',
              d: 'Normal: puntaje mayor o igual a 85; Rezago: aprueba el global pero reprueba un reactivo específico',
              say: 'Un puntaje igual o superior a ochenta y cinco puntos define normalidad. Si aprueba el puntaje global pero falla un reactivo puntual del test, se clasifica como normal con rezago.',
            },
            {
              t: 'Riesgo (70 a 84 puntos) y Retraso (menor a 70 puntos)',
              d: 'Riesgo: déficit leve a moderado; Retraso psicomotor formal: puntaje menor a 70 puntos',
              say: 'Un resultado entre setenta y ochenta y cuatro puntos clasifica como riesgo de déficit, mientras que una puntuación inferior a setenta puntos constituye retraso del desarrollo psicomotor.',
            },
          ],
        },
        {
          title: 'Conductas Estatutarias según Clasificación',
          tag: 'Salas de estimulación y derivación médica',
          kind: 'key',
          items: [
            {
              t: 'Conducta en categoría de Riesgo: Sala de Estimulación',
              d: 'Ingreso inmediato a la Sala de Estimulación de APS y reevaluación estandarizada en 60 a 90 días',
              say: 'Todo niño calificado en riesgo debe ingresar inmediatamente a la sala de estimulación comunal para intervención con educadora o kinesiólogo, reevaluándose con la batería en sesenta días.',
            },
            {
              t: 'Conducta en categoría de Retraso: Médico y Especialista',
              d: 'Evaluación médica diagnóstica inmediata en APS y derivación prioritaria a Neurología Infantil',
              say: 'El retraso psicomotor exige evaluación médica presencial en el centro de salud para descartar etiologías genéticas o metabólicas y derivación prioritaria a neurología infantil.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas del neurodesarrollo',
      title: 'Banderas Rojas Motoras y Sensoriales de Alerta Absoluta',
      cards: [
        {
          title: 'Límites Máximos de Logro Postural y Motor',
          tag: 'Edades techo que nunca deben superarse',
          kind: 'alert',
          items: [
            {
              t: 'Falta de sostén cefálico a los cuatro meses',
              d: 'Incapacidad de mantener la cabeza erguida a los 4 meses es signo de hipotonía axial severa',
              say: 'La ausencia de sostén cefálico firme a los cuatro meses de vida constituye una bandera roja mayor que orienta a hipotonía muscular central o daño de motoneurona.',
            },
            {
              t: 'Falta de sedestación sin apoyo a los nueve meses',
              d: 'No mantenerse sentado solo a los 9 meses traduce retraso motor o diplejía en evolución',
              say: 'No lograr sentarse sin apoyo a los nueve meses de vida refleja una falla grave del tono del tronco que impide la bipedestación y exige estudio diagnóstico inmediato.',
            },
          ],
        },
        {
          title: 'Límite Máximo para la Marcha Independiente',
          tag: 'Dieciocho meses: el corte absoluto',
          kind: 'alert',
          items: [
            {
              t: 'No caminar de forma autónoma a los 18 meses',
              d: 'Bandera roja cardinal para el examen; nunca tranquilizar diciendo que es normal a los 2 años',
              say: 'Graben este corte cardinal para el EUNACOM: los dieciocho meses son el límite superior estricto para la marcha independiente. No caminar a esa edad jamás es una variante normal.',
            },
            {
              t: 'Signos focales piramidales o marcha en puntillas espástica',
              d: 'Hipertonía de piernas, hiperreflexia rotuliana y Babinski orientan a diplejía espástica',
              say: 'La marcha en puntas de pies acompañada de rigidez de piernas, hiperreflexia o signo de Babinski orienta a daño piramidal por parálisis cerebral espástica en prematuros.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos de la comunicación',
      title: 'Pesquisa Temprana de Trastornos del Espectro Autista (TEA)',
      cards: [
        {
          title: 'Signos de Alerta Temprana en la Comunicación Social',
          tag: 'De doce a dieciocho meses',
          kind: 'alert',
          items: [
            {
              t: 'Ausencia de respuesta al nombre y falta de contacto visual',
              d: 'No orientarse al escuchar su nombre a los 12 meses y escaso contacto ocular sostenido',
              say: 'No voltear ni responder al escuchar su nombre a los doce meses y la falta de contacto visual sostenido representan señales tempranas de alteración de la reciprocidad socio comunicativa.',
            },
            {
              t: 'Ausencia de señalamiento con el dedo (protoimperativo y declarativo)',
              d: 'No apuntar con el índice a los 14-18 meses para pedir objetos o compartir interés',
              say: 'La ausencia de señalamiento con el dedo índice a los catorce a dieciocho meses para pedir o compartir atención con los adultos es un marcador altamente sensible de sospecha de autismo.',
            },
          ],
        },
        {
          title: 'Tamizaje con Cuestionario M-CHAT y Regresión',
          tag: 'Cuestionario M-CHAT a los 18-24 meses',
          kind: 'criteria',
          items: [
            {
              t: 'Aplicación del M-CHAT en control de 18 a 24 meses',
              d: 'Cuestionario para padres que tamiza riesgo de trastorno del espectro autista en APS',
              say: 'En el control de salud de los dieciocho a veinticuatro meses se aplica el cuestionario modificado para autismo en niños pequeños para clasificar el riesgo socio comunicativo.',
            },
            {
              t: 'Regresión o pérdida de habilidades adquiridas',
              d: 'Pérdida de palabras, contacto o pautas motoras es signo de alarma máxima de enfermedad neurológica',
              say: 'La pérdida o regresión de cualquier habilidad motora, de lenguaje o social previamente lograda es la alarma más grave del neurodesarrollo y exige derivación de urgencia a especialista.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa de instrumentos',
      title: 'Comparativa de Instrumentos de Tamizaje del DSM en Atención Primaria',
      head: ['Parámetro', 'EEDP (Lactantes 0 a 24 meses)', 'TEPSI (Preescolares 2 a 5 años)'],
      rows: [
        {
          cells: ['Población Objetivo', 'Lactantes de 0 a 24 meses cumplidos', 'Preescolares de 2 a 5 años (24 a 59 meses)'],
          say: 'La escala de evaluación del desarrollo psicomotor cubre a lactantes hasta los dos años cumplidos, mientras que el test preescolar abarca desde los dos hasta los cinco años de vida.',
        },
        {
          cells: ['Aplicación Obligatoria', 'A los 8 meses y a los 18 meses de vida', 'A los 3 años cumplidos (36 meses)'],
          say: 'Las edades de aplicación obligatoria normadas por el Ministerio son a los ocho y a los dieciocho meses para la primera batería, y a los tres años cumplidos para el test preescolar.',
        },
        {
          cells: ['Áreas Evaluadas', 'Motora, Coordinación, Lenguaje y Social', 'Coordinación, Lenguaje y Motricidad'],
          say: 'La herramienta de lactantes examina cuatro dimensiones incluyendo el área social, en tanto que el test de preescolares focaliza sus reactivos en coordinación motriz fina, lenguaje y motricidad gruesa.',
        },
        {
          cells: ['Puntaje Normal', 'Coeficiente de Desarrollo mayor o igual a 85', 'Puntaje T mayor o igual a 85'],
          say: 'El corte de normalidad es exactamente el mismo en ambos instrumentos, requiriendo un puntaje estandarizado igual o superior a ochenta y cinco puntos.',
        },
        {
          cells: ['Rango de Riesgo', 'Coeficiente entre 70 y 84 puntos', 'Puntaje T entre 70 y 84 puntos'],
          say: 'El intervalo de riesgo se extiende de setenta a ochenta y cuatro puntos en ambas baterías, derivando oportunamente a la sala de estimulación temprana.',
        },
        {
          cells: ['Retraso Formal', 'Coeficiente menor a 70 puntos', 'Puntaje T menor a 70 puntos'],
          say: 'Un resultado inferior a setenta puntos clasifica retraso formal del neurodesarrollo en ambos instrumentos y requiere evaluación diagnóstica por médico especialista.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Flujo Chile Crece Contigo',
      title: 'Algoritmo de Pesquisa y Manejo del Déficit del DSM en Atención Primaria',
      say: 'Analicemos el algoritmo oficial para tamizar el desarrollo psicomotor en el control sano, estratificar el resultado e implementar la intervención.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2019 · Pregunta 159',
      title: 'Prematuro con Marcha en Punta de Pies e Hiperreflexia',
      stem: 'Un niño de 18 meses de edad, con antecedente de haber nacido prematuro a las 32 semanas de edad gestacional, camina en punta de pies. Logró la marcha independiente hace un mes. Al examen físico, tiene aumento del tono muscular de las extremidades inferiores, con hiperreflexia rotuliana bilateral y presencia de signo de Babinski.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estereotipia de la marcha' },
        { letter: 'B', text: 'Retraso del desarrollo psicomotor simple' },
        { letter: 'C', text: 'Diplejía espástica' },
        { letter: 'D', text: 'Polineuropatía desmielinizante' },
        { letter: 'E', text: 'Distrofia muscular congénita' },
      ],
      correct: 'C',
      explanation: 'La marcha en punta de pies en un niño con antecedente de prematuridad moderada (32 semanas) que asocia hipertonía espástica de extremidades inferiores, hiperreflexia y signo de Babinski es el cuadro clásico de DIPLEJÍA ESPÁSTICA, la forma más común de parálisis cerebral en prematuros secundaria a leucomalacia periventricular. Aunque la marcha en puntillas transitoria puede ser fisiológica en menores de 3 años, los signos piramidales (hiperreflexia, espasticidad, Babinski) confirman compromiso de motoneurona superior.',
      say: {
        stem: 'Niño de dieciocho meses con antecedente de prematuridad a las treinta y dos semanas que camina en puntillas con hipertonía de extremidades inferiores, hiperreflexia y Babinski.',
        question: '¿Cuál es el diagnóstico más probable para este paciente?',
        options: 'La opción A propone estereotipia de la marcha. La B retraso psicomotor simple. La C diplejía espástica. La D polineuropatía. La E distrofia muscular. Razona tu respuesta. Piénsalo.',
        answer: 'La respuesta correcta es la C. Los signos piramidales focales en extremidades inferiores tras prematurez configuran una diplejía espástica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'EEDP en Rango de Riesgo en Lactante de 8 Meses',
      stem: 'Un lactante de 8 meses acude a control de salud infantil en el CESFAM. La enfermera aplica la Escala de Evaluación del Desarrollo Psicomotor (EEDP), obteniendo un Coeficiente de Desarrollo de 76 puntos.',
      question: '¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Desarrollo normal; citar a control habitual a los 12 meses' },
        { letter: 'B', text: 'Riesgo de déficit del DSM; derivar a Sala de Estimulación y reevaluar con EEDP en 60 días' },
        { letter: 'C', text: 'Retraso del DSM; derivar de urgencia a Neurología Infantil' },
        { letter: 'D', text: 'Retraso del DSM; hospitalizar para estudio metabólico' },
        { letter: 'E', text: 'Desarrollo con rezago; indicar control telefónico en 6 meses' },
      ],
      correct: 'B',
      explanation: 'En la EEDP y en el TEPSI, un Coeficiente de Desarrollo entre 70 y 84 puntos se clasifica oficialmente como RIESGO de déficit psicomotor. Según las normas de Chile Crece Contigo y del MINSAL, la conducta inmediata ante un lactante con riesgo es el ingreso a la Sala de Estimulación de APS a cargo de educadora/kinesiólogo y la reevaluación estandarizada con una nueva EEDP en 60 días. El retraso formal (< 70 puntos) es el que amerita evaluación médica diagnóstica y derivación a especialista.',
      say: {
        stem: 'Lactante de ocho meses evaluado con escala de desarrollo psicomotor que obtiene un coeficiente de setenta y seis puntos.',
        question: '¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?',
        options: 'La opción A plantea desarrollo normal. La B riesgo de déficit con ingreso a sala de estimulación y reevaluación en sesenta días. La C retraso con derivación neurológica. La D hospitalización. La E rezago telefónico. Piensa la conducta estatutaria. Piénsalo.',
        answer: 'La respuesta correcta es la B. Un puntaje entre setenta y ochenta y cuatro califica como riesgo, ingresando a sala de estimulación para reevaluar en sesenta días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Ausencia de Marcha Independiente a los 18 Meses',
      stem: 'Durante el control de salud infantil de un niño de 18 meses, el médico constata que aún no camina de forma independiente, requiriendo ser tomado de ambas manos para dar pasos inestables. Además dice solo una palabra inespecífica y no señala con el dedo para pedir objetos.',
      question: '¿Cuál es la conducta médica más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la madre y esperar hasta los 24 meses, dado que la marcha puede demorarse' },
        { letter: 'B', text: 'Indicar uso de andador infantil para fortalecer la musculatura de extremidades inferiores' },
        { letter: 'C', text: 'Considerar bandera roja por falta de marcha a los 18 meses, realizar examen neurológico completo y derivar a especialista' },
        { letter: 'D', text: 'Solicitar únicamente radiografía de pelvis para descartar displasia de cadera' },
        { letter: 'E', text: 'Suspender lácteos e indicar suplementos multivitamínicos orales' },
      ],
      correct: 'C',
      explanation: 'Los 18 meses constituyen la edad límite superior absoluta para la marcha autónoma independiente. La incapacidad para caminar a los 18 meses, sumada a la ausencia de lenguaje y falta de señalamiento, constituye una bandera roja formal que exige un examen físico neurológico acucioso y la derivación inmediata a Pediatría o Neurología Infantil. Jamás se debe tranquilizar a la familia diciendo que es normal esperar a los 2 años, y el uso de andador está proscrito por alto riesgo de accidentes graves.',
      say: {
        stem: 'Niño de dieciocho meses que no camina de forma independiente, dice una sola palabra y no señala con el dedo.',
        question: '¿Cuál es la conducta médica más adecuada para este paciente?',
        options: 'La opción A propone esperar a los dos años. La B indicar andador infantil. La C considerar bandera roja formal, realizar examen neurológico y derivar a especialista. La D radiografía aislada. La E multivitamínicos. Identifica la conducta correcta. Piénsalo.',
        answer: 'La respuesta correcta es la C. Los dieciocho meses son el límite absoluto para la marcha; su ausencia exige examen neurológico y derivación inmediata.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Desarrollo Psicomotor Infantil',
      cards: [
        {
          title: 'Tamizaje y Rangos de Corte MINSAL',
          tag: 'Normalidad, riesgo y retraso',
          kind: 'key',
          items: [
            {
              t: 'Edades clave: 8 y 18 meses (EEDP), 3 años (TEPSI)',
              d: 'Puntajes: mayor o igual a 85 normal, 70 a 84 riesgo, menor a 70 retraso formal',
              say: 'Recuerden con exactitud las fechas estatutarias: escala de lactantes a los ocho y dieciocho meses, y test preescolar a los tres años. El corte de riesgo va de setenta a ochenta y cuatro puntos, y el retraso formal se diagnostica bajo setenta.',
            },
            {
              t: 'Manejo en Sala de Estimulación en 60 días',
              d: 'Todo puntaje en riesgo ingresa a sala de estimulación de APS y se reevalúa en 60 días',
              say: 'El hallazgo de riesgo exige ingresar de inmediato al paciente a la sala de estimulación del centro de salud con reevaluación protocolizada en sesenta días.',
            },
          ],
        },
        {
          title: 'Límites Absolutos y Alertas Neurológicas',
          tag: 'Banderas rojas indeclinables',
          kind: 'alert',
          items: [
            {
              t: 'Dieciocho meses como límite máximo de marcha',
              d: 'La ausencia de marcha independiente a los 18 meses es bandera roja y obliga a derivación',
              say: 'Fijen en su mente que los dieciocho meses son el techo absoluto para la marcha independiente; cualquier retraso posterior exige descartar patología neuromotriz o parálisis cerebral de inmediato.',
            },
            {
              t: 'Regresión de pautas adquiridas es urgencia',
              d: 'La pérdida de habilidades previamente logradas exige estudio metabólico y neurológico urgente',
              say: 'La pérdida de cualquier destreza previa es una bandera roja que obliga a derivar al neurólogo. Si te llevas una sola idea de hoy: la regresión psicomotora nunca se observa y exige estudio inmediato para descartar patología neurodegenerativa. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Pesquisa y Manejo del Déficit del DSM en Atención Primaria',
    root: N(
      'start',
      'Lactante o Preescolar en Control de Salud Infantil en APS',
      'Observación de hitos clínicos y aplicación de batería según edad: EEDP a los 8 y 18 meses, TEPSI a los 3 años',
      'Iniciamos el tamizaje del desarrollo psicomotor evaluando los hitos clínicos y aplicando la batería que corresponde por edad.',
      [
        'Puntaje global mayor o igual a 85 puntos',
        N(
          'q',
          '¿Presenta fracaso en algún ítem específico de la batería?',
          'Revisión minuciosa de cada una de las subescalas del instrumento aplicado',
          'Determinamos si el niño aprobó todos los ítems o si presenta una falla focal aislada.',
          [
            'Todos los ítems aprobados sin fallas aisladas',
            N(
              'ok',
              'Desarrollo Psicomotor Normal',
              'Refuerzo de pautas de crianza respetuosa y estimulación · Próximo control según calendario',
              'Con puntaje normal y sin fallas específicas reforzamos la estimulación y citamos al control regular.',
            ),
          ],
          [
            'Falla en un ítem específico pero puntaje global normal',
            N(
              'do',
              'Desarrollo Psicomotor con Rezago',
              'Pautas de estimulación focalizada en el área deficitaria · Reevaluación en el próximo control de salud',
              'Si presenta rezago en una sola área entregamos pautas dirigidas de estimulación y reevaluamos en el siguiente control.',
            ),
          ],
        ),
      ],
      [
        'Puntaje global menor a 85 puntos en la batería estandarizada',
        N(
          'q',
          '¿Cuál es el Coeficiente de Desarrollo o Puntaje T obtenido?',
          'Estratificación oficial entre rango de riesgo o retraso psicomotor clínico',
          'Estratificamos el puntaje numérico para definir la severidad del compromiso y la conducta asistencial.',
          [
            'Puntaje entre 70 y 84 puntos',
            N(
              'do',
              'Riesgo de Déficit del Desarrollo Psicomotor',
              'Ingreso a Sala de Estimulación de APS · Reevaluación con la misma batería en sesenta días',
              'Frente a un puntaje en rango de riesgo indicamos ingreso a sala de estimulación y reevaluación en sesenta días.',
            ),
          ],
          [
            'Puntaje menor a 70 puntos o presencia de bandera roja',
            N(
              'refer',
              'Retraso del Desarrollo Psicomotor o Alerta Neurológica',
              'Evaluación médica inmediata en APS · Derivación prioritaria a Pediatría o Neurología Infantil',
              'Con puntaje bajo setenta o banderas rojas realizamos examen médico y derivamos prioritariamente a especialista.',
            ),
          ],
        ),
      ],
    ),
  },
};
