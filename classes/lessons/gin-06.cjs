// Clase 20.6 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Prolapso de órganos pélvicos, estadios POP-Q, e incontinencia urinaria de esfuerzo vs urgencia: diagnóstico y conductas',
      say: 'Bienvenidos a la clase sobre uroginecología, un bloque de extraordinaria rentabilidad en el examen EUNACOM. En esta sesión aprenderemos a clasificar el prolapso de órganos pélvicos utilizando el sistema POP-Q con el himen como punto cero, diferenciaremos de inmediato la incontinencia urinaria de esfuerzo de la de urgencia, y grabaremos la regla de oro terapéutica: la incontinencia de esfuerzo se opera con cintas mediouretrales mientras que la de urgencia nunca se opera y se trata con fármacos. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecánica del piso pélvico',
      title: 'Fisiopatología del Prolapso Genital: daño fascial y muscular',
      nodes: [
        { id: 'rie', col: 0, row: 1, k: 'start', t: 'Factores de sobrecarga', s: 'Multiparidad, partos vaginales instrumentales, fórceps, obesidad y menopausia' },
        { id: 'fas', col: 1, row: 1, k: 'mech', t: 'Desgarro del elevador del ano', s: 'Ruptura y denervación de la fascia endopélvica pubocervical y rectovaginal' },
        { id: 'her', col: 2, row: 1, k: 'effect', t: 'Herniación visceral pélvica', s: 'Descenso progresivo de vejiga (cistocele), útero (histerocele) o recto (rectocele)' },
        { id: 'pes', col: 3, row: 1, k: 'alert', t: 'Sensación de peso y masa', s: 'Sensación de cuerpo extraño en introito, disfunción defecatoria y urinaria' },
      ],
      edges: [
        { from: 'rie', to: 'fas', label: 'trauma de parto' },
        { from: 'fas', to: 'her', label: 'pérdida de soporte' },
        { from: 'her', to: 'pes', label: 'exteriorización' },
      ],
      steps: [
        {
          show: ['rie', 'fas'],
          note: 'Daño del soporte muscular y fascial',
          say: 'El piso pélvico se mantiene suspendido gracias a la acción combinada del músculo elevador del ano y las fascias endopélvicas. Los partos vaginales traumáticos con macrosomía o fórceps y el pujo prolongado provocan desgarros fasciales y denervación muscular, agravados en la postmenopausia por el hipoestrogenismo tisular.',
        },
        {
          show: ['her', 'pes'],
          note: 'Herniación de vísceras y síntomas clínicos',
          say: 'Al debilitarse los soportes ligamentosos de suspensión, los órganos pélvicos se hernian a través del introito vaginal. La paciente relata típicamente una sensación de peso o cuerpo extraño genital en hipogastrio que se acentúa al permanecer de pie o realizar esfuerzos físicos, requiriendo en ocasiones reducir la masa manualmente para poder orinar.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estadificación anatómica',
      title: 'Sistema POP-Q: El Anillo Himenal como Punto de Referencia Cero',
      cards: [
        {
          title: 'El Himen como Línea Divisoria',
          tag: 'Coordenadas anatómicas en cm',
          kind: 'key',
          items: [
            {
              t: 'Punto cero en el anillo himenal',
              d: 'Las medidas por encima del himen son negativas; por fuera son positivas',
              say: 'El sistema de cuantificación POP-Q utiliza el plano del anillo himenal como línea de referencia anatómica cero. Cualquier punto que permanezca por dentro de la vagina se mide en centímetros negativos, mientras que cualquier estructura que protruya hacia el exterior del himen se consigna en centímetros positivos.',
            },
            {
              t: 'Estadio cero y estadio uno',
              d: 'Estadio 0 sin prolapso; Estadio 1 mayor descenso a más de un centímetro sobre el himen',
              say: 'El estadio cero indica un soporte anatómico perfecto sin prolapso. En el estadio uno el punto de mayor descenso se sitúa a más de un centímetro por encima del anillo himenal, es decir, en un valor menor a menos un centímetro.',
            },
          ],
        },
        {
          title: 'Estadios Avanzados Dos a Cuatro',
          tag: 'Protrusión himenal y procidencia',
          kind: 'alert',
          items: [
            {
              t: 'Estadio dos: entre menos uno y más un centímetro',
              d: 'El punto de máximo descenso se ubica en el área perihimenal',
              say: 'El estadio dos se define cuando el punto de máximo descenso se encuentra en la franja perihimenal comprendida entre un centímetro por encima y un centímetro por debajo del plano del himen, entre menos uno y más un centímetro.',
            },
            {
              t: 'Estadio tres y cuatro: prolapso exteriorizado y procidencia',
              d: 'Estadio 3 sobrepasa un centímetro por fuera; Estadio 4 es la eversión vaginal total',
              say: 'El estadio tres sobrepasa con creces el himen exteriorizándose a más de un centímetro por fuera pero sin evertir completamente la vagina, mientras que el estadio cuatro corresponde a la procidencia completa con eversión total de toda la longitud vaginal.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Abordaje terapéutico',
      title: 'Manejo Escalonado del Prolapso de Órganos Pélvicos',
      head: ['Estrategia de tratamiento', 'Indicación clínica primordial', 'Medida terapéutica normada'],
      rows: [
        {
          cells: ['Manejo expectante / Asintomático', 'Prolapso estadio uno o dos sin molestias subjetivas', 'Observación clínica anual y corrección de factores agravantes como la tos crónica o el estreñimiento'],
          say: 'Si el prolapso es asintomático no requiere tratamiento invasivo, limitándonos a educar a la paciente y controlar el estreñimiento crónico.',
        },
        {
          cells: ['Kinesioterapia de piso pélvico', 'Prolapsos leves a moderados sintomáticos', 'Ejercicios de Kegel para fortalecimiento voluntario del músculo elevador del ano'],
          say: 'La kinesiología de piso pélvico mediante ejercicios de Kegel guiados por kinesiólogo especialista fortalece la musculatura estriada del elevador del ano, aliviando la sensación de peso en estadios uno y dos y previniendo el progreso del prolapso.',
        },
        {
          cells: ['Pesarios vaginales de silicona', 'Pacientes con alto riesgo quirúrgico o rechazo de cirugía', 'Dispositivos de anillo o cubo colocados en fondo vaginal que sostienen los órganos mecánicamente'],
          say: 'Los pesarios vaginales de silicona en forma de anillo o cubo son la alternativa mecánica de primera línea en pacientes ancianas frágiles, con comorbilidades severas o alto riesgo quirúrgico que rechazan o contraindican la anestesia general.',
        },
        {
          cells: ['Cirugía reconstructiva pélvica', 'Prolapsos estadio tres o cuatro sintomáticos con falla conservadora', 'Colporrafia anterior o posterior, histerectomía vaginal o sacrocolpopexia con malla'],
          say: 'La corrección quirúrgica mediante colporrafia anterior o posterior, histerectomía vaginal o suspensión apical con sacrocolpopexia se reserva para estadios avanzados tres y cuatro con impacto severo en la calidad de vida o falla de las medidas conservadoras.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología diferencial',
      title: 'Incontinencia Urinaria: Esfuerzo (hipermovilidad) vs Urgencia (detrusor)',
      nodes: [
        { id: 'tip', col: 0, row: 1, k: 'start', t: 'Síntoma de escape urinario', s: 'Pérdida involuntaria de orina objetivable que causa molestia higiénica o social' },
        { id: 'esf', col: 1, row: 0, k: 'mech', t: 'Incontinencia de esfuerzo (IUE)', s: 'Pérdida sincrónica con tos, risa o ejercicio por hipermovilidad uretral' },
        { id: 'urg', col: 1, row: 2, k: 'alert', t: 'Incontinencia de urgencia (IUU)', s: 'Pérdida precedida de deseo miccional imperioso súbito e incontrolable' },
        { id: 'tot', col: 2, row: 0, k: 'good', t: 'Cintas mediouretrales (TOT / TVT)', s: 'Tratamiento de elección quirúrgico para crear un soporte suburetral fijo' },
        { id: 'med', col: 2, row: 2, k: 'good', t: 'Tratamiento médico farmacológico', s: '¡Nunca operar! Fármacos anticolinérgicos o mirabegrón para relajar detrusor' },
      ],
      edges: [
        { from: 'tip', to: 'esf', label: 'escape al esfuerzo' },
        { from: 'tip', to: 'urg', label: 'escape con urgencia' },
        { from: 'esf', to: 'tot', label: 'cirugía de elección' },
        { from: 'urg', to: 'med', label: 'manejo médico exclusivo' },
      ],
      steps: [
        {
          show: ['tip', 'esf', 'tot'],
          note: 'Incontinencia de esfuerzo: hipermovilidad y solución quirúrgica',
          say: 'En la incontinencia de esfuerzo, el suelo pélvico no sostiene la uretra. Ante un aumento de presión intraabdominal por toser o saltar, la uretra desciende y la orina escapa en chorro. El tratamiento definitivo cuando falla la kinesiología es quirúrgico mediante una cinta libre de tensión.',
        },
        {
          show: ['tip', 'urg', 'med'],
          note: 'Incontinencia de urgencia: hiperactividad del detrusor y manejo médico',
          say: 'En la incontinencia de urgencia el problema no es anatómico sino neuromuscular: el músculo detrusor se contrae espásticamente de forma involuntaria durante el llenado. Está formalmente prohibido operarla; su manejo es estrictamente médico con reeducación vesical y fármacos que relajen el detrusor.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Cuadro comparativo cardinal',
      title: 'Contraste Clínico Esencial: Incontinencia de Esfuerzo vs Urgencia',
      head: ['Parámetro semiológico', 'Incontinencia de Esfuerzo (IUE)', 'Incontinencia de Urgencia (IUU)'],
      rows: [
        {
          cells: ['Gatillo del escape de orina', 'Toser, estornudar, reír, correr o alzar peso físico', 'Sensación imperiosa y repentina de miccionar sin dar tiempo a llegar al baño'],
          say: 'La de esfuerzo gotea al toser o reír; la de urgencia moja la ropa al sentir una necesidad imperiosa e incontenible de orinar.',
        },
        {
          cells: ['Síntomas asociados', 'Sin nicturia ni poliaquiuria; micción diurna normal', 'Poliaquiuria severa (más de ocho veces al día) y nicturia frecuente'],
          say: 'La incontinencia de esfuerzo no tiene síntomas de llenado; la de urgencia se acompaña de nicturia repetida y poliaquiuria marcada.',
        },
        {
          cells: ['Mecanismo subyacente', 'Hipermovilidad uretral por defecto del soporte pélvico', 'Contracciones involuntarias del músculo detrusor vesical'],
          say: 'El mecanismo de la de esfuerzo es la hipermovilidad del cuello vesical; la de urgencia es la hiperactividad motora del detrusor.',
        },
        {
          cells: ['Pilar terapéutico definitivo', 'Kinesiología de Kegel y cirugía con cintas TOT o TVT', '¡NUNCA CIRUGÍA! Anticolinérgicos orales o Mirabegrón'],
          say: 'La incontinencia de esfuerzo se resuelve con cabestrillos quirúrgicos mediouretrales; la de urgencia jamás se opera y se trata con fármacos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía de elección en IUE',
      title: 'Tratamiento de la Incontinencia Urinaria de Esfuerzo (IUE)',
      cards: [
        {
          title: 'Primera Línea Conservadora',
          tag: 'Fisioterapia pélvica',
          kind: 'normal',
          items: [
            {
              t: 'Ejercicios de contracción de Kegel',
              d: 'Entrenamiento supervisado del elevador del ano durante al menos tres meses continuos',
              say: 'El abordaje de primera línea en incontinencia de esfuerzo leve a moderada consiste en la kinesiología de suelo pélvico mediante ejercicios de Kegel supervisados durante un período mínimo de tres meses continuos para fortalecer el soporte suburetral.',
            },
            {
              t: 'Reducción de peso y abandono del tabaco',
              d: 'Disminuye la presión intraabdominal crónica sobre el cuello vesical',
              say: 'Bajar de peso y cesar el tabaquismo disminuye la presión intraabdominal y la tos crónica, reduciendo significativamente los episodios de escape.',
            },
          ],
        },
        {
          title: 'Cirugía de Elección: Cintas Libres de Tensión (Slings)',
          tag: 'Estándar de oro quirúrgico',
          kind: 'key',
          items: [
            {
              t: 'Cabestrillos mediouretrales TOT y TVT',
              d: 'Colocación de una malla de polipropileno por vía transobturatriz o retropúbica bajo la uretra media',
              say: 'Cuando falla la kinesiología, la cirugía estándar de oro de elección en incontinencia de esfuerzo es la colocación de una cinta mediouretral libre de tensión de polipropileno por vía transobturatriz TOT o retropúbica TVT.',
            },
            {
              t: 'Tasa de curación superior al noventa por ciento',
              d: 'Crea un plano de apoyo firme sobre el cual se colapsa la uretra durante los aumentos de presión',
              say: 'Esta intervención mínimamente invasiva actúa restituyendo el plano de apoyo fascial suburetral, permitiendo que la uretra media se colapse sobre la cinta durante los aumentos de presión y curando a más del noventa por ciento de las pacientes.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo médico en IUU',
      title: 'Incontinencia de Urgencia y Vejiga Hiperactiva: ¡Nunca se opera!',
      cards: [
        {
          title: '¡Regla de Oro Absoluta (EUNACOM)!',
          tag: 'La cirugía está prohibida',
          kind: 'alert',
          items: [
            {
              t: 'La incontinencia de urgencia NUNCA se opera',
              d: 'Colocar una cinta mediouretral en vejiga hiperactiva agrava la urgencia y produce retención',
              say: 'La incontinencia de urgencia nunca se opera bajo ninguna circunstancia. Colocar un cabestrillo suburetral en una vejiga hiperactiva agrava de forma desastrosa los episodios de urgencia miccional y precipita retención urinaria obstructiva postoperatoria.',
            },
            {
              t: 'Reeducación vesical y estilo de vida',
              d: 'Micciones programadas por horario y restricción de cafeína, mate, alcohol y edulcorantes',
              say: 'Iniciamos con micciones programadas cada dos a tres horas y restricción estricta de irritantes vesicales como café, té, bebidas colas, alcohol y edulcorantes artificiales.',
            },
          ],
        },
        {
          title: 'Terapia Farmacológica de Primera Línea',
          tag: 'Anticolinérgicos y Beta-3',
          kind: 'pharma',
          items: [
            {
              t: 'Fármacos antimuscarínicos (Solifenacina / Tolterodina)',
              d: 'Bloquean receptores muscarínicos M2 y M3 frenando las contracciones involuntarias del detrusor',
              say: 'Los fármacos anticolinérgicos como la solifenacina o tolterodina bloquean selectivamente los receptores muscarínicos M dos y M tres del músculo detrusor, inhibiendo las contracciones involuntarias durante la fase de llenado vesical.',
            },
            {
              t: 'Agonista beta-tres adrenérgico: Mirabegrón',
              d: 'Veinticinco a cincuenta miligramos al día; relaja el detrusor sin causar sequedad bucal',
              say: 'El mirabegrón es un agonista selectivo de los receptores beta-tres adrenérgicos que relaja activamente el detrusor durante el llenado sin causar boca seca ni constipación, siendo el fármaco de elección en adultas mayores o pacientes con riesgo de glaucoma.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad farmacológica',
      title: 'Contraindicaciones y Efectos Adversos de los Antimuscarínicos',
      cards: [
        {
          title: 'Efectos Adversos Anticolinérgicos Frecuentes',
          tag: 'Síndrome anticolinérgico periférico',
          kind: 'alert',
          items: [
            {
              t: 'Boca seca (xerostomía) y constipación severa',
              d: 'Principal causa de abandono del tratamiento farmacológico en más del treinta por ciento',
              say: 'La sequedad de boca intensa y la constipación intestinal rebelde son los efectos secundarios más molestos de la oxibutinina y solifenacina, causando abandono del tratamiento.',
            },
            {
              t: 'Visión borrosa y deterioro cognitivo en ancianas',
              d: 'Bloqueo muscarínico en el sistema nervioso central con riesgo de confusión y caídas',
              say: 'Pueden provocar visión borrosa por alteración de la acomodación pupilar y somnolencia o confusión mental en pacientes geriátricas por cruzar la barrera hematoencefálica.',
            },
          ],
        },
        {
          title: 'Contraindicaciones Clínicas Absolutas',
          tag: 'Situaciones de alto riesgo',
          kind: 'alert',
          items: [
            {
              t: 'Glaucoma de ángulo cerrado no tratado',
              d: 'El bloqueo muscarínico induce midriasis y bloqueo trabecular con aumento agudo de PIO',
              say: 'Los anticolinérgicos están estrictamente contraindicados en pacientes con glaucoma de ángulo estrecho no tratado, ya que la midriasis puede precipitar un glaucoma agudo por cierre angular.',
            },
            {
              t: 'Retención urinaria y obstrucción intestinal',
              d: 'Agravan la atonía vesical y el megacolon en pacientes con vaciamiento gástrico enlentecido',
              say: 'Asimismo, están formalmente contraindicados en retención urinaria con gran residuo postmiccional, gastroparesia severa y miastenia gravis.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión uroginecológica',
      title: 'Algoritmo de Abordaje y Tratamiento de la Incontinencia Urinaria Femenina',
      say: 'Revisemos el algoritmo estructurado para clasificar y tratar adecuadamente la incontinencia urinaria en la consulta médica.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Incontinencia de Esfuerzo · Cirugía de Elección',
      stem: 'Una paciente de 62 años consulta por sensación de peso genital y escapes de orina involuntarios que ocurren exclusivamente cuando estornuda, tose o levanta objetos pesados. No presenta nicturia ni deseos miccionales apremiantes. Al examen físico se evidencia salida de orina sincrónica con la maniobra de Valsalva y un prolapso de la pared vaginal anterior cuyo punto de mayor descenso se sitúa a 2 cm por fuera del anillo himenal (+2 cm, Estadio III). Tras fracasar la kinesioterapia de piso pélvico, se programa cirugía.',
      question: '¿Cuál es el procedimiento quirúrgico de elección para resolver la incontinencia urinaria de esfuerzo?',
      options: [
        { letter: 'A', text: 'Colocación de cabestrillo mediouretral libre de tensión (cinta TOT o TVT)' },
        { letter: 'B', text: 'Inyección intravesical de toxina botulínica en el músculo detrusor' },
        { letter: 'C', text: 'Prescripción oral de oxibutinina a dosis altas' },
        { letter: 'D', text: 'Cistoplastía de aumento con parche intestinal' },
        { letter: 'E', text: 'Denervación quirúrgica de los plexos hipogástricos inferiores' },
      ],
      correct: 'A',
      explanation: 'La paciente presenta una Incontinencia Urinaria de Esfuerzo (IUE) genuina (escapes sincrónicos con la maniobra de Valsalva/tos sin urgencia miccional) asociada a prolapso de pared anterior. Tras el fracaso de las medidas conservadoras (kinesioterapia de piso pélvico con ejercicios de Kegel), el procedimiento quirúrgico estándar de oro de elección es la colocación de un cabestrillo mediouretral libre de tensión de polipropileno por vía transobturatriz (TOT) o retropúbica (TVT), el cual restituye el soporte anatómico suburetral colapsando la luz uretral durante los aumentos de presión intraabdominal.',
      say: {
        stem: 'Una paciente de sesenta y dos años presenta escapes de orina involuntarios exclusivamente al toser, reír o levantar peso con maniobra de esfuerzo positiva tras fallar kinesiología.',
        question: '¿Cuál es el procedimiento quirúrgico de elección para resolver la incontinencia urinaria de esfuerzo?',
        options: 'La opción A propone colocación de cabestrillo mediouretral libre de tensión cinta TOT o TVT. La B toxina botulínica en el detrusor. La C oxibutinina oral. La D cistoplastía de aumento. La E denervación pélvica. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. En la incontinencia urinaria de esfuerzo refractaria a kinesiología, la cirugía de primera línea de elección es la colocación de una cinta mediouretral libre de tensión tipo TOT o TVT.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Incontinencia de Urgencia · Vejiga Hiperactiva',
      stem: 'Una mujer de 68 años acude a control refiriendo que con frecuencia experimenta una sensación urgente, súbita e incontenible de orinar, no alcanzando a llegar al baño y perdiendo abundantes volúmenes de orina. Además, orina 12 veces al día y se despierta 3 a 4 veces por noche para miccionar. El examen físico y el sedimento de orina son normales.',
      question: '¿Cuál de las siguientes conductas terapéuticas es la más apropiada?',
      options: [
        { letter: 'A', text: 'Indicar colocación de cabestrillo suburetral transobturador (TOT)' },
        { letter: 'B', text: 'Iniciar reeducación vesical con un anticolinérgico como Solifenacina o Mirabegrón' },
        { letter: 'C', text: 'Indicar restricción total de líquidos a menos de 500 mL al día' },
        { letter: 'D', text: 'Realizar uretrotomía interna bajo anestesia' },
        { letter: 'E', text: 'Indicar tratamiento antibiótico empírico continuo con ciprofloxacino por 6 meses' },
      ],
      correct: 'B',
      explanation: 'El cuadro corresponde a un Síndrome de Vejiga Hiperactiva húmedo con Incontinencia Urinaria de Urgencia (IUU), caracterizado por deseo miccional imperioso súbito, poliaquiuria diurna severa y nicturia en ausencia de infección del tracto urinario. En esta patología neuromuscular la cirugía con cabestrillos (cintas) está TERMINANTEMENTE CONTRAINDICADA porque empeora la sintomatología. El pilar del tratamiento es no quirúrgico: reeducación vesical y modificaciones conductuales asociadas a terapia farmacológica de primera línea con antimuscarínicos (Solifenacina, Tolterodina) o un agonista beta-3 (Mirabegrón).',
      say: {
        stem: 'Una mujer de sesenta y ocho años presenta deseos imperiosos súbitos e incontenibles de orinar con escape abundante, poliaquiuria de doce veces al día y nicturia repetida.',
        question: '¿Cuál de las siguientes conductas terapéuticas es la más apropiada?',
        options: 'La opción A propone cinta suburetral TOT. La B reeducación vesical combinada con un fármaco anticolinérgico como solifenacina o un agonista beta tres como mirabegrón. La C restricción hídrica extrema. La D uretrotomía. La E antibióticos continuos. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. La incontinencia de urgencia nunca se opera; se trata con reeducación vesical y relajantes del detrusor como solifenacina o mirabegrón.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Uroginecología para el EUNACOM',
      cards: [
        {
          title: 'Sistema POP-Q y Prolapso',
          tag: 'El himen es el centro',
          kind: 'key',
          items: [
            {
              t: 'Punto cero en el anillo himenal',
              d: 'Medidas negativas por dentro de la cavidad; medidas positivas por fuera del himen',
              say: 'El sistema anatómico POP-Q toma el anillo himenal como punto cero inmutable; los valores negativos representan vísceras dentro de la cavidad y los positivos prolapsos exteriorizados por fuera del himen.',
            },
            {
              t: 'Tratamiento adaptado al síntoma',
              d: 'Asintomático se observa; conservador con Kegel o pesarios y cirugía en estadios tres o cuatro',
              say: 'El prolapso asintomático no se opera; el sintomático se trata con kinesiología de Kegel o pesarios en ancianas frágiles y cirugía reconstructiva si es severo.',
            },
          ],
        },
        {
          title: 'Esfuerzo vs Urgencia',
          tag: 'La gran dicotomía terapéutica',
          kind: 'alert',
          items: [
            {
              t: 'Esfuerzo: cinta mediouretral TOT o TVT',
              d: 'Escape al toser por hipermovilidad uretral que se resuelve con cabestrillo quirúrgico',
              say: 'La incontinencia de esfuerzo responde a hipermovilidad del cuello vesical y se resuelve quirúrgicamente con cabestrillos mediouretrales libres de tensión tras fracaso de ejercicios de Kegel.',
            },
            {
              t: 'Urgencia: ¡NUNCA OPERAR! Fármacos para detrusor',
              d: 'Escape con deseo imperioso por hiperactividad del detrusor; solifenacina o mirabegrón',
              say: 'La incontinencia de urgencia obedece a hiperactividad involuntaria del músculo detrusor, está terminantemente prohibido operarla y se maneja con solifenacina o mirabegrón. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje y Tratamiento de la Incontinencia Urinaria Femenina',
    root: N(
      'start',
      'Paciente Femenina con Pérdida Involuntaria de Orina',
      'Anamnesis dirigida · diario miccional · descartar infección urinaria con urocultivo',
      'Iniciamos el estudio descartando una infección urinaria y caracterizando el tipo de escape.',
      [
        'Escape sincrónico con aumento de presión intraabdominal (tos, risa, ejercicio)',
        N(
          'q',
          'Incontinencia Urinaria de Esfuerzo (IUE)',
          'Prueba de Valsalva positiva en camilla · hipermovilidad uretral',
          'Si el escape ocurre al toser o reír diagnosticamos incontinencia urinaria de esfuerzo.',
          [
            'Fase inicial o severidad leve a moderada',
            N(
              'ok',
              'Kinesioterapia de Piso Pélvico (Ejercicios de Kegel)',
              'Entrenamiento supervisado del elevador del ano por tres meses continuos',
              'Indicamos kinesiología de piso pélvico con ejercicios de Kegel durante tres meses.',
            ),
          ],
          [
            'Severidad moderada a severa o falla del tratamiento kinesiológico',
            N(
              'do',
              'Cirugía con Cabestrillo Mediouretral Libre de Tensión (TOT / TVT)',
              'Colocación de cinta de polipropileno suburetral con curación mayor al noventa por ciento',
              'Ante fracaso de la kinesiología indicamos cirugía con cinta mediouretral libre de tensión.',
            ),
          ],
        ),
      ],
      [
        'Escape precedido de deseo miccional súbito e imperioso con poliaquiuria y nicturia',
        N(
          'alert',
          'Incontinencia Urinaria de Urgencia / Vejiga Hiperactiva (¡NUNCA OPERAR!)',
          'Hiperactividad motora involuntaria del músculo detrusor durante el llenado vesical',
          'Si el escape se asocia a deseo imperioso diagnosticamos incontinencia de urgencia que nunca se opera.',
          [
            'Primera línea de manejo médico',
            N(
              'do',
              'Reeducación Vesical + Antimuscarínicos o Mirabegrón',
              'Solifenacina o Tolterodina (vigilar glaucoma) o Mirabegrón 25 a 50 mg al día',
              'Iniciamos reeducación vesical combinada con solifenacina o mirabegrón para relajar el detrusor.',
            ),
          ],
        ),
      ],
    ),
  },
};
