// Clase 18.27 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-27). Códigos (v3_topic_codes.json y v3_codemap.json):
// 2.01.1.089 Fimosis, 2.01.1.131 Sinequias vulvares y 2.01.1.059 Enuresis (el codemap indica el nivel de cada una; el libro:
// Dx específico · Tx completo · seguimiento completo).
// Preguntas reales (rq por códigos + class_questions.cjs --search "fimosis|prepucio|sinequia|enuresis"):
// Enero 2023 P21 y Julio 2025 P62 (fimosis fisiológica), Julio 2024 P50 (fimosis y fiebre: pielonefritis), Julio 2017 P109,
// Agosto 2021 P154 y Julio 2024 P179 (sinequias vulvares). Enunciados y alternativas copiados tal cual del banco.
// Enuresis: el banco real no tiene ninguna pregunta pediátrica del tema; se usa el caso del libro con la etiqueta
// "Banco EUNACOM · Caso representativo" y sin fecha.
// No usadas: Diciembre 2022 P114 (niño de 3 años con prepucio irreductible: clave "corticoide tópico", que contradice a Enero 2023 P21
// y al libro, que no trata la fimosis fisiológica asintomática), Julio 2024 P49 (duplicado de P50), Diciembre 2025 P7 (enuresis en una
// mujer de 95 años: es de geriatría).
// SIN FOTOS por la norma de no mostrar genitales de menores: la biblioteca tiene ped-27/01_sinequia-vulvar (Nelson Fig. 580.5A) y el
// atlas la asigna a esta clase, pero muestra los genitales de una niña y no se incluye en el guion.
// En movimiento: scenes/ped_nuevas.html (?v=enuresis) sobre Blausen "sistema urinario del niño" (tronco, sin genitales), CC BY 3.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-27',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fimosis, sinequias vulvares y enuresis: lo fisiológico no se trata, y lo que se trata, se trata sin violencia',
      say: 'Bienvenido. Hoy vemos tres motivos de consulta que preocupan mucho a los padres y que casi siempre son benignos: el prepucio que no se retrae, los labios menores pegados y el niño que moja la cama. El examen te evalúa en un punto: distinguir lo fisiológico, que se observa, de lo que sí requiere tratamiento, y elegir el manejo suave. Partamos por el prepucio.',
    },

    {
      type: 'points',
      kicker: 'Fimosis',
      title: 'Fisiológica contra patológica',
      cards: [
        { title: 'Fimosis fisiológica', tag: 'No se trata', kind: 'normal', items: [
          { t: 'Al nacer el prepucio no se retrae', d: 'Adherencias balanoprepuciales normales',
            say: 'Al nacer, el prepucio no se retrae, por adherencias balanoprepuciales fisiológicas. Con el tiempo se vuelve retráctil en la mayoría: cerca de la mitad al año, noventa por ciento a los tres años, y noventa y nueve por ciento a los dieciséis o diecisiete.' },
          { t: 'Aseo suave, sin retraer a la fuerza', d: 'Produce fisuras, cicatriz y fimosis secundaria',
            say: 'Mientras el niño esté asintomático, el prepucio estrecho es una fimosis fisiológica que no se trata. Se enseña un aseo suave con agua, y nunca se retrae a la fuerza, porque eso produce fisuras y cicatrices que originan una fimosis secundaria.' },
          { t: 'Perlas de esmegma y abombamiento al orinar', d: 'Benignos en el lactante',
            say: 'Las perlas de esmegma bajo el prepucio son benignas, y el abombamiento del prepucio al orinar es normal en los lactantes.' },
        ] },
        { title: 'Fimosis patológica', tag: 'Cuándo tratar', kind: 'alert', items: [
          { t: 'Anillo fibroso, cicatricial', d: 'Retracción forzada, balanopostitis, liquen escleroso',
            say: 'La fimosis patológica tiene un anillo fibroso blanquecino y cicatricial, secundario a una retracción forzada, a balanopostitis recurrente o a balanitis xerótica obliterante, que es un liquen escleroso y se ve sobre todo después de los cinco años.' },
          { t: 'Sintomática, con balanopostitis o ITU recurrente', d: 'O cicatricial',
            say: 'Se trata la fimosis sintomática, con dolor o con el chorro deformado, la que se acompaña de balanopostitis o infecciones urinarias recurrentes, y la cicatricial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la fimosis',
      title: 'Corticoide primero, circuncisión después',
      cards: [
        { title: 'Tratamiento', tag: 'Inicial / derivar', kind: 'pharma', items: [
          { t: 'Betametasona 0,05-0,1% dos veces al día', d: '4 a 8 semanas, con retracción suave; 70-90%',
            say: 'El tratamiento es un corticoide tópico, betametasona al cero coma cero cinco a cero coma uno por ciento, dos veces al día, por cuatro a ocho semanas, con retracción suave. Funciona en setenta a noventa por ciento.' },
          { t: 'Si falla, cicatricial o liquen: circuncisión', d: 'Urología pediátrica',
            say: 'Si falla, es cicatricial o hay liquen escleroso, se deriva a urología pediátrica para la circuncisión. No se opera si hay hipospadias o megameato, porque el prepucio puede hacer falta para reparar.' },
        ] },
        { title: 'Parafimosis', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Prepucio atrapado detrás del glande', d: 'Edema y dolor',
            say: 'La parafimosis es el prepucio retraído que queda atrapado detrás del glande, con edema y dolor. Es una urgencia: se reduce manualmente después de analgesia y de comprimir el glande.' },
          { t: 'El preescolar asintomático: educar y controlar', d: 'Sin infecciones',
            say: 'En cambio, el niño de tres años con prepucio estrecho, asintomático y sin infecciones, solo requiere educación y control.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sinequias vulvares',
      title: 'Labios menores pegados',
      cards: [
        { title: 'Qué son', tag: 'Hallazgo del control sano', kind: 'normal', items: [
          { t: 'Fusión de los labios menores en la línea media', d: 'Un rafe translúcido y avascular',
            say: 'Las sinequias vulvares son la fusión parcial o completa de los labios menores en la línea media, y forman una línea translúcida y avascular, el rafe. Afectan a una o dos de cada cien niñas prepuberales, con un pico entre los tres meses y los seis años.' },
          { t: 'Estado hipoestrogénico e inflamación local', d: 'Dermatitis del pañal, irritantes',
            say: 'Aparecen por el estado hipoestrogénico fisiológico de esa edad y por la inflamación local, como la dermatitis del pañal. No son congénitas.' },
        ] },
        { title: 'Síntomas', tag: 'Casi siempre ninguno', kind: 'criteria', items: [
          { t: 'Asintomática en la mayoría', d: 'Hallazgo del examen',
            say: 'La mayoría es asintomática, y la descubres tú en el examen o la madre cuando nota que no se ve la vagina.' },
          { t: 'Goteo, disuria, vulvovaginitis, ITU', d: 'Retención urinaria, excepcional',
            say: 'Las complicaciones son el goteo posmiccional, la disuria, la vulvovaginitis y la infección urinaria recurrente, y excepcionalmente la retención urinaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de las sinequias',
      title: 'Lubricar, o betametasona si es completa',
      cards: [
        { title: 'Según el cuadro', tag: 'Nivel completo', kind: 'pharma', items: [
          { t: 'Parcial o asintomática: higiene y vaselina', d: 'Resuelve con la pubertad',
            say: 'Si la sinequia es parcial o asintomática, se tranquiliza, se indica higiene suave, se evitan los irritantes y se lubrica a diario con vaselina o un emoliente. Se resuelve sola, a más tardar con la pubertad, por el aumento de los estrógenos.' },
          { t: 'Completa o sintomática: betametasona 0,05%', d: '2 a 4 semanas; luego emoliente',
            say: 'Si es completa, de modo que impide ver el meato, o es sintomática, se indica betametasona al cero coma cero cinco por ciento, dos veces al día, por dos a cuatro semanas, y después un emoliente para evitar recidivas, que ocurren en diez a quince por ciento. La alternativa es una crema de estrógenos conjugados, con riesgo de irritación, hiperpigmentación y telarquia.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Contraindicado', kind: 'alert', items: [
          { t: 'Separación manual forzada y cirugía', d: 'Dolor, trauma, recurrencia, daño psicológico',
            say: 'La separación manual forzada y la cirugía están contraindicadas, por el dolor, el trauma, la recurrencia y el daño psicológico. La separación bajo sedación solo se justifica en una retención urinaria aguda.' },
          { t: 'Diferenciales: himen imperforado, abuso', d: 'Cicatriz con lesiones asociadas: considerar maltrato',
            say: 'Entre los diferenciales están el himen imperforado, la agenesia vaginal y una cicatriz por trauma o abuso sexual: una cicatriz con otras lesiones asociadas obliga a considerar el maltrato. Se deriva si hay infección urinaria recurrente, retención, falla del tratamiento tópico o sospecha de otra malformación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Enuresis',
      title: 'Cómo se define y se clasifica',
      cards: [
        { title: 'Definición', tag: '5 años o más', kind: 'key', items: [
          { t: 'Micción involuntaria durante el sueño', d: '≥ 5 años, 2 veces al mes por 3 meses',
            say: 'La enuresis es la micción involuntaria durante el sueño en un niño de cinco años o más, con al menos dos episodios al mes durante tres meses. Afecta al quince por ciento a los cinco años y al cinco por ciento a los diez, más a los varones y con antecedente familiar.' },
        ] },
        { title: 'Clasificación', tag: 'Dos ejes', kind: 'criteria', items: [
          { t: 'Primaria: nunca 6 meses secos (80%)', d: 'Secundaria: reaparece tras 6 meses de continencia',
            say: 'Es primaria si nunca logró seis meses continuos secos, y es el ochenta por ciento. Es secundaria si reaparece después de seis meses de continencia, y entonces buscas infección urinaria, diabetes, constipación, apnea del sueño, epilepsia o estrés psicosocial, incluido el abuso.' },
          { t: 'Monosintomática: solo nocturna', d: 'No monosintomática: urgencia, polaquiuria, incontinencia diurna',
            say: 'Es monosintomática si solo hay síntomas nocturnos, y no monosintomática si hay urgencia, polaquiuria o incontinencia diurna, lo que sugiere disfunción vesical, anomalías anatómicas o vejiga neurogénica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tres causas que se suman en la noche',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'cause', t: 'Menos vasopresina nocturna', s: 'Poliuria nocturna' },
        { id: 'b', col: 0, row: 2, k: 'cause', t: 'Vejiga hiperactiva', s: 'Capacidad baja' },
        { id: 'c', col: 0, row: 4, k: 'cause', t: 'Sueño muy profundo', s: 'No despierta' },
        { id: 'd', col: 2, row: 2, k: 'mech', t: 'La vejiga se llena y no avisa', s: 'Supera su capacidad' },
        { id: 'e', col: 4, row: 2, k: 'effect', t: 'Enuresis', s: 'Benigna; mejora con el manejo escalonado' },
      ],
      edges: [
        { from: 'a', to: 'd' }, { from: 'b', to: 'd' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Tres mecanismos',
          say: 'Los tres mecanismos que explican la enuresis son la poliuria nocturna, por menor secreción nocturna de vasopresina, una vejiga hiperactiva de baja capacidad, y un sueño tan profundo que no despierta ante la necesidad de orinar.' },
        { show: ['d', 'e'], note: 'Se suman en la noche',
          say: 'Se suman durante la noche: la vejiga se llena más de lo que aguanta, y el niño no despierta. Por eso la enuresis es benigna, frecuente y mejora con un manejo escalonado, sin castigos.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Una noche con y sin enuresis',
      images: [
        { src: 'animaciones/ped-27/A1_enuresis_noche.mp4', label: 'La vejiga durante la noche', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Menos vasopresina, más orina',
          say: 'Mira los riñones y la vejiga. En el niño sin enuresis, la vasopresina es alta por la noche, los riñones fabrican poca orina y la vejiga llega a la mañana con espacio de sobra. En la enuresis, la vasopresina nocturna es menor, los riñones producen mucha más orina, la vejiga llega a su capacidad y, como el sueño es profundo, el niño no despierta, y se vacía en la cama.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Qué preguntas y qué examen',
      cards: [
        { title: 'Historia y examen', tag: 'Sin imágenes de entrada', kind: 'criteria', items: [
          { t: 'Historia miccional y diario', d: 'Líquidos, deposiciones, ronquidos',
            say: 'Pides una historia miccional y un diario de ingesta de líquidos por una o dos semanas. Preguntas por los hábitos intestinales, por la constipación, y por los ronquidos.' },
          { t: 'Genitales, abdomen, columna lumbosacra', d: 'Fosita o mechón de pelos; neurológico',
            say: 'Al examen, genitales, abdomen y la columna lumbosacra, buscando una fosita o un mechón de pelos, y el examen neurológico de las extremidades inferiores.' },
        ] },
        { title: 'Exámenes', tag: 'Solo si corresponde', kind: 'key', items: [
          { t: 'Orina completa; glicemia si hay poliuria', d: '',
            say: 'Pides una orina completa, y una glicemia si hay poliuria.' },
          { t: 'Ecografía renal y vesical: no monosintomática', d: 'O ITU, o hallazgos anormales',
            say: 'La ecografía renal y vesical se reserva para la forma no monosintomática, para la infección urinaria o los hallazgos anormales. En la enuresis monosintomática con examen y orina normales, no se piden imágenes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la enuresis',
      title: 'Cinco pasos escalonados',
      cards: [
        { title: 'Primeros pasos', tag: 'Para todos', kind: 'key', items: [
          { t: 'Desculpabilizar, sin castigos', d: 'Es frecuente y benigna',
            say: 'El tratamiento es escalonado. Primero, desculpabilizar al niño y a los padres, sin castigos, explicando que es frecuente y benigna.' },
          { t: 'Medidas conductuales', d: 'Orinar antes de dormir; menos líquidos 1-2 h antes; calendario',
            say: 'Segundo, medidas conductuales: orinar antes de dormir, restringir los líquidos una o dos horas antes de acostarse, tratar la constipación y reforzar con un calendario los días secos.' },
        ] },
        { title: 'Si no basta', tag: 'Lo que se pregunta', kind: 'pharma', items: [
          { t: 'Alarma de enuresis desde los 7 años', d: 'Mayor eficacia a largo plazo, ~70%',
            say: 'Tercero, la alarma de enuresis, en niños motivados de siete años o más. Es el tratamiento de mayor eficacia a largo plazo, cerca de setenta por ciento.' },
          { t: 'Desmopresina 0,2-0,4 mg de noche', d: 'Puntual o si falla la alarma; limitar el agua',
            say: 'Cuarto, la desmopresina, de cero coma dos a cero coma cuatro miligramos en la noche, para situaciones puntuales o si falla la alarma. Se limita el agua para evitar la hiponatremia.' },
          { t: 'Oxibutinina si hay vejiga hiperactiva', d: 'Imipramina en desuso',
            say: 'Quinto, anticolinérgicos como la oxibutinina si hay vejiga hiperactiva. La imipramina está en desuso por su toxicidad. Se deriva a nefrología o urología la enuresis no monosintomática refractaria, la secundaria con causa orgánica o la que no responde a dos tratamientos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Alteraciones genitales y enuresis: qué haces',
      head: ['Entidad', 'Dato clave', 'Manejo', 'Derivar'],
      rows: [
        { cells: ['Fimosis fisiológica', 'Preescolar asintomático', 'Aseo suave; no retraer a la fuerza', 'Si persiste con síntomas'],
          say: 'En resumen. Fimosis fisiológica del preescolar asintomático: aseo suave, sin retraer a la fuerza, y control. Se deriva si persiste con síntomas o cicatriz.' },
        { cells: ['Fimosis sintomática o cicatricial', 'Anillo fibroso, balanopostitis o ITU', 'Betametasona 4-8 semanas', 'Falla o liquen: circuncisión'],
          say: 'Fimosis sintomática o cicatricial: betametasona por cuatro a ocho semanas, y circuncisión si falla o hay liquen escleroso.' },
        { cells: ['Sinequia parcial', 'Línea translúcida, asintomática', 'Higiene y vaselina; observar', 'ITU recurrente o retención'],
          say: 'Sinequia parcial asintomática: higiene, vaselina y observación.' },
        { cells: ['Sinequia completa o sintomática', 'Impide ver el meato, goteo o ITU', 'Betametasona 0,05%, 2-4 semanas; emoliente', 'Falla del tópico'],
          say: 'Sinequia completa, que impide ver el meato, o sintomática: betametasona dos a cuatro semanas y luego emoliente. Nunca separación manual.' },
        { cells: ['Enuresis primaria monosintomática', '≥ 5 años, solo nocturna, normal', 'Educación, conductual, alarma o desmopresina', 'No monosintomática refractaria o secundaria'],
          say: 'Y la enuresis primaria monosintomática: educación, medidas conductuales, alarma o desmopresina, sin imágenes. Se deriva si no es monosintomática y es refractaria, o si es secundaria con causa orgánica.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del motivo de consulta a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niña de 3 años, traída a control de salud. La madre nota que «no se le ve la vagina». No refiere disuria, goteo post-miccional ni infecciones urinarias previas. Al examen, desarrollo puberal Tanner 1, labios menores fusionados en la línea media por una membrana delgada y translúcida que cubre parcialmente el introito; el meato urinario es visible y el flujo miccional es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Separación manual de los labios bajo anestesia local' },
        { letter: 'B', text: 'Tranquilizar a la madre, indicar higiene suave y lubricación con vaselina, y controlar' },
        { letter: 'C', text: 'Betametasona tópica por 4 semanas y derivar a cirugía' },
        { letter: 'D', text: 'Antibiótico profiláctico hasta la pubertad' },
        { letter: 'E', text: 'Cirugía correctora electiva' },
      ],
      correct: 'B',
      explanation: 'Es una sinequia vulvar parcial asintomática, hallazgo benigno por el estado hipoestrogénico de la edad. Se tranquiliza a la madre, se indica higiene suave y lubricación con vaselina, y se controla; se resuelve espontáneamente con la pubertad. No se debe separar manualmente ni operar. Si la sinequia fuera completa o sintomática, se usaría betametasona tópica 0,05% por 2 a 4 semanas.',
      say: {
        stem: 'Una niña de tres años va a control, y la madre cuenta que no se le ve la vagina. No tiene disuria, goteo ni infecciones urinarias. Al examen, está en Tanner uno, con los labios menores fusionados por una membrana delgada y translúcida que cubre parcialmente el introito. El meato es visible y el chorro es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: separación manual bajo anestesia; tranquilizar, higiene y vaselina; betametasona por cuatro semanas y cirugía; antibiótico profiláctico; o cirugía correctora. Piénsalo.',
        answer: 'Es la B. Es una sinequia parcial y asintomática, con el meato visible: se observa con higiene y lubricación, y se resuelve a más tardar con la pubertad. La C tienta porque la betametasona sí existe, pero es para la sinequia completa que impide ver el meato, o la sintomática. Y separar a la fuerza o operar es lo que no se hace.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 21',
      stem: 'Niño de 3 años con prepucio estrecho, con control de esfínteres hace 6 meses.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Circuncisión inmediata' },
        { letter: 'B', text: 'Aplicar corticoide tópico' },
        { letter: 'C', text: 'Control en un año' },
        { letter: 'D', text: 'Dilatación manual bajo anestesia' },
        { letter: 'E', text: 'Derivar a urología pediátrica urgente' },
      ],
      correct: 'C',
      explanation: 'A los 3 años la mayoría de los prepucios aún no es completamente retráctil por adherencias balanoprepuciales fisiológicas; sin síntomas ni infecciones, se educa en el aseo suave y se controla. La circuncisión no está indicada en una fimosis fisiológica asintomática; el corticoide tópico se reserva para la sintomática o persistente; la dilatación forzada produce fisuras y cicatrices.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un niño de tres años tiene el prepucio estrecho, y controla esfínteres desde hace seis meses.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: circuncisión inmediata; corticoide tópico; control en un año; dilatación manual bajo anestesia; o derivar urgente a urología. Piénsalo.',
        answer: 'Es la C. A los tres años, un prepucio estrecho sin síntomas ni infecciones es una fimosis fisiológica: se educa en el aseo suave y se controla. La B tienta porque el corticoide es el tratamiento de la fimosis, pero se reserva para la sintomática o persistente. Y la dilatación forzada produce cicatrices.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 62',
      stem: 'Niño de 5 años con incapacidad de retraer el prepucio sobre el glande. Sin dolor ni infecciones previas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Circuncisión electiva inmediata' },
        { letter: 'B', text: 'Tranquilizar: fimosis fisiológica normal hasta los 6-7 años; observar' },
        { letter: 'C', text: 'Corticoides tópicos en el prepucio' },
        { letter: 'D', text: 'Derivar a urología' },
        { letter: 'E', text: 'Dilatación manual bajo anestesia' },
      ],
      correct: 'B',
      explanation: 'Un prepucio que no se retrae, sin dolor ni infecciones, es una fimosis fisiológica: no requiere intervención. Se tranquiliza y se observa; se trata solo si hay síntomas, balanopostitis o infecciones urinarias recurrentes, o cicatriz.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un niño de cinco años no puede retraer el prepucio sobre el glande. No tiene dolor ni infecciones previas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: circuncisión electiva inmediata; tranquilizar y observar; corticoides tópicos; derivar a urología; o dilatación manual bajo anestesia. Piénsalo.',
        answer: 'Es la B. Sin dolor ni infecciones, es una fimosis fisiológica y se observa. Los corticoides y la circuncisión son para la fimosis sintomática, con balanopostitis, infecciones urinarias recurrentes o cicatriz.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 50',
      stem: 'Un niño de 3 años, con antecedente de fimosis, presenta fiebre alta, hasta 39,5°C, desde hace 48 horas, asociada a vómitos y malestar general. Su examen físico muestra frecuencia cardíaca: 130x’, T°: 39,0°C, faringe congestiva, examen cardiopulmonar y abdominal sin alteraciones relevantes. Se solicitan exámenes, entre los que se informa sedimento de orina con 20 glóbulos rojos por campo, 50 glóbulos blancos por campo, bacterias en moderada cantidad; además, tiene hemograma con hematocrito: 42%, hemoglobina: 13 g/dl, leucocitos: 14.000 por mm3 y plaquetas: 228.000 por mm3, con VSG: 42 mm/h. Hemocultivos pendientes.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Balanopostitis' },
        { letter: 'B', text: 'Neumonía adquirida en la comunidad' },
        { letter: 'C', text: 'Influenza' },
        { letter: 'D', text: 'Síndrome hemolítico urémico' },
        { letter: 'E', text: 'Pielonefritis aguda' },
      ],
      correct: 'E',
      explanation: 'La fimosis puede orientar a balanopostitis o a pielonefritis aguda. La balanopostitis presenta alteraciones cutáneas en el prepucio y el glande, sin fiebre. La pielonefritis se presenta con fiebre, y aquí la leucocituria elevada (50 glóbulos blancos por campo) la confirma.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un niño de tres años, con antecedente de fimosis, tiene fiebre de treinta y nueve y medio hace cuarenta y ocho horas, con vómitos y malestar. La faringe está congestiva, y el resto del examen es normal. El sedimento de orina tiene veinte glóbulos rojos y cincuenta glóbulos blancos por campo, con bacterias, y el hemograma tiene catorce mil leucocitos y VHS de cuarenta y dos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: balanopostitis; neumonía; influenza; síndrome hemolítico urémico; o pielonefritis aguda. Piénsalo.',
        answer: 'Es la E. La fimosis aumenta el riesgo de infección urinaria, y la fiebre alta con cincuenta leucocitos por campo en la orina es una pielonefritis. La A tienta por el antecedente de fimosis, pero la balanopostitis es local, con alteraciones de la piel del prepucio y sin fiebre. Y la faringe congestiva es la distracción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 109',
      stem: 'Una niña de 4 años presenta sinequia vulvar parcial, de los labios menores. No tie- ne desarrollo puberal, ni antecedentes de infecciones urinarias, ni genitales. El resto de su examen físico es normal.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Realizar lavados con ácido acéticos' },
        { letter: 'B', text: 'Aplicar corticoides tópicos' },
        { letter: 'C', text: 'Remover las sinequias de manera quirúrgica' },
        { letter: 'D', text: 'Indicar antibióticos' },
        { letter: 'E', text: 'Realizar aseo y masajes en la zona' },
      ],
      correct: 'E',
      explanation: 'La sinequia parcial asintomática se maneja con higiene suave y lubricación (aseo y masajes) y se resuelve espontáneamente, a más tardar con la pubertad. El corticoide se reserva para la completa o sintomática; la cirugía no está indicada, no hay infección que tratar y los lavados con ácido acético no tienen utilidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una niña de cuatro años tiene una sinequia vulvar parcial de los labios menores. No tiene desarrollo puberal ni antecedentes de infecciones urinarias, y el resto del examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: lavados con ácido acético; corticoides tópicos; remover quirúrgicamente; antibióticos; o aseo y masajes en la zona. Piénsalo.',
        answer: 'Es la E. Una sinequia parcial asintomática se maneja con aseo suave y lubricación, y se resuelve sola. La B tienta porque la betametasona sí se usa en las sinequias, pero en las completas o sintomáticas. La cirugía no se indica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 154',
      stem: 'Una niña de 4 años presenta sinequia vulvar que une gran parte de los labios menores, por lo que impide ver el introito y el himen. No tiene desarrollo puberal, ni antecedentes de infecciones urinarias, ni genitales. El resto de su examen físico es normal.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Realizar lavados con ácido acético' },
        { letter: 'B', text: 'Aplicar corticoides tópicos' },
        { letter: 'C', text: 'Remover las sinequias de manera quirúrgica' },
        { letter: 'D', text: 'Realizar separación manual bajo anestesia local' },
        { letter: 'E', text: 'Indicar lubricación diaria con vaselina' },
      ],
      correct: 'E',
      explanation: 'Las sinequias vulvares asintomáticas en niñas se observan y se manejan con lubricación y aseo, porque no son congénitas y suelen desaparecer con la llegada de la pubertad. La separación manual y la cirugía no se indican.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una niña de cuatro años tiene una sinequia vulvar que une gran parte de los labios menores e impide ver el introito y el himen. No tiene desarrollo puberal ni antecedentes de infecciones urinarias, y el resto del examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: lavados con ácido acético; corticoides tópicos; remover quirúrgicamente; separación manual con anestesia local; o lubricación diaria con vaselina. Piénsalo.',
        answer: 'Es la E. Aunque la sinequia sea extensa, si la niña está asintomática se observa con lubricación y aseo, y se resuelve con la pubertad. La D es la trampa: la separación manual no se hace. La B se reserva para la sinequia completa que impide ver el meato o la sintomática.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 179',
      stem: 'Una niña de 2 años de edad es traída por su madre a control de niño sano. Al examen físico se objetivan genitales con labios menores completamente adheridos entre sí en la línea media, lo que impide la visualización de la vagina y el meato urinario.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resección quirúrgica de las adherencias' },
        { letter: 'B', text: 'Realizar avulsión digital, bajo anestesia local con lidocaína' },
        { letter: 'C', text: 'Indicar aseo genital diario con vaselina líquida' },
        { letter: 'D', text: 'Aplicar pantenol tópico en la zona perineal por 15 días' },
        { letter: 'E', text: 'Aplicar betametasona tópica en la zona afectada por 10 días' },
      ],
      correct: 'E',
      explanation: 'En la sinequia completa que impide visualizar el meato se indica corticoide tópico (betametasona 0,05%) por 2 a 4 semanas, seguido de un emoliente de mantención. No se opera, y la separación manual es dolorosa, traumática y recurre; con la adherencia completa, la lubricación sola es insuficiente; el pantenol no actúa sobre las adherencias.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una niña de dos años va a control sano. Los labios menores están completamente adheridos en la línea media, y no se ven la vagina ni el meato urinario.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: resección quirúrgica; avulsión digital con lidocaína; aseo con vaselina líquida; pantenol tópico; o betametasona tópica. Piénsalo.',
        answer: 'Es la E. Cuando la adherencia es completa y no se ve el meato, la lubricación sola no basta y se usa la betametasona tópica por dos a cuatro semanas, con emoliente después. La B y la A tientan por rápidas, pero separar a la fuerza o resecar es doloroso, traumático y recurre. La diferencia con la pregunta anterior es que aquí el meato no se ve.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 7 años moja la cama casi todas las noches desde siempre. Durante el día controla la micción sin urgencia ni incontinencia, no tiene constipación y el examen físico, incluido el examen de orina, es normal. Nunca ha recibido tratamiento.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Ecografía renal y vesical y uretrocistografía' },
        { letter: 'B', text: 'Educación y medidas conductuales (micción antes de dormir, reducir líquidos nocturnos, calendario)' },
        { letter: 'C', text: 'Imipramina oral' },
        { letter: 'D', text: 'Derivar a urología pediátrica' },
        { letter: 'E', text: 'Indicar pañales hasta la adolescencia' },
      ],
      correct: 'B',
      explanation: 'Es una enuresis primaria monosintomática: incontinencia nocturna en mayores de 5 años que nunca han logrado control, sin síntomas diurnos. Es frecuente y benigna; el manejo inicial es desculpabilizar, educar y aplicar medidas conductuales. Si fracasan, alarma de enuresis o desmopresina. Con examen y orina normales no se requieren imágenes; la imipramina está en desuso por su toxicidad; los pañales no tratan y perpetúan el problema.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Un niño de siete años moja la cama casi todas las noches desde siempre. De día controla sin urgencia ni incontinencia, no tiene constipación y el examen físico, incluida la orina, es normal. Nunca ha recibido tratamiento.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: ecografía renal y vesical con uretrocistografía; educación y medidas conductuales; imipramina; derivar a urología; o pañales hasta la adolescencia. Piénsalo.',
        answer: 'Es la B. Es una enuresis primaria monosintomática: se desculpabiliza, se educa y se parte con medidas conductuales. Si fracasan, la alarma o la desmopresina. La A tienta porque parece un estudio completo, pero con examen y orina normales no se piden imágenes. La imipramina está en desuso.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: genitales y enuresis',
      cards: [
        { title: 'No tratar lo fisiológico', tag: 'Observar y educar', kind: 'key', items: [
          { t: 'Fimosis fisiológica: aseo suave y control', d: 'Nunca retraer a la fuerza',
            say: 'Cerremos con las reglas de oro. La fimosis fisiológica del preescolar asintomático no se trata: aseo suave y control, y nunca se retrae a la fuerza.' },
          { t: 'Fimosis sintomática: betametasona', d: 'Circuncisión si falla o hay liquen',
            say: 'Si es sintomática, con balanopostitis o infecciones urinarias, betametasona por cuatro a ocho semanas, y circuncisión si falla.' },
          { t: 'Sinequia parcial: higiene y vaselina', d: 'Completa o sintomática: betametasona 2-4 semanas',
            say: 'La sinequia vulvar parcial se observa con higiene y vaselina. Si es completa y no se ve el meato, o es sintomática, betametasona dos a cuatro semanas. Nunca separación manual ni cirugía.' },
        ] },
        { title: 'Enuresis', tag: 'Escalonado', kind: 'alert', items: [
          { t: 'Monosintomática: educar y conductual', d: 'Sin imágenes si examen y orina normales',
            say: 'La enuresis primaria monosintomática se maneja con educación y medidas conductuales, sin imágenes si el examen y la orina son normales.' },
          { t: 'Alarma desde los 7 años; luego desmopresina', d: 'Derivar si es refractaria o secundaria orgánica',
            say: 'Si no basta, alarma de enuresis desde los siete años, y desmopresina. Se deriva la no monosintomática refractaria o la secundaria con causa orgánica. Si te llevas una sola idea de hoy: lo fisiológico se observa y se educa, y nunca se fuerza. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fimosis, sinequia vulvar y enuresis',
    root: N('start', 'Consulta por genitales o enuresis', 'Edad, síntomas, infecciones, examen',
      'Los padres consultan por el prepucio, por los labios menores o porque el niño moja la cama. Preguntas por la edad, los síntomas y las infecciones, examinas, y te preguntas: ¿de cuál de los tres se trata?',
      ['Prepucio que no se retrae', N('q', '¿Hay síntomas o infecciones?', 'Dolor, balanopostitis, ITU, cicatriz',
        'Si es el prepucio, te preguntas si hay síntomas, balanopostitis, infecciones urinarias o cicatriz.',
        ['No: preescolar asintomático', N('ok', 'Fimosis fisiológica', 'Aseo suave, sin retraer; control',
          'Si no hay nada de eso, es una fimosis fisiológica. Aseo suave, sin retraer a la fuerza, y control.')],
        ['Sí', N('do', 'Betametasona 4-8 semanas', 'Si falla o liquen: circuncisión',
          'Si hay síntomas, balanopostitis, infección urinaria o cicatriz, betametasona por cuatro a ocho semanas, y circuncisión por urología si falla o hay liquen escleroso.')],
        ['Prepucio atrapado y doloroso', N('alert', 'Parafimosis', 'Analgesia y reducción manual',
          'Si el prepucio quedó atrapado detrás del glande, con edema y dolor, es una parafimosis, una urgencia: analgesia y reducción manual.')],
      )],
      ['Labios menores pegados', N('q', '¿Se ve el meato?', 'Completa o sintomática',
        'Si son los labios menores, te preguntas si la sinequia es completa, impide ver el meato o da síntomas.',
        ['Parcial y asintomática', N('ok', 'Higiene y vaselina', 'Observar; resuelve con la pubertad',
          'Si es parcial y asintomática, higiene suave y lubricación diaria con vaselina, y observar.')],
        ['Completa o sintomática', N('do', 'Betametasona 0,05%', '2-4 semanas; luego emoliente',
          'Si es completa o sintomática, betametasona dos veces al día por dos a cuatro semanas y después un emoliente. Nunca separación manual ni cirugía.',
          ['ITU recurrente, retención o falla', N('refer', 'Derivar', 'Por otra malformación o abuso',
            'Si hay infección urinaria recurrente, retención urinaria, falla del tratamiento o sospecha de otra malformación, o de maltrato, derivas.')],
        )],
      )],
      ['Moja la cama (5 años o más)', N('q', '¿Monosintomática y primaria?', 'Examen y orina normales',
        'Si moja la cama, defines si es primaria, monosintomática, con examen y orina normales.',
        ['Primaria monosintomática', N('do', 'Manejo escalonado', 'Educar, conductual, alarma desde 7 años, desmopresina',
          'Desculpabilizas, indicas medidas conductuales, alarma de enuresis desde los siete años y, si falla, desmopresina. Sin imágenes.')],
        ['No monosintomática o secundaria', N('refer', 'Estudio y derivación', 'Eco renal y vesical; nefrología o urología',
          'Si hay síntomas diurnos o es secundaria, buscas infección urinaria, diabetes, constipación o apnea, pides ecografía renal y vesical cuando corresponde, y derivas a nefrología o urología si es refractaria o hay causa orgánica.')],
      )],
    ),
  },
};
