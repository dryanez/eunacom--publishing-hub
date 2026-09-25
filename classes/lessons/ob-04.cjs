// Clase 3.4 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Definiciones, PEG constitucional vs RCF patológico, fenotipos precoz y tardío, velocimetría Doppler y criterios de interrupción',
      say: 'Bienvenidos a la clase de restricción del crecimiento fetal, uno de los temas más evaluados y de mayor impacto pronóstico en la obstetricia moderna. En esta sesión aprenderemos a diferenciar con absoluta certeza un feto constitucionalmente pequeño de una verdadera restricción patológica, contrastaremos los fenotipos precoz y tardío, dominaremos la secuencia del deterioro hemodinámico en la velocimetría Doppler y fijaremos las semanas exactas de interrupción según los consensos del Ministerio de Salud. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología y definiciones',
      title: 'Estratificación del crecimiento fetal subóptimo',
      nodes: [
        { id: 'epf', col: 0, row: 1, k: 'start', t: 'Sospecha ecográfica', s: 'Estimación de peso fetal bajo el percentil diez' },
        { id: 'peg', col: 2, row: 0, k: 'good', t: 'PEG constitucional', s: 'Percentil tres a diez con Doppler y líquido estrictamente normales' },
        { id: 'rcf', col: 2, row: 2, k: 'alert', t: 'RCF patológico', s: 'Percentil menor a tres o Doppler patológico en cualquier rango' },
        { id: 'pla', col: 4, row: 0, k: 'good', t: 'Término espontáneo', s: 'Parto a las treinta y nueve a cuarenta semanas sin inducción precoz' },
        { id: 'dop', col: 4, row: 2, k: 'risk', t: 'Vigilancia Doppler seriada', s: 'Seguimiento hemodinámico e interrupción programada por etapas' },
      ],
      edges: [
        { from: 'epf', to: 'peg', label: 'Doppler normal' },
        { from: 'epf', to: 'rcf', label: 'Doppler patológico o P menor a 3' },
        { from: 'peg', to: 'pla', label: 'pronóstico óptimo' },
        { from: 'rcf', to: 'dop', label: 'riesgo hipóxico' },
      ],
      steps: [
        {
          show: ['epf'],
          note: 'Sospecha inicial por biometría',
          say: 'El punto de partida clínico es el hallazgo ecográfico de una estimación de peso fetal por debajo del percentil diez para la edad gestacional. Sin embargo, no todo feto pequeño está enfermo ni sufre hipoxia placentaria.',
        },
        {
          show: ['peg', 'pla'],
          note: 'Pequeño para la edad gestacional constitucional',
          say: 'Si el feto tiene un peso entre el percentil tres y diez, pero su velocimetría Doppler de la arteria umbilical, de la cerebral media y de las arterias uterinas es rigurosamente normal, y el líquido amniótico está conservado, estamos ante un pequeño para la edad gestacional constitucional. Es un feto genéticamente pequeño y sano, con excelente pronóstico perinatal, cuyo parto se espera a término entre las treinta y nueve y cuarenta semanas.',
        },
        {
          show: ['rcf', 'dop'],
          note: 'Restricción del crecimiento fetal patológica',
          say: 'En cambio, diagnosticamos restricción del crecimiento fetal cuando el peso fetal estimado cae por debajo del percentil tres, independientemente del Doppler, o cuando estando entre el percentil tres y diez se asocia a Doppler patológico o a una caída de más de dos canales percentilares. Aquí existe insuficiencia placentaria e hipoxia progresiva que exige vigilancia estrecha e interrupción guiada.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos formales',
      title: 'Pilares diagnósticos de la restricción del crecimiento fetal',
      cards: [
        {
          title: 'Criterio biométrico absoluto',
          tag: 'Severidad intrínseca',
          kind: 'alert',
          items: [
            {
              t: 'Peso menor al percentil tres',
              d: 'Define RCF por sí solo sin requerir alteración Doppler',
              say: 'Cualquier feto con una estimación de peso fetal bajo el percentil tres se clasifica de inmediato como restricción de crecimiento fetal, incluso si todos los parámetros Doppler iniciales resultan normales. Es un grupo de alto riesgo perinatal.',
            },
            {
              t: 'Circunferencia abdominal severa',
              d: 'Percentil menor a tres en perímetro abdominal fetal',
              say: 'El perímetro abdominal refleja el depósito de glucógeno en el hígado fetal. Su caída por debajo del percentil tres confirma la desnutrición intrauterina grave por privación calórico proteica placentaria.',
            },
          ],
        },
        {
          title: 'Criterios combinados de sospecha',
          tag: 'Percentil 3 a 10 + Doppler',
          kind: 'criteria',
          items: [
            {
              t: 'Peso entre percentil tres y diez',
              d: 'Requiere marcador hemodinámico de falla placentaria',
              say: 'Si el peso se ubica entre el percentil tres y diez, la presencia de un índice de pulsatilidad en la arteria umbilical sobre el percentil noventa y cinco, o vasodilatación en la cerebral media bajo el percentil cinco, sella el diagnóstico de restricción patológica.',
            },
            {
              t: 'Caída de canales percentilares',
              d: 'Pérdida de más de dos canales de crecimiento en ecografías seriadas',
              say: 'Una caída longitudinal documentada de más de dos canales percentilares en ecografías separadas por al menos dos semanas demuestra desaceleración del potencial de crecimiento y califica como restricción patológica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Contraste hemodinámico',
      title: 'Comparación fenotípica: RCF precoz versus RCF tardío',
      head: ['Parámetro', 'RCF precoz (menor a 32 semanas)', 'RCF tardío (mayor o igual a 32 semanas)'],
      rows: [
        {
          cells: ['Fisiopatología', 'Falla severa de invasión trofoblástica primaria', 'Senescencia placentaria e insuficiencia difusa'],
          say: 'El fenotipo precoz obedece a una falla profunda en la remodelación de las arterias espirales durante el primer trimestre, mientras que el tardío surge por envejecimiento y sobrecarga funcional de la placenta a término.',
        },
        {
          cells: ['Asociación con preeclampsia', 'Muy alta (cincuenta a setenta por ciento)', 'Baja o ausente'],
          say: 'El RCF precoz se asocia intensamente a preeclampsia severa y daño endotelial materno sistémico, mientras que el RCF tardío se presenta típicamente en embarazos normotensos.',
        },
        {
          cells: ['Comportamiento Doppler', 'Deterioro secuencial clásico: umbilical, cerebral, ductus', 'Umbilical normal; marcador clave es cerebral media baja'],
          say: 'En el feto precoz el lecho placentario está destruido, por lo que la arteria umbilical se altera tempranamente. En el feto tardío la umbilical suele ser normal y el único signo de alarma es la vasodilatación cerebral.',
        },
        {
          cells: ['Desafío perinatal', 'Prematurez extrema versus asfixia intrauterina', 'Hipoxia aguda intraparto y muerte fetal inesperada'],
          say: 'El dilema del RCF precoz es balancear la prematurez extrema contra la hipoxia. En el feto tardío el riesgo es la muerte súbita durante el trabajo de parto por falta de reserva placentaria ante las contracciones.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemodinamia fetal',
      title: 'Secuencia de adaptación vascular ante la hipoxia progresiva',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'start', t: 'Hipoxemia placentaria', s: 'Obliteración vascular de las vellosidades terciarias' },
        { id: 'umb', col: 1, row: 1, k: 'mech', t: 'Arteria umbilical patológica', s: 'Aumento progresivo de resistencia con pulsatilidad sobre percentil noventa y cinco' },
        { id: 'acm', col: 2, row: 0, k: 'alert', t: 'Vasodilatación cerebral', s: 'Redistribución de flujo hacia cerebro, miocardio y suprarrenales' },
        { id: 'dfr', col: 3, row: 2, k: 'risk', t: 'Diástole ausente o reversa', s: 'Colapso del lecho capilar vellositario con flujo telediastólico invertido' },
        { id: 'duc', col: 4, row: 1, k: 'trap', t: 'Ductus venoso reverso', s: 'Falla miocárdica derecha por acidosis y asfixia terminal inminente' },
      ],
      edges: [
        { from: 'hip', to: 'umb', label: 'resistencia placentaria' },
        { from: 'umb', to: 'acm', label: 'redistribución hemodinámica' },
        { from: 'umb', to: 'dfr', label: 'obliteración capilar' },
        { from: 'dfr', to: 'duc', label: 'claudicación ventricular' },
        { from: 'acm', to: 'duc', label: 'agotamiento metabólico' },
      ],
      steps: [
        {
          show: ['hip', 'umb'],
          note: 'Aumento de resistencia en la arteria umbilical',
          say: 'A medida que se pierden capilares en las vellosidades placentarias, la resistencia vascular aumenta. La arteria umbilical eleva su índice de pulsatilidad por sobre el percentil noventa y cinco, traduciendo una placenta insuficiente.',
        },
        {
          show: ['acm'],
          note: 'Efecto protector cerebral fetal',
          say: 'Frente a la privación de oxígeno, el feto activa un mecanismo compensatorio de redistribución de flujo, vasodilatando la arteria cerebral media para proteger el cerebro, el corazón y las suprarrenales a expensas de la perfusión renal y esplácnica.',
        },
        {
          show: ['dfr', 'duc'],
          note: 'Claudicación terminal del ductus venoso',
          say: 'Cuando se oblitera más de la mitad del lecho placentario, el flujo telediastólico en la arteria umbilical desaparece y luego se invierte. Finalmente, la acidosis miocárdica claudica el ventrículo derecho, produciendo una onda a reversa en el ductus venoso, antesala de la muerte fetal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Vasos y significado clínico',
      title: 'Interpretación de los territorios en la velocimetría Doppler',
      cards: [
        {
          title: 'Arteria umbilical',
          tag: 'Resistencia placentaria',
          kind: 'pharma',
          items: [
            {
              t: 'Índice de pulsatilidad elevado',
              d: 'Mayor al percentil noventa y cinco para la edad',
              say: 'La pulsatilidad elevada de la arteria umbilical traduce insuficiencia vascular placentaria. Es el primer vaso en alterarse en la restricción de inicio precoz y marca el ingreso a la etapa uno.',
            },
            {
              t: 'Flujo ausente o reverso en diástole',
              d: 'Obliteración vascular crítica con riesgo inminente de óbito',
              say: 'La ausencia de diástole refleja daño vascular masivo y exige interrupción a las treinta y cuatro semanas. La diástole reversa confiere una mortalidad mayor al cincuenta por ciento e impone interrupción a las treinta semanas.',
            },
          ],
        },
        {
          title: 'Cerebral media y ductus venoso',
          tag: 'Adaptación y falla miocárdica',
          kind: 'alert',
          items: [
            {
              t: 'Arteria cerebral media vasodilatada',
              d: 'Índice de pulsatilidad bajo el percentil cinco',
              say: 'La caída de resistencia en la cerebral media refleja redistribución hemodinámica protectora. Es el hallazgo cardinal en el feto tardío y alerta sobre riesgo inminente de asfixia intraparto.',
            },
            {
              t: 'Onda a reversa en ductus venoso',
              d: 'Presión telediastólica auricular invertida por acidosis extrema',
              say: 'El ductus venoso comunica la vena umbilical con la vena cava inferior. La inversión de su onda a traduce falla ventricular derecha terminal e indica cesárea de emergencia en menos de veinticuatro a cuarenta y ocho horas.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Consenso de etapificación',
      title: 'Etapificación Doppler de Barcelona y momento de interrupción',
      head: ['Etapa clínica', 'Criterio Doppler principal', 'Momento de interrupción', 'Vía de parto'],
      rows: [
        {
          cells: ['Etapa I (Leve)', 'Arteria umbilical sobre P95 o cerebral media bajo P5', 'Treinta y siete semanas', 'Inducción si condiciones favorables'],
          say: 'La etapa uno reúne a fetos con aumento leve de resistencia umbilical o vasodilatación cerebral. Se interrumpe al término precoz a las treinta y siete semanas, pudiendo intentarse parto vaginal con monitorización continua.',
        },
        {
          cells: ['Etapa II (Severa)', 'Diástole ausente persistente en arteria umbilical', 'Treinta y cuatro semanas', 'Operación cesárea electiva'],
          say: 'La etapa dos se define por la ausencia de flujo diastólico en la arteria umbilical. Requiere corticoides para maduración pulmonar e interrupción a las treinta y cuatro semanas mediante cesárea programada.',
        },
        {
          cells: ['Etapa III (Alto riesgo)', 'Diástole reversa en arteria umbilical o ductus IP sobre P95', 'Treinta semanas', 'Operación cesárea de urgencia'],
          say: 'La etapa tres presenta flujo invertido en la diástole umbilical. Se indica cesárea a las treinta semanas previa maduración con betametasona y neuroprotección con sulfato de magnesio.',
        },
        {
          cells: ['Etapa IV (Falla crítica)', 'Onda a reversa en ductus venoso o desaceleraciones en RBNE', 'Veintiséis a veintiocho semanas', 'Operación cesárea inmediata'],
          say: 'La etapa cuatro es la claudicación miocárdica terminal con onda a reversa en el ductus venoso. Se interrumpe de inmediato a partir de la viabilidad gestacional con neuroprotección y corticoides.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo perinatal integral',
      title: 'Pilares de la vigilancia y neuroprotección fetal',
      cards: [
        {
          title: 'Medidas farmacológicas preparto',
          tag: 'Menores de 34 y 32 semanas',
          kind: 'pharma',
          items: [
            {
              t: 'Corticoides antenatales',
              d: 'Betametasona doce miligramos intramuscular cada veinticuatro horas por dos dosis',
              say: 'Todo feto con restricción de crecimiento con indicación de interrupción antes de las treinta y cuatro semanas debe recibir un curso completo de betametasona para inducir maduración pulmonar y reducir hemorragia intraventricular.',
            },
            {
              t: 'Neuroprotección con sulfato de magnesio',
              d: 'Dosis de carga cuatro gramos endovenosos en menores de treinta y dos semanas',
              say: 'En todo parto prematuro inminente menor a treinta y dos semanas es obligatorio administrar sulfato de magnesio endovenoso para prevenir parálisis cerebral y daño neurológico grave.',
            },
          ],
        },
        {
          title: 'Monitoreo complementario',
          tag: 'Vigilancia biofísica',
          kind: 'key',
          items: [
            {
              t: 'Líquido amniótico seriado',
              d: 'Búsqueda activa de oligoamnios por hipoperfusión renal',
              say: 'La redistribución de flujo reduce el filtrado glomerular fetal y genera oligoamnios, lo que aumenta el riesgo de compresión de cordón umbilical y sufrimiento fetal agudo.',
            },
            {
              t: 'Registro basal no estresante',
              d: 'Pérdida de variabilidad y desaceleraciones variables u ominosas',
              say: 'Un registro no estresante con variabilidad silente o desaceleraciones espontáneas refleja hipoxia cerebral avanzada y obliga a precipitar la interrupción incluso antes de la edad gestacional meta.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Toma de decisiones ante sospecha de restricción de crecimiento fetal',
      say: 'Revisemos el algoritmo estructurado para la toma de decisiones clínicas frente a un feto pequeño para la edad gestacional.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de restricción fetal',
      head: ['Situación clínica presentada', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Feto en percentil seis con Doppler umbilical y cerebral normales a las 36 semanas', 'Inducir el parto o solicitar cesárea inmediata', 'Manejo conservador con parto a término a las treinta y nueve semanas'],
          say: 'Muchos postulantes se asustan al ver un peso en percentil seis y deciden interrumpir. Si el Doppler y el líquido son normales, es un PEG constitucional sano que debe llegar a término.',
        },
        {
          cells: ['Estimación de peso en percentil dos con Doppler normal a las 35 semanas', 'Esperar a las treinta y siete o cuarenta semanas', 'Interrumpir mediante cesárea a las treinta y cuatro a treinta y cinco semanas'],
          say: 'Un peso bajo el percentil tres es por definición un RCF severo. Aunque el Doppler inicial sea normal, este feto no debe sobrepasar las treinta y cuatro a treinta y cinco semanas.',
        },
        {
          cells: ['Feto de 37 semanas con altura uterina discordante y peso percentil ocho', 'Dar de alta a control habitual sin exámenes', 'Solicitar de inmediato velocimetría Doppler fetal'],
          say: 'Ante un feto pequeño en el tercer trimestre no se puede observar sin un Doppler. El Doppler es mandatorio para descartar vasodilatación cerebral de un RCF tardío.',
        },
        {
          cells: ['Onda a reversa en ductus venoso a las 29 semanas', 'Repetir la ecografía en una semana para confirmar', 'Cesárea de emergencia inmediata con neuroprotección y corticoides'],
          say: 'El ductus venoso invertido nunca se observa. Refleja claudicación ventricular derecha con muerte fetal inminente en menos de cuarenta y ocho horas y exige cesárea inmediata.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Evaluación de feto con peso límite y parámetros hemodinámicos',
      stem: 'Una mujer de 29 años, primigesta cursando un embarazo de 33 semanas, acude a control obstétrico. La altura uterina es de 27 centímetros. Se realiza ecografía obstétrica que calcula una estimación de peso fetal en el percentil 6. La velocimetría Doppler revela: índice de pulsatilidad en arteria umbilical en percentil 40, arteria cerebral media en percentil 55, arterias uterinas con flujo normal e índice de líquido amniótico de 12 centímetros.',
      question: '¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Restricción de crecimiento fetal severa; indicar maduración pulmonar y cesárea urgente' },
        { letter: 'B', text: 'Pequeño para la edad gestacional constitucional; manejo expectante con control habitual y parto a término' },
        { letter: 'C', text: 'Restricción de crecimiento fetal etapa dos; programar cesárea a la semana 34' },
        { letter: 'D', text: 'Feto con sufrimiento fetal agudo; hospitalizar e inducir trabajo de parto de inmediato' },
        { letter: 'E', text: 'Feto con malformación congénita no filiada; indicar amniocentesis genética urgente' },
      ],
      correct: 'B',
      explanation: 'El feto presenta un peso fetal estimado entre el percentil 3 y 10 con una velocimetría Doppler estrictamente normal en todos los lechos vasculares y líquido amniótico conservado. Esto define un Pequeño para la Edad Gestacional (PEG) Constitucional. No existe falla placentaria ni hipoxia fetal; el pronóstico es excelente y se maneja con parto espontáneo a término entre las semanas 39 y 40.',
      say: {
        stem: 'Una primigesta de treinta y tres semanas presenta altura uterina disminuida y ecografía con estimación de peso fetal en percentil seis. La velocimetría Doppler de arteria umbilical, cerebral media y arterias uterinas es completamente normal, y el líquido amniótico es de doce centímetros.',
        question: '¿Cuál es el diagnóstico más adecuado y la conducta a seguir?',
        options: 'La opción A plantea restricción severa y cesárea urgente. La B plantea pequeño para la edad gestacional constitucional y parto a término. La C propone restricción etapa dos con cesárea a las treinta y cuatro semanas. La D sugiere inducción inmediata. Piénsalo.',
        answer: 'La respuesta correcta es la B. Un feto con peso entre el percentil tres y diez que mantiene Doppler de arteria umbilical y cerebral normales y líquido conservado es un pequeño constitucional sano. No tiene patología placentaria ni riesgo de asfixia, por lo que su evolución debe ser expectante hasta el término.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2019',
      title: 'EUNACOM Diciembre 2019 · Pregunta 24',
      stem: 'Una paciente de 34 años, tiene un embarazo de 35 semanas, con feto creciendo en el percentil 2, desde la semana 33, con Doppler fetal normal en ese entonces. Se solicita un nuevo Doppler fetal de control, que no muestra alteraciones. La conducta más adecuada es:',
      question: '¿Cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Inducir el parto' },
        { letter: 'B', text: 'Realizar cesárea' },
        { letter: 'C', text: 'Solicitar perfil biofísico' },
        { letter: 'D', text: 'Controlar semanalmente con el Doppler' },
        { letter: 'E', text: 'Interrumpir a las 37 semanas' },
      ],
      correct: 'B',
      explanation: 'Un feto creciendo en el percentil 2 presenta una restricción del crecimiento fetal severa por definición biométrica intrínseca (menor al percentil 3). La norma técnica establece la interrupción a las 34 a 35 semanas de gestación mediante operación cesárea programada, aun cuando el Doppler de control sea normal, para prevenir resultados perinatales adversos y muerte intrauterina.',
      say: {
        stem: 'Una paciente de treinta y cuatro años con embarazo de treinta y cinco semanas tiene un feto creciendo en el percentil dos desde la semana treinta y tres. El Doppler de control no muestra alteraciones.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'La opción A propone inducir el parto. La B plantea realizar cesárea. La C sugiere perfil biofísico. La D aconseja control semanal con Doppler. Y la E propone esperar a las treinta y siete semanas. Piénsalo.',
        answer: 'La respuesta correcta es la B. Todo feto con peso menor al percentil tres se clasifica como restricción severa. A las treinta y cinco semanas ya superó el umbral de las treinta y cuatro semanas y debe interrumpirse mediante operación cesárea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2015',
      title: 'EUNACOM Julio 2015 · Pregunta 161',
      stem: 'Una paciente de 30 años, cursando un embarazo de 37 semanas, tiene una altura uterina de 28 cm. Se realiza una ecografía obstétrica, que muestra un feto creciendo en percentil 8, con ILA de 8 cm. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada a seguir?',
      options: [
        { letter: 'A', text: 'Inducir el parto con misoprostol' },
        { letter: 'B', text: 'Realizar registro basal no estresante' },
        { letter: 'C', text: 'Observar evolución' },
        { letter: 'D', text: 'Realizar Doppler materno-fetal' },
        { letter: 'E', text: 'Realizar operación cesárea' },
      ],
      correct: 'D',
      explanation: 'Ante la pesquisa de una altura uterina discordante y una estimación de peso fetal en percentil 8 a término, es mandatorio solicitar una velocimetría Doppler materno-fetal. El Doppler permite diferenciar un PEG constitucional sano (si el Doppler es normal) de un RCF tardío con redistribución cerebral (vasodilatación de arteria cerebral media), el cual tiene alto riesgo de asfixia aguda durante el parto.',
      say: {
        stem: 'Una paciente de treinta años con treinta y siete semanas de gestación presenta altura uterina de veintiocho centímetros. La ecografía muestra feto en percentil ocho con índice de líquido amniótico de ocho centímetros.',
        question: '¿Cuál es la conducta clínica más adecuada?',
        options: 'La opción A propone inducir el parto con misoprostol. La B realizar registro basal. La C observar evolución. La D realizar Doppler materno fetal. La E realizar cesárea. Piénsalo.',
        answer: 'La respuesta correcta es la D. Ante un feto en percentil ocho a las treinta y siete semanas, la conducta prioritaria es realizar un Doppler materno fetal para clasificar si es un PEG constitucional o un RCF tardío con vasodilatación cerebral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2017',
      title: 'EUNACOM Diciembre 2017 · Pregunta 168',
      stem: 'Una paciente cursando un embarazo de 35 semanas es diagnosticada de RCIU en percentil 3. ¿Cuál de las siguientes alteraciones es una indicación de interrupción inmediata del embarazo?',
      question: '¿Cuál hallazgo exige la interrupción inmediata de la gestación?',
      options: [
        { letter: 'A', text: 'Oligohidroamnios leve' },
        { letter: 'B', text: 'Aumento de la resistencia de las arterias umbilicales' },
        { letter: 'C', text: 'Dilatación de la arteria cerebral media' },
        { letter: 'D', text: 'Relación fémoro-abdominal mayor a 0,25' },
        { letter: 'E', text: 'Ducto venoso con flujo ausente o reverso en diástole' },
      ],
      correct: 'E',
      explanation: 'La alteración severa del ductus venoso (flujo ausente o reverso durante la contracción auricular, onda a) traduce acidosis fetal grave, falla cardíaca derecha inminente y elevadísimo riesgo de muerte intrauterina en menos de 24 a 48 horas. Corresponde a la Etapa IV de la clasificación y constituye una indicación absoluta de interrupción inmediata por cesárea.',
      say: {
        stem: 'Una paciente de treinta y cinco semanas con restricción de crecimiento en percentil tres se encuentra en control ecográfico seriado.',
        question: '¿Cuál de las siguientes alteraciones es indicación de interrupción inmediata del embarazo?',
        options: 'La opción A propone oligohidroamnios leve. La B aumento de resistencia en arterias umbilicales. La C vasodilatación de la cerebral media. La D relación fémoro abdominal alterada. La E ducto venoso con flujo ausente o reverso en diástole. Piénsalo.',
        answer: 'La respuesta correcta es la E. La onda a reversa o ausente en el ductus venoso traduce claudicación ventricular y asfixia terminal, siendo el signo de máxima urgencia obstétrica que obliga a interrumpir de inmediato.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave para dominar restricción de crecimiento en el EUNACOM',
      cards: [
        {
          title: 'Diferenciación y Doppler',
          tag: 'Diagnóstico de certeza',
          kind: 'key',
          items: [
            {
              t: 'PEG constitucional es sano',
              d: 'Percentil tres a diez con Doppler normal se espera a término',
              say: 'El pequeño constitucional tiene Doppler normal y no requiere adelantar el parto ni realizar cesáreas innecesarias.',
            },
            {
              t: 'Percentil menor a tres es siempre patológico',
              d: 'Clasifica como RCF severo independientemente del Doppler',
              say: 'Si el peso cae bajo el percentil tres, el feto tiene restricción severa y se interrumpe a las treinta y cuatro a treinta y cinco semanas.',
            },
          ],
        },
        {
          title: 'Momentos de interrupción',
          tag: 'Puntajes de corte MINSAL',
          kind: 'alert',
          items: [
            {
              t: 'Etapa I a las 37 semanas',
              d: 'Umbilical mayor a P95 o cerebral media menor a P5',
              say: 'Los fetos en etapa uno se interrumpen a las treinta y siete semanas, evaluando inducción si las condiciones obstétricas lo permiten.',
            },
            {
              t: 'Etapa II a las 34 semanas',
              d: 'Diástole ausente en arteria umbilical exige cesárea',
              say: 'La ausencia de flujo diastólico en la umbilical impone cesárea a las treinta y cuatro semanas tras ciclo de betametasona.',
            },
            {
              t: 'Ductus venoso reverso es emergencia extrema',
              d: 'Interrupción inmediata con neuroprotección y corticoides',
              say: 'Si te llevas una sola idea de hoy: la onda a reversa en el ductus venoso marca claudicación miocárdica inminente y exige cesárea inmediata con sulfato de magnesio y corticoides. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo y Etapificación en Restricción del Crecimiento Fetal',
    root: N(
      'start',
      'Estimación de peso fetal menor a percentil diez',
      'Ecografía obstétrica biométrica · solicitud inmediata de velocimetría Doppler',
      'Iniciamos el abordaje evaluando la velocimetría Doppler fetal ante una estimación de peso bajo el percentil diez.',
      [
        'Doppler normal y peso entre percentil tres y diez',
        N(
          'ok',
          'Pequeño para la Edad Gestacional (PEG) Constitucional',
          'Líquido amniótico normal · feto genéticamente pequeño sin hipoxia',
          'Si el Doppler es rigurosamente normal y el peso está sobre el percentil tres, diagnosticamos pequeño constitucional.',
          [
            'Manejo conservador ambulatorio',
            N(
              'do',
              'Parto a término espontáneo a las 39 a 40 semanas',
              'Control ecográfico quincenal sin adelantar el parto ni realizar intervenciones invasivas',
              'Mantenemos vigilancia habitual y permitimos que el parto ocurra espontáneamente al término.',
            ),
          ],
        ),
      ],
      [
        'Peso menor a P3 o Doppler patológico',
        N(
          'alert',
          'Restricción del Crecimiento Fetal (RCF Patológico)',
          'Falla placentaria e hipoxia progresiva · clasificar según Doppler',
          'Si el peso está bajo el percentil tres o el Doppler está alterado, confirmamos restricción patológica.',
          [
            'Etapa I: Umbilical mayor a P95 o ACM menor a P5',
            N(
              'do',
              'Interrupción a las 37 semanas',
              'Monitoreo semanal con Doppler · inducción si Bishop favorable',
              'En la etapa uno mantenemos vigilancia semanal e interrumpimos a las treinta y siete semanas.',
            ),
          ],
          [
            'Etapa II: Diástole ausente en arteria umbilical',
            N(
              'do',
              'Interrupción a las 34 semanas por cesárea',
              'Hospitalización en ARO · corticoides para maduración pulmonar',
              'En la etapa dos hospitalizamos, maduramos con betametasona y realizamos cesárea a las treinta y cuatro semanas.',
            ),
          ],
          [
            'Etapa III: Diástole reversa en arteria umbilical',
            N(
              'do',
              'Interrupción a las 30 semanas por cesárea',
              'Corticoides antenatales + neuroprotección con Sulfato de Magnesio',
              'En la etapa tres indicamos cesárea a las treinta semanas con corticoides y sulfato de magnesio.',
            ),
          ],
          [
            'Etapa IV: Ductus venoso con onda a ausente o reversa',
            N(
              'alert',
              'Interrupción inmediata por cesárea de emergencia',
              'Acidosis fetal severa y claudicación cardíaca · interrupción en menos de 24 a 48 horas',
              'En la etapa cuatro realizamos cesárea de emergencia inmediata con sulfato de magnesio independientemente de las semanas.',
            ),
          ],
        ),
      ],
    ),
  },
};
