// Clase 17.1 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-01). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (4.01.1.001) no tiene preguntas reales propias; la psiquiatría real del banco está bajo 5.01.1.xxx. De la búsqueda por tema se usaron:
//   Julio 2024 P174 (ISRS de primera línea), Diciembre 2025 P90 (adaptativo versus depresión mayor), Julio 2024 P146 (falla de ISRS a dosis máxima: cambio a dual),
//   Diciembre 2025 P75 (duración del mantenimiento), Julio 2015 P71 (depresión psicótica en adulto mayor: TEC).
// No usadas: Julio 2013 P174, Diciembre 2025 P158, Julio 2019 P129, Diciembre 2018 P120, Julio 2017 P63 (mismo punto: ISRS primera línea); Julio 2025 P88 (mismo punto que Julio 2024 P146);
//   Julio 2025 P155 y Julio 2016 P128 (mismo punto que Diciembre 2025 P90); preguntas de viraje maníaco con antidepresivo (se usan en psiq-02); Julio 2018 P166 y Julio 2025 P99 (depresión perinatal: tema de otra clase, y el enunciado trae texto sucio / riesgo de autodaño sin evaluar).
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno depresivo mayor: criterios DSM-5, escalas, ISRS y GES',
      say: 'Bienvenido. Hoy vemos el trastorno depresivo mayor, la enfermedad de salud mental que más se pregunta en el EUNACOM. Vamos a ver cómo se diagnostica, cómo se mide su gravedad, cómo se inicia y se sostiene el tratamiento con inhibidores selectivos de la recaptación de serotonina, y cuándo hay que derivar. Es una enfermedad frecuente, tratable y que se maneja en atención primaria, y por eso el médico general tiene que dominarla.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Del estrés a la depresión',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Estrés crónico', s: 'Cortisol sostenido' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Baja de BDNF', s: 'Factor neurotrófico' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Atrofia del hipocampo', s: 'Y de la corteza prefrontal' },
        { id: 'd', col: 1, row: 3, k: 'mech', t: 'Menos serotonina, noradrenalina, dopamina', s: 'Vías límbicas y frontales' },
        { id: 'e', col: 3, row: 2, k: 'alert', t: 'Síndrome depresivo', s: 'Ánimo, placer, energía' },
        { id: 'f', col: 4, row: 2, k: 'good', t: 'ISRS', s: 'Suben la serotonina sináptica' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'e' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'El estrés daña circuitos',
          say: 'Primero la idea de fondo: la depresión no es debilidad de carácter ni un duelo largo, es una alteración neurobiológica. El estrés crónico mantiene alto el cortisol, y eso baja un factor de crecimiento neuronal llamado BDNF. Resultado: atrofia del hipocampo y de la corteza prefrontal.' },
        { show: ['d', 'e'], note: 'Y faltan monoaminas',
          say: 'A eso se suma la hipótesis monoaminérgica: hay un déficit funcional de serotonina, noradrenalina y dopamina en los circuitos límbicos y frontales. De ahí salen el ánimo bajo, la pérdida del placer y la falta de energía.' },
        { show: ['f'], note: 'El ISRS actúa sobre la serotonina',
          say: 'Los fármacos de primera línea, los inhibidores selectivos de la recaptación de serotonina, bloquean la recaptación y suben la serotonina en la sinapsis. Pero la recuperación de los circuitos es lenta, y por eso el efecto tarda semanas. Esa latencia es una de las ideas más preguntadas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Una enfermedad frecuente y grave',
      cards: [
        { title: 'Magnitud', tag: 'Chile', kind: 'key', items: [
          { t: 'Prevalencia adulta cerca del 17%', d: 'Mujer a hombre, 2 a 1',
            say: 'En Chile, la depresión afecta a cerca de diecisiete por ciento de los adultos, y es el doble de frecuente en mujeres que en hombres.' },
          { t: 'Principal causa de discapacidad', d: 'Entre las enfermedades mentales',
            say: 'Es la primera causa de discapacidad por enfermedad mental en el mundo, y por eso tiene garantía explícita en salud.' },
        ] },
        { title: 'Por qué importa', tag: 'Riesgo', kind: 'alert', items: [
          { t: 'Riesgo de suicidio 20 veces mayor', d: 'Respecto a la población general',
            say: 'El riesgo de morir por suicidio es veinte veces mayor que en la población sin patología afectiva. Por eso en toda depresión se pregunta por suicidio, y eso lo vemos en detalle en la tercera clase de este bloque.' },
          { t: 'Comorbilidad somática frecuente', d: 'Coronaria, diabetes, accidente vascular',
            say: 'Además se asocia a enfermedad coronaria, diabetes y accidente cerebrovascular, y esas enfermedades también empeoran el pronóstico de la depresión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico DSM-5',
      title: 'Cinco de nueve por dos semanas',
      cards: [
        { title: 'Regla del diagnóstico', tag: 'Obligatorio', kind: 'key', items: [
          { t: 'Al menos 5 de 9 síntomas', d: 'Casi todos los días',
            say: 'Para un episodio depresivo mayor, el DSM cinco pide al menos cinco de nueve síntomas, casi todos los días, y que representen un cambio respecto a cómo era la persona antes.' },
          { t: 'Durante 2 semanas o más', d: 'Con deterioro funcional',
            say: 'Durante al menos dos semanas consecutivas, y con deterioro de su vida social o laboral.' },
          { t: 'Ánimo deprimido o anhedonia', d: 'Uno de los dos es obligatorio',
            say: 'Y uno de esos cinco tiene que ser ánimo deprimido o anhedonia, que es la pérdida de interés o de placer. Fíjate: una paciente puede no estar triste y aun así tener depresión si tiene anhedonia.' },
        ] },
        { title: 'Los otros síntomas', tag: 'Lista', kind: 'criteria', items: [
          { t: 'Peso y apetito', d: 'Cambio mayor al 5% en un mes',
            say: 'Pérdida o aumento de peso, mayor de cinco por ciento en un mes, o cambio del apetito.' },
          { t: 'Sueño, energía, psicomotricidad', d: 'Insomnio o hipersomnia; fatiga',
            say: 'Insomnio, a menudo de despertar precoz, o hipersomnia; fatiga; y agitación o enlentecimiento que otros pueden observar.' },
          { t: 'Culpa, concentración, muerte', d: 'Inutilidad, indecisión, ideas de muerte',
            say: 'Sentimientos de inutilidad o culpa excesiva, menos capacidad para concentrarse o decidir, y pensamientos recurrentes de muerte o ideación suicida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Antes de decir depresión',
      title: 'Tres cosas que hay que descartar',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Cumple cinco de nueve', s: 'Por dos semanas' },
        { id: 'b', col: 1, row: 0, k: 'q', t: '¿Causa médica o fármaco?', s: 'TSH, anemia, vitamina B12' },
        { id: 'c', col: 1, row: 2, k: 'q', t: '¿Manía o hipomanía previa?', s: 'Pregunta dirigida' },
        { id: 'd', col: 2, row: 1, k: 'alert', t: '¿Riesgo suicida?', s: 'Se pregunta directo' },
        { id: 'e', col: 3, row: 1, k: 'good', t: 'Depresión mayor', s: 'Se estratifica y se trata' },
        { id: 'f', col: 4, row: 2, k: 'trap', t: 'Si hubo manía: bipolar', s: 'No es ISRS en solitario' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'a', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'c', to: 'f', label: 'sí' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Causa médica o sustancias',
          say: 'Que cumpla los criterios no basta. Los síntomas no pueden explicarse por una sustancia, como alcohol o corticoides, ni por una enfermedad, como hipotiroidismo, anemia grave, déficit de vitamina B doce o lupus. Por eso se pide TSH y hemograma.' },
        { show: ['c', 'f'], note: 'Preguntar por euforia previa',
          say: 'Segundo, descartar un episodio de manía o hipomanía, aunque sea antiguo. Si existió, el diagnóstico cambia a trastorno bipolar, y el tratamiento también. Lo vemos en la próxima clase, y es una de las trampas favoritas del examen.' },
        { show: ['d', 'e'], note: 'Seguridad primero',
          say: 'Y en toda consulta por depresión se indaga activamente el riesgo suicida. Solo después de eso se estratifica la gravedad y se decide el tratamiento.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Subtipos',
      title: 'Cuatro formas de depresión',
      head: ['Subtipo', 'Clave clínica', 'Tratamiento'],
      rows: [
        { cells: ['Melancólica', 'Despertar precoz, peor en la mañana, sin reactividad', 'Dual, tricíclico o TEC si es grave'],
          say: 'La melancólica tiene anhedonia absoluta, el ánimo no reacciona a nada agradable, despierta al menos dos horas antes, está peor en la mañana, y hay enlentecimiento y baja de peso marcada. Responde mejor a antidepresivos duales, y en los casos graves a terapia electroconvulsiva.' },
        { cells: ['Atípica', 'Ánimo reactivo, hipersomnia, hiperfagia', 'ISRS; bupropión o IMAO si resiste'],
          say: 'La atípica es lo opuesto: el ánimo mejora con eventos positivos, y hay hipersomnia, aumento del apetito con ganancia de peso, pesadez en las extremidades llamada parálisis de plomo, y sensibilidad al rechazo. Se parte igual con un ISRS.' },
        { cells: ['Psicótica', 'Delirios de culpa, ruina o Cotard', 'Antidepresivo más antipsicótico, o TEC'],
          say: 'La psicótica trae delirios congruentes con el ánimo, de ruina, de culpa o nihilistas, como el síndrome de Cotard, o alucinaciones. Es una urgencia: se trata con antidepresivo más antipsicótico, o terapia electroconvulsiva, y suele requerir hospitalización.' },
        { cells: ['Estacional', 'Otoño e invierno, remite en primavera', 'Fototerapia matinal más ISRS'],
          say: 'La estacional aparece en otoño e invierno y remite en primavera. Se agrega fototerapia matinal a diez mil lux.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Gravedad',
      title: 'PHQ-9 y conducta',
      head: ['PHQ-9', 'Gravedad', 'Conducta'],
      rows: [
        { cells: ['5 a 9', 'Leve', 'Psicoeducación; control en 2-4 semanas'],
          say: 'El cuestionario de salud del paciente, el PHQ nueve, es la escala que usa la guía GES. De cinco a nueve puntos es depresión leve: psicoeducación, intervención psicosocial breve y control activo en dos a cuatro semanas.' },
        { cells: ['10 a 14', 'Moderada', 'Psicoterapia más ISRS; control cada 2 semanas'],
          say: 'De diez a catorce, moderada: ya se agrega tratamiento farmacológico con un ISRS más psicoterapia estructurada, con control cada dos semanas.' },
        { cells: ['15 a 19', 'Moderadamente grave', 'ISRS a dosis plena, psicoterapia, apoyo familiar'],
          say: 'De quince a diecinueve, moderadamente grave: ISRS a dosis plena, psicoterapia y apoyo de la familia, con apoyo de la consultoría de salud mental.' },
        { cells: ['20 a 27', 'Grave', 'Derivación urgente; evaluar hospitalizar'],
          say: 'De veinte a veintisiete, grave: se deriva con urgencia, y se evalúa hospitalizar sobre todo si hay riesgo suicida. Recuerda que el puntaje orienta, pero la psicosis o el riesgo suicida mandan por sobre la cifra.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Primera línea: los ISRS',
      cards: [
        { title: 'Los tres clásicos', tag: 'Fármacos', kind: 'pharma', items: [
          { t: 'Sertralina 50 a 200 mg al día', d: 'Cardiopatía isquémica y lactancia',
            say: 'La sertralina se parte con cincuenta miligramos en la mañana y puede subir hasta doscientos. Es el fármaco de elección en cardiopatía isquémica y durante la lactancia.' },
          { t: 'Escitalopram 10 a 20 mg al día', d: 'El más selectivo; pocas interacciones',
            say: 'El escitalopram, de diez a veinte miligramos, es el más selectivo y tiene pocas interacciones. Con dosis sobre veinte hay que cuidar el intervalo QT.' },
          { t: 'Fluoxetina 20 a 60 mg al día', d: 'Vida media larga',
            say: 'La fluoxetina, de veinte a sesenta miligramos, tiene vida media muy larga, lo que protege si el paciente olvida tomas, pero exige un lavado largo si hay que cambiarla.' },
        ] },
        { title: 'Lo que dices al paciente', tag: 'Educación', kind: 'alert', items: [
          { t: 'Efecto en 2 a 4 semanas', d: 'No suspender por ineficacia precoz',
            say: 'Explica que el efecto antidepresivo tarda entre dos y cuatro semanas. Si no se avisa, el paciente abandona en la primera semana creyendo que no sirve.' },
          { t: 'Molestias iniciales transitorias', d: 'Náuseas, cefalea, ansiedad',
            say: 'Y que los efectos adversos, como náuseas, dispepsia, cefalea o ansiedad transitoria, aparecen los primeros días y suelen ceder solos.' },
          { t: 'Benzodiacepinas no tratan la depresión', d: 'Nunca en monoterapia',
            say: 'Otra regla: las benzodiacepinas no tienen efecto antidepresivo y generan dependencia. Nunca en monoterapia para una depresión.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento',
      title: 'Qué hacer si no responde',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'ISRS a dosis terapéutica', s: 'Con control a 2 semanas' },
        { id: 'b', col: 1, row: 1, k: 'q', t: 'Reevaluar a 4 a 6 semanas', s: 'Adherencia y tolerancia' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Respuesta parcial, buena tolerancia', s: 'Subir al techo terapéutico' },
        { id: 'd', col: 3, row: 0, k: 'refer', t: 'Falla a dosis máxima', s: 'Cambiar de fármaco' },
        { id: 'e', col: 4, row: 0, k: 'mech', t: 'Otro ISRS o dual', s: 'Venlafaxina, duloxetina, otros' },
        { id: 'f', col: 2, row: 2, k: 'good', t: 'Remisión completa', s: 'Misma dosis 6 a 12 meses' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'b', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Se evalúa a las 4 a 6 semanas',
          say: 'Se parte con el ISRS y se controla a las dos semanas, y la respuesta real se evalúa entre las cuatro y las seis semanas, revisando antes de nada si el paciente de verdad toma el fármaco.' },
        { show: ['c', 'd', 'e'], note: 'Primero dosis, después cambio',
          say: 'Si hay respuesta parcial y buena tolerancia, el primer paso es subir la dosis hasta el techo terapéutico antes de rotar. Si falla a dosis máxima, o hay intolerancia, se cambia a otro ISRS o a un antidepresivo dual, como venlafaxina o duloxetina, o a uno multimodal, como bupropión o mirtazapina.' },
        { show: ['f'], note: 'Mantener tras la remisión',
          say: 'Y cuando llega la remisión completa, la regla de oro: se mantiene la misma dosis eficaz entre seis y doce meses en un primer episodio. Con tres o más episodios, el mantenimiento puede ser indefinido.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Otros antidepresivos',
      title: 'Segunda línea y perlas',
      head: ['Fármaco', 'Dosis', 'Perla'],
      rows: [
        { cells: ['Venlafaxina', '75 a 225 mg al día', 'Dual sobre 150 mg; vigilar presión'],
          say: 'La venlafaxina inhibe serotonina y noradrenalina, la segunda con dosis sobre ciento cincuenta miligramos. Sirve en melancolía y en dolor neuropático, pero hay que vigilar la presión arterial.' },
        { cells: ['Bupropión', '150 a 300 mg al día', 'Sin disfunción sexual; prohibido en epilepsia'],
          say: 'El bupropión no produce disfunción sexual ni ganancia de peso, y ayuda a dejar de fumar, pero está prohibido en epilepsia y en trastornos de la conducta alimentaria por el riesgo de convulsiones.' },
        { cells: ['Mirtazapina', '15 a 45 mg, de noche', 'Sedación y apetito; útil en ancianos'],
          say: 'La mirtazapina da sedación y aumenta mucho el apetito, por lo que es buena en el adulto mayor con insomnio y baja de peso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'GES y derivación',
      title: 'Qué se maneja y qué se deriva',
      cards: [
        { title: 'GES número 21', tag: 'Garantía', kind: 'key', items: [
          { t: 'Depresión desde los 15 años', d: 'Confirmación en 24 horas en APS',
            say: 'La depresión en personas de quince años y más está en el GES número veintiuno. La sospecha se confirma en atención primaria dentro de veinticuatro horas, y el tratamiento parte de inmediato.' },
          { t: 'ISRS y psicoterapia', d: 'Control presencial a 2 semanas',
            say: 'Inicio inmediato de psicoterapia y de un ISRS, con control presencial a las dos semanas para ver adherencia, tolerancia y seguridad.' },
        ] },
        { title: 'Derivar a nivel secundario', tag: 'Criterios', kind: 'alert', items: [
          { t: 'Riesgo suicida moderado o alto', d: 'O síntomas psicóticos',
            say: 'Se deriva de inmediato si hay riesgo suicida moderado o alto, o síntomas psicóticos.' },
          { t: 'Sospecha de bipolaridad', d: 'Antecedente de manía o hipomanía',
            say: 'Si hay sospecha de trastorno bipolar, por antecedente de manía o hipomanía.' },
          { t: 'Refractaria o con comorbilidad grave', d: 'Falla de 2 esquemas; abuso de sustancias',
            say: 'También si la depresión es refractaria, es decir, falló en dos esquemas bien indicados, si hay abuso de sustancias importante, o si es una depresión grave en embarazo o puerperio con rechazo alimentario.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la sospecha de depresión al mantenimiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Depresión sin psicosis ni riesgo', 'ISRS y psicoterapia', 'Benzodiacepina sola'],
          say: 'Depresión mayor sin psicosis ni riesgo alto: ISRS más psicoterapia en atención primaria. El error es dar benzodiacepinas solas, o un tricíclico, que ya no es de primera línea.' },
        { cells: ['Mejoría parcial, buena tolerancia', 'Subir la dosis', 'Cambiar de familia de entrada'],
          say: 'Si hay respuesta parcial y buena tolerancia, primero se sube la dosis; el cambio de fármaco viene después.' },
        { cells: ['ISRS a dosis máxima sin respuesta', 'Cambiar a dual', 'Seguir igual más tiempo'],
          say: 'Si ya está en dosis máxima y no hay respuesta, se cambia, por ejemplo a venlafaxina.' },
        { cells: ['Remisión completa', 'Mantener 6 a 12 meses', 'Suspender al mejorar'],
          say: 'Cuando el paciente mejora, no se suspende. Se mantiene la misma dosis seis a doce meses.' },
        { cells: ['Delirios de ruina o Cotard', 'Hospitalizar; TEC', 'Solo antidepresivo ambulatorio'],
          say: 'La depresión psicótica con rechazo alimentario es una urgencia: hospitalización y evaluación de terapia electroconvulsiva.' },
        { cells: ['Síntomas de menos de 2 semanas o estresor claro', 'Considerar adaptativo', 'Diagnosticar depresión mayor'],
          say: 'Y si el cuadro no cumple los cinco síntomas o el tiempo, y hay un gatillante claro, piensa en trastorno adaptativo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 41 años, profesora, sin antecedentes. Hace 6 semanas presenta tristeza persistente, llanto fácil, pérdida del interés, despertar a las 4 de la mañana con angustia, fatiga, baja de 4 kg y culpa excesiva. PHQ-9: 17. Niega ideas de muerte y no tiene antecedentes de euforia ni de hiperactividad. Examen físico normal.',
      question: '¿Cuál es la conducta inicial más adecuada en el CESFAM?',
      options: [
        { letter: 'A', text: 'Clonazepam y control en 3 meses' },
        { letter: 'B', text: 'Sertralina, psicoterapia, explicar la latencia y control en 2 semanas' },
        { letter: 'C', text: 'Hospitalización para terapia electroconvulsiva' },
        { letter: 'D', text: 'Reposo laboral sin fármacos hasta una segunda evaluación' },
        { letter: 'E', text: 'Amitriptilina más haloperidol' },
      ],
      correct: 'B',
      explanation: 'Cumple criterios de episodio depresivo mayor, moderadamente grave, con rasgos melancólicos y sin psicosis ni riesgo suicida. La conducta GES es ISRS más psicoterapia, educación sobre la latencia de 2 a 4 semanas y control a las 2 semanas. Las benzodiacepinas no tratan la depresión.',
      say: {
        stem: 'Una profesora de cuarenta y un años, sin antecedentes. Seis semanas con tristeza persistente, llanto, pérdida del interés, despertar a las cuatro de la mañana con angustia, fatiga, baja de cuatro kilos y culpa excesiva. El PHQ nueve da diecisiete. Niega ideas de muerte y no tiene antecedentes de euforia.',
        question: '¿Cuál es la conducta inicial más adecuada en el consultorio?',
        options: 'Las opciones: clonazepam con control en tres meses; sertralina, psicoterapia, explicar la latencia y control en dos semanas; hospitalización para terapia electroconvulsiva; reposo sin fármacos; o amitriptilina con haloperidol. Piénsalo.',
        answer: 'Es la B. Cumple los criterios de depresión mayor, moderadamente grave, sin psicosis ni riesgo suicida: ISRS, psicoterapia, educar sobre la latencia y control en dos semanas. La benzodiacepina no trata la depresión, la hospitalización y la terapia electroconvulsiva serían para psicosis o riesgo vital, y la amitriptilina con haloperidol son dosis tóxicas innecesarias.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 174',
      stem: 'Un paciente de 43 años consulta por un cuadro de 3 meses de evolución caracterizado por ánimo bajo, anhedonia, insomnio de conciliación y despertar precoz. Además, ha aumentado de peso y tiene pensamientos negativos e ideas recurrentes negativas sobre sí mismo, sin ideación suicida actual. ¿Cuál es el fármaco de elección para iniciar el tratamiento en este paciente?',
      question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Alprazolam' },
        { letter: 'B', text: 'Sertralina' },
        { letter: 'C', text: 'Quetiapina' },
        { letter: 'D', text: 'Carbonato de litio' },
        { letter: 'E', text: 'Amitriptilina' },
      ],
      correct: 'B',
      explanation: 'Es una depresión mayor, con algunos rasgos atípicos por el aumento de peso. Se trata preferentemente con ISRS, como la sertralina. Los tricíclicos ya no son de primera línea y las benzodiacepinas no tratan la depresión.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de cuarenta y tres años, tres meses con ánimo bajo, anhedonia, insomnio de conciliación y despertar precoz, aumento de peso y pensamientos negativos sobre sí mismo. Sin ideación suicida.',
        question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
        options: 'Las opciones: alprazolam; sertralina; quetiapina; carbonato de litio; o amitriptilina. Piénsalo.',
        answer: 'Es la B. Aunque el aumento de peso recuerde a una depresión atípica, la primera línea sigue siendo un ISRS, como la sertralina. La amitriptilina es un tricíclico, con más efectos adversos y más letal en sobredosis, el alprazolam no es antidepresivo, y la quetiapina y el litio son de otros trastornos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 90',
      stem: 'Una mujer de 45 años consulta por irritabilidad, ánimo triste y sensación de agobio de dos meses de evolución, iniciados tras la separación de su pareja. Refiere llanto ocasional, dificultad para dormir y disminución en su rendimiento laboral, aunque continúa asistiendo a su trabajo y mantiene sus actividades cotidianas. Refiere que se siente mejor cuando hace ejercicio y tiene actividades sociales, pero que se siente sola y triste cuando regresa a su casa. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Episodio depresivo mayor' },
        { letter: 'B', text: 'Trastorno adaptativo' },
        { letter: 'C', text: 'Trastorno conversivo' },
        { letter: 'D', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'E', text: 'Sana' },
      ],
      correct: 'B',
      explanation: 'Hay un gatillante claro y síntomas del ánimo, pero no alcanza los criterios de depresión mayor: conserva su trabajo y su vida, mejora con actividades y no tiene el cuadro completo. Es un trastorno adaptativo de tipo depresivo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de cuarenta y cinco años, dos meses con irritabilidad, ánimo triste y agobio tras separarse de su pareja, con llanto ocasional y dificultad para dormir. Sigue trabajando y mantiene sus actividades, se siente mejor con ejercicio y compañía, y más triste cuando vuelve sola a casa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: episodio depresivo mayor; trastorno adaptativo; trastorno conversivo; ansiedad generalizada; o sana. Piénsalo.',
        answer: 'Es la B. Tiene un gatillante claro y síntomas del ánimo, pero el ánimo reacciona, mantiene su funcionamiento y no completa los criterios de depresión mayor. Esa es la diferencia que se pregunta: la depresión mayor pide cinco síntomas durante dos semanas y deterioro marcado; el adaptativo, no. No está sana, porque hay malestar y baja de rendimiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 146',
      stem: 'Un hombre de 45 años consulta por ánimo deprimido, anhedonia, alteraciones del sueño y dificultades para concentrarse, los cuales han afectado su desempeño laboral y social durante los últimos 4 meses. No refiere antecedentes de episodios maníacos ni psicosis, pero sí un episodio depresivo mayor hace cinco años, tratado con éxito con fluoxetina. En esta ocasión, se inició tratamiento con escitalopram (20 mg/día) durante 4 semanas, pero no ha mostrado mejoría significativa en sus síntomas. No refiere efectos secundarios importantes con el medicamento y su función tiroidea y niveles de vitamina B12 y ácido fólico son normales. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis de escitalopram' },
        { letter: 'B', text: 'Cambiar el tratamiento a venlafaxina' },
        { letter: 'C', text: 'Iniciar terapia electroconvulsiva (TEC)' },
        { letter: 'D', text: 'Agregar un antipsicótico atípico como quetiapina' },
        { letter: 'E', text: 'Cambiar el tratamiento a fluoxetina' },
      ],
      correct: 'B',
      explanation: 'El escitalopram ya está a 20 mg, su dosis máxima, con buena tolerancia y sin causa médica. Al no haber respuesta, se cambia a un antidepresivo dual como la venlafaxina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de cuarenta y cinco años con depresión de cuatro meses, sin manía ni psicosis, con un episodio previo tratado con fluoxetina. Lleva cuatro semanas con escitalopram, veinte miligramos al día, sin mejoría y sin efectos adversos. La tiroides y la vitamina B doce son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar la dosis de escitalopram; cambiar a venlafaxina; terapia electroconvulsiva; agregar quetiapina; o cambiar a fluoxetina. Piénsalo.',
        answer: 'Es la B. Fíjate en el detalle: veinte miligramos es la dosis máxima de escitalopram, así que subirla no es posible, que es la tentación de la A. Falla a dosis máxima, buena tolerancia y sin causa médica: se cambia a un dual, como la venlafaxina. La terapia electroconvulsiva y la quetiapina son para depresión psicótica o refractaria, y otro ISRS es menos probable que ayude.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 75',
      stem: 'Un paciente de 25 años presenta tristeza, dificultades en su trabajo, sensación de culpa patológica e insomnio de conciliación y mantención, de seis semanas de evolución, por lo que inicia tratamiento con escitalopram 10 mg al día. Tres semanas después, refiere que su ánimo ha mejorado considerablemente y que ya no se siente triste ni culpable y que tampoco ha seguido con problemas para dormir. Comenta sentirse bien, similar a como estaba antes del inicio de estos síntomas. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender el tratamiento' },
        { letter: 'B', text: 'Disminuir la dosis de citalopram' },
        { letter: 'C', text: 'Mantener el tratamiento por 3 meses' },
        { letter: 'D', text: 'Mantener el tratamiento por 12 meses' },
        { letter: 'E', text: 'Cambiar el tratamiento a fluoxetina' },
      ],
      correct: 'D',
      explanation: 'Está en remisión, pero el fármaco se mantiene después de la remisión completa, por 6 a 12 meses en un primer episodio. De las alternativas, la única aceptable es 12 meses.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de veinticinco años con seis semanas de tristeza, culpa patológica e insomnio. Inicia escitalopram, diez miligramos al día. Tres semanas después está sin tristeza, sin culpa y durmiendo bien, como antes de enfermar.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender el tratamiento; disminuir la dosis; mantenerlo tres meses; mantenerlo doce meses; o cambiar a fluoxetina. Piénsalo.',
        answer: 'Es la D. Haber mejorado no es motivo para suspender: el tratamiento se mantiene a la misma dosis entre seis y doce meses tras la remisión. Es una pregunta difícil, porque la regla habla de seis a doce meses y de las alternativas solo doce meses es aceptable. Tres meses es muy poco y aumenta el riesgo de recaída.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 71',
      stem: 'Una paciente de 82 años, con antecedente de 2 intentos de suicidio previos, presenta un cuadro de ánimo bajo, irritabilidad, problemas de memoria. Su minimental es 27/30, su GDS (escala de depresión geriátrica) es de 12/15 y presenta ideas delirantes de daño. ¿Cuál es el tratamiento más adecuado?',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Terapia electroconvulsiva' },
        { letter: 'B', text: 'Iniciar sertralina' },
        { letter: 'C', text: 'Hospitalizar con mirtazapina' },
        { letter: 'D', text: 'Indicar clorpromazina' },
        { letter: 'E', text: 'Hospitalizar con amitriptilina' },
      ],
      correct: 'A',
      explanation: 'Es una depresión psicótica en una adulta mayor, con intentos de suicidio previos y riesgo vital. Es una urgencia que se maneja hospitalizada, y la terapia electroconvulsiva es la opción más segura y rápida. La amitriptilina y la clorpromazina son mala idea en el adulto mayor.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Una mujer de ochenta y dos años con dos intentos de suicidio previos, ánimo bajo, irritabilidad y problemas de memoria. El minimental da veintisiete sobre treinta, la escala de depresión geriátrica doce sobre quince, y tiene ideas delirantes de daño.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: terapia electroconvulsiva; iniciar sertralina; hospitalizar con mirtazapina; clorpromazina; o hospitalizar con amitriptilina. Piénsalo.',
        answer: 'Es la A. Con un minimental normal, las quejas de memoria no sugieren demencia, y las ideas delirantes con ánimo bajo orientan a una depresión psicótica. Con intentos previos y delirios, el riesgo es alto, y la terapia electroconvulsiva es la opción más segura y de respuesta más rápida. Sertralina sola no basta, y amitriptilina y clorpromazina son mala idea en el adulto mayor por sus efectos anticolinérgicos y cardiovasculares.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: depresión mayor',
      cards: [
        { title: 'Diagnóstico', tag: 'Criterios', kind: 'key', items: [
          { t: '5 de 9 por 2 semanas', d: 'Ánimo bajo o anhedonia obligatorio',
            say: 'Cerremos con las reglas de oro. La depresión mayor pide cinco de nueve síntomas por dos semanas, con ánimo deprimido o anhedonia obligatorios.' },
          { t: 'Descartar causa médica y manía', d: 'Y preguntar siempre por suicidio',
            say: 'Antes de tratar, se descarta causa médica, se pregunta por manía previa y se indaga el riesgo suicida.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'ISRS más psicoterapia', d: 'Efecto en 2 a 4 semanas',
            say: 'El tratamiento de primera línea es un ISRS más psicoterapia, explicando que el efecto tarda entre dos y cuatro semanas. Sin respuesta, primero se sube la dosis y luego se cambia.' },
          { t: 'Mantener 6 a 12 meses tras remisión', d: 'Psicosis o riesgo alto: derivar',
            say: 'Tras la remisión se mantiene seis a doce meses, y si hay psicosis, riesgo suicida alto o sospecha de bipolaridad, se deriva. Si te llevas una sola idea de hoy: la depresión se trata con ISRS, se espera la latencia, y no se suspende al mejorar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Depresión mayor: de la sospecha al mantenimiento',
    root: N('start', 'Ánimo bajo o anhedonia', 'Dos semanas o más',
      'Un paciente consulta por ánimo bajo o pérdida del interés. Partimos confirmando el diagnóstico y revisando la seguridad.',
      ['Siempre', N('do', 'Confirmar criterios y descartar', 'Causa médica, manía, suicidio',
        'Se verifican los cinco de nueve criterios, se piden TSH y hemograma, se pregunta por manía previa y se indaga activamente el riesgo suicida.',
        ['Psicosis, riesgo suicida alto o bipolar', N('refer', 'Derivar o hospitalizar', 'Antidepresivo más antipsicótico, o TEC',
          'Con delirios, riesgo suicida moderado o alto, o sospecha de bipolaridad, se deriva con urgencia y se evalúa hospitalizar.')],
        ['Sin esos datos', N('ok', 'ISRS más psicoterapia', 'Sertralina o escitalopram; control a 2 semanas',
          'Se inicia un ISRS con psicoterapia, se explica la latencia de dos a cuatro semanas y se controla a las dos semanas.',
          ['Sin respuesta a 4 a 6 semanas', N('do', 'Subir dosis; luego cambiar', 'Dual si falla a dosis máxima',
            'Si hay respuesta parcial se sube al techo terapéutico. Si falla a dosis máxima, se cambia a otro ISRS o a un dual.')],
          ['Remisión completa', N('ok', 'Mantener la misma dosis', '6 a 12 meses en el primer episodio',
            'Se mantiene el fármaco entre seis y doce meses, y en recurrencias puede ser indefinido.')],
        )],
      )],
    ),
  },
};
