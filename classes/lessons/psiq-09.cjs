// Clase 17.9 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-09). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.13.1.004) no trae preguntas reales; las de estrés postraumático están bajo 5.01.1.004 a 5.01.1.006. De la búsqueda por tema se usaron:
//   Enero 2023 P132 (asalto presenciado hace 2 semanas: estrés agudo), Julio 2025 P155 (accidente presenciado hace 2 semanas, solo ánimo e insomnio: adaptativo; la pregunta que dejó psiq-05),
//   Julio 2013 P86 (accidente presenciado hace 8 meses: TEPT), Julio 2017 P61 (pelea hace 4 meses con recuerdos y pesadillas desde hace 1 mes: TEPT), Agosto 2021 P10 (abuso sexual en la adolescencia, con disociación: TEPT),
//   Diciembre 2024 P67 (psicofármaco contraindicado en TEPT: benzodiacepinas).
// No usadas: Diciembre 2018 P35 (misma pregunta que Agosto 2021 P10).
// DESCARTADA: Diciembre 2022 P28 (asalto presenciado hace 2 semanas, síntomas hace 10 días): la clave del banco dice TEPT, lo que contradice el corte de 1 mes del libro y de Enero 2023 P132 (estrés agudo). No se enseña.
// Cuidado clínico: benzodiacepinas no se enseñan para el trauma agudo ni para el TEPT (libro y banco coinciden); el debriefing psicológico obligatorio e inmediato no se enseña como prevención del TEPT (se enseñan los primeros auxilios psicológicos).
//   La prazosina se enseña como la propone el libro, solo para pesadillas, con la precaución de la primera dosis (hipotensión); la evidencia es variable y no está en el banco.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Estrés agudo y estrés postraumático: el corte de un mes, ISRS, terapia centrada en el trauma y cero benzodiacepinas',
      say: 'Bienvenido. Hoy cerramos el bloque con el trauma: el estrés agudo y el estrés postraumático. En el examen se repiten tres ideas: el corte de un mes entre uno y otro, que el tratamiento es psicoterapia centrada en el trauma más un inhibidor selectivo de la recaptación de serotonina, y que las benzodiacepinas están desaconsejadas. Además, veremos cómo distinguirlos del trastorno adaptativo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Cuando el trauma queda grabado',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Evento traumático', s: 'Amenaza de muerte o violencia' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Amígdala hiperactiva', s: 'Alarma que no se apaga' },
        { id: 'c', col: 1, row: 3, k: 'mech', t: 'Corteza prefrontal medial débil', s: 'No frena la alarma' },
        { id: 'd', col: 2, row: 2, k: 'effect', t: 'Noradrenalina central alta', s: 'Sensibilización' },
        { id: 'e', col: 3, row: 2, k: 'alert', t: 'Revive y está en alerta', s: 'Pesadillas, sobresaltos, insomnio' },
        { id: 'f', col: 4, row: 2, k: 'trap', t: 'Evita todo recordatorio', s: 'Se perpetúa el miedo' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'a', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Alarma encendida, freno débil',
          say: 'Un trauma mayor altera el cerebro de forma persistente. La amígdala queda hiperactiva, como una alarma que no se apaga, y la corteza prefrontal medial, que debería frenarla, funciona menos.' },
        { show: ['d', 'e'], note: 'Revive y no se relaja',
          say: 'A esto se suma una sensibilización noradrenérgica central. El resultado es que el paciente revive el evento en recuerdos y pesadillas, y vive en hiperalerta, con sobresaltos e insomnio.' },
        { show: ['f'], note: 'Evitar mantiene el miedo',
          say: 'Y para no sentir eso, evita todo lo que se lo recuerde. Esa evitación impide procesar la memoria y perpetúa el trastorno, por eso la psicoterapia busca justamente reprocesar el recuerdo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Punto de partida',
      title: 'Criterio A: la exposición',
      cards: [
        { title: 'Qué cuenta como trauma', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Muerte, lesión grave o violencia sexual', d: 'Real o amenazada',
            say: 'Para hablar de estrés agudo o postraumático hace falta primero una exposición a la muerte, a una lesión grave o a violencia sexual, real o amenazada.' },
          { t: 'Vivida de cuatro maneras', d: 'Directa, presenciada, de un cercano, repetida',
            say: 'Puede ser vivida de forma directa, presenciada en persona, sabiendo que le ocurrió a un ser querido cercano, o por exposición repetida a detalles aversivos, como le pasa al personal de emergencias.' },
        ] },
        { title: 'Sin trauma, sin diagnóstico', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Un estrés cotidiano no basta', d: 'Pensar en trastorno adaptativo',
            say: 'Un estrés cotidiano, o un estresor sin amenaza vital, no cumple. Ahí se piensa en trastorno adaptativo, que vimos en la clase de distimia y adaptativo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica del TEPT',
      title: 'Cuatro grupos de síntomas',
      cards: [
        { title: 'Intrusión y evitación', tag: 'Grupos 1 y 2', kind: 'key', items: [
          { t: 'Intrusión: recuerdos, pesadillas, flashbacks', d: 'Revive el evento como presente',
            say: 'El primer grupo es la intrusión: recuerdos angustiosos involuntarios, pesadillas repetitivas y flashbacks, que son reacciones disociativas en que el paciente siente o actúa como si el trauma estuviera ocurriendo ahora. También hay malestar intenso ante recordatorios.' },
          { t: 'Evitación persistente', d: 'Recuerdos, lugares, personas, conversaciones',
            say: 'El segundo es la evitación persistente de recuerdos, pensamientos y sentimientos del trauma, y de lugares, personas o conversaciones que se lo recuerden.' },
        ] },
        { title: 'Ánimo y alerta', tag: 'Grupos 3 y 4', kind: 'criteria', items: [
          { t: 'Cognición y ánimo negativos', d: 'Culpa, desapego, anhedonia, amnesia',
            say: 'El tercero son las alteraciones negativas del pensamiento y del ánimo: amnesia del evento, creencias exageradas como que el mundo es totalmente peligroso, culpa desproporcionada, anhedonia, desapego de los demás y restricción afectiva.' },
          { t: 'Hiperalerta y reactividad', d: 'Sobresalto, irritabilidad, insomnio',
            say: 'Y el cuarto es la hiperalerta: hipervigilancia, sobresalto exagerado ante ruidos menores, irritabilidad o arrebatos de furia, problemas de concentración e insomnio grave.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El reloj: tres días, un mes',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Trauma', s: 'Día cero' },
        { id: 'b', col: 1, row: 2, k: 'q', t: 'Síntomas desde 3 días', s: 'Hasta 1 mes' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Estrés agudo', s: 'Entre 3 días y 1 mes' },
        { id: 'd', col: 2, row: 3, k: 'alert', t: 'Pasa de 1 mes', s: 'Más de 30 días' },
        { id: 'e', col: 3, row: 3, k: 'alert', t: 'TEPT', s: 'Más de 1 mes' },
        { id: 'f', col: 4, row: 3, k: 'trap', t: 'Crónico o retardado', s: 'Más de 3 meses; inicio tardío' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'Si persisten' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Estrés agudo: hasta 1 mes',
          say: 'El estrés agudo dura mínimo tres días y máximo un mes desde el trauma. Suele tener un marcado componente disociativo al comienzo, con aturdimiento y sensación de irrealidad.' },
        { show: ['d', 'e'], note: 'Más de 1 mes: TEPT',
          say: 'Cuando los síntomas pasan de un mes, el diagnóstico es estrés postraumático. Este corte es el dato más preguntado de la clase.' },
        { show: ['f'], note: 'Cronicidad y expresión retardada',
          say: 'Se habla de TEPT crónico si pasa de tres meses, y de expresión retardada si el cuadro completo aparece pasados seis meses del trauma. Una pregunta real muestra a un paciente que empieza con recuerdos y pesadillas un mes después de una pelea.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'Estrés agudo frente a TEPT',
      head: ['Parámetro', 'Estrés agudo', 'TEPT'],
      rows: [
        { cells: ['Duración', '3 días a 1 mes', 'Más de 1 mes'],
          say: 'La duración es la clave: estrés agudo, de tres días a un mes. Estrés postraumático, más de un mes.' },
        { cells: ['Clínica', 'Disociación, aturdimiento, irrealidad', 'Los 4 grupos de síntomas'],
          say: 'El estrés agudo destaca por el componente disociativo inicial. El postraumático muestra los cuatro grupos: intrusión, evitación, ánimo negativo e hiperalerta.' },
        { cells: ['Intervención inicial', 'Primeros auxilios psicológicos y red', 'TCC centrada en trauma o EMDR, más ISRS'],
          say: 'En el estrés agudo, primeros auxilios psicológicos y apoyo de la red. En el postraumático, psicoterapia centrada en el trauma más un ISRS.' },
        { cells: ['Fármacos', 'Por lo general ninguno; sin benzodiacepinas', 'ISRS; prazosina si hay pesadillas'],
          say: 'Estrés agudo: generalmente no se requieren psicofármacos, y nunca benzodiacepinas. Postraumático: ISRS, y prazosina si las pesadillas persisten.' },
        { cells: ['Error frecuente', 'Clonazepam o forzar relatar el trauma', 'Minimizar los flashbacks'],
          say: 'Los errores son dar clonazepam o forzar al paciente a contar el trauma, y minimizar los flashbacks como recuerdos normales.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase aguda',
      title: 'Primeros auxilios psicológicos',
      cards: [
        { title: 'Qué sí', tag: 'Recomendado', kind: 'key', items: [
          { t: 'Seguridad física y escucha', d: 'Sin presionar a contar',
            say: 'Tras el evento, se asegura primero la seguridad física, se escucha sin invadir y se facilita el apoyo de la familia y de la red. Esos son los primeros auxilios psicológicos.' },
          { t: 'Seguimiento cercano', d: 'Vigilar si persisten los síntomas',
            say: 'Y se hace seguimiento, porque si los síntomas persisten más allá del mes, hay que reevaluar para estrés postraumático.' },
        ] },
        { title: 'Qué no', tag: 'Desaconsejado', kind: 'alert', items: [
          { t: 'Debriefing psicológico obligatorio', d: 'Individual e inmediato',
            say: 'El debriefing psicológico individual, inmediato y obligatorio está desaconsejado, porque puede retraumatizar a la víctima. No previene el trastorno.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento del TEPT',
      title: 'Psicoterapia, ISRS y pesadillas',
      cards: [
        { title: 'Primera línea', tag: 'Psicoterapia y ISRS', kind: 'pharma', items: [
          { t: 'TCC del trauma o EMDR', d: 'Reprocesa la memoria traumática',
            say: 'La psicoterapia de primera línea es la terapia cognitivo-conductual centrada en el trauma, o la desensibilización y reprocesamiento por movimientos oculares, EMDR. Permiten reprocesar las memorias traumáticas.' },
          { t: 'ISRS: sertralina, paroxetina', d: 'También venlafaxina',
            say: 'El fármaco de primera línea es un inhibidor de la recaptación de serotonina: sertralina de cincuenta a ciento cincuenta miligramos, paroxetina de veinte a cuarenta, o venlafaxina. Reducen la intrusión, la ansiedad y la disforia.' },
        ] },
        { title: 'Pesadillas persistentes', tag: 'Prazosina', kind: 'key', items: [
          { t: 'Prazosina al acostarse', d: '1 a 5 mg, dosis baja al inicio',
            say: 'Si persisten las pesadillas traumáticas, el libro propone la prazosina, un antagonista alfa uno, de uno a cinco miligramos al acostarse. Se parte con dosis baja, porque puede producir hipotensión con la primera dosis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Contraindicación de oro',
      title: 'Benzodiacepinas: no en trauma',
      cards: [
        { title: 'Por qué no', tag: 'Desaconsejadas', kind: 'alert', items: [
          { t: 'No previenen el TEPT', d: 'Ni en trauma agudo',
            say: 'Las benzodiacepinas están desaconsejadas en el trauma agudo y en el estrés postraumático. No previenen el trastorno, aunque calmen en el momento.' },
          { t: 'Interfieren con la terapia', d: 'Frenan la extinción del miedo',
            say: 'Además potencian el condicionamiento del miedo e interfieren con la extinción que busca la psicoterapia, y tienen alto riesgo de dependencia en pacientes traumatizados.' },
        ] },
        { title: 'Lo que cae en el examen', tag: 'Banco real', kind: 'key', items: [
          { t: '«Psicofármaco contraindicado»', d: 'La respuesta: benzodiacepinas',
            say: 'Una pregunta real del banco lo plantea tal cual: cuál psicofármaco está contraindicado en el estrés postraumático, y la respuesta son las benzodiacepinas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial fino',
      title: 'Cuando se parece pero no es TEPT',
      cards: [
        { title: 'Faltan los grupos de síntomas', tag: 'Adaptativo', kind: 'alert', items: [
          { t: 'Solo ánimo, insomnio, concentración', d: 'Sin intrusión ni hiperalerta',
            say: 'Si tras un estresor hay tristeza, insomnio y mala concentración, pero faltan la intrusión, la evitación y la hiperalerta, es un trastorno adaptativo. Es el caso de una pregunta real de dos mil veinticinco.' },
          { t: 'Con intrusión, evitación e hiperalerta', d: 'Eso es estrés agudo o TEPT',
            say: 'En cambio, si hay angustia, irritabilidad, insomnio e hiperalerta tras el trauma, depende del tiempo: menos de un mes, estrés agudo; más de un mes, TEPT.' },
        ] },
        { title: 'Otros cuadros', tag: 'No confundir', kind: 'key', items: [
          { t: 'Pánico y depresión', d: 'Crisis sin trauma, o ánimo sin trauma',
            say: 'El pánico da crisis sin relación con un trauma, y la depresión mayor no tiene reexperimentación. Y ojo con la evitación: que haya evitación no hace al diagnóstico, hace falta el trauma.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la exposición a un trauma al tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Trauma hace 2 semanas, hiperalerta', 'Estrés agudo', 'TEPT'],
          say: 'Trauma hace dos semanas con angustia, insomnio e hiperalerta: estrés agudo. El error es llamarlo estrés postraumático, porque aún no pasa el mes.' },
        { cells: ['Trauma hace 8 meses, evita y pesadillas', 'TEPT', 'Estrés agudo o adaptativo'],
          say: 'Trauma hace ocho meses con evitación, pesadillas e inquietud: TEPT. El estrés agudo ya no cabe.' },
        { cells: ['Estresor sin intrusión ni hiperalerta', 'Trastorno adaptativo', 'Estrés agudo'],
          say: 'Presenció algo grave pero solo tiene ánimo bajo e insomnio: trastorno adaptativo.' },
        { cells: ['Evento reciente, paciente angustiado', 'Primeros auxilios psicológicos', 'Benzodiacepina o debriefing'],
          say: 'Evento reciente: primeros auxilios psicológicos. El error es la benzodiacepina o el debriefing obligatorio.' },
        { cells: ['TEPT confirmado', 'Psicoterapia centrada en trauma más ISRS', 'Benzodiacepinas'],
          say: 'TEPT confirmado: terapia centrada en el trauma más un ISRS. Las benzodiacepinas son la respuesta incorrecta.' },
        { cells: ['Pesadillas persistentes', 'Prazosina asociada', 'Diazepam al acostarse'],
          say: 'Si las pesadillas persisten pese al tratamiento, se puede asociar prazosina. El diazepam nocturno es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 35 años, cajera de banco, consulta 4 meses después de un asalto armado en que la apuntaron en la cabeza durante 20 minutos. No logra dormir por pesadillas en que revive el arma en su frente; despierta gritando y sudorosa. Se sobresalta con cualquier ruido metálico o frenazo. Renunció a su trabajo, evita salir sola y ver noticias, y se siente «desconectada de sus hijos, como muerta por dentro».',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Clonazepam cada 8 horas por tiempo indefinido' },
        { letter: 'B', text: 'Psicoterapia centrada en el trauma más un ISRS; evaluar prazosina si persisten las pesadillas' },
        { letter: 'C', text: 'Debriefing psicológico obligatorio e inmediato' },
        { letter: 'D', text: 'Haloperidol por ideas persecutorias' },
        { letter: 'E', text: 'Solo reposo laboral y seguimiento' },
      ],
      correct: 'B',
      explanation: 'TEPT crónico: evento con riesgo vital, más de 1 mes (4 meses) y los 4 grupos de síntomas (intrusión, evitación, ánimo negativo y desapego, hiperalerta). Primera línea: TCC centrada en el trauma o EMDR, más un ISRS (sertralina desde 50 mg); si persisten pesadillas severas, evaluar prazosina nocturna. Las benzodiacepinas están desaconsejadas.',
      say: {
        stem: 'Una mujer de treinta y cinco años, cajera de banco, consulta cuatro meses después de un asalto en que la apuntaron en la cabeza durante veinte minutos. No duerme por pesadillas en que revive el arma, despierta gritando y sudorosa, y se sobresalta con cualquier ruido metálico. Renunció a su trabajo, evita salir sola y ver noticias, y se siente desconectada de sus hijos, como muerta por dentro.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: clonazepam indefinido; psicoterapia centrada en el trauma más un ISRS, con prazosina si persisten las pesadillas; debriefing obligatorio; haloperidol; o solo reposo. Piénsalo.',
        answer: 'Es la B. Evento con riesgo vital, más de un mes de evolución y los cuatro grupos de síntomas: TEPT crónico. Se trata con psicoterapia centrada en el trauma y un ISRS, y se evalúa prazosina para las pesadillas. El clonazepam es el error clásico, el debriefing llega tarde y no corresponde, y no hay síntomas psicóticos que justifiquen haloperidol.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 132',
      stem: 'Paciente que presenció un asalto hace 2 semanas, ahora con angustia, irritabilidad, insomnio y estado de hiperalerta. ¿Diagnóstico más probable?',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno por estrés postraumático (TEPT)' },
        { letter: 'B', text: 'Trastorno adaptativo con ansiedad' },
        { letter: 'C', text: 'Trastorno por estrés agudo' },
        { letter: 'D', text: 'Trastorno de pánico' },
        { letter: 'E', text: 'Trastorno depresivo mayor' },
      ],
      correct: 'C',
      explanation: 'Trastorno por estrés agudo: trauma presenciado hace 2 semanas, con síntomas de hiperalerta e irritabilidad, es decir dentro del primer mes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente presenció un asalto hace dos semanas y ahora tiene angustia, irritabilidad, insomnio y estado de hiperalerta.',
        question: '¿Diagnóstico más probable?',
        options: 'Las opciones: estrés postraumático; adaptativo con ansiedad; estrés agudo; pánico; o depresión mayor. Piénsalo.',
        answer: 'Es la C. Hay un trauma presenciado y síntomas de hiperalerta, pero llevan dos semanas, menos de un mes: estrés agudo. El estrés postraumático exige más de un mes. El adaptativo sería la trampa si el estresor no fuera una amenaza vital.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 155',
      stem: 'Hombre de 30 años que presenció un accidente de tránsito grave en que su mejor amigo resultó herido de gravedad. Desde entonces, hace 2 semanas, presenta insomnio, tristeza, dificultad de concentración en el trabajo y anhedonia. Sin ideación suicida. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno de pánico' },
        { letter: 'B', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'C', text: 'Trastorno adaptativo' },
        { letter: 'D', text: 'Depresión mayor' },
        { letter: 'E', text: 'Trastorno de estrés agudo' },
      ],
      correct: 'C',
      explanation: 'Trastorno adaptativo: síntomas emocionales o conductuales dentro de los 3 meses de un estresor identificable (el accidente del amigo), con deterioro funcional, pero sin cumplir criterios de depresión mayor. Se espera resolución espontánea.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de treinta años presenció un accidente de tránsito grave en que su mejor amigo resultó gravemente herido. Desde entonces, hace dos semanas, tiene insomnio, tristeza, dificultad para concentrarse en el trabajo y anhedonia. No tiene ideación suicida.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: pánico; ansiedad generalizada; trastorno adaptativo; depresión mayor; o estrés agudo. Piénsalo.',
        answer: 'Es la C. Hay un estresor identificable, y los síntomas son de ánimo, sueño y concentración, sin intrusión, evitación ni hiperalerta de trauma, y sin cumplir criterios de depresión mayor: trastorno adaptativo. El estrés agudo es la trampa, porque presenció un accidente, pero le faltan los síntomas característicos del trauma. Compara con la pregunta anterior, donde sí había hiperalerta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 86',
      stem: 'Un paciente de 24 años, sin antecedentes, consulta porque hace ocho meses mientras esperaba transporte colectivo, presenció un accidente automovilístico con resultados fatales, desde entonces intenta no acercarse mucho a la calle y cada vez que está en un paradero se encuentra muy inquieto, además refiere que le cuesta conciliar el sueño ya que presenta pesadillas frecuentemente. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno por estrés post traumático' },
        { letter: 'B', text: 'Trastorno de ansiedad' },
        { letter: 'C', text: 'Trastorno evitativo' },
        { letter: 'D', text: 'Trastorno por estrés agudo' },
        { letter: 'E', text: 'Trastorno adaptativo' },
      ],
      correct: 'A',
      explanation: 'Es un trastorno de estrés postraumático de libro, y lleva más de 4 semanas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de veinticuatro años presenció hace ocho meses un accidente automovilístico fatal mientras esperaba transporte. Desde entonces evita acercarse a la calle, se pone muy inquieto en un paradero y tiene dificultad para dormir por pesadillas frecuentes.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: estrés postraumático; trastorno de ansiedad; trastorno evitativo; estrés agudo; o trastorno adaptativo. Piénsalo.',
        answer: 'Es la A. Hay un trauma presenciado, evitación, hiperalerta y pesadillas, con ocho meses de evolución: mucho más que un mes. Por eso no es estrés agudo. Fíjate que el dato del tiempo manda en la decisión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 61',
      stem: 'Un paciente de 50 años, presentó una pelea con su vecino hace 4 meses y desde hace un mes comienza con recuerdos del incidente, asociado a pesadillas recurrentes. En las últimas semanas evita pasar por fuera de la casa de su vecino por miedo, y su familia refiere que se encuentra con ánimo bajo. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno adaptativo' },
        { letter: 'B', text: 'Trastorno de estrés postraumático' },
        { letter: 'C', text: 'Depresión reactiva' },
        { letter: 'D', text: 'Depresión psicótica' },
        { letter: 'E', text: 'Trastorno de ansiedad generalizada' },
      ],
      correct: 'B',
      explanation: 'Es un trastorno de estrés postraumático clásico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de cincuenta años tuvo una pelea con su vecino hace cuatro meses. Desde hace un mes tiene recuerdos del incidente con pesadillas recurrentes. En las últimas semanas evita pasar frente a la casa del vecino por miedo, y su familia lo ve con ánimo bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: adaptativo; estrés postraumático; depresión reactiva; depresión psicótica; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la B. Hay recuerdos intrusivos, pesadillas y evitación con más de un mes de evolución: estrés postraumático. Los síntomas pueden empezar semanas después del evento. El ánimo bajo es una consecuencia, y por eso la depresión reactiva o el adaptativo son la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 10',
      stem: 'Una paciente de 52 años, con antecedente de abuso sexual reiterado por un familiar, entre los 12 y los 15 años, del que aún mantiene recuerdos y pesadillas, refiere episodios de algunos días de duración ánimo irritable y lábil, asociada a ira y peleas con sus familiares, con llanto y agresividad. En ocasiones, presenta episodios de hasta dos días de duración de descontrol y rabia, en los que rompe ropa y electrodomésticos de su marido. Estos episodios le traen problemas con sus cercanos y, en algunas ocasiones, son muy intensos, en especial cuando se expone a conversaciones relacionadas con el tema, en los que llora, siente intensa angustia, grita e incluso ha presentado momentos en que actúa como una niña, con lenguaje y entonación de una menor de edad. Estos episodios cursan con amnesia de lo sucedido. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno bipolar' },
        { letter: 'B', text: 'Trastorno delirante' },
        { letter: 'C', text: 'Trastorno esquizoafectivo' },
        { letter: 'D', text: 'Trastorno conversivo' },
        { letter: 'E', text: 'Trastorno de estrés postraumático' },
      ],
      correct: 'E',
      explanation: 'Es un trastorno de estrés postraumático con síntomas disociativos: trauma sexual en la adolescencia, recuerdos y pesadillas, episodios desencadenados por recordatorios, con amnesia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una paciente de cincuenta y dos años, con abuso sexual repetido por un familiar en la adolescencia, aún tiene recuerdos y pesadillas. Presenta episodios de irritabilidad, ira y llanto, a veces con descontrol de hasta dos días. Son más intensos cuando se habla del tema, y a veces actúa como una niña y luego no lo recuerda.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: bipolar; trastorno delirante; esquizoafectivo; conversivo; o estrés postraumático. Piénsalo.',
        answer: 'Es la E. Hay un trauma sexual, con recuerdos, pesadillas, reactividad ante recordatorios y episodios disociativos con amnesia: estrés postraumático. Fíjate que el estrés postraumático puede persistir por décadas, y que la irritabilidad y labilidad no son un trastorno bipolar, porque se gatillan por el recuerdo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 67',
      stem: 'Psicofármaco contraindicado en trastorno de estrés post traumático',
      question: 'Psicofármaco contraindicado en trastorno de estrés post traumático',
      options: [
        { letter: 'A', text: 'Benzodiazepinas' },
        { letter: 'B', text: 'ISRS' },
        { letter: 'C', text: 'Tricíclicos' },
        { letter: 'D', text: 'Antipsicóticos típicos' },
        { letter: 'E', text: 'Antipsicóticos atípicos' },
      ],
      correct: 'A',
      explanation: 'Las benzodiacepinas están contraindicadas en el estrés postraumático: no previenen el trastorno e interfieren con la psicoterapia de reprocesamiento.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Pregunta cuál psicofármaco está contraindicado en el trastorno de estrés postraumático.',
        question: 'Psicofármaco contraindicado en trastorno de estrés postraumático',
        options: 'Las opciones: benzodiacepinas; ISRS; tricíclicos; antipsicóticos típicos; o antipsicóticos atípicos. Piénsalo.',
        answer: 'Es la A. Las benzodiacepinas no previenen el estrés postraumático e interfieren con el reprocesamiento del trauma en la psicoterapia, además de dar dependencia. Los ISRS son justamente la primera línea. Es el dato más seguro de toda la clase.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: estrés agudo y TEPT',
      cards: [
        { title: 'Diagnóstico', tag: 'El reloj', kind: 'key', items: [
          { t: 'Trauma más tiempo', d: '3 días a 1 mes agudo; luego TEPT',
            say: 'Cerremos con las reglas de oro. Primero tiene que haber un trauma. Entre tres días y un mes, estrés agudo. Más de un mes, estrés postraumático, con intrusión, evitación, ánimo negativo e hiperalerta.' },
          { t: 'Sin síntomas de trauma: adaptativo', d: 'Ánimo bajo e insomnio solos',
            say: 'Y si falta la intrusión, la evitación y la hiperalerta, piensa en trastorno adaptativo.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'Aguda: apoyo, sin benzodiacepinas ni debriefing', d: 'Primeros auxilios psicológicos',
            say: 'En la fase aguda, primeros auxilios psicológicos, sin benzodiacepinas ni debriefing obligatorio.' },
          { t: 'TEPT: psicoterapia de trauma más ISRS', d: 'Prazosina si hay pesadillas',
            say: 'En el estrés postraumático, psicoterapia centrada en el trauma más un ISRS, con prazosina si persisten las pesadillas. Si te llevas una sola idea de hoy: el corte es un mes, y las benzodiacepinas no tratan el trauma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma: del tiempo transcurrido al tratamiento',
    root: N('start', 'Persona expuesta a un trauma', 'Muerte, lesión grave o violencia sexual',
      'Alguien vivió o presenció una amenaza de muerte, una lesión grave o una violencia sexual y consulta con síntomas. Lo primero que miramos es cuánto tiempo ha pasado y qué síntomas tiene.',
      ['Menos de 1 mes, con hiperalerta o intrusión', N('do', 'Estrés agudo', 'Entre 3 días y 1 mes',
        'Entre tres días y un mes, con síntomas del trauma y a veces disociación: estrés agudo. Se ofrecen primeros auxilios psicológicos y se evita la benzodiacepina y el debriefing obligatorio.',
        ['Persisten más de 1 mes', N('ok', 'Reevaluar como TEPT', 'Psicoterapia más ISRS',
          'Si los síntomas persisten pasado el mes, se reevalúa y se diagnostica estrés postraumático, con psicoterapia centrada en el trauma más un ISRS.')],
      )],
      ['Más de 1 mes, con los 4 grupos', N('ok', 'TEPT', 'Intrusión, evitación, ánimo, hiperalerta',
        'Es estrés postraumático. El tratamiento combina psicoterapia centrada en el trauma o EMDR con un ISRS, sertralina o paroxetina.',
        ['Pesadillas persistentes', N('ok', 'Asociar prazosina', 'Dosis baja al acostarse',
          'Si las pesadillas persisten, se asocia prazosina al acostarse, partiendo con dosis baja. Nunca benzodiacepinas.')],
      )],
      ['Estresor, pero solo ánimo e insomnio', N('refer', 'Trastorno adaptativo', 'Sin intrusión ni hiperalerta',
        'Si hay un estresor pero faltan los síntomas característicos del trauma, el diagnóstico es un trastorno adaptativo, como vimos en la clase de distimia.')],
    ),
  },
};
