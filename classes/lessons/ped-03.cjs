// Clase 18.03 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Calendario oficial PNI Chile 2026, hitos de los 12 y 18 meses, vacunas de virus vivos versus inactivadas, anticuerpo monoclonal nirsevimab y contraindicaciones reales',
      say: 'Bienvenidos a la clase del Programa Nacional de Inmunizaciones de Chile, una de las políticas sanitarias más emblemáticas y evaluadas en el examen EUNACOM. En esta sesión revisaremos la composición exacta del calendario obligatorio nacional, memorizaremos los esquemas de vacunación por edades, comprenderemos el rol del anticuerpo monoclonal nirsevimab contra virus respiratorio sincicial y desmitificaremos las falsas contraindicaciones. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología inmunológica',
      title: 'Cronología de Protección Inmunológica en la Infancia',
      nodes: [
        { id: 'neo', col: 0, row: 1, k: 'start', t: 'Recién nacido', s: 'BCG intradérmica y Hepatitis B monovalente en las primeras veinticuatro horas' },
        { id: 'pri', col: 1, row: 1, k: 'mech', t: 'Dos, cuatro y seis meses', s: 'Hexavalente inyectable (DTPa-Hib-HB-VIP) y Neumococo conjugado en muslos' },
        { id: 'año', col: 2, row: 1, k: 'effect', t: 'Hito del año (12 meses)', s: 'Tresvírica viva (SRP), Meningocócica ACWY y refuerzo de Neumococo' },
        { id: 'die', col: 3, row: 1, k: 'good', t: 'Dieciocho meses', s: 'Cuarta dosis de Hexavalente, Hepatitis A inactivada y primera dosis de Varicela' },
      ],
      edges: [
        { from: 'neo', to: 'pri', label: 'dos meses' },
        { from: 'pri', to: 'año', label: 'doce meses' },
        { from: 'año', to: 'die', label: 'dieciocho meses' },
      ],
      steps: [
        {
          show: ['neo', 'pri'],
          note: 'Inmunización temprana contra patógenos invasores letales',
          say: 'La protección comienza en la sala de partos con la vacuna contra tuberculosis y hepatitis B, continuándose a los dos, cuatro y seis meses con la vacuna hexavalente acelular y el antígeno neumocócico para proteger las vías respiratorias y el torrente sanguíneo de infecciones bacterianas invasoras.',
        },
        {
          show: ['año', 'die'],
          note: 'Consolidación con virus atenuados y refuerzos bacterianos',
          say: 'Al cumplir el año de vida se introducen los virus vivos atenuados de la tresvírica junto al meningococo conjugado, y a los dieciocho meses se refuerza la hexavalente completando la protección con hepatitis A y la primera dosis de vacuna viva contra varicela.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer semestre de vida',
      title: 'Inmunizaciones del Recién Nacido y Lactante Menor (0 a 6 Meses)',
      cards: [
        {
          title: 'Vacunas del Recién Nacido en Maternidad',
          tag: 'Primeras veinticuatro horas de vida',
          kind: 'key',
          items: [
            {
              t: 'Vacuna BCG intradérmica en brazo izquierdo',
              d: 'Previene formas graves meníngea y miliar de tuberculosis; requiere peso mínimo de 2.000 g',
              say: 'La vacuna de bacilo de Calmette Guerin se administra por vía intradérmica estricta en el brazo izquierdo antes del alta de maternidad para prevenir formas diseminadas y meníngeas graves de tuberculosis en recién nacidos con peso igual o mayor a dos mil gramos.',
            },
            {
              t: 'Vacuna Hepatitis B monovalente intramuscular',
              d: 'Primera dosis en las primeras 12 a 24 horas para prevenir transmisión vertical perinatal',
              say: 'La primera dosis de hepatitis B monovalente se inyecta por vía intramuscular en la cara anterolateral del muslo durante las primeras doce a veinticuatro horas de vida, previniendo eficazmente la transmisión vertical perinatal y el estado de portador crónico.',
            },
          ],
        },
        {
          title: 'Esquema a los 2, 4 y 6 Meses de Vida',
          tag: 'Hexavalente y Neumococo conjugado',
          kind: 'criteria',
          items: [
            {
              t: 'Vacuna Hexavalente acelular (DTPa-Hib-HB-VIP)',
              d: 'Se administra a los 2, 4 y 6 meses; contiene toxoides, antígenos acelulares y virus polio inactivado',
              say: 'A los dos, cuatro y seis meses de vida se aplica la vacuna hexavalente acelular, que protege contra difteria, tétanos, tos convulsiva acelular, influenza tipo b, hepatitis B y poliomielitis inactivada inyectable, eliminando el riesgo de polio posvacunal asociado a la antigua formulación oral.',
            },
            {
              t: 'Vacuna Neumocócica conjugada a los 2 y 4 meses',
              d: 'Protege contra neumonías y meningitis invasivas por neumococo; prematuros reciben 3.ª dosis a los 6 meses',
              say: 'La vacuna neumocócica conjugada se administra a los dos y cuatro meses en el muslo contralateral, confiriendo alta protección contra bacteriemia, meningitis y neumonía invasora; los prematuros extremos reciben una tercera dosis primaria adicional a los seis meses.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hitos mayores de vacunación',
      title: 'Hitos Inmunológicos de los 12 y 18 Meses de Vida',
      cards: [
        {
          title: 'El Hito del Año de Vida (12 Meses)',
          tag: 'Tresvírica, Meningocócica y Neumococo',
          kind: 'alert',
          items: [
            {
              t: 'Vacuna Tresvírica (SRP) y Meningococo ACWY',
              d: 'Tresvírica: virus vivos atenuados de sarampión, rubéola y parotiditis; Meningococo conjugado',
              say: 'Al cumplir doce meses se administran la vacuna tresvírica de virus vivos atenuados contra sarampión, rubéola y parotiditis por vía subcutánea, junto a la vacuna meningocócica conjugada tetravalente contra los serogrupos A, C, W ciento treinta y cinco e Y.',
            },
            {
              t: 'Refuerzo de Vacuna Neumocócica conjugada',
              d: 'Dosis de refuerzo en el muslo contralateral para consolidar títulos de anticuerpos duraderos',
              say: 'En el mismo control de los doce meses se inyecta la dosis de refuerzo de la vacuna antineumocócica conjugada en la extremidad contralateral, garantizando títulos elevados y duraderos de anticuerpos séricos protectores.',
            },
          ],
        },
        {
          title: 'El Hito de los 18 Meses (Año y Medio)',
          tag: 'Hexavalente, Hepatitis A y Varicela',
          kind: 'key',
          items: [
            {
              t: 'Cuarta dosis de Hexavalente y Hepatitis A',
              d: 'Hexavalente refuerzo intramuscular y vacuna inactivada monovalente contra Hepatitis A',
              say: 'A los dieciocho meses el lactante recibe el cuarto refuerzo intramuscular de la vacuna hexavalente acelular y la primera dosis de vacuna inactivada contra la hepatitis A, confiriendo inmunidad sólida contra brotes entéricos en salas cuna.',
            },
            {
              t: 'Primera dosis de Vacuna contra Varicela',
              d: 'Virus vivo atenuado por vía subcutánea; la segunda dosis se programa a los 36 meses (3 años)',
              say: 'También a los dieciocho meses se administra la primera dosis de vacuna viva atenuada contra la varicela por vía subcutánea, programándose su segunda dosis de consolidación a los tres años cumplidos en el control preescolar.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Vacunación escolar e innovaciones',
      title: 'Vacunación Escolar e Hito Sanitario del Nirsevimab',
      cards: [
        {
          title: 'Esquema de Vacunación en Etapa Escolar',
          tag: 'Primero, cuarto, quinto y octavo básico',
          kind: 'criteria',
          items: [
            {
              t: 'Primero Básico (6 años) y Octavo Básico (13 años)',
              d: '1.° Básico: 2.ª dosis de Tresvírica y dTpa acelular; 8.° Básico: refuerzo de toxoide dTpa',
              say: 'En primero básico se aplica la segunda dosis de consolidación de tresvírica junto al toxoide diftérico y tos convulsiva acelular. En octavo básico se administra un refuerzo de esta misma formulación para prolongar la inmunidad durante la adolescencia.',
            },
            {
              t: 'Cuarto y Quinto Básico: Virus Papiloma Humano (VPH)',
              d: 'Vacuna nonavalente administrada a niñas y niños en dos dosis para prevenir cánceres asociados a VPH',
              say: 'En cuarto y quinto básico se administra la vacuna nonavalente contra el virus del papiloma humano a todas las niñas y niños, protegiendo de forma cruzada contra nueve genotipos oncogénicos y verrugas anogenitales antes del inicio de la actividad sexual.',
            },
          ],
        },
        {
          title: 'Anticuerpo Monoclonal Nirsevimab contra VRS',
          tag: 'Inmunización pasiva universal de vanguardia',
          kind: 'key',
          items: [
            {
              t: 'Nirsevimab no es vacuna, es un anticuerpo monoclonal',
              d: 'Anticuerpo monoclonal IgG1 humanizado de vida media extendida dirigido contra la proteína F de fusión',
              say: 'Nirsevimab no constituye una vacuna activa tradicional sino un anticuerpo monoclonal recombinante humanizado de vida media prolongada que neutraliza directamente la proteína de fusión del virus respiratorio sincicial evitando su entrada a la célula.',
            },
            {
              t: 'Indicación universal a recién nacidos y lactantes',
              d: 'Dosis única intramuscular para todos los nacidos y lactantes menores de 6 meses previa al invierno',
              say: 'Se administra como estrategia de inmunización pasiva universal a todos los recién nacidos en maternidades y lactantes menores de seis meses que enfrentan su primera temporada de alta circulación invernal, reduciendo las hospitalizaciones en más del ochenta por ciento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad en vacunación',
      title: 'Contraindicaciones Reales versus Falsas Contraindicaciones',
      cards: [
        {
          title: 'Contraindicaciones Reales de Vacunas Vivas',
          tag: 'BCG, Tresvírica y Varicela',
          kind: 'alert',
          items: [
            {
              t: 'Inmunodeficiencias celulares graves y quimioterapia',
              d: 'Riesgo de replicación y diseminación sistémica con enfermedad vacunal letal en inmunosuprimidos',
              say: 'Las vacunas de microorganismos vivos atenuados como tresvírica, varicela y bacilo de Calmette Guerin están formalmente contraindicadas en pacientes con inmunodeficiencias congénitas severas, leucemias activas o quimioterapia por riesgo de enfermedad vacunal invasiva letal.',
            },
            {
              t: 'Embarazo como contraindicación absoluta de virus vivos',
              d: 'Por riesgo teórico de infección congénita transplacentaria; vacunar postparto inmediato',
              say: 'El embarazo representa una contraindicación absoluta e inviolable para recibir vacunas de virus vivos atenuados, debido al riesgo teórico de daño teratogénico o infección fetal transplacentaria, recomendándose su administración en el puerperio inmediato.',
            },
          ],
        },
        {
          title: 'Falsas Contraindicaciones Clásicas de Examen',
          tag: 'Errores frecuentes en EUNACOM',
          kind: 'criteria',
          items: [
            {
              t: 'Infección respiratoria leve y fiebre baja',
              d: 'Resfrío común, coriza, diarrea leve o fiebre menor a 38.5 grados NO contraindican la vacunación',
              say: 'Un cuadro respiratorio alto banal, catarro, diarrea leve autolimitada o febrícula no constituyen jamás motivo médico para diferir las vacunas del programa; suspender la cita genera oportunidades perdidas de inmunización y desprotección comunitaria.',
            },
            {
              t: 'Tratamiento antibiótico y prematurez cronológica',
              d: 'Los antibióticos no interfieren con vacunas; prematuros se vacunan por edad cronológica postnatal',
              say: 'El uso de antibióticos sistémicos no interfiere con la síntesis de anticuerpos vacunales, y los recién nacidos prematuros deben vacunarse estrictamente por su edad cronológica desde el nacimiento, sin aplicar la corrección por semanas de gestación.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen estatutario',
      title: 'Calendario Oficial de Vacunación Infantil PNI Chile 2026',
      head: ['Edad Cronológica', 'Vacunas Administradas', 'Vía de Administración', 'Tipo de Inmunógeno'],
      rows: [
        {
          cells: ['Recién Nacido', 'BCG más Hepatitis B monovalente', 'Intradérmica y muscular', 'Viva atenuada (BCG) y recombinante'],
          say: 'En el recién nacido se administra la vacuna BCG por vía intradérmica para formas miliares y la primera dosis de hepatitis B monovalente intramuscular profunda en el muslo.',
        },
        {
          cells: ['Dos y Cuatro Meses', 'Hexavalente más Neumococo conjugado', 'Intramuscular profunda', 'Inactivadas acelulares y conjugadas'],
          say: 'A los dos y cuatro meses se inyecta la vacuna hexavalente acelular y la vacuna antineumocócica conjugada en extremidades inferiores separadas para inducir títulos bacterianos robustos.',
        },
        {
          cells: ['Seis Meses', 'Tercera dosis de Hexavalente acelular', 'Intramuscular en muslo', 'Inactivada acelular bacteriana y viral'],
          say: 'A los seis meses corresponde la tercera dosis de la vacuna hexavalente acelular, completando el esquema primario del lactante contra seis patógenos invasores prevalentes.',
        },
        {
          cells: ['Doce Meses (1 Año)', 'Tresvírica, Meningococo ACWY y Neumococo', 'Subcutánea e intramuscular', 'Viva atenuada (SRP) y conjugadas'],
          say: 'Al año de vida se aplica la tresvírica de virus vivos atenuados por vía subcutánea junto a las vacunas conjugadas contra meningococo tetravalente y el refuerzo de neumococo.',
        },
        {
          cells: ['Dieciocho Meses', 'Hexavalente, Hepatitis A y Varicela', 'Intramuscular y subcutánea', 'Inactivadas y viva atenuada (Varicela)'],
          say: 'A los dieciocho meses se refuerza la hexavalente intramuscularmente y se aplican la vacuna de hepatitis A inactivada y la primera dosis de varicela viva atenuada.',
        },
        {
          cells: ['Tres Años y Escolar', 'Varicela segunda dosis, Tresvírica y dTpa', 'Subcutánea e intramuscular', 'Viva atenuada y toxoides inactivados'],
          say: 'A los tres años se administra la segunda dosis de varicela, y en la etapa escolar se completan los refuerzos de tresvírica, virus papiloma y toxoide diftérico tetánico acelular.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de vacunación',
      title: 'Algoritmo de Toma de Decisiones y Seguridad en Vacunación Pediátrica',
      say: 'Examinemos el algoritmo clínico para verificar la elegibilidad vacunal, identificar contraindicaciones reales y aplicar los esquemas en atención primaria.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Vacunas Obligatorias del Hito de los 12 Meses',
      stem: 'Un lactante de 12 meses acude al vacunatorio del CESFAM con su carné de salud al día habiendo recibido todas sus vacunas hasta los 6 meses. La madre consulta cuáles son las vacunas que le corresponde recibir en este control.',
      question: '¿Cuáles son las vacunas que le corresponde administrar según el PNI chileno?',
      options: [
        { letter: 'A', text: 'Hexavalente, Hepatitis A y Varicela' },
        { letter: 'B', text: 'Tresvírica, Meningocócica conjugada ACWY y refuerzo Neumocócica conjugada' },
        { letter: 'C', text: 'Tresvírica, Varicela y Hexavalente acelular' },
        { letter: 'D', text: 'Neumocócica conjugada, Hepatitis A y Polio oral bivalente' },
        { letter: 'E', text: 'Meningocócica ACWY, Varicela y Hepatitis B monovalente' },
      ],
      correct: 'B',
      explanation: 'En el Programa Nacional de Inmunizaciones (PNI) de Chile, el hito de los 12 meses de vida contempla exactamente tres vacunas obligatorias: 1) Tresvírica (SRP: sarampión, rubéola y parotiditis, de virus vivos atenuados), 2) Meningocócica conjugada tetravalente contra serogrupos A, C, W-135 e Y, y 3) Refuerzo de Neumocócica conjugada. La Hexavalente (4.ª dosis), la Hepatitis A y la Varicela corresponden al hito de los 18 meses.',
      say: {
        stem: 'Lactante de doce meses que acude al vacunatorio con su calendario completo hasta los seis meses para recibir sus vacunas del año.',
        question: '¿Cuáles son las vacunas que le corresponde administrar según el calendario ministerial chileno?',
        options: 'La opción A propone hexavalente, hepatitis A y varicela. La B tresvírica, meningocócica conjugada y refuerzo neumocócico. La C tresvírica, varicela y hexavalente. La D polio oral y hepatitis A. La E meningocócica y varicela. Analiza cada hito.',
        answer: 'La respuesta correcta es la B. A los doce meses corresponden exactamente tresvírica, meningocócica tetravalente y refuerzo neumocócico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Contraindicación Absoluta de Vacunas en Paciente Inmunodeprimido',
      stem: 'Un niño de 3 años en tratamiento activo con quimioterapia intensa por leucemia linfoblástica aguda es llevado al CESFAM por su madre. Ella refiere que su hijo no tiene puestas las vacunas del año y medio y consulta si pueden administrárselas hoy.',
      question: '¿Cuál de las siguientes vacunas está ABSOLUTAMENTE CONTRAINDICADA en este paciente?',
      options: [
        { letter: 'A', text: 'Vacuna Antineumocócica conjugada' },
        { letter: 'B', text: 'Vacuna contra Hepatitis A inactivada' },
        { letter: 'C', text: 'Vacuna contra la Varicela o Tresvírica' },
        { letter: 'D', text: 'Vacuna Hexavalente acelular' },
        { letter: 'E', text: 'Vacuna contra la Influenza estacional inactivada' },
      ],
      correct: 'C',
      explanation: 'Las vacunas de microorganismos vivos atenuados (Varicela, Tresvírica SRP, BCG y Fiebre Amarilla) están ABSOLUTAMENTE CONTRAINDICADAS en pacientes con inmunodeficiencias congénitas o adquiridas graves y en aquellos bajo terapia inmunosupresora citostática o quimioterapia, debido al riesgo inminente de replicación descontrolada del patógeno vacunal con desarrollo de enfermedad sistémica invasiva potencialmente letal. Las vacunas inactivadas, de toxoides o conjugadas (Neumococo, Hepatitis A, Hexavalente) son seguras, aunque pueden tener menor inmunogenicidad.',
      say: {
        stem: 'Niño de tres años en quimioterapia activa por leucemia que consulta por la administración de vacunas pendientes.',
        question: '¿Cuál de las siguientes vacunas está absolutamente contraindicada en este paciente oncológico?',
        options: 'La opción A propone antineumocócica conjugada. La B hepatitis A inactivada. La C vacuna contra varicela o tresvírica. La D hexavalente acelular. La E influenza inactivada. Recuerda el tipo de inmunógeno.',
        answer: 'La respuesta correcta es la C. Las vacunas vivas atenuadas como varicela o tresvírica están estrictamente prohibidas en inmunosuprimidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2018 · Pregunta 101',
      title: 'Manejo de Niño sin Vacuna BCG y Contacto de Tuberculosis',
      stem: 'Un niño de 8 años, inmigrante, que no ha recibido la vacuna BCG en su país de origen, se encuentra asintomático y con examen físico normal. Su padre está siendo tratado con esquema antibiótico para tuberculosis pulmonar en su país de origen.',
      question: '¿Cuál es la conducta inicial más adecuada para este paciente?',
      options: [
        { letter: 'A', text: 'Solicitar prueba cutánea de tuberculina (PPD)' },
        { letter: 'B', text: 'Solicitar radiografía de tórax de control' },
        { letter: 'C', text: 'Solicitar baciloscopías seriadas de expectoración' },
        { letter: 'D', text: 'Iniciar profilaxis primaria inmediata con isoniazida' },
        { letter: 'E', text: 'Administrar la vacuna BCG de inmediato' },
      ],
      correct: 'E',
      explanation: 'En Chile, la vacuna BCG es de administración universal y obligatoria. Ante un niño inmigrante o no vacunado en periodo neonatal que no presenta síntomas respiratorios y tiene examen normal, la normativa ministerial establece la administración de la vacuna BCG para conferir protección contra formas meníngeas y miliares graves. Al encontrarse totalmente asintomático y sin contacto intradomiciliario actual (el padre está en el extranjero), procede la vacunación programada.',
      say: {
        stem: 'Niño de ocho años sin antecedentes de vacuna de tuberculosis que se encuentra asintomático con padre tratado en el extranjero.',
        question: '¿Cuál es la conducta inicial más adecuada para este paciente en el centro de salud?',
        options: 'La opción A plantea prueba de tuberculina. La B radiografía de tórax. La C baciloscopías. La D quimioprofilaxis con isoniazida. La E administrar la vacuna de bacilo de Calmette Guerin. Evalúa la normativa de salud.',
        answer: 'La respuesta correcta es la E. Ante la ausencia de vacuna y sin síntomas actuales de infección, procede administrar la vacuna BCG.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Inmunizaciones Pediátricas PNI',
      cards: [
        {
          title: 'Hitos Clave del Calendario Obligatorio',
          tag: 'Doce y dieciocho meses sin confusión',
          kind: 'key',
          items: [
            {
              t: 'Doce meses: Tresvírica, Meningococo y Neumococo',
              d: 'A los 12 meses: SRP, MenACWY y refuerzo neumocócico; nunca colocar varicela ni hexavalente al año',
              say: 'Graben esta tríada del año de vida para el examen: a los doce meses van tresvírica subcutánea, meningocócica conjugada y neumococo; jamás indiquen varicela ni hexavalente a esa edad bajo ninguna circunstancia.',
            },
            {
              t: 'Dieciocho meses: Hexavalente, Hepatitis A y Varicela',
              d: 'Refuerzo de hexavalente acelular, hepatitis A inactivada y primera dosis de varicela',
              say: 'A los dieciocho meses se aplica el cuarto refuerzo de hexavalente, la vacuna contra hepatitis A y la primera dosis de varicela viva atenuada, cuya segunda dosis se posterga a los tres años.',
            },
          ],
        },
        {
          title: 'Seguridad y Falsas Contraindicaciones',
          tag: 'Virus vivos y prematuridad cronológica',
          kind: 'alert',
          items: [
            {
              t: 'Virus vivos prohibidos en inmunodeprimidos',
              d: 'Tresvírica, Varicela y BCG están formalmente contraindicadas en inmunodeficiencias y embarazo',
              say: 'Las vacunas de virus vivos como tresvírica y varicela están terminantemente prohibidas en pacientes inmunosuprimidos o embarazadas, mientras que las inactivadas y toxoides se pueden inocular con absoluta seguridad.',
            },
            {
              t: 'Prematuros se vacunan por edad postnatal',
              d: 'Se utiliza la edad cronológica desde el nacimiento, sin corregir por semanas de prematurez',
              say: 'Recuerden siempre como regla de oro que los prematuros se vacunan de acuerdo con su edad cronológica real desde el nacimiento, sin aplicar nunca la corrección de semanas de gestación. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Toma de Decisiones y Seguridad en Vacunación Pediátrica',
    root: N(
      'start',
      'Lactante o Niño que Consulta en Vacunatorio de Atención Primaria',
      'Revisión minuciosa del carné de vacunación, edad cronológica exacta y estado de salud actual',
      'Iniciamos la evaluación en el vacunatorio cotejando la edad cronológica del niño con su registro de inmunizaciones.',
      [
        'Paciente con calendario al día que asiste a su hito de edad programado',
        N(
          'q',
          '¿Cuál es la edad cronológica que cumple el paciente en este control?',
          'Selección precisa de las vacunas ministeriales asignadas al hito de desarrollo',
          'Determinamos el grupo etario correspondiente para seleccionar los inmunógenos exactos de la norma ministerial.',
          [
            'Cumple doce meses de vida (un año cumplido)',
            N(
              'ok',
              'Administración del Hito de los 12 Meses',
              'Tresvírica subcutánea más Meningocócica ACWY intramuscular más refuerzo Neumocócica conjugada',
              'A los doce meses indicamos tresvírica subcutánea junto a meningocócica tetravalente y refuerzo neumocócico.',
            ),
          ],
          [
            'Cumple dieciocho meses de vida (un año y medio)',
            N(
              'ok',
              'Administración del Hito de los 18 Meses',
              'Hexavalente acelular intramuscular más Hepatitis A inactivada más primera dosis de Varicela',
              'A los dieciocho meses indicamos refuerzo de hexavalente, hepatitis A inactivada y primera dosis de varicela.',
            ),
          ],
        ),
      ],
      [
        'Presencia de condición médica especial, enfermedad aguda o sospecha de inmunodeficiencia',
        N(
          'q',
          '¿Se trata de una inmunodeficiencia severa o de un cuadro infeccioso agudo intercurrente?',
          'Diferenciación estricta entre contraindicaciones reales y falsas contraindicaciones',
          'Evaluamos si existe compromiso inmunológico grave o si corresponde a un cuadro banale que no impide vacunar.',
          [
            'Inmunodeficiencia celular grave, leucemia, quimioterapia o corticoterapia a dosis altas',
            N(
              'alert',
              'Contraindicación Absoluta de Vacunas de Virus Vivos',
              'Suspender Tresvírica, Varicela y BCG · Administrar únicamente vacunas inactivadas, toxoides y conjugadas',
              'Frente a inmunosupresión suspendemos formalmente vacunas vivas y aplicamos solo inmunógenos inactivados.',
            ),
          ],
          [
            'Resfrío común afebril, diarrea leve, uso de antibióticos o nacimiento prematuro',
            N(
              'do',
              'Falsas Contraindicaciones: VACUNAR SIN POSTERGAR',
              'Explicar seguridad a los cuidadores y administrar todas las vacunas por edad cronológica postnatal',
              'Los resfríos leves y antibióticos son falsas contraindicaciones, debiendo vacunar por edad cronológica sin demoras.',
            ),
          ],
        ),
      ],
    ),
  },
};
