// Clase 18.16 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Evaluación de la edad gestacional, scores de Capurro y Ballard, clasificación ponderal según curvas de crecimiento, complicaciones del neonato PEG y GEG, y monitoreo de hipoglicemia',
      say: 'Bienvenidos a la clase sobre evaluación de la edad gestacional y clasificación ponderal neonatal, un pilar de la neonatología en el examen EUNACOM. En esta sesión aprenderemos a clasificar al recién nacido cruzando su edad con su peso en percentiles, dominaremos los scores de Capurro y Ballard, revisaremos las complicaciones metabólicas del neonato pequeño y grande, y fijaremos el monitoreo de hipoglicemia. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Maduración somática y neurológica',
      title: 'Determinación de la Edad Gestacional y Asignación de Riesgo Neonatal',
      nodes: [
        { id: 'cro', col: 0, row: 1, k: 'start', t: 'Cronología obstétrica fetal', s: 'Fecha de última regla confiable y ecografía precoz del primer trimestre' },
        { id: 'exa', col: 1, row: 1, k: 'mech', t: 'Examen físico neonatal', s: 'Evaluación de signos físicos y neurológicos mediante Capurro o New Ballard' },
        { id: 'cla', col: 2, row: 1, k: 'good', t: 'Clasificación cruzada peso y edad', s: 'Asignación percentilar según curvas nacionales: PEG, AEG o GEG' },
        { id: 'rie', col: 3, row: 1, k: 'alert', t: 'Estratificación de riesgos metabólicos', s: 'Pesquisa activa de hipoglicemia, hipotermia, policitemia y asfixia' },
      ],
      edges: [
        { from: 'cro', to: 'exa', label: 'correlación clínica' },
        { from: 'exa', to: 'cla', label: 'curvas somatométricas' },
        { from: 'cla', to: 'rie', label: 'vigilancia protocolizada' },
      ],
      steps: [
        {
          show: ['cro', 'exa'],
          note: 'Estimación prenatal y confirmación física en sala de partos',
          say: 'La determinación de la edad gestacional inicia con los datos prenatales, especialmente la ecografía precoz del primer trimestre. Al nacer, el examen físico somático y neurológico permite ratificar la madurez biológica del recién nacido mediante escalas validadas como Capurro o Ballard.',
        },
        {
          show: ['cla', 'rie'],
          note: 'Cruce somatométrico en curvas y detección de vulnerabilidades',
          say: 'Al cruzar la edad gestacional con el peso de nacimiento en las curvas de crecimiento intrauterino, clasificamos al neonato en pequeño, adecuado o grande para su edad, identificando oportunamente a aquellos pacientes en riesgo inminente de hipoglicemia o hipotermia que requieren monitorización estricta.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Métodos prenatales versus postnatales',
      title: 'Jerarquía de Precisión en la Estimación de la Edad Gestacional',
      cards: [
        {
          title: 'Estándar de Oro Prenatal: Ecografía Precoz',
          tag: 'El método más certero para calcular edad gestacional',
          kind: 'key',
          items: [
            {
              t: 'Ecografía del primer trimestre entre semanas siete y doce',
              d: 'La medición de la longitud céfalo-caudal tiene un margen de error mínimo de apenas más menos tres a cinco días',
              say: 'La ecografía del primer trimestre que mide la longitud céfalo-caudal es el método de referencia absoluto, superando a la fecha de última regla con un margen de error menor a cinco días.',
            },
            {
              t: 'Fecha de Última Regla (FUR) segura y confiable',
              d: 'Válida solo si la madre tiene ciclos regulares, sin uso previo de anticonceptivos hormonales en los últimos tres meses',
              say: 'La fecha de última regla solo es plenamente confiable si la mujer tenía ciclos menstruales regulares y no utilizaba anticonceptivos hormonales en los meses previos a la concepción.',
            },
          ],
        },
        {
          title: 'Evaluación Postnatal en el Recién Nacido',
          tag: 'Obligatoria cuando no existe control prenatal confiable',
          kind: 'criteria',
          items: [
            {
              t: 'Score de Capurro: Rápido y centrado en signos físicos',
              d: 'Evalúa cinco características somáticas en mayores de 29 semanas; constante matemática de doscientos cuatro días',
              say: 'El score de Capurro evalúa cinco características somáticas visibles al examen físico, siendo muy útil en recién nacidos de más de veintinueve semanas por su rapidez y simplicidad.',
            },
            {
              t: 'Score de New Ballard: Precisión en el prematuro extremo',
              d: 'Combina seis signos neuromusculares y seis somáticos; aplicable desde las veinte semanas de gestación',
              say: 'El score de New Ballard combina parámetros físicos y neuromusculares, siendo la herramienta obligada para evaluar con precisión a prematuros extremos desde las veinte semanas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación física de capurro',
      title: 'Score de Capurro Somático: Los Cinco Signos Cardinales',
      cards: [
        {
          title: 'Parámetros Físicos y Puntuación de Capurro A',
          tag: 'Cinco características externas evaluadas en el examen',
          kind: 'key',
          items: [
            {
              t: 'Forma de la oreja y tamaño de la glándula mamaria',
              d: 'Pabellón auricular totalmente incurvado otorga 24 puntos; nódulo mamario palpable sobre 10 milímetros otorga 15 puntos',
              say: 'Se examina el incurvamiento del pabellón auricular y el tamaño palpable del nódulo mamario, el cual crece progresivamente conforme avanza la edad gestacional.',
            },
            {
              t: 'Formación del pezón, textura de piel y pliegues plantares',
              d: 'Areola punteda con borde levantado, piel con descamación y grietas profundas, y surcos plantares en más de la mitad anterior',
              say: 'También se evalúa el diámetro de la areola, la textura de la piel desde lisa y gelatinosa hasta agrietada, y la presencia de surcos en las plantas de los pies.',
            },
          ],
        },
        {
          title: 'Cálculo Matemático y Limitación Biológica',
          tag: 'Fórmula de estimación en días y semanas',
          kind: 'criteria',
          items: [
            {
              t: 'Fórmula clásica de Capurro somático',
              d: 'Edad gestacional en días = 204 + suma de puntos; dividiendo por 7 días se obtienen las semanas de gestación exactas',
              say: 'La fórmula suma los puntos de los cinco signos a la constante de doscientos cuatro, dividiendo el total por siete para obtener las semanas de gestación del paciente.',
            },
            {
              t: 'Limitación: Inexacto en menores de veintinueve semanas',
              d: 'En prematuros extremos los signos físicos somáticos están indiferenciados, subestimando la edad; usar New Ballard',
              say: 'Su principal limitación es que en prematuros menores de veintinueve semanas los signos físicos están indiferenciados, por lo que en ellos debe usarse el score de New Ballard.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Desglose del score de capurro',
      title: 'Puntuación Somática de Capurro para Estimación de Edad Gestacional',
      head: ['Signo Físico', 'Menor Madurez (0 puntos)', 'Madurez Intermedia', 'Máxima Madurez'],
      rows: [
        {
          cells: ['Forma de la oreja', 'Aplanada sin incurvación', 'Incurvación parcial del borde superior', 'Pabellón totalmente incurvado (24 pts)'],
          say: 'El pabellón auricular pasa de estar plano sin incurvación hasta mostrar un borde superior y lateral completamente enrollado.',
        },
        {
          cells: ['Glándula mamaria', 'No palpable (cero puntos)', 'Nódulo palpable menor a 5 mm', 'Nódulo palpable mayor a 10 mm (15 pts)'],
          say: 'La glándula mamaria pasa de no palparse en el prematuro hasta medir más de diez milímetros en el neonato de término.',
        },
        {
          cells: ['Textura de la piel', 'Muy fina y gelatinosa', 'Fina y lisa con descamación superficial', 'Gruesa apergaminada con grietas (20 pts)'],
          say: 'La piel madura desde un aspecto fino y gelatinoso hasta una epidermis gruesa, apergaminada y con grietas profundas.',
        },
        {
          cells: ['Pliegues plantares', 'Sin pliegues visibles', 'Marcas mal definidas o tercio anterior', 'Surcos profundos en más de la mitad (20 pts)'],
          say: 'Las plantas de los pies carecen de pliegues en prematuros extremos, mostrando surcos profundos en más de la mitad en el recién nacido maduro.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación neuromuscular de new ballard',
      title: 'Score de New Ballard: Madurez Neuromuscular y Física',
      cards: [
        {
          title: 'Los Seis Signos de Madurez Neuromuscular',
          tag: 'Aumento progresivo del tono muscular flexor caudocefálico',
          kind: 'key',
          items: [
            {
              t: 'Postura espontánea y ángulo de la ventana cuadrada',
              d: 'El tono flexor progresa desde extremidades extendidas a flexión total; la flexión de la muñeca disminuye el ángulo a cero grados',
              say: 'El tono muscular progresa en sentido caudocefálico; la flexión pasiva de la muñeca contra el antebrazo forma un ángulo de cero grados en el niño maduro.',
            },
            {
              t: 'Retroceso de brazo, ángulo poplíteo, bufanda y talón a oreja',
              d: 'A mayor edad gestacional aumenta la resistencia al estiramiento articular y disminuye la elasticidad pasiva extrema',
              say: 'Se evalúa la resistencia a la extensión en el retroceso del brazo, el ángulo poplíteo, el signo de la bufanda y la maniobra de talón a oreja.',
            },
          ],
        },
        {
          title: 'Ventajas del Score de New Ballard en Prematurez',
          tag: 'Aplicable desde las veinte semanas de gestación',
          kind: 'criteria',
          items: [
            {
              t: 'Inclusión de signos específicos de prematuridad extrema',
              d: 'Párpados fusionados, ausencia total de lanugo, piel translúcida y cartílago auricular plano con valores negativos',
              say: 'El nuevo Ballard asigna puntuaciones negativas a signos de prematurez extrema como párpados fusionados o piel translúcida, permitiendo datar desde las veinte semanas.',
            },
            {
              t: 'Validación en pacientes en asistencia ventilatoria',
              d: 'Permite estimar la edad gestacional incluso en neonatos gravemente enfermos hospitalizados en intensivo',
              say: 'Es la escala de elección en unidades de cuidados intensivos neonatales para recién nacidos prematuros bajo ventilación mecánica invasiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación cronológica oficial',
      title: 'Clasificación del Recién Nacido según Edad Gestacional en Semanas',
      head: ['Categoría Gestacional', 'Rango de Semanas Cumplidas', 'Características Clínicas', 'Prioridad Asistencial'],
      rows: [
        {
          cells: ['Pretérmino extremo', 'Menor a 28 semanas', 'Inmadurez orgánica crítica y déficit de surfactante', 'Cuidados intensivos neonatales'],
          say: 'El prematuro extremo nace antes de las veintiocho semanas de gestación, presentando un riesgo muy elevado de hemorragia intraventricular.',
        },
        {
          cells: ['Muy pretérmino', '28 a 31 semanas con 6 días', 'Vulnerabilidad pulmonar y termorreguladora severa', 'Ingreso en unidad intensiva neonatal'],
          say: 'Los recién nacidos muy prematuros nacen entre las veintiocho y treinta y una semanas, requiriendo soporte ventilatorio y nutrición parenteral.',
        },
        {
          cells: ['Pretérmino moderado a tardío', '32 a 36 semanas con 6 días', 'Aspecto similar a término pero inmadurez metabólica', 'Riesgo de hipoglicemia y dificultad'],
          say: 'El prematuro tardío nace entre las treinta y cuatro y treinta y seis semanas, aparentando vigor pero con alto riesgo de hipoglicemia e ictericia.',
        },
        {
          cells: ['Término completo', '39 a 40 semanas con 6 días', 'Madurez óptima de todos los órganos y sistemas', 'Alojamiento conjunto y lactancia'],
          say: 'El recién nacido de término completo nace entre las treinta y nueve y cuarenta semanas, teniendo la menor morbimortalidad perinatal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Somatometría y curvas de crecimiento',
      title: 'Clasificación Ponderal: Pequeño, Adecuado y Grande para Edad',
      cards: [
        {
          title: 'Definiciones según Percentiles en Curvas Nacionales',
          tag: 'Curvas de Alarcón y Pittaluga utilizadas en Chile',
          kind: 'key',
          items: [
            {
              t: 'Pequeño para la Edad Gestacional (PEG): Menor al percentil 10',
              d: 'Peso de nacimiento situado bajo el percentil 10 de la curva de referencia para su edad gestacional y sexo',
              say: 'Pasemos ahora a la clasificación ponderal en las curvas chilenas. Consideramos pequeño para la edad gestacional a todo recién nacido cuyo peso se ubica por debajo del percentil diez.',
            },
            {
              t: 'Adecuado para la Edad Gestacional (AEG): Percentil 10 a 90',
              d: 'Peso de nacimiento comprendido entre los percentiles 10 y 90 para su respectiva edad gestacional',
              say: 'El adecuado para la edad gestacional es aquel cuyo peso se sitúa entre el percentil diez y el percentil noventa para su edad gestacional.',
            },
            {
              t: 'Grande para la Edad Gestacional (GEG): Mayor al percentil 90',
              d: 'Peso de nacimiento que sobrepasa el percentil 90 de las curvas de crecimiento intrauterino',
              say: 'Se clasifica como grande para la edad gestacional al neonato cuyo peso supera el percentil noventa para su edad gestacional y sexo.',
            },
          ],
        },
        {
          title: 'La Regla del Cruce Diagnóstico Obligatorio',
          tag: 'Siempre combinar edad gestacional con adecuación de peso',
          kind: 'criteria',
          items: [
            {
              t: 'Diagnóstico doble e inseparable en neonatología',
              d: 'Ejemplo: Pretérmino PEG, Pretérmino GEG, Término AEG; nunca usar solo el peso aislado para definir madurez',
              say: 'En neonatología es una regla de oro formular siempre un diagnóstico cruzado: señalar si es de término o prematuro y añadir si es pequeño, adecuado o grande para su edad.',
            },
            {
              t: 'El error de catalogar solo por peso absoluto',
              d: 'Un niño de 2.800 gramos a las 35 semanas es prematuro GEG, no un recién nacido de término de bajo peso',
              say: 'Jamás juzguen la madurez solo por el peso absoluto: un neonato de dos mil ochocientos gramos a las treinta y cinco semanas es un prematuro grande para su edad.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Fisiopatología del crecimiento fetal',
      title: 'Restricción del Crecimiento Intrauterino: Simétrico versus Asimétrico',
      cards: [
        {
          title: 'RCIU Tipo I Simétrico (Precoz o Intrínseco)',
          tag: 'Afecta de forma homogénea peso, talla y perímetro craneano',
          kind: 'alert',
          items: [
            {
              t: 'Inicio en el primer o segundo trimestre por noxa temprana',
              d: 'Aneuploidías cromosómicas (trisomías 18 o 13), infecciones congénitas TORCH o exposición a tóxicos graves',
              say: 'El crecimiento intrauterino restringido simétrico se origina por agresiones tempranas como infecciones del complejo TORCH o anomalías cromosómicas.',
            },
            {
              t: 'Índice ponderal normal pero menor potencial de crecimiento',
              d: 'Microcefalia proporcional; menor número total de células fetales con pronóstico neurológico y cognitivo desfavorable',
              say: 'En el tipo simétrico todos los parámetros biométricos están disminuidos armónicamente, existiendo una reducción del número total de neuronas con peor pronóstico.',
            },
          ],
        },
        {
          title: 'RCIU Tipo II Asimétrico (Tardío o Placentario)',
          tag: 'Preservación relativa del perímetro cefálico y longitud',
          kind: 'key',
          items: [
            {
              t: 'Inicio en el tercer trimestre por falla útero-placentaria',
              d: 'Preeclampsia, hipertensión arterial materna, infartos placentarios o patología vascular materna crónica',
              say: 'El tipo asimétrico se desata en el tercer trimestre debido a insuficiencia placentaria materna, habitualmente secundaria a preeclampsia o hipertensión crónica.',
            },
            {
              t: 'Mecanismo de redistribución de flujo (Brain sparing)',
              d: 'El feto redistribuye el flujo hacia cerebro, miocardio y suprarrenales a expensas de hígado y tejido graso; cabeza normal con cuerpo enflaquecido',
              say: 'El feto activa un mecanismo de ahorro cerebral redistribuyendo el oxígeno hacia el encéfalo y corazón a expensas del hígado y la grasa, naciendo con cabeza normal y cuerpo adelgazado.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgos del recién nacido peg',
      title: 'Complicaciones Específicas del Neonato Pequeño para la Edad',
      cards: [
        {
          title: 'Complicación Cardinal: Hipoglicemia Precoz',
          tag: 'La emergencia metabólica número uno en el neonato PEG',
          kind: 'alert',
          items: [
            {
              t: 'Depósitos mínimos de glucógeno hepático y grasa parda',
              d: 'La insuficiencia placentaria impide almacenar reservas energéticas; agotan la glucosa en las primeras 2 a 4 horas de vida',
              say: 'Los recién nacidos pequeños para la edad gestacional nacen con reservas hepáticas mínimas de glucógeno. Al cortarse el cordón umbilical agotan su glucosa rápidamente.',
            },
            {
              t: 'Riesgo inminente de daño neuronal hipoglicémico',
              d: 'Glicemia menor a 45 mg/dL en las primeras horas exige corrección activa inmediata para evitar crisis y secuelas cognitivas',
              say: 'Cifras de glicemia menores a cuarenta y cinco miligramos por decilitro pueden causar convulsiones y daño cortical irreversible si no se tratan precozmente.',
            },
          ],
        },
        {
          title: 'Hipotermia y Policitemia Neonatal en el PEG',
          tag: 'Trastornos adaptativos por escasez de tejido adiposo e hipoxia',
          kind: 'key',
          items: [
            {
              t: 'Hipotermia por escasa grasa parda y gran superficie corporal',
              d: 'Pérdida acelerada de calor por radiación y evaporación; incapacidad de generar termogénesis química eficaz',
              say: 'La carencia de panículo adiposo y grasa parda favorece el enfriamiento rápido, desatando vasoconstricción periférica y mayor consumo de glucosa.',
            },
            {
              t: 'Policitemia por estímulo crónico de eritropoyetina fetal',
              d: 'La hipoxia tisular intrauterina prolongada estimula la eritropoyesis fetal, elevando el hematocrito sobre el sesenta y cinco por ciento',
              say: 'La hipoxemia crónica intrauterina estimula la síntesis excesiva de eritropoyetina, generando poliglobulia con hematocrito venoso sobre sesenta y cinco por ciento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgos del recién nacido geg',
      title: 'Complicaciones Específicas del Neonato Grande para la Edad',
      cards: [
        {
          title: 'Hijo de Madre Diabética: Hiperinsulinismo Fetal',
          tag: 'Fisiopatología del exceso de glucosa materna',
          kind: 'alert',
          items: [
            {
              t: 'Paso continuo de glucosa e hiperplasia de islotes fetales',
              d: 'La glucosa materna atraviesa libremente la placenta pero la insulina no; el páncreas fetal responde con hiperplasia masiva de células beta',
              say: 'La hiperglicemia materna transfiere glucosa constante al feto, cuyo páncreas responde con hiperplasia de células beta y secreción masiva de insulina.',
            },
            {
              t: 'Hipoglicemia de rebote inmediata tras el parto',
              d: 'Al clampear el cordón cesa el aporte de glucosa materna pero persiste la hiperinsulinemia fetal, desplomando la glicemia en las primeras horas',
              say: 'Al pinzar el cordón se corta bruscamente la entrada de azúcar materna mientras persisten niveles altísimos de insulina fetal, desatando una severa hipoglicemia de rebote.',
            },
          ],
        },
        {
          title: 'Trauma Obstétrico y Comorbilidades Sistémicas',
          tag: 'Distocias mecánicas y alteraciones cardiorrespiratorias',
          kind: 'criteria',
          items: [
            {
              t: 'Traumatismo del parto: Distocia de hombros y fracturas',
              d: 'Riesgo elevado de fractura de clavícula, elongación del plexo braquial con parálisis de Erb-Duchenne y cefalohematoma',
              say: 'La macrosomía predispone a distocia de hombros durante el parto vaginal, con riesgo de fractura clavicular y parálisis del plexo braquial.',
            },
            {
              t: 'Miocardiopatía hipertrófica septal e hiperbilirrubinemia',
              d: 'El depósito de glucógeno engruesa el tabique interventricular; la policitemia favorece la destrucción masiva de glóbulos rojos',
              say: 'El hiperinsulinismo engruesa el tabique interventricular cardíaco y la poliglobulia asociada incrementa el riesgo de hiperbilirrubinemia severa.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Protocolo de vigilancia metabólica',
      title: 'Monitorización Protocolizada de Glicemia en el Recién Nacido en Riesgo',
      nodes: [
        { id: 'nac', col: 0, row: 1, k: 'start', t: 'Nacimiento de PEG o GEG', s: 'Identificación de neonato pequeño o grande para la edad gestacional' },
        { id: 'ali', col: 1, row: 1, k: 'good', t: 'Alimentación precoz al pecho', s: 'Inicio de lactancia materna dentro de la primera hora de vida en sala' },
        { id: 'hgt', col: 2, row: 1, k: 'mech', t: 'Hemoglucotest a las dos horas', s: 'Primer control glicémico capilar antes de la segunda toma de leche' },
        { id: 'ser', col: 3, row: 1, k: 'good', t: 'Controles seriados protocolizados', s: 'Monitoreo a las dos, cuatro, seis, doce y veinticuatro horas de vida' },
        { id: 'int', col: 4, row: 1, k: 'alert', t: 'Intervención si glicemia baja', s: 'Si es menor a cuarenta y cinco mg/dL adelantar toma o indicar suero glucosado EV' },
      ],
      edges: [
        { from: 'nac', to: 'ali', label: 'prevención precoz' },
        { from: 'ali', to: 'hgt', label: 'evaluación preprandial' },
        { from: 'hgt', to: 'ser', label: 'si normal' },
        { from: 'hgt', to: 'int', label: 'si hipoglicemia' },
      ],
      steps: [
        {
          show: ['nac', 'ali', 'hgt'],
          note: 'Identificación del paciente en riesgo y primer control glicémico',
          say: 'Todo recién nacido clasificado como pequeño o grande para la edad gestacional debe iniciar alimentación al pecho materno dentro de la primera hora de vida, realizando el primer control de hemoglucotest a las dos horas de vida antes de la segunda toma.',
        },
        {
          show: ['ser', 'int'],
          note: 'Seguimiento seriado e intervención activa ante hipoglicemia',
          say: 'El protocolo exige controles seriados a las dos, cuatro, seis, doce y veinticuatro horas de vida. Si la glicemia desciende por debajo de cuarenta y cinco miligramos por decilitro se adelanta la toma láctea o se inicia infusión endovenosa de glucosa.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de clasificación y monitoreo',
      title: 'Algoritmo de Clasificación Somatométrica Neonatal y Manejo del Riesgo Metabólico',
      say: 'Examinemos el algoritmo paso a paso para la clasificación somatométrica del recién nacido y la aplicación de las pautas de vigilancia metabólica protocolizada.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.128',
      title: 'Clasificación Cruzada de Edad Gestacional y Peso',
      stem: 'Un recién nacido de sexo masculino nace por parto vaginal a las 35 semanas de gestación con un peso de nacimiento de 2.850 gramos. En las curvas de crecimiento intrauterino nacionales, este peso se sitúa en el percentil 92 para las 35 semanas.',
      question: '¿Cuál es la clasificación correcta del paciente?',
      options: [
        { letter: 'A', text: 'Recién nacido de término PEG' },
        { letter: 'B', text: 'Recién nacido de término AEG' },
        { letter: 'C', text: 'Recién nacido pretérmino GEG' },
        { letter: 'D', text: 'Recién nacido pretérmino AEG' },
        { letter: 'E', text: 'Recién nacido postérmino GEG' },
      ],
      correct: 'C',
      explanation: 'La edad gestacional del paciente es de 35 semanas, lo que corresponde a Pretérmino o Prematuro (< 37 semanas completas). Su peso de nacimiento (2.850 gramos) se sitúa en el percentil 92 para su edad gestacional en las curvas nacionales, lo que se encuentra sobre el percentil 90 (> P90), definiendo la condición de Grande para la Edad Gestacional (GEG). Por tanto, la clasificación cruzada correcta e indivisible es Recién Nacido Pretérmino GEG. No es de término (que exige 37 semanas) ni es AEG (que va de P10 a P90).',
      say: {
        stem: 'Recién nacido de sexo masculino de treinta y cinco semanas con peso de dos mil ochocientos cincuenta gramos ubicado en el percentil noventa y dos de las curvas.',
        question: '¿Cuál es la clasificación correcta del paciente?',
        options: 'La opción A término pequeño para la edad gestacional. La B término adecuado. La C recién nacido pretérmino grande para la edad gestacional. La D pretérmino adecuado. La E postérmino grande. Cruza la edad gestacional con el percentil de peso. Piénsalo.',
        answer: 'La respuesta correcta es la C. Nació a las treinta y cinco semanas lo que define pretérmino, y su peso sobre el percentil noventa define grande para la edad gestacional.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.128',
      title: 'Complicación Metabólica Cardinal en el Neonato PEG',
      stem: '¿Cuál es la complicación metabólica más frecuente y de mayor riesgo que debe monitorizarse de forma protocolizada y precoz en un recién nacido clasificado como Pequeño para la Edad Gestacional (PEG)?',
      options: [
        { letter: 'A', text: 'Hiperglicemia cetósica' },
        { letter: 'B', text: 'Hipoglicemia asintomática o sintomática por escasa reserva de glucógeno hepático' },
        { letter: 'C', text: 'Hipernatremia severa por deshidratación' },
        { letter: 'D', text: 'Hipocalcemia tardía por hipoparatiroidismo' },
        { letter: 'E', text: 'Hiperpotasemia con arritmias ventriculares' },
      ],
      correct: 'B',
      explanation: 'Los recién nacidos pequeños para la edad gestacional (PEG) presentan un volumen hepático disminuido y reservas mínimas de glucógeno y tejido adiposo como consecuencia de la insuficiencia placentaria crónica intrauterina. Al nacer y suspenderse el flujo continuo de glucosa materna por el corte de cordón, agotan rápidamente sus escasos depósitos energéticos en las primeras 2 a 4 horas de vida, teniendo un riesgo sumamente elevado de presentar hipoglicemia (< 45 mg/dL), lo que obliga a la monitorización estricta con hemoglucotest seriado y alimentación láctea precoz.',
      say: {
        stem: 'Pregunta sobre la complicación metabólica más frecuente y peligrosa a monitorizar de forma precoz en un recién nacido pequeño para la edad gestacional.',
        question: '¿Cuál es la complicación metabólica más frecuente y de mayor riesgo en el recién nacido PEG?',
        options: 'La opción A hiperglicemia cetósica. La B hipoglicemia asintomática o sintomática por escasa reserva de glucógeno hepático. La C hipernatremia severa. La D hipocalcemia tardía. La E hiperpotasemia con arritmias. Recuerda los depósitos hepáticos fetales. Piénsalo.',
        answer: 'La respuesta correcta es la B. La hipoglicemia precoz por depleción de los depósitos hepáticos de glucógeno es la complicación metabólica cardinal del recién nacido PEG.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Somatometría Neonatal',
      cards: [
        {
          title: 'Evaluación y Diagnóstico Indivisible',
          tag: 'Principios de nomenclatura y registro clínico',
          kind: 'key',
          items: [
            {
              t: 'Clasificación siempre cruzada y en percentiles',
              d: 'Nombrar siempre semanas de gestación y percentil de peso: PEG menor a P10, AEG entre P10 y P90, GEG mayor a P90',
              say: 'Formulen siempre la clasificación combinada señalando la edad gestacional y la adecuación de peso según los percentiles diez y noventa de las curvas.',
            },
            {
              t: 'Capurro somático en mayores de veintinueve semanas',
              d: 'Cinco signos somáticos con constante de 204; en prematuros extremos de 20 a 28 semanas usar siempre New Ballard',
              say: 'Apliquen el score de Capurro somático en recién nacidos de más de veintinueve semanas y reserven el score de New Ballard para los prematuros extremos.',
            },
          ],
        },
        {
          title: 'Vigilancia Metabólica de Pequeños y Grandes',
          tag: 'Monitoreo de hipoglicemia a pie de cuna',
          kind: 'alert',
          items: [
            {
              t: 'Hipoglicemia en el PEG por depleción de glucógeno',
              d: 'El neonato PEG tiene hígado pequeño y grasa mínima; requiere alimentación en la primera hora y hemoglucotest seriado',
              say: 'Recuerden que el neonato pequeño para la edad gestacional carece de depósitos de glucógeno, necesitando alimentación precoz y controles de glicemia.',
            },
            {
              t: 'Hipoglicemia en el GEG por hiperinsulinismo fetal',
              d: 'El hijo de madre diabética sufre hiperplasia de células beta; al cortar el cordón la insulina alta desploma la glicemia',
              say: 'Tengan presente que el recién nacido grande sufre hiperinsulinismo de rebote. Si te llevas una sola idea de hoy: clasifica siempre cruzando semanas y percentil de peso, y vigila la glicemia tanto en el pequeño como en el grande. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Clasificación Somatométrica Neonatal y Protocolo de Vigilancia Metabólica',
    root: N(
      'start',
      'Recién Nacido en Sala de Partos: Determinación de Semanas de Gestación y Peso',
      'Correlación entre FUR confiable o ecografía del primer trimestre, y confirmación con Capurro o New Ballard',
      'Iniciamos el abordaje determinando con exactitud la edad gestacional y pesando al recién nacido en la balanza de atención inmediata.',
      [
        'Evaluación de la Edad Gestacional en Semanas Cumplidas',
        N(
          'q',
          '¿Cuál es la edad gestacional cronológica confirmada del recién nacido?',
          'Estratificación en pretérmino, término o postérmino',
          'Clasificamos la edad gestacional en pretérmino, término completo o postérmino.',
          [
            'Menor a 37 semanas completas de gestación (Menor a 37+0 semanas)',
            N(
              'alert',
              'Clasificación Cronológica: Recién Nacido Pretérmino (Prematuro)',
              'Extremo (< 28 sem), muy pretérmino (28 a 31+6 sem), moderado a tardío (32 a 36+6 sem) · Riesgo de inmadurez pulmonar y metabólica',
              'Si nació antes de las treinta y siete semanas completas se clasifica como recién nacido pretérmino.',
            ),
          ],
          [
            'Entre 37 semanas y 41 semanas con 6 días de gestación',
            N(
              'ok',
              'Clasificación Cronológica: Recién Nacido de Término',
              'Término precoz (37 a 38+6 sem), término completo (39 a 40+6 sem) o término tardío (41 a 41+6 sem) · Madurez biológica alcanzada',
              'Si nació entre las treinta y siete y cuarenta y una semanas con seis días se clasifica como recién nacido de término.',
            ),
          ],
          [
            'Mayor o igual a 42 semanas completas de gestación (42+0 semanas o más)',
            N(
              'alert',
              'Clasificación Cronológica: Recién Nacido Postérmino',
              'Riesgo de insuficiencia placentaria senil, oligohidramnios, aspiración de meconio y piel apergaminada',
              'Si sobrepasa las cuarenta y dos semanas completas se cataloga formalmente como recién nacido postérmino.',
            ),
          ],
        ),
      ],
      [
        'Cruce con el Peso de Nacimiento en Curvas de Crecimiento Intrauterino',
        N(
          'q',
          '¿En qué percentil de las curvas nacionales se sitúa el peso de nacimiento?',
          'Asignación ponderal cruzada: Pequeño (PEG), Adecuado (AEG) o Grande (GEG)',
          'Ubicamos el peso en las curvas de crecimiento para clasificarlo en percentiles.',
          [
            'Peso menor al percentil 10 (< P10 para edad y sexo): Neonato PEG',
            N(
              'alert',
              'Pequeño para la Edad Gestacional: Protocolo de Hipoglicemia e Hipotermia',
              'Lactancia materna dentro de la primera hora de vida · Hemoglucotest seriado a las 2, 4, 6, 12 y 24 horas · Abrigamiento reforzado · Vigilar hematocrito',
              'El recién nacido pequeño para la edad gestacional exige alimentación en la primera hora y monitoreo seriado de hemoglucotest.',
            ),
          ],
          [
            'Peso entre percentil 10 y percentil 90 (P10 a P90): Neonato AEG',
            N(
              'ok',
              'Adecuado para la Edad Gestacional: Cuidados Habituales y Alojamiento Conjunto',
              'Lactancia materna a libre demanda · Control térmico estándar en sala de puerperio · No requiere monitoreo glicémico de rutina si está asintomático',
              'El recién nacido adecuado para su edad mantiene lactancia a libre demanda y cuidados estándar sin pruebas de glucosa de rutina.',
            ),
          ],
          [
            'Peso mayor al percentil 90 (> P90 para edad y sexo): Neonato GEG',
            N(
              'alert',
              'Grande para la Edad Gestacional: Pesquisa de Hiperinsulinismo y Trauma',
              'Hemoglucotest seriado por riesgo de hipoglicemia de rebote · Examen físico minucioso: descartar fractura clavicular y parálisis de Erb-Duchenne · Evaluar bilirrubina',
              'El recién nacido grande para su edad requiere hemoglucotest por hiperinsulinismo y descarte clínico de traumatismos del parto.',
            ),
          ],
        ),
      ],
    ),
  },
};
