// Clase 17.11 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-11). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.05.1.002) no trae preguntas reales y las búsquedas por clozapina, agranulocitosis, neutropenia, refractaria, hemograma y RAN no encuentran ninguna pregunta de clozapina
// (las de neutropenia son de oncología/infecto y no se reusan). Se usan las dos preguntas del libro como "Banco EUNACOM · Caso representativo" (sin fecha), más un caso clínico escrito para la clase (miocarditis).
// Cuidado clínico: se enseña lo que dice el libro y la norma MINSAL (RAN menor de 1.000: suspensión inmediata y definitiva, sin reexposición); ver notas del informe sobre los cortes de RAN.
//   Con RAN bajo y fiebre se agrega la regla de neutropenia febril (antibióticos endovenosos sin demora). Enlace con psiq-03 (clozapina antisuicida) y psiq-10 (atípicos); el síndrome neuroléptico maligno va en psiq-13.
// Imágenes: ninguna (no hay figura clínica útil; se propone una animación).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clozapina: esquizofrenia refractaria, hemograma obligatorio y la regla del recuento de neutrófilos',
      say: 'Bienvenido. Hoy vemos la clozapina, el antipsicótico más eficaz que existe y también el más vigilado. En el examen se preguntan tres cosas: cuándo una esquizofrenia se llama refractaria, cada cuánto se pide el hemograma, y qué hacer cuando el recuento de neutrófilos cae bajo mil. Es la continuación directa de la clase anterior de esquizofrenia.',
    },

    {
      type: 'points',
      kicker: 'Punto de partida',
      title: '¿Cuándo es refractaria?',
      cards: [
        { title: 'Definición', tag: 'Kane / GES 34', kind: 'criteria', items: [
          { t: 'Fracaso de 2 antipsicóticos distintos', d: 'Dosis plena, 6 semanas cada uno',
            say: 'Cerca del treinta por ciento de las personas con esquizofrenia no responde al tratamiento habitual. Se habla de esquizofrenia refractaria cuando persisten síntomas psicóticos moderados a graves, con disfunción, tras el fracaso de al menos dos antipsicóticos distintos, cada uno a dosis plena por mínimo seis semanas.' },
          { t: 'Al menos uno debe ser atípico', d: 'Con adherencia verificada',
            say: 'Al menos uno de los dos tiene que ser de segunda generación, y la adherencia debe estar verificada. Si la persona no toma el remedio, no es refractaria: es mala adherencia.' },
        ] },
        { title: 'Qué se hace', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'Clozapina: elección indiscutida', d: 'Nivel secundario y farmacovigilancia',
            say: 'Confirmada la refractariedad, el fármaco de elección es la clozapina. Se indica en el nivel secundario y bajo un programa nacional de farmacovigilancia con control del hemograma.' },
          { t: 'También: conducta suicida persistente', d: 'Lo vimos en la clase de suicidio',
            say: 'La clozapina también es el antipsicótico indicado cuando hay conducta suicida persistente en una psicosis. Eso es lo que revisamos en la clase de conducta suicida, y aquí vemos su cara de seguridad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Decisión',
      title: 'De la falla a la clozapina',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Psicosis persistente', s: 'Tras el primer antipsicótico' },
        { id: 'b', col: 1, row: 2, k: 'q', t: '¿Adherencia y dosis plena?', s: 'Seis semanas verificadas' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Falso refractario', s: 'Corregir adherencia o dosis' },
        { id: 'd', col: 2, row: 3, k: 'alert', t: 'Fracaso de 2 fármacos', s: 'Uno, atípico' },
        { id: 'e', col: 3, row: 3, k: 'good', t: 'Hemograma basal normal', s: 'Leucocitos y RAN' },
        { id: 'f', col: 4, row: 3, k: 'refer', t: 'Clozapina', s: 'Con monitoreo hematológico' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'No' }, { from: 'b', to: 'd', label: 'Sí' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Primero, descartar el falso refractario',
          say: 'Antes de llamar refractaria a una esquizofrenia, hay que preguntar si la persona tomó realmente el fármaco, a dosis plena, durante seis semanas. Si no, el problema es la adherencia o la dosis, no la enfermedad.' },
        { show: ['d', 'e', 'f'], note: 'Falla confirmada: clozapina con hemograma',
          say: 'Si hubo dos fracasos verificados, uno con atípico, y el hemograma basal es normal, se indica clozapina con el protocolo de monitoreo. Sin ese hemograma de partida, no se inicia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'Para empezar y cada cuánto',
      cards: [
        { title: 'Requisitos para iniciar', tag: 'Hemograma basal', kind: 'criteria', items: [
          { t: 'Leucocitos 3.500 o más', d: 'Por mm³',
            say: 'Para iniciar clozapina se necesitan leucocitos totales de tres mil quinientos o más por milímetro cúbico.' },
          { t: 'RAN 2.000 o más', d: '1.500 en neutropenia étnica benigna',
            say: 'Y un recuento absoluto de neutrófilos, el RAN, de dos mil o más. En la neutropenia étnica benigna se acepta mil quinientos o más.' },
        ] },
        { title: 'Calendario de hemogramas', tag: 'Norma MINSAL', kind: 'key', items: [
          { t: 'Semanas 1 a 26: semanal', d: 'Primeros 6 meses',
            say: 'El calendario de la norma es: hemograma con recuento diferencial semanal durante los primeros seis meses, que es cuando más ocurre la agranulocitosis, sobre todo en las primeras dieciocho semanas.' },
          { t: 'Semanas 27 a 52: quincenal', d: 'Segundo semestre',
            say: 'Luego quincenal durante el segundo semestre.' },
          { t: 'Desde el año: mensual', d: 'Mientras la tome y 4 semanas después',
            say: 'Y desde el año en adelante, mensual, mientras la persona tome clozapina y hasta cuatro semanas después de suspenderla. Semanal, quincenal, mensual: se pregunta.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Qué hacer con el resultado',
      title: 'El RAN manda la conducta',
      head: ['RAN por mm³', 'Estado', 'Conducta', 'Reexposición'],
      rows: [
        { cells: ['2.000 o más', 'Normal', 'Seguir calendario habitual', 'Continuar'],
          say: 'Con un RAN de dos mil o más, todo normal: se sigue el calendario semanal, quincenal o mensual.' },
        { cells: ['1.500 a 1.999', 'Neutropenia leve', 'Seguir, con controles 2 veces por semana', 'Bajo vigilancia'],
          say: 'Entre mil quinientos y mil novecientos noventa y nueve, neutropenia leve: se mantiene la clozapina, pero con hemograma dos veces por semana hasta normalizar.' },
        { cells: ['1.000 a 1.499', 'Neutropenia moderada', 'Suspender temporal; hemograma diario', 'Tras recuperar más de 1.500'],
          say: 'Entre mil y mil cuatrocientos noventa y nueve, neutropenia moderada: se suspende la clozapina de forma temporal, con hemograma diario hasta recuperar más de mil quinientos.' },
        { cells: ['Menos de 1.000', 'Agranulocitosis', 'Suspender ya y para siempre', 'Prohibida de por vida'],
          say: 'Bajo mil, agranulocitosis: suspensión inmediata y definitiva. Esa es la fila que más se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia',
      title: 'Agranulocitosis: qué se hace',
      cards: [
        { title: 'Conducta inmediata', tag: 'RAN bajo 1.000', kind: 'alert', items: [
          { t: 'Suspender la clozapina ya', d: 'Definitivo; no bajar dosis',
            say: 'Con un RAN bajo mil, la clozapina se suspende de inmediato y de forma definitiva. No se baja la dosis ni se repite el examen en una semana: esa es la trampa, y es una conducta peligrosa.' },
          { t: 'Hospitalizar con aislamiento protector', d: 'Hematología; evaluar G-CSF',
            say: 'La persona se hospitaliza con aislamiento protector, se pide interconsulta urgente a hematología y se evalúa factor estimulante de colonias de granulocitos, el G-CSF.' },
          { t: 'Con fiebre: neutropenia febril', d: 'Antibióticos EV sin demora',
            say: 'Si además tiene fiebre, se trata como una neutropenia febril, con antibióticos endovenosos de amplio espectro sin demora. La complicación mortal es la sepsis.' },
        ] },
        { title: 'Para siempre', tag: 'Regla de oro', kind: 'key', items: [
          { t: 'Reexposición prohibida de por vida', d: 'Constancia en la ficha',
            say: 'Tras una agranulocitosis, queda prohibida la reexposición a clozapina de por vida, por el riesgo de una recidiva fulminante, y se deja constancia destacada en la ficha. También se evitan otros fármacos que dañen la médula.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Más allá de la sangre',
      title: 'Otras reacciones graves',
      cards: [
        { title: 'Las que pueden matar', tag: 'Críticas', kind: 'alert', items: [
          { t: 'Miocarditis, en el primer mes', d: 'Fiebre, disnea, dolor, taquicardia',
            say: 'La miocarditis aparece típicamente en el primer mes, con disnea, dolor precordial, fiebre y una taquicardia persistente sin explicación. Se estudia con electrocardiograma, troponinas y ecocardiograma, y el fármaco se suspende.' },
          { t: 'Íleo paralítico', d: 'Acción anticolinérgica potente',
            say: 'La clozapina es muy anticolinérgica, y puede producir constipación extrema, impactación fecal, vólvulo y necrosis intestinal fatal. Se previene activamente con laxantes osmóticos.' },
          { t: 'Convulsiones: sobre 600 mg', d: 'Bajar dosis y agregar valproato',
            say: 'Las convulsiones son dependientes de la dosis y aumentan sobre seiscientos miligramos al día. Se baja la dosis y se asocia ácido valproico.' },
        ] },
        { title: 'Frecuentes y manejables', tag: 'Molestas', kind: 'key', items: [
          { t: 'Sialorrea nocturna y sedación', d: 'Benignas; medidas locales',
            say: 'La sialorrea nocturna y la sedación son muy frecuentes y benignas, y se manejan con medidas locales o antimuscarínicos selectivos.' },
          { t: 'Síndrome metabólico severo', d: 'Ganancia de peso y dislipidemia',
            say: 'Y como vimos en la clase anterior, tiene un riesgo metabólico muy alto, con ganancia de peso y dislipidemia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Por qué se usa igual',
      title: 'El otro lado de la clozapina',
      cards: [
        { title: 'Ventajas', tag: 'Eficacia', kind: 'pharma', items: [
          { t: 'El más eficaz de todos', d: '100 a 400 mg al día',
            say: 'La clozapina es el antipsicótico más eficaz, con dosis habitual de cien a cuatrocientos miligramos al día, que el psiquiatra sube de forma gradual.' },
          { t: 'Sin extrapiramidales ni discinesia', d: 'Por eso se rota a ella en discinesia tardía',
            say: 'No produce efectos extrapiramidales ni discinesia tardía. Por eso, como vimos, se rota a clozapina cuando aparece discinesia tardía.' },
        ] },
        { title: 'Costo', tag: 'Por qué se restringe', kind: 'alert', items: [
          { t: 'Agranulocitosis en cerca de 0,8%', d: 'Potencialmente mortal',
            say: 'El costo es la agranulocitosis, que ocurre en cerca del cero coma ocho por ciento de los tratados y puede ser mortal. Por eso su uso se restringe al nivel secundario y a un programa de farmacovigilancia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la esquizofrenia que no responde al control del hemograma.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['2 antipsicóticos plenos, 6 semanas, sin respuesta', 'Clozapina con hemograma', 'Subir una tercera vez el mismo fármaco'],
          say: 'Dos antipsicóticos a dosis plena por seis semanas, con adherencia, sin respuesta: clozapina con monitoreo. El error es seguir probando otro fármaco igual.' },
        { cells: ['Hemograma: semanal, quincenal, mensual', 'Seis meses, seis meses, luego de por vida', 'Cambiar los plazos'],
          say: 'Primeros seis meses, semanal. Segundos seis meses, quincenal. Después, mensual, sin fecha de término mientras la tome.' },
        { cells: ['RAN de 1.200', 'Suspender temporal; hemograma diario', 'Tratarlo como agranulocitosis definitiva'],
          say: 'Un RAN de mil doscientos es neutropenia moderada: se suspende temporalmente, y se puede retomar cuando pase de mil quinientos.' },
        { cells: ['RAN de 800', 'Suspensión inmediata y definitiva', 'Bajar la dosis o repetir en una semana'],
          say: 'Un RAN de ochocientos es agranulocitosis: suspender ya y para siempre. Bajar la dosis o esperar una semana es el error mortal.' },
        { cells: ['Fiebre y dolor precordial en el primer mes', 'Miocarditis: ECG, troponinas, suspender', 'Ansiedad o infección respiratoria'],
          say: 'Fiebre, disnea y taquicardia en las primeras semanas: piensa en miocarditis.' },
        { cells: ['Constipación extrema y distensión', 'Íleo: urgencia', 'Dar más laxante y observar'],
          say: 'Constipación extrema con distensión abdominal en una persona con clozapina es un posible íleo paralítico, una urgencia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 29 años con esquizofrenia refractaria, en el día 18 de clozapina 150 mg al día. Consulta por fiebre de 38,2 °C, dolor precordial, disnea y taquicardia de 125 por minuto persistente en reposo. Su hemograma de control de la semana anterior fue normal, con RAN de 3.500/mm³. El electrocardiograma muestra taquicardia sinusal con alteraciones inespecíficas del ST.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Atribuirlo a ansiedad e indicar una benzodiacepina' },
        { letter: 'B', text: 'Sospechar miocarditis por clozapina: suspender el fármaco y estudiar con troponinas y ecocardiograma' },
        { letter: 'C', text: 'Reducir la clozapina a la mitad y controlar en una semana' },
        { letter: 'D', text: 'Descartar agranulocitosis por hemograma normal y continuar igual' },
        { letter: 'E', text: 'Agregar ácido valproico por riesgo de convulsiones' },
      ],
      correct: 'B',
      explanation: 'Fiebre, disnea, dolor precordial y taquicardia persistente no explicada en el primer mes de clozapina son una miocarditis hasta demostrar lo contrario. Se estudia con ECG, troponinas y ecocardiograma y se suspende el fármaco. El hemograma normal descarta agranulocitosis, pero no esta complicación.',
      say: {
        stem: 'Un hombre de veintinueve años con esquizofrenia refractaria lleva dieciocho días con clozapina ciento cincuenta miligramos al día. Consulta por fiebre, dolor en el pecho, disnea y una taquicardia de ciento veinticinco que persiste en reposo. Su hemograma de la semana pasada fue normal, con RAN de tres mil quinientos. El electrocardiograma muestra taquicardia sinusal y cambios inespecíficos del ST.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ansiedad con benzodiacepina; miocarditis, con suspensión y estudio; bajar la dosis a la mitad; hemograma normal y continuar; o agregar valproato. Piénsalo.',
        answer: 'Es la B. Es el cuadro de la miocarditis por clozapina, que aparece en el primer mes: fiebre, disnea, dolor precordial y taquicardia sin explicación. Se suspende y se estudia con troponinas y ecocardiograma. El hemograma normal descarta la agranulocitosis, pero no esta complicación, y bajar la dosis no es suficiente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 28 años con esquizofrenia ha recibido tratamiento con haloperidol 10 mg/día durante 8 semanas y posteriormente con risperidona 6 mg/día durante 8 semanas, ambas con adherencia confirmada por sus cuidadores, persistiendo con alucinaciones auditivas agresivas e ideación delirante severa que le impiden salir a la calle. Su hemograma basal muestra leucocitos 6.500/mm³ con neutrófilos en 4.200/mm³. ¿Cuál es el diagnóstico clínico y el tratamiento farmacológico de elección?',
      question: '¿Cuál es el diagnóstico clínico y el tratamiento farmacológico de elección?',
      options: [
        { letter: 'A', text: 'Psicosis reactiva; suspender antipsicóticos e iniciar psicoterapia' },
        { letter: 'B', text: 'Esquizofrenia refractaria; iniciar tratamiento con clozapina bajo protocolo de monitorización hematológica' },
        { letter: 'C', text: 'Trastorno bipolar maníaco; iniciar monoterapia con carbamazepina' },
        { letter: 'D', text: 'Simulación de síntomas; dar el alta sin medicación' },
        { letter: 'E', text: 'Esquizofrenia simple; rotar a clorpromazina en dosis bajas' },
      ],
      correct: 'B',
      explanation: 'Cumple criterios de esquizofrenia refractaria: falla a dos antipsicóticos distintos a dosis plena por al menos 6 semanas cada uno, uno de ellos atípico (risperidona), con adherencia confirmada. Su hemograma basal es normal (leucocitos mayores de 3.500 y RAN mayor de 2.000), por lo que se inicia clozapina bajo el protocolo de farmacovigilancia hematológica (hemograma semanal los primeros 6 meses).',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. Un hombre de veintiocho años con esquizofrenia recibió haloperidol diez miligramos por ocho semanas y luego risperidona seis miligramos por ocho semanas, ambos con adherencia confirmada. Persiste con alucinaciones auditivas agresivas e ideas delirantes graves que le impiden salir. Su hemograma basal es normal, con neutrófilos de cuatro mil doscientos.',
        question: '¿Cuál es el diagnóstico y el tratamiento de elección?',
        options: 'Las opciones: psicosis reactiva con psicoterapia; esquizofrenia refractaria con clozapina y monitoreo; bipolar con carbamazepina; simulación; o esquizofrenia simple con clorpromazina. Piénsalo.',
        answer: 'Es la B. Dos antipsicóticos distintos, a dosis plena, durante ocho semanas cada uno, uno de ellos atípico, con adherencia confirmada: esquizofrenia refractaria. El tratamiento de elección es la clozapina, y como el hemograma basal es normal, se puede iniciar bajo el protocolo de monitoreo, con hemograma semanal los primeros seis meses.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 34 años con esquizofrenia refractaria en tratamiento con clozapina 300 mg/día acude a su control en la semana 10 de terapia. Su hemograma de control protocolizado muestra leucocitos totales de 2.200/mm³ y recuento absoluto de neutrófilos (RAN) de 790/mm³. El paciente no presenta fiebre ni síntomas infecciosos. ¿Cuál es la conducta médica inmediata e ineludible?',
      question: '¿Cuál es la conducta médica inmediata e ineludible?',
      options: [
        { letter: 'A', text: 'Reducir la dosis de clozapina a 150 mg al día y repetir el hemograma en un mes' },
        { letter: 'B', text: 'Suspender de inmediato la clozapina, hospitalizar en aislamiento protector y contraindicar la reexposición de por vida' },
        { letter: 'C', text: 'Mantener la clozapina e indicar amoxicilina profiláctica por vía oral' },
        { letter: 'D', text: 'Asociar biperideno 5 mg cada 12 horas para estimular la médula ósea' },
        { letter: 'E', text: 'Asumir error de laboratorio, tranquilizar al paciente y mantener la dosis' },
      ],
      correct: 'B',
      explanation: 'Agranulocitosis inducida por clozapina (RAN menor de 1.000/mm³, aquí 790). Es potencialmente mortal por sepsis neutropénica. Conducta: suspensión inmediata y definitiva, hospitalización en aislamiento protector, evaluación hematológica para eventual G-CSF (filgrastim) y registro de la contraindicación de reexposición de por vida. Reducir la dosis o esperar expone a sepsis y muerte. El biperideno no tiene acción sobre la médula ósea.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Un paciente de treinta y cuatro años con esquizofrenia refractaria, en tratamiento con clozapina trescientos miligramos al día, llega a su control en la semana diez. El hemograma muestra leucocitos de dos mil doscientos y un RAN de setecientos noventa. No tiene fiebre ni síntomas infecciosos.',
        question: '¿Cuál es la conducta médica inmediata?',
        options: 'Las opciones: bajar la dosis a la mitad y repetir en un mes; suspender, hospitalizar en aislamiento y contraindicar la reexposición; mantener con amoxicilina; agregar biperideno; o suponer un error de laboratorio. Piénsalo.',
        answer: 'Es la B. Un RAN bajo mil es agranulocitosis, aunque no tenga fiebre ni síntomas. Se suspende de inmediato y para siempre, se hospitaliza en aislamiento protector y se consulta a hematología por G-CSF. Bajar la dosis o esperar un mes expone a una sepsis fatal, y el biperideno no actúa sobre la médula.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: clozapina',
      cards: [
        { title: 'Indicación', tag: 'Cuándo', kind: 'key', items: [
          { t: 'Refractaria: 2 fármacos, 6 semanas', d: 'Uno atípico, adherencia verificada',
            say: 'Cerremos con las reglas de oro. La esquizofrenia es refractaria tras el fracaso de dos antipsicóticos distintos a dosis plena por seis semanas cada uno, uno de ellos atípico, con adherencia verificada. Ahí la clozapina es el fármaco de elección.' },
          { t: 'Hemograma: semanal, quincenal, mensual', d: 'RAN 2.000 o más para empezar',
            say: 'Se parte con un RAN de dos mil o más, y el hemograma es semanal los primeros seis meses, quincenal los otros seis y mensual después.' },
        ] },
        { title: 'Seguridad', tag: 'Qué no fallar', kind: 'alert', items: [
          { t: 'RAN bajo 1.000: suspender para siempre', d: 'No bajar dosis ni esperar',
            say: 'Con un RAN bajo mil se suspende de inmediato y de forma definitiva, se hospitaliza en aislamiento protector y no se vuelve a exponer nunca.' },
          { t: 'Miocarditis e íleo: también graves', d: 'Fiebre y taquicardia; constipación extrema',
            say: 'Y no olvides la miocarditis del primer mes y el íleo paralítico. Si te llevas una sola idea de hoy: un RAN bajo mil con clozapina se suspende ya y para siempre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Clozapina: de la indicación al control del RAN',
    root: N('start', 'Esquizofrenia que no responde', 'Dos antipsicóticos plenos, 6 semanas',
      'Una persona con esquizofrenia sigue con psicosis tras dos antipsicóticos distintos a dosis plena, durante seis semanas cada uno, con adherencia verificada. Es esquizofrenia refractaria.',
      ['Hemograma basal normal', N('do', 'Iniciar clozapina', 'Leucocitos 3.500, RAN 2.000 o más',
        'Con el hemograma basal normal se inicia clozapina, en el nivel secundario, con el protocolo de monitoreo: hemograma semanal los primeros seis meses, quincenal los siguientes seis y mensual después.',
        ['RAN normal', N('ok', 'Seguir el calendario', 'Semanal, quincenal, mensual',
          'Con RAN de dos mil o más, se sigue el calendario sin cambios.')],
        ['RAN 1.500 a 1.999', N('do', 'Controlar 2 veces por semana', 'Mantener clozapina',
          'Entre mil quinientos y mil novecientos noventa y nueve, neutropenia leve: se mantiene el fármaco con hemograma dos veces por semana.')],
        ['RAN 1.000 a 1.499', N('do', 'Suspender temporal', 'Hemograma diario',
          'Entre mil y mil cuatrocientos noventa y nueve, se suspende de forma temporal, con hemograma diario, y se puede reanudar al superar mil quinientos.')],
        ['RAN bajo 1.000', N('alert', 'Agranulocitosis', 'Suspender ya y para siempre',
          'Con un RAN bajo mil: suspensión inmediata y definitiva, hospitalización en aislamiento protector, hematología y evaluación de G-CSF. Si hay fiebre, antibióticos endovenosos sin demora. Nunca más clozapina.')],
      )],
      ['Hemograma basal bajo', N('refer', 'No iniciar clozapina', 'Derivar y estudiar',
        'Si el hemograma basal no cumple los requisitos, no se inicia clozapina y se estudia la causa con el especialista.')],
    ),
  },
};
