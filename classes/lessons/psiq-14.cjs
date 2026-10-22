// Clase 17.14 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-14). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.09.2.001) no trae preguntas reales. De la búsqueda por tema (agitación, contención, delirium, haloperidol/lorazepam/olanzapina) se usaron:
//   Enero 2023 P130 (agitación verbal y motora: la conducta inicial es contención verbal y ambiental), Agosto 2021 P131 (delirium en Alzheimer hospitalizada: haloperidol en dosis bajas, no benzodiacepinas).
// No usadas por repetir lo mismo o por pertenecer a otra clase: Julio 2013 P68 y Julio 2025 P103 (delirium, ya en neuro-21), Julio 2013 P130 (delirium postoperatorio; la clave marca haloperidol endovenoso y el propio banco duda), Diciembre 2018 P119 y Julio 2013 P168 (solo diagnóstico de delirium),
//   Julio 2025 P92 y Julio 2015 P72 (manía; van en las clases de trastorno bipolar), Diciembre 2025 P72, Enero 2023 P131 y Diciembre 2019 P37 (abstinencia alcohólica; van en psiq-15), Julio 2016 P141 (SNM, psiq-13).
// DESCARTADA: Diciembre 2022 P30 (detenido con agitación y agresión solo verbal: la clave del banco es "contención física"). Contradice el escalonamiento (primero verbal) y el criterio de la clave de Enero 2023 P130. No se enseña.
// Sin pregunta real sobre el esquema intramuscular ni sobre los requisitos de la contención mecánica: dos preguntas del libro como "Caso representativo".
// Cuidado clínico: la contención física es el último recurso, con orden escrita y monitorización; el libro la pone primero en la viñeta ("contención física inmediata") y eso no se enseña como primer paso.
//   La combinación olanzapina intramuscular con benzodiacepina parenteral se enseña como "evitar" (cautela), sin repetir la cifra de 2 horas como regla absoluta. No se usa la escala RASS como regla de contención.
// Imágenes: ninguna (los libros extraídos no traen figuras útiles); se proponen animaciones.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Agitación psicomotora en urgencias: descartar causa orgánica y contención escalonada: verbal, farmacológica y física',
      say: 'Bienvenido. Hoy vemos qué hacer cuando llega a urgencias una persona agitada. Lo primero es entender que la agitación es un síndrome, no un diagnóstico, y que muchas veces tiene una causa médica tratable. Después viene el orden de la contención, que es una escalera: primero palabras, luego fármacos, y la contención física solo al final. Vemos las dosis, una combinación peligrosa que debes evitar, el adulto mayor con delirium y los requisitos legales de la contención.',
    },

    {
      type: 'points',
      kicker: 'Primer paso',
      title: 'Agitación: primero la causa',
      cards: [
        { title: 'Un síndrome, no una enfermedad', tag: 'Concepto', kind: 'key', items: [
          { t: 'Hiperactividad motora con tensión interna', d: 'Riesgo para sí mismo y para otros',
            say: 'La agitación psicomotora es hiperactividad motora desorganizada, con tensión interna, impulsividad y agresividad verbal o física. Pone en riesgo al paciente, al equipo y a terceros. Es un síndrome conductual: detrás hay una causa que hay que buscar.' },
        ] },
        { title: 'Causas orgánicas a descartar', tag: 'Antes de sedar', kind: 'alert', items: [
          { t: 'Hipoglicemia e hipoxia', d: 'Glicemia capilar y oximetría de pulso',
            say: 'Antes de pensar en psiquiatría, se descartan las causas que matan y se corrigen rápido. La hipoglicemia, con una glicemia capilar, y la hipoxia, con la oximetría de pulso. Son dos exámenes de un minuto.' },
          { t: 'TEC, ACV, infección, intoxicación', d: 'Meningitis, sepsis, drogas, abstinencia',
            say: 'También el traumatismo encefalocraneano, el accidente cerebrovascular, la meningitis o encefalitis, la sepsis, y la intoxicación o abstinencia de alcohol y drogas. En el adulto mayor se suman la retención urinaria y el fecaloma.' },
          { t: 'Delirium hiperactivo', d: 'La primera causa que debes descartar',
            say: 'El gran protagonista es el delirium hiperactivo, sobre todo en adultos mayores, operados o con enfermedades médicas. Más adelante lo vemos, porque se trata distinto.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Orgánica o psiquiátrica',
      title: 'Cómo distinguir el origen',
      head: ['Dato', 'Causa orgánica (delirium)', 'Causa psiquiátrica primaria'],
      rows: [
        { cells: ['Conciencia', 'Fluctuante, desorientado', 'Vigil, lúcido, orientado'],
          say: 'La conciencia es la clave. En la causa orgánica fluctúa y el paciente está desorientado en tiempo y espacio. En la psiquiátrica, como un brote psicótico o una manía, está vigil y orientado.' },
        { cells: ['Inicio', 'Agudo; peor de noche', 'Insidioso; antecedentes psiquiátricos'],
          say: 'El inicio es agudo, de horas a días, y empeora en la noche en el delirium. En la causa psiquiátrica es más insidioso y hay antecedentes.' },
        { cells: ['Alucinaciones', 'Visuales o táctiles', 'Auditivas complejas'],
          say: 'Las alucinaciones del delirium son visuales o táctiles, como ver animales o sombras. En la psicosis, son sobre todo auditivas.' },
        { cells: ['Signos vitales', 'Frecuentemente alterados', 'Habitualmente normales'],
          say: 'Los signos vitales suelen estar alterados en la causa orgánica: fiebre, sudor, taquicardia, focalidad neurológica. En la psiquiátrica son normales, salvo la taquicardia del esfuerzo.' },
        { cells: ['Manejo prioritario', 'Tratar la causa médica', 'Contención escalonada y fármacos'],
          say: 'Por eso el manejo cambia. En la orgánica, se trata la causa de base. En la psiquiátrica, se aplica la contención escalonada con antipsicóticos o benzodiacepinas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escalera de contención',
      title: 'Lo menos restrictivo primero',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Persona agitada', s: 'Causa orgánica descartada' },
        { id: 'b', col: 1, row: 2, k: 'good', t: 'Contención verbal y ambiental', s: 'Primer paso obligatorio' },
        { id: 'c', col: 2, row: 1, k: 'mech', t: 'Fármaco por vía oral', s: 'Si acepta' },
        { id: 'd', col: 2, row: 3, k: 'mech', t: 'Fármaco intramuscular', s: 'Si rechaza o es grave' },
        { id: 'e', col: 3, row: 2, k: 'alert', t: 'Contención física', s: 'Último recurso, reglada' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'Falla' }, { from: 'b', to: 'd', label: 'Falla' }, { from: 'c', to: 'e', label: 'Riesgo inminente' }, { from: 'd', to: 'e', label: 'Riesgo inminente' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Primero, palabras',
          say: 'La contención es una escalera, y se parte por el peldaño menos restrictivo. Con la persona agitada y la causa orgánica descartada o en estudio, el primer paso es siempre la contención verbal y ambiental. Eso es lo que preguntó el EUNACOM.' },
        { show: ['c', 'd'], note: 'Si falla, fármacos',
          say: 'Si la desescalada fracasa o hay riesgo inminente de violencia, se pasa a la contención farmacológica. Por vía oral si el paciente colabora, que es la preferida, y por vía intramuscular si rechaza o la agitación es grave.' },
        { show: ['e'], note: 'Último recurso',
          say: 'La contención física mecánica es el último recurso, para evitar un daño inminente cuando todo lo anterior falló. Tiene exigencias estrictas que veremos. Es una medida excepcional, no una forma de manejar la agitación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Nivel uno',
      title: 'Seguridad y desescalada verbal',
      cards: [
        { title: 'Seguridad de la escena', tag: 'Antes de acercarte', kind: 'alert', items: [
          { t: 'No entres solo', d: 'Pide apoyo del equipo',
            say: 'Antes de cualquier contacto, aseguras la escena. Nunca evalúes solo a un paciente agitado, y avisa al equipo.' },
          { t: 'Entre el paciente y la salida', d: 'Puerta abierta, vía de escape libre',
            say: 'Ubícate siempre entre el paciente y la puerta, con la salida libre y la puerta del box abierta. Tu vía de escape es tu seguridad. Y el paciente no debe sentirse acorralado.' },
        ] },
        { title: 'Desescalada verbal', tag: 'Primer paso', kind: 'key', items: [
          { t: 'Voz calmada, baja y firme', d: 'Distancia de dos brazos',
            say: 'Habla con voz calmada, baja y firme. Mantén una distancia de al menos dos brazos, sin movimientos bruscos y sin invadir su espacio.' },
          { t: 'Escuchar y validar sin discutir', d: 'No discutir delirios ni desafiar',
            say: 'Escucha con empatía, valida su malestar, no discutas los delirios y evita una actitud punitiva o desafiante.' },
          { t: 'Ofrecer medicación voluntaria', d: 'Alternativas: él también decide',
            say: 'Y ofrece medicación de forma voluntaria. Participar en la decisión baja la tensión y evita pasos más invasivos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Nivel dos',
      title: 'Contención farmacológica',
      cards: [
        { title: 'Si acepta: vía oral', tag: 'Preferida', kind: 'pharma', items: [
          { t: 'Lorazepam 2 mg', d: 'Ansiolítico y sedante',
            say: 'Si el paciente coopera, la vía oral es la preferida. Una opción es lorazepam dos miligramos.' },
          { t: 'Risperidona 2 mg u olanzapina', d: 'Olanzapina 10 mg, comprimido bucodispersable',
            say: 'La otra es un antipsicótico atípico: risperidona dos miligramos, u olanzapina diez miligramos en comprimido bucodispersable.' },
        ] },
        { title: 'Si rechaza o es grave: intramuscular', tag: 'Esquema clásico', kind: 'pharma', items: [
          { t: 'Haloperidol 5 mg + lorazepam', d: 'Lorazepam 2 a 4 mg; IM, juntos o separados',
            say: 'El esquema clásico es haloperidol cinco miligramos intramuscular más lorazepam dos a cuatro miligramos intramuscular, en la misma jeringa o por separado. Juntos sedan más rápido, permiten dosis menores de cada uno, y la benzodiacepina ayuda a prevenir la distonía aguda por haloperidol.' },
          { t: 'Alternativa: olanzapina o aripiprazol', d: 'Olanzapina 10 mg IM; aripiprazol 9,75 mg IM',
            say: 'La alternativa son los atípicos intramusculares: olanzapina diez miligramos o aripiprazol nueve coma setenta y cinco miligramos. Pero con la olanzapina hay una advertencia importante.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Fármacos',
      title: 'Dosis, ventaja y advertencia',
      head: ['Fármaco', 'Dosis en urgencias', 'Advertencia'],
      rows: [
        { cells: ['Haloperidol IM', '2,5 a 5 mg; máx. 15 a 20 mg/día', 'Distonía aguda; alarga el QTc'],
          say: 'Haloperidol intramuscular, dos coma cinco a cinco miligramos, con máximo de quince a veinte al día. Sedación rápida con poca depresión respiratoria, pero con riesgo de distonía aguda y de alargar el intervalo QT.' },
        { cells: ['Lorazepam IM', '2 a 4 mg; máx. 8 mg/día', 'Evitar en delirium del adulto mayor'],
          say: 'Lorazepam intramuscular, dos a cuatro miligramos, máximo ocho al día. Buena absorción y efecto ansiolítico rápido, pero empeora la confusión en el delirium del adulto mayor.' },
        { cells: ['Haloperidol + lorazepam IM', '5 mg + 2 mg', 'Vigilar saturación y frecuencia respiratoria'],
          say: 'La combinación de cinco miligramos de haloperidol con dos de lorazepam es la elección en la agitación de origen psiquiátrico. Después de darla, se vigilan la saturación y la frecuencia respiratoria.' },
        { cells: ['Olanzapina IM', '10 mg; 5 mg en ancianos', 'No combinar con benzodiacepina parenteral'],
          say: 'Olanzapina intramuscular, diez miligramos, y cinco en adultos mayores. Es eficaz para la hostilidad, pero no se combina con una benzodiacepina parenteral.' },
        { cells: ['Haloperidol en anciano', '0,5 a 1 mg VO o IM', 'Nunca dosis de adulto joven'],
          say: 'Y en el adulto mayor, haloperidol en dosis geriátrica, de medio a un miligramo. Nunca la dosis del adulto joven.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'Una combinación que se evita',
      cards: [
        { title: 'Olanzapina IM con benzodiacepina parenteral', tag: 'Alerta', kind: 'alert', items: [
          { t: 'Riesgo de depresión cardiorrespiratoria', d: 'Hipotensión y sedación excesiva',
            say: 'Dar olanzapina intramuscular junto con una benzodiacepina parenteral, como lorazepam o diazepam intramuscular o endovenoso, se asocia a hipotensión, sedación excesiva y depresión cardiorrespiratoria, con casos fatales descritos.' },
          { t: 'Evitar usarlas juntas', d: 'Si diste olanzapina, espera y monitoriza',
            say: 'Por eso no se asocian. Si ya diste olanzapina intramuscular, esperas y monitorizas antes de agregar una benzodiacepina; el libro propone al menos dos horas. En la práctica, escoge un solo esquema y vigila al paciente.' },
        ] },
        { title: 'La combinación segura', tag: 'Para recordar', kind: 'key', items: [
          { t: 'Haloperidol + lorazepam IM', d: 'Estándar en agitación no orgánica',
            say: 'La combinación respaldada es haloperidol más lorazepam. Si el examen te pregunta qué pareja de fármacos parenterales es la peligrosa, es olanzapina con una benzodiacepina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Nivel tres',
      title: 'Contención física: reglas',
      cards: [
        { title: 'Cuándo y quién', tag: 'Último recurso', kind: 'alert', items: [
          { t: 'Solo si fallan verbal y fármacos', d: 'Para evitar daño inminente',
            say: 'La contención mecánica es una medida excepcional. Solo se usa cuando fracasaron las medidas verbales y farmacológicas y hay un daño físico inminente. Y se retira apenas el paciente se calma.' },
          { t: 'Equipo coordinado de 5 personas', d: 'Bajo la dirección del médico',
            say: 'Se necesita un equipo coordinado de al menos cinco personas, una para la cabeza y una para cada extremidad, dirigido por el médico, con maniobras seguras que no lesionen al paciente.' },
          { t: 'Cuatro puntos en estructura fija', d: 'Nunca a barandas móviles; cabecera 30 a 45°',
            say: 'La sujeción es de cuatro puntos, en muñecas y tobillos, a la estructura fija de la cama y nunca a las barandas móviles. La cabecera queda elevada de treinta a cuarenta y cinco grados para prevenir la aspiración. Nunca boca abajo.' },
        ] },
        { title: 'Ley 21.331', tag: 'Marco legal', kind: 'key', items: [
          { t: 'Orden médica escrita en la ficha', d: 'Justificación, hora de inicio y término',
            say: 'La ley veintiún mil trescientos treinta y uno, de derechos en salud mental, exige una orden médica escrita en la ficha, con la justificación, la hora de inicio y el término previsto. Una indicación solo verbal no basta.' },
          { t: 'Monitoreo cada 15 a 30 minutos', d: 'Signos vitales, saturación, perfusión',
            say: 'Se monitorizan de forma continua los signos vitales y la saturación, y se revisa la perfusión de las extremidades cada quince a treinta minutos. Y se retiran las sujeciones de a una, apenas haya calma.' },
          { t: 'Nunca como castigo ni por comodidad', d: 'Se registra y se revisa cada evento',
            say: 'La contención nunca es un castigo ni una conveniencia del equipo. Es una medida terapéutica, registrada y revisada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adulto mayor',
      title: 'Delirium hiperactivo',
      cards: [
        { title: 'Qué hacer', tag: 'Primero la causa', kind: 'key', items: [
          { t: 'Buscar y tratar la causa', d: 'Dolor, retención urinaria, infección, fármacos',
            say: 'En el adulto mayor con delirium hiperactivo, lo primero es buscar y corregir la causa: dolor, retención urinaria, infección, deshidratación, fármacos anticolinérgicos. Y las medidas ambientales: luz, orientación, acompañamiento.' },
          { t: 'Haloperidol 0,5 a 1 mg', d: 'VO o IM si hay riesgo; o quetiapina 25 mg',
            say: 'Si la agitación pone en riesgo su seguridad, el fármaco es haloperidol en dosis muy bajas, de medio a un miligramo por vía oral o intramuscular. También se usa quetiapina veinticinco miligramos por vía oral.' },
        ] },
        { title: 'Qué evitar', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Benzodiacepinas en monoterapia', d: 'Salvo abstinencia alcohólica',
            say: 'Las benzodiacepinas están contraindicadas en monoterapia en el delirium, porque empeoran la desorientación, pueden dar efecto paradójico y aumentan las caídas y la aspiración. La excepción es la abstinencia alcohólica, que veremos en la próxima clase.' },
          { t: 'Dosis de adulto joven', d: 'Nunca en el anciano',
            say: 'Y nunca se usa la dosis del adulto joven. Esta es una de las diferencias más preguntadas con la agitación de origen psiquiátrico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la persona agitada en urgencias a la contención adecuada.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Agitación recién llegada a urgencias', 'Glicemia, oximetría, signos vitales', 'Sedar sin buscar causa orgánica'],
          say: 'Toda agitación parte con glicemia capilar, oximetría y signos vitales. El error es sedar sin descartar hipoglicemia, hipoxia o infección.' },
        { cells: ['Agitado con agresión verbal, sin violencia', 'Contención verbal y ambiental', 'Pasar directo a fármaco o a sujeción'],
          say: 'Si hay agitación y agresión verbal sin violencia física, se parte por la contención verbal y ambiental. Saltarse ese peldaño es el error.' },
        { cells: ['Psicosis agitada que rechaza vía oral', 'Haloperidol más lorazepam IM', 'Olanzapina IM más lorazepam IM'],
          say: 'Psicosis agitada que rechaza lo oral: haloperidol más lorazepam intramuscular. No se asocia olanzapina intramuscular con una benzodiacepina parenteral.' },
        { cells: ['Anciano con delirium agitado', 'Tratar causa; haloperidol 0,5 a 1 mg', 'Benzodiacepina o dosis de adulto'],
          say: 'Adulto mayor con delirium: se trata la causa y, si hace falta, haloperidol en dosis mínima. Una benzodiacepina o la dosis de adulto joven empeoran el cuadro.' },
        { cells: ['Violencia con falla de lo anterior', 'Contención mecánica con orden escrita', 'Sin registro ni monitoreo'],
          say: 'Si falla todo y hay riesgo inminente, contención mecánica, con orden escrita y monitoreo. El error es hacerlo sin registro ni vigilancia.' },
        { cells: ['Persona con abstinencia alcohólica', 'Benzodiacepina y tiamina', 'Solo antipsicótico'],
          say: 'Si el origen es la abstinencia de alcohol, el tratamiento es benzodiacepina con tiamina, no un antipsicótico solo. Lo vemos en la próxima clase.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 28 años con esquizofrenia que abandonó su tratamiento, traído por Carabineros. Está vigil, orientado, con signos vitales normales y glicemia capilar de 98 mg/dL. Grita, amenaza al personal y lanza objetos, pero el médico, a distancia segura y con voz calmada, logra que se siente brevemente. Rechaza cualquier medicamento y vuelve a levantarse con los puños cerrados, acercándose a la enfermera.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Sujeción de cuatro puntos inmediata sin indicación escrita, ya que es urgente' },
        { letter: 'B', text: 'Haloperidol 5 mg más lorazepam 2 mg intramusculares, con apoyo del equipo, y luego monitorizar saturación y signos vitales' },
        { letter: 'C', text: 'Olanzapina 10 mg IM y lorazepam 4 mg IM en la misma jeringa' },
        { letter: 'D', text: 'Dejarlo solo en la sala hasta que se calme' },
        { letter: 'E', text: 'Diazepam 10 mg endovenoso en monoterapia, como en el delirium del anciano' },
      ],
      correct: 'B',
      explanation: 'Agitación de origen psiquiátrico, con causa orgánica descartada y desescalada verbal fallida, con riesgo de violencia: corresponde la contención farmacológica intramuscular con haloperidol más lorazepam, con apoyo del equipo y vigilancia posterior. La sujeción es el último recurso y requiere orden escrita. Olanzapina intramuscular con una benzodiacepina parenteral se evita por el riesgo cardiorrespiratorio.',
      say: {
        stem: 'Un hombre de veintiocho años con esquizofrenia, sin tratamiento, llega traído por Carabineros. Está vigil, orientado, con signos vitales normales y glicemia normal. Grita, amenaza al personal y lanza objetos. El médico, con voz calmada y a distancia segura, logra sentarlo un momento, pero rechaza todo medicamento y vuelve a levantarse con los puños cerrados, acercándose a la enfermera.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: sujeción inmediata sin orden escrita; haloperidol más lorazepam intramuscular con apoyo del equipo; olanzapina y lorazepam en la misma jeringa; dejarlo solo; o diazepam endovenoso solo. Piénsalo.',
        answer: 'Es la B. La causa orgánica está descartada y la desescalada verbal ya falló, con riesgo real de violencia, así que se pasa al fármaco intramuscular, con el equipo cerca. Después se vigilan la saturación y los signos vitales. La sujeción es el último recurso y exige orden escrita. Y la combinación de olanzapina con una benzodiacepina parenteral es la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 130',
      stem: 'Paciente ingresado con agitación, agresión verbal y movimientos inquietos de manos y pies. ¿Cuál es la conducta inicial más adecuada?',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg IM inmediato' },
        { letter: 'B', text: 'Contención verbal y ambiental' },
        { letter: 'C', text: 'Lorazepam 2 mg IM' },
        { letter: 'D', text: 'Contención física' },
        { letter: 'E', text: 'Olanzapina 10 mg IM' },
      ],
      correct: 'B',
      explanation: 'La conducta inicial en una persona agitada con agresión verbal es la contención verbal y ambiental, el primer peldaño de la escalera. Los fármacos intramusculares y la contención física se reservan para cuando eso falla.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente ingresado tiene agitación, agresión verbal y movimientos inquietos de manos y pies.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: haloperidol intramuscular inmediato; contención verbal y ambiental; lorazepam intramuscular; contención física; o olanzapina intramuscular. Piénsalo.',
        answer: 'Es la B. Agitación con agresión verbal, sin violencia física: se parte por la contención verbal y ambiental. Los fármacos y la sujeción son pasos posteriores si eso falla. Es la pregunta que prueba si respetas el orden de la escalera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 131',
      stem: 'Una paciente de 75 años, con historia de enfermedad de Alzheimer de 3 años de evolución, con buena funcionalidad presenta un cuadro en que agrede a otras personas y se muestra muy angustiada. Al examen físico le cuesta nombrar algunos objetos, no puede decir los días de la semana de manera invertida y se muestra poco atenta. Además, refiere que su padre ya fallecido está presente en la sala. Se hospitaliza para estudio y manejo y, al inicio, se muestra cooperadora y amable, pero luego exige que la dejen ir e intenta escapar del hospital y agredir al personal de salud. ¿Cuál es el fármaco inicial para el manejo de esta paciente?',
      question: '¿Cuál es el fármaco inicial para el manejo de esta paciente?',
      options: [
        { letter: 'A', text: 'Clorpromazina' },
        { letter: 'B', text: 'Diazepam' },
        { letter: 'C', text: 'Mirtazapina' },
        { letter: 'D', text: 'Alprazolam' },
        { letter: 'E', text: 'Haloperidol' },
      ],
      correct: 'E',
      explanation: 'Tiene un delírium o síndrome confusional agudo clásico. Se trata con el manejo de la patología de base (ej. infecciones, infartos, etc.) y con antipsicóticos, de preferencia haloperidol en dosis bajas (0,5 mg IM) o bien, risperidona 0,5 a 1 mg VO.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una mujer de setenta y cinco años con enfermedad de Alzheimer de tres años y buena funcionalidad agrede a otras personas y está muy angustiada. Le cuesta nombrar objetos, no puede decir los días de la semana al revés y está poco atenta. Dice que su padre fallecido está en la sala. Se hospitaliza, y al inicio es amable, pero luego exige irse, intenta escapar y agredir al personal.',
        question: '¿Cuál es el fármaco inicial para el manejo de esta paciente?',
        options: 'Las opciones: clorpromazina; diazepam; mirtazapina; alprazolam; o haloperidol. Piénsalo.',
        answer: 'Es la E. Es un delirium sobre una demencia: inatención, fluctuación y alucinaciones. Además de buscar la causa, la agitación se controla con haloperidol en dosis muy baja, medio miligramo. Diazepam y alprazolam son benzodiacepinas, que empeoran la confusión y las caídas en este contexto, y la clorpromazina tiene un efecto anticolinérgico que también la empeora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 24 años con esquizofrenia paranoide descompensada ingresa a urgencias en estado de extrema agitación psicomotora, amenazando físicamente al equipo médico y arrojando mobiliario. Tras fracasar la contención verbal, se decide realizar contención física mecánica transitoria y administrar fármacos parenterales de rescate. ¿Cuál es la combinación farmacológica intramuscular más segura, eficaz y recomendada para el control rápido de la agitación en urgencias?',
      question: '¿Cuál es la combinación intramuscular recomendada?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg IM asociado a lorazepam 2 mg IM' },
        { letter: 'B', text: 'Olanzapina 10 mg IM asociada a lorazepam 4 mg IM en la misma jeringa' },
        { letter: 'C', text: 'Morfina 10 mg IM asociada a diazepam 10 mg IM' },
        { letter: 'D', text: 'Fenobarbital 200 mg IM en monoterapia' },
        { letter: 'E', text: 'Biperideno 10 mg IM asociado a clorpromazina 100 mg EV directo' },
      ],
      correct: 'A',
      explanation: 'Haloperidol más lorazepam intramuscular es la combinación de elección en la agitación psicomotora de origen psiquiátrico: sedación más rápida con dosis menores de cada fármaco, y la benzodiacepina ayuda a prevenir la distonía aguda del haloperidol. La opción B asocia olanzapina intramuscular con una benzodiacepina parenteral, combinación que se evita por el riesgo cardiorrespiratorio. Los demás fármacos no tienen indicación en este contexto.',
      say: {
        stem: 'Una pregunta de práctica del banco EUNACOM. Un hombre de veinticuatro años con esquizofrenia descompensada llega a urgencias con agitación extrema, amenazando al equipo y arrojando mobiliario. Falló la contención verbal y se decide una contención física transitoria y fármacos parenterales de rescate.',
        question: '¿Cuál es la combinación intramuscular recomendada?',
        options: 'Las opciones: haloperidol más lorazepam; olanzapina más lorazepam en la misma jeringa; morfina más diazepam; fenobarbital solo; o biperideno más clorpromazina. Piénsalo.',
        answer: 'Es la A. Haloperidol más lorazepam intramuscular sedan más rápido con menos dosis, y el lorazepam ayuda a prevenir la distonía. La B es la trampa: olanzapina intramuscular con una benzodiacepina parenteral se evita por el riesgo de depresión cardiorrespiratoria. Los demás no tienen indicación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Respecto a la contención física mecánica de cuatro extremidades en un paciente con agitación psicomotora violenta que no respondió a contención verbal ni farmacológica, ¿cuál es una exigencia legal y clínica obligatoria según la Ley N° 21.331 de salud mental en Chile?',
      question: '¿Cuál es la exigencia obligatoria?',
      options: [
        { letter: 'A', text: 'La indicación puede ser verbal y no requiere ser registrada en la ficha clínica' },
        { letter: 'B', text: 'Debe existir una indicación médica explícita registrada por escrito en la ficha clínica, detallando la justificación, y se debe supervisar y registrar la condición del paciente cada 15 a 30 minutos' },
        { letter: 'C', text: 'El paciente debe ser dejado en posición prono (boca abajo) para evitar que muerda al personal' },
        { letter: 'D', text: 'La sujeción mecánica debe mantenerse fija por un período mínimo obligatorio de 24 horas ininterrumpidas' },
        { letter: 'E', text: 'Las sujeciones deben atarse directamente a las barandas laterales móviles de la camilla' },
      ],
      correct: 'B',
      explanation: 'La contención mecánica es de último recurso. Exige indicación médica escrita y fundada en la ficha, supervisión con registro cada 15 a 30 minutos de signos vitales, conciencia y perfusión, y retiro apenas cede la agitación. Se hace con el paciente boca arriba y cabecera elevada, fijada a la estructura fija de la cama y no a barandas móviles, y nunca por un tiempo mínimo obligatorio.',
      say: {
        stem: 'Una pregunta de práctica del banco EUNACOM. Un paciente con agitación violenta no respondió a la contención verbal ni a la farmacológica, y se indica contención física mecánica de cuatro extremidades. Se pregunta cuál es una exigencia legal y clínica obligatoria según la ley veintiún mil trescientos treinta y uno.',
        question: '¿Cuál es la exigencia obligatoria?',
        options: 'Las opciones: indicación verbal sin registro; indicación escrita con justificación y control cada quince a treinta minutos; posición boca abajo; fijar veinticuatro horas como mínimo; o atar a las barandas móviles. Piénsalo.',
        answer: 'Es la B. Orden médica escrita en la ficha, con su justificación, y vigilancia con registro cada quince a treinta minutos. Boca abajo es peligroso por asfixia posicional, las barandas móviles no son un punto seguro, y no existe un tiempo mínimo: se retira apenas el paciente se calma.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Lo que te llevas',
      cards: [
        { title: 'Antes de sedar', tag: 'Evaluar', kind: 'key', items: [
          { t: 'Descartar causa orgánica', d: 'Glicemia, oximetría, signos vitales',
            say: 'Cerremos con las reglas de oro. Toda agitación parte con glicemia, oximetría y signos vitales, y con la pregunta: ¿es un delirium?' },
          { t: 'Escalera: verbal, fármaco, física', d: 'Lo menos restrictivo primero',
            say: 'Después se sube la escalera. Primero contención verbal y ambiental, luego fármacos, y la contención física solo como último recurso.' },
        ] },
        { title: 'Al medicar', tag: 'Seguridad', kind: 'alert', items: [
          { t: 'Psiquiátrica: haloperidol + lorazepam IM', d: 'Evitar olanzapina IM con benzodiacepina',
            say: 'En la agitación psiquiátrica, el esquema clásico es haloperidol más lorazepam intramuscular, y se evita olanzapina intramuscular con una benzodiacepina parenteral.' },
          { t: 'Anciano con delirium: sin benzodiacepinas', d: 'Haloperidol 0,5 a 1 mg y tratar la causa',
            say: 'En el adulto mayor con delirium se trata la causa y se usa haloperidol en dosis mínima, sin benzodiacepinas. Y la contención mecánica exige orden escrita y monitoreo. Si te llevas una sola idea de hoy: primero la causa, después las palabras, y la sujeción al final. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Persona agitada en urgencias: de la causa a la contención',
    root: N('start', 'Persona agitada en urgencias', 'Riesgo para sí misma y otros',
      'Llega una persona agitada. Antes de cualquier fármaco, se asegura la escena y se descarta una causa orgánica con glicemia capilar, oximetría y signos vitales.',
      ['Causa orgánica o delirium', N('alert', 'Tratar la causa médica', 'Hipoglicemia, hipoxia, infección',
        'Si hay fiebre, desorientación fluctuante, alucinaciones visuales o signos vitales alterados, es una causa orgánica, y se trata la causa de base.',
        ['Anciano con riesgo físico', N('ok', 'Haloperidol 0,5 a 1 mg', 'Sin benzodiacepinas',
          'En el adulto mayor con delirium y riesgo para su seguridad, se usa haloperidol en dosis muy baja, sin benzodiacepinas.')],
        ['Abstinencia de alcohol', N('refer', 'Benzodiacepina y tiamina', 'Clase siguiente',
          'Si la causa es la abstinencia alcohólica, el tratamiento es una benzodiacepina con tiamina. Lo vemos en la próxima clase.')],
      )],
      ['Origen psiquiátrico', N('do', 'Contención verbal y ambiental', 'Primer paso obligatorio',
        'Si el origen es psiquiátrico, el primer paso es la contención verbal y ambiental, con la escena segura y una salida libre para ti.',
        ['Se calma', N('ok', 'Evaluar y tratar la causa', 'Ofrecer tratamiento voluntario',
          'Si se calma, se evalúa y se ofrece tratamiento de forma voluntaria.')],
        ['Falla y acepta lo oral', N('do', 'Lorazepam o atípico oral', 'Vía preferida',
          'Si falla pero el paciente colabora, se usa la vía oral: lorazepam, risperidona u olanzapina bucodispersable.')],
        ['Falla y rechaza o es grave', N('do', 'Haloperidol más lorazepam IM', 'Evitar olanzapina IM con BZD',
          'Si rechaza o la agitación es grave, haloperidol más lorazepam intramuscular, evitando la olanzapina intramuscular con una benzodiacepina parenteral.',
          ['Riesgo inminente persiste', N('refer', 'Contención mecánica', 'Orden escrita y monitoreo',
            'Si persiste un riesgo inminente, contención mecánica transitoria, con orden escrita, cuatro puntos a la estructura fija, cabecera elevada y monitoreo cada quince a treinta minutos. Se retira apenas haya calma.')],
        )],
      )],
    ),
  },
};
