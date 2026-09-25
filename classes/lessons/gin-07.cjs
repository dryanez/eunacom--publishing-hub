// Clase 20.7 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Infertilidad conyugal, estudio básico en cuatro pilares, e indicaciones de técnicas de reproducción asistida de baja versus alta complejidad',
      say: 'Bienvenidos a la clase sobre infertilidad conyugal, un tema clásico y de altísima rentabilidad en el examen EUNACOM. En esta sesión aprenderemos a definir con precisión cuándo iniciar el estudio según la edad materna, dominaremos los cuatro pilares diagnósticos básicos que deben solicitarse en paralelo, y fijaremos las reglas claras para elegir entre inseminación intrauterina y fertilización in vitro. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Abordaje secuencial de la pareja',
      title: 'Algoritmo Diagnóstico Inicial: Evaluación Sistemática Simultánea',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'start', t: 'Sospecha de infertilidad', s: 'Doce meses sin concepción en menores de 35 años o seis meses si tiene 35 años o más' },
        { id: 'pil', col: 1, row: 1, k: 'mech', t: 'Cuatro pilares paralelos', s: 'Espermiograma, progesterona día 21, histerosalpingografía y ecografía transvaginal' },
        { id: 'cla', col: 2, row: 1, k: 'effect', t: 'Identificación de la causa', s: 'Factor masculino, tuboperitoneal, ovulatorio, uterino o idiopático' },
        { id: 'tra', col: 3, row: 1, k: 'good', t: 'Selección de la técnica', s: 'Inseminación intrauterina si trompas permeables versus fertilización in vitro si obstrucción' },
      ],
      edges: [
        { from: 'con', to: 'pil', label: 'evaluación conyugal' },
        { from: 'pil', to: 'cla', label: 'hallazgos' },
        { from: 'cla', to: 'tra', label: 'complejidad' },
      ],
      steps: [
        {
          show: ['con', 'pil'],
          note: 'Inicio oportuno y estudio simultáneo de ambos miembros',
          say: 'El estudio de infertilidad siempre debe evaluar a ambos miembros de la pareja en forma simultánea. Nunca cometamos el error de estudiar únicamente a la mujer. En menores de treinta y cinco años esperamos doce meses de relaciones regulares sin protección, pero si la mujer tiene treinta y cinco años o más, iniciamos el estudio a los seis meses.',
        },
        {
          show: ['cla', 'tra'],
          note: 'Etiología y selección de la técnica terapéutica',
          say: 'Los exámenes iniciales identifican si el factor predominante es masculino, tubario, ovulatorio o uterino. Esta categorización define directamente el tratamiento: si hay al menos una trompa permeable y buen recuento espermático se puede plantear baja complejidad, pero ante daño tubárico bilateral o factor masculino severo pasamos directamente a fertilización in vitro.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones y epidemiología',
      title: 'Criterios Temporales de Estudio y Distribución Etiológica',
      cards: [
        {
          title: 'Criterios de Temporalidad',
          tag: 'Edad materna como factor crítico',
          kind: 'criteria',
          items: [
            {
              t: 'Mujeres menores de 35 años',
              d: 'Se define infertilidad tras 12 meses de coito regular sin anticoncepción',
              say: 'En mujeres menores de treinta y cinco años el plazo estándar para definir infertilidad es de doce meses completos de búsqueda activa mediante relaciones sexuales regulares sin métodos anticonceptivos.',
            },
            {
              t: 'Mujeres de 35 años o más',
              d: 'El estudio debe iniciarse a los 6 meses por declive acelerado de reserva ovárica',
              say: 'Si la mujer tiene treinta y cinco años o más, el tiempo de espera se reduce estrictamente a seis meses. La reserva ovárica y la calidad ovocitaria experimentan una caída acelerada que no permite postergar la evaluación.',
            },
            {
              t: 'Inicio inmediato del estudio',
              d: 'Ante amenorrea, endometriosis severa, cirugías pélvicas o criptorquidia previa',
              say: 'El estudio no debe esperar si existen antecedentes de alto riesgo evidentes, tales como oligomenorrea severa, endometriosis moderada o grave, secuelas de peritonitis o antecedente de criptorquidia en el varón.',
            },
          ],
        },
        {
          title: 'Distribución Etiológica de la Pareja',
          tag: 'Causas compartidas de esterilidad',
          kind: 'key',
          items: [
            {
              t: 'Factor masculino (35 por ciento)',
              d: 'Varicocele, infecciones accesorias, tóxicos o anomalías de espermatogénesis',
              say: 'El factor masculino representa un tercio de las causas de infertilidad conyugal, motivando que el espermiograma sea el primer examen solicitado por su carácter no invasivo y bajo costo.',
            },
            {
              t: 'Factor tuboperitoneal (30 por ciento)',
              d: 'Secuelas de enfermedad pélvica inflamatoria, salpingitis y adherencias',
              say: 'El factor tubárico y peritoneal causa otro treinta por ciento, predominantemente secundario a secuelas cicatrizales de infecciones por clamidia o gonococo y endometriosis pélvica.',
            },
            {
              t: 'Factor ovulatorio y uterino (25 a 30 por ciento)',
              d: 'Síndrome de ovario poliquístico, hiperprolactinemia, miomas submucosos y pólipos',
              say: 'El factor anovulatorio, liderado por el síndrome de ovario poliquístico, junto a patología uterina endocavitaria y un diez por ciento de causa inexplicada, completan el panorama etiológico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar masculino',
      title: 'Espermiograma: Condiciones Preanalíticas y Criterios Diagnósticos',
      cards: [
        {
          title: 'Condiciones de Recolección',
          tag: 'Estandarización estricta OMS',
          kind: 'alert',
          items: [
            {
              t: 'Abstinencia sexual de 3 a 5 días',
              d: 'Períodos más cortos reducen el volumen; períodos más largos deterioran la motilidad',
              say: 'Para que el espermiograma sea representativo, el varón debe cumplir estrictamente entre tres y cinco días de abstinencia sexual previa. Menos tiempo reduce el volumen y recuento, mientras que más días acumulan espermatozoides senescentes e inmóviles.',
            },
            {
              t: 'Repetición obligatoria a las 4 a 12 semanas',
              d: 'Nunca emitir diagnóstico definitivo de factor masculino con una sola muestra alterada',
              say: 'Por norma internacional, jamás se concluye un diagnóstico con un único espermiograma alterado. La espermatogénesis es fluctuante y sensible a cuadros febriles o estrés, por lo que siempre se confirma con una segunda muestra entre cuatro y doce semanas después.',
            },
          ],
        },
        {
          title: 'Valores Seminales Normales de Referencia',
          tag: 'Criterios internacionales OMS',
          kind: 'criteria',
          items: [
            {
              t: 'Volumen y concentración celular',
              d: 'Volumen mayor o igual a 1.4 mL y concentración mayor o igual a 16 millones por mL',
              say: 'Los parámetros normales exigen un volumen eyaculado igual o superior a uno coma cuatro mililitros y una concentración de al menos dieciséis millones de espermatozoides por mililitro.',
            },
            {
              t: 'Motilidad y morfología estricta',
              d: 'Motilidad progresiva al menos 30 a 32 por ciento y morfología Kruger normal al menos 4 por ciento',
              say: 'La motilidad progresiva debe alcanzar al menos el treinta por ciento de los espermatozoides, y la morfología según criterios estrictos de Kruger debe superar el cuatro por ciento de formas normales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar ovulatorio y reserva',
      title: 'Evaluación de la Ovulación y Marcadores de Reserva Ovárica',
      cards: [
        {
          title: 'Confirmación de la Ovulación',
          tag: 'Progesterona en fase lútea media',
          kind: 'key',
          items: [
            {
              t: 'Progesterona plasmática en día 21',
              d: 'En ciclos de 28 días, un valor mayor a 3 a 5 ng/mL confirma ovulación funcional',
              say: 'Para comprobar si la mujer ovula solicitamos una progesterona plasmática en el día veintiuno del ciclo menstrual. Un valor superior a tres nanogramos por mililitro confirma la presencia de un cuerpo lúteo funcionante y ovulación espontánea.',
            },
            {
              t: 'Seguimiento folicular ecográfico',
              d: 'Mide crecimiento del folículo dominante hasta 18-22 mm y su colapso ovulatorio',
              say: 'El seguimiento folicular por ecografía transvaginal seriada permite verificar el crecimiento regular del folículo dominante y su posterior colapso con líquido libre en el fondo de saco de Douglas.',
            },
            {
              t: 'Descarte endocrinológico complementario',
              d: 'Medición obligatoria de TSH y prolactina sérica ante trastornos menstruales',
              say: 'Toda alteración ovulatoria u oligomenorrea obliga a descartar patología tiroidea mediante tirotropina y prolactina sérica, además del estudio de resistencia a la insulina.',
            },
          ],
        },
        {
          title: 'Reserva Ovárica Funcional',
          tag: 'AMH y recuento de folículos antrales',
          kind: 'criteria',
          items: [
            {
              t: 'Hormona Antimülleriana (AMH)',
              d: 'Producida por células de la granulosa; valor menor a 1 ng/mL alerta baja reserva',
              say: 'La hormona antimülleriana cuantifica la dotación de folículos preantrales y se mide en cualquier día del ciclo. Cifras inferiores a un nanogramo por mililitro señalan una reserva disminuida.',
            },
            {
              t: 'Recuento de Folículos Antrales (RFA)',
              d: 'Menos de 5 a 7 folículos bilaterales en ecografía predice baja respuesta ovárica',
              say: 'El recuento de folículos antrales por ecografía transvaginal en fase folicular temprana complementa la reserva. Encontrar menos de cinco a siete folículos entre ambos ovarios anticipa pobre respuesta.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilares tubárico y uterino',
      title: 'Histerosalpingografía y Evaluación Anatómica Pélvica',
      cards: [
        {
          title: 'Histerosalpingografía (HSG)',
          tag: 'Permeabilidad tubárica y cavidad',
          kind: 'key',
          items: [
            {
              t: 'Prueba de Cotte Positiva bilateral',
              d: 'Paso y dispersión libre del medio de contraste hacia la cavidad peritoneal',
              say: 'La histerosalpingografía con medio de contraste iodado evalúa la morfología uterina y las trompas. La prueba de Cotte positiva confirma el paso y dispersión libre del medio hacia el peritoneo.',
            },
            {
              t: 'Prueba de Cotte Negativa o hidrosálpinx',
              d: 'Detención del contraste o dilatación ampular sin salida; indica obstrucción mecánica',
              say: 'Si el medio de contraste se detiene o se acumula en una ampolla dilatada configurando un hidrosálpinx con prueba de Cotte negativa, se establece el diagnóstico de obstrucción tubárica.',
            },
          ],
        },
        {
          title: 'Evaluación Uterina y Endocavitaria',
          tag: 'Factor endometrial y miometrial',
          kind: 'normal',
          items: [
            {
              t: 'Ecografía transvaginal ginecológica',
              d: 'Descarta miomas submucosos, adenomiosis difusa o pólipos endometriales',
              say: 'La ecografía transvaginal es el estudio no invasivo de elección para pesquisar miomas submucosos, adenomiosis o engrosamientos focales sugerentes de pólipos endometriales.',
            },
            {
              t: 'Histeroscopía diagnóstica y terapéutica',
              d: 'Estudio de confirmación y resección ante defectos de llene en la radiografía',
              say: 'Ante imágenes dudosas o defectos de llene intrauterinos observados en la histerosalpingografía, la histeroscopía directa es el estándar de oro para confirmar y resecar adherencias o pólipos.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Técnicas de reproducción asistida',
      title: 'Comparativa de TRA: Baja versus Alta Complejidad',
      head: ['Técnica', 'Requisitos indispensables', 'Indicaciones cardinales'],
      rows: [
        {
          cells: ['Inseminación Intrauterina (IIU)', 'Al menos una trompa permeable (Cotte +) y REM mayor a 3-5 millones', 'Factor cervical, disovulación refractaria a citrato, factor masculino leve o causa idiopática'],
          say: 'La inseminación intrauterina exige como condición indispensable que al menos una trompa esté permeable y un recuento de espermatozoides móviles recuperados adecuado.',
        },
        {
          cells: ['Fertilización In Vitro (FIV)', 'Ovocitos viables y semen; no requiere permeabilidad tubárica', 'Obstrucción tubárica bilateral, hidrosálpinx, endometriosis severa o fracaso de inseminación'],
          say: 'La fertilización in vitro es mandatoria ante obstrucción tubárica bilateral con hidrosálpinx, superando el bloqueo mecánico mediante fecundación extracorpórea.',
        },
        {
          cells: ['Inyección Intracitoplasmática (ICSI)', 'Un espermatozoide por ovocito aspirado por punción ovárica', 'Factor masculino severo, recuento menor a un millón o espermatozoides testiculares en azoospermia'],
          say: 'La inyección intracitoplasmática de espermatozoides resuelve el factor masculino severo introduciendo un único espermatozoide directamente dentro del ovocito.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta terapéutica escalonada',
      title: 'Secuencia de Decisión Terapéutica en la Pareja Infértil',
      cards: [
        {
          title: 'Algoritmo de Derivación Oportuna',
          tag: 'Pasos clínicos en atención primaria',
          kind: 'criteria',
          items: [
            {
              t: 'Paso 1: Solicitud paralela de exámenes',
              d: 'Espermiograma estandarizado, progesterona día 21, histerosalpingografía y ecografía',
              say: 'El primer paso ante la pareja infértil es ordenar en paralelo el estudio básico: espermiograma con tres a cinco días de abstinencia, progesterona en día veintiuno, histerosalpingografía y ecografía ginecológica.',
            },
            {
              t: 'Paso 2: Evaluación crítica de permeabilidad',
              d: 'Verificar prueba de Cotte positiva para descartar daño tubárico bilateral',
              say: 'En el segundo paso evaluamos la histerosalpingografía. Si ambas trompas están ocluidas con prueba de Cotte negativa o hidrosálpinx, queda totalmente contraindicada la inseminación intrauterina.',
            },
            {
              t: 'Paso 3: Definición del nivel de complejidad',
              d: 'Derivación para baja complejidad si trompas viables o alta complejidad directa si daño severo',
              say: 'En el tercer paso derivamos según complejidad: inseminación intrauterina ante trompas permeables y buen semen, versus fertilización in vitro directa si hay obstrucción tubaria o factor masculino severo.',
            },
          ],
        },
        {
          title: 'Errores Clásicos que Debes Evitar',
          tag: 'Trampas frecuentes EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Nunca intentar inseminación sin trompas permeables',
              d: 'La inseminación intrauterina en obstrucción tubárica bilateral tiene cero por ciento de éxito',
              say: 'Un error gravísimo en el examen es proponer inseminación intrauterina en una mujer con hidrosálpinx bilateral. Sin trompas permeables el espermatozoide no puede fecundar y el procedimiento fracasa.',
            },
            {
              t: 'Nunca rotular factor masculino con un solo espermiograma',
              d: 'La alteración seminal exige confirmación con segunda muestra a las 4 a 12 semanas',
              say: 'Tampoco debemos rotular a un varón como infértil con un único examen alterado. Siempre debe repetirse el espermiograma semanas después para confirmar el diagnóstico con rigor.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Manejo y Derivación en Infertilidad de Pareja',
      say: 'Revisemos el algoritmo estructurado para decidir la técnica de reproducción asistida según los hallazgos en las trompas y el espermiograma.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Factor Tubárico Bilateral · Conducta Terapéutica',
      stem: 'Pareja compuesta por mujer de 31 años y varón de 33 años consultan por no haber logrado embarazo tras 18 meses de relaciones sexuales regulares no protegidas. La mujer tiene ciclos regulares de 28 días y progesterona plasmática en el día 21 de 12 ng/mL. La histerosalpingografía demuestra cavidad uterina normal, pero existe ausencia completa de paso de medio de contraste a través de ambas trompas de Falopio, con dilatación ampular bilateral compatible con hidrosálpinx bilateral y prueba de Cotte negativa bilateral. El espermiograma del cónyuge resulta con 45 millones de espermatozoides por mL y 55% de motilidad progresiva normal.',
      question: '¿Cuál es la conducta terapéutica de elección para lograr el embarazo en esta pareja?',
      options: [
        { letter: 'A', text: 'Inseminación intrauterina con semen de donante' },
        { letter: 'B', text: 'Relaciones sexuales programadas con inductores orales de la ovulación' },
        { letter: 'C', text: 'Fertilización In Vitro (FIV)' },
        { letter: 'D', text: 'Inseminación intrauterina con semen conyugal capacitado' },
        { letter: 'E', text: 'Antibioticoterapia prolongada con doxiciclina y reevaluación en 6 meses' },
      ],
      correct: 'C',
      explanation: 'La obstrucción tubárica bilateral con prueba de Cotte negativa bilateral e hidrosálpinx es la indicación clásica y definitiva de Fertilización In Vitro (FIV). La FIV prescinde por completo de la función de las trompas de Falopio al aspirar los ovocitos directamente del ovario mediante punción transvaginal ecoguiada, fecundarlos en el laboratorio y transferir el embrión a la cavidad uterina. La inseminación intrauterina (IIU) está formalmente contraindicada y tiene tasa de éxito de cero por ciento si no existe al menos una trompa permeable.',
      say: {
        stem: 'Pareja con infertilidad primaria de dieciocho meses; mujer de treinta y un años con ovulación normal pero histerosalpingografía con hidrosálpinx bilateral y prueba de Cotte negativa bilateral; espermiograma del cónyuge completamente normal.',
        question: '¿Cuál es la conducta terapéutica de elección para lograr el embarazo en esta pareja?',
        options: 'La opción A propone inseminación con semen de donante. La B relaciones programadas con inductores. La C fertilización in vitro. La D inseminación intrauterina conyugal. La E doxiciclina oral. Piénsalo bien.',
        answer: 'La respuesta correcta es la C. La obstrucción tubárica bilateral con prueba de Cotte negativa es la indicación clásica de fertilización in vitro al saltar mecánicamente las trompas ocluidas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Espermiograma · Período de Abstinencia Sexual',
      stem: 'En el estudio de un varón de 30 años cuya pareja no logra concebir tras un año de búsqueda, se solicita un espermiograma de control.',
      question: 'Para que los resultados del análisis seminal según los estándares internacionales de la OMS sean válidos y confiables, ¿cuántos días de abstinencia sexual previa debe cumplir el paciente antes de recolectar la muestra?',
      options: [
        { letter: 'A', text: 'Menos de 24 horas de abstinencia' },
        { letter: 'B', text: 'De 3 a 5 días de abstinencia estricta' },
        { letter: 'C', text: 'Al menos 20 a 30 días de abstinencia' },
        { letter: 'D', text: 'La abstinencia sexual previa es irrelevante para el espermiograma' },
        { letter: 'E', text: 'Exactamente 14 días coincidiendo con el ciclo de la pareja' },
      ],
      correct: 'B',
      explanation: 'La Organización Mundial de la Salud (OMS) y las guías de fertilidad establecen de forma estricta que la recolección seminal para un espermiograma diagnóstico debe realizarse tras un período de abstinencia de 3 a 5 días (rango estricto aceptable de 2 a 7 días). Períodos menores a 48 horas disminuyen el volumen y la concentración celular, mientras que abstinencias prolongadas deterioran gravemente la motilidad y la viabilidad celular por senescencia espermática.',
      say: {
        stem: 'En el estudio básico de un varón de treinta años por sospecha de factor masculino de infertilidad, se solicita una muestra de espermiograma diagnóstico.',
        question: '¿Cuántos días de abstinencia sexual previa debe cumplir el paciente antes de recolectar la muestra de semen?',
        options: 'La opción A propone menos de veinticuatro horas. La B de tres a cinco días de abstinencia estricta. La C veinte a treinta días. La D que la abstinencia es irrelevante. La E catorce días exactos. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. La norma estándar internacional exige de tres a cinco días de abstinencia para no alterar el volumen ni la motilidad espermática.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Infertilidad Conyugal y Reproducción Asistida',
      cards: [
        {
          title: 'Cuatro Pilares Básicos Obligatorios',
          tag: 'Evaluación simultánea de la pareja',
          kind: 'key',
          items: [
            {
              t: 'Estudio conyugal en paralelo',
              d: 'Espermiograma, progesterona en día 21, histerosalpingografía y ecografía transvaginal',
              say: 'La regla de oro diagnóstica es estudiar en paralelo a ambos miembros de la pareja. En el varón pedimos espermiograma con tres a cinco días de abstinencia; en la mujer, confirmamos ovulación con progesterona en día veintiuno y permeabilidad con histerosalpingografía.',
            },
            {
              t: 'Criterio temporal estricto',
              d: 'Doce meses en menores de 35 años; seis meses si tiene 35 años o más',
              say: 'Recordemos siempre el punto de corte etario: doce meses de búsqueda en mujeres jóvenes, pero reducimos la espera a seis meses si la paciente tiene treinta y cinco años o más.',
            },
          ],
        },
        {
          title: 'Requisitos de Baja Complejidad',
          tag: 'Inseminación Intrauterina (IIU)',
          kind: 'criteria',
          items: [
            {
              t: 'Al menos una trompa permeable',
              d: 'Prueba de Cotte positiva obligatoria para permitir el encuentro de gametos',
              say: 'Para indicar inseminación intrauterina es condición no negociable que al menos una trompa de Falopio esté completamente permeable con prueba de Cotte positiva.',
            },
            {
              t: 'Recuento espermático suficiente',
              d: 'Recuento de móviles progresivos post-capacitación mayor a 3 a 5 millones',
              say: 'Además, la muestra seminal tras capacitación debe recuperar al menos tres a cinco millones de espermatozoides con motilidad progresiva.',
            },
          ],
        },
        {
          title: 'Indicaciones Mandatarias de Alta Complejidad',
          tag: 'Fertilización In Vitro (FIV / ICSI)',
          kind: 'alert',
          items: [
            {
              t: 'Factor tubárico severo bilateral',
              d: 'Obstrucción tubárica bilateral, hidrosálpinx o salpingectomía bilateral',
              say: 'La obstrucción tubárica bilateral con prueba de Cotte negativa o hidrosálpinx va directo a fertilización in vitro, ya que salta por completo la vía tubaria extrayendo los ovocitos por punción ovárica.',
            },
            {
              t: 'Factor masculino severo',
              d: 'Recuento menor a un millón o azoospermia que exige microinyección intracitoplasmática',
              say: 'Por su parte, el factor masculino severo con recuento espermático crítico o azoospermia se resuelve mediante fertilización de alta complejidad con microinyección intracitoplasmática. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo y Derivación en Infertilidad de Pareja',
    root: N(
      'start',
      'Pareja con Criterio Clínico de Infertilidad',
      'Doce meses en menores de 35 años o seis meses en mujeres de 35 años o más',
      'Iniciamos el abordaje confirmando el criterio temporal de la pareja.',
      [
        'Estudio paralelo de los cuatro pilares completado',
        N(
          'q',
          '¿Existe al menos una trompa permeable con prueba de Cotte positiva?',
          'Histerosalpingografía para valorar integridad anatómica tubárica bilateral',
          'Evaluamos si la histerosalpingografía demuestra al menos una trompa permeable con prueba de Cotte positiva.',
          [
            'Trompas permeables comprobadas bilateral o unilateralmente',
            N(
              'q',
              '¿Recuento espermático recuperado (REM) mayor a 3 a 5 millones?',
              'Capacitación espermática diagnóstica previa a la decisión',
              'Verificamos si el recuento de espermatozoides móviles progresivos supera los tres a cinco millones.',
              [
                'REM adecuado y trompa permeable',
                N(
                  'ok',
                  'Técnica de Baja Complejidad: Inseminación Intrauterina (IIU)',
                  'Inducción de ovulación más inseminación intrauterina conyugal',
                  'Indicamos inseminación intrauterina con inducción ovulatoria.',
                ),
              ],
              [
                'REM crítico menor a 1 a 3 millones',
                N(
                  'refer',
                  'Técnica de Alta Complejidad: ICSI (Inyección Intracitoplasmática)',
                  'Microinyección de un espermatozoide por cada ovocito capturado',
                  'Derivamos a alta complejidad para microinyección intracitoplasmática por factor masculino severo.',
                ),
              ],
            ),
          ],
          [
            'Obstrucción tubárica bilateral o hidrosálpinx con Cotte negativo',
            N(
              'alert',
              'Técnica de Alta Complejidad Directa: Fertilización In Vitro (FIV)',
              'Punción folicular ecoguiada y fertilización extracorpórea sin requerir trompas',
              'Ante daño tubárico bilateral indicamos fertilización in vitro directa.',
            ),
          ],
        ),
      ],
    ),
  },
};
