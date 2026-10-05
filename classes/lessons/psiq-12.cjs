// Clase 17.12 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-12). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (4.01.1.001) no trae preguntas reales; las de trastorno delirante están bajo 5.01.1.010. De la búsqueda por tema se usaron:
//   Agosto 2021 P90 (convicción sobre vacunas, funcionamiento laboral normal), Diciembre 2017 P108 (delirio de celos), Julio 2013 P17 (delirio erotomaníaco de 10 años),
//   Julio 2017 P95 (convicción de tener VIH, delirio somático), Diciembre 2025 P71 (persecutorio de 10 años; diferencia con personalidad paranoide).
// No usadas por repetir lo mismo: Julio 2015 P76, Diciembre 2019 P171, Enero 2023 P135, Diciembre 2017 P109, Diciembre 2019 P95 (esquizoafectivo, fuera del libro de esta clase).
// DESCARTADAS: Diciembre 2022 P83 (vecinos que entran al departamento, sin síntomas de ánimo y Minimental 29/30; la clave del banco dice depresión con síntomas psicóticos, lo que no calza con el enunciado ni con el libro),
//   Julio 2017 P69 (84 años, 4 semanas de evolución: borderline en el corte de 1 mes y mezcla delirium/demencia, que va en neuro), Diciembre 2017 P110 (clave esquizofrenia en una viñeta esquizoafectiva).
// Sin pregunta real sobre psicosis breve ni esquizofreniforme: se usa una pregunta del libro como "Caso representativo" (la de trastorno delirante del libro se omite porque hay reales).
// Cuidado clínico: el libro dice "crónico refractario a psicofármacos" en la tabla y "antipsicóticos atípicos" como tratamiento: se enseña tratamiento con atípico y respuesta variable. El banco (Dic 2025 P71) habla de "mayor a 3 meses";
//   se sigue el libro y el DSM-5 (1 mes como mínimo; en la práctica suele llevar meses o años). Celotipia: se enfatiza la evaluación del riesgo para la pareja.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Psicosis que no son esquizofrenia: trastorno psicótico breve, esquizofreniforme y trastorno delirante',
      say: 'Bienvenido. Hoy cerramos la serie de psicosis con las que no son esquizofrenia. Todo se decide por el tiempo y por cuánto se deteriora la vida de la persona. Veremos el trastorno psicótico breve, el esquizofreniforme y el trastorno delirante crónico, que en el examen aparece como un paciente con una convicción imposible pero que trabaja y funciona con normalidad.',
    },

    {
      type: 'flow',
      kicker: 'El reloj',
      title: 'La cronología decide el diagnóstico',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Psicosis con síntomas', s: 'Delirios, voces, desorganización' },
        { id: 'b', col: 1, row: 1, k: 'effect', t: 'Psicótico breve', s: '1 día a menos de 1 mes' },
        { id: 'c', col: 2, row: 1, k: 'good', t: 'Vuelve a la normalidad', s: 'Restitución completa' },
        { id: 'd', col: 1, row: 3, k: 'alert', t: 'Esquizofreniforme', s: '1 a 6 meses' },
        { id: 'e', col: 2, row: 3, k: 'alert', t: 'Esquizofrenia', s: 'Más de 6 meses' },
        { id: 'f', col: 3, row: 2, k: 'trap', t: 'Trastorno delirante', s: 'Solo delirio, vida conservada' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'a', to: 'd' }, { from: 'd', to: 'e', label: 'Si pasa de 6 meses' }, { from: 'a', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Menos de 1 mes: psicótico breve',
          say: 'Cuando la psicosis florida dura menos de un mes y la persona vuelve por completo a su nivel previo, es un trastorno psicótico breve. Es el cuadro que antes se llamaba psicosis reactiva breve.' },
        { show: ['d', 'e'], note: 'De 1 a 6 meses: esquizofreniforme',
          say: 'Si los síntomas son los de la esquizofrenia, pero duran entre uno y seis meses, es esquizofreniforme. Si pasan de seis meses, se reclasifica como esquizofrenia, que vimos en la clase anterior.' },
        { show: ['f'], note: 'Delirio aislado y vida conservada',
          say: 'Y hay un tercer camino: la persona tiene solo un delirio estructurado, durante más de un mes, sin los demás síntomas de la esquizofrenia y con su funcionamiento casi intacto. Eso es el trastorno delirante.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Menos de un mes',
      title: 'Trastorno psicótico breve',
      cards: [
        { title: 'Cómo se reconoce', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Inicio súbito; menos de 1 mes', d: 'Delirios, alucinaciones o habla desorganizada',
            say: 'Aparece de forma súbita con al menos uno de estos síntomas: delirios, alucinaciones, lenguaje desorganizado o conducta muy desorganizada o catatónica. Dura al menos un día y menos de un mes.' },
          { t: 'Retorno completo al nivel previo', d: 'Restitución ad integrum',
            say: 'La clave es el final: la persona vuelve por completo a su funcionamiento previo, sin secuelas. Eso lo distingue de la esquizofrenia.' },
          { t: 'Estresor grave o posparto', d: 'Catástrofes, duelo, agresiones',
            say: 'Suele ocurrir tras un estresor muy grave, como una catástrofe, un duelo traumático o una agresión violenta, o en el posparto.' },
        ] },
        { title: 'Manejo', tag: 'Corto plazo', kind: 'pharma', items: [
          { t: 'Contención en ambiente protegido', d: 'Y apoyo de la familia',
            say: 'El manejo es contención en un ambiente protegido y apoyo psicológico.' },
          { t: 'Antipsicótico en dosis baja', d: 'Por semanas a pocos meses',
            say: 'Se usa un antipsicótico a dosis bajas por un tiempo limitado, de semanas a pocos meses, y psicoterapia de apoyo. El pronóstico a largo plazo es excelente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Entre uno y seis meses',
      title: 'Trastorno esquizofreniforme',
      cards: [
        { title: 'Qué es', tag: 'Puente', kind: 'key', items: [
          { t: 'Clínica idéntica a esquizofrenia', d: 'Positivos y negativos',
            say: 'El trastorno esquizofreniforme tiene los mismos síntomas que la esquizofrenia, con delirios, alucinaciones y síntomas negativos, pero con una duración transitoria.' },
          { t: 'Dura de 1 a 6 meses', d: 'Si pasa de 6 meses: esquizofrenia',
            say: 'La duración es de uno a seis meses. Si los síntomas superan los seis meses, se reclasifica como esquizofrenia.' },
          { t: 'Pronóstico reservado', d: 'Muchos progresan a esquizofrenia',
            say: 'El pronóstico es reservado: según el libro, entre sesenta y ochenta por ciento termina en esquizofrenia. Es un diagnóstico de transición, y lo importante es seguir de cerca.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Más de un mes',
      title: 'Trastorno delirante crónico',
      cards: [
        { title: 'Qué lo define', tag: 'Antes: paranoia', kind: 'criteria', items: [
          { t: 'Delirio no bizarro, 1 mes', d: 'Bien sistematizado y verosímil',
            say: 'El trastorno delirante es una o más ideas delirantes que persisten al menos un mes. Son no bizarras, es decir, imaginables en la vida real, como que la pareja es infiel o que lo persiguen, y están muy sistematizadas. En la práctica suele llevar meses o años.' },
          { t: 'Nunca cumplió criterio A de esquizofrenia', d: 'Sin desorganización ni negativos',
            say: 'No debe haber cumplido nunca el criterio A de esquizofrenia: no hay alucinaciones prominentes, ni lenguaje desorganizado, ni catatonía, ni síntomas negativos. Si hay alucinaciones, están ligadas al delirio, como oler veneno en la comida.' },
        ] },
        { title: 'Lo que más se pregunta', tag: 'Sello del examen', kind: 'key', items: [
          { t: 'Funcionamiento conservado', d: 'Trabaja y se cuida, salvo en el tema',
            say: 'El sello es que fuera del tema del delirio la persona funciona normalmente: conserva su trabajo, su autocuidado y un discurso coherente. Se parece mucho a una persona sana, hasta que se toca el tema.' },
          { t: 'Convicción inamovible', d: 'No acepta pruebas en contra',
            say: 'Y la convicción es total: no hay argumento ni prueba que la mueva, y se enoja con quien lo contradice. Esa certeza absoluta es lo que separa un delirio de una desconfianza.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Subtipos',
      title: 'Los tipos de delirio',
      cards: [
        { title: 'Los más preguntados', tag: 'Celos y persecución', kind: 'alert', items: [
          { t: 'Celotípico: síndrome de Otelo', d: 'Alto riesgo de violencia y homicidio',
            say: 'El tipo celotípico, llamado síndrome de Otelo, es la convicción de que la pareja es infiel. Tiene un riesgo muy alto de violencia intrafamiliar y de homicidio, y por eso exige una evaluación prioritaria de seguridad.' },
          { t: 'Persecutorio', d: 'Conspiración, espionaje, difamación',
            say: 'El persecutorio es la creencia de ser víctima de una conspiración, de espionaje o de difamación.' },
        ] },
        { title: 'Otros tipos', tag: 'Menos frecuentes', kind: 'key', items: [
          { t: 'Erotomaníaco: síndrome de Clérambault', d: 'Alguien de estatus lo ama en secreto',
            say: 'El erotomaníaco, o síndrome de Clérambault, es la convicción de que una persona de estatus superior, un famoso o un jefe, está secretamente enamorada de uno.' },
          { t: 'Somático: parásitos, mal olor, enfermedad', d: 'Síndrome de Ekbom',
            say: 'El somático es la creencia de estar infestado de parásitos, el síndrome de Ekbom, de emitir mal olor o de tener una enfermedad que los exámenes no encuentran.' },
          { t: 'Grandiosidad', d: 'Talento o descubrimiento extraordinario',
            say: 'Y el de grandiosidad, la convicción de poseer un talento o un descubrimiento extraordinario que nadie reconoce.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial',
      title: 'Cuando se parece pero no es',
      cards: [
        { title: 'Frente a esquizofrenia', tag: 'Primera trampa', kind: 'alert', items: [
          { t: 'Sin voces, desorganización ni negativos', d: 'Y sin deterioro global',
            say: 'La diferencia con la esquizofrenia es que aquí no hay alucinaciones prominentes, ni desorganización, ni síntomas negativos, y la vida sigue funcionando. En la esquizofrenia hay abulia, afecto plano y deterioro global.' },
        ] },
        { title: 'Frente a personalidad paranoide', tag: 'Segunda trampa', kind: 'key', items: [
          { t: 'Delirio: pérdida del juicio de realidad', d: 'Personalidad: desconfía, pero sin delirio',
            say: 'En el trastorno de personalidad paranoide la persona es muy desconfiada y celosa, pero no pierde el juicio de realidad. En el delirante está psicótica: tiene una certeza absoluta y falsa. Esa diferencia es clave.' },
          { t: 'Primero, descartar orgánico y tóxico', d: 'Como en todo cuadro psicótico',
            say: 'Y como en todo cuadro psicótico, se descartan antes los tóxicos y las causas médicas, como vimos en la clase de esquizofrenia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo del trastorno delirante',
      title: 'Cómo hablar y qué dar',
      cards: [
        { title: 'La relación', tag: 'Regla de oro', kind: 'key', items: [
          { t: 'No confrontar el delirio', d: 'Rompe la alianza',
            say: 'La persona no tiene conciencia de enfermedad, así que la alianza terapéutica es difícil. Nunca se confronta el delirio de forma agresiva, porque rompe la relación.' },
          { t: 'Tampoco validarlo', d: 'Escuchar el sufrimiento que causa',
            say: 'Pero tampoco se valida ni se refuerza. Se adopta una postura neutral y empática, centrada en el sufrimiento que la idea le produce, por ejemplo: no discuto lo que sientes, pero veo que esto te genera mucho desgaste.' },
        ] },
        { title: 'Tratamiento', tag: 'Fármacos y seguridad', kind: 'pharma', items: [
          { t: 'Antipsicótico atípico', d: 'Aripiprazol o risperidona',
            say: 'Se usan antipsicóticos atípicos, como aripiprazol o risperidona. La respuesta es variable, y por eso se hace seguimiento por psiquiatría.' },
          { t: 'Evaluar riesgo para terceros', d: 'Sobre todo en celos',
            say: 'En el tipo celotípico se evalúa el riesgo de agresión a la pareja y se protege a la persona en riesgo. Y se deriva al nivel secundario, a psiquiatría o al centro de salud mental comunitario.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'Cuatro psicosis, un reloj',
      head: ['Trastorno', 'Duración', 'Deterioro', 'Pronóstico'],
      rows: [
        { cells: ['Psicótico breve', '1 día a menos de 1 mes', 'Grave, pero se recupera todo', 'Excelente'],
          say: 'El psicótico breve: menos de un mes, florido, ligado a un estresor y con recuperación completa.' },
        { cells: ['Esquizofreniforme', '1 a 6 meses', 'Moderado a severo en el episodio', 'Reservado'],
          say: 'El esquizofreniforme: entre uno y seis meses, con síntomas iguales a la esquizofrenia y pronóstico reservado.' },
        { cells: ['Esquizofrenia', '6 meses o más', 'Severo, con abulia y afecto plano', 'Crónico'],
          say: 'La esquizofrenia: seis meses o más, con deterioro global y síntomas negativos.' },
        { cells: ['Trastorno delirante', '1 mes o más, a menudo años', 'Conservado fuera del delirio', 'Crónico; respuesta variable'],
          say: 'Y el delirante: un delirio no bizarro de más de un mes, con funcionamiento conservado, y un curso crónico con respuesta variable al fármaco.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del tipo de psicosis a su diagnóstico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Trabaja bien, convicción fija y sin voces', 'Trastorno delirante', 'Esquizofrenia'],
          say: 'Una convicción imposible, sin voces ni síntomas negativos, y con un trabajo normal: trastorno delirante. El error es llamarlo esquizofrenia.' },
        { cells: ['Convicción de infidelidad sin pruebas', 'Delirante celotípico; evaluar riesgo', 'Trastorno obsesivo o celos normales'],
          say: 'Convicción inamovible de infidelidad: delirante celotípico, y se evalúa el riesgo para la pareja.' },
        { cells: ['Convicción de enfermedad que los exámenes niegan', 'Delirante somático', 'Hipocondría o demencia'],
          say: 'Convicción de tener una enfermedad que ningún examen confirma, sin otras alteraciones: delirio somático.' },
        { cells: ['Desconfiado y celoso, sin pérdida de realidad', 'Personalidad paranoide', 'Trastorno delirante'],
          say: 'Desconfiado y rencoroso, pero sin una certeza delirante: personalidad paranoide. El error es llamarlo delirante.' },
        { cells: ['Psicosis florida tras una pérdida, 18 días, se recupera', 'Psicótico breve', 'Esquizofrenia'],
          say: 'Psicosis florida tras un estresor grave que se resuelve en menos de un mes: psicótico breve.' },
        { cells: ['Mismos síntomas de esquizofrenia por 3 meses', 'Esquizofreniforme', 'Esquizofrenia'],
          say: 'Síntomas de esquizofrenia que llevan solo tres meses: esquizofreniforme. Para esquizofrenia faltan seis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 47 años, ingeniero con buen desempeño, es traído por su hermana. Desde hace un año está convencido de que su esposa le es infiel con un compañero de gimnasio: revisa su teléfono, la sigue y la ha amenazado con «terminar con esto». Está bien vestido, es coherente y colaborador; niega escuchar voces, su ánimo es estable y se concentra sin problemas en su trabajo. La esposa teme por su seguridad.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Esquizofrenia paranoide; hospitalizar de inmediato por falta de crítica' },
        { letter: 'B', text: 'Trastorno delirante celotípico; evaluar riesgo de violencia hacia la pareja, indicar un antipsicótico atípico, no confrontar el delirio y derivar a psiquiatría' },
        { letter: 'C', text: 'Trastorno de personalidad paranoide; terapia de pareja y alta' },
        { letter: 'D', text: 'Trastorno psicótico breve; observar el cuadro por unos días' },
        { letter: 'E', text: 'Celos normales; confrontar con pruebas para que reconozca su error' },
      ],
      correct: 'B',
      explanation: 'Delirio sistematizado no bizarro de más de 1 mes, sin alucinaciones, desorganización ni síntomas negativos, con funcionamiento conservado: trastorno delirante, subtipo celotípico (síndrome de Otelo). Tiene riesgo alto de violencia hacia la pareja, por lo que se evalúa la seguridad. Se usa un antipsicótico atípico, se mantiene una actitud empática sin confrontar ni validar el delirio, y se deriva.',
      say: {
        stem: 'Un hombre de cuarenta y siete años, ingeniero con buen desempeño, es traído por su hermana. Desde hace un año está convencido de que su esposa le es infiel con un compañero del gimnasio: revisa su teléfono, la sigue y la ha amenazado. Está bien vestido, coherente y colaborador, niega voces, su ánimo es estable y rinde bien en el trabajo. La esposa teme por su seguridad.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: esquizofrenia con hospitalización; delirante celotípico con evaluación de riesgo, atípico, sin confrontar y derivación; personalidad paranoide con terapia de pareja; psicótico breve con observación; o celos normales con confrontación. Piénsalo.',
        answer: 'Es la B. Es un delirio de celos sistematizado, de un año, sin voces ni síntomas negativos y con funcionamiento conservado: trastorno delirante celotípico. Lo primero es el riesgo, porque este tipo se asocia a violencia contra la pareja. Se da un antipsicótico atípico, se escucha sin confrontar ni validar y se deriva. Confrontarlo con pruebas rompe la alianza, y el psicótico breve dura menos de un mes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 90',
      stem: 'Un paciente de 35 años está convencido que las vacunas contra la Covid-19 contienen un chip para rastrear a las personas y que hay un acuerdo entre Bill Gates y muchos de los gobiernos para controlar las mentes de la población, tal como lo ha hecho con muchas personas, a las que califica de «borregos». Cree que la mayoría de los médicos son parte de este complot, porque están financiados por las farmacéuticas y el Gobierno. Si bien se desenvuelve normalmente en su trabajo, ha tenido varios problemas con compañeros de trabajo y con sus familiares, cuando se toca el tema de las vacunas, en el que habla con gran vehemencia y certeza, criticando duramente a quienes le recomiendan vacunarse. También pierde mucho tiempo discutiendo sobre el tema en redes sociales. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esquizofrenia' },
        { letter: 'B', text: 'Trastorno delirante' },
        { letter: 'C', text: 'Trastorno del espectro autista en el adulto' },
        { letter: 'D', text: 'Trastorno bipolar' },
        { letter: 'E', text: 'Trastorno de personalidad paranoide' },
      ],
      correct: 'B',
      explanation: 'Trastorno delirante clásico, con un delirio sistematizado y afectación únicamente en esa área. No tiene alucinaciones ni síntomas negativos o primarios de esquizofrenia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de treinta y cinco años está convencido de que las vacunas contra el covid llevan un chip para rastrear personas, dentro de un complot de gobiernos y farmacéuticas en que participarían los médicos. Trabaja con normalidad, pero tiene conflictos con compañeros y familiares cuando se toca el tema, y discute mucho en redes sociales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esquizofrenia; trastorno delirante; autismo en el adulto; bipolar; o personalidad paranoide. Piénsalo.',
        answer: 'Es la B. Tiene un delirio sistematizado, de certeza total, y la afectación se limita a ese tema: trabaja normalmente. No hay alucinaciones ni síntomas negativos, así que no es esquizofrenia. Y la personalidad paranoide es la trampa: desconfía, pero no pierde el juicio de realidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 108',
      stem: 'Un paciente de 54 años está seguro de que su esposa lo engaña, lo que confirma con un cambio de actitud que ella ha tenido en el último tiempo. Además cree saber con quién lo engaña, ya que se ha encontrado con el sujeto en la calle y siempre mira para abajo. La esposa y los familiares niegan los hechos, pero están preocupados por lo que pasa. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno de personalidad esquizoide' },
        { letter: 'B', text: 'Esquizofrenia' },
        { letter: 'C', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'D', text: 'Trastorno delirante crónico' },
        { letter: 'E', text: 'Trastorno bipolar' },
      ],
      correct: 'D',
      explanation: 'Es un trastorno delirante crónico clásico, con delirio de celos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de cincuenta y cuatro años está seguro de que su esposa lo engaña, y lo confirma con un cambio de actitud de ella. Cree saber con quién, porque se ha topado con ese hombre en la calle y siempre mira hacia abajo. La esposa y la familia niegan los hechos, pero están preocupados.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: personalidad esquizoide; esquizofrenia; obsesivo compulsivo; trastorno delirante crónico; o bipolar. Piénsalo.',
        answer: 'Es la D. Es el delirio de celos: convicción fija, interpreta como pruebas hechos neutros, como que el hombre mire hacia abajo, y nadie logra convencerlo. Es el síndrome de Otelo. Como vimos, este subtipo exige evaluar el riesgo para la esposa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 17',
      stem: 'Una mujer de 35 años, sin antecedentes, consulta porque está segura de que todos sus compañeros de trabajo la seducen y la acosan, esto le ocurre desde hace aproximadamente 10 años y le ha traído problemas en su trabajo, por lo que ha sido despedida en otros trabajos. No refiere presentar problemas en otros ámbitos de su vida, tiene buena relación con familiares y amigos. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno de personalidad paranoide' },
        { letter: 'B', text: 'Trastorno de personalidad histriónico' },
        { letter: 'C', text: 'Trastorno delirante crónico' },
        { letter: 'D', text: 'Trastorno bipolar' },
        { letter: 'E', text: 'Trastorno de la personalidad esquizotípico' },
      ],
      correct: 'C',
      explanation: 'Si bien parece histriónica, ha perdido el juicio de realidad y además «está segura», por lo que es un trastorno delirante crónico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una mujer de treinta y cinco años, sin antecedentes, está segura de que todos sus compañeros de trabajo la seducen y la acosan. Le ocurre desde hace unos diez años, la han despedido de otros trabajos por esto, pero no tiene problemas en otros ámbitos y se lleva bien con su familia y sus amigos.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: personalidad paranoide; histriónica; trastorno delirante crónico; bipolar; o personalidad esquizotípica. Piénsalo.',
        answer: 'Es la C. Está segura de algo falso, que otros la seducen, y esa certeza la mantiene por diez años, con funcionamiento normal en el resto de su vida. Es un delirio erotomaníaco. La personalidad histriónica es la trampa: busca atención, pero no pierde el juicio de realidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 95',
      stem: 'Una paciente de 81 años, hace un año tiene la idea de padecer de VIH, por lo que se ha realizado múltiples exámenes, los que siempre han resultado negativo. A pesar de ello, ella continúa con la idea. Fuera de esto, su vida no ha sido mayormente afectada. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Demencia' },
        { letter: 'B', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'C', text: 'Trastorno delirante crónico' },
        { letter: 'D', text: 'Trastorno por hipocondría' },
        { letter: 'E', text: 'Depresión psicótica' },
      ],
      correct: 'C',
      explanation: 'Trastorno delirante crónico clásico, con delirio de enfermedad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una paciente de ochenta y un años tiene, desde hace un año, la idea de padecer de VIH. Se ha hecho múltiples exámenes, siempre negativos, y aun así continúa con la idea. Fuera de esto, su vida no ha sido mayormente afectada.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: demencia; trastorno obsesivo compulsivo; trastorno delirante crónico; hipocondría; o depresión psicótica. Piénsalo.',
        answer: 'Es la C. Es el subtipo somático: una convicción sobre una enfermedad que ninguna prueba logra desmentir, con el resto de la vida preservada. La hipocondría es la trampa, pero en ella la persona teme enfermar y puede dudar; aquí hay una certeza fija. Y sin otras alteraciones, no es demencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 71',
      stem: 'Una paciente de 46 años presenta conflictos frecuentes con distintas administraciones de su edificio, que se han extendido durante los últimos 10 años, y que ella atribuye al hecho de que vive sola y que, durante su jornada laboral, los conserjes y el personal del edificio aprovechan su ausencia para entrar a su departamento y utilizarlo como lugar de alimentación y para dormir y descansar en él sin su autorización. Comenta que las cámaras del edificio no han logrado captar estos hechos debido a la probable utilización de algún tipo de inhibidor de señal. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esquizofrenia' },
        { letter: 'B', text: 'Depresión con síntomas psicóticos' },
        { letter: 'C', text: 'Trastorno delirante crónico' },
        { letter: 'D', text: 'Trastorno de personalidad paranoide' },
        { letter: 'E', text: 'Trastorno de personalidad esquizoide' },
      ],
      correct: 'C',
      explanation: 'Tiene un delirio: ideas fuera de la realidad, de certeza absoluta, sistematizadas y crónicas. Es un trastorno delirante crónico clásico. No es un trastorno de personalidad paranoide, que es una persona muy desconfiada y celosa, pero sin pérdida del juicio de realidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una paciente de cuarenta y seis años tiene conflictos desde hace diez años con las administraciones de su edificio, porque cree que los conserjes y el personal entran a su departamento mientras trabaja, para comer y dormir. Dice que las cámaras no lo captan porque usarían algún inhibidor de señal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esquizofrenia; depresión con síntomas psicóticos; trastorno delirante crónico; personalidad paranoide; o personalidad esquizoide. Piénsalo.',
        answer: 'Es la C. Es un delirio sistematizado, con explicación para cada prueba en contra, como el inhibidor de señal, mantenido por años y sin otros síntomas. Es un delirio persecutorio crónico. La personalidad paranoide es la trampa: esa persona desconfía, pero no pierde el juicio de realidad, y esta paciente sí lo perdió.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un comerciante de 38 años sin antecedentes psiquiátricos pierde su local comercial en un incendio intencional. A los dos días comienza con agitación psicomotora, insomnio total, llanto incontrolable y afirmaciones de que «ve demonios que le ordenan caminar en círculos». Es hospitalizado y tratado transitoriamente con dosis bajas de risperidona. Al día 18 del cuadro, los síntomas psicóticos desaparecen por completo, encontrándose orientado, reflexivo y reincorporándose plenamente a sus actividades comerciales. ¿Cuál es el diagnóstico retrospectivo definitivo?',
      question: '¿Cuál es el diagnóstico retrospectivo definitivo?',
      options: [
        { letter: 'A', text: 'Esquizofrenia hebefrénica' },
        { letter: 'B', text: 'Trastorno psicótico breve con desencadenante grave' },
        { letter: 'C', text: 'Trastorno esquizofreniforme residual' },
        { letter: 'D', text: 'Trastorno de personalidad límite' },
        { letter: 'E', text: 'Trastorno bipolar en manía pura' },
      ],
      correct: 'B',
      explanation: 'Inicio brusco tras un estresor biográfico masivo, síntomas psicóticos floridos y resolución completa con restitución ad integrum a los 18 días, es decir, en menos de 1 mes: trastorno psicótico breve con desencadenante grave (antes psicosis reactiva breve). El esquizofreniforme requiere entre 1 y 6 meses, y la esquizofrenia al menos 6 meses.',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. Un comerciante de treinta y ocho años, sin antecedentes psiquiátricos, pierde su local en un incendio intencional. A los dos días tiene agitación, insomnio total, llanto incontrolable y dice ver demonios que le ordenan caminar en círculos. Lo hospitalizan y recibe risperidona en dosis baja. Al día dieciocho los síntomas desaparecen por completo y retoma sus actividades.',
        question: '¿Cuál es el diagnóstico retrospectivo definitivo?',
        options: 'Las opciones: esquizofrenia hebefrénica; psicótico breve con desencadenante grave; esquizofreniforme residual; personalidad límite; o manía pura. Piénsalo.',
        answer: 'Es la B. Aparece de golpe tras un estresor enorme, con síntomas floridos, y se resuelve del todo en dieciocho días: menos de un mes y con restitución completa. El esquizofreniforme dura de uno a seis meses, y la esquizofrenia, seis meses o más.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: psicosis no esquizofrénicas',
      cards: [
        { title: 'El tiempo', tag: 'Cronología', kind: 'key', items: [
          { t: 'Breve: menos de 1 mes', d: 'Sana del todo; esquizofreniforme: 1 a 6 meses',
            say: 'Cerremos con las reglas de oro. Si dura menos de un mes y la persona se recupera por completo, es psicótico breve. Entre uno y seis meses con síntomas de esquizofrenia, es esquizofreniforme. Desde seis meses, esquizofrenia.' },
          { t: 'Delirante: delirio solo, vida conservada', d: 'No bizarro, 1 mes o más',
            say: 'Y si hay solo un delirio sistematizado, no bizarro, de más de un mes, con funcionamiento conservado fuera del tema, es trastorno delirante.' },
        ] },
        { title: 'Conducta', tag: 'Cómo actuar', kind: 'alert', items: [
          { t: 'No confrontar ni validar el delirio', d: 'Escuchar el sufrimiento; atípico',
            say: 'En el trastorno delirante no se confronta el delirio ni se valida. Se escucha el sufrimiento y se indica un antipsicótico atípico.' },
          { t: 'Celotípico: evaluar riesgo para la pareja', d: 'Derivar a psiquiatría',
            say: 'El tipo celotípico exige evaluar el riesgo de violencia hacia la pareja. Si te llevas una sola idea de hoy: el diagnóstico de estas psicosis lo decide el tiempo y cuánto se conserva la vida de la persona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Psicosis no esquizofrénicas: del reloj al diagnóstico',
    root: N('start', 'Persona con psicosis', 'Estudio de tóxicos y orgánico negativo',
      'Una persona consulta con síntomas psicóticos. Con el estudio de tóxicos y causas médicas ya negativo, lo que decide el diagnóstico es el tiempo y cuánto se conserva su funcionamiento.',
      ['Menos de 1 mes, sana del todo', N('ok', 'Psicótico breve', 'Antipsicótico en dosis baja, poco tiempo',
        'Si el cuadro es florido, tras un estresor, dura menos de un mes y hay recuperación completa, es un psicótico breve. Se contiene en ambiente protegido, con antipsicótico a dosis baja por poco tiempo.')],
      ['De 1 a 6 meses, clínica de esquizofrenia', N('do', 'Esquizofreniforme', 'Seguimiento: puede evolucionar',
        'Con los síntomas de la esquizofrenia pero entre uno y seis meses, es esquizofreniforme. Si supera los seis meses, pasa a ser esquizofrenia, que se trata como vimos en la clase anterior.')],
      ['Solo un delirio, vida conservada', N('do', 'Trastorno delirante', 'No confrontar ni validar',
        'Con un delirio no bizarro de un mes o más, sin los demás síntomas de esquizofrenia y con buen funcionamiento, es un trastorno delirante. Se mantiene una actitud empática y se indica un antipsicótico atípico.',
        ['Subtipo celotípico', N('alert', 'Evaluar riesgo de violencia', 'Proteger a la pareja',
          'Si el delirio es de celos, el riesgo de agresión a la pareja es alto: se evalúa la seguridad de forma prioritaria.')],
        ['Todos los subtipos', N('refer', 'Derivar a psiquiatría', 'COSAM o nivel secundario',
          'En todos los casos se deriva a psiquiatría, al nivel secundario o al centro de salud mental comunitario.')],
      )],
    ),
  },
};
